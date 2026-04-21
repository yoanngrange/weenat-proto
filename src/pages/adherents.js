import { orgs } from '../data/orgs.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { members } from '../data/members.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { getStoredOrgs, saveOrgs } from '../data/store.js'

// Map raw org statut → simplified filter key
const STATUT_SIMPLIFIED = {
  'actif':                 'actif',
  'actif en essai':        'en essai',
  'en essai':              'en essai',
  'invité':                'invité',
  'invitation en attente': 'invité',
  'inactif':               'inactif',
  'désactivé':             'inactif',
  'demande en attente':    "demande d'essai",
}

const STATUT_STYLES = {
  'actif':           { cls: 'statut-actif',   icon: 'bi-check-circle-fill' },
  'en essai':        { cls: 'statut-essai',   icon: 'bi-clock' },
  'invité':          { cls: 'statut-invite',  icon: 'bi-envelope' },
  'inactif':         { cls: 'statut-inactif', icon: 'bi-circle' },
  "demande d'essai": { cls: 'statut-attente', icon: 'bi-hourglass' },
}

const STATUT_FILTER_OPTIONS = ['actif', 'en essai', 'invité', "demande d'essai", 'inactif']

function orgStatutSimplified(org) {
  return STATUT_SIMPLIFIED[org.statut] || 'inactif'
}


// Local mutable copy — restored from localStorage if available
const _stored = getStoredOrgs()
const localOrgs = _stored || orgs.map((o, i) => {
  const copy = { ...o }
  if (i % 9 === 0)  copy.statut = 'en essai'
  if (i % 13 === 0) copy.statut = 'invité'
  if (i % 19 === 0) copy.statut = 'désactivé'
  return copy
})

const PLANS = ['Essential', 'Plus', 'Expert']

let selectedPlans   = []
let selectedStatuts = ['actif', 'en essai', 'invité', "demande d'essai"]
let currentSort     = { column: null, direction: 'asc' }
let selectedIds     = new Set()

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  initFilters()
  render()
})

// ── Filters ──────────────────────────────────────────────────────────────────

