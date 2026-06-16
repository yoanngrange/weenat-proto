import { pushDetail, popDetail } from '../nav.js'
import { showSheet, showToast }  from '../ui.js'

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

// ─── Mock data generation ─────────────────────────────────────────────────────

export function getIrrelisDailyData(plot, nFcDays = 5) {
  const cfg  = getIrrelisConfig(plot.id)
  const { ru, rfu } = cfg
  const seed = plot.id

  const apr1  = new Date('2026-04-01T00:00:00')
  const now   = new Date(); now.setHours(0, 0, 0, 0)
  const dayMs = 86400000
  const nDays = Math.round((now - apr1) / dayMs)
  const total = nDays + nFcDays

  const reservoir_ = [], pluie_ = [], etp_ = [], irrigation_ = [], drainage_ = []
  let res = ru * 0.88

  for (let i = 0; i < total; i++) {
    const s1 = Math.sin(seed * 7919 + i * 1.73)
    const s2 = Math.sin(seed * 1337 + i * 2.91)
    const s3 = Math.sin(seed * 999  + i * 0.57)

    const etpV = Math.max(0.5, 2.4 + i * 0.022 + s3 * 0.75)
    etp_.push(+etpV.toFixed(1))

    const pluieV = (s1 > 0.44 && i % 4 !== 1) ? Math.min(35, Math.round(3 + Math.abs(s1 - 0.44) * 85)) : 0
    pluie_.push(pluieV)

    let irrigV = 0
    if (i < nDays && i >= 25 && i % 11 === 0 && res < rfu * 1.12) {
      irrigV = Math.round(22 + Math.abs(s2) * 8)
    }
    irrigation_.push(irrigV)

    res = res - etpV + pluieV + irrigV
    const dr = Math.max(0, res - ru)
    drainage_.push(+dr.toFixed(1))
    res = Math.max(0, Math.min(ru, res))
    reservoir_.push(+res.toFixed(1))
  }

  return { reservoir: reservoir_, pluie: pluie_, etp: etp_, drainage: drainage_, irrigation: irrigation_, nDays, nFcDays, ru, rfu, cfg }
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
  if (val >= rfu)       return '#24B066'
  if (val >= ru * 0.15) return '#E8A020'
  return '#E05252'
}

// ─── Mini sparkline for dashboard ────────────────────────────────────────────

