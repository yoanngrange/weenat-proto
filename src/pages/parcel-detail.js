// Parcel detail page — full-featured, persisted via localStorage store
import { plots } from '../data/plots.js'
import { sensors as allSensors } from '../data/sensors.js'
import { orgs } from '../data/orgs.js'
import { members } from '../data/members.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { getParcel, patchParcel } from '../data/store.js'

const urlParams = new URLSearchParams(window.location.search)
const parcelId  = parseInt(urlParams.get('id'))
const parcelBase = plots.find(p => p.id === parcelId)

// ─── Helpers ──────────────────────────────────────────────────────────────────

function rnd(min, max)  { return Math.floor(Math.random() * (max - min + 1)) + min }
function rndf(min, max) { return parseFloat((Math.random() * (max - min) + min).toFixed(2)) }

// ─── Metric definitions ───────────────────────────────────────────────────────

// Always-available on every parcel (derived from closest weather station)
const ALWAYS_METRICS = [
  { id: 'etp',        name: 'Évapotranspiration (ETP)',  unit: 'mm/j', color: '#c090e0', base: () => rndf(0.5, 5),   cumul: { label: 'Cumul ETP',    unit: 'mm'  }, isCumul: false, chartType: 'bar' },
  { id: 'rayonnement',name: 'Rayonnement',               unit: 'W/m²', color: '#f5c842', base: () => rnd(0, 900),    cumul: { label: 'Énergie',      unit: 'Wh/m²' }, isCumul: false },
  { id: 'temp_rosee', name: 'Température de rosée',      unit: '°C',   color: '#80c8e8', base: () => rnd(2, 16),     isCumul: false },
]

const METRICS_BY_MODEL = {
  'P+':       [
    { id: 'pluie',       name: 'Pluie',       unit: 'mm',   color: '#45b7d1', base: () => rnd(0, 8),    cumul: { label: 'Cumul pluie', unit: 'mm' }, isCumul: true,  chartType: 'bar' },
    { id: 'temp',        name: 'Température', unit: '°C',   color: '#e07050', base: () => rnd(10, 28),  cumul: { label: 'DJC',        unit: '°j' } },
    { id: 'humidite',    name: 'Humidité air', unit: '%',   color: '#4ecdc4', base: () => rnd(40, 90)  },
    { id: 'vent',        name: 'Vent',         unit: 'km/h', color: '#7bc4b0', base: () => rnd(0, 35)  },
    { id: 'dpv',         name: 'DPV',          unit: 'kPa',  color: '#a8d8b0', base: () => rndf(0.1, 2.5) },
  ],
  'PT': [
    { id: 'pluie', name: 'Pluie',       unit: 'mm',  color: '#45b7d1', base: () => rnd(0, 8), cumul: { label: 'Cumul pluie', unit: 'mm' }, isCumul: true,  chartType: 'bar' },
    { id: 'temp',  name: 'Température', unit: '°C',  color: '#e07050', base: () => rnd(10, 28), cumul: { label: 'DJC', unit: '°j' } },
  ],
  'P': [
    { id: 'pluie', name: 'Pluie', unit: 'mm', color: '#45b7d1', base: () => rnd(0, 8), cumul: { label: 'Cumul pluie', unit: 'mm' }, isCumul: true, chartType: 'bar' },
  ],
  'TH': [
    { id: 'temp',     name: 'Température',  unit: '°C', color: '#e07050', base: () => rnd(10, 28), cumul: { label: 'DJC', unit: '°j' } },
    { id: 'humidite', name: 'Humidité air', unit: '%',  color: '#4ecdc4', base: () => rnd(40, 90) },
    { id: 'dpv',      name: 'DPV',          unit: 'kPa',color: '#a8d8b0', base: () => rndf(0.1, 2.5) },
  ],
  'CHP-15/30': [
    { id: 'pothydr', name: 'Potentiel hydrique', unit: 'kPa', color: '#5b8dd9', base: () => rnd(10, 150) },
    { id: 'tsol',    name: 'Temp. sol',          unit: '°C',  color: '#bb8fce', base: () => rnd(8, 22)   },
  ],
  'CHP-30/60': [
    { id: 'pothydr', name: 'Potentiel hydrique', unit: 'kPa', color: '#5b8dd9', base: () => rnd(10, 150) },
    { id: 'tsol',    name: 'Temp. sol',          unit: '°C',  color: '#bb8fce', base: () => rnd(8, 22)   },
  ],
  'CHP-60/90': [
    { id: 'pothydr', name: 'Potentiel hydrique', unit: 'kPa', color: '#5b8dd9', base: () => rnd(10, 150) },
    { id: 'tsol',    name: 'Temp. sol',          unit: '°C',  color: '#bb8fce', base: () => rnd(8, 22)   },
  ],
  'CAPA-30-3': [
    { id: 'vwc10', name: 'Hum. sol 10 cm', unit: '%vol', color: '#f0cc60', base: () => rnd(15, 45) },
    { id: 'vwc20', name: 'Hum. sol 20 cm', unit: '%vol', color: '#c89c30', base: () => rnd(15, 45) },
    { id: 'vwc30', name: 'Hum. sol 30 cm', unit: '%vol', color: '#a07010', base: () => rnd(15, 45) },
    { id: 'tsol',  name: 'Temp. sol',      unit: '°C',   color: '#bb8fce', base: () => rnd(8, 22)  },
  ],
  'CAPA-60-6': [
    { id: 'vwc10', name: 'Hum. sol 10 cm', unit: '%vol', color: '#f0d070', base: () => rnd(15, 45) },
    { id: 'vwc20', name: 'Hum. sol 20 cm', unit: '%vol', color: '#d8b050', base: () => rnd(15, 45) },
    { id: 'vwc30', name: 'Hum. sol 30 cm', unit: '%vol', color: '#c09030', base: () => rnd(15, 45) },
    { id: 'vwc40', name: 'Hum. sol 40 cm', unit: '%vol', color: '#a87010', base: () => rnd(17, 43) },
    { id: 'vwc50', name: 'Hum. sol 50 cm', unit: '%vol', color: '#905200', base: () => rnd(18, 42) },
    { id: 'vwc60', name: 'Hum. sol 60 cm', unit: '%vol', color: '#783400', base: () => rnd(18, 42) },
    { id: 'tsol',  name: 'Temp. sol',      unit: '°C',   color: '#bb8fce', base: () => rnd(8, 22)  },
  ],
  'T_MINI': [
    { id: 'tmin', name: 'Temp. min', unit: '°C', color: '#90b0e0', base: () => rnd(-2, 15), cumul: { label: 'Heures de froid', unit: 'h' } },
  ],
  'LWS': [
    { id: 'humec', name: 'Humectation feuille', unit: 'h', color: '#78d8a0', base: () => rnd(0, 12) },
  ],
  'T_GEL': [
    { id: 'tgel', name: 'Temp. feuille', unit: '°C', color: '#a0d8a0', base: () => rnd(-3, 12), cumul: { label: 'Heures de gel', unit: 'h' } },
  ],
  'W': [
    { id: 'vent',     name: 'Vent – vitesse', unit: 'km/h', color: '#7bc4b0', base: () => rnd(0, 40) },
    { id: 'rafales',  name: 'Vent – rafales', unit: 'km/h', color: '#5aa490', base: () => rnd(5, 60) },
  ],
  'EC': [
    { id: 'ec',   name: 'Conductivité', unit: 'mS/cm', color: '#f0a030', base: () => rndf(0.1, 3) },
    { id: 'tsol', name: 'Temp. sol',    unit: '°C',    color: '#bb8fce', base: () => rnd(8, 22) },
  ],
  'PYRANO': [
    { id: 'rayonnement', name: 'Rayonnement', unit: 'W/m²', color: '#f5c842', base: () => rnd(0, 900), cumul: { label: 'Énergie', unit: 'Wh/m²' } },
  ],
}

