import './styles/main.css'
import { orgs } from './data/orgs.js'
import { plots } from './data/plots.js'
import { sensors } from './data/sensors.js'
import { openExportModal } from './modules/export-modal.js'

let currentRole = 'admin' // 'admin' or 'adherent'
let currentSection = 'exploitation'
let currentView = 'map'
let currentMetric = 'pluie'
let currentAggregate = 'today'
let currentSort = { column: null, direction: 'asc' }
let selectedSensors = []
let selectedParcels = []
let selectedCultures = []
let selectedIrrigations = []
let selectedEtatsHydriques = []
let selectedTextures = []
let selectedIntegrations = []
let map
let markers = []

const pageType = (() => {
  const page = window.location.pathname.split('/').pop()
  if (page === 'parcelles.html' || page === '') return 'parcelles'
  if (page === 'parcelles-reseau.html') return 'parcelles-reseau'
  return ''
})()

const metricAggregates = {
  pluie: [
    { value: 'today', label: "Aujourd'hui" },
    { value: 'yesterday', label: 'Hier' },
    { value: '7jours', label: '7 jours' },
    { value: '30jours', label: '30 jours' },
    { value: '1an', label: '1 an' }
  ],
  temp: [
    { value: 'reel', label: 'Temps réel' },
    { value: 'min-jour', label: 'Min du jour' },
    { value: 'max-jour', label: 'Max du jour' },
    { value: 'moyenne-7', label: 'Moyenne 7 jours' },
    { value: 'moyenne-30', label: 'Moyenne 30 jours' }
  ],
  humidite: [
    { value: 'reel', label: 'Temps réel' },
    { value: 'min-jour', label: 'Min du jour' },
    { value: 'max-jour', label: 'Max du jour' },
    { value: 'moyenne-7', label: 'Moyenne 7 jours' },
    { value: 'moyenne-30', label: 'Moyenne 30 jours' }
  ],
  'etat-hydrique': [
    { value: 'today', label: "Aujourd'hui" },
    { value: 'yesterday', label: 'Hier' },
    { value: '7jours', label: '7 jours' },
    { value: '30jours', label: '30 jours' },
    { value: '1an', label: '1 an' }
  ]
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initNavigation()
  initRoleSwitcher()
  initViewSwitcher()
  initFilters()
  initMap()
  initAddModal()
  initExportButton()
  initSelectionListeners()
  updateContent()
})

// Navigation
function initNavigation() {
  document.querySelectorAll('.nav-section').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSection = btn.dataset.section
      updateNavigation()
      updateFiltersVisibility()
      updateContent()
    })
  })
}

function updateNavigation() {
  document.querySelectorAll('.nav-section').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === currentSection)
  })
}

// Role switcher
function initRoleSwitcher() {
  const switcher = document.getElementById('role-switch')
  switcher.addEventListener('click', () => {
    currentRole = currentRole === 'admin' ? 'adherent' : 'admin'
    switcher.textContent = currentRole === 'admin' ? 'Admin réseau' : 'Adhérent'
    updateFiltersVisibility()
    updateContent()
  })
}

// View switcher
function initViewSwitcher() {
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentView = btn.dataset.view
      updateView()
    })
  })
}

function updateView() {
  document.querySelectorAll('.view').forEach(view => {
    view.classList.toggle('active', view.dataset.view === currentView)
  })
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === currentView)
  })
  const activeView = document.querySelector(`.view[data-view="${currentView}"]`)
  animateView(activeView)
  if (currentView === 'map') {
    setTimeout(() => map.invalidateSize(), 100)
    updateMap()
  }
}

// Filters
function initFilters() {
  document.getElementById('metric-selector').addEventListener('change', (e) => {
    currentMetric = e.target.value
    currentAggregate = metricAggregates[currentMetric]?.[0]?.value || currentAggregate
    updateAggregateOptions()
    updateContent()
  })

  const aggregateSelect = document.getElementById('aggregate-selector')
  if (aggregateSelect) {
    aggregateSelect.addEventListener('change', (e) => {
      currentAggregate = e.target.value
      updateContent()
    })
  }

  // Multi-select dropdowns (culture, texture, état hydrique)
  populateFilterDropdowns()
  initFilterDropdownToggle()

  // Simple selects (org, model, event, telecom)
  const orgFilter = document.getElementById('org-filter')
  if (orgFilter) orgFilter.addEventListener('change', updateContent)
  const modelFilter = document.getElementById('model-filter')
  if (modelFilter) modelFilter.addEventListener('change', updateContent)
  const eventFilter = document.getElementById('event-filter')
  if (eventFilter) eventFilter.addEventListener('change', updateContent)
  const telecomFilter = document.getElementById('telecom-filter')
  if (telecomFilter) telecomFilter.addEventListener('change', updateContent)

  populateOrgFilter()
  updateAggregateOptions()
}

const INTEGRATION_NAMES = [
  'Modèles Arvalis', 'Irrigation Optimisée', 'Soil Moisture Monitor', 'Crop Yield Predictor',
  'Pest Alert System', 'Weather Integration', 'Fertilizer Calculator', 'Drone Mapping',
  'Water Balance Model', 'Disease Forecasting', 'Smart Irrigation Hub', 'Crop Rotation Planner',
  'Nutrient Deficiency Detector', 'Frost Protection', 'Harvest Optimizer', 'Carbon Footprint Tracker'
]

