import { plots } from '../data/plots.js';
import { orgs } from '../data/orgs.js';

class PlotsPage {
  constructor() {
    this.currentView = 'map';
    this.filteredPlots = [...plots];
    this.selectedMetric = 'pluie';
    this.filters = {
      culture: '',
      texture: '',
      etatHydrique: '',
      org: ''
    };

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadOrganizations();
    this.renderMap();
    this.updateFiltersDisplay();
  }

  setupEventListeners() {
    // View switcher
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.switchView(e.target.dataset.view);
      });
    });

    // Filters
    document.getElementById('metric-selector').addEventListener('change', (e) => {
      this.selectedMetric = e.target.value;
      this.renderMap();
    });

    document.getElementById('culture-filter').addEventListener('change', (e) => {
      this.filters.culture = e.target.value;
      this.applyFilters();
    });

    document.getElementById('texture-filter').addEventListener('change', (e) => {
      this.filters.texture = e.target.value;
      this.applyFilters();
    });

    document.getElementById('etat-hydrique-filter').addEventListener('change', (e) => {
      this.filters.etatHydrique = e.target.value;
      this.applyFilters();
    });

    document.getElementById('org-filter').addEventListener('change', (e) => {
      this.filters.org = e.target.value;
      this.applyFilters();
    });
  }

  switchView(view) {
    this.currentView = view;

    // Update view buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === view);
    });

    // Update views
    document.querySelectorAll('.view').forEach(viewEl => {
      viewEl.classList.toggle('active', viewEl.dataset.view === view);
    });

    // Render appropriate content
    switch (view) {
      case 'map':
        this.renderMap();
        break;
      case 'list':
        this.renderList();
        break;
      case 'admin':
        this.renderAdmin();
        break;
    }
  }

  applyFilters() {
    this.filteredPlots = plots.filter(plot => {
      if (this.filters.culture && plot.crop !== this.filters.culture) return false;
      if (this.filters.texture && plot.texture !== this.filters.texture) return false;
      if (this.filters.org && plot.orgId.toString() !== this.filters.org) return false;

      if (this.filters.etatHydrique) {
        const reserve = plot.reserveHydrique;
        switch (this.filters.etatHydrique) {
          case 'faible': if (reserve >= 50) return false; break;
          case 'moyen': if (reserve < 50 || reserve > 75) return false; break;
          case 'bon': if (reserve <= 75) return false; break;
        }
      }

      return true;
    });

    this.updateFiltersDisplay();
    this.renderCurrentView();
  }

  updateFiltersDisplay() {
    const activeFilters = document.getElementById('active-filters');
    const filterChips = [];

    if (this.filters.culture) {
      filterChips.push(this.createFilterChip('Culture: ' + this.filters.culture, () => {
        this.filters.culture = '';
        document.getElementById('culture-filter').value = '';
        this.applyFilters();
      }));
    }

    if (this.filters.texture) {
      filterChips.push(this.createFilterChip('Texture: ' + this.filters.texture, () => {
        this.filters.texture = '';
        document.getElementById('texture-filter').value = '';
        this.applyFilters();
      }));
    }

    if (this.filters.etatHydrique) {
      const labels = { faible: 'Faible (<50%)', moyen: 'Moyen (50-75%)', bon: 'Bon (>75%)' };
      filterChips.push(this.createFilterChip('État: ' + labels[this.filters.etatHydrique], () => {
        this.filters.etatHydrique = '';
        document.getElementById('etat-hydrique-filter').value = '';
        this.applyFilters();
      }));
    }

    if (this.filters.org) {
      const org = orgs.find(o => o.id.toString() === this.filters.org);
      if (org) {
        filterChips.push(this.createFilterChip('Org: ' + org.name, () => {
          this.filters.org = '';
          document.getElementById('org-filter').value = '';
          this.applyFilters();
        }));
      }
    }

    activeFilters.innerHTML = '';
    filterChips.forEach(chip => activeFilters.appendChild(chip));
  }

  createFilterChip(text, onRemove) {
    const chip = document.createElement('div');
    chip.className = 'filter-chip';
    chip.innerHTML = `${text} <span style="margin-left: 8px; cursor: pointer;">×</span>`;
    chip.querySelector('span').addEventListener('click', onRemove);
    return chip;
  }

  loadOrganizations() {
    const orgFilter = document.getElementById('org-filter');
    orgs.forEach(org => {
      const option = document.createElement('option');
      option.value = org.id;
      option.textContent = org.name;
      orgFilter.appendChild(option);
    });
  }

  renderCurrentView() {
    switch (this.currentView) {
      case 'map':
        this.renderMap();
        break;
      case 'list':
        this.renderList();
        break;
      case 'admin':
        this.renderAdmin();
        break;
    }
  }

  renderMap() {
    const mapContainer = document.getElementById('map-container');

    // Clear existing content except legend
    const legend = document.getElementById('legend');
    mapContainer.innerHTML = '';
    mapContainer.appendChild(legend);

    // Initialize map (simplified for prototype)
    const mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    mapDiv.style.width = '100%';
    mapDiv.style.height = '100%';
    mapContainer.appendChild(mapDiv);

    // Create a simple representation of plots on map
    this.filteredPlots.forEach(plot => {
      const plotMarker = document.createElement('div');
      plotMarker.className = 'plot-marker';
      plotMarker.style.position = 'absolute';
      plotMarker.style.left = `${(plot.lng + 180) / 360 * 100}%`;
      plotMarker.style.top = `${(90 - plot.lat) / 180 * 100}%`;
      plotMarker.style.width = '20px';
      plotMarker.style.height = '20px';
      plotMarker.style.backgroundColor = this.getMetricColor(plot);
      plotMarker.style.borderRadius = '50%';
      plotMarker.style.cursor = 'pointer';
      plotMarker.title = `${plot.name} - ${plot.crop}`;
      plotMarker.addEventListener('click', () => this.showPlotDetail(plot));
      mapDiv.appendChild(plotMarker);
    });

    this.renderLegend();
  }

  renderList() {
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';

    if (this.filteredPlots.length === 0) {
      listContainer.innerHTML = '<p>Aucune parcelle ne correspond aux filtres sélectionnés.</p>';
      return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Nom</th>
          <th>Culture</th>
          <th>Surface (ha)</th>
          <th>Réserve hydrique</th>
          <th>Texture</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${this.filteredPlots.map(plot => `
          <tr>
            <td>${plot.name}</td>
            <td>${plot.crop}</td>
            <td>${plot.area}</td>
            <td>
              <div style="display: flex; align-items: center; gap: 8px;">
                <div style="width: 100px; height: 10px; background: #e0e0e0; border-radius: 5px;">
                  <div style="width: ${plot.reserveHydrique}%; height: 100%; background: ${this.getMetricColor(plot)}; border-radius: 5px;"></div>
                </div>
                ${plot.reserveHydrique}%
              </div>
            </td>
            <td>${plot.texture}</td>
            <td>
              <button onclick="window.plotsPage.showPlotDetail(${plot.id})">Détails</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    `;

    listContainer.appendChild(table);
  }

  renderAdmin() {
    const adminContainer = document.getElementById('admin-container');

    // Stats cards
    const statsCards = document.getElementById('stats-cards');
    statsCards.innerHTML = `
      <div class="stat-card">
        <h3>Total parcelles</h3>
        <div class="value">${this.filteredPlots.length}</div>
      </div>
      <div class="stat-card">
        <h3>Surface totale</h3>
        <div class="value">${this.filteredPlots.reduce((sum, plot) => sum + plot.area, 0).toFixed(1)} ha</div>
      </div>
      <div class="stat-card">
        <h3>Réserve hydrique moyenne</h3>
        <div class="value">${(this.filteredPlots.reduce((sum, plot) => sum + plot.reserveHydrique, 0) / this.filteredPlots.length).toFixed(0)}%</div>
      </div>
    `;

    // Admin table
    const adminTable = document.getElementById('admin-table');
    adminTable.innerHTML = `
      <h3>Gestion des parcelles</h3>
      <button id="add-plot-btn" style="margin-bottom: 20px;">Ajouter une parcelle</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Culture</th>
            <th>Organisation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${this.filteredPlots.map(plot => {
            const org = orgs.find(o => o.id === plot.orgId);
            return `
              <tr>
                <td>${plot.id}</td>
                <td>${plot.name}</td>
                <td>${plot.crop}</td>
                <td>${org ? org.name : 'N/A'}</td>
                <td>
                  <button onclick="window.plotsPage.editPlot(${plot.id})">Modifier</button>
                  <button onclick="window.plotsPage.deletePlot(${plot.id})" style="background: #e74c3c; color: white;">Supprimer</button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;

    // Add event listeners for admin actions
    document.getElementById('add-plot-btn').addEventListener('click', () => this.addPlot());
  }

  getMetricColor(plot) {
    const value = plot.reserveHydrique;
    if (value < 30) return '#e74c3c';
    if (value < 60) return '#f39c12';
    if (value < 80) return '#f1c40f';
    return '#27ae60';
  }

  renderLegend() {
    const legend = document.getElementById('legend');
    legend.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; margin-bottom: 5px;">
          <div style="width: 20px; height: 20px; background: #27ae60; border-radius: 50%; margin-right: 10px;"></div>
          <span>Très bon (>80%)</span>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 5px;">
          <div style="width: 20px; height: 20px; background: #f1c40f; border-radius: 50%; margin-right: 10px;"></div>
          <span>Bon (60-80%)</span>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 5px;">
          <div style="width: 20px; height: 20px; background: #f39c12; border-radius: 50%; margin-right: 10px;"></div>
          <span>Moyen (30-60%)</span>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 5px;">
          <div style="width: 20px; height: 20px; background: #e74c3c; border-radius: 50%; margin-right: 10px;"></div>
          <span>Faible (<30%)</span>
        </div>
      </div>
    `;
  }

  showPlotDetail(plot) {
    // Navigate to parcel detail page
    window.location.href = `parcelle-detail.html?id=${plot.id}`;
  }

  addPlot() {
    alert('Fonctionnalité d\'ajout de parcelle à implémenter');
  }

  editPlot(id) {
    alert(`Fonctionnalité de modification de la parcelle ${id} à implémenter`);
  }

  deletePlot(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette parcelle ?')) {
      alert(`Parcelle ${id} supprimée`);
      // In a real app, this would update the data and re-render
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.plotsPage = new PlotsPage();
});