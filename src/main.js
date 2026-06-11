import './styles/main.css'
import { orgs } from './data/orgs.js'
import { plots } from './data/plots.js'
import { sensors } from './data/sensors.js'
import { members } from './data/members.js'
import { openExportModal } from './modules/export-modal.js'
import { applyStoredPlotPatches, getParcel } from './data/store.js'
import { ADHERENT_ORG_ID, ADMIN_ORG_ID, IRRIG_TYPES, SOIL_TYPES } from './data/constants.js'
import { IRRIG_SEASON } from './data/irrigations.js'
applyStoredPlotPatches(plots)

const _iconBase = import.meta.env.BASE_URL + 'icons/'
function envIcon(env) {
  if (env === 'serre')       return `<img src="${_iconBase}greenhouse.png" width="18" height="18" title="Serre" style="vertical-align:middle;opacity:.75">`
  if (env === 'plein champ') return `<img src="${_iconBase}fields.png"     width="18" height="18" title="Plein champ" style="vertical-align:middle;opacity:.75">`
  return ''
}
function textureDisplay(parcel) {
  if (parcel.substrate) return 'Substrat : ' + parcel.substrate
  return parcel.texture || 'Indéfini'
}
let currentRole = 'admin'
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
let selectedParcelNames = []
let selectedMemberNames = []
let filterMonSecteur = false
let filterMonFavoris = false

const MON_SECTEUR_DEPTS = new Set(["Ille-et-Vilaine", "Morbihan", "Côtes-d'Armor"])

const favoritePlotIds   = new Set(JSON.parse(localStorage.getItem('favPlots')   || '[1,3,5,8,12]'))
const favoriteSensorIds = new Set(JSON.parse(localStorage.getItem('favSensors') || '[1,4,7,10]'))
function saveFavorites() {
  localStorage.setItem('favPlots',   JSON.stringify([...favoritePlotIds]))
  localStorage.setItem('favSensors', JSON.stringify([...favoriteSensorIds]))
}

const PARCEL_OPTIONAL_COLS = [
  { key: 'texture',      label: 'Texture de sol' },
  { key: 'integrations', label: 'Intégrations activées' },
  { key: 'membres',      label: 'Membres liés' },
]
let hiddenParcelCols = (() => {
  try {
    const stored = localStorage.getItem('wnt-hidden-pcols')
    return stored ? new Set(JSON.parse(stored)) : new Set(['texture', 'integrations', 'membres'])
  } catch { return new Set(['texture', 'integrations', 'membres']) }
})()
function saveHiddenParcelCols() { localStorage.setItem('wnt-hidden-pcols', JSON.stringify([...hiddenParcelCols])) }
function syncColFilters() {
  const fdTexture = document.getElementById('fd-texture')
  const fdInteg   = document.getElementById('fd-integration')
  if (fdTexture) fdTexture.style.display = hiddenParcelCols.has('texture')      ? 'none' : ''
  if (fdInteg)   fdInteg.style.display   = hiddenParcelCols.has('integrations') ? 'none' : ''
}
let map
let markers = []
let _filteredSensors = []

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
  'T_GEL':     ['temp-seche', 'temp-humide', 'temp-rosee'],
  'W':         ['vent'],
  'PYRANO':    ['rayonnement'],
  'PAR':       ['par'],
  'LWS':       ['intensite-humectation', 'duree-humectation'],
  'CHP-15/30': ['potentiel-hydrique', 'temp-sol'],
  'CHP-30/60': ['potentiel-hydrique', 'temp-sol'],
  'CHP-60/90': ['potentiel-hydrique', 'temp-sol'],
  'CAPA-30-3': ['teneur-eau', 'temp-sol', 'rfu'],
  'CAPA-60-6': ['teneur-eau', 'temp-sol', 'rfu'],
  'SMV':       ['pluie', 'temp', 'humidite'],
  'EC':        ['conductivite'],
}

// Inversion MODEL_METRICS : metric → Set des modèles de capteurs qui la fournissent
const METRIC_SENSORS = (() => {
  const map = {}
  Object.entries(MODEL_METRICS).forEach(([model, metrics]) => {
    metrics.forEach(m => { if (!map[m]) map[m] = new Set(); map[m].add(model) })
  })
  return map
})()

// Métriques calculées sans capteur (disponibles sur toutes les parcelles)
const ALWAYS_COMPUTED_METRICS = new Set(['etp', 'irrigations'])

// Profondeurs de mesure par modèle (pour l'affichage multi-horizon)
const SENSOR_DEPTHS = {
  'CHP-15/30': ['15 cm', '30 cm'],
  'CHP-30/60': ['30 cm', '60 cm'],
  'CHP-60/90': ['60 cm', '90 cm'],
  'CAPA-30-3': ['10 cm', '20 cm', '30 cm'],
  'CAPA-60-6': ['10 cm', '20 cm', '30 cm', '40 cm', '50 cm', '60 cm'],
}
const MULTI_HORIZON_METRICS = new Set(['potentiel-hydrique', 'teneur-eau', 'temp-sol'])

function parcelHasMetric(parcel, metric) {
  if (metric === 'voir-tout') return true
  if (ALWAYS_COMPUTED_METRICS.has(metric)) return true
  const needed = METRIC_SENSORS[metric]
  if (!needed) return false
  return _filteredSensors.some(s => s.parcelIds.includes(parcel.id) && needed.has(s.model))
}

// Comme parcelHasMetric mais traite irrigations=0 comme "pas de données"
const PLUIE_FORECAST_AGGS = new Set(['today', 'demain', '7j-futur'])
function parcelHasDisplayData(parcel, metric) {
  if (metric === 'irrigations') return IRRIG_SEASON.some(i => i.plotId === parcel.id)
  if (metric === 'pluie' && PLUIE_FORECAST_AGGS.has(currentAggregate)) return true
  return parcelHasMetric(parcel, metric)
}

// Labels de toutes les métriques (ordre d'affichage dans le sélecteur)
const METRIC_LABELS = {
  'pluie':                  'Pluie',
  'temp':                   'Température',
  'humidite':               'Humidité',
  'vent':                   'Vent',
  'etp':                    'Évapotranspiration',
  'rayonnement':            'Rayonnement solaire',
  'potentiel-hydrique':     'Potentiel hydrique',
  'teneur-eau':             'Teneur en eau du sol',
  'conductivite':           'Électro-conductivité',
  'temp-sol':               'Température du sol',
  'rfu':                    'Réservoir',
  'irrigations':            'Irrigations',
  'intensite-humectation':  "Intensité d'humectation foliaire",
  'duree-humectation':      "Durée d'humectation foliaire",
  'temp-humide':            'Température humide',
  'temp-seche':             'Température sèche',
  'temp-rosee':             'Température de rosée',
  'par':                    'Rayonnement PAR',
}

const metricAggregates = {
  pluie: [
    { value: '1an',      label: '365 derniers jours' },
    { value: '30jours',  label: '30 derniers jours' },
    { value: '7jours',   label: '7 derniers jours' },
    { value: 'yesterday', label: 'Hier' },
    { value: 'today',    label: "Aujourd'hui (prév.)" },
    { value: 'demain',   label: 'Demain' },
    { value: '7j-futur', label: '7 prochains jours' }
    
    
    
    
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
    { value: 'today', label: "Aujourd'hui" },
    { value: '7jours', label: '7 jours' },
    { value: '30jours', label: '30 jours' }
  ],
  'temp-sol': [
    { value: 'reel', label: 'Temps réel' },
    { value: 'min-jour', label: 'Min du jour' },
    { value: 'max-jour', label: 'Max du jour' },
    { value: 'moyenne-7', label: 'Moyenne 7 jours' },
    { value: 'moyenne-30', label: 'Moyenne 30 jours' }
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
  ],
  'irrigations': [
    { value: '7jours',   label: '7 derniers jours' },
    { value: '30jours',  label: '30 derniers jours' },
    { value: 'saison',   label: 'Cette saison' },
    { value: 'planif7j', label: 'Planifié 7 jours' },
  ],
  'etp': [
    { value: 'today',   label: "Aujourd'hui" },
    { value: '7jours',  label: '7 jours' },
    { value: '30jours', label: '30 jours' },
  ],
  'rfu': [
    { value: 'reel', label: 'Temps réel' },
  ],
  'temp-rosee': [
    { value: 'reel',      label: 'Temps réel' },
    { value: 'min-jour',  label: 'Min du jour' },
    { value: 'max-jour',  label: 'Max du jour' },
  ],
  'par': [
    { value: 'reel',   label: 'Temps réel' },
    { value: 'today',  label: "Aujourd'hui (cumul)" },
    { value: '7jours', label: '7 jours (cumul)' },
  ],
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
  syncColFilters()
  initMap()
  initExportButton()
  initSelectionListeners()
  window.addEventListener('irrig-updated', updateContent)
  updateView()
})

// Navigation
function initNavigation() {
  document.querySelectorAll('.nav-section').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSection = btn.dataset.section
      updateNavigation()
      updateFiltersVisibility()
      rebuildCultureFilter()
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
    rebuildCultureFilter()
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
  updateFiltersVisibility()
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
    const allLabel = `<label class="filter-all-label"><input type="checkbox" class="cb-all-generic"> Tous</label>`
    panel.innerHTML = searchHtml + allLabel + `<div class="filter-items">${buildItems(values)}</div>`

    const cbAll = panel.querySelector('.cb-all-generic')

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

    cbAll?.addEventListener('change', () => {
      panel.querySelectorAll('.filter-items input[type=checkbox]').forEach(cb => { cb.checked = cbAll.checked })
      const checked = cbAll.checked ? values : []
      stateRef.set(checked)
      updateBadge(badgeId, checked.length)
      updateContent()
    })
  }

  function bindCheckboxes() {
    const cbs = panel.querySelectorAll('.filter-items input[type=checkbox]')
    const cbAll = panel.querySelector('.cb-all-generic')
    cbs.forEach(cb => {
      cb.addEventListener('change', () => {
        const checked = Array.from(cbs).filter(c => c.checked).map(i => i.value)
        if (cbAll) cbAll.checked = checked.length === (values?.length || 0)
        stateRef.set(checked)
        updateBadge(badgeId, checked.length)
        updateContent()
      })
    })
  }
  bindCheckboxes()
}

