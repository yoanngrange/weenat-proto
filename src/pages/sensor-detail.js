// Sensor detail page — two-column layout, no tabs, single period selector
import { sensors } from '../data/sensors.js'
import { plots } from '../data/plots.js'
import { orgs } from '../data/orgs.js'
import { members } from '../data/members.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

const urlParams = new URLSearchParams(window.location.search)
const sensorId = parseInt(urlParams.get('id'))
const sensor = sensors.find(s => s.id === sensorId)

// ─── Metric definitions ───────────────────────────────────────────────────────

const METRIC_DEFS = {
  pluie:            { name: 'Pluie',               unit: 'mm',          color: '#45b7d1', baseVal: () => rnd(0, 8),    cumul: { label: 'Cumul pluie',       unit: 'mm' } },
  temperature:      { name: 'Température',          unit: '°C',          color: '#e07050', baseVal: () => rnd(10, 28),  cumul: { label: 'Degrés-jours (DJC)', unit: '°j' } },
  humidite_air:     { name: 'Humidité air',         unit: '%',           color: '#4ecdc4', baseVal: () => rnd(40, 90)  },
  dpv:              { name: 'DPV',                  unit: 'kPa',         color: '#a8d8b0', baseVal: () => rndf(0.1, 2.5) },
  vent_vitesse:     { name: 'Vent – vitesse',       unit: 'km/h',        color: '#7bc4b0', baseVal: () => rnd(0, 40)   },
  vent_rafales:     { name: 'Vent – rafales',       unit: 'km/h',        color: '#5aa490', baseVal: () => rnd(5, 60)   },
  vent_direction:   { name: 'Direction vent',       unit: '°',           color: '#3a8070', baseVal: () => rnd(0, 360)  },
  rayonnement:      { name: 'Rayonnement',          unit: 'W/m²',        color: '#f5c842', baseVal: () => rnd(0, 900),  cumul: { label: 'Énergie',           unit: 'Wh/m²' } },
  etp:              { name: 'ETP',                  unit: 'mm/j',        color: '#c090e0', baseVal: () => rndf(0.5, 5), cumul: { label: 'Cumul ETP',         unit: 'mm' } },
  temperature_min:  { name: 'Température min',      unit: '°C',          color: '#90b0e0', baseVal: () => rnd(-2, 15),  cumul: { label: 'Heures de froid',   unit: 'h' } },
  humidite_sol_15:  { name: 'Hum. sol 15 cm',      unit: '%vol',        color: '#d4a843', baseVal: () => rnd(15, 45)  },
  humidite_sol_30:  { name: 'Hum. sol 30 cm',      unit: '%vol',        color: '#b88a2c', baseVal: () => rnd(15, 45)  },
  humidite_sol_60:  { name: 'Hum. sol 60 cm',      unit: '%vol',        color: '#9a7015', baseVal: () => rnd(18, 42)  },
  humidite_sol_90:  { name: 'Hum. sol 90 cm',      unit: '%vol',        color: '#7c5800', baseVal: () => rnd(20, 40)  },
  temp_sol:         { name: 'Temp. sol',            unit: '°C',          color: '#bb8fce', baseVal: () => rnd(8, 22)   },
  tensio_30:        { name: 'Tension sol 30 cm',    unit: 'cbar',        color: '#98d8c8', baseVal: () => rnd(10, 80)  },
  tensio_60:        { name: 'Tension sol 60 cm',    unit: 'cbar',        color: '#78b8a8', baseVal: () => rnd(10, 80)  },
  tensio_90:        { name: 'Tension sol 90 cm',    unit: 'cbar',        color: '#589888', baseVal: () => rnd(10, 80)  },
  tensio_120:       { name: 'Tension sol 120 cm',   unit: 'cbar',        color: '#387868', baseVal: () => rnd(10, 80)  },
  tensio_150:       { name: 'Tension sol 150 cm',   unit: 'cbar',        color: '#185848', baseVal: () => rnd(10, 80)  },
  tensio_180:       { name: 'Tension sol 180 cm',   unit: 'cbar',        color: '#003828', baseVal: () => rnd(10, 80)  },
  conductivite:     { name: 'Conductivité',         unit: 'mS/cm',       color: '#f0a030', baseVal: () => rndf(0.1, 3) },
  humectation:      { name: 'Humectation feuille',  unit: 'h',           color: '#78d8a0', baseVal: () => rnd(0, 12)   },
  par:              { name: 'PAR',                  unit: 'µmol/m²/s',   color: '#f8e840', baseVal: () => rnd(0, 2000) },
  temperature_gel:  { name: 'Temp. feuille/gel',    unit: '°C',          color: '#a0d8a0', baseVal: () => rnd(-3, 12),  cumul: { label: 'Heures de gel',     unit: 'h' } },
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
function rndf(min, max) { return parseFloat((Math.random() * (max - min) + min).toFixed(1)) }

function getMetrics(s) {
  const keys = METRICS_BY_MODEL[s.model] || ['temperature', 'humidite_air']
  return keys.map(k => ({ id: k, ...METRIC_DEFS[k], current: METRIC_DEFS[k].baseVal() }))
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  if (!sensor) {
    document.body.innerHTML = '<div style="padding:40px"><h1>Capteur non trouvé</h1></div>'
    return
  }

  updateBreadcrumb(`Capteur ${sensor.serial}`)
  renderHeader()
  renderLatestStrip()
  renderCharts()
  renderPanel()
  initPanelToggle()
  initPeriodListeners()
  initMiniMap()

  document.getElementById('modifier-btn')?.addEventListener('click', () => {
    alert('Fonctionnalité à venir — modification du capteur.')
  })
})

