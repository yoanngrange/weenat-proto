import"./main-BfTBtz6r.js";import{o as f}from"./orgs-Cx4wNzLL.js";import{s as b}from"./sensors-CeUIY8ag.js";import{p as h}from"./plots-Dwluc99O.js";import{n as a}from"./network-YzWdS0n_.js";import{u as y}from"./breadcrumb-DEBQjfiD.js";const e={nom:a.nom,description:a.description,email:a.email,telephone:a.telephone,siteWeb:a.siteWeb,siege:{...a.siege},antennes:a.antennes.map(s=>({...s}))};document.addEventListener("DOMContentLoaded",()=>{y(),g(),l()});const w=["Grand Ouest","Météo Sud","Comptoirs du Nord","Réseaux Landais","Grande Beauce"];function g(){const s=document.getElementById("settings-form-col");s.innerHTML=`
    <h2>Configurer le réseau</h2>
    <form id="network-form" autocomplete="off">

      <fieldset>
        <legend>Partage de capteurs</legend>
        <p style="font-size:12px;color:var(--txt3);margin-bottom:12px">
          Définissez quels capteurs sont partagés entre les adhérents de votre réseau.
        </p>
        <div class="share-toggle-row">
          <div class="share-toggle-info">
            <span class="share-toggle-label">Capteurs météo</span>
            <span class="share-toggle-desc">Les capteurs météo sont partagés</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="share-meteo" checked>
            <span class="toggle-knob"></span>
          </label>
        </div>
        <div class="share-toggle-row">
          <div class="share-toggle-info">
            <span class="share-toggle-label">Capteurs d'irrigation</span>
            <span class="share-toggle-desc">Les capteurs d'irrigation (tensiomètres, sondes capacitives et sondes de fertirrigation) sont partagés</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="share-irrigation">
            <span class="toggle-knob"></span>
          </label>
        </div>
        <div class="share-toggle-row">
          <div class="share-toggle-info">
            <span class="share-toggle-label">Stations virtuelles</span>
            <span class="share-toggle-desc">Les stations météo virtuelles sont partagées</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="share-virtual">
            <span class="toggle-knob"></span>
          </label>
        </div>
        <!-- Méta-réseaux — désactivé pour l'instant
        <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--bdr)">
          <div style="font-size:12px;font-weight:600;color:var(--txt2);margin-bottom:8px">Méta-réseaux</div>
          <p style="font-size:12px;color:var(--txt3);margin-bottom:10px">
            Partager vos capteurs au sein de groupements de réseaux.
          </p>
          ${w.map(t=>`
            <div class="share-toggle-row share-toggle-row--compact">
              <span class="share-toggle-label" style="font-size:12px">${t}</span>
              <label class="toggle-switch toggle-switch--sm">
                <input type="checkbox">
                <span class="toggle-knob"></span>
              </label>
            </div>
          `).join("")}
        </div>
        -->
      </fieldset>

      <fieldset>
        <legend>Identité</legend>
        <div class="form-row">
          <label for="f-nom">Nom du réseau</label>
          <input id="f-nom" type="text" value="${n(e.nom)}" placeholder="Nom du réseau">
        </div>
        <div class="form-row">
          <label for="f-description">Description</label>
          <textarea id="f-description" rows="4" placeholder="Présentation du réseau…">${n(e.description)}</textarea>
        </div>
        <div class="form-row">
          <label>Logo</label>
          <div class="logo-upload-area">
            <span id="logo-placeholder" class="logo-initials">${p(e.nom)}</span>
            <button type="button" class="btn-secondary btn-sm" id="logo-upload-btn">
              <i class="bi bi-upload"></i> Importer un logo
            </button>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Contact</legend>
        <div class="form-row">
          <label for="f-email">Adresse email</label>
          <input id="f-email" type="email" value="${n(e.email)}" placeholder="contact@reseau.fr">
        </div>
        <div class="form-row">
          <label for="f-telephone">Téléphone</label>
          <input id="f-telephone" type="tel" value="${n(e.telephone)}" placeholder="02 00 00 00 00">
        </div>
        <div class="form-row">
          <label for="f-siteweb">Site web</label>
          <input id="f-siteweb" type="text" value="${n(e.siteWeb)}" placeholder="www.monreseau.fr">
        </div>
      </fieldset>

      <fieldset>
        <legend>Siège social</legend>
        <div class="form-row">
          <label for="f-siege-adresse">Adresse</label>
          <input id="f-siege-adresse" type="text" value="${n(e.siege.adresse)}" placeholder="Numéro et rue">
        </div>
        <div class="form-row form-row-inline">
          <div>
            <label for="f-siege-cp">Code postal</label>
            <input id="f-siege-cp" type="text" value="${n(e.siege.codePostal)}" placeholder="00000">
          </div>
          <div>
            <label for="f-siege-ville">Ville</label>
            <input id="f-siege-ville" type="text" value="${n(e.siege.ville)}" placeholder="Ville">
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Antennes &amp; points de vente</legend>
        <div id="antennes-list">
          ${e.antennes.map((t,i)=>m(t,i)).join("")}
        </div>
        <button type="button" id="add-antenne-btn" class="btn-secondary btn-sm">
          <i class="bi bi-plus-circle"></i> Ajouter une antenne
        </button>
      </fieldset>

      <div class="form-actions">
        <button type="button" id="save-btn" class="btn-primary">
          <i class="bi bi-check-lg"></i> Enregistrer
        </button>
        <button type="button" id="cancel-btn" class="btn-secondary">Annuler</button>
      </div>
    </form>
  `,d("f-nom","nom"),d("f-description","description"),d("f-email","email"),d("f-telephone","telephone"),d("f-siteweb","siteWeb"),c("f-siege-adresse","adresse"),c("f-siege-cp","codePostal"),c("f-siege-ville","ville"),document.getElementById("add-antenne-btn").addEventListener("click",()=>{e.antennes.push({nom:"",adresse:"",codePostal:"",ville:"",telephone:""}),u(),l()}),document.getElementById("save-btn").addEventListener("click",()=>{x("Modifications enregistrées")}),document.getElementById("cancel-btn").addEventListener("click",()=>{Object.assign(e,{nom:a.nom,description:a.description,email:a.email,telephone:a.telephone,siteWeb:a.siteWeb,siege:{...a.siege},antennes:a.antennes.map(t=>({...t}))}),g(),l()})}function m(s,t){return`
    <div class="antenne-row" data-index="${t}">
      <div class="antenne-row-header">
        <strong>Antenne ${t+1}</strong>
        <button type="button" class="btn-icon remove-antenne" data-index="${t}" title="Supprimer">
          <i class="bi bi-trash"></i>
        </button>
      </div>
      <div class="form-row">
        <label>Nom</label>
        <input type="text" class="antenne-field" data-index="${t}" data-key="nom" value="${n(s.nom)}" placeholder="Ex : Antenne Nord">
      </div>
      <div class="form-row">
        <label>Adresse</label>
        <input type="text" class="antenne-field" data-index="${t}" data-key="adresse" value="${n(s.adresse)}" placeholder="Numéro et rue">
      </div>
      <div class="form-row form-row-inline">
        <div>
          <label>Code postal</label>
          <input type="text" class="antenne-field" data-index="${t}" data-key="codePostal" value="${n(s.codePostal)}" placeholder="00000">
        </div>
        <div>
          <label>Ville</label>
          <input type="text" class="antenne-field" data-index="${t}" data-key="ville" value="${n(s.ville)}" placeholder="Ville">
        </div>
      </div>
      <div class="form-row">
        <label>Téléphone</label>
        <input type="tel" class="antenne-field" data-index="${t}" data-key="telephone" value="${n(s.telephone||"")}" placeholder="02 00 00 00 00">
      </div>
    </div>
  `}function u(){const s=document.getElementById("antennes-list");s.innerHTML=e.antennes.map((t,i)=>m(t,i)).join(""),$()}function $(){document.querySelectorAll(".antenne-field").forEach(s=>{s.addEventListener("input",()=>{const t=parseInt(s.dataset.index),i=s.dataset.key;e.antennes[t][i]=s.value,l()})}),document.querySelectorAll(".remove-antenne").forEach(s=>{s.addEventListener("click",()=>{e.antennes.splice(parseInt(s.dataset.index),1),u(),l()})})}function d(s,t){const i=document.getElementById(s);i&&i.addEventListener("input",()=>{if(e[t]=i.value,t==="nom"){const r=document.getElementById("logo-placeholder");r&&(r.textContent=p(e.nom))}l()})}function c(s,t){const i=document.getElementById(s);i&&i.addEventListener("input",()=>{e.siege[t]=i.value,l()})}function l(){const s=document.getElementById("settings-preview-col"),t=b.length,i=h.length,r=f.length,v=e.antennes.length?e.antennes.map(o=>`
        <div class="info-location-card">
          <div class="info-location-name">${n(o.nom)||"Antenne"}</div>
          <div class="info-location-addr">${[n(o.adresse),n(o.codePostal),n(o.ville)].filter(Boolean).join(", ")}</div>
          ${o.telephone?`<div class="info-location-tel"><i class="bi bi-telephone"></i> ${n(o.telephone)}</div>`:""}
        </div>`).join(""):"";s.innerHTML=`
    <div class="preview-label"><i class="bi bi-eye"></i> Aperçu — Page Informations</div>
    <div id="network-preview">
      <div class="info-header">
        <div class="info-logo-avatar">${p(e.nom)}</div>
        <div>
          <h1 class="info-nom">${n(e.nom)||"—"}</h1>
          <div class="info-contacts">
            ${e.telephone?`<span><i class="bi bi-telephone"></i> ${n(e.telephone)}</span>`:""}
            ${e.email?`<span><i class="bi bi-envelope"></i> ${n(e.email)}</span>`:""}
            ${e.siteWeb?`<span><i class="bi bi-globe"></i> ${n(e.siteWeb)}</span>`:""}
          </div>
        </div>
      </div>

      ${e.description?`<p class="info-description">${n(e.description)}</p>`:""}

      <div class="info-stats-row">
        <div class="info-stat"><div class="info-stat-value">${t}</div><div class="info-stat-label">Capteurs</div></div>
        <div class="info-stat"><div class="info-stat-value">${i}</div><div class="info-stat-label">Parcelles</div></div>
        <div class="info-stat"><div class="info-stat-value">${r}</div><div class="info-stat-label">Adhérents</div></div>
      </div>

      <div class="info-section">
        <h3><i class="bi bi-geo-alt"></i> Siège social</h3>
        <div class="info-location-card">
          <div class="info-location-addr">
            ${[n(e.siege.adresse),n(e.siege.codePostal),n(e.siege.ville)].filter(Boolean).join(", ")||"—"}
          </div>
          ${e.telephone?`<div class="info-location-tel"><i class="bi bi-telephone"></i> ${n(e.telephone)}</div>`:""}
        </div>
      </div>

      ${v?`
      <div class="info-section">
        <h3><i class="bi bi-pin-map"></i> Antennes &amp; points de vente</h3>
        <div class="info-locations-grid">${v}</div>
      </div>`:""}
    </div>
  `}function n(s){return(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function p(s){return(s||"?").split(/[\s\-']+/).slice(0,2).map(t=>t[0]).join("").toUpperCase().slice(0,2)}function x(s){const t=document.createElement("div");t.className="toast",t.textContent=s,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},2500)}