function rebuildCultureFilter() {
  let sourcePlots
  if (currentSection === 'reseau') {
    sourcePlots = plots
  } else {
    const orgId = currentRole === 'admin' ? ADMIN_ORG_ID : ADHERENT_ORG_ID
    sourcePlots = plots.filter(p => p.orgId === orgId)
  }
  const cultures = [...new Set(sourcePlots.map(p => p.crop).filter(Boolean))].sort()
  selectedCultures = []
  updateBadge('badge-culture', 0)
  makeCheckboxPanel('panel-culture', cultures,
    { set: v => { selectedCultures = v } }, 'badge-culture', true)
}

function populateFilterDropdowns() {
  rebuildCultureFilter()

  makeCheckboxPanel('panel-irrigation', null,
    { set: v => { selectedIrrigations = v } }, 'badge-irrigation')

  makeCheckboxPanel('panel-etat-hydrique', null,
    { set: v => { selectedEtatsHydriques = v } }, 'badge-etat-hydrique')

  makeCheckboxPanel('panel-texture', SOIL_TYPES,
    { set: v => { selectedTextures = v } }, 'badge-texture')

  makeCheckboxPanel('panel-integration', INTEGRATION_NAMES.sort(),
    { set: v => { selectedIntegrations = v } }, 'badge-integration', true)

  // Capteurs filters (capteurs.html uses checkbox dropdowns too)
  const allModels = ['P', 'PT', 'P+', 'SMV', 'CHP-15/30', 'CHP-30/60', 'CHP-60/90', 'CAPA-30-3', 'CAPA-60-6', 'TH', 'T_MINI', 'T_GEL', 'W', 'PYRANO', 'PAR', 'LWS', 'EC']
  makeCheckboxPanel('panel-model', allModels,
    { set: v => { selectedModels = v } }, 'badge-model')
  makeCheckboxPanel('panel-event', null,
    { set: v => { selectedEvents = v } }, 'badge-event')
  makeCheckboxPanel('panel-telecom', null,
    { set: v => { selectedTelecoms = v } }, 'badge-telecom')

  // Org panel for capteurs (network-only) — with search and "Tous"
  const panelOrg = document.getElementById('panel-org')
  if (panelOrg) {
    const orgValues = orgs.map(o => ({ id: o.id, name: o.name }))

    function buildOrgItems(list) {
      return list.map(o => `<label><input type="checkbox" value="${o.id}"${selectedOrgs.includes(o.id) ? ' checked' : ''}> ${o.name}</label>`).join('')
    }

    panelOrg.innerHTML = `
      <input type="text" class="filter-search" placeholder="Rechercher une exploitation…" autocomplete="off">
      <label class="filter-all-label"><input type="checkbox" class="cb-all-org"> Toutes</label>
      <div class="filter-items">${buildOrgItems(orgValues)}</div>
    `

    const searchInput = panelOrg.querySelector('.filter-search')
    const itemsEl = panelOrg.querySelector('.filter-items')
    const cbAllOrg = panelOrg.querySelector('.cb-all-org')

    function bindOrgCheckboxes() {
      itemsEl.querySelectorAll('input[type=checkbox]').forEach(cb => {
        cb.addEventListener('change', () => {
          selectedOrgs = Array.from(itemsEl.querySelectorAll('input:checked')).map(i => Number(i.value))
          cbAllOrg.checked = selectedOrgs.length === orgs.length
          updateBadge('badge-org', selectedOrgs.length)
          updateContent()
        })
      })
    }
    bindOrgCheckboxes()

    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase()
      const filtered = orgValues.filter(o => o.name.toLowerCase().includes(q))
      itemsEl.innerHTML = buildOrgItems(filtered)
      bindOrgCheckboxes()
    })

    cbAllOrg.addEventListener('change', () => {
      itemsEl.querySelectorAll('input[type=checkbox]').forEach(cb => { cb.checked = cbAllOrg.checked })
      selectedOrgs = cbAllOrg.checked ? orgs.map(o => o.id) : []
      updateBadge('badge-org', selectedOrgs.length)
      updateContent()
    })
  }

  // Ville panel for capteurs (network-only)
  const allVilles = [...new Set(orgs.map(o => o.ville).filter(Boolean))].sort()
  makeCheckboxPanel('panel-ville', allVilles,
    { set: v => { selectedVilles = v } }, 'badge-ville', false)

  // Parcelle panel for capteurs
  const panelParcel = document.getElementById('panel-parcel-filter')
  if (panelParcel) {
    const allParcels = plots.map(p => p.name).sort()
    makeCheckboxPanel('panel-parcel-filter', allParcels,
      { set: v => { selectedParcelNames = v; updateContent() } }, 'badge-parcel-filter', true)
  }

  // Membre panel for capteurs
  const panelMember = document.getElementById('panel-member-filter')
  if (panelMember) {
    const allMemberNames = members.map(m => `${m.prenom} ${m.nom}`).sort()
    makeCheckboxPanel('panel-member-filter', allMemberNames,
      { set: v => { selectedMemberNames = v; updateContent() } }, 'badge-member-filter', true)
  }
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
      document.querySelectorAll('.filter-dropdown.open').forEach(d => d.classList.remove('open'))
      if (!isOpen) dropdown.classList.add('open')
    })
  })
  // Clic dans le panel (input search, checkboxes…) ne doit pas fermer le dropdown
  document.querySelectorAll('.filter-dropdown-panel').forEach(panel => {
    panel.addEventListener('click', e => e.stopPropagation())
  })
  document.addEventListener('click', () => {
    document.querySelectorAll('.filter-dropdown.open').forEach(d => d.classList.remove('open'))
  })
}

