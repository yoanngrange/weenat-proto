import { updateBreadcrumb } from '../js/breadcrumb.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { members } from '../data/members.js'
import { orgs } from '../data/orgs.js'
import { integrations } from './integrations.js'

const ADHERENT_ORG_ID = 1
const ADHERENT_ACTIVE_IDS = new Set(['irre-lis-mono', 'cropwise-protector', 'abelio'])
const FAVORITE_KEY = 'tdb-favorites'
const MAX_FAVORITES = 3

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  const role = localStorage.getItem('menuRole') || 'admin-reseau'
  const isAdherent = role === 'adherent-reseau'
  renderFavorites()
  renderAllStats(isAdherent)
})

// ─── Favorites ────────────────────────────────────────────────────────────────

function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [] } catch { return [] }
}
function saveFavorites(favs) {
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favs))
}

function renderFavorites() {
  const container = document.getElementById('tdb-favorites')
  if (!container) return
  const favs = getFavorites()

  container.innerHTML = Array.from({ length: MAX_FAVORITES }, (_, i) => {
    const fav = favs[i]
    return fav
      ? `<div class="tdb-fav-slot tdb-fav-filled" data-idx="${i}">
           <div class="tdb-fav-label">${fav.label}</div>
           <div class="tdb-fav-value">${fav.value}</div>
           <button class="tdb-fav-remove" data-idx="${i}" title="Retirer"><i class="bi bi-x"></i></button>
         </div>`
      : `<div class="tdb-fav-slot tdb-fav-empty" data-idx="${i}">
           <i class="bi bi-plus-circle"></i>
           <span>Ajouter un indicateur</span>
         </div>`
  }).join('')

  container.querySelectorAll('.tdb-fav-empty').forEach(slot => {
    slot.addEventListener('click', () => openWidgetPicker(parseInt(slot.dataset.idx)))
  })
  container.querySelectorAll('.tdb-fav-remove').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const idx = parseInt(btn.dataset.idx)
      const favs = getFavorites()
      favs.splice(idx, 1)
      saveFavorites(favs)
      renderFavorites()
    })
  })
}

function openWidgetPicker(slotIdx) {
  const existing = document.getElementById('tdb-picker-modal')
  if (existing) existing.remove()

  const role = localStorage.getItem('menuRole') || 'admin-reseau'
  const isAdherent = role === 'adherent-reseau'
  const widgets = getAllWidgets(isAdherent)

  const modal = document.createElement('div')
  modal.id = 'tdb-picker-modal'
  modal.className = 'modal tdb-picker-modal'
  modal.innerHTML = `
    <div class="tdb-picker-content">
      <div class="tdb-picker-header">
        <span>Choisir un indicateur</span>
        <button class="add-modal-close">×</button>
      </div>
      <div class="tdb-picker-grid">
        ${widgets.map(w => `
          <div class="tdb-picker-item" data-label="${w.label}" data-value="${w.value}">
            <div class="tdb-picker-item-label">${w.label}</div>
            <div class="tdb-picker-item-value">${w.value}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
  modal.querySelector('.add-modal-close').addEventListener('click', () => modal.remove())
  modal.querySelectorAll('.tdb-picker-item').forEach(item => {
    item.addEventListener('click', () => {
      const favs = getFavorites()
      while (favs.length <= slotIdx) favs.push(null)
      favs[slotIdx] = { label: item.dataset.label, value: item.dataset.value }
      saveFavorites(favs.filter(Boolean))
      renderFavorites()
      modal.remove()
    })
  })
  document.body.appendChild(modal)
}

// ─── Stats sections ───────────────────────────────────────────────────────────

function renderAllStats(isAdherent) {
  const container = document.getElementById('tdb-sections')
  if (!container) return
  container.innerHTML = ''

  const sections = buildSections(isAdherent)
  sections.forEach(section => {
    const el = document.createElement('div')
    el.className = 'tdb-section'
    el.innerHTML = `
      <div class="tdb-section-hd">
        <i class="bi ${section.icon}"></i> ${section.title}
        <a href="${section.href}" class="tdb-section-link">Voir <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="tdb-section-cards">
        ${section.cards.map(c => `
          <div class="stat-card${c.warn ? ' warn' : ''}">
            <div class="stat-label">${c.label}</div>
            <div class="stat-value">${c.value}</div>
          </div>
        `).join('')}
      </div>
    `
    container.appendChild(el)
  })
}

