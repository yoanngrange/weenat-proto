// Sensor detail page — two-column layout, updated period/step selectors
import { sensors } from '../data/sensors.js'
import { plots } from '../data/plots.js'
import { orgs } from '../data/orgs.js'
import { members } from '../data/members.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { getStoredSensor, patchSensor } from '../data/store.js'

const urlParams = new URLSearchParams(window.location.search)
const sensorId  = parseInt(urlParams.get('id'))
const sensor    = sensors.find(s => s.id === sensorId)

// ─── Metric definitions ───────────────────────────────────────────────────────

const METRIC_DEFS = {
  pluie:            { name: 'Pluie',               unit: 'mm',        color: '#45b7d1', baseVal: () => rnd(0, 8),     cumul: { label: 'Cumul pluie',       unit: 'mm'   }, isCumul: true },
  temperature:      { name: 'Température',          unit: '°C',        color: '#e07050', baseVal: () => rnd(10, 28),   cumul: { label: 'Degrés-jours (DJC)', unit: '°j'  } },
  humidite_air:     { name: 'Humidité air',         unit: '%',         color: '#4ecdc4', baseVal: () => rnd(40, 90)   },
  dpv:              { name: 'DPV',                  unit: 'kPa',       color: '#a8d8b0', baseVal: () => rndf(0.1, 2.5) },
  vent_vitesse:     { name: 'Vent – vitesse',       unit: 'km/h',      color: '#7bc4b0', baseVal: () => rnd(0, 40)    },
  vent_rafales:     { name: 'Vent – rafales',       unit: 'km/h',      color: '#5aa490', baseVal: () => rnd(5, 60)    },
  vent_direction:   { name: 'Direction vent',       unit: '°',         color: '#3a8070', baseVal: () => rnd(0, 360)   },
  rayonnement:      { name: 'Rayonnement',          unit: 'W/m²',      color: '#f5c842', baseVal: () => rnd(0, 900),   cumul: { label: 'Énergie', unit: 'Wh/m²' } },
  etp:              { name: 'ETP',                  unit: 'mm/j',      color: '#c090e0', baseVal: () => rndf(0.5, 5),  cumul: { label: 'Cumul ETP', unit: 'mm' } },
  temperature_min:  { name: 'Température min',      unit: '°C',        color: '#90b0e0', baseVal: () => rnd(-2, 15),   cumul: { label: 'Heures de froid', unit: 'h' } },
  humidite_sol_15:  { name: 'Hum. sol 15 cm',      unit: '%vol',      color: '#d4a843', baseVal: () => rnd(15, 45)   },
  humidite_sol_30:  { name: 'Hum. sol 30 cm',      unit: '%vol',      color: '#b88a2c', baseVal: () => rnd(15, 45)   },
  humidite_sol_60:  { name: 'Hum. sol 60 cm',      unit: '%vol',      color: '#9a7015', baseVal: () => rnd(18, 42)   },
  humidite_sol_90:  { name: 'Hum. sol 90 cm',      unit: '%vol',      color: '#7c5800', baseVal: () => rnd(20, 40)   },
  temp_sol:         { name: 'Temp. sol',            unit: '°C',        color: '#bb8fce', baseVal: () => rnd(8, 22)    },
  potentiel_hydrique: {
    name: 'Potentiel hydrique', unit: 'kPa', color: '#5b8dd9',
    baseVal: () => {
      const month = new Date().getMonth()
      return Math.round(10 + (0.5 - 0.5 * Math.cos(2 * Math.PI * month / 12)) * 140)
    }
  },
  tensio_30:        { name: 'Tension sol 30 cm',    unit: 'cbar',      color: '#98d8c8', baseVal: () => rnd(10, 80)   },
  tensio_60:        { name: 'Tension sol 60 cm',    unit: 'cbar',      color: '#78b8a8', baseVal: () => rnd(10, 80)   },
  tensio_90:        { name: 'Tension sol 90 cm',    unit: 'cbar',      color: '#589888', baseVal: () => rnd(10, 80)   },
  tensio_120:       { name: 'Tension sol 120 cm',   unit: 'cbar',      color: '#387868', baseVal: () => rnd(10, 80)   },
  tensio_150:       { name: 'Tension sol 150 cm',   unit: 'cbar',      color: '#185848', baseVal: () => rnd(10, 80)   },
  tensio_180:       { name: 'Tension sol 180 cm',   unit: 'cbar',      color: '#003828', baseVal: () => rnd(10, 80)   },
  conductivite:     { name: 'Conductivité',         unit: 'mS/cm',     color: '#f0a030', baseVal: () => rndf(0.1, 3)  },
  humectation:      { name: 'Humectation feuille',  unit: 'h',         color: '#78d8a0', baseVal: () => rnd(0, 12)    },
  par:              { name: 'PAR',                  unit: 'µmol/m²/s', color: '#f8e840', baseVal: () => rnd(0, 2000)  },
  temperature_gel:  { name: 'Temp. feuille/gel',    unit: '°C',        color: '#a0d8a0', baseVal: () => rnd(-3, 12),   cumul: { label: 'Heures de gel', unit: 'h' } },
  temp_rosee:       { name: 'Température de rosée', unit: '°C',        color: '#7ec8e0', baseVal: () => rnd(4, 16)    },
}

