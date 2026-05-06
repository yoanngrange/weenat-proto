import { plots as allPlots }   from '../../data/plots.js'
import { orgs }                from '../../data/orgs.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { initParcelDetail }    from './parcel-detail.js'

const ADMIN_ORG_ID = 100

// Métriques nécessitant un capteur spécifique sur la parcelle
const METRIC_REQUIRES = {
  pluie:       ['P+', 'PT', 'P'],
  vent:        ['W'],
  par:         ['PAR'],
  humectation: ['LWS'],
}

function hasMetric(plot, metricId) {
  const req = METRIC_REQUIRES[metricId]
  if (!req) return true
  return allSensors.some(s => s.parcelId === plot.id && req.includes(s.model))
}

const METRICS = [
  { id: 'pluie',    label: 'Pluie',               unit: 'mm',  aggs: ["Aujourd'hui", 'Hier', '7 derniers jours', '30 jours'], defaultAgg: '7 derniers jours' },
  { id: 'etp',      label: 'Évapotranspiration',  unit: 'mm',  aggs: ["Aujourd'hui", '7 derniers jours'],                     defaultAgg: "Aujourd'hui"      },
  { id: 'temp',     label: 'Température air',      unit: '°C',  aggs: ['Actuel', 'Min du jour', 'Max du jour'],                defaultAgg: 'Actuel'           },
  { id: 'temp_rosee',label: 'Température de rosée',unit: '°C', aggs: ['Actuel'],                                               defaultAgg: 'Actuel'           },
  { id: 'rayonnement',label: 'Rayonnement solaire',unit: 'W/m²',aggs: ['Actuel', 'Journalier'],                               defaultAgg: 'Actuel'           },
  { id: 'rfu',      label: 'Réservoir',            unit: 'mm',  aggs: ['Actuel'],                                               defaultAgg: 'Actuel'           },
  { id: 'hum',         label: 'Humidité air',          unit: '%',          aggs: ['Actuel', 'Moyenne du jour'],          defaultAgg: 'Actuel'           },
  { id: 'vent',        label: 'Vent',                  unit: 'km/h',       aggs: ['Actuel', 'Moyen du jour', 'Rafales'], defaultAgg: 'Actuel'           },
  { id: 'par',         label: 'Rayonnement PAR',       unit: 'µmol/m²/s', aggs: ['Actuel', 'Journalier'],               defaultAgg: 'Actuel'           },
  { id: 'humectation', label: 'Humectation foliaire',  unit: '%',          aggs: ['Actuel', 'Heures du jour'],           defaultAgg: 'Actuel'           },
]

function mockVal(id) {
  switch (id) {
    case 'pluie':       return +(Math.random() * 50).toFixed(1)
    case 'etp':         return +(Math.random() * 8).toFixed(1)
    case 'temp':        return +(8 + Math.random() * 22).toFixed(1)
    case 'temp_rosee':  return +(2 + Math.random() * 14).toFixed(1)
    case 'rayonnement': return Math.round(Math.random() * 900)
    case 'rfu':         return Math.round(20 + Math.random() * 110)
    case 'hum':         return Math.round(40 + Math.random() * 55)
    case 'vent':        return +(Math.random() * 40).toFixed(1)
    case 'par':         return Math.round(Math.random() * 1800)
    case 'humectation': return Math.round(Math.random() * 100)
    default:            return +(Math.random() * 100).toFixed(1)
  }
}

