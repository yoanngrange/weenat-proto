// Parcel detail page — full-featured, persisted via localStorage store
import { plots } from '../data/plots.js'
import { sensors as allSensors } from '../data/sensors.js'
import { orgs } from '../data/orgs.js'
import { members } from '../data/members.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { getParcel, patchParcel, addCumulFavori } from '../data/store.js'
import { IRRIG_SEASON, saveIrrig, generateSeasonId } from '../data/irrigations.js'
import { IRRIG_TYPES, SOIL_TYPES, SOIL_ANALYSIS_OPTION, ENV_TYPES } from '../data/constants.js'

const urlParams = new URLSearchParams(window.location.search)
const parcelId  = parseInt(urlParams.get('id'))
const parcelBase = plots.find(p => p.id === parcelId)

// ─── Helpers ──────────────────────────────────────────────────────────────────

function rnd(min, max)  { return Math.floor(Math.random() * (max - min + 1)) + min }
function rndf(min, max) { return parseFloat((Math.random() * (max - min) + min).toFixed(2)) }

// ─── Metric definitions ───────────────────────────────────────────────────────

// Always-available on every parcel (derived from closest weather station)
const ALWAYS_METRICS = [
  { id: 'etp',        name: 'Évapotranspiration (ETP)',  unit: 'mm/j', color: '#7DBDD7', base: () => rndf(0.5, 5),   cumul: { label: 'Cumul d\'ETP',    unit: 'mm'  }, isCumul: false, chartType: 'bar' },
  { id: 'rayonnement',name: 'Rayonnement',               unit: 'W/m²', color: '#CBCB0B', base: () => rnd(0, 900),    cumul: { label: 'Énergie',      unit: 'Wh/m²' }, isCumul: false },
  { id: 'temp_rosee', name: 'Température de rosée',      unit: '°C',   color: '#72B0D8', base: () => rnd(2, 16),     isCumul: false },
]

const IRRIGATION_METRIC = { id: 'irrigation', name: 'Irrigation', unit: 'mm', color: '#FF8C00', base: () => 0, isCumul: true, chartType: 'bar', isIrrigation: true }

const METRICS_BY_MODEL = {
  'P+':       [
    { id: 'pluie',    name: 'Pluie',        unit: 'mm',  color: '#2E75B6', base: () => rnd(0, 8),   cumul: { label: 'Cumul de pluie', unit: 'mm' }, isCumul: true, chartType: 'bar' },
    { id: 'temp',     name: 'Température',  unit: '°C',  color: '#FBAF05', base: () => rnd(10, 28), cumul: { label: 'Cumul de degrés jour', unit: 'DJ' } },
    { id: 'humidite', name: 'Humidité',     unit: '%',   color: '#5B12A4', base: () => rnd(40, 90) },
  ],
  'PT': [
    { id: 'pluie', name: 'Pluie',       unit: 'mm',  color: '#2E75B6', base: () => rnd(0, 8), cumul: { label: 'Cumul de pluie', unit: 'mm' }, isCumul: true,  chartType: 'bar' },
    { id: 'temp',  name: 'Température', unit: '°C',  color: '#FBAF05', base: () => rnd(10, 28), cumul: { label: 'Cumul de degrés jour', unit: 'DJ' } },
    { id: 'etp',   name: 'Évapotranspiration (ETP)', unit: 'mm/j', color: '#7DBDD7', base: () => rndf(0.5, 5), cumul: { label: 'Cumul ETP', unit: 'mm' }, isCumul: false, chartType: 'bar' },
  ],
  'P': [
    { id: 'pluie', name: 'Pluie', unit: 'mm', color: '#2E75B6', base: () => rnd(0, 8), cumul: { label: 'Cumul de pluie', unit: 'mm' }, isCumul: true, chartType: 'bar' },
  ],
  'SMV': [
    { id: 'pluie',    name: 'Pluie',        unit: 'mm',  color: '#2E75B6', base: () => rnd(0, 8),   cumul: { label: 'Cumul de pluie', unit: 'mm' }, isCumul: true, chartType: 'bar' },
    { id: 'temp',     name: 'Température',  unit: '°C',  color: '#FBAF05', base: () => rnd(10, 28), cumul: { label: 'Cumul de degrés jour', unit: 'DJ' } },
    { id: 'humidite', name: 'Humidité',     unit: '%',   color: '#5B12A4', base: () => rnd(40, 90) },
    { id: 'etp',      name: 'Évapotranspiration (ETP)', unit: 'mm/j', color: '#7DBDD7', base: () => rndf(0.5, 5), cumul: { label: 'Cumul ETP', unit: 'mm' }, isCumul: false, chartType: 'bar' },
  ],
  'TH': [
    { id: 'temp',     name: 'Température',  unit: '°C', color: '#FBAF05', base: () => rnd(10, 28), cumul: { label: 'Cumul de degrés jour', unit: 'DJ' } },
    { id: 'humidite', name: 'Humidité', unit: '%',  color: '#5B12A4', base: () => rnd(40, 90) },
  ],
  'CHP-15/30': [
    { id: 'pothydr', name: 'Potentiel hydrique', unit: 'kPa', color: '#A6C157', base: () => rnd(10, 150) },
    { id: 'tsol',    name: 'Température du sol',          unit: '°C',  color: '#795548', base: () => rnd(8, 22)   },
  ],
  'CHP-30/60': [
    { id: 'pothydr', name: 'Potentiel hydrique', unit: 'kPa', color: '#A6C157', base: () => rnd(10, 150) },
    { id: 'tsol',    name: 'Température du sol',          unit: '°C',  color: '#795548', base: () => rnd(8, 22)   },
  ],
  'CHP-60/90': [
    { id: 'pothydr', name: 'Potentiel hydrique', unit: 'kPa', color: '#A6C157', base: () => rnd(10, 150) },
    { id: 'tsol',    name: 'Température du sol',          unit: '°C',  color: '#795548', base: () => rnd(8, 22)   },
  ],
  'CAPA-30-3': [
    { id: 'vwc10', name: 'Teneur en eau du sol 10 cm', unit: '%vol', color: '#105200', base: () => rnd(15, 45) },
    { id: 'vwc20', name: 'Teneur en eau du sol 20 cm', unit: '%vol', color: '#8C5E82', base: () => rnd(15, 45) },
    { id: 'vwc30', name: 'Teneur en eau du sol 30 cm', unit: '%vol', color: '#46DA82', base: () => rnd(15, 45) },
    { id: 'tsol',  name: 'Température du sol',      unit: '°C',   color: '#795548', base: () => rnd(8, 22)  },
  ],
  'CAPA-60-6': [
    { id: 'vwc10', name: 'Teneur en eau du sol 10 cm', unit: '%vol', color: '#105200', base: () => rnd(15, 45) },
    { id: 'vwc20', name: 'Teneur en eau du sol 20 cm', unit: '%vol', color: '#8C5E82', base: () => rnd(15, 45) },
    { id: 'vwc30', name: 'Teneur en eau du sol 30 cm', unit: '%vol', color: '#46DA82', base: () => rnd(15, 45) },
    { id: 'vwc40', name: 'Teneur en eau du sol 40 cm', unit: '%vol', color: '#949494', base: () => rnd(17, 43) },
    { id: 'vwc50', name: 'Teneur en eau du sol 50 cm', unit: '%vol', color: '#870021', base: () => rnd(18, 42) },
    { id: 'vwc60', name: 'Teneur en eau du sol 60 cm', unit: '%vol', color: '#F608C2', base: () => rnd(18, 42) },
    { id: 'tsol',  name: 'Température du sol',      unit: '°C',   color: '#795548', base: () => rnd(8, 22)  },
  ],
  'T_MINI': [
    { id: 'tsol', name: 'Température du sol', unit: '°C', color: '#795548', base: () => rnd(8, 22) },
  ],
  'LWS': [
    { id: 'humec', name: 'Humectation foliaire', unit: 'h', color: '#00887E', base: () => rnd(0, 12) },
  ],
  'T_GEL': [
    { id: 'tseche',  name: 'Temp. sèche',  unit: '°C', color: '#23B19B', base: () => rnd(-2, 12) },
    { id: 'thumide', name: 'Temp. humide', unit: '°C', color: '#5E88EC', base: () => rnd(-4, 10) },
  ],
  'W': [
    { id: '_vent', name: 'Vent', unit: 'km/h · direction', color: '#7bc4b0', isWindComposite: true, base: () => rnd(0, 40) },
  ],
  'EC': [
    { id: 'ec',   name: 'Conductivité', unit: 'mS/cm', color: '#f0a030', base: () => rndf(0.1, 3) },
    { id: 'tsol', name: 'Température du sol',    unit: '°C',    color: '#bb8fce', base: () => rnd(8, 22) },
  ],
  'PYRANO': [
    { id: 'rayonnement', name: 'Rayonnement', unit: 'W/m²', color: '#f5c842', base: () => rnd(0, 900), cumul: { label: 'Énergie', unit: 'Wh/m²' } },
  ],
  'PAR': [
    { id: 'par', name: 'Densité de flux de photons photosynthétiques', unit: 'µmol/m²/s', color: '#c47a00', base: () => rnd(0, 2000) },
  ],
}

// CHP tensiometers: multiple can coexist on the same parcel — skip conflict check
const TENSIO_MODELS = ['CHP-15/30', 'CHP-30/60', 'CHP-60/90']

// Soil sensor groups: mutually exclusive (you can't mix these categories on one parcel)
const SOIL_GROUPS = [
  { name: 'Tensiomètre (CHP)', models: new Set(['CHP-15/30', 'CHP-30/60', 'CHP-60/90']) },
  { name: 'Sonde capacitive (CAPA)', models: new Set(['CAPA-30-3', 'CAPA-60-6']) },
  { name: 'Sonde fertirrigation (EC)', models: new Set(['EC']) },
  { name: 'Thermomètre de sol (T_MINI)', models: new Set(['T_MINI']) },
]

function getSoilGroup(model) {
  return SOIL_GROUPS.find(g => g.models.has(model)) || null
}

// CAPA horizon definitions (per model) — used for multi-curve charts (VWC and Tsol)
const CAPA_HORIZONS_PARCEL = {
  'CAPA-30-3': [
    { depth: 10, label: '10 cm', vwcColor: '#105200', tsolColor: '#FFA040' },
    { depth: 20, label: '20 cm', vwcColor: '#8C5E82', tsolColor: '#E07050' },
    { depth: 30, label: '30 cm', vwcColor: '#46DA82', tsolColor: '#A04030' },
  ],
  'CAPA-60-6': [
    { depth: 10, label: '10 cm', vwcColor: '#105200', tsolColor: '#FFA040' },
    { depth: 20, label: '20 cm', vwcColor: '#8C5E82', tsolColor: '#E07050' },
    { depth: 30, label: '30 cm', vwcColor: '#46DA82', tsolColor: '#A04030' },
    { depth: 40, label: '40 cm', vwcColor: '#949494', tsolColor: '#804828' },
    { depth: 50, label: '50 cm', vwcColor: '#870021', tsolColor: '#603818' },
    { depth: 60, label: '60 cm', vwcColor: '#F608C2', tsolColor: '#402810' },
  ],
}
const CAPA_MODELS = ['CAPA-30-3', 'CAPA-60-6']

const MODEL_NAMES = {
  'P+': 'Station météo', 'PT': 'Station météo', 'P': 'Pluviomètre',
  'SMV': 'Station météo virtuelle', 'TH': 'Thermomètre-hygromètre', 'T_MINI': 'Thermomètre de sol',
  'W': 'Anémomètre', 'PYRANO': 'Pyranomètre', 'PAR': 'Capteur PAR',
  'LWS': "Capteur d'humectation foliaire", 'T_GEL': 'Capteur de gel',
  'CHP-15/30': 'Tensiomètre', 'CHP-30/60': 'Tensiomètre', 'CHP-60/90': 'Tensiomètre',
  'CAPA-30-3': 'Sonde capacitive', 'CAPA-60-6': 'Sonde capacitive', 'EC': 'Sonde de fertirrigation',
}

function renderWindCompositeChart(container, source = null, emissionMins = null, cardKey = null) {
  const count   = Math.max(2, Math.min(200, Math.floor(getPeriodMinutes() / getStepMinutes())))
  const vitesse = Array.from({length: count}, () => rnd(5, 35))
  const rafales = vitesse.map(v => Math.min(v + rnd(3, 18), 80))
  const dirs    = Array.from({length: count}, () => rnd(0, 359))

  const W = 600, H = 200, PL = 46, PR = 16, PT = 16, PB = 28
  const iW = W - PL - PR, iH = H - PT - PB
  const maxV = Math.ceil(Math.max(...rafales) / 10) * 10 || 50
  const xOf = i => PL + (i / Math.max(count - 1, 1)) * iW
  const yOf = v => PT + iH - (v / maxV) * iH

  const upper  = rafales.map((v, i) => `${xOf(i).toFixed(1)},${yOf(v).toFixed(1)}`).join('L')
  const lower  = [...vitesse].reverse().map((v, i) => `${xOf(count-1-i).toFixed(1)},${yOf(v).toFixed(1)}`).join('L')
  const area   = `M${upper}L${lower}Z`
  const curve  = vitesse.map((v, i) => `${i?'L':'M'}${xOf(i).toFixed(1)},${yOf(v).toFixed(1)}`).join('')
  const grid   = [0.25,0.5,0.75].map(t => { const y=(PT+iH-t*iH).toFixed(1); return `<line x1="${PL}" y1="${y}" x2="${W-PR}" y2="${y}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>` }).join('')
  const yLbls  = [0,0.5,1].map(t => { const y=PT+iH-t*iH; return `<text x="${PL-4}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(t*maxV)}</text>` }).join('')

  // X-axis baseline + labels
  const xBaseline = `<line x1="${PL}" y1="${PT+iH}" x2="${W-PR}" y2="${PT+iH}" stroke="var(--bdr2)" stroke-width="1"/>`
  const labelStep = Math.max(1, Math.floor(count / 6))
  let xLbls = ''
  for (let i = 0; i < count; i += labelStep) {
    const minsAgo = (count - 1 - i) / Math.max(count - 1, 1) * getPeriodMinutes()
    xLbls += `<text x="${xOf(i).toFixed(1)}" y="${(PT+iH+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${xLabel(minsAgo)}</text>`
  }

  const every  = Math.max(1, Math.round(count / 25))
  const arrows = []
  for (let i = 0; i < count; i += every) {
    const x = xOf(i).toFixed(1), y = (PT + iH * 0.35).toFixed(1)
    arrows.push(`<g transform="translate(${x},${y}) rotate(${dirs[i]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)
  }

  const card = document.createElement('div')
  card.className = 'chart-card'
  if (cardKey) { card.dataset.cardKey = cardKey; card.draggable = true }
  const sourceHtml = source ? `<span class="chart-card-source">${source}</span>` : ''
  const emHtml = emissionMins != null ? `<span class="chart-card-emission">il y a ${emissionMins} min</span>` : ''
  card.innerHTML = `
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
      <div class="chart-card-meta">${sourceHtml}${emHtml}</div>
    </div>
    <svg width="100%" height="${H}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
      ${yLbls}${grid}${xBaseline}${xLbls}
      <path d="${area}" fill="#7bc4b0" opacity=".18"/>
      <path d="${curve}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${arrows.join('')}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`
  container.appendChild(card)
}

const ALL_INTEGRATIONS = [
  'Modèles Arvalis — PRÉVI-LIS / MILÉOS', 'Xarvio', 'Pixagri', 'VitiMeteo',
  'Rimpro', 'Cropwise Protector', 'IRRÉ-LIS Mono-Culture',
  'Movida GrapeVision', 'DeciTrait',
]

// ─── State ────────────────────────────────────────────────────────────────────

let parcelState = {}

function initState() {
  const stored = getParcel(parcelId)
  parcelState = { ...parcelBase, ...stored }

  if (!parcelState.linkedSensorIds) {
    const defaults = allSensors.filter(s => s.parcelIds.includes(parcelId)).map(s => s.id)
    parcelState.linkedSensorIds = stored.linkedSensorIds ?? defaults
  }
  if (!parcelState.integrations) {
    parcelState.integrations = [...(parcelBase.integrations || [])]
  }
  if (!parcelState.alertes) {
    parcelState.alertes = []
  }

  // Resolve soil exclusivity conflicts from saved state: keep only the first group found
  const linked = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  const firstGroup = SOIL_GROUPS.find(g => linked.some(s => g.models.has(s.model)))
  if (firstGroup) {
    const hasConflict = SOIL_GROUPS.some(g => g !== firstGroup && linked.some(s => g.models.has(s.model)))
    if (hasConflict) {
      parcelState.linkedSensorIds = parcelState.linkedSensorIds.filter(sid => {
        const s = allSensors.find(x => x.id === sid)
        if (!s) return true
        const g = getSoilGroup(s.model)
        return !g || g === firstGroup
      })
      patchParcel(parcelId, { linkedSensorIds: parcelState.linkedSensorIds })
    }
  }
}

function saveState(patch) {
  Object.assign(parcelState, patch)
  Object.assign(parcelBase, patch)
  patchParcel(parcelId, patch)
}

// ─── Period / step state ──────────────────────────────────────────────────────

let currentPeriod = 'j7j2'
let customFrom = null
let customTo   = null

// Métriques pour lesquelles les prévisions affichent des courbes/données
// (les autres métriques n'affichent que le hachurage de la zone future)
const FORECAST_METRICS = new Set(['pluie', 'temp', 'humidite', 'pothydr', 'etp', 'temp_rosee', 'rayonnement', '_vent'])

// Horizon de prévisions (en jours) selon la période sélectionnée
const PERIOD_FC_DAYS = { j7j2: 2 }

function getPeriodMinutes() {
  const table = { '1d': 1440, 'hier': 1440, '3d': 4320, '7d': 10080, 'j7j2': 10080, '30d': 43200, '365d': 525600 }
  if (currentPeriod === 'custom' && customFrom && customTo) {
    return Math.max(60, Math.round((customTo - customFrom) / 60000))
  }
  return table[currentPeriod] ?? 10080
}

function getStepMinutes() {
  const step = document.getElementById('time-step')?.value || '1h'
  return { max: 15, '1h': 60, '1d': 1440, '1w': 10080, '1mo': 43200 }[step] ?? 60
}

function getDefaultStep(period) {
  if (period === '365d') return '1mo'
  if (period === '30d')  return '1w'
  if (period === '7d')   return '1d'
  if (period === 'j7j2') return '1d'
  return '1h'
}

function getDisplayCount() {
  const total = getPeriodMinutes()
  const step  = getStepMinutes()
  return Math.max(2, Math.min(200, Math.floor(total / step)))
}

// Nombre de pas de temps réservés à la zone "prévisions" pour la période courante
function getHatchCount() {
  const periodFcDays = PERIOD_FC_DAYS[currentPeriod] || 0
  if (!periodFcDays) return 0
  const step = getStepMinutes()
  return Math.max(1, Math.round((periodFcDays * 1440) / step))
}

// ─── Widget catalog ───────────────────────────────────────────────────────────

// Catalog item name → widget ID
const CATALOG_ITEM_ID = {
  'Cumuls': 'cumuls', 'Pluie': 'pluie-hist', 'Évapotranspiration': 'etp-hist',
  "Maï'zy": 'maizy', 'Suivi de culture': 'suivi-culture', 'Traitements': 'weephyt',
  'Decitrait': 'decitrait', 'Tavelure Pomme': 'tavelure',
  'DPV': 'dpv', 'THI': 'thi', 'Température de rosée': 'temp-rosee',
  'Température du sol': 'temp-sol', 'Rayonnement solaire': 'w-pyrano', 'Gel': 'gel',
  'Prévisions à 5 jours': 'previsions-5j', 'Prévisions à 6 heures': 'previsions-6h',
  'Prévisions du jour': 'previsions-jour', 'Prévisions de tensiométrie': 'previsions-tensio',
  'Anémomètre': 'w-anem', "Capteur d'humectation foliaire": 'w-lws',
  'Capteur PAR': 'w-par', 'Pyranomètre': 'w-pyrano', 'Station météo': 'w-station',
  'Station Météo Virtuelle': 'w-station', 'Thermomètre de sol': 'w-tsol', 'Thermomètre-Hygromètre': 'w-thygro',
  'Bilan hydrique': 'bilan', 'Irrigations': 'irrigations',
  'Sonde capacitive': 'w-capa', 'Tensiomètre': 'w-tensio', 'Sonde de fertirrigation': 'w-ec',
  'Profil capteurs': 'profil-capteurs', 'Niveau de réservoir en eau utilisable': 'niveau-reservoir',
  'Profil de niveau de réservoir': 'profil-reservoir',
}

const WIDGET_CATALOG_WEB = [
  { title: 'Cumuls', items: ['Cumuls', 'Pluie', 'Évapotranspiration'] },
  { title: 'Outils aide à la décision', items: ["Maï'zy",'Suivi de culture','Traitements','Decitrait','Tavelure Pomme'] },
  { title: 'Indicateurs', items: ['DPV','THI','Température de rosée','Température du sol','Rayonnement solaire','Gel'] },
  { title: 'Prévisions', items: ['Prévisions à 5 jours','Prévisions à 6 heures','Prévisions du jour','Prévisions de tensiométrie'] },
  { title: 'Irrigation', items: ['Bilan hydrique','Irrigations','Sonde capacitive','Tensiomètre','Sonde de fertirrigation','Profil capteurs','Niveau de réservoir en eau utilisable','Profil de niveau de réservoir'] },
  { title: 'Capteurs', items: ['Anémomètre',"Capteur d'humectation foliaire",'Capteur PAR','Pyranomètre','Station météo','Station Météo Virtuelle','Thermomètre de sol','Thermomètre-Hygromètre'] },
]

function openWebWidgetCatalog() {
  const linked   = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  const models   = new Set(linked.map(s => s.model))
  const crop     = (parcelState.crop || parcelBase.crop || '').toLowerCase()
  const active   = getActiveWidgetIds()
  const hasTH    = linked.some(s => { const ms = METRICS_BY_MODEL[s.model]||[]; return ms.some(m=>m.id==='temp') && ms.some(m=>m.id==='humidite') })
  const hasTsol  = linked.some(s => (METRICS_BY_MODEL[s.model]||[]).some(m=>m.id==='tsol'))
  const hasCumul = linked.some(s => (METRICS_BY_MODEL[s.model]||[]).some(m=>m.cumul))

  const isVisible = item => {
    const id = CATALOG_ITEM_ID[item]
    if (!id) return true
    if (item === 'Gel') return models.has('T_GEL')
    if (item === "Maï'zy") return crop.includes('maïs') || crop.includes('mais')
    if (item === 'Tavelure Pomme') return crop.includes('pommier')
    if (item === 'Station météo') return models.has('P+') || models.has('PT') || models.has('P')
    if (item === 'Station Météo Virtuelle') return models.has('SMV')
    if (item === 'Thermomètre-Hygromètre') return models.has('TH')
    if (item === 'Thermomètre de sol') return models.has('T_MINI') || hasTsol
    if (item === 'Anémomètre') return models.has('W')
    if (item === 'Pyranomètre' || item === 'Rayonnement solaire') return models.has('PYRANO')
    if (item === "Capteur d'humectation foliaire") return models.has('LWS')
    if (item === 'Capteur PAR') return models.has('PAR')
    if (item === 'Bilan hydrique') return [...models].some(m=>m.startsWith('CAPA-')) || [...models].some(m=>TENSIO_MODELS.includes(m))
    if (item === 'Irrigations') return true
    if (item === 'Sonde capacitive') return [...models].some(m=>m.startsWith('CAPA-'))
    if (item === 'Tensiomètre') return [...models].some(m=>TENSIO_MODELS.includes(m))
    if (item === 'Sonde de fertirrigation') return models.has('EC')
    if (item === 'DPV' || item === 'THI' || item === 'Température de rosée') return hasTH
    if (item === 'Température du sol') return hasTsol
    if (item === 'Cumuls') return hasCumul
    return true
  }

  const modal = document.createElement('div')
  modal.className = 'modal add-modal'
  modal.innerHTML = `
    <div class="add-modal-content" style="max-width:520px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter un widget</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      ${WIDGET_CATALOG_WEB.map(sec => {
        const items = sec.items.filter(isVisible)
        if (!items.length) return ''
        return `
        <div class="add-modal-section">
          <div class="add-modal-section-label">${sec.title}</div>
          <div class="wcat-list">
            ${items.map(item => {
              const id = CATALOG_ITEM_ID[item]
              const already = id && active.includes(id)
              return `
              <div class="wcat-item">
                <span>${item}</span>
                ${already
                  ? `<span class="wcat-already"><i class="bi bi-check2"></i> Ajouté</span>`
                  : `<button class="wcat-add-btn" type="button" data-wid="${id}"><i class="bi bi-plus-circle"></i> Ajouter</button>`}
              </div>`
            }).join('')}
          </div>
        </div>`
      }).join('')}
    </div>`
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
  modal.querySelector('.add-modal-close').addEventListener('click', () => modal.remove())
  modal.querySelectorAll('.wcat-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const wid = btn.dataset.wid
      if (!wid) return
      const ids = getActiveWidgetIds()
      if (!ids.includes(wid)) { ids.push(wid); saveWidgetIds(ids) }
      modal.remove()
      initDashGrid()
    })
  })
  document.body.appendChild(modal)
}

// ─── Journal (notes, traitements & historique) ────────────────────────────────

const JOURNAL_KEY = `weenat-journal-${parcelId}`
const TODAY_STR = new Date().toISOString().slice(0, 10)

function addDaysStr(iso, n) {
  const d = new Date(iso); d.setDate(d.getDate() + n)
  return d.toISOString().slice(0, 10)
}
function fmtDateFullStr(iso) {
  const m = ['jan.','fév.','mar.','avr.','mai','jun.','jul.','aoû.','sep.','oct.','nov.','déc.']
  const [, mo, d] = iso.split('-')
  return `${parseInt(d)} ${m[parseInt(mo)-1]} ${iso.split('-')[0]}`
}

const NOTE_CATEGORIES = [
  'Observation générale', 'Préparation du sol (labour)', 'Préparation du sol (strip-till)',
  'Préparation du sol (sous-solage)', 'Fertilisation', 'Semis', 'Récolte',
  'Stade phénologique', 'Passage de sangliers', 'Gestion de haie bocagère',
  'Irrigation manuelle', 'Autre',
]

function getJournalAuthors() {
  const isAdherentParcel = parcelBase.orgId === 1 // Ferme du Bocage
  const reseauMembers = members.filter(m => m.source === 'réseau')
  const adherentMembers = isAdherentParcel
    ? members.filter(m => m.source === 'adherent' && m.orgIds.includes(1))
    : []
  return [...adherentMembers, ...reseauMembers]
}

function autoEvents() {
  const p = parcelBase
  const evts = []
  const addEvt = (date, texte, auteur = 'Système') => evts.push({ id: 'auto-' + date + texte.slice(0, 8), type: 'modification', date, texte, auteur })

  const isAdherentParcel = p.orgId === 1
  const mainAuthor = isAdherentParcel ? 'Jean-Michel Dutilleul' : 'Thomas Bertrand'
  const secondAuthor = isAdherentParcel ? 'Alexandre Bernard' : 'Sophie Dubois'

  addEvt('2024-01-01', 'Création de la parcelle', mainAuthor)
  if (p.crop) addEvt('2024-03-15', `Culture définie : ${p.crop}`, mainAuthor)
  if (p.texture) addEvt('2024-03-15', `Texture de sol définie : ${p.texture}`, mainAuthor)
  if (p.irrigation) addEvt('2024-04-01', `Type d'irrigation : ${p.irrigation}`, mainAuthor)
  const linked = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  linked.forEach(s => addEvt('2024-06-10', `Liaison capteur : ${MODEL_NAMES[s.model] || s.model} · ${s.serial}`, secondAuthor))
  addEvt('2026-03-01', 'Début de cycle cultural 2026', mainAuthor)
  return evts
}

const NEW_JOURNAL_TYPES = new Set(['culture', 'stade', 'irrigation', 'cycle'])

// Progressions de stades phéno — plusieurs variantes pour éviter d'afficher
// toujours les mêmes libellés BBCH d'une parcelle à l'autre
const STADE_PROGRESSIONS = [
  ['BBCH 21 — Tallage actif', 'BBCH 30 — Début montaison', 'BBCH 45 — Gonflement épis'],
  ['BBCH 13 — 3 feuilles étalées', 'BBCH 31 — Début élongation', 'BBCH 59 — Fin de floraison'],
  ['BBCH 09 — Levée', 'BBCH 40 — Développement des organes de récolte', 'BBCH 49 — Taille de récolte atteinte'],
  ['BBCH 15 — 5 feuilles étalées', 'BBCH 51 — Apparition inflorescence', 'BBCH 69 — Fin de floraison'],
]
const VARIETES = ['Apache', 'RGT Bilboa', 'Soissons', 'Fixion', 'Forum', 'Allez-y']
const CYCLE_TEXTS = ['Mise en place de la saison 2026', 'Démarrage de la nouvelle campagne', 'Lancement de la saison sur cette parcelle']
const DEV_TEXTS = ['Développement homogène sur la parcelle', 'Légère hétérogénéité en bordure, sous surveillance', 'Bon développement, conforme aux attentes']

function buildNewTypeDemo(author1, author2) {
  const crop = parcelBase.crop || 'Blé tendre'
  const seed = parcelBase.id % 100
  const stades  = STADE_PROGRESSIONS[parcelBase.id % STADE_PROGRESSIONS.length]
  const variete = VARIETES[parcelBase.id % VARIETES.length]
  const dOffset = parcelBase.id % 6
  return [
    { id: 1743465600000, type: 'cycle',     date: addDaysIso(daysAgoIso(61), dOffset), auteur: author1, action: 'début', culture: crop, annee: '2026', texte: CYCLE_TEXTS[seed % CYCLE_TEXTS.length] },
    { id: 1743897600000, type: 'culture',   date: addDaysIso(daysAgoIso(56), dOffset), auteur: author1, action: 'modification', culture: crop, variete, texte: 'Culture confirmée pour la saison 2026' },
    { id: 1744329600000, type: 'stade',     date: addDaysIso(daysAgoIso(50), dOffset), auteur: author1, stade: stades[0], culture: crop, texte: '' },
    { id: 1745366400000, type: 'stade',     date: addDaysIso(daysAgoIso(38), dOffset), auteur: author2, stade: stades[1], culture: crop, texte: '' },
    { id: 1746057600000, type: 'stade',     date: addDaysIso(daysAgoIso(28), dOffset), auteur: author2, stade: stades[2], culture: crop, texte: DEV_TEXTS[seed % DEV_TEXTS.length] },
  ]
}

function addDaysIso(iso, n) {
  const d = new Date(iso + 'T00:00:00'); d.setDate(d.getDate() + n)
  return d.toISOString().slice(0, 10)
}

// Ancré sur "aujourd'hui" (plutôt qu'une date calendaire fixe) pour que les notes/traitements
// de démo restent visibles dans les périodes courtes par défaut (7j, J-7→J+2), quelle que soit
// la date à laquelle le prototype est ouvert.
function daysAgoIso(n) {
  const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - n)
  return d.toISOString().slice(0, 10)
}

