import { updateBreadcrumb } from '../js/breadcrumb.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { IRRIG_SEASON } from '../data/irrigations.js'
import { applyStoredPlotPatches } from '../data/store.js'
import { orgs } from '../data/orgs.js'
applyStoredPlotPatches(plots)

const _iconBase = import.meta.env.BASE_URL + 'icons/'
function envIcon(env) {
  if (env === 'serre')       return `<img src="${_iconBase}greenhouse.png" width="16" height="16" title="Serre" style="vertical-align:middle;opacity:.75">`
  if (env === 'plein champ') return `<img src="${_iconBase}fields.png"     width="16" height="16" title="Plein champ" style="vertical-align:middle;opacity:.75">`
  return ''
}
function textureDisplay(parcel) {
  if (parcel.substrate) return 'Substrat : ' + parcel.substrate
  return parcel.texture || '—'
}

const ADHERENT_ORG_ID = 1

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  const role = localStorage.getItem('menuRole') || 'admin-reseau'
  const isAdherent = role === 'adherent-reseau'
  renderForecastWidget()
  renderIrrigWidget(isAdherent)
  renderPhenologyWidget()
  renderTreatmentWidget()
  renderSensorWidget()
  setupCollapsible()
  setupWidgetMenus()
  setupIrrigButtons()
  window.addEventListener('irrig-updated', () => renderIrrigWidget(isAdherent))
})

