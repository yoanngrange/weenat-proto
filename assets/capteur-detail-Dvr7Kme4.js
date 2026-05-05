import"./main-CTKmqMeY.js";import{s as X}from"./sensors-CeUIY8ag.js";import{p as D}from"./plots-Dwluc99O.js";import{o as ee}from"./orgs-Cx4wNzLL.js";import{m as te}from"./members-DEd9yWse.js";import{u as he}from"./breadcrumb-DEBQjfiD.js";import{a as ve,p as z}from"./store-DzkjdUGR.js";const Ce=new URLSearchParams(window.location.search),S=parseInt(Ce.get("id")),d=X.find(e=>e.id===S),fe={pluie:{name:"Pluie",unit:"mm",color:"#45b7d1",baseVal:()=>c(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0},temperature:{name:"Température",unit:"°C",color:"#e07050",baseVal:()=>c(10,28),cumul:{label:"Degrés-jours (DJC)",unit:"°j"}},humidite_air:{name:"Humidité air",unit:"%",color:"#4ecdc4",baseVal:()=>c(40,90)},dpv:{name:"DPV",unit:"kPa",color:"#a8d8b0",baseVal:()=>O(.1,2.5)},vent_vitesse:{name:"Vent – vitesse",unit:"km/h",color:"#7bc4b0",baseVal:()=>c(0,40)},vent_rafales:{name:"Vent – rafales",unit:"km/h",color:"#5aa490",baseVal:()=>c(5,60)},vent_direction:{name:"Vent – direction",unit:"°",color:"#3a8070",baseVal:()=>c(0,360)},vent_direction_rafales:{name:"Vent – direction rafales",unit:"°",color:"#1a6050",baseVal:()=>c(0,360)},rayonnement:{name:"Rayonnement",unit:"W/m²",color:"#f5c842",baseVal:()=>c(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}},etp:{name:"ETP",unit:"mm/j",color:"#c090e0",baseVal:()=>O(.5,5),cumul:{label:"Cumul ETP",unit:"mm"}},temperature_min:{name:"Température min",unit:"°C",color:"#90b0e0",baseVal:()=>c(-2,15),cumul:{label:"Heures de froid",unit:"h"}},humidite_sol_10:{name:"Hum. sol 10 cm",unit:"%vol",color:"#f0cc60",baseVal:()=>c(15,45)},humidite_sol_20:{name:"Hum. sol 20 cm",unit:"%vol",color:"#dab448",baseVal:()=>c(15,45)},humidite_sol_30:{name:"Hum. sol 30 cm",unit:"%vol",color:"#c09830",baseVal:()=>c(15,45)},humidite_sol_40:{name:"Hum. sol 40 cm",unit:"%vol",color:"#a87c18",baseVal:()=>c(17,43)},humidite_sol_50:{name:"Hum. sol 50 cm",unit:"%vol",color:"#906200",baseVal:()=>c(18,42)},humidite_sol_60:{name:"Hum. sol 60 cm",unit:"%vol",color:"#784800",baseVal:()=>c(18,42)},humidite_sol_90:{name:"Hum. sol 90 cm",unit:"%vol",color:"#603000",baseVal:()=>c(20,40)},temp_sol:{name:"Temp. sol",unit:"°C",color:"#bb8fce",baseVal:()=>c(8,22)},potentiel_hydrique:{name:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",baseVal:()=>{const e=new Date().getMonth();return Math.round(10+(.5-.5*Math.cos(2*Math.PI*e/12))*140)}},tensio_30:{name:"Tension sol 30 cm",unit:"cbar",color:"#98d8c8",baseVal:()=>c(10,80)},tensio_60:{name:"Tension sol 60 cm",unit:"cbar",color:"#78b8a8",baseVal:()=>c(10,80)},tensio_90:{name:"Tension sol 90 cm",unit:"cbar",color:"#589888",baseVal:()=>c(10,80)},tensio_120:{name:"Tension sol 120 cm",unit:"cbar",color:"#387868",baseVal:()=>c(10,80)},tensio_150:{name:"Tension sol 150 cm",unit:"cbar",color:"#185848",baseVal:()=>c(10,80)},tensio_180:{name:"Tension sol 180 cm",unit:"cbar",color:"#003828",baseVal:()=>c(10,80)},conductivite:{name:"Conductivité",unit:"mS/cm",color:"#f0a030",baseVal:()=>O(.1,3)},humectation:{name:"Humectation feuille",unit:"h",color:"#78d8a0",baseVal:()=>c(0,12)},par:{name:"PAR",unit:"µmol/m²/s",color:"#f8e840",baseVal:()=>c(0,2e3)},temperature_gel:{name:"Temp. feuille/gel",unit:"°C",color:"#a0d8a0",baseVal:()=>c(-3,12),cumul:{label:"Heures de gel",unit:"h"}},temp_rosee:{name:"Température de rosée",unit:"°C",color:"#7ec8e0",baseVal:()=>c(4,16)},temp_seche:{name:"Température sèche",unit:"°C",color:"#e07050",baseVal:()=>c(-5,10)},temp_humide:{name:"Température humide",unit:"°C",color:"#60b8d0",baseVal:()=>c(-7,8)}},Ee={"P+":["pluie","temperature","humidite_air"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite_air"],T_MINI:["temp_sol"],W:["vent_vitesse","vent_direction","vent_rafales","vent_direction_rafales"],"CHP-15/30":["potentiel_hydrique","temp_sol"],"CHP-30/60":["potentiel_hydrique","temp_sol"],"CHP-60/90":["humidite_sol_60","humidite_sol_90","temp_sol"],"CAPA-30-3":["_capa_vwc","_capa_temp"],"CAPA-60-6":["_capa_vwc","_capa_temp"],EC:["humidite_sol_30","temp_sol","conductivite"],LWS:["_lws_intensite","_lws_duree"],PYRANO:["rayonnement"],PAR:["par"],T_GEL:["temp_seche","temp_humide"]},re={_capa_vwc:{name:"Humidité sol par horizon",unit:"%vol",color:"#4e9fd4",isVirtual:!0},_capa_temp:{name:"Temp. sol par horizon",unit:"°C",color:"#bb8fce",isVirtual:!0},_lws_intensite:{name:"Intensité d'humectation",unit:"mV",color:"#78d8a0",isVirtual:!0},_lws_duree:{name:"Durée d'humectation",unit:"h",color:"#45c090",isVirtual:!0}},be={"CAPA-30-3":[{id:"humidite_sol_10",label:"10 cm",color:"#f0cc60"},{id:"humidite_sol_20",label:"20 cm",color:"#c89c30"},{id:"humidite_sol_30",label:"30 cm",color:"#a07010"}],"CAPA-60-6":[{id:"humidite_sol_10",label:"10 cm",color:"#f0d070"},{id:"humidite_sol_20",label:"20 cm",color:"#d8b050"},{id:"humidite_sol_30",label:"30 cm",color:"#c09030"},{id:"humidite_sol_40",label:"40 cm",color:"#a87010"},{id:"humidite_sol_50",label:"50 cm",color:"#905200"},{id:"humidite_sol_60",label:"60 cm",color:"#783400"}]};function c(e,t){return Math.floor(Math.random()*(t-e+1))+e}function O(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}function j(e){return(Ee[e.model]||["temperature","humidite_air"]).map(a=>{if(re[a])return{id:a,...re[a],current:null};const n=fe[a];return n?{id:a,...n,current:n.baseVal()}:null}).filter(Boolean)}let H=null,q="7d",U=null,G=null;function Ie(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return q==="custom"&&U&&G?Math.max(60,Math.round((G-U)/6e4)):e[q]??10080}function oe(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Le(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function ye(){const e=Ie(),t=oe();return Math.max(2,Math.min(200,Math.floor(e/t)))}document.addEventListener("DOMContentLoaded",()=>{if(!d){document.body.innerHTML='<div style="padding:40px"><h1>Capteur non trouvé</h1></div>';return}he(`Capteur ${d.serial}`,{label:"Capteurs",href:"capteurs.html"}),Te(),V(),Re(),Je(),je(),Ne(),Ze()});function Te(){var a,n;const e=document.getElementById("latest-strip");if(!e)return;const t=j(d);if(t.forEach(l=>{if(l.isVirtual)return;const i=document.createElement("div");i.className="latest-card",i.style.borderTop=`3px solid ${l.color}`,i.innerHTML=`
      <div class="latest-card-name">${l.name}</div>
      <div class="latest-card-value">${l.current}<span class="latest-card-unit"> ${l.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `,i.style.cursor="default",e.appendChild(i)}),d.model==="TH"){const l=((a=t.find(s=>s.id==="temperature"))==null?void 0:a.current)||20,i=((n=t.find(s=>s.id==="humidite_air"))==null?void 0:n.current)||60,r=(l-(.55-.55*i/100)*(l-14.5)).toFixed(1),o=document.createElement("div");o.className="latest-card",o.style.borderTop="3px solid #e8a030",o.innerHTML=`
      <div class="latest-card-name">THI (Thermal Humidity Index)</div>
      <div class="latest-card-value">${r}<span class="latest-card-unit"> index</span></div>
      <div class="latest-card-ts">T-(0.55-0.55×HR/100)×(T-14.5)</div>
    `,o.style.cursor="default",e.appendChild(o)}}function ge(e){const t=document.createElement("div");t.className="chart-card",t.dataset.base=e.current,t.dataset.color=e.color,t.dataset.cumul=e.isCumul?"1":"",t.dataset.metricId=e.id,t.dataset.metricName=e.name,t.dataset.metricUnit=e.unit;const a=e.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${e.cumul.label}</span><span class="chart-cumul-value">${De(e)} ${e.cumul.unit}</span></div>`:"",l=e.id==="temperature"||e.id==="temperature_min"?He(e.id):"";return t.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${e.color}">${e.name}</span>
      <span class="chart-card-unit">${e.unit}</span>
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${a}
    ${l}
  `,t}function ke(e,t){j(t).forEach(n=>{if(n.isVirtual){xe(e,n,t);return}e.appendChild(ge(n))})}function ce(e,t,a){t.isVirtual?xe(e,t,a):e.appendChild(ge(t))}function V(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",H){e.className="compare-rows";const a=X.find(s=>s.id===H),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${d.model} — ${d.serial}</span></div>
      <div class="compare-col-header">
        <span>${a?`${a.model} — ${a.serial}`:"Capteur"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{H=null,Y(),V()});const l=j(d),i=a?j(a):[],r=l.map(s=>s.id);[...r,...i.map(s=>s.id).filter(s=>!r.includes(s))].forEach(s=>{const m=l.find(_=>_.id===s),f=i.find(_=>_.id===s),u=document.createElement("div");u.className="compare-row";const h=document.createElement("div");m?ce(h,m,d):h.innerHTML='<div class="compare-chart-empty">—</div>';const b=document.createElement("div");f?ce(b,f,a):b.innerHTML='<div class="compare-chart-empty">—</div>',u.appendChild(h),u.appendChild(b),e.appendChild(u)})}else e.className="charts-stack",ke(e,d);Be(),Se()}function He(e){const t=e==="temperature_min",a=Math.round(Math.random()*200+50),n=Math.round(Math.random()*400+100);return`
    <div class="temp-threshold-row" data-metric="${e}">
      <div class="temp-threshold-stat">
        <i class="bi bi-snow"></i>
        <span class="temp-threshold-val">${a} h</span>
        <span class="temp-threshold-label">Heures de froid</span>
        <span class="temp-threshold-ctrl">
          &lt; <input type="number" class="temp-thresh-input" data-type="cold" value="${t?7:0}" step="0.5" min="-10" max="20"> °C
        </span>
      </div>
      <div class="temp-threshold-stat">
        <i class="bi bi-sun"></i>
        <span class="temp-threshold-val">${n} °j</span>
        <span class="temp-threshold-label">Degrés-jours cumulés</span>
        <span class="temp-threshold-ctrl">
          Base <input type="number" class="temp-thresh-input" data-type="base" value="6" step="0.5" min="-5" max="20"> °C
        </span>
      </div>
    </div>
  `}function Se(){document.querySelectorAll(".temp-thresh-input").forEach(e=>{e.addEventListener("change",()=>{var l,i;const t=e.closest(".temp-threshold-row"),a=e.dataset.type;parseFloat(e.value);const n=(i=(l=t.querySelector(`.temp-threshold-stat [data-type="${a}"]`))==null?void 0:l.closest(".temp-threshold-stat"))==null?void 0:i.querySelector(".temp-threshold-val");n&&(a==="cold"?n.textContent=`${Math.round(Math.random()*150+30)} h`:n.textContent=`${Math.round(Math.random()*350+80)} °j`)})})}function xe(e,t,a){const n=document.createElement("div");if(n.className="chart-card chart-card--multi",t.id==="_capa_vwc"||t.id==="_capa_temp"){const l=be[a.model]||[],i=t.id==="_capa_vwc",r=i?"Humidité sol par horizon":"Temp. sol par horizon",o=i?"%vol":"°C",s=l.map(m=>`<span class="multi-legend-dot" style="background:${m.color}"></span><span class="multi-legend-label">${m.label}</span>`).join("");n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${t.color}">${r}</span>
        <span class="chart-card-unit">${o}</span>
      </div>
      <div class="multi-chart-legend">${s}</div>
      <svg class="chart-svg chart-svg--multi" width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none"
           data-virtual="${t.id}" data-model="${a.model}"></svg>
    `,e.appendChild(n),requestAnimationFrame(()=>$e(n.querySelector(".chart-svg--multi"),l,i));return}if(t.id==="_lws_intensite"||t.id==="_lws_duree"){const l=t.id==="_lws_intensite",i=l?"Intensité d'humectation":"Durée d'humectation",r=l?"mV":"h",o=l?"#78d8a0":"#45c090",s=l?c(0,800):c(0,12),m=l?"humectation":"lws_duree";n.dataset.base=s,n.dataset.color=o,n.dataset.cumul="",n.dataset.metricId=m,n.dataset.metricName=i,n.dataset.metricUnit=r,n.classList.remove("chart-card--multi"),n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${o}">${i}</span>
        <span class="chart-card-unit">${r}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    `,e.appendChild(n)}}function $e(e,t,a){const n=ye(),l=oe(),i=600,r=200,o={t:14,r:10,b:28,l:46},s=i-o.l-o.r,m=r-o.t-o.b,f=t.map(p=>{var k;const y=a?p.id:"temp_sol",x=((k=fe[y])==null?void 0:k.baseVal())||25;return{color:p.color,label:p.label,vals:Array.from({length:n},(Q,w)=>{const Z=(n-1-w)*l,J=t.indexOf(p)*1.5;return Math.max(0,ae(y,x+J,Z))})}}),u=f.flatMap(p=>p.vals),h=Math.min(...u),b=Math.max(...u),_=b-h||1,T=p=>o.l+p/Math.max(n-1,1)*s,N=p=>o.t+m-(p-h)/_*m;let E="<defs></defs>";for(let p=0;p<=4;p++){const y=o.t+p/4*m,x=b-p/4*_,k=Math.abs(x)>=100?x.toFixed(0):x.toFixed(1);E+=`<line x1="${o.l}" y1="${y.toFixed(1)}" x2="${i-o.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,E+=`<text x="${o.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${k}</text>`}const R=Math.max(1,Math.floor(n/6));for(let p=0;p<n;p+=R){const y=T(p).toFixed(1);E+=`<line x1="${y}" y1="${o.t}" x2="${y}" y2="${o.t+m}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,E+=`<text x="${y}" y="${r-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ne((n-p)*l)}</text>`}f.forEach(p=>{const y=p.vals.map((x,k)=>({x:T(k),y:N(x)}));E+=`<path d="${_e(y)}" fill="none" stroke="${p.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}),e.innerHTML=E}let F=null;function Ve(){return F||(F=document.createElement("div"),F.className="chart-tooltip",document.body.appendChild(F)),F}function Ae(e,t){return t==="temperature"||t==="temperature_min"?["#6eb4d4","#e07050"]:t==="temperature_gel"?["#a0d8f0","#6090d0"]:[Pe(e,.55),e]}function Pe(e,t){const a=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16);return`#${Math.round(a+(255-a)*t).toString(16).padStart(2,"0")}${Math.round(n+(255-n)*t).toString(16).padStart(2,"0")}${Math.round(l+(255-l)*t).toString(16).padStart(2,"0")}`}function _e(e){if(e.length<2)return"";let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let a=0;a<e.length-1;a++){const n=e[Math.max(a-1,0)],l=e[a],i=e[a+1],r=e[Math.min(a+2,e.length-1)],o=l.x+(i.x-n.x)/6,s=l.y+(i.y-n.y)/6,m=i.x-(r.x-l.x)/6,f=i.y-(r.y-l.y)/6;t+=` C${o.toFixed(1)},${s.toFixed(1)} ${m.toFixed(1)},${f.toFixed(1)} ${i.x.toFixed(1)},${i.y.toFixed(1)}`}return t}function ne(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Be(){const e=ye(),t=oe();document.querySelectorAll(".chart-card").forEach(a=>{const n=a.querySelector(".chart-svg:not(.chart-svg--multi)");if(!n)return;const l=parseFloat(a.dataset.base),i=a.dataset.color,r=a.dataset.cumul==="1",o=a.dataset.metricId||"",s=a.dataset.metricName||"",m=a.dataset.metricUnit||"";qe(n,l,i,e,t,r,o,s,m)}),document.querySelectorAll(".chart-svg--multi").forEach(a=>{const n=a.dataset.model,l=a.dataset.virtual,i=be[n]||[],r=l==="_capa_vwc";i.length&&$e(a,i,r)})}function de(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function Fe(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function ue(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function ae(e,t,a,n=.15){const l=de(a),i=ue(l),r=Fe(l),o=()=>1+(Math.random()-.5)*2*n;switch(e){case"temperature":case"temperature_min":return(t-6+i*12)*o();case"temperature_gel":return(t-4+i*8)*o();case"temp_sol":{const s=de(a+120);return(t-3+ue(s)*6)*o()}case"humidite_air":{const s=t+(1-i)*25-i*15;return Math.min(100,Math.max(20,s*o()))}case"rayonnement":case"par":{const s=r*t*1.3;return Math.max(0,s*o())}case"etp":{const s=r*t*1.5;return Math.max(0,s*o())}case"dpv":{const s=r*t*1.4+.05;return Math.max(0,s*o())}case"temp_rosee":{const m=t-6+i*12-2,f=t-8+i*6;return Math.min(m,f)*o()}case"lws_duree":{const s=Math.max(0,.9-r*1.1);return Math.max(0,t*s*o())}case"humectation":{const s=Math.max(0,.8-r*1.2),m=t*s;return Math.max(0,m*o())}case"potentiel_hydrique":return Math.max(5,Math.min(195,t*o()));case"humidite_sol_10":case"humidite_sol_20":case"humidite_sol_30":case"humidite_sol_40":case"humidite_sol_50":case"humidite_sol_60":case"humidite_sol_90":return Math.max(5,t*o());case"tensio_30":case"tensio_60":case"tensio_90":case"tensio_120":case"tensio_150":case"tensio_180":return Math.max(5,t*o());case"conductivite":{const s=20+i*10+(Math.random()-.5)*8;return s<15?0:Math.max(0,(s-15)*.08*o())}case"pluie":return Math.random()<.15?t*Math.random()*2:0;case"vent_vitesse":case"vent_rafales":{const s=t*(.6+r*.8)*o();return Math.max(0,s)}case"vent_direction":case"vent_direction_rafales":return(t+(Math.random()-.5)*60+360)%360;default:return Math.max(0,t*o())}}function qe(e,t,a,n,l,i,r="",o="",s=""){const u={t:14,r:10,b:28,l:46},h=600-u.l-u.r,b=180-u.t-u.b,_=Math.max(1,Math.round(l/15)),T=Array.from({length:n},(v,g)=>{const M=(n-1-g)*l;if(i){let A=0;for(let I=0;I<_;I++)A+=ae(r,t/_,M+I*(l/_));return A}else return ae(r,t,M)}),N=Math.min(...T),E=Math.max(...T),R=E-N||1,p=v=>u.l+v/Math.max(n-1,1)*h,y=v=>u.t+b-(v-N)/R*b,x=`sg_${Math.random().toString(36).slice(2)}`,[k,Q]=Ae(a,r);let w=`<defs>
    <linearGradient id="${x}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${k}"/>
      <stop offset="100%" stop-color="${Q}"/>
    </linearGradient>
    <clipPath id="clip_${x}">
      <rect x="${u.l}" y="${u.t}" width="${h}" height="${b}"/>
    </clipPath>
  </defs>`;for(let v=0;v<=4;v++){const g=u.t+v/4*b,M=E-v/4*R,A=Math.abs(M)>=100?M.toFixed(0):Math.abs(M)>=10?M.toFixed(1):M.toFixed(2);w+=`<line x1="${u.l}" y1="${g.toFixed(1)}" x2="${600-u.r}" y2="${g.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,w+=`<text x="${u.l-5}" y="${(g+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${A}</text>`}const Z=Math.max(1,Math.floor(n/6));for(let v=0;v<n;v+=Z){const g=p(v).toFixed(1);w+=`<line x1="${g}" y1="${u.t}" x2="${g}" y2="${u.t+b}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,w+=`<text x="${g}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ne((n-v)*l)}</text>`}const J=T.map((v,g)=>({x:p(g),y:y(v)})),le=_e(J),we=le+` L${p(n-1).toFixed(1)},${u.t+b} L${u.l.toFixed(1)},${u.t+b} Z`;w+=`<path d="${we}" fill="${Q}" opacity="0.07" clip-path="url(#clip_${x})"/>`,w+=`<path d="${le}" fill="none" stroke="url(#${x})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${x})"/>`,w+=`<rect class="chart-hover-rect" x="${u.l}" y="${u.t}" width="${h}" height="${b}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=w;const B=Ve(),K=e.querySelector(".chart-hover-rect");if(!K)return;const $=document.createElementNS("http://www.w3.org/2000/svg","circle");$.setAttribute("r","4"),$.setAttribute("fill",a),$.setAttribute("stroke","#fff"),$.setAttribute("stroke-width","1.5"),$.style.display="none",$.style.pointerEvents="none",e.appendChild($),K.addEventListener("mousemove",v=>{const g=e.getBoundingClientRect(),M=(v.clientX-g.left)*(600/g.width),A=Math.max(0,Math.min(1,(M-u.l)/h)),I=Math.round(A*(n-1));if(I<0||I>=T.length)return;const W=T[I];$.setAttribute("cx",p(I)),$.setAttribute("cy",y(W)),$.style.display="";const Me=Math.abs(W)>=100?W.toFixed(1):W.toFixed(2);B.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${o}</div>
      <div class="chart-tooltip-val" style="color:${a}">${Me} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${s}</span></div>
      <div class="chart-tooltip-ts">${ne((n-I)*l)}</div>
    `,B.style.display="block",B.style.left=`${Math.min(v.clientX+12,window.innerWidth-160)}px`,B.style.top=`${v.clientY-10}px`}),K.addEventListener("mouseleave",()=>{B.style.display="none",$.style.display="none"})}function De(e){const a={pluie:()=>c(20,120),temperature:()=>c(80,400),rayonnement:()=>c(500,3e3),etp:()=>O(15,80),temperature_min:()=>c(50,500),temperature_gel:()=>c(0,80)}[e.id];return a?a():"—"}function je(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),a=document.getElementById("time-step"),n=new Date,l=new Date(n-7*864e5);document.getElementById("date-from").value=l.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",i=>{const r=i.target.closest(".period-preset-btn");r&&(e.querySelectorAll(".period-preset-btn").forEach(o=>o.classList.remove("active")),r.classList.add("active"),q=r.dataset.period,q==="custom"?t.style.display="flex":(t.style.display="none",a&&(a.value=Le(q)),V()))}),document.getElementById("date-from").addEventListener("change",me),document.getElementById("date-to").addEventListener("change",me),a.addEventListener("change",V)}function me(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(U=new Date(e),G=new Date(t+"T23:59:59"),U<G&&V())}function Ne(){Y()}function Y(){var t,a,n;const e=document.getElementById("compare-control");if(e)if(H){const l=X.find(r=>r.id===H),i=l?`${l.model} — ${l.serial}`:"Capteur";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${i} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(t=e.querySelector(".compare-clear-icon"))==null||t.addEventListener("click",r=>{r.stopPropagation(),H=null,Y(),V()}),(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",pe)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",pe)}function pe(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),a=X.filter(i=>i.id!==S),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher un capteur…">
    <div class="compare-dropdown-list">
      ${a.map(i=>`<div class="compare-dropdown-item${i.id===H?" active":""}" data-id="${i.id}"><i class="bi bi-broadcast"></i> ${i.model} — ${i.serial}</div>`).join("")}
    </div>
  `,t.appendChild(n);const l=n.querySelector(".compare-search-input");l.focus(),l.addEventListener("input",i=>{const r=i.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(o=>{o.style.display=o.textContent.toLowerCase().includes(r)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(i=>{i.addEventListener("click",()=>{H=parseInt(i.dataset.id),n.remove(),Y(),V()})}),setTimeout(()=>{document.addEventListener("click",function i(r){!n.contains(r.target)&&!t.contains(r.target)&&(n.remove(),document.removeEventListener("click",i))})},0)}function Re(){const e=D.find(n=>n.id===d.parcelId),t=e?ee.find(n=>n.id===e.orgId):d.orgId?ee.find(n=>n.id===d.orgId):null,a=ve(S);We(e,t,a),ie(),Oe(e,t),ze(),Ue(),Ge(),Xe(),se(),Ye(),Qe()}function We(e,t,a){const n=a.label||`Capteur ${d.serial}`,l=[{key:"Nom",val:n,field:"label",type:"text"},{key:"Modèle",val:d.model,field:null},{key:"Numéro série",val:d.serial,field:null},{key:"Réseau télécom",val:d.telecom||"Sigfox",field:null},{key:"Exploitation",val:t?t.name:"—",field:null},{key:"Date d'ajout",val:"15/01/2023",field:null}],i=document.getElementById("panel-ident");i.innerHTML=l.map(o=>o.field?`<div class="panel-row editable-row" data-field="${o.field}">
         <span class="panel-row-key">${o.key}</span>
         <span class="panel-row-val" data-val>${o.val}</span>
         <button class="edit-field-btn" title="Modifier"><i class="bi bi-pencil"></i></button>
       </div>`:`<div class="panel-row">
         <span class="panel-row-key">${o.key}</span>
         <span class="panel-row-val">${o.val}</span>
       </div>`).join("");const r=i.querySelector('[data-field="label"]');if(r){const o=r.querySelector("[data-val]"),s=r.querySelector(".edit-field-btn");let m=n;s.addEventListener("click",()=>{if(r.classList.contains("editing"))return;r.classList.add("editing"),s.style.display="none";const f=document.createElement("input");f.type="text",f.className="inline-edit",f.value=m,o.textContent="",o.appendChild(f),f.focus();const u=()=>{const h=f.value.trim()||m;m=h,z(S,{label:h}),he(h,{label:"Capteurs",href:"capteurs.html"}),o.textContent=h,r.classList.remove("editing"),s.style.display=""};f.addEventListener("keydown",h=>{h.key==="Enter"&&(h.preventDefault(),u()),h.key==="Escape"&&(o.textContent=m,r.classList.remove("editing"),s.style.display="")}),f.addEventListener("blur",u)})}}function Oe(e,t){const a=(t==null?void 0:t.ville)||"—",n=(t==null?void 0:t.departement)||"";document.getElementById("panel-loc").innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${n?` (${n})`:""}</span>
    </div>
    ${e?`<div class="panel-row"><span class="panel-row-key">Parcelle</span><span class="panel-row-val">${e.name} — ${e.area} ha</span></div>`:""}
  `}function ze(){const e=d.networkQuality||80,t=d.messages7d||85,a=e>=80?"var(--ok)":e>=60?"var(--warn)":"var(--err)";document.getElementById("panel-signal").innerHTML=`
    <div class="signal-bar-wrap">
      <div class="signal-bar-track">
        <div class="signal-bar-fill" style="width:${e}%;background:${a}"></div>
      </div>
      <span class="signal-bar-pct" style="color:${a}">${e}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Messages / 7 j</span>
      <span class="panel-row-val">${t}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Opérateur</span>
      <span class="panel-row-val">${d.telecom||"Sigfox"}</span>
    </div>
  `}function Ue(){const e=document.getElementById("panel-events");d.event?e.innerHTML=`
      <div class="event-item event-item--warn">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <div>
          <div class="event-item-label">${d.event}</div>
          <div class="event-item-date">Depuis le 28/03/2026</div>
        </div>
      </div>
    `:e.innerHTML='<div class="panel-empty"><i class="bi bi-check-circle" style="color:var(--ok)"></i> Aucun événement</div>'}function Ge(){const e=j(d);document.getElementById("panel-metrics").innerHTML=e.map(t=>`
    <div class="metric-pill-row">
      <span class="metric-dot" style="background:${t.color}"></span>
      <span class="metric-pill-name">${t.name}</span>
      <span class="metric-pill-unit">${t.unit}</span>
    </div>
  `).join("")}function Xe(){const e=document.getElementById("panel-config");if(!e)return;const t=d.model||"",a=t.startsWith("CHP"),n=t.startsWith("CAPA"),l=t==="EC",i=d.isVirtual;let r="";if(i&&(r+=`
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
    `),a){const o=t==="CHP-15/30"?[15,30]:t==="CHP-30/60"?[30,60]:[60,90],s=d.depth??o[0];r+=`
      <div class="config-section">
        <div class="config-section-title">Profondeur d'installation</div>
        <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">
          Ce modèle peut être installé de ${o[0]} à ${o[1]} cm.
        </div>
        <div class="form-row">
          <label>Profondeur</label>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="chp-depth-input" class="inline-edit" value="${s}" step="5" min="${o[0]}" max="${o[1]}" style="width:70px">
            <span style="font-size:12px;color:var(--txt2)">cm</span>
          </div>
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `}(n||l)&&(r+=`
      <div class="config-section">
        <div class="config-section-title">Texture du sol</div>
        <div class="form-row">
          <label>Texture</label>
          <select class="inline-edit">
            ${["Argile","Limon argileux","Loam","Limon sableux","Sable limoneux","Sable"].map(o=>`<option>${o}</option>`).join("")}
          </select>
        </div>
        <div class="form-row">
          <label>RU (mm/m)</label>
          <input type="number" class="inline-edit" value="150" step="10" min="50" max="300" style="width:80px">
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `),r?e.innerHTML=r:e.innerHTML='<div class="panel-empty">Pas de configuration spécifique pour ce modèle.</div>'}let C=D.filter(e=>e.orgId===d.orgId&&e.id===d.parcelId).map(e=>e.id);(function(){const t=ve(S);t.linkedPlotIds?C=t.linkedPlotIds:z(S,{linkedPlotIds:C})})();function ie(){var r,o;const e=document.getElementById("panel-plots");if(!e)return;const t=d.orgId||((r=D.find(s=>s.id===d.parcelId))==null?void 0:r.orgId),a=D.filter(s=>s.orgId===t),n=a.filter(s=>C.includes(s.id)),l=a.filter(s=>!C.includes(s.id));let i="";n.length?i+=n.map(s=>`
      <div class="sensor-linked-row">
        <span class="sensor-link-model">${s.name}</span>
        <span class="sensor-link-serial" style="color:var(--txt3)">${s.area?s.area+" ha":""}</span>
        <button class="remove-plot-btn icon-btn" data-id="${s.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
      </div>
    `).join(""):i+='<div class="panel-empty" style="margin-bottom:6px">Aucune parcelle liée</div>',l.length&&(i+=`
      <div class="panel-add-row">
        <select id="add-plot-select" class="panel-add-select">
          <option value="">Ajouter une parcelle…</option>
          ${l.map(s=>`<option value="${s.id}">${s.name}${s.area?" — "+s.area+" ha":""}</option>`).join("")}
        </select>
        <button id="add-plot-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `),e.innerHTML=i,e.querySelectorAll(".remove-plot-btn").forEach(s=>{s.addEventListener("click",()=>{C=C.filter(m=>m!==parseInt(s.dataset.id)),z(S,{linkedPlotIds:C}),ie()})}),(o=document.getElementById("add-plot-btn"))==null||o.addEventListener("click",()=>{const s=parseInt(document.getElementById("add-plot-select").value);!s||C.includes(s)||(C.push(s),z(S,{linkedPlotIds:C}),ie())})}function Ye(){document.getElementById("panel-actions").innerHTML=`
    <button class="action-btn"><i class="bi bi-download"></i> Exporter les données</button>
    <button class="action-btn action-btn--danger"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `}function Qe(){const e=[{type:"installation",label:"Installation initiale",date:"15/01/2023",user:"Technicien Weenat",icon:"bi-box-arrow-in-down"},{type:"nettoyage",label:"Nettoyage pluviomètre",date:"20/03/2023",user:"Agriculteur",icon:"bi-droplet"},{type:"batterie",label:"Changement de batterie",date:"10/06/2023",user:"Technicien Weenat",icon:"bi-battery-charging"},{type:"note",label:"Redressage capteur déplacé",date:"02/11/2023",user:"Agriculteur",icon:"bi-chat-text"}];document.getElementById("panel-maint").innerHTML=`
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
  `}let P=te.filter(e=>{var t,a;return d.parcelId?(t=e.parcelIds)==null?void 0:t.includes(d.parcelId):(a=e.orgIds)==null?void 0:a.includes(d.orgId)}).map(e=>e.id);function se(e){const t=document.getElementById("panel-membres");if(!t)return;const a=te.filter(i=>P.includes(i.id));a.length?t.innerHTML=a.map(i=>`
      <div class="member-row">
        <div>
          <span class="member-name">${i.prenom} ${i.nom}</span>
          <span class="member-role-badge">${i.role}</span>
        </div>
        <button class="remove-membre-btn icon-btn" data-id="${i.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""):t.innerHTML='<p class="panel-empty">Aucun membre associé.</p>';const n=document.getElementById("add-membre-select");n&&(n.innerHTML='<option value="">Ajouter un membre…</option>',te.filter(i=>!P.includes(i.id)).forEach(i=>{const r=document.createElement("option");r.value=i.id,r.textContent=`${i.prenom} ${i.nom} (${i.role})`,n.appendChild(r)})),t.querySelectorAll(".remove-membre-btn").forEach(i=>{i.addEventListener("click",()=>{P=P.filter(r=>r!==parseInt(i.dataset.id)),se()})});const l=document.getElementById("add-membre-btn");l&&(l.onclick=()=>{const i=parseInt(document.getElementById("add-membre-select").value);!i||P.includes(i)||(P.push(i),se())})}function Ze(){const e=D.find(l=>l.id===d.parcelId),t=e?ee.find(l=>l.id===e.orgId):null;if(!(t!=null&&t.lat))return;const a=L.map("sensor-mini-map",{zoomControl:!1,attributionControl:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(a);const n=e==null?void 0:e.latlngs;if(Array.isArray(n)&&n.length>=3){const l=L.polygon(n,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.25}).addTo(a);a.fitBounds(l.getBounds(),{padding:[10,10]})}else a.setView([t.lat,t.lng],13),L.circleMarker([t.lat,t.lng],{radius:6,color:"white",fillColor:"var(--pri)",fillOpacity:1,weight:2}).addTo(a)}function Je(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),a=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",a.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}
