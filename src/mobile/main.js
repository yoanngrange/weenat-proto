// Mobile prototype entry point
// Data shared with web context — same source of truth
import { stackDepth, hasUnsavedChanges } from './nav.js'
import { plots }   from '../data/plots.js'
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
  const btn     = document.getElementById('param-plus-btn')
  const spacer  = document.getElementById('param-plus-spacer')
  const ctrl    = paramControllers[activeTabId]
  if (btn && spacer) {
    if (ctrl?.onAdd) {
      btn.style.display = ''
      spacer.style.display = 'none'
      btn.onclick = ctrl.onAdd
    } else {
      btn.style.display = 'none'
      spacer.style.display = ''
    }
  }
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

// ─── Export for screens ───────────────────────────────────────────────────────
export { plots, sensors, orgs, navigateTo, activeTab }
