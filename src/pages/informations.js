// Informations page logic — visible to adhérents réseau
import { orgs }    from '../data/orgs.js'
import { plots }   from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { network } from '../data/network.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  renderNetworkInfo()
})

// Sensor categories with their model codes
const SENSOR_CATEGORIES = [
  { id: 'meteo',      label: 'Stations météo',               models: ['P+', 'PT', 'P'] },
  { id: 'smv',        label: 'Stations météo virtuelles',    models: ['SMV'] },
  { id: 'th',         label: 'Thermo-hygromètres',          models: ['TH', 'T_MINI', 'T_GEL'] },
  { id: 'vent',       label: 'Anémomètres',                  models: ['W'] },
  { id: 'rayon',      label: 'Pyranomètres / PAR',           models: ['PYRANO', 'PAR'] },
  { id: 'humec',      label: 'Humectation foliaire',         models: ['LWS'] },
  { id: 'tensio',     label: 'Tensiomètres',                 models: ['CHP-15/30', 'CHP-30/60', 'CHP-60/90'] },
  { id: 'capa',       label: 'Sondes capacitives',           models: ['CAPA-30-3', 'CAPA-60-6'] },
  { id: 'fertiirrig', label: 'Fertirrigation',               models: ['EC'] },
]

// Sharing state per category — all shared by default
const sharingState = {}
SENSOR_CATEGORIES.forEach(c => { sharingState[c.id] = true })

function countCategoryInNetwork(cat) {
  const modelSet = new Set(cat.models)
  return sensors.filter(s => modelSet.has(s.model)).length
}

function computeSharedSensorCount() {
  return SENSOR_CATEGORIES.filter(c => sharingState[c.id])
    .reduce((sum, c) => sum + countCategoryInNetwork(c), 0)
}

function updateStatDisplay() {
  const el = document.getElementById('stat-capteurs')
  if (el) {
    const count = computeSharedSensorCount()
    el.textContent = count
    el.style.transition = 'color .2s'
    el.style.color = 'var(--pri)'
    setTimeout(() => { el.style.color = '' }, 400)
  }
}

function isAdmin() {
  return localStorage.getItem('menuRole') !== 'adherent-reseau'
}

function renderNetworkInfo() {
  const container = document.getElementById('network-info')
  const totalParcels   = plots.length
  const totalAdherents = orgs.filter(o => o.id !== 100 && o.statut !== 'inactif').length
  const totalSensors   = computeSharedSensorCount()

  function esc(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }
  function getInitials(name) {
    return (name || '?').split(/[\s\-']+/).slice(0, 2).map(w => w[0]).join('').toUpperCase().slice(0, 2)
  }

  const antennesHtml = network.antennes.map(a => `
    <div class="info-location-card">
      <div class="info-location-name">${esc(a.nom)}</div>
      <div class="info-location-addr">${[esc(a.adresse), esc(a.codePostal), esc(a.ville)].filter(Boolean).join(', ')}</div>
      ${a.telephone ? `<div class="info-location-tel"><i class="bi bi-telephone"></i> ${esc(a.telephone)}</div>` : ''}
    </div>`).join('')

  // Admin-only: togglers by sensor category
  const sharingHtml = isAdmin() ? `
    <div class="info-section">
      <h3><i class="bi bi-share"></i> Partage de données réseau</h3>
      <p style="font-size:13px;color:var(--txt2);margin-bottom:12px">
        Choisissez les catégories de capteurs visibles par les adhérents du réseau.
        Le nombre de capteurs dans les statistiques s'ajuste en temps réel.
      </p>
      <div class="info-sharing-list">
        ${SENSOR_CATEGORIES.map(cat => {
          const n = countCategoryInNetwork(cat)
          if (n === 0) return ''
          const uid = `sharing-${cat.id}`
          return `<div class="info-sharing-row">
            <label for="${uid}" class="info-sharing-name" style="cursor:pointer;flex:1">${cat.label}</label>
            <span style="font-size:12px;color:var(--txt3);margin-right:12px">${n} capteur${n > 1 ? 's' : ''}</span>
            <label class="toggle-switch">
              <input type="checkbox" id="${uid}" class="sharing-toggle" data-cat="${cat.id}"${sharingState[cat.id] ? ' checked' : ''}>
              <span class="toggle-track"></span>
            </label>
          </div>`
        }).join('')}
      </div>
    </div>` : ''

  container.innerHTML = `
    <div class="info-header">
      <div class="info-logo-avatar">${getInitials(network.nom)}</div>
      <div>
        <h1 class="info-nom">${esc(network.nom)}</h1>
        <div class="info-contacts">
          ${network.telephone ? `<span><i class="bi bi-telephone"></i> ${esc(network.telephone)}</span>` : ''}
          ${network.email ? `<span><i class="bi bi-envelope"></i> <a href="mailto:${esc(network.email)}">${esc(network.email)}</a></span>` : ''}
          ${network.siteWeb ? `<span><i class="bi bi-globe"></i> ${esc(network.siteWeb)}</span>` : ''}
        </div>
      </div>
    </div>

    <p class="info-description">${esc(network.description)}</p>

    <div class="info-stats-row">
      <div class="info-stat" style="cursor:default">
        <div class="info-stat-value" id="stat-capteurs">${totalSensors}</div>
        <div class="info-stat-label">Capteurs partagés</div>
        <div style="font-size:10px;color:var(--txt3);margin-top:2px">${isAdmin() ? 'configurable ↓' : ''}</div>
      </div>
      <div class="info-stat">
        <div class="info-stat-value">${totalParcels}</div>
        <div class="info-stat-label">Parcelles</div>
      </div>
      <div class="info-stat">
        <div class="info-stat-value">${totalAdherents}</div>
        <div class="info-stat-label">Adhérents</div>
      </div>
    </div>

    <div class="info-section">
      <h3><i class="bi bi-geo-alt"></i> Siège social</h3>
      <div class="info-location-card">
        <div class="info-location-addr">
          ${[esc(network.siege.adresse), esc(network.siege.codePostal), esc(network.siege.ville)].filter(Boolean).join(', ')}
        </div>
        ${network.telephone ? `<div class="info-location-tel"><i class="bi bi-telephone"></i> ${esc(network.telephone)}</div>` : ''}
      </div>
    </div>

    <div class="info-section">
      <h3><i class="bi bi-pin-map"></i> Antennes &amp; points de vente</h3>
      <div class="info-locations-grid">${antennesHtml}</div>
    </div>

    ${sharingHtml}
  `

  // Wire via the label (always visible) — the checkbox may be display:none
  container.querySelectorAll('.info-sharing-row').forEach(row => {
    const cb = row.querySelector('.sharing-toggle')
    if (!cb) return
    row.addEventListener('click', e => {
      // Let the browser toggle the checkbox first, then read its state
      setTimeout(() => {
        sharingState[cb.dataset.cat] = cb.checked
        updateStatDisplay()
      }, 0)
    })
  })
}