function makeCheckboxPanel(panelId, values, stateRef, badgeId) {
  const panel = document.getElementById(panelId)
  if (!panel) return
  if (values) {
    panel.innerHTML = values.map(v =>
      `<label><input type="checkbox" value="${v}"> ${v}</label>`
    ).join('')
  }
  panel.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(panel.querySelectorAll('input:checked')).map(i => i.value)
      stateRef.set(checked)
      updateBadge(badgeId, checked.length)
      updateContent()
    })
  })
}

function populateFilterDropdowns() {
  const cultures = [...new Set(plots.map(p => p.crop))].sort()
  makeCheckboxPanel('panel-culture', cultures,
    { set: v => { selectedCultures = v } }, 'badge-culture')

  makeCheckboxPanel('panel-irrigation', null,
    { set: v => { selectedIrrigations = v } }, 'badge-irrigation')

  makeCheckboxPanel('panel-etat-hydrique', null,
    { set: v => { selectedEtatsHydriques = v } }, 'badge-etat-hydrique')

  const textures = [...new Set(plots.map(p => p.texture))].sort()
  makeCheckboxPanel('panel-texture', textures,
    { set: v => { selectedTextures = v } }, 'badge-texture')

  makeCheckboxPanel('panel-integration', INTEGRATION_NAMES.sort(),
    { set: v => { selectedIntegrations = v } }, 'badge-integration')
}

function updateBadge(id, count) {
  const badge = document.getElementById(id)
  if (!badge) return
  if (count > 0) {
    badge.textContent = count
    badge.hidden = false
  } else {
    badge.hidden = true
  }
}

function initFilterDropdownToggle() {
  document.querySelectorAll('.filter-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const dropdown = btn.closest('.filter-dropdown')
      const isOpen = dropdown.classList.contains('open')
      // Close all
      document.querySelectorAll('.filter-dropdown.open').forEach(d => d.classList.remove('open'))
      if (!isOpen) dropdown.classList.add('open')
    })
  })
  document.addEventListener('click', () => {
    document.querySelectorAll('.filter-dropdown.open').forEach(d => d.classList.remove('open'))
  })
}

function updateAggregateOptions() {
  const aggregateSelect = document.getElementById('aggregate-selector')
  if (!aggregateSelect) return
  const options = metricAggregates[currentMetric] || []
  aggregateSelect.innerHTML = options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')
  if (!options.some(opt => opt.value === currentAggregate)) {
    currentAggregate = options[0]?.value || ''
  }
  aggregateSelect.value = currentAggregate
}

function updateFiltersVisibility() {
  const networkOnly = document.querySelectorAll('.network-only')
  networkOnly.forEach(el => {
    el.style.display = (currentSection === 'reseau' && (currentRole === 'admin' || currentRole === 'adherent')) ? 'block' : 'none'
  })
  const adminOnly = document.querySelectorAll('.admin-only')
  adminOnly.forEach(el => {
    el.style.display = currentRole === 'admin' ? 'block' : 'none'
  })
}

function populateOrgFilter() {
  const select = document.getElementById('org-filter')
  select.innerHTML = '<option value="">Toutes organisations</option>'
  orgs.forEach(org => {
    const option = document.createElement('option')
    option.value = org.id
    option.textContent = org.name
    select.appendChild(option)
  })
}

