import { updateBreadcrumb } from '../js/breadcrumb.js'

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb('Ajouter un adhérent', { label: 'Adhérents', href: 'adherents.html' })

  // Highlight selected plan box
  document.querySelectorAll('input[name="a-plan"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.getElementById('plan-plus-box').style.borderColor = ''
      document.getElementById('plan-expert-box').style.borderColor = ''
      if (radio.value === 'Plus') {
        document.getElementById('plan-plus-box').style.borderColor = 'var(--ok)'
      } else {
        document.getElementById('plan-expert-box').style.borderColor = 'var(--pri)'
      }
    })
  })
  document.getElementById('plan-plus-box').style.borderColor = 'var(--ok)'

  document.getElementById('save-btn').addEventListener('click', () => {
    const prenom      = document.getElementById('a-prenom').value.trim()
    const nom         = document.getElementById('a-nom').value.trim()
    const email       = document.getElementById('a-email').value.trim()
    const exploitation = document.getElementById('a-exploitation').value.trim()
    const telephone   = document.getElementById('a-telephone').value.trim()
    const plan        = document.querySelector('input[name="a-plan"]:checked')?.value

    const errEl  = document.getElementById('form-error')
    const errMsg = document.getElementById('form-error-msg')

    if (!prenom || !nom || !email || !exploitation || !telephone || !plan) {
      errMsg.textContent = 'Tous les champs obligatoires doivent être remplis.'
      errEl.style.display = 'block'
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errMsg.textContent = 'Adresse email invalide.'
      errEl.style.display = 'block'
      return
    }

    errEl.style.display = 'none'
    document.getElementById('success-banner').style.display = 'block'
    document.getElementById('save-btn').disabled = true
  })

  document.getElementById('add-another-btn')?.addEventListener('click', () => {
    ['a-prenom','a-nom','a-email','a-exploitation','a-telephone','a-code'].forEach(id => {
      document.getElementById(id).value = ''
    })
    document.querySelector('input[name="a-plan"][value="Plus"]').checked = true
    document.getElementById('plan-plus-box').style.borderColor = 'var(--ok)'
    document.getElementById('plan-expert-box').style.borderColor = ''
    document.getElementById('success-banner').style.display = 'none'
    document.getElementById('save-btn').disabled = false
    document.getElementById('a-prenom').focus()
  })
})
