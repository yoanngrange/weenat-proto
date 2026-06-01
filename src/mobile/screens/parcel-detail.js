import { pushDetail, popDetail } from '../nav.js'
import { showToast, showSheet, showConfirmSheet } from '../ui.js'
import { orgs }                 from '../../data/orgs.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { IRRIG_SEASON } from '../../data/irrigations.js'
import { plots as allPlots }    from '../../data/plots.js'

const _role = new URLSearchParams(window.location.search).get('role') === 'adherent' ? 'adherent' : 'admin'

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
                                                  { label: 'Thermo-hygromètre',    id: 'w-thygro'      },
                                                  { label: 'Thermomètre de sol',   id: 'w-tsol'        },
                                                  { label: 'Anémomètre',           id: 'w-anem'        },
                                                  { label: 'Pyranomètre',          id: 'w-pyrano'      },
                                                  { label: 'Humectation foliaire', id: 'w-lws'         },
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
  const ids     = ['previsions-5j', 'cumuls']
  const hasIrrig = parcel.irrigation && parcel.irrigation !== 'Non irrigué'
  if (hasIrrig) ids.push('irrigations')
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
        import('./irrigation.js').then(m => m.openIrrigationSaisie([parcel], showToast))
      } else if (action === 'strategie-irrigation') {
        popDetail()
        import('./irrigation.js').then(m => m.openIrrigationStrategie([parcel], showToast))
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
  humectation:  { label: 'Humectation foliaire', unit: '%',    color: '#00887E', cumul: false, cumulsType: 'hws'   },
  vent:         { label: 'Vent',                 unit: 'km/h', color: '#616161', cumul: false },
  par:          { label: 'Rayonnement PAR',      unit: 'µmol/m²/s', color: '#4CBB17', cumul: false },
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

const PERIOD_COUNTS = { '365d': 52, '30d': 60, '7d': 84, 'hier': 48, '1d': 24, 'custom': 60 }
const PERIOD_MINS   = { '365d': 525600, '30d': 43200, '7d': 10080, 'hier': 1440, '1d': 1440, 'custom': 10080 }

function makeXLabels(period, W, PL, PR, H, PB = 20) {
  const totalMins = PERIOD_MINS[period] || 10080
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
    const d = new Date(now.getTime() - (1 - ratio) * totalMins * 60000)
    const x = (PL + ratio * iW).toFixed(1)
    const anchor = i === 0 ? 'start' : i === N ? 'end' : 'middle'
    return [
      `<line x1="${x}" y1="${axisY}" x2="${x}" y2="${axisY + 4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,
      `<text x="${x}" y="${H - 3}" text-anchor="${anchor}" font-size="9" fill="#8e8e93" font-family="-apple-system">${fmt(d)}</text>`,
    ].join('')
  }).join('')
}

function svgChart(metricId, color, isCumul, period = '7d') {
  const count = PERIOD_COUNTS[period] || 60
  const vals = mockSeries(metricId, count)
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
  const xLabels  = makeXLabels(period, W, PL, PR, H)

  if (isCumul) {
    const bw = iW / vals.length * 0.7
    const bars = vals.map((v, i) => {
      const bh = ((v - minV) / range) * iH
      const by = PT + iH - bh
      return `<rect x="${(xOf(i) - bw / 2).toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="${color}" opacity=".8" rx="1"/>`
    }).join('')
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" preserveAspectRatio="none">${yLabels}${grid}${axisLine}${xLabels}${bars}</svg>`
  }

  const pts = vals.map((v, i) => [xOf(i), yOf(v)])
  const path = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const area = `${path} L${xOf(vals.length - 1).toFixed(1)},${(PT + iH).toFixed(1)} L${PL},${(PT + iH).toFixed(1)} Z`
  // Encode vals for tooltip
  const encoded = encodeURIComponent(JSON.stringify({ vals: vals.map(v => +v.toFixed(2)), minV: +minV.toFixed(2), maxV: +maxV.toFixed(2) }))

  return `<div class="m-chart-svg-wrap" data-chart="${encoded}" data-color="${color}" style="position:relative">
    <svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" preserveAspectRatio="none">
      <defs><linearGradient id="${gId}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${color}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${yLabels}${grid}${axisLine}
      <path d="${area}" fill="url(#${gId})"/>
      <path d="${path}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${xLabels}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`
}

