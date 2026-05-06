// Mobile prototype entry point
// Data shared with web context — same source of truth
import { plots }   from '../data/plots.js'
import { sensors } from '../data/sensors.js'
import { orgs }    from '../data/orgs.js'
import { initCompteScreen }    from './screens/compte.js'
import { initAlertesScreen }   from './screens/alertes.js'
import { initDashboardScreen }  from './screens/dashboard.js'
import { initParcellesScreen }  from './screens/parcelles.js'
import { initCapteursScreen }   from './screens/capteurs.js'

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
document.getElementById('bottom-nav').addEventListener('click', e => {
  const btn = e.target.closest('.nav-item')
  if (btn) navigateTo(btn.dataset.tab)
})

// ─── Swipe gesture (mouse drag simulation) ───────────────────────────────────

let dragStartX = null
let dragStartY = null
const SWIPE_THRESHOLD = 50

const stack = document.getElementById('screen-stack')

stack.addEventListener('mousedown', e => {
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

function initParamSegment() {
  const segment = document.getElementById('param-segment')
  if (!segment) return

  // Hide réseau tab if adherent
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

// ─── Export for screens ───────────────────────────────────────────────────────
export { plots, sensors, orgs, navigateTo, activeTab }
