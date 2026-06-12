import { pushDetail, popDetail } from '../nav.js'
import { showToast, showSheet, showConfirmSheet } from '../ui.js'
import { orgs }                 from '../../data/orgs.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { IRRIG_SEASON } from '../../data/irrigations.js'
import { plots as allPlots }    from '../../data/plots.js'
import { getParcel, getOrgData, patchParcel } from '../../data/store.js'
import { IRRIG_TYPES, SOIL_TYPES, SOIL_ANALYSIS_OPTION, ENV_TYPES } from '../../data/constants.js'
import { getMJournal, saveMJournal, addMJournalEntry } from '../journal-store.js'
import { addMesureFavorite, addCumulFavorite } from './dashboard.js'

const _role = new URLSearchParams(window.location.search).get('role') === 'adherent' ? 'adherent' : 'admin'

const cumulThresholds = { djMin: 0, djMax: 18, hfSeuil: 7.2 }

const DASH_CUMUL_META = {
  dj:    { metricLabel: 'Degrés-jours',        unit: 'DJ', icon: 'bi-thermometer-sun', color: '#FBAF05' },
  hf:    { metricLabel: 'Heures de froid',      unit: 'h',  icon: 'bi-thermometer-low', color: '#5AC8FA' },
  pluie: { metricLabel: 'Cumul de pluie',       unit: 'mm', icon: 'bi-droplet-fill',    color: '#2E75B6' },
  rayo:  { metricLabel: 'Rayonnement solaire',  unit: 'MJ', icon: 'bi-sun-fill',        color: '#CBCB0B' },
  etp:   { metricLabel: 'Évapotranspiration',   unit: 'mm', icon: 'bi-moisture',        color: '#7DBDD7' },
  humec: { metricLabel: 'Humectation foliaire', unit: 'h',  icon: 'bi-droplet-half',    color: '#00887E' },
  irrigation: { metricLabel: "Cumul d'irrigation", unit: 'mm', icon: 'bi-moisture',     color: '#FF8C00' },
}
const WF_MAX = 4  // max mesures favorites (cf. dashboard.js)

// Widget catalog — each item maps to a shared widget ID (same as web parcel page)
const WIDGET_CATALOG = [
  { title: 'Cumuls',                    items: [{ label: 'Cumuls',                 id: 'cumuls'        }] },
  { title: 'Prévisions',                items: [{ label: 'Prévisions à 5 jours',   id: 'previsions-5j' },
                                                  { label: 'Prévisions à 6 heures', id: 'previsions-6h' }] },
  { title: 'Outils aide à la décision', items: [{ label: "Maï'zy",                id: 'maizy'         },
                                                  { label: 'Weephyt',              id: 'weephyt'       },
                                                  { label: 'Decitrait',            id: 'decitrait'     },
                                                  { label: 'Tavelure Pomme',       id: 'tavelure'      }] },
  { title: 'Indicateurs',               items: [{ label: 'DPV',                    id: 'dpv'           },
                                                  { label: 'THI',                  id: 'thi'           },
                                                  { label: 'Température de rosée', id: 'temp-rosee'    },
                                                  { label: 'Température du sol',   id: 'temp-sol'      }] },
  { title: 'Capteurs',                  items: [{ label: 'Station météo',           id: 'w-station'     },
                                                  { label: 'Thermomètre-hygromètre',    id: 'w-thygro'      },
                                                  { label: 'Thermomètre de sol',   id: 'w-tsol'        },
                                                  { label: 'Anémomètre',           id: 'w-anem'        },
                                                  { label: 'Pyranomètre',          id: 'w-pyrano'      },
                                                  { label: "Capteur d'humectation foliaire", id: 'w-lws'         },
                                                  { label: 'Capteur PAR',          id: 'w-par'         },
                                                  { label: 'Sonde capacitive',     id: 'w-capa'        },
                                                  { label: 'Tensiomètre',          id: 'w-tensio'      },
                                                  { label: 'Fertirrigation',       id: 'w-ec'          }] },
  { title: 'Irrigation',                items: [{ label: 'Irrigations',             id: 'irrigations'   }] },
]

// Sensor model → widget ID mapping (shared with widgetsView renderer)
const WIDGET_SENSOR_MODELS = {
  'w-station': ['P+', 'PT', 'P', 'SMV'],
  'w-thygro':  ['TH'],
  'w-tsol':    ['T_MINI'],
  'w-anem':    ['W'],
  'w-pyrano':  ['PYRANO'],
  'w-lws':     ['LWS'],
  'w-par':     ['PAR'],
  'w-capa':    ['CAPA-30-3', 'CAPA-60-6'],
  'w-tensio':  ['CHP-15/30', 'CHP-30/60', 'CHP-60/90'],
  'w-ec':      ['EC'],
}

// ─── Shared widget storage (mirrors web dash-widgets-parcel-* key) ─────────────
const _PARCEL_DASH_KEY = id => `dash-widgets-parcel-${id}`

function _computeDefaultWidgetIds(parcel, linkedSensorIds) {
  const linked  = linkedSensorIds.map(id => allSensors.find(s => s.id === id)).filter(Boolean)
  const models  = new Set(linked.map(s => s.model))
  const ids     = ['previsions-5j', 'cumuls', 'irrigations']
  Object.entries(WIDGET_SENSOR_MODELS).forEach(([wid, wModels]) => {
    if (wModels.some(m => models.has(m))) ids.push(wid)
  })
  return ids
}

function _getParcelWidgetIds(parcel, linkedSensorIds) {
  try {
    const stored = JSON.parse(localStorage.getItem(_PARCEL_DASH_KEY(parcel.id)))
    if (Array.isArray(stored) && stored.length) return stored
  } catch (_) {}
  return _computeDefaultWidgetIds(parcel, linkedSensorIds)
}

function _saveParcelWidgetIds(parcelId, ids) {
  localStorage.setItem(_PARCEL_DASH_KEY(parcelId), JSON.stringify(ids))
}

function openWidgetCatalog(parcel, linkedSensorIds, onWidgetAdded) {
  const activeIds = new Set(_getParcelWidgetIds(parcel, linkedSensorIds))

  const sectionsHtml = WIDGET_CATALOG.map((sec, i) => `
    <div class="m-list-section-header"${i > 0 ? ' style="margin-top:20px"' : ''}>${sec.title}</div>
    ${sec.items.map(item => {
      const already = activeIds.has(item.id)
      return `
        <div class="m-wcat-item">
          <span>${item.label}</span>
          ${already
            ? `<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>`
            : `<button class="m-wcat-add" data-wid="${item.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`
    }).join('')}`).join('')

  const layer = pushDetail(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Ajouter un widget</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:8px 0 32px">${sectionsHtml}</div>
    </div>`)

  layer.querySelector('.m-detail-back').addEventListener('click', popDetail)
  layer.querySelectorAll('.m-wcat-add').forEach(btn => {
    btn.addEventListener('click', () => {
      const wid = btn.dataset.wid
      const ids = _getParcelWidgetIds(parcel, linkedSensorIds)
      if (!ids.includes(wid)) {
        ids.push(wid)
        _saveParcelWidgetIds(parcel.id, ids)
      }
      popDetail()
      onWidgetAdded?.()
    })
  })
}

