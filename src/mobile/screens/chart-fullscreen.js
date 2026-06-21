import { pushDetail, popDetail }    from '../nav.js'
import { showSheet }                from '../ui.js'
import { sensors as allSensors }   from '../../data/sensors.js'
import { IRRIG_SEASON }             from '../../data/irrigations.js'

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
  irrigation:  { label: 'Irrigation',           unit: 'mm',         color: '#FF8C00', isCumul: true },
}

// Métriques pour lesquelles les prévisions affichent des courbes/données
// (les autres métriques n'affichent que le hachurage de la zone future)
const FORECAST_METRICS = new Set([
  'pluie', 'temperature', 'humidite', 'vent', 'pothydr', 'etp', 'temp_rosee', 'rayonnement',
])

// Horizon de prévisions (en jours) selon la période sélectionnée
const PERIOD_FC_DAYS = { j7j2: 2 }

const MODEL_LABELS = {
  'P+':         'Station météo',
  'PT':         'Station météo',
  'P':          'Pluviomètre',
  'SMV':        'Station météo virtuelle',
  'TH':         'Thermomètre-hygromètre',
  'T_MINI':     'Thermomètre de sol',
  'W':          'Anémomètre',
  'PYRANO':     'Pyranomètre',
  'PAR':        'Capteur PAR',
  'LWS':        "Capteur d'humectation foliaire",
  'T_GEL':      'Capteur de gel',
  'CHP-15/30':  'Tensiomètre',
  'CHP-30/60':  'Tensiomètre',
  'CHP-60/90':  'Tensiomètre',
  'CAPA-30-3':  'Sonde capacitive',
  'CAPA-60-6':  'Sonde capacitive',
  'EC':         'Sonde de fertirrigation',
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
  const ms = [...metricId].reduce((a, c) => a + c.charCodeAt(0), metricId.length * 17)
  const sr = (i, o = 0) => { const x = Math.sin(ms * 0.07 + i * 0.5 + o * 1.3) * 10000; return x - Math.floor(x) }

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
    if (cfg.sparse && count >= 10 && sr(i) > 0.25) return 0
    const v = cfg.base + cfg.amp * Math.sin(t - 1) + (sr(i, 1) - 0.5) * cfg.amp * 0.4
    return Math.max(cfg.min, Math.min(cfg.max ?? 9999, v))
  })
}

function irrigationSeries(plotId, count, stepMins, fcCount = 0, forecastMins = 0) {
  const now = Date.now()
  const bucketMs = stepMins * 60000
  const startMs = now - count * bucketMs
  const vals = new Array(count + fcCount).fill(0)
  const fcBucketMs = fcCount > 0 ? (forecastMins * 60000) / fcCount : 0
  IRRIG_SEASON.filter(i => i.plotId === plotId).forEach(i => {
    const t = new Date(i.iso).getTime()
    if (t < startMs) return
    if (t <= now) {
      const idx = Math.min(count - 1, Math.floor((t - startMs) / bucketMs))
      vals[idx] += i.mm
    } else if (fcCount > 0 && t <= now + forecastMins * 60000) {
      const idx = Math.min(fcCount - 1, Math.floor((t - now) / fcBucketMs))
      vals[count + idx] += i.mm
    }
  })
  return vals
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
  const abs = Math.abs(agoMins)
  if (abs < 1440) return `${String(d.getHours()).padStart(2,'0')}h`
  if (abs >= 43200) { const M=['jan','fév','mar','avr','mai','juin','juil','aoû','sep','oct','nov','déc']; return M[d.getMonth()] }
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`
}

function tipLabel(agoMins, stepMins) {
  const d = new Date(Date.now() - agoMins * 60000)
  const hh = String(d.getHours()).padStart(2,'0')
  const mm = String(d.getMinutes()).padStart(2,'0')
  const hStr = mm === '00' ? `${hh}h` : `${hh}h${mm}`
  if (stepMins <= 60) {
    const dateStr = `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`
    return `${dateStr} ${hStr}`
  }
  if (stepMins < 10080) return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`
  const M = ['jan','fév','mar','avr','mai','juin','juil','aoû','sep','oct','nov','déc']
  return `sem. ${M[d.getMonth()]} ${d.getDate()}`
}

