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
    { id: 'sol15', name: 'Hum. sol 15 cm', unit: '%vol', color: '#d4a843', base: () => rnd(15, 45) },
    { id: 'sol30', name: 'Hum. sol 30 cm', unit: '%vol', color: '#b88a2c', base: () => rnd(15, 45) },
    { id: 'tsol',  name: 'Temp. sol',      unit: '°C',   color: '#bb8fce', base: () => rnd(8, 22)  },
  ],
  'CHP-30/60': [
    { id: 'sol30', name: 'Hum. sol 30 cm', unit: '%vol', color: '#b88a2c', base: () => rnd(15, 45) },
    { id: 'sol60', name: 'Hum. sol 60 cm', unit: '%vol', color: '#9a7015', base: () => rnd(18, 42) },
    { id: 'tsol',  name: 'Temp. sol',      unit: '°C',   color: '#bb8fce', base: () => rnd(8, 22)  },
  ],
  'CHP-60/90': [
    { id: 'sol60', name: 'Hum. sol 60 cm', unit: '%vol', color: '#9a7015', base: () => rnd(18, 42) },
    { id: 'sol90', name: 'Hum. sol 90 cm', unit: '%vol', color: '#7c5800', base: () => rnd(20, 40) },
    { id: 'tsol',  name: 'Temp. sol',      unit: '°C',   color: '#bb8fce', base: () => rnd(8, 22)  },
  ],
  'CAPA-30-3': [
    { id: 'tensio30', name: 'Tension 30 cm', unit: 'cbar', color: '#98d8c8', base: () => rnd(10, 80) },
    { id: 'tensio60', name: 'Tension 60 cm', unit: 'cbar', color: '#78b8a8', base: () => rnd(10, 80) },
    { id: 'tensio90', name: 'Tension 90 cm', unit: 'cbar', color: '#589888', base: () => rnd(10, 80) },
  ],
  'CAPA-60-6': [
    { id: 'tensio30',  name: 'Tension 30 cm',  unit: 'cbar', color: '#98d8c8', base: () => rnd(10, 80) },
    { id: 'tensio60',  name: 'Tension 60 cm',  unit: 'cbar', color: '#78b8a8', base: () => rnd(10, 80) },
    { id: 'tensio90',  name: 'Tension 90 cm',  unit: 'cbar', color: '#589888', base: () => rnd(10, 80) },
    { id: 'tensio120', name: 'Tension 120 cm', unit: 'cbar', color: '#387868', base: () => rnd(10, 80) },
    { id: 'tensio150', name: 'Tension 150 cm', unit: 'cbar', color: '#185848', base: () => rnd(10, 80) },
    { id: 'tensio180', name: 'Tension 180 cm', unit: 'cbar', color: '#003828', base: () => rnd(10, 80) },
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

// Irrigation pseudo-metric (manually entered events)
const IRRIGATION_METRIC = {
  id: 'irrigation_manual', name: 'Irrigations', unit: 'mm',
  color: '#0172A4', chartType: 'bar', isCumul: true,
  cumul: { label: 'Cumul irrigations', unit: 'mm' },
  base: () => 0,
}

// Metrics that are "tensiometers" — no conflict check on add
const TENSIO_MODELS = ['CAPA-30-3', 'CAPA-60-6']

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
  if (!parcelState.irrigationEvents) {
    parcelState.irrigationEvents = []
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
  return { max: 15, '1h': 60, '1d': 1440, '1w': 10080 }[step] ?? 60
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

  renderWeatherStrip()
  renderCharts()
  renderPanel()
  initPanelToggle()
  initPeriodControls()
  initMiniMap()
})

// ─── Weather strip ────────────────────────────────────────────────────────────

function getAllChartMetrics() {
  const result = []
  const linkedSensors = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  linkedSensors.forEach(s => {
    const metrics = METRICS_BY_MODEL[s.model]
    if (metrics) metrics.forEach(m => result.push(m))
  })
  result.push(IRRIGATION_METRIC)
  ALWAYS_METRICS.forEach(m => result.push(m))
  return result
}