// CHP tensiometers: multiple can coexist on the same parcel — skip conflict check
const TENSIO_MODELS = ['CHP-15/30', 'CHP-30/60', 'CHP-60/90']

const ALL_INTEGRATIONS = [
  'Modèles Arvalis — PRÉVI-LIS / MILÉOS', 'Xarvio', 'Pixagri', 'VitiMeteo',
  'Millésime', 'Rimpro', 'Cropwise Protector', 'IRRÉ-LIS Mono-Culture',
  'Movida GrapeVision', 'DeciTrait',
]

// ─── State ────────────────────────────────────────────────────────────────────

let parcelState = {}

function initState() {
  const stored = getParcel(parcelId)
  parcelState = { ...parcelBase, ...stored }

  if (!parcelState.linkedSensorIds) {
    const defaults = allSensors.filter(s => s.parcelId === parcelId).map(s => s.id)
    parcelState.linkedSensorIds = stored.linkedSensorIds ?? defaults
  }
  if (!parcelState.integrations) {
    parcelState.integrations = [...(parcelBase.integrations || [])]
  }
  if (!parcelState.alertes) {
    parcelState.alertes = []
  }

}

function saveState(patch) {
  Object.assign(parcelState, patch)
  patchParcel(parcelId, patch)
}

// ─── Period / step state ──────────────────────────────────────────────────────

let currentPeriod = '7d'
let customFrom = null
let customTo   = null

function getPeriodMinutes() {
  const table = { '1d': 1440, 'hier': 1440, '3d': 4320, '7d': 10080, '30d': 43200, '365d': 525600 }
  if (currentPeriod === 'custom' && customFrom && customTo) {
    return Math.max(60, Math.round((customTo - customFrom) / 60000))
  }
  return table[currentPeriod] ?? 10080
}

function getStepMinutes() {
  const step = document.getElementById('time-step')?.value || '1h'
  return { max: 15, '1h': 60, '1d': 1440, '1w': 10080, '1mo': 43200 }[step] ?? 60
}

function getDefaultStep(period) {
  if (period === '365d') return '1mo'
  if (period === '30d')  return '1w'
  if (period === '7d')   return '1d'
  return '1h'
}

function getDisplayCount() {
  const total = getPeriodMinutes()
  const step  = getStepMinutes()
  return Math.max(2, Math.min(200, Math.floor(total / step)))
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  if (!parcelBase) {
    document.body.innerHTML = '<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>'
    return
  }

  initState()

  updateBreadcrumb(parcelState.name || parcelBase.name, {
    label: 'Parcelles',
    href: 'parcelles.html',
  })

  renderCharts()
  renderPanel()
  initMiniMap()
  initPanelToggle()
  initPeriodControls()
  initTabs()
  initDashGrid()
  syncStickyChartControls()
})

function syncStickyChartControls() {
  const tabBar = document.querySelector('.detail-tab-bar')
  const update = () => {
    const top = tabBar.getBoundingClientRect().height + 60
    document.documentElement.style.setProperty('--sticky-charts-top', top + 'px')
  }
  update()
  new ResizeObserver(update).observe(tabBar)
}

// ─── Weather strip ────────────────────────────────────────────────────────────

// ─── Charts ───────────────────────────────────────────────────────────────────

function renderCharts() {
  const container = document.getElementById('charts-container')
  container.innerHTML = ''

  // Sensor-specific metrics first
  const linkedSensors = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  linkedSensors.forEach(s => {
    const metrics = METRICS_BY_MODEL[s.model]
    if (!metrics) return

    const groupHeader = document.createElement('div')
    groupHeader.className = 'chart-group-header'
    groupHeader.innerHTML = `
      <i class="bi bi-broadcast" style="color:var(--pri)"></i>
      <strong>${s.model}</strong>
      <span class="chart-group-serial">${s.serial}</span>
      ${s.event ? `<span class="detail-badge detail-badge--err"><i class="bi bi-exclamation-triangle-fill"></i> ${s.event}</span>` : ''}
    `
    container.appendChild(groupHeader)
    metrics.forEach(m => appendChartCard(container, m))
  })

  // Always-available weather metrics last
  const alwaysHeader = document.createElement('div')
  alwaysHeader.className = 'chart-group-header'
  alwaysHeader.innerHTML = `<i class="bi bi-cloud-sun" style="color:var(--pri)"></i> <strong>Données météo</strong> <span class="chart-group-serial">Station de référence</span>`
  container.appendChild(alwaysHeader)
  ALWAYS_METRICS.forEach(m => appendChartCard(container, m))

  drawAllCharts()
}

function appendChartCard(container, m) {
  const base = m.base()
  const card = document.createElement('div')
  card.className = 'chart-card'
  card.dataset.base       = base
  card.dataset.color      = m.color
  card.dataset.cumul      = m.isCumul ? '1' : ''
  card.dataset.chartType  = m.chartType || 'line'
  card.dataset.metricId   = m.id
  card.dataset.metricName = m.name
  card.dataset.metricUnit = m.unit

  const cumulHtml = m.cumul
    ? `<div class="chart-cumul"><span class="chart-cumul-label">${m.cumul.label}</span><span class="chart-cumul-value">${genCumulValue(m)} ${m.cumul.unit}</span></div>`
    : ''

  card.innerHTML = `
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${m.color}">${m.name}</span>
      <span class="chart-card-unit">${m.unit}</span>
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${cumulHtml}
  `
  container.appendChild(card)
}

// ─── Global tooltip ───────────────────────────────────────────────────────────

let _tooltip = null
function getTooltip() {
  if (!_tooltip) {
    _tooltip = document.createElement('div')
    _tooltip.className = 'chart-tooltip'
    document.body.appendChild(_tooltip)
  }
  return _tooltip
}

// ─── Color gradient helpers ────────────────────────────────────────────────────

// Returns [colorLow, colorHigh] for a gradient based on the metric color.
// Temperature gets a blue→red gradient. Others: desaturated→full.
function getGradientColors(color, metricId) {
  if (metricId === 'temp' || metricId === 'temperature') return ['#6eb4d4', '#e07050']
  if (metricId === 'tmin') return ['#aecce8', '#5580c0']
  if (metricId === 'temp_rosee') return ['#a0d0f0', '#4090c0']
  // Default: mix towards white at the low end
  return [blendWithWhite(color, 0.55), color]
}

function blendWithWhite(hex, t) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const rr = Math.round(r + (255 - r) * t)
  const gg = Math.round(g + (255 - g) * t)
  const bb = Math.round(b + (255 - b) * t)
  return `#${rr.toString(16).padStart(2,'0')}${gg.toString(16).padStart(2,'0')}${bb.toString(16).padStart(2,'0')}`
}

// ─── Smooth curve path (Catmull-Rom → cubic Bezier) ──────────────────────────

function smoothPath(points) {
  if (points.length < 2) return ''
  if (points.length === 2) {
    return `M${points[0].x},${points[0].y} L${points[1].x},${points[1].y}`
  }
  let d = `M${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(i - 1, 0)]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[Math.min(i + 2, points.length - 1)]
    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6
    d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`
  }
  return d
}

