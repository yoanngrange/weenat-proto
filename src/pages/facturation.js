// Facturation page — redesigned
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { members } from '../data/members.js'
import { orgs } from '../data/orgs.js'
import { network } from '../data/network.js'

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  renderBillingPage()
})

// ── Constants ─────────────────────────────────────────────────────────────────

const CONTRACT = {
  plan:                 'Plus',
  anniversaire:         '2022-03-15',
  numero:               'CTR-2022-00418',
  licencesMembres:      5,
  licencesAdherents:    3,
  licencesIntegrations: 27,
  licencesTotal:        8,
  prixUnitaire:         29,   // € HT / mois
}

const BILLING_ADDR = {
  societe:    network.nom,
  siret:      network.siret,
  adresse:    network.siege.adresse,
  cp:         network.siege.codePostal,
  ville:      network.siege.ville,
  pays:       network.siege.pays,
}

// ── Main render ───────────────────────────────────────────────────────────────

function renderBillingPage() {
  const root = document.getElementById('billing-page')
  if (!root) return

  const invoices = generateInvoices()

  root.innerHTML = `
    <!-- 2-column top: stats+contract left, billing address right -->
    <div class="billing-top-2col">
      <div class="billing-top-left">
        <!-- Stats -->
        <div class="billing-section">
          <h2 class="billing-section-title"><i class="bi bi-bar-chart"></i> Licences</h2>
          <div class="billing-contract-grid">
            <div class="billing-stat-card">
              <div class="billing-stat-value">${CONTRACT.licencesMembres}</div>
              <div class="billing-stat-label">Licences membres</div>
            </div>
            <div class="billing-stat-card">
              <div class="billing-stat-value">${CONTRACT.licencesAdherents}</div>
              <div class="billing-stat-label">Licences adhérents</div>
            </div>
            <div class="billing-stat-card">
              <div class="billing-stat-value">${CONTRACT.licencesIntegrations}</div>
              <div class="billing-stat-label">Licences intégrations</div>
            </div>
          </div>
        </div>

        <!-- Contract info -->
        <div class="billing-section">
          <h2 class="billing-section-title"><i class="bi bi-file-earmark-text"></i> Contrat</h2>
          <div class="billing-contract-grid">
            <div class="billing-contract-item">
              <span class="billing-contract-label">Abonnement</span>
              <span class="billing-contract-value">
                <span class="plan-badge plan-badge--${CONTRACT.plan.toLowerCase()}">${CONTRACT.plan}</span>
              </span>
            </div>
            <div class="billing-contract-item">
              <span class="billing-contract-label">Début du contrat</span>
              <span class="billing-contract-value">${formatDate(CONTRACT.anniversaire)}</span>
            </div>
            <div class="billing-contract-item">
              <span class="billing-contract-label">N° contrat</span>
              <span class="billing-contract-value billing-contract-mono">${CONTRACT.numero}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="billing-top-right">
        <div class="billing-section">
          <div class="billing-section-title" style="display:flex;align-items:center;justify-content:space-between">
            <span><i class="bi bi-building"></i> Adresses</span>
            <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:400;cursor:pointer">
              <input type="checkbox" id="same-delivery-addr" checked>
              Même adresse de livraison
            </label>
          </div>

          <!-- Onglets -->
          <div class="billing-addr-tabs" id="billing-addr-tabs">
            <button class="billing-addr-tab active" data-tab="facturation">Facturation</button>
            <button class="billing-addr-tab" data-tab="livraison" id="tab-livraison" style="display:none">Livraison</button>
          </div>

          <!-- Onglet facturation -->
          <div id="tab-content-facturation" class="billing-addr-tab-content">
            <form id="billing-addr-form" autocomplete="off">
              <div class="billing-form-grid">
                <div class="form-row billing-form-full">
                  <label for="bf-societe">Raison sociale</label>
                  <input id="bf-societe" type="text" value="${esc(BILLING_ADDR.societe)}" placeholder="Nom de la société">
                </div>
                <div class="form-row billing-form-full">
                  <label for="bf-adresse">Adresse postale</label>
                  <input id="bf-adresse" type="text" value="${esc(BILLING_ADDR.adresse)}" placeholder="Numéro et rue">
                </div>
                <div class="form-row">
                  <label for="bf-cp">Code postal</label>
                  <input id="bf-cp" type="text" value="${esc(BILLING_ADDR.cp)}" placeholder="00000">
                </div>
                <div class="form-row">
                  <label for="bf-ville">Ville</label>
                  <input id="bf-ville" type="text" value="${esc(BILLING_ADDR.ville)}" placeholder="Ville">
                </div>
                <div class="form-row billing-form-full">
                  <label for="bf-pays">Pays</label>
                  <select id="bf-pays">
                    ${COUNTRIES.map(c => `<option value="${c.code}"${c.code === BILLING_ADDR.pays ? ' selected' : ''}>${c.label}</option>`).join('')}
                  </select>
                </div>
                <div class="form-row billing-form-full" id="bf-siret-row">
                  <label for="bf-siret" id="bf-siret-label">SIRET</label>
                  <input id="bf-siret" type="text" value="${esc(BILLING_ADDR.siret)}" placeholder="14 chiffres">
                </div>
              </div>
            </form>
          </div>

          <!-- Onglet livraison -->
          <div id="tab-content-livraison" class="billing-addr-tab-content" style="display:none">
            <form id="delivery-addr-form" autocomplete="off">
              <div class="billing-form-grid">
                <div class="form-row billing-form-full">
                  <label for="dl-nom">Nom / Raison sociale</label>
                  <input id="dl-nom" type="text" placeholder="Destinataire">
                </div>
                <div class="form-row billing-form-full">
                  <label for="dl-adresse">Adresse postale</label>
                  <input id="dl-adresse" type="text" placeholder="Numéro et rue">
                </div>
                <div class="form-row">
                  <label for="dl-cp">Code postal</label>
                  <input id="dl-cp" type="text" placeholder="00000">
                </div>
                <div class="form-row">
                  <label for="dl-ville">Ville</label>
                  <input id="dl-ville" type="text" placeholder="Ville">
                </div>
              </div>
            </form>
          </div>

          <div class="form-actions" style="margin-top:16px">
            <button type="button" id="billing-addr-save" class="btn-primary">
              <i class="bi bi-check-lg"></i> Enregistrer
            </button>
            <button type="button" id="billing-addr-cancel" class="btn-secondary">Annuler</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Invoice history -->
    <div class="billing-section">
      <h2 class="billing-section-title"><i class="bi bi-receipt"></i> Historique des factures</h2>
      <div class="billing-table-wrap">
        <table class="billing-table">
          <thead>
            <tr>
              <th>N° facture</th>
              <th>Date d'émission</th>
              <th style="text-align:right">Montant HT</th>
              <th>Date de règlement</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${invoices.map(inv => `
              <tr>
                <td class="billing-invoice-num">${inv.numero}</td>
                <td>${formatDate(inv.dateEmission)}</td>
                <td class="billing-amount">${inv.montant.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} € HT</td>
                <td>${inv.dateReglement ? formatDate(inv.dateReglement) : '<span style="color:var(--txt3)">—</span>'}</td>
                <td>${invoiceStatusBadge(inv.statut)}</td>
                <td class="billing-actions-cell">
                  <button class="icon-btn billing-pdf-btn" data-id="${inv.numero}" title="Télécharger PDF">
                    <i class="bi bi-file-earmark-pdf"></i>
                  </button>
                  <button class="icon-btn billing-detail-btn" data-id="${inv.numero}" title="Voir le détail">
                    <i class="bi bi-eye"></i>
                  </button>
                  ${inv.statut === 'en attente' ? `
                    <button class="icon-btn billing-pay-btn" data-id="${inv.numero}" title="Payer" style="color:var(--ok)">
                      <i class="bi bi-credit-card"></i>
                    </button>
                  ` : ''}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `

  bindEvents()
}

// ── Event binding ─────────────────────────────────────────────────────────────

function bindEvents() {
  // Country select → update tax field label
  const paysSelect = document.getElementById('bf-pays')
  if (paysSelect) {
    paysSelect.addEventListener('change', () => updateTaxField(paysSelect.value))
    updateTaxField(paysSelect.value)
  }

  // Onglets adresses
  const tabBtns = document.querySelectorAll('.billing-addr-tab')
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      document.querySelectorAll('.billing-addr-tab-content').forEach(c => c.style.display = 'none')
      document.getElementById(`tab-content-${btn.dataset.tab}`).style.display = ''
    })
  })

  // Checkbox "même adresse"
  const sameDelivery = document.getElementById('same-delivery-addr')
  const tabLivraison = document.getElementById('tab-livraison')
  if (sameDelivery && tabLivraison) {
    sameDelivery.addEventListener('change', () => {
      tabLivraison.style.display = sameDelivery.checked ? 'none' : ''
      if (!sameDelivery.checked) tabLivraison.click()
      else {
        tabBtns.forEach(b => b.classList.remove('active'))
        document.querySelector('[data-tab="facturation"]').classList.add('active')
        document.querySelectorAll('.billing-addr-tab-content').forEach(c => c.style.display = 'none')
        document.getElementById('tab-content-facturation').style.display = ''
      }
    })
  }

  document.getElementById('billing-addr-save')?.addEventListener('click', () => {
    showToast('Adresse enregistrée.')
  })
  document.getElementById('billing-addr-cancel')?.addEventListener('click', () => {
    document.getElementById('bf-societe').value = BILLING_ADDR.societe
    document.getElementById('bf-adresse').value = BILLING_ADDR.adresse
    document.getElementById('bf-cp').value       = BILLING_ADDR.cp
    document.getElementById('bf-ville').value    = BILLING_ADDR.ville
    document.getElementById('bf-pays').value     = BILLING_ADDR.pays
    document.getElementById('bf-siret').value    = BILLING_ADDR.siret
    updateTaxField(BILLING_ADDR.pays)
  })

  document.querySelectorAll('.billing-pdf-btn').forEach(btn => {
    btn.addEventListener('click', () => showToast(`PDF facture ${btn.dataset.id} téléchargé.`))
  })
  document.querySelectorAll('.billing-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => showToast(`Détail facture ${btn.dataset.id}.`))
  })
  document.querySelectorAll('.billing-pay-btn').forEach(btn => {
    btn.addEventListener('click', () => showToast(`Paiement facture ${btn.dataset.id} : redirection…`))
  })
}

function updateTaxField(pays) {
  const row   = document.getElementById('bf-siret-row')
  const label = document.getElementById('bf-siret-label')
  const input = document.getElementById('bf-siret')
  if (!row || !label || !input) return
  if (pays === 'FR') {
    row.hidden    = false
    label.textContent = 'SIRET'
    input.placeholder = '14 chiffres'
  } else if (EU_COUNTRIES.includes(pays)) {
    row.hidden    = false
    label.textContent = 'N° TVA intracommunautaire'
    input.placeholder = 'FR12345678901'
  } else {
    row.hidden = true
  }
}

// ── Data helpers ──────────────────────────────────────────────────────────────

function generateInvoices() {
  const invoices = []
  const now      = new Date('2026-04-15')
  const MONTHLY_AMOUNTS = [150, 250, 100, 150, 250, 150, 100, 250, 150, 100]

  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const yyyy = d.getFullYear()
    const mm   = String(d.getMonth() + 1).padStart(2, '0')
    const isPast = i > 0
    const statut = isPast
      ? (i === 2 ? 'en attente' : 'payée')
      : 'en attente'
    const dateReglement = statut === 'payée'
      ? isoDate(new Date(d.getFullYear(), d.getMonth(), 18))
      : null

    const isDecember = d.getMonth() === 11
    const montant = isDecember ? 1980 : MONTHLY_AMOUNTS[i % MONTHLY_AMOUNTS.length]

    invoices.push({
      numero:         `FAC-${yyyy}-${mm}`,
      dateEmission:   isoDate(new Date(d.getFullYear(), d.getMonth(), 1)),
      montant,
      dateReglement,
      statut,
    })
  }
  return invoices.reverse()
}

function isoDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function formatDate(iso) {
  if (!iso) return '—'
  const [y, m, day] = iso.split('-')
  return `${day}/${m}/${y}`
}

function invoiceStatusBadge(statut) {
  if (statut === 'payée')      return `<span class="statut-badge statut-actif"><i class="bi bi-check-circle-fill"></i> Payée</span>`
  if (statut === 'en attente') return `<span class="statut-badge statut-essai"><i class="bi bi-clock"></i> En attente</span>`
  if (statut === 'échue')      return `<span class="statut-badge statut-inactif"><i class="bi bi-exclamation-circle"></i> Échue</span>`
  return `<span class="statut-badge">${statut}</span>`
}

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function showToast(msg) {
  const t = document.createElement('div')
  t.className = 'toast'
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.classList.add('show'), 10)
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300) }, 2500)
}

// ── Country lists ─────────────────────────────────────────────────────────────

const EU_COUNTRIES = ['DE','AT','BE','BG','CY','HR','DK','ES','EE','FI','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','CZ','RO','SK','SI','SE']

const COUNTRIES = [
  { code: 'FR', label: 'France' },
  { code: 'BE', label: 'Belgique' },
  { code: 'CH', label: 'Suisse' },
  { code: 'LU', label: 'Luxembourg' },
  { code: 'DE', label: 'Allemagne' },
  { code: 'ES', label: 'Espagne' },
  { code: 'IT', label: 'Italie' },
  { code: 'PT', label: 'Portugal' },
  { code: 'NL', label: 'Pays-Bas' },
  { code: 'AT', label: 'Autriche' },
  { code: 'PL', label: 'Pologne' },
  { code: 'GB', label: 'Royaume-Uni' },
  { code: 'US', label: 'États-Unis' },
  { code: 'CA', label: 'Canada' },
  { code: 'MA', label: 'Maroc' },
  { code: 'TN', label: 'Tunisie' },
  { code: 'SN', label: 'Sénégal' },
]
