// Paramètres réseau — admin only
// Two-column layout: form (left) + live preview (right)
import { orgs } from '../data/orgs.js'
import { sensors } from '../data/sensors.js'
import { plots } from '../data/plots.js'
import { network } from '../data/network.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

// Working copy so edits don't mutate the imported object directly
const state = {
  nom: network.nom,
  description: network.description,
  email: network.email,
  telephone: network.telephone,
  siteWeb: network.siteWeb || '',
  siege: { ...network.siege },
  antennes: network.antennes.map(a => ({ ...a }))
}

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  renderForm()
  renderPreview()
})

// ——— Form ———

const META_NETWORKS = ['Grand Ouest', 'Météo Sud', 'Comptoirs du Nord', 'Réseaux Landais', 'Grande Beauce']

function renderForm() {
  const col = document.getElementById('settings-form-col')
  col.innerHTML = `
    <h2>Configurer le réseau</h2>
    <form id="network-form" autocomplete="off">

      <fieldset>
        <legend>Partage de capteurs</legend>
        <p style="font-size:12px;color:var(--txt3);margin-bottom:12px">
          Définissez quels capteurs sont partagés entre les adhérents de votre réseau.
        </p>
        <div class="share-toggle-row">
          <div class="share-toggle-info">
            <span class="share-toggle-label">Capteurs météo</span>
            <span class="share-toggle-desc">Les capteurs météo sont partagés</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="share-meteo" checked>
            <span class="toggle-knob"></span>
          </label>
        </div>
        <div class="share-toggle-row">
          <div class="share-toggle-info">
            <span class="share-toggle-label">Capteurs d'irrigation</span>
            <span class="share-toggle-desc">Les capteurs d'irrigation (tensiomètres, sondes capacitives et sondes de fertirrigation) sont partagés</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="share-irrigation">
            <span class="toggle-knob"></span>
          </label>
        </div>
        <div class="share-toggle-row">
          <div class="share-toggle-info">
            <span class="share-toggle-label">Stations virtuelles</span>
            <span class="share-toggle-desc">Les stations météo virtuelles sont partagées</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="share-virtual">
            <span class="toggle-knob"></span>
          </label>
        </div>
        <!-- Méta-réseaux — désactivé pour l'instant
        <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--bdr)">
          <div style="font-size:12px;font-weight:600;color:var(--txt2);margin-bottom:8px">Méta-réseaux</div>
          <p style="font-size:12px;color:var(--txt3);margin-bottom:10px">
            Partager vos capteurs au sein de groupements de réseaux.
          </p>
          ${META_NETWORKS.map(n => `
            <div class="share-toggle-row share-toggle-row--compact">
              <span class="share-toggle-label" style="font-size:12px">${n}</span>
              <label class="toggle-switch toggle-switch--sm">
                <input type="checkbox">
                <span class="toggle-knob"></span>
              </label>
            </div>
          `).join('')}
        </div>
        -->
      </fieldset>

      <fieldset>
        <legend>Identité</legend>
        <div class="form-row">
          <label for="f-nom">Nom du réseau</label>
          <input id="f-nom" type="text" value="${esc(state.nom)}" placeholder="Nom du réseau">
        </div>
        <div class="form-row">
          <label for="f-description">Description</label>
          <textarea id="f-description" rows="4" placeholder="Présentation du réseau…">${esc(state.description)}</textarea>
        </div>
        <div class="form-row">
          <label>Logo</label>
          <div class="logo-upload-area">
            <span id="logo-placeholder" class="logo-initials">${getInitials(state.nom)}</span>
            <button type="button" class="btn-secondary btn-sm" id="logo-upload-btn">
              <i class="bi bi-upload"></i> Importer un logo
            </button>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Contact</legend>
        <div class="form-row">
          <label for="f-email">Adresse email</label>
          <input id="f-email" type="email" value="${esc(state.email)}" placeholder="contact@reseau.fr">
        </div>
        <div class="form-row">
          <label for="f-telephone">Téléphone</label>
          <input id="f-telephone" type="tel" value="${esc(state.telephone)}" placeholder="02 00 00 00 00">
        </div>
        <div class="form-row">
          <label for="f-siteweb">Site web</label>
          <input id="f-siteweb" type="text" value="${esc(state.siteWeb)}" placeholder="www.monreseau.fr">
        </div>
      </fieldset>

      <fieldset>
        <legend>Siège social</legend>
        <div class="form-row">
          <label for="f-siege-adresse">Adresse</label>
          <input id="f-siege-adresse" type="text" value="${esc(state.siege.adresse)}" placeholder="Numéro et rue">
        </div>
        <div class="form-row form-row-inline">
          <div>
            <label for="f-siege-cp">Code postal</label>
            <input id="f-siege-cp" type="text" value="${esc(state.siege.codePostal)}" placeholder="00000">
          </div>
          <div>
            <label for="f-siege-ville">Ville</label>
            <input id="f-siege-ville" type="text" value="${esc(state.siege.ville)}" placeholder="Ville">
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Antennes &amp; points de vente</legend>
        <div id="antennes-list">
          ${state.antennes.map((a, i) => renderAntenneRow(a, i)).join('')}
        </div>
        <button type="button" id="add-antenne-btn" class="btn-secondary btn-sm">
          <i class="bi bi-plus-circle"></i> Ajouter une antenne
        </button>
      </fieldset>

      <div class="form-actions">
        <button type="button" id="save-btn" class="btn-primary">
          <i class="bi bi-check-lg"></i> Enregistrer
        </button>
        <button type="button" id="cancel-btn" class="btn-secondary">Annuler</button>
      </div>
    </form>
  `

  // Live binding
  bindField('f-nom', 'nom')
  bindField('f-description', 'description')
  bindField('f-email', 'email')
  bindField('f-telephone', 'telephone')
  bindField('f-siteweb', 'siteWeb')
  bindSiege('f-siege-adresse', 'adresse')
  bindSiege('f-siege-cp', 'codePostal')
  bindSiege('f-siege-ville', 'ville')

  document.getElementById('add-antenne-btn').addEventListener('click', () => {
    state.antennes.push({ nom: '', adresse: '', codePostal: '', ville: '', telephone: '' })
    refreshAntennes()
    renderPreview()
  })

  document.getElementById('save-btn').addEventListener('click', () => {
    showToast('Modifications enregistrées')
  })
  document.getElementById('cancel-btn').addEventListener('click', () => {
    // Reset to original
    Object.assign(state, {
      nom: network.nom, description: network.description,
      email: network.email, telephone: network.telephone, siteWeb: network.siteWeb || '',
      siege: { ...network.siege },
      antennes: network.antennes.map(a => ({ ...a }))
    })
    renderForm()
    renderPreview()
  })
}

