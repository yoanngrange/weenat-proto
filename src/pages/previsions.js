// Previsions page logic
import { plots } from '../data/plots.js'

document.addEventListener('DOMContentLoaded', () => {
  populateLocationSelect()
  generateForecast()
  generateHourlyTable()
})

function populateLocationSelect() {
  const select = document.getElementById('location-select')
  parcels.forEach(parcel => {
    const option = document.createElement('option')
    option.value = parcel.id
    option.textContent = `${parcel.name} (${parcel.crop})`
    select.appendChild(option)
  })
}

function generateForecast() {
  const forecastDiv = document.getElementById('forecast')
  forecastDiv.innerHTML = ''

  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
  const months = ['jan', 'fév', 'mar', 'avr', 'mai', 'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc']

  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    const dayName = days[date.getDay()]
    const dayNum = date.getDate()
    const month = months[date.getMonth()]

    const rain = Math.floor(Math.random() * 10)
    const etp = Math.floor(Math.random() * 5) + 1
    const tempMin = Math.floor(Math.random() * 10) + 10
    const tempMax = tempMin + Math.floor(Math.random() * 10) + 5

    const dayDiv = document.createElement('div')
    dayDiv.className = 'forecast-day'
    dayDiv.innerHTML = `
      <h3>${dayName} ${dayNum} ${month}</h3>
      <p>Pluie: ${rain}mm</p>
      <p>ETP: ${etp}mm</p>
      <p>Temp: ${tempMin}-${tempMax}°C</p>
      <div class="sparkline">📈</div>
    `
    forecastDiv.appendChild(dayDiv)
  }
}

function generateHourlyTable() {
  const tbody = document.querySelector('#hourly-table tbody')
  tbody.innerHTML = ''

  const weatherIcons = ['☀️', '⛅', '🌧️', '🌩️', '❄️']

  for (let hour = 0; hour < 24; hour++) {
    const rain = Math.random() > 0.7 ? Math.floor(Math.random() * 5) + 1 : 0
    const temp = Math.floor(Math.random() * 15) + 10
    const humidity = Math.floor(Math.random() * 40) + 40
    const wind = Math.floor(Math.random() * 20) + 5
    const dpv = Math.floor(Math.random() * 100) + 50
    const radiation = Math.floor(Math.random() * 500) + 200
    const clouds = Math.floor(Math.random() * 100)

    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${hour.toString().padStart(2, '0')}:00</td>
      <td>${weatherIcons[Math.floor(Math.random() * weatherIcons.length)]}</td>
      <td>${rain}mm</td>
      <td>${temp}°C</td>
      <td>${humidity}%</td>
      <td>${wind}km/h</td>
      <td>${dpv}</td>
      <td>${radiation}W/m²</td>
      <td>${clouds}%</td>
    `
    tbody.appendChild(row)
  }
}