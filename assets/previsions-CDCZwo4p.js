import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as A}from"./plots-BFmvZ9cD.js";import{s as X}from"./sensors-wI07SRZE.js";import{u as J}from"./breadcrumb-DEBQjfiD.js";let d=0,p="temp";const M=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],U=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],B=["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"],L=6;function C(e){const t=d+e;t<0||t>L||(d=t,document.querySelectorAll(".fc2-card").forEach((i,o)=>i.classList.toggle("fc2-card--active",o===d)),h(d),E())}function E(){const e=document.getElementById("prev-day-btn"),t=document.getElementById("next-day-btn");e&&(e.disabled=d===0),t&&(t.disabled=d===L)}document.addEventListener("DOMContentLoaded",()=>{var i,o,n;J(),K();const t=new URLSearchParams(window.location.search).get("plot");if(t){const a=document.getElementById("location-select");a&&(a.value=`parcel-${t}`)}N(),h(0),E(),(i=document.getElementById("prev-day-btn"))==null||i.addEventListener("click",()=>C(-1)),(o=document.getElementById("next-day-btn"))==null||o.addEventListener("click",()=>C(1)),(n=document.getElementById("hourly-metric-sel"))==null||n.addEventListener("change",a=>{p=a.target.value,h(d)})});function K(){const e=document.getElementById("location-select");if(!e)return;const t=document.createElement("optgroup");t.label="Parcelles",A.forEach(o=>{const n=document.createElement("option");n.value=`parcel-${o.id}`,n.textContent=o.crop?`${o.name} (${o.crop})`:o.name,t.appendChild(n)}),e.appendChild(t);const i=document.createElement("optgroup");i.label="Capteurs",X.forEach(o=>{const n=A.find(r=>r.id===o.parcelId),a=document.createElement("option");a.value=`sensor-${o.id}`,a.textContent=`${o.serial} — ${o.model}${n?` (${n.name})`:""}`,i.appendChild(a)}),e.appendChild(i),e.addEventListener("change",()=>{N(),h(d)})}function S(e){let t=e;return()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295)}function I(e){const t=S(e*137+42);return{rain:t()>.55?+(t()*8).toFixed(1):0,etp:+(t()*4.5+.5).toFixed(1),tempMin:Math.floor(t()*8)+6,tempMax:Math.floor(t()*8)+6+Math.floor(t()*10)+6,humMin:Math.floor(t()*20)+38,humMax:Math.floor(t()*25)+58,windMin:Math.floor(t()*6)+2,windMax:Math.floor(t()*18)+8,windDir:Math.floor(t()*360)}}function Q(e,t,i=36){return e>5?z(i):e>.5?T(i):t>22?P(i):H(i)}function P(e){return`<svg width="${e}" height="${e}" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="7" fill="#F59E0B"/>
    ${[0,45,90,135,180,225,270,315].map(t=>{const n=18+10.5*Math.cos(t*Math.PI/180),a=18+10.5*Math.sin(t*Math.PI/180),r=18+13*Math.cos(t*Math.PI/180),c=18+13*Math.sin(t*Math.PI/180);return`<line x1="${n.toFixed(1)}" y1="${a.toFixed(1)}" x2="${r.toFixed(1)}" y2="${c.toFixed(1)}" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round"/>`}).join("")}
  </svg>`}function H(e){return`<svg width="${e}" height="${e}" viewBox="0 0 36 36" fill="none">
    <path d="M26 24H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 24Z" fill="#CBD5E1"/>
  </svg>`}function z(e){return`<svg width="${e}" height="${e}" viewBox="0 0 36 36" fill="none">
    <circle cx="11" cy="13" r="4.5" fill="#F59E0B" opacity=".9"/>
    <path d="M28 22H13a5 5 0 1 1 1.2-9.8A6 6 0 1 1 28 22Z" fill="#CBD5E1"/>
    <line x1="15" y1="25" x2="13" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="19" y1="25" x2="17" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="23" y1="25" x2="21" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`}function T(e){return`<svg width="${e}" height="${e}" viewBox="0 0 36 36" fill="none">
    <path d="M26 22H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 22Z" fill="#94A3B8"/>
    <line x1="14" y1="25" x2="12" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="18" y1="25" x2="16" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="22" y1="25" x2="20" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`}function j(e,t,i=22){return e>.5?T(i):t>350?P(i):t>80?H(i):`<svg width="${i}" height="${i}" viewBox="0 0 36 36" fill="none">
    <path d="M26 24H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 24Z" fill="#475569"/>
  </svg>`}function N(){const e=document.getElementById("forecast");if(e){e.innerHTML="";for(let t=0;t<7;t++){const i=new Date;i.setDate(i.getDate()+t);const o=I(t);t===0||t===1||`${M[i.getDay()]}${i.getDate()}${B[i.getMonth()]}`;const n=`${M[i.getDay()]} ${i.getDate()} ${B[i.getMonth()]}.`,a=document.createElement("div");a.className=`fc2-card${t===d?" fc2-card--active":""}`,a.dataset.day=t,a.innerHTML=`
      <div class="fc2-date">${t===0?`<strong>${n}</strong>`:n}</div>
      ${t===0?`<div class="fc2-today-badge">Aujourd'hui</div>`:""}
      <div class="fc2-icon">${Q(o.rain,o.tempMax,40)}</div>
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
    `,a.addEventListener("click",()=>{d=t,document.querySelectorAll(".fc2-card").forEach(r=>r.classList.remove("fc2-card--active")),a.classList.add("fc2-card--active"),h(t),E()}),e.appendChild(a)}}}const O={temp:{label:"Température",unit:"°C",color:"#F59E0B",format:e=>`${e.toFixed(1)} °C`},pluie:{label:"Pluie",unit:"mm",color:"#60A5FA",format:e=>e>0?`${e.toFixed(1)} mm`:"0 mm"},humidity:{label:"Humidité",unit:"%",color:"#34D399",format:e=>`${Math.round(e)} %`},wind:{label:"Vent",unit:"km/h",color:"#818CF8",format:e=>`${Math.round(e)} km/h`},radiation:{label:"Rayonnement",unit:"W/m²",color:"#FBBF24",format:e=>e>0?`${Math.round(e)} W/m²`:"0 W/m²"}};function W(e){const t=I(e);return Array.from({length:24},(i,o)=>{const n=S(e*1e3+o*13),a=Math.max(0,Math.sin(Math.PI*(o-6)/12)),r=.5+.5*Math.sin(2*Math.PI*(o-4)/24-Math.PI/2),c=o>=6&&o<=14&&n()>.82?+(n()*3).toFixed(1):0,u=+(t.tempMin+r*(t.tempMax-t.tempMin)+(n()-.5)*1.5).toFixed(1),v=Math.round(Math.max(30,Math.min(98,65+(1-r)*25-r*10+(n()-.5)*10))),g=Math.round(t.windMin+a*(t.windMax-t.windMin)*.7+n()*4),w=Math.round(Math.max(0,a*750*(.7+n()*.6))),$=+Math.max(0,a*1.2*(1+r*.4)+(n()-.5)*.3).toFixed(2),x=Math.round(Math.max(0,Math.min(100,35+(n()-.5)*70))),s=Math.floor(n()*360);return{hour:o,rain:c,temp:u,humidity:v,wind:g,radiation:w,dpv:$,clouds:x,windDir:s}})}function h(e){const t=new Date;t.setDate(t.getDate()+e);const i=document.getElementById("hourly-day-label");i&&(e===0||e===1||M[t.getDay()],i.textContent=`${M[t.getDay()]} ${t.getDate()} ${U[t.getMonth()]} ${t.getFullYear()}${e===0?" (Aujourd'hui)":""}`);const o=W(e),n=new Date().getHours(),a=O[p];tt(o,n,e,a),R(o,n,e,a),it(o,n,e)}function tt(e,t,i,o){const n=document.getElementById("hourly-strip");if(n&&(n.innerHTML=e.map(a=>{const r=i===0&&a.hour===t,c=_(a,p);return`
      <div class="hs-col${r?" hs-col--now":""}">
        ${r?'<div class="hs-now-dot"></div>':""}
        <div class="hs-time">${String(a.hour).padStart(2,"0")}:00</div>
        <div class="hs-icon">${j(a.rain,a.radiation,22)}</div>
        <div class="hs-val" style="color:${o.color}">${o.format(c)}</div>
      </div>
    `}).join(""),i===0)){const r=n.querySelectorAll(".hs-col")[t];r&&setTimeout(()=>r.scrollIntoView({inline:"center",block:"nearest"}),50)}}function _(e,t){return{temp:e.temp,pluie:e.rain,humidity:e.humidity,wind:e.wind,radiation:e.radiation}[t]??0}function R(e,t,i,o){const n=document.getElementById("hourly-curve");if(!n)return;const a=n.clientWidth||1200,r=80,c={t:8,r:10,b:8,l:10},u=e.map(l=>_(l,p)),v=Math.min(...u),g=Math.max(...u),w=g-v||1,$=l=>c.l+l/23*(a-c.l-c.r),x=l=>c.t+(r-c.t-c.b)*(1-(l-v)/w),s=u.map((l,m)=>({x:$(m),y:x(l)}));let F=`M${s[0].x.toFixed(1)},${s[0].y.toFixed(1)}`;for(let l=0;l<s.length-1;l++){const m=s[Math.max(l-1,0)],y=s[l],f=s[l+1],D=s[Math.min(l+2,s.length-1)],Z=y.x+(f.x-m.x)/6,q=y.y+(f.y-m.y)/6,G=f.x-(D.x-y.x)/6,Y=f.y-(D.y-y.y)/6;F+=` C${Z.toFixed(1)},${q.toFixed(1)} ${G.toFixed(1)},${Y.toFixed(1)} ${f.x.toFixed(1)},${f.y.toFixed(1)}`}const V=`${F} L${s[s.length-1].x.toFixed(1)},${r} L${s[0].x.toFixed(1)},${r} Z`,b=`curve-grad-${p}`;let k=`<defs>
    <linearGradient id="${b}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${o.color}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${o.color}" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <path d="${V}" fill="url(#${b})"/>
  <path d="${F}" fill="none" stroke="${o.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;if(i===0&&t<24){const l=$(t).toFixed(1),m=x(u[t]).toFixed(1);k+=`<circle cx="${l}" cy="${m}" r="4" fill="${o.color}" stroke="#fff" stroke-width="2"/>`}n.setAttribute("viewBox",`0 0 ${a} ${r}`),n.innerHTML=k}const et=["N","NE","E","SE","S","SO","O","NO"];function nt(e){return et[Math.round(e/45)%8]}function ot(e){return`<span style="display:inline-block;transform:rotate(${e}deg)">↑</span>`}function it(e,t,i){const o=document.querySelector("#hourly-table tbody");o&&(o.innerHTML="",e.forEach(n=>{const a=i===0&&n.hour===t,r=n.hour===23?0:n.hour+1,c=document.createElement("tr");a&&c.classList.add("ht-row--now"),c.innerHTML=`
      <td class="ht-time">
        <span class="ht-icon">${j(n.rain,n.radiation,18)}</span>
        ${String(n.hour).padStart(2,"0")}h – ${String(r).padStart(2,"0")}h
        ${a?'<span class="ht-now-badge">maintenant</span>':""}
      </td>
      <td>${n.rain>0?`<span style="color:#60A5FA;font-weight:500">${n.rain.toFixed(1)} mm</span>`:"0 mm"}</td>
      <td style="color:${n.temp>25?"#ef4444":n.temp<5?"#60A5FA":"inherit"};font-weight:500">${n.temp.toFixed(1)} °C</td>
      <td>${n.humidity} %</td>
      <td>${n.wind} km/h ${ot(n.windDir)} ${nt(n.windDir)}</td>
      <td>${n.dpv>0?n.dpv.toFixed(2)+" kPa":"— kPa"}</td>
      <td>${n.radiation>0?n.radiation+" W/m²":"0 W/m²"}</td>
      <td>${n.clouds>0?n.clouds+" %":"— %"}</td>
    `,o.appendChild(c)}))}window.addEventListener("resize",()=>{if(document.getElementById("hourly-curve")){const e=W(d),t=new Date().getHours();R(e,t,d,O[p])}});