function fmtV(v) { return Math.abs(v) >= 100 ? v.toFixed(0) : Math.abs(v) >= 10 ? v.toFixed(1) : v.toFixed(2) }

function xAtMinsAgo(minsAgo, count, stepMins, PAD, innerW, totalCount = count) {
  const total = count * stepMins
  if (minsAgo > total) return null
  const nowX = PAD.l + (count - 1) / Math.max(totalCount - 1, 1) * innerW
  return nowX - (minsAgo / total) * (nowX - PAD.l)
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

function renderStades(count, stepMins, PAD, innerW, innerH, totalCount = count) {
  return PHENO_STAGES.map(s => {
    const x = xAtMinsAgo(s.daysAgo * 1440, count, stepMins, PAD, innerW, totalCount)
    if (x === null) return ''
    const xf = x.toFixed(1), tx = (x+4).toFixed(0), ty = (PAD.t+innerH-4).toFixed(0)
    return `<line x1="${xf}" y1="${PAD.t}" x2="${xf}" y2="${PAD.t+innerH}" stroke="${s.color}" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.8"/>
<text transform="translate(${tx},${ty}) rotate(-90)" font-size="9" font-family="-apple-system,sans-serif" fill="${s.color}" font-weight="600">${s.label}</text>`
  }).join('')
}

function renderNotes(count, stepMins, PAD, innerH, innerW, totalCount = count) {
  const cy = PAD.t + innerH + 9
  return MOCK_NOTES.map(n => {
    const x = xAtMinsAgo(n.daysAgo * 1440, count, stepMins, PAD, innerW, totalCount)
    if (x === null) return ''
    const xf = x.toFixed(1)
    return `<circle cx="${xf}" cy="${cy}" r="5" fill="${n.color}" opacity="0.85"><title>${n.label}</title></circle>
<text x="${xf}" y="${cy+4}" text-anchor="middle" font-size="7" font-family="-apple-system,sans-serif" fill="#fff" font-weight="700">N</text>`
  }).join('')
}

function renderTraitements(count, stepMins, PAD, innerH, innerW, totalCount = count) {
  return MOCK_TRAITEMENTS.map(t => {
    const x = xAtMinsAgo(t.daysAgo * 1440, count, stepMins, PAD, innerW, totalCount)
    if (x === null) return ''
    const xf = x.toFixed(1), tipY = PAD.t - 1
    return `<polygon points="${xf},${tipY} ${(x-4).toFixed(1)},${tipY-9} ${(x+4).toFixed(1)},${tipY-9}" fill="${t.color}" opacity="0.85"><title>${t.label}</title></polygon>
<line x1="${xf}" y1="${tipY}" x2="${xf}" y2="${PAD.t+innerH}" stroke="${t.color}" stroke-width="1" stroke-dasharray="3,5" opacity="0.25"/>`
  }).join('')
}

// ─── Main entry point ─────────────────────────────────────────────────────────
export function initChartFullscreen({ sensor = null, linkedSensorIds = [], metricId = null, backLabel = 'Retour', parcel = null }) {
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
  if (parcel && IRRIG_SEASON.some(i => i.plotId === parcel.id)) metricIds.push('irrigation')
  if (!metricIds.length) return

  // State
  let currentMetricId = (metricId && metricIds.includes(metricId)) ? metricId : metricIds[0]
  let currentPeriod   = 'j7j2'
  let currentStep     = '1d'
  let yScaleMode      = 'auto'
  let yScaleMin = null, yScaleMax = null
  let customFromDate = null, customToDate = null
  const overlays = { seuils: false, plages: false, stades: false, notes: false, traitements: false }
  let _vals = null

  // Period helpers
  const PERIOD_MINS = { '1d': 1440, 'hier': 1440, '3d': 4320, '7d': 10080, 'j7j2': 10080, '30d': 43200, '365d': 525600, 'custom': 10080 }
  const STEP_MINS   = { '1h': 60, '1d': 1440, '1w': 10080 }
  const getCount = () => {
    let mins = PERIOD_MINS[currentPeriod] || 10080
    if (currentPeriod === 'custom' && customFromDate && customToDate) {
      const ms = new Date(customToDate) - new Date(customFromDate)
      if (ms > 0) mins = Math.max(60, ms / 60000)
    }
    return Math.max(2, Math.min(200, Math.floor(mins / (STEP_MINS[currentStep] || 60))))
  }
  const getStepMins = () => STEP_MINS[currentStep] || 60
  const getDefaultStep = p => p === '365d' ? '1d' : p === '30d' ? '1d' : p === 'j7j2' ? '1d' : '1h'

  const showModel = new Set(Object.values(metricToSensor).map(s => s.model)).size > 1

  const infoText = parcel
    ? `${parcel.name}${parcel.crop ? ' - ' + parcel.crop : ''}`
    : sensor ? `${MODEL_LABELS[sensor.model] || sensor.model} ${sensor.model} ${sensor.serial}` : ''

  // Build the layer HTML
  const layer = pushDetail(`
    <div class="m-fs-topbar">
      <button class="m-fs-back"><i class="bi bi-chevron-left"></i>${backLabel}</button>
      <span class="m-fs-info-text">${infoText}</span>
      <button class="m-fs-cfg-btn" id="m-cfg-btn"><i class="bi bi-gear"></i></button>
    </div>
    <div class="m-fs-period-bar">
      <select class="m-period-sel" id="m-metric-sel">
        ${metricIds.map(id => {
          const def = METRIC_DEFS[id]; if (!def) return ''
          const s = metricToSensor[id]
          const label = (showModel && s) ? `${def.label} (${s.model})` : def.label
          return `<option value="${id}"${id === currentMetricId ? ' selected' : ''}>${label}</option>`
        }).join('')}
      </select>
      <div style="display:flex;gap:6px">
        <select class="m-period-sel" id="m-period-sel">
          <option value="j7j2" selected>J-7 → J+2</option>
          <option value="1d">Aujourd'hui</option>
          <option value="hier">Hier</option>
          <option value="3d">3 jours</option>
          <option value="7d">7 jours</option>
          <option value="30d">30 jours</option>
          <option value="365d">365 jours</option>
          <option value="custom">Personnalisée</option>
        </select>
        <select class="m-step-sel" id="m-step-sel"${currentPeriod === 'j7j2' ? ' disabled' : ''}>
          ${currentPeriod === 'j7j2' ? '' : `<option value="1h"${currentStep === '1h' ? ' selected' : ''}>Horaire</option>`}
          <option value="1d"${currentStep === '1d' ? ' selected' : ''}>Journalier</option>
          <option value="1w"${currentStep === '1w' ? ' selected' : ''}>Hebdo</option>
        </select>
      </div>
      <div class="m-fs-custom-row" id="m-custom-row" style="display:none">
        <input type="date" id="m-custom-from" class="m-custom-date">
        <span style="color:#8e8e93;font-size:12px;flex-shrink:0">→</span>
        <input type="date" id="m-custom-to" class="m-custom-date">
      </div>
    </div>
    <div class="m-fs-chart-wrap" id="m-chart-wrap" style="flex:1;position:relative;overflow:hidden;background:#fff">
      <svg id="m-main-chart" width="100%" height="100%" style="display:block"></svg>
      <div id="m-chart-tip" style="display:none;position:absolute;pointer-events:none;background:rgba(28,28,30,.88);color:#fff;border-radius:8px;padding:7px 11px;font-size:12px;z-index:10;white-space:nowrap;box-shadow:0 3px 10px rgba(0,0,0,.2)"></div>
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

    const periodDays = (count * stepMins) / 1440
    const periodFcDays = PERIOD_FC_DAYS[currentPeriod] || 0
    const hatchCount = periodFcDays > 0 ? Math.max(1, Math.round(periodFcDays / periodDays * count)) : 0
    const showFcData = hatchCount > 0 && FORECAST_METRICS.has(currentMetricId)
    const fcCount = showFcData ? hatchCount : 0
    const totalCount = count + hatchCount
    const forecastMins = hatchCount > 0 ? periodFcDays * 1440 : 0

    const PAD = { t: 28, r: 18, b: 36, l: 46 }
    const innerW = W - PAD.l - PAD.r, innerH = H - PAD.t - PAD.b

    const vals = currentMetricId === 'irrigation' && parcel
      ? irrigationSeries(parcel.id, count, stepMins, hatchCount, hatchCount > 0 ? periodFcDays * 1440 : 0)
      : mockSeries(currentMetricId, count + fcCount)
    _vals = vals
    const { minV, maxV } = computeYRange(vals, currentMetricId)
    const range = maxV - minV || 1

    const xOf = i => PAD.l + (i / Math.max(totalCount - 1, 1)) * innerW
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

    // Zone striée représentant la portion "prévisions" du graphique
    if (hatchCount > 0) {
      const nowX = xOf(count - 1)
      const stripeId = `${cid}_stripe`
      out += `<defs><pattern id="${stripeId}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
          <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
        </pattern></defs>
        <rect x="${nowX.toFixed(1)}" y="${PAD.t}" width="${(W-PAD.r-nowX).toFixed(1)}" height="${innerH}" fill="url(#${stripeId})" clip-path="url(#${cid})"/>
        <line x1="${nowX.toFixed(1)}" y1="${PAD.t}" x2="${nowX.toFixed(1)}" y2="${PAD.t+innerH}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="${(W-PAD.r-4).toFixed(1)}" y="${(PAD.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93" font-style="italic">Prévisions</text>`
    }

    if (overlays.plages) out += renderPlages(currentMetricId, yOf, PAD, innerW, cid)
    if (overlays.stades) out += renderStades(count, stepMins, PAD, innerW, innerH, totalCount)

    // Grid + labels
    for (let i = 0; i <= 4; i++) {
      const y = PAD.t + (i / 4) * innerH, v = maxV - (i / 4) * range
      out += `<line x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W-PAD.r}" y2="${y.toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1"/>`
      out += `<text x="${PAD.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${fmtV(v)}</text>`
    }
    out += `<line x1="${PAD.l}" y1="${PAD.t+innerH}" x2="${W-PAD.r}" y2="${PAD.t+innerH}" stroke="rgba(0,0,0,.1)" stroke-width="1"/>`
    const lStep = Math.max(1, Math.floor(totalCount / 6))
    for (let i = 0; i < totalCount; i += lStep) {
      const x = xOf(i).toFixed(1)
      out += `<line x1="${x}" y1="${PAD.t}" x2="${x}" y2="${PAD.t+innerH}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`
      out += `<text x="${x}" y="${PAD.t+innerH+16}" text-anchor="middle" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${xLabel((count-i)*stepMins)}</text>`
    }

    if (overlays.seuils || yScaleMode === 'seuils') out += renderSeuils(currentMetricId, yOf, PAD, W)

    // Data
    if (def.isCumul) {
      const bw = Math.max(2, (innerW / totalCount) * 0.65)
      vals.forEach((v, i) => {
        if (v <= 0) return
        const isFc = i >= count
        const bx = xOf(i), by = yOf(v), bh = (PAD.t + innerH) - by
        out += `<rect x="${(bx-bw/2).toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="${isFc ? '#C7C7CC' : `url(#${gid})`}" opacity="${isFc ? '0.5' : '0.9'}" rx="1"/>`
      })
    } else {
      const histPts = vals.slice(0, count).map((v, i) => ({ x: xOf(i), y: yOf(v) }))
      const fcPts   = vals.slice(count - 1).map((v, i) => ({ x: xOf(count - 1 + i), y: yOf(v) }))
      const lp = smoothPath(histPts)
      out += `<path d="${lp} L${xOf(count-1).toFixed(1)},${PAD.t+innerH} L${PAD.l},${PAD.t+innerH} Z" fill="${hi}" opacity="0.06" clip-path="url(#${cid})"/>`
      out += `<path d="${lp}" fill="none" stroke="url(#${gid})" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#${cid})"/>`
      if (fcCount > 0) {
        const fcLp = smoothPath(fcPts)
        out += `<path d="${fcLp}" fill="none" stroke="url(#${gid})" stroke-width="2.5" stroke-dasharray="5,4" stroke-linejoin="round" stroke-linecap="round" opacity="0.5" clip-path="url(#${cid})"/>`
      }
    }

    if (overlays.notes)       out += renderNotes(count, stepMins, PAD, innerH, innerW, totalCount)
    if (overlays.traitements) out += renderTraitements(count, stepMins, PAD, innerH, innerW, totalCount)

    out += `<rect class="m-fs-hover" x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}" fill="transparent" style="touch-action:none"/>`
    out += `<line class="m-fs-cross" x1="0" y1="${PAD.t}" x2="0" y2="${PAD.t+innerH}" stroke="${hi}" stroke-width="1" opacity="0.6" style="display:none" pointer-events="none"/>`
    out += `<circle class="m-fs-dot" r="5" fill="${hi}" stroke="#fff" stroke-width="2" style="display:none" pointer-events="none"/>`

    svg.innerHTML = out
    bindInteraction(svg, def, hi, vals, xOf, yOf, count, stepMins, PAD, innerW, W, H, minV, maxV, totalCount)
  }

  function getStepMinutes() { return STEP_MINS[currentStep] || 60 }

  // ─── Interaction ─────────────────────────────────────────────────────────────
  function bindInteraction(svg, def, hi, vals, xOf, yOf, count, stepMins, PAD, innerW, W, H, minV, maxV, totalCount = count) {
    const hRect = svg.querySelector('.m-fs-hover')
    const cross  = svg.querySelector('.m-fs-cross')
    const dot    = svg.querySelector('.m-fs-dot')
    const tip    = layer.querySelector('#m-chart-tip')
    const wrap   = layer.querySelector('#m-chart-wrap')
    if (!hRect) return

    function onPos(clientX, clientY) {
      const svgR = svg.getBoundingClientRect()
      const frac = Math.max(0, Math.min(1, ((clientX - svgR.left) * (W / svgR.width) - PAD.l) / innerW))
      const idx  = Math.round(frac * (totalCount - 1))
      if (idx < 0 || idx >= vals.length) return
      const v = vals[idx], cx = xOf(idx), cy = yOf(v)
      cross.setAttribute('x1', cx); cross.setAttribute('x2', cx); cross.style.display = ''
      dot.setAttribute('cx', cx); dot.setAttribute('cy', cy); dot.style.display = ''
      const wR = wrap.getBoundingClientRect()
      const relX = clientX - wR.left
      const relY = clientY - wR.top
      tip.style.display = 'none'
      const tipLeft = relX + 14 + tip.offsetWidth > wR.width ? relX - tip.offsetWidth - 10 : relX + 14
      const tipTop  = Math.max(relY - 50, 8)
      tip.innerHTML = `<div style="font-size:10px;opacity:.7;margin-bottom:2px">${def.label}</div><div style="font-size:16px;font-weight:700;color:${hi}">${fmtV(v)} <span style="font-size:11px;font-weight:400;opacity:.8">${def.unit}</span></div><div style="font-size:10px;opacity:.7;margin-top:2px">${tipLabel((count-idx)*stepMins, stepMins)}</div>`
      tip.style.cssText = `display:block;position:absolute;pointer-events:none;background:rgba(28,28,30,.88);color:#fff;border-radius:8px;padding:7px 11px;font-size:12px;z-index:10;white-space:nowrap;box-shadow:0 3px 10px rgba(0,0,0,.2);left:${tipLeft}px;top:${tipTop}px`
    }
    function onEnd() { cross.style.display='none'; dot.style.display='none'; tip.style.display='none' }

    hRect.addEventListener('pointermove',  e => { e.preventDefault(); onPos(e.clientX, e.clientY) }, { passive: false })
    hRect.addEventListener('pointerdown',  e => { e.currentTarget.setPointerCapture(e.pointerId); onPos(e.clientX, e.clientY) })
    hRect.addEventListener('pointerup',    e => { if (e.pointerType === 'mouse') onEnd() })
    hRect.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') onEnd() })
    hRect.addEventListener('pointercancel', onEnd)
  }

  // ─── Wire controls ────────────────────────────────────────────────────────────
  layer.querySelector('.m-fs-back').addEventListener('click', popDetail)

  layer.querySelector('#m-metric-sel').addEventListener('change', e => {
    currentMetricId = e.target.value
    drawChart()
  })

  layer.querySelector('#m-period-sel').addEventListener('change', e => {
    currentPeriod = e.target.value
    const customRow = layer.querySelector('#m-custom-row')
    customRow.style.display = currentPeriod === 'custom' ? 'flex' : 'none'
    const stepSel = layer.querySelector('#m-step-sel')
    stepSel.querySelectorAll('option[value="1h"]').forEach(o => o.remove())
    if (currentPeriod !== 'j7j2') {
      stepSel.insertAdjacentHTML('afterbegin', '<option value="1h">Horaire</option>')
    }
    stepSel.disabled = currentPeriod === 'j7j2'
    if (currentPeriod !== 'custom') {
      stepSel.value = getDefaultStep(currentPeriod)
      currentStep = stepSel.value
    }
    drawChart()
  })

  layer.querySelector('#m-step-sel').addEventListener('change', e => {
    currentStep = e.target.value; drawChart()
  })

  layer.querySelector('#m-custom-from').addEventListener('change', e => { customFromDate = e.target.value; drawChart() })
  layer.querySelector('#m-custom-to').addEventListener('change', e => { customToDate = e.target.value; drawChart() })

  // Config button → bottom sheet
  layer.querySelector('#m-cfg-btn').addEventListener('click', () => {
    const isPothydr = currentMetricId === 'pothydr'
    const hasPlages = currentMetricId === 'temp_sol' || currentMetricId === 'teneur'

    const yscaleOpts = [['auto', 'Auto-scale'], ...( isPothydr ? [['seuils', 'Échelle seuils']] : []), ['personnalisee', 'Échelle personnalisée']]
    const ovOpts = [
      ...(isPothydr  ? [['seuils', 'Seuils']]                          : []),
      ...(hasPlages  ? [['plages', 'Plages']]                          : []),
      ['stades',      'Stades phénologiques'],
      ['notes',       'Notes'],
      ['traitements', 'Traitements'],
    ]

    const body = document.createElement('div')
    body.innerHTML = `
      <div style="padding:14px 16px;border-bottom:1px solid rgba(0,0,0,.08)">
        <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px">Échelle Y</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${yscaleOpts.map(([v,l]) =>
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
          ${ovOpts.map(([k,l]) =>
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

// ─── Cumul fullscreen (histogramme croissant) ────────────────────────────────
// Affiche un cumul (widget "Cumuls préférés" ou widget "Cumuls" d'une parcelle) sous forme
// d'histogramme où chaque jour ajoute la valeur des jours précédents à celle du jour : les
// barres ne font qu'augmenter, jusqu'au total affiché sur la carte (valeur exacte du dernier jour).
export function initCumulFullscreen({ label, unit = '', color = '#0172A4', total = 0, fromDateIso, backLabel = 'Retour', seedKey = '', growthShape = 'linear' }) {
  const fromDate = new Date(fromDateIso + 'T00:00:00')
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const days = Math.max(1, Math.round((today - fromDate) / 86400000) + 1)
  const dateAt = i => { const d = new Date(fromDate); d.setDate(d.getDate() + i); return d }
  const fmtDate = d => d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
  const dayOfYear = d => Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000)

  // Répartition journalière pseudo-aléatoire déterministe qui se cumule exactement à `total`.
  // Très peu de métriques progressent vraiment de façon linéaire dans la réalité :
  // - 'solar' (rayonnement)   : cycle saisonnier, pic au solstice (~21 juin, jour 172).
  // - 'evapo' (ETP)           : cycle saisonnier, entraîné par chaleur + rayonnement, pic mi-juillet (jour 190).
  // - 'temperature' (degrés-jours) : cycle saisonnier, pic fin juillet (jour 205, accumulation de chaleur).
  // - 'cold' (heures de froid) : cycle saisonnier inverse, pic mi-janvier (jour 15, cœur de l'hiver) —
  //   plat le reste de l'année, augmente fortement en hiver.
  // - 'bursty' (pluie, humectation) : événementiel — la plupart des jours n'apportent presque rien,
  //   quelques jours de pluie concentrent l'essentiel du cumul (palier puis saut, pas une diagonale).
  // - 'linear' (par défaut) : à peu près constant jour après jour, juste du bruit.
  const seed = [...String(seedKey)].reduce((a, c) => a + c.charCodeAt(0), seedKey.length * 31 + days)
  const seasonalWeight = (doy, peakDay) => Math.max(0.05, (Math.cos((doy - peakDay) / 365 * 2 * Math.PI) + 1) / 2)
  const SEASONAL_PEAK_DAY = { solar: 172, evapo: 190, temperature: 205, cold: 15 }
  const weights = Array.from({ length: days }, (_, i) => {
    const noise = Math.abs(Math.sin(seed * 0.13 + i * 1.71)) + 0.15
    const peakDay = SEASONAL_PEAK_DAY[growthShape]
    if (peakDay) {
      const seasonal = seasonalWeight(dayOfYear(dateAt(i)), peakDay)
      return seasonal * (0.6 + noise * 0.4)
    }
    if (growthShape === 'bursty') {
      // Un seul "jour de pluie" (gros saut) par bloc d'environ 9 jours, le reste quasi plat —
      // palier puis saut, pas une diagonale lisse.
      const chunkSize  = 9
      const chunkIdx   = Math.floor(i / chunkSize)
      const posInChunk = i % chunkSize
      const rainDay    = Math.floor(Math.abs(Math.sin(seed * 0.7 + chunkIdx * 3.1)) * chunkSize)
      if (posInChunk !== rainDay) return 0.03
      return 3 + Math.abs(Math.sin(seed * 1.3 + chunkIdx * 2.7)) * 12
    }
    return noise
  })
  const wSum = weights.reduce((a, b) => a + b, 0)
  let running = 0
  const cumulVals = weights.map(w => { running += (w / wSum) * total; return +running.toFixed(2) })
  if (cumulVals.length) cumulVals[cumulVals.length - 1] = +total.toFixed(2)

  const layer = pushDetail(`
    <div class="m-fs-topbar">
      <button class="m-fs-back"><i class="bi bi-chevron-left"></i>${backLabel}</button>
      <span class="m-fs-info-text">${label} — depuis le ${fmtDate(fromDate)}</span>
      <div style="width:32px"></div>
    </div>
    <div class="m-fs-chart-wrap" id="m-cumul-wrap" style="flex:1;position:relative;overflow:hidden;background:#fff">
      <svg id="m-cumul-chart" width="100%" height="100%" style="display:block"></svg>
      <div id="m-cumul-tip" style="display:none;position:absolute;pointer-events:none;background:rgba(28,28,30,.88);color:#fff;border-radius:8px;padding:7px 11px;font-size:12px;z-index:10;white-space:nowrap;box-shadow:0 3px 10px rgba(0,0,0,.2)"></div>
    </div>`)
  layer.classList.add('m-fs-layer')

  function draw() {
    const svg  = layer.querySelector('#m-cumul-chart')
    const wrap = layer.querySelector('#m-cumul-wrap')
    if (!svg || !wrap) return
    const W = wrap.clientWidth, H = wrap.clientHeight
    if (!W || !H) return

    const PAD = { t: 28, r: 18, b: 36, l: 46 }
    const innerW = W - PAD.l - PAD.r, innerH = H - PAD.t - PAD.b
    const maxV = Math.max(...cumulVals, 1) * 1.08
    const xOf = i => PAD.l + (days > 1 ? (i / (days - 1)) * innerW : innerW / 2)
    const yOf = v => PAD.t + innerH - (v / maxV) * innerH
    const bw  = Math.max(1.5, (innerW / days) * 0.7)

    svg.setAttribute('viewBox', `0 0 ${W} ${H}`)

    let grid = ''
    for (let i = 0; i <= 4; i++) {
      const y = PAD.t + (i / 4) * innerH, v = maxV - (i / 4) * maxV
      grid += `<line x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W-PAD.r}" y2="${y.toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1"/>`
      grid += `<text x="${PAD.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${fmtV(v)}</text>`
    }

    let bars = ''
    cumulVals.forEach((v, i) => {
      const bx = xOf(i), by = yOf(v), bh = (PAD.t + innerH) - by
      bars += `<rect x="${(bx-bw/2).toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="${color}" opacity="0.85" rx="1"/>`
    })

    let xlabels = ''
    const lStep = Math.max(1, Math.round(days / 6))
    for (let i = 0; i < days; i += lStep) {
      xlabels += `<text x="${xOf(i).toFixed(1)}" y="${(PAD.t+innerH+16).toFixed(1)}" text-anchor="middle" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${fmtDate(dateAt(i))}</text>`
    }

    svg.innerHTML = `${grid}${bars}<line x1="${PAD.l}" y1="${(PAD.t+innerH).toFixed(1)}" x2="${W-PAD.r}" y2="${(PAD.t+innerH).toFixed(1)}" stroke="rgba(0,0,0,.1)" stroke-width="1"/>${xlabels}
      <rect class="m-cf-hover" x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}" fill="transparent" style="touch-action:none"/>`

    const hRect = svg.querySelector('.m-cf-hover')
    const tip   = layer.querySelector('#m-cumul-tip')

    function onPos(clientX, clientY) {
      const svgR = svg.getBoundingClientRect()
      const frac = Math.max(0, Math.min(1, ((clientX - svgR.left) * (W / svgR.width) - PAD.l) / innerW))
      const idx  = Math.round(frac * (days - 1))
      if (idx < 0 || idx >= cumulVals.length) return
      const wR = wrap.getBoundingClientRect()
      const relX = clientX - wR.left, relY = clientY - wR.top
      const tipLeft = relX + 14 + 110 > wR.width ? relX - 120 : relX + 14
      tip.innerHTML = `<div style="font-size:16px;font-weight:700;color:${color}">${fmtV(cumulVals[idx])} <span style="font-size:11px;font-weight:400;opacity:.8">${unit}</span></div><div style="font-size:10px;opacity:.7;margin-top:2px">${fmtDate(dateAt(idx))}</div>`
      tip.style.cssText = `display:block;position:absolute;pointer-events:none;background:rgba(28,28,30,.88);color:#fff;border-radius:8px;padding:7px 11px;font-size:12px;z-index:10;white-space:nowrap;box-shadow:0 3px 10px rgba(0,0,0,.2);left:${tipLeft}px;top:${Math.max(relY-50,8)}px`
    }
    function onEnd() { tip.style.display = 'none' }

    hRect.addEventListener('pointermove',  e => { e.preventDefault(); onPos(e.clientX, e.clientY) }, { passive: false })
    hRect.addEventListener('pointerdown',  e => { e.currentTarget.setPointerCapture(e.pointerId); onPos(e.clientX, e.clientY) })
    hRect.addEventListener('pointerup',    e => { if (e.pointerType === 'mouse') onEnd() })
    hRect.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') onEnd() })
  }

  layer.querySelector('.m-fs-back').addEventListener('click', popDetail)
  const ro = new ResizeObserver(draw)
  ro.observe(layer.querySelector('#m-cumul-wrap'))
  draw()
}
