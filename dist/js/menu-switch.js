// ─── ImageStore : IndexedDB + compression canvas ──────────────────────────────
const ImageStore = (() => {
  const DB = 'weenat-images', VER = 1, ST = 'images'
  let _db = null
  const openDB = () => _db ? Promise.resolve(_db) : new Promise((res, rej) => {
    const r = indexedDB.open(DB, VER)
    r.onupgradeneeded = e => e.target.result.createObjectStore(ST)
    r.onsuccess = e => { _db = e.target.result; res(_db) }
    r.onerror = e => rej(e.target.error)
  })
  const readFile = f => new Promise((res, rej) => {
    const r = new FileReader(); r.onload = e => res(e.target.result); r.onerror = rej; r.readAsDataURL(f)
  })
  const loadImg = src => new Promise((res, rej) => {
    const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src
  })
  const toBlob = (img, w, h, q) => new Promise(res => {
    const c = document.createElement('canvas'); c.width = w; c.height = h
    c.getContext('2d').drawImage(img, 0, 0, w, h); c.toBlob(res, 'image/webp', q)
  })
  const blobToURL = b => new Promise((res, rej) => {
    const r = new FileReader(); r.onload = e => res(e.target.result); r.onerror = rej; r.readAsDataURL(b)
  })
  async function process(file) {
    const THRESH = 5 << 20, MAX = 15 << 20
    if (file.size <= THRESH) return { dataURL: await readFile(file), originalSize: file.size, finalSize: file.size, compressed: false }
    const src = await readFile(file)
    const img = await loadImg(src)
    const W = img.naturalWidth, H = img.naturalHeight
    for (const q of [0.85, 0.75, 0.65, 0.55, 0.45, 0.35]) {
      const b = await toBlob(img, W, H, q)
      if (b.size <= MAX) return { dataURL: await blobToURL(b), originalSize: file.size, finalSize: b.size, compressed: true }
    }
    for (const s of [0.75, 0.5, 0.35]) {
      const b = await toBlob(img, Math.round(W * s), Math.round(H * s), 0.7)
      if (b.size <= MAX) return { dataURL: await blobToURL(b), originalSize: file.size, finalSize: b.size, compressed: true }
    }
    throw new Error('Image trop grande (> 15 Mo même après compression)')
  }
  async function store(id, dataURL) {
    const d = await openDB(); return new Promise((res, rej) => {
      const tx = d.transaction(ST, 'readwrite')
      tx.objectStore(ST).put(dataURL, id); tx.oncomplete = res; tx.onerror = e => rej(e.target.error)
    })
  }
  async function get(id) {
    const d = await openDB(); return new Promise((res, rej) => {
      const tx = d.transaction(ST, 'readonly')
      const rq = tx.objectStore(ST).get(id); rq.onsuccess = e => res(e.target.result); rq.onerror = e => rej(e.target.error)
    })
  }
  async function remove(ids) {
    if (!ids?.length) return; const d = await openDB(); return new Promise((res, rej) => {
      const tx = d.transaction(ST, 'readwrite')
      ids.forEach(id => tx.objectStore(ST).delete(id)); tx.oncomplete = res; tx.onerror = e => rej(e.target.error)
    })
  }
  return { process, store, get, remove }
})()
window.ImageStore = ImageStore

// ─── Journal image helpers ────────────────────────────────────────────────────
function openLightbox(src) {
  let lb = document.getElementById('weenat-lightbox')
  if (!lb) {
    lb = document.createElement('div'); lb.id = 'weenat-lightbox'; lb.className = 'img-lightbox'
    lb.innerHTML = '<button class="img-lightbox-close" aria-label="Fermer">×</button><img class="img-lightbox-img" alt="">'
    lb.querySelector('.img-lightbox-close').addEventListener('click', () => lb.remove())
    lb.addEventListener('click', e => { if (e.target === lb) lb.remove() })
    document.body.appendChild(lb)
  }
  lb.querySelector('.img-lightbox-img').src = src
}

