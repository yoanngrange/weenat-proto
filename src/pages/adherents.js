// Adherents page logic
import { organizations } from '../data/orgs.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'

document.addEventListener('DOMContentLoaded', () => {
  populateAdherentsTable()
  setupFilters()
})

function populateAdherentsTable() {
  const tbody = document.querySelector('#adherents-table tbody')
  tbody.innerHTML = ''

  organizations.forEach(org => {
    // Calculate stats for this org
    const orgParcels = parcels.filter(p => p.orgId === org.id)
    const orgSensors = sensors.filter(s => s.orgId === org.id)
    const surface = orgParcels.reduce((sum, p) => sum + p.area, 0)
    const members = Math.floor(Math.random() * 5) + 1 // Random members

    const adherent = {
      code: `ADH${org.id.toString().padStart(3, '0')}`,
      exploitation: org.name,
      proprietaire: org.contact.name,
      ville: org.location.city,
      departement: org.location.department,
      plan: ['Essential', 'Plus', 'Expert'][Math.floor(Math.random() * 3)],
      capteurs: orgSensors.length,
      parcelles: orgParcels.length,
      membres: members,
      surface: `${surface.toFixed(1)} ha`,
      statut: Math.random() > 0.1 ? 'Actif' : 'Inactif'
    }

    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${adherent.code}</td>
      <td>${adherent.exploitation}</td>
      <td>${adherent.proprietaire}</td>
      <td>${adherent.ville}</td>
      <td>${adherent.departement}</td>
      <td><span class="badge ${adherent.plan.toLowerCase()}">${adherent.plan}</span></td>
      <td>${adherent.capteurs}</td>
      <td>${adherent.parcelles}</td>
      <td>${adherent.membres}</td>
      <td>${adherent.surface}</td>
      <td><span class="badge ${adherent.statut.toLowerCase()}">${adherent.statut}</span></td>
    `
    tbody.appendChild(row)
  })
}

function setupFilters() {
  const planFilter = document.getElementById('plan-filter')
  const statusFilter = document.getElementById('status-filter')

  // Filter event listeners
  planFilter.addEventListener('change', filterAdherents)
  statusFilter.addEventListener('change', filterAdherents)

  // Invite modal
  document.getElementById('invite-adherent-btn').addEventListener('click', () => {
    document.getElementById('invite-adherent-modal').style.display = 'flex'
  })

  // Export CSV
  document.getElementById('export-btn').addEventListener('click', exportCSV)

  // Sorting
  document.querySelectorAll('th[data-column]').forEach(th => {
    th.addEventListener('click', () => sortTable(th.dataset.column))
  })
}

function filterAdherents() {
  const planValue = document.getElementById('plan-filter').value
  const statusValue = document.getElementById('status-filter').value

  const rows = document.querySelectorAll('#adherents-table tbody tr')
  rows.forEach(row => {
    const plan = row.cells[5].textContent
    const status = row.cells[10].textContent

    const planMatch = !planValue || plan === planValue
    const statusMatch = !statusValue || status === statusValue

    row.style.display = planMatch && statusMatch ? '' : 'none'
  })
}

function exportCSV() {
  const table = document.getElementById('adherents-table')
  let csv = []
  for (let row of table.rows) {
    let rowData = []
    for (let cell of row.cells) {
      rowData.push(cell.textContent)
    }
    csv.push(rowData.join(','))
  }
  const blob = new Blob([csv.join('\n')], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'adherents.csv'
  a.click()
}

function sortTable(column) {
  const tbody = document.querySelector('#adherents-table tbody')
  const rows = Array.from(tbody.rows)
  const colIndex = {
    code: 0, exploitation: 1, proprietaire: 2, ville: 3, departement: 4,
    plan: 5, capteurs: 6, parcelles: 7, membres: 8, surface: 9, statut: 10
  }[column]

  rows.sort((a, b) => {
    const aVal = a.cells[colIndex].textContent
    const bVal = b.cells[colIndex].textContent
    return aVal.localeCompare(bVal)
  })
  rows.forEach(row => tbody.appendChild(row))
}

function closeModal() {
  document.getElementById('invite-adherent-modal').style.display = 'none'
}