// ─── X-axis label formatter ───────────────────────────────────────────────────

function xLabel(agoMins) {
  const d = new Date(Date.now() - agoMins * 60000)
  if (agoMins < 1440) {
    return `${String(d.getHours()).padStart(2, '0')}h`
  }
  if (agoMins >= 43200) {
    const MONTHS = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aoû', 'sep', 'oct', 'nov', 'déc']
    return MONTHS[d.getMonth()]
  }
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`
}

// ─── Realistic time-series simulation ────────────────────────────────────────

function hourOfDay(minutesAgo) {
  const ms = Date.now() - minutesAgo * 60000
  return new Date(ms).getHours() + new Date(ms).getMinutes() / 60
}

function solarFactor(h) {
  return Math.max(0, Math.sin(Math.PI * (h - 6) / 12))
}

function tempFactor(h) {
  return 0.5 + 0.5 * Math.sin(2 * Math.PI * (h - 4) / 24 - Math.PI / 2)
}

function genRealisticVal(metricId, base, minutesAgo, noise = 0.15) {
  const h  = hourOfDay(minutesAgo)
  const tf = tempFactor(h)
  const sf = solarFactor(h)
  const n  = () => 1 + (Math.random() - 0.5) * 2 * noise

  switch (metricId) {
    case 'temp': {
      return ((base - 6) + tf * 12) * n()
    }
    case 'tmin': {
      return ((base - 4) + tf * 8) * n()
    }
    case 'temp_rosee': {
      const airTemp = (base - 6) + tf * 12
      return Math.min(airTemp - 1, ((base - 8) + tf * 6)) * n()
    }
    case 'tsol': {
      const h2 = hourOfDay(minutesAgo + 120)
      return ((base - 3) + tempFactor(h2) * 6) * n()
    }
    case 'humidite': {
      return Math.min(100, Math.max(20, (base + (1 - tf) * 25 - tf * 15) * n()))
    }
    case 'rayonnement': {
      return Math.max(0, sf * base * 1.3 * n())
    }
    case 'etp': {
      return Math.max(0, sf * base * 1.5 * n())
    }
    case 'dpv': {
      return Math.max(0, (sf * base * 1.4 + 0.05) * n())
    }
    case 'humec': {
      return Math.max(0, base * Math.max(0, 0.8 - sf * 1.2) * n())
    }
    case 'pluie': {
      return Math.random() < 0.12 ? base * Math.random() * 2 : 0
    }
    case 'vent':
    case 'rafales': {
      return Math.max(0, base * (0.6 + sf * 0.8) * n())
    }
    default:
      return Math.max(0, base * n())
  }
}

// ─── Draw all charts ──────────────────────────────────────────────────────────

function drawAllCharts() {
  const count = getDisplayCount()
  const step  = getStepMinutes()

  document.querySelectorAll('.chart-card').forEach(card => {
    const base      = parseFloat(card.dataset.base)
    const color     = card.dataset.color
    const isCumul   = card.dataset.cumul === '1'
    const chartType = card.dataset.chartType || 'line'
    const metricId  = card.dataset.metricId || ''
    const metricName = card.dataset.metricName || ''
    const metricUnit = card.dataset.metricUnit || ''
    if (card.dataset.isIrrigation) {
      drawIrrigationChart(card.querySelector('.chart-svg'), color, count, step)
    } else {
      drawChart(card.querySelector('.chart-svg'), base, color, count, step, isCumul, chartType, metricId, metricName, metricUnit)
    }
  })
}

function drawChart(svg, base, color, count, stepMins, isCumul, chartType = 'line', metricId = '', metricName = '', metricUnit = '') {
  const W = 600, H = 180, PAD = { t: 14, r: 10, b: 28, l: 46 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  // Generate values with realistic day/night cycle
  const rawPerStep = Math.max(1, Math.round(stepMins / 15))
  const vals = Array.from({ length: count }, (_, idx) => {
    const minsAgo = (count - 1 - idx) * stepMins
    if (isCumul) {
      let sum = 0
      for (let j = 0; j < rawPerStep; j++) {
        sum += genRealisticVal(metricId, base / rawPerStep, minsAgo + j * (stepMins / rawPerStep))
      }
      return sum
    } else {
      return genRealisticVal(metricId, base, minsAgo)
    }
  })

  const minV = chartType === 'bar' ? 0 : Math.min(...vals)
  const maxV = Math.max(...vals)
  const range = maxV - minV || 1

  const xOf = i => PAD.l + (i / Math.max(count - 1, 1)) * innerW
  const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

  // Gradient ID (unique per SVG element)
  const gradId = `grad_${Math.random().toString(36).slice(2)}`
  const [colorLow, colorHigh] = getGradientColors(color, metricId)

  let out = `<defs>
    <linearGradient id="${gradId}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${colorLow}"/>
      <stop offset="100%" stop-color="${colorHigh}"/>
    </linearGradient>
    <clipPath id="clip_${gradId}">
      <rect x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}"/>
    </clipPath>
  </defs>`

  // ── Horizontal grid lines + Y labels ──
  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = maxV - (i / 4) * range
    const label = Math.abs(v) >= 100 ? v.toFixed(0) : Math.abs(v) >= 10 ? v.toFixed(1) : v.toFixed(2)
    out += `<line x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W - PAD.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`
    out += `<text x="${PAD.l - 5}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${label}</text>`
  }

  // ── Vertical grid lines (limited, aligned to X labels) ──
  const labelStep = Math.max(1, Math.floor(count / 6))
  for (let i = 0; i < count; i += labelStep) {
    const x = xOf(i).toFixed(1)
    const agoMins = (count - i) * stepMins
    out += `<line x1="${x}" y1="${PAD.t}" x2="${x}" y2="${PAD.t + innerH}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`
    out += `<text x="${x}" y="${H - 6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${xLabel(agoMins)}</text>`
  }

  if (chartType === 'bar') {
    const barW = Math.max(2, (innerW / count) * 0.65)
    vals.forEach((v, i) => {
      if (v <= 0) return
      const x = xOf(i)
      const y = yOf(v)
      const h = (PAD.t + innerH) - y
      out += `<rect x="${(x - barW / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" fill="url(#${gradId})" opacity="0.9" rx="1"/>`
    })
  } else {
    const pts = vals.map((v, i) => ({ x: xOf(i), y: yOf(v) }))
    const linePath = smoothPath(pts)

    // Area fill (very light)
    const areaD = linePath +
      ` L${xOf(count - 1).toFixed(1)},${PAD.t + innerH} L${PAD.l.toFixed(1)},${PAD.t + innerH} Z`
    out += `<path d="${areaD}" fill="${colorHigh}" opacity="0.07" clip-path="url(#clip_${gradId})"/>`
    // Stroke with gradient
    out += `<path d="${linePath}" fill="none" stroke="url(#${gradId})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${gradId})"/>`
  }

  // ── Invisible overlay for tooltip interaction ──
  out += `<rect class="chart-hover-rect" x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}" fill="transparent" style="cursor:crosshair"/>`

  svg.innerHTML = out

  // Attach tooltip
  attachChartTooltip(svg, vals, xOf, yOf, minV, maxV, count, stepMins, metricName, metricUnit, color, PAD, W, H)
}

