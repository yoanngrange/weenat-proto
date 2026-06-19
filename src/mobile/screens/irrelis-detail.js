import { pushDetail, popDetail } from '../nav.js'
import { showSheet, showToast }  from '../ui.js'
import { plots }                 from '../../data/plots.js'

// ─── Config ──────────────────────────────────────────────────────────────────

export function hasIrrelis(plot) {
  return plot.integrations?.some(i => i.startsWith('IRRÉ-LIS')) ?? false
}

const CONFIG_KEY = 'weenat-irrelis-config'

export function getIrrelisConfig(plotId) {
  try {
    const all = JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}')
    if (all[plotId]) return all[plotId]
  } catch {}
  const seed     = plotId * 13
  const ru       = 60 + (seed % 50)
  const rfu      = Math.round(ru * 0.42)
  const cultures = ['Maïs','Maïs','Maïs','Blé','Maïs','Tournesol','Orge','Maïs']
  const culture  = cultures[plotId % cultures.length]
  const day      = String(5 + (plotId % 16)).padStart(2, '0')
  return { ru, rfu, culture, semisDate: `2026-04-${day}` }
}

function setIrrelisConfig(plotId, cfg) {
  try {
    const all = JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}')
    all[plotId] = { ...getIrrelisConfig(plotId), ...cfg }
    localStorage.setItem(CONFIG_KEY, JSON.stringify(all))
  } catch {}
}

// ─── Custom events ────────────────────────────────────────────────────────────

const EVENTS_KEY = id => `weenat-il-events-${id}`

function getIrrelisEvents(plotId) {
  try { return JSON.parse(localStorage.getItem(EVENTS_KEY(plotId))) || [] } catch { return [] }
}

function saveIrrelisEvents(plotId, events) {
  try { localStorage.setItem(EVENTS_KEY(plotId), JSON.stringify(events)) } catch {}
}

// ─── Mock data ────────────────────────────────────────────────────────────────

function generateRainArray(seed, total, nDays) {
  const result = []
  let isDry = true
  let rem = 5 + Math.floor(Math.abs(Math.sin(seed * 0.13)) * 5)
  for (let i = 0; i < total; i++) {
    if (rem <= 0) {
      isDry = !isDry
      rem = isDry
        ? 4 + Math.floor(Math.abs(Math.sin(seed * 1337 + i * 0.53)) * 7)
        : 1 + Math.floor(Math.abs(Math.sin(seed * 2997 + i * 0.91)) * 2.9)
    }
    rem--
    if (!isDry) {
      const base = 8 + Math.floor(Math.abs(Math.sin(seed * 7919 + i * 1.73)) * 22)
      result.push(i >= nDays ? Math.round(base * 0.6) : base)
    } else {
      result.push(0)
    }
  }
  return result
}

export function getIrrelisDailyData(plot, nFcDays = 5) {
  const cfg  = getIrrelisConfig(plot.id)
  const { ru, rfu } = cfg
  const seed = plot.id

  const apr1  = new Date('2026-04-01T00:00:00')
  const oct1  = new Date('2026-10-01T00:00:00')   // fin de saison
  const now   = new Date(); now.setHours(0, 0, 0, 0)
  const dayMs = 86400000
  const maxSeasonDays = Math.round((oct1 - apr1) / dayMs)  // 183
  const nDays = Math.max(0, Math.min(Math.round((now - apr1) / dayMs), maxSeasonDays))
  const total = maxSeasonDays   // toujours simuler la saison entière

  const rainArr = generateRainArray(seed, total, nDays)

  const customByIso = {}
  for (const ev of getIrrelisEvents(plot.id)) {
    if (!customByIso[ev.iso]) customByIso[ev.iso] = { pluie: 0, irrigation: 0 }
    customByIso[ev.iso][ev.type] = (customByIso[ev.iso][ev.type] || 0) + ev.mm
  }

  // Per-day evolving RU/RFU based on phenological stages
  const ruArr = [], rfuArr = []
  for (let i = 0; i < total; i++) {
    const { ru: ruI, rfu: rfuI } = getRuAtDay(cfg, apr1, i)
    ruArr.push(ruI)
    rfuArr.push(rfuI)
  }

  const reservoir = [], pluie = [], etp = [], irrigation = [], drainage = []
  let res = ruArr[0] * 0.88

  for (let i = 0; i < total; i++) {
    const isoDate = new Date(apr1.getTime() + i * dayMs).toISOString().split('T')[0]
    const cust    = customByIso[isoDate] || { pluie: 0, irrigation: 0 }

    const etpV   = Math.max(0.8, Math.min(5.0, 1.0 + 4.0 * Math.pow(Math.max(0, i / 150), 0.6) + Math.sin(seed * 999 + i * 0.57) * 0.3))
    const pluieV = rainArr[i] + cust.pluie
    const irrigV = cust.irrigation

    etp.push(+etpV.toFixed(1))
    pluie.push(pluieV)
    irrigation.push(irrigV)

    const ruI = ruArr[i]
    res = res - etpV + pluieV + irrigV
    const dr = Math.max(0, res - ruI)
    drainage.push(+dr.toFixed(1))
    res = Math.max(0, Math.min(ruI, res))
    reservoir.push(+res.toFixed(1))
  }

  return { reservoir, pluie, etp, drainage, irrigation, nDays, nFcDays, ru, rfu, cfg, apr1, ruArr, rfuArr }
}

export function getIrrelisVal(plot, aggLabel) {
  const d = getIrrelisDailyData(plot, 5)
  const i = d.nDays
  switch (aggLabel) {
    case "Aujourd'hui": return d.reservoir[i]     ?? 0
    case 'Demain':      return d.reservoir[i + 1] ?? 0
    case 'J+3':         return d.reservoir[i + 3] ?? 0
    case 'J+5':         return d.reservoir[i + 5] ?? 0
    default:            return d.reservoir[i]     ?? 0
  }
}

export function irrelisColor(val, rfu, ru) {
  if (val > ru)         return '#007aff'
  if (val >= rfu)       return '#24B066'
  if (val >= ru * 0.15) return '#E8A020'
  return '#E05252'
}

// ─── Period slice ─────────────────────────────────────────────────────────────