function getFilteredData() {
  let filteredParcels = plots
  let filteredSensors = sensors

  // Role-based filtering
  if (currentRole === 'adherent') {
    if (currentSection === 'reseau') {
      const validModels = ['P+', 'P', 'PT', 'T', 'T_MINI', 'SMV']
      filteredSensors = sensors.filter(s => s.orgId !== 1 && validModels.includes(s.model))
      filteredParcels = plots.filter(p => filteredSensors.some(s => s.parcelId === p.id))
    } else {
      filteredParcels = plots.filter(p => p.orgId === 1)
      filteredSensors = sensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
    }
  } else if (currentRole === 'admin' && currentSection === 'reseau') {
    filteredParcels = plots
    filteredSensors = sensors
  } else {
    filteredParcels = plots.filter(p => p.orgId === 1)
    filteredSensors = sensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  // Apply multi-select filters
  if (selectedCultures.length > 0) {
    filteredParcels = filteredParcels.filter(p => selectedCultures.includes(p.crop))
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  if (selectedIrrigations.length > 0) {
    filteredParcels = filteredParcels.filter(p => selectedIrrigations.includes(p.irrigation))
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  if (selectedEtatsHydriques.length > 0) {
    filteredParcels = filteredParcels.filter(p =>
      selectedEtatsHydriques.some(range => {
        if (range === 'rfu-100-50') return p.reserveHydrique >= 50
        if (range === 'rfu-50-20') return p.reserveHydrique >= 20 && p.reserveHydrique < 50
        if (range === 'rfu-20-5') return p.reserveHydrique >= 5 && p.reserveHydrique < 20
        if (range === 'rfu-5-0') return p.reserveHydrique < 5
        return false
      })
    )
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  if (selectedTextures.length > 0) {
    filteredParcels = filteredParcels.filter(p => selectedTextures.includes(p.texture))
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  if (selectedIntegrations.length > 0) {
    filteredParcels = filteredParcels.filter(p =>
      selectedIntegrations.some(integ => (p.integrations || []).includes(integ))
    )
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  const orgEl = document.getElementById('org-filter')
  const org = orgEl ? orgEl.value : ''
  if (org) {
    filteredParcels = filteredParcels.filter(p => p.orgId == org)
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  const modelEl = document.getElementById('model-filter')
  const model = modelEl ? modelEl.value : ''
  if (model) {
    filteredSensors = filteredSensors.filter(s => s.model === model)
  }

  const eventEl = document.getElementById('event-filter')
  const event = eventEl ? eventEl.value : ''
  if (event) {
    filteredSensors = filteredSensors.filter(s => s.event === event)
  }

  const telecomEl = document.getElementById('telecom-filter')
  const telecom = telecomEl ? telecomEl.value : ''
  if (telecom) {
    filteredSensors = filteredSensors.filter(s => s.telecom === telecom)
  }

  updateFilterChips()
  return { parcels: filteredParcels, sensors: filteredSensors }
}

// Update content based on role and section
function updateContent() {
  const breadcrumb = document.getElementById('breadcrumb')
  breadcrumb.textContent = currentRole === 'admin' ? (currentSection === 'reseau' ? 'Admin réseau' : 'Mon exploitation') : 'Mon exploitation'

  const { parcels: filteredParcels, sensors: filteredSensors } = getFilteredData()

  if (currentView === 'map') {
    updateMap(filteredParcels, filteredSensors)
  } else if (currentView === 'list') {
    renderList(filteredParcels, filteredSensors)
  } else if (currentView === 'admin') {
    renderAdmin(filteredParcels, filteredSensors)
  }
}

// Map
function initMap() {
  map = L.map('map-container').setView([48.5, -2.5], 8)

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map)

  map.invalidateSize()

  updateLegend()
}

function updateMap(filteredParcels = plots, filteredSensors = sensors) {
  // Clear existing layers
  markers.forEach(marker => map.removeLayer(marker))
  markers = []

  if (pageType.startsWith('parcelles')) {
    filteredParcels.forEach(parcel => {
      const layer = createParcelLayer(parcel)
      layer.bindTooltip(
        `<strong>${parcel.name}</strong><br>${getMetricTooltipValue(parcel)}<br>Culture: ${parcel.crop}<br>Superficie: ${parcel.area} ha`,
        { sticky: true, direction: 'top', opacity: 0.95 }
      )
      layer.addTo(map)
      markers.push(layer)
    })
  } else {
    filteredParcels.forEach(parcel => {
      const color = getMetricColor(parcel, currentMetric)
      const metricValue = getMetricDisplay(parcel, currentMetric)
      const marker = L.circleMarker([parcel.lat, parcel.lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.8,
        radius: 8
      }).addTo(map)
      marker.bindPopup(`<b><a href="parcelle-detail.html?id=${parcel.id}" style="color: inherit; text-decoration: none;">${parcel.name}</a></b><br>${metricValue}<br>Culture: ${parcel.crop}<br>Superficie: ${parcel.area} ha`)
      markers.push(marker)
    })

    if (currentView === 'map') {
      filteredSensors.forEach(sensor => {
        const parcel = plots.find(p => p.id === sensor.parcelId)
        if (parcel) {
          const color = getSensorColor(sensor, currentMetric)
          const marker = L.marker([parcel.lat, parcel.lng], {
            icon: L.divIcon({
              className: 'sensor-icon',
              html: `<div style="background-color: ${color}; width: 10px; height: 10px; border-radius: 50%;"></div>`,
              iconSize: [10, 10]
            })
          }).addTo(map)
          const metricValue = getSensorMetricDisplay(sensor, currentMetric)
          marker.bindPopup(`<b><a href="capteur-detail.html?id=${sensor.id}" style="color: inherit; text-decoration: none;">${sensor.model} - ${sensor.serial}</a></b><br>${metricValue}<br>Qualité réseau: ${sensor.networkQuality}%<br>Événement: ${sensor.event || 'Aucun'}`)
          markers.push(marker)
        }
      })
    }
  }

  if (markers.length > 0) {
    const group = L.featureGroup(markers)
    if (markers.length === 1 && typeof markers[0].getLatLng === 'function') {
      map.setView(markers[0].getLatLng(), 10)
    } else {
      map.fitBounds(group.getBounds().pad(0.1))
    }
  }

  updateLegend()
}

function createParcelLayer(parcel) {
  const style = {
    color: '#ffffff',
    fillColor: '#ffffff',
    fillOpacity: 0.18,
    weight: 2,
    opacity: 0.9
  }

  if (parcel.latlngs) {
    return L.polygon(parcel.latlngs, style)
  }

  if (parcel.shape?.type === 'circle') {
    return L.circle([parcel.lat, parcel.lng], {
      radius: parcel.shape.radius || 120,
      ...style
    })
  }

  const coords = getShapeLatLngs(parcel)
  return L.polygon(coords, style)
}

function getShapeLatLngs(parcel) {
  const scale = 0.0006
  const lat = parcel.lat
  const lng = parcel.lng
  const shape = parcel.shape || { type: 'circle', radius: 120 }

  if (shape.type === 'rectangle') {
    const halfW = (shape.width || 120) * scale / 2
    const halfH = (shape.height || 120) * scale / 2
    return [
      [lat - halfH, lng - halfW],
      [lat - halfH, lng + halfW],
      [lat + halfH, lng + halfW],
      [lat + halfH, lng - halfW]
    ]
  }

  if (shape.type === 'triangle') {
    const halfBase = (shape.base || 120) * scale / 2
    const height = (shape.height || 120) * scale
    return [
      [lat + height / 2, lng - halfBase],
      [lat + height / 2, lng + halfBase],
      [lat - height / 2, lng]
    ]
  }

  if (shape.type === 'polygon' && Array.isArray(shape.points)) {
    const points = shape.points
    const centerX = points.reduce((sum, p) => sum + p[0], 0) / points.length
    const centerY = points.reduce((sum, p) => sum + p[1], 0) / points.length
    return points.map(([x, y]) => [lat + (centerY - y) * scale, lng + (x - centerX) * scale])
  }

  return [[lat, lng]]
}

function getMetricTooltipValue(parcel) {
  const value = computeMetricValue(parcel, currentMetric, currentAggregate)
  const unit = getMetricUnit(currentMetric)
  return `${getAggregateLabel(currentAggregate)} : ${value} ${unit}`
}

function computeMetricValue(parcel, metric, aggregate) {
  const noise = Math.round((Math.sin(parcel.id * 1.3 + aggregate.length * 2) * 3))
  if (metric === 'pluie') {
    const base = Math.max(3, Math.round(parcel.area * 1.8 + parcel.reserveHydrique / 8))
    switch (aggregate) {
      case 'today': return Math.max(0, base + noise - 2)
      case 'yesterday': return Math.max(0, base + noise - 1)
      case '7jours': return Math.max(0, base * 3 + noise * 2)
      case '30jours': return Math.max(0, base * 12 + noise * 3)
      case '1an': return Math.max(0, base * 45 + noise * 4)
      default: return base
    }
  }

  if (metric === 'temp') {
    const base = 10 + parcel.degresJour / 140
    switch (aggregate) {
      case 'reel': return Math.round(base + noise * 0.4)
      case 'min-jour': return Math.round(base - 4 + noise * 0.1)
      case 'max-jour': return Math.round(base + 5 + noise * 0.4)
      case 'moyenne-7': return Math.round(base + 1 + noise * 0.2)
      case 'moyenne-30': return Math.round(base + 0.4 + noise * 0.2)
      default: return Math.round(base)
    }
  }

  if (metric === 'humidite') {
    const base = Math.min(100, Math.max(20, parcel.reserveHydrique + 15))
    switch (aggregate) {
      case 'reel': return Math.min(100, Math.max(20, base + noise))
      case 'min-jour': return Math.max(10, Math.min(100, base - 20 + noise))
      case 'max-jour': return Math.min(100, base + 15 + noise)
      case 'moyenne-7': return Math.min(100, Math.max(20, base - 5 + noise * 0.2))
      case 'moyenne-30': return Math.min(100, Math.max(20, base - 2 + noise * 0.1))
      default: return base
    }
  }

  if (metric === 'etat-hydrique') {
    const base = Math.round(parcel.reserveHydrique * 2.6)
    switch (aggregate) {
      case 'today': return Math.max(0, base + noise)
      case 'yesterday': return Math.max(0, base + noise - 3)
      case '7jours': return Math.max(0, base * 2 + noise * 2)
      case '30jours': return Math.max(0, base * 8 + noise * 3)
      case '1an': return Math.max(0, base * 40 + noise * 5)
      default: return base
    }
  }

  if (metric === 'ru') {
    return parcel.reserveHydrique
  }

  return parcel.reserveHydrique
}

function getAggregateLabel(aggregate) {
  const labels = {
    today: "Aujourd'hui",
    yesterday: 'Hier',
    '7jours': '7 jours',
    '30jours': '30 jours',
    '1an': '1 an',
    reel: 'Temps réel',
    'min-jour': 'Min du jour',
    'max-jour': 'Max du jour',
    'moyenne-7': 'Moyenne 7 jours',
    'moyenne-30': 'Moyenne 30 jours'
  }
  return labels[aggregate] || aggregate
}

function getMetricUnit(metric) {
  if (metric === 'pluie') return 'mm'
  if (metric === 'temp') return '°C'
  if (metric === 'humidite') return '%'
  if (metric === 'etat-hydrique') return 'mm'
  if (metric === 'ru') return '%'
  return '%'
}

function getMetricColor(parcel, metric) {
  if (metric === 'pluie') {
    const value = computeMetricValue(parcel, metric, currentAggregate)
    if (value < 8) return '#74b9ff'
    if (value < 18) return '#0984e3'
    return '#0652DD'
  }

  if (metric === 'temp') {
    const value = computeMetricValue(parcel, metric, currentAggregate)
    if (value < 12) return '#0984e3'
    if (value < 18) return '#f39c12'
    return '#e74c3c'
  }

  if (metric === 'humidite') {
    const value = computeMetricValue(parcel, metric, currentAggregate)
    if (value < 40) return '#e74c3c'
    if (value < 70) return '#f1c40f'
    return '#24B066'
  }

  if (metric === 'etat-hydrique') {
    const value = computeMetricValue(parcel, metric, currentAggregate)
    if (value < 100) return '#e74c3c'
    if (value < 180) return '#f39c12'
    return '#24B066'
  }

  if (metric === 'ru') {
    if (parcel.reserveHydrique < 30) return '#E05252'
    if (parcel.reserveHydrique < 60) return '#FBAF05'
    return '#24B066'
  }

  return '#0172A4'
}

function getSensorColor(sensor, metric) {
  return sensor.event ? '#E05252' : '#24B066'
}

function getMetricDisplay(parcel, metric) {
  if (metric === 'ru') return `Réserve utile: ${parcel.reserveHydrique}%`
  if (metric === 'temp') return `Température estimée: ${Math.floor(12 + parcel.degresJour / 20)}°C`
  if (metric === 'pluie') return `Pluie estimée: ${Math.floor(parcel.reserveHydrique / 10)} mm`
  if (metric === 'humidite') return `Humidité estimée: ${Math.min(100, parcel.reserveHydrique + 15)}%`
  if (metric === 'etat-hydrique') return `État hydrique: ${Math.round(parcel.reserveHydrique * 2.6)} mm`
  return `Valeur: ${parcel.reserveHydrique}%`
}

function getSensorMetricDisplay(sensor, metric) {
  if (metric === 'temp') return `Température: ${Math.floor(Math.random() * 15 + 10)}°C`
  if (metric === 'ru') return `Qualité: ${sensor.networkQuality}%`
  if (metric === 'pluie') return `Pluie: ${Math.floor(Math.random() * 6)} mm`
  return `Qualité réseau: ${sensor.networkQuality}%`
}

function updateLegend() {
  const legend = document.getElementById('legend')
  if (!legend || pageType.startsWith('parcelles')) return
  legend.innerHTML = `
    <div><div class="color-box" style="background-color: #24B066;"></div>Bon</div>
    <div><div class="color-box" style="background-color: #FBAF05;"></div>Moyen</div>
    <div><div class="color-box" style="background-color: #E05252;"></div>Faible</div>
  `
}

function animateView(element) {
  if (!element) return
  element.classList.add('fade-up')
  setTimeout(() => element.classList.remove('fade-up'), 300)
}

// List view
function renderList(filteredParcels, filteredSensors) {
  const container = document.getElementById('list-container')
  container.innerHTML = ''

  if (pageType.startsWith('parcelles')) {
    if (filteredParcels.length > 0) {
      container.innerHTML = createParcelMetricTable(filteredParcels)
    } else {
      container.innerHTML = '<p class="empty-state">Aucune parcelle ne correspond aux filtres sélectionnés.</p>'
    }
  } else {
    if (filteredSensors.length > 0) {
      container.innerHTML += createSensorTable(filteredSensors)
    }
    if (filteredParcels.length > 0) {
      container.innerHTML += createParcelMetricTable(filteredParcels)
    }
  }

  animateView(container)
}

function createSensorTable(sensors) {
  let html = '<table id="sensor-table"><thead><tr>'
  html += '<th></th>'
  html += '<th data-column="model">Modèle</th>'
  html += '<th data-column="serial">N° série + Ville</th>'
  html += '<th data-column="telecom">Télécom</th>'
  html += '<th data-column="lastMessage">Dernier message</th>'
  html += '<th data-column="networkQuality">Qualité réseau %</th>'
  html += '<th data-column="messages7d">Messages 7j %</th>'
  html += '<th data-column="org">Organisation</th>'
  html += '<th data-column="event">Événement</th>'
  html += '</tr></thead><tbody>'

  sensors.forEach(sensor => {
    const parcel = plots.find(p => p.id === sensor.parcelId)
    const org = parcel ? orgs.find(o => o.id === parcel.orgId) : null
    html += `<tr>
      <td><input type="checkbox" data-type="sensor" data-id="${sensor.id}" /></td>
      <td><a href="capteur-detail.html?id=${sensor.id}">${sensor.model}</a></td>
      <td>${sensor.serial}${org ? ' — ' + org.ville : ''}</td>
      <td>${sensor.telecom}</td>
      <td>${new Date(sensor.lastMessage).toLocaleDateString()}</td>
      <td>${sensor.networkQuality}</td>
      <td>${sensor.messages7d}</td>
      <td>${org ? org.name : '—'}</td>
      <td>${sensor.event || ''}</td>
    </tr>`
  })
  html += '</tbody></table>'
  return html
}

// Sorting
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH' && e.target.dataset.column) {
    const tableId = e.target.closest('table').id
    const column = e.target.dataset.column
    if (currentSort.column === column) {
      currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc'
    } else {
      currentSort.column = column
      currentSort.direction = 'asc'
    }
    sortTable(tableId, column, currentSort.direction)
  }
})

function sortTable(tableId, column, direction) {
  const table = document.getElementById(tableId)
  const tbody = table.querySelector('tbody')
  const rows = Array.from(tbody.querySelectorAll('tr'))

  rows.sort((a, b) => {
    const aVal = a.children[Array.from(table.querySelectorAll('th')).findIndex(th => th.dataset.column === column)].textContent.trim()
    const bVal = b.children[Array.from(table.querySelectorAll('th')).findIndex(th => th.dataset.column === column)].textContent.trim()
    if (direction === 'asc') {
      return aVal.localeCompare(bVal)
    } else {
      return bVal.localeCompare(aVal)
    }
  })

  rows.forEach(row => tbody.appendChild(row))

  // Update sort indicators
  table.querySelectorAll('th').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc')
    if (th.dataset.column === column) {
      th.classList.add(`sort-${direction}`)
    }
  })
}

// Admin view
function renderAdmin(filteredParcels, filteredSensors) {
  const container = document.getElementById('admin-container')
  container.innerHTML = ''

  if (pageType.startsWith('parcelles')) {
    // Parcel-specific stats
    const totalArea = filteredParcels.reduce((s, p) => s + p.area, 0)
    const withSensors = filteredParcels.filter(p => sensors.some(s => s.parcelId === p.id)).length
    const withoutSensors = filteredParcels.length - withSensors

    container.innerHTML += `
      <div id="stats-cards">
        <div class="stat-card"><div class="stat-label">Parcelles</div><div class="stat-value">${filteredParcels.length}</div></div>
        <div class="stat-card"><div class="stat-label">Surface totale</div><div class="stat-value">${totalArea.toFixed(1)} ha</div></div>
        <div class="stat-card"><div class="stat-label">Avec capteur</div><div class="stat-value">${withSensors}</div></div>
        <div class="stat-card warn"><div class="stat-label">Sans capteur</div><div class="stat-value">${withoutSensors}</div></div>
      </div>
    `
    container.innerHTML += createParcelAdminTable(filteredParcels)
    initParcelAdminTable(container)
  } else {
    // Sensor-specific stats
    const totalSensors = filteredSensors.length
    const sensorsWithEvent = filteredSensors.filter(s => s.event).length
    const avgNetworkQuality = filteredSensors.reduce((sum, s) => sum + s.networkQuality, 0) / (totalSensors || 1)

    container.innerHTML += `
      <div id="stats-cards">
        <div class="stat-card"><div class="stat-label">Capteurs actifs</div><div class="stat-value">${totalSensors}</div></div>
        <div class="stat-card warn"><div class="stat-label">Avec événement</div><div class="stat-value">${sensorsWithEvent}</div></div>
        <div class="stat-card"><div class="stat-label">Qualité réseau moy.</div><div class="stat-value">${avgNetworkQuality.toFixed(1)} %</div></div>
      </div>
    `
    container.innerHTML += createAdminTable(filteredSensors)
  }

  animateView(container)
}

function initAddModal() {
  const addBtn = document.getElementById('add-btn')
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const modal = document.createElement('div')
      modal.className = 'modal'
      modal.innerHTML = `
        <div class="modal-content">
          <h2>Ajouter</h2>
          <button data-action="capteur">Capteur</button>
          <button data-action="station">Station météo virtuelle</button>
          <button data-action="parcelle">Parcelle</button>
          <button data-action="membre">Membre</button>
          <button data-action="adherent" class="admin-only">Adhérent</button>
          <button data-action="alerte">Alerte</button>
          <button onclick="this.closest('.modal').remove()">Annuler</button>
        </div>
      `
      document.body.appendChild(modal)
      modal.querySelectorAll('button[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
          console.log('Add', btn.dataset.action)
          modal.remove()
        })
      })
    })
  }
}