const METRICS_BY_MODEL = {
  'P+':       ['pluie', 'temperature', 'humidite_air', 'dpv', 'vent_vitesse', 'vent_rafales', 'rayonnement', 'etp'],
  'PT':       ['pluie', 'temperature'],
  'P':        ['pluie'],
  'TH':       ['temperature', 'humidite_air', 'dpv', 'temp_rosee'],
  'T_MINI':   ['temperature_min'],
  'W':        ['vent_vitesse', 'vent_rafales', 'vent_direction'],
  'CHP-15/30': ['potentiel_hydrique', 'temp_sol'],
  'CHP-30/60': ['humidite_sol_30', 'humidite_sol_60', 'temp_sol'],
  'CHP-60/90': ['humidite_sol_60', 'humidite_sol_90', 'temp_sol'],
  'CAPA-30-3': ['_capa_vwc', '_capa_temp'],
  'CAPA-60-6': ['_capa_vwc', '_capa_temp'],
  'EC':       ['humidite_sol_15', 'temp_sol', 'conductivite'],
  'LWS':      ['_lws_intensite', '_lws_duree'],
  'PYRANO':   ['rayonnement'],
  'PAR':      ['par'],
  'T_GEL':    ['temperature_gel'],
}

// Virtual metric keys for multi-horizon charts
const VIRTUAL_METRICS = {
  '_capa_vwc':       { name: 'Humidité sol par horizon', unit: '%vol', color: '#4e9fd4', isVirtual: true },
  '_capa_temp':      { name: 'Temp. sol par horizon',    unit: '°C',   color: '#bb8fce', isVirtual: true },
  '_lws_intensite':  { name: "Intensité d'humectation",  unit: 'mV',   color: '#78d8a0', isVirtual: true },
  '_lws_duree':      { name: "Durée d'humectation",      unit: 'h',    color: '#45c090', isVirtual: true },
}

// CAPA horizon definitions per model
const CAPA_HORIZONS = {
  'CAPA-30-3': [
    { id: 'humidite_sol_15', label: '15 cm', color: '#d4a843' },
    { id: 'humidite_sol_30', label: '30 cm', color: '#b88a2c' },
    { id: 'humidite_sol_60', label: '60 cm', color: '#9a7015' },
  ],
  'CAPA-60-6': [
    { id: 'humidite_sol_15', label: '15 cm', color: '#e8c050' },
    { id: 'humidite_sol_30', label: '30 cm', color: '#c8a030' },
    { id: 'humidite_sol_60', label: '60 cm', color: '#a88010' },
    { id: 'humidite_sol_90', label: '90 cm', color: '#886000' },
    { id: 'tensio_120',       label: '120 cm', color: '#684000' },
    { id: 'tensio_150',       label: '150 cm', color: '#482000' },
  ],
}

function rnd(min, max)  { return Math.floor(Math.random() * (max - min + 1)) + min }
function rndf(min, max) { return parseFloat((Math.random() * (max - min) + min).toFixed(2)) }

function getMetrics(s) {
  const keys = METRICS_BY_MODEL[s.model] || ['temperature', 'humidite_air']
  return keys.map(k => {
    if (VIRTUAL_METRICS[k]) return { id: k, ...VIRTUAL_METRICS[k], current: null }
    const def = METRIC_DEFS[k]
    if (!def) return null
    return { id: k, ...def, current: def.baseVal() }
  }).filter(Boolean)
}

// ─── Period state ─────────────────────────────────────────────────────────────

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
  if (!sensor) {
    document.body.innerHTML = '<div style="padding:40px"><h1>Capteur non trouvé</h1></div>'
    return
  }

  updateBreadcrumb(`Capteur ${sensor.serial}`, {
    label: 'Capteurs',
    href: 'capteurs.html',
  })

  renderLatestStrip()
  renderCharts()
  renderPanel()
  initPanelToggle()
  initPeriodControls()
  initMiniMap()
})

// ─── Latest strip ─────────────────────────────────────────────────────────────

function renderLatestStrip() {
  const container = document.getElementById('latest-strip')
  const metrics   = getMetrics(sensor)

  metrics.forEach(m => {
    if (m.isVirtual) return  // virtual multi-chart metrics skip the strip
    const card = document.createElement('div')
    card.className = 'latest-card'
    card.style.borderTop = `3px solid ${m.color}`
    card.innerHTML = `
      <div class="latest-card-name">${m.name}</div>
      <div class="latest-card-value">${m.current}<span class="latest-card-unit"> ${m.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `
    card.style.cursor = 'default'
    container.appendChild(card)
  })

  // THI card for TH sensors
  if (sensor.model === 'TH') {
    const temp = metrics.find(m => m.id === 'temperature')?.current || 20
    const hum  = metrics.find(m => m.id === 'humidite_air')?.current || 60
    const thi  = (temp - (0.55 - 0.55 * hum / 100) * (temp - 14.5)).toFixed(1)
    const thiCard = document.createElement('div')
    thiCard.className = 'latest-card'
    thiCard.style.borderTop = '3px solid #e8a030'
    thiCard.innerHTML = `
      <div class="latest-card-name">THI (Thermal Humidity Index)</div>
      <div class="latest-card-value">${thi}<span class="latest-card-unit"> index</span></div>
      <div class="latest-card-ts">T-(0.55-0.55×HR/100)×(T-14.5)</div>
    `
    thiCard.style.cursor = 'default'
    container.appendChild(thiCard)
  }
}

