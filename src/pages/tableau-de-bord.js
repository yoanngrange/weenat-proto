import { updateBreadcrumb } from '../js/breadcrumb.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { IRRIG_SEASON, buildGroups } from '../data/irrigations.js'

const ADHERENT_ORG_ID = 1

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  const role = localStorage.getItem('menuRole') || 'admin-reseau'
  const isAdherent = role === 'adherent-reseau'
  renderForecastTable()
  renderParcelTable(isAdherent)
  renderPhenologyTable()
  renderTreatmentTable()
  renderSensorEvents()
  setupCollapsible()
  setupWidgetMenus()
  setupIrrigButtons()
  window.addEventListener('irrig-updated', () => renderParcelTable(isAdherent))
})

function setupIrrigButtons() {
  document.getElementById('tdb-strategy-btn')?.addEventListener('click', e => {
    e.stopPropagation()
    window.WebIrrig?.openSaison()
  })
  document.getElementById('tdb-parcels')?.addEventListener('click', e => {
    const btn = e.target.closest('.tdb-saisir-btn[data-plot-id]')
    if (!btn) return
    const p = plots.find(p => p.id === +btn.dataset.plotId)
    if (p) window.WebIrrig?.openSaisie({ ids: [p.id], label: p.name })
  })
}

function setupCollapsible() {
  document.querySelectorAll('.tdb-section-hd[data-toggle]').forEach(hd => {
    hd.style.cursor = 'pointer'
    hd.addEventListener('click', e => {
      if (e.target.closest('a') || e.target.closest('.tdb-widget-menu-btn') || e.target.closest('.tdb-widget-menu-popup')) return
      const body = hd.nextElementSibling
      const collapsed = body.classList.toggle('tdb-collapsed')
      hd.querySelector('.tdb-chevron').classList.toggle('tdb-chevron-down', collapsed)
    })
  })
}

function setupWidgetMenus() {
  document.querySelectorAll('.tdb-widget-menu-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      document.querySelectorAll('.tdb-widget-menu-popup').forEach(p => p.remove())
      const menu = document.createElement('div')
      menu.className = 'tdb-widget-menu-popup'
      menu.innerHTML = `
        <button class="tdb-widget-menu-item"><i class="bi bi-x-lg"></i> Retirer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-arrows-move"></i> Déplacer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-gear"></i> Configurer le widget</button>`
      btn.parentElement.appendChild(menu)
      menu.querySelectorAll('.tdb-widget-menu-item').forEach(item => {
        item.addEventListener('click', () => { menu.remove(); alert('Fonctionnalité à venir') })
      })
      const close = () => menu.remove()
      setTimeout(() => document.addEventListener('click', close, { once: true }), 0)
    })
  })
}

const FC_MONTHS_LONG = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']

function plotForecastDay(plot, dayIdx) {
  const s = plot.id * 7 + dayIdx * 31
  const r = v => (Math.sin(s * v) + 1) / 2
  const rainy = r(0.7) > 0.65
  return {
    pluie:   rainy ? +((r(1.3) * 12)).toFixed(1) : 0,
    tMin:    Math.round(8  + r(2.1) * 8),
    tMax:    Math.round(16 + r(3.7) * 14),
    hum:     Math.round(45 + r(4.3) * 45),
    vent:    Math.round(8  + r(5.1) * 30),
    etr:     +(0.5 + r(6.7) * 5).toFixed(1),
  }
}

