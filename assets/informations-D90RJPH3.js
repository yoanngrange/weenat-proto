import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{o as h}from"./orgs-Cx4wNzLL.js";import{p as b}from"./plots-BEtOZiNT.js";import{s as $}from"./sensors-DDe0aa9W.js";import{n as t}from"./network-YzWdS0n_.js";import{u as S}from"./breadcrumb-DEBQjfiD.js";document.addEventListener("DOMContentLoaded",()=>{S(),P()});const d=[{id:"meteo",label:"Stations météo",models:["P+","PT","P"]},{id:"smv",label:"Stations météo virtuelles",models:["SMV"]},{id:"th",label:"Thermo-hygromètres",models:["TH","T_MINI","T_GEL"]},{id:"vent",label:"Anémomètres",models:["W"]},{id:"rayon",label:"Pyranomètres / PAR",models:["PYRANO","PAR"]},{id:"humec",label:"Humectation foliaire",models:["LWS"]},{id:"tensio",label:"Tensiomètres",models:["CHP-15/30","CHP-30/60","CHP-60/90"]},{id:"capa",label:"Sondes capacitives",models:["CAPA-30-3","CAPA-60-6"]},{id:"fertiirrig",label:"Fertirrigation",models:["EC"]}],n={};d.forEach(i=>{n[i.id]=!0});function v(i){const a=new Set(i.models);return $.filter(l=>a.has(l.model)).length}function p(){return d.filter(i=>n[i.id]).reduce((i,a)=>i+v(a),0)}function y(){const i=document.getElementById("stat-capteurs");if(i){const a=p();i.textContent=a,i.style.transition="color .2s",i.style.color="var(--pri)",setTimeout(()=>{i.style.color=""},400)}}function c(){return localStorage.getItem("menuRole")!=="adherent-reseau"}function P(){const i=document.getElementById("network-info"),a=b.length,l=h.filter(e=>e.id!==100&&e.statut!=="inactif").length,m=p();function s(e){return(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(e){return(e||"?").split(/[\s\-']+/).slice(0,2).map(o=>o[0]).join("").toUpperCase().slice(0,2)}const u=t.antennes.map(e=>`
    <div class="info-location-card">
      <div class="info-location-name">${s(e.nom)}</div>
      <div class="info-location-addr">${[s(e.adresse),s(e.codePostal),s(e.ville)].filter(Boolean).join(", ")}</div>
      ${e.telephone?`<div class="info-location-tel"><i class="bi bi-telephone"></i> ${s(e.telephone)}</div>`:""}
    </div>`).join(""),g=c()?`
    <div class="info-section">
      <h3><i class="bi bi-share"></i> Partage de données réseau</h3>
      <p style="font-size:13px;color:var(--txt2);margin-bottom:12px">
        Choisissez les catégories de capteurs visibles par les adhérents du réseau.
        Le nombre de capteurs dans les statistiques s'ajuste en temps réel.
      </p>
      <div class="info-sharing-list">
        ${d.map(e=>{const o=v(e);if(o===0)return"";const r=`sharing-${e.id}`;return`<div class="info-sharing-row">
            <label for="${r}" class="info-sharing-name" style="cursor:pointer;flex:1">${e.label}</label>
            <span style="font-size:12px;color:var(--txt3);margin-right:12px">${o} capteur${o>1?"s":""}</span>
            <label class="toggle-switch">
              <input type="checkbox" id="${r}" class="sharing-toggle" data-cat="${e.id}"${n[e.id]?" checked":""}>
              <span class="toggle-track"></span>
            </label>
          </div>`}).join("")}
      </div>
    </div>`:"";i.innerHTML=`
    <div class="info-header">
      <div class="info-logo-avatar">${f(t.nom)}</div>
      <div>
        <h1 class="info-nom">${s(t.nom)}</h1>
        <div class="info-contacts">
          ${`<span><i class="bi bi-telephone"></i> ${s(t.telephone)}</span>`}
          ${`<span><i class="bi bi-envelope"></i> <a href="mailto:${s(t.email)}">${s(t.email)}</a></span>`}
          ${`<span><i class="bi bi-globe"></i> ${s(t.siteWeb)}</span>`}
        </div>
      </div>
    </div>

    <p class="info-description">${s(t.description)}</p>

    <div class="info-stats-row">
      <div class="info-stat" style="cursor:default">
        <div class="info-stat-value" id="stat-capteurs">${m}</div>
        <div class="info-stat-label">Capteurs partagés</div>
        <div style="font-size:10px;color:var(--txt3);margin-top:2px">${c()?"configurable ↓":""}</div>
      </div>
      <div class="info-stat">
        <div class="info-stat-value">${a}</div>
        <div class="info-stat-label">Parcelles</div>
      </div>
      <div class="info-stat">
        <div class="info-stat-value">${l}</div>
        <div class="info-stat-label">Adhérents</div>
      </div>
    </div>

    <div class="info-section">
      <h3><i class="bi bi-geo-alt"></i> Siège social</h3>
      <div class="info-location-card">
        <div class="info-location-addr">
          ${[s(t.siege.adresse),s(t.siege.codePostal),s(t.siege.ville)].filter(Boolean).join(", ")}
        </div>
        ${`<div class="info-location-tel"><i class="bi bi-telephone"></i> ${s(t.telephone)}</div>`}
      </div>
    </div>

    <div class="info-section">
      <h3><i class="bi bi-pin-map"></i> Antennes &amp; points de vente</h3>
      <div class="info-locations-grid">${u}</div>
    </div>

    ${g}
  `,i.querySelectorAll(".info-sharing-row").forEach(e=>{const o=e.querySelector(".sharing-toggle");o&&e.addEventListener("click",r=>{setTimeout(()=>{n[o.dataset.cat]=o.checked,y()},0)})})}
