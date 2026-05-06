import { pushDetail, popDetail } from '../nav.js'
import { showToast, showSheet } from '../ui.js'
import { plots as allPlots }   from '../../data/plots.js'
import { orgs }                from '../../data/orgs.js'

// ─── Model metadata (iso web) ─────────────────────────────────────────────────
const MODEL_NAMES = {
  'P+': 'Station météo', 'PT': 'Station météo', 'P': 'Pluviomètre',
  'SMV': 'Station météo virtuelle', 'TH': 'Thermo-hygromètre',
  'T_MINI': 'Thermomètre de sol', 'W': 'Anémomètre', 'PYRANO': 'Pyranomètre',
  'PAR': 'Capteur PAR', 'LWS': 'Humectation foliaire', 'T_GEL': 'Capteur gel',
  'CHP-15/30': 'Tensiomètre', 'CHP-30/60': 'Tensiomètre', 'CHP-60/90': 'Tensiomètre',
  'CAPA-30-3': 'Sonde capacitive', 'CAPA-60-6': 'Sonde capacitive',
  'EC': 'Sonde fertirrigation',
}

const MODEL_BRANDS = {
  'P+': 'Weenat', 'PT': 'Weenat', 'P': 'Weenat', 'TH': 'Weenat',
  'W': 'Weenat', 'PYRANO': 'Weenat', 'T_MINI': 'Weenat', 'T_GEL': 'Weenat',
  'LWS': 'Weenat', 'CHP-15/30': 'CoRHIZE', 'CHP-30/60': 'CoRHIZE', 'CHP-60/90': 'CoRHIZE',
  'CAPA-30-3': 'CoRHIZE', 'CAPA-60-6': 'CoRHIZE', 'EC': 'CoRHIZE',
  'SMV': 'Weenat (virtuel)',
}

