import"./main-CTHWNdRj.js";import{u as p}from"./breadcrumb-DEBQjfiD.js";import{p as m}from"./plots-CEyFXpqF.js";import{s as f}from"./sensors-BafoiuOm.js";const h=1;document.addEventListener("DOMContentLoaded",()=>{p(),localStorage.getItem("menuRole"),B(),w(),S(),T(),y()});function y(){document.querySelectorAll(".tdb-section-hd[data-toggle]").forEach(a=>{a.style.cursor="pointer",a.addEventListener("click",n=>{if(n.target.closest("a"))return;const t=a.nextElementSibling.classList.toggle("tdb-collapsed");a.querySelector(".tdb-chevron").classList.toggle("tdb-chevron-down",t)})})}function $(a){const n=a.id,s=+((n*2.3+7)%32).toFixed(1),t=+((n*1.1+14)%14+10).toFixed(1),e=Math.round(a.reserveHydrique*((n%5+1)/10)),o=+((n*.6+1)%6).toFixed(1),l=+(e+s-t-o).toFixed(1);return{pluie7j:s,etp7j:t,teneurEau:e,drainage7j:o,balance:l,teneurEauJ7:l}}function B(a){const n=document.getElementById("tdb-parcels");if(!n)return;const t=m.filter(e=>e.orgId===h).map(e=>{const o=$(e);return`<tr>
      <td><a href="parcelle-detail.html?id=${e.id}" class="tdb-plot-link">${e.name}</a></td>
      <td>${e.crop}</td>
      <td>${e.texture}</td>
      <td class="tdb-num">${o.teneurEau} mm</td>
      <td class="tdb-num">${o.pluie7j} mm</td>
      <td class="tdb-num">${o.etp7j} mm</td>
      <td class="tdb-num">${o.drainage7j} mm</td>
      <td class="tdb-num ${o.teneurEauJ7<0?"tdb-irrig-needed":""}">${o.teneurEauJ7} mm</td>
      <td class="tdb-num ${o.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${o.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(o.balance)+" mm"}</td>
    </tr>`}).join("");n.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Texture de sol</th>
        <th class="tdb-num">Réservoir J0</th>
        <th class="tdb-num">+ Pluie J+7</th>
        <th class="tdb-num">− ETP J+7</th>
        <th class="tdb-num">− Drainage J+7</th>
        <th class="tdb-num">Réservoir J+7</th>
        <th class="tdb-num">= Irrigations J+7</th>
      </tr>
    </thead>
    <tbody>${t}</tbody>
  </table>
  <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETP − drainage</div>`}const D={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function v(a){const n=a.id,s=new Date,t=D[a.crop]||["—"],e=t[n%t.length],o=(n*3+3)%23+3,l=+((n*1.9+5)%28).toFixed(1);let r,d;n%5===3?(r=0,d=(s.getHours()+2+n%3*3)%24):(r=(n*2+1)%6+1,d=6+n%5*2);const u=2+n%3,i=new Date(s);i.setDate(i.getDate()+r);const g=r===0?"Aujourd'hui":i.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),c=r*1440+d*60-(s.getHours()*60+s.getMinutes()),b=c>=0&&c<=600;return{pluie7past:l,daysAgo:o,product:e,winDateStr:g,winHour:d,winDur:u,isUrgent:b}}function S(){const a=document.getElementById("tdb-treatments");if(!a)return;const s=m.filter(t=>t.orgId===h).map(t=>{const e=v(t);return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop}</td>
      <td class="tdb-num">${e.pluie7past} mm</td>
      <td>il y a ${e.daysAgo} jr</td>
      <td>${e.product}</td>
      <td class="${e.isUrgent?"tdb-win-urgent":""}">${e.isUrgent?'<i class="bi bi-alarm-fill"></i> ':""}${e.winDateStr} — ${e.winHour}:00 — ${e.winDur}h</td>
    </tr>`}).join("");a.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th class="tdb-num">Pluie 7 derniers jours</th>
        <th>Dernier traitement</th>
        <th>Dernier produit</th>
        <th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${s}</tbody>
  </table>`}const C=["floraison","nouaison","slag","10 feuilles"];function P(a){const n=a.toLowerCase();return C.some(s=>n.includes(s))}const x={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"],kc:[.35,.5,.8,1.2],roots:[20,40,60,80]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},E={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function H(a){const n=a.id,s=x[a.crop]||E,t=n%s.stages.length,e=s.varieties[n%s.varieties.length],o=s.stages[t],l=s.nextStages[t],r=s.kc[t],d=s.roots[t],u=(n*2+5)%18+4,i=new Date("2026-04-18");i.setDate(i.getDate()+u);const g=i.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"long",year:"numeric"}).replace(/^(\w)/,c=>c.toUpperCase()).replace(/\.?\s(\w)/,(c,b)=>`. ${b.toUpperCase()}`);return{variety:e,stage:o,nextStage:l,kc:r,rootDepth:d,nextDateStr:g,daysToNext:u}}function w(){const a=document.getElementById("tdb-phenology");if(!a)return;const s=m.filter(t=>t.orgId===h).map(t=>{const e=H(t);return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop}</td>
      <td>${e.variety}</td>
      <td class="${P(e.stage)?"tdb-stage-key":""}">${e.stage}</td>
      <td class="tdb-num">${e.kc.toFixed(2)}</td>
      <td class="tdb-num">${e.rootDepth} cm</td>
      <td>${e.nextDateStr} <span class="tdb-next-stage-delta">(dans ${e.daysToNext} j)</span> — <span class="tdb-next-stage-name">${e.nextStage}</span></td>
    </tr>`}).join("");a.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Variété</th>
        <th>Stade phénologique</th>
        <th class="tdb-num">Kc</th>
        <th class="tdb-num">Profondeur racinaire</th>
        <th>Prochain stade prévu</th>
      </tr>
    </thead>
    <tbody>${s}</tbody>
  </table>`}function T(){const a=document.getElementById("tdb-sensor-events");if(!a)return;const n=f.filter(t=>t.orgId===h&&t.event);if(!n.length){a.closest(".tdb-section").hidden=!0;return}const s=n.map(t=>{const e=m.find(o=>o.id===t.parcelId);return`<tr>
      <td><a href="capteur-detail.html?id=${t.id}" class="tdb-plot-link">${t.serial}</a></td>
      <td>${t.model}</td>
      <td>${e?e.name:"—"}</td>
      <td class="tdb-irrig-needed">${t.event}</td>
    </tr>`}).join("");a.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        
        <th>Modèle</th>
        <th>Numéro de série</th>
        <th>Ville</th>
        <th>Événement</th>
      </tr>
    </thead>
    <tbody>${s}</tbody>
  </table>`}
