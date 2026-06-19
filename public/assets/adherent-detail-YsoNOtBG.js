import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{o as u}from"./orgs-DnFmvGlp.js";import{p as m}from"./plots-Bejh2i72.js";import{s as g}from"./sensors-CRadjF8G.js";import{m as d}from"./members-Cr98hVG_.js";import{u as f}from"./breadcrumb-CzFWtd6d.js";const b=new URLSearchParams(window.location.search),v=parseInt(b.get("id")),e=u.find(n=>n.id===v),h={Essential:"plan-essential",Plus:"plan-plus",Expert:"plan-expert"},y={actif:{cls:"statut-actif",icon:"bi-check-circle-fill"},inactif:{cls:"statut-inactif",icon:"bi-circle"},"actif en essai":{cls:"statut-essai",icon:"bi-clock"},"invitation en attente":{cls:"statut-attente",icon:"bi-envelope"},"demande en attente":{cls:"statut-attente",icon:"bi-hourglass"}};let i=[];document.addEventListener("DOMContentLoaded",()=>{if(!e){document.querySelector(".detail-main").innerHTML='<p style="padding:32px;color:var(--txt3)">Adhérent introuvable.</p>';return}f(),$(),E(),c(),I(),w(),k(),z(),B(),document.getElementById("modifier-btn").addEventListener("click",()=>{alert("Fonctionnalité à venir — modification de l'adhérent.")})});function $(){i=d.filter(n=>n.orgIds.includes(e.id)).map(n=>n.id)}function E(){document.title=`${e.name} — Weenat Proto`,document.getElementById("org-title").textContent=e.name;const n=h[e.plan]||"plan-essential",l=y[e.statut]||{cls:"statut-inactif",icon:"bi-circle"};document.getElementById("org-plan-badge").innerHTML=`<span class="plan-badge ${n}">${e.plan}</span>`,document.getElementById("org-statut-badge").innerHTML=`<span class="statut-badge ${l.cls}"><i class="bi ${l.icon}"></i> ${e.statut}</span>`,document.getElementById("org-dept-badge").textContent=`${e.ville} — ${e.departement}`}function c(){const n=m.filter(r=>r.orgId===e.id),l=g.filter(r=>r.orgId===e.id),t=i.length,a=n.reduce((r,x)=>r+(x.area||0),0),o=l.filter(r=>r.event).length,s=[{label:"Parcelles",value:n.length},{label:"Surface",value:`${a.toFixed(1)} ha`},{label:"Capteurs",value:l.length},{label:"Évènements",value:o,warn:o>0},...e.plan!=="Essential"?[{label:"Membres",value:t}]:[]];document.getElementById("org-stats-cards").innerHTML=s.map(r=>`
    <div class="stat-card${r.warn?" warn":""}">
      <div class="stat-label">${r.label}</div>
      <div class="stat-value">${r.value}</div>
    </div>
  `).join("")}function I(){const n=m.filter(t=>t.orgId===e.id),l=document.getElementById("org-parcels-list");if(!n.length){l.innerHTML='<p class="empty-hint">Aucune parcelle associée.</p>';return}l.innerHTML=`
    <table style="width:100%;border-collapse:collapse">
      <thead><tr>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Parcelle</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Culture</th>
        <th style="text-align:right;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Surface</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Texture</th>
      </tr></thead>
      <tbody>
        ${n.map(t=>`
          <tr class="clickable-row" data-href="parcelle-detail.html?id=${t.id}" style="cursor:pointer">
            <td style="padding:6px 10px;font-size:12px"><a href="parcelle-detail.html?id=${t.id}" class="admin-link admin-link--name">${t.name}</a></td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${t.crop||"—"}</td>
            <td style="padding:6px 10px;font-size:12px;text-align:right;color:var(--txt2)">${t.area} ha</td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${t.texture||"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,l.querySelectorAll(".clickable-row").forEach(t=>{t.addEventListener("click",a=>{a.target.tagName!=="A"&&(window.location.href=t.dataset.href)})})}function w(){const n=g.filter(t=>t.orgId===e.id),l=document.getElementById("org-sensors-list");if(!n.length){l.innerHTML='<p class="empty-hint">Aucun capteur associé.</p>';return}l.innerHTML=`
    <table style="width:100%;border-collapse:collapse">
      <thead><tr>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">N° série</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Modèle</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Télécom</th>
        <th style="text-align:right;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Qualité réseau</th>
        <th style="text-align:left;padding:6px 10px;font-size:11px;color:var(--txt2);border-bottom:1px solid var(--bdr2)">Évènement</th>
      </tr></thead>
      <tbody>
        ${n.map(t=>`
          <tr class="clickable-row" data-href="capteur-detail.html?id=${t.id}" style="cursor:pointer">
            <td style="padding:6px 10px;font-size:12px"><a href="capteur-detail.html?id=${t.id}" class="admin-link">${t.serial}</a></td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${t.model}</td>
            <td style="padding:6px 10px;font-size:12px;color:var(--txt2)">${t.telecom}</td>
            <td style="padding:6px 10px;font-size:12px;text-align:right;color:var(--txt2)">${t.networkQuality}%</td>
            <td style="padding:6px 10px;font-size:12px;color:${t.event?"var(--warn)":"var(--txt3)"}">${t.event||"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,l.querySelectorAll(".clickable-row").forEach(t=>{t.addEventListener("click",a=>{a.target.tagName!=="A"&&(window.location.href=t.dataset.href)})})}function k(){M(),T(),e.plan!=="Essential"?p():document.getElementById("panel-membres").closest(".panel-section").style.display="none"}function M(){const n=[...e.codeAdherent?[["Code adhérent",e.codeAdherent]]:[],["Propriétaire",`${e.prenomProprietaire} ${e.nomProprietaire}`],...e.metiers&&e.metiers.length?[["Métier",e.metiers.join(", ")]]:[],["Plan",e.plan],["Date adhésion",P(e.dateAdhesion)],["Email",`<a href="mailto:${e.email}" class="admin-link">${e.email}</a>`],["Téléphone",e.telephone||"—"],["SIRET",e.siret?`<span style="font-family:var(--mono);font-size:11px">${e.siret}</span>`:"—"]];document.getElementById("panel-ident").innerHTML=n.map(([l,t])=>`<div class="panel-row"><span class="panel-key">${l}</span><span class="panel-val">${t}</span></div>`).join("")}function T(){const n=[["Adresse",e.adresse||"—"],["Ville",e.ville],["Département",e.departement]];document.getElementById("panel-loc").innerHTML=n.map(([l,t])=>`<div class="panel-row"><span class="panel-key">${l}</span><span class="panel-val">${t}</span></div>`).join("")}function p(){const n=document.getElementById("panel-membres"),l=d.filter(a=>i.includes(a.id));l.length?n.innerHTML=l.map(a=>`
      <div class="panel-membre-row" data-id="${a.id}" style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--bdr2)">
        <div>
          <span style="font-size:12px;font-weight:500">${a.prenom} ${a.nom}</span>
          <span class="member-role-badge" style="margin-left:6px;background:var(--bdr2);color:var(--txt2)">${a.role}</span>
        </div>
        <button class="remove-membre-btn" data-id="${a.id}" title="Retirer ce membre" style="background:none;border:none;cursor:pointer;color:var(--txt3);font-size:14px;padding:2px 4px">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""):n.innerHTML='<p style="font-size:12px;color:var(--txt3)">Aucun membre associé.</p>';const t=document.getElementById("add-membre-select");t.innerHTML='<option value="">Ajouter un membre…</option>',d.filter(a=>!i.includes(a.id)).forEach(a=>{const o=document.createElement("option");o.value=a.id,o.textContent=`${a.prenom} ${a.nom} (${a.role})`,t.appendChild(o)}),n.querySelectorAll(".remove-membre-btn").forEach(a=>{a.addEventListener("click",()=>{const o=parseInt(a.dataset.id);i=i.filter(s=>s!==o),p(),c()})}),document.getElementById("add-membre-btn").onclick=()=>{const a=parseInt(t.value);!a||i.includes(a)||(i.push(a),p(),c())}}function z(){if(!e.lat||!e.lng)return;const n=document.getElementById("org-mini-map");n.style.height="140px";const l=L.map(n,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});l.setView([e.lat,e.lng],12),L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(l),L.circleMarker([e.lat,e.lng],{radius:7,fillColor:"#0172A4",fillOpacity:1,color:"#fff",weight:2}).addTo(l)}function B(){const n=document.getElementById("detail-panel"),l=document.getElementById("detail-layout");document.getElementById("panel-toggle").addEventListener("click",()=>{n.classList.toggle("collapsed"),l.classList.toggle("panel-collapsed")})}function P(n){if(!n)return"—";const[l,t,a]=n.split("-");return`${a}/${t}/${l}`}
