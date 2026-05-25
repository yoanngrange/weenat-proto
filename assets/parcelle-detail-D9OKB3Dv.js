import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as U}from"./plots-BEYIGwLd.js";import{s as P}from"./sensors-DDe0aa9W.js";import{o as Me}from"./orgs-Cx4wNzLL.js";import{m as fe}from"./members-DEd9yWse.js";import{u as qe}from"./breadcrumb-DEBQjfiD.js";import{d as be,e as Se}from"./store-DzkjdUGR.js";import"./irrigations-cQAUTeq7.js";const Ue=new URLSearchParams(window.location.search),R=parseInt(Ue.get("id")),I=U.find(e=>e.id===R);function h(e,t){return Math.floor(Math.random()*(t-e+1))+e}function j(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}const Ee=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#c090e0",base:()=>j(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>h(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#80c8e8",base:()=>h(2,16),isCumul:!1}],H={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>h(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>h(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#4ecdc4",base:()=>h(40,90)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>h(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>h(10,28),cumul:{label:"DJC",unit:"°j"}}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>h(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],SMV:[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>h(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>h(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#4ecdc4",base:()=>h(40,90)}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>h(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#4ecdc4",base:()=>h(40,90)}],"CHP-15/30":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",base:()=>h(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>h(8,22)}],"CHP-30/60":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",base:()=>h(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>h(8,22)}],"CHP-60/90":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",base:()=>h(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>h(8,22)}],"CAPA-30-3":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#f0cc60",base:()=>h(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#c89c30",base:()=>h(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#a07010",base:()=>h(15,45)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>h(8,22)}],"CAPA-60-6":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#f0d070",base:()=>h(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#d8b050",base:()=>h(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#c09030",base:()=>h(15,45)},{id:"vwc40",name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#a87010",base:()=>h(17,43)},{id:"vwc50",name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#905200",base:()=>h(18,42)},{id:"vwc60",name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#783400",base:()=>h(18,42)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>h(8,22)}],T_MINI:[{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>h(8,22)}],LWS:[{id:"humec",name:"Humectation foliaire",unit:"h",color:"#78d8a0",base:()=>h(0,12)}],T_GEL:[{id:"tseche",name:"Temp. sèche",unit:"°C",color:"#e07050",base:()=>h(-2,12)},{id:"thumide",name:"Temp. humide",unit:"°C",color:"#4ecdc4",base:()=>h(-4,10)}],W:[{id:"_vent",name:"Vent",unit:"km/h · direction",color:"#7bc4b0",isWindComposite:!0,base:()=>h(0,40)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>j(.1,3)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>h(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>h(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}]},_=["CHP-15/30","CHP-30/60","CHP-60/90"],ee={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"};function Ye(e,t=null,n=null,i=null){const a=Math.max(2,Math.min(200,Math.floor(Ce()/ne()))),s=Array.from({length:a},()=>h(5,35)),l=s.map(M=>Math.min(M+h(3,18),80)),r=Array.from({length:a},()=>h(0,359)),c=600,o=200,d=46,m=16,u=16,p=28,v=c-d-m,f=o-u-p,b=Math.ceil(Math.max(...l)/10)*10||50,g=M=>d+M/Math.max(a-1,1)*v,x=M=>u+f-M/b*f,w=l.map((M,C)=>`${g(C).toFixed(1)},${x(M).toFixed(1)}`).join("L"),$=[...s].reverse().map((M,C)=>`${g(a-1-C).toFixed(1)},${x(M).toFixed(1)}`).join("L"),T=`M${w}L${$}Z`,k=s.map((M,C)=>`${C?"L":"M"}${g(C).toFixed(1)},${x(M).toFixed(1)}`).join(""),O=[.25,.5,.75].map(M=>{const C=(u+f-M*f).toFixed(1);return`<line x1="${d}" y1="${C}" x2="${c-m}" y2="${C}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),z=[0,.5,1].map(M=>{const C=u+f-M*f;return`<text x="${d-4}" y="${(C+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(M*b)}</text>`}).join(""),S=Math.max(1,Math.round(a/25)),D=[];for(let M=0;M<a;M+=S){const C=g(M).toFixed(1),X=(u+f*.35).toFixed(1);D.push(`<g transform="translate(${C},${X}) rotate(${r[M]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const E=document.createElement("div");E.className="chart-card",i&&(E.dataset.cardKey=i,E.draggable=!0);const A=t?`<span class="chart-card-source">${t}</span>`:"",F=n!=null?`<span class="chart-card-emission">il y a ${n} min</span>`:"";E.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
      <div class="chart-card-meta">${A}${F}</div>
    </div>
    <svg width="100%" height="${o}" viewBox="0 0 ${c} ${o}" preserveAspectRatio="none">
      ${z}${O}
      <path d="${T}" fill="#7bc4b0" opacity=".18"/>
      <path d="${k}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${D.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(E)}const Ke=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let y={};function Xe(){const e=Se(R);if(y={...I,...e},!y.linkedSensorIds){const t=P.filter(n=>n.parcelId===R).map(n=>n.id);y.linkedSensorIds=e.linkedSensorIds??t}y.integrations||(y.integrations=[...I.integrations||[]]),y.alertes||(y.alertes=[])}function W(e){Object.assign(y,e),be(R,e)}let J="7d",Y=null,K=null;function Ce(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return J==="custom"&&Y&&K?Math.max(60,Math.round((K-Y)/6e4)):e[J]??10080}function ne(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Ze(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function Qe(){const e=Ce(),t=ne();return Math.max(2,Math.min(200,Math.floor(e/t)))}const Ie={"Cumul Degrés jours":"cumuls","Cumul Pluie":"cumuls","Cumul Ensoleillement":"cumuls","Cumul Evapotranspiration":"cumuls","Cumul Heures froides":"cumuls","Cumul Humectation foliaire":"cumuls","Maï'zy":"maizy","Suivi de culture":"suivi-culture",Weephyt:"weephyt",Decitrait:"decitrait","Tavelure Pomme":"tavelure",DPV:"dpv",THI:"thi","Température de rosée":"temp-rosee","Température du sol":"temp-sol","Rayonnement solaire":"w-pyrano",Gel:"gel","Prévisions à 5 jours":"previsions-5j","Prévisions à 6 heures":"previsions-6h","Prévisions du jour":"previsions-jour","Prévisions de tensiométrie":"previsions-tensio",Anémomètre:"w-anem","Capteur d'humectation foliaire":"w-lws","Capteur PAR":"w-par",Pyranomètre:"w-pyrano","Station météo":"w-station","Station Météo Virtuelle":"w-station","Thermomètre de sol":"w-tsol","Thermomètre-Hygromètre":"w-thygro","Sonde capacitive":"w-capa",Tensiomètre:"w-tensio","Sonde de fertirrigation":"w-ec","Profil capteurs":"profil-capteurs","Niveau de réservoir en eau utilisable":"niveau-reservoir","Profil de niveau de réservoir":"profil-reservoir"},et=[{title:"Cumuls",items:["Cumul Degrés jours","Cumul Pluie","Cumul Ensoleillement","Cumul Evapotranspiration","Cumul Heures froides","Cumul Humectation foliaire"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Weephyt","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire","Gel"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Irrigation",items:["Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]}];function tt(){const e=P.filter(o=>y.linkedSensorIds.includes(o.id)),t=new Set(e.map(o=>o.model)),n=(y.crop||I.crop||"").toLowerCase(),i=te(),a=e.some(o=>{const d=H[o.model]||[];return d.some(m=>m.id==="temp")&&d.some(m=>m.id==="humidite")}),s=e.some(o=>(H[o.model]||[]).some(d=>d.id==="tsol")),l=e.some(o=>(H[o.model]||[]).some(d=>d.cumul)),r=o=>Ie[o]?o==="Gel"?t.has("T_GEL"):o==="Maï'zy"?n.includes("maïs")||n.includes("mais"):o==="Tavelure Pomme"?n.includes("pommier"):o==="Station météo"?t.has("P+")||t.has("PT")||t.has("P"):o==="Station Météo Virtuelle"?t.has("SMV"):o==="Thermomètre-Hygromètre"?t.has("TH"):o==="Thermomètre de sol"?t.has("T_MINI")||s:o==="Anémomètre"?t.has("W"):o==="Pyranomètre"||o==="Rayonnement solaire"?t.has("PYRANO"):o==="Capteur d'humectation foliaire"?t.has("LWS"):o==="Capteur PAR"?t.has("PAR"):o==="Sonde capacitive"?[...t].some(m=>m.startsWith("CAPA-")):o==="Tensiomètre"?[...t].some(m=>_.includes(m)):o==="Sonde de fertirrigation"?t.has("EC"):o==="DPV"||o==="THI"||o==="Température de rosée"?a:o==="Température du sol"?s:o.startsWith("Cumul")?l:!0:!0,c=document.createElement("div");c.className="modal add-modal",c.innerHTML=`
    <div class="add-modal-content" style="max-width:520px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter un widget</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      ${et.map(o=>{const d=o.items.filter(r);return d.length?`
        <div class="add-modal-section">
          <div class="add-modal-section-label">${o.title}</div>
          <div class="wcat-list">
            ${d.map(m=>{const u=Ie[m],p=u&&i.includes(u);return`
              <div class="wcat-item">
                <span>${m}</span>
                ${p?'<span class="wcat-already"><i class="bi bi-check2"></i> Ajouté</span>':`<button class="wcat-add-btn" type="button" data-wid="${u}"><i class="bi bi-plus-circle"></i> Ajouter</button>`}
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")}
    </div>`,c.addEventListener("click",o=>{o.target===c&&c.remove()}),c.querySelector(".add-modal-close").addEventListener("click",()=>c.remove()),c.querySelectorAll(".wcat-add-btn").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.wid;if(!d)return;const m=te();m.includes(d)||(m.push(d),ue(m)),c.remove(),me()})}),document.body.appendChild(c)}const ge=`weenat-journal-${R}`,Pe=new Date().toISOString().slice(0,10);function oe(){try{const t=localStorage.getItem(ge);if(t)return JSON.parse(t)}catch{}const e=[{id:17469216e5,type:"note",date:"2026-05-11",texte:"Observation de quelques pucerons sur les feuilles basses. À surveiller."},{id:17473536e5,type:"traitement",date:"2026-05-16",texte:"Application conforme aux conditions météo. Vent < 2 m/s.",produit:"Karate Zeon 10 CS",dose:"0,1 L/ha",cible:"Pucerons"},{id:17477856e5,type:"note",date:"2026-05-21",texte:"Suite traitement du 16/05 : peu de pucerons visibles, situation sous contrôle."}];return localStorage.setItem(ge,JSON.stringify(e)),e}function Ne(e){localStorage.setItem(ge,JSON.stringify(e))}function Te(){const e=document.getElementById("journal-container");if(!e)return;const t=oe().sort((s,l)=>l.date.localeCompare(s.date)),n=s=>{const[l,r,c]=s.split("-");return`${c}/${r}/${l}`};let i=`
    <div class="journal-add-bar">
      <button class="btn-secondary btn-sm" id="jrn-add-note" style="gap:6px">
        <i class="bi bi-pencil-square"></i> Ajouter une note
      </button>
      <button class="btn-secondary btn-sm" id="jrn-add-traitement" style="gap:6px">
        <i class="bi bi-eyedropper"></i> Ajouter un traitement
      </button>
    </div>
  `;t.length===0?i+='<div class="journal-empty">Aucune entrée dans le journal.</div>':t.forEach(s=>{var r;const l=s.type==="traitement";i+=`
        <div class="journal-entry" data-id="${s.id}">
          <div class="journal-entry-hd">
            <span class="journal-entry-date">${n(s.date)}</span>
            <span class="journal-type-badge journal-type-badge--${s.type}">
              <i class="bi bi-${l?"eyedropper":"pencil"}"></i>
              ${l?"Traitement":"Note"}
            </span>
            <button class="journal-entry-delete" data-id="${s.id}" title="Supprimer">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
          ${s.texte?`<div class="journal-entry-texte">${s.texte}</div>`:""}
          ${l&&(s.produit||s.dose||s.cible)?`
            <div class="journal-entry-meta">
              ${s.produit?`<span><i class="bi bi-flask"></i>${s.produit}</span>`:""}
              ${s.dose?`<span><i class="bi bi-droplet"></i>${s.dose}</span>`:""}
              ${s.cible?`<span><i class="bi bi-bullseye"></i>${s.cible}</span>`:""}
            </div>`:""}
          ${(r=s.imageIds)!=null&&r.length?`<div class="jrn-entry-photos" data-entry-id="${s.id}"></div>`:""}
        </div>
      `}),e.innerHTML=i,e.querySelector("#jrn-add-note").addEventListener("click",()=>je("note")),e.querySelector("#jrn-add-traitement").addEventListener("click",()=>je("traitement")),e.querySelectorAll(".journal-entry-delete").forEach(s=>{s.addEventListener("click",()=>{var c,o;const l=parseInt(s.dataset.id),r=oe().find(d=>d.id===l);(c=r==null?void 0:r.imageIds)!=null&&c.length&&((o=window.ImageStore)==null||o.remove(r.imageIds)),Ne(oe().filter(d=>d.id!==l)),Te()})});const a=window.ImageStore;a&&e.querySelectorAll(".jrn-entry-photos[data-entry-id]").forEach(async s=>{var r;const l=t.find(c=>String(c.id)===s.dataset.entryId);if((r=l==null?void 0:l.imageIds)!=null&&r.length)for(const c of l.imageIds)try{const o=await a.get(c);if(!o)continue;const d=document.createElement("img");d.className="jrn-entry-photo",d.src=o,d.alt="",d.addEventListener("click",()=>{var m;return(m=window.openLightbox)==null?void 0:m.call(window,o)}),s.appendChild(d)}catch{}})}function je(e){const t=e==="traitement",n=document.createElement("div");n.className="modal add-modal",n.innerHTML=`
    <div class="add-modal-content" style="max-width:480px">
      <div class="add-modal-header">
        <span class="add-modal-title">${t?"Ajouter un traitement":"Ajouter une note"}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="jrn-f-date" class="journal-form-input" value="${Pe}">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">${t?"Observations":"Texte"}</label>
          <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="${t?"Conditions météo, observations…":"Votre note…"}"></textarea>
        </div>
        ${t?`
        <div class="journal-form-grid">
          <div class="journal-form-row">
            <label class="journal-form-label">Produit</label>
            <input type="text" id="jrn-f-produit" class="journal-form-input" placeholder="Ex : Bordeaux mixture">
          </div>
          <div class="journal-form-row">
            <label class="journal-form-label">Dose</label>
            <input type="text" id="jrn-f-dose" class="journal-form-input" placeholder="Ex : 2 kg/ha">
          </div>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Cible (maladie / ravageur)</label>
          <input type="text" id="jrn-f-cible" class="journal-form-input" placeholder="Ex : Mildiou">
        </div>`:""}
        <div class="journal-form-row">
          <label class="journal-form-label">Photos</label>
          <div class="jrn-img-zone">
            <div class="jrn-img-previews" id="jrn-f-previews"></div>
            <button type="button" class="jrn-img-add-btn" id="jrn-f-img-btn">
              <i class="bi bi-camera"></i> Ajouter une photo
            </button>
            <input type="file" id="jrn-f-img-input" accept="image/jpeg,image/png,image/webp,image/avif,image/bmp" multiple style="display:none">
            <div class="jrn-img-error" id="jrn-f-img-err"></div>
          </div>
        </div>
        <button class="btn-primary btn-sm" id="jrn-f-save" style="width:100%;justify-content:center">
          Enregistrer
        </button>
      </div>
    </div>
  `,n.querySelector(".add-modal-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",s=>{s.target===n&&n.remove()});const i=[],a=window.ImageStore;a&&(a._addThumb=a._addThumb||window.addThumbToPreview,window.setupImgUpload(n.querySelector("#jrn-f-img-input"),n.querySelector("#jrn-f-img-btn"),n.querySelector("#jrn-f-previews"),n.querySelector("#jrn-f-img-err"),i)),n.querySelector("#jrn-f-save").addEventListener("click",async()=>{const s=n.querySelector("#jrn-f-date").value||Pe,l=n.querySelector("#jrn-f-texte").value.trim(),r={id:Date.now(),type:e,date:s,texte:l};if(t&&(r.produit=n.querySelector("#jrn-f-produit").value.trim(),r.dose=n.querySelector("#jrn-f-dose").value.trim(),r.cible=n.querySelector("#jrn-f-cible").value.trim()),!(!l&&!r.produit&&!i.length)){if(a&&i.length){r.imageIds=[];for(const c of i){const o=`img_${r.id}_${r.imageIds.length}`;await a.store(o,c),r.imageIds.push(o)}}Ne([r,...oe()]),n.remove(),Te()}}),document.body.appendChild(n)}function nt(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const n=U.filter(s=>s.orgId===I.orgId).sort((s,l)=>s.name.localeCompare(l.name,"fr")),i=document.createElement("span");i.className="breadcrumb-nav-wrap";const a=document.createElement("select");a.className="breadcrumb-nav-select",a.innerHTML=n.map(s=>`<option value="${s.id}"${s.id===R?" selected":""}>${s.name}</option>`).join(""),a.addEventListener("change",()=>{window.location.href=`parcelle-detail.html?id=${a.value}`}),i.appendChild(a),t.replaceWith(i)}document.addEventListener("DOMContentLoaded",()=>{var t,n;if(!I){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}Xe(),qe(y.name||I.name,{label:"Parcelles",href:"parcelles.html"}),nt(),V(),$t(),At(),Ht(),wt(),xt(),Ft(),me(),(t=document.getElementById("parcel-add-widget-btn"))==null||t.addEventListener("click",tt),(n=document.getElementById("btn-export-csv"))==null||n.addEventListener("click",Pt);const e=document.getElementById("sidebar");e&&new MutationObserver(()=>ce()).observe(e,{attributes:!0,attributeFilter:["data-role"]})});let re="capteur",q=null;const Be=`charts-order-parcel-${R}`;function it(){try{return JSON.parse(localStorage.getItem(Be)||"null")}catch{return null}}function st(e){localStorage.setItem(Be,JSON.stringify(e))}function at(e){let t=null;e.addEventListener("dragstart",n=>{const i=n.target.closest(".chart-card[data-card-key]");i&&(t=i,i.classList.add("chart-dragging"),n.dataTransfer.effectAllowed="move")}),e.addEventListener("dragend",()=>{t==null||t.classList.remove("chart-dragging"),e.querySelectorAll(".chart-card").forEach(i=>i.classList.remove("chart-drag-over")),t=null;const n=[...e.querySelectorAll(".chart-card[data-card-key]")].map(i=>i.dataset.cardKey);st(n)}),e.addEventListener("dragover",n=>{if(n.preventDefault(),!t)return;const i=n.target.closest(".chart-card[data-card-key]");if(!i||i===t)return;e.querySelectorAll(".chart-card").forEach(s=>s.classList.remove("chart-drag-over")),i.classList.add("chart-drag-over");const a=i.getBoundingClientRect().top+i.getBoundingClientRect().height/2;e.insertBefore(t,n.clientY<a?i:i.nextSibling)}),e.addEventListener("drop",n=>{n.preventDefault(),e.querySelectorAll(".chart-card").forEach(i=>i.classList.remove("chart-drag-over"))})}function ot(e,t){const n=P.filter(o=>t.includes(o.id)),i=n.filter(o=>_.includes(o.model)),a=n.filter(o=>!_.includes(o.model)),s=ne(),l=new Set;n.forEach(o=>(H[o.model]||[]).forEach(d=>l.add(d.id)));const r=[];if(a.forEach(o=>{const d=H[o.model];if(!d)return;const m=`${o.model} · ${o.serial}`,u=Math.floor(5+Math.random()*55);d.forEach(p=>{if(p.isWindComposite){r.push({key:`wind-${o.id}`,type:"wind",sensor:o,source:m,emissionMins:u});return}r.push({key:`s${o.id}-${p.id}`,type:"metric",metric:p,source:m,emissionMins:u})})}),i.length>0){const o=`Tensiomètres · ${i.length} capteur${i.length>1?"s":""}`,d=Math.floor(5+Math.random()*55);["pothydr","tsol"].forEach(m=>{r.push({key:`tensio-${m}`,type:"tensio",metricId:m,source:o,emissionMins:d,tensioSensors:i})})}Ee.filter(o=>!(o.id==="etp"&&s<1440)).filter(o=>!l.has(o.id)).forEach(o=>r.push({key:`always-${o.id}`,type:"metric",metric:o,source:"parcelle",emissionMins:null,unavailable:s<60}));const c=it();if(c!=null&&c.length){const o=new Map(c.map((d,m)=>[d,m]));r.sort((d,m)=>(o.has(d.key)?o.get(d.key):1/0)-(o.has(m.key)?o.get(m.key):1/0))}r.forEach(o=>{o.type==="metric"?ye(e,o.metric,o.source,o.emissionMins,o.key,o.unavailable):o.type==="wind"?Ye(e,o.source,o.emissionMins,o.key):o.type==="tensio"&&ct(e,o.metricId,o.tensioSensors,o.source,o.emissionMins,o.key)}),at(e)}function le(e){const t=P.filter(a=>e.includes(a.id)),n=new Set,i=[];return t.forEach(a=>{(H[a.model]||[]).forEach(s=>{n.has(s.id)||(n.add(s.id),i.push(s))})}),Ee.forEach(a=>{n.has(a.id)||(n.add(a.id),i.push(a))}),i}function V(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",q){e.className="compare-rows";const n=U.find(d=>d.id===q),i=document.createElement("div");i.className="compare-header-row",i.innerHTML=`
      <div class="compare-col-header"><span>${y.name||I.name}</span></div>
      <div class="compare-col-header">
        <span>${(n==null?void 0:n.name)||"Parcelle"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(i),(t=i.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{q=null,de(),V()});const a=le(y.linkedSensorIds),s=Se(q),l=(s==null?void 0:s.linkedSensorIds)??P.filter(d=>d.parcelId===q).map(d=>d.id),r=le(l),c=a.map(d=>d.id);[...c,...r.map(d=>d.id).filter(d=>!c.includes(d))].forEach(d=>{const m=a.find(b=>b.id===d),u=r.find(b=>b.id===d),p=document.createElement("div");p.className="compare-row";const v=document.createElement("div");m?ye(v,m):v.innerHTML='<div class="compare-chart-empty">—</div>';const f=document.createElement("div");u?ye(f,u):f.innerHTML='<div class="compare-chart-empty">—</div>',p.appendChild(v),p.appendChild(f),e.appendChild(p)})}else e.className="charts-stack",ot(e,y.linkedSensorIds);ht()}const Q=["#5b8dd9","#e07050","#4ecdc4","#f5c842","#c090e0","#78d8a0"];function rt(e){const t=e.depth||30;return[{depth:t,label:`${t} cm`,sensor:e}]}function lt(e){if(re==="capteur")return e.map((n,i)=>({label:n.serial,color:Q[i%Q.length],depth:n.depth||30,sensor:n}));const t=new Map;return e.forEach(n=>rt(n).forEach(i=>{t.has(i.depth)||t.set(i.depth,i)})),[...t.values()].sort((n,i)=>n.depth-i.depth).map((n,i)=>({label:n.label,color:Q[i%Q.length],depth:n.depth,sensor:n.sensor}))}function ct(e,t,n,i=null,a=null,s=null){var v;const r={pothydr:{name:"Potentiel hydrique",unit:"kPa"},tsol:{name:"Température du sol",unit:"°C"}}[t],c=lt(n),o=document.createElement("div");o.className="chart-card tensio-multi-card",o.dataset.tensioMetric=t,o.dataset.tensioCurves=JSON.stringify(c.map(f=>({depth:f.depth,color:f.color}))),s&&(o.dataset.cardKey=s,o.draggable=!0);const d=c.map(f=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${f.color};vertical-align:middle;border-radius:1px"></span>
      ${f.label}
    </span>`).join(""),m=i?`<span class="chart-card-source">${i}</span>`:"",u=a!=null?`<span class="chart-card-emission">il y a ${a} min</span>`:"",p=`
    <div class="chart-tensio-toggle">
      <button class="btn-secondary btn-sm tensio-toggle-btn${re==="capteur"?" active":""}" data-mode="capteur">Par capteur</button>
      <button class="btn-secondary btn-sm tensio-toggle-btn${re==="horizon"?" active":""}" data-mode="horizon">Par horizon</button>
    </div>`;o.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((v=c[0])==null?void 0:v.color)||Q[0]}">${r.name}</span>
      <span class="chart-card-unit">${r.unit}</span>
      ${m}${u}
    </div>
    ${p}
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${d}</div>
    <svg class="chart-svg tensio-svg" data-metric="${t}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,o.querySelectorAll(".tensio-toggle-btn").forEach(f=>{f.addEventListener("click",()=>{re=f.dataset.mode,V()})}),e.appendChild(o)}function ye(e,t,n=null,i=null,a=null,s=!1){const l=t.base(),r=document.createElement("div");r.className="chart-card",r.dataset.base=l,r.dataset.color=t.color,r.dataset.cumul=t.isCumul?"1":"",r.dataset.chartType=t.chartType||"line",r.dataset.metricId=t.id,r.dataset.metricName=t.name,r.dataset.metricUnit=t.unit,a&&(r.dataset.cardKey=a,r.draggable=!0);const c=t.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label}</span><span class="chart-cumul-value">${yt(t)} ${t.cumul.unit}</span></div>`:"",o=n?`<span class="chart-card-source">${n}</span>`:"",d=i!=null?`<span class="chart-card-emission">il y a ${i} min</span>`:"",m=s?'<div class="chart-unavailable">Données indisponibles pour ce pas de temps</div>':'<svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>';r.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${o}${d}
    </div>
    ${m}
    ${c}
  `,e.appendChild(r)}let Z=null;function dt(){return Z||(Z=document.createElement("div"),Z.className="chart-tooltip",document.body.appendChild(Z)),Z}function ut(e,t){return t==="temp"||t==="temperature"?["#6eb4d4","#e07050"]:t==="tseche"||t==="thumide"?["#6eb4d4","#e07050"]:t==="temp_rosee"?["#a0d0f0","#4090c0"]:[mt(e,.55),e]}function mt(e,t){const n=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),s=Math.round(n+(255-n)*t),l=Math.round(i+(255-i)*t),r=Math.round(a+(255-a)*t);return`#${s.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`}function We(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let n=0;n<e.length-1;n++){const i=e[Math.max(n-1,0)],a=e[n],s=e[n+1],l=e[Math.min(n+2,e.length-1)],r=a.x+(s.x-i.x)/6,c=a.y+(s.y-i.y)/6,o=s.x-(l.x-a.x)/6,d=s.y-(l.y-a.y)/6;t+=` C${r.toFixed(1)},${c.toFixed(1)} ${o.toFixed(1)},${d.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return t}function Le(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Ae(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function pt(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function He(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function we(e,t,n,i=.15){const a=Ae(n),s=He(a),l=pt(a),r=()=>1+(Math.random()-.5)*2*i;switch(e){case"temp":return(t-6+s*12)*r();case"tseche":case"thumide":return(t-4+s*8)*r();case"temp_rosee":{const c=t-6+s*12;return Math.min(c-1,t-8+s*6)*r()}case"tsol":{const c=Ae(n+120);return(t-3+He(c)*6)*r()}case"humidite":return Math.min(100,Math.max(20,(t+(1-s)*25-s*15)*r()));case"rayonnement":return Math.max(0,l*t*1.3*r());case"etp":return Math.max(0,l*t*1.5*r());case"humec":return Math.max(0,t*Math.max(0,.8-l*1.2)*r());case"pluie":return Math.random()<.12?t*Math.random()*2:0;case"vent":case"rafales":return Math.max(0,t*(.6+l*.8)*r());default:return Math.max(0,t*r())}}function ht(){const e=Qe(),t=ne();P.filter(i=>y.linkedSensorIds.includes(i.id)).filter(i=>_.includes(i.model)),document.querySelectorAll(".chart-card").forEach(i=>{if(i.classList.contains("tensio-multi-card")){const u=i.querySelector(".tensio-svg"),p=JSON.parse(i.dataset.tensioCurves||"[]");u&&p.length>0&&vt(u,p,e,t);return}const a=i.querySelector(".chart-svg");if(!a)return;const s=parseFloat(i.dataset.base),l=i.dataset.color,r=i.dataset.cumul==="1",c=i.dataset.chartType||"line",o=i.dataset.metricId||"",d=i.dataset.metricName||"",m=i.dataset.metricUnit||"";i.dataset.isIrrigation?gt(a,l,e,t):ft(a,s,l,e,t,r,c,o,d,m)})}function vt(e,t,n,i){const l={t:14,r:10,b:28,l:46},r=600-l.l-l.r,c=180-l.t-l.b,o=t.map(w=>{const $=20+w.depth*.8+Math.random()*20;return Array.from({length:n},(T,k)=>{const O=(n-1-k)*i;return Math.max(0,we("pothydr",$,O))})}),d=o.flat(),m=Math.min(...d),u=Math.max(...d),p=u-m||1,v=w=>l.l+w/Math.max(n-1,1)*r,f=w=>l.t+c-(w-m)/p*c,b=`tc-${Math.random().toString(36).slice(2)}`;let g=`<defs><clipPath id="${b}"><rect x="${l.l}" y="${l.t}" width="${r}" height="${c}"/></clipPath></defs>`;for(let w=0;w<=4;w++){const $=l.t+w/4*c,T=u-w/4*p;g+=`<line x1="${l.l}" y1="${$.toFixed(1)}" x2="${600-l.r}" y2="${$.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,g+=`<text x="${l.l-5}" y="${($+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${T.toFixed(0)}</text>`}o.forEach((w,$)=>{const T=w.map((O,z)=>({x:v(z),y:f(O)})),k=We(T);g+=`<path d="${k}" fill="none" stroke="${t[$].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${b})"/>`});const x=Math.max(1,Math.floor(n/6));for(let w=0;w<n;w+=x){const $=(n-1-w)*i;g+=`<text x="${v(w).toFixed(1)}" y="${174 .toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Le($)}</text>`}e.innerHTML=g}function ft(e,t,n,i,a,s,l="line",r="",c="",o=""){const u={t:14,r:10,b:28,l:46},p=600-u.l-u.r,v=180-u.t-u.b,f=Math.max(1,Math.round(a/15)),b=Array.from({length:i},(E,A)=>{const F=(i-1-A)*a;if(s){let M=0;for(let C=0;C<f;C++)M+=we(r,t/f,F+C*(a/f));return M}else return we(r,t,F)}),g=l==="bar"?0:Math.min(...b),x=Math.max(...b),w=x-g||1,$=E=>u.l+E/Math.max(i-1,1)*p,T=E=>u.t+v-(E-g)/w*v,k=`grad_${Math.random().toString(36).slice(2)}`,[O,z]=ut(n,r);let S=`<defs>
    <linearGradient id="${k}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${O}"/>
      <stop offset="100%" stop-color="${z}"/>
    </linearGradient>
    <clipPath id="clip_${k}">
      <rect x="${u.l}" y="${u.t}" width="${p}" height="${v}"/>
    </clipPath>
  </defs>`;for(let E=0;E<=4;E++){const A=u.t+E/4*v,F=x-E/4*w,M=Math.abs(F)>=100?F.toFixed(0):Math.abs(F)>=10?F.toFixed(1):F.toFixed(2);S+=`<line x1="${u.l}" y1="${A.toFixed(1)}" x2="${600-u.r}" y2="${A.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,S+=`<text x="${u.l-5}" y="${(A+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${M}</text>`}const D=Math.max(1,Math.floor(i/6));for(let E=0;E<i;E+=D){const A=$(E).toFixed(1),F=(i-E)*a;S+=`<line x1="${A}" y1="${u.t}" x2="${A}" y2="${u.t+v}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,S+=`<text x="${A}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Le(F)}</text>`}if(l==="bar"){const E=Math.max(2,p/i*.65);b.forEach((A,F)=>{if(A<=0)return;const M=$(F),C=T(A),X=u.t+v-C;S+=`<rect x="${(M-E/2).toFixed(1)}" y="${C.toFixed(1)}" width="${E.toFixed(1)}" height="${X.toFixed(1)}" fill="url(#${k})" opacity="0.9" rx="1"/>`})}else{const E=b.map((M,C)=>({x:$(C),y:T(M)})),A=We(E),F=A+` L${$(i-1).toFixed(1)},${u.t+v} L${u.l.toFixed(1)},${u.t+v} Z`;S+=`<path d="${F}" fill="${z}" opacity="0.07" clip-path="url(#clip_${k})"/>`,S+=`<path d="${A}" fill="none" stroke="url(#${k})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${k})"/>`}S+=`<rect class="chart-hover-rect" x="${u.l}" y="${u.t}" width="${p}" height="${v}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=S,bt(e,b,$,T,g,x,i,a,c,o,n,u,600)}function bt(e,t,n,i,a,s,l,r,c,o,d,m,u,p){const v=dt(),f=e.querySelector(".chart-hover-rect");if(!f)return;const g=document.createElementNS("http://www.w3.org/2000/svg","circle");g.setAttribute("r","4"),g.setAttribute("fill",d),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width","1.5"),g.style.display="none",g.style.pointerEvents="none",e.appendChild(g),f.addEventListener("mousemove",x=>{const w=e.getBoundingClientRect(),$=u/w.width,T=(x.clientX-w.left)*$,k=u-m.l-m.r,O=Math.max(0,Math.min(1,(T-m.l)/k)),z=Math.round(O*(l-1));if(z<0||z>=t.length)return;const S=t[z],D=n(z),E=i(S);g.setAttribute("cx",D),g.setAttribute("cy",E),g.style.display="";const A=(l-z)*r,F=Le(A),M=Math.abs(S)>=100?S.toFixed(1):S.toFixed(2);v.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${c}</div>
      <div class="chart-tooltip-val" style="color:${d}">${M} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${o}</span></div>
      <div class="chart-tooltip-ts">${F}</div>
    `,v.style.display="block";const C=x.clientX+12,X=x.clientY-10;v.style.left=`${Math.min(C,window.innerWidth-160)}px`,v.style.top=`${X}px`}),f.addEventListener("mouseleave",()=>{v.style.display="none",g.style.display="none"})}function gt(e,t,n,i){const l={t:12,r:8,b:28,l:44},r=600-l.l-l.r,c=180-l.t-l.b,o=Date.now(),d=n*i*6e4,m=Array(n).fill(0);(y.irrigationEvents||[]).forEach(g=>{const x=new Date(g.isoDate).getTime(),w=o-x;if(w<0||w>d)return;const $=Math.floor((d-w)/(i*6e4));$>=0&&$<n&&(m[$]+=g.mm||0)});const u=Math.max(...m,1),p=g=>l.l+g/Math.max(n-1,1)*r,v=g=>l.t+c-g/u*c;let f="";for(let g=0;g<=4;g++){const x=l.t+g/4*c,w=(u-g/4*u).toFixed(1);f+=`<line x1="${l.l}" y1="${x}" x2="${600-l.r}" y2="${x}" stroke="var(--bdr2)" stroke-width="1"/>`,f+=`<text x="${l.l-4}" y="${x+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${w}</text>`}const b=Math.max(4,r/n*.65);m.forEach((g,x)=>{if(g<=0)return;const w=p(x),$=v(g),T=l.t+c-$;f+=`<rect x="${(w-b/2).toFixed(1)}" y="${$.toFixed(1)}" width="${b.toFixed(1)}" height="${T.toFixed(1)}" fill="${t}" opacity="0.85" rx="1"/>`}),e.innerHTML=f}function yt(e){const n={pluie:()=>h(20,120),etp:()=>j(15,80),rayonnement:()=>h(500,3e3)}[e.id];return n?n():h(10,100)}function wt(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),n=document.getElementById("time-step"),i=new Date,a=new Date(i-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=i.toISOString().slice(0,10),e.addEventListener("click",s=>{const l=s.target.closest(".period-preset-btn");if(l)if(e.querySelectorAll(".period-preset-btn").forEach(r=>r.classList.remove("active")),l.classList.add("active"),J=l.dataset.period,J==="custom")t.style.display="flex";else{t.style.display="none";const r=document.getElementById("time-step");r&&(r.value=Ze(J)),V()}}),document.getElementById("date-from").addEventListener("change",Fe),document.getElementById("date-to").addEventListener("change",Fe),n.addEventListener("change",V)}function Fe(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(Y=new Date(e),K=new Date(t+"T23:59:59"),Y<K&&V())}function xt(){de()}function de(){var t,n,i,a;const e=document.getElementById("compare-control");if(e)if(q){const s=((t=U.find(l=>l.id===q))==null?void 0:t.name)||"Parcelle";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${s} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(n=e.querySelector(".compare-clear-icon"))==null||n.addEventListener("click",l=>{l.stopPropagation(),q=null,de(),V()}),(i=e.querySelector("#compare-open-btn"))==null||i.addEventListener("click",Re)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",Re)}function Re(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),n=U.filter(s=>s.id!==R),i=document.createElement("div");i.id="compare-dropdown",i.className="compare-dropdown",i.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher une parcelle…">
    <div class="compare-dropdown-list">
      ${n.map(s=>`<div class="compare-dropdown-item${s.id===q?" active":""}" data-id="${s.id}"><i class="bi bi-map"></i> ${s.name}</div>`).join("")}
    </div>
  `,t.appendChild(i);const a=i.querySelector(".compare-search-input");a.focus(),a.addEventListener("input",s=>{const l=s.target.value.toLowerCase();i.querySelectorAll(".compare-dropdown-item").forEach(r=>{r.style.display=r.textContent.toLowerCase().includes(l)?"":"none"})}),i.querySelectorAll(".compare-dropdown-item").forEach(s=>{s.addEventListener("click",()=>{q=parseInt(s.dataset.id),i.remove(),de(),V()})}),setTimeout(()=>{document.addEventListener("click",function s(l){!i.contains(l.target)&&!t.contains(l.target)&&(i.remove(),document.removeEventListener("click",s))})},0)}function $t(){const e=Me.find(t=>t.id===I.orgId);Mt(e),Et(e),xe(),$e(),ce(),ke(),jt()}const pe=["Argilo-limoneux","Argileux","Limoneux","Sablo-limoneux","Sableux","Limon argileux","Limon fin","Argile sableux","Limono-argileux fin","Sable limoneux","Argile limoneuse"],he=["Goutte à goutte","Aspersion","Submersion","Enrouleur","Pivot","Rampe","Micro aspersion","Couverture intégrale","Goutte à goutte enterré","Gravitaire","Non irrigué","Pas d'irrigation"],De=["Abricotier","Ail","Amandier","Artichaut","Asperge","Aubergine","Avoine","Basilic","Betterave fourragère","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Chou pommé","Ciboulette","Citrouille","Clémentinier","Courgette","Echalote","Endive","Epinard","Fève","Figuier","Fraisier","Framboisier","Gesse","Giroflier","Haricot vert","Houblon","Kiwi","Lavande","Lentille","Luzerne","Maïs doux","Maïs grain","Maïs semence","Maïs silage","Melon","Menthe","Moutarde","Navet","Nectarinier","Noisetier","Noyer","Oignon","Olivier","Orge de brasserie","Orge de printemps","Orge d'hiver","Pêcher","Persil","Pissenlit","Poireau","Pois chiche","Pois de conserve","Pois fourrager","Pois protéagineux","Poivron","Pomme de terre","Pommier","Poirier","Prunier","Pruneau d'Agen","Radis","Raisin de cuve","Raisin de table","Riz","Romarin","Sarrasin","Seigle","Soja","Sorgho","Tabac","Thym","Tomate","Tournesol","Triticale","Vigne","Cardon","Céleri","Cerise","Châtaignier","Colza","Courge","Fénugrec","Groseillier","Lin fibre","Lin oléagineux","Mâche","Millet","Myrtille","Noix de cajou","Paprika","Patate douce","Pistachier","Poisson-Chat","Quinoa","Safran","Sainfoin","Scorsonère","Shallot","Topinambour","Trèfle","Vesce","Fétuque","Ray-grass","Prairie temporaire","Prairie permanente","Jachère","Autre"];function Mt(e){const t=document.getElementById("panel-ident"),n=y,i=n.texture||pe[n.id%pe.length],a=n.irrigation||he[n.id%he.length],s=n.crop||De[0];t.innerHTML=`
    ${St("Nom",n.name||"—","name","text")}
    ${ve("Culture",s,"crop",De)}
    ${ze("Surface",(n.area?`${n.area} ha`:"—")+' <span class="field-computed">(calculé)</span>')}
    ${ve("Texture sol",i,"texture",pe)}
    ${ve("Irrigation",a,"irrigation",he)}
    ${ze("Exploitation",e?e.name:"—")}
  `,ie(t,"name",n.name||"",l=>{W({name:l}),qe(l,{label:"Parcelles",href:"parcelles.html"})}),ie(t,"crop",s,l=>W({crop:l})),ie(t,"texture",i,l=>W({texture:l})),ie(t,"irrigation",a,l=>W({irrigation:l}))}function St(e,t,n,i="text"){const a=(t||"").replace(/"/g,"&quot;");return`
    <div class="panel-row" data-field="${n}">
      <span class="panel-row-key">${e}</span>
      <input type="${i}" class="panel-field-input" data-val value="${a}">
    </div>`}function ve(e,t,n,i){return`
    <div class="panel-row" data-field="${n}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${i.map(a=>`<option${a===t?" selected":""}>${a}</option>`).join("")}
      </select>
    </div>`}function ze(e,t){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${t}</span>
    </div>`}function ie(e,t,n,i){const a=e.querySelector(`[data-field="${t}"] [data-val]`);if(!a)return;const s=()=>{var r;const l=(r=a.value)==null?void 0:r.trim();l&&l!==n&&(n=l,i(l))};a.addEventListener("change",s),a.tagName==="INPUT"&&a.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),a.blur())})}function Et(e){const t=document.getElementById("panel-geoloc"),n=y.latlngs||I.latlngs,i=Array.isArray(n)&&n.length>=3,a=y.ville||I.ville||(e==null?void 0:e.ville)||"—",s=I.departement||(e==null?void 0:e.departement),l=y.lat??I.lat??(e==null?void 0:e.lat),r=y.lng??I.lng??(e==null?void 0:e.lng);t.innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${s?` (${s})`:""}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${l!=null?l.toFixed(4):"—"}, ${r!=null?r.toFixed(4):"—"}</span>
    </div>
    ${l!=null?`<div class="panel-row">
      <a href="https://www.google.com/maps?q=${l.toFixed(6)},${r.toFixed(6)}" target="_blank" class="itinerary-link">
        <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
      </a>
    </div>`:""}
    <div style="padding:4px 0 4px">
      <a href="parcelle-modifier-contour.html?id=${R}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${i?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function Ct(){const e=new Set;return P.filter(n=>y.linkedSensorIds.includes(n.id)).forEach(n=>{const i=H[n.model]||[];_.includes(n.model)||i.forEach(a=>e.add(a.id))}),e}function Oe(e){const t=H[e]||[];return t.length?`<div class="sensor-metric-badges">${t.map(n=>`<span class="sensor-metric-badge" style="--mc:${n.color}">${n.name}</span>`).join("")}</div>`:""}function xe(){const e=document.getElementById("panel-sensors"),t=P.filter(d=>y.linkedSensorIds.includes(d.id)),n=P.filter(d=>d.orgId===I.orgId&&!y.linkedSensorIds.includes(d.id));let i="";if(t.length===0)i+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>';else{const d=t.filter(u=>_.includes(u.model)),m=t.filter(u=>!_.includes(u.model));if(i+=m.map(u=>`
      <div class="sensor-linked-row">
        <div class="sensor-linked-info">
          <span class="sensor-linked-name">${ee[u.model]||u.model}</span>
          <span class="sensor-linked-detail">${u.model} · ${u.serial}</span>
          ${Oe(u.model)}
        </div>
        <button class="remove-sensor-btn icon-btn" data-id="${u.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),d.length>0){const u={};d.forEach(p=>{const v=p.depth!=null?`${p.depth} cm`:p.model;u[v]||(u[v]=[]),u[v].push(p)}),i+=`<div class="sensor-kit-hd">
        <span class="sensor-kit-hd-label">Kit de tensiomètres</span>
        ${Oe("CHP-15/30")}
      </div>`,Object.entries(u).forEach(([p,v])=>{i+=`<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${p}</div>`,i+=v.map(f=>`
          <div class="sensor-linked-row" style="padding-left:12px">
            <div class="sensor-linked-info">
              <span class="sensor-linked-name">${ee[f.model]||f.model}</span>
              <span class="sensor-linked-detail">${f.model} · ${f.serial}</span>
            </div>
            <button class="remove-sensor-btn icon-btn" data-id="${f.id}" title="Retirer">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        `).join("")})}}e.innerHTML=i;const a=t.some(d=>d.model==="PYRANO"),s=[{name:"Évapotranspiration (ETP)",color:"#c090e0"},...a?[]:[{name:"Rayonnement solaire",color:"#f5c842"}],{name:"Température de rosée",color:"#80c8e8"}],l=document.getElementById("panel-parcel-metrics-ext");l&&(l.innerHTML=`
      <div class="panel-parcel-metrics">
        <div class="panel-parcel-metrics-title">Données spatialisées</div>
        <div class="sensor-metric-badges">
          ${s.map(d=>`<span class="sensor-metric-badge" style="--mc:${d.color}">${d.name}</span>`).join("")}
        </div>
      </div>`);const r=document.getElementById("sensor-add-row"),c=document.getElementById("add-sensor-select");r&&c&&(n.length>0?(c.innerHTML='<option value="">Ajouter un capteur…</option>'+n.map(d=>`<option value="${d.id}">${ee[d.model]||d.model} — ${d.serial}</option>`).join(""),r.style.display=""):r.style.display="none"),e.querySelectorAll(".remove-sensor-btn").forEach(d=>{d.addEventListener("click",()=>{const m=parseInt(d.dataset.id);W({linkedSensorIds:y.linkedSensorIds.filter(u=>u!==m)}),xe(),V()})});const o=document.getElementById("add-sensor-btn");o&&o.addEventListener("click",()=>{const d=document.getElementById("add-sensor-select"),m=parseInt(d.value);if(!m)return;const u=P.find(p=>p.id===m);if(u){if(!_.includes(u.model)){const p=Ct(),f=(H[u.model]||[]).map(b=>b.id).filter(b=>p.has(b));if(f.length>0){const b=f.map(x=>{const w=Object.values(H).flat().find($=>$.id===x);return(w==null?void 0:w.name)||x});if(!confirm(`Attention : ce capteur (${u.model}) mesure des métriques déjà fournies par un autre capteur :
• ${b.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}if(W({linkedSensorIds:[...y.linkedSensorIds,m]}),u.model==="T_GEL"){const p=te();p.includes("gel")||(p.push("gel"),ue(p))}xe(),V(),me()}})}function $e(){var l;const e=document.getElementById("panel-integrations"),t=y.integrations||[],n=Ke.filter(r=>!t.includes(r));let i="";t.length===0?i+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':i+=t.map(r=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${r}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(r)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),e.innerHTML=i;const a=document.getElementById("integ-add-row"),s=document.getElementById("add-integ-select");a&&s&&(n.length>0?(s.innerHTML='<option value="">Ajouter une intégration…</option>'+n.map(r=>`<option value="${encodeURIComponent(r)}">${r}</option>`).join(""),a.style.display=""):a.style.display="none"),e.querySelectorAll(".remove-integ-btn").forEach(r=>{r.addEventListener("click",()=>{const c=decodeURIComponent(r.dataset.name);W({integrations:y.integrations.filter(o=>o!==c)}),$e()})}),(l=document.getElementById("add-integ-btn"))==null||l.addEventListener("click",()=>{const r=document.getElementById("add-integ-select"),c=decodeURIComponent(r.value);c&&(W({integrations:[...y.integrations,c]}),$e())})}let B=null;function Tt(){if(B!==null)return;B=Se(R).linkedMemberIds??fe.filter(t=>{var n;return(n=t.parcelIds)==null?void 0:n.includes(R)}).map(t=>t.id)}function ce(){var r,c;Tt();const e=document.getElementById("panel-membres"),t=fe.filter(o=>B.includes(o.id)),n=((r=document.getElementById("sidebar"))==null?void 0:r.getAttribute("data-role"))==="adherent-reseau",i=e==null?void 0:e.closest(".panel-section");if(n&&t.length===0){i&&(i.style.display="none");return}i&&(i.style.display="");const a=(c=e.closest(".panel-section"))==null?void 0:c.querySelector(".panel-add-row");a&&(a.style.display=n?"none":"");const s=new Set(["propriétaire","admin","agent"]),l=o=>!n||!s.has(o.role);if(t.length?e.innerHTML=t.map(o=>`
      <div class="member-row">
        <div>
          <span class="member-name">${o.prenom} ${o.nom}</span>
          ${n?"":`<span class="member-role-badge">${o.role}</span>`}
        </div>
        ${l(o)?`<button class="remove-membre-btn icon-btn" data-id="${o.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
      </div>
    `).join(""):e.innerHTML='<p class="panel-empty">Aucun membre associé.</p>',!n){const o=document.getElementById("add-membre-select");o&&(o.innerHTML='<option value="">Ajouter un membre…</option>',fe.filter(d=>!B.includes(d.id)).forEach(d=>{const m=document.createElement("option");m.value=d.id,m.textContent=`${d.prenom} ${d.nom} (${d.role})`,o.appendChild(m)})),e.querySelectorAll(".remove-membre-btn").forEach(d=>{d.addEventListener("click",()=>{B=B.filter(m=>m!==parseInt(d.dataset.id)),be(R,{linkedMemberIds:B}),ce()})}),document.getElementById("add-membre-btn").onclick=()=>{const d=parseInt(document.getElementById("add-membre-select").value);!d||B.includes(d)||(B.push(d),be(R,{linkedMemberIds:B}),ce())}}}function ke(){const e=document.getElementById("panel-alertes"),t=y.alertes||[],n={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let i="";t.length===0?i+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':i+=t.map((a,s)=>`
      <div class="alert-item">
        <i class="bi ${n[a.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition||""} ${a.threshold||""} ${a.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${s}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),i+='<button id="create-alert-btn" class="action-btn" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=i,e.querySelectorAll(".remove-alert-btn").forEach(a=>{a.addEventListener("click",()=>{const s=parseInt(a.dataset.idx),l=[...y.alertes];l.splice(s,1),W({alertes:l}),ke()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{kt(e)})}function Lt(){const e=[];return P.filter(n=>y.linkedSensorIds.includes(n.id)).forEach(n=>{(H[n.model]||[]).forEach(a=>{e.find(s=>s.id===a.id)||e.push({id:a.id,name:a.name,unit:a.unit})})}),Ee.forEach(n=>{e.find(i=>i.id===n.id)||e.push({id:n.id,name:n.name,unit:n.unit})}),e}function kt(e){if(e.querySelector(".alert-create-form"))return;const n=Lt(),i=document.createElement("div");i.className="alert-create-form",i.innerHTML=`
    <div class="alert-form-row">
      <select id="alert-metric" class="panel-add-select">
        <option value="">Métrique…</option>
        ${n.map(a=>`<option value="${a.id}" data-unit="${a.unit}">${a.name}</option>`).join("")}
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
  `,e.appendChild(i),i.querySelector("#alert-metric").addEventListener("change",a=>{const s=a.target.selectedOptions[0];i.querySelector("#alert-unit-label").textContent=(s==null?void 0:s.dataset.unit)||"—"}),i.querySelector("#alert-save-btn").addEventListener("click",()=>{const s=i.querySelector("#alert-metric").value,l=n.find(d=>d.id===s),r=i.querySelector("#alert-condition").value,c=i.querySelector("#alert-threshold").value;if(!s||!c)return;const o={type:"seuil",label:`Alerte ${(l==null?void 0:l.name)||s}`,metric:(l==null?void 0:l.name)||s,condition:r,threshold:c,unit:(l==null?void 0:l.unit)||""};W({alertes:[...y.alertes||[],o]}),ke()}),i.querySelector("#alert-cancel-btn").addEventListener("click",()=>i.remove())}function It(e,t){const n=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),i=Object.assign(document.createElement("a"),{href:URL.createObjectURL(n),download:t});document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(i.href),100)}function Pt(){const e=y.name||I.name||"Parcelle",t=le(y.linkedSensorIds);let n;if(q){const u=U.find(b=>b.id===q),p=P.filter(b=>b.parcelId===q).map(b=>b.id),v=le(p),f=(u==null?void 0:u.name)||"Comparaison";n=[...t.map(b=>({h:`[${e}] ${b.name} (${b.unit})`,gen:b.base})),...v.map(b=>({h:`[${f}] ${b.name} (${b.unit})`,gen:b.base}))]}else n=t.map(u=>({h:`${u.name} (${u.unit})`,gen:u.base}));const i=Ce()*6e4,a=ne()*6e4,s=J==="custom"&&K?K:new Date,l=J==="custom"&&Y?Y:new Date(s-i),r=Math.min(Math.ceil((s-l)/a)+1,500),c=(s-l)/Math.max(r-1,1),o=["Horodatage",...n.map(u=>u.h)].join(";"),d=Array.from({length:r},(u,p)=>[new Date(l.getTime()+p*c).toISOString().replace("T"," ").slice(0,19),...n.map(f=>f.gen())].join(";")),m=e.replace(/[^\w]/g,"_");It([o,...d].join(`\r
`),`${m}_${J}_${new Date().toISOString().slice(0,10)}.csv`)}function jt(){document.getElementById("panel-actions").innerHTML=`
    <button class="action-btn action-btn--danger"><i class="bi bi-archive"></i> Archiver la parcelle</button>
  `}function At(){const e=Me.find(i=>i.id===I.orgId);if(!(e!=null&&e.lat))return;const t=y.latlngs||I.latlngs,n=L.map("parcel-mini-map",{zoomControl:!1,attributionControl:!1});if(L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(n),Array.isArray(t)&&t.length>=3){const i=L.polygon(t,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(n);n.fitBounds(i.getBounds(),{padding:[10,10]})}else n.setView([e.lat,e.lng],13),L.circleMarker([e.lat,e.lng],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(n)}function Ht(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),n=t.querySelector("i");t.addEventListener("click",()=>{const i=e.classList.toggle("panel-collapsed");t.title=i?"Afficher le panneau":"Masquer le panneau",n.className=i?"bi bi-chevron-left":"bi bi-chevron-right"})}function Ft(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(n=>n.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.pane).classList.add("active"),t.dataset.pane==="tab-journal"&&Te()})})}const Rt={"previsions-5j":{size:"2x2",title:"Prévisions 5 jours",icon:"bi-calendar3-week",color:"#5b8dd9",render:Ge,footer:{label:"Voir les prévisions",href:"previsions.html"}},weephyt:{size:"2x1",title:"Weephyt",icon:"bi-shield-check",color:"#2d9e5f",render:Ot,footer:{label:"Voir Weephyt",href:"#"}},cumuls:{size:"1x2",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#e07050",render:Je},bilan:{size:"3x2",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4",render:Jt,footer:{label:"Voir l'irrigation",href:"#"}},gel:{size:"2x2",title:"Suivi du risque de gel",icon:"bi-thermometer-snow",color:"#4ecdc4",render:qt,footer:{label:"Voir les prévisions",href:"previsions.html"}},dpv:{size:"1x2",title:"DPV",icon:"bi-droplet-half",color:"#e07050",render:Nt,footer:{label:"Voir les données",href:"#",tab:"donnees"}},thi:{size:"1x2",title:"THI",icon:"bi-heart-pulse",color:"#e0a030",render:Bt,footer:{label:"Voir les données",href:"#",tab:"donnees"}},"temp-rosee":{size:"2x1",title:"Température de rosée",icon:"bi-thermometer",color:"#45b7d1",render:Wt,footer:{label:"Voir les données",href:"#",tab:"donnees"}},"temp-sol":{size:"2x1",title:"Température du sol",icon:"bi-layers",color:"#bb8fce",render:_t,footer:{label:"Voir les données",href:"#",tab:"donnees"}},maizy:{size:"2x1",title:"Maï'zy",icon:"bi-calendar-check",color:"#2d9e5f",render:Vt,footer:{label:"Voir Maï'zy",href:"#"}},tavelure:{size:"2x1",title:"Tavelure Pomme",icon:"bi-exclamation-triangle",color:"#e07050",render:Gt},"suivi-culture":{size:"2x1",title:"Suivi de culture",icon:"bi-flower2",color:"#78d8a0",render:G},decitrait:{size:"2x1",title:"Decitrait",icon:"bi-shield",color:"#6080b0",render:G},"previsions-6h":{size:"2x1",title:"Prévisions à 6 heures",icon:"bi-clock",color:"#5b8dd9",render:G},"previsions-jour":{size:"2x1",title:"Prévisions du jour",icon:"bi-sun",color:"#f5c842",render:G},"previsions-tensio":{size:"2x1",title:"Prévisions tensiométrie",icon:"bi-graph-down",color:"#5b8dd9",render:G},"w-station":{size:"1x1",title:"Station météo",icon:"bi-broadcast",color:"#e07050",render:N("w-station")},"w-thygro":{size:"1x1",title:"Thermo-hygromètre",icon:"bi-thermometer-half",color:"#4ecdc4",render:N("w-thygro")},"w-tsol":{size:"1x1",title:"Thermomètre de sol",icon:"bi-layers",color:"#bb8fce",render:N("w-tsol")},"w-anem":{size:"1x1",title:"Anémomètre",icon:"bi-wind",color:"#7bc4b0",render:N("w-anem")},"w-pyrano":{size:"1x1",title:"Pyranomètre",icon:"bi-sun",color:"#f5c842",render:N("w-pyrano")},"w-lws":{size:"1x1",title:"Humectation foliaire",icon:"bi-droplet",color:"#78d8a0",render:N("w-lws")},"w-par":{size:"1x1",title:"Capteur PAR",icon:"bi-brightness-high",color:"#f0d060",render:N("w-par")},"w-capa":{size:"1x1",title:"Sonde capacitive",icon:"bi-moisture",color:"#f0cc60",render:N("w-capa")},"w-tensio":{size:"1x1",title:"Tensiomètre",icon:"bi-graph-down",color:"#5b8dd9",render:N("w-tensio")},"w-ec":{size:"1x1",title:"Sonde fertirrigation",icon:"bi-plug",color:"#f0a030",render:N("w-ec")},"profil-capteurs":{size:"2x2",title:"Profil capteurs",icon:"bi-bar-chart",color:"#5b8dd9",render:G},"niveau-reservoir":{size:"2x1",title:"Niveau de réservoir (RFU)",icon:"bi-droplet-fill",color:"#0172A4",render:G},"profil-reservoir":{size:"2x2",title:"Profil de réservoir",icon:"bi-clipboard-data",color:"#0172A4",render:G}},_e=()=>`dash-widgets-parcel-${R}`;function te(){try{const e=JSON.parse(localStorage.getItem(_e()));if(Array.isArray(e)&&e.length)return e}catch{}return Dt()}function ue(e){localStorage.setItem(_e(),JSON.stringify(e))}function Dt(){const e=P.filter(l=>y.linkedSensorIds.includes(l.id)),t=new Set(e.map(l=>l.model)),n=[...t].some(l=>l.startsWith("CAPA-")),i=[...t].some(l=>_.includes(l)),a=e.some(l=>(H[l.model]||[]).some(r=>r.cumul)),s=["previsions-5j","weephyt"];return a&&s.push("cumuls"),(t.has("P+")||t.has("PT")||t.has("SMV")||t.has("P"))&&s.push("w-station"),t.has("TH")&&s.push("w-thygro"),t.has("T_MINI")&&s.push("w-tsol"),t.has("W")&&s.push("w-anem"),t.has("PYRANO")&&s.push("w-pyrano"),t.has("LWS")&&s.push("w-lws"),t.has("T_GEL")&&s.push("gel"),t.has("PAR")&&s.push("w-par"),n&&s.push("w-capa"),i&&s.push("w-tensio"),t.has("EC")&&s.push("w-ec"),(i||n)&&s.push("bilan"),s}function me(){const e=document.getElementById("dash-grid");if(!e)return;const t=te();e.innerHTML="",t.forEach(n=>{const i=Rt[n];if(!i)return;const a=document.createElement("div");a.className=`dash-block dash-block--${i.size}`,a.dataset.id=n,a.draggable=!0,a.innerHTML=`
      <div class="dash-block-hd" style="color:${i.color}">
        <span style="display:flex;align-items:center;gap:6px"><i class="bi ${i.icon}"></i> ${i.title}</span>
        <button class="dash-menu-btn" data-wid="${n}" title="Options" aria-label="Options">···</button>
      </div>
      <div class="dash-block-body" id="dblock-${n}"></div>`,e.appendChild(a),i.render(a.querySelector(`#dblock-${n}`))}),e.querySelectorAll(".dash-menu-btn").forEach(n=>{n.addEventListener("click",i=>{var r;i.stopPropagation(),(r=document.querySelector(".dash-dropdown"))==null||r.remove();const a=document.createElement("div");a.className="dash-dropdown",a.innerHTML=`
        <button class="dash-dd-item" data-action="settings" data-wid="${n.dataset.wid}">Paramétrer le widget</button>
        <button class="dash-dd-item dash-dd-remove" data-action="remove" data-wid="${n.dataset.wid}">Retirer le widget</button>`;const s=n.getBoundingClientRect(),l=e.getBoundingClientRect();a.style.top=`${s.bottom-l.top+4}px`,a.style.right=`${l.right-s.right}px`,e.style.position="relative",e.appendChild(a),a.querySelector('[data-action="remove"]').addEventListener("click",()=>{a.remove();const c=te().filter(o=>o!==n.dataset.wid);ue(c),me()}),a.querySelector('[data-action="settings"]').addEventListener("click",()=>a.remove()),setTimeout(()=>document.addEventListener("click",()=>a.remove(),{once:!0}),0)})}),Ut(e)}function Ve(e,t=380,n=90){const r=t-28-8,c=n-6-20,o=e.flatMap(x=>x.values);let d=Math.min(...o),m=Math.max(...o);d===m&&(d-=1,m+=1);const u=e[0].values.length,p=x=>(28+x/(u-1)*r).toFixed(1),v=x=>(6+c-(x-d)/(m-d)*c).toFixed(1),f=[.25,.5,.75].map(x=>{const w=(6+x*c).toFixed(1);return`<line x1="28" y1="${w}" x2="${t-8}" y2="${w}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),b=[d,(d+m)/2,m].map(x=>`<text x="25" y="${(+v(x)+3.5).toFixed(0)}" text-anchor="end" font-size="9" fill="var(--txt3)">${x.toFixed(0)}</text>`).join(""),g=e.map(x=>`<path d="${x.values.map(($,T)=>`${T?"L":"M"}${p(T)},${v($)}`).join("")}" fill="none" stroke="${x.color}" stroke-width="1.8" stroke-linejoin="round"/>`).join("");return`<svg width="100%" height="${n}" viewBox="0 0 ${t} ${n}" preserveAspectRatio="none">${b}${f}${g}</svg>`}function zt(e,t,n,i){const d=(b,g)=>{const x=Math.PI+b*Math.PI,w=Math.PI+g*Math.PI,$=(80+60*Math.cos(x)).toFixed(1),T=(90+60*Math.sin(x)).toFixed(1),k=(80+60*Math.cos(w)).toFixed(1),O=(90+60*Math.sin(w)).toFixed(1);return`M${$},${T} A60,60,0,${g-b>.5?1:0},1,${k},${O}`},m=d(0,1),u=t.filter(b=>b.from<e).map(b=>`<path d="${d(b.from,Math.min(b.to,e))}" fill="none" stroke="${b.color}" stroke-width="12" stroke-linecap="butt"/>`).join(""),p=Math.PI+e*Math.PI,v=(80+60*Math.cos(p)).toFixed(1),f=(90+60*Math.sin(p)).toFixed(1);return`<svg width="160" height="100" viewBox="0 0 160 100">
    <path d="${m}" fill="none" stroke="var(--bdr2)" stroke-width="12" stroke-linecap="butt"/>
    ${u}
    <circle cx="${v}" cy="${f}" r="5" fill="white" stroke="var(--txt3)" stroke-width="1.5"/>
    <text x="80" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="var(--txt)">${i}</text>
    <text x="80" y="96" text-anchor="middle" font-size="9" fill="var(--txt3)">${n}</text>
  </svg>`}let se="AROME";function Ge(e){const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],n=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],a=["#f5c842","#8baac8","#8090a0","#45b7d1","#c070d0"],s=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],l=new Date,r=U.find(m=>m.id===R),c=Me.find(m=>m.id===(r==null?void 0:r.orgId)),o=(r==null?void 0:r.ville)||(c==null?void 0:c.ville)||"—",d=Array.from({length:5},(m,u)=>{const p=new Date(l);p.setDate(p.getDate()+u);const v=Math.floor((R*7+u*3)%11/2.2),f=se==="ICON_EU"?-1:0;return{lbl:u===0?"Auj.":t[p.getDay()],date:`${p.getDate()} ${n[p.getMonth()]}`,tmax:h(17+f,34+f),tmin:h(4+f,15+f),pluie:v>=3?h(2,18):0,vent:h(10,35),rafales:h(25,70),wi:v}});e.innerHTML=`
    <div class="w-prev5-loc"><i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i> ${o}</div>
    <div class="w-prev5-models">
      <button class="w-prev5-model-btn${se==="AROME"?" active":""}" data-model="AROME">AROME</button>
      <button class="w-prev5-model-btn${se==="ICON_EU"?" active":""}" data-model="ICON_EU">ICON EU</button>
    </div>
    <div class="w-prev5-grid">${d.map(m=>`
      <div class="w-prev5-day">
        <div class="w-prev5-daylbl">${m.lbl}</div>
        <div class="w-prev5-date">${m.date}</div>
        <i class="bi ${i[m.wi]} w-prev5-icon" style="color:${a[m.wi]}" title="${s[m.wi]}"></i>
        <div class="w-prev5-row"><i class="bi bi-droplet-fill" style="color:#45b7d1;font-size:9px"></i><span>${m.pluie>0?m.pluie+" mm":"—"}</span></div>
        <div class="w-prev5-row w-prev5-tmax"><i class="bi bi-thermometer-high" style="font-size:9px"></i>${m.tmax}°</div>
        <div class="w-prev5-row w-prev5-tmin"><i class="bi bi-thermometer-low" style="font-size:9px"></i>${m.tmin}°</div>
        <div class="w-prev5-row" style="color:var(--txt3)"><i class="bi bi-wind" style="font-size:9px"></i>${m.vent}</div>
        <div class="w-prev5-row" style="color:var(--txt3);font-size:9px"><i class="bi bi-arrow-up-right" style="font-size:9px"></i>${m.rafales}</div>
      </div>`).join("")}</div>
    <a href="javascript:void 0" class="w-prev5-more">Voir plus de prévisions →</a>`,e.querySelectorAll(".w-prev5-model-btn").forEach(m=>{m.addEventListener("click",()=>{se=m.dataset.model,Ge(e)})})}function Ot(e){const t=new Date,n=y.crop||I.crop||"",i=[{label:"Herbicides de contact",seed:7},{label:"Fongicides",seed:3},{label:"Herbicides racinaires",seed:11},{label:"Herbicides systémiques",seed:5}],a=Array.from({length:12},(r,c)=>{const o=new Date(t);return o.setHours(o.getHours()+c),o}),s=r=>`${String(r.getHours()).padStart(2,"0")}h`,l=r=>{const c=a.map((o,d)=>(r.seed*17+d*5)%11<6);return a.map((o,d)=>`
      <div class="w-weephyt-dot-wrap" title="${s(o)} — ${c[d]?"Fenêtre OK":"Fenêtre non OK"}">
        <div class="w-weephyt-tl-dot" style="background:${c[d]?"#2d9e5f":"#e07050"}"></div>
        <div class="w-weephyt-tl-lbl">${d%3===0?s(o):""}</div>
      </div>`).join("")};e.innerHTML=`<div class="w-weephyt-wrap">
    <div class="w-weephyt-tl-legend"><span style="color:#2d9e5f">● OK</span><span style="color:#e07050">● Non OK</span></div>
    ${i.map(r=>`
      <div class="w-weephyt-family">
        <div class="w-weephyt-family-label">${r.label}</div>
        <div class="w-weephyt-timeline">${l(r)}</div>
      </div>`).join("")}
    <div class="w-weephyt-src">Via <strong>Weephyt</strong> · ${n||"—"}</div>
  </div>`}function Je(e){const t=P.filter(r=>y.linkedSensorIds.includes(r.id)),n=new Set(t.flatMap(r=>(H[r.model]||[]).map(c=>c.id))),i=new Date(new Date().getFullYear(),0,1).toISOString().slice(0,10),a=`w-cumuls-hidden-parcel-${R}`;let s;try{s=new Set(JSON.parse(localStorage.getItem(a))||[])}catch{s=new Set}const l=[{id:"etp",label:"ETP",value:j(20,80).toFixed(1),unit:"mm",color:"#c090e0",icon:"bi-sun",show:!0},{id:"pluie",label:"Pluie",value:h(10,50),unit:"mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy",show:n.has("pluie")},{id:"djc",label:"DJC",value:h(40,180),unit:"°j",color:"#e07050",icon:"bi-thermometer-half",show:n.has("temp")},{id:"hfroid",label:"Heures froides",value:h(5,40),unit:"h",color:"#5b8dd9",icon:"bi-snow",show:n.has("temp")},{id:"humec",label:"Humectation",value:j(2,20).toFixed(1),unit:"h",color:"#78d8a0",icon:"bi-droplet",show:n.has("humec")},{id:"enso",label:"Ensoleillement",value:j(3,9).toFixed(1),unit:"h/j",color:"#f5c842",icon:"bi-brightness-high",show:n.has("rayonnement")}].filter(r=>r.show&&!s.has(r.id));e.innerHTML=`
    <div class="w-cumuls-date-row"><span class="w-cumuls-date-lbl">Depuis le</span><span class="w-cumuls-date-val">${i.split("-").reverse().join("/")}</span></div>
    <div class="w-cumuls-list">${l.map(r=>`
      <div class="w-cumul-item" data-cid="${r.id}">
        <i class="bi ${r.icon} w-cumul-icon" style="color:${r.color}"></i>
        <div class="w-cumul-body">
          <div class="w-cumul-lbl">${r.label}</div>
          <div class="w-cumul-val" style="color:${r.color}">${r.value}<span class="w-cumul-unit"> ${r.unit}</span></div>
        </div>
        <button class="w-cumul-del" data-cid="${r.id}" title="Retirer">×</button>
      </div>`).join("")}
    </div>`,e.querySelectorAll(".w-cumul-del").forEach(r=>{r.addEventListener("click",c=>{c.stopPropagation(),s.add(r.dataset.cid),localStorage.setItem(a,JSON.stringify([...s])),Je(e)})})}function qt(e){if(!P.filter(m=>y.linkedSensorIds.includes(m.id)).some(m=>m.model==="T_GEL")){e.innerHTML='<div class="dash-empty">Capteur T_GEL non lié</div>';return}const n=25,i=j(0,5),a=Array.from({length:n},(m,u)=>+(i+u*.18+j(-.8,.8)).toFixed(1)),s=a.map(m=>+(m-j(1,2.5)).toFixed(1)),l=Ve([{values:a,color:"#e07050"},{values:s,color:"#4ecdc4"}],380,100),r=a[n-1],c=s[n-1],o=h(5,8),d=String(Math.floor(Math.random()*60)).padStart(2,"0");e.innerHTML=`<div class="w-gel-wrap">
    <div class="w-gel-legend">
      <span style="color:#e07050"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sèche</span>
      <span style="color:#4ecdc4"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. humide</span>
      <span style="font-size:10px;color:var(--txt3)">12 dernières heures</span>
    </div>
    <div class="w-gel-chart">${l}</div>
    <div class="w-gel-cards">
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. sèche </span><span class="w-gel-card-val" style="color:#e07050">${r}°C</span></div>
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. humide </span><span class="w-gel-card-val" style="color:#4ecdc4">${c}°C</span></div>
    </div>
    <div class="w-gel-meteo">
      <div class="w-gel-meteo-row"><i class="bi bi-sunrise" style="color:#f5c842"></i><span>Lever du soleil</span><strong>${o}h${d}</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-cloud" style="color:#8090a0"></i><span>Couverture nuageuse</span><strong>${h(20,80)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-droplet-half" style="color:#4ecdc4"></i><span>Humidité</span><strong>${h(60,90)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-wind" style="color:#7bc4b0"></i><span>Vent moyen</span><strong>${h(5,25)} km/h</strong></div>
    </div>
  </div>`}function Nt(e){const t=P.filter(u=>y.linkedSensorIds.includes(u.id));if(!t.some(u=>{const p=H[u.model]||[];return p.some(v=>v.id==="temp")&&p.some(v=>v.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const i=j(18,30),a=h(40,85),l=+(.611*Math.exp(17.27*i/(i+237.3))*(1-a/100)).toFixed(2),r=Math.min(l/2,1),c=l<.4?"#5b8dd9":l<.8?"#2d9e5f":l<1.2?"#f5a030":"#e07050",o=l<.4?"Transpiration faible":l<.8?"Transpiration optimale":l<1.2?"Forte transpiration":"Stress hydrique",d=[{from:0,to:.2,color:"#5b8dd9"},{from:.2,to:.4,color:"#45b7d1"},{from:.4,to:.6,color:"#2d9e5f"},{from:.6,to:.8,color:"#a0c840"},{from:.8,to:.9,color:"#f5a030"},{from:.9,to:1,color:"#e07050"}],m=t.find(u=>{const p=H[u.model]||[];return p.some(v=>v.id==="temp")&&p.some(v=>v.id==="humidite")});e.innerHTML=`<div class="w-dpv-wrap">
    <div class="w-dpv-gauge" style="color:${c}">${zt(r,d,o,l+" kPa")}</div>
    <div class="w-dpv-details">
      <div class="w-dpv-row"><i class="bi bi-thermometer-half" style="color:#e07050"></i> ${i.toFixed(1)} °C</div>
      <div class="w-dpv-row"><i class="bi bi-droplet-half" style="color:#4ecdc4"></i> ${a} %</div>
    </div>
    ${m?`<div class="w-sensor-src">${ee[m.model]||m.model} · ${m.serial}</div>`:""}
  </div>`}function Bt(e){if(!P.filter(u=>y.linkedSensorIds.includes(u.id)).some(u=>{const p=H[u.model]||[];return p.some(v=>v.id==="temp")&&p.some(v=>v.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const i=j(20,35),a=h(45,90),s=+(i-.55*(1-a/100)*(i-14.5)).toFixed(0),l=s<68?"#2d9e5f":s<72?"#f5c842":s<79?"#f5a030":"#e07050",r=s<68?"Confort":s<72?"Stress léger":s<79?"Stress modéré":"Stress sévère",c=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],o=new Date,d=Array.from({length:3},(u,p)=>{const v=new Date(o);return v.setDate(v.getDate()+p+1),{day:c[v.getDay()],m:h(64,72),j:h(68,80),s:h(62,70)}}),m=u=>u<68?"#2d9e5f":u<72?"#f5c842":"#f5a030";e.innerHTML=`<div class="w-thi-wrap">
    <div class="w-thi-header">
      <div class="w-thi-score" style="color:${l}">
        <div class="w-thi-val">${s}</div>
        <div class="w-thi-status">${r}</div>
      </div>
      <button class="w-thi-info-btn" title="Légende THI"><i class="bi bi-info-circle"></i></button>
    </div>
    <div class="w-thi-details">
      <div class="w-thi-row"><i class="bi bi-thermometer-half" style="color:#e07050"></i> ${i.toFixed(1)} °C</div>
      <div class="w-thi-row"><i class="bi bi-droplet-half" style="color:#4ecdc4"></i> ${a} %</div>
    </div>
    <div class="w-thi-forecast">
      <div class="w-thi-fc-label">Prévisions</div>
      ${d.map(u=>`<div class="w-thi-fc-row">
        <span class="w-thi-fc-day">${u.day}</span>
        <span class="w-thi-fc-val" style="color:${m(u.m)}">${u.m}</span>
        <span class="w-thi-fc-val" style="color:${m(u.j)}">${u.j}</span>
        <span class="w-thi-fc-val" style="color:${m(u.s)}">${u.s}</span>
      </div>`).join("")}
      <div class="w-thi-fc-legend"><span>Matin</span><span>Journée</span><span>Soir</span></div>
    </div>
  </div>`,e.querySelector(".w-thi-info-btn").addEventListener("click",u=>{u.stopPropagation();const p=e.querySelector(".w-thi-legend");if(p){p.remove();return}const v=document.createElement("div");v.className="w-thi-legend",v.innerHTML=`
      <div class="w-thi-legend-title">Échelle THI</div>
      <div class="w-thi-legend-row" style="color:#2d9e5f"><span class="w-thi-legend-range">&lt; 68</span><span>Confort</span></div>
      <div class="w-thi-legend-row" style="color:#f5c842"><span class="w-thi-legend-range">68 – 71</span><span>Stress léger</span></div>
      <div class="w-thi-legend-row" style="color:#f5a030"><span class="w-thi-legend-range">72 – 78</span><span>Stress modéré</span></div>
      <div class="w-thi-legend-row" style="color:#e07050"><span class="w-thi-legend-range">≥ 79</span><span>Stress sévère</span></div>`,e.querySelector(".w-thi-wrap").insertBefore(v,e.querySelector(".w-thi-details"))})}function Wt(e){if(!P.filter(c=>y.linkedSensorIds.includes(c.id)).some(c=>{const o=H[c.model]||[];return o.some(d=>d.id==="temp")&&o.some(d=>d.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const i=72,a=j(14,22),s=Array.from({length:i},(c,o)=>+(a+6*Math.sin(o/24*2*Math.PI-Math.PI/2)+j(-.5,.5)).toFixed(1)),l=Array.from({length:i},(c,o)=>Math.max(30,Math.min(100,70-15*Math.sin(o/24*2*Math.PI-Math.PI/2)+j(-3,3)))),r=s.map((c,o)=>{const d=l[o]/100,m=17.27,u=237.3,p=Math.log(d)+m*c/(u+c);return+(u*p/(m-p)).toFixed(1)});e.innerHTML=`<div class="w-temprosee-wrap">
    ${Ve([{values:s,color:"#e07050"},{values:r,color:"#45b7d1"}],380,100)}
    <div class="w-temprosee-legend">
      <span style="color:#e07050"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Température (${s[i-1]}°C)</span>
      <span style="color:#45b7d1"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Point de rosée (${r[i-1]}°C)</span>
      <span style="font-size:10px;color:var(--txt3)">3 derniers jours</span>
    </div>
  </div>`}function _t(e){if(!P.filter(S=>y.linkedSensorIds.includes(S.id)).some(S=>(H[S.model]||[]).some(D=>D.id==="tsol"))){e.innerHTML='<div class="dash-empty">Capteur T. sol requis</div>';return}const i=48,a=j(14,20),s=Array.from({length:i},(S,D)=>+(a+3*Math.sin(D/24*2*Math.PI-Math.PI/2)+j(-.4,.4)).toFixed(1)),l=15,r=22,c=380,o=100,d=28,m=8,u=6,p=20,v=c-d-m,f=o-u-p,b=[...s,l,r],g=Math.min(...b)-1,x=Math.max(...b)+1,w=S=>(d+S/(i-1)*v).toFixed(1),$=S=>(u+f-(S-g)/(x-g)*f).toFixed(1),T=+$(l),k=+$(r),O=[.25,.5,.75].map(S=>{const D=(u+S*f).toFixed(1);return`<line x1="${d}" y1="${D}" x2="${c-m}" y2="${D}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),z=s.map((S,D)=>`${D?"L":"M"}${w(D)},${$(S)}`).join("");e.innerHTML=`<div class="w-tsol-wrap">
    <svg width="100%" height="${o}" viewBox="0 0 ${c} ${o}" preserveAspectRatio="none">
      ${O}
      <rect x="${d}" y="${k.toFixed(1)}" width="${v}" height="${(T-k).toFixed(1)}" fill="rgba(45,158,95,.1)"/>
      <line x1="${d}" y1="${T.toFixed(1)}" x2="${c-m}" y2="${T.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <line x1="${d}" y1="${k.toFixed(1)}" x2="${c-m}" y2="${k.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <path d="${z}" fill="none" stroke="#bb8fce" stroke-width="2" stroke-linejoin="round"/>
      <text x="${d-3}" y="${u+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${x.toFixed(0)}</text>
      <text x="${d-3}" y="${u+f+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>
    </svg>
    <div class="w-tsol-legend">
      <span style="color:#bb8fce"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sol · ${s[i-1]}°C</span>
      <span style="color:#2d9e5f;font-size:10px"><i class="bi bi-square-fill" style="opacity:.3"></i> Zone optimale ${l}–${r}°C</span>
      <span style="font-size:10px;color:var(--txt3)">48 dernières heures</span>
    </div>
  </div>`}function Vt(e){const t=(y.crop||I.crop||"").toLowerCase();if(!t.includes("maïs")&&!t.includes("mais")){e.innerHTML='<div class="dash-empty">Culture Maïs requise</div>';return}const n=[{name:"Farmflex 253",target:1320},{name:"DKC 3230",target:1380},{name:"Ronaldinio",target:1290},{name:"Banguy",target:1350}],i=n[R%n.length],a=I.degresJour||h(600,1200),s=Math.min(a/i.target,1),l=Math.max(0,i.target-a),r=new Date,c=Math.round(l/10),o=new Date(r);o.setDate(o.getDate()+Math.max(0,c-5));const d=new Date(r);d.setDate(d.getDate()+c+5);const m=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],u=p=>`${p.getDate()} ${m[p.getMonth()]}`;e.innerHTML=`<div class="w-maizy-wrap">
    <div class="w-maizy-title">Récolte prévisionnelle</div>
    <div class="w-maizy-dates">${u(o)} — ${u(d)}</div>
    <div class="w-maizy-bar-wrap">
      <div class="w-maizy-bar-track"><div class="w-maizy-bar-fill" style="width:${(s*100).toFixed(1)}%"></div></div>
      <div class="w-maizy-bar-pct">${(s*100).toFixed(0)} %</div>
    </div>
    <div class="w-maizy-dj">
      <span class="w-maizy-dj-val">${a.toFixed?a.toFixed(1):a}</span>
      <span class="w-maizy-dj-sep"> / ${i.target} DJ</span>
      <span class="w-maizy-dj-vari">${i.name}</span>
    </div>
    <a class="w-maizy-link" href="#">Voir le détail <i class="bi bi-arrow-right"></i></a>
  </div>`}function Gt(e){const t=(y.crop||I.crop||"").toLowerCase();if(!t.includes("pommier")&&!t.includes("pomme")){e.innerHTML='<div class="dash-empty">Culture Pommier requise</div>';return}const n=new Date,i=new Date(n);i.setDate(i.getDate()-h(2,8));const a=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=d=>`${d.getDate()} ${a[d.getMonth()]}`,l=h(8,24),r=h(80,280),c=r>200?"Élevé":r>120?"Modéré":"Léger",o=r>200?"#e07050":r>120?"#f5a030":"#2d9e5f";e.innerHTML=`<div class="w-tav-wrap">
    <div class="w-tav-ep">Dernier épisode · <strong>${s(i)}</strong></div>
    <div class="w-tav-stats">
      <div class="w-tav-stat"><span class="w-tav-stat-val">${l}h</span><span class="w-tav-stat-lbl">Durée</span></div>
      <div class="w-tav-stat"><span class="w-tav-stat-val">${r} DH</span><span class="w-tav-stat-lbl">Degrés-heures</span></div>
    </div>
    <div class="w-tav-risk" style="color:${o}">
      <i class="bi bi-circle-fill" style="font-size:8px;vertical-align:middle"></i>
      Risque d'infection estimé <strong>${c}</strong>
    </div>
    <a class="w-maizy-link" href="#">Afficher l'historique <i class="bi bi-arrow-right"></i></a>
  </div>`}function G(e){e.innerHTML=`<div class="dash-empty" style="padding-top:20px">
    <i class="bi bi-hourglass" style="font-size:20px;opacity:.3;display:block;margin-bottom:6px"></i>
    Widget bientôt disponible
  </div>`}function N(e){return t=>{const n=P.filter(c=>y.linkedSensorIds.includes(c.id)),i={"w-station":c=>["P+","PT","SMV","P"].includes(c.model),"w-thygro":c=>c.model==="TH","w-tsol":c=>c.model==="T_MINI","w-anem":c=>c.model==="W","w-pyrano":c=>c.model==="PYRANO","w-lws":c=>c.model==="LWS","w-par":c=>c.model==="PAR","w-capa":c=>c.model.startsWith("CAPA-"),"w-tensio":c=>_.includes(c.model),"w-ec":c=>c.model==="EC"},a=n.find(i[e]||(()=>!1));if(!a){t.innerHTML='<div class="dash-empty">Aucun capteur compatible lié</div>';return}const s=H[a.model]||[],r=({"w-station":()=>{const c=[];return s.some(o=>o.id==="temp")&&c.push({label:"Température",val:h(10,30)+" °C",color:"#e07050",icon:"bi-thermometer-half"}),s.some(o=>o.id==="pluie")&&c.push({label:"Pluie 24h",val:h(0,14)+" mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy"}),s.some(o=>o.id==="humidite")&&c.push({label:"Humidité",val:h(40,90)+" %",color:"#4ecdc4",icon:"bi-droplet-half"}),c},"w-thygro":()=>[{label:"Température",val:h(10,30)+" °C",color:"#e07050",icon:"bi-thermometer-half"},{label:"Humidité",val:h(40,90)+" %",color:"#4ecdc4",icon:"bi-droplet-half"}],"w-tsol":()=>[{label:"Temp. sol",val:h(8,22)+" °C",color:"#bb8fce",icon:"bi-layers"}],"w-anem":()=>[{label:"Vitesse",val:h(0,40)+" km/h",color:"#7bc4b0",icon:"bi-wind"},{label:"Direction",val:["N","NE","E","SE","S","SO","O","NO"][h(0,7)],color:"#7bc4b0",icon:"bi-compass"}],"w-pyrano":()=>[{label:"Rayonnement",val:h(100,900)+" W/m²",color:"#f5c842",icon:"bi-sun"}],"w-lws":()=>[{label:"Humectation",val:j(0,12).toFixed(1)+" h/j",color:"#78d8a0",icon:"bi-droplet"}],"w-par":()=>[{label:"PAR",val:h(100,2e3)+" µmol/m²/s",color:"#f0d060",icon:"bi-brightness-high"}],"w-capa":()=>s.filter(c=>c.id.startsWith("vwc")).slice(0,3).map(c=>({label:c.name,val:h(15,45)+" %vol",color:c.color,icon:"bi-moisture"})),"w-tensio":()=>[{label:"Potentiel hydrique",val:h(10,150)+" kPa",color:"#5b8dd9",icon:"bi-graph-down"}],"w-ec":()=>[{label:"Conductivité",val:j(.1,3).toFixed(2)+" mS/cm",color:"#f0a030",icon:"bi-plug"}]}[e]||(()=>[]))();t.innerHTML=`
      <div class="w-sensor-rows">${r.map(c=>`
        <div class="w-sensor-row">
          <i class="bi ${c.icon}" style="color:${c.color};flex-shrink:0"></i>
          <span class="w-sensor-val" style="color:${c.color}">${c.val}</span>
          <span class="w-sensor-lbl">${c.label}</span>
        </div>`).join("")}</div>
      <div class="w-sensor-src">${ee[a.model]||a.model} · ${a.serial}</div>`}}function Jt(e){const t=j(20,80),n=j(15,60),i=(y.irrigationEvents||[]).reduce((r,c)=>r+(c.mm||0),0),a=Math.max(0,t+i-n),s=t+i-n-a,l=s>=0?"var(--ok)":"var(--err)";e.innerHTML=`<div style="display:flex;gap:16px;align-items:flex-start;height:100%">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;flex:1">
      ${ae("Pluie",t.toFixed(0),"mm","#45b7d1","bi-cloud-rain-heavy","7 derniers jours")}
      ${ae("ETP",n.toFixed(1),"mm","#c090e0","bi-sun","7 derniers jours")}
      ${ae("Irrigation",i.toFixed(0),"mm","#0172A4","bi-droplet-fill","Cumulé")}
      ${ae("Drainage",a.toFixed(0),"mm","#7bc4b0","bi-arrow-down-circle","Estimé")}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:0 0 140px;gap:4px;padding:8px;background:var(--bg);border-radius:8px;border:1px solid var(--bdr)">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:var(--txt3)">Bilan net</div>
      <div style="font-size:36px;font-weight:700;color:${l}">${s>=0?"+":""}${s.toFixed(0)}</div>
      <div style="font-size:13px;color:${l};font-weight:600">mm</div>
      <div style="font-size:11px;color:var(--txt3);margin-top:4px">7 derniers jours</div>
    </div>
  </div>`}function ae(e,t,n,i,a,s){return`<div style="background:var(--bg);border:1px solid var(--bdr);border-radius:8px;padding:10px 12px">
    <div style="font-size:11px;color:${i};font-weight:600;display:flex;align-items:center;gap:5px;margin-bottom:4px"><i class="bi ${a}"></i> ${e}</div>
    <div style="font-size:22px;font-weight:700;color:var(--txt)">${t} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${n}</span></div>
    <div style="font-size:10px;color:var(--txt3);margin-top:2px">${s}</div>
  </div>`}function Ut(e){let t=null;e.querySelectorAll(".dash-block").forEach(n=>{n.addEventListener("dragstart",i=>{t=n,i.dataTransfer.effectAllowed="move",setTimeout(()=>n.classList.add("dash-drag-ghost"),0)}),n.addEventListener("dragend",()=>{n.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(i=>i.classList.remove("dash-drag-over")),t=null,ue([...e.querySelectorAll(".dash-block")].map(i=>i.dataset.id))}),n.addEventListener("dragover",i=>{i.preventDefault(),!(!t||n===t)&&(i.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),n.classList.add("dash-drag-over"))}),n.addEventListener("dragleave",()=>{n.classList.remove("dash-drag-over")}),n.addEventListener("drop",i=>{if(i.preventDefault(),!t||n===t)return;n.classList.remove("dash-drag-over");const a=[...e.querySelectorAll(".dash-block")],s=a.indexOf(t),l=a.indexOf(n);s<l?n.after(t):n.before(t)})})}
