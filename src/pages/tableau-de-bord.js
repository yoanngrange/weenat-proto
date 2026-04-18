import { updateBreadcrumb } from '../js/breadcrumb.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'

const ADHERENT_ORG_ID = 1

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  const role = localStorage.getItem('menuRole') || 'admin-reseau'
  const isAdherent = role === 'adherent-reseau'
  renderParcelTable(isAdherent)
  renderTreatmentTable()
  renderPhenologyTable()
  renderSensorEvents()
})

function plotAgroData(plot) {
  const s = plot.id
  const pluie7j    = +((s * 2.3 + 7) % 32).toFixed(1)
  const etp7j      = +((s * 1.1 + 14) % 14 + 10).toFixed(1)
  const teneurEau  = Math.round(plot.reserveHydrique * ((s % 5 + 1) / 10))
  const drainage7j = +((s * 0.6 + 1) % 6).toFixed(1)
  const balance    = +(teneurEau + pluie7j - etp7j - drainage7j).toFixed(1)
  const teneurEauJ7 = balance
  return { pluie7j, etp7j, teneurEau, drainage7j, balance, teneurEauJ7 }
}

function renderParcelTable(isAdherent) {
  const container = document.getElementById('tdb-parcels')
  if (!container) return

  const myPlots = plots.filter(p => p.orgId === ADHERENT_ORG_ID)

  const rows = myPlots.map(p => {
    const d = plotAgroData(p)
    return `<tr>
      <td><a href="parcelle-detail.html?id=${p.id}" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop}</td>
      <td>${p.texture}</td>
      <td class="tdb-num">${d.teneurEau} mm</td>
      <td class="tdb-num">${d.pluie7j} mm</td>
      <td class="tdb-num">${d.etp7j} mm</td>
      <td class="tdb-num">${d.drainage7j} mm</td>
      <td class="tdb-num ${d.teneurEauJ7 < 0 ? 'tdb-irrig-needed' : ''}">${d.teneurEauJ7} mm</td>
      <td class="tdb-num ${d.balance >= 0 ? 'tdb-irrig-ok' : 'tdb-irrig-needed'}">${d.balance >= 0 ? '0 mm' : '<i class="bi bi-droplet-fill"></i> +' + Math.abs(d.balance) + ' mm'}</td>
    </tr>`
  }).join('')

  container.innerHTML = `<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Texture de sol</th>
        <th class="tdb-num">Teneur eau J0</th>
        <th class="tdb-num">+ Pluie J+7</th>
        <th class="tdb-num">− ETP J+7</th>
        <th class="tdb-num">− Drainage J+7</th>
        <th class="tdb-num">Teneur eau J+7</th>
        <th class="tdb-num">= Irrigations J+7</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
  <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETP − drainage</div>`
}

// ─── Treatment table ──────────────────────────────────────────────────────────

const CROP_PRODUCTS = {
  'Blé tendre':        ['Prosaro', 'Aviator Xpro', 'Input Xpro'],
  'Maïs':              ['Mercantor Gold', 'Callisto', 'Milagro'],
  'Orge':              ['Comet Pro', 'Siltra Xpro', 'Variano Xpro'],
  'Colza':             ['Karate Zeon', 'Plenum', 'Caryx'],
  'Prairie permanente':['Duplosan KV', 'Starane Premium', '—'],
  'Tournesol':         ['Adengo', 'Merlin Flexx', 'Pulsar Plus'],
  'Betterave':         ['Betanal Expert', 'Debut', 'Safari'],
}

function plotTreatmentData(plot) {
  const s = plot.id
  const now = new Date()
  const products = CROP_PRODUCTS[plot.crop] || ['—']
  const product = products[s % products.length]

  const daysAgo = (s * 3 + 3) % 23 + 3
  const pluie7past = +((s * 1.9 + 5) % 28).toFixed(1)

  // Plots 3, 8, 13 (id % 5 === 3) get a window today within 10h
  let daysAhead, winHour
  if (s % 5 === 3) {
    daysAhead = 0
    winHour = (now.getHours() + 2 + (s % 3) * 3) % 24
  } else {
    daysAhead = (s * 2 + 1) % 6 + 1
    winHour = 6 + (s % 5) * 2
  }
  const winDur = 2 + (s % 3)

  const winDate = new Date(now)
  winDate.setDate(winDate.getDate() + daysAhead)
  const winDateStr = daysAhead === 0
    ? "Aujourd'hui"
    : winDate.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })

  const minutesFromNow = daysAhead * 1440 + winHour * 60 - (now.getHours() * 60 + now.getMinutes())
  const isUrgent = minutesFromNow >= 0 && minutesFromNow <= 600

  return { pluie7past, daysAgo, product, winDateStr, winHour, winDur, isUrgent }
}

function renderTreatmentTable() {
  const container = document.getElementById('tdb-treatments')
  if (!container) return

  const myPlots = plots.filter(p => p.orgId === ADHERENT_ORG_ID)

  const rows = myPlots.map(p => {
    const d = plotTreatmentData(p)
    return `<tr>
      <td><a href="parcelle-detail.html?id=${p.id}" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop}</td>
      <td class="tdb-num">${d.pluie7past} mm</td>
      <td>il y a ${d.daysAgo} jr</td>
      <td>${d.product}</td>
      <td class="${d.isUrgent ? 'tdb-win-urgent' : ''}">${d.isUrgent ? '<i class="bi bi-alarm-fill"></i> ' : ''}${d.winDateStr} — ${d.winHour}:00 — ${d.winDur}h</td>
    </tr>`
  }).join('')

  container.innerHTML = `<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th class="tdb-num">Pluie 7 derniers jours</th>
        <th>Dernier traitement</th>
        <th>Dernier produit</th>
        <th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`
}

