// Paramètres exploitation — single form page
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { members } from '../data/members.js'
import { orgs } from '../data/orgs.js'
import { network } from '../data/network.js'

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  renderForm()
  initParamMap()
})

function initParamMap() {
  const mapEl = document.getElementById('param-map')
  if (!mapEl || !window.L) return
  const lat = org.lat || 48.117
  const lng = org.lng || -1.678
  const map = L.map(mapEl, { zoomControl: true, scrollWheelZoom: false }).setView([lat, lng], 13)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map)
  const marker = L.marker([lat, lng], { draggable: false }).addTo(map)
  marker.bindPopup(`<strong>${org.name || 'Mon exploitation'}</strong>`).openPopup()
}

const PROFESSIONS = [
  'Arboriculture', 'Viticulture', 'Maraîchage', 'Grandes cultures', 'Polyculture-Élevage',
  'Pépiniériste', 'Floriculture', 'Trufficulture',
  'Organismes publics / semi-publics', 'Coopérative', 'Négoce', 'Concessionnaire',
  'Semencier', 'Laboratoire / Institut / Recherche', 'Autre'
]

const SUBSCRIPTION_PLANS = [
  {
    id: 'plus',
    name: 'Weenat Plus',
    price: '14 €/mois',
    features: ['Historique illimité', 'Alertes', 'Intégrations', 'Exports', 'Accès API'],
    color: '#00B093',
    current: true
  },
  {
    id: 'expert',
    name: 'Weenat Expert',
    price: '25 €/mois',
    features: ['Historique illimité', 'Alertes', 'Intégrations', 'Exports', 'Accès API', 'Capteurs et fonctionnalités Irrigation'],
    color: '#006798'
  }
]

// Current org — depends on role
const isAdmin = (localStorage.getItem('menuRole') || 'admin-reseau') === 'admin-reseau'
const org = isAdmin
  ? { ...orgs[0], name: network.nom, siret: network.siret, adresse: network.siege.adresse, codePostal: network.siege.codePostal, ville: network.siege.ville, pays: network.siege.pays }
  : orgs[0] || { name: 'Ferme du Bocage', ville: 'Rennes', lat: 48.1, lng: -1.7 }
const owners = members.filter(m => m.role === 'propriétaire' || m.role === 'admin')

function renderForm() {
  const el = document.getElementById('parametres-form')
  if (!el) return

  el.innerHTML = `
    <div class="param-section">
      <div class="param-section-title">Mon exploitation</div>

      <div class="param-form-grid" style="max-width:640px">
        <div class="param-field">
          <label class="param-label">Nom de l'exploitation</label>
          <input type="text" class="param-input" id="org-name" value="${org.name || ''}">
        </div>
        <div class="param-field">
          <label class="param-label">Propriétaire</label>
          <select class="param-input" id="org-owner">
            ${owners.map(m => `<option value="${m.id}">${m.prenom} ${m.nom}</option>`).join('')}
          </select>
        </div>
        <div class="param-field param-field--wide">
          <label class="param-label">Métiers</label>
          <div class="param-chips" id="profession-chips">
            ${PROFESSIONS.map(p => `
              <label class="param-chip">
                <input type="checkbox" value="${p}"> ${p}
              </label>
            `).join('')}
          </div>
        </div>
        <div class="param-field param-field--wide">
          <label class="param-label">Adresse du siège</label>
          <input type="text" class="param-input" id="org-address" placeholder="Numéro et rue" value="${org.adresse || ''}">
        </div>
        <div class="param-field">
          <label class="param-label">Code postal</label>
          <input type="text" class="param-input" id="org-cp" placeholder="00000" value="${org.codePostal || ''}">
        </div>
        <div class="param-field">
          <label class="param-label">Ville</label>
          <input type="text" class="param-input" id="org-ville" placeholder="Ville" value="${org.ville || ''}">
        </div>
      </div>

      <button class="btn-primary" id="save-org-btn" style="margin-top:16px">
        <i class="bi bi-check-lg"></i> Enregistrer
      </button>
    </div>

    <div class="param-section" style="padding:0;overflow:hidden;border-radius:8px;border:1px solid var(--bdr)">
      <div style="padding:10px 14px;font-weight:600;font-size:13px;border-bottom:1px solid var(--bdr);background:var(--bg2)">
        <i class="bi bi-geo-alt" style="color:var(--pri)"></i> Localisation de l'exploitation
      </div>
      <div id="param-map" style="height:260px"></div>
      <div style="padding:8px 14px;font-size:12px;color:var(--txt2)">
        <i class="bi bi-info-circle"></i> Position calculée depuis l'adresse renseignée.
      </div>
    </div>

    <div class="param-section">
      <div class="param-section-title">Niveau d'abonnement</div>
      <div class="param-plans">
        ${SUBSCRIPTION_PLANS.map(plan => `
          <div class="param-plan${plan.current ? ' param-plan--current' : ''}" style="border-color:${plan.current ? plan.color : 'var(--bdr)'}">
            ${plan.current ? `<div class="param-plan-badge" style="background:${plan.color}">Actuel</div>` : ''}
            <div class="param-plan-name" style="color:${plan.color}">${plan.name}</div>
            <div class="param-plan-price">${plan.price}</div>
            <ul class="param-plan-features">
              ${plan.features.map(f => `<li><i class="bi bi-check-circle-fill" style="color:${plan.color}"></i> ${f}</li>`).join('')}
            </ul>
            ${!plan.current ? `<button class="btn-secondary" style="margin-top:12px;width:100%">Passer à ${plan.name.replace('Weenat ', '')}</button>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `

  document.getElementById('save-org-btn').addEventListener('click', () => {
    showToast('Paramètres enregistrés.')
  })
}

function showToast(msg) {
  const t = document.createElement('div')
  t.className = 'toast'
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.remove(), 3000)
}