function getSlice(period, nDays, nFcDays, total) {
  if (period === '7j') {
    const startIdx = Math.max(0, nDays - 7)
    return { startIdx, displayLen: Math.min(total - startIdx, 7 + nFcDays) }
  }
  if (period === '30j') {
    const startIdx = Math.max(0, nDays - 30)
    return { startIdx, displayLen: Math.min(total - startIdx, 30 + nFcDays) }
  }
  return { startIdx: 0, displayLen: total }  // saison : toujours avril → oct
}

// ─── Chart helpers ────────────────────────────────────────────────────────────

const PHENO_MAIS = [
  { label: 'Levée',        daysAfter: 10 },
  { label: '4 feuilles',   daysAfter: 22 },
  { label: '10 feuilles',  daysAfter: 38 },
  { label: '15 feuilles',  daysAfter: 52 },
  { label: 'Floraison',    daysAfter: 68 },
  { label: 'Sl. laiteux',  daysAfter: 83 },
  { label: '70% humidité', daysAfter: 100 },
]

// RU factor (0→1) relative to max configured RU, evolving with root depth at each stade
const MAIS_RU_STAGES = [
  { daysAfter: 0,   factor: 0.10 },
  { daysAfter: 10,  factor: 0.22 },
  { daysAfter: 22,  factor: 0.42 },
  { daysAfter: 38,  factor: 0.66 },
  { daysAfter: 52,  factor: 0.85 },
  { daysAfter: 68,  factor: 1.00 },
  { daysAfter: 83,  factor: 1.00 },
  { daysAfter: 100, factor: 0.97 },
]

function getRuAtDay(cfg, apr1, i) {
  if (cfg.culture !== 'Maïs') return { ru: cfg.ru, rfu: cfg.rfu }
  const semis        = new Date(cfg.semisDate + 'T00:00:00')
  const semisDay     = Math.round((semis - apr1) / 86400000)
  const dayFromSemis = i - semisDay
  if (dayFromSemis < 0) {
    const f = 0.08
    return { ru: Math.round(cfg.ru * f), rfu: Math.round(cfg.rfu * f) }
  }
  let factor = MAIS_RU_STAGES[0].factor
  for (const s of MAIS_RU_STAGES) {
    if (dayFromSemis >= s.daysAfter) factor = s.factor
  }
  const ruI  = Math.round(cfg.ru  * factor)
  const rfuI = Math.round(ruI * cfg.rfu / cfg.ru)
  return { ru: ruI, rfu: rfuI }
}

function smooth(pts) {
  if (pts.length < 2) return ''
  let d = `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0=pts[Math.max(i-1,0)], p1=pts[i], p2=pts[i+1], p3=pts[Math.min(i+2,pts.length-1)]
    const cp1x=p1.x+(p2.x-p0.x)/6, cp1y=p1.y+(p2.y-p0.y)/6
    const cp2x=p2.x-(p3.x-p1.x)/6, cp2y=p2.y-(p3.y-p1.y)/6
    d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`
  }
  return d
}

const MON_ABBR = ['jan.','fév.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.']

// Shared padding (used by SVG functions and tooltip)
const RES_PAD  = { t: 24, r: 38, b: 28, l: 52 }
const HIST_PAD = { t: 8,  r: 38, b: 28, l: 52 }

