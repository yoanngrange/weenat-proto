import { sensors } from '../data/sensors.js'
import { plots }   from '../data/plots.js'

const urlParams = new URLSearchParams(window.location.search)
const sensorId  = parseInt(urlParams.get('sensorId')) || null
const parcelId  = parseInt(urlParams.get('parcelId')) || null
const sensor    = sensors.find(s => s.id === sensorId) || null

// ─── Helpers ─────────────────────────────────────────────────────────────────
function rnd(min, max)  { return Math.floor(Math.random() * (max - min + 1)) + min }
function rndf(min, max) { return parseFloat((Math.random() * (max - min) + min).toFixed(2)) }

// ─── Metric definitions ───────────────────────────────────────────────────────
const METRIC_DEFS = {
  pluie:              { name: 'Pluie',               unit: 'mm',         color: '#2E75B6', baseVal: () => rnd(0, 8),     isCumul: true },
  temperature:        { name: 'Température',          unit: '°C',         color: '#FBAF05', baseVal: () => rnd(10, 28) },
  humidite_air:       { name: 'Humidité de l\'air',  unit: '%',          color: '#5B12A4', baseVal: () => rnd(40, 90) },
  dpv:                { name: 'DPV',                  unit: 'kPa',        color: '#5E88EC', baseVal: () => rndf(0.1, 2.5) },
  vent_vitesse:       { name: 'Vent – vitesse',       unit: 'km/h',       color: '#616161', baseVal: () => rnd(0, 40) },
  vent_rafales:       { name: 'Vent – rafales',       unit: 'km/h',       color: '#525252', baseVal: () => rnd(5, 60) },
  vent_direction:     { name: 'Vent – direction',     unit: '°',          color: '#424242', baseVal: () => rnd(0, 360) },
  rayonnement:        { name: 'Rayonnement',          unit: 'W/m²',       color: '#CBCB0B', baseVal: () => rnd(0, 900) },
  etp:                { name: 'ETP',                  unit: 'mm/j',       color: '#7DBDD7', baseVal: () => rndf(0.5, 5) },
  temperature_min:    { name: 'Température min',      unit: '°C',         color: '#FEE7B4', baseVal: () => rnd(-2, 15) },
  humidite_sol_10:    { name: 'Teneur en eau 10 cm',  unit: '%vol',       color: '#105200', baseVal: () => rnd(15, 45) },
  humidite_sol_20:    { name: 'Teneur en eau 20 cm',  unit: '%vol',       color: '#8C5E82', baseVal: () => rnd(15, 45) },
  humidite_sol_30:    { name: 'Teneur en eau 30 cm',  unit: '%vol',       color: '#46DA82', baseVal: () => rnd(15, 45) },
  humidite_sol_40:    { name: 'Teneur en eau 40 cm',  unit: '%vol',       color: '#949494', baseVal: () => rnd(17, 43) },
  humidite_sol_50:    { name: 'Teneur en eau 50 cm',  unit: '%vol',       color: '#870021', baseVal: () => rnd(18, 42) },
  humidite_sol_60:    { name: 'Teneur en eau 60 cm',  unit: '%vol',       color: '#F608C2', baseVal: () => rnd(18, 42) },
  humidite_sol_90:    { name: 'Teneur en eau 90 cm',  unit: '%vol',       color: '#B14C19', baseVal: () => rnd(20, 40) },
  temp_sol:           { name: 'Température du sol',   unit: '°C',         color: '#795548', baseVal: () => rnd(8, 22) },
  potentiel_hydrique: { name: 'Potentiel hydrique',   unit: 'kPa',        color: '#A6C157', baseVal: () => rnd(10, 150) },
  conductivite:       { name: 'Conductivité',         unit: 'mS/cm',      color: '#2BCDDE', baseVal: () => rndf(0.1, 3) },
  humectation:        { name: 'Humectation foliaire', unit: 'h',          color: '#00887E', baseVal: () => rnd(0, 12) },
  par:                { name: 'Densité flux PAR',     unit: 'µmol/m²/s',  color: '#4CBB17', baseVal: () => rnd(0, 2000) },
  temperature_gel:    { name: 'Temp. feuille/gel',    unit: '°C',         color: '#FEE7B4', baseVal: () => rnd(-3, 12) },
  temp_rosee:         { name: 'Température de rosée', unit: '°C',         color: '#72B0D8', baseVal: () => rnd(4, 16) },
  temp_seche:         { name: 'Température sèche',    unit: '°C',         color: '#23B19B', baseVal: () => rnd(-5, 10) },
  temp_humide:        { name: 'Température humide',   unit: '°C',         color: '#5E88EC', baseVal: () => rnd(-7, 8) },
}

