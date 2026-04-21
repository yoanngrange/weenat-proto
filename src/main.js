import './styles/main.css'
import { orgs } from './data/orgs.js'
import { plots } from './data/plots.js'
import { sensors } from './data/sensors.js'
import { members } from './data/members.js'
import { openExportModal } from './modules/export-modal.js'

let currentRole = 'admin' // 'admin' or 'adherent'
const ADHERENT_ORG_ID = 1
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
let selectedModels = []
let selectedEvents = []
let selectedTelecoms = []
let selectedOrgs = []
let selectedVilles = []
let filterMonSecteur = false
let filterMonFavoris = false

const MON_SECTEUR_DEPTS = new Set(["Ille-et-Vilaine", "Morbihan", "Côtes-d'Armor"])

const favoritePlotIds   = new Set(JSON.parse(localStorage.getItem('favPlots')   || '[1,3,5,8,12]'))
const favoriteSensorIds = new Set(JSON.parse(localStorage.getItem('favSensors') || '[1,4,7,10]'))
function saveFavorites() {
  localStorage.setItem('favPlots',   JSON.stringify([...favoritePlotIds]))
  localStorage.setItem('favSensors', JSON.stringify([...favoriteSensorIds]))
}
let map
let markers = []

const pageType = (() => {
  const page = window.location.pathname.split('/').pop()
  if (page === 'parcelles.html' || page === '') return 'parcelles'
  if (page === 'parcelles-reseau.html') return 'parcelles-reseau'
  return ''
})()

// Mapping modèle → métriques disponibles (commun capteurs et parcelles)
const MODEL_METRICS = {
  'P':         ['pluie'],
  'PT':        ['pluie', 'temp', 'humidite'],
  'P+':        ['pluie', 'temp', 'humidite'],
  'TH':        ['temp', 'humidite'],
  'T_MINI':    ['temp-sol'],
  'T_GEL':     ['temp-seche', 'temp-humide'],
  'W':         ['vent'],
  'PYRANO':    ['rayonnement'],
  'PAR':       ['rayonnement'],
  'LWS':       ['intensite-humectation', 'duree-humectation'],
  'CHP-15/30': ['potentiel-hydrique', 'temp-sol'],
  'CHP-30/60': ['potentiel-hydrique', 'temp-sol'],
  'CHP-60/90': ['potentiel-hydrique', 'temp-sol'],
  'CAPA-30-3': ['teneur-eau', 'temp-sol'],
  'CAPA-60-6': ['teneur-eau', 'temp-sol'],
  'SMV':       ['pluie', 'temp', 'humidite'],
  'EC':        ['conductivite'],
}

// Labels de toutes les métriques (ordre d'affichage dans le sélecteur)
const METRIC_LABELS = {
  'pluie':             'Pluie',
  'temp':                   'Température',
  'humidite':               'Humidité',
  'vent':                   'Vent',
  'rayonnement':            'Rayonnement',
  'intensite-humectation':  "Intensité d'humectation foliaire",
  'duree-humectation':      "Durée d'humectation foliaire",
  'potentiel-hydrique':     'Potentiel hydrique',
  'teneur-eau':             'Teneur en eau du sol',
  'temp-sol':               'Température du sol',
  'temp-seche':             'Température sèche',
  'temp-humide':            'Température humide',
  'conductivite':           'Électro-conductivité',
}

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
  ],
  vent: [
    { value: 'reel', label: 'Temps réel' },
    { value: 'max-jour', label: 'Max du jour' },
    { value: 'moyenne-7', label: 'Moyenne 7 jours' },
    { value: 'moyenne-30', label: 'Moyenne 30 jours' }
  ],
  rayonnement: [
    { value: 'reel', label: 'Temps réel' },
    { value: 'today', label: "Aujourd'hui (cumul)" },
    { value: '7jours', label: '7 jours (cumul)' }
  ],
  'temp-sol': [
    { value: 'reel', label: 'Temps réel' },
    { value: 'min-jour', label: 'Min du jour' },
    { value: 'max-jour', label: 'Max du jour' },
    { value: 'moyenne-7', label: 'Moyenne 7 jours' }
  ],
  'temp-gel': [
    { value: 'reel', label: 'Temps réel' },
    { value: 'min-jour', label: 'Min du jour' },
    { value: 'max-jour', label: 'Max du jour' }
  ],
  'intensite-humectation': [
    { value: 'reel', label: 'Temps réel' },
    { value: 'min-jour', label: 'Min du jour' },
    { value: 'max-jour', label: 'Max du jour' },
    { value: 'moyenne-7', label: 'Moyenne 7 jours' }
  ],
  'duree-humectation': [
    { value: 'today', label: "Aujourd'hui" },
    { value: '7jours', label: '7 jours' },
    { value: '30jours', label: '30 jours' }
  ],
  'potentiel-hydrique': [
    { value: 'reel', label: 'Temps réel' },
    { value: 'min-jour', label: 'Min du jour' },
    { value: 'max-jour', label: 'Max du jour' },
    { value: 'moyenne-7', label: 'Moyenne 7 jours' }
  ],
  'teneur-eau': [
    { value: 'reel', label: 'Temps réel' },
    { value: 'min-jour', label: 'Min du jour' },
    { value: 'max-jour', label: 'Max du jour' },
    { value: 'moyenne-7', label: 'Moyenne 7 jours' }
  ],
  'temp-seche': [
    { value: 'reel', label: 'Temps réel' },
    { value: 'min-jour', label: 'Min du jour' },
    { value: 'max-jour', label: 'Max du jour' }
  ],
  'temp-humide': [
    { value: 'reel', label: 'Temps réel' },
    { value: 'min-jour', label: 'Min du jour' },
    { value: 'max-jour', label: 'Max du jour' }
  ],
  'conductivite': [
    { value: 'reel', label: 'Temps réel' },
    { value: 'moyenne-7', label: 'Moyenne 7 jours' }
  ]
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  const _page = window.location.pathname.split('/').pop()

  // Initialise la section depuis l'URL
  if (_page === 'parcelles-reseau.html' || _page === 'capteurs-reseau.html') {
    currentSection = 'reseau'
  }

  // Sync le rôle depuis localStorage (mis à jour par menu-switch.js)
  const _storedRole = localStorage.getItem('menuRole')
  if (_storedRole === 'adherent-reseau') currentRole = 'adherent'

  // Capteurs : vue carte par défaut
  if (_page === 'capteurs.html' || _page === 'capteurs-reseau.html') currentView = 'map'

  initNavigation()
  initRoleSwitcher()
  initViewSwitcher()
  initFilters()
  initMap()
  initExportButton()
  initSelectionListeners()
  updateView()
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
  if (!switcher) return
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
  }
  updateContent()
}

// Filters
function initFilters() {
  const metricSel = document.getElementById('metric-selector')
  if (metricSel) {
    metricSel.addEventListener('change', (e) => {
      currentMetric = e.target.value
      currentAggregate = metricAggregates[currentMetric]?.[0]?.value || currentAggregate
      updateAggregateOptions()
      updateContent()
    })
  }

  const aggregateSelect = document.getElementById('aggregate-selector')
  if (aggregateSelect) {
    aggregateSelect.addEventListener('change', (e) => {
      currentAggregate = e.target.value
      updateContent()
    })
  }

  // Multi-select dropdowns
  populateFilterDropdowns()
  initFilterDropdownToggle()

  // Mon secteur checkbox
  const monSecteurCb = document.getElementById('check-mon-secteur')
  if (monSecteurCb) {
    monSecteurCb.addEventListener('change', () => {
      filterMonSecteur = monSecteurCb.checked
      updateContent()
    })
  }

  // Mes favoris checkbox
  const favorisСb = document.getElementById('check-mes-favoris')
  if (favorisСb) {
    favorisСb.addEventListener('change', () => {
      filterMonFavoris = favorisСb.checked
      updateContent()
    })
  }

  // Simple selects (org — legacy capteurs.html)
  const orgFilter = document.getElementById('org-filter')
  if (orgFilter) orgFilter.addEventListener('change', updateContent)

  populateOrgFilter()
  if (metricSel) updateAggregateOptions()
}

const INTEGRATION_NAMES = [
  'Abelio', 'Criiam Sud', 'Cropwise Protector', 'DeciTrait',
  'IRRÉ-LIS Mono-Culture', 'IRRÉ-LIS Multi-Cultures',
  'Limacapt', 'Modèles Arvalis — PRÉVI-LIS / MILÉOS',
  'Movida GrapeVision', 'Pixagri', 'Rimpro', 'Semiloni',
  'Vintel', 'VitiMeteo', 'Xarvio'
]