function makeReservoirSvg(W, H, data, startIdx, displayLen) {
  const { reservoir, nDays, ru, rfu, cfg, apr1, ruArr, rfuArr } = data
  const PAD = RES_PAD
  const iW  = W - PAD.l - PAD.r
  const iH  = H - PAD.t - PAD.b

  // Fixed scale based on configured max RU so white space below shrinks as roots grow
  const displayMax = ru * 1.05
  const yOf = v => PAD.t + iH - (Math.max(0, Math.min(displayMax, v)) / displayMax) * iH
  const xOf = i => PAD.l + ((i - startIdx) / Math.max(displayLen - 1, 1)) * iW
  const yBot  = PAD.t + iH
  const yFull = PAD.t

  // Build step-function polyline point string (adds vertical jump at each stage boundary)
  function buildStepPts(arr) {
    let pts = ''
    for (let j = 0; j < displayLen; j++) {
      const i    = Math.min(startIdx + j, arr.length - 1)
      const x    = xOf(startIdx + j).toFixed(1)
      const prev = j > 0 ? arr[Math.min(startIdx + j - 1, arr.length - 1)] : null
      if (prev !== null && arr[i] !== prev) {
        pts += `${x},${yOf(prev).toFixed(1)} `  // jump point at old level
      }
      pts += `${x},${yOf(arr[i]).toFixed(1)} `
    }
    return pts.trim()
  }

  const rfuPts    = buildStepPts(rfuArr)
  const rfuPtsRev = rfuPts.split(' ').reverse().join(' ')
  const ruPts     = buildStepPts(ruArr)
  const ruPtsRev  = ruPts.split(' ').reverse().join(' ')

  // Three zones (fixed scale):
  // Green  : chart top → RFU line  (réserve facilement utilisable)
  // Red    : RFU line  → RU line   (zone de stress, accessible mais difficile)
  // White  : RU line   → chart bot (sol inaccessible — racines pas encore descendues)
  const greenPoly = `${PAD.l},${yFull} ${(PAD.l + iW).toFixed(1)},${yFull} ${rfuPtsRev}`
  const redPoly   = `${rfuPts} ${ruPtsRev}`

  const todayIdx  = Math.min(nDays, rfuArr.length - 1)
  const rfuLabelY = (yOf(rfuArr[todayIdx]) - 5).toFixed(1)
  const ruLabelY  = (yOf(ruArr[todayIdx])  - 5).toFixed(1)

  const zones = `
    <polygon points="${greenPoly}" fill="#24B066" opacity="0.1" clip-path="url(#il-c)"/>
    <polygon points="${redPoly}"   fill="#E05252" opacity="0.08" clip-path="url(#il-c)"/>
    <polyline points="${ruPts}"  fill="none" stroke="#0172A4" stroke-width="1"   stroke-dasharray="4,4" opacity="0.35" clip-path="url(#il-c)"/>
    <polyline points="${rfuPts}" fill="none" stroke="#24B066" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.65" clip-path="url(#il-c)"/>
    <text x="${(PAD.l + iW - 4).toFixed(1)}" y="${rfuLabelY}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#24B066" font-weight="700">RFU</text>
    <text x="${(PAD.l + iW - 4).toFixed(1)}" y="${ruLabelY}"  text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#0172A4" font-weight="600" opacity="0.7">RU</text>`

  // Phenological stades
  const semis    = new Date(cfg.semisDate + 'T00:00:00')
  const semisOff = Math.round((semis - apr1) / 86400000)
  const stadesSvg = (cfg.culture === 'Maïs' ? PHENO_MAIS : []).map(s => {
    const di = semisOff + s.daysAfter
    if (di < startIdx || di >= startIdx + displayLen) return ''
    const x  = xOf(di), xf = x.toFixed(1)
    const tx = (x + 3).toFixed(0), ty = (yBot - 4).toFixed(0)
    return `<line x1="${xf}" y1="${yFull}" x2="${xf}" y2="${yBot}" stroke="#4CAF50" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.55"/>
<text transform="translate(${tx},${ty}) rotate(-90)" font-size="10" font-family="-apple-system,sans-serif" fill="#4CAF50" font-weight="600">${s.label}</text>`
  }).join('')

  // Month lines + X labels (centered between month boundaries, with year)
  let monthLines = '', xLabels = ''
  for (let i = startIdx; i < startIdx + displayLen; i++) {
    const day = new Date(apr1.getTime() + i * 86400000)
    if (day.getDate() === 1) {
      const x = xOf(i).toFixed(1)
      monthLines += `<line x1="${x}" y1="${PAD.t}" x2="${x}" y2="${yBot}" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-dasharray="3,4"/>`
      const nextStart = new Date(day.getFullYear(), day.getMonth() + 1, 1)
      const nextIdx   = Math.round((nextStart - apr1) / 86400000)
      const endIdx    = Math.min(nextIdx, startIdx + displayLen - 1)
      const cx        = xOf((i + endIdx) / 2).toFixed(1)
      const yr2       = String(day.getFullYear()).slice(-2)
      const label     = `${MON_ABBR[day.getMonth()]} ${yr2}`
      xLabels += `<text x="${cx}" y="${H - 6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${label}</text>`
    }
  }

  // Y labels: fixed scale based on configured RU/RFU (max values)
  const yTickVals = [0, rfu, ru]
  const yLabels = yTickVals.map(v => {
    const y = (yOf(v) + 4).toFixed(1)
    return `<text x="${PAD.l - 6}" y="${y}" text-anchor="end" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${v}</text>`
  }).join('') + `<text x="${PAD.l - 6}" y="${PAD.t - 7}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`

  // Curve — forecast capped at J+7 beyond today
  const FC_DAYS   = 7
  const sliceVals = reservoir.slice(startIdx, startIdx + displayLen)
  const allPts    = sliceVals.map((v, j) => ({ x: xOf(startIdx + j), y: yOf(v) }))
  const todayRel  = nDays - startIdx
  const histPts   = allPts.slice(0, Math.min(Math.max(todayRel + 1, 1), allPts.length))
  const fcEndRel  = Math.min(todayRel + FC_DAYS + 1, allPts.length)
  const fcPts     = (todayRel >= 0 && todayRel < allPts.length) ? allPts.slice(todayRel, fcEndRel) : []
  const hPath     = smooth(histPts)
  const fcPath    = fcPts.length >= 2 ? smooth(fcPts) : ''
  const todayX    = xOf(Math.max(startIdx, Math.min(nDays, startIdx + displayLen - 1))).toFixed(1)
  const fillEnd   = histPts.length ? histPts[histPts.length - 1].x.toFixed(1) : todayX
  const fill      = hPath ? `${hPath} L${fillEnd},${yBot} L${PAD.l},${yBot} Z` : ''

  return `<svg width="${W}" height="${H}" style="display:block;flex-shrink:0">
    <defs>
      <clipPath id="il-c"><rect x="${PAD.l}" y="${PAD.t}" width="${iW}" height="${iH}"/></clipPath>
      <linearGradient id="il-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0172A4" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#0172A4" stop-opacity="0.01"/>
      </linearGradient>
    </defs>
    ${zones}
    <g clip-path="url(#il-c)">${monthLines}${stadesSvg}</g>
    ${fill ? `<path d="${fill}" fill="url(#il-g)" clip-path="url(#il-c)"/>` : ''}
    ${hPath ? `<path d="${hPath}" fill="none" stroke="#0172A4" stroke-width="2.5" stroke-linejoin="round" clip-path="url(#il-c)"/>` : ''}
    ${fcPath ? `<path d="${fcPath}" fill="none" stroke="#0172A4" stroke-width="2" stroke-dasharray="7,5" stroke-linejoin="round" opacity="0.7" clip-path="url(#il-c)"/>` : ''}
    <line x1="${todayX}" y1="${PAD.t}" x2="${todayX}" y2="${yBot}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="${todayX}" y="${PAD.t - 6}" text-anchor="middle" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">Auj.</text>
    ${yLabels}
    ${xLabels}
    <rect x="${PAD.l}" y="${PAD.t}" width="${iW}" height="${iH}" fill="none" stroke="rgba(0,0,0,.07)" stroke-width="1"/>
  </svg>`
}

