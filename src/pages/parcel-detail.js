// Parcel detail page — two-column layout, no tabs, single period selector
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { orgs } from '../data/orgs.js'
import { members } from '../data/members.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

const urlParams = new URLSearchParams(window.location.search)
const parcelId = parseInt(urlParams.get('id'))
const parcel = plots.find(p => p.id === parcelId)

// ─── Metric definitions for parcel view ──────────────────────────────────────

function rnd(min, max)  { return Math.floor(Math.random() * (max - min + 1)) + min }
function rndf(min, max) { return parseFloat((Math.random() * (max - min) + min).toFixed(1)) }

// Weather metrics shown in the top strip (from nearest P+ station)
const WEATHER_METRICS = [
  { name: 'Pluie 24h',    unit: 'mm',   icon: 'bi-cloud-rain-fill',  color: '#45b7d1', val: () => rnd(0, 10)      },
  { name: 'Température',  unit: '°C',   icon: 'bi-thermometer-half', color: '#e07050', val: () => rnd(10, 28)     },
  { name: 'Humidité',     unit: '%',    icon: 'bi-droplet-half',     color: '#4ecdc4', val: () => rnd(40, 90)     },
  { name: 'Vent',         unit: 'km/h', icon: 'bi-wind',             color: '#7bc4b0', val: () => rnd(0, 35)      },
  { name: 'ETP',          unit: 'mm/j', icon: 'bi-sun',              color: '#c090e0', val: () => rndf(0.5, 5)   },
  { name: 'Rayonnement',  unit: 'W/m²', icon: 'bi-brightness-high',  color: '#f5c842', val: () => rnd(0, 800)     },
]

