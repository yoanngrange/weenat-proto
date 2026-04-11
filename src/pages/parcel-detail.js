// Parcel detail page logic
import { parcels } from '../data/parcels.js'
import { sensors } from '../data/sensors.js'
import { organizations } from '../data/orgs.js'
import { openExportModal } from '../modules/export-modal.js'

const urlParams = new URLSearchParams(window.location.search)
const parcelId = parseInt(urlParams.get('id'))
const parcel = parcels.find(p => p.id === parcelId)

document.addEventListener('DOMContentLoaded', () => {
  if (!parcel) {
    document.body.innerHTML = '<h1>Parcelle non trouvée</h1>'
    return
  }

  populateParcelHeader()
  setupTabs()
  populateDataTab()
  populateForecastTab()
  populateAboutPanel()
  initExportButton()
})

function initExportButton() {
  const exportBtn = document.getElementById('export-btn')
  if (!exportBtn) return
  exportBtn.addEventListener('click', () => {
    openExportModal({
      title: 'Exporter les données de la parcelle',
      contextLabel: parcel.name,
      items: [{ id: parcel.id, label: parcel.name, selected: true }],
      type: 'parcel',
      availableMeasures: [
        { id: 'pluie_24h', label: 'Pluie 24h' },
        { id: 'temperature', label: 'Température' },
        { id: 'humidite', label: 'Humidité' },
        { id: 'vent', label: 'Vent' },
        { id: 'etp', label: 'ETP' },
        { id: 'rayonnement', label: 'Rayonnement' }
      ]
    })
  })
}

function populateParcelHeader() {
  document.getElementById('parcel-name').textContent = parcel.name
  document.getElementById('parcel-title').textContent = parcel.name
  document.getElementById('parcel-crop').textContent = parcel.crop
  document.getElementById('parcel-area').textContent = `${parcel.area} ha`

  const org = organizations.find(o => o.id === parcel.orgId)
  document.getElementById('parcel-org').textContent = org.name
}

function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn')
  const tabPanels = document.querySelectorAll('.tab-panel')

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'))
      tabPanels.forEach(p => p.classList.remove('active'))

      btn.classList.add('active')
      const tabName = btn.dataset.tab
      document.querySelector(`.tab-panel[data-tab="${tabName}"]`).classList.add('active')
    })
  })
}

function populateDataTab() {
  populateWeatherStation()
  populateCharts()

  // Period selector listeners
  document.getElementById('period-select').addEventListener('change', updateCharts)
  document.getElementById('time-step').addEventListener('change', updateCharts)
}

function populateWeatherStation() {
  const container = document.getElementById('weather-values')

  const weatherData = [
    { name: 'Pluie 24h', value: Math.floor(Math.random() * 10), unit: 'mm', icon: '🌧️' },
    { name: 'Température', value: Math.floor(Math.random() * 20) + 10, unit: '°C', icon: '🌡️' },
    { name: 'Humidité', value: Math.floor(Math.random() * 40) + 40, unit: '%', icon: '💧' },
    { name: 'Vent', value: Math.floor(Math.random() * 20) + 5, unit: 'km/h', icon: '💨' },
    { name: 'ETP', value: (Math.random() * 3 + 1).toFixed(1), unit: 'mm', icon: '🌞' },
    { name: 'Rayonnement', value: Math.floor(Math.random() * 300) + 200, unit: 'W/m²', icon: '☀️' }
  ]

  weatherData.forEach(data => {
    const card = document.createElement('div')
    card.className = 'weather-card'
    card.innerHTML = `
      <div class="weather-icon">${data.icon}</div>
      <div class="weather-value">${data.value} ${data.unit}</div>
      <div class="weather-name">${data.name}</div>
    `
    container.appendChild(card)
  })
}

