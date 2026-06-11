import { updateBreadcrumb } from '../js/breadcrumb.js'
import { sensors } from '../data/sensors.js'
import { plots } from '../data/plots.js'

function generateAlertHistory(alertId) {
  const count = 4 + (alertId % 5)
  const now = Date.now()
  return Array.from({ length: count }, (_, i) => {
    const seed = alertId * 17 + i * 7
    const daysAgo = 1 + i * (2 + seed % 6)
    const startMs = now - daysAgo * 86400000 - (seed % 8) * 3600000
    const durationMs = (1 + seed % 5) * 3600000 + (seed % 60) * 60000
    const ongoing = i === 0 && (seed % 7 === 0)
    return {
      start: new Date(startMs),
      end: ongoing ? null : new Date(startMs + durationMs),
    }
  })
}

function showHistoryModal(alert) {
  const existing = document.getElementById('alert-history-modal')
  if (existing) existing.remove()

  const history = generateAlertHistory(alert.id)
  const modal = document.createElement('div')
  modal.id = 'alert-history-modal'
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9000;display:flex;align-items:center;justify-content:center'
  modal.innerHTML = `
    <div style="background:var(--bg);border-radius:12px;width:520px;max-width:90vw;max-height:80vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.3)">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--bdr);flex-shrink:0">
        <div>
          <div style="font-weight:700;font-size:15px">${alert.name}</div>
          <div style="font-size:12px;color:var(--txt3);margin-top:2px">Historique des déclenchements</div>
        </div>
        <button id="close-history" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--txt2);padding:4px"><i class="bi bi-x-lg"></i></button>
      </div>
      <div style="overflow-y:auto;padding:8px 20px 16px">
        ${history.length ? history.map(h => {
          const fmt = d => d.toLocaleDateString('fr-FR',{day:'2-digit',month:'2-digit',year:'numeric'}) + ' ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})
          return `
          <div style="display:flex;align-items:center;gap:8px;padding:9px 0;border-bottom:1px solid var(--bdr2);font-size:13px">
            <div style="width:6px;height:6px;border-radius:50%;background:${h.end ? 'var(--ok)' : '#ff9f0a'};flex-shrink:0"></div>
            <span style="color:var(--txt1)">${fmt(h.start)}</span>
            <span style="color:var(--txt3)">→</span>
            <span style="color:${h.end ? 'var(--txt2)' : '#ff9f0a'}">${h.end ? fmt(h.end) : 'En cours'}</span>
          </div>`
        }).join('') : '<p style="color:var(--txt3);padding:16px 0;font-size:13px">Aucun déclenchement enregistré.</p>'}
      </div>
    </div>`

  document.body.appendChild(modal)
  modal.querySelector('#close-history').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
}

