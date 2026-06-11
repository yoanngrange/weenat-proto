// ─── Onboarding wizard — role=new | new-adherent | new-member-* ───────────────
import { METIERS, IRRIG_TYPES, SOIL_TYPES } from '../../data/constants.js'
import { sensors as ALL_SENSORS } from '../../data/sensors.js'

const NEARBY_NETWORKS = [
  { name: 'Allier AgriTech',       distance: 8,  adherents: 31, capteurs: 198, parcelles: 1140 },
  { name: 'Auvergne Agri Conseil', distance: 15, adherents: 54, capteurs: 361, parcelles: 2080 },
  { name: 'Réseau Bourbonnais',    distance: 22, adherents: 18, capteurs: 112, parcelles: 630  },
  { name: 'Creuse Agri Net',       distance: 38, adherents: 12, capteurs: 74,  parcelles: 410  },
  { name: 'Puy-de-Dôme Connect',   distance: 45, adherents: 39, capteurs: 255, parcelles: 1490 },
]

const INVITED_NETWORK = { name: "Breiz'Agri Conseil", city: 'Rennes (35)', phone: '02 99 XX XX XX', email: 'contact@breizagri.fr', adherents: 47, capteurs: 312, parcelles: 1830, sharedSensorTypes: ['Capteurs météo'] }

function netInitials(name) {
  return name.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0].toUpperCase()).join('')
}

const DEFAULTS = {
  prenom: 'Pierre', nom: 'Jourdain',
  email: 'pierre@gaec-jourdain.fr', phone: '06 71 23 45 67',
  orgName: 'GAEC Jourdain',
  adresse: 'Lieu-dit La Croix Blanche, 03500 Saint-Pourçain-sur-Sioule',
  metiers: ['Polyculture-Élevage'],
  selectedPlan: 'expert',
  joinNetwork: true,
  volumeMax: '150000',
}

const MODEL_DISPLAY_NAMES = {
  'P+': 'Station météo', 'PT': 'Station météo', 'P': 'Pluviomètre',
  'TH': 'Thermomètre-hygromètre', 'SMV': 'Station météo virtuelle',
  'W': 'Anémomètre', 'PYRANO': 'Pyranomètre', 'PAR': 'Capteur PAR',
  'LWS': "Capteur d'humectation foliaire", 'T_GEL': 'Sonde gel',
  'T_MINI': 'Thermo. sol', 'CHP-15/30': 'Tensiomètre 15/30 cm',
  'CHP-30/60': 'Tensiomètre 30/60 cm', 'CHP-60/90': 'Tensiomètre 60/90 cm',
  'CAPA-30-3': 'Sonde capacitive', 'CAPA-60-6': 'Sonde capacitive', 'EC': 'Fertirrigation',
}

const OB_SENSOR_METRICS = {
  'P+': ['pluie', 'temperature', 'humidite'], 'PT': ['pluie', 'temperature'],
  'P': ['pluie'], 'TH': ['temperature', 'humidite'], 'SMV': ['pluie', 'temperature', 'humidite'],
  'CHP-15/30': ['pothydr', 'temp_sol'], 'CHP-30/60': ['pothydr', 'temp_sol'],
  'CHP-60/90': ['pothydr', 'temp_sol'], 'CAPA-30-3': ['teneur', 'temp_sol'],
  'CAPA-60-6': ['teneur', 'temp_sol'], 'EC': ['teneur', 'temp_sol'],
}
const OB_TENSIO_MODELS = new Set(['CHP-15/30', 'CHP-30/60', 'CHP-60/90'])

const SUBSCRIPTION_PLANS = [
  {
    id: 'essential',
    name: 'Weenat Essential',
    priceNum: 0,
    price: 'Gratuit',
    color: '#636366',
    features: ['Aucun capteur physique', 'Historique illimité', 'Alertes', 'Accès API', '2 stations météo virtuelles', 'Parcelles illimitées'],
  },
  {
    id: 'plus',
    name: 'Weenat Plus',
    priceNum: 16.5,
    price: '16,5 €/mois',
    color: '#00B093',
    features: ['Historique illimité', 'Alertes', 'Intégrations', 'Exports', 'Accès API', '2 stations météo virtuelles', 'Parcelles illimitées'],
  },
  {
    id: 'expert',
    name: 'Weenat Expert',
    priceNum: 30,
    price: '30 €/mois',
    color: '#006798',
    features: ['Historique illimité', 'Alertes', 'Intégrations', 'Exports', 'Accès API', '2 stations météo virtuelles', 'Parcelles illimitées', 'Capteurs irrigation', 'Fonctionnalités irrigation'],
  },
]

const ROLE_PERMISSIONS = {
  'Administrateur': [
    { section: 'Parcelles',                items: [{ label: 'Consulter et exporter les données', ok: true }, { label: 'Créer, modifier, archiver et supprimer', ok: true }] },
    { section: 'Capteurs',                 items: [{ label: 'Consulter et exporter les données', ok: true }, { label: 'Ajouter, retirer et lier à une parcelle', ok: true }] },
    { section: 'Membres',                  items: [{ label: 'Consulter les informations', ok: true }, { label: 'Inviter, modifier et retirer', ok: true }] },
    { section: 'Exploitations adhérentes', items: [{ label: 'Consulter les informations', ok: true }, { label: 'Inviter, modifier et retirer', ok: true }] },
    { section: 'Facturation',              items: [{ label: 'Consulter et modifier les informations', ok: true }] },
  ],
  'Agent': [
    { section: 'Parcelles',                items: [{ label: 'Consulter et exporter les données', ok: true }, { label: 'Créer, modifier, archiver et supprimer', ok: true }] },
    { section: 'Capteurs',                 items: [{ label: 'Consulter et exporter les données', ok: true }, { label: 'Ajouter, retirer et lier à une parcelle', ok: true }] },
    { section: 'Membres',                  items: [{ label: 'Consulter les informations', ok: true }, { label: 'Inviter, modifier et retirer', ok: false }] },
    { section: 'Exploitations adhérentes', items: [{ label: 'Consulter les informations', ok: true }, { label: 'Inviter, modifier et retirer', ok: false }] },
    { section: 'Facturation',              items: [{ label: 'Consulter et modifier les informations', ok: false }] },
  ],
  'Lecteur': [
    { section: 'Parcelles',                items: [{ label: 'Consulter et exporter les données', ok: true }, { label: 'Créer, modifier, archiver et supprimer', ok: false }] },
    { section: 'Capteurs',                 items: [{ label: 'Consulter et exporter les données', ok: true }, { label: 'Ajouter, retirer et lier à une parcelle', ok: false }] },
    { section: 'Membres',                  items: [{ label: 'Consulter les informations', ok: true }, { label: 'Inviter, modifier et retirer', ok: false }] },
    { section: 'Exploitations adhérentes', items: [{ label: 'Consulter les informations', ok: false }, { label: 'Inviter, modifier et retirer', ok: false }] },
    { section: 'Facturation',              items: [{ label: 'Consulter et modifier les informations', ok: false }] },
  ],
}

const IRRIGATION_SENSOR_MODELS = new Set(['CHP-15/30', 'CHP-30/60', 'CHP-60/90', 'CAPA-30-3', 'CAPA-60-6', 'EC'])

function getBaseSteps(role, selectedPlan, joinNetwork, hasVolumeLimit) {
  const isEssential = selectedPlan === 'essential'
  const isExpert    = selectedPlan === 'expert'

  if (role === 'new-member-admin' || role === 'new-member-agent' || role === 'new-member-reader') {
    return ['signup', 'verify', 'emailVerified', 'creating', 'done']
  }

  if (role === 'new-adherent') {
    return [
      'signup', 'verify', 'emailVerified', 'orgName', 'geoloc', 'orgInfo',
      'networkInfo', 'invite', 'plan',
      ...(isExpert ? ['volumeChoice'] : []),
      'creating', 'done',
    ]
  }

  // default 'new'
  return [
    'signup', 'verify', 'emailVerified', 'orgName', 'geoloc', 'orgInfo',
    'networkChoice', ...(joinNetwork ? ['networkPick'] : []),
    'invite', 'plan',
    ...(!isEssential ? ['payment', 'paymentConfirmed'] : []),
    ...(isExpert ? ['volumeChoice'] : []),
    'creating', 'done',
  ]
}

function getSteps(role, selectedPlan, joinNetwork, hasVolumeLimit) {
  return getBaseSteps(role, selectedPlan, joinNetwork, hasVolumeLimit)
}

