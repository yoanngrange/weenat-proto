import { updateBreadcrumb } from '../js/breadcrumb.js'
import { sensors } from '../data/sensors.js'
import { plots } from '../data/plots.js'

const METRIC_LABELS = {
  'pluie': 'Pluie', 'temperature': 'Température', 'teneur-eau': 'Teneur en eau sol',
  'potentiel-hydrique': 'Potentiel hydrique', 'vent': 'Vent', 'rayonnement': 'Rayonnement',
  'humidite': 'Humidité air', 'temp-humide': 'Température humide', 'temp-seche': 'Température sèche',
}

const ALERTS_ADMIN = [
  { id: 1, name: 'Pluie forte > 10 mm/h', statut: 'actif', metric: 'pluie', created: '2026-01-15', sensorIds: [1, 3], parcelIds: [1, 2], threshold: 10, operator: '>', phones: [] },
  { id: 2, name: 'Gel précoce < 2°C', statut: 'actif', metric: 'temperature', created: '2025-11-03', sensorIds: [2], parcelIds: [3], threshold: 2, operator: '<', phones: [] },
  { id: 3, name: 'Teneur en eau critique', statut: 'inactif', metric: 'teneur-eau', created: '2026-02-20', sensorIds: [5], parcelIds: [4, 5], threshold: 30, operator: '<', phones: [] },
  { id: 4, name: 'Vent violent > 80 km/h', statut: 'actif', metric: 'vent', created: '2025-09-01', sensorIds: [1, 4], parcelIds: [], threshold: 80, operator: '>', phones: [] },
  { id: 5, name: 'Rayonnement faible', statut: 'inactif', metric: 'rayonnement', created: '2026-03-01', sensorIds: [], parcelIds: [1], threshold: 50, operator: '<', phones: [] },
  { id: 6, name: 'DPV élevé > 2 kPa', statut: 'actif', metric: 'temperature', created: '2026-03-15', sensorIds: [2], parcelIds: [2, 3], threshold: 2, operator: '>', phones: [] },
  { id: 7, name: 'Potentiel hydrique > 100 kPa', statut: 'actif', metric: 'potentiel-hydrique', created: '2026-04-01', sensorIds: [6], parcelIds: [6], threshold: 100, operator: '>', phones: [] },
  { id: 8, name: 'Température humide < 0°C', statut: 'actif', metric: 'temp-humide', created: '2026-01-10', sensorIds: [3], parcelIds: [1], threshold: 0, operator: '<', phones: ['+33 6 12 34 56 78'] },
  { id: 9, name: 'Température sèche > 35°C', statut: 'actif', metric: 'temp-seche', created: '2026-02-15', sensorIds: [4], parcelIds: [3], threshold: 35, operator: '>', phones: ['+33 6 12 34 56 78'] },
]

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search)
  const alertId = parseInt(params.get('id'))
  const alert = ALERTS_ADMIN.find(a => a.id === alertId) || ALERTS_ADMIN[0]

  updateBreadcrumb(alert.name, { label: 'Mes alertes', href: 'alertes.html' })
  document.getElementById('breadcrumb-title').textContent = alert.name

  renderConfig(alert)
})