// ─── Charts ───────────────────────────────────────────────────────────────────

function renderCharts() {
  const container = document.getElementById('charts-container')
  container.innerHTML = ''
  const metrics = getMetrics(sensor)

  metrics.forEach(m => {
    if (m.isVirtual) {
      renderVirtualChart(container, m)
      return
    }

    const card = document.createElement('div')
    card.className = 'chart-card'
    card.dataset.base       = m.current
    card.dataset.color      = m.color
    card.dataset.cumul      = m.isCumul ? '1' : ''
    card.dataset.metricId   = m.id
    card.dataset.metricName = m.name
    card.dataset.metricUnit = m.unit

    const cumulHtml = m.cumul
      ? `<div class="chart-cumul"><span class="chart-cumul-label">${m.cumul.label}</span><span class="chart-cumul-value">${generateCumulValue(m)} ${m.cumul.unit}</span></div>`
      : ''

    // Cold hours + degree-days row below temperature charts
    const isTempMetric = m.id === 'temperature' || m.id === 'temperature_min'
    const tempExtraHtml = isTempMetric ? renderTempThresholdHtml(m.id) : ''

    card.innerHTML = `
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${m.color}">${m.name}</span>
        <span class="chart-card-unit">${m.unit}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
      ${cumulHtml}
      ${tempExtraHtml}
    `
    container.appendChild(card)
  })

  drawAllCharts()
  bindTempThresholds()
}

function renderTempThresholdHtml(metricId) {
  const isMini = metricId === 'temperature_min'
  const coldH  = Math.round(Math.random() * 200 + 50)
  const djc    = Math.round(Math.random() * 400 + 100)
  return `
    <div class="temp-threshold-row" data-metric="${metricId}">
      <div class="temp-threshold-stat">
        <i class="bi bi-snow"></i>
        <span class="temp-threshold-val">${coldH} h</span>
        <span class="temp-threshold-label">Heures de froid</span>
        <span class="temp-threshold-ctrl">
          &lt; <input type="number" class="temp-thresh-input" data-type="cold" value="${isMini ? 7 : 0}" step="0.5" min="-10" max="20"> °C
        </span>
      </div>
      <div class="temp-threshold-stat">
        <i class="bi bi-sun"></i>
        <span class="temp-threshold-val">${djc} °j</span>
        <span class="temp-threshold-label">Degrés-jours cumulés</span>
        <span class="temp-threshold-ctrl">
          Base <input type="number" class="temp-thresh-input" data-type="base" value="6" step="0.5" min="-5" max="20"> °C
        </span>
      </div>
    </div>
  `
}

function bindTempThresholds() {
  document.querySelectorAll('.temp-thresh-input').forEach(input => {
    input.addEventListener('change', () => {
      const row   = input.closest('.temp-threshold-row')
      const type  = input.dataset.type
      const val   = parseFloat(input.value) || 0
      const stat  = row.querySelector(`.temp-threshold-stat [data-type="${type}"]`)
        ?.closest('.temp-threshold-stat')
        ?.querySelector('.temp-threshold-val')
      if (!stat) return
      if (type === 'cold') {
        stat.textContent = `${Math.round(Math.random() * 150 + 30)} h`
      } else {
        stat.textContent = `${Math.round(Math.random() * 350 + 80)} °j`
      }
    })
  })
}

function renderVirtualChart(container, m) {
  const card = document.createElement('div')
  card.className = 'chart-card chart-card--multi'

  if (m.id === '_capa_vwc' || m.id === '_capa_temp') {
    const horizons = CAPA_HORIZONS[sensor.model] || []
    const isVwc    = m.id === '_capa_vwc'
    const title    = isVwc ? 'Humidité sol par horizon' : 'Temp. sol par horizon'
    const unit     = isVwc ? '%vol' : '°C'

    const legendHtml = horizons.map(h =>
      `<span class="multi-legend-dot" style="background:${h.color}"></span><span class="multi-legend-label">${h.label}</span>`
    ).join('')

    card.innerHTML = `
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${m.color}">${title}</span>
        <span class="chart-card-unit">${unit}</span>
      </div>
      <div class="multi-chart-legend">${legendHtml}</div>
      <svg class="chart-svg chart-svg--multi" width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none"
           data-virtual="${m.id}" data-model="${sensor.model}"></svg>
    `
    container.appendChild(card)

    // Draw after DOM is ready
    requestAnimationFrame(() => drawMultiHorizonChart(card.querySelector('.chart-svg--multi'), horizons, isVwc))
    return
  }

  if (m.id === '_lws_intensite' || m.id === '_lws_duree') {
    const isIntensity = m.id === '_lws_intensite'
    const title = isIntensity ? "Intensité d'humectation" : "Durée d'humectation"
    const unit  = isIntensity ? 'mV' : 'h'
    const color = isIntensity ? '#78d8a0' : '#45c090'
    const base  = isIntensity ? rnd(0, 800) : rnd(0, 12)
    const metricId = isIntensity ? 'humectation' : 'lws_duree'

    card.dataset.base       = base
    card.dataset.color      = color
    card.dataset.cumul      = ''
    card.dataset.metricId   = metricId
    card.dataset.metricName = title
    card.dataset.metricUnit = unit
    card.classList.remove('chart-card--multi')

    card.innerHTML = `
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${color}">${title}</span>
        <span class="chart-card-unit">${unit}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    `
    container.appendChild(card)
  }
}