function openAddPage(parcel) {
  const isAdmin = _role === 'admin'
  const layer = pushDetail(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Ajouter</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="detail-content" class="m-detail-content" style="top:52px">
      <div style="padding:20px 16px">
        <div class="m-add-section-label">Mon exploitation</div>
        <div class="m-add-grid">
          <button class="m-add-item" data-action="parcelle"><div class="m-add-icon"><i class="bi bi-geo-alt-fill"></i></div><span>Parcelle</span></button>
          <button class="m-add-item" data-action="capteur"><div class="m-add-icon"><i class="bi bi-broadcast"></i></div><span>Capteur</span></button>
          <button class="m-add-item" data-action="station"><div class="m-add-icon"><i class="bi bi-cloud-sun-fill"></i></div><span>Station météo virtuelle</span></button>
          <button class="m-add-item" data-action="membre"><div class="m-add-icon"><i class="bi bi-person-plus-fill"></i></div><span>Membre</span></button>
          <button class="m-add-item" data-action="irrigation"><div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-droplet-fill"></i></div><span>Irrigation</span></button>
          <button class="m-add-item" data-action="strategie-irrigation"><div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-arrow-repeat"></i></div><span>Saison d'irrigation</span></button>
          <button class="m-add-item" data-action="calendrier"><div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-calendar3"></i></div><span>Voir les irrigations</span></button>
        </div>
        ${isAdmin ? `
        <div class="m-add-section-label" style="margin-top:20px">Mon réseau</div>
        <div class="m-add-grid">
          <button class="m-add-item" data-action="adherent"><div class="m-add-icon"><i class="bi bi-building"></i></div><span>Adhérent</span></button>
        </div>` : ''}
        <div class="m-add-section-label" style="margin-top:20px">Mon compte</div>
        <div class="m-add-grid">
          <button class="m-add-item" data-action="alerte"><div class="m-add-icon"><i class="bi bi-bell-fill"></i></div><span>Alerte</span></button>
          <button class="m-add-item" data-action="export"><div class="m-add-icon"><i class="bi bi-download"></i></div><span>Export de données</span></button>
        </div>
      </div>
    </div>`)

  layer.querySelector('.m-detail-back').addEventListener('click', popDetail)
  layer.querySelectorAll('.m-add-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action
      if (action === 'irrigation') {
        popDetail()
        import('./irrigation.js').then(m => m.openIrrigationSaisie([parcel], showToast, { ids: [parcel.id], label: parcel.name }))
      } else if (action === 'strategie-irrigation') {
        popDetail()
        import('./irrigation.js').then(m => m.openIrrigationStrategie([parcel], showToast, { ids: [parcel.id], label: parcel.name }))
      } else if (action === 'calendrier') {
        popDetail()
        import('./irrigation.js').then(m => m.openCalendar([parcel], ''))
      } else {
        showToast('Fonctionnalité à venir')
      }
    })
  })
}

// ─── Chart helpers ────────────────────────────────────────────────────────────
const CHART_METRICS = {
  etp:          { label: 'Évapotranspiration',   unit: 'mm/j', color: '#7DBDD7', cumul: true,  cumulsType: 'etp'   },
  rayonnement:  { label: 'Rayonnement solaire',  unit: 'W/m²', color: '#CBCB0B', cumul: false, cumulsType: 'rayo'  },
  temp_rosee:   { label: 'Température de rosée', unit: '°C',   color: '#72B0D8', cumul: false },
  pluie:        { label: 'Pluie',                unit: 'mm',   color: '#2E75B6', cumul: true,  cumulsType: 'pluie' },
  temperature:  { label: 'Température',          unit: '°C',   color: '#FBAF05', cumul: false, cumulsType: 'temp'  },
  humidite:     { label: 'Humidité',          unit: '%',    color: '#5B12A4', cumul: false },
  pothydr:      { label: 'Potentiel hydrique',   unit: 'kPa',  color: '#A6C157', cumul: false },
  teneur:       { label: 'Teneur en eau',         unit: '%vol', color: '#ED9A2C', cumul: false },
  temp_sol:     { label: 'Température sol',       unit: '°C',   color: '#795548', cumul: false },
  humectation:  { label: "Capteur d'humectation foliaire", unit: '%',    color: '#00887E', cumul: false, cumulsType: 'hws'   },
  vent:         { label: 'Vent',                 unit: 'km/h', color: '#616161', cumul: false },
  par:          { label: 'Rayonnement PAR',      unit: 'µmol/m²/s', color: '#4CBB17', cumul: false },
  irrigation:   { label: 'Irrigation',           unit: 'mm',   color: '#FF8C00', cumul: true,  cumulsType: 'irrigation' },
}

// Métriques disposant de prévisions et leur horizon (en jours)
const FORECAST_DAYS = {
  pluie: 14, temperature: 14, humidite: 14, vent: 14, etp: 14, temp_rosee: 14, rayonnement: 14,
  pothydr: 7, irrigation: 7,
}

const SENSOR_MODEL_METRICS = {
  'P+':    ['pluie', 'temperature', 'humidite'],
  'PT':    ['pluie', 'temperature'],
  'P':     ['pluie'],
  'SMV':   ['pluie', 'temperature', 'humidite'],
  'TH':    ['temperature', 'humidite'],
  'W':     ['vent'],
  'PYRANO':['rayonnement'],
  'PAR':   ['par'],
  'LWS':   ['humectation'],
  'CHP-15/30': ['pothydr', 'temp_sol'],
  'CHP-30/60': ['pothydr', 'temp_sol'],
  'CHP-60/90': ['pothydr', 'temp_sol'],
  'CAPA-30-3': ['teneur', 'temp_sol'],
  'CAPA-60-6': ['teneur', 'temp_sol'],
  'T_MINI':    ['temp_sol'],
  'EC':        ['teneur', 'temp_sol'],
}

function mockSeries(metricId, count) {
  const cfg = {
    etp:          { base: 3,   amp: 1.5, min: 0,   max: 8   },
    rayonnement:  { base: 350, amp: 300, min: 0,   max: 900 },
    temp_rosee:   { base: 9,   amp: 5,   min: -2,  max: 18  },
    pluie:        { base: 2,   amp: 6,   min: 0,   max: 30, sparse: true },
    temperature:  { base: 15,  amp: 8,   min: -5,  max: 35  },
    humidite:     { base: 65,  amp: 20,  min: 20,  max: 100 },
    pothydr:      { base: 80,  amp: 60,  min: 0,   max: 200 },
    teneur:       { base: 30,  amp: 12,  min: 5,   max: 50  },
    temp_sol:     { base: 14,  amp: 5,   min: 0,   max: 35  },
    humectation:  { base: 20,  amp: 80,  min: 0,   max: 100, sparse: true },
    vent:         { base: 15,  amp: 15,  min: 0,   max: 80  },
    par:          { base: 900, amp: 800, min: 0,   max: 2000 },
  }[metricId] || { base: 50, amp: 20, min: 0, max: 100 }
  return Array.from({ length: count }, (_, i) => {
    const t = i / count * Math.PI * 4
    if (cfg.sparse && Math.random() > 0.25) return 0
    const v = cfg.base + cfg.amp * Math.sin(t - 1) + (Math.random() - 0.5) * cfg.amp * 0.5
    return Math.max(cfg.min, Math.min(cfg.max, v))
  })
}

const PERIOD_COUNTS = { '365d': 52, '30d': 60, '7d': 84, 'j7j7': 84, 'hier': 48, '1d': 24, 'custom': 60 }
const PERIOD_MINS   = { '365d': 525600, '30d': 43200, '7d': 10080, 'j7j7': 10080, 'hier': 1440, '1d': 1440, 'custom': 10080 }

// Série synchronisée avec les irrigations saisies (réelles + planifiées) d'une parcelle
function irrigationSeries(plotId, period, fcCount = 0, forecastMins = 0) {
  const count    = PERIOD_COUNTS[period] || 60
  const totalMin = PERIOD_MINS[period] || 10080
  const now      = Date.now()
  const startMs  = now - totalMin * 60000
  const bucketMs = (totalMin * 60000) / count
  const vals     = new Array(count + fcCount).fill(0)
  const fcBucketMs = fcCount > 0 ? (forecastMins * 60000) / fcCount : 0
  IRRIG_SEASON.filter(i => i.plotId === plotId).forEach(i => {
    const t = new Date(i.iso).getTime()
    if (t < startMs) return
    if (t <= now) {
      const idx = Math.min(count - 1, Math.floor((t - startMs) / bucketMs))
      vals[idx] += i.mm
    } else if (fcCount > 0 && t <= now + forecastMins * 60000) {
      const idx = Math.min(fcCount - 1, Math.floor((t - now) / fcBucketMs))
      vals[count + idx] += i.mm
    }
  })
  return vals
}

function makeXLabels(period, W, PL, PR, H, PB = 20, forecastMins = 0) {
  const histMins = PERIOD_MINS[period] || 10080
  const totalMins = histMins + forecastMins
  const now = new Date()
  const fmt = d => {
    if (period === '1d' || period === 'hier')
      return `${String(d.getHours()).padStart(2, '0')}h`
    if (period === '365d')
      return d.toLocaleDateString('fr-FR', { month: 'short' })
    return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`
  }
  const N = 4, iW = W - PL - PR, axisY = H - PB
  return Array.from({ length: N + 1 }, (_, i) => {
    const ratio = i / N
    const d = new Date(now.getTime() + (ratio * totalMins - histMins) * 60000)
    const x = (PL + ratio * iW).toFixed(1)
    const anchor = i === 0 ? 'start' : i === N ? 'end' : 'middle'
    return [
      `<line x1="${x}" y1="${axisY}" x2="${x}" y2="${axisY + 4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,
      `<text x="${x}" y="${H - 3}" text-anchor="${anchor}" font-size="9" fill="#8e8e93" font-family="-apple-system">${fmt(d)}</text>`,
    ].join('')
  }).join('')
}

function svgChart(metricId, color, isCumul, period = '7d', unit = '', plotId = null) {
  const count = PERIOD_COUNTS[period] || 60
  const histMins = PERIOD_MINS[period] || 10080
  const periodDays = histMins / 1440
  const fcDays = FORECAST_DAYS[metricId] || 0
  const fcCount = fcDays > 0 ? Math.max(1, Math.round(Math.min(fcDays, periodDays) / periodDays * count)) : 0
  const forecastMins = fcCount > 0 ? Math.min(fcDays, periodDays) / periodDays * histMins : 0

  const vals = metricId === 'irrigation'
    ? irrigationSeries(plotId, period, fcCount, forecastMins)
    : mockSeries(metricId, count + fcCount)
  const W = 320, H = 100, PL = 34, PR = 6, PT = 10, PB = 20
  const iW = W - PL - PR, iH = H - PT - PB
  const minV = isCumul ? 0 : Math.min(...vals)
  const maxV = Math.max(...vals, minV + 0.001)
  const range = maxV - minV

  const xOf = i => PL + i / (vals.length - 1) * iW
  const yOf = v => PT + iH - ((v - minV) / range) * iH
  const gId = `g${Math.random().toString(36).slice(2,8)}`

  const yLabels = [0, 0.5, 1].map(t => {
    const v = minV + t * range
    const y = PT + iH - t * iH
    return `<text x="${PL - 3}" y="${(y + 3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${v < 10 ? v.toFixed(1) : Math.round(v)}</text>`
  }).join('')

  const grid = [0.25, 0.5, 0.75].map(t => {
    const y = (PT + iH - t * iH).toFixed(1)
    return `<line x1="${PL}" y1="${y}" x2="${W - PR}" y2="${y}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`
  }).join('')
  const axisLine = `<line x1="${PL}" y1="${PT + iH}" x2="${W - PR}" y2="${PT + iH}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`
  const xLabels  = makeXLabels(period, W, PL, PR, H, PB, forecastMins)

  // Zone striée représentant la portion "prévisions" du graphique
  let forecastBg = ''
  if (fcCount > 0) {
    const boundaryX = xOf(count - 0.5)
    const stripeId = `stripe${gId}`
    forecastBg = `<defs><pattern id="${stripeId}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.06)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.18)" stroke-width="3"/>
      </pattern></defs>
      <rect x="${boundaryX.toFixed(1)}" y="${PT}" width="${(W - PR - boundaryX).toFixed(1)}" height="${iH}" fill="url(#${stripeId})"/>
      <line x1="${boundaryX.toFixed(1)}" y1="${PT}" x2="${boundaryX.toFixed(1)}" y2="${PT + iH}" stroke="rgba(142,142,147,.35)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(W - PR - 3).toFixed(1)}" y="${(PT + 9).toFixed(1)}" text-anchor="end" font-size="8" fill="#8e8e93" font-family="-apple-system" font-style="italic">Prévisions</text>`
  }

  if (isCumul) {
    const bw = iW / vals.length * 0.7
    const bars = vals.map((v, i) => {
      const bh = ((v - minV) / range) * iH
      const by = PT + iH - bh
      const isFc = i >= count
      return `<rect x="${(xOf(i) - bw / 2).toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="${isFc ? '#C7C7CC' : color}" opacity="${isFc ? '.55' : '.8'}" rx="1"/>`
    }).join('')
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" preserveAspectRatio="none">${forecastBg}${yLabels}${grid}${axisLine}${xLabels}${bars}</svg>`
  }

  const pts = vals.map((v, i) => [xOf(i), yOf(v)])
  const histPts = pts.slice(0, count)
  const fcPts = pts.slice(count - 1)
  const path = histPts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const fcPath = fcCount > 0 ? fcPts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ') : ''
  const area = `${path} L${xOf(count - 1).toFixed(1)},${(PT + iH).toFixed(1)} L${PL},${(PT + iH).toFixed(1)} Z`
  // Encode vals for tooltip
  const encoded = encodeURIComponent(JSON.stringify({ vals: vals.map(v => +v.toFixed(2)), minV: +minV.toFixed(2), maxV: +maxV.toFixed(2) }))

  return `<div class="m-chart-svg-wrap" data-chart="${encoded}" data-color="${color}" data-unit="${unit}" style="position:relative">
    <svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" preserveAspectRatio="none">
      <defs><linearGradient id="${gId}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${color}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${forecastBg}
      ${yLabels}${grid}${axisLine}
      <path d="${area}" fill="url(#${gId})"/>
      <path d="${path}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${fcPath ? `<path d="${fcPath}" fill="none" stroke="${color}" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>` : ''}
      ${pts.map(([x, y], i) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="${color}" opacity="${i >= count ? '.55' : '1'}"/>`).join('')}
      ${xLabels}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`
}

function computeCumuls(metricId, period, type, plotId = null) {
  if (!type) return ''
  const count = PERIOD_COUNTS[period] || 60
  const mins  = PERIOD_MINS[period] || 10080
  const hoursPerPt = mins / (count * 60)
  const vals = metricId === 'irrigation' ? irrigationSeries(plotId, period) : mockSeries(metricId, count)
  let chips = []
  if (type === 'temp') {
    const dj = vals.reduce((s, v) => s + Math.max(0, Math.min(v, cumulThresholds.djMax) - cumulThresholds.djMin), 0) * (hoursPerPt / 24)
    const hf = vals.filter(v => v < cumulThresholds.hfSeuil).length * hoursPerPt
    chips = [
      { label: 'Cumul de degrés jours',    val: `${Math.round(dj)} DJ`, metricId: 'dj', thresholdText: `${cumulThresholds.djMin}°C → ${cumulThresholds.djMax}°C` },
      { label: 'Cumul d\'heures de froid', val: `${Math.round(hf)} h`,  metricId: 'hf', thresholdText: `< ${cumulThresholds.hfSeuil}°C` },
    ]
  } else if (type === 'pluie') {
    const total = vals.reduce((s, v) => s + v, 0)
    chips = [{ label: 'Cumul de pluie', val: `${total.toFixed(1)} mm`, metricId: 'pluie' }]
  } else if (type === 'rayo') {
    const h = vals.filter(v => v > 120).length * hoursPerPt
    chips = [{ label: 'Cumul d\'heures d\'ensoleillement', val: `${Math.round(h)} h`, metricId: 'rayo' }]
  } else if (type === 'etp') {
    const total = vals.reduce((s, v) => s + v, 0) * (hoursPerPt / 24)
    chips = [{ label: 'Cumul d\'évapotranspiration', val: `${total.toFixed(1)} mm`, metricId: 'etp' }]
  } else if (type === 'hws') {
    const h = vals.filter(v => v > 50).length * hoursPerPt
    chips = [{ label: 'Cumul d\'heures d\'humectation foliaire', val: `${Math.round(h)} h`, metricId: 'humec' }]
  } else if (type === 'irrigation') {
    const total = vals.reduce((s, v) => s + v, 0)
    chips = [{ label: 'Cumul irrigation', val: `${total.toFixed(1)} mm`, metricId: 'irrigation' }]
  }
  if (!chips.length) return ''
  return `<div class="m-chart-cumuls">${chips.map(c => {
    const editBtn = (c.metricId === 'dj' || c.metricId === 'hf')
      ? `<button class="m-cumul-edit-btn" data-cumul-metric-id="${c.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`
      : ''
    return `<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${c.label}</span>
          ${c.thresholdText ? `<span class="m-chart-cumul-thresh">${c.thresholdText}</span>` : ''}
        </div>
        <span class="m-chart-cumul-val">${c.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${editBtn}
        <button class="m-cumul-add-btn" data-cumul-label="${c.label}" data-cumul-val="${c.val}" data-cumul-metric-id="${c.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`
  }).join('')}</div>`
}

const MSR_PERIOD_LABELS = { '365d': '365 derniers jours', '30d': '30 derniers jours', '7d': '7 derniers jours', 'j7j7': 'J-7 → J+7', 'hier': 'Hier', '1d': "Aujourd'hui", 'custom': 'Personnalisé' }
const MSR_STEP_LABELS = { '1h': 'Horaire', '1d': 'Journalier', '1w': 'Hebdo' }

function chartCard(metricId, period, sensorId = null, plotId = null, step = '1h', subject = null) {
  const m = CHART_METRICS[metricId]; if (!m) return ''
  const cumulHtml = computeCumuls(metricId, period, m.cumulsType, plotId)
  const detailLink = (sensorId || metricId === 'irrigation')
    ? `<div class="m-chart-details-link" data-sensor-id="${sensorId ?? ''}" data-metric-id="${metricId}">Voir détails →</div>`
    : ''
  const favBtn = (subject && metricId !== 'irrigation')
    ? `<button class="m-msr-add-btn" data-msr-metric-id="${metricId}" data-msr-subject-key="${subject.key}" data-msr-subject-label="${subject.label}" data-msr-period="${period}" data-msr-step="${step}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`
    : ''
  return `
    <div class="m-chart-card" data-metric-id="${metricId}">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${m.color}">${m.label}</span>
        ${favBtn}
      </div>
      ${svgChart(metricId, m.color, m.cumul, period, m.unit || '', plotId)}
      ${detailLink}
      ${cumulHtml}
    </div>`
}

