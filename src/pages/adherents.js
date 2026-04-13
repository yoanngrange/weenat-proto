import { orgs } from '../data/orgs.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { members } from '../data/members.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

const STATUT_STYLES = {
  'actif':                { cls: 'statut-actif',     icon: 'bi-check-circle-fill' },
  'inactif':              { cls: 'statut-inactif',   icon: 'bi-circle' },
  'actif en essai':       { cls: 'statut-essai',     icon: 'bi-clock' },
  'invitation en attente':{ cls: 'statut-attente',   icon: 'bi-envelope' },
  'demande en attente':   { cls: 'statut-attente',   icon: 'bi-hourglass' }
}

const PLAN_STYLES = {
  'Essential': 'plan-essential',
  'Plus':      'plan-plus',
  'Expert':    'plan-expert'
}

let selectedPlans   = []
let selectedStatuts = ['actif']
let currentSort     = { column: null, direction: 'asc' }

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  initFilters()
  render()
})

// ── Filters ──────────────────────────────────────────────────────────────────

function initFilters() {
  const plans   = [...new Set(orgs.map(o => o.plan))].sort()
  const statuts = [...new Set(orgs.map(o => o.statut))].sort()

  makeCheckboxPanel('panel-plan',   plans,   v => { selectedPlans   = v }, 'badge-plan')
  makeCheckboxPanel('panel-statut', statuts, v => { selectedStatuts = v }, 'badge-statut', ['actif'])

  document.querySelectorAll('.filter-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const dd   = btn.closest('.filter-dropdown')
      const open = dd.classList.contains('open')
      document.querySelectorAll('.filter-dropdown.open').forEach(d => d.classList.remove('open'))
      if (!open) dd.classList.add('open')
    })
  })
  document.addEventListener('click', () => {
    document.querySelectorAll('.filter-dropdown.open').forEach(d => d.classList.remove('open'))
  })

  document.getElementById('adherents-table').addEventListener('click', e => {
    const th = e.target.closest('th[data-column]')
    if (!th) return
    const col = th.dataset.column
    if (currentSort.column === col) {
      currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc'
    } else {
      currentSort.column    = col
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
  let list = orgs
  if (selectedPlans.length)   list = list.filter(o => selectedPlans.includes(o.plan))
  if (selectedStatuts.length) list = list.filter(o => selectedStatuts.includes(o.statut))
  return list
}

function render() {
  const list = getFiltered()
  updateStats(list)

  if (currentSort.column) {
    list.sort((a, b) => {
      const av = sortKey(a, currentSort.column)
      const bv = sortKey(b, currentSort.column)
      const an = parseFloat(av), bn = parseFloat(bv)
      const cmp = (!isNaN(an) && !isNaN(bn))
        ? (an - bn)
        : av.localeCompare(bv, 'fr')
      return currentSort.direction === 'asc' ? cmp : -cmp
    })
  }

  const tbody = document.querySelector('#adherents-table tbody')
  tbody.innerHTML = ''

  if (!list.length) {
    tbody.innerHTML = '<tr><td colspan="11" style="padding:32px;text-align:center;color:var(--txt3)">Aucun adhérent ne correspond aux filtres.</td></tr>'
    return
  }

  list.forEach(org => {
    const orgParcels = plots.filter(p => p.orgId === org.id)
    const orgSensors = sensors.filter(s => s.orgId === org.id)
    const orgMembers = members.filter(m => m.orgIds.includes(org.id))

    const statutStyle = STATUT_STYLES[org.statut] || { cls: 'statut-inactif', icon: 'bi-circle' }
    const planCls     = PLAN_STYLES[org.plan] || 'plan-essential'

    const membresHtml = orgMembers.length
      ? orgMembers.map(m => `<a href="adherent-detail.html?id=${org.id}" class="admin-link">${m.prenom} ${m.nom}</a>`).join('<br>')
      : '<span class="tag-none">—</span>'

    const tr = document.createElement('tr')
    tr.classList.add('clickable-row')
    tr.dataset.href = `adherent-detail.html?id=${org.id}`
    tr.innerHTML = `
      <td><a href="adherent-detail.html?id=${org.id}" class="admin-link admin-link--name">${org.name}</a></td>
      <td class="member-email">${org.codeAdherent}</td>
      <td class="member-name">${org.prenomProprietaire} ${org.nomProprietaire}</td>
      <td><span class="plan-badge ${planCls}">${org.plan}</span></td>
      <td><span class="statut-badge ${statutStyle.cls}"><i class="bi ${statutStyle.icon}"></i> ${org.statut}</span></td>
      <td class="member-email">${formatDate(org.dateAdhesion)}</td>
      <td class="member-email">${org.ville}</td>
      <td class="member-email">${org.departement}</td>
      <td class="admin-links-cell">${membresHtml}</td>
      <td class="num">${orgSensors.length}</td>
      <td class="num">${orgParcels.length}</td>
    `
    tbody.appendChild(tr)
  })

  document.querySelectorAll('#adherents-table .clickable-row').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.tagName === 'A') return
      window.location.href = row.dataset.href
    })
  })

  document.querySelectorAll('#adherents-table th[data-column]').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc')
    if (th.dataset.column === currentSort.column) {
      th.classList.add(`sort-${currentSort.direction}`)
    }
  })
}

function sortKey(o, col) {
  if (col === 'name')       return o.name.toLowerCase()
  if (col === 'code')       return o.codeAdherent
  if (col === 'proprietaire') return `${o.nomProprietaire} ${o.prenomProprietaire}`.toLowerCase()
  if (col === 'plan')       return o.plan
  if (col === 'statut')     return o.statut
  if (col === 'date')       return o.dateAdhesion || ''
  if (col === 'ville')      return o.ville.toLowerCase()
  if (col === 'dept')       return o.departement.toLowerCase()
  if (col === 'capteurs')   return String(sensors.filter(s => s.orgId === o.id).length)
  if (col === 'parcelles')  return String(plots.filter(p => p.orgId === o.id).length)
  return ''
}

function formatDate(iso) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function updateStats(list) {
  const total       = list.length
  const actifs      = list.filter(o => o.statut === 'actif').length
  const enEssai     = list.filter(o => o.statut === 'actif en essai').length
  const inactifs    = list.filter(o => o.statut === 'inactif').length
  const enAttente   = list.filter(o => ['invitation en attente','demande en attente'].includes(o.statut)).length
  const byPlan = ['Essential','Plus','Expert'].map(p => ({
    label: p, value: list.filter(o => o.plan === p).length
  }))

  document.getElementById('stats-cards').innerHTML = [
    { label: 'Adhérents',   value: total },
    { label: 'Actifs',      value: actifs },
    { label: 'En essai',    value: enEssai },
    { label: 'En attente',  value: enAttente, warn: enAttente > 0 },
    { label: 'Inactifs',    value: inactifs,  warn: inactifs > 0 },
    ...byPlan.map(p => ({ label: p.label, value: p.value }))
  ].map(s => `
    <div class="stat-card${s.warn ? ' warn' : ''}">
      <div class="stat-label">${s.label}</div>
      <div class="stat-value">${s.value}</div>
    </div>
  `).join('')
}