function addThumbToPreview(previewsEl, dataURL, pendingImages) {
  pendingImages.push(dataURL)
  const wrap = document.createElement('div'); wrap.className = 'jrn-img-thumb-wrap'
  const img = document.createElement('img'); img.className = 'jrn-img-thumb'; img.src = dataURL; img.alt = ''
  img.addEventListener('click', () => openLightbox(dataURL))
  const rm = document.createElement('button'); rm.className = 'jrn-img-thumb-rm'; rm.type = 'button'; rm.textContent = '×'
  rm.addEventListener('click', () => { const i = pendingImages.indexOf(dataURL); if (i > -1) pendingImages.splice(i, 1); wrap.remove() })
  wrap.appendChild(img); wrap.appendChild(rm); previewsEl.appendChild(wrap)
}

function setupImgUpload(inputEl, addBtnEl, previewsEl, errEl, pendingImages) {
  addBtnEl.addEventListener('click', () => inputEl.click())
  inputEl.addEventListener('change', async () => {
    if (errEl) errEl.textContent = ''
    for (const file of inputEl.files) {
      if (!file.type.startsWith('image/')) continue
      const spinWrap = document.createElement('div'); spinWrap.className = 'jrn-img-spinner-wrap'
      const spin = document.createElement('div'); spin.className = 'jrn-img-spinner'
      spinWrap.appendChild(spin); previewsEl.appendChild(spinWrap)
      try {
        const { dataURL } = await ImageStore.process(file)
        spinWrap.remove(); addThumbToPreview(previewsEl, dataURL, pendingImages)
      } catch (err) {
        spinWrap.remove()
        if (errEl) errEl.textContent = err.message; else alert(err.message)
      }
    }
    inputEl.value = ''
  })
}

const menuData = {
  'admin-reseau': {
    exploitation: [
      { href: 'tableau-de-bord.html', icon: 'bi-grid-1x2', text: 'Tableau de bord' },
      { href: 'parcelles.html', icon: 'bi-geo-alt', text: 'Parcelles' },
      { href: 'capteurs.html', icon: 'bi-broadcast', text: 'Capteurs' },
      { href: 'previsions.html', icon: 'bi-cloud-sun', text: 'Prévisions' },
      { href: 'irrigation.html', icon: 'bi-droplet', text: 'Irrigation' },
      { href: 'integrations.html', icon: 'bi-plug', text: 'Intégrations' },
      { href: 'membres.html', icon: 'bi-people', text: 'Membres' },
      { href: 'facturation.html', icon: 'bi-receipt', text: 'Facturation' },
      { href: 'parametres.html', icon: 'bi-gear', text: 'Paramètres' }
    ],
    reseau: [
      { href: 'parcelles-reseau.html', icon: 'bi-geo-alt', text: 'Parcelles' },
      { href: 'capteurs-reseau.html', icon: 'bi-broadcast', text: 'Capteurs' },
      { href: 'adherents.html', icon: 'bi-person-plus', text: 'Adhérents' },
      { href: 'irrigation.html', icon: 'bi-droplet', text: 'Irrigation' },
      { href: 'parametres-reseau.html', icon: 'bi-info-circle', text: 'Informations' }
    ]
  },
  'adherent-reseau': {
    exploitation: [
      { href: 'tableau-de-bord.html', icon: 'bi-grid-1x2', text: 'Tableau de bord' },
      { href: 'parcelles.html', icon: 'bi-geo-alt', text: 'Parcelles' },
      { href: 'capteurs.html', icon: 'bi-broadcast', text: 'Capteurs' },
      { href: 'previsions.html', icon: 'bi-cloud-sun', text: 'Prévisions' },
      { href: 'irrigation.html', icon: 'bi-droplet', text: 'Irrigation' },
      { href: 'integrations.html', icon: 'bi-plug', text: 'Intégrations' },
      { href: 'membres.html', icon: 'bi-people', text: 'Membres' },
      { href: 'parametres.html', icon: 'bi-gear', text: 'Paramètres' }
    ],
    reseau: [
      { href: 'capteurs-reseau.html', icon: 'bi-broadcast', text: 'Capteurs' },
      { href: 'informations.html', icon: 'bi-info-circle', text: 'Informations' }
    ]
  }
};

