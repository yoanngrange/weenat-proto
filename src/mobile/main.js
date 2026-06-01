// Mobile prototype entry point
// Data shared with web context — same source of truth
import { stackDepth, hasUnsavedChanges } from './nav.js'
import { plots }   from '../data/plots.js'
import { applyStoredPlotPatches } from '../data/store.js'
applyStoredPlotPatches(plots)
import { sensors } from '../data/sensors.js'
import { orgs }    from '../data/orgs.js'
import { initCompteScreen }       from './screens/compte.js'
import { initAlertesScreen }      from './screens/alertes.js'
import { initDashboardScreen }    from './screens/dashboard.js'
import { initParcellesScreen }    from './screens/parcelles.js'
import { initCapteursScreen }     from './screens/capteurs.js'
import { initExploitationScreen } from './screens/exploitation.js'
import { initReseauScreen }       from './screens/reseau.js'

// ─── Role (URL param: ?role=admin | ?role=adherent, défaut: admin) ─────────────
const urlParams = new URLSearchParams(window.location.search)
export const role = urlParams.get('role') === 'adherent' ? 'adherent' : 'admin'

// ─── Live clock ───────────────────────────────────────────────────────────────

function updateClock() {
  const el = document.getElementById('status-time')
  if (!el) return
  const now = new Date()
  el.textContent = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}
updateClock()
setInterval(updateClock, 10000)

// ─── Tab router ───────────────────────────────────────────────────────────────

const TAB_ORDER = ['dashboard', 'parcelles', 'capteurs', 'alertes', 'parametres']

let activeTab = 'dashboard'

function navigateTo(tab) {
  if (!TAB_ORDER.includes(tab) || tab === activeTab) return
  activeTab = tab

  document.querySelectorAll('.m-screen').forEach(s => s.classList.remove('active'))
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'))

  document.getElementById(`screen-${tab}`)?.classList.add('active')
  document.querySelector(`.nav-item[data-tab="${tab}"]`)?.classList.add('active')
  window.dispatchEvent(new CustomEvent('m-tab-change', { detail: tab }))
}

// Bottom nav clicks
function showAbandonConfirm(onConfirm) {
  document.getElementById('abandon-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'abandon-modal'
  modal.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end'
  modal.innerHTML = `
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`
  document.getElementById('phone-screen').appendChild(modal)
  modal.querySelector('#abandon-cancel').addEventListener('click', () => modal.remove())
  modal.querySelector('#abandon-ok').addEventListener('click', () => { modal.remove(); onConfirm() })
}

document.getElementById('phone-screen').addEventListener('click', e => {
  if (!e.target.closest('.m-navbar-logo')) return
  document.querySelector('.nav-item[data-tab="dashboard"]')?.click()
})

document.getElementById('bottom-nav').addEventListener('click', e => {
  const btn = e.target.closest('.nav-item')
  if (!btn) return
  const tab = btn.dataset.tab
  if (stackDepth() > 0 && hasUnsavedChanges()) {
    showAbandonConfirm(() => {
      window.dispatchEvent(new CustomEvent('m-tab-change', { detail: tab }))
      navigateTo(tab)
    })
  } else if (stackDepth() > 0) {
    window.dispatchEvent(new CustomEvent('m-tab-change', { detail: tab }))
    navigateTo(tab)
  } else {
    navigateTo(tab)
  }
})

// ─── Swipe gesture (mouse drag simulation) ───────────────────────────────────

let dragStartX = null
let dragStartY = null
const SWIPE_THRESHOLD = 50

const stack = document.getElementById('screen-stack')

stack.addEventListener('mousedown', e => {
  if (e.target.closest('.leaflet-container')) { dragStartX = null; return }
  dragStartX = e.clientX
  dragStartY = e.clientY
})

stack.addEventListener('mouseup', e => {
  if (dragStartX === null) return
  const dx = e.clientX - dragStartX
  const dy = e.clientY - dragStartY
  if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
    const idx = TAB_ORDER.indexOf(activeTab)
    if (dx < 0 && idx < TAB_ORDER.length - 1) navigateTo(TAB_ORDER[idx + 1])
    if (dx > 0 && idx > 0)                    navigateTo(TAB_ORDER[idx - 1])
  }
  dragStartX = null
  dragStartY = null
})

stack.addEventListener('mouseleave', () => { dragStartX = null })

// Touch events (real mobile)
stack.addEventListener('touchstart', e => {
  if (e.target.closest('.leaflet-container')) { dragStartX = null; return }
  dragStartX = e.touches[0].clientX
  dragStartY = e.touches[0].clientY
}, { passive: true })

stack.addEventListener('touchend', e => {
  if (dragStartX === null) return
  const dx = e.changedTouches[0].clientX - dragStartX
  const dy = e.changedTouches[0].clientY - dragStartY
  if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
    const idx = TAB_ORDER.indexOf(activeTab)
    if (dx < 0 && idx < TAB_ORDER.length - 1) navigateTo(TAB_ORDER[idx + 1])
    if (dx > 0 && idx > 0)                    navigateTo(TAB_ORDER[idx - 1])
  }
  dragStartX = null
}, { passive: true })

// ─── Paramètres — segmented control ──────────────────────────────────────────