const INTEGRATION_IDS = {
  'Abelio': 'abelio',
  'Criiam Sud': 'criiam-sud',
  'Cropwise Protector': 'cropwise-protector',
  'DeciTrait': 'decitrait',
  'IRRÉ-LIS Mono-Culture': 'irre-lis-mono',
  'IRRÉ-LIS Multi-Cultures': 'irre-lis-multi',
  'Limacapt': 'limacapt',
  'Modèles Arvalis — PRÉVI-LIS / MILÉOS': 'arvalis-previlis-mileos',
  'Movida GrapeVision': 'movida-grapevision',
  'Pixagri': 'pixagri',
  'Rimpro': 'rimpro',
  'Semiloni': 'semiloni',
  'Vintel': 'vintel',
  'VitiMeteo': 'vitimeteo',
  'Xarvio': 'xarvio'
}

function makeCheckboxPanel(panelId, values, stateRef, badgeId, searchable = false) {
  const panel = document.getElementById(panelId)
  if (!panel) return

  function buildItems(vals) {
    return vals.map(v => `<label><input type="checkbox" value="${v}"> ${v}</label>`).join('')
  }

  if (values) {
    const searchHtml = searchable
      ? `<input type="text" class="filter-search" placeholder="Rechercher…" autocomplete="off">`
      : ''
    panel.innerHTML = searchHtml + `<div class="filter-items">${buildItems(values)}</div>`

    if (searchable) {
      const input = panel.querySelector('.filter-search')
      const itemsEl = panel.querySelector('.filter-items')
      input.addEventListener('input', () => {
        const q = input.value.toLowerCase()
        const filtered = values.filter(v => v.toLowerCase().includes(q))
        itemsEl.innerHTML = buildItems(filtered)
        bindCheckboxes()
      })
    }
  }

  function bindCheckboxes() {
    panel.querySelectorAll('input[type=checkbox]').forEach(cb => {
      cb.addEventListener('change', () => {
        const checked = Array.from(panel.querySelectorAll('input:checked')).map(i => i.value)
        stateRef.set(checked)
        updateBadge(badgeId, checked.length)
        updateContent()
      })
    })
  }
  bindCheckboxes()
}

function populateFilterDropdowns() {
  const cultures = [...new Set(plots.map(p => p.crop))].sort()
  makeCheckboxPanel('panel-culture', cultures,
    { set: v => { selectedCultures = v } }, 'badge-culture', true)

  makeCheckboxPanel('panel-irrigation', null,
    { set: v => { selectedIrrigations = v } }, 'badge-irrigation')

  makeCheckboxPanel('panel-etat-hydrique', null,
    { set: v => { selectedEtatsHydriques = v } }, 'badge-etat-hydrique')

  const textures = [...new Set(plots.map(p => p.texture))].sort()
  makeCheckboxPanel('panel-texture', textures,
    { set: v => { selectedTextures = v } }, 'badge-texture')

  makeCheckboxPanel('panel-integration', INTEGRATION_NAMES.sort(),
    { set: v => { selectedIntegrations = v } }, 'badge-integration', true)

  // Capteurs filters (capteurs.html uses checkbox dropdowns too)
  const allModels = ['P', 'PT', 'P+', 'CHP-15/30', 'CHP-30/60', 'CHP-60/90', 'CAPA-30-3', 'CAPA-60-6', 'TH', 'T_MINI', 'T_GEL', 'W', 'PYRANO', 'PAR', 'LWS', 'EC']
  makeCheckboxPanel('panel-model', allModels,
    { set: v => { selectedModels = v } }, 'badge-model')
  makeCheckboxPanel('panel-event', null,
    { set: v => { selectedEvents = v } }, 'badge-event')
  makeCheckboxPanel('panel-telecom', null,
    { set: v => { selectedTelecoms = v } }, 'badge-telecom')

  // Org panel for capteurs (network-only)
  const panelOrg = document.getElementById('panel-org')
  if (panelOrg) {
    panelOrg.innerHTML = ''
    orgs.forEach(org => {
      const lbl = document.createElement('label')
      lbl.innerHTML = `<input type="checkbox" value="${org.id}"> ${org.name}`
      panelOrg.appendChild(lbl)
    })
    panelOrg.querySelectorAll('input[type=checkbox]').forEach(cb => {
      cb.addEventListener('change', () => {
        selectedOrgs = Array.from(panelOrg.querySelectorAll('input:checked')).map(i => Number(i.value))
        updateBadge('badge-org', selectedOrgs.length)
        updateContent()
      })
    })
  }

  // Ville panel for capteurs (network-only)
  const allVilles = [...new Set(orgs.map(o => o.ville).filter(Boolean))].sort()
  makeCheckboxPanel('panel-ville', allVilles,
    { set: v => { selectedVilles = v } }, 'badge-ville', false)
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

  // Vue admin inaccessible pour l'adhérent sur les pages réseau
  const adminViewBtn = document.querySelector('.view-btn[data-view="admin"]')
  if (adminViewBtn) {
    const canSeeAdmin = currentRole === 'admin' || currentSection !== 'reseau'
    adminViewBtn.style.display = canSeeAdmin ? '' : 'none'
    if (!canSeeAdmin && currentView === 'admin') {
      currentView = 'list'
      updateView()
    }
  }
}