// Entrées auto-générées : irrigations passées en "effectuées" (real:true) dans IRRIG_SEASON
function autoIrrigationEvents(plotId) {
  return IRRIG_SEASON.filter(i => i.plotId === plotId && i.real).map(i => ({
    id: `auto-irrig-${plotId}-${i.iso}-${i.mm}`,
    type: 'irrigation',
    date: i.iso,
    volume: i.mm,
    unite: 'mm',
    methode: parcelBase.irrigation || '',
    texte: 'Irrigation effectuée.',
    auteur: 'Système',
    _auto: true,
  }))
}

const TRAITEMENT_SCENARIOS = [
  { cible: 'Pucerons',  produit: 'Karate Zeon 10 CS',   dose: '0,1 L/ha',  obs1: 'Observation de quelques pucerons sur les feuilles basses. À surveiller.',          obs2: 'peu de pucerons visibles, situation sous contrôle.' },
  { cible: 'Mildiou',   produit: 'Bordeaux mixture',     dose: '2 kg/ha',   obs1: 'Taches suspectes observées sur les feuilles basses, conditions humides.',         obs2: 'progression stoppée, feuillage sain.' },
  { cible: 'Limaces',   produit: 'Métaldéhyde',          dose: '5 kg/ha',   obs1: 'Dégâts de limaces constatés en bordure de parcelle après les pluies.',           obs2: 'dégâts limités, population réduite.' },
  { cible: 'Altises',   produit: 'Karaté K',             dose: '75 mL/ha',  obs1: 'Présence d\'altises sur jeunes plants, seuil de nuisibilité approché.',          obs2: 'population sous contrôle, reprise normale.' },
]

// IDs fixes (servent de clé stable pour rafraîchir les dates de ces entrées de démo
// sans toucher aux éventuelles notes/traitements ajoutés réellement par l'utilisateur)
const NOTE2_DEMO_ID = 1748100000000

function buildNoteTraitementDemo(author1, author2) {
  const tIdx = parcelBase.id % TRAITEMENT_SCENARIOS.length
  const scn  = TRAITEMENT_SCENARIOS[tIdx]
  const scn2 = TRAITEMENT_SCENARIOS[(tIdx + 1) % TRAITEMENT_SCENARIOS.length]
  const tOffset = parcelBase.id % 6
  // Dates ancrées sur "aujourd'hui" (et non une date calendaire fixe) pour que ces notes/traitements
  // restent visibles dans les périodes courtes par défaut (7 jours, J-7→J+2), quelle que soit la date
  // d'ouverture du prototype.
  const dTraitement1 = addDaysIso(daysAgoIso(14), tOffset)
  const dTraitement2 = addDaysIso(daysAgoIso(5), tOffset)
  return [
    { id: 1746921600000, type: 'note',      category: 'Observation générale', date: addDaysIso(daysAgoIso(19), tOffset), auteur: author1, texte: scn.obs1 },
    { id: 1747353600000, type: 'traitement',date: dTraitement1, auteur: author2, texte: 'Application conforme aux conditions météo. Vent < 2 m/s.', produit: scn.produit, dose: scn.dose, cible: scn.cible },
    { id: 1747785600000, type: 'note',      category: 'Observation générale', date: addDaysIso(daysAgoIso(9), tOffset), auteur: author1, texte: `Suite traitement du ${dTraitement1.split('-').reverse().slice(0, 2).join('/')} : ${scn.obs2}` },
    { id: 1748000000000, type: 'traitement',date: dTraitement2, auteur: author2, texte: 'Application conforme aux conditions météo. Vent < 2 m/s.', produit: scn2.produit, dose: scn2.dose, cible: scn2.cible },
    { id: NOTE2_DEMO_ID, type: 'note',      category: 'Observation générale', date: addDaysIso(daysAgoIso(2), tOffset), auteur: author1, texte: `Suite traitement du ${dTraitement2.split('-').reverse().slice(0, 2).join('/')} : ${scn2.obs2}` },
  ]
}

// Si les entrées de démo existantes datent de plus de 20 jours (prototype ouvert longtemps après
// leur génération), elles ne seraient plus visibles dans les périodes courtes par défaut : on les
// rebase sur "aujourd'hui" en ne touchant que les entrées de démo connues (par id fixe).
function rebaseDemoDatesIfStale(parsed, author1, author2) {
  const note2 = parsed.find(e => e.id === NOTE2_DEMO_ID)
  if (!note2) return parsed
  const ageDays = Math.round((Date.now() - new Date(note2.date + 'T00:00:00').getTime()) / 86400000)
  if (ageDays <= 20) return parsed
  const freshById = new Map([...buildNoteTraitementDemo(author1, author2), ...buildNewTypeDemo(author1, author2)].map(e => [e.id, e]))
  return parsed.map(e => freshById.get(e.id) || e)
}

function getJournal() {
  const isAdherentParcel = parcelBase.orgId === 1
  const author1 = isAdherentParcel ? 'Jean-Michel Dutilleul' : 'Thomas Bertrand'
  const author2 = isAdherentParcel ? 'Marie Martin' : 'Sophie Dubois'
  try {
    const raw = localStorage.getItem(JOURNAL_KEY)
    if (raw) {
      let parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        const hasNew = parsed.some(e => NEW_JOURNAL_TYPES.has(e.type))
        if (!hasNew) parsed = [...buildNewTypeDemo(author1, author2), ...parsed]
        const rebased = rebaseDemoDatesIfStale(parsed, author1, author2)
        if (!hasNew || rebased !== parsed) localStorage.setItem(JOURNAL_KEY, JSON.stringify(rebased))
        return rebased
      }
    }
  } catch (_) {}
  const demo = [...buildNoteTraitementDemo(author1, author2), ...buildNewTypeDemo(author1, author2)]
  localStorage.setItem(JOURNAL_KEY, JSON.stringify(demo))
  return demo
}

function saveJournal(entries) {
  localStorage.setItem(JOURNAL_KEY, JSON.stringify(entries))
}

function renderJournalTab() {
  const el = document.getElementById('journal-container')
  if (!el) return
  const userEntries = getJournal()
  const auto = [...autoEvents(), ...autoIrrigationEvents(parcelId)]
  const all = [...userEntries, ...auto].sort((a, b) => b.date.localeCompare(a.date))

  const fmt = d => { const [y, m, j] = d.split('-'); return `${j}/${m}/${y}` }
  const CONFIG = {
    note:         { label: 'Note',             icon: 'bi-pencil',          dotCls: 'note',         badgeCls: 'note'         },
    traitement:   { label: 'Traitement',        icon: 'bi-eyedropper',      dotCls: 'traitement',   badgeCls: 'traitement'   },
    modification: { label: 'Modification',      icon: 'bi-pencil-square',   dotCls: 'modification', badgeCls: 'modification' },
    culture:      { label: 'Culture',           icon: 'bi-flower1',         dotCls: 'culture',      badgeCls: 'culture'      },
    cycle:        { label: 'Cycle cultural',    icon: 'bi-arrow-repeat',    dotCls: 'cycle',        badgeCls: 'cycle'        },
    stade:        { label: 'Stade phéno.',      icon: 'bi-calendar2-check', dotCls: 'stade',        badgeCls: 'stade'        },
    irrigation:   { label: 'Irrigation',        icon: 'bi-droplet-half',    dotCls: 'irrigation',   badgeCls: 'irrigation'   },
  }
  const ADD_ITEMS = [
    { type: 'note',       label: 'Note',                       icon: 'bi-pencil-square' },
    { type: 'traitement', label: 'Traitement phytosanitaire',  icon: 'bi-eyedropper' },
    null,
    { type: 'culture',    label: 'Culture',                    icon: 'bi-flower1' },
    { type: 'stade',      label: 'Stade phénologique',         icon: 'bi-calendar2-check' },
    { type: 'irrigation', label: 'Irrigation',                 icon: 'bi-droplet-half' },
    { type: 'cycle',      label: 'Cycle cultural',             icon: 'bi-arrow-repeat' },
  ]

  let html = `
    <div class="journal-add-bar">
      <div class="jrn-add-wrap" id="jrn-add-wrap">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="jrn-add-btn" style="width:auto">
          <i class="bi bi-plus-lg"></i> Ajouter
          <i class="bi bi-chevron-down" style="font-size:10px;margin-left:1px"></i>
        </button>
        <div class="jrn-add-menu" id="jrn-add-menu">
          ${ADD_ITEMS.map(item => item === null
            ? `<div class="jrn-add-sep"></div>`
            : `<button class="jrn-add-item" data-type="${item.type}">
                <i class="bi ${item.icon}"></i> ${item.label}
               </button>`).join('')}
        </div>
      </div>
    </div>
    <div class="journal-timeline">
  `

  if (all.length === 0) {
    html += `<div class="journal-empty">Aucune entrée dans le journal.</div>`
  } else {
    all.forEach(e => {
      const c = CONFIG[e.type] || CONFIG.note
      const canDelete = e.type === 'note'
      const isTraitement = e.type === 'traitement'
      html += `
        <div class="jrn-entry" data-id="${e.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot jrn-dot--${c.dotCls}"><i class="bi ${c.icon}"></i></div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${fmt(e.date)}</span>
              <span class="journal-type-badge journal-type-badge--${c.badgeCls}">
                ${c.label}
              </span>
              ${e.auteur ? `<span class="jrn-entry-auteur">${e.auteur}</span>` : ''}
              ${canDelete ? `<button class="jrn-entry-delete" data-id="${e.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>` : ''}
            </div>
            ${e.texte ? `<div class="jrn-entry-texte">${e.texte}</div>` : ''}
            ${isTraitement && (e.produit || e.dose || e.cible) ? `
              <div class="jrn-entry-meta">
                ${e.produit ? `<span class="jrn-entry-meta-chip"><i class="bi bi-flask"></i>${e.produit}</span>` : ''}
                ${e.dose    ? `<span class="jrn-entry-meta-chip"><i class="bi bi-droplet"></i>${e.dose}</span>` : ''}
                ${e.cible   ? `<span class="jrn-entry-meta-chip"><i class="bi bi-bullseye"></i>${e.cible}</span>` : ''}
              </div>` : ''}
            ${e.type === 'culture' ? `<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-tag"></i>${e.action === 'ajout' ? 'Ajout' : e.action === 'retrait' ? 'Retrait' : 'Modification'}</span>
                ${e.culture ? `<span class="jrn-entry-meta-chip"><i class="bi bi-flower1"></i>${e.culture}</span>` : ''}
                ${e.variete ? `<span class="jrn-entry-meta-chip"><i class="bi bi-tag-fill"></i>${e.variete}</span>` : ''}
              </div>` : ''}
            ${e.type === 'stade' ? `<div class="jrn-entry-meta">
                ${e.stade   ? `<span class="jrn-entry-meta-chip"><i class="bi bi-diagram-3"></i>${e.stade}</span>` : ''}
                ${e.culture ? `<span class="jrn-entry-meta-chip">${e.culture}</span>` : ''}
              </div>` : ''}
            ${e.type === 'irrigation' ? `<div class="jrn-entry-meta">
                ${e.volume  ? `<span class="jrn-entry-meta-chip"><i class="bi bi-droplet-fill"></i>${e.volume} ${e.unite || 'mm'}</span>` : ''}
                ${e.methode ? `<span class="jrn-entry-meta-chip"><i class="bi bi-water"></i>${e.methode}</span>` : ''}
              </div>` : ''}
            ${e.type === 'cycle' ? `<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-arrow-right-circle"></i>${e.action === 'fin' ? 'Fin de cycle' : 'Début de cycle'}</span>
                ${e.culture ? `<span class="jrn-entry-meta-chip"><i class="bi bi-flower1"></i>${e.culture}</span>` : ''}
                ${e.annee ? `<span class="jrn-entry-meta-chip"><i class="bi bi-calendar3"></i>${e.annee}</span>` : ''}
              </div>` : ''}
            ${e.imageIds?.length ? `<div class="jrn-entry-photos-row" data-entry-id="${e.id}"></div>` : ''}
          </div>
        </div>
      `
    })
  }

  html += `</div>`
  el.innerHTML = html

  const addBtn  = el.querySelector('#jrn-add-btn')
  const addMenu = el.querySelector('#jrn-add-menu')
  addBtn?.addEventListener('click', e => { e.stopPropagation(); addMenu.classList.toggle('open') })
  document.addEventListener('click', () => addMenu?.classList.remove('open'))
  el.querySelectorAll('.jrn-add-item').forEach(item => {
    item.addEventListener('click', () => { addMenu.classList.remove('open'); openJournalForm(item.dataset.type) })
  })

  el.querySelectorAll('.jrn-entry-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id)
      const entry = getJournal().find(e => e.id === id)
      if (entry?.imageIds?.length) window.ImageStore?.remove(entry.imageIds)
      saveJournal(getJournal().filter(e => e.id !== id))
      renderJournalTab()
    })
  })

  // Async-load images for entries that have imageIds
  const IS = window.ImageStore
  if (IS) {
    el.querySelectorAll('.jrn-entry-photos-row[data-entry-id]').forEach(async photoRow => {
      const entry = userEntries.find(e => String(e.id) === photoRow.dataset.entryId)
      if (!entry?.imageIds?.length) return
      for (const imgId of entry.imageIds) {
        try {
          const src = await IS.get(imgId)
          if (!src) continue
          const img = document.createElement('img')
          img.className = 'jrn-entry-photo'
          img.src = src; img.alt = ''
          img.addEventListener('click', () => window.openLightbox?.(src))
          photoRow.appendChild(img)
        } catch (_) {}
      }
    })
  }
}

function openJournalForm(type) {
  const TITLES = {
    note: 'Ajouter une note', traitement: 'Ajouter un traitement',
    culture: 'Culture — événement', stade: 'Stade phénologique',
    irrigation: 'Irrigation', cycle: 'Cycle cultural',
  }
  const crop = parcelBase.crop || ''
  const EXTRA = {
    note: `
      <div class="journal-form-row">
        <label class="journal-form-label">Catégorie</label>
        <select id="jrn-f-category" class="journal-form-input">
          ${NOTE_CATEGORIES.map(c => `<option>${c}</option>`).join('')}
        </select>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Texte</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Votre note…"></textarea>
      </div>`,
    traitement: `
      <div class="journal-form-row">
        <label class="journal-form-label">Observations</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Conditions météo, observations…"></textarea>
      </div>
      <div class="journal-form-grid">
        <div class="journal-form-row">
          <label class="journal-form-label">Produit</label>
          <input type="text" id="jrn-f-produit" class="journal-form-input" placeholder="Ex : Bordeaux mixture">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Dose</label>
          <input type="text" id="jrn-f-dose" class="journal-form-input" placeholder="Ex : 2 kg/ha">
        </div>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Cible (maladie / ravageur)</label>
        <input type="text" id="jrn-f-cible" class="journal-form-input" placeholder="Ex : Mildiou">
      </div>`,
    culture: `
      <div class="journal-form-row">
        <label class="journal-form-label">Action</label>
        <select id="jrn-f-action" class="journal-form-input">
          <option value="ajout">Ajout de culture</option>
          <option value="modification" selected>Modification de culture</option>
          <option value="retrait">Retrait de culture</option>
        </select>
      </div>
      <div class="journal-form-grid">
        <div class="journal-form-row">
          <label class="journal-form-label">Culture</label>
          <input type="text" id="jrn-f-culture" class="journal-form-input" value="${crop}" placeholder="Ex : Blé tendre">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Variété</label>
          <input type="text" id="jrn-f-variete" class="journal-form-input" placeholder="Ex : Apache">
        </div>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Note</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Précisions…"></textarea>
      </div>`,
    stade: `
      <div class="journal-form-row">
        <label class="journal-form-label">Stade (BBCH)</label>
        <input type="text" id="jrn-f-stade" class="journal-form-input" placeholder="Ex : BBCH 30 — Début montaison">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Culture</label>
        <input type="text" id="jrn-f-culture" class="journal-form-input" value="${crop}" placeholder="Culture concernée">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Observations</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Observations…"></textarea>
      </div>`,
    irrigation: `
      <div class="journal-form-grid">
        <div class="journal-form-row">
          <label class="journal-form-label">Volume</label>
          <input type="number" id="jrn-f-volume" class="journal-form-input" min="0" step="0.5" placeholder="0">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Unité</label>
          <select id="jrn-f-unite" class="journal-form-input">
            <option value="mm" selected>mm</option>
            <option value="m³/ha">m³/ha</option>
            <option value="m³">m³</option>
          </select>
        </div>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Méthode</label>
        <select id="jrn-f-methode" class="journal-form-input">
          <option value="">— Non précisé —</option>
          <option>Aspersion</option>
          <option>Goutte à goutte</option>
          <option>Gravitaire</option>
          <option>Pivot</option>
          <option>Enrouleur</option>
          <option>Autre</option>
        </select>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Observations</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Observations…"></textarea>
      </div>`,
    cycle: `
      <div class="journal-form-row">
        <label class="journal-form-label">Événement</label>
        <select id="jrn-f-action" class="journal-form-input">
          <option value="début">Début de cycle cultural</option>
          <option value="fin">Fin de cycle cultural</option>
        </select>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Culture</label>
        <input type="text" id="jrn-f-culture" class="journal-form-input" value="${crop}" placeholder="Culture concernée">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Année</label>
        <input type="text" id="jrn-f-annee" class="journal-form-input" value="${new Date().getFullYear()}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Note</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Précisions…"></textarea>
      </div>`,
  }
  const hasPhotos = type === 'note' || type === 'traitement'

  const modal = document.createElement('div')
  modal.className = 'modal add-modal'
  modal.innerHTML = `
    <div class="add-modal-content" style="max-width:480px">
      <div class="add-modal-header">
        <span class="add-modal-title">${TITLES[type] || 'Ajouter une entrée'}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="jrn-f-date" class="journal-form-input" value="${TODAY_STR}">
        </div>
        ${EXTRA[type] || EXTRA.note}
        ${hasPhotos ? `
        <div class="journal-form-row">
          <label class="journal-form-label">Photos</label>
          <div class="jrn-img-zone">
            <div class="jrn-img-previews" id="jrn-f-previews"></div>
            <button type="button" class="jrn-img-add-btn" id="jrn-f-img-btn">
              <i class="bi bi-camera"></i> Ajouter une photo
            </button>
            <input type="file" id="jrn-f-img-input" accept="image/jpeg,image/png,image/webp,image/avif,image/bmp" multiple style="display:none">
            <div class="jrn-img-error" id="jrn-f-img-err"></div>
          </div>
        </div>` : ''}
        <button class="btn-primary btn-sm" id="jrn-f-save" style="width:100%;justify-content:center">
          Enregistrer
        </button>
      </div>
    </div>`

  modal.querySelector('.add-modal-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })

  const pendingImages = []
  if (hasPhotos && window.ImageStore) {
    window.setupImgUpload(
      modal.querySelector('#jrn-f-img-input'),
      modal.querySelector('#jrn-f-img-btn'),
      modal.querySelector('#jrn-f-previews'),
      modal.querySelector('#jrn-f-img-err'),
      pendingImages
    )
  }

  modal.querySelector('#jrn-f-save').addEventListener('click', async () => {
    const date  = modal.querySelector('#jrn-f-date').value || TODAY_STR
    const texte = modal.querySelector('#jrn-f-texte')?.value.trim() || ''
    const auteur = parcelBase.orgId === 1 ? 'Jean-Michel Dutilleul' : 'Thomas Bertrand'
    const entry = { id: Date.now(), type, date, texte, auteur }

    if (type === 'note') {
      entry.category = modal.querySelector('#jrn-f-category')?.value || ''
    } else if (type === 'traitement') {
      entry.produit = modal.querySelector('#jrn-f-produit').value.trim()
      entry.dose    = modal.querySelector('#jrn-f-dose').value.trim()
      entry.cible   = modal.querySelector('#jrn-f-cible').value.trim()
    } else if (type === 'culture') {
      entry.action  = modal.querySelector('#jrn-f-action').value
      entry.culture = modal.querySelector('#jrn-f-culture').value.trim()
      entry.variete = modal.querySelector('#jrn-f-variete').value.trim()
    } else if (type === 'stade') {
      entry.stade   = modal.querySelector('#jrn-f-stade').value.trim()
      entry.culture = modal.querySelector('#jrn-f-culture').value.trim()
    } else if (type === 'irrigation') {
      const vol = parseFloat(modal.querySelector('#jrn-f-volume').value)
      entry.volume  = isNaN(vol) ? 0 : vol
      entry.unite   = modal.querySelector('#jrn-f-unite').value
      entry.methode = modal.querySelector('#jrn-f-methode').value
    } else if (type === 'cycle') {
      entry.action  = modal.querySelector('#jrn-f-action').value
      entry.culture = modal.querySelector('#jrn-f-culture').value.trim()
      entry.annee   = modal.querySelector('#jrn-f-annee').value.trim()
    }

    const hasData = texte || entry.produit || entry.culture || entry.stade || entry.volume || entry.annee || pendingImages.length
    if (!hasData) return

    if (window.ImageStore && pendingImages.length) {
      entry.imageIds = []
      for (const dataURL of pendingImages) {
        const imgId = `img_${entry.id}_${entry.imageIds.length}`
        await window.ImageStore.store(imgId, dataURL)
        entry.imageIds.push(imgId)
      }
    }
    saveJournal([entry, ...getJournal()])
    modal.remove()
    renderJournalTab()
  })

  document.body.appendChild(modal)
}

// ─── Nav select ───────────────────────────────────────────────────────────────

function initNavSelect() {
  const titleEl = document.getElementById('breadcrumb-title')
  if (!titleEl) return
  const lastSpan = titleEl.querySelector('span:last-child')
  if (!lastSpan) return

  const orgPlots = plots
    .filter(p => p.orgId === parcelBase.orgId)
    .sort((a, b) => a.name.localeCompare(b.name, 'fr'))

  const wrap = document.createElement('span')
  wrap.className = 'breadcrumb-nav-wrap'

  const sel = document.createElement('select')
  sel.className = 'breadcrumb-nav-select'
  sel.innerHTML = orgPlots.map(p =>
    `<option value="${p.id}"${p.id === parcelId ? ' selected' : ''}>${p.name}</option>`
  ).join('')
  sel.addEventListener('change', () => {
    window.location.href = `parcelle-detail.html?id=${sel.value}`
  })

  wrap.appendChild(sel)
  lastSpan.replaceWith(wrap)
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  if (!parcelBase) {
    document.body.innerHTML = '<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>'
    return
  }

  initState()

  updateBreadcrumb(parcelState.name || parcelBase.name, {
    label: 'Parcelles',
    href: 'parcelles.html',
  })
  initNavSelect()

  renderCharts()
  renderPanel()
  initMiniMap()
  initPanelToggle()
  initPeriodControls()
  initCompareControl()
  initTabs()

  const _tabParam = urlParams.get('tab')
  if (_tabParam) {
    document.querySelector(`.detail-tab-btn[data-pane="tab-${_tabParam}"]`)?.click()
  }

  initPhenologie()
  initNotesOverlay()
  initDashGrid()
  document.getElementById('parcel-add-widget-btn')?.addEventListener('click', openWebWidgetCatalog)
  document.getElementById('btn-export-csv')?.addEventListener('click', exportCsv)

  document.addEventListener('click', e => {
    const btn = e.target.closest('.chart-cumul-add-btn')
    if (!btn) return
    e.stopPropagation()
    const label = btn.dataset.cumulLabel, val = btn.dataset.cumulVal
    if (!confirm(`Ajouter "${label} : ${val}" au tableau de bord ?`)) return
    const color = btn.closest('.chart-card')?.dataset.color || 'var(--pri)'
    const result = addCumulFavori({ label, val, color, subjectLabel: parcelBase.name })
    const toast = document.createElement('div')
    toast.textContent = result === 'max' ? 'Limite de cumuls au tableau de bord atteinte' : 'Cumul ajouté au tableau de bord'
    Object.assign(toast.style, { position:'fixed', bottom:'80px', left:'50%', transform:'translateX(-50%)', background:'rgba(28,28,30,.9)', color:'#fff', padding:'8px 16px', borderRadius:'8px', fontSize:'13px', zIndex:'9999', pointerEvents:'none' })
    document.body.appendChild(toast)
    setTimeout(() => toast.remove(), 2500)
  })

  const _sidebar = document.getElementById('sidebar')
  if (_sidebar) new MutationObserver(() => renderPanelMembres()).observe(_sidebar, { attributes: true, attributeFilter: ['data-role'] })
})

// ─── Weather strip ────────────────────────────────────────────────────────────

// ─── Charts ───────────────────────────────────────────────────────────────────

let tensioViewMode = 'capteur' // 'capteur' | 'horizon'
let compareParcelId = null
let compareYearAgo  = false
const YEAR_OFFSET_MIN = 365 * 1440 // décalage d'un an en minutes, pour rejouer les générateurs de données un an plus tôt

const CHARTS_ORDER_KEY = `charts-order-parcel-${parcelId}`
function loadChartOrder() { try { return JSON.parse(localStorage.getItem(CHARTS_ORDER_KEY) || 'null') } catch { return null } }
function saveChartOrder(keys) { localStorage.setItem(CHARTS_ORDER_KEY, JSON.stringify(keys)) }

function setupChartDragDrop(container) {
  let dragging = null

  container.addEventListener('dragstart', e => {
    const card = e.target.closest('.chart-card[data-card-key]')
    if (!card) return
    dragging = card
    card.classList.add('chart-dragging')
    e.dataTransfer.effectAllowed = 'move'
  })

  container.addEventListener('dragend', () => {
    dragging?.classList.remove('chart-dragging')
    container.querySelectorAll('.chart-card').forEach(c => c.classList.remove('chart-drag-over'))
    dragging = null
    const keys = [...container.querySelectorAll('.chart-card[data-card-key]')].map(c => c.dataset.cardKey)
    saveChartOrder(keys)
  })

  container.addEventListener('dragover', e => {
    e.preventDefault()
    if (!dragging) return
    const target = e.target.closest('.chart-card[data-card-key]')
    if (!target || target === dragging) return
    container.querySelectorAll('.chart-card').forEach(c => c.classList.remove('chart-drag-over'))
    target.classList.add('chart-drag-over')
    const mid = target.getBoundingClientRect().top + target.getBoundingClientRect().height / 2
    container.insertBefore(dragging, e.clientY < mid ? target : target.nextSibling)
  })

  container.addEventListener('drop', e => {
    e.preventDefault()
    container.querySelectorAll('.chart-card').forEach(c => c.classList.remove('chart-drag-over'))
  })
}

function renderChartsContent(container, linkedSensorIds) {
  const linkedSensors = allSensors.filter(s => linkedSensorIds.includes(s.id))
  const tensioSensors = linkedSensors.filter(s => TENSIO_MODELS.includes(s.model))
  const capaSensors   = linkedSensors.filter(s => CAPA_MODELS.includes(s.model))
  const otherSensors  = linkedSensors.filter(s => !TENSIO_MODELS.includes(s.model) && !CAPA_MODELS.includes(s.model))
  const stepMins = getStepMinutes()

  // Collect sensor metric IDs for deduplication
  const sensorMetricIds = new Set()
  linkedSensors.forEach(s => (METRICS_BY_MODEL[s.model] || []).forEach(m => sensorMetricIds.add(m.id)))

  // Build flat card list: {key, type, ...rest}
  const allCards = []

  otherSensors.forEach(s => {
    const metrics = METRICS_BY_MODEL[s.model]
    if (!metrics) return
    const source = `${s.model} · ${s.serial}`
    const emissionMins = Math.floor(5 + Math.random() * 55)
    metrics.forEach(m => {
      if (m.isWindComposite) {
        allCards.push({ key: `wind-${s.id}`, type: 'wind', sensor: s, source, emissionMins })
        return
      }
      allCards.push({ key: `s${s.id}-${m.id}`, type: 'metric', metric: m, source, emissionMins, sensorId: s.id })
    })
  })

  if (tensioSensors.length > 0) {
    const source = `Tensiomètres · ${tensioSensors.length} capteur${tensioSensors.length > 1 ? 's' : ''}`
    const emissionMins = Math.floor(5 + Math.random() * 55)
    ;['pothydr', 'tsol'].forEach(mId => {
      allCards.push({ key: `tensio-${mId}`, type: 'tensio', metricId: mId, source, emissionMins, tensioSensors })
    })
  }

  // CAPA sensors: one multi-curve VWC card + one multi-curve Tsol card per sensor
  capaSensors.forEach(s => {
    const horizons = CAPA_HORIZONS_PARCEL[s.model] || []
    const source = `${MODEL_NAMES[s.model] || s.model} · ${s.serial}`
    const emissionMins = Math.floor(5 + Math.random() * 55)
    if (horizons.length > 0) {
      allCards.push({ key: `capa-vwc-${s.id}`,  type: 'capa-vwc',  sensor: s, horizons, source, emissionMins })
      allCards.push({ key: `capa-tsol-${s.id}`, type: 'capa-tsol', sensor: s, horizons, source, emissionMins })
    }
  })

  // ALWAYS_METRICS: skip any metric already provided by a sensor
  ALWAYS_METRICS
    .filter(m => !sensorMetricIds.has(m.id))
    .forEach(m => allCards.push({ key: `always-${m.id}`, type: 'metric', metric: m, source: 'parcelle', emissionMins: null, unavailable: stepMins < 60 }))

  // Irrigation chart: shown when the parcel has an irrigation type configured or has irrigation data
  const hasIrrigData = (!!parcelBase.irrigation && parcelBase.irrigation !== 'Non irrigué') || IRRIG_SEASON.some(i => i.plotId === parcelId)
  if (hasIrrigData) {
    allCards.push({ key: 'always-irrigation', type: 'metric', metric: IRRIGATION_METRIC, source: 'parcelle', emissionMins: null })
  }

  // Apply saved order
  const savedOrder = loadChartOrder()
  if (savedOrder?.length) {
    const idx = new Map(savedOrder.map((k, i) => [k, i]))
    allCards.sort((a, b) => (idx.has(a.key) ? idx.get(a.key) : Infinity) - (idx.has(b.key) ? idx.get(b.key) : Infinity))
  }

  // Render cards
  allCards.forEach(card => {
    if (card.type === 'metric') {
      appendChartCard(container, card.metric, card.source, card.emissionMins, card.key, card.unavailable, card.sensorId)
    } else if (card.type === 'wind') {
      renderWindCompositeChart(container, card.source, card.emissionMins, card.key)
    } else if (card.type === 'tensio') {
      appendTensioCard(container, card.metricId, card.tensioSensors, card.source, card.emissionMins, card.key)
    } else if (card.type === 'capa-vwc') {
      appendCapaVwcCard(container, card.horizons, card.source, card.emissionMins, card.key)
    } else if (card.type === 'capa-tsol') {
      appendCapaTsolCard(container, card.horizons, card.source, card.emissionMins, card.key)
    }
  })

  setupChartDragDrop(container)
}

function getParcelFlatMetrics(linkedSensorIds) {
  const linkedSensors = allSensors.filter(s => linkedSensorIds.includes(s.id))
  const seenIds = new Set()
  const metrics = []
  linkedSensors.forEach(s => {
    ;(METRICS_BY_MODEL[s.model] || []).forEach(m => {
      if (!seenIds.has(m.id)) { seenIds.add(m.id); metrics.push(m) }
    })
  })
  ALWAYS_METRICS.forEach(m => {
    if (!seenIds.has(m.id)) { seenIds.add(m.id); metrics.push(m) }
  })
  return metrics
}

function renderCharts() {
  const mainContainer = document.getElementById('charts-container')
  mainContainer.innerHTML = ''

  if (compareYearAgo) {
    mainContainer.className = 'compare-rows'

    const thisYear = new Date().getFullYear()
    const headerRow = document.createElement('div')
    headerRow.className = 'compare-header-row'
    headerRow.innerHTML = `
      <div class="compare-col-header"><span>${parcelState.name || parcelBase.name} — ${thisYear - 1}</span></div>
      <div class="compare-col-header">
        <span>${parcelState.name || parcelBase.name} — ${thisYear}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`
    mainContainer.appendChild(headerRow)
    headerRow.querySelector('.compare-close-btn')?.addEventListener('click', () => {
      compareYearAgo = false
      updateCompareBtn()
      renderCharts()
    })

    const metrics = getParcelFlatMetrics(parcelState.linkedSensorIds)
    metrics.forEach(m => {
      const row = document.createElement('div')
      row.className = 'compare-row'
      const leftSlot = document.createElement('div')
      appendChartCard(leftSlot, m, null, null, null, false, null, true)
      const rightSlot = document.createElement('div')
      appendChartCard(rightSlot, m, null, null, null, false, null, false)
      row.appendChild(leftSlot)
      row.appendChild(rightSlot)
      mainContainer.appendChild(row)
    })
  } else if (compareParcelId) {
    mainContainer.className = 'compare-rows'

    const compareBase = plots.find(p => p.id === compareParcelId)
    const headerRow = document.createElement('div')
    headerRow.className = 'compare-header-row'
    headerRow.innerHTML = `
      <div class="compare-col-header"><span>${parcelState.name || parcelBase.name}</span></div>
      <div class="compare-col-header">
        <span>${compareBase?.name || 'Parcelle'}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`
    mainContainer.appendChild(headerRow)
    headerRow.querySelector('.compare-close-btn')?.addEventListener('click', () => {
      compareParcelId = null
      updateCompareBtn()
      renderCharts()
    })

    const leftMetrics = getParcelFlatMetrics(parcelState.linkedSensorIds)
    const stored = getParcel(compareParcelId)
    const compareLinkedIds = stored?.linkedSensorIds ?? allSensors.filter(s => s.parcelIds.includes(compareParcelId)).map(s => s.id)
    const rightMetrics = getParcelFlatMetrics(compareLinkedIds)
    const leftIds    = leftMetrics.map(m => m.id)
    const rightIds   = rightMetrics.map(m => m.id)
    const sharedIds  = leftIds.filter(id => rightIds.includes(id))
    const leftOnly   = leftIds.filter(id => !rightIds.includes(id))
    const rightOnly  = rightIds.filter(id => !leftIds.includes(id))
    const allIds     = [...sharedIds, ...leftOnly, ...rightOnly]

    allIds.forEach(id => {
      const leftM  = leftMetrics.find(m => m.id === id)
      const rightM = rightMetrics.find(m => m.id === id)
      const row = document.createElement('div')
      row.className = 'compare-row'
      const leftSlot = document.createElement('div')
      if (leftM) appendChartCard(leftSlot, leftM)
      else leftSlot.innerHTML = '<div class="compare-chart-empty">—</div>'
      const rightSlot = document.createElement('div')
      if (rightM) appendChartCard(rightSlot, rightM)
      else rightSlot.innerHTML = '<div class="compare-chart-empty">—</div>'
      row.appendChild(leftSlot)
      row.appendChild(rightSlot)
      mainContainer.appendChild(row)
    })
  } else {
    mainContainer.className = 'charts-stack'
    renderChartsContent(mainContainer, parcelState.linkedSensorIds)
  }

  drawAllCharts()
}

const TENSIO_COLORS = ['#5b8dd9', '#e07050', '#4ecdc4', '#f5c842', '#c090e0', '#78d8a0']

// Chaque capteur CHP a UN seul horizon d'installation : son champ `depth`
// "Par horizon" groupe par cette valeur pour fusionner les capteurs au même niveau
function tensioHorizons(sensor) {
  const d = sensor.depth || 30
  return [{ depth: d, label: `${d} cm`, sensor }]
}

function buildTensioCurves(tensioSensors) {
  if (tensioViewMode === 'capteur') {
    return tensioSensors.map((s, i) => ({
      label: s.serial, color: TENSIO_COLORS[i % TENSIO_COLORS.length], depth: s.depth || 30, sensor: s,
    }))
  }
  const horizonMap = new Map()
  tensioSensors.forEach(s => tensioHorizons(s).forEach(h => { if (!horizonMap.has(h.depth)) horizonMap.set(h.depth, h) }))
  return [...horizonMap.values()].sort((a, b) => a.depth - b.depth).map((h, i) => ({
    label: h.label, color: TENSIO_COLORS[i % TENSIO_COLORS.length], depth: h.depth, sensor: h.sensor,
  }))
}

function appendTensioCard(container, metricId, tensioSensors, source = null, emissionMins = null, cardKey = null) {
  const metricDefs = {
    pothydr: { name: 'Potentiel hydrique', unit: 'kPa' },
    tsol:    { name: 'Température du sol', unit: '°C'  }
  }
  const def = metricDefs[metricId]
  const curves = buildTensioCurves(tensioSensors)

  const card = document.createElement('div')
  card.className = 'chart-card tensio-multi-card'
  card.dataset.tensioMetric = metricId
  card.dataset.tensioCurves = JSON.stringify(curves.map(c => ({ depth: c.depth, color: c.color, label: c.label })))
  if (cardKey) { card.dataset.cardKey = cardKey; card.draggable = true }

  const legend = curves.map(c =>
    `<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${c.color};vertical-align:middle;border-radius:1px"></span>
      ${c.label}
    </span>`
  ).join('')

  const sourceHtml = source ? `<span class="chart-card-source">${source}</span>` : ''
  const emHtml = emissionMins != null ? `<span class="chart-card-emission">il y a ${emissionMins} min</span>` : ''
  const toggleHtml = `
    <div class="chart-tensio-toggle">
      <button class="btn-secondary btn-sm tensio-toggle-btn${tensioViewMode === 'capteur' ? ' active' : ''}" data-mode="capteur">Par capteur</button>
      <button class="btn-secondary btn-sm tensio-toggle-btn${tensioViewMode === 'horizon' ? ' active' : ''}" data-mode="horizon">Par horizon</button>
    </div>`

  card.innerHTML = `
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${curves[0]?.color || TENSIO_COLORS[0]}">${def.name}</span>
      <span class="chart-card-unit">${def.unit}</span>
      ${sourceHtml}${emHtml}
    </div>
    ${toggleHtml}
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${legend}</div>
    <svg class="chart-svg tensio-svg" data-metric="${metricId}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `

  card.querySelectorAll('.tensio-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => { tensioViewMode = btn.dataset.mode; renderCharts() })
  })

  container.appendChild(card)
}

function _buildCapaMultiCard(container, horizons, colorKey, title, unit, svgClass, dataKey, cardKey) {
  const card = document.createElement('div')
  card.className = `chart-card ${dataKey}-multi-card`
  card.dataset[dataKey + 'Curves'] = JSON.stringify(horizons.map(h => ({ depth: h.depth, color: h[colorKey], label: h.label })))
  if (cardKey) { card.dataset.cardKey = cardKey; card.draggable = true }

  const legend = horizons.map(h =>
    `<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${h[colorKey]};vertical-align:middle;border-radius:1px"></span>
      ${h.label}
    </span>`
  ).join('')

  card.innerHTML = `
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${horizons[0]?.[colorKey] || '#46DA82'}">${title}</span>
      <span class="chart-card-unit">${unit}</span>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${legend}</div>
    <svg class="chart-svg ${svgClass}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `
  container.appendChild(card)
  return card
}

function appendCapaVwcCard(container, horizons, source = null, emissionMins = null, cardKey = null) {
  _buildCapaMultiCard(container, horizons, 'vwcColor', 'Teneur en eau du sol', '%vol', 'capa-svg', 'capa', cardKey)
}

function appendCapaTsolCard(container, horizons, source = null, emissionMins = null, cardKey = null) {
  _buildCapaMultiCard(container, horizons, 'tsolColor', 'Température du sol par horizon', '°C', 'capa-tsol-svg', 'capaT', cardKey)
}

function appendChartCard(container, m, source = null, emissionMins = null, cardKey = null, unavailable = false, sensorId = null, yearShift = false) {
  const base = m.base()
  const card = document.createElement('div')
  card.className = 'chart-card'
  card.dataset.base       = base
  card.dataset.color      = m.color
  card.dataset.cumul      = m.isCumul ? '1' : ''
  card.dataset.chartType  = m.chartType || 'line'
  card.dataset.metricId   = m.id
  card.dataset.metricName = m.name
  if (yearShift) card.dataset.yearShift = '1'
  card.dataset.metricUnit = m.unit
  if (m.isIrrigation) card.dataset.isIrrigation = '1'
  if (cardKey) { card.dataset.cardKey = cardKey; card.draggable = true }

  const cumulHtml = m.cumul
    ? (() => {
        const cumulText = `${genCumulValue(m, yearShift)} ${m.cumul.unit}`
        return `<div class="chart-cumul"><span class="chart-cumul-label">${m.cumul.label} : <strong>${cumulText}</strong><button class="chart-cumul-add-btn" data-cumul-label="${m.cumul.label}" data-cumul-val="${cumulText}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button></span></div>`
      })()
    : ''
  const sourceHtml = source ? `<span class="chart-card-source">${source}</span>` : ''
  const emHtml = emissionMins != null ? `<span class="chart-card-emission">il y a ${emissionMins} min</span>` : ''

  let expandHtml = ''
  if (sensorId) {
    const stepVal = document.getElementById('time-step')?.value || '1h'
    expandHtml = `<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${sensorId}&metricId=${m.id}&parcelId=${parcelId}&period=${currentPeriod}&step=${stepVal}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`
  }

  const chartContent = unavailable
    ? `<div class="chart-unavailable">Données indisponibles pour ce pas de temps</div>`
    : `<svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>`

  card.innerHTML = `
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${m.color}">${m.name}</span>
      <span class="chart-card-unit">${m.unit}</span>
      ${sourceHtml}${emHtml}${expandHtml}
    </div>
    ${chartContent}
    ${cumulHtml}
  `
  container.appendChild(card)
}

// ─── Global tooltip ───────────────────────────────────────────────────────────

let _tooltip = null
function getTooltip() {
  if (!_tooltip) {
    _tooltip = document.createElement('div')
    _tooltip.className = 'chart-tooltip'
    document.body.appendChild(_tooltip)
  }
  return _tooltip
}

// ─── Color gradient helpers ────────────────────────────────────────────────────

// Returns [colorLow, colorHigh] for a gradient based on the metric color.
// Temperature gets a blue→red gradient. Others: desaturated→full.
function getGradientColors(color, metricId) {
  if (metricId === 'temp' || metricId === 'temperature') return ['#6eb4d4', '#e07050']
  if (metricId === 'tseche' || metricId === 'thumide') return ['#6eb4d4', '#e07050']
  if (metricId === 'temp_rosee') return ['#a0d0f0', '#4090c0']
  // Default: mix towards white at the low end
  return [blendWithWhite(color, 0.55), color]
}

function blendWithWhite(hex, t) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const rr = Math.round(r + (255 - r) * t)
  const gg = Math.round(g + (255 - g) * t)
  const bb = Math.round(b + (255 - b) * t)
  return `#${rr.toString(16).padStart(2,'0')}${gg.toString(16).padStart(2,'0')}${bb.toString(16).padStart(2,'0')}`
}

// ─── Smooth curve path (Catmull-Rom → cubic Bezier) ──────────────────────────

function smoothPath(points) {
  if (points.length < 2) return ''
  if (points.length === 2) {
    return `M${points[0].x},${points[0].y} L${points[1].x},${points[1].y}`
  }
  let d = `M${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(i - 1, 0)]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[Math.min(i + 2, points.length - 1)]
    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6
    d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`
  }
  return d
}