const ALERTS_ADMIN = [
  { id: 1, name: 'Pluie forte > 10 mm/h', params: 'cumul > 10 mm/h', statut: 'actif', metric: 'pluie', created: '2026-01-15', lastTriggered: '2026-04-10', sensorIds: [1, 3], parcelIds: [1, 2] },
  { id: 2, name: 'Gel précoce < 2°C', params: '< 2°C', statut: 'actif', metric: 'temperature', created: '2025-11-03', lastTriggered: '2026-03-18', sensorIds: [2], parcelIds: [3] },
  { id: 3, name: 'Teneur en eau critique', params: '< 20%', statut: 'inactif', metric: 'teneur-eau', created: '2026-02-20', lastTriggered: null, sensorIds: [5], parcelIds: [4, 5] },
  { id: 4, name: 'Vent violent > 80 km/h', params: '> 80 km/h', statut: 'actif', metric: 'vent', created: '2025-09-01', lastTriggered: '2026-02-28', sensorIds: [1, 4], parcelIds: [] },
  { id: 5, name: 'Rayonnement faible', params: '< 50 W/m²', statut: 'inactif', metric: 'rayonnement', created: '2026-03-01', lastTriggered: null, sensorIds: [], parcelIds: [1] },
  { id: 6, name: 'DPV élevé > 2 kPa', params: '> 2 kPa', statut: 'actif', metric: 'temperature', created: '2026-03-15', lastTriggered: '2026-04-14', sensorIds: [2], parcelIds: [2, 3] },
  { id: 7, name: 'Potentiel hydrique > 100 kPa', params: '> 100 kPa', statut: 'actif', metric: 'potentiel-hydrique', created: '2026-04-01', lastTriggered: '2026-04-12', sensorIds: [6], parcelIds: [6] },
  { id: 8, name: 'Température humide < 0°C', params: '< 0°C', statut: 'actif', metric: 'temp-humide', created: '2026-01-10', lastTriggered: '2026-03-05', sensorIds: [3], parcelIds: [1], phones: ['+33 6 12 34 56 78', '+33 7 52 18 93 46'] },
  { id: 9, name: 'Température sèche > 35°C', params: '> 35°C', statut: 'actif', metric: 'temp-seche', created: '2026-02-15', lastTriggered: '2026-04-18', sensorIds: [4], parcelIds: [3], phones: ['+33 6 12 34 56 78'] },
]

const ALERTS_ADHERENT = [
  { id: 1, name: 'Gel précoce < 2°C', params: '< 2°C', statut: 'actif', metric: 'temperature', created: '2025-11-15', lastTriggered: '2026-03-18', sensorIds: [2], parcelIds: [1] },
  { id: 2, name: 'Pluie forte > 15 mm/h', params: 'cumul > 15 mm/h', statut: 'actif', metric: 'pluie', created: '2026-01-20', lastTriggered: '2026-04-10', sensorIds: [1], parcelIds: [2] },
  { id: 3, name: 'Teneur en eau basse < 30%', params: '< 30%', statut: 'inactif', metric: 'teneur-eau', created: '2026-03-05', lastTriggered: null, sensorIds: [5], parcelIds: [] },
  { id: 4, name: 'Température humide < 0°C', params: '< 0°C', statut: 'actif', metric: 'temp-humide', created: '2026-02-01', lastTriggered: '2026-03-05', sensorIds: [3], parcelIds: [1], phones: ['+33 6 78 92 34 15', '+33 7 41 08 63 22'] },
]

const ALERTS = (localStorage.getItem('menuRole') === 'adherent-reseau') ? ALERTS_ADHERENT : ALERTS_ADMIN

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  initFilters()
  render()
})

const METRIC_LABELS = {
  'pluie': 'Pluie', 'temperature': 'Température', 'teneur-eau': 'Teneur en eau sol',
  'potentiel-hydrique': 'Potentiel hydrique', 'vent': 'Vent', 'rayonnement': 'Rayonnement',
  'humidite': 'Humidité', 'temp-humide': 'Température humide', 'temp-seche': 'Température sèche',
}

let selectedStatuts = []
let selectedMetrics = []
let selectedIds     = new Set()
let currentSort     = { column: null, direction: 'asc' }

