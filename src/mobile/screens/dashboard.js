import { plots as allPlots }   from '../../data/plots.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { orgs as allOrgs }       from '../../data/orgs.js'
import { network }               from '../../data/network.js'
import { pushDetail, popDetail } from '../nav.js'
import { IRRIG_SEASON } from '../../data/irrigations.js'
import { flexLayer, checkIcon, buildSelectionHTML } from './irrigation.js'
import { applyStoredPlotPatches } from '../../data/store.js'
import { showParcelCreation, showSensorCreation } from './onboarding.js'
import { hasIrrelis, getIrrelisVal, irrelisColor, getIrrelisConfig } from './irrelis-detail.js'

const ORG_ID   = { admin: 100, adherent: 1, new: 41 }
const ORG_NAME = { admin: "Breiz'Agri Conseil", adherent: 'Ferme du Bocage', new: 'GAEC Jourdain' }

// ─── Persistence ──────────────────────────────────────────────────────────────
const DASH_KEY = 'weenat-m-dash'
function _loadDash() { try { return JSON.parse(localStorage.getItem(DASH_KEY)) || {} } catch { return {} } }
function _saveDash(patch) { try { localStorage.setItem(DASH_KEY, JSON.stringify({ ..._loadDash(), ...patch })) } catch {} }

// ─── Widget catalog ───────────────────────────────────────────────────────────
// fixed:true = toujours en fin de liste, pas de menu (infos réseau + support)
const CATALOG = [
  { id: 'bilan_hydrique', title: 'Irrigation',        icon: 'bi-droplet',              color: '#0172A4', active: true,  available: true,  fixed: false },
  { id: 'previsions',     title: 'Prévisions',         icon: 'bi-cloud-sun',            color: '#f5a623', active: true,  available: true,  fixed: false },
  { id: 'cumuls',         title: 'Cumuls préférés',    info: 'Mes cumuls préférés.<br><br>Ajoutez ici les valeurs des cumuls qui sont importants pour vous en ce moment afin de gagner du temps. Vous ouvrez l\'app, vous voyez ce qui intéresse. Vous fermez l\'app.',   gif: '',  icon: 'bi-bar-chart',  color: '#bf5af2', active: true,  available: true,  fixed: false },
  { id: 'temps_reel',     title: 'Mesures préférées',  info: 'Mes mesures préférées.<br><br>Ajoutez ici les indicateurs de vos parcelles ou capteurs qui vous intéressent en ce moment afin de gagner du temps. Vous ouvrez l\'app, vous voyez ce qui intéresse. Vous fermez l\'app.', gif: '',  icon: 'bi-activity',   color: '#ff9f0a', active: true,  available: true,  fixed: false },
  { id: 'traitements',    title: 'Traitements',        icon: 'bi-shield',               color: '#4ecdc4', active: true,  available: true,  fixed: false },
  { id: 'cultures',       title: 'Cultures',           icon: 'bi-flower1',              color: '#a2c4c9', active: true,  available: true,  fixed: false },
  { id: 'evenements',     title: 'Anomalies capteurs', icon: 'bi-exclamation-triangle', color: '#ff3b30', active: true,  available: true,  fixed: false },
  { id: 'notes',          title: 'Notes',              icon: 'bi-pencil-square',        color: '#636366', active: false, available: true,  fixed: false },
  { id: 'radar_pluie',   title: 'Radar de pluie',     icon: 'bi-cloud-rain-heavy',     color: '#0172A4', active: true,  available: true,  fixed: false },
  { id: 'irrelis',       title: 'Bilan Irré-LIS',     icon: 'bi-moisture',             color: '#0172A4', active: true,  available: true,  fixed: false },
  // Widgets fixes — toujours actifs, toujours en fin de liste
  { id: 'mon_reseau',     title: 'Infos Réseau',       icon: 'bi-diagram-3',            color: '#5b8dd9', active: true,  available: true,  fixed: true  },
  { id: 'support',        title: 'Besoin d\'aide ?',   icon: 'bi-question-circle',      color: '#30d158', active: true,  available: true,  fixed: true  },
]

// ─── UI helpers (shared pattern, TODO: extract to ui.js) ──────────────────────
function showWidgetInfoModal(title, text, gif) {
  const screen = document.getElementById('phone-screen')
  document.querySelector('.m-winfo-overlay')?.remove()
  const overlay = document.createElement('div')
  overlay.className = 'm-winfo-overlay'
  overlay.innerHTML = `
    <div class="m-winfo-modal">
      <div class="m-winfo-hd">
        <span class="m-winfo-title">${title}</span>
        <button class="m-winfo-close" type="button"><i class="bi bi-x"></i></button>
      </div>
      <div class="m-winfo-gif">
        ${gif
          ? `<img src="${gif}" alt="${title}">`
          : `<div class="m-winfo-gif-placeholder"><i class="bi bi-play-circle" style="font-size:28px;display:block;margin-bottom:6px"></i>GIF à venir</div>`}
      </div>
      <div class="m-winfo-body">${text}</div>
    </div>`
  overlay.querySelector('.m-winfo-close').addEventListener('click', () => overlay.remove())
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
  screen.appendChild(overlay)
}

function showToast(msg) {
  const screen = document.getElementById('phone-screen')
  document.querySelector('.m-toast')?.remove()
  const t = document.createElement('div')
  t.className = 'm-toast'
  t.textContent = msg
  screen.appendChild(t)
  requestAnimationFrame(() => t.classList.add('m-toast--show'))
  setTimeout(() => { t.classList.remove('m-toast--show'); setTimeout(() => t.remove(), 300) }, 2200)
}

function showSheet({ title, body, doneLabel = 'Fermer', onDone } = {}) {
  const screen = document.getElementById('phone-screen')
  document.querySelector('.m-sheet-overlay')?.remove()
  const overlay = document.createElement('div')
  overlay.className = 'm-sheet-overlay'
  overlay.innerHTML = `
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${title}</span>
        <button class="m-sheet-done">${doneLabel}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`
  overlay.querySelector('.m-sheet-body').appendChild(
    typeof body === 'string' ? Object.assign(document.createElement('div'), { innerHTML: body }) : body
  )
  screen.appendChild(overlay)
  requestAnimationFrame(() => overlay.classList.add('m-sheet-overlay--show'))
  const close = () => {
    overlay.classList.remove('m-sheet-overlay--show')
    setTimeout(() => overlay.remove(), 280)
  }
  overlay.querySelector('.m-sheet-cancel').addEventListener('click', close)
  overlay.querySelector('.m-sheet-done').addEventListener('click', () => { onDone?.(); close() })
  overlay.addEventListener('click', e => { if (e.target === overlay) close() })
  return overlay
}

// ─── Mock data generators ─────────────────────────────────────────────────────
const WEATHER_COND = [
  { icon: 'bi-sun-fill',         label: 'Ensoleillé', color: '#f5c842' },
  { icon: 'bi-cloud-sun-fill',   label: 'Nuageux',    color: '#8e8e93' },
  { icon: 'bi-cloud-fill',       label: 'Couvert',    color: '#636366' },
  { icon: 'bi-cloud-drizzle-fill', label: 'Averses',  color: '#5b8dd9' },
  { icon: 'bi-cloud-rain-fill',  label: 'Pluie',      color: '#2E75B6' },
]

function makeForecast() {
  return Array.from({length:14}, (_,d) => d).map(d => {
    const date = new Date(); date.setDate(date.getDate() + d)
    const w = WEATHER_COND[Math.floor(Math.random() * WEATHER_COND.length)]
    const rainy = w.label === 'Pluie' || w.label === 'Averses'
    const tMin = Math.round(8  + Math.random() * 8)
    const tMax = Math.round(16 + Math.random() * 14)
    // Generate hourly data for the dedicated day page
    const hours = Array.from({ length: 24 }, (_, h) => {
      const dayProg = Math.sin(Math.PI * (h - 6) / 12)  // peaks at 12h
      const temp = Math.round(tMin + (tMax - tMin) * Math.max(0, dayProg))
      const pluieH = rainy && (h >= 8 && h <= 16) && Math.random() > 0.6
        ? +(Math.random() * 3).toFixed(1) : 0
      return {
        h,
        label: `${String(h).padStart(2, '0')}h`,
        temp,
        pluie: pluieH,
        hum:   Math.round(85 - 40 * Math.max(0, dayProg)),
        vent:  Math.round(10 + Math.random() * 20),
        icon:  pluieH > 0 ? 'bi-cloud-rain-fill' : (h < 7 || h > 20) ? 'bi-moon-fill' : w.icon,
      }
    })
    return {
      dayLabel: d === 0 ? "Aujourd'hui" : d === 1 ? 'Demain'
        : date.toLocaleDateString('fr-FR', { weekday: 'long' }),
      dateStr: date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
      ...w,
      pluie:       rainy ? Math.round(2 + Math.random() * 18) : 0,
      etp:         +(1 + Math.random() * 5).toFixed(1),
      tMin,        tMinHeure: `0${Math.floor(4 + Math.random() * 4)}h`.slice(-3),
      tMax,        tMaxHeure: `${13 + Math.floor(Math.random() * 4)}h`,
      humMoy:      Math.round(45 + Math.random() * 45),
      ventMoy:     Math.round(10 + Math.random() * 25),
      ventRafales: Math.round(20 + Math.random() * 35),
      hours,
    }
  })
}

function makeBilan(plot) {
  // Same deterministic formula as web tableau-de-bord.js (plotAgroData)
  const s       = plot.id
  const rhu     = plot.reserveHydrique || 50
  const pluie7j = +((s * 2.3 + 7) % 32).toFixed(1)
  const etp7j   = +((s * 1.1 + 14) % 14 + 10).toFixed(1)
  const drain7j = +((s * 0.6 + 1) % 6).toFixed(1)
  const j0      = Math.round(rhu * ((s % 5 + 1) / 10))
  const j7      = Math.max(0, +(j0 + pluie7j - etp7j - drain7j).toFixed(0))
  const bilan   = j7 < j0 ? j0 - j7 : 0
  return { j0, j7, bilan }
}

// ─── Mesures & Cumuls — constantes partagées ─────────────────────────────────

const WF_MAX    = 4  // max mesures
const CUMUL_MAX = 5  // max cumuls
const WF_COLORS = ['#0172A4', '#ff8500', '#30d158', '#bf5af2']  // fallback (multi-série même métrique)
const TR_COLORS = {
  pluie: '#2E75B6', temperature: '#FBAF05', humidite: '#5B12A4',
  etp: '#7DBDD7', rayonnement: '#CBCB0B', temp_rosee: '#72B0D8',
  vent: '#616161', par: '#4CBB17', humectation: '#00887E',
  pothydr: '#A6C157', teneur: '#ED9A2C', temp_sol: '#795548',
  irrigation: '#FF8C00',
}

const TR_ALL_METRICS = {
  pluie: 'Pluie', temperature: 'Température', humidite: 'Humidité',
  etp: 'Évapotranspiration', rayonnement: 'Rayonnement solaire', temp_rosee: 'Temp. rosée',
  vent: 'Vent', par: 'Ray. PAR', humectation: 'Humectation foliaire',
  pothydr: 'Potentiel hydrique', teneur: 'Teneur en eau', temp_sol: 'Temp. sol',
  irrigation: 'Irrigation',
}

const TR_UNITS = {
  pluie: 'mm', temperature: '°C', humidite: '%', etp: 'mm', rayonnement: 'W/m²',
  temp_rosee: '°C', vent: 'km/h', par: 'µmol/m²/s', humectation: '%',
  pothydr: 'kPa', teneur: '%vol', temp_sol: '°C', irrigation: 'mm',
}

const TR_SENSOR_METRICS = {
  'P+': ['pluie','temperature','humidite'], 'PT': ['pluie','temperature'],
  'P': ['pluie'], 'SMV': ['pluie','temperature','humidite'], 'TH': ['temperature','humidite'],
  'W': ['vent'], 'PYRANO': ['rayonnement'], 'PAR': ['par'], 'LWS': ['humectation'],
  'CHP-15/30': ['pothydr','temp_sol'], 'CHP-30/60': ['pothydr','temp_sol'],
  'CHP-60/90': ['pothydr','temp_sol'], 'CAPA-30-3': ['teneur','temp_sol'],
  'CAPA-60-6': ['teneur','temp_sol'], 'T_MINI': ['temp_sol'], 'EC': ['teneur','temp_sol'],
}

// ─── Mesures ──────────────────────────────────────────────────────────────────

const MSR_PERIODS = [
  { id: '365d', label: '365 derniers jours' },
  { id: '30d',  label: '30 derniers jours' },
  { id: '7d',   label: '7 derniers jours' },
  { id: 'hier', label: 'Hier' },
  { id: '1d',   label: "Aujourd'hui" },
]

function msrStepOpts(period) {
  if (period === '1d' || period === 'hier')
    return [{ id: 'raw', label: 'Mesures brutes' }, { id: '1h', label: 'Heure' }, { id: '1d', label: 'Jour' }]
  if (period === '7d')
    return [{ id: '1h', label: 'Heure' }, { id: '1d', label: 'Jour' }]
  return [{ id: '1d', label: 'Jour' }, { id: '1w', label: 'Semaine' }, { id: '1mo', label: 'Mois' }]
}

function msrGetMetrics(subjectKey, sensors) {
  const ALWAYS = ['etp', 'rayonnement', 'temp_rosee']
  if (!subjectKey) return []
  if (subjectKey.startsWith('p-')) {
    const set = new Set(ALWAYS)
    const plotId = +subjectKey.slice(2)
    sensors.filter(s => s.parcelIds.includes(plotId))
      .forEach(s => (TR_SENSOR_METRICS[s.model] || []).forEach(m => set.add(m)))
    const plot = allPlots.find(p => p.id === plotId)
    if ((plot?.irrigation && plot.irrigation !== 'Non irrigué') || IRRIG_SEASON.some(i => i.plotId === plotId)) {
      set.add('irrigation')
    }
    return [...set].filter(id => id in TR_ALL_METRICS)
  }
  const s = sensors.find(x => x.id === +subjectKey.slice(2))
  return s ? (TR_SENSOR_METRICS[s.model] || []) : []
}

function msrXLabels(period, step) {
  if (period === '1d' || period === 'hier') return ['0h', '6h', '12h', '18h', '24h']
  if (step === '1h')  return ['J-7','J-5','J-3','J-1','Auj.']
  if (step === '1d')  return period === '365d' ? ['Jan','Avr','Jul','Oct','Déc']
                           : period === '30d'  ? ['J-30','J-22','J-14','J-7','Auj.']
                           : ['J-7','J-5','J-3','J-1','Auj.']
  if (step === '1w')  return period === '365d' ? ['S-52','S-38','S-26','S-13','Auj.'] : ['S-4','S-3','S-2','S-1','Auj.']
  if (step === '1mo') return period === '365d'
    ? ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc']
    : ['M-4','M-3','M-2','M-1','Auj.']
  return []
}

let mesuresList = []

let cumulsList = []

// Apply persisted state
;(() => {
  const s = _loadDash()
  if (s.catalog) {
    const order = s.catalog.map(c => c.id)
    CATALOG.sort((a, b) => {
      const ai = order.indexOf(a.id), bi = order.indexOf(b.id)
      return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi)
    })
    s.catalog.forEach(c => { const w = CATALOG.find(x => x.id === c.id); if (w) w.active = c.active })
  }
  if (s.mesuresList) mesuresList = s.mesuresList
  if (s.cumulsList)  cumulsList  = s.cumulsList
})()