// ─── X-axis label formatter ───────────────────────────────────────────────────

function xLabel(agoMins) {
  const d = new Date(Date.now() - agoMins * 60000)
  if (agoMins < 1440) {
    return `${String(d.getHours()).padStart(2, '0')}h`
  }
  if (agoMins >= 43200) {
    const MONTHS = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aoû', 'sep', 'oct', 'nov', 'déc']
    return MONTHS[d.getMonth()]
  }
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`
}

// ─── Realistic time-series simulation ────────────────────────────────────────

function hourOfDay(minutesAgo) {
  const ms = Date.now() - minutesAgo * 60000
  return new Date(ms).getHours() + new Date(ms).getMinutes() / 60
}

function solarFactor(h) {
  return Math.max(0, Math.sin(Math.PI * (h - 6) / 12))
}

function tempFactor(h) {
  return 0.5 + 0.5 * Math.sin(2 * Math.PI * (h - 4) / 24 - Math.PI / 2)
}

// Variation jour à jour (ex: journée plus ou moins ensoleillée/chaude/humide),
// stable pour une même journée calendaire afin que les agrégats journaliers varient
// de façon cohérente d'un jour à l'autre (et créent des "vagues" au pas horaire).
function dayFactor(minutesAgo) {
  const dayIndex = Math.floor((Date.now() - minutesAgo * 60000) / 86400000)
  const x = Math.sin(dayIndex * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x) // 0..1
}

function genRealisticVal(metricId, base, minutesAgo, noise = 0.15) {
  const h  = hourOfDay(minutesAgo)
  const tf = tempFactor(h)
  const sf = solarFactor(h)
  const df = dayFactor(minutesAgo)
  const n  = () => 1 + (Math.random() - 0.5) * 2 * noise

  switch (metricId) {
    case 'temp': {
      const amp = 0.6 + df * 0.8
      return ((base - 6) + tf * 12 * amp) * n()
    }
    case 'tseche':
    case 'thumide': {
      const amp = 0.6 + df * 0.8
      return ((base - 4) + tf * 8 * amp) * n()
    }
    case 'temp_rosee': {
      const amp = 0.6 + df * 0.8
      const airTemp = (base - 6) + tf * 12 * amp
      return Math.min(airTemp - 1, ((base - 8) + tf * 6 * amp)) * n()
    }
    case 'tsol': {
      const h2 = hourOfDay(minutesAgo + 120)
      const amp = 0.7 + df * 0.6
      return ((base - 3) + tempFactor(h2) * 6 * amp) * n()
    }
    case 'humidite': {
      const wet = 1.4 - df * 0.8
      return Math.min(100, Math.max(20, (base + (1 - tf) * 25 * wet - tf * 15) * n()))
    }
    case 'rayonnement': {
      const cloud = 0.4 + df * 0.9
      return Math.max(0, sf * base * 1.3 * cloud * n())
    }
    case 'etp': {
      const cloud = 0.4 + df * 0.9
      return Math.max(0, sf * base * 1.5 * cloud * n())
    }

    case 'humec': {
      const wet = 1.4 - df * 0.8
      return Math.max(0, base * Math.max(0, 0.8 - sf * 1.2) * wet * n())
    }
    case 'pluie': {
      // Pluie déterministe (seedée sur parcelId + jour calendaire) pour que le graphique,
      // le cumul affiché à côté et les widgets "Pluie"/"Cumuls" du tableau de bord soient cohérents entre eux.
      const ts = Date.now() - minutesAgo * 60000
      const off = Math.floor(ts / 86400000) - Math.floor(Date.now() / 86400000)
      const total = dailyRainMm(off)
      if (total <= 0) return 0
      const startH = Math.floor(rainSeed(off) * 21) // fenêtre de pluie de 3h dans la journée
      const hourOfTs = new Date(ts).getHours() + new Date(ts).getMinutes() / 60
      // La fenêtre de 3h est échantillonnée par tranches de 15 min (12 tranches) : diviser par 12
      // pour que la somme des tranches reconstitue exactement le total journalier `dailyRainMm`.
      return (hourOfTs >= startH && hourOfTs < startH + 3) ? total / 12 : 0
    }
    case 'vent':
    case 'rafales': {
      const windy = 0.5 + df
      return Math.max(0, base * (0.6 + sf * 0.8) * windy * n())
    }
    default:
      return Math.max(0, base * n())
  }
}

// ─── Draw all charts ──────────────────────────────────────────────────────────

function drawAllCharts() {
  const count = getDisplayCount()
  const step  = getStepMinutes()
  const hatchCount = getHatchCount()
  const linkedSensors = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  const tensioSensors = linkedSensors.filter(s => TENSIO_MODELS.includes(s.model))

  document.querySelectorAll('.chart-card').forEach(card => {
    if (card.classList.contains('tensio-multi-card')) {
      const svg = card.querySelector('.tensio-svg')
      const curves = JSON.parse(card.dataset.tensioCurves || '[]')
      // Pas de prévisions pour les sondes sol : la zone hachurée est affichée (si l'agrégat
      // l'impose) mais sans courbe à l'intérieur, comme pour les autres métriques non prévisibles.
      if (svg && curves.length > 0) drawTensioMultiChart(svg, curves, count, step, card.dataset.tensioMetric || 'pothydr', hatchCount)
      return
    }
    if (card.classList.contains('capa-multi-card')) {
      const svg = card.querySelector('.capa-svg')
      const curves = JSON.parse(card.dataset.capaCurves || '[]')
      if (svg && curves.length > 0) drawCapaMultiChart(svg, curves, count, step, 'vwc', hatchCount)
      return
    }
    if (card.classList.contains('capaT-multi-card')) {
      const svg = card.querySelector('.capa-tsol-svg')
      const curves = JSON.parse(card.dataset.capaTCurves || '[]')
      if (svg && curves.length > 0) drawCapaMultiChart(svg, curves, count, step, 'tsol', hatchCount)
      return
    }
    const svg = card.querySelector('.chart-svg')
    if (!svg) return  // custom-rendered cards (vent, etc.) — already drawn
    const base      = parseFloat(card.dataset.base)
    const color     = card.dataset.color
    const isCumul   = card.dataset.cumul === '1'
    const chartType = card.dataset.chartType || 'line'
    const metricId  = card.dataset.metricId || ''
    const metricName = card.dataset.metricName || ''
    const metricUnit = card.dataset.metricUnit || ''
    const yearOffsetMin = card.dataset.yearShift === '1' ? YEAR_OFFSET_MIN : 0
    if (card.dataset.isIrrigation) {
      drawIrrigationChart(svg, color, count, step, hatchCount)
    } else {
      // Pas de prévisions sur la colonne "année dernière" (zone hachurée non pertinente pour du passé)
      const showFcData = yearOffsetMin === 0 && hatchCount > 0 && FORECAST_METRICS.has(metricId)
      const effHatch = yearOffsetMin === 0 ? hatchCount : 0
      drawChart(svg, base, color, count, step, isCumul, chartType, metricId, metricName, metricUnit, effHatch, showFcData, yearOffsetMin)
    }
  })
  renderPhenoOverlay()
  renderNotesOverlay()
}

// curves: [{ depth, color }] — déjà calculé par appendTensioCharts selon le mode
// hatchCount : nombre de pas de la zone "prévisions" — pas de courbe dedans (sondes sol non prévisibles),
// mais la zone hachurée est affichée si l'agrégat sélectionné l'impose, comme pour les autres métriques.
function drawTensioMultiChart(svg, curves, count, step, metricId = 'pothydr', hatchCount = 0) {
  const W = 600, H = 180, PAD = { t: 14, r: 10, b: 28, l: 46 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b
  const unit = metricId === 'tsol' ? '°C' : 'kPa'
  const totalCount = count + hatchCount

  // Générer une série de valeurs par courbe, basée sur la profondeur (historique uniquement)
  const allSeries = curves.map(c => {
    const base = metricId === 'tsol' ? (16 - c.depth * 0.04 + Math.random() * 3) : (20 + c.depth * 0.8 + Math.random() * 20)
    return Array.from({ length: count }, (_, idx) => {
      const minsAgo = (count - 1 - idx) * step
      return metricId === 'tsol' ? genRealisticVal('tsol', base, minsAgo) : Math.max(0, genRealisticVal('pothydr', base, minsAgo))
    })
  })

  const allVals = allSeries.flat()
  const minV = Math.min(...allVals)
  const maxV = Math.max(...allVals)
  const range = maxV - minV || 1

  const xOf = i => PAD.l + (i / Math.max(totalCount - 1, 1)) * innerW
  const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

  const clipId = `tc-${Math.random().toString(36).slice(2)}`
  let out = `<defs><clipPath id="${clipId}"><rect x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}"/></clipPath></defs>`

  // Grid lines
  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = maxV - (i / 4) * range
    out += `<line x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W - PAD.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`
    out += `<text x="${PAD.l - 5}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${v.toFixed(0)}</text>`
  }

  // Zone striée "prévisions" — affichée si l'agrégat l'impose, sans données à l'intérieur
  if (hatchCount > 0) {
    const boundaryX = xOf(count - 0.5)
    const stripeId = `tc_stripe_${Math.random().toString(36).slice(2, 8)}`
    out += `<defs><pattern id="${stripeId}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${boundaryX.toFixed(1)}" y="${PAD.t}" width="${(W - PAD.r - boundaryX).toFixed(1)}" height="${innerH}" fill="url(#${stripeId})"/>
      <line x1="${boundaryX.toFixed(1)}" y1="${PAD.t}" x2="${boundaryX.toFixed(1)}" y2="${(PAD.t + innerH)}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(W - PAD.r - 4).toFixed(1)}" y="${(PAD.t + 12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`
  }

  // Draw one curve per entry in curves[]
  allSeries.forEach((vals, ci) => {
    const pts = vals.map((v, i) => ({ x: xOf(i), y: yOf(v) }))
    const path = smoothPath(pts)
    out += `<path d="${path}" fill="none" stroke="${curves[ci].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${clipId})"/>`
  })

  // X-axis baseline + labels (le futur s'affiche toujours en date, jamais en heure)
  out += `<line x1="${PAD.l}" y1="${PAD.t + innerH}" x2="${W - PAD.r}" y2="${PAD.t + innerH}" stroke="var(--bdr2)" stroke-width="1"/>`
  const labelStep = Math.max(1, Math.floor(totalCount / 6))
  for (let i = 0; i < totalCount; i += labelStep) {
    const agoMins = (count - i) * step
    const lbl = (step >= 1440 || agoMins < 0)
      ? (() => { const d = new Date(Date.now() - agoMins * 60000); return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}` })()
      : xLabel(agoMins)
    out += `<text x="${xOf(i).toFixed(1)}" y="${(PAD.t + innerH + 14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${lbl}</text>`
  }

  out += `<rect class="chart-hover-rect" x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}" fill="transparent" style="cursor:crosshair"/>`

  svg.innerHTML = out

  attachMultiChartTooltip(svg, allSeries, curves, xOf, yOf, count, step, unit, PAD, W, totalCount)
}