const METRICS_BY_MODEL = {
  'P+':       ['pluie', 'temperature', 'humidite_air'],
  'PT':       ['pluie', 'temperature'],
  'P':        ['pluie'],
  'TH':       ['temperature', 'humidite_air'],
  'T_MINI':   ['temp_sol'],
  'CHP-15/30':['potentiel_hydrique', 'temp_sol'],
  'CHP-30/60':['potentiel_hydrique', 'temp_sol'],
  'CHP-60/90':['humidite_sol_60', 'humidite_sol_90', 'temp_sol'],
  'CAPA-30-3':['humidite_sol_10', 'humidite_sol_20', 'humidite_sol_30', 'temp_sol'],
  'CAPA-60-6':['humidite_sol_10', 'humidite_sol_20', 'humidite_sol_30', 'humidite_sol_40', 'humidite_sol_50', 'humidite_sol_60', 'temp_sol'],
  'EC':       ['conductivite', 'humidite_sol_30', 'temp_sol'],
  'LWS':      ['humectation'],
  'PYRANO':   ['rayonnement'],
  'PAR':      ['par'],
  'T_GEL':    ['temp_seche', 'temp_humide'],
  'SMV':      ['pluie', 'temperature', 'humidite_air'],
  'W':        ['vent_vitesse', 'vent_rafales', 'vent_direction'],
}

// ─── Overlay mock data ────────────────────────────────────────────────────────
const SEUILS = {
  temperature:        [{ label: 'Gel',         v: 0,  color: '#5E88EC' }, { label: 'Stress chaud', v: 30, color: '#E07050' }],
  temperature_min:    [{ label: 'Gel',         v: 0,  color: '#5E88EC' }],
  temperature_gel:    [{ label: 'Gel',         v: 0,  color: '#5E88EC' }],
  temp_sol:           [{ label: 'Froid sol',   v: 8,  color: '#5E88EC' }, { label: 'Chaud sol', v: 25, color: '#E07050' }],
  humidite_air:       [{ label: 'Risque maladies', v: 85, color: '#9C27B0' }],
  potentiel_hydrique: [{ label: 'Stress modéré', v: 40, color: '#FFA726' }, { label: 'Stress sévère', v: 80, color: '#EF5350' }],
  humidite_sol_10:    [{ label: 'Point de flétrissement', v: 14, color: '#EF5350' }, { label: 'Capacité au champ', v: 38, color: '#42A5F5' }],
  humidite_sol_20:    [{ label: 'Point de flétrissement', v: 14, color: '#EF5350' }, { label: 'Capacité au champ', v: 38, color: '#42A5F5' }],
  humidite_sol_30:    [{ label: 'Point de flétrissement', v: 14, color: '#EF5350' }, { label: 'Capacité au champ', v: 38, color: '#42A5F5' }],
  pluie:              [{ label: 'Forte pluie', v: 15, color: '#2E75B6' }],
  conductivite:       [{ label: 'Trop faible', v: 0.5, color: '#FFA726' }, { label: 'Trop élevé', v: 2.5, color: '#EF5350' }],
}

const PLAGES = {
  temperature:        [{ label: 'Zone optimale',      min: 10,  max: 25,  color: '#4CAF50' }],
  humidite_air:       [{ label: 'Zone optimale',      min: 40,  max: 70,  color: '#7DBDD7' }],
  humidite_sol_10:    [{ label: 'Zone optimale',      min: 20,  max: 38,  color: '#46DA82' }],
  humidite_sol_20:    [{ label: 'Zone optimale',      min: 20,  max: 38,  color: '#46DA82' }],
  humidite_sol_30:    [{ label: 'Zone optimale',      min: 20,  max: 38,  color: '#46DA82' }],
  potentiel_hydrique: [{ label: 'Zone non stressante', min: 0,   max: 40,  color: '#A6C157' }],
  conductivite:       [{ label: 'Plage optimale',     min: 0.8, max: 2.0, color: '#2BCDDE' }],
  temp_sol:           [{ label: 'Zone active',        min: 10,  max: 22,  color: '#795548' }],
}

const PHENO_STAGES = [
  { label: 'Levée',     daysAgo: 90, color: '#81C784' },
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
  { label: 'Fertilisation',  daysAgo: 30, color: '#66BB6A' },
]