function drawMultiHorizonChart(svg, horizons, isVwc) {
  const count = getDisplayCount()
  const step  = getStepMinutes()
  const W = 600, H = 200, PAD = { t: 14, r: 10, b: 28, l: 46 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  // Generate series for each horizon
  const series = horizons.map(h => {
    const baseId = isVwc ? h.id : 'temp_sol'
    const base   = METRIC_DEFS[baseId]?.baseVal() || 25
    return {
      color: h.color,
      label: h.label,
      vals: Array.from({ length: count }, (_, idx) => {
        const minsAgo = (count - 1 - idx) * step
        // Add slight offset per horizon for visual separation
        const depthNoise = horizons.indexOf(h) * 1.5
        return Math.max(0, genRealisticVal(baseId, base + depthNoise, minsAgo))
      })
    }
  })

  const allVals = series.flatMap(s => s.vals)
  const minV = Math.min(...allVals)
  const maxV = Math.max(...allVals)
  const range = maxV - minV || 1

  const xOf = i => PAD.l + (i / Math.max(count - 1, 1)) * innerW
  const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

  let out = '<defs></defs>'

  // Grid lines
  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = maxV - (i / 4) * range
    const label = Math.abs(v) >= 100 ? v.toFixed(0) : v.toFixed(1)
    out += `<line x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W-PAD.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`
    out += `<text x="${PAD.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${label}</text>`
  }
  const labelStep = Math.max(1, Math.floor(count / 6))
  for (let i = 0; i < count; i += labelStep) {
    const x = xOf(i).toFixed(1)
    out += `<line x1="${x}" y1="${PAD.t}" x2="${x}" y2="${PAD.t+innerH}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`
    out += `<text x="${x}" y="${H-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${xLabel((count-i)*step)}</text>`
  }

  // Draw each series line
  series.forEach(s => {
    const pts = s.vals.map((v, i) => ({ x: xOf(i), y: yOf(v) }))
    out += `<path d="${smoothPath(pts)}" fill="none" stroke="${s.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`
  })

  svg.innerHTML = out
}

// ─── Shared chart utilities (mirrors parcel-detail) ──────────────────────────

let _sTooltip = null
function getTooltip() {
  if (!_sTooltip) {
    _sTooltip = document.createElement('div')
    _sTooltip.className = 'chart-tooltip'
    document.body.appendChild(_sTooltip)
  }
  return _sTooltip
}

function getGradientColors(color, metricId) {
  if (metricId === 'temperature' || metricId === 'temperature_min') return ['#6eb4d4', '#e07050']
  if (metricId === 'temperature_gel') return ['#a0d8f0', '#6090d0']
  return [blendWithWhite(color, 0.55), color]
}