function addMesureToFavorites(btn) {
  const metricId     = btn.dataset.msrMetricId
  const subjectKey   = btn.dataset.msrSubjectKey
  const subjectLabel = btn.dataset.msrSubjectLabel
  const period       = btn.dataset.msrPeriod
  const step         = btn.dataset.msrStep
  const m = CHART_METRICS[metricId]
  if (!m) return
  const result = addMesureFavorite({
    subjectKey, subjectLabel, metricId,
    metricLabel: m.label, unit: m.unit || '',
    period, periodLabel: MSR_PERIOD_LABELS[period] || period,
    step, stepLabel: MSR_STEP_LABELS[step] || step,
    color: m.color,
  })
  if (result === 'max') { showToast(`Maximum de mesures atteint (${WF_MAX})`); return }
  if (result === 'dup') { showToast('Cette mesure est déjà dans vos favoris'); return }
  showToast('Mesure ajoutée au tableau de bord')
}

function contrastColor(hex) {
  const r = parseInt(hex.slice(1,3), 16), g = parseInt(hex.slice(3,5), 16), b = parseInt(hex.slice(5,7), 16)
  return (0.299*r + 0.587*g + 0.114*b) / 255 > 0.5 ? '#000000' : '#ffffff'
}

// ─── Chart tooltip ───────────────────────────────────────────────────────────
function bindChartTooltip(wrap) {
  const data = JSON.parse(decodeURIComponent(wrap.dataset.chart || '{}'))
  if (!data.vals) return
  const { vals, minV, maxV } = data
  const tip   = wrap.querySelector('.m-chart-tip')
  const line  = wrap.querySelector('.m-chart-crosshair')
  const color = wrap.dataset.color || '#0172A4'
  const unit  = wrap.dataset.unit  || ''

  function onMove(clientX) {
    const rect = wrap.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const idx = Math.round(ratio * (vals.length - 1))
    const val = vals[idx]
    const x = ratio * 100
    const display = (val < 10 ? val.toFixed(1) : String(Math.round(val))) + (unit ? ` ${unit}` : '')
    const tc = contrastColor(color)
    line.style.cssText = `display:block;position:absolute;top:0;bottom:20px;left:${x}%;width:1px;background:${color};opacity:.5`
    tip.style.cssText  = `display:block;position:absolute;top:8px;left:${Math.min(x, 75)}%;background:${color};color:${tc};border:1.5px solid ${tc};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`
    tip.textContent = display
  }
  function onEnd() { line.style.display = 'none'; tip.style.display = 'none' }

  wrap.addEventListener('pointermove', e => { e.preventDefault(); onMove(e.clientX) })
  wrap.addEventListener('pointerdown', e => onMove(e.clientX))
  wrap.addEventListener('pointerup',   onEnd)
  wrap.addEventListener('pointerleave',onEnd)
  wrap.style.cursor = 'crosshair'
}

// ─── Views ────────────────────────────────────────────────────────────────────
function irrigationWidget(parcel) {
  const irrigs  = IRRIG_SEASON.filter(i => i.plotId === parcel.id)
  const real    = irrigs.filter(i => i.real)
  const plan    = irrigs.filter(i => !i.real)
  const tReal   = real.reduce((s, i) => s + i.mm, 0)
  const tPlan   = plan.reduce((s, i) => s + i.mm, 0)
  const irrType = getParcel(parcel.id).irrigation ?? parcel.irrigation

  const NO_IRRIG_TYPES = new Set(['Non irrigué', 'Non renseigné', ''])
  const hasIrrigType = irrType && !NO_IRRIG_TYPES.has(irrType)

  const actionsHtml = `
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-act-saisie" type="button"${!hasIrrigType ? ' disabled' : ''}>+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-act-saison" type="button"${!hasIrrigType ? ' disabled' : ''}>↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`

  if (!hasIrrigType) {
    return mWidgetCard('Irrigations', 'bi-moisture', '#FF8C00', `
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3,#8e8e93)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez préciser un type d'irrigation.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-set-type" type="button" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`, 'irrigations')
  }

  if (!irrigs.length) {
    return mWidgetCard('Irrigations', 'bi-moisture', '#FF8C00', `
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3,#8e8e93);padding:8px 0">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${actionsHtml}
      </div>`, 'irrigations')
  }

  // Paramètres actuels de la saison (quantité + fréquence), si la parcelle suit une saison d'irrigation
  let seasonParamsHtml = ''
  const isSeason = irrigs.some(i => i.fromStrategy)
  if (isSeason) {
    const sorted = [...irrigs].sort((a, b) => a.iso.localeCompare(b.iso))
    const last   = sorted[sorted.length - 1]
    const prev   = sorted[sorted.length - 2]
    const freqDays = prev ? Math.round((new Date(last.iso) - new Date(prev.iso)) / 86400000) : null
    seasonParamsHtml = `
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${last.mm} mm</strong>${freqDays ? ` tous les <strong>${freqDays} jours</strong>` : ''}.</div>
      </div>`
  }

  const tTotal = tReal + tPlan

  const footerHtml = `<div class="m-irrig-footer-link">Voir les irrigations →</div>`

  const body = `
    <div class="w-irrig-layout">
      <div class="w-irrig-kpis">
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Effectuées</div>
          <div class="w-irrig-kpi-val" style="color:#E07820">${tReal} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Planifiées</div>
          <div class="w-irrig-kpi-val" style="color:#FFB705">${tPlan} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Total</div>
          <div class="w-irrig-kpi-val" style="color:#8e8e93">${tTotal} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${seasonParamsHtml}
      ${actionsHtml}
    </div>
    ${footerHtml}`

  return mWidgetCard('Irrigations', 'bi-moisture', '#FF8C00', body, 'irrigations')
}

function widgetsView(parcel, linkedSensorIds = []) {
  const activeIds = _getParcelWidgetIds(parcel, linkedSensorIds)
  const sensors   = linkedSensorIds.map(id => allSensors.find(s => s.id === id)).filter(Boolean)

  let html = ''
  for (const wid of activeIds) {
    if (wid === 'irrigations')    html += irrigationWidget(parcel)
    else if (wid === 'cumuls')    html += mWidgetCumuls(parcel, linkedSensorIds)
    else if (wid === 'previsions-5j') html += mWidgetPrev5j(parcel)
    else if (WIDGET_SENSOR_MODELS[wid]) {
      const wModels  = new Set(WIDGET_SENSOR_MODELS[wid])
      const wSensors = sensors.filter(s => wModels.has(s.model))
      if (wSensors.length) html += mWidgetSensorCards(wSensors, wid)
    }
  }

  return `
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${html}
    </div>`
}

// ─── Mobile widgets ───────────────────────────────────────────────────────────

function mWidgetCard(title, icon, color, body, id = '', subtitle = '') {
  return `
    <div class="m-widget-card">
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${color}"><i class="bi ${icon}"></i> ${title}</span>
        <button class="m-widget-menu" data-wid="${id}" type="button">•••</button>
      </div>
      ${subtitle ? `<div class="m-widget-card-subtitle">${subtitle}</div>` : ''}
      ${body}
    </div>`
}

function _pcumulVal(parcelId, cid, fromDate) {
  const seed = (parcelId * 9301 + 49297) % 233280
  const RATES = {
    etp:    1.0 + (seed % 60) / 100,
    pluie:  0.8 + (seed % 70) / 100,
    djc:    4.0 + (seed % 60) / 10,
    hfroid: 0.4 + (seed % 12) / 10,
    humec:  0.1 + (seed % 20) / 100,
    enso:   4.0 + (seed % 40) / 10,
  }
  const rate = RATES[cid] ?? 1
  const days = Math.max(0, Math.round((Date.now() - new Date(fromDate)) / 86400000))
  return Math.round(rate * days * 10) / 10
}

const _pcumulKey = id => `m-pcumuls-${id}`
function _loadPCumul(id) { try { return JSON.parse(localStorage.getItem(_pcumulKey(id))) || {} } catch { return {} } }
function _savePCumul(id, patch) {
  const s = _loadPCumul(id)
  localStorage.setItem(_pcumulKey(id), JSON.stringify({ ...s, ...patch }))
}

const _PCUMUL_CFG_FIELDS = {
  djc:    [{ key: 'djMin', label: 'T min (°C)', def: 0 }, { key: 'djMax', label: 'T max (°C)', def: 18 }],
  hfroid: [{ key: 'hfSeuil', label: 'Seuil (°C)', def: 7.2 }],
}

