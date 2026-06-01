import { pushDetail, popDetail }    from '../nav.js'
import { showSheet }                from '../ui.js'
import { sensors as allSensors }   from '../../data/sensors.js'

// ─── Metric definitions (mobile IDs) ─────────────────────────────────────────
const METRIC_DEFS = {
  pluie:       { label: 'Pluie',               unit: 'mm',         color: '#2E75B6', isCumul: true },
  temperature: { label: 'Température',          unit: '°C',         color: '#FBAF05' },
  humidite:    { label: 'Humidité de l\'air',  unit: '%',          color: '#5B12A4' },
  pothydr:     { label: 'Potentiel hydrique',  unit: 'kPa',        color: '#A6C157' },
  teneur:      { label: 'Teneur en eau',        unit: '%vol',       color: '#ED9A2C' },
  temp_sol:    { label: 'Température sol',      unit: '°C',         color: '#795548' },
  rayonnement: { label: 'Rayonnement solaire', unit: 'W/m²',       color: '#CBCB0B' },
  etp:         { label: 'Évapotranspiration',  unit: 'mm/j',       color: '#7DBDD7', isCumul: true },
  temp_rosee:  { label: 'Temp. de rosée',      unit: '°C',         color: '#72B0D8' },
  humectation: { label: 'Humectation foliaire',unit: '%',          color: '#00887E' },
  vent:        { label: 'Vent',                 unit: 'km/h',       color: '#616161' },
  par:         { label: 'Rayonnement PAR',      unit: 'µmol/m²/s', color: '#4CBB17' },
  temp_seche:  { label: 'Température sèche',   unit: '°C',         color: '#23B19B' },
  temp_humide: { label: 'Température humide',  unit: '°C',         color: '#5E88EC' },
}

const METRICS_BY_MODEL = {
  'P+':  ['pluie', 'temperature', 'humidite'],
  'PT':  ['pluie', 'temperature'],
  'P':   ['pluie'],
  'SMV': ['pluie', 'temperature', 'humidite'],
  'TH':  ['temperature', 'humidite'],
  'T_MINI':    ['temp_sol'],
  'CHP-15/30': ['pothydr', 'temp_sol'],
  'CHP-30/60': ['pothydr', 'temp_sol'],
  'CHP-60/90': ['pothydr', 'temp_sol'],
  'CAPA-30-3': ['teneur', 'temp_sol'],
  'CAPA-60-6': ['teneur', 'temp_sol'],
  'EC':        ['teneur', 'temp_sol'],
  'LWS':       ['humectation'],
  'PYRANO':    ['rayonnement'],
  'PAR':       ['par'],
  'T_GEL':     ['temp_seche', 'temp_humide'],
  'W':         ['vent'],
}

// ─── Overlay mock data ────────────────────────────────────────────────────────
const SEUILS = {
  temperature: [{ label: 'Gel', v: 0, color: '#5E88EC' }, { label: 'Stress chaud', v: 30, color: '#E07050' }],
  humidite:    [{ label: 'Risque maladies', v: 85, color: '#9C27B0' }],
  pothydr:     [{ label: 'Stress modéré', v: 40, color: '#FFA726' }, { label: 'Stress sévère', v: 80, color: '#EF5350' }],
  teneur:      [{ label: 'Pt. flétrissement', v: 14, color: '#EF5350' }, { label: 'Capac. au champ', v: 38, color: '#42A5F5' }],
  pluie:       [{ label: 'Forte pluie', v: 15, color: '#2E75B6' }],
  temp_sol:    [{ label: 'Froid sol', v: 8, color: '#5E88EC' }, { label: 'Chaud sol', v: 25, color: '#E07050' }],
}