function blendWithWhite(hex, t) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `#${Math.round(r+(255-r)*t).toString(16).padStart(2,'0')}${Math.round(g+(255-g)*t).toString(16).padStart(2,'0')}${Math.round(b+(255-b)*t).toString(16).padStart(2,'0')}`
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
  if (agoMins < 1440) {
    return `${String(d.getHours()).padStart(2, '0')}h`
  }
  if (agoMins >= 43200) {
    const MONTHS = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aoû', 'sep', 'oct', 'nov', 'déc']
    return MONTHS[d.getMonth()]
  }
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`
}

function drawAllCharts() {
  const count = getDisplayCount()
  const step  = getStepMinutes()

  document.querySelectorAll('.chart-card').forEach(card => {
    const svg = card.querySelector('.chart-svg:not(.chart-svg--multi)')
    if (!svg) return  // skip virtual multi-horizon cards
    const base       = parseFloat(card.dataset.base)
    const color      = card.dataset.color
    const isCumul    = card.dataset.cumul === '1'
    const metricId   = card.dataset.metricId   || ''
    const metricName = card.dataset.metricName || ''
    const metricUnit = card.dataset.metricUnit || ''
    drawChart(svg, base, color, count, step, isCumul, metricId, metricName, metricUnit)
  })

  // Redraw multi-horizon charts
  document.querySelectorAll('.chart-svg--multi').forEach(svg => {
    const model    = svg.dataset.model
    const virtual  = svg.dataset.virtual
    const horizons = CAPA_HORIZONS[model] || []
    const isVwc    = virtual === '_capa_vwc'
    if (horizons.length) drawMultiHorizonChart(svg, horizons, isVwc)
  })
}

// ── Realistic time-series generation ─────────────────────────────────────────

function hourOfDay(minutesAgo) {
  const ms = Date.now() - minutesAgo * 60000
  return new Date(ms).getHours() + new Date(ms).getMinutes() / 60
}

// Solar factor (0 at night, 0..1 daytime bell curve peaking at 13h)
function solarFactor(h) {
  return Math.max(0, Math.sin(Math.PI * (h - 6) / 12))
}

// Temp factor: min ~4h, max ~14h
function tempFactor(h) {
  return 0.5 + 0.5 * Math.sin(2 * Math.PI * (h - 4) / 24 - Math.PI / 2)
}

function genRealisticVal(metricId, base, minutesAgo, noise = 0.15) {
  const h = hourOfDay(minutesAgo)
  const tf = tempFactor(h)
  const sf = solarFactor(h)
  const n = () => 1 + (Math.random() - 0.5) * 2 * noise

  switch (metricId) {
    case 'temperature':
    case 'temperature_min': {
      // Range: base-6 to base+6, follows day curve
      const v = (base - 6) + tf * 12
      return v * n()
    }
    case 'temperature_gel': {
      const v = (base - 4) + tf * 8
      return v * n()
    }
    case 'temp_sol': {
      // Soil temp: much more damped, lags 2h behind air
      const h2 = hourOfDay(minutesAgo + 120)
      const v = (base - 3) + tempFactor(h2) * 6
      return v * n()
    }
    case 'humidite_air': {
      // Inverse of temp: high at night, low afternoon
      const v = base + (1 - tf) * 25 - tf * 15
      return Math.min(100, Math.max(20, v * n()))
    }
    case 'rayonnement':
    case 'par': {
      const v = sf * base * 1.3
      return Math.max(0, v * n())
    }
    case 'etp': {
      const v = sf * base * 1.5
      return Math.max(0, v * n())
    }
    case 'dpv': {
      // VPD: high when temp high + humidity low — follows solar more than temp
      const v = sf * base * 1.4 + 0.05
      return Math.max(0, v * n())
    }
    case 'temp_rosee': {
      // Dew point: follows temp curve but capped below (condensation at night)
      const airTemp = (base - 6) + tf * 12
      const dewMax = airTemp - 2
      const v = (base - 8) + tf * 6
      return Math.min(dewMax, v) * n()
    }
    case 'lws_duree': {
      // LWS duration: cumulative hours of wetness, higher at night/dawn
      const nightFactor = Math.max(0, 0.9 - sf * 1.1)
      return Math.max(0, base * nightFactor * n())
    }
    case 'humectation': {
      // Leaf wetness: non-zero at night/morning when dew forms
      const nightFactor = Math.max(0, 0.8 - sf * 1.2)
      const v = base * nightFactor
      return Math.max(0, v * n())
    }
    case 'potentiel_hydrique': {
      // Soil water potential: slow changes, unit kPa (0-200)
      return Math.max(5, Math.min(195, base * n()))
    }
    case 'humidite_sol_15':
    case 'humidite_sol_30':
    case 'humidite_sol_60':
    case 'humidite_sol_90': {
      // Soil moisture: stable with slow drift
      return Math.max(5, base * n())
    }
    case 'tensio_30':
    case 'tensio_60':
    case 'tensio_90':
    case 'tensio_120':
    case 'tensio_150':
    case 'tensio_180': {
      // Tensiometer: slow changes
      return Math.max(5, base * n())
    }
    case 'conductivite': {
      // EC correlates with water content — null below 15% VWC threshold
      // base represents a mid-range moisture scenario; simulate dS/m
      const vwc = 20 + tf * 10 + (Math.random() - 0.5) * 8 // rough VWC estimate
      if (vwc < 15) return 0
      // Conductivity increases with VWC
      return Math.max(0, (vwc - 15) * 0.08 * n())
    }
    case 'pluie': {
      // Rain: sporadic (occasional bursts)
      return Math.random() < 0.15 ? base * Math.random() * 2 : 0
    }
    case 'vent_vitesse':
    case 'vent_rafales': {
      // Wind slightly higher by day
      const v = base * (0.6 + sf * 0.8) * n()
      return Math.max(0, v)
    }
    case 'vent_direction': {
      // Wind direction: slow wander
      return (base + (Math.random() - 0.5) * 60 + 360) % 360
    }
    default:
      return Math.max(0, base * n())
  }
}

function drawChart(svg, base, color, count, stepMins, isCumul, metricId = '', metricName = '', metricUnit = '') {
  const W = 600, H = 180, PAD = { t: 14, r: 10, b: 28, l: 46 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  const rawPerStep = Math.max(1, Math.round(stepMins / 15))
  const vals = Array.from({ length: count }, (_, idx) => {
    // idx=0 is oldest; convert to minutes ago
    const minsAgo = (count - 1 - idx) * stepMins
    if (isCumul) {
      // For cumulative metrics sum sub-steps
      let sum = 0
      for (let j = 0; j < rawPerStep; j++) {
        sum += genRealisticVal(metricId, base / rawPerStep, minsAgo + j * (stepMins / rawPerStep))
      }
      return sum
    } else {
      return genRealisticVal(metricId, base, minsAgo)
    }
  })

  const minV = Math.min(...vals)
  const maxV = Math.max(...vals)
  const range = maxV - minV || 1

  const xOf = i => PAD.l + (i / Math.max(count - 1, 1)) * innerW
  const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

  const gradId = `sg_${Math.random().toString(36).slice(2)}`
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

  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = maxV - (i / 4) * range
    const label = Math.abs(v) >= 100 ? v.toFixed(0) : Math.abs(v) >= 10 ? v.toFixed(1) : v.toFixed(2)
    out += `<line x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W-PAD.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`
    out += `<text x="${PAD.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${label}</text>`
  }

  const labelStep = Math.max(1, Math.floor(count / 6))
  for (let i = 0; i < count; i += labelStep) {
    const x = xOf(i).toFixed(1)
    out += `<line x1="${x}" y1="${PAD.t}" x2="${x}" y2="${PAD.t+innerH}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`
    out += `<text x="${x}" y="${H-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${xLabel((count-i)*stepMins)}</text>`
  }

  const pts      = vals.map((v, i) => ({ x: xOf(i), y: yOf(v) }))
  const linePath = smoothPath(pts)
  const areaD    = linePath + ` L${xOf(count-1).toFixed(1)},${PAD.t+innerH} L${PAD.l.toFixed(1)},${PAD.t+innerH} Z`

  out += `<path d="${areaD}" fill="${colorHigh}" opacity="0.07" clip-path="url(#clip_${gradId})"/>`
  out += `<path d="${linePath}" fill="none" stroke="url(#${gradId})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${gradId})"/>`
  out += `<rect class="chart-hover-rect" x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}" fill="transparent" style="cursor:crosshair"/>`

  svg.innerHTML = out

  // Tooltip
  const tip = getTooltip()
  const rect = svg.querySelector('.chart-hover-rect')
  if (!rect) return
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
    const svgX    = (e.clientX - svgRect.left) * (W / svgRect.width)
    const frac    = Math.max(0, Math.min(1, (svgX - PAD.l) / innerW))
    const idx     = Math.round(frac * (count - 1))
    if (idx < 0 || idx >= vals.length) return
    const v  = vals[idx]
    dot.setAttribute('cx', xOf(idx))
    dot.setAttribute('cy', yOf(v))
    dot.style.display = ''
    const valLabel = Math.abs(v) >= 100 ? v.toFixed(1) : v.toFixed(2)
    tip.innerHTML = `
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${metricName}</div>
      <div class="chart-tooltip-val" style="color:${color}">${valLabel} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${metricUnit}</span></div>
      <div class="chart-tooltip-ts">${xLabel((count-idx)*stepMins)}</div>
    `
    tip.style.display = 'block'
    tip.style.left = `${Math.min(e.clientX+12, window.innerWidth-160)}px`
    tip.style.top  = `${e.clientY-10}px`
  })
  rect.addEventListener('mouseleave', () => { tip.style.display='none'; dot.style.display='none' })
}