function populateCharts() {
  const container = document.getElementById('charts-container')
  container.innerHTML = ''

  const metrics = [
    { name: 'Température', color: '#ff6b6b', unit: '°C' },
    { name: 'Humidité', color: '#4ecdc4', unit: '%' },
    { name: 'Pluie', color: '#45b7d1', unit: 'mm' },
    { name: 'ETP', color: '#dda0dd', unit: 'mm' }
  ]

  metrics.forEach(metric => {
    const chartDiv = document.createElement('div')
    chartDiv.className = 'chart-container draggable'
    chartDiv.draggable = true
    chartDiv.innerHTML = `
      <h3>${metric.name}</h3>
      <svg class="chart-svg" width="100%" height="200" viewBox="0 0 400 200"></svg>
      <div class="chart-summary">Cumul: ${generateCumulative(metric)} ${metric.unit}</div>
    `
    container.appendChild(chartDiv)
  })

  // Add drag and drop functionality
  setupDragAndDrop()

  updateCharts()
}

function setupDragAndDrop() {
  const containers = document.querySelectorAll('.chart-container')
  containers.forEach(container => {
    container.addEventListener('dragstart', handleDragStart)
    container.addEventListener('dragover', handleDragOver)
    container.addEventListener('drop', handleDrop)
  })
}

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id || 'dragged')
  e.target.classList.add('dragging')
}

function handleDragOver(e) {
  e.preventDefault()
}

function handleDrop(e) {
  e.preventDefault()
  const dragged = document.querySelector('.dragging')
  const target = e.target.closest('.chart-container')

  if (dragged && target && dragged !== target) {
    const container = document.getElementById('charts-container')
    const draggedIndex = Array.from(container.children).indexOf(dragged)
    const targetIndex = Array.from(container.children).indexOf(target)

    if (draggedIndex < targetIndex) {
      container.insertBefore(dragged, target.nextSibling)
    } else {
      container.insertBefore(dragged, target)
    }
  }

  dragged.classList.remove('dragging')
}

function updateCharts() {
  const period = document.getElementById('period-select').value
  const step = document.getElementById('time-step').value

  const charts = document.querySelectorAll('.chart-svg')
  charts.forEach((svg, index) => {
    const metrics = [
      { name: 'Température', color: '#ff6b6b', unit: '°C', value: Math.floor(Math.random() * 20) + 10 },
      { name: 'Humidité', color: '#4ecdc4', unit: '%', value: Math.floor(Math.random() * 40) + 40 },
      { name: 'Pluie', color: '#45b7d1', unit: 'mm', value: Math.floor(Math.random() * 5) },
      { name: 'ETP', color: '#dda0dd', unit: 'mm', value: (Math.random() * 3 + 1) }
    ]
    const metric = metrics[index]
    generateChart(svg, metric, period, step)
  })
}

function generateChart(svg, metric, period, step) {
  const dataPoints = generateDataPoints(period, step, metric)
  const maxValue = Math.max(...dataPoints.map(d => d.value))
  const minValue = Math.min(...dataPoints.map(d => d.value))

  // Clear previous content
  svg.innerHTML = ''

  // Add grid
  for (let i = 0; i <= 5; i++) {
    const y = 20 + (i * 160 / 5)
    svg.innerHTML += `<line x1="50" y1="${y}" x2="380" y2="${y}" stroke="#eee" stroke-width="1"/>`
  }

  // Generate path
  let path = 'M50,180'
  dataPoints.forEach((point, index) => {
    const x = 50 + (index * 330 / (dataPoints.length - 1))
    const y = 180 - ((point.value - minValue) / (maxValue - minValue || 1)) * 160
    path += ` L${x},${y}`
  })

  svg.innerHTML += `<path d="${path}" fill="none" stroke="${metric.color}" stroke-width="2"/>`

  // Add axes labels
  svg.innerHTML += `<text x="10" y="100" transform="rotate(-90 10 100)" font-size="12">${metric.name}</text>`
}