// parcel-detail.js (page d'origine du lien "plein écran") utilise des IDs de métriques
// différents de ceux de cette page : on les traduit pour éviter de retomber sur la 1ère
// métrique du capteur (ex: Pluie) quel que soit le graphique réellement cliqué.
const METRIC_ID_ALIASES = {
  temp: 'temperature',
  humidite: 'humidite_air',
  tsol: 'temp_sol',
  humec: 'humectation',
  tseche: 'temp_seche',
  thumide: 'temp_humide',
  ec: 'conductivite',
  pothydr: 'potentiel_hydrique',
  vwc10: 'humidite_sol_10',
  vwc20: 'humidite_sol_20',
  vwc30: 'humidite_sol_30',
  vwc40: 'humidite_sol_40',
  vwc50: 'humidite_sol_50',
  vwc60: 'humidite_sol_60',
}

// ─── State ────────────────────────────────────────────────────────────────────
let currentMetricId = urlParams.get('metricId') || null
currentMetricId = METRIC_ID_ALIASES[currentMetricId] || currentMetricId
let currentPeriod   = urlParams.get('period') || '7d'
let currentStep     = urlParams.get('step') || '1h'
let yScaleMode  = 'auto'   // 'auto' | 'seuils' | 'personnalisee'
let yScaleMin   = null
let yScaleMax   = null
let customFrom  = null
let customTo    = null
let _chartVals  = null

const overlays = { seuils: false, plages: false, stades: false, notes: false, traitements: false }

// ─── Multi-sensor support ─────────────────────────────────────────────────────
let _metricToSensor = {}

function buildMetricToSensor() {
  const map = {}
  if (parcelId) {
    sensors.filter(s => s.parcelIds?.includes(parcelId)).forEach(s => {
      ;(METRICS_BY_MODEL[s.model] || []).forEach(id => { if (!map[id]) map[id] = s })
    })
  } else if (sensor) {
    ;(METRICS_BY_MODEL[sensor.model] || []).forEach(id => { map[id] = sensor })
  }
  return map
}

// ─── Period helpers ───────────────────────────────────────────────────────────
function getPeriodMinutes() {
  const table = { '1d': 1440, 'hier': 1440, '3d': 4320, '7d': 10080, '30d': 43200, '365d': 525600 }
  if (currentPeriod === 'custom' && customFrom && customTo) {
    return Math.max(60, Math.round((customTo - customFrom) / 60000))
  }
  return table[currentPeriod] ?? 10080
}

function getStepMinutes() {
  const step = document.getElementById('time-step')?.value || currentStep
  return { max: 15, '1h': 60, '1d': 1440, '1w': 10080, '1mo': 43200 }[step] ?? 60
}

function getDefaultStep(period) {
  if (period === '365d') return '1mo'
  if (period === '30d')  return '1w'
  if (period === '7d')   return '1d'
  return '1h'
}

function getDisplayCount() {
  return Math.max(2, Math.min(300, Math.floor(getPeriodMinutes() / getStepMinutes())))
}

// ─── Y-range computation ──────────────────────────────────────────────────────
function computeYRange(vals, metricId) {
  const isCumul = !!METRIC_DEFS[metricId]?.isCumul
  const dataMin = isCumul ? 0 : Math.min(...vals)
  const dataMax = Math.max(...vals, dataMin + 0.001)

  if (yScaleMode === 'personnalisee') {
    return {
      minV: yScaleMin !== null ? yScaleMin : dataMin,
      maxV: yScaleMax !== null ? yScaleMax : dataMax,
    }
  }

  // For 'seuils' mode, extend range to include threshold & range values
  let allVals = [dataMin, dataMax]
  if (yScaleMode === 'seuils') {
    ;(SEUILS[metricId] || []).forEach(s => allVals.push(s.v))
    ;(PLAGES[metricId] || []).forEach(p => { allVals.push(p.min); allVals.push(p.max) })
  }

  const absMin = Math.min(...allVals)
  const absMax = Math.max(...allVals)
  const pad = Math.max((absMax - absMin) * 0.075, 0.1)
  return { minV: absMin - pad, maxV: absMax + pad }
}

// ─── Data generation ──────────────────────────────────────────────────────────
function hourOfDay(minutesAgo) {
  const ms = Date.now() - minutesAgo * 60000
  return new Date(ms).getHours() + new Date(ms).getMinutes() / 60
}
function solarFactor(h) { return Math.max(0, Math.sin(Math.PI * (h - 6) / 12)) }
function tempFactor(h)  { return 0.5 + 0.5 * Math.sin(2 * Math.PI * (h - 4) / 24 - Math.PI / 2) }