function buildSections(isAdherent) {
  const myPlots   = isAdherent ? plots.filter(p => p.orgId === ADHERENT_ORG_ID) : plots
  const mySensors = isAdherent ? sensors.filter(s => {
    const p = plots.find(pl => pl.id === s.parcelId)
    return p && p.orgId === ADHERENT_ORG_ID
  }) : sensors
  const myMembers = isAdherent
    ? members.filter(m => m.orgId === ADHERENT_ORG_ID || !m.orgId)
    : members

  const sections = []

  // Parcelles
  const totalArea = myPlots.reduce((s, p) => s + p.area, 0)
  const withSensors = myPlots.filter(p => mySensors.some(s => s.parcelId === p.id)).length
  const uniqueCultures = new Set(myPlots.map(p => p.crop)).size
  const withInteg = myPlots.filter(p => (p.integrations || []).length > 0).length
  sections.push({
    title: 'Parcelles', icon: 'bi-geo-alt', href: 'parcelles.html',
    cards: [
      { label: 'Parcelles',        value: myPlots.length },
      { label: 'Surface totale',   value: `${totalArea.toFixed(1)} ha` },
      { label: 'Cultures',         value: uniqueCultures },
      { label: 'Avec capteur',     value: withSensors },
      { label: 'Avec intégration', value: withInteg },
      { label: 'Sans capteur',     value: myPlots.length - withSensors, warn: myPlots.length - withSensors > 0 },
    ]
  })

  // Capteurs
  const withEvent = mySensors.filter(s => s.event).length
  const avgQuality = mySensors.length
    ? (mySensors.reduce((s, x) => s + x.networkQuality, 0) / mySensors.length).toFixed(1)
    : '—'
  const models = [...new Set(mySensors.map(s => s.model))].length
  sections.push({
    title: 'Capteurs', icon: 'bi-broadcast', href: 'capteurs.html',
    cards: [
      { label: 'Capteurs',          value: mySensors.length },
      { label: 'Modèles différents',value: models },
      { label: 'Avec événement',    value: withEvent, warn: withEvent > 0 },
      { label: 'Qualité réseau moy.', value: `${avgQuality} %` },
    ]
  })

  // Intégrations
  if (isAdherent) {
    sections.push({
      title: 'Intégrations', icon: 'bi-plug', href: 'integrations.html',
      cards: [
        { label: 'Mes intégrations actives', value: ADHERENT_ACTIVE_IDS.size },
        { label: 'Disponibles',              value: integrations.length },
      ]
    })
  } else {
    const activeExploit = integrations.filter(i => i.connected).length
    const adherPlots = plots.filter(p => p.orgId !== 1)
    const integNamesInAdher = new Set(adherPlots.flatMap(p => p.integrations || []))
    const activeAdher = integrations.filter(i => integNamesInAdher.has(i.name)).length
    sections.push({
      title: 'Intégrations', icon: 'bi-plug', href: 'integrations.html',
      cards: [
        { label: 'Actives exploitation', value: activeExploit },
        { label: 'Actives adhérents',    value: activeAdher },
        { label: 'Disponibles',          value: integrations.length },
      ]
    })
  }

  // Membres
  const myMembersCount = isAdherent ? 2 : members.length
  const owners = isAdherent ? 1 : members.filter(m => m.role === 'propriétaire').length
  const admins = isAdherent ? 1 : members.filter(m => m.role === 'admin').length
  sections.push({
    title: 'Membres', icon: 'bi-people', href: 'membres.html',
    cards: [
      { label: 'Membres',       value: myMembersCount },
      { label: 'Propriétaires', value: owners },
      { label: 'Admins',        value: admins },
    ]
  })

  // Adhérents (admin only)
  if (!isAdherent) {
    const total     = orgs.length
    const actifs    = orgs.filter(o => ['actif', 'actif en essai'].includes(o.statut)).length
    const enEssai   = orgs.filter(o => ['en essai', 'actif en essai'].includes(o.statut)).length
    const invites   = orgs.filter(o => ['invité', 'invitation en attente'].includes(o.statut)).length
    const inactifs  = orgs.filter(o => ['inactif', 'désactivé'].includes(o.statut)).length
    sections.push({
      title: 'Adhérents', icon: 'bi-person-plus', href: 'adherents.html',
      cards: [
        { label: 'Adhérents',  value: total },
        { label: 'Actifs',     value: actifs },
        { label: 'En essai',   value: enEssai },
        { label: 'Invités',    value: invites,  warn: invites > 0 },
        { label: 'Inactifs',   value: inactifs, warn: inactifs > 0 },
      ]
    })
  }

  return sections
}

function getAllWidgets(isAdherent) {
  const sections = buildSections(isAdherent)
  return sections.flatMap(s =>
    s.cards.map(c => ({ label: `${s.title} — ${c.label}`, value: c.value }))
  )
}