function renderWeatherStrip() {
  const container = document.getElementById('weather-strip')
  container.innerHTML = ''
  getAllChartMetrics().forEach(m => {
    const rawVal = m.id === 'irrigation_manual'
      ? parcelState.irrigationEvents.reduce((s, e) => s + (e.mm || 0), 0)
      : m.base()
    const val = typeof rawVal === 'number' ? (Number.isInteger(rawVal) ? rawVal : rawVal.toFixed(1)) : '—'
    const card = document.createElement('div')
    card.className = 'latest-card'
    card.style.borderTop = `3px solid ${m.color}`
    card.innerHTML = `
      <div class="latest-card-name" style="color:${m.color}">${m.name}</div>
      <div class="latest-card-value">${val}<span class="latest-card-unit"> ${m.unit}</span></div>
      <div class="latest-card-ts">Maintenant</div>
    `
    container.appendChild(card)
  })
}

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

  // Irrigation chart (always shown — manual entries)
  appendIrrigationChart(container)

  // Always-available weather metrics last
  const alwaysHeader = document.createElement('div')
  alwaysHeader.className = 'chart-group-header'
  alwaysHeader.innerHTML = `<i class="bi bi-cloud-sun" style="color:var(--pri)"></i> <strong>Données météo</strong> <span class="chart-group-serial">Station de référence</span>`
  container.appendChild(alwaysHeader)
  ALWAYS_METRICS.forEach(m => appendChartCard(container, m))

  drawAllCharts()
  renderSummaryBlock()
}