function initExportButton() {
  const exportBtn = document.getElementById('export-btn')
  if (!exportBtn) return
  exportBtn.addEventListener('click', () => {
    const { parcels: filteredParcels, sensors: filteredSensors } = getFilteredData()
    const isList = currentView === 'list'
    const selectedSensorItems = selectedSensors.length > 0
      ? filteredSensors.filter(sensor => selectedSensors.includes(sensor.id))
      : filteredSensors
    const selectedParcelItems = selectedParcels.length > 0
      ? filteredParcels.filter(parcel => selectedParcels.includes(parcel.id))
      : filteredParcels

    const items = isList
      ? [
        ...selectedSensorItems.map(sensor => ({ id: sensor.id, label: `${sensor.model} ${sensor.serial}`, selected: true })),
        ...selectedParcelItems.map(parcel => ({ id: `p-${parcel.id}`, label: parcel.name, selected: true }))
      ]
      : []

    openExportModal({
      title: isList ? 'Exporter des données sélectionnées' : 'Exporter des données',
      contextLabel: isList ? 'Liste de sélection' : 'Réseau',
      items,
      type: isList ? 'sensor' : 'sensor',
      availableMeasures: [
        { id: 'pluie', label: 'Pluie' },
        { id: 'temperature', label: 'Température' },
        { id: 'humidite', label: 'Humidité' },
        { id: 'vent', label: 'Vent' },
        { id: 'etp', label: 'ETP' },
        { id: 'rayonnement', label: 'Rayonnement' }
      ]
    })
  })
}