function genVal(metricId, base, minutesAgo) {
  const h = hourOfDay(minutesAgo), tf = tempFactor(h), sf = solarFactor(h)
  const n = () => 1 + (Math.random() - 0.5) * 0.3
  switch (metricId) {
    case 'temperature': case 'temp_seche': case 'temp_humide':
      return ((base - 6) + tf * 12) * n()
    case 'temp_sol': case 'temperature_gel':
      return ((base - 3) + tempFactor(hourOfDay(minutesAgo + 120)) * 6) * n()
    case 'humidite_air':
      return Math.min(100, Math.max(20, (base + (1 - tf) * 25 - tf * 15) * n()))
    case 'rayonnement': case 'par':
      return Math.max(0, sf * base * 1.3 * n())
    case 'etp':
      return Math.max(0, sf * base * 1.5 * n())
    case 'pluie':
      return Math.random() < 0.12 ? base * Math.random() * 2 : 0
    case 'vent_vitesse': case 'vent_rafales':
      return Math.max(0, base * (0.6 + sf * 0.8) * n())
    case 'conductivite': {
      const vwc = 20 + tf * 10 + (Math.random() - 0.5) * 8
      return vwc < 15 ? 0 : Math.max(0, (vwc - 15) * 0.08 * n())
    }
    default: return Math.max(0, base * n())
  }
}

function genSeries(metricId, base, count, stepMins, isCumul) {
  const rawPerStep = Math.max(1, Math.round(stepMins / 15))
  return Array.from({ length: count }, (_, idx) => {
    const minsAgo = (count - 1 - idx) * stepMins
    if (isCumul) {
      let sum = 0
      for (let j = 0; j < rawPerStep; j++) sum += genVal(metricId, base / rawPerStep, minsAgo + j * (stepMins / rawPerStep))
      return sum
    }
    return genVal(metricId, base, minsAgo)
  })
}

// ─── Chart drawing helpers ────────────────────────────────────────────────────
function blendWithWhite(hex, t) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
  return `#${Math.round(r+(255-r)*t).toString(16).padStart(2,'0')}${Math.round(g+(255-g)*t).toString(16).padStart(2,'0')}${Math.round(b+(255-b)*t).toString(16).padStart(2,'0')}`
}

function getGradientColors(color, metricId) {
  if (metricId === 'temperature' || metricId === 'temperature_min') return ['#6eb4d4', '#e07050']
  if (metricId === 'temp_sol') return ['#a08060', '#795548']
  return [blendWithWhite(color, 0.55), color]
}

function smoothPath(points) {
  if (points.length < 2) return ''
  let d = `M${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(i-1,0)], p1 = points[i], p2 = points[i+1], p3 = points[Math.min(i+2,points.length-1)]
    const cp1x = p1.x+(p2.x-p0.x)/6, cp1y = p1.y+(p2.y-p0.y)/6
    const cp2x = p2.x-(p3.x-p1.x)/6, cp2y = p2.y-(p3.y-p1.y)/6
    d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`
  }
  return d
}

