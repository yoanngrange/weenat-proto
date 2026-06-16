import { pushDetail, popDetail } from '../nav.js'

// ─── Notification settings ────────────────────────────────────────────────────
const NOTIF_CATS = [
  { key: 'orgs',     label: 'Organisations', icon: 'bi-building',  desc: 'Ajouts de membres, changements d\'organisation, nouvelles exploitations' },
  { key: 'capteurs', label: 'Capteurs',       icon: 'bi-broadcast', desc: 'Anomalies, changements d\'état, mise à jour firmware' },
  { key: 'alertes',  label: 'Alertes',        icon: 'bi-bell',      desc: 'Déclenchements de seuils et alertes météo configurées' },
]
const NOTIF_CHANNELS = [
  { key: 'email', label: 'Email',             icon: 'bi-envelope' },
  { key: 'sms',   label: 'SMS',               icon: 'bi-phone' },
  { key: 'push',  label: 'Push',              icon: 'bi-bell' },
]
const NOTIF_PERIMETERS = ['Mon réseau', 'Mon organisation', 'Mon secteur']
const NOTIF_DEFAULT_PERIMETERS = { orgs: 'Mon organisation', capteurs: 'Mon réseau', alertes: 'Mon secteur' }
const NOTIF_DEFAULT_STATE = {
  orgs:     { email: true,  sms: false, push: true  },
  capteurs: { email: true,  sms: false, push: true  },
  alertes:  { email: true,  sms: true,  push: true  },
}

function openNotifSettings(parentShowToast) {
  let notifState = (() => {
    try { return JSON.parse(localStorage.getItem('weenat-mobile-notif')) || JSON.parse(JSON.stringify(NOTIF_DEFAULT_STATE)) }
    catch { return JSON.parse(JSON.stringify(NOTIF_DEFAULT_STATE)) }
  })()
  let periState = (() => {
    try { return JSON.parse(localStorage.getItem('weenat-mobile-notif-peri')) || JSON.parse(JSON.stringify(NOTIF_DEFAULT_PERIMETERS)) }
    catch { return JSON.parse(JSON.stringify(NOTIF_DEFAULT_PERIMETERS)) }
  })()

  function save() {
    localStorage.setItem('weenat-mobile-notif', JSON.stringify(notifState))
    localStorage.setItem('weenat-mobile-notif-peri', JSON.stringify(periState))
    parentShowToast('Préférences enregistrées')
  }

  function catSection(cat) {
    const st = notifState[cat.key] || {}
    const peri = periState[cat.key] || NOTIF_DEFAULT_PERIMETERS[cat.key]
    return `
      <div class="m-list-section-header" style="display:flex;align-items:center;gap:6px">
        <i class="bi ${cat.icon}" style="font-size:13px"></i> ${cat.label}
      </div>
      <p style="font-size:12px;color:#8e8e93;margin:0 16px 8px;line-height:1.4">${cat.desc}</p>
      <div class="m-list">
        ${NOTIF_CHANNELS.map((ch, ci) => {
          const isLast = ci === NOTIF_CHANNELS.length - 1 && true
          return `<div class="m-list-row${isLast ? '' : ''}">
            <i class="bi ${ch.icon}" style="color:#636366;font-size:14px;flex-shrink:0;width:20px;text-align:center"></i>
            <span class="m-list-row-label">${ch.label}</span>
            <label class="m-toggle">
              <input type="checkbox" class="notif-toggle" data-cat="${cat.key}" data-ch="${ch.key}" ${st[ch.key] ? 'checked' : ''}>
              <span class="m-toggle-track"></span>
            </label>
          </div>`
        }).join('')}
        <div class="m-list-row m-list-row--last" style="align-items:center;gap:8px">
          <i class="bi bi-geo-alt" style="color:#636366;font-size:14px;flex-shrink:0;width:20px;text-align:center"></i>
          <span class="m-list-row-label">Périmètre</span>
          <select class="notif-peri-sel" data-cat="${cat.key}" style="border:none;background:transparent;font-size:14px;color:#636366;font-family:inherit;text-align:right;flex:1;min-width:0;outline:none;cursor:pointer">
            ${NOTIF_PERIMETERS.map(p => `<option value="${p}"${p === peri ? ' selected' : ''}>${p}</option>`).join('')}
          </select>
        </div>
      </div>`
  }

  const lay = pushDetail(`
    <div class="m-detail-header" style="flex-shrink:0">
      <div class="m-detail-topbar">
        <button class="m-detail-back" id="notif-back"><i class="bi bi-chevron-left"></i><span>Compte</span></button>
      </div>
      <div style="padding:0 16px 12px">
        <div style="font-size:20px;font-weight:700;color:#1c1c1e">Notifications</div>
        <div style="font-size:13px;color:#8e8e93;margin-top:2px">Choisissez comment et pour quoi être notifié</div>
      </div>
    </div>
    <div style="flex:1;overflow-y:auto;padding-bottom:32px">
      ${NOTIF_CATS.map(c => catSection(c)).join('')}
      <div class="m-list-section-footer" style="margin-top:8px">
        Les alertes de seuil se configurent depuis la section <strong>Alertes</strong> de l'application.
      </div>
    </div>
  `)

  lay.querySelector('#notif-back').addEventListener('click', popDetail)

  lay.querySelectorAll('.notif-toggle').forEach(cb => {
    cb.addEventListener('change', () => {
      const cat = cb.dataset.cat
      const ch  = cb.dataset.ch
      notifState[cat][ch] = cb.checked
      save()
    })
  })

  lay.querySelectorAll('.notif-peri-sel').forEach(sel => {
    sel.addEventListener('change', () => {
      periState[sel.dataset.cat] = sel.value
      save()
    })
  })
}

