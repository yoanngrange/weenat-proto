import { orgs }                  from '../../data/orgs.js'
import { plots as allPlots }     from '../../data/plots.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { network as networkData } from '../../data/network.js'
import { showToast, showSheet }  from '../ui.js'
import { pushDetail, popDetail } from '../nav.js'

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

  const adherents = orgs.filter(o => o.id !== ADMIN_ORG_ID && o.statut !== 'inactif').map(o => ({ ...o }))
  const net = { ...networkData, siege: { ...networkData.siege }, antennes: networkData.antennes.map(a => ({ ...a })) }
  const toggles = { partageMeteo: true, partageSol: false, partageIrrigation: true }

  function adhRow(list, from, to, lastIdx) {
    return list.slice(from, to).map((o, i) => {
      const idx = from + i
      const st = stLabel(o.statut)
      const isPending = o.statut === 'demande en attente'
      return `
        <div class="m-list-row${idx === lastIdx ? ' m-list-row--last' : ''} m-tappable" data-org-idx="${idx}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${o.proprietaire || o.name}</span>
            <span class="m-list-row-sub">${o.name} · ${o.plan || '—'}</span>
          </div>
          ${isPending ? `
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${idx}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${idx}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          ` : `<span style="font-size:11px;font-weight:600;color:${st.color};flex-shrink:0;margin-right:4px">${st.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`
    }).join('')
  }

  function openAdherentsPage() {
    let query = ''
    const BATCH = 20
    let visibleCount = BATCH

    function filtered() {
      if (!query) return adherents
      const q = query.toLowerCase()
      return adherents.filter(o =>
        (o.proprietaire || o.name || '').toLowerCase().includes(q) ||
        (o.name || '').toLowerCase().includes(q) ||
        (o.email || '').toLowerCase().includes(q) ||
        (o.codeAdherent || '').toLowerCase().includes(q)
      )
    }

    const layer = pushDetail(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Mon réseau</span></button>
          <span style="font-size:17px;font-weight:600">Adhérents</span>
          <button id="adh-invite-btn" style="border:none;background:none;color:#0172A4;font-size:15px;font-weight:500;cursor:pointer;padding:4px;font-family:inherit">Inviter</button>
        </div>
        <div class="m-lp-search">
          <div class="m-lp-search-inner">
            <i class="bi bi-search"></i>
            <input class="m-lp-search-input" type="search" id="adh-search" placeholder="Nom, email, code…">
          </div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="adh-list-content" style="padding-bottom:32px"></div>`)

    const listEl = layer.querySelector('#adh-list-content')

    function renderList() {
      const items   = filtered()
      const visible = items.slice(0, visibleCount)
      const more    = items.length - visible.length
      const active  = items.filter(o => o.statut === 'actif' || o.statut === 'actif en essai').length

      listEl.innerHTML = `
        <div class="m-list-section-header" style="margin-top:4px">${query ? items.length + ' résultat' + (items.length !== 1 ? 's' : '') : active + ' actif' + (active !== 1 ? 's' : '') + ' · ' + items.length + ' total'}</div>
        <div class="m-list">
          ${visible.length ? visible.map((o, i) => {
            const idx = adherents.indexOf(o)
            const st = stLabel(o.statut)
            const isPending = o.statut === 'demande en attente'
            const isLast = i === visible.length - 1 && more === 0
            return `
              <div class="m-list-row${isLast ? ' m-list-row--last' : ''} m-tappable" data-lp-org-idx="${idx}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${o.proprietaire || o.name}</span>
                  <span class="m-list-row-sub">${o.name} · ${o.plan || '—'}</span>
                </div>
                ${isPending ? `
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${idx}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${idx}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                ` : `<span style="font-size:11px;font-weight:600;color:${st.color};flex-shrink:0;margin-right:4px">${st.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`
          }).join('') : '<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${more > 0 ? `
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${more} de plus</span>
            </div>` : ''}
        </div>`

      listEl.querySelectorAll('[data-lp-org-idx]').forEach(row => {
        row.addEventListener('click', e => {
          if (e.target.closest('[data-adh-action]')) return
          showAdherentDetail(adherents[+row.dataset.lpOrgIdx], +row.dataset.lpOrgIdx, renderList)
        })
      })

      listEl.querySelectorAll('[data-adh-action]').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation()
          const idx    = +btn.dataset.lpAdhIdx
          const action = btn.dataset.adhAction
          const o      = adherents[idx]; if (!o) return
          if (action === 'valider') {
            o.statut = 'actif'; render(); renderList(); showToast(`${o.proprietaire || o.name} validé`)
          } else {
            adherents.splice(idx, 1); render(); renderList(); showToast('Demande rejetée')
          }
        })
      })

      listEl.querySelector('#adh-load-more')?.addEventListener('click', () => { visibleCount += BATCH; renderList() })
    }

    layer.querySelector('.m-detail-back').addEventListener('click', popDetail)
    layer.querySelector('#adh-invite-btn').addEventListener('click', inviteAdherent)
    layer.querySelector('#adh-search').addEventListener('input', e => { query = e.target.value; visibleCount = BATCH; renderList() })
    renderList()
  }

  function render() {
    const active = adherents.filter(o => o.statut !== 'inactif')
    const siegeStr = `${net.siege.adresse}, ${net.siege.codePostal} ${net.siege.ville}`
    container.innerHTML = `
      <div class="m-list-section-header" style="margin-top:16px">Réseau</div>
      <div class="m-list">
        <div class="m-list-row" data-action="net-nom">
          <span class="m-list-row-label">Nom du réseau</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:13px">${net.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="net-siege">
          <span class="m-list-row-label">Siège</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:12px">${siegeStr}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="net-antennes" style="align-items:flex-start;padding-top:10px;padding-bottom:10px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Antennes</span>
            <span class="m-web-only-hint">Modifiable sur la version web</span>
          </div>
          <span class="m-list-row-value" style="color:#8e8e93;flex-shrink:0">${net.antennes.length} antenne${net.antennes.length > 1 ? 's' : ''}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-footer">Description, logo et contacts modifiables sur la version web</div>

      <div class="m-list-section-header">Partage entre les adhérents</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs météo</span>
          <label class="m-toggle"><input type="checkbox" id="tog-meteo"${toggles.partageMeteo ? ' checked' : ''}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs irrigation</span>
          <label class="m-toggle"><input type="checkbox" id="tog-sol"${toggles.partageSol ? ' checked' : ''}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Stations météo virtuelles</span>
          <label class="m-toggle"><input type="checkbox" id="tog-irrigation"${toggles.partageIrrigation ? ' checked' : ''}><span class="m-toggle-track"></span></label>
        </div>
      </div>

      <div class="m-list-section-header">Adhérents — ${active.length} actifs</div>
      <div class="m-list">
        ${adhRow(adherents, 0, Math.min(5, adherents.length), adherents.length > 5 ? -1 : adherents.length - 1)}
        ${adherents.length > 5 ? `
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${adherents.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>` : ''}
      </div>
      <div style="height:32px"></div>`

    container.querySelectorAll('[data-org-idx]').forEach(row => {
      row.addEventListener('click', e => {
        if (e.target.closest('[data-adh-action]')) return
        showAdherentDetail(adherents[+row.dataset.orgIdx], +row.dataset.orgIdx)
      })
    })

    container.querySelector('[data-action="voir-adherents"]')?.addEventListener('click', openAdherentsPage)

    container.querySelectorAll('[data-adh-action]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const idx = +btn.dataset.adhIdx
        const action = btn.dataset.adhAction
        const o = adherents[idx]; if (!o) return
        if (action === 'valider') {
          o.statut = 'actif'
          render(); showToast(`${o.proprietaire || o.name} validé`)
        } else {
          adherents.splice(idx, 1)
          render(); showToast(`Demande rejetée`)
        }
      })
    })

    container.querySelectorAll('[data-action]').forEach(row => {
      row.addEventListener('click', () => {
        switch (row.dataset.action) {
          case 'net-nom':    editField('Nom du réseau', net.nom, v => { net.nom = v; render() }); break
          case 'net-siege':  editSiege(); break
          case 'net-antennes': showAntennes(); break
        }
      })
    })

    const togMeteo = container.querySelector('#tog-meteo')
    const togSol   = container.querySelector('#tog-sol')
    const togIrrig = container.querySelector('#tog-irrigation')
    togMeteo?.addEventListener('change', () => { toggles.partageMeteo = togMeteo.checked; showToast('Préférence enregistrée') })
    togSol?.addEventListener('change',   () => { toggles.partageSol = togSol.checked; showToast('Préférence enregistrée') })
    togIrrig?.addEventListener('change', () => { toggles.partageIrrigation = togIrrig.checked; showToast('Préférence enregistrée') })
  }

  function editField(label, value, onSave) {
    const body = document.createElement('div')
    body.innerHTML = `<input class="m-sheet-input" type="text" value="${(value || '').replace(/"/g, '&quot;')}" placeholder="${label}">`
    const input = body.querySelector('input')
    showSheet({ title: label, body, doneLabel: 'Enregistrer', onDone: () => { const v = input.value.trim(); if (v) { onSave(v); showToast('Enregistré') } } })
    setTimeout(() => input.focus(), 300)
  }

  function editSiege() {
    const body = document.createElement('div')
    body.innerHTML = `
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${net.siege.adresse.replace(/"/g, '&quot;')}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${net.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${net.siege.ville.replace(/"/g, '&quot;')}">`
    showSheet({
      title: 'Adresse du siège', body, doneLabel: 'Enregistrer',
      onDone: () => {
        net.siege.adresse    = body.querySelector('#s-rue').value.trim()
        net.siege.codePostal = body.querySelector('#s-cp').value.trim()
        net.siege.ville      = body.querySelector('#s-ville').value.trim()
        render(); showToast('Enregistré')
      }
    })
    setTimeout(() => body.querySelector('#s-rue').focus(), 300)
  }

  function showAntennes() {
    const body = document.createElement('div')
    const update = () => {
      body.innerHTML = net.antennes.map((a, i) => `
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${a.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${a.adresse}, ${a.codePostal} ${a.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${a.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')
    }
    update()
    showSheet({ title: 'Antennes', body, doneLabel: 'Fermer', onDone: () => {} })
  }

  function showAdherentDetail(org, idx, onAfterChange) {
    const st = stLabel(org.statut)
    const isInvite = org.statut === 'invitation en attente'
    const inviteLink = `https://app.weenat.com/invitation?code=${org.codeAdherent || 'ADZ-XXX'}`
    const body = document.createElement('div')

    body.innerHTML = `
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${org.email || '—'}</span></div>
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
      setTimeout(() => { sheet.remove(); render(); onAfterChange?.(); showToast('Invitation annulée') }, 280)
    })
    body.querySelector('#lnk-delete').addEventListener('click', () => {
      adherents.splice(idx, 1)
      sheet.classList.remove('m-sheet-overlay--show')
      setTimeout(() => { sheet.remove(); render(); onAfterChange?.(); showToast('Adhérent supprimé') }, 280)
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