const PLAGES = {
  temperature: [{ label: 'Zone optimale', min: 10, max: 25, color: '#4CAF50' }],
  humidite:    [{ label: 'Zone optimale', min: 40, max: 70, color: '#7DBDD7' }],
  teneur:      [{ label: 'Zone optimale', min: 20, max: 38, color: '#46DA82' }],
  pothydr:     [{ label: 'Zone non stressante', min: 0, max: 40, color: '#A6C157' }],
  temp_sol:    [{ label: 'Zone active', min: 10, max: 22, color: '#795548' }],
}

const PHENO_STAGES = [
  { label: 'Tallage',   daysAgo: 60, color: '#66BB6A' },
  { label: 'Montaison', daysAgo: 35, color: '#9CCC65' },
  { label: 'Épiaison',  daysAgo: 18, color: '#FFA726' },
  { label: 'Floraison', daysAgo: 8,  color: '#FF7043' },
  { label: 'Maturation',daysAgo: 2,  color: '#EF5350' },
]

const MOCK_NOTES = [
  { label: 'Observation parcelle',  daysAgo: 5,  color: '#607D8B' },
  { label: 'Mesure manuelle',       daysAgo: 12, color: '#607D8B' },
  { label: 'Anomalie signalée',     daysAgo: 2,  color: '#E91E63' },
]

const MOCK_TRAITEMENTS = [
  { label: 'Fongicide T1',   daysAgo: 7,  color: '#EF5350' },
  { label: 'Irrigation',     daysAgo: 3,  color: '#2196F3' },
  { label: 'Herbicide',      daysAgo: 18, color: '#EC407A' },
]

// ─── Data generation ──────────────────────────────────────────────────────────
function mockSeries(metricId, count) {
  const cfgs = {
    pluie:       { base: 2,   amp: 5,   min: 0,   sparse: true },
    temperature: { base: 15,  amp: 8,   min: -5,  max: 40 },
    humidite:    { base: 65,  amp: 20,  min: 20,  max: 100 },
    pothydr:     { base: 50,  amp: 40,  min: 0,   max: 150 },
    teneur:      { base: 28,  amp: 10,  min: 5,   max: 50 },
    temp_sol:    { base: 14,  amp: 5,   min: 0,   max: 35 },
    rayonnement: { base: 350, amp: 300, min: 0,   max: 900 },
    etp:         { base: 3,   amp: 2,   min: 0,   max: 8 },
    temp_rosee:  { base: 9,   amp: 5,   min: -2,  max: 18 },
    humectation: { base: 25,  amp: 70,  min: 0,   max: 100, sparse: true },
    vent:        { base: 15,  amp: 15,  min: 0,   max: 80 },
    par:         { base: 900, amp: 800, min: 0,   max: 2000 },
    temp_seche:  { base: 12,  amp: 6,   min: -5,  max: 20 },
    temp_humide: { base: 8,   amp: 5,   min: -8,  max: 15 },
  }
  const cfg = cfgs[metricId] || { base: 50, amp: 20, min: 0, max: 100 }
  return Array.from({ length: count }, (_, i) => {
    const t = i / count * Math.PI * 4
    if (cfg.sparse && Math.random() > 0.2) return 0
    const v = cfg.base + cfg.amp * Math.sin(t - 1) + (Math.random() - 0.5) * cfg.amp * 0.4
    return Math.max(cfg.min, Math.min(cfg.max ?? 9999, v))
  })
}

// ─── Chart draw helpers ───────────────────────────────────────────────────────
function blend(hex, t) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
  return `#${Math.round(r+(255-r)*t).toString(16).padStart(2,'0')}${Math.round(g+(255-g)*t).toString(16).padStart(2,'0')}${Math.round(b+(255-b)*t).toString(16).padStart(2,'0')}`
}

function gradColors(color, id) {
  if (id === 'temperature') return ['#6eb4d4', '#e07050']
  if (id === 'temp_sol')    return ['#a08060', '#795548']
  return [blend(color, 0.55), color]
}

