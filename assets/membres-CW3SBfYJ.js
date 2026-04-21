import"./main-BX3ETblS.js";import{m as j}from"./members-DPSnqfQ_.js";import{o as M}from"./orgs-b3kLTQ0f.js";import{p as q}from"./plots-DnwHiJsH.js";import{s as y}from"./sensors-DXWoBEPb.js";import{u as H}from"./breadcrumb-DEBQjfiD.js";import{b as R,c as P}from"./store-DzkjdUGR.js";const w=["propriétaire","admin","agent","lecteur"],C=["actif","inactif","invité","désactivé"],D=R(),v=D||j.map((t,s)=>({...t,statut:t.statut||(t.role==="propriétaire"?"actif":s%7===0?"inactif":s%11===0?"invité":s%17===0?"désactivé":"actif")}));let $=[],E=["actif","invité"],b={column:null,direction:"asc"},d=new Set;const O=[{id:901,prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",role:"propriétaire",statut:"actif"},{id:902,prenom:"Jean-Michel",nom:"Dutilleul",email:"jm.dutilleul@ferme-du-bocage.fr",role:"admin",statut:"actif"}];document.addEventListener("DOMContentLoaded",()=>{H(),(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau"?F():(z(),m())});function z(){var t;S("panel-role",w,s=>{$=s},"badge-role"),S("panel-statut",C,s=>{E=s},"badge-statut",["actif","invité"]),document.querySelectorAll(".filter-dropdown-btn").forEach(s=>{s.addEventListener("click",a=>{a.stopPropagation();const i=s.closest(".filter-dropdown"),e=i.classList.contains("open");document.querySelectorAll(".filter-dropdown.open").forEach(r=>r.classList.remove("open")),e||i.classList.add("open")})}),document.addEventListener("click",()=>{document.querySelectorAll(".filter-dropdown.open").forEach(s=>s.classList.remove("open"))}),(t=document.getElementById("select-all-members"))==null||t.addEventListener("change",function(){const s=B().map(a=>a.id);this.checked?s.forEach(a=>d.add(a)):d.clear(),m()}),document.getElementById("members-table").addEventListener("click",s=>{const a=s.target.closest("th[data-column]");if(!a)return;const i=a.dataset.column;b.column===i?b.direction=b.direction==="asc"?"desc":"asc":(b.column=i,b.direction="asc"),m()})}function S(t,s,a,i,e=[]){const r=document.getElementById(t);r&&(r.innerHTML=s.map(l=>`<label><input type="checkbox" value="${l}"${e.includes(l)?" checked":""}> ${l}</label>`).join(""),e.length&&a(e),L(i,e.length),r.querySelectorAll("input[type=checkbox]").forEach(l=>{l.addEventListener("change",()=>{const c=Array.from(r.querySelectorAll("input:checked")).map(n=>n.value);a(c),L(i,c.length),m()})}))}function L(t,s){const a=document.getElementById(t);a&&(a.textContent=s,a.hidden=!s)}function B(){let t=v;return $.length&&(t=t.filter(s=>$.includes(s.role))),E.length&&(t=t.filter(s=>E.includes(s.statut))),t}function g(){P(v)}function m(){const t=B();N(t),b.column&&t.sort((e,r)=>{const l=A(e,b.column),c=A(r,b.column),n=l.localeCompare(c,"fr");return b.direction==="asc"?n:-n});const s=t.map(e=>e.id),a=document.getElementById("select-all-members");a&&(a.checked=s.length>0&&s.every(e=>d.has(e)),a.indeterminate=!a.checked&&s.some(e=>d.has(e)));const i=document.querySelector("#members-table tbody");if(i.innerHTML="",!t.length){i.innerHTML='<tr><td colspan="7" style="padding:32px;text-align:center;color:var(--txt3)">Aucun membre ne correspond aux filtres.</td></tr>',x();return}t.forEach(e=>{const r=M.filter(o=>e.orgIds.includes(o.id)),l=q.filter(o=>e.parcelIds.includes(o.id)),c=e.excludedSensorIds||[],n=y.filter(o=>e.parcelIds.includes(o.parcelId)&&!c.includes(o.id)),u=r.length?r.map(o=>`<div class="admin-item-row"><a href="adherents.html" class="admin-link">${o.name}</a><button class="icon-btn remove-org" data-member-id="${e.id}" data-org-id="${o.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>',f=l.length?l.map(o=>`<div class="admin-item-row"><a href="parcelle-detail.html?id=${o.id}" class="admin-link">${o.name}</a><button class="icon-btn remove-parcel" data-member-id="${e.id}" data-parcel-id="${o.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>',p=n.length?n.map(o=>`<div class="admin-item-row"><a href="capteur-detail.html?id=${o.id}" class="admin-link">${o.serial} <span class="member-sensor-model">${o.model}</span></a><button class="icon-btn remove-sensor" data-member-id="${e.id}" data-sensor-id="${o.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>',h=e.statut==="désactivé",k=document.createElement("tr");h&&(k.style.opacity="0.5"),d.has(e.id)&&k.classList.add("row-selected"),k.innerHTML=`
      <td class="col-check"><input type="checkbox" class="row-cb" data-id="${e.id}"${d.has(e.id)?" checked":""}></td>
      <td><span class="member-name">${e.prenom} ${e.nom}</span><div class="member-email-sub">${e.email}</div></td>
      <td>${e.role}</td>
      <td class="admin-links-cell">${u}</td>
      <td class="admin-links-cell">${f}</td>
      <td class="admin-links-cell">${p}</td>
      <td>${T(e.statut)}</td>
    `,i.appendChild(k)}),i.querySelectorAll(".row-cb").forEach(e=>{e.addEventListener("change",()=>{const r=parseInt(e.dataset.id);e.checked?d.add(r):d.delete(r),m()})}),i.querySelectorAll(".remove-org").forEach(e=>{e.addEventListener("click",r=>{r.stopPropagation();const l=v.find(c=>c.id===parseInt(e.dataset.memberId));l&&(l.orgIds=l.orgIds.filter(c=>c!==parseInt(e.dataset.orgId))),g(),m()})}),i.querySelectorAll(".remove-parcel").forEach(e=>{e.addEventListener("click",r=>{r.stopPropagation();const l=v.find(c=>c.id===parseInt(e.dataset.memberId));l&&(l.parcelIds=l.parcelIds.filter(c=>c!==parseInt(e.dataset.parcelId))),g(),m()})}),i.querySelectorAll(".remove-sensor").forEach(e=>{e.addEventListener("click",r=>{r.stopPropagation();const l=v.find(c=>c.id===parseInt(e.dataset.memberId));if(l){l.excludedSensorIds||(l.excludedSensorIds=[]);const c=parseInt(e.dataset.sensorId);l.excludedSensorIds.includes(c)||l.excludedSensorIds.push(c)}g(),m()})}),x(),document.querySelectorAll("#members-table th[data-column]").forEach(e=>{e.classList.remove("sort-asc","sort-desc"),e.dataset.column===b.column&&e.classList.add(`sort-${b.direction}`)})}function x(){var s,a,i,e,r,l,c;let t=document.getElementById("members-action-bar");if(t||(t=document.createElement("div"),t.id="members-action-bar",t.className="bulk-action-bar hidden",document.getElementById("stats-cards").insertAdjacentElement("afterend",t)),d.size===0){t.classList.add("hidden");return}t.classList.remove("hidden"),t.innerHTML=`
    <span class="bulk-count">${d.size} sélectionné${d.size>1?"s":""}</span>
    <div class="bulk-actions">
      <label class="bulk-action-group">
        <span>Rôle</span>
        <select id="bulk-role-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${w.map(n=>`<option value="${n}">${n}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Organisation</span>
        <select id="bulk-org-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${M.map(n=>`<option value="${n.id}">${n.name}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Parcelle</span>
        <select id="bulk-plot-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${q.slice(0,30).map(n=>`<option value="${n.id}">${n.name}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Capteur</span>
        <select id="bulk-sensor-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${y.slice(0,30).map(n=>`<option value="${n.id}">${n.serial} (${n.model})</option>`).join("")}
        </select>
      </label>
      <button id="bulk-delete-btn" class="btn-secondary" style="color:var(--err)"><i class="bi bi-trash"></i> Supprimer</button>
      <button id="bulk-save-btn" class="btn-secondary" style="color:var(--ok)"><i class="bi bi-check-lg"></i> Enregistrer</button>
      <button id="bulk-cancel-btn" class="btn-secondary">Annuler</button>
    </div>
  `,(s=t.querySelector("#bulk-role-sel"))==null||s.addEventListener("change",n=>{n.target.value&&(d.forEach(u=>{const f=v.find(p=>p.id===u);f&&(f.role=n.target.value)}),g(),m())}),(a=t.querySelector("#bulk-org-sel"))==null||a.addEventListener("change",n=>{const u=parseInt(n.target.value);u&&(d.forEach(f=>{const p=v.find(h=>h.id===f);p&&!p.orgIds.includes(u)&&(p.orgIds=[...p.orgIds,u])}),g(),I("Organisation associée."),m())}),(i=t.querySelector("#bulk-plot-sel"))==null||i.addEventListener("change",n=>{const u=parseInt(n.target.value);u&&(d.forEach(f=>{const p=v.find(h=>h.id===f);p&&!p.parcelIds.includes(u)&&(p.parcelIds=[...p.parcelIds,u])}),g(),I("Parcelle associée."),m())}),(e=t.querySelector("#bulk-sensor-sel"))==null||e.addEventListener("change",n=>{I("Capteur associé."),m()}),(r=t.querySelector("#bulk-delete-btn"))==null||r.addEventListener("click",()=>{confirm(`Supprimer ${d.size} membre(s) ?`)&&(d.forEach(n=>{const u=v.findIndex(f=>f.id===n);u!==-1&&v.splice(u,1)}),d.clear(),g(),m())}),(l=t.querySelector("#bulk-save-btn"))==null||l.addEventListener("click",()=>{g(),I("Modifications enregistrées.")}),(c=t.querySelector("#bulk-cancel-btn"))==null||c.addEventListener("click",()=>{d.clear(),m()})}function A(t,s){if(s==="nom")return`${t.nom} ${t.prenom}`.toLowerCase();if(s==="email")return t.email.toLowerCase();if(s==="role")return t.role;if(s==="statut")return t.statut;if(s==="orgs")return String(t.orgIds.length).padStart(6,"0");if(s==="parcelles")return String(t.parcelIds.length).padStart(6,"0");if(s==="capteurs"){const a=t.excludedSensorIds||[],i=y.filter(e=>t.parcelIds.includes(e.parcelId)&&!a.includes(e.id)).length;return String(i).padStart(6,"0")}return""}function T(t){return{actif:'<span class="statut-badge statut-actif"><i class="bi bi-check-circle-fill"></i> Actif</span>',inactif:'<span class="statut-badge statut-inactif"><i class="bi bi-circle"></i> Inactif</span>',invité:'<span class="statut-badge statut-invite"><i class="bi bi-envelope"></i> Invité</span>',désactivé:'<span class="statut-badge statut-disabled"><i class="bi bi-slash-circle"></i> Désactivé</span>'}[t]||`<span class="statut-badge">${t}</span>`}function N(t){const s=t.length,a=t.filter(e=>e.statut==="actif").length;t.filter(e=>e.statut==="inactif").length;const i=t.filter(e=>e.statut==="invité").length;t.filter(e=>e.statut==="désactivé").length,document.getElementById("stats-cards").innerHTML=[{label:"Membres",value:s},{label:"Actifs",value:a},{label:"Invités",value:i}].map(e=>`
    <div class="stat-card${e.warn?" warn":""}">
      <div class="stat-label">${e.label}</div>
      <div class="stat-value">${e.value}</div>
    </div>
  `).join("")}function F(){const t=document.getElementById("stats-cards");t&&(t.innerHTML=[{label:"Membres",value:2},{label:"Actifs",value:2}].map(a=>`<div class="stat-card"><div class="stat-label">${a.label}</div><div class="stat-value">${a.value}</div></div>`).join(""));const s=document.querySelector("#members-table tbody");s&&(s.innerHTML=O.map(a=>`
    <tr>
      <td class="col-check"></td>
      <td><span class="member-name">${a.prenom} ${a.nom}</span><div class="member-email-sub">${a.email}</div></td>
      <td>${a.role}</td>
      <td class="admin-links-cell"><span class="tag-none">—</span></td>
      <td class="admin-links-cell"><span class="tag-none">—</span></td>
      <td class="admin-links-cell"><span class="tag-none">—</span></td>
      <td>${T(a.statut)}</td>
    </tr>
  `).join(""))}function I(t){const s=document.createElement("div");s.className="toast",s.textContent=t,document.body.appendChild(s),setTimeout(()=>s.remove(),3e3)}
