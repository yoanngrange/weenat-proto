// Paramètres exploitation — single form page
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { members } from '../data/members.js'
import { orgs } from '../data/orgs.js'
import { network } from '../data/network.js'
import { METIERS } from '../data/constants.js'

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
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18
  }).addTo(map)
  const marker = L.marker([lat, lng], { draggable: false }).addTo(map)
  marker.bindPopup(`<strong>${org.name || 'Mon exploitation'}</strong>`).openPopup()
}


const NEARBY_NETWORKS = [
  { name: "Breiz'Agri Conseil",   distance: 12,  adherents: 47, capteurs: 312, parcelles: 1840, ville: "Bruz",           telephone: "02 99 05 12 34" },
  { name: "Armor Agri",           distance: 24,  adherents: 23, capteurs: 154, parcelles: 920,  ville: "Saint-Brieuc",   telephone: "02 96 33 45 67" },
  { name: "Terres de Bretagne",   distance: 31,  adherents: 61, capteurs: 418, parcelles: 2310, ville: "Vitré",          telephone: "02 99 75 23 89" },
  { name: "Coop Armorique",       distance: 38,  adherents: 18, capteurs: 97,  parcelles: 540,  ville: "Loudéac",        telephone: "02 96 28 14 56" },
  { name: "Agri Trégor",          distance: 45,  adherents: 34, capteurs: 201, parcelles: 1120, ville: "Guingamp",       telephone: "02 96 44 89 12" },
  { name: "Finistère AgriTech",   distance: 53,  adherents: 29, capteurs: 187, parcelles: 830,  ville: "Carhaix",        telephone: "02 98 93 56 78" },
  { name: "Léon Nature",          distance: 61,  adherents: 12, capteurs: 68,  parcelles: 310,  ville: "Landivisiau",    telephone: "02 98 68 32 14" },
  { name: "Pays de Morlaix Agri", distance: 67,  adherents: 41, capteurs: 267, parcelles: 1540, ville: "Morlaix",        telephone: "02 98 88 71 23" },
  { name: "Réseau Manche Ouest",  distance: 72,  adherents: 56, capteurs: 389, parcelles: 2120, ville: "Saint-Lô",       telephone: "02 33 77 45 90" },
  { name: "Granit Agri",          distance: 78,  adherents: 9,  capteurs: 44,  parcelles: 180,  ville: "Fougères",       telephone: "02 99 99 12 67" },
  { name: "Côte d'Émeraude",      distance: 85,  adherents: 27, capteurs: 163, parcelles: 740,  ville: "Saint-Malo",     telephone: "02 99 40 78 34" },
  { name: "Agri Ille-et-Vilaine", distance: 91,  adherents: 38, capteurs: 241, parcelles: 1380, ville: "Redon",          telephone: "02 99 71 56 89" },
  { name: "Morbihan Agritech",    distance: 98,  adherents: 15, capteurs: 87,  parcelles: 420,  ville: "Vannes",         telephone: "02 97 47 23 45" },
  { name: "Loire-Atlantique Net", distance: 104, adherents: 44, capteurs: 298, parcelles: 1690, ville: "Nantes",         telephone: "02 40 35 67 12" },
  { name: "Maine Agri",           distance: 112, adherents: 31, capteurs: 196, parcelles: 1050, ville: "Laval",          telephone: "02 43 56 34 78" },
  { name: "Cotentin Réseau",      distance: 119, adherents: 20, capteurs: 121, parcelles: 580,  ville: "Cherbourg",      telephone: "02 33 93 45 67" },
  { name: "Agri Normandie",       distance: 126, adherents: 52, capteurs: 341, parcelles: 1960, ville: "Caen",           telephone: "02 31 44 89 23" },
  { name: "Mayenne Connect",      distance: 133, adherents: 8,  capteurs: 39,  parcelles: 150,  ville: "Mayenne",        telephone: "02 43 04 56 78" },
  { name: "Pays de la Loire",     distance: 141, adherents: 67, capteurs: 455, parcelles: 2680, ville: "Angers",         telephone: "02 41 88 12 34" },
  { name: "Anjou Agri",           distance: 148, adherents: 24, capteurs: 142, parcelles: 630,  ville: "Saumur",         telephone: "02 41 51 78 90" },
]

