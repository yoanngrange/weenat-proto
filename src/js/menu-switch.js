const menuData = {
  'admin-reseau': {
    exploitation: [
      { href: 'tableau-de-bord.html', icon: 'bi-grid-1x2', text: 'Tableau de bord' },
      { href: 'parcelles.html', icon: 'bi-geo-alt', text: 'Parcelles' },
      { href: 'capteurs.html', icon: 'bi-broadcast', text: 'Capteurs' },
      { href: 'previsions.html', icon: 'bi-cloud-sun', text: 'Prévisions' },
      { href: 'integrations.html', icon: 'bi-plug', text: 'Intégrations' },
      { href: 'membres.html', icon: 'bi-people', text: 'Membres' },
      { href: 'facturation.html', icon: 'bi-receipt', text: 'Facturation' },
      { href: 'parametres.html', icon: 'bi-gear', text: 'Paramètres' }
    ],
    reseau: [
      { href: 'parcelles-reseau.html', icon: 'bi-geo-alt', text: 'Parcelles' },
      { href: 'capteurs-reseau.html', icon: 'bi-broadcast', text: 'Capteurs' },
      { href: 'adherents.html', icon: 'bi-person-plus', text: 'Adhérents' },
      { href: 'parametres-reseau.html', icon: 'bi-info-circle', text: 'Informations' }
    ]
  },
  'adherent-reseau': {
    exploitation: [
      { href: 'tableau-de-bord.html', icon: 'bi-grid-1x2', text: 'Tableau de bord' },
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
  const page = path.split('/').pop().replace('.html', '') || 'index';
  return page === 'index' ? 'tableau-de-bord' : page;
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

  const ACTION_ROUTES = {
    'membre':   'membre-creer.html',
    'adherent': 'adherent-creer.html',
  };
  modal.querySelectorAll('.add-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const route = ACTION_ROUTES[btn.dataset.action];
      modal.remove();
      if (route) window.location.href = route;
    });
  });

  document.body.appendChild(modal);
}

const WEENAT_LOGO_SVG = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895Z" fill="url(#wlogo_grad)"/>
<path d="M12.4103 3.0918C11.7002 3.26979 11.0015 4.31558 11.0015 4.50059C11.0015 5.76068 13.4062 5.49654 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918Z" fill="#0172A4"/>
<defs>
<linearGradient id="wlogo_grad" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse">
<stop stop-color="#0172A4"/>
<stop offset="1" stop-color="#002635"/>
</linearGradient>
</defs>
</svg>`;

window.addEventListener('load', function () {
  const savedRole = localStorage.getItem('menuRole') || 'admin-reseau';
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    const currentPage = getCurrentPage();
    const navLinks = document.getElementById('nav-links');
    navLinks.innerHTML = generateMenuContent(savedRole, currentPage);
    sidebar.setAttribute('data-role', savedRole);

    // Injecter le vrai logo si la page a un placeholder
    const header = sidebar.querySelector('.sidebar-header');
    if (header) {
      const existingSvg = header.querySelector('svg');
      if (existingSvg && existingSvg.querySelector('rect[fill="#0172A4"]')) {
        existingSvg.outerHTML = WEENAT_LOGO_SVG;
      }
    }
  }

  const addBtn = document.getElementById('add-btn');
  if (addBtn) addBtn.addEventListener('click', openAddModal);
});
