// Parametres page logic
import { updateBreadcrumb } from '../js/breadcrumb.js'

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  setupTabs()
})

function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn')
  const tabPanels = document.querySelectorAll('.tab-panel')

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and panels
      tabBtns.forEach(b => b.classList.remove('active'))
      tabPanels.forEach(p => p.classList.remove('active'))

      // Add active class to clicked button and corresponding panel
      btn.classList.add('active')
      const tabName = btn.dataset.tab
      document.querySelector(`.tab-panel[data-tab="${tabName}"]`).classList.add('active')
    })
  })
}