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
      { href: 'parametres-reseau.html', icon: 'bi-gear', text: 'Paramètres' },
      { href: 'informations.html', icon: 'bi-info-circle', text: 'Informations' }
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
  { href: 'mon-compte.html', icon: 'bi-person', text: 'Mon compte' },
  { href: 'alertes.html', icon: 'bi-bell', text: 'Mes alertes' },
  { href: 'notifications.html', icon: 'bi-envelope', text: 'Mes notifications' },
  { href: 'aide.html', icon: 'bi-question-circle', text: 'Aide' }
];

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
  accountLinks.forEach(link => {
    const isActive = link.href.replace('.html', '') === currentPage;
    html += `<a href="${link.href}" ${isActive ? 'class="active"' : ''}><i class="bi ${link.icon}"></i> ${link.text}</a>`;
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

window.addEventListener('load', function() {
  const savedRole = localStorage.getItem('menuRole');
  const sidebar = document.getElementById('sidebar');
  
  if (savedRole && savedRole === 'adherent-reseau' && sidebar) {
    const currentPage = getCurrentPage();
    const navLinks = document.getElementById('nav-links');
    const newHTML = generateMenuContent('adherent-reseau', currentPage);
    navLinks.innerHTML = newHTML;
    sidebar.setAttribute('data-role', 'adherent-reseau');
  } else if (sidebar) {
    sidebar.setAttribute('data-role', 'admin-reseau');
  }
});
