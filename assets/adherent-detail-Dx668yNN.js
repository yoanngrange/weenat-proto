import"./main-DdpHcqUd.js";import{o as u}from"./orgs-b3kLTQ0f.js";import{p as m}from"./plots-CEyFXpqF.js";import{s as g}from"./sensors-DXWoBEPb.js";import{m as d}from"./members-DPSnqfQ_.js";import{u as f}from"./breadcrumb-DEBQjfiD.js";const b=new URLSearchParams(window.location.search),v=parseInt(b.get("id")),t=u.find(n=>n.id===v),h={Essential:"plan-essential",Plus:"plan-plus",Expert:"plan-expert"},y={actif:{cls:"statut-actif",icon:"bi-check-circle-fill"},inactif:{cls:"statut-inactif",icon:"bi-circle"},"actif en essai":{cls:"statut-essai",icon:"bi-clock"},"invitation en attente":{cls:"statut-attente",icon:"bi-envelope"},"demande en attente":{cls:"statut-attente",icon:"bi-hourglass"}};let i=[];document.addEventListener("DOMContentLoaded",()=>{if(!t){document.querySelector(".detail-main").innerHTML='<p style="padding:32px;color:var(--txt3)">Adhérent introuvable.</p>';return}f(),$(),E(),c(),I(),w(),k(),M(),P(),document.getElementById("modifier-btn").addEventListener("click",()=>{alert("Fonctionnalité à venir — modification de l'adhérent.")})});function $(){i=d.filter(n=>n.orgIds.includes(t.id)).map(n=>n.id)}function E(){document.title=`${t.name} — Weenat Proto`,document.getElementById("org-title").textContent=t.name;const n=h[t.plan]||"plan-essential",r=y[t.statut]||{cls:"statut-inactif",icon:"bi-circle"};document.getElementById("org-plan-badge").innerHTML=`<span class="plan-badge ${n}">${t.plan}</span>`,document.getElementById("org-statut-badge").innerHTML=`<span class="statut-badge ${r.cls}"><i class="bi ${r.icon}"></i> ${t.statut}</span>`,document.getElementById("org-dept-badge").textContent=`${t.ville} — ${t.departement}`}function c(){const n=m.filter(l=>l.orgId===t.id),r=g.filter(l=>l.orgId===t.id),e=i.length,a=n.reduce((l,x)=>l+(x.area||0),0),o=r.filter(l=>l.event).length,s=[{label:"Parcelles",value:n.length},{label:"Surface",value:`${a.toFixed(1)} ha`},{label:"Capteurs",value:r.length},{label:"Évènements",value:o,warn:o>0},{label:"Membres",value:e}];document.getElementById("org-stats-cards").innerHTML=s.map(l=>`
    <div class="stat-card${l.warn?" warn":""}">
      <div class="stat-label">${l.label}</div>
      <div class="stat-value">${l.value}</div>
    </div>
  `).join("")}function I(){const n=m.filter(e=>e.orgId===t.id),r=document.getElementById("org-parcels-list");if(!n.length){r.innerHTML='<p class="empty-hint">Aucune parcelle associée.</p>';return}r.innerHTML=`
    <table style="width:100%;border-collapse:collapse">
      <thead><tr>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Parcelle</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Culture</th>
        <th style="text-align:right;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Surface</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Texture</th>
      </tr></thead>
      <tbody>
        ${n.map(e=>`
          <tr class="clickable-row" data-href="parcelle-detail.html?id=${e.id}" style="cursor:pointer">
            <td style="padding:6px 10px;font-size:12px"><a href="parcelle-detail.html?id=${e.id}" class="admin-link admin-link--name">${e.name}</a></td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${e.crop||"—"}</td>
            <td style="padding:6px 10px;font-size:12px;text-align:right;color:var(--txt2)">${e.area} ha</td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${e.texture||"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,r.querySelectorAll(".clickable-row").forEach(e=>{e.addEventListener("click",a=>{a.target.tagName!=="A"&&(window.location.href=e.dataset.href)})})}function w(){const n=g.filter(e=>e.orgId===t.id),r=document.getElementById("org-sensors-list");if(!n.length){r.innerHTML='<p class="empty-hint">Aucun capteur associé.</p>';return}r.innerHTML=`
    <table style="width:100%;border-collapse:collapse">
      <thead><tr>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">N° série</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Modèle</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Télécom</th>
        <th style="text-align:right;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Qualité réseau</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Évènement</th>
      </tr></thead>
      <tbody>
        ${n.map(e=>`
          <tr class="clickable-row" data-href="capteur-detail.html?id=${e.id}" style="cursor:pointer">
            <td style="padding:6px 10px;font-size:12px"><a href="capteur-detail.html?id=${e.id}" class="admin-link">${e.serial}</a></td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${e.model}</td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${e.telecom}</td>
            <td style="padding:6px 10px;font-size:12px;text-align:right;color:var(--txt2)">${e.networkQuality}%</td>
            <td style="padding:6px 10px;font-size:12px;color:${e.event?"var(--warn)":"var(--txt3)"}">${e.event||"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,r.querySelectorAll(".clickable-row").forEach(e=>{e.addEventListener("click",a=>{a.target.tagName!=="A"&&(window.location.href=e.dataset.href)})})}function k(){T(),z(),p()}function T(){const n=[["Code adhérent",t.codeAdherent],["Propriétaire",`${t.prenomProprietaire} ${t.nomProprietaire}`],["Plan",t.plan],["Date adhésion",S(t.dateAdhesion)],["Email",`<a href="mailto:${t.email}" class="admin-link">${t.email}</a>`],["Téléphone",t.telephone||"—"],["SIRET",t.siret?`<span style="font-family:var(--mono);font-size:11px">${t.siret}</span>`:"—"]];document.getElementById("panel-ident").innerHTML=n.map(([r,e])=>`<div class="panel-row"><span class="panel-key">${r}</span><span class="panel-val">${e}</span></div>`).join("")}function z(){const n=[["Adresse",t.adresse||"—"],["Ville",t.ville],["Département",t.departement]];document.getElementById("panel-loc").innerHTML=n.map(([r,e])=>`<div class="panel-row"><span class="panel-key">${r}</span><span class="panel-val">${e}</span></div>`).join("")}function p(){const n=document.getElementById("panel-membres"),r=d.filter(a=>i.includes(a.id));r.length?n.innerHTML=r.map(a=>`
      <div class="panel-membre-row" data-id="${a.id}" style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--bdr2)">
        <div>
          <span style="font-size:12px;font-weight:500">${a.prenom} ${a.nom}</span>
          <span class="member-role-badge" style="margin-left:6px;background:var(--bdr2);color:var(--txt2)">${a.role}</span>
        </div>
        <button class="remove-membre-btn" data-id="${a.id}" title="Retirer ce membre" style="background:none;border:none;cursor:pointer;color:var(--txt3);font-size:14px;padding:2px 4px">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""):n.innerHTML='<p style="font-size:12px;color:var(--txt3)">Aucun membre associé.</p>';const e=document.getElementById("add-membre-select");e.innerHTML='<option value="">Ajouter un membre…</option>',d.filter(a=>!i.includes(a.id)).forEach(a=>{const o=document.createElement("option");o.value=a.id,o.textContent=`${a.prenom} ${a.nom} (${a.role})`,e.appendChild(o)}),n.querySelectorAll(".remove-membre-btn").forEach(a=>{a.addEventListener("click",()=>{const o=parseInt(a.dataset.id);i=i.filter(s=>s!==o),p(),c()})}),document.getElementById("add-membre-btn").onclick=()=>{const a=parseInt(e.value);!a||i.includes(a)||(i.push(a),p(),c())}}function M(){if(!t.lat||!t.lng)return;const n=document.getElementById("org-mini-map");n.style.height="140px";const r=L.map(n,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});r.setView([t.lat,t.lng],12),L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(r),L.circleMarker([t.lat,t.lng],{radius:7,fillColor:"#0172A4",fillOpacity:1,color:"#fff",weight:2}).addTo(r)}function P(){const n=document.getElementById("detail-panel"),r=document.getElementById("detail-layout");document.getElementById("panel-toggle").addEventListener("click",()=>{n.classList.toggle("collapsed"),r.classList.toggle("panel-collapsed")})}function S(n){if(!n)return"—";const[r,e,a]=n.split("-");return`${a}/${e}/${r}`}
