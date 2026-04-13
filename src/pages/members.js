import { members } from '../data/members.js'
import { orgs } from '../data/orgs.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

const ROLE_COLORS = {
  'propriétaire': 'var(--txt)',
  'admin':        'var(--pri)',
  'agent':        'var(--ok)',
  'lecteur':      'var(--txt2)'
}

let selectedRoles   = []
let selectedStatuts = ['actif'] // actif filtré par défaut
let currentSort     = { column: null, direction: 'asc' }

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  initFilters()
  render()
})

// ── Filters ──────────────────────────────────────────────────────────────────

function initFilters() {
  // Rôle
  const roles = ['propriétaire', 'admin', 'agent', 'lecteur']
  makeCheckboxPanel('panel-role', roles, v => { selectedRoles = v }, 'badge-role')

  // Statut — pré-cocher "actif"
  makeCheckboxPanel('panel-statut', ['actif', 'inactif'], v => { selectedStatuts = v }, 'badge-statut', ['actif'])

  // Toggle dropdowns
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

  // Sort on th click
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
  // Init with pre-checked values
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
  let list = members
  if (selectedRoles.length)   list = list.filter(m => selectedRoles.includes(m.role))
  if (selectedStatuts.length) list = list.filter(m => selectedStatuts.includes(m.statut))
  return list
}

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

  const tbody = document.querySelector('#members-table tbody')
  tbody.innerHTML = ''

  if (!list.length) {
    tbody.innerHTML = '<tr><td colspan="7" class="empty-state" style="padding:32px;text-align:center;color:var(--txt3)">Aucun membre ne correspond aux filtres.</td></tr>'
    return
  }

  list.forEach(m => {
    const memberOrgs    = orgs.filter(o => m.orgIds.includes(o.id))
    const memberParcels = plots.filter(p => m.parcelIds.includes(p.id))
    const memberSensors = sensors.filter(s => m.parcelIds.includes(s.parcelId))

    const orgsHtml = memberOrgs.length
      ? memberOrgs.map(o => `<a href="adherents.html" class="admin-link">${o.name}</a>`).join('<br>')
      : '<span class="tag-none">—</span>'

    const parcelsHtml = memberParcels.length
      ? memberParcels.map(p => `<a href="parcelle-detail.html?id=${p.id}" class="admin-link">${p.name}</a>`).join('<br>')
      : '<span class="tag-none">—</span>'

    const sensorsHtml = memberSensors.length
      ? memberSensors.map(s => `<a href="capteur-detail.html?id=${s.id}" class="admin-link">${s.serial} <span class="member-sensor-model">${s.model}</span></a>`).join('<br>')
      : '<span class="tag-none">—</span>'

    const color = ROLE_COLORS[m.role] || 'var(--txt2)'
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td><span class="member-name">${m.prenom} ${m.nom}</span></td>
      <td class="member-email">${m.email}</td>
      <td><span class="member-role-badge" style="background:${color}18;color:${color}">${m.role}</span></td>
      <td class="admin-links-cell">${orgsHtml}</td>
      <td class="admin-links-cell">${parcelsHtml}</td>
      <td class="admin-links-cell">${sensorsHtml}</td>
      <td>${statutBadge(m.statut)}</td>
    `
    tbody.appendChild(tr)
  })

  // Update sort indicators
  document.querySelectorAll('#members-table th[data-column]').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc')
    if (th.dataset.column === currentSort.column) {
      th.classList.add(`sort-${currentSort.direction}`)
    }
  })
}

function sortKey(m, col) {
  if (col === 'nom')    return `${m.nom} ${m.prenom}`.toLowerCase()
  if (col === 'email')  return m.email.toLowerCase()
  if (col === 'role')   return m.role
  if (col === 'statut') return m.statut
  return ''
}

function statutBadge(s) {
  return s === 'actif'
    ? '<span class="statut-badge statut-actif"><i class="bi bi-check-circle-fill"></i> Actif</span>'
    : '<span class="statut-badge statut-inactif"><i class="bi bi-circle"></i> Inactif</span>'
}

function updateStats(list) {
  const total    = list.length
  const actifs   = list.filter(m => m.statut === 'actif').length
  const inactifs = total - actifs
  const byRole   = ['propriétaire', 'admin', 'agent', 'lecteur'].map(r => ({
    role: r, count: list.filter(m => m.role === r).length
  }))
  document.getElementById('stats-cards').innerHTML = [
    { label: 'Membres', value: total },
    { label: 'Actifs', value: actifs },
    { label: 'Inactifs', value: inactifs, warn: inactifs > 0 },
    ...byRole.map(r => ({ label: cap(r.role), value: r.count }))
  ].map(s => `
    <div class="stat-card${s.warn ? ' warn' : ''}">
      <div class="stat-label">${s.label}</div>
      <div class="stat-value">${s.value}</div>
    </div>
  `).join('')
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1) }
