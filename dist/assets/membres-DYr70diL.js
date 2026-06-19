import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{m as J}from"./members-Cr98hVG_.js";import{o as _}from"./orgs-DnFmvGlp.js";import{p as x}from"./plots-DhtWL7s_.js";import{s as A}from"./sensors-CRadjF8G.js";import{u as K}from"./breadcrumb-CzFWtd6d.js";import{h as U,i as G,j as Q,k as W}from"./store-BQ9NCY7W.js";const j=["propriétaire","admin","agent","lecteur"],X=["actif","inactif","invité"],z="v4",M=U(),Y=M&&M._version===z?M.data:null,v=Y||J.map(e=>({...e}));let S=[],L=["actif","invité"],h={column:null,direction:"asc"},o=new Set,$=null;const Z=[{id:901,prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",role:"propriétaire",statut:"actif",parcelIds:[1,2,3]},{id:902,prenom:"Jean-Michel",nom:"Dutilleul",email:"jm.dutilleul@ferme-du-bocage.fr",role:"admin",statut:"actif",sensorIds:[1,2]}],D="v1",w=G(),ee=w&&w._version===D?w.data:null,I=ee||Z.map(e=>({...e}));document.addEventListener("DOMContentLoaded",()=>{K(),(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau"?($=g,B(),g()):($=b,B(),b())});function B(){var e;H("panel-role",j,n=>{S=n},"badge-role"),H("panel-statut",X,n=>{L=n},"badge-statut",["actif","invité"]),document.querySelectorAll(".filter-dropdown-btn").forEach(n=>{n.addEventListener("click",c=>{c.stopPropagation();const r=n.closest(".filter-dropdown"),t=r.classList.contains("open");document.querySelectorAll(".filter-dropdown.open").forEach(m=>m.classList.remove("open")),t||r.classList.add("open")})}),document.querySelectorAll(".filter-dropdown-panel").forEach(n=>{n.addEventListener("click",c=>c.stopPropagation())}),document.addEventListener("click",()=>{document.querySelectorAll(".filter-dropdown.open").forEach(n=>n.classList.remove("open"))}),(e=document.getElementById("select-all-members"))==null||e.addEventListener("change",function(){const c=($===g?F():N()).map(r=>r.id);this.checked?c.forEach(r=>o.add(r)):o.clear(),$()}),document.getElementById("members-table").addEventListener("click",n=>{const c=n.target.closest("th[data-column]");if(!c)return;const r=c.dataset.column;h.column===r?h.direction=h.direction==="asc"?"desc":"asc":(h.column=r,h.direction="asc"),$()})}function H(e,n,c,r,t=[]){const m=document.getElementById(e);if(!m)return;const a=()=>['<label class="filter-all-label"><input type="checkbox" class="cb-all"> Tous</label>',...n.map(s=>`<label><input type="checkbox" value="${s}"${t.includes(s)?" checked":""}> ${s}</label>`)].join("");m.innerHTML=a(),t.length&&c(t),T(r,t.length);function l(){const s=m.querySelector(".cb-all"),u=()=>m.querySelectorAll("input[type=checkbox]:not(.cb-all)");s==null||s.addEventListener("change",()=>{u().forEach(i=>{i.checked=s.checked});const d=s.checked?n:[];c(d),T(r,d.length),$()}),u().forEach(d=>{d.addEventListener("change",()=>{const i=Array.from(u()).filter(f=>f.checked).map(f=>f.value);s&&(s.checked=i.length===n.length),c(i),T(r,i.length),$()})})}l()}function T(e,n){const c=document.getElementById(e);c&&(c.textContent=n,c.hidden=!n)}function N(){let e=v;return S.length&&(e=e.filter(n=>S.includes(n.role))),L.length&&(e=e.filter(n=>L.includes(n.statut))),e}function k(){Q({_version:z,data:v})}function b(){const e=N();te(e),h.column&&e.sort((t,m)=>{const a=C(t,h.column),l=C(m,h.column),s=a.localeCompare(l,"fr");return h.direction==="asc"?s:-s});const n=e.map(t=>t.id),c=document.getElementById("select-all-members");c&&(c.checked=n.length>0&&n.every(t=>o.has(t)),c.indeterminate=!c.checked&&n.some(t=>o.has(t)));const r=document.querySelector("#members-table tbody");if(r.innerHTML="",!e.length){r.innerHTML='<tr><td colspan="7" style="padding:32px;text-align:center;color:var(--txt3)">Aucun membre ne correspond aux filtres.</td></tr>',R();return}e.forEach(t=>{const m=t.role==="agent",a=m?_.filter(p=>t.orgIds.includes(p.id)):[],l=x.filter(p=>t.parcelIds.includes(p.id)).sort((p,V)=>p.name.localeCompare(V.name,"fr")),s=t.excludedSensorIds||[],u=A.filter(p=>t.parcelIds.includes(p.parcelId)&&!s.includes(p.id)),d=m?a.length?a.map(p=>`<div class="admin-item-row"><a href="adherents.html" class="admin-link">${p.name}</a><button class="icon-btn remove-org" data-member-id="${t.id}" data-org-id="${p.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>':'<span class="tag-none" style="color:var(--txt3);font-size:11px">—</span>',i=l.length?l.map(p=>`<div class="admin-item-row"><a href="parcelle-detail.html?id=${p.id}" class="admin-link">${p.name}</a><button class="icon-btn remove-parcel" data-member-id="${t.id}" data-parcel-id="${p.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>',f=u.length?u.map(p=>`<div class="admin-item-row"><a href="capteur-detail.html?id=${p.id}" class="admin-link">${p.serial} <span class="member-sensor-model">${p.model}</span></a><button class="icon-btn remove-sensor" data-member-id="${t.id}" data-sensor-id="${p.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>',q=document.createElement("tr");o.has(t.id)&&q.classList.add("row-selected"),q.innerHTML=`
      <td class="col-check"><input type="checkbox" class="row-cb" data-id="${t.id}"${o.has(t.id)?" checked":""}></td>
      <td><span class="member-name">${t.prenom} ${t.nom}</span><div class="member-email-sub">${t.email}</div></td>
      <td>${t.role}</td>
      <td class="admin-links-cell">${d}</td>
      <td class="admin-links-cell">${i}</td>
      <td class="admin-links-cell">${f}</td>
      <td>${O(t.statut)}</td>
    `,r.appendChild(q)}),r.querySelectorAll(".row-cb").forEach(t=>{t.addEventListener("change",()=>{const m=parseInt(t.dataset.id);t.checked?o.add(m):o.delete(m),b()})}),r.querySelectorAll(".remove-org").forEach(t=>{t.addEventListener("click",m=>{m.stopPropagation();const a=v.find(l=>l.id===parseInt(t.dataset.memberId));a&&(a.orgIds=a.orgIds.filter(l=>l!==parseInt(t.dataset.orgId))),k(),b()})}),r.querySelectorAll(".remove-parcel").forEach(t=>{t.addEventListener("click",m=>{m.stopPropagation();const a=v.find(l=>l.id===parseInt(t.dataset.memberId));a&&(a.parcelIds=a.parcelIds.filter(l=>l!==parseInt(t.dataset.parcelId))),k(),b()})}),r.querySelectorAll(".remove-sensor").forEach(t=>{t.addEventListener("click",m=>{m.stopPropagation();const a=v.find(l=>l.id===parseInt(t.dataset.memberId));if(a){a.excludedSensorIds||(a.excludedSensorIds=[]);const l=parseInt(t.dataset.sensorId);a.excludedSensorIds.includes(l)||a.excludedSensorIds.push(l)}k(),b()})}),R(),document.querySelectorAll("#members-table th[data-column]").forEach(t=>{t.classList.remove("sort-asc","sort-desc"),t.dataset.column===h.column&&t.classList.add(`sort-${h.direction}`)})}function R(){var n,c,r,t,m,a,l;let e=document.getElementById("members-action-bar");if(e||(e=document.createElement("div"),e.id="members-action-bar",e.className="bulk-action-bar hidden",document.getElementById("stats-cards").insertAdjacentElement("afterend",e)),o.size===0){e.classList.add("hidden");return}e.classList.remove("hidden"),e.innerHTML=`
    <span class="bulk-count">${o.size} sélectionné${o.size>1?"s":""}</span>
    <div class="bulk-actions">
      <label class="bulk-action-group">
        <span>Rôle</span>
        <select id="bulk-role-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${j.map(s=>`<option value="${s}">${s}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Organisation</span>
        <select id="bulk-org-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${_.map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Parcelle</span>
        <select id="bulk-plot-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${[...x].sort((s,u)=>s.name.localeCompare(u.name,"fr")).slice(0,30).map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Capteur</span>
        <select id="bulk-sensor-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${A.slice(0,30).map(s=>`<option value="${s.id}">${s.serial} (${s.model})</option>`).join("")}
        </select>
      </label>
      <button id="bulk-delete-btn" class="btn-secondary" style="color:var(--err)"><i class="bi bi-trash"></i> Supprimer</button>
      <button id="bulk-save-btn" class="btn-secondary" style="color:var(--ok)"><i class="bi bi-check-lg"></i> Enregistrer</button>
      <button id="bulk-cancel-btn" class="btn-secondary">Annuler</button>
    </div>
  `,(n=e.querySelector("#bulk-role-sel"))==null||n.addEventListener("change",s=>{s.target.value&&(o.forEach(u=>{const d=v.find(i=>i.id===u);d&&(d.role=s.target.value)}),k(),b())}),(c=e.querySelector("#bulk-org-sel"))==null||c.addEventListener("change",s=>{const u=parseInt(s.target.value);u&&(o.forEach(d=>{const i=v.find(f=>f.id===d);i&&!i.orgIds.includes(u)&&(i.orgIds=[...i.orgIds,u])}),k(),E("Organisation associée."),b())}),(r=e.querySelector("#bulk-plot-sel"))==null||r.addEventListener("change",s=>{const u=parseInt(s.target.value);u&&(o.forEach(d=>{const i=v.find(f=>f.id===d);i&&!i.parcelIds.includes(u)&&(i.parcelIds=[...i.parcelIds,u])}),k(),E("Parcelle associée."),b())}),(t=e.querySelector("#bulk-sensor-sel"))==null||t.addEventListener("change",s=>{E("Capteur associé."),b()}),(m=e.querySelector("#bulk-delete-btn"))==null||m.addEventListener("click",()=>{confirm(`Supprimer ${o.size} membre(s) ?`)&&(o.forEach(s=>{const u=v.findIndex(d=>d.id===s);u!==-1&&v.splice(u,1)}),o.clear(),k(),b())}),(a=e.querySelector("#bulk-save-btn"))==null||a.addEventListener("click",()=>{k(),E("Modifications enregistrées.")}),(l=e.querySelector("#bulk-cancel-btn"))==null||l.addEventListener("click",()=>{o.clear(),b()})}function C(e,n){if(n==="nom")return`${e.nom} ${e.prenom}`.toLowerCase();if(n==="email")return e.email.toLowerCase();if(n==="role")return e.role;if(n==="statut")return e.statut;if(n==="orgs")return String(e.orgIds.length).padStart(6,"0");if(n==="parcelles")return String(e.parcelIds.length).padStart(6,"0");if(n==="capteurs"){const c=e.excludedSensorIds||[],r=A.filter(t=>e.parcelIds.includes(t.parcelId)&&!c.includes(t.id)).length;return String(r).padStart(6,"0")}return""}function O(e){return{actif:'<span class="statut-badge statut-actif"><i class="bi bi-check-circle-fill"></i> Actif</span>',inactif:'<span class="statut-badge statut-inactif"><i class="bi bi-circle"></i> Inactif</span>',invité:'<span class="statut-badge statut-invite"><i class="bi bi-envelope"></i> Invité</span>',désactivé:'<span class="statut-badge statut-disabled"><i class="bi bi-slash-circle"></i> Désactivé</span>'}[e]||`<span class="statut-badge">${e}</span>`}function te(e){const n=e.length,c=e.filter(t=>t.statut==="actif").length;e.filter(t=>t.statut==="inactif").length;const r=e.filter(t=>t.statut==="invité").length;e.filter(t=>t.statut==="désactivé").length,document.getElementById("stats-cards").innerHTML=[{label:"Membres",value:n},{label:"Actifs",value:c},{label:"Invités",value:r}].map(t=>`
    <div class="stat-card${t.warn?" warn":""}">
      <div class="stat-label">${t.label}</div>
      <div class="stat-value">${t.value}</div>
    </div>
  `).join("")}function F(){let e=I;return S.length&&(e=e.filter(n=>S.includes(n.role))),L.length&&(e=e.filter(n=>L.includes(n.statut))),e}function y(){W({_version:D,data:I})}function g(){const e=F(),n=document.querySelector('#members-table th[data-column="orgs"]');n&&(n.style.display="none");const c=document.getElementById("stats-cards");c&&(c.innerHTML=[{label:"Membres",value:e.length},{label:"Actifs",value:e.filter(a=>a.statut==="actif").length}].map(a=>`<div class="stat-card"><div class="stat-label">${a.label}</div><div class="stat-value">${a.value}</div></div>`).join(""));const r=e.map(a=>a.id),t=document.getElementById("select-all-members");t&&(t.checked=r.length>0&&r.every(a=>o.has(a)),t.indeterminate=!t.checked&&r.some(a=>o.has(a)));const m=document.querySelector("#members-table tbody");if(m){if(!e.length){m.innerHTML='<tr><td colspan="6" style="padding:32px;text-align:center;color:var(--txt3)">Aucun membre ne correspond aux filtres.</td></tr>',P();return}m.innerHTML=e.map(a=>{const l=x.filter(i=>(a.parcelIds||[]).includes(i.id)).sort((i,f)=>i.name.localeCompare(f.name,"fr")),s=A.filter(i=>(a.sensorIds||[]).includes(i.id)),u=l.length?l.map(i=>`<div class="admin-item-row"><a href="parcelle-detail.html?id=${i.id}" class="admin-link">${i.name}</a></div>`).join(""):'<span class="tag-none">—</span>',d=s.length?s.map(i=>`<div class="admin-item-row"><a href="capteur-detail.html?id=${i.id}" class="admin-link">${i.serial} <span class="member-sensor-model">${i.model}</span></a></div>`).join(""):'<span class="tag-none">—</span>';return`
      <tr${o.has(a.id)?' class="row-selected"':""}>
        <td class="col-check"><input type="checkbox" class="row-cb" data-id="${a.id}"${o.has(a.id)?" checked":""}></td>
        <td><span class="member-name">${a.prenom} ${a.nom}</span><div class="member-email-sub">${a.email}</div></td>
        <td>${a.role}</td>
        <td class="admin-links-cell">${u}</td>
        <td class="admin-links-cell">${d}</td>
        <td>${O(a.statut)}</td>
      </tr>
    `}).join(""),m.querySelectorAll(".row-cb").forEach(a=>{a.addEventListener("change",()=>{const l=parseInt(a.dataset.id);a.checked?o.add(l):o.delete(l),g()})}),P()}}function P(){var n,c,r,t,m,a;let e=document.getElementById("members-action-bar");if(e||(e=document.createElement("div"),e.id="members-action-bar",e.className="bulk-action-bar hidden",document.getElementById("stats-cards").insertAdjacentElement("afterend",e)),o.size===0){e.classList.add("hidden");return}e.classList.remove("hidden"),e.innerHTML=`
    <span class="bulk-count">${o.size} sélectionné${o.size>1?"s":""}</span>
    <div class="bulk-actions">
      <label class="bulk-action-group">
        <span>Rôle</span>
        <select id="bulk-role-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${j.map(l=>`<option value="${l}">${l}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Parcelle</span>
        <select id="bulk-plot-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${[...x].sort((l,s)=>l.name.localeCompare(s.name,"fr")).slice(0,30).map(l=>`<option value="${l.id}">${l.name}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Capteur</span>
        <select id="bulk-sensor-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${A.slice(0,30).map(l=>`<option value="${l.id}">${l.serial} (${l.model})</option>`).join("")}
        </select>
      </label>
      <button id="bulk-delete-btn" class="btn-secondary" style="color:var(--err)"><i class="bi bi-trash"></i> Supprimer</button>
      <button id="bulk-save-btn" class="btn-secondary" style="color:var(--ok)"><i class="bi bi-check-lg"></i> Enregistrer</button>
      <button id="bulk-cancel-btn" class="btn-secondary">Annuler</button>
    </div>
  `,(n=e.querySelector("#bulk-role-sel"))==null||n.addEventListener("change",l=>{l.target.value&&(o.forEach(s=>{const u=I.find(d=>d.id===s);u&&(u.role=l.target.value)}),y(),g())}),(c=e.querySelector("#bulk-plot-sel"))==null||c.addEventListener("change",l=>{const s=parseInt(l.target.value);s&&(o.forEach(u=>{const d=I.find(i=>i.id===u);d&&(d.parcelIds||(d.parcelIds=[]),d.parcelIds.includes(s)||(d.parcelIds=[...d.parcelIds,s]))}),y(),E("Parcelle associée."),g())}),(r=e.querySelector("#bulk-sensor-sel"))==null||r.addEventListener("change",l=>{const s=parseInt(l.target.value);s&&(o.forEach(u=>{const d=I.find(i=>i.id===u);d&&(d.sensorIds||(d.sensorIds=[]),d.sensorIds.includes(s)||(d.sensorIds=[...d.sensorIds,s]))}),y(),E("Capteur associé."),g())}),(t=e.querySelector("#bulk-delete-btn"))==null||t.addEventListener("click",()=>{confirm(`Supprimer ${o.size} membre(s) ?`)&&(o.forEach(l=>{const s=I.findIndex(u=>u.id===l);s!==-1&&I.splice(s,1)}),o.clear(),y(),g())}),(m=e.querySelector("#bulk-save-btn"))==null||m.addEventListener("click",()=>{y(),E("Modifications enregistrées.")}),(a=e.querySelector("#bulk-cancel-btn"))==null||a.addEventListener("click",()=>{o.clear(),g()})}function E(e){const n=document.createElement("div");n.className="toast",n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}
