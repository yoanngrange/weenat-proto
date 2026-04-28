import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

let selectedDayIndex = 0
let selectedMetric   = 'temp'

const DAYS   = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
const MONTHS_SHORT = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aoû', 'sep', 'oct', 'nov', 'déc']

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  populateLocationSelect()
  generateForecast()
  generateHourlySection(0)

  document.getElementById('hourly-metric-sel')?.addEventListener('change', e => {
    selectedMetric = e.target.value
    generateHourlySection(selectedDayIndex)
  })
})

// ── Location select ───────────────────────────────────────────────────────────

function populateLocationSelect() {
  const select = document.getElementById('location-select')
  if (!select) return
  const pg = document.createElement('optgroup'); pg.label = 'Parcelles'
  plots.forEach(p => { const o = document.createElement('option'); o.value = `parcel-${p.id}`; o.textContent = `${p.name} (${p.crop})`; pg.appendChild(o) })
  select.appendChild(pg)
  const sg = document.createElement('optgroup'); sg.label = 'Capteurs'
  sensors.forEach(s => { const p = plots.find(x => x.id === s.parcelId); const o = document.createElement('option'); o.value = `sensor-${s.id}`; o.textContent = `${s.serial} — ${s.model}${p ? ` (${p.name})` : ''}`; sg.appendChild(o) })
  select.appendChild(sg)
  select.addEventListener('change', () => { generateForecast(); generateHourlySection(selectedDayIndex) })
}

// ── Seeded pseudo-random ──────────────────────────────────────────────────────

function seededRand(seed) {
  let s = seed
  return () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }
}

function dayData(i) {
  const r = seededRand(i * 137 + 42)
  return {
    rain:        r() > 0.55 ? +(r() * 8).toFixed(1) : 0,
    etp:         +(r() * 4.5 + 0.5).toFixed(1),
    tempMin:     Math.floor(r() * 8) + 6,
    tempMax:     Math.floor(r() * 8) + 6 + Math.floor(r() * 10) + 6,
    humMin:      Math.floor(r() * 20) + 38,
    humMax:      Math.floor(r() * 25) + 58,
    windMin:     Math.floor(r() * 6) + 2,
    windMax:     Math.floor(r() * 18) + 8,
    windDir:     Math.floor(r() * 360),
  }
}

// ── Weather icon (SVG emoji-style, inspired by screenshot) ───────────────────

function weatherSvgIcon(rain, tempMax, size = 36) {
  if (rain > 5)   return sunCloudRainIcon(size)
  if (rain > 0.5) return cloudRainIcon(size)
  if (tempMax > 22) return sunIcon(size)
  return cloudIcon(size)
}