function generateCumulValue(m) {
  const base = {
    pluie:           () => rnd(20, 120),
    temperature:     () => rnd(80, 400),
    rayonnement:     () => rnd(500, 3000),
    etp:             () => rndf(15, 80),
    temperature_min: () => rnd(50, 500),
    temperature_gel: () => rnd(0, 80),
  }
  const fn = base[m.id]
  return fn ? fn() : '—'
}

// ─── Period controls ──────────────────────────────────────────────────────────

function initPeriodControls() {
  const presets   = document.getElementById('period-presets')
  const customRow = document.getElementById('custom-date-row')
  const stepSel   = document.getElementById('time-step')

  const today   = new Date()
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

// ─── Right panel ──────────────────────────────────────────────────────────────

function renderPanel() {
  const parcel = plots.find(p => p.id === sensor.parcelId)
  const org    = parcel
    ? orgs.find(o => o.id === parcel.orgId)
    : (sensor.orgId ? orgs.find(o => o.id === sensor.orgId) : null)

  const stored = getStoredSensor(sensorId)

  renderIdentification(parcel, org, stored)
  renderLinkedPlots()
  renderLocalisation(parcel, org)
  renderSignalQuality()
  renderEvents()
  renderMetricsList()
  renderConfig()
  renderPanelMembres(parcel)
  renderActions()
  renderMaintenance()
}

function renderIdentification(parcel, org, stored) {
  const label = stored.label || `Capteur ${sensor.serial}`

  const rows = [
    { key: 'Nom',          val: label,            field: 'label',   type: 'text' },
    { key: 'Modèle',       val: sensor.model,     field: null },
    { key: 'Numéro série', val: sensor.serial,    field: null },
    { key: 'Réseau télécom', val: sensor.telecom || 'Sigfox', field: null },
    { key: 'Exploitation', val: org ? org.name : '—', field: null },
    { key: "Date d'ajout", val: '15/01/2023',     field: null },
  ]

  const el = document.getElementById('panel-ident')
  el.innerHTML = rows.map(r => r.field
    ? `<div class="panel-row editable-row" data-field="${r.field}">
         <span class="panel-row-key">${r.key}</span>
         <span class="panel-row-val" data-val>${r.val}</span>
         <button class="edit-field-btn" title="Modifier"><i class="bi bi-pencil"></i></button>
       </div>`
    : `<div class="panel-row">
         <span class="panel-row-key">${r.key}</span>
         <span class="panel-row-val">${r.val}</span>
       </div>`
  ).join('')

  // Bind editable "Nom"
  const row = el.querySelector('[data-field="label"]')
  if (row) {
    const valEl  = row.querySelector('[data-val]')
    const editBtn = row.querySelector('.edit-field-btn')
    let currentValue = label

    editBtn.addEventListener('click', () => {
      if (row.classList.contains('editing')) return
      row.classList.add('editing')
      editBtn.style.display = 'none'
      const input = document.createElement('input')
      input.type = 'text'
      input.className = 'inline-edit'
      input.value = currentValue
      valEl.textContent = ''
      valEl.appendChild(input)
      input.focus()

      const commit = () => {
        const newVal = input.value.trim() || currentValue
        currentValue = newVal
        patchSensor(sensorId, { label: newVal })
        updateBreadcrumb(newVal, { label: 'Capteurs', href: 'capteurs.html' })
        valEl.textContent = newVal
        row.classList.remove('editing')
        editBtn.style.display = ''
      }
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter')  { e.preventDefault(); commit() }
        if (e.key === 'Escape') { valEl.textContent = currentValue; row.classList.remove('editing'); editBtn.style.display = '' }
      })
      input.addEventListener('blur', commit)
    })
  }
}

