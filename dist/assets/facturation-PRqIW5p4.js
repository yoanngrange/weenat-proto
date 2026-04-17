import"./main-6h3kY6nD.js";import{u as v}from"./breadcrumb-CD3EeVEY.js";import{n}from"./network-YzWdS0n_.js";document.addEventListener("DOMContentLoaded",()=>{v(),f()});const s={plan:"Plus",anniversaire:"2022-03-15",numero:"CTR-2022-00418",licencesMembres:5,licencesAdherents:3,licencesIntegrations:27,licencesTotal:8,prixUnitaire:29},a={societe:n.nom,siret:n.siret,adresse:n.siege.adresse,cp:n.siege.codePostal,ville:n.siege.ville,pays:n.siege.pays};function f(){const e=document.getElementById("billing-page");if(!e)return;const l=y();e.innerHTML=`
    <!-- 2-column top: stats+contract left, billing address right -->
    <div class="billing-top-2col">
      <div class="billing-top-left">
        <!-- Stats -->
        <div class="billing-section">
          <h2 class="billing-section-title"><i class="bi bi-bar-chart"></i> Licences</h2>
          <div class="billing-contract-grid">
            <div class="billing-stat-card">
              <div class="billing-stat-value">${s.licencesMembres}</div>
              <div class="billing-stat-label">Licences membres</div>
            </div>
            <div class="billing-stat-card">
              <div class="billing-stat-value">${s.licencesAdherents}</div>
              <div class="billing-stat-label">Licences adhérents</div>
            </div>
            <div class="billing-stat-card">
              <div class="billing-stat-value">${s.licencesIntegrations}</div>
              <div class="billing-stat-label">Licences intégrations</div>
            </div>
            <div class="billing-stat-card billing-stat-card--total">
              <div class="billing-stat-value">${s.licencesTotal}</div>
              <div class="billing-stat-label">Total licences</div>
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
                <span class="plan-badge plan-badge--${s.plan.toLowerCase()}">${s.plan}</span>
              </span>
            </div>
            <div class="billing-contract-item">
              <span class="billing-contract-label">Début du contrat</span>
              <span class="billing-contract-value">${r(s.anniversaire)}</span>
            </div>
            <div class="billing-contract-item">
              <span class="billing-contract-label">N° contrat</span>
              <span class="billing-contract-value billing-contract-mono">${s.numero}</span>
            </div>
            <div class="billing-contract-item">
              <span class="billing-contract-label">Tarif</span>
              <span class="billing-contract-value">${s.prixUnitaire} € HT / mois / licence</span>
            </div>
          </div>
        </div>
      </div>

      <div class="billing-top-right">
        <!-- Billing address form -->
        <div class="billing-section">
          <h2 class="billing-section-title"><i class="bi bi-building"></i> Adresse de facturation</h2>
      <form id="billing-addr-form" autocomplete="off">
        <div class="billing-form-grid">
          <div class="form-row billing-form-full">
            <label for="bf-societe">Raison sociale</label>
            <input id="bf-societe" type="text" value="${c(a.societe)}" placeholder="Nom de la société">
          </div>
          <div class="form-row billing-form-full">
            <label for="bf-adresse">Adresse postale</label>
            <input id="bf-adresse" type="text" value="${c(a.adresse)}" placeholder="Numéro et rue">
          </div>
          <div class="form-row">
            <label for="bf-cp">Code postal</label>
            <input id="bf-cp" type="text" value="${c(a.cp)}" placeholder="00000">
          </div>
          <div class="form-row">
            <label for="bf-ville">Ville</label>
            <input id="bf-ville" type="text" value="${c(a.ville)}" placeholder="Ville">
          </div>
          <div class="form-row billing-form-full">
            <label for="bf-pays">Pays</label>
            <select id="bf-pays">
              ${T.map(t=>`<option value="${t.code}"${t.code===a.pays?" selected":""}>${t.label}</option>`).join("")}
            </select>
          </div>
          <div class="form-row billing-form-full" id="bf-siret-row">
            <label for="bf-siret" id="bf-siret-label">SIRET</label>
            <input id="bf-siret" type="text" value="${c(a.siret)}" placeholder="14 chiffres">
          </div>
        </div>
          <div class="form-actions" style="margin-top:16px">
            <button type="button" id="billing-addr-save" class="btn-primary">
              <i class="bi bi-check-lg"></i> Enregistrer
            </button>
            <button type="button" id="billing-addr-cancel" class="btn-secondary">Annuler</button>
          </div>
        </form>
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
              <th>Montant HT</th>
              <th>Date de règlement</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${l.map(t=>`
              <tr>
                <td class="billing-invoice-num">${t.numero}</td>
                <td>${r(t.dateEmission)}</td>
                <td class="billing-amount">${t.montant.toFixed(2)} € HT</td>
                <td>${t.dateReglement?r(t.dateReglement):'<span style="color:var(--txt3)">—</span>'}</td>
                <td>${E(t.statut)}</td>
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
  `,h()}function h(){var l,t;const e=document.getElementById("bf-pays");e&&(e.addEventListener("change",()=>d(e.value)),d(e.value)),(l=document.getElementById("billing-addr-save"))==null||l.addEventListener("click",()=>{o("Adresse de facturation enregistrée.")}),(t=document.getElementById("billing-addr-cancel"))==null||t.addEventListener("click",()=>{document.getElementById("bf-societe").value=a.societe,document.getElementById("bf-adresse").value=a.adresse,document.getElementById("bf-cp").value=a.cp,document.getElementById("bf-ville").value=a.ville,document.getElementById("bf-pays").value=a.pays,document.getElementById("bf-siret").value=a.siret,d(a.pays)}),document.querySelectorAll(".billing-pdf-btn").forEach(i=>{i.addEventListener("click",()=>o(`PDF facture ${i.dataset.id} téléchargé.`))}),document.querySelectorAll(".billing-detail-btn").forEach(i=>{i.addEventListener("click",()=>o(`Détail facture ${i.dataset.id}.`))}),document.querySelectorAll(".billing-pay-btn").forEach(i=>{i.addEventListener("click",()=>o(`Paiement facture ${i.dataset.id} : redirection…`))})}function d(e){const l=document.getElementById("bf-siret-row"),t=document.getElementById("bf-siret-label"),i=document.getElementById("bf-siret");!l||!t||!i||(e==="FR"?(l.hidden=!1,t.textContent="SIRET",i.placeholder="14 chiffres"):$.includes(e)?(l.hidden=!1,t.textContent="N° TVA intracommunautaire",i.placeholder="FR12345678901"):l.hidden=!0)}function y(){const e=[],l=new Date("2026-04-15");for(let t=11;t>=0;t--){const i=new Date(l.getFullYear(),l.getMonth()-t,1),g=i.getFullYear(),p=String(i.getMonth()+1).padStart(2,"0"),b=t>0?t===2?"en attente":"payée":"en attente",m=b==="payée"?u(new Date(i.getFullYear(),i.getMonth(),18)):null;e.push({numero:`FAC-${g}-${p}`,dateEmission:u(new Date(i.getFullYear(),i.getMonth(),1)),montant:s.licencesTotal*s.prixUnitaire,dateReglement:m,statut:b})}return e.reverse()}function u(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function r(e){if(!e)return"—";const[l,t,i]=e.split("-");return`${i}/${t}/${l}`}function E(e){return e==="payée"?'<span class="statut-badge statut-actif"><i class="bi bi-check-circle-fill"></i> Payée</span>':e==="en attente"?'<span class="statut-badge statut-essai"><i class="bi bi-clock"></i> En attente</span>':e==="échue"?'<span class="statut-badge statut-inactif"><i class="bi bi-exclamation-circle"></i> Échue</span>':`<span class="statut-badge">${e}</span>`}function c(e){return(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function o(e){const l=document.createElement("div");l.className="toast",l.textContent=e,document.body.appendChild(l),setTimeout(()=>l.classList.add("show"),10),setTimeout(()=>{l.classList.remove("show"),setTimeout(()=>l.remove(),300)},2500)}const $=["DE","AT","BE","BG","CY","HR","DK","ES","EE","FI","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","CZ","RO","SK","SI","SE"],T=[{code:"FR",label:"France"},{code:"BE",label:"Belgique"},{code:"CH",label:"Suisse"},{code:"LU",label:"Luxembourg"},{code:"DE",label:"Allemagne"},{code:"ES",label:"Espagne"},{code:"IT",label:"Italie"},{code:"PT",label:"Portugal"},{code:"NL",label:"Pays-Bas"},{code:"AT",label:"Autriche"},{code:"PL",label:"Pologne"},{code:"GB",label:"Royaume-Uni"},{code:"US",label:"États-Unis"},{code:"CA",label:"Canada"},{code:"MA",label:"Maroc"},{code:"TN",label:"Tunisie"},{code:"SN",label:"Sénégal"}];