function computeCumuls(metricId, period, type) {
  if (!type) return ''
  const count = PERIOD_COUNTS[period] || 60
  const mins  = PERIOD_MINS[period] || 10080
  const hoursPerPt = mins / (count * 60)
  const vals = mockSeries(metricId, count)
  let chips = []
  if (type === 'temp') {
    const dj = vals.reduce((s, v) => s + Math.max(0, v), 0) * (hoursPerPt / 24)
    const hf = vals.filter(v => v < 7).length * hoursPerPt
    chips = [{ label: 'Degrés jours', val: `${Math.round(dj)} DJ` },
             { label: 'Heures de froid', val: `${Math.round(hf)} h` }]
  } else if (type === 'pluie') {
    const total = vals.reduce((s, v) => s + v, 0)
    chips = [{ label: 'Cumul pluie', val: `${total.toFixed(1)} mm` }]
  } else if (type === 'rayo') {
    const h = vals.filter(v => v > 120).length * hoursPerPt
    chips = [{ label: 'Ensoleillement', val: `${Math.round(h)} h` }]
  } else if (type === 'etp') {
    const total = vals.reduce((s, v) => s + v, 0) * (hoursPerPt / 24)
    chips = [{ label: 'ETP cumulée', val: `${total.toFixed(1)} mm` }]
  } else if (type === 'hws') {
    const h = vals.filter(v => v > 50).length * hoursPerPt
    chips = [{ label: 'Heures d\'humectation', val: `${Math.round(h)} h` }]
  }
  if (!chips.length) return ''
  return `<div class="m-chart-cumuls">${chips.map(c =>
    `<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${c.label}</span>
      <span class="m-chart-cumul-val">${c.val}</span>
    </div>`).join('')}</div>`
}

function chartCard(metricId, period, sensorId = null) {
  const m = CHART_METRICS[metricId]; if (!m) return ''
  const expandBtn = sensorId
    ? `<button class="m-chart-expand-btn" data-sensor-id="${sensorId}" data-metric-id="${metricId}" style="border:none;background:none;color:#007AFF;font-size:11px;padding:2px 4px;cursor:pointer;display:flex;align-items:center;gap:3px;margin-left:auto;font-family:inherit"><i class="bi bi-fullscreen"></i> Voir les données</button>`
    : ''
  return `
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${m.color}">${m.label}</span>
        ${expandBtn}
      </div>
      ${svgChart(metricId, m.color, m.cumul, period)}
      ${computeCumuls(metricId, period, m.cumulsType)}
    </div>`
}

