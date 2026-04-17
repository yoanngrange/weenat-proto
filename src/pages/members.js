import { members } from '../data/members.js'
import { orgs } from '../data/orgs.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { getStoredMembers, saveMembers } from '../data/store.js'

const ROLE_COLORS = {
  'propriétaire': 'var(--txt)',
  'admin':        'var(--pri)',
  'agent':        'var(--ok)',
  'lecteur':      'var(--txt2)'
}

const ROLES = ['propriétaire', 'admin', 'agent', 'lecteur']
const STATUTS = ['actif', 'inactif', 'invité', 'désactivé']

// Local mutable copy — restored from localStorage if available
const _stored = getStoredMembers()
const localMembers = _stored || members.map((m, i) => ({
  ...m,
  statut: m.statut || (
    m.role === 'propriétaire' ? 'actif' :
    i % 7 === 0 ? 'inactif' :
    i % 11 === 0 ? 'invité' :
    i % 17 === 0 ? 'désactivé' : 'actif'
  )
}))

let selectedRoles   = []
let selectedStatuts = ['actif', 'invité']
let currentSort     = { column: null, direction: 'asc' }
let selectedIds     = new Set()

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  initFilters()
  render()
})

// ── Filters ──────────────────────────────────────────────────────────────────

function initFilters() {
  makeCheckboxPanel('panel-role',   ROLES,   v => { selectedRoles   = v }, 'badge-role')
  makeCheckboxPanel('panel-statut', STATUTS, v => { selectedStatuts = v }, 'badge-statut', ['actif', 'invité'])

  document.querySelectorAll('.filter-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const dd = btn.closest('.filter-dropdown')
      const open = dd.classList.contains('open')
      document.querySelectorAll('.filter-dropdown.open').forEach(d => d.classList.remove('open'))
      if (!open) dd.classList.add('open')
    })
  })
  document.addEventListener('click', () => {
    document.querySelectorAll('.filter-dropdown.open').forEach(d => d.classList.remove('open'))
  })

  document.getElementById('select-all-members')?.addEventListener('change', function () {
    const allIds = getFiltered().map(m => m.id)
    if (this.checked) allIds.forEach(id => selectedIds.add(id))
    else selectedIds.clear()
    render()
  })

  document.getElementById('members-table').addEventListener('click', e => {
    const th = e.target.closest('th[data-column]')
    if (!th) return
    const col = th.dataset.column
    if (currentSort.column === col) {
      currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc'
    } else {
      currentSort.column = col
      currentSort.direction = 'asc'
    }
    render()
  })
}

function makeCheckboxPanel(panelId, values, onChange, badgeId, preChecked = []) {
  const panel = document.getElementById(panelId)
  if (!panel) return
  panel.innerHTML = values.map(v =>
    `<label><input type="checkbox" value="${v}"${preChecked.includes(v) ? ' checked' : ''}> ${v}</label>`
  ).join('')
  if (preChecked.length) onChange(preChecked)
  updateBadge(badgeId, preChecked.length)

  panel.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(panel.querySelectorAll('input:checked')).map(i => i.value)
      onChange(checked)
      updateBadge(badgeId, checked.length)
      render()
    })
  })
}

function updateBadge(id, count) {
  const el = document.getElementById(id)
  if (!el) return
  el.textContent = count
  el.hidden = !count
}

// ── Render ────────────────────────────────────────────────────────────────────

function getFiltered() {
  let list = localMembers
  if (selectedRoles.length)   list = list.filter(m => selectedRoles.includes(m.role))
  if (selectedStatuts.length) list = list.filter(m => selectedStatuts.includes(m.statut))
  return list
}

function persist() { saveMembers(localMembers) }

