// Previsions page logic — redesigned cards + hourly table
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

let selectedDayIndex = 0

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  populateLocationSelect()
  generateForecast()
  generateHourlyTable(0)
})

function populateLocationSelect() {
  const select = document.getElementById('location-select')
  if (!select) return

  const parcelGroup = document.createElement('optgroup')
  parcelGroup.label = 'Parcelles'
  plots.forEach(parcel => {
    const option = document.createElement('option')
    option.value = `parcel-${parcel.id}`
    option.textContent = `${parcel.name} (${parcel.crop})`
    parcelGroup.appendChild(option)
  })
  select.appendChild(parcelGroup)

  const sensorGroup = document.createElement('optgroup')
  sensorGroup.label = 'Capteurs'
  sensors.forEach(sensor => {
    const parcel = plots.find(p => p.id === sensor.parcelId)
    const option = document.createElement('option')
    option.value = `sensor-${sensor.id}`
    option.textContent = `${sensor.serial} — ${sensor.model}${parcel ? ` (${parcel.name})` : ''}`
    sensorGroup.appendChild(option)
  })
  select.appendChild(sensorGroup)

  select.addEventListener('change', () => {
    selectedDayIndex = 0
    generateForecast()
    generateHourlyTable(0)
  })
}

// ── Day card generation ───────────────────────────────────────────────────────

const WIND_DIRS = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO']

function windDirArrow(deg) {
  return `<span style="display:inline-block;transform:rotate(${deg}deg);font-size:14px">↑</span>`
}

function windDirName(deg) {
  const idx = Math.round(deg / 45) % 8
  return WIND_DIRS[idx]
}

// Seeded pseudo-random for consistent per-day values
function seededRand(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function dayData(dayIndex) {
  const rand = seededRand(dayIndex * 137 + 42)
  return {
    rain:        rand() > 0.5 ? Math.floor(rand() * 12) : 0,
    etp:         parseFloat((rand() * 4 + 0.5).toFixed(1)),
    tempMin:     Math.floor(rand() * 8) + 8,
    tempMax:     Math.floor(rand() * 8) + 8 + Math.floor(rand() * 10) + 4,
    tempMinTime: `${6 + Math.floor(rand() * 3)}h`,
    tempMaxTime: `${13 + Math.floor(rand() * 4)}h`,
    humMin:      Math.floor(rand() * 20) + 40,
    humMax:      Math.floor(rand() * 25) + 65,
    windDir:     Math.floor(rand() * 360),
    windAvg:     Math.floor(rand() * 25) + 5,
  }
}

function generateForecast() {
  const forecastDiv = document.getElementById('forecast')
  if (!forecastDiv) return
  forecastDiv.innerHTML = ''

  const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  const months = ['jan', 'fév', 'mar', 'avr', 'mai', 'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc']

  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    const dayName = days[date.getDay()]
    const dayNum  = date.getDate()
    const month   = months[date.getMonth()]

    const d = dayData(i)
    const atmogram = buildAtmogram(d.rain, d.tempMin, d.tempMax, d.etp)

    const dayDiv = document.createElement('div')
    dayDiv.className = `forecast-day${i === selectedDayIndex ? ' forecast-day--active' : ''}`
    dayDiv.dataset.dayIndex = i
    dayDiv.innerHTML = `
      <div class="fc-date">${dayName} ${dayNum} ${month}</div>
      <div class="fc-atmogram">${atmogram}</div>
      <div class="fc-rows">
        <div class="fc-row">
          <i class="bi bi-cloud-rain" style="color:#45b7d1"></i>
          <span class="fc-val">${d.rain} <span class="fc-unit">mm</span></span>
        </div>
        <div class="fc-row">
          <i class="bi bi-thermometer-high" style="color:#e07050"></i>
          <span class="fc-val">
            <span class="fc-temp-max">${d.tempMax}°</span>
            <span class="fc-temp-time">${d.tempMaxTime}</span>
          </span>
        </div>
        <div class="fc-row">
          <i class="bi bi-thermometer-low" style="color:#6eb4d4"></i>
          <span class="fc-val">
            <span class="fc-temp-min">${d.tempMin}°</span>
            <span class="fc-temp-time">${d.tempMinTime}</span>
          </span>
        </div>
        <div class="fc-row">
          <i class="bi bi-droplet" style="color:#4ecdc4"></i>
          <span class="fc-val">${d.humMin}–${d.humMax} <span class="fc-unit">%</span></span>
        </div>
        <div class="fc-row">
          <i class="bi bi-sun" style="color:#c090e0"></i>
          <span class="fc-val">${d.etp} <span class="fc-unit">mm</span></span>
        </div>
        <div class="fc-row">
          ${windDirArrow(d.windDir)}
          <span class="fc-val">${d.windAvg} <span class="fc-unit">km/h</span> ${windDirName(d.windDir)}</span>
        </div>
      </div>
    `

    dayDiv.addEventListener('click', () => {
      selectedDayIndex = i
      document.querySelectorAll('.forecast-day').forEach(el => el.classList.remove('forecast-day--active'))
      dayDiv.classList.add('forecast-day--active')
      generateHourlyTable(i)
    })

    forecastDiv.appendChild(dayDiv)
  }
}

