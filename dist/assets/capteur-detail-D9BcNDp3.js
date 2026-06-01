import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{s as X}from"./sensors-wI07SRZE.js";import{p as J}from"./plots-BFmvZ9cD.js";import{o as ne}from"./orgs-Cx4wNzLL.js";import{m as T}from"./members-CuDabgg3.js";import{u as xe}from"./breadcrumb-DEBQjfiD.js";import{a as de,p as R}from"./store-InOgbptE.js";const Be=new URLSearchParams(window.location.search),I=parseInt(Be.get("id")),c=X.find(e=>e.id===I),we={pluie:{name:"Pluie",unit:"mm",color:"#2E75B6",baseVal:()=>m(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0},temperature:{name:"Température",unit:"°C",color:"#FBAF05",baseVal:()=>m(10,28),cumul:{label:"Degrés-jours (DJC)",unit:"°j"}},humidite_air:{name:"Humidité",unit:"%",color:"#5B12A4",baseVal:()=>m(40,90)},dpv:{name:"DPV",unit:"kPa",color:"#5E88EC",baseVal:()=>te(.1,2.5)},vent_vitesse:{name:"Vent – vitesse",unit:"km/h",color:"#616161",baseVal:()=>m(0,40)},vent_rafales:{name:"Vent – rafales",unit:"km/h",color:"#525252",baseVal:()=>m(5,60)},vent_direction:{name:"Vent – direction",unit:"°",color:"#424242",baseVal:()=>m(0,360)},vent_direction_rafales:{name:"Vent – direction rafales",unit:"°",color:"#343232",baseVal:()=>m(0,360)},rayonnement:{name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",baseVal:()=>m(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}},etp:{name:"ETP",unit:"mm/j",color:"#7DBDD7",baseVal:()=>te(.5,5),cumul:{label:"Cumul ETP",unit:"mm"}},temperature_min:{name:"Température min",unit:"°C",color:"#FEE7B4",baseVal:()=>m(-2,15),cumul:{label:"Heures de froid",unit:"h"}},humidite_sol_10:{name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",baseVal:()=>m(15,45)},humidite_sol_20:{name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",baseVal:()=>m(15,45)},humidite_sol_30:{name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",baseVal:()=>m(15,45)},humidite_sol_40:{name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",baseVal:()=>m(17,43)},humidite_sol_50:{name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",baseVal:()=>m(18,42)},humidite_sol_60:{name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",baseVal:()=>m(18,42)},humidite_sol_90:{name:"Teneur en eau du sol 90 cm",unit:"%vol",color:"#B14C19",baseVal:()=>m(20,40)},temp_sol:{name:"Température du sol",unit:"°C",color:"#795548",baseVal:()=>m(8,22)},potentiel_hydrique:{name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",baseVal:()=>{const e=new Date().getMonth();return Math.round(10+(.5-.5*Math.cos(2*Math.PI*e/12))*140)}},tensio_30:{name:"Tension sol 30 cm",unit:"cbar",color:"#46DA82",baseVal:()=>m(10,80)},tensio_60:{name:"Tension sol 60 cm",unit:"cbar",color:"#F608C2",baseVal:()=>m(10,80)},tensio_90:{name:"Tension sol 90 cm",unit:"cbar",color:"#B14C19",baseVal:()=>m(10,80)},tensio_120:{name:"Tension sol 120 cm",unit:"cbar",color:"#7D9537",baseVal:()=>m(10,80)},tensio_150:{name:"Tension sol 150 cm",unit:"cbar",color:"#5C7020",baseVal:()=>m(10,80)},tensio_180:{name:"Tension sol 180 cm",unit:"cbar",color:"#3C4E10",baseVal:()=>m(10,80)},conductivite:{name:"Conductivité",unit:"mS/cm",color:"#2BCDDE",baseVal:()=>te(.1,3)},humectation:{name:"Humectation foliaire",unit:"h",color:"#00887E",baseVal:()=>m(0,12)},par:{name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#4CBB17",baseVal:()=>m(0,2e3)},temperature_gel:{name:"Temp. feuille/gel",unit:"°C",color:"#FEE7B4",baseVal:()=>m(-3,12),cumul:{label:"Heures de gel",unit:"h"}},temp_rosee:{name:"Température de rosée",unit:"°C",color:"#72B0D8",baseVal:()=>m(4,16)},temp_seche:{name:"Température sèche",unit:"°C",color:"#23B19B",baseVal:()=>m(-5,10)},temp_humide:{name:"Température humide",unit:"°C",color:"#5E88EC",baseVal:()=>m(-7,8)}},He={"P+":["pluie","temperature","humidite_air"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite_air"],T_MINI:["temp_sol"],W:["_vent"],"CHP-15/30":["potentiel_hydrique","temp_sol"],"CHP-30/60":["potentiel_hydrique","temp_sol"],"CHP-60/90":["humidite_sol_60","humidite_sol_90","temp_sol"],"CAPA-30-3":["_capa_vwc","_capa_temp"],"CAPA-60-6":["_capa_vwc","_capa_temp"],EC:["humidite_sol_30","temp_sol","conductivite"],LWS:["_lws_intensite","_lws_duree"],PYRANO:["rayonnement"],PAR:["par"],T_GEL:["temp_seche","temp_humide"]},pe={_capa_vwc:{name:"Humidité sol par horizon",unit:"%vol",color:"#ED9A2C",isVirtual:!0},_capa_temp:{name:"Température du sol par horizon",unit:"°C",color:"#795548",isVirtual:!0},_lws_intensite:{name:"Intensité d'humectation",unit:"mV",color:"#00887E",isVirtual:!0},_lws_duree:{name:"Durée d'humectation",unit:"h",color:"#003D39",isVirtual:!0},_vent:{name:"Vent",unit:"km/h",color:"#616161",isVirtual:!0}},_e={"CAPA-30-3":[{id:"humidite_sol_10",label:"10 cm",color:"#105200"},{id:"humidite_sol_20",label:"20 cm",color:"#8C5E82"},{id:"humidite_sol_30",label:"30 cm",color:"#46DA82"}],"CAPA-60-6":[{id:"humidite_sol_10",label:"10 cm",color:"#105200"},{id:"humidite_sol_20",label:"20 cm",color:"#8C5E82"},{id:"humidite_sol_30",label:"30 cm",color:"#46DA82"},{id:"humidite_sol_40",label:"40 cm",color:"#949494"},{id:"humidite_sol_50",label:"50 cm",color:"#870021"},{id:"humidite_sol_60",label:"60 cm",color:"#F608C2"}]};function m(e,t){return Math.floor(Math.random()*(t-e+1))+e}function te(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}function N(e){return(He[e.model]||["temperature","humidite_air"]).map(o=>{if(pe[o])return{id:o,...pe[o],current:null};const n=we[o];return n?{id:o,...n,current:n.baseVal()}:null}).filter(Boolean)}let P=null,q="7d",G=null,Y=null;function Me(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return q==="custom"&&G&&Y?Math.max(60,Math.round((Y-G)/6e4)):e[q]??10080}function ae(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Ve(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function ue(){const e=Me(),t=ae();return Math.max(2,Math.min(200,Math.floor(e/t)))}const Pe={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"};function Fe(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const o=X.filter(s=>s.orgId===c.orgId).sort((s,r)=>s.serial.localeCompare(r.serial)),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const a=document.createElement("select");a.className="breadcrumb-nav-select",a.innerHTML=o.map(s=>`<option value="${s.id}"${s.id===I?" selected":""}>${Pe[s.model]||s.model} · ${s.serial}</option>`).join(""),a.addEventListener("change",()=>{window.location.href=`capteur-detail.html?id=${a.value}`}),n.appendChild(a),t.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var t;if(!c){document.body.innerHTML='<div style="padding:40px"><h1>Capteur non trouvé</h1></div>';return}xe(`Capteur ${c.serial}`,{label:"Capteurs",href:"capteurs.html"}),Fe(),De(),O(),Ke(),mt(),Ze(),Qe(),ut(),pt(),me(),(t=document.getElementById("btn-export-csv"))==null||t.addEventListener("click",rt);const e=document.getElementById("sidebar");e&&new MutationObserver(()=>{const o=J.find(n=>{var a;return(a=c.parcelIds)==null?void 0:a.includes(n.id)})||null;U(o)}).observe(e,{attributes:!0,attributeFilter:["data-role"]})});function De(){var o,n;const e=document.getElementById("latest-strip");if(!e)return;const t=N(c);if(t.forEach(a=>{if(a.isVirtual)return;const s=document.createElement("div");s.className="latest-card",s.style.borderTop=`3px solid ${a.color}`,s.innerHTML=`
      <div class="latest-card-name">${a.name}</div>
      <div class="latest-card-value">${a.current}<span class="latest-card-unit"> ${a.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `,s.style.cursor="default",e.appendChild(s)}),c.model==="TH"){const a=((o=t.find(i=>i.id==="temperature"))==null?void 0:o.current)||20,s=((n=t.find(i=>i.id==="humidite_air"))==null?void 0:n.current)||60,r=(a-(.55-.55*s/100)*(a-14.5)).toFixed(1),l=document.createElement("div");l.className="latest-card",l.style.borderTop="3px solid #e8a030",l.innerHTML=`
      <div class="latest-card-name">THI (Thermal Humidity Index)</div>
      <div class="latest-card-value">${r}<span class="latest-card-unit"> index</span></div>
      <div class="latest-card-ts">T-(0.55-0.55×HR/100)×(T-14.5)</div>
    `,l.style.cursor="default",e.appendChild(l)}}function Ee(e){var l;const t=document.createElement("div");t.className="chart-card",t.dataset.base=e.current,t.dataset.color=e.color,t.dataset.cumul=e.isCumul?"1":"",t.dataset.metricId=e.id,t.dataset.metricName=e.name,t.dataset.metricUnit=e.unit;const o=e.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${e.cumul.label}</span><span class="chart-cumul-value">${Xe(e)} ${e.cumul.unit}</span></div>`:"",a=e.id==="temperature"||e.id==="temperature_min"?Re(e.id):"",s=((l=document.getElementById("time-step"))==null?void 0:l.value)||"1h",r=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${c.id}&metricId=${e.id}&period=${q}&step=${s}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`;return t.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${e.color}">${e.name}</span>
      <span class="chart-card-unit">${e.unit}</span>
      ${r}
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${o}
    ${a}
  `,t}function qe(e,t){N(t).forEach(n=>{if(n.isVirtual){Ie(e,n,t);return}e.appendChild(Ee(n))})}function he(e,t,o){t.isVirtual?Ie(e,t,o):e.appendChild(Ee(t))}function O(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",P){e.className="compare-rows";const o=X.find(i=>i.id===P),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${c.model} — ${c.serial}</span></div>
      <div class="compare-col-header">
        <span>${o?`${o.model} — ${o.serial}`:"Capteur"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{P=null,oe(),O()});const a=N(c),s=o?N(o):[],r=a.map(i=>i.id);[...r,...s.map(i=>i.id).filter(i=>!r.includes(i))].forEach(i=>{const u=a.find(w=>w.id===i),f=s.find(w=>w.id===i),p=document.createElement("div");p.className="compare-row";const h=document.createElement("div");u?he(h,u,c):h.innerHTML='<div class="compare-chart-empty">—</div>';const g=document.createElement("div");f?he(g,f,o):g.innerHTML='<div class="compare-chart-empty">—</div>',p.appendChild(h),p.appendChild(g),e.appendChild(p)})}else e.className="charts-stack",qe(e,c);Je(),Ne()}function Re(e){const t=e==="temperature_min",o=Math.round(Math.random()*200+50),n=Math.round(Math.random()*400+100);return`
    <div class="temp-threshold-row" data-metric="${e}">
      <div class="temp-threshold-stat">
        <i class="bi bi-snow"></i>
        <span class="temp-threshold-val">${o} h</span>
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
  `}function Ne(){document.querySelectorAll(".temp-thresh-input").forEach(e=>{e.addEventListener("change",()=>{var a,s;const t=e.closest(".temp-threshold-row"),o=e.dataset.type;parseFloat(e.value);const n=(s=(a=t.querySelector(`.temp-threshold-stat [data-type="${o}"]`))==null?void 0:a.closest(".temp-threshold-stat"))==null?void 0:s.querySelector(".temp-threshold-val");n&&(o==="cold"?n.textContent=`${Math.round(Math.random()*150+30)} h`:n.textContent=`${Math.round(Math.random()*350+80)} °j`)})})}function Oe(e){const t=ue(),o=Array.from({length:t},()=>m(5,35)),n=o.map(b=>Math.min(b+m(3,18),80)),a=Array.from({length:t},()=>m(0,359)),s=600,r=200,l=46,i=16,u=16,f=28,p=s-l-i,h=r-u-f,g=Math.ceil(Math.max(...n)/10)*10||50,w=b=>l+b/Math.max(t-1,1)*p,d=b=>u+h-b/g*h,$=n.map((b,M)=>`${w(M).toFixed(1)},${d(b).toFixed(1)}`).join("L"),y=[...o].reverse().map((b,M)=>`${w(t-1-M).toFixed(1)},${d(b).toFixed(1)}`).join("L"),A=`M${$}L${y}Z`,v=o.map((b,M)=>`${M?"L":"M"}${w(M).toFixed(1)},${d(b).toFixed(1)}`).join(""),_=[.25,.5,.75].map(b=>{const M=(u+h-b*h).toFixed(1);return`<line x1="${l}" y1="${M}" x2="${s-i}" y2="${M}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),E=[0,.5,1].map(b=>{const M=u+h-b*h;return`<text x="${l-4}" y="${(M+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(b*g)}</text>`}).join(""),j=Math.max(1,Math.round(t/25)),W=[];for(let b=0;b<t;b+=j){const M=w(b).toFixed(1),K=(u+h*.35).toFixed(1);W.push(`<g transform="translate(${M},${K}) rotate(${a[b]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const C=document.createElement("div");C.className="chart-card",C.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
    </div>
    <svg width="100%" height="${r}" viewBox="0 0 ${s} ${r}" preserveAspectRatio="none">
      ${E}${_}
      <path d="${A}" fill="#7bc4b0" opacity=".18"/>
      <path d="${v}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${W.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(C)}function Ie(e,t,o){if(t.id==="_vent"){Oe(e);return}const n=document.createElement("div");if(n.className="chart-card chart-card--multi",t.id==="_capa_vwc"||t.id==="_capa_temp"){const a=_e[o.model]||[],s=t.id==="_capa_vwc",r=s?"Humidité sol par horizon":"Température du sol par horizon",l=s?"%vol":"°C",i=a.map(u=>`<span class="multi-legend-dot" style="background:${u.color}"></span><span class="multi-legend-label">${u.label}</span>`).join("");n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${t.color}">${r}</span>
        <span class="chart-card-unit">${l}</span>
      </div>
      <div class="multi-chart-legend">${i}</div>
      <svg class="chart-svg chart-svg--multi" width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none"
           data-virtual="${t.id}" data-model="${o.model}"></svg>
    `,e.appendChild(n),requestAnimationFrame(()=>Ce(n.querySelector(".chart-svg--multi"),a,s));return}if(t.id==="_lws_intensite"||t.id==="_lws_duree"){const a=t.id==="_lws_intensite",s=a?"Intensité d'humectation":"Durée d'humectation",r=a?"mV":"h",l=a?"#78d8a0":"#45c090",i=a?m(0,800):m(0,12),u=a?"humectation":"lws_duree";n.dataset.base=i,n.dataset.color=l,n.dataset.cumul="",n.dataset.metricId=u,n.dataset.metricName=s,n.dataset.metricUnit=r,n.classList.remove("chart-card--multi"),n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${l}">${s}</span>
        <span class="chart-card-unit">${r}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    `,e.appendChild(n)}}function Ce(e,t,o){const n=ue(),a=ae(),s=600,r=200,l={t:14,r:10,b:28,l:46},i=s-l.l-l.r,u=r-l.t-l.b,f=t.map(v=>{var j;const _=o?v.id:"temp_sol",E=((j=we[_])==null?void 0:j.baseVal())||25;return{color:v.color,label:v.label,vals:Array.from({length:n},(W,C)=>{const b=(n-1-C)*a,M=t.indexOf(v)*1.5;return Math.max(0,re(_,E+M,b))})}}),p=f.flatMap(v=>v.vals),h=Math.min(...p),g=Math.max(...p),w=g-h||1,d=v=>l.l+v/Math.max(n-1,1)*i,$=v=>l.t+u-(v-h)/w*u;let y="<defs></defs>";for(let v=0;v<=4;v++){const _=l.t+v/4*u,E=g-v/4*w,j=Math.abs(E)>=100?E.toFixed(0):E.toFixed(1);y+=`<line x1="${l.l}" y1="${_.toFixed(1)}" x2="${s-l.r}" y2="${_.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,y+=`<text x="${l.l-5}" y="${(_+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${j}</text>`}const A=Math.max(1,Math.floor(n/6));for(let v=0;v<n;v+=A){const _=d(v).toFixed(1);y+=`<line x1="${_}" y1="${l.t}" x2="${_}" y2="${l.t+u}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,y+=`<text x="${_}" y="${r-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ie((n-v)*a)}</text>`}f.forEach(v=>{const _=v.vals.map((E,j)=>({x:d(j),y:$(E)}));y+=`<path d="${Se(_)}" fill="none" stroke="${v.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}),e.innerHTML=y}let Q=null;function We(){return Q||(Q=document.createElement("div"),Q.className="chart-tooltip",document.body.appendChild(Q)),Q}function ze(e,t){return t==="temperature"||t==="temperature_min"?["#6eb4d4","#e07050"]:t==="temperature_gel"?["#a0d8f0","#6090d0"]:[Ue(e,.55),e]}function Ue(e,t){const o=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`#${Math.round(o+(255-o)*t).toString(16).padStart(2,"0")}${Math.round(n+(255-n)*t).toString(16).padStart(2,"0")}${Math.round(a+(255-a)*t).toString(16).padStart(2,"0")}`}function Se(e){if(e.length<2)return"";let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let o=0;o<e.length-1;o++){const n=e[Math.max(o-1,0)],a=e[o],s=e[o+1],r=e[Math.min(o+2,e.length-1)],l=a.x+(s.x-n.x)/6,i=a.y+(s.y-n.y)/6,u=s.x-(r.x-a.x)/6,f=s.y-(r.y-a.y)/6;t+=` C${l.toFixed(1)},${i.toFixed(1)} ${u.toFixed(1)},${f.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return t}function ie(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Je(){const e=ue(),t=ae();document.querySelectorAll(".chart-card").forEach(o=>{const n=o.querySelector(".chart-svg:not(.chart-svg--multi)");if(!n)return;const a=parseFloat(o.dataset.base),s=o.dataset.color,r=o.dataset.cumul==="1",l=o.dataset.metricId||"",i=o.dataset.metricName||"",u=o.dataset.metricUnit||"";Ye(n,a,s,e,t,r,l,i,u)}),document.querySelectorAll(".chart-svg--multi").forEach(o=>{const n=o.dataset.model,a=o.dataset.virtual,s=_e[n]||[],r=a==="_capa_vwc";s.length&&Ce(o,s,r)})}function ve(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function Ge(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function fe(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function re(e,t,o,n=.15){const a=ve(o),s=fe(a),r=Ge(a),l=()=>1+(Math.random()-.5)*2*n;switch(e){case"temperature":case"temperature_min":return(t-6+s*12)*l();case"temperature_gel":return(t-4+s*8)*l();case"temp_sol":{const i=ve(o+120);return(t-3+fe(i)*6)*l()}case"humidite_air":{const i=t+(1-s)*25-s*15;return Math.min(100,Math.max(20,i*l()))}case"rayonnement":case"par":{const i=r*t*1.3;return Math.max(0,i*l())}case"etp":{const i=r*t*1.5;return Math.max(0,i*l())}case"dpv":{const i=r*t*1.4+.05;return Math.max(0,i*l())}case"temp_rosee":{const u=t-6+s*12-2,f=t-8+s*6;return Math.min(u,f)*l()}case"lws_duree":{const i=Math.max(0,.9-r*1.1);return Math.max(0,t*i*l())}case"humectation":{const i=Math.max(0,.8-r*1.2),u=t*i;return Math.max(0,u*l())}case"potentiel_hydrique":return Math.max(5,Math.min(195,t*l()));case"humidite_sol_10":case"humidite_sol_20":case"humidite_sol_30":case"humidite_sol_40":case"humidite_sol_50":case"humidite_sol_60":case"humidite_sol_90":return Math.max(5,t*l());case"tensio_30":case"tensio_60":case"tensio_90":case"tensio_120":case"tensio_150":case"tensio_180":return Math.max(5,t*l());case"conductivite":{const i=20+s*10+(Math.random()-.5)*8;return i<15?0:Math.max(0,(i-15)*.08*l())}case"pluie":return Math.random()<.15?t*Math.random()*2:0;case"vent_vitesse":case"vent_rafales":{const i=t*(.6+r*.8)*l();return Math.max(0,i)}case"vent_direction":case"vent_direction_rafales":return(t+(Math.random()-.5)*60+360)%360;default:return Math.max(0,t*l())}}function Ye(e,t,o,n,a,s,r="",l="",i=""){const p={t:14,r:10,b:28,l:46},h=600-p.l-p.r,g=180-p.t-p.b,w=Math.max(1,Math.round(a/15)),d=Array.from({length:n},(x,S)=>{const B=(n-1-S)*a;if(s){let z=0;for(let F=0;F<w;F++)z+=re(r,t/w,B+F*(a/w));return z}else return re(r,t,B)}),$=Math.min(...d),y=Math.max(...d),A=y-$||1,v=x=>p.l+x/Math.max(n-1,1)*h,_=x=>p.t+g-(x-$)/A*g,E=`sg_${Math.random().toString(36).slice(2)}`,[j,W]=ze(o,r);let C=`<defs>
    <linearGradient id="${E}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${j}"/>
      <stop offset="100%" stop-color="${W}"/>
    </linearGradient>
    <clipPath id="clip_${E}">
      <rect x="${p.l}" y="${p.t}" width="${h}" height="${g}"/>
    </clipPath>
  </defs>`;for(let x=0;x<=4;x++){const S=p.t+x/4*g,B=y-x/4*A,z=Math.abs(B)>=100?B.toFixed(0):Math.abs(B)>=10?B.toFixed(1):B.toFixed(2);C+=`<line x1="${p.l}" y1="${S.toFixed(1)}" x2="${600-p.r}" y2="${S.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,C+=`<text x="${p.l-5}" y="${(S+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${z}</text>`}const b=Math.max(1,Math.floor(n/6));for(let x=0;x<n;x+=b){const S=v(x).toFixed(1);C+=`<line x1="${S}" y1="${p.t}" x2="${S}" y2="${p.t+g}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,C+=`<text x="${S}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ie((n-x)*a)}</text>`}const M=d.map((x,S)=>({x:v(S),y:_(x)})),K=Se(M),Ae=K+` L${v(n-1).toFixed(1)},${p.t+g} L${p.l.toFixed(1)},${p.t+g} Z`;C+=`<path d="${Ae}" fill="${W}" opacity="0.07" clip-path="url(#clip_${E})"/>`,C+=`<path d="${K}" fill="none" stroke="url(#${E})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${E})"/>`,C+=`<rect class="chart-hover-rect" x="${p.l}" y="${p.t}" width="${h}" height="${g}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=C;const Z=We(),se=e.querySelector(".chart-hover-rect");if(!se)return;const k=document.createElementNS("http://www.w3.org/2000/svg","circle");k.setAttribute("r","4"),k.setAttribute("fill",o),k.setAttribute("stroke","#fff"),k.setAttribute("stroke-width","1.5"),k.style.display="none",k.style.pointerEvents="none",e.appendChild(k),se.addEventListener("mousemove",x=>{const S=e.getBoundingClientRect(),B=(x.clientX-S.left)*(600/S.width),z=Math.max(0,Math.min(1,(B-p.l)/h)),F=Math.round(z*(n-1));if(F<0||F>=d.length)return;const ee=d[F];k.setAttribute("cx",v(F)),k.setAttribute("cy",_(ee)),k.style.display="";const je=Math.abs(ee)>=100?ee.toFixed(1):ee.toFixed(2);Z.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${l}</div>
      <div class="chart-tooltip-val" style="color:${o}">${je} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${i}</span></div>
      <div class="chart-tooltip-ts">${ie((n-F)*a)}</div>
    `,Z.style.display="block",Z.style.left=`${Math.min(x.clientX+12,window.innerWidth-160)}px`,Z.style.top=`${x.clientY-10}px`}),se.addEventListener("mouseleave",()=>{Z.style.display="none",k.style.display="none"})}function Xe(e){const o={pluie:()=>m(20,120),temperature:()=>m(80,400),rayonnement:()=>m(500,3e3),etp:()=>te(15,80),temperature_min:()=>m(50,500),temperature_gel:()=>m(0,80)}[e.id];return o?o():"—"}function Ze(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),o=document.getElementById("time-step"),n=new Date,a=new Date(n-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",s=>{const r=s.target.closest(".period-preset-btn");r&&(e.querySelectorAll(".period-preset-btn").forEach(l=>l.classList.remove("active")),r.classList.add("active"),q=r.dataset.period,q==="custom"?t.style.display="flex":(t.style.display="none",o&&(o.value=Ve(q)),O()))}),document.getElementById("date-from").addEventListener("change",be),document.getElementById("date-to").addEventListener("change",be),o.addEventListener("change",O)}function be(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(G=new Date(e),Y=new Date(t+"T23:59:59"),G<Y&&O())}function Qe(){oe()}function oe(){var t,o,n;const e=document.getElementById("compare-control");if(e)if(P){const a=X.find(r=>r.id===P),s=a?`${a.model} — ${a.serial}`:"Capteur";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${s} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(t=e.querySelector(".compare-clear-icon"))==null||t.addEventListener("click",r=>{r.stopPropagation(),P=null,oe(),O()}),(o=e.querySelector("#compare-open-btn"))==null||o.addEventListener("click",ge)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",ge)}function ge(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),o=X.filter(s=>s.id!==I),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher un capteur…">
    <div class="compare-dropdown-list">
      ${o.map(s=>`<div class="compare-dropdown-item${s.id===P?" active":""}" data-id="${s.id}"><i class="bi bi-broadcast"></i> ${s.model} — ${s.serial}</div>`).join("")}
    </div>
  `,t.appendChild(n);const a=n.querySelector(".compare-search-input");a.focus(),a.addEventListener("input",s=>{const r=s.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(l=>{l.style.display=l.textContent.toLowerCase().includes(r)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(s=>{s.addEventListener("click",()=>{P=parseInt(s.dataset.id),n.remove(),oe(),O()})}),setTimeout(()=>{document.addEventListener("click",function s(r){!n.contains(r.target)&&!t.contains(r.target)&&(n.remove(),document.removeEventListener("click",s))})},0)}function Ke(){const e=J.find(n=>{var a;return(a=c.parcelIds)==null?void 0:a.includes(n.id)}),t=e?ne.find(n=>n.id===e.orgId):c.orgId?ne.find(n=>n.id===c.orgId):null,o=de(I);et(e,t,o),le(),tt(e,t),nt(),at(),ot(),st(),U(e),lt(),ct()}function et(e,t,o){let n=o.label||`Capteur ${c.serial}`;const a=document.getElementById("panel-ident");a.innerHTML=`
    <div class="panel-row" data-field="label">
      <span class="panel-row-key">Nom</span>
      <input type="text" class="panel-field-input" data-val value="${n.replace(/"/g,"&quot;")}">
    </div>
    <div class="panel-row"><span class="panel-row-key">Modèle</span><span class="panel-row-val">${c.model}</span></div>
    <div class="panel-row"><span class="panel-row-key">Numéro série</span><span class="panel-row-val">${c.serial}</span></div>
    <div class="panel-row"><span class="panel-row-key">Réseau télécom</span><span class="panel-row-val">${c.telecom||"Sigfox"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Exploitation</span><span class="panel-row-val">${t?t.name:"—"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Date d'ajout</span><span class="panel-row-val">15/01/2023</span></div>
  `;const s=a.querySelector('[data-field="label"] input');if(s){const r=()=>{const l=s.value.trim();l&&l!==n&&(n=l,R(I,{label:l}),xe(l,{label:"Capteurs",href:"capteurs.html"}))};s.addEventListener("change",r),s.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),s.blur())})}}function tt(e,t){const o=(t==null?void 0:t.ville)||"—",n=(t==null?void 0:t.departement)||"",a=(e==null?void 0:e.lat)??null,s=(e==null?void 0:e.lng)??null;document.getElementById("panel-loc").innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${o}${n?` (${n})`:""}</span>
    </div>
    ${e?`<div class="panel-row"><span class="panel-row-key">Parcelle</span><span class="panel-row-val">${e.name} — ${e.area} ha</span></div>`:""}
    ${a!=null?`<div class="panel-row"><a href="https://www.google.com/maps?q=${a.toFixed(6)},${s.toFixed(6)}" target="_blank" class="itinerary-link"><i class="bi bi-signpost-2"></i> Obtenir l'itinéraire</a></div>`:""}
  `}function nt(){const e=c.networkQuality||80,t=c.messages7d||85,o=e>=80?"var(--ok)":e>=60?"var(--warn)":"var(--err)";document.getElementById("panel-signal").innerHTML=`
    <div class="signal-bar-wrap">
      <div class="signal-bar-track">
        <div class="signal-bar-fill" style="width:${e}%;background:${o}"></div>
      </div>
      <span class="signal-bar-pct" style="color:${o}">${e}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Messages / 7 j</span>
      <span class="panel-row-val">${t}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Opérateur</span>
      <span class="panel-row-val">${c.telecom||"Sigfox"}</span>
    </div>
  `}function at(){const e=document.getElementById("panel-events");c.event?e.innerHTML=`
      <div class="event-item event-item--warn">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <div>
          <div class="event-item-label">${c.event}</div>
          <div class="event-item-date">Depuis le 28/03/2026</div>
        </div>
      </div>
    `:e.innerHTML='<div class="panel-empty"><i class="bi bi-check-circle" style="color:var(--ok)"></i> Aucun événement</div>'}function ot(){const e=N(c);document.getElementById("panel-metrics").innerHTML=e.map(t=>`
    <div class="metric-pill-row">
      <span class="metric-dot" style="background:${t.color}"></span>
      <span class="metric-pill-name">${t.name}</span>
      <span class="metric-pill-unit">${t.unit}</span>
    </div>
  `).join("")}function st(){const e=document.getElementById("panel-config");if(!e)return;const t=c.model||"",o=t.startsWith("CHP"),n=t.startsWith("CAPA"),a=t==="EC",s=c.isVirtual;let r="";if(s&&(r+=`
      <div class="config-section">
        <div class="config-section-title">Localisation (station virtuelle)</div>
        <div class="form-row">
          <label>Latitude</label>
          <input type="number" class="inline-edit" value="${c.lat||47.3}" step="0.0001">
        </div>
        <div class="form-row">
          <label>Longitude</label>
          <input type="number" class="inline-edit" value="${c.lng||-.5}" step="0.0001">
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer la position</button>
      </div>
    `),o){const l=t==="CHP-15/30"?[15,30]:t==="CHP-30/60"?[30,60]:[60,90],i=c.depth??l[0];r+=`
      <div class="config-section">
        <div class="config-section-title">Profondeur d'installation</div>
        <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">
          Ce modèle peut être installé de ${l[0]} à ${l[1]} cm.
        </div>
        <div class="form-row">
          <label>Profondeur</label>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="chp-depth-input" class="inline-edit" value="${i}" step="5" min="${l[0]}" max="${l[1]}" style="width:70px">
            <span style="font-size:12px;color:var(--txt2)">cm</span>
          </div>
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `}(n||a)&&(r+=`
      <div class="config-section">
        <div class="config-section-title">Texture du sol</div>
        <div class="form-row">
          <label>Texture</label>
          <select class="inline-edit">
            ${["Argile","Limon argileux","Loam","Limon sableux","Sable limoneux","Sable"].map(l=>`<option>${l}</option>`).join("")}
          </select>
        </div>
        <div class="form-row">
          <label>RU (mm/m)</label>
          <input type="number" class="inline-edit" value="150" step="10" min="50" max="300" style="width:80px">
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `),r?e.innerHTML=r:e.innerHTML='<div class="panel-empty">Pas de configuration spécifique pour ce modèle.</div>'}let H=J.filter(e=>{var t;return e.orgId===c.orgId&&((t=c.parcelIds)==null?void 0:t.includes(e.id))}).map(e=>e.id);(function(){const t=de(I);t.linkedPlotIds?H=t.linkedPlotIds:R(I,{linkedPlotIds:H})})();function le(){var r,l;const e=document.getElementById("panel-plots");if(!e)return;const t=c.orgId||((r=J.find(i=>{var u;return(u=c.parcelIds)==null?void 0:u.includes(i.id)}))==null?void 0:r.orgId),o=J.filter(i=>i.orgId===t),n=o.filter(i=>H.includes(i.id)),a=o.filter(i=>!H.includes(i.id));let s="";n.length?s+=n.map(i=>`
      <div class="sensor-linked-row">
        <a href="parcelle-detail.html?id=${i.id}" class="sensor-linked-link">${i.name}</a>
        <span class="sensor-link-serial" style="color:var(--txt3)">${i.area?i.area+" ha":""}</span>
        <button class="remove-plot-btn icon-btn" data-id="${i.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
      </div>
    `).join(""):s+='<div class="panel-empty" style="margin-bottom:6px">Aucune parcelle liée</div>',a.length&&(s+=`
      <div class="panel-add-row">
        <select id="add-plot-select" class="panel-add-select">
          <option value="">Ajouter une parcelle…</option>
          ${a.map(i=>`<option value="${i.id}">${i.name}${i.area?" — "+i.area+" ha":""}</option>`).join("")}
        </select>
        <button id="add-plot-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `),e.innerHTML=s,e.querySelectorAll(".remove-plot-btn").forEach(i=>{i.addEventListener("click",()=>{H=H.filter(u=>u!==parseInt(i.dataset.id)),R(I,{linkedPlotIds:H}),le()})}),(l=document.getElementById("add-plot-btn"))==null||l.addEventListener("click",()=>{const i=parseInt(document.getElementById("add-plot-select").value);!i||H.includes(i)||(H.push(i),R(I,{linkedPlotIds:H}),le())})}function it(e,t){const o=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(o),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function rt(){const e=N(c).filter(f=>f.baseVal);let t;if(P){const f=X.find(h=>h.id===P),p=f?N(f).filter(h=>h.baseVal):[];t=[...e.map(h=>({h:`[${c.serial}] ${h.name} (${h.unit})`,gen:h.baseVal})),...p.map(h=>({h:`[${f.serial}] ${h.name} (${h.unit})`,gen:h.baseVal}))]}else t=e.map(f=>({h:`${f.name} (${f.unit})`,gen:f.baseVal}));const o=Me()*6e4,n=ae()*6e4,a=q==="custom"&&Y?Y:new Date,s=q==="custom"&&G?G:new Date(a-o),r=Math.min(Math.ceil((a-s)/n)+1,500),l=(a-s)/Math.max(r-1,1),i=["Horodatage",...t.map(f=>f.h)].join(";"),u=Array.from({length:r},(f,p)=>[new Date(s.getTime()+p*l).toISOString().replace("T"," ").slice(0,19),...t.map(g=>g.gen())].join(";"));it([i,...u].join(`\r
`),`${c.serial}_${q}_${new Date().toISOString().slice(0,10)}.csv`)}function lt(){document.getElementById("panel-actions").innerHTML=`
    <button class="action-btn action-btn--danger"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `}function ct(){const e=(c==null?void 0:c.orgId)===1,t=(()=>{const a=T.find(r=>r.source==="réseau"&&r.role==="agent"&&r.orgIds.includes(c==null?void 0:c.orgId));if(a)return`${a.prenom} ${a.nom}`;const s=T.find(r=>r.source==="réseau"&&(r.role==="admin"||r.role==="propriétaire"));return s?`${s.prenom} ${s.nom}`:"Technicien réseau"})(),o=e?(()=>{const a=T.find(s=>s.source==="adherent"&&s.orgIds.includes(1));return a?`${a.prenom} ${a.nom}`:t})():t,n=[{type:"installation",label:"Installation initiale",date:"15/01/2023",user:t,icon:"bi-box-arrow-in-down"},{type:"nettoyage",label:"Nettoyage pluviomètre",date:"20/03/2023",user:o,icon:"bi-droplet"},{type:"batterie",label:"Changement de batterie",date:"10/06/2023",user:t,icon:"bi-battery-charging"},{type:"note",label:"Redressage capteur déplacé",date:"02/11/2023",user:o,icon:"bi-chat-text"}];document.getElementById("panel-maint").innerHTML=`
    <div class="maint-timeline">
      ${n.map(a=>`
        <div class="maint-item">
          <div class="maint-icon"><i class="bi ${a.icon}"></i></div>
          <div class="maint-body">
            <div class="maint-label">${a.label}</div>
            <div class="maint-meta">${a.date} · ${a.user}</div>
          </div>
        </div>
      `).join("")}
    </div>
    <button class="action-btn" style="margin-top:8px"><i class="bi bi-plus"></i> Ajouter une entrée</button>
  `}let V=null,D=null;function dt(e){if(V!==null)return;const t=(e==null?void 0:e.orgId)??c.orgId,o=de(I);V=o.linkedOrgMemberIds??T.filter(n=>{var a,s,r;return n.source==="adherent"&&((a=n.orgIds)==null?void 0:a.includes(t))&&((s=c.parcelIds)!=null&&s.length?c.parcelIds.some(l=>{var i;return(i=n.parcelIds)==null?void 0:i.includes(l)}):(r=n.orgIds)==null?void 0:r.includes(t))}).map(n=>n.id),D=o.linkedConseillerIds??T.filter(n=>{var a,s;return n.source==="réseau"&&((a=c.parcelIds)!=null&&a.length?c.parcelIds.some(r=>{var l;return(l=n.parcelIds)==null?void 0:l.includes(r)}):(s=n.orgIds)==null?void 0:s.includes(t))}).map(n=>n.id)}function ye(e,t,o){return`<div class="member-row">
    <div>
      <span class="member-name">${e.prenom} ${e.nom}</span>
      ${o?`<span class="member-role-badge">${e.role}</span>`:""}
    </div>
    ${t?`<button class="remove-membre-btn icon-btn" data-id="${e.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function U(e){var w;dt(e);const t=((w=document.getElementById("sidebar"))==null?void 0:w.getAttribute("data-role"))==="adherent-reseau",o=(e==null?void 0:e.orgId)??c.orgId,n=document.getElementById("panel-membres"),a=document.getElementById("panel-membres-section"),s=T.filter(d=>{var $;return d.source==="adherent"&&(($=d.orgIds)==null?void 0:$.includes(o))}),r=s.filter(d=>V.includes(d.id));a&&(a.style.display=!t&&s.length===0?"none":""),n&&(n.innerHTML=r.length?r.map(d=>ye(d,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',n.querySelectorAll(".remove-membre-btn").forEach(d=>{d.addEventListener("click",()=>{V=V.filter($=>$!==parseInt(d.dataset.id)),R(I,{linkedOrgMemberIds:V}),U(e)})}));const l=document.getElementById("add-membre-org-row");l&&(l.style.display="");const i=document.getElementById("add-membre-org-select");i&&(i.innerHTML='<option value="">Associer un membre…</option>',s.filter(d=>!V.includes(d.id)).forEach(d=>{const $=document.createElement("option");$.value=d.id,$.textContent=`${d.prenom} ${d.nom}`,i.appendChild($)}));const u=document.getElementById("add-membre-org-btn");u&&(u.onclick=()=>{const d=parseInt(i==null?void 0:i.value);!d||V.includes(d)||(V.push(d),R(I,{linkedOrgMemberIds:V}),U(e))});const f=document.getElementById("panel-conseillers"),p=document.getElementById("panel-conseillers-section"),h=T.filter(d=>d.source==="réseau"&&D.includes(d.id));p&&(p.style.display=t&&h.length===0?"none":""),f&&(f.innerHTML=h.length?h.map(d=>ye(d,!t,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',t||f.querySelectorAll(".remove-membre-btn").forEach(d=>{d.addEventListener("click",()=>{D=D.filter($=>$!==parseInt(d.dataset.id)),R(I,{linkedConseillerIds:D}),U(e)})}));const g=document.getElementById("add-conseiller-row");if(g&&(g.style.display=t?"none":""),!t){const d=document.getElementById("add-membre-select");d&&(d.innerHTML='<option value="">Ajouter un conseiller…</option>',T.filter(y=>y.source==="réseau"&&!D.includes(y.id)).forEach(y=>{const A=document.createElement("option");A.value=y.id,A.textContent=`${y.prenom} ${y.nom} (${y.role})`,d.appendChild(A)}));const $=document.getElementById("add-membre-btn");$&&($.onclick=()=>{const y=parseInt(d==null?void 0:d.value);!y||D.includes(y)||(D.push(y),R(I,{linkedConseillerIds:D}),U(e))})}}function ut(){const e=J.find(a=>{var s;return(s=c.parcelIds)==null?void 0:s.includes(a.id)}),t=e?ne.find(a=>a.id===e.orgId):c.orgId?ne.find(a=>a.id===c.orgId):null;if(!(t!=null&&t.lat))return;const o=L.map("sensor-mini-map",{zoomControl:!1,attributionControl:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(o);const n=e==null?void 0:e.latlngs;if(Array.isArray(n)&&n.length>=3){const a=L.polygon(n,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.25}).addTo(o);o.fitBounds(a.getBounds(),{padding:[10,10]})}else o.setView([t.lat,t.lng],13),L.circleMarker([t.lat,t.lng],{radius:6,color:"white",fillColor:"var(--pri)",fillOpacity:1,weight:2}).addTo(o)}function mt(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),o=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",o.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}function pt(){document.querySelectorAll(".detail-tab-btn").forEach(e=>{e.addEventListener("click",()=>{var t;document.querySelectorAll(".detail-tab-btn").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(o=>o.classList.remove("active")),e.classList.add("active"),(t=document.getElementById(e.dataset.pane))==null||t.classList.add("active")})})}const Le=`sensor-journal-${I}`,Te=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function $e(){if((c==null?void 0:c.orgId)===1){const n=T.find(a=>a.source==="adherent"&&a.orgIds.includes(1));if(n)return`${n.prenom} ${n.nom}`}const t=T.find(n=>n.source==="réseau"&&n.role==="agent"&&n.orgIds.includes(c==null?void 0:c.orgId));if(t)return`${t.prenom} ${t.nom}`;const o=T.find(n=>n.source==="réseau"&&(n.role==="admin"||n.role==="propriétaire"));return o?`${o.prenom} ${o.nom}`:""}function ce(){try{const n=localStorage.getItem(Le);if(n)return JSON.parse(n)}catch{}const e=(c==null?void 0:c.orgId)===1,t=(()=>{const n=T.find(s=>s.source==="réseau"&&s.role==="agent"&&s.orgIds.includes(c==null?void 0:c.orgId));if(n)return`${n.prenom} ${n.nom}`;const a=T.find(s=>s.source==="réseau"&&(s.role==="admin"||s.role==="propriétaire"));return a?`${a.prenom} ${a.nom}`:"Technicien réseau"})(),o=e?(()=>{const n=T.find(a=>a.source==="adherent"&&a.orgIds.includes(1));return n?`${n.prenom} ${n.nom}`:t})():t;return[{id:1,type:"installation",date:"2023-01-15",user:t,texte:""},{id:2,type:"nettoyage",date:"2023-03-20",user:o,texte:"Nettoyage pluviomètre après hiver"},{id:3,type:"batterie",date:"2023-06-10",user:t,texte:""},{id:4,type:"note",date:"2023-11-02",user:o,texte:"Capteur légèrement déplacé après passage tracteur — redressé"}]}function ke(e){localStorage.setItem(Le,JSON.stringify(e))}function me(){var s;const e=document.getElementById("sensor-journal-container");if(!e)return;const t=ce().slice().sort((r,l)=>l.date.localeCompare(r.date)),o=r=>{const[l,i,u]=r.split("-");return`${u}/${i}/${l}`},n=Object.fromEntries(Te.map(r=>[r.id,r]));let a=`
    <div class="journal-add-bar">
      <button class="btn-secondary btn-sm" id="sjrn-add-btn" style="gap:6px">
        <i class="bi bi-plus-circle"></i> Ajouter une entrée
      </button>
    </div>
  `;t.length===0?a+='<div class="journal-empty">Aucune entrée dans le journal.</div>':(a+='<div class="journal-timeline">',t.forEach((r,l)=>{const i=n[r.type]||{label:r.type,icon:"bi-circle",color:"#8e8e93"};t.length-1,a+=`
        <div class="jrn-entry" data-id="${r.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot" style="background:${i.color}18;color:${i.color};border:1.5px solid ${i.color}50">
              <i class="bi ${i.icon}"></i>
            </div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${o(r.date)}</span>
              <span style="font-size:12px;font-weight:600;color:${i.color}">${i.label}</span>
              <button class="jrn-entry-delete" data-id="${r.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>
            </div>
            ${r.texte?`<div class="jrn-entry-texte">${r.texte}</div>`:""}
            ${r.user?`<div style="font-size:11px;color:var(--txt3);margin-top:2px">${r.user}</div>`:""}
          </div>
        </div>
      `}),a+="</div>"),e.innerHTML=a,(s=e.querySelector("#sjrn-add-btn"))==null||s.addEventListener("click",ht),e.querySelectorAll(".jrn-entry-delete").forEach(r=>{r.addEventListener("click",()=>{const l=parseInt(r.dataset.id);ke(ce().filter(i=>i.id!==l)),me()})})}function ht(){const e=document.createElement("div");e.className="modal add-modal",e.innerHTML=`
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter une entrée maintenance</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="sjrn-f-type" class="journal-form-input">
            ${Te.map(t=>`<option value="${t.id}">${t.label}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="sjrn-f-date" class="journal-form-input" value="${new Date().toISOString().slice(0,10)}">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Intervenant</label>
          <input type="text" id="sjrn-f-user" class="journal-form-input" value="${$e()}" placeholder="Nom de l'intervenant">
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
  `,e.querySelector(".add-modal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",t=>{t.target===e&&e.remove()}),e.querySelector("#sjrn-f-save").addEventListener("click",()=>{const t=e.querySelector("#sjrn-f-type").value,o=e.querySelector("#sjrn-f-date").value||new Date().toISOString().slice(0,10),n=e.querySelector("#sjrn-f-user").value.trim()||$e(),a=e.querySelector("#sjrn-f-texte").value.trim();ke([{id:Date.now(),type:t,date:o,user:n,texte:a},...ce()]),e.remove(),me()}),document.body.appendChild(e)}