function populateOrgFilter() {
  const select = document.getElementById('org-filter')
  if (!select) return  // modern pages use panel-org dropdown instead
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
  const METEO_MODELS = new Set(['P', 'PT', 'P+', 'TH', 'LWS', 'W', 'PYRANO', 'PAR', 'T_MINI'])

  if (currentRole === 'adherent') {
    if (currentSection === 'reseau') {
      // Adhérent Mon réseau : tous les capteurs météo du réseau (pas irrigation)
      filteredSensors = sensors.filter(s => METEO_MODELS.has(s.model))
      filteredParcels = plots.filter(p => filteredSensors.some(s => s.parcelId === p.id))
    } else {
      // Adhérent Mon exploitation : son org uniquement
      filteredParcels = plots.filter(p => p.orgId === ADHERENT_ORG_ID)
      filteredSensors = sensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
    }
  } else {
    // Admin réseau
    if (currentSection === 'reseau') {
      // Admin Mon réseau : tout le réseau
      filteredParcels = plots
      filteredSensors = sensors
    } else {
      // Admin Mon exploitation : son org uniquement
      filteredParcels = plots.filter(p => p.orgId === 1)
      filteredSensors = sensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
    }
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

  if (selectedModels.length > 0) {
    filteredSensors = filteredSensors.filter(s => selectedModels.includes(s.model))
    filteredParcels = filteredParcels.filter(p => filteredSensors.some(s => s.parcelId === p.id))
  }

  if (selectedEvents.length > 0) {
    filteredSensors = filteredSensors.filter(s => selectedEvents.includes(s.event))
    filteredParcels = filteredParcels.filter(p => filteredSensors.some(s => s.parcelId === p.id))
  }

  if (selectedTelecoms.length > 0) {
    filteredSensors = filteredSensors.filter(s => selectedTelecoms.includes(s.telecom))
    filteredParcels = filteredParcels.filter(p => filteredSensors.some(s => s.parcelId === p.id))
  }

  // Legacy simple selects (capteurs-reseau only)
  const eventEl = document.getElementById('event-filter')
  const eventVal = eventEl ? eventEl.value : ''
  if (eventVal) filteredSensors = filteredSensors.filter(s => s.event === eventVal)

  const telecomEl = document.getElementById('telecom-filter')
  const telecomVal = telecomEl ? telecomEl.value : ''
  if (telecomVal) filteredSensors = filteredSensors.filter(s => s.telecom === telecomVal)

  if (filterMonSecteur) {
    const secteurOrgIds = new Set(orgs.filter(o => MON_SECTEUR_DEPTS.has(o.departement)).map(o => o.id))
    filteredParcels = filteredParcels.filter(p => secteurOrgIds.has(p.orgId))
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
  }

  if (filterMonFavoris) {
    filteredParcels = filteredParcels.filter(p => favoritePlotIds.has(p.id))
    filteredSensors = filteredSensors.filter(s => favoriteSensorIds.has(s.id))
  }

  if (selectedOrgs.length > 0) {
    filteredSensors = filteredSensors.filter(s => {
      const parcel = plots.find(p => p.id === s.parcelId)
      return selectedOrgs.includes(parcel ? parcel.orgId : s.orgId)
    })
    filteredParcels = filteredParcels.filter(p => selectedOrgs.includes(p.orgId))
  }

  if (selectedVilles.length > 0) {
    const villeOrgIds = new Set(orgs.filter(o => selectedVilles.includes(o.ville)).map(o => o.id))
    filteredSensors = filteredSensors.filter(s => {
      const parcel = plots.find(p => p.id === s.parcelId)
      return villeOrgIds.has(parcel ? parcel.orgId : s.orgId)
    })
    filteredParcels = filteredParcels.filter(p => villeOrgIds.has(p.orgId))
  }

  updateFilterChips()
  return { parcels: filteredParcels, sensors: filteredSensors }
}

const PAGE_TITLES = {
  'parcelles.html': { title: 'Parcelles', section: 'exploitation' },
  'parcelles-reseau.html': { title: 'Parcelles', section: 'reseau' },
  'capteurs.html': { title: 'Capteurs', section: 'exploitation' },
  'capteurs-reseau.html': { title: 'Capteurs', section: 'reseau' },
  'membres.html': { title: 'Membres', section: 'exploitation' },
  'adherents.html': { title: 'Adhérents', section: 'reseau' },
  'facturation.html': { title: 'Facturation', section: 'exploitation' },
  'previsions.html': { title: 'Prévisions', section: 'exploitation' },
  'integrations.html': { title: 'Intégrations', section: 'exploitation' },
  'parametres.html': { title: 'Paramètres', section: 'exploitation' },
  'parametres-reseau.html': { title: 'Informations', section: 'reseau' },
  'informations.html': { title: 'Informations', section: 'reseau' },
  'alertes.html': { title: 'Mes alertes', section: null },
  'notifications.html': { title: 'Mes notifications', section: null },
  'mon-compte.html': { title: 'Mon compte', section: null },
  'aide.html': { title: 'Aide', section: null },
}

function updateBreadcrumb() {
  const page = window.location.pathname.split('/').pop() || 'parcelles.html'
  const meta = PAGE_TITLES[page] || { title: 'Parcelles', section: 'exploitation' }

  const contextEl = document.getElementById('breadcrumb-context')
  const titleEl = document.getElementById('breadcrumb-title')
  if (!contextEl || !titleEl) return

  const menuRole = localStorage.getItem('menuRole') || 'admin-reseau'
  const isAdmin  = menuRole === 'admin-reseau'

  const ENTITY_NAMES = {
    exploitation: isAdmin ? "Breiz'Agri Conseil" : 'Ferme du Bocage',
    reseau:       "Breiz'Agri Conseil",
  }

  const sectionLabel = meta.section === 'reseau' ? 'Mon réseau' : meta.section === 'exploitation' ? 'Mon exploitation' : ''
  const entityName   = meta.section ? ENTITY_NAMES[meta.section] : ''

  if (sectionLabel) {
    contextEl.innerHTML = `${sectionLabel}<span class="breadcrumb-entity">${entityName}</span>`
  } else {
    contextEl.textContent = ''
  }
  contextEl.hidden = !sectionLabel
  titleEl.textContent = meta.title
}

// Calcule les métriques disponibles à partir d'une liste de capteurs
function getAvailableMetrics(sensorList) {
  const available = new Set()
  sensorList.forEach(s => {
    ;(MODEL_METRICS[s.model] || []).forEach(m => available.add(m))
  })
  return Object.keys(METRIC_LABELS).filter(m => available.has(m))
}

// Peuple dynamiquement le sélecteur de métrique (capteurs et parcelles)
function updateMetricSelector(filteredParcels, filteredSensors) {
  const sel = document.getElementById('metric-selector')
  if (!sel) return

  // Sur les pages capteurs : métriques des capteurs visibles
  // Sur les pages parcelles : métriques des capteurs liés aux parcelles visibles
  const sensorList = pageType.startsWith('parcelles')
    ? sensors.filter(s => filteredParcels.some(p => p.id === s.parcelId))
    : filteredSensors

  const available = getAvailableMetrics(sensorList)
  if (available.length === 0) return

  sel.innerHTML = available
    .map(m => `<option value="${m}">${METRIC_LABELS[m]}</option>`)
    .join('')

  if (!available.includes(currentMetric)) {
    currentMetric = available[0]
  }
  sel.value = currentMetric
  updateAggregateOptions()
}

// Update content based on role and section
function updateContent() {
  updateBreadcrumb()

  const metricControls = document.getElementById('metric-controls')
  if (metricControls) metricControls.style.display = currentView === 'admin' ? 'none' : ''

  const { parcels: filteredParcels, sensors: filteredSensors } = getFilteredData()

  updateMetricSelector(filteredParcels, filteredSensors)

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
  if (!document.getElementById('map-container')) return
  map = L.map('map-container').setView([48.5, -2.5], 8)

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map)

  map.invalidateSize()


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
      layer.on('click', () => { window.location.href = `parcelle-detail.html?id=${parcel.id}` })
      layer.addTo(map)
      markers.push(layer)

      // Permanent value label at polygon centroid
      const value = computeMetricValue(parcel, currentMetric, currentAggregate)
      const unit  = getMetricUnit(currentMetric)
      const color = getMetricColor(parcel, currentMetric)
      const labelLat = parcel.lat || (parcel.latlngs ? parcel.latlngs.reduce((s, p) => s + p[0], 0) / parcel.latlngs.length : null)
      const labelLng = parcel.lng || (parcel.latlngs ? parcel.latlngs.reduce((s, p) => s + p[1], 0) / parcel.latlngs.length : null)
      if (labelLat && labelLng) {
        const label = L.marker([labelLat, labelLng], {
          icon: L.divIcon({
            className: '',
            html: `<div class="map-value-badge" style="border-color:${color};color:${color}">${fmtMetricValue(value, currentMetric)}</div>`,
            iconSize: [0, 0],
            iconAnchor: [0, 0],
          }),
          interactive: false,
        }).addTo(map)
        markers.push(label)
      }
    })
  } else {

    if (currentView === 'map') {
      filteredSensors.forEach(sensor => {
        const parcel = plots.find(p => p.id === sensor.parcelId)
        if (!parcel) return

        const sensorVal = computeSensorValue(sensor, currentMetric, currentAggregate)
        const eventStr = sensor.event ? `<br><span style="color:var(--warn)">⚠ ${sensor.event}</span>` : ''
        const valLine = sensorVal ? `<br>${sensorVal[0]} ${sensorVal[1]}` : ''

        const circle = L.circleMarker([parcel.lat, parcel.lng], {
          radius: 6, color: '#666', fillColor: '#fff', fillOpacity: 1, weight: 1.5
        }).addTo(map)
        circle.bindTooltip(
          `<strong>${sensor.serial} · ${sensor.model}</strong>${valLine}<br>Signal: ${sensor.networkQuality}%${eventStr}`,
          { sticky: true, opacity: 0.95 }
        )
        circle.on('click', () => { window.location.href = `capteur-detail.html?id=${sensor.id}` })
        markers.push(circle)

        if (sensorVal) {
          const valText = `${sensorVal[0]} ${sensorVal[1]}`
          const label = L.marker([parcel.lat, parcel.lng], {
            icon: L.divIcon({
              className: '',
              html: `<div class="map-value-badge" style="border-color:var(--pri);color:var(--pri);transform:translate(-50%,calc(-100% - 8px))">${valText}</div>`,
              iconSize: [0, 0],
              iconAnchor: [0, 0],
            }),
            interactive: false,
          }).addTo(map)
          markers.push(label)
        }
      })
    }
  }

  if (markers.length > 0) {
    const group = L.featureGroup(markers)
    const bounds = group.getBounds()
    if (!bounds.isValid()) return
    const ne = bounds.getNorthEast(), sw = bounds.getSouthWest()
    const isSinglePoint = Math.abs(ne.lat - sw.lat) < 0.001 && Math.abs(ne.lng - sw.lng) < 0.001
    const isCapteurPage = !pageType.startsWith('parcelles')
    if (isSinglePoint) {
      map.setView(bounds.getCenter(), isCapteurPage ? 10 : 13)
    } else {
      map.fitBounds(bounds.pad(isCapteurPage ? 0.4 : 0.15), { maxZoom: isCapteurPage ? 10 : 14 })
    }
  }


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

  // ~7% shown as simple point markers (no polygon shape)
  if (!parcel.shape && parcel.id % 14 === 0) {
    return L.circleMarker([parcel.lat, parcel.lng], {
      radius: 6, color: '#ffffff', fillColor: '#0172A4', fillOpacity: 0.85, weight: 2
    })
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

function fmtDuree(decimalHours) {
  const h = Math.floor(decimalHours)
  const m = Math.round((decimalHours - h) * 60)
  return `${h}h ${String(m).padStart(2, '0')}min`
}

function fmtMetricValue(value, metric) {
  if (metric === 'duree-humectation') return fmtDuree(value)
  return `${value} ${getMetricUnit(metric)}`
}

function getMetricTooltipValue(parcel) {
  const value = computeMetricValue(parcel, currentMetric, currentAggregate)
  return `${getAggregateLabel(currentAggregate)} : ${fmtMetricValue(value, currentMetric)}`
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

  if (metric === 'vent') {
    const base = 8 + (parcel.id % 18)
    switch (aggregate) {
      case 'reel': return Math.max(0, base + noise)
      case 'max-jour': return Math.max(0, base + 12 + noise)
      case 'moyenne-7': return Math.max(0, base + 3 + noise * 0.5)
      case 'moyenne-30': return Math.max(0, base + 1 + noise * 0.3)
      default: return base
    }
  }

  if (metric === 'rayonnement') {
    const base = 150 + parcel.degresJour / 5
    switch (aggregate) {
      case 'reel': return Math.round(base + noise * 15)
      case 'today': return Math.round(base * 3 + noise * 50)
      case '7jours': return Math.round(base * 18 + noise * 80)
      default: return Math.round(base)
    }
  }


  if (metric === 'temp-sol') {
    const base = Math.round(8 + parcel.degresJour / 160)
    switch (aggregate) {
      case 'reel': return base + noise
      case 'min-jour': return base - 3 + noise
      case 'max-jour': return base + 4 + noise
      case 'moyenne-7': return base + 1 + noise * 0.3
      default: return base
    }
  }

  if (metric === 'temp-seche') {
    const base = Math.round(-1 + parcel.degresJour / 300)
    switch (aggregate) {
      case 'reel': return base + noise
      case 'min-jour': return base - 2 + noise
      case 'max-jour': return base + 3 + noise
      default: return base
    }
  }

  if (metric === 'temp-humide') {
    const base = Math.round(-3 + parcel.degresJour / 320)
    switch (aggregate) {
      case 'reel': return base + noise
      case 'min-jour': return base - 2 + noise
      case 'max-jour': return base + 2 + noise
      default: return base
    }
  }

  if (metric === 'potentiel-hydrique') {
    // kPa : 0 = saturé, -1500 = point de flétrissement
    const base = -Math.round(20 + (100 - parcel.reserveHydrique) * 8 + (parcel.id % 40))
    switch (aggregate) {
      case 'reel': return base + noise * 5
      case 'min-jour': return base + 15 + noise * 3
      case 'max-jour': return base - 20 + noise * 5
      case 'moyenne-7': return base + 5 + noise * 2
      default: return base
    }
  }

  if (metric === 'teneur-eau') {
    // m³/m³ exprimé en %, typiquement 10–45%
    const base = Math.min(45, Math.max(10, Math.round(parcel.reserveHydrique * 0.4 + 10)))
    switch (aggregate) {
      case 'reel': return Math.min(45, Math.max(5, base + noise))
      case 'min-jour': return Math.max(5, base - 8 + noise)
      case 'max-jour': return Math.min(45, base + 5 + noise)
      case 'moyenne-7': return Math.min(45, Math.max(5, base - 2 + noise * 0.3))
      default: return base
    }
  }

  if (metric === 'conductivite') {
    // dS/m
    const base = +(0.5 + (parcel.id % 20) * 0.07).toFixed(1)
    switch (aggregate) {
      case 'reel': return +(base + noise * 0.05).toFixed(1)
      case 'moyenne-7': return +(base + noise * 0.02).toFixed(1)
      default: return base
    }
  }

  if (metric === 'intensite-humectation') {
    const base = Math.min(100, Math.max(0, Math.round(parcel.reserveHydrique / 2)))
    switch (aggregate) {
      case 'reel': return Math.min(100, Math.max(0, base + noise * 2))
      case 'min-jour': return Math.max(0, base - 20 + noise)
      case 'max-jour': return Math.min(100, base + 15 + noise)
      case 'moyenne-7': return Math.min(100, Math.max(0, base - 5 + noise))
      default: return base
    }
  }

  if (metric === 'duree-humectation') {
    const base = Math.max(0, parcel.reserveHydrique / 20)
    switch (aggregate) {
      case 'today': return Math.max(0, +(base + noise * 0.25).toFixed(2))
      case 'yesterday': return Math.max(0, +(base - 0.5 + noise * 0.25).toFixed(2))
      case '7jours': return Math.max(0, +(base * 5 + noise * 0.5).toFixed(2))
      case '30jours': return Math.max(0, +(base * 18 + noise).toFixed(2))
      default: return +base.toFixed(2)
    }
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
  if (metric === 'vent') return 'km/h'
  if (metric === 'rayonnement') return 'W/m²'
  if (metric === 'temp-sol') return '°C'
  if (metric === 'temp-seche') return '°C'
  if (metric === 'temp-humide') return '°C'
  if (metric === 'intensite-humectation') return '%'
  if (metric === 'duree-humectation') return ''
  if (metric === 'potentiel-hydrique') return 'kPa'
  if (metric === 'teneur-eau') return '%'
  if (metric === 'conductivite') return 'dS/m'
  return ''
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

  if (metric === 'vent') {
    const v = computeMetricValue(parcel, metric, currentAggregate)
    if (v < 15) return '#74b9ff'
    if (v < 30) return '#f39c12'
    return '#e74c3c'
  }

  if (metric === 'rayonnement') {
    const v = computeMetricValue(parcel, metric, currentAggregate)
    if (v < 200) return '#74b9ff'
    if (v < 400) return '#f8e840'
    return '#e07050'
  }


  if (metric === 'temp-sol' || metric === 'temp-seche' || metric === 'temp-humide') {
    const v = computeMetricValue(parcel, metric, currentAggregate)
    if (v < 5) return '#74b9ff'
    if (v < 15) return '#f39c12'
    return '#e74c3c'
  }

  if (metric === 'intensite-humectation') {
    const v = computeMetricValue(parcel, metric, currentAggregate)
    if (v < 30) return '#74b9ff'
    if (v < 70) return '#f39c12'
    return '#0984e3'
  }

  if (metric === 'duree-humectation') {
    const v = computeMetricValue(parcel, metric, currentAggregate)
    if (v < 2) return '#74b9ff'
    if (v < 6) return '#f39c12'
    return '#0984e3'
  }

  if (metric === 'potentiel-hydrique') {
    // Plus négatif = plus sec
    const v = computeMetricValue(parcel, metric, currentAggregate)
    if (v < -300) return '#E05252'
    if (v < -100) return '#FBAF05'
    return '#24B066'
  }

  if (metric === 'teneur-eau') {
    const v = computeMetricValue(parcel, metric, currentAggregate)
    if (v < 15) return '#E05252'
    if (v < 30) return '#FBAF05'
    return '#24B066'
  }

  if (metric === 'conductivite') {
    const v = computeMetricValue(parcel, metric, currentAggregate)
    if (v > 1.5) return '#E05252'
    if (v > 0.8) return '#FBAF05'
    return '#24B066'
  }

  return '#0172A4'
}

function getSensorColor(sensor) {
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
    // Capteurs pages: sensor table only (no parcel metric table)
    if (filteredSensors.length > 0) {
      container.innerHTML += createSensorTable(filteredSensors)
    } else {
      container.innerHTML = '<p class="empty-state">Aucun capteur ne correspond aux filtres sélectionnés.</p>'
    }
  }

  animateView(container)
}

// Model type mapping
const MODEL_TYPE = {
  'P+': 'Station météo', 'PT': 'Station météo', 'P': 'Pluviomètre',
  'TH': 'Thermo-hygromètre', 'T_MINI': 'Thermomètre de sol',
  'W': 'Anémomètre', 'PYRANO': 'Pyranomètre', 'PAR': 'Capteur PAR',
  'LWS': 'Humectation foliaire', 'T_GEL': 'Capteur gel',
  'CHP-15/30': 'Tensiomètre', 'CHP-30/60': 'Tensiomètre', 'CHP-60/90': 'Tensiomètre',
  'CAPA-30-3': 'Sonde capacitive', 'CAPA-60-6': 'Sonde capacitive',
  'EC': 'Sonde fertirrigation',
}

// Brand assignment (deterministic by serial prefix)
function getSensorBrand(sensor) {
  const s = sensor.serial || ''
  if (s.startsWith('CR') || s.startsWith('CO')) return 'CoRHIZE'
  if (s.startsWith('DA') || s.startsWith('DV')) return 'Davis'
  return 'Weenat'
}

// ── Display helpers ───────────────────────────────────────────────────────────

const PLOT_DISPLAY_NAMES = [
  'Le Grand Clos', 'La Petite Pièce', 'Les Terres Noires', 'Le Carré du Bois',
  'La Lande de la Croix', 'Le Fond du Vallon', 'La Butte Ronde', 'Le Clos des Sables',
  'La Plaine du Bourg', 'Le Pré de la Mare', 'Les Arpents Verts', 'Le Coteau Blanc',
  'Le Grand Sillon', 'La Vieille Lande', 'Les Quatre Coins', 'Le Beau Pré',
  "La Pièce de l'Angle", 'Le Fond des Haies', 'La Terre Rouge', 'Les Longues Raies',
  'Le Champ Vert', 'La Plaine Basse', 'Les Bordures', 'Le Clos du Haut',
  'La Grande Pièce Nord', 'Le Pré de la Croix', 'La Butte Creuse', 'Le Champ de la Forêt',
  'Les Terres Rouges', "La Vallée des Chênes", 'Le Clos Fleuri', 'Les Terres Grasses',
  'La Lande Sèche', 'Le Pré Marécageux', 'La Côte du Moulin', 'Les Hautes Raies',
  'Le Fond du Bois', 'La Plaine du Sud', 'Le Petit Carré', 'Les Quatre Vents',
  'La Vieille Pièce', 'Le Grand Fond', 'La Prairie Humide', 'Le Champ Long',
  'La Butte du Bourg', 'Le Clos Fleuri Est', 'Les Terres Basses', 'La Pièce du Moulin',
  'Le Carré Vert', 'La Lande Blanche',
]

function getPlotDisplayName(plot) {
  if (plot.id <= 15) return plot.name
  return PLOT_DISPLAY_NAMES[(plot.id - 16) % PLOT_DISPLAY_NAMES.length]
}

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
function formatSerial(sensor) {
  const id = sensor.id
  const c1 = CHARS[id % CHARS.length]
  const num = String(400 + (id * 37) % 500).padStart(3, '0')
  const c2 = CHARS[(id * 7) % CHARS.length]
  const c3 = CHARS[(id * 13) % CHARS.length]
  const d1 = (id * 3) % 10
  return `${c1}${num}${c2}${c3}${d1}`
}

function getSensorAge(sensor) {
  const minutes = 1 + (sensor.id * 7) % 14
  return `il y a ${minutes} min`
}

const EVENT_ICONS = {
  'capteur couché':        'bi-arrow-down-circle',
  'capteur déplacé':       'bi-geo-alt',
  'émissions interrompues':'bi-wifi-off',
  'cuillère bloquée':      'bi-slash-circle',
}

function computeSensorValue(sensor, metric, aggregate) {
  const n = (seed) => Math.round(Math.sin(sensor.id * 1.9 + seed) * 3)

  const PLUIE_MODELS   = new Set(['P', 'PT', 'P+', 'SMV'])
  const TEMP_MODELS    = new Set(['TH', 'PT', 'P+', 'SMV'])
  const HUM_MODELS     = new Set(['TH', 'PT', 'P+', 'SMV'])
  const VENT_MODELS    = new Set(['W', 'PT', 'P+'])
  const RAY_MODELS     = new Set(['PYRANO', 'PAR'])
  const CHP_MODELS     = new Set(['CHP-15/30', 'CHP-30/60', 'CHP-60/90'])
  const CAPA_MODELS    = new Set(['CAPA-30-3', 'CAPA-60-6'])
  const TEMP_SOL_MODELS = new Set(['T_MINI', 'CHP-15/30', 'CHP-30/60', 'CHP-60/90', 'CAPA-30-3', 'CAPA-60-6'])

  if (metric === 'pluie') {
    if (!PLUIE_MODELS.has(sensor.model)) return null
    const base = 5 + (sensor.id % 10)
    const vals = { today: Math.max(0, base + n(1)), yesterday: Math.max(0, base - 1 + n(2)), '7jours': Math.max(0, base * 3 + n(3)), '30jours': Math.max(0, base * 12 + n(4)), '1an': Math.max(0, base * 45 + n(5)) }
    return [vals[aggregate] ?? base, 'mm']
  }
  if (metric === 'temp') {
    if (!TEMP_MODELS.has(sensor.model)) return null
    const base = 12 + (sensor.id % 8)
    const vals = { reel: base + n(1), 'min-jour': base - 4 + n(2), 'max-jour': base + 5 + n(3), 'moyenne-7': base + 1 + n(4), 'moyenne-30': base + n(5) }
    return [vals[aggregate] ?? base, '°C']
  }
  if (metric === 'humidite') {
    if (!HUM_MODELS.has(sensor.model)) return null
    const base = 55 + (sensor.id % 30)
    const vals = { reel: Math.min(100, base + n(1)), 'min-jour': Math.max(20, base - 20 + n(2)), 'max-jour': Math.min(100, base + 15 + n(3)), 'moyenne-7': Math.min(100, base - 5 + n(4)), 'moyenne-30': Math.min(100, base - 2 + n(5)) }
    return [vals[aggregate] ?? base, '%']
  }
  if (metric === 'vent') {
    if (!VENT_MODELS.has(sensor.model)) return null
    const base = 10 + (sensor.id % 15)
    const vals = { reel: base + n(1), 'max-jour': base + 12 + n(2), 'moyenne-7': base + 3 + n(3), 'moyenne-30': base + 1 + n(4) }
    return [vals[aggregate] ?? base, 'km/h']
  }
  if (metric === 'rayonnement') {
    if (!RAY_MODELS.has(sensor.model)) return null
    const base = 200 + (sensor.id % 300)
    const vals = { reel: base + n(1) * 10, today: base * 3 + n(2) * 50, '7jours': base * 20 + n(3) * 100 }
    return [vals[aggregate] ?? base, 'Wh/m²']
  }
  if (metric === 'potentiel-hydrique') {
    if (!CHP_MODELS.has(sensor.model)) return null
    const base = -150 - (sensor.id % 200)
    const vals = { reel: base + n(1) * 5, 'min-jour': base - 50 + n(2) * 5, 'max-jour': base + 30 + n(3) * 5, 'moyenne-7': base - 20 + n(4) * 3 }
    return [vals[aggregate] ?? base, 'hPa']
  }
  if (metric === 'teneur-eau') {
    if (!CAPA_MODELS.has(sensor.model)) return null
    const base = 25 + (sensor.id % 20)
    const vals = { reel: Math.min(50, base + n(1)), 'min-jour': Math.max(5, base - 10 + n(2)), 'max-jour': Math.min(50, base + 8 + n(3)), 'moyenne-7': Math.min(50, base - 3 + n(4)) }
    return [vals[aggregate] ?? base, '%']
  }
  if (metric === 'temp-sol') {
    if (!TEMP_SOL_MODELS.has(sensor.model)) return null
    const base = 8 + (sensor.id % 10)
    const vals = { reel: base + n(1), 'min-jour': base - 3 + n(2), 'max-jour': base + 4 + n(3), 'moyenne-7': base + 1 + n(4) }
    return [vals[aggregate] ?? base, '°C']
  }
  if (metric === 'temp-seche') {
    if (sensor.model !== 'T_GEL') return null
    const base = 2 + (sensor.id % 8)
    const vals = { reel: base + n(1), 'min-jour': base - 5 + n(2), 'max-jour': base + 3 + n(3), 'moyenne-7': base + n(4) }
    return [vals[aggregate] ?? base, '°C']
  }
  if (metric === 'temp-humide') {
    if (sensor.model !== 'T_GEL') return null
    const base = 1 + (sensor.id % 6)
    const vals = { reel: base + n(1), 'min-jour': base - 3 + n(2), 'max-jour': base + 2 + n(3), 'moyenne-7': base + n(4) }
    return [vals[aggregate] ?? base, '°C']
  }
  if (metric === 'conductivite') {
    if (sensor.model !== 'EC') return null
    const base = (0.5 + (sensor.id % 15) / 10)
    const vals = { reel: +(base + n(1) * 0.05).toFixed(2), 'min-jour': +(base - 0.1 + n(2) * 0.03).toFixed(2), 'max-jour': +(base + 0.2 + n(3) * 0.05).toFixed(2), 'moyenne-7': +(base + n(4) * 0.02).toFixed(2) }
    return [vals[aggregate] ?? base, 'dS/m']
  }
  if (metric === 'intensite-humectation') {
    if (sensor.model !== 'LWS') return null
    const base = Math.min(100, 40 + (sensor.id % 40))
    const vals = { reel: Math.min(100, base + n(1) * 3), 'min-jour': Math.max(0, base - 20 + n(2)), 'max-jour': Math.min(100, base + 15 + n(3)), 'moyenne-7': Math.min(100, base - 5 + n(4)) }
    return [vals[aggregate] ?? base, '%']
  }
  if (metric === 'duree-humectation') {
    if (sensor.model !== 'LWS') return null
    const base = 2 + (sensor.id % 8)
    const decVal = {
      today: Math.max(0, base + n(1) * 0.25),
      yesterday: Math.max(0, base - 0.5 + n(2) * 0.25),
      '7jours': Math.max(0, base * 5 + n(3) * 0.5),
      '30jours': Math.max(0, base * 18 + n(4))
    }
    const v = decVal[aggregate] ?? base
    return [fmtDuree(v), '']
  }
  return null
}

function createSensorTable(sensors) {
  const metricLabel = METRIC_LABELS[currentMetric] || 'Mesure'
  const aggLabel = getAggregateLabel(currentAggregate)

  let html = '<table id="sensor-table"><thead><tr>'
  html += '<th data-column="brand">Marque</th>'
  html += '<th data-column="model">Modèle</th>'
  html += '<th data-column="serial">N° série</th>'
  html += '<th data-column="city">Ville</th>'
  html += '<th data-column="lastMessage">Dernier message</th>'
  html += '<th data-column="org">Organisation</th>'
  html += '<th data-column="event">Événement</th>'
  html += `<th data-column="mesure" class="col-active-header">${metricLabel}<br><small style="font-weight:400">${aggLabel}</small></th>`
  html += '</tr></thead><tbody>'

  sensors.forEach(sensor => {
    const parcel = plots.find(p => p.id === sensor.parcelId)
    const org = parcel ? orgs.find(o => o.id === parcel.orgId) : orgs.find(o => o.id === sensor.orgId)
    const brand = getSensorBrand(sensor)
    const typeName = MODEL_TYPE[sensor.model] || sensor.model
    const city = org?.ville || '—'
    const sensorVal = computeSensorValue(sensor, currentMetric, currentAggregate)
    const mesureHtml = sensorVal
      ? `${sensorVal[0]} ${sensorVal[1]}`
      : '<span class="tag-none">—</span>'
    const eventIcon = sensor.event ? `<i class="bi ${EVENT_ICONS[sensor.event] || 'bi-exclamation-circle'}" title="${sensor.event}" style="color:var(--warn)"></i> ` : ''
    html += `<tr class="clickable-row" data-href="capteur-detail.html?id=${sensor.id}">
      <td>${brand}</td>
      <td><strong>${sensor.model}</strong><br><span style="font-size:10px;color:var(--txt3)">${typeName}</span></td>
      <td>${formatSerial(sensor)}</td>
      <td>${city}</td>
      <td style="white-space:nowrap">${getSensorAge(sensor)}</td>
      <td>${org ? org.name : '—'}</td>
      <td>${eventIcon}${sensor.event || ''}</td>
      <td class="col-active num">${mesureHtml}</td>
    </tr>`
  })
  html += '</tbody></table>'

  setTimeout(() => {
    document.querySelectorAll('#sensor-table .clickable-row').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT') return
        window.location.href = row.dataset.href
      })
    })
  }, 0)

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

  const colIndex = Array.from(table.querySelectorAll('th')).findIndex(th => th.dataset.column === column)
  rows.sort((a, b) => {
    const aRaw = getCellSortValue(a.children[colIndex])
    const bRaw = getCellSortValue(b.children[colIndex])
    const aNum = parseFloat(aRaw)
    const bNum = parseFloat(bRaw)
    const numeric = !isNaN(aNum) && !isNaN(bNum)
    const cmp = numeric ? aNum - bNum : aRaw.localeCompare(bRaw, 'fr')
    return direction === 'asc' ? cmp : -cmp
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

function getCellSortValue(cell) {
  if (!cell) return ''
  const sel = cell.querySelector('select')
  if (sel) return sel.options[sel.selectedIndex]?.text ?? sel.value ?? ''
  return cell.textContent.trim()
}

// Admin view
function renderAdmin(filteredParcels, filteredSensors) {
  const container = document.getElementById('admin-container')
  container.innerHTML = ''

  if (pageType.startsWith('parcelles')) {
    // Parcel-specific stats
    const totalArea = filteredParcels.reduce((s, p) => s + p.area, 0)
    const avgArea = filteredParcels.length ? totalArea / filteredParcels.length : 0
    const withSensors = filteredParcels.filter(p => sensors.some(s => s.parcelId === p.id)).length
    const withoutSensors = filteredParcels.length - withSensors
    const withInteg = filteredParcels.filter(p => (p.integrations || []).length > 0).length
    const uniqueCultures = new Set(filteredParcels.map(p => p.crop)).size
    const withIrrigation = filteredParcels.filter(p => p.irrigation && p.irrigation !== "Pas d'irrigation").length
    const totalSensorsLinked = filteredParcels.reduce((s, p) => s + sensors.filter(se => se.parcelId === p.id).length, 0)

    container.innerHTML += `
      <div id="stats-cards">
        <div class="stat-card"><div class="stat-label">Parcelles</div><div class="stat-value">${filteredParcels.length}</div></div>
        <div class="stat-card"><div class="stat-label">Surface totale</div><div class="stat-value">${totalArea.toFixed(1)} ha</div></div>
        <div class="stat-card"><div class="stat-label">Surface moyenne</div><div class="stat-value">${avgArea.toFixed(1)} ha</div></div>
        <div class="stat-card"><div class="stat-label">Cultures</div><div class="stat-value">${uniqueCultures}</div></div>
        <div class="stat-card"><div class="stat-label">Avec capteur</div><div class="stat-value">${withSensors}</div></div>
        <div class="stat-card"><div class="stat-label">Sans capteur</div><div class="stat-value">${withoutSensors}</div></div>
        <div class="stat-card"><div class="stat-label">Capteurs liés</div><div class="stat-value">${totalSensorsLinked}</div></div>
        <div class="stat-card"><div class="stat-label">Avec intégration</div><div class="stat-value">${withInteg}</div></div>
        <div class="stat-card"><div class="stat-label">Avec irrigation</div><div class="stat-value">${withIrrigation}</div></div>
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
        <div class="stat-card"><div class="stat-label">Avec événement</div><div class="stat-value">${sensorsWithEvent}</div></div>
        <div class="stat-card"><div class="stat-label">Qualité réseau moy.</div><div class="stat-value">${avgNetworkQuality.toFixed(1)} %</div></div>
      </div>
    `
    container.innerHTML += createAdminTable(filteredSensors)
    initSensorAdminTable(container)
  }

  animateView(container)
}


function initExportButton() {
  document.getElementById('import-btn')?.addEventListener('click', () => {
    showToast('Import CSV/Excel — fonctionnalité à venir')
  })

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

function createAdminTable(sensorList) {
  let html = `
    <div id="sensor-bulk-bar" class="bulk-bar hidden">
      <span id="sensor-bulk-count"></span>
      <div class="bulk-actions">
        <button class="btn-secondary btn-sm" id="sensor-bulk-fav-btn"><i class="bi bi-star"></i> Ajouter aux favoris</button>
      </div>
    </div>`
  html += '<table id="admin-sensor-table"><thead><tr>'
  html += '<th class="col-check"><input type="checkbox" id="check-all-admin-sensor"></th>'
  html += '<th data-column="model">Modèle</th>'
  html += '<th data-column="serial">N° série</th>'
  html += '<th data-column="telecom">Télécom</th>'
  html += '<th data-column="lastMessage">Dernier message</th>'
  html += '<th data-column="networkQuality">Qualité réseau</th>'
  html += '<th data-column="event">Événement</th>'
  html += '<th data-column="parcelle">Parcelle</th>'
  html += '<th data-column="membres">Membres</th>'
  html += '<th data-column="organisation">Organisation</th>'
  html += '</tr></thead><tbody>'

  sensorList.forEach(sensor => {
    const parcel = plots.find(p => p.id === sensor.parcelId)

    const parcelHtml = parcel
      ? `<div class="admin-item-row">
           <a href="parcelle-detail.html?id=${parcel.id}" class="admin-link">${getPlotDisplayName(parcel)}</a>
           <button class="icon-btn remove-parcel-sensor-admin" data-sensor-id="${sensor.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
         </div>`
      : '<span class="tag-none">—</span>'

    const allParcelMembers = parcel ? members.filter(m => m.parcelIds.includes(parcel.id) && m.role !== 'propriétaire') : []
    const memberLimit = (sensor.id % 3 === 0) ? 0 : Math.min(2, allParcelMembers.length)
    const displayMembers = allParcelMembers.slice(0, memberLimit)
    const membresHtml = displayMembers.length
      ? displayMembers.map(m => `<div class="admin-item-row">
           <a href="membres.html" class="admin-link">${m.prenom} ${m.nom}</a>
           <button class="icon-btn remove-member-sensor-admin" data-member-id="${m.id}" data-parcel-id="${parcel.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
         </div>`).join('')
      : '<span class="tag-none">—</span>'

    const currentOrgId = sensor.orgId ?? parcel?.orgId
    const orgSelectHtml = `<select class="inline-edit" data-field="orgId" data-sensor-id="${sensor.id}">
      ${orgs.map(o => `<option value="${o.id}"${o.id === currentOrgId ? ' selected' : ''}>${o.name}</option>`).join('')}
    </select>`

    const eventIcon = sensor.event ? `<i class="bi ${EVENT_ICONS[sensor.event] || 'bi-exclamation-circle'}" title="${sensor.event}" style="color:var(--warn)"></i> ` : ''

    html += `<tr>
      <td class="col-check"><input type="checkbox" class="sensor-admin-check" data-id="${sensor.id}"></td>
      <td>${sensor.model}</td>
      <td>${formatSerial(sensor)}</td>
      <td>${sensor.telecom}</td>
      <td style="white-space:nowrap">${getSensorAge(sensor)}</td>
      <td>${sensor.networkQuality}%</td>
      <td>${eventIcon}${sensor.event || ''}</td>
      <td class="admin-links-cell">${parcelHtml}</td>
      <td class="admin-links-cell">${membresHtml}</td>
      <td>${orgSelectHtml}</td>
    </tr>`
  })

  html += '</tbody></table>'
  return html
}

function updateSensorBulkBar(container) {
  const checked = container.querySelectorAll('.sensor-admin-check:checked')
  const bar = container.querySelector('#sensor-bulk-bar')
  const countEl = container.querySelector('#sensor-bulk-count')
  if (!bar) return
  if (checked.length > 0) {
    bar.classList.remove('hidden')
    if (countEl) countEl.textContent = `${checked.length} sélectionné${checked.length > 1 ? 's' : ''}`
  } else {
    bar.classList.add('hidden')
  }
}

function initSensorAdminTable(container) {
  const checkAll = container.querySelector('#check-all-admin-sensor')
  if (checkAll) {
    checkAll.addEventListener('change', () => {
      container.querySelectorAll('.sensor-admin-check').forEach(cb => { cb.checked = checkAll.checked })
      updateSensorBulkBar(container)
    })
  }

  container.querySelectorAll('.sensor-admin-check').forEach(cb => {
    cb.addEventListener('change', () => updateSensorBulkBar(container))
  })

  container.querySelector('#sensor-bulk-fav-btn')?.addEventListener('click', () => {
    const ids = [...container.querySelectorAll('.sensor-admin-check:checked')].map(cb => parseInt(cb.dataset.id))
    if (!ids.length) return
    ids.forEach(id => favoriteSensorIds.add(id))
    saveFavorites()
    showToast(`${ids.length} capteur${ids.length > 1 ? 's' : ''} ajouté${ids.length > 1 ? 's' : ''} aux favoris`)
  })

  container.querySelectorAll('.remove-parcel-sensor-admin').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const sensorId = parseInt(btn.dataset.sensorId)
      const sensor = sensors.find(s => s.id === sensorId)
      if (sensor) sensor.parcelId = null
      updateContent()
    })
  })

  container.querySelectorAll('.remove-member-sensor-admin').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const memberId = parseInt(btn.dataset.memberId)
      const parcelId = parseInt(btn.dataset.parcelId)
      const member = members.find(m => m.id === memberId)
      if (member) member.parcelIds = member.parcelIds.filter(id => id !== parcelId)
      updateContent()
    })
  })
}

