import"./main-DdpHcqUd.js";import{o as v}from"./orgs-b3kLTQ0f.js";import{p as r}from"./plots-CEyFXpqF.js";import{s as p}from"./sensors-DXWoBEPb.js";import{n as s}from"./network-YzWdS0n_.js";import{u as f}from"./breadcrumb-DEBQjfiD.js";document.addEventListener("DOMContentLoaded",()=>{f(),m()});function m(){const o=document.getElementById("network-info"),n=p.length,a=r.length,t=v.length;function i(e){return(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function l(e){return(e||"?").split(/[\s\-']+/).slice(0,2).map(c=>c[0]).join("").toUpperCase().slice(0,2)}const d=s.antennes.map(e=>`
    <div class="info-location-card">
      <div class="info-location-name">${i(e.nom)}</div>
      <div class="info-location-addr">${[i(e.adresse),i(e.codePostal),i(e.ville)].filter(Boolean).join(", ")}</div>
      ${e.telephone?`<div class="info-location-tel"><i class="bi bi-telephone"></i> ${i(e.telephone)}</div>`:""}
    </div>`).join("");o.innerHTML=`
    <div class="info-header">
      <div class="info-logo-avatar">${l(s.nom)}</div>
      <div>
        <h1 class="info-nom">${i(s.nom)}</h1>
        <div class="info-contacts">
          ${`<span><i class="bi bi-telephone"></i> ${i(s.telephone)}</span>`}
          ${`<span><i class="bi bi-envelope"></i> <a href="mailto:${i(s.email)}">${i(s.email)}</a></span>`}
          ${`<span><i class="bi bi-globe"></i> ${i(s.siteWeb)}</span>`}
        </div>
      </div>
    </div>

    <p class="info-description">${i(s.description)}</p>

    <div class="info-stats-row">
      <div class="info-stat">
        <div class="info-stat-value">${n}</div>
        <div class="info-stat-label">Capteurs</div>
      </div>
      <div class="info-stat">
        <div class="info-stat-value">${a}</div>
        <div class="info-stat-label">Parcelles</div>
      </div>
      <div class="info-stat">
        <div class="info-stat-value">${t}</div>
        <div class="info-stat-label">Adhérents</div>
      </div>
    </div>

    <div class="info-section">
      <h3><i class="bi bi-geo-alt"></i> Siège social</h3>
      <div class="info-location-card">
        <div class="info-location-addr">
          ${[i(s.siege.adresse),i(s.siege.codePostal),i(s.siege.ville)].filter(Boolean).join(", ")}
        </div>
        ${`<div class="info-location-tel"><i class="bi bi-telephone"></i> ${i(s.telephone)}</div>`}
      </div>
    </div>

    <div class="info-section">
      <h3><i class="bi bi-pin-map"></i> Antennes &amp; points de vente</h3>
      <div class="info-locations-grid">${d}</div>
    </div>
  `}