const STEP_LABELS = {
  signup: 'Inscription', verify: 'Vérification', orgName: 'Exploitation',
  geoloc: 'Localisation', orgInfo: 'Informations',
  networkChoice: 'Réseau', networkPick: 'Choisir un réseau', networkInfo: 'Mon réseau',
  invite: 'Invitations', plan: 'Abonnement',
  payment: 'Paiement', paymentConfirmed: 'Paiement', volumeChoice: 'Volume autorisé',
  parcelMap: 'Parcelle', parcelSource: 'Source de données', parcelConfig: 'Paramétrage', parcelDone: 'Confirmation',
}

export function showOnboarding(role, onComplete) {
  const screen = document.getElementById('phone-screen')
  let stepIdx        = 0
  let selectedPlan   = role === 'new-adherent' ? 'expert' : DEFAULTS.selectedPlan
  let joinNetwork    = DEFAULTS.joinNetwork
  let pwVisible      = false
  let inviteCount    = 0
  let hasVolumeLimit = true
  // Parcel creation state
  let parcelLat     = 46.3021
  let parcelLng     = 3.2938
  let parcelMarker  = null
  let parcelMapInst = null
  let parcelSource  = 'smv'         // 'link' | 'add' | 'smv'
  let parcelLinkedSensorIds = []     // IDs of linked sensors
  let parcelName    = 'Parcelle 1'

  const overlay = document.createElement('div')
  overlay.id = 'onboarding-overlay'
  overlay.className = 'm-ob-overlay'
  screen.appendChild(overlay)

  function steps()     { return getSteps(role, selectedPlan, joinNetwork, hasVolumeLimit) }
  function currentId() { return steps()[stepIdx] }
  function visibleTotal() { return steps().filter(s => !['creating','done','parcelDone','emailVerified','paymentConfirmed'].includes(s)).length }
  function plan()      { return SUBSCRIPTION_PLANS.find(p => p.id === selectedPlan) }

  function progress() {
    const visIdx = steps().slice(0, stepIdx).filter(s => s !== 'creating' && s !== 'done' && s !== 'parcelDone').length
    const pct = Math.round((visIdx / visibleTotal()) * 100)
    return `<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${pct}%"></div></div>`
  }

  function wrap(body, canBack = true) {
    const id = currentId()
    const terminalSteps = new Set(['creating', 'done', 'parcelDone', 'emailVerified', 'paymentConfirmed'])
    const showBack = canBack && stepIdx > 0 && !terminalSteps.has(id)
    const label = STEP_LABELS[id] || ''
    return `
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${showBack ? `<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>` : `<div style="width:32px"></div>`}
          <span class="m-ob-step-label">${label}</span>
          <div style="width:32px"></div>
        </div>
        ${!terminalSteps.has(id) ? progress() : ''}
        <div class="m-ob-body">${body}</div>
      </div>`
  }

  function next() { stepIdx++; paint() }
  function back() { stepIdx--; paint() }

  // ─── Steps ────────────────────────────────────────────────────────────────────

  function renderSignup() {
    return wrap(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-person"></i></div>
        <h2 class="m-ob-h2">Créer mon compte</h2>
      </div>
      <div class="m-ob-form" style="margin-top:20px">
        <div class="m-ob-row2">
          <div class="m-ob-field">
            <label class="m-ob-label">Prénom</label>
            <input class="m-ob-input" type="text" placeholder="Prénom" value="${DEFAULTS.prenom}">
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">Nom</label>
            <input class="m-ob-input" type="text" placeholder="Nom" value="${DEFAULTS.nom}">
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Adresse email professionnelle</label>
          <input class="m-ob-input" type="email" placeholder="Adresse email professionnelle" value="${DEFAULTS.email}">
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Mot de passe</label>
          <div class="m-ob-pw-strength"><div class="m-ob-pw-bar" style="width:75%;background:#ff9f0a"></div></div>
          <div class="m-ob-pw-wrap">
            <input class="m-ob-input m-ob-input--pw" id="ob-pw" type="password" placeholder="Mot de passe" value="Jourdain2026!">
            <button class="m-ob-pw-eye" id="ob-pw-eye" type="button"><i class="bi bi-eye${pwVisible ? '' : '-slash'}"></i></button>
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Pays</label>
          <div class="m-ob-select-flag">
            <span class="m-ob-flag">🇫🇷</span>
            <select class="m-ob-input m-ob-input--select">
              <option selected>France</option><option>Belgique</option><option>Espagne</option><option>Italie</option>
            </select>
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Numéro de téléphone</label>
          <div class="m-ob-phone-wrap">
            <div class="m-ob-phone-prefix"><span>🇫🇷</span></div>
            <input class="m-ob-input m-ob-input--phone" type="tel" placeholder="06 12 12 12 12" value="${DEFAULTS.phone}">
          </div>
        </div>
        <label class="m-ob-cgu-row">
          <input type="checkbox" checked>
          <span>J'ai lu et j'accepte les <a href="#">conditions d'utilisations</a> et la <a href="#">politique de confidentialité</a></span>
        </label>
      </div>
      <button class="m-ob-cta" id="ob-next">Créer mon compte</button>
    `, false)
  }

  function renderVerify() {
    return wrap(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-envelope-check"></i></div>
        <h2 class="m-ob-h2">Vérifiez votre adresse email</h2>
        <p class="m-ob-sub">Un e-mail a été envoyé à<br><strong>${DEFAULTS.email}</strong></p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Code de vérification</label>
          <input class="m-ob-input m-ob-input--code" type="text" value="847291" maxlength="6" inputmode="numeric">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Confirmer</button>
      <button class="m-ob-link" type="button">Renvoyer le code</button>
    `)
  }

  function renderEmailVerified() {
    return `
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          <div style="width:32px"></div>
          <span class="m-ob-step-label"></span>
          <div style="width:32px"></div>
        </div>
        <div class="m-ob-body" style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:20px;padding:32px 24px">
          <div style="width:72px;height:72px;border-radius:50%;background:#e8fff0;display:flex;align-items:center;justify-content:center">
            <i class="bi bi-check-circle-fill" style="font-size:36px;color:#30d158"></i>
          </div>
          <h2 class="m-ob-h2" style="text-align:center">Votre adresse email est vérifiée</h2>
          <p class="m-ob-sub" style="text-align:center"><strong>${DEFAULTS.email}</strong><br>a bien été confirmée.</p>
          <button class="m-ob-cta" id="ob-next" style="margin-top:12px">Continuer</button>
        </div>
      </div>`
  }

  function renderOrgName() {
    return wrap(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-building"></i></div>
        <h2 class="m-ob-h2">Votre exploitation</h2>
        <p class="m-ob-sub">Comment s'appelle votre exploitation ?</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de l'exploitation</label>
          <input class="m-ob-input" type="text" value="${DEFAULTS.orgName}">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)
  }

  function renderGeoloc() {
    return wrap(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#fff3e8;color:#ff9f0a"><i class="bi bi-geo-alt"></i></div>
        <h2 class="m-ob-h2">Géolocalisation</h2>
      </div>
      <ul class="m-ob-value-bullets">
        <li><i class="bi bi-check-circle-fill"></i>Centrer la carte sur votre exploitation</li>
        <li><i class="bi bi-check-circle-fill"></i>Proposer des données météo locales précises</li>
        <li><i class="bi bi-check-circle-fill"></i>Faciliter la création de vos parcelles</li>
      </ul>
      <div id="ob-geoloc-btns">
        <button class="m-ob-cta" id="ob-geoloc-allow"><i class="bi bi-crosshair2"></i> Autoriser la géolocalisation</button>
        <button class="m-ob-link" id="ob-geoloc-manual" type="button">Saisir l'adresse manuellement</button>
      </div>
      <div id="ob-geoloc-addr" style="display:none">
        <div class="m-ob-form">
          <div class="m-ob-field">
            <label class="m-ob-label">Adresse de votre exploitation</label>
            <input class="m-ob-input" type="text" value="${DEFAULTS.adresse}">
          </div>
          <div id="ob-addr-map" class="m-ob-addr-map"></div>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      </div>
    `)
  }

  function renderOrgInfo() {
    const pills = METIERS.map(m =>
      `<button type="button" class="m-ob-pill" data-metier="${m}">${m}</button>`
    ).join('')
    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-house"></i></div>
        <h2 class="m-ob-h2">Votre activité</h2>
        <p class="m-ob-sub">Ces informations nous permettent de vous conseiller les fonctionnalités les plus adaptées.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Métier(s)</label>
          <div class="m-ob-pills">${pills}</div>
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)
  }

  function renderNetworkChoice() {
    return wrap(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3"></i></div>
        <h2 class="m-ob-h2">Rejoindre un réseau</h2>
      </div>
      <ul class="m-ob-value-bullets">
        <li><i class="bi bi-check-circle-fill"></i>Accédez aux capteurs partagés par votre réseau</li>
        <li><i class="bi bi-check-circle-fill"></i>Bénéficiez de conseils sur l'installation des capteurs et l'utilisation de l'app</li>
        <li><i class="bi bi-check-circle-fill"></i>Votre conseiller peut suivre l'état de vos parcelles et capteurs, avec votre accord</li>
      </ul>
      <div class="m-ob-plan-cards" style="margin-top:16px">
        <div class="m-ob-plan-card" data-join="oui">
          <div class="m-ob-plan-name">Oui, rejoindre un réseau</div>
          <div class="m-ob-plan-desc">Je veux rejoindre un réseau, partager des données et profiter du conseil.</div>
        </div>
        <div class="m-ob-plan-card" data-join="non">
          <div class="m-ob-plan-name">Non merci</div>
          <div class="m-ob-plan-desc">Je gère mon exploitation sur l'application Weenat en autonomie.</div>
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)
  }

  function renderNetworkPick() {
    const rows = NEARBY_NETWORKS.map(net => `
      <div class="m-ob-net-row" data-net="${net.name}">
        <div class="m-ob-net-avatar">${netInitials(net.name)}</div>
        <div class="m-ob-net-info">
          <div class="m-ob-net-name">${net.name}</div>
          <div class="m-ob-net-meta">${net.distance} km · ${net.capteurs} capteurs · ${net.parcelles} parcelles</div>
        </div>
        <div class="m-ob-net-check"><i class="bi bi-circle"></i></div>
      </div>`).join('')
    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-building-check"></i></div>
        <h2 class="m-ob-h2">Choisir un réseau</h2>
        <p class="m-ob-sub">Les 5 réseaux les plus proches de votre exploitation.</p>
      </div>
      <div class="m-ob-net-list">${rows}</div>
      <button class="m-ob-cta" id="ob-next">Rejoindre</button>
    `)
  }

  function renderNetworkInfo() {
    const net = INVITED_NETWORK
    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3-fill"></i></div>
        <h2 class="m-ob-h2">Mon réseau</h2>
        <p class="m-ob-sub">Vous avez été invité à rejoindre ce réseau.</p>
      </div>
      <div class="m-ob-info-card" style="background:var(--bg2,#f5f5f7);border-radius:12px;padding:20px 16px;margin:0 0 16px">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:14px">
          <div class="m-ob-net-avatar" style="width:64px;height:64px;font-size:24px;border-radius:16px;margin-bottom:8px">${netInitials(net.name)}</div>
          <div style="font-weight:700;font-size:16px">${net.name}</div>
          <div style="font-size:13px;color:#636366">${net.city}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px;margin-top:6px"><i class="bi bi-telephone" style="color:#0172A4"></i> ${net.phone}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px"><i class="bi bi-envelope" style="color:#0172A4"></i> ${net.email}</div>
        </div>
        <div style="display:flex;gap:16px;padding-top:12px;padding-bottom:12px;border-top:.5px solid rgba(0,0,0,.1)">
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${net.capteurs}</div><div style="font-size:11px;color:#636366">capteurs</div></div>
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${net.parcelles}</div><div style="font-size:11px;color:#636366">parcelles</div></div>
        </div>
        <div style="padding-top:12px;border-top:.5px solid rgba(0,0,0,.1)">
          <div style="font-size:13px;color:#3a3a3c;margin-bottom:${net.sharedSensorTypes?.length ? '8px' : '0'}">Capteurs partagés entre les adhérents${net.sharedSensorTypes?.length ? ' :' : ' : Aucun capteur partagé'}</div>
          ${net.sharedSensorTypes?.length ? `<div class="m-ob-pills">${net.sharedSensorTypes.map(t => `<span class="m-ob-pill m-ob-pill--on" style="cursor:default">${t}</span>`).join('')}</div>` : ''}
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)
  }

  function rolePermsHtml(role) {
    const perms = ROLE_PERMISSIONS[role]
    if (!perms) return ''
    return `<div class="m-ob-role-perms">${perms.map(s => `
      <div class="m-rp-section">
        <div class="m-rp-section-title">${s.section}</div>
        ${s.items.map(it => `
          <div class="m-rp-item">
            <i class="bi bi-${it.ok ? 'check-circle-fill' : 'x-circle-fill'}" style="color:${it.ok ? '#30d158' : '#ff3b30'}"></i>
            <span>${it.label}</span>
          </div>`).join('')}
      </div>`).join('')}</div>`
  }

  function inviteRowHtml() {
    return `
      <div class="m-ob-invite-block">
        <div style="display:flex;align-items:center;gap:8px">
          <input class="m-ob-input m-ob-input--email" type="email" placeholder="adresse@email.fr" style="flex:1;min-width:0;margin-bottom:0">
          <button class="m-ob-invite-remove" type="button" title="Supprimer"><i class="bi bi-trash"></i></button>
        </div>
        <select class="m-ob-select m-ob-invite-role-sel" style="margin-top:6px">
          <option value="">Choisir un rôle…</option>
          <option>Administrateur</option><option>Agent</option><option>Lecteur</option>
        </select>
        <div class="m-ob-role-perms-wrap"></div>
      </div>`
  }

  function renderInvite() {
    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-people"></i></div>
        <h2 class="m-ob-h2">Inviter des membres</h2>
        <p class="m-ob-sub">Ajoutez des collègues de votre exploitation. Salariés, chefs de culture, conseillers externes...</p>
      </div>
      <div class="m-ob-form" id="ob-invite-list">${inviteRowHtml()}</div>
      <button class="m-ob-add-member" id="ob-add-member" type="button"><i class="bi bi-plus-circle"></i> Ajouter un membre</button>
      <p style="font-size:12px;color:#636366;margin:10px 0 4px;line-height:1.4"><i class="bi bi-info-circle" style="margin-right:4px"></i>Chaque membre implique une licence payante additionnelle.</p>
      <button class="m-ob-cta" id="ob-send-invites">Continuer</button>
      <button class="m-ob-link" id="ob-skip-invite" type="button">Passer cette étape</button>
    `)
  }

  function renderPlan() {
    const isAdherent = role === 'new-adherent'
    const net = INVITED_NETWORK

    if (isAdherent) {
      const p = SUBSCRIPTION_PLANS.find(pl => pl.id === 'expert')
      const features = p.features.map(f =>
        `<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${p.color}"></i> ${f}</li>`
      ).join('')
      return wrap(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-gift"></i></div>
          <h2 class="m-ob-h2">Votre abonnement</h2>
          <p class="m-ob-sub">Le réseau <strong>${net.name}</strong> vous a invité à profiter de l'abonnement <strong style="color:${p.color}">Weenat Expert</strong>. Découvrez ce qu'il comprend.</p>
        </div>
        <div class="m-ob-sub-card m-ob-sub-card--on" style="--plan-color:${p.color}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${p.color}">${p.name}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${p.color};background:${p.color}">
              <i class="bi bi-check" style="color:#fff;font-size:13px"></i>
            </div>
          </div>
          <ul class="m-ob-feat-list" style="display:block;margin-top:10px">${features}</ul>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      `)
    }

    const cards = SUBSCRIPTION_PLANS.map(p => {
      const selected = p.id === selectedPlan
      const features = p.features.map(f =>
        `<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${p.color}"></i> ${f}</li>`
      ).join('')
      return `
        <div class="m-ob-sub-card${selected ? ' m-ob-sub-card--on' : ''}" data-plan="${p.id}" style="${selected ? `--plan-color:${p.color}` : ''}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${p.color}">${p.name}${p.id === 'expert' ? ' <span style="font-size:11px;font-weight:400;opacity:.8">(irrigation)</span>' : ''}</div>
              <div class="m-ob-sub-price">${p.price}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${selected ? p.color : '#c7c7cc'};background:${selected ? p.color : 'transparent'}">
              ${selected ? '<i class="bi bi-check" style="color:#fff;font-size:13px"></i>' : ''}
            </div>
          </div>
          <button class="m-ob-feat-toggle" data-plan="${p.id}" type="button">
            Ce qui est inclus <i class="bi bi-chevron-down"></i>
          </button>
          <ul class="m-ob-feat-list" id="feat-${p.id}" style="display:none">${features}</ul>
        </div>`
    }).join('')
    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-grid-1x2"></i></div>
        <h2 class="m-ob-h2">Votre abonnement</h2>
        <p class="m-ob-sub">Choisissez le plan qui correspond à vos besoins.</p>
      </div>
      <div class="m-ob-sub-cards">${cards}</div>
      <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
    `)
  }

  function renderPayment() {
    const p = plan()
    const licenses = inviteCount + 1
    const monthlyTotal = licenses * p.priceNum
    const annualTotal = monthlyTotal * 12
    const fmt = n => n % 1 === 0 ? `${n}` : n.toFixed(1).replace('.', ',')
    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-credit-card"></i></div>
        <h2 class="m-ob-h2">Paiement</h2>
      </div>
      <div class="m-ob-pay-summary">
        <div class="m-ob-pay-line">
          <span style="color:${p.color};font-weight:700">${p.name}</span>
          <span class="m-ob-pay-price" style="color:${p.color}">${fmt(p.priceNum)} €<span class="m-ob-pay-period">/licence/mois</span></span>
        </div>
        ${licenses > 1 ? `
        <div class="m-ob-pay-line" style="margin-top:6px">
          <span style="font-size:13px;color:#636366">${licenses} licences (${inviteCount} invité${inviteCount > 1 ? 's' : ''} + vous)</span>
          <span style="font-size:15px;font-weight:700;color:${p.color}">${fmt(monthlyTotal)} €/mois</span>
        </div>
        <button class="m-ob-link" id="ob-remove-invites" type="button" style="font-size:12px;color:#636366;padding:2px 0;text-align:left">Retirer les invités et ne prendre qu'une licence</button>` : ''}
        <div class="m-ob-pay-divider"></div>
        <div class="m-ob-pay-line">
          <span style="font-weight:600">Total annuel</span>
          <span style="font-size:17px;font-weight:700;color:${p.color}">${fmt(annualTotal)} €/an</span>
        </div>
        <div class="m-ob-pay-line--sub">
          <p>Engagement d'un an · Renouvellement automatique</p><br>
          <p>Vous recevrez un email un mois avant la date de renouvellement de votre abonnement.</p>
        </div>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Numéro de carte</label>
          <div class="m-ob-card-wrap">
            <input class="m-ob-input m-ob-input--card" type="text" value="4242 4242 4242 4242" maxlength="19" inputmode="numeric">
            <span class="m-ob-card-brand"><i class="bi bi-credit-card-2-front"></i></span>
          </div>
        </div>
        <div class="m-ob-row2">
          <div class="m-ob-field">
            <label class="m-ob-label">Date d'expiration</label>
            <input class="m-ob-input" type="text" value="08 / 28" maxlength="7" inputmode="numeric" placeholder="MM / AA">
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">CVV</label>
            <input class="m-ob-input" type="text" value="•••" maxlength="4" inputmode="numeric" placeholder="CVV">
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Nom sur la carte</label>
          <input class="m-ob-input" type="text" value="Pierre Jourdain">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next" style="background:${p.color}"><i class="bi bi-lock-fill" style="font-size:13px"></i> Payer ${fmt(annualTotal)} €</button>
      <p class="m-ob-legal" style="margin-top:10px"><i class="bi bi-shield-check"></i> Paiement sécurisé SSL · Données chiffrées</p>
    `)
  }

  function renderVolumeChoice() {
    return wrap(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-droplet-half"></i></div>
        <h2 class="m-ob-h2">Volume autorisé</h2>
        <p class="m-ob-sub">Votre abonnement Expert inclut le suivi du volume d'eau prélevé. Êtes-vous soumis à un volume annuel ?</p>
      </div>
      <div class="m-ob-plan-cards">
        <div class="m-ob-plan-card" data-volume="oui">
          <div class="m-ob-plan-name">Oui, j'ai un volume autorisé</div>
          <div class="m-ob-plan-desc">Je veux suivre mes irrigations et me limiter à ce volume.</div>
          <div id="ob-volume-field" style="display:none;margin-top:12px">
            <label class="m-ob-label" style="font-size:12px">Volume maximal (m³/an)</label>
            <input class="m-ob-input m-ob-input--number" id="ob-volume-input" type="text" inputmode="numeric" placeholder="Ex : 150 000" style="margin-top:4px">
          </div>
        </div>
        <div class="m-ob-plan-card" data-volume="non">
          <div class="m-ob-plan-name">Non</div>
          <div class="m-ob-plan-desc">Je n'ai pas de restriction ou de volume limité.</div>
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
      <button class="m-ob-link" id="ob-next" type="button">Je ne sais pas encore</button>
    `)
  }

  function renderPaymentConfirmed() {
    const p = plan()
    return `
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          <div style="width:32px"></div>
          <span class="m-ob-step-label">Paiement</span>
          <div style="width:32px"></div>
        </div>
        <div class="m-ob-body" style="display:flex;flex-direction:column;gap:20px;padding:32px 24px">
          <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
            <div style="width:64px;height:64px;border-radius:50%;background:#e8fff0;display:flex;align-items:center;justify-content:center">
              <i class="bi bi-check-circle-fill" style="font-size:32px;color:#30d158"></i>
            </div>
            <h2 class="m-ob-h2" style="text-align:center">Paiement confirmé</h2>
            <p class="m-ob-sub" style="text-align:center">Un reçu de votre paiement vous a été envoyé par email à <strong>${DEFAULTS.email}</strong>.</p>
          </div>
          <div class="m-ob-form" style="margin-top:0">
            <div class="m-ob-field">
              <label class="m-ob-label">Copie des factures (facultatif)</label>
              <p style="font-size:12px;color:#636366;margin:0 0 8px;line-height:1.4">Ajoutez une adresse email pour envoyer ce reçu et des copies des factures à un tiers (comptable, achats, finances…)</p>
              <input class="m-ob-input" type="email" placeholder="Adresse email du destinataire">
            </div>
          </div>
          <button class="m-ob-cta" id="ob-next">Continuer</button>
        </div>
      </div>`
  }

  function renderCreating() {
    const isMember = role === 'new-member-admin' || role === 'new-member-agent' || role === 'new-member-reader'
    return `
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-spinner"><div class="m-ob-spinner-ring"></div></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Création de votre espace…</h2>
        <p class="m-ob-sub">${isMember ? 'Nous configurons votre accès et créons votre exploitation par défaut.' : 'Nous configurons votre exploitation.'}</p>
      </div>`
  }

  function renderDone() {
    const isMember = role === 'new-member-admin' || role === 'new-member-agent' || role === 'new-member-reader'
    const subtitle = isMember
      ? `Votre compte a été créé. Votre exploitation par défaut <strong>Exploitation ${DEFAULTS.nom}</strong> est prête.`
      : 'Une parcelle et une station météo virtuelle ont été créées à l\'adresse de votre exploitation. Vous pouvez les modifier ou les supprimer.'
    return `
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Votre espace est prêt !</h2>
        <p class="m-ob-sub">${subtitle}</p>
        <button class="m-ob-cta" id="ob-finish" style="margin-top:32px">Accéder à mon exploitation</button>
      </div>`
  }

  // ─── Parcel creation steps ─────────────────────────────────────────────────

  function renderParcelMap() {
    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-map-fill"></i></div>
        <h2 class="m-ob-h2">Position de la parcelle</h2>
      </div>
      <div id="ob-parcel-map" style="width:100%;height:220px;border-radius:12px;overflow:hidden;margin-bottom:12px"></div>
      <div style="background:#f5f5f7;border-radius:10px;padding:12px 14px;margin-bottom:16px;font-size:13px;color:#3a3a3c;line-height:1.5">
        <i class="bi bi-crosshair2" style="color:#0172A4;margin-right:6px"></i>
        Positionnez le centre de votre parcelle.<br><br>
        <span style="color:#636366">Vous pourrez tracer son contour sur la version web de l'application.</span>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)
  }

  function renderParcelSource() {
    const isEssential = selectedPlan === 'essential'
    if (isEssential) { next(); return '' }

    // Pick one sensor per key model so the user can test EC/CHP/CAPA conflict
    const LINK_MODELS = ['P+', 'CHP-15/30', 'CAPA-30-3', 'EC']
    const linkSensors = LINK_MODELS.map(m => ALL_SENSORS.find(s => s.orgId === 1 && s.model === m)).filter(Boolean)

    const options = [
      { id: 'link',  icon: 'bi-link-45deg', title: 'Lier un capteur déjà enregistré', desc: 'Associez un ou plusieurs capteurs existants à cette parcelle.' },
      { id: 'add',   icon: 'bi-broadcast',  title: "Ajouter un capteur à l'exploitation", desc: 'Flashez son code-barres ou saisissez son numéro de série.' },
      { id: 'smv',   icon: 'bi-cloud-sun',  title: 'Ajouter une station météo virtuelle', desc: 'Accédez aux données météo de votre zone sans capteur physique.' },
    ]

    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${options.map(o => `
          <div class="m-ob-plan-card${parcelSource === o.id ? ' m-ob-plan-card--on' : ''}" data-psource="${o.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${o.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${o.title}</div>
                <div class="m-ob-plan-desc">${o.desc}</div>
              </div>
            </div>
          </div>`).join('')}
      </div>

      <div id="ob-link-sensors" style="display:${parcelSource === 'link' ? 'block' : 'none'}">
        <div style="font-size:13px;font-weight:600;margin-bottom:8px;color:#3a3a3c">Capteurs disponibles</div>
        <div id="ob-sensor-conflict" style="display:none;gap:8px;align-items:flex-start;padding:10px 12px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;margin-bottom:10px">
          <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;flex-shrink:0;margin-top:1px"></i>
          <span id="ob-sensor-conflict-msg" style="font-size:12px;color:#7a5a00;line-height:1.4"></span>
        </div>
        ${linkSensors.map(s => `
          <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:.5px solid rgba(0,0,0,.08);cursor:pointer">
            <input type="checkbox" ${parcelLinkedSensorIds.includes(s.id) ? 'checked' : ''} data-sensor-id="${s.id}" style="width:18px;height:18px;flex-shrink:0">
            <div>
              <div style="font-size:14px;font-weight:600;color:#1c1c1e">${MODEL_DISPLAY_NAMES[s.model] || s.model}</div>
              <div style="font-size:12px;color:#636366;margin-top:1px">${s.model} · ${s.serial}</div>
            </div>
          </label>`).join('')}
      </div>

      <div id="ob-add-sensor-form" style="display:${parcelSource === 'add' ? 'block' : 'none'}">
        <div class="m-ob-form" style="margin-top:0">
          <div class="m-ob-field">
            <label class="m-ob-label">Numéro de série</label>
            <div style="display:flex;gap:8px">
              <input class="m-ob-input" type="text" placeholder="Ex : W-123456" style="flex:1">
              <button type="button" style="background:#0172A4;color:#fff;border:none;border-radius:8px;padding:0 12px;font-size:20px;cursor:pointer"><i class="bi bi-qr-code-scan"></i></button>
            </div>
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">Depuis quand ce capteur a-t-il été installé ?</label>
            <input class="m-ob-input" type="date" value="${new Date().toISOString().split('T')[0]}">
          </div>
        </div>
      </div>

      <button class="m-ob-cta" id="ob-next" style="margin-top:8px">Continuer</button>
      <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
    `)
  }

  function renderParcelConfig() {
    const irrigationModels = new Set(['CHP-15/30', 'CHP-30/60', 'CHP-60/90', 'CAPA-30-3', 'CAPA-60-6', 'EC'])
    const ecModels = new Set(['EC'])
    const linkedSensors = ALL_SENSORS.filter(s => parcelLinkedSensorIds.includes(s.id))
    const hasIrrigSensor = linkedSensors.some(s => irrigationModels.has(s.model))
    const hasEC = linkedSensors.some(s => ecModels.has(s.model))

    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${parcelName}">
        </div>
        ${hasIrrigSensor ? `
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${SOIL_TYPES.map(t => `<option>${t}</option>`).join('')}
          </select>
        </div>
        ${hasEC ? `
        <div class="m-ob-field">
          <label class="m-ob-label">Substrat</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            <option>Laine de roche</option><option>Fibre de coco</option><option>Perlite</option><option>Terreau</option><option>Sol natif</option>
          </select>
        </div>` : ''}
        ` : `
        <div class="m-ob-field">
          <label class="m-ob-label">Culture</label>
          <input class="m-ob-input" type="text" placeholder="Ex : Blé tendre, Maïs, Vigne…">
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Environnement</label>
          <select class="m-ob-input m-ob-input--select">
            <option selected>Plein champ</option>
            <option>Serre</option><option>Tunnel</option><option>Verger</option><option>Vigne</option>
          </select>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Type d'irrigation</label>
          <select class="m-ob-input m-ob-input--select">
            ${IRRIG_TYPES.map(t => `<option${t === 'Non irrigué' ? ' selected' : ''}>${t}</option>`).join('')}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)
  }

  function renderParcelDone() {
    const isEssential = selectedPlan === 'essential'
    return `
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub">
          <strong>${parcelName}</strong> a été créée avec succès.
          ${isEssential ? '<br>Une station météo virtuelle a été ajoutée au centre de la parcelle.' : ''}
        </p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Accéder au tableau de bord</button>
      </div>`
  }

  const RENDERERS = {
    signup: renderSignup, verify: renderVerify, emailVerified: renderEmailVerified, orgName: renderOrgName,
    geoloc: renderGeoloc, orgInfo: renderOrgInfo,
    networkChoice: renderNetworkChoice, networkPick: renderNetworkPick, networkInfo: renderNetworkInfo,
    invite: renderInvite, plan: renderPlan,
    payment: renderPayment, paymentConfirmed: renderPaymentConfirmed, volumeChoice: renderVolumeChoice,
    creating: renderCreating, done: renderDone,
    parcelMap: renderParcelMap, parcelSource: renderParcelSource, parcelConfig: renderParcelConfig, parcelDone: renderParcelDone,
  }

  function paint() {
    const renderer = RENDERERS[currentId()]
    if (!renderer) return
    const html = renderer()
    if (html) overlay.innerHTML = html
    bind()
  }

  function saveInviteCount() {
    const rows = overlay.querySelectorAll('#ob-invite-list .m-ob-input--email')
    inviteCount = [...rows].filter(i => i.value.trim()).length
  }

  function initParcelMap() {
    const L = window.L; if (!L) return
    setTimeout(() => {
      const el = overlay.querySelector('#ob-parcel-map')
      if (!el || el._leaflet_id) return
      // ~1km zoom ≈ zoom 15
      parcelMapInst = L.map(el, { zoomControl: true, attributionControl: false }).setView([parcelLat, parcelLng], 15)
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19 }).addTo(parcelMapInst)
      // Point bleu = exploitation
      L.circleMarker([parcelLat, parcelLng], { radius: 8, color: '#fff', weight: 2, fillColor: '#0172A4', fillOpacity: 1 }).addTo(parcelMapInst)
      // Marqueur rouge 50m au Nord (~0.00045°)
      const redLat = parcelLat + 0.00045
      parcelMarker = L.marker([redLat, parcelLng], {
        icon: L.divIcon({
          className: '',
          html: '<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',
          iconSize: [0, 0], iconAnchor: [0, 0],
        }),
        draggable: true,
      }).addTo(parcelMapInst)
      parcelMarker.on('dragend', () => {
        const pos = parcelMarker.getLatLng()
        parcelLat = pos.lat; parcelLng = pos.lng
      })
      parcelMapInst.invalidateSize()
    }, 50)
  }

  function bind() {
    overlay.querySelector('#ob-back')?.addEventListener('click', back)
    overlay.querySelectorAll('#ob-next').forEach(btn => btn.addEventListener('click', next))

    // Password eye toggle
    overlay.querySelector('#ob-pw-eye')?.addEventListener('click', () => {
      pwVisible = !pwVisible
      const inp = overlay.querySelector('#ob-pw')
      if (inp) inp.type = pwVisible ? 'text' : 'password'
      const icon = overlay.querySelector('#ob-pw-eye i')
      if (icon) icon.className = pwVisible ? 'bi bi-eye' : 'bi bi-eye-slash'
    })

    // Plan selection
    overlay.querySelectorAll('.m-ob-sub-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.m-ob-feat-toggle')) return
        selectedPlan = card.dataset.plan
        paint()
      })
    })

    // Feature collapse
    overlay.querySelectorAll('.m-ob-feat-toggle').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const list = overlay.querySelector(`#feat-${btn.dataset.plan}`)
        const icon = btn.querySelector('.bi')
        if (!list) return
        const open = list.style.display !== 'none'
        list.style.display = open ? 'none' : 'block'
        icon.className = `bi bi-chevron-${open ? 'down' : 'up'}`
      })
    })

    // Volume choice cards (merged with field toggle below)

    // Network join cards
    overlay.querySelectorAll('[data-join]').forEach(card => {
      card.addEventListener('click', () => {
        joinNetwork = card.dataset.join === 'oui'
        overlay.querySelectorAll('[data-join]').forEach(c => c.classList.toggle('m-ob-plan-card--on', c === card))
      })
    })

    // Network pick rows
    overlay.querySelectorAll('[data-net]').forEach(row => {
      row.addEventListener('click', () => {
        overlay.querySelectorAll('[data-net]').forEach(r => {
          const isMe = r === row
          r.classList.toggle('m-ob-net-row--on', isMe)
          r.querySelector('.bi').className = `bi bi-${isMe ? 'check-circle-fill' : 'circle'}`
        })
      })
    })

    // Géolocalisation : révéler l'adresse
    const revealAddr = () => {
      overlay.querySelector('#ob-geoloc-btns')?.remove()
      const addr = overlay.querySelector('#ob-geoloc-addr')
      if (addr) addr.style.display = ''
      const L = window.L
      if (L) setTimeout(() => {
        const el = overlay.querySelector('#ob-addr-map')
        if (!el || el._leaflet_id) return
        const map = L.map(el, {
          zoomControl: true, attributionControl: false,
          dragging: false, scrollWheelZoom: false,
          doubleClickZoom: false, boxZoom: false, keyboard: false,
        }).setView([46.3021, 3.2938], 13)
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18 }).addTo(map)
        L.marker([46.3021, 3.2938]).addTo(map)
      }, 50)
    }
    overlay.querySelector('#ob-geoloc-allow')?.addEventListener('click', revealAddr)
    overlay.querySelector('#ob-geoloc-manual')?.addEventListener('click', revealAddr)

    // Pills métiers
    overlay.querySelectorAll('.m-ob-pill').forEach(btn => {
      btn.addEventListener('click', () => btn.classList.toggle('m-ob-pill--on'))
    })

    // Ajouter un membre
    overlay.querySelector('#ob-add-member')?.addEventListener('click', () => {
      const list = overlay.querySelector('#ob-invite-list')
      const div = document.createElement('div')
      div.innerHTML = inviteRowHtml()
      list.appendChild(div.firstElementChild)
    })

    // Supprimer un membre
    overlay.querySelector('#ob-invite-list')?.addEventListener('click', e => {
      const btn = e.target.closest('.m-ob-invite-remove')
      if (!btn) return
      const block = btn.closest('.m-ob-invite-block')
      if (block) block.remove()
    })

    // Permissions inline au changement de rôle
    overlay.querySelector('#ob-invite-list')?.addEventListener('change', e => {
      const sel = e.target.closest('.m-ob-invite-role-sel')
      if (!sel) return
      const wrapEl = sel.closest('.m-ob-invite-block')?.querySelector('.m-ob-role-perms-wrap')
      if (wrapEl) wrapEl.innerHTML = rolePermsHtml(sel.value)
    })

    // Retirer les invités depuis l'étape paiement
    overlay.querySelector('#ob-remove-invites')?.addEventListener('click', () => { inviteCount = 0; paint() })

    // Invites → save count then go to plan
    overlay.querySelector('#ob-send-invites')?.addEventListener('click', () => { saveInviteCount(); next() })
    overlay.querySelector('#ob-skip-invite')?.addEventListener('click', () => { inviteCount = 0; next() })

    // Parcel source selection
    overlay.querySelectorAll('[data-psource]').forEach(card => {
      card.addEventListener('click', () => {
        parcelSource = card.dataset.psource
        overlay.querySelectorAll('[data-psource]').forEach(c => c.classList.toggle('m-ob-plan-card--on', c === card))
        overlay.querySelector('#ob-link-sensors').style.display = parcelSource === 'link' ? 'block' : 'none'
        overlay.querySelector('#ob-add-sensor-form').style.display = parcelSource === 'add' ? 'block' : 'none'
      })
    })

    // Linked sensor checkboxes + conflict detection
    overlay.querySelectorAll('[data-sensor-id]').forEach(cb => {
      cb.addEventListener('change', () => {
        const id = parseInt(cb.dataset.sensorId)
        if (cb.checked) {
          if (!parcelLinkedSensorIds.includes(id)) parcelLinkedSensorIds.push(id)
        } else {
          parcelLinkedSensorIds = parcelLinkedSensorIds.filter(x => x !== id)
        }
        // Conflict detection
        const selected = ALL_SENSORS.filter(s => parcelLinkedSensorIds.includes(s.id))
        const nonTensio = selected.filter(s => !OB_TENSIO_MODELS.has(s.model))
        const metricCount = {}
        nonTensio.forEach(s => (OB_SENSOR_METRICS[s.model] || []).forEach(m => { metricCount[m] = (metricCount[m] || 0) + 1 }))
        const conflicts = Object.entries(metricCount).filter(([, n]) => n > 1).map(([m]) => m)
        const conflictDiv = overlay.querySelector('#ob-sensor-conflict')
        const conflictMsg = overlay.querySelector('#ob-sensor-conflict-msg')
        if (conflictDiv && conflictMsg) {
          if (conflicts.length > 0) {
            conflictMsg.textContent = `Plusieurs capteurs mesurent la même métrique (${conflicts.join(', ')}). Décochez l'un des capteurs redondants.`
            conflictDiv.style.display = 'flex'
          } else {
            conflictDiv.style.display = 'none'
          }
        }
      })
    })

    // Volume choice cards
    overlay.querySelectorAll('[data-volume]').forEach(card => {
      card.addEventListener('click', () => {
        hasVolumeLimit = card.dataset.volume === 'oui'
        overlay.querySelectorAll('[data-volume]').forEach(c => c.classList.toggle('m-ob-plan-card--on', c === card))
        const field = overlay.querySelector('#ob-volume-field')
        if (field) field.style.display = hasVolumeLimit ? 'block' : 'none'
      })
    })

    // Skip parcel source
    overlay.querySelector('#ob-skip-source')?.addEventListener('click', () => {
      parcelSource = 'smv'; next()
    })

    // Save parcel name on config step
    overlay.querySelector('#ob-parcel-name')?.addEventListener('input', e => { parcelName = e.target.value })

    // Init parcel map
    if (currentId() === 'parcelMap') initParcelMap()

    // Auto-advance depuis "creating"
    if (currentId() === 'creating') setTimeout(() => { stepIdx++; paint() }, 2200)

    // Fin
    overlay.querySelector('#ob-finish')?.addEventListener('click', () => {
      overlay.classList.add('m-ob-overlay--out')
      setTimeout(() => { overlay.remove(); onComplete() }, 400)
    })
    overlay.querySelector('#ob-see-parcel')?.addEventListener('click', () => {
      overlay.classList.add('m-ob-overlay--out')
      setTimeout(() => { overlay.remove(); onComplete() }, 400)
    })
  }

  paint()
}