function initSelectionListeners() {
  document.getElementById('list-container').addEventListener('change', (e) => {
    const checkbox = e.target
    if (checkbox.tagName !== 'INPUT' || checkbox.type !== 'checkbox') return
    const type = checkbox.dataset.type
    const id = Number(checkbox.dataset.id)
    if (type === 'sensor') {
      if (checkbox.checked) {
        if (!selectedSensors.includes(id)) selectedSensors.push(id)
      } else {
        selectedSensors = selectedSensors.filter(item => item !== id)
      }
    }
    if (type === 'parcel') {
      if (checkbox.checked) {
        if (!selectedParcels.includes(id)) selectedParcels.push(id)
      } else {
        selectedParcels = selectedParcels.filter(item => item !== id)
      }
    }
  })
}

function updateFilterChips() {
  // Les badges sur les boutons sont suffisants — pas de chips textuelles
}

function createAdminTable(sensors) {
  let html = '<table id="admin-sensor-table"><thead><tr>'
  html += '<th data-column="model">Modèle</th>'
  html += '<th data-column="serial">N° série</th>'
  html += '<th data-column="telecom">Télécom</th>'
  html += '<th data-column="lastMessage">Dernier message</th>'
  html += '<th data-column="networkQuality">Qualité réseau</th>'
  html += '<th data-column="event">Événement</th>'
  html += '</tr></thead><tbody>'

  sensors.forEach(sensor => {
    html += `<tr>
      <td>${sensor.model}</td>
      <td>${sensor.serial}</td>
      <td>${sensor.telecom}</td>
      <td>${new Date(sensor.lastMessage).toLocaleDateString()}</td>
      <td>${sensor.networkQuality}%</td>
      <td>${sensor.event || 'Aucun'}</td>
    </tr>`
  })

  html += '</tbody></table>'
  return html
}