function fmtDate(iso) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function initFilters() {
  const statuts = ['actif', 'inactif']
  const metrics = [...new Set(ALERTS.map(a => a.metric))]

  makeCheckboxPanel('panel-statut-alerte', statuts, v => { selectedStatuts = v; render() }, 'badge-statut-alerte')
  makeCheckboxPanel('panel-metric-alerte', metrics.map(m => METRIC_LABELS[m] || m), v => {
    selectedMetrics = v.map(l => Object.entries(METRIC_LABELS).find(([k, label]) => label === l)?.[0] || l)
    render()
  }, 'badge-metric-alerte')

  document.querySelectorAll('.filter-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const dd = btn.closest('.filter-dropdown')
      const open = dd.classList.contains('open')
      document.querySelectorAll('.filter-dropdown.open').forEach(d => d.classList.remove('open'))
      if (!open) dd.classList.add('open')
    })
  })
  document.querySelectorAll('.filter-dropdown-panel').forEach(panel => {
    panel.addEventListener('click', e => e.stopPropagation())
  })
  document.addEventListener('click', () => {
    document.querySelectorAll('.filter-dropdown.open').forEach(d => d.classList.remove('open'))
  })

  document.getElementById('select-all-alertes')?.addEventListener('change', function () {
    const allIds = getFiltered().map(a => a.id)
    if (this.checked) allIds.forEach(id => selectedIds.add(id))
    else selectedIds.clear()
    // Mettre à jour visuellement les checkboxes et la barre sans re-rendre tout
    document.querySelectorAll('#alertes-table tbody .row-cb').forEach(cb => {
      cb.checked = selectedIds.has(parseInt(cb.dataset.id))
      cb.closest('tr').classList.toggle('row-selected', cb.checked)
    })
    updateAlertActionBar()
  })

  document.getElementById('alertes-table')?.addEventListener('click', e => {
    const th = e.target.closest('th[data-column]')
    if (!th) return
    const col = th.dataset.column
    currentSort.column    = currentSort.column === col ? currentSort.column : col
    currentSort.direction = currentSort.column === col && currentSort.direction === 'asc' ? 'desc' : 'asc'
    currentSort.column    = col
    render()
  })
}

function makeCheckboxPanel(panelId, values, onChange, badgeId, preChecked = []) {
  const panel = document.getElementById(panelId)
  if (!panel) return

  const buildItems = () => [
    `<label class="filter-all-label"><input type="checkbox" class="cb-all"> Tous</label>`,
    ...values.map(v => `<label><input type="checkbox" value="${v}"${preChecked.includes(v) ? ' checked' : ''}> ${v}</label>`)
  ].join('')

  panel.innerHTML = buildItems()
  if (preChecked.length) onChange(preChecked)
  updateBadge(badgeId, preChecked.length)

  const cbAll = panel.querySelector('.cb-all')
  const cbs = () => panel.querySelectorAll('input[type=checkbox]:not(.cb-all)')

  cbAll?.addEventListener('change', () => {
    cbs().forEach(cb => { cb.checked = cbAll.checked })
    const checked = cbAll.checked ? values : []
    onChange(checked)
    updateBadge(badgeId, checked.length)
    render()
  })

  cbs().forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(cbs()).filter(c => c.checked).map(i => i.value)
      if (cbAll) cbAll.checked = checked.length === values.length
      onChange(checked)
      updateBadge(badgeId, checked.length)
    })
  })
}

function updateBadge(id, count) {
  const el = document.getElementById(id)
  if (!el) return
  el.textContent = count
  el.hidden = !count
}

function getFiltered() {
  let list = ALERTS
  if (selectedStatuts.length) list = list.filter(a => selectedStatuts.includes(a.statut))
  if (selectedMetrics.length) list = list.filter(a => selectedMetrics.includes(a.metric))
  return list
}

function showToast(msg) {
  const t = document.createElement('div')
  t.className = 'toast'
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.classList.add('show'), 10)
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300) }, 2500)
}