// CAPA multi-horizon chart — VWC (%vol) or Tsol (°C) depending on mode
// hatchCount : zone "prévisions" affichée sans données (sondes sol non prévisibles)
function drawCapaMultiChart(svg, curves, count, step, mode = 'vwc', hatchCount = 0) {
  const W = 600, H = 180, PAD = { t: 14, r: 10, b: 28, l: 46 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b
  const totalCount = count + hatchCount

  const allSeries = curves.map((c, ci) => {
    if (mode === 'tsol') {
      const base = 16 - c.depth * 0.06 + ci * 0.5 + Math.random() * 3
      return Array.from({ length: count }, (_, idx) => {
        const minsAgo = (count - 1 - idx) * step
        return genRealisticVal('tsol', base, minsAgo)
      })
    }
    const base = 35 - c.depth * 0.15 + ci * 2 + Math.random() * 8
    return Array.from({ length: count }, (_, idx) => {
      const minsAgo = (count - 1 - idx) * step
      return Math.max(10, Math.min(55, genRealisticVal('teneur-eau', base, minsAgo)))
    })
  })

  const allVals = allSeries.flat()
  const minV = Math.floor(Math.min(...allVals) - 2)
  const maxV = Math.ceil(Math.max(...allVals) + 2)
  const range = maxV - minV || 1

  const xOf = i => PAD.l + (i / Math.max(totalCount - 1, 1)) * innerW
  const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

  const clipId = `cc-${Math.random().toString(36).slice(2)}`
  let out = `<defs><clipPath id="${clipId}"><rect x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}"/></clipPath></defs>`

  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = maxV - (i / 4) * range
    out += `<line x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W - PAD.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`
    out += `<text x="${PAD.l - 5}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${v.toFixed(0)}</text>`
  }

  // Zone striée "prévisions" — affichée si l'agrégat l'impose, sans données à l'intérieur
  if (hatchCount > 0) {
    const boundaryX = xOf(count - 0.5)
    const stripeId = `cc_stripe_${Math.random().toString(36).slice(2, 8)}`
    out += `<defs><pattern id="${stripeId}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${boundaryX.toFixed(1)}" y="${PAD.t}" width="${(W - PAD.r - boundaryX).toFixed(1)}" height="${innerH}" fill="url(#${stripeId})"/>
      <line x1="${boundaryX.toFixed(1)}" y1="${PAD.t}" x2="${boundaryX.toFixed(1)}" y2="${(PAD.t + innerH)}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(W - PAD.r - 4).toFixed(1)}" y="${(PAD.t + 12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`
  }

  allSeries.forEach((vals, ci) => {
    const pts = vals.map((v, i) => ({ x: xOf(i), y: yOf(v) }))
    const path = smoothPath(pts)
    out += `<path d="${path}" fill="none" stroke="${curves[ci].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${clipId})"/>`
  })

  out += `<line x1="${PAD.l}" y1="${PAD.t + innerH}" x2="${W - PAD.r}" y2="${PAD.t + innerH}" stroke="var(--bdr2)" stroke-width="1"/>`
  const labelStep = Math.max(1, Math.floor(totalCount / 6))
  for (let i = 0; i < totalCount; i += labelStep) {
    const agoMins = (count - i) * step
    const lbl = (step >= 1440 || agoMins < 0)
      ? (() => { const d = new Date(Date.now() - agoMins * 60000); return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}` })()
      : xLabel(agoMins)
    out += `<text x="${xOf(i).toFixed(1)}" y="${(PAD.t + innerH + 14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${lbl}</text>`
  }

  out += `<rect class="chart-hover-rect" x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}" fill="transparent" style="cursor:crosshair"/>`

  svg.innerHTML = out

  attachMultiChartTooltip(svg, allSeries, curves, xOf, yOf, count, step, mode === 'tsol' ? '°C' : '%vol', PAD, W, totalCount)
}

// Tooltip pour les graphiques multi-courbes (tensio par horizon/capteur, capa par horizon) :
// affiche la valeur de chaque courbe à la position survolée, avec sa couleur/son libellé.
function attachMultiChartTooltip(svg, allSeries, curveLabels, xOf, yOf, count, stepMins, unit, PAD, W, totalCount = count) {
  const tip  = getTooltip()
  const rect = svg.querySelector('.chart-hover-rect')
  if (!rect) return

  const ns = 'http://www.w3.org/2000/svg'
  const dots = allSeries.map((_, ci) => {
    const dot = document.createElementNS(ns, 'circle')
    dot.setAttribute('r', '4')
    dot.setAttribute('fill', curveLabels[ci]?.color || '#888')
    dot.setAttribute('stroke', '#fff')
    dot.setAttribute('stroke-width', '1.5')
    dot.style.display = 'none'
    dot.style.pointerEvents = 'none'
    svg.appendChild(dot)
    return dot
  })

  rect.addEventListener('mousemove', e => {
    const svgRect = svg.getBoundingClientRect()
    const scaleX  = W / svgRect.width
    const svgX    = (e.clientX - svgRect.left) * scaleX
    const innerW  = W - PAD.l - PAD.r
    const frac    = Math.max(0, Math.min(1, (svgX - PAD.l) / innerW))
    const idx     = Math.round(frac * (totalCount - 1))
    if (idx < 0) return

    const rows = allSeries.map((vals, ci) => {
      const v = vals[idx]
      if (v === undefined) return ''
      dots[ci].setAttribute('cx', xOf(idx))
      dots[ci].setAttribute('cy', yOf(v))
      dots[ci].style.display = ''
      const label = curveLabels[ci]?.label || ''
      const color = curveLabels[ci]?.color || '#888'
      const valLabel = Math.abs(v) >= 100 ? v.toFixed(1) : v.toFixed(2)
      return `<div style="display:flex;align-items:center;gap:5px;margin-top:2px">
        <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${color};flex-shrink:0"></span>
        <span style="color:var(--txt2)">${label}</span>
        <strong style="margin-left:auto;color:${color}">${valLabel} ${unit}</strong>
      </div>`
    }).join('')

    if (!rows) {
      dots.forEach(d => d.style.display = 'none')
      tip.style.display = 'none'
      return
    }

    const agoMins = (count - 1 - idx) * stepMins
    const tsLabel = (stepMins >= 1440 || agoMins < 0)
      ? (() => { const d = new Date(Date.now() - agoMins * 60000); return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}` })()
      : xLabel(agoMins)
    tip.innerHTML = `<div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${tsLabel}</div>${rows}`
    tip.style.display = 'block'
    tip.style.left = `${Math.min(e.clientX + 12, window.innerWidth - 200)}px`
    tip.style.top  = `${e.clientY - 10}px`
  })

  rect.addEventListener('mouseleave', () => {
    tip.style.display = 'none'
    dots.forEach(d => d.style.display = 'none')
  })
}

function drawChart(svg, base, color, count, stepMins, isCumul, chartType = 'line', metricId = '', metricName = '', metricUnit = '', hatchCount = 0, showFcData = false, yearOffsetMin = 0) {
  const W = 600, H = 180, PAD = { t: 14, r: 10, b: 28, l: 46 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b
  const totalCount = count + hatchCount
  const fcCount = showFcData ? hatchCount : 0
  const genCount = count + fcCount

  // Generate values with realistic day/night cycle
  const rawPerStep = Math.max(1, Math.round(stepMins / 15))
  const vals = Array.from({ length: genCount }, (_, idx) => {
    const minsAgo = (count - 1 - idx) * stepMins + yearOffsetMin
    if (isCumul) {
      let sum = 0
      for (let j = 0; j < rawPerStep; j++) {
        sum += genRealisticVal(metricId, base / rawPerStep, minsAgo + j * (stepMins / rawPerStep))
      }
      return sum
    } else if (rawPerStep > 1) {
      // Average sub-samples to avoid single-point solar bias (e.g. ETP/rayonnement at night = 0)
      let sum = 0
      for (let j = 0; j < rawPerStep; j++) {
        sum += genRealisticVal(metricId, base, minsAgo + j * (stepMins / rawPerStep))
      }
      return sum / rawPerStep
    } else {
      return genRealisticVal(metricId, base, minsAgo)
    }
  })

  const minV = chartType === 'bar' ? 0 : Math.min(...vals)
  const maxV = Math.max(...vals)
  const range = maxV - minV || 1

  const xOf = i => PAD.l + (i / Math.max(totalCount - 1, 1)) * innerW
  const yOf = v => PAD.t + innerH - ((v - minV) / range) * innerH

  // Gradient ID (unique per SVG element)
  const gradId = `grad_${Math.random().toString(36).slice(2)}`
  const [colorLow, colorHigh] = getGradientColors(color, metricId)

  let out = `<defs>
    <linearGradient id="${gradId}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${colorLow}"/>
      <stop offset="100%" stop-color="${colorHigh}"/>
    </linearGradient>
    <clipPath id="clip_${gradId}">
      <rect x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}"/>
    </clipPath>
  </defs>`

  // ── Zone striée représentant la portion "prévisions" du graphique ──
  if (hatchCount > 0) {
    const boundaryX = xOf(count - 0.5)
    const stripeId = `stripe_${gradId}`
    out += `<defs><pattern id="${stripeId}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${boundaryX.toFixed(1)}" y="${PAD.t}" width="${(W - PAD.r - boundaryX).toFixed(1)}" height="${innerH}" fill="url(#${stripeId})"/>
      <line x1="${boundaryX.toFixed(1)}" y1="${PAD.t}" x2="${boundaryX.toFixed(1)}" y2="${PAD.t + innerH}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(W - PAD.r - 4).toFixed(1)}" y="${(PAD.t + 12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`
  }

  // ── Horizontal grid lines + Y labels ──
  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = maxV - (i / 4) * range
    const label = Math.abs(v) >= 100 ? v.toFixed(0) : Math.abs(v) >= 10 ? v.toFixed(1) : v.toFixed(2)
    out += `<line x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W - PAD.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`
    out += `<text x="${PAD.l - 5}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${label}</text>`
  }

  // ── X-axis baseline ──
  out += `<line x1="${PAD.l}" y1="${PAD.t + innerH}" x2="${W - PAD.r}" y2="${PAD.t + innerH}" stroke="var(--bdr2)" stroke-width="1"/>`

  // ── Vertical grid lines + X labels ── (le futur s'affiche toujours en date, jamais en heure)
  const labelStep = Math.max(1, Math.floor(totalCount / 6))
  for (let i = 0; i < totalCount; i += labelStep) {
    const x = xOf(i).toFixed(1)
    const agoMins = (count - i) * stepMins
    const lbl = (stepMins >= 1440 || agoMins < 0)
      ? (() => { const d = new Date(Date.now() - agoMins * 60000); return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}` })()
      : xLabel(agoMins)
    out += `<line x1="${x}" y1="${PAD.t}" x2="${x}" y2="${PAD.t + innerH}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`
    out += `<text x="${x}" y="${PAD.t + innerH + 14}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${lbl}</text>`
  }

  if (chartType === 'bar') {
    const barW = Math.max(2, (innerW / totalCount) * 0.65)
    vals.forEach((v, i) => {
      if (v <= 0) return
      const isFc = i >= count
      const x = xOf(i)
      const y = yOf(v)
      const h = (PAD.t + innerH) - y
      out += `<rect x="${(x - barW / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" fill="${isFc ? '#C7C7CC' : `url(#${gradId})`}" opacity="${isFc ? '0.5' : '0.9'}" rx="1"/>`
    })
  } else {
    const histPts = vals.slice(0, count).map((v, i) => ({ x: xOf(i), y: yOf(v) }))
    const linePath = smoothPath(histPts)

    // Area fill (very light)
    const areaD = linePath +
      ` L${xOf(count - 1).toFixed(1)},${PAD.t + innerH} L${PAD.l.toFixed(1)},${PAD.t + innerH} Z`
    out += `<path d="${areaD}" fill="${colorHigh}" opacity="0.07" clip-path="url(#clip_${gradId})"/>`
    // Stroke with gradient
    out += `<path d="${linePath}" fill="none" stroke="url(#${gradId})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${gradId})"/>`

    if (fcCount > 0) {
      const fcPts = vals.slice(count - 1).map((v, i) => ({ x: xOf(count - 1 + i), y: yOf(v) }))
      const fcPath = smoothPath(fcPts)
      out += `<path d="${fcPath}" fill="none" stroke="url(#${gradId})" stroke-width="2" stroke-dasharray="5,4" stroke-linejoin="round" stroke-linecap="round" opacity="0.5" clip-path="url(#clip_${gradId})"/>`
    }
  }

  // ── Invisible overlay for tooltip interaction ──
  out += `<rect class="chart-hover-rect" x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}" fill="transparent" style="cursor:crosshair"/>`

  svg.innerHTML = out

  // Attach tooltip
  attachChartTooltip(svg, vals, xOf, yOf, minV, maxV, totalCount, count, stepMins, metricName, metricUnit, color, PAD, W, H)
}

function attachChartTooltip(svg, vals, xOf, yOf, _minV, _maxV, totalCount, nowCount, stepMins, metricName, metricUnit, color, PAD, W, _H) {
  const tip  = getTooltip()
  const rect = svg.querySelector('.chart-hover-rect')
  if (!rect) return

  // Dot marker (reused)
  const ns = 'http://www.w3.org/2000/svg'
  const dot = document.createElementNS(ns, 'circle')
  dot.setAttribute('r', '4')
  dot.setAttribute('fill', color)
  dot.setAttribute('stroke', '#fff')
  dot.setAttribute('stroke-width', '1.5')
  dot.style.display = 'none'
  dot.style.pointerEvents = 'none'
  svg.appendChild(dot)

  rect.addEventListener('mousemove', e => {
    const svgRect = svg.getBoundingClientRect()
    const scaleX  = W / svgRect.width
    const svgX    = (e.clientX - svgRect.left) * scaleX

    // Find nearest index
    const innerW = W - PAD.l - PAD.r
    const frac   = Math.max(0, Math.min(1, (svgX - PAD.l) / innerW))
    const idx    = Math.round(frac * (totalCount - 1))
    if (idx < 0 || idx >= vals.length) return

    const v  = vals[idx]
    const cx = xOf(idx)
    const cy = yOf(v)

    dot.setAttribute('cx', cx)
    dot.setAttribute('cy', cy)
    dot.style.display = ''

    const agoMins = (nowCount - idx) * stepMins
    const tsLabel = (stepMins >= 1440 || agoMins < 0)
      ? (() => { const d = new Date(Date.now() - agoMins * 60000); return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}` })()
      : xLabel(agoMins)
    const valLabel = Math.abs(v) >= 100 ? v.toFixed(1) : v.toFixed(2)

    tip.innerHTML = `
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${metricName}</div>
      <div class="chart-tooltip-val" style="color:${color}">${valLabel} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${metricUnit}</span></div>
      <div class="chart-tooltip-ts">${tsLabel}</div>
    `
    tip.style.display = 'block'
    const tx = e.clientX + 12
    const ty = e.clientY - 10
    tip.style.left = `${Math.min(tx, window.innerWidth - 160)}px`
    tip.style.top  = `${ty}px`
  })

  rect.addEventListener('mouseleave', () => {
    tip.style.display = 'none'
    dot.style.display = 'none'
  })
}

function irrigationSeriesWeb(plotId, count, stepMins, hatchCount = 0) {
  const now = Date.now()
  const bucketMs = stepMins * 60000
  const startMs = now - count * bucketMs
  const totalCount = count + hatchCount
  const vals = new Array(totalCount).fill(0)
  IRRIG_SEASON.filter(i => i.plotId === plotId).forEach(i => {
    const t = new Date(i.iso).getTime()
    if (t < startMs) return
    const idx = Math.min(totalCount - 1, Math.floor((t - startMs) / bucketMs))
    if (idx >= 0) vals[idx] += i.mm || 0
  })
  return vals
}

// Disponibilité mock d'Irrigation Advizor (même règle que irrigation-page.js isAdvisorPlot)
function isAdvisorPlotWeb(p) { return p.id % 3 === 2 }
function advisorDayMmWeb(p, dayOffset) {
  const seed = ((p.id * 13 + dayOffset * 23) % 17) / 17
  return seed > 0.4 ? +(3 + seed * 12).toFixed(1) : 0
}

function drawIrrigationChart(svg, color, count, stepMins, hatchCount = 0) {
  const W = 600, H = 180, PAD = { t: 12, r: 8, b: 28, l: 44 }
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  // Sur les parcelles avec Irrigation Advizor (pas de temps journalier) : la recommandation
  // J+n n'est affichée que si la période choisie va effectivement jusqu'à J+n (hatchCount
  // = nombre de jours de prévision réellement couverts par la période/pas de temps courants).
  const advisorActive = stepMins === 1440 && isAdvisorPlotWeb(parcelBase)
  const totalCount = count + hatchCount

  const bins = irrigationSeriesWeb(parcelId, count, stepMins, hatchCount)

  // Histogramme des irrigations recommandées (Irrigation Advizor) sur J+1 → J+7
  const bucketMs = stepMins * 60000
  const startMs  = Date.now() - count * bucketMs
  const advisorBars = []
  if (advisorActive) {
    const dayStart = new Date(); dayStart.setHours(0, 0, 0, 0)
    for (let dOff = 1; dOff <= 7; dOff++) {
      const v = advisorDayMmWeb(parcelBase, dOff)
      if (v <= 0) continue
      const dayMidMs = dayStart.getTime() + dOff * 86400000 + 12 * 3600000
      const idx = Math.floor((dayMidMs - startMs) / bucketMs)
      if (idx >= count && idx < totalCount) advisorBars.push({ idx, v })
    }
  }

  const maxV = Math.max(...bins, ...advisorBars.map(b => b.v), 1)
  const xOf = i => PAD.l + (i / Math.max(totalCount - 1, 1)) * innerW
  const yOf = v => PAD.t + innerH - (v / maxV) * innerH

  let lines = ''
  for (let i = 0; i <= 4; i++) {
    const y = PAD.t + (i / 4) * innerH
    const v = (maxV - (i / 4) * maxV).toFixed(1)
    lines += `<line x1="${PAD.l}" y1="${y}" x2="${W - PAD.r}" y2="${y}" stroke="var(--bdr2)" stroke-width="1"/>`
    lines += `<text x="${PAD.l - 4}" y="${y + 4}" text-anchor="end" font-size="10" fill="var(--txt3)">${v}</text>`
  }

  // ── Axe X : baseline + dates (le futur s'affiche toujours en date, jamais en heure) ──
  lines += `<line x1="${PAD.l}" y1="${PAD.t + innerH}" x2="${W - PAD.r}" y2="${PAD.t + innerH}" stroke="var(--bdr2)" stroke-width="1"/>`
  const labelStep = Math.max(1, Math.floor(totalCount / 6))
  for (let i = 0; i < totalCount; i += labelStep) {
    const x = xOf(i).toFixed(1)
    const agoMins = (count - i) * stepMins
    const lbl = (stepMins >= 1440 || agoMins < 0)
      ? (() => { const d = new Date(Date.now() - agoMins * 60000); return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}` })()
      : xLabel(agoMins)
    lines += `<text x="${x}" y="${(PAD.t + innerH + 14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${lbl}</text>`
  }

  // Zone striée représentant la portion "prévisions" du graphique
  if (hatchCount > 0) {
    const boundaryX = xOf(count - 0.5)
    const stripeId = `irrig_stripe_${Math.random().toString(36).slice(2, 8)}`
    lines += `<defs><pattern id="${stripeId}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${boundaryX.toFixed(1)}" y="${PAD.t}" width="${(W - PAD.r - boundaryX).toFixed(1)}" height="${innerH}" fill="url(#${stripeId})"/>
      <line x1="${boundaryX.toFixed(1)}" y1="${PAD.t}" x2="${boundaryX.toFixed(1)}" y2="${PAD.t + innerH}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(W - PAD.r - 4).toFixed(1)}" y="${(PAD.t + 12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`
  }

  const barW = Math.max(4, (innerW / totalCount) * 0.65)
  bins.forEach((v, i) => {
    if (v <= 0) return
    const isFc = i >= count
    const x = xOf(i)
    const y = yOf(v)
    const h = (PAD.t + innerH) - y
    lines += `<rect x="${(x - barW / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" fill="${isFc ? '#C7C7CC' : color}" opacity="${isFc ? '0.5' : '0.85'}" rx="1"/>`
  })

  advisorBars.forEach(({ idx, v }) => {
    const x = xOf(idx)
    const y = yOf(v)
    const h = (PAD.t + innerH) - y
    lines += `<rect x="${(x - barW / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" fill="none" stroke="${color}" stroke-width="1.5" stroke-dasharray="3,2" rx="1"/>`
  })
  if (advisorBars.length) {
    lines += `<text x="${(PAD.l + 2).toFixed(1)}" y="${(PAD.t + 12).toFixed(1)}" font-size="10" font-family="var(--font)" fill="${color}" font-style="italic">┄ Recommandé (Irrigation Advizor)</text>`
  }

  lines += `<rect class="chart-hover-rect" x="${PAD.l}" y="${PAD.t}" width="${innerW}" height="${innerH}" fill="transparent" style="cursor:crosshair"/>`

  svg.innerHTML = lines

  attachChartTooltip(svg, bins, xOf, yOf, 0, maxV, totalCount, count, stepMins, 'Irrigation', 'mm', color, PAD, W, H)
}

function genCumulValue(m, yearShift = false) {
  if (m.id === 'pluie') {
    // Dérivé de la même série journalière déterministe que le graphique : le cumul affiché
    // correspond toujours à la somme réelle de la pluie sur la période sélectionnée.
    const days = Math.max(1, Math.ceil(getPeriodMinutes() / 1440))
    const yearOff = yearShift ? 365 : 0
    let total = 0
    for (let off = -(days - 1); off <= 0; off++) total += dailyRainMm(off - yearOff)
    return +total.toFixed(1)
  }
  const table = { etp: () => rndf(15, 80), rayonnement: () => rnd(500, 3000) }
  const fn = table[m.id]
  return fn ? fn() : rnd(10, 100)
}

// ─── Period controls ──────────────────────────────────────────────────────────

function initPeriodControls() {
  const presets = document.getElementById('period-presets')
  const customRow = document.getElementById('custom-date-row')
  const stepSel = document.getElementById('time-step')

  // Set default dates for custom picker
  const today = new Date()
  const weekAgo = new Date(today - 7 * 86400000)
  document.getElementById('date-from').value = weekAgo.toISOString().slice(0, 10)
  document.getElementById('date-to').value   = today.toISOString().slice(0, 10)

  presets.addEventListener('click', e => {
    const btn = e.target.closest('.period-preset-btn')
    if (!btn) return
    presets.querySelectorAll('.period-preset-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    currentPeriod = btn.dataset.period

    if (currentPeriod === 'custom') {
      customRow.style.display = 'flex'
    } else {
      customRow.style.display = 'none'
      const stepSel = document.getElementById('time-step')
      if (stepSel) stepSel.value = getDefaultStep(currentPeriod)
      renderCharts()
    }
  })

  document.getElementById('date-from').addEventListener('change', applyCustomDates)
  document.getElementById('date-to').addEventListener('change', applyCustomDates)
  stepSel.addEventListener('change', renderCharts)
}

function applyCustomDates() {
  const from = document.getElementById('date-from').value
  const to   = document.getElementById('date-to').value
  if (from && to) {
    customFrom = new Date(from)
    customTo   = new Date(to + 'T23:59:59')
    if (customFrom < customTo) renderCharts()
  }
}

// ─── Phenological stages ──────────────────────────────────────────────────────

const PHENO_STAGES_BY_CROP = {
  'Blé tendre': [
    { name: 'Semis',       date: '2025-10-20', bbch: 'BBCH 00', desc: 'Semis en sol réchauffé. Profondeur optimale 3–4 cm.' },
    { name: 'Levée',       date: '2025-11-05', bbch: 'BBCH 09', desc: 'Apparition de la première feuille au-dessus du sol.' },
    { name: 'Tallage',     date: '2026-02-15', bbch: 'BBCH 21', desc: '1er talle apparu. Période sensible au froid.' },
    { name: 'Épi 1 cm',    date: '2026-04-20', bbch: 'BBCH 30', desc: 'Montaison. Début de la différenciation de l\'épi.' },
    { name: 'Épiaison',    date: '2026-05-20', bbch: 'BBCH 55', desc: 'La moitié de l\'épiaison est atteinte. Risque maximal de fusariose.' },
    { name: 'Floraison',   date: '2026-05-28', bbch: 'BBCH 65', desc: 'Pleine floraison. Fenêtre critique pour la qualité du grain.' },
    { name: 'Maturité',    date: '2026-07-10', bbch: 'BBCH 89', desc: 'Grain dur, teneur en eau ≤ 15 %. Récolte possible.' },
  ],
  'Maïs': [
    { name: 'Semis',       date: '2026-04-25', bbch: 'BBCH 00', desc: 'Sol > 10 °C à 5 cm. Fenêtre de semis idéale.' },
    { name: 'Levée',       date: '2026-05-10', bbch: 'BBCH 09', desc: 'Coleoptile visible. 10 jours après semis en conditions normales.' },
    { name: '4 feuilles',  date: '2026-05-28', bbch: 'BBCH 14', desc: 'V4. Intervention herbicide possible.' },
    { name: '6 feuilles',  date: '2026-06-12', bbch: 'BBCH 16', desc: 'V6. Stade critique pour la nutrition azotée.' },
    { name: 'Floraison ♂', date: '2026-07-15', bbch: 'BBCH 65', desc: 'VT. Émission du pollen. Forte demande en eau (≥ 8 mm/j).' },
    { name: 'Soie',        date: '2026-07-18', bbch: 'BBCH 67', desc: 'R1. Fécondation. Sensibilité maximale au stress hydrique.' },
    { name: 'Maturité',    date: '2026-09-20', bbch: 'BBCH 89', desc: 'Point noir visible. Récolte selon teneur en eau.' },
  ],
  'Colza': [
    { name: 'Semis',       date: '2025-08-25', bbch: 'BBCH 00', desc: 'Sol humide, T° < 25 °C. Objectif : 30 plants/m².' },
    { name: 'Levée',       date: '2025-09-05', bbch: 'BBCH 09', desc: 'Cotylédon visible. Période à risque limaces.' },
    { name: 'Rosette',     date: '2025-11-15', bbch: 'BBCH 18', desc: '8 feuilles étalées. Bon état pour entrer en hiver.' },
    { name: 'Reprise',     date: '2026-02-20', bbch: 'BBCH 30', desc: 'Allongement de l\'hypocotyle. Fin de la période de vernalisation.' },
    { name: 'Bouton floral',date:'2026-03-25', bbch: 'BBCH 51', desc: 'Inflorescence visible. Risque sclérotinia à surveiller.' },
    { name: 'Floraison',   date: '2026-04-10', bbch: 'BBCH 65', desc: 'Pleine floraison. Pollinisation entomophile. Éviter les traitements.' },
    { name: 'Siliques',    date: '2026-05-05', bbch: 'BBCH 75', desc: 'Siliques de 2 cm. Fin de floraison, début de remplissage.' },
    { name: 'Maturité',    date: '2026-07-05', bbch: 'BBCH 89', desc: 'Siliques brunes, graines noires. Seuil récolte < 9 % eau.' },
  ],
  'Tournesol': [
    { name: 'Semis',       date: '2026-04-20', bbch: 'BBCH 00', desc: 'Sol > 8 °C à 5 cm. Profondeur 4–5 cm.' },
    { name: 'Levée',       date: '2026-05-05', bbch: 'BBCH 09', desc: 'Cotylédon hors sol. Période sensible aux oiseaux.' },
    { name: '4 feuilles',  date: '2026-05-25', bbch: 'BBCH 14', desc: 'V4. Interventions herbicides possibles.' },
    { name: 'Bouton floral',date:'2026-06-25', bbch: 'BBCH 51', desc: 'E2. Bouton visible. Fin du développement végétatif.' },
    { name: 'Floraison',   date: '2026-07-10', bbch: 'BBCH 65', desc: 'R5.1. Fleurs ligulées ouvertes. Stress hydrique critique.' },
    { name: 'Maturité',    date: '2026-09-05', bbch: 'BBCH 89', desc: 'Capitule brun, dos jaune. Teneur en eau 9–12 %.' },
  ],
  'Vigne': [
    { name: 'Débourrement', date: '2026-04-05', bbch: 'BBCH 05', desc: 'Bourgeon en coton. Risque gel augmente fortement.' },
    { name: 'Sortie feuilles', date: '2026-04-20', bbch: 'BBCH 11', desc: '1ère feuille étalée. Début des traitements prophylactiques.' },
    { name: 'Floraison',   date: '2026-06-10', bbch: 'BBCH 65', desc: 'Anthèse. Niveau de risque mildiou et oïdium maximal.' },
    { name: 'Nouaison',    date: '2026-06-25', bbch: 'BBCH 71', desc: 'Baies visibles. Consolidation du rendement.' },
    { name: 'Véraison',    date: '2026-08-05', bbch: 'BBCH 81', desc: 'Changement de couleur. Arrêt des traitements phytos recommandé.' },
    { name: 'Récolte',     date: '2026-09-15', bbch: 'BBCH 89', desc: 'Maturité technologique. Date selon profil variétal.' },
  ],
  'Sorgho': [
    { name: 'Semis',       date: '2026-05-10', bbch: 'BBCH 00', desc: 'Sol > 12 °C à 5 cm.' },
    { name: 'Levée',       date: '2026-05-25', bbch: 'BBCH 09', desc: 'Coleoptile visible.' },
    { name: 'Montaison',   date: '2026-07-01', bbch: 'BBCH 30', desc: 'Début de la montaison. Forte demande azotée.' },
    { name: 'Floraison',   date: '2026-07-25', bbch: 'BBCH 65', desc: 'Sensibilité maximale au stress hydrique.' },
    { name: 'Maturité',    date: '2026-09-15', bbch: 'BBCH 89', desc: 'Teneur en eau < 25 %. Récolte adaptée.' },
  ],
  'Orge de printemps': [
    { name: 'Semis',         date: '2026-03-15', bbch: 'BBCH 00', desc: 'Semis dès que sol ressuyé, T° > 5 °C.' },
    { name: 'Levée',         date: '2026-04-01', bbch: 'BBCH 09', desc: 'Coleoptile visible. Période sensible aux limaces.' },
    { name: 'Tallage',       date: '2026-04-20', bbch: 'BBCH 21', desc: 'Premier talle. Couverture du sol progressive.' },
    { name: 'Montaison',     date: '2026-05-10', bbch: 'BBCH 30', desc: 'Allongement du premier entre-nœud.' },
    { name: 'Épiaison',      date: '2026-06-05', bbch: 'BBCH 55', desc: 'Moitié de l\'épiaison atteinte.' },
    { name: 'Floraison',     date: '2026-06-15', bbch: 'BBCH 65', desc: 'Anthèse. Risque fusariose à surveiller.' },
    { name: 'Grain pâteux',  date: '2026-07-05', bbch: 'BBCH 83', desc: 'Grain à consistance pâteuse. Maturation avancée.' },
    { name: 'Récolte',       date: '2026-08-05', bbch: 'BBCH 89', desc: 'Grain dur, teneur en eau ≤ 15 %.' },
  ],
  'Orge': [
    { name: 'Semis',         date: '2025-10-20', bbch: 'BBCH 00', desc: 'Semis en sol réchauffé, profondeur 3–4 cm.' },
    { name: 'Levée',         date: '2025-11-04', bbch: 'BBCH 09', desc: 'Coleoptile visible. Surveillance limaces.' },
    { name: 'Tallage',       date: '2026-02-08', bbch: 'BBCH 21', desc: 'Reprise de végétation. Premier talle.' },
    { name: 'Montaison',     date: '2026-04-02', bbch: 'BBCH 30', desc: 'Allongement du premier entre-nœud.' },
    { name: 'Épiaison',      date: '2026-05-07', bbch: 'BBCH 55', desc: 'Moitié de l\'épiaison atteinte.' },
    { name: 'Floraison',     date: '2026-05-18', bbch: 'BBCH 65', desc: 'Anthèse. Risque fusariose à surveiller.' },
    { name: 'Grain pâteux',  date: '2026-06-05', bbch: 'BBCH 83', desc: 'Grain à consistance pâteuse. Maturation avancée.' },
    { name: 'Récolte',       date: '2026-07-01', bbch: 'BBCH 89', desc: 'Grain dur, teneur en eau ≤ 15 %.' },
  ],
  'Pomme de terre': [
    { name: 'Plantation',    date: '2026-04-02', bbch: 'BBCH 00', desc: 'Tubercules-semences à 10 cm, espacement 30–35 cm.' },
    { name: 'Levée',         date: '2026-04-26', bbch: 'BBCH 09', desc: 'Tiges émergées. Risque gel résiduel.' },
    { name: 'Croissance',    date: '2026-05-15', bbch: 'BBCH 31', desc: 'Fermeture du rang. Première application fongicide.' },
    { name: 'Tuberisation',  date: '2026-06-05', bbch: 'BBCH 71', desc: 'Initiation des tubercules. Demande en eau maximale.' },
    { name: 'Grossissement', date: '2026-07-01', bbch: 'BBCH 81', desc: 'Grossissement actif. Irrigation critique.' },
    { name: 'Maturité',      date: '2026-08-15', bbch: 'BBCH 89', desc: 'Fanes sèches, peau des tubercules fixée. Récolte.' },
  ],
  'Cerisier': [
    { name: 'Dormance',        date: '2025-12-15', bbch: 'BBCH 00', desc: 'Repos végétatif. Besoin en froid accumulé.' },
    { name: 'Bourgeons',       date: '2026-02-20', bbch: 'BBCH 03', desc: 'Gonflement des bourgeons. Chilling satisfait.' },
    { name: 'Débourrement',    date: '2026-03-18', bbch: 'BBCH 07', desc: 'Pointe verte visible. Risque gel fort (T° critique −2 °C).' },
    { name: 'Floraison',       date: '2026-04-08', bbch: 'BBCH 65', desc: 'Pleine floraison. Pollinisation croisée nécessaire.' },
    { name: 'Nouaison',        date: '2026-04-28', bbch: 'BBCH 71', desc: 'Petits fruits noués. Chute physiologique normale.' },
    { name: 'Fructification',  date: '2026-05-12', bbch: 'BBCH 81', desc: 'Grossissement actif des cerises. Irrigation si déficit.' },
    { name: 'Récolte',         date: '2026-06-18', bbch: 'BBCH 89', desc: 'Cerises à maturité. Récolte échelonnée selon variété.' },
  ],
  'Poire': [
    { name: 'Débourrement',    date: '2026-03-28', bbch: 'BBCH 07', desc: 'Pointe verte. Vigilance gel (T° critique −2 °C).' },
    { name: 'Floraison',       date: '2026-04-15', bbch: 'BBCH 65', desc: 'Pleine floraison. Pollinisation entomophile.' },
    { name: 'Nouaison',        date: '2026-05-05', bbch: 'BBCH 71', desc: 'Petits fruits noués. Éclaircissage si nécessaire.' },
    { name: 'Croissance',      date: '2026-06-15', bbch: 'BBCH 78', desc: 'Grossissement actif. Besoins en eau importants.' },
    { name: 'Véraison',        date: '2026-08-10', bbch: 'BBCH 84', desc: 'Changement de couleur. Arrêt des traitements phytos.' },
    { name: 'Récolte',         date: '2026-09-10', bbch: 'BBCH 89', desc: 'Récolte selon indice de maturité (pénétromètre, amidon).' },
  ],
  'Pomme': [
    { name: 'Débourrement',    date: '2026-04-01', bbch: 'BBCH 07', desc: 'Pointe verte. Risque gel résiduel.' },
    { name: 'Floraison',       date: '2026-04-25', bbch: 'BBCH 65', desc: 'Pleine floraison. Risque tavelure maximal.' },
    { name: 'Nouaison',        date: '2026-05-15', bbch: 'BBCH 71', desc: 'Petits fruits visibles. Éclaircissage possible.' },
    { name: 'Croissance',      date: '2026-06-10', bbch: 'BBCH 78', desc: 'Grossissement actif. Surveillance carpocapse.' },
    { name: 'Véraison',        date: '2026-08-15', bbch: 'BBCH 84', desc: 'Coloration des fruits. Maturation avancée.' },
    { name: 'Récolte',         date: '2026-09-20', bbch: 'BBCH 89', desc: 'Récolte selon variété et indice de maturité.' },
  ],
  'Salade': [
    { name: 'Plantation',      date: '2026-04-15', bbch: 'BBCH 00', desc: 'Repiquage des plants. Sol meuble et frais.' },
    { name: 'Reprise',         date: '2026-04-25', bbch: 'BBCH 09', desc: 'Reprise végétative. Irrigation de démarrage.' },
    { name: 'Croissance',      date: '2026-05-10', bbch: 'BBCH 31', desc: 'Développement foliaire actif. Apport azoté.' },
    { name: 'Pommaison',       date: '2026-05-22', bbch: 'BBCH 41', desc: 'Formation de la pomme. Réduire l\'irrigation.' },
    { name: 'Récolte',         date: '2026-05-30', bbch: 'BBCH 89', desc: 'Pomme ferme, feuilles extérieures vertes. Récolte.' },
  ],
  'Laitue': [
    { name: 'Plantation',      date: '2026-04-15', bbch: 'BBCH 00', desc: 'Repiquage des plants. Sol meuble et frais.' },
    { name: 'Reprise',         date: '2026-04-25', bbch: 'BBCH 09', desc: 'Reprise végétative. Irrigation de démarrage.' },
    { name: 'Croissance',      date: '2026-05-10', bbch: 'BBCH 31', desc: 'Développement foliaire actif. Apport azoté.' },
    { name: 'Pommaison',       date: '2026-05-22', bbch: 'BBCH 41', desc: 'Formation de la pomme. Réduire l\'irrigation.' },
    { name: 'Récolte',         date: '2026-05-30', bbch: 'BBCH 89', desc: 'Pomme ferme, feuilles extérieures vertes. Récolte.' },
  ],
  'Betterave': [
    { name: 'Semis',           date: '2026-03-20', bbch: 'BBCH 00', desc: 'Semis en sol réchauffé (T° > 5 °C) et ressuyé.' },
    { name: 'Levée',           date: '2026-04-08', bbch: 'BBCH 09', desc: 'Cotylédons hors sol. Période à risque limaces.' },
    { name: '4 feuilles',      date: '2026-05-01', bbch: 'BBCH 14', desc: 'Couverture partielle du sol. Interventions herbicides.' },
    { name: 'Fermeture rang',  date: '2026-06-15', bbch: 'BBCH 37', desc: 'Canopée fermée. Forte demande en eau et azote.' },
    { name: 'Grossissement',   date: '2026-08-01', bbch: 'BBCH 40', desc: 'Grossissement actif de la racine. Accumulation de sucres.' },
    { name: 'Récolte',         date: '2026-10-20', bbch: 'BBCH 89', desc: 'Teneur en sucre optimale. Arrachage selon planning usine.' },
  ],
}

const PHENO_FALLBACK = [
  { name: 'Semis',     date: '2026-04-01', bbch: 'BBCH 00', desc: 'Semis.' },
  { name: 'Levée',     date: '2026-04-20', bbch: 'BBCH 09', desc: 'Levée des plantules.' },
  { name: 'Floraison', date: '2026-06-15', bbch: 'BBCH 65', desc: 'Floraison.' },
  { name: 'Récolte',   date: '2026-08-20', bbch: 'BBCH 89', desc: 'Maturité physiologique.' },
]

function getPhenoStages(crop) {
  if (!crop) return []
  const c = crop.toLowerCase()
  for (const key of Object.keys(PHENO_STAGES_BY_CROP)) {
    if (c.startsWith(key.toLowerCase())) return PHENO_STAGES_BY_CROP[key]
  }
  return PHENO_FALLBACK
}

function initPhenologie() {
  const toggle = document.getElementById('toggle-phenologie')
  if (!toggle) return
  toggle.addEventListener('change', () => {
    renderPhenoOverlay()
  })
}

function renderPhenoOverlay() {
  document.querySelectorAll('.pheno-overlay').forEach(el => el.remove())

  const toggle = document.getElementById('toggle-phenologie')
  if (!toggle?.checked) return

  const crop = parcelState.crop || parcelBase.crop
  const stages = getPhenoStages(crop)
  if (!stages.length) return

  const now = Date.now()
  const periodMs = getPeriodMinutes() * 60000
  const windowStart = now - periodMs

  const W = 600, PAD_L = 46, PAD_R = 10, PAD_T = 14, PAD_B = 28
  const innerW = W - PAD_L - PAD_R
  const lineTop = PAD_T + 4        // y=18
  const lineBot = 180 - PAD_B      // y=152

  const stagesInRange = stages.filter(s => {
    const d = new Date(s.date).getTime()
    return d >= windowStart && d <= now
  })
  if (!stagesInRange.length) return

  document.querySelectorAll('.chart-card').forEach(card => {
    const svg = card.querySelector('.chart-svg, .tensio-svg')
    if (!svg) return

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.setAttribute('class', 'pheno-overlay')

    stagesInRange.forEach(s => {
      const d = new Date(s.date).getTime()
      const frac = (d - windowStart) / periodMs
      const x = PAD_L + frac * innerW

      // 1px dashed green line
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', x.toFixed(1)); line.setAttribute('x2', x.toFixed(1))
      line.setAttribute('y1', lineTop); line.setAttribute('y2', lineBot)
      line.setAttribute('stroke', '#3a9e6a')
      line.setAttribute('stroke-width', '1')
      line.setAttribute('stroke-dasharray', '4,3')
      g.appendChild(line)

      // Vertical text (rotated 90°) to the right of the line
      const maxLen = 14
      const truncName = s.name.length > maxLen ? s.name.slice(0, maxLen - 1) + '…' : s.name
      const tx = (x + 3).toFixed(1)
      const ty = (lineTop + 2).toFixed(1)
      const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      txt.setAttribute('x', tx)
      txt.setAttribute('y', ty)
      txt.setAttribute('transform', `rotate(90, ${tx}, ${ty})`)
      txt.setAttribute('text-anchor', 'start')
      txt.setAttribute('font-size', '9')
      txt.setAttribute('font-family', 'var(--font)')
      txt.setAttribute('fill', '#3a9e6a')
      txt.style.cursor = 'pointer'
      txt.textContent = truncName
      g.appendChild(txt)

      // Invisible hit band on the line for tooltip
      const hit = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      hit.setAttribute('x', (x - 8).toFixed(1))
      hit.setAttribute('y', lineTop.toString())
      hit.setAttribute('width', '16')
      hit.setAttribute('height', (lineBot - lineTop).toString())
      hit.setAttribute('fill', 'transparent')
      hit.style.cursor = 'pointer'
      hit.addEventListener('click', ev => showPhenoDetail(s, ev))
      g.appendChild(hit)
    })

    svg.appendChild(g)
  })
}

let _phenoPopover = null
function showPhenoDetail(stage, ev) {
  if (_phenoPopover) { _phenoPopover.remove(); _phenoPopover = null }

  const pop = document.createElement('div')
  pop.className = 'pheno-popover'
  const fmt = d => { const [y, m, j] = d.split('-'); return `${j}/${m}/${y}` }
  pop.innerHTML = `
    <div class="pheno-pop-hd">
      <span class="pheno-pop-badge">${stage.bbch}</span>
      <span class="pheno-pop-name">${stage.name}</span>
      <button class="pheno-pop-close">×</button>
    </div>
    <div class="pheno-pop-date">${fmt(stage.date)}</div>
  `
  pop.querySelector('.pheno-pop-close').addEventListener('click', () => { pop.remove(); _phenoPopover = null })

  const cx = ev.clientX, cy = ev.clientY
  pop.style.position = 'fixed'
  pop.style.top = (cy - 8) + 'px'
  pop.style.left = (cx + 12) + 'px'

  document.body.appendChild(pop)
  _phenoPopover = pop

  setTimeout(() => {
    const pw = pop.offsetWidth, ph = pop.offsetHeight
    let top = cy - 8, left = cx + 12
    if (left + pw > window.innerWidth - 8) left = cx - pw - 12
    if (top + ph > window.innerHeight - 8) top = cy - ph
    pop.style.top = Math.max(8, top) + 'px'
    pop.style.left = Math.max(8, left) + 'px'
  }, 0)

  document.addEventListener('click', function handler(e) {
    if (!pop.contains(e.target)) { pop.remove(); _phenoPopover = null; document.removeEventListener('click', handler) }
  }, { capture: true })
}

// ─── Notes & traitements overlay ─────────────────────────────────────────────

function initNotesOverlay() {
  const toggle = document.getElementById('toggle-notes')
  if (!toggle) return
  toggle.addEventListener('change', renderNotesOverlay)
}

function renderNotesOverlay() {
  document.querySelectorAll('.notes-overlay').forEach(el => el.remove())
  hideNoteTooltip()

  const toggle = document.getElementById('toggle-notes')
  if (!toggle?.checked) return

  const entries = getJournal().filter(e => e.type === 'note' || e.type === 'traitement')
  if (!entries.length) return

  const now        = Date.now()
  const periodMs   = getPeriodMinutes() * 60000
  const windowStart = now - periodMs

  const W = 600, PAD_L = 46, PAD_R = 10, PAD_B = 28
  const innerW  = W - PAD_L - PAD_R
  const axisY   = 180 - PAD_B   // bottom of the chart area = 152

  const inRange = entries.filter(e => {
    const d = new Date(e.date + 'T12:00:00').getTime()
    return d >= windowStart && d <= now
  })
  if (!inRange.length) return

  document.querySelectorAll('.chart-card').forEach(card => {
    const svg = card.querySelector('.chart-svg, .tensio-svg')
    if (!svg) return

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.setAttribute('class', 'notes-overlay')

    inRange.forEach(e => {
      const d     = new Date(e.date + 'T12:00:00').getTime()
      const frac  = (d - windowStart) / periodMs
      const x     = PAD_L + frac * innerW
      const isT   = e.type === 'traitement'
      const color = isT ? '#78c860' : '#60a8e0'
      const cy    = axisY + 9

      // Diamond on X-axis
      const diamond = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')
      const r = 5
      diamond.setAttribute('points', `${x.toFixed(1)},${(cy - r).toFixed(1)} ${(x + r).toFixed(1)},${cy.toFixed(1)} ${x.toFixed(1)},${(cy + r).toFixed(1)} ${(x - r).toFixed(1)},${cy.toFixed(1)}`)
      diamond.setAttribute('fill', color)
      diamond.setAttribute('stroke', '#fff')
      diamond.setAttribute('stroke-width', '1.5')
      g.appendChild(diamond)

      // Transparent hit area for tooltip
      const hit = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      hit.setAttribute('x', (x - 9).toFixed(1))
      hit.setAttribute('y', (axisY).toFixed(1))
      hit.setAttribute('width', '18')
      hit.setAttribute('height', '18')
      hit.setAttribute('fill', 'transparent')
      hit.style.cursor = 'default'
      hit.addEventListener('mouseenter', ev => showNoteTooltip(e, ev))
      hit.addEventListener('mouseleave', hideNoteTooltip)
      g.appendChild(hit)
    })

    svg.appendChild(g)
  })
}

let _noteTip = null

function showNoteTooltip(entry, ev) {
  if (!_noteTip) {
    _noteTip = document.createElement('div')
    _noteTip.className = 'note-tip'
    document.body.appendChild(_noteTip)
  }
  const isT  = entry.type === 'traitement'
  const fmt  = d => { const [y, m, j] = d.split('-'); return `${j}/${m}/${y}` }
  let html = `<div class="note-tip-header">
    <span class="note-tip-badge note-tip-badge--${isT ? 'trait' : 'note'}">
      <i class="bi ${isT ? 'bi-eyedropper' : 'bi-pencil'}"></i> ${isT ? 'Traitement' : 'Note'}
    </span>
    <span class="note-tip-date">${fmt(entry.date)}</span>
  </div>`
  if (entry.texte) html += `<div class="note-tip-texte">${entry.texte}</div>`
  if (isT && (entry.produit || entry.dose || entry.cible)) {
    html += `<div class="note-tip-detail">`
    if (entry.produit) html += `<span><i class="bi bi-flask"></i> ${entry.produit}</span>`
    if (entry.dose)    html += `<span><i class="bi bi-droplet"></i> ${entry.dose}</span>`
    if (entry.cible)   html += `<span><i class="bi bi-bullseye"></i> ${entry.cible}</span>`
    html += `</div>`
  }
  _noteTip.innerHTML = html
  _noteTip.style.display = 'block'

  const x = ev.clientX + 14
  const y = ev.clientY - 10
  _noteTip.style.left = x + 'px'
  _noteTip.style.top  = y + 'px'

  // Clamp to viewport
  requestAnimationFrame(() => {
    const w = _noteTip.offsetWidth
    if (x + w > window.innerWidth - 8) _noteTip.style.left = (ev.clientX - w - 10) + 'px'
  })
}

function hideNoteTooltip() {
  if (_noteTip) _noteTip.style.display = 'none'
}

// ─── Compare control ──────────────────────────────────────────────────────────

function initCompareControl() {
  updateCompareBtn()
}

function updateCompareBtn() {
  const wrap = document.getElementById('compare-control')
  if (!wrap) return
  if (compareYearAgo) {
    wrap.innerHTML = `<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> Même période l'année dernière <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`
    wrap.querySelector('.compare-clear-icon')?.addEventListener('click', e => {
      e.stopPropagation()
      compareYearAgo = false
      updateCompareBtn()
      renderCharts()
    })
    wrap.querySelector('#compare-open-btn')?.addEventListener('click', openCompareDropdown)
  } else if (compareParcelId) {
    const name = plots.find(p => p.id === compareParcelId)?.name || 'Parcelle'
    wrap.innerHTML = `<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${name} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`
    wrap.querySelector('.compare-clear-icon')?.addEventListener('click', e => {
      e.stopPropagation()
      compareParcelId = null
      updateCompareBtn()
      renderCharts()
    })
    wrap.querySelector('#compare-open-btn')?.addEventListener('click', openCompareDropdown)
  } else {
    wrap.innerHTML = `<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>`
    wrap.querySelector('#compare-open-btn')?.addEventListener('click', openCompareDropdown)
  }
}

function openCompareDropdown() {
  const existing = document.getElementById('compare-dropdown')
  if (existing) { existing.remove(); return }
  const wrap = document.getElementById('compare-control')
  const otherParcels = plots.filter(p => p.id !== parcelId)
  const dropdown = document.createElement('div')
  dropdown.id = 'compare-dropdown'
  dropdown.className = 'compare-dropdown'
  dropdown.innerHTML = `
    <input class="compare-search-input" type="text" placeholder="Rechercher une parcelle…">
    <div class="compare-dropdown-item compare-dropdown-item--year-ago${compareYearAgo ? ' active' : ''}" data-year-ago="1"><i class="bi bi-calendar2-week"></i> Même période l'année dernière</div>
    <div class="compare-dropdown-sep"></div>
    <div class="compare-dropdown-list">
      ${otherParcels.map(p => `<div class="compare-dropdown-item${p.id === compareParcelId ? ' active' : ''}" data-id="${p.id}"><i class="bi bi-map"></i> ${p.name}</div>`).join('')}
    </div>
  `
  wrap.appendChild(dropdown)
  const searchInput = dropdown.querySelector('.compare-search-input')
  searchInput.focus()
  searchInput.addEventListener('input', e => {
    const q = e.target.value.toLowerCase()
    dropdown.querySelectorAll('.compare-dropdown-list .compare-dropdown-item').forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none'
    })
  })
  dropdown.querySelector('.compare-dropdown-item--year-ago')?.addEventListener('click', () => {
    compareParcelId = null
    compareYearAgo = true
    dropdown.remove()
    updateCompareBtn()
    renderCharts()
  })
  dropdown.querySelectorAll('.compare-dropdown-list .compare-dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      compareYearAgo = false
      compareParcelId = parseInt(item.dataset.id)
      dropdown.remove()
      updateCompareBtn()
      renderCharts()
    })
  })
  setTimeout(() => {
    document.addEventListener('click', function closeHandler(e) {
      if (!dropdown.contains(e.target) && !wrap.contains(e.target)) {
        dropdown.remove()
        document.removeEventListener('click', closeHandler)
      }
    })
  }, 0)
}

