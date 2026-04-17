const menuData = {
  'admin-reseau': {
    exploitation: [
      { href: 'parcelles.html', icon: 'bi-geo-alt', text: 'Parcelles' },
      { href: 'capteurs.html', icon: 'bi-broadcast', text: 'Capteurs' },
      { href: 'previsions.html', icon: 'bi-cloud-sun', text: 'Prévisions' },
      { href: 'integrations.html', icon: 'bi-plug', text: 'Intégrations' },
      { href: 'membres.html', icon: 'bi-people', text: 'Membres' },
      { href: 'parametres.html', icon: 'bi-gear', text: 'Paramètres' }
    ],
    reseau: [
      { href: 'parcelles-reseau.html', icon: 'bi-geo-alt', text: 'Parcelles' },
      { href: 'capteurs-reseau.html', icon: 'bi-broadcast', text: 'Capteurs' },
      { href: 'adherents.html', icon: 'bi-person-plus', text: 'Adhérents' },
      { href: 'facturation.html', icon: 'bi-receipt', text: 'Facturation' },
      { href: 'parametres-reseau.html', icon: 'bi-gear', text: 'Paramètres' }
    ]
  },
  'adherent-reseau': {
    exploitation: [
      { href: 'parcelles.html', icon: 'bi-geo-alt', text: 'Parcelles' },
      { href: 'capteurs.html', icon: 'bi-broadcast', text: 'Capteurs' },
      { href: 'previsions.html', icon: 'bi-cloud-sun', text: 'Prévisions' },
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
          <button class="add-item-btn" data-action="export">
            <i class="bi bi-download"></i>
            <span>Export de données</span>
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

  // Action buttons (stub — log for prototype)
  modal.querySelectorAll('.add-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('[add]', btn.dataset.action);
      modal.remove();
    });
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
