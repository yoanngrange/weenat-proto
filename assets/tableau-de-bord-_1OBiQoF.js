import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as P}from"./breadcrumb-DEBQjfiD.js";import{p as m}from"./plots-BFmvZ9cD.js";import{s as T}from"./sensors-Bk1sI8WC.js";import{b as B,I as H}from"./irrigations-WiYYdaCC.js";import{e as I}from"./store-InOgbptE.js";import{o as L}from"./orgs-Cx4wNzLL.js";import"./irrigation-web-XNK25oaI.js";import"./constants-C2D4LmLD.js";I(m);const D="/weenat-proto/icons/";function k(e){return e==="serre"?`<img src="${D}greenhouse.png" width="16" height="16" title="Serre" style="vertical-align:middle;opacity:.75">`:e==="plein champ"?`<img src="${D}fields.png"     width="16" height="16" title="Plein champ" style="vertical-align:middle;opacity:.75">`:""}function A(e){return e.substrate?"Substrat : "+e.substrate:e.texture||"—"}const f=1;document.addEventListener("DOMContentLoaded",()=>{P();const a=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau";G(),S(a),z(),V(),Q(),F(),N(),j(),window.addEventListener("irrig-updated",()=>S(a))});function j(){var e,a;(e=document.getElementById("tdb-strategy-btn"))==null||e.addEventListener("click",s=>{var t;s.stopPropagation(),(t=window.WebIrrig)==null||t.openSaison()}),(a=document.getElementById("tdb-parcels"))==null||a.addEventListener("click",s=>{var d;const t=s.target.closest(".tdb-saisir-btn[data-plot-id]");if(!t)return;const n=m.find(r=>r.id===+t.dataset.plotId);n&&((d=window.WebIrrig)==null||d.openSaisie({ids:[n.id],label:n.name}))})}function F(){document.querySelectorAll(".tdb-section-hd[data-toggle]").forEach(e=>{e.style.cursor="pointer",e.addEventListener("click",a=>{if(a.target.closest("a")||a.target.closest(".tdb-widget-menu-btn")||a.target.closest(".tdb-widget-menu-popup"))return;const t=e.nextElementSibling.classList.toggle("tdb-collapsed");e.querySelector(".tdb-chevron").classList.toggle("tdb-chevron-down",t)})})}function N(){document.querySelectorAll(".tdb-widget-menu-btn").forEach(e=>{e.addEventListener("click",a=>{a.stopPropagation(),document.querySelectorAll(".tdb-widget-menu-popup").forEach(n=>n.remove());const s=document.createElement("div");s.className="tdb-widget-menu-popup",s.innerHTML=`
        <button class="tdb-widget-menu-item"><i class="bi bi-x-lg"></i> Retirer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-arrows-move"></i> Déplacer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-gear"></i> Configurer le widget</button>`,e.parentElement.appendChild(s),s.querySelectorAll(".tdb-widget-menu-item").forEach(n=>{n.addEventListener("click",()=>{s.remove(),alert("Fonctionnalité à venir")})});const t=()=>s.remove();setTimeout(()=>document.addEventListener("click",t,{once:!0}),0)})})}const y=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],R=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function O(e,a){const s=e.id*7+a*31,t=d=>(Math.sin(s*d)+1)/2;return{pluie:t(.7)>.65?+(t(1.3)*12).toFixed(1):0,tMin:Math.round(8+t(2.1)*8),tMax:Math.round(16+t(3.7)*14),hum:Math.round(45+t(4.3)*45),vent:Math.round(8+t(5.1)*30),etr:+(.5+t(6.7)*5).toFixed(1)}}function G(){const e=document.getElementById("tdb-forecast");if(!e)return;const a=m.filter(r=>r.orgId===f),s=new Date,t=[0,1,2,3,4].map(r=>{const i=new Date(s);return i.setDate(i.getDate()+r),`<th colspan="3" class="tdb-fc-day-hd">${r===0?`Aujourd'hui ${i.getDate()} ${y[i.getMonth()]}`:r===1?`Demain ${i.getDate()} ${y[i.getMonth()]}`:`${R[i.getDay()]}. ${i.getDate()} ${y[i.getMonth()]}`}</th>`}).join(""),n=[0,1,2,3,4].map(()=>`<th class="tdb-num tdb-fc-sub">Pluie</th>
     <th class="tdb-num tdb-fc-sub">T° min/max</th>
     <th class="tdb-num tdb-fc-sub">Vent</th>`).join(""),d=a.map(r=>{const i=[0,1,2,3,4].map(c=>{const u=O(r,c);return`<td class="tdb-num tdb-fc-cell">${u.pluie>0?`<span class="tdb-fc-rain">${u.pluie} mm</span>`:'<span class="tdb-fc-dry">—</span>'}</td>
        <td class="tdb-num tdb-fc-cell">${u.tMin}°C / ${u.tMax}°C</td>
        <td class="tdb-num tdb-fc-cell">${u.vent} km/h</td>`}).join("");return`<tr>
      <td><a href="previsions.html?plot=${r.id}" class="tdb-plot-link">${r.name}</a></td>
      <td>${r.crop||"—"}</td>
      ${i}
    </tr>`}).join("");e.innerHTML=`<table class="tdb-parcels-table tdb-fc-table">
    <thead>
      <tr>
        <th rowspan="2">Parcelle</th>
        <th rowspan="2">Culture</th>
        ${t}
      </tr>
      <tr class="tdb-fc-sub-row">${n}</tr>
    </thead>
    <tbody>${d}</tbody>
  </table>`}function _(e){const a=new Date().toISOString().split("T")[0],s=B(m.filter(r=>r.orgId===f)),t=new Set([e.name]);for(const r of s)r.ids.includes(e.id)&&t.add(r.label);const n=H.filter(r=>!r.real&&t.has(r.label)&&r.iso>=a).sort((r,i)=>r.iso<i.iso?-1:1);if(!n.length)return{planned:!1};const d=Math.round((new Date(n[0].iso)-new Date(a))/864e5);return{planned:!0,mm:n[0].mm,daysAhead:d}}function q(e){return`<span class="tdb-th-info" data-tooltip="${e}">i</span>`}function w(e){const a=e.id,s=+((a*2.3+7)%32).toFixed(1),t=+((a*1.1+14)%14+10).toFixed(1),n=Math.round(e.reserveHydrique*((a%5+1)/10)),d=+((a*.6+1)%6).toFixed(1),r=+(n+s-t-d).toFixed(1);return{pluie7j:s,etp7j:t,teneurEau:n,drainage7j:d,balance:r,teneurEauJ7:r}}function S(e,a=null){var x;const s=document.getElementById("tdb-parcels");if(!s)return;let t;e?t=m.filter(o=>o.orgId===f):a?t=m.filter(o=>o.orgId===a):t=m;const n=e?"":(()=>{const o=L.filter(l=>l.id!==100).sort((l,g)=>l.name.localeCompare(g.name));return`<div style="padding:8px 12px 0">
      <select id="tdb-org-filter" style="padding:5px 8px;border:1px solid var(--bdr);border-radius:6px;font-size:13px;background:var(--bg2);color:var(--txt1)">
        <option value="">Toutes les organisations (${m.length})</option>
        ${o.map(l=>`<option value="${l.id}"${a===l.id?" selected":""}>${l.name}</option>`).join("")}
      </select>
    </div>`})(),d=11,r=o=>`<tr><td colspan="${d}" style="padding:8px 12px 4px;font-size:12px;font-weight:700;color:var(--txt2);background:var(--bg2);border-top:2px solid var(--bdr);letter-spacing:.02em">⬡ ${o}</td></tr>`,i=o=>{const l=w(o),g=_(o),$=g.planned?`<td class="tdb-num">${g.mm} mm <span class="tdb-irrig-days">J+${g.daysAhead}</span></td>`:`<td class="tdb-num"><button class="tdb-saisir-btn" data-plot-id="${o.id}">Saisir</button></td>`;return`<tr>
      <td><a href="irrigation.html?plot=${o.id}" class="tdb-plot-link">${o.name}</a></td>
      <td>${o.crop||'<span class="tdb-missing">—</span>'}</td>
      <td>${o.irrigation||'<span class="tdb-missing">—</span>'}</td>
      <td style="text-align:center">${k(o.env)}</td>
      <td>${A(o)}</td>
      <td class="tdb-num">${l.teneurEau} mm</td>
      <td class="tdb-num">${l.pluie7j} mm</td>
      <td class="tdb-num">${l.etp7j} mm</td>
      <td class="tdb-num ${l.teneurEauJ7<0?"tdb-irrig-needed":""}">${l.teneurEauJ7} mm</td>
      <td class="tdb-num ${l.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${l.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(l.balance)+" mm"}</td>
      ${$}
    </tr>`},c=(o,l)=>w(o).balance-w(l).balance,u=B(t),p=new Set(u.flatMap(o=>o.ids)),h=t.filter(o=>!p.has(o.id));let b="";for(const o of u){const l=o.ids.map(g=>t.find($=>$.id===g)).filter(Boolean).sort(c);l.length&&(b+=r(o.label)+l.map(i).join(""))}h.length&&(u.length&&(b+=r("Autres parcelles")),b+=h.sort(c).map(i).join(""));const M=[{label:"Parcelle",tip:"Nom de la parcelle"},{label:"Culture",tip:"Culture actuellement en place sur la parcelle"},{label:"Type d'irrigation",tip:"Type de système d'irrigation de la parcelle"},{label:"Env.",tip:"Environnement de la parcelle (plein champ, serre)"},{label:"Texture de sol",tip:"Texture du sol renseignée pour la parcelle"},{label:"Rés. J0",tip:"Niveau estimé du réservoir hydrique aujourd'hui (mm)",num:!0},{label:"+ Pluie J+7",tip:"Cumul de pluie prévu sur les 7 prochains jours (mm)",num:!0},{label:"− ETR J+7",tip:"Évapotranspiration réelle prévue sur 7 jours (mm)",num:!0},{label:"Rés. J+7",tip:"Niveau estimé du réservoir hydrique dans 7 jours (mm)",num:!0},{label:"= Irr. J+7",tip:"Volume d'irrigation nécessaire sur les 7 prochains jours",num:!0},{label:"Irr. planifiées",tip:"Irrigations planifiées sur les 7 prochains jours",num:!0}].map(o=>`<th${o.num?' class="tdb-num"':""}>${o.label}${q(o.tip)}</th>`).join("");s.innerHTML=`
    ${n}
    <table class="tdb-parcels-table">
      <thead><tr>${M}</tr></thead>
      <tbody>${b}</tbody>
    </table>
    <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETR − drainage</div>`,(x=s.querySelector("#tdb-org-filter"))==null||x.addEventListener("change",o=>{const l=o.target.value;S(e,l?+l:null)})}const J={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function K(e){const a=e.id,s=new Date,t=J[e.crop]||["—"],n=t[a%t.length],d=(a*3+3)%23+3,r=+((a*1.9+5)%28).toFixed(1);let i,c;a%5===3?(i=0,c=(s.getHours()+2+a%3*3)%24):(i=(a*2+1)%6+1,c=6+a%5*2);const u=2+a%3,p=new Date(s);p.setDate(p.getDate()+i);const h=i===0?"Aujourd'hui":p.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),b=i*1440+c*60-(s.getHours()*60+s.getMinutes()),v=b>=0&&b<=600;return{pluie7past:r,daysAgo:d,product:n,winDateStr:h,winHour:c,winDur:u,isUrgent:v}}function V(){const e=document.getElementById("tdb-treatments");if(!e)return;const s=m.filter(t=>t.orgId===f).map(t=>{const n=K(t),d=n.daysAgo>21?{cls:"tdb-risk-high",label:"Élevé"}:n.daysAgo>16?{cls:"tdb-risk-medium",label:"Modéré"}:{cls:"tdb-risk-low",label:"Faible"};return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td>${n.product}</td>
      <td><span class="tdb-risk-badge ${d.cls}">${d.label}</span></td>
      <td class="${n.isUrgent?"tdb-win-urgent":""}">${n.isUrgent?'<i class="bi bi-alarm-fill"></i> ':""}${n.winDateStr} — ${n.winHour}:00 → ${(n.winHour+n.winDur)%24}:00</td>
    </tr>`}).join("");e.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Dernier produit</th>
        <th>Risque maladie</th>
        <th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${s}</tbody>
  </table>`}const U=["floraison","nouaison","slag","10 feuilles"];function W(e){const a=e.toLowerCase();return U.some(s=>a.includes(s))}const C={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"],kc:[.35,.5,.8,1.2],roots:[20,40,60,80]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},E={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function X(e){const a=e.id,s=C[e.crop]||E,t=a%s.stages.length,n=s.varieties[a%s.varieties.length],d=s.stages[t],r=s.nextStages[t],i=s.kc[t],c=s.roots[t],u=(a*2+5)%18+4,p=new Date("2026-04-18");p.setDate(p.getDate()+u);const h=p.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"long",year:"numeric"}).replace(/^(\w)/,b=>b.toUpperCase()).replace(/\.?\s(\w)/,(b,v)=>`. ${v.toUpperCase()}`);return{variety:n,stage:d,nextStage:r,kc:i,rootDepth:c,nextDateStr:h,daysToNext:u}}const Y=new Set(["Blé tendre","Blé dur","Maïs","Maïs ensilage","Pomme de terre","Carotte","Tournesol","Pommier"]);function z(){const e=document.getElementById("tdb-phenology");if(!e)return;const s=m.filter(t=>t.orgId===f).map(t=>{const n=X(t),r=(C[t.crop]||E).stages.map(u=>`<option${u===n.stage?" selected":""}>${u}</option>`).join(""),c=t.crop&&Y.has(t.crop)?`${n.nextDateStr} <span class="tdb-next-stage-delta">(dans ${n.daysToNext} j)</span> — <span class="tdb-next-stage-name">${n.nextStage}</span>`:"—";return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}&tab=donnees" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td>${n.variety}</td>
      <td><select class="tdb-stage-sel ${W(n.stage)?"tdb-stage-key":""}">${r}</select></td>
      <td class="tdb-num">${n.kc.toFixed(2)}</td>
      <td class="tdb-num">${n.rootDepth} cm</td>
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
  </table>`}const Z={"capteur couché":{icon:"bi-arrow-down-circle-fill",cls:"tdb-ev-warn"},"émissions interrompues":{icon:"bi-wifi-off",cls:"tdb-ev-danger"},"capteur déplacé":{icon:"bi-geo-alt-fill",cls:"tdb-ev-warn"},"cuillère bloquée":{icon:"bi-x-octagon-fill",cls:"tdb-ev-danger"}};function Q(){const e=document.getElementById("tdb-sensor-events");if(!e)return;const a=T.filter(t=>{const n=t.event;return n&&(Array.isArray(n)?n.length>0:!0)}).filter(t=>t.orgId===f);if(!a.length){e.closest(".tdb-section").hidden=!0;return}const s=a.map(t=>{const n=m.find(i=>i.id===t.parcelId),r=`<div class="tdb-ev-stack">${(Array.isArray(t.event)?t.event:[t.event]).map(i=>{const c=Z[i]||{icon:"bi-exclamation-circle-fill",cls:"tdb-ev-warn"};return`<span class="tdb-ev-badge ${c.cls}"><i class="bi ${c.icon}"></i> ${i}</span>`}).join("")}</div>`;return`<tr>
      <td>${t.model}</td>
      <td><a href="capteur-detail.html?id=${t.id}" class="tdb-plot-link">${t.serial}</a></td>
      <td>${n?n.ville||n.name:"—"}</td>
      <td class="tdb-ev-cell">${r}</td>
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