function appendChartCard(container, m) {
  const base = m.base()
  const card = document.createElement('div')
  card.className = 'chart-card'
  card.dataset.base      = base
  card.dataset.color     = m.color
  card.dataset.cumul     = m.isCumul ? '1' : ''
  card.dataset.chartType = m.chartType || 'line'

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

function drawAllCharts() {
  const count = getDisplayCount()
  const step  = getStepMinutes()

  document.querySelectorAll('.chart-card').forEach(card => {
    const base      = parseFloat(card.dataset.base)
    const color     = card.dataset.color
    const isCumul   = card.dataset.cumul === '1'
    const chartType = card.dataset.chartType || 'line'
    if (card.dataset.isIrrigation) {
      drawIrrigationChart(card.querySelector('.chart-svg'), color, count, step)
    } else {
      drawChart(card.querySelector('.chart-svg'), base, color, count, step, isCumul, chartType)
    }
  })
}

function drawChart(svg, base, color, count, stepMins, isCumul, chartType = 'line') {
  const W = 600, H = 180, PAD = { t: 12, r: 8, b: 28, l: 44 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  // Generate 15-min base points, then aggregate to step
  const rawPerStep = Math.max(1, Math.round(stepMins / 15))
  const vals = Array.from({ length: count }, () => {
    let sum = 0
    for (let i = 0; i < rawPerStep; i++) sum += Math.max(0, base + (Math.random() - 0.5) * base * 0.5)
    return isCumul ? sum : sum / rawPerStep
  })

  const minV = chartType === 'bar' ? 0 : Math.min(...vals)
  const maxV = Math.max(...vals)
  const range = maxV - minV || 1

  const xOf = i => PAD.l + (i / Math.max(count - 1, 1)) * innerW
  const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

  let lines = ''
  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = (maxV - (i / 4) * range).toFixed(1)
    lines += `<line x1="${PAD.l}" y1="${y}" x2="${W - PAD.r}" y2="${y}" stroke="var(--bdr2)" stroke-width="1"/>`
    lines += `<text x="${PAD.l - 4}" y="${y + 4}" text-anchor="end" font-size="10" fill="var(--txt3)">${v}</text>`
  }

  // X-axis labels
  const labelStep = Math.max(1, Math.floor(count / 6))
  for (let i = 0; i < count; i += labelStep) {
    const x = xOf(i)
    const agoMins = (count - i) * stepMins
    let label
    if (agoMins < 120)        label = `-${agoMins}min`
    else if (agoMins < 2880)  label = `-${Math.round(agoMins / 60)}h`
    else if (agoMins < 20160) label = `-${Math.round(agoMins / 1440)}j`
    else                      label = `-${Math.round(agoMins / 10080)}sem`
    lines += `<text x="${x}" y="${H - 6}" text-anchor="middle" font-size="10" fill="var(--txt3)">${label}</text>`
  }

  if (chartType === 'bar') {
    const barW = Math.max(2, (innerW / count) * 0.65)
    vals.forEach((v, i) => {
      if (v <= 0) return
      const x  = xOf(i)
      const y  = yOf(v)
      const h  = (PAD.t + innerH) - y
      lines += `<rect x="${(x - barW / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" fill="${color}" opacity="0.85" rx="1"/>`
    })
  } else {
    const pts      = vals.map((v, i) => `${xOf(i).toFixed(1)},${yOf(v).toFixed(1)}`).join(' ')
    const areaPath = `M${xOf(0).toFixed(1)},${yOf(vals[0]).toFixed(1)} ` +
      vals.map((v, i) => `L${xOf(i).toFixed(1)},${yOf(v).toFixed(1)}`).join(' ') +
      ` L${xOf(count - 1).toFixed(1)},${PAD.t + innerH} L${xOf(0).toFixed(1)},${PAD.t + innerH} Z`
    lines += `<path d="${areaPath}" fill="${color}" opacity="0.12"/>`
    lines += `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>`
  }

  svg.innerHTML = lines
}

function drawIrrigationChart(svg, color, count, stepMins) {
  const W = 600, H = 180, PAD = { t: 12, r: 8, b: 28, l: 44 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  const now = Date.now()
  const totalMs = count * stepMins * 60000

  // Bin events into time steps
  const bins = Array(count).fill(0)
  parcelState.irrigationEvents.forEach(ev => {
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

function appendIrrigationChart(container) {
  const m = IRRIGATION_METRIC
  const events = parcelState.irrigationEvents || []
  const totalMm = events.reduce((s, e) => s + (e.mm || 0), 0)

  const card = document.createElement('div')
  card.className = 'chart-card'
  card.dataset.color       = m.color
  card.dataset.chartType   = 'bar'
  card.dataset.isIrrigation = '1'

  card.innerHTML = `
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${m.color}">${m.name}</span>
      <span class="chart-card-unit">${m.unit}</span>
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    <div class="chart-cumul">
      <span class="chart-cumul-label">Cumul irrigations</span>
      <span class="chart-cumul-value irrig-cumul-val">${totalMm.toFixed(1)} mm</span>
    </div>
    <div class="irrig-events-list" style="margin-top:6px"></div>
    <button class="irrig-add-btn action-btn" style="margin-top:6px;width:100%">
      <i class="bi bi-plus"></i> Ajouter une irrigation
    </button>
  `
  container.appendChild(card)

  renderIrrigEvents(card)

  card.querySelector('.irrig-add-btn').addEventListener('click', () => {
    showIrrigForm(card)
  })
}

function renderIrrigEvents(card) {
  const list = card.querySelector('.irrig-events-list')
  const events = parcelState.irrigationEvents || []
  if (events.length === 0) {
    list.innerHTML = '<span class="panel-empty" style="font-size:12px">Aucune irrigation saisie</span>'
    return
  }
  list.innerHTML = events.map((e, i) => `
    <div class="integ-pill-row" style="margin-top:3px">
      <span class="integ-pill"><i class="bi bi-droplet-fill" style="color:#0172A4"></i> ${e.mm} mm — ${e.isoDate.replace('T', ' ').slice(0, 16)}</span>
      <button class="icon-btn remove-irrig-btn" data-idx="${i}" title="Supprimer"><i class="bi bi-x-lg"></i></button>
    </div>
  `).join('')

  list.querySelectorAll('.remove-irrig-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx)
      const updated = [...parcelState.irrigationEvents]
      updated.splice(idx, 1)
      saveState({ irrigationEvents: updated })
      renderCharts()
      renderWeatherStrip()
    })
  })
}

function showIrrigForm(card) {
  if (card.querySelector('.irrig-form')) return
  const today = new Date().toISOString().slice(0, 16)
  const form = document.createElement('div')
  form.className = 'irrig-form alert-create-form'
  form.style.marginTop = '8px'
  form.innerHTML = `
    <div class="alert-form-row">
      <input type="number" id="irrig-mm" class="inline-edit" placeholder="mm" min="0" step="0.1" style="width:70px">
      <input type="datetime-local" id="irrig-date" class="inline-edit" value="${today}" style="width:190px">
    </div>
    <div class="alert-form-actions">
      <button id="irrig-save" class="panel-add-btn">Enregistrer</button>
      <button id="irrig-cancel" class="icon-btn"><i class="bi bi-x"></i></button>
    </div>
  `
  card.appendChild(form)

  form.querySelector('#irrig-save').addEventListener('click', () => {
    const mm  = parseFloat(form.querySelector('#irrig-mm').value)
    const dt  = form.querySelector('#irrig-date').value
    if (!mm || mm <= 0 || !dt) return
    const updated = [...(parcelState.irrigationEvents || []), { isoDate: dt, mm }]
    updated.sort((a, b) => a.isoDate.localeCompare(b.isoDate))
    saveState({ irrigationEvents: updated })
    renderCharts()
    renderWeatherStrip()
  })
  form.querySelector('#irrig-cancel').addEventListener('click', () => form.remove())
}

function renderSummaryBlock() {
  const container = document.getElementById('charts-container')
  // Compute cumuls from parcel state metrics
  const linkedSensors = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  let pluieMm = null, irrigMm = 0, etpMm = null

  linkedSensors.forEach(s => {
    const metrics = METRICS_BY_MODEL[s.model] || []
    metrics.forEach(m => {
      if (m.id === 'pluie' && pluieMm === null) pluieMm = rnd(20, 80)
    })
  })
  if (pluieMm === null) pluieMm = 0

  etpMm = rndf(15, 60)
  irrigMm = (parcelState.irrigationEvents || []).reduce((s, e) => s + (e.mm || 0), 0)
  const drainageMm = Math.max(0, pluieMm + irrigMm - etpMm)

  const summary = document.createElement('div')
  summary.className = 'cumul-summary'
  summary.innerHTML = `
    <div class="cumul-item">
      <i class="bi bi-cloud-rain" style="color:#45b7d1"></i>
      <span class="cumul-label">Pluie</span>
      <span class="cumul-value">${pluieMm.toFixed(0)} mm</span>
    </div>
    <div class="cumul-item">
      <i class="bi bi-sun" style="color:#c090e0"></i>
      <span class="cumul-label">ETP</span>
      <span class="cumul-value">${etpMm.toFixed(1)} mm</span>
    </div>
    <div class="cumul-item">
      <i class="bi bi-droplet-fill" style="color:#0172A4"></i>
      <span class="cumul-label">Irrigations</span>
      <span class="cumul-value">${irrigMm.toFixed(1)} mm</span>
    </div>
    <div class="cumul-item">
      <i class="bi bi-layers" style="color:#7bc4b0"></i>
      <span class="cumul-label">Drainage estimé</span>
      <span class="cumul-value">${drainageMm.toFixed(0)} mm</span>
    </div>
  `
  container.appendChild(summary)
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

function editableRow(label, value, field, inputType) {
  return `
    <div class="panel-row editable-row" data-field="${field}">
      <span class="panel-row-key">${label}</span>
      <span class="panel-row-val" data-val></span>
      <button class="edit-field-btn" title="Modifier"><i class="bi bi-pencil"></i></button>
    </div>`
}

function editableSelect(label, value, field, options, displayClass) {
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

  el.innerHTML = `
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${org?.ville || '—'}${org?.departement ? ` (${org.departement})` : ''}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${org?.lat?.toFixed(4) ?? '—'}, ${org?.lng?.toFixed(4) ?? '—'}</span>
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
  const org    = orgs.find(o => o.id === parcelBase.orgId)

  // Available sensors: same org, not yet linked
  const available = allSensors.filter(s =>
    s.orgId === parcelBase.orgId &&
    !parcelState.linkedSensorIds.includes(s.id)
  )

  let html = ''
  if (linked.length === 0) {
    html += `<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>`
  } else {
    html += linked.map(s => `
      <div class="sensor-linked-row">
        <a href="capteur-detail.html?id=${s.id}" class="sensor-link-model">${s.model}</a>
        <span class="sensor-link-serial">${s.serial}</span>
        <button class="remove-sensor-btn icon-btn" data-id="${s.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join('')
  }

  if (available.length > 0) {
    html += `
      <div class="panel-add-row" style="margin-top:6px">
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
        // Tensiometer: ask for depth info
        const depths = prompt(
          `Profondeur(s) d'installation du ${sensor.model} (ex : 30, 60, 90 cm) :`,
          '30, 60, 90'
        )
        if (depths === null) return
        // Store depth info alongside the sensor
        const extra = getParcel(parcelId)
        const tensioDepths = extra.tensioDepths || {}
        tensioDepths[id] = depths
        patchParcel(parcelId, { tensioDepths })
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
      <div class="panel-add-row" style="margin-top:6px">
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

function showCreateAlertForm(container) {
  const existingForm = container.querySelector('.alert-create-form')
  if (existingForm) return

  const form = document.createElement('div')
  form.className = 'alert-create-form'
  form.innerHTML = `
    <div class="alert-form-row">
      <select id="alert-metric" class="panel-add-select">
        <option value="">Métrique…</option>
        <option value="Pluie">Pluie</option>
        <option value="Température">Température</option>
        <option value="Humidité sol">Humidité sol</option>
        <option value="ETP">ETP</option>
        <option value="Vent">Vent</option>
        <option value="Rayonnement">Rayonnement</option>
        <option value="T° de rosée">T° de rosée</option>
      </select>
    </div>
    <div class="alert-form-row">
      <select id="alert-condition" class="panel-add-select" style="max-width:80px">
        <option value=">">&gt;</option>
        <option value="<">&lt;</option>
        <option value="=">=</option>
      </select>
      <input type="number" id="alert-threshold" class="inline-edit" placeholder="Seuil" style="width:70px">
      <input type="text"   id="alert-unit"      class="inline-edit" placeholder="Unité" style="width:50px">
    </div>
    <div class="alert-form-actions">
      <button id="alert-save-btn" class="panel-add-btn">Enregistrer</button>
      <button id="alert-cancel-btn" class="icon-btn"><i class="bi bi-x"></i></button>
    </div>
  `
  container.appendChild(form)

  document.getElementById('alert-save-btn').addEventListener('click', () => {
    const metric    = document.getElementById('alert-metric').value
    const condition = document.getElementById('alert-condition').value
    const threshold = document.getElementById('alert-threshold').value
    const unit      = document.getElementById('alert-unit').value
    if (!metric || !threshold) return

    const newAlert = {
      type:      'seuil',
      label:     `Alerte ${metric}`,
      metric, condition, threshold, unit,
    }
    const updated = [...(parcelState.alertes || []), newAlert]
    saveState({ alertes: updated })
    renderAlertes()
  })

  document.getElementById('alert-cancel-btn').addEventListener('click', () => {
    form.remove()
  })
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
