import { orgs }                  from '../../data/orgs.js'
import { plots as allPlots }     from '../../data/plots.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { showToast, showSheet }  from '../ui.js'

const ADMIN_ORG_ID = 100
const PLANS = ['Essentiel', 'Plus', 'Expert']

const STATUT_MAP = {
  'actif':                 { label: 'Actif',       color: '#30d158' },
  'actif en essai':        { label: 'Essai',        color: '#ff9f0a' },
  'invitation en attente': { label: 'Invité',       color: '#007aff' },
  'demande en attente':    { label: 'En attente',   color: '#ff9f0a' },
  'inactif':               { label: 'Inactif',      color: '#8e8e93' },
}

function stLabel(statut) {
  return STATUT_MAP[statut] || { label: statut || '—', color: '#8e8e93' }
}

export function initReseauScreen(container, role) {
  if (!container) return {}
  if (role !== 'admin') {
    container.innerHTML = `<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>`
    return {}
  }

  const adherents = orgs.filter(o => o.id !== ADMIN_ORG_ID).map(o => ({ ...o }))

  function render() {
    const active = adherents.filter(o => o.statut !== 'inactif')
    container.innerHTML = `
      <div class="m-list-section-header" style="margin-top:16px">Adhérents — ${active.length} actifs sur ${adherents.length}</div>
      <div class="m-list">
        ${adherents.map((o, i) => {
          const st = stLabel(o.statut)
          return `
            <div class="m-list-row${i === adherents.length - 1 ? ' m-list-row--last' : ''} m-tappable" data-org-idx="${i}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${o.proprietaire || o.name}</span>
                <span class="m-list-row-sub">${o.name} · ${o.plan || '—'}</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${st.color};flex-shrink:0;margin-right:4px">${st.label}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`
        }).join('')}
      </div>
      <div style="height:32px"></div>`

    container.querySelectorAll('[data-org-idx]').forEach(row => {
      row.addEventListener('click', () => showAdherentDetail(adherents[+row.dataset.orgIdx], +row.dataset.orgIdx))
    })
  }

  function showAdherentDetail(org, idx) {
    const st = stLabel(org.statut)
    const isInvite = org.statut === 'invitation en attente'
    const inviteLink = `https://app.weenat.com/invitation?code=${org.codeAdherent || 'ADZ-XXX'}`
    const body = document.createElement('div')

    body.innerHTML = `
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email</span><span>${org.email || '—'}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${org.codeAdherent || '—'}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${org.plan || '—'}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${org.nbMembres ?? '—'}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${allPlots.filter(p => p.orgId === org.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(() => { const ids = new Set(allPlots.filter(p => p.orgId === org.id).map(p => p.id)); return allSensors.filter(s => ids.has(s.parcelId)).length })()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${st.color};font-weight:600">${st.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${org.dateAdhesion ? org.dateAdhesion.split('-').reverse().join('/') : '—'}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${isInvite ? `
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>` : ''}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`

    const sheet = showSheet({ title: org.name, body, doneLabel: 'Fermer', onDone: () => {} })

    body.querySelector('#lnk-copy')?.addEventListener('click', () => {
      navigator.clipboard?.writeText(inviteLink).catch(() => {})
      showToast('Lien copié !')
    })
    body.querySelector('#lnk-cancel')?.addEventListener('click', () => {
      org.statut = 'inactif'
      sheet.classList.remove('m-sheet-overlay--show')
      setTimeout(() => { sheet.remove(); render(); showToast('Invitation annulée') }, 280)
    })
    body.querySelector('#lnk-delete').addEventListener('click', () => {
      adherents.splice(idx, 1)
      sheet.classList.remove('m-sheet-overlay--show')
      setTimeout(() => { sheet.remove(); render(); showToast('Adhérent supprimé') }, 280)
    })
  }

  function inviteAdherent() {
    const body = document.createElement('div')
    body.innerHTML = `
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${PLANS.map(p => `<option>${p}</option>`).join('')}
      </select>`
    showSheet({
      title: 'Inviter un adhérent', body, doneLabel: 'Envoyer',
      onDone: () => {
        const email = body.querySelector('#adh-email').value.trim()
        const code  = body.querySelector('#adh-code').value.trim()
        if (!email || !code) { showToast('Email et code requis'); return }
        adherents.push({
          id: Date.now(), name: email, proprietaire: email, email,
          codeAdherent: code, plan: body.querySelector('#adh-plan').value,
          statut: 'invitation en attente', nbMembres: 0,
        })
        render()
        showToast('Invitation envoyée')
      }
    })
    setTimeout(() => body.querySelector('#adh-email').focus(), 300)
  }

  render()
  return { onAdd: inviteAdherent }
}
