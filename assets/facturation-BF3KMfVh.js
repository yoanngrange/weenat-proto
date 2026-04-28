import"./main-BfTBtz6r.js";import{u as h}from"./breadcrumb-DEBQjfiD.js";import{n as o}from"./network-YzWdS0n_.js";document.addEventListener("DOMContentLoaded",()=>{h(),E()});const c={plan:"Plus",anniversaire:"2022-03-15",numero:"CTR-2022-00418",licencesMembres:5,licencesAdherents:3,licencesIntegrations:27},n={societe:o.nom,siret:o.siret,adresse:o.siege.adresse,cp:o.siege.codePostal,ville:o.siege.ville,pays:o.siege.pays};function E(){const e=document.getElementById("billing-page");if(!e)return;const l=L();e.innerHTML=`
    <!-- 2-column top: stats+contract left, billing address right -->
    <div class="billing-top-2col">
      <div class="billing-top-left">
        <!-- Stats -->
        <div class="billing-section">
          <h2 class="billing-section-title"><i class="bi bi-bar-chart"></i> Licences</h2>
          <div class="billing-contract-grid">
            <div class="billing-stat-card">
              <div class="billing-stat-value">${c.licencesMembres}</div>
              <div class="billing-stat-label">Licences membres</div>
            </div>
            <div class="billing-stat-card">
              <div class="billing-stat-value">${c.licencesAdherents}</div>
              <div class="billing-stat-label">Licences adhérents</div>
            </div>
            <div class="billing-stat-card">
              <div class="billing-stat-value">${c.licencesIntegrations}</div>
              <div class="billing-stat-label">Licences intégrations</div>
            </div>
          </div>
        </div>

        <!-- Contract info -->
        <div class="billing-section">
          <h2 class="billing-section-title"><i class="bi bi-file-earmark-text"></i> Contrat</h2>
          <div class="billing-contract-grid">
            <div class="billing-contract-item">
              <span class="billing-contract-label">Abonnement</span>
              <span class="billing-contract-value">
                <span class="plan-badge plan-badge--${c.plan.toLowerCase()}">${c.plan}</span>
              </span>
            </div>
            <div class="billing-contract-item">
              <span class="billing-contract-label">Début du contrat</span>
              <span class="billing-contract-value">${m(c.anniversaire)}</span>
            </div>
            <div class="billing-contract-item">
              <span class="billing-contract-label">N° contrat</span>
              <span class="billing-contract-value billing-contract-mono">${c.numero}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="billing-top-right">
        <div class="billing-section">
          <div class="billing-section-title" style="display:flex;align-items:center;justify-content:space-between">
            <span><i class="bi bi-building"></i> Adresses</span>
            <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:400;cursor:pointer">
              <input type="checkbox" id="same-delivery-addr" checked>
              Même adresse de livraison
            </label>
          </div>

          <!-- Onglets -->
          <div class="billing-addr-tabs" id="billing-addr-tabs">
            <button class="billing-addr-tab active" data-tab="facturation">Facturation</button>
            <button class="billing-addr-tab" data-tab="livraison" id="tab-livraison" style="display:none">Livraison</button>
          </div>

          <!-- Onglet facturation -->
          <div id="tab-content-facturation" class="billing-addr-tab-content">
            <form id="billing-addr-form" autocomplete="off">
              <div class="billing-form-grid">
                <div class="form-row billing-form-full">
                  <label for="bf-societe">Raison sociale</label>
                  <input id="bf-societe" type="text" value="${d(n.societe)}" placeholder="Nom de la société">
                </div>
                <div class="form-row billing-form-full">
                  <label for="bf-adresse">Adresse postale</label>
                  <input id="bf-adresse" type="text" value="${d(n.adresse)}" placeholder="Numéro et rue">
                </div>
                <div class="form-row">
                  <label for="bf-cp">Code postal</label>
                  <input id="bf-cp" type="text" value="${d(n.cp)}" placeholder="00000">
                </div>
                <div class="form-row">
                  <label for="bf-ville">Ville</label>
                  <input id="bf-ville" type="text" value="${d(n.ville)}" placeholder="Ville">
                </div>
                <div class="form-row billing-form-full">
                  <label for="bf-pays">Pays</label>
                  <select id="bf-pays">
                    ${T.map(t=>`<option value="${t.code}"${t.code===n.pays?" selected":""}>${t.label}</option>`).join("")}
                  </select>
                </div>
                <div class="form-row billing-form-full" id="bf-siret-row">
                  <label for="bf-siret" id="bf-siret-label">SIRET</label>
                  <input id="bf-siret" type="text" value="${d(n.siret)}" placeholder="14 chiffres">
                </div>
              </div>
            </form>
          </div>

          <!-- Onglet livraison -->
          <div id="tab-content-livraison" class="billing-addr-tab-content" style="display:none">
            <form id="delivery-addr-form" autocomplete="off">
              <div class="billing-form-grid">
                <div class="form-row billing-form-full">
                  <label for="dl-nom">Nom / Raison sociale</label>
                  <input id="dl-nom" type="text" placeholder="Destinataire">
                </div>
                <div class="form-row billing-form-full">
                  <label for="dl-adresse">Adresse postale</label>
                  <input id="dl-adresse" type="text" placeholder="Numéro et rue">
                </div>
                <div class="form-row">
                  <label for="dl-cp">Code postal</label>
                  <input id="dl-cp" type="text" placeholder="00000">
                </div>
                <div class="form-row">
                  <label for="dl-ville">Ville</label>
                  <input id="dl-ville" type="text" placeholder="Ville">
                </div>
              </div>
            </form>
          </div>

          <div class="form-actions" style="margin-top:16px">
            <button type="button" id="billing-addr-save" class="btn-primary">
              <i class="bi bi-check-lg"></i> Enregistrer
            </button>
            <button type="button" id="billing-addr-cancel" class="btn-secondary">Annuler</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Invoice history -->
    <div class="billing-section">
      <h2 class="billing-section-title"><i class="bi bi-receipt"></i> Historique des factures</h2>
      <div class="billing-table-wrap">
        <table class="billing-table">
          <thead>
            <tr>
              <th>N° facture</th>
              <th>Date d'émission</th>
              <th style="text-align:right">Montant HT</th>
              <th>Date de règlement</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${l.map(t=>`
              <tr>
                <td class="billing-invoice-num">${t.numero}</td>
                <td>${m(t.dateEmission)}</td>
                <td class="billing-amount">${t.montant.toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})} € HT</td>
                <td>${t.dateReglement?m(t.dateReglement):'<span style="color:var(--txt3)">—</span>'}</td>
                <td>${I(t.statut)}</td>
                <td class="billing-actions-cell">
                  <button class="icon-btn billing-pdf-btn" data-id="${t.numero}" title="Télécharger PDF">
                    <i class="bi bi-file-earmark-pdf"></i>
                  </button>
                  <button class="icon-btn billing-detail-btn" data-id="${t.numero}" title="Voir le détail">
                    <i class="bi bi-eye"></i>
                  </button>
                  ${t.statut==="en attente"?`
                    <button class="icon-btn billing-pay-btn" data-id="${t.numero}" title="Payer" style="color:var(--ok)">
                      <i class="bi bi-credit-card"></i>
                    </button>
                  `:""}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,$()}function $(){var s,r;const e=document.getElementById("bf-pays");e&&(e.addEventListener("change",()=>g(e.value)),g(e.value));const l=document.querySelectorAll(".billing-addr-tab");l.forEach(i=>{i.addEventListener("click",()=>{l.forEach(b=>b.classList.remove("active")),i.classList.add("active"),document.querySelectorAll(".billing-addr-tab-content").forEach(b=>b.style.display="none"),document.getElementById(`tab-content-${i.dataset.tab}`).style.display=""})});const t=document.getElementById("same-delivery-addr"),a=document.getElementById("tab-livraison");t&&a&&t.addEventListener("change",()=>{a.style.display=t.checked?"none":"",t.checked?(l.forEach(i=>i.classList.remove("active")),document.querySelector('[data-tab="facturation"]').classList.add("active"),document.querySelectorAll(".billing-addr-tab-content").forEach(i=>i.style.display="none"),document.getElementById("tab-content-facturation").style.display=""):a.click()}),(s=document.getElementById("billing-addr-save"))==null||s.addEventListener("click",()=>{u("Adresse enregistrée.")}),(r=document.getElementById("billing-addr-cancel"))==null||r.addEventListener("click",()=>{document.getElementById("bf-societe").value=n.societe,document.getElementById("bf-adresse").value=n.adresse,document.getElementById("bf-cp").value=n.cp,document.getElementById("bf-ville").value=n.ville,document.getElementById("bf-pays").value=n.pays,document.getElementById("bf-siret").value=n.siret,g(n.pays)}),document.querySelectorAll(".billing-pdf-btn").forEach(i=>{i.addEventListener("click",()=>u(`PDF facture ${i.dataset.id} téléchargé.`))}),document.querySelectorAll(".billing-detail-btn").forEach(i=>{i.addEventListener("click",()=>u(`Détail facture ${i.dataset.id}.`))}),document.querySelectorAll(".billing-pay-btn").forEach(i=>{i.addEventListener("click",()=>u(`Paiement facture ${i.dataset.id} : redirection…`))})}function g(e){const l=document.getElementById("bf-siret-row"),t=document.getElementById("bf-siret-label"),a=document.getElementById("bf-siret");!l||!t||!a||(e==="FR"?(l.hidden=!1,t.textContent="SIRET",a.placeholder="14 chiffres"):S.includes(e)?(l.hidden=!1,t.textContent="N° TVA intracommunautaire",a.placeholder="FR12345678901"):l.hidden=!0)}function L(){const e=[],l=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let a=11;a>=0;a--){const s=new Date(l.getFullYear(),l.getMonth()-a,1),r=s.getFullYear(),i=String(s.getMonth()+1).padStart(2,"0"),v=a>0?a===2?"en attente":"payée":"en attente",f=v==="payée"?p(new Date(s.getFullYear(),s.getMonth(),18)):null,y=s.getMonth()===11?1980:t[a%t.length];e.push({numero:`FAC-${r}-${i}`,dateEmission:p(new Date(s.getFullYear(),s.getMonth(),1)),montant:y,dateReglement:f,statut:v})}return e.reverse()}function p(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function m(e){if(!e)return"—";const[l,t,a]=e.split("-");return`${a}/${t}/${l}`}function I(e){return e==="payée"?'<span class="statut-badge statut-actif"><i class="bi bi-check-circle-fill"></i> Payée</span>':e==="en attente"?'<span class="statut-badge statut-essai"><i class="bi bi-clock"></i> En attente</span>':e==="échue"?'<span class="statut-badge statut-inactif"><i class="bi bi-exclamation-circle"></i> Échue</span>':`<span class="statut-badge">${e}</span>`}function d(e){return(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function u(e){const l=document.createElement("div");l.className="toast",l.textContent=e,document.body.appendChild(l),setTimeout(()=>l.classList.add("show"),10),setTimeout(()=>{l.classList.remove("show"),setTimeout(()=>l.remove(),300)},2500)}const S=["DE","AT","BE","BG","CY","HR","DK","ES","EE","FI","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","CZ","RO","SK","SI","SE"],T=[{code:"FR",label:"France"},{code:"BE",label:"Belgique"},{code:"CH",label:"Suisse"},{code:"LU",label:"Luxembourg"},{code:"DE",label:"Allemagne"},{code:"ES",label:"Espagne"},{code:"IT",label:"Italie"},{code:"PT",label:"Portugal"},{code:"NL",label:"Pays-Bas"},{code:"AT",label:"Autriche"},{code:"PL",label:"Pologne"},{code:"GB",label:"Royaume-Uni"},{code:"US",label:"États-Unis"},{code:"CA",label:"Canada"},{code:"MA",label:"Maroc"},{code:"TN",label:"Tunisie"},{code:"SN",label:"Sénégal"}];
