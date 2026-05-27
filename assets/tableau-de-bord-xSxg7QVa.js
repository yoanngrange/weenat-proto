import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as w}from"./breadcrumb-DEBQjfiD.js";import{p as u}from"./plots-urzhAbT6.js";import{s as S}from"./sensors-DDe0aa9W.js";import{b as x,I as E}from"./irrigations-MeXOpmvP.js";import{d as B}from"./store-DRCbE3kB.js";import{o as C}from"./orgs-Cx4wNzLL.js";import"./irrigation-web-BzruHZYB.js";B(u);const v="/weenat-proto/icons/";function D(e){return e==="serre"?`<img src="${v}greenhouse.png" width="16" height="16" title="Serre" style="vertical-align:middle;opacity:.75">`:e==="plein champ"?`<img src="${v}fields.png"     width="16" height="16" title="Plein champ" style="vertical-align:middle;opacity:.75">`:""}const p=1;document.addEventListener("DOMContentLoaded",()=>{w();const n=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau";I(),f(n),q(),F(),K(),M(),T(),P(),window.addEventListener("irrig-updated",()=>f(n))});function P(){var e,n;(e=document.getElementById("tdb-strategy-btn"))==null||e.addEventListener("click",s=>{var t;s.stopPropagation(),(t=window.WebIrrig)==null||t.openSaison()}),(n=document.getElementById("tdb-parcels"))==null||n.addEventListener("click",s=>{var d;const t=s.target.closest(".tdb-saisir-btn[data-plot-id]");if(!t)return;const a=u.find(o=>o.id===+t.dataset.plotId);a&&((d=window.WebIrrig)==null||d.openSaisie({ids:[a.id],label:a.name}))})}function M(){document.querySelectorAll(".tdb-section-hd[data-toggle]").forEach(e=>{e.style.cursor="pointer",e.addEventListener("click",n=>{if(n.target.closest("a")||n.target.closest(".tdb-widget-menu-btn")||n.target.closest(".tdb-widget-menu-popup"))return;const t=e.nextElementSibling.classList.toggle("tdb-collapsed");e.querySelector(".tdb-chevron").classList.toggle("tdb-chevron-down",t)})})}function T(){document.querySelectorAll(".tdb-widget-menu-btn").forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation(),document.querySelectorAll(".tdb-widget-menu-popup").forEach(a=>a.remove());const s=document.createElement("div");s.className="tdb-widget-menu-popup",s.innerHTML=`
        <button class="tdb-widget-menu-item"><i class="bi bi-x-lg"></i> Retirer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-arrows-move"></i> Déplacer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-gear"></i> Configurer le widget</button>`,e.parentElement.appendChild(s),s.querySelectorAll(".tdb-widget-menu-item").forEach(a=>{a.addEventListener("click",()=>{s.remove(),alert("Fonctionnalité à venir")})});const t=()=>s.remove();setTimeout(()=>document.addEventListener("click",t,{once:!0}),0)})})}const h=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];function H(e,n){const s=e.id*7+n*31,t=d=>(Math.sin(s*d)+1)/2;return{pluie:t(.7)>.65?+(t(1.3)*12).toFixed(1):0,tMin:Math.round(8+t(2.1)*8),tMax:Math.round(16+t(3.7)*14),hum:Math.round(45+t(4.3)*45),vent:Math.round(8+t(5.1)*30),etr:+(.5+t(6.7)*5).toFixed(1)}}function I(){const e=document.getElementById("tdb-forecast");if(!e)return;const n=u.filter(o=>o.orgId===p),s=new Date,t=[0,1,2].map(o=>{const i=new Date(s);return i.setDate(i.getDate()+o),`<th colspan="4" class="tdb-fc-day-hd">${o===0?`Aujourd'hui ${i.getDate()} ${h[i.getMonth()]}`:o===1?`Demain ${i.getDate()} ${h[i.getMonth()]}`:`${i.getDate()} ${h[i.getMonth()]}`}</th>`}).join(""),a=[0,1,2].map(()=>`<th class="tdb-num tdb-fc-sub">Pluie</th>
     <th class="tdb-num tdb-fc-sub">T° min/max</th>
     <th class="tdb-num tdb-fc-sub">Vent</th>
     <th class="tdb-num tdb-fc-sub">ETR</th>`).join(""),d=n.map(o=>{const i=[0,1,2].map(c=>{const r=H(o,c);return`<td class="tdb-num tdb-fc-cell">${r.pluie>0?`<span class="tdb-fc-rain">${r.pluie} mm</span>`:'<span class="tdb-fc-dry">—</span>'}</td>
        <td class="tdb-num tdb-fc-cell">${r.tMin}°C / ${r.tMax}°C</td>
        <td class="tdb-num tdb-fc-cell">${r.vent} km/h</td>
        <td class="tdb-num tdb-fc-cell">${r.etr} mm</td>`}).join("");return`<tr>
      <td><a href="previsions.html?plot=${o.id}" class="tdb-plot-link">${o.name}</a></td>
      <td>${o.crop||"—"}</td>
      ${i}
    </tr>`}).join("");e.innerHTML=`<table class="tdb-parcels-table tdb-fc-table">
    <thead>
      <tr>
        <th rowspan="2">Parcelle</th>
        <th rowspan="2">Culture</th>
        ${t}
      </tr>
      <tr class="tdb-fc-sub-row">${a}</tr>
    </thead>
    <tbody>${d}</tbody>
  </table>`}function L(e){const n=new Date().toISOString().split("T")[0],s=x(u.filter(o=>o.orgId===p)),t=new Set([e.name]);for(const o of s)o.ids.includes(e.id)&&t.add(o.label);const a=E.filter(o=>!o.real&&t.has(o.label)&&o.iso>=n).sort((o,i)=>o.iso<i.iso?-1:1);if(!a.length)return{planned:!1};const d=Math.round((new Date(a[0].iso)-new Date(n))/864e5);return{planned:!0,mm:a[0].mm,daysAhead:d}}function j(e){return`<span class="tdb-th-info" data-tooltip="${e}">i</span>`}function A(e){const n=e.id,s=+((n*2.3+7)%32).toFixed(1),t=+((n*1.1+14)%14+10).toFixed(1),a=Math.round(e.reserveHydrique*((n%5+1)/10)),d=+((n*.6+1)%6).toFixed(1),o=+(a+s-t-d).toFixed(1);return{pluie7j:s,etp7j:t,teneurEau:a,drainage7j:d,balance:o,teneurEauJ7:o}}function f(e,n=null){var c;const s=document.getElementById("tdb-parcels");if(!s)return;let t;e?t=u.filter(r=>r.orgId===p):n?t=u.filter(r=>r.orgId===n):t=u;const a=e?"":(()=>{const r=C.filter(l=>l.id!==100).sort((l,m)=>l.name.localeCompare(m.name));return`<div style="padding:8px 12px 0">
      <select id="tdb-org-filter" style="padding:5px 8px;border:1px solid var(--bdr);border-radius:6px;font-size:13px;background:var(--bg2);color:var(--txt1)">
        <option value="">Toutes les organisations (${u.length})</option>
        ${r.map(l=>`<option value="${l.id}"${n===l.id?" selected":""}>${l.name}</option>`).join("")}
      </select>
    </div>`})(),d=t.map(r=>{const l=A(r),m=L(r),b=m.planned?`<td class="tdb-num">${m.mm} mm <span class="tdb-irrig-days">J+${m.daysAhead}</span></td>`:`<td class="tdb-num"><button class="tdb-saisir-btn" data-plot-id="${r.id}">Saisir</button></td>`;return`<tr>
      <td><a href="irrigation.html?plot=${r.id}" class="tdb-plot-link">${r.name}</a></td>
      <td>${r.crop||'<span class="tdb-missing">—</span>'}</td>
      <td>${r.irrigation||'<span class="tdb-missing">—</span>'}</td>
      <td style="text-align:center">${D(r.env)}</td>
      <td>${r.substrate?"substrat : "+r.substrate:r.texture||'<span class="tdb-missing">—</span>'}</td>
      <td class="tdb-num">${l.teneurEau} mm</td>
      <td class="tdb-num">${l.pluie7j} mm</td>
      <td class="tdb-num">${l.etp7j} mm</td>
      <td class="tdb-num ${l.teneurEauJ7<0?"tdb-irrig-needed":""}">${l.teneurEauJ7} mm</td>
      <td class="tdb-num ${l.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${l.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(l.balance)+" mm"}</td>
      ${b}
    </tr>`}).join(""),i=[{label:"Parcelle",tip:"Nom de la parcelle"},{label:"Culture",tip:"Culture actuellement en place sur la parcelle"},{label:"Type d'irrigation",tip:"Type de système d'irrigation de la parcelle"},{label:"Env.",tip:"Environnement de la parcelle (plein champ, serre)"},{label:"Texture de sol",tip:"Texture du sol renseignée pour la parcelle"},{label:"Rés. J0",tip:"Niveau estimé du réservoir hydrique aujourd'hui (mm)",num:!0},{label:"+ Pluie J+7",tip:"Cumul de pluie prévu sur les 7 prochains jours (mm)",num:!0},{label:"− ETR J+7",tip:"Évapotranspiration réelle prévue sur 7 jours (mm)",num:!0},{label:"Rés. J+7",tip:"Niveau estimé du réservoir hydrique dans 7 jours (mm)",num:!0},{label:"= Irr. J+7",tip:"Volume d'irrigation nécessaire sur les 7 prochains jours",num:!0},{label:"Irr. planifiées",tip:"Irrigations planifiées sur les 7 prochains jours",num:!0}].map(r=>`<th${r.num?' class="tdb-num"':""}>${r.label}${j(r.tip)}</th>`).join("");s.innerHTML=`
    ${a}
    <table class="tdb-parcels-table">
      <thead><tr>${i}</tr></thead>
      <tbody>${d}</tbody>
    </table>
    <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETR − drainage</div>`,(c=s.querySelector("#tdb-org-filter"))==null||c.addEventListener("change",r=>{const l=r.target.value;f(e,l?+l:null)})}const k={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function N(e){const n=e.id,s=new Date,t=k[e.crop]||["—"],a=t[n%t.length],d=(n*3+3)%23+3,o=+((n*1.9+5)%28).toFixed(1);let i,c;n%5===3?(i=0,c=(s.getHours()+2+n%3*3)%24):(i=(n*2+1)%6+1,c=6+n%5*2);const r=2+n%3,l=new Date(s);l.setDate(l.getDate()+i);const m=i===0?"Aujourd'hui":l.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),b=i*1440+c*60-(s.getHours()*60+s.getMinutes()),g=b>=0&&b<=600;return{pluie7past:o,daysAgo:d,product:a,winDateStr:m,winHour:c,winDur:r,isUrgent:g}}function F(){const e=document.getElementById("tdb-treatments");if(!e)return;const s=u.filter(t=>t.orgId===p).map(t=>{const a=N(t);return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td class="${a.isUrgent?"tdb-win-urgent":""}">${a.isUrgent?'<i class="bi bi-alarm-fill"></i> ':""}${a.winDateStr} — ${a.winHour}:00 → ${(a.winHour+a.winDur)%24}:00</td>
    </tr>`}).join("");e.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${s}</tbody>
  </table>`}const R=["floraison","nouaison","slag","10 feuilles"];function O(e){const n=e.toLowerCase();return R.some(s=>n.includes(s))}const $={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"],kc:[.35,.5,.8,1.2],roots:[20,40,60,80]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},y={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function G(e){const n=e.id,s=$[e.crop]||y,t=n%s.stages.length,a=s.varieties[n%s.varieties.length],d=s.stages[t],o=s.nextStages[t],i=s.kc[t],c=s.roots[t],r=(n*2+5)%18+4,l=new Date("2026-04-18");l.setDate(l.getDate()+r);const m=l.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"long",year:"numeric"}).replace(/^(\w)/,b=>b.toUpperCase()).replace(/\.?\s(\w)/,(b,g)=>`. ${g.toUpperCase()}`);return{variety:a,stage:d,nextStage:o,kc:i,rootDepth:c,nextDateStr:m,daysToNext:r}}const _=new Set(["Blé tendre","Blé dur","Maïs","Maïs ensilage","Pomme de terre","Carotte","Tournesol","Pommier"]);function q(){const e=document.getElementById("tdb-phenology");if(!e)return;const s=u.filter(t=>t.orgId===p).map(t=>{const a=G(t),o=($[t.crop]||y).stages.map(r=>`<option${r===a.stage?" selected":""}>${r}</option>`).join(""),c=t.crop&&_.has(t.crop)?`${a.nextDateStr} <span class="tdb-next-stage-delta">(dans ${a.daysToNext} j)</span> — <span class="tdb-next-stage-name">${a.nextStage}</span>`:"—";return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}&tab=donnees" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td>${a.variety}</td>
      <td><select class="tdb-stage-sel ${O(a.stage)?"tdb-stage-key":""}">${o}</select></td>
      <td class="tdb-num">${a.kc.toFixed(2)}</td>
      <td class="tdb-num">${a.rootDepth} cm</td>
      <td>${c}</td>
    </tr>`}).join("");e.innerHTML=`<table class="tdb-parcels-table">
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
    <tbody>${s}</tbody>
  </table>`}const J={"capteur couché":{icon:"bi-arrow-down-circle-fill",cls:"tdb-ev-warn"},"émissions interrompues":{icon:"bi-wifi-off",cls:"tdb-ev-danger"},"capteur déplacé":{icon:"bi-geo-alt-fill",cls:"tdb-ev-warn"},"cuillère bloquée":{icon:"bi-x-octagon-fill",cls:"tdb-ev-danger"}};function K(){const e=document.getElementById("tdb-sensor-events");if(!e)return;const n=S.filter(t=>{const a=t.event;return a&&(Array.isArray(a)?a.length>0:!0)}).filter(t=>t.orgId===p);if(!n.length){e.closest(".tdb-section").hidden=!0;return}const s=n.map(t=>{const a=u.find(i=>i.id===t.parcelId),o=`<div class="tdb-ev-stack">${(Array.isArray(t.event)?t.event:[t.event]).map(i=>{const c=J[i]||{icon:"bi-exclamation-circle-fill",cls:"tdb-ev-warn"};return`<span class="tdb-ev-badge ${c.cls}"><i class="bi ${c.icon}"></i> ${i}</span>`}).join("")}</div>`;return`<tr>
      <td>${t.model}</td>
      <td><a href="capteur-detail.html?id=${t.id}" class="tdb-plot-link">${t.serial}</a></td>
      <td>${a?a.ville||a.name:"—"}</td>
      <td class="tdb-ev-cell">${o}</td>
    </tr>`}).join("");e.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Modèle</th>
        <th>Numéro de série</th>
        <th>Ville</th>
        <th>Événements</th>
      </tr>
    </thead>
    <tbody>${s}</tbody>
  </table>`}
