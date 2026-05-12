import { plots as allPlots }   from '../../data/plots.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { network }               from '../../data/network.js'
import { pushDetail, popDetail } from '../nav.js'

const ORG_ID   = { admin: 100, adherent: 1 }
const ORG_NAME = { admin: "Breiz'Agri Conseil", adherent: 'Ferme du Bocage' }

// ─── Widget catalog ───────────────────────────────────────────────────────────
// fixed:true = toujours en fin de liste, pas de menu (infos réseau + support)
const CATALOG = [
  { id: 'bilan_hydrique', title: 'Bilan hydrique',                    icon: 'bi-droplet-fill',              color: '#0172A4', active: true,  available: true,  fixed: false },
  { id: 'previsions',     title: 'Prévisions',                        icon: 'bi-cloud-sun-fill',            color: '#f5a623', active: true,  available: true,  fixed: false },
  { id: 'temps_reel',     title: 'Données temps-réel',                icon: 'bi-activity',                  color: '#ff9f0a', active: false, available: false, fixed: false },
  { id: 'cumuls',         title: 'Cumuls',                            icon: 'bi-bar-chart-fill',            color: '#bf5af2', active: true,  available: true,  fixed: false },
  { id: 'capteurs_fav',   title: 'Capteurs favoris',                  icon: 'bi-star-fill',                 color: '#ff9f0a', active: false, available: false, fixed: false },
  { id: 'parcelles_fav',  title: 'Parcelles favorites',               icon: 'bi-bookmark-fill',             color: '#30d158', active: false, available: false, fixed: false },
  { id: 'mon_secteur',    title: 'Mon secteur',                       icon: 'bi-geo-alt-fill',              color: '#ff6b6b', active: false, available: false, fixed: false },
  { id: 'traitements',    title: 'Traitements phytosanitaires',       icon: 'bi-shield-fill',               color: '#4ecdc4', active: false, available: false, fixed: false },
  { id: 'cultures',       title: 'Cultures & Stades phénologiques',   icon: 'bi-flower1',                   color: '#a2c4c9', active: false, available: false, fixed: false },
  { id: 'evenements',     title: 'Capteurs avec événement en cours',  icon: 'bi-exclamation-triangle-fill', color: '#ff3b30', active: false, available: false, fixed: false },
  // Widgets fixes — toujours actifs, toujours en fin de liste
  { id: 'mon_reseau',     title: 'Infos Réseau',                      icon: 'bi-diagram-3-fill',            color: '#5b8dd9', active: true,  available: true,  fixed: true  },
  { id: 'support',        title: 'Support',                           icon: 'bi-question-circle-fill',      color: '#30d158', active: true,  available: true,  fixed: true  },
]

// ─── UI helpers (shared pattern, TODO: extract to ui.js) ──────────────────────
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
  { icon: 'bi-cloud-rain-fill',  label: 'Pluie',      color: '#45b7d1' },
]

