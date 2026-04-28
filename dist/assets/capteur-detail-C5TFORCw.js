import"./main-BfTBtz6r.js";import{s as ye}from"./sensors-DXWoBEPb.js";import{p as F}from"./plots-DnwHiJsH.js";import{o as Q}from"./orgs-b3kLTQ0f.js";import{m as Z}from"./members-DEd9yWse.js";import{u as ce}from"./breadcrumb-DEBQjfiD.js";import{a as de,p as N}from"./store-DzkjdUGR.js";const ge=new URLSearchParams(window.location.search),k=parseInt(ge.get("id")),d=ye.find(e=>e.id===k),ue={pluie:{name:"Pluie",unit:"mm",color:"#45b7d1",baseVal:()=>c(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0},temperature:{name:"Température",unit:"°C",color:"#e07050",baseVal:()=>c(10,28),cumul:{label:"Degrés-jours (DJC)",unit:"°j"}},humidite_air:{name:"Humidité air",unit:"%",color:"#4ecdc4",baseVal:()=>c(40,90)},dpv:{name:"DPV",unit:"kPa",color:"#a8d8b0",baseVal:()=>R(.1,2.5)},vent_vitesse:{name:"Vent – vitesse",unit:"km/h",color:"#7bc4b0",baseVal:()=>c(0,40)},vent_rafales:{name:"Vent – rafales",unit:"km/h",color:"#5aa490",baseVal:()=>c(5,60)},vent_direction:{name:"Vent – direction",unit:"°",color:"#3a8070",baseVal:()=>c(0,360)},vent_direction_rafales:{name:"Vent – direction rafales",unit:"°",color:"#1a6050",baseVal:()=>c(0,360)},rayonnement:{name:"Rayonnement",unit:"W/m²",color:"#f5c842",baseVal:()=>c(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}},etp:{name:"ETP",unit:"mm/j",color:"#c090e0",baseVal:()=>R(.5,5),cumul:{label:"Cumul ETP",unit:"mm"}},temperature_min:{name:"Température min",unit:"°C",color:"#90b0e0",baseVal:()=>c(-2,15),cumul:{label:"Heures de froid",unit:"h"}},humidite_sol_10:{name:"Hum. sol 10 cm",unit:"%vol",color:"#f0cc60",baseVal:()=>c(15,45)},humidite_sol_20:{name:"Hum. sol 20 cm",unit:"%vol",color:"#dab448",baseVal:()=>c(15,45)},humidite_sol_30:{name:"Hum. sol 30 cm",unit:"%vol",color:"#c09830",baseVal:()=>c(15,45)},humidite_sol_40:{name:"Hum. sol 40 cm",unit:"%vol",color:"#a87c18",baseVal:()=>c(17,43)},humidite_sol_50:{name:"Hum. sol 50 cm",unit:"%vol",color:"#906200",baseVal:()=>c(18,42)},humidite_sol_60:{name:"Hum. sol 60 cm",unit:"%vol",color:"#784800",baseVal:()=>c(18,42)},humidite_sol_90:{name:"Hum. sol 90 cm",unit:"%vol",color:"#603000",baseVal:()=>c(20,40)},temp_sol:{name:"Temp. sol",unit:"°C",color:"#bb8fce",baseVal:()=>c(8,22)},potentiel_hydrique:{name:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",baseVal:()=>{const e=new Date().getMonth();return Math.round(10+(.5-.5*Math.cos(2*Math.PI*e/12))*140)}},tensio_30:{name:"Tension sol 30 cm",unit:"cbar",color:"#98d8c8",baseVal:()=>c(10,80)},tensio_60:{name:"Tension sol 60 cm",unit:"cbar",color:"#78b8a8",baseVal:()=>c(10,80)},tensio_90:{name:"Tension sol 90 cm",unit:"cbar",color:"#589888",baseVal:()=>c(10,80)},tensio_120:{name:"Tension sol 120 cm",unit:"cbar",color:"#387868",baseVal:()=>c(10,80)},tensio_150:{name:"Tension sol 150 cm",unit:"cbar",color:"#185848",baseVal:()=>c(10,80)},tensio_180:{name:"Tension sol 180 cm",unit:"cbar",color:"#003828",baseVal:()=>c(10,80)},conductivite:{name:"Conductivité",unit:"mS/cm",color:"#f0a030",baseVal:()=>R(.1,3)},humectation:{name:"Humectation feuille",unit:"h",color:"#78d8a0",baseVal:()=>c(0,12)},par:{name:"PAR",unit:"µmol/m²/s",color:"#f8e840",baseVal:()=>c(0,2e3)},temperature_gel:{name:"Temp. feuille/gel",unit:"°C",color:"#a0d8a0",baseVal:()=>c(-3,12),cumul:{label:"Heures de gel",unit:"h"}},temp_rosee:{name:"Température de rosée",unit:"°C",color:"#7ec8e0",baseVal:()=>c(4,16)},temp_seche:{name:"Température sèche",unit:"°C",color:"#e07050",baseVal:()=>c(-5,10)},temp_humide:{name:"Température humide",unit:"°C",color:"#60b8d0",baseVal:()=>c(-7,8)}},xe={"P+":["pluie","temperature","humidite_air"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite_air"],T_MINI:["temp_sol"],W:["vent_vitesse","vent_direction","vent_rafales","vent_direction_rafales"],"CHP-15/30":["potentiel_hydrique","temp_sol"],"CHP-30/60":["potentiel_hydrique","temp_sol"],"CHP-60/90":["humidite_sol_60","humidite_sol_90","temp_sol"],"CAPA-30-3":["_capa_vwc","_capa_temp"],"CAPA-60-6":["_capa_vwc","_capa_temp"],EC:["humidite_sol_30","temp_sol","conductivite"],LWS:["_lws_intensite","_lws_duree"],PYRANO:["rayonnement"],PAR:["par"],T_GEL:["temp_seche","temp_humide"]},se={_capa_vwc:{name:"Humidité sol par horizon",unit:"%vol",color:"#4e9fd4",isVirtual:!0},_capa_temp:{name:"Temp. sol par horizon",unit:"°C",color:"#bb8fce",isVirtual:!0},_lws_intensite:{name:"Intensité d'humectation",unit:"mV",color:"#78d8a0",isVirtual:!0},_lws_duree:{name:"Durée d'humectation",unit:"h",color:"#45c090",isVirtual:!0}},me={"CAPA-30-3":[{id:"humidite_sol_10",label:"10 cm",color:"#f0cc60"},{id:"humidite_sol_20",label:"20 cm",color:"#c89c30"},{id:"humidite_sol_30",label:"30 cm",color:"#a07010"}],"CAPA-60-6":[{id:"humidite_sol_10",label:"10 cm",color:"#f0d070"},{id:"humidite_sol_20",label:"20 cm",color:"#d8b050"},{id:"humidite_sol_30",label:"30 cm",color:"#c09030"},{id:"humidite_sol_40",label:"40 cm",color:"#a87010"},{id:"humidite_sol_50",label:"50 cm",color:"#905200"},{id:"humidite_sol_60",label:"60 cm",color:"#783400"}]};function c(e,t){return Math.floor(Math.random()*(t-e+1))+e}function R(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}function ne(e){return(xe[e.model]||["temperature","humidite_air"]).map(n=>{if(se[n])return{id:n,...se[n],current:null};const a=ue[n];return a?{id:n,...a,current:a.baseVal()}:null}).filter(Boolean)}let B="7d",W=null,O=null;function _e(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return B==="custom"&&W&&O?Math.max(60,Math.round((O-W)/6e4)):e[B]??10080}function ae(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function $e(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function pe(){const e=_e(),t=ae();return Math.max(2,Math.min(200,Math.floor(e/t)))}document.addEventListener("DOMContentLoaded",()=>{if(!d){document.body.innerHTML='<div style="padding:40px"><h1>Capteur non trouvé</h1></div>';return}ce(`Capteur ${d.serial}`,{label:"Capteurs",href:"capteurs.html"}),Me(),z(),Pe(),ze(),Ae(),Oe()});function Me(){var n,a;const e=document.getElementById("latest-strip");if(!e)return;const t=ne(d);if(t.forEach(o=>{if(o.isVirtual)return;const i=document.createElement("div");i.className="latest-card",i.style.borderTop=`3px solid ${o.color}`,i.innerHTML=`
      <div class="latest-card-name">${o.name}</div>
      <div class="latest-card-value">${o.current}<span class="latest-card-unit"> ${o.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `,i.style.cursor="default",e.appendChild(i)}),d.model==="TH"){const o=((n=t.find(l=>l.id==="temperature"))==null?void 0:n.current)||20,i=((a=t.find(l=>l.id==="humidite_air"))==null?void 0:a.current)||60,r=(o-(.55-.55*i/100)*(o-14.5)).toFixed(1),s=document.createElement("div");s.className="latest-card",s.style.borderTop="3px solid #e8a030",s.innerHTML=`
      <div class="latest-card-name">THI (Thermal Humidity Index)</div>
      <div class="latest-card-value">${r}<span class="latest-card-unit"> index</span></div>
      <div class="latest-card-ts">T-(0.55-0.55×HR/100)×(T-14.5)</div>
    `,s.style.cursor="default",e.appendChild(s)}}function z(){const e=document.getElementById("charts-container");e.innerHTML="",ne(d).forEach(n=>{if(n.isVirtual){Ee(e,n);return}const a=document.createElement("div");a.className="chart-card",a.dataset.base=n.current,a.dataset.color=n.color,a.dataset.cumul=n.isCumul?"1":"",a.dataset.metricId=n.id,a.dataset.metricName=n.name,a.dataset.metricUnit=n.unit;const o=n.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${n.cumul.label}</span><span class="chart-cumul-value">${Se(n)} ${n.cumul.unit}</span></div>`:"",r=n.id==="temperature"||n.id==="temperature_min"?we(n.id):"";a.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${n.color}">${n.name}</span>
        <span class="chart-card-unit">${n.unit}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
      ${o}
      ${r}
    `,e.appendChild(a)}),Le(),Ie()}function we(e){const t=e==="temperature_min",n=Math.round(Math.random()*200+50),a=Math.round(Math.random()*400+100);return`
    <div class="temp-threshold-row" data-metric="${e}">
      <div class="temp-threshold-stat">
        <i class="bi bi-snow"></i>
        <span class="temp-threshold-val">${n} h</span>
        <span class="temp-threshold-label">Heures de froid</span>
        <span class="temp-threshold-ctrl">
          &lt; <input type="number" class="temp-thresh-input" data-type="cold" value="${t?7:0}" step="0.5" min="-10" max="20"> °C
        </span>
      </div>
      <div class="temp-threshold-stat">
        <i class="bi bi-sun"></i>
        <span class="temp-threshold-val">${a} °j</span>
        <span class="temp-threshold-label">Degrés-jours cumulés</span>
        <span class="temp-threshold-ctrl">
          Base <input type="number" class="temp-thresh-input" data-type="base" value="6" step="0.5" min="-5" max="20"> °C
        </span>
      </div>
    </div>
  `}function Ie(){document.querySelectorAll(".temp-thresh-input").forEach(e=>{e.addEventListener("change",()=>{var o,i;const t=e.closest(".temp-threshold-row"),n=e.dataset.type;parseFloat(e.value);const a=(i=(o=t.querySelector(`.temp-threshold-stat [data-type="${n}"]`))==null?void 0:o.closest(".temp-threshold-stat"))==null?void 0:i.querySelector(".temp-threshold-val");a&&(n==="cold"?a.textContent=`${Math.round(Math.random()*150+30)} h`:a.textContent=`${Math.round(Math.random()*350+80)} °j`)})})}function Ee(e,t){const n=document.createElement("div");if(n.className="chart-card chart-card--multi",t.id==="_capa_vwc"||t.id==="_capa_temp"){const a=me[d.model]||[],o=t.id==="_capa_vwc",i=o?"Humidité sol par horizon":"Temp. sol par horizon",r=o?"%vol":"°C",s=a.map(l=>`<span class="multi-legend-dot" style="background:${l.color}"></span><span class="multi-legend-label">${l.label}</span>`).join("");n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${t.color}">${i}</span>
        <span class="chart-card-unit">${r}</span>
      </div>
      <div class="multi-chart-legend">${s}</div>
      <svg class="chart-svg chart-svg--multi" width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none"
           data-virtual="${t.id}" data-model="${d.model}"></svg>
    `,e.appendChild(n),requestAnimationFrame(()=>he(n.querySelector(".chart-svg--multi"),a,o));return}if(t.id==="_lws_intensite"||t.id==="_lws_duree"){const a=t.id==="_lws_intensite",o=a?"Intensité d'humectation":"Durée d'humectation",i=a?"mV":"h",r=a?"#78d8a0":"#45c090",s=a?c(0,800):c(0,12),l=a?"humectation":"lws_duree";n.dataset.base=s,n.dataset.color=r,n.dataset.cumul="",n.dataset.metricId=l,n.dataset.metricName=o,n.dataset.metricUnit=i,n.classList.remove("chart-card--multi"),n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${r}">${o}</span>
        <span class="chart-card-unit">${i}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    `,e.appendChild(n)}}function he(e,t,n){const a=pe(),o=ae(),i=600,r=200,s={t:14,r:10,b:28,l:46},l=i-s.l-s.r,p=r-s.t-s.b,v=t.map(u=>{var T;const b=n?u.id:"temp_sol",g=((T=ue[b])==null?void 0:T.baseVal())||25;return{color:u.color,label:u.label,vals:Array.from({length:a},(U,$)=>{const G=(a-1-$)*o,X=t.indexOf(u)*1.5;return Math.max(0,K(b,g+X,G))})}}),m=v.flatMap(u=>u.vals),f=Math.min(...m),x=Math.max(...m),H=x-f||1,C=u=>s.l+u/Math.max(a-1,1)*l,D=u=>s.t+p-(u-f)/H*p;let I="<defs></defs>";for(let u=0;u<=4;u++){const b=s.t+u/4*p,g=x-u/4*H,T=Math.abs(g)>=100?g.toFixed(0):g.toFixed(1);I+=`<line x1="${s.l}" y1="${b.toFixed(1)}" x2="${i-s.r}" y2="${b.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,I+=`<text x="${s.l-5}" y="${(b+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${T}</text>`}const j=Math.max(1,Math.floor(a/6));for(let u=0;u<a;u+=j){const b=C(u).toFixed(1);I+=`<line x1="${b}" y1="${s.t}" x2="${b}" y2="${s.t+p}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,I+=`<text x="${b}" y="${r-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${J((a-u)*o)}</text>`}v.forEach(u=>{const b=u.vals.map((g,T)=>({x:C(T),y:D(g)}));I+=`<path d="${ve(b)}" fill="none" stroke="${u.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}),e.innerHTML=I}let P=null;function Ce(){return P||(P=document.createElement("div"),P.className="chart-tooltip",document.body.appendChild(P)),P}function Te(e,t){return t==="temperature"||t==="temperature_min"?["#6eb4d4","#e07050"]:t==="temperature_gel"?["#a0d8f0","#6090d0"]:[ke(e,.55),e]}function ke(e,t){const n=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return`#${Math.round(n+(255-n)*t).toString(16).padStart(2,"0")}${Math.round(a+(255-a)*t).toString(16).padStart(2,"0")}${Math.round(o+(255-o)*t).toString(16).padStart(2,"0")}`}function ve(e){if(e.length<2)return"";let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let n=0;n<e.length-1;n++){const a=e[Math.max(n-1,0)],o=e[n],i=e[n+1],r=e[Math.min(n+2,e.length-1)],s=o.x+(i.x-a.x)/6,l=o.y+(i.y-a.y)/6,p=i.x-(r.x-o.x)/6,v=i.y-(r.y-o.y)/6;t+=` C${s.toFixed(1)},${l.toFixed(1)} ${p.toFixed(1)},${v.toFixed(1)} ${i.x.toFixed(1)},${i.y.toFixed(1)}`}return t}function J(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Le(){const e=pe(),t=ae();document.querySelectorAll(".chart-card").forEach(n=>{const a=n.querySelector(".chart-svg:not(.chart-svg--multi)");if(!a)return;const o=parseFloat(n.dataset.base),i=n.dataset.color,r=n.dataset.cumul==="1",s=n.dataset.metricId||"",l=n.dataset.metricName||"",p=n.dataset.metricUnit||"";Ve(a,o,i,e,t,r,s,l,p)}),document.querySelectorAll(".chart-svg--multi").forEach(n=>{const a=n.dataset.model,o=n.dataset.virtual,i=me[a]||[],r=o==="_capa_vwc";i.length&&he(n,i,r)})}function le(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function He(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function oe(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function K(e,t,n,a=.15){const o=le(n),i=oe(o),r=He(o),s=()=>1+(Math.random()-.5)*2*a;switch(e){case"temperature":case"temperature_min":return(t-6+i*12)*s();case"temperature_gel":return(t-4+i*8)*s();case"temp_sol":{const l=le(n+120);return(t-3+oe(l)*6)*s()}case"humidite_air":{const l=t+(1-i)*25-i*15;return Math.min(100,Math.max(20,l*s()))}case"rayonnement":case"par":{const l=r*t*1.3;return Math.max(0,l*s())}case"etp":{const l=r*t*1.5;return Math.max(0,l*s())}case"dpv":{const l=r*t*1.4+.05;return Math.max(0,l*s())}case"temp_rosee":{const p=t-6+i*12-2,v=t-8+i*6;return Math.min(p,v)*s()}case"lws_duree":{const l=Math.max(0,.9-r*1.1);return Math.max(0,t*l*s())}case"humectation":{const l=Math.max(0,.8-r*1.2),p=t*l;return Math.max(0,p*s())}case"potentiel_hydrique":return Math.max(5,Math.min(195,t*s()));case"humidite_sol_10":case"humidite_sol_20":case"humidite_sol_30":case"humidite_sol_40":case"humidite_sol_50":case"humidite_sol_60":case"humidite_sol_90":return Math.max(5,t*s());case"tensio_30":case"tensio_60":case"tensio_90":case"tensio_120":case"tensio_150":case"tensio_180":return Math.max(5,t*s());case"conductivite":{const l=20+i*10+(Math.random()-.5)*8;return l<15?0:Math.max(0,(l-15)*.08*s())}case"pluie":return Math.random()<.15?t*Math.random()*2:0;case"vent_vitesse":case"vent_rafales":{const l=t*(.6+r*.8)*s();return Math.max(0,l)}case"vent_direction":case"vent_direction_rafales":return(t+(Math.random()-.5)*60+360)%360;default:return Math.max(0,t*s())}}function Ve(e,t,n,a,o,i,r="",s="",l=""){const m={t:14,r:10,b:28,l:46},f=600-m.l-m.r,x=180-m.t-m.b,H=Math.max(1,Math.round(o/15)),C=Array.from({length:a},(h,y)=>{const M=(a-1-y)*o;if(i){let V=0;for(let E=0;E<H;E++)V+=K(r,t/H,M+E*(o/H));return V}else return K(r,t,M)}),D=Math.min(...C),I=Math.max(...C),j=I-D||1,u=h=>m.l+h/Math.max(a-1,1)*f,b=h=>m.t+x-(h-D)/j*x,g=`sg_${Math.random().toString(36).slice(2)}`,[T,U]=Te(n,r);let $=`<defs>
    <linearGradient id="${g}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${T}"/>
      <stop offset="100%" stop-color="${U}"/>
    </linearGradient>
    <clipPath id="clip_${g}">
      <rect x="${m.l}" y="${m.t}" width="${f}" height="${x}"/>
    </clipPath>
  </defs>`;for(let h=0;h<=4;h++){const y=m.t+h/4*x,M=I-h/4*j,V=Math.abs(M)>=100?M.toFixed(0):Math.abs(M)>=10?M.toFixed(1):M.toFixed(2);$+=`<line x1="${m.l}" y1="${y.toFixed(1)}" x2="${600-m.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,$+=`<text x="${m.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${V}</text>`}const G=Math.max(1,Math.floor(a/6));for(let h=0;h<a;h+=G){const y=u(h).toFixed(1);$+=`<line x1="${y}" y1="${m.t}" x2="${y}" y2="${m.t+x}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,$+=`<text x="${y}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${J((a-h)*o)}</text>`}const X=C.map((h,y)=>({x:u(y),y:b(h)})),ie=ve(X),fe=ie+` L${u(a-1).toFixed(1)},${m.t+x} L${m.l.toFixed(1)},${m.t+x} Z`;$+=`<path d="${fe}" fill="${U}" opacity="0.07" clip-path="url(#clip_${g})"/>`,$+=`<path d="${ie}" fill="none" stroke="url(#${g})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${g})"/>`,$+=`<rect class="chart-hover-rect" x="${m.l}" y="${m.t}" width="${f}" height="${x}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=$;const A=Ce(),Y=e.querySelector(".chart-hover-rect");if(!Y)return;const _=document.createElementNS("http://www.w3.org/2000/svg","circle");_.setAttribute("r","4"),_.setAttribute("fill",n),_.setAttribute("stroke","#fff"),_.setAttribute("stroke-width","1.5"),_.style.display="none",_.style.pointerEvents="none",e.appendChild(_),Y.addEventListener("mousemove",h=>{const y=e.getBoundingClientRect(),M=(h.clientX-y.left)*(600/y.width),V=Math.max(0,Math.min(1,(M-m.l)/f)),E=Math.round(V*(a-1));if(E<0||E>=C.length)return;const q=C[E];_.setAttribute("cx",u(E)),_.setAttribute("cy",b(q)),_.style.display="";const be=Math.abs(q)>=100?q.toFixed(1):q.toFixed(2);A.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${s}</div>
      <div class="chart-tooltip-val" style="color:${n}">${be} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${l}</span></div>
      <div class="chart-tooltip-ts">${J((a-E)*o)}</div>
    `,A.style.display="block",A.style.left=`${Math.min(h.clientX+12,window.innerWidth-160)}px`,A.style.top=`${h.clientY-10}px`}),Y.addEventListener("mouseleave",()=>{A.style.display="none",_.style.display="none"})}function Se(e){const n={pluie:()=>c(20,120),temperature:()=>c(80,400),rayonnement:()=>c(500,3e3),etp:()=>R(15,80),temperature_min:()=>c(50,500),temperature_gel:()=>c(0,80)}[e.id];return n?n():"—"}function Ae(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),n=document.getElementById("time-step"),a=new Date,o=new Date(a-7*864e5);document.getElementById("date-from").value=o.toISOString().slice(0,10),document.getElementById("date-to").value=a.toISOString().slice(0,10),e.addEventListener("click",i=>{const r=i.target.closest(".period-preset-btn");r&&(e.querySelectorAll(".period-preset-btn").forEach(s=>s.classList.remove("active")),r.classList.add("active"),B=r.dataset.period,B==="custom"?t.style.display="flex":(t.style.display="none",n&&(n.value=$e(B)),z()))}),document.getElementById("date-from").addEventListener("change",re),document.getElementById("date-to").addEventListener("change",re),n.addEventListener("change",z)}function re(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(W=new Date(e),O=new Date(t+"T23:59:59"),W<O&&z())}function Pe(){const e=F.find(a=>a.id===d.parcelId),t=e?Q.find(a=>a.id===e.orgId):d.orgId?Q.find(a=>a.id===d.orgId):null,n=de(k);Be(e,t,n),ee(),Fe(e,t),De(),je(),qe(),Re(),te(),Ne(),We()}function Be(e,t,n){const a=n.label||`Capteur ${d.serial}`,o=[{key:"Nom",val:a,field:"label",type:"text"},{key:"Modèle",val:d.model,field:null},{key:"Numéro série",val:d.serial,field:null},{key:"Réseau télécom",val:d.telecom||"Sigfox",field:null},{key:"Exploitation",val:t?t.name:"—",field:null},{key:"Date d'ajout",val:"15/01/2023",field:null}],i=document.getElementById("panel-ident");i.innerHTML=o.map(s=>s.field?`<div class="panel-row editable-row" data-field="${s.field}">
         <span class="panel-row-key">${s.key}</span>
         <span class="panel-row-val" data-val>${s.val}</span>
         <button class="edit-field-btn" title="Modifier"><i class="bi bi-pencil"></i></button>
       </div>`:`<div class="panel-row">
         <span class="panel-row-key">${s.key}</span>
         <span class="panel-row-val">${s.val}</span>
       </div>`).join("");const r=i.querySelector('[data-field="label"]');if(r){const s=r.querySelector("[data-val]"),l=r.querySelector(".edit-field-btn");let p=a;l.addEventListener("click",()=>{if(r.classList.contains("editing"))return;r.classList.add("editing"),l.style.display="none";const v=document.createElement("input");v.type="text",v.className="inline-edit",v.value=p,s.textContent="",s.appendChild(v),v.focus();const m=()=>{const f=v.value.trim()||p;p=f,N(k,{label:f}),ce(f,{label:"Capteurs",href:"capteurs.html"}),s.textContent=f,r.classList.remove("editing"),l.style.display=""};v.addEventListener("keydown",f=>{f.key==="Enter"&&(f.preventDefault(),m()),f.key==="Escape"&&(s.textContent=p,r.classList.remove("editing"),l.style.display="")}),v.addEventListener("blur",m)})}}function Fe(e,t){const n=(t==null?void 0:t.ville)||"—",a=(t==null?void 0:t.departement)||"";document.getElementById("panel-loc").innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${n}${a?` (${a})`:""}</span>
    </div>
    ${e?`<div class="panel-row"><span class="panel-row-key">Parcelle</span><span class="panel-row-val">${e.name} — ${e.area} ha</span></div>`:""}
  `}function De(){const e=d.networkQuality||80,t=d.messages7d||85,n=e>=80?"var(--ok)":e>=60?"var(--warn)":"var(--err)";document.getElementById("panel-signal").innerHTML=`
    <div class="signal-bar-wrap">
      <div class="signal-bar-track">
        <div class="signal-bar-fill" style="width:${e}%;background:${n}"></div>
      </div>
      <span class="signal-bar-pct" style="color:${n}">${e}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Messages / 7 j</span>
      <span class="panel-row-val">${t}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Opérateur</span>
      <span class="panel-row-val">${d.telecom||"Sigfox"}</span>
    </div>
  `}function je(){const e=document.getElementById("panel-events");d.event?e.innerHTML=`
      <div class="event-item event-item--warn">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <div>
          <div class="event-item-label">${d.event}</div>
          <div class="event-item-date">Depuis le 28/03/2026</div>
        </div>
      </div>
    `:e.innerHTML='<div class="panel-empty"><i class="bi bi-check-circle" style="color:var(--ok)"></i> Aucun événement</div>'}function qe(){const e=ne(d);document.getElementById("panel-metrics").innerHTML=e.map(t=>`
    <div class="metric-pill-row">
      <span class="metric-dot" style="background:${t.color}"></span>
      <span class="metric-pill-name">${t.name}</span>
      <span class="metric-pill-unit">${t.unit}</span>
    </div>
  `).join("")}function Re(){const e=document.getElementById("panel-config");if(!e)return;const t=d.model||"",n=t.startsWith("CHP"),a=t.startsWith("CAPA"),o=t==="EC",i=d.isVirtual;let r="";if(i&&(r+=`
      <div class="config-section">
        <div class="config-section-title">Localisation (station virtuelle)</div>
        <div class="form-row">
          <label>Latitude</label>
          <input type="number" class="inline-edit" value="${d.lat||47.3}" step="0.0001">
        </div>
        <div class="form-row">
          <label>Longitude</label>
          <input type="number" class="inline-edit" value="${d.lng||-.5}" step="0.0001">
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer la position</button>
      </div>
    `),n){const s=t==="CHP-15/30"?[15,30]:t==="CHP-30/60"?[30,60]:[60,90],l=d.depth??s[0];r+=`
      <div class="config-section">
        <div class="config-section-title">Profondeur d'installation</div>
        <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">
          Ce modèle peut être installé de ${s[0]} à ${s[1]} cm.
        </div>
        <div class="form-row">
          <label>Profondeur</label>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="chp-depth-input" class="inline-edit" value="${l}" step="5" min="${s[0]}" max="${s[1]}" style="width:70px">
            <span style="font-size:12px;color:var(--txt2)">cm</span>
          </div>
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `}(a||o)&&(r+=`
      <div class="config-section">
        <div class="config-section-title">Texture du sol</div>
        <div class="form-row">
          <label>Texture</label>
          <select class="inline-edit">
            ${["Argile","Limon argileux","Loam","Limon sableux","Sable limoneux","Sable"].map(s=>`<option>${s}</option>`).join("")}
          </select>
        </div>
        <div class="form-row">
          <label>RU (mm/m)</label>
          <input type="number" class="inline-edit" value="150" step="10" min="50" max="300" style="width:80px">
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `),r?e.innerHTML=r:e.innerHTML='<div class="panel-empty">Pas de configuration spécifique pour ce modèle.</div>'}let w=F.filter(e=>e.orgId===d.orgId&&e.id===d.parcelId).map(e=>e.id);(function(){const t=de(k);t.linkedPlotIds?w=t.linkedPlotIds:N(k,{linkedPlotIds:w})})();function ee(){var r,s;const e=document.getElementById("panel-plots");if(!e)return;const t=d.orgId||((r=F.find(l=>l.id===d.parcelId))==null?void 0:r.orgId),n=F.filter(l=>l.orgId===t),a=n.filter(l=>w.includes(l.id)),o=n.filter(l=>!w.includes(l.id));let i="";a.length?i+=a.map(l=>`
      <div class="sensor-linked-row">
        <span class="sensor-link-model">${l.name}</span>
        <span class="sensor-link-serial" style="color:var(--txt3)">${l.area?l.area+" ha":""}</span>
        <button class="remove-plot-btn icon-btn" data-id="${l.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
      </div>
    `).join(""):i+='<div class="panel-empty" style="margin-bottom:6px">Aucune parcelle liée</div>',o.length&&(i+=`
      <div class="panel-add-row">
        <select id="add-plot-select" class="panel-add-select">
          <option value="">Ajouter une parcelle…</option>
          ${o.map(l=>`<option value="${l.id}">${l.name}${l.area?" — "+l.area+" ha":""}</option>`).join("")}
        </select>
        <button id="add-plot-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `),e.innerHTML=i,e.querySelectorAll(".remove-plot-btn").forEach(l=>{l.addEventListener("click",()=>{w=w.filter(p=>p!==parseInt(l.dataset.id)),N(k,{linkedPlotIds:w}),ee()})}),(s=document.getElementById("add-plot-btn"))==null||s.addEventListener("click",()=>{const l=parseInt(document.getElementById("add-plot-select").value);!l||w.includes(l)||(w.push(l),N(k,{linkedPlotIds:w}),ee())})}function Ne(){document.getElementById("panel-actions").innerHTML=`
    <button class="action-btn"><i class="bi bi-download"></i> Exporter les données</button>
    <button class="action-btn action-btn--danger"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `}function We(){const e=[{type:"installation",label:"Installation initiale",date:"15/01/2023",user:"Technicien Weenat",icon:"bi-box-arrow-in-down"},{type:"nettoyage",label:"Nettoyage pluviomètre",date:"20/03/2023",user:"Agriculteur",icon:"bi-droplet"},{type:"batterie",label:"Changement de batterie",date:"10/06/2023",user:"Technicien Weenat",icon:"bi-battery-charging"},{type:"note",label:"Redressage capteur déplacé",date:"02/11/2023",user:"Agriculteur",icon:"bi-chat-text"}];document.getElementById("panel-maint").innerHTML=`
    <div class="maint-timeline">
      ${e.map(t=>`
        <div class="maint-item">
          <div class="maint-icon"><i class="bi ${t.icon}"></i></div>
          <div class="maint-body">
            <div class="maint-label">${t.label}</div>
            <div class="maint-meta">${t.date} · ${t.user}</div>
          </div>
        </div>
      `).join("")}
    </div>
    <button class="action-btn" style="margin-top:8px"><i class="bi bi-plus"></i> Ajouter une entrée</button>
  `}let S=Z.filter(e=>{var t,n;return d.parcelId?(t=e.parcelIds)==null?void 0:t.includes(d.parcelId):(n=e.orgIds)==null?void 0:n.includes(d.orgId)}).map(e=>e.id);function te(e){const t=document.getElementById("panel-membres");if(!t)return;const n=Z.filter(i=>S.includes(i.id));n.length?t.innerHTML=n.map(i=>`
      <div class="member-row">
        <div>
          <span class="member-name">${i.prenom} ${i.nom}</span>
          <span class="member-role-badge">${i.role}</span>
        </div>
        <button class="remove-membre-btn icon-btn" data-id="${i.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""):t.innerHTML='<p class="panel-empty">Aucun membre associé.</p>';const a=document.getElementById("add-membre-select");a&&(a.innerHTML='<option value="">Ajouter un membre…</option>',Z.filter(i=>!S.includes(i.id)).forEach(i=>{const r=document.createElement("option");r.value=i.id,r.textContent=`${i.prenom} ${i.nom} (${i.role})`,a.appendChild(r)})),t.querySelectorAll(".remove-membre-btn").forEach(i=>{i.addEventListener("click",()=>{S=S.filter(r=>r!==parseInt(i.dataset.id)),te()})});const o=document.getElementById("add-membre-btn");o&&(o.onclick=()=>{const i=parseInt(document.getElementById("add-membre-select").value);!i||S.includes(i)||(S.push(i),te())})}function Oe(){const e=F.find(o=>o.id===d.parcelId),t=e?Q.find(o=>o.id===e.orgId):null;if(!(t!=null&&t.lat))return;const n=L.map("sensor-mini-map",{zoomControl:!1,attributionControl:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(n);const a=e==null?void 0:e.latlngs;if(Array.isArray(a)&&a.length>=3){const o=L.polygon(a,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.25}).addTo(n);n.fitBounds(o.getBounds(),{padding:[10,10]})}else n.setView([t.lat,t.lng],13),L.circleMarker([t.lat,t.lng],{radius:6,color:"white",fillColor:"var(--pri)",fillOpacity:1,weight:2}).addTo(n)}function ze(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),n=t.querySelector("i");t.addEventListener("click",()=>{const a=e.classList.toggle("panel-collapsed");t.title=a?"Afficher le panneau":"Masquer le panneau",n.className=a?"bi bi-chevron-left":"bi bi-chevron-right"})}
