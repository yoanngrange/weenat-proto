import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as U}from"./plots-BEYIGwLd.js";import{s as P}from"./sensors-DDe0aa9W.js";import{o as xe}from"./orgs-Cx4wNzLL.js";import{m as he}from"./members-DEd9yWse.js";import{u as qe}from"./breadcrumb-DEBQjfiD.js";import{d as ve,e as $e}from"./store-DzkjdUGR.js";import"./irrigations-cQAUTeq7.js";const Ue=new URLSearchParams(window.location.search),R=parseInt(Ue.get("id")),I=U.find(e=>e.id===R);function p(e,t){return Math.floor(Math.random()*(t-e+1))+e}function j(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}const Me=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#c090e0",base:()=>j(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>p(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#80c8e8",base:()=>p(2,16),isCumul:!1}],H={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>p(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>p(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#4ecdc4",base:()=>p(40,90)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>p(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>p(10,28),cumul:{label:"DJC",unit:"°j"}}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>p(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],SMV:[{id:"pluie",name:"Pluie",unit:"mm",color:"#45b7d1",base:()=>p(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>p(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#4ecdc4",base:()=>p(40,90)}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#e07050",base:()=>p(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#4ecdc4",base:()=>p(40,90)}],"CHP-15/30":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",base:()=>p(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>p(8,22)}],"CHP-30/60":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",base:()=>p(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>p(8,22)}],"CHP-60/90":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",base:()=>p(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>p(8,22)}],"CAPA-30-3":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#f0cc60",base:()=>p(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#c89c30",base:()=>p(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#a07010",base:()=>p(15,45)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>p(8,22)}],"CAPA-60-6":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#f0d070",base:()=>p(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#d8b050",base:()=>p(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#c09030",base:()=>p(15,45)},{id:"vwc40",name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#a87010",base:()=>p(17,43)},{id:"vwc50",name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#905200",base:()=>p(18,42)},{id:"vwc60",name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#783400",base:()=>p(18,42)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>p(8,22)}],T_MINI:[{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>p(8,22)}],LWS:[{id:"humec",name:"Humectation foliaire",unit:"h",color:"#78d8a0",base:()=>p(0,12)}],T_GEL:[{id:"tseche",name:"Temp. sèche",unit:"°C",color:"#e07050",base:()=>p(-2,12)},{id:"thumide",name:"Temp. humide",unit:"°C",color:"#4ecdc4",base:()=>p(-4,10)}],W:[{id:"_vent",name:"Vent",unit:"km/h · direction",color:"#7bc4b0",isWindComposite:!0,base:()=>p(0,40)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>j(.1,3)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>p(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>p(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}]},_=["CHP-15/30","CHP-30/60","CHP-60/90"],ee={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"};function Ye(e,t=null,n=null,i=null){const o=Math.max(2,Math.min(200,Math.floor(Se()/te()))),s=Array.from({length:o},()=>p(5,35)),r=s.map(M=>Math.min(M+p(3,18),80)),l=Array.from({length:o},()=>p(0,359)),c=600,a=200,d=46,u=16,m=16,h=28,v=c-d-u,f=a-m-h,g=Math.ceil(Math.max(...r)/10)*10||50,b=M=>d+M/Math.max(o-1,1)*v,w=M=>m+f-M/g*f,x=r.map((M,E)=>`${b(E).toFixed(1)},${w(M).toFixed(1)}`).join("L"),$=[...s].reverse().map((M,E)=>`${b(o-1-E).toFixed(1)},${w(M).toFixed(1)}`).join("L"),T=`M${x}L${$}Z`,k=s.map((M,E)=>`${E?"L":"M"}${b(E).toFixed(1)},${w(M).toFixed(1)}`).join(""),O=[.25,.5,.75].map(M=>{const E=(m+f-M*f).toFixed(1);return`<line x1="${d}" y1="${E}" x2="${c-u}" y2="${E}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),z=[0,.5,1].map(M=>{const E=m+f-M*f;return`<text x="${d-4}" y="${(E+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(M*g)}</text>`}).join(""),S=Math.max(1,Math.round(o/25)),D=[];for(let M=0;M<o;M+=S){const E=b(M).toFixed(1),X=(m+f*.35).toFixed(1);D.push(`<g transform="translate(${E},${X}) rotate(${l[M]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const C=document.createElement("div");C.className="chart-card",i&&(C.dataset.cardKey=i,C.draggable=!0);const A=t?`<span class="chart-card-source">${t}</span>`:"",F=n!=null?`<span class="chart-card-emission">il y a ${n} min</span>`:"";C.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
      <div class="chart-card-meta">${A}${F}</div>
    </div>
    <svg width="100%" height="${a}" viewBox="0 0 ${c} ${a}" preserveAspectRatio="none">
      ${z}${O}
      <path d="${T}" fill="#7bc4b0" opacity=".18"/>
      <path d="${k}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${D.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(C)}const Ke=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let y={};function Xe(){const e=$e(R);if(y={...I,...e},!y.linkedSensorIds){const t=P.filter(n=>n.parcelId===R).map(n=>n.id);y.linkedSensorIds=e.linkedSensorIds??t}y.integrations||(y.integrations=[...I.integrations||[]]),y.alertes||(y.alertes=[])}function W(e){Object.assign(y,e),ve(R,e)}let J="7d",Y=null,K=null;function Se(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return J==="custom"&&Y&&K?Math.max(60,Math.round((K-Y)/6e4)):e[J]??10080}function te(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Ze(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function Qe(){const e=Se(),t=te();return Math.max(2,Math.min(200,Math.floor(e/t)))}const Ie={"Cumul Degrés jours":"cumuls","Cumul Pluie":"cumuls","Cumul Ensoleillement":"cumuls","Cumul Evapotranspiration":"cumuls","Cumul Heures froides":"cumuls","Cumul Humectation foliaire":"cumuls","Maï'zy":"maizy","Suivi de culture":"suivi-culture",Weephyt:"weephyt",Decitrait:"decitrait","Tavelure Pomme":"tavelure",DPV:"dpv",THI:"thi","Température de rosée":"temp-rosee","Température du sol":"temp-sol","Rayonnement solaire":"w-pyrano",Gel:"gel","Prévisions à 5 jours":"previsions-5j","Prévisions à 6 heures":"previsions-6h","Prévisions du jour":"previsions-jour","Prévisions de tensiométrie":"previsions-tensio",Anémomètre:"w-anem","Capteur d'humectation foliaire":"w-lws","Capteur PAR":"w-par",Pyranomètre:"w-pyrano","Station météo":"w-station","Station Météo Virtuelle":"w-station","Thermomètre de sol":"w-tsol","Thermomètre-Hygromètre":"w-thygro","Sonde capacitive":"w-capa",Tensiomètre:"w-tensio","Sonde de fertirrigation":"w-ec","Profil capteurs":"profil-capteurs","Niveau de réservoir en eau utilisable":"niveau-reservoir","Profil de niveau de réservoir":"profil-reservoir"},et=[{title:"Cumuls",items:["Cumul Degrés jours","Cumul Pluie","Cumul Ensoleillement","Cumul Evapotranspiration","Cumul Heures froides","Cumul Humectation foliaire"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Weephyt","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire","Gel"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]},{title:"Irrigation",items:["Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]}];function tt(){const e=P.filter(a=>y.linkedSensorIds.includes(a.id)),t=new Set(e.map(a=>a.model)),n=(y.crop||I.crop||"").toLowerCase(),i=ce(),o=e.some(a=>{const d=H[a.model]||[];return d.some(u=>u.id==="temp")&&d.some(u=>u.id==="humidite")}),s=e.some(a=>(H[a.model]||[]).some(d=>d.id==="tsol")),r=e.some(a=>(H[a.model]||[]).some(d=>d.cumul)),l=a=>Ie[a]?a==="Gel"?t.has("T_GEL"):a==="Maï'zy"?n.includes("maïs")||n.includes("mais"):a==="Tavelure Pomme"?n.includes("pommier"):a==="Station météo"?t.has("P+")||t.has("PT")||t.has("P"):a==="Station Météo Virtuelle"?t.has("SMV"):a==="Thermomètre-Hygromètre"?t.has("TH"):a==="Thermomètre de sol"?t.has("T_MINI")||s:a==="Anémomètre"?t.has("W"):a==="Pyranomètre"||a==="Rayonnement solaire"?t.has("PYRANO"):a==="Capteur d'humectation foliaire"?t.has("LWS"):a==="Capteur PAR"?t.has("PAR"):a==="Sonde capacitive"?[...t].some(u=>u.startsWith("CAPA-")):a==="Tensiomètre"?[...t].some(u=>_.includes(u)):a==="Sonde de fertirrigation"?t.has("EC"):a==="DPV"||a==="THI"||a==="Température de rosée"?o:a==="Température du sol"?s:a.startsWith("Cumul")?r:!0:!0,c=document.createElement("div");c.className="modal add-modal",c.innerHTML=`
    <div class="add-modal-content" style="max-width:520px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter un widget</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      ${et.map(a=>{const d=a.items.filter(l);return d.length?`
        <div class="add-modal-section">
          <div class="add-modal-section-label">${a.title}</div>
          <div class="wcat-list">
            ${d.map(u=>{const m=Ie[u],h=m&&i.includes(m);return`
              <div class="wcat-item">
                <span>${u}</span>
                ${h?'<span class="wcat-already">Ajouté</span>':`<button class="wcat-add-btn" type="button" data-wid="${m}"><i class="bi bi-plus-circle"></i> Ajouter</button>`}
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")}
    </div>`,c.addEventListener("click",a=>{a.target===c&&c.remove()}),c.querySelector(".add-modal-close").addEventListener("click",()=>c.remove()),c.querySelectorAll(".wcat-add-btn").forEach(a=>{a.addEventListener("click",()=>{const d=a.dataset.wid;if(!d)return;const u=ce();u.includes(d)||(u.push(d),Le(u)),c.remove(),ke()})}),document.body.appendChild(c)}const fe=`weenat-journal-${R}`,Pe=new Date().toISOString().slice(0,10);function se(){try{const t=localStorage.getItem(fe);if(t)return JSON.parse(t)}catch{}const e=[{id:17469216e5,type:"note",date:"2026-05-11",texte:"Observation de quelques pucerons sur les feuilles basses. À surveiller."},{id:17473536e5,type:"traitement",date:"2026-05-16",texte:"Application conforme aux conditions météo. Vent < 2 m/s.",produit:"Karate Zeon 10 CS",dose:"0,1 L/ha",cible:"Pucerons"},{id:17477856e5,type:"note",date:"2026-05-21",texte:"Suite traitement du 16/05 : peu de pucerons visibles, situation sous contrôle."}];return localStorage.setItem(fe,JSON.stringify(e)),e}function Ne(e){localStorage.setItem(fe,JSON.stringify(e))}function Ce(){const e=document.getElementById("journal-container");if(!e)return;const t=se().sort((s,r)=>r.date.localeCompare(s.date)),n=s=>{const[r,l,c]=s.split("-");return`${c}/${l}/${r}`};let i=`
    <div class="journal-add-bar">
      <button class="btn-secondary btn-sm" id="jrn-add-note" style="gap:6px">
        <i class="bi bi-pencil-square"></i> Ajouter une note
      </button>
      <button class="btn-secondary btn-sm" id="jrn-add-traitement" style="gap:6px">
        <i class="bi bi-eyedropper"></i> Ajouter un traitement
      </button>
    </div>
  `;t.length===0?i+='<div class="journal-empty">Aucune entrée dans le journal.</div>':t.forEach(s=>{var l;const r=s.type==="traitement";i+=`
        <div class="journal-entry" data-id="${s.id}">
          <div class="journal-entry-hd">
            <span class="journal-entry-date">${n(s.date)}</span>
            <span class="journal-type-badge journal-type-badge--${s.type}">
              <i class="bi bi-${r?"eyedropper":"pencil"}"></i>
              ${r?"Traitement":"Note"}
            </span>
            <button class="journal-entry-delete" data-id="${s.id}" title="Supprimer">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
          ${s.texte?`<div class="journal-entry-texte">${s.texte}</div>`:""}
          ${r&&(s.produit||s.dose||s.cible)?`
            <div class="journal-entry-meta">
              ${s.produit?`<span><i class="bi bi-flask"></i>${s.produit}</span>`:""}
              ${s.dose?`<span><i class="bi bi-droplet"></i>${s.dose}</span>`:""}
              ${s.cible?`<span><i class="bi bi-bullseye"></i>${s.cible}</span>`:""}
            </div>`:""}
          ${(l=s.imageIds)!=null&&l.length?`<div class="jrn-entry-photos" data-entry-id="${s.id}"></div>`:""}
        </div>
      `}),e.innerHTML=i,e.querySelector("#jrn-add-note").addEventListener("click",()=>je("note")),e.querySelector("#jrn-add-traitement").addEventListener("click",()=>je("traitement")),e.querySelectorAll(".journal-entry-delete").forEach(s=>{s.addEventListener("click",()=>{var c,a;const r=parseInt(s.dataset.id),l=se().find(d=>d.id===r);(c=l==null?void 0:l.imageIds)!=null&&c.length&&((a=window.ImageStore)==null||a.remove(l.imageIds)),Ne(se().filter(d=>d.id!==r)),Ce()})});const o=window.ImageStore;o&&e.querySelectorAll(".jrn-entry-photos[data-entry-id]").forEach(async s=>{var l;const r=t.find(c=>String(c.id)===s.dataset.entryId);if((l=r==null?void 0:r.imageIds)!=null&&l.length)for(const c of r.imageIds)try{const a=await o.get(c);if(!a)continue;const d=document.createElement("img");d.className="jrn-entry-photo",d.src=a,d.alt="",d.addEventListener("click",()=>{var u;return(u=window.openLightbox)==null?void 0:u.call(window,a)}),s.appendChild(d)}catch{}})}function je(e){const t=e==="traitement",n=document.createElement("div");n.className="modal add-modal",n.innerHTML=`
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
  `,n.querySelector(".add-modal-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",s=>{s.target===n&&n.remove()});const i=[],o=window.ImageStore;o&&(o._addThumb=o._addThumb||window.addThumbToPreview,window.setupImgUpload(n.querySelector("#jrn-f-img-input"),n.querySelector("#jrn-f-img-btn"),n.querySelector("#jrn-f-previews"),n.querySelector("#jrn-f-img-err"),i)),n.querySelector("#jrn-f-save").addEventListener("click",async()=>{const s=n.querySelector("#jrn-f-date").value||Pe,r=n.querySelector("#jrn-f-texte").value.trim(),l={id:Date.now(),type:e,date:s,texte:r};if(t&&(l.produit=n.querySelector("#jrn-f-produit").value.trim(),l.dose=n.querySelector("#jrn-f-dose").value.trim(),l.cible=n.querySelector("#jrn-f-cible").value.trim()),!(!r&&!l.produit&&!i.length)){if(o&&i.length){l.imageIds=[];for(const c of i){const a=`img_${l.id}_${l.imageIds.length}`;await o.store(a,c),l.imageIds.push(a)}}Ne([l,...se()]),n.remove(),Ce()}}),document.body.appendChild(n)}function nt(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const n=U.filter(s=>s.orgId===I.orgId).sort((s,r)=>s.name.localeCompare(r.name,"fr")),i=document.createElement("span");i.className="breadcrumb-nav-wrap";const o=document.createElement("select");o.className="breadcrumb-nav-select",o.innerHTML=n.map(s=>`<option value="${s.id}"${s.id===R?" selected":""}>${s.name}</option>`).join(""),o.addEventListener("change",()=>{window.location.href=`parcelle-detail.html?id=${o.value}`}),i.appendChild(o),t.replaceWith(i)}document.addEventListener("DOMContentLoaded",()=>{var t,n;if(!I){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}Xe(),qe(y.name||I.name,{label:"Parcelles",href:"parcelles.html"}),nt(),V(),$t(),At(),Ht(),wt(),xt(),Ft(),ke(),(t=document.getElementById("parcel-add-widget-btn"))==null||t.addEventListener("click",tt),(n=document.getElementById("btn-export-csv"))==null||n.addEventListener("click",Pt);const e=document.getElementById("sidebar");e&&new MutationObserver(()=>le()).observe(e,{attributes:!0,attributeFilter:["data-role"]})});let oe="capteur",q=null;const Be=`charts-order-parcel-${R}`;function it(){try{return JSON.parse(localStorage.getItem(Be)||"null")}catch{return null}}function at(e){localStorage.setItem(Be,JSON.stringify(e))}function st(e){let t=null;e.addEventListener("dragstart",n=>{const i=n.target.closest(".chart-card[data-card-key]");i&&(t=i,i.classList.add("chart-dragging"),n.dataTransfer.effectAllowed="move")}),e.addEventListener("dragend",()=>{t==null||t.classList.remove("chart-dragging"),e.querySelectorAll(".chart-card").forEach(i=>i.classList.remove("chart-drag-over")),t=null;const n=[...e.querySelectorAll(".chart-card[data-card-key]")].map(i=>i.dataset.cardKey);at(n)}),e.addEventListener("dragover",n=>{if(n.preventDefault(),!t)return;const i=n.target.closest(".chart-card[data-card-key]");if(!i||i===t)return;e.querySelectorAll(".chart-card").forEach(s=>s.classList.remove("chart-drag-over")),i.classList.add("chart-drag-over");const o=i.getBoundingClientRect().top+i.getBoundingClientRect().height/2;e.insertBefore(t,n.clientY<o?i:i.nextSibling)}),e.addEventListener("drop",n=>{n.preventDefault(),e.querySelectorAll(".chart-card").forEach(i=>i.classList.remove("chart-drag-over"))})}function ot(e,t){const n=P.filter(a=>t.includes(a.id)),i=n.filter(a=>_.includes(a.model)),o=n.filter(a=>!_.includes(a.model)),s=te(),r=new Set;n.forEach(a=>(H[a.model]||[]).forEach(d=>r.add(d.id)));const l=[];if(o.forEach(a=>{const d=H[a.model];if(!d)return;const u=`${a.model} · ${a.serial}`,m=Math.floor(5+Math.random()*55);d.forEach(h=>{if(h.isWindComposite){l.push({key:`wind-${a.id}`,type:"wind",sensor:a,source:u,emissionMins:m});return}l.push({key:`s${a.id}-${h.id}`,type:"metric",metric:h,source:u,emissionMins:m})})}),i.length>0){const a=`Tensiomètres · ${i.length} capteur${i.length>1?"s":""}`,d=Math.floor(5+Math.random()*55);["pothydr","tsol"].forEach(u=>{l.push({key:`tensio-${u}`,type:"tensio",metricId:u,source:a,emissionMins:d,tensioSensors:i})})}Me.filter(a=>!(a.id==="etp"&&s<1440)).filter(a=>!r.has(a.id)).forEach(a=>l.push({key:`always-${a.id}`,type:"metric",metric:a,source:"parcelle",emissionMins:null,unavailable:s<60}));const c=it();if(c!=null&&c.length){const a=new Map(c.map((d,u)=>[d,u]));l.sort((d,u)=>(a.has(d.key)?a.get(d.key):1/0)-(a.has(u.key)?a.get(u.key):1/0))}l.forEach(a=>{a.type==="metric"?be(e,a.metric,a.source,a.emissionMins,a.key,a.unavailable):a.type==="wind"?Ye(e,a.source,a.emissionMins,a.key):a.type==="tensio"&&ct(e,a.metricId,a.tensioSensors,a.source,a.emissionMins,a.key)}),st(e)}function re(e){const t=P.filter(o=>e.includes(o.id)),n=new Set,i=[];return t.forEach(o=>{(H[o.model]||[]).forEach(s=>{n.has(s.id)||(n.add(s.id),i.push(s))})}),Me.forEach(o=>{n.has(o.id)||(n.add(o.id),i.push(o))}),i}function V(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",q){e.className="compare-rows";const n=U.find(d=>d.id===q),i=document.createElement("div");i.className="compare-header-row",i.innerHTML=`
      <div class="compare-col-header"><span>${y.name||I.name}</span></div>
      <div class="compare-col-header">
        <span>${(n==null?void 0:n.name)||"Parcelle"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(i),(t=i.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{q=null,de(),V()});const o=re(y.linkedSensorIds),s=$e(q),r=(s==null?void 0:s.linkedSensorIds)??P.filter(d=>d.parcelId===q).map(d=>d.id),l=re(r),c=o.map(d=>d.id);[...c,...l.map(d=>d.id).filter(d=>!c.includes(d))].forEach(d=>{const u=o.find(g=>g.id===d),m=l.find(g=>g.id===d),h=document.createElement("div");h.className="compare-row";const v=document.createElement("div");u?be(v,u):v.innerHTML='<div class="compare-chart-empty">—</div>';const f=document.createElement("div");m?be(f,m):f.innerHTML='<div class="compare-chart-empty">—</div>',h.appendChild(v),h.appendChild(f),e.appendChild(h)})}else e.className="charts-stack",ot(e,y.linkedSensorIds);ht()}const Q=["#5b8dd9","#e07050","#4ecdc4","#f5c842","#c090e0","#78d8a0"];function rt(e){const t=e.depth||30;return[{depth:t,label:`${t} cm`,sensor:e}]}function lt(e){if(oe==="capteur")return e.map((n,i)=>({label:n.serial,color:Q[i%Q.length],depth:n.depth||30,sensor:n}));const t=new Map;return e.forEach(n=>rt(n).forEach(i=>{t.has(i.depth)||t.set(i.depth,i)})),[...t.values()].sort((n,i)=>n.depth-i.depth).map((n,i)=>({label:n.label,color:Q[i%Q.length],depth:n.depth,sensor:n.sensor}))}function ct(e,t,n,i=null,o=null,s=null){var v;const l={pothydr:{name:"Potentiel hydrique",unit:"kPa"},tsol:{name:"Température du sol",unit:"°C"}}[t],c=lt(n),a=document.createElement("div");a.className="chart-card tensio-multi-card",a.dataset.tensioMetric=t,a.dataset.tensioCurves=JSON.stringify(c.map(f=>({depth:f.depth,color:f.color}))),s&&(a.dataset.cardKey=s,a.draggable=!0);const d=c.map(f=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${f.color};vertical-align:middle;border-radius:1px"></span>
      ${f.label}
    </span>`).join(""),u=i?`<span class="chart-card-source">${i}</span>`:"",m=o!=null?`<span class="chart-card-emission">il y a ${o} min</span>`:"",h=`
    <div class="chart-tensio-toggle">
      <button class="btn-secondary btn-sm tensio-toggle-btn${oe==="capteur"?" active":""}" data-mode="capteur">Par capteur</button>
      <button class="btn-secondary btn-sm tensio-toggle-btn${oe==="horizon"?" active":""}" data-mode="horizon">Par horizon</button>
    </div>`;a.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((v=c[0])==null?void 0:v.color)||Q[0]}">${l.name}</span>
      <span class="chart-card-unit">${l.unit}</span>
      ${u}${m}
    </div>
    ${h}
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${d}</div>
    <svg class="chart-svg tensio-svg" data-metric="${t}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,a.querySelectorAll(".tensio-toggle-btn").forEach(f=>{f.addEventListener("click",()=>{oe=f.dataset.mode,V()})}),e.appendChild(a)}function be(e,t,n=null,i=null,o=null,s=!1){const r=t.base(),l=document.createElement("div");l.className="chart-card",l.dataset.base=r,l.dataset.color=t.color,l.dataset.cumul=t.isCumul?"1":"",l.dataset.chartType=t.chartType||"line",l.dataset.metricId=t.id,l.dataset.metricName=t.name,l.dataset.metricUnit=t.unit,o&&(l.dataset.cardKey=o,l.draggable=!0);const c=t.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label}</span><span class="chart-cumul-value">${yt(t)} ${t.cumul.unit}</span></div>`:"",a=n?`<span class="chart-card-source">${n}</span>`:"",d=i!=null?`<span class="chart-card-emission">il y a ${i} min</span>`:"",u=s?'<div class="chart-unavailable">Données indisponibles pour ce pas de temps</div>':'<svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>';l.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${a}${d}
    </div>
    ${u}
    ${c}
  `,e.appendChild(l)}let Z=null;function dt(){return Z||(Z=document.createElement("div"),Z.className="chart-tooltip",document.body.appendChild(Z)),Z}function ut(e,t){return t==="temp"||t==="temperature"?["#6eb4d4","#e07050"]:t==="tseche"||t==="thumide"?["#6eb4d4","#e07050"]:t==="temp_rosee"?["#a0d0f0","#4090c0"]:[mt(e,.55),e]}function mt(e,t){const n=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16),s=Math.round(n+(255-n)*t),r=Math.round(i+(255-i)*t),l=Math.round(o+(255-o)*t);return`#${s.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`}function We(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let n=0;n<e.length-1;n++){const i=e[Math.max(n-1,0)],o=e[n],s=e[n+1],r=e[Math.min(n+2,e.length-1)],l=o.x+(s.x-i.x)/6,c=o.y+(s.y-i.y)/6,a=s.x-(r.x-o.x)/6,d=s.y-(r.y-o.y)/6;t+=` C${l.toFixed(1)},${c.toFixed(1)} ${a.toFixed(1)},${d.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return t}function Ee(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Ae(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function pt(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function He(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function ge(e,t,n,i=.15){const o=Ae(n),s=He(o),r=pt(o),l=()=>1+(Math.random()-.5)*2*i;switch(e){case"temp":return(t-6+s*12)*l();case"tseche":case"thumide":return(t-4+s*8)*l();case"temp_rosee":{const c=t-6+s*12;return Math.min(c-1,t-8+s*6)*l()}case"tsol":{const c=Ae(n+120);return(t-3+He(c)*6)*l()}case"humidite":return Math.min(100,Math.max(20,(t+(1-s)*25-s*15)*l()));case"rayonnement":return Math.max(0,r*t*1.3*l());case"etp":return Math.max(0,r*t*1.5*l());case"humec":return Math.max(0,t*Math.max(0,.8-r*1.2)*l());case"pluie":return Math.random()<.12?t*Math.random()*2:0;case"vent":case"rafales":return Math.max(0,t*(.6+r*.8)*l());default:return Math.max(0,t*l())}}function ht(){const e=Qe(),t=te();P.filter(i=>y.linkedSensorIds.includes(i.id)).filter(i=>_.includes(i.model)),document.querySelectorAll(".chart-card").forEach(i=>{if(i.classList.contains("tensio-multi-card")){const m=i.querySelector(".tensio-svg"),h=JSON.parse(i.dataset.tensioCurves||"[]");m&&h.length>0&&vt(m,h,e,t);return}const o=i.querySelector(".chart-svg");if(!o)return;const s=parseFloat(i.dataset.base),r=i.dataset.color,l=i.dataset.cumul==="1",c=i.dataset.chartType||"line",a=i.dataset.metricId||"",d=i.dataset.metricName||"",u=i.dataset.metricUnit||"";i.dataset.isIrrigation?gt(o,r,e,t):ft(o,s,r,e,t,l,c,a,d,u)})}function vt(e,t,n,i){const r={t:14,r:10,b:28,l:46},l=600-r.l-r.r,c=180-r.t-r.b,a=t.map(x=>{const $=20+x.depth*.8+Math.random()*20;return Array.from({length:n},(T,k)=>{const O=(n-1-k)*i;return Math.max(0,ge("pothydr",$,O))})}),d=a.flat(),u=Math.min(...d),m=Math.max(...d),h=m-u||1,v=x=>r.l+x/Math.max(n-1,1)*l,f=x=>r.t+c-(x-u)/h*c,g=`tc-${Math.random().toString(36).slice(2)}`;let b=`<defs><clipPath id="${g}"><rect x="${r.l}" y="${r.t}" width="${l}" height="${c}"/></clipPath></defs>`;for(let x=0;x<=4;x++){const $=r.t+x/4*c,T=m-x/4*h;b+=`<line x1="${r.l}" y1="${$.toFixed(1)}" x2="${600-r.r}" y2="${$.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,b+=`<text x="${r.l-5}" y="${($+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${T.toFixed(0)}</text>`}a.forEach((x,$)=>{const T=x.map((O,z)=>({x:v(z),y:f(O)})),k=We(T);b+=`<path d="${k}" fill="none" stroke="${t[$].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${g})"/>`});const w=Math.max(1,Math.floor(n/6));for(let x=0;x<n;x+=w){const $=(n-1-x)*i;b+=`<text x="${v(x).toFixed(1)}" y="${174 .toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Ee($)}</text>`}e.innerHTML=b}function ft(e,t,n,i,o,s,r="line",l="",c="",a=""){const m={t:14,r:10,b:28,l:46},h=600-m.l-m.r,v=180-m.t-m.b,f=Math.max(1,Math.round(o/15)),g=Array.from({length:i},(C,A)=>{const F=(i-1-A)*o;if(s){let M=0;for(let E=0;E<f;E++)M+=ge(l,t/f,F+E*(o/f));return M}else return ge(l,t,F)}),b=r==="bar"?0:Math.min(...g),w=Math.max(...g),x=w-b||1,$=C=>m.l+C/Math.max(i-1,1)*h,T=C=>m.t+v-(C-b)/x*v,k=`grad_${Math.random().toString(36).slice(2)}`,[O,z]=ut(n,l);let S=`<defs>
    <linearGradient id="${k}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${O}"/>
      <stop offset="100%" stop-color="${z}"/>
    </linearGradient>
    <clipPath id="clip_${k}">
      <rect x="${m.l}" y="${m.t}" width="${h}" height="${v}"/>
    </clipPath>
  </defs>`;for(let C=0;C<=4;C++){const A=m.t+C/4*v,F=w-C/4*x,M=Math.abs(F)>=100?F.toFixed(0):Math.abs(F)>=10?F.toFixed(1):F.toFixed(2);S+=`<line x1="${m.l}" y1="${A.toFixed(1)}" x2="${600-m.r}" y2="${A.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,S+=`<text x="${m.l-5}" y="${(A+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${M}</text>`}const D=Math.max(1,Math.floor(i/6));for(let C=0;C<i;C+=D){const A=$(C).toFixed(1),F=(i-C)*o;S+=`<line x1="${A}" y1="${m.t}" x2="${A}" y2="${m.t+v}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,S+=`<text x="${A}" y="174" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Ee(F)}</text>`}if(r==="bar"){const C=Math.max(2,h/i*.65);g.forEach((A,F)=>{if(A<=0)return;const M=$(F),E=T(A),X=m.t+v-E;S+=`<rect x="${(M-C/2).toFixed(1)}" y="${E.toFixed(1)}" width="${C.toFixed(1)}" height="${X.toFixed(1)}" fill="url(#${k})" opacity="0.9" rx="1"/>`})}else{const C=g.map((M,E)=>({x:$(E),y:T(M)})),A=We(C),F=A+` L${$(i-1).toFixed(1)},${m.t+v} L${m.l.toFixed(1)},${m.t+v} Z`;S+=`<path d="${F}" fill="${z}" opacity="0.07" clip-path="url(#clip_${k})"/>`,S+=`<path d="${A}" fill="none" stroke="url(#${k})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${k})"/>`}S+=`<rect class="chart-hover-rect" x="${m.l}" y="${m.t}" width="${h}" height="${v}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=S,bt(e,g,$,T,b,w,i,o,c,a,n,m,600)}function bt(e,t,n,i,o,s,r,l,c,a,d,u,m,h){const v=dt(),f=e.querySelector(".chart-hover-rect");if(!f)return;const b=document.createElementNS("http://www.w3.org/2000/svg","circle");b.setAttribute("r","4"),b.setAttribute("fill",d),b.setAttribute("stroke","#fff"),b.setAttribute("stroke-width","1.5"),b.style.display="none",b.style.pointerEvents="none",e.appendChild(b),f.addEventListener("mousemove",w=>{const x=e.getBoundingClientRect(),$=m/x.width,T=(w.clientX-x.left)*$,k=m-u.l-u.r,O=Math.max(0,Math.min(1,(T-u.l)/k)),z=Math.round(O*(r-1));if(z<0||z>=t.length)return;const S=t[z],D=n(z),C=i(S);b.setAttribute("cx",D),b.setAttribute("cy",C),b.style.display="";const A=(r-z)*l,F=Ee(A),M=Math.abs(S)>=100?S.toFixed(1):S.toFixed(2);v.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${c}</div>
      <div class="chart-tooltip-val" style="color:${d}">${M} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${a}</span></div>
      <div class="chart-tooltip-ts">${F}</div>
    `,v.style.display="block";const E=w.clientX+12,X=w.clientY-10;v.style.left=`${Math.min(E,window.innerWidth-160)}px`,v.style.top=`${X}px`}),f.addEventListener("mouseleave",()=>{v.style.display="none",b.style.display="none"})}function gt(e,t,n,i){const r={t:12,r:8,b:28,l:44},l=600-r.l-r.r,c=180-r.t-r.b,a=Date.now(),d=n*i*6e4,u=Array(n).fill(0);(y.irrigationEvents||[]).forEach(b=>{const w=new Date(b.isoDate).getTime(),x=a-w;if(x<0||x>d)return;const $=Math.floor((d-x)/(i*6e4));$>=0&&$<n&&(u[$]+=b.mm||0)});const m=Math.max(...u,1),h=b=>r.l+b/Math.max(n-1,1)*l,v=b=>r.t+c-b/m*c;let f="";for(let b=0;b<=4;b++){const w=r.t+b/4*c,x=(m-b/4*m).toFixed(1);f+=`<line x1="${r.l}" y1="${w}" x2="${600-r.r}" y2="${w}" stroke="var(--bdr2)" stroke-width="1"/>`,f+=`<text x="${r.l-4}" y="${w+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${x}</text>`}const g=Math.max(4,l/n*.65);u.forEach((b,w)=>{if(b<=0)return;const x=h(w),$=v(b),T=r.t+c-$;f+=`<rect x="${(x-g/2).toFixed(1)}" y="${$.toFixed(1)}" width="${g.toFixed(1)}" height="${T.toFixed(1)}" fill="${t}" opacity="0.85" rx="1"/>`}),e.innerHTML=f}function yt(e){const n={pluie:()=>p(20,120),etp:()=>j(15,80),rayonnement:()=>p(500,3e3)}[e.id];return n?n():p(10,100)}function wt(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),n=document.getElementById("time-step"),i=new Date,o=new Date(i-7*864e5);document.getElementById("date-from").value=o.toISOString().slice(0,10),document.getElementById("date-to").value=i.toISOString().slice(0,10),e.addEventListener("click",s=>{const r=s.target.closest(".period-preset-btn");if(r)if(e.querySelectorAll(".period-preset-btn").forEach(l=>l.classList.remove("active")),r.classList.add("active"),J=r.dataset.period,J==="custom")t.style.display="flex";else{t.style.display="none";const l=document.getElementById("time-step");l&&(l.value=Ze(J)),V()}}),document.getElementById("date-from").addEventListener("change",Fe),document.getElementById("date-to").addEventListener("change",Fe),n.addEventListener("change",V)}function Fe(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(Y=new Date(e),K=new Date(t+"T23:59:59"),Y<K&&V())}function xt(){de()}function de(){var t,n,i,o;const e=document.getElementById("compare-control");if(e)if(q){const s=((t=U.find(r=>r.id===q))==null?void 0:t.name)||"Parcelle";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${s} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(n=e.querySelector(".compare-clear-icon"))==null||n.addEventListener("click",r=>{r.stopPropagation(),q=null,de(),V()}),(i=e.querySelector("#compare-open-btn"))==null||i.addEventListener("click",Re)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(o=e.querySelector("#compare-open-btn"))==null||o.addEventListener("click",Re)}function Re(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),n=U.filter(s=>s.id!==R),i=document.createElement("div");i.id="compare-dropdown",i.className="compare-dropdown",i.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher une parcelle…">
    <div class="compare-dropdown-list">
      ${n.map(s=>`<div class="compare-dropdown-item${s.id===q?" active":""}" data-id="${s.id}"><i class="bi bi-map"></i> ${s.name}</div>`).join("")}
    </div>
  `,t.appendChild(i);const o=i.querySelector(".compare-search-input");o.focus(),o.addEventListener("input",s=>{const r=s.target.value.toLowerCase();i.querySelectorAll(".compare-dropdown-item").forEach(l=>{l.style.display=l.textContent.toLowerCase().includes(r)?"":"none"})}),i.querySelectorAll(".compare-dropdown-item").forEach(s=>{s.addEventListener("click",()=>{q=parseInt(s.dataset.id),i.remove(),de(),V()})}),setTimeout(()=>{document.addEventListener("click",function s(r){!i.contains(r.target)&&!t.contains(r.target)&&(i.remove(),document.removeEventListener("click",s))})},0)}function $t(){const e=xe.find(t=>t.id===I.orgId);Mt(e),Ct(e),ye(),we(),le(),Te(),jt()}const ue=["Argilo-limoneux","Argileux","Limoneux","Sablo-limoneux","Sableux","Limon argileux","Limon fin","Argile sableux","Limono-argileux fin","Sable limoneux","Argile limoneuse"],me=["Goutte à goutte","Aspersion","Submersion","Enrouleur","Pivot","Rampe","Micro aspersion","Couverture intégrale","Goutte à goutte enterré","Gravitaire","Non irrigué","Pas d'irrigation"],De=["Abricotier","Ail","Amandier","Artichaut","Asperge","Aubergine","Avoine","Basilic","Betterave fourragère","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Chou pommé","Ciboulette","Citrouille","Clémentinier","Courgette","Echalote","Endive","Epinard","Fève","Figuier","Fraisier","Framboisier","Gesse","Giroflier","Haricot vert","Houblon","Kiwi","Lavande","Lentille","Luzerne","Maïs doux","Maïs grain","Maïs semence","Maïs silage","Melon","Menthe","Moutarde","Navet","Nectarinier","Noisetier","Noyer","Oignon","Olivier","Orge de brasserie","Orge de printemps","Orge d'hiver","Pêcher","Persil","Pissenlit","Poireau","Pois chiche","Pois de conserve","Pois fourrager","Pois protéagineux","Poivron","Pomme de terre","Pommier","Poirier","Prunier","Pruneau d'Agen","Radis","Raisin de cuve","Raisin de table","Riz","Romarin","Sarrasin","Seigle","Soja","Sorgho","Tabac","Thym","Tomate","Tournesol","Triticale","Vigne","Cardon","Céleri","Cerise","Châtaignier","Colza","Courge","Fénugrec","Groseillier","Lin fibre","Lin oléagineux","Mâche","Millet","Myrtille","Noix de cajou","Paprika","Patate douce","Pistachier","Poisson-Chat","Quinoa","Safran","Sainfoin","Scorsonère","Shallot","Topinambour","Trèfle","Vesce","Fétuque","Ray-grass","Prairie temporaire","Prairie permanente","Jachère","Autre"];function Mt(e){const t=document.getElementById("panel-ident"),n=y,i=n.texture||ue[n.id%ue.length],o=n.irrigation||me[n.id%me.length],s=n.crop||De[0];t.innerHTML=`
    ${St("Nom",n.name||"—","name","text")}
    ${pe("Culture",s,"crop",De)}
    ${ze("Surface",(n.area?`${n.area} ha`:"—")+' <span class="field-computed">(calculé)</span>')}
    ${pe("Texture sol",i,"texture",ue)}
    ${pe("Irrigation",o,"irrigation",me)}
    ${ze("Exploitation",e?e.name:"—")}
  `,ne(t,"name",n.name||"",r=>{W({name:r}),qe(r,{label:"Parcelles",href:"parcelles.html"})}),ne(t,"crop",s,r=>W({crop:r})),ne(t,"texture",i,r=>W({texture:r})),ne(t,"irrigation",o,r=>W({irrigation:r}))}function St(e,t,n,i="text"){const o=(t||"").replace(/"/g,"&quot;");return`
    <div class="panel-row" data-field="${n}">
      <span class="panel-row-key">${e}</span>
      <input type="${i}" class="panel-field-input" data-val value="${o}">
    </div>`}function pe(e,t,n,i){return`
    <div class="panel-row" data-field="${n}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${i.map(o=>`<option${o===t?" selected":""}>${o}</option>`).join("")}
      </select>
    </div>`}function ze(e,t){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${t}</span>
    </div>`}function ne(e,t,n,i){const o=e.querySelector(`[data-field="${t}"] [data-val]`);if(!o)return;const s=()=>{var l;const r=(l=o.value)==null?void 0:l.trim();r&&r!==n&&(n=r,i(r))};o.addEventListener("change",s),o.tagName==="INPUT"&&o.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),o.blur())})}function Ct(e){const t=document.getElementById("panel-geoloc"),n=y.latlngs||I.latlngs,i=Array.isArray(n)&&n.length>=3,o=y.ville||I.ville||(e==null?void 0:e.ville)||"—",s=I.departement||(e==null?void 0:e.departement),r=y.lat??I.lat??(e==null?void 0:e.lat),l=y.lng??I.lng??(e==null?void 0:e.lng);t.innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${o}${s?` (${s})`:""}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${r!=null?r.toFixed(4):"—"}, ${l!=null?l.toFixed(4):"—"}</span>
    </div>
    ${r!=null?`<div class="panel-row">
      <a href="https://www.google.com/maps?q=${r.toFixed(6)},${l.toFixed(6)}" target="_blank" class="itinerary-link">
        <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
      </a>
    </div>`:""}
    <div style="padding:4px 0 4px">
      <a href="parcelle-modifier-contour.html?id=${R}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${i?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function Et(){const e=new Set;return P.filter(n=>y.linkedSensorIds.includes(n.id)).forEach(n=>{const i=H[n.model]||[];_.includes(n.model)||i.forEach(o=>e.add(o.id))}),e}function Oe(e){const t=H[e]||[];return t.length?`<div class="sensor-metric-badges">${t.map(n=>`<span class="sensor-metric-badge" style="--mc:${n.color}">${n.name}</span>`).join("")}</div>`:""}function ye(){const e=document.getElementById("panel-sensors"),t=P.filter(a=>y.linkedSensorIds.includes(a.id)),n=P.filter(a=>a.orgId===I.orgId&&!y.linkedSensorIds.includes(a.id));let i="";if(t.length===0)i+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>';else{const a=t.filter(u=>_.includes(u.model)),d=t.filter(u=>!_.includes(u.model));if(i+=d.map(u=>`
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
    `).join(""),a.length>0){const u={};a.forEach(m=>{const h=m.depth!=null?`${m.depth} cm`:m.model;u[h]||(u[h]=[]),u[h].push(m)}),i+=`<div class="sensor-kit-hd">
        <span class="sensor-kit-hd-label">Kit de tensiomètres</span>
        ${Oe("CHP-15/30")}
      </div>`,Object.entries(u).forEach(([m,h])=>{i+=`<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${m}</div>`,i+=h.map(v=>`
          <div class="sensor-linked-row" style="padding-left:12px">
            <div class="sensor-linked-info">
              <span class="sensor-linked-name">${ee[v.model]||v.model}</span>
              <span class="sensor-linked-detail">${v.model} · ${v.serial}</span>
            </div>
            <button class="remove-sensor-btn icon-btn" data-id="${v.id}" title="Retirer">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        `).join("")})}}const o=t.some(a=>a.model==="PYRANO"),s=[{name:"Évapotranspiration (ETP)",color:"#c090e0"},...o?[]:[{name:"Rayonnement solaire",color:"#f5c842"}],{name:"Température de rosée",color:"#80c8e8"}];i+=`
    <div class="panel-parcel-metrics">
      <div class="panel-parcel-metrics-title">Disponibles via la parcelle</div>
      <div class="sensor-metric-badges">
        ${s.map(a=>`<span class="sensor-metric-badge" style="--mc:${a.color}">${a.name}</span>`).join("")}
      </div>
    </div>
  `,e.innerHTML=i;const r=document.getElementById("sensor-add-row"),l=document.getElementById("add-sensor-select");r&&l&&(n.length>0?(l.innerHTML='<option value="">Ajouter un capteur…</option>'+n.map(a=>`<option value="${a.id}">${ee[a.model]||a.model} — ${a.serial}</option>`).join(""),r.style.display=""):r.style.display="none"),e.querySelectorAll(".remove-sensor-btn").forEach(a=>{a.addEventListener("click",()=>{const d=parseInt(a.dataset.id);W({linkedSensorIds:y.linkedSensorIds.filter(u=>u!==d)}),ye(),V()})});const c=document.getElementById("add-sensor-btn");c&&c.addEventListener("click",()=>{const a=document.getElementById("add-sensor-select"),d=parseInt(a.value);if(!d)return;const u=P.find(m=>m.id===d);if(u){if(!_.includes(u.model)){const m=Et(),v=(H[u.model]||[]).map(f=>f.id).filter(f=>m.has(f));if(v.length>0){const f=v.map(b=>{const w=Object.values(H).flat().find(x=>x.id===b);return(w==null?void 0:w.name)||b});if(!confirm(`Attention : ce capteur (${u.model}) mesure des métriques déjà fournies par un autre capteur :
• ${f.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}W({linkedSensorIds:[...y.linkedSensorIds,d]}),ye(),V()}})}function we(){var r;const e=document.getElementById("panel-integrations"),t=y.integrations||[],n=Ke.filter(l=>!t.includes(l));let i="";t.length===0?i+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':i+=t.map(l=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${l}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(l)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),e.innerHTML=i;const o=document.getElementById("integ-add-row"),s=document.getElementById("add-integ-select");o&&s&&(n.length>0?(s.innerHTML='<option value="">Ajouter une intégration…</option>'+n.map(l=>`<option value="${encodeURIComponent(l)}">${l}</option>`).join(""),o.style.display=""):o.style.display="none"),e.querySelectorAll(".remove-integ-btn").forEach(l=>{l.addEventListener("click",()=>{const c=decodeURIComponent(l.dataset.name);W({integrations:y.integrations.filter(a=>a!==c)}),we()})}),(r=document.getElementById("add-integ-btn"))==null||r.addEventListener("click",()=>{const l=document.getElementById("add-integ-select"),c=decodeURIComponent(l.value);c&&(W({integrations:[...y.integrations,c]}),we())})}let B=null;function Tt(){if(B!==null)return;B=$e(R).linkedMemberIds??he.filter(t=>{var n;return(n=t.parcelIds)==null?void 0:n.includes(R)}).map(t=>t.id)}function le(){var l,c;Tt();const e=document.getElementById("panel-membres"),t=he.filter(a=>B.includes(a.id)),n=((l=document.getElementById("sidebar"))==null?void 0:l.getAttribute("data-role"))==="adherent-reseau",i=e==null?void 0:e.closest(".panel-section");if(n&&t.length===0){i&&(i.style.display="none");return}i&&(i.style.display="");const o=(c=e.closest(".panel-section"))==null?void 0:c.querySelector(".panel-add-row");o&&(o.style.display=n?"none":"");const s=new Set(["propriétaire","admin","agent"]),r=a=>!n||!s.has(a.role);if(t.length?e.innerHTML=t.map(a=>`
      <div class="member-row">
        <div>
          <span class="member-name">${a.prenom} ${a.nom}</span>
          ${n?"":`<span class="member-role-badge">${a.role}</span>`}
        </div>
        ${r(a)?`<button class="remove-membre-btn icon-btn" data-id="${a.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
      </div>
    `).join(""):e.innerHTML='<p class="panel-empty">Aucun membre associé.</p>',!n){const a=document.getElementById("add-membre-select");a&&(a.innerHTML='<option value="">Ajouter un membre…</option>',he.filter(d=>!B.includes(d.id)).forEach(d=>{const u=document.createElement("option");u.value=d.id,u.textContent=`${d.prenom} ${d.nom} (${d.role})`,a.appendChild(u)})),e.querySelectorAll(".remove-membre-btn").forEach(d=>{d.addEventListener("click",()=>{B=B.filter(u=>u!==parseInt(d.dataset.id)),ve(R,{linkedMemberIds:B}),le()})}),document.getElementById("add-membre-btn").onclick=()=>{const d=parseInt(document.getElementById("add-membre-select").value);!d||B.includes(d)||(B.push(d),ve(R,{linkedMemberIds:B}),le())}}}function Te(){const e=document.getElementById("panel-alertes"),t=y.alertes||[],n={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let i="";t.length===0?i+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':i+=t.map((o,s)=>`
      <div class="alert-item">
        <i class="bi ${n[o.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${o.label}</div>
          <div class="alert-item-meta">${o.metric} ${o.condition||""} ${o.threshold||""} ${o.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${s}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),i+='<button id="create-alert-btn" class="action-btn" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=i,e.querySelectorAll(".remove-alert-btn").forEach(o=>{o.addEventListener("click",()=>{const s=parseInt(o.dataset.idx),r=[...y.alertes];r.splice(s,1),W({alertes:r}),Te()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{kt(e)})}function Lt(){const e=[];return P.filter(n=>y.linkedSensorIds.includes(n.id)).forEach(n=>{(H[n.model]||[]).forEach(o=>{e.find(s=>s.id===o.id)||e.push({id:o.id,name:o.name,unit:o.unit})})}),Me.forEach(n=>{e.find(i=>i.id===n.id)||e.push({id:n.id,name:n.name,unit:n.unit})}),e}function kt(e){if(e.querySelector(".alert-create-form"))return;const n=Lt(),i=document.createElement("div");i.className="alert-create-form",i.innerHTML=`
    <div class="alert-form-row">
      <select id="alert-metric" class="panel-add-select">
        <option value="">Métrique…</option>
        ${n.map(o=>`<option value="${o.id}" data-unit="${o.unit}">${o.name}</option>`).join("")}
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
  `,e.appendChild(i),i.querySelector("#alert-metric").addEventListener("change",o=>{const s=o.target.selectedOptions[0];i.querySelector("#alert-unit-label").textContent=(s==null?void 0:s.dataset.unit)||"—"}),i.querySelector("#alert-save-btn").addEventListener("click",()=>{const s=i.querySelector("#alert-metric").value,r=n.find(d=>d.id===s),l=i.querySelector("#alert-condition").value,c=i.querySelector("#alert-threshold").value;if(!s||!c)return;const a={type:"seuil",label:`Alerte ${(r==null?void 0:r.name)||s}`,metric:(r==null?void 0:r.name)||s,condition:l,threshold:c,unit:(r==null?void 0:r.unit)||""};W({alertes:[...y.alertes||[],a]}),Te()}),i.querySelector("#alert-cancel-btn").addEventListener("click",()=>i.remove())}function It(e,t){const n=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),i=Object.assign(document.createElement("a"),{href:URL.createObjectURL(n),download:t});document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(i.href),100)}function Pt(){const e=y.name||I.name||"Parcelle",t=re(y.linkedSensorIds);let n;if(q){const m=U.find(g=>g.id===q),h=P.filter(g=>g.parcelId===q).map(g=>g.id),v=re(h),f=(m==null?void 0:m.name)||"Comparaison";n=[...t.map(g=>({h:`[${e}] ${g.name} (${g.unit})`,gen:g.base})),...v.map(g=>({h:`[${f}] ${g.name} (${g.unit})`,gen:g.base}))]}else n=t.map(m=>({h:`${m.name} (${m.unit})`,gen:m.base}));const i=Se()*6e4,o=te()*6e4,s=J==="custom"&&K?K:new Date,r=J==="custom"&&Y?Y:new Date(s-i),l=Math.min(Math.ceil((s-r)/o)+1,500),c=(s-r)/Math.max(l-1,1),a=["Horodatage",...n.map(m=>m.h)].join(";"),d=Array.from({length:l},(m,h)=>[new Date(r.getTime()+h*c).toISOString().replace("T"," ").slice(0,19),...n.map(f=>f.gen())].join(";")),u=e.replace(/[^\w]/g,"_");It([a,...d].join(`\r
`),`${u}_${J}_${new Date().toISOString().slice(0,10)}.csv`)}function jt(){document.getElementById("panel-actions").innerHTML=`
    <button class="action-btn action-btn--danger"><i class="bi bi-archive"></i> Archiver la parcelle</button>
  `}function At(){const e=xe.find(i=>i.id===I.orgId);if(!(e!=null&&e.lat))return;const t=y.latlngs||I.latlngs,n=L.map("parcel-mini-map",{zoomControl:!1,attributionControl:!1});if(L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(n),Array.isArray(t)&&t.length>=3){const i=L.polygon(t,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(n);n.fitBounds(i.getBounds(),{padding:[10,10]})}else n.setView([e.lat,e.lng],13),L.circleMarker([e.lat,e.lng],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(n)}function Ht(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),n=t.querySelector("i");t.addEventListener("click",()=>{const i=e.classList.toggle("panel-collapsed");t.title=i?"Afficher le panneau":"Masquer le panneau",n.className=i?"bi bi-chevron-left":"bi bi-chevron-right"})}function Ft(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(n=>n.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.pane).classList.add("active"),t.dataset.pane==="tab-journal"&&Ce()})})}const Rt={"previsions-5j":{size:"2x2",title:"Prévisions 5 jours",icon:"bi-calendar3-week",color:"#5b8dd9",render:Ge},weephyt:{size:"2x1",title:"Weephyt",icon:"bi-shield-check",color:"#2d9e5f",render:Ot},cumuls:{size:"1x2",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#e07050",render:Je},bilan:{size:"3x2",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4",render:Jt},gel:{size:"2x2",title:"Suivi du risque de gel",icon:"bi-thermometer-snow",color:"#4ecdc4",render:qt},dpv:{size:"1x2",title:"DPV",icon:"bi-droplet-half",color:"#e07050",render:Nt},thi:{size:"1x2",title:"THI",icon:"bi-heart-pulse",color:"#e0a030",render:Bt},"temp-rosee":{size:"2x1",title:"Température de rosée",icon:"bi-thermometer",color:"#45b7d1",render:Wt},"temp-sol":{size:"2x1",title:"Température du sol",icon:"bi-layers",color:"#bb8fce",render:_t},maizy:{size:"2x1",title:"Maï'zy",icon:"bi-calendar-check",color:"#2d9e5f",render:Vt},tavelure:{size:"2x1",title:"Tavelure Pomme",icon:"bi-exclamation-triangle",color:"#e07050",render:Gt},"suivi-culture":{size:"2x1",title:"Suivi de culture",icon:"bi-flower2",color:"#78d8a0",render:G},decitrait:{size:"2x1",title:"Decitrait",icon:"bi-shield",color:"#6080b0",render:G},"previsions-6h":{size:"2x1",title:"Prévisions à 6 heures",icon:"bi-clock",color:"#5b8dd9",render:G},"previsions-jour":{size:"2x1",title:"Prévisions du jour",icon:"bi-sun",color:"#f5c842",render:G},"previsions-tensio":{size:"2x1",title:"Prévisions tensiométrie",icon:"bi-graph-down",color:"#5b8dd9",render:G},"w-station":{size:"1x1",title:"Station météo",icon:"bi-broadcast",color:"#e07050",render:N("w-station")},"w-thygro":{size:"1x1",title:"Thermo-hygromètre",icon:"bi-thermometer-half",color:"#4ecdc4",render:N("w-thygro")},"w-tsol":{size:"1x1",title:"Thermomètre de sol",icon:"bi-layers",color:"#bb8fce",render:N("w-tsol")},"w-anem":{size:"1x1",title:"Anémomètre",icon:"bi-wind",color:"#7bc4b0",render:N("w-anem")},"w-pyrano":{size:"1x1",title:"Pyranomètre",icon:"bi-sun",color:"#f5c842",render:N("w-pyrano")},"w-lws":{size:"1x1",title:"Humectation foliaire",icon:"bi-droplet",color:"#78d8a0",render:N("w-lws")},"w-par":{size:"1x1",title:"Capteur PAR",icon:"bi-brightness-high",color:"#f0d060",render:N("w-par")},"w-capa":{size:"1x1",title:"Sonde capacitive",icon:"bi-moisture",color:"#f0cc60",render:N("w-capa")},"w-tensio":{size:"1x1",title:"Tensiomètre",icon:"bi-graph-down",color:"#5b8dd9",render:N("w-tensio")},"w-ec":{size:"1x1",title:"Sonde fertirrigation",icon:"bi-plug",color:"#f0a030",render:N("w-ec")},"profil-capteurs":{size:"2x2",title:"Profil capteurs",icon:"bi-bar-chart",color:"#5b8dd9",render:G},"niveau-reservoir":{size:"2x1",title:"Niveau de réservoir (RFU)",icon:"bi-droplet-fill",color:"#0172A4",render:G},"profil-reservoir":{size:"2x2",title:"Profil de réservoir",icon:"bi-clipboard-data",color:"#0172A4",render:G}},_e=()=>`dash-widgets-parcel-${R}`;function ce(){try{const e=JSON.parse(localStorage.getItem(_e()));if(Array.isArray(e)&&e.length)return e}catch{}return Dt()}function Le(e){localStorage.setItem(_e(),JSON.stringify(e))}function Dt(){const e=P.filter(r=>y.linkedSensorIds.includes(r.id)),t=new Set(e.map(r=>r.model)),n=[...t].some(r=>r.startsWith("CAPA-")),i=[...t].some(r=>_.includes(r)),o=e.some(r=>(H[r.model]||[]).some(l=>l.cumul)),s=["previsions-5j","weephyt"];return o&&s.push("cumuls"),(t.has("P+")||t.has("PT")||t.has("SMV")||t.has("P"))&&s.push("w-station"),t.has("TH")&&s.push("w-thygro"),t.has("T_MINI")&&s.push("w-tsol"),t.has("W")&&s.push("w-anem"),t.has("PYRANO")&&s.push("w-pyrano"),t.has("LWS")&&s.push("w-lws"),t.has("T_GEL")&&s.push("gel"),t.has("PAR")&&s.push("w-par"),n&&s.push("w-capa"),i&&s.push("w-tensio"),t.has("EC")&&s.push("w-ec"),(i||n)&&s.push("bilan"),s}function ke(){const e=document.getElementById("dash-grid");if(!e)return;const t=ce();e.innerHTML="",t.forEach(n=>{const i=Rt[n];if(!i)return;const o=document.createElement("div");o.className=`dash-block dash-block--${i.size}`,o.dataset.id=n,o.draggable=!0,o.innerHTML=`
      <div class="dash-block-hd" style="color:${i.color}">
        <span style="display:flex;align-items:center;gap:6px"><i class="bi ${i.icon}"></i> ${i.title}</span>
        <button class="dash-menu-btn" data-wid="${n}" title="Options" aria-label="Options">···</button>
      </div>
      <div class="dash-block-body" id="dblock-${n}"></div>`,e.appendChild(o),i.render(o.querySelector(`#dblock-${n}`))}),e.querySelectorAll(".dash-menu-btn").forEach(n=>{n.addEventListener("click",i=>{var l;i.stopPropagation(),(l=document.querySelector(".dash-dropdown"))==null||l.remove();const o=document.createElement("div");o.className="dash-dropdown",o.innerHTML=`
        <button class="dash-dd-item" data-action="settings" data-wid="${n.dataset.wid}">Paramétrer le widget</button>
        <button class="dash-dd-item dash-dd-remove" data-action="remove" data-wid="${n.dataset.wid}">Retirer le widget</button>`;const s=n.getBoundingClientRect(),r=e.getBoundingClientRect();o.style.top=`${s.bottom-r.top+4}px`,o.style.right=`${r.right-s.right}px`,e.style.position="relative",e.appendChild(o),o.querySelector('[data-action="remove"]').addEventListener("click",()=>{o.remove();const c=ce().filter(a=>a!==n.dataset.wid);Le(c),ke()}),o.querySelector('[data-action="settings"]').addEventListener("click",()=>o.remove()),setTimeout(()=>document.addEventListener("click",()=>o.remove(),{once:!0}),0)})}),Ut(e)}function Ve(e,t=380,n=90){const l=t-28-8,c=n-6-20,a=e.flatMap(w=>w.values);let d=Math.min(...a),u=Math.max(...a);d===u&&(d-=1,u+=1);const m=e[0].values.length,h=w=>(28+w/(m-1)*l).toFixed(1),v=w=>(6+c-(w-d)/(u-d)*c).toFixed(1),f=[.25,.5,.75].map(w=>{const x=(6+w*c).toFixed(1);return`<line x1="28" y1="${x}" x2="${t-8}" y2="${x}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),g=[d,(d+u)/2,u].map(w=>`<text x="25" y="${(+v(w)+3.5).toFixed(0)}" text-anchor="end" font-size="9" fill="var(--txt3)">${w.toFixed(0)}</text>`).join(""),b=e.map(w=>`<path d="${w.values.map(($,T)=>`${T?"L":"M"}${h(T)},${v($)}`).join("")}" fill="none" stroke="${w.color}" stroke-width="1.8" stroke-linejoin="round"/>`).join("");return`<svg width="100%" height="${n}" viewBox="0 0 ${t} ${n}" preserveAspectRatio="none">${g}${f}${b}</svg>`}function zt(e,t,n,i){const d=(g,b)=>{const w=Math.PI+g*Math.PI,x=Math.PI+b*Math.PI,$=(80+60*Math.cos(w)).toFixed(1),T=(90+60*Math.sin(w)).toFixed(1),k=(80+60*Math.cos(x)).toFixed(1),O=(90+60*Math.sin(x)).toFixed(1);return`M${$},${T} A60,60,0,${b-g>.5?1:0},1,${k},${O}`},u=d(0,1),m=t.filter(g=>g.from<e).map(g=>`<path d="${d(g.from,Math.min(g.to,e))}" fill="none" stroke="${g.color}" stroke-width="12" stroke-linecap="butt"/>`).join(""),h=Math.PI+e*Math.PI,v=(80+60*Math.cos(h)).toFixed(1),f=(90+60*Math.sin(h)).toFixed(1);return`<svg width="160" height="100" viewBox="0 0 160 100">
    <path d="${u}" fill="none" stroke="var(--bdr2)" stroke-width="12" stroke-linecap="butt"/>
    ${m}
    <circle cx="${v}" cy="${f}" r="5" fill="white" stroke="var(--txt3)" stroke-width="1.5"/>
    <text x="80" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="var(--txt)">${i}</text>
    <text x="80" y="96" text-anchor="middle" font-size="9" fill="var(--txt3)">${n}</text>
  </svg>`}let ie="AROME";function Ge(e){const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],n=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],o=["#f5c842","#8baac8","#8090a0","#45b7d1","#c070d0"],s=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],r=new Date,l=U.find(u=>u.id===R),c=xe.find(u=>u.id===(l==null?void 0:l.orgId)),a=(l==null?void 0:l.ville)||(c==null?void 0:c.ville)||"—",d=Array.from({length:5},(u,m)=>{const h=new Date(r);h.setDate(h.getDate()+m);const v=Math.floor((R*7+m*3)%11/2.2),f=ie==="ICON_EU"?-1:0;return{lbl:m===0?"Auj.":t[h.getDay()],date:`${h.getDate()} ${n[h.getMonth()]}`,tmax:p(17+f,34+f),tmin:p(4+f,15+f),pluie:v>=3?p(2,18):0,vent:p(10,35),rafales:p(25,70),wi:v}});e.innerHTML=`
    <div class="w-prev5-loc"><i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i> ${a}</div>
    <div class="w-prev5-models">
      <button class="w-prev5-model-btn${ie==="AROME"?" active":""}" data-model="AROME">AROME</button>
      <button class="w-prev5-model-btn${ie==="ICON_EU"?" active":""}" data-model="ICON_EU">ICON EU</button>
    </div>
    <div class="w-prev5-grid">${d.map(u=>`
      <div class="w-prev5-day">
        <div class="w-prev5-daylbl">${u.lbl}</div>
        <div class="w-prev5-date">${u.date}</div>
        <i class="bi ${i[u.wi]} w-prev5-icon" style="color:${o[u.wi]}" title="${s[u.wi]}"></i>
        <div class="w-prev5-row"><i class="bi bi-droplet-fill" style="color:#45b7d1;font-size:9px"></i><span>${u.pluie>0?u.pluie+" mm":"—"}</span></div>
        <div class="w-prev5-row w-prev5-tmax"><i class="bi bi-thermometer-high" style="font-size:9px"></i>${u.tmax}°</div>
        <div class="w-prev5-row w-prev5-tmin"><i class="bi bi-thermometer-low" style="font-size:9px"></i>${u.tmin}°</div>
        <div class="w-prev5-row" style="color:var(--txt3)"><i class="bi bi-wind" style="font-size:9px"></i>${u.vent}</div>
        <div class="w-prev5-row" style="color:var(--txt3);font-size:9px"><i class="bi bi-arrow-up-right" style="font-size:9px"></i>${u.rafales}</div>
      </div>`).join("")}</div>
    <a href="javascript:void 0" class="w-prev5-more">Voir plus de prévisions →</a>`,e.querySelectorAll(".w-prev5-model-btn").forEach(u=>{u.addEventListener("click",()=>{ie=u.dataset.model,Ge(e)})})}function Ot(e){const t=new Date,n=y.crop||I.crop||"",i=[{label:"Fongicide céréales",seed:7},{label:"Herbicide",seed:3}],o=Array.from({length:12},(l,c)=>{const a=new Date(t);return a.setHours(a.getHours()+c),a}),s=l=>`${String(l.getHours()).padStart(2,"0")}h`,r=l=>{const c=o.map((a,d)=>(l.seed*17+d*5)%11<6);return o.map((a,d)=>`
      <div class="w-weephyt-dot-wrap" title="${s(a)} — ${c[d]?"Fenêtre OK":"Fenêtre non OK"}">
        <div class="w-weephyt-tl-dot" style="background:${c[d]?"#2d9e5f":"#e07050"}"></div>
        <div class="w-weephyt-tl-lbl">${d%3===0?s(a):""}</div>
      </div>`).join("")};e.innerHTML=`<div class="w-weephyt-wrap">
    <div class="w-weephyt-tl-legend"><span style="color:#2d9e5f">● OK</span><span style="color:#e07050">● Non OK</span></div>
    ${i.map(l=>`
      <div class="w-weephyt-family">
        <div class="w-weephyt-family-label">${l.label}</div>
        <div class="w-weephyt-timeline">${r(l)}</div>
      </div>`).join("")}
    <div class="w-weephyt-src">Via <strong>Weephyt</strong> · ${n||"—"}</div>
  </div>`}function Je(e){const t=P.filter(l=>y.linkedSensorIds.includes(l.id)),n=new Set(t.flatMap(l=>(H[l.model]||[]).map(c=>c.id))),i=new Date(new Date().getFullYear(),0,1).toISOString().slice(0,10),o=`w-cumuls-hidden-parcel-${R}`;let s;try{s=new Set(JSON.parse(localStorage.getItem(o))||[])}catch{s=new Set}const r=[{id:"etp",label:"ETP",value:j(20,80).toFixed(1),unit:"mm",color:"#c090e0",icon:"bi-sun",show:!0},{id:"pluie",label:"Pluie",value:p(10,50),unit:"mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy",show:n.has("pluie")},{id:"djc",label:"DJC",value:p(40,180),unit:"°j",color:"#e07050",icon:"bi-thermometer-half",show:n.has("temp")},{id:"hfroid",label:"Heures froides",value:p(5,40),unit:"h",color:"#5b8dd9",icon:"bi-snow",show:n.has("temp")},{id:"humec",label:"Humectation",value:j(2,20).toFixed(1),unit:"h",color:"#78d8a0",icon:"bi-droplet",show:n.has("humec")},{id:"enso",label:"Ensoleillement",value:j(3,9).toFixed(1),unit:"h/j",color:"#f5c842",icon:"bi-brightness-high",show:n.has("rayonnement")}].filter(l=>l.show&&!s.has(l.id));e.innerHTML=`
    <div class="w-cumuls-date-row"><span class="w-cumuls-date-lbl">Depuis le</span><span class="w-cumuls-date-val">${i.split("-").reverse().join("/")}</span></div>
    <div class="w-cumuls-list">${r.map(l=>`
      <div class="w-cumul-item" data-cid="${l.id}">
        <i class="bi ${l.icon} w-cumul-icon" style="color:${l.color}"></i>
        <div class="w-cumul-body">
          <div class="w-cumul-lbl">${l.label}</div>
          <div class="w-cumul-val" style="color:${l.color}">${l.value}<span class="w-cumul-unit"> ${l.unit}</span></div>
        </div>
        <button class="w-cumul-del" data-cid="${l.id}" title="Retirer">×</button>
      </div>`).join("")}
    </div>`,e.querySelectorAll(".w-cumul-del").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation(),s.add(l.dataset.cid),localStorage.setItem(o,JSON.stringify([...s])),Je(e)})})}function qt(e){if(!P.filter(u=>y.linkedSensorIds.includes(u.id)).some(u=>u.model==="T_GEL")){e.innerHTML='<div class="dash-empty">Capteur T_GEL non lié</div>';return}const n=25,i=j(0,5),o=Array.from({length:n},(u,m)=>+(i+m*.18+j(-.8,.8)).toFixed(1)),s=o.map(u=>+(u-j(1,2.5)).toFixed(1)),r=Ve([{values:o,color:"#e07050"},{values:s,color:"#4ecdc4"}],380,100),l=o[n-1],c=s[n-1],a=p(5,8),d=String(Math.floor(Math.random()*60)).padStart(2,"0");e.innerHTML=`<div class="w-gel-wrap">
    <div class="w-gel-legend">
      <span style="color:#e07050"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sèche</span>
      <span style="color:#4ecdc4"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. humide</span>
      <span style="font-size:10px;color:var(--txt3)">12 dernières heures</span>
    </div>
    <div class="w-gel-chart">${r}</div>
    <div class="w-gel-cards">
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. sèche </span><span class="w-gel-card-val" style="color:#e07050">${l}°C</span></div>
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. humide </span><span class="w-gel-card-val" style="color:#4ecdc4">${c}°C</span></div>
    </div>
    <div class="w-gel-meteo">
      <div class="w-gel-meteo-row"><i class="bi bi-sunrise" style="color:#f5c842"></i><span>Lever du soleil</span><strong>${a}h${d}</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-cloud" style="color:#8090a0"></i><span>Couverture nuageuse</span><strong>${p(20,80)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-droplet-half" style="color:#4ecdc4"></i><span>Humidité</span><strong>${p(60,90)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-wind" style="color:#7bc4b0"></i><span>Vent moyen</span><strong>${p(5,25)} km/h</strong></div>
    </div>
  </div>`}function Nt(e){const t=P.filter(m=>y.linkedSensorIds.includes(m.id));if(!t.some(m=>{const h=H[m.model]||[];return h.some(v=>v.id==="temp")&&h.some(v=>v.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const i=j(18,30),o=p(40,85),r=+(.611*Math.exp(17.27*i/(i+237.3))*(1-o/100)).toFixed(2),l=Math.min(r/2,1),c=r<.4?"#5b8dd9":r<.8?"#2d9e5f":r<1.2?"#f5a030":"#e07050",a=r<.4?"Transpiration faible":r<.8?"Transpiration optimale":r<1.2?"Forte transpiration":"Stress hydrique",d=[{from:0,to:.2,color:"#5b8dd9"},{from:.2,to:.4,color:"#45b7d1"},{from:.4,to:.6,color:"#2d9e5f"},{from:.6,to:.8,color:"#a0c840"},{from:.8,to:.9,color:"#f5a030"},{from:.9,to:1,color:"#e07050"}],u=t.find(m=>{const h=H[m.model]||[];return h.some(v=>v.id==="temp")&&h.some(v=>v.id==="humidite")});e.innerHTML=`<div class="w-dpv-wrap">
    <div class="w-dpv-gauge" style="color:${c}">${zt(l,d,a,r+" kPa")}</div>
    <div class="w-dpv-details">
      <div class="w-dpv-row"><i class="bi bi-thermometer-half" style="color:#e07050"></i> ${i.toFixed(1)} °C</div>
      <div class="w-dpv-row"><i class="bi bi-droplet-half" style="color:#4ecdc4"></i> ${o} %</div>
    </div>
    ${u?`<div class="w-sensor-src">${ee[u.model]||u.model} · ${u.serial}</div>`:""}
  </div>`}function Bt(e){if(!P.filter(m=>y.linkedSensorIds.includes(m.id)).some(m=>{const h=H[m.model]||[];return h.some(v=>v.id==="temp")&&h.some(v=>v.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const i=j(20,35),o=p(45,90),s=+(i-.55*(1-o/100)*(i-14.5)).toFixed(0),r=s<68?"#2d9e5f":s<72?"#f5c842":s<79?"#f5a030":"#e07050",l=s<68?"Confort":s<72?"Stress léger":s<79?"Stress modéré":"Stress sévère",c=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],a=new Date,d=Array.from({length:3},(m,h)=>{const v=new Date(a);return v.setDate(v.getDate()+h+1),{day:c[v.getDay()],m:p(64,72),j:p(68,80),s:p(62,70)}}),u=m=>m<68?"#2d9e5f":m<72?"#f5c842":"#f5a030";e.innerHTML=`<div class="w-thi-wrap">
    <div class="w-thi-header">
      <div class="w-thi-score" style="color:${r}">
        <div class="w-thi-val">${s}</div>
        <div class="w-thi-status">${l}</div>
      </div>
      <button class="w-thi-info-btn" title="Légende THI"><i class="bi bi-info-circle"></i></button>
    </div>
    <div class="w-thi-details">
      <div class="w-thi-row"><i class="bi bi-thermometer-half" style="color:#e07050"></i> ${i.toFixed(1)} °C</div>
      <div class="w-thi-row"><i class="bi bi-droplet-half" style="color:#4ecdc4"></i> ${o} %</div>
    </div>
    <div class="w-thi-forecast">
      <div class="w-thi-fc-label">Prévisions</div>
      ${d.map(m=>`<div class="w-thi-fc-row">
        <span class="w-thi-fc-day">${m.day}</span>
        <span class="w-thi-fc-val" style="color:${u(m.m)}">${m.m}</span>
        <span class="w-thi-fc-val" style="color:${u(m.j)}">${m.j}</span>
        <span class="w-thi-fc-val" style="color:${u(m.s)}">${m.s}</span>
      </div>`).join("")}
      <div class="w-thi-fc-legend"><span>Matin</span><span>Journée</span><span>Soir</span></div>
    </div>
  </div>`,e.querySelector(".w-thi-info-btn").addEventListener("click",m=>{m.stopPropagation();const h=e.querySelector(".w-thi-legend");if(h){h.remove();return}const v=document.createElement("div");v.className="w-thi-legend",v.innerHTML=`
      <div class="w-thi-legend-title">Échelle THI</div>
      <div class="w-thi-legend-row" style="color:#2d9e5f"><span class="w-thi-legend-range">&lt; 68</span><span>Confort</span></div>
      <div class="w-thi-legend-row" style="color:#f5c842"><span class="w-thi-legend-range">68 – 71</span><span>Stress léger</span></div>
      <div class="w-thi-legend-row" style="color:#f5a030"><span class="w-thi-legend-range">72 – 78</span><span>Stress modéré</span></div>
      <div class="w-thi-legend-row" style="color:#e07050"><span class="w-thi-legend-range">≥ 79</span><span>Stress sévère</span></div>`,e.querySelector(".w-thi-wrap").insertBefore(v,e.querySelector(".w-thi-details"))})}function Wt(e){if(!P.filter(c=>y.linkedSensorIds.includes(c.id)).some(c=>{const a=H[c.model]||[];return a.some(d=>d.id==="temp")&&a.some(d=>d.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const i=72,o=j(14,22),s=Array.from({length:i},(c,a)=>+(o+6*Math.sin(a/24*2*Math.PI-Math.PI/2)+j(-.5,.5)).toFixed(1)),r=Array.from({length:i},(c,a)=>Math.max(30,Math.min(100,70-15*Math.sin(a/24*2*Math.PI-Math.PI/2)+j(-3,3)))),l=s.map((c,a)=>{const d=r[a]/100,u=17.27,m=237.3,h=Math.log(d)+u*c/(m+c);return+(m*h/(u-h)).toFixed(1)});e.innerHTML=`<div class="w-temprosee-wrap">
    ${Ve([{values:s,color:"#e07050"},{values:l,color:"#45b7d1"}],380,100)}
    <div class="w-temprosee-legend">
      <span style="color:#e07050"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Température (${s[i-1]}°C)</span>
      <span style="color:#45b7d1"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Point de rosée (${l[i-1]}°C)</span>
      <span style="font-size:10px;color:var(--txt3)">3 derniers jours</span>
    </div>
  </div>`}function _t(e){if(!P.filter(S=>y.linkedSensorIds.includes(S.id)).some(S=>(H[S.model]||[]).some(D=>D.id==="tsol"))){e.innerHTML='<div class="dash-empty">Capteur T. sol requis</div>';return}const i=48,o=j(14,20),s=Array.from({length:i},(S,D)=>+(o+3*Math.sin(D/24*2*Math.PI-Math.PI/2)+j(-.4,.4)).toFixed(1)),r=15,l=22,c=380,a=100,d=28,u=8,m=6,h=20,v=c-d-u,f=a-m-h,g=[...s,r,l],b=Math.min(...g)-1,w=Math.max(...g)+1,x=S=>(d+S/(i-1)*v).toFixed(1),$=S=>(m+f-(S-b)/(w-b)*f).toFixed(1),T=+$(r),k=+$(l),O=[.25,.5,.75].map(S=>{const D=(m+S*f).toFixed(1);return`<line x1="${d}" y1="${D}" x2="${c-u}" y2="${D}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),z=s.map((S,D)=>`${D?"L":"M"}${x(D)},${$(S)}`).join("");e.innerHTML=`<div class="w-tsol-wrap">
    <svg width="100%" height="${a}" viewBox="0 0 ${c} ${a}" preserveAspectRatio="none">
      ${O}
      <rect x="${d}" y="${k.toFixed(1)}" width="${v}" height="${(T-k).toFixed(1)}" fill="rgba(45,158,95,.1)"/>
      <line x1="${d}" y1="${T.toFixed(1)}" x2="${c-u}" y2="${T.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <line x1="${d}" y1="${k.toFixed(1)}" x2="${c-u}" y2="${k.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <path d="${z}" fill="none" stroke="#bb8fce" stroke-width="2" stroke-linejoin="round"/>
      <text x="${d-3}" y="${m+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${w.toFixed(0)}</text>
      <text x="${d-3}" y="${m+f+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${b.toFixed(0)}</text>
    </svg>
    <div class="w-tsol-legend">
      <span style="color:#bb8fce"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sol · ${s[i-1]}°C</span>
      <span style="color:#2d9e5f;font-size:10px"><i class="bi bi-square-fill" style="opacity:.3"></i> Zone optimale ${r}–${l}°C</span>
      <span style="font-size:10px;color:var(--txt3)">48 dernières heures</span>
    </div>
  </div>`}function Vt(e){const t=(y.crop||I.crop||"").toLowerCase();if(!t.includes("maïs")&&!t.includes("mais")){e.innerHTML='<div class="dash-empty">Culture Maïs requise</div>';return}const n=[{name:"Farmflex 253",target:1320},{name:"DKC 3230",target:1380},{name:"Ronaldinio",target:1290},{name:"Banguy",target:1350}],i=n[R%n.length],o=I.degresJour||p(600,1200),s=Math.min(o/i.target,1),r=Math.max(0,i.target-o),l=new Date,c=Math.round(r/10),a=new Date(l);a.setDate(a.getDate()+Math.max(0,c-5));const d=new Date(l);d.setDate(d.getDate()+c+5);const u=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],m=h=>`${h.getDate()} ${u[h.getMonth()]}`;e.innerHTML=`<div class="w-maizy-wrap">
    <div class="w-maizy-title">Récolte prévisionnelle</div>
    <div class="w-maizy-dates">${m(a)} — ${m(d)}</div>
    <div class="w-maizy-bar-wrap">
      <div class="w-maizy-bar-track"><div class="w-maizy-bar-fill" style="width:${(s*100).toFixed(1)}%"></div></div>
      <div class="w-maizy-bar-pct">${(s*100).toFixed(0)} %</div>
    </div>
    <div class="w-maizy-dj">
      <span class="w-maizy-dj-val">${o.toFixed?o.toFixed(1):o}</span>
      <span class="w-maizy-dj-sep"> / ${i.target} DJ</span>
      <span class="w-maizy-dj-vari">${i.name}</span>
    </div>
    <a class="w-maizy-link" href="#">Voir le détail <i class="bi bi-arrow-right"></i></a>
  </div>`}function Gt(e){const t=(y.crop||I.crop||"").toLowerCase();if(!t.includes("pommier")&&!t.includes("pomme")){e.innerHTML='<div class="dash-empty">Culture Pommier requise</div>';return}const n=new Date,i=new Date(n);i.setDate(i.getDate()-p(2,8));const o=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=d=>`${d.getDate()} ${o[d.getMonth()]}`,r=p(8,24),l=p(80,280),c=l>200?"Élevé":l>120?"Modéré":"Léger",a=l>200?"#e07050":l>120?"#f5a030":"#2d9e5f";e.innerHTML=`<div class="w-tav-wrap">
    <div class="w-tav-ep">Dernier épisode · <strong>${s(i)}</strong></div>
    <div class="w-tav-stats">
      <div class="w-tav-stat"><span class="w-tav-stat-val">${r}h</span><span class="w-tav-stat-lbl">Durée</span></div>
      <div class="w-tav-stat"><span class="w-tav-stat-val">${l} DH</span><span class="w-tav-stat-lbl">Degrés-heures</span></div>
    </div>
    <div class="w-tav-risk" style="color:${a}">
      <i class="bi bi-circle-fill" style="font-size:8px;vertical-align:middle"></i>
      Risque d'infection estimé <strong>${c}</strong>
    </div>
    <a class="w-maizy-link" href="#">Afficher l'historique <i class="bi bi-arrow-right"></i></a>
  </div>`}function G(e){e.innerHTML=`<div class="dash-empty" style="padding-top:20px">
    <i class="bi bi-hourglass" style="font-size:20px;opacity:.3;display:block;margin-bottom:6px"></i>
    Widget bientôt disponible
  </div>`}function N(e){return t=>{const n=P.filter(c=>y.linkedSensorIds.includes(c.id)),i={"w-station":c=>["P+","PT","SMV","P"].includes(c.model),"w-thygro":c=>c.model==="TH","w-tsol":c=>c.model==="T_MINI","w-anem":c=>c.model==="W","w-pyrano":c=>c.model==="PYRANO","w-lws":c=>c.model==="LWS","w-par":c=>c.model==="PAR","w-capa":c=>c.model.startsWith("CAPA-"),"w-tensio":c=>_.includes(c.model),"w-ec":c=>c.model==="EC"},o=n.find(i[e]||(()=>!1));if(!o){t.innerHTML='<div class="dash-empty">Aucun capteur compatible lié</div>';return}const s=H[o.model]||[],l=({"w-station":()=>{const c=[];return s.some(a=>a.id==="temp")&&c.push({label:"Température",val:p(10,30)+" °C",color:"#e07050",icon:"bi-thermometer-half"}),s.some(a=>a.id==="pluie")&&c.push({label:"Pluie 24h",val:p(0,14)+" mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy"}),s.some(a=>a.id==="humidite")&&c.push({label:"Humidité",val:p(40,90)+" %",color:"#4ecdc4",icon:"bi-droplet-half"}),c},"w-thygro":()=>[{label:"Température",val:p(10,30)+" °C",color:"#e07050",icon:"bi-thermometer-half"},{label:"Humidité",val:p(40,90)+" %",color:"#4ecdc4",icon:"bi-droplet-half"}],"w-tsol":()=>[{label:"Temp. sol",val:p(8,22)+" °C",color:"#bb8fce",icon:"bi-layers"}],"w-anem":()=>[{label:"Vitesse",val:p(0,40)+" km/h",color:"#7bc4b0",icon:"bi-wind"},{label:"Direction",val:["N","NE","E","SE","S","SO","O","NO"][p(0,7)],color:"#7bc4b0",icon:"bi-compass"}],"w-pyrano":()=>[{label:"Rayonnement",val:p(100,900)+" W/m²",color:"#f5c842",icon:"bi-sun"}],"w-lws":()=>[{label:"Humectation",val:j(0,12).toFixed(1)+" h/j",color:"#78d8a0",icon:"bi-droplet"}],"w-par":()=>[{label:"PAR",val:p(100,2e3)+" µmol/m²/s",color:"#f0d060",icon:"bi-brightness-high"}],"w-capa":()=>s.filter(c=>c.id.startsWith("vwc")).slice(0,3).map(c=>({label:c.name,val:p(15,45)+" %vol",color:c.color,icon:"bi-moisture"})),"w-tensio":()=>[{label:"Potentiel hydrique",val:p(10,150)+" kPa",color:"#5b8dd9",icon:"bi-graph-down"}],"w-ec":()=>[{label:"Conductivité",val:j(.1,3).toFixed(2)+" mS/cm",color:"#f0a030",icon:"bi-plug"}]}[e]||(()=>[]))();t.innerHTML=`
      <div class="w-sensor-rows">${l.map(c=>`
        <div class="w-sensor-row">
          <i class="bi ${c.icon}" style="color:${c.color};flex-shrink:0"></i>
          <span class="w-sensor-val" style="color:${c.color}">${c.val}</span>
          <span class="w-sensor-lbl">${c.label}</span>
        </div>`).join("")}</div>
      <div class="w-sensor-src">${ee[o.model]||o.model} · ${o.serial}</div>`}}function Jt(e){const t=j(20,80),n=j(15,60),i=(y.irrigationEvents||[]).reduce((l,c)=>l+(c.mm||0),0),o=Math.max(0,t+i-n),s=t+i-n-o,r=s>=0?"var(--ok)":"var(--err)";e.innerHTML=`<div style="display:flex;gap:16px;align-items:flex-start;height:100%">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;flex:1">
      ${ae("Pluie",t.toFixed(0),"mm","#45b7d1","bi-cloud-rain-heavy","7 derniers jours")}
      ${ae("ETP",n.toFixed(1),"mm","#c090e0","bi-sun","7 derniers jours")}
      ${ae("Irrigation",i.toFixed(0),"mm","#0172A4","bi-droplet-fill","Cumulé")}
      ${ae("Drainage",o.toFixed(0),"mm","#7bc4b0","bi-arrow-down-circle","Estimé")}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:0 0 140px;gap:4px;padding:8px;background:var(--bg);border-radius:8px;border:1px solid var(--bdr)">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:var(--txt3)">Bilan net</div>
      <div style="font-size:36px;font-weight:700;color:${r}">${s>=0?"+":""}${s.toFixed(0)}</div>
      <div style="font-size:13px;color:${r};font-weight:600">mm</div>
      <div style="font-size:11px;color:var(--txt3);margin-top:4px">7 derniers jours</div>
    </div>
  </div>`}function ae(e,t,n,i,o,s){return`<div style="background:var(--bg);border:1px solid var(--bdr);border-radius:8px;padding:10px 12px">
    <div style="font-size:11px;color:${i};font-weight:600;display:flex;align-items:center;gap:5px;margin-bottom:4px"><i class="bi ${o}"></i> ${e}</div>
    <div style="font-size:22px;font-weight:700;color:var(--txt)">${t} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${n}</span></div>
    <div style="font-size:10px;color:var(--txt3);margin-top:2px">${s}</div>
  </div>`}function Ut(e){let t=null;e.querySelectorAll(".dash-block").forEach(n=>{n.addEventListener("dragstart",i=>{t=n,i.dataTransfer.effectAllowed="move",setTimeout(()=>n.classList.add("dash-drag-ghost"),0)}),n.addEventListener("dragend",()=>{n.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(i=>i.classList.remove("dash-drag-over")),t=null,Le([...e.querySelectorAll(".dash-block")].map(i=>i.dataset.id))}),n.addEventListener("dragover",i=>{i.preventDefault(),!(!t||n===t)&&(i.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(o=>o.classList.remove("dash-drag-over")),n.classList.add("dash-drag-over"))}),n.addEventListener("dragleave",()=>{n.classList.remove("dash-drag-over")}),n.addEventListener("drop",i=>{if(i.preventDefault(),!t||n===t)return;n.classList.remove("dash-drag-over");const o=[...e.querySelectorAll(".dash-block")],s=o.indexOf(t),r=o.indexOf(n);s<r?n.after(t):n.before(t)})})}