function attachChartTooltip(svg, vals, xOf, yOf, _minV, _maxV, count, stepMins, metricName, metricUnit, color, PAD, W, _H) {
  const tip  = getTooltip()
  const rect = svg.querySelector('.chart-hover-rect')
  if (!rect) return

  // Dot marker (reused)
  const ns = 'http://www.w3.org/2000/svg'
  const dot = document.createElementNS(ns, 'circle')
  dot.setAttribute('r', '4')
  dot.setAttribute('fill', color)
  dot.setAttribute('stroke', '#fff')
  dot.setAttribute('stroke-width', '1.5')
  dot.style.display = 'none'
  dot.style.pointerEvents = 'none'
  svg.appendChild(dot)

  rect.addEventListener('mousemove', e => {
    const svgRect = svg.getBoundingClientRect()
    const scaleX  = W / svgRect.width
    const svgX    = (e.clientX - svgRect.left) * scaleX

    // Find nearest index
    const innerW = W - PAD.l - PAD.r
    const frac   = Math.max(0, Math.min(1, (svgX - PAD.l) / innerW))
    const idx    = Math.round(frac * (count - 1))
    if (idx < 0 || idx >= vals.length) return

    const v  = vals[idx]
    const cx = xOf(idx)
    const cy = yOf(v)

    dot.setAttribute('cx', cx)
    dot.setAttribute('cy', cy)
    dot.style.display = ''

    const agoMins = (count - idx) * stepMins
    const tsLabel = xLabel(agoMins)
    const valLabel = Math.abs(v) >= 100 ? v.toFixed(1) : v.toFixed(2)

    tip.innerHTML = `
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${metricName}</div>
      <div class="chart-tooltip-val" style="color:${color}">${valLabel} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${metricUnit}</span></div>
      <div class="chart-tooltip-ts">${tsLabel}</div>
    `
    tip.style.display = 'block'
    const tx = e.clientX + 12
    const ty = e.clientY - 10
    tip.style.left = `${Math.min(tx, window.innerWidth - 160)}px`
    tip.style.top  = `${ty}px`
  })

  rect.addEventListener('mouseleave', () => {
    tip.style.display = 'none'
    dot.style.display = 'none'
  })
}

function drawIrrigationChart(svg, color, count, stepMins) {
  const W = 600, H = 180, PAD = { t: 12, r: 8, b: 28, l: 44 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  const now = Date.now()
  const totalMs = count * stepMins * 60000

  // Bin events into time steps
  const bins = Array(count).fill(0)
  ;(parcelState.irrigationEvents || []).forEach(ev => {
    const ts = new Date(ev.isoDate).getTime()
    const age = now - ts
    if (age < 0 || age > totalMs) return
    const idx = Math.floor((totalMs - age) / (stepMins * 60000))
    if (idx >= 0 && idx < count) bins[idx] += (ev.mm || 0)
  })

  const maxV = Math.max(...bins, 1)
  const xOf = i => PAD.l + (i / Math.max(count - 1, 1)) * innerW
  const yOf = v => PAD.t + innerH - (v / maxV) * innerH

  let lines = ''
  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = (maxV - (i / 4) * maxV).toFixed(1)
    lines += `<line x1="${PAD.l}" y1="${y}" x2="${W - PAD.r}" y2="${y}" stroke="var(--bdr2)" stroke-width="1"/>`
    lines += `<text x="${PAD.l - 4}" y="${y + 4}" text-anchor="end" font-size="10" fill="var(--txt3)">${v}</text>`
  }

  const barW = Math.max(4, (innerW / count) * 0.65)
  bins.forEach((v, i) => {
    if (v <= 0) return
    const x = xOf(i)
    const y = yOf(v)
    const h = (PAD.t + innerH) - y
    lines += `<rect x="${(x - barW / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" fill="${color}" opacity="0.85" rx="1"/>`
  })

  svg.innerHTML = lines
}

function genCumulValue(m) {
  const table = { pluie: () => rnd(20, 120), etp: () => rndf(15, 80), rayonnement: () => rnd(500, 3000) }
  const fn = table[m.id]
  return fn ? fn() : rnd(10, 100)
}

// ─── Period controls ──────────────────────────────────────────────────────────

function initPeriodControls() {
  const presets = document.getElementById('period-presets')
  const customRow = document.getElementById('custom-date-row')
  const stepSel = document.getElementById('time-step')

  // Set default dates for custom picker
  const today = new Date()
  const weekAgo = new Date(today - 7 * 86400000)
  document.getElementById('date-from').value = weekAgo.toISOString().slice(0, 10)
  document.getElementById('date-to').value   = today.toISOString().slice(0, 10)

  presets.addEventListener('click', e => {
    const btn = e.target.closest('.period-preset-btn')
    if (!btn) return
    presets.querySelectorAll('.period-preset-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    currentPeriod = btn.dataset.period

    if (currentPeriod === 'custom') {
      customRow.style.display = 'flex'
    } else {
      customRow.style.display = 'none'
      const stepSel = document.getElementById('time-step')
      if (stepSel) stepSel.value = getDefaultStep(currentPeriod)
      renderCharts()
    }
  })

  document.getElementById('date-from').addEventListener('change', applyCustomDates)
  document.getElementById('date-to').addEventListener('change', applyCustomDates)
  stepSel.addEventListener('change', renderCharts)
}

function applyCustomDates() {
  const from = document.getElementById('date-from').value
  const to   = document.getElementById('date-to').value
  if (from && to) {
    customFrom = new Date(from)
    customTo   = new Date(to + 'T23:59:59')
    if (customFrom < customTo) renderCharts()
  }
}

// ─── Panel ────────────────────────────────────────────────────────────────────

function renderPanel() {
  const org = orgs.find(o => o.id === parcelBase.orgId)
  renderIdentification(org)
  renderGeolocalisation(org)
  renderLinkedSensors()
  renderIntegrations()
  renderPanelMembres()
  renderAlertes()
  renderActions()
}

// ─── Identification (editable) ────────────────────────────────────────────────

const SOIL_TYPES  = ['Argilo-limoneux', 'Argileux', 'Limoneux', 'Sablo-limoneux', 'Sableux', 'Limon argileux', 'Limon fin', 'Argile sableux', 'Limono-argileux fin', 'Sable limoneux', 'Argile limoneuse']
const IRRIG_TYPES = ['Goutte à goutte', 'Aspersion', 'Submersion', 'Enrouleur', 'Pivot', 'Rampe', 'Micro aspersion', 'Couverture intégrale', 'Goutte à goutte enterré', 'Gravitaire', 'Non irrigué', "Pas d'irrigation"]

function renderIdentification(org) {
  const el = document.getElementById('panel-ident')
  const p  = parcelState
  const texture  = p.texture  || SOIL_TYPES[p.id % SOIL_TYPES.length]
  const irrigation = p.irrigation || IRRIG_TYPES[p.id % IRRIG_TYPES.length]

  el.innerHTML = `
    ${editableRow('Nom',          p.name   || '—', 'name',       'text')}
    ${editableRow('Culture',      p.crop   || '—', 'crop',       'text')}
    ${readonlyRow('Surface',     (p.area   ? `${p.area} ha` : '—') + ' <span class="field-computed">(calculé)</span>')}
    ${editableSelect('Texture sol', texture,    'texture',    SOIL_TYPES)}
    ${editableSelect('Irrigation',  irrigation, 'irrigation', IRRIG_TYPES, 'integ-pill')}
    ${readonlyRow('Exploitation', org ? org.name : '—')}
  `

  bindEditable(el, 'name',       p.name       || '', v => {
    saveState({ name: v })
    updateBreadcrumb(v, { label: 'Parcelles', href: 'parcelles.html' })
  })
  bindEditable(el, 'crop',       p.crop       || '', v => saveState({ crop: v }))
  bindEditable(el, 'texture',    texture,             v => saveState({ texture: v }))
  bindEditable(el, 'irrigation', irrigation,          v => saveState({ irrigation: v }))
}

function editableRow(label, _value, field, _inputType) {
  return `
    <div class="panel-row editable-row" data-field="${field}">
      <span class="panel-row-key">${label}</span>
      <span class="panel-row-val" data-val></span>
      <button class="edit-field-btn" title="Modifier"><i class="bi bi-pencil"></i></button>
    </div>`
}

function editableSelect(label, _value, field, options, displayClass) {
  const cls = displayClass ? ` data-display-class="${displayClass}"` : ''
  return `
    <div class="panel-row editable-row" data-field="${field}" data-options="${encodeURIComponent(JSON.stringify(options))}"${cls}>
      <span class="panel-row-key">${label}</span>
      <span class="panel-row-val" data-val></span>
      <button class="edit-field-btn" title="Modifier"><i class="bi bi-pencil"></i></button>
    </div>`
}

function readonlyRow(label, html) {
  return `
    <div class="panel-row">
      <span class="panel-row-key">${label}</span>
      <span class="panel-row-val">${html}</span>
    </div>`
}

function bindEditable(container, field, currentValue, onSave) {
  const row    = container.querySelector(`[data-field="${field}"]`)
  if (!row) return
  const valEl  = row.querySelector('[data-val]')
  const editBtn = row.querySelector('.edit-field-btn')
  const options      = row.dataset.options ? JSON.parse(decodeURIComponent(row.dataset.options)) : null
  const displayClass = row.dataset.displayClass || null

  const setDisplay = v => {
    if (displayClass) {
      valEl.innerHTML = `<span class="${displayClass}">${v}</span>`
    } else {
      valEl.textContent = v
    }
  }
  setDisplay(currentValue)

  editBtn.addEventListener('click', () => {
    if (row.classList.contains('editing')) return
    row.classList.add('editing')
    editBtn.style.display = 'none'

    let input
    if (options) {
      input = document.createElement('select')
      input.className = 'inline-edit'
      options.forEach(opt => {
        const o = document.createElement('option')
        o.value = opt
        o.textContent = opt
        if (opt === currentValue) o.selected = true
        input.appendChild(o)
      })
    } else {
      input = document.createElement('input')
      input.type = 'text'
      input.className = 'inline-edit'
      input.value = currentValue
    }

    valEl.textContent = ''
    valEl.appendChild(input)
    input.focus()

    const commit = () => {
      const newVal = input.value?.trim() || currentValue
      currentValue = newVal
      onSave(newVal)
      setDisplay(newVal)
      row.classList.remove('editing')
      editBtn.style.display = ''
    }

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter')  { e.preventDefault(); commit() }
      if (e.key === 'Escape') { setDisplay(currentValue); row.classList.remove('editing'); editBtn.style.display = '' }
    })
    input.addEventListener('blur', commit)
  })
}

