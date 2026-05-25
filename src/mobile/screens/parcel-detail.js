import { pushDetail, popDetail } from '../nav.js'
import { showToast, showSheet } from '../ui.js'
import { orgs }                 from '../../data/orgs.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { IRRIG_SEASON, buildGroups } from '../../data/irrigations.js'
import { plots as allPlots }    from '../../data/plots.js'

const _role = new URLSearchParams(window.location.search).get('role') === 'adherent' ? 'adherent' : 'admin'

const WIDGET_CATALOG = [
  { title: 'Cumuls', items: ['Cumul Degrés jours','Cumul Pluie','Cumul Ensoleillement','Cumul Evapotranspiration','Cumul Heures froides','Cumul Humectation foliaire'] },
  { title: 'Outils aide à la décision', items: ["Maï'zy",'Suivi de culture','Weephyt','Decitrait','Tavelure Pomme'] },
  { title: 'Indicateurs', items: ['DPV','THI','Température de rosée','Température du sol','Rayonnement solaire','Gel'] },
  { title: 'Prévisions', items: ['Prévisions à 5 jours','Prévisions à 6 heures','Prévisions du jour','Prévisions de tensiométrie'] },
  { title: 'Capteurs', items: ['Anémomètre',"Capteur d'humectation foliaire",'Capteur PAR','Pyranomètre','Station météo','Station Météo Virtuelle','Thermomètre de sol','Thermomètre-Hygromètre'] },
  { title: 'Irrigation', items: ['Bilan hydrique','Irrigations','Sonde capacitive','Tensiomètre','Sonde de fertirrigation','Profil capteurs','Niveau de réservoir en eau utilisable','Profil de niveau de réservoir'] },
]

function openWidgetCatalog() {
  const sectionsHtml = WIDGET_CATALOG.map(sec => `
    <div class="m-list-section-header">${sec.title}</div>
    ${sec.items.map(item => `
      <div class="m-wcat-item">
        <span>${item}</span>
        <button class="m-wcat-add" type="button"><i class="bi bi-plus-circle"></i></button>
      </div>`).join('')}`).join('')

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
    btn.addEventListener('click', () => showToast('Widget bientôt disponible'))
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
  etp:          { label: 'Évapotranspiration',   unit: 'mm/j', color: '#c090e0', cumul: true,  cumulsType: 'etp'   },
  rayonnement:  { label: 'Rayonnement solaire',  unit: 'W/m²', color: '#f5c842', cumul: false, cumulsType: 'rayo'  },
  temp_rosee:   { label: 'Température de rosée', unit: '°C',   color: '#80c8e8', cumul: false },
  pluie:        { label: 'Pluie',                unit: 'mm',   color: '#45b7d1', cumul: true,  cumulsType: 'pluie' },
  temperature:  { label: 'Température',          unit: '°C',   color: '#e07050', cumul: false, cumulsType: 'temp'  },
  humidite:     { label: 'Humidité',          unit: '%',    color: '#4ecdc4', cumul: false },
  pothydr:      { label: 'Potentiel hydrique',   unit: 'kPa',  color: '#5b8dd9', cumul: false },
  teneur:       { label: 'Teneur en eau',         unit: '%vol', color: '#f0c060', cumul: false },
  temp_sol:     { label: 'Température sol',       unit: '°C',   color: '#bb8fce', cumul: false },
  humectation:  { label: 'Humectation foliaire', unit: '%',    color: '#60a090', cumul: false, cumulsType: 'hws'   },
  vent:         { label: 'Vent',                 unit: 'km/h', color: '#82b8e0', cumul: false },
  par:          { label: 'Rayonnement PAR',      unit: 'µmol/m²/s', color: '#a0d070', cumul: false },
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

function chartCard(metricId, period) {
  const m = CHART_METRICS[metricId]; if (!m) return ''
  return `
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${m.color}">${m.label}</span>
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
  const groups = buildGroups(allPlots.filter(p => p.orgId === parcel.orgId))
  const labels = new Set([parcel.name])
  groups.filter(g => g.ids.includes(parcel.id)).forEach(g => labels.add(g.label))
  const ck = [parcel.crop, parcel.irrigation].filter(v => v && v !== "Pas d'irrigation" && v !== "Non irrigué").join(' · ')
  if (ck) labels.add(ck)
  const irrigs  = IRRIG_SEASON.filter(i => labels.has(i.label))
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
          <button class="m-widget-menu" type="button">•••</button>
        </div>
        <div style="font-size:13px;color:#8e8e93">Aucune irrigation enregistrée cette saison</div>
      </div>`
  }

  return `
    <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
        <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
          <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          ${irrType && irrType !== "Pas d'irrigation" ? `<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:20px;padding:1px 8px;font-size:11px;font-weight:600">${irrType}</span>` : ''}
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
  const sensors = linkedSensorIds.map(id => allSensors.find(s => s.id === id)).filter(Boolean)
  const sensorWidgets = mWidgetSensorCards(sensors)
  return `
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${irrigationWidget(parcel)}
      ${mWidgetCumuls(parcel)}
      ${mWidgetPrev5j()}
      ${sensorWidgets}
    </div>`
}

