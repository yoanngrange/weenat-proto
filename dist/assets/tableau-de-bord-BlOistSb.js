import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as w}from"./breadcrumb-DEBQjfiD.js";import{p as u}from"./plots-hjmThJP8.js";import{s as S}from"./sensors-DDe0aa9W.js";import{b as B,I as E}from"./irrigations-Dbn0IxRs.js";import{d as C}from"./store-DZP_FQdH.js";import"./irrigation-web-BFPaoYvD.js";C(u);const f="/weenat-proto/icons/";function D(a){return a==="serre"?`<img src="${f}greenhouse.png" width="16" height="16" title="Serre" style="vertical-align:middle;opacity:.75">`:a==="plein champ"?`<img src="${f}fields.png"     width="16" height="16" title="Plein champ" style="vertical-align:middle;opacity:.75">`:""}const m=1;document.addEventListener("DOMContentLoaded",()=>{w(),localStorage.getItem("menuRole"),H(),v(),_(),N(),J(),P(),M(),x(),window.addEventListener("irrig-updated",()=>v())});function x(){var a,s;(a=document.getElementById("tdb-strategy-btn"))==null||a.addEventListener("click",r=>{var t;r.stopPropagation(),(t=window.WebIrrig)==null||t.openSaison()}),(s=document.getElementById("tdb-parcels"))==null||s.addEventListener("click",r=>{var i;const t=r.target.closest(".tdb-saisir-btn[data-plot-id]");if(!t)return;const n=u.find(e=>e.id===+t.dataset.plotId);n&&((i=window.WebIrrig)==null||i.openSaisie({ids:[n.id],label:n.name}))})}function P(){document.querySelectorAll(".tdb-section-hd[data-toggle]").forEach(a=>{a.style.cursor="pointer",a.addEventListener("click",s=>{if(s.target.closest("a")||s.target.closest(".tdb-widget-menu-btn")||s.target.closest(".tdb-widget-menu-popup"))return;const t=a.nextElementSibling.classList.toggle("tdb-collapsed");a.querySelector(".tdb-chevron").classList.toggle("tdb-chevron-down",t)})})}function M(){document.querySelectorAll(".tdb-widget-menu-btn").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),document.querySelectorAll(".tdb-widget-menu-popup").forEach(n=>n.remove());const r=document.createElement("div");r.className="tdb-widget-menu-popup",r.innerHTML=`
        <button class="tdb-widget-menu-item"><i class="bi bi-x-lg"></i> Retirer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-arrows-move"></i> Déplacer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-gear"></i> Configurer le widget</button>`,a.parentElement.appendChild(r),r.querySelectorAll(".tdb-widget-menu-item").forEach(n=>{n.addEventListener("click",()=>{r.remove(),alert("Fonctionnalité à venir")})});const t=()=>r.remove();setTimeout(()=>document.addEventListener("click",t,{once:!0}),0)})})}const h=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];function T(a,s){const r=a.id*7+s*31,t=i=>(Math.sin(r*i)+1)/2;return{pluie:t(.7)>.65?+(t(1.3)*12).toFixed(1):0,tMin:Math.round(8+t(2.1)*8),tMax:Math.round(16+t(3.7)*14),hum:Math.round(45+t(4.3)*45),vent:Math.round(8+t(5.1)*30),etr:+(.5+t(6.7)*5).toFixed(1)}}function H(){const a=document.getElementById("tdb-forecast");if(!a)return;const s=u.filter(e=>e.orgId===m),r=new Date,t=[0,1,2].map(e=>{const o=new Date(r);return o.setDate(o.getDate()+e),`<th colspan="4" class="tdb-fc-day-hd">${e===0?`Aujourd'hui ${o.getDate()} ${h[o.getMonth()]}`:e===1?`Demain ${o.getDate()} ${h[o.getMonth()]}`:`${o.getDate()} ${h[o.getMonth()]}`}</th>`}).join(""),n=[0,1,2].map(()=>`<th class="tdb-num tdb-fc-sub">Pluie</th>
     <th class="tdb-num tdb-fc-sub">T° min/max</th>
     <th class="tdb-num tdb-fc-sub">Vent</th>
     <th class="tdb-num tdb-fc-sub">ETR</th>`).join(""),i=s.map(e=>{const o=[0,1,2].map(l=>{const d=T(e,l);return`<td class="tdb-num tdb-fc-cell">${d.pluie>0?`<span class="tdb-fc-rain">${d.pluie} mm</span>`:'<span class="tdb-fc-dry">—</span>'}</td>
        <td class="tdb-num tdb-fc-cell">${d.tMin}°C / ${d.tMax}°C</td>
        <td class="tdb-num tdb-fc-cell">${d.vent} km/h</td>
        <td class="tdb-num tdb-fc-cell">${d.etr} mm</td>`}).join("");return`<tr>
      <td><a href="previsions.html?plot=${e.id}" class="tdb-plot-link">${e.name}</a></td>
      <td>${e.crop||"—"}</td>
      ${o}
    </tr>`}).join("");a.innerHTML=`<table class="tdb-parcels-table tdb-fc-table">
    <thead>
      <tr>
        <th rowspan="2">Parcelle</th>
        <th rowspan="2">Culture</th>
        ${t}
      </tr>
      <tr class="tdb-fc-sub-row">${n}</tr>
    </thead>
    <tbody>${i}</tbody>
  </table>`}function I(a){const s=new Date().toISOString().split("T")[0],r=B(u.filter(e=>e.orgId===m)),t=new Set([a.name]);for(const e of r)e.ids.includes(a.id)&&t.add(e.label);const n=E.filter(e=>!e.real&&t.has(e.label)&&e.iso>=s).sort((e,o)=>e.iso<o.iso?-1:1);if(!n.length)return{planned:!1};const i=Math.round((new Date(n[0].iso)-new Date(s))/864e5);return{planned:!0,mm:n[0].mm,daysAhead:i}}function L(a){return`<span class="tdb-th-info" data-tooltip="${a}">i</span>`}function A(a){const s=a.id,r=+((s*2.3+7)%32).toFixed(1),t=+((s*1.1+14)%14+10).toFixed(1),n=Math.round(a.reserveHydrique*((s%5+1)/10)),i=+((s*.6+1)%6).toFixed(1),e=+(n+r-t-i).toFixed(1);return{pluie7j:r,etp7j:t,teneurEau:n,drainage7j:i,balance:e,teneurEauJ7:e}}function v(a){const s=document.getElementById("tdb-parcels");if(!s)return;const t=u.filter(e=>e.orgId===m).map(e=>{const o=A(e),l=I(e),d=l.planned?`<td class="tdb-num">${l.mm} mm <span class="tdb-irrig-days">J+${l.daysAhead}</span></td>`:`<td class="tdb-num"><button class="tdb-saisir-btn" data-plot-id="${e.id}">Saisir</button></td>`;return`<tr>
      <td><a href="irrigation.html?plot=${e.id}" class="tdb-plot-link">${e.name}</a></td>
      <td>${e.crop||'<span class="tdb-missing">—</span>'}</td>
      <td>${e.irrigation||'<span class="tdb-missing">—</span>'}</td>
      <td style="text-align:center">${D(e.env)}</td>
      <td>${e.texture||'<span class="tdb-missing">—</span>'}</td>
      <td class="tdb-num">${o.teneurEau} mm</td>
      <td class="tdb-num">${o.pluie7j} mm</td>
      <td class="tdb-num">${o.etp7j} mm</td>
      <td class="tdb-num ${o.teneurEauJ7<0?"tdb-irrig-needed":""}">${o.teneurEauJ7} mm</td>
      <td class="tdb-num ${o.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${o.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(o.balance)+" mm"}</td>
      ${d}
    </tr>`}).join(""),i=[{label:"Parcelle",tip:"Nom de la parcelle"},{label:"Culture",tip:"Culture actuellement en place sur la parcelle"},{label:"Type d'irrigation",tip:"Type de système d'irrigation de la parcelle"},{label:"Env.",tip:"Environnement de la parcelle (plein champ, serre)"},{label:"Texture de sol",tip:"Texture du sol renseignée pour la parcelle"},{label:"Rés. J0",tip:"Niveau estimé du réservoir hydrique aujourd'hui (mm)",num:!0},{label:"+ Pluie J+7",tip:"Cumul de pluie prévu sur les 7 prochains jours (mm)",num:!0},{label:"− ETR J+7",tip:"Évapotranspiration réelle prévue sur 7 jours (mm)",num:!0},{label:"Rés. J+7",tip:"Niveau estimé du réservoir hydrique dans 7 jours (mm)",num:!0},{label:"= Irr. J+7",tip:"Volume d'irrigation nécessaire sur les 7 prochains jours",num:!0},{label:"Irr. planifiées",tip:"Irrigations planifiées sur les 7 prochains jours",num:!0}].map(e=>`<th${e.num?' class="tdb-num"':""}>${e.label}${L(e.tip)}</th>`).join("");s.innerHTML=`
    <table class="tdb-parcels-table">
      <thead><tr>${i}</tr></thead>
      <tbody>${t}</tbody>
    </table>
    <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETR − drainage</div>`}const j={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function k(a){const s=a.id,r=new Date,t=j[a.crop]||["—"],n=t[s%t.length],i=(s*3+3)%23+3,e=+((s*1.9+5)%28).toFixed(1);let o,l;s%5===3?(o=0,l=(r.getHours()+2+s%3*3)%24):(o=(s*2+1)%6+1,l=6+s%5*2);const d=2+s%3,c=new Date(r);c.setDate(c.getDate()+o);const p=o===0?"Aujourd'hui":c.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),b=o*1440+l*60-(r.getHours()*60+r.getMinutes()),g=b>=0&&b<=600;return{pluie7past:e,daysAgo:i,product:n,winDateStr:p,winHour:l,winDur:d,isUrgent:g}}function N(){const a=document.getElementById("tdb-treatments");if(!a)return;const r=u.filter(t=>t.orgId===m).map(t=>{const n=k(t);return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td class="${n.isUrgent?"tdb-win-urgent":""}">${n.isUrgent?'<i class="bi bi-alarm-fill"></i> ':""}${n.winDateStr} — ${n.winHour}:00 → ${(n.winHour+n.winDur)%24}:00</td>
    </tr>`}).join("");a.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${r}</tbody>
  </table>`}const R=["floraison","nouaison","slag","10 feuilles"];function F(a){const s=a.toLowerCase();return R.some(r=>s.includes(r))}const $={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"],kc:[.35,.5,.8,1.2],roots:[20,40,60,80]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},y={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function O(a){const s=a.id,r=$[a.crop]||y,t=s%r.stages.length,n=r.varieties[s%r.varieties.length],i=r.stages[t],e=r.nextStages[t],o=r.kc[t],l=r.roots[t],d=(s*2+5)%18+4,c=new Date("2026-04-18");c.setDate(c.getDate()+d);const p=c.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"long",year:"numeric"}).replace(/^(\w)/,b=>b.toUpperCase()).replace(/\.?\s(\w)/,(b,g)=>`. ${g.toUpperCase()}`);return{variety:n,stage:i,nextStage:e,kc:o,rootDepth:l,nextDateStr:p,daysToNext:d}}const G=new Set(["Blé tendre","Blé dur","Maïs","Maïs ensilage","Pomme de terre","Carotte","Tournesol","Pommier"]);function _(){const a=document.getElementById("tdb-phenology");if(!a)return;const r=u.filter(t=>t.orgId===m).map(t=>{const n=O(t),e=($[t.crop]||y).stages.map(d=>`<option${d===n.stage?" selected":""}>${d}</option>`).join(""),l=t.crop&&G.has(t.crop)?`${n.nextDateStr} <span class="tdb-next-stage-delta">(dans ${n.daysToNext} j)</span> — <span class="tdb-next-stage-name">${n.nextStage}</span>`:"—";return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}&tab=donnees" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td>${n.variety}</td>
      <td><select class="tdb-stage-sel ${F(n.stage)?"tdb-stage-key":""}">${e}</select></td>
      <td class="tdb-num">${n.kc.toFixed(2)}</td>
      <td class="tdb-num">${n.rootDepth} cm</td>
      <td>${l}</td>
    </tr>`}).join("");a.innerHTML=`<table class="tdb-parcels-table">
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
    <tbody>${r}</tbody>
  </table>`}const q={"capteur couché":{icon:"bi-arrow-down-circle-fill",cls:"tdb-ev-warn"},"émissions interrompues":{icon:"bi-wifi-off",cls:"tdb-ev-danger"},"capteur déplacé":{icon:"bi-geo-alt-fill",cls:"tdb-ev-warn"},"cuillère bloquée":{icon:"bi-x-octagon-fill",cls:"tdb-ev-danger"}};function J(){const a=document.getElementById("tdb-sensor-events");if(!a)return;const s=S.filter(t=>{const n=t.event;return n&&(Array.isArray(n)?n.length>0:!0)}).filter(t=>t.orgId===m);if(!s.length){a.closest(".tdb-section").hidden=!0;return}const r=s.map(t=>{const n=u.find(o=>o.id===t.parcelId),e=`<div class="tdb-ev-stack">${(Array.isArray(t.event)?t.event:[t.event]).map(o=>{const l=q[o]||{icon:"bi-exclamation-circle-fill",cls:"tdb-ev-warn"};return`<span class="tdb-ev-badge ${l.cls}"><i class="bi ${l.icon}"></i> ${o}</span>`}).join("")}</div>`;return`<tr>
      <td>${t.model}</td>
      <td><a href="capteur-detail.html?id=${t.id}" class="tdb-plot-link">${t.serial}</a></td>
      <td>${n?n.ville||n.name:"—"}</td>
      <td class="tdb-ev-cell">${e}</td>
    </tr>`}).join("");a.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Modèle</th>
        <th>Numéro de série</th>
        <th>Ville</th>
        <th>Événements</th>
      </tr>
    </thead>
    <tbody>${r}</tbody>
  </table>`}