function makeHistogramSvg(W, H, data, startIdx, displayLen) {
  const { pluie, etp, drainage, irrigation, nDays, nFcDays, apr1 } = data
  const total = nDays + nFcDays
  const PAD = HIST_PAD
  const iW  = W - PAD.l - PAD.r
  const iH  = H - PAD.t - PAD.b
  const mid = PAD.t + iH / 2

  const sliceP = pluie.slice(startIdx, startIdx + displayLen)
  const sliceE = etp.slice(startIdx, startIdx + displayLen)
  const sliceD = drainage.slice(startIdx, startIdx + displayLen)
  const sliceI = irrigation.slice(startIdx, startIdx + displayLen)

  const maxPos = Math.max(...sliceP.map((p, j) => p + (sliceI[j] || 0)), 1)
  const maxNeg = Math.max(...sliceE.map((e, j) => e + (sliceD[j] || 0)), 1)
  const scale  = Math.max(maxPos, maxNeg, 1)
  const half   = iH / 2

  const barW = Math.max(1.5, (iW / displayLen) * 0.8)
  const bx   = j => PAD.l + (j / Math.max(displayLen - 1, 1)) * iW - barW / 2

  let bars = ''
  for (let j = 0; j < displayLen; j++) {
    const pH  = (sliceP[j] / scale) * half
    const iH2 = (sliceI[j] / scale) * half
    const eH  = (sliceE[j] / scale) * half
    const dH  = (sliceD[j] / scale) * half
    const x   = bx(j).toFixed(1)
    const bw  = barW.toFixed(1)
    if (sliceP[j] > 0)  bars += `<rect x="${x}" y="${(mid - pH).toFixed(1)}" width="${bw}" height="${pH.toFixed(1)}" fill="#2E75B6" opacity="0.85"/>`
    if (sliceI[j] > 0)  bars += `<rect x="${x}" y="${(mid - pH - iH2).toFixed(1)}" width="${bw}" height="${iH2.toFixed(1)}" fill="#FF8C00" opacity="0.85"/>`
    bars += `<rect x="${x}" y="${mid.toFixed(1)}" width="${bw}" height="${eH.toFixed(1)}" fill="#00887E" opacity="0.75"/>`
    if (sliceD[j] > 0)  bars += `<rect x="${x}" y="${(mid + eH).toFixed(1)}" width="${bw}" height="${dH.toFixed(1)}" fill="#8B1A1A" opacity="0.75"/>`
  }

  // Y labels
  const mmMax  = +scale.toFixed(1)
  const yLabels = [
    `<text x="${PAD.l - 6}" y="${(PAD.t + 13).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">+${mmMax}</text>`,
    `<text x="${PAD.l - 6}" y="${(mid + 4).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">0</text>`,
    `<text x="${PAD.l - 6}" y="${(PAD.t + iH).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">-${mmMax}</text>`,
    `<text x="${PAD.l - 6}" y="${PAD.t - 1}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`,
  ].join('')

  // X labels (centered between month lines)
  let xLabels = ''
  for (let j = 0; j < displayLen; j++) {
    const i   = startIdx + j
    const day = new Date(apr1.getTime() + i * 86400000)
    if (day.getDate() === 1) {
      const nextStart = new Date(day.getFullYear(), day.getMonth() + 1, 1)
      const nextIdx   = Math.round((nextStart - apr1) / 86400000)
      const endIdx    = Math.min(nextIdx - startIdx, displayLen - 1)
      const cj        = (j + endIdx) / 2
      const cx        = (PAD.l + (cj / Math.max(displayLen - 1, 1)) * iW).toFixed(1)
      const yr2h = String(day.getFullYear()).slice(-2)
      xLabels += `<text x="${cx}" y="${H - 6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${MON_ABBR[day.getMonth()]} ${yr2h}</text>`
      // vertical line at start of month
      const lx = (PAD.l + (j / Math.max(displayLen - 1, 1)) * iW).toFixed(1)
      xLabels += `<line x1="${lx}" y1="${PAD.t}" x2="${lx}" y2="${PAD.t + iH}" stroke="rgba(0,0,0,.12)" stroke-width="1" stroke-dasharray="3,4"/>`
    }
  }

  const todayJ  = nDays - startIdx
  const todayX  = todayJ >= 0 && todayJ < displayLen
    ? (PAD.l + (todayJ / Math.max(displayLen - 1, 1)) * iW).toFixed(1)
    : null

  return `<svg width="${W}" height="${H}" style="display:block;flex-shrink:0">
    <line x1="${PAD.l}" y1="${mid.toFixed(1)}" x2="${PAD.l + iW}" y2="${mid.toFixed(1)}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>
    ${bars}
    ${todayX ? `<line x1="${todayX}" y1="${PAD.t}" x2="${todayX}" y2="${PAD.t + iH}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3" opacity="0.7"/>` : ''}
    ${yLabels}
    ${xLabels}
    <rect x="${PAD.l}" y="${PAD.t}" width="${iW}" height="${iH}" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="1"/>
  </svg>`
}

function makeLegendHtml() {
  const line  = (col, dash) => `<svg width="20" height="10" style="flex-shrink:0"><line x1="0" y1="5" x2="20" y2="5" stroke="${col}" stroke-width="2.5"${dash ? ` stroke-dasharray="5,3"` : ''}/></svg>`
  const band  = (col, op) => `<span style="display:inline-block;width:14px;height:10px;background:${col};opacity:${op};border-radius:2px;flex-shrink:0"></span>`
  const sq    = c => `<span style="display:inline-block;width:10px;height:10px;background:${c};border-radius:2px;flex-shrink:0"></span>`
  const item  = (icon, lbl) => `<span style="display:flex;align-items:center;gap:4px;font-size:11px;color:#636366;white-space:nowrap">${icon}<span>${lbl}</span></span>`
  const row   = items => `<div style="display:flex;gap:10px;flex-wrap:wrap">${items.join('')}</div>`
  return `<div style="display:flex;flex-direction:column;gap:4px">
    ${row([
      item(line('#0172A4', false), 'Réserve'),
      item(line('#0172A4', true),  'Prévision J+7'),
      item(band('#24B066', '1'),   'Eau disponible'),
      item(band('#E05252', '1'),   'Zone de stress'),
    ])}
    ${row([
      item(sq('#2E75B6'), 'Pluie'),
      item(sq('#FF8C00'), 'Irrigation'),
      item(sq('#00887E'), 'ETP'),
      item(sq('#8B1A1A'), 'Drainage'),
    ])}
  </div>`
}

function updateCumuls(el, data, period) {
  const { nDays, nFcDays, pluie, etp, drainage, irrigation } = data
  const total = data.reservoir.length
  const { startIdx, displayLen } = getSlice(period, nDays, nFcDays, total)
  const end = Math.min(startIdx + displayLen, nDays)
  const sum = arr => arr.slice(startIdx, end).reduce((a, b) => a + b, 0)
  const cell = (c, label, v) =>
    `<div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px">
      <span style="font-size:12px;color:#636366">${label}</span>
      <span style="font-size:13px;font-weight:700;color:${c}">${v} mm</span>
    </div>`
  el.innerHTML =
    `<div style="font-size:10px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;padding:5px 14px 3px">Cumuls sur la période</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px 10px;padding:0 14px 8px">
      ${cell('#2E75B6', 'Pluie',      Math.round(sum(pluie))     )}
      ${cell('#00887E', 'ETP',        +sum(etp).toFixed(1)       )}
      ${cell('#FF8C00', 'Irrigation', Math.round(sum(irrigation)))}
      ${cell('#8B1A1A', 'Drainage',   +sum(drainage).toFixed(1)  )}
    </div>`
}