function renderLocalisation(parcel, org) {
  const city = org?.ville || '—'
  const dept = org?.departement || ''
  document.getElementById('panel-loc').innerHTML = `
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${city}${dept ? ` (${dept})` : ''}</span>
    </div>
    ${parcel ? `<div class="panel-row"><span class="panel-row-key">Parcelle</span><span class="panel-row-val">${parcel.name} — ${parcel.area} ha</span></div>` : ''}
  `
}

function renderSignalQuality() {
  const q    = sensor.networkQuality || 80
  const msg7d = sensor.messages7d || 85
  const qColor = q >= 80 ? 'var(--ok)' : q >= 60 ? 'var(--warn)' : 'var(--err)'
  document.getElementById('panel-signal').innerHTML = `
    <div class="signal-bar-wrap">
      <div class="signal-bar-track">
        <div class="signal-bar-fill" style="width:${q}%;background:${qColor}"></div>
      </div>
      <span class="signal-bar-pct" style="color:${qColor}">${q}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Messages / 7 j</span>
      <span class="panel-row-val">${msg7d}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Opérateur</span>
      <span class="panel-row-val">${sensor.telecom || 'Sigfox'}</span>
    </div>
  `
}

function renderEvents() {
  const evBody = document.getElementById('panel-events')
  if (sensor.event) {
    evBody.innerHTML = `
      <div class="event-item event-item--warn">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <div>
          <div class="event-item-label">${sensor.event}</div>
          <div class="event-item-date">Depuis le 28/03/2026</div>
        </div>
      </div>
    `
  } else {
    evBody.innerHTML = `<div class="panel-empty"><i class="bi bi-check-circle" style="color:var(--ok)"></i> Aucun événement</div>`
  }
}

function renderMetricsList() {
  const metrics = getMetrics(sensor)
  document.getElementById('panel-metrics').innerHTML = metrics.map(m => `
    <div class="metric-pill-row">
      <span class="metric-dot" style="background:${m.color}"></span>
      <span class="metric-pill-name">${m.name}</span>
      <span class="metric-pill-unit">${m.unit}</span>
    </div>
  `).join('')
}

// ─── Config panel ─────────────────────────────────────────────────────────────

function renderConfig() {
  const el = document.getElementById('panel-config')
  if (!el) return

  const model = sensor.model || ''
  const isCHP  = model.startsWith('CHP')
  const isCAPA = model.startsWith('CAPA')
  const isEC   = model === 'EC'
  const isVirtual = sensor.isVirtual   // virtual weather stations

  let html = ''

  if (isVirtual) {
    html += `
      <div class="config-section">
        <div class="config-section-title">Localisation (station virtuelle)</div>
        <div class="form-row">
          <label>Latitude</label>
          <input type="number" class="inline-edit" value="${sensor.lat || 47.3}" step="0.0001">
        </div>
        <div class="form-row">
          <label>Longitude</label>
          <input type="number" class="inline-edit" value="${sensor.lng || -0.5}" step="0.0001">
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer la position</button>
      </div>
    `
  }

  if (isCHP) {
    const depths = model === 'CHP-15/30' ? [15, 30] : model === 'CHP-30/60' ? [30, 60] : [60, 90]
    html += `
      <div class="config-section">
        <div class="config-section-title">Profondeurs d'installation</div>
        ${depths.map((d, i) => `
          <div class="form-row">
            <label>Capteur ${i+1}</label>
            <div style="display:flex;align-items:center;gap:6px">
              <input type="number" class="inline-edit" value="${d}" step="5" min="0" max="300" style="width:70px">
              <span style="font-size:12px;color:var(--txt2)">cm</span>
            </div>
          </div>
        `).join('')}
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `
  }

  if (isCAPA || isEC) {
    html += `
      <div class="config-section">
        <div class="config-section-title">Texture du sol</div>
        <div class="form-row">
          <label>Texture</label>
          <select class="inline-edit">
            ${['Argile','Limon argileux','Loam','Limon sableux','Sable limoneux','Sable'].map(t =>
              `<option>${t}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-row">
          <label>RU (mm/m)</label>
          <input type="number" class="inline-edit" value="150" step="10" min="50" max="300" style="width:80px">
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `
  }

  if (!html) {
    el.innerHTML = '<div class="panel-empty">Pas de configuration spécifique pour ce modèle.</div>'
  } else {
    el.innerHTML = html
  }
}

function showToastConfig() {
  const t = document.createElement('div')
  t.className = 'toast'
  t.textContent = 'Configuration enregistrée.'
  document.body.appendChild(t)
  setTimeout(() => t.classList.add('show'), 10)
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300) }, 2500)
}

// ─── Parcelles liées ──────────────────────────────────────────────────────────

// Collect all plots from the sensor's org that are linked to this sensor
let linkedPlotIds = plots
  .filter(p => p.orgId === sensor.orgId && p.id === sensor.parcelId)
  .map(p => p.id)

// Persist in sensor store
;(function initLinkedPlotIds() {
  const stored = getStoredSensor(sensorId)
  if (stored.linkedPlotIds) {
    linkedPlotIds = stored.linkedPlotIds
  } else {
    patchSensor(sensorId, { linkedPlotIds })
  }
})()

function renderLinkedPlots() {
  const el = document.getElementById('panel-plots')
  if (!el) return

  const orgId = sensor.orgId || plots.find(p => p.id === sensor.parcelId)?.orgId
  const orgPlots = plots.filter(p => p.orgId === orgId)
  const linked   = orgPlots.filter(p => linkedPlotIds.includes(p.id))
  const available = orgPlots.filter(p => !linkedPlotIds.includes(p.id))

  let html = ''
  if (!linked.length) {
    html += `<div class="panel-empty" style="margin-bottom:6px">Aucune parcelle liée</div>`
  } else {
    html += linked.map(p => `
      <div class="sensor-linked-row">
        <a href="parcelle-detail.html?id=${p.id}" class="sensor-link-model" style="color:var(--pri);text-decoration:none">${p.name}</a>
        <span class="sensor-link-serial" style="color:var(--txt3)">${p.area ? p.area + ' ha' : ''}</span>
        <button class="remove-plot-btn icon-btn" data-id="${p.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
      </div>
    `).join('')
  }

  if (available.length) {
    html += `
      <div class="panel-add-row">
        <select id="add-plot-select" class="panel-add-select">
          <option value="">Ajouter une parcelle…</option>
          ${available.map(p => `<option value="${p.id}">${p.name}${p.area ? ' — ' + p.area + ' ha' : ''}</option>`).join('')}
        </select>
        <button id="add-plot-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `
  }

  el.innerHTML = html

  el.querySelectorAll('.remove-plot-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      linkedPlotIds = linkedPlotIds.filter(x => x !== parseInt(btn.dataset.id))
      patchSensor(sensorId, { linkedPlotIds })
      renderLinkedPlots()
    })
  })

  document.getElementById('add-plot-btn')?.addEventListener('click', () => {
    const id = parseInt(document.getElementById('add-plot-select').value)
    if (!id || linkedPlotIds.includes(id)) return
    linkedPlotIds.push(id)
    patchSensor(sensorId, { linkedPlotIds })
    renderLinkedPlots()
  })
}