// Metric charts by sensor model (subset shown in charts section)
const CHART_METRICS_BY_MODEL = {
  'P+':       [
    { id: 'pluie',       name: 'Pluie',       unit: 'mm',   color: '#45b7d1', base: () => rnd(0, 8),    cumul: { label: 'Cumul pluie', unit: 'mm' } },
    { id: 'temp',        name: 'Température', unit: '°C',   color: '#e07050', base: () => rnd(10, 28),   cumul: { label: 'DJC',         unit: '°j' } },
    { id: 'humidite',    name: 'Humidité air', unit: '%',   color: '#4ecdc4', base: () => rnd(40, 90)   },
    { id: 'rayonnement', name: 'Rayonnement', unit: 'W/m²', color: '#f5c842', base: () => rnd(0, 900),   cumul: { label: 'Énergie',     unit: 'Wh/m²' } },
    { id: 'etp',         name: 'ETP',         unit: 'mm/j', color: '#c090e0', base: () => rndf(0.5, 5),  cumul: { label: 'Cumul ETP',   unit: 'mm' } },
  ],
  'PT':  [
    { id: 'pluie', name: 'Pluie',      unit: 'mm',  color: '#45b7d1', base: () => rnd(0, 8), cumul: { label: 'Cumul pluie', unit: 'mm' } },
    { id: 'temp',  name: 'Température', unit: '°C', color: '#e07050', base: () => rnd(10, 28), cumul: { label: 'DJC', unit: '°j' } },
  ],
  'P': [
    { id: 'pluie', name: 'Pluie', unit: 'mm', color: '#45b7d1', base: () => rnd(0, 8), cumul: { label: 'Cumul pluie', unit: 'mm' } },
  ],
  'TH': [
    { id: 'temp',     name: 'Température',  unit: '°C',  color: '#e07050', base: () => rnd(10, 28) },
    { id: 'humidite', name: 'Humidité air', unit: '%',   color: '#4ecdc4', base: () => rnd(40, 90) },
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
  'CAPA-30-3': [
    { id: 'tensio30', name: 'Tension 30 cm', unit: 'cbar', color: '#98d8c8', base: () => rnd(10, 80) },
    { id: 'tensio60', name: 'Tension 60 cm', unit: 'cbar', color: '#78b8a8', base: () => rnd(10, 80) },
    { id: 'tensio90', name: 'Tension 90 cm', unit: 'cbar', color: '#589888', base: () => rnd(10, 80) },
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
}

const INTEGRATIONS_BY_CROP = {
  'Blé':    ['Arvalis PRÉVI-LIS', 'Xarvio'],
  'Maïs':   ['Pixagri', 'Movida GrapeVision'],
  'Vigne':  ['VitiMeteo', 'Millésime', 'Rimpro'],
  'Colza':  ['Arvalis MILÉOS', 'DeciTrait'],
  'default': ['Pixagri'],
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  if (!parcel) {
    document.body.innerHTML = '<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>'
    return
  }

  updateBreadcrumb(parcel.name)
  renderHeader()
  renderWeatherStrip()
  renderCharts()
  renderPanel()
  initPanelToggle()
  initPeriodListeners()
  initMiniMap()

  document.getElementById('modifier-btn')?.addEventListener('click', () => {
    alert('Fonctionnalité à venir — modification de la parcelle.')
  })
})

// ─── Header ───────────────────────────────────────────────────────────────────

function renderHeader() {
  const org = orgs.find(o => o.id === parcel.orgId)

  document.getElementById('parcel-title').textContent = parcel.name

  const cropBadge = document.getElementById('parcel-crop-badge')
  cropBadge.textContent = parcel.crop || 'Culture inconnue'
  cropBadge.style.background = 'var(--ok2)'
  cropBadge.style.color = 'var(--ok)'

  const areaBadge = document.getElementById('parcel-area-badge')
  areaBadge.textContent = parcel.area ? `${parcel.area} ha` : '—'
  areaBadge.style.background = 'var(--bdr2)'
  areaBadge.style.color = 'var(--txt2)'

  document.getElementById('parcel-org-badge').textContent = org ? org.name : ''
}

// ─── Weather strip ────────────────────────────────────────────────────────────

function renderWeatherStrip() {
  const container = document.getElementById('weather-strip')
  WEATHER_METRICS.forEach(m => {
    const card = document.createElement('div')
    card.className = 'latest-card'
    card.style.borderTop = `3px solid ${m.color}`
    card.innerHTML = `
      <div class="latest-card-name"><i class="bi ${m.icon}" style="color:${m.color}"></i> ${m.name}</div>
      <div class="latest-card-value">${m.val()}<span class="latest-card-unit"> ${m.unit}</span></div>
      <div class="latest-card-ts">Maintenant</div>
    `
    container.appendChild(card)
  })
}

// ─── Charts ───────────────────────────────────────────────────────────────────

function renderCharts() {
  const container = document.getElementById('charts-container')
  container.innerHTML = ''

  const linkedSensors = sensors.filter(s => s.parcelId === parcel.id)
  if (linkedSensors.length === 0) {
    container.innerHTML = `<div class="panel-empty" style="padding:32px;text-align:center">Aucun capteur lié à cette parcelle</div>`
    return
  }

  linkedSensors.forEach(s => {
    const metrics = CHART_METRICS_BY_MODEL[s.model]
    if (!metrics) return

    // Sensor group header
    const groupHeader = document.createElement('div')
    groupHeader.className = 'chart-group-header'
    groupHeader.innerHTML = `
      <i class="bi bi-broadcast" style="color:var(--pri)"></i>
      <strong>${s.model}</strong>
      <span class="chart-group-serial">${s.serial}</span>
      ${s.event ? `<span class="detail-badge detail-badge--err"><i class="bi bi-exclamation-triangle-fill"></i> ${s.event}</span>` : ''}
    `
    container.appendChild(groupHeader)

    metrics.forEach(m => {
      const card = document.createElement('div')
      card.className = 'chart-card'
      const base = m.base()

      const cumulHtml = m.cumul
        ? `<div class="chart-cumul"><span class="chart-cumul-label">${m.cumul.label}</span><span class="chart-cumul-value">${genCumul(m)}&thinsp;${m.cumul.unit}</span></div>`
        : ''

      card.innerHTML = `
        <div class="chart-card-header">
          <span class="chart-card-name" style="color:${m.color}">${m.name}</span>
          <span class="chart-card-unit">${m.unit}</span>
        </div>
        <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none" data-base="${base}" data-color="${m.color}"></svg>
        ${cumulHtml}
      `
      container.appendChild(card)
    })
  })

  drawAllCharts()
}

function drawAllCharts() {
  const period = document.getElementById('period-select').value
  const step = document.getElementById('time-step').value

  document.querySelectorAll('.chart-svg').forEach(svg => {
    const base = parseFloat(svg.dataset.base)
    const color = svg.dataset.color
    drawChart(svg, base, color, period, step)
  })
}

function drawChart(svg, base, color, period, step) {
  const W = 600, H = 180, PAD = { t: 12, r: 8, b: 28, l: 44 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  const periods = { '7d': 168, '30d': 720, '3m': 2160, '1y': 8760 }
  const steps   = { '1h': 1, '6h': 6, '1d': 24 }
  const count = Math.min(Math.floor(periods[period] / steps[step]), 120)

  const vals = Array.from({ length: count }, () => Math.max(0, base + (Math.random() - 0.5) * base * 0.4))
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

  const labelStep = Math.max(1, Math.floor(count / 4))
  for (let i = 0; i < count; i += labelStep) {
    const x = xOf(i)
    const ago = Math.round((count - i) * steps[step])
    const label = steps[step] < 24 ? `-${ago}h` : `-${Math.round(ago / 24)}j`
    lines += `<text x="${x}" y="${H - 6}" text-anchor="middle" font-size="10" fill="var(--txt3)">${label}</text>`
  }

  const pts = vals.map((v, i) => `${xOf(i)},${yOf(v)}`).join(' ')
  const areaPath = `M${xOf(0)},${yOf(vals[0])} ` +
    vals.map((v, i) => `L${xOf(i)},${yOf(v)}`).join(' ') +
    ` L${xOf(count - 1)},${PAD.t + innerH} L${xOf(0)},${PAD.t + innerH} Z`

  lines += `<path d="${areaPath}" fill="${color}" opacity="0.12"/>`
  lines += `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>`
  svg.innerHTML = lines
}

function genCumul(m) {
  const bases = {
    pluie:   () => rnd(20, 120),
    rayonnement: () => rnd(500, 3000),
    etp:     () => rndf(15, 80),
    tmin:    () => rnd(50, 500),
    tgel:    () => rnd(0, 80),
    temp:    () => rnd(80, 400),
  }
  const fn = bases[m.id]
  return fn ? fn() : rnd(10, 100)
}

function initPeriodListeners() {
  document.getElementById('period-select').addEventListener('change', drawAllCharts)
  document.getElementById('time-step').addEventListener('change', drawAllCharts)
}

// ─── Right panel ──────────────────────────────────────────────────────────────

function renderPanel() {
  const org = orgs.find(o => o.id === parcel.orgId)
  renderIdentification(org)
  renderLocalisation(org)
  renderLinkedSensors()
  renderIntegrations()
  renderPanelMembres()
  renderActions()
}

function renderIdentification(org) {
  const soilTypes = ['Argilo-limoneux', 'Argileux', 'Limoneux', 'Sablo-limoneux', 'Sableux']
  const irrigTypes = ['Goutte à goutte', 'Aspersion', 'Submersion', 'Non irrigué']
  const rows = [
    ['Culture',      parcel.crop || '—'],
    ['Surface',      parcel.area ? `${parcel.area} ha` : '—'],
    ['Texture sol',  soilTypes[parcel.id % soilTypes.length]],
    ['Irrigation',   irrigTypes[parcel.id % irrigTypes.length]],
    ['Exploitation', org ? org.name : '—'],
  ]
  document.getElementById('panel-ident').innerHTML = rows.map(([k, v]) => `
    <div class="panel-row">
      <span class="panel-row-key">${k}</span>
      <span class="panel-row-val">${v}</span>
    </div>`).join('')
}

function renderLocalisation(org) {
  const city = org?.ville || '—'
  const dept = org?.departement || ''
  document.getElementById('panel-loc').innerHTML = `
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${city}${dept ? ` (${dept})` : ''}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${org?.lat?.toFixed(4) ?? '—'}, ${org?.lng?.toFixed(4) ?? '—'}</span>
    </div>
  `
}

function renderLinkedSensors() {
  const linked = sensors.filter(s => s.parcelId === parcel.id)
  const container = document.getElementById('panel-sensors')

  if (linked.length === 0) {
    container.innerHTML = `<div class="panel-empty">Aucun capteur lié</div>`
    return
  }

  container.innerHTML = linked.map(s => `
    <a href="capteur-detail.html?id=${s.id}" class="sensor-link-row">
      <span class="sensor-link-model">${s.model}</span>
      <span class="sensor-link-serial">${s.serial}</span>
      <span class="sensor-link-status ${s.event ? 'status-warn' : 'status-ok'}">
        <i class="bi ${s.event ? 'bi-exclamation-triangle' : 'bi-check-circle'}"></i>
        ${s.event ? 'Événement' : 'OK'}
      </span>
    </a>
  `).join('')
}

function renderIntegrations() {
  const crop = parcel.crop || ''
  const integ = INTEGRATIONS_BY_CROP[crop] || INTEGRATIONS_BY_CROP['default']
  document.getElementById('panel-integrations').innerHTML = integ.map(name => `
    <div class="integ-pill"><i class="bi bi-plug-fill"></i> ${name}</div>
  `).join('')
}

function renderActions() {
  document.getElementById('panel-actions').innerHTML = `
    <button class="action-btn"><i class="bi bi-star"></i> Ajouter aux favoris</button>
    <button class="action-btn"><i class="bi bi-pencil"></i> Renommer</button>
    <button class="action-btn"><i class="bi bi-download"></i> Exporter les données</button>
    <button class="action-btn action-btn--danger"><i class="bi bi-archive"></i> Archiver la parcelle</button>
  `
}

// ─── Membres associés ─────────────────────────────────────────────────────────

let linkedMemberIds = members.filter(m => m.parcelIds.includes(parcel.id)).map(m => m.id)

function renderPanelMembres() {
  const el     = document.getElementById('panel-membres')
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

  // Populate add select
  const select = document.getElementById('add-membre-select')
  select.innerHTML = '<option value="">Ajouter un membre…</option>'
  members.filter(m => !linkedMemberIds.includes(m.id)).forEach(m => {
    const opt = document.createElement('option')
    opt.value = m.id
    opt.textContent = `${m.prenom} ${m.nom} (${m.role})`
    select.appendChild(opt)
  })

  el.querySelectorAll('.remove-membre-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      linkedMemberIds = linkedMemberIds.filter(x => x !== parseInt(btn.dataset.id))
      renderPanelMembres()
    })
  })

  document.getElementById('add-membre-btn').onclick = () => {
    const id = parseInt(document.getElementById('add-membre-select').value)
    if (!id || linkedMemberIds.includes(id)) return
    linkedMemberIds.push(id)
    renderPanelMembres()
  }
}

// ─── Mini map ─────────────────────────────────────────────────────────────────

function initMiniMap() {
  const org = orgs.find(o => o.id === parcel.orgId)
  if (!org?.lat) return

  const map = L.map('parcel-mini-map', { zoomControl: false, attributionControl: false })
    .setView([org.lat, org.lng], 12)

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Esri'
  }).addTo(map)

  L.circleMarker([org.lat, org.lng], {
    radius: 7, color: 'white', fillColor: 'var(--ok)', fillOpacity: 1, weight: 2
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