function generateDataPoints(period, step, metric) {
  const periods = { '7d': 168, '30d': 720, '3m': 2160, '1y': 8760 }
  const steps = { '1h': 1, '6h': 6, '1d': 24 }
  const hours = periods[period] / steps[step]

  const points = []
  for (let i = 0; i < hours; i++) {
    points.push({
      value: metric.value + (Math.random() - 0.5) * 10,
      time: new Date(Date.now() - (hours - i) * 3600000)
    })
  }
  return points
}

function generateCumulative(metric) {
  if (metric.name === 'Pluie' || metric.name === 'ETP') {
    return (Math.random() * 50 + 10).toFixed(1)
  } else if (metric.name === 'Température') {
    return (Math.random() * 200 + 100).toFixed(0)
  }
  return 'N/A'
}

function populateForecastTab() {
  populateForecastCards()
  populateHourlyForecast()
  populateDetailedForecastTable()
}

function populateForecastCards() {
  const container = document.getElementById('forecast-cards')

  const days = ['Aujourd\'hui', 'Demain', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  const months = ['jan', 'fév', 'mar', 'avr', 'mai', 'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc']

  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    const dayName = days[i] || days[date.getDay()]
    const dayNum = date.getDate()
    const month = months[date.getMonth()]

    const rain = Math.floor(Math.random() * 10)
    const tempMin = Math.floor(Math.random() * 10) + 10
    const tempMax = tempMin + Math.floor(Math.random() * 10) + 5

    const card = document.createElement('div')
    card.className = `forecast-card ${i === 0 ? 'today' : ''}`
    card.innerHTML = `
      <h4>${dayName} ${dayNum} ${month}</h4>
      <div class="rain-bar" style="height: ${rain * 3}px;"></div>
      <p>${rain}mm</p>
      <p>${tempMin}-${tempMax}°C</p>
    `
    container.appendChild(card)
  }
}

function populateHourlyForecast() {
  const container = document.getElementById('hourly-scroll')
  container.innerHTML = ''

  const weatherIcons = ['☀️', '⛅', '🌧️', '🌩️', '❄️']

  for (let hour = 0; hour < 24; hour++) {
    const rain = Math.random() > 0.7 ? Math.floor(Math.random() * 5) + 1 : 0
    const icon = weatherIcons[Math.floor(Math.random() * weatherIcons.length)]

    const hourDiv = document.createElement('div')
    hourDiv.className = 'hourly-item'
    hourDiv.innerHTML = `
      <div class="hour">${hour.toString().padStart(2, '0')}h</div>
      <div class="weather-icon">${icon}</div>
      <div class="rain-amount">${rain}mm</div>
    `
    container.appendChild(hourDiv)
  }
}

function populateDetailedForecastTable() {
  const tbody = document.querySelector('#detailed-forecast-table tbody')
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

  const org = organizations.find(o => o.id === parcel.orgId)
  document.getElementById('location-badge').textContent = `${org.location.city}, ${org.location.department}`
}

function populateAboutPanel() {
  // Satellite thumbnail (simulated)
  const thumbnail = document.getElementById('parcel-thumbnail')
  thumbnail.innerHTML = `
    <div style="width: 100%; height: 150px; background: linear-gradient(45deg, #8fbc8f, #556b2f); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">
      🛰️ Satellite
    </div>
  `

  document.getElementById('parcel-crop-stage').textContent = `${parcel.crop} - Stade: Floraison`

  // Linked sensors
  const sensorsDiv = document.getElementById('linked-sensors')
  const linkedSensors = sensors.filter(s => s.orgId === parcel.orgId).slice(0, 3)

  linkedSensors.forEach(sensor => {
    const link = document.createElement('a')
    link.href = `capteur-detail.html?id=${sensor.id}`
    link.innerHTML = `${sensor.serial} <span class="badge ${sensor.event ? 'event' : ''}">${sensor.event ? 'Événement' : 'OK'}</span>`
    sensorsDiv.appendChild(link)
    sensorsDiv.appendChild(document.createElement('br'))
  })
}