function smoothPath(pts) {
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

function xLabel(agoMins) {
  const d = new Date(Date.now() - agoMins * 60000)
  if (agoMins < 1440) return `${String(d.getHours()).padStart(2,'0')}h`
  if (agoMins >= 43200) { const M=['jan','fév','mar','avr','mai','juin','juil','aoû','sep','oct','nov','déc']; return M[d.getMonth()] }
  return `${d.getDate()}/${d.getMonth()+1}`
}

function fmtV(v) { return Math.abs(v) >= 100 ? v.toFixed(0) : Math.abs(v) >= 10 ? v.toFixed(1) : v.toFixed(2) }

function xAtMinsAgo(minsAgo, count, stepMins, PAD, innerW) {
  const total = count * stepMins
  if (minsAgo > total) return null
  return PAD.l + (1 - minsAgo / total) * innerW
}

// ─── Overlay renderers (same as web) ─────────────────────────────────────────
function renderPlages(metricId, yOf, PAD, innerW, clipId) {
  return (PLAGES[metricId] || []).map(p => {
    const y1 = Math.min(yOf(p.max), yOf(p.min)), y2 = Math.max(yOf(p.max), yOf(p.min))
    return `<rect x="${PAD.l}" y="${y1.toFixed(1)}" width="${innerW}" height="${(y2-y1).toFixed(1)}" fill="${p.color}" opacity="0.13" clip-path="url(#${clipId})"/>
<text x="${PAD.l+innerW-4}" y="${((y1+y2)/2+4).toFixed(1)}" text-anchor="end" font-size="9" font-family="-apple-system,sans-serif" fill="${p.color}" font-weight="500">${p.label}</text>`
  }).join('')
}

function renderSeuils(metricId, yOf, PAD, W) {
  return (SEUILS[metricId] || []).map(s => {
    const y = yOf(s.v).toFixed(1)
    return `<line x1="${PAD.l}" y1="${y}" x2="${W-PAD.r}" y2="${y}" stroke="${s.color}" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="${PAD.l+4}" y="${(parseFloat(y)-3).toFixed(1)}" font-size="9" font-family="-apple-system,sans-serif" fill="${s.color}" font-weight="500">${s.label} (${fmtV(s.v)})</text>`
  }).join('')
}

function renderStades(count, stepMins, PAD, innerW, innerH) {
  return PHENO_STAGES.map(s => {
    const x = xAtMinsAgo(s.daysAgo * 1440, count, stepMins, PAD, innerW)
    if (x === null) return ''
    const xf = x.toFixed(1), tx = (x+4).toFixed(0), ty = (PAD.t+innerH-4).toFixed(0)
    return `<line x1="${xf}" y1="${PAD.t}" x2="${xf}" y2="${PAD.t+innerH}" stroke="${s.color}" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.8"/>
<text transform="translate(${tx},${ty}) rotate(-90)" font-size="9" font-family="-apple-system,sans-serif" fill="${s.color}" font-weight="600">${s.label}</text>`
  }).join('')
}

function renderNotes(count, stepMins, PAD, innerH, innerW) {
  const cy = PAD.t + innerH + 9
  return MOCK_NOTES.map(n => {
    const x = xAtMinsAgo(n.daysAgo * 1440, count, stepMins, PAD, innerW)
    if (x === null) return ''
    const xf = x.toFixed(1)
    return `<circle cx="${xf}" cy="${cy}" r="5" fill="${n.color}" opacity="0.85"><title>${n.label}</title></circle>
<text x="${xf}" y="${cy+4}" text-anchor="middle" font-size="7" font-family="-apple-system,sans-serif" fill="#fff" font-weight="700">N</text>`
  }).join('')
}

function renderTraitements(count, stepMins, PAD, innerH, innerW) {
  return MOCK_TRAITEMENTS.map(t => {
    const x = xAtMinsAgo(t.daysAgo * 1440, count, stepMins, PAD, innerW)
    if (x === null) return ''
    const xf = x.toFixed(1), tipY = PAD.t - 1
    return `<polygon points="${xf},${tipY} ${(x-4).toFixed(1)},${tipY-9} ${(x+4).toFixed(1)},${tipY-9}" fill="${t.color}" opacity="0.85"><title>${t.label}</title></polygon>
<line x1="${xf}" y1="${tipY}" x2="${xf}" y2="${PAD.t+innerH}" stroke="${t.color}" stroke-width="1" stroke-dasharray="3,5" opacity="0.25"/>`
  }).join('')
}

// ─── Main entry point ─────────────────────────────────────────────────────────
export function initChartFullscreen({ sensor = null, linkedSensorIds = [], metricId = null, backLabel = 'Retour' }) {
  // Build metric → sensor map
  const metricToSensor = {}
  if (linkedSensorIds.length > 0) {
    linkedSensorIds.forEach(id => {
      const s = allSensors.find(x => x.id === id)
      if (s) (METRICS_BY_MODEL[s.model] || []).forEach(mid => { if (!metricToSensor[mid]) metricToSensor[mid] = s })
    })
  } else if (sensor) {
    ;(METRICS_BY_MODEL[sensor.model] || []).forEach(mid => { metricToSensor[mid] = sensor })
  }

  const metricIds = Object.keys(metricToSensor)
  if (!metricIds.length) return

  // State
  let currentMetricId = (metricId && metricToSensor[metricId]) ? metricId : metricIds[0]
  let currentPeriod   = '7d'
  let currentStep     = '1h'
  let yScaleMode      = 'auto'
  let yScaleMin = null, yScaleMax = null
  const overlays = { seuils: false, plages: false, stades: false, notes: false, traitements: false }
  let _vals = null

  // Period helpers
  const PERIOD_MINS = { '1d': 1440, 'hier': 1440, '3d': 4320, '7d': 10080, '30d': 43200, '365d': 525600 }
  const STEP_MINS   = { '1h': 60, '1d': 1440, '1w': 10080 }
  const getCount = () => Math.max(2, Math.min(200, Math.floor((PERIOD_MINS[currentPeriod] || 10080) / (STEP_MINS[currentStep] || 60))))
  const getStepMins = () => STEP_MINS[currentStep] || 60
  const getDefaultStep = p => p === '365d' ? '1d' : p === '30d' ? '1d' : '1h'

  const showModel = new Set(Object.values(metricToSensor).map(s => s.model)).size > 1

  // Build the layer HTML
  const layer = pushDetail(`
    <div class="m-fs-topbar">
      <button class="m-fs-back"><i class="bi bi-chevron-left"></i>${backLabel}</button>
      <div class="m-fs-metric-center">
        <select class="m-fs-metric-sel" id="m-metric-sel">
          ${metricIds.map(id => {
            const def = METRIC_DEFS[id]; if (!def) return ''
            const s = metricToSensor[id]
            const label = (showModel && s) ? `${def.label} (${s.model})` : def.label
            return `<option value="${id}"${id === currentMetricId ? ' selected' : ''}>${label}</option>`
          }).join('')}
        </select>
        <span class="m-fs-metric-unit" id="m-metric-unit">${METRIC_DEFS[currentMetricId]?.unit || ''}</span>
      </div>
      <button class="m-fs-cfg-btn" id="m-cfg-btn"><i class="bi bi-sliders"></i></button>
    </div>
    <div class="m-fs-period-bar">
      <div class="m-fs-presets" id="m-period-presets">
        ${[['1d',"Auj."],['hier',"Hier"],['3d',"3j"],['7d',"7j"],['30d',"30j"],['365d',"365j"]].map(([p,l]) =>
          `<button class="m-fs-preset${p === currentPeriod ? ' active' : ''}" data-period="${p}">${l}</button>`
        ).join('')}
      </div>
      <select class="m-fs-step-sel" id="m-step-sel">
        <option value="1h" selected>Horaire</option>
        <option value="1d">Journalier</option>
        <option value="1w">Hebdo</option>
      </select>
    </div>
    <div class="m-fs-chart-wrap" id="m-chart-wrap">
      <svg id="m-main-chart" width="100%" height="100%"></svg>
      <div class="m-fs-tooltip" id="m-chart-tip"></div>
    </div>`)

  layer.classList.add('m-fs-layer')

  // ─── Draw chart ─────────────────────────────────────────────────────────────
  function computeYRange(vals, mid) {
    const isCumul = !!METRIC_DEFS[mid]?.isCumul
    const dMin = isCumul ? 0 : Math.min(...vals)
    const dMax = Math.max(...vals, dMin + 0.001)
    if (yScaleMode === 'personnalisee') return { minV: yScaleMin ?? dMin, maxV: yScaleMax ?? dMax }
    let all = [dMin, dMax]
    if (yScaleMode === 'seuils') {
      ;(SEUILS[mid] || []).forEach(s => all.push(s.v))
      ;(PLAGES[mid] || []).forEach(p => { all.push(p.min); all.push(p.max) })
    }
    const lo = Math.min(...all), hi = Math.max(...all)
    const pad = Math.max((hi - lo) * 0.075, 0.1)
    return { minV: lo - pad, maxV: hi + pad }
  }

  function drawChart() {
    const svg  = layer.querySelector('#m-main-chart')
    const wrap = layer.querySelector('#m-chart-wrap')
    if (!svg || !wrap) return
    const W = wrap.clientWidth, H = wrap.clientHeight
    if (!W || !H || !currentMetricId) return

    const def = METRIC_DEFS[currentMetricId]; if (!def) return
    const count = getCount(), stepMins = getStepMinutes()

    const PAD = { t: 28, r: 18, b: 36, l: 46 }
    const innerW = W - PAD.l - PAD.r, innerH = H - PAD.t - PAD.b

    const vals = mockSeries(currentMetricId, count)
    _vals = vals
    const { minV, maxV } = computeYRange(vals, currentMetricId)
    const range = maxV - minV || 1

    const xOf = i => PAD.l + (i / Math.max(count - 1, 1)) * innerW
    const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

    svg.setAttribute('viewBox', `0 0 ${W} ${H}`)

    const gid = `mg_${currentMetricId}`, cid = `mc_${currentMetricId}`
    const [lo, hi] = gradColors(def.color, currentMetricId)

    let out = `<defs>
      <linearGradient id="${gid}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
        <stop offset="0%" stop-color="${lo}"/><stop offset="100%" stop-color="${hi}"/>
      </linearGradient>
      <clipPath id="${cid}"><rect x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}"/></clipPath>
    </defs>`

    if (overlays.plages) out += renderPlages(currentMetricId, yOf, PAD, innerW, cid)
    if (overlays.stades) out += renderStades(count, stepMins, PAD, innerW, innerH)

    // Grid + labels
    for (let i = 0; i <= 4; i++) {
      const y = PAD.t + (i / 4) * innerH, v = maxV - (i / 4) * range
      out += `<line x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W-PAD.r}" y2="${y.toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1"/>`
      out += `<text x="${PAD.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${fmtV(v)}</text>`
    }
    out += `<line x1="${PAD.l}" y1="${PAD.t+innerH}" x2="${W-PAD.r}" y2="${PAD.t+innerH}" stroke="rgba(0,0,0,.1)" stroke-width="1"/>`
    const lStep = Math.max(1, Math.floor(count / 6))
    for (let i = 0; i < count; i += lStep) {
      const x = xOf(i).toFixed(1)
      out += `<line x1="${x}" y1="${PAD.t}" x2="${x}" y2="${PAD.t+innerH}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`
      out += `<text x="${x}" y="${PAD.t+innerH+16}" text-anchor="middle" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${xLabel((count-i)*stepMins)}</text>`
    }

    if (overlays.seuils || yScaleMode === 'seuils') out += renderSeuils(currentMetricId, yOf, PAD, W)

    // Data
    if (def.isCumul) {
      const bw = Math.max(2, (innerW / count) * 0.65)
      vals.forEach((v, i) => {
        if (v <= 0) return
        const bx = xOf(i), by = yOf(v), bh = (PAD.t + innerH) - by
        out += `<rect x="${(bx-bw/2).toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="url(#${gid})" opacity="0.9" rx="1"/>`
      })
    } else {
      const pts = vals.map((v, i) => ({ x: xOf(i), y: yOf(v) }))
      const lp = smoothPath(pts)
      out += `<path d="${lp} L${xOf(count-1).toFixed(1)},${PAD.t+innerH} L${PAD.l},${PAD.t+innerH} Z" fill="${hi}" opacity="0.06" clip-path="url(#${cid})"/>`
      out += `<path d="${lp}" fill="none" stroke="url(#${gid})" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#${cid})"/>`
    }

    if (overlays.notes)       out += renderNotes(count, stepMins, PAD, innerH, innerW)
    if (overlays.traitements) out += renderTraitements(count, stepMins, PAD, innerH, innerW)

    out += `<rect class="m-fs-hover" x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}" fill="transparent" style="touch-action:none"/>`
    out += `<line class="m-fs-cross" x1="0" y1="${PAD.t}" x2="0" y2="${PAD.t+innerH}" stroke="${hi}" stroke-width="1" opacity="0.6" style="display:none" pointer-events="none"/>`
    out += `<circle class="m-fs-dot" r="5" fill="${hi}" stroke="#fff" stroke-width="2" style="display:none" pointer-events="none"/>`

    svg.innerHTML = out
    bindInteraction(svg, def, hi, vals, xOf, yOf, count, stepMins, PAD, innerW, W, minV, maxV)
  }

  function getStepMinutes() { return STEP_MINS[currentStep] || 60 }

  // ─── Interaction ─────────────────────────────────────────────────────────────
  function bindInteraction(svg, def, hi, vals, xOf, yOf, count, stepMins, PAD, innerW, W, minV, maxV) {
    const hRect = svg.querySelector('.m-fs-hover')
    const cross  = svg.querySelector('.m-fs-cross')
    const dot    = svg.querySelector('.m-fs-dot')
    const tip    = layer.querySelector('#m-chart-tip')
    if (!hRect) return

    function onPos(clientX, clientY) {
      const svgR = svg.getBoundingClientRect()
      const frac = Math.max(0, Math.min(1, (clientX - svgR.left) * (W / svgR.width) - PAD.l) / innerW)
      const idx  = Math.round(frac * (count - 1))
      if (idx < 0 || idx >= vals.length) return
      const v = vals[idx], cx = xOf(idx), cy = yOf(v)
      cross.setAttribute('x1', cx); cross.setAttribute('x2', cx); cross.style.display = ''
      dot.setAttribute('cx', cx); dot.setAttribute('cy', cy); dot.style.display = ''
      const wR = layer.querySelector('#m-chart-wrap').getBoundingClientRect()
      tip.innerHTML = `<div class="m-fs-tip-name">${def.label}</div><div class="m-fs-tip-val" style="color:${hi}">${fmtV(v)} <span class="m-fs-tip-unit">${def.unit}</span></div><div class="m-fs-tip-ts">${xLabel((count-idx)*stepMins)}</div>`
      tip.style.cssText = `display:block;left:${Math.min(clientX-wR.left+12,wR.width-130)}px;top:${Math.max(clientY-wR.top-10,8)}px`
    }
    function onEnd() { cross.style.display='none'; dot.style.display='none'; tip.style.display='none' }

    hRect.addEventListener('pointermove',  e => { e.preventDefault(); onPos(e.clientX, e.clientY) }, { passive: false })
    hRect.addEventListener('pointerdown',  e => onPos(e.clientX, e.clientY))
    hRect.addEventListener('pointerup',    onEnd)
    hRect.addEventListener('pointerleave', onEnd)
  }

  // ─── Wire controls ────────────────────────────────────────────────────────────
  layer.querySelector('.m-fs-back').addEventListener('click', popDetail)

  layer.querySelector('#m-metric-sel').addEventListener('change', e => {
    currentMetricId = e.target.value
    layer.querySelector('#m-metric-unit').textContent = METRIC_DEFS[currentMetricId]?.unit || ''
    drawChart()
  })

  layer.querySelector('#m-period-presets').addEventListener('click', e => {
    const btn = e.target.closest('.m-fs-preset'); if (!btn) return
    layer.querySelectorAll('.m-fs-preset').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    currentPeriod = btn.dataset.period
    const stepSel = layer.querySelector('#m-step-sel')
    stepSel.value = getDefaultStep(currentPeriod)
    currentStep = stepSel.value
    drawChart()
  })

  layer.querySelector('#m-step-sel').addEventListener('change', e => {
    currentStep = e.target.value; drawChart()
  })

  // Config button → bottom sheet
  layer.querySelector('#m-cfg-btn').addEventListener('click', () => {
    const body = document.createElement('div')
    body.innerHTML = `
      <div style="padding:14px 16px;border-bottom:1px solid rgba(0,0,0,.08)">
        <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px">Échelle Y</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${[['auto','Auto-scale'],['seuils','Échelle seuils'],['personnalisee','Échelle personnalisée']].map(([v,l]) =>
            `<label style="display:flex;align-items:center;gap:8px;font-size:14px"><input type="radio" name="m-yscale" value="${v}"${v===yScaleMode?' checked':''}> ${l}</label>`
          ).join('')}
        </div>
        <div id="m-yscale-inputs" style="display:${yScaleMode==='personnalisee'?'flex':'none'};gap:8px;margin-top:10px;align-items:center">
          <input type="number" id="m-yscale-min" placeholder="Min" value="${yScaleMin??''}" style="flex:1;padding:7px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          <span style="color:#8e8e93">—</span>
          <input type="number" id="m-yscale-max" placeholder="Max" value="${yScaleMax??''}" style="flex:1;padding:7px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
        </div>
      </div>
      <div style="padding:14px 16px">
        <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px">Affichage</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${[['seuils','Seuils'],['plages','Plages'],['stades','Stades phénologiques'],['notes','Notes'],['traitements','Traitements']].map(([k,l]) =>
            `<label style="display:flex;align-items:center;justify-content:space-between;font-size:14px">
              ${l}
              <input type="checkbox" data-ov="${k}"${overlays[k]?' checked':''} style="width:18px;height:18px">
            </label>`
          ).join('')}
        </div>
      </div>`

    // Wire yscale radios
    body.querySelectorAll('[name="m-yscale"]').forEach(r => r.addEventListener('change', e => {
      yScaleMode = e.target.value
      body.querySelector('#m-yscale-inputs').style.display = yScaleMode === 'personnalisee' ? 'flex' : 'none'
      drawChart()
    }))
    body.querySelector('#m-yscale-min').addEventListener('change', e => { yScaleMin = e.target.value !== '' ? +e.target.value : null; drawChart() })
    body.querySelector('#m-yscale-max').addEventListener('change', e => { yScaleMax = e.target.value !== '' ? +e.target.value : null; drawChart() })
    body.querySelectorAll('[data-ov]').forEach(cb => cb.addEventListener('change', e => { overlays[e.target.dataset.ov] = e.target.checked; drawChart() }))

    showSheet({ title: 'Configuration', body, doneLabel: 'Fermer', onDone: () => {} })
  })

  // Resize observer
  const ro = new ResizeObserver(() => drawChart())
  ro.observe(layer.querySelector('#m-chart-wrap'))
  drawChart()
}