function makeForecast() {
  return [0, 1, 2].map(d => {
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

// ─── Widget HTML builders ─────────────────────────────────────────────────────
const BH_PAGE = 8

function buildBilanHydrique(plots, expanded = false) {
  if (!plots.length) {
    return `<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>`
  }
  const visible = expanded ? plots : plots.slice(0, BH_PAGE)
  const rows = visible.map(p => {
    const { j0, j7, bilan } = makeBilan(p)
    return `
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${p.id}">${p.name}</button>
      <div class="m-bh-td">${j0}</div>
      <div class="m-bh-td">${j7}</div>
      <div class="m-bh-td">${bilan > 0 ? `${bilan} mm` : ''}</div>`
  }).join('')
  const more = !expanded && plots.length > BH_PAGE
    ? `<button class="m-bh-expand" id="bh-expand">Afficher les ${plots.length - BH_PAGE} autres parcelles <i class="bi bi-chevron-down"></i></button>` : ''
  return `
    <div class="m-bh-table">
      <div class="m-bh-th"></div>
      <div class="m-bh-th">J0</div>
      <div class="m-bh-th">J+7</div>
      <div class="m-bh-th">🪣</div>
      ${rows}
    </div>
    ${more}`
}

function buildPrevisions(plots, sensors, forecast) {
  const plotOpts = plots.map(p => {
    const label = [p.name, p.crop, p.ville].filter(Boolean).join(' · ')
    return `<option value="p-${p.id}">${label}</option>`
  }).join('')
  const sensorOpts = sensors.map(s =>
    `<option value="s-${s.id}">${s.model} — ${s.serial}</option>`
  ).join('')
  const opts = `
    <optgroup label="Parcelles">${plotOpts}</optgroup>
    ${sensorOpts ? `<optgroup label="Capteurs">${sensorOpts}</optgroup>` : ''}`

  const cards = forecast.map((d, i) => {
    const title = `${d.dayLabel.charAt(0).toUpperCase() + d.dayLabel.slice(1)} · ${d.dateStr}`
    return `
    <div class="m-prev-card" data-day="${i}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${d.icon}" style="color:${d.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${title}</span>
          <span class="m-prev-card-cond">${d.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-card-body">
        <div class="m-prev-row"><span>Pluie</span><strong>${d.pluie} mm</strong></div>
        <div class="m-prev-row"><span>T° min</span><strong>${d.tMin}°C <em>${d.tMinHeure}</em></strong></div>
        <div class="m-prev-row"><span>T° max</span><strong>${d.tMax}°C <em>${d.tMaxHeure}</em></strong></div>
        <div class="m-prev-row"><span>Humidité</span><strong>${d.humMoy}%</strong></div>
        <div class="m-prev-row"><span>Vent</span><strong>${d.ventMoy}/${d.ventRafales} km/h</strong></div>
        <div class="m-prev-row m-prev-row--last"><span>Évapotranspiration</span><strong>${d.etp} mm</strong></div>
      </div>
    </div>`}).join('')

  return `
    <select class="m-prev-select">${opts}</select>
    <div class="m-prev-cards">${cards}</div>`
}

const CUMULS_METRICS = [
  { id: 'pluie', label: 'Cumul de pluie',          unit: 'mm',  base: 45,  amp: 80,   needsModels: ['P+','PT','P','SMV'] },
  { id: 'dj',    label: 'Degrés-jours',             unit: 'DJ',  base: 120, amp: 300,  needsModels: ['P+','PT','SMV','TH'] },
  { id: 'dh',    label: 'Degrés-heures',            unit: 'Dh',  base: 800, amp: 2000, needsModels: ['P+','PT','SMV','TH'] },
  { id: 'hf',    label: 'Heures de froid',          unit: 'h',   base: 30,  amp: 120,  needsModels: ['P+','PT','SMV','TH'] },
  { id: 'etp',   label: 'Évapotranspiration',       unit: 'mm',  base: 20,  amp: 60,   needsModels: null }, // always
  { id: 'humec', label: 'Humectation foliaire',     unit: 'h',   base: 10,  amp: 40,   needsModels: ['LWS'] },
]

function getAvailableMetrics(subjectVal) {
  if (!subjectVal) return CUMULS_METRICS
  if (subjectVal.startsWith('s-')) return CUMULS_METRICS // all metrics for sensors
  const plotId = +subjectVal.slice(2)
  const linkedModels = new Set(
    allSensors.filter(s => s.parcelId === plotId).map(s => s.model)
  )
  return CUMULS_METRICS.filter(m =>
    m.needsModels === null || m.needsModels.some(mod => linkedModels.has(mod))
  )
}

function computeCumul(subjectVal, fromDate, metricId) {
  if (!subjectVal || !fromDate) return null
  const m   = CUMULS_METRICS.find(x => x.id === metricId) || CUMULS_METRICS[0]
  const days = Math.max(1, Math.round((Date.now() - new Date(fromDate)) / 86400000))
  const seed = subjectVal.split('').reduce((a, c) => a + c.charCodeAt(0), 0) + days
  return +(m.base + (seed % (m.amp * 10)) / 10).toFixed(1)
}

function buildCumuls(plots, sensors) {
  const today7 = new Date(); today7.setDate(today7.getDate() - 7)
  const defaultFrom = today7.toISOString().split('T')[0]
  const plotOpts   = plots.map(p => `<option value="p-${p.id}">${p.name}</option>`).join('')
  const sensorOpts = sensors.filter(s => s.parcelId).map(s => `<option value="s-${s.id}">${s.serial} (${s.model})</option>`).join('')
  return `
    <div class="m-cumuls-form">
      <select class="m-cumuls-select" id="cumuls-subject">
        <option value="">Choisir une parcelle ou un capteur…</option>
        <optgroup label="Parcelles">${plotOpts}</optgroup>
        ${sensorOpts ? `<optgroup label="Capteurs">${sensorOpts}</optgroup>` : ''}
      </select>
      <div class="m-cumuls-row2">
        <div class="m-cumuls-field">
          <span class="m-cumuls-label">Depuis le</span>
          <input type="date" class="m-cumuls-date" id="cumuls-from" value="${defaultFrom}">
        </div>
        <div class="m-cumuls-field">
          <span class="m-cumuls-label">Métrique</span>
          <select class="m-cumuls-select m-cumuls-select--sm" id="cumuls-metric">
            ${CUMULS_METRICS.map(m => `<option value="${m.id}">${m.label}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="m-cumuls-result" id="cumuls-result">
        <span class="m-cumuls-val" id="cumuls-val">—</span>
        <span class="m-cumuls-unit" id="cumuls-unit">Sélectionnez un sujet</span>
      </div>
    </div>`
}

function buildMonReseau() {
  const nbAdherents = allPlots.map(p => p.orgId).filter((v, i, a) => a.indexOf(v) === i && v !== 100).length
  const nbCapteurs  = allSensors.length
  const nbParcelles = allPlots.length
  return `
    <div class="m-reseau-name">${network.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${nbAdherents}</strong><span>Adhérents</span></div>
      <div class="m-reseau-stat"><strong>${nbParcelles}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${nbCapteurs}</strong><span>Capteurs</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${network.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${network.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${network.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${network.siege.adresse}, ${network.siege.codePostal} ${network.siege.ville}</span></div>
    </div>`
}

function buildSupport() {
  return `
    <button class="m-support-chat-btn" id="open-chat-btn" type="button">
      <div class="m-support-chat-avatar"><i class="bi bi-robot"></i></div>
      <div class="m-support-chat-info">
        <span>Assistant Weenat</span>
        <em>Réponse immédiate</em>
      </div>
      <i class="bi bi-chevron-right" style="color:#c7c7cc"></i>
    </button>
    <div class="m-support-list">
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
  const exploitPlots = orgId === 100 ? allPlots : allPlots.filter(p => p.orgId === orgId)
  const plotIds = new Set(exploitPlots.map(p => p.id))
  const exploitSensors = allSensors.filter(s => plotIds.has(s.parcelId))
  let forecast = makeForecast()

  const collapsedWidgets = new Set()

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
          <i class="bi ${collapsed ? 'bi-chevron-down' : 'bi-chevron-up'}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${w.fixed ? '0' : '8px'}"></i>
          ${menu}
        </div>
        <div class="m-widget-bd" style="${collapsed ? 'display:none' : ''}">${bodyHtml}</div>
      </div>`
  }

  function render() {
    forecast = makeForecast()
    const custom = CATALOG.filter(w => w.active && !w.fixed)
    const fixed  = CATALOG.filter(w => w.active && w.fixed)
    content.innerHTML = `
      ${[...custom, ...fixed].map(w => {
        let body = ''
        if (w.id === 'bilan_hydrique') body = buildBilanHydrique(exploitPlots, false)
        else if (w.id === 'previsions') body = buildPrevisions(exploitPlots, exploitSensors, forecast)
        else if (w.id === 'cumuls')     body = buildCumuls(exploitPlots, exploitSensors)
        else if (w.id === 'mon_reseau') body = buildMonReseau()
        else if (w.id === 'support')    body = buildSupport()
        return widgetCard(w, body)
      }).join('')}
      <div style="height:24px"></div>`
    bindEvents()
  }

  function openDayDetail(d) {
    const title = `${d.dayLabel.charAt(0).toUpperCase() + d.dayLabel.slice(1)} · ${d.dateStr}`
    const layer = pushDetail(`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">W</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:center;padding:4px 16px 0">
          <i class="bi ${d.icon}" style="color:${d.color};font-size:24px"></i>
          <span class="m-d-name" style="margin-left:8px">${title}</span>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><span>Pluie</span><strong>${d.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><span>T° min / max</span><strong>${d.tMin} / ${d.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><span>Vent</span><strong>${d.ventMoy}/${d.ventRafales}</strong></div>
          </div>
          <div class="m-list-section-header">Heure par heure</div>
          <div style="background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.07);overflow:hidden;margin-bottom:24px">
            ${d.hours.map((h, i) => `
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${i < d.hours.length-1 ? 'border-bottom:.5px solid rgba(0,0,0,.06)' : ''}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${h.label}</span>
                <i class="bi ${h.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${h.temp}°</span>
                <span style="font-size:12px;color:#45b7d1;width:44px;flex-shrink:0">${h.pluie > 0 ? `${h.pluie}mm` : ''}</span>
                <span style="font-size:12px;color:#8e8e93">${h.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${h.vent} km/h</span>
              </div>`).join('')}
          </div>
        </div>
      </div>`)
    layer.querySelector('.m-detail-back').addEventListener('click', popDetail)
  }

  function bindEvents() {
    screenEl.querySelector('.m-navbar-action')?.addEventListener('click', showCatalog)

    // Widget collapse
    content.querySelectorAll('.m-widget-hd--toggle').forEach(hd => {
      hd.addEventListener('click', e => {
        if (e.target.closest('.m-widget-menu')) return
        const widgetId = hd.dataset.collapse
        if (collapsedWidgets.has(widgetId)) collapsedWidgets.delete(widgetId)
        else collapsedWidgets.add(widgetId)
        render()
      })
    })

    content.querySelector('#bh-expand')?.addEventListener('click', () => {
      const bd = content.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd')
      if (bd) bd.innerHTML = buildBilanHydrique(exploitPlots, true)
    })

    // Bilan hydrique — lien vers détail parcelle
    content.querySelectorAll('.m-bh-plot-link').forEach(btn => {
      btn.addEventListener('click', () => {
        const plot = allPlots.find(p => p.id === +btn.dataset.plotId)
        if (plot) import('./parcel-detail.js').then(m => m.initParcelDetail(plot, []))
      })
    })

    // Cumuls — filter metrics then recalculate
    const metricSel = content.querySelector('#cumuls-metric')
    const updateMetrics = () => {
      if (!metricSel) return
      const subj = content.querySelector('#cumuls-subject')?.value
      const available = getAvailableMetrics(subj)
      const cur = metricSel.value
      metricSel.innerHTML = available.map(m =>
        `<option value="${m.id}"${m.id === cur && available.find(x => x.id === cur) ? ' selected' : ''}>${m.label}</option>`
      ).join('')
    }
    const updateCumul = () => {
      const subj   = content.querySelector('#cumuls-subject')?.value
      const from   = content.querySelector('#cumuls-from')?.value
      const metric = content.querySelector('#cumuls-metric')?.value
      const valEl  = content.querySelector('#cumuls-val')
      const unitEl = content.querySelector('#cumuls-unit')
      if (!valEl || !unitEl) return
      const v = computeCumul(subj, from, metric)
      const m = CUMULS_METRICS.find(x => x.id === metric)
      if (v !== null && subj) {
        valEl.textContent = v
        unitEl.textContent = m?.unit || ''
      } else {
        valEl.textContent = '—'
        unitEl.textContent = 'Sélectionnez un sujet'
      }
    }
    content.querySelector('#cumuls-subject')?.addEventListener('change', () => { updateMetrics(); updateCumul() })
    content.querySelector('#cumuls-from')?.addEventListener('change', updateCumul)
    content.querySelector('#cumuls-metric')?.addEventListener('change', updateCumul)

    content.querySelector('#open-chat-btn')?.addEventListener('click', showChatSheet)

    content.querySelectorAll('.m-prev-card').forEach(card => {
      card.addEventListener('click', () => {
        const d = forecast[+card.dataset.day]; if (!d) return
        openDayDetail(d)
      })
    })

    content.querySelectorAll('.m-widget-menu').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const w = CATALOG.find(x => x.id === btn.dataset.widget); if (!w) return
        const body = document.createElement('div')
        body.innerHTML = `
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="menu-config">Configurer</a>
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`
        const sheet = showSheet({ title: w.title, body, doneLabel: 'Fermer', onDone: () => {} })
        body.querySelector('#menu-config').addEventListener('click', () => {
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => { sheet.remove(); showToast('Configuration à venir') }, 280)
        })
        body.querySelector('#menu-move').addEventListener('click', () => {
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => { sheet.remove(); showReorderSheet() }, 280)
        })
        body.querySelector('#menu-remove').addEventListener('click', () => {
          w.active = false
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => { sheet.remove(); render() }, 280)
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
          refresh(); render()
        })
      })
    }
    refresh()
    showSheet({ title: 'Réorganiser les widgets', body, doneLabel: 'Fermer', onDone: () => {} })
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
          w.active = !w.active; refresh(); render()
        })
      })
    }
    refresh()
    showSheet({ title: 'Widgets disponibles', body, doneLabel: 'Fermer', onDone: () => {} })
  }

  render()
}
