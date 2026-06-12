import { pushDetail, popDetail } from '../nav.js'
import { showToast, showSheet, showConfirmSheet } from '../ui.js'
import { plots as allPlots }   from '../../data/plots.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { orgs }                from '../../data/orgs.js'
import { addMesureFavorite, addCumulFavorite } from './dashboard.js'

const cumulThresholds = { djMin: 0, djMax: 18, hfSeuil: 7.2 }

const DASH_CUMUL_META = {
  dj:    { metricLabel: 'Degrés-jours',        unit: 'DJ', icon: 'bi-thermometer-sun', color: '#FBAF05' },
  hf:    { metricLabel: 'Heures de froid',      unit: 'h',  icon: 'bi-thermometer-low', color: '#5AC8FA' },
  pluie: { metricLabel: 'Cumul de pluie',       unit: 'mm', icon: 'bi-droplet-fill',    color: '#2E75B6' },
  rayo:  { metricLabel: 'Rayonnement solaire',  unit: 'MJ', icon: 'bi-sun-fill',        color: '#CBCB0B' },
  etp:   { metricLabel: 'Évapotranspiration',   unit: 'mm', icon: 'bi-moisture',        color: '#7DBDD7' },
  humec: { metricLabel: 'Humectation foliaire', unit: 'h',  icon: 'bi-droplet-half',    color: '#00887E' },
}
const WF_MAX = 4  // max mesures favorites (cf. dashboard.js)
const MSR_PERIOD_LABELS = { '365d': '365 derniers jours', '30d': '30 derniers jours', '7d': '7 derniers jours', 'hier': 'Hier', '1d': "Aujourd'hui", 'custom': 'Personnalisé' }
const MSR_STEP_LABELS = { '1h': 'Horaire', '1d': 'Journalier', '1w': 'Hebdo' }

// ─── Model metadata (iso web) ─────────────────────────────────────────────────
const MODEL_NAMES = {
  'P+': 'Station météo', 'PT': 'Station météo', 'P': 'Pluviomètre',
  'SMV': 'Station météo virtuelle', 'TH': 'Thermomètre-hygromètre',
  'T_MINI': 'Thermomètre de sol', 'W': 'Anémomètre', 'PYRANO': 'Pyranomètre',
  'PAR': 'Capteur PAR', 'LWS': "Capteur d'humectation foliaire", 'T_GEL': 'Capteur de gel',
  'CHP-15/30': 'Tensiomètre', 'CHP-30/60': 'Tensiomètre', 'CHP-60/90': 'Tensiomètre',
  'CAPA-30-3': 'Sonde capacitive', 'CAPA-60-6': 'Sonde capacitive',
  'EC': 'Sonde de fertirrigation',
}

const MODEL_BRANDS = {
  'P+': 'Weenat', 'PT': 'Weenat', 'P': 'Weenat', 'TH': 'Weenat',
  'W': 'Weenat', 'PYRANO': 'Weenat', 'T_MINI': 'Weenat', 'T_GEL': 'Weenat',
  'LWS': 'Weenat', 'CHP-15/30': 'CoRHIZE', 'CHP-30/60': 'CoRHIZE', 'CHP-60/90': 'CoRHIZE',
  'CAPA-30-3': 'CoRHIZE', 'CAPA-60-6': 'CoRHIZE', 'EC': 'CoRHIZE',
  'SMV': 'Weenat (virtuel)',
}

function chpDepthRange(model) {
  if (model === 'CHP-15/30') return [15, 30]
  if (model === 'CHP-30/60') return [15, 60]
  if (model === 'CHP-60/90') return [15, 90]
  return null
}

function buildSensorSubtitle(sensor, city) {
  const modelPart = MODEL_NAMES[sensor.model]
    ? `${MODEL_NAMES[sensor.model]} · ${sensor.model}`
    : sensor.model
  const depthPart = chpDepthRange(sensor.model) && sensor.depth != null
    ? `${sensor.depth} cm`
    : null
  return [modelPart, depthPart, city].filter(Boolean).join(' · ')
}