// ─── Géolocalisation ──────────────────────────────────────────────────────────

function renderGeolocalisation(org) {
  const el = document.getElementById('panel-geoloc')
  const latlngs = parcelState.latlngs || parcelBase.latlngs

  const hasShape = Array.isArray(latlngs) && latlngs.length >= 3

  // Use stored ville/coords if available (set after contour edit + geocoding)
  const ville = parcelState.ville || parcelBase.ville || org?.ville || '—'
  const dept  = parcelBase.departement || org?.departement
  const lat   = parcelState.lat ?? parcelBase.lat ?? org?.lat
  const lng   = parcelState.lng ?? parcelBase.lng ?? org?.lng

  el.innerHTML = `
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${ville}${dept ? ` (${dept})` : ''}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${lat != null ? lat.toFixed(4) : '—'}, ${lng != null ? lng.toFixed(4) : '—'}</span>
    </div>
    <div style="padding:8px 0 4px">
      <a href="parcelle-modifier-contour.html?id=${parcelId}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${hasShape ? 'Modifier le contour' : 'Tracer le contour'}
      </a>
    </div>
  `
}

// ─── Capteurs liés ────────────────────────────────────────────────────────────

function getLinkedMetricIds() {
  const ids = new Set()
  const linked = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  linked.forEach(s => {
    const metrics = METRICS_BY_MODEL[s.model] || []
    if (!TENSIO_MODELS.includes(s.model)) {
      metrics.forEach(m => ids.add(m.id))
    }
  })
  return ids
}

function renderLinkedSensors() {
  const el     = document.getElementById('panel-sensors')
  const linked = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))

  // Available sensors: same org, not yet linked
  const available = allSensors.filter(s =>
    s.orgId === parcelBase.orgId &&
    !parcelState.linkedSensorIds.includes(s.id)
  )

  let html = ''
  if (linked.length === 0) {
    html += `<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>`
  } else {
    // Group CHP sensors by depth for display
    const chps = linked.filter(s => TENSIO_MODELS.includes(s.model))
    const others = linked.filter(s => !TENSIO_MODELS.includes(s.model))

    html += others.map(s => `
      <div class="sensor-linked-row">
        <a href="capteur-detail.html?id=${s.id}" class="sensor-link-model">${s.model}</a>
        <span class="sensor-link-serial">${s.serial}</span>
        <button class="remove-sensor-btn icon-btn" data-id="${s.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join('')

    if (chps.length > 0) {
      // Group by depth
      const byDepth = {}
      chps.forEach(s => {
        const d = s.depth != null ? `${s.depth} cm` : s.model
        if (!byDepth[d]) byDepth[d] = []
        byDepth[d].push(s)
      })
      html += `<div style="font-size:11px;font-weight:600;color:var(--txt2);margin:8px 0 4px;text-transform:uppercase;letter-spacing:.04em">Tensiomètres par horizon</div>`
      Object.entries(byDepth).forEach(([depth, sensors]) => {
        html += `<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${depth}</div>`
        html += sensors.map(s => `
          <div class="sensor-linked-row" style="padding-left:12px">
            <a href="capteur-detail.html?id=${s.id}" class="sensor-link-model">${s.model}</a>
            <span class="sensor-link-serial">${s.serial}</span>
            <button class="remove-sensor-btn icon-btn" data-id="${s.id}" title="Retirer">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        `).join('')
      })
    }
  }

  if (available.length > 0) {
    html += `
      <div class="panel-add-row">
        <select id="add-sensor-select" class="panel-add-select">
          <option value="">Ajouter un capteur…</option>
          ${available.map(s => `<option value="${s.id}">${s.model} — ${s.serial}</option>`).join('')}
        </select>
        <button id="add-sensor-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `
  }

  el.innerHTML = html

  // Remove handlers
  el.querySelectorAll('.remove-sensor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id)
      saveState({ linkedSensorIds: parcelState.linkedSensorIds.filter(x => x !== id) })
      renderLinkedSensors()
      renderCharts()
    })
  })

  // Add handler
  const addBtn = document.getElementById('add-sensor-btn')
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const sel = document.getElementById('add-sensor-select')
      const id  = parseInt(sel.value)
      if (!id) return

      const sensor = allSensors.find(s => s.id === id)
      if (!sensor) return

      // Conflict check (skip for tensiometers)
      if (!TENSIO_MODELS.includes(sensor.model)) {
        const existingIds = getLinkedMetricIds()
        const newMetrics  = (METRICS_BY_MODEL[sensor.model] || []).map(m => m.id)
        const conflicts   = newMetrics.filter(m => existingIds.has(m))

        if (conflicts.length > 0) {
          const names = conflicts.map(id => {
            const found = Object.values(METRICS_BY_MODEL).flat().find(m => m.id === id)
            return found?.name || id
          })
          const ok = confirm(
            `Attention : ce capteur (${sensor.model}) mesure des métriques déjà fournies par un autre capteur :\n• ${names.join('\n• ')}\n\nVoulez-vous l'ajouter quand même ?`
          )
          if (!ok) return
        }
      } else {
        // CHP tensiometer: depth is configured on the sensor itself, nothing to prompt
      }

      saveState({ linkedSensorIds: [...parcelState.linkedSensorIds, id] })
      renderLinkedSensors()
      renderCharts()
    })
  }
}