// ─── Panel ────────────────────────────────────────────────────────────────────

function renderPanel() {
  const org = orgs.find(o => o.id === parcelBase.orgId)
  renderIdentification(org)
  renderGeolocalisation(org)
  renderLinkedSensors()
  renderIntegrations()
  renderPanelMembres()
  renderAlertes()
}

// ─── Identification (editable) ────────────────────────────────────────────────

// IRRIG_TYPES and SOIL_TYPES imported from constants.js
const CROP_LIST = [
  'Abricotier', 'Ail', 'Amandier', 'Artichaut', 'Asperge', 'Aubergine', 'Avoine', 'Basilic',
  'Betterave fourragère', 'Betterave sucrière', 'Blé dur', 'Blé tendre', 'Brocoli', 'Carotte',
  'Cerisier', 'Chou-fleur', 'Chou pommé', 'Ciboulette', 'Citrouille', 'Clémentinier', 'Courgette',
  'Echalote', 'Endive', 'Epinard', 'Fève', 'Figuier', 'Fraisier', 'Framboisier', 'Gesse',
  'Giroflier', 'Haricot vert', 'Houblon', 'Kiwi', 'Lavande', 'Lentille', 'Luzerne', 'Maïs doux',
  'Maïs grain', 'Maïs semence', 'Maïs silage', 'Melon', 'Menthe', 'Moutarde', 'Navet',
  'Nectarinier', 'Noisetier', 'Noyer', 'Oignon', 'Olivier', 'Orge de brasserie', 'Orge de printemps',
  'Orge d\'hiver', 'Pêcher', 'Persil', 'Pissenlit', 'Poireau', 'Pois chiche', 'Pois de conserve',
  'Pois fourrager', 'Pois protéagineux', 'Poivron', 'Pomme de terre', 'Pommier', 'Poirier',
  'Prunier', 'Pruneau d\'Agen', 'Radis', 'Raisin de cuve', 'Raisin de table', 'Riz', 'Romarin',
  'Sarrasin', 'Seigle', 'Soja', 'Sorgho', 'Tabac', 'Thym', 'Tomate', 'Tournesol', 'Triticale',
  'Vigne', 'Cardon', 'Céleri', 'Cerise', 'Châtaignier', 'Colza', 'Courge', 'Fénugrec',
  'Groseillier', 'Lin fibre', 'Lin oléagineux', 'Mâche', 'Millet', 'Myrtille', 'Noix de cajou',
  'Paprika', 'Patate douce', 'Pistachier', 'Poisson-Chat', 'Quinoa', 'Safran', 'Sainfoin',
  'Scorsonère', 'Shallot', 'Topinambour', 'Trèfle', 'Vesce', 'Fétuque', 'Ray-grass', 'Prairie temporaire',
  'Prairie permanente', 'Jachère', 'Autre',
]

function renderIdentification(org) {
  const el = document.getElementById('panel-ident')
  const p  = parcelState
  const texture    = p.texture    || null
  const irrigation = p.irrigation || null
  const crop       = p.crop       || CROP_LIST[0]
  const env        = p.env        || null
  const isAnalysis = texture === SOIL_ANALYSIS_OPTION
  const analysis   = p.soilAnalysis || {}
  const latlngs    = p.latlngs
  const hasShape   = Array.isArray(latlngs) && latlngs.length >= 3

  const surfaceVal = p.area
    ? `${p.area} ha <span class="field-computed">(calculé)</span>`
    : hasShape
      ? `— <span class="field-computed">(calculé)</span>`
      : `<span class="field-computed">Tracez le contour pour calculer la surface de la parcelle.</span>`

  el.innerHTML = `
    ${editableRow('Nom',          p.name || '—', 'name', 'text')}
    ${editableSelect('Culture',   crop,          'crop',       CROP_LIST)}
    ${readonlyRow('Surface', surfaceVal)}
    ${editableSelectNullable('Environnement', env, 'env', ENV_TYPES, 'Plein champ')}
    ${editableSelectNullable('Texture sol', texture,    'texture',    [...SOIL_TYPES, SOIL_ANALYSIS_OPTION],  'Indéfini')}
    ${isAnalysis ? `
      ${editableRow('Argile (%)', String(analysis.argile ?? ''), 'soilArgile', 'number')}
      ${editableRow('Limon (%)',  String(analysis.limon  ?? ''), 'soilLimon',  'number')}
      ${editableRow('Sable (%)',  String(analysis.sable  ?? ''), 'soilSable',  'number')}
    ` : ''}
    ${editableSelectNullable('Irrigation',  irrigation, 'irrigation', IRRIG_TYPES, 'Non renseigné')}
    ${readonlyRow('Exploitation', org ? org.name : '—')}
  `

  bindEditable(el, 'name',       p.name       || '', v => {
    saveState({ name: v })
    updateBreadcrumb(v, { label: 'Parcelles', href: 'parcelles.html' })
  })
  bindEditable(el, 'crop',       crop,                 v => saveState({ crop: v }))
  bindEditable(el, 'env',        env || '',            v => saveState({ env: v || null }))
  bindEditable(el, 'texture',    texture || '',        v => {
    const tex = v || null
    const patch = { texture: tex }
    if (tex !== SOIL_ANALYSIS_OPTION) patch.soilAnalysis = null
    saveState(patch)
    renderIdentification(org)
  })
  if (isAnalysis) {
    bindEditable(el, 'soilArgile', String(analysis.argile ?? ''), v => saveState({ soilAnalysis: { ...parcelState.soilAnalysis, argile: +v } }))
    bindEditable(el, 'soilLimon',  String(analysis.limon  ?? ''), v => saveState({ soilAnalysis: { ...parcelState.soilAnalysis, limon: +v } }))
    bindEditable(el, 'soilSable',  String(analysis.sable  ?? ''), v => saveState({ soilAnalysis: { ...parcelState.soilAnalysis, sable: +v } }))
  }
  bindEditable(el, 'irrigation', irrigation || '',     v => saveState({ irrigation: v || null }))
}

function editableRow(label, value, field, inputType = 'text') {
  const safe = (value || '').replace(/"/g, '&quot;')
  return `
    <div class="panel-row" data-field="${field}">
      <span class="panel-row-key">${label}</span>
      <input type="${inputType}" class="panel-field-input" data-val value="${safe}">
    </div>`
}

function editableSelect(label, value, field, options) {
  return `
    <div class="panel-row" data-field="${field}">
      <span class="panel-row-key">${label}</span>
      <select class="panel-field-input" data-val>
        ${options.map(o => `<option${o === value ? ' selected' : ''}>${o}</option>`).join('')}
      </select>
    </div>`
}

function editableSelectNullable(label, value, field, options, blankLabel = '—') {
  const blankInOptions = options.includes(blankLabel)
  const blankOpt = blankInOptions ? '' : `<option value=""${!value ? ' selected' : ''}>${blankLabel}</option>`
  return `
    <div class="panel-row" data-field="${field}">
      <span class="panel-row-key">${label}</span>
      <select class="panel-field-input" data-val>
        ${blankOpt}
        ${options.map(o => `<option${o === (value || blankLabel) ? ' selected' : ''}>${o}</option>`).join('')}
      </select>
    </div>`
}

function readonlyRow(label, html) {
  return `
    <div class="panel-row">
      <span class="panel-row-key">${label}</span>
      <span class="panel-row-val">${html}</span>
    </div>`
}

function bindEditable(container, field, currentValue, onSave) {
  const input = container.querySelector(`[data-field="${field}"] [data-val]`)
  if (!input) return
  const save = () => {
    const v = input.value?.trim()
    if (v && v !== currentValue) { currentValue = v; onSave(v) }
  }
  input.addEventListener('change', save)
  if (input.tagName === 'INPUT') {
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); input.blur() } })
  }
}

// ─── Géolocalisation ──────────────────────────────────────────────────────────

function renderGeolocalisation(org) {
  const el = document.getElementById('panel-geoloc')
  const latlngs = parcelState.latlngs

  const hasShape = Array.isArray(latlngs) && latlngs.length >= 3

  // Use stored ville/coords if available (set after contour edit + geocoding)
  const ville = parcelState.ville || parcelBase.ville || org?.ville || '—'
  const dept  = parcelBase.departement || org?.departement
  const lat   = parcelState.lat ?? parcelBase.lat ?? org?.lat
  const lng   = parcelState.lng ?? parcelBase.lng ?? org?.lng

  el.innerHTML = `
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${ville}${dept ? ` (${dept})` : ''}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${lat != null ? lat.toFixed(4) : '—'}, ${lng != null ? lng.toFixed(4) : '—'}</span>
    </div>
    ${lat != null ? `<div class="panel-row">
      <a href="https://www.google.com/maps?q=${lat.toFixed(6)},${lng.toFixed(6)}" target="_blank" class="itinerary-link">
        <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
      </a>
    </div>` : ''}
    <div style="padding:4px 0 4px">
      <a href="parcelle-modifier-contour.html?id=${parcelId}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${hasShape ? 'Modifier le contour' : 'Tracer le contour'}
      </a>
    </div>
  `
}

// ─── Capteurs liés ────────────────────────────────────────────────────────────

function getLinkedMetricIds() {
  const ids = new Set()
  const linked = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  linked.forEach(s => {
    const metrics = METRICS_BY_MODEL[s.model] || []
    if (!TENSIO_MODELS.includes(s.model)) {
      metrics.forEach(m => ids.add(m.id))
    }
  })
  return ids
}

function sensorMetricBadges(model) {
  const metrics = METRICS_BY_MODEL[model] || []
  if (!metrics.length) return ''
  return `<div class="sensor-metric-badges">${
    metrics.map(m => `<span class="sensor-metric-badge" style="--mc:${m.color}">${m.name}</span>`).join('')
  }</div>`
}

function renderLinkedSensors() {
  const el     = document.getElementById('panel-sensors')
  const linked = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))

  // Available sensors: same org, not yet linked
  const available = allSensors.filter(s =>
    s.orgId === parcelBase.orgId &&
    !parcelState.linkedSensorIds.includes(s.id)
  )

  // Detect metric conflicts among non-tensiometer sensors
  const nonTensio = linked.filter(s => !TENSIO_MODELS.includes(s.model))
  const metricCount = {}
  nonTensio.forEach(s => (METRICS_BY_MODEL[s.model] || []).forEach(m => {
    metricCount[m.id] = (metricCount[m.id] || 0) + 1
  }))
  const conflictingMetricNames = Object.entries(metricCount)
    .filter(([, n]) => n > 1)
    .map(([id]) => Object.values(METRICS_BY_MODEL).flat().find(m => m.id === id)?.name || id)

  let html = ''
  if (conflictingMetricNames.length > 0) {
    html += `<div class="sensor-conflict-banner">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <span>Conflit de métriques : <strong>${conflictingMetricNames.join(', ')}</strong> mesurée(s) par plusieurs capteurs. Les données peuvent être en doublon.</span>
    </div>`
  }

  if (linked.length === 0) {
    html += `<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>`
  } else {
    // Group CHP sensors by depth for display
    const chps = linked.filter(s => TENSIO_MODELS.includes(s.model))
    const others = linked.filter(s => !TENSIO_MODELS.includes(s.model))

    html += others.map(s => {
      const hasEv = s.event && (Array.isArray(s.event) ? s.event.length > 0 : true)
      const evLabel = hasEv ? (Array.isArray(s.event) ? s.event[0] : s.event) : null
      return `
      <div class="sensor-linked-row">
        <div class="sensor-linked-info">
          <div style="display:flex;align-items:center;gap:6px">
            <a href="capteur-detail.html?id=${s.id}" class="sensor-linked-link">${MODEL_NAMES[s.model] || s.model}</a>
            ${hasEv ? '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>' : ''}
          </div>
          <span class="sensor-linked-detail">${s.model} · ${s.serial}</span>
          ${hasEv ? `<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${evLabel}</span>` : ''}
          ${sensorMetricBadges(s.model)}
        </div>
        <button class="remove-sensor-btn icon-btn" data-id="${s.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>`
    }).join('')

    if (chps.length > 0) {
      // Group by depth
      const byDepth = {}
      chps.forEach(s => {
        const d = s.depth != null ? `${s.depth} cm` : s.model
        if (!byDepth[d]) byDepth[d] = []
        byDepth[d].push(s)
      })
      html += `<div class="sensor-kit-hd">
        <span class="sensor-kit-hd-label">Kit de tensiomètres</span>
        ${sensorMetricBadges('CHP-15/30')}
      </div>`
      Object.entries(byDepth).forEach(([depth, sensors]) => {
        html += `<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${depth}</div>`
        html += sensors.map(s => {
          const hasEv = s.event && (Array.isArray(s.event) ? s.event.length > 0 : true)
          const evLabel = hasEv ? (Array.isArray(s.event) ? s.event[0] : s.event) : null
          return `
          <div class="sensor-linked-row" style="padding-left:12px">
            <div class="sensor-linked-info">
              <div style="display:flex;align-items:center;gap:6px">
                <a href="capteur-detail.html?id=${s.id}" class="sensor-linked-link">${MODEL_NAMES[s.model] || s.model}</a>
                ${hasEv ? '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>' : ''}
              </div>
              <span class="sensor-linked-detail">${s.model} · ${s.serial}</span>
              ${hasEv ? `<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${evLabel}</span>` : ''}
            </div>
            <button class="remove-sensor-btn icon-btn" data-id="${s.id}" title="Retirer">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>`
        }).join('')
      })
    }
  }

  el.innerHTML = html

  // Parcel-derived metrics — placed below the add form
  const hasPyrano = linked.some(s => s.model === 'PYRANO')
  const parcelMetrics = [
    { name: 'Évapotranspiration (ETP)', color: '#c090e0' },
    ...(!hasPyrano ? [{ name: 'Rayonnement solaire', color: '#f5c842' }] : []),
    { name: 'Température de rosée', color: '#80c8e8' },
  ]
  const metricsExt = document.getElementById('panel-parcel-metrics-ext')
  if (metricsExt) {
    metricsExt.innerHTML = `
      <div class="panel-parcel-metrics">
        <div class="panel-parcel-metrics-title">Données spatialisées</div>
        <div class="sensor-metric-badges">
          ${parcelMetrics.map(m => `<span class="sensor-metric-badge" style="--mc:${m.color}">${m.name}</span>`).join('')}
        </div>
      </div>`
  }

  // Populate the static add-sensor row (sibling of panel-section-bd)
  const addRow = document.getElementById('sensor-add-row')
  const addSel = document.getElementById('add-sensor-select')
  if (addRow && addSel) {
    if (available.length > 0) {
      addSel.innerHTML = '<option value="">Ajouter un capteur…</option>' +
        available.map(s => `<option value="${s.id}">${MODEL_NAMES[s.model] || s.model} — ${s.serial}</option>`).join('')
      addRow.style.display = ''
    } else {
      addRow.style.display = 'none'
    }
  }

  // Remove handlers
  el.querySelectorAll('.remove-sensor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id)
      const s = allSensors.find(x => x.id === id)
      const label = s ? `${MODEL_NAMES[s.model] || s.model} — ${s.serial}` : `capteur #${id}`
      showConfirmModal({
        title: 'Retirer le capteur',
        message: `Retirer <strong>${label}</strong> de cette parcelle ?<br><br>Les données historiques sont conservées.`,
        confirmLabel: 'Retirer',
        onConfirm: () => {
          const remaining = parcelState.linkedSensorIds.filter(x => x !== id)
          saveState({ linkedSensorIds: remaining })
          pruneWidgetsAfterRemoval(remaining)
          renderLinkedSensors()
          renderCharts()
          initDashGrid()
        }
      })
    })
  })

  // Add handler
  const addBtn = document.getElementById('add-sensor-btn')
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const sel = document.getElementById('add-sensor-select')
      const id  = parseInt(sel.value)
      if (!id) return

      const sensor = allSensors.find(s => s.id === id)
      if (!sensor) return

      // Soil category exclusivity check — remove conflicting sensors first
      const newGroup = getSoilGroup(sensor.model)
      if (newGroup) {
        const linkedSensors = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
        const conflictingSensors = linkedSensors.filter(s => {
          const g = getSoilGroup(s.model)
          return g && g !== newGroup
        })
        if (conflictingSensors.length > 0) {
          const conflictList = conflictingSensors.map(s => `${MODEL_NAMES[s.model] || s.model} — ${s.serial}`).join(', ')
          showConfirmModal({
            title: 'Capteur incompatible',
            message: `Cette parcelle utilise déjà : <strong>${conflictList}</strong>.<br><br>` +
                     `Les capteurs de sol (CHP, CAPA, EC, T_MINI) sont exclusifs — une seule technologie par parcelle.<br><br>` +
                     `Retirer ${conflictingSensors.length > 1 ? 'ces capteurs' : 'ce capteur'} et ajouter le nouveau ?`,
            confirmLabel: 'Remplacer',
            onConfirm: () => {
              const conflictIds = new Set(conflictingSensors.map(s => s.id))
              const cleaned = parcelState.linkedSensorIds.filter(x => !conflictIds.has(x))
              saveState({ linkedSensorIds: [...cleaned, id] })
              pruneWidgetsAfterRemoval(cleaned)
              addWidgetsForSensor(sensor)
              renderLinkedSensors()
              renderCharts()
              initDashGrid()
            }
          })
          return
        }
      }

      // Conflict check (skip for tensiometers)
      if (!TENSIO_MODELS.includes(sensor.model)) {
        const existingIds = getLinkedMetricIds()
        const newMetrics  = (METRICS_BY_MODEL[sensor.model] || []).map(m => m.id)
        const conflicts   = newMetrics.filter(m => existingIds.has(m))

        if (conflicts.length > 0) {
          const names = conflicts.map(id => {
            const found = Object.values(METRICS_BY_MODEL).flat().find(m => m.id === id)
            return found?.name || id
          })
          const ok = confirm(
            `Attention : ce capteur (${sensor.model}) mesure des métriques déjà fournies par un autre capteur :\n• ${names.join('\n• ')}\n\nVoulez-vous l'ajouter quand même ?`
          )
          if (!ok) return
        }
      } else {
        // CHP tensiometer: depth is configured on the sensor itself, nothing to prompt
      }

      saveState({ linkedSensorIds: [...parcelState.linkedSensorIds, id] })
      addWidgetsForSensor(sensor)
      renderLinkedSensors()
      renderCharts()
      initDashGrid()
    })
  }
}

// ─── Intégrations ─────────────────────────────────────────────────────────────