const accountLinks = [
  { href: 'mon-compte.html', icon: 'bi-person', text: 'Mon compte', avatar: true },
  { href: 'alertes.html', icon: 'bi-bell', text: 'Mes alertes' },
  { href: 'notifications.html', icon: 'bi-envelope', text: 'Mes notifications' },
  { href: 'aide.html', icon: 'bi-question-circle', text: 'Aide' }
];

const ROLE_USERS = {
  'admin-reseau':    { initials: 'JD' },
  'adherent-reseau': { initials: 'MM' }
};

function getCurrentPage() {
  const path = window.location.pathname;
  return path.split('/').pop().replace('.html', '') || 'index';
}

function generateMenuContent(role, currentPage) {
  const structure = menuData[role];
  let html = '';

  html += '<div class="nav-section" data-section="exploitation">Mon exploitation</div>';
  html += '<div class="nav-group exploitation">';
  structure.exploitation.forEach(link => {
    const isActive = link.href.replace('.html', '') === currentPage;
    html += `<a href="${link.href}" ${isActive ? 'class="active"' : ''}><i class="bi ${link.icon}"></i> ${link.text}</a>`;
  });
  html += '</div>';

  html += '<div class="nav-section" data-section="reseau">Mon réseau</div>';
  html += '<div class="nav-group reseau">';
  structure.reseau.forEach(link => {
    const isActive = link.href.replace('.html', '') === currentPage;
    html += `<a href="${link.href}" ${isActive ? 'class="active"' : ''}><i class="bi ${link.icon}"></i> ${link.text}</a>`;
  });
  html += '</div>';

  html += '<div class="nav-group compte">';
  const avatarUrl = localStorage.getItem('avatarUrl');
  const user = ROLE_USERS[role] || ROLE_USERS['admin-reseau'];
  accountLinks.forEach(link => {
    const isActive = link.href.replace('.html', '') === currentPage;
    let iconHtml;
    if (link.avatar) {
      iconHtml = avatarUrl
        ? `<img class="nav-av-img" src="${avatarUrl}" alt="avatar">`
        : `<span class="nav-av">${user.initials}</span>`;
    } else {
      iconHtml = `<i class="bi ${link.icon}"></i>`;
    }
    html += `<a href="${link.href}" ${isActive ? 'class="active"' : ''}>${iconHtml} ${link.text}</a>`;
  });
  html += '</div>';

  html += '<div class="menu-switch"><button id="role-switch" class="role-switch-btn" onclick="switchMenuRole()"><small>Admin réseau ↔ Adhérent réseau</small></button></div>';
  return html;
}

function switchMenuRole() {
  const sidebar = document.getElementById('sidebar');
  const currentRole = sidebar.getAttribute('data-role');
  const newRole = currentRole === 'admin-reseau' ? 'adherent-reseau' : 'admin-reseau';
  const currentPage = getCurrentPage();

  const navLinks = document.getElementById('nav-links');
  const newHTML = generateMenuContent(newRole, currentPage);
  navLinks.innerHTML = newHTML;

  sidebar.setAttribute('data-role', newRole);
  localStorage.setItem('menuRole', newRole);
}

// ——— Add modal ———

function getCurrentRole() {
  const sidebar = document.getElementById('sidebar');
  return sidebar ? sidebar.getAttribute('data-role') || 'admin-reseau' : 'admin-reseau';
}