function attachTooltip(container, data, startIdx, displayLen, resH) {
  const { reservoir, ru, rfu, nDays, apr1, ruArr, rfuArr } = data
  const PAD = RES_PAD
  const W   = container.clientWidth
  const iW  = W - PAD.l - PAD.r

  container.style.position = 'relative'

  const tip = document.createElement('div')
  tip.style.cssText = 'position:absolute;background:rgba(28,28,30,.88);color:#fff;border-radius:10px;padding:6px 11px;font-size:13px;font-weight:600;pointer-events:none;display:none;white-space:nowrap;z-index:20;transform:translate(-50%,-100%);margin-top:-10px;font-family:-apple-system,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.25)'

  const vLine = document.createElement('div')
  vLine.style.cssText = `position:absolute;width:1px;background:rgba(100,100,100,.35);pointer-events:none;display:none;top:${PAD.t}px`
  vLine.style.height = (resH - PAD.t - PAD.b) + 'px'

  container.appendChild(vLine)
  container.appendChild(tip)

  const show = (clientX, clientY) => {
    const rect = container.getBoundingClientRect()
    const relY = clientY - rect.top
    if (relY > resH) { hide(); return }

    const relX  = clientX - rect.left
    const frac  = Math.max(0, Math.min(1, (relX - PAD.l) / iW))
    const idx   = Math.max(0, Math.min(reservoir.length - 1, Math.round(startIdx + frac * (displayLen - 1))))
    const val   = reservoir[idx]
    const isFc   = idx >= nDays
    const dayRu  = ruArr  ? ruArr[Math.min(idx, ruArr.length - 1)]  : ru
    const dayRfu = rfuArr ? rfuArr[Math.min(idx, rfuArr.length - 1)] : rfu
    const col    = irrelisColor(val, dayRfu, dayRu)
    const date  = new Date(apr1.getTime() + idx * 86400000)
    const dateStr = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })

    tip.innerHTML = `<span style="color:${col}">${val} mm</span>&ensp;<span style="font-size:11px;opacity:.7">${dateStr}${isFc ? ' ·&thinsp;prév.' : ''}</span>`
    const tipX = Math.max(60, Math.min(rect.width - 60, relX))
    tip.style.left  = tipX + 'px'
    tip.style.top   = Math.min(relY, resH - 20) + 'px'
    tip.style.display = 'block'

    vLine.style.left    = relX + 'px'
    vLine.style.display = 'block'
  }

  const hide = () => { tip.style.display = 'none'; vLine.style.display = 'none' }

  container.addEventListener('mousemove', e => show(e.clientX, e.clientY))
  container.addEventListener('mouseleave', hide)
  container.addEventListener('touchmove', e => {
    e.preventDefault()
    show(e.touches[0].clientX, e.touches[0].clientY)
  }, { passive: false })
  container.addEventListener('touchend', hide)
}

function drawChart(container, data, period = 'saison') {
  const W = container.clientWidth, H = container.clientHeight
  if (!W || !H) return

  const { nDays, nFcDays } = data
  const total = data.reservoir.length
  const { startIdx, displayLen } = getSlice(period, nDays, nFcDays, total)

  const resH  = Math.round(H * 3 / 5)
  const histH = H - resH

  container.innerHTML =
    makeReservoirSvg(W, resH, data, startIdx, displayLen) +
    makeHistogramSvg(W, histH, data, startIdx, displayLen)

  attachTooltip(container, data, startIdx, displayLen, resH)
}

// ─── Config form ──────────────────────────────────────────────────────────────

function openConfigForm(plot, onSave) {
  const cfg  = getIrrelisConfig(plot.id)
  const body = document.createElement('div')
  body.innerHTML = `
    <div style="padding:4px 0 8px">
      <div class="m-form-label">Culture</div>
      <select id="il-culture" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;margin-bottom:14px">
        ${['Maïs','Blé','Orge','Colza','Tournesol','Sorgho','Betterave'].map(c =>
          `<option${c === cfg.culture ? ' selected' : ''}>${c}</option>`).join('')}
      </select>
      <div class="m-form-label">Date de semis</div>
      <input id="il-semis" type="date" value="${cfg.semisDate}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
      <div class="m-form-label">Réserve utile (RU) — mm</div>
      <input id="il-ru" type="number" value="${cfg.ru}" min="20" max="200" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
      <div class="m-form-label">RFU (réserve facilement utilisable) — mm</div>
      <input id="il-rfu" type="number" value="${cfg.rfu}" min="5" max="150" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
      <button id="il-cfg-save" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Enregistrer</button>
    </div>`
  const sheet = showSheet({ title: `Configuration — ${plot.name}`, body, doneLabel: 'Fermer', onDone: () => {} })
  body.querySelector('#il-cfg-save').addEventListener('click', () => {
    setIrrelisConfig(plot.id, {
      culture:   body.querySelector('#il-culture').value,
      semisDate: body.querySelector('#il-semis').value,
      ru:        +(body.querySelector('#il-ru').value)  || cfg.ru,
      rfu:       +(body.querySelector('#il-rfu').value) || cfg.rfu,
    })
    sheet.classList.remove('m-sheet-overlay--show')
    setTimeout(() => { sheet.remove(); onSave?.() }, 280)
    showToast('Configuration enregistrée')
  })
}

// ─── Pluies & irrigations (staged editing) ────────────────────────────────────