function xLabel(agoMins) {
  const d = new Date(Date.now() - agoMins * 60000)
  if (agoMins < 1440) return `${String(d.getHours()).padStart(2,'0')}h`
  if (agoMins >= 43200) { const M=['jan','fév','mar','avr','mai','juin','juil','aoû','sep','oct','nov','déc']; return M[d.getMonth()] }
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`
}

function xAtMinsAgo(minsAgo, count, stepMins, PAD, innerW) {
  const totalMins = count * stepMins
  if (minsAgo > totalMins) return null
  return PAD.l + (1 - minsAgo / totalMins) * innerW
}

function fmtV(v) {
  return Math.abs(v) >= 100 ? v.toFixed(0) : Math.abs(v) >= 10 ? v.toFixed(1) : v.toFixed(2)
}

// ─── Overlay renderers ────────────────────────────────────────────────────────
function renderPlages(metricId, yOf, PAD, innerW, clipId) {
  return (PLAGES[metricId] || []).map(p => {
    const y1 = Math.min(yOf(p.max), yOf(p.min))
    const y2 = Math.max(yOf(p.max), yOf(p.min))
    const h = (y2 - y1).toFixed(1)
    const ymid = ((y1 + y2) / 2 + 4).toFixed(1)
    return `<rect x="${PAD.l}" y="${y1.toFixed(1)}" width="${innerW}" height="${h}" fill="${p.color}" opacity="0.13" clip-path="url(#${clipId})"/>
<text x="${(PAD.l + innerW - 5)}" y="${ymid}" text-anchor="end" font-size="10" font-family="var(--font)" fill="${p.color}" font-weight="500" opacity="0.9">${p.label}</text>`
  }).join('')
}

function renderSeuils(metricId, yOf, PAD, W) {
  return (SEUILS[metricId] || []).map(s => {
    const y = yOf(s.v).toFixed(1)
    return `<line x1="${PAD.l}" y1="${y}" x2="${W - PAD.r}" y2="${y}" stroke="${s.color}" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="${PAD.l + 6}" y="${(parseFloat(y) - 4).toFixed(1)}" font-size="10" font-family="var(--font)" fill="${s.color}" font-weight="500">${s.label} (${fmtV(s.v)})</text>`
  }).join('')
}

function renderStades(count, stepMins, PAD, innerW, innerH) {
  return PHENO_STAGES.map(s => {
    const x = xAtMinsAgo(s.daysAgo * 1440, count, stepMins, PAD, innerW)
    if (x === null) return ''
    const xf = x.toFixed(1)
    const tx = (x + 4).toFixed(0)
    const ty = (PAD.t + innerH - 6).toFixed(0)
    return `<line x1="${xf}" y1="${PAD.t}" x2="${xf}" y2="${(PAD.t + innerH)}" stroke="${s.color}" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.75"/>
<text transform="translate(${tx},${ty}) rotate(-90)" font-size="9" font-family="var(--font)" fill="${s.color}" font-weight="600">${s.label}</text>`
  }).join('')
}

function renderNotes(count, stepMins, PAD, innerH, innerW) {
  const cy = PAD.t + innerH + 9
  return MOCK_NOTES.map(n => {
    const x = xAtMinsAgo(n.daysAgo * 1440, count, stepMins, PAD, innerW)
    if (x === null) return ''
    const xf = x.toFixed(1)
    return `<circle cx="${xf}" cy="${cy}" r="5" fill="${n.color}" opacity="0.85" style="cursor:pointer"><title>${n.label}</title></circle>
<text x="${xf}" y="${(cy + 4)}" text-anchor="middle" font-size="8" font-family="var(--font)" fill="#fff" font-weight="700">N</text>`
  }).join('')
}

function renderTraitements(count, stepMins, PAD, innerH, innerW) {
  return MOCK_TRAITEMENTS.map(t => {
    const x = xAtMinsAgo(t.daysAgo * 1440, count, stepMins, PAD, innerW)
    if (x === null) return ''
    const xf = x.toFixed(1)
    const tipY = (PAD.t - 1).toFixed(0)
    const pts  = `${xf},${tipY} ${(x-4).toFixed(1)},${(PAD.t - 10)} ${(x+4).toFixed(1)},${(PAD.t - 10)}`
    return `<polygon points="${pts}" fill="${t.color}" opacity="0.85" style="cursor:pointer"><title>${t.label}</title></polygon>
<line x1="${xf}" y1="${tipY}" x2="${xf}" y2="${(PAD.t + innerH)}" stroke="${t.color}" stroke-width="1" stroke-dasharray="3,5" opacity="0.25"/>`
  }).join('')
}

// ─── Main chart draw ──────────────────────────────────────────────────────────
function drawMainChart() {
  const svg  = document.getElementById('main-chart')
  const wrap = document.getElementById('chart-wrap')
  const W = wrap.clientWidth, H = wrap.clientHeight
  if (!W || !H || !currentMetricId) return

  const def = METRIC_DEFS[currentMetricId]
  if (!def) return

  const count    = getDisplayCount()
  const stepMins = getStepMinutes()
  const m        = { id: currentMetricId, ...def }
  const PAD      = { t: 28, r: 24, b: 38, l: 58 }
  const innerW   = W - PAD.l - PAD.r
  const innerH   = H - PAD.t - PAD.b

  const vals = genSeries(m.id, m.baseVal(), count, stepMins, !!m.isCumul)
  const { minV, maxV } = computeYRange(vals, m.id)
  const range = maxV - minV || 1

  _chartVals = { vals, stepMins, count, PAD, innerW, innerH, W, H, m, minV, maxV }

  const xOf = i  => PAD.l + (i / Math.max(count - 1, 1)) * innerW
  const yOf = v  => PAD.t + innerH - ((v - minV) / range) * innerH
  _chartVals.xOf = xOf; _chartVals.yOf = yOf

  svg.setAttribute('viewBox', `0 0 ${W} ${H}`)

  const gradId = `g_${currentMetricId}`
  const clipId = `clip_${currentMetricId}`
  const [colorLow, colorHigh] = getGradientColors(m.color, m.id)

  let out = `<defs>
    <linearGradient id="${gradId}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${colorLow}"/>
      <stop offset="100%" stop-color="${colorHigh}"/>
    </linearGradient>
    <clipPath id="${clipId}">
      <rect x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}"/>
    </clipPath>
  </defs>`

  // Overlays behind grid
  if (overlays.plages) out += renderPlages(m.id, yOf, PAD, innerW, clipId)
  if (overlays.stades) out += renderStades(count, stepMins, PAD, innerW, innerH)

  // Grid + Y labels
  for (let i = 0; i <= 5; i++) {
    const y = PAD.t + (i / 5) * innerH, v = maxV - (i / 5) * range
    const label = fmtV(v)
    out += `<line x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W-PAD.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`
    out += `<text x="${PAD.l - 8}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="12" font-family="var(--font)" fill="var(--txt3)">${label}</text>`
  }

  // X axis + labels
  out += `<line x1="${PAD.l}" y1="${PAD.t+innerH}" x2="${W-PAD.r}" y2="${PAD.t+innerH}" stroke="var(--bdr2)" stroke-width="1"/>`
  const labelStep = Math.max(1, Math.floor(count / 8))
  for (let i = 0; i < count; i += labelStep) {
    const x = xOf(i).toFixed(1), agoMins = (count - i) * stepMins
    out += `<line x1="${x}" y1="${PAD.t}" x2="${x}" y2="${PAD.t+innerH}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`
    out += `<text x="${x}" y="${PAD.t + innerH + 18}" text-anchor="middle" font-size="12" font-family="var(--font)" fill="var(--txt3)">${xLabel(agoMins)}</text>`
  }

  // Seuils (above grid, below data)
  if (overlays.seuils || yScaleMode === 'seuils') {
    out += renderSeuils(m.id, yOf, PAD, W)
  }

  // Data
  if (m.isCumul) {
    const barW = Math.max(2, (innerW / count) * 0.65)
    vals.forEach((v, i) => {
      if (v <= 0) return
      const bx = xOf(i), by = yOf(v), bh = (PAD.t + innerH) - by
      out += `<rect x="${(bx-barW/2).toFixed(1)}" y="${by.toFixed(1)}" width="${barW.toFixed(1)}" height="${bh.toFixed(1)}" fill="url(#${gradId})" opacity="0.9" rx="1"/>`
    })
  } else {
    const pts = vals.map((v, i) => ({ x: xOf(i), y: yOf(v) }))
    const linePath = smoothPath(pts)
    const areaD = linePath + ` L${xOf(count-1).toFixed(1)},${PAD.t+innerH} L${PAD.l},${PAD.t+innerH} Z`
    out += `<path d="${areaD}" fill="${colorHigh}" opacity="0.06" clip-path="url(#${clipId})"/>`
    out += `<path d="${linePath}" fill="none" stroke="url(#${gradId})" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#${clipId})"/>`
  }

  // Markers in margin areas
  if (overlays.notes)       out += renderNotes(count, stepMins, PAD, innerH, innerW)
  if (overlays.traitements) out += renderTraitements(count, stepMins, PAD, innerH, innerW)

  // Hover + crosshair + dot
  out += `<rect class="fs-hover-rect" x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}" fill="transparent" style="cursor:crosshair"/>`
  out += `<line class="fs-crosshair" x1="0" y1="${PAD.t}" x2="0" y2="${PAD.t+innerH}" stroke="${colorHigh}" stroke-width="1" opacity="0.5" style="display:none" pointer-events="none"/>`
  out += `<circle class="fs-dot" r="5" fill="${colorHigh}" stroke="#fff" stroke-width="2" style="display:none" pointer-events="none"/>`

  svg.innerHTML = out
  bindChartInteraction(svg, colorHigh)
}