function sunIcon(s) {
  return `<svg width="${s}" height="${s}" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="7" fill="#F59E0B"/>
    ${[0,45,90,135,180,225,270,315].map(a => {
      const r1=10.5,r2=13,x1=18+r1*Math.cos(a*Math.PI/180),y1=18+r1*Math.sin(a*Math.PI/180),x2=18+r2*Math.cos(a*Math.PI/180),y2=18+r2*Math.sin(a*Math.PI/180)
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round"/>`
    }).join('')}
  </svg>`
}

function cloudIcon(s) {
  return `<svg width="${s}" height="${s}" viewBox="0 0 36 36" fill="none">
    <path d="M26 24H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 24Z" fill="#CBD5E1"/>
  </svg>`
}

function sunCloudRainIcon(s) {
  return `<svg width="${s}" height="${s}" viewBox="0 0 36 36" fill="none">
    <circle cx="11" cy="13" r="4.5" fill="#F59E0B" opacity=".9"/>
    <path d="M28 22H13a5 5 0 1 1 1.2-9.8A6 6 0 1 1 28 22Z" fill="#CBD5E1"/>
    <line x1="15" y1="25" x2="13" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="19" y1="25" x2="17" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="23" y1="25" x2="21" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`
}

function cloudRainIcon(s) {
  return `<svg width="${s}" height="${s}" viewBox="0 0 36 36" fill="none">
    <path d="M26 22H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 22Z" fill="#94A3B8"/>
    <line x1="14" y1="25" x2="12" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="18" y1="25" x2="16" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="22" y1="25" x2="20" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`
}

function hourWeatherSvg(rain, radiation, size = 22) {
  if (rain > 0.5) return cloudRainIcon(size)
  if (radiation > 350) return sunIcon(size)
  if (radiation > 80)  return cloudIcon(size)
  return `<svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none">
    <path d="M26 24H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 24Z" fill="#475569"/>
  </svg>`
}

// ── Day cards ─────────────────────────────────────────────────────────────────

function generateForecast() {
  const el = document.getElementById('forecast')
  if (!el) return
  el.innerHTML = ''

  for (let i = 0; i < 7; i++) {
    const date = new Date(); date.setDate(date.getDate() + i)
    const d = dayData(i)
    const dayLabel  = i === 0 ? 'Aujourd\'hui' : i === 1 ? 'Demain' : `${DAYS[date.getDay()]} ${date.getDate()} ${MONTHS_SHORT[date.getMonth()]}`
    const fullLabel = `${DAYS[date.getDay()]} ${date.getDate()} ${MONTHS_SHORT[date.getMonth()]}.`

    const card = document.createElement('div')
    card.className = `fc2-card${i === selectedDayIndex ? ' fc2-card--active' : ''}`
    card.dataset.day = i
    card.innerHTML = `
      <div class="fc2-date">${i === 0 ? `<strong>${fullLabel}</strong>` : fullLabel}</div>
      ${i === 0 ? `<div class="fc2-today-badge">Aujourd'hui</div>` : ''}
      <div class="fc2-icon">${weatherSvgIcon(d.rain, d.tempMax, 40)}</div>
      <div class="fc2-grid">
        <div class="fc2-cell">
          <div class="fc2-label">Pluie</div>
          <div class="fc2-val">${d.rain} <span class="fc2-unit">mm</span></div>
        </div>
        <div class="fc2-cell">
          <div class="fc2-label">ETP</div>
          <div class="fc2-val">${d.etp} <span class="fc2-unit">mm</span></div>
        </div>
        <div class="fc2-cell">
          <div class="fc2-label">Température</div>
          <div class="fc2-val"><span class="fc2-tmin">${d.tempMin}</span> / <span class="fc2-tmax">${d.tempMax}</span> <span class="fc2-unit">°C</span></div>
        </div>
        <div class="fc2-cell">
          <div class="fc2-label">Humidité</div>
          <div class="fc2-val">${d.humMin} <span class="fc2-unit">%</span></div>
        </div>
        <div class="fc2-cell fc2-cell--wide">
          <div class="fc2-label">Vent</div>
          <div class="fc2-val">${d.windMin} / ${d.windMax} <span class="fc2-unit">km/h</span></div>
        </div>
      </div>
    `
    card.addEventListener('click', () => {
      selectedDayIndex = i
      document.querySelectorAll('.fc2-card').forEach(c => c.classList.remove('fc2-card--active'))
      card.classList.add('fc2-card--active')
      generateHourlySection(i)
    })
    el.appendChild(card)
  }
}

// ── Hourly section ────────────────────────────────────────────────────────────

const METRIC_CONFIG = {
  temp:      { label: 'Température', unit: '°C',    color: '#F59E0B', format: v => `${v.toFixed(1)} °C` },
  pluie:     { label: 'Pluie',       unit: 'mm',    color: '#60A5FA', format: v => v > 0 ? `${v.toFixed(1)} mm` : '0 mm' },
  humidity:  { label: 'Humidité',    unit: '%',     color: '#34D399', format: v => `${Math.round(v)} %` },
  wind:      { label: 'Vent',        unit: 'km/h',  color: '#818CF8', format: v => `${Math.round(v)} km/h` },
  radiation: { label: 'Rayonnement', unit: 'W/m²',  color: '#FBBF24', format: v => v > 0 ? `${Math.round(v)} W/m²` : `0 W/m²` },
}

function hourlyVals(dayIndex) {
  const d = dayData(dayIndex)
  return Array.from({ length: 24 }, (_, hour) => {
    const r   = seededRand(dayIndex * 1000 + hour * 13)
    const sf  = Math.max(0, Math.sin(Math.PI * (hour - 6) / 12))
    const tf  = 0.5 + 0.5 * Math.sin(2 * Math.PI * (hour - 4) / 24 - Math.PI / 2)
    const rain      = hour >= 6 && hour <= 14 && r() > 0.82 ? +(r() * 3).toFixed(1) : 0
    const temp      = +((d.tempMin) + tf * (d.tempMax - d.tempMin) + (r() - 0.5) * 1.5).toFixed(1)
    const humidity  = Math.round(Math.max(30, Math.min(98, 65 + (1 - tf) * 25 - tf * 10 + (r() - 0.5) * 10)))
    const wind      = Math.round(d.windMin + sf * (d.windMax - d.windMin) * 0.7 + r() * 4)
    const radiation = Math.round(Math.max(0, sf * 750 * (0.7 + r() * 0.6)))
    const dpv       = +Math.max(0, sf * 1.2 * (1 + tf * 0.4) + (r() - 0.5) * 0.3).toFixed(2)
    const clouds    = Math.round(Math.max(0, Math.min(100, 35 + (r() - 0.5) * 70)))
    const windDir   = Math.floor(r() * 360)
    return { hour, rain, temp, humidity, wind, radiation, dpv, clouds, windDir }
  })
}

function generateHourlySection(dayIndex) {
  const date = new Date(); date.setDate(date.getDate() + dayIndex)
  const labelEl = document.getElementById('hourly-day-label')
  if (labelEl) {
    const dayStr = dayIndex === 0 ? 'Aujourd\'hui' : dayIndex === 1 ? 'Demain' : DAYS[date.getDay()]
    labelEl.textContent = `${DAYS[date.getDay()]} ${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}${dayIndex === 0 ? ' (Aujourd\'hui)' : ''}`
  }

  const hours = hourlyVals(dayIndex)
  const now   = new Date().getHours()
  const cfg   = METRIC_CONFIG[selectedMetric]

  renderStrip(hours, now, dayIndex, cfg)
  renderCurve(hours, now, dayIndex, cfg)
  renderTable(hours, now, dayIndex)
}

// ── Strip ─────────────────────────────────────────────────────────────────────

function renderStrip(hours, nowHour, dayIndex, cfg) {
  const wrap = document.getElementById('hourly-strip')
  if (!wrap) return

  wrap.innerHTML = hours.map(h => {
    const isCurrent = dayIndex === 0 && h.hour === nowHour
    const val = metricVal(h, selectedMetric)
    return `
      <div class="hs-col${isCurrent ? ' hs-col--now' : ''}">
        ${isCurrent ? `<div class="hs-now-dot"></div>` : ''}
        <div class="hs-time">${String(h.hour).padStart(2,'0')}:00</div>
        <div class="hs-icon">${hourWeatherSvg(h.rain, h.radiation, 22)}</div>
        <div class="hs-val" style="color:${cfg.color}">${cfg.format(val)}</div>
      </div>
    `
  }).join('')

  // Scroll to current hour
  if (dayIndex === 0) {
    const cols = wrap.querySelectorAll('.hs-col')
    const nowCol = cols[nowHour]
    if (nowCol) setTimeout(() => nowCol.scrollIntoView({ inline: 'center', block: 'nearest' }), 50)
  }
}

function metricVal(h, metric) {
  return { temp: h.temp, pluie: h.rain, humidity: h.humidity, wind: h.wind, radiation: h.radiation }[metric] ?? 0
}

// ── Curve ─────────────────────────────────────────────────────────────────────

function renderCurve(hours, nowHour, dayIndex, cfg) {
  const svg = document.getElementById('hourly-curve')
  if (!svg) return
  const W = svg.clientWidth || 1200, H = 80, PAD = { t: 8, r: 10, b: 8, l: 10 }
  const vals = hours.map(h => metricVal(h, selectedMetric))
  const minV = Math.min(...vals), maxV = Math.max(...vals), range = maxV - minV || 1
  const xOf = i => PAD.l + (i / 23) * (W - PAD.l - PAD.r)
  const yOf = v => PAD.t + (H - PAD.t - PAD.b) * (1 - (v - minV) / range)
  const pts  = vals.map((v, i) => ({ x: xOf(i), y: yOf(v) }))

  // Smooth path (catmull-rom)
  let d = `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i-1,0)], p1 = pts[i], p2 = pts[i+1], p3 = pts[Math.min(i+2,pts.length-1)]
    const cx1 = p1.x + (p2.x-p0.x)/6, cy1 = p1.y + (p2.y-p0.y)/6
    const cx2 = p2.x - (p3.x-p1.x)/6, cy2 = p2.y - (p3.y-p1.y)/6
    d += ` C${cx1.toFixed(1)},${cy1.toFixed(1)} ${cx2.toFixed(1)},${cy2.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`
  }

  // Fill area
  const areaD = `${d} L${pts[pts.length-1].x.toFixed(1)},${H} L${pts[0].x.toFixed(1)},${H} Z`
  const gradId = `curve-grad-${selectedMetric}`

  let out = `<defs>
    <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${cfg.color}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${cfg.color}" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <path d="${areaD}" fill="url(#${gradId})"/>
  <path d="${d}" fill="none" stroke="${cfg.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`

  // Current hour dot
  if (dayIndex === 0 && nowHour < 24) {
    const cx = xOf(nowHour).toFixed(1), cy = yOf(vals[nowHour]).toFixed(1)
    out += `<circle cx="${cx}" cy="${cy}" r="4" fill="${cfg.color}" stroke="#fff" stroke-width="2"/>`
  }

  svg.setAttribute('viewBox', `0 0 ${W} ${H}`)
  svg.innerHTML = out
}

