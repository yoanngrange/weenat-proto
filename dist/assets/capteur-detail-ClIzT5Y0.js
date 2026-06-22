import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{s as Z}from"./sensors-CRadjF8G.js";import{p as R}from"./plots-DhtWL7s_.js";import{o as ne}from"./orgs-DnFmvGlp.js";import{m as T}from"./members-Cr98hVG_.js";import{u as we}from"./breadcrumb-CzFWtd6d.js";import{a as me,p as N}from"./store-c0FlIf2T.js";const He=new URLSearchParams(window.location.search),$=parseInt(He.get("id")),c=Z.find(t=>t.id===$),Ee={pluie:{name:"Pluie",unit:"mm",color:"#2E75B6",baseVal:()=>v(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0},temperature:{name:"Température",unit:"°C",color:"#FBAF05",baseVal:()=>v(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},humidite_air:{name:"Humidité",unit:"%",color:"#5B12A4",baseVal:()=>v(40,90)},dpv:{name:"DPV",unit:"kPa",color:"#5E88EC",baseVal:()=>te(.1,2.5)},vent_vitesse:{name:"Vent – vitesse",unit:"km/h",color:"#616161",baseVal:()=>v(0,40)},vent_rafales:{name:"Vent – rafales",unit:"km/h",color:"#525252",baseVal:()=>v(5,60)},vent_direction:{name:"Vent – direction",unit:"°",color:"#424242",baseVal:()=>v(0,360)},vent_direction_rafales:{name:"Vent – direction rafales",unit:"°",color:"#343232",baseVal:()=>v(0,360)},rayonnement:{name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",baseVal:()=>v(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}},etp:{name:"ETP",unit:"mm/j",color:"#7DBDD7",baseVal:()=>te(.5,5),cumul:{label:"Cumul ETP",unit:"mm"}},temperature_min:{name:"Température min",unit:"°C",color:"#FEE7B4",baseVal:()=>v(-2,15),cumul:{label:"Cumul d'heures de froid",unit:"h"}},humidite_sol_10:{name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",baseVal:()=>v(15,45)},humidite_sol_20:{name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",baseVal:()=>v(15,45)},humidite_sol_30:{name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",baseVal:()=>v(15,45)},humidite_sol_ec:{name:"Teneur en eau du sol",unit:"%vol",color:"#46DA82",baseVal:()=>v(15,45)},humidite_sol_40:{name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",baseVal:()=>v(17,43)},humidite_sol_50:{name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",baseVal:()=>v(18,42)},humidite_sol_60:{name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",baseVal:()=>v(18,42)},humidite_sol_90:{name:"Teneur en eau du sol 90 cm",unit:"%vol",color:"#B14C19",baseVal:()=>v(20,40)},temp_sol:{name:"Température du sol",unit:"°C",color:"#795548",baseVal:()=>v(8,22)},potentiel_hydrique:{name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",baseVal:()=>{const t=new Date().getMonth();return Math.round(10+(.5-.5*Math.cos(2*Math.PI*t/12))*140)}},tensio_30:{name:"Tension sol 30 cm",unit:"cbar",color:"#46DA82",baseVal:()=>v(10,80)},tensio_60:{name:"Tension sol 60 cm",unit:"cbar",color:"#F608C2",baseVal:()=>v(10,80)},tensio_90:{name:"Tension sol 90 cm",unit:"cbar",color:"#B14C19",baseVal:()=>v(10,80)},tensio_120:{name:"Tension sol 120 cm",unit:"cbar",color:"#7D9537",baseVal:()=>v(10,80)},tensio_150:{name:"Tension sol 150 cm",unit:"cbar",color:"#5C7020",baseVal:()=>v(10,80)},tensio_180:{name:"Tension sol 180 cm",unit:"cbar",color:"#3C4E10",baseVal:()=>v(10,80)},conductivite:{name:"Conductivité",unit:"mS/cm",color:"#2BCDDE",baseVal:()=>te(.1,3)},humectation:{name:"Humectation foliaire",unit:"h",color:"#00887E",baseVal:()=>v(0,12)},par:{name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#4CBB17",baseVal:()=>v(0,2e3)},temperature_gel:{name:"Temp. feuille/gel",unit:"°C",color:"#FEE7B4",baseVal:()=>v(-3,12),cumul:{label:"Cumul d'heures de gel",unit:"h"}},temp_rosee:{name:"Température de rosée",unit:"°C",color:"#72B0D8",baseVal:()=>v(4,16)},temp_seche:{name:"Température sèche",unit:"°C",color:"#23B19B",baseVal:()=>v(-5,10)},temp_humide:{name:"Température humide",unit:"°C",color:"#5E88EC",baseVal:()=>v(-7,8)}},Ve={"P+":["pluie","temperature","humidite_air"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite_air"],T_MINI:["temp_sol"],W:["_vent"],"CHP-15/30":["potentiel_hydrique","temp_sol"],"CHP-30/60":["potentiel_hydrique","temp_sol"],"CHP-60/90":["humidite_sol_60","humidite_sol_90","temp_sol"],"CAPA-30-3":["_capa_vwc","_capa_temp"],"CAPA-60-6":["_capa_vwc","_capa_temp"],EC:["humidite_sol_ec","temp_sol","conductivite"],LWS:["_lws_intensite","_lws_duree"],PYRANO:["rayonnement"],PAR:["par"],T_GEL:["temp_seche","temp_humide"]},ve={_capa_vwc:{name:"Humidité sol par horizon",unit:"%vol",color:"#ED9A2C",isVirtual:!0},_capa_temp:{name:"Température du sol par horizon",unit:"°C",color:"#795548",isVirtual:!0},_lws_intensite:{name:"Intensité d'humectation",unit:"mV",color:"#00887E",isVirtual:!0},_lws_duree:{name:"Durée d'humectation",unit:"h",color:"#003D39",isVirtual:!0},_vent:{name:"Vent",unit:"km/h",color:"#616161",isVirtual:!0}},_e={"CAPA-30-3":[{id:"humidite_sol_10",label:"10 cm",color:"#105200"},{id:"humidite_sol_20",label:"20 cm",color:"#8C5E82"},{id:"humidite_sol_30",label:"30 cm",color:"#46DA82"}],"CAPA-60-6":[{id:"humidite_sol_10",label:"10 cm",color:"#105200"},{id:"humidite_sol_20",label:"20 cm",color:"#8C5E82"},{id:"humidite_sol_30",label:"30 cm",color:"#46DA82"},{id:"humidite_sol_40",label:"40 cm",color:"#949494"},{id:"humidite_sol_50",label:"50 cm",color:"#870021"},{id:"humidite_sol_60",label:"60 cm",color:"#F608C2"}]};function v(t,e){return Math.floor(Math.random()*(e-t+1))+t}function te(t,e){return parseFloat((Math.random()*(e-t)+t).toFixed(2))}function O(t){return(Ve[t.model]||["temperature","humidite_air"]).map(a=>{if(ve[a])return{id:a,...ve[a],current:null};const n=Ee[a];return n?{id:a,...n,current:n.baseVal()}:null}).filter(Boolean)}let P=null,q="7d",J=null,Y=null;function Me(){const t={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return q==="custom"&&J&&Y?Math.max(60,Math.round((Y-J)/6e4)):t[q]??10080}function oe(){var e;const t=((e=document.getElementById("time-step"))==null?void 0:e.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[t]??60}function Pe(t){return t==="365d"?"1mo":t==="30d"?"1w":t==="7d"?"1d":"1h"}function pe(){const t=Me(),e=oe();return Math.max(2,Math.min(200,Math.floor(t/e)))}const Fe={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function De(){const t=document.getElementById("breadcrumb-title");if(!t)return;const e=t.querySelector("span:last-child");if(!e)return;const a=Z.filter(s=>s.orgId===c.orgId).sort((s,i)=>s.serial.localeCompare(i.serial)),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const o=document.createElement("select");o.className="breadcrumb-nav-select",o.innerHTML=a.map(s=>`<option value="${s.id}"${s.id===$?" selected":""}>${Fe[s.model]||s.model} · ${s.serial}</option>`).join(""),o.addEventListener("change",()=>{window.location.href=`capteur-detail.html?id=${o.value}`}),n.appendChild(o),e.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var e;if(!c){document.body.innerHTML='<div style="padding:40px"><h1>Capteur non trouvé</h1></div>';return}we(`Capteur ${c.serial}`,{label:"Capteurs",href:"capteurs.html"}),De(),qe(),W(),et(),ht(),Qe(),Ke(),mt(),vt(),ie(),(e=document.getElementById("btn-export-csv"))==null||e.addEventListener("click",rt);const t=document.getElementById("sidebar");t&&new MutationObserver(()=>{const a=R.find(n=>{var o;return(o=c.parcelIds)==null?void 0:o.includes(n.id)})||null;G(a),ke()}).observe(t,{attributes:!0,attributeFilter:["data-role"]})});function qe(){var a,n;const t=document.getElementById("latest-strip");if(!t)return;const e=O(c);if(e.forEach(o=>{if(o.isVirtual)return;const s=document.createElement("div");s.className="latest-card",s.style.borderTop=`3px solid ${o.color}`,s.innerHTML=`
      <div class="latest-card-name">${o.name}</div>
      <div class="latest-card-value">${o.current}<span class="latest-card-unit"> ${o.unit}</span></div>
      <div class="latest-card-ts">il y a 5 min</div>
    `,s.style.cursor="default",t.appendChild(s)}),c.model==="TH"){const o=((a=e.find(l=>l.id==="temperature"))==null?void 0:a.current)||20,s=((n=e.find(l=>l.id==="humidite_air"))==null?void 0:n.current)||60,i=(o-(.55-.55*s/100)*(o-14.5)).toFixed(1),r=document.createElement("div");r.className="latest-card",r.style.borderTop="3px solid #e8a030",r.innerHTML=`
      <div class="latest-card-name">THI (Thermal Humidity Index)</div>
      <div class="latest-card-value">${i}<span class="latest-card-unit"> index</span></div>
      <div class="latest-card-ts">T-(0.55-0.55×HR/100)×(T-14.5)</div>
    `,r.style.cursor="default",t.appendChild(r)}}function Ie(t){var r;const e=document.createElement("div");e.className="chart-card",e.dataset.base=t.current,e.dataset.color=t.color,e.dataset.cumul=t.isCumul?"1":"",e.dataset.metricId=t.id,e.dataset.metricName=t.name,e.dataset.metricUnit=t.unit;const a=t.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label}</span><span class="chart-cumul-value">${Xe(t)} ${t.cumul.unit}</span></div>`:"",o=t.id==="temperature"||t.id==="temperature_min"?Re(t.id):"",s=((r=document.getElementById("time-step"))==null?void 0:r.value)||"1h",i=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${c.id}&metricId=${t.id}&period=${q}&step=${s}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`;return e.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${i}
    </div>
    <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    ${a}
    ${o}
  `,e}function Ne(t,e){O(e).forEach(n=>{if(n.isVirtual){Ce(t,n,e);return}t.appendChild(Ie(n))})}function fe(t,e,a){e.isVirtual?Ce(t,e,a):t.appendChild(Ie(e))}function W(){var e;const t=document.getElementById("charts-container");if(t.innerHTML="",P){t.className="compare-rows";const a=Z.find(l=>l.id===P),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${c.model} — ${c.serial}</span></div>
      <div class="compare-col-header">
        <span>${a?`${a.model} — ${a.serial}`:"Capteur"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,t.appendChild(n),(e=n.querySelector(".compare-close-btn"))==null||e.addEventListener("click",()=>{P=null,se(),W()});const o=O(c),s=a?O(a):[],i=o.map(l=>l.id);[...i,...s.map(l=>l.id).filter(l=>!i.includes(l))].forEach(l=>{const d=o.find(E=>E.id===l),u=s.find(E=>E.id===l),m=document.createElement("div");m.className="compare-row";const h=document.createElement("div");d?fe(h,d,c):h.innerHTML='<div class="compare-chart-empty">—</div>';const y=document.createElement("div");u?fe(y,u,a):y.innerHTML='<div class="compare-chart-empty">—</div>',m.appendChild(h),m.appendChild(y),t.appendChild(m)})}else t.className="charts-stack",Ne(t,c);Je(),Oe()}function Re(t){const e=t==="temperature_min",a=Math.round(Math.random()*200+50),n=Math.round(Math.random()*400+100);return`
    <div class="temp-threshold-row" data-metric="${t}">
      <div class="temp-threshold-stat">
        <i class="bi bi-snow"></i>
        <span class="temp-threshold-val">${a} h</span>
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
  `}function Oe(){document.querySelectorAll(".temp-thresh-input").forEach(t=>{t.addEventListener("change",()=>{var o,s;const e=t.closest(".temp-threshold-row"),a=t.dataset.type;parseFloat(t.value);const n=(s=(o=e.querySelector(`.temp-threshold-stat [data-type="${a}"]`))==null?void 0:o.closest(".temp-threshold-stat"))==null?void 0:s.querySelector(".temp-threshold-val");n&&(a==="cold"?n.textContent=`${Math.round(Math.random()*150+30)} h`:n.textContent=`${Math.round(Math.random()*350+80)} °j`)})})}function We(t){const e=pe(),a=Array.from({length:e},()=>v(5,35)),n=a.map(b=>Math.min(b+v(3,18),80)),o=Array.from({length:e},()=>v(0,359)),s=600,i=200,r=46,l=16,d=16,u=28,m=s-r-l,h=i-d-u,y=Math.ceil(Math.max(...n)/10)*10||50,E=b=>r+b/Math.max(e-1,1)*m,p=b=>d+h-b/y*h,x=n.map((b,M)=>`${E(M).toFixed(1)},${p(b).toFixed(1)}`).join("L"),g=[...a].reverse().map((b,M)=>`${E(e-1-M).toFixed(1)},${p(b).toFixed(1)}`).join("L"),A=`M${x}L${g}Z`,f=a.map((b,M)=>`${M?"L":"M"}${E(M).toFixed(1)},${p(b).toFixed(1)}`).join(""),_=[.25,.5,.75].map(b=>{const M=(d+h-b*h).toFixed(1);return`<line x1="${r}" y1="${M}" x2="${s-l}" y2="${M}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),I=[0,.5,1].map(b=>{const M=d+h-b*h;return`<text x="${r-4}" y="${(M+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(b*y)}</text>`}).join(""),j=Math.max(1,Math.round(e/25)),z=[];for(let b=0;b<e;b+=j){const M=E(b).toFixed(1),K=(d+h*.35).toFixed(1);z.push(`<g transform="translate(${M},${K}) rotate(${o[b]})">
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
    </div>`,t.appendChild(C)}function Ce(t,e,a){if(e.id==="_vent"){We(t);return}const n=document.createElement("div");if(n.className="chart-card chart-card--multi",e.id==="_capa_vwc"||e.id==="_capa_temp"){const o=_e[a.model]||[],s=e.id==="_capa_vwc",i=s?"Humidité sol par horizon":"Température du sol par horizon",r=s?"%vol":"°C",l=o.map(d=>`<span class="multi-legend-dot" style="background:${d.color}"></span><span class="multi-legend-label">${d.label}</span>`).join("");n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${e.color}">${i}</span>
        <span class="chart-card-unit">${r}</span>
      </div>
      <div class="multi-chart-legend">${l}</div>
      <svg class="chart-svg chart-svg--multi" width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none"
           data-virtual="${e.id}" data-model="${a.model}"></svg>
    `,t.appendChild(n),requestAnimationFrame(()=>Se(n.querySelector(".chart-svg--multi"),o,s));return}if(e.id==="_lws_intensite"||e.id==="_lws_duree"){const o=e.id==="_lws_intensite",s=o?"Intensité d'humectation":"Durée d'humectation",i=o?"mV":"h",r=o?"#78d8a0":"#45c090",l=o?v(0,800):v(0,12),d=o?"humectation":"lws_duree";n.dataset.base=l,n.dataset.color=r,n.dataset.cumul="",n.dataset.metricId=d,n.dataset.metricName=s,n.dataset.metricUnit=i,n.classList.remove("chart-card--multi"),n.innerHTML=`
      <div class="chart-card-header">
        <span class="chart-card-name" style="color:${r}">${s}</span>
        <span class="chart-card-unit">${i}</span>
      </div>
      <svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
    `,t.appendChild(n)}}function Se(t,e,a){const n=pe(),o=oe(),s=600,i=200,r={t:14,r:10,b:28,l:46},l=s-r.l-r.r,d=i-r.t-r.b,u=e.map(f=>{var j;const _=a?f.id:"temp_sol",I=((j=Ee[_])==null?void 0:j.baseVal())||25;return{color:f.color,label:f.label,vals:Array.from({length:n},(z,C)=>{const b=(n-1-C)*o,M=e.indexOf(f)*1.5;return Math.max(0,ce(_,I+M,b))})}}),m=u.flatMap(f=>f.vals),h=Math.min(...m),y=Math.max(...m),E=y-h||1,p=f=>r.l+f/Math.max(n-1,1)*l,x=f=>r.t+d-(f-h)/E*d;let g="<defs></defs>";for(let f=0;f<=4;f++){const _=r.t+f/4*d,I=y-f/4*E,j=Math.abs(I)>=100?I.toFixed(0):I.toFixed(1);g+=`<line x1="${r.l}" y1="${_.toFixed(1)}" x2="${s-r.r}" y2="${_.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,g+=`<text x="${r.l-5}" y="${(_+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${j}</text>`}const A=Math.max(1,Math.floor(n/6));for(let f=0;f<n;f+=A){const _=p(f).toFixed(1);g+=`<line x1="${_}" y1="${r.t}" x2="${_}" y2="${r.t+d}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,g+=`<text x="${_}" y="${i-6}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${le((n-f)*o)}</text>`}u.forEach(f=>{const _=f.vals.map((I,j)=>({x:p(j),y:x(I)}));g+=`<path d="${Le(_)}" fill="none" stroke="${f.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}),t.innerHTML=g}let Q=null;function ze(){return Q||(Q=document.createElement("div"),Q.className="chart-tooltip",document.body.appendChild(Q)),Q}function Ue(t,e){return e==="temperature"||e==="temperature_min"?["#6eb4d4","#e07050"]:e==="temperature_gel"?["#a0d8f0","#6090d0"]:[Ge(t,.55),t]}function Ge(t,e){const a=parseInt(t.slice(1,3),16),n=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16);return`#${Math.round(a+(255-a)*e).toString(16).padStart(2,"0")}${Math.round(n+(255-n)*e).toString(16).padStart(2,"0")}${Math.round(o+(255-o)*e).toString(16).padStart(2,"0")}`}function Le(t){if(t.length<2)return"";let e=`M${t[0].x.toFixed(1)},${t[0].y.toFixed(1)}`;for(let a=0;a<t.length-1;a++){const n=t[Math.max(a-1,0)],o=t[a],s=t[a+1],i=t[Math.min(a+2,t.length-1)],r=o.x+(s.x-n.x)/6,l=o.y+(s.y-n.y)/6,d=s.x-(i.x-o.x)/6,u=s.y-(i.y-o.y)/6;e+=` C${r.toFixed(1)},${l.toFixed(1)} ${d.toFixed(1)},${u.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return e}function le(t){const e=new Date(Date.now()-t*6e4);return t<1440?`${String(e.getHours()).padStart(2,"0")}h`:t>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][e.getMonth()]:`${String(e.getDate()).padStart(2,"0")}/${String(e.getMonth()+1).padStart(2,"0")}`}function Je(){const t=pe(),e=oe();document.querySelectorAll(".chart-card").forEach(a=>{const n=a.querySelector(".chart-svg:not(.chart-svg--multi)");if(!n)return;const o=parseFloat(a.dataset.base),s=a.dataset.color,i=a.dataset.cumul==="1",r=a.dataset.metricId||"",l=a.dataset.metricName||"",d=a.dataset.metricUnit||"";Ze(n,o,s,t,e,i,r,l,d)}),document.querySelectorAll(".chart-svg--multi").forEach(a=>{const n=a.dataset.model,o=a.dataset.virtual,s=_e[n]||[],i=o==="_capa_vwc";s.length&&Se(a,s,i)})}function be(t){const e=Date.now()-t*6e4;return new Date(e).getHours()+new Date(e).getMinutes()/60}function Ye(t){return Math.max(0,Math.sin(Math.PI*(t-6)/12))}function ye(t){return .5+.5*Math.sin(2*Math.PI*(t-4)/24-Math.PI/2)}function ce(t,e,a,n=.15){const o=be(a),s=ye(o),i=Ye(o),r=()=>1+(Math.random()-.5)*2*n;switch(t){case"temperature":case"temperature_min":return(e-6+s*12)*r();case"temperature_gel":return(e-4+s*8)*r();case"temp_sol":{const l=be(a+120);return(e-3+ye(l)*6)*r()}case"humidite_air":{const l=e+(1-s)*25-s*15;return Math.min(100,Math.max(20,l*r()))}case"rayonnement":case"par":{const l=i*e*1.3;return Math.max(0,l*r())}case"etp":{const l=i*e*1.5;return Math.max(0,l*r())}case"dpv":{const l=i*e*1.4+.05;return Math.max(0,l*r())}case"temp_rosee":{const d=e-6+s*12-2,u=e-8+s*6;return Math.min(d,u)*r()}case"lws_duree":{const l=Math.max(0,.9-i*1.1);return Math.max(0,e*l*r())}case"humectation":{const l=Math.max(0,.8-i*1.2),d=e*l;return Math.max(0,d*r())}case"potentiel_hydrique":return Math.max(5,Math.min(195,e*r()));case"humidite_sol_10":case"humidite_sol_20":case"humidite_sol_30":case"humidite_sol_40":case"humidite_sol_50":case"humidite_sol_60":case"humidite_sol_90":return Math.max(5,e*r());case"tensio_30":case"tensio_60":case"tensio_90":case"tensio_120":case"tensio_150":case"tensio_180":return Math.max(5,e*r());case"conductivite":{const l=20+s*10+(Math.random()-.5)*8;return l<15?0:Math.max(0,(l-15)*.08*r())}case"pluie":return Math.random()<.15?e*Math.random()*2:0;case"vent_vitesse":case"vent_rafales":{const l=e*(.6+i*.8)*r();return Math.max(0,l)}case"vent_direction":case"vent_direction_rafales":return(e+(Math.random()-.5)*60+360)%360;default:return Math.max(0,e*r())}}function Ze(t,e,a,n,o,s,i="",r="",l=""){const m={t:14,r:10,b:28,l:46},h=600-m.l-m.r,y=180-m.t-m.b,E=Math.max(1,Math.round(o/15)),p=Array.from({length:n},(w,S)=>{const B=(n-1-S)*o;if(s){let U=0;for(let F=0;F<E;F++)U+=ce(i,e/E,B+F*(o/E));return U}else return ce(i,e,B)}),x=Math.min(...p),g=Math.max(...p),A=g-x||1,f=w=>m.l+w/Math.max(n-1,1)*h,_=w=>m.t+y-(w-x)/A*y,I=`sg_${Math.random().toString(36).slice(2)}`,[j,z]=Ue(a,i);let C=`<defs>
    <linearGradient id="${I}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${j}"/>
      <stop offset="100%" stop-color="${z}"/>
    </linearGradient>
    <clipPath id="clip_${I}">
      <rect x="${m.l}" y="${m.t}" width="${h}" height="${y}"/>
    </clipPath>
  </defs>`;for(let w=0;w<=4;w++){const S=m.t+w/4*y,B=g-w/4*A,U=Math.abs(B)>=100?B.toFixed(0):Math.abs(B)>=10?B.toFixed(1):B.toFixed(2);C+=`<line x1="${m.l}" y1="${S.toFixed(1)}" x2="${600-m.r}" y2="${S.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,C+=`<text x="${m.l-5}" y="${(S+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${U}</text>`}const b=Math.max(1,Math.floor(n/6));for(let w=0;w<n;w+=b){const S=f(w).toFixed(1);C+=`<line x1="${S}" y1="${m.t}" x2="${S}" y2="${m.t+y}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,C+=`<text x="${S}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${le((n-w)*o)}</text>`}const M=p.map((w,S)=>({x:f(S),y:_(w)})),K=Le(M),je=K+` L${f(n-1).toFixed(1)},${m.t+y} L${m.l.toFixed(1)},${m.t+y} Z`;C+=`<path d="${je}" fill="${z}" opacity="0.07" clip-path="url(#clip_${I})"/>`,C+=`<path d="${K}" fill="none" stroke="url(#${I})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${I})"/>`,C+=`<rect class="chart-hover-rect" x="${m.l}" y="${m.t}" width="${h}" height="${y}" fill="transparent" style="cursor:crosshair"/>`,t.innerHTML=C;const X=ze(),re=t.querySelector(".chart-hover-rect");if(!re)return;const k=document.createElementNS("http://www.w3.org/2000/svg","circle");k.setAttribute("r","4"),k.setAttribute("fill",a),k.setAttribute("stroke","#fff"),k.setAttribute("stroke-width","1.5"),k.style.display="none",k.style.pointerEvents="none",t.appendChild(k),re.addEventListener("mousemove",w=>{const S=t.getBoundingClientRect(),B=(w.clientX-S.left)*(600/S.width),U=Math.max(0,Math.min(1,(B-m.l)/h)),F=Math.round(U*(n-1));if(F<0||F>=p.length)return;const ee=p[F];k.setAttribute("cx",f(F)),k.setAttribute("cy",_(ee)),k.style.display="";const Be=Math.abs(ee)>=100?ee.toFixed(1):ee.toFixed(2);X.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${r}</div>
      <div class="chart-tooltip-val" style="color:${a}">${Be} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${l}</span></div>
      <div class="chart-tooltip-ts">${le((n-F)*o)}</div>
    `,X.style.display="block",X.style.left=`${Math.min(w.clientX+12,window.innerWidth-160)}px`,X.style.top=`${w.clientY-10}px`}),re.addEventListener("mouseleave",()=>{X.style.display="none",k.style.display="none"})}function Xe(t){const a={pluie:()=>v(20,120),temperature:()=>v(80,400),rayonnement:()=>v(500,3e3),etp:()=>te(15,80),temperature_min:()=>v(50,500),temperature_gel:()=>v(0,80)}[t.id];return a?a():"—"}function Qe(){const t=document.getElementById("period-presets"),e=document.getElementById("custom-date-row"),a=document.getElementById("time-step"),n=new Date,o=new Date(n-7*864e5);document.getElementById("date-from").value=o.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),t.addEventListener("click",s=>{const i=s.target.closest(".period-preset-btn");i&&(t.querySelectorAll(".period-preset-btn").forEach(r=>r.classList.remove("active")),i.classList.add("active"),q=i.dataset.period,q==="custom"?e.style.display="flex":(e.style.display="none",a&&(a.value=Pe(q)),W()))}),document.getElementById("date-from").addEventListener("change",ge),document.getElementById("date-to").addEventListener("change",ge),a.addEventListener("change",W)}function ge(){const t=document.getElementById("date-from").value,e=document.getElementById("date-to").value;t&&e&&(J=new Date(t),Y=new Date(e+"T23:59:59"),J<Y&&W())}function Ke(){se()}function se(){var e,a,n;const t=document.getElementById("compare-control");if(t)if(P){const o=Z.find(i=>i.id===P),s=o?`${o.model} — ${o.serial}`:"Capteur";t.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${s} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(e=t.querySelector(".compare-clear-icon"))==null||e.addEventListener("click",i=>{i.stopPropagation(),P=null,se(),W()}),(a=t.querySelector("#compare-open-btn"))==null||a.addEventListener("click",$e)}else t.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(n=t.querySelector("#compare-open-btn"))==null||n.addEventListener("click",$e)}function $e(){const t=document.getElementById("compare-dropdown");if(t){t.remove();return}const e=document.getElementById("compare-control"),a=Z.filter(s=>s.id!==$),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher un capteur…">
    <div class="compare-dropdown-list">
      ${a.map(s=>`<div class="compare-dropdown-item${s.id===P?" active":""}" data-id="${s.id}"><i class="bi bi-broadcast"></i> ${s.model} — ${s.serial}</div>`).join("")}
    </div>
  `,e.appendChild(n);const o=n.querySelector(".compare-search-input");o.focus(),o.addEventListener("input",s=>{const i=s.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(r=>{r.style.display=r.textContent.toLowerCase().includes(i)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(s=>{s.addEventListener("click",()=>{P=parseInt(s.dataset.id),n.remove(),se(),W()})}),setTimeout(()=>{document.addEventListener("click",function s(i){!n.contains(i.target)&&!e.contains(i.target)&&(n.remove(),document.removeEventListener("click",s))})},0)}function et(){const t=R.find(n=>{var o;return(o=c.parcelIds)==null?void 0:o.includes(n.id)}),e=t?ne.find(n=>n.id===t.orgId):c.orgId?ne.find(n=>n.id===c.orgId):null,a=me($);tt(t,e,a),de(),nt(t,e),at(),Te(),ot(),st(),G(t),ct(),dt(),ke()}function tt(t,e,a){let n=a.label||`Capteur ${c.serial}`;const o=document.getElementById("panel-ident");o.innerHTML=`
    <div class="panel-row" data-field="label">
      <span class="panel-row-key">Nom</span>
      <input type="text" class="panel-field-input" data-val value="${n.replace(/"/g,"&quot;")}">
    </div>
    <div class="panel-row"><span class="panel-row-key">Modèle</span><span class="panel-row-val">${c.model}</span></div>
    <div class="panel-row"><span class="panel-row-key">Numéro série</span><span class="panel-row-val">${c.serial}</span></div>
    <div class="panel-row"><span class="panel-row-key">Réseau télécom</span><span class="panel-row-val">${c.telecom||"Sigfox"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Exploitation</span><span class="panel-row-val">${e?e.name:"—"}</span></div>
    <div class="panel-row"><span class="panel-row-key">Date d'ajout</span><span class="panel-row-val">15/01/2023</span></div>
  `;const s=o.querySelector('[data-field="label"] input');if(s){const i=()=>{const r=s.value.trim();if(r&&r!==n){const l=n;n=r,N($,{label:r}),we(r,{label:"Capteurs",href:"capteurs.html"}),he([{id:Date.now(),type:"note",date:new Date().toISOString().slice(0,10),texte:`Nom du capteur modifié : « ${l} » → « ${r} »`},...ae()]),ie()}};s.addEventListener("change",i),s.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),s.blur())})}}function nt(t,e){const a=(e==null?void 0:e.ville)||"—",n=(e==null?void 0:e.departement)||"",o=(t==null?void 0:t.lat)??null,s=(t==null?void 0:t.lng)??null;document.getElementById("panel-loc").innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${n?` (${n})`:""}</span>
    </div>
    ${t?`<div class="panel-row" id="panel-loc-parcel"><span class="panel-row-key">Parcelle</span><span class="panel-row-val">${t.name} — ${t.area} ha</span></div>`:""}
    ${o!=null?`<div class="panel-row"><a href="https://www.google.com/maps?q=${o.toFixed(6)},${s.toFixed(6)}" target="_blank" class="itinerary-link"><i class="bi bi-signpost-2"></i> Obtenir l'itinéraire</a></div>`:""}
  `}function at(){const t=c.networkQuality||80,e=c.messages7d||85,a=s=>s>=80?"var(--ok)":s>=60?"var(--warn)":"var(--err)",n=a(t),o=a(e);document.getElementById("panel-signal").innerHTML=`
    <div class="signal-metric">
      <div class="signal-metric-row">
        <span class="signal-bar-label">Qualité de la couverture réseau</span>
        <span class="signal-bar-pct" style="color:${n}">${t}%</span>
      </div>
      <div class="signal-bar-track"><div class="signal-bar-fill" style="width:${t}%;background:${n}"></div></div>
    </div>
    <div class="signal-metric">
      <div class="signal-metric-row">
        <span class="signal-bar-label">Mesures reçues sur 7 jours</span>
        <span class="signal-bar-pct" style="color:${o}">${e}%</span>
      </div>
      <div class="signal-bar-track"><div class="signal-bar-fill" style="width:${e}%;background:${o}"></div></div>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Opérateur</span>
      <span class="panel-row-val">${c.telecom||"Sigfox"}</span>
    </div>
  `}function Te(){const t=document.getElementById("panel-events");if(c.event){const e=Array.isArray(c.event)?c.event:[c.event];t.innerHTML=e.map((a,n)=>{const o=a.toLowerCase().includes("déplacé");return`
      <div class="event-item event-item--warn" style="justify-content:space-between;gap:12px">
        <div style="display:flex;align-items:flex-start;gap:10px;min-width:0">
          <i class="bi bi-exclamation-triangle-fill" style="flex-shrink:0;margin-top:2px"></i>
          <div>
            <div class="event-item-label">${a}</div>
            <div class="event-item-date">Depuis le 28/03/2026</div>
          </div>
        </div>
        ${o?`<button class="btn-secondary btn-sm ev-stop-btn" data-ev-idx="${n}" style="flex-shrink:0;white-space:nowrap">Arrêter l'événement</button>`:""}
      </div>`}).join(""),t.querySelectorAll(".ev-stop-btn").forEach(a=>{a.addEventListener("click",()=>{const n=+a.dataset.evIdx;Array.isArray(c.event)?(c.event=c.event.filter((o,s)=>s!==n),c.event.length||(c.event=null)):c.event=null,Te()})})}else t.innerHTML='<div class="panel-empty"><i class="bi bi-check-circle" style="color:var(--ok)"></i> Aucun événement</div>'}function ot(){const t=O(c);document.getElementById("panel-metrics").innerHTML=t.map(e=>`
    <div class="metric-pill-row">
      <span class="metric-dot" style="background:${e.color}"></span>
      <span class="metric-pill-name">${e.name}</span>
      <span class="metric-pill-unit">${e.unit}</span>
    </div>
  `).join("")}function st(){const t=document.getElementById("panel-config");if(!t)return;const e=c.model||"",a=e.startsWith("CHP"),n=e.startsWith("CAPA"),o=e==="EC",s=c.isVirtual;let i="";if(s&&(i+=`
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
    `),a){const l=e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[30,60]:[45,90],d=c.depth??l[0];i+=`
      <div class="config-section">
        <div class="config-section-title">Profondeur d'installation</div>
        <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">
          Ce modèle peut être installé de ${l[0]} à ${l[1]} cm.
        </div>
        <div class="form-row">
          <label>Profondeur</label>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="chp-depth-input" class="inline-edit" value="${d}" step="5" min="${l[0]}" max="${l[1]}" style="width:70px">
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
            ${["Argile","Limon argileux","Loam","Limon sableux","Sable limoneux","Sable"].map(l=>`<option>${l}</option>`).join("")}
          </select>
        </div>
        <div class="form-row">
          <label>RU (mm/m)</label>
          <input type="number" class="inline-edit" value="150" step="10" min="50" max="300" style="width:80px">
        </div>
        <button class="action-btn" style="margin-top:6px" onclick="showToastConfig()"><i class="bi bi-check-lg"></i> Enregistrer</button>
      </div>
    `);const r=t.closest(".panel-section");i?(r&&(r.style.display=""),t.innerHTML=i):r&&(r.style.display="none")}let H=R.filter(t=>{var e;return t.orgId===c.orgId&&((e=c.parcelIds)==null?void 0:e.includes(t.id))}).map(t=>t.id);(function(){const e=me($);e.linkedPlotIds?H=e.linkedPlotIds:N($,{linkedPlotIds:H})})();function de(){var l;const t=document.getElementById("panel-plots");if(!t)return;const e=c.orgId||((l=R.find(d=>{var u;return(u=c.parcelIds)==null?void 0:u.includes(d.id)}))==null?void 0:l.orgId),a=R.filter(d=>d.orgId===e),n=a.filter(d=>H.includes(d.id)),o=a.filter(d=>!H.includes(d.id));t.innerHTML=n.length?n.map(d=>`
      <div class="sensor-linked-row">
        <a href="parcelle-detail.html?id=${d.id}" class="sensor-linked-link">${d.name}</a>
        <span class="sensor-link-serial" style="color:var(--txt3)">${d.area?d.area+" ha":""}</span>
        <button class="remove-plot-btn icon-btn" data-id="${d.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>
      </div>
    `).join(""):'<div class="panel-empty" style="margin-bottom:6px">Aucune parcelle liée</div>',t.querySelectorAll(".remove-plot-btn").forEach(d=>{d.addEventListener("click",()=>{H=H.filter(u=>u!==parseInt(d.dataset.id)),N($,{linkedPlotIds:H}),de()})});const s=document.getElementById("plot-add-row"),i=document.getElementById("add-plot-select");s&&i&&(o.length>0?(i.innerHTML='<option value="">Ajouter une parcelle…</option>'+o.map(d=>`<option value="${d.id}">${d.name}${d.area?" — "+d.area+" ha":""}</option>`).join(""),s.style.display=""):s.style.display="none");const r=document.getElementById("add-plot-btn");r&&(r.onclick=()=>{const d=parseInt(document.getElementById("add-plot-select").value);!d||H.includes(d)||(H.push(d),N($,{linkedPlotIds:H}),de())})}function it(t,e){const a=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(a),download:e});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function rt(){const t=O(c).filter(u=>u.baseVal);let e;if(P){const u=Z.find(h=>h.id===P),m=u?O(u).filter(h=>h.baseVal):[];e=[...t.map(h=>({h:`[${c.serial}] ${h.name} (${h.unit})`,gen:h.baseVal})),...m.map(h=>({h:`[${u.serial}] ${h.name} (${h.unit})`,gen:h.baseVal}))]}else e=t.map(u=>({h:`${u.name} (${u.unit})`,gen:u.baseVal}));const a=Me()*6e4,n=oe()*6e4,o=q==="custom"&&Y?Y:new Date,s=q==="custom"&&J?J:new Date(o-a),i=Math.min(Math.ceil((o-s)/n)+1,500),r=(o-s)/Math.max(i-1,1),l=["Horodatage",...e.map(u=>u.h)].join(";"),d=Array.from({length:i},(u,m)=>[new Date(s.getTime()+m*r).toISOString().replace("T"," ").slice(0,19),...e.map(y=>y.gen())].join(";"));it([l,...d].join(`\r
`),`${c.serial}_${q}_${new Date().toISOString().slice(0,10)}.csv`)}function lt({title:t,message:e,confirmLabel:a="Confirmer",onConfirm:n}){const o=document.createElement("div");o.className="modal add-modal",o.innerHTML=`
    <div class="add-modal-content" style="max-width:400px">
      <div class="add-modal-header">
        <span class="add-modal-title">${t}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div style="padding:16px 20px;display:flex;flex-direction:column;gap:16px">
        <p style="margin:0;font-size:13px;color:var(--txt2);line-height:1.5">${e}</p>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button class="btn-secondary confirm-cancel">Annuler</button>
          <button class="btn-danger confirm-ok">${a}</button>
        </div>
      </div>
    </div>`,o.querySelector(".add-modal-close").addEventListener("click",()=>o.remove()),o.querySelector(".confirm-cancel").addEventListener("click",()=>o.remove()),o.querySelector(".confirm-ok").addEventListener("click",()=>{o.remove(),n()}),o.addEventListener("click",s=>{s.target===o&&o.remove()}),document.body.appendChild(o)}function ct(){const t=document.getElementById("panel-actions");t.innerHTML=`
    <button class="action-btn action-btn--danger" id="unlink-sensor-btn"><i class="bi bi-x-circle"></i> Retirer de l'exploitation</button>
  `,t.querySelector("#unlink-sensor-btn").addEventListener("click",()=>{const e=R.filter(n=>c.parcelIds.includes(n.id)),a=e.length?e.map(n=>`<strong>${n.name}</strong>`).join(", "):"aucune parcelle";lt({title:"Retirer le capteur de l'exploitation",message:`Retirer <strong>${c.model} ${c.serial}</strong> de l'exploitation ?<br><br>Parcelles liées : ${a}.<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>showToast("Capteur retiré de l'exploitation (fonctionnalité à venir)")})})}function dt(){const t=(c==null?void 0:c.orgId)===1,e=(()=>{const o=T.find(i=>i.source==="réseau"&&i.role==="agent"&&i.orgIds.includes(c==null?void 0:c.orgId));if(o)return`${o.prenom} ${o.nom}`;const s=T.find(i=>i.source==="réseau"&&(i.role==="admin"||i.role==="propriétaire"));return s?`${s.prenom} ${s.nom}`:"Technicien réseau"})(),a=t?(()=>{const o=T.find(s=>s.source==="adherent"&&s.orgIds.includes(1));return o?`${o.prenom} ${o.nom}`:e})():e,n=[{type:"installation",label:"Installation initiale",date:"15/01/2023",user:e,icon:"bi-box-arrow-in-down"},{type:"nettoyage",label:"Nettoyage pluviomètre",date:"20/03/2023",user:a,icon:"bi-droplet"},{type:"batterie",label:"Changement de batterie",date:"10/06/2023",user:e,icon:"bi-battery-charging"},{type:"note",label:"Redressage capteur déplacé",date:"02/11/2023",user:a,icon:"bi-chat-text"}];document.getElementById("panel-maint").innerHTML=`
    <div class="maint-timeline">
      ${n.map(o=>`
        <div class="maint-item">
          <div class="maint-icon"><i class="bi ${o.icon}"></i></div>
          <div class="maint-body">
            <div class="maint-label">${o.label}</div>
            <div class="maint-meta">${o.date} · ${o.user}</div>
          </div>
        </div>
      `).join("")}
    </div>
    <button class="action-btn" style="margin-top:8px"><i class="bi bi-plus"></i> Ajouter une entrée</button>
  `}let V=null,D=null;function ut(t){if(V!==null)return;const e=(t==null?void 0:t.orgId)??c.orgId,a=me($);V=a.linkedOrgMemberIds??T.filter(n=>{var o,s,i;return n.source==="adherent"&&((o=n.orgIds)==null?void 0:o.includes(e))&&((s=c.parcelIds)!=null&&s.length?c.parcelIds.some(r=>{var l;return(l=n.parcelIds)==null?void 0:l.includes(r)}):(i=n.orgIds)==null?void 0:i.includes(e))}).map(n=>n.id),D=a.linkedConseillerIds??T.filter(n=>{var o,s;return n.source==="réseau"&&((o=c.parcelIds)!=null&&o.length?c.parcelIds.some(i=>{var r;return(r=n.parcelIds)==null?void 0:r.includes(i)}):(s=n.orgIds)==null?void 0:s.includes(e))}).map(n=>n.id)}function xe(t,e,a){return`<div class="member-row">
    <div>
      <span class="member-name">${t.prenom} ${t.nom}</span>
      ${a?`<span class="member-role-badge">${t.role}</span>`:""}
    </div>
    ${e?`<button class="remove-membre-btn icon-btn" data-id="${t.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function G(t){var E;ut(t);const e=((E=document.getElementById("sidebar"))==null?void 0:E.getAttribute("data-role"))==="adherent-reseau",a=(t==null?void 0:t.orgId)??c.orgId,n=document.getElementById("panel-membres"),o=document.getElementById("panel-membres-section"),s=T.filter(p=>{var x;return p.source==="adherent"&&((x=p.orgIds)==null?void 0:x.includes(a))}),i=s.filter(p=>V.includes(p.id));o&&(o.style.display=!e&&s.length===0?"none":""),n&&(n.innerHTML=i.length?i.map(p=>xe(p,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',n.querySelectorAll(".remove-membre-btn").forEach(p=>{p.addEventListener("click",()=>{V=V.filter(x=>x!==parseInt(p.dataset.id)),N($,{linkedOrgMemberIds:V}),G(t)})}));const r=document.getElementById("add-membre-org-row");r&&(r.style.display="");const l=document.getElementById("add-membre-org-select");l&&(l.innerHTML='<option value="">Associer un membre…</option>',s.filter(p=>!V.includes(p.id)).forEach(p=>{const x=document.createElement("option");x.value=p.id,x.textContent=`${p.prenom} ${p.nom}`,l.appendChild(x)}));const d=document.getElementById("add-membre-org-btn");d&&(d.onclick=()=>{const p=parseInt(l==null?void 0:l.value);!p||V.includes(p)||(V.push(p),N($,{linkedOrgMemberIds:V}),G(t))});const u=document.getElementById("panel-conseillers"),m=document.getElementById("panel-conseillers-section"),h=T.filter(p=>p.source==="réseau"&&D.includes(p.id));m&&(m.style.display=e&&h.length===0?"none":""),u&&(u.innerHTML=h.length?h.map(p=>xe(p,!e,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',e||u.querySelectorAll(".remove-membre-btn").forEach(p=>{p.addEventListener("click",()=>{D=D.filter(x=>x!==parseInt(p.dataset.id)),N($,{linkedConseillerIds:D}),G(t)})}));const y=document.getElementById("add-conseiller-row");if(y&&(y.style.display=e?"none":""),!e){const p=document.getElementById("add-membre-select");p&&(p.innerHTML='<option value="">Ajouter un conseiller…</option>',T.filter(g=>g.source==="réseau"&&!D.includes(g.id)).forEach(g=>{const A=document.createElement("option");A.value=g.id,A.textContent=`${g.prenom} ${g.nom} (${g.role})`,p.appendChild(A)}));const x=document.getElementById("add-membre-btn");x&&(x.onclick=()=>{const g=parseInt(p==null?void 0:p.value);!g||D.includes(g)||(D.push(g),N($,{linkedConseillerIds:D}),G(t))})}}function mt(){var r;const t=R.find(l=>{var d;return(d=c.parcelIds)==null?void 0:d.includes(l.id)}),e=t?ne.find(l=>l.id===t.orgId):c.orgId?ne.find(l=>l.id===c.orgId):null,a=(t==null?void 0:t.lat)??(e==null?void 0:e.lat),n=(t==null?void 0:t.lng)??(e==null?void 0:e.lng);if(a==null||n==null)return;const o=L.map("sensor-mini-map",{zoomControl:!1,attributionControl:!1,dragging:!1,touchZoom:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1,tap:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(o);const s=1/111,i=1/(111*Math.cos(a*Math.PI/180));o.fitBounds([[a-s,n-i],[a+s,n+i]]),L.circleMarker([a,n],{radius:6,color:"white",fillColor:"#0172A4",fillOpacity:1,weight:2}).addTo(o),(r=document.getElementById("sensor-map-expand"))==null||r.addEventListener("click",()=>pt(a,n))}function pt(t,e){const a=document.createElement("div");a.className="modal add-modal",a.innerHTML=`
    <div class="add-modal-content" style="max-width:700px;padding:0;overflow:hidden">
      <div class="add-modal-header" style="margin:0;padding:14px 18px;border-bottom:1px solid var(--bdr2)">
        <span class="add-modal-title" style="font-size:16px">Localisation du capteur</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div id="sensor-map-modal-map" style="height:420px"></div>
    </div>`,document.body.appendChild(a);const n=()=>a.remove();a.querySelector(".add-modal-close").addEventListener("click",n),a.addEventListener("click",s=>{s.target===a&&n()});const o=L.map("sensor-map-modal-map",{attributionControl:!1});L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(o),o.setView([t,e],15),L.circleMarker([t,e],{radius:8,color:"white",fillColor:"#0172A4",fillOpacity:1,weight:2}).addTo(o),setTimeout(()=>o.invalidateSize(),0)}function ke(){var r,l,d,u;const e=(((r=document.getElementById("sidebar"))==null?void 0:r.getAttribute("data-role"))||"")==="adherent-reseau"&&(c==null?void 0:c.orgId)!==1;[(l=document.querySelector("#panel-plots"))==null?void 0:l.closest(".panel-section"),document.getElementById("panel-membres-section"),document.getElementById("panel-conseillers-section"),(d=document.querySelector("#panel-actions"))==null?void 0:d.closest(".panel-section"),(u=document.querySelector("#panel-maint"))==null?void 0:u.closest(".panel-section")].forEach(m=>{m&&(m.style.display=e?"none":"")});const a=document.getElementById("panel-config"),n=a==null?void 0:a.closest(".panel-section");n&&(n.style.display=e?"none":a.innerHTML.trim()?"":"none");const o=document.querySelector('.detail-tab-btn[data-pane="tab-journal"]');o&&(o.style.display=e?"none":"");const s=document.getElementById("panel-loc-parcel");s&&(s.style.display=e?"none":"");const i=document.querySelector('#panel-ident [data-field="label"] input');i&&(i.readOnly=e,i.style.cssText=e?"cursor:default;background:transparent;border:none;padding:0;pointer-events:none;color:var(--txt)":"")}function ht(){const t=document.getElementById("detail-layout"),e=document.getElementById("panel-toggle"),a=e.querySelector("i");e.addEventListener("click",()=>{const n=t.classList.toggle("panel-collapsed");e.title=n?"Afficher le panneau":"Masquer le panneau",a.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}function vt(){document.querySelectorAll(".detail-tab-btn").forEach(t=>{t.addEventListener("click",()=>{var e;document.querySelectorAll(".detail-tab-btn").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(a=>a.classList.remove("active")),t.classList.add("active"),(e=document.getElementById(t.dataset.pane))==null||e.classList.add("active")})})}const ue=`sensor-journal-${$}`,Ae=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function ft(){if((c==null?void 0:c.orgId)===1){const n=T.find(o=>o.source==="adherent"&&o.orgIds.includes(1));if(n)return`${n.prenom} ${n.nom}`}const e=T.find(n=>n.source==="réseau"&&n.role==="agent"&&n.orgIds.includes(c==null?void 0:c.orgId));if(e)return`${e.prenom} ${e.nom}`;const a=T.find(n=>n.source==="réseau"&&(n.role==="admin"||n.role==="propriétaire"));return a?`${a.prenom} ${a.nom}`:""}function ae(){try{const u=localStorage.getItem(ue);if(u)return JSON.parse(u)}catch{}const t=(c==null?void 0:c.orgId)===1,e=(()=>{const u=T.find(h=>h.source==="réseau"&&h.role==="agent"&&h.orgIds.includes(c==null?void 0:c.orgId));if(u)return`${u.prenom} ${u.nom}`;const m=T.find(h=>h.source==="réseau"&&(h.role==="admin"||h.role==="propriétaire"));return m?`${m.prenom} ${m.nom}`:"Technicien réseau"})(),a=t?(()=>{const u=T.find(m=>m.source==="adherent"&&m.orgIds.includes(1));return u?`${u.prenom} ${u.nom}`:e})():e,n=["Nettoyage pluviomètre après hiver","Nettoyage du capteur, dépôt de poussière sur la cellule","Toile d'araignée retirée dans l'entonnoir","Nettoyage de routine, aucune anomalie constatée"],o=["Capteur légèrement déplacé après passage tracteur — redressé","Antenne réorientée pour améliorer la réception","Végétation haute autour du capteur — dégagée","Capteur incliné après un coup de vent — vérifié et stabilisé","Câble légèrement endommagé — surveillance renforcée"],s=[{id:"batterie",label:""},{id:"antenne",label:""},{id:"bocal",label:""},{id:"lacet",label:""}],i=$%100,r=s[$%s.length].id,d=[{id:1,type:"installation",date:`${2022+$%3}-${String(1+$%12).padStart(2,"0")}-${String(1+$*3%27).padStart(2,"0")}`,user:e,texte:""},{id:2,type:"nettoyage",date:"2023-03-20",user:a,texte:n[i%n.length]},{id:3,type:r,date:"2023-06-10",user:e,texte:""},{id:4,type:"note",date:"2023-11-02",user:a,texte:o[i%o.length]}];return $%3===0&&d.push({id:5,type:"verification",date:"2024-09-12",user:e,texte:"Vérification annuelle conforme."}),localStorage.setItem(ue,JSON.stringify(d)),d}function he(t){localStorage.setItem(ue,JSON.stringify(t))}function ie(){var s;const t=document.getElementById("sensor-journal-container");if(!t)return;const e=ae().slice().sort((i,r)=>r.date.localeCompare(i.date)),a=i=>{const[r,l,d]=i.split("-");return`${d}/${l}/${r}`},n=Object.fromEntries(Ae.map(i=>[i.id,i]));let o=`
    <div class="journal-add-bar">
      <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="sjrn-add-btn" style="width:auto">
        <i class="bi bi-plus-lg"></i> Ajouter une entrée
      </button>
    </div>
  `;e.length===0?o+='<div class="journal-empty">Aucune entrée dans le journal.</div>':(o+='<div class="journal-timeline">',e.forEach((i,r)=>{const l=n[i.type]||{label:i.type,icon:"bi-circle",color:"#8e8e93"};e.length-1,o+=`
        <div class="jrn-entry" data-id="${i.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot" style="background:${l.color}18;color:${l.color};border:1.5px solid ${l.color}50">
              <i class="bi ${l.icon}"></i>
            </div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${a(i.date)}</span>
              <span class="journal-type-badge journal-type-badge--maintenance">${l.label}</span>
              <button class="jrn-entry-delete" data-id="${i.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>
            </div>
            ${i.texte?`<div class="jrn-entry-texte">${i.texte}</div>`:""}
            ${i.user?`<div style="font-size:11px;color:var(--txt3);margin-top:2px">${i.user}</div>`:""}
          </div>
        </div>
      `}),o+="</div>"),t.innerHTML=o,(s=t.querySelector("#sjrn-add-btn"))==null||s.addEventListener("click",bt),t.querySelectorAll(".jrn-entry-delete").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.dataset.id);he(ae().filter(l=>l.id!==r)),ie()})})}function bt(){const t=new Date().toISOString().slice(0,10),e=document.createElement("div");e.className="modal add-modal",e.innerHTML=`
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter une entrée</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="sjrn-f-type" class="journal-form-input">
            ${Ae.map(n=>`<option value="${n.id}">${n.label}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="sjrn-f-date" class="journal-form-input" value="${t}">
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
  `,e.querySelector(".add-modal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()});const a=e.querySelector("#sjrn-f-type");e.querySelector("#sjrn-f-save").addEventListener("click",()=>{const n=a.value,o=e.querySelector("#sjrn-f-date").value||t,s=ft(),i=e.querySelector("#sjrn-f-texte").value.trim(),r={id:Date.now(),type:n,date:o,user:s,texte:i};he([r,...ae()]),e.remove(),ie()}),document.body.appendChild(e)}