/// ── Vue liste parcelles ───────────────────────────────────────────────────────
function createParcelMetricTable(parcels) {
  const aggregates = metricAggregates[currentMetric] || []
  const unit = getMetricUnit(currentMetric)
  const metricLabel = METRIC_LABELS[currentMetric] || currentMetric

  let html = '<table id="parcel-table"><thead><tr>'
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
    html += `<td><a href="parcelle-detail.html?id=${parcel.id}" class="row-link">${getPlotDisplayName(parcel)}</a></td>`
    html += `<td>${parcel.crop}</td>`
    html += `<td class="num">${parcel.area} ha</td>`
    html += `<td>${parcel.texture}</td>`
    html += `<td><span class="${irrigationClass}">${irrigation}</span></td>`
    html += `<td class="num">${sensorCount > 0 ? sensorCount : '<span class="warn-text">0</span>'}</td>`
    html += `<td class="integrations-cell">${integHtml}</td>`
    aggregates.forEach(agg => {
      const val = computeMetricValue(parcel, currentMetric, agg.value)
      const isActive = agg.value === currentAggregate
      html += `<td class="num${isActive ? ' col-active' : ''}">${fmtMetricValue(val, currentMetric)}</td>`
    })
    html += '</tr>'
  })

  html += '</tbody></table>'

  setTimeout(() => {
    document.querySelectorAll('#parcel-table .clickable-row').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') return
        window.location.href = row.dataset.href
      })
    })
  }, 0)

  return html
}