function updateAggregateOptions() {
  const aggregateSelect = document.getElementById('aggregate-selector')
  const aggregateGroup  = aggregateSelect?.closest('.control-group')
  if (!aggregateSelect) return

  if (currentMetric === 'voir-tout') {
    if (aggregateGroup) aggregateGroup.style.display = 'none'
    return
  }
  if (aggregateGroup) aggregateGroup.style.display = ''

  const options = metricAggregates[currentMetric] || []
  aggregateSelect.innerHTML = options.map(opt => `<option value="${opt.value}"${opt.disabled ? ' disabled' : ''}>${opt.label}</option>`).join('')
  const validOpts = options.filter(o => !o.disabled)
  if (!validOpts.some(opt => opt.value === currentAggregate)) {
    currentAggregate = validOpts[0]?.value || ''
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

  // Vue admin : cachée uniquement pour l'adhérent sur la section réseau
  // (il peut administrer sa propre exploitation, pas les capteurs du réseau)
  const adminViewBtn = document.querySelector('.view-btn[data-view="admin"]')
  if (adminViewBtn) {
    const canSeeAdmin = currentRole === 'admin' || currentSection === 'exploitation'
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
      filteredParcels = plots.filter(p => filteredSensors.some(s => s.parcelIds.includes(p.id)))
    } else {
      // Adhérent Mon exploitation : son org uniquement
      filteredParcels = plots.filter(p => p.orgId === ADHERENT_ORG_ID)
      filteredSensors = sensors.filter(s =>
        filteredParcels.some(p => s.parcelIds.includes(p.id)) ||
        (!s.parcelIds.length && s.orgId === ADHERENT_ORG_ID)
      )
    }
  } else {
    // Admin réseau
    if (currentSection === 'reseau') {
      // Admin Mon réseau : tout le réseau
      filteredParcels = plots
      filteredSensors = sensors
    } else {
      // Admin Mon exploitation : org 100 (Breiz'Agri Conseil)
      // Pas de parcelles propres — uniquement les SMV sans parcelle
      filteredParcels = plots.filter(p => p.orgId === ADMIN_ORG_ID)
      filteredSensors = sensors.filter(s => s.orgId === ADMIN_ORG_ID)
    }
  }

  // Apply multi-select filters
  if (selectedCultures.length > 0) {
    filteredParcels = filteredParcels.filter(p => selectedCultures.includes(p.crop))
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => s.parcelIds.includes(p.id)))
  }

  if (selectedIrrigations.length > 0) {
    filteredParcels = filteredParcels.filter(p => selectedIrrigations.includes(p.irrigation))
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => s.parcelIds.includes(p.id)))
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
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => s.parcelIds.includes(p.id)))
  }

  if (selectedTextures.length > 0) {
    filteredParcels = filteredParcels.filter(p => selectedTextures.includes(p.texture))
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => s.parcelIds.includes(p.id)))
  }

  if (selectedIntegrations.length > 0) {
    filteredParcels = filteredParcels.filter(p =>
      selectedIntegrations.some(integ => (p.integrations || []).includes(integ))
    )
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => s.parcelIds.includes(p.id)))
  }

  const orgEl = document.getElementById('org-filter')
  const org = orgEl ? orgEl.value : ''
  if (org) {
    filteredParcels = filteredParcels.filter(p => p.orgId == org)
    filteredSensors = filteredSensors.filter(s => filteredParcels.some(p => s.parcelIds.includes(p.id)))
  }

  const modelEl = document.getElementById('model-filter')
  const model = modelEl ? modelEl.value : ''
  if (model) {
    filteredSensors = filteredSensors.filter(s => s.model === model)
  }

  if (selectedModels.length > 0) {
    filteredSensors = filteredSensors.filter(s => selectedModels.includes(s.model))
    filteredParcels = filteredParcels.filter(p => filteredSensors.some(s => s.parcelIds.includes(p.id)))
  }

  if (selectedEvents.length > 0) {
    filteredSensors = filteredSensors.filter(s => selectedEvents.includes(s.event))
    filteredParcels = filteredParcels.filter(p => filteredSensors.some(s => s.parcelIds.includes(p.id)))
  }

  if (selectedTelecoms.length > 0) {
    filteredSensors = filteredSensors.filter(s => selectedTelecoms.includes(s.telecom))
    filteredParcels = filteredParcels.filter(p => filteredSensors.some(s => s.parcelIds.includes(p.id)))
  }

  // Legacy simple selects (capteurs-reseau only)
  const eventEl = document.getElementById('event-filter')
  const eventVal = eventEl ? eventEl.value : ''
  if (eventVal) filteredSensors = filteredSensors.filter(s => s.event === eventVal)

  const telecomEl = document.getElementById('telecom-filter')
  const telecomVal = telecomEl ? telecomEl.value : ''
  if (telecomVal) filteredSensors = filteredSensors.filter(s => s.telecom === telecomVal)

  if (filterMonSecteur) {
    const currentUser = currentRole === 'adherent'
      ? members.find(m => m.id === 31)
      : members.find(m => m.id === 1)
    const myParcelIds = new Set(currentUser?.parcelIds || [])
    filteredParcels = filteredParcels.filter(p => myParcelIds.has(p.id))
    filteredSensors = filteredSensors.filter(s => s.parcelIds.some(pid => myParcelIds.has(pid)))
  }

  if (filterMonFavoris) {
    filteredParcels = filteredParcels.filter(p => favoritePlotIds.has(p.id))
    filteredSensors = filteredSensors.filter(s => favoriteSensorIds.has(s.id))
  }

  if (selectedOrgs.length > 0) {
    filteredSensors = filteredSensors.filter(s => {
      const parcel = plots.find(p => s.parcelIds.includes(p.id))
      return selectedOrgs.includes(parcel ? parcel.orgId : s.orgId)
    })
    filteredParcels = filteredParcels.filter(p => selectedOrgs.includes(p.orgId))
  }

  if (selectedVilles.length > 0) {
    const villeOrgIds = new Set(orgs.filter(o => selectedVilles.includes(o.ville)).map(o => o.id))
    filteredSensors = filteredSensors.filter(s => {
      const parcel = plots.find(p => s.parcelIds.includes(p.id))
      return villeOrgIds.has(parcel ? parcel.orgId : s.orgId)
    })
    filteredParcels = filteredParcels.filter(p => villeOrgIds.has(p.orgId))
  }

  if (selectedParcelNames.length > 0) {
    const parcelIds = new Set(plots.filter(p => selectedParcelNames.includes(p.name)).map(p => p.id))
    filteredSensors = filteredSensors.filter(s => s.parcelIds.some(id => parcelIds.has(id)))
    filteredParcels = filteredParcels.filter(p => parcelIds.has(p.id))
  }

  if (selectedMemberNames.length > 0) {
    const memberParcelIds = new Set(
      members.filter(m => selectedMemberNames.includes(`${m.prenom} ${m.nom}`))
        .flatMap(m => m.parcelIds)
    )
    filteredSensors = filteredSensors.filter(s => s.parcelIds.some(id => memberParcelIds.has(id)))
    filteredParcels = filteredParcels.filter(p => memberParcelIds.has(p.id))
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

  const sensorList = pageType.startsWith('parcelles')
    ? filteredSensors.filter(s => filteredParcels.some(p => s.parcelIds.includes(p.id)))
    : filteredSensors

  let available = getAvailableMetrics(sensorList)

  if (pageType.startsWith('parcelles')) {
    const alwaysOn = ['etp', 'irrigations', 'pluie']
    alwaysOn.forEach(m => { if (!available.includes(m)) available.push(m) })
  }

  sel.innerHTML = `<option value="voir-tout">Voir tout</option>` +
    available.map(m => `<option value="${m}">${METRIC_LABELS[m]}</option>`).join('')

  if (currentMetric !== 'voir-tout' && !available.includes(currentMetric)) {
    currentMetric = available[0] || 'pluie'
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
  _filteredSensors = filteredSensors

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
      let _tooltipHtml
      if (currentMetric === 'irrigations') {
        const _volMax = getParcel(parcel.id).volumeMaxM3 ?? null
        const _areaHa = parcel.area ?? 0
        const _realMm = IRRIG_SEASON.filter(i => i.plotId === parcel.id && i.real).reduce((s,i) => s+i.mm, 0)
        const _planMm = IRRIG_SEASON.filter(i => i.plotId === parcel.id && !i.real).reduce((s,i) => s+i.mm, 0)
        const _realM3 = Math.round(_realMm * _areaHa * 10)
        const _planM3 = Math.round(_planMm * _areaHa * 10)
        const _fmtV = v => v.toLocaleString('fr-FR') + ' m³'
        let _volLine = ''
        if (_volMax) {
          const _pR = Math.min(100, Math.round(_realM3 / _volMax * 100))
          const _pP = Math.min(100 - _pR, Math.round(_planM3 / _volMax * 100))
          _volLine = `Volume limité : ${_fmtV(_volMax)}<br><div style="width:140px;height:7px;border-radius:4px;background:#b8b8b8;margin:4px 0;position:relative;overflow:hidden;display:flex"><div style="width:${_pR}%;background:#E07820;height:100%"></div><div style="width:${_pP}%;background:#FFB705;height:100%"></div></div>`
        }
        _tooltipHtml = `<strong>${parcel.name}</strong><br>${_volLine}Effectué : ${_realMm} mm (${_fmtV(_realM3)})<br>Planifié : ${_planMm} mm (${_fmtV(_planM3)})${parcel.crop ? `<br>Culture : ${parcel.crop}` : ''}<br>Superficie : ${parcel.area} ha`
      } else {
        _tooltipHtml = `<strong>${parcel.name}</strong><br>${getMetricTooltipValue(parcel)}${parcel.crop ? `<br>Culture: ${parcel.crop}` : ''}<br>Superficie: ${parcel.area} ha`
      }
      layer.bindTooltip(_tooltipHtml, { sticky: true, direction: 'top', opacity: 0.95 })
      if (currentMetric !== 'voir-tout') {
        const _tc = getMetricColor(parcel, currentMetric)
        layer.on('tooltipopen', e => {
          const el = e.tooltip.getElement(); if (!el) return
          el.style.setProperty('background', _tc, 'important')
          el.style.setProperty('color', contrastColor(_tc), 'important')
          el.style.setProperty('border-color', _tc, 'important')
        })
      }
      layer.on('click', () => { window.location.href = `parcelle-detail.html?id=${parcel.id}` })
      layer.addTo(map)
      markers.push(layer)

      // Permanent value label at polygon centroid — only when parcel has sensor for metric
      const labelLat = parcel.lat || (parcel.latlngs ? parcel.latlngs.reduce((s, p) => s + p[0], 0) / parcel.latlngs.length : null)
      const labelLng = parcel.lng || (parcel.latlngs ? parcel.latlngs.reduce((s, p) => s + p[1], 0) / parcel.latlngs.length : null)
      if (labelLat && labelLng) {
        const hasData = currentMetric !== 'voir-tout' && parcelHasDisplayData(parcel, currentMetric)
        const parcelAnomaly = sensors.filter(s => s.parcelIds.includes(parcel.id)).some(s => s.event && (Array.isArray(s.event) ? s.event.length > 0 : true))
        const anomalyDot = parcelAnomaly ? '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;border:1px solid rgba(255,255,255,0.8);margin-right:4px;vertical-align:middle;margin-bottom:1px"></span>' : ''
        const badgeHtml = currentMetric === 'voir-tout'
          ? (parcelAnomaly ? `<div class="map-value-badge" style="background:#ff3b30;color:#fff;border-color:#ff3b30">${anomalyDot}⚠</div>` : '')
          : hasData
            ? (() => {
                const value = computeMetricValue(parcel, currentMetric, currentAggregate)
                const color = getMetricColor(parcel, currentMetric)
                const tc = contrastColor(color)
                return `<div class="map-value-badge" style="background:${color};color:${tc};border-color:${tc}">${anomalyDot}${fmtMetricValue(value, currentMetric)}</div>`
              })()
            : `<div class="map-value-badge map-value-badge--na">${anomalyDot}—</div>`
        const label = L.marker([labelLat, labelLng], {
          icon: L.divIcon({ className: '', html: badgeHtml, iconSize: [0, 0], iconAnchor: [0, 0] }),
          interactive: hasData,
        }).addTo(map)
        if (hasData) label.on('click', () => { window.location.href = `parcelle-detail.html?id=${parcel.id}` })
        markers.push(label)
      }
    })
  } else {

    if (currentView === 'map') {
      filteredSensors.forEach(sensor => {
        const parcel = plots.find(p => sensor.parcelIds.includes(p.id))
        if (!parcel) return

        const sensorVal = computeSensorValue(sensor, currentMetric, currentAggregate)
        const eventStr = sensor.event ? `<br><span style="color:var(--warn)">⚠ ${sensor.event}</span>` : ''
        const valLine = sensorVal ? `<br>${sensorVal[0]} ${sensorVal[1]}` : ''

        const circle = L.circleMarker([parcel.lat, parcel.lng], {
          radius: 9, color: '#666', fillColor: '#fff', fillOpacity: 1, weight: 1.5
        }).addTo(map)
        const displayName = getSensorDisplayName(sensor)
        const nameStr = displayName !== sensor.serial ? `${displayName}<br><span style="font-weight:400;color:#636366">${sensor.serial} · ${sensor.model}</span>` : `<strong>${sensor.serial} · ${sensor.model}</strong>`
        const _sc = sensorVal ? colorForMetric(currentMetric, parseFloat(sensorVal[0])) : '#0172A4'
        circle.bindTooltip(
          `${nameStr}${valLine}<br>Signal: ${sensor.networkQuality}%${eventStr}`,
          { sticky: true, opacity: 0.95 }
        )
        if (sensorVal) {
          circle.on('tooltipopen', e => {
            const el = e.tooltip.getElement(); if (!el) return
            el.style.setProperty('background', _sc, 'important')
            el.style.setProperty('color', contrastColor(_sc), 'important')
            el.style.setProperty('border-color', _sc, 'important')
          })
        }
        circle.on('click', () => { window.location.href = `capteur-detail.html?id=${sensor.id}` })
        markers.push(circle)

        if (sensor.event && (Array.isArray(sensor.event) ? sensor.event.length > 0 : true)) {
          const dot = L.marker([parcel.lat, parcel.lng], {
            icon: L.divIcon({ className: '', html: '<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>', iconSize: [0,0], iconAnchor: [0,0] }),
            interactive: false, zIndexOffset: 500,
          }).addTo(map)
          markers.push(dot)
        }

        if (sensorVal) {
          const valText = `${sensorVal[0]} ${sensorVal[1]}`
          const hasEv = sensor.event && (Array.isArray(sensor.event) ? sensor.event.length > 0 : true)
          const label = L.marker([parcel.lat, parcel.lng], {
            icon: L.divIcon({
              className: '',
              html: `<div class="map-value-badge" style="background:${_sc};color:${contrastColor(_sc)};border-color:${contrastColor(_sc)};transform:translate(-50%,calc(-100% - 8px))">${hasEv ? '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;border:1px solid rgba(255,255,255,0.8);margin-right:4px;vertical-align:middle;margin-bottom:1px"></span>' : ''}${valText}</div>`,
              iconSize: [0, 0],
              iconAnchor: [0, 0],
            }),
            interactive: true,
          }).addTo(map)
          label.on('click', () => { window.location.href = `capteur-detail.html?id=${sensor.id}` })
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
      map.fitBounds(bounds.pad(0.15), { maxZoom: isCapteurPage ? 13 : 14 })
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
      radius: 9, color: '#ffffff', fillColor: '#0172A4', fillOpacity: 0.85, weight: 2
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

function computeHorizonValues(parcel, metric, aggregate) {
  if (!MULTI_HORIZON_METRICS.has(metric)) return null
  const linkedSensors = _filteredSensors.filter(s =>
    s.parcelIds.includes(parcel.id) && (MODEL_METRICS[s.model] || []).includes(metric)
  )
  const allDepths = []
  linkedSensors.forEach(s => {
    const depths = SENSOR_DEPTHS[s.model]
    if (!depths) return
    const base = computeMetricValue(parcel, metric, aggregate)
    depths.forEach((depth, i) => {
      const noise = Math.round(Math.sin(parcel.id * 1.3 + s.id * 2.7 + i * 5.1) * 8)
      allDepths.push({ depth, value: Math.max(0, base + noise) })
    })
  })
  return allDepths.length >= 2 ? allDepths : null
}

function getMetricTooltipValue(parcel) {
  if (currentMetric === 'voir-tout') return ''
  if (!parcelHasDisplayData(parcel, currentMetric)) return 'Donnée non disponible'
  const horizons = computeHorizonValues(parcel, currentMetric, currentAggregate)
  if (horizons) {
    const unit = getMetricUnit(currentMetric)
    const label = getAggregateLabel(currentAggregate)
    return `${label} :<br>` + horizons.map(h => `${h.value}${unit ? ' ' + unit : ''} @ ${h.depth}`).join('<br>')
  }
  const value = computeMetricValue(parcel, currentMetric, currentAggregate)
  return `${getAggregateLabel(currentAggregate)} : ${fmtMetricValue(value, currentMetric)}`
}

function computeMetricValue(parcel, metric, aggregate) {
  const noise = Math.round((Math.sin(parcel.id * 1.3 + aggregate.length * 2) * 3))
  const dj = parcel.degresJour || parcel.id * 12
  if (metric === 'pluie') {
    const base = Math.max(3, Math.round(parcel.area * 1.8 + parcel.reserveHydrique / 8))
    switch (aggregate) {
      case 'today':    return Math.max(0, base + noise - 2)
      case 'demain':   return Math.max(0, Math.round(base * 0.85 + noise))
      case '7j-futur': return Math.max(0, base * 4 + noise * 2)
      case 'yesterday': return Math.max(0, base + noise - 1)
      case '7jours':   return Math.max(0, base * 3 + noise * 2)
      case '30jours':  return Math.max(0, base * 12 + noise * 3)
      case '1an':      return Math.max(0, base * 45 + noise * 4)
      default: return base
    }
  }

  if (metric === 'temp') {
    const base = 10 + dj / 140
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
    const base = 150 + dj / 5
    switch (aggregate) {
      case 'reel': return Math.round(base + noise * 15)
      case 'today': return Math.round(base * 3 + noise * 50)
      case '7jours': return Math.round(base * 18 + noise * 80)
      default: return Math.round(base)
    }
  }


  if (metric === 'temp-sol') {
    const base = Math.round(8 + dj / 160)
    switch (aggregate) {
      case 'reel': return base + noise
      case 'min-jour': return base - 3 + noise
      case 'max-jour': return base + 4 + noise
      case 'moyenne-7': return base + 1 + noise * 0.3
      default: return base
    }
  }

  if (metric === 'temp-seche') {
    const base = Math.round(-1 + dj / 300)
    switch (aggregate) {
      case 'reel': return base + noise
      case 'min-jour': return base - 2 + noise
      case 'max-jour': return base + 3 + noise
      default: return base
    }
  }

  if (metric === 'temp-humide') {
    const base = Math.round(-3 + dj / 320)
    switch (aggregate) {
      case 'reel': return base + noise
      case 'min-jour': return base - 2 + noise
      case 'max-jour': return base + 2 + noise
      default: return base
    }
  }

  if (metric === 'potentiel-hydrique') {
    // kPa : 0 = saturé, 200 = très sec
    const base = Math.round(Math.max(0, Math.min(200, 10 + (100 - parcel.reserveHydrique) * 1.8 + (parcel.id % 20))))
    switch (aggregate) {
      case 'reel': return Math.max(0, Math.min(200, base + noise * 3))
      case 'min-jour': return Math.max(0, base - 15)
      case 'max-jour': return Math.min(200, base + 20)
      case 'moyenne-7': return Math.max(0, Math.min(200, base - 5 + noise * 2))
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

  if (metric === 'irrigations') {
    const pid   = parcel.id
    const today = new Date().toISOString().split('T')[0]
    const ago = days => { const d = new Date(); d.setDate(d.getDate() - days); return d.toISOString().split('T')[0] }
    const ahead = days => { const d = new Date(); d.setDate(d.getDate() + days); return d.toISOString().split('T')[0] }
    switch (aggregate) {
      case '7jours':   return IRRIG_SEASON.filter(i =>  i.real && i.plotId === pid && i.iso >= ago(7)).reduce((s, i) => s + i.mm, 0)
      case '30jours':  return IRRIG_SEASON.filter(i =>  i.real && i.plotId === pid && i.iso >= ago(30)).reduce((s, i) => s + i.mm, 0)
      case 'saison':   return IRRIG_SEASON.filter(i =>  i.real && i.plotId === pid).reduce((s, i) => s + i.mm, 0)
      case 'planif7j': return IRRIG_SEASON.filter(i => !i.real && i.plotId === pid && i.iso >= today && i.iso <= ahead(7)).reduce((s, i) => s + i.mm, 0)
      default:         return IRRIG_SEASON.filter(i =>  i.real && i.plotId === pid).reduce((s, i) => s + i.mm, 0)
    }
  }

  if (metric === 'etp') {
    const base = +(2 + dj / 500).toFixed(1)
    switch (aggregate) {
      case 'today':   return +Math.max(0, base + noise * 0.1).toFixed(1)
      case '7jours':  return +Math.max(0, base * 6 + noise * 0.3).toFixed(1)
      case '30jours': return +Math.max(0, base * 25 + noise).toFixed(1)
      default: return base
    }
  }

  if (metric === 'rfu') {
    return Math.max(0, Math.min(100, Math.round(parcel.reserveHydrique * 0.8 + noise * 2)))
  }

  if (metric === 'temp-rosee') {
    const base = Math.round(-2 + dj / 350)
    switch (aggregate) {
      case 'reel':     return base + noise
      case 'min-jour': return base - 3 + noise
      case 'max-jour': return base + 2 + noise
      default: return base
    }
  }

  if (metric === 'par') {
    const base = Math.round(300 + dj / 8)
    switch (aggregate) {
      case 'reel':   return Math.max(0, Math.round(base + noise * 30))
      case 'today':  return Math.max(0, Math.round(base * 8 + noise * 100))
      case '7jours': return Math.max(0, Math.round(base * 50 + noise * 300))
      default: return Math.max(0, Math.round(base))
    }
  }

  return parcel.reserveHydrique
}

function getAggregateLabel(aggregate) {
  const labels = {
    today: "Aujourd'hui",
    demain: 'Demain',
    '7j-futur': '7 prochains jours',
    yesterday: 'Hier',
    '7jours': '7 jours',
    '30jours': '30 jours',
    '1an': '1 an',
    reel: 'Temps réel',
    'min-jour': 'Min du jour',
    'max-jour': 'Max du jour',
    'moyenne-7': 'Moyenne 7 jours',
    'moyenne-30': 'Moyenne 30 jours',
    'saison': 'Cette saison',
    'planif7j': 'Planifié 7 j.',
  }
  return labels[aggregate] || aggregate
}

function getMetricUnit(metric) {
  if (metric === 'pluie') return 'mm'
  if (metric === 'temp') return '°C'
  if (metric === 'humidite') return '%'
  if (metric === 'etat-hydrique') return 'mm'
  if (metric === 'etp') return 'mm'
  if (metric === 'irrigations') return 'mm'
  if (metric === 'ru') return '%'
  if (metric === 'rfu') return 'mm'
  if (metric === 'vent') return 'km/h'
  if (metric === 'rayonnement') return 'W/m²'
  if (metric === 'par') return 'µmol/m²/s'
  if (metric === 'temp-sol') return '°C'
  if (metric === 'temp-seche') return '°C'
  if (metric === 'temp-humide') return '°C'
  if (metric === 'temp-rosee') return '°C'
  if (metric === 'intensite-humectation') return '%'
  if (metric === 'duree-humectation') return ''
  if (metric === 'potentiel-hydrique') return 'kPa'
  if (metric === 'teneur-eau') return '%'
  if (metric === 'conductivite') return 'dS/m'
  return ''
}

function contrastColor(hex) {
  const r = parseInt(hex.slice(1,3), 16), g = parseInt(hex.slice(3,5), 16), b = parseInt(hex.slice(5,7), 16)
  return (0.299*r + 0.587*g + 0.114*b) / 255 > 0.5 ? '#000000' : '#ffffff'
}

function colorForMetric(metric, v) {
  switch (metric) {
    case 'pluie':              return v < 8  ? '#C1E1FF' : v < 18  ? '#2E75B6' : '#0B3A64'
    case 'temp':               return v < 12 ? '#FEE7B4' : v < 18  ? '#FBAF05' : '#7D5702'
    case 'humidite':           return v < 40 ? '#E3C7FF' : v < 70  ? '#5B12A4' : '#29084A'
    case 'etat-hydrique':      return v < 100? '#50A2EC' : v < 180 ? '#0B3A64' : '#03101C'
    case 'irrigations':        return v === 0? '#c7c7cc' : v < 30  ? '#FFDFB8' : '#FF8C00'
    case 'ru':                 return v < 30 ? '#E05252' : v < 60  ? '#FBAF05' : '#24B066'
    case 'vent':               return v < 15 ? '#E1E1E1' : v < 30  ? '#616161' : '#343232'
    case 'rayonnement':        return v < 200? '#FBFBB6' : v < 400 ? '#CBCB0B' : '#838307'
    case 'temp-sol':           return v < 8  ? '#D9C6BF' : v < 18  ? '#795548' : '#484646'
    case 'temp-seche':         return v < 0  ? '#9DECDF' : v < 10  ? '#23B19B' : '#177365'
    case 'temp-humide':        return v < 0  ? '#D2DEFA' : v < 10  ? '#5E88EC' : '#1B56E4'
    case 'intensite-humectation':
    case 'duree-humectation':  return v < 30 ? '#B2FFF9' : v < 70  ? '#00887E' : '#003D39'
    case 'potentiel-hydrique': return v < 80 ? '#E2EAC7' : v < 150 ? '#A6C157' : '#7D9537'
    case 'teneur-eau':         return v < 15 ? '#F7D2A1' : v < 30  ? '#ED9A2C' : '#BC7210'
    case 'conductivite':       return v < 0.8? '#BDEFF5' : v < 1.5 ? '#2BCDDE' : '#16828D'
    case 'etp':                return v < 2  ? '#D6EDF9' : v < 5   ? '#2E75B6' : '#0B3A64'
    case 'rfu':                return v < 30 ? '#E05252' : v < 60  ? '#FBAF05' : '#24B066'
    case 'temp-rosee':         return v < 5  ? '#D2DEFA' : v < 12  ? '#5E88EC' : '#1B56E4'
    case 'par':                return v < 500? '#F9EED2' : v < 1200? '#E8B44C' : '#9B6E00'
    default:                   return '#0172A4'
  }
}

function getMetricColor(parcel, metric) {
  if (metric === 'ru') return colorForMetric('ru', parcel.reserveHydrique)
  const value = computeMetricValue(parcel, metric, currentAggregate)
  return colorForMetric(metric, value)
}

function getSensorColor(sensor) {
  return sensor.event ? '#E05252' : '#24B066'
}

function getMetricDisplay(parcel, metric) {
  if (metric === 'ru') return `Réserve utile: ${parcel.reserveHydrique}%`
  if (metric === 'temp') return `Température estimée: ${Math.floor(12 + (parcel.degresJour || parcel.id * 12) / 20)}°C`
  if (metric === 'pluie') return `Pluie estimée: ${Math.floor(parcel.reserveHydrique / 10)} mm`
  if (metric === 'humidite') return `Humidité estimée: ${Math.min(100, parcel.reserveHydrique + 15)}%`
  if (metric === 'etat-hydrique') return `État hydrique: ${Math.round(parcel.reserveHydrique * 2.6)} mm`
  if (metric === 'irrigations') {
    const v = computeMetricValue(parcel, metric, currentAggregate)
    return `Irrigations: ${v} mm`
  }
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
    // Default sort: metric value descending (or by name when voir-tout)
    const sorted = !currentSort.column
      ? currentMetric === 'voir-tout'
        ? [...filteredParcels].sort((a, b) => getPlotDisplayName(a).localeCompare(getPlotDisplayName(b), 'fr'))
        : [...filteredParcels].sort((a, b) => {
            const av = computeMetricValue(a, currentMetric, currentAggregate) || 0
            const bv = computeMetricValue(b, currentMetric, currentAggregate) || 0
            return bv - av
          })
      : filteredParcels
    if (sorted.length > 0) {
      const colBtnHtml = `<div class="col-customizer-wrap">
        <button class="col-customizer-btn btn-secondary" id="col-customizer-btn">
          <i class="bi bi-layout-three-columns"></i> Colonnes
          <i class="bi bi-chevron-down" style="font-size:10px;margin-left:2px"></i>
        </button>
        <div class="col-customizer-panel" id="col-customizer-panel">
          ${PARCEL_OPTIONAL_COLS.map(c => `
            <label class="col-customizer-row">
              <input type="checkbox" value="${c.key}"${!hiddenParcelCols.has(c.key) ? ' checked' : ''}>
              <span>${c.label}</span>
            </label>`).join('')}
        </div>
      </div>`
      container.innerHTML = colBtnHtml + createParcelMetricTable(sorted)
      const btn   = container.querySelector('#col-customizer-btn')
      const panel = container.querySelector('#col-customizer-panel')
      btn?.addEventListener('click', e => { e.stopPropagation(); panel.classList.toggle('open') })
      document.addEventListener('click', () => panel?.classList.remove('open'), { once: false })
      panel?.querySelectorAll('input[type=checkbox]').forEach(cb => {
        cb.addEventListener('change', () => {
          if (cb.checked) hiddenParcelCols.delete(cb.value)
          else hiddenParcelCols.add(cb.value)
          saveHiddenParcelCols()
          syncColFilters()
          renderList(filteredParcels, filteredSensors)
        })
      })
    } else {
      container.innerHTML = '<p class="empty-state">Aucune parcelle ne correspond aux filtres sélectionnés.</p>'
    }
  } else {
    // Default sort: last message (most recent first) or metric value descending
    const sorted = !currentSort.column
      ? [...filteredSensors].sort((a, b) => {
          const av = computeSensorValue(a, currentMetric, currentAggregate)
          const bv = computeSensorValue(b, currentMetric, currentAggregate)
          const an = av ? av[0] : -Infinity
          const bn = bv ? bv[0] : -Infinity
          return bn - an
        })
      : filteredSensors
    if (sorted.length > 0) {
      container.innerHTML += createSensorTable(sorted)
    } else {
      container.innerHTML = '<p class="empty-state">Aucun capteur ne correspond aux filtres sélectionnés.</p>'
    }
  }

  animateView(container)
}

// Model type mapping
const MODEL_TYPE = {
  'P+': 'Station météo', 'PT': 'Station météo', 'P': 'Pluviomètre',
  'SMV': 'Station météo virtuelle',
  'TH': 'Thermomètre-hygromètre', 'T_MINI': 'Thermomètre de sol',
  'W': 'Anémomètre', 'PYRANO': 'Pyranomètre', 'PAR': 'Capteur PAR',
  'LWS': "Capteur d'humectation foliaire", 'T_GEL': 'Capteur de gel',
  'CHP-15/30': 'Tensiomètre', 'CHP-30/60': 'Tensiomètre', 'CHP-60/90': 'Tensiomètre',
  'CAPA-30-3': 'Sonde capacitive', 'CAPA-60-6': 'Sonde capacitive',
  'EC': 'Sonde de fertirrigation',
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
  return sensor.serial || `WEE-${String(sensor.id).padStart(5, '0')}`
}

const SENSOR_NAMES_KEY = 'weenat-sensor-names'
function _getSensorNames() { try { return JSON.parse(localStorage.getItem(SENSOR_NAMES_KEY)) || {} } catch { return {} } }
function getSensorDisplayName(sensor) { return _getSensorNames()[sensor.id] || sensor.serial || `WEE-${sensor.id}` }
function setSensorName(sensorId, name) { const n = _getSensorNames(); if (name) n[sensorId] = name; else delete n[sensorId]; localStorage.setItem(SENSOR_NAMES_KEY, JSON.stringify(n)) }

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

function buildEventIconsHtml(event) {
  if (!event) return '<span class="tag-none">—</span>'
  const evs = Array.isArray(event) ? event : [event]
  return `<div class="event-icons-stack">${evs.map(ev => `<i class="bi ${EVENT_ICONS[ev] || 'bi-exclamation-circle'}" title="${ev}" style="color:var(--warn);font-size:15px"></i>`).join('')}</div>`
}

function buildParcelLinksHtml(sensor, withRemoveBtn = false) {
  const parcelList = plots.filter(p => sensor.parcelIds.includes(p.id))
  if (!parcelList.length) return '<span class="tag-none">—</span>'
  return parcelList.map(p => `
    <div class="admin-item-row">
      <a href="parcelle-detail.html?id=${p.id}" class="admin-link">${getPlotDisplayName(p)}</a>
      ${withRemoveBtn ? `<button class="icon-btn remove-parcel-sensor-admin" data-sensor-id="${sensor.id}" data-parcel-id="${p.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>` : ''}
    </div>`).join('')
}

function buildMembresHtmlAdherent(parcel) {
  // Conseillers : membres réseau assignés à cette parcelle ET à cette org (évite les agents d'autres orgs)
  const conseillers = members.filter(m =>
    m.source === 'réseau' &&
    m.parcelIds.includes(parcel.id) &&
    m.orgIds.includes(parcel.orgId)
  )
  // Équipe : membres adhérents assignés à cette parcelle spécifiquement
  const equipe = members.filter(m =>
    m.source === 'adherent' &&
    m.orgIds.includes(ADHERENT_ORG_ID) &&
    m.parcelIds.includes(parcel.id)
  )
  if (!conseillers.length && !equipe.length) return '<span class="tag-none">—</span>'
  let html = ''
  conseillers.forEach(m => {
    html += `<div class="admin-item-row"><span class="member-src-badge member-src-badge--reseau">Conseiller</span><a href="membres.html" class="admin-link">${m.prenom} ${m.nom}</a></div>`
  })
  equipe.forEach(m => {
    html += `<div class="admin-item-row">
      <span class="member-src-badge member-src-badge--adherent">Mon équipe</span>
      <a href="membres.html" class="admin-link">${m.prenom} ${m.nom}</a>
      <button class="icon-btn remove-member-admin" data-member-id="${m.id}" data-parcel-id="${parcel.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
    </div>`
  })
  return html
}

function buildSensorMembresHtmlAdherent(sensor) {
  const pids = sensor.parcelIds || []
  // Conseillers : membres réseau assignés à cette org ET à une parcelle liée
  const conseillers = members.filter(m =>
    m.source === 'réseau' &&
    pids.some(pid => m.parcelIds.includes(pid)) &&
    m.orgIds.includes(sensor.orgId)
  )
  // Équipe : membres adhérents assignés à une parcelle liée au capteur
  const equipe = members.filter(m =>
    m.source === 'adherent' &&
    m.orgIds.includes(ADHERENT_ORG_ID) &&
    pids.some(pid => m.parcelIds.includes(pid))
  )
  if (!conseillers.length && !equipe.length) return '<span class="tag-none">—</span>'
  let html = ''
  conseillers.forEach(m => {
    html += `<div class="admin-item-row"><span class="member-src-badge member-src-badge--reseau">Conseiller</span><a href="membres.html" class="admin-link">${m.prenom} ${m.nom}</a></div>`
  })
  equipe.forEach(m => {
    const linkedParcel = plots.find(p => pids.includes(p.id) && m.parcelIds.includes(p.id))
    html += `<div class="admin-item-row">
      <span class="member-src-badge member-src-badge--adherent">Mon équipe</span>
      <a href="membres.html" class="admin-link">${m.prenom} ${m.nom}</a>
      ${linkedParcel ? `<button class="icon-btn remove-member-sensor-admin" data-member-id="${m.id}" data-parcel-id="${linkedParcel.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>` : ''}
    </div>`
  })
  return html
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
    const vals = { today: Math.max(0, base + n(1)), demain: Math.max(0, base + n(6)), '7j-futur': Math.max(0, base * 4 + n(7)), yesterday: Math.max(0, base - 1 + n(2)), '7jours': Math.max(0, base * 3 + n(3)), '30jours': Math.max(0, base * 12 + n(4)), '1an': Math.max(0, base * 45 + n(5)) }
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
    const base = Math.round(Math.max(0, Math.min(200, 20 + (sensor.id % 150))))
    const vals = { reel: Math.max(0, Math.min(200, base + n(1) * 5)), 'min-jour': Math.max(0, base - 30), 'max-jour': Math.min(200, base + 25), 'moyenne-7': Math.max(0, Math.min(200, base - 10 + n(4) * 3)) }
    return [vals[aggregate] ?? base, 'kPa']
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
  const isAdherent = currentRole === 'adherent'
  const aggregates = isAdherent ? (metricAggregates[currentMetric] || []) : []

  let html = '<table id="sensor-table"><thead><tr>'
  html += '<th data-column="brand">Marque</th>'
  html += '<th data-column="model">Modèle</th>'
  html += '<th data-column="serial">N° série</th>'
  html += '<th data-column="nom">Nom</th>'
  html += '<th data-column="city">Ville</th>'
  html += '<th data-column="lastMessage">Dernier message</th>'
  if (!isAdherent) html += '<th data-column="org">Organisation</th>'
  html += '<th data-column="anomalies">Anomalies</th>'
  if (isAdherent) {
    aggregates.forEach(agg => {
      const isActive = agg.value === currentAggregate
      html += `<th data-column="agg-${agg.value}" class="${isActive ? 'col-active-header' : ''}">${metricLabel}<br><small>${agg.label}</small></th>`
    })
  } else {
    html += `<th data-column="mesure" class="col-active-header">${metricLabel}<br><small style="font-weight:400">${aggLabel}</small></th>`
  }
  html += '</tr></thead><tbody>'

  sensors.forEach(sensor => {
    const parcel = plots.find(p => sensor.parcelIds.includes(p.id))
    const org = parcel ? orgs.find(o => o.id === parcel.orgId) : orgs.find(o => o.id === sensor.orgId)
    const brand = getSensorBrand(sensor)
    const typeName = MODEL_TYPE[sensor.model] || sensor.model
    const city = org?.ville || '—'
    const sensorCustomName = getSensorDisplayName(sensor)
    const nomHtml = sensorCustomName !== sensor.serial ? `<span style="font-weight:500">${sensorCustomName}</span>` : '<span class="tag-none">—</span>'
    html += `<tr class="clickable-row" data-href="capteur-detail.html?id=${sensor.id}">
      <td>${brand}</td>
      <td><strong>${sensor.model}</strong><br><span style="font-size:10px;color:var(--txt3)">${typeName}</span></td>
      <td>${formatSerial(sensor)}</td>
      <td>${nomHtml}</td>
      <td>${city}</td>
      <td style="white-space:nowrap">${getSensorAge(sensor)}</td>
      ${!isAdherent ? `<td>${org ? org.name : '—'}</td>` : ''}
      <td>${buildEventIconsHtml(sensor.event)}</td>`
    if (isAdherent) {
      aggregates.forEach(agg => {
        const isActive = agg.value === currentAggregate
        const val = computeSensorValue(sensor, currentMetric, agg.value)
        const display = val ? `${val[0]} ${val[1]}` : '<span class="tag-none">—</span>'
        html += `<td class="num${isActive ? ' col-active' : ''}">${display}</td>`
      })
    } else {
      const sensorVal = computeSensorValue(sensor, currentMetric, currentAggregate)
      const mesureHtml = sensorVal ? `${sensorVal[0]} ${sensorVal[1]}` : '<span class="tag-none">—</span>'
      html += `<td class="col-active num">${mesureHtml}</td>`
    }
    html += '</tr>'
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
    const withSensors = filteredParcels.filter(p => sensors.some(s => s.parcelIds.includes(p.id))).length
    const withoutSensors = filteredParcels.length - withSensors
    const withInteg = filteredParcels.filter(p => (p.integrations || []).length > 0).length
    const uniqueCultures = new Set(filteredParcels.map(p => p.crop)).size
    const withIrrigation = filteredParcels.filter(p => p.irrigation && p.irrigation !== 'Non irrigué').length
    const totalSensorsLinked = filteredParcels.reduce((s, p) => s + sensors.filter(se => se.parcelIds.includes(p.id)).length, 0)

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


function openExportListModal() {
  const existing = document.getElementById('export-list-modal')
  if (existing) existing.remove()

  const modal = document.createElement('div')
  modal.id = 'export-list-modal'
  modal.className = 'modal add-modal'
  modal.innerHTML = `
    <div class="add-modal-content" style="max-width:360px">
      <div class="add-modal-header">
        <span class="add-modal-title">Exporter la liste des parcelles</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div style="padding:16px 20px;display:flex;gap:12px">
        <button class="btn-secondary export-fmt-btn" data-fmt="csv" style="flex:1;flex-direction:column;height:64px;gap:4px">
          <i class="bi bi-filetype-csv" style="font-size:20px"></i>
          <span>CSV</span>
        </button>
        <button class="btn-secondary export-fmt-btn" data-fmt="xlsx" style="flex:1;flex-direction:column;height:64px;gap:4px">
          <i class="bi bi-file-earmark-excel" style="font-size:20px;color:#1d6f42"></i>
          <span>Excel</span>
        </button>
      </div>
    </div>
  `
  modal.querySelector('.add-modal-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
  modal.querySelectorAll('.export-fmt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast(`Export ${btn.dataset.fmt.toUpperCase()} en cours…`)
      modal.remove()
    })
  })
  document.body.appendChild(modal)
}

function initExportButton() {
  document.getElementById('import-btn')?.addEventListener('click', () => {
    showToast('Import CSV/Excel — fonctionnalité à venir')
  })

  document.getElementById('export-csv-btn')?.addEventListener('click', openExportListModal)

  document.getElementById('export-btn')?.addEventListener('click', () => {
    showToast('Création de parcelle — fonctionnalité à venir')
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
  sensorList = [...sensorList].sort((a, b) =>
    `${a.model} ${a.serial}`.localeCompare(`${b.model} ${b.serial}`, 'fr')
  )
  const isAdherent = currentRole === 'adherent'

  let html = `
    <div id="sensor-bulk-bar" class="bulk-bar hidden">
      <span id="sensor-bulk-count"></span>
      <div class="bulk-actions">
        <label class="bulk-action-group">
          <span>Organisation</span>
          <select id="sensor-bulk-org-sel" class="bulk-select">
            <option value="">— choisir —</option>
            ${orgs.map(o => `<option value="${o.id}">${o.name}</option>`).join('')}
          </select>
        </label>
        <label class="bulk-action-group">
          <span>Parcelle</span>
          <select id="sensor-bulk-parcel-sel" class="bulk-select">
            <option value="">— choisir —</option>
            ${plots.slice(0, 50).map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
          </select>
        </label>
        <label class="bulk-action-group">
          <span>Membre</span>
          <select id="sensor-bulk-member-sel" class="bulk-select">
            <option value="">— choisir —</option>
            ${members.map(m => `<option value="${m.id}">${m.prenom} ${m.nom}</option>`).join('')}
          </select>
        </label>
        <button class="btn-secondary btn-sm" id="sensor-bulk-stop-event-btn"><i class="bi bi-x-circle"></i> Arrêter l'événement</button>
        <button class="btn-secondary btn-sm" id="sensor-bulk-hibernate-btn"><i class="bi bi-moon"></i> Hibernation</button>
        <button class="btn-secondary btn-sm" id="sensor-bulk-fav-btn"><i class="bi bi-star"></i> Favoris</button>
      </div>
    </div>`
  html += '<table id="admin-sensor-table"><thead><tr>'
  html += '<th class="col-check"><input type="checkbox" id="check-all-admin-sensor"></th>'
  html += '<th data-column="model">Modèle</th>'
  html += '<th data-column="serial">N° série</th>'
  html += '<th data-column="nom">Nom</th>'
  html += '<th data-column="telecom">Télécom</th>'
  html += '<th data-column="lastMessage">Dernier message</th>'
  html += '<th data-column="networkQuality">Qualité réseau</th>'
  html += '<th data-column="anomalies">Anomalies</th>'
  html += '<th data-column="parcelles">Parcelles</th>'
  html += '<th data-column="membres">Membres</th>'
  if (!isAdherent) html += '<th data-column="organisation">Organisation</th>'
  html += '</tr></thead><tbody>'

  sensorList.forEach(sensor => {
    const parcelLinksHtml = buildParcelLinksHtml(sensor, !isAdherent)

    const membresHtml = isAdherent
      ? buildSensorMembresHtmlAdherent(sensor)
      : (() => {
          const parcel = plots.find(p => sensor.parcelIds.includes(p.id))
          const allParcelMembers = parcel ? members.filter(m => m.parcelIds.includes(parcel.id) && m.role !== 'propriétaire') : []
          const displayMembers = allParcelMembers.slice(0, (sensor.id % 3 === 0) ? 0 : Math.min(2, allParcelMembers.length))
          return displayMembers.length
            ? displayMembers.map(m => `<div class="admin-item-row">
                 <a href="membres.html" class="admin-link">${m.prenom} ${m.nom}</a>
                 <button class="icon-btn remove-member-sensor-admin" data-member-id="${m.id}" data-parcel-id="${parcel.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
               </div>`).join('')
            : '<span class="tag-none">—</span>'
        })()

    const currentOrgId = sensor.orgId ?? plots.find(p => sensor.parcelIds.includes(p.id))?.orgId
    const orgSelectHtml = `<select class="inline-edit" data-field="orgId" data-sensor-id="${sensor.id}">
      ${orgs.map(o => `<option value="${o.id}"${o.id === currentOrgId ? ' selected' : ''}>${o.name}</option>`).join('')}
    </select>`

    const adminCustomName = getSensorDisplayName(sensor)
    const adminNomCell = `<input type="text" class="inline-edit sensor-name-edit" data-sensor-id="${sensor.id}" value="${adminCustomName !== sensor.serial ? adminCustomName : ''}" placeholder="${sensor.serial}" style="min-width:100px">`
    html += `<tr>
      <td class="col-check"><input type="checkbox" class="sensor-admin-check" data-id="${sensor.id}"></td>
      <td>${sensor.model}</td>
      <td>${formatSerial(sensor)}</td>
      <td>${adminNomCell}</td>
      <td>${sensor.telecom}</td>
      <td style="white-space:nowrap">${getSensorAge(sensor)}</td>
      <td>${sensor.networkQuality}%</td>
      <td>${buildEventIconsHtml(sensor.event)}</td>
      <td class="admin-links-cell">${parcelLinksHtml}</td>
      <td class="admin-links-cell">${membresHtml}</td>
      ${!isAdherent ? `<td>${orgSelectHtml}</td>` : ''}
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

  container.querySelector('#sensor-bulk-org-sel')?.addEventListener('change', e => {
    const orgId = parseInt(e.target.value); if (!orgId) return
    const ids = [...container.querySelectorAll('.sensor-admin-check:checked')].map(cb => parseInt(cb.dataset.id))
    ids.forEach(id => { const s = sensors.find(x => x.id === id); if (s) s.orgId = orgId })
    e.target.value = ''
    showToast(`Organisation assignée à ${ids.length} capteur${ids.length > 1 ? 's' : ''}.`)
    updateContent()
  })

  container.querySelector('#sensor-bulk-parcel-sel')?.addEventListener('change', e => {
    const parcelId = parseInt(e.target.value); if (!parcelId) return
    const ids = [...container.querySelectorAll('.sensor-admin-check:checked')].map(cb => parseInt(cb.dataset.id))
    ids.forEach(id => { const s = sensors.find(x => x.id === id); if (s) s.parcelIds = [parcelId] })
    e.target.value = ''
    showToast(`Parcelle assignée à ${ids.length} capteur${ids.length > 1 ? 's' : ''}.`)
    updateContent()
  })

  container.querySelector('#sensor-bulk-member-sel')?.addEventListener('change', e => {
    const memberId = parseInt(e.target.value); if (!memberId) return
    const ids = [...container.querySelectorAll('.sensor-admin-check:checked')].map(cb => parseInt(cb.dataset.id))
    const m = members.find(x => x.id === memberId)
    showToast(`${ids.length} capteur${ids.length > 1 ? 's' : ''} associé${ids.length > 1 ? 's' : ''} à ${m?.prenom} ${m?.nom}.`)
    e.target.value = ''
  })

  container.querySelector('#sensor-bulk-stop-event-btn')?.addEventListener('click', () => {
    const ids = [...container.querySelectorAll('.sensor-admin-check:checked')].map(cb => parseInt(cb.dataset.id))
    if (!ids.length) return
    ids.forEach(id => { const s = sensors.find(x => x.id === id); if (s) s.event = null })
    showToast(`Événement arrêté sur ${ids.length} capteur${ids.length > 1 ? 's' : ''}.`)
    updateContent()
  })

  container.querySelector('#sensor-bulk-hibernate-btn')?.addEventListener('click', () => {
    const ids = [...container.querySelectorAll('.sensor-admin-check:checked')].map(cb => parseInt(cb.dataset.id))
    if (!ids.length) return
    ids.forEach(id => { const s = sensors.find(x => x.id === id); if (s) s.event = 'hibernation' })
    showToast(`${ids.length} capteur${ids.length > 1 ? 's' : ''} mis en hibernation.`)
    updateContent()
  })

  container.querySelectorAll('.remove-parcel-sensor-admin').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const sensorId = parseInt(btn.dataset.sensorId)
      const parcelId = parseInt(btn.dataset.parcelId)
      const sensor = sensors.find(s => s.id === sensorId)
      if (sensor) {
        if (parcelId) {
          sensor.parcelIds = sensor.parcelIds.filter(id => id !== parcelId)
        } else {
          sensor.parcelIds = []
        }
      }
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
  container.querySelectorAll('.sensor-name-edit').forEach(input => {
    input.addEventListener('change', () => {
      setSensorName(parseInt(input.dataset.sensorId), input.value.trim())
    })
  })
}

/// ── Vue liste parcelles ───────────────────────────────────────────────────────
function createParcelMetricTable(parcels) {
  const aggregates = metricAggregates[currentMetric] || []
  const unit = getMetricUnit(currentMetric)
  const metricLabel = METRIC_LABELS[currentMetric] || currentMetric
  const isAdherent = currentRole === 'adherent'

  // Pluie : seulement 3 colonnes par défaut + l'agrégat sélectionné si hors liste
  let visibleAggs = aggregates
  if (currentMetric === 'pluie') {
    const PLUIE_DEFAULT = ['7jours', 'today', '7j-futur']
    const extra = !PLUIE_DEFAULT.includes(currentAggregate) ? currentAggregate : null
    const visKeys = new Set([...PLUIE_DEFAULT, ...(extra ? [extra] : [])])
    visibleAggs = aggregates.filter(a => visKeys.has(a.value))
  }

  let html = '<table id="parcel-table"><thead><tr>'
  html += '<th data-column="name">Parcelle</th>'
  html += '<th data-column="crop">Culture</th>'
  html += '<th data-column="area">Surface</th>'
  html += '<th data-column="env" title="Environnement">Env.</th>'
  if (!hiddenParcelCols.has('texture')) html += '<th data-column="texture">Texture</th>'
  html += '<th data-column="irrigation">Irrigation</th>'
  html += '<th data-column="sensors">Capteurs</th>'
  if (!hiddenParcelCols.has('integrations')) html += '<th data-column="integrations">Intégrations</th>'
  if (isAdherent && !hiddenParcelCols.has('membres')) html += '<th data-column="membres">Membres</th>'
  // Colonnes métriques — une par agrégat, celle active en surbrillance
  visibleAggs.forEach(agg => {
    const isActive = agg.value === currentAggregate
    html += `<th data-column="agg-${agg.value}" class="${isActive ? 'col-active-header' : ''}">${metricLabel}<br><small>${agg.label}</small></th>`
  })
  html += '</tr></thead><tbody>'

  parcels.forEach(parcel => {
    const sensorCount = sensors.filter(s => s.parcelIds.includes(parcel.id)).length
    const integList = (parcel.integrations || [])
    const integHtml = integList.length
      ? integList.map(i => `<span class="tag">${i}</span>`).join(' ')
      : '<span class="tag-none">—</span>'
    const irrigation = parcel.irrigation || '—'
    const irrigationClass = (parcel.irrigation && parcel.irrigation !== 'Non irrigué') ? 'tag tag-irrigation' : 'tag-none'

    html += `<tr class="clickable-row" data-href="parcelle-detail.html?id=${parcel.id}">`
    html += `<td><a href="parcelle-detail.html?id=${parcel.id}" class="row-link">${getPlotDisplayName(parcel)}</a></td>`
    html += `<td>${parcel.crop || '—'}</td>`
    html += `<td class="num">${parcel.area} ha</td>`
    html += `<td style="text-align:center">${envIcon(parcel.env)}</td>`
    if (!hiddenParcelCols.has('texture')) html += `<td>${textureDisplay(parcel)}</td>`
    html += `<td><span class="${irrigationClass}">${irrigation}</span></td>`
    html += `<td class="num">${sensorCount > 0 ? sensorCount : '<span class="warn-text">0</span>'}</td>`
    if (!hiddenParcelCols.has('integrations')) html += `<td class="integrations-cell">${integHtml}</td>`
    if (isAdherent && !hiddenParcelCols.has('membres')) html += `<td class="admin-links-cell">${buildMembresHtmlAdherent(parcel)}</td>`
    const hasData = parcelHasDisplayData(parcel, currentMetric)
    visibleAggs.forEach(agg => {
      const isActive = agg.value === currentAggregate
      let display
      if (!hasData) {
        display = '<span class="tdb-missing">—</span>'
      } else {
        const horizons = computeHorizonValues(parcel, currentMetric, agg.value)
        if (horizons) {
          const unit = getMetricUnit(currentMetric)
          display = horizons.map(h => `${h.value}${unit ? ` ${unit}` : ''} <span class="tdb-depth">@ ${h.depth}</span>`).join('<br>')
        } else {
          display = fmtMetricValue(computeMetricValue(parcel, currentMetric, agg.value), currentMetric)
        }
      }
      html += `<td class="num${isActive ? ' col-active' : ''}">${display}</td>`
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
  parcels = [...parcels].sort((a, b) => getPlotDisplayName(a).localeCompare(getPlotDisplayName(b), 'fr'))
  const crops = [...new Set(plots.map(p => p.crop).filter(Boolean))].sort()
  const textures = SOIL_TYPES
  const irrigationTypes = IRRIG_TYPES

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
        <button class="btn-secondary btn-sm" id="bulk-org-btn"><i class="bi bi-building"></i> Changer d'organisation propriétaire</button>
        <button class="btn-secondary btn-sm" id="bulk-save-btn" style="color:var(--ok)"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    </div>
  `

  const isAdherent = currentRole === 'adherent'

  html += '<table id="parcel-admin-table"><thead><tr>'
  html += '<th><input type="checkbox" id="check-all-admin"></th>'
  html += '<th data-column="name">Parcelle</th>'
  if (!isAdherent) html += '<th data-column="org">Organisation</th>'
  html += '<th class="col-minimap">Contour</th>'
  html += '<th data-column="crop">Culture</th>'
  html += '<th data-column="env" title="Environnement">Env.</th>'
  html += '<th data-column="texture">Texture de Sol</th>'
  html += '<th data-column="irrigation">Type d\'irrigation</th>'
  html += '<th data-column="sensors">Capteurs</th>'
  html += '<th data-column="integrations">Intégrations</th>'
  html += '<th data-column="membre">Membres</th>'
  html += '<th></th>'
  html += '</tr></thead><tbody>'

  parcels.forEach(parcel => {
    const parcelSensors = sensors.filter(s => s.parcelIds.includes(parcel.id))
    const integList = parcel.integrations || []
    const cityName = parcel.ville || parcel.city || ''

    const sensorsHtml = parcelSensors.length
      ? parcelSensors.map(s => `
          <div class="admin-item-row">
            <a href="capteur-detail.html?id=${s.id}" class="admin-link">${s.serial}${s.model ? ` — ${s.model}` : ''}</a>
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

    const membreHtml = isAdherent
      ? buildMembresHtmlAdherent(parcel)
      : (() => {
          const parcelMembers = members.filter(m => m.parcelIds.includes(parcel.id))
          return parcelMembers.length
            ? parcelMembers.map(m => `
                <div class="admin-item-row">
                  <a href="membres.html" class="admin-link">${m.prenom} ${m.nom}</a>
                  <button class="icon-btn remove-member-admin" data-member-id="${m.id}" data-parcel-id="${parcel.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
                </div>`).join('')
            : '<span class="tag-none">—</span>'
        })()

    const orgSelectHtml = `<select class="inline-edit" data-field="orgId" data-id="${parcel.id}" data-type="number">
      ${orgs.map(o => `<option value="${o.id}"${o.id === parcel.orgId ? ' selected' : ''}>${o.name}</option>`).join('')}
    </select>`

    html += `<tr>
      <td><input type="checkbox" class="parcel-admin-check" data-id="${parcel.id}"></td>
      <td>
        <a href="parcelle-detail.html?id=${parcel.id}" class="admin-link admin-link--name">${getPlotDisplayName(parcel)}</a>
        ${cityName ? `<div class="admin-city-name">${cityName}</div>` : ''}
        ${parcel.area ? `<div class="admin-city-name" style="color:var(--txt3)">${parcel.area} ha</div>` : ''}
      </td>
      ${!isAdherent ? `<td>${orgSelectHtml}</td>` : ''}
      <td class="col-minimap">${(!parcel.latlngs && parcel.id % 14 === 0)
        ? `<div class="point-parcel-cell"><i class="bi bi-geo-alt-fill"></i><span>Point GPS</span></div>`
        : `<div class="admin-minimap" data-parcel-id="${parcel.id}" data-latlngs="${encodeURIComponent(JSON.stringify(parcel.latlngs || []))}" data-lat="${parcel.lat}" data-lng="${parcel.lng}"></div>`
      }</td>
      <td>
        <select class="inline-edit" data-field="crop" data-id="${parcel.id}">
          <option value=""${!parcel.crop ? ' selected' : ''}>—</option>
          ${crops.map(c => `<option value="${c}"${c === parcel.crop ? ' selected' : ''}>${c}</option>`).join('')}
        </select>
      </td>
      <td>
        <select class="inline-edit" data-field="env" data-id="${parcel.id}">
          <option value="plein champ"${parcel.env === 'plein champ' ? ' selected' : ''}>Plein champ</option>
          <option value="serre"${parcel.env === 'serre' ? ' selected' : ''}>Serre</option>
        </select>
      </td>
      <td>
        <select class="inline-edit" data-field="texture" data-id="${parcel.id}">
          ${textures.map(t => `<option value="${t}"${t === parcel.texture ? ' selected' : ''}>${t}</option>`).join('')}
        </select>
      </td>
      <td>
        <select class="inline-edit" data-field="irrigation" data-id="${parcel.id}">
          <option value=""${!parcel.irrigation ? ' selected' : ''}>—</option>
          ${irrigationTypes.map(v => `<option value="${v}"${v === parcel.irrigation ? ' selected' : ''}>${v}</option>`).join('')}
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
      if (sensor) sensor.parcelIds = []
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
        const val = (input.type === 'number' || input.dataset.type === 'number') ? Number(input.value) : input.value
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
      const crops = [...new Set(plots.map(p => p.crop).filter(Boolean))].sort()
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
      const textures = SOIL_TYPES
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
    const options = IRRIG_TYPES
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

  // Changer d'organisation propriétaire
  container.querySelector('#bulk-org-btn')?.addEventListener('click', () => {
    const checked = getCheckedAdminIds(container)
    if (!checked.length) return
    showBulkOrgPickerModal(checked.length, orgId => {
      checked.forEach(id => {
        const plot = plots.find(p => p.id === id)
        if (plot) plot.orgId = orgId
      })
      const org = orgs.find(o => o.id === orgId)
      showToast(`${checked.length} parcelle${checked.length > 1 ? 's' : ''} transférée${checked.length > 1 ? 's' : ''} à « ${org?.name ?? orgId} »`)
      const { parcels } = getFilteredData()
      container.innerHTML = createParcelAdminTable(parcels)
      initParcelAdminTable(container)
    })
  })

  container.querySelector('#bulk-save-btn')?.addEventListener('click', () => {
    showToast('Modifications enregistrées.')
  })
}

function getCheckedAdminIds(container) {
  return Array.from(container.querySelectorAll('.parcel-admin-check:checked')).map(cb => Number(cb.dataset.id))
}

function showBulkOrgPickerModal(count, onConfirm) {
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9999;display:flex;align-items:center;justify-content:center'
  overlay.innerHTML = `
    <div style="background:#fff;padding:1.5rem;border-radius:10px;min-width:340px;box-shadow:0 4px 24px rgba(0,0,0,.25)">
      <h3 style="margin:0 0 .75rem;font-size:1rem">Changer d'organisation propriétaire</h3>
      <p style="margin:0 0 1rem;color:#666;font-size:.875rem">${count} parcelle${count > 1 ? 's' : ''} sélectionnée${count > 1 ? 's' : ''}</p>
      <select id="bulk-org-select" style="width:100%;padding:.5rem .75rem;margin-bottom:1.25rem;border:1px solid #ccc;border-radius:6px;font-size:.875rem">
        ${orgs.map(o => `<option value="${o.id}">${o.name}</option>`).join('')}
      </select>
      <div style="display:flex;gap:.5rem;justify-content:flex-end">
        <button id="bulk-org-cancel" class="btn-secondary btn-sm">Annuler</button>
        <button id="bulk-org-confirm" class="btn-primary btn-sm">Confirmer</button>
      </div>
    </div>
  `
  document.body.appendChild(overlay)
  overlay.querySelector('#bulk-org-cancel').addEventListener('click', () => overlay.remove())
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
  overlay.querySelector('#bulk-org-confirm').addEventListener('click', () => {
    const orgId = Number(overlay.querySelector('#bulk-org-select').value)
    overlay.remove()
    onConfirm(orgId)
  })
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