// ─── Intégrations ─────────────────────────────────────────────────────────────

function renderIntegrations() {
  const el = document.getElementById('panel-integrations')
  const active = parcelState.integrations || []
  const inactive = ALL_INTEGRATIONS.filter(i => !active.includes(i))

  let html = ''
  if (active.length === 0) {
    html += `<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>`
  } else {
    html += active.map(name => `
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${name}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(name)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join('')
  }

  if (inactive.length > 0) {
    html += `
      <div class="panel-add-row">
        <select id="add-integ-select" class="panel-add-select">
          <option value="">Ajouter une intégration…</option>
          ${inactive.map(n => `<option value="${encodeURIComponent(n)}">${n}</option>`).join('')}
        </select>
        <button id="add-integ-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `
  }

  el.innerHTML = html

  el.querySelectorAll('.remove-integ-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = decodeURIComponent(btn.dataset.name)
      saveState({ integrations: parcelState.integrations.filter(i => i !== name) })
      renderIntegrations()
    })
  })

  document.getElementById('add-integ-btn')?.addEventListener('click', () => {
    const sel = document.getElementById('add-integ-select')
    const name = decodeURIComponent(sel.value)
    if (!name) return
    saveState({ integrations: [...parcelState.integrations, name] })
    renderIntegrations()
  })
}

// ─── Membres ──────────────────────────────────────────────────────────────────

let linkedMemberIds = null

function initLinkedMemberIds() {
  if (linkedMemberIds !== null) return
  const stored = getParcel(parcelId).linkedMemberIds
  linkedMemberIds = stored ?? members.filter(m => m.parcelIds?.includes(parcelId)).map(m => m.id)
}

function renderPanelMembres() {
  initLinkedMemberIds()
  const el     = document.getElementById('panel-membres')
  const linked = members.filter(m => linkedMemberIds.includes(m.id))

  if (!linked.length) {
    el.innerHTML = '<p class="panel-empty">Aucun membre associé.</p>'
  } else {
    el.innerHTML = linked.map(m => `
      <div class="member-row">
        <div>
          <span class="member-name">${m.prenom} ${m.nom}</span>
          <span class="member-role-badge">${m.role}</span>
        </div>
        <button class="remove-membre-btn icon-btn" data-id="${m.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join('')
  }

  // Populate add select
  const select = document.getElementById('add-membre-select')
  if (select) {
    select.innerHTML = '<option value="">Ajouter un membre…</option>'
    members.filter(m => !linkedMemberIds.includes(m.id)).forEach(m => {
      const opt = document.createElement('option')
      opt.value = m.id
      opt.textContent = `${m.prenom} ${m.nom} (${m.role})`
      select.appendChild(opt)
    })
  }

  el.querySelectorAll('.remove-membre-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      linkedMemberIds = linkedMemberIds.filter(x => x !== parseInt(btn.dataset.id))
      patchParcel(parcelId, { linkedMemberIds })
      renderPanelMembres()
    })
  })

  document.getElementById('add-membre-btn').onclick = () => {
    const id = parseInt(document.getElementById('add-membre-select').value)
    if (!id || linkedMemberIds.includes(id)) return
    linkedMemberIds.push(id)
    patchParcel(parcelId, { linkedMemberIds })
    renderPanelMembres()
  }
}

// ─── Alertes ──────────────────────────────────────────────────────────────────

function renderAlertes() {
  const el = document.getElementById('panel-alertes')
  const alertes = parcelState.alertes || []

  const ALERT_ICONS = { seuil: 'bi-graph-up-arrow', cumul: 'bi-droplet', absence: 'bi-wifi-off' }

  let html = ''
  if (alertes.length === 0) {
    html += `<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>`
  } else {
    html += alertes.map((a, i) => `
      <div class="alert-item">
        <i class="bi ${ALERT_ICONS[a.type] || 'bi-bell'}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition || ''} ${a.threshold || ''} ${a.unit || ''}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${i}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join('')
  }

  html += `<button id="create-alert-btn" class="action-btn" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>`

  el.innerHTML = html

  el.querySelectorAll('.remove-alert-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx)
      const updated = [...parcelState.alertes]
      updated.splice(idx, 1)
      saveState({ alertes: updated })
      renderAlertes()
    })
  })

  document.getElementById('create-alert-btn').addEventListener('click', () => {
    showCreateAlertForm(el)
  })
}

function getAvailableAlertMetrics() {
  const metrics = []
  const linked  = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  linked.forEach(s => {
    const defs = METRICS_BY_MODEL[s.model] || []
    defs.forEach(m => {
      if (!metrics.find(x => x.id === m.id)) metrics.push({ id: m.id, name: m.name, unit: m.unit })
    })
  })
  // Always-available metrics
  ALWAYS_METRICS.forEach(m => {
    if (!metrics.find(x => x.id === m.id)) metrics.push({ id: m.id, name: m.name, unit: m.unit })
  })
  return metrics
}

function showCreateAlertForm(container) {
  const existingForm = container.querySelector('.alert-create-form')
  if (existingForm) return

  const availableMetrics = getAvailableAlertMetrics()

  const form = document.createElement('div')
  form.className = 'alert-create-form'
  form.innerHTML = `
    <div class="alert-form-row">
      <select id="alert-metric" class="panel-add-select">
        <option value="">Métrique…</option>
        ${availableMetrics.map(m => `<option value="${m.id}" data-unit="${m.unit}">${m.name}</option>`).join('')}
      </select>
    </div>
    <div class="alert-form-row" style="align-items:center;gap:6px">
      <select id="alert-condition" class="panel-add-select" style="max-width:70px;flex:0 0 auto">
        <option value=">">&gt;</option>
        <option value="<">&lt;</option>
        <option value="=">=</option>
      </select>
      <input type="number" id="alert-threshold" class="inline-edit" placeholder="Valeur" style="flex:1;min-width:0">
      <span id="alert-unit-label" style="font-size:11px;color:var(--txt3);flex-shrink:0;min-width:30px">—</span>
    </div>
    <div class="alert-form-actions">
      <button id="alert-save-btn" class="panel-add-btn">Enregistrer</button>
      <button id="alert-cancel-btn" class="icon-btn"><i class="bi bi-x"></i></button>
    </div>
  `
  container.appendChild(form)

  // Update unit label when metric changes
  form.querySelector('#alert-metric').addEventListener('change', e => {
    const opt = e.target.selectedOptions[0]
    form.querySelector('#alert-unit-label').textContent = opt?.dataset.unit || '—'
  })

  form.querySelector('#alert-save-btn').addEventListener('click', () => {
    const sel       = form.querySelector('#alert-metric')
    const metricId  = sel.value
    const metricDef = availableMetrics.find(m => m.id === metricId)
    const condition = form.querySelector('#alert-condition').value
    const threshold = form.querySelector('#alert-threshold').value
    if (!metricId || !threshold) return

    const newAlert = {
      type:      'seuil',
      label:     `Alerte ${metricDef?.name || metricId}`,
      metric:    metricDef?.name || metricId,
      condition, threshold,
      unit:      metricDef?.unit || '',
    }
    saveState({ alertes: [...(parcelState.alertes || []), newAlert] })
    renderAlertes()
  })

  form.querySelector('#alert-cancel-btn').addEventListener('click', () => form.remove())
}

