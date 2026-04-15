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
}

const METRICS_BY_MODEL = {
  'P+':       ['pluie', 'temperature', 'humidite_air', 'dpv', 'vent_vitesse', 'vent_rafales', 'rayonnement', 'etp'],
  'PT':       ['pluie', 'temperature'],
  'P':        ['pluie'],
  'TH':       ['temperature', 'humidite_air', 'dpv'],
  'T_MINI':   ['temperature_min'],
  'W':        ['vent_vitesse', 'vent_rafales', 'vent_direction'],
  'CHP-15/30': ['humidite_sol_15', 'humidite_sol_30', 'temp_sol'],
  'CHP-30/60': ['humidite_sol_30', 'humidite_sol_60', 'temp_sol'],
  'CHP-60/90': ['humidite_sol_60', 'humidite_sol_90', 'temp_sol'],
  'CAPA-30-3': ['tensio_30', 'tensio_60', 'tensio_90'],
  'CAPA-60-6': ['tensio_30', 'tensio_60', 'tensio_90', 'tensio_120', 'tensio_150', 'tensio_180'],
  'EC':       ['conductivite', 'temp_sol'],
  'LWS':      ['humectation'],
  'PYRANO':   ['rayonnement'],
  'PAR':      ['par'],
  'T_GEL':    ['temperature_gel'],
}

function rnd(min, max)  { return Math.floor(Math.random() * (max - min + 1)) + min }
function rndf(min, max) { return parseFloat((Math.random() * (max - min) + min).toFixed(2)) }

function getMetrics(s) {
  const keys = METRICS_BY_MODEL[s.model] || ['temperature', 'humidite_air']
  return keys.map(k => ({ id: k, ...METRIC_DEFS[k], current: METRIC_DEFS[k].baseVal() }))
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
  return { max: 15, '1h': 60, '1d': 1440, '1w': 10080 }[step] ?? 60
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
}

// ─── Charts ───────────────────────────────────────────────────────────────────

function renderCharts() {
  const container = document.getElementById('charts-container')
  container.innerHTML = ''
  const metrics = getMetrics(sensor)

  metrics.forEach(m => {
    const card = document.createElement('div')
    card.className = 'chart-card'
    card.dataset.base  = m.current
    card.dataset.color = m.color
    card.dataset.cumul = m.isCumul ? '1' : ''

    const cumulHtml = m.cumul
      ? `<div class="chart-cumul"><span class="chart-cumul-label">${m.cumul.label}</span><span class="chart-cumul-value">${generateCumulValue(m)} ${m.cumul.unit}</span></div>`
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
  })

  drawAllCharts()
}

function drawAllCharts() {
  const count = getDisplayCount()
  const step  = getStepMinutes()

  document.querySelectorAll('.chart-card').forEach(card => {
    const base    = parseFloat(card.dataset.base)
    const color   = card.dataset.color
    const isCumul = card.dataset.cumul === '1'
    drawChart(card.querySelector('.chart-svg'), base, color, count, step, isCumul)
  })
}

function drawChart(svg, base, color, count, stepMins, isCumul) {
  const W = 600, H = 180, PAD = { t: 12, r: 8, b: 28, l: 44 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  const rawPerStep = Math.max(1, Math.round(stepMins / 15))
  const vals = Array.from({ length: count }, () => {
    let sum = 0
    for (let i = 0; i < rawPerStep; i++) sum += Math.max(0, base + (Math.random() - 0.5) * base * 0.5)
    return isCumul ? sum : sum / rawPerStep
  })

  const minV = Math.min(...vals)
  const maxV = Math.max(...vals)
  const range = maxV - minV || 1

  const xOf = i => PAD.l + (i / (count - 1)) * innerW
  const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

  let lines = ''
  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = (maxV - (i / 4) * range).toFixed(1)
    lines += `<line x1="${PAD.l}" y1="${y}" x2="${W - PAD.r}" y2="${y}" stroke="var(--bdr2)" stroke-width="1"/>`
    lines += `<text x="${PAD.l - 4}" y="${y + 4}" text-anchor="end" font-size="10" fill="var(--txt3)">${v}</text>`
  }

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

  const pts      = vals.map((v, i) => `${xOf(i)},${yOf(v)}`).join(' ')
  const areaPath = `M${xOf(0)},${yOf(vals[0])} ` +
    vals.map((v, i) => `L${xOf(i)},${yOf(v)}`).join(' ') +
    ` L${xOf(count - 1)},${PAD.t + innerH} L${xOf(0)},${PAD.t + innerH} Z`

  lines += `<path d="${areaPath}" fill="${color}" opacity="0.12"/>`
  lines += `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>`
  svg.innerHTML = lines
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
      <div class="panel-add-row" style="margin-top:6px">
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
