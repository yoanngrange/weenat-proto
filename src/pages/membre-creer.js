import { updateBreadcrumb } from '../js/breadcrumb.js'

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb('Ajouter un membre', { label: 'Membres', href: 'membres.html' })

  document.getElementById('save-btn').addEventListener('click', () => {
    const prenom = document.getElementById('m-prenom').value.trim()
    const nom    = document.getElementById('m-nom').value.trim()
    const email  = document.getElementById('m-email').value.trim()
    const role   = document.getElementById('m-role').value

    const errEl  = document.getElementById('form-error')
    const errMsg = document.getElementById('form-error-msg')

    if (!prenom || !nom || !email || !role) {
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
    document.getElementById('m-prenom').value = ''
    document.getElementById('m-nom').value = ''
    document.getElementById('m-email').value = ''
    document.getElementById('m-role').value = ''
    document.getElementById('success-banner').style.display = 'none'
    document.getElementById('save-btn').disabled = false
    document.getElementById('m-prenom').focus()
  })
})
