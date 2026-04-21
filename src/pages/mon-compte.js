import { updateBreadcrumb } from '../js/breadcrumb.js'

const PROFILES = {
  'admin-reseau': {
    initials: 'JD',
    prenom: 'Jean', nom: 'Dupont',
    email: 'jean.dupont@ferme-du-bocage.fr',
    tel: '+33 6 12 34 56 78',
    extraPhones: [{ nom: 'Sophie Dupont', numero: '+33 6 98 76 54 32' }],
    apiKeys: [
      { id: 1, name: 'Application mobile', created: '2026-01-10' },
      { id: 2, name: 'Intégration Agreo',  created: '2026-02-28' },
      { id: 3, name: 'Script export nuit', created: '2026-04-01' },
    ]
  },
  'adherent-reseau': {
    initials: 'MM',
    prenom: 'Marie', nom: 'Martin',
    email: 'marie.martin@ferme-du-bocage.fr',
    tel: '+33 7 52 18 93 46',
    extraPhones: [],
    apiKeys: [
      { id: 1, name: 'Application mobile', created: '2026-02-14' },
    ]
  }
}

function getProfile() {
  const role = localStorage.getItem('menuRole') || 'admin-reseau'
  return PROFILES[role] || PROFILES['admin-reseau']
}

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  renderMonCompte()
})

function showToast(msg) {
  const t = document.createElement('div')
  t.className = 'toast'
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.classList.add('show'), 10)
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300) }, 2500)
}