// ─── Header ───────────────────────────────────────────────────────────────────

function renderHeader() {
  document.getElementById('sensor-title').textContent = `Capteur ${sensor.serial}`

  const modelBadge = document.getElementById('sensor-model-badge')
  modelBadge.textContent = sensor.model
  modelBadge.style.background = 'var(--pri2)'
  modelBadge.style.color = 'var(--pri)'

  if (sensor.event) {
    const evBadge = document.getElementById('sensor-event-badge')
    document.getElementById('sensor-event-text').textContent = sensor.event
    evBadge.style.display = 'inline-flex'
  }

  const lastMsg = new Date(sensor.lastMessage)
  document.getElementById('sensor-last-msg').textContent =
    `Dernier message : ${lastMsg.toLocaleDateString('fr-FR')} à ${lastMsg.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`
}

// ─── Latest strip ─────────────────────────────────────────────────────────────

function renderLatestStrip() {
  const container = document.getElementById('latest-strip')
  const metrics = getMetrics(sensor)

  metrics.forEach(m => {
    const card = document.createElement('div')
    card.className = 'latest-card'
    card.style.borderTop = `3px solid ${m.color}`
    card.innerHTML = `
      <div class="latest-card-name">${m.name}</div>
      <div class="latest-card-value">${m.current}<span class="latest-card-unit"> ${m.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `
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
    card.dataset.metricId = m.id

    const cumulHtml = m.cumul
      ? `<div class="chart-cumul"><span class="chart-cumul-label">${m.cumul.label}</span><span class="chart-cumul-value">${generateCumulValue(m)}&thinsp;${m.cumul.unit}</span></div>`
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
  const period = document.getElementById('period-select').value
  const step = document.getElementById('time-step').value
  const metrics = getMetrics(sensor)

  document.querySelectorAll('.chart-card').forEach((card, i) => {
    const m = metrics[i]
    if (!m) return
    drawChart(card.querySelector('.chart-svg'), m, period, step)
  })
}

function drawChart(svg, metric, period, step) {
  const W = 600, H = 180, PAD = { t: 12, r: 8, b: 28, l: 44 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  const periods = { '7d': 168, '30d': 720, '3m': 2160, '1y': 8760 }
  const steps   = { '1h': 1, '6h': 6, '1d': 24 }
  const count = Math.min(Math.floor(periods[period] / steps[step]), 120)

  const base = metric.current
  const vals = Array.from({ length: count }, () => Math.max(0, base + (Math.random() - 0.5) * base * 0.4))

  const minV = Math.min(...vals)
  const maxV = Math.max(...vals)
  const range = maxV - minV || 1

  const xOf = i => PAD.l + (i / (count - 1)) * innerW
  const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

  let lines = ''
  // Grid lines + Y labels
  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = (maxV - (i / 4) * range).toFixed(1)
    lines += `<line x1="${PAD.l}" y1="${y}" x2="${W - PAD.r}" y2="${y}" stroke="var(--bdr2)" stroke-width="1"/>`
    lines += `<text x="${PAD.l - 4}" y="${y + 4}" text-anchor="end" font-size="10" fill="var(--txt3)">${v}</text>`
  }

  // X labels (show ~4)
  const labelStep = Math.max(1, Math.floor(count / 4))
  for (let i = 0; i < count; i += labelStep) {
    const x = xOf(i)
    const ago = Math.round((count - i) * steps[step])
    const label = steps[step] < 24 ? `-${ago}h` : `-${Math.round(ago / 24)}j`
    lines += `<text x="${x}" y="${H - 6}" text-anchor="middle" font-size="10" fill="var(--txt3)">${label}</text>`
  }

  // Area fill
  const pts = vals.map((v, i) => `${xOf(i)},${yOf(v)}`).join(' ')
  const areaPath = `M${xOf(0)},${yOf(vals[0])} ` +
    vals.map((v, i) => `L${xOf(i)},${yOf(v)}`).join(' ') +
    ` L${xOf(count - 1)},${PAD.t + innerH} L${xOf(0)},${PAD.t + innerH} Z`

  lines += `<path d="${areaPath}" fill="${metric.color}" opacity="0.12"/>`
  lines += `<polyline points="${pts}" fill="none" stroke="${metric.color}" stroke-width="1.5" stroke-linejoin="round"/>`

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

function initPeriodListeners() {
  document.getElementById('period-select').addEventListener('change', drawAllCharts)
  document.getElementById('time-step').addEventListener('change', drawAllCharts)
}

// ─── Right panel ──────────────────────────────────────────────────────────────

function renderPanel() {
  const parcel = plots.find(p => p.id === sensor.parcelId)
  const org = parcel ? orgs.find(o => o.id === parcel.orgId) : (sensor.orgId ? orgs.find(o => o.id === sensor.orgId) : null)

  renderIdentification(parcel, org)
  renderLocalisation(parcel, org)
  renderSignalQuality()
  renderEvents()
  renderMetricsList()
  renderPanelMembres(parcel)
  renderActions()
  renderMaintenance()
}

function renderIdentification(parcel, org) {
  const rows = [
    ['Modèle',        sensor.model],
    ['Numéro série',  sensor.serial],
    ['Réseau télécom', sensor.telecom || 'Sigfox'],
    ['Parcelle',      parcel ? `<a href="parcelle-detail.html?id=${parcel.id}" style="color:var(--pri);text-decoration:none">${parcel.name}</a>` : '—'],
    ['Exploitation',  org ? org.name : '—'],
    ["Date d'ajout",  '15/01/2023'],
  ]
  document.getElementById('panel-ident').innerHTML = rows.map(([k, v]) => `
    <div class="panel-row">
      <span class="panel-row-key">${k}</span>
      <span class="panel-row-val">${v}</span>
    </div>`).join('')
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
  const q = sensor.networkQuality || 80
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

function renderActions() {
  document.getElementById('panel-actions').innerHTML = `
    <button class="action-btn"><i class="bi bi-link-45deg"></i> Lier à une parcelle</button>
    <button class="action-btn"><i class="bi bi-download"></i> Exporter les données</button>
    <button class="action-btn"><i class="bi bi-gear"></i> Paramètres capteur</button>
    <button class="action-btn action-btn--danger"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `
}

function renderMaintenance() {
  const items = [
    { type: 'installation', label: 'Installation initiale', date: '15/01/2023', user: 'Technicien Weenat', icon: 'bi-box-arrow-in-down' },
    { type: 'nettoyage',    label: 'Nettoyage pluviomètre', date: '20/03/2023', user: 'Agriculteur',       icon: 'bi-droplet' },
    { type: 'batterie',     label: 'Changement de batterie', date: '10/06/2023', user: 'Technicien Weenat', icon: 'bi-battery-charging' },
    { type: 'note',         label: 'Redressage capteur déplacé', date: '02/11/2023', user: 'Agriculteur', icon: 'bi-chat-text' },
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

// ─── Membres associés ─────────────────────────────────────────────────────────

let linkedMemberIds = members.filter(m => sensor.parcelId
  ? m.parcelIds.includes(sensor.parcelId)
  : m.orgIds.includes(sensor.orgId)
).map(m => m.id)

function renderPanelMembres(parcel) {
  const el     = document.getElementById('panel-membres')
  if (!el) return
  const linked = members.filter(m => linkedMemberIds.includes(m.id))

  if (!linked.length) {
    el.innerHTML = '<p style="font-size:12px;color:var(--txt3)">Aucun membre associé.</p>'
  } else {
    el.innerHTML = linked.map(m => `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--bdr2)">
        <div>
          <span style="font-size:12px;font-weight:500">${m.prenom} ${m.nom}</span>
          <span class="member-role-badge" style="margin-left:6px;background:var(--bdr2);color:var(--txt2)">${m.role}</span>
        </div>
        <button class="remove-membre-btn" data-id="${m.id}" title="Retirer" style="background:none;border:none;cursor:pointer;color:var(--txt3);font-size:14px;padding:2px 4px">
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
  const org = parcel ? orgs.find(o => o.id === parcel.orgId) : null
  if (!org?.lat) return

  const map = L.map('sensor-mini-map', { zoomControl: false, attributionControl: false })
    .setView([org.lat, org.lng], 12)

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Esri'
  }).addTo(map)

  L.circleMarker([org.lat, org.lng], {
    radius: 6, color: 'white', fillColor: 'var(--pri)', fillOpacity: 1, weight: 2
  }).addTo(map)
}

// ─── Panel toggle ─────────────────────────────────────────────────────────────

function initPanelToggle() {
  const layout = document.getElementById('detail-layout')
  const btn = document.getElementById('panel-toggle')

  btn.addEventListener('click', () => {
    const collapsed = layout.classList.toggle('panel-collapsed')
    btn.title = collapsed ? 'Afficher le panneau' : 'Masquer le panneau'
    btn.querySelector('i').className = collapsed
      ? 'bi bi-layout-sidebar-reverse-inset'
      : 'bi bi-layout-sidebar-reverse'
  })
}
