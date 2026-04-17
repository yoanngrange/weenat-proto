import"./main-6h3kY6nD.js";import{p as Ie}from"./plots-CEyFXpqF.js";import{s as z}from"./sensors-BafoiuOm.js";import{o as ae}from"./orgs-b3kLTQ0f.js";import{m as ee}from"./members-U142UPu4.js";import{u as ye}from"./breadcrumb-CD3EeVEY.js";import{d as se,e as Y}from"./store-MO2UfX1b.js";const Se=new URLSearchParams(window.location.search),B=parseInt(Se.get("id")),T=Ie.find(e=>e.id===B);function d(e,n){return Math.floor(Math.random()*(n-e+1))+e}function R(e,n){return parseFloat((Math.random()*(n-e)+e).toFixed(2))}const oe=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#c090e0",base:()=>R(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>d(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#80c8e8",base:()=>d(2,16),isCumul:!1}],D={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>d(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>d(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité air",unit:"%",color:"#4ecdc4",base:()=>d(40,90)},{id:"vent",name:"Vent",unit:"km/h",color:"#7bc4b0",base:()=>d(0,35)},{id:"dpv",name:"DPV",unit:"kPa",color:"#a8d8b0",base:()=>R(.1,2.5)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>d(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>d(10,28),cumul:{label:"DJC",unit:"°j"}}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>d(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>d(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité air",unit:"%",color:"#4ecdc4",base:()=>d(40,90)},{id:"dpv",name:"DPV",unit:"kPa",color:"#a8d8b0",base:()=>R(.1,2.5)}],"CHP-15/30":[{id:"sol15",name:"Hum. sol 15 cm",unit:"%vol",color:"#d4a843",base:()=>d(15,45)},{id:"sol30",name:"Hum. sol 30 cm",unit:"%vol",color:"#b88a2c",base:()=>d(15,45)},{id:"tsol",name:"Temp. sol",unit:"°C",color:"#bb8fce",base:()=>d(8,22)}],"CHP-30/60":[{id:"sol30",name:"Hum. sol 30 cm",unit:"%vol",color:"#b88a2c",base:()=>d(15,45)},{id:"sol60",name:"Hum. sol 60 cm",unit:"%vol",color:"#9a7015",base:()=>d(18,42)},{id:"tsol",name:"Temp. sol",unit:"°C",color:"#bb8fce",base:()=>d(8,22)}],"CHP-60/90":[{id:"sol60",name:"Hum. sol 60 cm",unit:"%vol",color:"#9a7015",base:()=>d(18,42)},{id:"sol90",name:"Hum. sol 90 cm",unit:"%vol",color:"#7c5800",base:()=>d(20,40)},{id:"tsol",name:"Temp. sol",unit:"°C",color:"#bb8fce",base:()=>d(8,22)}],"CAPA-30-3":[{id:"tensio30",name:"Tension 30 cm",unit:"cbar",color:"#98d8c8",base:()=>d(10,80)},{id:"tensio60",name:"Tension 60 cm",unit:"cbar",color:"#78b8a8",base:()=>d(10,80)},{id:"tensio90",name:"Tension 90 cm",unit:"cbar",color:"#589888",base:()=>d(10,80)}],"CAPA-60-6":[{id:"tensio30",name:"Tension 30 cm",unit:"cbar",color:"#98d8c8",base:()=>d(10,80)},{id:"tensio60",name:"Tension 60 cm",unit:"cbar",color:"#78b8a8",base:()=>d(10,80)},{id:"tensio90",name:"Tension 90 cm",unit:"cbar",color:"#589888",base:()=>d(10,80)},{id:"tensio120",name:"Tension 120 cm",unit:"cbar",color:"#387868",base:()=>d(10,80)},{id:"tensio150",name:"Tension 150 cm",unit:"cbar",color:"#185848",base:()=>d(10,80)},{id:"tensio180",name:"Tension 180 cm",unit:"cbar",color:"#003828",base:()=>d(10,80)}],T_MINI:[{id:"tmin",name:"Temp. min",unit:"°C",color:"#90b0e0",base:()=>d(-2,15),cumul:{label:"Heures de froid",unit:"h"}}],LWS:[{id:"humec",name:"Humectation feuille",unit:"h",color:"#78d8a0",base:()=>d(0,12)}],T_GEL:[{id:"tgel",name:"Temp. feuille",unit:"°C",color:"#a0d8a0",base:()=>d(-3,12),cumul:{label:"Heures de gel",unit:"h"}}],W:[{id:"vent",name:"Vent – vitesse",unit:"km/h",color:"#7bc4b0",base:()=>d(0,40)},{id:"rafales",name:"Vent – rafales",unit:"km/h",color:"#5aa490",base:()=>d(5,60)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>R(.1,3)},{id:"tsol",name:"Temp. sol",unit:"°C",color:"#bb8fce",base:()=>d(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>d(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}]},xe={id:"irrigation_manual",name:"Irrigations",unit:"mm",color:"#0172A4",chartType:"bar",isCumul:!0,cumul:{label:"Cumul irrigations",unit:"mm"},base:()=>0},$e=["CAPA-30-3","CAPA-60-6"],Le=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Millésime","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let m={};function ke(){const e=se(B);if(m={...T,...e},!m.linkedSensorIds){const n=z.filter(t=>t.parcelId===B).map(t=>t.id);m.linkedSensorIds=e.linkedSensorIds??n}m.integrations||(m.integrations=[...T.integrations||[]]),m.alertes||(m.alertes=[]),m.irrigationEvents||(m.irrigationEvents=[])}function H(e){Object.assign(m,e),Y(B,e)}let V="7d",J=null,X=null;function Ce(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return V==="custom"&&J&&X?Math.max(60,Math.round((X-J)/6e4)):e[V]??10080}function Ee(){var n;const e=((n=document.getElementById("time-step"))==null?void 0:n.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Te(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function Ae(){const e=Ce(),n=Ee();return Math.max(2,Math.min(200,Math.floor(e/n)))}document.addEventListener("DOMContentLoaded",()=>{if(!T){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}ke(),ye(m.name||T.name,{label:"Parcelles",href:"parcelles.html"}),re(),O(),Ye(),it(),Ue(),at(),st()});function He(){const e=[];return z.filter(t=>m.linkedSensorIds.includes(t.id)).forEach(t=>{const i=D[t.model];i&&i.forEach(a=>e.push(a))}),e.push(xe),oe.forEach(t=>e.push(t)),e}function re(){const e=document.getElementById("weather-strip");e.innerHTML="",He().forEach(n=>{const t=n.id==="irrigation_manual"?m.irrigationEvents.reduce((s,o)=>s+(o.mm||0),0):n.base(),i=typeof t=="number"?Number.isInteger(t)?t:t.toFixed(1):"—",a=document.createElement("div");a.className="latest-card",a.style.borderTop=`3px solid ${n.color}`,a.innerHTML=`
      <div class="latest-card-name" style="color:${n.color}">${n.name}</div>
      <div class="latest-card-value">${i}<span class="latest-card-unit"> ${n.unit}</span></div>
    `,e.appendChild(a)})}function O(){const e=document.getElementById("charts-container");e.innerHTML="",z.filter(i=>m.linkedSensorIds.includes(i.id)).forEach(i=>{const a=D[i.model];if(!a)return;const s=document.createElement("div");s.className="chart-group-header",s.innerHTML=`
      <i class="bi bi-broadcast" style="color:var(--pri)"></i>
      <strong>${i.model}</strong>
      <span class="chart-group-serial">${i.serial}</span>
      ${i.event?`<span class="detail-badge detail-badge--err"><i class="bi bi-exclamation-triangle-fill"></i> ${i.event}</span>`:""}
    `,e.appendChild(s),a.forEach(o=>ce(e,o))}),_e(e);const t=document.createElement("div");t.className="chart-group-header",t.innerHTML='<i class="bi bi-cloud-sun" style="color:var(--pri)"></i> <strong>Données météo</strong> <span class="chart-group-serial">Station de référence</span>',e.appendChild(t),oe.forEach(i=>ce(e,i)),je(),Ve()}function ce(e,n){const t=n.base(),i=document.createElement("div");i.className="chart-card",i.dataset.base=t,i.dataset.color=n.color,i.dataset.cumul=n.isCumul?"1":"",i.dataset.chartType=n.chartType||"line",i.dataset.metricId=n.id,i.dataset.metricName=n.name,i.dataset.metricUnit=n.unit;const a=n.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${n.cumul.label}</span><span class="chart-cumul-value">${Ge(n)} ${n.cumul.unit}</span></div>`:"";i.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${n.color}">${n.name}</span>
      <span class="chart-card-unit">${n.unit}</span>
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${a}
  `,e.appendChild(i)}let W=null;function Be(){return W||(W=document.createElement("div"),W.className="chart-tooltip",document.body.appendChild(W)),W}function De(e,n){return n==="temp"||n==="temperature"?["#6eb4d4","#e07050"]:n==="tmin"?["#aecce8","#5580c0"]:n==="temp_rosee"?["#a0d0f0","#4090c0"]:[Fe(e,.55),e]}function Fe(e,n){const t=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),s=Math.round(t+(255-t)*n),o=Math.round(i+(255-i)*n),r=Math.round(a+(255-a)*n);return`#${s.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`}function Pe(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let n=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let t=0;t<e.length-1;t++){const i=e[Math.max(t-1,0)],a=e[t],s=e[t+1],o=e[Math.min(t+2,e.length-1)],r=a.x+(s.x-i.x)/6,g=a.y+(s.y-i.y)/6,p=s.x-(o.x-a.x)/6,l=s.y-(o.y-a.y)/6;n+=` C${r.toFixed(1)},${g.toFixed(1)} ${p.toFixed(1)},${l.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return n}function we(e){const n=new Date(Date.now()-e*6e4);return e<1440?`${String(n.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][n.getMonth()]:`${String(n.getDate()).padStart(2,"0")}/${String(n.getMonth()+1).padStart(2,"0")}`}function de(e){const n=Date.now()-e*6e4;return new Date(n).getHours()+new Date(n).getMinutes()/60}function qe(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function ue(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function me(e,n,t,i=.15){const a=de(t),s=ue(a),o=qe(a),r=()=>1+(Math.random()-.5)*2*i;switch(e){case"temp":return(n-6+s*12)*r();case"tmin":return(n-4+s*8)*r();case"temp_rosee":{const g=n-6+s*12;return Math.min(g-1,n-8+s*6)*r()}case"tsol":{const g=de(t+120);return(n-3+ue(g)*6)*r()}case"humidite":return Math.min(100,Math.max(20,(n+(1-s)*25-s*15)*r()));case"rayonnement":return Math.max(0,o*n*1.3*r());case"etp":return Math.max(0,o*n*1.5*r());case"dpv":return Math.max(0,(o*n*1.4+.05)*r());case"humec":return Math.max(0,n*Math.max(0,.8-o*1.2)*r());case"pluie":return Math.random()<.12?n*Math.random()*2:0;case"vent":case"rafales":return Math.max(0,n*(.6+o*.8)*r());default:return Math.max(0,n*r())}}function je(){const e=Ae(),n=Ee();document.querySelectorAll(".chart-card").forEach(t=>{const i=parseFloat(t.dataset.base),a=t.dataset.color,s=t.dataset.cumul==="1",o=t.dataset.chartType||"line",r=t.dataset.metricId||"",g=t.dataset.metricName||"",p=t.dataset.metricUnit||"";t.dataset.isIrrigation?Oe(t.querySelector(".chart-svg"),a,e,n):ze(t.querySelector(".chart-svg"),i,a,e,n,s,o,r,g,p)})}function ze(e,n,t,i,a,s,o="line",r="",g="",p=""){const c={t:14,r:10,b:28,l:46},u=600-c.l-c.r,v=180-c.t-c.b,b=Math.max(1,Math.round(a/15)),E=Array.from({length:i},(y,x)=>{const I=(i-1-x)*a;if(s){let P=0;for(let q=0;q<b;q++)P+=me(r,n/b,I+q*(a/b));return P}else return me(r,n,I)}),f=o==="bar"?0:Math.min(...E),w=Math.max(...E),M=w-f||1,k=y=>c.l+y/Math.max(i-1,1)*u,F=y=>c.t+v-(y-f)/M*v,S=`grad_${Math.random().toString(36).slice(2)}`,[C,A]=De(t,r);let $=`<defs>
    <linearGradient id="${S}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${C}"/>
      <stop offset="100%" stop-color="${A}"/>
    </linearGradient>
    <clipPath id="clip_${S}">
      <rect x="${c.l}" y="${c.t}" width="${u}" height="${v}"/>
    </clipPath>
  </defs>`;for(let y=0;y<=4;y++){const x=c.t+y/4*v,I=w-y/4*M,P=Math.abs(I)>=100?I.toFixed(0):Math.abs(I)>=10?I.toFixed(1):I.toFixed(2);$+=`<line x1="${c.l}" y1="${x.toFixed(1)}" x2="${600-c.r}" y2="${x.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,$+=`<text x="${c.l-5}" y="${(x+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${P}</text>`}const _=Math.max(1,Math.floor(i/6));for(let y=0;y<i;y+=_){const x=k(y).toFixed(1),I=(i-y)*a;$+=`<line x1="${x}" y1="${c.t}" x2="${x}" y2="${c.t+v}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,$+=`<text x="${x}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${we(I)}</text>`}if(o==="bar"){const y=Math.max(2,u/i*.65);E.forEach((x,I)=>{if(x<=0)return;const P=k(I),q=F(x),Z=c.t+v-q;$+=`<rect x="${(P-y/2).toFixed(1)}" y="${q.toFixed(1)}" width="${y.toFixed(1)}" height="${Z.toFixed(1)}" fill="url(#${S})" opacity="0.9" rx="1"/>`})}else{const y=E.map((P,q)=>({x:k(q),y:F(P)})),x=Pe(y),I=x+` L${k(i-1).toFixed(1)},${c.t+v} L${c.l.toFixed(1)},${c.t+v} Z`;$+=`<path d="${I}" fill="${A}" opacity="0.07" clip-path="url(#clip_${S})"/>`,$+=`<path d="${x}" fill="none" stroke="url(#${S})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${S})"/>`}$+=`<rect class="chart-hover-rect" x="${c.l}" y="${c.t}" width="${u}" height="${v}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=$,Re(e,E,k,F,f,w,i,a,g,p,t,c,600)}function Re(e,n,t,i,a,s,o,r,g,p,l,h,c,u){const v=Be(),b=e.querySelector(".chart-hover-rect");if(!b)return;const f=document.createElementNS("http://www.w3.org/2000/svg","circle");f.setAttribute("r","4"),f.setAttribute("fill",l),f.setAttribute("stroke","#fff"),f.setAttribute("stroke-width","1.5"),f.style.display="none",f.style.pointerEvents="none",e.appendChild(f),b.addEventListener("mousemove",w=>{const M=e.getBoundingClientRect(),k=c/M.width,F=(w.clientX-M.left)*k,S=c-h.l-h.r,C=Math.max(0,Math.min(1,(F-h.l)/S)),A=Math.round(C*(o-1));if(A<0||A>=n.length)return;const $=n[A],_=t(A),y=i($);f.setAttribute("cx",_),f.setAttribute("cy",y),f.style.display="";const x=(o-A)*r,I=we(x),P=Math.abs($)>=100?$.toFixed(1):$.toFixed(2);v.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${g}</div>
      <div class="chart-tooltip-val" style="color:${l}">${P} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${p}</span></div>
      <div class="chart-tooltip-ts">${I}</div>
    `,v.style.display="block";const q=w.clientX+12,Z=w.clientY-10;v.style.left=`${Math.min(q,window.innerWidth-160)}px`,v.style.top=`${Z}px`}),b.addEventListener("mouseleave",()=>{v.style.display="none",f.style.display="none"})}function Oe(e,n,t,i){const o={t:12,r:8,b:28,l:44},r=600-o.l-o.r,g=180-o.t-o.b,p=Date.now(),l=t*i*6e4,h=Array(t).fill(0);m.irrigationEvents.forEach(f=>{const w=new Date(f.isoDate).getTime(),M=p-w;if(M<0||M>l)return;const k=Math.floor((l-M)/(i*6e4));k>=0&&k<t&&(h[k]+=f.mm||0)});const c=Math.max(...h,1),u=f=>o.l+f/Math.max(t-1,1)*r,v=f=>o.t+g-f/c*g;let b="";for(let f=0;f<=4;f++){const w=o.t+f/4*g,M=(c-f/4*c).toFixed(1);b+=`<line x1="${o.l}" y1="${w}" x2="${600-o.r}" y2="${w}" stroke="var(--bdr2)" stroke-width="1"/>`,b+=`<text x="${o.l-4}" y="${w+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${M}</text>`}const E=Math.max(4,r/t*.65);h.forEach((f,w)=>{if(f<=0)return;const M=u(w),k=v(f),F=o.t+g-k;b+=`<rect x="${(M-E/2).toFixed(1)}" y="${k.toFixed(1)}" width="${E.toFixed(1)}" height="${F.toFixed(1)}" fill="${n}" opacity="0.85" rx="1"/>`}),e.innerHTML=b}function _e(e){const n=xe,i=(m.irrigationEvents||[]).reduce((s,o)=>s+(o.mm||0),0),a=document.createElement("div");a.className="chart-card",a.dataset.color=n.color,a.dataset.chartType="bar",a.dataset.isIrrigation="1",a.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${n.color}">${n.name}</span>
      <span class="chart-card-unit">${n.unit}</span>
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    <div class="chart-cumul">
      <span class="chart-cumul-label">Cumul irrigations</span>
      <span class="chart-cumul-value irrig-cumul-val">${i.toFixed(1)} mm</span>
    </div>
    <div class="irrig-events-list" style="margin-top:6px"></div>
    <button class="irrig-add-btn action-btn" style="margin-top:6px;width:100%">
      <i class="bi bi-plus"></i> Ajouter une irrigation
    </button>
  `,e.appendChild(a),Ne(a),a.querySelector(".irrig-add-btn").addEventListener("click",()=>{We(a)})}function Ne(e){const n=e.querySelector(".irrig-events-list"),t=m.irrigationEvents||[],i=new Date,a=i.getFullYear(),s=i.getMonth(),o=i.toLocaleString("fr-FR",{month:"long",year:"numeric"}),r={};t.forEach((u,v)=>{const b=new Date(u.isoDate);if(b.getFullYear()===a&&b.getMonth()===s){const E=b.getDate();r[E]||(r[E]=[]),r[E].push(v)}});const p=(new Date(a,s,1).getDay()+6)%7,l=new Date(a,s+1,0).getDate(),h=["L","M","M","J","V","S","D"].map(u=>`<div class="irrig-cal-hd">${u}</div>`).join("");let c=Array(p).fill('<div class="irrig-cal-cell irrig-cal-empty"></div>').join("");for(let u=1;u<=l;u++){const v=r[u],b=v&&v.length>0,E=b?v.reduce((f,w)=>{var M;return f+(((M=t[w])==null?void 0:M.mm)||0)},0):0;c+=`<div class="irrig-cal-cell${b?" irrig-cal-has-event":""}" data-day="${u}" title="${b?E.toFixed(0)+" mm":""}">
      <span class="irrig-cal-day">${u}</span>
      ${b?'<span class="irrig-cal-dot" style="background:#0172A4"></span>':""}
    </div>`}n.innerHTML=`
    <div class="irrig-calendar">
      <div class="irrig-cal-month">${o}</div>
      <div class="irrig-cal-grid">${h}${c}</div>
    </div>
    <div class="irrig-event-rows">
      ${t.length===0?'<span class="panel-empty" style="font-size:12px">Aucune irrigation saisie</span>':t.map((u,v)=>`
          <div class="integ-pill-row" style="margin-top:3px">
            <span class="integ-pill"><i class="bi bi-droplet-fill" style="color:#0172A4"></i> ${u.mm} mm — ${u.isoDate.replace("T"," ").slice(0,16)}</span>
            <button class="icon-btn remove-irrig-btn" data-idx="${v}" title="Supprimer"><i class="bi bi-x-lg"></i></button>
          </div>
        `).join("")}
    </div>
  `,n.querySelectorAll(".remove-irrig-btn").forEach(u=>{u.addEventListener("click",()=>{const v=parseInt(u.dataset.idx),b=[...m.irrigationEvents];b.splice(v,1),H({irrigationEvents:b}),O(),re()})})}function We(e){if(e.querySelector(".irrig-form"))return;const n=new Date().toISOString().slice(0,16),t=document.createElement("div");t.className="irrig-form alert-create-form",t.style.marginTop="8px",t.innerHTML=`
    <div class="alert-form-row">
      <input type="number" id="irrig-mm" class="inline-edit" placeholder="mm" min="0" step="0.1" style="width:70px">
      <input type="datetime-local" id="irrig-date" class="inline-edit" value="${n}" style="width:190px">
    </div>
    <div class="alert-form-actions">
      <button id="irrig-save" class="panel-add-btn">Enregistrer</button>
      <button id="irrig-cancel" class="icon-btn"><i class="bi bi-x"></i></button>
    </div>
  `,e.appendChild(t),t.querySelector("#irrig-save").addEventListener("click",()=>{const i=parseFloat(t.querySelector("#irrig-mm").value),a=t.querySelector("#irrig-date").value;if(!i||i<=0||!a)return;const s=[...m.irrigationEvents||[],{isoDate:a,mm:i}];s.sort((o,r)=>o.isoDate.localeCompare(r.isoDate)),H({irrigationEvents:s}),O(),re()}),t.querySelector("#irrig-cancel").addEventListener("click",()=>t.remove())}function Ve(){const e=document.getElementById("charts-container"),n=z.filter(S=>m.linkedSensorIds.includes(S.id));let t=0;n.forEach(S=>{(D[S.model]||[]).some(A=>A.id==="pluie")&&(t=d(20,80))});const i=R(15,60),a=(m.irrigationEvents||[]).reduce((S,C)=>S+(C.mm||0),0),s=Math.max(0,t+a-i),o=t+a-i-s,r=document.createElement("div");r.className="cumul-summary";const g=480,p=240,l=100,h=180,c=140,u=340;function v(S,C,A,$,_,y){const x=S;return`
      <line x1="${x}" y1="${A}" x2="${x}" y2="${C+10}" stroke="${$}" stroke-width="3" marker-end="url(#ah-${$.replace("#","")})"/>
      <text x="${x}" y="${C-6}" text-anchor="middle" fill="${$}" font-size="12" font-weight="600">${_}</text>
      <text x="${x}" y="${C-20}" text-anchor="middle" fill="${$}" font-size="13" font-weight="700">${y} mm</text>
    `}function b(S,C,A,$,_,y,x){const I=S;return`
      <line x1="${I}" y1="${C}" x2="${I}" y2="${A-10}" stroke="${$}" stroke-width="3" marker-end="url(#ad-${$.replace("#","")})"/>
      <text x="${I}" y="${x??C-10}" text-anchor="middle" fill="${$}" font-size="12" font-weight="600">${_}</text>
      <text x="${I}" y="${(x??C-10)-14}" text-anchor="middle" fill="${$}" font-size="13" font-weight="700">${y} mm</text>
    `}function E(S,C){return`<marker id="${S}" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="${C}"/>
    </marker>`}const f="#c090e0",w="#45b7d1",M="#0172A4",k="#7bc4b0",F=o>=0?"#2d9e5f":"#e07050";r.innerHTML=`
    <div class="water-balance-wrap">
      <div class="water-balance-title">Bilan hydrique — période sélectionnée</div>
      <svg viewBox="0 0 ${g} ${p}" width="100%" style="max-width:520px;display:block;margin:0 auto">
        <defs>
          ${E("ah-"+f.replace("#",""),f)}
          ${E("ad-"+w.replace("#",""),w)}
          ${E("ad-"+M.replace("#",""),M)}
          ${E("ad-"+k.replace("#",""),k)}
        </defs>

        <!-- Soil block -->
        <rect x="${c}" y="${l}" width="${u-c}" height="${h-l}"
              rx="6" fill="#d4a85855" stroke="#a07030" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="${(c+u)/2}" y="${(l+h)/2-6}" text-anchor="middle"
              fill="#7a5020" font-size="11">Sol</text>
        <text x="${(c+u)/2}" y="${(l+h)/2+10}" text-anchor="middle"
              fill="${F}" font-size="14" font-weight="700">
          ${o>=0?"+":""}${o.toFixed(0)} mm
        </text>
        <text x="${(c+u)/2}" y="${(l+h)/2+24}" text-anchor="middle"
              fill="${F}" font-size="10">bilan net</text>

        <!-- ETP arrow up from soil surface -->
        ${v(240,18,l,f,"ETP",i.toFixed(1))}

        <!-- Pluie arrow down -->
        ${b(160,10,l,w,"Pluie",t.toFixed(0),22)}

        <!-- Irrigation arrow down (slightly right of rain) -->
        ${b(320,10,l,M,"Irrigation",a.toFixed(0),22)}

        <!-- Drainage arrow down from soil bottom -->
        ${b(240,h,p-10,k,"Drainage",s.toFixed(0),h+20)}
      </svg>
      <div class="water-balance-legend">
        <span style="color:${w}">&#x25BC; Pluie ${t.toFixed(0)} mm</span>
        <span style="color:${M}">&#x25BC; Irrigation ${a.toFixed(0)} mm</span>
        <span style="color:${f}">&#x25B2; ETP ${i.toFixed(1)} mm</span>
        <span style="color:${k}">&#x25BC; Drainage ${s.toFixed(0)} mm</span>
      </div>
    </div>
  `,e.appendChild(r)}function Ge(e){const t={pluie:()=>d(20,120),etp:()=>R(15,80),rayonnement:()=>d(500,3e3)}[e.id];return t?t():d(10,100)}function Ue(){const e=document.getElementById("period-presets"),n=document.getElementById("custom-date-row"),t=document.getElementById("time-step"),i=new Date,a=new Date(i-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=i.toISOString().slice(0,10),e.addEventListener("click",s=>{const o=s.target.closest(".period-preset-btn");if(o)if(e.querySelectorAll(".period-preset-btn").forEach(r=>r.classList.remove("active")),o.classList.add("active"),V=o.dataset.period,V==="custom")n.style.display="flex";else{n.style.display="none";const r=document.getElementById("time-step");r&&(r.value=Te(V)),O()}}),document.getElementById("date-from").addEventListener("change",pe),document.getElementById("date-to").addEventListener("change",pe),t.addEventListener("change",O)}function pe(){const e=document.getElementById("date-from").value,n=document.getElementById("date-to").value;e&&n&&(J=new Date(e),X=new Date(n+"T23:59:59"),J<X&&O())}function Ye(){const e=ae.find(n=>n.id===T.orgId);Je(e),Xe(e),te(),ne(),ie(),le(),tt()}const K=["Argilo-limoneux","Argileux","Limoneux","Sablo-limoneux","Sableux","Limon argileux","Limon fin","Argile sableux","Limono-argileux fin","Sable limoneux","Argile limoneuse"],Q=["Goutte à goutte","Aspersion","Submersion","Enrouleur","Pivot","Rampe","Micro aspersion","Couverture intégrale","Goutte à goutte enterré","Gravitaire","Non irrigué","Pas d'irrigation"];function Je(e){const n=document.getElementById("panel-ident"),t=m,i=t.texture||K[t.id%K.length],a=t.irrigation||Q[t.id%Q.length];n.innerHTML=`
    ${he("Nom",t.name||"—","name")}
    ${he("Culture",t.crop||"—","crop")}
    ${ve("Surface",(t.area?`${t.area} ha`:"—")+' <span class="field-computed">(calculé)</span>')}
    ${fe("Texture sol",i,"texture",K)}
    ${fe("Irrigation",a,"irrigation",Q,"integ-pill")}
    ${ve("Exploitation",e?e.name:"—")}
  `,G(n,"name",t.name||"",s=>{H({name:s}),ye(s,{label:"Parcelles",href:"parcelles.html"})}),G(n,"crop",t.crop||"",s=>H({crop:s})),G(n,"texture",i,s=>H({texture:s})),G(n,"irrigation",a,s=>H({irrigation:s}))}function he(e,n,t,i){return`
    <div class="panel-row editable-row" data-field="${t}">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val" data-val></span>
      <button class="edit-field-btn" title="Modifier"><i class="bi bi-pencil"></i></button>
    </div>`}function fe(e,n,t,i,a){const s=a?` data-display-class="${a}"`:"";return`
    <div class="panel-row editable-row" data-field="${t}" data-options="${encodeURIComponent(JSON.stringify(i))}"${s}>
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val" data-val></span>
      <button class="edit-field-btn" title="Modifier"><i class="bi bi-pencil"></i></button>
    </div>`}function ve(e,n){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${n}</span>
    </div>`}function G(e,n,t,i){const a=e.querySelector(`[data-field="${n}"]`);if(!a)return;const s=a.querySelector("[data-val]"),o=a.querySelector(".edit-field-btn"),r=a.dataset.options?JSON.parse(decodeURIComponent(a.dataset.options)):null,g=a.dataset.displayClass||null,p=l=>{g?s.innerHTML=`<span class="${g}">${l}</span>`:s.textContent=l};p(t),o.addEventListener("click",()=>{if(a.classList.contains("editing"))return;a.classList.add("editing"),o.style.display="none";let l;r?(l=document.createElement("select"),l.className="inline-edit",r.forEach(c=>{const u=document.createElement("option");u.value=c,u.textContent=c,c===t&&(u.selected=!0),l.appendChild(u)})):(l=document.createElement("input"),l.type="text",l.className="inline-edit",l.value=t),s.textContent="",s.appendChild(l),l.focus();const h=()=>{var u;const c=((u=l.value)==null?void 0:u.trim())||t;t=c,i(c),p(c),a.classList.remove("editing"),o.style.display=""};l.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),h()),c.key==="Escape"&&(p(t),a.classList.remove("editing"),o.style.display="")}),l.addEventListener("blur",h)})}function Xe(e){const n=document.getElementById("panel-geoloc"),t=m.latlngs||T.latlngs,i=Array.isArray(t)&&t.length>=3,a=m.ville||T.ville||(e==null?void 0:e.ville)||"—",s=T.departement||(e==null?void 0:e.departement),o=m.lat??T.lat??(e==null?void 0:e.lat),r=m.lng??T.lng??(e==null?void 0:e.lng);n.innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${s?` (${s})`:""}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${o!=null?o.toFixed(4):"—"}, ${r!=null?r.toFixed(4):"—"}</span>
    </div>
    <div style="padding:8px 0 4px">
      <a href="parcelle-modifier-contour.html?id=${B}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${i?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function Ze(){const e=new Set;return z.filter(t=>m.linkedSensorIds.includes(t.id)).forEach(t=>{const i=D[t.model]||[];$e.includes(t.model)||i.forEach(a=>e.add(a.id))}),e}function te(){const e=document.getElementById("panel-sensors"),n=z.filter(s=>m.linkedSensorIds.includes(s.id)),t=z.filter(s=>s.orgId===T.orgId&&!m.linkedSensorIds.includes(s.id));let i="";n.length===0?i+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>':i+=n.map(s=>`
      <div class="sensor-linked-row">
        <a href="capteur-detail.html?id=${s.id}" class="sensor-link-model">${s.model}</a>
        <span class="sensor-link-serial">${s.serial}</span>
        <button class="remove-sensor-btn icon-btn" data-id="${s.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),t.length>0&&(i+=`
      <div class="panel-add-row">
        <select id="add-sensor-select" class="panel-add-select">
          <option value="">Ajouter un capteur…</option>
          ${t.map(s=>`<option value="${s.id}">${s.model} — ${s.serial}</option>`).join("")}
        </select>
        <button id="add-sensor-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `),e.innerHTML=i,e.querySelectorAll(".remove-sensor-btn").forEach(s=>{s.addEventListener("click",()=>{const o=parseInt(s.dataset.id);H({linkedSensorIds:m.linkedSensorIds.filter(r=>r!==o)}),te(),O()})});const a=document.getElementById("add-sensor-btn");a&&a.addEventListener("click",()=>{const s=document.getElementById("add-sensor-select"),o=parseInt(s.value);if(!o)return;const r=z.find(g=>g.id===o);if(r){if($e.includes(r.model)){const g=prompt(`Profondeur(s) d'installation du ${r.model} (ex : 30, 60, 90 cm) :`,"30, 60, 90");if(g===null)return;const l=se(B).tensioDepths||{};l[o]=g,Y(B,{tensioDepths:l})}else{const g=Ze(),l=(D[r.model]||[]).map(h=>h.id).filter(h=>g.has(h));if(l.length>0){const h=l.map(u=>{const v=Object.values(D).flat().find(b=>b.id===u);return(v==null?void 0:v.name)||u});if(!confirm(`Attention : ce capteur (${r.model}) mesure des métriques déjà fournies par un autre capteur :
• ${h.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}H({linkedSensorIds:[...m.linkedSensorIds,o]}),te(),O()}})}function ne(){var a;const e=document.getElementById("panel-integrations"),n=m.integrations||[],t=Le.filter(s=>!n.includes(s));let i="";n.length===0?i+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':i+=n.map(s=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${s}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(s)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),t.length>0&&(i+=`
      <div class="panel-add-row">
        <select id="add-integ-select" class="panel-add-select">
          <option value="">Ajouter une intégration…</option>
          ${t.map(s=>`<option value="${encodeURIComponent(s)}">${s}</option>`).join("")}
        </select>
        <button id="add-integ-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `),e.innerHTML=i,e.querySelectorAll(".remove-integ-btn").forEach(s=>{s.addEventListener("click",()=>{const o=decodeURIComponent(s.dataset.name);H({integrations:m.integrations.filter(r=>r!==o)}),ne()})}),(a=document.getElementById("add-integ-btn"))==null||a.addEventListener("click",()=>{const s=document.getElementById("add-integ-select"),o=decodeURIComponent(s.value);o&&(H({integrations:[...m.integrations,o]}),ne())})}let j=null;function Ke(){if(j!==null)return;j=se(B).linkedMemberIds??ee.filter(n=>{var t;return(t=n.parcelIds)==null?void 0:t.includes(B)}).map(n=>n.id)}function ie(){Ke();const e=document.getElementById("panel-membres"),n=ee.filter(i=>j.includes(i.id));n.length?e.innerHTML=n.map(i=>`
      <div class="member-row">
        <div>
          <span class="member-name">${i.prenom} ${i.nom}</span>
          <span class="member-role-badge">${i.role}</span>
        </div>
        <button class="remove-membre-btn icon-btn" data-id="${i.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""):e.innerHTML='<p class="panel-empty">Aucun membre associé.</p>';const t=document.getElementById("add-membre-select");t&&(t.innerHTML='<option value="">Ajouter un membre…</option>',ee.filter(i=>!j.includes(i.id)).forEach(i=>{const a=document.createElement("option");a.value=i.id,a.textContent=`${i.prenom} ${i.nom} (${i.role})`,t.appendChild(a)})),e.querySelectorAll(".remove-membre-btn").forEach(i=>{i.addEventListener("click",()=>{j=j.filter(a=>a!==parseInt(i.dataset.id)),Y(B,{linkedMemberIds:j}),ie()})}),document.getElementById("add-membre-btn").onclick=()=>{const i=parseInt(document.getElementById("add-membre-select").value);!i||j.includes(i)||(j.push(i),Y(B,{linkedMemberIds:j}),ie())}}function le(){const e=document.getElementById("panel-alertes"),n=m.alertes||[],t={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let i="";n.length===0?i+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':i+=n.map((a,s)=>`
      <div class="alert-item">
        <i class="bi ${t[a.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition||""} ${a.threshold||""} ${a.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${s}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),i+='<button id="create-alert-btn" class="action-btn" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=i,e.querySelectorAll(".remove-alert-btn").forEach(a=>{a.addEventListener("click",()=>{const s=parseInt(a.dataset.idx),o=[...m.alertes];o.splice(s,1),H({alertes:o}),le()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{et(e)})}function Qe(){const e=[];return z.filter(t=>m.linkedSensorIds.includes(t.id)).forEach(t=>{(D[t.model]||[]).forEach(a=>{e.find(s=>s.id===a.id)||e.push({id:a.id,name:a.name,unit:a.unit})})}),oe.forEach(t=>{e.find(i=>i.id===t.id)||e.push({id:t.id,name:t.name,unit:t.unit})}),e}function et(e){if(e.querySelector(".alert-create-form"))return;const t=Qe(),i=document.createElement("div");i.className="alert-create-form",i.innerHTML=`
    <div class="alert-form-row">
      <select id="alert-metric" class="panel-add-select">
        <option value="">Métrique…</option>
        ${t.map(a=>`<option value="${a.id}" data-unit="${a.unit}">${a.name}</option>`).join("")}
      </select>
    </div>
    <div class="alert-form-row" style="align-items:center;gap:6px">
      <select id="alert-condition" class="panel-add-select" style="max-width:70px;flex:0 0 auto">
        <option value=">">&gt;</option>
        <option value="<">&lt;</option>
        <option value="=">=</option>
      </select>
      <input type="number" id="alert-threshold" class="inline-edit" placeholder="Valeur" style="flex:1;min-width:0">
      <span id="alert-unit-label" style="font-size:11px;color:var(--txt3);flex-shrink:0;min-width:30px">—</span>
    </div>
    <div class="alert-form-actions">
      <button id="alert-save-btn" class="panel-add-btn">Enregistrer</button>
      <button id="alert-cancel-btn" class="icon-btn"><i class="bi bi-x"></i></button>
    </div>
  `,e.appendChild(i),i.querySelector("#alert-metric").addEventListener("change",a=>{const s=a.target.selectedOptions[0];i.querySelector("#alert-unit-label").textContent=(s==null?void 0:s.dataset.unit)||"—"}),i.querySelector("#alert-save-btn").addEventListener("click",()=>{const s=i.querySelector("#alert-metric").value,o=t.find(l=>l.id===s),r=i.querySelector("#alert-condition").value,g=i.querySelector("#alert-threshold").value;if(!s||!g)return;const p={type:"seuil",label:`Alerte ${(o==null?void 0:o.name)||s}`,metric:(o==null?void 0:o.name)||s,condition:r,threshold:g,unit:(o==null?void 0:o.unit)||""};H({alertes:[...m.alertes||[],p]}),le()}),i.querySelector("#alert-cancel-btn").addEventListener("click",()=>i.remove())}function tt(){document.getElementById("panel-actions").innerHTML=`
    <button class="action-btn"><i class="bi bi-download"></i> Exporter les données</button>
    <button class="action-btn action-btn--danger"><i class="bi bi-archive"></i> Archiver la parcelle</button>
  `}function nt(){const e=ae.find(i=>i.id===T.orgId);if(!(e!=null&&e.lat))return;const n=m.latlngs||T.latlngs,t=L.map("parcel-mini-map",{zoomControl:!1,attributionControl:!1});if(L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(t),Array.isArray(n)&&n.length>=3){const i=L.polygon(n,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(t);t.fitBounds(i.getBounds(),{padding:[10,10]})}else t.setView([e.lat,e.lng],13),L.circleMarker([e.lat,e.lng],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(t)}function it(){const e=document.getElementById("detail-layout"),n=document.getElementById("panel-toggle"),t=n.querySelector("i");n.addEventListener("click",()=>{const i=e.classList.toggle("panel-collapsed");n.title=i?"Afficher le panneau":"Masquer le panneau",t.className=i?"bi bi-chevron-left":"bi bi-chevron-right"})}let ge=!1;function at(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(i=>i.classList.remove("active")),n.classList.add("active");const t=n.dataset.pane;document.getElementById(t).classList.add("active"),t==="tab-donnees"&&!ge&&(ge=!0,nt())})})}const be=[{id:"temp",size:"1x1",title:"Température",icon:"bi-thermometer-half",color:"#e07050"},{id:"pluie",size:"1x1",title:"Pluie (cumul)",icon:"bi-cloud-rain-heavy",color:"#45b7d1"},{id:"humidite",size:"1x1",title:"Humidité air",icon:"bi-droplet-half",color:"#4ecdc4"},{id:"sensors",size:"1x2",title:"Capteurs liés",icon:"bi-broadcast",color:"#0172A4"},{id:"map",size:"1x2",title:"Localisation",icon:"bi-geo-alt",color:"#6080b0"},{id:"vent",size:"1x1",title:"Vent",icon:"bi-wind",color:"#7bc4b0"},{id:"integrations",size:"1x1",title:"Intégrations",icon:"bi-plug",color:"#2d9e5f"},{id:"bilan",size:"3x2",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4"}],Me=()=>`dash-order-parcel-${B}`;let N=null;function st(){const e=document.getElementById("dash-grid");if(!e)return;let n;try{n=JSON.parse(localStorage.getItem(Me()))||null}catch{n=null}n||(n=be.map(i=>i.id));function t(){e.innerHTML="",n.forEach(i=>{const a=be.find(o=>o.id===i);if(!a)return;const s=document.createElement("div");s.className=`dash-block dash-block--${a.size}`,s.dataset.id=i,s.draggable=!0,s.innerHTML=`
        <div class="dash-block-hd" style="color:${a.color}">
          <i class="bi ${a.icon}"></i> ${a.title}
          <span class="dash-drag-handle" title="Déplacer"><i class="bi bi-grip-vertical"></i></span>
        </div>
        <div class="dash-block-body" id="dblock-${i}"></div>
      `,e.appendChild(s)}),ot(),lt(e)}t()}function ot(){const e=z.filter(p=>m.linkedSensorIds.includes(p.id)),n=document.getElementById("dblock-temp");if(n){const l=e.some(h=>(D[h.model]||[]).some(c=>c.id==="temp"))?d(10,28):null;n.innerHTML=l!=null?`<div class="dash-val-big" style="color:#e07050">${l}<span class="dash-val-unit"> °C</span></div>
         <div class="dash-val-trend ${l>18?"up":"down"}"><i class="bi bi-arrow-${l>18?"up":"down"}-right"></i> Dernière mesure</div>
         <div class="dash-val-sub">Aujourd'hui</div>`:'<div class="dash-empty">Aucun capteur de température</div>'}const t=document.getElementById("dblock-pluie");if(t){const l=e.some(h=>(D[h.model]||[]).some(c=>c.id==="pluie"))?d(0,35):null;t.innerHTML=l!=null?`<div class="dash-val-big" style="color:#45b7d1">${l}<span class="dash-val-unit"> mm</span></div>
         <div class="dash-val-sub">Cumul 7 jours</div>`:'<div class="dash-empty">Aucun capteur de pluie</div>'}const i=document.getElementById("dblock-humidite");if(i){const l=e.some(h=>(D[h.model]||[]).some(c=>c.id==="humidite"))?d(40,90):null;i.innerHTML=l!=null?`<div class="dash-val-big" style="color:#4ecdc4">${l}<span class="dash-val-unit"> %</span></div>
         <div class="dash-val-sub">Dernière mesure</div>`:`<div class="dash-empty">Aucun capteur d'humidité</div>`}const a=document.getElementById("dblock-vent");if(a){const l=e.some(h=>(D[h.model]||[]).some(c=>c.id==="vent"))?d(0,35):d(5,20);a.innerHTML=`
      <div class="dash-val-big" style="color:#7bc4b0">${l}<span class="dash-val-unit"> km/h</span></div>
      <div class="dash-val-sub">Vitesse moyenne</div>`}const s=document.getElementById("dblock-sensors");s&&(e.length===0?s.innerHTML='<div class="dash-empty">Aucun capteur lié</div>':s.innerHTML=e.map(p=>`
        <div class="dash-sensor-row">
          <span class="dash-sensor-dot" style="background:${p.event?"var(--warn)":"var(--ok)"}"></span>
          <span class="dash-sensor-model">${p.model}</span>
          <span class="dash-sensor-serial">${p.serial}</span>
        </div>
      `).join(""));const o=document.getElementById("dblock-integrations");if(o){const p=m.integrations||[];o.innerHTML=p.length===0?'<div class="dash-empty">Aucune intégration active</div>':p.map(l=>`
          <span class="dash-integ-pill"><i class="bi bi-plug-fill"></i> ${l}</span>
        `).join("")}const r=document.getElementById("dblock-map");r&&(r.style.padding="0 0 8px 0",r.innerHTML='<div class="dash-map-inner" id="dash-map-container"></div>',requestAnimationFrame(()=>rt()));const g=document.getElementById("dblock-bilan");if(g){const p=R(20,80),l=R(15,60),h=(m.irrigationEvents||[]).reduce((b,E)=>b+(E.mm||0),0),c=Math.max(0,p+h-l),u=p+h-l-c,v=u>=0?"var(--ok)":"var(--err)";g.innerHTML=`
      <div style="display:flex;gap:16px;align-items:flex-start;height:100%">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;flex:1">
          ${U("Pluie",p.toFixed(0),"mm","#45b7d1","bi-cloud-rain-heavy","7 derniers jours")}
          ${U("ETP",l.toFixed(1),"mm","#c090e0","bi-sun","7 derniers jours")}
          ${U("Irrigation",h.toFixed(0),"mm","#0172A4","bi-droplet-fill","Cumulé")}
          ${U("Drainage",c.toFixed(0),"mm","#7bc4b0","bi-arrow-down-circle","Estimé")}
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:0 0 140px;gap:4px;padding:8px;background:var(--bg);border-radius:8px;border:1px solid var(--bdr)">
          <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:var(--txt3)">Bilan net</div>
          <div style="font-size:36px;font-weight:700;color:${v}">${u>=0?"+":""}${u.toFixed(0)}</div>
          <div style="font-size:13px;color:${v};font-weight:600">mm</div>
          <div style="font-size:11px;color:var(--txt3);margin-top:4px">7 derniers jours</div>
        </div>
      </div>
    `}}function U(e,n,t,i,a,s){return`
    <div style="background:var(--bg);border:1px solid var(--bdr);border-radius:8px;padding:10px 12px">
      <div style="font-size:11px;color:${i};font-weight:600;display:flex;align-items:center;gap:5px;margin-bottom:4px">
        <i class="bi ${a}"></i> ${e}
      </div>
      <div style="font-size:22px;font-weight:700;color:var(--txt)">${n} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${t}</span></div>
      <div style="font-size:10px;color:var(--txt3);margin-top:2px">${s}</div>
    </div>
  `}function rt(){const e=document.getElementById("dash-map-container");if(!e||N)return;const n=ae.find(i=>i.id===T.orgId);if(!(n!=null&&n.lat))return;N=L.map(e,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1}),L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(N);const t=m.latlngs||T.latlngs;if(Array.isArray(t)&&t.length>=3){const i=L.polygon(t,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(N);N.fitBounds(i.getBounds(),{padding:[8,8]})}else N.setView([n.lat,n.lng],14),L.circleMarker([n.lat,n.lng],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(N)}function lt(e){let n=null;e.querySelectorAll(".dash-block").forEach(t=>{t.addEventListener("dragstart",i=>{n=t,i.dataTransfer.effectAllowed="move",setTimeout(()=>t.classList.add("dash-drag-ghost"),0)}),t.addEventListener("dragend",()=>{t.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),n=null;const i=[...e.querySelectorAll(".dash-block")].map(a=>a.dataset.id);localStorage.setItem(Me(),JSON.stringify(i))}),t.addEventListener("dragover",i=>{i.preventDefault(),!(!n||t===n)&&(i.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),t.classList.add("dash-drag-over"))}),t.addEventListener("dragleave",()=>{t.classList.remove("dash-drag-over")}),t.addEventListener("drop",i=>{if(i.preventDefault(),!n||t===n)return;t.classList.remove("dash-drag-over");const a=[...e.querySelectorAll(".dash-block")],s=a.indexOf(n),o=a.indexOf(t);s<o?t.after(n):t.before(n)})})}