// ─── Chart tooltip ───────────────────────────────────────────────────────────
function bindChartTooltip(wrap) {
  const data = JSON.parse(decodeURIComponent(wrap.dataset.chart || '{}'))
  if (!data.vals) return
  const { vals, minV, maxV } = data
  const tip  = wrap.querySelector('.m-chart-tip')
  const line = wrap.querySelector('.m-chart-crosshair')
  const color = wrap.dataset.color || '#0172A4'

  function onMove(clientX) {
    const rect = wrap.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const idx = Math.round(ratio * (vals.length - 1))
    const val = vals[idx]
    const x = ratio * 100
    line.style.cssText = `display:block;position:absolute;top:0;bottom:20px;left:${x}%;width:1px;background:${color};opacity:.5`
    tip.style.cssText  = `display:block;position:absolute;top:8px;left:${Math.min(x, 75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`
    tip.textContent = val < 10 ? val.toFixed(1) : String(Math.round(val))
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
  const TODAY_M = new Date().toISOString().split('T')[0]
  const real    = irrigs.filter(i => i.real)
  const plan    = irrigs.filter(i => !i.real)
  const tReal   = real.reduce((s, i) => s + i.mm, 0)
  const tPlan   = plan.reduce((s, i) => s + i.mm, 0)
  const next    = plan.filter(i => i.iso >= TODAY_M).sort((a, b) => a.iso < b.iso ? -1 : 1)[0]
  const MN      = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const fmtD    = iso => { const [,m,d] = iso.split('-'); return `${+d} ${MN[+m-1]}` }
  const irrType = parcel.irrigation

  if (!irrigs.length) {
    return `
      <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:8px">
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
          <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
            <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          </span>
          <button class="m-widget-menu" data-wid="irrigations" type="button">•••</button>
        </div>
        <div style="font-size:13px;color:#8e8e93">Aucune irrigation enregistrée cette saison</div>
      </div>`
  }

  return `
    <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
        <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
          <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          ${irrType ? `<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:20px;padding:1px 8px;font-size:11px;font-weight:600">${irrType}</span>` : ''}
          ${(parcel.substrate || parcel.texture) ? `<span style="background:#f0f0f0;color:#636366;border-radius:20px;padding:1px 8px;font-size:11px;font-weight:500">${parcel.substrate ? 'Substrat : ' + parcel.substrate : parcel.texture}</span>` : ''}
        </span>
        <button class="m-widget-menu" type="button">•••</button>
      </div>
      <div style="display:flex;gap:20px;width:100%">
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Réalisées</div>
          <div style="font-size:22px;font-weight:700;color:#E07820;line-height:1.1">${tReal} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${real.length} irrig.</div>
        </div>
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Planifiées</div>
          <div style="font-size:22px;font-weight:700;color:#FFB705;line-height:1.1">${tPlan} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${plan.length} irrig.</div>
        </div>
      </div>
      ${next ? `<div style="font-size:12px;color:#3a3a3c"><i class="bi bi-arrow-right-circle" style="color:#0172A4"></i> Prochaine · <strong>${fmtD(next.iso)}</strong> · ${next.mm} mm</div>` : ''}
    </div>`
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

function mWidgetCard(title, icon, color, body, id = '') {
  return `
    <div class="m-widget-card">
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${color}"><i class="bi ${icon}"></i> ${title}</span>
        <button class="m-widget-menu" data-wid="${id}" type="button">•••</button>
      </div>
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
    { id: 'etp',    label: 'ETP',             unit: 'mm', color: '#7DBDD7', icon: 'bi-moisture',         val: _pcumulVal(parcel.id, 'etp',    dates['etp']    || jan1), show: true },
    { id: 'pluie',  label: 'Pluie',           unit: 'mm', color: '#2E75B6', icon: 'bi-cloud-rain-heavy', val: _pcumulVal(parcel.id, 'pluie',  dates['pluie']  || jan1), show: metSet.has('pluie') },
    { id: 'djc',    label: 'Degrés jours',    unit: 'DJ', color: '#FBAF05', icon: 'bi-thermometer-half', val: _pcumulVal(parcel.id, 'djc',    dates['djc']    || jan1), show: metSet.has('temperature'), cfg: true,
      cfgLabel: `${cfg.djMin ?? 0}–${cfg.djMax ?? 18}°C` },
    { id: 'hfroid', label: 'Heures de froid', unit: 'h',  color: '#FEE7B4', icon: 'bi-snow',             val: _pcumulVal(parcel.id, 'hfroid', dates['hfroid'] || jan1), show: metSet.has('temperature'), cfg: true,
      cfgLabel: `< ${cfg.hfSeuil ?? 7.2}°C` },
    { id: 'humec',  label: 'Humectation',     unit: 'h',  color: '#00887E', icon: 'bi-droplet',          val: _pcumulVal(parcel.id, 'humec',  dates['humec']  || jan1), show: metSet.has('humectation') },
    { id: 'enso',   label: 'Ensoleillement',  unit: 'h',  color: '#CBCB0B', icon: 'bi-brightness-high',  val: _pcumulVal(parcel.id, 'enso',   dates['enso']   || jan1), show: true },
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
          <button class="m-pcumul-del" data-cid="${it.id}" data-pid="${parcel.id}" type="button" style="position:absolute;top:8px;right:8px;border:none;background:rgba(0,0,0,.08);border-radius:50%;width:22px;height:22px;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#636366">×</button>
          <div class="m-cumuls-saved-row1" style="padding-right:32px">
            <span class="m-cumuls-saved-metric"><i class="bi ${it.icon}" style="color:${it.color}"></i> ${it.label}</span>
            <span class="m-cumuls-saved-val" style="color:${it.color}">${it.val}<span class="m-cumuls-saved-unit"> ${it.unit}</span></span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:4px;flex-wrap:wrap">
            <span style="font-size:12px;color:#8e8e93">Depuis le</span>
            <input type="date" class="m-pcumul-date" data-cid="${it.id}" data-pid="${parcel.id}" value="${d}" style="border: 1px solid #CCC;background: transparent;font-size: 12px;color: #8e8e93;cursor: pointer;font-family: inherit;padding: 4px;border-radius: 5px;">
            ${it.cfg ? `<button class="m-pcumul-cfg" data-cid="${it.id}" data-pid="${parcel.id}" style="border: 1px solid #CCC;background: transparent;font-size: 11px;color: #8e8e93;cursor: pointer;font-family: inherit;padding: 5px;border-radius: 5px;"><i class="bi bi-gear"></i> ${it.cfgLabel}</button>` : ''}
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
  const MODEL_NAMES_M = {
    'P+': 'Station météo', 'PT': 'Station météo', 'P': 'Pluviomètre', 'TH': 'Thermo-hygro',
    'SMV': 'Station météo virtuelle', 'W': 'Anémomètre', 'PYRANO': 'Pyranomètre',
    'PAR': 'Capteur PAR', 'LWS': 'Humectation', 'T_GEL': 'Sonde gel',
    'T_MINI': 'Thermo. sol', 'CHP-15/30': 'Tensiomètre', 'CHP-30/60': 'Tensiomètre',
    'CHP-60/90': 'Tensiomètre', 'CAPA-30-3': 'Sonde capacitive', 'CAPA-60-6': 'Sonde capacitive',
    'EC': 'Fertirrigation',
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
        ${m ? svgChart(primaryMetricId, color, false, '1d') : '<div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--txt3);font-size:12px">Données indisponibles</div>'}
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

function donneesView(linkedSensorIds, period = '7d', step = '1h') {
  const sensorMetrics = new Set()
  const metricToSensorId = {}
  linkedSensorIds.forEach(id => {
    const s = allSensors.find(x => x.id === id)
    if (s) (SENSOR_MODEL_METRICS[s.model] || []).forEach(m => {
      sensorMetrics.add(m)
      if (!metricToSensorId[m]) metricToSensorId[m] = id
    })
  })
  const unique = [...new Set(['etp', 'rayonnement', 'temp_rosee', ...sensorMetrics])]

  const today   = new Date().toISOString().slice(0, 10)
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10)
  return `
    <div class="m-period-bar" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:8px">
        <select class="m-period-sel" style="flex:1;min-width:0">
          <option value="365d"${period==='365d'?' selected':''}>365 jours</option>
          <option value="30d"${period==='30d'?' selected':''}>30 jours</option>
          <option value="7d"${period==='7d'?' selected':''}>7 jours</option>
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
        <input type="date" class="m-custom-from" value="${weekAgo}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to" value="${today}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
      </div>` : ''}
    </div>
    <div class="m-detail-section">
      ${unique.map(id => chartCard(id, period, metricToSensorId[id] ?? null)).join('')}
    </div>`
}

function paramsView(parcel, org, linkedSensorIds) {
  const cropOptions = ['Blé tendre', 'Maïs', 'Orge', 'Colza', 'Prairie', 'Tournesol', 'Betterave', 'Pomme', 'Légumes', 'Vigne']
  const irrigOptions = ['Non irrigué', 'Pivot', 'Enrouleur', 'Rampe', 'Goutte à goutte', 'Aspersion']
  const textureOpts  = ['Limon', 'Limon argileux', 'Limon fin', 'Argile', 'Argile limoneuse', 'Sable limoneux']
  const envOptions   = ['Plein champ', 'Sous abri', 'Serre', 'Arboriculture', 'Maraîchage', 'Vignoble']

  const linkedSensors = linkedSensorIds.map(id => allSensors.find(x => x.id === id)).filter(Boolean)
  const linkedNames = linkedSensors.map(s => `${s.model} — ${s.serial}`)
  const hasPPlus = linkedSensors.some(s => s.model === 'P+' || s.model === 'PT')
  const hasP     = linkedSensors.some(s => s.model === 'P')
  const rainConflict = hasPPlus && hasP

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
          <span class="m-list-row-value">${parcel.env || '—'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-irrigation">
          <span class="m-list-row-label">Irrigation</span>
          <span class="m-list-row-value">${parcel.irrigation || '—'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${parcel.substrate ? 'Substrat : ' + parcel.substrate : (parcel.texture || '—')}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${linkedNames.length
          ? linkedNames.map((n, i) => `<div class="m-list-row${i === linkedNames.length - 1 ? ' m-list-row--last' : ''}">
              <span class="m-list-row-label">${n}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join('')
          : '<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun capteur lié</span></div>'}
        <div class="m-list-row m-list-row--last" data-action="add-sensor" style="color:#007aff">
          <i class="bi bi-plus-circle" style="font-size:15px"></i>
          <span class="m-list-row-label" style="color:#007aff">Ajouter un capteur</span>
        </div>
      </div>

      <div class="m-list-section-header">Alertes & Intégrations</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-integrations">
          <span class="m-list-row-label">Intégrations</span>
          <span class="m-list-row-value">${(parcel.integrations || []).length || '—'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
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

  function renderView() {
    const c = layer.querySelector('#detail-content')
    if (activeView === 'widgets')  c.innerHTML = widgetsView(parcel, linkedSensorIds)
    if (activeView === 'donnees')  c.innerHTML = donneesView(linkedSensorIds, currentPeriod, currentStep)
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
        }))
      })
    })
    // Expand chart → open fullscreen chart
    layer.querySelectorAll('.m-chart-expand-btn[data-sensor-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = +btn.dataset.sensorId
        const s = allSensors.find(x => x.id === sid)
        if (!s) return
        import('./chart-fullscreen.js').then(mod => mod.initChartFullscreen({
          sensor: s,
          linkedSensorIds,
          metricId: btn.dataset.metricId || null,
          backLabel: parcel.name,
        }))
      })
    })
    // Param rows
    layer.querySelectorAll('.m-list-row[data-action]').forEach(row => {
      row.addEventListener('click', () => {
        if (row.dataset.action === 'edit-exploitation') pickExploitation()
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
        const valEl = card?.querySelector('.m-cumuls-saved-val')
        if (valEl) {
          const unitEl = card.querySelector('.m-cumuls-saved-unit')
          const unit = unitEl?.textContent.trim() || ''
          const newVal = _pcumulVal(pid, cid, newDate)
          valEl.innerHTML = `${newVal}<span class="m-cumuls-saved-unit"> ${unit}</span>`
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

const M_JOURNAL_KEY = id => `parcel-journal-${id}`

const M_NOTE_CATEGORIES = [
  'Observation générale', 'Préparation du sol (labour)', 'Préparation du sol (strip-till)',
  'Préparation du sol (sous-solage)', 'Fertilisation', 'Semis', 'Récolte',
  'Stade phénologique', 'Passage de sangliers', 'Gestion de haie bocagère',
  'Irrigation manuelle', 'Autre',
]

function getMJournal(parcelId) {
  try { const r = localStorage.getItem(M_JOURNAL_KEY(parcelId)); if (r) return JSON.parse(r) } catch (_) {}
  return [
    { id: 1, type: 'note', category: 'Observation générale', date: '2026-05-11', auteur: 'Jean Dupont', texte: 'Quelques pucerons sur feuilles basses. À surveiller.' },
    { id: 2, type: 'traitement', date: '2026-05-16', auteur: 'Sophie Martin', texte: 'Vent < 2 m/s, conditions conformes.', produit: 'Karate Zeon', dose: '0,1 L/ha', cible: 'Pucerons' },
  ]
}

function saveMJournal(parcelId, entries) {
  localStorage.setItem(M_JOURNAL_KEY(parcelId), JSON.stringify(entries))
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
      .map((n, i) => ({ id: `dash-${i}`, type: 'note', date: n.date, texte: n.text, auteur: n.auteur, _fromDashboard: true }))
    const entries = [...getMJournal(parcel.id), ...dashNotes].sort((a, b) => b.date.localeCompare(a.date))
    const fmt = d => { const [y, m, j] = d.split('-'); return `${j}/${m}/${y}` }

    const CFG = {
      note:       { label: 'Note',       icon: 'bi-pencil',     dotColor: '#3a7bd5', dotBg: '#eef4ff', badgeCls: 'note' },
      traitement: { label: 'Traitement', icon: 'bi-eyedropper', dotColor: '#3a7a38', dotBg: '#f2faf0', badgeCls: 'traitement' },
    }

    let html = `
      <div style="padding:12px 16px 4px;display:flex;gap:8px">
        <button class="btn-secondary btn-sm" id="mjrn-add-note" style="gap:6px;flex:1;justify-content:center">
          <i class="bi bi-pencil-square"></i> Note
        </button>
        <button class="btn-secondary btn-sm" id="mjrn-add-trait" style="gap:6px;flex:1;justify-content:center">
          <i class="bi bi-eyedropper"></i> Traitement
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
                  : `<button class="m-jrn-del" data-id="${e.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${e.texte ? `<div class="m-jrn-texte">${e.texte}</div>` : ''}
              ${e.auteur && fromDash ? `<div style="font-size:11px;color:#8e8e93;margin-top:2px">${e.auteur}</div>` : ''}
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
  const modal = document.createElement('div')
  modal.className = 'modal add-modal'
  modal.innerHTML = `
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">${isTraitement ? 'Ajouter un traitement' : 'Ajouter une note'}</span>
        <button class="add-modal-close">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="mjf-date" class="journal-form-input" value="${today}">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">${isTraitement ? 'Observations' : 'Texte'}</label>
          <textarea id="mjf-texte" class="journal-form-textarea" placeholder="${isTraitement ? 'Conditions météo…' : 'Votre note…'}"></textarea>
        </div>
        ${isTraitement ? `
        <div class="journal-form-row">
          <label class="journal-form-label">Produit</label>
          <input type="text" id="mjf-produit" class="journal-form-input" placeholder="Ex : Bordeaux mixture">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Dose</label>
          <input type="text" id="mjf-dose" class="journal-form-input" placeholder="Ex : 2 kg/ha">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Cible</label>
          <input type="text" id="mjf-cible" class="journal-form-input" placeholder="Ex : Mildiou">
        </div>` : ''}
        <button class="btn-primary btn-sm" id="mjf-save" style="width:100%;justify-content:center;margin-top:4px">Enregistrer</button>
      </div>
    </div>`
  modal.querySelector('.add-modal-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
  modal.querySelector('#mjf-save').addEventListener('click', () => {
    const date  = modal.querySelector('#mjf-date').value || today
    const texte = modal.querySelector('#mjf-texte').value.trim()
    const entry = { id: Date.now(), type, date, texte, auteur: 'Jean Dupont' }
    if (isTraitement) {
      entry.produit = modal.querySelector('#mjf-produit').value.trim()
      entry.dose    = modal.querySelector('#mjf-dose').value.trim()
      entry.cible   = modal.querySelector('#mjf-cible').value.trim()
    }
    if (!texte && !entry.produit) return
    saveMJournal(parcelId, [entry, ...getMJournal(parcelId)])
    modal.remove()
    onSaved()
  })
  document.body.appendChild(modal)
}
