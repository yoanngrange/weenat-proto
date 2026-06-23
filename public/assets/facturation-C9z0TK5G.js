import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as T}from"./breadcrumb-CzFWtd6d.js";import{m as E}from"./members-Cr98hVG_.js";import{o as L}from"./orgs-DnFmvGlp.js";import{n as r}from"./network-YzWdS0n_.js";import{B as b}from"./constants-Dur9W-JX.js";document.addEventListener("DOMContentLoaded",()=>{T(),I()});const o={plan:"Plus",anniversaire:"2022-03-15",numero:"CTR-2022-00418",licencesMembres:E.length,licencesAdherents:L.filter(e=>e.id!==100&&e.statut!=="inactif").length,licencesIntegrations:27,licencesTotal:E.length+L.filter(e=>e.id!==100&&e.statut!=="inactif").length},A={[b[0]]:{societe:r.nom,siret:r.siret,adresse:r.siege.adresse,cp:r.siege.codePostal,ville:r.siege.ville,pays:r.siege.pays},[b[1]]:{societe:"Agri'Up SAS",siret:"85234671900028",adresse:"12 rue de l'Innovation",cp:"35000",ville:"Rennes",pays:"FR"}};let h=b[0];function n(){return A[h]}function I(){const e=document.getElementById("billing-page");if(!e)return;const i=B();e.innerHTML=`
    <!-- 2-column top: stats+contract left, billing address right -->
    <div class="billing-top-2col">
      <div class="billing-top-left">
        <!-- Stats -->
        <div class="billing-section">
          <h2 class="billing-section-title"><i class="bi bi-bar-chart"></i> Licences</h2>
          <div class="billing-contract-grid">
            <div class="billing-stat-card">
              <div class="billing-stat-value">${o.licencesMembres}</div>
              <div class="billing-stat-label">Licences membres</div>
            </div>
            <div class="billing-stat-card">
              <div class="billing-stat-value">${o.licencesAdherents}</div>
              <div class="billing-stat-label">Licences adhérents</div>
            </div>
            <div class="billing-stat-card">
              <div class="billing-stat-value">${o.licencesIntegrations}</div>
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
                <span class="plan-badge plan-badge--${o.plan.toLowerCase()}">${o.plan}</span>
              </span>
            </div>
            <div class="billing-contract-item">
              <span class="billing-contract-label">Début du contrat</span>
              <span class="billing-contract-value">${y(o.anniversaire)}</span>
            </div>
            <div class="billing-contract-item">
              <span class="billing-contract-label">N° contrat</span>
              <span class="billing-contract-value billing-contract-mono">${o.numero}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="billing-top-right">
        <div class="billing-section">
          <div class="billing-entity-tabs" id="billing-entity-tabs">
            ${b.map(t=>`<button class="billing-entity-tab${t===h?" active":""}" data-entity="${c(t)}">${c(t)}</button>`).join("")}
          </div>
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
                  <input id="bf-societe" type="text" value="${c(n().societe)}" placeholder="Nom de la société">
                </div>
                <div class="form-row billing-form-full">
                  <label for="bf-adresse">Adresse postale</label>
                  <input id="bf-adresse" type="text" value="${c(n().adresse)}" placeholder="Numéro et rue">
                </div>
                <div class="form-row">
                  <label for="bf-cp">Code postal</label>
                  <input id="bf-cp" type="text" value="${c(n().cp)}" placeholder="00000">
                </div>
                <div class="form-row">
                  <label for="bf-ville">Ville</label>
                  <input id="bf-ville" type="text" value="${c(n().ville)}" placeholder="Ville">
                </div>
                <div class="form-row billing-form-full">
                  <label for="bf-pays">Pays</label>
                  <select id="bf-pays">
                    ${R.map(t=>`<option value="${t.code}"${t.code===n().pays?" selected":""}>${t.label}</option>`).join("")}
                  </select>
                </div>
                <div class="form-row billing-form-full" id="bf-siret-row">
                  <label for="bf-siret" id="bf-siret-label">SIRET</label>
                  <input id="bf-siret" type="text" value="${c(n().siret)}" placeholder="14 chiffres">
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

          <div class="form-row billing-form-full" style="margin-top:16px">
            <label for="bf-copie-factures">Copie des factures (facultatif)</label>
            <p style="font-size:12px;color:var(--txt3);margin:0 0 8px;line-height:1.4">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</p>
            <input id="bf-copie-factures" type="email" placeholder="Adresse email du destinataire">
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
              <th>Détail</th>
              <th>Facturé à</th>
              <th>Date de règlement</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${i.map(t=>`
              <tr>
                <td class="billing-invoice-num">${t.numero}</td>
                <td>${y(t.dateEmission)}</td>
                <td class="billing-amount">${t.montant.toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})} € HT</td>
                <td><button class="billing-detail-csv-btn" data-id="${t.numero}" style="border:none;background:none;color:var(--pri);cursor:pointer;font-size:13px;padding:2px 4px;font-family:inherit;white-space:nowrap">Fichier &darr;</button></td>
                <td>${c(t.facturePar)}</td>
                <td>${t.dateReglement?y(t.dateReglement):'<span style="color:var(--txt3)">—</span>'}</td>
                <td>${w(t.statut)}</td>
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
  `,x()}function x(){var s,m;document.querySelectorAll(".billing-entity-tab").forEach(l=>{l.addEventListener("click",()=>{h=l.dataset.entity,I()})});const e=document.getElementById("bf-pays");e&&(e.addEventListener("change",()=>v(e.value)),v(e.value));const i=document.querySelectorAll(".billing-addr-tab");i.forEach(l=>{l.addEventListener("click",()=>{i.forEach(d=>d.classList.remove("active")),l.classList.add("active"),document.querySelectorAll(".billing-addr-tab-content").forEach(d=>d.style.display="none"),document.getElementById(`tab-content-${l.dataset.tab}`).style.display=""})});const t=document.getElementById("same-delivery-addr"),a=document.getElementById("tab-livraison");t&&a&&t.addEventListener("change",()=>{a.style.display=t.checked?"none":"",t.checked?(i.forEach(l=>l.classList.remove("active")),document.querySelector('[data-tab="facturation"]').classList.add("active"),document.querySelectorAll(".billing-addr-tab-content").forEach(l=>l.style.display="none"),document.getElementById("tab-content-facturation").style.display=""):a.click()}),(s=document.getElementById("billing-addr-save"))==null||s.addEventListener("click",()=>{p("Adresse enregistrée.")}),(m=document.getElementById("billing-addr-cancel"))==null||m.addEventListener("click",()=>{document.getElementById("bf-societe").value=n().societe,document.getElementById("bf-adresse").value=n().adresse,document.getElementById("bf-cp").value=n().cp,document.getElementById("bf-ville").value=n().ville,document.getElementById("bf-pays").value=n().pays,document.getElementById("bf-siret").value=n().siret,document.getElementById("bf-copie-factures").value="",v(n().pays)}),document.querySelectorAll(".billing-pdf-btn").forEach(l=>{l.addEventListener("click",()=>p(`PDF facture ${l.dataset.id} téléchargé.`))}),document.querySelectorAll(".billing-detail-csv-btn").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.id,g=`Adhérent;Licences;Options;Montant HT