function bindChartInteraction(svg, colorHigh) {
  const tip       = document.getElementById('chart-tooltip')
  const hoverRect = svg.querySelector('.fs-hover-rect')
  const crosshair = svg.querySelector('.fs-crosshair')
  const dot       = svg.querySelector('.fs-dot')
  if (!hoverRect || !_chartVals) return

  const { vals, stepMins, count, PAD, innerW, innerH, W, minV, maxV, m } = _chartVals
  const range = maxV - minV || 1
  const xOf = i => PAD.l + (i / Math.max(count - 1, 1)) * innerW
  const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

  function onMove(clientX, clientY) {
    const svgRect = svg.getBoundingClientRect()
    const px = clientX - svgRect.left
    const frac = Math.max(0, Math.min(1, (px * (W / svgRect.width) - PAD.l) / innerW))
    const idx = Math.round(frac * (count - 1))
    if (idx < 0 || idx >= vals.length) return
    const v = vals[idx]
    const cx = xOf(idx), cy = yOf(v)
    crosshair.setAttribute('x1', cx); crosshair.setAttribute('x2', cx)
    crosshair.style.display = ''
    dot.setAttribute('cx', cx); dot.setAttribute('cy', cy)
    dot.style.display = ''
    const agoMins = (count - idx) * stepMins
    tip.innerHTML = `<div class="fs-tip-name">${m.name}</div><div class="fs-tip-val" style="color:${colorHigh}">${fmtV(v)} <span class="fs-tip-unit">${m.unit}</span></div><div class="fs-tip-ts">${xLabel(agoMins)}</div>`
    const wRect = document.getElementById('chart-wrap').getBoundingClientRect()
    tip.style.cssText = `display:block;left:${Math.min(clientX - wRect.left + 14, wRect.width - 160)}px;top:${Math.max(clientY - wRect.top - 10, 8)}px`
  }

  function onLeave() { crosshair.style.display = 'none'; dot.style.display = 'none'; tip.style.display = 'none' }

  hoverRect.addEventListener('mousemove', e => onMove(e.clientX, e.clientY))
  hoverRect.addEventListener('mouseleave', onLeave)
}