function renderMonCompte() {
  const el = document.getElementById('content')
  if (!el) return

  const profile = getProfile()
  const avatarUrl = localStorage.getItem('avatarUrl')
  const avatarContent = avatarUrl
    ? `style="background-image:url(${avatarUrl});background-size:cover;"`
    : ''

  el.innerHTML = `
    <div class="account-page">

      <!-- Avatar + nom -->
      <section class="account-section account-section--avatar">
        <div class="account-avatar" id="account-avatar" ${avatarContent}>${avatarUrl ? '' : profile.initials}</div>
        <div class="account-avatar-info">
          <div class="account-avatar-name">${profile.prenom} ${profile.nom}</div>
          <label class="btn-secondary account-avatar-upload" style="cursor:pointer">
            <i class="bi bi-camera"></i> Changer la photo
            <input type="file" accept="image/*" style="display:none" id="avatar-upload">
          </label>
        </div>
      </section>

      <!-- Identité -->
      <section class="account-section">
        <div class="account-section-title">Identité</div>
        <div class="account-field-row">
          <label class="account-label">Prénom</label>
          <input type="text" class="account-input" value="${profile.prenom}" id="field-prenom">
          <button class="account-save-btn" data-field="prenom"><i class="bi bi-check-lg"></i></button>
        </div>
        <div class="account-field-row">
          <label class="account-label">Nom</label>
          <input type="text" class="account-input" value="${profile.nom}" id="field-nom">
          <button class="account-save-btn" data-field="nom"><i class="bi bi-check-lg"></i></button>
        </div>
      </section>

      <!-- Email -->
      <section class="account-section">
        <div class="account-section-title">Email</div>
        <div class="account-field-row">
          <label class="account-label">Adresse email</label>
          <span class="account-value">${profile.email}</span>
          <span class="verified-badge"><i class="bi bi-patch-check-fill"></i> Vérifié</span>
          <button class="btn-secondary" id="modify-email-btn">Modifier</button>
        </div>
      </section>

      <!-- Mot de passe -->
      <section class="account-section">
        <div class="account-section-title">Mot de passe</div>
        <div class="account-field-row">
          <label class="account-label">Mot de passe</label>
          <span class="account-value">••••••••••••</span>
          <button class="btn-secondary" id="modify-pwd-btn">Modifier</button>
        </div>
      </section>

      <!-- Téléphone -->
      <section class="account-section">
        <div class="account-section-title" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
          <span>Téléphone</span>
          ${(profile.extraPhones || []).length < 4 ? `<button class="btn-secondary" id="add-extra-phone-btn" style="font-size:12px"><i class="bi bi-plus"></i> Ajouter un numéro</button>` : ''}
        </div>
        <div class="account-field-row">
          <label class="account-label">Numéro principal</label>
          <input type="tel" class="account-input" value="${profile.tel}" id="field-tel">
          <button class="account-save-btn" data-field="tel"><i class="bi bi-check-lg"></i></button>
        </div>
        <div id="extra-phones-list">
          ${(profile.extraPhones || []).map((p, i) => `
          <div class="account-field-row extra-phone-row" data-index="${i}">
            <input type="text" class="account-input" style="max-width:160px" placeholder="Nom" value="${p.nom}" data-extra-phone-nom="${i}">
            <input type="tel" class="account-input" placeholder="Numéro" value="${p.numero}" data-extra-phone-num="${i}">
            <button class="account-save-btn extra-phone-save" data-index="${i}"><i class="bi bi-check-lg"></i></button>
            <button class="icon-btn remove-extra-phone" data-index="${i}" title="Supprimer"><i class="bi bi-x-lg"></i></button>
          </div>`).join('')}
        </div>
      </section>

      <!-- Préférences notifications -->
      <section class="account-section">
        <div class="account-section-title">Préférences de notifications</div>
        ${renderNotifPrefs()}
      </section>

      <!-- Langue -->
      <section class="account-section">
        <div class="account-section-title">Langue</div>
        <div class="account-field-row">
          <label class="account-label">Langue de l'interface</label>
          <select class="account-input" id="field-langue" style="max-width:220px">
            <option value="fr" selected>Français</option>
            <option value="en">Anglais</option>
            <option value="es">Espagnol</option>
            <option value="de">Allemand</option>
            <option value="it">Italien</option>
            <option value="pt">Portugais</option>
            <option value="pl">Polonais</option>
            <option value="nl">Néerlandais</option>
          </select>
          <button class="account-save-btn" data-field="langue"><i class="bi bi-check-lg"></i></button>
        </div>
      </section>

      <!-- Système d'unités -->
      <section class="account-section">
        <div class="account-section-title">Système d'unités</div>
        <div class="account-field-row" style="gap:20px">
          <label class="account-label">Unités de mesure</label>
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:14px">
            <input type="radio" name="units" value="metrique" checked> Métrique (mm, °C, km/h…)
          </label>
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:14px">
            <input type="radio" name="units" value="imperial"> Impérial (in, °F, mph…)
          </label>
          <button class="account-save-btn" data-field="units"><i class="bi bi-check-lg"></i></button>
        </div>
      </section>

      <!-- Smartphones autorisés -->
      <section class="account-section">
        <div class="account-section-title">Smartphones autorisés</div>
        <div id="smartphones-list"></div>
      </section>

      <!-- Clés d'API -->
      <section class="account-section">
        <div class="account-section-title" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
          <span>Clés d'API <span id="api-key-count" style="font-weight:400;color:var(--txt3);font-size:11px"></span></span>
          <button class="btn-secondary" id="add-api-key-btn" style="font-size:12px"><i class="bi bi-plus"></i> Générer une clé</button>
        </div>
        <div id="api-keys-list"></div>
      </section>

      <!-- Supprimer le compte -->
      <section class="account-section account-section--danger">
        <div class="account-section-title">Zone de danger</div>
        <p class="account-danger-desc">La suppression de votre compte est irréversible. Toutes vos données seront définitivement effacées.</p>
        <button class="btn-danger" id="delete-account-btn"><i class="bi bi-trash"></i> Supprimer mon compte</button>
      </section>

    </div>
  `

  bindEvents()
}