export function initParcellesScreen(screenEl, role) {
  let content = screenEl.querySelector('#parcelles-content')
  if (!content) {
    content = document.createElement('div')
    content.id = 'parcelles-content'
    screenEl.appendChild(content)
  }

  const isAdmin      = role === 'admin'
  const adherentOrgs = orgs.filter(o => o.id !== ADMIN_ORG_ID)
  const orgById      = Object.fromEntries(orgs.map(o => [o.id, o]))
  let mapInstance    = null
  let mapBounds      = null
  const valCache     = {}

  let view      = 'carte'
  let metricId  = 'pluie'
  let aggLabel  = '7 derniers jours'
  let orgFilter = 'all'

  function getVal(plotId) {
    const key = `${plotId}-${metricId}-${aggLabel}`
    if (!(key in valCache)) valCache[key] = mockVal(metricId)
    return valCache[key]
  }

  function commune(plot) {
    return orgById[plot.orgId]?.ville || null
  }

  function getPlots() {
    if (!isAdmin) return allPlots.filter(p => p.orgId === 1)
    if (orgFilter === 'all')                return allPlots
    if (orgFilter === String(ADMIN_ORG_ID)) return allPlots.filter(p => p.orgId === ADMIN_ORG_ID)
    return allPlots.filter(p => String(p.orgId) === orgFilter)
  }

  function destroyMap() {
    if (mapInstance) { try { mapInstance.remove() } catch (e) {} mapInstance = null; mapBounds = null }
  }

  function render() {
    destroyMap()
    const metric = METRICS.find(m => m.id === metricId) || METRICS[0]
    const plots  = getPlots()

    const orgOpts = isAdmin ? `
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${ADMIN_ORG_ID}"${orgFilter === String(ADMIN_ORG_ID) ? ' selected' : ''}>Breiz'Agri Conseil (réseau)</option>
        ${adherentOrgs.map(o => `<option value="${o.id}"${orgFilter === String(o.id) ? ' selected' : ''}>${o.name}</option>`).join('')}
      </select>` : ''

    // Tri : avec métrique en premier (desc), sans métrique après
    const sorted = [...plots].sort((a, b) => {
      const aHas = hasMetric(a, metricId), bHas = hasMetric(b, metricId)
      if (aHas && !bHas) return -1
      if (!aHas && bHas) return 1
      return aHas ? getVal(b.id) - getVal(a.id) : 0
    })

    const listHtml = sorted.length
      ? `<div class="m-plain-list">${sorted.map(p => {
          const city = commune(p)
          const has  = hasMetric(p, metricId)
          return `
            <div class="m-plain-row m-tappable" data-plot-id="${p.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${p.name}</span>
                ${city ? `<span class="m-plain-city">${city}</span>` : ''}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${has ? '' : ' m-plain-na'}">${has ? `${getVal(p.id)} ${metric.unit}` : '—'}</span>
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join('')}</div>`
      : `<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>`

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
        ? '<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>'
        : `<div class="m-list-view">${listHtml}</div>`}`

    bindEvents()
    if (view === 'carte') initMap(plots, metric)
  }

  function initMap(plots, metric) {
    const L = window.L; if (!L) return
    setTimeout(() => {
      const el = content.querySelector('#parcel-map'); if (!el) return
      mapInstance = L.map(el, { zoomControl: false, attributionControl: false })
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(mapInstance)
      const bounds = []
      plots.forEach(p => {
        const label = hasMetric(p, metricId) ? `${getVal(p.id)} ${metric.unit}` : '—'
        const linkedSensorIds = allSensors.filter(s => s.parcelId === p.id).map(s => s.id)
        const openDetail = () => initParcelDetail(p, linkedSensorIds)
        const center = [p.lat, p.lng]

        if (p.latlngs && p.latlngs.length >= 3) {
          const poly = L.polygon(p.latlngs, { color: '#fff', weight: 2, fillColor: '#0172A4', fillOpacity: 0.35 }).addTo(mapInstance)
          poly.on('click', openDetail)
          bounds.push(...p.latlngs)
        } else {
          bounds.push(center)
        }

        // Centroïde cliquable — tooltip uniquement si la parcelle a la métrique
        const hasMet = hasMetric(p, metricId)
        const dot = L.circleMarker(center, {
          radius: hasMet ? 8 : 6,
          color: '#fff', weight: 2,
          fillColor: '#0172A4',
          fillOpacity: hasMet ? 0.95 : 0.4,
        }).addTo(mapInstance)
        if (hasMet) {
          dot.bindTooltip(label, { permanent: true, direction: 'top', className: 'm-map-tip', interactive: true })
        }
        dot.on('click', openDetail)
      })
      if (bounds.length) {
        mapBounds = bounds
        mapInstance.fitBounds(bounds, { padding: [32, 32] })
      }
      mapInstance.invalidateSize()
    }, 0)
  }

  // Corrige la taille de la carte quand le tab devient visible
  window.addEventListener('m-tab-change', e => {
    if (e.detail === 'parcelles' && view === 'carte') {
      if (mapInstance) {
        setTimeout(() => {
          mapInstance.invalidateSize()
          if (mapBounds?.length) mapInstance.fitBounds(mapBounds, { padding: [32, 32] })
        }, 50)
      }
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
    content.querySelectorAll('.m-tappable[data-plot-id]').forEach(row => {
      row.addEventListener('click', () => {
        const plot = allPlots.find(p => p.id === +row.dataset.plotId); if (!plot) return
        const linkedSensorIds = allSensors.filter(s => s.parcelId === plot.id).map(s => s.id)
        initParcelDetail(plot, linkedSensorIds)
      })
    })
  }

  render()
}