function renderIntegrations() {
  const el = document.getElementById('panel-integrations')
  const active = parcelState.integrations || []
  const inactive = ALL_INTEGRATIONS.filter(i => !active.includes(i))

  let html = ''
  if (active.length === 0) {
    html += `<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>`
  } else {
    html += active.map(name => `
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${name}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(name)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join('')
  }

  el.innerHTML = html

  // Populate the static add-integ row (sibling of panel-section-bd)
  const addIntegRow = document.getElementById('integ-add-row')
  const addIntegSel = document.getElementById('add-integ-select')
  if (addIntegRow && addIntegSel) {
    if (inactive.length > 0) {
      addIntegSel.innerHTML = '<option value="">Ajouter une intégration…</option>' +
        inactive.map(n => `<option value="${encodeURIComponent(n)}">${n}</option>`).join('')
      addIntegRow.style.display = ''
    } else {
      addIntegRow.style.display = 'none'
    }
  }

  el.querySelectorAll('.remove-integ-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = decodeURIComponent(btn.dataset.name)
      showConfirmModal({
        title: 'Retirer l\'intégration',
        message: `Retirer <strong>${name}</strong> de cette parcelle ?`,
        confirmLabel: 'Retirer',
        onConfirm: () => {
          saveState({ integrations: parcelState.integrations.filter(i => i !== name) })
          renderIntegrations()
        }
      })
    })
  })

  document.getElementById('add-integ-btn')?.addEventListener('click', () => {
    const sel = document.getElementById('add-integ-select')
    const name = decodeURIComponent(sel.value)
    if (!name) return
    saveState({ integrations: [...parcelState.integrations, name] })
    renderIntegrations()
  })
}

// ─── Membres ──────────────────────────────────────────────────────────────────

let linkedOrgMemberIds = null   // adhérent's own org members
let linkedConseillerIds = null  // réseau conseillers

function initLinkedMemberIds() {
  if (linkedOrgMemberIds !== null) return
  const stored = getParcel(parcelId)
  linkedOrgMemberIds  = stored.linkedOrgMemberIds  ?? members.filter(m => m.source === 'adherent' && m.parcelIds?.includes(parcelId) && m.orgIds?.includes(parcelBase.orgId)).map(m => m.id)
  linkedConseillerIds = stored.linkedConseillerIds ?? members.filter(m => m.source === 'réseau'   && m.parcelIds?.includes(parcelId)).map(m => m.id)
}

function memberRow(m, canRemove, showRole) {
  return `<div class="member-row">
    <div>
      <span class="member-name">${m.prenom} ${m.nom}</span>
      ${showRole ? `<span class="member-role-badge">${m.role}</span>` : ''}
    </div>
    ${canRemove ? `<button class="remove-membre-btn icon-btn" data-id="${m.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>` : ''}
  </div>`
}

function renderPanelMembres() {
  initLinkedMemberIds()
  const isAdherent = document.getElementById('sidebar')?.getAttribute('data-role') === 'adherent-reseau'

  // ── Section "Membres liés" (org members — adhérent can manage) ───────────
  const elOrg = document.getElementById('panel-membres')
  const orgSection = document.getElementById('panel-membres-section')
  const orgMembers = members.filter(m => m.source === 'adherent' && m.orgIds?.includes(parcelBase.orgId))
  const linkedOrg  = orgMembers.filter(m => linkedOrgMemberIds.includes(m.id))

  if (orgSection) {
    orgSection.style.display = (!isAdherent && orgMembers.length === 0) ? 'none' : ''
  }
  if (elOrg) {
    elOrg.innerHTML = linkedOrg.length
      ? linkedOrg.map(m => memberRow(m, true, false)).join('')
      : '<p class="panel-empty">Aucun membre associé.</p>'

    elOrg.querySelectorAll('.remove-membre-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id)
        const m = members.find(x => x.id === id)
        showConfirmModal({
          title: 'Retirer le membre',
          message: `Retirer <strong>${m ? `${m.prenom} ${m.nom}` : `membre #${id}`}</strong> de cette parcelle ?`,
          confirmLabel: 'Retirer',
          onConfirm: () => {
            linkedOrgMemberIds = linkedOrgMemberIds.filter(x => x !== id)
            patchParcel(parcelId, { linkedOrgMemberIds })
            renderPanelMembres()
          }
        })
      })
    })
  }

  const addOrgRow = document.getElementById('add-membre-org-row')
  if (addOrgRow) addOrgRow.style.display = ''
  const orgSelect = document.getElementById('add-membre-org-select')
  if (orgSelect) {
    orgSelect.innerHTML = '<option value="">Associer un membre…</option>'
    orgMembers.filter(m => !linkedOrgMemberIds.includes(m.id)).forEach(m => {
      const opt = document.createElement('option')
      opt.value = m.id
      opt.textContent = `${m.prenom} ${m.nom}`
      orgSelect.appendChild(opt)
    })
  }
  document.getElementById('add-membre-org-btn').onclick = () => {
    const id = parseInt(orgSelect?.value)
    if (!id || linkedOrgMemberIds.includes(id)) return
    linkedOrgMemberIds.push(id)
    patchParcel(parcelId, { linkedOrgMemberIds })
    renderPanelMembres()
  }

  // ── Section "Conseillers liés" (réseau — admin réseau only) ─────────────
  const elCons = document.getElementById('panel-conseillers')
  const consSection = document.getElementById('panel-conseillers-section')
  const linkedCons  = members.filter(m => m.source === 'réseau' && linkedConseillerIds.includes(m.id))

  if (consSection) {
    consSection.style.display = (isAdherent && linkedCons.length === 0) ? 'none' : ''
  }
  if (elCons) {
    elCons.innerHTML = linkedCons.length
      ? linkedCons.map(m => memberRow(m, !isAdherent, true)).join('')
      : '<p class="panel-empty">Aucun conseiller associé.</p>'

    if (!isAdherent) {
      elCons.querySelectorAll('.remove-membre-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.dataset.id)
          const m = members.find(x => x.id === id)
          showConfirmModal({
            title: 'Retirer le conseiller',
            message: `Retirer <strong>${m ? `${m.prenom} ${m.nom}` : `conseiller #${id}`}</strong> de cette parcelle ?`,
            confirmLabel: 'Retirer',
            onConfirm: () => {
              linkedConseillerIds = linkedConseillerIds.filter(x => x !== id)
              patchParcel(parcelId, { linkedConseillerIds })
              renderPanelMembres()
            }
          })
        })
      })
    }
  }

  const addConsRow = document.getElementById('add-conseiller-row')
  if (addConsRow) addConsRow.style.display = isAdherent ? 'none' : ''
  if (!isAdherent) {
    const consSelect = document.getElementById('add-membre-select')
    if (consSelect) {
      consSelect.innerHTML = '<option value="">Ajouter un conseiller…</option>'
      members.filter(m => m.source === 'réseau' && !linkedConseillerIds.includes(m.id)).forEach(m => {
        const opt = document.createElement('option')
        opt.value = m.id
        opt.textContent = `${m.prenom} ${m.nom} (${m.role})`
        consSelect.appendChild(opt)
      })
    }
    document.getElementById('add-membre-btn').onclick = () => {
      const id = parseInt(consSelect?.value)
      if (!id || linkedConseillerIds.includes(id)) return
      linkedConseillerIds.push(id)
      patchParcel(parcelId, { linkedConseillerIds })
      renderPanelMembres()
    }
  }
}

// ─── Alertes ──────────────────────────────────────────────────────────────────

function renderAlertes() {
  const el = document.getElementById('panel-alertes')
  const alertes = parcelState.alertes || []

  const ALERT_ICONS = { seuil: 'bi-graph-up-arrow', cumul: 'bi-droplet', absence: 'bi-wifi-off' }

  let html = ''
  if (alertes.length === 0) {
    html += `<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>`
  } else {
    html += alertes.map((a, i) => `
      <div class="alert-item">
        <i class="bi ${ALERT_ICONS[a.type] || 'bi-bell'}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition || ''} ${a.threshold || ''} ${a.unit || ''}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${i}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join('')
  }

  html += `<button id="create-alert-btn" class="action-btn action-btn--primary" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>`

  el.innerHTML = html

  el.querySelectorAll('.remove-alert-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx)
      const updated = [...parcelState.alertes]
      updated.splice(idx, 1)
      saveState({ alertes: updated })
      renderAlertes()
    })
  })

  document.getElementById('create-alert-btn').addEventListener('click', () => {
    showCreateAlertForm(el)
  })
}

function getAvailableAlertMetrics() {
  const metrics = []
  const linked  = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  linked.forEach(s => {
    const defs = METRICS_BY_MODEL[s.model] || []
    defs.forEach(m => {
      if (!metrics.find(x => x.id === m.id)) metrics.push({ id: m.id, name: m.name, unit: m.unit })
    })
  })
  // Always-available metrics
  ALWAYS_METRICS.forEach(m => {
    if (!metrics.find(x => x.id === m.id)) metrics.push({ id: m.id, name: m.name, unit: m.unit })
  })
  return metrics
}

function showCreateAlertForm(container) {
  const existingForm = container.querySelector('.alert-create-form')
  if (existingForm) return

  const availableMetrics = getAvailableAlertMetrics()

  const form = document.createElement('div')
  form.className = 'alert-create-form'
  form.innerHTML = `
    <div class="alert-form-row">
      <select id="alert-metric" class="panel-add-select">
        <option value="">Métrique…</option>
        ${availableMetrics.map(m => `<option value="${m.id}" data-unit="${m.unit}">${m.name}</option>`).join('')}
      </select>
    </div>
    <div class="alert-form-row" style="align-items:center;gap:6px">
      <select id="alert-condition" class="panel-add-select" style="max-width:70px;flex:0 0 auto">
        <option value=">">&gt;</option>
        <option value="<">&lt;</option>
        <option value="=">=</option>
      </select>
      <input type="number" id="alert-threshold" class="inline-edit" placeholder="Valeur" style="flex:1;min-width:0">
      <span id="alert-unit-label" style="font-size:11px;color:var(--txt3);flex-shrink:0;min-width:30px">—</span>
    </div>
    <div class="alert-form-actions">
      <button id="alert-save-btn" class="panel-add-btn">Enregistrer</button>
      <button id="alert-cancel-btn" class="icon-btn"><i class="bi bi-x"></i></button>
    </div>
  `
  container.appendChild(form)

  // Update unit label when metric changes
  form.querySelector('#alert-metric').addEventListener('change', e => {
    const opt = e.target.selectedOptions[0]
    form.querySelector('#alert-unit-label').textContent = opt?.dataset.unit || '—'
  })

  form.querySelector('#alert-save-btn').addEventListener('click', () => {
    const sel       = form.querySelector('#alert-metric')
    const metricId  = sel.value
    const metricDef = availableMetrics.find(m => m.id === metricId)
    const condition = form.querySelector('#alert-condition').value
    const threshold = form.querySelector('#alert-threshold').value
    if (!metricId || !threshold) return

    const newAlert = {
      type:      'seuil',
      label:     `Alerte ${metricDef?.name || metricId}`,
      metric:    metricDef?.name || metricId,
      condition, threshold,
      unit:      metricDef?.unit || '',
    }
    saveState({ alertes: [...(parcelState.alertes || []), newAlert] })
    renderAlertes()
  })

  form.querySelector('#alert-cancel-btn').addEventListener('click', () => form.remove())
}

// ─── Actions ──────────────────────────────────────────────────────────────────

function triggerCsvDownload(content, filename) {
  const blob = new Blob(['﻿' + content], { type: 'text/csv;charset=utf-8;' })
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: filename })
  document.body.appendChild(a); a.click(); document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(a.href), 100)
}

function exportCsv() {
  const mainName    = parcelState.name || parcelBase.name || 'Parcelle'
  const mainMetrics = getParcelFlatMetrics(parcelState.linkedSensorIds)

  let cols
  if (compareParcelId) {
    const cPlot    = plots.find(p => p.id === compareParcelId)
    const cIds     = allSensors.filter(s => s.parcelIds.includes(compareParcelId)).map(s => s.id)
    const cMetrics = getParcelFlatMetrics(cIds)
    const cName    = cPlot?.name || 'Comparaison'
    cols = [
      ...mainMetrics.map(m => ({ h: `[${mainName}] ${m.name} (${m.unit})`, gen: m.base })),
      ...cMetrics.map(m =>    ({ h: `[${cName}] ${m.name} (${m.unit})`,    gen: m.base })),
    ]
  } else {
    cols = mainMetrics.map(m => ({ h: `${m.name} (${m.unit})`, gen: m.base }))
  }

  const totalMs = getPeriodMinutes() * 60000
  const stepMs  = getStepMinutes() * 60000
  const end     = currentPeriod === 'custom' && customTo   ? customTo   : new Date()
  const start   = currentPeriod === 'custom' && customFrom ? customFrom : new Date(end - totalMs)
  const count   = Math.min(Math.ceil((end - start) / stepMs) + 1, 500)
  const step    = (end - start) / Math.max(count - 1, 1)
  const header  = ['Horodatage', ...cols.map(c => c.h)].join(';')
  const rows    = Array.from({ length: count }, (_, i) => {
    const ts = new Date(start.getTime() + i * step).toISOString().replace('T', ' ').slice(0, 19)
    return [ts, ...cols.map(c => c.gen())].join(';')
  })
  const name = mainName.replace(/[^\w]/g, '_')
  triggerCsvDownload([header, ...rows].join('\r\n'), `${name}_${currentPeriod}_${new Date().toISOString().slice(0, 10)}.csv`)
}

function showConfirmModal({ title, message, confirmLabel = 'Confirmer', onConfirm }) {
  const modal = document.createElement('div')
  modal.className = 'modal add-modal'
  modal.style.zIndex = '9999'
  modal.innerHTML = `
    <div class="add-modal-content" style="max-width:400px">
      <div class="add-modal-header">
        <span class="add-modal-title">${title}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div style="padding:16px 20px;display:flex;flex-direction:column;gap:16px">
        <p style="margin:0;font-size:13px;color:var(--txt2);line-height:1.5">${message}</p>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button class="btn-secondary confirm-cancel">Annuler</button>
          <button class="btn-danger confirm-ok">${confirmLabel}</button>
        </div>
      </div>
    </div>`
  modal.querySelector('.add-modal-close').addEventListener('click', () => modal.remove())
  modal.querySelector('.confirm-cancel').addEventListener('click', () => modal.remove())
  modal.querySelector('.confirm-ok').addEventListener('click', () => { modal.remove(); onConfirm() })
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
  document.body.appendChild(modal)
}

// ─── Mini map (Géolocalisation) ───────────────────────────────────────────────

// Mini-cartes des panneaux de configuration : statiques (pas de pan/zoom), une icône
// dédiée juste sous la carte ouvre une vue interactive (modale ou page d'édition).
const STATIC_MAP_OPTS = {
  zoomControl: false, attributionControl: false,
  dragging: false, touchZoom: false, scrollWheelZoom: false,
  doubleClickZoom: false, boxZoom: false, keyboard: false, tap: false,
}

// Capteurs liés représentés sur la mini-carte : un point chacun, ou une flèche directionnelle
// groupée (avec compteur) quand ils sont hors de la bounding box affichée.
const MAP_DIRS = [
  { key: 'N',  icon: 'bi-arrow-up' },   { key: 'NE', icon: 'bi-arrow-up-right' },
  { key: 'E',  icon: 'bi-arrow-right' }, { key: 'SE', icon: 'bi-arrow-down-right' },
  { key: 'S',  icon: 'bi-arrow-down' },  { key: 'SW', icon: 'bi-arrow-down-left' },
  { key: 'W',  icon: 'bi-arrow-left' },  { key: 'NW', icon: 'bi-arrow-up-left' },
]
function bearingDirKey(dLat, dLng) {
  const angle = (Math.atan2(dLng, dLat) * 180 / Math.PI + 360) % 360
  return MAP_DIRS[Math.round(angle / 45) % 8].key
}
function arrowLatLngOnBounds(bounds, key) {
  // Légèrement à l'intérieur du cadre (10%) pour que l'icône ne soit jamais coupée par le conteneur.
  const n0 = bounds.getNorth(), s0 = bounds.getSouth(), e0 = bounds.getEast(), w0 = bounds.getWest()
  const padLat = (n0 - s0) * 0.1, padLng = (e0 - w0) * 0.1
  const n = n0 - padLat, s = s0 + padLat, e = e0 - padLng, w = w0 + padLng
  const midLat = (n + s) / 2, midLng = (e + w) / 2
  return { N: [n, midLng], NE: [n, e], E: [midLat, e], SE: [s, e], S: [s, midLng], SW: [s, w], W: [midLat, w], NW: [n, w] }[key]
}
function renderLinkedSensorMarkers(map, centerLat, centerLng) {
  const linkedIds = parcelState.linkedSensorIds || []
  if (!linkedIds.length) return
  const bounds = map.getBounds()
  const offDirs = {}
  linkedIds.forEach(sid => {
    const s = allSensors.find(x => x.id === sid)
    if (!s) return
    const otherPid = s.parcelIds.find(id => id !== parcelBase.id)
    const posParcel = otherPid ? plots.find(p => p.id === otherPid) : null
    const sLat = posParcel?.lat ?? centerLat, sLng = posParcel?.lng ?? centerLng
    if (sLat == null || sLng == null) return
    if (bounds.contains([sLat, sLng])) {
      L.circleMarker([sLat, sLng], { radius: 6, color: '#fff', weight: 2, fillColor: '#5b8dd9', fillOpacity: 0.95 }).addTo(map)
    } else {
      const key = bearingDirKey(sLat - centerLat, sLng - centerLng)
      offDirs[key] = (offDirs[key] || 0) + 1
    }
  })
  Object.entries(offDirs).forEach(([key, count]) => {
    const dir = MAP_DIRS.find(d => d.key === key)
    const icon = L.divIcon({
      className: 'mini-map-dir-arrow',
      html: `<div class="mini-map-dir-arrow-inner"><i class="bi ${dir.icon}"></i>${count > 1 ? `<span class="mini-map-dir-count">${count}</span>` : ''}</div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    })
    L.marker(arrowLatLngOnBounds(bounds, key), { icon, interactive: false }).addTo(map)
  })
}

function initMiniMap() {
  if (_miniMapInstance) { _miniMapInstance.invalidateSize(); return }
  const org = orgs.find(o => o.id === parcelBase.orgId)
  const lat = parcelState.lat ?? parcelBase.lat ?? org?.lat
  const lng = parcelState.lng ?? parcelBase.lng ?? org?.lng
  if (lat == null || lng == null) return

  const latlngs = parcelState.latlngs

  const map = L.map('parcel-mini-map', STATIC_MAP_OPTS)
  _miniMapInstance = map

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Esri'
  }).addTo(map)

  if (Array.isArray(latlngs) && latlngs.length >= 3) {
    const poly = L.polygon(latlngs, {
      color: 'white', weight: 2, fillColor: '#0172A4', fillOpacity: 0.3
    }).addTo(map)
    map.fitBounds(poly.getBounds(), { padding: [10, 10] })
    const center = poly.getBounds().getCenter()
    renderLinkedSensorMarkers(map, center.lat, center.lng)
  } else {
    // Parcelle représentée par un point : bounding box ±1 km de chaque côté, point centré.
    const dLat = 1 / 111
    const dLng = 1 / (111 * Math.cos(lat * Math.PI / 180))
    map.fitBounds([[lat - dLat, lng - dLng], [lat + dLat, lng + dLng]])
    L.circleMarker([lat, lng], {
      radius: 7, color: 'white', fillColor: 'var(--ok)', fillOpacity: 1, weight: 2
    }).addTo(map)
    renderLinkedSensorMarkers(map, lat, lng)
  }
}

// ─── Panel toggle ─────────────────────────────────────────────────────────────

function initPanelToggle() {
  const layout = document.getElementById('detail-layout')
  const btn    = document.getElementById('panel-toggle')
  const icon   = btn.querySelector('i')

  btn.addEventListener('click', () => {
    const collapsed = layout.classList.toggle('panel-collapsed')
    btn.title = collapsed ? 'Afficher le panneau' : 'Masquer le panneau'
    icon.className = collapsed ? 'bi bi-chevron-left' : 'bi bi-chevron-right'
  })
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

let _miniMapInstance = null

function initTabs() {
  const btns = document.querySelectorAll('.detail-tab-btn')
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'))
      document.querySelectorAll('.detail-tab-pane').forEach(p => p.classList.remove('active'))
      btn.classList.add('active')
      document.getElementById(btn.dataset.pane).classList.add('active')
      if (btn.dataset.pane === 'tab-journal') renderJournalTab()
    })
  })
}

// ─── Dashboard (Widgets) ──────────────────────────────────────────────────────

const WIDGET_DEFS = {
  'previsions-5j':   { size:'1x1', title:'Prévisions 5 jours',        icon:'bi-calendar3-week',        color:'#5b8dd9', render: renderWPrev5j,     footer: { label:'Voir détails', href:'previsions.html' } },
  'weephyt':         { size:'1x1', title:'Traitements',                 icon:'bi-shield-check',          color:'#2d9e5f', render: renderWWeephyt, footer: { label:'Voir détails', href:'#', tab:'journal' } },
  'cumuls':          { size:'1x1', title:'Cumuls',                     icon:'bi-bar-chart-fill',        color:'#2E75B6', render: renderWCumuls },
  'pluie-hist':      { size:'1x1', title:'Pluie',                      icon:'bi-cloud-rain-heavy',      color:'#2E75B6', render: renderWHistBars('pluie'), footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'etp-hist':        { size:'1x1', title:'Évapotranspiration',         icon:'bi-moisture',              color:'#7DBDD7', render: renderWHistBars('etp'),   footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'bilan':           { size:'1x1', title:'Bilan hydrique',             icon:'bi-droplet',               color:'#0172A4', render: renderWBilan,      footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'irrigations':     { size:'1x1', title:'Irrigations',               icon:'bi-moisture',              color:'#FF8C00', render: renderWIrrigations, footer: { label:'Voir détails', href:`irrigation.html?plot=${parcelId}` } },
  'gel':             { size:'1x1', title:'Suivi du risque de gel',     icon:'bi-thermometer-snow',      color:'#FEE7B4', render: renderWGel,        footer: { label:'Voir détails', href:'previsions.html' } },
  'dpv':             { size:'1x1', title:'DPV',                        icon:'bi-droplet-half',          color:'#5E88EC', render: renderWDpv,        footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'thi':             { size:'1x1', title:'THI',                        icon:'bi-heart-pulse',           color:'#e0a030', render: renderWThi,        footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'temp-rosee':      { size:'1x1', title:'Température de rosée',       icon:'bi-thermometer',           color:'#72B0D8', render: renderWTempRosee,  footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'temp-sol':        { size:'1x1', title:'Température du sol',         icon:'bi-layers',                color:'#795548', render: renderWTempSol,    footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'maizy':           { size:'1x1', title:"Maï'zy",                     icon:'bi-calendar-check',        color:'#2d9e5f', render: renderWMaizy,      footer: { label:'Voir détails', href:'#' } },
  'tavelure':        { size:'1x1', title:'Tavelure Pomme',             icon:'bi-exclamation-triangle',  color:'#e07050', render: renderWTavelure,           footer: { label:'Voir détails', href:'#' } },
  'suivi-culture':   { size:'1x1', title:'Suivi de culture',           icon:'bi-flower2',               color:'#78d8a0', render: renderWPlaceholder },
  'decitrait':       { size:'1x1', title:'Decitrait',                  icon:'bi-shield',                color:'#6080b0', render: renderWPlaceholder,        footer: { label:'Voir détails', href:'#' } },
  'previsions-6h':   { size:'1x1', title:'Prévisions à 6 heures',      icon:'bi-clock',                 color:'#5b8dd9', render: renderWPlaceholder,        footer: { label:'Voir détails', href:'previsions.html' } },
  'previsions-jour': { size:'1x1', title:'Prévisions du jour',         icon:'bi-sun',                   color:'#f5c842', render: renderWPlaceholder,        footer: { label:'Voir détails', href:'previsions.html' } },
  'previsions-tensio':{ size:'1x1',title:'Prévisions tensiométrie',    icon:'bi-graph-down',            color:'#A6C157', render: renderWPlaceholder,        footer: { label:'Voir détails', href:'previsions.html' } },
  'w-station':       { size:'1x1', title:'Station météo',              icon:'bi-broadcast',             color:'#FBAF05', render: renderWSensor('w-station'), footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'w-thygro':        { size:'1x1', title:'Thermomètre-hygromètre',          icon:'bi-thermometer-half',      color:'#FBAF05', render: renderWSensor('w-thygro'), footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'w-tsol':          { size:'1x1', title:'Thermomètre de sol',         icon:'bi-layers',                color:'#795548', render: renderWSensor('w-tsol'),   footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'w-anem':          { size:'1x1', title:'Anémomètre',                 icon:'bi-wind',                  color:'#616161', render: renderWSensor('w-anem'),   footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'w-pyrano':        { size:'1x1', title:'Pyranomètre',                icon:'bi-sun',                   color:'#CBCB0B', render: renderWSensor('w-pyrano'), footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'w-lws':           { size:'1x1', title:"Capteur d'humectation foliaire",       icon:'bi-droplet',               color:'#00887E', render: renderWSensor('w-lws'),    footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'w-par':           { size:'1x1', title:'Capteur PAR',                icon:'bi-brightness-high',       color:'#4CBB17', render: renderWSensor('w-par'),    footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'w-capa':          { size:'1x1', title:'Sonde capacitive',           icon:'bi-moisture',              color:'#ED9A2C', render: renderWSensor('w-capa'),   footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'w-tensio':        { size:'1x1', title:'Tensiomètre',                icon:'bi-graph-down',            color:'#A6C157', render: renderWSensor('w-tensio'), footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'w-ec':            { size:'1x1', title:'Sonde de fertirrigation',       icon:'bi-plug',                  color:'#2BCDDE', render: renderWSensor('w-ec'),     footer: { label:'Voir détails', href:'#', tab:'donnees' } },
  'profil-capteurs': { size:'1x1', title:'Profil capteurs',            icon:'bi-bar-chart',             color:'#5b8dd9', render: renderWPlaceholder },
  'niveau-reservoir':{ size:'1x1', title:'Niveau de réservoir (RFU)',  icon:'bi-droplet-fill',          color:'#0172A4', render: renderWNiveauReservoir },
  'profil-reservoir':{ size:'1x1', title:'Profil de réservoir',        icon:'bi-clipboard-data',        color:'#0172A4', render: renderWProfilReservoir },
}

const DASH_STORAGE_KEY = () => `dash-widgets-parcel-${parcelId}`

let _dashMap = null

function getActiveWidgetIds() {
  try {
    const stored = JSON.parse(localStorage.getItem(DASH_STORAGE_KEY()))
    if (Array.isArray(stored) && stored.length) return stored
  } catch (_) {}
  return computeDefaultWidgetIds()
}

function saveWidgetIds(ids) {
  localStorage.setItem(DASH_STORAGE_KEY(), JSON.stringify(ids))
}

function pruneWidgetsAfterRemoval(remainingLinkedIds) {
  const remaining = allSensors.filter(s => remainingLinkedIds.includes(s.id))
  const models = new Set(remaining.map(s => s.model))
  const hasCapa   = [...models].some(m => m.startsWith('CAPA-'))
  const hasTensio = [...models].some(m => TENSIO_MODELS.includes(m))
  // cumuls always valid: ETP + ensoleillement are sensor-independent; renderWCumuls filters pluie/DJ/HF internally
  const valid = new Set(['previsions-5j', 'weephyt', 'cumuls', 'pluie-hist', 'etp-hist'])
  if (models.has('P+') || models.has('PT') || models.has('SMV') || models.has('P')) valid.add('w-station')
  if (models.has('TH'))     valid.add('w-thygro')
  if (models.has('T_MINI')) valid.add('w-tsol')
  if (models.has('W'))      valid.add('w-anem')
  if (models.has('PYRANO')) valid.add('w-pyrano')
  if (models.has('LWS'))    valid.add('w-lws')
  if (models.has('T_GEL'))  valid.add('gel')
  if (models.has('PAR'))    valid.add('w-par')
  if (hasCapa)              valid.add('w-capa')
  if (hasTensio)            valid.add('w-tensio')
  if (models.has('EC'))     valid.add('w-ec')
  if (hasTensio || hasCapa) valid.add('bilan')
  const hasIrrig = (!!parcelBase.irrigation && parcelBase.irrigation !== 'Non irrigué')
    || IRRIG_SEASON.some(i => i.plotId === parcelBase.id)
  if (hasIrrig) valid.add('irrigations')
  const saved = getActiveWidgetIds()
  const pruned = saved.filter(id => valid.has(id))
  if (pruned.length !== saved.length) saveWidgetIds(pruned)
}

function addWidgetsForSensor(sensor) {
  const cur = getActiveWidgetIds()
  const push = id => { if (!cur.includes(id)) cur.push(id) }
  const m = sensor.model
  if (m === 'P+' || m === 'PT' || m === 'SMV' || m === 'P') push('w-station')
  if (m === 'TH')     push('w-thygro')
  if (m === 'T_MINI') push('w-tsol')
  if (m === 'W')      push('w-anem')
  if (m === 'PYRANO') push('w-pyrano')
  if (m === 'LWS')    push('w-lws')
  if (m === 'T_GEL')  push('gel')
  if (m === 'PAR')    push('w-par')
  if (m === 'EC')     push('w-ec')
  if (m.startsWith('CAPA-')) { push('w-capa'); push('bilan') }
  if (TENSIO_MODELS.includes(m)) { push('w-tensio'); push('bilan') }
  saveWidgetIds(cur)
}

function computeDefaultWidgetIds() {
  const linked  = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  const models  = new Set(linked.map(s => s.model))
  const hasCapa   = [...models].some(m => m.startsWith('CAPA-'))
  const hasTensio = [...models].some(m => TENSIO_MODELS.includes(m))
  const hasIrrig = (!!parcelBase.irrigation && parcelBase.irrigation !== 'Non irrigué')
    || IRRIG_SEASON.some(i => i.plotId === parcelBase.id)
  // Ordre par défaut : prévisions, irrigations, traitements, cumuls, données capteurs, puis pluie/ETP (J-7 -> J+7)
  const ids = ['previsions-5j']
  if (hasIrrig) ids.push('irrigations')
  ids.push('weephyt', 'cumuls')
  if (models.has('P+') || models.has('PT') || models.has('SMV') || models.has('P')) ids.push('w-station')
  if (models.has('TH'))     ids.push('w-thygro')
  if (models.has('T_MINI')) ids.push('w-tsol')
  if (models.has('W'))      ids.push('w-anem')
  if (models.has('PYRANO')) ids.push('w-pyrano')
  if (models.has('LWS'))    ids.push('w-lws')
  if (models.has('T_GEL'))  ids.push('gel')
  if (models.has('PAR'))    ids.push('w-par')
  if (hasCapa)   ids.push('w-capa')
  if (hasTensio) ids.push('w-tensio')
  if (models.has('EC'))     ids.push('w-ec')
  if (hasTensio || hasCapa) ids.push('bilan')
  ids.push('pluie-hist', 'etp-hist')
  return ids
}

function initDashGrid() {
  const grid = document.getElementById('dash-grid')
  if (!grid) return

  let order
  const ids = getActiveWidgetIds()
  if (!ids.includes('irrigations') && IRRIG_SEASON.some(i => i.plotId === parcelBase.id)) {
    ids.push('irrigations')
    saveWidgetIds(ids)
  }
  grid.innerHTML = ''
  ids.forEach(id => {
    const def = WIDGET_DEFS[id]
    if (!def) return
    const block = document.createElement('div')
    block.className = `dash-block dash-block--${def.size}`
    block.dataset.id = id
    block.draggable = true
    const footerHtml = def.footer
      ? `<div class="dash-block-ft"><a class="dash-block-ft-link" href="${def.footer.href}"${def.footer.tab ? ` data-tab="${def.footer.tab}"` : ''}>${def.footer.label} →</a></div>`
      : ''
    block.innerHTML = `
      <div class="dash-block-hd" style="color:${def.color}">
        <span style="display:flex;align-items:center;gap:6px"><i class="bi ${def.icon}"></i> ${def.title}</span>
        <button class="dash-menu-btn" data-wid="${id}" title="Options" aria-label="Options">···</button>
      </div>
      <div class="dash-block-body" id="dblock-${id}"></div>
      ${footerHtml}`
    grid.appendChild(block)
    def.render(block.querySelector(`#dblock-${id}`))
  })
  grid.querySelectorAll('.dash-menu-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      document.querySelector('.dash-dropdown')?.remove()
      const wid = btn.dataset.wid
      const dd = document.createElement('div')
      dd.className = 'dash-dropdown'
      const irrigItems = wid === 'irrigations' ? `
        <button class="dash-dd-item" data-action="set-vol">Définir le volume limité et le débit</button>` : ''
      dd.innerHTML = `${irrigItems}<button class="dash-dd-item dash-dd-remove" data-action="remove" data-wid="${wid}">Retirer le widget</button>`
      const rect = btn.getBoundingClientRect()
      const gridRect = grid.getBoundingClientRect()
      dd.style.top  = `${rect.bottom - gridRect.top + 4}px`
      dd.style.right = `${gridRect.right - rect.right}px`
      grid.style.position = 'relative'
      grid.appendChild(dd)
      dd.querySelector('[data-action="remove"]')?.addEventListener('click', () => {
        dd.remove()
        const cur = getActiveWidgetIds().filter(id => id !== wid)
        saveWidgetIds(cur)
        initDashGrid()
      })
      dd.querySelector('[data-action="set-vol"]')?.addEventListener('click', () => {
        dd.remove()
        openIrrigWidgetAction('vol')
      })
      setTimeout(() => document.addEventListener('click', () => dd.remove(), { once: true }), 0)
    })
  })
  // Footer tab links
  grid.querySelectorAll('.dash-block-ft-link[data-tab]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault()
      document.querySelector(`.detail-tab-btn[data-pane="tab-${a.dataset.tab}"]`)?.click()
    })
  })
  attachDashDragHandlers(grid)
}