const CULTURES_LIST = [
  'Ail', 'Betterave sucrière', 'Blé dur', 'Blé tendre', 'Brocoli', 'Carotte',
  'Cerisier', 'Chou-fleur', 'Colza', 'Courgette', 'Féverole', 'Haricot vert',
  'Laitue', 'Lin oléagineux', 'Luzerne', 'Maïs fourrage', 'Maïs grain',
  "Orge d'hiver", 'Orge de printemps', 'Oignon', 'Pêcher', 'Pois protéagineux',
  'Poireau', 'Poirier', 'Pomme de terre', 'Pommier', 'Prairie', 'Prunier',
  'Ray-grass', 'Soja', 'Tomate', 'Tournesol', 'Trèfle', 'Vigne',
]

function renderScannerScreen({ showBack = true, btnLabel = 'Ajouter', showSkip = false } = {}) {
  return `
    <div class="m-ob-screen" style="background:#1c1c1e;padding-bottom:24px">
      <div class="m-ob-topbar" style="background:transparent">
        ${showBack
          ? `<button class="m-ob-back" id="ob-back" style="color:#fff;background:rgba(255,255,255,.15)"><i class="bi bi-chevron-left"></i></button>`
          : `<div style="width:32px"></div>`}
        <span class="m-ob-step-label" style="color:#fff">Scanner le code barre</span>
        <button class="m-ob-back" id="ob-close" style="color:#fff;background:rgba(255,255,255,.15);margin-left:auto"><i class="bi bi-x-lg"></i></button>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;padding:0 16px;gap:16px;min-height:0">
        <div style="flex:1;background:#000;border-radius:20px;border:2.5px solid rgba(255,255,255,.85);position:relative;overflow:hidden;min-height:180px">
          <div style="position:absolute;top:18px;left:18px;width:30px;height:30px;border-top:3px solid #fff;border-left:3px solid #fff;border-radius:3px 0 0 0"></div>
          <div style="position:absolute;top:18px;right:18px;width:30px;height:30px;border-top:3px solid #fff;border-right:3px solid #fff;border-radius:0 3px 0 0"></div>
          <div style="position:absolute;bottom:18px;left:18px;width:30px;height:30px;border-bottom:3px solid #fff;border-left:3px solid #fff;border-radius:0 0 0 3px"></div>
          <div style="position:absolute;bottom:18px;right:18px;width:30px;height:30px;border-bottom:3px solid #fff;border-right:3px solid #fff;border-radius:0 0 3px 0"></div>
        </div>
        <div style="background:#fff;border-radius:20px;padding:16px 16px 4px;flex-shrink:0">
          <input class="m-ob-input" id="ob-sensor-serial" type="text" placeholder="Ou entrez le numéro de série du capteur" style="margin-bottom:12px">
          <button class="m-ob-cta" id="ob-next" style="margin:0 0 12px"><i class="bi bi-plus-lg"></i> ${btnLabel}</button>
          ${showSkip ? `<button class="m-ob-link" id="ob-skip-source" type="button" style="margin-bottom:8px">Passer cette étape</button>` : ''}
        </div>
      </div>
    </div>`
}