// Hooks vers les widgets du tableau de bord, branchés par initDashboardScreen()
let _refreshMesuresWidget = null
let _refreshCumulsWidget  = null

// Appelé depuis parcel-detail.js / sensor-detail.js pour ajouter une mesure
// préférée et rafraîchir le widget si le tableau de bord est déjà rendu.
export function addMesureFavorite(entry) {
  if (mesuresList.length >= WF_MAX) return 'max'
  if (mesuresList.some(x => x.subjectKey === entry.subjectKey && x.metricId === entry.metricId && x.period === entry.period && x.step === entry.step)) return 'dup'
  mesuresList.push(entry)
  _saveDash({ mesuresList })
  _refreshMesuresWidget?.()
  return 'ok'
}

// Idem pour les cumuls préférés
export function addCumulFavorite(entry) {
  if (cumulsList.length >= CUMUL_MAX) return 'max'
  cumulsList.push(entry)
  _saveDash({ cumulsList })
  _refreshCumulsWidget?.()
  return 'ok'
}

function trMockSeries(subjectKey, metricId, count) {
  if (metricId === 'irrigation' && subjectKey.startsWith('p-')) {
    const plotId = parseInt(subjectKey.slice(2), 10)
    const now = Date.now()
    const bucketMs = 24 * 3600000
    const startMs = now - count * bucketMs
    const vals = new Array(count).fill(0)
    IRRIG_SEASON.filter(i => i.plotId === plotId && i.real).forEach(i => {
      const t = new Date(i.iso).getTime()
      if (t < startMs || t > now) return
      const idx = Math.min(count - 1, Math.floor((t - startMs) / bucketMs))
      vals[idx] += i.mm || 0
    })
    return vals
  }
  const seed = [...(subjectKey + metricId)].reduce((s, c) => s + c.charCodeAt(0), 1)
  const r    = i => (Math.sin(seed * 0.07 + i * 0.5) + Math.sin(seed * 0.03 + i * 1.3)) / 2 + 0.5
  const cfg  = {
    pluie:       { base: 0, amp: 18, sparse: true }, temperature: { base: 10, amp: 14 },
    humidite:    { base: 50, amp: 38 },              etp:         { base: 1, amp: 4 },
    rayonnement: { base: 100, amp: 550 },            temp_rosee:  { base: 4, amp: 9 },
    vent:        { base: 4, amp: 22 },               par:         { base: 100, amp: 1400 },
    humectation: { base: 0, amp: 100, sparse: true }, pothydr:    { base: 20, amp: 130 },
    teneur:      { base: 18, amp: 18 },              temp_sol:    { base: 7, amp: 9 },
  }[metricId] || { base: 40, amp: 40 }
  return Array.from({ length: count }, (_, i) =>
    (cfg.sparse && r(i * 3.7) > 0.28) ? 0 : Math.max(0, cfg.base + cfg.amp * r(i * 0.28 + 1.2))
  )
}

const MSR_BAR_METRICS = new Set(['pluie', 'etp', 'irrigation'])

function msrCardHtml(m, idx) {
  const count = (m.period === '365d' && m.step === '1mo') ? 12
    : { '1d': 24, 'hier': 24, '7d': 42, '30d': 60, '365d': 90 }[m.period] || 42
  const data  = trMockSeries(m.subjectKey, m.metricId, count)
  const W = 270, H = 100, PL = 28, PB = 14
  const yMax = Math.max(...data, 1)
  const isBar = MSR_BAR_METRICS.has(m.metricId)
  let chartEl
  let grid = ''
  for (let i = 0; i <= 2; i++) {
    const y = Math.round(i / 2 * (H - PB - 4) + 4)
    grid += `<line x1="${PL}" y1="${y}" x2="${PL+W}" y2="${y}" stroke="#E8E6E0" stroke-width=".5"/>`
    grid += `<text x="${PL-3}" y="${y+3}" text-anchor="end" font-size="8" fill="#636366">${+(yMax*(1-i/2)).toFixed(yMax<5?1:0)}</text>`
  }
  const xlbls  = msrXLabels(m.period, m.step)
  const xTicks = xlbls.map((lbl, i) =>
    `<text x="${PL + Math.round(i/(xlbls.length-1)*W)}" y="${H+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${lbl}</text>`
  ).join('')
  const serialData = JSON.stringify(data.map(v => +v.toFixed(2)))
  const resolvedColor = TR_COLORS[m.metricId] || m.color
  const barColor = m.metricId === 'pluie' ? '#2E75B6' : resolvedColor

  if (isBar) {
    const bw = Math.max(1, W / count * 0.7)
    const bars = data.map((v, i) => {
      const bh = Math.round(v / yMax * (H - PB - 4))
      const bx = PL + Math.round(i / (count - 1) * W) - bw / 2
      const by = H - PB - bh
      return `<rect x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="${barColor}" opacity=".85" rx="1"/>`
    }).join('')
    chartEl = `<svg viewBox="0 0 ${PL+W} ${H+6}" style="width:100%;display:block;overflow:visible">${grid}${bars}${xTicks}</svg>`
  } else {
    const pts  = data.map((v, i) =>
      `${PL + Math.round(i / (count - 1) * W)},${H - PB - Math.round(v / yMax * (H - PB - 4))}`
    ).join(' ')
    chartEl = `<svg viewBox="0 0 ${PL+W} ${H+6}" style="width:100%;display:block;overflow:visible">
      ${grid}
      <polyline points="${pts}" fill="none" stroke="${resolvedColor}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${H}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${xTicks}
    </svg>`
  }

  const sensorIdForLink = m.subjectKey?.startsWith('s-') ? m.subjectKey.slice(2) : null
  const parcelIdForLink = m.subjectKey?.startsWith('p-') ? m.subjectKey.slice(2) : null
  const viewDataBtn = (sensorIdForLink || parcelIdForLink)
    ? `<button class="m-wf-view-data m-widget-details-link" ${sensorIdForLink ? `data-sensor-id="${sensorIdForLink}"` : `data-parcel-id="${parcelIdForLink}"`} data-metric-id="${m.metricId}" data-period="${m.period}" data-step="${m.step}">Voir détails →</button>`
    : ''
  return `
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${m.metricId==='pluie'?barColor:resolvedColor}">${m.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${m.subjectLabel}</div>
          <div class="m-wf-card-sub">${m.periodLabel} · ${m.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${idx}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${m.unit}" data-series='${serialData}' style="position:relative;margin-top:4px">
        ${chartEl}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${viewDataBtn}
    </div>`
}

function buildMesures(plots, sensors) {
  const atMax = mesuresList.length >= WF_MAX
  const plotOpts   = [...plots].sort((a,b)=>a.name.localeCompare(b.name,'fr')).map(p => `<option value="p-${p.id}">${plotOptLabel(p)}</option>`).join('')
  const sensorOpts = sensors.filter(s => s.parcelIds.length > 0).map(s =>
    `<option value="s-${s.id}">${sensorOptLabel(s, plots)}</option>`
  ).join('')
  const defSteps = msrStepOpts('7d')
  const listHtml = mesuresList.length
    ? mesuresList.map(msrCardHtml).join('')
    : `<div class="m-wf-empty">Ajoutez ici les mesures que vous souhaitez consulter très régulièrement</div>`
  return `
    <div id="msr-list">${listHtml}</div>
    <div class="m-list-section-header" style="margin-top:${mesuresList.length ? '16px' : '0'}"></div>
    ${atMax ? `
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${WF_MAX}/${WF_MAX})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez une mesure pour en ajouter une nouvelle.</div>
      </div>
    </div>` : `
    <div class="m-wf-form">
      <select class="m-wf-sel" id="msr-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${plotOpts}</optgroup>
        ${sensorOpts ? `<optgroup label="Capteurs">${sensorOpts}</optgroup>` : ''}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period">
          ${MSR_PERIODS.map(p => `<option value="${p.id}"${p.id==='7d'?' selected':''}>${p.label}</option>`).join('')}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${defSteps.map(s => `<option value="${s.id}">${s.label}</option>`).join('')}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Ajouter la mesure</button>
    </div>`}`
}

// ─── Widget HTML builders ─────────────────────────────────────────────────────
const BH_PAGE = 8

function makePlanif7j(plot) {
  const today = new Date().toISOString().split('T')[0]
  const end7  = new Date(); end7.setDate(end7.getDate() + 7)
  const end7s = end7.toISOString().split('T')[0]
  return IRRIG_SEASON
    .filter(i => i.iso > today && i.iso <= end7s && i.plotId === plot.id)
    .reduce((s, i) => s + i.mm, 0)
}

function advisorMm(p) { return 25 + ((p.id * 7) % 20) }

const BH_LIMIT = 9

function buildIrrelis(plots) {
  const irrelisPlots = plots.filter(p => hasIrrelis(p))
  if (!irrelisPlots.length) {
    return `<div class="m-widget-empty"><i class="bi bi-droplet" style="color:#0172A4;font-size:28px"></i><p>Aucune parcelle avec le service Irré-LIS</p></div>`
  }

  const rows = irrelisPlots.map(p => {
    const cfg = getIrrelisConfig(p.id)
    const val = Math.round(getIrrelisVal(p, "Aujourd'hui"))
    const col = irrelisColor(val, cfg.rfu, cfg.ru)
    const pct = Math.round(val / cfg.ru * 100)
    return `
      <div class="m-il-row" data-il-plot="${p.id}" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:.5px solid rgba(0,0,0,.07);cursor:pointer">
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name}</div>
          <div style="font-size:11px;color:#8e8e93">${cfg.culture} · semis ${new Date(cfg.semisDate+'T00:00:00').toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:17px;font-weight:700;color:${col}">${val} <span style="font-size:11px;font-weight:400">mm</span></div>
          <div style="font-size:10px;color:#8e8e93">${pct}% RU</div>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px;flex-shrink:0"></i>
      </div>`
  }).join('')

  const legend = `<div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap">
    <span style="font-size:10px;color:#24B066;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#24B066"></span>RFU</span>
    <span style="font-size:10px;color:#E8A020;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#E8A020"></span>Bas de RFU</span>
    <span style="font-size:10px;color:#E05252;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#E05252"></span>Réservoir de survie</span>
    <span style="font-size:10px;color:#007aff;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#007aff"></span>Saturation</span>
  </div>`

  return `
    <div style="font-size:11px;color:#8e8e93;margin-bottom:2px">Réserve en eau — Aujourd'hui</div>
    ${rows}
    ${legend}`
}