function renderForecastTable() {
  const container = document.getElementById('tdb-forecast')
  if (!container) return

  const myPlots = plots.filter(p => p.orgId === ADHERENT_ORG_ID)
  const now = new Date()

  const dayHeaders = [0, 1, 2].map(i => {
    const d = new Date(now); d.setDate(d.getDate() + i)
    const label = i === 0 ? `Aujourd'hui ${d.getDate()} ${FC_MONTHS_LONG[d.getMonth()]}`
                : i === 1 ? `Demain ${d.getDate()} ${FC_MONTHS_LONG[d.getMonth()]}`
                : `${d.getDate()} ${FC_MONTHS_LONG[d.getMonth()]}`
    return `<th colspan="4" class="tdb-fc-day-hd">${label}</th>`
  }).join('')

  const subHeaders = [0, 1, 2].map(() =>
    `<th class="tdb-num tdb-fc-sub">Pluie</th>
     <th class="tdb-num tdb-fc-sub">T° min/max</th>
     <th class="tdb-num tdb-fc-sub">Vent</th>
     <th class="tdb-num tdb-fc-sub">ETR</th>`
  ).join('')

  const rows = myPlots.map(p => {
    const dayCells = [0, 1, 2].map(i => {
      const f = plotForecastDay(p, i)
      const pluieCell = f.pluie > 0 ? `<span class="tdb-fc-rain">${f.pluie} mm</span>` : '<span class="tdb-fc-dry">—</span>'
      return `<td class="tdb-num tdb-fc-cell">${pluieCell}</td>
        <td class="tdb-num tdb-fc-cell">${f.tMin}°C / ${f.tMax}°C</td>
        <td class="tdb-num tdb-fc-cell">${f.vent} km/h</td>
        <td class="tdb-num tdb-fc-cell">${f.etr} mm</td>`
    }).join('')
    return `<tr>
      <td><a href="parcelle-detail.html?id=${p.id}" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop || '—'}</td>
      ${dayCells}
    </tr>`
  }).join('')

  container.innerHTML = `<table class="tdb-parcels-table tdb-fc-table">
    <thead>
      <tr>
        <th rowspan="2">Parcelle</th>
        <th rowspan="2">Culture</th>
        ${dayHeaders}
      </tr>
      <tr class="tdb-fc-sub-row">${subHeaders}</tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`
}

function plotIrrigationData(plot) {
  const today  = new Date().toISOString().split('T')[0]
  const groups = buildGroups(plots.filter(p => p.orgId === ADHERENT_ORG_ID))
  const labels = new Set([plot.name])
  for (const g of groups) { if (g.ids.includes(plot.id)) labels.add(g.label) }
  const upcoming = IRRIG_SEASON
    .filter(i => !i.real && labels.has(i.label) && i.iso >= today)
    .sort((a, b) => a.iso < b.iso ? -1 : 1)
  if (!upcoming.length) return { planned: false }
  const daysAhead = Math.round((new Date(upcoming[0].iso) - new Date(today)) / 86400000)
  return { planned: true, mm: upcoming[0].mm, daysAhead }
}