function renderActions() {
  document.getElementById('panel-actions').innerHTML = `
    <button class="action-btn"><i class="bi bi-download"></i> Exporter les données</button>
    <button class="action-btn action-btn--danger"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `
}

function renderMaintenance() {
  const items = [
    { type: 'installation', label: 'Installation initiale',       date: '15/01/2023', user: 'Technicien Weenat', icon: 'bi-box-arrow-in-down' },
    { type: 'nettoyage',    label: 'Nettoyage pluviomètre',       date: '20/03/2023', user: 'Agriculteur',       icon: 'bi-droplet' },
    { type: 'batterie',     label: 'Changement de batterie',      date: '10/06/2023', user: 'Technicien Weenat', icon: 'bi-battery-charging' },
    { type: 'note',         label: 'Redressage capteur déplacé',  date: '02/11/2023', user: 'Agriculteur',       icon: 'bi-chat-text' },
  ]
  document.getElementById('panel-maint').innerHTML = `
    <div class="maint-timeline">
      ${items.map(it => `
        <div class="maint-item">
          <div class="maint-icon"><i class="bi ${it.icon}"></i></div>
          <div class="maint-body">
            <div class="maint-label">${it.label}</div>
            <div class="maint-meta">${it.date} · ${it.user}</div>
          </div>
        </div>
      `).join('')}
    </div>
    <button class="action-btn" style="margin-top:8px"><i class="bi bi-plus"></i> Ajouter une entrée</button>
  `
}

// ─── Membres ──────────────────────────────────────────────────────────────────

let linkedMemberIds = members.filter(m => sensor.parcelId
  ? m.parcelIds?.includes(sensor.parcelId)
  : m.orgIds?.includes(sensor.orgId)
).map(m => m.id)

function renderPanelMembres(parcel) {
  const el     = document.getElementById('panel-membres')
  if (!el) return
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
      renderPanelMembres(parcel)
    })
  })

  const addBtn = document.getElementById('add-membre-btn')
  if (addBtn) {
    addBtn.onclick = () => {
      const id = parseInt(document.getElementById('add-membre-select').value)
      if (!id || linkedMemberIds.includes(id)) return
      linkedMemberIds.push(id)
      renderPanelMembres(parcel)
    }
  }
}

// ─── Mini map ─────────────────────────────────────────────────────────────────

function initMiniMap() {
  const parcel = plots.find(p => p.id === sensor.parcelId)
  const org    = parcel ? orgs.find(o => o.id === parcel.orgId) : null
  if (!org?.lat) return

  const map = L.map('sensor-mini-map', { zoomControl: false, attributionControl: false })

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Esri'
  }).addTo(map)

  // Draw parcel shape if available
  const latlngs = parcel?.latlngs
  if (Array.isArray(latlngs) && latlngs.length >= 3) {
    const poly = L.polygon(latlngs, {
      color: 'white', weight: 2, fillColor: '#0172A4', fillOpacity: 0.25
    }).addTo(map)
    map.fitBounds(poly.getBounds(), { padding: [10, 10] })
  } else {
    map.setView([org.lat, org.lng], 13)
    L.circleMarker([org.lat, org.lng], {
      radius: 6, color: 'white', fillColor: 'var(--pri)', fillOpacity: 1, weight: 2
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