function buildBilanHydrique(plots, expanded = false, sensorlessEnabled = (_loadDash().sensorlessEnabled ?? true), advisorMode = (_loadDash().irrigAdvisor ?? false)) {
  if (!plots.length) {
    return `<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>`
  }

  const isAdvisorPlot = p => p.id % 3 === 2

  const standalones     = plots.slice()
  const sortByBilanDesc = (a, b) => makeBilan(b).bilan - makeBilan(a).bilan
  const ordered         = standalones.slice().sort(sortByBilanDesc)
  const visible         = expanded ? ordered : ordered.slice(0, BH_LIMIT)
  const visibleIds      = new Set(visible.map(p => p.id))
  const remaining       = ordered.length - visible.length

  const makePluie7j = p => Math.round(((p.id * 2.3 + 7) % 32) * 10) / 10
  const makeEtp7j   = p => Math.round(((p.id * 1.1 + 14) % 14 + 10) * 10) / 10

  const thStyle = 'font-size:11px;font-weight:700;color:#8e8e93;text-align:right;padding-bottom:6px;text-transform:uppercase;letter-spacing:.03em;line-height:1.3'
  const unitSub = txt => `<span style="display:block;font-size:9px;font-weight:400;text-transform:none;color:#b0aead;letter-spacing:0">${txt}</span>`
  const tdNo = 'border-top:none'

  const makeRow = (p, idx) => {
    const planif  = makePlanif7j(p)
    const pluie   = makePluie7j(p)
    const etp     = makeEtp7j(p)
    const sep     = idx === 0 ? 'border-top:none' : 'border-top:.5px solid rgba(0,0,0,.18);padding-top:8px;margin-top:2px'
    const nameBtn = `<button class="m-bh-th-n m-bh-plot-link" data-plot-id="${p.id}" style="grid-column:1/-1;white-space:normal;overflow:visible;text-overflow:unset;text-align:left;${sep}">${p.name}</button>`

    if (advisorMode) {
      const hasAdv  = isAdvisorPlot(p)
      const recoMm  = hasAdv ? advisorMm(p) : null
      const recoCol = recoMm !== null ? (planif >= recoMm ? '#24B066' : '#E05252') : null
      const recoHtml = recoMm !== null
        ? `<span style="color:${recoCol};font-weight:700">${recoMm}</span>`
        : `<span style="color:#c7c7cc">—</span>`
      return `
        ${nameBtn}
        <div class="m-bh-td" style="${tdNo}">${pluie}</div>
        <div class="m-bh-td" style="${tdNo}">${etp}</div>
        <div class="m-bh-td m-bh-td--planif" style="${tdNo}">${planif > 0 ? planif : '—'}</div>
        <div class="m-bh-td" style="${tdNo}">${recoHtml}</div>`
    }

    return `
      ${nameBtn}
      <div class="m-bh-td" style="${tdNo}">${pluie}</div>
      <div class="m-bh-td" style="${tdNo}">${etp}</div>
      <div class="m-bh-td m-bh-td--planif" style="${tdNo}">${planif > 0 ? planif : '—'}</div>`
  }

  const visRows = ordered.filter(p => visibleIds.has(p.id)).map((p, i) => makeRow(p, i)).join('')

  const cols = advisorMode ? '1fr 1fr 1.5fr 1fr' : '1fr 1fr 1.5fr'

  const headers = advisorMode
    ? `<div style="${thStyle}">Pluie${unitSub('J+7 mm')}</div>
       <div style="${thStyle}">ETP${unitSub('J+7 mm')}</div>
       <div style="${thStyle}">Irr. planif.${unitSub('J+7 mm')}</div>
       <div style="${thStyle}">Irr. reco.${unitSub('J+7 mm')}</div>`
    : `<div style="${thStyle}">Pluie${unitSub('J+7 mm')}</div>
       <div style="${thStyle}">ETP${unitSub('J+7 mm')}</div>
       <div style="${thStyle}">Irr. planif.${unitSub('J+7 mm')}</div>`

  const advisorLegend = advisorMode
    ? `<div style="font-size:11px;color:#8e8e93;margin-bottom:6px">
         <i class="bi bi-info-circle" style="color:#ff9f0a"></i>
         Reco. affiché uniquement pour les parcelles avec Irrigation Advisor actif
       </div>`
    : ''

  const expandBtn = ordered.length > BH_LIMIT
    ? `<button class="m-bh-expand" id="bh-expand" data-expanded="${expanded}">
        ${expanded
          ? 'Réduire <i class="bi bi-chevron-up"></i>'
          : `Afficher les ${remaining} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`
    : ''

  return `
    <label style="display:flex;align-items:center;gap:8px;padding:4px 0 8px;cursor:pointer;font-size:13px;color:#1c1c1e">
      <input type="checkbox" id="bh-advisor-cb" ${advisorMode ? 'checked' : ''} style="width:16px;height:16px;accent-color:#ff9f0a">
      Irrigation Advisor${advisorMode ? ' <span style="font-size:11px;color:#ff9f0a;font-weight:600">✦</span>' : ''}
    </label>
    ${advisorLegend}
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${cols};gap:0 6px">
        ${headers}
        ${visRows}
      </div>
    </div>
    ${expandBtn}
    <div class="m-bh-actions">
      <button class="m-bh-action" id="bh-btn-irrigation">
        <i class="bi bi-droplet-fill"></i> Saisir une irrigation
      </button>
      <button class="m-bh-action m-bh-action--sec" id="bh-btn-strategie">
        <i class="bi bi-arrow-repeat"></i> Saisir une saison d'irrigation
      </button>
      <button class="m-bh-action m-bh-action--cal" id="bh-btn-calendar">
        <i class="bi bi-calendar3"></i> Voir les irrigations
      </button>
    </div>`
}

const trunc = (str, max = 40) => str.length > max ? str.slice(0, max - 1) + '…' : str

function buildPrevisions(plots, sensors, forecast, role) {
  const orgById = Object.fromEntries(allOrgs.map(o => [o.id, o]))
  const plotOpts = [...plots].sort((a,b)=>a.name.localeCompare(b.name,'fr')).map(p =>
    `<option value="p-${p.id}">${trunc(plotOptLabel(p))}</option>`
  ).join('')
  const sensorOpts = sensors.map(s =>
    `<option value="s-${s.id}">${trunc(sensorOptLabel(s, plots))}</option>`
  ).join('')
  const opts = `
    <optgroup label="Parcelles">${plotOpts}</optgroup>
    ${sensorOpts ? `<optgroup label="Capteurs">${sensorOpts}</optgroup>` : ''}`

  const makeCard = (d, i) => {
    const title = `${d.dayLabel.charAt(0).toUpperCase() + d.dayLabel.slice(1)} · ${d.dateStr}`
    return `
    <div class="m-prev-card" data-day="${i}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${d.icon}" style="color:${d.color};font-size:26px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${title}</span>
          <span class="m-prev-card-cond">${d.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-tbl">
        <div class="m-prev-tbl-cell">
          <i class="bi bi-cloud-rain" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${d.pluie}</span>
          <span class="m-prev-tbl-unit">mm</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-thermometer-half" style="color:#E05252"></i>
          <span class="m-prev-tbl-val">${d.tMin}–${d.tMax}</span>
          <span class="m-prev-tbl-unit">°C</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-droplet" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${d.humMoy}</span>
          <span class="m-prev-tbl-unit">%</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-wind" style="color:#636366"></i>
          <span class="m-prev-tbl-val">${d.ventMoy}/<em>${d.ventRafales}</em></span>
          <span class="m-prev-tbl-unit">km/h</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-moisture" style="color:#24B066"></i>
          <span class="m-prev-tbl-val">${d.etp}</span>
          <span class="m-prev-tbl-unit">ETP</span>
        </div>
      </div>
    </div>`
  }

  const visible = forecast.slice(0, 3).map(makeCard).join('')
  const extra   = forecast.slice(3).map(makeCard).join('')

  const addrOpt = `<option value="addr" selected>Adresse de mon exploitation</option>`
  return `
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${addrOpt}${opts}</select>
    <div class="m-prev-cards">
      ${visible}
      <div class="m-prev-extra" style="display:none">${extra}</div>
      <button class="m-prev-expand-btn">Voir les ${forecast.length - 3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`
}

const CUMULS_METRICS = [
  { id: 'etp',        label: 'Évapotranspiration',     unit: 'mm',  base: 20,  amp: 60,   needsModels: null },
  { id: 'rayo',       label: 'Rayonnement solaire',    unit: 'MJ',  base: 8,   amp: 20,   needsModels: null },
  { id: 'pluie',      label: 'Cumul de pluie',         unit: 'mm',  base: 45,  amp: 80,   needsModels: ['P+','PT','P','SMV'] },
  { id: 'dj',         label: 'Degrés-jours',           unit: 'DJ',  base: 120, amp: 300,  needsModels: ['P+','PT','SMV','TH'] },
  { id: 'hf',         label: 'Heures de froid',        unit: 'h',   base: 30,  amp: 120,  needsModels: ['P+','PT','SMV','TH'] },
  { id: 'humec',      label: 'Humectation foliaire',   unit: 'h',   base: 10,  amp: 40,   needsModels: ['LWS'] },
]
// Forme de la courbe cumulative fullscreen par métrique (cf. initCumulFullscreen) — peu de
// cumuls progressent vraiment de façon linéaire dans la réalité.
const CUMUL_GROWTH_SHAPE = { etp: 'evapo', rayo: 'solar', pluie: 'bursty', dj: 'temperature', hf: 'cold', humec: 'bursty' }

// Set of all sensor models that qualify for at least one cumul
const CUMUL_QUALIFYING_MODELS = new Set(
  CUMULS_METRICS.flatMap(m => m.needsModels || [])
)

function getAvailableMetrics(subjectVal) {
  if (!subjectVal) return CUMULS_METRICS
  if (subjectVal.startsWith('s-')) {
    const sensor = allSensors.find(s => s.id === +subjectVal.slice(2))
    if (!sensor) return CUMULS_METRICS
    return CUMULS_METRICS.filter(m => m.needsModels === null || m.needsModels.includes(sensor.model))
  }
  const linkedModels = new Set(allSensors.filter(s => s.parcelIds.includes(+subjectVal.slice(2))).map(s => s.model))
  return CUMULS_METRICS.filter(m => m.needsModels === null || m.needsModels.some(mod => linkedModels.has(mod)))
}

const CUMUL_ICONS = {
  etp:        { icon: 'bi-moisture',        color: '#7DBDD7' },
  rayo:       { icon: 'bi-sun-fill',        color: '#CBCB0B' },
  pluie:      { icon: 'bi-droplet-fill',    color: '#2E75B6' },
  dj:         { icon: 'bi-thermometer-sun', color: '#FBAF05' },
  hf:         { icon: 'bi-thermometer-low', color: '#0B3A64' },
  humec:      { icon: 'bi-droplet-half',    color: '#00887E' },
}

function renderCumulCards() {
  if (!cumulsList.length) {
    return `<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>`
  }
  return cumulsList.map((c, idx) => {
    const thresholdText = c.thresholds
      ? c.metricId === 'hf' ? ` · seuil < ${c.thresholds.cold}°C`
      : c.metricId === 'dj' ? ` · ${c.thresholds.low}–${c.thresholds.high}°C`
      : '' : ''
    return `<div class="m-cumuls-saved-card" style="position:relative">
      <button class="m-cumuls-del" data-cidx="${idx}" type="button" title="Supprimer">×</button>
      <div class="m-cumuls-saved-row1">
        <span class="m-cumuls-saved-metric"><i class="bi ${c.icon}" style="color:${c.color}"></i> ${c.metricLabel}</span>
        <span class="m-cumuls-saved-val">${c.value} <span class="m-cumuls-saved-unit">${c.unit}</span></span>
      </div>
      <div class="m-cumuls-saved-row2">${c.subjectLabel}</div>
      <div class="m-cumuls-saved-row3">
        <span>depuis le ${c.fromDate}${thresholdText}</span>
        <button class="m-cumuls-edit" data-cidx="${idx}" type="button" title="Modifier"><i class="bi bi-pencil"></i> Modifier</button>
      </div>
      <button class="m-cumuls-details m-widget-details-link" data-cidx="${idx}">Voir détails →</button>
    </div>`
  }).join('')
}

function computeCumul(subjectVal, fromDate, metricId) {
  if (!subjectVal || !fromDate) return null
  const m   = CUMULS_METRICS.find(x => x.id === metricId) || CUMULS_METRICS[0]
  const days = Math.max(1, Math.round((Date.now() - new Date(fromDate)) / 86400000))
  const seed = subjectVal.split('').reduce((a, c) => a + c.charCodeAt(0), 0) + days
  return +(m.base + (seed % (m.amp * 10)) / 10).toFixed(1)
}

function buildCumuls(plots, sensors) {
  const atMax      = cumulsList.length >= CUMUL_MAX
  const defaultFrom = `${new Date().getFullYear()}-01-01`

  const qualSensors = sensors.filter(s => s.parcelIds.length > 0 && CUMUL_QUALIFYING_MODELS.has(s.model))

  const plotOpts   = [...plots].sort((a,b)=>a.name.localeCompare(b.name,'fr')).map(p => `<option value="p-${p.id}">${plotOptLabel(p)}</option>`).join('')
  const sensorOpts = qualSensors.map(s =>
    `<option value="s-${s.id}">${sensorOptLabel(s, plots)}</option>`
  ).join('')

  const listHtml = cumulsList.length
    ? renderCumulCards()
    : `<div class="m-wf-empty">Ajoutez ici les cumuls que vous souhaitez consulter très régulièrement</div>`

  return `
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${listHtml}</div>
    <div class="m-list-section-header" style="margin-top:${cumulsList.length ? '16px' : '0'}"></div>
    ${atMax ? `
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${CUMUL_MAX}/${CUMUL_MAX})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez un cumul pour en ajouter un nouveau.</div>
      </div>
    </div>` : `
    <div class="m-wf-form">
      <select class="m-wf-sel" id="cumuls-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${plotOpts}</optgroup>
        ${sensorOpts ? `<optgroup label="Capteurs">${sensorOpts}</optgroup>` : ''}
      </select>
      <select class="m-wf-sel" id="cumuls-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div id="cumuls-thresholds"></div>
      <div class="m-wf-row">
        <div class="m-wf-field">
          <span class="m-wf-label">Depuis le</span>
          <input type="date" class="m-wf-date" id="cumuls-from" value="${defaultFrom}">
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Ajouter le cumul</button>
    </div>`}`
}

// ─── Traitements phytosanitaires ─────────────────────────────────────────────

function plotTreatmentData(plot) {
  const s   = plot.id
  const now = new Date()
  let daysAhead, winHour
  if (s % 5 === 3) { daysAhead = 0; winHour = (now.getHours() + 2 + (s % 3) * 3) % 24 }
  else             { daysAhead = (s * 2 + 1) % 6 + 1; winHour = 6 + (s % 5) * 2 }
  const winDur  = 2 + (s % 3)
  const winDate = new Date(now); winDate.setDate(winDate.getDate() + daysAhead)
  const winDateStr = daysAhead === 0 ? "Aujourd'hui"
    : winDate.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })
  const minutesFromNow = daysAhead * 1440 + winHour * 60 - (now.getHours() * 60 + now.getMinutes())
  return { winDateStr, winHour, winDur, minutesFromNow }
}

const TRAIT_GREEN = '#1a9e40'

function buildTraitements(plots) {
  const withData = plots.filter(p => p.crop).map(p => ({ p, d: plotTreatmentData(p) }))
  const upcoming = withData
    .filter(({ d }) => d.minutesFromNow >= 0 && d.minutesFromNow <= 1440)
    .sort((a, b) => a.d.minutesFromNow - b.d.minutesFromNow)
  if (!upcoming.length) return `<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>`
  const rows = upcoming.slice(0, 10).map(({ p, d }) => {
    const hh    = String(d.winHour).padStart(2, '0')
    const heEnd = String((d.winHour + d.winDur) % 24).padStart(2, '0')
    return `
      <div class="m-trait-card" data-plot-id="${p.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${p.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${TRAIT_GREEN};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
            <i class="bi bi-check2-circle" style="font-size:12px"></i>
            ${d.winDateStr} · ${hh}h–${heEnd}h
          </div>
        </div>
      </div>`
  }).join('')
  return `
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${rows}</div>
    <div class="m-bh-actions" style="--trait-green:#30d158">
      <button class="m-bh-action" id="trait-btn-saisir" style="background:#1a9e40;border-color:#1a9e40">
        <i class="bi bi-eyedropper-fill"></i> Saisir un traitement
      </button>
      <button class="m-bh-action m-bh-action--cal" id="trait-btn-voir">
        <i class="bi bi-calendar3"></i> Voir les traitements
      </button>
    </div>`
}

// ─── Traitement saisie ────────────────────────────────────────────────────────

const TRAIT_KEY = 'weenat-m-traitements'
function _loadTraitements() { try { return JSON.parse(localStorage.getItem(TRAIT_KEY)) || [] } catch { return [] } }
function _saveTraitements(list) { localStorage.setItem(TRAIT_KEY, JSON.stringify(list)) }

function openTraitementSaisie(plots, showToastFn) {
  let selectedIds = new Set()
  const groups    = []
  const today     = new Date().toISOString().split('T')[0]

  function selHTML() { return buildSelectionHTML(groups, plots, selectedIds) }

  function renderBar(layer) {
    const n   = selectedIds.size
    const sum = layer.querySelector('.irr-summary')
    const btn = layer.querySelector('.irr-save-btn')
    if (!sum || !btn) return
    sum.textContent = n === 0 ? '' : `${n} parcelle${n > 1 ? 's' : ''}`
    btn.disabled = n === 0
  }

  function bindSel(layer) {
    layer.querySelector('#irr-sel-all')?.addEventListener('click', () => {
      const allSelected = plots.every(p => selectedIds.has(p.id))
      plots.forEach(p => allSelected ? selectedIds.delete(p.id) : selectedIds.add(p.id))
      layer.querySelector('#trait-sel-list').innerHTML = selHTML()
      bindSel(layer); renderBar(layer)
    })
    layer.querySelectorAll('.irr-group-card').forEach(el => {
      el.addEventListener('click', () => {
        const ids = el.dataset.gids.split(',').map(Number)
        const all = ids.every(id => selectedIds.has(id))
        ids.forEach(id => all ? selectedIds.delete(id) : selectedIds.add(id))
        layer.querySelector('#trait-sel-list').innerHTML = selHTML()
        bindSel(layer); renderBar(layer)
      })
    })
    layer.querySelectorAll('.irr-plot-row').forEach(el => {
      el.addEventListener('click', () => {
        const id = +el.dataset.pid
        selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id)
        layer.querySelector('#trait-sel-list').innerHTML = selHTML()
        bindSel(layer); renderBar(layer)
      })
    })
  }

  const layer = flexLayer(pushDetail(`
    <div class="irr-detail-header" style="--irr-accent:#30d158">
      <div class="irr-header-row">
        <button class="irr-back" id="trait-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saisir un traitement</span>
        <div style="width:60px"></div>
      </div>
      <div class="irr-fixed-inputs">
        <div class="irr-fields-row" style="margin-bottom:0">
          <div class="irr-field-card">
            <div class="irr-field-lbl">Date</div>
            <input type="date" class="irr-date-input" id="trait-date" value="${today}">
          </div>
          <div class="irr-field-card">
            <div class="irr-field-lbl">Produit</div>
            <input type="text" class="irr-qty-input" id="trait-produit" placeholder="Ex : Prosaro" style="font-size:13px">
          </div>
        </div>
        <div class="irr-fields-row" style="margin-top:6px;margin-bottom:0">
          <div class="irr-field-card">
            <div class="irr-field-lbl">Dose</div>
            <input type="text" class="irr-qty-input" id="trait-dose" placeholder="Ex : 1 L/ha" style="font-size:13px">
          </div>
        </div>
      </div>
    </div>
    <div class="irr-scroll-body">
      <div id="trait-sel-list">${selHTML()}</div>
    </div>
    <div class="irr-bottom-bar" style="border-top-color:rgba(48,209,88,.2)">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled style="background:#1a9e40;border-color:#1a9e40">Enregistrer</button>
    </div>
  `))

  bindSel(layer); renderBar(layer)
  layer.querySelector('#trait-back').addEventListener('click', popDetail)
  layer.querySelector('.irr-save-btn').addEventListener('click', () => {
    const date    = layer.querySelector('#trait-date').value || today
    const produit = layer.querySelector('#trait-produit').value.trim() || '—'
    const dose    = layer.querySelector('#trait-dose').value.trim() || '—'
    const list    = _loadTraitements()
    list.unshift({ id: Date.now(), date, produit, dose, plotIds: [...selectedIds] })
    _saveTraitements(list)
    popDetail()
    showToastFn('Traitement enregistré')
  })
}

function openTraitementsCalendar(plots, role, showToastFn) {
  const orgId = role === 'adherent' ? ORG_ID.adherent : null
  const filterablePlots = orgId !== null ? allPlots.filter(p => p.orgId === orgId) : allPlots
  let filterPlotId = null   // null = toutes

  const layer = pushDetail(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Tableau de bord</span></button>
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-right:44px">Traitements</span>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:10px 16px 4px">
        <select id="trait-filter" class="m-prev-select" style="margin-bottom:0">
          <option value="">Toutes les parcelles</option>
          ${filterablePlots.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
        </select>
      </div>
      <div id="trait-cal-content" style="padding:6px 16px 16px"></div>
    </div>`)

  layer.querySelector('.m-detail-back').addEventListener('click', popDetail)

  const fmtDate = iso => { const [y, m, d] = iso.split('-'); return `${d}/${m}/${y}` }

  function renderList() {
    const el   = layer.querySelector('#trait-cal-content')
    let list = _loadTraitements()
    if (filterPlotId !== null) list = list.filter(t => (t.plotIds || []).includes(filterPlotId))
    if (!list.length) {
      el.innerHTML = `<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>`
      return
    }
    el.innerHTML = list.map(t => {
      const pNames = (t.plotIds || []).map(id => plots.find(p => p.id === id)?.name).filter(Boolean)
      return `
        <div class="m-trait-cal-card" data-id="${t.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${fmtDate(t.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${pNames.length} parcelle${pNames.length > 1 ? 's' : ''}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${t.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${t.dose}</div>
          ${pNames.length ? `<div style="font-size:11px;color:#8e8e93;margin-top:6px">${pNames.join(', ')}</div>` : ''}
        </div>`
    }).join('')

    el.querySelectorAll('.m-trait-cal-card').forEach(card => {
      card.addEventListener('click', () => {
        const tid = +card.dataset.id
        const all = _loadTraitements()
        const t   = all.find(x => x.id === tid); if (!t) return
        const pNames = (t.plotIds || []).map(id => plots.find(p => p.id === id)?.name).filter(Boolean)
        const body = document.createElement('div')
        body.innerHTML = `
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${fmtDate(t.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${t.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${t.dose}</div>
            ${pNames.length ? `<div style="font-size:12px;color:#8e8e93">${pNames.join(', ')}</div>` : ''}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`
        const sheet = showSheet({ title: 'Traitement', body, doneLabel: 'Fermer', onDone: () => {} })

        body.querySelector('#tcal-del').addEventListener('click', () => {
          const updated = _loadTraitements().filter(x => x.id !== tid)
          _saveTraitements(updated)
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => { sheet.remove(); renderList() }, 280)
          showToastFn('Traitement supprimé')
        })

        body.querySelector('#tcal-edit').addEventListener('click', () => {
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => sheet.remove(), 280)
          openTraitementEdit(t, plots, showToastFn, renderList)
        })
      })
    })
  }

  layer.querySelector('#trait-filter').addEventListener('change', e => {
    filterPlotId = e.target.value ? +e.target.value : null
    renderList()
  })

  renderList()
}