/// ── Vue liste parcelles ───────────────────────────────────────────────────────
function createParcelMetricTable(parcels) {
  const aggregates = metricAggregates[currentMetric] || []
  const unit = getMetricUnit(currentMetric)
  const metricLabel = { pluie: 'Pluie', temp: 'Température', humidite: 'Humidité', 'etat-hydrique': 'État hydrique' }[currentMetric] || currentMetric

  let html = '<table id="parcel-table"><thead><tr>'
  html += '<th><input type="checkbox" id="check-all-list"></th>'
  html += '<th data-column="name">Parcelle</th>'
  html += '<th data-column="crop">Culture</th>'
  html += '<th data-column="area">Surface</th>'
  html += '<th data-column="texture">Texture</th>'
  html += '<th data-column="irrigation">Irrigation</th>'
  html += '<th data-column="sensors">Capteurs</th>'
  html += '<th data-column="integrations">Intégrations</th>'
  // Colonnes métriques — une par agrégat, celle active en surbrillance
  aggregates.forEach(agg => {
    const isActive = agg.value === currentAggregate
    html += `<th data-column="agg-${agg.value}" class="${isActive ? 'col-active-header' : ''}">${metricLabel}<br><small>${agg.label}</small></th>`
  })
  html += '</tr></thead><tbody>'

  parcels.forEach(parcel => {
    const sensorCount = sensors.filter(s => s.parcelId === parcel.id).length
    const integList = (parcel.integrations || [])
    const integHtml = integList.length
      ? integList.map(i => `<span class="tag">${i}</span>`).join(' ')
      : '<span class="tag-none">—</span>'
    const irrigation = parcel.irrigation || '—'
    const irrigationClass = irrigation === "Pas d'irrigation" ? 'tag-none' : 'tag tag-irrigation'

    html += `<tr class="clickable-row" data-href="parcelle-detail.html?id=${parcel.id}">`
    html += `<td onclick="event.stopPropagation()"><input type="checkbox" data-type="parcel" data-id="${parcel.id}"></td>`
    html += `<td><a href="parcelle-detail.html?id=${parcel.id}" class="row-link">${parcel.name}</a></td>`
    html += `<td>${parcel.crop}</td>`
    html += `<td class="num">${parcel.area} ha</td>`
    html += `<td>${parcel.texture}</td>`
    html += `<td><span class="${irrigationClass}">${irrigation}</span></td>`
    html += `<td class="num">${sensorCount > 0 ? sensorCount : '<span class="warn-text">0</span>'}</td>`
    html += `<td class="integrations-cell">${integHtml}</td>`
    aggregates.forEach(agg => {
      const val = computeMetricValue(parcel, currentMetric, agg.value)
      const isActive = agg.value === currentAggregate
      html += `<td class="num${isActive ? ' col-active' : ''}">${val} ${unit}</td>`
    })
    html += '</tr>'
  })

  html += '</tbody></table>'

  setTimeout(() => {
    document.querySelectorAll('#parcel-table .clickable-row').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'A') return
        window.location.href = row.dataset.href
      })
    })
    const checkAll = document.getElementById('check-all-list')
    if (checkAll) {
      checkAll.addEventListener('change', () => {
        document.querySelectorAll('#parcel-table input[type=checkbox][data-type=parcel]').forEach(cb => {
          cb.checked = checkAll.checked
        })
      })
    }
  }, 0)

  return html
}