// ── Table ─────────────────────────────────────────────────────────────────────

const WIND_DIRS = ['N','NE','E','SE','S','SO','O','NO']
function windDirLabel(deg) { return WIND_DIRS[Math.round(deg / 45) % 8] }
function windArrow(deg) { return `<span style="display:inline-block;transform:rotate(${deg}deg)">↑</span>` }

function renderTable(hours, nowHour, dayIndex) {
  const tbody = document.querySelector('#hourly-table tbody')
  if (!tbody) return
  tbody.innerHTML = ''

  hours.forEach(h => {
    const isCurrent = dayIndex === 0 && h.hour === nowHour
    const hEnd = h.hour === 23 ? 0 : h.hour + 1
    const tr = document.createElement('tr')
    if (isCurrent) tr.classList.add('ht-row--now')
    tr.innerHTML = `
      <td class="ht-time">
        <span class="ht-icon">${hourWeatherSvg(h.rain, h.radiation, 18)}</span>
        ${String(h.hour).padStart(2,'0')}h – ${String(hEnd).padStart(2,'0')}h
        ${isCurrent ? `<span class="ht-now-badge">maintenant</span>` : ''}
      </td>
      <td>${h.rain > 0 ? `<span style="color:#60A5FA;font-weight:500">${h.rain.toFixed(1)} mm</span>` : '0 mm'}</td>
      <td style="color:${h.temp > 25 ? '#ef4444' : h.temp < 5 ? '#60A5FA' : 'inherit'};font-weight:500">${h.temp.toFixed(1)} °C</td>
      <td>${h.humidity} %</td>
      <td>${h.wind} km/h ${windArrow(h.windDir)} ${windDirLabel(h.windDir)}</td>
      <td>${h.dpv > 0 ? h.dpv.toFixed(2) + ' kPa' : '— kPa'}</td>
      <td>${h.radiation > 0 ? h.radiation + ' W/m²' : '0 W/m²'}</td>
      <td>${h.clouds > 0 ? h.clouds + ' %' : '— %'}</td>
    `
    tbody.appendChild(tr)
  })
}

// Re-render curve on resize
window.addEventListener('resize', () => {
  if (document.getElementById('hourly-curve')) {
    const hours = hourlyVals(selectedDayIndex)
    const now   = new Date().getHours()
    renderCurve(hours, now, selectedDayIndex, METRIC_CONFIG[selectedMetric])
  }
})