// ─── Actions ──────────────────────────────────────────────────────────────────

function renderActions() {
  document.getElementById('panel-actions').innerHTML = `
    <button class="action-btn"><i class="bi bi-download"></i> Exporter les données</button>
    <button class="action-btn action-btn--danger"><i class="bi bi-archive"></i> Archiver la parcelle</button>
  `
}

// ─── Mini map (Géolocalisation) ───────────────────────────────────────────────

function initMiniMap() {
  const org = orgs.find(o => o.id === parcelBase.orgId)
  if (!org?.lat) return

  const latlngs = parcelState.latlngs || parcelBase.latlngs

  const map = L.map('parcel-mini-map', { zoomControl: false, attributionControl: false })

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Esri'
  }).addTo(map)

  if (Array.isArray(latlngs) && latlngs.length >= 3) {
    const poly = L.polygon(latlngs, {
      color: 'white', weight: 2, fillColor: '#0172A4', fillOpacity: 0.3
    }).addTo(map)
    map.fitBounds(poly.getBounds(), { padding: [10, 10] })
  } else {
    map.setView([org.lat, org.lng], 13)
    L.circleMarker([org.lat, org.lng], {
      radius: 7, color: 'white', fillColor: 'var(--ok)', fillOpacity: 1, weight: 2
    }).addTo(map)
  }
}

// ─── Panel toggle ─────────────────────────────────────────────────────────────

function initPanelToggle() {
  const layout = document.getElementById('detail-layout')
  const btn    = document.getElementById('panel-toggle')
  const icon   = btn.querySelector('i')

  btn.addEventListener('click', () => {
    const collapsed = layout.classList.toggle('panel-collapsed')
    btn.title = collapsed ? 'Afficher le panneau' : 'Masquer le panneau'
    icon.className = collapsed ? 'bi bi-chevron-left' : 'bi bi-chevron-right'
  })
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

let _miniMapInitialized = false

function initTabs() {
  const btns = document.querySelectorAll('.detail-tab-btn')
  const chartControlsBar = document.getElementById('chart-controls-bar')
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'))
      document.querySelectorAll('.detail-tab-pane').forEach(p => p.classList.remove('active'))
      btn.classList.add('active')
      const paneId = btn.dataset.pane
      document.getElementById(paneId).classList.add('active')
      if (chartControlsBar) chartControlsBar.style.display = paneId === 'tab-donnees' ? '' : 'none'

    })
  })
}

// ─── Dashboard (Vue personnalisée) ────────────────────────────────────────────

const DASH_BLOCK_DEFS = [
  { id: 'temp',         size: '1x1', title: 'Température',   icon: 'bi-thermometer-half', color: '#e07050' },
  { id: 'pluie',        size: '1x1', title: 'Pluie (cumul)', icon: 'bi-cloud-rain-heavy', color: '#45b7d1' },
  { id: 'humidite',     size: '1x1', title: 'Humidité air',  icon: 'bi-droplet-half',     color: '#4ecdc4' },
  { id: 'sensors',      size: '1x2', title: 'Capteurs liés', icon: 'bi-broadcast',        color: '#0172A4' },
  { id: 'map',          size: '1x2', title: 'Localisation',  icon: 'bi-geo-alt',          color: '#6080b0' },
  { id: 'vent',         size: '1x1', title: 'Vent',          icon: 'bi-wind',             color: '#7bc4b0' },
  { id: 'integrations', size: '1x1', title: 'Intégrations',  icon: 'bi-plug',             color: '#2d9e5f' },
  { id: 'bilan',        size: '3x2', title: 'Bilan hydrique',icon: 'bi-droplet',          color: '#0172A4' },
]

const DASH_STORAGE_KEY = () => `dash-order-parcel-${parcelId}`

let _dashMap = null

function initDashGrid() {
  const grid = document.getElementById('dash-grid')
  if (!grid) return

  let order
  try { order = JSON.parse(localStorage.getItem(DASH_STORAGE_KEY())) || null } catch { order = null }
  if (!order) order = DASH_BLOCK_DEFS.map(b => b.id)

  grid.innerHTML = ''
  order.forEach(id => {
    const def = DASH_BLOCK_DEFS.find(b => b.id === id)
    if (!def) return
    const block = document.createElement('div')
    block.className = `dash-block dash-block--${def.size}`
    block.dataset.id = id
    block.draggable = true
    block.innerHTML = `<span class="dash-drag-handle" title="Déplacer"><i class="bi bi-grip-vertical"></i></span>`
    grid.appendChild(block)
  })
  attachDashDragHandlers(grid)
}