function renderAntenneRow(a, i) {
  return `
    <div class="antenne-row" data-index="${i}">
      <div class="antenne-row-header">
        <strong>Antenne ${i + 1}</strong>
        <button type="button" class="btn-icon remove-antenne" data-index="${i}" title="Supprimer">
          <i class="bi bi-trash"></i>
        </button>
      </div>
      <div class="form-row">
        <label>Nom</label>
        <input type="text" class="antenne-field" data-index="${i}" data-key="nom" value="${esc(a.nom)}" placeholder="Ex : Antenne Nord">
      </div>
      <div class="form-row">
        <label>Adresse</label>
        <input type="text" class="antenne-field" data-index="${i}" data-key="adresse" value="${esc(a.adresse)}" placeholder="Numéro et rue">
      </div>
      <div class="form-row form-row-inline">
        <div>
          <label>Code postal</label>
          <input type="text" class="antenne-field" data-index="${i}" data-key="codePostal" value="${esc(a.codePostal)}" placeholder="00000">
        </div>
        <div>
          <label>Ville</label>
          <input type="text" class="antenne-field" data-index="${i}" data-key="ville" value="${esc(a.ville)}" placeholder="Ville">
        </div>
      </div>
      <div class="form-row">
        <label>Téléphone</label>
        <input type="tel" class="antenne-field" data-index="${i}" data-key="telephone" value="${esc(a.telephone || '')}" placeholder="02 00 00 00 00">
      </div>
    </div>
  `
}

function refreshAntennes() {
  const list = document.getElementById('antennes-list')
  list.innerHTML = state.antennes.map((a, i) => renderAntenneRow(a, i)).join('')
  bindAntenneFields()
}

