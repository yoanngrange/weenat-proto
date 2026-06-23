import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{o as E}from"./orgs-DnFmvGlp.js";import{s as L}from"./sensors-CRadjF8G.js";import{p as k}from"./plots-DhtWL7s_.js";import{n as a}from"./network-YzWdS0n_.js";import{u as I}from"./breadcrumb-CzFWtd6d.js";const e={nom:a.nom,description:a.description,email:a.email,telephone:a.telephone,siteWeb:a.siteWeb,siege:{...a.siege},antennes:a.antennes.map(n=>({...n})),logoDataUrl:null},r=Object.assign(document.createElement("input"),{type:"file",accept:"image/*"});r.style.display="none";document.addEventListener("DOMContentLoaded",()=>document.body.appendChild(r));r.addEventListener("change",()=>{const n=r.files[0];if(!n)return;const t=new FileReader;t.onload=i=>{e.logoDataUrl=i.target.result,o(),A()},t.readAsDataURL(n)});function A(){const n=document.getElementById("logo-placeholder");n&&(n.innerHTML=e.logoDataUrl?`<img src="${e.logoDataUrl}" style="width:48px;height:48px;object-fit:contain;border-radius:6px">`:p(e.nom))}const C=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),B=new Set(["SMV"]);document.addEventListener("DOMContentLoaded",()=>{I(),b(),o()});const P=["Grand Ouest","Météo Sud","Comptoirs du Nord","Réseaux Landais","Grande Beauce"];function b(){const n=document.getElementById("settings-form-col");n.innerHTML=`
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
            <span class="share-toggle-label">Stations météo virtuelles</span>
            <span class="share-toggle-desc">Les stations météo virtuelles sont partagées</span>
          </div>
          <label météo class="toggle-switch">
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
          ${P.map(t=>`
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
          <input id="f-nom" type="text" value="${s(e.nom)}" placeholder="Nom du réseau">
        </div>
        <div class="form-row">
          <label for="f-description">Description</label>
          <textarea id="f-description" rows="4" placeholder="Présentation du réseau…">${s(e.description)}</textarea>
        </div>
        <div class="form-row">
          <label>Logo</label>
          <div class="logo-upload-area">
            <span id="logo-placeholder" class="logo-initials">${e.logoDataUrl?`<img src="${e.logoDataUrl}" style="width:48px;height:48px;object-fit:contain;border-radius:6px">`:p(e.nom)}</span>
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
          <input id="f-email" type="email" value="${s(e.email)}" placeholder="contact@reseau.fr">
        </div>
        <div class="form-row">
          <label for="f-telephone">Téléphone</label>
          <input id="f-telephone" type="tel" value="${s(e.telephone)}" placeholder="02 00 00 00 00">
        </div>
        <div class="form-row">
          <label for="f-siteweb">Site web</label>
          <input id="f-siteweb" type="text" value="${s(e.siteWeb)}" placeholder="www.monreseau.fr">
        </div>
      </fieldset>

      <fieldset>
        <legend>Siège social</legend>
        <div class="form-row">
          <label for="f-siege-adresse">Adresse</label>
          <input id="f-siege-adresse" type="text" value="${s(e.siege.adresse)}" placeholder="Numéro et rue">
        </div>
        <div class="form-row form-row-inline">
          <div>
            <label for="f-siege-cp">Code postal</label>
            <input id="f-siege-cp" type="text" value="${s(e.siege.codePostal)}" placeholder="00000">
          </div>
          <div>
            <label for="f-siege-ville">Ville</label>
            <input id="f-siege-ville" type="text" value="${s(e.siege.ville)}" placeholder="Ville">
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Antennes &amp; points de vente</legend>
        <div id="antennes-list">
          ${e.antennes.map((t,i)=>h(t,i)).join("")}
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
  `,d("f-nom","nom"),d("f-description","description"),d("f-email","email"),d("f-telephone","telephone"),d("f-siteweb","siteWeb"),v("f-siege-adresse","adresse"),v("f-siege-cp","codePostal"),v("f-siege-ville","ville"),document.getElementById("logo-upload-btn").addEventListener("click",()=>r.click()),["share-meteo","share-irrigation","share-virtual"].forEach(t=>{var i;(i=document.getElementById(t))==null||i.addEventListener("change",o)}),document.getElementById("add-antenne-btn").addEventListener("click",()=>{e.antennes.push({nom:"",adresse:"",codePostal:"",ville:"",telephone:""}),y(),o()}),document.getElementById("save-btn").addEventListener("click",()=>{S("Modifications enregistrées")}),document.getElementById("cancel-btn").addEventListener("click",()=>{Object.assign(e,{nom:a.nom,description:a.description,email:a.email,telephone:a.telephone,siteWeb:a.siteWeb,siege:{...a.siege},antennes:a.antennes.map(t=>({...t}))}),b(),o()})}function h(n,t){return`
    <div class="antenne-row" data-index="${t}">
      <div class="antenne-row-header">
        <strong>Antenne ${t+1}</strong>
        <button type="button" class="btn-icon remove-antenne" data-index="${t}" title="Supprimer">
          <i class="bi bi-trash"></i>
        </button>
      </div>
      <div class="form-row">
        <label>Nom</label>
        <input type="text" class="antenne-field" data-index="${t}" data-key="nom" value="${s(n.nom)}" placeholder="Ex : Antenne Nord">
      </div>
      <div class="form-row">
        <label>Adresse</label>
        <input type="text" class="antenne-field" data-index="${t}" data-key="adresse" value="${s(n.adresse)}" placeholder="Numéro et rue">
      </div>
      <div class="form-row form-row-inline">
        <div>
          <label>Code postal</label>
          <input type="text" class="antenne-field" data-index="${t}" data-key="codePostal" value="${s(n.codePostal)}" placeholder="00000">
        </div>
        <div>
          <label>Ville</label>
          <input type="text" class="antenne-field" data-index="${t}" data-key="ville" value="${s(n.ville)}" placeholder="Ville">
        </div>
      </div>
      <div class="form-row">
        <label>Téléphone</label>
        <input type="tel" class="antenne-field" data-index="${t}" data-key="telephone" value="${s(n.telephone||"")}" placeholder="02 00 00 00 00">
      </div>
    </div>
  `}function y(){const n=document.getElementById("antennes-list");n.innerHTML=e.antennes.map((t,i)=>h(t,i)).join(""),D()}function D(){document.querySelectorAll(".antenne-field").forEach(n=>{n.addEventListener("input",()=>{const t=parseInt(n.dataset.index),i=n.dataset.key;e.antennes[t][i]=n.value,o()})}),document.querySelectorAll(".remove-antenne").forEach(n=>{n.addEventListener("click",()=>{e.antennes.splice(parseInt(n.dataset.index),1),y(),o()})})}function d(n,t){const i=document.getElementById(n);i&&i.addEventListener("input",()=>{if(e[t]=i.value,t==="nom"){const c=document.getElementById("logo-placeholder");c&&(c.textContent=p(e.nom))}o()})}function v(n,t){const i=document.getElementById(n);i&&i.addEventListener("input",()=>{e.siege[t]=i.value,o()})}function o(){var m,u,f;const n=document.getElementById("settings-preview-col"),t=((m=document.getElementById("share-meteo"))==null?void 0:m.checked)!==!1,i=!!((u=document.getElementById("share-irrigation"))!=null&&u.checked),c=!!((f=document.getElementById("share-virtual"))!=null&&f.checked),w=L.filter(l=>B.has(l.model)?c:C.has(l.model)?i:t).length,$=k.length,x=E.length,g=e.antennes.length?e.antennes.map(l=>`
        <div class="info-location-card">
          <div class="info-location-name">${s(l.nom)||"Antenne"}</div>
          <div class="info-location-addr">${[s(l.adresse),s(l.codePostal),s(l.ville)].filter(Boolean).join(", ")}</div>
          ${l.telephone?`<div class="info-location-tel"><i class="bi bi-telephone"></i> ${s(l.telephone)}</div>`:""}
        </div>`).join(""):"";n.innerHTML=`
    <div class="preview-label"><i class="bi bi-eye"></i> Aperçu — Page Informations</div>
    <div id="network-preview">
      <div class="info-header">
        <div class="info-logo-avatar"${e.logoDataUrl?' style="background:transparent;padding:0;overflow:hidden"':""}>${e.logoDataUrl?`<img src="${e.logoDataUrl}" style="width:100%;height:100%;object-fit:contain">`:p(e.nom)}</div>
        <div>
          <h1 class="info-nom">${s(e.nom)||"—"}</h1>
          <div class="info-contacts">
            ${e.telephone?`<span><i class="bi bi-telephone"></i> ${s(e.telephone)}</span>`:""}
            ${e.email?`<span><i class="bi bi-envelope"></i> ${s(e.email)}</span>`:""}
            ${e.siteWeb?`<span><i class="bi bi-globe"></i> ${s(e.siteWeb)}</span>`:""}
          </div>
        </div>
      </div>

      ${e.description?`<p class="info-description">${s(e.description)}</p>`:""}

      <div class="info-stats-row">
        <div class="info-stat"><div class="info-stat-value">${w}</div><div class="info-stat-label">Capteurs</div></div>
        <div class="info-stat"><div class="info-stat-value">${$}</div><div class="info-stat-label">Parcelles</div></div>
        <div class="info-stat"><div class="info-stat-value">${x}</div><div class="info-stat-label">Adhérents</div></div>
      </div>

      <div class="info-section">
        <h3><i class="bi bi-geo-alt"></i> Siège social</h3>
        <div class="info-location-card">
          <div class="info-location-addr">
            ${[s(e.siege.adresse),s(e.siege.codePostal),s(e.siege.ville)].filter(Boolean).join(", ")||"—"}
          </div>
          ${e.telephone?`<div class="info-location-tel"><i class="bi bi-telephone"></i> ${s(e.telephone)}</div>`:""}
        </div>
      </div>

      ${g?`
      <div class="info-section">
        <h3><i class="bi bi-pin-map"></i> Antennes &amp; points de vente</h3>
        <div class="info-locations-grid">${g}</div>
      </div>`:""}
    </div>
  `}function s(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function p(n){return(n||"?").split(/[\s\-']+/).slice(0,2).map(t=>t[0]).join("").toUpperCase().slice(0,2)}function S(n){const t=document.createElement("div");t.className="toast",t.textContent=n,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},2500)}