function mWidgetCumuls(parcel, linkedSensorIds = []) {
  const metSet = new Set()
  linkedSensorIds.forEach(id => {
    const s = allSensors.find(x => x.id === id)
    if (s) (SENSOR_MODEL_METRICS[s.model] || []).forEach(m => metSet.add(m))
  })
  const jan1 = `${new Date().getFullYear()}-01-01`
  const st = _loadPCumul(parcel.id)
  const hidden = new Set(st.hidden || [])
  const dates = st.dates || {}
  const cfg = st.cfg || {}
  const seed = parcel.id || 1
  const ri = (a, b) => Math.round(a + ((seed * 9301 + 49297) % 233280) / 233280 * (b - a))

  const allAvailable = [
    { id: 'etp',        label: 'ETP',                  unit: 'mm', color: '#7DBDD7', icon: 'bi-moisture',         val: _pcumulVal(parcel.id, 'etp',        dates['etp']        || jan1), show: true },
    { id: 'enso',       label: 'Rayonnement solaire',  unit: 'h',  color: '#CBCB0B', icon: 'bi-brightness-high',  val: _pcumulVal(parcel.id, 'enso',       dates['enso']       || jan1), show: true },
    { id: 'pluie',      label: 'Pluie',                unit: 'mm', color: '#2E75B6', icon: 'bi-cloud-rain-heavy', val: _pcumulVal(parcel.id, 'pluie',      dates['pluie']      || jan1), show: metSet.has('pluie') },
    { id: 'djc',        label: 'Degrés jours',         unit: 'DJ', color: '#FBAF05', icon: 'bi-thermometer-half', val: _pcumulVal(parcel.id, 'djc',        dates['djc']        || jan1), show: metSet.has('temperature'), cfg: true,
      cfgLabel: `${cfg.djMin ?? 0}–${cfg.djMax ?? 18}°C` },
    { id: 'hfroid',     label: 'Heures de froid',      unit: 'h',  color: '#FEE7B4', icon: 'bi-snow',             val: _pcumulVal(parcel.id, 'hfroid',     dates['hfroid']     || jan1), show: metSet.has('temperature'), cfg: true,
      cfgLabel: `< ${cfg.hfSeuil ?? 7.2}°C` },
    { id: 'humec',      label: 'Humectation',          unit: 'h',  color: '#00887E', icon: 'bi-droplet',          val: _pcumulVal(parcel.id, 'humec',      dates['humec']      || jan1), show: metSet.has('humectation') },
  ].filter(i => i.show)

  const allItems   = allAvailable.filter(i => !hidden.has(i.id))
  const hiddenItems = allAvailable.filter(i => hidden.has(i.id))

  const restoreHtml = hiddenItems.length
    ? `<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${hiddenItems.map(it => `
          <button class="m-pcumul-add" data-cid="${it.id}" data-pid="${parcel.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${it.icon}" style="color:${it.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${it.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join('')}
      </div>`
    : ''

  const body = allItems.length
    ? `<div class="m-cumuls-saved" style="padding:0 0 4px">${allItems.map(it => {
        const d = dates[it.id] || jan1
        return `<div class="m-cumuls-saved-card" style="position:relative">
          <button class="m-pcumul-del m-del-btn" data-cid="${it.id}" data-pid="${parcel.id}" type="button" style="position:absolute;top:8px;right:8px">×</button>
          <div class="m-pcumul-hd">
            <div class="m-pcumul-icon" style="background:${it.color}22;color:${it.color}"><i class="bi ${it.icon}"></i></div>
            <div class="m-pcumul-label" style="color:${it.color}">${it.label}</div>
          </div>
          <div class="m-pcumul-value" style="color:${it.color}">${it.val}<span class="m-pcumul-unit">${it.unit}</span></div>
          <div class="m-pcumul-since">
            <span>Depuis le</span>
            <input type="date" class="m-pcumul-date m-pcumul-date-inp" data-cid="${it.id}" data-pid="${parcel.id}" value="${d}">
            ${it.cfg ? `<button class="m-pcumul-cfg m-pcumul-cfg-btn" data-cid="${it.id}" data-pid="${parcel.id}"><i class="bi bi-gear"></i> ${it.cfgLabel}</button>` : ''}
          </div>
        </div>`
      }).join('')}${restoreHtml}</div>`
    : `<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${restoreHtml}`

  return mWidgetCard('Cumuls', 'bi-bar-chart-fill', '#0172A4', body, 'cumuls')
}

function mWidgetPrev5j(parcel) {
  const DN = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
  const MN = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const WI = ['bi-sun','bi-cloud-sun','bi-cloud','bi-cloud-rain','bi-cloud-lightning-rain']
  const WL = ['Ensoleillé','Part. nuageux','Couvert','Pluvieux','Orageux']
  const today = new Date()
  const org = orgs.find(o => o.id === parcel?.orgId)
  const city = parcel?.ville || org?.ville || '—'
  const pid = parcel?.id || 1
  const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const makeDay = (i, off) => {
    const d = new Date(today); d.setDate(d.getDate() + i)
    const wi = Math.floor(((pid * 7 + i * 3) % 11) / 2.2)
    return {
      lbl: i === 0 ? 'Auj.' : DN[d.getDay()],
      date: `${d.getDate()} ${MN[d.getMonth()]}`,
      tmax: rnd(17 + off, 34 + off), tmin: rnd(4 + off, 15 + off),
      pluie: wi >= 3 ? rnd(2, 18) : 0,
      vent: rnd(10, 35), wi
    }
  }

  // AROME 0–72h (j0–j2), ICON EU 72–136h (j3–j4)
  const days = [0,1,2].map(i => makeDay(i, 0)).concat([3,4].map(i => makeDay(i, -1)))

  const dayHtml = d => `
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${d.lbl}</div>
      <div class="m-wprev5-date">${d.date}</div>
      <i class="bi ${WI[d.wi]} m-wprev5-icon" title="${WL[d.wi]}"></i>
      <div class="m-wprev5-rain${d.pluie === 0 ? ' m-wprev5-rain--none' : ''}">${d.pluie > 0 ? d.pluie + ' mm' : '—'}</div>
      <div class="m-wprev5-tmax">${d.tmax}°</div>
      <div class="m-wprev5-tmin">${d.tmin}°</div>
      <div class="m-wprev5-wind">${d.vent} <span>km/h</span></div>
    </div>`

  const body = `
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${city}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${days.map(dayHtml).join('')}</div>`

  return mWidgetCard('Prévisions 5 jours', 'bi-cloud-sun', '#5b8dd9', body, 'previsions-5j')
}

function mWidgetSensorCards(sensors, wid = '') {
  if (!sensors.length) return ''
  const MODEL_ICON = {
    'P+': 'bi-cloud-rain-heavy', 'PT': 'bi-cloud-rain-heavy', 'P': 'bi-cloud-rain-heavy',
    'TH': 'bi-thermometer-half', 'SMV': 'bi-cloud-sun',
    'W': 'bi-wind', 'PYRANO': 'bi-brightness-high', 'PAR': 'bi-brightness-alt-high',
    'LWS': 'bi-droplet', 'T_GEL': 'bi-snow', 'T_MINI': 'bi-thermometer-half',
    'CHP-15/30': 'bi-moisture', 'CHP-30/60': 'bi-moisture', 'CHP-60/90': 'bi-moisture',
    'CAPA-30-3': 'bi-moisture', 'CAPA-60-6': 'bi-moisture', 'EC': 'bi-plug',
  }
  const MODEL_COLORS = {
    'P+':'#45b7d1','PT':'#45b7d1','P':'#45b7d1','TH':'#e07050','SMV':'#c090e0',
    'W':'#82b8e0','PYRANO':'#f5c842','PAR':'#a0d070','LWS':'#60a090','T_GEL':'#7bc4b0',
    'T_MINI':'#bb8fce','CHP-15/30':'#5b8dd9','CHP-30/60':'#5b8dd9','CHP-60/90':'#5b8dd9',
    'CAPA-30-3':'#f0c060','CAPA-60-6':'#f0c060','EC':'#f0a030',
  }

  const METRIC_IDS = {
    'P+':['pluie','temperature','humidite'],'PT':['pluie','temperature'],'P':['pluie'],
    'TH':['temperature','humidite'],'SMV':['pluie','temperature','humidite'],
    'W':['vent'],'PYRANO':['rayonnement'],'PAR':['par'],'LWS':['humectation'],
    'T_GEL':['temperature'],'T_MINI':['temp_sol'],
    'CHP-15/30':['pothydr'],'CHP-30/60':['pothydr'],'CHP-60/90':['pothydr'],
    'CAPA-30-3':['teneur'],'CAPA-60-6':['teneur'],'EC':['teneur'],
  }

  return sensors.slice(0, 4).map(sensor => {
    const icon  = MODEL_ICON[sensor.model]  || 'bi-broadcast'
    const name  = MODEL_NAMES_M[sensor.model] || sensor.model
    const color = MODEL_COLORS[sensor.model] || '#0172A4'
    const mIds  = METRIC_IDS[sensor.model]  || []
    const m = CHART_METRICS[mIds[0]]
    const primaryMetricId = mIds[0]

    const body = `
      <div style="margin-bottom:6px">
        ${m ? svgChart(primaryMetricId, color, false, '1d', m.unit || '') : '<div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--txt3);font-size:12px">Données indisponibles</div>'}
      </div>
      <div class="m-wsensor-vals">
        ${mIds.slice(0, 3).map(mid => {
          const cfg = CHART_METRICS[mid]; if (!cfg) return ''
          const series = mockSeries(mid, 1)
          const val = series[0]
          const disp = val < 10 ? val.toFixed(1) : Math.round(val)
          return `<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${cfg.label}</span>
            <span class="m-wsensor-value" style="color:${cfg.color}">${disp} ${cfg.unit}</span>
          </div>`
        }).join('')}
      </div>
      <div class="m-widget-footer" style="display:flex;align-items:center;justify-content:space-between">
        <span>${sensor.serial}</span>
        <button class="m-wsensor-voir-donnees" data-sensor-id="${sensor.id}" data-metric-id="${primaryMetricId}" style="border:none;background:none;color:#007AFF;font-size:12px;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;gap:3px">Voir les données <i class="bi bi-arrow-right-short"></i></button>
      </div>`

    return mWidgetCard(name, icon, color, body, wid)
  }).join('')
}

function triggerCsvDownload(content, filename) {
  const blob = new Blob(['﻿' + content], { type: 'text/csv;charset=utf-8;' })
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: filename })
  document.body.appendChild(a); a.click(); document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(a.href), 100)
}

function exportCsvParcel(parcel, linkedSensorIds, period) {
  const sensorMetrics = new Set()
  linkedSensorIds.forEach(id => {
    const s = allSensors.find(x => x.id === id)
    if (s) (SENSOR_MODEL_METRICS[s.model] || []).forEach(m => sensorMetrics.add(m))
  })
  const metricIds = [...new Set(['etp', 'rayonnement', 'temp_rosee', ...sensorMetrics])].filter(id => CHART_METRICS[id])
  const count  = PERIOD_COUNTS[period] || 60
  const mins   = PERIOD_MINS[period]   || 10080
  const stepMs = (mins / count) * 60000
  const end    = new Date()
  const start  = new Date(end - mins * 60000)
  const header = ['Horodatage', ...metricIds.map(id => `${CHART_METRICS[id].label} (${CHART_METRICS[id].unit})`)].join(';')
  const rows   = Array.from({ length: count }, (_, i) => {
    const ts = new Date(start.getTime() + i * stepMs).toISOString().replace('T', ' ').slice(0, 19)
    return [ts, ...metricIds.map(id => mockSeries(id, 1)[0].toFixed(2))].join(';')
  })
  const name = (parcel.name || 'parcelle').replace(/[^\w]/g, '_')
  triggerCsvDownload([header, ...rows].join('\r\n'), `${name}_${period}_${new Date().toISOString().slice(0, 10)}.csv`)
}

function donneesView(linkedSensorIds, period = '7d', step = '1h', plotId = null) {
  const sensorMetrics = new Set()
  const metricToSensorId = {}
  linkedSensorIds.forEach(id => {
    const s = allSensors.find(x => x.id === id)
    if (s) (SENSOR_MODEL_METRICS[s.model] || []).forEach(m => {
      sensorMetrics.add(m)
      if (!metricToSensorId[m]) metricToSensorId[m] = id
    })
  })
  const hasIrrigData = IRRIG_SEASON.some(i => i.plotId === plotId)
  const METRIC_PREFERRED_ORDER = ['pluie', 'irrigation', 'temperature', 'humidite', 'pothydr', 'teneur', 'temp_sol', 'vent', 'rayonnement', 'humectation', 'par', 'temp_rosee', 'etp']
  const unique = [...new Set([...sensorMetrics, 'etp', 'rayonnement', 'temp_rosee', ...(hasIrrigData ? ['irrigation'] : [])])]
    .filter(id => CHART_METRICS[id])
    .sort((a, b) => {
      const ai = METRIC_PREFERRED_ORDER.indexOf(a), bi = METRIC_PREFERRED_ORDER.indexOf(b)
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi)
    })

  const today   = new Date().toISOString().slice(0, 10)
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10)
  return `
    <div class="m-period-bar" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:8px">
        <select class="m-period-sel" style="flex:1;min-width:0">
          <option value="365d"${period==='365d'?' selected':''}>365 jours</option>
          <option value="30d"${period==='30d'?' selected':''}>30 jours</option>
          <option value="7d"${period==='7d'?' selected':''}>7 jours</option>
          <option value="j7j7"${period==='j7j7'?' selected':''}>J-7 → J+7</option>
          <option value="hier"${period==='hier'?' selected':''}>Hier</option>
          <option value="1d"${period==='1d'?' selected':''}>Aujourd'hui</option>
          <option value="custom"${period==='custom'?' selected':''}>Personnalisé</option>
        </select>
        <select class="m-step-sel" style="flex:1;min-width:0">
          <option value="1h"${step === '1h' ? ' selected' : ''}>Horaire</option>
          <option value="1d"${step === '1d' ? ' selected' : ''}>Journalier</option>
          <option value="1w"${step === '1w' ? ' selected' : ''}>Hebdo</option>
        </select>
      </div>
      ${period === 'custom' ? `
      <div style="display:flex;gap:8px;margin-top:8px;align-items:center">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">Du</label>
        <input type="date" class="m-custom-from m-custom-date" value="${weekAgo}">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to m-custom-date" value="${today}">
      </div>` : ''}
    </div>
    <div class="m-detail-section">
      ${(() => {
        const fallback = linkedSensorIds[0] ?? null
        const plot = plotId != null ? allPlots.find(p => p.id === plotId) : null
        const subject = plot ? { key: `p-${plot.id}`, label: plot.name } : null
        return unique.map(id => id === 'irrigation' ? chartCard(id, period, null, plotId) : chartCard(id, period, metricToSensorId[id] ?? fallback, null, step, subject)).join('')
      })()}
    </div>`
}

const INTEG_ICON = {
  'IRRÉ-LIS Multi-Cultures':              { icon: 'bi-droplet-fill',     color: '#2E75B6' },
  'IRRÉ-LIS Mono-Culture':               { icon: 'bi-droplet-fill',     color: '#2E75B6' },
  'DeciTrait':                           { icon: 'bi-shield-check',     color: '#4CAF50' },
  'Limacapt':                            { icon: 'bi-bug',              color: '#795548' },
  'Modèles Arvalis — PRÉVI-LIS / MILÉOS':{ icon: 'bi-graph-up',         color: '#FBAF05' },
  'Xarvio':                              { icon: 'bi-grid-3x3-gap',     color: '#00B14F' },
  'Pixagri':                             { icon: 'bi-map',              color: '#00897B' },
  'VitiMeteo':                           { icon: 'bi-flower1',          color: '#8B4C9E' },
  'Rimpro':                              { icon: 'bi-cloud-lightning',  color: '#E53935' },
  'Cropwise Protector':                  { icon: 'bi-shield-fill-check',color: '#43A047' },
  'Movida GrapeVision':                  { icon: 'bi-eye',              color: '#7B1FA2' },
}

function textureDisplayValue(parcel) {
  if (parcel.substrate) return 'Substrat : ' + parcel.substrate
  if (parcel.texture === SOIL_ANALYSIS_OPTION && parcel.soilAnalysis) {
    const { argile, limon, sable } = parcel.soilAnalysis
    return `Analyse de sol (argile ${argile}% / limon ${limon}% / sable ${sable}%)`
  }
  return parcel.texture || '—'
}

function integLogo(name) {
  const ic = INTEG_ICON[name] || { icon: 'bi-puzzle', color: '#8e8e93' }
  return `<i class="bi ${ic.icon}" style="font-size:18px;color:${ic.color};width:24px;text-align:center;flex-shrink:0"></i>`
}

const MODEL_NAMES_M = {
  'P+': 'Station météo', 'PT': 'Station météo', 'P': 'Pluviomètre', 'TH': 'Thermomètre-hygromètre',
  'SMV': 'Station météo virtuelle', 'W': 'Anémomètre', 'PYRANO': 'Pyranomètre',
  'PAR': 'Capteur PAR', 'LWS': "Capteur d'humectation foliaire", 'T_GEL': 'Sonde gel',
  'T_MINI': 'Thermo. sol', 'CHP-15/30': 'Tensiomètre', 'CHP-30/60': 'Tensiomètre',
  'CHP-60/90': 'Tensiomètre', 'CAPA-30-3': 'Sonde capacitive', 'CAPA-60-6': 'Sonde capacitive',
  'EC': 'Fertirrigation',
}

function paramsView(parcel, org, linkedSensorIds) {
  const cropOptions = ['Blé tendre', 'Maïs', 'Orge', 'Colza', 'Prairie', 'Tournesol', 'Betterave', 'Pomme', 'Légumes', 'Vigne']

  const linkedSensors = linkedSensorIds.map(id => allSensors.find(x => x.id === id)).filter(Boolean)
  const hasPPlus = linkedSensors.some(s => s.model === 'P+' || s.model === 'PT')
  const hasP     = linkedSensors.some(s => s.model === 'P')
  const rainConflict = hasPPlus && hasP

  const TENSIO_MODELS = new Set(['CHP-15/30', 'CHP-30/60', 'CHP-60/90'])
  const metricProviders = new Map()
  linkedSensors.forEach(s => {
    ;(SENSOR_MODEL_METRICS[s.model] || []).forEach(m => {
      if (!metricProviders.has(m)) metricProviders.set(m, [])
      metricProviders.get(m).push(s)
    })
  })
  const conflictSensorIds = new Set()
  metricProviders.forEach((provs, m) => {
    if (provs.length <= 1) return
    if (provs.every(s => TENSIO_MODELS.has(s.model))) return
    provs.forEach(s => conflictSensorIds.add(s.id))
  })

  return `
    <div class="m-detail-section">
      ${rainConflict ? `
        <div class="m-conflict-banner">
          <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;flex-shrink:0"></i>
          <span>Ce capteur pluviomètre (P) est redondant avec la station météo (P+) déjà liée. Les données pluie peuvent se cumuler en double dans les bilans. Envisagez de délier l'un des deux.</span>
        </div>` : ''}
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${parcel.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-exploitation">
          <span class="m-list-row-label">Exploitation</span>
          <span class="m-list-row-value">${org?.name || '—'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-crop">
          <span class="m-list-row-label">Culture</span>
          <span class="m-list-row-value">${parcel.crop || '—'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-variety">
          <span class="m-list-row-label">Variété</span>
          <span class="m-list-row-value">—</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-stade">
          <span class="m-list-row-label">Stade phénologique</span>
          <span class="m-list-row-value">—</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation</div>
      <div class="m-list">
        <div id="parcel-minimap" class="m-minimap-container"></div>
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${org?.ville || '—'}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${parcel.lat},${parcel.lng}?q=${parcel.lat},${parcel.lng}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">Configuration</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-env">
          <span class="m-list-row-label">Environnement</span>
          <span class="m-list-row-value">${parcel.env || 'Plein champ'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-irrigation">
          <span class="m-list-row-label">Irrigation</span>
          <span class="m-list-row-value">${parcel.irrigation || '—'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-volume-max">
          <span class="m-list-row-label">Volume limité</span>
          <span class="m-list-row-value">${(getParcel(parcel.id).volumeMaxM3 ?? parcel.volumeMaxM3) ? `${(getParcel(parcel.id).volumeMaxM3 ?? parcel.volumeMaxM3).toLocaleString('fr-FR')} m³` : 'Non défini'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${textureDisplayValue(parcel)}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${linkedSensors.length
          ? linkedSensors.map((s, i) => {
              const hasEv       = s.event && (Array.isArray(s.event) ? s.event.length > 0 : true)
              const hasConflict = conflictSensorIds.has(s.id)
              const displayName = MODEL_NAMES_M[s.model] || s.model
              const metrics     = (SENSOR_MODEL_METRICS[s.model] || []).map(m => {
                const cfg = CHART_METRICS[m]; if (!cfg) return ''
                return `<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${cfg.color}18;color:${cfg.color};border:1px solid ${cfg.color}40;white-space:nowrap">${cfg.label}</span>`
              }).join('')
              return `<div class="m-list-row${i === linkedSensors.length - 1 ? ' m-list-row--last' : ''} m-tappable" data-open-sensor="${s.id}" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:15px;font-weight:500;display:flex;align-items:center;gap:5px">
                      ${displayName}
                      ${hasEv ? '<span style="width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0;display:inline-block"></span>' : ''}
                      ${hasConflict ? '<i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:12px;flex-shrink:0"></i>' : ''}
                    </div>
                    <div style="font-size:12px;color:#8e8e93;margin-top:1px">${s.model} · ${s.serial}</div>
                  </div>
                  <button class="btn-sensor-more" data-sensor-id="${s.id}" style="border:none;background:none;color:#8e8e93;font-size:18px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1" onclick="event.stopPropagation()">···</button>
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
                </div>
                ${metrics ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${metrics}</div>` : ''}
              </div>`}).join('')
          : '<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun capteur lié</span></div>'}
        ${conflictSensorIds.size ? `
        <div style="display:flex;gap:8px;align-items:flex-start;padding:10px 14px;background:#fff8e1;border-top:.5px solid rgba(0,0,0,.07)">
          <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;flex-shrink:0;margin-top:1px"></i>
          <span style="font-size:12px;color:#7a5a00;line-height:1.4">Plusieurs capteurs mesurent la même métrique. Les données peuvent se cumuler en double. Déliez l'un des capteurs redondants.</span>
        </div>` : ''}
        <div class="m-list-row m-list-row--last" data-action="add-sensor" style="color:#0172A4">
          <i class="bi bi-plus-circle" style="font-size:15px;color:#0172A4"></i>
          <span class="m-list-row-label" style="color:#0172A4">Ajouter un capteur</span>
        </div>
      </div>

      <div class="m-list-section-header">Alertes & Intégrations</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-integrations" style="flex-direction:column;align-items:stretch;gap:6px">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <span class="m-list-row-label">Intégrations</span>
            <i class="bi bi-chevron-right m-list-chevron" style="position:static;margin-left:auto"></i>
          </div>
          ${(parcel.integrations || []).length ? `
          <div style="display:flex;flex-wrap:wrap;gap:5px">
            ${(parcel.integrations || []).map(name => `
              <span style="display:inline-flex;align-items:center;gap:5px;background:#EFF6FF;color:#0172A4;border:1px solid #BFDBFE;border-radius:20px;padding:3px 10px 3px 7px;font-size:12px;font-weight:500;line-height:1.4">
                ${integLogo(name)}<span>${name}</span>
              </span>`).join('')}
          </div>` : ''}
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-alertes">
          <span class="m-list-row-label">Alertes</span>
          <span class="m-list-row-value">—</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Gestion</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Date de création</span>
          <span class="m-list-row-value">01/01/2024</span>
        </div>
        <div class="m-list-row m-list-row--last" data-action="archive" style="color:#ff9f0a">
          <i class="bi bi-archive" style="font-size:15px;color:#ff9f0a"></i>
          <span class="m-list-row-label" style="color:#ff9f0a">Archiver la parcelle</span>
        </div>
      </div>
      <div style="height:24px"></div>
    </div>`
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function initParcelDetail(parcel, linkedSensorIds = [], initialView = 'widgets', backLabel = 'Parcelles') {
  let org = orgs.find(o => o.id === parcel.orgId)
  let activeView    = initialView
  let currentPeriod = '7d'
  let currentStep   = '1h'
  let isFav = false

  const city = org?.ville || ''
  const layer = pushDetail(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${backLabel}</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${parcel.name}</div>
          ${(parcel.crop || city) ? `<div class="m-detail-subtitle">${[city, parcel.crop].filter(Boolean).join(' · ')}</div>` : ''}
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${initialView === 'widgets' ? 'active' : ''}" data-view="widgets">Widgets</button>
      <button class="m-detail-tab ${initialView === 'donnees' ? 'active' : ''}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${initialView === 'params'  ? 'active' : ''}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`)

  function pickExploitation() {
    const available = orgs.filter(o => o.id !== 100 && o.statut !== 'inactif')
    const body = document.createElement('div')
    const renderPicker = () => {
      body.innerHTML = available.map(o => `
        <div class="m-sheet-option${o.id === parcel.orgId ? ' m-sheet-option--active' : ''}" data-pick-org="${o.id}">
          <span>${o.name}</span>
          ${o.id === parcel.orgId ? '<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>' : ''}
        </div>`).join('')
      body.querySelectorAll('[data-pick-org]').forEach(row => {
        row.addEventListener('click', () => {
          const newOrgId = +row.dataset.pickOrg
          if (newOrgId !== parcel.orgId) {
            parcel.orgId = newOrgId
            org = orgs.find(o => o.id === newOrgId)
            renderView()
            showToast('Exploitation mise à jour')
          }
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => sheet.remove(), 280)
        })
      })
    }
    const sheet = showSheet({ title: 'Exploitation', body, doneLabel: 'Fermer', onDone: () => {} })
    renderPicker()
  }

  function openIrrigationTypeSheet() {
    const options = IRRIG_TYPES.filter(t => t !== 'Non renseigné')
    const current = getParcel(parcel.id).irrigation ?? parcel.irrigation
    const body = document.createElement('div')
    const renderPicker = () => {
      body.innerHTML = `
        <div class="m-sheet-option${!current ? ' m-sheet-option--active' : ''}" data-pick-irrig="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez un type</span>
          ${!current ? '<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>' : ''}
        </div>
        ${options.map(o => `
          <div class="m-sheet-option${o === current ? ' m-sheet-option--active' : ''}" data-pick-irrig="${o}">
            <span>${o}</span>
            ${o === current ? '<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>' : ''}
          </div>`).join('')}`
      body.querySelectorAll('[data-pick-irrig]').forEach(row => {
        row.addEventListener('click', () => {
          const val = row.dataset.pickIrrig
          if (val && val !== current) {
            patchParcel(parcel.id, { irrigation: val })
            parcel.irrigation = val
            addMJournalEntry(parcel.id, {
              type: 'modification',
              date: new Date().toISOString().slice(0, 10),
              texte: `Type d'irrigation modifié : ${current || '—'} → ${val}.`,
            })
            renderView()
            showToast('Type d\'irrigation mis à jour')
          }
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => sheet.remove(), 280)
        })
      })
    }
    const sheet = showSheet({ title: "Type d'irrigation", body, doneLabel: 'Fermer', onDone: () => {} })
    renderPicker()
  }

  function openEnvSheet() {
    const options = ENV_TYPES
    const current = getParcel(parcel.id).env ?? parcel.env ?? 'Plein champ'
    const body = document.createElement('div')
    const renderPicker = () => {
      body.innerHTML = options.map(o => `
        <div class="m-sheet-option${o === current ? ' m-sheet-option--active' : ''}" data-pick-env="${o}">
          <span>${o}</span>
          ${o === current ? '<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>' : ''}
        </div>`).join('')
      body.querySelectorAll('[data-pick-env]').forEach(row => {
        row.addEventListener('click', () => {
          const val = row.dataset.pickEnv
          if (val && val !== current) {
            patchParcel(parcel.id, { env: val })
            parcel.env = val
            addMJournalEntry(parcel.id, {
              type: 'modification',
              date: new Date().toISOString().slice(0, 10),
              texte: `Environnement modifié : ${current || '—'} → ${val}.`,
            })
            renderView()
            showToast('Environnement mis à jour')
          }
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => sheet.remove(), 280)
        })
      })
    }
    const sheet = showSheet({ title: 'Environnement', body, doneLabel: 'Fermer', onDone: () => {} })
    renderPicker()
  }

  function openTextureSheet() {
    const options = [...SOIL_TYPES, SOIL_ANALYSIS_OPTION]
    const current = getParcel(parcel.id).texture ?? parcel.texture
    const body = document.createElement('div')
    const renderPicker = () => {
      body.innerHTML = `
        <div class="m-sheet-option${!current ? ' m-sheet-option--active' : ''}" data-pick-texture="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez une texture</span>
          ${!current ? '<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>' : ''}
        </div>
        ${options.map(o => `
          <div class="m-sheet-option${o === current ? ' m-sheet-option--active' : ''}" data-pick-texture="${o}">
            <span>${o}</span>
            ${o === current ? '<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>' : ''}
          </div>`).join('')}`
      body.querySelectorAll('[data-pick-texture]').forEach(row => {
        row.addEventListener('click', () => {
          const val = row.dataset.pickTexture
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => sheet.remove(), 280)
          if (val === SOIL_ANALYSIS_OPTION) {
            openSoilAnalysisSheet(current)
            return
          }
          if (val !== current) {
            patchParcel(parcel.id, { texture: val || null, soilAnalysis: null })
            parcel.texture = val || null
            parcel.soilAnalysis = null
            addMJournalEntry(parcel.id, {
              type: 'modification',
              date: new Date().toISOString().slice(0, 10),
              texte: `Texture de sol modifiée : ${current || '—'} → ${val || '—'}.`,
            })
            renderView()
            showToast('Texture de sol mise à jour')
          }
        })
      })
    }
    const sheet = showSheet({ title: 'Texture de sol', body, doneLabel: 'Fermer', onDone: () => {} })
    renderPicker()
  }

  function openSoilAnalysisSheet(previousTexture) {
    const stored = getParcel(parcel.id).soilAnalysis ?? parcel.soilAnalysis ?? {}
    const body = document.createElement('div')
    body.innerHTML = `<div style="padding:16px;display:flex;flex-direction:column;gap:12px">
      <div>
        <label class="m-form-label">Argile (%)</label>
        <input type="number" class="m-sheet-input" id="soil-argile" value="${stored.argile ?? ''}" placeholder="Ex : 25" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Limon (%)</label>
        <input type="number" class="m-sheet-input" id="soil-limon" value="${stored.limon ?? ''}" placeholder="Ex : 40" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Sable (%)</label>
        <input type="number" class="m-sheet-input" id="soil-sable" value="${stored.sable ?? ''}" placeholder="Ex : 35" min="0" max="100">
      </div>
    </div>`
    showSheet({ title: 'Analyse de sol', body, doneLabel: 'Enregistrer', cancelLabel: 'Annuler', onDone: () => {
      const argile = +(body.querySelector('#soil-argile')?.value || 0)
      const limon  = +(body.querySelector('#soil-limon')?.value || 0)
      const sable  = +(body.querySelector('#soil-sable')?.value || 0)
      const soilAnalysis = { argile, limon, sable }
      patchParcel(parcel.id, { texture: SOIL_ANALYSIS_OPTION, soilAnalysis })
      parcel.texture = SOIL_ANALYSIS_OPTION
      parcel.soilAnalysis = soilAnalysis
      addMJournalEntry(parcel.id, {
        type: 'modification',
        date: new Date().toISOString().slice(0, 10),
        texte: `Texture de sol modifiée : ${previousTexture || '—'} → analyse de sol (argile ${argile}% / limon ${limon}% / sable ${sable}%).`,
      })
      renderView()
      showToast('Analyse de sol enregistrée')
    }})
  }

  function openVolumeMaxSheet() {
    const current = getParcel(parcel.id).volumeMaxM3 ?? parcel.volumeMaxM3 ?? null
    const body = document.createElement('div')
    body.innerHTML = `<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
      <label class="m-form-label">Volume limité (m³)</label>
      <input type="number" class="m-sheet-input" id="edit-volume-max" value="${current ?? ''}" placeholder="Ex : 33000" step="100" min="0">
    </div>`
    showSheet({ title: 'Volume limité de la parcelle', body, doneLabel: 'Appliquer', cancelLabel: 'Annuler', onDone: () => {
      const raw = body.querySelector('#edit-volume-max')?.value
      const val = raw === '' ? null : Math.max(0, +raw)
      patchParcel(parcel.id, { volumeMaxM3: val })
      parcel.volumeMaxM3 = val
      renderView()
      showToast('Volume limité mis à jour')
    }})
  }

  const ALL_INTEGRATIONS_MOBILE = [
    'IRRÉ-LIS Multi-Cultures', 'IRRÉ-LIS Mono-Culture', 'DeciTrait', 'Limacapt',
    'Modèles Arvalis — PRÉVI-LIS / MILÉOS', 'Xarvio', 'Pixagri', 'VitiMeteo',
    'Rimpro', 'Cropwise Protector', 'Movida GrapeVision',
  ]


  function openIntegrationsPage() {
    let active = [...(parcel.integrations || [])]

    function renderIntegList(listEl) {
      const inactive = ALL_INTEGRATIONS_MOBILE.filter(i => !active.includes(i))
      listEl.innerHTML = `
        <div class="m-list-section-header">${active.length ? `Actives (${active.length})` : 'Actives'}</div>
        <div class="m-list">
          ${active.length ? active.map((name, i) => `
            <div class="m-list-row${i === active.length - 1 ? ' m-list-row--last' : ''}" style="gap:10px">
              ${integLogo(name)}
              <span class="m-list-row-label" style="flex:1">${name}</span>
              <button class="btn-unlink-integ" data-integ="${name}" style="border:none;background:none;color:#ff3b30;font-size:13px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Délier</button>
            </div>`).join('')
          : '<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucune intégration active</span></div>'}
        </div>
        ${inactive.length ? `
        <div class="m-list-section-header">Disponibles</div>
        <div class="m-list">
          ${inactive.map((name, i) => `
            <div class="m-list-row${i === inactive.length - 1 ? ' m-list-row--last' : ''}" style="gap:10px">
              ${integLogo(name)}
              <span class="m-list-row-label" style="flex:1">${name}</span>
              <button class="btn-add-integ" data-integ="${name}" style="border:none;background:none;color:#0172A4;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Lier</button>
            </div>`).join('')}
        </div>` : ''}`

      listEl.querySelectorAll('.btn-unlink-integ').forEach(btn => {
        btn.addEventListener('click', () => {
          active = active.filter(i => i !== btn.dataset.integ)
          parcel.integrations = [...active]
          addMJournalEntry(parcel.id, {
            type: 'integration',
            date: new Date().toISOString().slice(0, 10),
            texte: `Intégration « ${btn.dataset.integ} » retirée de la parcelle.`,
          })
          renderIntegList(listEl)
          showToast('Intégration déliée')
        })
      })
      listEl.querySelectorAll('.btn-add-integ').forEach(btn => {
        btn.addEventListener('click', () => {
          if (!active.includes(btn.dataset.integ)) active.push(btn.dataset.integ)
          parcel.integrations = [...active]
          addMJournalEntry(parcel.id, {
            type: 'integration',
            date: new Date().toISOString().slice(0, 10),
            texte: `Intégration « ${btn.dataset.integ} » activée sur la parcelle.`,
          })
          renderIntegList(listEl)
          showToast('Intégration liée')
        })
      })
    }

    const intLayer = pushDetail(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${parcel.name}</span></button>
          <span style="font-size:17px;font-weight:600">Intégrations</span>
          <div style="width:60px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="integ-list-content" style="padding-bottom:32px"></div>`)

    intLayer.querySelector('.m-detail-back').addEventListener('click', popDetail)
    renderIntegList(intLayer.querySelector('#integ-list-content'))
  }

  function renderView() {
    const c = layer.querySelector('#detail-content')
    if (activeView === 'widgets')  c.innerHTML = widgetsView(parcel, linkedSensorIds)
    if (activeView === 'donnees')  c.innerHTML = donneesView(linkedSensorIds, currentPeriod, currentStep, parcel.id)
    if (activeView === 'params')   { c.innerHTML = paramsView(parcel, org, linkedSensorIds); initMinimap() }
    bindViewEvents()
  }

  function initMinimap() {
    const L = window.L; if (!L) return
    setTimeout(() => {
      const el = layer.querySelector('#parcel-minimap'); if (!el) return
      const map = L.map(el, { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false })
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(map)
      if (parcel.latlngs?.length >= 3) {
        const poly = L.polygon(parcel.latlngs, { color: '#fff', weight: 2, fillColor: '#0172A4', fillOpacity: 0.4 }).addTo(map)
        map.fitBounds(poly.getBounds(), { padding: [8, 8] })
      } else {
        map.setView([parcel.lat, parcel.lng], 14)
        L.circleMarker([parcel.lat, parcel.lng], { radius: 8, color: '#fff', weight: 2, fillColor: '#0172A4', fillOpacity: 0.9 }).addTo(map)
      }
    }, 50)
  }

  function bindViewEvents() {
    // Period select → redraw charts
    layer.querySelector('.m-period-sel')?.addEventListener('change', e => {
      currentPeriod = e.target.value; renderView()
    })
    // Step select → redraw charts
    layer.querySelector('.m-step-sel')?.addEventListener('change', e => {
      currentStep = e.target.value; renderView()
    })
    // Export CSV
    layer.querySelector('.m-export-btn')?.addEventListener('click', () => exportCsvParcel(parcel, linkedSensorIds, currentPeriod))
    // Chart tooltip on hover/touch
    layer.querySelectorAll('.m-chart-svg-wrap').forEach(wrap => bindChartTooltip(wrap))
    // Sensor widget → "Voir les données"
    layer.querySelectorAll('.m-wsensor-voir-donnees[data-sensor-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = +btn.dataset.sensorId
        const s = allSensors.find(x => x.id === sid)
        if (!s) return
        import('./chart-fullscreen.js').then(mod => mod.initChartFullscreen({
          sensor: s,
          linkedSensorIds,
          metricId: btn.dataset.metricId || null,
          backLabel: parcel.name,
          parcel,
        }))
      })
    })
    // Irrigation widget footer → jump to "Données" tab (irrigation chart)
    layer.querySelectorAll('.m-irrig-footer-link').forEach(link => {
      link.addEventListener('click', () => {
        activeView = 'donnees'
        layer.querySelectorAll('.m-detail-tab').forEach(t => t.classList.toggle('active', t.dataset.view === 'donnees'))
        renderView()
        requestAnimationFrame(() => {
          layer.querySelector('.m-chart-card[data-metric-id="irrigation"]')?.scrollIntoView({ block: 'start' })
        })
      })
    })
    // Details link → open fullscreen chart
    layer.querySelectorAll('.m-chart-details-link').forEach(link => {
      link.addEventListener('click', () => {
        if (link.dataset.metricId === 'irrigation') {
          import('./chart-fullscreen.js').then(mod => mod.initChartFullscreen({
            linkedSensorIds,
            metricId: 'irrigation',
            backLabel: parcel.name,
            parcel,
          }))
          return
        }
        const sid = +link.dataset.sensorId
        const s = allSensors.find(x => x.id === sid)
        if (!s) return
        import('./chart-fullscreen.js').then(mod => mod.initChartFullscreen({
          sensor: s,
          linkedSensorIds,
          metricId: link.dataset.metricId || null,
          backLabel: parcel.name,
          parcel,
        }))
      })
    })
    // Mesure add-to-favorites buttons
    layer.querySelectorAll('.m-msr-add-btn').forEach(btn => {
      btn.addEventListener('click', () => addMesureToFavorites(btn))
    })
    // Cumul add-to-dashboard buttons
    layer.addEventListener('click', e => {
      const addBtn = e.target.closest('.m-cumul-add-btn')
      if (addBtn) {
        const metricId = addBtn.dataset.cumulMetricId
        const val = addBtn.dataset.cumulVal
        const meta = DASH_CUMUL_META[metricId]
        if (!meta) return
        const body = document.createElement('div')
        body.innerHTML = `<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${meta.metricLabel}</strong> (<em>${val}</em>) au tableau de bord de <strong>${parcel.name}</strong> ?</div>`
        showSheet({ title: 'Tableau de bord', body, doneLabel: 'Ajouter', cancelLabel: 'Annuler', onDone: () => {
          const thresholds = metricId === 'hf' ? { cold: cumulThresholds.hfSeuil }
                           : metricId === 'dj' ? { low: cumulThresholds.djMin, high: cumulThresholds.djMax }
                           : null
          const result = addCumulFavorite({ metricId, ...meta, subjectKey: `p-${parcel.id}`, subjectLabel: parcel.name,
            fromDate: `${new Date().getFullYear()}-01-01`, value: val, thresholds })
          if (result === 'max') { showToast('Maximum de cumuls atteint (5)'); return }
          showToast('Cumul ajouté au tableau de bord')
        }})
        return
      }
      const editBtn = e.target.closest('.m-cumul-edit-btn')
      if (editBtn) {
        const metricId = editBtn.dataset.cumulMetricId
        const body = document.createElement('div')
        if (metricId === 'hf') {
          body.innerHTML = `<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${cumulThresholds.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`
          showSheet({ title: 'Heures de froid', body, doneLabel: 'Appliquer', cancelLabel: 'Annuler', onDone: () => {
            cumulThresholds.hfSeuil = +(body.querySelector('#edit-hf-seuil')?.value ?? 7.2)
            renderView()
          }})
        } else if (metricId === 'dj') {
          body.innerHTML = `<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${cumulThresholds.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${cumulThresholds.djMax}" step="1" min="-20" max="50">
          </div>`
          showSheet({ title: 'Degrés-jours', body, doneLabel: 'Appliquer', cancelLabel: 'Annuler', onDone: () => {
            cumulThresholds.djMin = +(body.querySelector('#edit-dj-min')?.value ?? 0)
            cumulThresholds.djMax = +(body.querySelector('#edit-dj-max')?.value ?? 18)
            renderView()
          }})
        }
        return
      }
    })
    // Linked sensors — open detail
    layer.querySelectorAll('[data-open-sensor]').forEach(row => {
      row.addEventListener('click', () => {
        const sid = +row.dataset.openSensor
        const s = allSensors.find(x => x.id === sid); if (!s) return
        import('./sensor-detail.js').then(mod => mod.initSensorDetail(s, 'donnees', _role))
      })
    })
    // Linked sensors — ··· menu
    layer.querySelectorAll('.btn-sensor-more').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const sid = +btn.dataset.sensorId
        const s = allSensors.find(x => x.id === sid); if (!s) return
        const displayName = (s.model === 'P+' || s.model === 'PT') ? 'Station météo'
          : s.model === 'P' ? 'Pluviomètre'
          : s.model
        const body = document.createElement('div')
        body.innerHTML = `
          <div style="padding:8px 0">
            <button id="sheet-open-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;text-align:left">
              <i class="bi bi-broadcast" style="color:#0172A4;width:22px;text-align:center"></i>Voir la fiche capteur
            </button>
            <div style="height:.5px;background:rgba(0,0,0,.1);margin:0 20px"></div>
            <button id="sheet-unlink-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;color:#ff3b30;text-align:left">
              <i class="bi bi-x-circle" style="width:22px;text-align:center"></i>Délier de cette parcelle
            </button>
          </div>`
        const sheet = showSheet({ title: `${displayName} · ${s.serial}`, body, doneLabel: 'Fermer', onDone: () => {} })
        body.querySelector('#sheet-open-sensor').addEventListener('click', () => {
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => { sheet.remove(); import('./sensor-detail.js').then(mod => mod.initSensorDetail(s, 'donnees', _role)) }, 280)
        })
        body.querySelector('#sheet-unlink-sensor').addEventListener('click', () => {
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => {
            sheet.remove()
            showConfirmSheet({
              title: 'Délier le capteur',
              message: `Délier <strong>${displayName} — ${s.serial}</strong> de <strong>${parcel.name}</strong> ?`,
              confirmLabel: 'Délier',
              confirmColor: '#ff3b30',
              onConfirm: () => {
                const idx = linkedSensorIds.indexOf(sid)
                if (idx !== -1) linkedSensorIds.splice(idx, 1)
                s.parcelIds = s.parcelIds.filter(id => id !== parcel.id)
                renderView()
                showToast(`${s.serial} délié`)
              }
            })
          }, 280)
        })
      })
    })
    // Param rows
    layer.querySelectorAll('.m-list-row[data-action]').forEach(row => {
      row.addEventListener('click', () => {
        if (row.dataset.action === 'edit-exploitation') pickExploitation()
        else if (row.dataset.action === 'edit-env') openEnvSheet()
        else if (row.dataset.action === 'edit-irrigation') openIrrigationTypeSheet()
        else if (row.dataset.action === 'edit-volume-max') openVolumeMaxSheet()
        else if (row.dataset.action === 'edit-texture') openTextureSheet()
        else if (row.dataset.action === 'edit-integrations') openIntegrationsPage()
        else if (row.dataset.action === 'archive') {
          showConfirmSheet({
            title: 'Archiver la parcelle',
            message: `Archiver <strong>${parcel.name}</strong> ? Elle ne sera plus visible dans votre exploitation.`,
            confirmLabel: 'Archiver',
            confirmColor: '#ff9f0a',
            onConfirm: () => showToast('Parcelle archivée (fonctionnalité à venir)')
          })
        } else showToast('Fonctionnalité à venir')
      })
    })
    // Widget menus — retirer le widget
    layer.querySelectorAll('.m-widget-menu').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const wid = btn.dataset.wid
        if (!wid) return
        layer.querySelector('.m-widget-dd')?.remove()
        const dd = document.createElement('div')
        dd.className = 'm-widget-dd'
        dd.style.cssText = 'position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:180px'
        dd.innerHTML = `<button class="m-widget-dd-remove" data-wid="${wid}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`
        const content = layer.querySelector('.m-detail-content')
        const rect    = btn.getBoundingClientRect()
        const cRect   = content.getBoundingClientRect()
        dd.style.top   = `${rect.bottom - cRect.top + content.scrollTop + 4}px`
        dd.style.right = `${cRect.right - rect.right}px`
        content.style.position = 'relative'
        content.appendChild(dd)
        dd.querySelector('.m-widget-dd-remove').addEventListener('click', () => {
          dd.remove()
          const ids = _getParcelWidgetIds(parcel, linkedSensorIds).filter(id => id !== wid)
          _saveParcelWidgetIds(parcel.id, ids)
          renderView()
        })
        setTimeout(() => document.addEventListener('click', () => dd.remove(), { once: true }), 0)
      })
    })
    layer.querySelector('.m-add-widget-btn')?.addEventListener('click', () => openWidgetCatalog(parcel, linkedSensorIds, renderView))

    // Irrigations widget — actions
    layer.querySelector('.m-irrig-act-saisie')?.addEventListener('click', () => {
      import('./irrigation.js').then(m => m.openIrrigationSaisie([parcel], showToast, { ids: [parcel.id], label: parcel.name }, true, renderView))
    })
    layer.querySelector('.m-irrig-act-saison')?.addEventListener('click', () => {
      import('./irrigation.js').then(m => m.openIrrigationStrategie([parcel], showToast, { ids: [parcel.id], label: parcel.name }, null, true, renderView))
    })
    // Irrigations widget — type non renseigné → ouvrir Paramètres + bottom sheet
    layer.querySelector('.m-irrig-set-type')?.addEventListener('click', () => {
      activeView = 'params'
      layer.querySelectorAll('.m-detail-tab').forEach(t => t.classList.toggle('active', t.dataset.view === 'params'))
      renderView()
      openIrrigationTypeSheet()
    })

    // Parcel cumuls — delete
    layer.querySelectorAll('.m-pcumul-del').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const pid = +btn.dataset.pid
        const st = _loadPCumul(pid)
        const hidden = new Set(st.hidden || [])
        hidden.add(btn.dataset.cid)
        _savePCumul(pid, { hidden: [...hidden] })
        renderView()
      })
    })
    // Parcel cumuls — date
    layer.querySelectorAll('.m-pcumul-date').forEach(input => {
      input.addEventListener('click', () => input.showPicker?.())
      input.addEventListener('change', () => {
        const pid = +input.dataset.pid
        const cid = input.dataset.cid
        const newDate = input.value
        if (!newDate) return
        const tooOld = (Date.now() - new Date(newDate)) / 86400000 > 365
        if (tooOld) return
        const st = _loadPCumul(pid)
        const dates = st.dates || {}
        dates[cid] = newDate
        _savePCumul(pid, { dates })
        const card = input.closest('.m-cumuls-saved-card')
        const valEl = card?.querySelector('.m-pcumul-value')
        if (valEl) {
          const unitEl = card.querySelector('.m-pcumul-unit')
          const unit = unitEl?.textContent.trim() || ''
          const newVal = _pcumulVal(pid, cid, newDate)
          valEl.innerHTML = `${newVal}<span class="m-pcumul-unit">${unit}</span>`
        }
      })
    })
    // Parcel cumuls — cfg
    layer.querySelectorAll('.m-pcumul-cfg').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const pid = +btn.dataset.pid
        const cid = btn.dataset.cid
        const st = _loadPCumul(pid)
        const cfg = { ...st.cfg }
        const fields = _PCUMUL_CFG_FIELDS[cid]
        if (!fields) return
        layer.querySelector('.m-pcumul-cfg-panel')?.remove()
        const panel = document.createElement('div')
        panel.className = 'm-pcumul-cfg-panel'
        panel.style.cssText = 'background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px'
        panel.innerHTML = fields.map(f => `
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${f.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${f.key}" value="${cfg[f.key] ?? f.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join('') +
          `<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>`
        btn.closest('.m-cumuls-saved-card').after(panel)
        panel.querySelector('.m-pcumul-cfg-ok').addEventListener('click', () => {
          panel.querySelectorAll('.m-pcumul-cfg-inp').forEach(inp => { cfg[inp.dataset.key] = parseFloat(inp.value) || 0 })
          _savePCumul(pid, { cfg })
          panel.remove()
          renderView()
        })
      })
    })
    // Parcel cumuls — restore hidden item
    layer.querySelectorAll('.m-pcumul-add').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const pid = +btn.dataset.pid
        const cid = btn.dataset.cid
        const st = _loadPCumul(pid)
        const hidden = new Set(st.hidden || [])
        hidden.delete(cid)
        _savePCumul(pid, { hidden: [...hidden] })
        renderView()
      })
    })
  }

  // Tabs
  layer.querySelectorAll('.m-detail-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      layer.querySelectorAll('.m-detail-tab').forEach(t => t.classList.remove('active'))
      tab.classList.add('active')
      activeView = tab.dataset.view
      renderView()
    })
  })

  // Back
  layer.querySelector('.m-detail-back').addEventListener('click', popDetail)

  // Star
  layer.querySelector('#d-star').addEventListener('click', () => {
    isFav = !isFav
    const btn = layer.querySelector('#d-star')
    btn.querySelector('i').className = isFav ? 'bi bi-star-fill' : 'bi bi-star'
    btn.style.color = isFav ? '#f5c842' : ''
    showToast(isFav ? 'Ajouté aux favoris' : 'Retiré des favoris')
  })

  // Plus
  layer.querySelector('#d-plus').addEventListener('click', () => {
    window.showMobileAddPage?.()
  })

  // Journal icon
  layer.querySelector('#d-journal').addEventListener('click', () => openMobileParcelJournal(parcel))

  renderView()
}

// ─── Mobile parcel journal ────────────────────────────────────────────────────

function roleBadgeMobile(role) {
  if (!role) return ''
  const cfg = {
    membre:     { label: 'Membre',     bg: '#f2f2f7', color: '#636366' },
    conseiller: { label: 'Conseiller', bg: '#eef4ff', color: '#3a7bd5' },
  }
  const c = cfg[role] || cfg.membre
  return `<span style="font-size:10px;background:${c.bg};color:${c.color};border-radius:4px;padding:1px 5px;font-weight:500">${c.label}</span>`
}

const M_NOTE_CATEGORIES = [
  'Observation générale', 'Préparation du sol (labour)', 'Préparation du sol (strip-till)',
  'Préparation du sol (sous-solage)', 'Fertilisation', 'Semis', 'Récolte',
  'Stade phénologique', 'Passage de sangliers', 'Gestion de haie bocagère',
  'Irrigation manuelle', 'Autre',
]

const fmtJrnDate = iso => { const [y, m, j] = iso.split('-'); return `${j}/${m}/${y}` }

// Entrées auto-générées : configuration de la parcelle (culture, sol, irrigation)
function mAutoModificationEvents(parcel) {
  const evts = []
  const add = (date, texte) => evts.push({ id: `auto-mod-${date}-${texte.slice(0, 16)}`, type: 'modification', date, texte, _system: true })
  add('2024-01-01', 'Création de la parcelle')
  if (parcel.crop) add('2024-03-15', `Culture définie : ${parcel.crop}`)
  const texture = parcel.substrate ? `Substrat : ${parcel.substrate}` : parcel.texture
  if (texture) add('2024-03-15', `Texture de sol définie : ${texture}`)
  if (parcel.irrigation) add('2024-04-01', `Type d'irrigation défini : ${parcel.irrigation}`)
  return evts
}