function thInfo(tooltip) {
  return `<span class="tdb-th-info" data-tooltip="${tooltip}">i</span>`
}

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
    const irrig = plotIrrigationData(p)
    const irrigCell = irrig.planned
      ? `<td class="tdb-num">${irrig.mm} mm <span class="tdb-irrig-days">J+${irrig.daysAhead}</span></td>`
      : `<td class="tdb-num"><button class="tdb-saisir-btn" data-plot-id="${p.id}">Saisir</button></td>`
    return `<tr>
      <td><a href="parcelle-detail.html?id=${p.id}" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop || '<span class="tdb-missing">—</span>'}</td>
      <td>${p.texture || '<span class="tdb-missing">—</span>'}</td>
      <td class="tdb-num">${d.teneurEau} mm</td>
      <td class="tdb-num">${d.pluie7j} mm</td>
      <td class="tdb-num">${d.etp7j} mm</td>
      <td class="tdb-num ${d.teneurEauJ7 < 0 ? 'tdb-irrig-needed' : ''}">${d.teneurEauJ7} mm</td>
      <td class="tdb-num ${d.balance >= 0 ? 'tdb-irrig-ok' : 'tdb-irrig-needed'}">${d.balance >= 0 ? '0 mm' : '<i class="bi bi-droplet-fill"></i> +' + Math.abs(d.balance) + ' mm'}</td>
      ${irrigCell}
    </tr>`
  }).join('')

  const headers = [
    { label: 'Parcelle',         tip: 'Nom de la parcelle' },
    { label: 'Culture',          tip: 'Culture actuellement en place sur la parcelle' },
    { label: 'Texture de sol',   tip: 'Texture du sol renseignée pour la parcelle' },
    { label: 'Rés. J0',         tip: "Niveau estimé du réservoir hydrique aujourd'hui (mm)", num: true },
    { label: '+ Pluie J+7',     tip: 'Cumul de pluie prévu sur les 7 prochains jours (mm)', num: true },
    { label: '− ETR J+7',       tip: 'Évapotranspiration réelle prévue sur 7 jours (mm)', num: true },
    { label: 'Rés. J+7',        tip: 'Niveau estimé du réservoir hydrique dans 7 jours (mm)', num: true },
    { label: '= Irr. J+7',      tip: 'Volume d\'irrigation nécessaire sur les 7 prochains jours', num: true },
    { label: 'Irr. planifiées',  tip: 'Irrigations planifiées sur les 7 prochains jours', num: true },
  ]
  const headerRow = headers.map(h =>
    `<th${h.num ? ' class="tdb-num"' : ''}>${h.label}${thInfo(h.tip)}</th>`
  ).join('')

  container.innerHTML = `
    <table class="tdb-parcels-table">
      <thead><tr>${headerRow}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETR − drainage</div>`
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
    const risk = d.daysAgo > 21 ? { cls: 'risk-red', label: 'Élevé' }
               : d.daysAgo > 16 ? { cls: 'risk-orange', label: 'Modéré' }
               : { cls: 'risk-green', label: 'Faible' }
    return `<tr>
      <td><a href="parcelle-detail.html?id=${p.id}" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop || '—'}</td>
      <td class="${d.isUrgent ? 'tdb-win-urgent' : ''}">${d.isUrgent ? '<i class="bi bi-alarm-fill"></i> ' : ''}${d.winDateStr} — ${d.winHour}:00 → ${(d.winHour + d.winDur) % 24}:00</td>
    </tr>`
  }).join('')

  container.innerHTML = `<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`
}

// ─── Phenology table ──────────────────────────────────────────────────────────

const KEY_STAGE_KEYWORDS = ['floraison', 'nouaison', 'slag', '10 feuilles']

function isKeyStage(stage) {
  const s = stage.toLowerCase()
  return KEY_STAGE_KEYWORDS.some(k => s.includes(k))
}

const PHENOLOGY = {
  'Blé tendre': {
    varieties: ['Bermude', 'Chevignon', 'Oregrain'],
    stages: ['Tallage (BBCH 25)', 'SLAG (BBCH 29-30)', 'Montaison (BBCH 32)', 'Gonflement (BBCH 45)'],
    nextStages: ['SLAG', 'Montaison', 'Gonflement', 'Épiaison'],
    kc: [0.4, 0.5, 0.7, 0.85],
    roots: [40, 60, 80, 90],
  },
  'Maïs': {
    varieties: ['DKC4795', 'Farrandole', 'Ambition'],
    stages: ['Levée (BBCH 09)', '6 feuilles (BBCH 16)', '10 feuilles (BBCH 18)', 'Floraison mâle (BBCH 65)'],
    nextStages: ['6 feuilles', '10 feuilles', 'Floraison mâle', 'Nouaison'],
    kc: [0.35, 0.5, 0.8, 1.2],
    roots: [20, 40, 60, 80],
  },
  'Orge': {
    varieties: ['Irina', 'KWS Cassia', 'Etincel'],
    stages: ['Tallage (BBCH 25)', 'SLAG (BBCH 29-30)', 'Montaison (BBCH 33)', 'Gonflement (BBCH 45)'],
    nextStages: ['SLAG', 'Montaison', 'Gonflement', 'Épiaison'],
    kc: [0.4, 0.55, 0.7, 0.85],
    roots: [40, 60, 75, 85],
  },
  'Colza': {
    varieties: ['Avatar', 'DK Expower', 'Atlavista'],
    stages: ['Boutons floraux (BBCH 51)', 'Début floraison (BBCH 60)', 'Pleine floraison (BBCH 65)', 'Nouaison (BBCH 70)'],
    nextStages: ['Début floraison', 'Pleine floraison', 'Nouaison', 'Siliques vertes'],
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
  const nextDateStr = nextDate.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })
    .replace(/^(\w)/, c => c.toUpperCase())
    .replace(/\.?\s(\w)/, (_, c) => `. ${c.toUpperCase()}`)

  return { variety, stage, nextStage, kc, rootDepth, nextDateStr, daysToNext }
}

