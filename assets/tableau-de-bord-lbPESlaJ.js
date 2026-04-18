import"./main-QvYlLaZB.js";import{u as p}from"./breadcrumb-DEBQjfiD.js";import{p as c}from"./plots-CEyFXpqF.js";import{s as f}from"./sensors-BafoiuOm.js";const u=1;document.addEventListener("DOMContentLoaded",()=>{p(),localStorage.getItem("menuRole"),$(),P(),H(),S()});function B(r){const a=r.id,n=+((a*2.3+7)%32).toFixed(1),t=+((a*1.1+14)%14+10).toFixed(1),e=Math.round(r.reserveHydrique*((a%5+1)/10)),s=+((a*.6+1)%6).toFixed(1),d=+(e+n-t-s).toFixed(1);return{pluie7j:n,etp7j:t,teneurEau:e,drainage7j:s,balance:d,teneurEauJ7:d}}function $(r){const a=document.getElementById("tdb-parcels");if(!a)return;const t=c.filter(e=>e.orgId===u).map(e=>{const s=B(e);return`<tr>
      <td><a href="parcelle-detail.html?id=${e.id}" class="tdb-plot-link">${e.name}</a></td>
      <td>${e.crop}</td>
      <td>${e.texture}</td>
      <td class="tdb-num">${s.teneurEau} mm</td>
      <td class="tdb-num">${s.pluie7j} mm</td>
      <td class="tdb-num">${s.etp7j} mm</td>
      <td class="tdb-num">${s.drainage7j} mm</td>
      <td class="tdb-num ${s.teneurEauJ7<0?"tdb-irrig-needed":""}">${s.teneurEauJ7} mm</td>
      <td class="tdb-num ${s.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${s.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(s.balance)+" mm"}</td>
    </tr>`}).join("");a.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Texture de sol</th>
        <th class="tdb-num">Teneur eau J0</th>
        <th class="tdb-num">+ Pluie J+7</th>
        <th class="tdb-num">− ETP J+7</th>
        <th class="tdb-num">− Drainage J+7</th>
        <th class="tdb-num">Teneur eau J+7</th>
        <th class="tdb-num">= Irrigations J+7</th>
      </tr>
    </thead>
    <tbody>${t}</tbody>
  </table>
  <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETP − drainage</div>`}const D={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function y(r){const a=r.id,n=new Date,t=D[r.crop]||["—"],e=t[a%t.length],s=(a*3+3)%23+3,d=+((a*1.9+5)%28).toFixed(1);let o,l;a%5===3?(o=0,l=(n.getHours()+2+a%3*3)%24):(o=(a*2+1)%6+1,l=6+a%5*2);const m=2+a%3,i=new Date(n);i.setDate(i.getDate()+o);const h=o===0?"Aujourd'hui":i.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),g=o*1440+l*60-(n.getHours()*60+n.getMinutes()),b=g>=0&&g<=600;return{pluie7past:d,daysAgo:s,product:e,winDateStr:h,winHour:l,winDur:m,isUrgent:b}}function P(){const r=document.getElementById("tdb-treatments");if(!r)return;const n=c.filter(t=>t.orgId===u).map(t=>{const e=y(t);return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop}</td>
      <td class="tdb-num">${e.pluie7past} mm</td>
      <td>il y a ${e.daysAgo} jr</td>
      <td>${e.product}</td>
      <td class="${e.isUrgent?"tdb-win-urgent":""}">${e.isUrgent?'<i class="bi bi-alarm-fill"></i> ':""}${e.winDateStr} — ${e.winHour}:00 — ${e.winDur}h</td>
    </tr>`}).join("");r.innerHTML=`<table class="tdb-parcels-table">
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
    <tbody>${n}</tbody>
  </table>`}const C={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","Épi 1 cm (BBCH 30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["Épi 1 cm","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Semis (BBCH 00)","Levée (BBCH 09)","2 feuilles (BBCH 12)","4 feuilles (BBCH 14)"],nextStages:["Levée","2 feuilles","4 feuilles","6 feuilles"],kc:[.3,.35,.4,.5],roots:[10,20,30,40]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","Épi 1 cm (BBCH 30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["Épi 1 cm","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Chute pétales (BBCH 67)"],nextStages:["Début floraison","Pleine floraison","Chute pétales","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},v={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function x(r){const a=r.id,n=C[r.crop]||v,t=a%n.stages.length,e=n.varieties[a%n.varieties.length],s=n.stages[t],d=n.nextStages[t],o=n.kc[t],l=n.roots[t],m=(a*2+5)%18+4,i=new Date("2026-04-18");i.setDate(i.getDate()+m);const h=i.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"});return{variety:e,stage:s,nextStage:d,kc:o,rootDepth:l,nextDateStr:h}}function H(){const r=document.getElementById("tdb-phenology");if(!r)return;const n=c.filter(t=>t.orgId===u).map(t=>{const e=x(t);return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop}</td>
      <td>${e.variety}</td>
      <td>${e.stage}</td>
      <td class="tdb-num">${e.kc.toFixed(2)}</td>
      <td class="tdb-num">${e.rootDepth} cm</td>
      <td>${e.nextDateStr} — ${e.nextStage}</td>
    </tr>`}).join("");r.innerHTML=`<table class="tdb-parcels-table">
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
    <tbody>${n}</tbody>
  </table>`}function S(){const r=document.getElementById("tdb-sensor-events");if(!r)return;const a=f.filter(t=>t.orgId===u&&t.event);if(!a.length){r.closest(".tdb-section").hidden=!0;return}const n=a.map(t=>{const e=c.find(s=>s.id===t.parcelId);return`<tr>
      <td><a href="capteur-detail.html?id=${t.id}" class="tdb-plot-link">${t.serial}</a></td>
      <td>${t.model}</td>
      <td>${e?e.name:"—"}</td>
      <td class="tdb-irrig-needed">${t.event}</td>
    </tr>`}).join("");r.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Numéro de série</th>
        <th>Modèle</th>
        <th>Parcelle</th>
        <th>Événement</th>
      </tr>
    </thead>
    <tbody>${n}</tbody>
  </table>`}
