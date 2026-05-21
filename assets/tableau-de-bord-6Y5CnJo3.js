import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as K}from"./breadcrumb-DEBQjfiD.js";import{p as B}from"./plots-BEtOZiNT.js";import{s as W}from"./sensors-DDe0aa9W.js";import{b as A,I as y,s as M}from"./irrigations-CvzZm74y.js";const C=1;document.addEventListener("DOMContentLoaded",()=>{K(),localStorage.getItem("menuRole"),et(),lt(),bt(),rt(),wt(),Q(),Z(),X()});function X(){var t,i;(t=document.getElementById("tdb-strategy-btn"))==null||t.addEventListener("click",()=>{var e;(e=window.WebIrrig)==null||e.openSaison()}),(i=document.getElementById("tdb-parcels"))==null||i.addEventListener("click",e=>{var l;const s=e.target.closest(".tdb-saisir-btn[data-plot-id]");if(!s)return;const n=B.find(a=>a.id===+s.dataset.plotId);n&&((l=window.WebIrrig)==null||l.openSaisie({ids:[n.id],label:n.name}))})}function Q(){document.querySelectorAll(".tdb-section-hd[data-toggle]").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",i=>{if(i.target.closest("a")||i.target.closest(".tdb-widget-menu-btn")||i.target.closest(".tdb-widget-menu-popup"))return;const s=t.nextElementSibling.classList.toggle("tdb-collapsed");t.querySelector(".tdb-chevron").classList.toggle("tdb-chevron-down",s)})})}function Z(){document.querySelectorAll(".tdb-widget-menu-btn").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation(),document.querySelectorAll(".tdb-widget-menu-popup").forEach(n=>n.remove());const e=document.createElement("div");e.className="tdb-widget-menu-popup",e.innerHTML=`
        <button class="tdb-widget-menu-item"><i class="bi bi-x-lg"></i> Retirer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-arrows-move"></i> Déplacer le widget</button>
        <button class="tdb-widget-menu-item"><i class="bi bi-gear"></i> Configurer le widget</button>`,t.parentElement.appendChild(e),e.querySelectorAll(".tdb-widget-menu-item").forEach(n=>{n.addEventListener("click",()=>{e.remove(),alert("Fonctionnalité à venir")})});const s=()=>e.remove();setTimeout(()=>document.addEventListener("click",s,{once:!0}),0)})})}const F=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];function tt(t,i){const e=t.id*7+i*31,s=l=>(Math.sin(e*l)+1)/2;return{pluie:s(.7)>.65?+(s(1.3)*12).toFixed(1):0,tMin:Math.round(8+s(2.1)*8),tMax:Math.round(16+s(3.7)*14),hum:Math.round(45+s(4.3)*45),vent:Math.round(8+s(5.1)*30),etr:+(.5+s(6.7)*5).toFixed(1)}}function et(){const t=document.getElementById("tdb-forecast");if(!t)return;const i=B.filter(a=>a.orgId===C),e=new Date,s=[0,1,2].map(a=>{const o=new Date(e);return o.setDate(o.getDate()+a),`<th colspan="4" class="tdb-fc-day-hd">${a===0?`Aujourd'hui ${o.getDate()} ${F[o.getMonth()]}`:a===1?`Demain ${o.getDate()} ${F[o.getMonth()]}`:`${o.getDate()} ${F[o.getMonth()]}`}</th>`}).join(""),n=[0,1,2].map(()=>`<th class="tdb-num tdb-fc-sub">Pluie</th>
     <th class="tdb-num tdb-fc-sub">T° min/max</th>
     <th class="tdb-num tdb-fc-sub">Vent</th>
     <th class="tdb-num tdb-fc-sub">ETR</th>`).join(""),l=i.map(a=>{const o=[0,1,2].map(r=>{const p=tt(a,r);return`<td class="tdb-num tdb-fc-cell">${p.pluie>0?`<span class="tdb-fc-rain">${p.pluie} mm</span>`:'<span class="tdb-fc-dry">—</span>'}</td>
        <td class="tdb-num tdb-fc-cell">${p.tMin}°C / ${p.tMax}°C</td>
        <td class="tdb-num tdb-fc-cell">${p.vent} km/h</td>
        <td class="tdb-num tdb-fc-cell">${p.etr} mm</td>`}).join("");return`<tr>
      <td><a href="parcelle-detail.html?id=${a.id}" class="tdb-plot-link">${a.name}</a></td>
      <td>${a.crop||"—"}</td>
      ${o}
    </tr>`}).join("");t.innerHTML=`<table class="tdb-parcels-table tdb-fc-table">
    <thead>
      <tr>
        <th rowspan="2">Parcelle</th>
        <th rowspan="2">Culture</th>
        ${s}
      </tr>
      <tr class="tdb-fc-sub-row">${n}</tr>
    </thead>
    <tbody>${l}</tbody>
  </table>`}function it(t){const i=t.id;if(i%3===0){const e=Math.round((i*1.7+8)%30+5),s=i%4+1;return{planned:!0,mm:e,daysAhead:s}}return{planned:!1}}function st(t){return`<span class="tdb-th-info" data-tooltip="${t}">i</span>`}function nt(t){const i=t.id,e=+((i*2.3+7)%32).toFixed(1),s=+((i*1.1+14)%14+10).toFixed(1),n=Math.round(t.reserveHydrique*((i%5+1)/10)),l=+((i*.6+1)%6).toFixed(1),a=+(n+e-s-l).toFixed(1);return{pluie7j:e,etp7j:s,teneurEau:n,drainage7j:l,balance:a,teneurEauJ7:a}}function lt(t){const i=document.getElementById("tdb-parcels");if(!i)return;const s=B.filter(a=>a.orgId===C).map(a=>{const o=nt(a),r=it(a),p=r.planned?`<td class="tdb-num">${r.mm} mm <span class="tdb-irrig-days">J+${r.daysAhead}</span></td>`:`<td class="tdb-num"><button class="tdb-saisir-btn" data-plot-id="${a.id}">Saisir</button></td>`;return`<tr>
      <td><a href="parcelle-detail.html?id=${a.id}" class="tdb-plot-link">${a.name}</a></td>
      <td>${a.crop||'<span class="tdb-missing">—</span>'}</td>
      <td>${a.texture||'<span class="tdb-missing">—</span>'}</td>
      <td class="tdb-num">${o.teneurEau} mm</td>
      <td class="tdb-num">${o.pluie7j} mm</td>
      <td class="tdb-num">${o.etp7j} mm</td>
      <td class="tdb-num ${o.teneurEauJ7<0?"tdb-irrig-needed":""}">${o.teneurEauJ7} mm</td>
      <td class="tdb-num ${o.balance>=0?"tdb-irrig-ok":"tdb-irrig-needed"}">${o.balance>=0?"0 mm":'<i class="bi bi-droplet-fill"></i> +'+Math.abs(o.balance)+" mm"}</td>
      ${p}
    </tr>`}).join(""),l=[{label:"Parcelle",tip:"Nom de la parcelle"},{label:"Culture",tip:"Culture actuellement en place sur la parcelle"},{label:"Texture de sol",tip:"Texture du sol renseignée pour la parcelle"},{label:"Rés. J0",tip:"Niveau estimé du réservoir hydrique aujourd'hui (mm)",num:!0},{label:"+ Pluie J+7",tip:"Cumul de pluie prévu sur les 7 prochains jours (mm)",num:!0},{label:"− ETR J+7",tip:"Évapotranspiration réelle prévue sur 7 jours (mm)",num:!0},{label:"Rés. J+7",tip:"Niveau estimé du réservoir hydrique dans 7 jours (mm)",num:!0},{label:"= Irr. J+7",tip:"Volume d'irrigation nécessaire sur les 7 prochains jours",num:!0},{label:"Irr. planifiées",tip:"Irrigations planifiées sur les 7 prochains jours",num:!0}].map(a=>`<th${a.num?' class="tdb-num"':""}>${a.label}${st(a.tip)}</th>`).join("");i.innerHTML=`
    <table class="tdb-parcels-table">
      <thead><tr>${l}</tr></thead>
      <tbody>${s}</tbody>
    </table>
    <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETR − drainage</div>`}const at={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function ot(t){const i=t.id,e=new Date,s=at[t.crop]||["—"],n=s[i%s.length],l=(i*3+3)%23+3,a=+((i*1.9+5)%28).toFixed(1);let o,r;i%5===3?(o=0,r=(e.getHours()+2+i%3*3)%24):(o=(i*2+1)%6+1,r=6+i%5*2);const p=2+i%3,d=new Date(e);d.setDate(d.getDate()+o);const c=o===0?"Aujourd'hui":d.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),b=o*1440+r*60-(e.getHours()*60+e.getMinutes()),v=b>=0&&b<=600;return{pluie7past:a,daysAgo:l,product:n,winDateStr:c,winHour:r,winDur:p,isUrgent:v}}function rt(){const t=document.getElementById("tdb-treatments");if(!t)return;const e=B.filter(s=>s.orgId===C).map(s=>{const n=ot(s);return`<tr>
      <td><a href="parcelle-detail.html?id=${s.id}" class="tdb-plot-link">${s.name}</a></td>
      <td>${s.crop||"—"}</td>
      <td class="${n.isUrgent?"tdb-win-urgent":""}">${n.isUrgent?'<i class="bi bi-alarm-fill"></i> ':""}${n.winDateStr} — ${n.winHour}:00 → ${(n.winHour+n.winDur)%24}:00</td>
    </tr>`}).join("");t.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th>Culture</th>
        <th>Prochaine fenêtre favorable</th>
      </tr>
    </thead>
    <tbody>${e}</tbody>
  </table>`}const ct=["floraison","nouaison","slag","10 feuilles"];function dt(t){const i=t.toLowerCase();return ct.some(e=>i.includes(e))}const z={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.5,.7,.85],roots:[40,60,80,90]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"],kc:[.35,.5,.8,1.2],roots:[20,40,60,80]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"],kc:[.4,.55,.7,.85],roots:[40,60,75,85]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"],kc:[.8,1,1.1,1.05],roots:[80,100,110,120]},"Prairie permanente":{varieties:["Ray-grass anglais","Fétuque élevée","Dactyle"],stages:["Repousse (< 5 cm)","Tallage actif","Montaison","Épiaison"],nextStages:["Tallage actif","Montaison","Épiaison","1re coupe"],kc:[.7,.85,1,1.05],roots:[20,30,35,40]}},J={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"],kc:[.7],roots:[40]};function ut(t){const i=t.id,e=z[t.crop]||J,s=i%e.stages.length,n=e.varieties[i%e.varieties.length],l=e.stages[s],a=e.nextStages[s],o=e.kc[s],r=e.roots[s],p=(i*2+5)%18+4,d=new Date("2026-04-18");d.setDate(d.getDate()+p);const c=d.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"long",year:"numeric"}).replace(/^(\w)/,b=>b.toUpperCase()).replace(/\.?\s(\w)/,(b,v)=>`. ${v.toUpperCase()}`);return{variety:n,stage:l,nextStage:a,kc:o,rootDepth:r,nextDateStr:c,daysToNext:p}}const pt=new Set(["Blé tendre","Blé dur","Maïs","Maïs ensilage","Pomme de terre","Carotte","Tournesol","Pommier"]);function bt(){const t=document.getElementById("tdb-phenology");if(!t)return;const e=B.filter(s=>s.orgId===C).map(s=>{const n=ut(s),a=(z[s.crop]||J).stages.map(p=>`<option${p===n.stage?" selected":""}>${p}</option>`).join(""),r=s.crop&&pt.has(s.crop)?`${n.nextDateStr} <span class="tdb-next-stage-delta">(dans ${n.daysToNext} j)</span> — <span class="tdb-next-stage-name">${n.nextStage}</span>`:"—";return`<tr>
      <td><a href="parcelle-detail.html?id=${s.id}" class="tdb-plot-link">${s.name}</a></td>
      <td>${s.crop||"—"}</td>
      <td>${n.variety}</td>
      <td><select class="tdb-stage-sel ${dt(n.stage)?"tdb-stage-key":""}">${a}</select></td>
      <td class="tdb-num">${n.kc.toFixed(2)}</td>
      <td class="tdb-num">${n.rootDepth} cm</td>
      <td>${r}</td>
    </tr>`}).join("");t.innerHTML=`<table class="tdb-parcels-table">
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
    <tbody>${e}</tbody>
  </table>`}const mt={"capteur couché":{icon:"bi-arrow-down-circle-fill",cls:"tdb-ev-warn"},"émissions interrompues":{icon:"bi-wifi-off",cls:"tdb-ev-danger"},"capteur déplacé":{icon:"bi-geo-alt-fill",cls:"tdb-ev-warn"},"cuillère bloquée":{icon:"bi-x-octagon-fill",cls:"tdb-ev-danger"}};function wt(){const t=document.getElementById("tdb-sensor-events");if(!t)return;const i=W.filter(s=>{const n=s.event;return n&&(Array.isArray(n)?n.length>0:!0)}).filter(s=>s.orgId===C);if(!i.length){t.closest(".tdb-section").hidden=!0;return}const e=i.map(s=>{const n=B.find(o=>o.id===s.parcelId),a=`<div class="tdb-ev-stack">${(Array.isArray(s.event)?s.event:[s.event]).map(o=>{const r=mt[o]||{icon:"bi-exclamation-circle-fill",cls:"tdb-ev-warn"};return`<span class="tdb-ev-badge ${r.cls}"><i class="bi ${r.icon}"></i> ${o}</span>`}).join("")}</div>`;return`<tr>
      <td>${s.model}</td>
      <td><a href="capteur-detail.html?id=${s.id}" class="tdb-plot-link">${s.serial}</a></td>
      <td>${n?n.ville||n.name:"—"}</td>
      <td class="tdb-ev-cell">${a}</td>
    </tr>`}).join("");t.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Modèle</th>
        <th>Numéro de série</th>
        <th>Ville</th>
        <th>Événements</th>
      </tr>
    </thead>
    <tbody>${e}</tbody>
  </table>`}const k=new Date().toISOString().split("T")[0],vt=1,E=B.filter(t=>t.orgId===vt);function U(t){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,e,s]=t.split("-");return`${parseInt(s)} ${i[parseInt(e)-1]} ${t.split("-")[0]}`}function _(t){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,e,s]=t.split("-");return`${parseInt(s)} ${i[parseInt(e)-1]}`}function R(t,i){return t?'<div class="iw-chk iw-chk--on"><i class="bi bi-check"></i></div>':i?'<div class="iw-chk iw-chk--partial">−</div>':'<div class="iw-chk"></div>'}function ft(t){const i=t.crop,e=t.irrigation&&t.irrigation!=="Pas d'irrigation"?t.irrigation:null;return i&&e?`<span class="iw-plot-info">${i} · ${e}</span>`:i?`<span class="iw-plot-info">${i}</span>`:e?`<span class="iw-plot-info">${e}</span>`:'<span class="iw-plot-info iw-plot-info--miss">Non renseigné</span>'}function N(t,i){const e=t.size;if(e===1){const n=E.find(l=>l.id===[...t][0]);return{text:(n==null?void 0:n.name)??"Parcelle",count:null}}const s=i.find(n=>n.ids.length===e&&n.ids.every(l=>t.has(l)));return s?{text:s.label,count:s.ids.length}:{text:`${e} parcelles`,count:null}}function gt(t,i){const e=new Set(t),s=[];for(const n of i)if(n.ids.length>=2&&n.ids.every(l=>t.has(l))){const l=n.ids.map(a=>{var o;return(o=E.find(r=>r.id===a))==null?void 0:o.name}).filter(Boolean);s.push({title:`Groupe "${n.label}"`,names:l}),n.ids.forEach(a=>e.delete(a))}if(e.size>0){const n=[...e].map(l=>{var a;return(a=E.find(o=>o.id===l))==null?void 0:a.name}).filter(Boolean);s.push({title:s.length>0?"Autres parcelles":null,names:n})}return s}function ht(t){if(t.length<2)return"";const i=[...t].sort((w,S)=>w.iso<S.iso?-1:1),e=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=new Date(i[0].iso),n=new Date(i[i.length-1].iso),l=Math.max(n-s,1),a=600,o=26,r=5,p=5,d=o-p-4,c=d-p-3,b=o+r+13,v=b+2,x=w=>Math.round((w-s)/l*a),L=w=>{const[,S,q]=w.split("-");return`${parseInt(q)}/${parseInt(S)}`},m=[],g=new Date(s.getFullYear(),s.getMonth()+1,1);for(;g<=n;)m.push(new Date(g)),g.setMonth(g.getMonth()+1);const f=m.map(w=>`<line x1="${x(w)}" y1="${o-6}" x2="${x(w)}" y2="${o+r+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),$=[s,...m,n],h=$.slice(0,-1).map((w,S)=>{const q=x(w),D=x($[S+1]);return D-q<16?"":`<text x="${Math.round((q+D)/2)}" y="${c}" font-size="9" fill="#B0AEA8" text-anchor="middle">${e[w.getMonth()]}</text>`}).join(""),u=i.map(w=>{const S=w.real?"#FF8500":"#FFB705";return`<circle cx="${x(new Date(w.iso))}" cy="${d}" r="${p}" fill="${S}" stroke="#fff" stroke-width="1.5"/>`}).join("");return`<div class="iw-timeline">
    <svg width="${a}" height="${v}" viewBox="0 0 ${a} ${v}" style="width:100%;display:block">
      ${h}
      <rect x="0" y="${o}" width="${a}" height="${r}" rx="${r/2}" fill="#E0DED8"/>
      ${f}
      ${u}
      <text x="1" y="${b}" font-size="10" fill="#B0AEA8">${L(i[0].iso)}</text>
      <text x="${a-1}" y="${b}" font-size="10" fill="#B0AEA8" text-anchor="end">${L(i[i.length-1].iso)}</text>
    </svg>
    <div class="iw-timeline-legend">
      <span class="iw-leg-item"><span class="iw-leg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span class="iw-leg-item"><span class="iw-leg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function yt(t){const i=t.filter(l=>l.real),e=t.filter(l=>!l.real),s=i.reduce((l,a)=>l+a.mm,0),n=e.reduce((l,a)=>l+a.mm,0);return`<div class="iw-cumuls-bar">
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Effectuées</div>
      <div class="iw-cumul-val" style="color:#FF8500">${s} mm</div>
      <div class="iw-cumul-count">${i.length} irrigation${i.length!==1?"s":""}</div>
    </div>
    <div class="iw-cumul-sep"></div>
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Planifiées</div>
      <div class="iw-cumul-val" style="color:#FFB705">${n} mm</div>
      <div class="iw-cumul-count">${e.length} irrigation${e.length!==1?"s":""}</div>
    </div>
    <div class="iw-cumul-sep"></div>
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Total saison</div>
      <div class="iw-cumul-val">${s+n} mm</div>
      <div class="iw-cumul-count">${i.length+e.length} irrigations</div>
    </div>
  </div>`}function G(t){const i=document.createElement("div");i.className="iw-toast",i.textContent=t,document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("iw-toast--in")),setTimeout(()=>{i.classList.remove("iw-toast--in"),setTimeout(()=>i.remove(),400)},3e3)}function T(){const t=document.createElement("div");t.className="iw-overlay",document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("iw-overlay--in"));const i=()=>{t.classList.remove("iw-overlay--in"),setTimeout(()=>t.remove(),250)};return t.addEventListener("click",e=>{e.target===t&&i()}),{ov:t,close:i}}function P(t,i){return t.map(e=>{const s=e.ids.every(l=>i.has(l)),n=e.ids.some(l=>i.has(l));return`<div class="iw-group-card${s?" iw-group-card--sel":""}" data-gids="${e.ids.join(",")}">
      ${R(s,n)}
      <div class="iw-group-info">
        <div class="iw-group-name">${e.label}</div>
        <div class="iw-group-meta">${e.ids.length} parcelles</div>
      </div>
    </div>`}).join("")}function I(t){return E.map(i=>{const e=t.has(i.id);return`<div class="iw-plot-row${e?" iw-plot-row--sel":""}" data-pid="${i.id}">
      ${R(e,!1)}
      <div>
        <div class="iw-plot-name">${i.name}</div>
        ${ft(i)}
      </div>
    </div>`}).join("")}function Y(t,i,e){if(e){const s=E.filter(n=>e.ids.includes(n.id));return`<div class="iw-panel iw-panel--fixed">
      <div class="iw-presel-banner">
        <i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i>
        <span>${e.label} <span class="iw-presel-count">· ${e.ids.length} parcelle${e.ids.length>1?"s":""}</span></span>
      </div>
      ${s.map(n=>`<div class="iw-sel-name">· ${n.name}</div>`).join("")}
    </div>`}return`<div class="iw-panel iw-panel--scroll">
    ${t.length?`
    <div class="iw-section-lbl">Groupes suggérés</div>
    <div id="iw-groups">${P(t,i)}</div>
    <div class="iw-divider"></div>`:""}
    <div class="iw-section-lbl">Toutes les parcelles</div>
    <div id="iw-plots">${I(i)}</div>
  </div>`}function V(t,i){if(t.size===0)return'<div class="iw-sel-empty">Aucune parcelle sélectionnée</div>';const s=N(t,i),n=gt(t,i);return`<div class="iw-sel-summary">
    <div class="iw-sel-title">${s.text}</div>
    ${n.map(l=>`
      ${l.title?`<div class="iw-sel-sec-hd">${l.title}</div>`:""}
      ${l.names.map(a=>`<div class="iw-sel-name">· ${a}</div>`).join("")}
    `).join("")}
  </div>`}function j(t,i,e,s){t.querySelectorAll(".iw-group-card").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.gids.split(",").map(Number),a=l.every(p=>e.has(p));l.forEach(p=>a?e.delete(p):e.add(p));const o=t.querySelector("#iw-groups"),r=t.querySelector("#iw-plots");o&&(o.innerHTML=P(i,e)),r&&(r.innerHTML=I(e)),j(t,i,e,s),s()})}),t.querySelectorAll(".iw-plot-row").forEach(n=>{n.addEventListener("click",()=>{const l=+n.dataset.pid;e.has(l)?e.delete(l):e.add(l);const a=t.querySelector("#iw-groups"),o=t.querySelector("#iw-plots");a&&(a.innerHTML=P(i,e)),o&&(o.innerHTML=I(e)),j(t,i,e,s),s()})})}function O(t=null){const i=A(E),e=new Set((t==null?void 0:t.ids)??[]);let s=k,n=10;const{ov:l,close:a}=T();l.innerHTML=`
    <div class="iw-modal iw-modal--wide">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Saisir une irrigation</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-two-col">
          ${Y(i,e,t)}
          <div class="iw-panel iw-panel--params">
            <div class="iw-section-lbl" style="margin-top:0">Paramètres</div>
            <div class="iw-field">
              <label class="iw-label">Date</label>
              <input type="date" class="iw-input" id="iw-date" value="${s}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Quantité <span class="iw-unit">(mm par parcelle)</span></label>
              <input type="number" class="iw-input" id="iw-qty" value="${n}" min="1" style="width:80px" />
            </div>
            <div class="iw-divider"></div>
            <div class="iw-section-lbl">Sélection</div>
            <div id="iw-sel-sum">${t?"":V(e,i)}</div>
          </div>
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="iw-save" ${!t&&e.size===0?"disabled":""}>Enregistrer</button>
      </div>
    </div>`,l.querySelector("#iw-close").addEventListener("click",a),l.querySelector("#iw-cancel").addEventListener("click",a),l.querySelector("#iw-date").addEventListener("change",r=>{s=r.target.value}),l.querySelector("#iw-qty").addEventListener("input",r=>{n=parseInt(r.target.value)||1});function o(){l.querySelector("#iw-save").disabled=!t&&e.size===0;const r=l.querySelector("#iw-sel-sum");r&&(r.innerHTML=V(e,i))}t||j(l,i,e,o),l.querySelector("#iw-save").addEventListener("click",()=>{const r=t?new Set(t.ids):e,p=t?{text:t.label}:N(r,i),d=s>k;y.push({iso:s,mm:n,real:!d,label:p.text,fromStrategy:!1}),M(),a(),G(`Irrigation enregistrée — ${U(s)} · ${n} mm`)})}function H(t=null){const i=A(E),e=new Set((t==null?void 0:t.ids)??[]);let s=k,n=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],l=10,a=7,o="form";const{ov:r,close:p}=T();function d(){if(!s||!n||a<=0)return[];const m=[],g=new Date(n);let f=new Date(s);for(;f<=g&&m.length<100;)m.push(new Date(f)),f.setDate(f.getDate()+a);return m}function c(){const m=d(),g=m.length>0?`<div class="iw-preview-ok">↗ ${m.length} irrigations · ${m.length*l} mm au total</div>`:'<div class="iw-preview-empty">Ajustez les dates et la fréquence</div>';return`
      <div class="iw-two-col">
        ${Y(i,e,t)}
        <div class="iw-panel iw-panel--params">
          <div class="iw-section-lbl" style="margin-top:0">Récurrence</div>
          <div class="iw-field-row">
            <div class="iw-field">
              <label class="iw-label">Début</label>
              <input type="date" class="iw-input" id="iw-debut" value="${s}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Fin</label>
              <input type="date" class="iw-input" id="iw-fin" value="${n}" />
            </div>
          </div>
          <div class="iw-field-row">
            <div class="iw-field">
              <label class="iw-label">Quantité <span class="iw-unit">(mm/irrig.)</span></label>
              <input type="number" class="iw-input" id="iw-qty" value="${l}" min="1" style="width:70px" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Fréquence <span class="iw-unit">(jours)</span></label>
              <input type="number" class="iw-input" id="iw-freq" value="${a}" min="1" max="30" style="width:70px" />
            </div>
          </div>
          ${g}
        </div>
      </div>`}function b(){const m=d(),g=m.filter(u=>u.toISOString().slice(0,10)<k),f=m.filter(u=>u.toISOString().slice(0,10)>=k),$=t?t.ids.length:e.size;function h(u){const w=u.toISOString().slice(0,10),S=w>=k?"#FFB705":"#FF8500";return`<div class="iw-occ-row">
        <span>${U(w)}</span>
        <span style="font-weight:700;color:${S}">${l} mm</span>
      </div>`}return`
      <div class="iw-apercu-summary">
        <div>
          <div class="iw-apercu-big">${m.length} irrigations</div>
          <div class="iw-apercu-sub">${_(s)} → ${_(n)} · tous les ${a}j</div>
        </div>
        <div style="text-align:right">
          <div class="iw-apercu-big" style="color:var(--pri)">${m.length*l} mm</div>
          <div class="iw-apercu-sub">${$} parcelle${$>1?"s":""} · ${l} mm/irrig.</div>
        </div>
      </div>
      ${g.length?`<div class="iw-section-lbl">Irrigations effectuées</div>${g.map(h).join("")}`:""}
      ${f.length?`
        <div class="iw-section-lbl" style="margin-top:${g.length?"12px":"0"}">Irrigations planifiées</div>
        ${f.slice(0,6).map(h).join("")}
        ${f.length>6?`<div class="iw-occ-more">... et ${f.length-6} irrigation${f.length-6>1?"s":""} de plus</div>`:""}`:""}
    `}function v(){const m=t?t.ids.length:e.size,g=d(),f=r.querySelector("#iw-next-btn");f&&(f.disabled=m===0||g.length===0)}function x(){var g,f,$,h;t||j(r,i,e,v);const m=()=>{const u=d(),w=r.querySelector(".iw-preview-ok, .iw-preview-empty");w&&(w.className=u.length>0?"iw-preview-ok":"iw-preview-empty",w.textContent=u.length>0?`↗ ${u.length} irrigations · ${u.length*l} mm au total`:"Ajustez les dates et la fréquence"),v()};(g=r.querySelector("#iw-debut"))==null||g.addEventListener("change",u=>{s=u.target.value,m()}),(f=r.querySelector("#iw-fin"))==null||f.addEventListener("change",u=>{n=u.target.value,m()}),($=r.querySelector("#iw-qty"))==null||$.addEventListener("input",u=>{l=parseInt(u.target.value)||1,m()}),(h=r.querySelector("#iw-freq"))==null||h.addEventListener("input",u=>{a=parseInt(u.target.value)||1,m()})}function L(){const m=r.querySelector(".iw-modal");m.querySelector(".iw-modal-body").innerHTML=o==="form"?c():b(),m.querySelector("#iw-back-btn").style.display=o==="form"?"none":"",m.querySelector("#iw-next-btn").style.display=o==="form"?"":"none",m.querySelector("#iw-conf-btn").style.display=o==="form"?"none":"",o==="form"&&(v(),x())}r.innerHTML=`
    <div class="iw-modal iw-modal--wide">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Saison d'irrigation</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body"></div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--sec" id="iw-back-btn" style="display:none"><i class="bi bi-arrow-left"></i> Modifier</button>
        <button class="iw-btn iw-btn--pri" id="iw-next-btn" disabled>Voir l'aperçu →</button>
        <button class="iw-btn iw-btn--pri" id="iw-conf-btn" style="display:none">Confirmer la saison</button>
      </div>
    </div>`,r.querySelector("#iw-close").addEventListener("click",p),r.querySelector("#iw-cancel").addEventListener("click",p),r.querySelector("#iw-back-btn").addEventListener("click",()=>{o="form",L()}),r.querySelector("#iw-next-btn").addEventListener("click",()=>{o="apercu",L()}),r.querySelector("#iw-conf-btn").addEventListener("click",()=>{const m=d(),g=t?new Set(t.ids):e,f=t?{text:t.label}:N(g,i);m.forEach($=>{const h=$.toISOString().slice(0,10);y.push({iso:h,mm:l,real:h<=k,label:f.text,fromStrategy:!0})}),M(),p(),G(`Saison enregistrée — ${m.length} irrigation${m.length>1?"s":""} planifiée${m.length>1?"s":""}`)}),L()}function $t(t,i){var p,d;const s=A(E).find(c=>c.label===t.label);let n=t.iso,l=t.mm,a="single";const{ov:o,close:r}=T();o.innerHTML=`
    <div class="iw-modal" style="max-width:420px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">${t.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée"}</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-field">
          <label class="iw-label">Date</label>
          <input type="date" class="iw-input" id="iw-edit-date" value="${t.iso}" />
        </div>
        <div class="iw-field">
          <label class="iw-label">Quantité (mm)</label>
          <input type="number" class="iw-input" id="iw-edit-qty" value="${t.mm}" min="1" style="width:80px" />
        </div>
        ${s&&s.ids.length>1?`
        <div class="iw-scope-box">
          <div class="iw-scope-lbl">Appliquer à…</div>
          <div class="iw-scope-btns">
            <button class="iw-scope-btn iw-scope-btn--on" id="scope-single">Cette occurrence</button>
            <button class="iw-scope-btn" id="scope-group">Tout le groupe (${s.ids.length})</button>
          </div>
        </div>`:""}
      </div>
      <div class="iw-modal-ft iw-modal-ft--spread">
        <button class="iw-btn iw-btn--danger" id="iw-delete">Supprimer</button>
        <div style="display:flex;gap:8px">
          <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
          <button class="iw-btn iw-btn--pri" id="iw-save">Enregistrer</button>
        </div>
      </div>
    </div>`,o.querySelector("#iw-close").addEventListener("click",r),o.querySelector("#iw-cancel").addEventListener("click",r),o.querySelector("#iw-edit-date").addEventListener("change",c=>{n=c.target.value}),o.querySelector("#iw-edit-qty").addEventListener("input",c=>{const b=parseInt(c.target.value);b>0&&(l=b)}),s&&((p=o.querySelector("#scope-single"))==null||p.addEventListener("click",c=>{a="single",o.querySelectorAll(".iw-scope-btn").forEach(b=>b.classList.remove("iw-scope-btn--on")),c.target.classList.add("iw-scope-btn--on")}),(d=o.querySelector("#scope-group"))==null||d.addEventListener("click",c=>{a="group",o.querySelectorAll(".iw-scope-btn").forEach(b=>b.classList.remove("iw-scope-btn--on")),c.target.classList.add("iw-scope-btn--on")})),o.querySelector("#iw-delete").addEventListener("click",()=>{const c=y.indexOf(t);c>-1&&y.splice(c,1),M(),r(),i()}),o.querySelector("#iw-save").addEventListener("click",()=>{t.iso=n,t.mm=l,t.real=n<=k,a==="group"&&s&&y.filter(c=>c.label===t.label).forEach(c=>{c.mm=l}),M(),r(),i()})}function St(t,i){let e=!1,s=!1;const{ov:n,close:l}=T();function a(r){const p=A(E).find(c=>c.label===r);if(p)return{ids:p.ids,label:p.label};const d=E.find(c=>c.name===r);return d?{ids:[d.id],label:d.name}:null}function o(){var p,d,c,b,v,x,L;const r=n.querySelector(".iw-modal-body");r.innerHTML=`
      <div class="iw-strat-opt" id="strat-modify">
        <div class="iw-strat-opt-icon" style="background:#E6F1FB">✎</div>
        <div>
          <div class="iw-strat-opt-title">Modifier les paramètres</div>
          <div class="iw-strat-opt-sub">Quantité, fréquence, dates · Les irrigations passées sont conservées</div>
        </div>
      </div>
      <div class="iw-strat-opt iw-strat-opt--danger" id="strat-stop">
        <div class="iw-strat-opt-icon" style="background:#FDECEC">✕</div>
        <div>
          <div class="iw-strat-opt-title" style="color:#8B1A1A">Arrêter la saison</div>
          <div class="iw-strat-opt-sub" style="color:#C05050">Supprime les irrigations futures planifiées</div>
        </div>
      </div>
      <div class="iw-strat-opt iw-strat-opt--danger" id="strat-delete">
        <div class="iw-strat-opt-icon" style="background:#FDECEC">🗑</div>
        <div>
          <div class="iw-strat-opt-title" style="color:#8B1A1A">Supprimer la saison</div>
          <div class="iw-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations de la saison</div>
        </div>
      </div>
      ${e?`
      <div class="iw-confirm-box">
        <div class="iw-confirm-box-txt">Supprimer toutes les occurrences futures ?</div>
        <div class="iw-confirm-box-btns">
          <button class="iw-btn iw-btn--sec iw-btn--sm" id="stop-cancel">Annuler</button>
          <button class="iw-btn iw-btn--danger iw-btn--sm" id="stop-confirm">Confirmer</button>
        </div>
      </div>`:""}
      ${s?`
      <div class="iw-confirm-box">
        <div class="iw-confirm-box-txt">Supprimer toutes les irrigations de cette saison ?</div>
        <div class="iw-confirm-box-btns">
          <button class="iw-btn iw-btn--sec iw-btn--sm" id="del-cancel">Annuler</button>
          <button class="iw-btn iw-btn--danger iw-btn--sm" id="del-confirm">Supprimer tout</button>
        </div>
      </div>`:""}`,(p=r.querySelector("#strat-modify"))==null||p.addEventListener("click",()=>{l(),H(a(t))}),(d=r.querySelector("#strat-stop"))==null||d.addEventListener("click",()=>{e=!0,s=!1,o()}),(c=r.querySelector("#strat-delete"))==null||c.addEventListener("click",()=>{s=!0,e=!1,o()}),(b=r.querySelector("#stop-cancel"))==null||b.addEventListener("click",()=>{e=!1,o()}),(v=r.querySelector("#stop-confirm"))==null||v.addEventListener("click",()=>{y.splice(0,y.length,...y.filter(m=>!(m.label===t&&!m.real))),M(),l(),i()}),(x=r.querySelector("#del-cancel"))==null||x.addEventListener("click",()=>{s=!1,o()}),(L=r.querySelector("#del-confirm"))==null||L.addEventListener("click",()=>{y.splice(0,y.length,...y.filter(m=>m.label!==t)),M(),l(),i()})}n.innerHTML=`
    <div class="iw-modal" style="max-width:440px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Gérer la saison</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body"></div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Fermer</button>
      </div>
    </div>`,n.querySelector("#iw-close").addEventListener("click",l),n.querySelector("#iw-cancel").addEventListener("click",l),o()}function Et(){var p,d;const t=A(E),i=new Set(E.map(c=>c.id)),e=[...y].sort((c,b)=>c.iso<b.iso?-1:1);let s=((p=e[0])==null?void 0:p.iso)??k,n=((d=e[e.length-1])==null?void 0:d.iso)??k;const{ov:l,close:a}=T();function o(){return E.map(c=>{const b=i.has(c.id);return`<div class="iw-plot-row${b?" iw-plot-row--sel":""}" data-pid="${c.id}">
        ${R(b,!1)}
        <div class="iw-plot-name">${c.name}</div>
      </div>`}).join("")}l.innerHTML=`
    <div class="iw-modal" style="max-width:560px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Export CSV</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-two-col">
          <div class="iw-panel iw-panel--scroll">
            <div class="iw-section-lbl">Parcelles</div>
            <div id="iw-export-plots">${o()}</div>
          </div>
          <div class="iw-panel iw-panel--params">
            <div class="iw-section-lbl" style="margin-top:0">Période</div>
            <div class="iw-field">
              <label class="iw-label">Du</label>
              <input type="date" class="iw-input" id="iw-exp-start" value="${s}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Au</label>
              <input type="date" class="iw-input" id="iw-exp-end" value="${n}" />
            </div>
            <div class="iw-section-lbl">Format</div>
            <div class="iw-export-info">Une ligne par date · Une colonne par parcelle · Valeurs en mm</div>
          </div>
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="iw-do-export"><i class="bi bi-download"></i> Télécharger CSV</button>
      </div>
    </div>`,l.querySelector("#iw-close").addEventListener("click",a),l.querySelector("#iw-cancel").addEventListener("click",a),l.querySelector("#iw-exp-start").addEventListener("change",c=>{s=c.target.value}),l.querySelector("#iw-exp-end").addEventListener("change",c=>{n=c.target.value});function r(){l.querySelectorAll("#iw-export-plots .iw-plot-row").forEach(c=>{c.addEventListener("click",()=>{const b=+c.dataset.pid;i.has(b)?i.delete(b):i.add(b),l.querySelector("#iw-export-plots").innerHTML=o(),r()})})}r(),l.querySelector("#iw-do-export").addEventListener("click",()=>{const c=E.filter(h=>i.has(h.id));if(!c.length){G("Sélectionnez au moins une parcelle");return}const b=new Set;for(const h of y)h.iso>=s&&h.iso<=n&&b.add(h.iso);const v=[...b].sort(),x=["Date",...c.map(h=>h.name)].join(";"),L=v.map(h=>{const u=c.map(w=>{const S=y.filter(q=>q.iso===h&&(q.label===w.name||t.some(D=>D.ids.includes(w.id)&&D.label===q.label))).reduce((q,D)=>q+D.mm,0);return S>0?S:""});return[h,...u].join(";")}),m=[x,...L].join(`
`),g=new Blob([m],{type:"text/csv;charset=utf-8;"}),f=URL.createObjectURL(g),$=document.createElement("a");$.href=f,$.download=`irrigations_${s}_${n}.csv`,document.body.appendChild($),$.click(),setTimeout(()=>{URL.revokeObjectURL(f),$.remove()},100),a()})}function xt(t=null){const i=A(E);let e=t?t.ids.length>1?t.label:String(t.ids[0]):"all";const{ov:s,close:n}=T();function l(){if(!e||e==="all")return y;const d=i.find(b=>b.label===e);if(d)return y.filter(b=>b.label===d.label);const c=E.find(b=>String(b.id)===String(e));if(c){const b=new Set(i.filter(v=>v.ids.includes(c.id)).map(v=>v.label));return y.filter(v=>v.label===c.name||b.has(v.label))}return y}function a(d){if(!d||d==="all")return null;const c=i.find(v=>v.label===d);if(c)return{ids:c.ids,label:c.label};const b=E.find(v=>String(v.id)===String(d));return b?{ids:[b.id],label:b.name}:null}const o=i.map(d=>`<option value="${d.label}"${d.label===e?" selected":""}>⬡ ${d.label}</option>`).join(""),r=E.map(d=>`<option value="${d.id}"${String(d.id)===String(e)?" selected":""}>${d.name}</option>`).join("");s.innerHTML=`
    <div class="iw-modal iw-modal--full">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Voir les irrigations</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-full-toolbar">
        <div class="iw-filter-wrap">
          <label class="iw-label" style="margin:0 8px 0 0;white-space:nowrap">Parcelle ou groupe</label>
          <select class="iw-select" id="iw-filter">
            <option value="all"${e==="all"?" selected":""}>Toutes les parcelles</option>
            ${i.length?`<optgroup label="Groupes">${o}</optgroup>`:""}
            <optgroup label="Parcelles">${r}</optgroup>
          </select>
        </div>
        <div class="iw-toolbar-actions">
          <button class="iw-btn iw-btn--sec" id="iw-strat-btn" style="display:none"><i class="bi bi-sliders"></i> Gérer la saison</button>
          <button class="iw-btn iw-btn--sec" id="iw-export-btn"><i class="bi bi-download"></i> Export CSV</button>
        </div>
      </div>
      <div class="iw-full-body" id="iw-full-body"></div>
    </div>`,s.querySelector("#iw-close").addEventListener("click",n),s.querySelector("#iw-filter").addEventListener("change",d=>{e=d.target.value,p()}),s.querySelector("#iw-export-btn").addEventListener("click",Et);function p(){var $,h;const d=s.querySelector("#iw-full-body"),c=l(),b=c.some(u=>u.fromStrategy),v=s.querySelector("#iw-strat-btn");if(v.style.display=b&&e!=="all"?"":"none",v.onclick=()=>St(e,p),!c.length){d.innerHTML=`
        <div class="iw-empty">
          <i class="bi bi-calendar3" style="font-size:36px;opacity:.2"></i>
          <div>Aucune irrigation enregistrée pour cette sélection</div>
          <div class="iw-empty-actions">
            <button class="iw-btn iw-btn--pri" id="iw-add-saisie"><i class="bi bi-droplet-fill"></i> Saisir une irrigation</button>
            <button class="iw-btn iw-btn--sec" id="iw-add-saison"><i class="bi bi-arrow-repeat"></i> Saisir une saison</button>
          </div>
        </div>`,d.querySelector("#iw-add-saisie").addEventListener("click",()=>{n(),O(a(e))}),d.querySelector("#iw-add-saison").addEventListener("click",()=>{n(),H(a(e))});return}const x={};d.querySelectorAll("details[data-section]").forEach(u=>{x[u.dataset.section]=u.open});const L=[...c].filter(u=>!u.real).sort((u,w)=>u.iso<w.iso?-1:1),m=[...c].filter(u=>u.real).sort((u,w)=>u.iso>w.iso?-1:1);function g(u){const w=y.indexOf(u),S=u.real?"#FF8500":"#FFB705",[,q,D]=u.iso.split("-");return`<div class="iw-list-item">
        <div class="iw-list-stripe" style="background:${S}"></div>
        <div class="iw-list-date"><span style="font-size:15px;font-weight:700;color:${S}">${D}</span><span style="font-size:10px;color:${S}">/${q}</span></div>
        <div style="flex:1">
          <div class="iw-list-label">${u.label}</div>
          <div class="iw-list-status" style="color:${S}">${u.real?"Réalisée":"Planifiée"}</div>
        </div>
        <div class="iw-list-mm" style="color:${S}">${u.mm} mm</div>
        <button class="iw-edit-btn" data-iidx="${w}">✎</button>
        <button class="iw-del-btn"  data-iidx="${w}">🗑</button>
      </div>`}const f=b?"":`
      <div class="iw-add-bar">
        <button class="iw-btn iw-btn--sec" id="iw-add-saisie"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
        <button class="iw-btn iw-btn--sec" id="iw-add-saison"><i class="bi bi-arrow-repeat"></i> Ajouter une saison</button>
      </div>`;d.innerHTML=`
      ${yt(c)}
      ${ht(c)}
      ${f}
      ${m.length?`
        <details class="iw-section-details" data-section="effectuees" open>
          <summary class="iw-section-summary">Effectuées <span class="iw-section-count">${m.length}</span></summary>
          <div class="iw-section-body">${m.map(g).join("")}</div>
        </details>`:""}
      ${L.length?`
        <details class="iw-section-details" data-section="planifiees" open>
          <summary class="iw-section-summary">Planifiées <span class="iw-section-count">${L.length}</span></summary>
          <div class="iw-section-body">${L.map(g).join("")}</div>
        </details>`:""}
    `,d.querySelectorAll("details[data-section]").forEach(u=>{const w=u.dataset.section;w in x&&(u.open=x[w])}),d.querySelectorAll(".iw-edit-btn").forEach(u=>{u.addEventListener("click",()=>{const w=y[+u.dataset.iidx];w&&$t(w,p)})}),d.querySelectorAll(".iw-del-btn").forEach(u=>{u.addEventListener("click",()=>{const w=+u.dataset.iidx;w>=0&&(y.splice(w,1),M(),p())})}),($=d.querySelector("#iw-add-saisie"))==null||$.addEventListener("click",()=>{n(),O(a(e))}),(h=d.querySelector("#iw-add-saison"))==null||h.addEventListener("click",()=>{n(),H(a(e))})}p()}window.WebIrrig={openSaisie:O,openSaison:H,openVoirIrrigations:xt};