const NEXT_STAGE_CROPS = new Set([
  'Blé tendre', 'Blé dur', 'Maïs', 'Maïs ensilage',
  'Pomme de terre', 'Carotte', 'Tournesol', 'Pommier',
])

function renderPhenologyTable() {
  const container = document.getElementById('tdb-phenology')
  if (!container) return

  const myPlots = plots.filter(p => p.orgId === ADHERENT_ORG_ID)

  const rows = myPlots.map(p => {
    const d = plotPhenologyData(p)
    const ph = PHENOLOGY[p.crop] || PHENOLOGY_DEFAULT
    const stageOpts = ph.stages.map(s =>
      `<option${s === d.stage ? ' selected' : ''}>${s}</option>`
    ).join('')
    const showNext = p.crop && NEXT_STAGE_CROPS.has(p.crop)
    const nextCell = showNext
      ? `${d.nextDateStr} <span class="tdb-next-stage-delta">(dans ${d.daysToNext} j)</span> — <span class="tdb-next-stage-name">${d.nextStage}</span>`
      : '—'
    return `<tr>
      <td><a href="parcelle-detail.html?id=${p.id}" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop || '—'}</td>
      <td>${d.variety}</td>
      <td><select class="tdb-stage-sel ${isKeyStage(d.stage) ? 'tdb-stage-key' : ''}">${stageOpts}</select></td>
      <td class="tdb-num">${d.kc.toFixed(2)}</td>
      <td class="tdb-num">${d.rootDepth} cm</td>
      <td>${nextCell}</td>
    </tr>`
  }).join('')

  container.innerHTML = `<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Variété</th>
        <th>Stade actuel</th>
        <th class="tdb-num">Kc</th>
        <th class="tdb-num">Racines</th>
        <th>Prochain stade prévu</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`
}

const SENSOR_EVENT_ICONS = {
  'capteur couché':          { icon: 'bi-arrow-down-circle-fill', cls: 'tdb-ev-warn' },
  'émissions interrompues':  { icon: 'bi-wifi-off',               cls: 'tdb-ev-danger' },
  'capteur déplacé':         { icon: 'bi-geo-alt-fill',            cls: 'tdb-ev-warn' },
  'cuillère bloquée':        { icon: 'bi-x-octagon-fill',          cls: 'tdb-ev-danger' },
}

function renderSensorEvents() {
  const container = document.getElementById('tdb-sensor-events')
  if (!container) return

  const mySensors = sensors.filter(s => {
    const ev = s.event
    return ev && (Array.isArray(ev) ? ev.length > 0 : true)
  }).filter(s => s.orgId === ADHERENT_ORG_ID)

  if (!mySensors.length) {
    container.closest('.tdb-section').hidden = true
    return
  }

  const rows = mySensors.map(s => {
    const parcel = plots.find(p => p.id === s.parcelId)
    const evList = Array.isArray(s.event) ? s.event : [s.event]
    const evBadges = `<div class="tdb-ev-stack">${evList.map(ev => {
      const cfg = SENSOR_EVENT_ICONS[ev] || { icon: 'bi-exclamation-circle-fill', cls: 'tdb-ev-warn' }
      return `<span class="tdb-ev-badge ${cfg.cls}"><i class="bi ${cfg.icon}"></i> ${ev}</span>`
    }).join('')}</div>`
    return `<tr>
      <td>${s.model}</td>
      <td><a href="capteur-detail.html?id=${s.id}" class="tdb-plot-link">${s.serial}</a></td>
      <td>${parcel ? (parcel.ville || parcel.name) : '—'}</td>
      <td class="tdb-ev-cell">${evBadges}</td>
    </tr>`
  }).join('')

  container.innerHTML = `<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Modèle</th>
        <th>Numéro de série</th>
        <th>Ville</th>
        <th>Événements</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`
}