// ── Vue admin parcelles : info + modification ────────────────────────────────
function createParcelAdminTable(parcels) {
  const crops = [...new Set(plots.map(p => p.crop))].sort()
  const textures = [...new Set(plots.map(p => p.texture))].sort()

  let html = `
    <div id="bulk-bar" class="bulk-bar hidden">
      <span id="bulk-count"></span>
      <button class="btn-secondary" id="bulk-crop-btn">Modifier la culture</button>
      <button class="btn-secondary" id="bulk-texture-btn">Modifier la texture de sol</button>
    </div>
  `

  html += '<table id="parcel-admin-table"><thead><tr>'
  html += '<th><input type="checkbox" id="check-all-admin"></th>'
  html += '<th data-column="name">Parcelle</th>'
  html += '<th data-column="crop">Culture</th>'
  html += '<th data-column="area">Surface (ha)</th>'
  html += '<th data-column="texture">Texture de sol</th>'
  html += '<th data-column="reserveHydrique">RU (%)</th>'
  html += '<th data-column="degresJour">Degrés-jour</th>'
  html += '<th data-column="sensors">Capteurs liés</th>'
  html += '<th></th>'
  html += '</tr></thead><tbody>'

  parcels.forEach(parcel => {
    const sensorCount = sensors.filter(s => s.parcelId === parcel.id).length
    html += `<tr>
      <td><input type="checkbox" class="parcel-admin-check" data-id="${parcel.id}"></td>
      <td><a href="parcelle-detail.html?id=${parcel.id}">${parcel.name}</a></td>
      <td>
        <select class="inline-edit" data-field="crop" data-id="${parcel.id}">
          ${crops.map(c => `<option value="${c}"${c === parcel.crop ? ' selected' : ''}>${c}</option>`).join('')}
        </select>
      </td>
      <td>${parcel.area}</td>
      <td>
        <select class="inline-edit" data-field="texture" data-id="${parcel.id}">
          ${textures.map(t => `<option value="${t}"${t === parcel.texture ? ' selected' : ''}>${t}</option>`).join('')}
        </select>
      </td>
      <td>
        <input type="number" class="inline-edit" data-field="reserveHydrique" data-id="${parcel.id}"
          value="${parcel.reserveHydrique}" min="0" max="100" style="width:60px">
      </td>
      <td>
        <input type="number" class="inline-edit" data-field="degresJour" data-id="${parcel.id}"
          value="${parcel.degresJour}" min="0" style="width:70px">
      </td>
      <td>${sensorCount}</td>
      <td>
        <button class="btn-save hidden" data-id="${parcel.id}" title="Enregistrer">
          <i class="bi bi-check-lg"></i>
        </button>
      </td>
    </tr>`
  })

  html += '</tbody></table>'
  return html
}

