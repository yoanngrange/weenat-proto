// Informations page logic — visible to adhérents réseau
import { orgs } from '../data/orgs.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { network } from '../data/network.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  renderNetworkInfo()
})

function renderNetworkInfo() {
  const container = document.getElementById('network-info')
  const totalSensors = sensors.length
  const totalParcels = plots.length
  const totalAdherents = orgs.length

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
      <div class="info-stat">
        <div class="info-stat-value">${totalSensors}</div>
        <div class="info-stat-label">Capteurs</div>
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
  `
}