function render() {
  const list = getFiltered()

  // Stats
  const statsEl = document.getElementById('stats-cards')
  if (statsEl) {
    const actives = list.filter(a => a.statut === 'actif').length
    statsEl.innerHTML = [
      { label: 'Alertes', value: list.length },
      { label: 'Actives', value: actives },
      { label: 'Inactives', value: list.length - actives },
    ].map(s => `<div class="stat-card"><div class="stat-label">${s.label}</div><div class="stat-value">${s.value}</div></div>`).join('')
  }

  // Sort
  if (currentSort.column) {
    list.sort((a, b) => {
      const av = a[currentSort.column] || ''
      const bv = b[currentSort.column] || ''
      const cmp = av.localeCompare(bv, 'fr')
      return currentSort.direction === 'asc' ? cmp : -cmp
    })
  }

  const tbody = document.querySelector('#alertes-table tbody')
  if (!tbody) return
  tbody.innerHTML = ''

  if (!list.length) {
    tbody.innerHTML = '<tr><td colspan="8" style="padding:32px;text-align:center;color:var(--txt3)">Aucune alerte.</td></tr>'
    updateAlertActionBar()
    return
  }

  list.forEach(alert => {
    const alertSensors = sensors.filter(s => alert.sensorIds.includes(s.id))
    const alertParcels = plots.filter(p => alert.parcelIds.includes(p.id))
    const isActif = alert.statut === 'actif'

    const sensorsHtml = alertSensors.length
      ? alertSensors.map(s => `<div class="admin-item-row"><span class="admin-link" style="cursor:default">${s.serial}</span><button class="icon-btn" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join('')
      : ''
    const parcelsHtml = alertParcels.length
      ? alertParcels.map(p => `<div class="admin-item-row"><span class="admin-link" style="cursor:default">${p.name}</span><button class="icon-btn" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join('')
      : ''
    const cibleHtml = (sensorsHtml + parcelsHtml) || '<span class="tag-none">—</span>'

    const tr = document.createElement('tr')
    if (selectedIds.has(alert.id)) tr.classList.add('row-selected')
    tr.innerHTML = `
      <td class="col-check"><input type="checkbox" class="row-cb" data-id="${alert.id}"${selectedIds.has(alert.id) ? ' checked' : ''}></td>
      <td data-column="name" style="font-weight:500">
        <a href="alerte-config.html?id=${alert.id}" class="admin-link">${alert.name}</a>
      </td>
      <td class="member-email">${fmtDate(alert.created)}</td>
      <td class="member-email">
        ${fmtDate(alert.lastTriggered)}
        ${alert.lastTriggered ? `<button class="history-btn" data-id="${alert.id}" title="Voir l'historique" style="margin-left:6px;background:none;border:1px solid var(--bdr);border-radius:4px;padding:1px 6px;font-size:11px;cursor:pointer;color:var(--txt2)"><i class="bi bi-clock-history"></i></button>` : ''}
      </td>
      <td class="admin-links-cell">${cibleHtml}</td>
      <td>${METRIC_LABELS[alert.metric] || alert.metric}</td>
      <td style="font-size:12px;color:var(--txt2)">${alert.params || '—'}</td>
      <td class="member-email">${(alert.phones || []).join('<br>') || '—'}</td>
      <td>
        <label class="toggle-switch" title="${isActif ? 'Désactiver' : 'Activer'}">
          <input type="checkbox" class="alert-toggle" data-id="${alert.id}"${isActif ? ' checked' : ''}>
          <span class="toggle-track"></span>
        </label>
      </td>
    `
    tbody.appendChild(tr)
  })

  tbody.querySelectorAll('.row-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      const id = parseInt(cb.dataset.id)
      if (cb.checked) selectedIds.add(id); else selectedIds.delete(id)
      updateAlertActionBar()
    })
  })

  tbody.querySelectorAll('.history-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const alert = ALERTS.find(a => a.id === parseInt(btn.dataset.id))
      if (alert) showHistoryModal(alert)
    })
  })

  tbody.querySelectorAll('.alert-toggle').forEach(cb => {
    cb.addEventListener('change', () => {
      const alert = ALERTS.find(a => a.id === parseInt(cb.dataset.id))
      if (alert) {
        alert.statut = cb.checked ? 'actif' : 'inactif'
        showToast(`Alerte "${alert.name}" ${alert.statut === 'actif' ? 'activée' : 'désactivée'}.`)
        render()
      }
    })
  })

  // Sync select-all state
  const allIds = list.map(a => a.id)
  const selAll = document.getElementById('select-all-alertes')
  if (selAll) {
    selAll.checked = allIds.length > 0 && allIds.every(id => selectedIds.has(id))
    selAll.indeterminate = !selAll.checked && allIds.some(id => selectedIds.has(id))
  }

  document.querySelectorAll('#alertes-table th[data-column]').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc')
    if (th.dataset.column === currentSort.column) th.classList.add(`sort-${currentSort.direction}`)
  })

  updateAlertActionBar()
}

