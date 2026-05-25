import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{s as U}from"./sensors-DDe0aa9W.js";import{p as O}from"./plots-2gWiFi4a.js";import{o as ae}from"./orgs-Cx4wNzLL.js";import{m as oe}from"./members-DEd9yWse.js";import{u as be}from"./breadcrumb-DEBQjfiD.js";import{a as ye,p as Q}from"./store-DzkjdUGR.js";const ke=new URLSearchParams(window.location.search),A=parseInt(ke.get("id")),d=U.find(e=>e.id===A),ge={pluie:{name:"Pluie",unit:"mm",color:"#45b7d1",baseVal:()=>m(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0},temperature:{name:"Température",unit:"°C",color:"#e07050",baseVal:()=>m(10,28),cumul:{label:"Degrés-jours (DJC)",unit:"°j"}},humidite_air:{name:"Humidité",unit:"%",color:"#4ecdc4",baseVal:()=>m(40,90)},dpv:{name:"DPV",unit:"kPa",color:"#a8d8b0",baseVal:()=>Z(.1,2.5)},vent_vitesse:{name:"Vent – vitesse",unit:"km/h",color:"#7bc4b0",baseVal:()=>m(0,40)},vent_rafales:{name:"Vent – rafales",unit:"km/h",color:"#5aa490",baseVal:()=>m(5,60)},vent_direction:{name:"Vent – direction",unit:"°",color:"#3a8070",baseVal:()=>m(0,360)},vent_direction_rafales:{name:"Vent – direction rafales",unit:"°",color:"#1a6050",baseVal:()=>m(0,360)},rayonnement:{name:"Rayonnement",unit:"W/m²",color:"#f5c842",baseVal:()=>m(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}},etp:{name:"ETP",unit:"mm/j",color:"#c090e0",baseVal:()=>Z(.5,5),cumul:{label:"Cumul ETP",unit:"mm"}},temperature_min:{name:"Température min",unit:"°C",color:"#90b0e0",baseVal:()=>m(-2,15),cumul:{label:"Heures de froid",unit:"h"}},humidite_sol_10:{name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#f0cc60",baseVal:()=>m(15,45)},humidite_sol_20:{name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#dab448",baseVal:()=>m(15,45)},humidite_sol_30:{name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#c09830",baseVal:()=>m(15,45)},humidite_sol_40:{name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#a87c18",baseVal:()=>m(17,43)},humidite_sol_50:{name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#906200",baseVal:()=>m(18,42)},humidite_sol_60:{name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#784800",baseVal:()=>m(18,42)},humidite_sol_90:{name:"Teneur en eau du sol 90 cm",unit:"%vol",color:"#603000",baseVal:()=>m(20,40)},temp_sol:{name:"Température du sol",unit:"°C",color:"#bb8fce",baseVal:()=>m(8,22)},potentiel_hydrique:{name:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",baseVal:()=>{const e=new Date().getMonth();return Math.round(10+(.5-.5*Math.cos(2*Math.PI*e/12))*140)}},tensio_30:{name:"Tension sol 30 cm",unit:"cbar",color:"#98d8c8",baseVal:()=>m(10,80)},tensio_60:{name:"Tension sol 60 cm",unit:"cbar",color:"#78b8a8",baseVal:()=>m(10,80)},tensio_90:{name:"Tension sol 90 cm",unit:"cbar",color:"#589888",baseVal:()=>m(10,80)},tensio_120:{name:"Tension sol 120 cm",unit:"cbar",color:"#387868",baseVal:()=>m(10,80)},tensio_150:{name:"Tension sol 150 cm",unit:"cbar",color:"#185848",baseVal:()=>m(10,80)},tensio_180:{name:"Tension sol 180 cm",unit:"cbar",color:"#003828",baseVal:()=>m(10,80)},conductivite:{name:"Conductivité",unit:"mS/cm",color:"#f0a030",baseVal:()=>Z(.1,3)},humectation:{name:"Humectation foliaire",unit:"h",color:"#78d8a0",baseVal:()=>m(0,12)},par:{name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#c47a00",baseVal:()=>m(0,2e3)},temperature_gel:{name:"Temp. feuille/gel",unit:"°C",color:"#a0d8a0",baseVal:()=>m(-3,12),cumul:{label:"Heures de gel",unit:"h"}},temp_rosee:{name:"Température de rosée",unit:"°C",color:"#7ec8e0",baseVal:()=>m(4,16)},temp_seche:{name:"Température sèche",unit:"°C",color:"#e07050",baseVal:()=>m(-5,10)},temp_humide:{name:"Température humide",unit:"°C",color:"#60b8d0",baseVal:()=>m(-7,8)}},je={"P+":["pluie","temperature","humidite_air"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite_air"],T_MINI:["temp_sol"],W:["_vent"],"CHP-15/30":["potentiel_hydrique","temp_sol"],"CHP-30/60":["potentiel_hydrique","temp_sol"],"CHP-60/90":["humidite_sol_60","humidite_sol_90","temp_sol"],"CAPA-30-3":["_capa_vwc","_capa_temp"],"CAPA-60-6":["_capa_vwc","_capa_temp"],EC:["humidite_sol_30","temp_sol","conductivite"],LWS:["_lws_intensite","_lws_duree"],PYRANO:["rayonnement"],PAR:["par"],T_GEL:["temp_seche","temp_humide"]},ue={_capa_vwc:{name:"Humidité sol par horizon",unit:"%vol",color:"#4e9fd4",isVirtual:!0},_capa_temp:{name:"Température du sol par horizon",unit:"°C",color:"#bb8fce",isVirtual:!0},_lws_intensite:{name:"Intensité d'humectation",unit:"mV",color:"#78d8a0",isVirtual:!0},_lws_duree:{name:"Durée d'humectation",unit:"h",color:"#45c090",isVirtual:!0},_vent:{name:"Vent",unit:"km/h",color:"#7bc4b0",isVirtual:!0}},$e={"CAPA-30-3":[{id:"humidite_sol_10",label:"10 cm",color:"#f0cc60"},{id:"humidite_sol_20",label:"20 cm",color:"#c89c30"},{id:"humidite_sol_30",label:"30 cm",color:"#a07010"}],"CAPA-60-6":[{id:"humidite_sol_10",label:"10 cm",color:"#f0d070"},{id:"humidite_sol_20",label:"20 cm",color:"#d8b050"},{id:"humidite_sol_30",label:"30 cm",color:"#c09030"},{id:"humidite_sol_40",label:"40 cm",color:"#a87010"},{id:"humidite_sol_50",label:"50 cm",color:"#905200"},{id:"humidite_sol_60",label:"60 cm",color:"#783400"}]};function m(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Z(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}function P(e){return(je[e.model]||["temperature","humidite_air"]).map(a=>{if(ue[a])return{id:a,...ue[a],current:null};const n=ge[a];return n?{id:a,...n,current:n.baseVal()}:null}).filter(Boolean)}let j=null,V="7d",W=null,z=null;function xe(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return V==="custom"&&W&&z?Math.max(60,Math.round((z-W)/6e4)):e[V]??10080}function ee(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Ae(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function ce(){const e=xe(),t=ee();return Math.max(2,Math.min(200,Math.floor(e/t)))}const He={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"};function Ve(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const a=U.filter(o=>o.orgId===d.orgId).sort((o,l)=>o.serial.localeCompare(l.serial)),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const i=document.createElement("select");i.className="breadcrumb-nav-select",i.innerHTML=a.map(o=>`<option value="${o.id}"${o.id===A?" selected":""}>${He[o.model]||o.model} · ${o.serial}</option>`).join(""),i.addEventListener("change",()=>{window.location.href=`capteur-detail.html?id=${i.value}`}),n.appendChild(i),t.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var t;if(!d){document.body.innerHTML='<div style="padding:40px"><h1>Capteur non trouvé</h1></div>';return}be(`Capteur ${d.serial}`,{label:"Capteurs",href:"capteurs.html"}),Ve(),Pe(),B(),Xe(),lt(),Ge(),Ye(),rt(),ct(),de(),(t=document.getElementById("btn-export-csv"))==null||t.addEventListener("click",ot);const e=document.getElementById("sidebar");e&&new MutationObserver(()=>{O.find(a=>a.id===d.parcelId),K()}).observe(e,{attributes:!0,attributeFilter:["data-role"]})});function Pe(){var a,n;const e=document.getElementById("latest-strip");if(!e)return;const t=P(d);if(t.forEach(i=>{if(i.isVirtual)return;const o=document.createElement("div");o.className="latest-card",o.style.borderTop=`3px solid ${i.color}`,o.innerHTML=`
      <div class="latest-card-name">${i.name}</div>
      <div class="latest-card-value">${i.current}<span class="latest-card-unit"> ${i.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `,o.style.cursor="default",e.appendChild(o)}),d.model==="TH"){const i=((a=t.find(s=>s.id==="temperature"))==null?void 0:a.current)||20,o=((n=t.find(s=>s.id==="humidite_air"))==null?void 0:n.current)||60,l=(i-(.55-.55*o/100)*(i-14.5)).toFixed(1),r=document.createElement("div");r.className="latest-card",r.style.borderTop="3px solid #e8a030",r.innerHTML=`
      <div class="latest-card-name">THI (Thermal Humidity Index)</div>
      <div class="latest-card-value">${l}<span class="latest-card-unit"> index</span></div>
      <div class="latest-card-ts">T-(0.55-0.55×HR/100)×(T-14.5)</div>
    `,r.style.cursor="default",e.appendChild(r)}}function we(e){const t=document.createElement("div");t.className="chart-card",t.dataset.base=e.current,t.dataset.color=e.color,t.dataset.cumul=e.isCumul?"1":"",t.dataset.metricId=e.id,t.dataset.metricName=e.name,t.dataset.metricUnit=e.unit;const a=e.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${e.cumul.label}</span><span class="chart-cumul-value">${Je(e)} ${e.cumul.unit}</span></div>`:"",i=e.id==="temperature"||e.id==="temperature_min"?Fe(e.id):"";return t.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${e.color}">${e.name}</span>
      <span class="chart-card-unit">${e.unit}</span>
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${a}
    ${i}
  `,t}function Be(e,t){P(t).forEach(n=>{if(n.isVirtual){_e(e,n,t);return}e.appendChild(we(n))})}function me(e,t,a){t.isVirtual?_e(e,t,a):e.appendChild(we(t))}function B(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",j){e.className="compare-rows";const a=U.find(s=>s.id===j),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${d.model} — ${d.serial}</span></div>
      <div class="compare-col-header">
        <span>${a?`${a.model} — ${a.serial}`:"Capteur"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{j=null,te(),B()});const i=P(d),o=a?P(a):[],l=i.map(s=>s.id);[...l,...o.map(s=>s.id).filter(s=>!l.includes(s))].forEach(s=>{const p=i.find(x=>x.id===s),u=o.find(x=>x.id===s),h=document.createElement("div");h.className="compare-row";const c=document.createElement("div");p?me(c,p,d):c.innerHTML='<div class="compare-chart-empty">—</div>';const f=document.createElement("div");u?me(f,u,a):f.innerHTML='<div class="compare-chart-empty">—</div>',h.appendChild(c),h.appendChild(f),e.appendChild(h)})}else e.className="charts-stack",Be(e,d);We(),qe()}function Fe(e){const t=e==="temperature_min",a=Math.round(Math.random()*200+50),n=Math.round(Math.random()*400+100);return`
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
  `}function qe(){document.querySelectorAll(".temp-thresh-input").forEach(e=>{e.addEventListener("change",()=>{var i,o;const t=e.closest(".temp-threshold-row"),a=e.dataset.type;parseFloat(e.value);const n=(o=(i=t.querySelector(`.temp-threshold-stat [data-type="${a}"]`))==null?void 0:i.closest(".temp-threshold-stat"))==null?void 0:o.querySelector(".temp-threshold-val");n&&(a==="cold"?n.textContent=`${Math.round(Math.random()*150+30)} h`:n.textContent=`${Math.round(Math.random()*350+80)} °j`)})})}function Re(e){const t=ce(),a=Array.from({length:t},()=>m(5,35)),n=a.map(b=>Math.min(b+m(3,18),80)),i=Array.from({length:t},()=>m(0,359)),o=600,l=200,r=46,s=16,p=16,u=28,h=o-r-s,c=l-p-u,f=Math.ceil(Math.max(...n)/10)*10||50,x=b=>r+b/Math.max(t-1,1)*h,E=b=>p+c-b/f*c,F=n.map((b,$)=>`${x($).toFixed(1)},${E(b).toFixed(1)}`).join("L"),C=[...a].reverse().map((b,$)=>`${x(t-1-$).toFixed(1)},${E(b).toFixed(1)}`).join("L"),q=`M${F}L${C}Z`,v=a.map((b,$)=>`${$?"L":"M"}${x($).toFixed(1)},${E(b).toFixed(1)}`).join(""),g=[.25,.5,.75].map(b=>{const $=(p+c-b*c).toFixed(1);return`<line x1="${r}" y1="${$}" x2="${o-s}" y2="${$}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),w=[0,.5,1].map(b=>{const $=p+c-b*c;return`<text x="${r-4}" y="${($+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(b*f)}</text>`}).join(""),T=Math.max(1,Math.round(t/25)),R=[];for(let b=0;b<t;b+=T){const $=x(b).toFixed(1),Y=(p+c*.35).toFixed(1);R.push(`<g transform="translate(${$},${Y}) rotate(${i[b]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const _=document.createElement("div");_.className="chart-card",_.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
    </div>
    <svg width="100%" height="${l}" viewBox="0 0 ${o} ${l}" preserveAspectRatio="none">
      ${w}${g}
      <path d="${q}" fill="#7bc4b0" opacity=".18"/>
      <path d="${v}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${R.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(_)}function _e(e,t,a){if(t.id==="_vent"){Re(e);return}const n=document.createElement("div");if(n.className="chart-card chart-card--multi",t.id==="_capa_vwc"||t.id==="_capa_temp"){const i=$e[a.model]||[],o=t.id==="_capa_vwc",l=o?"Humidité sol par horizon":"Température du sol par horizon",r=o?"%vol":"°C",s=i.map(p=>`<span class="multi-legend-dot" style="background:${p.color}"></span><span class="multi-legend-label">${p.label}</span>`).join("");n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${t.color}">${l}</span>
        <span class="chart-card-unit">${r}</span>
      </div>
      <div class="multi-chart-legend">${s}</div>
      <svg class="chart-svg chart-svg--multi" width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none"
           data-virtual="${t.id}" data-model="${a.model}"></svg>
    `,e.appendChild(n),requestAnimationFrame(()=>Me(n.querySelector(".chart-svg--multi"),i,o));return}if(t.id==="_lws_intensite"||t.id==="_lws_duree"){const i=t.id==="_lws_intensite",o=i?"Intensité d'humectation":"Durée d'humectation",l=i?"mV":"h",r=i?"#78d8a0":"#45c090",s=i?m(0,800):m(0,12),p=i?"humectation":"lws_duree";n.dataset.base=s,n.dataset.color=r,n.dataset.cumul="",n.dataset.metricId=p,n.dataset.metricName=o,n.dataset.metricUnit=l,n.classList.remove("chart-card--multi"),n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${r}">${o}</span>
        <span class="chart-card-unit">${l}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    `,e.appendChild(n)}}function Me(e,t,a){const n=ce(),i=ee(),o=600,l=200,r={t:14,r:10,b:28,l:46},s=o-r.l-r.r,p=l-r.t-r.b,u=t.map(v=>{var T;const g=a?v.id:"temp_sol",w=((T=ge[g])==null?void 0:T.baseVal())||25;return{color:v.color,label:v.label,vals:Array.from({length:n},(R,_)=>{const b=(n-1-_)*i,$=t.indexOf(v)*1.5;return Math.max(0,se(g,w+$,b))})}}),h=u.flatMap(v=>v.vals),c=Math.min(...h),f=Math.max(...h),x=f-c||1,E=v=>r.l+v/Math.max(n-1,1)*s,F=v=>r.t+p-(v-c)/x*p;let C="<defs></defs>";for(let v=0;v<=4;v++){const g=r.t+v/4*p,w=f-v/4*x,T=Math.abs(w)>=100?w.toFixed(0):w.toFixed(1);C+=`<line x1="${r.l}" y1="${g.toFixed(1)}" x2="${o-r.r}" y2="${g.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,C+=`<text x="${r.l-5}" y="${(g+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${T}</text>`}const q=Math.max(1,Math.floor(n/6));for(let v=0;v<n;v+=q){const g=E(v).toFixed(1);C+=`<line x1="${g}" y1="${r.t}" x2="${g}" y2="${r.t+p}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,C+=`<text x="${g}" y="${l-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ie((n-v)*i)}</text>`}u.forEach(v=>{const g=v.vals.map((w,T)=>({x:E(T),y:F(w)}));C+=`<path d="${Ee(g)}" fill="none" stroke="${v.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}),e.innerHTML=C}let G=null;function De(){return G||(G=document.createElement("div"),G.className="chart-tooltip",document.body.appendChild(G)),G}function Ne(e,t){return t==="temperature"||t==="temperature_min"?["#6eb4d4","#e07050"]:t==="temperature_gel"?["#a0d8f0","#6090d0"]:[Oe(e,.55),e]}function Oe(e,t){const a=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16);return`#${Math.round(a+(255-a)*t).toString(16).padStart(2,"0")}${Math.round(n+(255-n)*t).toString(16).padStart(2,"0")}${Math.round(i+(255-i)*t).toString(16).padStart(2,"0")}`}function Ee(e){if(e.length<2)return"";let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let a=0;a<e.length-1;a++){const n=e[Math.max(a-1,0)],i=e[a],o=e[a+1],l=e[Math.min(a+2,e.length-1)],r=i.x+(o.x-n.x)/6,s=i.y+(o.y-n.y)/6,p=o.x-(l.x-i.x)/6,u=o.y-(l.y-i.y)/6;t+=` C${r.toFixed(1)},${s.toFixed(1)} ${p.toFixed(1)},${u.toFixed(1)} ${o.x.toFixed(1)},${o.y.toFixed(1)}`}return t}function ie(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function We(){const e=ce(),t=ee();document.querySelectorAll(".chart-card").forEach(a=>{const n=a.querySelector(".chart-svg:not(.chart-svg--multi)");if(!n)return;const i=parseFloat(a.dataset.base),o=a.dataset.color,l=a.dataset.cumul==="1",r=a.dataset.metricId||"",s=a.dataset.metricName||"",p=a.dataset.metricUnit||"";Ue(n,i,o,e,t,l,r,s,p)}),document.querySelectorAll(".chart-svg--multi").forEach(a=>{const n=a.dataset.model,i=a.dataset.virtual,o=$e[n]||[],l=i==="_capa_vwc";o.length&&Me(a,o,l)})}function pe(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function ze(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function he(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function se(e,t,a,n=.15){const i=pe(a),o=he(i),l=ze(i),r=()=>1+(Math.random()-.5)*2*n;switch(e){case"temperature":case"temperature_min":return(t-6+o*12)*r();case"temperature_gel":return(t-4+o*8)*r();case"temp_sol":{const s=pe(a+120);return(t-3+he(s)*6)*r()}case"humidite_air":{const s=t+(1-o)*25-o*15;return Math.min(100,Math.max(20,s*r()))}case"rayonnement":case"par":{const s=l*t*1.3;return Math.max(0,s*r())}case"etp":{const s=l*t*1.5;return Math.max(0,s*r())}case"dpv":{const s=l*t*1.4+.05;return Math.max(0,s*r())}case"temp_rosee":{const p=t-6+o*12-2,u=t-8+o*6;return Math.min(p,u)*r()}case"lws_duree":{const s=Math.max(0,.9-l*1.1);return Math.max(0,t*s*r())}case"humectation":{const s=Math.max(0,.8-l*1.2),p=t*s;return Math.max(0,p*r())}case"potentiel_hydrique":return Math.max(5,Math.min(195,t*r()));case"humidite_sol_10":case"humidite_sol_20":case"humidite_sol_30":case"humidite_sol_40":case"humidite_sol_50":case"humidite_sol_60":case"humidite_sol_90":return Math.max(5,t*r());case"tensio_30":case"tensio_60":case"tensio_90":case"tensio_120":case"tensio_150":case"tensio_180":return Math.max(5,t*r());case"conductivite":{const s=20+o*10+(Math.random()-.5)*8;return s<15?0:Math.max(0,(s-15)*.08*r())}case"pluie":return Math.random()<.15?t*Math.random()*2:0;case"vent_vitesse":case"vent_rafales":{const s=t*(.6+l*.8)*r();return Math.max(0,s)}case"vent_direction":case"vent_direction_rafales":return(t+(Math.random()-.5)*60+360)%360;default:return Math.max(0,t*r())}}function Ue(e,t,a,n,i,o,l="",r="",s=""){const h={t:14,r:10,b:28,l:46},c=600-h.l-h.r,f=180-h.t-h.b,x=Math.max(1,Math.round(i/15)),E=Array.from({length:n},(y,M)=>{const I=(n-1-M)*i;if(o){let D=0;for(let H=0;H<x;H++)D+=se(l,t/x,I+H*(i/x));return D}else return se(l,t,I)}),F=Math.min(...E),C=Math.max(...E),q=C-F||1,v=y=>h.l+y/Math.max(n-1,1)*c,g=y=>h.t+f-(y-F)/q*f,w=`sg_${Math.random().toString(36).slice(2)}`,[T,R]=Ne(a,l);let _=`<defs>
    <linearGradient id="${w}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${T}"/>
      <stop offset="100%" stop-color="${R}"/>
    </linearGradient>
    <clipPath id="clip_${w}">
      <rect x="${h.l}" y="${h.t}" width="${c}" height="${f}"/>
    </clipPath>
  </defs>`;for(let y=0;y<=4;y++){const M=h.t+y/4*f,I=C-y/4*q,D=Math.abs(I)>=100?I.toFixed(0):Math.abs(I)>=10?I.toFixed(1):I.toFixed(2);_+=`<line x1="${h.l}" y1="${M.toFixed(1)}" x2="${600-h.r}" y2="${M.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,_+=`<text x="${h.l-5}" y="${(M+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${D}</text>`}const b=Math.max(1,Math.floor(n/6));for(let y=0;y<n;y+=b){const M=v(y).toFixed(1);_+=`<line x1="${M}" y1="${h.t}" x2="${M}" y2="${h.t+f}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,_+=`<text x="${M}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ie((n-y)*i)}</text>`}const $=E.map((y,M)=>({x:v(M),y:g(y)})),Y=Ee($),Te=Y+` L${v(n-1).toFixed(1)},${h.t+f} L${h.l.toFixed(1)},${h.t+f} Z`;_+=`<path d="${Te}" fill="${R}" opacity="0.07" clip-path="url(#clip_${w})"/>`,_+=`<path d="${Y}" fill="none" stroke="url(#${w})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${w})"/>`,_+=`<rect class="chart-hover-rect" x="${h.l}" y="${h.t}" width="${c}" height="${f}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=_;const J=De(),ne=e.querySelector(".chart-hover-rect");if(!ne)return;const S=document.createElementNS("http://www.w3.org/2000/svg","circle");S.setAttribute("r","4"),S.setAttribute("fill",a),S.setAttribute("stroke","#fff"),S.setAttribute("stroke-width","1.5"),S.style.display="none",S.style.pointerEvents="none",e.appendChild(S),ne.addEventListener("mousemove",y=>{const M=e.getBoundingClientRect(),I=(y.clientX-M.left)*(600/M.width),D=Math.max(0,Math.min(1,(I-h.l)/c)),H=Math.round(D*(n-1));if(H<0||H>=E.length)return;const X=E[H];S.setAttribute("cx",v(H)),S.setAttribute("cy",g(X)),S.style.display="";const Ie=Math.abs(X)>=100?X.toFixed(1):X.toFixed(2);J.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${r}</div>
      <div class="chart-tooltip-val" style="color:${a}">${Ie} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${s}</span></div>
      <div class="chart-tooltip-ts">${ie((n-H)*i)}</div>
    `,J.style.display="block",J.style.left=`${Math.min(y.clientX+12,window.innerWidth-160)}px`,J.style.top=`${y.clientY-10}px`}),ne.addEventListener("mouseleave",()=>{J.style.display="none",S.style.display="none"})}function Je(e){const a={pluie:()=>m(20,120),temperature:()=>m(80,400),rayonnement:()=>m(500,3e3),etp:()=>Z(15,80),temperature_min:()=>m(50,500),temperature_gel:()=>m(0,80)}[e.id];return a?a():"—"}function Ge(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),a=document.getElementById("time-step"),n=new Date,i=new Date(n-7*864e5);document.getElementById("date-from").value=i.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",o=>{const l=o.target.closest(".period-preset-btn");l&&(e.querySelectorAll(".period-preset-btn").forEach(r=>r.classList.remove("active")),l.classList.add("active"),V=l.dataset.period,V==="custom"?t.style.display="flex":(t.style.display="none",a&&(a.value=Ae(V)),B()))}),document.getElementById("date-from").addEventListener("change",ve),document.getElementById("date-to").addEventListener("change",ve),a.addEventListener("change",B)}function ve(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(W=new Date(e),z=new Date(t+"T23:59:59"),W<z&&B())}function Ye(){te()}function te(){var t,a,n;const e=document.getElementById("compare-control");if(e)if(j){const i=U.find(l=>l.id===j),o=i?`${i.model} — ${i.serial}`:"Capteur";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${o} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(t=e.querySelector(".compare-clear-icon"))==null||t.addEventListener("click",l=>{l.stopPropagation(),j=null,te(),B()}),(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",fe)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",fe)}function fe(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),a=U.filter(o=>o.id!==A),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher un capteur…">
    <div class="compare-dropdown-list">
      ${a.map(o=>`<div class="compare-dropdown-item${o.id===j?" active":""}" data-id="${o.id}"><i class="bi bi-broadcast"></i> ${o.model} — ${o.serial}</div>`).join("")}
    </div>
  `,t.appendChild(n);const i=n.querySelector(".compare-search-input");i.focus(),i.addEventListener("input",o=>{const l=o.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(r=>{r.style.display=r.textContent.toLowerCase().includes(l)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(o=>{o.addEventListener("click",()=>{j=parseInt(o.dataset.id),n.remove(),te(),B()})}),setTimeout(()=>{document.addEventListener("click",function o(l){!n.contains(l.target)&&!t.contains(l.target)&&(n.remove(),document.removeEventListener("click",o))})},0)}function Xe(){const e=O.find(n=>n.id===d.parcelId),t=e?ae.find(n=>n.id===e.orgId):d.orgId?ae.find(n=>n.id===d.orgId):null,a=ye(A);Ze(e,t,a),re(),Qe(e,t),Ke(),et(),tt(),nt(),K(),it(),st()}function Ze(e,t,a){let n=a.label||`Capteur ${d.serial}`;const i=document.getElementById("panel-ident");i.innerHTML=`
    <div class="panel-row" data-field="label">
      <span class="panel-row-key">Nom</span>
      <input type="text" class="panel-field-input" data-val value="${n.replace(/"/g,"&quot;")}">
    </div>
    <div class="panel-row"><span class="panel-row-key">Modèle</span><span class="panel-row-val">${d.model}</span></div>
    <div class="panel-row"><span class="panel-row-key">Numéro série</span><span class="panel-row-val">${d.serial}</span></div>
    <div class="panel-row"><span class="panel-row-key">Réseau télécom</span><span class="panel-row-val">${d.telecom||"Sigfox"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Exploitation</span><span class="panel-row-val">${t?t.name:"—"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Date d'ajout</span><span class="panel-row-val">15/01/2023</span></div>
  `;const o=i.querySelector('[data-field="label"] input');if(o){const l=()=>{const r=o.value.trim();r&&r!==n&&(n=r,Q(A,{label:r}),be(r,{label:"Capteurs",href:"capteurs.html"}))};o.addEventListener("change",l),o.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),o.blur())})}}function Qe(e,t){const a=(t==null?void 0:t.ville)||"—",n=(t==null?void 0:t.departement)||"",i=(e==null?void 0:e.lat)??null,o=(e==null?void 0:e.lng)??null;document.getElementById("panel-loc").innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${n?` (${n})`:""}</span>
    </div>
    ${e?`<div class="panel-row"><span class="panel-row-key">Parcelle</span><span class="panel-row-val">${e.name} — ${e.area} ha</span></div>`:""}
    ${i!=null?`<div class="panel-row"><a href="https://www.google.com/maps?q=${i.toFixed(6)},${o.toFixed(6)}" target="_blank" class="itinerary-link"><i class="bi bi-signpost-2"></i> Obtenir l'itinéraire</a></div>`:""}
  `}function Ke(){const e=d.networkQuality||80,t=d.messages7d||85,a=e>=80?"var(--ok)":e>=60?"var(--warn)":"var(--err)";document.getElementById("panel-signal").innerHTML=`
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
  `}function et(){const e=document.getElementById("panel-events");d.event?e.innerHTML=`
      <div class="event-item event-item--warn">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <div>
          <div class="event-item-label">${d.event}</div>
          <div class="event-item-date">Depuis le 28/03/2026</div>
        </div>
      </div>
    `:e.innerHTML='<div class="panel-empty"><i class="bi bi-check-circle" style="color:var(--ok)"></i> Aucun événement</div>'}function tt(){const e=P(d);document.getElementById("panel-metrics").innerHTML=e.map(t=>`
    <div class="metric-pill-row">
      <span class="metric-dot" style="background:${t.color}"></span>
      <span class="metric-pill-name">${t.name}</span>
      <span class="metric-pill-unit">${t.unit}</span>
    </div>
  `).join("")}function nt(){const e=document.getElementById("panel-config");if(!e)return;const t=d.model||"",a=t.startsWith("CHP"),n=t.startsWith("CAPA"),i=t==="EC",o=d.isVirtual;let l="";if(o&&(l+=`
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
    `),a){const r=t==="CHP-15/30"?[15,30]:t==="CHP-30/60"?[30,60]:[60,90],s=d.depth??r[0];l+=`
      <div class="config-section">
        <div class="config-section-title">Profondeur d'installation</div>
        <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">
          Ce modèle peut être installé de ${r[0]} à ${r[1]} cm.
        </div>
        <div class="form-row">
          <label>Profondeur</label>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="chp-depth-input" class="inline-edit" value="${s}" step="5" min="${r[0]}" max="${r[1]}" style="width:70px">
            <span style="font-size:12px;color:var(--txt2)">cm</span>
          </div>
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `}(n||i)&&(l+=`
      <div class="config-section">
        <div class="config-section-title">Texture du sol</div>
        <div class="form-row">
          <label>Texture</label>
          <select class="inline-edit">
            ${["Argile","Limon argileux","Loam","Limon sableux","Sable limoneux","Sable"].map(r=>`<option>${r}</option>`).join("")}
          </select>
        </div>
        <div class="form-row">
          <label>RU (mm/m)</label>
          <input type="number" class="inline-edit" value="150" step="10" min="50" max="300" style="width:80px">
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `),l?e.innerHTML=l:e.innerHTML='<div class="panel-empty">Pas de configuration spécifique pour ce modèle.</div>'}let k=O.filter(e=>e.orgId===d.orgId&&e.id===d.parcelId).map(e=>e.id);(function(){const t=ye(A);t.linkedPlotIds?k=t.linkedPlotIds:Q(A,{linkedPlotIds:k})})();function re(){var l,r;const e=document.getElementById("panel-plots");if(!e)return;const t=d.orgId||((l=O.find(s=>s.id===d.parcelId))==null?void 0:l.orgId),a=O.filter(s=>s.orgId===t),n=a.filter(s=>k.includes(s.id)),i=a.filter(s=>!k.includes(s.id));let o="";n.length?o+=n.map(s=>`
      <div class="sensor-linked-row">
        <span class="sensor-link-model">${s.name}</span>
        <span class="sensor-link-serial" style="color:var(--txt3)">${s.area?s.area+" ha":""}</span>
        <button class="remove-plot-btn icon-btn" data-id="${s.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
      </div>
    `).join(""):o+='<div class="panel-empty" style="margin-bottom:6px">Aucune parcelle liée</div>',i.length&&(o+=`
      <div class="panel-add-row">
        <select id="add-plot-select" class="panel-add-select">
          <option value="">Ajouter une parcelle…</option>
          ${i.map(s=>`<option value="${s.id}">${s.name}${s.area?" — "+s.area+" ha":""}</option>`).join("")}
        </select>
        <button id="add-plot-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `),e.innerHTML=o,e.querySelectorAll(".remove-plot-btn").forEach(s=>{s.addEventListener("click",()=>{k=k.filter(p=>p!==parseInt(s.dataset.id)),Q(A,{linkedPlotIds:k}),re()})}),(r=document.getElementById("add-plot-btn"))==null||r.addEventListener("click",()=>{const s=parseInt(document.getElementById("add-plot-select").value);!s||k.includes(s)||(k.push(s),Q(A,{linkedPlotIds:k}),re())})}function at(e,t){const a=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(a),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function ot(){const e=P(d).filter(u=>u.baseVal);let t;if(j){const u=U.find(c=>c.id===j),h=u?P(u).filter(c=>c.baseVal):[];t=[...e.map(c=>({h:`[${d.serial}] ${c.name} (${c.unit})`,gen:c.baseVal})),...h.map(c=>({h:`[${u.serial}] ${c.name} (${c.unit})`,gen:c.baseVal}))]}else t=e.map(u=>({h:`${u.name} (${u.unit})`,gen:u.baseVal}));const a=xe()*6e4,n=ee()*6e4,i=V==="custom"&&z?z:new Date,o=V==="custom"&&W?W:new Date(i-a),l=Math.min(Math.ceil((i-o)/n)+1,500),r=(i-o)/Math.max(l-1,1),s=["Horodatage",...t.map(u=>u.h)].join(";"),p=Array.from({length:l},(u,h)=>[new Date(o.getTime()+h*r).toISOString().replace("T"," ").slice(0,19),...t.map(f=>f.gen())].join(";"));at([s,...p].join(`\r
`),`${d.serial}_${V}_${new Date().toISOString().slice(0,10)}.csv`)}function it(){document.getElementById("panel-actions").innerHTML=`
    <button class="action-btn action-btn--danger"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `}function st(){const e=[{type:"installation",label:"Installation initiale",date:"15/01/2023",user:"Technicien Weenat",icon:"bi-box-arrow-in-down"},{type:"nettoyage",label:"Nettoyage pluviomètre",date:"20/03/2023",user:"Agriculteur",icon:"bi-droplet"},{type:"batterie",label:"Changement de batterie",date:"10/06/2023",user:"Technicien Weenat",icon:"bi-battery-charging"},{type:"note",label:"Redressage capteur déplacé",date:"02/11/2023",user:"Agriculteur",icon:"bi-chat-text"}];document.getElementById("panel-maint").innerHTML=`
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
  `}let N=oe.filter(e=>{var t,a;return d.parcelId?(t=e.parcelIds)==null?void 0:t.includes(d.parcelId):(a=e.orgIds)==null?void 0:a.includes(d.orgId)}).map(e=>e.id);function K(e){var s,p;const t=document.getElementById("panel-membres");if(!t)return;const a=oe.filter(u=>N.includes(u.id)),n=((s=document.getElementById("sidebar"))==null?void 0:s.getAttribute("data-role"))==="adherent-reseau",i=t==null?void 0:t.closest(".panel-section");if(n&&a.length===0){i&&(i.style.display="none");return}i&&(i.style.display="");const o=(p=t.closest(".panel-section"))==null?void 0:p.querySelector(".panel-add-row");o&&(o.style.display=n?"none":"");const l=new Set(["propriétaire","admin","agent"]),r=u=>!n||!l.has(u.role);if(a.length?t.innerHTML=a.map(u=>`
      <div class="member-row">
        <div>
          <span class="member-name">${u.prenom} ${u.nom}</span>
          ${n?"":`<span class="member-role-badge">${u.role}</span>`}
        </div>
        ${r(u)?`<button class="remove-membre-btn icon-btn" data-id="${u.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
      </div>
    `).join(""):t.innerHTML='<p class="panel-empty">Aucun membre associé.</p>',!n){const u=document.getElementById("add-membre-select");u&&(u.innerHTML='<option value="">Ajouter un membre…</option>',oe.filter(c=>!N.includes(c.id)).forEach(c=>{const f=document.createElement("option");f.value=c.id,f.textContent=`${c.prenom} ${c.nom} (${c.role})`,u.appendChild(f)})),t.querySelectorAll(".remove-membre-btn").forEach(c=>{c.addEventListener("click",()=>{N=N.filter(f=>f!==parseInt(c.dataset.id)),K()})});const h=document.getElementById("add-membre-btn");h&&(h.onclick=()=>{const c=parseInt(document.getElementById("add-membre-select").value);!c||N.includes(c)||(N.push(c),K())})}}function rt(){const e=O.find(i=>i.id===d.parcelId),t=e?ae.find(i=>i.id===e.orgId):null;if(!(t!=null&&t.lat))return;const a=L.map("sensor-mini-map",{zoomControl:!1,attributionControl:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(a);const n=e==null?void 0:e.latlngs;if(Array.isArray(n)&&n.length>=3){const i=L.polygon(n,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.25}).addTo(a);a.fitBounds(i.getBounds(),{padding:[10,10]})}else a.setView([t.lat,t.lng],13),L.circleMarker([t.lat,t.lng],{radius:6,color:"white",fillColor:"var(--pri)",fillOpacity:1,weight:2}).addTo(a)}function lt(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),a=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",a.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}function ct(){document.querySelectorAll(".detail-tab-btn").forEach(e=>{e.addEventListener("click",()=>{var t;document.querySelectorAll(".detail-tab-btn").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(a=>a.classList.remove("active")),e.classList.add("active"),(t=document.getElementById(e.dataset.pane))==null||t.classList.add("active")})})}const Ce=`sensor-journal-${A}`,Se=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function le(){try{const e=localStorage.getItem(Ce);if(e)return JSON.parse(e)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",texte:""},{id:2,type:"nettoyage",date:"2023-03-20",user:"Agriculteur",texte:"Nettoyage pluviomètre après hiver"},{id:3,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",texte:""},{id:4,type:"note",date:"2023-11-02",user:"Agriculteur",texte:"Capteur légèrement déplacé après passage tracteur — redressé"}]}function Le(e){localStorage.setItem(Ce,JSON.stringify(e))}function de(){var o;const e=document.getElementById("sensor-journal-container");if(!e)return;const t=le().slice().sort((l,r)=>r.date.localeCompare(l.date)),a=l=>{const[r,s,p]=l.split("-");return`${p}/${s}/${r}`},n=Object.fromEntries(Se.map(l=>[l.id,l]));let i=`
    <div class="journal-add-bar">
      <button class="btn-secondary btn-sm" id="sjrn-add-btn" style="gap:6px">
        <i class="bi bi-plus-circle"></i> Ajouter une entrée
      </button>
    </div>
  `;t.length===0?i+='<div class="journal-empty">Aucune entrée dans le journal.</div>':(i+='<div class="journal-timeline">',t.forEach((l,r)=>{const s=n[l.type]||{label:l.type,icon:"bi-circle",color:"#8e8e93"};t.length-1,i+=`
        <div class="jrn-entry" data-id="${l.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot" style="background:${s.color}18;color:${s.color};border:1.5px solid ${s.color}50">
              <i class="bi ${s.icon}"></i>
            </div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${a(l.date)}</span>
              <span style="font-size:12px;font-weight:600;color:${s.color}">${s.label}</span>
              <button class="jrn-entry-delete" data-id="${l.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>
            </div>
            ${l.texte?`<div class="jrn-entry-texte">${l.texte}</div>`:""}
            ${l.user?`<div style="font-size:11px;color:var(--txt3);margin-top:2px">${l.user}</div>`:""}
          </div>
        </div>
      `}),i+="</div>"),e.innerHTML=i,(o=e.querySelector("#sjrn-add-btn"))==null||o.addEventListener("click",dt),e.querySelectorAll(".jrn-entry-delete").forEach(l=>{l.addEventListener("click",()=>{const r=parseInt(l.dataset.id);Le(le().filter(s=>s.id!==r)),de()})})}function dt(){const e=document.createElement("div");e.className="modal add-modal",e.innerHTML=`
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter une entrée maintenance</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="sjrn-f-type" class="journal-form-input">
            ${Se.map(t=>`<option value="${t.id}">${t.label}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="sjrn-f-date" class="journal-form-input" value="${new Date().toISOString().slice(0,10)}">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Intervenant</label>
          <input type="text" id="sjrn-f-user" class="journal-form-input" value="Jean Dupont" placeholder="Nom de l'intervenant">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Note</label>
          <textarea id="sjrn-f-texte" class="journal-form-textarea" placeholder="Observations éventuelles…"></textarea>
        </div>
        <button class="btn-primary btn-sm" id="sjrn-f-save" style="width:100%;justify-content:center">
          Enregistrer
        </button>
      </div>
    </div>
  `,e.querySelector(".add-modal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",t=>{t.target===e&&e.remove()}),e.querySelector("#sjrn-f-save").addEventListener("click",()=>{const t=e.querySelector("#sjrn-f-type").value,a=e.querySelector("#sjrn-f-date").value||new Date().toISOString().slice(0,10),n=e.querySelector("#sjrn-f-user").value.trim()||"Jean Dupont",i=e.querySelector("#sjrn-f-texte").value.trim();Le([{id:Date.now(),type:t,date:a,user:n,texte:i},...le()]),e.remove(),de()}),document.body.appendChild(e)}
