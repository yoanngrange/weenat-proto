// Sensor detail page logic
import { sensors } from '../data/sensors.js'
import { parcels } from '../data/parcels.js'
import { organizations } from '../data/orgs.js'
import { openExportModal } from '../modules/export-modal.js'

const urlParams = new URLSearchParams(window.location.search)
const sensorId = parseInt(urlParams.get('id'))
const sensor = sensors.find(s => s.id === sensorId)

document.addEventListener('DOMContentLoaded', () => {
  if (!sensor) {
    document.body.innerHTML = '<h1>Capteur non trouvé</h1>'
    return
  }

  populateSensorHeader()
  setupTabs()
  populateDataTab()
  populateForecastTab()
  populateActivitiesTab()
  populateAboutPanel()
  initSensorMap()
  initExportButton()
})

function populateSensorHeader() {
  document.getElementById('sensor-serial').textContent = sensor.serial
  document.getElementById('sensor-title').textContent = `Capteur ${sensor.serial}`
  document.getElementById('sensor-model').textContent = sensor.model

  // Simulate event badge
  if (Math.random() > 0.7) {
    document.getElementById('sensor-event-badge').style.display = 'inline-block'
  }

  document.getElementById('sensor-last-message').textContent = `Dernier message: ${new Date().toLocaleString()}`
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
  populateLatestValues()
  populateCharts()

  // Period selector listeners
  document.getElementById('period-select').addEventListener('change', updateCharts)
  document.getElementById('time-step').addEventListener('change', updateCharts)
}

function populateLatestValues() {
  const container = document.getElementById('latest-values')
  const metrics = getSensorMetrics(sensor)

  metrics.forEach(metric => {
    const card = document.createElement('div')
    card.className = 'metric-card'
    card.style.borderLeft = `4px solid ${metric.color}`
    card.innerHTML = `
      <h4>${metric.name}</h4>
      <div class="value">${metric.value} ${metric.unit}</div>
      <div class="timestamp">il y a 5 min</div>
    `
    container.appendChild(card)
  })
}

function getSensorMetrics(sensor) {
  const baseMetrics = {
    'Meteo': [
      { name: 'Température', value: Math.floor(Math.random() * 20) + 10, unit: '°C', color: '#ff6b6b' },
      { name: 'Humidité', value: Math.floor(Math.random() * 40) + 40, unit: '%', color: '#4ecdc4' },
      { name: 'Pluie', value: Math.floor(Math.random() * 5), unit: 'mm', color: '#45b7d1' },
      { name: 'Vent', value: Math.floor(Math.random() * 20) + 5, unit: 'km/h', color: '#96ceb4' },
      { name: 'Rayonnement', value: Math.floor(Math.random() * 300) + 200, unit: 'W/m²', color: '#ffeaa7' },
      { name: 'ETP', value: (Math.random() * 3 + 1).toFixed(1), unit: 'mm', color: '#dda0dd' }
    ],
    'Irrigation': [
      { name: 'Tensiométrie', value: Math.floor(Math.random() * 150) + 20, unit: 'kPa', color: '#98d8c8' },
      { name: 'Humidité sol', value: Math.floor(Math.random() * 40) + 30, unit: '%', color: '#f7dc6f' },
      { name: 'Température sol', value: Math.floor(Math.random() * 15) + 10, unit: '°C', color: '#bb8fce' }
    ]
  }

  return baseMetrics[sensor.type] || baseMetrics['Meteo']
}

function populateCharts() {
  const container = document.getElementById('charts-container')
  container.innerHTML = ''

  const metrics = getSensorMetrics(sensor)

  metrics.forEach(metric => {
    const chartDiv = document.createElement('div')
    chartDiv.className = 'chart-container'
    chartDiv.innerHTML = `
      <h3>${metric.name}</h3>
      <svg class="chart-svg" width="100%" height="200" viewBox="0 0 400 200"></svg>
      <div class="chart-summary">Cumul: ${generateCumulative(metric)} ${metric.unit}</div>
    `
    container.appendChild(chartDiv)
  })

  updateCharts()
}

