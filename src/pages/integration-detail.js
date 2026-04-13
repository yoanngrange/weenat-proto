// Integration detail page
import { integrations } from './integrations.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

const urlParams = new URLSearchParams(window.location.search)
const integId = urlParams.get('id')
let integ = integrations.find(i => i.id === integId)

const TYPE_LABELS = {
  maladie: 'Maladie & ravageurs',
  irrigation: 'Irrigation',
  fertilisation: 'Fertilisation & traitements'
}

const TYPE_COLORS = {
  maladie: 'var(--warn)',
  irrigation: 'var(--pri)',
  fertilisation: 'var(--ok)'
}

document.addEventListener('DOMContentLoaded', () => {
  if (!integ) {
    document.getElementById('integ-detail').innerHTML =
      '<div style="padding:40px"><h1>Intégration non trouvée</h1><a href="integrations.html">← Retour aux intégrations</a></div>'
    return
  }

  updateBreadcrumb(integ.name)
  render()
})

function render() {
  const color = TYPE_COLORS[integ.type]
  const label = TYPE_LABELS[integ.type]

  document.getElementById('integ-detail').innerHTML = `
    <div class="integ-detail-layout">

      <div class="integ-detail-main">
        <a href="integrations.html" class="integ-back-link">
          <i class="bi bi-arrow-left"></i> Toutes les intégrations
        </a>

        <div class="integ-detail-header">
          <div class="integ-detail-logo-wrap">
            <img
              class="integ-detail-logo"
              src="${integ.logo}"
              alt="${integ.name}"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
            />
            <div class="integ-detail-logo-fallback" style="display:none;background:${color}22;color:${color}">
              ${getInitials(integ.name)}
            </div>
          </div>
          <div class="integ-detail-header-info">
            <h1 class="integ-detail-name">
              ${integ.name}
              ${integ.badge ? `<span class="integ-card-variant">${integ.badge}</span>` : ''}
            </h1>
            <span class="integ-type-badge" style="background:${color}22;color:${color}">
              <i class="bi ${typeIcon(integ.type)}"></i> ${label}
            </span>
          </div>
          <div class="integ-detail-cta">
            <button class="integ-connect-btn${integ.connected ? ' connected' : ''}" id="connect-btn">
              ${integ.connected
                ? '<i class="bi bi-check-circle-fill"></i> Connectée'
                : '<i class="bi bi-plug"></i> Connecter'}
            </button>
          </div>
        </div>

        <div class="integ-detail-description">
          <p>${integ.descriptionLong}</p>
        </div>

        <div class="integ-detail-section">
          <div class="integ-detail-section-title">Capteurs compatibles</div>
          <div class="integ-sensors-list">
            ${integ.sensors.map(s => `
              <div class="integ-sensor-pill">
                <i class="bi bi-broadcast"></i>
                <strong>${s}</strong>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="integ-detail-section">
          <div class="integ-detail-section-title">Comment ça marche ?</div>
          <ol class="integ-steps">
            <li>Vérifiez que vous disposez d'un capteur compatible (voir ci-dessus).</li>
            <li>Cliquez sur <strong>Connecter</strong> pour autoriser le partage de données.</li>
            <li>Configurez vos parcelles sur la plateforme partenaire.</li>
            <li>Vos données Weenat alimentent automatiquement les modèles.</li>
          </ol>
        </div>
      </div>

      <div class="integ-detail-aside">
        <div class="integ-aside-section">
          <div class="integ-aside-label">Statut</div>
          <div class="integ-aside-value" id="status-display">
            ${integ.connected
              ? '<span style="color:var(--ok)"><i class="bi bi-check-circle-fill"></i> Connectée</span>'
              : '<span style="color:var(--txt3)"><i class="bi bi-circle"></i> Non connectée</span>'}
          </div>
        </div>
        <div class="integ-aside-section">
          <div class="integ-aside-label">Catégorie</div>
          <div class="integ-aside-value">${label}</div>
        </div>
        <div class="integ-aside-section">
          <div class="integ-aside-label">Capteurs requis</div>
          <div class="integ-aside-value">${integ.sensors.join(', ')}</div>
        </div>
        <div class="integ-aside-section">
          <div class="integ-aside-label">Fréquence de sync.</div>
          <div class="integ-aside-value">Toutes les heures</div>
        </div>
        <div class="integ-aside-section">
          <div class="integ-aside-label">Support</div>
          <div class="integ-aside-value">
            <a href="#" style="color:var(--pri)">Documentation</a>
          </div>
        </div>
      </div>

    </div>
  `

  document.getElementById('connect-btn').addEventListener('click', toggleConnect)
}

function toggleConnect() {
  integ.connected = !integ.connected

  const btn = document.getElementById('connect-btn')
  btn.className = `integ-connect-btn${integ.connected ? ' connected' : ''}`
  btn.innerHTML = integ.connected
    ? '<i class="bi bi-check-circle-fill"></i> Connectée'
    : '<i class="bi bi-plug"></i> Connecter'

  document.getElementById('status-display').innerHTML = integ.connected
    ? '<span style="color:var(--ok)"><i class="bi bi-check-circle-fill"></i> Connectée</span>'
    : '<span style="color:var(--txt3)"><i class="bi bi-circle"></i> Non connectée</span>'
}

function getInitials(name) {
  return name.split(/[\s\-—]+/).slice(0, 2).map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

function typeIcon(type) {
  return { maladie: 'bi-bug', irrigation: 'bi-droplet', fertilisation: 'bi-flower1' }[type] || 'bi-plug'
}