function render() {
  const list = getFiltered()
  updateStats(list)

  if (currentSort.column) {
    list.sort((a, b) => {
      const av = sortKey(a, currentSort.column)
      const bv = sortKey(b, currentSort.column)
      const cmp = av.localeCompare(bv, 'fr')
      return currentSort.direction === 'asc' ? cmp : -cmp
    })
  }

  // Update select-all checkbox state
  const allIds = list.map(m => m.id)
  const selAll = document.getElementById('select-all-members')
  if (selAll) {
    selAll.checked = allIds.length > 0 && allIds.every(id => selectedIds.has(id))
    selAll.indeterminate = !selAll.checked && allIds.some(id => selectedIds.has(id))
  }

  const tbody = document.querySelector('#members-table tbody')
  tbody.innerHTML = ''

  if (!list.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="padding:32px;text-align:center;color:var(--txt3)">Aucun membre ne correspond aux filtres.</td></tr>'
    updateActionBar()
    return
  }

  list.forEach(m => {
    const memberOrgs    = orgs.filter(o => m.orgIds.includes(o.id))
    const memberParcels = plots.filter(p => m.parcelIds.includes(p.id))
    const excluded = m.excludedSensorIds || []
    const memberSensors = sensors.filter(s => m.parcelIds.includes(s.parcelId) && !excluded.includes(s.id))

    const orgsHtml = memberOrgs.length
      ? memberOrgs.map(o => `<div class="admin-item-row"><a href="adherents.html" class="admin-link">${o.name}</a><button class="icon-btn remove-org" data-member-id="${m.id}" data-org-id="${o.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join('')
      : '<span class="tag-none">—</span>'
    const parcelsHtml = memberParcels.length
      ? memberParcels.map(p => `<div class="admin-item-row"><a href="parcelle-detail.html?id=${p.id}" class="admin-link">${p.name}</a><button class="icon-btn remove-parcel" data-member-id="${m.id}" data-parcel-id="${p.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join('')
      : '<span class="tag-none">—</span>'
    const sensorsHtml = memberSensors.length
      ? memberSensors.map(s => `<div class="admin-item-row"><a href="capteur-detail.html?id=${s.id}" class="admin-link">${s.serial} <span class="member-sensor-model">${s.model}</span></a><button class="icon-btn remove-sensor" data-member-id="${m.id}" data-sensor-id="${s.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join('')
      : '<span class="tag-none">—</span>'

    const isDisabled = m.statut === 'désactivé'
    const tr = document.createElement('tr')
    if (isDisabled) tr.style.opacity = '0.5'
    if (selectedIds.has(m.id)) tr.classList.add('row-selected')
    tr.innerHTML = `
      <td class="col-check"><input type="checkbox" class="row-cb" data-id="${m.id}"${selectedIds.has(m.id) ? ' checked' : ''}></td>
      <td><span class="member-name">${m.prenom} ${m.nom}</span><div class="member-email-sub">${m.email}</div></td>
      <td>${m.role}</td>
      <td class="admin-links-cell">${orgsHtml}</td>
      <td class="admin-links-cell">${parcelsHtml}</td>
      <td class="admin-links-cell">${sensorsHtml}</td>
      <td>${statutBadge(m.statut)}</td>
    `
    tbody.appendChild(tr)
  })

  // Row checkbox handlers
  tbody.querySelectorAll('.row-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      const id = parseInt(cb.dataset.id)
      if (cb.checked) selectedIds.add(id); else selectedIds.delete(id)
      render()
    })
  })

  // Remove association handlers
  tbody.querySelectorAll('.remove-org').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const mem = localMembers.find(x => x.id === parseInt(btn.dataset.memberId))
      if (mem) mem.orgIds = mem.orgIds.filter(id => id !== parseInt(btn.dataset.orgId))
      persist(); render()
    })
  })
  tbody.querySelectorAll('.remove-parcel').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const mem = localMembers.find(x => x.id === parseInt(btn.dataset.memberId))
      if (mem) mem.parcelIds = mem.parcelIds.filter(id => id !== parseInt(btn.dataset.parcelId))
      persist(); render()
    })
  })
  tbody.querySelectorAll('.remove-sensor').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const mem = localMembers.find(x => x.id === parseInt(btn.dataset.memberId))
      if (mem) {
        if (!mem.excludedSensorIds) mem.excludedSensorIds = []
        const sensorId = parseInt(btn.dataset.sensorId)
        if (!mem.excludedSensorIds.includes(sensorId)) mem.excludedSensorIds.push(sensorId)
      }
      persist(); render()
    })
  })

  updateActionBar()

  // Sort indicators
  document.querySelectorAll('#members-table th[data-column]').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc')
    if (th.dataset.column === currentSort.column) th.classList.add(`sort-${currentSort.direction}`)
  })
}

function updateActionBar() {
  let bar = document.getElementById('members-action-bar')
  if (!bar) {
    bar = document.createElement('div')
    bar.id = 'members-action-bar'
    bar.className = 'bulk-action-bar hidden'
    document.getElementById('stats-cards').insertAdjacentElement('afterend', bar)
  }

  if (selectedIds.size === 0) {
    bar.classList.add('hidden')
    return
  }
  bar.classList.remove('hidden')
  bar.innerHTML = `
    <span class="bulk-count">${selectedIds.size} sélectionné${selectedIds.size > 1 ? 's' : ''}</span>
    <div class="bulk-actions">
      <label class="bulk-action-group">
        <span>Rôle</span>
        <select id="bulk-role-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${ROLES.map(r => `<option value="${r}">${r}</option>`).join('')}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Organisation</span>
        <select id="bulk-org-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${orgs.map(o => `<option value="${o.id}">${o.name}</option>`).join('')}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Parcelle</span>
        <select id="bulk-plot-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${plots.slice(0,30).map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Capteur</span>
        <select id="bulk-sensor-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${sensors.slice(0,30).map(s => `<option value="${s.id}">${s.serial} (${s.model})</option>`).join('')}
        </select>
      </label>
      <button id="bulk-delete-btn" class="btn-secondary" style="color:var(--err)"><i class="bi bi-trash"></i> Supprimer</button>
      <button id="bulk-save-btn" class="btn-secondary" style="color:var(--ok)"><i class="bi bi-check-lg"></i> Enregistrer</button>
      <button id="bulk-cancel-btn" class="btn-secondary">Annuler</button>
    </div>
  `

  bar.querySelector('#bulk-role-sel')?.addEventListener('change', e => {
    if (!e.target.value) return
    selectedIds.forEach(id => { const m = localMembers.find(x => x.id === id); if (m) m.role = e.target.value })
    persist(); render()
  })
  bar.querySelector('#bulk-org-sel')?.addEventListener('change', e => {
    const orgId = parseInt(e.target.value); if (!orgId) return
    selectedIds.forEach(id => {
      const m = localMembers.find(x => x.id === id)
      if (m && !m.orgIds.includes(orgId)) m.orgIds = [...m.orgIds, orgId]
    })
    persist(); showToast('Organisation associée.'); render()
  })
  bar.querySelector('#bulk-plot-sel')?.addEventListener('change', e => {
    const plotId = parseInt(e.target.value); if (!plotId) return
    selectedIds.forEach(id => {
      const m = localMembers.find(x => x.id === id)
      if (m && !m.parcelIds.includes(plotId)) m.parcelIds = [...m.parcelIds, plotId]
    })
    persist(); showToast('Parcelle associée.'); render()
  })
  bar.querySelector('#bulk-sensor-sel')?.addEventListener('change', e => {
    showToast('Capteur associé.'); render()
  })
  bar.querySelector('#bulk-delete-btn')?.addEventListener('click', () => {
    if (!confirm(`Supprimer ${selectedIds.size} membre(s) ?`)) return
    selectedIds.forEach(id => {
      const idx = localMembers.findIndex(x => x.id === id)
      if (idx !== -1) localMembers.splice(idx, 1)
    })
    selectedIds.clear(); persist(); render()
  })
  bar.querySelector('#bulk-save-btn')?.addEventListener('click', () => {
    persist(); showToast('Modifications enregistrées.')
  })
  bar.querySelector('#bulk-cancel-btn')?.addEventListener('click', () => {
    selectedIds.clear(); render()
  })
}

function sortKey(m, col) {
  if (col === 'nom')      return `${m.nom} ${m.prenom}`.toLowerCase()
  if (col === 'email')    return m.email.toLowerCase()
  if (col === 'role')     return m.role
  if (col === 'statut')   return m.statut
  if (col === 'orgs')     return String(m.orgIds.length).padStart(6, '0')
  if (col === 'parcelles') return String(m.parcelIds.length).padStart(6, '0')
  if (col === 'capteurs') {
    const excluded = m.excludedSensorIds || []
    const count = sensors.filter(s => m.parcelIds.includes(s.parcelId) && !excluded.includes(s.id)).length
    return String(count).padStart(6, '0')
  }
  return ''
}

function statutBadge(s) {
  const map = {
    'actif':      '<span class="statut-badge statut-actif"><i class="bi bi-check-circle-fill"></i> Actif</span>',
    'inactif':    '<span class="statut-badge statut-inactif"><i class="bi bi-circle"></i> Inactif</span>',
    'invité':     '<span class="statut-badge statut-invite"><i class="bi bi-envelope"></i> Invité</span>',
    'désactivé':  '<span class="statut-badge statut-disabled"><i class="bi bi-slash-circle"></i> Désactivé</span>',
  }
  return map[s] || `<span class="statut-badge">${s}</span>`
}

function updateStats(list) {
  const total      = list.length
  const actifs     = list.filter(m => m.statut === 'actif').length
  const inactifs   = list.filter(m => m.statut === 'inactif').length
  const invites    = list.filter(m => m.statut === 'invité').length
  const desactives = list.filter(m => m.statut === 'désactivé').length

  document.getElementById('stats-cards').innerHTML = [
    { label: 'Membres', value: total },
    { label: 'Actifs', value: actifs },
    { label: 'Inactifs', value: inactifs, warn: inactifs > 0 },
    { label: 'Invités', value: invites },
    { label: 'Désactivés', value: desactives, warn: desactives > 0 },
  ].map(s => `
    <div class="stat-card${s.warn ? ' warn' : ''}">
      <div class="stat-label">${s.label}</div>
      <div class="stat-value">${s.value}</div>
    </div>
  `).join('')
}

function showToast(msg) {
  const t = document.createElement('div')
  t.className = 'toast'
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.remove(), 3000)
}