function openAddModal() {
  const role = getCurrentRole();
  const isAdmin = role === 'admin-reseau';

  const modal = document.createElement('div');
  modal.className = 'modal add-modal';
  modal.innerHTML = `
    <div class="add-modal-content">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>

      <div class="add-modal-section">
        <div class="add-modal-section-label">Mon exploitation</div>
        <div class="add-modal-grid">
          <button class="add-item-btn" data-action="parcelle">
            <i class="bi bi-geo-alt-fill"></i>
            <span>Parcelle</span>
          </button>
          <button class="add-item-btn" data-action="capteur">
            <i class="bi bi-broadcast"></i>
            <span>Capteur</span>
          </button>
          <button class="add-item-btn" data-action="station">
            <i class="bi bi-cloud-sun-fill"></i>
            <span>Station météo virtuelle</span>
          </button>
          <button class="add-item-btn" data-action="membre">
            <i class="bi bi-person-plus-fill"></i>
            <span>Membre</span>
          </button>
          <button class="add-item-btn" data-action="irrigation">
            <i class="bi bi-droplet-fill"></i>
            <span>Irrigation</span>
            <span class="add-item-tip" data-tip="Une irrigation ponctuelle sur une ou plusieurs parcelles">i</span>
          </button>
          <button class="add-item-btn" data-action="strategie-irrigation">
            <i class="bi bi-arrow-repeat"></i>
            <span>Saison d'irrigation</span>
            <span class="add-item-tip" data-tip="Récurrence sur toute une saison, sur une ou plusieurs parcelles">i</span>
          </button>
          <button class="add-item-btn" data-action="note">
            <i class="bi bi-pencil-square"></i>
            <span>Note</span>
          </button>
          <button class="add-item-btn" data-action="traitement">
            <i class="bi bi-eyedropper"></i>
            <span>Traitement</span>
          </button>
        </div>
      </div>

      ${isAdmin ? `
      <div class="add-modal-section">
        <div class="add-modal-section-label">Mon réseau</div>
        <div class="add-modal-grid">
          <button class="add-item-btn" data-action="adherent">
            <i class="bi bi-building"></i>
            <span>Adhérent</span>
          </button>
        </div>
      </div>` : ''}

      <div class="add-modal-section">
        <div class="add-modal-section-label">Mon compte</div>
        <div class="add-modal-grid">
          <button class="add-item-btn" data-action="alerte">
            <i class="bi bi-bell-fill"></i>
            <span>Alerte</span>
          </button>
        </div>
      </div>
    </div>
  `;

  // Close on backdrop click
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.remove();
  });
  modal.querySelector('.add-modal-close').addEventListener('click', () => modal.remove());

  // Action buttons
  modal.querySelectorAll('.add-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      modal.remove();
      if (action === 'irrigation')         { window.WebIrrig?.openSaisie(); return; }
      if (action === 'strategie-irrigation'){ window.WebIrrig?.openSaison(); return; }
if (action === 'note' || action === 'traitement') { openJournalModal(action); return; }
      console.log('[add]', action);
    });
  });

  document.body.appendChild(modal);
}