async function fetchCityName(lat, lng) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
    const d = await res.json()
    return d.address?.village || d.address?.town || d.address?.city || d.address?.municipality || ''
  } catch { return '' }
}

// ─── Standalone parcel creation wizard ────────────────────────────────────────
export function showParcelCreation(onComplete) {
  const screen = document.getElementById('phone-screen')

  let parcelLat     = 46.3021
  let parcelLng     = 3.2938
  let parcelMarker  = null
  let parcelMapInst = null
  let smvLat        = 46.3021 + 0.00045
  let smvLng        = 3.2938
  let smvMarker     = null
  let smvMapInst    = null
  let parcelSource  = 'smv'
  let parcelLinkedSensorIds = []
  let parcelName    = ''
  let stepIdx       = 0

  const STEPS = ['parcelMap', 'parcelSource', 'parcelData', 'parcelConfig', 'parcelDone']
  const LABELS_PC = { parcelMap: 'Parcelle', parcelSource: 'Source de données', parcelData: 'Données', parcelConfig: 'Paramétrage', parcelDone: 'Confirmation' }

  const overlay = document.createElement('div')
  overlay.id = 'parcel-creation-overlay'
  overlay.className = 'm-ob-overlay'
  screen.appendChild(overlay)

  function currentId() { return STEPS[stepIdx] }
  function next() { stepIdx++; paint() }
  function back() { stepIdx--; paint() }

  function wrap(body, canBack = true) {
    const id = currentId()
    const showBack = canBack && stepIdx > 0 && id !== 'parcelDone'
    const label = LABELS_PC[id] || ''
    const visSteps = STEPS.filter(s => s !== 'parcelDone')
    const visIdx = visSteps.indexOf(id)
    const pct = visIdx >= 0 ? Math.round((visIdx / visSteps.length) * 100) : 100
    const progressBar = id !== 'parcelDone' ? `<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${pct}%"></div></div>` : ''
    return `
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${showBack ? `<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>` : `<div style="width:32px"></div>`}
          <span class="m-ob-step-label">${label}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${progressBar}
        <div class="m-ob-body">${body}</div>
      </div>`
  }

  function renderParcelMap() {
    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-map-fill"></i></div>
        <h2 class="m-ob-h2">Position de la parcelle</h2>
      </div>
      <div id="ob-parcel-map" style="width:100%;height:220px;border-radius:12px;overflow:hidden;margin-bottom:12px"></div>
      <div style="background:#f5f5f7;border-radius:10px;padding:12px 14px;margin-bottom:16px;font-size:13px;color:#3a3a3c;line-height:1.5">
        <i class="bi bi-crosshair2" style="color:#0172A4;margin-right:6px"></i>
        Déplacez le marqueur ou cliquez sur la carte pour positionner le centre de votre parcelle.<br><br>
        <span style="color:#636366">Vous pourrez tracer son contour sur la version web de l'application.</span>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `, false)
  }

  function renderParcelSource() {
    const options = [
      { id: 'link', icon: 'bi-link-45deg', title: 'Lier un capteur déjà enregistré',    desc: 'Associez un ou plusieurs capteurs existants à cette parcelle.' },
      { id: 'add',  icon: 'bi-broadcast',  title: "Ajouter un capteur à l'exploitation", desc: 'Flashez son code-barres ou saisissez son numéro de série.' },
      { id: 'smv',  icon: 'bi-cloud-sun',  title: 'Ajouter une station météo virtuelle', desc: 'Accédez aux données météo de votre zone sans capteur physique.' },
    ]
    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${options.map(o => `
          <div class="m-ob-plan-card${parcelSource === o.id ? ' m-ob-plan-card--on' : ''}" data-psource="${o.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${o.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${o.title}</div>
                <div class="m-ob-plan-desc">${o.desc}</div>
              </div>
            </div>
          </div>`).join('')}
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
      <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
    `)
  }

  function renderParcelData() {
    if (parcelSource === 'smv') {
      return wrap(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-cloud-sun"></i></div>
          <h2 class="m-ob-h2">Station météo virtuelle</h2>
          <p class="m-ob-sub">Positionnez la station. Par défaut au centre de la parcelle.</p>
        </div>
        <div id="ob-smv-map" style="width:100%;height:220px;border-radius:12px;overflow:hidden;margin-bottom:12px"></div>
        <div style="background:#f5f5f7;border-radius:10px;padding:12px 14px;margin-bottom:16px;font-size:13px;color:#3a3a3c;line-height:1.5">
          <i class="bi bi-crosshair2" style="color:#0172A4;margin-right:6px"></i>
          Déplacez le marqueur ou cliquez sur la carte pour positionner la station.
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
      `)
    }
    if (parcelSource === 'link') {
      const sensors = ALL_SENSORS.slice(0, 6)
      return wrap(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-link-45deg"></i></div>
          <h2 class="m-ob-h2">Lier un capteur</h2>
          <p class="m-ob-sub">Sélectionnez les capteurs à lier à cette parcelle.</p>
        </div>
        <div style="background:#fff;border-radius:12px;overflow:hidden;border:.5px solid rgba(0,0,0,.1);margin-bottom:16px">
          ${sensors.map((s, i) => `
            <label style="display:flex;align-items:center;gap:12px;padding:12px 14px;${i < sensors.length - 1 ? 'border-bottom:.5px solid rgba(0,0,0,.08)' : ''};cursor:pointer">
              <input type="checkbox" ${parcelLinkedSensorIds.includes(s.id) ? 'checked' : ''} data-sensor-id="${s.id}" style="width:18px;height:18px;flex-shrink:0">
              <div>
                <div style="font-size:14px;font-weight:600">${s.model}</div>
                <div style="font-size:12px;color:#636366">${s.serial}</div>
              </div>
            </label>`).join('')}
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
        <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
      `)
    }
    // parcelSource === 'add'
    return renderScannerScreen({ showBack: true, btnLabel: 'Continuer', showSkip: true })
  }

  function renderParcelConfig() {
    const irrigationModels = new Set(['CHP-15/30', 'CHP-30/60', 'CHP-60/90', 'CAPA-30-3', 'CAPA-60-6', 'EC'])
    const ecModels = new Set(['EC'])
    const linkedSensors = ALL_SENSORS.filter(s => parcelLinkedSensorIds.includes(s.id))
    const hasIrrigSensor = linkedSensors.some(s => irrigationModels.has(s.model))
    const hasEC = linkedSensors.some(s => ecModels.has(s.model))
    const irrigOptions = IRRIG_TYPES.filter(t => t !== 'Non renseigné')

    if (!parcelName) {
      fetchCityName(parcelLat, parcelLng).then(name => {
        if (!name) return
        parcelName = name
        const inp = overlay.querySelector('#ob-parcel-name')
        if (inp && !inp._edited) inp.value = name
      })
    }

    return wrap(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${parcelName}" placeholder="Chargement…">
        </div>
        ${hasIrrigSensor ? `
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${SOIL_TYPES.map(t => `<option>${t}</option>`).join('')}
          </select>
        </div>
        ${hasEC ? `
        <div class="m-ob-field">
          <label class="m-ob-label">Substrat</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            <option>Laine de roche</option><option>Fibre de coco</option><option>Perlite</option><option>Terreau</option><option>Sol natif</option>
          </select>
        </div>` : ''}
        ` : `
        <div class="m-ob-field">
          <label class="m-ob-label">Culture</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="" disabled selected>Sélectionnez une culture</option>
            ${CULTURES_LIST.map(c => `<option>${c}</option>`).join('')}
          </select>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Environnement</label>
          <select class="m-ob-input m-ob-input--select">
            <option selected>Plein champ</option>
            <option>Serre</option>
          </select>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Type d'irrigation</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="" disabled selected>Sélectionnez un type d'irrigation</option>
            ${irrigOptions.map(t => `<option>${t}</option>`).join('')}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)
  }

  function renderParcelDone() {
    return `
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub"><strong>${parcelName || 'La parcelle'}</strong> a été créée avec succès.</p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`
  }

  function initParcelMap() {
    const L = window.L; if (!L) return
    setTimeout(() => {
      const el = overlay.querySelector('#ob-parcel-map')
      if (!el || el._leaflet_id) return
      parcelMapInst = L.map(el, { zoomControl: true, attributionControl: false }).setView([parcelLat, parcelLng], 15)
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19 }).addTo(parcelMapInst)
      L.circleMarker([parcelLat, parcelLng], { radius: 8, color: '#fff', weight: 2, fillColor: '#0172A4', fillOpacity: 1 }).addTo(parcelMapInst)
      const markerIcon = L.divIcon({
        className: '',
        html: '<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',
        iconSize: [0, 0], iconAnchor: [0, 0],
      })
      parcelMarker = L.marker([parcelLat + 0.00045, parcelLng], { icon: markerIcon, draggable: true }).addTo(parcelMapInst)
      parcelMarker.on('dragend', () => { const p = parcelMarker.getLatLng(); parcelLat = p.lat; parcelLng = p.lng })
      parcelMapInst.on('click', e => {
        parcelLat = e.latlng.lat; parcelLng = e.latlng.lng
        parcelMarker.setLatLng([parcelLat, parcelLng])
      })
      parcelMapInst.invalidateSize()
    }, 50)
  }

  function initSmvMap() {
    const L = window.L; if (!L) return
    smvLat = parcelLat + 0.00045; smvLng = parcelLng
    setTimeout(() => {
      const el = overlay.querySelector('#ob-smv-map')
      if (!el || el._leaflet_id) return
      smvMapInst = L.map(el, { zoomControl: true, attributionControl: false }).setView([parcelLat, parcelLng], 15)
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19 }).addTo(smvMapInst)
      L.circleMarker([parcelLat, parcelLng], { radius: 8, color: '#fff', weight: 2, fillColor: '#E05252', fillOpacity: 1 }).addTo(smvMapInst)
      const smvIcon = L.divIcon({
        className: '',
        html: '<div style="width:24px;height:36px;background:#0172A4;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',
        iconSize: [0, 0], iconAnchor: [0, 0],
      })
      smvMarker = L.marker([smvLat, smvLng], { icon: smvIcon, draggable: true }).addTo(smvMapInst)
      smvMarker.on('dragend', () => { const p = smvMarker.getLatLng(); smvLat = p.lat; smvLng = p.lng })
      smvMapInst.on('click', e => { smvLat = e.latlng.lat; smvLng = e.latlng.lng; smvMarker.setLatLng([smvLat, smvLng]) })
      smvMapInst.invalidateSize()
    }, 50)
  }

  const RENDERERS_PC = {
    parcelMap: renderParcelMap, parcelSource: renderParcelSource,
    parcelData: renderParcelData, parcelConfig: renderParcelConfig, parcelDone: renderParcelDone,
  }

  function paint() {
    const html = RENDERERS_PC[currentId()]?.()
    if (html) overlay.innerHTML = html
    bind()
  }

  function close() {
    overlay.classList.add('m-ob-overlay--out')
    setTimeout(() => { overlay.remove(); onComplete() }, 400)
  }

  function bind() {
    overlay.querySelector('#ob-back')?.addEventListener('click', back)
    overlay.querySelector('#ob-close')?.addEventListener('click', close)
    overlay.querySelectorAll('#ob-next').forEach(btn => btn.addEventListener('click', next))

    overlay.querySelectorAll('[data-psource]').forEach(card => {
      card.addEventListener('click', () => {
        parcelSource = card.dataset.psource
        overlay.querySelectorAll('[data-psource]').forEach(c => c.classList.toggle('m-ob-plan-card--on', c === card))
      })
    })

    overlay.querySelectorAll('[data-sensor-id]').forEach(cb => {
      cb.addEventListener('change', () => {
        const id = parseInt(cb.dataset.sensorId)
        if (cb.checked) { if (!parcelLinkedSensorIds.includes(id)) parcelLinkedSensorIds.push(id) }
        else parcelLinkedSensorIds = parcelLinkedSensorIds.filter(x => x !== id)
      })
    })

    overlay.querySelector('#ob-skip-source')?.addEventListener('click', () => { parcelSource = 'smv'; next() })

    const nameInp = overlay.querySelector('#ob-parcel-name')
    if (nameInp) nameInp.addEventListener('input', e => { e.target._edited = true; parcelName = e.target.value })

    if (currentId() === 'parcelMap') initParcelMap()
    if (currentId() === 'parcelData' && parcelSource === 'smv') initSmvMap()

    overlay.querySelector('#ob-see-parcel')?.addEventListener('click', close)
    overlay.querySelector('#ob-finish')?.addEventListener('click', close)
  }

  paint()
}

