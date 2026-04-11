import './styles/main.css'
import { orgs } from './data/orgs.js'
import { parcels } from './data/parcels.js'
import { sensors } from './data/sensors.js'
import { openExportModal } from './modules/export-modal.js'

let currentRole = 'admin' // 'admin' or 'adherent'
let currentSection = 'exploitation'
let currentView = 'map'
let currentMetric = 'pluie'
let currentSort = { column: null, direction: 'asc' }
let selectedSensors = []
let map
let markers = []

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
  const switcher = document.getElementById('role-switcher')
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
    updateContent()
  })
  document.getElementById('culture-filter').addEventListener('change', updateContent)
  document.getElementById('texture-filter').addEventListener('change', updateContent)
  document.getElementById('etat-hydrique-filter').addEventListener('change', updateContent)
  document.getElementById('org-filter').addEventListener('change', updateContent)
  document.getElementById('model-filter').addEventListener('change', updateContent)
  document.getElementById('event-filter').addEventListener('change', updateContent)
  document.getElementById('telecom-filter').addEventListener('change', updateContent)
  populateOrgFilter()
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
  let filteredParcels = parcels
  let filteredSensors = sensors

  // Role-based filtering
  if (currentRole === 'adherent') {
    if (currentSection === 'reseau') {
      const validModels = ['P+', 'P', 'PT', 'T', 'T_MINI', 'SMV']
      filteredSensors = sensors.filter(s => s.orgId !== 1 && validModels.includes(s.model))
      filteredParcels = parcels.filter(p => filteredSensors.some(s => s.parcelId === p.id))
    } else {
      filteredParcels = parcels.filter(p => p.orgId === 1)
      filteredSensors = sensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
    }
  } else if (currentRole === 'admin' && currentSection === 'reseau') {
    filteredParcels = parcels
    filteredSensors = sensors
  } else {
    filteredParcels = parcels.filter(p => p.orgId === 1)
    filteredSensors = sensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  // Apply filters
  const culture = document.getElementById('culture-filter').value
  if (culture) {
    filteredParcels = filteredParcels.filter(p => p.crop === culture)
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  const texture = document.getElementById('texture-filter').value
  if (texture) {
    filteredParcels = filteredParcels.filter(p => p.texture === texture)
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  const etatHydrique = document.getElementById('etat-hydrique-filter').value
  if (etatHydrique) {
    let min, max
    if (etatHydrique === 'faible') { min = 0; max = 50 }
    else if (etatHydrique === 'moyen') { min = 50; max = 75 }
    else { min = 75; max = 100 }
    filteredParcels = filteredParcels.filter(p => p.reserveHydrique >= min && p.reserveHydrique <= max)
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  const org = document.getElementById('org-filter').value
  if (org) {
    filteredParcels = filteredParcels.filter(p => p.orgId == org)
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  const model = document.getElementById('model-filter').value
  if (model) {
    filteredSensors = filteredSensors.filter(s => s.model === model)
  }

  const event = document.getElementById('event-filter').value
  if (event) {
    filteredSensors = filteredSensors.filter(s => s.event === event)
  }

  const telecom = document.getElementById('telecom-filter').value
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

  updateLegend()
}

function updateMap(filteredParcels = parcels, filteredSensors = sensors) {
  // Clear existing markers
  markers.forEach(marker => map.removeLayer(marker))
  markers = []

  // Add parcel markers
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

  // Add sensor markers if in sensor view
  if (currentView === 'map') {
    filteredSensors.forEach(sensor => {
      const parcel = parcels.find(p => p.id === sensor.parcelId)
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

  if (markers.length > 0) {
    const group = L.featureGroup(markers)
    if (markers.length === 1) {
      map.setView(markers[0].getLatLng(), 10)
    } else {
      map.fitBounds(group.getBounds().pad(0.1))
    }
  }

  updateLegend()
}

function getMetricColor(parcel, metric) {
  if (metric === 'ru') {
    if (parcel.reserveHydrique < 30) return '#E05252'
    if (parcel.reserveHydrique < 60) return '#FBAF05'
    return '#24B066'
  }
  // Default for pluie, etc.
  return '#0172A4'
}

function getSensorColor(sensor, metric) {
  return sensor.event ? '#E05252' : '#24B066'
}

function getMetricDisplay(parcel, metric) {
  if (metric === 'ru') return `Réserve utile: ${parcel.reserveHydrique}%`
  if (metric === 'temp') return `Température estimée: ${Math.floor(12 + parcel.degresJour / 20)}°C`
  if (metric === 'pluie') return `Pluie estimée: ${Math.floor(parcel.reserveHydrique / 10)} mm`
  return `Valeur: ${parcel.reserveHydrique}%`
}

function getSensorMetricDisplay(sensor, metric) {
  if (metric === 'temp') return `Température: ${Math.floor(Math.random() * 15 + 10)}°C`
  if (metric === 'ru') return `Qualité: ${sensor.networkQuality}%`
  if (metric === 'pluie') return `Pluie: ${Math.floor(Math.random() * 6)} mm`
  return `Qualité réseau: ${sensor.networkQuality}%`
}

function animateView(element) {
  if (!element) return
  element.classList.add('fade-up')
  setTimeout(() => element.classList.remove('fade-up'), 300)
}

function updateLegend() {
  const legend = document.getElementById('legend')
  legend.innerHTML = `
    <div><div class="color-box" style="background-color: #24B066;"></div>Bon</div>
    <div><div class="color-box" style="background-color: #FBAF05;"></div>Moyen</div>
    <div><div class="color-box" style="background-color: #E05252;"></div>Faible</div>
  `
}

// List view
function renderList(filteredParcels, filteredSensors) {
  const container = document.getElementById('list-container')
  container.innerHTML = ''

  if (filteredSensors.length > 0) {
    container.innerHTML += '<h2>Capteurs</h2>' + createSensorTable(filteredSensors)
  }
  if (filteredParcels.length > 0) {
    container.innerHTML += '<h2>Parcelles</h2>' + createParcelTable(filteredParcels)
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
    const parcel = parcels.find(p => p.id === sensor.parcelId)
    const org = orgs.find(o => o.id === parcel.orgId)
    html += `<tr>
      <td><input type="checkbox" data-type="sensor" data-id="${sensor.id}" /></td>
      <td><a href="capteur-detail.html?id=${sensor.id}">${sensor.model}</a></td>
      <td>${sensor.serial} - ${org.ville}</td>
      <td>${sensor.telecom}</td>
      <td>${new Date(sensor.lastMessage).toLocaleDateString()}</td>
      <td>${sensor.networkQuality}</td>
      <td>${sensor.messages7d}</td>
      <td>${org.name}</td>
      <td>${sensor.event || ''}</td>
    </tr>`
  })
  html += '</tbody></table>'
  return html
}

function createParcelTable(parcels) {
  let html = '<table id="parcel-table"><thead><tr>'
  html += '<th></th>'
  html += '<th data-column="name">Nom</th>'
  html += '<th data-column="crop">Culture</th>'
  html += '<th data-column="area">Surface</th>'
  html += '<th data-column="reserveHydrique">Réserve hydrique</th>'
  html += '<th data-column="degresJour">Degrés-jour</th>'
  html += '<th data-column="sensors">Capteurs liés</th>'
  html += '<th data-column="texture">Texture</th>'
  html += '</tr></thead><tbody>'

  parcels.forEach(parcel => {
    const sensorCount = sensors.filter(s => s.parcelId === parcel.id).length
    html += `<tr>
      <td><input type="checkbox" data-type="parcel" data-id="${parcel.id}" /></td>
      <td><a href="parcelle-detail.html?id=${parcel.id}">${parcel.name}</a></td>
      <td>${parcel.crop}</td>
      <td>${parcel.area} ha</td>
      <td><div class="progress-bar"><div class="progress-fill" style="width: ${parcel.reserveHydrique}%"></div></div> ${parcel.reserveHydrique}%</td>
      <td>${parcel.degresJour}</td>
      <td>${sensorCount}</td>
      <td>${parcel.texture}</td>
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

  // Stats cards
  const totalSensors = filteredSensors.length
  const sensorsWithEvent = filteredSensors.filter(s => s.event).length
  const avgNetworkQuality = filteredSensors.reduce((sum, s) => sum + s.networkQuality, 0) / totalSensors || 0

  container.innerHTML += `
    <div id="stats-cards">
      <div class="stat-card">
        <h3>Capteurs actifs</h3>
        <div class="value">${totalSensors}</div>
      </div>
      <div class="stat-card">
        <h3>Capteurs avec événement</h3>
        <div class="value">${sensorsWithEvent}</div>
      </div>
      <div class="stat-card">
        <h3>Qualité réseau moyenne</h3>
        <div class="value">${avgNetworkQuality.toFixed(1)}%</div>
      </div>
    </div>
  `

  // Admin table
  container.innerHTML += '<h2>Capteurs</h2>' + createAdminTable(filteredSensors)
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
  const container = document.getElementById('active-filters')
  if (!container) return
  container.innerHTML = ''
  const filters = [
    { id: 'culture-filter', label: 'Culture' },
    { id: 'texture-filter', label: 'Texture' },
    { id: 'etat-hydrique-filter', label: 'État hydrique' },
    { id: 'org-filter', label: 'Organisation' },
    { id: 'model-filter', label: 'Modèle' },
    { id: 'event-filter', label: 'Événement' },
    { id: 'telecom-filter', label: 'Télécom' }
  ]
  filters.forEach(filter => {
    const select = document.getElementById(filter.id)
    if (select && select.value) {
      const chip = document.createElement('span')
      chip.className = 'filter-chip'
      chip.textContent = `${filter.label}: ${select.selectedOptions[0]?.textContent || select.value}`
      chip.addEventListener('click', () => {
        select.value = ''
        updateContent()
      })
      container.appendChild(chip)
    }
  })
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