function updateCharts() {
  const period = document.getElementById('period-select').value
  const step = document.getElementById('time-step').value

  const charts = document.querySelectorAll('.chart-svg')
  charts.forEach((svg, index) => {
    const metric = getSensorMetrics(sensor)[index]
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
  if (metric.name === 'Pluie') {
    return (Math.random() * 50 + 10).toFixed(1)
  } else if (metric.name === 'Température') {
    return (Math.random() * 200 + 100).toFixed(0)
  }
  return 'N/A'
}

function populateForecastTab() {
  const tbody = document.querySelector('#forecast-table tbody')
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

function populateActivitiesTab() {
  const timeline = document.getElementById('activities-timeline')
  timeline.innerHTML = '<h3>Timeline des activités</h3>'

  const activities = [
    { type: 'note', comment: 'Installation initiale du capteur', date: '2023-01-15', user: 'Technicien' },
    { type: 'nettoyage', comment: 'Nettoyage des capteurs de pluie', date: '2023-03-20', user: 'Agriculteur' },
    { type: 'batterie', comment: 'Remplacement de la batterie', date: '2023-06-10', user: 'Technicien' }
  ]

  activities.forEach(activity => {
    const item = document.createElement('div')
    item.className = 'timeline-item'
    item.innerHTML = `
      <div class="timeline-date">${activity.date}</div>
      <div class="timeline-content">
        <strong>${activity.user}</strong> - ${activity.type}
        <p>${activity.comment}</p>
      </div>
    `
    timeline.appendChild(item)
  })

  // Activity form
  document.getElementById('activity-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const type = document.getElementById('activity-type').value
    const comment = document.getElementById('activity-comment').value

    const newActivity = {
      type,
      comment,
      date: new Date().toISOString().split('T')[0],
      user: 'Utilisateur actuel'
    }

    activities.unshift(newActivity)
    populateActivitiesTab()
    document.getElementById('activity-form').reset()
  })
}

function populateAboutPanel() {
  const org = organizations.find(o => o.id === sensor.orgId)
  const linkedParcels = parcels.filter(p => p.orgId === sensor.orgId)

  document.getElementById('sensor-location').textContent = `${org.location.city}, ${org.location.department}`
  document.getElementById('sensor-owner').textContent = org.contact.name
  document.getElementById('sensor-model-type').textContent = `${sensor.model} (${sensor.type})`
  document.getElementById('sensor-added-date').textContent = '2023-01-15'

  const metricsDiv = document.getElementById('sensor-metrics')
  getSensorMetrics(sensor).forEach(metric => {
    const pill = document.createElement('span')
    pill.className = 'metric-pill'
    pill.style.backgroundColor = metric.color
    pill.textContent = metric.name
    metricsDiv.appendChild(pill)
  })

  document.getElementById('sensor-network-quality').textContent = `${Math.floor(Math.random() * 30) + 70}% - Messages 7j: ${Math.floor(Math.random() * 20) + 80}%`

  const parcelsDiv = document.getElementById('linked-parcels')
  linkedParcels.slice(0, 3).forEach(parcel => {
    const link = document.createElement('a')
    link.href = `parcelle-detail.html?id=${parcel.id}`
    link.textContent = parcel.name
    parcelsDiv.appendChild(link)
    parcelsDiv.appendChild(document.createElement('br'))
  })
}

function initExportButton() {
  const exportBtn = document.getElementById('export-btn')
  if (!exportBtn) return
  exportBtn.addEventListener('click', () => {
    openExportModal({
      title: 'Exporter les données du capteur',
      contextLabel: `Capteur ${sensor.serial}`,
      items: [],
      activeItem: { id: sensor.id, label: `${sensor.model} ${sensor.serial}` },
      type: 'sensor',
      availableMeasures: [
        { id: 'pluie', label: 'Pluie' },
        { id: 'temperature', label: 'Température' },
        { id: 'humidite', label: 'Humidité' },
        { id: 'vent', label: 'Vent' },
        { id: 'rayonnement', label: 'Rayonnement' },
        { id: 'tensiometrie', label: 'Tensiométrie' }
      ]
    })
  })
}

function initSensorMap() {
  const org = organizations.find(o => o.id === sensor.orgId)
  const map = L.map('sensor-map').setView([org.location.lat, org.location.lng], 10)

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
  }).addTo(map)

  L.marker([org.location.lat, org.location.lng]).addTo(map)
}