// Facturation page logic
document.addEventListener('DOMContentLoaded', () => {
  populateBillingHistory()
})

function populateBillingHistory() {
  const tbody = document.querySelector('#billing-history tbody')
  tbody.innerHTML = ''

  // Generate fake billing history
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  const statuses = ['Payée', 'En attente', 'Échue']

  for (let i = 0; i < 12; i++) {
    const date = new Date(2023, i, 1)
    const amount = Math.random() > 0.5 ? 25 : 14
    const status = statuses[Math.floor(Math.random() * statuses.length)]

    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-01</td>
      <td>${amount}€</td>
      <td><span class="badge ${status.toLowerCase().replace(' ', '-')}">${status}</span></td>
      <td><button class="download-btn">Télécharger PDF</button></td>
    `
    tbody.appendChild(row)
  }
}