const PARAM_TABS = [
  { id: 'param-compte',      label: 'Mon compte' },
  { id: 'param-exploitation',label: 'Mon exploitation' },
  ...(role === 'admin' ? [{ id: 'param-reseau', label: 'Mon réseau' }] : []),
]

// Screen controllers that expose an onAdd handler
const paramControllers = {}

function updateParamPlusBtn(activeTabId) {
  const btn  = document.getElementById('param-plus-btn')
  if (!btn) return
  const ctrl = paramControllers[activeTabId]
  btn.onclick = ctrl?.onAdd ?? (() => window.showMobileAddPage?.())
}

function initParamSegment() {
  const segment = document.getElementById('param-segment')
  if (!segment) return

  if (role === 'adherent') {
    document.getElementById('param-reseau')?.style.setProperty('display', 'none')
  }

  PARAM_TABS.forEach((tab, i) => {
    const btn = document.createElement('button')
    btn.className = 'm-segment-btn' + (i === 0 ? ' active' : '')
    btn.textContent = tab.label
    btn.dataset.target = tab.id
    btn.addEventListener('click', () => {
      segment.querySelectorAll('.m-segment-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      document.querySelectorAll('.m-subscreen').forEach(s => s.classList.remove('active'))
      document.getElementById(tab.id)?.classList.add('active')
      updateParamPlusBtn(tab.id)
      paramControllers[tab.id]?.refresh?.()
    })
    segment.appendChild(btn)
  })
}

initParamSegment()

// ─── Screens init ─────────────────────────────────────────────────────────────
initDashboardScreen(document.getElementById('screen-dashboard'), role)
initParcellesScreen(document.getElementById('screen-parcelles'), role)
initCapteursScreen(document.getElementById('screen-capteurs'), role)
initAlertesScreen(document.getElementById('screen-alertes'), role)
initCompteScreen(document.getElementById('param-compte'), role)
paramControllers['param-exploitation'] = initExploitationScreen(document.getElementById('param-exploitation'), role)
paramControllers['param-reseau']       = initReseauScreen(document.getElementById('param-reseau'), role)

// ─── Mobile add modal (bouton + universel) ────────────────────────────────────

function openMobileAddModal() {
  const isAdmin = role === 'admin'
  const phone = document.getElementById('phone-screen')
  document.getElementById('m-add-modal')?.remove()

  const modal = document.createElement('div')
  modal.id = 'm-add-modal'
  modal.style.cssText = 'position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column'
  modal.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#f2f2f7;flex-shrink:0;border-bottom:.5px solid rgba(0,0,0,.1)">
      <span style="font-size:17px;font-weight:700">Ajouter</span>
      <button id="m-add-close" style="width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.07);border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <div style="overflow-y:auto;flex:1;padding:12px 16px">
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon exploitation</div>
        ${[
          { action:'parcelle',            icon:'bi-geo-alt',         label:'Parcelle' },
          { action:'capteur',             icon:'bi-broadcast',       label:'Capteur' },
          { action:'station',             icon:'bi-cloud-sun',       label:'Station météo virtuelle' },
          { action:'membre',              icon:'bi-person-plus',     label:'Membre' },
          { action:'irrigation',          icon:'bi-droplet',         label:'Irrigation' },
          { action:'strategie-irrigation',icon:'bi-arrow-repeat',    label:"Saison d'irrigation" },
          { action:'note',                icon:'bi-pencil-square',   label:'Note' },
          { action:'traitement',          icon:'bi-eyedropper',      label:'Traitement' },
          { action:'maintenance',         icon:'bi-tools',           label:'Opération de maintenance' },
        ].map(it => `
          <button class="m-add-row" data-action="${it.action}" style="display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08);text-align:left">
            <i class="bi ${it.icon}" style="color:#0172A4;width:22px;text-align:center;flex-shrink:0"></i>
            <span>${it.label}</span>
          </button>`).join('')}
      </div>
      ${isAdmin ? `
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon réseau</div>
        <button class="m-add-row" data-action="adherent" style="display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08);text-align:left">
          <i class="bi bi-building" style="color:#0172A4;width:22px;text-align:center;flex-shrink:0"></i>
          <span>Adhérent</span>
        </button>
      </div>` : ''}
    </div>`
  modal.querySelector('#m-add-close').addEventListener('click', () => modal.remove())
  modal.querySelectorAll('.m-add-row').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.remove()
      // Delegate to openJournalModal if available (web context exposes it)
      if (btn.dataset.action === 'note' || btn.dataset.action === 'traitement') {
        window.openJournalModal?.(btn.dataset.action)
      }
    })
  })
  phone.appendChild(modal)
}

window.openMobileAddModal = openMobileAddModal

// Wire + buttons — same modal on all main screens
;['screen-parcelles', 'screen-capteurs', 'screen-alertes'].forEach(id => {
  document.querySelector(`#${id} .m-navbar-action`)?.addEventListener('click', () => window.showMobileAddPage?.())
})
// Paramètres: wire initial state on the first (active) tab
updateParamPlusBtn('param-compte')

// ─── Export for screens ───────────────────────────────────────────────────────
export { plots, sensors, orgs, navigateTo, activeTab }
