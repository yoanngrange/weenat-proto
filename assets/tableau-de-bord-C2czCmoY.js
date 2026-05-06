import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as p}from"./breadcrumb-DEBQjfiD.js";import{p as m}from"./plots-kiLnwOqV.js";import{s as f}from"./sensors-C_yA0hbg.js";const g=1;document.addEventListener("DOMContentLoaded",()=>{p(),localStorage.getItem("menuRole"),B(),w(),S(),T(),y()});function y(){document.querySelectorAll(".tdb-section-hd[data-toggle]").forEach(n=>{n.style.cursor="pointer",n.addEventListener("click",a=>{if(a.target.closest("a"))return;const e=n.nextElementSibling.classList.toggle("tdb-collapsed");n.querySelector(".tdb-chevron").classList.toggle("tdb-chevron-down",e)})})}function $(n){const a=n.id,s=+((a*2.3+7)%32).toFixed(1),e=+((a*1.1+14)%14+10).toFixed(1),t=Math.round(n.reserveHydrique*((a%5+1)/10)),r=+((a*.6+1)%6).toFixed(1),i=+(t+s-e-r).toFixed(1);return{pluie7j:s,etp7j:e,teneurEau:t,drainage7j:r,balance:i,teneurEauJ7:i}}function B(n){const a=document.getElementById("tdb-parcels");if(!a)return;const e=m.filter(t=>t.orgId===g).map(t=>{const r=$(t);return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop}</td>
      <td>${t.texture}</td>
      <td class="tdb-num">${r.teneurEau} mm</td>
      <td class="tdb-num">${r.pluie7j} mm</td>
      <td class="tdb-num">${r.etp7j} mm</td>
      <td class="tdb-num">${r.drainage7j} mm</td>
      <td class="tdb-num ${r.teneurEauJ7<0?"tdb-irrig-needed":""}">${r.teneurEauJ7} mm</td>
      <td class="tdb-num ${r.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${r.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(r.balance)+" mm"}</td>
    </tr>`}).join("");a.innerHTML=`<table class="tdb-parcels-table">
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
    <tbody>${e}</tbody>
  </table>
  <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETP − drainage</div>`}const D={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function v(n){const a=n.id,s=new Date,e=D[n.crop]||["—"],t=e[a%e.length],r=(a*3+3)%23+3,i=+((a*1.9+5)%28).toFixed(1);let o,d;a%5===3?(o=0,d=(s.getHours()+2+a%3*3)%24):(o=(a*2+1)%6+1,d=6+a%5*2);const u=2+a%3,l=new Date(s);l.setDate(l.getDate()+o);const h=o===0?"Aujourd'hui":l.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),c=o*1440+d*60-(s.getHours()*60+s.getMinutes()),b=c>=0&&c<=600;return{pluie7past:i,daysAgo:r,product:t,winDateStr:h,winHour:d,winDur:u,isUrgent:b}}function S(){const n=document.getElementById("tdb-treatments");if(!n)return;const s=m.filter(e=>e.orgId===g).map(e=>{const t=v(e),r=t.daysAgo>21?{cls:"risk-red",label:"Élevé"}:t.daysAgo>16?{cls:"risk-orange",label:"Modéré"}:{cls:"risk-green",label:"Faible"};return`<tr>
      <td><a href="parcelle-detail.html?id=${e.id}" class="tdb-plot-link">${e.name}</a></td>
      <td>${e.crop}</td>
      <td class="tdb-num">${t.pluie7past} mm</td>
      <td>il y a ${t.daysAgo} jr</td>
      <td>${t.product}</td>
      <td class="${t.isUrgent?"tdb-win-urgent":""}">${t.isUrgent?'<i class="bi bi-alarm-fill"></i> ':""}${t.winDateStr} — ${t.winHour}:00 → ${(t.winHour+t.winDur)%24}:00</td>
      <td><span class="risk-badge ${r.cls}">${r.label}</span></td>
    </tr>`}).join("");n.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th class="tdb-num">Pluie 7 derniers jours</th>
        <th>Dernier traitement</th>
        <th>Dernier produit</th>
        <th>Prochaine fenêtre favorable</th>
        <th>Risque</th>
      </tr>
    </thead>
    <tbody>${s}</tbody>
  </table>`}const C=["floraison","nouaison","slag","10 feuilles"];function P(n){const a=n.toLowerCase();return C.some(s=>a.includes(s))}const x={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"],kc:[.35,.5,.8,1.2],roots:[20,40,60,80]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},H={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function E(n){const a=n.id,s=x[n.crop]||H,e=a%s.stages.length,t=s.varieties[a%s.varieties.length],r=s.stages[e],i=s.nextStages[e],o=s.kc[e],d=s.roots[e],u=(a*2+5)%18+4,l=new Date("2026-04-18");l.setDate(l.getDate()+u);const h=l.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"long",year:"numeric"}).replace(/^(\w)/,c=>c.toUpperCase()).replace(/\.?\s(\w)/,(c,b)=>`. ${b.toUpperCase()}`);return{variety:t,stage:r,nextStage:i,kc:o,rootDepth:d,nextDateStr:h,daysToNext:u}}function w(){const n=document.getElementById("tdb-phenology");if(!n)return;const s=m.filter(e=>e.orgId===g).map(e=>{const t=E(e);return`<tr>
      <td><a href="parcelle-detail.html?id=${e.id}" class="tdb-plot-link">${e.name}</a></td>
      <td>${e.crop}</td>
      <td>${t.variety}</td>
      <td class="${P(t.stage)?"tdb-stage-key":""}">${t.stage}</td>
      <td class="tdb-num">${t.kc.toFixed(2)}</td>
      <td class="tdb-num">${t.rootDepth} cm</td>
      <td>${t.nextDateStr} <span class="tdb-next-stage-delta">(dans ${t.daysToNext} j)</span> — <span class="tdb-next-stage-name">${t.nextStage}</span></td>
    </tr>`}).join("");n.innerHTML=`<table class="tdb-parcels-table">
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
  </table>`}function T(){const n=document.getElementById("tdb-sensor-events");if(!n)return;const a=f.filter(e=>e.orgId===g&&e.event);if(!a.length){n.closest(".tdb-section").hidden=!0;return}const s=a.map(e=>{const t=m.find(r=>r.id===e.parcelId);return`<tr>
      <td><a href="capteur-detail.html?id=${e.id}" class="tdb-plot-link">${e.serial}</a></td>
      <td>${e.model}</td>
      <td>${t?t.name:"—"}</td>
      <td class="tdb-irrig-needed">${e.event}</td>
    </tr>`}).join("");n.innerHTML=`<table class="tdb-parcels-table">
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