const PROFILES = {
  admin: {
    initials: 'JD', prenom: 'Jean', nom: 'Dupont',
    email: 'jean.dupont@ferme-du-bocage.fr',
    phones: [
      { label: 'Principal', numero: '+33 6 12 34 56 78' },
      { label: 'Sophie Dupont', numero: '+33 6 98 76 54 32' },
    ],
    apiKeys: [
      { id: 1, name: 'Application mobile', created: '10/01/2026', value: 'sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF' },
      { id: 2, name: 'Intégration Agreo',  created: '28/02/2026', value: 'sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY' },
      { id: 3, name: 'Script export nuit', created: '01/04/2026', value: 'sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE' },
    ]
  },
  adherent: {
    initials: 'MM', prenom: 'Marie', nom: 'Martin',
    email: 'marie.martin@ferme-du-bocage.fr',
    phones: [{ label: 'Principal', numero: '+33 7 52 18 93 46' }],
    apiKeys: [
      { id: 1, name: 'Application mobile', created: '14/02/2026', value: 'sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG' },
    ]
  }
}

const LANGUES   = ['Français', 'English', 'Español', 'Deutsch', 'Italiano', 'Português', 'Polski', 'Nederlands']
const UNITES    = ['Métrique (mm, °C, km/h…)', 'Impérial (in, °F, mph…)']

// ─── State ────────────────────────────────────────────────────────────────────
let state = {}

// ─── Toast ────────────────────────────────────────────────────────────────────
function showToast(msg) {
  const screen = document.getElementById('phone-screen')
  document.querySelector('.m-toast')?.remove()
  const t = document.createElement('div')
  t.className = 'm-toast'
  t.textContent = msg
  screen.appendChild(t)
  requestAnimationFrame(() => t.classList.add('m-toast--show'))
  setTimeout(() => { t.classList.remove('m-toast--show'); setTimeout(() => t.remove(), 300) }, 2200)
}

