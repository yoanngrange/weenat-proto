import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as R}from"./breadcrumb-DEBQjfiD.js";import{p}from"./plots-BFmvZ9cD.js";import{s as q}from"./sensors-wI07SRZE.js";import{I as E}from"./irrigations-C22Dtsoo.js";import{e as O}from"./store-InOgbptE.js";import{o as _}from"./orgs-Cx4wNzLL.js";import"./irrigation-web-Cptgtrcf.js";import"./constants-C2D4LmLD.js";O(p);const C="/weenat-proto/icons/";function G(e){return e==="serre"?`<img src="${C}greenhouse.png" width="16" height="16" title="Serre" style="vertical-align:middle;opacity:.75">`:e==="plein champ"?`<img src="${C}fields.png"     width="16" height="16" title="Plein champ" style="vertical-align:middle;opacity:.75">`:""}function V(e){return e.substrate?"Substrat : "+e.substrate:e.texture||"—"}const f=1;document.addEventListener("DOMContentLoaded",()=>{R();const s=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau";st(),B(s),bt(),lt(),ot(),W(),K(),J(),window.addEventListener("irrig-updated",()=>B(s))});function J(){var e;(e=document.getElementById("tdb-parcels"))==null||e.addEventListener("click",s=>{var n,i,l;const t=s.target.closest(".tdb-row-irr-btn[data-plot-id]");if(t){s.stopPropagation();const o=+t.dataset.plotId;t.dataset.action==="saisie"&&((n=window.WebIrrig)==null||n.openSaisie({ids:[o]})),t.dataset.action==="saison"&&((i=window.WebIrrig)==null||i.openSaison({ids:[o]}));return}const a=s.target.closest(".tdb-saisir-btn[data-plot-id]");if(a){const o=p.find(c=>c.id===+a.dataset.plotId);o&&((l=window.WebIrrig)==null||l.openSaisie({ids:[o.id]}))}})}function W(){document.querySelectorAll(".tdb-section-hd[data-toggle]").forEach(e=>{e.style.cursor="pointer",e.addEventListener("click",s=>{if(s.target.closest("a")||s.target.closest(".tdb-widget-menu-btn")||s.target.closest(".tdb-widget-menu-popup"))return;const a=e.nextElementSibling.classList.toggle("tdb-collapsed");e.querySelector(".tdb-chevron").classList.toggle("tdb-chevron-down",a)})})}function K(){document.querySelectorAll(".tdb-widget-menu-btn").forEach(e=>{e.addEventListener("click",s=>{s.stopPropagation(),document.querySelectorAll(".tdb-widget-menu-popup").forEach(n=>n.remove());const t=document.createElement("div");t.className="tdb-widget-menu-popup",t.innerHTML=`
        <button class="tdb-widget-menu-item"><i class="bi bi-x-lg"></i> Retirer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-arrows-move"></i> Déplacer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-gear"></i> Configurer le widget</button>`,e.parentElement.appendChild(t),t.querySelectorAll(".tdb-widget-menu-item").forEach(n=>{n.addEventListener("click",()=>{t.remove(),alert("Fonctionnalité à venir")})});const a=()=>t.remove();setTimeout(()=>document.addEventListener("click",a,{once:!0}),0)})})}function x(e,s){const t=e.querySelector(".tdb-widget-summary"),a=e.querySelector(".tdb-widget-detail");t&&(t.hidden=s),a&&(a.hidden=!s)}function $(e,s){var t,a;(t=e.querySelector(".tdb-show-detail"))==null||t.addEventListener("click",()=>{x(e,!0)}),(a=e.querySelector(".tdb-show-summary"))==null||a.addEventListener("click",()=>{x(e,!1)})}const D=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],H=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function L(e,s){const t=e.id*7+s*31,a=i=>(Math.sin(t*i)+1)/2;return{pluie:a(.7)>.65?+(a(1.3)*12).toFixed(1):0,tMin:Math.round(8+a(2.1)*8),tMax:Math.round(16+a(3.7)*14),hum:Math.round(45+a(4.3)*45),vent:Math.round(8+a(5.1)*30),etr:+(.5+a(6.7)*5).toFixed(1)}}function h(e){const s=e.id,t=+((s*2.3+7)%32).toFixed(1),a=+((s*1.1+14)%14+10).toFixed(1),n=Math.round(e.reserveHydrique*((s%5+1)/10)),i=+((s*.6+1)%6).toFixed(1),l=+(n+t-a-i).toFixed(1);return{pluie7j:t,etp7j:a,teneurEau:n,drainage7j:i,balance:l,teneurEauJ7:l}}function U(e){const s=new Date().toISOString().split("T")[0],t=E.filter(n=>!n.real&&n.plotId===e.id&&n.iso>=s).sort((n,i)=>n.iso<i.iso?-1:1);if(!t.length)return{planned:!1};const a=Math.round((new Date(t[0].iso)-new Date(s))/864e5);return{planned:!0,mm:t[0].mm,daysAhead:a}}const X={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function I(e){const s=e.id,t=new Date,a=X[e.crop]||["—"],n=a[s%a.length],i=(s*3+3)%23+3,l=+((s*1.9+5)%28).toFixed(1);let o,c;s%5===3?(o=0,c=(t.getHours()+2+s%3*3)%24):(o=(s*2+1)%6+1,c=6+s%5*2);const d=2+s%3,r=new Date(t);r.setDate(r.getDate()+o);const b=o===0?"Aujourd'hui":r.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),m=o*1440+c*60-(t.getHours()*60+t.getMinutes()),u=m>=0&&m<=600;return{pluie7past:l,daysAgo:i,product:n,winDateStr:b,winHour:c,winDur:d,isUrgent:u}}const A={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"],kc:[.35,.5,.8,1.2],roots:[20,40,60,80]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},P={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function T(e){const s=e.id,t=A[e.crop]||P,a=s%t.stages.length,n=t.varieties[s%t.varieties.length],i=t.stages[a],l=t.nextStages[a],o=t.kc[a],c=t.roots[a],d=(s*2+5)%18+4,r=new Date("2026-04-18");r.setDate(r.getDate()+d);const b=r.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"long",year:"numeric"}).replace(/^(\w)/,m=>m.toUpperCase()).replace(/\.?\s(\w)/,(m,u)=>`. ${u.toUpperCase()}`);return{variety:n,stage:i,nextStage:l,kc:o,rootDepth:c,nextDateStr:b,daysToNext:d}}const Y=["floraison","nouaison","slag","10 feuilles"];function M(e){const s=e.toLowerCase();return Y.some(t=>s.includes(t))}const z=new Set(["Blé tendre","Blé dur","Maïs","Maïs ensilage","Pomme de terre","Carotte","Tournesol","Pommier"]);function Z(e){return`<span class="tdb-th-info" data-tooltip="${e}">i</span>`}function Q(e){const s=new Date().toISOString().split("T")[0],t=new Date;t.setDate(t.getDate()+7);const a=t.toISOString().split("T")[0],n=e.filter(u=>h(u).balance<0),l=E.filter(u=>!u.real&&u.iso>=s&&u.iso<=a).reduce((u,g)=>u+(g.mm||0),0),o=(u,g)=>h(u).balance-h(g).balance,d=e.slice().sort(o).slice(0,6).map(u=>{const g=h(u),v=Math.max(0,Math.min(100,u.reserveHydrique||0)),y=v>60?"tdb-mini-bar-fill--ok":v>30?"tdb-mini-bar-fill--warn":"tdb-mini-bar-fill--danger",k=g.balance>=0?"color:var(--ok)":"color:var(--warn)",S=g.balance>=0?"✓":`${g.balance} mm`;return`<div class="tdb-mini-bar-row">
      <span class="tdb-mini-bar-label" title="${u.name}">${u.name}</span>
      <div class="tdb-mini-bar-track"><div class="tdb-mini-bar-fill ${y}" style="width:${v}%"></div></div>
      <span class="tdb-mini-bar-val" style="${k}">${S}</span>
    </div>`}).join(""),r=`<div class="tdb-kpi${n.length>0?" tdb-kpi--warn":""}">
    <span class="tdb-kpi-value">${n.length}</span>
    <span class="tdb-kpi-label">parcelle${n.length!==1?"s":""} en déficit</span>
  </div>`,b=`<div class="tdb-kpi">
    <span class="tdb-kpi-value">${l>0?l+" mm":"—"}</span>
    <span class="tdb-kpi-label">irrigations planifiées J+7</span>
  </div>`,m=`<div class="tdb-kpi">
    <span class="tdb-kpi-value">${e.length}</span>
    <span class="tdb-kpi-label">parcelle${e.length!==1?"s":""}</span>
  </div>`;return`<div class="tdb-kpi-row">${r}${b}${m}</div>
    <div class="tdb-mini-bars">
      <div class="tdb-mini-bars-legend">
        <span>Réserve hydrique</span><span style="margin-left:auto">Bilan J+7</span>
      </div>
      ${d}
    </div>
    <button class="tdb-show-detail tdb-detail-btn"><i class="bi bi-table"></i> Tableau </button>`}function tt(e,s=null){let t;e?t=p.filter(d=>d.orgId===f):s?t=p.filter(d=>d.orgId===s):t=p;const a=e?"":(()=>{const d=_.filter(r=>r.id!==100).sort((r,b)=>r.name.localeCompare(b.name));return`<div style="padding:8px 12px 0">
      <select id="tdb-org-filter" style="padding:5px 8px;border:1px solid var(--bdr);border-radius:6px;font-size:13px;background:var(--bg2);color:var(--txt1)">
        <option value="">Toutes les organisations (${p.length})</option>
        ${d.map(r=>`<option value="${r.id}"${s===r.id?" selected":""}>${r.name}</option>`).join("")}
      </select>
    </div>`})(),n=d=>{const r=h(d),b=U(d),m=b.planned?`<td class="tdb-num">${b.mm} mm <span class="tdb-irrig-days">J+${b.daysAhead}</span></td>`:`<td class="tdb-num"><button class="tdb-saisir-btn" data-plot-id="${d.id}">Saisir</button></td>`;return`<tr>
      <td><a href="irrigation.html?plot=${d.id}" class="tdb-plot-link">${d.name}</a></td>
      <td>${d.crop||'<span class="tdb-missing">—</span>'}</td>
      <td>${d.irrigation||'<span class="tdb-missing">—</span>'}</td>
      <td style="text-align:center">${G(d.env)}</td>
      <td>${V(d)}</td>
      <td class="tdb-num">${r.teneurEau} mm</td>
      <td class="tdb-num">${r.pluie7j} mm</td>
      <td class="tdb-num">${r.etp7j} mm</td>
      <td class="tdb-num ${r.teneurEauJ7<0?"tdb-irrig-needed":""}">${r.teneurEauJ7} mm</td>
      <td class="tdb-num ${r.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${r.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(r.balance)+" mm"}</td>
      ${m}
    </tr>`},i=(d,r)=>h(d).balance-h(r).balance,l=t.slice().sort(i).map(n).join(""),c=[{label:"Parcelle",tip:"Nom de la parcelle"},{label:"Culture",tip:"Culture actuellement en place sur la parcelle"},{label:"Type d'irrigation",tip:"Type de système d'irrigation de la parcelle"},{label:"Env.",tip:"Environnement de la parcelle (plein champ, serre)"},{label:"Texture de sol",tip:"Texture du sol renseignée pour la parcelle"},{label:"Rés. J0",tip:"Niveau estimé du réservoir hydrique aujourd'hui (mm)",num:!0},{label:"+ Pluie J+7",tip:"Cumul de pluie prévu sur les 7 prochains jours (mm)",num:!0},{label:"− ETR J+7",tip:"Évapotranspiration réelle prévue sur 7 jours (mm)",num:!0},{label:"Rés. J+7",tip:"Niveau estimé du réservoir hydrique dans 7 jours (mm)",num:!0},{label:"= Irr. J+7",tip:"Volume d'irrigation nécessaire sur les 7 prochains jours",num:!0},{label:"Irr. planifiées",tip:"Irrigations planifiées sur les 7 prochains jours",num:!0}].map(d=>`<th${d.num?' class="tdb-num"':""}>${d.label}${Z(d.tip)}</th>`).join("");return`${a}
    <table class="tdb-parcels-table">
      <thead><tr>${c}</tr></thead>
      <tbody>${l}</tbody>
    </table>
    <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETR − drainage</div>`}function B(e,s=null){var i;const t=document.getElementById("tdb-parcels");if(!t)return;const a=t.querySelector(".tdb-widget-detail")&&!t.querySelector(".tdb-widget-detail").hidden,n=e?p.filter(l=>l.orgId===f):s?p.filter(l=>l.orgId===s):p;t.innerHTML=`
    <div class="tdb-widget-summary">${Q(n)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${tt(e,s)}
    </div>`,a&&x(t,!0),$(t),(i=t.querySelector("#tdb-org-filter"))==null||i.addEventListener("change",l=>{B(e,l.target.value?+l.target.value:null)})}function et(e){if(!e.length)return'<p class="tdb-widget-empty">Aucune parcelle</p>';const s=new Date;return`<div class="tdb-fc-strip">${[0,1,2,3,4].map(a=>{const n=new Date(s);n.setDate(n.getDate()+a);const i=a===0?"Auj.":a===1?"Dem.":H[n.getDay()];let l=0,o=0,c=0,d=0;e.forEach(F=>{const w=L(F,a);l+=w.pluie,o+=w.tMin,c+=w.tMax,d+=w.vent});const r=e.length,b=+(l/r).toFixed(1),m=Math.round(o/r),u=Math.round(c/r),g=Math.round(d/r),v=b>1,y=v?"bi-cloud-rain-fill":u>22?"bi-sun-fill":"bi-cloud-fill",k=v?"tdb-fc-dc-icon--rain":"tdb-fc-dc-icon--sun",S=b===0?"tdb-fc-dc-rain--none":b<5?"tdb-fc-dc-rain--light":"tdb-fc-dc-rain--heavy",N=b===0?"—":`${b} mm`;return`<div class="tdb-fc-day-card">
      <div class="tdb-fc-dc-day">${i}</div>
      <i class="bi ${y} tdb-fc-dc-icon ${k}"></i>
      <div class="tdb-fc-dc-temp">${m}° / ${u}°</div>
      <div class="tdb-fc-dc-rain ${S}">${N}</div>
      <div class="tdb-fc-dc-wind"><i class="bi bi-wind"></i> ${g} km/h</div>
    </div>`}).join("")}</div>
    <button class="tdb-show-detail tdb-detail-btn"><i class="bi bi-table"></i> Tableau </button>`}function at(e){const s=new Date,t=[0,1,2,3,4].map(i=>{const l=new Date(s);return l.setDate(l.getDate()+i),`<th colspan="3" class="tdb-fc-day-hd">${i===0?`Aujourd'hui ${l.getDate()} ${D[l.getMonth()]}`:i===1?`Demain ${l.getDate()} ${D[l.getMonth()]}`:`${H[l.getDay()]}. ${l.getDate()} ${D[l.getMonth()]}`}</th>`}).join(""),a=[0,1,2,3,4].map(()=>`<th class="tdb-num tdb-fc-sub">Pluie</th>
     <th class="tdb-num tdb-fc-sub">T° min/max</th>
     <th class="tdb-num tdb-fc-sub">Vent</th>`).join(""),n=e.map(i=>{const l=[0,1,2,3,4].map(o=>{const c=L(i,o);return`<td class="tdb-num tdb-fc-cell">${c.pluie>0?`<span class="tdb-fc-rain">${c.pluie} mm</span>`:'<span class="tdb-fc-dry">—</span>'}</td>
        <td class="tdb-num tdb-fc-cell">${c.tMin}°C / ${c.tMax}°C</td>
        <td class="tdb-num tdb-fc-cell">${c.vent} km/h</td>`}).join("");return`<tr>
      <td><a href="previsions.html?plot=${i.id}" class="tdb-plot-link">${i.name}</a></td>
      <td>${i.crop||"—"}</td>
      ${l}
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
  </table>`}function st(){const e=document.getElementById("tdb-forecast");if(!e)return;const s=p.filter(t=>t.orgId===f);e.innerHTML=`
    <div class="tdb-widget-summary">${et(s)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${at(s)}
    </div>`,$(e)}function nt(e){const s=e.map(i=>({plot:i,data:I(i)})),t=s.filter(i=>i.data.isUrgent),a=s.filter(i=>i.data.daysAgo>21),n=t.slice(0,3).map(i=>{const l=i.data.daysAgo>21?{cls:"tdb-risk-high",label:"Élevé"}:i.data.daysAgo>16?{cls:"tdb-risk-medium",label:"Modéré"}:{cls:"tdb-risk-low",label:"Faible"};return`<div class="tdb-alert-item">
      <span class="tdb-risk-badge ${l.cls}">${l.label}</span>
      <span class="tdb-alert-plot">${i.plot.name}</span>
      <span class="tdb-alert-window">${i.data.winDateStr} — ${i.data.winHour}:00 → ${(i.data.winHour+i.data.winDur)%24}:00</span>
    </div>`}).join("");return`<div class="tdb-kpi-row">
    <div class="tdb-kpi${t.length>0?" tdb-kpi--danger":""}">
      <span class="tdb-kpi-value">${t.length}</span>
      <span class="tdb-kpi-label">fenêtre${t.length!==1?"s":""} urgente${t.length!==1?"s":""} aujourd'hui</span>
    </div>
    <div class="tdb-kpi${a.length>0?" tdb-kpi--warn":""}">
      <span class="tdb-kpi-value">${a.length}</span>
      <span class="tdb-kpi-label">risque${a.length!==1?"s":""} élevé${a.length!==1?"s":""}</span>
    </div>
  </div>
  ${n?`<div class="tdb-alert-list">${n}</div>`:""}
  <button class="tdb-show-detail tdb-detail-btn"><i class="bi bi-table"></i> Tableau </button>`}function it(e){return`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th><th>Culture</th><th>Dernier produit</th>
        <th>Risque maladie</th><th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${e.map(t=>{const a=I(t),n=a.daysAgo>21?{cls:"tdb-risk-high",label:"Élevé"}:a.daysAgo>16?{cls:"tdb-risk-medium",label:"Modéré"}:{cls:"tdb-risk-low",label:"Faible"};return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td>${a.product}</td>
      <td><span class="tdb-risk-badge ${n.cls}">${n.label}</span></td>
      <td class="${a.isUrgent?"tdb-win-urgent":""}">${a.isUrgent?'<i class="bi bi-alarm-fill"></i> ':""}${a.winDateStr} — ${a.winHour}:00 → ${(a.winHour+a.winDur)%24}:00</td>
    </tr>`}).join("")}</tbody>
  </table>`}function lt(){const e=document.getElementById("tdb-treatments");if(!e)return;const s=p.filter(t=>t.orgId===f);e.innerHTML=`
    <div class="tdb-widget-summary">${nt(s)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${it(s)}
    </div>`,$(e)}const j={"capteur couché":{icon:"bi-arrow-down-circle-fill",cls:"tdb-ev-warn"},"émissions interrompues":{icon:"bi-wifi-off",cls:"tdb-ev-danger"},"capteur déplacé":{icon:"bi-geo-alt-fill",cls:"tdb-ev-warn"},"cuillère bloquée":{icon:"bi-x-octagon-fill",cls:"tdb-ev-danger"}};function rt(e){if(!e.length)return`<div class="tdb-widget-ok">
      <i class="bi bi-check-circle-fill"></i> Aucune anomalie capteur
    </div>
    <button class="tdb-show-detail tdb-detail-btn" style="margin-top:0"><i class="bi bi-table"></i> Voir les capteurs</button>`;const s={};e.forEach(a=>{(Array.isArray(a.event)?a.event:[a.event]).forEach(i=>{s[i]=(s[i]||0)+1})});const t=Object.entries(s).map(([a,n])=>`<span class="tdb-ev-badge ${(j[a]||{cls:"tdb-ev-warn"}).cls}">${a}${n>1?` ×${n}`:""}</span>`).join("");return`<div class="tdb-kpi-row">
    <div class="tdb-kpi tdb-kpi--danger">
      <span class="tdb-kpi-value">${e.length}</span>
      <span class="tdb-kpi-label">capteur${e.length!==1?"s":""} en anomalie</span>
    </div>
  </div>
  <div style="padding:0 16px 12px;display:flex;flex-wrap:wrap;gap:6px">${t}</div>
  <button class="tdb-show-detail tdb-detail-btn"><i class="bi bi-table"></i> Tableau</button>`}function dt(e){return e.length?`<table class="tdb-parcels-table">
    <thead><tr><th>Modèle</th><th>Numéro de série</th><th>Ville</th><th>Événements</th></tr></thead>
    <tbody>${e.map(t=>{const a=p.find(l=>l.id===t.parcelId),i=`<div class="tdb-ev-stack">${(Array.isArray(t.event)?t.event:[t.event]).map(l=>{const o=j[l]||{icon:"bi-exclamation-circle-fill",cls:"tdb-ev-warn"};return`<span class="tdb-ev-badge ${o.cls}"><i class="bi ${o.icon}"></i> ${l}</span>`}).join("")}</div>`;return`<tr>
      <td>${t.model}</td>
      <td><a href="capteur-detail.html?id=${t.id}" class="tdb-plot-link">${t.serial}</a></td>
      <td>${a?a.ville||a.name:"—"}</td>
      <td class="tdb-ev-cell">${i}</td>
    </tr>`}).join("")}</tbody>
  </table>`:'<p class="tdb-widget-empty">Aucune anomalie capteur</p>'}function ot(){const e=document.getElementById("tdb-sensor-events");if(!e)return;const s=q.filter(t=>{const a=t.event;return a&&(Array.isArray(a)?a.length>0:!0)}).filter(t=>t.orgId===f);e.innerHTML=`
    <div class="tdb-widget-summary">${rt(s)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${dt(s)}
    </div>`,$(e)}function ct(e){const s=e.filter(n=>M(T(n).stage)),a=e.map(n=>({plot:n,data:T(n)})).filter(n=>n.data.daysToNext<=14).sort((n,i)=>n.data.daysToNext-i.data.daysToNext).slice(0,5).map(n=>{const i=M(n.data.stage),l=n.data.stage.split(" (")[0];return`<div class="tdb-stage-item">
      <span class="tdb-stage-crop">${n.plot.crop||"—"}</span>
      <span class="tdb-stage-plot">${n.plot.name}</span>
      <span class="tdb-risk-badge ${i?"tdb-risk-medium":"tdb-risk-low"}">${l}</span>
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
  <button class="tdb-show-detail tdb-detail-btn"><i class="bi bi-table"></i> Tableau </button>`}function ut(e){return`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th><th>Culture</th><th>Variété</th><th>Stade actuel</th>
        <th class="tdb-num">Kc</th><th class="tdb-num">Racines</th><th>Prochain stade prévu</th>
      </tr>
    </thead>
    <tbody>${e.map(t=>{const a=T(t),i=(A[t.crop]||P).stages.map(c=>`<option${c===a.stage?" selected":""}>${c}</option>`).join(""),o=t.crop&&z.has(t.crop)?`${a.nextDateStr} <span class="tdb-next-stage-delta">(dans ${a.daysToNext} j)</span> — <span class="tdb-next-stage-name">${a.nextStage}</span>`:"—";return`<tr>
      <td><a href="parcelle-detail.html?id=${t.id}&tab=donnees" class="tdb-plot-link">${t.name}</a></td>
      <td>${t.crop||"—"}</td>
      <td>${a.variety}</td>
      <td><select class="tdb-stage-sel ${M(a.stage)?"tdb-stage-key":""}">${i}</select></td>
      <td class="tdb-num">${a.kc.toFixed(2)}</td>
      <td class="tdb-num">${a.rootDepth} cm</td>
      <td>${o}</td>
    </tr>`}).join("")}</tbody>
  </table>`}function bt(){const e=document.getElementById("tdb-phenology");if(!e)return;const s=p.filter(t=>t.orgId===f);e.innerHTML=`
    <div class="tdb-widget-summary">${ct(s)}</div>
    <div class="tdb-widget-detail" hidden>
      <button class="tdb-show-summary tdb-back-btn"><i class="bi bi-arrow-left"></i> Vue résumé</button>
      ${ut(s)}
    </div>`,$(e)}
