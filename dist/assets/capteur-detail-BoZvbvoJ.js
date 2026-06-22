import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{s as Z}from"./sensors-CRadjF8G.js";import{p as R}from"./plots-DhtWL7s_.js";import{o as ae}from"./orgs-DnFmvGlp.js";import{m as k}from"./members-Cr98hVG_.js";import{u as Me}from"./breadcrumb-CzFWtd6d.js";import{a as K,p as P}from"./store-c0FlIf2T.js";const qe=new URLSearchParams(window.location.search),y=parseInt(qe.get("id")),d=Z.find(e=>e.id===y),he={pluie:{name:"Pluie",unit:"mm",color:"#2E75B6",baseVal:()=>h(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0},temperature:{name:"Température",unit:"°C",color:"#FBAF05",baseVal:()=>h(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},humidite_air:{name:"Humidité",unit:"%",color:"#5B12A4",baseVal:()=>h(40,90)},dpv:{name:"DPV",unit:"kPa",color:"#5E88EC",baseVal:()=>ne(.1,2.5)},vent_vitesse:{name:"Vent – vitesse",unit:"km/h",color:"#616161",baseVal:()=>h(0,40)},vent_rafales:{name:"Vent – rafales",unit:"km/h",color:"#525252",baseVal:()=>h(5,60)},vent_direction:{name:"Vent – direction",unit:"°",color:"#424242",baseVal:()=>h(0,360)},vent_direction_rafales:{name:"Vent – direction rafales",unit:"°",color:"#343232",baseVal:()=>h(0,360)},rayonnement:{name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",baseVal:()=>h(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}},etp:{name:"ETP",unit:"mm/j",color:"#7DBDD7",baseVal:()=>ne(.5,5),cumul:{label:"Cumul ETP",unit:"mm"}},temperature_min:{name:"Température min",unit:"°C",color:"#FEE7B4",baseVal:()=>h(-2,15),cumul:{label:"Cumul d'heures de froid",unit:"h"}},humidite_sol_10:{name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",baseVal:()=>h(15,45)},humidite_sol_20:{name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",baseVal:()=>h(15,45)},humidite_sol_30:{name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",baseVal:()=>h(15,45)},humidite_sol_ec:{name:"Teneur en eau du sol",unit:"%vol",color:"#46DA82",baseVal:()=>h(15,45)},humidite_sol_40:{name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",baseVal:()=>h(17,43)},humidite_sol_50:{name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",baseVal:()=>h(18,42)},humidite_sol_60:{name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",baseVal:()=>h(18,42)},humidite_sol_90:{name:"Teneur en eau du sol 90 cm",unit:"%vol",color:"#B14C19",baseVal:()=>h(20,40)},temp_sol:{name:"Température du sol",unit:"°C",color:"#795548",baseVal:()=>h(8,22)},potentiel_hydrique:{name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",baseVal:()=>{const e=new Date().getMonth();return Math.round(10+(.5-.5*Math.cos(2*Math.PI*e/12))*140)}},tensio_30:{name:"Tension sol 30 cm",unit:"cbar",color:"#46DA82",baseVal:()=>h(10,80)},tensio_60:{name:"Tension sol 60 cm",unit:"cbar",color:"#F608C2",baseVal:()=>h(10,80)},tensio_90:{name:"Tension sol 90 cm",unit:"cbar",color:"#B14C19",baseVal:()=>h(10,80)},tensio_120:{name:"Tension sol 120 cm",unit:"cbar",color:"#7D9537",baseVal:()=>h(10,80)},tensio_150:{name:"Tension sol 150 cm",unit:"cbar",color:"#5C7020",baseVal:()=>h(10,80)},tensio_180:{name:"Tension sol 180 cm",unit:"cbar",color:"#3C4E10",baseVal:()=>h(10,80)},conductivite:{name:"Conductivité",unit:"mS/cm",color:"#2BCDDE",baseVal:()=>ne(.1,3)},humectation:{name:"Humectation foliaire",unit:"h",color:"#00887E",baseVal:()=>h(0,12)},par:{name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#4CBB17",baseVal:()=>h(0,2e3)},temperature_gel:{name:"Temp. feuille/gel",unit:"°C",color:"#FEE7B4",baseVal:()=>h(-3,12),cumul:{label:"Cumul d'heures de gel",unit:"h"}},temp_rosee:{name:"Température de rosée",unit:"°C",color:"#72B0D8",baseVal:()=>h(4,16)},temp_seche:{name:"Température sèche",unit:"°C",color:"#23B19B",baseVal:()=>h(-5,10)},temp_humide:{name:"Température humide",unit:"°C",color:"#5E88EC",baseVal:()=>h(-7,8)}},Ie={"P+":["pluie","temperature","humidite_air"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite_air"],T_MINI:["temp_sol"],W:["_vent"],"CHP-15/30":["potentiel_hydrique","temp_sol"],"CHP-30/60":["potentiel_hydrique","temp_sol"],"CHP-60/90":["humidite_sol_60","humidite_sol_90","temp_sol"],"CAPA-30-3":["_capa_vwc","_capa_temp"],"CAPA-60-6":["_capa_vwc","_capa_temp"],EC:["humidite_sol_ec","temp_sol","conductivite"],LWS:["_lws_intensite","_lws_duree"],PYRANO:["rayonnement"],PAR:["par"],T_GEL:["temp_seche","temp_humide"]},ce={_capa_vwc:{name:"Humidité sol par horizon",unit:"%vol",color:"#ED9A2C",isVirtual:!0},_capa_temp:{name:"Température du sol par horizon",unit:"°C",color:"#795548",isVirtual:!0},_lws_intensite:{name:"Intensité d'humectation",unit:"mV",color:"#00887E",isVirtual:!0},_lws_duree:{name:"Durée d'humectation",unit:"h",color:"#003D39",isVirtual:!0},_vent:{name:"Vent",unit:"km/h",color:"#616161",isVirtual:!0}},Ce={"CAPA-30-3":[{id:"humidite_sol_10",label:"10 cm",color:"#105200"},{id:"humidite_sol_20",label:"20 cm",color:"#8C5E82"},{id:"humidite_sol_30",label:"30 cm",color:"#46DA82"}],"CAPA-60-6":[{id:"humidite_sol_10",label:"10 cm",color:"#105200"},{id:"humidite_sol_20",label:"20 cm",color:"#8C5E82"},{id:"humidite_sol_30",label:"30 cm",color:"#46DA82"},{id:"humidite_sol_40",label:"40 cm",color:"#949494"},{id:"humidite_sol_50",label:"50 cm",color:"#870021"},{id:"humidite_sol_60",label:"60 cm",color:"#F608C2"}]};function h(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ne(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}function O(e){return(Ie[e.model]||["temperature","humidite_air"]).map(a=>{if(ce[a])return{id:a,...ce[a],current:null};const n=he[a];return n?{id:a,...n,current:n.baseVal()}:null}).filter(Boolean)}let q=null,N="7d",G=null,Y=null;function Se(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return N==="custom"&&G&&Y?Math.max(60,Math.round((Y-G)/6e4)):e[N]??10080}function se(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Fe(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function fe(){const e=Se(),t=se();return Math.max(2,Math.min(200,Math.floor(e/t)))}const De={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function Ne(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const a=Z.filter(s=>s.orgId===d.orgId).sort((s,i)=>s.serial.localeCompare(i.serial)),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const o=document.createElement("select");o.className="breadcrumb-nav-select",o.innerHTML=a.map(s=>`<option value="${s.id}"${s.id===y?" selected":""}>${De[s.model]||s.model} · ${s.serial}</option>`).join(""),o.addEventListener("change",()=>{window.location.href=`capteur-detail.html?id=${o.value}`}),n.appendChild(o),t.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var t;if(!d){document.body.innerHTML='<div style="padding:40px"><h1>Capteur non trouvé</h1></div>';return}Me(`Capteur ${d.serial}`,{label:"Capteurs",href:"capteurs.html"}),Ne(),Re(),W(),nt(),bt(),et(),tt(),ht(),yt(),le(),(t=document.getElementById("btn-export-csv"))==null||t.addEventListener("click",ut);const e=document.getElementById("sidebar");e&&new MutationObserver(()=>{const a=R.find(n=>{var o;return(o=d.parcelIds)==null?void 0:o.includes(n.id)})||null;J(a),Be()}).observe(e,{attributes:!0,attributeFilter:["data-role"]})});function Re(){var a,n;const e=document.getElementById("latest-strip");if(!e)return;const t=O(d);if(t.forEach(o=>{if(o.isVirtual)return;const s=document.createElement("div");s.className="latest-card",s.style.borderTop=`3px solid ${o.color}`,s.innerHTML=`
      <div class="latest-card-name">${o.name}</div>
      <div class="latest-card-value">${o.current}<span class="latest-card-unit"> ${o.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `,s.style.cursor="default",e.appendChild(s)}),d.model==="TH"){const o=((a=t.find(r=>r.id==="temperature"))==null?void 0:a.current)||20,s=((n=t.find(r=>r.id==="humidite_air"))==null?void 0:n.current)||60,i=(o-(.55-.55*s/100)*(o-14.5)).toFixed(1),l=document.createElement("div");l.className="latest-card",l.style.borderTop="3px solid #e8a030",l.innerHTML=`
      <div class="latest-card-name">THI (Thermal Humidity Index)</div>
      <div class="latest-card-value">${i}<span class="latest-card-unit"> index</span></div>
      <div class="latest-card-ts">T-(0.55-0.55×HR/100)×(T-14.5)</div>
    `,l.style.cursor="default",e.appendChild(l)}}function Le(e){var l;const t=document.createElement("div");t.className="chart-card",t.dataset.base=e.current,t.dataset.color=e.color,t.dataset.cumul=e.isCumul?"1":"",t.dataset.metricId=e.id,t.dataset.metricName=e.name,t.dataset.metricUnit=e.unit;const a=e.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${e.cumul.label}</span><span class="chart-cumul-value">${Ke(e)} ${e.cumul.unit}</span></div>`:"",o=e.id==="temperature"||e.id==="temperature_min"?We(e.id):"",s=((l=document.getElementById("time-step"))==null?void 0:l.value)||"1h",i=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${d.id}&metricId=${e.id}&period=${N}&step=${s}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`;return t.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${e.color}">${e.name}</span>
      <span class="chart-card-unit">${e.unit}</span>
      ${i}
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${a}
    ${o}
  `,t}function Oe(e,t){O(t).forEach(n=>{if(n.isVirtual){Te(e,n,t);return}e.appendChild(Le(n))})}function ge(e,t,a){t.isVirtual?Te(e,t,a):e.appendChild(Le(t))}function W(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",q){e.className="compare-rows";const a=Z.find(r=>r.id===q),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${d.model} — ${d.serial}</span></div>
      <div class="compare-col-header">
        <span>${a?`${a.model} — ${a.serial}`:"Capteur"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{q=null,ie(),W()});const o=O(d),s=a?O(a):[],i=o.map(r=>r.id);[...i,...s.map(r=>r.id).filter(r=>!i.includes(r))].forEach(r=>{const c=o.find(E=>E.id===r),u=s.find(E=>E.id===r),m=document.createElement("div");m.className="compare-row";const p=document.createElement("div");c?ge(p,c,d):p.innerHTML='<div class="compare-chart-empty">—</div>';const g=document.createElement("div");u?ge(g,u,a):g.innerHTML='<div class="compare-chart-empty">—</div>',m.appendChild(p),m.appendChild(g),e.appendChild(m)})}else e.className="charts-stack",Oe(e,d);Ze(),ze()}function We(e){const t=e==="temperature_min",a=Math.round(Math.random()*200+50),n=Math.round(Math.random()*400+100);return`
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
  `}function ze(){document.querySelectorAll(".temp-thresh-input").forEach(e=>{e.addEventListener("change",()=>{var o,s;const t=e.closest(".temp-threshold-row"),a=e.dataset.type;parseFloat(e.value);const n=(s=(o=t.querySelector(`.temp-threshold-stat [data-type="${a}"]`))==null?void 0:o.closest(".temp-threshold-stat"))==null?void 0:s.querySelector(".temp-threshold-val");n&&(a==="cold"?n.textContent=`${Math.round(Math.random()*150+30)} h`:n.textContent=`${Math.round(Math.random()*350+80)} °j`)})})}function Ue(e){const t=fe(),a=Array.from({length:t},()=>h(5,35)),n=a.map(b=>Math.min(b+h(3,18),80)),o=Array.from({length:t},()=>h(0,359)),s=600,i=200,l=46,r=16,c=16,u=28,m=s-l-r,p=i-c-u,g=Math.ceil(Math.max(...n)/10)*10||50,E=b=>l+b/Math.max(t-1,1)*m,v=b=>c+p-b/g*p,$=n.map((b,M)=>`${E(M).toFixed(1)},${v(b).toFixed(1)}`).join("L"),x=[...a].reverse().map((b,M)=>`${E(t-1-M).toFixed(1)},${v(b).toFixed(1)}`).join("L"),A=`M${$}L${x}Z`,f=a.map((b,M)=>`${M?"L":"M"}${E(M).toFixed(1)},${v(b).toFixed(1)}`).join(""),_=[.25,.5,.75].map(b=>{const M=(c+p-b*p).toFixed(1);return`<line x1="${l}" y1="${M}" x2="${s-r}" y2="${M}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),I=[0,.5,1].map(b=>{const M=c+p-b*p;return`<text x="${l-4}" y="${(M+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(b*g)}</text>`}).join(""),j=Math.max(1,Math.round(t/25)),z=[];for(let b=0;b<t;b+=j){const M=E(b).toFixed(1),ee=(c+p*.35).toFixed(1);z.push(`<g transform="translate(${M},${ee}) rotate(${o[b]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const C=document.createElement("div");C.className="chart-card",C.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
    </div>
    <svg width="100%" height="${i}" viewBox="0 0 ${s} ${i}" preserveAspectRatio="none">
      ${I}${_}
      <path d="${A}" fill="#7bc4b0" opacity=".18"/>
      <path d="${f}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${z.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(C)}function Te(e,t,a){if(t.id==="_vent"){Ue(e);return}const n=document.createElement("div");if(n.className="chart-card chart-card--multi",t.id==="_capa_vwc"||t.id==="_capa_temp"){const o=Ce[a.model]||[],s=t.id==="_capa_vwc",i=s?"Humidité sol par horizon":"Température du sol par horizon",l=s?"%vol":"°C",r=o.map(c=>`<span class="multi-legend-dot" style="background:${c.color}"></span><span class="multi-legend-label">${c.label}</span>`).join("");n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${t.color}">${i}</span>
        <span class="chart-card-unit">${l}</span>
      </div>
      <div class="multi-chart-legend">${r}</div>
      <svg class="chart-svg chart-svg--multi" width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none"
           data-virtual="${t.id}" data-model="${a.model}"></svg>
    `,e.appendChild(n),requestAnimationFrame(()=>ke(n.querySelector(".chart-svg--multi"),o,s));return}if(t.id==="_lws_intensite"||t.id==="_lws_duree"){const o=t.id==="_lws_intensite",s=o?"Intensité d'humectation":"Durée d'humectation",i=o?"mV":"h",l=o?"#78d8a0":"#45c090",r=o?h(0,800):h(0,12),c=o?"humectation":"lws_duree";n.dataset.base=r,n.dataset.color=l,n.dataset.cumul="",n.dataset.metricId=c,n.dataset.metricName=s,n.dataset.metricUnit=i,n.classList.remove("chart-card--multi"),n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${l}">${s}</span>
        <span class="chart-card-unit">${i}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    `,e.appendChild(n)}}function ke(e,t,a){const n=fe(),o=se(),s=600,i=200,l={t:14,r:10,b:28,l:46},r=s-l.l-l.r,c=i-l.t-l.b,u=t.map(f=>{var j;const _=a?f.id:"temp_sol",I=((j=he[_])==null?void 0:j.baseVal())||25;return{color:f.color,label:f.label,vals:Array.from({length:n},(z,C)=>{const b=(n-1-C)*o,M=t.indexOf(f)*1.5;return Math.max(0,ue(_,I+M,b))})}}),m=u.flatMap(f=>f.vals),p=Math.min(...m),g=Math.max(...m),E=g-p||1,v=f=>l.l+f/Math.max(n-1,1)*r,$=f=>l.t+c-(f-p)/E*c;let x="<defs></defs>";for(let f=0;f<=4;f++){const _=l.t+f/4*c,I=g-f/4*E,j=Math.abs(I)>=100?I.toFixed(0):I.toFixed(1);x+=`<line x1="${l.l}" y1="${_.toFixed(1)}" x2="${s-l.r}" y2="${_.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,x+=`<text x="${l.l-5}" y="${(_+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${j}</text>`}const A=Math.max(1,Math.floor(n/6));for(let f=0;f<n;f+=A){const _=v(f).toFixed(1);x+=`<line x1="${_}" y1="${l.t}" x2="${_}" y2="${l.t+c}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,x+=`<text x="${_}" y="${i-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${de((n-f)*o)}</text>`}u.forEach(f=>{const _=f.vals.map((I,j)=>({x:v(j),y:$(I)}));x+=`<path d="${Ae(_)}" fill="none" stroke="${f.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}),e.innerHTML=x}let Q=null;function Je(){return Q||(Q=document.createElement("div"),Q.className="chart-tooltip",document.body.appendChild(Q)),Q}function Ge(e,t){return t==="temperature"||t==="temperature_min"?["#6eb4d4","#e07050"]:t==="temperature_gel"?["#a0d8f0","#6090d0"]:[Ye(e,.55),e]}function Ye(e,t){const a=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return`#${Math.round(a+(255-a)*t).toString(16).padStart(2,"0")}${Math.round(n+(255-n)*t).toString(16).padStart(2,"0")}${Math.round(o+(255-o)*t).toString(16).padStart(2,"0")}`}function Ae(e){if(e.length<2)return"";let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let a=0;a<e.length-1;a++){const n=e[Math.max(a-1,0)],o=e[a],s=e[a+1],i=e[Math.min(a+2,e.length-1)],l=o.x+(s.x-n.x)/6,r=o.y+(s.y-n.y)/6,c=s.x-(i.x-o.x)/6,u=s.y-(i.y-o.y)/6;t+=` C${l.toFixed(1)},${r.toFixed(1)} ${c.toFixed(1)},${u.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return t}function de(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Ze(){const e=fe(),t=se();document.querySelectorAll(".chart-card").forEach(a=>{const n=a.querySelector(".chart-svg:not(.chart-svg--multi)");if(!n)return;const o=parseFloat(a.dataset.base),s=a.dataset.color,i=a.dataset.cumul==="1",l=a.dataset.metricId||"",r=a.dataset.metricName||"",c=a.dataset.metricUnit||"";Qe(n,o,s,e,t,i,l,r,c)}),document.querySelectorAll(".chart-svg--multi").forEach(a=>{const n=a.dataset.model,o=a.dataset.virtual,s=Ce[n]||[],i=o==="_capa_vwc";s.length&&ke(a,s,i)})}function xe(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function Xe(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function $e(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function ue(e,t,a,n=.15){const o=xe(a),s=$e(o),i=Xe(o),l=()=>1+(Math.random()-.5)*2*n;switch(e){case"temperature":case"temperature_min":return(t-6+s*12)*l();case"temperature_gel":return(t-4+s*8)*l();case"temp_sol":{const r=xe(a+120);return(t-3+$e(r)*6)*l()}case"humidite_air":{const r=t+(1-s)*25-s*15;return Math.min(100,Math.max(20,r*l()))}case"rayonnement":case"par":{const r=i*t*1.3;return Math.max(0,r*l())}case"etp":{const r=i*t*1.5;return Math.max(0,r*l())}case"dpv":{const r=i*t*1.4+.05;return Math.max(0,r*l())}case"temp_rosee":{const c=t-6+s*12-2,u=t-8+s*6;return Math.min(c,u)*l()}case"lws_duree":{const r=Math.max(0,.9-i*1.1);return Math.max(0,t*r*l())}case"humectation":{const r=Math.max(0,.8-i*1.2),c=t*r;return Math.max(0,c*l())}case"potentiel_hydrique":return Math.max(5,Math.min(195,t*l()));case"humidite_sol_10":case"humidite_sol_20":case"humidite_sol_30":case"humidite_sol_40":case"humidite_sol_50":case"humidite_sol_60":case"humidite_sol_90":return Math.max(5,t*l());case"tensio_30":case"tensio_60":case"tensio_90":case"tensio_120":case"tensio_150":case"tensio_180":return Math.max(5,t*l());case"conductivite":{const r=20+s*10+(Math.random()-.5)*8;return r<15?0:Math.max(0,(r-15)*.08*l())}case"pluie":return Math.random()<.15?t*Math.random()*2:0;case"vent_vitesse":case"vent_rafales":{const r=t*(.6+i*.8)*l();return Math.max(0,r)}case"vent_direction":case"vent_direction_rafales":return(t+(Math.random()-.5)*60+360)%360;default:return Math.max(0,t*l())}}function Qe(e,t,a,n,o,s,i="",l="",r=""){const m={t:14,r:10,b:28,l:46},p=600-m.l-m.r,g=180-m.t-m.b,E=Math.max(1,Math.round(o/15)),v=Array.from({length:n},(w,S)=>{const B=(n-1-S)*o;if(s){let U=0;for(let F=0;F<E;F++)U+=ue(i,t/E,B+F*(o/E));return U}else return ue(i,t,B)}),$=Math.min(...v),x=Math.max(...v),A=x-$||1,f=w=>m.l+w/Math.max(n-1,1)*p,_=w=>m.t+g-(w-$)/A*g,I=`sg_${Math.random().toString(36).slice(2)}`,[j,z]=Ge(a,i);let C=`<defs>
    <linearGradient id="${I}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${j}"/>
      <stop offset="100%" stop-color="${z}"/>
    </linearGradient>
    <clipPath id="clip_${I}">
      <rect x="${m.l}" y="${m.t}" width="${p}" height="${g}"/>
    </clipPath>
  </defs>`;for(let w=0;w<=4;w++){const S=m.t+w/4*g,B=x-w/4*A,U=Math.abs(B)>=100?B.toFixed(0):Math.abs(B)>=10?B.toFixed(1):B.toFixed(2);C+=`<line x1="${m.l}" y1="${S.toFixed(1)}" x2="${600-m.r}" y2="${S.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,C+=`<text x="${m.l-5}" y="${(S+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${U}</text>`}const b=Math.max(1,Math.floor(n/6));for(let w=0;w<n;w+=b){const S=f(w).toFixed(1);C+=`<line x1="${S}" y1="${m.t}" x2="${S}" y2="${m.t+g}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,C+=`<text x="${S}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${de((n-w)*o)}</text>`}const M=v.map((w,S)=>({x:f(S),y:_(w)})),ee=Ae(M),Ve=ee+` L${f(n-1).toFixed(1)},${m.t+g} L${m.l.toFixed(1)},${m.t+g} Z`;C+=`<path d="${Ve}" fill="${z}" opacity="0.07" clip-path="url(#clip_${I})"/>`,C+=`<path d="${ee}" fill="none" stroke="url(#${I})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${I})"/>`,C+=`<rect class="chart-hover-rect" x="${m.l}" y="${m.t}" width="${p}" height="${g}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=C;const X=Je(),re=e.querySelector(".chart-hover-rect");if(!re)return;const T=document.createElementNS("http://www.w3.org/2000/svg","circle");T.setAttribute("r","4"),T.setAttribute("fill",a),T.setAttribute("stroke","#fff"),T.setAttribute("stroke-width","1.5"),T.style.display="none",T.style.pointerEvents="none",e.appendChild(T),re.addEventListener("mousemove",w=>{const S=e.getBoundingClientRect(),B=(w.clientX-S.left)*(600/S.width),U=Math.max(0,Math.min(1,(B-m.l)/p)),F=Math.round(U*(n-1));if(F<0||F>=v.length)return;const te=v[F];T.setAttribute("cx",f(F)),T.setAttribute("cy",_(te)),T.style.display="";const Pe=Math.abs(te)>=100?te.toFixed(1):te.toFixed(2);X.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${l}</div>
      <div class="chart-tooltip-val" style="color:${a}">${Pe} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${r}</span></div>
      <div class="chart-tooltip-ts">${de((n-F)*o)}</div>
    `,X.style.display="block",X.style.left=`${Math.min(w.clientX+12,window.innerWidth-160)}px`,X.style.top=`${w.clientY-10}px`}),re.addEventListener("mouseleave",()=>{X.style.display="none",T.style.display="none"})}function Ke(e){const a={pluie:()=>h(20,120),temperature:()=>h(80,400),rayonnement:()=>h(500,3e3),etp:()=>ne(15,80),temperature_min:()=>h(50,500),temperature_gel:()=>h(0,80)}[e.id];return a?a():"—"}function et(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),a=document.getElementById("time-step"),n=new Date,o=new Date(n-7*864e5);document.getElementById("date-from").value=o.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",s=>{const i=s.target.closest(".period-preset-btn");i&&(e.querySelectorAll(".period-preset-btn").forEach(l=>l.classList.remove("active")),i.classList.add("active"),N=i.dataset.period,N==="custom"?t.style.display="flex":(t.style.display="none",a&&(a.value=Fe(N)),W()))}),document.getElementById("date-from").addEventListener("change",we),document.getElementById("date-to").addEventListener("change",we),a.addEventListener("change",W)}function we(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(G=new Date(e),Y=new Date(t+"T23:59:59"),G<Y&&W())}function tt(){ie()}function ie(){var t,a,n;const e=document.getElementById("compare-control");if(e)if(q){const o=Z.find(i=>i.id===q),s=o?`${o.model} — ${o.serial}`:"Capteur";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${s} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(t=e.querySelector(".compare-clear-icon"))==null||t.addEventListener("click",i=>{i.stopPropagation(),q=null,ie(),W()}),(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",Ee)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",Ee)}function Ee(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),a=Z.filter(s=>s.id!==y),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher un capteur…">
    <div class="compare-dropdown-list">
      ${a.map(s=>`<div class="compare-dropdown-item${s.id===q?" active":""}" data-id="${s.id}"><i class="bi bi-broadcast"></i> ${s.model} — ${s.serial}</div>`).join("")}
    </div>
  `,t.appendChild(n);const o=n.querySelector(".compare-search-input");o.focus(),o.addEventListener("input",s=>{const i=s.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(l=>{l.style.display=l.textContent.toLowerCase().includes(i)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(s=>{s.addEventListener("click",()=>{q=parseInt(s.dataset.id),n.remove(),ie(),W()})}),setTimeout(()=>{document.addEventListener("click",function s(i){!n.contains(i.target)&&!t.contains(i.target)&&(n.remove(),document.removeEventListener("click",s))})},0)}function nt(){const e=R.find(n=>{var o;return(o=d.parcelIds)==null?void 0:o.includes(n.id)}),t=e?ae.find(n=>n.id===e.orgId):d.orgId?ae.find(n=>n.id===d.orgId):null,a=K(y);at(e,t,a),me(),ot(e,t),st(),je(),it(),lt(),be(),J(e),pt(),Be()}function at(e,t,a){let n=a.label||`Capteur ${d.serial}`;const o=document.getElementById("panel-ident");o.innerHTML=`
    <div class="panel-row" data-field="label">
      <span class="panel-row-key">Nom</span>
      <input type="text" class="panel-field-input" data-val value="${n.replace(/"/g,"&quot;")}">
    </div>
    <div class="panel-row"><span class="panel-row-key">Modèle</span><span class="panel-row-val">${d.model}</span></div>
    <div class="panel-row"><span class="panel-row-key">Numéro série</span><span class="panel-row-val">${d.serial}</span></div>
    <div class="panel-row"><span class="panel-row-key">Réseau télécom</span><span class="panel-row-val">${d.telecom||"Sigfox"}</span></div>
    <div class="panel-row" id="panel-ident-org"><span class="panel-row-key">Exploitation</span><span class="panel-row-val">${t?t.name:"—"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Date d'ajout</span><span class="panel-row-val">15/01/2023</span></div>
  `;const s=o.querySelector('[data-field="label"] input');if(s){const i=()=>{const l=s.value.trim();if(l&&l!==n){const r=n;n=l,P(y,{label:l}),Me(l,{label:"Capteurs",href:"capteurs.html"}),ve(`Nom du capteur modifié : « ${r} » → « ${l} »`)}};s.addEventListener("change",i),s.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),s.blur())})}}function ot(e,t){const a=(t==null?void 0:t.ville)||"—",n=(t==null?void 0:t.departement)||"",o=(e==null?void 0:e.lat)??null,s=(e==null?void 0:e.lng)??null;document.getElementById("panel-loc").innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${n?` (${n})`:""}</span>
    </div>
    ${e?`<div class="panel-row" id="panel-loc-parcel"><span class="panel-row-key">Parcelle</span><span class="panel-row-val">${e.name} — ${e.area} ha</span></div>`:""}
    ${o!=null?`<div class="panel-row"><a href="https://www.google.com/maps?q=${o.toFixed(6)},${s.toFixed(6)}" target="_blank" class="itinerary-link"><i class="bi bi-signpost-2"></i> Obtenir l'itinéraire</a></div>`:""}
  `}function st(){const e=d.networkQuality||80,t=d.messages7d||85,a=s=>s>=80?"var(--ok)":s>=60?"var(--warn)":"var(--err)",n=a(e),o=a(t);document.getElementById("panel-signal").innerHTML=`
    <div class="signal-metric">
      <div class="signal-metric-row">
        <span class="signal-bar-label">Qualité de la couverture réseau</span>
        <span class="signal-bar-pct" style="color:${n}">${e}%</span>
      </div>
      <div class="signal-bar-track"><div class="signal-bar-fill" style="width:${e}%;background:${n}"></div></div>
    </div>
    <div class="signal-metric">
      <div class="signal-metric-row">
        <span class="signal-bar-label">Mesures reçues sur 7 jours</span>
        <span class="signal-bar-pct" style="color:${o}">${t}%</span>
      </div>
      <div class="signal-bar-track"><div class="signal-bar-fill" style="width:${t}%;background:${o}"></div></div>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Opérateur</span>
      <span class="panel-row-val">${d.telecom||"Sigfox"}</span>
    </div>
  `}function je(){const e=document.getElementById("panel-events");if(d.event){const t=Array.isArray(d.event)?d.event:[d.event];e.innerHTML=t.map((a,n)=>{const o=a.toLowerCase().includes("déplacé");return`
      <div class="event-item event-item--warn" style="justify-content:space-between;gap:12px">
        <div style="display:flex;align-items:flex-start;gap:10px;min-width:0">
          <i class="bi bi-exclamation-triangle-fill" style="flex-shrink:0;margin-top:2px"></i>
          <div>
            <div class="event-item-label">${a}</div>
            <div class="event-item-date">Depuis le 28/03/2026</div>
          </div>
        </div>
        ${o?`<button class="btn-secondary btn-sm ev-stop-btn" data-ev-idx="${n}" style="flex-shrink:0;white-space:nowrap">Arrêter l'événement</button>`:""}
      </div>`}).join(""),e.querySelectorAll(".ev-stop-btn").forEach(a=>{a.addEventListener("click",()=>{const n=+a.dataset.evIdx;Array.isArray(d.event)?(d.event=d.event.filter((o,s)=>s!==n),d.event.length||(d.event=null)):d.event=null,je()})})}else e.innerHTML='<div class="panel-empty"><i class="bi bi-check-circle" style="color:var(--ok)"></i> Aucun événement</div>'}function it(){const e=O(d);document.getElementById("panel-metrics").innerHTML=e.map(t=>`
    <div class="metric-pill-row">
      <span class="metric-dot" style="background:${t.color}"></span>
      <span class="metric-pill-name">${t.name}</span>
      <span class="metric-pill-unit">${t.unit}</span>
    </div>
  `).join("")}function lt(){const e=document.getElementById("panel-config");if(!e)return;const t=d.model||"",a=t.startsWith("CHP"),n=t.startsWith("CAPA"),o=t==="EC",s=d.isVirtual;let i="";if(s&&(i+=`
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
    `),a){const r=t==="CHP-15/30"?[15,30]:t==="CHP-30/60"?[30,60]:[45,90],c=d.depth??r[0];i+=`
      <div class="config-section">
        <div class="config-section-title">Profondeur d'installation</div>
        <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">
          Ce modèle peut être installé de ${r[0]} à ${r[1]} cm.
        </div>
        <div class="form-row">
          <label>Profondeur</label>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="chp-depth-input" class="inline-edit" value="${c}" step="5" min="${r[0]}" max="${r[1]}" style="width:70px">
            <span style="font-size:12px;color:var(--txt2)">cm</span>
          </div>
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `}(n||o)&&(i+=`
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
    `);const l=e.closest(".panel-section");i?(l&&(l.style.display=""),e.innerHTML=i):l&&(l.style.display="none")}function rt(){return(Ie[d.model]||[]).map(t=>{const a=he[t]||ce[t];return a?{id:t,name:a.name,unit:a.unit}:null}).filter(Boolean)}function be(){const e=document.getElementById("panel-alertes");if(!e)return;const t=K(y).alertes||[],a={seuil:"bi-graph-up-arrow",absence:"bi-wifi-off"};let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':n+=t.map((o,s)=>`
      <div class="alert-item">
        <i class="bi ${a[o.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${o.label}</div>
          <div class="alert-item-meta">${o.metric} ${o.condition||""} ${o.threshold||""} ${o.unit||""}</div>
        </div>
        <button class="remove-alert-sensor-btn icon-btn" data-idx="${s}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),n+='<button id="create-alert-sensor-btn" class="action-btn action-btn--primary" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=n,e.querySelectorAll(".remove-alert-sensor-btn").forEach(o=>{o.addEventListener("click",()=>{const s=parseInt(o.dataset.idx),i=[...t];i.splice(s,1),P(y,{alertes:i}),be()})}),e.querySelector("#create-alert-sensor-btn").addEventListener("click",()=>ct(e))}function ct(e){if(e.querySelector(".alert-create-form"))return;const t=rt(),a=document.createElement("div");a.className="alert-create-form",a.innerHTML=`
    <div class="alert-form-row">
      <select id="alert-metric-s" class="panel-add-select">
        <option value="">Métrique…</option>
        ${t.map(n=>`<option value="${n.id}" data-unit="${n.unit}">${n.name}</option>`).join("")}
      </select>
    </div>
    <div class="alert-form-row" style="align-items:center;gap:6px">
      <select id="alert-condition-s" class="panel-add-select" style="max-width:70px;flex:0 0 auto">
        <option value=">">&gt;</option>
        <option value="<">&lt;</option>
        <option value="=">=</option>
      </select>
      <input type="number" id="alert-threshold-s" class="inline-edit" placeholder="Valeur" style="flex:1;min-width:0">
      <span id="alert-unit-label-s" style="font-size:11px;color:var(--txt3);flex-shrink:0;min-width:30px">—</span>
    </div>
    <div class="alert-form-actions">
      <button id="alert-save-btn-s" class="panel-add-btn">Enregistrer</button>
      <button id="alert-cancel-btn-s" class="icon-btn"><i class="bi bi-x"></i></button>
    </div>
  `,e.appendChild(a),a.querySelector("#alert-metric-s").addEventListener("change",n=>{const o=n.target.selectedOptions[0];a.querySelector("#alert-unit-label-s").textContent=(o==null?void 0:o.dataset.unit)||"—"}),a.querySelector("#alert-save-btn-s").addEventListener("click",()=>{const n=a.querySelector("#alert-metric-s").value,o=t.find(c=>c.id===n),s=a.querySelector("#alert-condition-s").value,i=a.querySelector("#alert-threshold-s").value;if(!n||!i)return;const l={type:"seuil",label:`Alerte ${(o==null?void 0:o.name)||n}`,metric:(o==null?void 0:o.name)||n,condition:s,threshold:i,unit:(o==null?void 0:o.unit)||""},r=[...K(y).alertes||[],l];P(y,{alertes:r}),be()}),a.querySelector("#alert-cancel-btn-s").addEventListener("click",()=>a.remove())}let H=R.filter(e=>{var t;return e.orgId===d.orgId&&((t=d.parcelIds)==null?void 0:t.includes(e.id))}).map(e=>e.id);(function(){const t=K(y);t.linkedPlotIds?H=t.linkedPlotIds:P(y,{linkedPlotIds:H})})();function me(){var r;const e=document.getElementById("panel-plots");if(!e)return;const t=d.orgId||((r=R.find(c=>{var u;return(u=d.parcelIds)==null?void 0:u.includes(c.id)}))==null?void 0:r.orgId),a=R.filter(c=>c.orgId===t),n=a.filter(c=>H.includes(c.id)),o=a.filter(c=>!H.includes(c.id));e.innerHTML=n.length?n.map(c=>`
      <div class="sensor-linked-row">
        <a href="parcelle-detail.html?id=${c.id}" class="sensor-linked-link">${c.name}</a>
        <span class="sensor-link-serial" style="color:var(--txt3)">${c.area?c.area+" ha":""}</span>
        <button class="remove-plot-btn icon-btn" data-id="${c.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
      </div>
    `).join(""):'<div class="panel-empty" style="margin-bottom:6px">Aucune parcelle liée</div>',e.querySelectorAll(".remove-plot-btn").forEach(c=>{c.addEventListener("click",()=>{const u=parseInt(c.dataset.id),m=a.find(p=>p.id===u);H=H.filter(p=>p!==u),P(y,{linkedPlotIds:H}),m&&ve(`Capteur délié de la parcelle « ${m.name} »`),me()})});const s=document.getElementById("plot-add-row"),i=document.getElementById("add-plot-select");s&&i&&(o.length>0?(i.innerHTML='<option value="">Ajouter une parcelle…</option>'+o.map(c=>`<option value="${c.id}">${c.name}${c.area?" — "+c.area+" ha":""}</option>`).join(""),s.style.display=""):s.style.display="none");const l=document.getElementById("add-plot-btn");l&&(l.onclick=()=>{const c=parseInt(document.getElementById("add-plot-select").value);if(!c||H.includes(c))return;const u=a.find(m=>m.id===c);H.push(c),P(y,{linkedPlotIds:H}),u&&ve(`Capteur lié à la parcelle « ${u.name} »`),me()})}function dt(e,t){const a=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(a),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function ut(){const e=O(d).filter(u=>u.baseVal);let t;if(q){const u=Z.find(p=>p.id===q),m=u?O(u).filter(p=>p.baseVal):[];t=[...e.map(p=>({h:`[${d.serial}] ${p.name} (${p.unit})`,gen:p.baseVal})),...m.map(p=>({h:`[${u.serial}] ${p.name} (${p.unit})`,gen:p.baseVal}))]}else t=e.map(u=>({h:`${u.name} (${u.unit})`,gen:u.baseVal}));const a=Se()*6e4,n=se()*6e4,o=N==="custom"&&Y?Y:new Date,s=N==="custom"&&G?G:new Date(o-a),i=Math.min(Math.ceil((o-s)/n)+1,500),l=(o-s)/Math.max(i-1,1),r=["Horodatage",...t.map(u=>u.h)].join(";"),c=Array.from({length:i},(u,m)=>[new Date(s.getTime()+m*l).toISOString().replace("T"," ").slice(0,19),...t.map(g=>g.gen())].join(";"));dt([r,...c].join(`\r
`),`${d.serial}_${N}_${new Date().toISOString().slice(0,10)}.csv`)}function mt({title:e,message:t,confirmLabel:a="Confirmer",onConfirm:n}){const o=document.createElement("div");o.className="modal add-modal",o.innerHTML=`
    <div class="add-modal-content" style="max-width:400px">
      <div class="add-modal-header">
        <span class="add-modal-title">${e}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div style="padding:16px 20px;display:flex;flex-direction:column;gap:16px">
        <p style="margin:0;font-size:13px;color:var(--txt2);line-height:1.5">${t}</p>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button class="btn-secondary confirm-cancel">Annuler</button>
          <button class="btn-danger confirm-ok">${a}</button>
        </div>
      </div>
    </div>`,o.querySelector(".add-modal-close").addEventListener("click",()=>o.remove()),o.querySelector(".confirm-cancel").addEventListener("click",()=>o.remove()),o.querySelector(".confirm-ok").addEventListener("click",()=>{o.remove(),n()}),o.addEventListener("click",s=>{s.target===o&&o.remove()}),document.body.appendChild(o)}function pt(){const e=document.getElementById("panel-actions");e.innerHTML=`
    <button class="action-btn action-btn--danger" id="unlink-sensor-btn"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `,e.querySelector("#unlink-sensor-btn").addEventListener("click",()=>{const t=R.filter(n=>d.parcelIds.includes(n.id)),a=t.length?t.map(n=>`<strong>${n.name}</strong>`).join(", "):"aucune parcelle";mt({title:"Retirer le capteur de l'exploitation",message:`Retirer <strong>${d.model} ${d.serial}</strong> de l'exploitation ?<br><br>Parcelles liées : ${a}.<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>showToast("Capteur retiré de l'exploitation (fonctionnalité à venir)")})})}let V=null,D=null;function vt(e){if(V!==null)return;const t=(e==null?void 0:e.orgId)??d.orgId,a=K(y);V=a.linkedOrgMemberIds??k.filter(n=>{var o,s,i;return n.source==="adherent"&&((o=n.orgIds)==null?void 0:o.includes(t))&&((s=d.parcelIds)!=null&&s.length?d.parcelIds.some(l=>{var r;return(r=n.parcelIds)==null?void 0:r.includes(l)}):(i=n.orgIds)==null?void 0:i.includes(t))}).map(n=>n.id),D=a.linkedConseillerIds??k.filter(n=>{var o,s;return n.source==="réseau"&&((o=d.parcelIds)!=null&&o.length?d.parcelIds.some(i=>{var l;return(l=n.parcelIds)==null?void 0:l.includes(i)}):(s=n.orgIds)==null?void 0:s.includes(t))}).map(n=>n.id)}function _e(e,t,a){return`<div class="member-row">
    <div>
      <span class="member-name">${e.prenom} ${e.nom}</span>
      ${a?`<span class="member-role-badge">${e.role}</span>`:""}
    </div>
    ${t?`<button class="remove-membre-btn icon-btn" data-id="${e.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function J(e){var E;vt(e);const t=((E=document.getElementById("sidebar"))==null?void 0:E.getAttribute("data-role"))==="adherent-reseau",a=(e==null?void 0:e.orgId)??d.orgId,n=document.getElementById("panel-membres"),o=document.getElementById("panel-membres-section"),s=k.filter(v=>{var $;return v.source==="adherent"&&(($=v.orgIds)==null?void 0:$.includes(a))}),i=s.filter(v=>V.includes(v.id));o&&(o.style.display=!t&&s.length===0?"none":""),n&&(n.innerHTML=i.length?i.map(v=>_e(v,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',n.querySelectorAll(".remove-membre-btn").forEach(v=>{v.addEventListener("click",()=>{V=V.filter($=>$!==parseInt(v.dataset.id)),P(y,{linkedOrgMemberIds:V}),J(e)})}));const l=document.getElementById("add-membre-org-row");l&&(l.style.display="");const r=document.getElementById("add-membre-org-select");r&&(r.innerHTML='<option value="">Associer un membre…</option>',s.filter(v=>!V.includes(v.id)).forEach(v=>{const $=document.createElement("option");$.value=v.id,$.textContent=`${v.prenom} ${v.nom}`,r.appendChild($)}));const c=document.getElementById("add-membre-org-btn");c&&(c.onclick=()=>{const v=parseInt(r==null?void 0:r.value);!v||V.includes(v)||(V.push(v),P(y,{linkedOrgMemberIds:V}),J(e))});const u=document.getElementById("panel-conseillers"),m=document.getElementById("panel-conseillers-section"),p=k.filter(v=>v.source==="réseau"&&D.includes(v.id));m&&(m.style.display=t&&p.length===0?"none":""),u&&(u.innerHTML=p.length?p.map(v=>_e(v,!t,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',t||u.querySelectorAll(".remove-membre-btn").forEach(v=>{v.addEventListener("click",()=>{D=D.filter($=>$!==parseInt(v.dataset.id)),P(y,{linkedConseillerIds:D}),J(e)})}));const g=document.getElementById("add-conseiller-row");if(g&&(g.style.display=t?"none":""),!t){const v=document.getElementById("add-membre-select");v&&(v.innerHTML='<option value="">Ajouter un conseiller…</option>',k.filter(x=>x.source==="réseau"&&!D.includes(x.id)).forEach(x=>{const A=document.createElement("option");A.value=x.id,A.textContent=`${x.prenom} ${x.nom} (${x.role})`,v.appendChild(A)}));const $=document.getElementById("add-membre-btn");$&&($.onclick=()=>{const x=parseInt(v==null?void 0:v.value);!x||D.includes(x)||(D.push(x),P(y,{linkedConseillerIds:D}),J(e))})}}function ht(){var l;const e=R.find(r=>{var c;return(c=d.parcelIds)==null?void 0:c.includes(r.id)}),t=e?ae.find(r=>r.id===e.orgId):d.orgId?ae.find(r=>r.id===d.orgId):null,a=(e==null?void 0:e.lat)??(t==null?void 0:t.lat),n=(e==null?void 0:e.lng)??(t==null?void 0:t.lng);if(a==null||n==null)return;const o=L.map("sensor-mini-map",{zoomControl:!1,attributionControl:!1,dragging:!1,touchZoom:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1,tap:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(o);const s=1/111,i=1/(111*Math.cos(a*Math.PI/180));o.fitBounds([[a-s,n-i],[a+s,n+i]]),L.circleMarker([a,n],{radius:6,color:"white",fillColor:"#0172A4",fillOpacity:1,weight:2}).addTo(o),(l=document.getElementById("sensor-map-expand"))==null||l.addEventListener("click",()=>ft(a,n))}function ft(e,t){const a=document.createElement("div");a.className="modal add-modal",a.innerHTML=`
    <div class="add-modal-content" style="max-width:700px;padding:0;overflow:hidden">
      <div class="add-modal-header" style="margin:0;padding:14px 18px;border-bottom:1px solid var(--bdr2)">
        <span class="add-modal-title" style="font-size:16px">Localisation du capteur</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div id="sensor-map-modal-map" style="height:420px"></div>
    </div>`,document.body.appendChild(a);const n=()=>a.remove();a.querySelector(".add-modal-close").addEventListener("click",n),a.addEventListener("click",s=>{s.target===a&&n()});const o=L.map("sensor-map-modal-map",{attributionControl:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(o),o.setView([e,t],15),L.circleMarker([e,t],{radius:8,color:"white",fillColor:"#0172A4",fillOpacity:1,weight:2}).addTo(o),setTimeout(()=>o.invalidateSize(),0)}function Be(){var r,c,u,m;const t=(((r=document.getElementById("sidebar"))==null?void 0:r.getAttribute("data-role"))||"")==="adherent-reseau"&&(d==null?void 0:d.orgId)!==1;[(c=document.querySelector("#panel-plots"))==null?void 0:c.closest(".panel-section"),document.getElementById("panel-membres-section"),document.getElementById("panel-conseillers-section"),(u=document.querySelector("#panel-actions"))==null?void 0:u.closest(".panel-section"),(m=document.querySelector("#panel-alertes"))==null?void 0:m.closest(".panel-section")].forEach(p=>{p&&(p.style.display=t?"none":"")});const a=document.getElementById("panel-ident-org");a&&(a.style.display=t?"none":"");const n=document.getElementById("panel-config"),o=n==null?void 0:n.closest(".panel-section");o&&(o.style.display=t?"none":n.innerHTML.trim()?"":"none");const s=document.querySelector('.detail-tab-btn[data-pane="tab-journal"]');s&&(s.style.display=t?"none":"");const i=document.getElementById("panel-loc-parcel");i&&(i.style.display=t?"none":"");const l=document.querySelector('#panel-ident [data-field="label"] input');l&&(l.readOnly=t,l.style.cssText=t?"cursor:default;background:transparent;border:none;padding:0;pointer-events:none;color:var(--txt)":"")}function bt(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),a=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",a.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}function yt(){document.querySelectorAll(".detail-tab-btn").forEach(e=>{e.addEventListener("click",()=>{var t;document.querySelectorAll(".detail-tab-btn").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(a=>a.classList.remove("active")),e.classList.add("active"),(t=document.getElementById(e.dataset.pane))==null||t.classList.add("active")})})}const pe=`sensor-journal-${y}`,He=[{id:"installation",label:"Ajouté à l'organisation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function gt(){if((d==null?void 0:d.orgId)===1){const n=k.find(o=>o.source==="adherent"&&o.orgIds.includes(1));if(n)return`${n.prenom} ${n.nom}`}const t=k.find(n=>n.source==="réseau"&&n.role==="agent"&&n.orgIds.includes(d==null?void 0:d.orgId));if(t)return`${t.prenom} ${t.nom}`;const a=k.find(n=>n.source==="réseau"&&(n.role==="admin"||n.role==="propriétaire"));return a?`${a.prenom} ${a.nom}`:""}function oe(){try{const u=localStorage.getItem(pe);if(u)return JSON.parse(u)}catch{}const e=(d==null?void 0:d.orgId)===1,t=(()=>{const u=k.find(p=>p.source==="réseau"&&p.role==="agent"&&p.orgIds.includes(d==null?void 0:d.orgId));if(u)return`${u.prenom} ${u.nom}`;const m=k.find(p=>p.source==="réseau"&&(p.role==="admin"||p.role==="propriétaire"));return m?`${m.prenom} ${m.nom}`:"Technicien réseau"})(),a=e?(()=>{const u=k.find(m=>m.source==="adherent"&&m.orgIds.includes(1));return u?`${u.prenom} ${u.nom}`:t})():t,n=["Nettoyage pluviomètre après hiver","Nettoyage du capteur, dépôt de poussière sur la cellule","Toile d'araignée retirée dans l'entonnoir","Nettoyage de routine, aucune anomalie constatée"],o=["Capteur légèrement déplacé après passage tracteur — redressé","Antenne réorientée pour améliorer la réception","Végétation haute autour du capteur — dégagée","Capteur incliné après un coup de vent — vérifié et stabilisé","Câble légèrement endommagé — surveillance renforcée"],s=[{id:"batterie",label:""},{id:"antenne",label:""},{id:"bocal",label:""},{id:"lacet",label:""}],i=y%100,l=s[y%s.length].id,c=[{id:1,type:"installation",date:`${2022+y%3}-${String(1+y%12).padStart(2,"0")}-${String(1+y*3%27).padStart(2,"0")}`,user:t,texte:""},{id:2,type:"nettoyage",date:"2023-03-20",user:a,texte:n[i%n.length]},{id:3,type:l,date:"2023-06-10",user:t,texte:""},{id:4,type:"note",date:"2023-11-02",user:a,texte:o[i%o.length]}];return y%3===0&&c.push({id:5,type:"verification",date:"2024-09-12",user:t,texte:"Vérification annuelle conforme."}),localStorage.setItem(pe,JSON.stringify(c)),c}function ye(e){localStorage.setItem(pe,JSON.stringify(e))}function ve(e){ye([{id:Date.now(),type:"note",date:new Date().toISOString().slice(0,10),texte:e},...oe()]),le()}function le(){var s;const e=document.getElementById("sensor-journal-container");if(!e)return;const t=oe().slice().sort((i,l)=>l.date.localeCompare(i.date)),a=i=>{const[l,r,c]=i.split("-");return`${c}/${r}/${l}`},n=Object.fromEntries(He.map(i=>[i.id,i]));let o=`
    <div class="journal-add-bar">
      <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="sjrn-add-btn" style="width:auto">
        <i class="bi bi-plus-lg"></i> Ajouter une entrée
      </button>
    </div>
  `;t.length===0?o+='<div class="journal-empty">Aucune entrée dans le journal.</div>':(o+='<div class="journal-timeline">',t.forEach((i,l)=>{const r=n[i.type]||{label:i.type,icon:"bi-circle",color:"#8e8e93"};t.length-1,o+=`
        <div class="jrn-entry" data-id="${i.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot" style="background:${r.color}18;color:${r.color};border:1.5px solid ${r.color}50">
              <i class="bi ${r.icon}"></i>
            </div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${a(i.date)}</span>
              <span class="journal-type-badge journal-type-badge--maintenance">${r.label}</span>
              <button class="jrn-entry-delete" data-id="${i.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>
            </div>
            ${i.texte?`<div class="jrn-entry-texte">${i.texte}</div>`:""}
            ${i.user?`<div style="font-size:11px;color:var(--txt3);margin-top:2px">${i.user}</div>`:""}
          </div>
        </div>
      `}),o+="</div>"),e.innerHTML=o,(s=e.querySelector("#sjrn-add-btn"))==null||s.addEventListener("click",xt),e.querySelectorAll(".jrn-entry-delete").forEach(i=>{i.addEventListener("click",()=>{const l=parseInt(i.dataset.id);ye(oe().filter(r=>r.id!==l)),le()})})}function xt(){const e=new Date().toISOString().slice(0,10),t=document.createElement("div");t.className="modal add-modal",t.innerHTML=`
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter une entrée</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="sjrn-f-type" class="journal-form-input">
            ${He.map(n=>`<option value="${n.id}">${n.label}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="sjrn-f-date" class="journal-form-input" value="${e}">
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
  `,t.querySelector(".add-modal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()});const a=t.querySelector("#sjrn-f-type");t.querySelector("#sjrn-f-save").addEventListener("click",()=>{const n=a.value,o=t.querySelector("#sjrn-f-date").value||e,s=gt(),i=t.querySelector("#sjrn-f-texte").value.trim(),l={id:Date.now(),type:n,date:o,user:s,texte:i};ye([l,...oe()]),t.remove(),le()}),document.body.appendChild(t)}
