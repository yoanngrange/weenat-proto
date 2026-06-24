import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{m as G}from"./members-Cr98hVG_.js";import{o as z}from"./orgs-DnFmvGlp.js";import{p as y}from"./plots-DhtWL7s_.js";import{s as S}from"./sensors-CRadjF8G.js";import{u as Q}from"./breadcrumb-CzFWtd6d.js";import{h as W,i as X,c as Y,a as Z,j as ee,k as te}from"./store-CX9wca99.js";const B=["propriétaire","admin","agent","lecteur"],se=["actif","inactif","invité"],O="v4",q=W(),ne=q&&q._version===O?q.data:null,g=ne||G.map(e=>({...e}));let A=[],x=["actif","invité"],h={column:null,direction:"asc"},u=new Set,$=null;const ae=[{id:901,prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",role:"propriétaire",statut:"actif",parcelIds:[1,2,3]},{id:902,prenom:"Jean-Michel",nom:"Dutilleul",email:"jm.dutilleul@ferme-du-bocage.fr",role:"admin",statut:"actif",sensorIds:[1,2]}],D="v1",w=X(),le=w&&w._version===D?w.data:null,I=le||ae.map(e=>({...e}));document.addEventListener("DOMContentLoaded",()=>{Q(),(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau"?($=v,H(),v()):($=b,H(),b())});function H(){var e;R("panel-role",B,s=>{A=s},"badge-role"),R("panel-statut",se,s=>{x=s},"badge-statut",["actif","invité"]),document.querySelectorAll(".filter-dropdown-btn").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation();const i=s.closest(".filter-dropdown"),t=i.classList.contains("open");document.querySelectorAll(".filter-dropdown.open").forEach(r=>r.classList.remove("open")),t||i.classList.add("open")})}),document.querySelectorAll(".filter-dropdown-panel").forEach(s=>{s.addEventListener("click",c=>c.stopPropagation())}),document.addEventListener("click",()=>{document.querySelectorAll(".filter-dropdown.open").forEach(s=>s.classList.remove("open"))}),(e=document.getElementById("select-all-members"))==null||e.addEventListener("change",function(){const c=($===v?J():N()).map(i=>i.id);this.checked?c.forEach(i=>u.add(i)):u.clear(),$()}),document.getElementById("members-table").addEventListener("click",s=>{const c=s.target.closest("th[data-column]");if(!c)return;const i=c.dataset.column;h.column===i?h.direction=h.direction==="asc"?"desc":"asc":(h.column=i,h.direction="asc"),$()})}function R(e,s,c,i,t=[]){const r=document.getElementById(e);if(!r)return;const n=()=>['<label class="filter-all-label"><input type="checkbox" class="cb-all"> Tous</label>',...s.map(a=>`<label><input type="checkbox" value="${a}"${t.includes(a)?" checked":""}> ${a}</label>`)].join("");r.innerHTML=n(),t.length&&c(t),T(i,t.length);function l(){const a=r.querySelector(".cb-all"),m=()=>r.querySelectorAll("input[type=checkbox]:not(.cb-all)");a==null||a.addEventListener("change",()=>{m().forEach(o=>{o.checked=a.checked});const d=a.checked?s:[];c(d),T(i,d.length),$()}),m().forEach(d=>{d.addEventListener("change",()=>{const o=Array.from(m()).filter(f=>f.checked).map(f=>f.value);a&&(a.checked=o.length===s.length),c(o),T(i,o.length),$()})})}l()}function T(e,s){const c=document.getElementById(e);c&&(c.textContent=s,c.hidden=!s)}function N(){let e=g;return A.length&&(e=e.filter(s=>A.includes(s.role))),x.length&&(e=e.filter(s=>x.includes(s.statut))),e}function k(){ee({_version:O,data:g})}function j(e){const s=new Set((e.parcelIds||[]).filter(i=>y.some(t=>t.id===i))),c=e.source==="adherent";return y.forEach(i=>{const t=Y(i.id),r=c?t==null?void 0:t.linkedOrgMemberIds:t==null?void 0:t.linkedConseillerIds;r!==void 0&&(r.includes(e.id)?s.add(i.id):s.delete(i.id))}),[...s]}function F(e,s){const c=e.excludedSensorIds||[],i=new Set(S.filter(r=>{var n;return((n=r.parcelIds)==null?void 0:n.some(l=>s.includes(l)))&&!c.includes(r.id)}).map(r=>r.id)),t=e.source==="adherent";return S.forEach(r=>{const n=Z(r.id),l=t?n==null?void 0:n.linkedOrgMemberIds:n==null?void 0:n.linkedConseillerIds;l!==void 0&&(l.includes(e.id)?i.add(r.id):i.delete(r.id))}),[...i]}function b(){const e=N();ie(e),h.column&&e.sort((t,r)=>{const n=C(t,h.column),l=C(r,h.column),a=n.localeCompare(l,"fr");return h.direction==="asc"?a:-a});const s=e.map(t=>t.id),c=document.getElementById("select-all-members");c&&(c.checked=s.length>0&&s.every(t=>u.has(t)),c.indeterminate=!c.checked&&s.some(t=>u.has(t)));const i=document.querySelector("#members-table tbody");if(i.innerHTML="",!e.length){i.innerHTML='<tr><td colspan="7" style="padding:32px;text-align:center;color:var(--txt3)">Aucun membre ne correspond aux filtres.</td></tr>',P();return}e.forEach(t=>{const r=t.role==="agent",n=r?z.filter(p=>t.orgIds.includes(p.id)):[],l=j(t),a=F(t,l),m=y.filter(p=>l.includes(p.id)).sort((p,U)=>p.name.localeCompare(U.name,"fr")),d=S.filter(p=>a.includes(p.id)),o=r?n.length?n.map(p=>`<div class="admin-item-row"><a href="adherents.html" class="admin-link">${p.name}</a><button class="icon-btn remove-org" data-member-id="${t.id}" data-org-id="${p.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>':'<span class="tag-none" style="color:var(--txt3);font-size:11px">—</span>',f=m.length?m.map(p=>`<div class="admin-item-row"><a href="parcelle-detail.html?id=${p.id}" class="admin-link">${p.name}</a><button class="icon-btn remove-parcel" data-member-id="${t.id}" data-parcel-id="${p.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>',K=d.length?d.map(p=>`<div class="admin-item-row"><a href="capteur-detail.html?id=${p.id}" class="admin-link">${p.serial} <span class="member-sensor-model">${p.model}</span></a><button class="icon-btn remove-sensor" data-member-id="${t.id}" data-sensor-id="${p.id}" title="Retirer"><i class="bi bi-x-lg"></i></button></div>`).join(""):'<span class="tag-none">—</span>',M=document.createElement("tr");u.has(t.id)&&M.classList.add("row-selected"),M.innerHTML=`
      <td class="col-check"><input type="checkbox" class="row-cb" data-id="${t.id}"${u.has(t.id)?" checked":""}></td>
      <td><span class="member-name">${t.prenom} ${t.nom}</span><div class="member-email-sub">${t.email}</div></td>
      <td>${t.role}</td>
      <td class="admin-links-cell">${o}</td>
      <td class="admin-links-cell">${f}</td>
      <td class="admin-links-cell">${K}</td>
      <td>${V(t.statut)}</td>
    `,i.appendChild(M)}),i.querySelectorAll(".row-cb").forEach(t=>{t.addEventListener("change",()=>{const r=parseInt(t.dataset.id);t.checked?u.add(r):u.delete(r),b()})}),i.querySelectorAll(".remove-org").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const n=g.find(l=>l.id===parseInt(t.dataset.memberId));n&&(n.orgIds=n.orgIds.filter(l=>l!==parseInt(t.dataset.orgId))),k(),b()})}),i.querySelectorAll(".remove-parcel").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const n=g.find(l=>l.id===parseInt(t.dataset.memberId));n&&(n.parcelIds=n.parcelIds.filter(l=>l!==parseInt(t.dataset.parcelId))),k(),b()})}),i.querySelectorAll(".remove-sensor").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const n=g.find(l=>l.id===parseInt(t.dataset.memberId));if(n){n.excludedSensorIds||(n.excludedSensorIds=[]);const l=parseInt(t.dataset.sensorId);n.excludedSensorIds.includes(l)||n.excludedSensorIds.push(l)}k(),b()})}),P(),document.querySelectorAll("#members-table th[data-column]").forEach(t=>{t.classList.remove("sort-asc","sort-desc"),t.dataset.column===h.column&&t.classList.add(`sort-${h.direction}`)})}function P(){var s,c,i,t,r,n,l;let e=document.getElementById("members-action-bar");if(e||(e=document.createElement("div"),e.id="members-action-bar",e.className="bulk-action-bar hidden",document.getElementById("stats-cards").insertAdjacentElement("afterend",e)),u.size===0){e.classList.add("hidden");return}e.classList.remove("hidden"),e.innerHTML=`
    <span class="bulk-count">${u.size} sélectionné${u.size>1?"s":""}</span>
    <div class="bulk-actions">
      <label class="bulk-action-group">
        <span>Rôle</span>
        <select id="bulk-role-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${B.map(a=>`<option value="${a}">${a}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Organisation</span>
        <select id="bulk-org-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${z.map(a=>`<option value="${a.id}">${a.name}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Parcelle</span>
        <select id="bulk-plot-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${[...y].sort((a,m)=>a.name.localeCompare(m.name,"fr")).slice(0,30).map(a=>`<option value="${a.id}">${a.name}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Capteur</span>
        <select id="bulk-sensor-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${S.slice(0,30).map(a=>`<option value="${a.id}">${a.serial} (${a.model})</option>`).join("")}
        </select>
      </label>
      <button id="bulk-delete-btn" class="btn-secondary" style="color:var(--err)"><i class="bi bi-trash"></i> Supprimer</button>
      <button id="bulk-save-btn" class="btn-secondary" style="color:var(--ok)"><i class="bi bi-check-lg"></i> Enregistrer</button>
      <button id="bulk-cancel-btn" class="btn-secondary">Annuler</button>
    </div>
  `,(s=e.querySelector("#bulk-role-sel"))==null||s.addEventListener("change",a=>{a.target.value&&(u.forEach(m=>{const d=g.find(o=>o.id===m);d&&(d.role=a.target.value)}),k(),b())}),(c=e.querySelector("#bulk-org-sel"))==null||c.addEventListener("change",a=>{const m=parseInt(a.target.value);m&&(u.forEach(d=>{const o=g.find(f=>f.id===d);o&&!o.orgIds.includes(m)&&(o.orgIds=[...o.orgIds,m])}),k(),E("Organisation associée."),b())}),(i=e.querySelector("#bulk-plot-sel"))==null||i.addEventListener("change",a=>{const m=parseInt(a.target.value);m&&(u.forEach(d=>{const o=g.find(f=>f.id===d);o&&!o.parcelIds.includes(m)&&(o.parcelIds=[...o.parcelIds,m])}),k(),E("Parcelle associée."),b())}),(t=e.querySelector("#bulk-sensor-sel"))==null||t.addEventListener("change",a=>{E("Capteur associé."),b()}),(r=e.querySelector("#bulk-delete-btn"))==null||r.addEventListener("click",()=>{confirm(`Supprimer ${u.size} membre(s) ?`)&&(u.forEach(a=>{const m=g.findIndex(d=>d.id===a);m!==-1&&g.splice(m,1)}),u.clear(),k(),b())}),(n=e.querySelector("#bulk-save-btn"))==null||n.addEventListener("click",()=>{k(),E("Modifications enregistrées.")}),(l=e.querySelector("#bulk-cancel-btn"))==null||l.addEventListener("click",()=>{u.clear(),b()})}function C(e,s){if(s==="nom")return`${e.nom} ${e.prenom}`.toLowerCase();if(s==="email")return e.email.toLowerCase();if(s==="role")return e.role;if(s==="statut")return e.statut;if(s==="orgs")return String(e.orgIds.length).padStart(6,"0");if(s==="parcelles")return String(j(e).length).padStart(6,"0");if(s==="capteurs"){const c=F(e,j(e)).length;return String(c).padStart(6,"0")}return""}function V(e){return{actif:'<span class="statut-badge statut-actif"><i class="bi bi-check-circle-fill"></i> Actif</span>',inactif:'<span class="statut-badge statut-inactif"><i class="bi bi-circle"></i> Inactif</span>',invité:'<span class="statut-badge statut-invite"><i class="bi bi-envelope"></i> Invité</span>',désactivé:'<span class="statut-badge statut-disabled"><i class="bi bi-slash-circle"></i> Désactivé</span>'}[e]||`<span class="statut-badge">${e}</span>`}function ie(e){const s=e.length,c=e.filter(t=>t.statut==="actif").length;e.filter(t=>t.statut==="inactif").length;const i=e.filter(t=>t.statut==="invité").length;e.filter(t=>t.statut==="désactivé").length,document.getElementById("stats-cards").innerHTML=[{label:"Membres",value:s},{label:"Actifs",value:c},{label:"Invités",value:i}].map(t=>`
    <div class="stat-card${t.warn?" warn":""}">
      <div class="stat-label">${t.label}</div>
      <div class="stat-value">${t.value}</div>
    </div>
  `).join("")}function J(){let e=I;return A.length&&(e=e.filter(s=>A.includes(s.role))),x.length&&(e=e.filter(s=>x.includes(s.statut))),e}function L(){te({_version:D,data:I})}function v(){const e=J(),s=document.querySelector('#members-table th[data-column="orgs"]');s&&(s.style.display="none");const c=document.getElementById("stats-cards");c&&(c.innerHTML=[{label:"Membres",value:e.length},{label:"Actifs",value:e.filter(n=>n.statut==="actif").length}].map(n=>`<div class="stat-card"><div class="stat-label">${n.label}</div><div class="stat-value">${n.value}</div></div>`).join(""));const i=e.map(n=>n.id),t=document.getElementById("select-all-members");t&&(t.checked=i.length>0&&i.every(n=>u.has(n)),t.indeterminate=!t.checked&&i.some(n=>u.has(n)));const r=document.querySelector("#members-table tbody");if(r){if(!e.length){r.innerHTML='<tr><td colspan="6" style="padding:32px;text-align:center;color:var(--txt3)">Aucun membre ne correspond aux filtres.</td></tr>',_();return}r.innerHTML=e.map(n=>{const l=y.filter(o=>(n.parcelIds||[]).includes(o.id)).sort((o,f)=>o.name.localeCompare(f.name,"fr")),a=S.filter(o=>(n.sensorIds||[]).includes(o.id)),m=l.length?l.map(o=>`<div class="admin-item-row"><a href="parcelle-detail.html?id=${o.id}" class="admin-link">${o.name}</a></div>`).join(""):'<span class="tag-none">—</span>',d=a.length?a.map(o=>`<div class="admin-item-row"><a href="capteur-detail.html?id=${o.id}" class="admin-link">${o.serial} <span class="member-sensor-model">${o.model}</span></a></div>`).join(""):'<span class="tag-none">—</span>';return`
      <tr${u.has(n.id)?' class="row-selected"':""}>
        <td class="col-check"><input type="checkbox" class="row-cb" data-id="${n.id}"${u.has(n.id)?" checked":""}></td>
        <td><span class="member-name">${n.prenom} ${n.nom}</span><div class="member-email-sub">${n.email}</div></td>
        <td>${n.role}</td>
        <td class="admin-links-cell">${m}</td>
        <td class="admin-links-cell">${d}</td>
        <td>${V(n.statut)}</td>
      </tr>
    `}).join(""),r.querySelectorAll(".row-cb").forEach(n=>{n.addEventListener("change",()=>{const l=parseInt(n.dataset.id);n.checked?u.add(l):u.delete(l),v()})}),_()}}function _(){var s,c,i,t,r,n;let e=document.getElementById("members-action-bar");if(e||(e=document.createElement("div"),e.id="members-action-bar",e.className="bulk-action-bar hidden",document.getElementById("stats-cards").insertAdjacentElement("afterend",e)),u.size===0){e.classList.add("hidden");return}e.classList.remove("hidden"),e.innerHTML=`
    <span class="bulk-count">${u.size} sélectionné${u.size>1?"s":""}</span>
    <div class="bulk-actions">
      <label class="bulk-action-group">
        <span>Rôle</span>
        <select id="bulk-role-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${B.map(l=>`<option value="${l}">${l}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Parcelle</span>
        <select id="bulk-plot-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${[...y].sort((l,a)=>l.name.localeCompare(a.name,"fr")).slice(0,30).map(l=>`<option value="${l.id}">${l.name}</option>`).join("")}
        </select>
      </label>
      <label class="bulk-action-group">
        <span>Capteur</span>
        <select id="bulk-sensor-sel" class="bulk-select">
          <option value="">— choisir —</option>
          ${S.slice(0,30).map(l=>`<option value="${l.id}">${l.serial} (${l.model})</option>`).join("")}
        </select>
      </label>
      <button id="bulk-delete-btn" class="btn-secondary" style="color:var(--err)"><i class="bi bi-trash"></i> Supprimer</button>
      <button id="bulk-save-btn" class="btn-secondary" style="color:var(--ok)"><i class="bi bi-check-lg"></i> Enregistrer</button>
      <button id="bulk-cancel-btn" class="btn-secondary">Annuler</button>
    </div>
  `,(s=e.querySelector("#bulk-role-sel"))==null||s.addEventListener("change",l=>{l.target.value&&(u.forEach(a=>{const m=I.find(d=>d.id===a);m&&(m.role=l.target.value)}),L(),v())}),(c=e.querySelector("#bulk-plot-sel"))==null||c.addEventListener("change",l=>{const a=parseInt(l.target.value);a&&(u.forEach(m=>{const d=I.find(o=>o.id===m);d&&(d.parcelIds||(d.parcelIds=[]),d.parcelIds.includes(a)||(d.parcelIds=[...d.parcelIds,a]))}),L(),E("Parcelle associée."),v())}),(i=e.querySelector("#bulk-sensor-sel"))==null||i.addEventListener("change",l=>{const a=parseInt(l.target.value);a&&(u.forEach(m=>{const d=I.find(o=>o.id===m);d&&(d.sensorIds||(d.sensorIds=[]),d.sensorIds.includes(a)||(d.sensorIds=[...d.sensorIds,a]))}),L(),E("Capteur associé."),v())}),(t=e.querySelector("#bulk-delete-btn"))==null||t.addEventListener("click",()=>{confirm(`Supprimer ${u.size} membre(s) ?`)&&(u.forEach(l=>{const a=I.findIndex(m=>m.id===l);a!==-1&&I.splice(a,1)}),u.clear(),L(),v())}),(r=e.querySelector("#bulk-save-btn"))==null||r.addEventListener("click",()=>{L(),E("Modifications enregistrées.")}),(n=e.querySelector("#bulk-cancel-btn"))==null||n.addEventListener("click",()=>{u.clear(),v()})}function E(e){const s=document.createElement("div");s.className="toast",s.textContent=e,document.body.appendChild(s),setTimeout(()=>s.remove(),3e3)}
