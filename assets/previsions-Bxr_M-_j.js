import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as A}from"./plots-DhtWL7s_.js";import{s as S}from"./sensors-CRadjF8G.js";import{o as U}from"./orgs-DnFmvGlp.js";import{a as K}from"./store-c0FlIf2T.js";import{u as Q}from"./breadcrumb-CzFWtd6d.js";const z={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function tt(t){const e=z[t.model]||t.model,i=K(t.id).label||"",o=A.find(r=>(t.parcelIds||[]).includes(r.id)),n=U.find(r=>r.id===t.orgId),a=(o==null?void 0:o.ville)||(n==null?void 0:n.ville)||"";return[e,t.serial,i,a].filter(Boolean).join(" · ")}const C=1;let u=0,p="temp";const y=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],et=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],B=["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"],P=6;function I(t){const e=u+t;e<0||e>P||(u=e,document.querySelectorAll(".fc2-card").forEach((i,o)=>i.classList.toggle("fc2-card--active",o===u)),v(u),F())}function F(){const t=document.getElementById("prev-day-btn"),e=document.getElementById("next-day-btn");t&&(t.disabled=u===0),e&&(e.disabled=u===P)}document.addEventListener("DOMContentLoaded",()=>{var i,o,n;Q(),nt();const e=new URLSearchParams(window.location.search).get("plot");if(e){const a=document.getElementById("location-select");a&&(a.value=`parcel-${e}`)}N(),v(0),F(),(i=document.getElementById("prev-day-btn"))==null||i.addEventListener("click",()=>I(-1)),(o=document.getElementById("next-day-btn"))==null||o.addEventListener("click",()=>I(1)),(n=document.getElementById("hourly-metric-sel"))==null||n.addEventListener("change",a=>{p=a.target.value,v(u)})});function nt(){const t=document.getElementById("location-select");if(!t)return;t.innerHTML="";const e=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau",i=e?A.filter(c=>c.orgId===C):A,o=e?S.filter(c=>c.orgId===C):S,n=document.createElement("option");n.value="addr",n.textContent="Adresse de mon exploitation",t.appendChild(n);const a=document.createElement("optgroup");a.label="Parcelles",i.forEach(c=>{const d=document.createElement("option");d.value=`parcel-${c.id}`,d.textContent=[c.name,c.crop].filter(Boolean).join(" — "),a.appendChild(d)}),t.appendChild(a);const r=document.createElement("optgroup");r.label="Capteurs",o.forEach(c=>{const d=document.createElement("option");d.value=`sensor-${c.id}`,d.textContent=tt(c),r.appendChild(d)}),t.appendChild(r),t.value="addr",t.addEventListener("change",()=>{N(),v(u)})}function L(t){let e=t;return()=>(e=e*1664525+1013904223&4294967295,(e>>>0)/4294967295)}function T(t){const e=L(t*137+42);return{rain:e()>.55?+(e()*8).toFixed(1):0,etp:+(e()*4.5+.5).toFixed(1),tempMin:Math.floor(e()*8)+6,tempMax:Math.floor(e()*8)+6+Math.floor(e()*10)+6,humMin:Math.floor(e()*20)+38,humMax:Math.floor(e()*25)+58,windMin:Math.floor(e()*6)+2,windMax:Math.floor(e()*18)+8,windDir:Math.floor(e()*360)}}function ot(t,e,i=36){return t>5?it(i):t>.5?O(i):e>22?H(i):j(i)}function H(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="7" fill="#F59E0B"/>
    ${[0,45,90,135,180,225,270,315].map(e=>{const n=18+10.5*Math.cos(e*Math.PI/180),a=18+10.5*Math.sin(e*Math.PI/180),r=18+13*Math.cos(e*Math.PI/180),c=18+13*Math.sin(e*Math.PI/180);return`<line x1="${n.toFixed(1)}" y1="${a.toFixed(1)}" x2="${r.toFixed(1)}" y2="${c.toFixed(1)}" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round"/>`}).join("")}
  </svg>`}function j(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
    <path d="M26 24H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 24Z" fill="#CBD5E1"/>
  </svg>`}function it(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
    <circle cx="11" cy="13" r="4.5" fill="#F59E0B" opacity=".9"/>
    <path d="M28 22H13a5 5 0 1 1 1.2-9.8A6 6 0 1 1 28 22Z" fill="#CBD5E1"/>
    <line x1="15" y1="25" x2="13" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="19" y1="25" x2="17" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="23" y1="25" x2="21" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`}function O(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
    <path d="M26 22H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 22Z" fill="#94A3B8"/>
    <line x1="14" y1="25" x2="12" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="18" y1="25" x2="16" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="22" y1="25" x2="20" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`}function _(t,e,i=22){return t>.5?O(i):e>350?H(i):e>80?j(i):`<svg width="${i}" height="${i}" viewBox="0 0 36 36" fill="none">
    <path d="M26 24H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 24Z" fill="#475569"/>
  </svg>`}function N(){const t=document.getElementById("forecast");if(t){t.innerHTML="";for(let e=0;e<7;e++){const i=new Date;i.setDate(i.getDate()+e);const o=T(e);e===0||e===1||`${y[i.getDay()]}${i.getDate()}${B[i.getMonth()]}`;const n=`${y[i.getDay()]} ${i.getDate()} ${B[i.getMonth()]}.`,a=document.createElement("div");a.className=`fc2-card${e===u?" fc2-card--active":""}`,a.dataset.day=e,a.innerHTML=`
      <div class="fc2-date">${e===0?`<strong>${n}</strong>`:n}</div>
      ${e===0?`<div class="fc2-today-badge">Aujourd'hui</div>`:""}
      <div class="fc2-icon">${ot(o.rain,o.tempMax,40)}</div>
      <div class="fc2-grid">
        <div class="fc2-cell">
          <div class="fc2-label">Pluie</div>
          <div class="fc2-val">${o.rain} <span class="fc2-unit">mm</span></div>
        </div>
        <div class="fc2-cell">
          <div class="fc2-label">ETP</div>
          <div class="fc2-val">${o.etp} <span class="fc2-unit">mm</span></div>
        </div>
        <div class="fc2-cell">
          <div class="fc2-label">Température</div>
          <div class="fc2-val"><span class="fc2-tmin">${o.tempMin}</span> / <span class="fc2-tmax">${o.tempMax}</span> <span class="fc2-unit">°C</span></div>
        </div>
        <div class="fc2-cell">
          <div class="fc2-label">Humidité</div>
          <div class="fc2-val">${o.humMin} <span class="fc2-unit">%</span></div>
        </div>
        <div class="fc2-cell fc2-cell--wide">
          <div class="fc2-label">Vent</div>
          <div class="fc2-val">${o.windMin} / ${o.windMax} <span class="fc2-unit">km/h</span></div>
        </div>
      </div>
    `,a.addEventListener("click",()=>{u=e,document.querySelectorAll(".fc2-card").forEach(r=>r.classList.remove("fc2-card--active")),a.classList.add("fc2-card--active"),v(e),F()}),t.appendChild(a)}}}const R={temp:{label:"Température",unit:"°C",color:"#F59E0B",format:t=>`${t.toFixed(1)} °C`},pluie:{label:"Pluie",unit:"mm",color:"#60A5FA",format:t=>t>0?`${t.toFixed(1)} mm`:"0 mm"},humidity:{label:"Humidité",unit:"%",color:"#34D399",format:t=>`${Math.round(t)} %`},wind:{label:"Vent",unit:"km/h",color:"#818CF8",format:t=>`${Math.round(t)} km/h`},radiation:{label:"Rayonnement",unit:"W/m²",color:"#FBBF24",format:t=>t>0?`${Math.round(t)} W/m²`:"0 W/m²"}};function W(t){const e=T(t);return Array.from({length:24},(i,o)=>{const n=L(t*1e3+o*13),a=Math.max(0,Math.sin(Math.PI*(o-6)/12)),r=.5+.5*Math.sin(2*Math.PI*(o-4)/24-Math.PI/2),c=o>=6&&o<=14&&n()>.82?+(n()*3).toFixed(1):0,d=+(e.tempMin+r*(e.tempMax-e.tempMin)+(n()-.5)*1.5).toFixed(1),h=Math.round(Math.max(30,Math.min(98,65+(1-r)*25-r*10+(n()-.5)*10))),g=Math.round(e.windMin+a*(e.windMax-e.windMin)*.7+n()*4),w=Math.round(Math.max(0,a*750*(.7+n()*.6))),$=+Math.max(0,a*1.2*(1+r*.4)+(n()-.5)*.3).toFixed(2),x=Math.round(Math.max(0,Math.min(100,35+(n()-.5)*70))),s=Math.floor(n()*360);return{hour:o,rain:c,temp:d,humidity:h,wind:g,radiation:w,dpv:$,clouds:x,windDir:s}})}function v(t){const e=new Date;e.setDate(e.getDate()+t);const i=document.getElementById("hourly-day-label");i&&(t===0||t===1||y[e.getDay()],i.textContent=`${y[e.getDay()]} ${e.getDate()} ${et[e.getMonth()]} ${e.getFullYear()}${t===0?" (Aujourd'hui)":""}`);const o=W(t),n=new Date().getHours(),a=R[p];at(o,n,t,a),G(o,n,t,a),dt(o,n,t)}function at(t,e,i,o){const n=document.getElementById("hourly-strip");if(n&&(n.innerHTML=t.map(a=>{const r=i===0&&a.hour===e,c=V(a,p);return`
      <div class="hs-col${r?" hs-col--now":""}">
        ${r?'<div class="hs-now-dot"></div>':""}
        <div class="hs-time">${String(a.hour).padStart(2,"0")}:00</div>
        <div class="hs-icon">${_(a.rain,a.radiation,22)}</div>
        <div class="hs-val" style="color:${o.color}">${o.format(c)}</div>
      </div>
    `}).join(""),i===0)){const r=n.querySelectorAll(".hs-col")[e];r&&setTimeout(()=>r.scrollIntoView({inline:"center",block:"nearest"}),50)}}function V(t,e){return{temp:t.temp,pluie:t.rain,humidity:t.humidity,wind:t.wind,radiation:t.radiation}[e]??0}function G(t,e,i,o){const n=document.getElementById("hourly-curve");if(!n)return;const a=n.clientWidth||1200,r=80,c={t:8,r:10,b:8,l:10},d=t.map(l=>V(l,p)),h=Math.min(...d),g=Math.max(...d),w=g-h||1,$=l=>c.l+l/23*(a-c.l-c.r),x=l=>c.t+(r-c.t-c.b)*(1-(l-h)/w),s=d.map((l,m)=>({x:$(m),y:x(l)}));let E=`M${s[0].x.toFixed(1)},${s[0].y.toFixed(1)}`;for(let l=0;l<s.length-1;l++){const m=s[Math.max(l-1,0)],M=s[l],f=s[l+1],k=s[Math.min(l+2,s.length-1)],Z=M.x+(f.x-m.x)/6,q=M.y+(f.y-m.y)/6,X=f.x-(k.x-M.x)/6,J=f.y-(k.y-M.y)/6;E+=` C${Z.toFixed(1)},${q.toFixed(1)} ${X.toFixed(1)},${J.toFixed(1)} ${f.x.toFixed(1)},${f.y.toFixed(1)}`}const Y=`${E} L${s[s.length-1].x.toFixed(1)},${r} L${s[0].x.toFixed(1)},${r} Z`,b=`curve-grad-${p}`;let D=`<defs>
    <linearGradient id="${b}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${o.color}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${o.color}" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <path d="${Y}" fill="url(#${b})"/>
  <path d="${E}" fill="none" stroke="${o.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;if(i===0&&e<24){const l=$(e).toFixed(1),m=x(d[e]).toFixed(1);D+=`<circle cx="${l}" cy="${m}" r="4" fill="${o.color}" stroke="#fff" stroke-width="2"/>`}n.setAttribute("viewBox",`0 0 ${a} ${r}`),n.innerHTML=D}const rt=["N","NE","E","SE","S","SO","O","NO"];function ct(t){return rt[Math.round(t/45)%8]}function lt(t){return`<span style="display:inline-block;transform:rotate(${t}deg)">↑</span>`}function dt(t,e,i){const o=document.querySelector("#hourly-table tbody");o&&(o.innerHTML="",t.forEach(n=>{const a=i===0&&n.hour===e,r=n.hour===23?0:n.hour+1,c=document.createElement("tr");a&&c.classList.add("ht-row--now"),c.innerHTML=`
      <td class="ht-time">
        <span class="ht-icon">${_(n.rain,n.radiation,18)}</span>
        ${String(n.hour).padStart(2,"0")}h – ${String(r).padStart(2,"0")}h
        ${a?'<span class="ht-now-badge">maintenant</span>':""}
      </td>
      <td>${n.rain>0?`<span style="color:#60A5FA;font-weight:500">${n.rain.toFixed(1)} mm</span>`:"0 mm"}</td>
      <td style="color:${n.temp>25?"#ef4444":n.temp<5?"#60A5FA":"inherit"};font-weight:500">${n.temp.toFixed(1)} °C</td>
      <td>${n.humidity} %</td>
      <td>${n.wind} km/h ${lt(n.windDir)} ${ct(n.windDir)}</td>
      <td>${n.dpv>0?n.dpv.toFixed(2)+" kPa":"— kPa"}</td>
      <td>${n.radiation>0?n.radiation+" W/m²":"0 W/m²"}</td>
      <td>${n.clouds>0?n.clouds+" %":"— %"}</td>
    `,o.appendChild(c)}))}window.addEventListener("resize",()=>{if(document.getElementById("hourly-curve")){const t=W(u),e=new Date().getHours();G(t,e,u,R[p])}});