function netInitials(name) {
  return name.split(/[\s'']+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('')
}

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
const adminOrg = orgs.find(o => o.id === 100) || {}

function parseAdresse(str) {
  const cpMatch = (str || '').match(/(\d{5})/)
  if (cpMatch) {
    const idx = str.indexOf(cpMatch[0])
    return { rue: str.slice(0, idx).trim().replace(/,\s*$/, ''), cp: cpMatch[0], ville: str.slice(idx + 5).trim().replace(/^,?\s*/, '') }
  }
  return { rue: str || '', cp: '', ville: '' }
}

const org = isAdmin
  ? { ...adminOrg, name: network.nom, siret: network.siret, adresse: network.siege.adresse, codePostal: network.siege.codePostal, ville: network.siege.ville, pays: network.siege.pays }
  : (() => {
      const raw = orgs.find(o => o.id === 1) || { name: 'Ferme du Bocage', ville: 'Rennes', lat: 48.1, lng: -1.7 }
      if (!raw.codePostal && raw.adresse) {
        const { rue, cp, ville } = parseAdresse(raw.adresse)
        return { ...raw, adresse: rue, codePostal: cp, ville: ville || raw.ville }
      }
      return raw
    })()
const owners = members.filter(m => m.role === 'propriétaire' || m.role === 'admin')

function renderForm() {
  const el = document.getElementById('parametres-form')
  if (!el) return

  el.innerHTML = `
    <div class="param-2col">
      <div class="param-section">
        <div class="param-section-title">Mon exploitation</div>
        <div class="param-form-grid">
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
              ${METIERS.map(p => `
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
        <div id="param-map" style="height:100%;min-height:260px"></div>
        <div style="padding:8px 14px;font-size:12px;color:var(--txt2)">
          <i class="bi bi-info-circle"></i> Position calculée depuis l'adresse renseignée.
        </div>
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

    <div class="param-section">
      <div class="param-section-title">Réseaux</div>
      <div style="display:inline-flex;gap:0;background:var(--bg2);border:1px solid var(--bdr);border-radius:8px;padding:3px;margin-bottom:20px">
        <button class="p-reseau-tab" data-ptab="adherente" style="border:none;border-radius:6px;padding:7px 18px;font-size:13px;font-weight:500;cursor:pointer;background:#0172A4;color:#fff;font-family:inherit">Adhérente d'un réseau</button>
        <button class="p-reseau-tab" data-ptab="independante" style="border:none;border-radius:6px;padding:7px 18px;font-size:13px;font-weight:500;cursor:pointer;background:transparent;color:var(--txt2);font-family:inherit">Indépendante</button>
      </div>

      <div id="p-reseau-panel-adherente">
        <div style="display:flex;align-items:flex-start;gap:16px;padding:16px;background:var(--bg2);border:1px solid var(--bdr);border-radius:8px;margin-bottom:14px">
          <div style="width:48px;height:48px;border-radius:10px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <span style="font-size:13px;font-weight:700;color:#0172A4">BA</span>
          </div>
          <div>
            <div style="font-weight:600;font-size:15px;margin-bottom:4px">Breiz'Agri Conseil</div>
            <div style="font-size:13px;color:var(--txt2);line-height:1.5">L'exploitation Ferme du Bocage est adhérente du réseau Breiz'Agri Conseil.</div>
            <div style="font-size:12px;color:var(--txt3);margin-top:4px">Membre depuis le 15/03/2022</div>
          </div>
        </div>
        <button id="p-btn-quitter-reseau" class="btn-danger">Quitter le réseau</button>
      </div>

      <div id="p-reseau-panel-independante" style="display:none">
        <div style="font-size:13px;color:var(--txt2);margin-bottom:14px">20 réseaux proches de votre exploitation</div>
        <div style="display:flex;flex-wrap:wrap;gap:10px">
          ${NEARBY_NETWORKS.map((net, i) => `
            <div style="display:flex;flex-direction:column;gap:10px;padding:14px 16px;background:var(--bg2);border:1px solid var(--bdr);border-radius:8px;min-width:280px;flex:1">
              <div style="display:flex;align-items:flex-start;gap:12px">
                <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                  <span style="font-size:11px;font-weight:700;color:#0172A4">${netInitials(net.name)}</span>
                </div>
                <div style="flex:1;min-width:0">
                  <div style="font-weight:600;font-size:14px">${net.name}</div>
                  <div style="font-size:12px;color:var(--txt2);margin-top:3px">${net.distance} km <br> ${net.capteurs} capteurs <br> ${net.parcelles} parcelles <br> ${net.adherents} adhérents </div>
                  <div style="font-size:12px;color:var(--txt3);margin-top:3px">${net.ville} <br> ${net.telephone}</div>
                </div>
              </div>
              <button class="btn-secondary p-join-btn" data-net-idx="${i}" style="align-self:flex-start;font-size:12px">Demander à rejoindre</button>
            </div>`).join('')}
          <div style="min-width:280px;flex:1;height:0;padding:0;margin:0"></div>
          <div style="min-width:280px;flex:1;height:0;padding:0;margin:0"></div>
          <div style="min-width:280px;flex:1;height:0;padding:0;margin:0"></div>
        </div>
      </div>
    </div>
  `

  document.getElementById('save-org-btn').addEventListener('click', () => {
    showToast('Paramètres enregistrés.')
  })

  // Réseaux tabs
  el.querySelectorAll('.p-reseau-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      el.querySelectorAll('.p-reseau-tab').forEach(b => {
        const active = b === btn
        b.style.background = active ? '#0172A4' : 'transparent'
        b.style.color      = active ? '#fff'    : 'var(--txt2)'
      })
      const tab = btn.dataset.ptab
      el.querySelector('#p-reseau-panel-adherente').style.display   = tab === 'adherente'   ? '' : 'none'
      el.querySelector('#p-reseau-panel-independante').style.display = tab === 'independante' ? '' : 'none'
    })
  })

  el.querySelector('#p-btn-quitter-reseau')?.addEventListener('click', () => {
    if (confirm("Quitter le réseau Breiz'Agri Conseil ?\n\nCette action est irréversible et devra être validée par votre administrateur réseau.")) {
      showToast('Demande de résiliation envoyée.')
    }
  })

  el.querySelectorAll('.p-join-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const net = NEARBY_NETWORKS[+btn.dataset.netIdx]
      showToast(`Demande envoyée à ${net.name}`)
    })
  })
}

function showToast(msg) {
  const t = document.createElement('div')
  t.className = 'toast'
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.remove(), 3000)
}