function openGererPluvIrrig(plot, onSave) {
  let staged  = [...getIrrelisEvents(plot.id)]
  let filter  = 'all'
  let layer   = null

  const apr1 = new Date('2026-04-01T00:00:00')

  function fmtDate(iso) {
    return new Date(iso + 'T00:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  function renderLayer() {
    const filtered = filter === 'all' ? staged : staged.filter(e => e.type === filter)
    const sortedFiltered = [...filtered].sort((a, b) => b.iso.localeCompare(a.iso))

    const rows = sortedFiltered.map(ev => {
      const idx = staged.indexOf(ev)
      const isPluie = ev.type === 'pluie'
      const icoBg = isPluie ? 'rgba(46,117,182,.12)' : 'rgba(255,140,0,.12)'
      const icoCol = isPluie ? '#2E75B6' : '#FF8C00'
      const ico = isPluie ? 'bi-cloud-rain' : 'bi-droplet-fill'
      const label = isPluie ? 'Pluie' : 'Irrigation'
      return `
        <div style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:.5px solid rgba(0,0,0,.07)">
          <div style="width:32px;height:32px;border-radius:50%;background:${icoBg};display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="bi ${ico}" style="color:${icoCol};font-size:14px"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:600;color:#1c1c1e">${label}</div>
            <div style="font-size:12px;color:#8e8e93">${fmtDate(ev.iso)}</div>
          </div>
          <div style="font-size:15px;font-weight:700;color:${icoCol};margin-right:4px">${ev.mm} mm</div>
          <button class="gpi-edit" data-idx="${idx}" style="background:none;border:none;cursor:pointer;padding:4px;color:#8e8e93"><i class="bi bi-pencil" style="font-size:14px"></i></button>
          <button class="gpi-del" data-idx="${idx}" style="background:none;border:none;cursor:pointer;padding:4px;color:#E05252"><i class="bi bi-trash" style="font-size:14px"></i></button>
        </div>`
    }).join('')

    const activeStyle = 'background:#0172A4;color:#fff;'
    const inactStyle  = 'background:rgba(1,114,164,.08);color:#0172A4;'

    layer.innerHTML = `
      <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:.5px solid rgba(0,0,0,.1);background:#fff;flex-shrink:0">
        <button id="gpi-back" style="color:#0172A4;background:none;border:none;font-size:15px;cursor:pointer;display:flex;align-items:center;gap:4px"><i class="bi bi-chevron-left"></i> Irré-LIS</button>
        <span style="font-size:16px;font-weight:700;color:#1c1c1e;flex:1;text-align:center">Pluies &amp; irrigations</span>
        <div style="width:80px"></div>
      </div>
      <div style="display:flex;gap:6px;padding:10px 16px 8px;flex-shrink:0">
        <button class="gpi-filter" data-f="all"       style="${filter==='all'       ? activeStyle : inactStyle}flex:1;border:none;border-radius:10px;padding:8px 4px;font-size:13px;font-weight:600;cursor:pointer">Tout</button>
        <button class="gpi-filter" data-f="pluie"     style="${filter==='pluie'     ? activeStyle : inactStyle}flex:1;border:none;border-radius:10px;padding:8px 4px;font-size:13px;font-weight:600;cursor:pointer">Pluie</button>
        <button class="gpi-filter" data-f="irrigation" style="${filter==='irrigation' ? activeStyle : inactStyle}flex:1;border:none;border-radius:10px;padding:8px 4px;font-size:13px;font-weight:600;cursor:pointer">Irrigation</button>
      </div>
      <div style="display:flex;gap:8px;padding:0 16px 12px;flex-shrink:0">
        <button id="gpi-add-pluie" style="flex:1;background:rgba(46,117,182,.1);color:#2E75B6;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Pluie</button>
        <button id="gpi-add-irrig" style="flex:1;background:rgba(255,140,0,.1);color:#FF8C00;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Irrigation</button>
      </div>
      <div style="overflow-y:auto;flex:1;background:#f2f2f7">
        ${sortedFiltered.length ? rows : '<p style="color:#8e8e93;text-align:center;padding:32px 0;font-size:14px">Aucun événement</p>'}
      </div>
      <div style="padding:10px 16px 20px;background:#fff;border-top:.5px solid rgba(0,0,0,.1);flex-shrink:0">
        <button id="gpi-save" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:14px;padding:15px;font-size:16px;font-weight:700;cursor:pointer">Enregistrer (${staged.length})</button>
      </div>`

    layer.querySelector('#gpi-back').addEventListener('click', () => popDetail())
    layer.querySelector('#gpi-add-pluie').addEventListener('click', () => openAddSheet('pluie'))
    layer.querySelector('#gpi-add-irrig').addEventListener('click', () => openAddSheet('irrigation'))
    layer.querySelector('#gpi-save').addEventListener('click', () => {
      saveIrrelisEvents(plot.id, staged)
      popDetail()
      onSave?.()
      showToast(`${staged.length} événement(s) enregistré(s)`)
    })
    layer.querySelectorAll('.gpi-filter').forEach(btn => {
      btn.addEventListener('click', () => { filter = btn.dataset.f; renderLayer() })
    })
    layer.querySelectorAll('.gpi-edit').forEach(btn => {
      btn.addEventListener('click', () => { openAddSheet(staged[+btn.dataset.idx].type, +btn.dataset.idx) })
    })
    layer.querySelectorAll('.gpi-del').forEach(btn => {
      btn.addEventListener('click', () => { staged.splice(+btn.dataset.idx, 1); renderLayer() })
    })
  }

  function openAddSheet(type, editIdx = -1) {
    const existing = editIdx >= 0 ? staged[editIdx] : null
    const body = document.createElement('div')
    body.innerHTML = `
      <div style="padding:4px 0 8px">
        <div class="m-form-label">Date</div>
        <input id="gpi-date" type="date" value="${existing?.iso ?? new Date().toISOString().split('T')[0]}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
        <div class="m-form-label">Quantité (mm)</div>
        <input id="gpi-mm" type="number" value="${existing?.mm ?? ''}" placeholder="ex : 25" min="0" max="300" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
        <button id="gpi-sheet-save" style="width:100%;background:${type === 'pluie' ? '#2E75B6' : '#FF8C00'};color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">${editIdx >= 0 ? 'Modifier' : 'Ajouter'}</button>
      </div>`
    const title = type === 'pluie' ? (editIdx >= 0 ? 'Modifier la pluie' : 'Ajouter une pluie') : (editIdx >= 0 ? "Modifier l'irrigation" : 'Ajouter une irrigation')
    const sheet = showSheet({ title, body, doneLabel: 'Fermer', onDone: () => {} })
    body.querySelector('#gpi-sheet-save').addEventListener('click', () => {
      const iso = body.querySelector('#gpi-date').value
      const mm  = parseFloat(body.querySelector('#gpi-mm').value)
      if (!iso || isNaN(mm) || mm <= 0) return
      const ev = { type, iso, mm: +mm.toFixed(1) }
      if (editIdx >= 0) staged[editIdx] = ev
      else staged.push(ev)
      sheet.classList.remove('m-sheet-overlay--show')
      setTimeout(() => { sheet.remove(); renderLayer() }, 280)
    })
  }

  layer = pushDetail('')
  layer.style.cssText = 'display:flex;flex-direction:column;background:#f2f2f7'
  renderLayer()
}

// ─── Télécharger ──────────────────────────────────────────────────────────────

function openTelecharger(plot) {
  const body = document.createElement('div')
  body.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
      <div style="width:56px;height:56px;border-radius:50%;background:rgba(48,209,88,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
        <i class="bi bi-file-earmark-spreadsheet" style="font-size:26px;color:#30d158"></i>
      </div>
      <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px">Le bilan hydrique Irré-LIS de <strong>${plot.name}</strong> sera envoyé par e-mail au format Excel.</p>
      <div class="m-form-label" style="align-self:flex-start;width:100%;text-align:left">Adresse e-mail</div>
      <input id="il-dl-email" type="email" value="contact@fermebocage.fr" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
      <button id="il-dl-send" style="width:100%;background:#30d158;color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Envoyer le fichier</button>
    </div>`
  const sheet = showSheet({ title: 'Télécharger le bilan', body, doneLabel: 'Fermer', onDone: () => {} })
  body.querySelector('#il-dl-send').addEventListener('click', () => {
    sheet.classList.remove('m-sheet-overlay--show')
    setTimeout(() => sheet.remove(), 280)
    showToast('Bilan envoyé par e-mail')
  })
}

// ─── Widget parcelle ──────────────────────────────────────────────────────────

export function irrelisMobileWidget(plot) {
  const data = getIrrelisDailyData(plot, 5)
  const { reservoir, pluie, etp, drainage, irrigation, nDays, ru, rfu, cfg, ruArr, rfuArr } = data

  const curVal  = reservoir[nDays] ?? reservoir[nDays - 1] ?? 0
  const todayRu  = ruArr[Math.min(nDays, ruArr.length - 1)]
  const todayRfu = rfuArr[Math.min(nDays, rfuArr.length - 1)]
  const col      = irrelisColor(curVal, todayRfu, todayRu)
  const pct      = Math.round(curVal / todayRu * 100)

  const start7  = Math.max(0, nDays - 7)
  const sum7    = arr => arr.slice(start7, nDays).reduce((a, b) => a + b, 0)
  const sumPluie = Math.round(sum7(pluie))
  const sumIrrig = Math.round(sum7(irrigation))
  const sumEtp   = +sum7(etp).toFixed(1)
  const sumDrain = +sum7(drainage).toFixed(1)

  const sparkVals = reservoir.slice(start7, nDays + 1)
  const W = 260, H = 52
  const PL = 4, PR = 4, PT = 4, PB = 4
  const siW = W - PL - PR, siH = H - PT - PB
  const syOf = v => PT + siH - Math.max(0, Math.min(1.02, v / todayRu)) * siH
  const sxOf = i => PL + (i / Math.max(sparkVals.length - 1, 1)) * siW
  const sPts = sparkVals.map((v, i) => ({ x: sxOf(i), y: syOf(v) }))
  const sPath = smooth(sPts)
  const yRfu  = syOf(todayRfu).toFixed(1)
  const yBot  = (PT + siH).toFixed(1)
  const fillD = sPath ? `${sPath} L${sxOf(sparkVals.length - 1).toFixed(1)},${yBot} L${PL},${yBot} Z` : ''

  const sparkSvg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;width:100%;height:${H}px">
    <rect x="${PL}" y="${PT}" width="${siW}" height="${(+yRfu - PT).toFixed(1)}" fill="#24B066" opacity="0.1"/>
    <rect x="${PL}" y="${yRfu}" width="${siW}" height="${(+yBot - +yRfu).toFixed(1)}" fill="#E05252" opacity="0.08"/>
    <line x1="${PL}" y1="${yRfu}" x2="${PL + siW}" y2="${yRfu}" stroke="#24B066" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    ${fillD ? `<path d="${fillD}" fill="#0172A4" opacity="0.08"/>` : ''}
    ${sPath ? `<path d="${sPath}" fill="none" stroke="#0172A4" stroke-width="2" stroke-linejoin="round"/>` : ''}
  </svg>`

  const statCol = (c, label, val) => `<div style="flex:1;text-align:center">
    <div style="font-size:13px;font-weight:700;color:${c}">${val}</div>
    <div style="font-size:10px;color:#8e8e93">${label}</div>
  </div>`

  return `<div class="m-widget-card" data-widget-id="irrelis">
    <div style="padding:12px 14px 10px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-size:11px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:2px 7px">Irré-LIS</span>
        <span style="font-size:14px;font-weight:700;color:${col}">${curVal} <span style="font-size:11px;font-weight:400">mm</span></span>
        <span style="font-size:11px;color:#8e8e93">${pct}% RU</span>
        <button class="m-il-detail-btn" data-il-plot="${plot.id}" style="margin-left:auto;font-size:12px;color:#0172A4;background:none;border:none;cursor:pointer;font-weight:600;white-space:nowrap">Voir le bilan →</button>
      </div>
      ${sparkSvg}
      <div style="display:flex;gap:0;margin-top:8px;padding-top:8px;border-top:.5px solid rgba(0,0,0,.07)">
        ${statCol('#2E75B6', 'Pluie 7j', sumPluie + ' mm')}
        ${statCol('#FF8C00', 'Irrigation 7j', sumIrrig + ' mm')}
        ${statCol('#00887E', 'ETP 7j', sumEtp + ' mm')}
        ${statCol('#8B1A1A', 'Drainage 7j', sumDrain + ' mm')}
      </div>
    </div>
  </div>`
}

// ─── Plot picker ──────────────────────────────────────────────────────────────

function openPlotPicker(currentPlot, onSelect) {
  const irrelisPlots = plots.filter(p => hasIrrelis(p))
  const body = document.createElement('div')
  body.style.cssText = 'padding:4px 0'
  body.innerHTML = irrelisPlots.map(p => `
    <button class="il-plot-pick" data-id="${p.id}" style="
      display:flex;align-items:center;width:100%;padding:14px 16px;
      border:none;border-bottom:.5px solid rgba(0,0,0,.06);font-family:inherit;cursor:pointer;gap:12px;
      background:${p.id === currentPlot.id ? 'rgba(1,114,164,.07)' : 'none'}">
      <i class="bi bi-geo-alt" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
      <span style="flex:1;font-size:16px;color:#1c1c1e;font-weight:${p.id === currentPlot.id ? '700' : '400'};text-align:left">${p.name}</span>
      ${p.id === currentPlot.id ? '<i class="bi bi-check2" style="color:#0172A4;font-size:18px;flex-shrink:0"></i>' : ''}
    </button>`).join('')
  const sheet = showSheet({ title: 'Parcelles Irré-LIS', body, doneLabel: 'Fermer', onDone: () => {} })
  body.querySelectorAll('.il-plot-pick').forEach(btn => {
    btn.addEventListener('click', () => {
      const newPlot = plots.find(p => p.id === +btn.dataset.id)
      sheet.classList.remove('m-sheet-overlay--show')
      setTimeout(() => { sheet.remove(); if (newPlot && newPlot.id !== currentPlot.id) onSelect(newPlot) }, 280)
    })
  })
}

// ─── Main entry point ─────────────────────────────────────────────────────────

export function openIrrelisDetail(plot) {
  const cfg      = getIrrelisConfig(plot.id)
  const semisStr = new Date(cfg.semisDate + 'T00:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
  let currentPeriod = 'saison'

  const layer = pushDetail(`
    <div class="m-fs-topbar">
      <button class="m-fs-back" id="il-back"><i class="bi bi-chevron-left"></i>Parcelles</button>
      <button id="il-plot-picker" style="flex:1;display:flex;align-items:center;justify-content:center;gap:5px;background:none;border:none;cursor:pointer;padding:0 4px;min-width:0">
        <span style="font-size:16px;font-weight:700;color:#1c1c1e;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${plot.name}</span>
        <i class="bi bi-chevron-down" style="font-size:10px;color:#8e8e93;flex-shrink:0;margin-top:1px"></i>
      </button>
      <button id="il-parcel-btn" style="background:none;border:none;color:#0172A4;font-size:13px;font-weight:600;cursor:pointer;padding:0 4px;white-space:nowrap">Parcelle →</button>
    </div>

    <div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:#fff;border-bottom:.5px solid rgba(0,0,0,.1);flex-shrink:0">
      <span style="font-size:12px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:3px 9px;white-space:nowrap;flex-shrink:0">Irré-LIS</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${cfg.culture}</div>
        <div style="font-size:11px;color:#8e8e93;margin-top:1px">Semis : ${semisStr}</div>
      </div>
      <select id="il-period" style="flex-shrink:0;font-size:13px;color:#1c1c1e;border:1px solid #e5e5ea;border-radius:8px;padding:5px 8px;background:#fff;cursor:pointer;font-family:inherit">
        <option value="saison" selected>Saison entière</option>
        <option value="30j">30 jours</option>
        <option value="7j">7 jours</option>
      </select>
    </div>

    <div id="il-chart-area" style="flex:1;overflow:hidden;background:#fff;min-height:0"></div>

    <div id="il-cumuls" style="flex-shrink:0;background:#f9f9fb;border-top:.5px solid rgba(0,0,0,.08)"></div>

    <div style="flex-shrink:0;background:#fff;border-top:.5px solid rgba(0,0,0,.07);padding:6px 14px 7px;display:flex;gap:12px;flex-wrap:wrap">
      ${makeLegendHtml()}
    </div>
    <div style="display:flex;background:#fff;border-top:.5px solid rgba(0,0,0,.1);padding:8px 10px 14px;gap:8px">
      <button id="il-btn-config" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;background:rgba(0,122,255,.07);border:none;border-radius:12px;padding:10px 4px;cursor:pointer">
        <i class="bi bi-gear" style="font-size:20px;color:#007aff"></i>
        <span style="font-size:11px;color:#007aff;font-weight:600">Configurer</span>
      </button>
      <button id="il-btn-pluv" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;background:rgba(1,114,164,.07);border:none;border-radius:12px;padding:10px 4px;cursor:pointer">
        <i class="bi bi-cloud-rain" style="font-size:20px;color:#0172A4"></i>
        <span style="font-size:11px;color:#0172A4;font-weight:600;text-align:center;line-height:1.2">Pluies &amp;<br>irrigations</span>
      </button>
      <button id="il-btn-dl" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;background:rgba(48,209,88,.07);border:none;border-radius:12px;padding:10px 4px;cursor:pointer">
        <i class="bi bi-download" style="font-size:20px;color:#30d158"></i>
        <span style="font-size:11px;color:#30d158;font-weight:600">Télécharger</span>
      </button>
    </div>
  `)
  layer.classList.add('m-fs-layer')

  const chartArea  = layer.querySelector('#il-chart-area')
  const cumulEl    = layer.querySelector('#il-cumuls')
  let data = getIrrelisDailyData(plot, 5)
  let ro   = null

  function draw() {
    if (chartArea.clientWidth && chartArea.clientHeight) {
      drawChart(chartArea, data, currentPeriod)
      updateCumuls(cumulEl, data, currentPeriod)
    }
  }

  ro = new ResizeObserver(() => requestAnimationFrame(draw))
  ro.observe(chartArea)
  requestAnimationFrame(draw)

  layer.querySelector('#il-back').addEventListener('click', () => { ro?.disconnect(); popDetail() })

  layer.querySelector('#il-plot-picker').addEventListener('click', () => {
    openPlotPicker(plot, newPlot => {
      ro?.disconnect()
      popDetail()
      requestAnimationFrame(() => openIrrelisDetail(newPlot))
    })
  })

  layer.querySelector('#il-period').addEventListener('change', e => {
    currentPeriod = e.target.value
    draw()
  })

  layer.querySelector('#il-parcel-btn').addEventListener('click', () => {
    import('./parcel-detail.js').then(m => m.initParcelDetail(plot, [], 'widgets', 'Irré-LIS'))
  })

  const refresh = () => { data = getIrrelisDailyData(plot, 5); draw() }
  layer.querySelector('#il-btn-config').addEventListener('click', () => openConfigForm(plot, refresh))
  layer.querySelector('#il-btn-pluv').addEventListener('click', () => openGererPluvIrrig(plot, refresh))
  layer.querySelector('#il-btn-dl').addEventListener('click', () => openTelecharger(plot))
}