// ─── Metric selector ──────────────────────────────────────────────────────────
function initMetricSel() {
  _metricToSensor = buildMetricToSensor()
  const sel = document.getElementById('metric-sel')
  const ids = Object.keys(_metricToSensor)

  if (!currentMetricId || !_metricToSensor[currentMetricId]) {
    currentMetricId = ids[0] || null
  }

  const showModel = parcelId !== null && new Set(Object.values(_metricToSensor).map(s => s.model)).size > 1
  sel.innerHTML = ids.map(id => {
    const def = METRIC_DEFS[id]
    const s   = _metricToSensor[id]
    if (!def) return ''
    const label = showModel ? `${def.name} (${s.model})` : def.name
    return `<option value="${id}"${id === currentMetricId ? ' selected' : ''}>${label}</option>`
  }).join('')

  document.getElementById('metric-unit').textContent = METRIC_DEFS[currentMetricId]?.unit || ''

  sel.addEventListener('change', () => {
    currentMetricId = sel.value
    document.getElementById('metric-unit').textContent = METRIC_DEFS[currentMetricId]?.unit || ''
    drawMainChart()
  })
}

// ─── Period bar ───────────────────────────────────────────────────────────────
function initPeriodBar() {
  const presets   = document.getElementById('period-presets')
  const customRow = document.getElementById('custom-date-row')
  const stepSel   = document.getElementById('time-step')

  // Set initial state from URL params
  presets.querySelectorAll('.period-preset-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.period === currentPeriod)
  })
  if (stepSel) stepSel.value = currentStep
  if (currentPeriod === 'custom') customRow.style.display = 'flex'

  const today = new Date(), weekAgo = new Date(today - 7 * 86400000)
  document.getElementById('date-from').value = weekAgo.toISOString().slice(0, 10)
  document.getElementById('date-to').value   = today.toISOString().slice(0, 10)

  presets.addEventListener('click', e => {
    const btn = e.target.closest('.period-preset-btn')
    if (!btn) return
    presets.querySelectorAll('.period-preset-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    currentPeriod = btn.dataset.period
    customRow.style.display = currentPeriod === 'custom' ? 'flex' : 'none'
    if (currentPeriod !== 'custom') {
      if (stepSel) { stepSel.value = getDefaultStep(currentPeriod); currentStep = stepSel.value }
      drawMainChart()
    }
  })

  document.getElementById('date-from').addEventListener('change', () => applyCustomDates())
  document.getElementById('date-to').addEventListener('change',   () => applyCustomDates())
  stepSel?.addEventListener('change', e => { currentStep = e.target.value; drawMainChart() })
}

function applyCustomDates() {
  const from = document.getElementById('date-from').value
  const to   = document.getElementById('date-to').value
  if (from && to) {
    customFrom = new Date(from); customTo = new Date(to + 'T23:59:59')
    if (customFrom < customTo) drawMainChart()
  }
}

