import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as F}from"./plots-DhtWL7s_.js";import{s as B}from"./sensors-CRadjF8G.js";import{u as U}from"./breadcrumb-CzFWtd6d.js";const C=1;let u=0,h="temp";const g=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],K=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],I=["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"],L=6;function S(t){const e=u+t;e<0||e>L||(u=e,document.querySelectorAll(".fc2-card").forEach((i,o)=>i.classList.toggle("fc2-card--active",o===u)),$(u),b())}function b(){const t=document.getElementById("prev-day-btn"),e=document.getElementById("next-day-btn");t&&(t.disabled=u===0),e&&(e.disabled=u===L)}document.addEventListener("DOMContentLoaded",()=>{var i,o,n;U(),Q();const e=new URLSearchParams(window.location.search).get("plot");if(e){const a=document.getElementById("location-select");a&&(a.value=`parcel-${e}`)}N(),$(0),b(),(i=document.getElementById("prev-day-btn"))==null||i.addEventListener("click",()=>S(-1)),(o=document.getElementById("next-day-btn"))==null||o.addEventListener("click",()=>S(1)),(n=document.getElementById("hourly-metric-sel"))==null||n.addEventListener("change",a=>{h=a.target.value,$(u)})});function Q(){const t=document.getElementById("location-select");if(!t)return;t.innerHTML="";const e=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau",i=e?F.filter(r=>r.orgId===C):F,o=e?B.filter(r=>r.orgId===C):B,n=document.createElement("option");n.value="addr",n.textContent="Adresse de mon exploitation",t.appendChild(n);const a=document.createElement("optgroup");a.label="Parcelles",i.forEach(r=>{const d=document.createElement("option");d.value=`parcel-${r.id}`,d.textContent=r.crop?`${r.name} (${r.crop})`:r.name,a.appendChild(d)}),t.appendChild(a);const c=document.createElement("optgroup");c.label="Capteurs",o.forEach(r=>{const d=F.find(v=>(r.parcelIds||[]).includes(v.id)),m=document.createElement("option");m.value=`sensor-${r.id}`,m.textContent=`${r.serial} — ${r.model}${d?` (${d.name})`:""}`,c.appendChild(m)}),t.appendChild(c),t.value="addr",t.addEventListener("change",()=>{N(),$(u)})}function P(t){let e=t;return()=>(e=e*1664525+1013904223&4294967295,(e>>>0)/4294967295)}function H(t){const e=P(t*137+42);return{rain:e()>.55?+(e()*8).toFixed(1):0,etp:+(e()*4.5+.5).toFixed(1),tempMin:Math.floor(e()*8)+6,tempMax:Math.floor(e()*8)+6+Math.floor(e()*10)+6,humMin:Math.floor(e()*20)+38,humMax:Math.floor(e()*25)+58,windMin:Math.floor(e()*6)+2,windMax:Math.floor(e()*18)+8,windDir:Math.floor(e()*360)}}function z(t,e,i=36){return t>5?tt(i):t>.5?O(i):e>22?T(i):j(i)}function T(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="7" fill="#F59E0B"/>
    ${[0,45,90,135,180,225,270,315].map(e=>{const n=18+10.5*Math.cos(e*Math.PI/180),a=18+10.5*Math.sin(e*Math.PI/180),c=18+13*Math.cos(e*Math.PI/180),r=18+13*Math.sin(e*Math.PI/180);return`<line x1="${n.toFixed(1)}" y1="${a.toFixed(1)}" x2="${c.toFixed(1)}" y2="${r.toFixed(1)}" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round"/>`}).join("")}
  </svg>`}function j(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
    <path d="M26 24H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 24Z" fill="#CBD5E1"/>
  </svg>`}function tt(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
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
  </svg>`}function _(t,e,i=22){return t>.5?O(i):e>350?T(i):e>80?j(i):`<svg width="${i}" height="${i}" viewBox="0 0 36 36" fill="none">
    <path d="M26 24H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 24Z" fill="#475569"/>
  </svg>`}function N(){const t=document.getElementById("forecast");if(t){t.innerHTML="";for(let e=0;e<7;e++){const i=new Date;i.setDate(i.getDate()+e);const o=H(e);e===0||e===1||`${g[i.getDay()]}${i.getDate()}${I[i.getMonth()]}`;const n=`${g[i.getDay()]} ${i.getDate()} ${I[i.getMonth()]}.`,a=document.createElement("div");a.className=`fc2-card${e===u?" fc2-card--active":""}`,a.dataset.day=e,a.innerHTML=`
      <div class="fc2-date">${e===0?`<strong>${n}</strong>`:n}</div>
      ${e===0?`<div class="fc2-today-badge">Aujourd'hui</div>`:""}
      <div class="fc2-icon">${z(o.rain,o.tempMax,40)}</div>
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
    `,a.addEventListener("click",()=>{u=e,document.querySelectorAll(".fc2-card").forEach(c=>c.classList.remove("fc2-card--active")),a.classList.add("fc2-card--active"),$(e),b()}),t.appendChild(a)}}}const R={temp:{label:"Température",unit:"°C",color:"#F59E0B",format:t=>`${t.toFixed(1)} °C`},pluie:{label:"Pluie",unit:"mm",color:"#60A5FA",format:t=>t>0?`${t.toFixed(1)} mm`:"0 mm"},humidity:{label:"Humidité",unit:"%",color:"#34D399",format:t=>`${Math.round(t)} %`},wind:{label:"Vent",unit:"km/h",color:"#818CF8",format:t=>`${Math.round(t)} km/h`},radiation:{label:"Rayonnement",unit:"W/m²",color:"#FBBF24",format:t=>t>0?`${Math.round(t)} W/m²`:"0 W/m²"}};function W(t){const e=H(t);return Array.from({length:24},(i,o)=>{const n=P(t*1e3+o*13),a=Math.max(0,Math.sin(Math.PI*(o-6)/12)),c=.5+.5*Math.sin(2*Math.PI*(o-4)/24-Math.PI/2),r=o>=6&&o<=14&&n()>.82?+(n()*3).toFixed(1):0,d=+(e.tempMin+c*(e.tempMax-e.tempMin)+(n()-.5)*1.5).toFixed(1),m=Math.round(Math.max(30,Math.min(98,65+(1-c)*25-c*10+(n()-.5)*10))),v=Math.round(e.windMin+a*(e.windMax-e.windMin)*.7+n()*4),w=Math.round(Math.max(0,a*750*(.7+n()*.6))),x=+Math.max(0,a*1.2*(1+c*.4)+(n()-.5)*.3).toFixed(2),M=Math.round(Math.max(0,Math.min(100,35+(n()-.5)*70))),l=Math.floor(n()*360);return{hour:o,rain:r,temp:d,humidity:m,wind:v,radiation:w,dpv:x,clouds:M,windDir:l}})}function $(t){const e=new Date;e.setDate(e.getDate()+t);const i=document.getElementById("hourly-day-label");i&&(t===0||t===1||g[e.getDay()],i.textContent=`${g[e.getDay()]} ${e.getDate()} ${K[e.getMonth()]} ${e.getFullYear()}${t===0?" (Aujourd'hui)":""}`);const o=W(t),n=new Date().getHours(),a=R[h];et(o,n,t,a),Z(o,n,t,a),at(o,n,t)}function et(t,e,i,o){const n=document.getElementById("hourly-strip");if(n&&(n.innerHTML=t.map(a=>{const c=i===0&&a.hour===e,r=V(a,h);return`
      <div class="hs-col${c?" hs-col--now":""}">
        ${c?'<div class="hs-now-dot"></div>':""}
        <div class="hs-time">${String(a.hour).padStart(2,"0")}:00</div>
        <div class="hs-icon">${_(a.rain,a.radiation,22)}</div>
        <div class="hs-val" style="color:${o.color}">${o.format(r)}</div>
      </div>
    `}).join(""),i===0)){const c=n.querySelectorAll(".hs-col")[e];c&&setTimeout(()=>c.scrollIntoView({inline:"center",block:"nearest"}),50)}}function V(t,e){return{temp:t.temp,pluie:t.rain,humidity:t.humidity,wind:t.wind,radiation:t.radiation}[e]??0}function Z(t,e,i,o){const n=document.getElementById("hourly-curve");if(!n)return;const a=n.clientWidth||1200,c=80,r={t:8,r:10,b:8,l:10},d=t.map(s=>V(s,h)),m=Math.min(...d),v=Math.max(...d),w=v-m||1,x=s=>r.l+s/23*(a-r.l-r.r),M=s=>r.t+(c-r.t-r.b)*(1-(s-m)/w),l=d.map((s,f)=>({x:x(f),y:M(s)}));let E=`M${l[0].x.toFixed(1)},${l[0].y.toFixed(1)}`;for(let s=0;s<l.length-1;s++){const f=l[Math.max(s-1,0)],y=l[s],p=l[s+1],k=l[Math.min(s+2,l.length-1)],G=y.x+(p.x-f.x)/6,Y=y.y+(p.y-f.y)/6,X=p.x-(k.x-y.x)/6,J=p.y-(k.y-y.y)/6;E+=` C${G.toFixed(1)},${Y.toFixed(1)} ${X.toFixed(1)},${J.toFixed(1)} ${p.x.toFixed(1)},${p.y.toFixed(1)}`}const q=`${E} L${l[l.length-1].x.toFixed(1)},${c} L${l[0].x.toFixed(1)},${c} Z`,A=`curve-grad-${h}`;let D=`<defs>
    <linearGradient id="${A}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${o.color}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${o.color}" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <path d="${q}" fill="url(#${A})"/>
  <path d="${E}" fill="none" stroke="${o.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;if(i===0&&e<24){const s=x(e).toFixed(1),f=M(d[e]).toFixed(1);D+=`<circle cx="${s}" cy="${f}" r="4" fill="${o.color}" stroke="#fff" stroke-width="2"/>`}n.setAttribute("viewBox",`0 0 ${a} ${c}`),n.innerHTML=D}const nt=["N","NE","E","SE","S","SO","O","NO"];function ot(t){return nt[Math.round(t/45)%8]}function it(t){return`<span style="display:inline-block;transform:rotate(${t}deg)">↑</span>`}function at(t,e,i){const o=document.querySelector("#hourly-table tbody");o&&(o.innerHTML="",t.forEach(n=>{const a=i===0&&n.hour===e,c=n.hour===23?0:n.hour+1,r=document.createElement("tr");a&&r.classList.add("ht-row--now"),r.innerHTML=`
      <td class="ht-time">
        <span class="ht-icon">${_(n.rain,n.radiation,18)}</span>
        ${String(n.hour).padStart(2,"0")}h – ${String(c).padStart(2,"0")}h
        ${a?'<span class="ht-now-badge">maintenant</span>':""}
      </td>
      <td>${n.rain>0?`<span style="color:#60A5FA;font-weight:500">${n.rain.toFixed(1)} mm</span>`:"0 mm"}</td>
      <td style="color:${n.temp>25?"#ef4444":n.temp<5?"#60A5FA":"inherit"};font-weight:500">${n.temp.toFixed(1)} °C</td>
      <td>${n.humidity} %</td>
      <td>${n.wind} km/h ${it(n.windDir)} ${ot(n.windDir)}</td>
      <td>${n.dpv>0?n.dpv.toFixed(2)+" kPa":"— kPa"}</td>
      <td>${n.radiation>0?n.radiation+" W/m²":"0 W/m²"}</td>
      <td>${n.clouds>0?n.clouds+" %":"— %"}</td>
    `,o.appendChild(r)}))}window.addEventListener("resize",()=>{if(document.getElementById("hourly-curve")){const t=W(u),e=new Date().getHours();Z(t,e,u,R[h])}});
