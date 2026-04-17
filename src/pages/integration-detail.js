// Integration detail page
import { integrations } from './integrations.js'
import { plots } from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { orgs } from '../data/orgs.js'
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

const INTEG_META = {
  'abelio':                 { cultures: 'Grandes cultures (blé, maïs, colza)', pays: 'France, Belgique', email: 'contact@abelio.fr', siteWeb: 'abelio.fr' },
  'criiam-sud':             { cultures: 'Vigne, maraîchage, arboriculture', pays: 'France (bassin méditerranéen)', email: 'contact@criiam-sud.fr', siteWeb: 'criiam-sud.fr' },
  'cropwise-protector':     { cultures: 'Grandes cultures (blé, colza, pomme de terre)', pays: 'France, Belgique, Suisse', email: 'cropwise.support@syngenta.com', siteWeb: 'cropwise.com' },
  'decitrait':              { cultures: 'Vigne', pays: 'France, Suisse, Espagne', email: 'contact@decitrait.fr', siteWeb: 'decitrait.fr', jetons: 5 },
  'irre-lis-mono':          { cultures: 'Toutes cultures (maïs, sorgho, pomme de terre…)', pays: 'France', email: 'irre-lis@arvalis.fr', siteWeb: 'irre-lis.fr', jetons: 4 },
  'irre-lis-multi':         { cultures: 'Toutes cultures (rotation multi-parcelles)', pays: 'France', email: 'irre-lis@arvalis.fr', siteWeb: 'irre-lis.fr', jetons: 3 },
  'limacapt':               { cultures: 'Grandes cultures (colza, céréales)', pays: 'France, Belgique', email: 'contact@limacapt.fr', siteWeb: 'limacapt.fr' },
  'arvalis-previlis-mileos':{ cultures: 'Céréales d\'hiver, pomme de terre', pays: 'France', email: 'previlis@arvalis.fr', siteWeb: 'arvalis.fr' },
  'movida-grapevision':     { cultures: 'Vigne', pays: 'France, Espagne, Italie', email: 'grapevision@movida.fr', siteWeb: 'grapevision.com' },
  'pixagri':                { cultures: 'Toutes cultures', pays: 'France, Europe', email: 'contact@pixagri.com', siteWeb: 'pixagri.com' },
  'rimpro':                 { cultures: 'Vigne, fruits à pépins', pays: 'France, Belgique, Suisse', email: 'contact@rimpro.eu', siteWeb: 'rimpro.eu' },
  'semiloni':               { cultures: 'Oignon porte-graine', pays: 'France', email: 'semiloni@inrae.fr', siteWeb: 'semiloni.fr' },
  'vintel':                 { cultures: 'Vigne', pays: 'France', email: 'contact@vintel.fr', siteWeb: 'vintel.fr' },
  'vitimeteo':              { cultures: 'Vigne', pays: 'France, Suisse, Allemagne', email: 'info@vitimeteo.de', siteWeb: 'vitimeteo.de' },
  'xarvio':                 { cultures: 'Grandes cultures (blé, colza, maïs)', pays: 'France, Belgique, Allemagne, Espagne', email: 'xarvio.support@basf.com', siteWeb: 'xarvio.com' },
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
  const meta  = INTEG_META[integ.id] || {}

  const connectedPlots = plots.filter(p => (p.integrations || []).includes(integ.name))

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
                ? '<i class="bi bi-pause-circle-fill"></i> Désactiver'
                : '<i class="bi bi-play-circle-fill"></i> Activer'}
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

        ${connectedPlots.length ? `
        <div class="integ-detail-section">
          <div class="integ-detail-section-title">Parcelles connectées (${connectedPlots.length})</div>
          <div class="admin-table-wrap" style="margin-top:8px">
            <table class="admin-table" style="font-size:12px">
              <thead>
                <tr>
                  <th>Parcelle</th>
                  <th>Ville</th>
                  <th>Surface</th>
                  <th>Culture</th>
                  <th>Irrigation</th>
                  <th>Capteurs</th>
                  <th>ID parcelle</th>
                </tr>
              </thead>
              <tbody>
                ${connectedPlots.map(p => {
                  const org = orgs.find(o => o.id === p.orgId)
                  const ville = org?.ville || '—'
                  const plotSensors = sensors.filter(s => s.parcelId === p.id)
                  const models = [...new Set(plotSensors.map(s => s.model))].join(', ') || '—'
                  return `<tr>
                    <td style="font-weight:500">${p.name}</td>
                    <td class="member-email">${ville}</td>
                    <td class="num">${p.area} ha</td>
                    <td>${p.crop}</td>
                    <td>${p.irrigation}</td>
                    <td class="member-email">${models}</td>
                    <td class="num">${p.id}</td>
                  </tr>`
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
        ` : ''}
      </div>

      <div class="integ-detail-aside">
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
        ${meta.cultures ? `
        <div class="integ-aside-section">
          <div class="integ-aside-label">Cultures couvertes</div>
          <div class="integ-aside-value">${meta.cultures}</div>
        </div>` : ''}
        ${meta.pays ? `
        <div class="integ-aside-section">
          <div class="integ-aside-label">Pays couverts</div>
          <div class="integ-aside-value">${meta.pays}</div>
        </div>` : ''}
        ${meta.jetons != null ? `
        <div class="integ-aside-section">
          <div class="integ-aside-label">Jetons disponibles</div>
          <div class="integ-aside-value" style="font-size:20px;font-weight:600;color:var(--pri)">${meta.jetons}</div>
        </div>` : ''}
        ${meta.email ? `
        <div class="integ-aside-section">
          <div class="integ-aside-label">Email</div>
          <div class="integ-aside-value"><a href="mailto:${meta.email}" style="color:var(--pri)">${meta.email}</a></div>
        </div>` : ''}
        ${meta.siteWeb ? `
        <div class="integ-aside-section">
          <div class="integ-aside-label">Site web</div>
          <div class="integ-aside-value"><a href="#" style="color:var(--pri)">${meta.siteWeb}</a></div>
        </div>` : ''}
        <div class="integ-aside-section">
          <div class="integ-aside-label">Aide</div>
          <div class="integ-aside-value">
            <a href="#" style="color:var(--pri)">Comment faire ?</a>
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
    ? '<i class="bi bi-pause-circle-fill"></i> Désactiver'
    : '<i class="bi bi-play-circle-fill"></i> Activer'
}

function getInitials(name) {
  return name.split(/[\s\-—]+/).slice(0, 2).map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

function typeIcon(type) {
  return { maladie: 'bi-bug', irrigation: 'bi-droplet', fertilisation: 'bi-flower1' }[type] || 'bi-plug'
}