function initFilters() {
  const plans = [...new Set(localOrgs.map(o => o.plan))].sort()

  makeCheckboxPanel('panel-plan',   plans,   v => { selectedPlans   = v }, 'badge-plan')
  makeCheckboxPanel('panel-statut', STATUT_FILTER_OPTIONS, v => { selectedStatuts = v }, 'badge-statut', ['actif', 'en essai', 'invité', "demande d'essai"])

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

  document.getElementById('select-all-adherents')?.addEventListener('change', function () {
    const allIds = getFiltered().map(o => o.id)
    if (this.checked) allIds.forEach(id => selectedIds.add(id))
    else selectedIds.clear()
    render()
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
  let list = localOrgs
  if (selectedPlans.length)   list = list.filter(o => selectedPlans.includes(o.plan))
  if (selectedStatuts.length) list = list.filter(o => selectedStatuts.includes(orgStatutSimplified(o)))
  return list
}

function persist() { saveOrgs(localOrgs) }

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

  // Update select-all checkbox state
  const allIds = list.map(o => o.id)
  const selAll = document.getElementById('select-all-adherents')
  if (selAll) {
    selAll.checked = allIds.length > 0 && allIds.every(id => selectedIds.has(id))
    selAll.indeterminate = !selAll.checked && allIds.some(id => selectedIds.has(id))
  }

  const tbody = document.querySelector('#adherents-table tbody')
  tbody.innerHTML = ''

  if (!list.length) {
    tbody.innerHTML = '<tr><td colspan="12" style="padding:32px;text-align:center;color:var(--txt3)">Aucun adhérent ne correspond aux filtres.</td></tr>'
    updateActionBar()
    return
  }

  list.forEach(org => {
    const orgParcels = plots.filter(p => p.orgId === org.id)
    const orgSensors = sensors.filter(s => s.orgId === org.id)
    const orgMembers = members.filter(m => m.orgIds.includes(org.id))

    const simplified  = orgStatutSimplified(org)
    const statutStyle = STATUT_STYLES[simplified] || { cls: 'statut-inactif', icon: 'bi-circle' }
    const isDisabled  = simplified === 'inactif'

    const firstMember = orgMembers[0]
    const membresHtml = firstMember
      ? `<div class="admin-item-row"><a href="adherent-detail.html?id=${org.id}" class="admin-link">${firstMember.prenom} ${firstMember.nom}</a><button class="icon-btn remove-member-org" data-member-id="${firstMember.id}" data-org-id="${org.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`
      : '<span class="tag-none">—</span>'

    const currentPropNom = `${org.prenomProprietaire} ${org.nomProprietaire}`.trim()
    let proprietaireHtml
    if (orgMembers.length <= 1) {
      const name = orgMembers[0] ? `${orgMembers[0].prenom} ${orgMembers[0].nom}` : currentPropNom
      proprietaireHtml = `<span class="member-name">${name || '—'}</span>`
    } else {
      proprietaireHtml = `<select class="inline-edit adh-prop-select" data-id="${org.id}">
        ${orgMembers.map(m => {
          const name = `${m.prenom} ${m.nom}`
          const selected = name === currentPropNom ? ' selected' : ''
          return `<option value="${m.id}"${selected}>${name}</option>`
        }).join('')}
      </select>`
    }

    const tr = document.createElement('tr')
    if (isDisabled) tr.style.opacity = '0.5'
    if (selectedIds.has(org.id)) tr.classList.add('row-selected')
    tr.innerHTML = `
      <td class="col-check"><input type="checkbox" class="row-cb" data-id="${org.id}"${selectedIds.has(org.id) ? ' checked' : ''}></td>
      <td><a href="adherent-detail.html?id=${org.id}" class="admin-link admin-link--name">${org.name}</a></td>
      <td class="member-email">${org.codeAdherent}</td>
      <td>${proprietaireHtml}</td>
      <td><span class="plan-badge plan-badge--${(org.plan||'').toLowerCase()}">${org.plan}</span></td>
      <td>
        <span class="statut-badge ${statutStyle.cls}"><i class="bi ${statutStyle.icon}"></i> ${simplified}</span>
        ${simplified === "demande d'essai" ? `
          <button class="icon-btn accept-trial-btn" data-id="${org.id}" title="Accepter" style="color:var(--ok);margin-left:6px"><i class="bi bi-check-circle-fill"></i></button>
          <button class="icon-btn reject-trial-btn" data-id="${org.id}" title="Rejeter" style="color:var(--err)"><i class="bi bi-x-circle-fill"></i></button>
        ` : ''}
      </td>
      <td class="member-email">${formatDate(org.dateAdhesion)}</td>
      <td class="member-email">${org.ville}</td>
      <td class="member-email">${org.departement}</td>
      <td class="admin-links-cell">${membresHtml}</td>
      <td class="num">${orgSensors.length}</td>
      <td class="num">${orgParcels.length}</td>
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

  // Proprietaire select handler
  tbody.querySelectorAll('.adh-prop-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const org = localOrgs.find(o => o.id === parseInt(sel.dataset.id))
      const member = members.find(m => m.id === parseInt(sel.value))
      if (org && member) {
        org.prenomProprietaire = member.prenom
        org.nomProprietaire    = member.nom
        persist()
      }
    })
  })

  // Accept / reject trial request
  tbody.querySelectorAll('.accept-trial-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const org = localOrgs.find(o => o.id === parseInt(btn.dataset.id))
      if (org) { org.statut = 'actif en essai'; persist(); render() }
    })
  })
  tbody.querySelectorAll('.reject-trial-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const org = localOrgs.find(o => o.id === parseInt(btn.dataset.id))
      if (org) { org.statut = 'désactivé'; persist(); render() }
    })
  })

  // Remove member↔org association handlers
  tbody.querySelectorAll('.remove-member-org').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const memberId = parseInt(btn.dataset.memberId)
      const orgId    = parseInt(btn.dataset.orgId)
      const member   = members.find(m => m.id === memberId)
      if (member) member.orgIds = member.orgIds.filter(id => id !== orgId)
      render()
    })
  })

  updateActionBar()

  // Sort indicators
  document.querySelectorAll('#adherents-table th[data-column]').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc')
    if (th.dataset.column === currentSort.column) th.classList.add(`sort-${currentSort.direction}`)
  })
}

function updateActionBar() {
  let bar = document.getElementById('adherents-action-bar')
  if (!bar) {
    bar = document.createElement('div')
    bar.id = 'adherents-action-bar'
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
        <span>Plan</span>
        <select id="bulk-plan-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${PLANS.map(p => `<option value="${p}">${p}</option>`).join('')}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Associer un membre</span>
        <select id="bulk-member-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${members.map(m => `<option value="${m.id}">${m.prenom} ${m.nom}</option>`).join('')}
        </select>
      </label>
      <button id="bulk-delete-btn" class="btn-secondary" style="color:var(--err)"><i class="bi bi-trash"></i> Désactiver</button>
      <button id="bulk-save-btn" class="btn-secondary" style="color:var(--ok)"><i class="bi bi-check-lg"></i> Enregistrer</button>
      <button id="bulk-cancel-btn" class="btn-secondary">Annuler</button>
    </div>
  `

  bar.querySelector('#bulk-plan-sel')?.addEventListener('change', e => {
    if (!e.target.value) return
    selectedIds.forEach(id => {
      const o = localOrgs.find(x => x.id === id)
      if (o) o.plan = e.target.value
    })
    persist(); render()
  })
  bar.querySelector('#bulk-member-sel')?.addEventListener('change', e => {
    const memberId = parseInt(e.target.value); if (!memberId) return
    const member = members.find(m => m.id === memberId)
    if (!member) return
    selectedIds.forEach(id => {
      if (!member.orgIds.includes(id)) member.orgIds = [...member.orgIds, id]
    })
    showToast('Membre associé aux adhérents sélectionnés.'); render()
  })
  bar.querySelector('#bulk-delete-btn')?.addEventListener('click', () => {
    if (!confirm(`Désactiver ${selectedIds.size} adhérent(s) ?`)) return
    selectedIds.forEach(id => {
      const idx = localOrgs.findIndex(x => x.id === id)
      if (idx !== -1) localOrgs.splice(idx, 1)
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

function sortKey(o, col) {
  if (col === 'name')        return o.name.toLowerCase()
  if (col === 'code')        return o.codeAdherent
  if (col === 'proprietaire') return `${o.nomProprietaire} ${o.prenomProprietaire}`.toLowerCase()
  if (col === 'plan')        return o.plan
  if (col === 'statut')      return o.statut
  if (col === 'date')        return o.dateAdhesion || ''
  if (col === 'ville')       return o.ville.toLowerCase()
  if (col === 'dept')        return o.departement.toLowerCase()
  if (col === 'capteurs')    return String(sensors.filter(s => s.orgId === o.id).length).padStart(6, '0')
  if (col === 'parcelles')   return String(plots.filter(p => p.orgId === o.id).length).padStart(6, '0')
  if (col === 'membres')     return String(members.filter(m => m.orgIds.includes(o.id)).length).padStart(6, '0')
  return ''
}

function formatDate(iso) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function updateStats(list) {
  const total      = list.length
  const actifs     = list.filter(o => orgStatutSimplified(o) === 'actif').length
  const enEssai    = list.filter(o => orgStatutSimplified(o) === 'en essai').length
  const inactifs   = list.filter(o => orgStatutSimplified(o) === 'inactif').length
  const invites    = list.filter(o => orgStatutSimplified(o) === 'invité').length
  const demandeurs = list.filter(o => orgStatutSimplified(o) === "demande d'essai").length
  const PLAN_COLORS = { 'Plus': '#00B093', 'Expert': '#006798' }
  const plans = PLANS.filter(p => p !== 'Essential')
  const byPlan = plans.map(p => ({ label: p, value: list.filter(o => o.plan === p).length, color: PLAN_COLORS[p] }))

  document.getElementById('stats-cards').innerHTML = [
    { label: 'Adhérents',   value: total },
    { label: 'Actifs',      value: actifs },
    { label: 'En essai',    value: enEssai },
    { label: 'Invités',     value: invites,    warn: invites > 0 },
    { label: "Demande d'essai", value: demandeurs, warn: demandeurs > 0 },
    ...byPlan.map(p => ({ label: p.label, value: p.value, color: p.color }))
  ].map(s => `
    <div class="stat-card${s.warn ? ' warn' : ''}" ${s.color ? `style="border-top-color:${s.color}"` : ''}>
      <div class="stat-label" ${s.color ? `style="color:${s.color}"` : ''}>${s.label}</div>
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