// ─── Bottom sheet ─────────────────────────────────────────────────────────────
function showSheet({ title, body, onDone, doneLabel = 'OK' }) {
  const screen = document.getElementById('phone-screen')
  document.querySelector('.m-sheet-overlay')?.remove()

  const overlay = document.createElement('div')
  overlay.className = 'm-sheet-overlay'
  overlay.innerHTML = `
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${title}</span>
        <button class="m-sheet-done">${doneLabel}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `
  overlay.querySelector('.m-sheet-body').appendChild(typeof body === 'string'
    ? Object.assign(document.createElement('div'), { innerHTML: body })
    : body)

  screen.appendChild(overlay)
  requestAnimationFrame(() => overlay.classList.add('m-sheet-overlay--show'))

  const close = () => {
    overlay.classList.remove('m-sheet-overlay--show')
    setTimeout(() => overlay.remove(), 280)
  }
  overlay.querySelector('.m-sheet-cancel').addEventListener('click', close)
  overlay.querySelector('.m-sheet-done').addEventListener('click', () => { onDone?.(); close() })
  overlay.addEventListener('click', e => { if (e.target === overlay) close() })
  return overlay
}

// ─── Field editors ────────────────────────────────────────────────────────────
function editTextField(label, value, onSave) {
  const input = document.createElement('div')
  input.innerHTML = `<input class="m-sheet-input" type="text" value="${value}" placeholder="${label}">`
  const el = input.querySelector('input')
  showSheet({
    title: label, body: input, doneLabel: 'Enregistrer',
    onDone: () => { onSave(el.value.trim()); showToast('Enregistré') }
  })
  setTimeout(() => el.focus(), 300)
}

function showOptionPicker(title, options, current, onSelect) {
  const body = document.createElement('div')
  body.innerHTML = options.map((o, i) => `
    <div class="m-sheet-option${o === current ? ' m-sheet-option--active' : ''}" data-i="${i}">
      <span>${o}</span>
      ${o === current ? '<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>' : ''}
    </div>
  `).join('')
  const sheet = showSheet({ title, body, doneLabel: 'Fermer', onDone: () => {} })
  body.querySelectorAll('.m-sheet-option').forEach(row => {
    row.addEventListener('click', () => {
      onSelect(options[+row.dataset.i])
      sheet.classList.remove('m-sheet-overlay--show')
      setTimeout(() => sheet.remove(), 280)
      showToast('Enregistré')
    })
  })
}

function showPhonesSheet(phones, onSave) {
  const body = document.createElement('div')
  const render = () => {
    body.innerHTML = phones.map((p, i) => `
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${i}" data-f="label" value="${p.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${i}" data-f="numero" value="${p.numero}" placeholder="+33 6…">
        </div>
        ${i > 0 ? `<button class="m-sheet-remove" data-i="${i}"><i class="bi bi-trash"></i></button>` : ''}
      </div>
    `).join('') + `<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>`
    body.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => {
        phones[+input.dataset.i][input.dataset.f] = input.value
      })
    })
    body.querySelectorAll('.m-sheet-remove').forEach(btn => {
      btn.addEventListener('click', () => { phones.splice(+btn.dataset.i, 1); render() })
    })
    body.querySelector('.m-sheet-add-phone')?.addEventListener('click', () => {
      phones.push({ label: '', numero: '' }); render()
    })
  }
  render()
  showSheet({ title: 'Téléphone(s)', body, doneLabel: 'Enregistrer', onDone: () => { onSave(phones); showToast('Enregistré') } })
}

function showApiKeyDetail(key, apiKeys, onDeleted) {
  const body = document.createElement('div')
  body.innerHTML = `
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${key.name}</div>
      <div class="m-sheet-key-date">créée le ${key.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${key.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `
  body.querySelector('.m-sheet-key-copy').addEventListener('click', () => {
    navigator.clipboard?.writeText(key.value).catch(() => {})
    showToast('Clé copiée !')
  })
  const sheet = showSheet({ title: 'Clé API', body, doneLabel: 'Fermer', onDone: () => {} })
  body.querySelector('.m-sheet-key-delete').addEventListener('click', () => {
    const idx = apiKeys.findIndex(k => k.id === key.id)
    if (idx !== -1) apiKeys.splice(idx, 1)
    sheet.classList.remove('m-sheet-overlay--show')
    setTimeout(() => { sheet.remove(); onDeleted() }, 280)
    showToast('Clé supprimée')
  })
}

