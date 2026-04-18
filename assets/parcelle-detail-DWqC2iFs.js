import"./main-QvYlLaZB.js";import{p as we}from"./plots-CEyFXpqF.js";import{s as R}from"./sensors-BafoiuOm.js";import{o as be}from"./orgs-b3kLTQ0f.js";import{m as Z}from"./members-DPSnqfQ_.js";import{u as ge}from"./breadcrumb-DEBQjfiD.js";import{d as ne,e as G}from"./store-MO2UfX1b.js";const Se=new URLSearchParams(window.location.search),D=parseInt(Se.get("id")),A=we.find(e=>e.id===D);function d(e,n){return Math.floor(Math.random()*(n-e+1))+e}function j(e,n){return parseFloat((Math.random()*(n-e)+e).toFixed(2))}const ie=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#c090e0",base:()=>j(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>d(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#80c8e8",base:()=>d(2,16),isCumul:!1}],_={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>d(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>d(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité air",unit:"%",color:"#4ecdc4",base:()=>d(40,90)},{id:"vent",name:"Vent",unit:"km/h",color:"#7bc4b0",base:()=>d(0,35)},{id:"dpv",name:"DPV",unit:"kPa",color:"#a8d8b0",base:()=>j(.1,2.5)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>d(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>d(10,28),cumul:{label:"DJC",unit:"°j"}}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>d(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>d(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité air",unit:"%",color:"#4ecdc4",base:()=>d(40,90)},{id:"dpv",name:"DPV",unit:"kPa",color:"#a8d8b0",base:()=>j(.1,2.5)}],"CHP-15/30":[{id:"sol15",name:"Hum. sol 15 cm",unit:"%vol",color:"#d4a843",base:()=>d(15,45)},{id:"sol30",name:"Hum. sol 30 cm",unit:"%vol",color:"#b88a2c",base:()=>d(15,45)},{id:"tsol",name:"Temp. sol",unit:"°C",color:"#bb8fce",base:()=>d(8,22)}],"CHP-30/60":[{id:"sol30",name:"Hum. sol 30 cm",unit:"%vol",color:"#b88a2c",base:()=>d(15,45)},{id:"sol60",name:"Hum. sol 60 cm",unit:"%vol",color:"#9a7015",base:()=>d(18,42)},{id:"tsol",name:"Temp. sol",unit:"°C",color:"#bb8fce",base:()=>d(8,22)}],"CHP-60/90":[{id:"sol60",name:"Hum. sol 60 cm",unit:"%vol",color:"#9a7015",base:()=>d(18,42)},{id:"sol90",name:"Hum. sol 90 cm",unit:"%vol",color:"#7c5800",base:()=>d(20,40)},{id:"tsol",name:"Temp. sol",unit:"°C",color:"#bb8fce",base:()=>d(8,22)}],"CAPA-30-3":[{id:"tensio30",name:"Tension 30 cm",unit:"cbar",color:"#98d8c8",base:()=>d(10,80)},{id:"tensio60",name:"Tension 60 cm",unit:"cbar",color:"#78b8a8",base:()=>d(10,80)},{id:"tensio90",name:"Tension 90 cm",unit:"cbar",color:"#589888",base:()=>d(10,80)}],"CAPA-60-6":[{id:"tensio30",name:"Tension 30 cm",unit:"cbar",color:"#98d8c8",base:()=>d(10,80)},{id:"tensio60",name:"Tension 60 cm",unit:"cbar",color:"#78b8a8",base:()=>d(10,80)},{id:"tensio90",name:"Tension 90 cm",unit:"cbar",color:"#589888",base:()=>d(10,80)},{id:"tensio120",name:"Tension 120 cm",unit:"cbar",color:"#387868",base:()=>d(10,80)},{id:"tensio150",name:"Tension 150 cm",unit:"cbar",color:"#185848",base:()=>d(10,80)},{id:"tensio180",name:"Tension 180 cm",unit:"cbar",color:"#003828",base:()=>d(10,80)}],T_MINI:[{id:"tmin",name:"Temp. min",unit:"°C",color:"#90b0e0",base:()=>d(-2,15),cumul:{label:"Heures de froid",unit:"h"}}],LWS:[{id:"humec",name:"Humectation feuille",unit:"h",color:"#78d8a0",base:()=>d(0,12)}],T_GEL:[{id:"tgel",name:"Temp. feuille",unit:"°C",color:"#a0d8a0",base:()=>d(-3,12),cumul:{label:"Heures de gel",unit:"h"}}],W:[{id:"vent",name:"Vent – vitesse",unit:"km/h",color:"#7bc4b0",base:()=>d(0,40)},{id:"rafales",name:"Vent – rafales",unit:"km/h",color:"#5aa490",base:()=>d(5,60)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>j(.1,3)},{id:"tsol",name:"Temp. sol",unit:"°C",color:"#bb8fce",base:()=>d(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>d(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}]},ve={id:"irrigation_manual",name:"Irrigations",unit:"mm",color:"#0172A4",chartType:"bar",isCumul:!0,cumul:{label:"Cumul irrigations",unit:"mm"},base:()=>0},ye=["CAPA-30-3","CAPA-60-6"],Me=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Millésime","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let m={};function Ie(){const e=ne(D);if(m={...A,...e},!m.linkedSensorIds){const n=R.filter(t=>t.parcelId===D).map(t=>t.id);m.linkedSensorIds=e.linkedSensorIds??n}m.integrations||(m.integrations=[...A.integrations||[]]),m.alertes||(m.alertes=[]),m.irrigationEvents||(m.irrigationEvents=[])}function H(e){Object.assign(m,e),G(D,e)}let W="7d",U=null,Y=null;function Le(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return W==="custom"&&U&&Y?Math.max(60,Math.round((Y-U)/6e4)):e[W]??10080}function xe(){var n;const e=((n=document.getElementById("time-step"))==null?void 0:n.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Ce(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function Te(){const e=Le(),n=xe();return Math.max(2,Math.min(200,Math.floor(e/n)))}document.addEventListener("DOMContentLoaded",()=>{if(!A){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}Ie(),ge(m.name||A.name,{label:"Parcelles",href:"parcelles.html"}),ae(),N(),Ge(),tt(),Ve(),nt(),it()});function ke(){const e=[];return R.filter(t=>m.linkedSensorIds.includes(t.id)).forEach(t=>{const i=_[t.model];i&&i.forEach(a=>e.push(a))}),e.push(ve),ie.forEach(t=>e.push(t)),e}function ae(){const e=document.getElementById("weather-strip");e.innerHTML="",ke().forEach(n=>{const t=n.id==="irrigation_manual"?m.irrigationEvents.reduce((o,r)=>o+(r.mm||0),0):n.base(),i=typeof t=="number"?Number.isInteger(t)?t:t.toFixed(1):"—",a=document.createElement("div");a.className="latest-card",a.style.borderTop=`3px solid ${n.color}`,a.innerHTML=`
      <div class="latest-card-name" style="color:${n.color}">${n.name}</div>
      <div class="latest-card-value">${i}<span class="latest-card-unit"> ${n.unit}</span></div>
    `,e.appendChild(a)})}function N(){const e=document.getElementById("charts-container");e.innerHTML="",R.filter(i=>m.linkedSensorIds.includes(i.id)).forEach(i=>{const a=_[i.model];if(!a)return;const o=document.createElement("div");o.className="chart-group-header",o.innerHTML=`
      <i class="bi bi-broadcast" style="color:var(--pri)"></i>
      <strong>${i.model}</strong>
      <span class="chart-group-serial">${i.serial}</span>
      ${i.event?`<span class="detail-badge detail-badge--err"><i class="bi bi-exclamation-triangle-fill"></i> ${i.event}</span>`:""}
    `,e.appendChild(o),a.forEach(r=>re(e,r))}),Oe(e);const t=document.createElement("div");t.className="chart-group-header",t.innerHTML='<i class="bi bi-cloud-sun" style="color:var(--pri)"></i> <strong>Données météo</strong> <span class="chart-group-serial">Station de référence</span>',e.appendChild(t),ie.forEach(i=>re(e,i)),Be(),ze()}function re(e,n){const t=n.base(),i=document.createElement("div");i.className="chart-card",i.dataset.base=t,i.dataset.color=n.color,i.dataset.cumul=n.isCumul?"1":"",i.dataset.chartType=n.chartType||"line",i.dataset.metricId=n.id,i.dataset.metricName=n.name,i.dataset.metricUnit=n.unit;const a=n.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${n.cumul.label}</span><span class="chart-cumul-value">${We(n)} ${n.cumul.unit}</span></div>`:"";i.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${n.color}">${n.name}</span>
      <span class="chart-card-unit">${n.unit}</span>
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${a}
  `,e.appendChild(i)}let z=null;function Ae(){return z||(z=document.createElement("div"),z.className="chart-tooltip",document.body.appendChild(z)),z}function He(e,n){return n==="temp"||n==="temperature"?["#6eb4d4","#e07050"]:n==="tmin"?["#aecce8","#5580c0"]:n==="temp_rosee"?["#a0d0f0","#4090c0"]:[De(e,.55),e]}function De(e,n){const t=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),o=Math.round(t+(255-t)*n),r=Math.round(i+(255-i)*n),s=Math.round(a+(255-a)*n);return`#${o.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`}function Fe(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let n=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let t=0;t<e.length-1;t++){const i=e[Math.max(t-1,0)],a=e[t],o=e[t+1],r=e[Math.min(t+2,e.length-1)],s=a.x+(o.x-i.x)/6,h=a.y+(o.y-i.y)/6,$=o.x-(r.x-a.x)/6,c=o.y-(r.y-a.y)/6;n+=` C${s.toFixed(1)},${h.toFixed(1)} ${$.toFixed(1)},${c.toFixed(1)} ${o.x.toFixed(1)},${o.y.toFixed(1)}`}return n}function $e(e){const n=new Date(Date.now()-e*6e4);return e<1440?`${String(n.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][n.getMonth()]:`${String(n.getDate()).padStart(2,"0")}/${String(n.getMonth()+1).padStart(2,"0")}`}function se(e){const n=Date.now()-e*6e4;return new Date(n).getHours()+new Date(n).getMinutes()/60}function Pe(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function le(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function ce(e,n,t,i=.15){const a=se(t),o=le(a),r=Pe(a),s=()=>1+(Math.random()-.5)*2*i;switch(e){case"temp":return(n-6+o*12)*s();case"tmin":return(n-4+o*8)*s();case"temp_rosee":{const h=n-6+o*12;return Math.min(h-1,n-8+o*6)*s()}case"tsol":{const h=se(t+120);return(n-3+le(h)*6)*s()}case"humidite":return Math.min(100,Math.max(20,(n+(1-o)*25-o*15)*s()));case"rayonnement":return Math.max(0,r*n*1.3*s());case"etp":return Math.max(0,r*n*1.5*s());case"dpv":return Math.max(0,(r*n*1.4+.05)*s());case"humec":return Math.max(0,n*Math.max(0,.8-r*1.2)*s());case"pluie":return Math.random()<.12?n*Math.random()*2:0;case"vent":case"rafales":return Math.max(0,n*(.6+r*.8)*s());default:return Math.max(0,n*s())}}function Be(){const e=Te(),n=xe();document.querySelectorAll(".chart-card").forEach(t=>{const i=parseFloat(t.dataset.base),a=t.dataset.color,o=t.dataset.cumul==="1",r=t.dataset.chartType||"line",s=t.dataset.metricId||"",h=t.dataset.metricName||"",$=t.dataset.metricUnit||"";t.dataset.isIrrigation?Ne(t.querySelector(".chart-svg"),a,e,n):qe(t.querySelector(".chart-svg"),i,a,e,n,o,r,s,h,$)})}function qe(e,n,t,i,a,o,r="line",s="",h="",$=""){const l={t:14,r:10,b:28,l:46},u=600-l.l-l.r,f=180-l.t-l.b,b=Math.max(1,Math.round(a/15)),M=Array.from({length:i},(v,y)=>{const S=(i-1-y)*a;if(o){let P=0;for(let B=0;B<b;B++)P+=ce(s,n/b,S+B*(a/b));return P}else return ce(s,n,S)}),p=r==="bar"?0:Math.min(...M),E=Math.max(...M),w=E-p||1,C=v=>l.l+v/Math.max(i-1,1)*u,F=v=>l.t+f-(v-p)/w*f,I=`grad_${Math.random().toString(36).slice(2)}`,[T,k]=He(t,s);let x=`<defs>
    <linearGradient id="${I}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${T}"/>
      <stop offset="100%" stop-color="${k}"/>
    </linearGradient>
    <clipPath id="clip_${I}">
      <rect x="${l.l}" y="${l.t}" width="${u}" height="${f}"/>
    </clipPath>
  </defs>`;for(let v=0;v<=4;v++){const y=l.t+v/4*f,S=E-v/4*w,P=Math.abs(S)>=100?S.toFixed(0):Math.abs(S)>=10?S.toFixed(1):S.toFixed(2);x+=`<line x1="${l.l}" y1="${y.toFixed(1)}" x2="${600-l.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,x+=`<text x="${l.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${P}</text>`}const O=Math.max(1,Math.floor(i/6));for(let v=0;v<i;v+=O){const y=C(v).toFixed(1),S=(i-v)*a;x+=`<line x1="${y}" y1="${l.t}" x2="${y}" y2="${l.t+f}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,x+=`<text x="${y}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${$e(S)}</text>`}if(r==="bar"){const v=Math.max(2,u/i*.65);M.forEach((y,S)=>{if(y<=0)return;const P=C(S),B=F(y),J=l.t+f-B;x+=`<rect x="${(P-v/2).toFixed(1)}" y="${B.toFixed(1)}" width="${v.toFixed(1)}" height="${J.toFixed(1)}" fill="url(#${I})" opacity="0.9" rx="1"/>`})}else{const v=M.map((P,B)=>({x:C(B),y:F(P)})),y=Fe(v),S=y+` L${C(i-1).toFixed(1)},${l.t+f} L${l.l.toFixed(1)},${l.t+f} Z`;x+=`<path d="${S}" fill="${k}" opacity="0.07" clip-path="url(#clip_${I})"/>`,x+=`<path d="${y}" fill="none" stroke="url(#${I})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${I})"/>`}x+=`<rect class="chart-hover-rect" x="${l.l}" y="${l.t}" width="${u}" height="${f}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=x,Re(e,M,C,F,p,E,i,a,h,$,t,l,600)}function Re(e,n,t,i,a,o,r,s,h,$,c,g,l,u){const f=Ae(),b=e.querySelector(".chart-hover-rect");if(!b)return;const p=document.createElementNS("http://www.w3.org/2000/svg","circle");p.setAttribute("r","4"),p.setAttribute("fill",c),p.setAttribute("stroke","#fff"),p.setAttribute("stroke-width","1.5"),p.style.display="none",p.style.pointerEvents="none",e.appendChild(p),b.addEventListener("mousemove",E=>{const w=e.getBoundingClientRect(),C=l/w.width,F=(E.clientX-w.left)*C,I=l-g.l-g.r,T=Math.max(0,Math.min(1,(F-g.l)/I)),k=Math.round(T*(r-1));if(k<0||k>=n.length)return;const x=n[k],O=t(k),v=i(x);p.setAttribute("cx",O),p.setAttribute("cy",v),p.style.display="";const y=(r-k)*s,S=$e(y),P=Math.abs(x)>=100?x.toFixed(1):x.toFixed(2);f.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${h}</div>
      <div class="chart-tooltip-val" style="color:${c}">${P} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${$}</span></div>
      <div class="chart-tooltip-ts">${S}</div>
    `,f.style.display="block";const B=E.clientX+12,J=E.clientY-10;f.style.left=`${Math.min(B,window.innerWidth-160)}px`,f.style.top=`${J}px`}),b.addEventListener("mouseleave",()=>{f.style.display="none",p.style.display="none"})}function Ne(e,n,t,i){const r={t:12,r:8,b:28,l:44},s=600-r.l-r.r,h=180-r.t-r.b,$=Date.now(),c=t*i*6e4,g=Array(t).fill(0);m.irrigationEvents.forEach(p=>{const E=new Date(p.isoDate).getTime(),w=$-E;if(w<0||w>c)return;const C=Math.floor((c-w)/(i*6e4));C>=0&&C<t&&(g[C]+=p.mm||0)});const l=Math.max(...g,1),u=p=>r.l+p/Math.max(t-1,1)*s,f=p=>r.t+h-p/l*h;let b="";for(let p=0;p<=4;p++){const E=r.t+p/4*h,w=(l-p/4*l).toFixed(1);b+=`<line x1="${r.l}" y1="${E}" x2="${600-r.r}" y2="${E}" stroke="var(--bdr2)" stroke-width="1"/>`,b+=`<text x="${r.l-4}" y="${E+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${w}</text>`}const M=Math.max(4,s/t*.65);g.forEach((p,E)=>{if(p<=0)return;const w=u(E),C=f(p),F=r.t+h-C;b+=`<rect x="${(w-M/2).toFixed(1)}" y="${C.toFixed(1)}" width="${M.toFixed(1)}" height="${F.toFixed(1)}" fill="${n}" opacity="0.85" rx="1"/>`}),e.innerHTML=b}function Oe(e){const n=ve,i=(m.irrigationEvents||[]).reduce((o,r)=>o+(r.mm||0),0),a=document.createElement("div");a.className="chart-card",a.dataset.color=n.color,a.dataset.chartType="bar",a.dataset.isIrrigation="1",a.innerHTML=`
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
  `,e.appendChild(a),_e(a),a.querySelector(".irrig-add-btn").addEventListener("click",()=>{je(a)})}function _e(e){const n=e.querySelector(".irrig-events-list"),t=m.irrigationEvents||[],i=new Date,a=i.getFullYear(),o=i.getMonth(),r=i.toLocaleString("fr-FR",{month:"long",year:"numeric"}),s={};t.forEach((u,f)=>{const b=new Date(u.isoDate);if(b.getFullYear()===a&&b.getMonth()===o){const M=b.getDate();s[M]||(s[M]=[]),s[M].push(f)}});const $=(new Date(a,o,1).getDay()+6)%7,c=new Date(a,o+1,0).getDate(),g=["L","M","M","J","V","S","D"].map(u=>`<div class="irrig-cal-hd">${u}</div>`).join("");let l=Array($).fill('<div class="irrig-cal-cell irrig-cal-empty"></div>').join("");for(let u=1;u<=c;u++){const f=s[u],b=f&&f.length>0,M=b?f.reduce((p,E)=>{var w;return p+(((w=t[E])==null?void 0:w.mm)||0)},0):0;l+=`<div class="irrig-cal-cell${b?" irrig-cal-has-event":""}" data-day="${u}" title="${b?M.toFixed(0)+" mm":""}">
      <span class="irrig-cal-day">${u}</span>
      ${b?'<span class="irrig-cal-dot" style="background:#0172A4"></span>':""}
    </div>`}n.innerHTML=`
    <div class="irrig-calendar">
      <div class="irrig-cal-month">${r}</div>
      <div class="irrig-cal-grid">${g}${l}</div>
    </div>
    <div class="irrig-event-rows">
      ${t.length===0?'<span class="panel-empty" style="font-size:12px">Aucune irrigation saisie</span>':t.map((u,f)=>`
          <div class="integ-pill-row" style="margin-top:3px">
            <span class="integ-pill"><i class="bi bi-droplet-fill" style="color:#0172A4"></i> ${u.mm} mm — ${u.isoDate.replace("T"," ").slice(0,16)}</span>
            <button class="icon-btn remove-irrig-btn" data-idx="${f}" title="Supprimer"><i class="bi bi-x-lg"></i></button>
          </div>
        `).join("")}
    </div>
  `,n.querySelectorAll(".remove-irrig-btn").forEach(u=>{u.addEventListener("click",()=>{const f=parseInt(u.dataset.idx),b=[...m.irrigationEvents];b.splice(f,1),H({irrigationEvents:b}),N(),ae()})})}function je(e){if(e.querySelector(".irrig-form"))return;const n=new Date().toISOString().slice(0,16),t=document.createElement("div");t.className="irrig-form alert-create-form",t.style.marginTop="8px",t.innerHTML=`
    <div class="alert-form-row">
      <input type="number" id="irrig-mm" class="inline-edit" placeholder="mm" min="0" step="0.1" style="width:70px">
      <input type="datetime-local" id="irrig-date" class="inline-edit" value="${n}" style="width:190px">
    </div>
    <div class="alert-form-actions">
      <button id="irrig-save" class="panel-add-btn">Enregistrer</button>
      <button id="irrig-cancel" class="icon-btn"><i class="bi bi-x"></i></button>
    </div>
  `,e.appendChild(t),t.querySelector("#irrig-save").addEventListener("click",()=>{const i=parseFloat(t.querySelector("#irrig-mm").value),a=t.querySelector("#irrig-date").value;if(!i||i<=0||!a)return;const o=[...m.irrigationEvents||[],{isoDate:a,mm:i}];o.sort((r,s)=>r.isoDate.localeCompare(s.isoDate)),H({irrigationEvents:o}),N(),ae()}),t.querySelector("#irrig-cancel").addEventListener("click",()=>t.remove())}function ze(){const e=document.getElementById("charts-container"),n=R.filter(I=>m.linkedSensorIds.includes(I.id));let t=0;n.forEach(I=>{(_[I.model]||[]).some(k=>k.id==="pluie")&&(t=d(20,80))});const i=j(15,60),a=(m.irrigationEvents||[]).reduce((I,T)=>I+(T.mm||0),0),o=Math.max(0,t+a-i),r=t+a-i-o,s=document.createElement("div");s.className="cumul-summary";const h=480,$=240,c=100,g=180,l=140,u=340;function f(I,T,k,x,O,v){const y=I;return`
      <line x1="${y}" y1="${k}" x2="${y}" y2="${T+10}" stroke="${x}" stroke-width="3" marker-end="url(#ah-${x.replace("#","")})"/>
      <text x="${y}" y="${T-6}" text-anchor="middle" fill="${x}" font-size="12" font-weight="600">${O}</text>
      <text x="${y}" y="${T-20}" text-anchor="middle" fill="${x}" font-size="13" font-weight="700">${v} mm</text>
    `}function b(I,T,k,x,O,v,y){const S=I;return`
      <line x1="${S}" y1="${T}" x2="${S}" y2="${k-10}" stroke="${x}" stroke-width="3" marker-end="url(#ad-${x.replace("#","")})"/>
      <text x="${S}" y="${y??T-10}" text-anchor="middle" fill="${x}" font-size="12" font-weight="600">${O}</text>
      <text x="${S}" y="${(y??T-10)-14}" text-anchor="middle" fill="${x}" font-size="13" font-weight="700">${v} mm</text>
    `}function M(I,T){return`<marker id="${I}" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="${T}"/>
    </marker>`}const p="#c090e0",E="#45b7d1",w="#0172A4",C="#7bc4b0",F=r>=0?"#2d9e5f":"#e07050";s.innerHTML=`
    <div class="water-balance-wrap">
      <div class="water-balance-title">Bilan hydrique — période sélectionnée</div>
      <svg viewBox="0 0 ${h} ${$}" width="100%" style="max-width:520px;display:block;margin:0 auto">
        <defs>
          ${M("ah-"+p.replace("#",""),p)}
          ${M("ad-"+E.replace("#",""),E)}
          ${M("ad-"+w.replace("#",""),w)}
          ${M("ad-"+C.replace("#",""),C)}
        </defs>

        <!-- Soil block -->
        <rect x="${l}" y="${c}" width="${u-l}" height="${g-c}"
              rx="6" fill="#d4a85855" stroke="#a07030" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="${(l+u)/2}" y="${(c+g)/2-6}" text-anchor="middle"
              fill="#7a5020" font-size="11">Sol</text>
        <text x="${(l+u)/2}" y="${(c+g)/2+10}" text-anchor="middle"
              fill="${F}" font-size="14" font-weight="700">
          ${r>=0?"+":""}${r.toFixed(0)} mm
        </text>
        <text x="${(l+u)/2}" y="${(c+g)/2+24}" text-anchor="middle"
              fill="${F}" font-size="10">bilan net</text>

        <!-- ETP arrow up from soil surface -->
        ${f(240,18,c,p,"ETP",i.toFixed(1))}

        <!-- Pluie arrow down -->
        ${b(160,10,c,E,"Pluie",t.toFixed(0),22)}

        <!-- Irrigation arrow down (slightly right of rain) -->
        ${b(320,10,c,w,"Irrigation",a.toFixed(0),22)}

        <!-- Drainage arrow down from soil bottom -->
        ${b(240,g,$-10,C,"Drainage",o.toFixed(0),g+20)}
      </svg>
      <div class="water-balance-legend">
        <span style="color:${E}">&#x25BC; Pluie ${t.toFixed(0)} mm</span>
        <span style="color:${w}">&#x25BC; Irrigation ${a.toFixed(0)} mm</span>
        <span style="color:${p}">&#x25B2; ETP ${i.toFixed(1)} mm</span>
        <span style="color:${C}">&#x25BC; Drainage ${o.toFixed(0)} mm</span>
      </div>
    </div>
  `,e.appendChild(s)}function We(e){const t={pluie:()=>d(20,120),etp:()=>j(15,80),rayonnement:()=>d(500,3e3)}[e.id];return t?t():d(10,100)}function Ve(){const e=document.getElementById("period-presets"),n=document.getElementById("custom-date-row"),t=document.getElementById("time-step"),i=new Date,a=new Date(i-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=i.toISOString().slice(0,10),e.addEventListener("click",o=>{const r=o.target.closest(".period-preset-btn");if(r)if(e.querySelectorAll(".period-preset-btn").forEach(s=>s.classList.remove("active")),r.classList.add("active"),W=r.dataset.period,W==="custom")n.style.display="flex";else{n.style.display="none";const s=document.getElementById("time-step");s&&(s.value=Ce(W)),N()}}),document.getElementById("date-from").addEventListener("change",de),document.getElementById("date-to").addEventListener("change",de),t.addEventListener("change",N)}function de(){const e=document.getElementById("date-from").value,n=document.getElementById("date-to").value;e&&n&&(U=new Date(e),Y=new Date(n+"T23:59:59"),U<Y&&N())}function Ge(){const e=be.find(n=>n.id===A.orgId);Ue(e),Ye(e),Q(),ee(),te(),oe(),Qe()}const X=["Argilo-limoneux","Argileux","Limoneux","Sablo-limoneux","Sableux","Limon argileux","Limon fin","Argile sableux","Limono-argileux fin","Sable limoneux","Argile limoneuse"],K=["Goutte à goutte","Aspersion","Submersion","Enrouleur","Pivot","Rampe","Micro aspersion","Couverture intégrale","Goutte à goutte enterré","Gravitaire","Non irrigué","Pas d'irrigation"];function Ue(e){const n=document.getElementById("panel-ident"),t=m,i=t.texture||X[t.id%X.length],a=t.irrigation||K[t.id%K.length];n.innerHTML=`
    ${ue("Nom",t.name||"—","name")}
    ${ue("Culture",t.crop||"—","crop")}
    ${pe("Surface",(t.area?`${t.area} ha`:"—")+' <span class="field-computed">(calculé)</span>')}
    ${me("Texture sol",i,"texture",X)}
    ${me("Irrigation",a,"irrigation",K,"integ-pill")}
    ${pe("Exploitation",e?e.name:"—")}
  `,V(n,"name",t.name||"",o=>{H({name:o}),ge(o,{label:"Parcelles",href:"parcelles.html"})}),V(n,"crop",t.crop||"",o=>H({crop:o})),V(n,"texture",i,o=>H({texture:o})),V(n,"irrigation",a,o=>H({irrigation:o}))}function ue(e,n,t,i){return`
    <div class="panel-row editable-row" data-field="${t}">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val" data-val></span>
      <button class="edit-field-btn" title="Modifier"><i class="bi bi-pencil"></i></button>
    </div>`}function me(e,n,t,i,a){const o=a?` data-display-class="${a}"`:"";return`
    <div class="panel-row editable-row" data-field="${t}" data-options="${encodeURIComponent(JSON.stringify(i))}"${o}>
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val" data-val></span>
      <button class="edit-field-btn" title="Modifier"><i class="bi bi-pencil"></i></button>
    </div>`}function pe(e,n){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${n}</span>
    </div>`}function V(e,n,t,i){const a=e.querySelector(`[data-field="${n}"]`);if(!a)return;const o=a.querySelector("[data-val]"),r=a.querySelector(".edit-field-btn"),s=a.dataset.options?JSON.parse(decodeURIComponent(a.dataset.options)):null,h=a.dataset.displayClass||null,$=c=>{h?o.innerHTML=`<span class="${h}">${c}</span>`:o.textContent=c};$(t),r.addEventListener("click",()=>{if(a.classList.contains("editing"))return;a.classList.add("editing"),r.style.display="none";let c;s?(c=document.createElement("select"),c.className="inline-edit",s.forEach(l=>{const u=document.createElement("option");u.value=l,u.textContent=l,l===t&&(u.selected=!0),c.appendChild(u)})):(c=document.createElement("input"),c.type="text",c.className="inline-edit",c.value=t),o.textContent="",o.appendChild(c),c.focus();const g=()=>{var u;const l=((u=c.value)==null?void 0:u.trim())||t;t=l,i(l),$(l),a.classList.remove("editing"),r.style.display=""};c.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),g()),l.key==="Escape"&&($(t),a.classList.remove("editing"),r.style.display="")}),c.addEventListener("blur",g)})}function Ye(e){const n=document.getElementById("panel-geoloc"),t=m.latlngs||A.latlngs,i=Array.isArray(t)&&t.length>=3,a=m.ville||A.ville||(e==null?void 0:e.ville)||"—",o=A.departement||(e==null?void 0:e.departement),r=m.lat??A.lat??(e==null?void 0:e.lat),s=m.lng??A.lng??(e==null?void 0:e.lng);n.innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${o?` (${o})`:""}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${r!=null?r.toFixed(4):"—"}, ${s!=null?s.toFixed(4):"—"}</span>
    </div>
    <div style="padding:8px 0 4px">
      <a href="parcelle-modifier-contour.html?id=${D}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${i?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function Je(){const e=new Set;return R.filter(t=>m.linkedSensorIds.includes(t.id)).forEach(t=>{const i=_[t.model]||[];ye.includes(t.model)||i.forEach(a=>e.add(a.id))}),e}function Q(){const e=document.getElementById("panel-sensors"),n=R.filter(o=>m.linkedSensorIds.includes(o.id)),t=R.filter(o=>o.orgId===A.orgId&&!m.linkedSensorIds.includes(o.id));let i="";n.length===0?i+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>':i+=n.map(o=>`
      <div class="sensor-linked-row">
        <a href="capteur-detail.html?id=${o.id}" class="sensor-link-model">${o.model}</a>
        <span class="sensor-link-serial">${o.serial}</span>
        <button class="remove-sensor-btn icon-btn" data-id="${o.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),t.length>0&&(i+=`
      <div class="panel-add-row">
        <select id="add-sensor-select" class="panel-add-select">
          <option value="">Ajouter un capteur…</option>
          ${t.map(o=>`<option value="${o.id}">${o.model} — ${o.serial}</option>`).join("")}
        </select>
        <button id="add-sensor-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `),e.innerHTML=i,e.querySelectorAll(".remove-sensor-btn").forEach(o=>{o.addEventListener("click",()=>{const r=parseInt(o.dataset.id);H({linkedSensorIds:m.linkedSensorIds.filter(s=>s!==r)}),Q(),N()})});const a=document.getElementById("add-sensor-btn");a&&a.addEventListener("click",()=>{const o=document.getElementById("add-sensor-select"),r=parseInt(o.value);if(!r)return;const s=R.find(h=>h.id===r);if(s){if(ye.includes(s.model)){const h=prompt(`Profondeur(s) d'installation du ${s.model} (ex : 30, 60, 90 cm) :`,"30, 60, 90");if(h===null)return;const c=ne(D).tensioDepths||{};c[r]=h,G(D,{tensioDepths:c})}else{const h=Je(),c=(_[s.model]||[]).map(g=>g.id).filter(g=>h.has(g));if(c.length>0){const g=c.map(u=>{const f=Object.values(_).flat().find(b=>b.id===u);return(f==null?void 0:f.name)||u});if(!confirm(`Attention : ce capteur (${s.model}) mesure des métriques déjà fournies par un autre capteur :
• ${g.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}H({linkedSensorIds:[...m.linkedSensorIds,r]}),Q(),N()}})}function ee(){var a;const e=document.getElementById("panel-integrations"),n=m.integrations||[],t=Me.filter(o=>!n.includes(o));let i="";n.length===0?i+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':i+=n.map(o=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${o}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(o)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),t.length>0&&(i+=`
      <div class="panel-add-row">
        <select id="add-integ-select" class="panel-add-select">
          <option value="">Ajouter une intégration…</option>
          ${t.map(o=>`<option value="${encodeURIComponent(o)}">${o}</option>`).join("")}
        </select>
        <button id="add-integ-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `),e.innerHTML=i,e.querySelectorAll(".remove-integ-btn").forEach(o=>{o.addEventListener("click",()=>{const r=decodeURIComponent(o.dataset.name);H({integrations:m.integrations.filter(s=>s!==r)}),ee()})}),(a=document.getElementById("add-integ-btn"))==null||a.addEventListener("click",()=>{const o=document.getElementById("add-integ-select"),r=decodeURIComponent(o.value);r&&(H({integrations:[...m.integrations,r]}),ee())})}let q=null;function Xe(){if(q!==null)return;q=ne(D).linkedMemberIds??Z.filter(n=>{var t;return(t=n.parcelIds)==null?void 0:t.includes(D)}).map(n=>n.id)}function te(){Xe();const e=document.getElementById("panel-membres"),n=Z.filter(i=>q.includes(i.id));n.length?e.innerHTML=n.map(i=>`
      <div class="member-row">
        <div>
          <span class="member-name">${i.prenom} ${i.nom}</span>
          <span class="member-role-badge">${i.role}</span>
        </div>
        <button class="remove-membre-btn icon-btn" data-id="${i.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""):e.innerHTML='<p class="panel-empty">Aucun membre associé.</p>';const t=document.getElementById("add-membre-select");t&&(t.innerHTML='<option value="">Ajouter un membre…</option>',Z.filter(i=>!q.includes(i.id)).forEach(i=>{const a=document.createElement("option");a.value=i.id,a.textContent=`${i.prenom} ${i.nom} (${i.role})`,t.appendChild(a)})),e.querySelectorAll(".remove-membre-btn").forEach(i=>{i.addEventListener("click",()=>{q=q.filter(a=>a!==parseInt(i.dataset.id)),G(D,{linkedMemberIds:q}),te()})}),document.getElementById("add-membre-btn").onclick=()=>{const i=parseInt(document.getElementById("add-membre-select").value);!i||q.includes(i)||(q.push(i),G(D,{linkedMemberIds:q}),te())}}function oe(){const e=document.getElementById("panel-alertes"),n=m.alertes||[],t={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let i="";n.length===0?i+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':i+=n.map((a,o)=>`
      <div class="alert-item">
        <i class="bi ${t[a.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition||""} ${a.threshold||""} ${a.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${o}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),i+='<button id="create-alert-btn" class="action-btn" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=i,e.querySelectorAll(".remove-alert-btn").forEach(a=>{a.addEventListener("click",()=>{const o=parseInt(a.dataset.idx),r=[...m.alertes];r.splice(o,1),H({alertes:r}),oe()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{Ze(e)})}function Ke(){const e=[];return R.filter(t=>m.linkedSensorIds.includes(t.id)).forEach(t=>{(_[t.model]||[]).forEach(a=>{e.find(o=>o.id===a.id)||e.push({id:a.id,name:a.name,unit:a.unit})})}),ie.forEach(t=>{e.find(i=>i.id===t.id)||e.push({id:t.id,name:t.name,unit:t.unit})}),e}function Ze(e){if(e.querySelector(".alert-create-form"))return;const t=Ke(),i=document.createElement("div");i.className="alert-create-form",i.innerHTML=`
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
  `,e.appendChild(i),i.querySelector("#alert-metric").addEventListener("change",a=>{const o=a.target.selectedOptions[0];i.querySelector("#alert-unit-label").textContent=(o==null?void 0:o.dataset.unit)||"—"}),i.querySelector("#alert-save-btn").addEventListener("click",()=>{const o=i.querySelector("#alert-metric").value,r=t.find(c=>c.id===o),s=i.querySelector("#alert-condition").value,h=i.querySelector("#alert-threshold").value;if(!o||!h)return;const $={type:"seuil",label:`Alerte ${(r==null?void 0:r.name)||o}`,metric:(r==null?void 0:r.name)||o,condition:s,threshold:h,unit:(r==null?void 0:r.unit)||""};H({alertes:[...m.alertes||[],$]}),oe()}),i.querySelector("#alert-cancel-btn").addEventListener("click",()=>i.remove())}function Qe(){document.getElementById("panel-actions").innerHTML=`
    <button class="action-btn"><i class="bi bi-download"></i> Exporter les données</button>
    <button class="action-btn action-btn--danger"><i class="bi bi-archive"></i> Archiver la parcelle</button>
  `}function et(){const e=be.find(i=>i.id===A.orgId);if(!(e!=null&&e.lat))return;const n=m.latlngs||A.latlngs,t=L.map("parcel-mini-map",{zoomControl:!1,attributionControl:!1});if(L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(t),Array.isArray(n)&&n.length>=3){const i=L.polygon(n,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(t);t.fitBounds(i.getBounds(),{padding:[10,10]})}else t.setView([e.lat,e.lng],13),L.circleMarker([e.lat,e.lng],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(t)}function tt(){const e=document.getElementById("detail-layout"),n=document.getElementById("panel-toggle"),t=n.querySelector("i");n.addEventListener("click",()=>{const i=e.classList.toggle("panel-collapsed");n.title=i?"Afficher le panneau":"Masquer le panneau",t.className=i?"bi bi-chevron-left":"bi bi-chevron-right"})}let fe=!1;function nt(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(i=>i.classList.remove("active")),n.classList.add("active");const t=n.dataset.pane;document.getElementById(t).classList.add("active"),t==="tab-donnees"&&!fe&&(fe=!0,et())})})}const he=[{id:"temp",size:"1x1",title:"Température",icon:"bi-thermometer-half",color:"#e07050"},{id:"pluie",size:"1x1",title:"Pluie (cumul)",icon:"bi-cloud-rain-heavy",color:"#45b7d1"},{id:"humidite",size:"1x1",title:"Humidité air",icon:"bi-droplet-half",color:"#4ecdc4"},{id:"sensors",size:"1x2",title:"Capteurs liés",icon:"bi-broadcast",color:"#0172A4"},{id:"map",size:"1x2",title:"Localisation",icon:"bi-geo-alt",color:"#6080b0"},{id:"vent",size:"1x1",title:"Vent",icon:"bi-wind",color:"#7bc4b0"},{id:"integrations",size:"1x1",title:"Intégrations",icon:"bi-plug",color:"#2d9e5f"},{id:"bilan",size:"3x2",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4"}],Ee=()=>`dash-order-parcel-${D}`;function it(){const e=document.getElementById("dash-grid");if(!e)return;let n;try{n=JSON.parse(localStorage.getItem(Ee()))||null}catch{n=null}n||(n=he.map(t=>t.id)),e.innerHTML="",n.forEach(t=>{const i=he.find(o=>o.id===t);if(!i)return;const a=document.createElement("div");a.className=`dash-block dash-block--${i.size}`,a.dataset.id=t,a.draggable=!0,a.innerHTML='<span class="dash-drag-handle" title="Déplacer"><i class="bi bi-grip-vertical"></i></span>',e.appendChild(a)}),at(e)}function at(e){let n=null;e.querySelectorAll(".dash-block").forEach(t=>{t.addEventListener("dragstart",i=>{n=t,i.dataTransfer.effectAllowed="move",setTimeout(()=>t.classList.add("dash-drag-ghost"),0)}),t.addEventListener("dragend",()=>{t.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),n=null;const i=[...e.querySelectorAll(".dash-block")].map(a=>a.dataset.id);localStorage.setItem(Ee(),JSON.stringify(i))}),t.addEventListener("dragover",i=>{i.preventDefault(),!(!n||t===n)&&(i.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),t.classList.add("dash-drag-over"))}),t.addEventListener("dragleave",()=>{t.classList.remove("dash-drag-over")}),t.addEventListener("drop",i=>{if(i.preventDefault(),!n||t===n)return;t.classList.remove("dash-drag-over");const a=[...e.querySelectorAll(".dash-block")],o=a.indexOf(n),r=a.indexOf(t);o<r?t.after(n):t.before(n)})})}
