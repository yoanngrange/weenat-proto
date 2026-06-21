import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{s as X}from"./sensors-CRadjF8G.js";import{p as N}from"./plots-DhtWL7s_.js";import{o as ne}from"./orgs-DnFmvGlp.js";import{m as S}from"./members-Cr98hVG_.js";import{u as Ee}from"./breadcrumb-CzFWtd6d.js";import{a as me,p as R}from"./store-BQ9NCY7W.js";const Pe=new URLSearchParams(window.location.search),C=parseInt(Pe.get("id")),c=X.find(t=>t.id===C),_e={pluie:{name:"Pluie",unit:"mm",color:"#2E75B6",baseVal:()=>v(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0},temperature:{name:"Température",unit:"°C",color:"#FBAF05",baseVal:()=>v(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},humidite_air:{name:"Humidité",unit:"%",color:"#5B12A4",baseVal:()=>v(40,90)},dpv:{name:"DPV",unit:"kPa",color:"#5E88EC",baseVal:()=>te(.1,2.5)},vent_vitesse:{name:"Vent – vitesse",unit:"km/h",color:"#616161",baseVal:()=>v(0,40)},vent_rafales:{name:"Vent – rafales",unit:"km/h",color:"#525252",baseVal:()=>v(5,60)},vent_direction:{name:"Vent – direction",unit:"°",color:"#424242",baseVal:()=>v(0,360)},vent_direction_rafales:{name:"Vent – direction rafales",unit:"°",color:"#343232",baseVal:()=>v(0,360)},rayonnement:{name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",baseVal:()=>v(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}},etp:{name:"ETP",unit:"mm/j",color:"#7DBDD7",baseVal:()=>te(.5,5),cumul:{label:"Cumul ETP",unit:"mm"}},temperature_min:{name:"Température min",unit:"°C",color:"#FEE7B4",baseVal:()=>v(-2,15),cumul:{label:"Cumul d'heures de froid",unit:"h"}},humidite_sol_10:{name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",baseVal:()=>v(15,45)},humidite_sol_20:{name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",baseVal:()=>v(15,45)},humidite_sol_30:{name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",baseVal:()=>v(15,45)},humidite_sol_ec:{name:"Teneur en eau du sol",unit:"%vol",color:"#46DA82",baseVal:()=>v(15,45)},humidite_sol_40:{name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",baseVal:()=>v(17,43)},humidite_sol_50:{name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",baseVal:()=>v(18,42)},humidite_sol_60:{name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",baseVal:()=>v(18,42)},humidite_sol_90:{name:"Teneur en eau du sol 90 cm",unit:"%vol",color:"#B14C19",baseVal:()=>v(20,40)},temp_sol:{name:"Température du sol",unit:"°C",color:"#795548",baseVal:()=>v(8,22)},potentiel_hydrique:{name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",baseVal:()=>{const t=new Date().getMonth();return Math.round(10+(.5-.5*Math.cos(2*Math.PI*t/12))*140)}},tensio_30:{name:"Tension sol 30 cm",unit:"cbar",color:"#46DA82",baseVal:()=>v(10,80)},tensio_60:{name:"Tension sol 60 cm",unit:"cbar",color:"#F608C2",baseVal:()=>v(10,80)},tensio_90:{name:"Tension sol 90 cm",unit:"cbar",color:"#B14C19",baseVal:()=>v(10,80)},tensio_120:{name:"Tension sol 120 cm",unit:"cbar",color:"#7D9537",baseVal:()=>v(10,80)},tensio_150:{name:"Tension sol 150 cm",unit:"cbar",color:"#5C7020",baseVal:()=>v(10,80)},tensio_180:{name:"Tension sol 180 cm",unit:"cbar",color:"#3C4E10",baseVal:()=>v(10,80)},conductivite:{name:"Conductivité",unit:"mS/cm",color:"#2BCDDE",baseVal:()=>te(.1,3)},humectation:{name:"Humectation foliaire",unit:"h",color:"#00887E",baseVal:()=>v(0,12)},par:{name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#4CBB17",baseVal:()=>v(0,2e3)},temperature_gel:{name:"Temp. feuille/gel",unit:"°C",color:"#FEE7B4",baseVal:()=>v(-3,12),cumul:{label:"Cumul d'heures de gel",unit:"h"}},temp_rosee:{name:"Température de rosée",unit:"°C",color:"#72B0D8",baseVal:()=>v(4,16)},temp_seche:{name:"Température sèche",unit:"°C",color:"#23B19B",baseVal:()=>v(-5,10)},temp_humide:{name:"Température humide",unit:"°C",color:"#5E88EC",baseVal:()=>v(-7,8)}},Ve={"P+":["pluie","temperature","humidite_air"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite_air"],T_MINI:["temp_sol"],W:["_vent"],"CHP-15/30":["potentiel_hydrique","temp_sol"],"CHP-30/60":["potentiel_hydrique","temp_sol"],"CHP-60/90":["humidite_sol_60","humidite_sol_90","temp_sol"],"CAPA-30-3":["_capa_vwc","_capa_temp"],"CAPA-60-6":["_capa_vwc","_capa_temp"],EC:["humidite_sol_ec","temp_sol","conductivite"],LWS:["_lws_intensite","_lws_duree"],PYRANO:["rayonnement"],PAR:["par"],T_GEL:["temp_seche","temp_humide"]},he={_capa_vwc:{name:"Humidité sol par horizon",unit:"%vol",color:"#ED9A2C",isVirtual:!0},_capa_temp:{name:"Température du sol par horizon",unit:"°C",color:"#795548",isVirtual:!0},_lws_intensite:{name:"Intensité d'humectation",unit:"mV",color:"#00887E",isVirtual:!0},_lws_duree:{name:"Durée d'humectation",unit:"h",color:"#003D39",isVirtual:!0},_vent:{name:"Vent",unit:"km/h",color:"#616161",isVirtual:!0}},Me={"CAPA-30-3":[{id:"humidite_sol_10",label:"10 cm",color:"#105200"},{id:"humidite_sol_20",label:"20 cm",color:"#8C5E82"},{id:"humidite_sol_30",label:"30 cm",color:"#46DA82"}],"CAPA-60-6":[{id:"humidite_sol_10",label:"10 cm",color:"#105200"},{id:"humidite_sol_20",label:"20 cm",color:"#8C5E82"},{id:"humidite_sol_30",label:"30 cm",color:"#46DA82"},{id:"humidite_sol_40",label:"40 cm",color:"#949494"},{id:"humidite_sol_50",label:"50 cm",color:"#870021"},{id:"humidite_sol_60",label:"60 cm",color:"#F608C2"}]};function v(t,e){return Math.floor(Math.random()*(e-t+1))+t}function te(t,e){return parseFloat((Math.random()*(e-t)+t).toFixed(2))}function O(t){return(Ve[t.model]||["temperature","humidite_air"]).map(o=>{if(he[o])return{id:o,...he[o],current:null};const n=_e[o];return n?{id:o,...n,current:n.baseVal()}:null}).filter(Boolean)}let V=null,D="7d",Y=null,J=null;function Ce(){const t={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return D==="custom"&&Y&&J?Math.max(60,Math.round((J-Y)/6e4)):t[D]??10080}function ae(){var e;const t=((e=document.getElementById("time-step"))==null?void 0:e.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[t]??60}function qe(t){return t==="365d"?"1mo":t==="30d"?"1w":t==="7d"?"1d":"1h"}function pe(){const t=Ce(),e=ae();return Math.max(2,Math.min(200,Math.floor(t/e)))}const Fe={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function De(){const t=document.getElementById("breadcrumb-title");if(!t)return;const e=t.querySelector("span:last-child");if(!e)return;const o=X.filter(i=>i.orgId===c.orgId).sort((i,l)=>i.serial.localeCompare(l.serial)),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const a=document.createElement("select");a.className="breadcrumb-nav-select",a.innerHTML=o.map(i=>`<option value="${i.id}"${i.id===C?" selected":""}>${Fe[i.model]||i.model} · ${i.serial}</option>`).join(""),a.addEventListener("change",()=>{window.location.href=`capteur-detail.html?id=${a.value}`}),n.appendChild(a),e.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var e;if(!c){document.body.innerHTML='<div style="padding:40px"><h1>Capteur non trouvé</h1></div>';return}Ee(`Capteur ${c.serial}`,{label:"Capteurs",href:"capteurs.html"}),De(),Re(),W(),tt(),vt(),Ke(),et(),pt(),ht(),ve(),(e=document.getElementById("btn-export-csv"))==null||e.addEventListener("click",st);const t=document.getElementById("sidebar");t&&new MutationObserver(()=>{const o=N.find(n=>{var a;return(a=c.parcelIds)==null?void 0:a.includes(n.id)})||null;G(o),ke()}).observe(t,{attributes:!0,attributeFilter:["data-role"]})});function Re(){var o,n;const t=document.getElementById("latest-strip");if(!t)return;const e=O(c);if(e.forEach(a=>{if(a.isVirtual)return;const i=document.createElement("div");i.className="latest-card",i.style.borderTop=`3px solid ${a.color}`,i.innerHTML=`
      <div class="latest-card-name">${a.name}</div>
      <div class="latest-card-value">${a.current}<span class="latest-card-unit"> ${a.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `,i.style.cursor="default",t.appendChild(i)}),c.model==="TH"){const a=((o=e.find(s=>s.id==="temperature"))==null?void 0:o.current)||20,i=((n=e.find(s=>s.id==="humidite_air"))==null?void 0:n.current)||60,l=(a-(.55-.55*i/100)*(a-14.5)).toFixed(1),r=document.createElement("div");r.className="latest-card",r.style.borderTop="3px solid #e8a030",r.innerHTML=`
      <div class="latest-card-name">THI (Thermal Humidity Index)</div>
      <div class="latest-card-value">${l}<span class="latest-card-unit"> index</span></div>
      <div class="latest-card-ts">T-(0.55-0.55×HR/100)×(T-14.5)</div>
    `,r.style.cursor="default",t.appendChild(r)}}function Ie(t){var r;const e=document.createElement("div");e.className="chart-card",e.dataset.base=t.current,e.dataset.color=t.color,e.dataset.cumul=t.isCumul?"1":"",e.dataset.metricId=t.id,e.dataset.metricName=t.name,e.dataset.metricUnit=t.unit;const o=t.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label}</span><span class="chart-cumul-value">${Qe(t)} ${t.cumul.unit}</span></div>`:"",a=t.id==="temperature"||t.id==="temperature_min"?Oe(t.id):"",i=((r=document.getElementById("time-step"))==null?void 0:r.value)||"1h",l=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${c.id}&metricId=${t.id}&period=${D}&step=${i}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`;return e.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${l}
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${o}
    ${a}
  `,e}function Ne(t,e){O(e).forEach(n=>{if(n.isVirtual){je(t,n,e);return}t.appendChild(Ie(n))})}function fe(t,e,o){e.isVirtual?je(t,e,o):t.appendChild(Ie(e))}function W(){var e;const t=document.getElementById("charts-container");if(t.innerHTML="",V){t.className="compare-rows";const o=X.find(s=>s.id===V),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${c.model} — ${c.serial}</span></div>
      <div class="compare-col-header">
        <span>${o?`${o.model} — ${o.serial}`:"Capteur"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,t.appendChild(n),(e=n.querySelector(".compare-close-btn"))==null||e.addEventListener("click",()=>{V=null,oe(),W()});const a=O(c),i=o?O(o):[],l=a.map(s=>s.id);[...l,...i.map(s=>s.id).filter(s=>!l.includes(s))].forEach(s=>{const d=a.find(x=>x.id===s),m=i.find(x=>x.id===s),p=document.createElement("div");p.className="compare-row";const h=document.createElement("div");d?fe(h,d,c):h.innerHTML='<div class="compare-chart-empty">—</div>';const b=document.createElement("div");m?fe(b,m,o):b.innerHTML='<div class="compare-chart-empty">—</div>',p.appendChild(h),p.appendChild(b),t.appendChild(p)})}else t.className="charts-stack",Ne(t,c);Je(),We()}function Oe(t){const e=t==="temperature_min",o=Math.round(Math.random()*200+50),n=Math.round(Math.random()*400+100);return`
    <div class="temp-threshold-row" data-metric="${t}">
      <div class="temp-threshold-stat">
        <i class="bi bi-snow"></i>
        <span class="temp-threshold-val">${o} h</span>
        <span class="temp-threshold-label">Heures de froid</span>
        <span class="temp-threshold-ctrl">
          &lt; <input type="number" class="temp-thresh-input" data-type="cold" value="${e?7:0}" step="0.5" min="-10" max="20"> °C
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
  `}function We(){document.querySelectorAll(".temp-thresh-input").forEach(t=>{t.addEventListener("change",()=>{var a,i;const e=t.closest(".temp-threshold-row"),o=t.dataset.type;parseFloat(t.value);const n=(i=(a=e.querySelector(`.temp-threshold-stat [data-type="${o}"]`))==null?void 0:a.closest(".temp-threshold-stat"))==null?void 0:i.querySelector(".temp-threshold-val");n&&(o==="cold"?n.textContent=`${Math.round(Math.random()*150+30)} h`:n.textContent=`${Math.round(Math.random()*350+80)} °j`)})})}function ze(t){const e=pe(),o=Array.from({length:e},()=>v(5,35)),n=o.map(g=>Math.min(g+v(3,18),80)),a=Array.from({length:e},()=>v(0,359)),i=600,l=200,r=46,s=16,d=16,m=28,p=i-r-s,h=l-d-m,b=Math.ceil(Math.max(...n)/10)*10||50,x=g=>r+g/Math.max(e-1,1)*p,u=g=>d+h-g/b*h,$=n.map((g,_)=>`${x(_).toFixed(1)},${u(g).toFixed(1)}`).join("L"),y=[...o].reverse().map((g,_)=>`${x(e-1-_).toFixed(1)},${u(g).toFixed(1)}`).join("L"),T=`M${$}L${y}Z`,f=o.map((g,_)=>`${_?"L":"M"}${x(_).toFixed(1)},${u(g).toFixed(1)}`).join(""),E=[.25,.5,.75].map(g=>{const _=(d+h-g*h).toFixed(1);return`<line x1="${r}" y1="${_}" x2="${i-s}" y2="${_}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),M=[0,.5,1].map(g=>{const _=d+h-g*h;return`<text x="${r-4}" y="${(_+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(g*b)}</text>`}).join(""),A=Math.max(1,Math.round(e/25)),z=[];for(let g=0;g<e;g+=A){const _=x(g).toFixed(1),K=(d+h*.35).toFixed(1);z.push(`<g transform="translate(${_},${K}) rotate(${a[g]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const I=document.createElement("div");I.className="chart-card",I.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
    </div>
    <svg width="100%" height="${l}" viewBox="0 0 ${i} ${l}" preserveAspectRatio="none">
      ${M}${E}
      <path d="${T}" fill="#7bc4b0" opacity=".18"/>
      <path d="${f}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${z.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,t.appendChild(I)}function je(t,e,o){if(e.id==="_vent"){ze(t);return}const n=document.createElement("div");if(n.className="chart-card chart-card--multi",e.id==="_capa_vwc"||e.id==="_capa_temp"){const a=Me[o.model]||[],i=e.id==="_capa_vwc",l=i?"Humidité sol par horizon":"Température du sol par horizon",r=i?"%vol":"°C",s=a.map(d=>`<span class="multi-legend-dot" style="background:${d.color}"></span><span class="multi-legend-label">${d.label}</span>`).join("");n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${e.color}">${l}</span>
        <span class="chart-card-unit">${r}</span>
      </div>
      <div class="multi-chart-legend">${s}</div>
      <svg class="chart-svg chart-svg--multi" width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none"
           data-virtual="${e.id}" data-model="${o.model}"></svg>
    `,t.appendChild(n),requestAnimationFrame(()=>Se(n.querySelector(".chart-svg--multi"),a,i));return}if(e.id==="_lws_intensite"||e.id==="_lws_duree"){const a=e.id==="_lws_intensite",i=a?"Intensité d'humectation":"Durée d'humectation",l=a?"mV":"h",r=a?"#78d8a0":"#45c090",s=a?v(0,800):v(0,12),d=a?"humectation":"lws_duree";n.dataset.base=s,n.dataset.color=r,n.dataset.cumul="",n.dataset.metricId=d,n.dataset.metricName=i,n.dataset.metricUnit=l,n.classList.remove("chart-card--multi"),n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${r}">${i}</span>
        <span class="chart-card-unit">${l}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    `,t.appendChild(n)}}function Se(t,e,o){const n=pe(),a=ae(),i=600,l=200,r={t:14,r:10,b:28,l:46},s=i-r.l-r.r,d=l-r.t-r.b,m=e.map(f=>{var A;const E=o?f.id:"temp_sol",M=((A=_e[E])==null?void 0:A.baseVal())||25;return{color:f.color,label:f.label,vals:Array.from({length:n},(z,I)=>{const g=(n-1-I)*a,_=e.indexOf(f)*1.5;return Math.max(0,re(E,M+_,g))})}}),p=m.flatMap(f=>f.vals),h=Math.min(...p),b=Math.max(...p),x=b-h||1,u=f=>r.l+f/Math.max(n-1,1)*s,$=f=>r.t+d-(f-h)/x*d;let y="<defs></defs>";for(let f=0;f<=4;f++){const E=r.t+f/4*d,M=b-f/4*x,A=Math.abs(M)>=100?M.toFixed(0):M.toFixed(1);y+=`<line x1="${r.l}" y1="${E.toFixed(1)}" x2="${i-r.r}" y2="${E.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,y+=`<text x="${r.l-5}" y="${(E+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${A}</text>`}const T=Math.max(1,Math.floor(n/6));for(let f=0;f<n;f+=T){const E=u(f).toFixed(1);y+=`<line x1="${E}" y1="${r.t}" x2="${E}" y2="${r.t+d}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,y+=`<text x="${E}" y="${l-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${le((n-f)*a)}</text>`}m.forEach(f=>{const E=f.vals.map((M,A)=>({x:u(A),y:$(M)}));y+=`<path d="${Le(E)}" fill="none" stroke="${f.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}),t.innerHTML=y}let Q=null;function Ue(){return Q||(Q=document.createElement("div"),Q.className="chart-tooltip",document.body.appendChild(Q)),Q}function Ge(t,e){return e==="temperature"||e==="temperature_min"?["#6eb4d4","#e07050"]:e==="temperature_gel"?["#a0d8f0","#6090d0"]:[Ye(t,.55),t]}function Ye(t,e){const o=parseInt(t.slice(1,3),16),n=parseInt(t.slice(3,5),16),a=parseInt(t.slice(5,7),16);return`#${Math.round(o+(255-o)*e).toString(16).padStart(2,"0")}${Math.round(n+(255-n)*e).toString(16).padStart(2,"0")}${Math.round(a+(255-a)*e).toString(16).padStart(2,"0")}`}function Le(t){if(t.length<2)return"";let e=`M${t[0].x.toFixed(1)},${t[0].y.toFixed(1)}`;for(let o=0;o<t.length-1;o++){const n=t[Math.max(o-1,0)],a=t[o],i=t[o+1],l=t[Math.min(o+2,t.length-1)],r=a.x+(i.x-n.x)/6,s=a.y+(i.y-n.y)/6,d=i.x-(l.x-a.x)/6,m=i.y-(l.y-a.y)/6;e+=` C${r.toFixed(1)},${s.toFixed(1)} ${d.toFixed(1)},${m.toFixed(1)} ${i.x.toFixed(1)},${i.y.toFixed(1)}`}return e}function le(t){const e=new Date(Date.now()-t*6e4);return t<1440?`${String(e.getHours()).padStart(2,"0")}h`:t>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][e.getMonth()]:`${String(e.getDate()).padStart(2,"0")}/${String(e.getMonth()+1).padStart(2,"0")}`}function Je(){const t=pe(),e=ae();document.querySelectorAll(".chart-card").forEach(o=>{const n=o.querySelector(".chart-svg:not(.chart-svg--multi)");if(!n)return;const a=parseFloat(o.dataset.base),i=o.dataset.color,l=o.dataset.cumul==="1",r=o.dataset.metricId||"",s=o.dataset.metricName||"",d=o.dataset.metricUnit||"";Ze(n,a,i,t,e,l,r,s,d)}),document.querySelectorAll(".chart-svg--multi").forEach(o=>{const n=o.dataset.model,a=o.dataset.virtual,i=Me[n]||[],l=a==="_capa_vwc";i.length&&Se(o,i,l)})}function be(t){const e=Date.now()-t*6e4;return new Date(e).getHours()+new Date(e).getMinutes()/60}function Xe(t){return Math.max(0,Math.sin(Math.PI*(t-6)/12))}function ye(t){return .5+.5*Math.sin(2*Math.PI*(t-4)/24-Math.PI/2)}function re(t,e,o,n=.15){const a=be(o),i=ye(a),l=Xe(a),r=()=>1+(Math.random()-.5)*2*n;switch(t){case"temperature":case"temperature_min":return(e-6+i*12)*r();case"temperature_gel":return(e-4+i*8)*r();case"temp_sol":{const s=be(o+120);return(e-3+ye(s)*6)*r()}case"humidite_air":{const s=e+(1-i)*25-i*15;return Math.min(100,Math.max(20,s*r()))}case"rayonnement":case"par":{const s=l*e*1.3;return Math.max(0,s*r())}case"etp":{const s=l*e*1.5;return Math.max(0,s*r())}case"dpv":{const s=l*e*1.4+.05;return Math.max(0,s*r())}case"temp_rosee":{const d=e-6+i*12-2,m=e-8+i*6;return Math.min(d,m)*r()}case"lws_duree":{const s=Math.max(0,.9-l*1.1);return Math.max(0,e*s*r())}case"humectation":{const s=Math.max(0,.8-l*1.2),d=e*s;return Math.max(0,d*r())}case"potentiel_hydrique":return Math.max(5,Math.min(195,e*r()));case"humidite_sol_10":case"humidite_sol_20":case"humidite_sol_30":case"humidite_sol_40":case"humidite_sol_50":case"humidite_sol_60":case"humidite_sol_90":return Math.max(5,e*r());case"tensio_30":case"tensio_60":case"tensio_90":case"tensio_120":case"tensio_150":case"tensio_180":return Math.max(5,e*r());case"conductivite":{const s=20+i*10+(Math.random()-.5)*8;return s<15?0:Math.max(0,(s-15)*.08*r())}case"pluie":return Math.random()<.15?e*Math.random()*2:0;case"vent_vitesse":case"vent_rafales":{const s=e*(.6+l*.8)*r();return Math.max(0,s)}case"vent_direction":case"vent_direction_rafales":return(e+(Math.random()-.5)*60+360)%360;default:return Math.max(0,e*r())}}function Ze(t,e,o,n,a,i,l="",r="",s=""){const p={t:14,r:10,b:28,l:46},h=600-p.l-p.r,b=180-p.t-p.b,x=Math.max(1,Math.round(a/15)),u=Array.from({length:n},(w,j)=>{const B=(n-1-j)*a;if(i){let U=0;for(let q=0;q<x;q++)U+=re(l,e/x,B+q*(a/x));return U}else return re(l,e,B)}),$=Math.min(...u),y=Math.max(...u),T=y-$||1,f=w=>p.l+w/Math.max(n-1,1)*h,E=w=>p.t+b-(w-$)/T*b,M=`sg_${Math.random().toString(36).slice(2)}`,[A,z]=Ge(o,l);let I=`<defs>
    <linearGradient id="${M}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${A}"/>
      <stop offset="100%" stop-color="${z}"/>
    </linearGradient>
    <clipPath id="clip_${M}">
      <rect x="${p.l}" y="${p.t}" width="${h}" height="${b}"/>
    </clipPath>
  </defs>`;for(let w=0;w<=4;w++){const j=p.t+w/4*b,B=y-w/4*T,U=Math.abs(B)>=100?B.toFixed(0):Math.abs(B)>=10?B.toFixed(1):B.toFixed(2);I+=`<line x1="${p.l}" y1="${j.toFixed(1)}" x2="${600-p.r}" y2="${j.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,I+=`<text x="${p.l-5}" y="${(j+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${U}</text>`}const g=Math.max(1,Math.floor(n/6));for(let w=0;w<n;w+=g){const j=f(w).toFixed(1);I+=`<line x1="${j}" y1="${p.t}" x2="${j}" y2="${p.t+b}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,I+=`<text x="${j}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${le((n-w)*a)}</text>`}const _=u.map((w,j)=>({x:f(j),y:E(w)})),K=Le(_),Be=K+` L${f(n-1).toFixed(1)},${p.t+b} L${p.l.toFixed(1)},${p.t+b} Z`;I+=`<path d="${Be}" fill="${z}" opacity="0.07" clip-path="url(#clip_${M})"/>`,I+=`<path d="${K}" fill="none" stroke="url(#${M})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${M})"/>`,I+=`<rect class="chart-hover-rect" x="${p.l}" y="${p.t}" width="${h}" height="${b}" fill="transparent" style="cursor:crosshair"/>`,t.innerHTML=I;const Z=Ue(),ie=t.querySelector(".chart-hover-rect");if(!ie)return;const k=document.createElementNS("http://www.w3.org/2000/svg","circle");k.setAttribute("r","4"),k.setAttribute("fill",o),k.setAttribute("stroke","#fff"),k.setAttribute("stroke-width","1.5"),k.style.display="none",k.style.pointerEvents="none",t.appendChild(k),ie.addEventListener("mousemove",w=>{const j=t.getBoundingClientRect(),B=(w.clientX-j.left)*(600/j.width),U=Math.max(0,Math.min(1,(B-p.l)/h)),q=Math.round(U*(n-1));if(q<0||q>=u.length)return;const ee=u[q];k.setAttribute("cx",f(q)),k.setAttribute("cy",E(ee)),k.style.display="";const He=Math.abs(ee)>=100?ee.toFixed(1):ee.toFixed(2);Z.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${r}</div>
      <div class="chart-tooltip-val" style="color:${o}">${He} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${s}</span></div>
      <div class="chart-tooltip-ts">${le((n-q)*a)}</div>
    `,Z.style.display="block",Z.style.left=`${Math.min(w.clientX+12,window.innerWidth-160)}px`,Z.style.top=`${w.clientY-10}px`}),ie.addEventListener("mouseleave",()=>{Z.style.display="none",k.style.display="none"})}function Qe(t){const o={pluie:()=>v(20,120),temperature:()=>v(80,400),rayonnement:()=>v(500,3e3),etp:()=>te(15,80),temperature_min:()=>v(50,500),temperature_gel:()=>v(0,80)}[t.id];return o?o():"—"}function Ke(){const t=document.getElementById("period-presets"),e=document.getElementById("custom-date-row"),o=document.getElementById("time-step"),n=new Date,a=new Date(n-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),t.addEventListener("click",i=>{const l=i.target.closest(".period-preset-btn");l&&(t.querySelectorAll(".period-preset-btn").forEach(r=>r.classList.remove("active")),l.classList.add("active"),D=l.dataset.period,D==="custom"?e.style.display="flex":(e.style.display="none",o&&(o.value=qe(D)),W()))}),document.getElementById("date-from").addEventListener("change",ge),document.getElementById("date-to").addEventListener("change",ge),o.addEventListener("change",W)}function ge(){const t=document.getElementById("date-from").value,e=document.getElementById("date-to").value;t&&e&&(Y=new Date(t),J=new Date(e+"T23:59:59"),Y<J&&W())}function et(){oe()}function oe(){var e,o,n;const t=document.getElementById("compare-control");if(t)if(V){const a=X.find(l=>l.id===V),i=a?`${a.model} — ${a.serial}`:"Capteur";t.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${i} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(e=t.querySelector(".compare-clear-icon"))==null||e.addEventListener("click",l=>{l.stopPropagation(),V=null,oe(),W()}),(o=t.querySelector("#compare-open-btn"))==null||o.addEventListener("click",$e)}else t.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(n=t.querySelector("#compare-open-btn"))==null||n.addEventListener("click",$e)}function $e(){const t=document.getElementById("compare-dropdown");if(t){t.remove();return}const e=document.getElementById("compare-control"),o=X.filter(i=>i.id!==C),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher un capteur…">
    <div class="compare-dropdown-list">
      ${o.map(i=>`<div class="compare-dropdown-item${i.id===V?" active":""}" data-id="${i.id}"><i class="bi bi-broadcast"></i> ${i.model} — ${i.serial}</div>`).join("")}
    </div>
  `,e.appendChild(n);const a=n.querySelector(".compare-search-input");a.focus(),a.addEventListener("input",i=>{const l=i.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(r=>{r.style.display=r.textContent.toLowerCase().includes(l)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(i=>{i.addEventListener("click",()=>{V=parseInt(i.dataset.id),n.remove(),oe(),W()})}),setTimeout(()=>{document.addEventListener("click",function i(l){!n.contains(l.target)&&!e.contains(l.target)&&(n.remove(),document.removeEventListener("click",i))})},0)}function tt(){const t=N.find(n=>{var a;return(a=c.parcelIds)==null?void 0:a.includes(n.id)}),e=t?ne.find(n=>n.id===t.orgId):c.orgId?ne.find(n=>n.id===c.orgId):null,o=me(C);nt(t,e,o),se(),at(t,e),ot(),Te(),it(),lt(),G(t),dt(),ut(),ke()}function nt(t,e,o){let n=o.label||`Capteur ${c.serial}`;const a=document.getElementById("panel-ident");a.innerHTML=`
    <div class="panel-row" data-field="label">
      <span class="panel-row-key">Nom</span>
      <input type="text" class="panel-field-input" data-val value="${n.replace(/"/g,"&quot;")}">
    </div>
    <div class="panel-row"><span class="panel-row-key">Modèle</span><span class="panel-row-val">${c.model}</span></div>
    <div class="panel-row"><span class="panel-row-key">Numéro série</span><span class="panel-row-val">${c.serial}</span></div>
    <div class="panel-row"><span class="panel-row-key">Réseau télécom</span><span class="panel-row-val">${c.telecom||"Sigfox"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Exploitation</span><span class="panel-row-val">${e?e.name:"—"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Date d'ajout</span><span class="panel-row-val">15/01/2023</span></div>
  `;const i=a.querySelector('[data-field="label"] input');if(i){const l=()=>{const r=i.value.trim();r&&r!==n&&(n=r,R(C,{label:r}),Ee(r,{label:"Capteurs",href:"capteurs.html"}))};i.addEventListener("change",l),i.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),i.blur())})}}function at(t,e){const o=(e==null?void 0:e.ville)||"—",n=(e==null?void 0:e.departement)||"",a=(t==null?void 0:t.lat)??null,i=(t==null?void 0:t.lng)??null;document.getElementById("panel-loc").innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${o}${n?` (${n})`:""}</span>
    </div>
    ${t?`<div class="panel-row" id="panel-loc-parcel"><span class="panel-row-key">Parcelle</span><span class="panel-row-val">${t.name} — ${t.area} ha</span></div>`:""}
    ${a!=null?`<div class="panel-row"><a href="https://www.google.com/maps?q=${a.toFixed(6)},${i.toFixed(6)}" target="_blank" class="itinerary-link"><i class="bi bi-signpost-2"></i> Obtenir l'itinéraire</a></div>`:""}
  `}function ot(){const t=c.networkQuality||80,e=c.messages7d||85,o=t>=80?"var(--ok)":t>=60?"var(--warn)":"var(--err)";document.getElementById("panel-signal").innerHTML=`
    <div class="signal-bar-wrap">
      <div class="signal-bar-track">
        <div class="signal-bar-fill" style="width:${t}%;background:${o}"></div>
      </div>
      <span class="signal-bar-pct" style="color:${o}">${t}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Messages / 7 j</span>
      <span class="panel-row-val">${e}%</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Opérateur</span>
      <span class="panel-row-val">${c.telecom||"Sigfox"}</span>
    </div>
  `}function Te(){const t=document.getElementById("panel-events");if(c.event){const e=Array.isArray(c.event)?c.event:[c.event];t.innerHTML=e.map((o,n)=>{const a=o.toLowerCase().includes("déplacé");return`
      <div class="event-item event-item--warn" style="justify-content:space-between;gap:12px">
        <div style="display:flex;align-items:flex-start;gap:10px;min-width:0">
          <i class="bi bi-exclamation-triangle-fill" style="flex-shrink:0;margin-top:2px"></i>
          <div>
            <div class="event-item-label">${o}</div>
            <div class="event-item-date">Depuis le 28/03/2026</div>
          </div>
        </div>
        ${a?`<button class="btn-secondary btn-sm ev-stop-btn" data-ev-idx="${n}" style="flex-shrink:0;white-space:nowrap">Arrêter l'événement</button>`:""}
      </div>`}).join(""),t.querySelectorAll(".ev-stop-btn").forEach(o=>{o.addEventListener("click",()=>{const n=+o.dataset.evIdx;Array.isArray(c.event)?(c.event=c.event.filter((a,i)=>i!==n),c.event.length||(c.event=null)):c.event=null,Te()})})}else t.innerHTML='<div class="panel-empty"><i class="bi bi-check-circle" style="color:var(--ok)"></i> Aucun événement</div>'}function it(){const t=O(c);document.getElementById("panel-metrics").innerHTML=t.map(e=>`
    <div class="metric-pill-row">
      <span class="metric-dot" style="background:${e.color}"></span>
      <span class="metric-pill-name">${e.name}</span>
      <span class="metric-pill-unit">${e.unit}</span>
    </div>
  `).join("")}function lt(){const t=document.getElementById("panel-config");if(!t)return;const e=c.model||"",o=e.startsWith("CHP"),n=e.startsWith("CAPA"),a=e==="EC",i=c.isVirtual;let l="";if(i&&(l+=`
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
    `),o){const r=e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[30,60]:[45,90],s=c.depth??r[0];l+=`
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
    `}(n||a)&&(l+=`
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
    `),l?t.innerHTML=l:t.innerHTML='<div class="panel-empty">Pas de configuration spécifique pour ce modèle.</div>'}let H=N.filter(t=>{var e;return t.orgId===c.orgId&&((e=c.parcelIds)==null?void 0:e.includes(t.id))}).map(t=>t.id);(function(){const e=me(C);e.linkedPlotIds?H=e.linkedPlotIds:R(C,{linkedPlotIds:H})})();function se(){var s;const t=document.getElementById("panel-plots");if(!t)return;const e=c.orgId||((s=N.find(d=>{var m;return(m=c.parcelIds)==null?void 0:m.includes(d.id)}))==null?void 0:s.orgId),o=N.filter(d=>d.orgId===e),n=o.filter(d=>H.includes(d.id)),a=o.filter(d=>!H.includes(d.id));t.innerHTML=n.length?n.map(d=>`
      <div class="sensor-linked-row">
        <a href="parcelle-detail.html?id=${d.id}" class="sensor-linked-link">${d.name}</a>
        <span class="sensor-link-serial" style="color:var(--txt3)">${d.area?d.area+" ha":""}</span>
        <button class="remove-plot-btn icon-btn" data-id="${d.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
      </div>
    `).join(""):'<div class="panel-empty" style="margin-bottom:6px">Aucune parcelle liée</div>',t.querySelectorAll(".remove-plot-btn").forEach(d=>{d.addEventListener("click",()=>{H=H.filter(m=>m!==parseInt(d.dataset.id)),R(C,{linkedPlotIds:H}),se()})});const i=document.getElementById("plot-add-row"),l=document.getElementById("add-plot-select");i&&l&&(a.length>0?(l.innerHTML='<option value="">Ajouter une parcelle…</option>'+a.map(d=>`<option value="${d.id}">${d.name}${d.area?" — "+d.area+" ha":""}</option>`).join(""),i.style.display=""):i.style.display="none");const r=document.getElementById("add-plot-btn");r&&(r.onclick=()=>{const d=parseInt(document.getElementById("add-plot-select").value);!d||H.includes(d)||(H.push(d),R(C,{linkedPlotIds:H}),se())})}function rt(t,e){const o=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(o),download:e});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function st(){const t=O(c).filter(m=>m.baseVal);let e;if(V){const m=X.find(h=>h.id===V),p=m?O(m).filter(h=>h.baseVal):[];e=[...t.map(h=>({h:`[${c.serial}] ${h.name} (${h.unit})`,gen:h.baseVal})),...p.map(h=>({h:`[${m.serial}] ${h.name} (${h.unit})`,gen:h.baseVal}))]}else e=t.map(m=>({h:`${m.name} (${m.unit})`,gen:m.baseVal}));const o=Ce()*6e4,n=ae()*6e4,a=D==="custom"&&J?J:new Date,i=D==="custom"&&Y?Y:new Date(a-o),l=Math.min(Math.ceil((a-i)/n)+1,500),r=(a-i)/Math.max(l-1,1),s=["Horodatage",...e.map(m=>m.h)].join(";"),d=Array.from({length:l},(m,p)=>[new Date(i.getTime()+p*r).toISOString().replace("T"," ").slice(0,19),...e.map(b=>b.gen())].join(";"));rt([s,...d].join(`\r
`),`${c.serial}_${D}_${new Date().toISOString().slice(0,10)}.csv`)}function ct({title:t,message:e,confirmLabel:o="Confirmer",onConfirm:n}){const a=document.createElement("div");a.className="modal add-modal",a.innerHTML=`
    <div class="add-modal-content" style="max-width:400px">
      <div class="add-modal-header">
        <span class="add-modal-title">${t}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div style="padding:16px 20px;display:flex;flex-direction:column;gap:16px">
        <p style="margin:0;font-size:13px;color:var(--txt2);line-height:1.5">${e}</p>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button class="btn-secondary confirm-cancel">Annuler</button>
          <button class="btn-danger confirm-ok">${o}</button>
        </div>
      </div>
    </div>`,a.querySelector(".add-modal-close").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-cancel").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-ok").addEventListener("click",()=>{a.remove(),n()}),a.addEventListener("click",i=>{i.target===a&&a.remove()}),document.body.appendChild(a)}function dt(){const t=document.getElementById("panel-actions");t.innerHTML=`
    <button class="action-btn action-btn--danger" id="unlink-sensor-btn"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `,t.querySelector("#unlink-sensor-btn").addEventListener("click",()=>{const e=N.filter(n=>c.parcelIds.includes(n.id)),o=e.length?e.map(n=>`<strong>${n.name}</strong>`).join(", "):"aucune parcelle";ct({title:"Retirer le capteur de l'exploitation",message:`Retirer <strong>${c.model} ${c.serial}</strong> de l'exploitation ?<br><br>Parcelles liées : ${o}.<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>showToast("Capteur retiré de l'exploitation (fonctionnalité à venir)")})})}function ut(){const t=(c==null?void 0:c.orgId)===1,e=(()=>{const a=S.find(l=>l.source==="réseau"&&l.role==="agent"&&l.orgIds.includes(c==null?void 0:c.orgId));if(a)return`${a.prenom} ${a.nom}`;const i=S.find(l=>l.source==="réseau"&&(l.role==="admin"||l.role==="propriétaire"));return i?`${i.prenom} ${i.nom}`:"Technicien réseau"})(),o=t?(()=>{const a=S.find(i=>i.source==="adherent"&&i.orgIds.includes(1));return a?`${a.prenom} ${a.nom}`:e})():e,n=[{type:"installation",label:"Installation initiale",date:"15/01/2023",user:e,icon:"bi-box-arrow-in-down"},{type:"nettoyage",label:"Nettoyage pluviomètre",date:"20/03/2023",user:o,icon:"bi-droplet"},{type:"batterie",label:"Changement de batterie",date:"10/06/2023",user:e,icon:"bi-battery-charging"},{type:"note",label:"Redressage capteur déplacé",date:"02/11/2023",user:o,icon:"bi-chat-text"}];document.getElementById("panel-maint").innerHTML=`
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
  `}let P=null,F=null;function mt(t){if(P!==null)return;const e=(t==null?void 0:t.orgId)??c.orgId,o=me(C);P=o.linkedOrgMemberIds??S.filter(n=>{var a,i,l;return n.source==="adherent"&&((a=n.orgIds)==null?void 0:a.includes(e))&&((i=c.parcelIds)!=null&&i.length?c.parcelIds.some(r=>{var s;return(s=n.parcelIds)==null?void 0:s.includes(r)}):(l=n.orgIds)==null?void 0:l.includes(e))}).map(n=>n.id),F=o.linkedConseillerIds??S.filter(n=>{var a,i;return n.source==="réseau"&&((a=c.parcelIds)!=null&&a.length?c.parcelIds.some(l=>{var r;return(r=n.parcelIds)==null?void 0:r.includes(l)}):(i=n.orgIds)==null?void 0:i.includes(e))}).map(n=>n.id)}function xe(t,e,o){return`<div class="member-row">
    <div>
      <span class="member-name">${t.prenom} ${t.nom}</span>
      ${o?`<span class="member-role-badge">${t.role}</span>`:""}
    </div>
    ${e?`<button class="remove-membre-btn icon-btn" data-id="${t.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function G(t){var x;mt(t);const e=((x=document.getElementById("sidebar"))==null?void 0:x.getAttribute("data-role"))==="adherent-reseau",o=(t==null?void 0:t.orgId)??c.orgId,n=document.getElementById("panel-membres"),a=document.getElementById("panel-membres-section"),i=S.filter(u=>{var $;return u.source==="adherent"&&(($=u.orgIds)==null?void 0:$.includes(o))}),l=i.filter(u=>P.includes(u.id));a&&(a.style.display=!e&&i.length===0?"none":""),n&&(n.innerHTML=l.length?l.map(u=>xe(u,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',n.querySelectorAll(".remove-membre-btn").forEach(u=>{u.addEventListener("click",()=>{P=P.filter($=>$!==parseInt(u.dataset.id)),R(C,{linkedOrgMemberIds:P}),G(t)})}));const r=document.getElementById("add-membre-org-row");r&&(r.style.display="");const s=document.getElementById("add-membre-org-select");s&&(s.innerHTML='<option value="">Associer un membre…</option>',i.filter(u=>!P.includes(u.id)).forEach(u=>{const $=document.createElement("option");$.value=u.id,$.textContent=`${u.prenom} ${u.nom}`,s.appendChild($)}));const d=document.getElementById("add-membre-org-btn");d&&(d.onclick=()=>{const u=parseInt(s==null?void 0:s.value);!u||P.includes(u)||(P.push(u),R(C,{linkedOrgMemberIds:P}),G(t))});const m=document.getElementById("panel-conseillers"),p=document.getElementById("panel-conseillers-section"),h=S.filter(u=>u.source==="réseau"&&F.includes(u.id));p&&(p.style.display=e&&h.length===0?"none":""),m&&(m.innerHTML=h.length?h.map(u=>xe(u,!e,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',e||m.querySelectorAll(".remove-membre-btn").forEach(u=>{u.addEventListener("click",()=>{F=F.filter($=>$!==parseInt(u.dataset.id)),R(C,{linkedConseillerIds:F}),G(t)})}));const b=document.getElementById("add-conseiller-row");if(b&&(b.style.display=e?"none":""),!e){const u=document.getElementById("add-membre-select");u&&(u.innerHTML='<option value="">Ajouter un conseiller…</option>',S.filter(y=>y.source==="réseau"&&!F.includes(y.id)).forEach(y=>{const T=document.createElement("option");T.value=y.id,T.textContent=`${y.prenom} ${y.nom} (${y.role})`,u.appendChild(T)}));const $=document.getElementById("add-membre-btn");$&&($.onclick=()=>{const y=parseInt(u==null?void 0:u.value);!y||F.includes(y)||(F.push(y),R(C,{linkedConseillerIds:F}),G(t))})}}function pt(){const t=N.find(a=>{var i;return(i=c.parcelIds)==null?void 0:i.includes(a.id)}),e=t?ne.find(a=>a.id===t.orgId):c.orgId?ne.find(a=>a.id===c.orgId):null;if(!(e!=null&&e.lat))return;const o=L.map("sensor-mini-map",{zoomControl:!1,attributionControl:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(o);const n=t==null?void 0:t.latlngs;if(Array.isArray(n)&&n.length>=3){const a=L.polygon(n,{color:"#0172A4",weight:1.5,fillColor:"#0172A4",fillOpacity:.3}).addTo(o),i=n.reduce((r,s)=>r+s[0],0)/n.length,l=n.reduce((r,s)=>r+s[1],0)/n.length;L.circleMarker([i,l],{radius:6,color:"white",fillColor:"#0172A4",fillOpacity:1,weight:2}).addTo(o),o.fitBounds(a.getBounds(),{padding:[10,10]})}else o.setView([e.lat,e.lng],13),L.circleMarker([e.lat,e.lng],{radius:6,color:"white",fillColor:"#0172A4",fillOpacity:1,weight:2}).addTo(o)}function ke(){var i,l,r,s,d;const e=(((i=document.getElementById("sidebar"))==null?void 0:i.getAttribute("data-role"))||"")==="adherent-reseau"&&(c==null?void 0:c.orgId)!==1;[(l=document.querySelector("#panel-plots"))==null?void 0:l.closest(".panel-section"),(r=document.querySelector("#panel-config"))==null?void 0:r.closest(".panel-section"),document.getElementById("panel-membres-section"),document.getElementById("panel-conseillers-section"),(s=document.querySelector("#panel-actions"))==null?void 0:s.closest(".panel-section"),(d=document.querySelector("#panel-maint"))==null?void 0:d.closest(".panel-section")].forEach(m=>{m&&(m.style.display=e?"none":"")});const o=document.querySelector('.detail-tab-btn[data-pane="tab-journal"]');o&&(o.style.display=e?"none":"");const n=document.getElementById("panel-loc-parcel");n&&(n.style.display=e?"none":"");const a=document.querySelector('#panel-ident [data-field="label"] input');a&&(a.readOnly=e,a.style.cssText=e?"cursor:default;background:transparent;border:none;padding:0;pointer-events:none;color:var(--txt)":"")}function vt(){const t=document.getElementById("detail-layout"),e=document.getElementById("panel-toggle"),o=e.querySelector("i");e.addEventListener("click",()=>{const n=t.classList.toggle("panel-collapsed");e.title=n?"Afficher le panneau":"Masquer le panneau",o.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}function ht(){document.querySelectorAll(".detail-tab-btn").forEach(t=>{t.addEventListener("click",()=>{var e;document.querySelectorAll(".detail-tab-btn").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(o=>o.classList.remove("active")),t.classList.add("active"),(e=document.getElementById(t.dataset.pane))==null||e.classList.add("active")})})}const ce=`sensor-journal-${C}`,de=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"},{id:"culture",label:"Culture parcelle",icon:"bi-flower1",color:"#24B066"},{id:"stade",label:"Stade phénologique",icon:"bi-calendar2-check",color:"#6B21A8"},{id:"irrigation",label:"Irrigation",icon:"bi-droplet-half",color:"#2E75B6"},{id:"cycle",label:"Cycle cultural",icon:"bi-arrow-repeat",color:"#c47d1a"}],we=new Set(["culture","stade","irrigation","cycle"]);function ft(){if((c==null?void 0:c.orgId)===1){const n=S.find(a=>a.source==="adherent"&&a.orgIds.includes(1));if(n)return`${n.prenom} ${n.nom}`}const e=S.find(n=>n.source==="réseau"&&n.role==="agent"&&n.orgIds.includes(c==null?void 0:c.orgId));if(e)return`${e.prenom} ${e.nom}`;const o=S.find(n=>n.source==="réseau"&&(n.role==="admin"||n.role==="propriétaire"));return o?`${o.prenom} ${o.nom}`:""}function ue(){try{const a=localStorage.getItem(ce);if(a)return JSON.parse(a)}catch{}const t=(c==null?void 0:c.orgId)===1,e=(()=>{const a=S.find(l=>l.source==="réseau"&&l.role==="agent"&&l.orgIds.includes(c==null?void 0:c.orgId));if(a)return`${a.prenom} ${a.nom}`;const i=S.find(l=>l.source==="réseau"&&(l.role==="admin"||l.role==="propriétaire"));return i?`${i.prenom} ${i.nom}`:"Technicien réseau"})(),o=t?(()=>{const a=S.find(i=>i.source==="adherent"&&i.orgIds.includes(1));return a?`${a.prenom} ${a.nom}`:e})():e,n=[{id:1,type:"installation",date:"2023-01-15",user:e,texte:""},{id:2,type:"nettoyage",date:"2023-03-20",user:o,texte:"Nettoyage pluviomètre après hiver"},{id:3,type:"batterie",date:"2023-06-10",user:e,texte:""},{id:4,type:"note",date:"2023-11-02",user:o,texte:"Capteur légèrement déplacé après passage tracteur — redressé"},{id:5,type:"cycle",date:"2026-03-01",user:o,texte:"Début de saison 2026",action:"début",annee:"2026"},{id:6,type:"culture",date:"2026-03-10",user:o,texte:"Culture confirmée pour la saison",action:"modification",culture:"Blé tendre"},{id:7,type:"stade",date:"2026-04-11",user:o,texte:"",stade:"BBCH 21 — Tallage actif",culture:"Blé tendre"},{id:8,type:"irrigation",date:"2026-04-20",user:o,texte:"Détecté via potentiel hydrique",volume:25,unite:"mm",methode:"Aspersion"},{id:9,type:"stade",date:"2026-05-02",user:o,texte:"",stade:"BBCH 30 — Début montaison",culture:"Blé tendre"}];return localStorage.setItem(ce,JSON.stringify(n)),n}function Ae(t){localStorage.setItem(ce,JSON.stringify(t))}function ve(){var i;const t=document.getElementById("sensor-journal-container");if(!t)return;const e=ue().slice().sort((l,r)=>r.date.localeCompare(l.date)),o=l=>{const[r,s,d]=l.split("-");return`${d}/${s}/${r}`},n=Object.fromEntries(de.map(l=>[l.id,l]));let a=`
    <div class="journal-add-bar">
      <button class="btn-secondary btn-sm" id="sjrn-add-btn" style="gap:6px">
        <i class="bi bi-plus-circle"></i> Ajouter une entrée
      </button>
    </div>
  `;e.length===0?a+='<div class="journal-empty">Aucune entrée dans le journal.</div>':(a+='<div class="journal-timeline">',e.forEach((l,r)=>{const s=n[l.type]||{label:l.type,icon:"bi-circle",color:"#8e8e93"};e.length-1,a+=`
        <div class="jrn-entry" data-id="${l.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot" style="background:${s.color}18;color:${s.color};border:1.5px solid ${s.color}50">
              <i class="bi ${s.icon}"></i>
            </div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${o(l.date)}</span>
              <span style="font-size:12px;font-weight:600;color:${s.color}">${s.label}</span>
              <button class="jrn-entry-delete" data-id="${l.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>
            </div>
            ${l.texte?`<div class="jrn-entry-texte">${l.texte}</div>`:""}
            ${l.type==="culture"?`<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-tag"></i>${l.action==="ajout"?"Ajout":l.action==="retrait"?"Retrait":"Modification"}</span>
                ${l.culture?`<span class="jrn-entry-meta-chip"><i class="bi bi-flower1"></i>${l.culture}</span>`:""}
              </div>`:""}
            ${l.type==="stade"?`<div class="jrn-entry-meta">
                ${l.stade?`<span class="jrn-entry-meta-chip"><i class="bi bi-diagram-3"></i>${l.stade}</span>`:""}
                ${l.culture?`<span class="jrn-entry-meta-chip">${l.culture}</span>`:""}
              </div>`:""}
            ${l.type==="irrigation"?`<div class="jrn-entry-meta">
                ${l.volume?`<span class="jrn-entry-meta-chip"><i class="bi bi-droplet-fill"></i>${l.volume} ${l.unite||"mm"}</span>`:""}
                ${l.methode?`<span class="jrn-entry-meta-chip"><i class="bi bi-water"></i>${l.methode}</span>`:""}
              </div>`:""}
            ${l.type==="cycle"?`<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-arrow-right-circle"></i>${l.action==="fin"?"Fin de cycle":"Début de cycle"}</span>
                ${l.annee?`<span class="jrn-entry-meta-chip"><i class="bi bi-calendar3"></i>${l.annee}</span>`:""}
              </div>`:""}
            ${l.user?`<div style="font-size:11px;color:var(--txt3);margin-top:2px">${l.user}</div>`:""}
          </div>
        </div>
      `}),a+="</div>"),t.innerHTML=a,(i=t.querySelector("#sjrn-add-btn"))==null||i.addEventListener("click",yt),t.querySelectorAll(".jrn-entry-delete").forEach(l=>{l.addEventListener("click",()=>{const r=parseInt(l.dataset.id);Ae(ue().filter(s=>s.id!==r)),ve()})})}const bt=[{label:"Maintenance",types:de.filter(t=>!we.has(t.id))},{label:"Agricole",types:de.filter(t=>we.has(t.id))}];function yt(){const t=new Date().toISOString().slice(0,10),e=document.createElement("div");e.className="modal add-modal",e.innerHTML=`
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter une entrée</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="sjrn-f-type" class="journal-form-input">
            ${bt.map(i=>`
              <optgroup label="${i.label}">
                ${i.types.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
              </optgroup>`).join("")}
          </select>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="sjrn-f-date" class="journal-form-input" value="${t}">
        </div>
        <div id="sjrn-f-extra"></div>
        <div class="journal-form-row">
          <label class="journal-form-label">Note</label>
          <textarea id="sjrn-f-texte" class="journal-form-textarea" placeholder="Observations éventuelles…"></textarea>
        </div>
        <button class="btn-primary btn-sm" id="sjrn-f-save" style="width:100%;justify-content:center">
          Enregistrer
        </button>
      </div>
    </div>
  `,e.querySelector(".add-modal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",i=>{i.target===e&&e.remove()});const o=e.querySelector("#sjrn-f-type"),n=e.querySelector("#sjrn-f-extra"),a=()=>{const i=o.value;i==="culture"?n.innerHTML=`
        <div class="journal-form-row">
          <label class="journal-form-label">Action</label>
          <select id="sjrn-f-action" class="journal-form-input">
            <option value="ajout">Ajout</option>
            <option value="modification" selected>Modification</option>
            <option value="retrait">Retrait</option>
          </select>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Culture</label>
          <input type="text" id="sjrn-f-culture" class="journal-form-input" placeholder="Ex : Blé tendre">
        </div>`:i==="stade"?n.innerHTML=`
        <div class="journal-form-row">
          <label class="journal-form-label">Stade (BBCH)</label>
          <input type="text" id="sjrn-f-stade" class="journal-form-input" placeholder="Ex : BBCH 30 — Montaison">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Culture</label>
          <input type="text" id="sjrn-f-culture" class="journal-form-input" placeholder="Culture concernée">
        </div>`:i==="irrigation"?n.innerHTML=`
        <div class="journal-form-grid">
          <div class="journal-form-row">
            <label class="journal-form-label">Volume</label>
            <input type="number" id="sjrn-f-volume" class="journal-form-input" min="0" step="0.5" placeholder="0">
          </div>
          <div class="journal-form-row">
            <label class="journal-form-label">Unité</label>
            <select id="sjrn-f-unite" class="journal-form-input">
              <option value="mm" selected>mm</option>
              <option value="m³/ha">m³/ha</option>
              <option value="m³">m³</option>
            </select>
          </div>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Méthode</label>
          <select id="sjrn-f-methode" class="journal-form-input">
            <option value="">— Non précisé —</option>
            <option>Aspersion</option><option>Goutte à goutte</option>
            <option>Gravitaire</option><option>Pivot</option><option>Autre</option>
          </select>
        </div>`:i==="cycle"?n.innerHTML=`
        <div class="journal-form-row">
          <label class="journal-form-label">Événement</label>
          <select id="sjrn-f-action" class="journal-form-input">
            <option value="début">Début de cycle</option>
            <option value="fin">Fin de cycle</option>
          </select>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Année</label>
          <input type="text" id="sjrn-f-annee" class="journal-form-input" value="${new Date().getFullYear()}">
        </div>`:n.innerHTML=""};o.addEventListener("change",a),e.querySelector("#sjrn-f-save").addEventListener("click",()=>{var m,p,h,b,x,u,$,y,T;const i=o.value,l=e.querySelector("#sjrn-f-date").value||t,r=ft(),s=e.querySelector("#sjrn-f-texte").value.trim(),d={id:Date.now(),type:i,date:l,user:r,texte:s};if(i==="culture")d.action=(m=e.querySelector("#sjrn-f-action"))==null?void 0:m.value,d.culture=(p=e.querySelector("#sjrn-f-culture"))==null?void 0:p.value.trim();else if(i==="stade")d.stade=(h=e.querySelector("#sjrn-f-stade"))==null?void 0:h.value.trim(),d.culture=(b=e.querySelector("#sjrn-f-culture"))==null?void 0:b.value.trim();else if(i==="irrigation"){const f=parseFloat((x=e.querySelector("#sjrn-f-volume"))==null?void 0:x.value);d.volume=isNaN(f)?0:f,d.unite=(u=e.querySelector("#sjrn-f-unite"))==null?void 0:u.value,d.methode=($=e.querySelector("#sjrn-f-methode"))==null?void 0:$.value}else i==="cycle"&&(d.action=(y=e.querySelector("#sjrn-f-action"))==null?void 0:y.value,d.annee=(T=e.querySelector("#sjrn-f-annee"))==null?void 0:T.value.trim());Ae([d,...ue()]),e.remove(),ve()}),document.body.appendChild(e)}