function getParcelIrrigations() {
  return IRRIG_SEASON.filter(i => i.plotId === parcelId)
}

// ── Chart & gauge helpers ──────────────────────────────────────────────────────

function wLineChart(series, W=380, H=90) {
  const PL=28, PR=8, PT=6, PB=20, iW=W-PL-PR, iH=H-PT-PB
  const allV = series.flatMap(s => s.values)
  let minV = Math.min(...allV), maxV = Math.max(...allV)
  if (minV === maxV) { minV -= 1; maxV += 1 }
  const N = series[0].values.length
  const xOf = i => (PL + (i/(N-1))*iW).toFixed(1)
  const yOf = v => (PT + iH - ((v-minV)/(maxV-minV))*iH).toFixed(1)
  const grid = [.25,.5,.75].map(t => {
    const y=(PT+t*iH).toFixed(1)
    return `<line x1="${PL}" y1="${y}" x2="${W-PR}" y2="${y}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`
  }).join('')
  const yLbls = [minV,(minV+maxV)/2,maxV].map(v =>
    `<text x="${PL-3}" y="${(+yOf(v)+3.5).toFixed(0)}" text-anchor="end" font-size="9" fill="var(--txt3)">${v.toFixed(0)}</text>`
  ).join('')
  const paths = series.map(s => {
    const d = s.values.map((v,i) => `${i?'L':'M'}${xOf(i)},${yOf(v)}`).join('')
    return `<path d="${d}" fill="none" stroke="${s.color}" stroke-width="1.8" stroke-linejoin="round"/>`
  }).join('')
  return `<svg width="100%" height="${H}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">${yLbls}${grid}${paths}</svg>`
}

// Semi-circle gauge: pct 0→1, zones=[{from,to,color}]
function wGauge(pct, zones, label, valueStr) {
  const W=160, H=100, CX=80, CY=90, R=60, SW=12
  const arc = (p1, p2) => {
    const a1 = Math.PI + p1*Math.PI, a2 = Math.PI + p2*Math.PI
    const x1=(CX+R*Math.cos(a1)).toFixed(1), y1=(CY+R*Math.sin(a1)).toFixed(1)
    const x2=(CX+R*Math.cos(a2)).toFixed(1), y2=(CY+R*Math.sin(a2)).toFixed(1)
    return `M${x1},${y1} A${R},${R},0,${(p2-p1)>0.5?1:0},1,${x2},${y2}`
  }
  const trackPath = arc(0,1)
  const fillPaths = zones.filter(z => z.from < pct).map(z =>
    `<path d="${arc(z.from, Math.min(z.to, pct))}" fill="none" stroke="${z.color}" stroke-width="${SW}" stroke-linecap="butt"/>`
  ).join('')
  const na = Math.PI + pct*Math.PI
  const nx=(CX+(R)*Math.cos(na)).toFixed(1), ny=(CY+(R)*Math.sin(na)).toFixed(1)
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <path d="${trackPath}" fill="none" stroke="var(--bdr2)" stroke-width="${SW}" stroke-linecap="butt"/>
    ${fillPaths}
    <circle cx="${nx}" cy="${ny}" r="5" fill="white" stroke="var(--txt3)" stroke-width="1.5"/>
    <text x="${CX}" y="${CY-10}" text-anchor="middle" font-size="20" font-weight="700" fill="var(--txt)">${valueStr}</text>
    <text x="${CX}" y="${CY+6}" text-anchor="middle" font-size="9" fill="var(--txt3)">${label}</text>
  </svg>`
}

// ── Widget render functions ────────────────────────────────────────────────────

function renderWPrev5j(el) {
  const DN=['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
  const MN=['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const WI=['bi-sun','bi-cloud-sun','bi-cloud','bi-cloud-rain','bi-cloud-lightning-rain']
  const WL=['Ensoleillé','Part. nuageux','Couvert','Pluvieux','Orageux']
  const today=new Date()
  const p=plots.find(pl=>pl.id===parcelId)
  const org=orgs.find(o=>o.id===p?.orgId)
  const city=p?.ville||org?.ville||'—'

  const makeDay=(i,off)=>{
    const d=new Date(today); d.setDate(d.getDate()+i)
    const wi=Math.floor(((parcelId*7+i*3)%11)/2.2)
    return{
      lbl:i===0?'Auj.':DN[d.getDay()],
      date:`${d.getDate()} ${MN[d.getMonth()]}`,
      tmax:rnd(17+off,34+off),tmin:rnd(4+off,15+off),
      pluie:wi>=3?rnd(2,18):0,
      vent:rnd(10,35),rafales:rnd(25,70),
      wi
    }
  }
  // AROME 0–72h (j0–j2), ICON EU 72–136h (j3–j4)
  const days=[0,1,2].map(i=>makeDay(i,0)).concat([3,4].map(i=>makeDay(i,-1)))

  const dayHtml=d=>`
    <div class="w-prev5-day">
      <div class="w-prev5-daylbl">${d.lbl}</div>
      <div class="w-prev5-date">${d.date}</div>
      <i class="bi ${WI[d.wi]} w-prev5-icon" title="${WL[d.wi]}"></i>
      <div class="w-prev5-row"><i class="bi bi-droplet-fill" style="color:#45b7d1;font-size:9px"></i><span>${d.pluie>0?d.pluie+' mm':'—'}</span></div>
      <div class="w-prev5-row w-prev5-tmax"><i class="bi bi-thermometer-high" style="font-size:9px"></i>${d.tmax}°</div>
      <div class="w-prev5-row w-prev5-tmin"><i class="bi bi-thermometer-low" style="font-size:9px"></i>${d.tmin}°</div>
      <div class="w-prev5-row" style="color:var(--txt3)"><i class="bi bi-wind" style="font-size:9px"></i>${d.vent}</div>
      <div class="w-prev5-row" style="color:var(--txt3);font-size:9px"><i class="bi bi-arrow-up-right" style="font-size:9px"></i>${d.rafales}</div>
    </div>`

  el.innerHTML=`
    <div class="w-prev5-loc"><i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i> ${city}</div>
    <div class="w-prev5-model-hdr">
      <span class="w-prev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="w-prev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="w-prev5-grid">${days.map(dayHtml).join('')}</div>`
}

function renderWWeephyt(el) {
  const now = new Date()
  // Product families — on cherche la prochaine fenêtre favorable de chacune sur les 24h glissantes
  const families = [
    { label: 'Herbicides de contact', seed: 7 },
    { label: 'Fongicides', seed: 3 },
    { label: 'Herbicides racinaires', seed: 11 },
    { label: 'Herbicides systémiques', seed: 5 },
  ]
  const hours = Array.from({ length: 24 }, (_, i) => {
    const d = new Date(now); d.setMinutes(0, 0, 0); d.setHours(d.getHours() + i); return d
  })
  const fmtH = d => `${String(d.getHours()).padStart(2, '0')}h`
  const dayLabel = d => d.toDateString() === now.toDateString() ? "Aujourd'hui" : 'Demain'

  const nextWindow = family => {
    const ok = hours.map((_, i) => ((family.seed * 17 + parcelId * 13 + i * 5) % 11) < 6)
    const start = ok.findIndex(v => v)
    if (start === -1) return null
    let end = start
    while (end + 1 < ok.length && ok[end + 1]) end++
    return { from: hours[start], to: new Date(hours[end].getTime() + 3600000) }
  }

  const rows = families.map(f => {
    const w = nextWindow(f)
    return `<div class="w-weephyt-family-row">
      <span class="w-weephyt-family-label">${f.label}</span>
      ${w
        ? `<span class="w-weephyt-window"><i class="bi bi-check-circle-fill"></i> ${dayLabel(w.from)} ${fmtH(w.from)}–${fmtH(w.to)}</span>`
        : `<span class="w-weephyt-window w-weephyt-window--none">Aucune fenêtre sous 24h</span>`}
    </div>`
  }).join('')

  el.innerHTML = `<div class="w-weephyt-wrap">
    <div class="w-weephyt-rows">${rows}</div>
    <div class="w-weephyt-actions">
      <button class="w-weephyt-btn w-weephyt-btn--pri" id="w-weephyt-saisir">Saisir un traitement</button>
    </div>
  </div>`

  el.querySelector('#w-weephyt-saisir')?.addEventListener('click', () => window.openJournalModal?.('traitement'))
}

const CUMULS_STATE_KEY = () => `w-cumuls-state-${parcelId}`
function loadCumulsState() {
  try { return JSON.parse(localStorage.getItem(CUMULS_STATE_KEY())) || {} } catch { return {} }
}
function saveCumulsState(patch) {
  const s = loadCumulsState()
  localStorage.setItem(CUMULS_STATE_KEY(), JSON.stringify({ ...s, ...patch }))
}

function renderWCumuls(el) {
  const linked=allSensors.filter(s=>parcelState.linkedSensorIds.includes(s.id))
  const met=new Set(linked.flatMap(s=>(METRICS_BY_MODEL[s.model]||[]).map(m=>m.id)))
  const jan1=`${new Date().getFullYear()}-01-01`
  const state=loadCumulsState()
  const hidden=new Set(state.hidden||[])
  const dates=state.dates||{}
  const cfg=state.cfg||{}

  const allAvailable=[
    {id:'etp',  label:'Évapotranspiration',value:rndf(20,80).toFixed(1),unit:'mm',color:'#c090e0',icon:'bi-sun',show:true},
    {id:'pluie',label:'Pluie',             value:pluieCumulSince(dates.pluie||jan1),unit:'mm',color:'#45b7d1',icon:'bi-cloud-rain-heavy',show:met.has('pluie')},
    {id:'djc',  label:'Degrés jours',      value:rnd(40,180),            unit:'DJ',color:'#e07050',icon:'bi-thermometer-half',show:met.has('temp'),cfg:true,
      cfgLabel:`${cfg.djMin??0}–${cfg.djMax??18}°C`,cfgFields:[{key:'djMin',label:'T min',def:0},{key:'djMax',label:'T max',def:18}]},
    {id:'hfroid',label:'Heures de froid',  value:rnd(5,40),              unit:'h', color:'#0B3A64',icon:'bi-snow',show:met.has('temp'),cfg:true,
      cfgLabel:`< ${cfg.hfSeuil??7.2}°C`,cfgFields:[{key:'hfSeuil',label:'Seuil',def:7.2}]},
    {id:'humec',label:'Humectation',       value:rndf(2,20).toFixed(1),  unit:'h', color:'#78d8a0',icon:'bi-droplet',show:met.has('humec')},
    {id:'enso', label:'Ensoleillement',    value:rndf(30,90).toFixed(1), unit:'h', color:'#f5c842',icon:'bi-brightness-high',show:true},
  ].filter(i=>i.show)

  const allItems=allAvailable.filter(i=>!hidden.has(i.id))
  const hiddenItems=allAvailable.filter(i=>hidden.has(i.id))

  const restoreHtml=hiddenItems.length
    ?`<div style="border-top:1px solid var(--bdr2);padding-top:8px;margin-top:8px">
        <div style="font-size:11px;color:var(--txt3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${hiddenItems.map(i=>`
          <button class="w-cumul-restore" data-cid="${i.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed var(--bdr);border-radius:8px;padding:7px 10px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${i.icon}" style="color:${i.color};font-size:14px;flex-shrink:0"></i>
            <span style="font-size:12px;color:var(--txt);flex:1">${i.label}</span>
            <i class="bi bi-plus-circle" style="color:var(--pri);font-size:14px;flex-shrink:0"></i>
          </button>`).join('')}
      </div>`
    :''

  el.innerHTML=`<div class="w-cumuls-list">${allItems.map(i=>{
    const d=dates[i.id]||jan1
    const fmtD=d.split('-').reverse().join('/')
    return `
      <div class="w-cumul-item">
        <i class="bi ${i.icon} w-cumul-icon" style="color:${i.color}"></i>
        <div class="w-cumul-body">
          <div class="w-cumul-lbl">${i.label}</div>
          <div class="w-cumul-val" style="color:${i.color}">${i.value}<span class="w-cumul-unit"> ${i.unit}</span></div>
          <div class="w-cumul-date">Depuis le <input type="date" class="w-cumul-date-input" data-cid="${i.id}" value="${d}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px">${i.cfg?`<button class="w-cumul-cfg" data-cid="${i.id}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px;line-height:1"><i class="bi bi-gear"></i> ${i.cfgLabel}</button>`:''}</div>
        </div>
        <button class="w-cumul-del" data-cid="${i.id}" title="Retirer">×</button>
      </div>`
  }).join('')}</div>${restoreHtml}`

  el.querySelectorAll('.w-cumul-del').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.stopPropagation()
      hidden.add(btn.dataset.cid)
      saveCumulsState({hidden:[...hidden]})
      renderWCumuls(el)
    })
  })
  el.querySelectorAll('.w-cumul-restore').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.stopPropagation()
      hidden.delete(btn.dataset.cid)
      saveCumulsState({hidden:[...hidden]})
      renderWCumuls(el)
    })
  })
  el.querySelectorAll('.w-cumul-date-input').forEach(input=>{
    input.addEventListener('change',()=>{
      dates[input.dataset.cid]=input.value
      saveCumulsState({dates})
    })
  })
  el.querySelectorAll('.w-cumul-cfg').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.stopPropagation()
      const cid=btn.dataset.cid
      const item=allItems.find(i=>i.id===cid)
      if(!item?.cfgFields) return
      el.querySelector('.w-cumul-cfg-panel')?.remove()
      const panel=document.createElement('div')
      panel.className='w-cumul-cfg-panel'
      panel.style.gridColumn='1 / -1'
      panel.innerHTML=`<div class="w-cumul-cfg-title">Paramétrer ${item.label}</div>`+
        item.cfgFields.map(f=>`
          <label class="w-cumul-cfg-row">
            <span>${f.label} (°C)</span>
            <input type="number" class="w-cumul-cfg-inp" data-key="${f.key}" value="${cfg[f.key]??f.def}" step="0.1">
          </label>`).join('')+
        `<button class="w-cumul-cfg-ok">OK</button>`
      btn.closest('.w-cumul-item').after(panel)
      panel.querySelector('.w-cumul-cfg-ok').addEventListener('click',()=>{
        panel.querySelectorAll('.w-cumul-cfg-inp').forEach(inp=>{cfg[inp.dataset.key]=parseFloat(inp.value)||0})
        saveCumulsState({cfg})
        panel.remove()
        renderWCumuls(el)
      })
    })
  })
}

function renderWGel(el) {
  const linked=allSensors.filter(s=>parcelState.linkedSensorIds.includes(s.id))
  if (!linked.some(s=>s.model==='T_GEL')) {el.innerHTML='<div class="dash-empty">Capteur T_GEL non lié</div>';return}
  const N=25, base=rndf(0,5)
  const tS=Array.from({length:N},(_,i)=>+(base+i*0.18+rndf(-0.8,0.8)).toFixed(1))
  const tH=tS.map(v=>+(v-rndf(1,2.5)).toFixed(1))
  const chart=wLineChart([{values:tS,color:'#23B19B'},{values:tH,color:'#5E88EC'}],380,100)
  const tSN=tS[N-1],tHN=tH[N-1]
  const gelColor=tHN<=0?'#e07050':tHN<=2?'#f5a030':'#2d9e5f'
  const gelRisk=tHN<=0?'Gel probable':tHN<=2?'Risque faible':'Pas de gel'
  const hLev=rnd(5,8),hMin=String(Math.floor(Math.random()*60)).padStart(2,'0')
  el.innerHTML=`<div class="w-gel-wrap">
    <div class="w-gel-legend">
      <span style="color:#23B19B"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sèche</span>
      <span style="color:#5E88EC"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. humide</span>
      <span style="font-size:10px;color:var(--txt3)">12 dernières heures</span>
    </div>
    <div class="w-gel-chart">${chart}</div>
    <div class="w-gel-cards">
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. sèche </span><span class="w-gel-card-val" style="color:#23B19B">${tSN}°C</span></div>
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. humide </span><span class="w-gel-card-val" style="color:#5E88EC">${tHN}°C</span></div>
    </div>
    <div class="w-gel-meteo">
      <div class="w-gel-meteo-row"><i class="bi bi-sunrise" style="color:#CBCB0B"></i><span>Lever du soleil</span><strong>${hLev}h${hMin}</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-cloud" style="color:#8090a0"></i><span>Couverture nuageuse</span><strong>${rnd(20,80)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i><span>Humidité</span><strong>${rnd(60,90)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-wind" style="color:#616161"></i><span>Vent moyen</span><strong>${rnd(5,25)} km/h</strong></div>
    </div>
  </div>`
}

function renderWDpv(el) {
  const linked=allSensors.filter(s=>parcelState.linkedSensorIds.includes(s.id))
  const hasTH=linked.some(s=>{const ms=METRICS_BY_MODEL[s.model]||[];return ms.some(m=>m.id==='temp')&&ms.some(m=>m.id==='humidite')})
  if (!hasTH) {el.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}
  const temp=rndf(18,30),hr=rnd(40,85)
  const es=0.611*Math.exp(17.27*temp/(temp+237.3))
  const dpv=+(es*(1-hr/100)).toFixed(2)
  const pct=Math.min(dpv/2,1)
  const dpvColor=dpv<0.4?'#5b8dd9':dpv<0.8?'#2d9e5f':dpv<1.2?'#f5a030':'#e07050'
  const dpvLabel=dpv<0.4?'Transpiration faible':dpv<0.8?'Transpiration optimale':dpv<1.2?'Forte transpiration':'Stress hydrique'
  const zones=[{from:0,to:0.2,color:'#5b8dd9'},{from:0.2,to:0.4,color:'#45b7d1'},{from:0.4,to:0.6,color:'#2d9e5f'},
    {from:0.6,to:0.8,color:'#a0c840'},{from:0.8,to:0.9,color:'#f5a030'},{from:0.9,to:1,color:'#e07050'}]
  const src=linked.find(s=>{const ms=METRICS_BY_MODEL[s.model]||[];return ms.some(m=>m.id==='temp')&&ms.some(m=>m.id==='humidite')})
  el.innerHTML=`<div class="w-dpv-wrap">
    <div class="w-dpv-gauge" style="color:${dpvColor}">${wGauge(pct,zones,dpvLabel,dpv+' kPa')}</div>
    <div class="w-dpv-details">
      <div class="w-dpv-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${temp.toFixed(1)} °C</div>
      <div class="w-dpv-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${hr} %</div>
    </div>
    ${src?`<div class="w-sensor-src">${MODEL_NAMES[src.model]||src.model} · ${src.serial}</div>`:''}
  </div>`
}