function updateAlertActionBar() {
  let bar = document.getElementById('alert-action-bar')
  if (!bar) {
    bar = document.createElement('div')
    bar.id = 'alert-action-bar'
    bar.className = 'bulk-bar hidden'
    const statsEl = document.getElementById('stats-cards')
    if (statsEl) statsEl.insertAdjacentElement('afterend', bar)
  }

  if (selectedIds.size === 0) {
    bar.classList.add('hidden')
    return
  }

  const selectedAlerts = ALERTS.filter(a => selectedIds.has(a.id))
  const allActif   = selectedAlerts.every(a => a.statut === 'actif')
  const allInactif = selectedAlerts.every(a => a.statut === 'inactif')
  const toggleLabel = allActif ? 'Désactiver' : allInactif ? 'Activer' : 'Activer / Désactiver'
  const toggleIcon  = allActif ? 'bi-toggle-off' : 'bi-toggle-on'

  bar.classList.remove('hidden')
  bar.innerHTML = `
    <span class="bulk-count">${selectedIds.size} sélectionnée${selectedIds.size > 1 ? 's' : ''}</span>
    <div class="bulk-actions">
      <button class="btn-secondary btn-sm" id="alert-bulk-toggle">
        <i class="bi ${toggleIcon}"></i> ${toggleLabel}
      </button>
      <label class="bulk-action-group">
        <span>Lier une parcelle</span>
        <select id="alert-bulk-parcel" class="bulk-select">
          <option value="">— choisir —</option>
          ${plots.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Lier un capteur</span>
        <select id="alert-bulk-sensor" class="bulk-select">
          <option value="">— choisir —</option>
          ${sensors.slice(0, 60).map(s => `<option value="${s.id}">${s.serial} (${s.model})</option>`).join('')}
        </select>
      </label>
      <button class="btn-secondary btn-sm" id="alert-bulk-cancel">Annuler</button>
    </div>
  `

  bar.querySelector('#alert-bulk-toggle').addEventListener('click', () => {
    const newStatut = allActif ? 'inactif' : 'actif'
    selectedAlerts.forEach(a => { a.statut = newStatut })
    showToast(`${selectedIds.size} alerte${selectedIds.size > 1 ? 's' : ''} ${newStatut === 'actif' ? 'activée' : 'désactivée'}${selectedIds.size > 1 ? 's' : ''}.`)
    render()
  })

  bar.querySelector('#alert-bulk-parcel').addEventListener('change', e => {
    const pid = parseInt(e.target.value)
    if (!pid) return
    const p = plots.find(x => x.id === pid)
    selectedAlerts.forEach(a => { if (!a.parcelIds.includes(pid)) a.parcelIds.push(pid) })
    e.target.value = ''
    showToast(`Parcelle "${p?.name}" liée à ${selectedIds.size} alerte${selectedIds.size > 1 ? 's' : ''}.`)
    render()
  })

  bar.querySelector('#alert-bulk-sensor').addEventListener('change', e => {
    const sid = parseInt(e.target.value)
    if (!sid) return
    const s = sensors.find(x => x.id === sid)
    selectedAlerts.forEach(a => { if (!a.sensorIds.includes(sid)) a.sensorIds.push(sid) })
    e.target.value = ''
    showToast(`Capteur "${s?.serial}" lié à ${selectedIds.size} alerte${selectedIds.size > 1 ? 's' : ''}.`)
    render()
  })

  bar.querySelector('#alert-bulk-cancel').addEventListener('click', () => {
    selectedIds.clear()
    render()
  })
}
