import { orgs } from '../data/orgs.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { members } from '../data/members.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

const urlParams = new URLSearchParams(window.location.search)
const orgId = parseInt(urlParams.get('id'))
const org   = orgs.find(o => o.id === orgId)

const PLAN_STYLES = {
  'Essential': 'plan-essential',
  'Plus':      'plan-plus',
  'Expert':    'plan-expert'
}

const STATUT_STYLES = {
  'actif':                { cls: 'statut-actif',   icon: 'bi-check-circle-fill' },
  'inactif':              { cls: 'statut-inactif', icon: 'bi-circle' },
  'actif en essai':       { cls: 'statut-essai',   icon: 'bi-clock' },
  'invitation en attente':{ cls: 'statut-attente', icon: 'bi-envelope' },
  'demande en attente':   { cls: 'statut-attente', icon: 'bi-hourglass' }
}

// State for linked members (mutable UI list)
let linkedMemberIds = []

document.addEventListener('DOMContentLoaded', () => {
  if (!org) {
    document.querySelector('.detail-main').innerHTML = '<p style="padding:32px;color:var(--txt3)">Adhérent introuvable.</p>'
    return
  }

  updateBreadcrumb()
  initLinkedMembers()
  renderHeader()
  renderStats()
  renderParcels()
  renderSensors()
  renderPanel()
  initMiniMap()
  initPanelToggle()

  document.getElementById('modifier-btn').addEventListener('click', () => {
    alert('Fonctionnalité à venir — modification de l\'adhérent.')
  })
})

function initLinkedMembers() {
  linkedMemberIds = members
    .filter(m => m.orgIds.includes(org.id))
    .map(m => m.id)
}

function renderHeader() {
  document.title = `${org.name} — Weenat Proto`
  document.getElementById('org-title').textContent = org.name

  const planCls    = PLAN_STYLES[org.plan] || 'plan-essential'
  const statutInfo = STATUT_STYLES[org.statut] || { cls: 'statut-inactif', icon: 'bi-circle' }

  document.getElementById('org-plan-badge').innerHTML =
    `<span class="plan-badge ${planCls}">${org.plan}</span>`
  document.getElementById('org-statut-badge').innerHTML =
    `<span class="statut-badge ${statutInfo.cls}"><i class="bi ${statutInfo.icon}"></i> ${org.statut}</span>`
  document.getElementById('org-dept-badge').textContent =
    `${org.ville} — ${org.departement}`
}

function renderStats() {
  const orgParcels = plots.filter(p => p.orgId === org.id)
  const orgSensors = sensors.filter(s => s.orgId === org.id)
  const orgMembers = linkedMemberIds.length

  const surface = orgParcels.reduce((sum, p) => sum + (p.area || 0), 0)
  const withEvents = orgSensors.filter(s => s.event).length

  const cards = [
    { label: 'Parcelles',  value: orgParcels.length },
    { label: 'Surface',    value: `${surface.toFixed(1)} ha` },
    { label: 'Capteurs',   value: orgSensors.length },
    { label: 'Évènements', value: withEvents, warn: withEvents > 0 },
    { label: 'Membres',    value: orgMembers }
  ]

  document.getElementById('org-stats-cards').innerHTML = cards.map(c => `
    <div class="stat-card${c.warn ? ' warn' : ''}">
      <div class="stat-label">${c.label}</div>
      <div class="stat-value">${c.value}</div>
    </div>
  `).join('')
}

function renderParcels() {
  const orgParcels = plots.filter(p => p.orgId === org.id)
  const container  = document.getElementById('org-parcels-list')
  if (!orgParcels.length) {
    container.innerHTML = '<p class="empty-hint">Aucune parcelle associée.</p>'
    return
  }
  container.innerHTML = `
    <table style="width:100%;border-collapse:collapse">
      <thead><tr>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Parcelle</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Culture</th>
        <th style="text-align:right;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Surface</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Texture</th>
      </tr></thead>
      <tbody>
        ${orgParcels.map(p => `
          <tr class="clickable-row" data-href="parcelle-detail.html?id=${p.id}" style="cursor:pointer">
            <td style="padding:6px 10px;font-size:12px"><a href="parcelle-detail.html?id=${p.id}" class="admin-link admin-link--name">${p.name}</a></td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${p.crop || '—'}</td>
            <td style="padding:6px 10px;font-size:12px;text-align:right;color:var(--txt2)">${p.area} ha</td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${p.texture || '—'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `
  container.querySelectorAll('.clickable-row').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.tagName === 'A') return
      window.location.href = row.dataset.href
    })
  })
}

function renderSensors() {
  const orgSensors = sensors.filter(s => s.orgId === org.id)
  const container  = document.getElementById('org-sensors-list')
  if (!orgSensors.length) {
    container.innerHTML = '<p class="empty-hint">Aucun capteur associé.</p>'
    return
  }
  container.innerHTML = `
    <table style="width:100%;border-collapse:collapse">
      <thead><tr>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">N° série</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Modèle</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Télécom</th>
        <th style="text-align:right;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Qualité réseau</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Évènement</th>
      </tr></thead>
      <tbody>
        ${orgSensors.map(s => `
          <tr class="clickable-row" data-href="capteur-detail.html?id=${s.id}" style="cursor:pointer">
            <td style="padding:6px 10px;font-size:12px"><a href="capteur-detail.html?id=${s.id}" class="admin-link">${s.serial}</a></td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${s.model}</td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${s.telecom}</td>
            <td style="padding:6px 10px;font-size:12px;text-align:right;color:var(--txt2)">${s.networkQuality}%</td>
            <td style="padding:6px 10px;font-size:12px;color:${s.event ? 'var(--warn)' : 'var(--txt3)'}">${s.event || '—'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `
  container.querySelectorAll('.clickable-row').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.tagName === 'A') return
      window.location.href = row.dataset.href
    })
  })
}

