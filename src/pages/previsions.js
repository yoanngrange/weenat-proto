// Previsions page logic — redesigned cards + hourly table
import { plots } from '../data/plots.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  populateLocationSelect()
  generateForecast()
  generateHourlyTable()
})

function populateLocationSelect() {
  const select = document.getElementById('location-select')
  if (!select) return
  plots.forEach(parcel => {
    const option = document.createElement('option')
    option.value = parcel.id
    option.textContent = `${parcel.name} (${parcel.crop})`
    select.appendChild(option)
  })
  select.addEventListener('change', () => { generateForecast(); generateHourlyTable() })
}

// ── Day card generation ───────────────────────────────────────────────────────

const WIND_DIRS = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO']

function windDirArrow(deg) {
  // Arrow shows direction wind is GOING (not coming from)
  return `<span style="display:inline-block;transform:rotate(${deg}deg);font-size:14px">↑</span>`
}

function windDirName(deg) {
  const idx = Math.round(deg / 45) % 8
  return WIND_DIRS[idx]
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
    const dayName  = days[date.getDay()]
    const dayNum   = date.getDate()
    const month    = months[date.getMonth()]

    const rain    = Math.random() > 0.5 ? Math.floor(Math.random() * 12) : 0
    const etp     = parseFloat((Math.random() * 4 + 0.5).toFixed(1))
    const tempMin = Math.floor(Math.random() * 8) + 8
    const tempMax = tempMin + Math.floor(Math.random() * 10) + 4
    const tempMinTime = `${6 + Math.floor(Math.random() * 3)}h`
    const tempMaxTime = `${13 + Math.floor(Math.random() * 4)}h`
    const humMin  = Math.floor(Math.random() * 20) + 40
    const humMax  = Math.floor(Math.random() * 25) + 65
    const windDir = Math.floor(Math.random() * 360)
    const windAvg = Math.floor(Math.random() * 25) + 5

    // SVG atmogram: rain bars + temp line
    const atmogram = buildAtmogram(rain, tempMin, tempMax, etp)

    const dayDiv = document.createElement('div')
    dayDiv.className = 'forecast-day'
    dayDiv.innerHTML = `
      <div class="fc-date">${dayName} ${dayNum} ${month}</div>
      <div class="fc-atmogram">${atmogram}</div>
      <div class="fc-rows">
        <div class="fc-row">
          <i class="bi bi-cloud-rain" style="color:#45b7d1"></i>
          <span class="fc-val">${rain} <span class="fc-unit">mm</span></span>
        </div>
        <div class="fc-row">
          <i class="bi bi-thermometer-high" style="color:#e07050"></i>
          <span class="fc-val">
            <span class="fc-temp-max">${tempMax}°</span>
            <span class="fc-temp-time">${tempMaxTime}</span>
          </span>
        </div>
        <div class="fc-row">
          <i class="bi bi-thermometer-low" style="color:#6eb4d4"></i>
          <span class="fc-val">
            <span class="fc-temp-min">${tempMin}°</span>
            <span class="fc-temp-time">${tempMinTime}</span>
          </span>
        </div>
        <div class="fc-row">
          <i class="bi bi-droplet" style="color:#4ecdc4"></i>
          <span class="fc-val">${humMin}–${humMax} <span class="fc-unit">%</span></span>
        </div>
        <div class="fc-row">
          <i class="bi bi-sun" style="color:#c090e0"></i>
          <span class="fc-val">${etp} <span class="fc-unit">mm</span></span>
        </div>
        <div class="fc-row">
          ${windDirArrow(windDir)}
          <span class="fc-val">${windAvg} <span class="fc-unit">km/h</span> ${windDirName(windDir)}</span>
        </div>
      </div>
    `
    forecastDiv.appendChild(dayDiv)
  }
}

function buildAtmogram(rain, tempMin, tempMax, etp) {
  // Simple SVG: rain bar on left, temp range on right
  const W = 80, H = 50
  const rainH = Math.min(H - 4, rain * 3)
  const rainY = H - rainH
  const tempRange = 30 // scale: 0..30°C maps to full height
  const maxY = H - (tempMax / tempRange) * H
  const minY = H - (tempMin / tempRange) * H

  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <!-- Rain bar -->
    <rect x="4" y="${rainY}" width="16" height="${rainH}" fill="#45b7d1" opacity="0.7" rx="2"/>
    <!-- ETP bar -->
    <rect x="24" y="${H - etp * 4}" width="8" height="${etp * 4}" fill="#c090e0" opacity="0.7" rx="2"/>
    <!-- Temp range bar -->
    <rect x="52" y="${maxY.toFixed(1)}" width="8" height="${(minY - maxY).toFixed(1)}" fill="#e07050" opacity="0.4" rx="2"/>
    <circle cx="56" cy="${maxY.toFixed(1)}" r="3" fill="#e07050"/>
    <circle cx="56" cy="${minY.toFixed(1)}" r="3" fill="#6eb4d4"/>
    <!-- Labels -->
    <text x="12" y="${H + 0}" font-size="8" fill="var(--txt3)" text-anchor="middle">${rain}mm</text>
  </svg>`
}

// ── Hourly table ──────────────────────────────────────────────────────────────

function generateHourlyTable() {
  const tbody = document.querySelector('#hourly-table tbody')
  if (!tbody) return
  tbody.innerHTML = ''

  // Add wind direction column to thead if not already present
  const thead = document.querySelector('#hourly-table thead tr')
  if (thead && !thead.querySelector('[data-col="winddir"]')) {
    const th = document.createElement('th')
    th.dataset.col = 'winddir'
    th.textContent = 'Dir. vent'
    // Insert after Vent column (index 5 = Vent, insert after)
    const ventTh = thead.children[5]
    if (ventTh) ventTh.after(th)
    else thead.appendChild(th)
  }

  const now = new Date()
  const baseDir = Math.floor(Math.random() * 360) // base wind direction

  for (let hour = 0; hour < 24; hour++) {
    const h = hour < 10 ? '0' + hour : '' + hour
    const sf = Math.max(0, Math.sin(Math.PI * (hour - 6) / 12)) // solar factor
    const tf = 0.5 + 0.5 * Math.sin(2 * Math.PI * (hour - 4) / 24 - Math.PI / 2)

    const rain     = (hour >= 8 && hour <= 14 && Math.random() > 0.75) ? Math.floor(Math.random() * 4 + 1) : 0
    const temp     = Math.round((12 - 6) + tf * 12)
    const humidity = Math.round(Math.max(40, Math.min(95, 70 + (1 - tf) * 20)))
    const wind     = Math.round(5 + sf * 15 + Math.random() * 5)
    const windDeg  = (baseDir + (Math.random() - 0.5) * 40 + 360) % 360
    const dpv      = parseFloat(Math.max(0, sf * 1.5 * (1 + tf * 0.5)).toFixed(2))
    const radiation = Math.round(sf * 700 + (Math.random() - 0.5) * 80)
    const clouds   = Math.round(Math.max(0, Math.min(100, 40 + (Math.random() - 0.5) * 60)))

    const icon = rain > 0 ? '🌧' : radiation > 400 ? '☀️' : radiation > 150 ? '⛅' : '🌑'

    const row = document.createElement('tr')
    if (hour >= now.getHours() && now.getDate() === new Date().getDate()) {
      row.style.fontWeight = '600'
    }
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