function setupIrrigButtons() {
  document.getElementById('tdb-parcels')?.addEventListener('click', e => {
    const rowBtn = e.target.closest('.tdb-row-irr-btn[data-plot-id]')
    if (rowBtn) {
      e.stopPropagation()
      const plotId = +rowBtn.dataset.plotId
      if (rowBtn.dataset.action === 'saisie') window.WebIrrig?.openSaisie({ ids: [plotId] })
      if (rowBtn.dataset.action === 'saison') window.WebIrrig?.openSaison({ ids: [plotId] })
      return
    }
    const saisirBtn = e.target.closest('.tdb-saisir-btn[data-plot-id]')
    if (saisirBtn) {
      const p = plots.find(p => p.id === +saisirBtn.dataset.plotId)
      if (p) window.WebIrrig?.openSaisie({ ids: [p.id] })
    }
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

// ─── Widget toggle helpers ─────────────────────────────────────────────────────

function toggleWidgetDetail(container, showDetail) {
  const summary = container.querySelector('.tdb-widget-summary')
  const detail  = container.querySelector('.tdb-widget-detail')
  if (summary) summary.hidden = showDetail
  if (detail)  detail.hidden  = !showDetail
}

function bindWidgetToggles(container, onDetail) {
  container.querySelector('.tdb-show-detail')?.addEventListener('click', () => {
    toggleWidgetDetail(container, true)
    onDetail?.()
  })
  container.querySelector('.tdb-show-summary')?.addEventListener('click', () => {
    toggleWidgetDetail(container, false)
  })
}

// ─── Data computation functions ────────────────────────────────────────────────

const FC_MONTHS_LONG = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
const FC_DAYS_SHORT  = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']

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

function plotIrrigationData(plot) {
  const today  = new Date().toISOString().split('T')[0]
  const upcoming = IRRIG_SEASON
    .filter(i => !i.real && i.plotId === plot.id && i.iso >= today)
    .sort((a, b) => a.iso < b.iso ? -1 : 1)
  if (!upcoming.length) return { planned: false }
  const daysAhead = Math.round((new Date(upcoming[0].iso) - new Date(today)) / 86400000)
  return { planned: true, mm: upcoming[0].mm, daysAhead }
}

function plotTreatmentData(plot) {
  const s = plot.id
  const now = new Date()
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
  return { winDateStr, winHour, winDur, isUrgent, minutesFromNow }
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

const KEY_STAGE_KEYWORDS = ['floraison', 'nouaison', 'slag', '10 feuilles']
function isKeyStage(stage) {
  const s = stage.toLowerCase()
  return KEY_STAGE_KEYWORDS.some(k => s.includes(k))
}

const NEXT_STAGE_CROPS = new Set([
  'Blé tendre', 'Blé dur', 'Maïs', 'Maïs ensilage',
  'Pomme de terre', 'Carotte', 'Tournesol', 'Pommier',
])

function thInfo(tooltip) {
  return `<span class="tdb-th-info" data-tooltip="${tooltip}">i</span>`
}

// ─── Irrigation widget ────────────────────────────────────────────────────────

function buildIrrigSummaryHTML(visiblePlots) {
  const today = new Date().toISOString().split('T')[0]
  const end7s = new Date(); end7s.setDate(end7s.getDate() + 7)
  const end7 = end7s.toISOString().split('T')[0]

  const deficitPlots = visiblePlots.filter(p => plotAgroData(p).balance < 0)
  const planned7 = IRRIG_SEASON.filter(i => !i.real && i.iso >= today && i.iso <= end7)
  const plannedMm = planned7.reduce((sum, i) => sum + (i.mm || 0), 0)

  const sortByNeed = (a, b) => plotAgroData(a).balance - plotAgroData(b).balance
  const topPlots = visiblePlots.slice().sort(sortByNeed).slice(0, 6)

  const miniBars = topPlots.map(p => {
    const d = plotAgroData(p)
    const rh = Math.max(0, Math.min(100, p.reserveHydrique || 0))
    const fillCls = rh > 60 ? 'tdb-mini-bar-fill--ok' : rh > 30 ? 'tdb-mini-bar-fill--warn' : 'tdb-mini-bar-fill--danger'
    const balStyle = d.balance >= 0 ? 'color:var(--ok)' : 'color:var(--warn)'
    const balTxt = d.balance >= 0 ? '✓' : `${d.balance} mm`
    return `<div class="tdb-mini-bar-row">
      <span class="tdb-mini-bar-label" title="${p.name}">${p.name}</span>
      <div class="tdb-mini-bar-track"><div class="tdb-mini-bar-fill ${fillCls}" style="width:${rh}%"></div></div>
      <span class="tdb-mini-bar-val" style="${balStyle}">${balTxt}</span>
    </div>`
  }).join('')

  const kpiDeficit = `<div class="tdb-kpi${deficitPlots.length > 0 ? ' tdb-kpi--warn' : ''}">
    <span class="tdb-kpi-value">${deficitPlots.length}</span>
    <span class="tdb-kpi-label">parcelle${deficitPlots.length !== 1 ? 's' : ''} en déficit</span>
  </div>`

  const kpiPlanned = `<div class="tdb-kpi">
    <span class="tdb-kpi-value">${plannedMm > 0 ? plannedMm + ' mm' : '—'}</span>
    <span class="tdb-kpi-label">irrigations planifiées J+7</span>
  </div>`

  const kpiTotal = `<div class="tdb-kpi">
    <span class="tdb-kpi-value">${visiblePlots.length}</span>
    <span class="tdb-kpi-label">parcelle${visiblePlots.length !== 1 ? 's' : ''}</span>
  </div>`

  return `<div class="tdb-kpi-row">${kpiDeficit}${kpiPlanned}${kpiTotal}</div>
    <div class="tdb-mini-bars">
      <div class="tdb-mini-bars-legend">
        <span>Réserve hydrique</span><span style="margin-left:auto">Bilan J+7</span>
      </div>
      ${miniBars}
    </div>
    <button class="tdb-show-detail tdb-detail-btn">Voir détails</button>`
}

function buildIrrigDetailHTML(isAdherent, selectedOrgId = null) {
  let visiblePlots
  if (isAdherent) {
    visiblePlots = plots.filter(p => p.orgId === ADHERENT_ORG_ID)
  } else if (selectedOrgId) {
    visiblePlots = plots.filter(p => p.orgId === selectedOrgId)
  } else {
    visiblePlots = plots
  }

  const orgFilter = isAdherent ? '' : (() => {
    const adherentOrgs = orgs.filter(o => o.id !== 100).sort((a, b) => a.name.localeCompare(b.name))
    return `<div style="padding:8px 12px 0">
      <select id="tdb-org-filter" style="padding:5px 8px;border:1px solid var(--bdr);border-radius:6px;font-size:13px;background:var(--bg2);color:var(--txt1)">
        <option value="">Toutes les organisations (${plots.length})</option>
        ${adherentOrgs.map(o => `<option value="${o.id}"${selectedOrgId === o.id ? ' selected' : ''}>${o.name}</option>`).join('')}
      </select>
    </div>`
  })()

  const COL = 11
  const makeRow = p => {
    const d = plotAgroData(p)
    const irrig = plotIrrigationData(p)
    const irrigCell = irrig.planned
      ? `<td class="tdb-num">${irrig.mm} mm <span class="tdb-irrig-days">J+${irrig.daysAhead}</span></td>`
      : `<td class="tdb-num"><button class="tdb-saisir-btn" data-plot-id="${p.id}">Saisir</button></td>`
    return `<tr>
      <td><a href="irrigation.html?plot=${p.id}" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop || '<span class="tdb-missing">—</span>'}</td>
      <td>${p.irrigation || '<span class="tdb-missing">—</span>'}</td>
      <td style="text-align:center">${envIcon(p.env)}</td>
      <td>${textureDisplay(p)}</td>
      <td class="tdb-num">${d.teneurEau} mm</td>
      <td class="tdb-num">${d.pluie7j} mm</td>
      <td class="tdb-num">${d.etp7j} mm</td>
      <td class="tdb-num ${d.teneurEauJ7 < 0 ? 'tdb-irrig-needed' : ''}">${d.teneurEauJ7} mm</td>
      <td class="tdb-num ${d.balance >= 0 ? 'tdb-irrig-ok' : 'tdb-irrig-needed'}">${d.balance >= 0 ? '0 mm' : '<i class="bi bi-droplet-fill"></i> +' + Math.abs(d.balance) + ' mm'}</td>
      ${irrigCell}
    </tr>`
  }

  const sortByNeed = (a, b) => plotAgroData(a).balance - plotAgroData(b).balance
  const rows = visiblePlots.slice().sort(sortByNeed).map(makeRow).join('')

  const headers = [
    { label: 'Parcelle',         tip: 'Nom de la parcelle' },
    { label: 'Culture',          tip: 'Culture actuellement en place sur la parcelle' },
    { label: 'Type d\'irrigation', tip: 'Type de système d\'irrigation de la parcelle' },
    { label: 'Env.',             tip: 'Environnement de la parcelle (plein champ, serre)' },
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

  return `${orgFilter}
    <table class="tdb-parcels-table">
      <thead><tr>${headerRow}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETR − drainage</div>`
}

function renderIrrigWidget(isAdherent, selectedOrgId = null) {
  const container = document.getElementById('tdb-parcels')
  if (!container) return

  const wasInDetail = container.querySelector('.tdb-widget-detail') &&
                       !container.querySelector('.tdb-widget-detail').hidden

  const visiblePlots = isAdherent
    ? plots.filter(p => p.orgId === ADHERENT_ORG_ID)
    : (selectedOrgId ? plots.filter(p => p.orgId === selectedOrgId) : plots)

  container.innerHTML = `
    <div class="tdb-widget-summary">${buildIrrigSummaryHTML(visiblePlots)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${buildIrrigDetailHTML(isAdherent, selectedOrgId)}
    </div>`

  if (wasInDetail) toggleWidgetDetail(container, true)

  bindWidgetToggles(container)
  container.querySelector('#tdb-org-filter')?.addEventListener('change', e => {
    renderIrrigWidget(isAdherent, e.target.value ? +e.target.value : null)
  })
}

// ─── Forecast widget ──────────────────────────────────────────────────────────

function buildForecastSummaryHTML(myPlots) {
  if (!myPlots.length) return '<p class="tdb-widget-empty">Aucune parcelle</p>'
  const now = new Date()

  const dayCards = [0, 1, 2, 3, 4].map(i => {
    const d = new Date(now); d.setDate(d.getDate() + i)
    const label = i === 0 ? "Auj." : i === 1 ? "Dem." : FC_DAYS_SHORT[d.getDay()]

    let totalPluie = 0, totalTmin = 0, totalTmax = 0, totalVent = 0
    myPlots.forEach(p => {
      const f = plotForecastDay(p, i)
      totalPluie += f.pluie; totalTmin += f.tMin; totalTmax += f.tMax; totalVent += f.vent
    })
    const n = myPlots.length
    const pluie = +(totalPluie / n).toFixed(1)
    const tMin  = Math.round(totalTmin / n)
    const tMax  = Math.round(totalTmax / n)
    const vent  = Math.round(totalVent / n)

    const rainy = pluie > 1
    const icon  = rainy ? 'bi-cloud-rain-fill' : (tMax > 22 ? 'bi-sun-fill' : 'bi-cloud-fill')
    const iconCls = rainy ? 'tdb-fc-dc-icon--rain' : 'tdb-fc-dc-icon--sun'
    const rainCls = pluie === 0 ? 'tdb-fc-dc-rain--none' : pluie < 5 ? 'tdb-fc-dc-rain--light' : 'tdb-fc-dc-rain--heavy'
    const rainTxt = pluie === 0 ? '—' : `${pluie} mm`

    return `<div class="tdb-fc-day-card">
      <div class="tdb-fc-dc-day">${label}</div>
      <i class="bi ${icon} tdb-fc-dc-icon ${iconCls}"></i>
      <div class="tdb-fc-dc-temp">${tMin}° / ${tMax}°</div>
      <div class="tdb-fc-dc-rain ${rainCls}">${rainTxt}</div>
      <div class="tdb-fc-dc-wind"><i class="bi bi-wind"></i> ${vent} km/h</div>
    </div>`
  }).join('')

  return `<div class="tdb-fc-strip">${dayCards}</div>
    <button class="tdb-show-detail tdb-detail-btn">Voir détails</button>`
}

function buildForecastDetailHTML(myPlots) {
  const now = new Date()
  const dayHeaders = [0, 1, 2, 3, 4].map(i => {
    const d = new Date(now); d.setDate(d.getDate() + i)
    const label = i === 0 ? `Aujourd'hui ${d.getDate()} ${FC_MONTHS_LONG[d.getMonth()]}`
                : i === 1 ? `Demain ${d.getDate()} ${FC_MONTHS_LONG[d.getMonth()]}`
                : `${FC_DAYS_SHORT[d.getDay()]}. ${d.getDate()} ${FC_MONTHS_LONG[d.getMonth()]}`
    return `<th colspan="3" class="tdb-fc-day-hd">${label}</th>`
  }).join('')

  const subHeaders = [0, 1, 2, 3, 4].map(() =>
    `<th class="tdb-num tdb-fc-sub">Pluie</th>
     <th class="tdb-num tdb-fc-sub">T° min/max</th>
     <th class="tdb-num tdb-fc-sub">Vent</th>`
  ).join('')

  const rows = myPlots.map(p => {
    const dayCells = [0, 1, 2, 3, 4].map(i => {
      const f = plotForecastDay(p, i)
      const pluieCell = f.pluie > 0 ? `<span class="tdb-fc-rain">${f.pluie} mm</span>` : '<span class="tdb-fc-dry">—</span>'
      return `<td class="tdb-num tdb-fc-cell">${pluieCell}</td>
        <td class="tdb-num tdb-fc-cell">${f.tMin}°C / ${f.tMax}°C</td>
        <td class="tdb-num tdb-fc-cell">${f.vent} km/h</td>`
    }).join('')
    return `<tr>
      <td><a href="previsions.html?plot=${p.id}" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop || '—'}</td>
      ${dayCells}
    </tr>`
  }).join('')

  return `<table class="tdb-parcels-table tdb-fc-table">
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

function renderForecastWidget() {
  const container = document.getElementById('tdb-forecast')
  if (!container) return
  const myPlots = plots.filter(p => p.orgId === ADHERENT_ORG_ID)

  container.innerHTML = `
    <div class="tdb-widget-summary">${buildForecastSummaryHTML(myPlots)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${buildForecastDetailHTML(myPlots)}
    </div>`

  bindWidgetToggles(container)
}

// ─── Treatment widget ─────────────────────────────────────────────────────────

function buildTreatmentSummaryHTML(myPlots) {
  const treated = myPlots.map(p => ({ plot: p, data: plotTreatmentData(p) }))
  const urgentToday = treated.filter(t => t.data.isUrgent)

  const urgentItems = urgentToday.slice(0, 3).map(t => `
    <div class="tdb-alert-item">
      <span class="tdb-alert-plot">${t.plot.name}</span>
      <span class="tdb-alert-window">${t.data.winDateStr} — ${t.data.winHour}:00 → ${(t.data.winHour + t.data.winDur) % 24}:00</span>
    </div>`).join('')

  return `<div class="tdb-kpi-row">
    <div class="tdb-kpi${urgentToday.length > 0 ? ' tdb-kpi--danger' : ''}">
      <span class="tdb-kpi-value">${urgentToday.length}</span>
      <span class="tdb-kpi-label">fenêtre${urgentToday.length !== 1 ? 's' : ''} urgente${urgentToday.length !== 1 ? 's' : ''} aujourd'hui</span>
    </div>
  </div>
  ${urgentItems ? `<div class="tdb-alert-list">${urgentItems}</div>` : ''}
  <button class="tdb-show-detail tdb-detail-btn">Voir détails</button>`
}

function buildTreatmentDetailHTML(myPlots) {
  const rows = myPlots.map(p => {
    const d = plotTreatmentData(p)
    return `<tr>
      <td><a href="parcelle-detail.html?id=${p.id}" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop || '—'}</td>
      <td class="${d.isUrgent ? 'tdb-win-urgent' : ''}">${d.isUrgent ? '<i class="bi bi-alarm-fill"></i> ' : ''}${d.winDateStr} — ${d.winHour}:00 → ${(d.winHour + d.winDur) % 24}:00</td>
    </tr>`
  }).join('')

  return `<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th><th>Culture</th><th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`
}

function renderTreatmentWidget() {
  const container = document.getElementById('tdb-treatments')
  if (!container) return
  const myPlots = plots.filter(p => p.orgId === ADHERENT_ORG_ID)

  container.innerHTML = `
    <div class="tdb-widget-summary">${buildTreatmentSummaryHTML(myPlots)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${buildTreatmentDetailHTML(myPlots)}
    </div>`

  bindWidgetToggles(container)
}

// ─── Sensor events widget ─────────────────────────────────────────────────────

const SENSOR_EVENT_ICONS = {
  'capteur couché':          { icon: 'bi-arrow-down-circle-fill', cls: 'tdb-ev-warn' },
  'émissions interrompues':  { icon: 'bi-wifi-off',               cls: 'tdb-ev-danger' },
  'capteur déplacé':         { icon: 'bi-geo-alt-fill',            cls: 'tdb-ev-warn' },
  'cuillère bloquée':        { icon: 'bi-x-octagon-fill',          cls: 'tdb-ev-danger' },
}

function buildSensorSummaryHTML(mySensors) {
  if (!mySensors.length) {
    return `<div class="tdb-widget-ok">
      <i class="bi bi-check-circle-fill"></i> Aucune anomalie capteur
    </div>
    <button class="tdb-show-detail tdb-detail-btn" style="margin-top:0">Voir détails</button>`
  }

  const evTypes = {}
  mySensors.forEach(s => {
    const evList = Array.isArray(s.event) ? s.event : [s.event]
    evList.forEach(ev => { evTypes[ev] = (evTypes[ev] || 0) + 1 })
  })

  const evBadges = Object.entries(evTypes).map(([ev, count]) => {
    const cfg = SENSOR_EVENT_ICONS[ev] || { cls: 'tdb-ev-warn' }
    return `<span class="tdb-ev-badge ${cfg.cls}">${ev}${count > 1 ? ` ×${count}` : ''}</span>`
  }).join('')

  return `<div class="tdb-kpi-row">
    <div class="tdb-kpi tdb-kpi--danger">
      <span class="tdb-kpi-value">${mySensors.length}</span>
      <span class="tdb-kpi-label">capteur${mySensors.length !== 1 ? 's' : ''} en anomalie</span>
    </div>
  </div>
  <div style="padding:0 16px 12px;display:flex;flex-wrap:wrap;gap:6px">${evBadges}</div>
  <button class="tdb-show-detail tdb-detail-btn">Voir détails</button>`
}

function buildSensorDetailHTML(mySensors) {
  if (!mySensors.length) return '<p class="tdb-widget-empty">Aucune anomalie capteur</p>'
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
  return `<table class="tdb-parcels-table">
    <thead><tr><th>Modèle</th><th>Numéro de série</th><th>Ville</th><th>Événements</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`
}

function renderSensorWidget() {
  const container = document.getElementById('tdb-sensor-events')
  if (!container) return

  const mySensors = sensors.filter(s => {
    const ev = s.event
    return ev && (Array.isArray(ev) ? ev.length > 0 : true)
  }).filter(s => s.orgId === ADHERENT_ORG_ID)

  container.innerHTML = `
    <div class="tdb-widget-summary">${buildSensorSummaryHTML(mySensors)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${buildSensorDetailHTML(mySensors)}
    </div>`

  bindWidgetToggles(container)
}

// ─── Phenology widget ─────────────────────────────────────────────────────────

function buildPhenologySummaryHTML(myPlots) {
  const withKey = myPlots.filter(p => isKeyStage(plotPhenologyData(p).stage))

  const upcoming = myPlots
    .map(p => ({ plot: p, data: plotPhenologyData(p) }))
    .filter(x => x.data.daysToNext <= 14)
    .sort((a, b) => a.data.daysToNext - b.data.daysToNext)
    .slice(0, 5)

  const items = upcoming.map(x => {
    const key = isKeyStage(x.data.stage)
    const stageName = x.data.stage.split(' (')[0]
    return `<div class="tdb-stage-item">
      <span class="tdb-stage-crop">${x.plot.crop || '—'}</span>
      <span class="tdb-stage-plot">${x.plot.name}</span>
      <span class="tdb-risk-badge ${key ? 'tdb-risk-medium' : 'tdb-risk-low'}">${stageName}</span>
      <span class="tdb-stage-days">→ ${x.data.nextStage} J+${x.data.daysToNext}</span>
    </div>`
  }).join('')

  return `<div class="tdb-kpi-row">
    <div class="tdb-kpi">
      <span class="tdb-kpi-value">${myPlots.length}</span>
      <span class="tdb-kpi-label">parcelles suivies</span>
    </div>
    <div class="tdb-kpi${withKey.length > 0 ? ' tdb-kpi--warn' : ''}">
      <span class="tdb-kpi-value">${withKey.length}</span>
      <span class="tdb-kpi-label">stade${withKey.length !== 1 ? 's' : ''} clé${withKey.length !== 1 ? 's' : ''} en cours</span>
    </div>
  </div>
  ${items ? `<div class="tdb-stage-list">${items}</div>` : ''}
  <button class="tdb-show-detail tdb-detail-btn">Voir détails</button>`
}

function buildPhenologyDetailHTML(myPlots) {
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
      <td><a href="parcelle-detail.html?id=${p.id}&tab=donnees" class="tdb-plot-link">${p.name}</a></td>
      <td>${p.crop || '—'}</td>
      <td>${d.variety}</td>
      <td><select class="tdb-stage-sel ${isKeyStage(d.stage) ? 'tdb-stage-key' : ''}">${stageOpts}</select></td>
      <td class="tdb-num">${d.kc.toFixed(2)}</td>
      <td class="tdb-num">${d.rootDepth} cm</td>
      <td>${nextCell}</td>
    </tr>`
  }).join('')

  return `<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th><th>Culture</th><th>Variété</th><th>Stade actuel</th>
        <th class="tdb-num">Kc</th><th class="tdb-num">Racines</th><th>Prochain stade prévu</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`
}

function renderPhenologyWidget() {
  const container = document.getElementById('tdb-phenology')
  if (!container) return
  const myPlots = plots.filter(p => p.orgId === ADHERENT_ORG_ID)

  container.innerHTML = `
    <div class="tdb-widget-summary">${buildPhenologySummaryHTML(myPlots)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${buildPhenologyDetailHTML(myPlots)}
    </div>`

  bindWidgetToggles(container)
}
