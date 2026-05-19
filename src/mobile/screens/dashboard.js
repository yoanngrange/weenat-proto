import { plots as allPlots }   from '../../data/plots.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { network }               from '../../data/network.js'
import { pushDetail, popDetail } from '../nav.js'

const ORG_ID   = { admin: 100, adherent: 1 }
const ORG_NAME = { admin: "Breiz'Agri Conseil", adherent: 'Ferme du Bocage' }

// ─── Widget catalog ───────────────────────────────────────────────────────────
// fixed:true = toujours en fin de liste, pas de menu (infos réseau + support)
const CATALOG = [
  { id: 'bilan_hydrique', title: 'Irrigations & bilan hydrique',      icon: 'bi-droplet-fill',              color: '#0172A4', active: true,  available: true,  fixed: false },
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

// ─── Widget HTML builders ─────────────────────────────────────────────────────
const BH_PAGE = 8

function makePlanif7j(plot) {
  const s = plot.id
  if (!plot.irrigation || plot.irrigation === "Pas d'irrigation") return 0
  return s % 3 === 0 ? Math.round((s * 1.7 + 8) % 30 + 5) : 0
}

function buildBilanHydrique(plots, expanded = false) {
  if (!plots.length) {
    return `<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>`
  }
  const visible = expanded ? plots : plots.slice(0, BH_PAGE)
  const rows = visible.map(p => {
    const { j0, j7, bilan } = makeBilan(p)
    const planif = makePlanif7j(p)
    return `
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${p.id}">${p.name}</button>
      <div class="m-bh-td">${j0}</div>
      <div class="m-bh-td">${j7}</div>
      <div class="m-bh-td m-bh-td--reco">${bilan > 0 ? bilan : '—'}</div>
      <div class="m-bh-td m-bh-td--planif">${planif > 0 ? planif : '—'}</div>`
  }).join('')
  const more = !expanded && plots.length > BH_PAGE
    ? `<button class="m-bh-expand" id="bh-expand">Afficher les ${plots.length - BH_PAGE} autres parcelles <i class="bi bi-chevron-down"></i></button>` : ''
  return `
    <div class="m-bh-table">
      <div class="m-bh-th m-bh-unit-lbl">mm</div>
      <div class="m-bh-th">J0</div>
      <div class="m-bh-th">J+7</div>
      <div class="m-bh-th">Reco 7j</div>
      <div class="m-bh-th">Planif. 7j</div>
      ${rows}
    </div>
    ${more}
    <div class="m-bh-actions">
      <button class="m-bh-action m-bh-action--cal" id="bh-btn-calendar">
        <i class="bi bi-calendar3"></i> Voir le calendrier des irrigations
      </button>
      <button class="m-bh-action" id="bh-btn-irrigation">
        <i class="bi bi-droplet-fill"></i> Saisir une irrigation
      </button>
      <button class="m-bh-action m-bh-action--sec" id="bh-btn-strategie">
        <i class="bi bi-arrow-repeat"></i> Saisir une stratégie d'irrigation
      </button>
    </div>`
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

  const makeCard = (d, i) => {
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
        <div class="m-prev-row"><span>Température</span><strong>${d.tMin}°C <em>${d.tMinHeure}</em> — ${d.tMax}°C <em>${d.tMaxHeure}</em></strong></div>
        <div class="m-prev-row"><span>Humidité</span><strong>${d.humMoy}%</strong></div>
        <div class="m-prev-row"><span>Vent</span><strong>${d.ventMoy}/${d.ventRafales} km/h</strong></div>
        <div class="m-prev-row m-prev-row--last"><span>Évapotranspiration</span><strong>${d.etp} mm</strong></div>
      </div>
    </div>`
  }

  const visible = forecast.slice(0, 3).map(makeCard).join('')
  const extra   = forecast.slice(3).map(makeCard).join('')

  return `
    <select class="m-prev-select">${opts}</select>
    <div class="m-prev-cards">
      ${visible}
      <div class="m-prev-extra" style="display:none">${extra}</div>
      <button class="m-prev-expand-btn">Voir les ${forecast.length - 3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`
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

const DEFAULT_CUMULS = [
  { metric: 'Pluie',          icon: 'bi-droplet-fill',    color: '#45b7d1', subject: 'La Petite Lande', value: '87.4', unit: 'mm', since: '1 jan 2026', params: '' },
  { metric: 'Heures de froid', icon: 'bi-thermometer-low', color: '#5ac8fa', subject: 'La Croix',        value: '312',  unit: 'h',  since: '1 jan 2026', params: '< 7.2°C' },
]

function buildCumuls(plots, sensors) {
  const today7 = new Date(); today7.setDate(today7.getDate() - 7)
  const defaultFrom = today7.toISOString().split('T')[0]
  const plotOpts   = plots.map(p => `<option value="p-${p.id}">${p.name}</option>`).join('')
  const sensorOpts = sensors.filter(s => s.parcelId).map(s => `<option value="s-${s.id}">${s.serial} (${s.model})</option>`).join('')
  return `
    <div class="m-list-section-header">Nouveau cumul</div>
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
    </div>
    <div class="m-list-section-header" style="margin-top:16px">Cumuls enregistrés</div>
    <div class="m-cumuls-saved">
      ${DEFAULT_CUMULS.map(c => `
        <div class="m-cumuls-saved-card">
          <div class="m-cumuls-saved-row1">
            <span class="m-cumuls-saved-metric"><i class="bi ${c.icon}" style="color:${c.color}"></i> ${c.metric}</span>
            <span class="m-cumuls-saved-val">${c.value} <span class="m-cumuls-saved-unit">${c.unit}</span></span>
          </div>
          <div class="m-cumuls-saved-row2">${c.subject}</div>
          <div class="m-cumuls-saved-row3">depuis le ${c.since}${c.params ? ' · ' + c.params : ''}</div>
        </div>`).join('')}
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

  const SVG_LOGO = `<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>`

  function renderDayDetailHTML(forecast, idx) {
    const d = forecast[idx]
    const title = `${d.dayLabel.charAt(0).toUpperCase() + d.dayLabel.slice(1)} · ${d.dateStr}`
    return `
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${SVG_LOGO}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 0">
          <button class="m-day-nav" id="prev-day" ${idx === 0 ? 'disabled' : ''}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${d.icon}" style="color:${d.color};font-size:22px"></i><span class="m-d-name">${title}</span></div>
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
                <span style="font-size:12px;color:#45b7d1;width:44px;flex-shrink:0">${h.pluie > 0 ? `${h.pluie}mm` : ''}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${h.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${h.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${h.vent} km/h</span>
              </div>`).join('')}
          </div>
        </div>
      </div>`
  }

  function bindDayDetail(layer, forecast, idx) {
    layer.querySelector('.m-detail-back').addEventListener('click', popDetail)
    layer.querySelector('#prev-day')?.addEventListener('click', () => {
      layer.innerHTML = renderDayDetailHTML(forecast, idx-1)
      bindDayDetail(layer, forecast, idx-1)
    })
    layer.querySelector('#next-day')?.addEventListener('click', () => {
      layer.innerHTML = renderDayDetailHTML(forecast, idx+1)
      bindDayDetail(layer, forecast, idx+1)
    })
  }

  function openDayDetail(forecast, idx) {
    const layer = pushDetail(renderDayDetailHTML(forecast, idx))
    bindDayDetail(layer, forecast, idx)
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

    // Bilan hydrique — boutons irrigation
    content.querySelector('#bh-btn-calendar')?.addEventListener('click', () => {
      import('./irrigation.js').then(m => m.openCalendar(exploitPlots, ''))
    })
    content.querySelector('#bh-btn-irrigation')?.addEventListener('click', () => {
      import('./irrigation.js').then(m => m.openIrrigationSaisie(exploitPlots, showToast))
    })
    content.querySelector('#bh-btn-strategie')?.addEventListener('click', () => {
      import('./irrigation.js').then(m => m.openIrrigationStrategie(exploitPlots, showToast))
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
        openDayDetail(forecast, +card.dataset.day)
      })
    })

    const expandBtn = content.querySelector('.m-prev-expand-btn')
    if (expandBtn) {
      expandBtn.addEventListener('click', () => openDayDetail(forecast, 3))
    }

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
