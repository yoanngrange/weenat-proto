import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as v}from"./breadcrumb-DEBQjfiD.js";import{p as m}from"./plots-BEtOZiNT.js";import{s as y}from"./sensors-DDe0aa9W.js";const b=1;document.addEventListener("DOMContentLoaded",()=>{v(),localStorage.getItem("menuRole"),D(),M(),I(),H(),F(),w(),C()});function w(){document.querySelectorAll(".tdb-section-hd[data-toggle]").forEach(n=>{n.style.cursor="pointer",n.addEventListener("click",e=>{if(e.target.closest("a")||e.target.closest(".tdb-widget-menu-btn")||e.target.closest(".tdb-widget-menu-popup"))return;const t=n.nextElementSibling.classList.toggle("tdb-collapsed");n.querySelector(".tdb-chevron").classList.toggle("tdb-chevron-down",t)})})}function C(){document.querySelectorAll(".tdb-widget-menu-btn").forEach(n=>{n.addEventListener("click",e=>{e.stopPropagation(),document.querySelectorAll(".tdb-widget-menu-popup").forEach(s=>s.remove());const a=document.createElement("div");a.className="tdb-widget-menu-popup",a.innerHTML=`
        <button class="tdb-widget-menu-item"><i class="bi bi-x-lg"></i> Retirer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-arrows-move"></i> Déplacer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-gear"></i> Configurer le widget</button>`,n.parentElement.appendChild(a),a.querySelectorAll(".tdb-widget-menu-item").forEach(s=>{s.addEventListener("click",()=>{a.remove(),alert("Fonctionnalité à venir")})});const t=()=>a.remove();setTimeout(()=>document.addEventListener("click",t,{once:!0}),0)})})}const h=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];function B(n,e){const a=n.id*7+e*31,t=d=>(Math.sin(a*d)+1)/2;return{pluie:t(.7)>.65?+(t(1.3)*12).toFixed(1):0,tMin:Math.round(8+t(2.1)*8),tMax:Math.round(16+t(3.7)*14),hum:Math.round(45+t(4.3)*45),vent:Math.round(8+t(5.1)*30),etr:+(.5+t(6.7)*5).toFixed(1)}}function D(){const n=document.getElementById("tdb-forecast");if(!n)return;const e=m.filter(r=>r.orgId===b),a=new Date,t=[0,1,2].map(r=>{const o=new Date(a);return o.setDate(o.getDate()+r),`<th colspan="4" class="tdb-fc-day-hd">${r===0?`Aujourd'hui ${o.getDate()} ${h[o.getMonth()]}`:r===1?`Demain ${o.getDate()} ${h[o.getMonth()]}`:`${o.getDate()} ${h[o.getMonth()]}`}</th>`}).join(""),s=[0,1,2].map(()=>`<th class="tdb-num tdb-fc-sub">Pluie</th>
     <th class="tdb-num tdb-fc-sub">T° min/max</th>
     <th class="tdb-num tdb-fc-sub">Vent</th>
     <th class="tdb-num tdb-fc-sub">ETR</th>`).join(""),d=e.map(r=>{const o=[0,1,2].map(l=>{const i=B(r,l);return`<td class="tdb-num tdb-fc-cell">${i.pluie>0?`<span class="tdb-fc-rain">${i.pluie} mm</span>`:'<span class="tdb-fc-dry">—</span>'}</td>
        <td class="tdb-num tdb-fc-cell">${i.tMin}°C / ${i.tMax}°C</td>
        <td class="tdb-num tdb-fc-cell">${i.vent} km/h</td>
        <td class="tdb-num tdb-fc-cell">${i.etr} mm</td>`}).join("");return`<tr>
      <td><a href="parcelle-detail.html?id=${r.id}" class="tdb-plot-link">${r.name}</a></td>
      <td>${r.crop||"—"}</td>
      ${o}
    </tr>`}).join("");n.innerHTML=`<table class="tdb-parcels-table tdb-fc-table">
    <thead>
      <tr>
        <th rowspan="2">Parcelle</th>
        <th rowspan="2">Culture</th>
        ${t}
      </tr>
      <tr class="tdb-fc-sub-row">${s}</tr>
    </thead>
    <tbody>${d}</tbody>
  </table>`}function S(n){const e=n.id;if(e%3===0){const a=Math.round((e*1.7+8)%30+5),t=e%4+1;return{planned:!0,mm:a,daysAhead:t}}return{planned:!1}}function x(n){return`<span class="tdb-th-info" data-tooltip="${n}">i</span>`}function E(n){const e=n.id,a=+((e*2.3+7)%32).toFixed(1),t=+((e*1.1+14)%14+10).toFixed(1),s=Math.round(n.reserveHydrique*((e%5+1)/10)),d=+((e*.6+1)%6).toFixed(1),r=+(s+a-t-d).toFixed(1);return{pluie7j:a,etp7j:t,teneurEau:s,drainage7j:d,balance:r,teneurEauJ7:r}}function M(n){const e=document.getElementById("tdb-parcels");if(!e)return;const t=m.filter(r=>r.orgId===b).map(r=>{const o=E(r),l=S(r),i=l.planned?`<td class="tdb-num">${l.mm} mm <span class="tdb-irrig-days">J+${l.daysAhead}</span></td>`:'<td class="tdb-num"><button class="tdb-saisir-btn">Saisir</button></td>';return`<tr>
      <td><a href="parcelle-detail.html?id=${r.id}" class="tdb-plot-link">${r.name}</a></td>
      <td>${r.crop||'<span class="tdb-missing">—</span>'}</td>
      <td>${r.texture||'<span class="tdb-missing">—</span>'}</td>
      <td class="tdb-num">${o.teneurEau} mm</td>
      <td class="tdb-num">${o.pluie7j} mm</td>
      <td class="tdb-num">${o.etp7j} mm</td>
      <td class="tdb-num ${o.teneurEauJ7<0?"tdb-irrig-needed":""}">${o.teneurEauJ7} mm</td>
      <td class="tdb-num ${o.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${o.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(o.balance)+" mm"}</td>
      ${i}
    </tr>`}).join(""),d=[{label:"Parcelle",tip:"Nom de la parcelle"},{label:"Culture",tip:"Culture actuellement en place sur la parcelle"},{label:"Texture de sol",tip:"Texture du sol renseignée pour la parcelle"},{label:"Rés. J0",tip:"Niveau estimé du réservoir hydrique aujourd'hui (mm)",num:!0},{label:"+ Pluie J+7",tip:"Cumul de pluie prévu sur les 7 prochains jours (mm)",num:!0},{label:"− ETR J+7",tip:"Évapotranspiration réelle prévue sur 7 jours (mm)",num:!0},{label:"Rés. J+7",tip:"Niveau estimé du réservoir hydrique dans 7 jours (mm)",num:!0},{label:"= Irr. J+7",tip:"Volume d'irrigation nécessaire sur les 7 prochains jours",num:!0},{label:"Irr. planifiées",tip:"Irrigations planifiées sur les 7 prochains jours",num:!0}].map(r=>`<th${r.num?' class="tdb-num"':""}>${r.label}${x(r.tip)}</th>`).join("");e.innerHTML=`
    <table class="tdb-parcels-table">
      <thead><tr>${d}</tr></thead>
      <tbody>${t}</tbody>
    </table>
    <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETR − drainage</div>`}const P={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function T(n){const e=n.id,a=new Date,t=P[n.crop]||["—"],s=t[e%t.length],d=(e*3+3)%23+3,r=+((e*1.9+5)%28).toFixed(1);let o,l;e%5===3?(o=0,l=(a.getHours()+2+e%3*3)%24):(o=(e*2+1)%6+1,l=6+e%5*2);const i=2+e%3,c=new Date(a);c.setDate(c.getDate()+o);const p=o===0?"Aujourd'hui":c.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),u=o*1440+l*60-(a.getHours()*60+a.getMinutes()),g=u>=0&&u<=600;return{pluie7past:r,daysAgo:d,product:s,winDateStr:p,winHour:l,winDur:i,isUrgent:g}}function H(){const n=document.getElementById("tdb-treatments");if(!n)return;const a=m.filter(t=>t.orgId===b).map(t=>{const s=T(t);return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td class="${s.isUrgent?"tdb-win-urgent":""}">${s.isUrgent?'<i class="bi bi-alarm-fill"></i> ':""}${s.winDateStr} — ${s.winHour}:00 → ${(s.winHour+s.winDur)%24}:00</td>
    </tr>`}).join("");n.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${a}</tbody>
  </table>`}const A=["floraison","nouaison","slag","10 feuilles"];function j(n){const e=n.toLowerCase();return A.some(a=>e.includes(a))}const f={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"],kc:[.35,.5,.8,1.2],roots:[20,40,60,80]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},$={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function L(n){const e=n.id,a=f[n.crop]||$,t=e%a.stages.length,s=a.varieties[e%a.varieties.length],d=a.stages[t],r=a.nextStages[t],o=a.kc[t],l=a.roots[t],i=(e*2+5)%18+4,c=new Date("2026-04-18");c.setDate(c.getDate()+i);const p=c.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"long",year:"numeric"}).replace(/^(\w)/,u=>u.toUpperCase()).replace(/\.?\s(\w)/,(u,g)=>`. ${g.toUpperCase()}`);return{variety:s,stage:d,nextStage:r,kc:o,rootDepth:l,nextDateStr:p,daysToNext:i}}const k=new Set(["Blé tendre","Blé dur","Maïs","Maïs ensilage","Pomme de terre","Carotte","Tournesol","Pommier"]);function I(){const n=document.getElementById("tdb-phenology");if(!n)return;const a=m.filter(t=>t.orgId===b).map(t=>{const s=L(t),r=(f[t.crop]||$).stages.map(i=>`<option${i===s.stage?" selected":""}>${i}</option>`).join(""),l=t.crop&&k.has(t.crop)?`${s.nextDateStr} <span class="tdb-next-stage-delta">(dans ${s.daysToNext} j)</span> — <span class="tdb-next-stage-name">${s.nextStage}</span>`:"—";return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td>${s.variety}</td>
      <td><select class="tdb-stage-sel ${j(s.stage)?"tdb-stage-key":""}">${r}</select></td>
      <td class="tdb-num">${s.kc.toFixed(2)}</td>
      <td class="tdb-num">${s.rootDepth} cm</td>
      <td>${l}</td>
    </tr>`}).join("");n.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Variété</th>
        <th>Stade actuel</th>
        <th class="tdb-num">Kc</th>
        <th class="tdb-num">Racines</th>
        <th>Prochain stade prévu</th>
      </tr>
    </thead>
    <tbody>${a}</tbody>
  </table>`}const N={"capteur couché":{icon:"bi-arrow-down-circle-fill",cls:"tdb-ev-warn"},"émissions interrompues":{icon:"bi-wifi-off",cls:"tdb-ev-danger"},"capteur déplacé":{icon:"bi-geo-alt-fill",cls:"tdb-ev-warn"},"cuillère bloquée":{icon:"bi-x-octagon-fill",cls:"tdb-ev-danger"}};function F(){const n=document.getElementById("tdb-sensor-events");if(!n)return;const e=y.filter(t=>{const s=t.event;return s&&(Array.isArray(s)?s.length>0:!0)}).filter(t=>t.orgId===b);if(!e.length){n.closest(".tdb-section").hidden=!0;return}const a=e.map(t=>{const s=m.find(o=>o.id===t.parcelId),r=`<div class="tdb-ev-stack">${(Array.isArray(t.event)?t.event:[t.event]).map(o=>{const l=N[o]||{icon:"bi-exclamation-circle-fill",cls:"tdb-ev-warn"};return`<span class="tdb-ev-badge ${l.cls}"><i class="bi ${l.icon}"></i> ${o}</span>`}).join("")}</div>`;return`<tr>
      <td>${t.model}</td>
      <td><a href="capteur-detail.html?id=${t.id}" class="tdb-plot-link">${t.serial}</a></td>
      <td>${s?s.ville||s.name:"—"}</td>
      <td class="tdb-ev-cell">${r}</td>
    </tr>`}).join("");n.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Modèle</th>
        <th>Numéro de série</th>
        <th>Ville</th>
        <th>Événements</th>
      </tr>
    </thead>
    <tbody>${a}</tbody>
  </table>`}
