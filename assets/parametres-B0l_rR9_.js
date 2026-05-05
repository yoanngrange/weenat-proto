import"./main-CTKmqMeY.js";import{u as o}from"./breadcrumb-DEBQjfiD.js";import{m as n}from"./members-DEd9yWse.js";import{o as s}from"./orgs-Cx4wNzLL.js";import{n as t}from"./network-YzWdS0n_.js";document.addEventListener("DOMContentLoaded",()=>{o(),b(),d()});function d(){const a=document.getElementById("param-map");if(!a||!window.L)return;const e=i.lat||48.117,r=i.lng||-1.678,l=L.map(a,{zoomControl:!0,scrollWheelZoom:!1}).setView([e,r],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors",maxZoom:18}).addTo(l),L.marker([e,r],{draggable:!1}).addTo(l).bindPopup(`<strong>${i.name||"Mon exploitation"}</strong>`).openPopup()}const c=["Arboriculture","Viticulture","Maraîchage","Grandes cultures","Polyculture-Élevage","Pépiniériste","Floriculture","Trufficulture","Organismes publics / semi-publics","Coopérative","Négoce","Concessionnaire","Semencier","Laboratoire / Institut / Recherche","Autre"],p=[{id:"plus",name:"Weenat Plus",price:"14 €/mois",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API"],color:"#00B093",current:!0},{id:"expert",name:"Weenat Expert",price:"25 €/mois",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","Capteurs et fonctionnalités Irrigation"],color:"#006798"}],m=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau",u=s.find(a=>a.id===100)||{},i=m?{...u,name:t.nom,adresse:t.siege.adresse,codePostal:t.siege.codePostal,ville:t.siege.ville}:s.find(a=>a.id===1)||{name:"Ferme du Bocage",ville:"Rennes",lat:48.1,lng:-1.7},v=n.filter(a=>a.role==="propriétaire"||a.role==="admin");function b(){const a=document.getElementById("parametres-form");a&&(a.innerHTML=`
    <div class="param-section">
      <div class="param-section-title">Mon exploitation</div>

      <div class="param-form-grid" style="max-width:640px">
        <div class="param-field">
          <label class="param-label">Nom de l'exploitation</label>
          <input type="text" class="param-input" id="org-name" value="${i.name||""}">
        </div>
        <div class="param-field">
          <label class="param-label">Propriétaire</label>
          <select class="param-input" id="org-owner">
            ${v.map(e=>`<option value="${e.id}">${e.prenom} ${e.nom}</option>`).join("")}
          </select>
        </div>
        <div class="param-field param-field--wide">
          <label class="param-label">Métiers</label>
          <div class="param-chips" id="profession-chips">
            ${c.map(e=>`
              <label class="param-chip">
                <input type="checkbox" value="${e}"> ${e}
              </label>
            `).join("")}
          </div>
        </div>
        <div class="param-field param-field--wide">
          <label class="param-label">Adresse du siège</label>
          <input type="text" class="param-input" id="org-address" placeholder="Numéro et rue" value="${i.adresse||""}">
        </div>
        <div class="param-field">
          <label class="param-label">Code postal</label>
          <input type="text" class="param-input" id="org-cp" placeholder="00000" value="${i.codePostal||""}">
        </div>
        <div class="param-field">
          <label class="param-label">Ville</label>
          <input type="text" class="param-input" id="org-ville" placeholder="Ville" value="${i.ville||""}">
        </div>
      </div>

      <button class="btn-primary" id="save-org-btn" style="margin-top:16px">
        <i class="bi bi-check-lg"></i> Enregistrer
      </button>
    </div>

    <div class="param-section" style="padding:0;overflow:hidden;border-radius:8px;border:1px solid var(--bdr)">
      <div style="padding:10px 14px;font-weight:600;font-size:13px;border-bottom:1px solid var(--bdr);background:var(--bg2)">
        <i class="bi bi-geo-alt" style="color:var(--pri)"></i> Localisation de l'exploitation
      </div>
      <div id="param-map" style="height:260px"></div>
      <div style="padding:8px 14px;font-size:12px;color:var(--txt2)">
        <i class="bi bi-info-circle"></i> Position calculée depuis l'adresse renseignée.
      </div>
    </div>

    <div class="param-section">
      <div class="param-section-title">Niveau d'abonnement</div>
      <div class="param-plans">
        ${p.map(e=>`
          <div class="param-plan${e.current?" param-plan--current":""}" style="border-color:${e.current?e.color:"var(--bdr)"}">
            ${e.current?`<div class="param-plan-badge" style="background:${e.color}">Actuel</div>`:""}
            <div class="param-plan-name" style="color:${e.color}">${e.name}</div>
            <div class="param-plan-price">${e.price}</div>
            <ul class="param-plan-features">
              ${e.features.map(r=>`<li><i class="bi bi-check-circle-fill" style="color:${e.color}"></i> ${r}</li>`).join("")}
            </ul>
            ${e.current?"":`<button class="btn-secondary" style="margin-top:12px;width:100%">Passer à ${e.name.replace("Weenat ","")}</button>`}
          </div>
        `).join("")}
      </div>
    </div>
  `,document.getElementById("save-org-btn").addEventListener("click",()=>{g("Paramètres enregistrés.")}))}function g(a){const e=document.createElement("div");e.className="toast",e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}
