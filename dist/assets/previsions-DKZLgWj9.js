import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as D}from"./plots-kiLnwOqV.js";import{s as q}from"./sensors-BNMTTq_e.js";import{u as G}from"./breadcrumb-DEBQjfiD.js";let m=0,p="temp";const M=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],Y=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],b=["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"];document.addEventListener("DOMContentLoaded",()=>{var t;G(),J(),T(),y(0),(t=document.getElementById("hourly-metric-sel"))==null||t.addEventListener("change",e=>{p=e.target.value,y(m)})});function J(){const t=document.getElementById("location-select");if(!t)return;const e=document.createElement("optgroup");e.label="Parcelles",D.forEach(o=>{const n=document.createElement("option");n.value=`parcel-${o.id}`,n.textContent=`${o.name} (${o.crop})`,e.appendChild(n)}),t.appendChild(e);const i=document.createElement("optgroup");i.label="Capteurs",q.forEach(o=>{const n=D.find(r=>r.id===o.parcelId),a=document.createElement("option");a.value=`sensor-${o.id}`,a.textContent=`${o.serial} — ${o.model}${n?` (${n.name})`:""}`,i.appendChild(a)}),t.appendChild(i),t.addEventListener("change",()=>{T(),y(m)})}function C(t){let e=t;return()=>(e=e*1664525+1013904223&4294967295,(e>>>0)/4294967295)}function B(t){const e=C(t*137+42);return{rain:e()>.55?+(e()*8).toFixed(1):0,etp:+(e()*4.5+.5).toFixed(1),tempMin:Math.floor(e()*8)+6,tempMax:Math.floor(e()*8)+6+Math.floor(e()*10)+6,humMin:Math.floor(e()*20)+38,humMax:Math.floor(e()*25)+58,windMin:Math.floor(e()*6)+2,windMax:Math.floor(e()*18)+8,windDir:Math.floor(e()*360)}}function K(t,e,i=36){return t>5?Q(i):t>.5?I(i):e>22?S(i):L(i)}function S(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="7" fill="#F59E0B"/>
    ${[0,45,90,135,180,225,270,315].map(e=>{const n=18+10.5*Math.cos(e*Math.PI/180),a=18+10.5*Math.sin(e*Math.PI/180),r=18+13*Math.cos(e*Math.PI/180),c=18+13*Math.sin(e*Math.PI/180);return`<line x1="${n.toFixed(1)}" y1="${a.toFixed(1)}" x2="${r.toFixed(1)}" y2="${c.toFixed(1)}" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round"/>`}).join("")}
  </svg>`}function L(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
    <path d="M26 24H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 24Z" fill="#CBD5E1"/>
  </svg>`}function Q(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
    <circle cx="11" cy="13" r="4.5" fill="#F59E0B" opacity=".9"/>
    <path d="M28 22H13a5 5 0 1 1 1.2-9.8A6 6 0 1 1 28 22Z" fill="#CBD5E1"/>
    <line x1="15" y1="25" x2="13" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="19" y1="25" x2="17" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="23" y1="25" x2="21" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`}function I(t){return`<svg width="${t}" height="${t}" viewBox="0 0 36 36" fill="none">
    <path d="M26 22H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 22Z" fill="#94A3B8"/>
    <line x1="14" y1="25" x2="12" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="18" y1="25" x2="16" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="22" y1="25" x2="20" y2="29" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`}function H(t,e,i=22){return t>.5?I(i):e>350?S(i):e>80?L(i):`<svg width="${i}" height="${i}" viewBox="0 0 36 36" fill="none">
    <path d="M26 24H11a6 6 0 1 1 1.5-11.8A7 7 0 1 1 26 24Z" fill="#475569"/>
  </svg>`}function T(){const t=document.getElementById("forecast");if(t){t.innerHTML="";for(let e=0;e<7;e++){const i=new Date;i.setDate(i.getDate()+e);const o=B(e);e===0||e===1||`${M[i.getDay()]}${i.getDate()}${b[i.getMonth()]}`;const n=`${M[i.getDay()]} ${i.getDate()} ${b[i.getMonth()]}.`,a=document.createElement("div");a.className=`fc2-card${e===m?" fc2-card--active":""}`,a.dataset.day=e,a.innerHTML=`
      <div class="fc2-date">${e===0?`<strong>${n}</strong>`:n}</div>
      ${e===0?`<div class="fc2-today-badge">Aujourd'hui</div>`:""}
      <div class="fc2-icon">${K(o.rain,o.tempMax,40)}</div>
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
    `,a.addEventListener("click",()=>{m=e,document.querySelectorAll(".fc2-card").forEach(r=>r.classList.remove("fc2-card--active")),a.classList.add("fc2-card--active"),y(e)}),t.appendChild(a)}}}const P={temp:{label:"Température",unit:"°C",color:"#F59E0B",format:t=>`${t.toFixed(1)} °C`},pluie:{label:"Pluie",unit:"mm",color:"#60A5FA",format:t=>t>0?`${t.toFixed(1)} mm`:"0 mm"},humidity:{label:"Humidité",unit:"%",color:"#34D399",format:t=>`${Math.round(t)} %`},wind:{label:"Vent",unit:"km/h",color:"#818CF8",format:t=>`${Math.round(t)} km/h`},radiation:{label:"Rayonnement",unit:"W/m²",color:"#FBBF24",format:t=>t>0?`${Math.round(t)} W/m²`:"0 W/m²"}};function j(t){const e=B(t);return Array.from({length:24},(i,o)=>{const n=C(t*1e3+o*13),a=Math.max(0,Math.sin(Math.PI*(o-6)/12)),r=.5+.5*Math.sin(2*Math.PI*(o-4)/24-Math.PI/2),c=o>=6&&o<=14&&n()>.82?+(n()*3).toFixed(1):0,d=+(e.tempMin+r*(e.tempMax-e.tempMin)+(n()-.5)*1.5).toFixed(1),h=Math.round(Math.max(30,Math.min(98,65+(1-r)*25-r*10+(n()-.5)*10))),g=Math.round(e.windMin+a*(e.windMax-e.windMin)*.7+n()*4),w=Math.round(Math.max(0,a*750*(.7+n()*.6))),v=+Math.max(0,a*1.2*(1+r*.4)+(n()-.5)*.3).toFixed(2),$=Math.round(Math.max(0,Math.min(100,35+(n()-.5)*70))),l=Math.floor(n()*360);return{hour:o,rain:c,temp:d,humidity:h,wind:g,radiation:w,dpv:v,clouds:$,windDir:l}})}function y(t){const e=new Date;e.setDate(e.getDate()+t);const i=document.getElementById("hourly-day-label");i&&(t===0||t===1||M[e.getDay()],i.textContent=`${M[e.getDay()]} ${e.getDate()} ${Y[e.getMonth()]} ${e.getFullYear()}${t===0?" (Aujourd'hui)":""}`);const o=j(t),n=new Date().getHours(),a=P[p];U(o,n,t,a),W(o,n,t,a),et(o,n,t)}function U(t,e,i,o){const n=document.getElementById("hourly-strip");if(n&&(n.innerHTML=t.map(a=>{const r=i===0&&a.hour===e,c=O(a,p);return`
      <div class="hs-col${r?" hs-col--now":""}">
        ${r?'<div class="hs-now-dot"></div>':""}
        <div class="hs-time">${String(a.hour).padStart(2,"0")}:00</div>
        <div class="hs-icon">${H(a.rain,a.radiation,22)}</div>
        <div class="hs-val" style="color:${o.color}">${o.format(c)}</div>
      </div>
    `}).join(""),i===0)){const r=n.querySelectorAll(".hs-col")[e];r&&setTimeout(()=>r.scrollIntoView({inline:"center",block:"nearest"}),50)}}function O(t,e){return{temp:t.temp,pluie:t.rain,humidity:t.humidity,wind:t.wind,radiation:t.radiation}[e]??0}function W(t,e,i,o){const n=document.getElementById("hourly-curve");if(!n)return;const a=n.clientWidth||1200,r=80,c={t:8,r:10,b:8,l:10},d=t.map(s=>O(s,p)),h=Math.min(...d),g=Math.max(...d),w=g-h||1,v=s=>c.l+s/23*(a-c.l-c.r),$=s=>c.t+(r-c.t-c.b)*(1-(s-h)/w),l=d.map((s,u)=>({x:v(u),y:$(s)}));let F=`M${l[0].x.toFixed(1)},${l[0].y.toFixed(1)}`;for(let s=0;s<l.length-1;s++){const u=l[Math.max(s-1,0)],x=l[s],f=l[s+1],A=l[Math.min(s+2,l.length-1)],V=x.x+(f.x-u.x)/6,R=x.y+(f.y-u.y)/6,Z=f.x-(A.x-x.x)/6,_=f.y-(A.y-x.y)/6;F+=` C${V.toFixed(1)},${R.toFixed(1)} ${Z.toFixed(1)},${_.toFixed(1)} ${f.x.toFixed(1)},${f.y.toFixed(1)}`}const N=`${F} L${l[l.length-1].x.toFixed(1)},${r} L${l[0].x.toFixed(1)},${r} Z`,k=`curve-grad-${p}`;let E=`<defs>
    <linearGradient id="${k}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${o.color}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${o.color}" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <path d="${N}" fill="url(#${k})"/>
  <path d="${F}" fill="none" stroke="${o.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;if(i===0&&e<24){const s=v(e).toFixed(1),u=$(d[e]).toFixed(1);E+=`<circle cx="${s}" cy="${u}" r="4" fill="${o.color}" stroke="#fff" stroke-width="2"/>`}n.setAttribute("viewBox",`0 0 ${a} ${r}`),n.innerHTML=E}const X=["N","NE","E","SE","S","SO","O","NO"];function z(t){return X[Math.round(t/45)%8]}function tt(t){return`<span style="display:inline-block;transform:rotate(${t}deg)">↑</span>`}function et(t,e,i){const o=document.querySelector("#hourly-table tbody");o&&(o.innerHTML="",t.forEach(n=>{const a=i===0&&n.hour===e,r=n.hour===23?0:n.hour+1,c=document.createElement("tr");a&&c.classList.add("ht-row--now"),c.innerHTML=`
      <td class="ht-time">
        <span class="ht-icon">${H(n.rain,n.radiation,18)}</span>
        ${String(n.hour).padStart(2,"0")}h – ${String(r).padStart(2,"0")}h
        ${a?'<span class="ht-now-badge">maintenant</span>':""}
      </td>
      <td>${n.rain>0?`<span style="color:#60A5FA;font-weight:500">${n.rain.toFixed(1)} mm</span>`:"0 mm"}</td>
      <td style="color:${n.temp>25?"#ef4444":n.temp<5?"#60A5FA":"inherit"};font-weight:500">${n.temp.toFixed(1)} °C</td>
      <td>${n.humidity} %</td>
      <td>${n.wind} km/h ${tt(n.windDir)} ${z(n.windDir)}</td>
      <td>${n.dpv>0?n.dpv.toFixed(2)+" kPa":"— kPa"}</td>
      <td>${n.radiation>0?n.radiation+" W/m²":"0 W/m²"}</td>
      <td>${n.clouds>0?n.clouds+" %":"— %"}</td>
    `,o.appendChild(c)}))}window.addEventListener("resize",()=>{if(document.getElementById("hourly-curve")){const t=j(m),e=new Date().getHours();W(t,e,m,P[p])}});