export function makeIrrelisMiniSvg(data) {
  const { reservoir, nDays, ru, rfu } = data
  const W = 288, H = 68
  const pad = { l: 6, r: 6, t: 6, b: 6 }
  const iW = W - pad.l - pad.r, iH = H - pad.t - pad.b
  const vals = reservoir.slice(0, nDays + 1)
  if (vals.length < 2) return ''
  const yOf = v => pad.t + iH - Math.max(0, Math.min(1, v / ru)) * iH
  const xOf = i => pad.l + (i / (vals.length - 1)) * iW

  const yRfu  = yOf(rfu)
  const ySurv = yOf(ru * 0.15)
  const yBot  = pad.t + iH

  function smooth(pts) {
    let d = `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`
    for (let i = 0; i < pts.length - 1; i++) {
      const p0=pts[Math.max(i-1,0)], p1=pts[i], p2=pts[i+1], p3=pts[Math.min(i+2,pts.length-1)]
      const cp1x=p1.x+(p2.x-p0.x)/6, cp1y=p1.y+(p2.y-p0.y)/6
      const cp2x=p2.x-(p3.x-p1.x)/6, cp2y=p2.y-(p3.y-p1.y)/6
      d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`
    }
    return d
  }

  const pts  = vals.map((v, i) => ({ x: xOf(i), y: yOf(v) }))
  const path = smooth(pts)
  const lastX = xOf(vals.length - 1).toFixed(1)

  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block">
    <rect x="${pad.l}" y="${pad.t}" width="${iW}" height="${(yRfu-pad.t).toFixed(1)}" fill="#24B066" opacity="0.13"/>
    <rect x="${pad.l}" y="${yRfu.toFixed(1)}" width="${iW}" height="${(ySurv-yRfu).toFixed(1)}" fill="#E8A020" opacity="0.11"/>
    <rect x="${pad.l}" y="${ySurv.toFixed(1)}" width="${iW}" height="${(yBot-ySurv).toFixed(1)}" fill="#E05252" opacity="0.11"/>
    <line x1="${pad.l}" y1="${yRfu.toFixed(1)}" x2="${pad.l+iW}" y2="${yRfu.toFixed(1)}" stroke="#24B066" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    <line x1="${pad.l}" y1="${ySurv.toFixed(1)}" x2="${pad.l+iW}" y2="${ySurv.toFixed(1)}" stroke="#E05252" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    <path d="${path} L${lastX},${yBot} L${pad.l},${yBot} Z" fill="#0172A4" opacity="0.09"/>
    <path d="${path}" fill="none" stroke="#0172A4" stroke-width="2" stroke-linejoin="round"/>
    <line x1="${xOf(nDays).toFixed(1)}" y1="${pad.t}" x2="${xOf(nDays).toFixed(1)}" y2="${yBot}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3" opacity="0.7"/>
  </svg>`
}

// ─── Internal chart drawing ───────────────────────────────────────────────────

const PHENO_MAIS = [
  { label: 'Levée',       daysAfter: 10, color: '#81C784' },
  { label: '4 feuilles',  daysAfter: 22, color: '#4CAF50' },
  { label: '10 feuilles', daysAfter: 38, color: '#FFA726' },
  { label: '15 feuilles', daysAfter: 52, color: '#FF7043' },
  { label: 'Floraison',   daysAfter: 68, color: '#E91E63' },
  { label: 'Sl. laiteux', daysAfter: 83, color: '#9C27B0' },
  { label: '70% humidité',daysAfter:100, color: '#5C6BC0' },
]

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

const MON = ['jan','fév','mar','avr','mai','juin','juil','aoû','sep','oct','nov','déc']

function makeReservoirSvg(W, H, data) {
  const { reservoir, nDays, nFcDays, ru, rfu, cfg } = data
  const total = nDays + nFcDays
  const vals  = reservoir.slice(0, total)
  const surv  = ru * 0.15

  const PAD = { t: 22, r: 38, b: 22, l: 40 }
  const iW = W - PAD.l - PAD.r, iH = H - PAD.t - PAD.b

  const yOf = v => PAD.t + iH - Math.max(0, Math.min(1, v / ru)) * iH
  const xOf = i => PAD.l + (i / Math.max(total - 1, 1)) * iW

  const yFull = PAD.t
  const yRfu  = yOf(rfu)
  const ySurv = yOf(surv)
  const yBot  = PAD.t + iH

  // Phenological stages (Maïs only for now)
  const apr1 = new Date('2026-04-01T00:00:00')
  const semis = new Date(cfg.semisDate + 'T00:00:00')
  const semisOff = Math.round((semis - apr1) / 86400000)
  const stadesSvg = (cfg.culture === 'Maïs' ? PHENO_MAIS : []).map(s => {
    const di = semisOff + s.daysAfter
    if (di < 0 || di > total) return ''
    const x = xOf(di), xf = x.toFixed(1)
    const isFc = di > nDays
    const tx = (x + 3).toFixed(0), ty = (yBot - 4).toFixed(0)
    return `<line x1="${xf}" y1="${yFull}" x2="${xf}" y2="${yBot}" stroke="${s.color}" stroke-width="1.5" stroke-dasharray="${isFc?'4,4':'3,2'}" opacity="0.65"/>
<text transform="translate(${tx},${ty}) rotate(-90)" font-size="8" font-family="-apple-system,sans-serif" fill="${s.color}" font-weight="600">${s.label}</text>`
  }).join('')

  // X-axis month labels
  const xLabels = []
  for (let i = 0; i <= total; i++) {
    const d = new Date(apr1.getTime() + i * 86400000)
    if (d.getDate() === 1) {
      xLabels.push(`<text x="${xOf(i).toFixed(1)}" y="${H - 4}" text-anchor="middle" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${MON[d.getMonth()]}</text>`)
    }
  }

  // Y-axis labels
  const yTickVals = [0, Math.round(surv), rfu, ru]
  const yLabels = yTickVals.map(v => {
    const y = (yOf(v) + 4).toFixed(1)
    return `<text x="${PAD.l - 5}" y="${y}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${v}</text>`
  }).join('')

  // Curve points
  const pts     = vals.map((v, i) => ({ x: xOf(i), y: yOf(v) }))
  const histPts = pts.slice(0, nDays + 1)
  const fcPts   = pts.slice(nDays)
  const hPath   = smooth(histPts)
  const fcPath  = fcPts.length >= 2 ? smooth(fcPts) : ''
  const todayX  = xOf(nDays).toFixed(1)
  const fillEnd = histPts.length ? histPts[histPts.length - 1].x.toFixed(1) : todayX
  const fill    = hPath ? `${hPath} L${fillEnd},${yBot} L${PAD.l},${yBot} Z` : ''

  return `<svg width="${W}" height="${H}" style="display:block;flex-shrink:0">
    <defs>
      <clipPath id="il-c"><rect x="${PAD.l}" y="${PAD.t}" width="${iW}" height="${iH}"/></clipPath>
      <linearGradient id="il-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0172A4" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#0172A4" stop-opacity="0.01"/>
      </linearGradient>
    </defs>
    <!-- Zones -->
    <rect x="${PAD.l}" y="${yFull}" width="${iW}" height="${(yRfu-yFull).toFixed(1)}" fill="#24B066" opacity="0.12"/>
    <rect x="${PAD.l}" y="${yRfu.toFixed(1)}" width="${iW}" height="${(ySurv-yRfu).toFixed(1)}" fill="#E8A020" opacity="0.12"/>
    <rect x="${PAD.l}" y="${ySurv.toFixed(1)}" width="${iW}" height="${(yBot-ySurv).toFixed(1)}" fill="#E05252" opacity="0.12"/>
    <!-- Zone lines -->
    <line x1="${PAD.l}" y1="${yRfu.toFixed(1)}" x2="${PAD.l+iW}" y2="${yRfu.toFixed(1)}" stroke="#24B066" stroke-width="1" stroke-dasharray="6,4" opacity="0.55"/>
    <line x1="${PAD.l}" y1="${ySurv.toFixed(1)}" x2="${PAD.l+iW}" y2="${ySurv.toFixed(1)}" stroke="#E05252" stroke-width="1" stroke-dasharray="6,4" opacity="0.55"/>
    <!-- Zone labels -->
    <text x="${PAD.l+iW-4}" y="${((yFull+yRfu)/2+4).toFixed(1)}" text-anchor="end" font-size="9" font-family="-apple-system,sans-serif" fill="#24B066" font-weight="600">RFU</text>
    <text x="${PAD.l+iW-4}" y="${(ySurv+12).toFixed(1)}" text-anchor="end" font-size="9" font-family="-apple-system,sans-serif" fill="#E05252" font-weight="600">Survie</text>
    <!-- Phenological stages -->
    <g clip-path="url(#il-c)">${stadesSvg}</g>
    <!-- Fill -->
    ${fill ? `<path d="${fill}" fill="url(#il-g)" clip-path="url(#il-c)"/>` : ''}
    <!-- Historical curve -->
    ${hPath ? `<path d="${hPath}" fill="none" stroke="#0172A4" stroke-width="2.5" stroke-linejoin="round" clip-path="url(#il-c)"/>` : ''}
    <!-- Forecast (dashed) -->
    ${fcPath ? `<path d="${fcPath}" fill="none" stroke="#0172A4" stroke-width="2" stroke-dasharray="7,5" stroke-linejoin="round" opacity="0.7" clip-path="url(#il-c)"/>` : ''}
    <!-- Today -->
    <line x1="${todayX}" y1="${PAD.t}" x2="${todayX}" y2="${yBot}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="${todayX}" y="${PAD.t - 5}" text-anchor="middle" font-size="9" font-family="-apple-system,sans-serif" fill="#8e8e93">Auj.</text>
    <!-- Y axis -->
    ${yLabels}
    <text x="${PAD.l - 5}" y="${PAD.t - 6}" text-anchor="end" font-size="9" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>
    <!-- X axis -->
    ${xLabels.join('')}
    <!-- Border -->
    <rect x="${PAD.l}" y="${PAD.t}" width="${iW}" height="${iH}" fill="none" stroke="rgba(0,0,0,.07)" stroke-width="1"/>
  </svg>`
}

function makeHistogramSvg(W, H, data) {
  const { pluie, etp, drainage, irrigation, nDays, nFcDays, ru } = data
  const total = nDays + nFcDays

  const PAD = { t: 6, r: 38, b: 22, l: 40 }
  const iW = W - PAD.l - PAD.r, iH = H - PAD.t - PAD.b
  const mid = PAD.t + iH / 2

  const maxPos = Math.max(...pluie.slice(0,total).map((p,i) => p + (irrigation[i]||0)), 1)
  const maxNeg = Math.max(...etp.slice(0,total).map((e,i) => e + (drainage[i]||0)), 1)
  const scale  = Math.max(maxPos, maxNeg, 1)
  const half   = iH / 2

  const barW = Math.max(1.5, (iW / total) - 1)
  const bx   = i => PAD.l + (i / Math.max(total-1,1)) * iW - barW / 2

  let bars = ''
  for (let i = 0; i < total; i++) {
    const pH = (pluie[i] / scale) * half
    const iH2= (irrigation[i] / scale) * half
    const eH = (etp[i] / scale) * half
    const dH = (drainage[i] / scale) * half
    const x  = bx(i).toFixed(1), bw = barW.toFixed(1)
    if (pluie[i] > 0)       bars += `<rect x="${x}" y="${(mid-pH).toFixed(1)}"       width="${bw}" height="${pH.toFixed(1)}"   fill="#2E75B6" opacity="0.85"/>`
    if (irrigation[i] > 0)  bars += `<rect x="${x}" y="${(mid-pH-iH2).toFixed(1)}"   width="${bw}" height="${iH2.toFixed(1)}"  fill="#FF8C00" opacity="0.85"/>`
    bars += `<rect x="${x}" y="${mid.toFixed(1)}" width="${bw}" height="${eH.toFixed(1)}" fill="#00887E" opacity="0.75"/>`
    if (drainage[i] > 0)    bars += `<rect x="${x}" y="${(mid+eH).toFixed(1)}"        width="${bw}" height="${dH.toFixed(1)}"  fill="#8B1A1A" opacity="0.75"/>`
  }

  // X labels
  const apr1   = new Date('2026-04-01T00:00:00')
  const xLabels = []
  for (let i = 0; i <= total; i++) {
    const d = new Date(apr1.getTime() + i * 86400000)
    if (d.getDate() === 1) {
      const x = PAD.l + (i / Math.max(total-1,1)) * iW
      xLabels.push(`<text x="${x.toFixed(1)}" y="${H-4}" text-anchor="middle" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${MON[d.getMonth()]}</text>`)
    }
  }

  const todayX = (PAD.l + (nDays / Math.max(total-1,1)) * iW).toFixed(1)

  return `<svg width="${W}" height="${H}" style="display:block;flex-shrink:0">
    <line x1="${PAD.l}" y1="${mid.toFixed(1)}" x2="${PAD.l+iW}" y2="${mid.toFixed(1)}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>
    ${bars}
    <line x1="${todayX}" y1="${PAD.t}" x2="${todayX}" y2="${PAD.t+iH}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3" opacity="0.7"/>
    ${xLabels.join('')}
    <rect x="${PAD.l}" y="${PAD.t}" width="${iW}" height="${iH}" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="1"/>
  </svg>`
}

function makeLegend() {
  return `<div style="display:flex;gap:10px;flex-wrap:wrap;padding:4px 12px;background:#f9f9f9;border-top:.5px solid rgba(0,0,0,.08);border-bottom:.5px solid rgba(0,0,0,.08)">
    <span style="font-size:10px;color:#0172A4;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:20px;height:2px;background:#0172A4"></span>Réserve</span>
    <span style="font-size:10px;color:#0172A4;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:20px;height:2px;background:#0172A4;border-bottom:2px dashed #0172A4"></span>Prévision</span>
    <span style="font-size:10px;color:#2E75B6;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:10px;height:10px;background:#2E75B6;border-radius:2px"></span>Pluie</span>
    <span style="font-size:10px;color:#FF8C00;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:10px;height:10px;background:#FF8C00;border-radius:2px"></span>Irrigation</span>
    <span style="font-size:10px;color:#00887E;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:10px;height:10px;background:#00887E;border-radius:2px"></span>ETP</span>
    <span style="font-size:10px;color:#8B1A1A;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:10px;height:10px;background:#8B1A1A;border-radius:2px"></span>Drainage</span>
  </div>`
}

function drawChart(container, data) {
  const W = container.clientWidth, H = container.clientHeight
  if (!W || !H) return
  const LEGEND_H  = 32
  const HIST_FRAC = 0.32
  const histH     = Math.round((H - LEGEND_H) * HIST_FRAC)
  const resH      = H - LEGEND_H - histH
  container.innerHTML =
    makeReservoirSvg(W, resH, data) +
    makeLegend() +
    makeHistogramSvg(W, histH, data)
}

// ─── Sub-pages ───────────────────────────────────────────────────────────────

function openConfigForm(plot, onSave) {
  const cfg = getIrrelisConfig(plot.id)
  const body = document.createElement('div')
  body.innerHTML = `
    <div style="padding:4px 0 8px">
      <div class="m-form-label">Culture</div>
      <select id="il-culture" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;margin-bottom:14px">
        ${['Maïs','Blé','Orge','Colza','Tournesol','Sorgho','Betterave'].map(c =>
          `<option${c===cfg.culture?' selected':''}>${c}</option>`).join('')}
      </select>
      <div class="m-form-label">Date de semis</div>
      <input id="il-semis" type="date" value="${cfg.semisDate}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
      <div class="m-form-label">Réserve utile (RU) — mm</div>
      <input id="il-ru" type="number" value="${cfg.ru}" min="20" max="200" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
      <div class="m-form-label">RFU (réserve facilement utilisable) — mm</div>
      <input id="il-rfu" type="number" value="${cfg.rfu}" min="5" max="150" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
      <button id="il-cfg-save" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Enregistrer</button>
    </div>`
  const sheet = showSheet({ title: `Configuration — ${plot.name}`, body, doneLabel: 'Annuler', onDone: () => {} })
  body.querySelector('#il-cfg-save').addEventListener('click', () => {
    setIrrelisConfig(plot.id, {
      culture:   body.querySelector('#il-culture').value,
      semisDate: body.querySelector('#il-semis').value,
      ru:   +(body.querySelector('#il-ru').value)  || cfg.ru,
      rfu:  +(body.querySelector('#il-rfu').value) || cfg.rfu,
    })
    sheet.classList.remove('m-sheet-overlay--show')
    setTimeout(() => { sheet.remove(); onSave?.() }, 280)
    showToast('Configuration enregistrée')
  })
}

function openGererPluvIrrig(plot, data) {
  const { pluie, irrigation, nDays } = data
  const apr1 = new Date('2026-04-01T00:00:00')

  const events = []
  for (let i = 0; i < nDays; i++) {
    const d  = new Date(apr1.getTime() + i * 86400000)
    const ds = d.toLocaleDateString('fr-FR', { day:'numeric', month:'short' })
    if (pluie[i] > 0)      events.push({ type:'pluie',      label: ds, value: pluie[i] })
    if (irrigation[i] > 0) events.push({ type:'irrigation', label: ds, value: irrigation[i] })
  }

  const listHtml = events.slice(-12).reverse().map(e => `
    <div style="display:flex;align-items:center;gap:12px;padding:10px 16px;border-bottom:.5px solid rgba(0,0,0,.07)">
      <div style="width:32px;height:32px;border-radius:50%;background:${e.type==='pluie'?'rgba(46,117,182,.12)':'rgba(255,140,0,.12)'};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <i class="bi ${e.type==='pluie'?'bi-cloud-rain':'bi-droplet-fill'}" style="color:${e.type==='pluie'?'#2E75B6':'#FF8C00'};font-size:14px"></i>
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:600;color:#1c1c1e">${e.type==='pluie'?'Pluie':'Irrigation'}</div>
        <div style="font-size:12px;color:#8e8e93">${e.label}</div>
      </div>
      <div style="font-size:15px;font-weight:700;color:${e.type==='pluie'?'#2E75B6':'#FF8C00'}">${e.value} mm</div>
    </div>`).join('')

  const layer = pushDetail(`
    <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:.5px solid rgba(0,0,0,.1);background:#fff">
      <button id="gpi-back" style="color:#0172A4;background:none;border:none;font-size:15px;cursor:pointer;display:flex;align-items:center;gap:4px"><i class="bi bi-chevron-left"></i> Irré-LIS</button>
      <span style="font-size:16px;font-weight:700;color:#1c1c1e;flex:1;text-align:center">${plot.name}</span>
      <div style="width:80px"></div>
    </div>
    <div style="display:flex;gap:8px;padding:14px 16px 12px">
      <button id="gpi-add-pluie" style="flex:1;background:rgba(46,117,182,.1);color:#2E75B6;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Pluie</button>
      <button id="gpi-add-irrig" style="flex:1;background:rgba(255,140,0,.1);color:#FF8C00;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Irrigation</button>
    </div>
    <div class="m-list-section-header" style="padding:0 16px;margin-bottom:4px">Derniers événements</div>
    <div style="overflow-y:auto;flex:1">
      ${listHtml || '<p style="color:#8e8e93;text-align:center;padding:24px 0">Aucun événement enregistré</p>'}
    </div>
  `)
  layer.style.cssText = 'display:flex;flex-direction:column;background:#f2f2f7'
  layer.querySelector('#gpi-back').addEventListener('click', () => popDetail())

  function openAddSheet(type) {
    const body = document.createElement('div')
    body.innerHTML = `
      <div style="padding:4px 0 8px">
        <div class="m-form-label">Date</div>
        <input id="gpi-date" type="date" value="${new Date().toISOString().split('T')[0]}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
        <div class="m-form-label">Quantité (mm)</div>
        <input id="gpi-mm" type="number" placeholder="ex : 25" min="0" max="300" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
        <button id="gpi-save" style="width:100%;background:${type==='pluie'?'#2E75B6':'#FF8C00'};color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Enregistrer</button>
      </div>`
    const title  = type === 'pluie' ? 'Ajouter une pluie' : 'Ajouter une irrigation'
    const sheet  = showSheet({ title, body, doneLabel: 'Annuler', onDone: () => {} })
    body.querySelector('#gpi-save').addEventListener('click', () => {
      sheet.classList.remove('m-sheet-overlay--show')
      setTimeout(() => sheet.remove(), 280)
      showToast(`${type==='pluie'?'Pluie':'Irrigation'} enregistrée`)
    })
  }
  layer.querySelector('#gpi-add-pluie').addEventListener('click', () => openAddSheet('pluie'))
  layer.querySelector('#gpi-add-irrig').addEventListener('click', () => openAddSheet('irrigation'))
}

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
  const sheet = showSheet({ title: 'Télécharger le bilan', body, doneLabel: 'Annuler', onDone: () => {} })
  body.querySelector('#il-dl-send').addEventListener('click', () => {
    sheet.classList.remove('m-sheet-overlay--show')
    setTimeout(() => sheet.remove(), 280)
    showToast('Bilan envoyé par e-mail')
  })
}

// ─── Main entry point ─────────────────────────────────────────────────────────

export function openIrrelisDetail(plot) {
  const cfg  = getIrrelisConfig(plot.id)
  const semisStr = new Date(cfg.semisDate + 'T00:00:00').toLocaleDateString('fr-FR', { day:'numeric', month:'long' })

  const layer = pushDetail(`
    <div class="m-fs-topbar">
      <button class="m-fs-back" id="il-back"><i class="bi bi-chevron-left"></i>Parcelles</button>
      <span class="m-fs-info-text">${plot.name}</span>
      <button class="m-fs-cfg-btn" id="il-cfg-btn"><i class="bi bi-sliders"></i></button>
    </div>
    <div style="display:flex;align-items:center;gap:8px;padding:7px 14px 6px;background:#fff;border-bottom:.5px solid rgba(0,0,0,.1)">
      <span style="font-size:12px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:3px 9px">Irré-LIS</span>
      <span style="font-size:13px;color:#1c1c1e;font-weight:500">${cfg.culture}</span>
      <span style="font-size:11px;color:#8e8e93;margin-left:auto">Semis : ${semisStr}</span>
    </div>
    <div id="il-chart-area" style="flex:1;overflow:hidden;background:#fff;min-height:0"></div>
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

  const chartArea = layer.querySelector('#il-chart-area')
  let data = getIrrelisDailyData(plot, 5)
  let ro   = null

  function draw() { if (chartArea.clientWidth && chartArea.clientHeight) drawChart(chartArea, data) }

  ro = new ResizeObserver(() => requestAnimationFrame(draw))
  ro.observe(chartArea)
  requestAnimationFrame(draw)

  layer.querySelector('#il-back').addEventListener('click', () => { ro?.disconnect(); popDetail() })

  const refresh = () => { data = getIrrelisDailyData(plot, 5); draw() }
  layer.querySelector('#il-cfg-btn').addEventListener('click', () => openConfigForm(plot, refresh))
  layer.querySelector('#il-btn-config').addEventListener('click', () => openConfigForm(plot, refresh))
  layer.querySelector('#il-btn-pluv').addEventListener('click', () => openGererPluvIrrig(plot, data))
  layer.querySelector('#il-btn-dl').addEventListener('click', () => openTelecharger(plot))
}
