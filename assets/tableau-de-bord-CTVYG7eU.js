import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as y}from"./breadcrumb-DEBQjfiD.js";import{p as u}from"./plots-kVXhO61e.js";import{s as w}from"./sensors-DDe0aa9W.js";import{b as S,I as B}from"./irrigations-EOSLcDmL.js";import"./irrigation-web-V1awqdH_.js";const m=1;document.addEventListener("DOMContentLoaded",()=>{y(),localStorage.getItem("menuRole"),M(),f(),F(),A(),G(),D(),E(),C(),window.addEventListener("irrig-updated",()=>f())});function C(){var a,s;(a=document.getElementById("tdb-strategy-btn"))==null||a.addEventListener("click",o=>{var t;o.stopPropagation(),(t=window.WebIrrig)==null||t.openSaison()}),(s=document.getElementById("tdb-parcels"))==null||s.addEventListener("click",o=>{var i;const t=o.target.closest(".tdb-saisir-btn[data-plot-id]");if(!t)return;const n=u.find(e=>e.id===+t.dataset.plotId);n&&((i=window.WebIrrig)==null||i.openSaisie({ids:[n.id],label:n.name}))})}function D(){document.querySelectorAll(".tdb-section-hd[data-toggle]").forEach(a=>{a.style.cursor="pointer",a.addEventListener("click",s=>{if(s.target.closest("a")||s.target.closest(".tdb-widget-menu-btn")||s.target.closest(".tdb-widget-menu-popup"))return;const t=a.nextElementSibling.classList.toggle("tdb-collapsed");a.querySelector(".tdb-chevron").classList.toggle("tdb-chevron-down",t)})})}function E(){document.querySelectorAll(".tdb-widget-menu-btn").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),document.querySelectorAll(".tdb-widget-menu-popup").forEach(n=>n.remove());const o=document.createElement("div");o.className="tdb-widget-menu-popup",o.innerHTML=`
        <button class="tdb-widget-menu-item"><i class="bi bi-x-lg"></i> Retirer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-arrows-move"></i> Déplacer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-gear"></i> Configurer le widget</button>`,a.parentElement.appendChild(o),o.querySelectorAll(".tdb-widget-menu-item").forEach(n=>{n.addEventListener("click",()=>{o.remove(),alert("Fonctionnalité à venir")})});const t=()=>o.remove();setTimeout(()=>document.addEventListener("click",t,{once:!0}),0)})})}const h=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];function x(a,s){const o=a.id*7+s*31,t=i=>(Math.sin(o*i)+1)/2;return{pluie:t(.7)>.65?+(t(1.3)*12).toFixed(1):0,tMin:Math.round(8+t(2.1)*8),tMax:Math.round(16+t(3.7)*14),hum:Math.round(45+t(4.3)*45),vent:Math.round(8+t(5.1)*30),etr:+(.5+t(6.7)*5).toFixed(1)}}function M(){const a=document.getElementById("tdb-forecast");if(!a)return;const s=u.filter(e=>e.orgId===m),o=new Date,t=[0,1,2].map(e=>{const r=new Date(o);return r.setDate(r.getDate()+e),`<th colspan="4" class="tdb-fc-day-hd">${e===0?`Aujourd'hui ${r.getDate()} ${h[r.getMonth()]}`:e===1?`Demain ${r.getDate()} ${h[r.getMonth()]}`:`${r.getDate()} ${h[r.getMonth()]}`}</th>`}).join(""),n=[0,1,2].map(()=>`<th class="tdb-num tdb-fc-sub">Pluie</th>
     <th class="tdb-num tdb-fc-sub">T° min/max</th>
     <th class="tdb-num tdb-fc-sub">Vent</th>
     <th class="tdb-num tdb-fc-sub">ETR</th>`).join(""),i=s.map(e=>{const r=[0,1,2].map(l=>{const d=x(e,l);return`<td class="tdb-num tdb-fc-cell">${d.pluie>0?`<span class="tdb-fc-rain">${d.pluie} mm</span>`:'<span class="tdb-fc-dry">—</span>'}</td>
        <td class="tdb-num tdb-fc-cell">${d.tMin}°C / ${d.tMax}°C</td>
        <td class="tdb-num tdb-fc-cell">${d.vent} km/h</td>
        <td class="tdb-num tdb-fc-cell">${d.etr} mm</td>`}).join("");return`<tr>
      <td><a href="previsions.html?plot=${e.id}" class="tdb-plot-link">${e.name}</a></td>
      <td>${e.crop||"—"}</td>
      ${r}
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
  </table>`}function P(a){const s=new Date().toISOString().split("T")[0],o=S(u.filter(e=>e.orgId===m)),t=new Set([a.name]);for(const e of o)e.ids.includes(a.id)&&t.add(e.label);const n=B.filter(e=>!e.real&&t.has(e.label)&&e.iso>=s).sort((e,r)=>e.iso<r.iso?-1:1);if(!n.length)return{planned:!1};const i=Math.round((new Date(n[0].iso)-new Date(s))/864e5);return{planned:!0,mm:n[0].mm,daysAhead:i}}function T(a){return`<span class="tdb-th-info" data-tooltip="${a}">i</span>`}function H(a){const s=a.id,o=+((s*2.3+7)%32).toFixed(1),t=+((s*1.1+14)%14+10).toFixed(1),n=Math.round(a.reserveHydrique*((s%5+1)/10)),i=+((s*.6+1)%6).toFixed(1),e=+(n+o-t-i).toFixed(1);return{pluie7j:o,etp7j:t,teneurEau:n,drainage7j:i,balance:e,teneurEauJ7:e}}function f(a){const s=document.getElementById("tdb-parcels");if(!s)return;const t=u.filter(e=>e.orgId===m).map(e=>{const r=H(e),l=P(e),d=l.planned?`<td class="tdb-num">${l.mm} mm <span class="tdb-irrig-days">J+${l.daysAhead}</span></td>`:`<td class="tdb-num"><button class="tdb-saisir-btn" data-plot-id="${e.id}">Saisir</button></td>`;return`<tr>
      <td><a href="irrigation.html?plot=${e.id}" class="tdb-plot-link">${e.name}</a></td>
      <td>${e.crop||'<span class="tdb-missing">—</span>'}</td>
      <td>${e.texture||'<span class="tdb-missing">—</span>'}</td>
      <td class="tdb-num">${r.teneurEau} mm</td>
      <td class="tdb-num">${r.pluie7j} mm</td>
      <td class="tdb-num">${r.etp7j} mm</td>
      <td class="tdb-num ${r.teneurEauJ7<0?"tdb-irrig-needed":""}">${r.teneurEauJ7} mm</td>
      <td class="tdb-num ${r.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${r.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(r.balance)+" mm"}</td>
      ${d}
    </tr>`}).join(""),i=[{label:"Parcelle",tip:"Nom de la parcelle"},{label:"Culture",tip:"Culture actuellement en place sur la parcelle"},{label:"Texture de sol",tip:"Texture du sol renseignée pour la parcelle"},{label:"Rés. J0",tip:"Niveau estimé du réservoir hydrique aujourd'hui (mm)",num:!0},{label:"+ Pluie J+7",tip:"Cumul de pluie prévu sur les 7 prochains jours (mm)",num:!0},{label:"− ETR J+7",tip:"Évapotranspiration réelle prévue sur 7 jours (mm)",num:!0},{label:"Rés. J+7",tip:"Niveau estimé du réservoir hydrique dans 7 jours (mm)",num:!0},{label:"= Irr. J+7",tip:"Volume d'irrigation nécessaire sur les 7 prochains jours",num:!0},{label:"Irr. planifiées",tip:"Irrigations planifiées sur les 7 prochains jours",num:!0}].map(e=>`<th${e.num?' class="tdb-num"':""}>${e.label}${T(e.tip)}</th>`).join("");s.innerHTML=`
    <table class="tdb-parcels-table">
      <thead><tr>${i}</tr></thead>
      <tbody>${t}</tbody>
    </table>
    <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETR − drainage</div>`}const I={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function L(a){const s=a.id,o=new Date,t=I[a.crop]||["—"],n=t[s%t.length],i=(s*3+3)%23+3,e=+((s*1.9+5)%28).toFixed(1);let r,l;s%5===3?(r=0,l=(o.getHours()+2+s%3*3)%24):(r=(s*2+1)%6+1,l=6+s%5*2);const d=2+s%3,c=new Date(o);c.setDate(c.getDate()+r);const p=r===0?"Aujourd'hui":c.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),b=r*1440+l*60-(o.getHours()*60+o.getMinutes()),g=b>=0&&b<=600;return{pluie7past:e,daysAgo:i,product:n,winDateStr:p,winHour:l,winDur:d,isUrgent:g}}function A(){const a=document.getElementById("tdb-treatments");if(!a)return;const o=u.filter(t=>t.orgId===m).map(t=>{const n=L(t);return`<tr>
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
    <tbody>${o}</tbody>
  </table>`}const j=["floraison","nouaison","slag","10 feuilles"];function k(a){const s=a.toLowerCase();return j.some(o=>s.includes(o))}const $={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"],kc:[.35,.5,.8,1.2],roots:[20,40,60,80]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},v={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function N(a){const s=a.id,o=$[a.crop]||v,t=s%o.stages.length,n=o.varieties[s%o.varieties.length],i=o.stages[t],e=o.nextStages[t],r=o.kc[t],l=o.roots[t],d=(s*2+5)%18+4,c=new Date("2026-04-18");c.setDate(c.getDate()+d);const p=c.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"long",year:"numeric"}).replace(/^(\w)/,b=>b.toUpperCase()).replace(/\.?\s(\w)/,(b,g)=>`. ${g.toUpperCase()}`);return{variety:n,stage:i,nextStage:e,kc:r,rootDepth:l,nextDateStr:p,daysToNext:d}}const R=new Set(["Blé tendre","Blé dur","Maïs","Maïs ensilage","Pomme de terre","Carotte","Tournesol","Pommier"]);function F(){const a=document.getElementById("tdb-phenology");if(!a)return;const o=u.filter(t=>t.orgId===m).map(t=>{const n=N(t),e=($[t.crop]||v).stages.map(d=>`<option${d===n.stage?" selected":""}>${d}</option>`).join(""),l=t.crop&&R.has(t.crop)?`${n.nextDateStr} <span class="tdb-next-stage-delta">(dans ${n.daysToNext} j)</span> — <span class="tdb-next-stage-name">${n.nextStage}</span>`:"—";return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}&tab=donnees" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td>${n.variety}</td>
      <td><select class="tdb-stage-sel ${k(n.stage)?"tdb-stage-key":""}">${e}</select></td>
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
    <tbody>${o}</tbody>
  </table>`}const O={"capteur couché":{icon:"bi-arrow-down-circle-fill",cls:"tdb-ev-warn"},"émissions interrompues":{icon:"bi-wifi-off",cls:"tdb-ev-danger"},"capteur déplacé":{icon:"bi-geo-alt-fill",cls:"tdb-ev-warn"},"cuillère bloquée":{icon:"bi-x-octagon-fill",cls:"tdb-ev-danger"}};function G(){const a=document.getElementById("tdb-sensor-events");if(!a)return;const s=w.filter(t=>{const n=t.event;return n&&(Array.isArray(n)?n.length>0:!0)}).filter(t=>t.orgId===m);if(!s.length){a.closest(".tdb-section").hidden=!0;return}const o=s.map(t=>{const n=u.find(r=>r.id===t.parcelId),e=`<div class="tdb-ev-stack">${(Array.isArray(t.event)?t.event:[t.event]).map(r=>{const l=O[r]||{icon:"bi-exclamation-circle-fill",cls:"tdb-ev-warn"};return`<span class="tdb-ev-badge ${l.cls}"><i class="bi ${l.icon}"></i> ${r}</span>`}).join("")}</div>`;return`<tr>
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
    <tbody>${o}</tbody>
  </table>`}