const MODEL_METRICS_MAP = {
  'P+':       [{ id: 'pluie',       label: 'Pluie',               unit: 'mm',   color: '#2E75B6', cumul: true,  cumulsType: 'pluie' },
               { id: 'temp',        label: 'Température',          unit: '°C',   color: '#FBAF05', cumul: false, cumulsType: 'temp'  },
               { id: 'humidite',    label: 'Humidité',         unit: '%',    color: '#5B12A4', cumul: false }],
  'PT':       [{ id: 'pluie',       label: 'Pluie',               unit: 'mm',   color: '#2E75B6', cumul: true,  cumulsType: 'pluie' },
               { id: 'temp',        label: 'Température',          unit: '°C',   color: '#FBAF05', cumul: false, cumulsType: 'temp'  }],
  'P':        [{ id: 'pluie',       label: 'Pluie',               unit: 'mm',   color: '#2E75B6', cumul: true,  cumulsType: 'pluie' }],
  'SMV':      [{ id: 'pluie',       label: 'Pluie',               unit: 'mm',   color: '#2E75B6', cumul: true,  cumulsType: 'pluie' },
               { id: 'temp',        label: 'Température',          unit: '°C',   color: '#FBAF05', cumul: false, cumulsType: 'temp'  },
               { id: 'humidite',    label: 'Humidité',         unit: '%',    color: '#5B12A4', cumul: false }],
  'TH':       [{ id: 'temp',        label: 'Température',          unit: '°C',   color: '#FBAF05', cumul: false, cumulsType: 'temp'  },
               { id: 'humidite',    label: 'Humidité',         unit: '%',    color: '#5B12A4', cumul: false }],
  'T_MINI':   [{ id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#795548', cumul: false }],
  'T_GEL':    [{ id: 'tseche',      label: 'Température sèche',    unit: '°C',   color: '#23B19B', cumul: false },
               { id: 'thumide',     label: 'Température humide',   unit: '°C',   color: '#5E88EC', cumul: false }],
  'W':        [{ id: 'vent',        label: 'Vent',                 unit: 'km/h',       color: '#616161', cumul: false }],
  'PYRANO':   [{ id: 'rayonnement', label: 'Rayonnement solaire', unit: 'W/m²',       color: '#CBCB0B', cumul: false, cumulsType: 'rayo'  }],
  'PAR':      [{ id: 'par',        label: 'Rayonnement PAR',      unit: 'µmol/m²/s', color: '#4CBB17', cumul: false }],
  'LWS':      [{ id: 'humectation', label: 'Humectation foliaire', unit: '%',          color: '#00887E', cumul: false, cumulsType: 'hws'   }],
  'CHP-15/30':[{ id: 'pothydr',     label: 'Potentiel hydrique',   unit: 'kPa',  color: '#A6C157', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#795548', cumul: false }],
  'CHP-30/60':[{ id: 'pothydr',     label: 'Potentiel hydrique',   unit: 'kPa',  color: '#A6C157', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#795548', cumul: false }],
  'CHP-60/90':[{ id: 'pothydr',     label: 'Potentiel hydrique',   unit: 'kPa',  color: '#A6C157', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#795548', cumul: false }],
  'CAPA-30-3':[{ id: 'teneur',      label: 'Teneur en eau',        unit: '%vol', color: '#ED9A2C', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#795548', cumul: false }],
  'CAPA-60-6':[{ id: 'teneur',      label: 'Teneur en eau',        unit: '%vol', color: '#ED9A2C', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#795548', cumul: false }],
  'EC':       [{ id: 'teneur',      label: 'Teneur en eau',        unit: '%vol', color: '#ED9A2C', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#795548', cumul: false }],
}

// ─── Chart helpers ────────────────────────────────────────────────────────────
function mockSeries(metricId, count) {
  const cfg = {
    pluie:       { base: 2,   amp: 6,   min: 0,   sparse: true },
    temp:        { base: 15,  amp: 8,   min: -5   },
    humidite:    { base: 65,  amp: 20,  min: 20, max: 100 },
    pothydr:     { base: 80,  amp: 60,  min: 0,  max: 200 },
    teneur:      { base: 30,  amp: 12,  min: 5,  max: 50  },
    temp_sol:    { base: 14,  amp: 5,   min: 0,  max: 35  },
    tseche:      { base: 14,  amp: 6,   min: -5  },
    thumide:     { base: 10,  amp: 5,   min: -8  },
    rayonnement: { base: 350, amp: 300, min: 0,  max: 900  },
    humectation: { base: 20,  amp: 80,  min: 0,  max: 100, sparse: true },
    vent:        { base: 15,  amp: 15,  min: 0,  max: 80   },
    par:         { base: 900, amp: 800, min: 0,  max: 2000 },
  }[metricId] || { base: 50, amp: 20, min: 0 }
  return Array.from({ length: count }, (_, i) => {
    const t = i / count * Math.PI * 4
    if (cfg.sparse && Math.random() > 0.25) return 0
    const v = cfg.base + cfg.amp * Math.sin(t - 1) + (Math.random() - 0.5) * cfg.amp * 0.5
    return Math.max(cfg.min ?? 0, Math.min(cfg.max ?? 9999, v))
  })
}

const PERIOD_MINS_S = { '365d': 525600, '30d': 43200, '7d': 10080, 'hier': 1440, '1d': 1440, 'custom': 10080 }

function makeXLabels(period, W, PL, PR, H, PB = 20) {
  const totalMins = PERIOD_MINS_S[period] || 10080
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

function svgChart(metricId, color, isCumul, period = '7d', unit = '') {
  const count = PERIOD_COUNTS[period] || 60
  const vals = mockSeries(metricId, count)
  const W = 320, H = 100, PL = 34, PR = 6, PT = 10, PB = 20
  const iW = W - PL - PR, iH = H - PT - PB
  const minV = isCumul ? 0 : Math.min(...vals)
  const maxV = Math.max(...vals, minV + 0.001)
  const range = maxV - minV
  const xOf = i => PL + i / (vals.length - 1) * iW
  const yOf = v => PT + iH - ((v - minV) / range) * iH
  const gId = `g${Math.random().toString(36).slice(2, 8)}`
  const yLabels  = [0, 0.5, 1].map(t => {
    const v = minV + t * range, y = PT + iH - t * iH
    return `<text x="${PL - 3}" y="${(y + 3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${v < 10 ? v.toFixed(1) : Math.round(v)}</text>`
  }).join('')
  const grid     = [0.25,0.5,0.75].map(t => `<line x1="${PL}" y1="${(PT+iH-t*iH).toFixed(1)}" x2="${W-PR}" y2="${(PT+iH-t*iH).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join('')
  const axisLine = `<line x1="${PL}" y1="${PT+iH}" x2="${W-PR}" y2="${PT+iH}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`
  const xLabels  = makeXLabels(period, W, PL, PR, H)

  if (isCumul) {
    const bw = iW / vals.length * 0.7
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" preserveAspectRatio="none">
      ${yLabels}${grid}${axisLine}
      ${vals.map((v, i) => {
        const bh = ((v - minV) / range) * iH, by = PT + iH - bh
        return `<rect x="${(xOf(i) - bw / 2).toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="${color}" opacity=".75" rx="1"/>`
      }).join('')}
      ${xLabels}
    </svg>`
  }

  const pts = vals.map((v, i) => [xOf(i), yOf(v)])
  const path = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const area = `${path} L${xOf(vals.length - 1).toFixed(1)},${(PT + iH).toFixed(1)} L${PL},${(PT + iH).toFixed(1)} Z`
  const encoded = encodeURIComponent(JSON.stringify({ vals: vals.map(v => +v.toFixed(2)), minV: +minV.toFixed(2), maxV: +maxV.toFixed(2) }))
  return `<div class="m-chart-svg-wrap" data-chart="${encoded}" data-color="${color}" data-unit="${unit}" style="position:relative">
    <svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" preserveAspectRatio="none">
      <defs><linearGradient id="${gId}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${color}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${yLabels}${grid}${axisLine}
      <path d="${area}" fill="url(#${gId})"/>
      <path d="${path}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${pts.map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="${color}"/>`).join('')}
      ${xLabels}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`
}

function contrastColor(hex) {
  const r = parseInt(hex.slice(1,3), 16), g = parseInt(hex.slice(3,5), 16), b = parseInt(hex.slice(5,7), 16)
  return (0.299*r + 0.587*g + 0.114*b) / 255 > 0.5 ? '#000000' : '#ffffff'
}

function bindChartTooltip(wrap) {
  const data = JSON.parse(decodeURIComponent(wrap.dataset.chart || '{}'))
  if (!data.vals) return
  const { vals } = data
  const tip   = wrap.querySelector('.m-chart-tip')
  const line  = wrap.querySelector('.m-chart-crosshair')
  const color = wrap.dataset.color || '#0172A4'
  const unit  = wrap.dataset.unit  || ''
  function onMove(clientX) {
    const rect = wrap.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const idx = Math.round(ratio * (vals.length - 1))
    const val = vals[idx], x = ratio * 100
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
const PERIOD_COUNTS = { '365d': 52, '30d': 60, '7d': 84, 'hier': 48, '1d': 24, 'custom': 60 }

function computeCumuls(metricId, period, type) {
  if (!type) return ''
  const count = PERIOD_COUNTS[period] || 60
  const mins  = PERIOD_MINS_S[period] || 10080
  const hoursPerPt = mins / (count * 60)
  const vals = mockSeries(metricId, count)
  let chips = []
  if (type === 'temp') {
    const dj = vals.reduce((s, v) => s + Math.max(0, Math.min(v, cumulThresholds.djMax) - cumulThresholds.djMin), 0) * (hoursPerPt / 24)
    const hf = vals.filter(v => v < cumulThresholds.hfSeuil).length * hoursPerPt
    chips = [
      { label: 'Degrés jours',    val: `${Math.round(dj)} DJ`, metricId: 'dj', thresholdText: `${cumulThresholds.djMin}°C → ${cumulThresholds.djMax}°C` },
      { label: 'Heures de froid', val: `${Math.round(hf)} h`,  metricId: 'hf', thresholdText: `< ${cumulThresholds.hfSeuil}°C` },
    ]
  } else if (type === 'pluie') {
    const total = vals.reduce((s, v) => s + v, 0)
    chips = [{ label: 'Cumul pluie', val: `${total.toFixed(1)} mm`, metricId: 'pluie' }]
  } else if (type === 'rayo') {
    const h = vals.filter(v => v > 120).length * hoursPerPt
    chips = [{ label: 'Ensoleillement', val: `${Math.round(h)} h`, metricId: 'rayo' }]
  } else if (type === 'hws') {
    const h = vals.filter(v => v > 50).length * hoursPerPt
    chips = [{ label: 'Heures d\'humectation', val: `${Math.round(h)} h`, metricId: 'humec' }]
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

function triggerCsvDownload(content, filename) {
  const blob = new Blob(['﻿' + content], { type: 'text/csv;charset=utf-8;' })
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: filename })
  document.body.appendChild(a); a.click(); document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(a.href), 100)
}

function exportCsvSensor(sensor, period) {
  const metrics = MODEL_METRICS_MAP[sensor.model] || []
  if (!metrics.length) return
  const count  = PERIOD_COUNTS[period] || 60
  const mins   = PERIOD_MINS_S[period] || 10080
  const stepMs = (mins / count) * 60000
  const end    = new Date()
  const start  = new Date(end - mins * 60000)
  const header = ['Horodatage', ...metrics.map(m => `${m.label} (${m.unit})`)].join(';')
  const rows   = Array.from({ length: count }, (_, i) => {
    const ts = new Date(start.getTime() + i * stepMs).toISOString().replace('T', ' ').slice(0, 19)
    return [ts, ...metrics.map(m => mockSeries(m.id, 1)[0].toFixed(2))].join(';')
  })
  triggerCsvDownload([header, ...rows].join('\r\n'), `${sensor.serial}_${period}_${new Date().toISOString().slice(0, 10)}.csv`)
}

function donneesView(sensor, period = '7d', step = '1h') {
  const metrics = MODEL_METRICS_MAP[sensor.model] || []
  if (!metrics.length) return `<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>`

  // sensor-detail uses 'temp','tseche','thumide'; chart-fullscreen uses 'temperature','temp_seche','temp_humide'
  const FS_METRIC_ID = { temp: 'temperature', tseche: 'temp_seche', thumide: 'temp_humide' }
  // Métriques compatibles avec le widget "Mesures préférées" du tableau de bord
  const TR_METRIC_ID = { temp: 'temperature' }
  const TR_UNSUPPORTED = new Set(['tseche', 'thumide'])
  const cards = metrics.map(m => {
    const fsId = FS_METRIC_ID[m.id] || m.id
    const cumulHtml = computeCumuls(m.id, period, m.cumulsType)
    const favBtn = !TR_UNSUPPORTED.has(m.id)
      ? `<button class="m-msr-add-btn" data-msr-metric-id="${TR_METRIC_ID[m.id] || m.id}" data-msr-label="${m.label}" data-msr-unit="${m.unit || ''}" data-msr-color="${m.color}" data-msr-period="${period}" data-msr-step="${step}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`
      : ''
    return `
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${m.color}">${m.label}</span>
          ${favBtn}
        </div>
        ${svgChart(m.id, m.color, m.cumul, period, m.unit || '')}
        <div class="m-chart-details-link" data-metric-id="${fsId}">Voir détails →</div>
        ${cumulHtml}
      </div>`
  }).join('')

  const today = new Date().toISOString().slice(0, 10)
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
          <option value="1h"${step==='1h'?' selected':''}>Horaire</option>
          <option value="1d"${step==='1d'?' selected':''}>Journalier</option>
          <option value="1w"${step==='1w'?' selected':''}>Hebdo</option>
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
    <div class="m-detail-section">${cards}</div>`
}

function paramsView(sensor) {
  const linkedPlots = (sensor.parcelIds || []).map(id => allPlots.find(p => p.id === id)).filter(Boolean)
  const primaryPlot = linkedPlots[0] || null
  const org = primaryPlot ? orgs.find(o => o.id === primaryPlot.orgId) : null
  const signal = sensor.networkQuality || 0
  const signalColor = signal > 70 ? '#30d158' : signal > 40 ? '#ff9f0a' : '#ff3b30'
  const events = sensor.event ? (Array.isArray(sensor.event) ? sensor.event : [sensor.event]) : []

  const linkedPlotRows = linkedPlots.map((plot, i) => {
    const isLast = i === linkedPlots.length - 1
    return `<div class="m-list-row${isLast && linkedPlots.length > 0 ? '' : ''}" data-unlink-plot="${plot.id}">
      <span class="m-list-row-label">${plot.name}</span>
      ${plot.crop ? `<span class="m-list-row-value">${plot.crop}</span>` : ''}
      <button data-unlink-plot-btn="${plot.id}" style="background:none;border:none;padding:4px 6px;cursor:pointer;color:#ff3b30;font-size:13px;line-height:1;flex-shrink:0" title="Délier">
        <i class="bi bi-x-circle"></i>
      </button>
    </div>`
  }).join('')

  return `
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Nom du capteur</span>
          <input type="text" id="sensor-name-input" class="m-inline-input" placeholder="${sensor.serial}"
            value="${(()=>{try{return JSON.parse(localStorage.getItem('weenat-sensor-names'))||{}}catch{return{}}})()?.[sensor.id]||''}"
            style="flex:1;min-width:0;margin-left:10px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 10px;font-size:14px;font-family:inherit;color:#1c1c1e;background:#f5f5f7;outline:none;user-select:text;-webkit-user-select:text">
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${MODEL_BRANDS[sensor.model] || 'Weenat'}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${sensor.model} — ${MODEL_NAMES[sensor.model] || sensor.model}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">N° de série</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:13px">${sensor.serial}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Réseau télécom</span>
          <span class="m-list-row-value">${sensor.telecom || '—'}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Exploitation</span>
          <span class="m-list-row-value">${org?.name || '—'}</span>
        </div>
      </div>

      ${(() => {
        const range = chpDepthRange(sensor.model)
        if (!range) return ''
        const cur = sensor.depth ?? range[0]
        return `
          <div class="m-list-section-header">Configuration</div>
          <div class="m-list">
            <div class="m-list-row m-list-row--last" style="flex-wrap:wrap;gap:8px">
              <span class="m-list-row-label">Profondeur d'installation</span>
              <div style="display:flex;align-items:center;gap:6px;margin-left:auto">
                <input type="number" id="chp-depth-input" value="${cur}" min="${range[0]}" max="${range[1]}" step="5"
                  style="width:62px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 8px;font-size:14px;font-family:inherit;background:#f5f5f7;text-align:center;-webkit-appearance:none">
                <span style="font-size:13px;color:#8e8e93">cm</span>
                <button id="chp-depth-save" style="background:#0172A4;color:#fff;border:none;border-radius:8px;padding:6px 12px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer">Enregistrer</button>
              </div>
              <div style="width:100%;font-size:11px;color:#8e8e93;margin-top:-4px">De ${range[0]} à ${range[1]} cm</div>
            </div>
          </div>`
      })()}

      <div class="m-list-section-header">Géolocalisation</div>
      <div class="m-list">
        ${primaryPlot ? `<div id="sensor-minimap" class="m-minimap-container"></div>` : ''}
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${org?.ville || '—'}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${primaryPlot?.lat||0},${primaryPlot?.lng||0}?q=${primaryPlot?.lat||0},${primaryPlot?.lng||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">Anomalies</div>
      <div class="m-list">
        ${events.length
          ? events.map((ev, idx) => {
              const canStop = ev.toLowerCase().includes('déplacé')
              return `<div class="m-list-row" style="justify-content:space-between;gap:10px">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${ev}</span>
                </div>
                ${canStop ? `<button class="ev-stop-btn" data-ev-idx="${idx}" style="flex-shrink:0;background:rgba(255,59,48,.1);border:1px solid #ff3b30;border-radius:8px;padding:5px 10px;font-size:12px;color:#ff3b30;font-family:inherit;cursor:pointer;white-space:nowrap">Arrêter</button>` : ''}
              </div>`
            }).join('')
          : '<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${signalColor};font-weight:600">${signal}%</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Émissions (moy. 7 j)</span>
          <span class="m-list-row-value">${sensor.messages7d ?? '—'} msg</span>
        </div>
      </div>

      <div class="m-list-section-header">Maintenance</div>
      <div class="m-list">
        <div class="m-list-row m-list-row--last" data-action="add-maintenance" style="color:#007aff">
          <i class="bi bi-plus-circle" style="font-size:15px"></i>
          <span class="m-list-row-label" style="color:#007aff">Ajouter une opération</span>
        </div>
      </div>

      <div class="m-list-section-header">Parcelles liées</div>
      <div class="m-list" id="linked-plots-list">
        ${linkedPlotRows}
        <div class="m-list-row m-list-row--last" data-action="add-plot" style="color:#007aff">
          <i class="bi bi-plus-circle" style="font-size:15px"></i>
          <span class="m-list-row-label" style="color:#007aff">Lier une parcelle</span>
        </div>
      </div>

      <div class="m-list-section-header">Gestion</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'ajout</span>
          <span class="m-list-row-value">${sensor.lastMessage ? new Date(sensor.lastMessage).toLocaleDateString('fr-FR') : '—'}</span>
        </div>
        <div class="m-list-row m-list-row--last" data-action="delete" style="color:#ff3b30">
          <i class="bi bi-trash" style="color:#ff3b30;font-size:15px"></i>
          <span class="m-list-row-label" style="color:#ff3b30">Supprimer de l'exploitation</span>
        </div>
      </div>
      <div style="height:24px"></div>
    </div>`
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function initSensorDetail(sensor, initialView = 'donnees', role = 'admin') {
  if (!sensor.parcelIds) sensor.parcelIds = []
  const linkedPlot = sensor.parcelIds.length ? allPlots.find(p => sensor.parcelIds.includes(p.id)) : null
  let activeView    = initialView
  let currentPeriod = '7d'
  let currentStep   = '1h'
  let isFav = false

  const sensorCity = linkedPlot ? (orgs.find(o => o.id === linkedPlot.orgId)?.ville || '') : ''
  const layer = pushDetail(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${sensor.serial}</div>
          <div class="m-detail-subtitle">${buildSensorSubtitle(sensor, sensorCity)}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${initialView === 'donnees' ? 'active' : ''}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${initialView === 'params'  ? 'active' : ''}" data-view="params">Paramètres${sensor.event && (Array.isArray(sensor.event) ? sensor.event.length > 0 : true) ? ' <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px;margin-bottom:1px;flex-shrink:0"></span>' : ''}</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`)

  function renderView() {
    const c = layer.querySelector('#detail-content')
    if (activeView === 'donnees') c.innerHTML = donneesView(sensor, currentPeriod, currentStep)
    if (activeView === 'params')  { c.innerHTML = paramsView(sensor); initMinimap() }
    bindViewEvents()
  }

  function initMinimap() {
    const L = window.L
    const primaryPlot = sensor.parcelIds.length ? allPlots.find(p => sensor.parcelIds.includes(p.id)) : null
    if (!L || !primaryPlot) return
    setTimeout(() => {
      const el = layer.querySelector('#sensor-minimap'); if (!el) return
      const map = L.map(el, { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false })
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(map)
      map.setView([primaryPlot.lat, primaryPlot.lng], 15)
      L.circleMarker([primaryPlot.lat, primaryPlot.lng], { radius: 9, color: '#fff', weight: 2, fillColor: '#5b8dd9', fillOpacity: 0.9 }).addTo(map)
    }, 50)
  }

  function bindViewEvents() {
    layer.querySelector('.m-period-sel')?.addEventListener('change', e => {
      currentPeriod = e.target.value; renderView()
    })
    layer.querySelector('.m-step-sel')?.addEventListener('change', e => {
      currentStep = e.target.value; renderView()
    })
    layer.querySelectorAll('.m-chart-svg-wrap').forEach(wrap => bindChartTooltip(wrap))
    layer.querySelectorAll('.m-chart-details-link[data-metric-id]').forEach(link => {
      link.addEventListener('click', () => {
        import('./chart-fullscreen.js').then(mod => mod.initChartFullscreen({
          sensor,
          metricId: link.dataset.metricId,
          backLabel: 'Retour',
        }))
      })
    })
    layer.querySelectorAll('.m-msr-add-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const metricId = btn.dataset.msrMetricId
        const subjectKey   = `s-${sensor.id}`
        const subjectLabel = `${sensor.model} ${sensor.serial}`
        const period = btn.dataset.msrPeriod
        const step   = btn.dataset.msrStep
        const result = addMesureFavorite({
          subjectKey, subjectLabel, metricId,
          metricLabel: btn.dataset.msrLabel, unit: btn.dataset.msrUnit || '',
          period, periodLabel: MSR_PERIOD_LABELS[period] || period,
          step, stepLabel: MSR_STEP_LABELS[step] || step,
          color: btn.dataset.msrColor,
        })
        if (result === 'max') { showToast(`Maximum de mesures atteint (${WF_MAX})`); return }
        if (result === 'dup') { showToast('Cette mesure est déjà dans vos favoris'); return }
        showToast('Mesure ajoutée au tableau de bord')
      })
    })
    layer.addEventListener('click', e => {
      const addBtn = e.target.closest('.m-cumul-add-btn')
      if (addBtn) {
        const metricId = addBtn.dataset.cumulMetricId
        const val = addBtn.dataset.cumulVal
        const meta = DASH_CUMUL_META[metricId]
        if (!meta) return
        const subjectLabel = `${sensor.model} ${sensor.serial}`
        const body = document.createElement('div')
        body.innerHTML = `<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${meta.metricLabel}</strong> (<em>${val}</em>) au tableau de bord du capteur <strong>${sensor.serial}</strong> ?</div>`
        showSheet({ title: 'Tableau de bord', body, doneLabel: 'Ajouter', cancelLabel: 'Annuler', onDone: () => {
          const thresholds = metricId === 'hf' ? { cold: cumulThresholds.hfSeuil }
                           : metricId === 'dj' ? { low: cumulThresholds.djMin, high: cumulThresholds.djMax }
                           : null
          const result = addCumulFavorite({ metricId, ...meta, subjectKey: `s-${sensor.id}`, subjectLabel,
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
      }
    })
    layer.querySelectorAll('.m-list-row[data-action]').forEach(row => {
      row.addEventListener('click', () => {
        const action = row.dataset.action
        if (action === 'add-maintenance') {
          openMobileSensorJournal(sensor, { openForm: true })
        } else if (action === 'add-plot') {
          openPlotPicker(sensor, role, renderView)
        } else if (action === 'delete') {
          const linkedPlot = allPlots.find(p => sensor.parcelIds?.includes(p.id))
          showConfirmSheet({
            title: "Retirer de l'exploitation",
            message: `Retirer <strong>${sensor.model} ${sensor.serial}</strong> de l'exploitation ?${linkedPlot ? `<br><br>Parcelle liée : <strong>${linkedPlot.name}</strong>.` : ''}<br><br>Le capteur restera visible dans le catalogue réseau.`,
            confirmLabel: "Retirer",
            onConfirm: () => showToast("Capteur retiré de l'exploitation (fonctionnalité à venir)")
          })
        } else {
          showToast('Fonctionnalité à venir')
        }
      })
    })
    layer.querySelectorAll('.ev-stop-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const idx = +btn.dataset.evIdx
        if (Array.isArray(sensor.event)) {
          sensor.event = sensor.event.filter((_, j) => j !== idx)
          if (!sensor.event.length) sensor.event = null
        } else {
          sensor.event = null
        }
        renderView()
      })
    })
    layer.querySelectorAll('[data-unlink-plot-btn]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const plotId = +btn.dataset.unlinkPlotBtn
        const plot = allPlots.find(p => p.id === plotId)
        showConfirmSheet({
          title: 'Délier la parcelle',
          message: `Délier ce capteur de <strong>${plot?.name || 'la parcelle'}</strong> ?`,
          confirmLabel: 'Délier',
          onConfirm: () => {
            sensor.parcelIds = sensor.parcelIds.filter(id => id !== plotId)
            showToast(`Délié de ${plot?.name || 'la parcelle'}`)
            renderView()
          }
        })
      })
    })
    layer.querySelector('#sensor-name-input')?.addEventListener('change', e => {
      const name = e.target.value.trim()
      try {
        const names = JSON.parse(localStorage.getItem('weenat-sensor-names')) || {}
        if (name) names[sensor.id] = name; else delete names[sensor.id]
        localStorage.setItem('weenat-sensor-names', JSON.stringify(names))
      } catch {}
      const titleEl = layer.querySelector('.m-detail-title')
      if (titleEl) titleEl.textContent = name || sensor.serial
      window.dispatchEvent(new CustomEvent('weenat-sensor-renamed'))
    })
    layer.querySelector('#chp-depth-save')?.addEventListener('click', () => {
      const input = layer.querySelector('#chp-depth-input')
      const range = chpDepthRange(sensor.model)
      if (!input || !range) return
      let val = parseInt(input.value)
      if (isNaN(val)) return
      val = Math.max(range[0], Math.min(range[1], val))
      input.value = val
      sensor.depth = val
      const subtitleEl = layer.querySelector('.m-detail-subtitle')
      if (subtitleEl) subtitleEl.textContent = buildSensorSubtitle(sensor, sensorCity)
      showToast(`Profondeur enregistrée : ${val} cm`)
    })
  }

  layer.querySelectorAll('.m-detail-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      layer.querySelectorAll('.m-detail-tab').forEach(t => t.classList.remove('active'))
      tab.classList.add('active')
      activeView = tab.dataset.view
      renderView()
    })
  })

  layer.querySelector('.m-detail-back').addEventListener('click', popDetail)

  layer.querySelector('#d-star').addEventListener('click', () => {
    isFav = !isFav
    const btn = layer.querySelector('#d-star')
    btn.querySelector('i').className = isFav ? 'bi bi-star-fill' : 'bi bi-star'
    btn.style.color = isFav ? '#f5c842' : ''
    showToast(isFav ? 'Ajouté aux favoris' : 'Retiré des favoris')
  })

  layer.querySelector('#d-journal').addEventListener('click', () => openMobileSensorJournal(sensor))

  layer.querySelector('#d-plus').addEventListener('click', () => window.showMobileAddPage?.())

  renderView()
}

// ─── Mobile sensor journal ────────────────────────────────────────────────────

const SENSOR_JRN_KEY = id => `sensor-journal-${id}`

const MAINT_TYPES_M = [
  { id: 'installation', label: 'Installation',           icon: 'bi-box-arrow-in-down', color: '#0172A4' },
  { id: 'batterie',     label: 'Remplacement batterie',  icon: 'bi-battery-charging',  color: '#e07820' },
  { id: 'antenne',      label: 'Remplacement antenne',   icon: 'bi-reception-4',       color: '#5b8dd9' },
  { id: 'bocal',        label: 'Remplacement bocal',     icon: 'bi-cup',               color: '#3a9e6a' },
  { id: 'lacet',        label: 'Remplacement lacet',     icon: 'bi-link-45deg',        color: '#8060c0' },
  { id: 'cuillere',     label: 'Remplacement cuillère',  icon: 'bi-moisture',          color: '#45b7d1' },
  { id: 'nettoyage',    label: 'Nettoyage',              icon: 'bi-droplet',           color: '#4ecdc4' },
  { id: 'verification', label: 'Vérification terrain',   icon: 'bi-check2-circle',     color: '#3a7a38' },
  { id: 'note',         label: 'Note technique',         icon: 'bi-chat-text',         color: '#8e8e93' },
]

function getSJournal(sensorId) {
  try { const r = localStorage.getItem(SENSOR_JRN_KEY(sensorId)); if (r) return JSON.parse(r) } catch (_) {}
  return [
    { id: 1, type: 'installation', date: '2023-01-15', user: 'Technicien Weenat', role: 'conseiller', texte: '' },
    { id: 2, type: 'batterie',     date: '2023-06-10', user: 'Technicien Weenat', role: 'conseiller', texte: '' },
    { id: 3, type: 'note',         date: '2023-11-02', user: 'Jean Dupont',       role: 'membre',     texte: 'Capteur légèrement déplacé — redressé' },
  ]
}

function saveSJournal(sensorId, entries) {
  localStorage.setItem(SENSOR_JRN_KEY(sensorId), JSON.stringify(entries))
}

function openPlotPicker(sensor, role, onChanged) {
  const myOrgId = role === 'adherent' ? 1 : null
  const plots = myOrgId ? allPlots.filter(p => p.orgId === myOrgId) : allPlots.filter(p => p.orgId !== 100)
  const myMetrics = new Set((MODEL_METRICS_MAP[sensor.model] || []).map(m => m.id))

  const body = document.createElement('div')
  body.innerHTML = `
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`

  function renderList(query = '') {
    const q = query.toLowerCase()
    const filtered = q
      ? plots.filter(p => p.name.toLowerCase().includes(q) || (p.crop || '').toLowerCase().includes(q))
      : plots
    const listEl = body.querySelector('#plot-list')
    if (!filtered.length) {
      listEl.innerHTML = `<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>`
      return
    }
    listEl.innerHTML = ''
    filtered.forEach((plot, i) => {
      const linked = sensor.parcelIds.includes(plot.id)
      const isLast = i === filtered.length - 1
      const row = document.createElement('div')
      row.style.cssText = `display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${isLast ? '' : 'border-bottom:1px solid rgba(0,0,0,.07);'}`
      row.innerHTML = `
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:${linked ? '#1c1c1e' : '#1c1c1e'}">${plot.name}</span>
          ${plot.crop ? `<span style="font-size:12px;color:#8e8e93;margin-left:6px">${plot.crop}</span>` : ''}
        </span>
        ${linked
          ? '<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>'
          : '<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`

      row.addEventListener('click', () => {
        if (linked) {
          showConfirmSheet({
            title: 'Délier la parcelle',
            message: `Délier ce capteur de <strong>${plot.name}</strong> ?`,
            confirmLabel: 'Délier',
            onConfirm: () => {
              sensor.parcelIds = sensor.parcelIds.filter(id => id !== plot.id)
              showToast(`Délié de ${plot.name}`)
              renderList(query)
              onChanged()
            }
          })
        } else {
          // Lier — vérifier conflit
          const conflicting = allSensors.find(s =>
            s.id !== sensor.id && s.parcelIds.includes(plot.id) &&
            (MODEL_METRICS_MAP[s.model] || []).some(m => myMetrics.has(m.id))
          )
          if (conflicting) {
            sheet.classList.remove('m-sheet-overlay--show')
            setTimeout(() => {
              sheet.remove()
              openConflictSheet(sensor, plot, conflicting, onChanged)
            }, 280)
          } else {
            sensor.parcelIds = [...sensor.parcelIds, plot.id]
            showToast(`Lié à ${plot.name}`)
            renderList(query)
            onChanged()
          }
        }
      })
      listEl.appendChild(row)
    })
  }

  renderList()
  const sheet = showSheet({ title: 'Parcelles liées', body, doneLabel: 'Fermer', onDone: () => { onChanged() } })
  body.querySelector('#plot-search').addEventListener('input', e => renderList(e.target.value))
}

function openConflictSheet(sensor, plot, conflicting, onLinked) {
  const conflictingMetrics = (MODEL_METRICS_MAP[conflicting.model] || [])
    .filter(m => (MODEL_METRICS_MAP[sensor.model] || []).some(n => n.id === m.id))
    .map(m => m.label).join(', ')

  const body = document.createElement('div')
  body.innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:10px;padding:6px 0 14px;font-size:13px;color:#636366;line-height:1.5">
      <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:17px;flex-shrink:0;margin-top:1px"></i>
      <span>La parcelle <strong style="color:#1c1c1e">${plot.name}</strong> a déjà un capteur mesurant <strong style="color:#1c1c1e">${conflictingMetrics}</strong>. Quel capteur conserver ?</span>
    </div>

    <div style="border-radius:12px;overflow:hidden;border:.5px solid rgba(0,0,0,.12)">
      <div class="m-sheet-option" id="keep-existing" style="gap:12px;border-bottom:.5px solid rgba(0,0,0,.1)">
        <div style="width:36px;height:36px;border-radius:50%;background:#f2f2f7;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <i class="bi bi-broadcast" style="color:#636366;font-size:15px"></i>
        </div>
        <div style="flex:1;min-width:0;text-align:left">
          <div style="font-size:15px;font-weight:600;color:#1c1c1e">${conflicting.model} · <span style="font-family:monospace;font-weight:400">${conflicting.serial}</span></div>
          <div style="font-size:12px;color:#8e8e93;margin-top:2px">Conserver ce capteur</div>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-sheet-option" id="keep-new" style="gap:12px">
        <div style="width:36px;height:36px;border-radius:50%;background:#e8f3ff;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <i class="bi bi-broadcast" style="color:#0172A4;font-size:15px"></i>
        </div>
        <div style="flex:1;min-width:0;text-align:left">
          <div style="font-size:15px;font-weight:600;color:#0172A4">${sensor.model} · <span style="font-family:monospace;font-weight:400">${sensor.serial}</span></div>
          <div style="font-size:12px;color:#0172A4;opacity:.75;margin-top:2px">Utiliser ce capteur à la place</div>
        </div>
        <i class="bi bi-chevron-right" style="color:#0172A4;font-size:13px;flex-shrink:0"></i>
      </div>
    </div>
    <div style="height:6px"></div>`

  const sheet = showSheet({ title: 'Conflit de métrique', body, doneLabel: 'Annuler', onDone: () => {} })

  body.querySelector('#keep-existing').addEventListener('click', () => {
    sheet.classList.remove('m-sheet-overlay--show')
    setTimeout(() => { sheet.remove(); showToast('Liaison annulée') }, 280)
  })
  body.querySelector('#keep-new').addEventListener('click', () => {
    conflicting.parcelIds = conflicting.parcelIds.filter(id => id !== plot.id)
    sensor.parcelIds = [...sensor.parcelIds, plot.id]
    sheet.classList.remove('m-sheet-overlay--show')
    setTimeout(() => { sheet.remove(); showToast(`Lié à ${plot.name}`); onLinked() }, 280)
  })
}

function openMobileSensorJournal(sensor, opts = {}) {
  const layer = pushDetail(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`)

  layer.querySelector('#sjrn-close').addEventListener('click', popDetail)

  const typeMap = Object.fromEntries(MAINT_TYPES_M.map(t => [t.id, t]))

  function renderJournal() {
    const el = layer.querySelector('#sjrn-content')
    const dashNotes = (() => { try { return JSON.parse(localStorage.getItem('weenat-m-notes')) || [] } catch { return [] } })()
      .filter(n => n.linkedType === 'sensor' && n.linkedId === sensor.id)
      .map((n, i) => ({ id: `dash-${i}`, type: 'note', date: n.date, texte: n.text, user: n.auteur, _fromDashboard: true }))
    const entries = [...getSJournal(sensor.id), ...dashNotes].sort((a, b) => b.date.localeCompare(a.date))
    const fmt = d => { const [y, m, j] = d.split('-'); return `${j}/${m}/${y}` }

    let html = `
      <div style="padding:12px 16px 8px">
        <button class="m-btn m-btn--primary" id="sjrn-add-btn">
          <i class="bi bi-plus-circle-fill"></i> Ajouter une opération de maintenance
        </button>
      </div>
    `

    if (entries.length === 0) {
      html += `<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>`
    } else {
      html += `<div class="m-jrn-timeline">`
      entries.forEach((e, idx) => {
        const t = typeMap[e.type] || { label: e.type, icon: 'bi-circle', color: '#8e8e93' }
        const isLast = idx === entries.length - 1
        const fromDash = !!e._fromDashboard
        html += `
          <div class="m-jrn-entry" data-id="${e.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${t.color}18;color:${t.color};border-color:${t.color}40">
                <i class="bi ${t.icon}"></i>
              </div>
              ${!isLast ? `<div class="m-jrn-line"></div>` : ''}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${fmt(e.date)}</span>
                <span style="font-size:12px;font-weight:600;color:${t.color}">${t.label}</span>
                ${fromDash
                  ? `<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>`
                  : `<button class="m-jrn-del" data-id="${e.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${e.texte ? `<div class="m-jrn-texte">${e.texte}</div>` : ''}
              ${e.user ? `<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${e.user}${roleBadgeSensor(e.role)}</div>` : ''}
            </div>
          </div>`
      })
      html += `</div>`
    }

    el.innerHTML = html
    el.querySelector('#sjrn-add-btn')?.addEventListener('click', () => openSJournalForm(sensor.id, renderJournal))
    el.querySelectorAll('.m-jrn-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id)
        saveSJournal(sensor.id, getSJournal(sensor.id).filter(e => e.id !== id))
        renderJournal()
      })
    })
  }

  renderJournal()
  if (opts.openForm) openSJournalForm(sensor.id, renderJournal)
}

function roleBadgeSensor(role) {
  if (!role) return ''
  const cfg = {
    membre:     { label: 'Membre',     bg: '#f2f2f7', color: '#636366' },
    conseiller: { label: 'Conseiller', bg: '#eef4ff', color: '#3a7bd5' },
  }
  const c = cfg[role] || cfg.membre
  return `<span style="font-size:10px;background:${c.bg};color:${c.color};border-radius:4px;padding:1px 5px;font-weight:500">${c.label}</span>`
}

function openSJournalForm(sensorId, onSaved) {
  const today = new Date().toISOString().slice(0, 10)
  const body = document.createElement('div')
  body.innerHTML = `
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${MAINT_TYPES_M.map(t => `<option value="${t.id}">${t.label}</option>`).join('')}
        </select>
      </div>
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="sjf-date" value="${today}">
      </div>
      <div>
        <div class="m-form-label">Intervenant</div>
        <input type="text" class="m-sheet-input" id="sjf-user" value="Jean Dupont">
      </div>
      <div>
        <div class="m-form-label">Note</div>
        <textarea class="m-sheet-input" id="sjf-texte" placeholder="Observations éventuelles…" style="resize:none;min-height:72px"></textarea>
      </div>
    </div>`
  showSheet({
    title: 'Opération de maintenance',
    body,
    doneLabel: 'Enregistrer',
    onDone: () => {
      const type  = body.querySelector('#sjf-type').value
      const date  = body.querySelector('#sjf-date').value || today
      const user  = body.querySelector('#sjf-user').value.trim() || 'Jean Dupont'
      const role  = localStorage.getItem('menuRole') === 'admin-reseau' ? 'conseiller' : 'membre'
      const texte = body.querySelector('#sjf-texte').value.trim()
      saveSJournal(sensorId, [{ id: Date.now(), type, date, user, role, texte }, ...getSJournal(sensorId)])
      onSaved()
    }
  })
  setTimeout(() => body.querySelector('#sjf-texte')?.focus(), 350)
}
