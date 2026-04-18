import"./main-QvYlLaZB.js";import{u as t}from"./breadcrumb-DEBQjfiD.js";import{m as o}from"./members-DPSnqfQ_.js";import{o as l}from"./orgs-b3kLTQ0f.js";import{n as i}from"./network-YzWdS0n_.js";document.addEventListener("DOMContentLoaded",()=>{t(),m()});const c=["Arboriculture","Viticulture","Maraîchage","Grandes cultures","Polyculture-Élevage","Pépiniériste","Floriculture","Trufficulture","Organismes publics / semi-publics","Coopérative","Négoce","Concessionnaire","Semencier","Laboratoire / Institut / Recherche","Autre"],n=[{id:"plus",name:"Weenat Plus",price:"14 €/mois",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API"],color:"var(--pri)",current:!0},{id:"expert",name:"Weenat Expert",price:"25 €/mois",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","Multi-exploitation","Accès réseau adhérents","Modèles agronomiques avancés","Support prioritaire","Formation incluse"],color:"#6B21A8"}],d=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau",r=d?{...l[0],name:i.nom,siret:i.siret,adresse:i.siege.adresse,codePostal:i.siege.codePostal,ville:i.siege.ville}:l[0]||{name:"Ferme du Bocage",ville:"Rennes"},p=o.filter(a=>a.role==="propriétaire"||a.role==="admin");function m(){const a=document.getElementById("parametres-form");a&&(a.innerHTML=`
    <div class="param-section">
      <div class="param-section-title">Mon exploitation</div>

      <div class="param-form-grid" style="max-width:640px">
        <div class="param-field">
          <label class="param-label">Nom de l'exploitation</label>
          <input type="text" class="param-input" id="org-name" value="${r.name||""}">
        </div>
        <div class="param-field">
          <label class="param-label">Propriétaire</label>
          <select class="param-input" id="org-owner">
            ${p.map(e=>`<option value="${e.id}">${e.prenom} ${e.nom}</option>`).join("")}
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
          <input type="text" class="param-input" id="org-address" placeholder="Numéro et rue" value="${r.adresse||""}">
        </div>
        <div class="param-field">
          <label class="param-label">Code postal</label>
          <input type="text" class="param-input" id="org-cp" placeholder="00000" value="${r.codePostal||""}">
        </div>
        <div class="param-field">
          <label class="param-label">Ville</label>
          <input type="text" class="param-input" id="org-ville" placeholder="Ville" value="${r.ville||""}">
        </div>
        <div class="param-field">
          <label class="param-label">SIRET</label>
          <input type="text" class="param-input" id="org-siret" placeholder="14 chiffres" value="${r.siret||""}">
        </div>
      </div>

      <button class="btn-primary" id="save-org-btn" style="margin-top:16px">
        <i class="bi bi-check-lg"></i> Enregistrer
      </button>
    </div>

    <div class="param-section">
      <div class="param-section-title">Niveau d'abonnement</div>
      <div class="param-plans">
        ${n.map(e=>`
          <div class="param-plan${e.current?" param-plan--current":""}" style="border-color:${e.current?e.color:"var(--bdr)"}">
            ${e.current?`<div class="param-plan-badge" style="background:${e.color}">Actuel</div>`:""}
            <div class="param-plan-name" style="color:${e.color}">${e.name}</div>
            <div class="param-plan-price">${e.price}</div>
            <ul class="param-plan-features">
              ${e.features.map(s=>`<li><i class="bi bi-check-circle-fill" style="color:${e.color}"></i> ${s}</li>`).join("")}
            </ul>
            ${e.current?"":`<button class="btn-secondary" style="margin-top:12px;width:100%">Passer à ${e.name.replace("Weenat ","")}</button>`}
          </div>
        `).join("")}
      </div>
    </div>
  `,document.getElementById("save-org-btn").addEventListener("click",()=>{u("Paramètres enregistrés.")}))}function u(a){const e=document.createElement("div");e.className="toast",e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}