function openTraitementEdit(t, plots, showToastFn, onSaved) {
  const body = document.createElement('div')
  body.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="tedit-date" value="${t.date}">
      </div>
      <div>
        <div class="m-form-label">Produit</div>
        <input type="text" class="m-sheet-input" id="tedit-produit" value="${t.produit}">
      </div>
      <div>
        <div class="m-form-label">Dose</div>
        <input type="text" class="m-sheet-input" id="tedit-dose" value="${t.dose}">
      </div>
    </div>`
  const sheet = showSheet({
    title: 'Modifier le traitement', body,
    doneLabel: 'Enregistrer',
    onDone: () => {
      const all = _loadTraitements()
      const idx = all.findIndex(x => x.id === t.id)
      if (idx !== -1) {
        all[idx].date    = body.querySelector('#tedit-date').value    || t.date
        all[idx].produit = body.querySelector('#tedit-produit').value.trim() || t.produit
        all[idx].dose    = body.querySelector('#tedit-dose').value.trim()    || t.dose
        _saveTraitements(all)
      }
      showToastFn('Traitement modifié')
      onSaved()
    }
  })
}

// ─── Anomalies capteur ─────────────────────────────────────────────────

const SENSOR_EVENT_SVG = {
  'capteur déplacé':        'M12 2c-2.117 0-3.98.741-5.588 2.225C4.803 5.708 4 7.699 4 10.199c0 1.6.6 3.322 1.8 5.164C7 17.205 8.818 19.2 11.25 21.35a1.2 1.2 0 0 0 .75.275 1.2 1.2 0 0 0 .75-.275c2.433-2.15 4.25-4.145 5.45-5.987C19.4 13.521 20 11.8 20 10.2c0-2.5-.803-4.491-2.412-5.974C15.98 2.74 14.117 2 12 2zm0 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 7v3a.969.969 0 0 1-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287A.966.966 0 0 1 11 10V7c0-.283.095-.52.287-.713A.969.969 0 0 1 12 6zm0 7a.97.97 0 0 1 .713.287c.191.192.287.43.287.713s-.096.522-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287c-.192-.191-.287-.43-.287-.713s.095-.52.287-.713A.969.969 0 0 1 12 13z',
  'émissions interrompues': 'M19.075 21.9 8.125 10.975c-.033.167-.063.333-.087.5S8 11.817 8 12c0 .383.046.746.138 1.087.091.342.229.663.412.963.15.25.217.517.2.8a1.04 1.04 0 0 1-.3.7c-.2.2-.438.292-.713.275s-.487-.133-.637-.35c-.35-.5-.62-1.042-.813-1.625A5.889 5.889 0 0 1 6 12a5.985 5.985 0 0 1 .575-2.575L5.1 7.95c-.35.6-.62 1.238-.813 1.913A7.79 7.79 0 0 0 4 12a7.855 7.855 0 0 0 1.675 4.9c.183.233.27.487.262.762-.008.275-.112.513-.312.713a.916.916 0 0 1-1.375-.05c-.7-.867-1.25-1.837-1.65-2.913S2 13.2 2 12c0-1.033.146-2.008.437-2.925A10.71 10.71 0 0 1 3.65 6.5L2.075 4.925a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725a.948.948 0 0 1 .7-.275c.283 0 .525.092.725.275l16.975 17c.183.183.275.417.275.7s-.092.517-.275.7c-.2.2-.442.3-.725.3s-.517-.1-.7-.3zm1.275-4.4-1.45-1.45c.35-.6.62-1.238.813-1.913S20 12.75 20 12a7.854 7.854 0 0 0-1.675-4.9c-.183-.233-.27-.487-.263-.762s.113-.513.313-.713a.916.916 0 0 1 1.375.05c.7.867 1.25 1.833 1.65 2.9.4 1.067.6 2.208.6 3.425 0 1.017-.146 1.988-.438 2.913S20.867 16.7 20.35 17.5zm-2.925-2.925-1.55-1.55c.033-.167.062-.333.087-.5S16 12.183 16 12c0-.383-.046-.746-.138-1.088s-.229-.662-.412-.962a1.367 1.367 0 0 1-.2-.8 1.04 1.04 0 0 1 .3-.7.93.93 0 0 1 .712-.287.76.76 0 0 1 .638.337c.35.483.62 1.025.813 1.625.191.6.287 1.225.287 1.875a5.985 5.985 0 0 1-.575 2.575z',
  'capteur couché':         'M6 5a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h7a1 1 0 1 0 0-2h-7V7a2 2 0 0 0-2-2H6zm3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 16v2h20v-2H2z',
  'cuillère bloquée':       'M17.615 3.25c-.268 0-.537.103-.742.309L3.508 16.922a1.05 1.05 0 0 0 0 1.486l.031.027-.002.002.05.041c.459.438 1.055.718 1.733.813.678.094 1.416 0 2.139-.274a5.793 5.793 0 0 0 2.018-1.322 5.802 5.802 0 0 0 1.322-2.02c.411-1.087.411-2.189 0-3.074l7.558-7.558a1.047 1.047 0 0 0 0-1.485 1.046 1.046 0 0 0-.742-.308zm-1.037 8.416a.473.473 0 0 0-.35.137l-1.05 1.05a.435.435 0 0 0-.106.163.555.555 0 0 0-.031.187c0 .067.01.13.031.188.02.058.055.112.105.162l1.051 1.05a.473.473 0 0 0 .35.137.472.472 0 0 0 .488-.488.474.474 0 0 0-.138-.35l-.2-.199h.037c.834 0 1.542.292 2.125.875.584.584.875 1.292.875 2.125 0 .675-.198 1.274-.593 1.799a3.032 3.032 0 0 1-1.532 1.088.527.527 0 0 0-.267.187.465.465 0 0 0-.108.287c0 .167.06.3.176.4.117.1.254.13.412.089a3.912 3.912 0 0 0 2.1-1.426 3.882 3.882 0 0 0 .812-2.424c0-1.116-.387-2.063-1.162-2.838-.775-.775-1.72-1.162-2.838-1.162h-.037l.2-.201a.474.474 0 0 0 .138-.35.473.473 0 0 0-.488-.486zm-2.563 2.344a.462.462 0 0 0-.337.156c-.292.358-.516.75-.674 1.18-.159.429-.239.882-.239 1.357 0 .917.271 1.728.813 2.432a3.922 3.922 0 0 0 2.1 1.418.442.442 0 0 0 .414-.082.479.479 0 0 0 .173-.393.532.532 0 0 0-.375-.488 2.946 2.946 0 0 1-1.53-1.08 2.939 2.939 0 0 1-.595-1.807c0-.341.054-.666.163-.974.108-.309.262-.594.462-.852a.565.565 0 0 0 .131-.375.477.477 0 0 0-.142-.336.48.48 0 0 0-.364-.156z',
}
const CUILLERE_MODELS = new Set(['P+', 'PT', 'P'])

function plotOptLabel(p) {
  return [p.name, p.crop].filter(Boolean).join(' — ')
}
function sensorOptLabel(s, plots) {
  const orgById = Object.fromEntries(allOrgs.map(o => [o.id, o]))
  const nom = DASHBOARD_MODEL_NAMES[s.model] || s.model
  const ville = (s.parcelIds || []).map(id => plots.find(p => p.id === id)).filter(Boolean).find(p => p.ville)?.ville
    || orgById[s.orgId]?.ville || ''
  return [nom, s.serial, ville].filter(Boolean).join(' — ')
}

const DASHBOARD_MODEL_NAMES = {
  'P+': 'Station météo', 'PT': 'Station météo', 'P': 'Pluviomètre',
  'SMV': 'Station météo virtuelle', 'TH': 'Thermomètre-hygromètre',
  'T_MINI': 'Thermomètre de sol', 'W': 'Anémomètre', 'PYRANO': 'Pyranomètre',
  'PAR': 'Capteur PAR', 'LWS': "Capteur d'humectation foliaire", 'T_GEL': 'Capteur de gel',
  'CHP-15/30': 'Tensiomètre', 'CHP-30/60': 'Tensiomètre', 'CHP-60/90': 'Tensiomètre',
  'CAPA-30-3': 'Sonde capacitive', 'CAPA-60-6': 'Sonde capacitive', 'EC': 'Sonde de fertirrigation',
}

function buildEvenements(plots, sensors) {
  const orgById = Object.fromEntries(allOrgs.map(o => [o.id, o]))
  const withEvents = sensors.filter(s => {
    if (!s.event) return false
    const evList = Array.isArray(s.event) ? s.event : [s.event]
    const filtered = evList.filter(ev => ev !== 'cuillère bloquée' || CUILLERE_MODELS.has(s.model))
    return filtered.length > 0
  })
  if (!withEvents.length) return `<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>`
  return `<div class="m-w-list">${withEvents.map(s => {
    const parcel = plots.find(p => (s.parcelIds || []).includes(p.id))
    const ville  = parcel?.ville || orgById[s.orgId]?.ville || ''
    const evList = (Array.isArray(s.event) ? s.event : [s.event])
      .filter(ev => ev !== 'cuillère bloquée' || CUILLERE_MODELS.has(s.model))
    const icons  = evList.map(ev => {
      const d = SENSOR_EVENT_SVG[ev] || ''
      return `<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:#ff3b30;border-radius:6px;flex-shrink:0" title="${ev}"><svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="${d}"/></svg></span>`
    }).join('')
    const nomModele = DASHBOARD_MODEL_NAMES[s.model] || s.model
    return `<div class="m-w-row m-w-row--clickable" data-sensor-id="${s.id}">
      <div style="flex:1;min-width:0">
        <div class="m-w-row-name">${nomModele}</div>
        <div style="font-size:12px;color:#636366;margin-top:1px">${s.model} — ${s.serial}</div>
        ${ville ? `<div style="font-size:11px;color:#8e8e93;margin-top:1px">${ville}</div>` : ''}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;width:61px;justify-content:flex-end">${icons}</div>
        <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
      </div>
    </div>`
  }).join('')}</div>`
}

// ─── Stades phénologiques ─────────────────────────────────────────────────────

const PHENOLOGY_M = {
  'Blé tendre':  { varieties: ['Bermude','Chevignon','Oregrain'],    stages: ['Tallage (BBCH 25)','SLAG (BBCH 29-30)','Montaison (BBCH 32)','Gonflement (BBCH 45)'], nextStages: ['SLAG','Montaison','Gonflement','Épiaison'] },
  'Maïs':        { varieties: ['DKC4795','Farrandole','Ambition'],   stages: ['Levée (BBCH 09)','6 feuilles (BBCH 16)','10 feuilles (BBCH 18)','Floraison mâle (BBCH 65)'], nextStages: ['6 feuilles','10 feuilles','Floraison mâle','Nouaison'] },
  'Orge':        { varieties: ['Irina','KWS Cassia','Etincel'],      stages: ['Tallage (BBCH 25)','SLAG (BBCH 29-30)','Montaison (BBCH 33)','Gonflement (BBCH 45)'], nextStages: ['SLAG','Montaison','Gonflement','Épiaison'] },
  'Colza':       { varieties: ['Avatar','DK Expower','Atlavista'],   stages: ['Boutons floraux (BBCH 51)','Début floraison (BBCH 60)','Pleine floraison (BBCH 65)','Nouaison (BBCH 70)'], nextStages: ['Début floraison','Pleine floraison','Nouaison','Siliques vertes'] },
  'Tournesol':   { varieties: ['Heliasol','LG 5474','Heliosol'],     stages: ['Levée (BBCH 09)','4 feuilles (BBCH 14)','Bouton floral (BBCH 51)','Floraison (BBCH 65)'], nextStages: ['4 feuilles','Bouton floral','Floraison','Maturité'] },
  'Betterave sucrière': { varieties: ['Alegria','Belinda','Cosima'], stages: ['Levée (BBCH 09)','4 feuilles (BBCH 14)','Fermeture rang (BBCH 29)','Grossissement (BBCH 40)'], nextStages: ['4 feuilles','Fermeture rang','Grossissement','Maturité'] },
  'Pomme de terre': { varieties: ['Bintje','Charlotte','Agria'],     stages: ['Levée (BBCH 09)','Développement tiges (BBCH 30)','Floraison (BBCH 60)','Sénescence (BBCH 90)'], nextStages: ['Développement tiges','Floraison','Sénescence','Récolte'] },
}
const PHENOLOGY_DEFAULT_M = { varieties: ['—'], stages: ['Végétation active'], nextStages: ['Prochain stade'] }
const NEXT_STAGE_CROPS_M = new Set(['Blé tendre','Blé dur','Maïs','Maïs ensilage','Pomme de terre','Carotte','Tournesol','Pommier','Colza','Betterave sucrière'])

function plotPhenologyDataM(plot) {
  const s  = plot.id
  const ph = PHENOLOGY_M[plot.crop] || PHENOLOGY_DEFAULT_M
  const idx = s % ph.stages.length
  const daysToNext = (s * 2 + 5) % 18 + 4
  const nextDate   = new Date('2026-04-18'); nextDate.setDate(nextDate.getDate() + daysToNext)
  const nextDateStr = nextDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
  return { stage: ph.stages[idx], nextStage: ph.nextStages[idx], variety: ph.varieties[s % ph.varieties.length], nextDateStr, daysToNext }
}

function buildCultures(plots) {
  const myPlots = plots.filter(p => p.crop)
  if (!myPlots.length) return `<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>`
  const byCrop = {}
  for (const p of myPlots) { if (!byCrop[p.crop]) byCrop[p.crop] = []; byCrop[p.crop].push(p) }
  const groups = Object.entries(byCrop).map(([crop, ps]) => {
    const plotRows = ps.map(p => {
      const hasPheno = !!PHENOLOGY_M[p.crop]
      const d        = hasPheno ? plotPhenologyDataM(p) : null
      const variety  = hasPheno && d.variety !== '—' ? d.variety : ''
      const stage    = hasPheno ? d.stage.split(' (BBCH')[0] : 'Stade non renseigné'
      return `<div class="m-w-row m-w-row--clickable" data-plot-id="${p.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${p.name}</div>
          ${variety ? `<div class="m-w-row-sub">${variety}</div>` : ''}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${stage}</div>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>`
    }).join('')
    return `<details class="m-crop-group">
      <summary class="m-crop-summary">
        <div class="m-crop-summary-left">
          <div class="m-crop-summary-name">${crop}</div>
          <div class="m-crop-summary-count">${ps.length} parcelle${ps.length > 1 ? 's' : ''}</div>
        </div>
        <i class="bi bi-chevron-right m-crop-chevron"></i>
      </summary>
      <div class="m-crop-plots">${plotRows}</div>
    </details>`
  }).join('')
  return `<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${groups}`
}

// ─── Widget Notes ─────────────────────────────────────────────────────────────
const NOTES_KEY = 'weenat-m-notes'
function _loadNotes() { try { return JSON.parse(localStorage.getItem(NOTES_KEY)) || [] } catch { return [] } }
function _saveNotes(list) { localStorage.setItem(NOTES_KEY, JSON.stringify(list)) }

function buildNotes(role) {
  const notes = _loadNotes()
  const fmtDate = d => { const [y, m, j] = d.split('-'); return `${j}/${m}/${y}` }
  const ellipsis = t => t.length > 70 ? t.slice(0, 70) + '…' : t

  const noteCard = (n, i) => {
    const truncated  = n.text.length > 70
    const photoCount = (n.imageIds || []).length
    const photosBadge = photoCount > 0
      ? `<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${photoCount} photo${photoCount > 1 ? 's' : ''}</span>`
      : ''
    const linkChip = n.linkedType
      ? `<span style="font-size:10px;background:${n.linkedType === 'parcel' ? '#eef4ff' : '#f0faf0'};color:${n.linkedType === 'parcel' ? '#3a7bd5' : '#2a7a3a'};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${n.linkedType === 'parcel' ? 'geo-alt' : 'broadcast'}"></i>${n.linkedName || ''}</span>`
      : ''
    return `
      <div class="m-note-card" data-idx="${i}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${truncated || photoCount > 0 || n.linkedType ? 'pointer' : 'default'}">
        <button class="m-note-del m-del-btn" data-idx="${i}" style="position:absolute;top:8px;right:8px">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span>${fmtDate(n.date)}${n.time ? ' · ' + n.time : ''}</span>
          ${n.auteur ? `<span style="color:#636366;font-weight:500">${n.auteur}</span>` : ''}
          ${n.role ? `<span style="font-size:10px;background:${n.role === 'conseiller' ? '#eef4ff' : '#f2f2f7'};color:${n.role === 'conseiller' ? '#3a7bd5' : '#636366'};border-radius:4px;padding:1px 5px;font-weight:500">${n.role === 'conseiller' ? 'Conseiller' : 'Membre'}</span>` : ''}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${ellipsis(n.text)}</div>
        ${linkChip || photosBadge ? `<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${linkChip}${photosBadge}</div>` : ''}
      </div>`
  }

  const recent5 = notes.slice(0, 5)
  const listHtml = recent5.length
    ? recent5.map((n, i) => noteCard(n, i)).join('')
    : ''

  const now = new Date()
  const today = now.toISOString().slice(0, 10)
  const currentTime = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`
  const currentOrg = allOrgs.find(o => o.id === (role === 'admin' ? 100 : 1))
  const auteur = currentOrg ? `${currentOrg.prenomProprietaire} ${currentOrg.nomProprietaire}` : ''

  const orgId = currentOrg?.id
  const visiblePlots   = role === 'adherent' ? allPlots.filter(p => p.orgId === orgId) : allPlots
  const visibleSensors = role === 'adherent'
    ? allSensors.filter(s => s.parcelIds.some(id => visiblePlots.some(p => p.id === id)))
    : allSensors

  const plotOpts   = [...visiblePlots].sort((a,b)=>a.name.localeCompare(b.name,'fr')).map(p => `<option value="p-${p.id}">${plotOptLabel(p)}</option>`).join('')
  const sensorOpts = visibleSensors.map(s =>
    `<option value="s-${s.id}">${sensorOptLabel(s, visiblePlots)}</option>`
  ).join('')

  return `
    ${listHtml ? `<div id="notes-list" style="margin-bottom:12px">${listHtml}</div>` : ''}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:8px">
      <select id="notes-link" class="m-sheet-input">
        <option value="">— Sans lien —</option>
        <optgroup label="Parcelles">${plotOpts}</optgroup>
        <optgroup label="Capteurs">${sensorOpts}</optgroup>
      </select>
      <textarea id="notes-input" class="m-sheet-input" placeholder="Votre note…" rows="2" style="resize:none"></textarea>
      <div style="display:flex;gap:6px">
        <input type="date" id="notes-date" class="m-sheet-input" value="${today}" style="flex:1">
        <input type="time" id="notes-time" class="m-sheet-input" value="${currentTime}" style="flex:1">
      </div>
    </div>
    <div class="jrn-img-zone" style="margin-bottom:8px">
      <div class="jrn-img-previews" id="notes-previews"></div>
      <button type="button" class="jrn-img-add-btn" id="notes-img-btn"><i class="bi bi-camera"></i> Ajouter une photo</button>
      <input type="file" id="notes-img-input" accept="image/*" multiple style="display:none">
      <div class="jrn-img-error" id="notes-img-error"></div>
    </div>
    <input type="hidden" id="notes-auteur" value="${auteur}">
    <button id="notes-add" class="m-btn m-btn--primary" style="margin-bottom:6px">Ajouter la note</button>
    <button id="notes-view" class="m-btn m-btn--secondary">Voir les notes${notes.length ? ` (${notes.length})` : ''}</button>`
}