// ─── Mobile widgets ───────────────────────────────────────────────────────────

function mWidgetCard(title, icon, color, body) {
  return `
    <div class="m-widget-card">
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${color}"><i class="bi ${icon}"></i> ${title}</span>
        <button class="m-widget-menu" type="button">•••</button>
      </div>
      ${body}
    </div>`
}

function mWidgetCumuls(parcel) {
  const seed = parcel.id || 1
  const rnd0 = (a, b) => +(a + ((seed * 9301 + 49297) % 233280) / 233280 * (b - a)).toFixed(1)
  const pluie = rnd0(40, 180)
  const etp   = rnd0(60, 200)
  const djc   = Math.round(rnd0(80, 320))
  const rayo  = Math.round(rnd0(120, 600))
  const hfroid = Math.round(rnd0(20, 120))

  const items = [
    { label: 'Pluie',           val: pluie,  unit: 'mm',   color: '#45b7d1', icon: 'bi-cloud-rain-heavy' },
    { label: 'ETP',             val: etp,    unit: 'mm',   color: '#c090e0', icon: 'bi-sun' },
    { label: 'Degrés jours',    val: djc,    unit: 'DJ',   color: '#e07050', icon: 'bi-thermometer-half' },
    { label: 'Ensoleillement',  val: rayo,   unit: 'h',    color: '#f5c842', icon: 'bi-brightness-high' },
    { label: 'Heures de froid', val: hfroid, unit: 'h',    color: '#7bc4b0', icon: 'bi-snow' },
  ]

  const body = `
    <div class="m-wcumuls-list">
      ${items.map(it => `
        <div class="m-wcumuls-row">
          <i class="bi ${it.icon}" style="color:${it.color};width:16px;text-align:center"></i>
          <span class="m-wcumuls-label">${it.label}</span>
          <span class="m-wcumuls-val" style="color:${it.color}">${it.val} <span class="m-wcumuls-unit">${it.unit}</span></span>
        </div>`).join('')}
    </div>
    <div class="m-widget-footer">Depuis le 1er janvier 2026</div>`

  return mWidgetCard('Cumuls saison', 'bi-bar-chart-line', '#0172A4', body)
}

function mWidgetPrev5j() {
  const DAYS = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
  const ICONS = ['bi-sun', 'bi-cloud-sun', 'bi-cloud', 'bi-cloud-rain', 'bi-cloud-drizzle', 'bi-cloud-lightning', 'bi-cloud-snow']
  const today = new Date()
  const seed0 = today.getDate()

  const days = Array.from({ length: 5 }, (_, i) => {
    const d = new Date(today); d.setDate(today.getDate() + i)
    const s = seed0 + i * 7
    const tmax = Math.round(16 + ((s * 127 + 31) % 100) / 100 * 12)
    const tmin = Math.round(tmax - 4 - ((s * 31 + 17) % 40) / 10)
    const pluie = ((s * 41 + 13) % 100) < 35 ? Math.round(2 + (s * 13) % 18) : 0
    const icon = ICONS[pluie > 0 ? (pluie > 8 ? 3 : 4) : ((s % 3 === 0) ? 1 : (s % 5 === 0 ? 2 : 0))]
    return { day: DAYS[d.getDay()], tmax, tmin, pluie, icon }
  })

  const body = `
    <div class="m-wprev5-grid">
      ${days.map((d, i) => `
        <div class="m-wprev5-col${i === 0 ? ' m-wprev5-col--today' : ''}">
          <div class="m-wprev5-day">${i === 0 ? "Auj." : d.day}</div>
          <i class="bi ${d.icon} m-wprev5-icon"></i>
          <div class="m-wprev5-tmax">${d.tmax}°</div>
          <div class="m-wprev5-tmin">${d.tmin}°</div>
          ${d.pluie > 0 ? `<div class="m-wprev5-rain">${d.pluie}mm</div>` : `<div class="m-wprev5-rain m-wprev5-rain--none">—</div>`}
        </div>`).join('')}
    </div>
    <div class="m-widget-footer">Source : Modèle Arome · 3 km</div>`

  return mWidgetCard('Prévisions 5 jours', 'bi-cloud-sun', '#4ecdc4', body)
}

function mWidgetSensorCards(sensors) {
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
      <div class="m-widget-footer">${sensor.serial}</div>`

    return mWidgetCard(name, icon, color, body)
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
  linkedSensorIds.forEach(id => {
    const s = allSensors.find(x => x.id === id)
    if (s) (SENSOR_MODEL_METRICS[s.model] || []).forEach(m => sensorMetrics.add(m))
  })
  const unique = [...new Set(['etp', 'rayonnement', 'temp_rosee', ...sensorMetrics])]

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
        <option value="1h"${step === '1h' ? ' selected' : ''}>Horaire</option>
        <option value="1d"${step === '1d' ? ' selected' : ''}>Journalier</option>
        <option value="1w"${step === '1w' ? ' selected' : ''}>Hebdo</option>
      </select>
      <button class="m-export-btn" title="Exporter CSV"><i class="bi bi-download"></i></button>
    </div>
    <div class="m-detail-section">
      ${unique.map(id => chartCard(id, period)).join('')}
    </div>`
}