// ─── Standalone sensor creation wizard ────────────────────────────────────────
export function showSensorCreation(onComplete) {
  const screen = document.getElementById('phone-screen')
  let stepIdx = 0
  const STEPS = ['sensorAdd', 'sensorDone']

  const overlay = document.createElement('div')
  overlay.id = 'sensor-creation-overlay'
  overlay.className = 'm-ob-overlay'
  screen.appendChild(overlay)

  function currentId() { return STEPS[stepIdx] }
  function next() { stepIdx++; paint() }

  function wrap(body) {
    const id = currentId()
    const labels = { sensorAdd: 'Capteur', sensorDone: 'Confirmation' }
    return `
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          <div style="width:32px"></div>
          <span class="m-ob-step-label">${labels[id] || ''}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${id !== 'sensorDone' ? `<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:0%"></div></div>` : ''}
        <div class="m-ob-body">${body}</div>
      </div>`
  }

  function renderSensorAdd() {
    return renderScannerScreen({ showBack: false, btnLabel: 'Enregistrer le capteur', showSkip: false })
  }

  function renderSensorDone() {
    return `
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Capteur ajouté !</h2>
        <p class="m-ob-sub">Votre capteur a été enregistré avec succès.</p>
        <button class="m-ob-cta" id="ob-see-sensor" style="margin-top:32px"><i class="bi bi-broadcast"></i> Voir le capteur</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`
  }

  function close() {
    overlay.classList.add('m-ob-overlay--out')
    setTimeout(() => { overlay.remove(); onComplete() }, 400)
  }

  function bind() {
    overlay.querySelector('#ob-close')?.addEventListener('click', close)
    overlay.querySelector('#ob-next')?.addEventListener('click', next)
    overlay.querySelector('#ob-see-sensor')?.addEventListener('click', close)
    overlay.querySelector('#ob-finish')?.addEventListener('click', close)
  }

  function paint() {
    const renderers = { sensorAdd: renderSensorAdd, sensorDone: renderSensorDone }
    const html = renderers[currentId()]?.()
    if (html) overlay.innerHTML = html
    bind()
  }

  paint()
}