// ── Vue admin parcelles : info + modification ────────────────────────────────
const adminMiniMaps = new Map() // parcelId → L.map instance

function initAdminMinimaps(container) {
  adminMiniMaps.forEach(m => { try { m.remove() } catch (_) {} })
  adminMiniMaps.clear()

  container.querySelectorAll('.admin-minimap[data-parcel-id]').forEach(div => {
    const id      = div.dataset.parcelId
    const latlngs = JSON.parse(decodeURIComponent(div.dataset.latlngs || '%5B%5D'))
    const lat     = parseFloat(div.dataset.lat)
    const lng     = parseFloat(div.dataset.lng)

    const m = L.map(div, {
      zoomControl: false, attributionControl: false,
      dragging: false, touchZoom: false, scrollWheelZoom: false,
      doubleClickZoom: false, boxZoom: false, keyboard: false,
    })
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(m)

    if (latlngs.length >= 3) {
      const poly = L.polygon(latlngs, { color: 'white', weight: 1.5, fillColor: '#0172A4', fillOpacity: 0.35 }).addTo(m)
      m.fitBounds(poly.getBounds(), { padding: [4, 4] })
    } else {
      m.setView([lat, lng], 14)
      L.circleMarker([lat, lng], { radius: 5, color: 'white', fillColor: '#0172A4', fillOpacity: 1, weight: 1.5 }).addTo(m)
    }
    adminMiniMaps.set(id, m)
  })
}