function renderConfig(alert) {
  const root = document.getElementById('alert-config-root')
  const isTempMetric = alert.metric === 'temp-seche' || alert.metric === 'temp-humide'

  const alertSensors = sensors.filter(s => alert.sensorIds.includes(s.id))
  const alertParcels = plots.filter(p => alert.parcelIds.includes(p.id))

  root.innerHTML = `
    <div class="param-section">
      <div class="param-section-title" style="display:flex;align-items:center;justify-content:space-between">
        <span>Informations générales</span>
        <label class="toggle-switch" title="${alert.statut === 'actif' ? 'Désactiver' : 'Activer'}">
          <input type="checkbox" id="cfg-statut"${alert.statut === 'actif' ? ' checked' : ''}>
          <span class="toggle-track"></span>
        </label>
      </div>
      <div class="param-form-grid" style="max-width:580px">
        <div class="param-field param-field--wide">
          <label class="param-label">Nom de l'alerte</label>
          <input type="text" class="param-input" id="cfg-name" value="${esc(alert.name)}">
        </div>
        <div class="param-field">
          <label class="param-label">Métrique</label>
          <select class="param-input" id="cfg-metric">
            ${Object.entries(METRIC_LABELS).map(([k, v]) =>
              `<option value="${k}"${k === alert.metric ? ' selected' : ''}>${v}</option>`
            ).join('')}
          </select>
        </div>
        <div class="param-field">
          <label class="param-label">Condition</label>
          <div style="display:flex;gap:8px">
            <select class="param-input" id="cfg-operator" style="width:80px">
              <option value=">"${alert.operator === '>' ? ' selected' : ''}>&gt;</option>
              <option value="<"${alert.operator === '<' ? ' selected' : ''}>&lt;</option>
              <option value=">="${alert.operator === '>=' ? ' selected' : ''}>&ge;</option>
              <option value="<="${alert.operator === '<=' ? ' selected' : ''}>&le;</option>
            </select>
            <input type="number" class="param-input" id="cfg-threshold" value="${alert.threshold}" style="flex:1">
          </div>
        </div>
      </div>
    </div>

    <div class="param-section">
      <div class="param-section-title">Capteurs surveillés</div>
      <div id="cfg-sensors-list" style="display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
        ${alertSensors.length
          ? alertSensors.map(s => `
            <div class="admin-item-row">
              <span>${s.serial} <span style="color:var(--txt3);font-size:11px">${s.model}</span></span>
              <button class="icon-btn" title="Retirer"><i class="bi bi-x-lg"></i></button>
            </div>`).join('')
          : '<span class="tag-none">Aucun capteur</span>'
        }
      </div>
      <select class="param-input" id="cfg-add-sensor" style="max-width:360px">
        <option value="">+ Ajouter un capteur</option>
        ${sensors.filter(s => !alert.sensorIds.includes(s.id)).slice(0, 60)
          .map(s => `<option value="${s.id}">${s.serial} (${s.model})</option>`).join('')}
      </select>
    </div>

    <div class="param-section">
      <div class="param-section-title">Parcelles surveillées</div>
      <div id="cfg-parcels-list" style="display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
        ${alertParcels.length
          ? alertParcels.map(p => `
            <div class="admin-item-row">
              <span>${p.name}</span>
              <button class="icon-btn" title="Retirer"><i class="bi bi-x-lg"></i></button>
            </div>`).join('')
          : '<span class="tag-none">Aucune parcelle</span>'
        }
      </div>
      <select class="param-input" id="cfg-add-parcel" style="max-width:360px">
        <option value="">+ Ajouter une parcelle</option>
        ${plots.filter(p => !alert.parcelIds.includes(p.id)).slice(0, 60)
          .map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
      </select>
    </div>

    ${isTempMetric ? `
    <div class="param-section">
      <div class="param-section-title">Numéros de téléphone</div>
      <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">Les alertes SMS sont disponibles pour les métriques de température.</div>
      <div id="cfg-phones-list" style="display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
        ${(alert.phones || []).map(ph => `
          <div class="admin-item-row">
            <span>${ph}</span>
            <button class="icon-btn" title="Retirer"><i class="bi bi-x-lg"></i></button>
          </div>`).join('') || '<span class="tag-none">Aucun numéro</span>'}
      </div>
      <div style="display:flex;gap:8px;align-items:center;max-width:360px">
        <input type="tel" class="param-input" id="cfg-phone-input" placeholder="+33 6 …" style="flex:1">
        <button class="btn-secondary" id="cfg-add-phone"><i class="bi bi-plus"></i> Ajouter</button>
      </div>
    </div>
    ` : ''}

    <div style="display:flex;gap:12px;margin-top:8px">
      <button class="btn-primary" id="cfg-save">
        <i class="bi bi-check-lg"></i> Enregistrer
      </button>
      <button class="btn-secondary" onclick="window.location.href='alertes.html'">Annuler</button>
      <button class="btn-secondary" style="margin-left:auto;color:var(--err)" id="cfg-delete">
        <i class="bi bi-trash"></i> Supprimer l'alerte
      </button>
    </div>
  `

  document.getElementById('cfg-save')?.addEventListener('click', () => showToast('Alerte enregistrée.'))
  document.getElementById('cfg-delete')?.addEventListener('click', () => {
    if (confirm(`Supprimer "${alert.name}" ?`)) window.location.href = 'alertes.html'
  })
  document.getElementById('cfg-add-phone')?.addEventListener('click', () => {
    const input = document.getElementById('cfg-phone-input')
    if (input?.value?.trim()) { showToast(`Numéro ${input.value.trim()} ajouté.`); input.value = '' }
  })
}

function esc(s) { return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;') }

function showToast(msg) {
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.classList.add('show'), 10)
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300) }, 2500)
}