function buildMonReseau(role) {
  const nbAdherents = allPlots.map(p => p.orgId).filter((v, i, a) => a.indexOf(v) === i && v !== 100).length
  const nbCapteurs  = allSensors.length
  const nbParcelles = allPlots.length
  return `
    <div class="m-reseau-name">${network.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${nbCapteurs}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${nbParcelles}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${nbAdherents}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${network.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${network.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${network.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${network.siege.adresse}, ${network.siege.codePostal} ${network.siege.ville}</span></div>
    </div>
    ${role === 'admin' ? `<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>` : ''}`
}

function buildSupport() {
  return `
    <button class="m-support-chat-btn" id="open-chat-btn" type="button">
      <div class="m-support-chat-avatar"><i class="bi bi-robot"></i></div>
      <div class="m-support-chat-info">
        <span>Assistant virtuel Weenat</span>
        <em>Réponse immédiate</em>
      </div>
      <i class="bi bi-chevron-right" style="color:#c7c7cc"></i>
    </button>
    <div class="m-support-list">
      <div class="m-support-list-label">Infos équipe support</div>
      <a class="m-support-row" href="mailto:support@weenat.com">
        <div class="m-support-ico"><i class="bi bi-envelope-fill"></i></div>
        <div class="m-support-info"><span>Email</span><strong>support@weenat.com</strong></div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc"></i>
      </a>
      <a class="m-support-row" href="tel:+33784968456">
        <div class="m-support-ico"><i class="bi bi-telephone-fill"></i></div>
        <div class="m-support-info"><span>Téléphone</span><strong>+33 7 84 96 84 56</strong></div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc"></i>
      </a>
      <div class="m-support-row">
        <div class="m-support-ico"><i class="bi bi-clock-fill"></i></div>
        <div class="m-support-info"><span>Horaires</span><strong>Lun–Jeu 9h–18h · Ven 9h–17h</strong></div>
      </div>
    </div>
    <a class="m-support-center" href="https://support.weenat.com/" target="_blank">
      <i class="bi bi-book"></i> Consulter le centre d'aide
    </a>`
}

const BOT_REPLIES = [
  "Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.",
  "Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.",
  "Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.",
  "Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?",
  "Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses.",
]