`,f=new Blob(["\uFEFF"+g],{type:"text/csv;charset=utf-8;"}),u=Object.assign(document.createElement("a"),{href:URL.createObjectURL(f),download:`detail-facture-${d}.csv`});document.body.appendChild(u),u.click(),document.body.removeChild(u),setTimeout(()=>URL.revokeObjectURL(u.href),100)})}),document.querySelectorAll(".billing-detail-btn").forEach(l=>{l.addEventListener("click",()=>p(`Détail facture ${l.dataset.id}.`))}),document.querySelectorAll(".billing-pay-btn").forEach(l=>{l.addEventListener("click",()=>p(`Paiement facture ${l.dataset.id} : redirection…`))})}function v(e){const i=document.getElementById("bf-siret-row"),t=document.getElementById("bf-siret-label"),a=document.getElementById("bf-siret");!i||!t||!a||(e==="FR"?(i.hidden=!1,t.textContent="SIRET",a.placeholder="14 chiffres"):D.includes(e)?(i.hidden=!1,t.textContent="N° TVA intracommunautaire",a.placeholder="FR12345678901"):i.hidden=!0)}function B(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let a=11;a>=0;a--){const s=new Date(i.getFullYear(),i.getMonth()-a,1),m=s.getFullYear(),l=String(s.getMonth()+1).padStart(2,"0"),g=a>0?a===2?"en attente":"payée":"en attente",f=g==="payée"?$(new Date(s.getFullYear(),s.getMonth(),18)):null,S=s.getMonth()===11?1980:t[a%t.length];e.push({numero:`FAC-${m}-${l}`,dateEmission:$(new Date(s.getFullYear(),s.getMonth(),1)),montant:S,dateReglement:f,statut:g,facturePar:a%4===0?b[1]:b[0]})}return e.reverse()}function $(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function y(e){if(!e)return"—";const[i,t,a]=e.split("-");return`${a}/${t}/${i}`}function w(e){return e==="payée"?'<span class="statut-badge statut-actif"><i class="bi bi-check-circle-fill"></i> Payée</span>':e==="en attente"?'<span class="statut-badge statut-essai"><i class="bi bi-clock"></i> En attente</span>':e==="échue"?'<span class="statut-badge statut-inactif"><i class="bi bi-exclamation-circle"></i> Échue</span>':`<span class="statut-badge">${e}</span>`}function c(e){return(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function p(e){const i=document.createElement("div");i.className="toast",i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.classList.add("show"),10),setTimeout(()=>{i.classList.remove("show"),setTimeout(()=>i.remove(),300)},2500)}const D=["DE","AT","BE","BG","CY","HR","DK","ES","EE","FI","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","CZ","RO","SK","SI","SE"],R=[{code:"FR",label:"France"},{code:"BE",label:"Belgique"},{code:"CH",label:"Suisse"},{code:"LU",label:"Luxembourg"},{code:"DE",label:"Allemagne"},{code:"ES",label:"Espagne"},{code:"IT",label:"Italie"},{code:"PT",label:"Portugal"},{code:"NL",label:"Pays-Bas"},{code:"AT",label:"Autriche"},{code:"PL",label:"Pologne"},{code:"GB",label:"Royaume-Uni"},{code:"US",label:"États-Unis"},{code:"CA",label:"Canada"},{code:"MA",label:"Maroc"},{code:"TN",label:"Tunisie"},{code:"SN",label:"Sénégal"}];