function renderNotifPrefs() {
  const cats = [
    { key: 'orgs',     label: 'Organisations', icon: 'bi-building' },
    { key: 'capteurs', label: 'Capteurs',       icon: 'bi-broadcast' },
  ]
  const channels = [
    { key: 'email', label: 'Email',             icon: 'bi-envelope' },
    { key: 'sms',   label: 'SMS',               icon: 'bi-phone' },
    { key: 'push',  label: 'Notification push', icon: 'bi-bell' },
  ]

  return `<div class="notif-prefs-grid">
    <div></div>
    ${channels.map(c => `<div class="notif-prefs-channel"><i class="bi ${c.icon}"></i> ${c.label}</div>`).join('')}
    ${cats.map(cat => `
      <div class="notif-prefs-cat"><i class="bi ${cat.icon}"></i> ${cat.label}</div>
      ${channels.map(ch => `
        <div class="notif-prefs-cell">
          <label class="toggle-switch">
            <input type="checkbox" ${cat.key === 'capteurs' && ch.key === 'sms' ? '' : 'checked'}>
            <span class="toggle-track"></span>
          </label>
        </div>
      `).join('')}
    `).join('')}
  </div>`
}

const MAX_KEYS = 20

function genKey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return 'sk-wnt-' + Array.from({ length: 32 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

let apiKeys = getProfile().apiKeys.map(k => ({ ...k, key: genKey() }))
let nextId = apiKeys.length + 1

function renderApiKeys() {
  const list   = document.getElementById('api-keys-list')
  const count  = document.getElementById('api-key-count')
  const addBtn = document.getElementById('add-api-key-btn')
  if (!list) return

  if (count) count.textContent = `(${apiKeys.length} / ${MAX_KEYS})`
  if (addBtn) addBtn.disabled = apiKeys.length >= MAX_KEYS

  list.innerHTML = apiKeys.map(k => `
    <div class="api-key-entry" data-id="${k.id}">
      <div class="api-key-entry-header">
        <span class="api-key-name" data-id="${k.id}">${k.name}</span>
        <button class="api-key-rename-btn icon-btn" data-id="${k.id}" title="Renommer"><i class="bi bi-pencil"></i></button>
        <span class="api-key-created">créée le ${k.created.split('-').reverse().join('/')}</span>
      </div>
      <div class="api-key-row">
        <code class="api-key-value">${k.key.slice(0, 14)}••••••••••••••••••••••••••</code>
        <button class="api-key-copy btn-secondary" data-key="${k.key}" style="font-size:12px"><i class="bi bi-clipboard"></i> Copier</button>
        <button class="api-key-regen btn-secondary" data-id="${k.id}" style="font-size:12px"><i class="bi bi-arrow-repeat"></i> Régénérer</button>
        <button class="api-key-delete icon-btn" data-id="${k.id}" title="Supprimer" style="color:var(--err)"><i class="bi bi-trash"></i></button>
      </div>
    </div>
  `).join('') || '<div style="color:var(--txt3);font-size:13px;padding:8px 0">Aucune clé d\'API.</div>'

  list.querySelectorAll('.api-key-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard?.writeText(btn.dataset.key)
      showToast('Clé copiée dans le presse-papier.')
    })
  })

  list.querySelectorAll('.api-key-regen').forEach(btn => {
    btn.addEventListener('click', () => {
      const k = apiKeys.find(x => x.id === parseInt(btn.dataset.id))
      if (!k || !confirm(`Régénérer la clé "${k.name}" ? L'ancienne sera invalidée.`)) return
      k.key = genKey()
      renderApiKeys()
      showToast('Clé régénérée.')
    })
  })

  list.querySelectorAll('.api-key-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const k = apiKeys.find(x => x.id === parseInt(btn.dataset.id))
      if (!k || !confirm(`Supprimer la clé "${k.name}" ?`)) return
      apiKeys = apiKeys.filter(x => x.id !== k.id)
      renderApiKeys()
      showToast('Clé supprimée.')
    })
  })

  list.querySelectorAll('.api-key-rename-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const k   = apiKeys.find(x => x.id === parseInt(btn.dataset.id))
      if (!k) return
      const entry = list.querySelector(`.api-key-name[data-id="${k.id}"]`)
      if (!entry) return
      const input = document.createElement('input')
      input.type  = 'text'
      input.className = 'account-input'
      input.value = k.name
      input.style.cssText = 'width:180px;padding:3px 8px;font-size:13px'
      entry.replaceWith(input)
      input.focus()
      const commit = () => {
        k.name = input.value.trim() || k.name
        renderApiKeys()
      }
      input.addEventListener('blur', commit)
      input.addEventListener('keydown', e => { if (e.key === 'Enter') commit() })
    })
  })
}