function showChatSheet() {
  const screen = document.getElementById('phone-screen')
  document.querySelector('.m-sheet-overlay')?.remove()

  const overlay = document.createElement('div')
  overlay.className = 'm-sheet-overlay m-sheet-overlay--tall'
  overlay.innerHTML = `
    <div class="m-sheet m-chat-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-chat-hd">
        <button class="m-sheet-cancel" id="chat-close">Fermer</button>
        <div class="m-chat-hd-center">
          <div class="m-chat-avatar"><i class="bi bi-robot"></i></div>
          <div>
            <div class="m-chat-hd-name">Assistant Weenat</div>
            <div class="m-chat-hd-status"><span class="m-chat-online"></span>En ligne</div>
          </div>
        </div>
        <div style="width:60px"></div>
      </div>
      <div class="m-chat-messages" id="chat-messages">
        <div class="m-chat-msg m-chat-msg--bot">
          <div class="m-chat-bubble">Bonjour ! Je suis l'assistant Weenat. Comment puis-je vous aider ?</div>
        </div>
      </div>
      <div class="m-chat-input-row">
        <input class="m-chat-input" id="chat-input" type="text" placeholder="Posez votre question…">
        <button class="m-chat-send" id="chat-send" type="button"><i class="bi bi-arrow-up"></i></button>
      </div>
    </div>`

  screen.appendChild(overlay)
  requestAnimationFrame(() => overlay.classList.add('m-sheet-overlay--show'))

  const messages  = overlay.querySelector('#chat-messages')
  const input     = overlay.querySelector('#chat-input')
  const sendBtn   = overlay.querySelector('#chat-send')

  const close = () => {
    overlay.classList.remove('m-sheet-overlay--show')
    setTimeout(() => overlay.remove(), 280)
  }
  overlay.querySelector('#chat-close').addEventListener('click', close)
  overlay.addEventListener('click', e => { if (e.target === overlay) close() })

  function appendMsg(text, who) {
    const div = document.createElement('div')
    div.className = `m-chat-msg m-chat-msg--${who}`
    div.innerHTML = `<div class="m-chat-bubble">${text}</div>`
    messages.appendChild(div)
    messages.scrollTop = messages.scrollHeight
  }

  function showTyping() {
    const div = document.createElement('div')
    div.className = 'm-chat-msg m-chat-msg--bot m-chat-typing'
    div.innerHTML = `<div class="m-chat-bubble"><span></span><span></span><span></span></div>`
    messages.appendChild(div)
    messages.scrollTop = messages.scrollHeight
    return div
  }

  function send() {
    const text = input.value.trim(); if (!text) return
    appendMsg(text, 'user')
    input.value = ''
    sendBtn.disabled = true
    const typing = showTyping()
    setTimeout(() => {
      typing.remove()
      const reply = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)]
      appendMsg(reply, 'bot')
      sendBtn.disabled = false
      input.focus()
    }, 1200 + Math.random() * 800)
  }

  sendBtn.addEventListener('click', send)
  input.addEventListener('keydown', e => { if (e.key === 'Enter') send() })
  setTimeout(() => input.focus(), 350)
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function initDashboardScreen(screenEl, role) {
  // Le conteneur de rendu est un sous-div pour préserver la navbar
  let content = screenEl.querySelector('#dashboard-content')
  if (!content) {
    content = document.createElement('div')
    content.id = 'dashboard-content'
    screenEl.appendChild(content)
  }

  const orgId = ORG_ID[role] || 1
  // role=new : aucune donnée pré-existante (parcelles, capteurs, alertes vides)
  const exploitPlots   = (role === 'new' || role === 'new-adherent') ? [] : orgId === 100 ? allPlots : allPlots.filter(p => p.orgId === orgId)
  const plotIds = new Set(exploitPlots.map(p => p.id))
  const exploitSensors = (role === 'new' || role === 'new-adherent') ? [] : allSensors.filter(s => s.parcelIds.some(id => plotIds.has(id)))
  let forecast = makeForecast()
  let bhSelectedOrgId = null
  let radarMap = null

  function getBhPlots() {
    if (role !== 'admin') return exploitPlots
    if (bhSelectedOrgId === null) return allPlots
    return allPlots.filter(p => p.orgId === bhSelectedOrgId)
  }

  function orgSelectorHTML() {
    if (role !== 'admin') return ''
    const adherentOrgs = allOrgs.filter(o => o.id !== 100).sort((a, b) => a.name.localeCompare(b.name))
    return `<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${adherentOrgs.map(o => `<option value="${o.id}">${o.name}</option>`).join('')}
    </select>`
  }

  const _saved = _loadDash()
  const ALWAYS_OPEN = new Set(['mon_reseau', 'support'])
  const collapsedWidgets = new Set(_saved.collapsed ?? CATALOG.map(w => w.id).filter(id => !ALWAYS_OPEN.has(id)))

  function persist() {
    _saveDash({
      catalog:  CATALOG.map(w => ({ id: w.id, active: w.active })),
      collapsed: [...collapsedWidgets],
      mesuresList,
      cumulsList,
    })
  }

  function buildOnboardingBlocks() {
    return `
      <div class="m-onboard-grid">
        <div class="m-onboard-card">
          <div class="m-onboard-hd">
            <div class="m-onboard-icon" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-broadcast"></i></div>
            <div class="m-onboard-title">Ajouter un capteur</div>
          </div>
          <div class="m-onboard-desc">Ajoutez vos capteurs pour accéder aux mesures.</div>
          <button class="m-onboard-btn" data-action="add-sensor" type="button">Ajouter</button>
        </div>
        <div class="m-onboard-card">
          <div class="m-onboard-hd">
            <div class="m-onboard-icon" style="background:#30d15820;color:#30d158"><i class="bi bi-map"></i></div>
            <div class="m-onboard-title">Créer une parcelle</div>
          </div>
          <div class="m-onboard-desc">Créez vos parcelles pour réunir vos capteurs et agréger vos données, gérer votre parcellaire, suivre vos cultures et piloter vos interventions et irrigations.</div>
          <button class="m-onboard-btn" data-action="add-parcel" type="button">Créer</button>
        </div>
      </div>`
  }

  function buildRadarPluie() {
    return `
      <div style="position:relative">
        <div id="radar-map" style="width:100%;aspect-ratio:1/1.4"></div>
        <div id="radar-loading" class="radar-loading">Chargement du radar…</div>
      </div>
      <div class="radar-controls">
        <button id="radar-play-btn" class="radar-play-btn" type="button"><i class="bi bi-play-fill"></i></button>
        <div class="radar-slider-wrap">
          <input id="radar-slider" type="range" min="0" max="11" value="8" step="1" class="radar-slider-input">
        </div>
        <span id="radar-time-lbl" class="radar-time-lbl">--:--</span>
      </div>`
  }

  function initRadarMap() {
    const L = window.L
    if (!L) return
    setTimeout(() => {
      const el = content.querySelector('#radar-map')
      if (!el || radarMap) return

      const center = exploitPlots[0] ? [exploitPlots[0].lat, exploitPlots[0].lng] : [47.5, -1.5]
      radarMap = L.map(el, { zoomControl: true, attributionControl: false, tap: false }).setView(center, 7)
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 14 }).addTo(radarMap)

      const slider  = content.querySelector('#radar-slider')
      const timeLbl = content.querySelector('#radar-time-lbl')
      const playBtn = content.querySelector('#radar-play-btn')
      const loading = content.querySelector('#radar-loading')

      let frames = [], pastCount = 0, currentIdx = 0, radarLayer = null, playing = false, playTimer = null

      function showFrame(idx) {
        if (!frames.length) return
        if (radarLayer) radarMap.removeLayer(radarLayer)
        const f = frames[idx]
        radarLayer = L.tileLayer(
          `https://tilecache.rainviewer.com${f.path}/256/{z}/{x}/{y}/2/1_1.png`,
          { opacity: 0.65, zIndex: 10 }
        ).addTo(radarMap)
        const d = new Date(f.time * 1000)
        timeLbl.textContent = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        timeLbl.style.color = idx >= pastCount ? '#007aff' : '#8e8e93'
        slider.value = idx
      }

      slider.addEventListener('input', () => { currentIdx = +slider.value; showFrame(currentIdx) })

      playBtn.addEventListener('click', () => {
        playing = !playing
        playBtn.innerHTML = playing ? '<i class="bi bi-pause-fill"></i>' : '<i class="bi bi-play-fill"></i>'
        if (playing) playTimer = setInterval(() => { currentIdx = (currentIdx + 1) % frames.length; showFrame(currentIdx) }, 500)
        else clearInterval(playTimer)
      })

      fetch('https://api.rainviewer.com/public/weather-maps.json')
        .then(r => r.json())
        .then(data => {
          loading?.remove()
          const past = data.radar?.past || [], nowcast = data.radar?.nowcast || []
          frames = [...past, ...nowcast]
          pastCount = past.length
          if (!frames.length) return
          slider.max = frames.length - 1
          currentIdx = Math.max(0, pastCount - 1)
          showFrame(currentIdx)
        })
        .catch(() => { if (loading) loading.textContent = 'Radar indisponible' })
    }, 50)
  }

  function widgetCard(w, bodyHtml) {
    const menu = w.fixed ? '' :
      `<button class="m-widget-menu" data-widget="${w.id}" type="button">•••</button>`
    const collapsed = collapsedWidgets.has(w.id)
    return `
      <div class="m-widget${collapsed ? ' m-widget--collapsed' : ''}" data-widget="${w.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${w.id}">
          <div class="m-widget-icon-wrap" style="background:${w.color}20;color:${w.color}">
            <i class="bi ${w.icon}"></i>
          </div>
          <span class="m-widget-title">${w.title}</span>
          ${w.info ? `<button class="m-widget-info" data-widget="${w.id}" type="button"><i class="bi bi-info-circle"></i></button>` : ''}
          <i class="bi ${collapsed ? 'bi-chevron-down' : 'bi-chevron-up'}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${w.fixed ? '0' : '8px'}"></i>
          ${menu}
        </div>
        <div class="m-widget-bd" style="${collapsed ? 'display:none' : ''}">${bodyHtml}</div>
      </div>`
  }

  function render() {
    radarMap?.remove(); radarMap = null
    forecast = makeForecast()
    const newUserIds = new Set(['previsions', 'support'])
    const custom = CATALOG.filter(w => w.active && !w.fixed && (role !== 'new' || newUserIds.has(w.id)))
    const fixed  = CATALOG.filter(w => w.active && w.fixed  && (role !== 'new' || newUserIds.has(w.id)))
    content.innerHTML = `
      ${role === 'new' ? buildOnboardingBlocks() : `<button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>`}
      ${[...custom, ...fixed].map(w => {
        let body = ''
        if (w.id === 'bilan_hydrique') body = orgSelectorHTML() + buildBilanHydrique(getBhPlots())
        else if (w.id === 'previsions')  body = buildPrevisions(exploitPlots, exploitSensors, forecast, role)
        else if (w.id === 'cumuls')      body = buildCumuls(exploitPlots, exploitSensors)
        else if (w.id === 'temps_reel')  body = buildMesures(exploitPlots, exploitSensors)
        else if (w.id === 'traitements') body = buildTraitements(exploitPlots)
        else if (w.id === 'evenements')  body = buildEvenements(exploitPlots, exploitSensors)
        else if (w.id === 'cultures')    body = buildCultures(exploitPlots)
        else if (w.id === 'notes')       body = buildNotes(role)
        else if (w.id === 'radar_pluie') body = buildRadarPluie()
        else if (w.id === 'irrelis')     body = buildIrrelis(exploitPlots)
        else if (w.id === 'mon_reseau')  body = buildMonReseau(role)
        else if (w.id === 'support')     body = buildSupport()
        return widgetCard(w, body)
      }).join('')}
      <div style="height:24px"></div>`
    bindEvents()
    if (!collapsedWidgets.has('radar_pluie')) initRadarMap()
  }

  const SVG_LOGO = `<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>`

  function renderDayDetailHTML(forecast, idx, locLabel = '') {
    const d = forecast[idx]
    const title = `${d.dayLabel.charAt(0).toUpperCase() + d.dayLabel.slice(1)} · ${d.dateStr}`
    return `
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${SVG_LOGO}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${idx === 0 ? 'disabled' : ''}>‹</button>
          <div style="display:flex;align-items:center;gap:6px">
            <i class="bi ${d.icon}" style="color:${d.color};font-size:22px"></i>
            <div>
              <span class="m-d-name">${title}</span>
              ${locLabel ? `<div style="font-size:12px;color:#8e8e93;margin-top:1px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${locLabel}</div>` : ''}
            </div>
          </div>
          <button class="m-day-nav" id="next-day" ${idx >= forecast.length-1 ? 'disabled' : ''}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${d.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${d.tMin} / ${d.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${d.ventMoy}/${d.ventRafales}</strong></div>
          </div>
          <div class="m-list-section-header">Heure par heure</div>
          <div style="background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.07);overflow:hidden;margin-bottom:24px">
            <div style="display:flex;align-items:center;gap:12px;padding:6px 14px;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9f9">
              <span style="width:28px;flex-shrink:0"></span>
              <span style="width:18px;flex-shrink:0;font-size:10px;color:#8e8e93;text-align:center"><i class="bi bi-cloud"></i></span>
              <span style="width:44px;flex-shrink:0;font-size:10px;color:#8e8e93"><i class="bi bi-droplet"></i></span>
              <span style="width:40px;flex-shrink:0;font-size:10px;color:#8e8e93"><i class="bi bi-thermometer"></i></span>
              <span style="font-size:10px;color:#8e8e93"><i class="bi bi-moisture"></i></span>
              <span style="margin-left:auto;font-size:10px;color:#8e8e93"><i class="bi bi-wind"></i></span>
            </div>
            ${d.hours.map((h, i) => `
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${i < d.hours.length-1 ? 'border-bottom:.5px solid rgba(0,0,0,.06)' : ''}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${h.label}</span>
                <i class="bi ${h.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${h.pluie > 0 ? `${h.pluie}mm` : ''}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${h.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${h.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${h.vent} km/h</span>
              </div>`).join('')}
          </div>
        </div>
      </div>`
  }

  function bindDayDetail(layer, forecast, idx, locLabel = '') {
    layer.querySelector('.m-detail-back').addEventListener('click', popDetail)
    layer.querySelector('#prev-day')?.addEventListener('click', () => {
      layer.innerHTML = renderDayDetailHTML(forecast, idx-1, locLabel)
      bindDayDetail(layer, forecast, idx-1, locLabel)
    })
    layer.querySelector('#next-day')?.addEventListener('click', () => {
      layer.innerHTML = renderDayDetailHTML(forecast, idx+1, locLabel)
      bindDayDetail(layer, forecast, idx+1, locLabel)
    })
  }

  function openDayDetail(forecast, idx, locLabel = '') {
    const layer = pushDetail(renderDayDetailHTML(forecast, idx, locLabel))
    bindDayDetail(layer, forecast, idx, locLabel)
  }

  function bindEvents() {
    screenEl.querySelector('.m-navbar-action')?.addEventListener('click', showAddPage)
    content.querySelector('#dash-add-widget-btn')?.addEventListener('click', showCatalog)
    content.querySelector('[data-action="add-parcel"]')?.addEventListener('click', () => showParcelCreation(() => render()))
    content.querySelector('[data-action="add-sensor"]')?.addEventListener('click', () => showSensorCreation(() => render()))

    // Widget info
    content.querySelectorAll('.m-widget-info').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const w = CATALOG.find(c => c.id === btn.dataset.widget)
        if (w) showWidgetInfoModal(w.title, w.info, w.gif)
      })
    })

    // Widget collapse
    content.querySelectorAll('.m-widget-hd--toggle').forEach(hd => {
      hd.addEventListener('click', e => {
        if (e.target.closest('.m-widget-menu')) return
        if (e.target.closest('.m-widget-info')) return
        const widgetId = hd.dataset.collapse
        if (collapsedWidgets.has(widgetId)) collapsedWidgets.delete(widgetId)
        else collapsedWidgets.add(widgetId)
        persist(); render()
      })
    })

    content.querySelector('#trait-btn-saisir')?.addEventListener('click', () => {
      openTraitementSaisie(exploitPlots, showToast)
    })
    content.querySelector('#trait-btn-voir')?.addEventListener('click', () => {
      openTraitementsCalendar(exploitPlots, role, showToast)
    })
    content.querySelectorAll('.m-trait-card').forEach(card => {
      card.addEventListener('click', () => {
        const plot = allPlots.find(p => p.id === +card.dataset.plotId)
        if (plot) {
          const linked = allSensors.filter(s => s.parcelIds.includes(plot.id)).map(s => s.id)
          import('./parcel-detail.js').then(m => m.initParcelDetail(plot, linked, 'widgets', 'Tableau de bord'))
        }
      })
    })

    content.querySelectorAll('[data-sensor-id]').forEach(row => {
      row.addEventListener('click', () => {
        const sensor = exploitSensors.find(s => s.id === +row.dataset.sensorId)
        if (sensor) import('./sensor-detail.js').then(m => m.initSensorDetail(sensor, 'params'))
      })
    })
    content.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(row => {
      row.addEventListener('click', () => {
        const plot = allPlots.find(p => p.id === +row.dataset.plotId)
        if (plot) {
          const linked = allSensors.filter(s => s.parcelIds.includes(plot.id)).map(s => s.id)
          import('./parcel-detail.js').then(m => m.initParcelDetail(plot, linked, 'params', 'Tableau de bord'))
        }
      })
    })


    function bindBhPlotLinks() {
      content.querySelectorAll('.m-bh-plot-link').forEach(btn => {
        btn.addEventListener('click', () => {
          const plot = allPlots.find(p => p.id === +btn.dataset.plotId)
          if (plot) {
            const linked = allSensors.filter(s => s.parcelIds.includes(plot.id)).map(s => s.id)
            import('./parcel-detail.js').then(m => {
              m.initParcelDetail(plot, linked, 'widgets', 'Tableau de bord')
              setTimeout(() => {
                document.querySelector('[data-widget-id="irrigations"]')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }, 150)
            })
          }
        })
      })
    }
    function bindBhButtons() {
      content.querySelector('#bh-btn-calendar')?.addEventListener('click', () => {
        import('./irrigation.js').then(m => m.openCalendar(exploitPlots, ''))
      })
      content.querySelector('#bh-btn-irrigation')?.addEventListener('click', () => {
        import('./irrigation.js').then(m => m.openIrrigationSaisie(exploitPlots, showToast))
      })
      content.querySelector('#bh-btn-strategie')?.addEventListener('click', () => {
        import('./irrigation.js').then(m => m.openIrrigationStrategie(exploitPlots, showToast))
      })
    }
    function rebuildBh() {
      const bd = content.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd')
      if (bd) {
        bd.innerHTML = orgSelectorHTML() + buildBilanHydrique(getBhPlots())
        bindBhPlotLinks(); bindBhButtons(); bindBhExpand(); bindBhAdvisor()
        if (role === 'admin') bindBhOrgSelect()
      }
    }
    function bindBhExpand() {
      const btn = content.querySelector('#bh-expand')
      if (!btn) return
      btn.addEventListener('click', () => {
        const nowExpanded = btn.dataset.expanded === 'true'
        const bd = content.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd')
        if (bd) {
          bd.innerHTML = orgSelectorHTML() + buildBilanHydrique(getBhPlots(), !nowExpanded)
          bindBhPlotLinks()
          bindBhButtons()
          bindBhExpand()
          bindBhAdvisor()
          if (role === 'admin') bindBhOrgSelect()
        }
      })
    }
    function bindBhAdvisor() {
      const cb = content.querySelector('#bh-advisor-cb')
      if (!cb) return
      cb.addEventListener('change', () => {
        _saveDash({ irrigAdvisor: cb.checked })
        rebuildBh()
      })
    }
    function bindBhOrgSelect() {
      const sel = content.querySelector('#bh-org-select')
      if (!sel) return
      sel.value = bhSelectedOrgId === null ? 'all' : String(bhSelectedOrgId)
      sel.addEventListener('change', () => {
        bhSelectedOrgId = sel.value === 'all' ? null : +sel.value
        rebuildBh()
      })
    }
    bindBhPlotLinks()
    bindBhButtons()
    bindBhExpand()
    bindBhAdvisor()
    if (role === 'admin') bindBhOrgSelect()

    // ── Irré-LIS ──────────────────────────────────────────────────────────────
    content.querySelectorAll('[data-widget="irrelis"] .m-il-row').forEach(row => {
      row.addEventListener('click', () => {
        const plot = allPlots.find(p => p.id === +row.dataset.ilPlot)
        if (plot) import('./irrelis-detail.js').then(m => m.openIrrelisDetail(plot))
      })
    })

    // ── Cumuls ────────────────────────────────────────────────────────────────
    function rebuildCumulsWidget() {
      const bd = content.querySelector('[data-widget="cumuls"] .m-widget-bd')
      if (bd) { bd.innerHTML = buildCumuls(exploitPlots, exploitSensors); bindCumulsEvents() }
    }
    _refreshCumulsWidget = rebuildCumulsWidget
    function bindCumulsEvents() {
      const updateThresholds = () => {
        const metric = content.querySelector('#cumuls-metric')?.value
        const thEl   = content.querySelector('#cumuls-thresholds')
        if (!thEl) return
        if (metric === 'hf') {
          thEl.innerHTML = `
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`
        } else if (metric === 'dj') {
          thEl.innerHTML = `
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`
        } else {
          thEl.innerHTML = ''
        }
      }
      const updateMetrics = () => {
        const sel  = content.querySelector('#cumuls-metric')
        const subj = content.querySelector('#cumuls-subject')?.value
        if (!sel) return
        const avail = getAvailableMetrics(subj)
        sel.innerHTML = `<option value="">— Métrique —</option>` +
          avail.map(m => `<option value="${m.id}">${m.label}</option>`).join('')
        sel.disabled = !subj || !avail.length
        updateThresholds()
        checkCumulCreate()
      }
      const checkCumulCreate = () => {
        const btn    = content.querySelector('#cumuls-create')
        const errEl  = content.querySelector('#cumuls-date-err')
        const subj   = content.querySelector('#cumuls-subject')?.value
        const from   = content.querySelector('#cumuls-from')?.value
        const metric = content.querySelector('#cumuls-metric')?.value
        const tooOld = from ? (Date.now() - new Date(from)) / 86400000 > 365 : false
        if (errEl) errEl.style.display = tooOld ? '' : 'none'
        if (btn) btn.disabled = !subj || !from || !metric || tooOld
      }
      content.querySelector('#cumuls-subject')?.addEventListener('change', () => { updateMetrics(); checkCumulCreate() })
      content.querySelector('#cumuls-from')?.addEventListener('change', checkCumulCreate)
      content.querySelector('#cumuls-metric')?.addEventListener('change', () => { updateThresholds(); checkCumulCreate() })
      content.querySelector('#cumuls-create')?.addEventListener('click', () => {
        const subjSel = content.querySelector('#cumuls-subject')
        const subj    = subjSel?.value
        const from    = content.querySelector('#cumuls-from')?.value
        const metric  = content.querySelector('#cumuls-metric')?.value
        if (!subj || !from || !metric) return
        const m   = CUMULS_METRICS.find(x => x.id === metric)
        const cfg = CUMUL_ICONS[metric] || { icon: 'bi-bar-chart-fill', color: '#636366' }
        const thresholds = metric === 'hf'
          ? { cold: +(content.querySelector('#cumuls-th-cold')?.value ?? 7.2) }
          : metric === 'dj'
          ? { low: +(content.querySelector('#cumuls-th-low')?.value ?? 0), high: +(content.querySelector('#cumuls-th-high')?.value ?? 18) }
          : null
        cumulsList.push({
          metricId: metric, metricLabel: m?.label || metric, unit: m?.unit || '',
          icon: cfg.icon, color: cfg.color,
          subjectKey: subj, subjectLabel: (subjSel.options[subjSel.selectedIndex]?.text || subj).trim(),
          fromDate: from, value: String(computeCumul(subj, from, metric) ?? '—'),
          thresholds,
        })
        persist(); rebuildCumulsWidget()
      })
      content.querySelectorAll('.m-cumuls-del').forEach(btn => {
        btn.addEventListener('click', () => {
          cumulsList.splice(+btn.dataset.cidx, 1)
          persist(); rebuildCumulsWidget()
        })
      })
      content.querySelectorAll('.m-cumuls-edit').forEach(btn => {
        btn.addEventListener('click', () => openCumulEditSheet(+btn.dataset.cidx))
      })
      content.querySelectorAll('.m-cumuls-details').forEach(btn => {
        btn.addEventListener('click', () => {
          const c = cumulsList[+btn.dataset.cidx]
          if (!c) return
          import('./chart-fullscreen.js').then(m => m.initCumulFullscreen({
            label: c.metricLabel, unit: c.unit, color: c.color,
            total: +c.value || 0, fromDateIso: c.fromDate,
            backLabel: 'Tableau de bord', seedKey: `${c.subjectKey}-${c.metricId}`,
            growthShape: CUMUL_GROWTH_SHAPE[c.metricId] || 'linear',
          }))
        })
      })

      function buildThresholdHtml(metricId, thresholds = {}) {
        if (metricId === 'hf') return `
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${thresholds.cold ?? 7.2}" step="0.1" min="-20" max="20">
          </div>`
        if (metricId === 'dj') return `
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${thresholds.low ?? 0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${thresholds.high ?? 18}" step="1" min="0" max="50"></div>
          </div>`
        return ''
      }

      function openCumulEditSheet(idx) {
        const c = cumulsList[idx]
        if (!c) return
        const qualSensors = exploitSensors.filter(s => s.parcelIds.length > 0 && CUMUL_QUALIFYING_MODELS.has(s.model))
        const plotOpts    = [...exploitPlots].sort((a,b)=>a.name.localeCompare(b.name,'fr')).map(p => `<option value="p-${p.id}"${c.subjectKey===`p-${p.id}`?' selected':''}>${plotOptLabel(p)}</option>`).join('')
        const sensorOpts  = qualSensors.map(s =>
          `<option value="s-${s.id}"${c.subjectKey===`s-${s.id}`?' selected':''}>${sensorOptLabel(s, exploitPlots)}</option>`
        ).join('')
        const avail      = getAvailableMetrics(c.subjectKey)
        const metricOpts = avail.map(m => `<option value="${m.id}"${c.metricId===m.id?' selected':''}>${m.label}</option>`).join('')

        const el = document.createElement('div')
        el.style.cssText = 'display:flex;flex-direction:column;gap:10px;padding:4px 0'
        el.innerHTML = `
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${plotOpts}</optgroup>
            ${sensorOpts ? `<optgroup label="Capteurs">${sensorOpts}</optgroup>` : ''}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${metricOpts}
          </select>
          <div id="cedit-thresholds">${buildThresholdHtml(c.metricId, c.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${c.fromDate}">
          </div>`

        el.querySelector('#cedit-subject').addEventListener('change', () => {
          const subj = el.querySelector('#cedit-subject').value
          const metSel = el.querySelector('#cedit-metric')
          const avail2 = getAvailableMetrics(subj)
          metSel.innerHTML = `<option value="">— Métrique —</option>` + avail2.map(m => `<option value="${m.id}">${m.label}</option>`).join('')
          el.querySelector('#cedit-thresholds').innerHTML = ''
        })
        el.querySelector('#cedit-metric').addEventListener('change', () => {
          el.querySelector('#cedit-thresholds').innerHTML = buildThresholdHtml(el.querySelector('#cedit-metric').value)
        })

        showSheet({
          title: 'Modifier le cumul',
          body: el,
          doneLabel: 'Enregistrer',
          onDone: () => {
            const subj   = el.querySelector('#cedit-subject').value || c.subjectKey
            const metric = el.querySelector('#cedit-metric').value  || c.metricId
            const from   = el.querySelector('#cedit-from').value    || c.fromDate
            if (!subj || !metric || !from) return
            const tooOld = (Date.now() - new Date(from)) / 86400000 > 365
            if (tooOld) { showToast('Date trop ancienne (max 365 jours)'); return }
            const m   = CUMULS_METRICS.find(x => x.id === metric)
            const cfg = CUMUL_ICONS[metric] || { icon: 'bi-bar-chart-fill', color: '#636366' }
            const subjSel = el.querySelector('#cedit-subject')
            const thresholds = metric === 'hf'
              ? { cold: +(el.querySelector('#cedit-th-cold')?.value ?? 7.2) }
              : metric === 'dj'
              ? { low: +(el.querySelector('#cedit-th-low')?.value ?? 0), high: +(el.querySelector('#cedit-th-high')?.value ?? 18) }
              : null
            cumulsList[idx] = {
              ...c,
              metricId: metric, metricLabel: m?.label || metric, unit: m?.unit || '',
              icon: cfg.icon, color: cfg.color,
              subjectKey: subj, subjectLabel: (subjSel.options[subjSel.selectedIndex]?.text || subj).trim(),
              fromDate: from,
              value: String(computeCumul(subj, from, metric) ?? '—'),
              thresholds,
            }
            persist(); rebuildCumulsWidget()
          }
        })
      }
    }
    bindCumulsEvents()

    content.querySelector('#open-chat-btn')?.addEventListener('click', showChatSheet)

    // ── Notes ─────────────────────────────────────────────────────────────────
    function rebuildNotesWidget() {
      const bd = content.querySelector('[data-widget="notes"] .m-widget-bd')
      if (bd) { bd.innerHTML = buildNotes(role); bindNotesEvents() }
    }
    let _notesPending = []
    function bindNotesEvents() {
      _notesPending = []
      const inputEl    = content.querySelector('#notes-img-input')
      const addBtnEl   = content.querySelector('#notes-img-btn')
      const previewsEl = content.querySelector('#notes-previews')
      const errEl      = content.querySelector('#notes-img-error')
      if (inputEl && addBtnEl && previewsEl && window.setupImgUpload) {
        window.setupImgUpload(inputEl, addBtnEl, previewsEl, errEl, _notesPending)
      }

      content.querySelector('#notes-add')?.addEventListener('click', async () => {
        const text   = content.querySelector('#notes-input')?.value.trim()
        const date   = content.querySelector('#notes-date')?.value || new Date().toISOString().slice(0, 10)
        const time   = content.querySelector('#notes-time')?.value || ''
        const auteur = content.querySelector('#notes-auteur')?.value || ''
        if (!text) return
        const linkVal = content.querySelector('#notes-link')?.value || ''
        let linkedType = null, linkedId = null, linkedName = ''
        if (linkVal.startsWith('p-')) {
          linkedType = 'parcel'; linkedId = +linkVal.slice(2)
          linkedName = allPlots.find(p => p.id === linkedId)?.name || ''
        } else if (linkVal.startsWith('s-')) {
          linkedType = 'sensor'; linkedId = +linkVal.slice(2)
          const s = allSensors.find(x => x.id === linkedId)
          linkedName = s ? s.serial : ''
        }
        const imageIds = []
        if (_notesPending.length && window.ImageStore) {
          for (const dataURL of _notesPending) {
            const id = `note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`
            await window.ImageStore.store(id, dataURL)
            imageIds.push(id)
          }
        }
        const notes = _loadNotes()
        notes.unshift({ date, time, text, auteur, role: 'membre', imageIds, linkedType, linkedId, linkedName })
        _saveNotes(notes)
        content.querySelector('#notes-input').value = ''
        rebuildNotesWidget()
      })

      content.querySelector('#notes-view')?.addEventListener('click', () => {
        const fmtDate = d => { const [y, m, j] = d.split('-'); return `${j}/${m}/${y}` }
        const ellipsis = t => t.length > 70 ? t.slice(0, 70) + '…' : t
        const body = document.createElement('div')

        function renderNotesList() {
          const notes = _loadNotes()
          if (!notes.length) {
            body.innerHTML = `<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>`
            return
          }
          body.innerHTML = notes.map((n, i) => {
            const photoCount = (n.imageIds || []).length
            const linkChip = n.linkedType
              ? `<span style="font-size:10px;background:${n.linkedType === 'parcel' ? '#eef4ff' : '#f0faf0'};color:${n.linkedType === 'parcel' ? '#3a7bd5' : '#2a7a3a'};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${n.linkedType === 'parcel' ? 'geo-alt' : 'broadcast'}"></i>${n.linkedName || ''}</span>`
              : ''
            return `
              <div class="m-note-card" data-idx="${i}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del m-del-btn" data-idx="${i}" style="position:absolute;top:8px;right:8px">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${fmtDate(n.date)}${n.time ? ' · ' + n.time : ''}</span>
                  ${n.auteur ? `<span style="color:#636366;font-weight:500">${n.auteur}</span>` : ''}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${ellipsis(n.text)}</div>
                ${linkChip || photoCount > 0 ? `<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${linkChip}${photoCount > 0 ? `<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${photoCount} photo${photoCount > 1 ? 's' : ''}</span>` : ''}</div>` : ''}
              </div>`
          }).join('')

          body.querySelectorAll('.m-note-del').forEach(btn => {
            btn.addEventListener('click', async e => {
              e.stopPropagation()
              const notes = _loadNotes()
              const idx = +btn.dataset.idx
              const removed = notes[idx]
              if (removed?.imageIds?.length && window.ImageStore) await window.ImageStore.remove(removed.imageIds)
              notes.splice(idx, 1)
              _saveNotes(notes)
              renderNotesList()
              rebuildNotesWidget()
            })
          })
          body.querySelectorAll('.m-note-card').forEach(card => {
            card.addEventListener('click', async () => {
              const notes = _loadNotes()
              const n = notes[+card.dataset.idx]
              if (!n) return
              const detailLinkChip = n.linkedType
                ? `<span style="font-size:11px;background:${n.linkedType === 'parcel' ? '#eef4ff' : '#f0faf0'};color:${n.linkedType === 'parcel' ? '#3a7bd5' : '#2a7a3a'};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${n.linkedType === 'parcel' ? 'geo-alt' : 'broadcast'}"></i>${n.linkedName || ''}</span>`
                : ''
              const el = document.createElement('div')
              el.innerHTML = `
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${fmtDate(n.date)}${n.time ? ' · ' + n.time : ''}</span>
                  ${n.auteur ? `<span style="color:#636366;font-weight:500">${n.auteur}</span>` : ''}
                  ${detailLinkChip}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${n.text}</div>
                ${(n.imageIds || []).length ? `<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>` : ''}`
              showSheet({ title: 'Note', body: el, doneLabel: 'Fermer', onDone: () => {} })
              if ((n.imageIds || []).length && window.ImageStore) {
                const photosEl = el.querySelector('#note-detail-photos')
                for (const id of n.imageIds) {
                  const dataURL = await window.ImageStore.get(id)
                  if (!dataURL) continue
                  const wrap = document.createElement('div'); wrap.className = 'jrn-img-thumb-wrap'
                  const img = document.createElement('img'); img.className = 'jrn-img-thumb'; img.src = dataURL; img.alt = ''
                  img.addEventListener('click', () => { if (window.openLightbox) window.openLightbox(dataURL) })
                  wrap.appendChild(img); photosEl.appendChild(wrap)
                }
              }
            })
          })
        }

        renderNotesList()
        showSheet({ title: 'Notes', body, doneLabel: 'Fermer', onDone: () => {} })
      })

      // Bind inline list (5 dernières)
      const fmtDateInline = d => { const [y, m, j] = d.split('-'); return `${j}/${m}/${y}` }
      content.querySelectorAll('#notes-list .m-note-del').forEach(btn => {
        btn.addEventListener('click', async e => {
          e.stopPropagation()
          const notes = _loadNotes()
          const idx = +btn.dataset.idx
          const removed = notes[idx]
          if (removed?.imageIds?.length && window.ImageStore) await window.ImageStore.remove(removed.imageIds)
          notes.splice(idx, 1)
          _saveNotes(notes)
          rebuildNotesWidget()
        })
      })
      content.querySelectorAll('#notes-list .m-note-card').forEach(card => {
        card.addEventListener('click', async () => {
          const notes = _loadNotes()
          const n = notes[+card.dataset.idx]
          if (!n) return
          const detailLinkChip = n.linkedType
            ? `<span style="font-size:11px;background:${n.linkedType === 'parcel' ? '#eef4ff' : '#f0faf0'};color:${n.linkedType === 'parcel' ? '#3a7bd5' : '#2a7a3a'};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${n.linkedType === 'parcel' ? 'geo-alt' : 'broadcast'}"></i>${n.linkedName || ''}</span>`
            : ''
          const el = document.createElement('div')
          el.innerHTML = `
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${fmtDateInline(n.date)}${n.time ? ' · ' + n.time : ''}</span>
              ${n.auteur ? `<span style="color:#636366;font-weight:500">${n.auteur}</span>` : ''}
              ${detailLinkChip}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${n.text}</div>
            ${(n.imageIds || []).length ? `<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>` : ''}`
          showSheet({ title: 'Note', body: el, doneLabel: 'Fermer', onDone: () => {} })
          if ((n.imageIds || []).length && window.ImageStore) {
            const photosEl = el.querySelector('#note-detail-photos')
            for (const id of n.imageIds) {
              const dataURL = await window.ImageStore.get(id)
              if (!dataURL) continue
              const wrap = document.createElement('div'); wrap.className = 'jrn-img-thumb-wrap'
              const img = document.createElement('img'); img.className = 'jrn-img-thumb'; img.src = dataURL; img.alt = ''
              img.addEventListener('click', () => { if (window.openLightbox) window.openLightbox(dataURL) })
              wrap.appendChild(img); photosEl.appendChild(wrap)
            }
          }
        })
      })
    }
    bindNotesEvents()

    // ── Mesures ───────────────────────────────────────────────────────────────
    function bindChartTooltips() {
      content.querySelectorAll('.m-tr-chart-wrap').forEach(wrap => {
        const cursor = wrap.querySelector('.m-tr-cursor')
        const tip    = wrap.querySelector('.m-tr-tooltip')
        if (!tip) return
        const data  = JSON.parse(wrap.dataset.series || '[]')
        const unit  = wrap.dataset.unit || ''
        const count = data.length
        const PL = 26, W = 270
        wrap.addEventListener('pointermove', e => {
          const rect = wrap.getBoundingClientRect()
          const frac = Math.max(0, Math.min(((e.clientX - rect.left) * (PL + W) / rect.width - PL) / W, 1))
          const val  = data[Math.round(frac * (count - 1))] ?? null
          if (cursor) { const x = PL + Math.round(frac * W); cursor.setAttribute('x1', x); cursor.setAttribute('x2', x); cursor.setAttribute('opacity', '1') }
          tip.style.display = ''
          tip.style.left    = `${Math.max(0, Math.min(e.clientX - rect.left - 24, rect.width - 60))}px`
          tip.textContent   = val !== null ? `${(+val).toFixed(1)} ${unit}` : '—'
        })
        wrap.addEventListener('pointerleave', () => { tip.style.display = 'none'; cursor?.setAttribute('opacity', '0') })
      })
    }
    function rebuildMesuresWidget() {
      const bd = content.querySelector('[data-widget="temps_reel"] .m-widget-bd')
      if (bd) { bd.innerHTML = buildMesures(exploitPlots, exploitSensors); bindMesuresEvents() }
    }
    _refreshMesuresWidget = rebuildMesuresWidget
    function bindMesuresEvents() {
      const checkMsrCreate = () => {
        const btn = content.querySelector('#msr-create')
        if (btn) btn.disabled = !content.querySelector('#msr-subject')?.value
                             || !content.querySelector('#msr-metric')?.value
                             || mesuresList.length >= WF_MAX
      }
      const updateMsrMetrics = () => {
        const sel  = content.querySelector('#msr-metric')
        const subj = content.querySelector('#msr-subject')?.value
        if (!sel) return
        const avail = msrGetMetrics(subj, exploitSensors)
        sel.innerHTML = `<option value="">— Métrique —</option>` +
          avail.map(id => `<option value="${id}">${TR_ALL_METRICS[id]}</option>`).join('')
        sel.disabled = !subj || !avail.length
        checkMsrCreate()
      }
      const updateMsrSteps = () => {
        const sel   = content.querySelector('#msr-step')
        const period = content.querySelector('#msr-period')?.value || '7d'
        if (!sel) return
        sel.innerHTML = msrStepOpts(period).map(s => `<option value="${s.id}">${s.label}</option>`).join('')
        checkMsrCreate()
      }
      content.querySelector('#msr-subject')?.addEventListener('change', () => { updateMsrMetrics(); checkMsrCreate() })
      content.querySelector('#msr-period')?.addEventListener('change', () => { updateMsrSteps(); checkMsrCreate() })
      content.querySelector('#msr-metric')?.addEventListener('change', checkMsrCreate)
      content.querySelector('#msr-step')?.addEventListener('change', checkMsrCreate)
      content.querySelector('#msr-create')?.addEventListener('click', () => {
        const subjSel   = content.querySelector('#msr-subject')
        const metricSel = content.querySelector('#msr-metric')
        const periodSel = content.querySelector('#msr-period')
        const stepSel   = content.querySelector('#msr-step')
        const subj = subjSel?.value, metric = metricSel?.value
        const period = periodSel?.value, step = stepSel?.value
        if (!subj || !metric || !period || !step) return
        mesuresList.push({
          subjectKey:   subj,
          subjectLabel: (subjSel.options[subjSel.selectedIndex]?.text || subj).trim(),
          metricId:     metric,
          metricLabel:  TR_ALL_METRICS[metric] || metric,
          unit:         TR_UNITS[metric] || '',
          period,
          periodLabel:  (periodSel.options[periodSel.selectedIndex]?.text || period).trim(),
          step,
          stepLabel:    (stepSel.options[stepSel.selectedIndex]?.text || step).trim(),
          color:        TR_COLORS[metric] || WF_COLORS[mesuresList.length % WF_COLORS.length],
        })
        persist(); rebuildMesuresWidget()
      })
      content.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(btn => {
        btn.addEventListener('click', () => {
          mesuresList.splice(+btn.dataset.idx, 1); persist(); rebuildMesuresWidget()
        })
      })
      content.querySelectorAll('.m-wf-view-data').forEach(btn => {
        btn.addEventListener('click', () => {
          const metricId = btn.dataset.metricId || null
          if (btn.dataset.sensorId) {
            const sid = +btn.dataset.sensorId
            const s = allSensors.find(x => x.id === sid)
            if (s) import('./chart-fullscreen.js').then(m => m.initChartFullscreen({ sensor: s, metricId, backLabel: s.model + ' ' + s.serial }))
          } else if (btn.dataset.parcelId) {
            const pid = +btn.dataset.parcelId
            const p = exploitPlots.find(x => x.id === pid)
            const linked = allSensors.filter(s => s.parcelIds?.includes(pid)).map(s => s.id)
            if (p) import('./chart-fullscreen.js').then(m => m.initChartFullscreen({ parcel: p, linkedSensorIds: linked, metricId, backLabel: p.name }))
          }
        })
      })
      bindChartTooltips()
    }
    bindMesuresEvents()

    content.querySelectorAll('.m-prev-card').forEach(card => {
      card.addEventListener('click', () => {
        const locLabel = content.querySelector('.m-prev-select')?.selectedOptions[0]?.text || ''
        openDayDetail(forecast, +card.dataset.day, locLabel)
      })
    })

    const expandBtn = content.querySelector('.m-prev-expand-btn')
    if (expandBtn) {
      expandBtn.addEventListener('click', () => {
        const locLabel = content.querySelector('.m-prev-select')?.selectedOptions[0]?.text || ''
        openDayDetail(forecast, 3, locLabel)
      })
    }

    content.querySelectorAll('.m-widget-menu').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const w = CATALOG.find(x => x.id === btn.dataset.widget); if (!w) return
        const body = document.createElement('div')
        const isBH = w.id === 'bilan_hydrique'
        const sensorlessOn = _loadDash().sensorlessEnabled ?? true
        body.innerHTML = `
          <div class="m-sheet-links">
            ${isBH ? `<a class="m-sheet-link" id="menu-sensorless">${sensorlessOn ? 'Désactiver' : 'Activer'} réservoir sensorless</a>` : ''}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`
        const sheet = showSheet({ title: w.title, body, doneLabel: 'Fermer', onDone: () => {} })
        body.querySelector('#menu-sensorless')?.addEventListener('click', () => {
          _saveDash({ sensorlessEnabled: !sensorlessOn })
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => {
            sheet.remove()
            const bd = content.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd')
            if (bd) { bd.innerHTML = orgSelectorHTML() + buildBilanHydrique(getBhPlots()); bindBhPlotLinks(); bindBhButtons(); bindBhExpand(); if (role === 'admin') bindBhOrgSelect() }
          }, 280)
        })
        body.querySelector('#menu-move').addEventListener('click', () => {
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => { sheet.remove(); showReorderSheet() }, 280)
        })
        body.querySelector('#menu-remove').addEventListener('click', () => {
          w.active = false
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => { sheet.remove(); persist(); render() }, 280)
          showToast('Widget retiré')
        })
      })
    })
  }

  function showReorderSheet() {
    const body = document.createElement('div')
    const custom = () => CATALOG.filter(w => w.active && !w.fixed)
    const refresh = () => {
      const list = custom()
      body.innerHTML = list.map((w, i) => `
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${w.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${i}" data-dir="-1" ${i === 0 ? 'disabled' : ''} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${i}" data-dir="1" ${i === list.length - 1 ? 'disabled' : ''} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join('')
      body.querySelectorAll('.m-reorder-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => {
          const list2 = custom()
          const i = +btn.dataset.i, j = i + +btn.dataset.dir
          const ai = CATALOG.indexOf(list2[i]), aj = CATALOG.indexOf(list2[j])
          ;[CATALOG[ai], CATALOG[aj]] = [CATALOG[aj], CATALOG[ai]]
          persist(); refresh(); render()
        })
      })
    }
    refresh()
    showSheet({ title: 'Réorganiser les widgets', body, doneLabel: 'Fermer', onDone: () => {} })
  }

  function showAddPage() {
    const isAdmin = role === 'admin'
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
        <div style="padding:12px 16px">
          <div class="m-add-section-label">Mon exploitation</div>
          <div class="m-add-list">
            ${[
              { action:'parcelle',            icon:'bi-geo-alt',         label:'Parcelle' },
              { action:'capteur',             icon:'bi-broadcast',       label:'Capteur' },
              { action:'station',             icon:'bi-cloud-sun',       label:'Station météo virtuelle' },
              { action:'membre',              icon:'bi-person-plus',     label:'Membre' },
              { action:'irrigation',          icon:'bi-droplet',         label:'Irrigation' },
              { action:'strategie-irrigation',icon:'bi-arrow-repeat',    label:"Saison d'irrigation" },
              { action:'note',                icon:'bi-pencil-square',   label:'Note' },
              { action:'traitement',          icon:'bi-eyedropper',      label:'Traitement' },
              { action:'maintenance',         icon:'bi-tools',           label:'Opération de maintenance' },
            ].map(it => `
              <button class="m-add-item" data-action="${it.action}">
                <i class="bi ${it.icon}"></i>
                <span>${it.label}</span>
              </button>`).join('')}
          </div>
          ${isAdmin ? `
          <div class="m-add-section-label" style="margin-top:16px">Mon réseau</div>
          <div class="m-add-list">
            <button class="m-add-item" data-action="adherent">
              <i class="bi bi-building"></i>
              <span>Adhérent</span>
            </button>
          </div>` : ''}
          <div class="m-add-section-label" style="margin-top:16px">Mon compte</div>
          <div class="m-add-list">
            <button class="m-add-item" data-action="alerte">
              <i class="bi bi-bell"></i>
              <span>Alerte</span>
            </button>
          </div>
        </div>
      </div>`)

    layer.querySelector('.m-detail-back').addEventListener('click', popDetail)
    layer.querySelectorAll('.m-add-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action
        if (action === 'irrigation') {
          popDetail()
          import('./irrigation.js').then(m => m.openIrrigationSaisie(exploitPlots, showToast))
        } else if (action === 'strategie-irrigation') {
          popDetail()
          import('./irrigation.js').then(m => m.openIrrigationStrategie(exploitPlots, showToast))
        } else {
          showToast('Fonctionnalité à venir')
        }
      })
    })
  }

  function showCatalog() {
    const body = document.createElement('div')
    const refresh = () => {
      const editable = CATALOG.filter(w => !w.fixed)
      body.innerHTML = editable.map(w => `
        <div class="m-catalog-row${!w.available ? ' m-catalog-row--soon' : ''}">
          <div class="m-catalog-icon" style="background:${w.color}20;color:${w.color}"><i class="bi ${w.icon}"></i></div>
          <span class="m-catalog-title">${w.title}</span>
          ${!w.available
            ? `<span class="m-catalog-soon">Bientôt</span>`
            : `<button class="m-catalog-toggle${w.active ? ' m-catalog-toggle--on' : ''}" data-cid="${w.id}" type="button">
                <i class="bi ${w.active ? 'bi-check-circle-fill' : 'bi-plus-circle'}"></i>
              </button>`}
        </div>`).join('')
      body.querySelectorAll('[data-cid]').forEach(btn => {
        btn.addEventListener('click', () => {
          const w = CATALOG.find(x => x.id === btn.dataset.cid); if (!w) return
          w.active = !w.active; persist(); refresh(); render()
        })
      })
    }
    refresh()
    showSheet({ title: 'Widgets disponibles', body, doneLabel: 'Fermer', onDone: () => {} })
  }

  window.addEventListener('storage', e => {
    if (e.key !== 'weenat_proto_store') return
    applyStoredPlotPatches(allPlots)
    const bd = content.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd')
    if (bd) {
      bd.innerHTML = orgSelectorHTML() + buildBilanHydrique(getBhPlots())
      bindBhPlotLinks(); bindBhButtons(); bindBhExpand()
      if (role === 'admin') bindBhOrgSelect()
    }
  })

  window.showMobileAddPage = showAddPage
  render()
}