function openJournalModal(type) {
  const isTraitement = type === 'traitement';
  const today = new Date().toISOString().slice(0, 10);

  const allPlots = (window.__weenatPlots || [])
    .filter(p => p.orgId === 1)
    .sort((a, b) => a.name.localeCompare(b.name, 'fr'));

  const parcelOptions = allPlots.length
    ? allPlots.map(p => `<option value="${p.id}">${p.name}</option>`).join('')
    : '<option value="">—</option>';

  const modal = document.createElement('div');
  modal.className = 'modal add-modal';
  modal.innerHTML = `
    <div class="add-modal-content" style="max-width:480px">
      <div class="add-modal-header">
        <span class="add-modal-title">${isTraitement ? 'Ajouter un traitement' : 'Ajouter une note'}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Parcelle</label>
          <select id="jrn-g-parcel" class="journal-form-input">${parcelOptions}</select>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="jrn-g-date" class="journal-form-input" value="${today}">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">${isTraitement ? 'Observations' : 'Texte'}</label>
          <textarea id="jrn-g-texte" class="journal-form-textarea" placeholder="${isTraitement ? 'Conditions météo, observations…' : 'Votre note…'}"></textarea>
        </div>
        ${isTraitement ? `
        <div class="journal-form-grid">
          <div class="journal-form-row">
            <label class="journal-form-label">Produit</label>
            <input type="text" id="jrn-g-produit" class="journal-form-input" placeholder="Ex : Bordeaux mixture">
          </div>
          <div class="journal-form-row">
            <label class="journal-form-label">Dose</label>
            <input type="text" id="jrn-g-dose" class="journal-form-input" placeholder="Ex : 2 kg/ha">
          </div>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Cible (maladie / ravageur)</label>
          <input type="text" id="jrn-g-cible" class="journal-form-input" placeholder="Ex : Mildiou">
        </div>` : ''}
        <div class="journal-form-row">
          <label class="journal-form-label">Photos</label>
          <div class="jrn-img-zone">
            <div class="jrn-img-previews" id="jrn-g-previews"></div>
            <button type="button" class="jrn-img-add-btn" id="jrn-g-img-btn">
              <i class="bi bi-camera"></i> Ajouter une photo
            </button>
            <input type="file" id="jrn-g-img-input" accept="image/jpeg,image/png,image/webp,image/avif,image/bmp" multiple style="display:none">
            <div class="jrn-img-error" id="jrn-g-img-err"></div>
          </div>
        </div>
        <button class="btn-primary btn-sm" id="jrn-g-save" style="width:100%;justify-content:center">
          Enregistrer
        </button>
      </div>
    </div>
  `;

  modal.querySelector('.add-modal-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

  const pendingImages = [];
  setupImgUpload(
    modal.querySelector('#jrn-g-img-input'),
    modal.querySelector('#jrn-g-img-btn'),
    modal.querySelector('#jrn-g-previews'),
    modal.querySelector('#jrn-g-img-err'),
    pendingImages
  );

  modal.querySelector('#jrn-g-save').addEventListener('click', async () => {
    const parcelId = parseInt(modal.querySelector('#jrn-g-parcel').value);
    if (!parcelId) return;
    const date  = modal.querySelector('#jrn-g-date').value || today;
    const texte = modal.querySelector('#jrn-g-texte').value.trim();
    const entry = { id: Date.now(), type, date, texte };
    if (isTraitement) {
      entry.produit = modal.querySelector('#jrn-g-produit').value.trim();
      entry.dose    = modal.querySelector('#jrn-g-dose').value.trim();
      entry.cible   = modal.querySelector('#jrn-g-cible').value.trim();
    }
    if (!texte && !entry.produit && !pendingImages.length) return;
    if (pendingImages.length) {
      entry.imageIds = [];
      for (const dataURL of pendingImages) {
        const imgId = `img_${entry.id}_${entry.imageIds.length}`;
        await ImageStore.store(imgId, dataURL);
        entry.imageIds.push(imgId);
      }
    }
    const key = 'weenat-journal-' + parcelId;
    let journal = [];
    try { journal = JSON.parse(localStorage.getItem(key) || '[]'); } catch (_) {}
    journal.unshift(entry);
    localStorage.setItem(key, JSON.stringify(journal));
    modal.remove();
  });

  document.body.appendChild(modal);
}

window.addEventListener('load', function () {
  const savedRole = localStorage.getItem('menuRole') || 'admin-reseau';
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    const currentPage = getCurrentPage();
    const navLinks = document.getElementById('nav-links');
    navLinks.innerHTML = generateMenuContent(savedRole, currentPage);
    sidebar.setAttribute('data-role', savedRole);
  }

  const addBtn = document.getElementById('add-btn');
  if (addBtn) addBtn.addEventListener('click', openAddModal);
});