function populateDashBlocks() {
  const linkedSensors = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))

  // ── Température ──
  const tempEl = document.getElementById('dblock-temp')
  if (tempEl) {
    const hasTempSensor = linkedSensors.some(s => (METRICS_BY_MODEL[s.model] || []).some(m => m.id === 'temp'))
    const tempVal = hasTempSensor ? rnd(10, 28) : null
    tempEl.innerHTML = tempVal != null
      ? `<div class="dash-val-big" style="color:#e07050">${tempVal}<span class="dash-val-unit"> °C</span></div>
         <div class="dash-val-trend ${tempVal > 18 ? 'up' : 'down'}"><i class="bi bi-arrow-${tempVal > 18 ? 'up' : 'down'}-right"></i> Dernière mesure</div>
         <div class="dash-val-sub">Aujourd'hui</div>`
      : `<div class="dash-empty">Aucun capteur de température</div>`
  }

  // ── Pluie ──
  const pluieEl = document.getElementById('dblock-pluie')
  if (pluieEl) {
    const hasPluie = linkedSensors.some(s => (METRICS_BY_MODEL[s.model] || []).some(m => m.id === 'pluie'))
    const pluieVal = hasPluie ? rnd(0, 35) : null
    pluieEl.innerHTML = pluieVal != null
      ? `<div class="dash-val-big" style="color:#45b7d1">${pluieVal}<span class="dash-val-unit"> mm</span></div>
         <div class="dash-val-sub">Cumul 7 jours</div>`
      : `<div class="dash-empty">Aucun capteur de pluie</div>`
  }

  // ── Humidité ──
  const humEl = document.getElementById('dblock-humidite')
  if (humEl) {
    const hasHum = linkedSensors.some(s => (METRICS_BY_MODEL[s.model] || []).some(m => m.id === 'humidite'))
    const humVal = hasHum ? rnd(40, 90) : null
    humEl.innerHTML = humVal != null
      ? `<div class="dash-val-big" style="color:#4ecdc4">${humVal}<span class="dash-val-unit"> %</span></div>
         <div class="dash-val-sub">Dernière mesure</div>`
      : `<div class="dash-empty">Aucun capteur d'humidité</div>`
  }

  // ── Vent ──
  const ventEl = document.getElementById('dblock-vent')
  if (ventEl) {
    const hasVent = linkedSensors.some(s => (METRICS_BY_MODEL[s.model] || []).some(m => m.id === 'vent'))
    const ventVal = hasVent ? rnd(0, 35) : rnd(5, 20)
    ventEl.innerHTML = `
      <div class="dash-val-big" style="color:#7bc4b0">${ventVal}<span class="dash-val-unit"> km/h</span></div>
      <div class="dash-val-sub">Vitesse moyenne</div>`
  }

  // ── Capteurs liés ──
  const sensEl = document.getElementById('dblock-sensors')
  if (sensEl) {
    if (linkedSensors.length === 0) {
      sensEl.innerHTML = '<div class="dash-empty">Aucun capteur lié</div>'
    } else {
      sensEl.innerHTML = linkedSensors.map(s => `
        <div class="dash-sensor-row">
          <span class="dash-sensor-dot" style="background:${s.event ? 'var(--warn)' : 'var(--ok)'}"></span>
          <span class="dash-sensor-model">${s.model}</span>
          <span class="dash-sensor-serial">${s.serial}</span>
        </div>
      `).join('')
    }
  }

  // ── Intégrations ──
  const integEl = document.getElementById('dblock-integrations')
  if (integEl) {
    const active = parcelState.integrations || []
    integEl.innerHTML = active.length === 0
      ? '<div class="dash-empty">Aucune intégration active</div>'
      : active.map(name => `
          <span class="dash-integ-pill"><i class="bi bi-plug-fill"></i> ${name}</span>
        `).join('')
  }

  // ── Map ──
  const mapEl = document.getElementById('dblock-map')
  if (mapEl) {
    mapEl.style.padding = '0 0 8px 0'
    mapEl.innerHTML = '<div class="dash-map-inner" id="dash-map-container"></div>'
    initDashMap()
  }

  // ── Bilan hydrique ──
  const bilanEl = document.getElementById('dblock-bilan')
  if (bilanEl) {
    const pluieMm  = rndf(20, 80)
    const etpMm    = rndf(15, 60)
    const irrigMm  = (parcelState.irrigationEvents || []).reduce((s, e) => s + (e.mm || 0), 0)
    const drainMm  = Math.max(0, pluieMm + irrigMm - etpMm)
    const balMm    = pluieMm + irrigMm - etpMm - drainMm
    const balColor = balMm >= 0 ? 'var(--ok)' : 'var(--err)'

    bilanEl.innerHTML = `
      <div style="display:flex;gap:16px;align-items:flex-start;height:100%">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;flex:1">
          ${dashBilanCard('Pluie', pluieMm.toFixed(0), 'mm', '#45b7d1', 'bi-cloud-rain-heavy', '7 derniers jours')}
          ${dashBilanCard('ETP', etpMm.toFixed(1), 'mm', '#c090e0', 'bi-sun', '7 derniers jours')}
          ${dashBilanCard('Irrigation', irrigMm.toFixed(0), 'mm', '#0172A4', 'bi-droplet-fill', 'Cumulé')}
          ${dashBilanCard('Drainage', drainMm.toFixed(0), 'mm', '#7bc4b0', 'bi-arrow-down-circle', 'Estimé')}
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:0 0 140px;gap:4px;padding:8px;background:var(--bg);border-radius:8px;border:1px solid var(--bdr)">
          <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:var(--txt3)">Bilan net</div>
          <div style="font-size:36px;font-weight:700;color:${balColor}">${balMm >= 0 ? '+' : ''}${balMm.toFixed(0)}</div>
          <div style="font-size:13px;color:${balColor};font-weight:600">mm</div>
          <div style="font-size:11px;color:var(--txt3);margin-top:4px">7 derniers jours</div>
        </div>
      </div>
    `
  }
}

function dashBilanCard(label, val, unit, color, icon, sub) {
  return `
    <div style="background:var(--bg);border:1px solid var(--bdr);border-radius:8px;padding:10px 12px">
      <div style="font-size:11px;color:${color};font-weight:600;display:flex;align-items:center;gap:5px;margin-bottom:4px">
        <i class="bi ${icon}"></i> ${label}
      </div>
      <div style="font-size:22px;font-weight:700;color:var(--txt)">${val} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${unit}</span></div>
      <div style="font-size:10px;color:var(--txt3);margin-top:2px">${sub}</div>
    </div>
  `
}

function initDashMap() {
  const container = document.getElementById('dash-map-container')
  if (!container || _dashMap) return

  const org = orgs.find(o => o.id === parcelBase.orgId)
  if (!org?.lat) return

  const setup = () => {
    if (_dashMap) return
    _dashMap = L.map(container, { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false })

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Esri'
    }).addTo(_dashMap)

    const latlngs = parcelState.latlngs || parcelBase.latlngs
    if (Array.isArray(latlngs) && latlngs.length >= 3) {
      const poly = L.polygon(latlngs, {
        color: 'white', weight: 2, fillColor: '#0172A4', fillOpacity: 0.35
      }).addTo(_dashMap)
      _dashMap.fitBounds(poly.getBounds(), { padding: [8, 8] })
    } else {
      _dashMap.setView([org.lat, org.lng], 14)
      L.circleMarker([org.lat, org.lng], {
        radius: 7, color: 'white', fillColor: 'var(--ok)', fillOpacity: 1, weight: 2
      }).addTo(_dashMap)
    }
  }

  if (container.offsetWidth > 0) {
    setup()
  } else {
    const ro = new ResizeObserver(() => {
      if (container.offsetWidth > 0) { ro.disconnect(); setup() }
    })
    ro.observe(container)
  }
}

function attachDashDragHandlers(grid) {
  let dragSrc = null

  grid.querySelectorAll('.dash-block').forEach(block => {
    block.addEventListener('dragstart', e => {
      dragSrc = block
      e.dataTransfer.effectAllowed = 'move'
      setTimeout(() => block.classList.add('dash-drag-ghost'), 0)
    })
    block.addEventListener('dragend', () => {
      block.classList.remove('dash-drag-ghost')
      grid.querySelectorAll('.dash-block').forEach(b => b.classList.remove('dash-drag-over'))
      dragSrc = null
      const order = [...grid.querySelectorAll('.dash-block')].map(b => b.dataset.id)
      localStorage.setItem(DASH_STORAGE_KEY(), JSON.stringify(order))
    })
    block.addEventListener('dragover', e => {
      e.preventDefault()
      if (!dragSrc || block === dragSrc) return
      e.dataTransfer.dropEffect = 'move'
      grid.querySelectorAll('.dash-block').forEach(b => b.classList.remove('dash-drag-over'))
      block.classList.add('dash-drag-over')
    })
    block.addEventListener('dragleave', () => {
      block.classList.remove('dash-drag-over')
    })
    block.addEventListener('drop', e => {
      e.preventDefault()
      if (!dragSrc || block === dragSrc) return
      block.classList.remove('dash-drag-over')
      const allBlocks = [...grid.querySelectorAll('.dash-block')]
      const srcIdx = allBlocks.indexOf(dragSrc)
      const tgtIdx = allBlocks.indexOf(block)
      if (srcIdx < tgtIdx) block.after(dragSrc)
      else block.before(dragSrc)
    })
  })
}