function generateKey() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
  return 'sk-wnt-' + Array.from({ length: 32 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

function showGenerateKeySheet(onGenerated) {
  const body = document.createElement('div')
  body.innerHTML = `<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">`
  const input = body.querySelector('input')
  showSheet({
    title: 'Nouvelle clé API', body, doneLabel: 'Générer',
    onDone: () => {
      const name = input.value.trim()
      if (!name) { showToast('Entrez un nom'); return }
      const key = { id: Date.now(), name, created: new Date().toLocaleDateString('fr-FR'), value: generateKey() }
      onGenerated(key)
      showToast('Clé générée')
    }
  })
  setTimeout(() => input.focus(), 300)
}

// ─── Render ───────────────────────────────────────────────────────────────────
export function initCompteScreen(container, role) {
  const profile = JSON.parse(JSON.stringify(PROFILES[role] || PROFILES.admin))
  state = { profile, langue: 'Français', unites: UNITES[0] }

  const avatarUrl = localStorage.getItem('mobile_avatarUrl') || null

  function render() {
    const p = state.profile
    const avatarInner = avatarUrl
      ? `<img src="${avatarUrl}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`
      : `<span>${p.initials}</span>`

    const apiKeysHtml = p.apiKeys.map(k => `
      <div class="m-list-row" data-key-id="${k.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${k.name}</span>
          <span class="m-list-row-sub">créée le ${k.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join('')

    const phonesHtml = p.phones.map((ph, i) => `
      <div class="m-list-row${i === p.phones.length - 1 && p.phones.length > 1 ? ' m-list-row--last' : ''}" data-action="phones">
        <span class="m-list-row-label">${ph.label || 'Numéro ' + (i + 1)}</span>
        <span class="m-list-row-value">${ph.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join('')

    container.innerHTML = `
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${avatarInner}</div>
        <div class="m-compte-name">${p.prenom} ${p.nom}</div>
        <label class="m-compte-avatar-btn">
          <input type="file" accept="image/*" id="m-avatar-upload" hidden>
          Changer la photo
        </label>
      </div>

      <div class="m-list-section-header">Identité</div>
      <div class="m-list">
        <div class="m-list-row" data-action="prenom">
          <span class="m-list-row-label">Prénom</span>
          <span class="m-list-row-value">${p.prenom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="nom">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${p.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Contact</div>
      <div class="m-list">
        <div class="m-list-row" data-action="email">
          <span class="m-list-row-label">Email</span>
          <span class="m-list-row-value" style="font-size:13px">${p.email} <i class="bi bi-check-circle-fill" style="color:#30d158;font-size:10px"></i></span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        ${phonesHtml}
        <div class="m-list-row m-list-row--last" data-action="phones" style="color:#007aff">
          <i class="bi bi-plus-circle" style="font-size:15px"></i>
          <span class="m-list-row-label" style="color:#007aff">Gérer les numéros</span>
        </div>
      </div>

      <div class="m-list-section-header">Sécurité</div>
      <div class="m-list">
        <div class="m-list-row m-list-row--last" data-action="mdp">
          <span class="m-list-row-label">Mot de passe</span>
          <span class="m-list-row-value" style="letter-spacing:3px">••••••••</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Notifications</div>
      <div class="m-list">
        <div class="m-list-row m-list-row--last" data-action="notif-settings" style="cursor:pointer">
          <i class="bi bi-bell" style="color:#636366;font-size:16px;flex-shrink:0"></i>
          <span class="m-list-row-label">Paramétrage des notifications</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>
      <div class="m-list-section-footer">Email, SMS et push par catégorie et périmètre.</div>

      <div class="m-list-section-header">Préférences</div>
      <div class="m-list">
        <div class="m-list-row" data-action="langue">
          <span class="m-list-row-label">Langue</span>
          <span class="m-list-row-value" id="val-langue">${state.langue}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="unites">
          <span class="m-list-row-label">Unités</span>
          <span class="m-list-row-value" id="val-unites">Métrique</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Clés API</div>
      <div class="m-list" id="api-keys-list">
        ${apiKeysHtml}
        <div class="m-list-row m-list-row--last" data-action="gen-key">
          <i class="bi bi-plus-circle" style="color:#007aff;font-size:16px"></i>
          <span class="m-list-row-label" style="color:#007aff">Générer une clé</span>
        </div>
      </div>

      <div class="m-list-section-header m-list-section-header--danger">Données personnelles</div>
      <div class="m-list" style="margin-bottom:32px">
        <div class="m-list-row m-list-row--last" data-action="delete">
          <i class="bi bi-trash" style="color:#ff3b30;font-size:16px"></i>
          <span class="m-list-row-label" style="color:#ff3b30;text-align:center;flex:1">Supprimer mon compte</span>
        </div>
      </div>
    `

    bindEvents()
  }

  function bindEvents() {
    const p = state.profile

    // Avatar
    container.querySelector('#m-avatar-upload')?.addEventListener('change', e => {
      const file = e.target.files[0]; if (!file) return
      const reader = new FileReader()
      reader.onload = ev => {
        localStorage.setItem('mobile_avatarUrl', ev.target.result)
        container.querySelector('#m-avatar').innerHTML =
          `<img src="${ev.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`
      }
      reader.readAsDataURL(file)
    })

    // Row actions
    container.querySelectorAll('.m-list-row[data-action]').forEach(row => {
      row.addEventListener('click', () => {
        switch (row.dataset.action) {
          case 'prenom':
            editTextField('Prénom', p.prenom, v => { p.prenom = v; render() })
            break
          case 'nom':
            editTextField('Nom', p.nom, v => { p.nom = v; render() })
            break
          case 'email':
            showSheet({
              title: 'Adresse email',
              body: Object.assign(document.createElement('div'), {
                innerHTML: `<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${p.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`
              }),
              doneLabel: 'Modifier', onDone: () => showToast('Fonctionnalité à venir')
            })
            break
          case 'phones':
            showPhonesSheet(p.phones, phones => { p.phones = phones; render() })
            break
          case 'mdp': {
            const body = document.createElement('div')
            body.innerHTML = `
              <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(0,122,255,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
                  <i class="bi bi-envelope-at" style="font-size:26px;color:#007aff"></i>
                </div>
                <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 20px">Un e-mail de réinitialisation sera envoyé à <strong>${p.email}</strong>. Vous pourrez ensuite définir un nouveau mot de passe.</p>
                <button id="send-reset-btn" style="background:#007aff;color:#fff;border:none;border-radius:12px;padding:14px 0;font-size:16px;font-weight:600;cursor:pointer;width:100%">Envoyer l'e-mail</button>
              </div>`
            const sheet = showSheet({ title: 'Réinitialiser le mot de passe', body, doneLabel: 'Annuler', onDone: () => {} })
            body.querySelector('#send-reset-btn').addEventListener('click', () => {
              sheet.classList.remove('m-sheet-overlay--show')
              setTimeout(() => sheet.remove(), 280)
              showToast('E-mail de réinitialisation envoyé')
            })
            break
          }
          case 'langue':
            showOptionPicker('Langue', LANGUES, state.langue, v => {
              state.langue = v
              container.querySelector('#val-langue').textContent = v
            })
            break
          case 'unites':
            showOptionPicker('Unités', UNITES, state.unites, v => {
              state.unites = v
              container.querySelector('#val-unites').textContent = v.split(' ')[0]
            })
            break
          case 'gen-key':
            showGenerateKeySheet(key => { p.apiKeys.push(key); render() })
            break
          case 'notif-settings':
            openNotifSettings(showToast)
            break
          case 'delete':
            showToast('Contactez le support pour supprimer votre compte')
            break
        }
      })
    })

    // API key rows
    container.querySelectorAll('.m-list-row[data-key-id]').forEach(row => {
      row.addEventListener('click', () => {
        const key = p.apiKeys.find(k => k.id === +row.dataset.keyId)
        if (key) showApiKeyDetail(key, p.apiKeys, render)
      })
    })
  }

  render()
}
