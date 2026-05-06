import { sensors as allSensors } from '../../data/sensors.js'
import { plots as allPlots }     from '../../data/plots.js'
import { orgs }                  from '../../data/orgs.js'
import { initSensorDetail }      from './sensor-detail.js'

const ADMIN_ORG_ID    = 100
const ADHERENT_ORG_ID = 1
const METEO_MODELS    = ['P+', 'PT', 'P', 'SMV', 'TH', 'W', 'PYRANO', 'T_GEL']

// Noms iso avec MODEL_TYPE du web (src/main.js)
const MODEL_NAMES = {
  'P+':       'Station météo',
  'PT':       'Station météo',
  'P':        'Pluviomètre',
  'SMV':      'Station météo virtuelle',
  'TH':       'Thermo-hygromètre',
  'T_MINI':   'Thermomètre de sol',
  'W':        'Anémomètre',
  'PYRANO':   'Pyranomètre',
  'PAR':      'Capteur PAR',
  'LWS':      'Humectation foliaire',
  'T_GEL':    'Capteur gel',
  'CHP-15/30':'Tensiomètre',
  'CHP-30/60':'Tensiomètre',
  'CHP-60/90':'Tensiomètre',
  'CAPA-30-3':'Sonde capacitive',
  'CAPA-60-6':'Sonde capacitive',
  'EC':       'Sonde fertirrigation',
}

// Métriques mesurées par modèle — iso sensor-detail.js (version web)
const MODEL_METRICS = {
  'P+':       ['pluie', 'temp', 'hum'],
  'PT':       ['pluie', 'temp'],
  'P':        ['pluie'],
  'SMV':      ['pluie', 'temp', 'hum'],
  'TH':       ['temp', 'hum'],
  'T_MINI':   ['temp_sol'],
  'W':        ['vent'],
  'PYRANO':   ['rayonnement'],
  'PAR':      ['par'],
  'LWS':      ['humectation'],
  'T_GEL':    ['temp_sche', 'temp_hum'],
  'CHP-15/30':['pothydr', 'temp_sol'],
  'CHP-30/60':['pothydr', 'temp_sol'],
  'CHP-60/90':['pothydr', 'temp_sol'],
  'CAPA-30-3':['teneur',   'temp_sol'],
  'CAPA-60-6':['teneur',   'temp_sol'],
  'EC':       ['teneur',   'temp_sol'],
}

function sensorMeasures(model, metricId) {
  return (MODEL_METRICS[model] || []).includes(metricId)
}

function modelName(model) {
  return MODEL_NAMES[model] || model
}

const METRICS = [
  { id: 'pluie',     label: 'Pluie',                 unit: 'mm',    aggs: ["Aujourd'hui", 'Hier', '7 jours', '30 jours', '1 an'], defaultAgg: '7 jours'    },
  { id: 'temp',      label: 'Température',            unit: '°C',    aggs: ['Actuel', 'Min du jour', 'Max du jour', 'Moy. 7 jours', 'Moy. 30 jours'], defaultAgg: 'Actuel' },
  { id: 'hum',       label: 'Humidité',               unit: '%',     aggs: ['Actuel', 'Min du jour', 'Max du jour', 'Moy. 7 jours', 'Moy. 30 jours'], defaultAgg: 'Actuel' },
  { id: 'pothydr',   label: 'Potentiel hydrique',     unit: 'kPa',   aggs: ['Actuel', 'Min du jour', 'Max du jour', 'Moy. 7 jours'],                  defaultAgg: 'Actuel' },
  { id: 'teneur',    label: 'Teneur en eau du sol',   unit: '%vol',  aggs: ['Actuel', 'Min du jour', 'Max du jour', 'Moy. 7 jours'],                  defaultAgg: 'Actuel' },
  { id: 'temp_sol',  label: 'Température du sol',     unit: '°C',    aggs: ['Actuel', 'Min du jour', 'Max du jour', 'Moy. 7 jours'],                  defaultAgg: 'Actuel' },
  { id: 'temp_sche',    label: 'Température sèche',     unit: '°C',         aggs: ['Actuel', 'Min du jour', 'Max du jour', 'Moy. 7 jours'],  defaultAgg: 'Actuel' },
  { id: 'temp_hum',    label: 'Température humide',    unit: '°C',         aggs: ['Actuel', 'Min du jour', 'Max du jour', 'Moy. 7 jours'],  defaultAgg: 'Actuel' },
  { id: 'rayonnement', label: 'Rayonnement solaire',   unit: 'W/m²',       aggs: ['Actuel', 'Journalier'],                                  defaultAgg: 'Actuel' },
  { id: 'par',         label: 'Rayonnement PAR',       unit: 'µmol/m²/s', aggs: ['Actuel', 'Journalier'],                                  defaultAgg: 'Actuel' },
  { id: 'vent',        label: 'Vent',                  unit: 'km/h',       aggs: ['Actuel', 'Moyen du jour', 'Rafales'],                    defaultAgg: 'Actuel' },
  { id: 'humectation', label: 'Humectation foliaire',  unit: '%',          aggs: ['Actuel', 'Heures du jour'],                              defaultAgg: 'Actuel' },
]