function initParcelAdminTable(container) {
  // Inline edits → show save button
  container.querySelectorAll('.inline-edit').forEach(input => {
    input.addEventListener('change', () => {
      const id = input.dataset.id
      const saveBtn = container.querySelector(`.btn-save[data-id="${id}"]`)
      if (saveBtn) saveBtn.classList.remove('hidden')
    })
  })

  // Save button → update plot in memory
  container.querySelectorAll('.btn-save').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id)
      const plot = plots.find(p => p.id === id)
      if (!plot) return
      container.querySelectorAll(`.inline-edit[data-id="${id}"]`).forEach(input => {
        const val = input.type === 'number' ? Number(input.value) : input.value
        plot[input.dataset.field] = val
      })
      btn.classList.add('hidden')
      btn.textContent = ''
      btn.innerHTML = '<i class="bi bi-check-lg"></i>'
    })
  })

  // Select all checkbox
  const checkAll = container.querySelector('#check-all-admin')
  if (checkAll) {
    checkAll.addEventListener('change', () => {
      container.querySelectorAll('.parcel-admin-check').forEach(cb => { cb.checked = checkAll.checked })
      updateBulkBar(container)
    })
  }

  // Individual checkboxes
  container.querySelectorAll('.parcel-admin-check').forEach(cb => {
    cb.addEventListener('change', () => updateBulkBar(container))
  })

  // Bulk actions
  const bulkCropBtn = container.querySelector('#bulk-crop-btn')
  if (bulkCropBtn) {
    bulkCropBtn.addEventListener('click', () => {
      const checked = getCheckedAdminIds(container)
      if (!checked.length) return
      const crops = [...new Set(plots.map(p => p.crop))].sort()
      const val = prompt(`Nouvelle culture pour ${checked.length} parcelle(s) :\n${crops.join(', ')}`)
      if (val && crops.includes(val)) {
        checked.forEach(id => {
          const plot = plots.find(p => p.id === id)
          if (plot) plot.crop = val
        })
        const { parcels } = getFilteredData()
        container.innerHTML = ''
        container.innerHTML = createParcelAdminTable(parcels)
        initParcelAdminTable(container)
      }
    })
  }

  const bulkTextureBtn = container.querySelector('#bulk-texture-btn')
  if (bulkTextureBtn) {
    bulkTextureBtn.addEventListener('click', () => {
      const checked = getCheckedAdminIds(container)
      if (!checked.length) return
      const textures = [...new Set(plots.map(p => p.texture))].sort()
      const val = prompt(`Nouvelle texture pour ${checked.length} parcelle(s) :\n${textures.join(', ')}`)
      if (val && textures.includes(val)) {
        checked.forEach(id => {
          const plot = plots.find(p => p.id === id)
          if (plot) plot.texture = val
        })
        const { parcels } = getFilteredData()
        container.innerHTML = ''
        container.innerHTML = createParcelAdminTable(parcels)
        initParcelAdminTable(container)
      }
    })
  }
}

function getCheckedAdminIds(container) {
  return Array.from(container.querySelectorAll('.parcel-admin-check:checked')).map(cb => Number(cb.dataset.id))
}

function updateBulkBar(container) {
  const checked = getCheckedAdminIds(container)
  const bar = container.querySelector('#bulk-bar')
  const countEl = container.querySelector('#bulk-count')
  if (!bar) return
  if (checked.length > 0) {
    bar.classList.remove('hidden')
    countEl.textContent = `${checked.length} parcelle${checked.length > 1 ? 's' : ''} sélectionnée${checked.length > 1 ? 's' : ''}`
  } else {
    bar.classList.add('hidden')
  }
}