// Entrées auto-générées : irrigations saisies (ponctuelles + saisons)
function mAutoIrrigationEvents(parcelId) {
  const evts = []
  const own = IRRIG_SEASON.filter(i => i.plotId === parcelId)

  own.filter(i => !i.fromStrategy).forEach(i => {
    evts.push({
      id: `auto-irrig-${i.iso}-${i.mm}`,
      type: 'irrigation',
      date: i.iso,
      texte: i.real
        ? `Irrigation ponctuelle de ${i.mm} mm enregistrée.`
        : `Irrigation ponctuelle de ${i.mm} mm planifiée.`,
      _system: true,
    })
  })

  const seasons = new Map()
  own.filter(i => i.fromStrategy && i.seasonId).forEach(i => {
    if (!seasons.has(i.seasonId)) seasons.set(i.seasonId, [])
    seasons.get(i.seasonId).push(i)
  })
  seasons.forEach((items, seasonId) => {
    items.sort((a, b) => a.iso.localeCompare(b.iso))
    const first = items[0], last = items[items.length - 1]
    const qty   = first.mm
    const freq  = items.length > 1
      ? Math.round((new Date(items[1].iso) - new Date(items[0].iso)) / 86400000)
      : 7
    evts.push({
      id: `auto-irrig-season-${seasonId}`,
      type: 'irrigation',
      date: first.iso,
      texte: `Saison d'irrigation programmée : ${qty} mm tous les ${freq} jours, du ${fmtJrnDate(first.iso)} au ${fmtJrnDate(last.iso)} (${items.length} irrigation${items.length > 1 ? 's' : ''}, ${items.length * qty} mm au total).`,
      _system: true,
    })
  })

  return evts
}