function createParcelAdminTable(parcels) {
  const crops = [...new Set(plots.map(p => p.crop))].sort()
  const textures = [...new Set(plots.map(p => p.texture))].sort()
  const irrigationTypes = ["Pas d'irrigation","Pivot","Enrouleur","Rampe","Goutte à goutte","Goutte à goutte enterré","Micro aspersion","Couverture intégrale","Gravitaire"]

  let html = `
    <div id="bulk-bar" class="bulk-bar hidden">
      <span id="bulk-count"></span>
      <div class="bulk-actions">
        <button class="btn-secondary btn-sm" id="bulk-crop-btn"><i class="bi bi-flower1"></i> Modifier la culture</button>
        <button class="btn-secondary btn-sm" id="bulk-texture-btn"><i class="bi bi-layers"></i> Modifier la texture</button>
        <button class="btn-secondary btn-sm" id="bulk-env-btn"><i class="bi bi-droplet"></i> Modifier l'irrigation</button>
        <button class="btn-secondary btn-sm" id="bulk-integ-btn"><i class="bi bi-plug"></i> Activer une intégration</button>
        <button class="btn-secondary btn-sm" id="bulk-alert-btn"><i class="bi bi-bell"></i> Créer une alerte</button>
        <button class="btn-secondary btn-sm" id="bulk-member-btn"><i class="bi bi-person"></i> Associer à un membre</button>
        <button class="btn-secondary btn-sm" id="bulk-sensor-btn"><i class="bi bi-broadcast"></i> Lier un capteur</button>
        <button class="btn-secondary btn-sm" id="bulk-fav-btn"><i class="bi bi-star"></i> Ajouter aux favoris</button>
        <button class="btn-secondary btn-sm bulk-archive-btn" id="bulk-archive-btn"><i class="bi bi-archive"></i> Archiver</button>
        <button class="btn-secondary btn-sm bulk-danger-btn" id="bulk-delete-btn"><i class="bi bi-trash"></i> Supprimer</button>
        <button class="btn-secondary btn-sm" id="bulk-save-btn" style="color:var(--ok)"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    </div>
  `

  html += '<table id="parcel-admin-table"><thead><tr>'
  html += '<th><input type="checkbox" id="check-all-admin"></th>'
  html += '<th data-column="name">Parcelle</th>'
  html += '<th class="col-minimap">Contour</th>'
  html += '<th data-column="area">Surface (ha)</th>'
  html += '<th data-column="crop">Culture</th>'
  html += '<th data-column="texture">Texture de Sol</th>'
  html += '<th data-column="irrigation">Type d\'irrigation</th>'
  html += '<th data-column="sensors">Capteurs</th>'
  html += '<th data-column="integrations">Intégrations</th>'
  html += '<th data-column="membre">Membres</th>'
  html += '<th></th>'
  html += '</tr></thead><tbody>'

  parcels.forEach(parcel => {
    const parcelSensors = sensors.filter(s => s.parcelId === parcel.id)
    const integList = parcel.integrations || []
    const cityName = parcel.ville || parcel.city || ''

    const sensorsHtml = parcelSensors.length
      ? parcelSensors.map(s => `
          <div class="admin-item-row">
            <a href="capteur-detail.html?id=${s.id}" class="admin-link">${s.serial}</a>
            <button class="icon-btn remove-sensor-admin" data-sensor-id="${s.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
          </div>`).join('')
      : '<span class="tag-none">—</span>'

    const integHtml = integList.length
      ? integList.map(name => {
          const id = INTEGRATION_IDS[name]
          return `
            <div class="admin-item-row">
              ${id ? `<a href="integration-detail.html?id=${id}" class="admin-link">${name}</a>` : `<span class="admin-link">${name}</span>`}
              <button class="icon-btn remove-integ-admin" data-parcel-id="${parcel.id}" data-name="${encodeURIComponent(name)}" title="Retirer"><i class="bi bi-x-lg"></i></button>
            </div>`
        }).join('')
      : '<span class="tag-none">—</span>'

    const parcelMembers = members.filter(m => m.parcelIds.includes(parcel.id))
    const membreHtml = parcelMembers.length
      ? parcelMembers.map(m => `
          <div class="admin-item-row">
            <a href="membres.html" class="admin-link">${m.prenom} ${m.nom}</a>
            <button class="icon-btn remove-member-admin" data-member-id="${m.id}" data-parcel-id="${parcel.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
          </div>`).join('')
      : '<span class="tag-none">—</span>'

    html += `<tr>
      <td><input type="checkbox" class="parcel-admin-check" data-id="${parcel.id}"></td>
      <td>
        <a href="parcelle-detail.html?id=${parcel.id}" class="admin-link admin-link--name">${getPlotDisplayName(parcel)}</a>
        ${cityName ? `<div class="admin-city-name">${cityName}</div>` : ''}
      </td>
      <td class="col-minimap">${(!parcel.latlngs && parcel.id % 14 === 0)
        ? `<div class="point-parcel-cell"><i class="bi bi-geo-alt-fill"></i><span>Point GPS</span></div>`
        : `<div class="admin-minimap" data-parcel-id="${parcel.id}" data-latlngs="${encodeURIComponent(JSON.stringify(parcel.latlngs || []))}" data-lat="${parcel.lat}" data-lng="${parcel.lng}"></div>`
      }</td>
      <td class="num">${parcel.area}</td>
      <td>
        <select class="inline-edit" data-field="crop" data-id="${parcel.id}">
          ${crops.map(c => `<option value="${c}"${c === parcel.crop ? ' selected' : ''}>${c}</option>`).join('')}
        </select>
      </td>
      <td>
        <select class="inline-edit" data-field="texture" data-id="${parcel.id}">
          ${textures.map(t => `<option value="${t}"${t === parcel.texture ? ' selected' : ''}>${t}</option>`).join('')}
        </select>
      </td>
      <td>
        <select class="inline-edit" data-field="irrigation" data-id="${parcel.id}">
          ${irrigationTypes.map(v => `<option value="${v}"${v === (parcel.irrigation || "Pas d'irrigation") ? ' selected' : ''}>${v}</option>`).join('')}
        </select>
      </td>
      <td class="admin-links-cell">${sensorsHtml}</td>
      <td class="admin-links-cell">${integHtml}</td>
      <td>${membreHtml}</td>
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
  // Initialize satellite mini-maps
  setTimeout(() => initAdminMinimaps(container), 0)

  // Remove sensor from parcel
  container.querySelectorAll('.remove-sensor-admin').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const sensorId = parseInt(btn.dataset.sensorId)
      const sensor = sensors.find(s => s.id === sensorId)
      if (sensor) sensor.parcelId = null
      const { parcels } = getFilteredData()
      container.innerHTML = createParcelAdminTable(parcels)
      initParcelAdminTable(container)
    })
  })

  // Remove integration from parcel
  container.querySelectorAll('.remove-integ-admin').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const parcelId = parseInt(btn.dataset.parcelId)
      const name = decodeURIComponent(btn.dataset.name)
      const plot = plots.find(p => p.id === parcelId)
      if (plot) plot.integrations = (plot.integrations || []).filter(i => i !== name)
      const { parcels } = getFilteredData()
      container.innerHTML = createParcelAdminTable(parcels)
      initParcelAdminTable(container)
    })
  })

  // Remove member from parcel
  container.querySelectorAll('.remove-member-admin').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const memberId = parseInt(btn.dataset.memberId)
      const parcelId = parseInt(btn.dataset.parcelId)
      const member = members.find(m => m.id === memberId)
      if (member) member.parcelIds = (member.parcelIds || []).filter(id => id !== parcelId)
      const { parcels } = getFilteredData()
      container.innerHTML = createParcelAdminTable(parcels)
      initParcelAdminTable(container)
    })
  })

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

  // Modifier l'environnement
  container.querySelector('#bulk-env-btn')?.addEventListener('click', () => {
    const checked = getCheckedAdminIds(container)
    if (!checked.length) return
    const options = ["Pas d'irrigation", "Pivot", "Enrouleur", "Rampe", "Goutte à goutte", "Goutte à goutte enterré", "Micro aspersion", "Couverture intégrale", "Gravitaire"]
    const val = prompt(`Type d'irrigation pour ${checked.length} parcelle(s) :\n${options.join(', ')}`)
    if (val && options.includes(val)) {
      checked.forEach(id => {
        const plot = plots.find(p => p.id === id)
        if (plot) plot.irrigation = val
      })
      showToast(`Irrigation mise à jour pour ${checked.length} parcelle${checked.length > 1 ? 's' : ''}`)
      const { parcels } = getFilteredData()
      container.innerHTML = createParcelAdminTable(parcels)
      initParcelAdminTable(container)
    }
  })

  // Activer une intégration
  container.querySelector('#bulk-integ-btn')?.addEventListener('click', () => {
    const checked = getCheckedAdminIds(container)
    if (!checked.length) return
    const val = prompt(`Nom de l'intégration à activer :\n${INTEGRATION_NAMES.join(', ')}`)
    if (val && INTEGRATION_NAMES.includes(val)) {
      checked.forEach(id => {
        const plot = plots.find(p => p.id === id)
        if (plot) {
          if (!plot.integrations) plot.integrations = []
          if (!plot.integrations.includes(val)) plot.integrations.push(val)
        }
      })
      showToast(`Intégration "${val}" activée pour ${checked.length} parcelle${checked.length > 1 ? 's' : ''}`)
    }
  })

  // Créer une alerte
  container.querySelector('#bulk-alert-btn')?.addEventListener('click', () => {
    const checked = getCheckedAdminIds(container)
    if (!checked.length) return
    showToast(`Alerte créée pour ${checked.length} parcelle${checked.length > 1 ? 's' : ''}`)
  })

  // Associer à un membre
  container.querySelector('#bulk-member-btn')?.addEventListener('click', () => {
    const checked = getCheckedAdminIds(container)
    if (!checked.length) return
    const val = prompt(`Nom ou email du membre à associer :`)
    if (val?.trim()) {
      showToast(`${checked.length} parcelle${checked.length > 1 ? 's' : ''} associée${checked.length > 1 ? 's' : ''} à « ${val.trim()} »`)
    }
  })

  // Lier un capteur
  container.querySelector('#bulk-sensor-btn')?.addEventListener('click', () => {
    const checked = getCheckedAdminIds(container)
    if (!checked.length) return
    const val = prompt('N° de série du capteur à lier :')
    if (val?.trim()) {
      showToast(`Capteur « ${val.trim()} » lié à ${checked.length} parcelle${checked.length > 1 ? 's' : ''}`)
    }
  })

  // Ajouter aux favoris
  container.querySelector('#bulk-fav-btn')?.addEventListener('click', () => {
    const checked = getCheckedAdminIds(container)
    if (!checked.length) return
    checked.forEach(id => favoritePlotIds.add(id))
    saveFavorites()
    showToast(`${checked.length} parcelle${checked.length > 1 ? 's' : ''} ajoutée${checked.length > 1 ? 's' : ''} aux favoris`)
  })

  // Archiver
  container.querySelector('#bulk-archive-btn')?.addEventListener('click', () => {
    const checked = getCheckedAdminIds(container)
    if (!checked.length) return
    if (!confirm(`Archiver ${checked.length} parcelle${checked.length > 1 ? 's' : ''} ?`)) return
    showToast(`${checked.length} parcelle${checked.length > 1 ? 's' : ''} archivée${checked.length > 1 ? 's' : ''}`)
  })

  // Supprimer
  container.querySelector('#bulk-delete-btn')?.addEventListener('click', () => {
    const checked = getCheckedAdminIds(container)
    if (!checked.length) return
    if (!confirm(`Supprimer définitivement ${checked.length} parcelle${checked.length > 1 ? 's' : ''} ? Cette action est irréversible.`)) return
    checked.forEach(id => {
      const idx = plots.findIndex(p => p.id === id)
      if (idx !== -1) plots.splice(idx, 1)
    })
    showToast(`${checked.length} parcelle${checked.length > 1 ? 's' : ''} supprimée${checked.length > 1 ? 's' : ''}`)
    const { parcels } = getFilteredData()
    container.innerHTML = createParcelAdminTable(parcels)
    initParcelAdminTable(container)
  })

  container.querySelector('#bulk-save-btn')?.addEventListener('click', () => {
    showToast('Modifications enregistrées.')
  })
}

function getCheckedAdminIds(container) {
  return Array.from(container.querySelectorAll('.parcel-admin-check:checked')).map(cb => Number(cb.dataset.id))
}

function showToast(msg, duration = 3000) {
  let el = document.getElementById('app-toast')
  if (!el) {
    el = document.createElement('div')
    el.id = 'app-toast'
    el.className = 'toast'
    document.body.appendChild(el)
  }
  el.textContent = msg
  el.classList.add('show')
  clearTimeout(el._timer)
  el._timer = setTimeout(() => el.classList.remove('show'), duration)
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