// ─── Phenology table ──────────────────────────────────────────────────────────

const PHENOLOGY = {
  'Blé tendre': {
    varieties: ['Bermude', 'Chevignon', 'Oregrain'],
    stages: ['Tallage (BBCH 25)', 'Épi 1 cm (BBCH 30)', 'Montaison (BBCH 32)', 'Gonflement (BBCH 45)'],
    nextStages: ['Épi 1 cm', 'Montaison', 'Gonflement', 'Épiaison'],
    kc: [0.4, 0.5, 0.7, 0.85],
    roots: [40, 60, 80, 90],
  },
  'Maïs': {
    varieties: ['DKC4795', 'Farrandole', 'Ambition'],
    stages: ['Semis (BBCH 00)', 'Levée (BBCH 09)', '2 feuilles (BBCH 12)', '4 feuilles (BBCH 14)'],
    nextStages: ['Levée', '2 feuilles', '4 feuilles', '6 feuilles'],
    kc: [0.3, 0.35, 0.4, 0.5],
    roots: [10, 20, 30, 40],
  },
  'Orge': {
    varieties: ['Irina', 'KWS Cassia', 'Etincel'],
    stages: ['Tallage (BBCH 25)', 'Épi 1 cm (BBCH 30)', 'Montaison (BBCH 33)', 'Gonflement (BBCH 45)'],
    nextStages: ['Épi 1 cm', 'Montaison', 'Gonflement', 'Épiaison'],
    kc: [0.4, 0.55, 0.7, 0.85],
    roots: [40, 60, 75, 85],
  },
  'Colza': {
    varieties: ['Avatar', 'DK Expower', 'Atlavista'],
    stages: ['Boutons floraux (BBCH 51)', 'Début floraison (BBCH 60)', 'Pleine floraison (BBCH 65)', 'Chute pétales (BBCH 67)'],
    nextStages: ['Début floraison', 'Pleine floraison', 'Chute pétales', 'Siliques vertes'],
    kc: [0.8, 1.0, 1.1, 1.05],
    roots: [80, 100, 110, 120],
  },
  'Prairie permanente': {
    varieties: ['Ray-grass anglais', 'Fétuque élevée', 'Dactyle'],
    stages: ['Repousse (< 5 cm)', 'Tallage actif', 'Montaison', 'Épiaison'],
    nextStages: ['Tallage actif', 'Montaison', 'Épiaison', '1re coupe'],
    kc: [0.7, 0.85, 1.0, 1.05],
    roots: [20, 30, 35, 40],
  },
}

const PHENOLOGY_DEFAULT = {
  varieties: ['—'],
  stages: ['Végétation active'],
  nextStages: ['Prochain stade'],
  kc: [0.7],
  roots: [40],
}

function plotPhenologyData(plot) {
  const s = plot.id
  const ph = PHENOLOGY[plot.crop] || PHENOLOGY_DEFAULT
  const stageIdx = s % ph.stages.length
  const variety = ph.varieties[s % ph.varieties.length]
  const stage = ph.stages[stageIdx]
  const nextStage = ph.nextStages[stageIdx]
  const kc = ph.kc[stageIdx]
  const rootDepth = ph.roots[stageIdx]

  const daysToNext = (s * 2 + 5) % 18 + 4
  const nextDate = new Date('2026-04-18')
  nextDate.setDate(nextDate.getDate() + daysToNext)
  const nextDateStr = nextDate.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })

  return { variety, stage, nextStage, kc, rootDepth, nextDateStr }
}

function renderPhenologyTable() {
  const container = document.getElementById('tdb-phenology')
  if (!container) return

  const myPlots = plots.filter(p => p.orgId === ADHERENT_ORG_ID)

  const rows = myPlots.map(p => {
    const d = plotPhenologyData(p)
    return `<tr>
      <td><a href="parcelle-detail.html?id=${p.id}" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop}</td>
      <td>${d.variety}</td>
      <td>${d.stage}</td>
      <td class="tdb-num">${d.kc.toFixed(2)}</td>
      <td class="tdb-num">${d.rootDepth} cm</td>
      <td>${d.nextDateStr} — ${d.nextStage}</td>
    </tr>`
  }).join('')

  container.innerHTML = `<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Variété</th>
        <th>Stade phénologique</th>
        <th class="tdb-num">Kc</th>
        <th class="tdb-num">Profondeur racinaire</th>
        <th>Prochain stade prévu</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`
}

function renderSensorEvents() {
  const container = document.getElementById('tdb-sensor-events')
  if (!container) return

  const mySensors = sensors.filter(s => s.orgId === ADHERENT_ORG_ID && s.event)

  if (!mySensors.length) {
    container.closest('.tdb-section').hidden = true
    return
  }

  const rows = mySensors.map(s => {
    const parcel = plots.find(p => p.id === s.parcelId)
    return `<tr>
      <td><a href="capteur-detail.html?id=${s.id}" class="tdb-plot-link">${s.serial}</a></td>
      <td>${s.model}</td>
      <td>${parcel ? parcel.name : '—'}</td>
      <td class="tdb-irrig-needed">${s.event}</td>
    </tr>`
  }).join('')

  container.innerHTML = `<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Numéro de série</th>
        <th>Modèle</th>
        <th>Parcelle</th>
        <th>Événement</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`
}