function paramsView(parcel, org, linkedSensorIds) {
  const cropOptions = ['Blé tendre', 'Maïs', 'Orge', 'Colza', 'Prairie', 'Tournesol', 'Betterave', 'Pomme', 'Légumes', 'Vigne']
  const irrigOptions = ["Pas d'irrigation", 'Pivot', 'Enrouleur', 'Rampe', 'Goutte à goutte', 'Aspersion']
  const textureOpts  = ['Limon', 'Limon argileux', 'Limon fin', 'Argile', 'Argile limoneuse', 'Sable limoneux']
  const envOptions   = ['Plein champ', 'Sous abri', 'Serre', 'Arboriculture', 'Maraîchage', 'Vignoble']

  const linkedNames = linkedSensorIds.map(id => {
    const s = allSensors.find(x => x.id === id)
    return s ? `${s.model} — ${s.serial}` : null
  }).filter(Boolean)

  return `
    <div class="m-detail-section">
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
          <span class="m-list-row-value">Plein champ</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-irrigation">
          <span class="m-list-row-label">Irrigation</span>
          <span class="m-list-row-value">${parcel.irrigation || '—'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${parcel.texture || '—'}</span>
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
export function initParcelDetail(parcel, linkedSensorIds = [], initialView = 'widgets') {
  const org = orgs.find(o => o.id === parcel.orgId)
  let activeView    = initialView
  let currentPeriod = '7d'
  let currentStep   = '1h'
  let isFav = false

  const city = org?.ville || ''
  const layer = pushDetail(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Parcelles</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${parcel.name}</div>
          ${(parcel.crop || city) ? `<div class="m-detail-subtitle">${[parcel.crop, city].filter(Boolean).join(' · ')}</div>` : ''}
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
    // Param rows
    layer.querySelectorAll('.m-list-row[data-action]').forEach(row => {
      row.addEventListener('click', () => showToast('Fonctionnalité à venir'))
    })
    // Widget menus
    layer.querySelectorAll('.m-widget-menu').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); showToast('Options widget') })
    })
    layer.querySelector('.m-add-widget-btn')?.addEventListener('click', openWidgetCatalog)
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
    const body = `
      <a class="m-sheet-link" data-a="widget"><i class="bi bi-grid-1x2"></i> Widget</a>
      <a class="m-sheet-link" data-a="irrigation"><i class="bi bi-droplet"></i> Irrigation</a>
      <a class="m-sheet-link" data-a="strategie-irrigation"><i class="bi bi-arrow-repeat"></i> Stratégie d'irrigation</a>
      <a class="m-sheet-link" data-a="capteur"><i class="bi bi-broadcast"></i> Capteur</a>
      <a class="m-sheet-link" data-a="alerte"><i class="bi bi-bell"></i> Alerte</a>
      <a class="m-sheet-link" data-a="integration" style="color:#8e8e93">
        <i class="bi bi-plug"></i> Intégration <span style="font-size:11px">(version web uniquement)</span>
      </a>
      <a class="m-sheet-link" data-a="note"><i class="bi bi-pencil"></i> Note</a>
      <a class="m-sheet-link" data-a="traitement"><i class="bi bi-eyedropper"></i> Traitement</a>`
    const el = document.createElement('div'); el.innerHTML = body
    const sh = showSheet({ title: 'Ajouter à la parcelle', body: el, doneLabel: 'Fermer', onDone: () => {} })
    el.querySelectorAll('[data-a]').forEach(btn => {
      btn.addEventListener('click', () => {
        const a = btn.dataset.a
        sh.classList.remove('m-sheet-overlay--show')
        setTimeout(() => { sh.remove(); showToast(a === 'integration' ? 'Disponible sur la version web' : 'Fonctionnalité à venir') }, 280)
      })
    })
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
          ${(parcel.crop || city) ? `<div class="m-detail-subtitle">${[parcel.crop, city].filter(Boolean).join(' · ')}</div>` : ''}
        </div>
        <div style="width:38px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`)

  layer.querySelector('.m-detail-back').addEventListener('click', popDetail)

  function renderJournal() {
    const el = layer.querySelector('#mjrn-content')
    const entries = getMJournal(parcel.id).slice().sort((a, b) => b.date.localeCompare(a.date))
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
                <button class="m-jrn-del" data-id="${e.id}"><i class="bi bi-trash3"></i></button>
              </div>
              ${e.texte ? `<div class="m-jrn-texte">${e.texte}</div>` : ''}
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
