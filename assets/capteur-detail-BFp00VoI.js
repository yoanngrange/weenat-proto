import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{s as X}from"./sensors-C_yA0hbg.js";import{p as G}from"./plots-kiLnwOqV.js";import{o as ne}from"./orgs-Cx4wNzLL.js";import{m as ae}from"./members-DEd9yWse.js";import{u as ve}from"./breadcrumb-DEBQjfiD.js";import{a as fe,p as J}from"./store-DzkjdUGR.js";const Ee=new URLSearchParams(window.location.search),P=parseInt(Ee.get("id")),d=X.find(e=>e.id===P),be={pluie:{name:"Pluie",unit:"mm",color:"#45b7d1",baseVal:()=>c(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0},temperature:{name:"Température",unit:"°C",color:"#e07050",baseVal:()=>c(10,28),cumul:{label:"Degrés-jours (DJC)",unit:"°j"}},humidite_air:{name:"Humidité",unit:"%",color:"#4ecdc4",baseVal:()=>c(40,90)},dpv:{name:"DPV",unit:"kPa",color:"#a8d8b0",baseVal:()=>Q(.1,2.5)},vent_vitesse:{name:"Vent – vitesse",unit:"km/h",color:"#7bc4b0",baseVal:()=>c(0,40)},vent_rafales:{name:"Vent – rafales",unit:"km/h",color:"#5aa490",baseVal:()=>c(5,60)},vent_direction:{name:"Vent – direction",unit:"°",color:"#3a8070",baseVal:()=>c(0,360)},vent_direction_rafales:{name:"Vent – direction rafales",unit:"°",color:"#1a6050",baseVal:()=>c(0,360)},rayonnement:{name:"Rayonnement",unit:"W/m²",color:"#f5c842",baseVal:()=>c(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}},etp:{name:"ETP",unit:"mm/j",color:"#c090e0",baseVal:()=>Q(.5,5),cumul:{label:"Cumul ETP",unit:"mm"}},temperature_min:{name:"Température min",unit:"°C",color:"#90b0e0",baseVal:()=>c(-2,15),cumul:{label:"Heures de froid",unit:"h"}},humidite_sol_10:{name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#f0cc60",baseVal:()=>c(15,45)},humidite_sol_20:{name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#dab448",baseVal:()=>c(15,45)},humidite_sol_30:{name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#c09830",baseVal:()=>c(15,45)},humidite_sol_40:{name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#a87c18",baseVal:()=>c(17,43)},humidite_sol_50:{name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#906200",baseVal:()=>c(18,42)},humidite_sol_60:{name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#784800",baseVal:()=>c(18,42)},humidite_sol_90:{name:"Teneur en eau du sol 90 cm",unit:"%vol",color:"#603000",baseVal:()=>c(20,40)},temp_sol:{name:"Température du sol",unit:"°C",color:"#bb8fce",baseVal:()=>c(8,22)},potentiel_hydrique:{name:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",baseVal:()=>{const e=new Date().getMonth();return Math.round(10+(.5-.5*Math.cos(2*Math.PI*e/12))*140)}},tensio_30:{name:"Tension sol 30 cm",unit:"cbar",color:"#98d8c8",baseVal:()=>c(10,80)},tensio_60:{name:"Tension sol 60 cm",unit:"cbar",color:"#78b8a8",baseVal:()=>c(10,80)},tensio_90:{name:"Tension sol 90 cm",unit:"cbar",color:"#589888",baseVal:()=>c(10,80)},tensio_120:{name:"Tension sol 120 cm",unit:"cbar",color:"#387868",baseVal:()=>c(10,80)},tensio_150:{name:"Tension sol 150 cm",unit:"cbar",color:"#185848",baseVal:()=>c(10,80)},tensio_180:{name:"Tension sol 180 cm",unit:"cbar",color:"#003828",baseVal:()=>c(10,80)},conductivite:{name:"Conductivité",unit:"mS/cm",color:"#f0a030",baseVal:()=>Q(.1,3)},humectation:{name:"Humectation foliaire",unit:"h",color:"#78d8a0",baseVal:()=>c(0,12)},par:{name:"PAR",unit:"µmol/m²/s",color:"#f8e840",baseVal:()=>c(0,2e3)},temperature_gel:{name:"Temp. feuille/gel",unit:"°C",color:"#a0d8a0",baseVal:()=>c(-3,12),cumul:{label:"Heures de gel",unit:"h"}},temp_rosee:{name:"Température de rosée",unit:"°C",color:"#7ec8e0",baseVal:()=>c(4,16)},temp_seche:{name:"Température sèche",unit:"°C",color:"#e07050",baseVal:()=>c(-5,10)},temp_humide:{name:"Température humide",unit:"°C",color:"#60b8d0",baseVal:()=>c(-7,8)}},Te={"P+":["pluie","temperature","humidite_air"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite_air"],T_MINI:["temp_sol"],W:["_vent"],"CHP-15/30":["potentiel_hydrique","temp_sol"],"CHP-30/60":["potentiel_hydrique","temp_sol"],"CHP-60/90":["humidite_sol_60","humidite_sol_90","temp_sol"],"CAPA-30-3":["_capa_vwc","_capa_temp"],"CAPA-60-6":["_capa_vwc","_capa_temp"],EC:["humidite_sol_30","temp_sol","conductivite"],LWS:["_lws_intensite","_lws_duree"],PYRANO:["rayonnement"],PAR:["par"],T_GEL:["temp_seche","temp_humide"]},ce={_capa_vwc:{name:"Humidité sol par horizon",unit:"%vol",color:"#4e9fd4",isVirtual:!0},_capa_temp:{name:"Température du sol par horizon",unit:"°C",color:"#bb8fce",isVirtual:!0},_lws_intensite:{name:"Intensité d'humectation",unit:"mV",color:"#78d8a0",isVirtual:!0},_lws_duree:{name:"Durée d'humectation",unit:"h",color:"#45c090",isVirtual:!0},_vent:{name:"Vent",unit:"km/h",color:"#7bc4b0",isVirtual:!0}},ye={"CAPA-30-3":[{id:"humidite_sol_10",label:"10 cm",color:"#f0cc60"},{id:"humidite_sol_20",label:"20 cm",color:"#c89c30"},{id:"humidite_sol_30",label:"30 cm",color:"#a07010"}],"CAPA-60-6":[{id:"humidite_sol_10",label:"10 cm",color:"#f0d070"},{id:"humidite_sol_20",label:"20 cm",color:"#d8b050"},{id:"humidite_sol_30",label:"30 cm",color:"#c09030"},{id:"humidite_sol_40",label:"40 cm",color:"#a87010"},{id:"humidite_sol_50",label:"50 cm",color:"#905200"},{id:"humidite_sol_60",label:"60 cm",color:"#783400"}]};function c(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Q(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}function B(e){return(Te[e.model]||["temperature","humidite_air"]).map(s=>{if(ce[s])return{id:s,...ce[s],current:null};const n=be[s];return n?{id:s,...n,current:n.baseVal()}:null}).filter(Boolean)}let V=null,A="7d",O=null,W=null;function ge(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return A==="custom"&&O&&W?Math.max(60,Math.round((W-O)/6e4)):e[A]??10080}function K(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Ie(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function re(){const e=ge(),t=K();return Math.max(2,Math.min(200,Math.floor(e/t)))}document.addEventListener("DOMContentLoaded",()=>{var e;if(!d){document.body.innerHTML='<div style="padding:40px"><h1>Capteur non trouvé</h1></div>';return}ve(`Capteur ${d.serial}`,{label:"Capteurs",href:"capteurs.html"}),Le(),F(),Oe(),tt(),Re(),Ne(),et(),(e=document.getElementById("btn-export-csv"))==null||e.addEventListener("click",Qe)});function Le(){var s,n;const e=document.getElementById("latest-strip");if(!e)return;const t=B(d);if(t.forEach(i=>{if(i.isVirtual)return;const a=document.createElement("div");a.className="latest-card",a.style.borderTop=`3px solid ${i.color}`,a.innerHTML=`
      <div class="latest-card-name">${i.name}</div>
      <div class="latest-card-value">${i.current}<span class="latest-card-unit"> ${i.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `,a.style.cursor="default",e.appendChild(a)}),d.model==="TH"){const i=((s=t.find(l=>l.id==="temperature"))==null?void 0:s.current)||20,a=((n=t.find(l=>l.id==="humidite_air"))==null?void 0:n.current)||60,r=(i-(.55-.55*a/100)*(i-14.5)).toFixed(1),o=document.createElement("div");o.className="latest-card",o.style.borderTop="3px solid #e8a030",o.innerHTML=`
      <div class="latest-card-name">THI (Thermal Humidity Index)</div>
      <div class="latest-card-value">${r}<span class="latest-card-unit"> index</span></div>
      <div class="latest-card-ts">T-(0.55-0.55×HR/100)×(T-14.5)</div>
    `,o.style.cursor="default",e.appendChild(o)}}function $e(e){const t=document.createElement("div");t.className="chart-card",t.dataset.base=e.current,t.dataset.color=e.color,t.dataset.cumul=e.isCumul?"1":"",t.dataset.metricId=e.id,t.dataset.metricName=e.name,t.dataset.metricUnit=e.unit;const s=e.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${e.cumul.label}</span><span class="chart-cumul-value">${qe(e)} ${e.cumul.unit}</span></div>`:"",i=e.id==="temperature"||e.id==="temperature_min"?Se(e.id):"";return t.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${e.color}">${e.name}</span>
      <span class="chart-card-unit">${e.unit}</span>
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${s}
    ${i}
  `,t}function ke(e,t){B(t).forEach(n=>{if(n.isVirtual){xe(e,n,t);return}e.appendChild($e(n))})}function de(e,t,s){t.isVirtual?xe(e,t,s):e.appendChild($e(t))}function F(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",V){e.className="compare-rows";const s=X.find(l=>l.id===V),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${d.model} — ${d.serial}</span></div>
      <div class="compare-col-header">
        <span>${s?`${s.model} — ${s.serial}`:"Capteur"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{V=null,ee(),F()});const i=B(d),a=s?B(s):[],r=i.map(l=>l.id);[...r,...a.map(l=>l.id).filter(l=>!r.includes(l))].forEach(l=>{const m=i.find(x=>x.id===l),v=a.find(x=>x.id===l),u=document.createElement("div");u.className="compare-row";const p=document.createElement("div");m?de(p,m,d):p.innerHTML='<div class="compare-chart-empty">—</div>';const b=document.createElement("div");v?de(b,v,s):b.innerHTML='<div class="compare-chart-empty">—</div>',u.appendChild(p),u.appendChild(b),e.appendChild(u)})}else e.className="charts-stack",ke(e,d);Fe(),Ve()}function Se(e){const t=e==="temperature_min",s=Math.round(Math.random()*200+50),n=Math.round(Math.random()*400+100);return`
    <div class="temp-threshold-row" data-metric="${e}">
      <div class="temp-threshold-stat">
        <i class="bi bi-snow"></i>
        <span class="temp-threshold-val">${s} h</span>
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
  `}function Ve(){document.querySelectorAll(".temp-thresh-input").forEach(e=>{e.addEventListener("change",()=>{var i,a;const t=e.closest(".temp-threshold-row"),s=e.dataset.type;parseFloat(e.value);const n=(a=(i=t.querySelector(`.temp-threshold-stat [data-type="${s}"]`))==null?void 0:i.closest(".temp-threshold-stat"))==null?void 0:a.querySelector(".temp-threshold-val");n&&(s==="cold"?n.textContent=`${Math.round(Math.random()*150+30)} h`:n.textContent=`${Math.round(Math.random()*350+80)} °j`)})})}function He(e){const t=re(),s=Array.from({length:t},()=>c(5,35)),n=s.map(f=>Math.min(f+c(3,18),80)),i=Array.from({length:t},()=>c(0,359)),a=600,r=200,o=46,l=16,m=16,v=28,u=a-o-l,p=r-m-v,b=Math.ceil(Math.max(...n)/10)*10||50,x=f=>o+f/Math.max(t-1,1)*u,C=f=>m+p-f/b*p,j=n.map((f,$)=>`${x($).toFixed(1)},${C(f).toFixed(1)}`).join("L"),E=[...s].reverse().map((f,$)=>`${x(t-1-$).toFixed(1)},${C(f).toFixed(1)}`).join("L"),D=`M${j}L${E}Z`,h=s.map((f,$)=>`${$?"L":"M"}${x($).toFixed(1)},${C(f).toFixed(1)}`).join(""),g=[.25,.5,.75].map(f=>{const $=(m+p-f*p).toFixed(1);return`<line x1="${o}" y1="${$}" x2="${a-l}" y2="${$}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),w=[0,.5,1].map(f=>{const $=m+p-f*p;return`<text x="${o-4}" y="${($+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(f*b)}</text>`}).join(""),I=Math.max(1,Math.round(t/25)),q=[];for(let f=0;f<t;f+=I){const $=x(f).toFixed(1),Y=(m+p*.35).toFixed(1);q.push(`<g transform="translate(${$},${Y}) rotate(${i[f]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const _=document.createElement("div");_.className="chart-card",_.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
    </div>
    <svg width="100%" height="${r}" viewBox="0 0 ${a} ${r}" preserveAspectRatio="none">
      ${w}${g}
      <path d="${D}" fill="#7bc4b0" opacity=".18"/>
      <path d="${h}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${q.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(_)}function xe(e,t,s){if(t.id==="_vent"){He(e);return}const n=document.createElement("div");if(n.className="chart-card chart-card--multi",t.id==="_capa_vwc"||t.id==="_capa_temp"){const i=ye[s.model]||[],a=t.id==="_capa_vwc",r=a?"Humidité sol par horizon":"Température du sol par horizon",o=a?"%vol":"°C",l=i.map(m=>`<span class="multi-legend-dot" style="background:${m.color}"></span><span class="multi-legend-label">${m.label}</span>`).join("");n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${t.color}">${r}</span>
        <span class="chart-card-unit">${o}</span>
      </div>
      <div class="multi-chart-legend">${l}</div>
      <svg class="chart-svg chart-svg--multi" width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none"
           data-virtual="${t.id}" data-model="${s.model}"></svg>
    `,e.appendChild(n),requestAnimationFrame(()=>we(n.querySelector(".chart-svg--multi"),i,a));return}if(t.id==="_lws_intensite"||t.id==="_lws_duree"){const i=t.id==="_lws_intensite",a=i?"Intensité d'humectation":"Durée d'humectation",r=i?"mV":"h",o=i?"#78d8a0":"#45c090",l=i?c(0,800):c(0,12),m=i?"humectation":"lws_duree";n.dataset.base=l,n.dataset.color=o,n.dataset.cumul="",n.dataset.metricId=m,n.dataset.metricName=a,n.dataset.metricUnit=r,n.classList.remove("chart-card--multi"),n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${o}">${a}</span>
        <span class="chart-card-unit">${r}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    `,e.appendChild(n)}}function we(e,t,s){const n=re(),i=K(),a=600,r=200,o={t:14,r:10,b:28,l:46},l=a-o.l-o.r,m=r-o.t-o.b,v=t.map(h=>{var I;const g=s?h.id:"temp_sol",w=((I=be[g])==null?void 0:I.baseVal())||25;return{color:h.color,label:h.label,vals:Array.from({length:n},(q,_)=>{const f=(n-1-_)*i,$=t.indexOf(h)*1.5;return Math.max(0,ie(g,w+$,f))})}}),u=v.flatMap(h=>h.vals),p=Math.min(...u),b=Math.max(...u),x=b-p||1,C=h=>o.l+h/Math.max(n-1,1)*l,j=h=>o.t+m-(h-p)/x*m;let E="<defs></defs>";for(let h=0;h<=4;h++){const g=o.t+h/4*m,w=b-h/4*x,I=Math.abs(w)>=100?w.toFixed(0):w.toFixed(1);E+=`<line x1="${o.l}" y1="${g.toFixed(1)}" x2="${a-o.r}" y2="${g.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,E+=`<text x="${o.l-5}" y="${(g+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${I}</text>`}const D=Math.max(1,Math.floor(n/6));for(let h=0;h<n;h+=D){const g=C(h).toFixed(1);E+=`<line x1="${g}" y1="${o.t}" x2="${g}" y2="${o.t+m}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,E+=`<text x="${g}" y="${r-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${se((n-h)*i)}</text>`}v.forEach(h=>{const g=h.vals.map((w,I)=>({x:C(I),y:j(w)}));E+=`<path d="${_e(g)}" fill="none" stroke="${h.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}),e.innerHTML=E}let U=null;function Ae(){return U||(U=document.createElement("div"),U.className="chart-tooltip",document.body.appendChild(U)),U}function Pe(e,t){return t==="temperature"||t==="temperature_min"?["#6eb4d4","#e07050"]:t==="temperature_gel"?["#a0d8f0","#6090d0"]:[Be(e,.55),e]}function Be(e,t){const s=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16);return`#${Math.round(s+(255-s)*t).toString(16).padStart(2,"0")}${Math.round(n+(255-n)*t).toString(16).padStart(2,"0")}${Math.round(i+(255-i)*t).toString(16).padStart(2,"0")}`}function _e(e){if(e.length<2)return"";let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let s=0;s<e.length-1;s++){const n=e[Math.max(s-1,0)],i=e[s],a=e[s+1],r=e[Math.min(s+2,e.length-1)],o=i.x+(a.x-n.x)/6,l=i.y+(a.y-n.y)/6,m=a.x-(r.x-i.x)/6,v=a.y-(r.y-i.y)/6;t+=` C${o.toFixed(1)},${l.toFixed(1)} ${m.toFixed(1)},${v.toFixed(1)} ${a.x.toFixed(1)},${a.y.toFixed(1)}`}return t}function se(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Fe(){const e=re(),t=K();document.querySelectorAll(".chart-card").forEach(s=>{const n=s.querySelector(".chart-svg:not(.chart-svg--multi)");if(!n)return;const i=parseFloat(s.dataset.base),a=s.dataset.color,r=s.dataset.cumul==="1",o=s.dataset.metricId||"",l=s.dataset.metricName||"",m=s.dataset.metricUnit||"";De(n,i,a,e,t,r,o,l,m)}),document.querySelectorAll(".chart-svg--multi").forEach(s=>{const n=s.dataset.model,i=s.dataset.virtual,a=ye[n]||[],r=i==="_capa_vwc";a.length&&we(s,a,r)})}function ue(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function je(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function me(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function ie(e,t,s,n=.15){const i=ue(s),a=me(i),r=je(i),o=()=>1+(Math.random()-.5)*2*n;switch(e){case"temperature":case"temperature_min":return(t-6+a*12)*o();case"temperature_gel":return(t-4+a*8)*o();case"temp_sol":{const l=ue(s+120);return(t-3+me(l)*6)*o()}case"humidite_air":{const l=t+(1-a)*25-a*15;return Math.min(100,Math.max(20,l*o()))}case"rayonnement":case"par":{const l=r*t*1.3;return Math.max(0,l*o())}case"etp":{const l=r*t*1.5;return Math.max(0,l*o())}case"dpv":{const l=r*t*1.4+.05;return Math.max(0,l*o())}case"temp_rosee":{const m=t-6+a*12-2,v=t-8+a*6;return Math.min(m,v)*o()}case"lws_duree":{const l=Math.max(0,.9-r*1.1);return Math.max(0,t*l*o())}case"humectation":{const l=Math.max(0,.8-r*1.2),m=t*l;return Math.max(0,m*o())}case"potentiel_hydrique":return Math.max(5,Math.min(195,t*o()));case"humidite_sol_10":case"humidite_sol_20":case"humidite_sol_30":case"humidite_sol_40":case"humidite_sol_50":case"humidite_sol_60":case"humidite_sol_90":return Math.max(5,t*o());case"tensio_30":case"tensio_60":case"tensio_90":case"tensio_120":case"tensio_150":case"tensio_180":return Math.max(5,t*o());case"conductivite":{const l=20+a*10+(Math.random()-.5)*8;return l<15?0:Math.max(0,(l-15)*.08*o())}case"pluie":return Math.random()<.15?t*Math.random()*2:0;case"vent_vitesse":case"vent_rafales":{const l=t*(.6+r*.8)*o();return Math.max(0,l)}case"vent_direction":case"vent_direction_rafales":return(t+(Math.random()-.5)*60+360)%360;default:return Math.max(0,t*o())}}function De(e,t,s,n,i,a,r="",o="",l=""){const u={t:14,r:10,b:28,l:46},p=600-u.l-u.r,b=180-u.t-u.b,x=Math.max(1,Math.round(i/15)),C=Array.from({length:n},(y,M)=>{const k=(n-1-M)*i;if(a){let R=0;for(let H=0;H<x;H++)R+=ie(r,t/x,k+H*(i/x));return R}else return ie(r,t,k)}),j=Math.min(...C),E=Math.max(...C),D=E-j||1,h=y=>u.l+y/Math.max(n-1,1)*p,g=y=>u.t+b-(y-j)/D*b,w=`sg_${Math.random().toString(36).slice(2)}`,[I,q]=Pe(s,r);let _=`<defs>
    <linearGradient id="${w}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${I}"/>
      <stop offset="100%" stop-color="${q}"/>
    </linearGradient>
    <clipPath id="clip_${w}">
      <rect x="${u.l}" y="${u.t}" width="${p}" height="${b}"/>
    </clipPath>
  </defs>`;for(let y=0;y<=4;y++){const M=u.t+y/4*b,k=E-y/4*D,R=Math.abs(k)>=100?k.toFixed(0):Math.abs(k)>=10?k.toFixed(1):k.toFixed(2);_+=`<line x1="${u.l}" y1="${M.toFixed(1)}" x2="${600-u.r}" y2="${M.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,_+=`<text x="${u.l-5}" y="${(M+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${R}</text>`}const f=Math.max(1,Math.floor(n/6));for(let y=0;y<n;y+=f){const M=h(y).toFixed(1);_+=`<line x1="${M}" y1="${u.t}" x2="${M}" y2="${u.t+b}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,_+=`<text x="${M}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${se((n-y)*i)}</text>`}const $=C.map((y,M)=>({x:h(M),y:g(y)})),Y=_e($),Me=Y+` L${h(n-1).toFixed(1)},${u.t+b} L${u.l.toFixed(1)},${u.t+b} Z`;_+=`<path d="${Me}" fill="${q}" opacity="0.07" clip-path="url(#clip_${w})"/>`,_+=`<path d="${Y}" fill="none" stroke="url(#${w})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${w})"/>`,_+=`<rect class="chart-hover-rect" x="${u.l}" y="${u.t}" width="${p}" height="${b}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=_;const z=Ae(),te=e.querySelector(".chart-hover-rect");if(!te)return;const T=document.createElementNS("http://www.w3.org/2000/svg","circle");T.setAttribute("r","4"),T.setAttribute("fill",s),T.setAttribute("stroke","#fff"),T.setAttribute("stroke-width","1.5"),T.style.display="none",T.style.pointerEvents="none",e.appendChild(T),te.addEventListener("mousemove",y=>{const M=e.getBoundingClientRect(),k=(y.clientX-M.left)*(600/M.width),R=Math.max(0,Math.min(1,(k-u.l)/p)),H=Math.round(R*(n-1));if(H<0||H>=C.length)return;const Z=C[H];T.setAttribute("cx",h(H)),T.setAttribute("cy",g(Z)),T.style.display="";const Ce=Math.abs(Z)>=100?Z.toFixed(1):Z.toFixed(2);z.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${o}</div>
      <div class="chart-tooltip-val" style="color:${s}">${Ce} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${l}</span></div>
      <div class="chart-tooltip-ts">${se((n-H)*i)}</div>
    `,z.style.display="block",z.style.left=`${Math.min(y.clientX+12,window.innerWidth-160)}px`,z.style.top=`${y.clientY-10}px`}),te.addEventListener("mouseleave",()=>{z.style.display="none",T.style.display="none"})}function qe(e){const s={pluie:()=>c(20,120),temperature:()=>c(80,400),rayonnement:()=>c(500,3e3),etp:()=>Q(15,80),temperature_min:()=>c(50,500),temperature_gel:()=>c(0,80)}[e.id];return s?s():"—"}function Re(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),s=document.getElementById("time-step"),n=new Date,i=new Date(n-7*864e5);document.getElementById("date-from").value=i.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",a=>{const r=a.target.closest(".period-preset-btn");r&&(e.querySelectorAll(".period-preset-btn").forEach(o=>o.classList.remove("active")),r.classList.add("active"),A=r.dataset.period,A==="custom"?t.style.display="flex":(t.style.display="none",s&&(s.value=Ie(A)),F()))}),document.getElementById("date-from").addEventListener("change",pe),document.getElementById("date-to").addEventListener("change",pe),s.addEventListener("change",F)}function pe(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(O=new Date(e),W=new Date(t+"T23:59:59"),O<W&&F())}function Ne(){ee()}function ee(){var t,s,n;const e=document.getElementById("compare-control");if(e)if(V){const i=X.find(r=>r.id===V),a=i?`${i.model} — ${i.serial}`:"Capteur";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${a} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(t=e.querySelector(".compare-clear-icon"))==null||t.addEventListener("click",r=>{r.stopPropagation(),V=null,ee(),F()}),(s=e.querySelector("#compare-open-btn"))==null||s.addEventListener("click",he)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",he)}function he(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),s=X.filter(a=>a.id!==P),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher un capteur…">
    <div class="compare-dropdown-list">
      ${s.map(a=>`<div class="compare-dropdown-item${a.id===V?" active":""}" data-id="${a.id}"><i class="bi bi-broadcast"></i> ${a.model} — ${a.serial}</div>`).join("")}
    </div>
  `,t.appendChild(n);const i=n.querySelector(".compare-search-input");i.focus(),i.addEventListener("input",a=>{const r=a.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(o=>{o.style.display=o.textContent.toLowerCase().includes(r)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(a=>{a.addEventListener("click",()=>{V=parseInt(a.dataset.id),n.remove(),ee(),F()})}),setTimeout(()=>{document.addEventListener("click",function a(r){!n.contains(r.target)&&!t.contains(r.target)&&(n.remove(),document.removeEventListener("click",a))})},0)}function Oe(){var i,a,r;const e=G.find(o=>o.id===d.parcelId),t=e?ne.find(o=>o.id===e.orgId):d.orgId?ne.find(o=>o.id===d.orgId):null,s=fe(P);We(e,t,s),oe(),ze(e,t),Ue(),Ge(),Xe(),Ye(),((i=document.getElementById("sidebar"))==null?void 0:i.getAttribute("data-role"))==="adherent-reseau"?(r=(a=document.getElementById("panel-membres"))==null?void 0:a.closest(".panel-section"))==null||r.style.setProperty("display","none"):le(),Je(),Ke()}function We(e,t,s){let n=s.label||`Capteur ${d.serial}`;const i=document.getElementById("panel-ident");i.innerHTML=`
    <div class="panel-row" data-field="label">
      <span class="panel-row-key">Nom</span>
      <input type="text" class="panel-field-input" data-val value="${n.replace(/"/g,"&quot;")}">
    </div>
    <div class="panel-row"><span class="panel-row-key">Modèle</span><span class="panel-row-val">${d.model}</span></div>
    <div class="panel-row"><span class="panel-row-key">Numéro série</span><span class="panel-row-val">${d.serial}</span></div>
    <div class="panel-row"><span class="panel-row-key">Réseau télécom</span><span class="panel-row-val">${d.telecom||"Sigfox"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Exploitation</span><span class="panel-row-val">${t?t.name:"—"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Date d'ajout</span><span class="panel-row-val">15/01/2023</span></div>
  `;const a=i.querySelector('[data-field="label"] input');if(a){const r=()=>{const o=a.value.trim();o&&o!==n&&(n=o,J(P,{label:o}),ve(o,{label:"Capteurs",href:"capteurs.html"}))};a.addEventListener("change",r),a.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),a.blur())})}}function ze(e,t){const s=(t==null?void 0:t.ville)||"—",n=(t==null?void 0:t.departement)||"",i=(e==null?void 0:e.lat)??null,a=(e==null?void 0:e.lng)??null;document.getElementById("panel-loc").innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${s}${n?` (${n})`:""}</span>
    </div>
    ${e?`<div class="panel-row"><span class="panel-row-key">Parcelle</span><span class="panel-row-val">${e.name} — ${e.area} ha</span></div>`:""}
    ${i!=null?`<div class="panel-row"><a href="https://www.google.com/maps?q=${i.toFixed(6)},${a.toFixed(6)}" target="_blank" class="itinerary-link"><i class="bi bi-signpost-2"></i> Obtenir l'itinéraire</a></div>`:""}
  `}function Ue(){const e=d.networkQuality||80,t=d.messages7d||85,s=e>=80?"var(--ok)":e>=60?"var(--warn)":"var(--err)";document.getElementById("panel-signal").innerHTML=`
    <div class="signal-bar-wrap">
      <div class="signal-bar-track">
        <div class="signal-bar-fill" style="width:${e}%;background:${s}"></div>
      </div>
      <span class="signal-bar-pct" style="color:${s}">${e}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Messages / 7 j</span>
      <span class="panel-row-val">${t}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Opérateur</span>
      <span class="panel-row-val">${d.telecom||"Sigfox"}</span>
    </div>
  `}function Ge(){const e=document.getElementById("panel-events");d.event?e.innerHTML=`
      <div class="event-item event-item--warn">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <div>
          <div class="event-item-label">${d.event}</div>
          <div class="event-item-date">Depuis le 28/03/2026</div>
        </div>
      </div>
    `:e.innerHTML='<div class="panel-empty"><i class="bi bi-check-circle" style="color:var(--ok)"></i> Aucun événement</div>'}function Xe(){const e=B(d);document.getElementById("panel-metrics").innerHTML=e.map(t=>`
    <div class="metric-pill-row">
      <span class="metric-dot" style="background:${t.color}"></span>
      <span class="metric-pill-name">${t.name}</span>
      <span class="metric-pill-unit">${t.unit}</span>
    </div>
  `).join("")}function Ye(){const e=document.getElementById("panel-config");if(!e)return;const t=d.model||"",s=t.startsWith("CHP"),n=t.startsWith("CAPA"),i=t==="EC",a=d.isVirtual;let r="";if(a&&(r+=`
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
    `),s){const o=t==="CHP-15/30"?[15,30]:t==="CHP-30/60"?[30,60]:[60,90],l=d.depth??o[0];r+=`
      <div class="config-section">
        <div class="config-section-title">Profondeur d'installation</div>
        <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">
          Ce modèle peut être installé de ${o[0]} à ${o[1]} cm.
        </div>
        <div class="form-row">
          <label>Profondeur</label>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="chp-depth-input" class="inline-edit" value="${l}" step="5" min="${o[0]}" max="${o[1]}" style="width:70px">
            <span style="font-size:12px;color:var(--txt2)">cm</span>
          </div>
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `}(n||i)&&(r+=`
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
    `),r?e.innerHTML=r:e.innerHTML='<div class="panel-empty">Pas de configuration spécifique pour ce modèle.</div>'}let S=G.filter(e=>e.orgId===d.orgId&&e.id===d.parcelId).map(e=>e.id);(function(){const t=fe(P);t.linkedPlotIds?S=t.linkedPlotIds:J(P,{linkedPlotIds:S})})();function oe(){var r,o;const e=document.getElementById("panel-plots");if(!e)return;const t=d.orgId||((r=G.find(l=>l.id===d.parcelId))==null?void 0:r.orgId),s=G.filter(l=>l.orgId===t),n=s.filter(l=>S.includes(l.id)),i=s.filter(l=>!S.includes(l.id));let a="";n.length?a+=n.map(l=>`
      <div class="sensor-linked-row">
        <span class="sensor-link-model">${l.name}</span>
        <span class="sensor-link-serial" style="color:var(--txt3)">${l.area?l.area+" ha":""}</span>
        <button class="remove-plot-btn icon-btn" data-id="${l.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
      </div>
    `).join(""):a+='<div class="panel-empty" style="margin-bottom:6px">Aucune parcelle liée</div>',i.length&&(a+=`
      <div class="panel-add-row">
        <select id="add-plot-select" class="panel-add-select">
          <option value="">Ajouter une parcelle…</option>
          ${i.map(l=>`<option value="${l.id}">${l.name}${l.area?" — "+l.area+" ha":""}</option>`).join("")}
        </select>
        <button id="add-plot-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `),e.innerHTML=a,e.querySelectorAll(".remove-plot-btn").forEach(l=>{l.addEventListener("click",()=>{S=S.filter(m=>m!==parseInt(l.dataset.id)),J(P,{linkedPlotIds:S}),oe()})}),(o=document.getElementById("add-plot-btn"))==null||o.addEventListener("click",()=>{const l=parseInt(document.getElementById("add-plot-select").value);!l||S.includes(l)||(S.push(l),J(P,{linkedPlotIds:S}),oe())})}function Ze(e,t){const s=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(s),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function Qe(){const e=B(d).filter(v=>v.baseVal);let t;if(V){const v=X.find(p=>p.id===V),u=v?B(v).filter(p=>p.baseVal):[];t=[...e.map(p=>({h:`[${d.serial}] ${p.name} (${p.unit})`,gen:p.baseVal})),...u.map(p=>({h:`[${v.serial}] ${p.name} (${p.unit})`,gen:p.baseVal}))]}else t=e.map(v=>({h:`${v.name} (${v.unit})`,gen:v.baseVal}));const s=ge()*6e4,n=K()*6e4,i=A==="custom"&&W?W:new Date,a=A==="custom"&&O?O:new Date(i-s),r=Math.min(Math.ceil((i-a)/n)+1,500),o=(i-a)/Math.max(r-1,1),l=["Horodatage",...t.map(v=>v.h)].join(";"),m=Array.from({length:r},(v,u)=>[new Date(a.getTime()+u*o).toISOString().replace("T"," ").slice(0,19),...t.map(b=>b.gen())].join(";"));Ze([l,...m].join(`\r
`),`${d.serial}_${A}_${new Date().toISOString().slice(0,10)}.csv`)}function Je(){document.getElementById("panel-actions").innerHTML=`
    <button class="action-btn action-btn--danger"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `}function Ke(){const e=[{type:"installation",label:"Installation initiale",date:"15/01/2023",user:"Technicien Weenat",icon:"bi-box-arrow-in-down"},{type:"nettoyage",label:"Nettoyage pluviomètre",date:"20/03/2023",user:"Agriculteur",icon:"bi-droplet"},{type:"batterie",label:"Changement de batterie",date:"10/06/2023",user:"Technicien Weenat",icon:"bi-battery-charging"},{type:"note",label:"Redressage capteur déplacé",date:"02/11/2023",user:"Agriculteur",icon:"bi-chat-text"}];document.getElementById("panel-maint").innerHTML=`
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
  `}let N=ae.filter(e=>{var t,s;return d.parcelId?(t=e.parcelIds)==null?void 0:t.includes(d.parcelId):(s=e.orgIds)==null?void 0:s.includes(d.orgId)}).map(e=>e.id);function le(e){const t=document.getElementById("panel-membres");if(!t)return;const s=ae.filter(a=>N.includes(a.id));s.length?t.innerHTML=s.map(a=>`
      <div class="member-row">
        <div>
          <span class="member-name">${a.prenom} ${a.nom}</span>
          <span class="member-role-badge">${a.role}</span>
        </div>
        <button class="remove-membre-btn icon-btn" data-id="${a.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""):t.innerHTML='<p class="panel-empty">Aucun membre associé.</p>';const n=document.getElementById("add-membre-select");n&&(n.innerHTML='<option value="">Ajouter un membre…</option>',ae.filter(a=>!N.includes(a.id)).forEach(a=>{const r=document.createElement("option");r.value=a.id,r.textContent=`${a.prenom} ${a.nom} (${a.role})`,n.appendChild(r)})),t.querySelectorAll(".remove-membre-btn").forEach(a=>{a.addEventListener("click",()=>{N=N.filter(r=>r!==parseInt(a.dataset.id)),le()})});const i=document.getElementById("add-membre-btn");i&&(i.onclick=()=>{const a=parseInt(document.getElementById("add-membre-select").value);!a||N.includes(a)||(N.push(a),le())})}function et(){const e=G.find(i=>i.id===d.parcelId),t=e?ne.find(i=>i.id===e.orgId):null;if(!(t!=null&&t.lat))return;const s=L.map("sensor-mini-map",{zoomControl:!1,attributionControl:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(s);const n=e==null?void 0:e.latlngs;if(Array.isArray(n)&&n.length>=3){const i=L.polygon(n,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.25}).addTo(s);s.fitBounds(i.getBounds(),{padding:[10,10]})}else s.setView([t.lat,t.lng],13),L.circleMarker([t.lat,t.lng],{radius:6,color:"white",fillColor:"var(--pri)",fillOpacity:1,weight:2}).addTo(s)}function tt(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),s=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",s.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}