function openMobileParcelJournal(parcel) {
  const org  = orgs.find(o => o.id === parcel.orgId)
  const city = org?.ville || ''
  const layer = pushDetail(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Parcelle</span></button>
        <span style="font-size:15px;font-weight:600;color:var(--txt3)">Journal</span>
        <div style="width:44px"></div>
      </div>
      <div class="m-detail-identity" style="pointer-events:none">
        <div style="width:38px"></div>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${parcel.name}</div>
          ${(parcel.crop || city) ? `<div class="m-detail-subtitle">${[city, parcel.crop].filter(Boolean).join(' · ')}</div>` : ''}
        </div>
        <div style="width:38px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`)

  layer.querySelector('.m-detail-back').addEventListener('click', popDetail)

  function renderJournal() {
    const el = layer.querySelector('#mjrn-content')
    const dashNotes = (() => { try { return JSON.parse(localStorage.getItem('weenat-m-notes')) || [] } catch { return [] } })()
      .filter(n => n.linkedType === 'parcel' && n.linkedId === parcel.id)
      .map((n, i) => ({ id: `dash-${i}`, type: 'note', date: n.date, texte: n.text, auteur: n.auteur, role: n.role, _fromDashboard: true }))
    const autoEntries = [...mAutoModificationEvents(parcel), ...mAutoIrrigationEvents(parcel.id)]
    const entries = [...getMJournal(parcel.id), ...dashNotes, ...autoEntries].sort((a, b) => b.date.localeCompare(a.date))
    const fmt = fmtJrnDate

    const CFG = {
      note:         { label: 'Note',         icon: 'bi-pencil',        dotColor: '#3a7bd5', dotBg: '#eef4ff', badgeCls: 'note' },
      traitement:   { label: 'Traitement',   icon: 'bi-eyedropper',    dotColor: '#3a7a38', dotBg: '#f2faf0', badgeCls: 'traitement' },
      irrigation:   { label: 'Irrigation',   icon: 'bi-droplet-half',  dotColor: '#1d4ed8', dotBg: '#eff6ff', badgeCls: 'irrigation' },
      integration:  { label: 'Intégration',  icon: 'bi-plug-fill',     dotColor: '#7a4fa0', dotBg: '#f5f0fb', badgeCls: 'integration' },
      modification: { label: 'Modification', icon: 'bi-pencil-square', dotColor: '#7a6a1e', dotBg: '#fdf8ee', badgeCls: 'modification' },
    }

    let html = `
      <div style="padding:12px 16px 4px;display:flex;flex-direction:column;gap:8px">
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-note">
          <i class="bi bi-pencil-square"></i> Ajouter une note
        </button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-trait">
          <i class="bi bi-eyedropper"></i> Ajouter un traitement
        </button>
      </div>
    `

    if (entries.length === 0) {
      html += `<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>`
    } else {
      html += `<div class="m-jrn-timeline">`
      entries.forEach((e, idx) => {
        const c = CFG[e.type] || CFG.note
        const isTraitement = e.type === 'traitement'
        const isLast = idx === entries.length - 1
        const fromDash = !!e._fromDashboard
        const isSystem = !!e._system
        html += `
          <div class="m-jrn-entry" data-id="${e.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${c.dotBg};color:${c.dotColor};border-color:${c.dotColor}40">
                <i class="bi ${c.icon}"></i>
              </div>
              ${!isLast ? `<div class="m-jrn-line"></div>` : ''}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${fmt(e.date)}</span>
                <span class="journal-type-badge journal-type-badge--${c.badgeCls}">${c.label}</span>
                ${fromDash
                  ? `<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>`
                  : isSystem
                    ? ''
                    : `<button class="m-jrn-del" data-id="${e.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${e.texte ? `<div class="m-jrn-texte">${e.texte}</div>` : ''}
              ${e.auteur ? `<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${e.auteur}${roleBadgeMobile(e.role)}</div>` : ''}
              ${isTraitement && (e.produit || e.dose || e.cible) ? `
                <div class="m-jrn-meta">
                  ${e.produit ? `<span class="m-jrn-chip"><i class="bi bi-flask"></i>${e.produit}</span>` : ''}
                  ${e.dose    ? `<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${e.dose}</span>` : ''}
                  ${e.cible   ? `<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${e.cible}</span>` : ''}
                </div>` : ''}
            </div>
          </div>`
      })
      html += `</div>`
    }

    el.innerHTML = html

    el.querySelector('#mjrn-add-note')?.addEventListener('click', () => openMJournalForm('note', parcel.id, renderJournal))
    el.querySelector('#mjrn-add-trait')?.addEventListener('click', () => openMJournalForm('traitement', parcel.id, renderJournal))
    el.querySelectorAll('.m-jrn-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id)
        saveMJournal(parcel.id, getMJournal(parcel.id).filter(e => e.id !== id))
        renderJournal()
      })
    })
  }

  renderJournal()
}

function openMJournalForm(type, parcelId, onSaved) {
  const isTraitement = type === 'traitement'
  const today = new Date().toISOString().slice(0, 10)
  const role  = _role === 'admin' ? 'conseiller' : 'membre'
  const currentOrg = orgs.find(o => o.id === (_role === 'admin' ? 100 : 1))
  const auteur = currentOrg ? `${currentOrg.prenomProprietaire} ${currentOrg.nomProprietaire}` : 'Jean Dupont'

  const body = document.createElement('div')
  body.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:12px">
      ${!isTraitement ? `
      <div>
        <div class="m-form-label">Catégorie</div>
        <select class="m-sheet-input" id="mjf-category">
          ${M_NOTE_CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>` : ''}
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="mjf-date" value="${today}">
      </div>
      <div>
        <div class="m-form-label">${isTraitement ? 'Observations' : 'Texte'}</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="${isTraitement ? 'Conditions météo, remarques…' : 'Votre note…'}" style="resize:none;min-height:90px"></textarea>
      </div>
      ${isTraitement ? `
      <div>
        <div class="m-form-label">Produit</div>
        <input type="text" class="m-sheet-input" id="mjf-produit" placeholder="Ex : Bordeaux mixture">
      </div>
      <div style="display:flex;gap:8px">
        <div style="flex:1">
          <div class="m-form-label">Dose</div>
          <input type="text" class="m-sheet-input" id="mjf-dose" placeholder="Ex : 2 kg/ha" style="margin-bottom:0">
        </div>
        <div style="flex:1">
          <div class="m-form-label">Cible</div>
          <input type="text" class="m-sheet-input" id="mjf-cible" placeholder="Ex : Mildiou" style="margin-bottom:0">
        </div>
      </div>` : ''}
    </div>`

  showSheet({
    title: isTraitement ? 'Ajouter un traitement' : 'Ajouter une note',
    body,
    doneLabel: 'Enregistrer',
    onDone: () => {
      const date     = body.querySelector('#mjf-date').value || today
      const texte    = body.querySelector('#mjf-texte').value.trim()
      const category = !isTraitement ? (body.querySelector('#mjf-category')?.value || '') : ''
      const entry    = { id: Date.now(), type, date, texte, auteur, role }
      if (!isTraitement) entry.category = category
      if (isTraitement) {
        entry.produit = body.querySelector('#mjf-produit').value.trim()
        entry.dose    = body.querySelector('#mjf-dose').value.trim()
        entry.cible   = body.querySelector('#mjf-cible').value.trim()
      }
      if (!texte && !entry.produit) return
      saveMJournal(parcelId, [entry, ...getMJournal(parcelId)])
      onSaved()
    }
  })
  setTimeout(() => body.querySelector('#mjf-texte')?.focus(), 380)
}
