import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as O}from"./breadcrumb-CzFWtd6d.js";import{p}from"./plots-DhtWL7s_.js";import{s as _}from"./sensors-CRadjF8G.js";import{I as j}from"./irrigations-C22Dtsoo.js";import{b as G,n as S,o as H}from"./store-CX9wca99.js";import{o as J}from"./orgs-DnFmvGlp.js";import"./irrigation-web-It7neldm.js";import"./constants-Dur9W-JX.js";G(p);const L="/weenat-proto/icons/";function W(e){return e==="serre"?`<img src="${L}greenhouse.png" width="16" height="16" title="Serre" style="vertical-align:middle;opacity:.75">`:e==="plein champ"?`<img src="${L}fields.png"     width="16" height="16" title="Plein champ" style="vertical-align:middle;opacity:.75">`:""}function K(e){return e.substrate?"Substrat : "+e.substrate:e.texture||"—"}const f=1;document.addEventListener("DOMContentLoaded",()=>{O();const s=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau";it(),B(s),mt(),rt(),ut(),C(),U(),Y(),z(),window.addEventListener("irrig-updated",()=>B(s))});function z(){var e;(e=document.getElementById("tdb-parcels"))==null||e.addEventListener("click",s=>{var n,l,i;const t=s.target.closest(".tdb-row-irr-btn[data-plot-id]");if(t){s.stopPropagation();const o=+t.dataset.plotId;t.dataset.action==="saisie"&&((n=window.WebIrrig)==null||n.openSaisie({ids:[o]})),t.dataset.action==="saison"&&((l=window.WebIrrig)==null||l.openSaison({ids:[o]}));return}const a=s.target.closest(".tdb-saisir-btn[data-plot-id]");if(a){const o=p.find(r=>r.id===+a.dataset.plotId);o&&((i=window.WebIrrig)==null||i.openSaisie({ids:[o.id]}))}})}function U(){document.querySelectorAll(".tdb-section-hd[data-toggle]").forEach(e=>{e.style.cursor="pointer",e.addEventListener("click",s=>{if(s.target.closest("a")||s.target.closest(".tdb-widget-menu-btn")||s.target.closest(".tdb-widget-menu-popup"))return;const a=e.nextElementSibling.classList.toggle("tdb-collapsed");e.querySelector(".tdb-chevron").classList.toggle("tdb-chevron-down",a)})})}function Y(){document.querySelectorAll(".tdb-widget-menu-btn").forEach(e=>{e.addEventListener("click",s=>{s.stopPropagation(),document.querySelectorAll(".tdb-widget-menu-popup").forEach(n=>n.remove());const t=document.createElement("div");t.className="tdb-widget-menu-popup",t.innerHTML=`
        <button class="tdb-widget-menu-item"><i class="bi bi-x-lg"></i> Retirer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-arrows-move"></i> Déplacer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-gear"></i> Configurer le widget</button>`,e.parentElement.appendChild(t),t.querySelectorAll(".tdb-widget-menu-item").forEach(n=>{n.addEventListener("click",()=>{t.remove(),alert("Fonctionnalité à venir")})});const a=()=>t.remove();setTimeout(()=>document.addEventListener("click",a,{once:!0}),0)})})}function T(e,s){const t=e.querySelector(".tdb-widget-summary"),a=e.querySelector(".tdb-widget-detail");t&&(t.hidden=s),a&&(a.hidden=!s)}function $(e,s){var t,a;(t=e.querySelector(".tdb-show-detail"))==null||t.addEventListener("click",()=>{T(e,!0)}),(a=e.querySelector(".tdb-show-summary"))==null||a.addEventListener("click",()=>{T(e,!1)})}const D=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],I=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function A(e,s){const t=e.id*7+s*31,a=l=>(Math.sin(t*l)+1)/2;return{pluie:a(.7)>.65?+(a(1.3)*12).toFixed(1):0,tMin:Math.round(8+a(2.1)*8),tMax:Math.round(16+a(3.7)*14),hum:Math.round(45+a(4.3)*45),vent:Math.round(8+a(5.1)*30),etr:+(.5+a(6.7)*5).toFixed(1)}}function v(e){const s=e.id,t=+((s*2.3+7)%32).toFixed(1),a=+((s*1.1+14)%14+10).toFixed(1),n=Math.round(e.reserveHydrique*((s%5+1)/10)),l=+((s*.6+1)%6).toFixed(1),i=+(n+t-a-l).toFixed(1);return{pluie7j:t,etp7j:a,teneurEau:n,drainage7j:l,balance:i,teneurEauJ7:i}}function X(e){const s=new Date().toISOString().split("T")[0],t=j.filter(n=>!n.real&&n.plotId===e.id&&n.iso>=s).sort((n,l)=>n.iso<l.iso?-1:1);if(!t.length)return{planned:!1};const a=Math.round((new Date(t[0].iso)-new Date(s))/864e5);return{planned:!0,mm:t[0].mm,daysAhead:a}}function N(e){const s=e.id,t=new Date;let a,n;s%5===3?(a=0,n=(t.getHours()+2+s%3*3)%24):(a=(s*2+1)%6+1,n=6+s%5*2);const l=2+s%3,i=new Date(t);i.setDate(i.getDate()+a);const o=a===0?"Aujourd'hui":i.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),r=a*1440+n*60-(t.getHours()*60+t.getMinutes()),d=r>=0&&r<=600;return{winDateStr:o,winHour:n,winDur:l,isUrgent:d,minutesFromNow:r}}const P={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"],kc:[.35,.5,.8,1.2],roots:[20,40,60,80]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},F={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function M(e){const s=e.id,t=P[e.crop]||F,a=s%t.stages.length,n=t.varieties[s%t.varieties.length],l=t.stages[a],i=t.nextStages[a],o=t.kc[a],r=t.roots[a],d=(s*2+5)%18+4,c=new Date("2026-04-18");c.setDate(c.getDate()+d);const b=c.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"long",year:"numeric"}).replace(/^(\w)/,g=>g.toUpperCase()).replace(/\.?\s(\w)/,(g,u)=>`. ${u.toUpperCase()}`);return{variety:n,stage:l,nextStage:i,kc:o,rootDepth:r,nextDateStr:b,daysToNext:d}}const Q=["floraison","nouaison","slag","10 feuilles"];function E(e){const s=e.toLowerCase();return Q.some(t=>s.includes(t))}const Z=new Set(["Blé tendre","Blé dur","Maïs","Maïs ensilage","Pomme de terre","Carotte","Tournesol","Pommier"]);function tt(e){return`<span class="tdb-th-info" data-tooltip="${e}">i</span>`}function et(e){const s=new Date().toISOString().split("T")[0],t=new Date;t.setDate(t.getDate()+7);const a=t.toISOString().split("T")[0],n=e.filter(u=>v(u).balance<0),i=j.filter(u=>!u.real&&u.iso>=s&&u.iso<=a).reduce((u,m)=>u+(m.mm||0),0),o=(u,m)=>v(u).balance-v(m).balance,d=e.slice().sort(o).slice(0,6).map(u=>{const m=v(u),h=Math.max(0,Math.min(100,u.reserveHydrique||0)),y=h>60?"tdb-mini-bar-fill--ok":h>30?"tdb-mini-bar-fill--warn":"tdb-mini-bar-fill--danger",x=m.balance>=0?"color:var(--ok)":"color:var(--warn)",k=m.balance>=0?"✓":`${m.balance} mm`;return`<div class="tdb-mini-bar-row">
      <span class="tdb-mini-bar-label" title="${u.name}">${u.name}</span>
      <div class="tdb-mini-bar-track"><div class="tdb-mini-bar-fill ${y}" style="width:${h}%"></div></div>
      <span class="tdb-mini-bar-val" style="${x}">${k}</span>
    </div>`}).join(""),c=`<div class="tdb-kpi${n.length>0?" tdb-kpi--warn":""}">
    <span class="tdb-kpi-value">${n.length}</span>
    <span class="tdb-kpi-label">parcelle${n.length!==1?"s":""} en déficit</span>
  </div>`,b=`<div class="tdb-kpi">
    <span class="tdb-kpi-value">${i>0?i+" mm":"—"}</span>
    <span class="tdb-kpi-label">irrigations planifiées J+7</span>
  </div>`,g=`<div class="tdb-kpi">
    <span class="tdb-kpi-value">${e.length}</span>
    <span class="tdb-kpi-label">parcelle${e.length!==1?"s":""}</span>
  </div>`;return`<div class="tdb-kpi-row">${c}${b}${g}</div>
    <div class="tdb-mini-bars">
      <div class="tdb-mini-bars-legend">
        <span>Réserve hydrique</span><span style="margin-left:auto">Bilan J+7</span>
      </div>
      ${d}
    </div>
    <button class="tdb-show-detail tdb-detail-btn">Voir détails</button>`}function at(e,s=null){let t;e?t=p.filter(d=>d.orgId===f):s?t=p.filter(d=>d.orgId===s):t=p;const a=e?"":(()=>{const d=J.filter(c=>c.id!==100).sort((c,b)=>c.name.localeCompare(b.name));return`<div style="padding:8px 12px 0">
      <select id="tdb-org-filter" style="padding:5px 8px;border:1px solid var(--bdr);border-radius:6px;font-size:13px;background:var(--bg2);color:var(--txt1)">
        <option value="">Toutes les organisations (${p.length})</option>
        ${d.map(c=>`<option value="${c.id}"${s===c.id?" selected":""}>${c.name}</option>`).join("")}
      </select>
    </div>`})(),n=d=>{const c=v(d),b=X(d),g=b.planned?`<td class="tdb-num">${b.mm} mm <span class="tdb-irrig-days">J+${b.daysAhead}</span></td>`:`<td class="tdb-num"><button class="tdb-saisir-btn" data-plot-id="${d.id}">Saisir</button></td>`;return`<tr>
      <td><a href="irrigation.html?plot=${d.id}" class="tdb-plot-link">${d.name}</a></td>
      <td>${d.crop||'<span class="tdb-missing">—</span>'}</td>
      <td>${d.irrigation||'<span class="tdb-missing">—</span>'}</td>
      <td style="text-align:center">${W(d.env)}</td>
      <td>${K(d)}</td>
      <td class="tdb-num">${c.teneurEau} mm</td>
      <td class="tdb-num">${c.pluie7j} mm</td>
      <td class="tdb-num">${c.etp7j} mm</td>
      <td class="tdb-num ${c.teneurEauJ7<0?"tdb-irrig-needed":""}">${c.teneurEauJ7} mm</td>
      <td class="tdb-num ${c.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${c.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(c.balance)+" mm"}</td>
      ${g}
    </tr>`},l=(d,c)=>v(d).balance-v(c).balance,i=t.slice().sort(l).map(n).join(""),r=[{label:"Parcelle",tip:"Nom de la parcelle"},{label:"Culture",tip:"Culture actuellement en place sur la parcelle"},{label:"Type d'irrigation",tip:"Type de système d'irrigation de la parcelle"},{label:"Env.",tip:"Environnement de la parcelle (plein champ, serre)"},{label:"Texture de sol",tip:"Texture du sol renseignée pour la parcelle"},{label:"Rés. J0",tip:"Niveau estimé du réservoir hydrique aujourd'hui (mm)",num:!0},{label:"+ Pluie J+7",tip:"Cumul de pluie prévu sur les 7 prochains jours (mm)",num:!0},{label:"− ETR J+7",tip:"Évapotranspiration réelle prévue sur 7 jours (mm)",num:!0},{label:"Rés. J+7",tip:"Niveau estimé du réservoir hydrique dans 7 jours (mm)",num:!0},{label:"= Irr. J+7",tip:"Volume d'irrigation nécessaire sur les 7 prochains jours",num:!0},{label:"Irr. planifiées",tip:"Irrigations planifiées sur les 7 prochains jours",num:!0}].map(d=>`<th${d.num?' class="tdb-num"':""}>${d.label}${tt(d.tip)}</th>`).join("");return`${a}
    <table class="tdb-parcels-table">
      <thead><tr>${r}</tr></thead>
      <tbody>${i}</tbody>
    </table>
    <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETR − drainage</div>`}function B(e,s=null){var l;const t=document.getElementById("tdb-parcels");if(!t)return;const a=t.querySelector(".tdb-widget-detail")&&!t.querySelector(".tdb-widget-detail").hidden,n=e?p.filter(i=>i.orgId===f):s?p.filter(i=>i.orgId===s):p;t.innerHTML=`
    <div class="tdb-widget-summary">${et(n)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${at(e,s)}
    </div>`,a&&T(t,!0),$(t),(l=t.querySelector("#tdb-org-filter"))==null||l.addEventListener("change",i=>{B(e,i.target.value?+i.target.value:null)})}function st(e){if(!e.length)return'<p class="tdb-widget-empty">Aucune parcelle</p>';const s=new Date;return`<div class="tdb-fc-strip">${[0,1,2,3,4].map(a=>{const n=new Date(s);n.setDate(n.getDate()+a);const l=a===0?"Auj.":a===1?"Dem.":I[n.getDay()];let i=0,o=0,r=0,d=0;e.forEach(V=>{const w=A(V,a);i+=w.pluie,o+=w.tMin,r+=w.tMax,d+=w.vent});const c=e.length,b=+(i/c).toFixed(1),g=Math.round(o/c),u=Math.round(r/c),m=Math.round(d/c),h=b>1,y=h?"bi-cloud-rain-fill":u>22?"bi-sun-fill":"bi-cloud-fill",x=h?"tdb-fc-dc-icon--rain":"tdb-fc-dc-icon--sun",k=b===0?"tdb-fc-dc-rain--none":b<5?"tdb-fc-dc-rain--light":"tdb-fc-dc-rain--heavy",q=b===0?"—":`${b} mm`;return`<div class="tdb-fc-day-card">
      <div class="tdb-fc-dc-day">${l}</div>
      <i class="bi ${y} tdb-fc-dc-icon ${x}"></i>
      <div class="tdb-fc-dc-temp">${g}° / ${u}°</div>
      <div class="tdb-fc-dc-rain ${k}">${q}</div>
      <div class="tdb-fc-dc-wind"><i class="bi bi-wind"></i> ${m} km/h</div>
    </div>`}).join("")}</div>
    <button class="tdb-show-detail tdb-detail-btn">Voir détails</button>`}function nt(e){const s=new Date,t=[0,1,2,3,4].map(l=>{const i=new Date(s);return i.setDate(i.getDate()+l),`<th colspan="3" class="tdb-fc-day-hd">${l===0?`Aujourd'hui ${i.getDate()} ${D[i.getMonth()]}`:l===1?`Demain ${i.getDate()} ${D[i.getMonth()]}`:`${I[i.getDay()]}. ${i.getDate()} ${D[i.getMonth()]}`}</th>`}).join(""),a=[0,1,2,3,4].map(()=>`<th class="tdb-num tdb-fc-sub">Pluie</th>
     <th class="tdb-num tdb-fc-sub">T° min/max</th>
     <th class="tdb-num tdb-fc-sub">Vent</th>`).join(""),n=e.map(l=>{const i=[0,1,2,3,4].map(o=>{const r=A(l,o);return`<td class="tdb-num tdb-fc-cell">${r.pluie>0?`<span class="tdb-fc-rain">${r.pluie} mm</span>`:'<span class="tdb-fc-dry">—</span>'}</td>
        <td class="tdb-num tdb-fc-cell">${r.tMin}°C / ${r.tMax}°C</td>
        <td class="tdb-num tdb-fc-cell">${r.vent} km/h</td>`}).join("");return`<tr>
      <td><a href="previsions.html?plot=${l.id}" class="tdb-plot-link">${l.name}</a></td>
      <td>${l.crop||"—"}</td>
      ${i}
    </tr>`}).join("");return`<table class="tdb-parcels-table tdb-fc-table">
    <thead>
      <tr>
        <th rowspan="2">Parcelle</th>
        <th rowspan="2">Culture</th>
        ${t}
      </tr>
      <tr class="tdb-fc-sub-row">${a}</tr>
    </thead>
    <tbody>${n}</tbody>
  </table>`}function it(){const e=document.getElementById("tdb-forecast");if(!e)return;const s=p.filter(t=>t.orgId===f);e.innerHTML=`
    <div class="tdb-widget-summary">${st(s)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${nt(s)}
    </div>`,$(e)}function lt(e){const t=e.map(n=>({plot:n,data:N(n)})).filter(n=>n.data.isUrgent),a=t.slice(0,3).map(n=>`
    <div class="tdb-alert-item">
      <span class="tdb-alert-plot">${n.plot.name}</span>
      <span class="tdb-alert-window">${n.data.winDateStr} — ${n.data.winHour}:00 → ${(n.data.winHour+n.data.winDur)%24}:00</span>
    </div>`).join("");return`<div class="tdb-kpi-row">
    <div class="tdb-kpi${t.length>0?" tdb-kpi--danger":""}">
      <span class="tdb-kpi-value">${t.length}</span>
      <span class="tdb-kpi-label">fenêtre${t.length!==1?"s":""} urgente${t.length!==1?"s":""} aujourd'hui</span>
    </div>
  </div>
  ${a?`<div class="tdb-alert-list">${a}</div>`:""}
  <button class="tdb-show-detail tdb-detail-btn">Voir détails</button>`}function dt(e){return`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th><th>Culture</th><th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${e.map(t=>{const a=N(t);return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td class="${a.isUrgent?"tdb-win-urgent":""}">${a.isUrgent?'<i class="bi bi-alarm-fill"></i> ':""}${a.winDateStr} — ${a.winHour}:00 → ${(a.winHour+a.winDur)%24}:00</td>
    </tr>`}).join("")}</tbody>
  </table>`}function rt(){const e=document.getElementById("tdb-treatments");if(!e)return;const s=p.filter(t=>t.orgId===f);e.innerHTML=`
    <div class="tdb-widget-summary">${lt(s)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${dt(s)}
    </div>`,$(e)}const R={"capteur couché":{icon:"bi-arrow-down-circle-fill",cls:"tdb-ev-warn"},"émissions interrompues":{icon:"bi-wifi-off",cls:"tdb-ev-danger"},"capteur déplacé":{icon:"bi-geo-alt-fill",cls:"tdb-ev-warn"},"cuillère bloquée":{icon:"bi-x-octagon-fill",cls:"tdb-ev-danger"}};function ot(e){if(!e.length)return`<div class="tdb-widget-ok">
      <i class="bi bi-check-circle-fill"></i> Aucune anomalie capteur
    </div>
    <button class="tdb-show-detail tdb-detail-btn" style="margin-top:0">Voir détails</button>`;const s={};e.forEach(a=>{(Array.isArray(a.event)?a.event:[a.event]).forEach(l=>{s[l]=(s[l]||0)+1})});const t=Object.entries(s).map(([a,n])=>`<span class="tdb-ev-badge ${(R[a]||{cls:"tdb-ev-warn"}).cls}">${a}${n>1?` ×${n}`:""}</span>`).join("");return`<div class="tdb-kpi-row">
    <div class="tdb-kpi tdb-kpi--danger">
      <span class="tdb-kpi-value">${e.length}</span>
      <span class="tdb-kpi-label">capteur${e.length!==1?"s":""} en anomalie</span>
    </div>
  </div>
  <div style="padding:0 16px 12px;display:flex;flex-wrap:wrap;gap:6px">${t}</div>
  <button class="tdb-show-detail tdb-detail-btn">Voir détails</button>`}function ct(e){return e.length?`<table class="tdb-parcels-table">
    <thead><tr><th>Modèle</th><th>Numéro de série</th><th>Ville</th><th>Événements</th></tr></thead>
    <tbody>${e.map(t=>{const a=p.find(i=>i.id===t.parcelId),l=`<div class="tdb-ev-stack">${(Array.isArray(t.event)?t.event:[t.event]).map(i=>{const o=R[i]||{icon:"bi-exclamation-circle-fill",cls:"tdb-ev-warn"};return`<span class="tdb-ev-badge ${o.cls}"><i class="bi ${o.icon}"></i> ${i}</span>`}).join("")}</div>`;return`<tr>
      <td>${t.model}</td>
      <td><a href="capteur-detail.html?id=${t.id}" class="tdb-plot-link">${t.serial}</a></td>
      <td>${a?a.ville||a.name:"—"}</td>
      <td class="tdb-ev-cell">${l}</td>
    </tr>`}).join("")}</tbody>
  </table>`:'<p class="tdb-widget-empty">Aucune anomalie capteur</p>'}function ut(){const e=document.getElementById("tdb-sensor-events");if(!e)return;const s=_.filter(t=>{const a=t.event;return a&&(Array.isArray(a)?a.length>0:!0)}).filter(t=>t.orgId===f);e.innerHTML=`
    <div class="tdb-widget-summary">${ot(s)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${ct(s)}
    </div>`,$(e)}function C(){const e=document.getElementById("tdb-cumuls");if(!e)return;const s=S(),t=s.list.filter(i=>!s.hidden.includes(i.id)),a=s.list.filter(i=>s.hidden.includes(i.id)),n=i=>`
    <div class="w-cumul-item">
      <i class="bi bi-bar-chart-fill w-cumul-icon" style="color:${i.color}"></i>
      <div class="w-cumul-body">
        <div class="w-cumul-lbl">${i.label}</div>
        <div class="w-cumul-val" style="color:${i.color}">${i.val}</div>
        <div class="w-cumul-date">${i.subjectLabel}</div>
      </div>
      <button class="tdb-cumul-del" data-id="${i.id}" title="Retirer">×</button>
    </div>`,l=a.length?`<div style="border-top:1px solid var(--bdr2);padding-top:8px;margin-top:8px">
        <div style="font-size:11px;color:var(--txt3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${a.map(i=>`
          <button class="tdb-cumul-restore" data-id="${i.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed var(--bdr);border-radius:8px;padding:7px 10px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi bi-bar-chart-fill" style="color:${i.color};font-size:14px;flex-shrink:0"></i>
            <span style="font-size:12px;color:var(--txt);flex:1">${i.label} — ${i.subjectLabel}</span>
            <i class="bi bi-plus-circle" style="color:var(--pri);font-size:14px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"";e.innerHTML=t.length||a.length?`<div class="w-cumuls-list">${t.map(n).join("")}</div>${l}`:`<p class="tdb-widget-empty">Aucun cumul enregistré. Ajoutez-en depuis l'onglet "Données" d'une parcelle.</p>`,e.querySelectorAll(".tdb-cumul-del").forEach(i=>{i.addEventListener("click",()=>{const o=+i.dataset.id,r=S();r.hidden.includes(o)||r.hidden.push(o),H(r),C()})}),e.querySelectorAll(".tdb-cumul-restore").forEach(i=>{i.addEventListener("click",()=>{const o=+i.dataset.id,r=S();r.hidden=r.hidden.filter(d=>d!==o),H(r),C()})})}function bt(e){const s=e.filter(n=>E(M(n).stage)),a=e.map(n=>({plot:n,data:M(n)})).filter(n=>n.data.daysToNext<=14).sort((n,l)=>n.data.daysToNext-l.data.daysToNext).slice(0,5).map(n=>{const l=E(n.data.stage),i=n.data.stage.split(" (")[0];return`<div class="tdb-stage-item">
      <span class="tdb-stage-crop">${n.plot.crop||"—"}</span>
      <span class="tdb-stage-plot">${n.plot.name}</span>
      <span class="tdb-risk-badge ${l?"tdb-risk-medium":"tdb-risk-low"}">${i}</span>
      <span class="tdb-stage-days">→ ${n.data.nextStage} J+${n.data.daysToNext}</span>
    </div>`}).join("");return`<div class="tdb-kpi-row">
    <div class="tdb-kpi">
      <span class="tdb-kpi-value">${e.length}</span>
      <span class="tdb-kpi-label">parcelles suivies</span>
    </div>
    <div class="tdb-kpi${s.length>0?" tdb-kpi--warn":""}">
      <span class="tdb-kpi-value">${s.length}</span>
      <span class="tdb-kpi-label">stade${s.length!==1?"s":""} clé${s.length!==1?"s":""} en cours</span>
    </div>
  </div>
  ${a?`<div class="tdb-stage-list">${a}</div>`:""}
  <button class="tdb-show-detail tdb-detail-btn">Voir détails</button>`}function pt(e){return`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th><th>Culture</th><th>Variété</th><th>Stade actuel</th>
        <th class="tdb-num">Kc</th><th class="tdb-num">Racines</th><th>Prochain stade prévu</th>
      </tr>
    </thead>
    <tbody>${e.map(t=>{const a=M(t),l=(P[t.crop]||F).stages.map(r=>`<option${r===a.stage?" selected":""}>${r}</option>`).join(""),o=t.crop&&Z.has(t.crop)?`${a.nextDateStr} <span class="tdb-next-stage-delta">(dans ${a.daysToNext} j)</span> — <span class="tdb-next-stage-name">${a.nextStage}</span>`:"—";return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}&tab=donnees" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td>${a.variety}</td>
      <td><select class="tdb-stage-sel ${E(a.stage)?"tdb-stage-key":""}">${l}</select></td>
      <td class="tdb-num">${a.kc.toFixed(2)}</td>
      <td class="tdb-num">${a.rootDepth} cm</td>
      <td>${o}</td>
    </tr>`}).join("")}</tbody>
  </table>`}function mt(){const e=document.getElementById("tdb-phenology");if(!e)return;const s=p.filter(t=>t.orgId===f);e.innerHTML=`
    <div class="tdb-widget-summary">${bt(s)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${pt(s)}
    </div>`,$(e)}