function bindAntenneFields() {
  document.querySelectorAll('.antenne-field').forEach(input => {
    input.addEventListener('input', () => {
      const i = parseInt(input.dataset.index)
      const key = input.dataset.key
      state.antennes[i][key] = input.value
      renderPreview()
    })
  })
  document.querySelectorAll('.remove-antenne').forEach(btn => {
    btn.addEventListener('click', () => {
      state.antennes.splice(parseInt(btn.dataset.index), 1)
      refreshAntennes()
      renderPreview()
    })
  })
}

function bindField(id, key) {
  const el = document.getElementById(id)
  if (!el) return
  el.addEventListener('input', () => {
    state[key] = el.value
    if (key === 'nom') {
      const initEl = document.getElementById('logo-placeholder')
      if (initEl) initEl.textContent = getInitials(state.nom)
    }
    renderPreview()
  })
}

function bindSiege(id, key) {
  const el = document.getElementById(id)
  if (!el) return
  el.addEventListener('input', () => {
    state.siege[key] = el.value
    renderPreview()
  })
}

function bindAntennesOnLoad() {
  bindAntenneFields()
}

// ——— Preview ———

function renderPreview() {
  const col = document.getElementById('settings-preview-col')

  const totalSensors = sensors.length
  const totalParcels = plots.length
  const totalAdherents = orgs.length

  const antennesHtml = state.antennes.length
    ? state.antennes.map(a => `
        <div class="info-location-card">
          <div class="info-location-name">${esc(a.nom) || 'Antenne'}</div>
          <div class="info-location-addr">${[esc(a.adresse), esc(a.codePostal), esc(a.ville)].filter(Boolean).join(', ')}</div>
          ${a.telephone ? `<div class="info-location-tel"><i class="bi bi-telephone"></i> ${esc(a.telephone)}</div>` : ''}
        </div>`).join('')
    : ''

  col.innerHTML = `
    <div class="preview-label"><i class="bi bi-eye"></i> Aperçu — Page Informations</div>
    <div id="network-preview">
      <div class="info-header">
        <div class="info-logo-avatar">${getInitials(state.nom)}</div>
        <div>
          <h1 class="info-nom">${esc(state.nom) || '—'}</h1>
          <div class="info-contacts">
            ${state.telephone ? `<span><i class="bi bi-telephone"></i> ${esc(state.telephone)}</span>` : ''}
            ${state.email ? `<span><i class="bi bi-envelope"></i> ${esc(state.email)}</span>` : ''}
            ${state.siteWeb ? `<span><i class="bi bi-globe"></i> ${esc(state.siteWeb)}</span>` : ''}
          </div>
        </div>
      </div>

      ${state.description ? `<p class="info-description">${esc(state.description)}</p>` : ''}

      <div class="info-stats-row">
        <div class="info-stat"><div class="info-stat-value">${totalSensors}</div><div class="info-stat-label">Capteurs</div></div>
        <div class="info-stat"><div class="info-stat-value">${totalParcels}</div><div class="info-stat-label">Parcelles</div></div>
        <div class="info-stat"><div class="info-stat-value">${totalAdherents}</div><div class="info-stat-label">Adhérents</div></div>
      </div>

      <div class="info-section">
        <h3><i class="bi bi-geo-alt"></i> Siège social</h3>
        <div class="info-location-card">
          <div class="info-location-addr">
            ${[esc(state.siege.adresse), esc(state.siege.codePostal), esc(state.siege.ville)].filter(Boolean).join(', ') || '—'}
          </div>
          ${state.telephone ? `<div class="info-location-tel"><i class="bi bi-telephone"></i> ${esc(state.telephone)}</div>` : ''}
        </div>
      </div>

      ${antennesHtml ? `
      <div class="info-section">
        <h3><i class="bi bi-pin-map"></i> Antennes &amp; points de vente</h3>
        <div class="info-locations-grid">${antennesHtml}</div>
      </div>` : ''}
    </div>
  `
}

// ——— Utils ———

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function getInitials(name) {
  return (name || '?').split(/[\s\-']+/).slice(0, 2).map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

function showToast(msg) {
  const t = document.createElement('div')
  t.className = 'toast'
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.classList.add('show'), 10)
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300) }, 2500)
}