function renderWThi(el) {
  const linked=allSensors.filter(s=>parcelState.linkedSensorIds.includes(s.id))
  const hasTH=linked.some(s=>{const ms=METRICS_BY_MODEL[s.model]||[];return ms.some(m=>m.id==='temp')&&ms.some(m=>m.id==='humidite')})
  if (!hasTH) {el.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}
  const temp=rndf(20,35),hr=rnd(45,90)
  const thi=+(temp-0.55*(1-hr/100)*(temp-14.5)).toFixed(0)
  const thiColor=thi<68?'#2d9e5f':thi<72?'#f5c842':thi<79?'#f5a030':'#e07050'
  const thiLabel=thi<68?'Confort':thi<72?'Stress léger':thi<79?'Stress modéré':'Stress sévère'
  const DN=['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],today=new Date()
  const fc=Array.from({length:3},(_,i)=>{const d=new Date(today);d.setDate(d.getDate()+i+1);
    return{day:DN[d.getDay()],m:rnd(64,72),j:rnd(68,80),s:rnd(62,70)}})
  const fc_color=v=>v<68?'#2d9e5f':v<72?'#f5c842':'#f5a030'
  el.innerHTML=`<div class="w-thi-wrap">
    <div class="w-thi-header">
      <div class="w-thi-score" style="color:${thiColor}">
        <div class="w-thi-val">${thi}</div>
        <div class="w-thi-status">${thiLabel}</div>
      </div>
      <button class="w-thi-info-btn" title="Légende THI"><i class="bi bi-info-circle"></i></button>
    </div>
    <div class="w-thi-details">
      <div class="w-thi-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${temp.toFixed(1)} °C</div>
      <div class="w-thi-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${hr} %</div>
    </div>
    <div class="w-thi-forecast">
      <div class="w-thi-fc-label">Prévisions</div>
      ${fc.map(f=>`<div class="w-thi-fc-row">
        <span class="w-thi-fc-day">${f.day}</span>
        <span class="w-thi-fc-val" style="color:${fc_color(f.m)}">${f.m}</span>
        <span class="w-thi-fc-val" style="color:${fc_color(f.j)}">${f.j}</span>
        <span class="w-thi-fc-val" style="color:${fc_color(f.s)}">${f.s}</span>
      </div>`).join('')}
      <div class="w-thi-fc-legend"><span>Matin</span><span>Journée</span><span>Soir</span></div>
    </div>
  </div>`

  el.querySelector('.w-thi-info-btn').addEventListener('click',e=>{
    e.stopPropagation()
    const existing=el.querySelector('.w-thi-legend')
    if (existing) { existing.remove(); return }
    const leg=document.createElement('div')
    leg.className='w-thi-legend'
    leg.innerHTML=`
      <div class="w-thi-legend-title">Échelle THI</div>
      <div class="w-thi-legend-row" style="color:#2d9e5f"><span class="w-thi-legend-range">&lt; 68</span><span>Confort</span></div>
      <div class="w-thi-legend-row" style="color:#f5c842"><span class="w-thi-legend-range">68 – 71</span><span>Stress léger</span></div>
      <div class="w-thi-legend-row" style="color:#f5a030"><span class="w-thi-legend-range">72 – 78</span><span>Stress modéré</span></div>
      <div class="w-thi-legend-row" style="color:#e07050"><span class="w-thi-legend-range">≥ 79</span><span>Stress sévère</span></div>`
    el.querySelector('.w-thi-wrap').insertBefore(leg, el.querySelector('.w-thi-details'))
  })
}

function renderWTempRosee(el) {
  const linked=allSensors.filter(s=>parcelState.linkedSensorIds.includes(s.id))
  const hasTH=linked.some(s=>{const ms=METRICS_BY_MODEL[s.model]||[];return ms.some(m=>m.id==='temp')&&ms.some(m=>m.id==='humidite')})
  if (!hasTH) {el.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}
  const N=72,base=rndf(14,22)
  const temp=Array.from({length:N},(_,i)=>+(base+6*Math.sin(i/24*2*Math.PI-Math.PI/2)+rndf(-0.5,0.5)).toFixed(1))
  const hr=Array.from({length:N},(_,i)=>Math.max(30,Math.min(100,70-15*Math.sin(i/24*2*Math.PI-Math.PI/2)+rndf(-3,3))))
  const rosee=temp.map((t,i)=>{const h=hr[i]/100,a=17.27,b=237.3;const g=Math.log(h)+a*t/(b+t);return +(b*g/(a-g)).toFixed(1)})
  el.innerHTML=`<div class="w-temprosee-wrap">
    ${wLineChart([{values:temp,color:'#FBAF05'},{values:rosee,color:'#72B0D8'}],380,100)}
    <div class="w-temprosee-legend">
      <span style="color:#FBAF05"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Température (${temp[N-1]}°C)</span>
      <span style="color:#72B0D8"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Point de rosée (${rosee[N-1]}°C)</span>
      <span style="font-size:10px;color:var(--txt3)">3 derniers jours</span>
    </div>
  </div>`
}

function renderWTempSol(el) {
  const linked=allSensors.filter(s=>parcelState.linkedSensorIds.includes(s.id))
  const hasTsol=linked.some(s=>(METRICS_BY_MODEL[s.model]||[]).some(m=>m.id==='tsol'))
  if (!hasTsol) {el.innerHTML='<div class="dash-empty">Capteur T. sol requis</div>';return}
  const N=48,base=rndf(14,20)
  const vals=Array.from({length:N},(_,i)=>+(base+3*Math.sin(i/24*2*Math.PI-Math.PI/2)+rndf(-0.4,0.4)).toFixed(1))
  const optMin=15,optMax=22
  const W=380,H=100,PL=28,PR=8,PT=6,PB=20,iW=W-PL-PR,iH=H-PT-PB
  const allV=[...vals,optMin,optMax],minV=Math.min(...allV)-1,maxV=Math.max(...allV)+1
  const xOf=i=>(PL+(i/(N-1))*iW).toFixed(1)
  const yOf=v=>(PT+iH-((v-minV)/(maxV-minV))*iH).toFixed(1)
  const yOM=+yOf(optMin),yOMx=+yOf(optMax)
  const grid=[.25,.5,.75].map(t=>{const y=(PT+t*iH).toFixed(1);return `<line x1="${PL}" y1="${y}" x2="${W-PR}" y2="${y}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join('')
  const d=vals.map((v,i)=>`${i?'L':'M'}${xOf(i)},${yOf(v)}`).join('')
  el.innerHTML=`<div class="w-tsol-wrap">
    <svg width="100%" height="${H}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
      ${grid}
      <rect x="${PL}" y="${yOMx.toFixed(1)}" width="${iW}" height="${(yOM-yOMx).toFixed(1)}" fill="rgba(45,158,95,.1)"/>
      <line x1="${PL}" y1="${yOM.toFixed(1)}" x2="${W-PR}" y2="${yOM.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <line x1="${PL}" y1="${yOMx.toFixed(1)}" x2="${W-PR}" y2="${yOMx.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <path d="${d}" fill="none" stroke="#795548" stroke-width="2" stroke-linejoin="round"/>
      <text x="${PL-3}" y="${(PT+4)}" text-anchor="end" font-size="9" fill="var(--txt3)">${maxV.toFixed(0)}</text>
      <text x="${PL-3}" y="${(PT+iH+4)}" text-anchor="end" font-size="9" fill="var(--txt3)">${minV.toFixed(0)}</text>
    </svg>
    <div class="w-tsol-legend">
      <span style="color:#795548"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sol · ${vals[N-1]}°C</span>
      <span style="color:#2d9e5f;font-size:10px"><i class="bi bi-square-fill" style="opacity:.3"></i> Zone optimale ${optMin}–${optMax}°C</span>
      <span style="font-size:10px;color:var(--txt3)">48 dernières heures</span>
    </div>
  </div>`
}

function renderWMaizy(el) {
  const crop=(parcelState.crop||parcelBase.crop||'').toLowerCase()
  if (!crop.includes('maïs')&&!crop.includes('mais')) {el.innerHTML='<div class="dash-empty">Culture Maïs requise</div>';return}
  const VARI=[{name:'Farmflex 253',target:1320},{name:'DKC 3230',target:1380},{name:'Ronaldinio',target:1290},{name:'Banguy',target:1350}]
  const vari=VARI[parcelId%VARI.length]
  const djCumul=parcelBase.degresJour||rnd(600,1200)
  const pct=Math.min(djCumul/vari.target,1)
  const remaining=Math.max(0,vari.target-djCumul)
  const today=new Date(),daysLeft=Math.round(remaining/10)
  const d1=new Date(today);d1.setDate(d1.getDate()+Math.max(0,daysLeft-5))
  const d2=new Date(today);d2.setDate(d2.getDate()+daysLeft+5)
  const MN=['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const fmtD=d=>`${d.getDate()} ${MN[d.getMonth()]}`
  el.innerHTML=`<div class="w-maizy-wrap">
    <div class="w-maizy-title">Récolte prévisionnelle</div>
    <div class="w-maizy-dates">${fmtD(d1)} — ${fmtD(d2)}</div>
    <div class="w-maizy-bar-wrap">
      <div class="w-maizy-bar-track"><div class="w-maizy-bar-fill" style="width:${(pct*100).toFixed(1)}%"></div></div>
      <div class="w-maizy-bar-pct">${(pct*100).toFixed(0)} %</div>
    </div>
    <div class="w-maizy-dj">
      <span class="w-maizy-dj-val">${djCumul.toFixed?djCumul.toFixed(1):djCumul}</span>
      <span class="w-maizy-dj-sep"> / ${vari.target} DJ</span>
      <span class="w-maizy-dj-vari">${vari.name}</span>
    </div>
    <a class="w-maizy-link" href="#">Voir le détail <i class="bi bi-arrow-right"></i></a>
  </div>`
}

function renderWTavelure(el) {
  const crop=(parcelState.crop||parcelBase.crop||'').toLowerCase()
  if (!crop.includes('pommier')&&!crop.includes('pomme')) {el.innerHTML='<div class="dash-empty">Culture Pommier requise</div>';return}
  const today=new Date(),lastEp=new Date(today)
  lastEp.setDate(lastEp.getDate()-rnd(2,8))
  const MN=['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const fmtD=d=>`${d.getDate()} ${MN[d.getMonth()]}`
  const duree=rnd(8,24),dh=rnd(80,280)
  const riskLvl=dh>200?'Élevé':dh>120?'Modéré':'Léger'
  const riskColor=dh>200?'#e07050':dh>120?'#f5a030':'#2d9e5f'
  el.innerHTML=`<div class="w-tav-wrap">
    <div class="w-tav-ep">Dernier épisode · <strong>${fmtD(lastEp)}</strong></div>
    <div class="w-tav-stats">
      <div class="w-tav-stat"><span class="w-tav-stat-val">${duree}h</span><span class="w-tav-stat-lbl">Durée</span></div>
      <div class="w-tav-stat"><span class="w-tav-stat-val">${dh} DH</span><span class="w-tav-stat-lbl">Degrés-heures</span></div>
    </div>
    <div class="w-tav-risk" style="color:${riskColor}">
      <i class="bi bi-circle-fill" style="font-size:8px;vertical-align:middle"></i>
      Risque d'infection estimé <strong>${riskLvl}</strong>
    </div>
    <a class="w-maizy-link" href="#">Afficher l'historique <i class="bi bi-arrow-right"></i></a>
  </div>`
}

// ─── Niveau de réservoir (RFU) / Profil de réservoir ──────────────────────────
const RESERVOIR_AGGS = [
  { id: 'j7',   label: 'J-7' },
  { id: 'j1',   label: 'J-1' },
  { id: 'j0',   label: 'J0' },
  { id: 'last', label: 'Dernières données' },
]
// Le "Niveau de réservoir spatialisé" (profil) n'expose que J-7 et J-1
const PROFIL_RESERVOIR_AGGS = RESERVOIR_AGGS.filter(o => o.id === 'j7' || o.id === 'j1')
const reservoirAggState = () => `w-reservoir-agg-${parcelId}`
const profilReservoirAggState = () => `w-profil-reservoir-agg-${parcelId}`
function loadReservoirAgg(key, defaultAgg = 'j0') { return localStorage.getItem(key()) || defaultAgg }
function saveReservoirAgg(key, val) { localStorage.setItem(key(), val) }

function reservoirAggValue(agg) {
  const rhu = parcelBase.reserveHydrique || 80
  const seed = (parcelBase.id * 17 + 13) % 41
  const offsets = { j7: -8, j1: -2, j0: 0, last: 1 }
  const pct = Math.min(95, Math.max(15, 55 + seed + (offsets[agg] || 0)))
  const mm = Math.round(rhu * pct / 100)
  return { rhu, pct, mm }
}

function reservoirAggSelectHtml(agg, options = RESERVOIR_AGGS) {
  return `<select class="w-reservoir-agg-sel">
    ${options.map(o => `<option value="${o.id}"${o.id === agg ? ' selected' : ''}>${o.label}</option>`).join('')}
  </select>`
}

function renderWNiveauReservoir(el) {
  const agg = loadReservoirAgg(reservoirAggState)
  const { rhu, pct, mm } = reservoirAggValue(agg)
  const gaugeColor = pct > 60 ? '#2d9e5f' : pct > 35 ? '#e07820' : '#e04040'
  el.innerHTML = `
    <div class="w-bilan-layout">
      ${reservoirAggSelectHtml(agg)}
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track"><div class="w-bilan-gauge-fill" style="width:${pct}%;background:${gaugeColor}"></div></div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${gaugeColor}">${mm} mm / ${rhu} mm RFU (${pct} %)</span>
          <span>${rhu} mm</span>
        </div>
      </div>
    </div>`
  el.querySelector('.w-reservoir-agg-sel').addEventListener('change', e => {
    saveReservoirAgg(reservoirAggState, e.target.value)
    renderWNiveauReservoir(el)
  })
}

function renderWProfilReservoir(el) {
  const agg = loadReservoirAgg(profilReservoirAggState, 'j1')
  const { pct } = reservoirAggValue(agg)
  const seed = (parcelBase.id * 17 + 13) % 41
  const depths = [
    { label: '10 cm', pct: Math.min(100, Math.max(0, pct + (seed % 12) - 5)), color: '#f0cc60' },
    { label: '30 cm', pct: Math.min(100, Math.max(0, pct + (seed % 8))),       color: '#c89c30' },
    { label: '60 cm', pct: Math.min(100, Math.max(0, pct - (seed % 10) + 3)),  color: '#a07010' },
  ]
  el.innerHTML = `
    <div class="w-bilan-layout">
      ${reservoirAggSelectHtml(agg, PROFIL_RESERVOIR_AGGS)}
      <div class="w-bilan-horizons">
        ${depths.map(d => `
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${d.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${d.pct}%;background:${d.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${d.color}">${d.pct} %</span>
          </div>`).join('')}
      </div>
    </div>`
  el.querySelector('.w-reservoir-agg-sel').addEventListener('change', e => {
    saveReservoirAgg(profilReservoirAggState, e.target.value)
    renderWProfilReservoir(el)
  })
}

function renderWPlaceholder(el) {
  el.innerHTML=`<div class="dash-empty" style="padding-top:20px">
    <i class="bi bi-hourglass" style="font-size:20px;opacity:.3;display:block;margin-bottom:6px"></i>
    Widget bientôt disponible
  </div>`
}

function renderWSensor(type) {
  return (el) => {
    const linked=allSensors.filter(s=>parcelState.linkedSensorIds.includes(s.id))
    const finders={
      'w-station':s=>['P+','PT','SMV','P'].includes(s.model),
      'w-thygro': s=>s.model==='TH',
      'w-tsol':   s=>s.model==='T_MINI',
      'w-anem':   s=>s.model==='W',
      'w-pyrano': s=>s.model==='PYRANO',
      'w-lws':    s=>s.model==='LWS',
      'w-par':    s=>s.model==='PAR',
      'w-capa':   s=>s.model.startsWith('CAPA-'),
      'w-tensio': s=>TENSIO_MODELS.includes(s.model),
      'w-ec':     s=>s.model==='EC',
    }
    const sensor=linked.find(finders[type]||(() => false))
    if (!sensor) {el.innerHTML='<div class="dash-empty">Aucun capteur compatible lié</div>';return}
    const ms=METRICS_BY_MODEL[sensor.model]||[]
    const rowsMap={
      'w-station':()=>{
        const r=[]
        if(ms.some(m=>m.id==='temp'))     r.push({label:'Température',val:rnd(10,30)+' °C',  color:'#FBAF05',icon:'bi-thermometer-half'})
        if(ms.some(m=>m.id==='pluie'))    r.push({label:'Pluie 24h',   val:rnd(0,14)+' mm',   color:'#2E75B6',icon:'bi-cloud-rain-heavy'})
        if(ms.some(m=>m.id==='humidite')) r.push({label:'Humidité',    val:rnd(40,90)+' %',   color:'#5B12A4',icon:'bi-droplet-half'})
        return r
      },
      'w-thygro':()=>[
        {label:'Température',val:rnd(10,30)+' °C',color:'#FBAF05',icon:'bi-thermometer-half'},
        {label:'Humidité',   val:rnd(40,90)+' %', color:'#5B12A4',icon:'bi-droplet-half'},
      ],
      'w-tsol': ()=>[{label:'Temp. sol',      val:rnd(8,22)+' °C',       color:'#795548',icon:'bi-layers'}],
      'w-anem': ()=>[
        {label:'Vitesse',   val:rnd(0,40)+' km/h',color:'#616161',icon:'bi-wind'},
        {label:'Direction', val:['N','NE','E','SE','S','SO','O','NO'][rnd(0,7)],color:'#616161',icon:'bi-compass'},
      ],
      'w-pyrano':()=>[{label:'Rayonnement',val:rnd(100,900)+' W/m²',     color:'#CBCB0B',icon:'bi-sun'}],
      'w-lws':   ()=>[{label:'Humectation', val:rndf(0,12).toFixed(1)+' h/j',color:'#00887E',icon:'bi-droplet'}],
      'w-par':   ()=>[{label:'PPFD',         val:rnd(100,2000)+' µmol/m²/s',color:'#4CBB17',icon:'bi-brightness-high'}],
      'w-capa':  ()=>ms.filter(m=>m.id.startsWith('vwc')).slice(0,3).map(m=>({label:m.name,val:rnd(15,45)+' %vol',color:m.color,icon:'bi-moisture'})),
      'w-tensio':()=>[{label:'Potentiel hydrique',val:rnd(10,150)+' kPa',color:'#A6C157',icon:'bi-graph-down'}],
      'w-ec':    ()=>[{label:'Conductivité',val:rndf(0.1,3).toFixed(2)+' mS/cm',color:'#2BCDDE',icon:'bi-plug'}],
    }
    const rows=(rowsMap[type]||(() => []))()
    const lastTs = new Date(Date.now() - Math.floor(5 + Math.random() * 55) * 60000)
    const pad2 = n => String(n).padStart(2, '0')
    const lastTsLabel = `${pad2(lastTs.getDate())}/${pad2(lastTs.getMonth()+1)}/${lastTs.getFullYear()} à ${pad2(lastTs.getHours())}:${pad2(lastTs.getMinutes())}`
    el.innerHTML=`
      <div class="w-sensor-rows">${rows.map(r=>`
        <div class="w-sensor-row">
          <i class="bi ${r.icon}" style="color:${r.color};flex-shrink:0"></i>
          <span class="w-sensor-val" style="color:${r.color}">${r.val}</span>
          <span class="w-sensor-lbl">${r.label}</span>
        </div>`).join('')}</div>
      <div class="w-sensor-src">${MODEL_NAMES[sensor.model]||sensor.model} · ${sensor.serial}</div>
      <div class="w-sensor-ts">Dernière mesure : ${lastTsLabel}</div>`
    // Update footer link to point to fullscreen chart page
    const ftLink = el.closest('.dash-block')?.querySelector('.dash-block-ft-link')
    if (ftLink) {
      const stepVal = document.getElementById('time-step')?.value || '1h'
      ftLink.href = `capteur-graphique.html?sensorId=${sensor.id}&parcelId=${parcelId}&period=${currentPeriod}&step=${stepVal}`
      ftLink.removeAttribute('data-tab')
    }
  }
}

// Génération déterministe (seedée sur parcelId + date) de la pluie journalière,
// partagée entre l'histogramme J-7→J+7 et le cumul "Pluie" pour qu'ils restent cohérents entre eux.
function rainSeed(off) {
  const raw = (parcelId * 31 + (off + 7) * 17) % 101
  return ((raw + 101) % 101) / 101
}
function dailyRainMm(off) {
  const seed = rainSeed(off)
  return seed > 0.72 ? +(2 + seed * 18).toFixed(1) : (seed > 0.5 ? +(seed * 4).toFixed(1) : 0)
}
function dayOffset(date, today) {
  return Math.round((date.getTime() - today.getTime()) / 86400000)
}
function pluieCumulSince(sinceIso) {
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const start = new Date(sinceIso + 'T00:00:00')
  let total = 0
  for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
    total += dailyRainMm(dayOffset(d, today))
  }
  return +total.toFixed(1)
}

// Histogramme J-7 -> J+7 (historique + prévision) pour la pluie ou l'évapotranspiration
const W_HIST_TODAY_COLOR = '#bf5af2'

function renderWHistBars(kind) {
  return (el) => {
    const cfg = kind === 'pluie'
      ? { color: '#2E75B6', unit: 'mm' }
      : { color: '#7DBDD7', unit: 'mm' }
    const today = new Date(); today.setHours(0, 0, 0, 0)
    const days = []
    for (let off = -7; off <= 7; off++) {
      const d = new Date(today); d.setDate(d.getDate() + off)
      const seed = rainSeed(off)
      const val = kind === 'pluie'
        ? dailyRainMm(off)
        : +(1.2 + seed * 4.2).toFixed(1)
      days.push({ d, off, val, isFc: off > 0 })
    }
    const maxVal = Math.max(1, ...days.map(x => x.val))
    const W = 600, H = 130, PT = 14, PB = 22, PL = 4, PR = 4
    const innerH = H - PT - PB
    const bw = (W - PL - PR) / days.length
    const stripeId = `w-hist-stripe-${kind}`
    const todayIdx = days.findIndex(x => x.off === 0)
    const todayX = PL + todayIdx * bw
    const fcZoneX = todayX + bw
    const bars = days.map((x, idx) => {
      const bx = PL + idx * bw
      const bh = Math.max(0, (x.val / maxVal) * innerH)
      const by = PT + innerH - bh
      const fill = x.off === 0 ? W_HIST_TODAY_COLOR : (x.isFc ? `${cfg.color}66` : cfg.color)
      return `<rect x="${(bx + bw * 0.15).toFixed(1)}" y="${by.toFixed(1)}" width="${(bw * 0.7).toFixed(1)}" height="${bh.toFixed(1)}" rx="2" fill="${fill}"/>`
    }).join('')
    const labels = days.map((x, idx) => {
      if (x.off % 4 !== 0) return ''
      const lx = PL + idx * bw + bw / 2
      const lbl = x.off === 0 ? 'Auj.' : `${x.d.getDate()}/${x.d.getMonth() + 1}`
      return `<text x="${lx.toFixed(1)}" y="${H - 6}" font-size="8" text-anchor="middle" fill="var(--txt3)">${lbl}</text>`
    }).join('')
    const totalHist = days.filter(x => !x.isFc).reduce((s, x) => s + x.val, 0)
    const totalFc   = days.filter(x => x.isFc).reduce((s, x) => s + x.val, 0)
    el.innerHTML = `
      <div class="w-hist-summary">
        <span class="w-hist-summary-item"><span class="w-hist-dot" style="background:${cfg.color}"></span>7j : <strong>${totalHist.toFixed(1)} ${cfg.unit}</strong></span>
        <span class="w-hist-summary-item"><span class="w-hist-dot" style="background:${W_HIST_TODAY_COLOR}"></span>Prévision 7j : <strong>${totalFc.toFixed(1)} ${cfg.unit}</strong></span>
      </div>
      <div class="w-hist-chart-wrap">
        <svg class="w-hist-svg" width="100%" height="100%" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
          <defs><pattern id="${stripeId}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
          </pattern></defs>
          <rect x="${fcZoneX.toFixed(1)}" y="${PT}" width="${(W - PR - fcZoneX).toFixed(1)}" height="${innerH}" fill="url(#${stripeId})"/>
          <line x1="${fcZoneX.toFixed(1)}" y1="${PT}" x2="${fcZoneX.toFixed(1)}" y2="${PT + innerH}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
          ${bars}
          ${labels}
        </svg>
      </div>`
  }
}

function renderWBilan(el) {
  // Soil water balance widget: VWC / tensio state + recommended dose
  const linked = allSensors.filter(s => parcelState.linkedSensorIds.includes(s.id))
  const hasCapa   = linked.some(s => s.model.startsWith('CAPA-'))
  const hasTensio = linked.some(s => TENSIO_MODELS.includes(s.model))
  const rhu = parcelBase.reserveHydrique || 80  // mm — total useful water reserve
  // Simulate current reserve fill percentage (50–90 % range, seeded by parcelId)
  const seed  = (parcelBase.id * 17 + 13) % 41
  const rfuPct = Math.min(95, Math.max(20, 55 + seed))  // % of RFU filled
  const rfuMm  = Math.round(rhu * rfuPct / 100)
  // Estimated ETP next 7 days (3–5 mm/d typical)
  const etpSum = 4 + (seed % 5) - 2  // 2–6 mm/d * 7d → 14–42 mm
  const etpD   = Math.max(2, Math.min(6, etpSum))
  const deficit7d = Math.round(etpD * 7 - rfuMm * 0.3)  // simplified water balance
  const dose7d    = Math.max(0, deficit7d)

  // RFU gauge color
  const gaugeColor = rfuPct > 60 ? '#2d9e5f' : rfuPct > 35 ? '#e07820' : '#e04040'
  const statusLabel = rfuPct > 60 ? 'Réserve suffisante' : rfuPct > 35 ? 'Réserve à surveiller' : 'Réserve critique'
  const statusIcon  = rfuPct > 60 ? 'bi-check-circle-fill' : rfuPct > 35 ? 'bi-exclamation-circle-fill' : 'bi-x-circle-fill'

  if (!hasCapa && !hasTensio) {
    el.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:var(--txt3)">
      <i class="bi bi-droplet" style="font-size:24px"></i>
      <div style="font-size:13px;text-align:center">Ajoutez une sonde capacitive ou un tensiomètre pour suivre l'état hydrique</div>
    </div>`
    return
  }

  // Horizon bars (3 depths for CAPA or 1 depth for tensio)
  const depths = hasCapa ? [
    { label: '10 cm', pct: Math.min(100, rfuPct + (seed % 12) - 5), color: '#f0cc60' },
    { label: '30 cm', pct: Math.min(100, rfuPct + (seed % 8)),       color: '#c89c30' },
    { label: '60 cm', pct: Math.min(100, rfuPct - (seed % 10) + 3),  color: '#a07010' },
  ] : [
    { label: 'Potentiel', pct: rfuPct, color: '#5b8dd9' },
  ]

  el.innerHTML = `
    <div class="w-bilan-layout">
      <div class="w-bilan-status" style="color:${gaugeColor}">
        <i class="bi ${statusIcon}"></i> ${statusLabel}
      </div>
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track">
          <div class="w-bilan-gauge-fill" style="width:${rfuPct}%;background:${gaugeColor}"></div>
        </div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${gaugeColor}">${rfuMm} mm / ${rhu} mm RFU (${rfuPct} %)</span>
          <span>${rhu} mm</span>
        </div>
      </div>
      <div class="w-bilan-horizons">
        ${depths.map(d => `
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${d.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${d.pct}%;background:${d.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${d.color}">${d.pct} %</span>
          </div>`).join('')}
      </div>
      <div class="w-bilan-footer">
        <div class="w-bilan-kpi">
          <div class="w-bilan-kpi-lbl">ETP 7 j</div>
          <div class="w-bilan-kpi-val">${(etpD * 7).toFixed(0)} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-bilan-kpi">
          <div class="w-bilan-kpi-lbl">Dose conseillée</div>
          <div class="w-bilan-kpi-val" style="color:${dose7d > 0 ? '#0172A4' : 'var(--ok)'}">
            ${dose7d > 0 ? `${dose7d} <span class="w-irrig-unit">mm</span>` : '<i class="bi bi-check2" style="font-size:14px"></i>'}
          </div>
        </div>
      </div>
    </div>`
}

function openIrrigWidgetAction(action) {
  const ov = document.createElement('div')
  ov.className = 'journal-form-overlay'
  if (action === 'vol') {
    const cur   = getParcel(parcelId).volumeMaxM3 ?? ''
    const curDb = getParcel(parcelId).debitM3h ?? ''
    ov.innerHTML = `
      <div class="journal-form-modal">
        <div class="journal-form-title">Volume limité de la parcelle</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Volume limité (m³)</label>
          <input id="iwa-vol-inp" class="journal-form-input" type="number" min="0" placeholder="—" value="${cur}" style="width:120px">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Débit (m³/h)</label>
          <input id="iwa-debit-inp" class="journal-form-input" type="number" min="0" step="0.1" placeholder="Ex. 12" value="${curDb}" style="width:120px">
        </div>
        <div style="font-size:11px;color:var(--txt3);margin-top:-4px">Si renseigné, la durée d'irrigation estimée s'affiche au survol des quantités dans le calendrier d'irrigation.</div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`
    document.body.appendChild(ov)
    ov.querySelector('#iwa-cancel').onclick = () => ov.remove()
    ov.querySelector('#iwa-save').onclick = () => {
      const v  = ov.querySelector('#iwa-vol-inp').value
      const db = ov.querySelector('#iwa-debit-inp').value
      patchParcel(parcelId, { volumeMaxM3: v !== '' ? parseInt(v) : null, debitM3h: db !== '' ? parseFloat(db) : null })
      ov.remove()
      document.querySelector('#dblock-irrigations') && renderWIrrigations(document.querySelector('#dblock-irrigations'))
    }
  } else {
    const cur = parcelState.irrigation || ''
    ov.innerHTML = `
      <div class="journal-form-modal">
        <div class="journal-form-title">Type d'irrigation</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="iwa-type-sel" class="journal-form-input">
            ${IRRIG_TYPES.map(t => `<option${t === (cur || 'Non renseigné') ? ' selected' : ''}>${t}</option>`).join('')}
          </select>
        </div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`
    document.body.appendChild(ov)
    ov.querySelector('#iwa-cancel').onclick = () => ov.remove()
    ov.querySelector('#iwa-save').onclick = () => {
      const v = ov.querySelector('#iwa-type-sel').value
      saveState({ irrigation: v })
      ov.remove()
      document.querySelector('#dblock-irrigations') && renderWIrrigations(document.querySelector('#dblock-irrigations'))
    }
  }
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
}

function showIrrigConflictModal(count, onOverwrite) {
  document.querySelector('.irr-edit-overlay')?.remove()
  const ov = document.createElement('div')
  ov.className = 'irr-edit-overlay'
  ov.innerHTML = `
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigations existantes</span>
        <button class="irr-edit-close" id="irr-cf-close">×</button>
      </div>
      <div class="irr-edit-body" style="font-size:13px;color:var(--txt);line-height:1.5">
        <p style="margin:0"><strong>${count} irrigation${count > 1 ? 's' : ''}</strong> déjà enregistrée${count > 1 ? 's' : ''} pour cette parcelle.</p>
        <p style="margin:8px 0 0;color:var(--txt2)">Voulez-vous les écraser avec la nouvelle saisie ?</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-cf-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-cf-overwrite">Écraser</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  const cancel = () => ov.remove()
  ov.addEventListener('click', e => { if (e.target === ov) cancel() })
  ov.querySelector('#irr-cf-close').addEventListener('click', cancel)
  ov.querySelector('#irr-cf-cancel').addEventListener('click', cancel)
  ov.querySelector('#irr-cf-overwrite').addEventListener('click', () => { ov.remove(); onOverwrite() })
}

function showIrrigSaveConfirm(title, lines) {
  document.querySelector('.irr-save-confirm')?.remove()
  const ov = document.createElement('div')
  ov.className = 'irr-save-confirm'
  ov.innerHTML = `
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${title}</div>
      <div class="irr-save-confirm-lines">${lines.map(l => `<div>${l}</div>`).join('')}</div>
      <a href="irrigation.html?plot=${parcelId}" class="irr-save-confirm-link">Gérer les irrigations de toutes mes parcelles &gt;</a>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`
  document.body.appendChild(ov)
  const close = () => ov.remove()
  ov.addEventListener('click', e => { if (e.target === ov) close() })
  ov.querySelector('#irr-confirm-close').addEventListener('click', close)
}

function openIrrigSaisieModal(el) {
  const ov = document.createElement('div')
  ov.className = 'journal-form-overlay'
  ov.innerHTML = `
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Date</label>
        <input type="date" id="irr-m-s-date" class="journal-form-input" value="${TODAY_STR}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Quantité (mm)</label>
        <input type="number" id="irr-m-s-qty" class="journal-form-input" value="10" min="1">
      </div>
      <div class="journal-form-actions">
        <button class="btn-secondary" id="irr-m-s-cancel">Annuler</button>
        <button id="irr-m-s-save">Enregistrer</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#irr-m-s-cancel').onclick = () => ov.remove()
  ov.querySelector('#irr-m-s-save').onclick = () => {
    const dateVal = ov.querySelector('#irr-m-s-date').value
    const qtyVal  = parseInt(ov.querySelector('#irr-m-s-qty').value) || 0
    if (!dateVal || !qtyVal) return
    const isFut = dateVal > TODAY_STR
    const doSaisie = () => {
      IRRIG_SEASON.push({ iso: dateVal, mm: qtyVal, real: !isFut, plotId: parcelBase.id, fromStrategy: false })
      saveIrrig()
      ov.remove()
      renderWIrrigations(el)
      showIrrigSaveConfirm('Irrigation enregistrée', [
        `Date : ${fmtDateFullStr(dateVal)}`,
        `Quantité : ${qtyVal} mm`,
      ])
    }
    const conflicts = IRRIG_SEASON.filter(i => i.plotId === parcelBase.id && i.iso === dateVal)
    if (conflicts.length) {
      showIrrigConflictModal(conflicts.length, () => {
        IRRIG_SEASON.splice(0, IRRIG_SEASON.length,
          ...IRRIG_SEASON.filter(i => !(i.plotId === parcelBase.id && i.iso === dateVal)))
        doSaisie()
      })
      return
    }
    doSaisie()
  }
}

function openIrrigSaisonModal(el) {
  const ov = document.createElement('div')
  ov.className = 'journal-form-overlay'
  ov.innerHTML = `
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une saison d'irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Début</label>
        <input type="date" id="irr-m-sa-debut" class="journal-form-input" value="${TODAY_STR}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Fin</label>
        <input type="date" id="irr-m-sa-fin" class="journal-form-input" value="${addDaysStr(TODAY_STR, 120)}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Quantité (mm)</label>
        <input type="number" id="irr-m-sa-qty" class="journal-form-input" value="10" min="1">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Fréquence (jours)</label>
        <input type="number" id="irr-m-sa-freq" class="journal-form-input" value="7" min="1" max="30">
      </div>
      <div class="irr-lc-preview" id="irr-m-sa-preview">—</div>
      <div class="journal-form-actions">
        <button class="btn-secondary" id="irr-m-sa-cancel">Annuler</button>
        <button id="irr-m-sa-save">Enregistrer</button>
      </div>
    </div>`
  document.body.appendChild(ov)

  const updatePreview = () => {
    const debut = ov.querySelector('#irr-m-sa-debut').value
    const fin   = ov.querySelector('#irr-m-sa-fin').value
    const qty   = parseInt(ov.querySelector('#irr-m-sa-qty').value) || 0
    const freq  = parseInt(ov.querySelector('#irr-m-sa-freq').value) || 0
    const prev  = ov.querySelector('#irr-m-sa-preview')
    if (!debut || !fin || freq <= 0) { prev.textContent = '—'; return }
    let n = 0, cur = new Date(debut), end = new Date(fin)
    while (cur <= end && n < 200) { n++; cur.setDate(cur.getDate() + freq) }
    if (n > 0) {
      const m3 = parcelBase.area > 0 ? Math.round(n * qty * parcelBase.area * 10) : 0
      const m3Str = m3 > 0 ? ` · ${m3.toLocaleString('fr-FR')} m³` : ''
      prev.innerHTML = `<span style="color:var(--pri);font-weight:600">↗ ${n} irrigations · ${n * qty} mm${m3Str}</span>`
    } else {
      prev.innerHTML = `<span style="color:var(--txt3)">Ajustez les paramètres</span>`
    }
  }
  updatePreview()
  ov.querySelector('#irr-m-sa-debut').addEventListener('change', updatePreview)
  ov.querySelector('#irr-m-sa-fin').addEventListener('change', updatePreview)
  ov.querySelector('#irr-m-sa-qty').addEventListener('input', updatePreview)
  ov.querySelector('#irr-m-sa-freq').addEventListener('input', updatePreview)

  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#irr-m-sa-cancel').onclick = () => ov.remove()
  ov.querySelector('#irr-m-sa-save').onclick = () => {
    const debut = ov.querySelector('#irr-m-sa-debut').value
    const fin   = ov.querySelector('#irr-m-sa-fin').value
    const qty   = parseInt(ov.querySelector('#irr-m-sa-qty').value) || 10
    const freq  = parseInt(ov.querySelector('#irr-m-sa-freq').value) || 7
    if (!debut || !fin) return
    const occs = []
    let cur = new Date(debut), end = new Date(fin)
    while (cur <= end && occs.length < 200) { occs.push(new Date(cur)); cur.setDate(cur.getDate() + freq) }
    const seasonId = generateSeasonId()
    const doSaison = () => {
      occs.forEach(d => {
        const iso = d.toISOString().slice(0, 10)
        IRRIG_SEASON.push({ iso, mm: qty, real: iso <= TODAY_STR, plotId: parcelBase.id, fromStrategy: true, seasonId })
      })
      saveIrrig()
      ov.remove()
      renderWIrrigations(el)
      showIrrigSaveConfirm('Saison enregistrée', [
        `Début : ${fmtDateFullStr(debut)} · Fin : ${fmtDateFullStr(fin)}`,
        `${occs.length} irrigations · ${qty} mm · tous les ${freq} j`,
      ])
    }
    const conflicts = IRRIG_SEASON.filter(i => i.plotId === parcelBase.id && i.iso >= debut && i.iso <= fin)
    if (conflicts.length) {
      showIrrigConflictModal(conflicts.length, () => {
        IRRIG_SEASON.splice(0, IRRIG_SEASON.length,
          ...IRRIG_SEASON.filter(i => !(i.plotId === parcelBase.id && i.iso >= debut && i.iso <= fin)))
        doSaison()
      })
      return
    }
    doSaison()
  }
}

function renderWIrrigations(el) {
  const irrigs   = IRRIG_SEASON.filter(i => i.plotId === parcelBase.id)
  const real     = irrigs.filter(i => i.real)
  const plan     = irrigs.filter(i => !i.real)
  const tReal    = real.reduce((s, i) => s + i.mm, 0)
  const tPlan    = plan.reduce((s, i) => s + i.mm, 0)
  const tTotal   = tReal + tPlan
  const irrType  = parcelState.irrigation || parcelBase.irrigation

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

  const actionsHtml = `
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-act-saisie">+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" type="button" id="w-irrig-act-saison">↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`

  const NO_IRRIG_TYPES = new Set(['Non irrigué', 'Non renseigné', ''])
  const hasIrrigType = irrType && !NO_IRRIG_TYPES.has(irrType)

  const updateFooterLabel = () => {
    const ft = el.closest('.dash-block')?.querySelector('.dash-block-ft-link')
    if (ft) ft.textContent = 'Voir détails →'
  }

  if (!hasIrrigType) {
    el.innerHTML = `
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez renseigner un type d'irrigation sur cette parcelle.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-set-type" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`
    el.querySelector('#w-irrig-set-type')?.addEventListener('click', () => openIrrigWidgetAction('type'))
    updateFooterLabel()
    return
  }

  if (!irrigs.length) {
    el.innerHTML = `
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3)">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${actionsHtml}
      </div>`
    el.querySelector('#w-irrig-act-saisie')?.addEventListener('click', () => openIrrigSaisieModal(el))
    el.querySelector('#w-irrig-act-saison')?.addEventListener('click', () => openIrrigSaisonModal(el))
    updateFooterLabel()
    return
  }

  el.innerHTML = `
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
          <div class="w-irrig-kpi-val" style="color:var(--txt3)">${tTotal} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${seasonParamsHtml}
      ${actionsHtml}
    </div>`
  el.querySelector('#w-irrig-act-saisie')?.addEventListener('click', () => openIrrigSaisieModal(el))
  el.querySelector('#w-irrig-act-saison')?.addEventListener('click', () => openIrrigSaisonModal(el))
  updateFooterLabel()
}

// unused — kept as empty stub so any lingering references don't break
function populateDashBlocks() {}

function attachDashDragHandlers(grid) {
  let dragSrc = null

  grid.querySelectorAll('.dash-block').forEach(block => {
    block.addEventListener('dragstart', e => {
      dragSrc = block
      e.dataTransfer.effectAllowed = 'move'
      setTimeout(() => block.classList.add('dash-drag-ghost'), 0)
    })
    block.addEventListener('dragend', () => {
      block.classList.remove('dash-drag-ghost')
      grid.querySelectorAll('.dash-block').forEach(b => b.classList.remove('dash-drag-over'))
      dragSrc = null
      saveWidgetIds([...grid.querySelectorAll('.dash-block')].map(b => b.dataset.id))
    })
    block.addEventListener('dragover', e => {
      e.preventDefault()
      if (!dragSrc || block === dragSrc) return
      e.dataTransfer.dropEffect = 'move'
      grid.querySelectorAll('.dash-block').forEach(b => b.classList.remove('dash-drag-over'))
      block.classList.add('dash-drag-over')
    })
    block.addEventListener('dragleave', () => {
      block.classList.remove('dash-drag-over')
    })
    block.addEventListener('drop', e => {
      e.preventDefault()
      if (!dragSrc || block === dragSrc) return
      block.classList.remove('dash-drag-over')
      const allBlocks = [...grid.querySelectorAll('.dash-block')]
      const srcIdx = allBlocks.indexOf(dragSrc)
      const tgtIdx = allBlocks.indexOf(block)
      if (srcIdx < tgtIdx) block.after(dragSrc)
      else block.before(dragSrc)
    })
  })
}
