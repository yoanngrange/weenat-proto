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
  'TH':       'Thermomètre-hygromètre',
  'T_MINI':   'Thermomètre de sol',
  'W':        'Anémomètre',
  'PYRANO':   'Pyranomètre',
  'PAR':      'Capteur PAR',
  'LWS':      "Capteur d'humectation foliaire",
  'T_GEL':    'Capteur de gel',
  'CHP-15/30':'Tensiomètre',
  'CHP-30/60':'Tensiomètre',
  'CHP-60/90':'Tensiomètre',
  'CAPA-30-3':'Sonde capacitive',
  'CAPA-60-6':'Sonde capacitive',
  'EC':       'Sonde de fertirrigation',
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

function getSensorName(s) {
  try {
    const names = JSON.parse(localStorage.getItem('weenat-sensor-names')) || {}
    return names[s.id] || s.serial
  } catch { return s.serial }
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

function contrastColor(hex) {
  const r = parseInt(hex.slice(1,3), 16), g = parseInt(hex.slice(3,5), 16), b = parseInt(hex.slice(5,7), 16)
  return (0.299*r + 0.587*g + 0.114*b) / 255 > 0.5 ? '#000000' : '#ffffff'
}

function getMetricColor(id, v) {
  switch (id) {
    case 'pluie':       return v < 8 ? '#C1E1FF' : v < 18 ? '#2E75B6' : '#0B3A64'
    case 'temp':        return v < 12 ? '#FEE7B4' : v < 18 ? '#FBAF05' : '#7D5702'
    case 'hum':         return v < 40 ? '#E3C7FF' : v < 70 ? '#5B12A4' : '#29084A'
    case 'pothydr':     return v < 80 ? '#E2EAC7' : v < 150 ? '#A6C157' : '#7D9537'
    case 'teneur':      return v < 15 ? '#F7D2A1' : v < 30 ? '#ED9A2C' : '#BC7210'
    case 'temp_sol':    return v < 8 ? '#D9C6BF' : v < 18 ? '#795548' : '#484646'
    case 'temp_sche':   return v < 0 ? '#9DECDF' : v < 10 ? '#23B19B' : '#177365'
    case 'temp_hum':    return v < 0 ? '#D2DEFA' : v < 10 ? '#5E88EC' : '#1B56E4'
    case 'rayonnement': return v < 200 ? '#FBFBB6' : v < 400 ? '#CBCB0B' : '#838307'
    case 'par':         return v < 500 ? '#F9EED2' : v < 1200 ? '#E8B44C' : '#9B6E00'
    case 'vent':        return v < 15 ? '#E1E1E1' : v < 30 ? '#616161' : '#343232'
    case 'humectation': return v < 30 ? '#B2FFF9' : v < 70 ? '#00887E' : '#003D39'
    default:            return '#0172A4'
  }
}

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
    if (role === 'new' || role === 'new-adherent') return []
    if (isAdmin) {
      if (orgFilter === 'anomalies') return allSensors.filter(s => s.event && (Array.isArray(s.event) ? s.event.length > 0 : true))
      if (orgFilter === 'all') return allSensors
      if (orgFilter === String(ADMIN_ORG_ID)) {
        const ids = new Set(allPlots.filter(p => p.orgId === ADMIN_ORG_ID).map(p => p.id))
        return allSensors.filter(s => s.parcelIds.some(id => ids.has(id)))
      }
      const ids = new Set(allPlots.filter(p => String(p.orgId) === orgFilter).map(p => p.id))
      return allSensors.filter(s => s.parcelIds.some(id => ids.has(id)))
    }
    // Adhérent
    const myIds       = new Set(allPlots.filter(p => p.orgId === ADHERENT_ORG_ID).map(p => p.id))
    const mine        = allSensors.filter(s => s.parcelIds.some(id => myIds.has(id)))
    const shared      = allSensors.filter(s => !s.parcelIds.some(id => myIds.has(id)) && METEO_MODELS.includes(s.model))
    if (orgFilter === 'mine')    return mine
    if (orgFilter === 'network') return shared
    return [...mine, ...shared]
  }

  function sensorPos(s) {
    const p = s.parcelIds.length ? plotById[s.parcelIds[0]] : null
    if (!p) return null
    // Offset déterministe par capteur (~50m max) pour simuler la position physique réelle
    const dLat = ((s.id * 7919) % 1000 - 500) / 1000000
    const dLng = ((s.id * 6271) % 1000 - 500) / 1000000
    return { lat: p.lat + dLat, lng: p.lng + dLng, name: p.name }
  }

  function sensorCommune(s) {
    const p = s.parcelIds.length ? plotById[s.parcelIds[0]] : null
    return (p ? orgById[p.orgId]?.ville : null) || orgById[s.orgId]?.ville || null
  }

  function destroyMap() {
    if (mapInstance) { try { mapInstance.remove() } catch (e) {} mapInstance = null; mapBounds = null }
  }

  function render() {
    destroyMap()
    const metric      = METRICS.find(m => m.id === metricId) || METRICS[0]
    const sensors     = getSensors()

    let orgOpts
    const hasAnomalies = allSensors.some(s => s.event && (Array.isArray(s.event) ? s.event.length > 0 : true))
    if (isAdmin) {
      orgOpts = `
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${orgFilter === 'all' ? ' selected' : ''}>Toutes les organisations</option>
            ${hasAnomalies ? `<option value="anomalies"${orgFilter === 'anomalies' ? ' selected' : ''}>⚠ Anomalies capteurs</option>` : ''}
            <option value="${ADMIN_ORG_ID}"${orgFilter === String(ADMIN_ORG_ID) ? ' selected' : ''}>Breiz'Agri Conseil (réseau)</option>
            ${adherentOrgs.map(o => `<option value="${o.id}"${orgFilter === String(o.id) ? ' selected' : ''}>${o.name}</option>`).join('')}
          </select>
        </div>`
    } else {
      const myOrg = orgs.find(o => o.id === ADHERENT_ORG_ID)
      orgOpts = `
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${orgFilter === 'all' ? ' selected' : ''}>Tous les capteurs du réseau</option>
            <option value="mine"${orgFilter === 'mine' ? ' selected' : ''}>${myOrg?.name || 'Mon exploitation'} uniquement</option>
          </select>
        </div>`
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
          const v         = measures ? getVal(s.id) : null
          const valHtml   = measures
            ? `<span class="m-sensor-val" style="color:${getMetricColor(metricId, v)}">${v} ${metric.unit}</span>`
            : `<span class="m-sensor-val m-sensor-val--na">—</span>`
          const anomaly = s.event && (Array.isArray(s.event) ? s.event.length > 0 : true)
          return `
            <div class="m-sensor-row m-tappable" data-sensor-id="${s.id}">
              <div class="m-sensor-icon" style="position:relative;background:${isMeteo ? '#0172A420' : '#5b8dd920'};color:${isMeteo ? '#0172A4' : '#5b8dd9'}">
                <i class="bi bi-broadcast"></i>
                ${anomaly ? '<span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff"></span>' : ''}
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${modelName(s.model)} - ${s.model}</span>
                <span class="m-sensor-sub">${[sensorCommune(s), getSensorName(s)].filter(Boolean).join(' - ')}</span>
                ${anomaly ? `<span style="font-size:11px;color:#ff3b30;font-weight:500"><i class="bi bi-exclamation-triangle-fill"></i> ${Array.isArray(s.event) ? s.event[0] : s.event}</span>` : ''}
              </div>
              ${valHtml}
            </div>`}).join('')}</div>`
      : (role === 'new' || role === 'new-adherent')
        ? `<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Vous n'avez pas encore de capteur</p><button onclick="window.showMobileAddPage?.()" style="margin-top:8px;background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer">Ajouter un capteur</button></div>`
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
      if (!sensors.length && (role === 'new' || role === 'new-adherent')) {
        const org = orgs.find(o => o.id === ADHERENT_ORG_ID)
        if (org) mapInstance.setView([org.lat, org.lng], 13)
        mapInstance.invalidateSize()
        const wrap = el.parentElement
        wrap.style.position = 'relative'
        const ov = document.createElement('div')
        ov.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none'
        ov.innerHTML = `
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-broadcast" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de capteur</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Ajoutez votre premier capteur pour commencer à collecter des données.</p>
            <button id="empty-add-sensor-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Ajouter un capteur</button>
          </div>`
        wrap.appendChild(ov)
        wrap.querySelector('#empty-add-sensor-btn').addEventListener('click', () => window.showMobileAddPage?.())
        return
      }
      const bounds = []
      sensors.forEach(s => {
        const pos = sensorPos(s); if (!pos) return
        const measures = sensorMeasures(s.model, metricId)
        const isMeteo  = METEO_MODELS.includes(s.model)
        const dotColor = measures ? getMetricColor(metricId, getVal(s.id)) : (isMeteo ? '#0172A4' : '#5b8dd9')
        const cm = L.circleMarker([pos.lat, pos.lng], {
          radius: measures ? 10 : 7,
          color: '#fff', weight: 2,
          fillColor: dotColor,
          fillOpacity: measures ? 0.95 : 0.45,
        }).addTo(mapInstance)
        if (measures) {
          cm.bindTooltip(`${getVal(s.id)} ${metric.unit}`, { permanent: true, direction: 'top', className: 'm-map-tip', interactive: true })
          const applyTipStyle = el => {
            if (!el) return
            const tc = contrastColor(dotColor)
            el.style.setProperty('background', dotColor, 'important')
            el.style.setProperty('color', tc, 'important')
            el.style.setProperty('border-color', tc, 'important')
            el.style.setProperty('box-shadow', 'none', 'important')
          }
          const ttEl = cm.getTooltip()?.getElement()
          if (ttEl) applyTipStyle(ttEl)
          cm.on('tooltipopen', e => applyTipStyle(e.tooltip.getElement()))
        }
        cm.on('click', () => initSensorDetail(s, 'donnees', role))
        if (s.event && (Array.isArray(s.event) ? s.event.length > 0 : true)) {
          L.marker([pos.lat, pos.lng], {
            icon: L.divIcon({ className: '', html: '<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>', iconSize: [0,0], iconAnchor: [0,0] }),
            interactive: false, zIndexOffset: 500,
          }).addTo(mapInstance)
        }
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
    if (e.detail !== 'capteurs') return
    render()
    if (view === 'carte' && mapInstance) {
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
        initSensorDetail(sensor, 'donnees', role)
      })
    })
  }

  render()

  window.addEventListener('weenat-sensor-renamed', () => { if (view === 'liste') render() })
}