function buildAtmogram(rain, tempMin, tempMax, etp) {
  const W = 80, H = 50
  const rainH = Math.min(H - 4, rain * 3)
  const rainY = H - rainH
  const tempRange = 30
  const maxY = H - (tempMax / tempRange) * H
  const minY = H - (tempMin / tempRange) * H

  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect x="4" y="${rainY}" width="16" height="${rainH}" fill="#45b7d1" opacity="0.7" rx="2"/>
    <rect x="24" y="${H - etp * 4}" width="8" height="${etp * 4}" fill="#c090e0" opacity="0.7" rx="2"/>
    <rect x="52" y="${maxY.toFixed(1)}" width="8" height="${(minY - maxY).toFixed(1)}" fill="#e07050" opacity="0.4" rx="2"/>
    <circle cx="56" cy="${maxY.toFixed(1)}" r="3" fill="#e07050"/>
    <circle cx="56" cy="${minY.toFixed(1)}" r="3" fill="#6eb4d4"/>
    <text x="12" y="${H}" font-size="8" fill="var(--txt3)" text-anchor="middle">${rain}mm</text>
  </svg>`
}

// ── Hourly table ──────────────────────────────────────────────────────────────

function generateHourlyTable(dayIndex = 0) {
  const tbody = document.querySelector('#hourly-table tbody')
  if (!tbody) return
  tbody.innerHTML = ''

  const thead = document.querySelector('#hourly-table thead tr')
  if (thead && !thead.querySelector('[data-col="winddir"]')) {
    const th = document.createElement('th')
    th.dataset.col = 'winddir'
    th.textContent = 'Dir. vent'
    const ventTh = thead.children[5]
    if (ventTh) ventTh.after(th)
    else thead.appendChild(th)
  }

  const d = dayData(dayIndex)
  const baseDir = d.windDir

  for (let hour = 0; hour < 24; hour++) {
    const h  = hour < 10 ? '0' + hour : '' + hour
    const sf = Math.max(0, Math.sin(Math.PI * (hour - 6) / 12))
    const tf = 0.5 + 0.5 * Math.sin(2 * Math.PI * (hour - 4) / 24 - Math.PI / 2)
    const rand = seededRand(dayIndex * 1000 + hour * 13)

    const rain      = (hour >= 8 && hour <= 14 && rand() > 0.75) ? Math.floor(rand() * 4 + 1) : 0
    const temp      = Math.round((d.tempMin) + tf * (d.tempMax - d.tempMin))
    const humidity  = Math.round(Math.max(40, Math.min(95, 70 + (1 - tf) * 20)))
    const wind      = Math.round(5 + sf * d.windAvg + rand() * 5)
    const windDeg   = (baseDir + (rand() - 0.5) * 40 + 360) % 360
    const dpv       = parseFloat(Math.max(0, sf * 1.5 * (1 + tf * 0.5)).toFixed(2))
    const radiation = Math.round(sf * 700 + (rand() - 0.5) * 80)
    const clouds    = Math.round(Math.max(0, Math.min(100, 40 + (rand() - 0.5) * 60)))

    const icon = rain > 0 ? '🌧' : radiation > 400 ? '☀️' : radiation > 150 ? '⛅' : '🌑'

    const row = document.createElement('tr')
    if (dayIndex === 0 && hour === new Date().getHours()) row.style.fontWeight = '600'
    row.innerHTML = `
      <td>${h}:00</td>
      <td>${icon}</td>
      <td>${rain > 0 ? rain + ' mm' : '—'}</td>
      <td style="color:${temp > 20 ? '#e07050' : temp < 8 ? '#6eb4d4' : 'inherit'}">${temp}°C</td>
      <td>${humidity}%</td>
      <td>${wind} km/h</td>
      <td>${windDirArrow(windDeg)} ${windDirName(windDeg)}</td>
      <td>${dpv} kPa</td>
      <td>${radiation > 0 ? radiation + ' W/m²' : '—'}</td>
      <td>${clouds}%</td>
    `
    tbody.appendChild(row)
  }
}
