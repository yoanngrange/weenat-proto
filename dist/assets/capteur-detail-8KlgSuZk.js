import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{s as Y}from"./sensors-Bk1sI8WC.js";import{p as U}from"./plots-BFmvZ9cD.js";import{o as se}from"./orgs-Cx4wNzLL.js";import{m as Q}from"./members-C_ssoUx1.js";import{u as $e}from"./breadcrumb-DEBQjfiD.js";import{a as de,p as D}from"./store-InOgbptE.js";const je=new URLSearchParams(window.location.search),C=parseInt(je.get("id")),d=Y.find(e=>e.id===C),xe={pluie:{name:"Pluie",unit:"mm",color:"#2E75B6",baseVal:()=>u(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0},temperature:{name:"Température",unit:"°C",color:"#FBAF05",baseVal:()=>u(10,28),cumul:{label:"Degrés-jours (DJC)",unit:"°j"}},humidite_air:{name:"Humidité",unit:"%",color:"#5B12A4",baseVal:()=>u(40,90)},dpv:{name:"DPV",unit:"kPa",color:"#5E88EC",baseVal:()=>te(.1,2.5)},vent_vitesse:{name:"Vent – vitesse",unit:"km/h",color:"#616161",baseVal:()=>u(0,40)},vent_rafales:{name:"Vent – rafales",unit:"km/h",color:"#525252",baseVal:()=>u(5,60)},vent_direction:{name:"Vent – direction",unit:"°",color:"#424242",baseVal:()=>u(0,360)},vent_direction_rafales:{name:"Vent – direction rafales",unit:"°",color:"#343232",baseVal:()=>u(0,360)},rayonnement:{name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",baseVal:()=>u(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}},etp:{name:"ETP",unit:"mm/j",color:"#7DBDD7",baseVal:()=>te(.5,5),cumul:{label:"Cumul ETP",unit:"mm"}},temperature_min:{name:"Température min",unit:"°C",color:"#FEE7B4",baseVal:()=>u(-2,15),cumul:{label:"Heures de froid",unit:"h"}},humidite_sol_10:{name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",baseVal:()=>u(15,45)},humidite_sol_20:{name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",baseVal:()=>u(15,45)},humidite_sol_30:{name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",baseVal:()=>u(15,45)},humidite_sol_40:{name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",baseVal:()=>u(17,43)},humidite_sol_50:{name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",baseVal:()=>u(18,42)},humidite_sol_60:{name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",baseVal:()=>u(18,42)},humidite_sol_90:{name:"Teneur en eau du sol 90 cm",unit:"%vol",color:"#B14C19",baseVal:()=>u(20,40)},temp_sol:{name:"Température du sol",unit:"°C",color:"#795548",baseVal:()=>u(8,22)},potentiel_hydrique:{name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",baseVal:()=>{const e=new Date().getMonth();return Math.round(10+(.5-.5*Math.cos(2*Math.PI*e/12))*140)}},tensio_30:{name:"Tension sol 30 cm",unit:"cbar",color:"#46DA82",baseVal:()=>u(10,80)},tensio_60:{name:"Tension sol 60 cm",unit:"cbar",color:"#F608C2",baseVal:()=>u(10,80)},tensio_90:{name:"Tension sol 90 cm",unit:"cbar",color:"#B14C19",baseVal:()=>u(10,80)},tensio_120:{name:"Tension sol 120 cm",unit:"cbar",color:"#7D9537",baseVal:()=>u(10,80)},tensio_150:{name:"Tension sol 150 cm",unit:"cbar",color:"#5C7020",baseVal:()=>u(10,80)},tensio_180:{name:"Tension sol 180 cm",unit:"cbar",color:"#3C4E10",baseVal:()=>u(10,80)},conductivite:{name:"Conductivité",unit:"mS/cm",color:"#2BCDDE",baseVal:()=>te(.1,3)},humectation:{name:"Humectation foliaire",unit:"h",color:"#00887E",baseVal:()=>u(0,12)},par:{name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#4CBB17",baseVal:()=>u(0,2e3)},temperature_gel:{name:"Temp. feuille/gel",unit:"°C",color:"#FEE7B4",baseVal:()=>u(-3,12),cumul:{label:"Heures de gel",unit:"h"}},temp_rosee:{name:"Température de rosée",unit:"°C",color:"#72B0D8",baseVal:()=>u(4,16)},temp_seche:{name:"Température sèche",unit:"°C",color:"#23B19B",baseVal:()=>u(-5,10)},temp_humide:{name:"Température humide",unit:"°C",color:"#5E88EC",baseVal:()=>u(-7,8)}},Be={"P+":["pluie","temperature","humidite_air"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite_air"],T_MINI:["temp_sol"],W:["_vent"],"CHP-15/30":["potentiel_hydrique","temp_sol"],"CHP-30/60":["potentiel_hydrique","temp_sol"],"CHP-60/90":["humidite_sol_60","humidite_sol_90","temp_sol"],"CAPA-30-3":["_capa_vwc","_capa_temp"],"CAPA-60-6":["_capa_vwc","_capa_temp"],EC:["humidite_sol_30","temp_sol","conductivite"],LWS:["_lws_intensite","_lws_duree"],PYRANO:["rayonnement"],PAR:["par"],T_GEL:["temp_seche","temp_humide"]},pe={_capa_vwc:{name:"Humidité sol par horizon",unit:"%vol",color:"#ED9A2C",isVirtual:!0},_capa_temp:{name:"Température du sol par horizon",unit:"°C",color:"#795548",isVirtual:!0},_lws_intensite:{name:"Intensité d'humectation",unit:"mV",color:"#00887E",isVirtual:!0},_lws_duree:{name:"Durée d'humectation",unit:"h",color:"#003D39",isVirtual:!0},_vent:{name:"Vent",unit:"km/h",color:"#616161",isVirtual:!0}},we={"CAPA-30-3":[{id:"humidite_sol_10",label:"10 cm",color:"#105200"},{id:"humidite_sol_20",label:"20 cm",color:"#8C5E82"},{id:"humidite_sol_30",label:"30 cm",color:"#46DA82"}],"CAPA-60-6":[{id:"humidite_sol_10",label:"10 cm",color:"#105200"},{id:"humidite_sol_20",label:"20 cm",color:"#8C5E82"},{id:"humidite_sol_30",label:"30 cm",color:"#46DA82"},{id:"humidite_sol_40",label:"40 cm",color:"#949494"},{id:"humidite_sol_50",label:"50 cm",color:"#870021"},{id:"humidite_sol_60",label:"60 cm",color:"#F608C2"}]};function u(e,t){return Math.floor(Math.random()*(t-e+1))+e}function te(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}function R(e){return(Be[e.model]||["temperature","humidite_air"]).map(a=>{if(pe[a])return{id:a,...pe[a],current:null};const n=xe[a];return n?{id:a,...n,current:n.baseVal()}:null}).filter(Boolean)}let V=null,q="7d",J=null,G=null;function _e(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return q==="custom"&&J&&G?Math.max(60,Math.round((G-J)/6e4)):e[q]??10080}function ne(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function He(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function ue(){const e=_e(),t=ne();return Math.max(2,Math.min(200,Math.floor(e/t)))}const Ve={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"};function Pe(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const a=Y.filter(o=>o.orgId===d.orgId).sort((o,l)=>o.serial.localeCompare(l.serial)),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const s=document.createElement("select");s.className="breadcrumb-nav-select",s.innerHTML=a.map(o=>`<option value="${o.id}"${o.id===C?" selected":""}>${Ve[o.model]||o.model} · ${o.serial}</option>`).join(""),s.addEventListener("change",()=>{window.location.href=`capteur-detail.html?id=${s.value}`}),n.appendChild(s),t.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var t;if(!d){document.body.innerHTML='<div style="padding:40px"><h1>Capteur non trouvé</h1></div>';return}$e(`Capteur ${d.serial}`,{label:"Capteurs",href:"capteurs.html"}),Pe(),Fe(),N(),Qe(),ut(),Xe(),Ze(),dt(),mt(),me(),(t=document.getElementById("btn-export-csv"))==null||t.addEventListener("click",it);const e=document.getElementById("sidebar");e&&new MutationObserver(()=>{const a=U.find(n=>n.id===d.parcelId)||null;z(a)}).observe(e,{attributes:!0,attributeFilter:["data-role"]})});function Fe(){var a,n;const e=document.getElementById("latest-strip");if(!e)return;const t=R(d);if(t.forEach(s=>{if(s.isVirtual)return;const o=document.createElement("div");o.className="latest-card",o.style.borderTop=`3px solid ${s.color}`,o.innerHTML=`
      <div class="latest-card-name">${s.name}</div>
      <div class="latest-card-value">${s.current}<span class="latest-card-unit"> ${s.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `,o.style.cursor="default",e.appendChild(o)}),d.model==="TH"){const s=((a=t.find(i=>i.id==="temperature"))==null?void 0:a.current)||20,o=((n=t.find(i=>i.id==="humidite_air"))==null?void 0:n.current)||60,l=(s-(.55-.55*o/100)*(s-14.5)).toFixed(1),r=document.createElement("div");r.className="latest-card",r.style.borderTop="3px solid #e8a030",r.innerHTML=`
      <div class="latest-card-name">THI (Thermal Humidity Index)</div>
      <div class="latest-card-value">${l}<span class="latest-card-unit"> index</span></div>
      <div class="latest-card-ts">T-(0.55-0.55×HR/100)×(T-14.5)</div>
    `,r.style.cursor="default",e.appendChild(r)}}function Me(e){const t=document.createElement("div");t.className="chart-card",t.dataset.base=e.current,t.dataset.color=e.color,t.dataset.cumul=e.isCumul?"1":"",t.dataset.metricId=e.id,t.dataset.metricName=e.name,t.dataset.metricUnit=e.unit;const a=e.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${e.cumul.label}</span><span class="chart-cumul-value">${Ye(e)} ${e.cumul.unit}</span></div>`:"",s=e.id==="temperature"||e.id==="temperature_min"?qe(e.id):"";return t.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${e.color}">${e.name}</span>
      <span class="chart-card-unit">${e.unit}</span>
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${a}
    ${s}
  `,t}function De(e,t){R(t).forEach(n=>{if(n.isVirtual){Ee(e,n,t);return}e.appendChild(Me(n))})}function he(e,t,a){t.isVirtual?Ee(e,t,a):e.appendChild(Me(t))}function N(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",V){e.className="compare-rows";const a=Y.find(i=>i.id===V),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${d.model} — ${d.serial}</span></div>
      <div class="compare-col-header">
        <span>${a?`${a.model} — ${a.serial}`:"Capteur"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{V=null,ae(),N()});const s=R(d),o=a?R(a):[],l=s.map(i=>i.id);[...l,...o.map(i=>i.id).filter(i=>!l.includes(i))].forEach(i=>{const m=s.find(w=>w.id===i),f=o.find(w=>w.id===i),p=document.createElement("div");p.className="compare-row";const h=document.createElement("div");m?he(h,m,d):h.innerHTML='<div class="compare-chart-empty">—</div>';const y=document.createElement("div");f?he(y,f,a):y.innerHTML='<div class="compare-chart-empty">—</div>',p.appendChild(h),p.appendChild(y),e.appendChild(p)})}else e.className="charts-stack",De(e,d);Ue(),Re()}function qe(e){const t=e==="temperature_min",a=Math.round(Math.random()*200+50),n=Math.round(Math.random()*400+100);return`
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
  `}function Re(){document.querySelectorAll(".temp-thresh-input").forEach(e=>{e.addEventListener("change",()=>{var s,o;const t=e.closest(".temp-threshold-row"),a=e.dataset.type;parseFloat(e.value);const n=(o=(s=t.querySelector(`.temp-threshold-stat [data-type="${a}"]`))==null?void 0:s.closest(".temp-threshold-stat"))==null?void 0:o.querySelector(".temp-threshold-val");n&&(a==="cold"?n.textContent=`${Math.round(Math.random()*150+30)} h`:n.textContent=`${Math.round(Math.random()*350+80)} °j`)})})}function Ne(e){const t=ue(),a=Array.from({length:t},()=>u(5,35)),n=a.map(b=>Math.min(b+u(3,18),80)),s=Array.from({length:t},()=>u(0,359)),o=600,l=200,r=46,i=16,m=16,f=28,p=o-r-i,h=l-m-f,y=Math.ceil(Math.max(...n)/10)*10||50,w=b=>r+b/Math.max(t-1,1)*p,c=b=>m+h-b/y*h,$=n.map((b,M)=>`${w(M).toFixed(1)},${c(b).toFixed(1)}`).join("L"),g=[...a].reverse().map((b,M)=>`${w(t-1-M).toFixed(1)},${c(b).toFixed(1)}`).join("L"),k=`M${$}L${g}Z`,v=a.map((b,M)=>`${M?"L":"M"}${w(M).toFixed(1)},${c(b).toFixed(1)}`).join(""),_=[.25,.5,.75].map(b=>{const M=(m+h-b*h).toFixed(1);return`<line x1="${r}" y1="${M}" x2="${o-i}" y2="${M}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),E=[0,.5,1].map(b=>{const M=m+h-b*h;return`<text x="${r-4}" y="${(M+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(b*y)}</text>`}).join(""),A=Math.max(1,Math.round(t/25)),O=[];for(let b=0;b<t;b+=A){const M=w(b).toFixed(1),K=(m+h*.35).toFixed(1);O.push(`<g transform="translate(${M},${K}) rotate(${s[b]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const I=document.createElement("div");I.className="chart-card",I.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
    </div>
    <svg width="100%" height="${l}" viewBox="0 0 ${o} ${l}" preserveAspectRatio="none">
      ${E}${_}
      <path d="${k}" fill="#7bc4b0" opacity=".18"/>
      <path d="${v}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${O.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(I)}function Ee(e,t,a){if(t.id==="_vent"){Ne(e);return}const n=document.createElement("div");if(n.className="chart-card chart-card--multi",t.id==="_capa_vwc"||t.id==="_capa_temp"){const s=we[a.model]||[],o=t.id==="_capa_vwc",l=o?"Humidité sol par horizon":"Température du sol par horizon",r=o?"%vol":"°C",i=s.map(m=>`<span class="multi-legend-dot" style="background:${m.color}"></span><span class="multi-legend-label">${m.label}</span>`).join("");n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${t.color}">${l}</span>
        <span class="chart-card-unit">${r}</span>
      </div>
      <div class="multi-chart-legend">${i}</div>
      <svg class="chart-svg chart-svg--multi" width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none"
           data-virtual="${t.id}" data-model="${a.model}"></svg>
    `,e.appendChild(n),requestAnimationFrame(()=>Ce(n.querySelector(".chart-svg--multi"),s,o));return}if(t.id==="_lws_intensite"||t.id==="_lws_duree"){const s=t.id==="_lws_intensite",o=s?"Intensité d'humectation":"Durée d'humectation",l=s?"mV":"h",r=s?"#78d8a0":"#45c090",i=s?u(0,800):u(0,12),m=s?"humectation":"lws_duree";n.dataset.base=i,n.dataset.color=r,n.dataset.cumul="",n.dataset.metricId=m,n.dataset.metricName=o,n.dataset.metricUnit=l,n.classList.remove("chart-card--multi"),n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${r}">${o}</span>
        <span class="chart-card-unit">${l}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    `,e.appendChild(n)}}function Ce(e,t,a){const n=ue(),s=ne(),o=600,l=200,r={t:14,r:10,b:28,l:46},i=o-r.l-r.r,m=l-r.t-r.b,f=t.map(v=>{var A;const _=a?v.id:"temp_sol",E=((A=xe[_])==null?void 0:A.baseVal())||25;return{color:v.color,label:v.label,vals:Array.from({length:n},(O,I)=>{const b=(n-1-I)*s,M=t.indexOf(v)*1.5;return Math.max(0,re(_,E+M,b))})}}),p=f.flatMap(v=>v.vals),h=Math.min(...p),y=Math.max(...p),w=y-h||1,c=v=>r.l+v/Math.max(n-1,1)*i,$=v=>r.t+m-(v-h)/w*m;let g="<defs></defs>";for(let v=0;v<=4;v++){const _=r.t+v/4*m,E=y-v/4*w,A=Math.abs(E)>=100?E.toFixed(0):E.toFixed(1);g+=`<line x1="${r.l}" y1="${_.toFixed(1)}" x2="${o-r.r}" y2="${_.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,g+=`<text x="${r.l-5}" y="${(_+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${A}</text>`}const k=Math.max(1,Math.floor(n/6));for(let v=0;v<n;v+=k){const _=c(v).toFixed(1);g+=`<line x1="${_}" y1="${r.t}" x2="${_}" y2="${r.t+m}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,g+=`<text x="${_}" y="${l-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ie((n-v)*s)}</text>`}f.forEach(v=>{const _=v.vals.map((E,A)=>({x:c(A),y:$(E)}));g+=`<path d="${Ie(_)}" fill="none" stroke="${v.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}),e.innerHTML=g}let Z=null;function Oe(){return Z||(Z=document.createElement("div"),Z.className="chart-tooltip",document.body.appendChild(Z)),Z}function We(e,t){return t==="temperature"||t==="temperature_min"?["#6eb4d4","#e07050"]:t==="temperature_gel"?["#a0d8f0","#6090d0"]:[ze(e,.55),e]}function ze(e,t){const a=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return`#${Math.round(a+(255-a)*t).toString(16).padStart(2,"0")}${Math.round(n+(255-n)*t).toString(16).padStart(2,"0")}${Math.round(s+(255-s)*t).toString(16).padStart(2,"0")}`}function Ie(e){if(e.length<2)return"";let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let a=0;a<e.length-1;a++){const n=e[Math.max(a-1,0)],s=e[a],o=e[a+1],l=e[Math.min(a+2,e.length-1)],r=s.x+(o.x-n.x)/6,i=s.y+(o.y-n.y)/6,m=o.x-(l.x-s.x)/6,f=o.y-(l.y-s.y)/6;t+=` C${r.toFixed(1)},${i.toFixed(1)} ${m.toFixed(1)},${f.toFixed(1)} ${o.x.toFixed(1)},${o.y.toFixed(1)}`}return t}function ie(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Ue(){const e=ue(),t=ne();document.querySelectorAll(".chart-card").forEach(a=>{const n=a.querySelector(".chart-svg:not(.chart-svg--multi)");if(!n)return;const s=parseFloat(a.dataset.base),o=a.dataset.color,l=a.dataset.cumul==="1",r=a.dataset.metricId||"",i=a.dataset.metricName||"",m=a.dataset.metricUnit||"";Ge(n,s,o,e,t,l,r,i,m)}),document.querySelectorAll(".chart-svg--multi").forEach(a=>{const n=a.dataset.model,s=a.dataset.virtual,o=we[n]||[],l=s==="_capa_vwc";o.length&&Ce(a,o,l)})}function ve(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function Je(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function fe(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function re(e,t,a,n=.15){const s=ve(a),o=fe(s),l=Je(s),r=()=>1+(Math.random()-.5)*2*n;switch(e){case"temperature":case"temperature_min":return(t-6+o*12)*r();case"temperature_gel":return(t-4+o*8)*r();case"temp_sol":{const i=ve(a+120);return(t-3+fe(i)*6)*r()}case"humidite_air":{const i=t+(1-o)*25-o*15;return Math.min(100,Math.max(20,i*r()))}case"rayonnement":case"par":{const i=l*t*1.3;return Math.max(0,i*r())}case"etp":{const i=l*t*1.5;return Math.max(0,i*r())}case"dpv":{const i=l*t*1.4+.05;return Math.max(0,i*r())}case"temp_rosee":{const m=t-6+o*12-2,f=t-8+o*6;return Math.min(m,f)*r()}case"lws_duree":{const i=Math.max(0,.9-l*1.1);return Math.max(0,t*i*r())}case"humectation":{const i=Math.max(0,.8-l*1.2),m=t*i;return Math.max(0,m*r())}case"potentiel_hydrique":return Math.max(5,Math.min(195,t*r()));case"humidite_sol_10":case"humidite_sol_20":case"humidite_sol_30":case"humidite_sol_40":case"humidite_sol_50":case"humidite_sol_60":case"humidite_sol_90":return Math.max(5,t*r());case"tensio_30":case"tensio_60":case"tensio_90":case"tensio_120":case"tensio_150":case"tensio_180":return Math.max(5,t*r());case"conductivite":{const i=20+o*10+(Math.random()-.5)*8;return i<15?0:Math.max(0,(i-15)*.08*r())}case"pluie":return Math.random()<.15?t*Math.random()*2:0;case"vent_vitesse":case"vent_rafales":{const i=t*(.6+l*.8)*r();return Math.max(0,i)}case"vent_direction":case"vent_direction_rafales":return(t+(Math.random()-.5)*60+360)%360;default:return Math.max(0,t*r())}}function Ge(e,t,a,n,s,o,l="",r="",i=""){const p={t:14,r:10,b:28,l:46},h=600-p.l-p.r,y=180-p.t-p.b,w=Math.max(1,Math.round(s/15)),c=Array.from({length:n},(x,T)=>{const j=(n-1-T)*s;if(o){let W=0;for(let P=0;P<w;P++)W+=re(l,t/w,j+P*(s/w));return W}else return re(l,t,j)}),$=Math.min(...c),g=Math.max(...c),k=g-$||1,v=x=>p.l+x/Math.max(n-1,1)*h,_=x=>p.t+y-(x-$)/k*y,E=`sg_${Math.random().toString(36).slice(2)}`,[A,O]=We(a,l);let I=`<defs>
    <linearGradient id="${E}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${A}"/>
      <stop offset="100%" stop-color="${O}"/>
    </linearGradient>
    <clipPath id="clip_${E}">
      <rect x="${p.l}" y="${p.t}" width="${h}" height="${y}"/>
    </clipPath>
  </defs>`;for(let x=0;x<=4;x++){const T=p.t+x/4*y,j=g-x/4*k,W=Math.abs(j)>=100?j.toFixed(0):Math.abs(j)>=10?j.toFixed(1):j.toFixed(2);I+=`<line x1="${p.l}" y1="${T.toFixed(1)}" x2="${600-p.r}" y2="${T.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,I+=`<text x="${p.l-5}" y="${(T+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${W}</text>`}const b=Math.max(1,Math.floor(n/6));for(let x=0;x<n;x+=b){const T=v(x).toFixed(1);I+=`<line x1="${T}" y1="${p.t}" x2="${T}" y2="${p.t+y}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,I+=`<text x="${T}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ie((n-x)*s)}</text>`}const M=c.map((x,T)=>({x:v(T),y:_(x)})),K=Ie(M),ke=K+` L${v(n-1).toFixed(1)},${p.t+y} L${p.l.toFixed(1)},${p.t+y} Z`;I+=`<path d="${ke}" fill="${O}" opacity="0.07" clip-path="url(#clip_${E})"/>`,I+=`<path d="${K}" fill="none" stroke="url(#${E})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${E})"/>`,I+=`<rect class="chart-hover-rect" x="${p.l}" y="${p.t}" width="${h}" height="${y}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=I;const X=Oe(),oe=e.querySelector(".chart-hover-rect");if(!oe)return;const S=document.createElementNS("http://www.w3.org/2000/svg","circle");S.setAttribute("r","4"),S.setAttribute("fill",a),S.setAttribute("stroke","#fff"),S.setAttribute("stroke-width","1.5"),S.style.display="none",S.style.pointerEvents="none",e.appendChild(S),oe.addEventListener("mousemove",x=>{const T=e.getBoundingClientRect(),j=(x.clientX-T.left)*(600/T.width),W=Math.max(0,Math.min(1,(j-p.l)/h)),P=Math.round(W*(n-1));if(P<0||P>=c.length)return;const ee=c[P];S.setAttribute("cx",v(P)),S.setAttribute("cy",_(ee)),S.style.display="";const Ae=Math.abs(ee)>=100?ee.toFixed(1):ee.toFixed(2);X.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${r}</div>
      <div class="chart-tooltip-val" style="color:${a}">${Ae} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${i}</span></div>
      <div class="chart-tooltip-ts">${ie((n-P)*s)}</div>
    `,X.style.display="block",X.style.left=`${Math.min(x.clientX+12,window.innerWidth-160)}px`,X.style.top=`${x.clientY-10}px`}),oe.addEventListener("mouseleave",()=>{X.style.display="none",S.style.display="none"})}function Ye(e){const a={pluie:()=>u(20,120),temperature:()=>u(80,400),rayonnement:()=>u(500,3e3),etp:()=>te(15,80),temperature_min:()=>u(50,500),temperature_gel:()=>u(0,80)}[e.id];return a?a():"—"}function Xe(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),a=document.getElementById("time-step"),n=new Date,s=new Date(n-7*864e5);document.getElementById("date-from").value=s.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",o=>{const l=o.target.closest(".period-preset-btn");l&&(e.querySelectorAll(".period-preset-btn").forEach(r=>r.classList.remove("active")),l.classList.add("active"),q=l.dataset.period,q==="custom"?t.style.display="flex":(t.style.display="none",a&&(a.value=He(q)),N()))}),document.getElementById("date-from").addEventListener("change",be),document.getElementById("date-to").addEventListener("change",be),a.addEventListener("change",N)}function be(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(J=new Date(e),G=new Date(t+"T23:59:59"),J<G&&N())}function Ze(){ae()}function ae(){var t,a,n;const e=document.getElementById("compare-control");if(e)if(V){const s=Y.find(l=>l.id===V),o=s?`${s.model} — ${s.serial}`:"Capteur";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${o} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(t=e.querySelector(".compare-clear-icon"))==null||t.addEventListener("click",l=>{l.stopPropagation(),V=null,ae(),N()}),(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",ye)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",ye)}function ye(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),a=Y.filter(o=>o.id!==C),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher un capteur…">
    <div class="compare-dropdown-list">
      ${a.map(o=>`<div class="compare-dropdown-item${o.id===V?" active":""}" data-id="${o.id}"><i class="bi bi-broadcast"></i> ${o.model} — ${o.serial}</div>`).join("")}
    </div>
  `,t.appendChild(n);const s=n.querySelector(".compare-search-input");s.focus(),s.addEventListener("input",o=>{const l=o.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(r=>{r.style.display=r.textContent.toLowerCase().includes(l)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(o=>{o.addEventListener("click",()=>{V=parseInt(o.dataset.id),n.remove(),ae(),N()})}),setTimeout(()=>{document.addEventListener("click",function o(l){!n.contains(l.target)&&!t.contains(l.target)&&(n.remove(),document.removeEventListener("click",o))})},0)}function Qe(){const e=U.find(n=>n.id===d.parcelId),t=e?se.find(n=>n.id===e.orgId):d.orgId?se.find(n=>n.id===d.orgId):null,a=de(C);Ke(e,t,a),le(),et(e,t),tt(),nt(),at(),ot(),z(e),rt(),lt()}function Ke(e,t,a){let n=a.label||`Capteur ${d.serial}`;const s=document.getElementById("panel-ident");s.innerHTML=`
    <div class="panel-row" data-field="label">
      <span class="panel-row-key">Nom</span>
      <input type="text" class="panel-field-input" data-val value="${n.replace(/"/g,"&quot;")}">
    </div>
    <div class="panel-row"><span class="panel-row-key">Modèle</span><span class="panel-row-val">${d.model}</span></div>
    <div class="panel-row"><span class="panel-row-key">Numéro série</span><span class="panel-row-val">${d.serial}</span></div>
    <div class="panel-row"><span class="panel-row-key">Réseau télécom</span><span class="panel-row-val">${d.telecom||"Sigfox"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Exploitation</span><span class="panel-row-val">${t?t.name:"—"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Date d'ajout</span><span class="panel-row-val">15/01/2023</span></div>
  `;const o=s.querySelector('[data-field="label"] input');if(o){const l=()=>{const r=o.value.trim();r&&r!==n&&(n=r,D(C,{label:r}),$e(r,{label:"Capteurs",href:"capteurs.html"}))};o.addEventListener("change",l),o.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),o.blur())})}}function et(e,t){const a=(t==null?void 0:t.ville)||"—",n=(t==null?void 0:t.departement)||"",s=(e==null?void 0:e.lat)??null,o=(e==null?void 0:e.lng)??null;document.getElementById("panel-loc").innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${n?` (${n})`:""}</span>
    </div>
    ${e?`<div class="panel-row"><span class="panel-row-key">Parcelle</span><span class="panel-row-val">${e.name} — ${e.area} ha</span></div>`:""}
    ${s!=null?`<div class="panel-row"><a href="https://www.google.com/maps?q=${s.toFixed(6)},${o.toFixed(6)}" target="_blank" class="itinerary-link"><i class="bi bi-signpost-2"></i> Obtenir l'itinéraire</a></div>`:""}
  `}function tt(){const e=d.networkQuality||80,t=d.messages7d||85,a=e>=80?"var(--ok)":e>=60?"var(--warn)":"var(--err)";document.getElementById("panel-signal").innerHTML=`
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
  `}function nt(){const e=document.getElementById("panel-events");d.event?e.innerHTML=`
      <div class="event-item event-item--warn">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <div>
          <div class="event-item-label">${d.event}</div>
          <div class="event-item-date">Depuis le 28/03/2026</div>
        </div>
      </div>
    `:e.innerHTML='<div class="panel-empty"><i class="bi bi-check-circle" style="color:var(--ok)"></i> Aucun événement</div>'}function at(){const e=R(d);document.getElementById("panel-metrics").innerHTML=e.map(t=>`
    <div class="metric-pill-row">
      <span class="metric-dot" style="background:${t.color}"></span>
      <span class="metric-pill-name">${t.name}</span>
      <span class="metric-pill-unit">${t.unit}</span>
    </div>
  `).join("")}function ot(){const e=document.getElementById("panel-config");if(!e)return;const t=d.model||"",a=t.startsWith("CHP"),n=t.startsWith("CAPA"),s=t==="EC",o=d.isVirtual;let l="";if(o&&(l+=`
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
    `),a){const r=t==="CHP-15/30"?[15,30]:t==="CHP-30/60"?[30,60]:[60,90],i=d.depth??r[0];l+=`
      <div class="config-section">
        <div class="config-section-title">Profondeur d'installation</div>
        <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">
          Ce modèle peut être installé de ${r[0]} à ${r[1]} cm.
        </div>
        <div class="form-row">
          <label>Profondeur</label>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="chp-depth-input" class="inline-edit" value="${i}" step="5" min="${r[0]}" max="${r[1]}" style="width:70px">
            <span style="font-size:12px;color:var(--txt2)">cm</span>
          </div>
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `}(n||s)&&(l+=`
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
    `),l?e.innerHTML=l:e.innerHTML='<div class="panel-empty">Pas de configuration spécifique pour ce modèle.</div>'}let B=U.filter(e=>e.orgId===d.orgId&&e.id===d.parcelId).map(e=>e.id);(function(){const t=de(C);t.linkedPlotIds?B=t.linkedPlotIds:D(C,{linkedPlotIds:B})})();function le(){var l,r;const e=document.getElementById("panel-plots");if(!e)return;const t=d.orgId||((l=U.find(i=>i.id===d.parcelId))==null?void 0:l.orgId),a=U.filter(i=>i.orgId===t),n=a.filter(i=>B.includes(i.id)),s=a.filter(i=>!B.includes(i.id));let o="";n.length?o+=n.map(i=>`
      <div class="sensor-linked-row">
        <span class="sensor-link-model">${i.name}</span>
        <span class="sensor-link-serial" style="color:var(--txt3)">${i.area?i.area+" ha":""}</span>
        <button class="remove-plot-btn icon-btn" data-id="${i.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
      </div>
    `).join(""):o+='<div class="panel-empty" style="margin-bottom:6px">Aucune parcelle liée</div>',s.length&&(o+=`
      <div class="panel-add-row">
        <select id="add-plot-select" class="panel-add-select">
          <option value="">Ajouter une parcelle…</option>
          ${s.map(i=>`<option value="${i.id}">${i.name}${i.area?" — "+i.area+" ha":""}</option>`).join("")}
        </select>
        <button id="add-plot-btn" class="panel-add-btn">Ajouter</button>
      </div>
    `),e.innerHTML=o,e.querySelectorAll(".remove-plot-btn").forEach(i=>{i.addEventListener("click",()=>{B=B.filter(m=>m!==parseInt(i.dataset.id)),D(C,{linkedPlotIds:B}),le()})}),(r=document.getElementById("add-plot-btn"))==null||r.addEventListener("click",()=>{const i=parseInt(document.getElementById("add-plot-select").value);!i||B.includes(i)||(B.push(i),D(C,{linkedPlotIds:B}),le())})}function st(e,t){const a=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(a),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function it(){const e=R(d).filter(f=>f.baseVal);let t;if(V){const f=Y.find(h=>h.id===V),p=f?R(f).filter(h=>h.baseVal):[];t=[...e.map(h=>({h:`[${d.serial}] ${h.name} (${h.unit})`,gen:h.baseVal})),...p.map(h=>({h:`[${f.serial}] ${h.name} (${h.unit})`,gen:h.baseVal}))]}else t=e.map(f=>({h:`${f.name} (${f.unit})`,gen:f.baseVal}));const a=_e()*6e4,n=ne()*6e4,s=q==="custom"&&G?G:new Date,o=q==="custom"&&J?J:new Date(s-a),l=Math.min(Math.ceil((s-o)/n)+1,500),r=(s-o)/Math.max(l-1,1),i=["Horodatage",...t.map(f=>f.h)].join(";"),m=Array.from({length:l},(f,p)=>[new Date(o.getTime()+p*r).toISOString().replace("T"," ").slice(0,19),...t.map(y=>y.gen())].join(";"));st([i,...m].join(`\r
`),`${d.serial}_${q}_${new Date().toISOString().slice(0,10)}.csv`)}function rt(){document.getElementById("panel-actions").innerHTML=`
    <button class="action-btn action-btn--danger"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `}function lt(){const e=[{type:"installation",label:"Installation initiale",date:"15/01/2023",user:"Technicien Weenat",icon:"bi-box-arrow-in-down"},{type:"nettoyage",label:"Nettoyage pluviomètre",date:"20/03/2023",user:"Agriculteur",icon:"bi-droplet"},{type:"batterie",label:"Changement de batterie",date:"10/06/2023",user:"Technicien Weenat",icon:"bi-battery-charging"},{type:"note",label:"Redressage capteur déplacé",date:"02/11/2023",user:"Agriculteur",icon:"bi-chat-text"}];document.getElementById("panel-maint").innerHTML=`
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
  `}let H=null,F=null;function ct(e){if(H!==null)return;const t=(e==null?void 0:e.orgId)??d.orgId,a=de(C);H=a.linkedOrgMemberIds??Q.filter(n=>{var s,o,l;return n.source==="adherent"&&((s=n.orgIds)==null?void 0:s.includes(t))&&(d.parcelId?(o=n.parcelIds)==null?void 0:o.includes(d.parcelId):(l=n.orgIds)==null?void 0:l.includes(t))}).map(n=>n.id),F=a.linkedConseillerIds??Q.filter(n=>{var s,o;return n.source==="réseau"&&(d.parcelId?(s=n.parcelIds)==null?void 0:s.includes(d.parcelId):(o=n.orgIds)==null?void 0:o.includes(t))}).map(n=>n.id)}function ge(e,t,a){return`<div class="member-row">
    <div>
      <span class="member-name">${e.prenom} ${e.nom}</span>
      ${a?`<span class="member-role-badge">${e.role}</span>`:""}
    </div>
    ${t?`<button class="remove-membre-btn icon-btn" data-id="${e.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function z(e){var w;ct(e);const t=((w=document.getElementById("sidebar"))==null?void 0:w.getAttribute("data-role"))==="adherent-reseau",a=(e==null?void 0:e.orgId)??d.orgId,n=document.getElementById("panel-membres"),s=document.getElementById("panel-membres-section"),o=Q.filter(c=>{var $;return c.source==="adherent"&&(($=c.orgIds)==null?void 0:$.includes(a))}),l=o.filter(c=>H.includes(c.id));s&&(s.style.display=!t&&o.length===0?"none":""),n&&(n.innerHTML=l.length?l.map(c=>ge(c,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',n.querySelectorAll(".remove-membre-btn").forEach(c=>{c.addEventListener("click",()=>{H=H.filter($=>$!==parseInt(c.dataset.id)),D(C,{linkedOrgMemberIds:H}),z(e)})}));const r=document.getElementById("add-membre-org-row");r&&(r.style.display="");const i=document.getElementById("add-membre-org-select");i&&(i.innerHTML='<option value="">Associer un membre…</option>',o.filter(c=>!H.includes(c.id)).forEach(c=>{const $=document.createElement("option");$.value=c.id,$.textContent=`${c.prenom} ${c.nom}`,i.appendChild($)}));const m=document.getElementById("add-membre-org-btn");m&&(m.onclick=()=>{const c=parseInt(i==null?void 0:i.value);!c||H.includes(c)||(H.push(c),D(C,{linkedOrgMemberIds:H}),z(e))});const f=document.getElementById("panel-conseillers"),p=document.getElementById("panel-conseillers-section"),h=Q.filter(c=>c.source==="réseau"&&F.includes(c.id));p&&(p.style.display=t&&h.length===0?"none":""),f&&(f.innerHTML=h.length?h.map(c=>ge(c,!t,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',t||f.querySelectorAll(".remove-membre-btn").forEach(c=>{c.addEventListener("click",()=>{F=F.filter($=>$!==parseInt(c.dataset.id)),D(C,{linkedConseillerIds:F}),z(e)})}));const y=document.getElementById("add-conseiller-row");if(y&&(y.style.display=t?"none":""),!t){const c=document.getElementById("add-membre-select");c&&(c.innerHTML='<option value="">Ajouter un conseiller…</option>',Q.filter(g=>g.source==="réseau"&&!F.includes(g.id)).forEach(g=>{const k=document.createElement("option");k.value=g.id,k.textContent=`${g.prenom} ${g.nom} (${g.role})`,c.appendChild(k)}));const $=document.getElementById("add-membre-btn");$&&($.onclick=()=>{const g=parseInt(c==null?void 0:c.value);!g||F.includes(g)||(F.push(g),D(C,{linkedConseillerIds:F}),z(e))})}}function dt(){const e=U.find(s=>s.id===d.parcelId),t=e?se.find(s=>s.id===e.orgId):null;if(!(t!=null&&t.lat))return;const a=L.map("sensor-mini-map",{zoomControl:!1,attributionControl:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(a);const n=e==null?void 0:e.latlngs;if(Array.isArray(n)&&n.length>=3){const s=L.polygon(n,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.25}).addTo(a);a.fitBounds(s.getBounds(),{padding:[10,10]})}else a.setView([t.lat,t.lng],13),L.circleMarker([t.lat,t.lng],{radius:6,color:"white",fillColor:"var(--pri)",fillOpacity:1,weight:2}).addTo(a)}function ut(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),a=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",a.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}function mt(){document.querySelectorAll(".detail-tab-btn").forEach(e=>{e.addEventListener("click",()=>{var t;document.querySelectorAll(".detail-tab-btn").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(a=>a.classList.remove("active")),e.classList.add("active"),(t=document.getElementById(e.dataset.pane))==null||t.classList.add("active")})})}const Te=`sensor-journal-${C}`,Le=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function ce(){try{const e=localStorage.getItem(Te);if(e)return JSON.parse(e)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",texte:""},{id:2,type:"nettoyage",date:"2023-03-20",user:"Agriculteur",texte:"Nettoyage pluviomètre après hiver"},{id:3,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",texte:""},{id:4,type:"note",date:"2023-11-02",user:"Agriculteur",texte:"Capteur légèrement déplacé après passage tracteur — redressé"}]}function Se(e){localStorage.setItem(Te,JSON.stringify(e))}function me(){var o;const e=document.getElementById("sensor-journal-container");if(!e)return;const t=ce().slice().sort((l,r)=>r.date.localeCompare(l.date)),a=l=>{const[r,i,m]=l.split("-");return`${m}/${i}/${r}`},n=Object.fromEntries(Le.map(l=>[l.id,l]));let s=`
    <div class="journal-add-bar">
      <button class="btn-secondary btn-sm" id="sjrn-add-btn" style="gap:6px">
        <i class="bi bi-plus-circle"></i> Ajouter une entrée
      </button>
    </div>
  `;t.length===0?s+='<div class="journal-empty">Aucune entrée dans le journal.</div>':(s+='<div class="journal-timeline">',t.forEach((l,r)=>{const i=n[l.type]||{label:l.type,icon:"bi-circle",color:"#8e8e93"};t.length-1,s+=`
        <div class="jrn-entry" data-id="${l.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot" style="background:${i.color}18;color:${i.color};border:1.5px solid ${i.color}50">
              <i class="bi ${i.icon}"></i>
            </div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${a(l.date)}</span>
              <span style="font-size:12px;font-weight:600;color:${i.color}">${i.label}</span>
              <button class="jrn-entry-delete" data-id="${l.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>
            </div>
            ${l.texte?`<div class="jrn-entry-texte">${l.texte}</div>`:""}
            ${l.user?`<div style="font-size:11px;color:var(--txt3);margin-top:2px">${l.user}</div>`:""}
          </div>
        </div>
      `}),s+="</div>"),e.innerHTML=s,(o=e.querySelector("#sjrn-add-btn"))==null||o.addEventListener("click",pt),e.querySelectorAll(".jrn-entry-delete").forEach(l=>{l.addEventListener("click",()=>{const r=parseInt(l.dataset.id);Se(ce().filter(i=>i.id!==r)),me()})})}function pt(){const e=document.createElement("div");e.className="modal add-modal",e.innerHTML=`
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter une entrée maintenance</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="sjrn-f-type" class="journal-form-input">
            ${Le.map(t=>`<option value="${t.id}">${t.label}</option>`).join("")}
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
  `,e.querySelector(".add-modal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",t=>{t.target===e&&e.remove()}),e.querySelector("#sjrn-f-save").addEventListener("click",()=>{const t=e.querySelector("#sjrn-f-type").value,a=e.querySelector("#sjrn-f-date").value||new Date().toISOString().slice(0,10),n=e.querySelector("#sjrn-f-user").value.trim()||"Jean Dupont",s=e.querySelector("#sjrn-f-texte").value.trim();Se([{id:Date.now(),type:t,date:a,user:n,texte:s},...ce()]),e.remove(),me()}),document.body.appendChild(e)}