function mockVal(id) {
  switch (id) {
    case 'pluie':       return +(Math.random() * 50).toFixed(1)
    case 'temp':        return +(8  + Math.random() * 22).toFixed(1)
    case 'hum':         return Math.round(40 + Math.random() * 55)
    case 'pothydr':     return Math.round(10 + Math.random() * 180)
    case 'teneur':      return +(10 + Math.random() * 35).toFixed(1)
    case 'temp_sol':    return +(5  + Math.random() * 20).toFixed(1)
    case 'temp_sche':   return +(8  + Math.random() * 20).toFixed(1)
    case 'temp_hum':    return +(4  + Math.random() * 18).toFixed(1)
    case 'rayonnement': return Math.round(Math.random() * 900)
    case 'par':         return Math.round(Math.random() * 1800)
    case 'vent':        return +(Math.random() * 40).toFixed(1)
    case 'humectation': return Math.round(Math.random() * 100)
    default:            return +(Math.random() * 100).toFixed(1)
  }
}

export function initCapteursScreen(screenEl, role) {
  let content = screenEl.querySelector('#capteurs-content')
  if (!content) {
    content = document.createElement('div')
    content.id = 'capteurs-content'
    screenEl.appendChild(content)
  }

  const isAdmin      = role === 'admin'
  const adherentOrgs = orgs.filter(o => o.id !== ADMIN_ORG_ID)
  const plotById     = Object.fromEntries(allPlots.map(p => [p.id, p]))
  const orgById      = Object.fromEntries(orgs.map(o => [o.id, o]))
  let mapInstance    = null
  let mapBounds      = null
  const valCache     = {}

  let view      = 'carte'
  let metricId  = 'pluie'
  let aggLabel  = '7 derniers jours'
  let orgFilter = 'all'

  function getVal(sensorId) {
    const key = `${sensorId}-${metricId}-${aggLabel}`
    if (!(key in valCache)) valCache[key] = mockVal(metricId)
    return valCache[key]
  }

  function getSensors() {
    if (isAdmin) {
      if (orgFilter === 'all') return allSensors
      if (orgFilter === String(ADMIN_ORG_ID)) {
        const ids = new Set(allPlots.filter(p => p.orgId === ADMIN_ORG_ID).map(p => p.id))
        return allSensors.filter(s => ids.has(s.parcelId))
      }
      const ids = new Set(allPlots.filter(p => String(p.orgId) === orgFilter).map(p => p.id))
      return allSensors.filter(s => ids.has(s.parcelId))
    }
    // Adhérent
    const myIds       = new Set(allPlots.filter(p => p.orgId === ADHERENT_ORG_ID).map(p => p.id))
    const mine        = allSensors.filter(s => myIds.has(s.parcelId))
    const shared      = allSensors.filter(s => !myIds.has(s.parcelId) && METEO_MODELS.includes(s.model))
    if (orgFilter === 'mine')    return mine
    if (orgFilter === 'network') return shared
    return [...mine, ...shared]
  }

  function sensorPos(s) {
    const p = s.parcelId ? plotById[s.parcelId] : null
    if (!p) return null
    // Offset déterministe par capteur (~50m max) pour simuler la position physique réelle
    const dLat = ((s.id * 7919) % 1000 - 500) / 1000000
    const dLng = ((s.id * 6271) % 1000 - 500) / 1000000
    return { lat: p.lat + dLat, lng: p.lng + dLng, name: p.name }
  }

  function sensorCommune(s) {
    const p = s.parcelId ? plotById[s.parcelId] : null
    return p ? orgById[p.orgId]?.ville || null : null
  }

  function destroyMap() {
    if (mapInstance) { try { mapInstance.remove() } catch (e) {} mapInstance = null; mapBounds = null }
  }

  function render() {
    destroyMap()
    const metric  = METRICS.find(m => m.id === metricId) || METRICS[0]
    const sensors = getSensors()

    let orgOpts
    if (isAdmin) {
      orgOpts = `
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${ADMIN_ORG_ID}"${orgFilter === String(ADMIN_ORG_ID) ? ' selected' : ''}>Breiz'Agri Conseil (réseau)</option>
          ${adherentOrgs.map(o => `<option value="${o.id}"${orgFilter === String(o.id) ? ' selected' : ''}>${o.name}</option>`).join('')}
        </select>`
    } else {
      const myOrg      = orgs.find(o => o.id === ADHERENT_ORG_ID)
      const networkOrg = orgs.find(o => o.id === ADMIN_ORG_ID)
      orgOpts = `
        <select class="m-filter-select" id="org-filter">
          <option value="all"${orgFilter === 'all' ? ' selected' : ''}>Tout le réseau</option>
          <option value="mine"${orgFilter === 'mine' ? ' selected' : ''}>${myOrg?.name || 'Mon organisation'}</option>
          <option value="network"${orgFilter === 'network' ? ' selected' : ''}>${networkOrg?.name || "Breiz'Agri Conseil"}</option>
        </select>`
    }

    // Tri : capteurs mesurant la métrique en premier (desc), autres après
    const sorted = [...sensors].sort((a, b) => {
      const aHas = sensorMeasures(a.model, metricId)
      const bHas = sensorMeasures(b.model, metricId)
      if (aHas && !bHas) return -1
      if (!aHas && bHas) return 1
      return aHas ? getVal(b.id) - getVal(a.id) : 0
    })

    const listHtml = sorted.length
      ? `<div class="m-plain-list">${sorted.map(s => {
          const isMeteo   = METEO_MODELS.includes(s.model)
          const measures  = sensorMeasures(s.model, metricId)
          const valHtml   = measures
            ? `<span class="m-sensor-val">${getVal(s.id)} ${metric.unit}</span>`
            : `<span class="m-sensor-val m-sensor-val--na">—</span>`
          return `
            <div class="m-sensor-row m-tappable" data-sensor-id="${s.id}">
              <div class="m-sensor-icon" style="background:${isMeteo ? '#0172A420' : '#5b8dd920'};color:${isMeteo ? '#0172A4' : '#5b8dd9'}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${modelName(s.model)}</span>
                <span class="m-sensor-sub">${s.serial}${sensorCommune(s) ? ` · ${sensorCommune(s)}` : ''}</span>
              </div>
              ${valHtml}
            </div>`}).join('')}</div>`
      : `<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>`

    content.innerHTML = `
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${view === 'carte' ? ' m-view-btn--on' : ''}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${view === 'liste' ? ' m-view-btn--on' : ''}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${METRICS.map(m => `<option value="${m.id}"${m.id === metricId ? ' selected' : ''}>${m.label}</option>`).join('')}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${metric.aggs.map(a => `<option${a === aggLabel ? ' selected' : ''}>${a}</option>`).join('')}
          </select>
        </div>
        ${orgOpts}
      </div>
      ${view === 'carte'
        ? '<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>'
        : `<div class="m-list-view">${listHtml}</div>`}`

    bindEvents()
    if (view === 'carte') initMap(sensors, metric)
  }

  function initMap(sensors, metric) {
    const L = window.L; if (!L) return
    setTimeout(() => {
      const el = content.querySelector('#sensor-map'); if (!el) return
      mapInstance = L.map(el, { zoomControl: false, attributionControl: false })
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(mapInstance)
      const bounds = []
      sensors.forEach(s => {
        const pos = sensorPos(s); if (!pos) return
        const measures = sensorMeasures(s.model, metricId)
        const isMeteo  = METEO_MODELS.includes(s.model)
        const cm = L.circleMarker([pos.lat, pos.lng], {
          radius: measures ? 10 : 7,
          color: '#fff', weight: 2,
          fillColor: isMeteo ? '#0172A4' : '#5b8dd9',
          fillOpacity: measures ? 0.95 : 0.45,
        }).addTo(mapInstance)
        if (measures) {
          cm.bindTooltip(`${getVal(s.id)} ${metric.unit}`, { permanent: true, direction: 'top', className: 'm-map-tip', interactive: true })
        }
        cm.on('click', () => initSensorDetail(s))
        bounds.push([pos.lat, pos.lng])
      })
      if (bounds.length) {
        mapBounds = bounds
        mapInstance.fitBounds(bounds, { padding: [32, 32] })
      }
      mapInstance.invalidateSize()
    }, 0)
  }

  window.addEventListener('m-tab-change', e => {
    if (e.detail === 'capteurs' && view === 'carte' && mapInstance) {
      setTimeout(() => {
        mapInstance.invalidateSize()
        if (mapBounds?.length) mapInstance.fitBounds(mapBounds, { padding: [32, 32] })
      }, 50)
    }
  })

  function bindEvents() {
    content.querySelectorAll('.m-view-btn').forEach(btn =>
      btn.addEventListener('click', () => { view = btn.dataset.view; render() }))
    content.querySelector('#metric-sel')?.addEventListener('change', e => {
      metricId = e.target.value
      aggLabel = METRICS.find(m => m.id === metricId)?.defaultAgg || ''
      render()
    })
    content.querySelector('#agg-sel')?.addEventListener('change', e => { aggLabel = e.target.value; render() })
    content.querySelector('#org-filter')?.addEventListener('change', e => { orgFilter = e.target.value; render() })

    // Tap on list row → detail
    content.querySelectorAll('.m-tappable[data-sensor-id]').forEach(row => {
      row.addEventListener('click', () => {
        const sensor = allSensors.find(s => s.id === +row.dataset.sensorId); if (!sensor) return
        initSensorDetail(sensor)
      })
    })
  }

  render()
}
