import"./main-DdpHcqUd.js";import{m as j}from"./members-DPSnqfQ_.js";import{o as M}from"./orgs-b3kLTQ0f.js";import{p as q}from"./plots-wg6F1G0U.js";import{s as y}from"./sensors-DXWoBEPb.js";import{u as H}from"./breadcrumb-DEBQjfiD.js";import{b as R,c as P}from"./store-DzkjdUGR.js";const w=["propriétaire","admin","agent","lecteur"],C=["actif","inactif","invité","désactivé"],D=R(),v=D||j.map((e,s)=>({...e,statut:e.statut||(e.role==="propriétaire"?"actif":s%7===0?"inactif":s%11===0?"invité":s%17===0?"désactivé":"actif")}));let $=[],E=["actif","invité"],b={column:null,direction:"asc"},d=new Set;const O=[{id:901,prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",role:"propriétaire",statut:"actif"},{id:902,prenom:"Jean-Michel",nom:"Dutilleul",email:"jm.dutilleul@ferme-du-bocage.fr",role:"admin",statut:"actif"}];document.addEventListener("DOMContentLoaded",()=>{H(),(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau"?F():(z(),m())});function z(){var e;S("panel-role",w,s=>{$=s},"badge-role"),S("panel-statut",C,s=>{E=s},"badge-statut",["actif","invité"]),document.querySelectorAll(".filter-dropdown-btn").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation();const c=s.closest(".filter-dropdown"),t=c.classList.contains("open");document.querySelectorAll(".filter-dropdown.open").forEach(i=>i.classList.remove("open")),t||c.classList.add("open")})}),document.addEventListener("click",()=>{document.querySelectorAll(".filter-dropdown.open").forEach(s=>s.classList.remove("open"))}),(e=document.getElementById("select-all-members"))==null||e.addEventListener("change",function(){const s=B().map(n=>n.id);this.checked?s.forEach(n=>d.add(n)):d.clear(),m()}),document.getElementById("members-table").addEventListener("click",s=>{const n=s.target.closest("th[data-column]");if(!n)return;const c=n.dataset.column;b.column===c?b.direction=b.direction==="asc"?"desc":"asc":(b.column=c,b.direction="asc"),m()})}function S(e,s,n,c,t=[]){const i=document.getElementById(e);i&&(i.innerHTML=s.map(a=>`<label><input type="checkbox" value="${a}"${t.includes(a)?" checked":""}> ${a}</label>`).join(""),t.length&&n(t),L(c,t.length),i.querySelectorAll("input[type=checkbox]").forEach(a=>{a.addEventListener("change",()=>{const r=Array.from(i.querySelectorAll("input:checked")).map(l=>l.value);n(r),L(c,r.length),m()})}))}function L(e,s){const n=document.getElementById(e);n&&(n.textContent=s,n.hidden=!s)}function B(){let e=v;return $.length&&(e=e.filter(s=>$.includes(s.role))),E.length&&(e=e.filter(s=>E.includes(s.statut))),e}function g(){P(v)}function m(){const e=B();N(e),b.column&&e.sort((t,i)=>{const a=A(t,b.column),r=A(i,b.column),l=a.localeCompare(r,"fr");return b.direction==="asc"?l:-l});const s=e.map(t=>t.id),n=document.getElementById("select-all-members");n&&(n.checked=s.length>0&&s.every(t=>d.has(t)),n.indeterminate=!n.checked&&s.some(t=>d.has(t)));const c=document.querySelector("#members-table tbody");if(c.innerHTML="",!e.length){c.innerHTML='<tr><td colspan="7" style="padding:32px;text-align:center;color:var(--txt3)">Aucun membre ne correspond aux filtres.</td></tr>',x();return}e.forEach(t=>{const i=M.filter(o=>t.orgIds.includes(o.id)),a=q.filter(o=>t.parcelIds.includes(o.id)),r=t.excludedSensorIds||[],l=y.filter(o=>t.parcelIds.includes(o.parcelId)&&!r.includes(o.id)),u=i.length?i.map(o=>`<div class="admin-item-row"><a href="adherents.html" class="admin-link">${o.name}</a><button class="icon-btn remove-org" data-member-id="${t.id}" data-org-id="${o.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>',f=a.length?a.map(o=>`<div class="admin-item-row"><a href="parcelle-detail.html?id=${o.id}" class="admin-link">${o.name}</a><button class="icon-btn remove-parcel" data-member-id="${t.id}" data-parcel-id="${o.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>',p=l.length?l.map(o=>`<div class="admin-item-row"><a href="capteur-detail.html?id=${o.id}" class="admin-link">${o.serial} <span class="member-sensor-model">${o.model}</span></a><button class="icon-btn remove-sensor" data-member-id="${t.id}" data-sensor-id="${o.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>',h=t.statut==="désactivé",I=document.createElement("tr");h&&(I.style.opacity="0.5"),d.has(t.id)&&I.classList.add("row-selected"),I.innerHTML=`
      <td class="col-check"><input type="checkbox" class="row-cb" data-id="${t.id}"${d.has(t.id)?" checked":""}></td>
      <td><span class="member-name">${t.prenom} ${t.nom}</span><div class="member-email-sub">${t.email}</div></td>
      <td>${t.role}</td>
      <td class="admin-links-cell">${u}</td>
      <td class="admin-links-cell">${f}</td>
      <td class="admin-links-cell">${p}</td>
      <td>${T(t.statut)}</td>
    `,c.appendChild(I)}),c.querySelectorAll(".row-cb").forEach(t=>{t.addEventListener("change",()=>{const i=parseInt(t.dataset.id);t.checked?d.add(i):d.delete(i),m()})}),c.querySelectorAll(".remove-org").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const a=v.find(r=>r.id===parseInt(t.dataset.memberId));a&&(a.orgIds=a.orgIds.filter(r=>r!==parseInt(t.dataset.orgId))),g(),m()})}),c.querySelectorAll(".remove-parcel").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const a=v.find(r=>r.id===parseInt(t.dataset.memberId));a&&(a.parcelIds=a.parcelIds.filter(r=>r!==parseInt(t.dataset.parcelId))),g(),m()})}),c.querySelectorAll(".remove-sensor").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const a=v.find(r=>r.id===parseInt(t.dataset.memberId));if(a){a.excludedSensorIds||(a.excludedSensorIds=[]);const r=parseInt(t.dataset.sensorId);a.excludedSensorIds.includes(r)||a.excludedSensorIds.push(r)}g(),m()})}),x(),document.querySelectorAll("#members-table th[data-column]").forEach(t=>{t.classList.remove("sort-asc","sort-desc"),t.dataset.column===b.column&&t.classList.add(`sort-${b.direction}`)})}function x(){var s,n,c,t,i,a,r;let e=document.getElementById("members-action-bar");if(e||(e=document.createElement("div"),e.id="members-action-bar",e.className="bulk-action-bar hidden",document.getElementById("stats-cards").insertAdjacentElement("afterend",e)),d.size===0){e.classList.add("hidden");return}e.classList.remove("hidden"),e.innerHTML=`
    <span class="bulk-count">${d.size} sélectionné${d.size>1?"s":""}</span>
    <div class="bulk-actions">
      <label class="bulk-action-group">
        <span>Rôle</span>
        <select id="bulk-role-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${w.map(l=>`<option value="${l}">${l}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Organisation</span>
        <select id="bulk-org-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${M.map(l=>`<option value="${l.id}">${l.name}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Parcelle</span>
        <select id="bulk-plot-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${q.slice(0,30).map(l=>`<option value="${l.id}">${l.name}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Capteur</span>
        <select id="bulk-sensor-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${y.slice(0,30).map(l=>`<option value="${l.id}">${l.serial} (${l.model})</option>`).join("")}
        </select>
      </label>
      <button id="bulk-delete-btn" class="btn-secondary" style="color:var(--err)"><i class="bi bi-trash"></i> Supprimer</button>
      <button id="bulk-save-btn" class="btn-secondary" style="color:var(--ok)"><i class="bi bi-check-lg"></i> Enregistrer</button>
      <button id="bulk-cancel-btn" class="btn-secondary">Annuler</button>
    </div>
  `,(s=e.querySelector("#bulk-role-sel"))==null||s.addEventListener("change",l=>{l.target.value&&(d.forEach(u=>{const f=v.find(p=>p.id===u);f&&(f.role=l.target.value)}),g(),m())}),(n=e.querySelector("#bulk-org-sel"))==null||n.addEventListener("change",l=>{const u=parseInt(l.target.value);u&&(d.forEach(f=>{const p=v.find(h=>h.id===f);p&&!p.orgIds.includes(u)&&(p.orgIds=[...p.orgIds,u])}),g(),k("Organisation associée."),m())}),(c=e.querySelector("#bulk-plot-sel"))==null||c.addEventListener("change",l=>{const u=parseInt(l.target.value);u&&(d.forEach(f=>{const p=v.find(h=>h.id===f);p&&!p.parcelIds.includes(u)&&(p.parcelIds=[...p.parcelIds,u])}),g(),k("Parcelle associée."),m())}),(t=e.querySelector("#bulk-sensor-sel"))==null||t.addEventListener("change",l=>{k("Capteur associé."),m()}),(i=e.querySelector("#bulk-delete-btn"))==null||i.addEventListener("click",()=>{confirm(`Supprimer ${d.size} membre(s) ?`)&&(d.forEach(l=>{const u=v.findIndex(f=>f.id===l);u!==-1&&v.splice(u,1)}),d.clear(),g(),m())}),(a=e.querySelector("#bulk-save-btn"))==null||a.addEventListener("click",()=>{g(),k("Modifications enregistrées.")}),(r=e.querySelector("#bulk-cancel-btn"))==null||r.addEventListener("click",()=>{d.clear(),m()})}function A(e,s){if(s==="nom")return`${e.nom} ${e.prenom}`.toLowerCase();if(s==="email")return e.email.toLowerCase();if(s==="role")return e.role;if(s==="statut")return e.statut;if(s==="orgs")return String(e.orgIds.length).padStart(6,"0");if(s==="parcelles")return String(e.parcelIds.length).padStart(6,"0");if(s==="capteurs"){const n=e.excludedSensorIds||[],c=y.filter(t=>e.parcelIds.includes(t.parcelId)&&!n.includes(t.id)).length;return String(c).padStart(6,"0")}return""}function T(e){return{actif:'<span class="statut-badge statut-actif"><i class="bi bi-check-circle-fill"></i> Actif</span>',inactif:'<span class="statut-badge statut-inactif"><i class="bi bi-circle"></i> Inactif</span>',invité:'<span class="statut-badge statut-invite"><i class="bi bi-envelope"></i> Invité</span>',désactivé:'<span class="statut-badge statut-disabled"><i class="bi bi-slash-circle"></i> Désactivé</span>'}[e]||`<span class="statut-badge">${e}</span>`}function N(e){const s=e.length,n=e.filter(a=>a.statut==="actif").length,c=e.filter(a=>a.statut==="inactif").length,t=e.filter(a=>a.statut==="invité").length,i=e.filter(a=>a.statut==="désactivé").length;document.getElementById("stats-cards").innerHTML=[{label:"Membres",value:s},{label:"Actifs",value:n},{label:"Inactifs",value:c,warn:c>0},{label:"Invités",value:t},{label:"Désactivés",value:i,warn:i>0}].map(a=>`
    <div class="stat-card${a.warn?" warn":""}">
      <div class="stat-label">${a.label}</div>
      <div class="stat-value">${a.value}</div>
    </div>
  `).join("")}function F(){const e=document.getElementById("stats-cards");e&&(e.innerHTML=[{label:"Membres",value:2},{label:"Actifs",value:2}].map(n=>`<div class="stat-card"><div class="stat-label">${n.label}</div><div class="stat-value">${n.value}</div></div>`).join(""));const s=document.querySelector("#members-table tbody");s&&(s.innerHTML=O.map(n=>`
    <tr>
      <td class="col-check"></td>
      <td><span class="member-name">${n.prenom} ${n.nom}</span><div class="member-email-sub">${n.email}</div></td>
      <td>${n.role}</td>
      <td class="admin-links-cell"><span class="tag-none">—</span></td>
      <td class="admin-links-cell"><span class="tag-none">—</span></td>
      <td class="admin-links-cell"><span class="tag-none">—</span></td>
      <td>${T(n.statut)}</td>
    </tr>
  `).join(""))}function k(e){const s=document.createElement("div");s.className="toast",s.textContent=e,document.body.appendChild(s),setTimeout(()=>s.remove(),3e3)}