const MODEL_METRICS_MAP = {
  'P+':       [{ id: 'pluie',       label: 'Pluie',               unit: 'mm',   color: '#45b7d1', cumul: true,  cumulsType: 'pluie' },
               { id: 'temp',        label: 'Température',          unit: '°C',   color: '#e07050', cumul: false, cumulsType: 'temp'  },
               { id: 'humidite',    label: 'Humidité air',         unit: '%',    color: '#4ecdc4', cumul: false }],
  'PT':       [{ id: 'pluie',       label: 'Pluie',               unit: 'mm',   color: '#45b7d1', cumul: true,  cumulsType: 'pluie' },
               { id: 'temp',        label: 'Température',          unit: '°C',   color: '#e07050', cumul: false, cumulsType: 'temp'  }],
  'P':        [{ id: 'pluie',       label: 'Pluie',               unit: 'mm',   color: '#45b7d1', cumul: true,  cumulsType: 'pluie' }],
  'SMV':      [{ id: 'pluie',       label: 'Pluie',               unit: 'mm',   color: '#45b7d1', cumul: true,  cumulsType: 'pluie' },
               { id: 'temp',        label: 'Température',          unit: '°C',   color: '#e07050', cumul: false, cumulsType: 'temp'  },
               { id: 'humidite',    label: 'Humidité air',         unit: '%',    color: '#4ecdc4', cumul: false }],
  'TH':       [{ id: 'temp',        label: 'Température',          unit: '°C',   color: '#e07050', cumul: false, cumulsType: 'temp'  },
               { id: 'humidite',    label: 'Humidité air',         unit: '%',    color: '#4ecdc4', cumul: false }],
  'T_MINI':   [{ id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#bb8fce', cumul: false }],
  'T_GEL':    [{ id: 'tseche',      label: 'Température sèche',    unit: '°C',   color: '#e07050', cumul: false },
               { id: 'thumide',     label: 'Température humide',   unit: '°C',   color: '#80c8e8', cumul: false }],
  'W':        [{ id: 'vent',        label: 'Vent',                 unit: 'km/h',       color: '#82b8e0', cumul: false }],
  'PYRANO':   [{ id: 'rayonnement', label: 'Rayonnement solaire', unit: 'W/m²',       color: '#f5c842', cumul: false, cumulsType: 'rayo'  }],
  'PAR':      [{ id: 'par',        label: 'Rayonnement PAR',      unit: 'µmol/m²/s', color: '#a0d070', cumul: false }],
  'LWS':      [{ id: 'humectation', label: 'Humectation foliaire', unit: '%',          color: '#60a090', cumul: false, cumulsType: 'hws'   }],
  'CHP-15/30':[{ id: 'pothydr',     label: 'Potentiel hydrique',   unit: 'kPa',  color: '#5b8dd9', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#bb8fce', cumul: false }],
  'CHP-30/60':[{ id: 'pothydr',     label: 'Potentiel hydrique',   unit: 'kPa',  color: '#5b8dd9', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#bb8fce', cumul: false }],
  'CHP-60/90':[{ id: 'pothydr',     label: 'Potentiel hydrique',   unit: 'kPa',  color: '#5b8dd9', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#bb8fce', cumul: false }],
  'CAPA-30-3':[{ id: 'teneur',      label: 'Teneur en eau',        unit: '%vol', color: '#f0c060', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#bb8fce', cumul: false }],
  'CAPA-60-6':[{ id: 'teneur',      label: 'Teneur en eau',        unit: '%vol', color: '#f0c060', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#bb8fce', cumul: false }],
  'EC':       [{ id: 'teneur',      label: 'Teneur en eau',        unit: '%vol', color: '#f0c060', cumul: false },
               { id: 'temp_sol',    label: 'Température sol',      unit: '°C',   color: '#bb8fce', cumul: false }],
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

function bindChartTooltip(wrap) {
  const data = JSON.parse(decodeURIComponent(wrap.dataset.chart || '{}'))
  if (!data.vals) return
  const { vals } = data
  const tip  = wrap.querySelector('.m-chart-tip')
  const line = wrap.querySelector('.m-chart-crosshair')
  const color = wrap.dataset.color || '#0172A4'
  function onMove(clientX) {
    const rect = wrap.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const idx = Math.round(ratio * (vals.length - 1))
    const val = vals[idx], x = ratio * 100
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
const PERIOD_COUNTS = { '365d': 52, '30d': 60, '7d': 84, 'hier': 48, '1d': 24, 'custom': 60 }

function computeCumuls(metricId, period, type) {
  if (!type) return ''
  const count = PERIOD_COUNTS[period] || 60
  const mins  = PERIOD_MINS_S[period] || 10080
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

function donneesView(sensor, period = '7d', step = '1h') {
  const metrics = MODEL_METRICS_MAP[sensor.model] || []
  if (!metrics.length) return `<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>`

  const cards = metrics.map(m => {
    return `
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${m.color}">${m.label}</span>
        </div>
        ${svgChart(m.id, m.color, m.cumul, period)}
        ${computeCumuls(m.id, period, m.cumulsType)}
      </div>`
  }).join('')

  return `
    <div class="m-period-bar">
      <select class="m-period-sel">
        <option value="365d"${period==='365d'?' selected':''}>365 jours</option>
        <option value="30d"${period==='30d'?' selected':''}>30 jours</option>
        <option value="7d"${period==='7d'?' selected':''}>7 jours</option>
        <option value="hier"${period==='hier'?' selected':''}>Hier</option>
        <option value="1d"${period==='1d'?' selected':''}>Aujourd'hui</option>
        <option value="custom"${period==='custom'?' selected':''}>Personnalisé</option>
      </select>
      <select class="m-step-sel">
        <option value="1h"${step==='1h'?' selected':''}>Horaire</option>
        <option value="1d"${step==='1d'?' selected':''}>Journalier</option>
        <option value="1w"${step==='1w'?' selected':''}>Hebdo</option>
      </select>
    </div>
    <div class="m-detail-section">${cards}</div>`
}

function paramsView(sensor) {
  const linkedPlot = sensor.parcelId ? allPlots.find(p => p.id === sensor.parcelId) : null
  const org = linkedPlot ? orgs.find(o => o.id === linkedPlot.orgId) : null
  const signal = sensor.networkQuality || 0
  const signalColor = signal > 70 ? '#30d158' : signal > 40 ? '#ff9f0a' : '#ff3b30'
  const events = sensor.event ? [sensor.event] : []

  return `
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
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
        <div class="m-list-row m-list-row--last" data-action="edit-exploitation">
          <span class="m-list-row-label">Exploitation</span>
          <span class="m-list-row-value">${org?.name || '—'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation</div>
      <div class="m-list">
        ${linkedPlot ? `<div id="sensor-minimap" class="m-minimap-container"></div>` : ''}
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${org?.ville || '—'}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="https://maps.apple.com/?q=${encodeURIComponent(org?.ville||'')}&sll=${linkedPlot?.lat||0},${linkedPlot?.lng||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">État</div>
      <div class="m-list">
        ${events.length
          ? events.map(e => `<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${e}</span></div>`).join('')
          : '<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${signalColor};font-weight:600">${signal}%</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Émissions (7j)</span>
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

      <div class="m-list-section-header">Liens</div>
      <div class="m-list">
        ${linkedPlot
          ? `<div class="m-list-row"><span class="m-list-row-label">Parcelle</span><span class="m-list-row-value">${linkedPlot.name}</span><i class="bi bi-chevron-right m-list-chevron"></i></div>`
          : ''}
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
export function initSensorDetail(sensor) {
  const linkedPlot = sensor.parcelId ? allPlots.find(p => p.id === sensor.parcelId) : null
  let activeView    = 'donnees'
  let currentPeriod = '7d'
  let currentStep   = '1h'
  let isFav = false

  const sensorCity = linkedPlot ? (orgs.find(o => o.id === linkedPlot.orgId)?.ville || '') : ''
  const layer = pushDetail(`
    <div class="m-detail-header">
      <div class="m-detail-row1">
        <div class="m-navbar-logo-mark">W</div>
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-row2">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <span class="m-d-name">${sensor.serial}</span>
        <span class="m-d-sep">·</span><span class="m-d-sub">${MODEL_NAMES[sensor.model] || sensor.model}</span>
        ${sensorCity ? `<span class="m-d-sep">·</span><span class="m-d-commune">${sensorCity}</span>` : ''}
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`)

  function renderView() {
    const c = layer.querySelector('#detail-content')
    if (activeView === 'donnees') c.innerHTML = donneesView(sensor, currentPeriod, currentStep)
    if (activeView === 'params')  { c.innerHTML = paramsView(sensor); initMinimap() }
    bindViewEvents()
  }

  function initMinimap() {
    const L = window.L; if (!L || !linkedPlot) return
    setTimeout(() => {
      const el = layer.querySelector('#sensor-minimap'); if (!el) return
      const map = L.map(el, { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false })
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(map)
      map.setView([linkedPlot.lat, linkedPlot.lng], 15)
      L.circleMarker([linkedPlot.lat, linkedPlot.lng], { radius: 9, color: '#fff', weight: 2, fillColor: '#5b8dd9', fillOpacity: 0.9 }).addTo(map)
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
    layer.querySelectorAll('.m-list-row[data-action]').forEach(row => {
      row.addEventListener('click', () => showToast('Fonctionnalité à venir'))
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

  layer.querySelector('#d-plus').addEventListener('click', () => {
    const body = `
      <button class="m-sheet-option" data-a="plot"><i class="bi bi-map"></i> Parcelle</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" data-a="maintenance"><i class="bi bi-tools"></i> Opération de maintenance</button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`
    const el = document.createElement('div'); el.innerHTML = body
    const sh = showSheet({ title: 'Ajouter au capteur', body: el, doneLabel: 'Fermer', onDone: () => {} })
    el.querySelectorAll('[data-a]').forEach(btn => {
      btn.addEventListener('click', () => {
        sh.classList.remove('m-sheet-overlay--show')
        setTimeout(() => { sh.remove(); showToast('Fonctionnalité à venir') }, 280)
      })
    })
  })

  renderView()
}