// ─── Config panel (Y-scale + Affichage) ──────────────────────────────────────
function initConfigPanel() {
  const panel    = document.getElementById('config-panel')
  const backdrop = document.getElementById('cfg-backdrop')
  const body     = document.getElementById('config-body')

  const open  = () => { panel.classList.add('open'); backdrop.classList.add('active') }
  const close = () => { panel.classList.remove('open'); backdrop.classList.remove('active') }

  document.getElementById('cfg-btn').addEventListener('click', open)
  document.getElementById('cfg-close').addEventListener('click', close)
  backdrop.addEventListener('click', close)

  body.innerHTML = `
    <div class="fs-cfg-section">
      <div class="fs-cfg-label">Échelle Y</div>
      <div class="fs-yscale-opts">
        <label class="fs-radio-label"><input type="radio" name="yscale" value="auto" checked> Auto-scale</label>
        <label class="fs-radio-label"><input type="radio" name="yscale" value="seuils"> Échelle seuils</label>
        <label class="fs-radio-label"><input type="radio" name="yscale" value="personnalisee"> Échelle personnalisée</label>
      </div>
      <div id="yscale-inputs" class="fs-yscale-inputs" style="display:none">
        <input type="number" id="yscale-min" placeholder="Min" class="fs-num-input">
        <span style="color:var(--txt3)">—</span>
        <input type="number" id="yscale-max" placeholder="Max" class="fs-num-input">
      </div>
      <div id="yscale-seuils-note" style="display:none;font-size:11px;color:var(--txt3);margin-top:6px">
        Les seuils définis pour cette métrique sont inclus dans l'échelle et affichés sur le graphique.
      </div>
    </div>
    <div class="fs-cfg-section">
      <div class="fs-cfg-label">Affichage</div>
      <div class="fs-overlays">
        <label class="fs-check-label"><input type="checkbox" data-overlay="seuils"> Seuils</label>
        <label class="fs-check-label"><input type="checkbox" data-overlay="plages"> Plages</label>
        <label class="fs-check-label"><input type="checkbox" data-overlay="stades"> Stades phénologiques</label>
        <label class="fs-check-label"><input type="checkbox" data-overlay="notes"> Notes</label>
        <label class="fs-check-label"><input type="checkbox" data-overlay="traitements"> Traitements</label>
      </div>
    </div>`

  // Y scale
  body.querySelectorAll('[name="yscale"]').forEach(r => r.addEventListener('change', e => {
    yScaleMode = e.target.value
    body.querySelector('#yscale-inputs').style.display      = yScaleMode === 'personnalisee' ? 'flex' : 'none'
    body.querySelector('#yscale-seuils-note').style.display = yScaleMode === 'seuils'        ? 'block': 'none'
    drawMainChart()
  }))
  body.querySelector('#yscale-min').addEventListener('change', e => { yScaleMin = e.target.value !== '' ? +e.target.value : null; drawMainChart() })
  body.querySelector('#yscale-max').addEventListener('change', e => { yScaleMax = e.target.value !== '' ? +e.target.value : null; drawMainChart() })

  // Overlays
  body.querySelectorAll('[data-overlay]').forEach(cb => cb.addEventListener('change', e => {
    overlays[e.target.dataset.overlay] = e.target.checked
    drawMainChart()
  }))
}

// ─── Back navigation ──────────────────────────────────────────────────────────
function initNav() {
  const btn = document.getElementById('back-btn')
  if (parcelId) {
    const parcel = plots.find(p => p.id === parcelId)
    btn.href = `parcelle-detail.html?id=${parcelId}`
    if (parcel) document.getElementById('back-label').textContent = parcel.name
  } else if (sensor) {
    btn.href = `capteur-detail.html?id=${sensorId}`
    document.getElementById('back-label').textContent = sensor.serial
  } else {
    btn.href = 'capteurs.html'
    document.getElementById('back-label').textContent = 'Capteurs'
  }
  btn.addEventListener('click', e => {
    if (window.history.length > 1 && document.referrer) { e.preventDefault(); history.back() }
  })
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (!sensor && !parcelId) {
    document.getElementById('chart-wrap').innerHTML = '<div style="padding:48px;color:var(--txt3);text-align:center">Capteur introuvable.</div>'
    return
  }

  initMetricSel()
  initNav()
  initPeriodBar()
  initConfigPanel()

  const ro = new ResizeObserver(() => drawMainChart())
  ro.observe(document.getElementById('chart-wrap'))
  drawMainChart()
})