function renderPanel() {
  renderPanelIdent()
  renderPanelLoc()
  renderPanelMembres()
}

function renderPanelIdent() {
  const rows = [
    ['Code adhérent',    org.codeAdherent],
    ['Propriétaire',     `${org.prenomProprietaire} ${org.nomProprietaire}`],
    ['Plan',             org.plan],
    ['Date adhésion',    formatDate(org.dateAdhesion)],
    ['Email',            `<a href="mailto:${org.email}" class="admin-link">${org.email}</a>`],
    ['Téléphone',        org.telephone || '—'],
    ['SIRET',            org.siret ? `<span style="font-family:var(--mono);font-size:11px">${org.siret}</span>` : '—'],
  ]
  document.getElementById('panel-ident').innerHTML = rows.map(([k, v]) =>
    `<div class="panel-row"><span class="panel-key">${k}</span><span class="panel-val">${v}</span></div>`
  ).join('')
}

function renderPanelLoc() {
  const rows = [
    ['Adresse',     org.adresse || '—'],
    ['Ville',       org.ville],
    ['Département', org.departement],
  ]
  document.getElementById('panel-loc').innerHTML = rows.map(([k, v]) =>
    `<div class="panel-row"><span class="panel-key">${k}</span><span class="panel-val">${v}</span></div>`
  ).join('')
}

function renderPanelMembres() {
  const membresEl = document.getElementById('panel-membres')
  const linked    = members.filter(m => linkedMemberIds.includes(m.id))

  if (!linked.length) {
    membresEl.innerHTML = '<p style="font-size:12px;color:var(--txt3)">Aucun membre associé.</p>'
  } else {
    membresEl.innerHTML = linked.map(m => `
      <div class="panel-membre-row" data-id="${m.id}" style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--bdr2)">
        <div>
          <span style="font-size:12px;font-weight:500">${m.prenom} ${m.nom}</span>
          <span class="member-role-badge" style="margin-left:6px;background:var(--bdr2);color:var(--txt2)">${m.role}</span>
        </div>
        <button class="remove-membre-btn" data-id="${m.id}" title="Retirer ce membre" style="background:none;border:none;cursor:pointer;color:var(--txt3);font-size:14px;padding:2px 4px">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join('')
  }

  // Populate add-select with non-linked members
  const select = document.getElementById('add-membre-select')
  select.innerHTML = '<option value="">Ajouter un membre…</option>'
  members
    .filter(m => !linkedMemberIds.includes(m.id))
    .forEach(m => {
      const opt = document.createElement('option')
      opt.value   = m.id
      opt.textContent = `${m.prenom} ${m.nom} (${m.role})`
      select.appendChild(opt)
    })

  // Remove handlers
  membresEl.querySelectorAll('.remove-membre-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id)
      linkedMemberIds = linkedMemberIds.filter(x => x !== id)
      renderPanelMembres()
      renderStats()
    })
  })

  // Add handler
  document.getElementById('add-membre-btn').onclick = () => {
    const id = parseInt(select.value)
    if (!id || linkedMemberIds.includes(id)) return
    linkedMemberIds.push(id)
    renderPanelMembres()
    renderStats()
  }
}

function initMiniMap() {
  if (!org.lat || !org.lng) return
  const mapEl = document.getElementById('org-mini-map')
  mapEl.style.height = '140px'

  const map = L.map(mapEl, { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false })
  map.setView([org.lat, org.lng], 12)

  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 19 }
  ).addTo(map)

  L.circleMarker([org.lat, org.lng], {
    radius: 7, fillColor: '#0172A4', fillOpacity: 1, color: '#fff', weight: 2
  }).addTo(map)
}

function initPanelToggle() {
  const panel  = document.getElementById('detail-panel')
  const layout = document.getElementById('detail-layout')
  document.getElementById('panel-toggle').addEventListener('click', () => {
    panel.classList.toggle('collapsed')
    layout.classList.toggle('panel-collapsed')
  })
}

function formatDate(iso) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}