function initApiKeys() {
  renderApiKeys()

  document.getElementById('add-api-key-btn')?.addEventListener('click', () => {
    if (apiKeys.length >= MAX_KEYS) return
    const name = prompt('Nom de la nouvelle clé :')
    if (!name) return
    const today = new Date().toISOString().slice(0, 10)
    apiKeys.push({ id: nextId++, name: name.trim() || 'Nouvelle clé', key: genKey(), created: today })
    renderApiKeys()
    showToast('Clé générée.')
  })
}

const MAX_EXTRA_PHONES = 4

function initExtraPhones() {
  const profile = getProfile()
  if (!profile.extraPhones) profile.extraPhones = []

  document.getElementById('add-extra-phone-btn')?.addEventListener('click', () => {
    if (profile.extraPhones.length >= MAX_EXTRA_PHONES) return
    profile.extraPhones.push({ nom: '', numero: '' })
    renderMonCompte()
  })

  document.querySelectorAll('.remove-extra-phone').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.index)
      profile.extraPhones.splice(i, 1)
      renderMonCompte()
    })
  })

  document.querySelectorAll('.extra-phone-save').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.index)
      const nom    = document.querySelector(`[data-extra-phone-nom="${i}"]`)?.value.trim() || ''
      const numero = document.querySelector(`[data-extra-phone-num="${i}"]`)?.value.trim() || ''
      profile.extraPhones[i] = { nom, numero }
      showToast('Numéro enregistré.')
    })
  })
}

let smartphones = [
  { id: 'A1B2-3C4D', model: 'iPhone 15 Pro' },
  { id: 'E5F6-7G8H', model: 'Samsung Galaxy S24' },
  { id: 'I9J0-K1L2', model: 'Google Pixel 8' },
]

function renderSmartphones() {
  const list = document.getElementById('smartphones-list')
  if (!list) return
  if (!smartphones.length) {
    list.innerHTML = '<div style="color:var(--txt3);font-size:13px;padding:4px 0">Aucun smartphone autorisé.</div>'
    return
  }
  list.innerHTML = smartphones.map((d, i) => `
    <div class="account-field-row" style="align-items:center">
      <span class="account-label" style="font-family:monospace;font-size:12px;color:var(--txt3)">${d.id}</span>
      <span class="account-value">${d.model}</span>
      <button class="icon-btn remove-smartphone" data-index="${i}" title="Révoquer" style="color:var(--err)"><i class="bi bi-trash"></i></button>
    </div>`).join('')
  list.querySelectorAll('.remove-smartphone').forEach(btn => {
    btn.addEventListener('click', () => {
      smartphones.splice(parseInt(btn.dataset.index), 1)
      renderSmartphones()
      showToast('Smartphone révoqué.')
    })
  })
}

function initSmartphones() {
  renderSmartphones()
}

function bindEvents() {
  document.querySelectorAll('.account-save-btn').forEach(btn => {
    btn.addEventListener('click', () => showToast('Modifications enregistrées.'))
  })

  document.getElementById('modify-email-btn')?.addEventListener('click', () =>
    showToast('Modification email — fonctionnalité à venir')
  )
  document.getElementById('modify-pwd-btn')?.addEventListener('click', () =>
    showToast('Modification mot de passe — fonctionnalité à venir')
  )

  initApiKeys()
  initExtraPhones()
  initSmartphones()

  document.getElementById('delete-account-btn')?.addEventListener('click', () => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) return
    showToast('Suppression de compte — fonctionnalité à venir')
  })

  document.getElementById('avatar-upload')?.addEventListener('change', e => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => {
      const avatar = document.getElementById('account-avatar')
      if (avatar) {
        avatar.style.backgroundImage = `url(${ev.target.result})`
        avatar.style.backgroundSize = 'cover'
        avatar.textContent = ''
      }
      localStorage.setItem('avatarUrl', ev.target.result)
    }
    reader.readAsDataURL(file)
  })
}
