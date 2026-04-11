// Members page logic
import { organizations } from '../data/orgs.js'

document.addEventListener('DOMContentLoaded', () => {
  populateMembersTable()

  // Search functionality
  document.getElementById('search').addEventListener('input', filterMembers)

  // Invite modal
  document.getElementById('invite-btn').addEventListener('click', () => {
    document.getElementById('invite-modal').style.display = 'flex'
  })

  // Export CSV
  document.getElementById('export-btn').addEventListener('click', exportCSV)

  // Sorting
  document.querySelectorAll('th[data-column]').forEach(th => {
    th.addEventListener('click', () => sortTable(th.dataset.column))
  })
})

function populateMembersTable() {
  const tbody = document.querySelector('#members-table tbody')
  tbody.innerHTML = ''

  // Create members from organizations
  organizations.forEach(org => {
    const member = {
      name: org.contact.name,
      email: org.contact.email,
      role: org.type === 'admin' ? 'Administrateur' : 'Éditeur',
      status: 'Actif',
      since: '2023-01-15' // Placeholder
    }

    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${member.name}</td>
      <td>${member.email}</td>
      <td><span class="badge ${member.role.toLowerCase()}">${member.role}</span></td>
      <td>${member.status}</td>
      <td>${member.since}</td>
      <td><button class="menu-btn">···</button></td>
    `
    tbody.appendChild(row)
  })
}

function filterMembers() {
  const query = document.getElementById('search').value.toLowerCase()
  const rows = document.querySelectorAll('#members-table tbody tr')
  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase()
    const email = row.cells[1].textContent.toLowerCase()
    row.style.display = name.includes(query) || email.includes(query) ? '' : 'none'
  })
}

function exportCSV() {
  const table = document.getElementById('members-table')
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
  a.download = 'membres.csv'
  a.click()
}

function sortTable(column) {
  const tbody = document.querySelector('#members-table tbody')
  const rows = Array.from(tbody.rows)
  rows.sort((a, b) => {
    const aVal = a.cells[column === 'name' ? 0 : column === 'email' ? 1 : column === 'role' ? 2 : column === 'status' ? 3 : 4].textContent
    const bVal = b.cells[column === 'name' ? 0 : column === 'email' ? 1 : column === 'role' ? 2 : column === 'status' ? 3 : 4].textContent
    return aVal.localeCompare(bVal)
  })
  rows.forEach(row => tbody.appendChild(row))
}

function closeModal() {
  document.getElementById('invite-modal').style.display = 'none'
}