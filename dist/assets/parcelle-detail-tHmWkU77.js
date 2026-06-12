import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as ae}from"./plots-DHZTuoR0.js";import{s as T}from"./sensors-CS05Ml5Z.js";import{o as Ne}from"./orgs-DnFmvGlp.js";import{m as te}from"./members-CuDabgg3.js";import{u as dt}from"./breadcrumb-CzFWtd6d.js";import{d as ie,c as Be}from"./store-BGemiHCf.js";import{I as _,g as Bt,s as ut}from"./irrigations-C22Dtsoo.js";import{S as kt,a as Ae,I as mt,E as At}from"./constants-D_Yu58_o.js";const pt=new URLSearchParams(window.location.search),I=parseInt(pt.get("id")),E=ae.find(e=>e.id===I);function $(e,t){return Math.floor(Math.random()*(t-e+1))+e}function D(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}const Oe=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>D(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",base:()=>$(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#72B0D8",base:()=>$(2,16),isCumul:!1}],F={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>D(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],SMV:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>D(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)}],"CHP-15/30":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CHP-30/60":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CHP-60/90":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CAPA-30-3":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>$(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>$(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>$(15,45)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CAPA-60-6":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>$(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>$(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>$(15,45)},{id:"vwc40",name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",base:()=>$(17,43)},{id:"vwc50",name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",base:()=>$(18,42)},{id:"vwc60",name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",base:()=>$(18,42)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],T_MINI:[{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],LWS:[{id:"humec",name:"Humectation foliaire",unit:"h",color:"#00887E",base:()=>$(0,12)}],T_GEL:[{id:"tseche",name:"Temp. sèche",unit:"°C",color:"#23B19B",base:()=>$(-2,12)},{id:"thumide",name:"Temp. humide",unit:"°C",color:"#5E88EC",base:()=>$(-4,10)}],W:[{id:"_vent",name:"Vent",unit:"km/h · direction",color:"#7bc4b0",isWindComposite:!0,base:()=>$(0,40)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>D(.1,3)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>$(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>$(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}],PAR:[{id:"par",name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#c47a00",base:()=>$(0,2e3)}]},W=["CHP-15/30","CHP-30/60","CHP-60/90"],Le=[{name:"Tensiomètre (CHP)",models:new Set(["CHP-15/30","CHP-30/60","CHP-60/90"])},{name:"Sonde capacitive (CAPA)",models:new Set(["CAPA-30-3","CAPA-60-6"])},{name:"Sonde fertirrigation (EC)",models:new Set(["EC"])},{name:"Thermomètre de sol (T_MINI)",models:new Set(["T_MINI"])}];function Pe(e){return Le.find(t=>t.models.has(e))||null}const jt={"CAPA-30-3":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"}],"CAPA-60-6":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"},{depth:40,label:"40 cm",vwcColor:"#949494",tsolColor:"#804828"},{depth:50,label:"50 cm",vwcColor:"#870021",tsolColor:"#603818"},{depth:60,label:"60 cm",vwcColor:"#F608C2",tsolColor:"#402810"}]},Ve=["CAPA-30-3","CAPA-60-6"],Z={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function Tt(e,t=null,i=null,n=null){const a=Math.max(2,Math.min(200,Math.floor(ue()/we()))),s=Array.from({length:a},()=>$(5,35)),l=s.map(P=>Math.min(P+$(3,18),80)),u=Array.from({length:a},()=>$(0,359)),m=600,r=200,d=46,c=16,o=16,p=28,v=m-d-c,h=r-o-p,f=Math.ceil(Math.max(...l)/10)*10||50,b=P=>d+P/Math.max(a-1,1)*v,g=P=>o+h-P/f*h,w=l.map((P,z)=>`${b(z).toFixed(1)},${g(P).toFixed(1)}`).join("L"),y=[...s].reverse().map((P,z)=>`${b(a-1-z).toFixed(1)},${g(P).toFixed(1)}`).join("L"),S=`M${w}L${y}Z`,C=s.map((P,z)=>`${z?"L":"M"}${b(z).toFixed(1)},${g(P).toFixed(1)}`).join(""),A=[.25,.5,.75].map(P=>{const z=(o+h-P*h).toFixed(1);return`<line x1="${d}" y1="${z}" x2="${m-c}" y2="${z}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),B=[0,.5,1].map(P=>{const z=o+h-P*h;return`<text x="${d-4}" y="${(z+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(P*f)}</text>`}).join(""),M=`<line x1="${d}" y1="${o+h}" x2="${m-c}" y2="${o+h}" stroke="var(--bdr2)" stroke-width="1"/>`,q=Math.max(1,Math.floor(a/6));let k="";for(let P=0;P<a;P+=q){const z=(a-1-P)/Math.max(a-1,1)*ue();k+=`<text x="${b(P).toFixed(1)}" y="${(o+h+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${$e(z)}</text>`}const j=Math.max(1,Math.round(a/25)),H=[];for(let P=0;P<a;P+=j){const z=b(P).toFixed(1),Mt=(o+h*.35).toFixed(1);H.push(`<g transform="translate(${z},${Mt}) rotate(${u[P]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const R=document.createElement("div");R.className="chart-card",n&&(R.dataset.cardKey=n,R.draggable=!0);const N=t?`<span class="chart-card-source">${t}</span>`:"",he=i!=null?`<span class="chart-card-emission">il y a ${i} min</span>`:"";R.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
      <div class="chart-card-meta">${N}${he}</div>
    </div>
    <svg width="100%" height="${r}" viewBox="0 0 ${m} ${r}" preserveAspectRatio="none">
      ${B}${A}${M}${k}
      <path d="${S}" fill="#7bc4b0" opacity=".18"/>
      <path d="${C}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${H.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(R)}const It=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let x={};function Lt(){const e=Be(I);if(x={...E,...e},!x.linkedSensorIds){const n=T.filter(a=>a.parcelIds.includes(I)).map(a=>a.id);x.linkedSensorIds=e.linkedSensorIds??n}x.integrations||(x.integrations=[...E.integrations||[]]),x.alertes||(x.alertes=[]);const t=T.filter(n=>x.linkedSensorIds.includes(n.id)),i=Le.find(n=>t.some(a=>n.models.has(a.model)));i&&Le.some(a=>a!==i&&t.some(s=>a.models.has(s.model)))&&(x.linkedSensorIds=x.linkedSensorIds.filter(a=>{const s=T.find(u=>u.id===a);if(!s)return!0;const l=Pe(s.model);return!l||l===i}),ie(I,{linkedSensorIds:x.linkedSensorIds}))}function O(e){Object.assign(x,e),Object.assign(E,e),ie(I,e)}let X="7d",ce=null,de=null;function ue(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return X==="custom"&&ce&&de?Math.max(60,Math.round((de-ce)/6e4)):e[X]??10080}function we(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Pt(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function Ht(){const e=ue(),t=we();return Math.max(2,Math.min(200,Math.floor(e/t)))}const Ge={Cumuls:"cumuls","Maï'zy":"maizy","Suivi de culture":"suivi-culture",Weephyt:"weephyt",Decitrait:"decitrait","Tavelure Pomme":"tavelure",DPV:"dpv",THI:"thi","Température de rosée":"temp-rosee","Température du sol":"temp-sol","Rayonnement solaire":"w-pyrano",Gel:"gel","Prévisions à 5 jours":"previsions-5j","Prévisions à 6 heures":"previsions-6h","Prévisions du jour":"previsions-jour","Prévisions de tensiométrie":"previsions-tensio",Anémomètre:"w-anem","Capteur d'humectation foliaire":"w-lws","Capteur PAR":"w-par",Pyranomètre:"w-pyrano","Station météo":"w-station","Station Météo Virtuelle":"w-station","Thermomètre de sol":"w-tsol","Thermomètre-Hygromètre":"w-thygro","Bilan hydrique":"bilan",Irrigations:"irrigations","Sonde capacitive":"w-capa",Tensiomètre:"w-tensio","Sonde de fertirrigation":"w-ec","Profil capteurs":"profil-capteurs","Niveau de réservoir en eau utilisable":"niveau-reservoir","Profil de niveau de réservoir":"profil-reservoir"},qt=[{title:"Cumuls",items:["Cumuls"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Weephyt","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire","Gel"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Irrigation",items:["Bilan hydrique","Irrigations","Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]}];function Ft(){const e=T.filter(r=>x.linkedSensorIds.includes(r.id)),t=new Set(e.map(r=>r.model)),i=(x.crop||E.crop||"").toLowerCase(),n=pe(),a=e.some(r=>{const d=F[r.model]||[];return d.some(c=>c.id==="temp")&&d.some(c=>c.id==="humidite")}),s=e.some(r=>(F[r.model]||[]).some(d=>d.id==="tsol")),l=e.some(r=>(F[r.model]||[]).some(d=>d.cumul)),u=r=>Ge[r]?r==="Gel"?t.has("T_GEL"):r==="Maï'zy"?i.includes("maïs")||i.includes("mais"):r==="Tavelure Pomme"?i.includes("pommier"):r==="Station météo"?t.has("P+")||t.has("PT")||t.has("P"):r==="Station Météo Virtuelle"?t.has("SMV"):r==="Thermomètre-Hygromètre"?t.has("TH"):r==="Thermomètre de sol"?t.has("T_MINI")||s:r==="Anémomètre"?t.has("W"):r==="Pyranomètre"||r==="Rayonnement solaire"?t.has("PYRANO"):r==="Capteur d'humectation foliaire"?t.has("LWS"):r==="Capteur PAR"?t.has("PAR"):r==="Bilan hydrique"?[...t].some(c=>c.startsWith("CAPA-"))||[...t].some(c=>W.includes(c)):r==="Irrigations"?!0:r==="Sonde capacitive"?[...t].some(c=>c.startsWith("CAPA-")):r==="Tensiomètre"?[...t].some(c=>W.includes(c)):r==="Sonde de fertirrigation"?t.has("EC"):r==="DPV"||r==="THI"||r==="Température de rosée"?a:r==="Température du sol"?s:r==="Cumuls"?l:!0:!0,m=document.createElement("div");m.className="modal add-modal",m.innerHTML=`
    <div class="add-modal-content" style="max-width:520px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter un widget</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      ${qt.map(r=>{const d=r.items.filter(u);return d.length?`
        <div class="add-modal-section">
          <div class="add-modal-section-label">${r.title}</div>
          <div class="wcat-list">
            ${d.map(c=>{const o=Ge[c],p=o&&n.includes(o);return`
              <div class="wcat-item">
                <span>${c}</span>
                ${p?'<span class="wcat-already"><i class="bi bi-check2"></i> Ajouté</span>':`<button class="wcat-add-btn" type="button" data-wid="${o}"><i class="bi bi-plus-circle"></i> Ajouter</button>`}
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")}
    </div>`,m.addEventListener("click",r=>{r.target===m&&m.remove()}),m.querySelector(".add-modal-close").addEventListener("click",()=>m.remove()),m.querySelectorAll(".wcat-add-btn").forEach(r=>{r.addEventListener("click",()=>{const d=r.dataset.wid;if(!d)return;const c=pe();c.includes(d)||(c.push(d),ve(c)),m.remove(),le()})}),document.body.appendChild(m)}const Ce=`weenat-journal-${I}`,ne=new Date().toISOString().slice(0,10);function Dt(e,t){const i=new Date(e);return i.setDate(i.getDate()+t),i.toISOString().slice(0,10)}function He(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,i,n]=e.split("-");return`${parseInt(n)} ${t[parseInt(i)-1]} ${e.split("-")[0]}`}const Rt=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"];function Nt(){const e=E,t=[],i=(u,m,r="Système")=>t.push({id:"auto-"+u+m.slice(0,8),type:"modification",date:u,texte:m,auteur:r}),n=e.orgId===1,a=n?"Jean-Michel Dutilleul":"Thomas Bertrand",s=n?"Alexandre Bernard":"Sophie Dubois";return i("2024-01-01","Création de la parcelle",a),e.crop&&i("2024-03-15",`Culture définie : ${e.crop}`,a),e.texture&&i("2024-03-15",`Texture de sol définie : ${e.texture}`,a),e.irrigation&&i("2024-04-01",`Type d'irrigation : ${e.irrigation}`,a),T.filter(u=>x.linkedSensorIds.includes(u.id)).forEach(u=>i("2024-06-10",`Liaison capteur : ${Z[u.model]||u.model} · ${u.serial}`,s)),i("2026-03-01","Début de cycle cultural 2026",a),t}const Ot=new Set(["culture","stade","irrigation","cycle"]);function Ye(e,t){const i=E.crop||"Blé tendre";return[{id:17434656e5,type:"cycle",date:"2026-03-01",auteur:e,action:"début",annee:"2026",texte:"Mise en place de la saison 2026"},{id:17438976e5,type:"culture",date:"2026-03-06",auteur:e,action:"modification",culture:i,texte:"Culture confirmée pour la saison 2026"},{id:17443296e5,type:"stade",date:"2026-04-11",auteur:e,stade:"BBCH 21 — Tallage actif",culture:i,texte:""},{id:17447616e5,type:"irrigation",date:"2026-04-16",auteur:e,volume:25,unite:"mm",methode:"Aspersion",texte:"Déclenchement suite alerte potentiel hydrique"},{id:17453664e5,type:"stade",date:"2026-04-23",auteur:t,stade:"BBCH 30 — Début montaison",culture:i,texte:""},{id:17457984e5,type:"irrigation",date:"2026-04-28",auteur:e,volume:30,unite:"mm",methode:"Aspersion",texte:""},{id:17460576e5,type:"stade",date:"2026-05-01",auteur:t,stade:"BBCH 45 — Gonflement épis",culture:i,texte:"Développement homogène sur la parcelle"}]}function ge(){const e=E.orgId===1,t=e?"Jean-Michel Dutilleul":"Thomas Bertrand",i=e?"Marie Martin":"Sophie Dubois";try{const a=localStorage.getItem(Ce);if(a){const s=JSON.parse(a);if(Array.isArray(s)){if(!s.some(u=>Ot.has(u.type))){const u=[...Ye(t,i),...s];return localStorage.setItem(Ce,JSON.stringify(u)),u}return s}}}catch{}const n=[{id:17469216e5,type:"note",category:"Observation générale",date:"2026-05-11",auteur:t,texte:"Observation de quelques pucerons sur les feuilles basses. À surveiller."},{id:17473536e5,type:"traitement",date:"2026-05-16",auteur:i,texte:"Application conforme aux conditions météo. Vent < 2 m/s.",produit:"Karate Zeon 10 CS",dose:"0,1 L/ha",cible:"Pucerons"},{id:17477856e5,type:"note",category:"Observation générale",date:"2026-05-21",auteur:t,texte:"Suite traitement du 16/05 : peu de pucerons visibles, situation sous contrôle."},...Ye(t,i)];return localStorage.setItem(Ce,JSON.stringify(n)),n}function vt(e){localStorage.setItem(Ce,JSON.stringify(e))}function ze(){const e=document.getElementById("journal-container");if(!e)return;const t=ge(),i=Nt(),n=[...t,...i].sort((c,o)=>o.date.localeCompare(c.date)),a=c=>{const[o,p,v]=c.split("-");return`${v}/${p}/${o}`},s={note:{label:"Note",icon:"bi-pencil",dotCls:"note",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotCls:"traitement",badgeCls:"traitement"},modification:{label:"Modification",icon:"bi-pencil-square",dotCls:"modification",badgeCls:"modification"},culture:{label:"Culture",icon:"bi-flower1",dotCls:"culture",badgeCls:"culture"},cycle:{label:"Cycle cultural",icon:"bi-arrow-repeat",dotCls:"cycle",badgeCls:"cycle"},stade:{label:"Stade phéno.",icon:"bi-calendar2-check",dotCls:"stade",badgeCls:"stade"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotCls:"irrigation",badgeCls:"irrigation"}};let u=`
    <div class="journal-add-bar">
      <div class="jrn-add-wrap" id="jrn-add-wrap">
        <button class="btn-primary btn-sm" id="jrn-add-btn" style="gap:6px">
          <i class="bi bi-plus-lg"></i> Ajouter
          <i class="bi bi-chevron-down" style="font-size:10px;margin-left:1px"></i>
        </button>
        <div class="jrn-add-menu" id="jrn-add-menu">
          ${[{type:"note",label:"Note",icon:"bi-pencil-square"},{type:"traitement",label:"Traitement phytosanitaire",icon:"bi-eyedropper"},null,{type:"culture",label:"Culture",icon:"bi-flower1"},{type:"stade",label:"Stade phénologique",icon:"bi-calendar2-check"},{type:"irrigation",label:"Irrigation",icon:"bi-droplet-half"},{type:"cycle",label:"Cycle cultural",icon:"bi-arrow-repeat"}].map(c=>c===null?'<div class="jrn-add-sep"></div>':`<button class="jrn-add-item" data-type="${c.type}">
                <i class="bi ${c.icon}"></i> ${c.label}
               </button>`).join("")}
        </div>
      </div>
    </div>
    <div class="journal-timeline">
  `;n.length===0?u+='<div class="journal-empty">Aucune entrée dans le journal.</div>':n.forEach(c=>{var h;const o=s[c.type]||s.note,p=c.type==="modification",v=c.type==="traitement";u+=`
        <div class="jrn-entry" data-id="${c.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot jrn-dot--${o.dotCls}"><i class="bi ${o.icon}"></i></div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${a(c.date)}</span>
              <span class="journal-type-badge journal-type-badge--${o.badgeCls}">
                ${o.label}
              </span>
              ${c.auteur?`<span class="jrn-entry-auteur">${c.auteur}</span>`:""}
              ${p?"":`<button class="jrn-entry-delete" data-id="${c.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>`}
            </div>
            ${c.texte?`<div class="jrn-entry-texte">${c.texte}</div>`:""}
            ${v&&(c.produit||c.dose||c.cible)?`
              <div class="jrn-entry-meta">
                ${c.produit?`<span class="jrn-entry-meta-chip"><i class="bi bi-flask"></i>${c.produit}</span>`:""}
                ${c.dose?`<span class="jrn-entry-meta-chip"><i class="bi bi-droplet"></i>${c.dose}</span>`:""}
                ${c.cible?`<span class="jrn-entry-meta-chip"><i class="bi bi-bullseye"></i>${c.cible}</span>`:""}
              </div>`:""}
            ${c.type==="culture"?`<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-tag"></i>${c.action==="ajout"?"Ajout":c.action==="retrait"?"Retrait":"Modification"}</span>
                ${c.culture?`<span class="jrn-entry-meta-chip"><i class="bi bi-flower1"></i>${c.culture}</span>`:""}
              </div>`:""}
            ${c.type==="stade"?`<div class="jrn-entry-meta">
                ${c.stade?`<span class="jrn-entry-meta-chip"><i class="bi bi-diagram-3"></i>${c.stade}</span>`:""}
                ${c.culture?`<span class="jrn-entry-meta-chip">${c.culture}</span>`:""}
              </div>`:""}
            ${c.type==="irrigation"?`<div class="jrn-entry-meta">
                ${c.volume?`<span class="jrn-entry-meta-chip"><i class="bi bi-droplet-fill"></i>${c.volume} ${c.unite||"mm"}</span>`:""}
                ${c.methode?`<span class="jrn-entry-meta-chip"><i class="bi bi-water"></i>${c.methode}</span>`:""}
              </div>`:""}
            ${c.type==="cycle"?`<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-arrow-right-circle"></i>${c.action==="fin"?"Fin de cycle":"Début de cycle"}</span>
                ${c.annee?`<span class="jrn-entry-meta-chip"><i class="bi bi-calendar3"></i>${c.annee}</span>`:""}
              </div>`:""}
            ${(h=c.imageIds)!=null&&h.length?`<div class="jrn-entry-photos-row" data-entry-id="${c.id}"></div>`:""}
          </div>
        </div>
      `}),u+="</div>",e.innerHTML=u;const m=e.querySelector("#jrn-add-btn"),r=e.querySelector("#jrn-add-menu");m==null||m.addEventListener("click",c=>{c.stopPropagation(),r.classList.toggle("open")}),document.addEventListener("click",()=>r==null?void 0:r.classList.remove("open")),e.querySelectorAll(".jrn-add-item").forEach(c=>{c.addEventListener("click",()=>{r.classList.remove("open"),zt(c.dataset.type)})}),e.querySelectorAll(".jrn-entry-delete").forEach(c=>{c.addEventListener("click",()=>{var v,h;const o=parseInt(c.dataset.id),p=ge().find(f=>f.id===o);(v=p==null?void 0:p.imageIds)!=null&&v.length&&((h=window.ImageStore)==null||h.remove(p.imageIds)),vt(ge().filter(f=>f.id!==o)),ze()})});const d=window.ImageStore;d&&e.querySelectorAll(".jrn-entry-photos-row[data-entry-id]").forEach(async c=>{var p;const o=t.find(v=>String(v.id)===c.dataset.entryId);if((p=o==null?void 0:o.imageIds)!=null&&p.length)for(const v of o.imageIds)try{const h=await d.get(v);if(!h)continue;const f=document.createElement("img");f.className="jrn-entry-photo",f.src=h,f.alt="",f.addEventListener("click",()=>{var b;return(b=window.openLightbox)==null?void 0:b.call(window,h)}),c.appendChild(f)}catch{}})}function zt(e){const t={note:"Ajouter une note",traitement:"Ajouter un traitement",culture:"Culture — événement",stade:"Stade phénologique",irrigation:"Irrigation",cycle:"Cycle cultural"},i=E.crop||"",n={note:`
      <div class="journal-form-row">
        <label class="journal-form-label">Catégorie</label>
        <select id="jrn-f-category" class="journal-form-input">
          ${Rt.map(u=>`<option>${u}</option>`).join("")}
        </select>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Texte</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Votre note…"></textarea>
      </div>`,traitement:`
      <div class="journal-form-row">
        <label class="journal-form-label">Observations</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Conditions météo, observations…"></textarea>
      </div>
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
      </div>`,culture:`
      <div class="journal-form-row">
        <label class="journal-form-label">Action</label>
        <select id="jrn-f-action" class="journal-form-input">
          <option value="ajout">Ajout de culture</option>
          <option value="modification" selected>Modification de culture</option>
          <option value="retrait">Retrait de culture</option>
        </select>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Culture</label>
        <input type="text" id="jrn-f-culture" class="journal-form-input" value="${i}" placeholder="Ex : Blé tendre">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Note</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Précisions…"></textarea>
      </div>`,stade:`
      <div class="journal-form-row">
        <label class="journal-form-label">Stade (BBCH)</label>
        <input type="text" id="jrn-f-stade" class="journal-form-input" placeholder="Ex : BBCH 30 — Début montaison">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Culture</label>
        <input type="text" id="jrn-f-culture" class="journal-form-input" value="${i}" placeholder="Culture concernée">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Observations</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Observations…"></textarea>
      </div>`,irrigation:`
      <div class="journal-form-grid">
        <div class="journal-form-row">
          <label class="journal-form-label">Volume</label>
          <input type="number" id="jrn-f-volume" class="journal-form-input" min="0" step="0.5" placeholder="0">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Unité</label>
          <select id="jrn-f-unite" class="journal-form-input">
            <option value="mm" selected>mm</option>
            <option value="m³/ha">m³/ha</option>
            <option value="m³">m³</option>
          </select>
        </div>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Méthode</label>
        <select id="jrn-f-methode" class="journal-form-input">
          <option value="">— Non précisé —</option>
          <option>Aspersion</option>
          <option>Goutte à goutte</option>
          <option>Gravitaire</option>
          <option>Pivot</option>
          <option>Enrouleur</option>
          <option>Autre</option>
        </select>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Observations</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Observations…"></textarea>
      </div>`,cycle:`
      <div class="journal-form-row">
        <label class="journal-form-label">Événement</label>
        <select id="jrn-f-action" class="journal-form-input">
          <option value="début">Début de cycle cultural</option>
          <option value="fin">Fin de cycle cultural</option>
        </select>
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Année</label>
        <input type="text" id="jrn-f-annee" class="journal-form-input" value="${new Date().getFullYear()}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Note</label>
        <textarea id="jrn-f-texte" class="journal-form-textarea" placeholder="Précisions…"></textarea>
      </div>`},a=e==="note"||e==="traitement",s=document.createElement("div");s.className="modal add-modal",s.innerHTML=`
    <div class="add-modal-content" style="max-width:480px">
      <div class="add-modal-header">
        <span class="add-modal-title">${t[e]||"Ajouter une entrée"}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="jrn-f-date" class="journal-form-input" value="${ne}">
        </div>
        ${n[e]||n.note}
        ${a?`
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
        </div>`:""}
        <button class="btn-primary btn-sm" id="jrn-f-save" style="width:100%;justify-content:center">
          Enregistrer
        </button>
      </div>
    </div>`,s.querySelector(".add-modal-close").addEventListener("click",()=>s.remove()),s.addEventListener("click",u=>{u.target===s&&s.remove()});const l=[];a&&window.ImageStore&&window.setupImgUpload(s.querySelector("#jrn-f-img-input"),s.querySelector("#jrn-f-img-btn"),s.querySelector("#jrn-f-previews"),s.querySelector("#jrn-f-img-err"),l),s.querySelector("#jrn-f-save").addEventListener("click",async()=>{var o,p;const u=s.querySelector("#jrn-f-date").value||ne,m=((o=s.querySelector("#jrn-f-texte"))==null?void 0:o.value.trim())||"",r=E.orgId===1?"Jean-Michel Dutilleul":"Thomas Bertrand",d={id:Date.now(),type:e,date:u,texte:m,auteur:r};if(e==="note")d.category=((p=s.querySelector("#jrn-f-category"))==null?void 0:p.value)||"";else if(e==="traitement")d.produit=s.querySelector("#jrn-f-produit").value.trim(),d.dose=s.querySelector("#jrn-f-dose").value.trim(),d.cible=s.querySelector("#jrn-f-cible").value.trim();else if(e==="culture")d.action=s.querySelector("#jrn-f-action").value,d.culture=s.querySelector("#jrn-f-culture").value.trim();else if(e==="stade")d.stade=s.querySelector("#jrn-f-stade").value.trim(),d.culture=s.querySelector("#jrn-f-culture").value.trim();else if(e==="irrigation"){const v=parseFloat(s.querySelector("#jrn-f-volume").value);d.volume=isNaN(v)?0:v,d.unite=s.querySelector("#jrn-f-unite").value,d.methode=s.querySelector("#jrn-f-methode").value}else e==="cycle"&&(d.action=s.querySelector("#jrn-f-action").value,d.annee=s.querySelector("#jrn-f-annee").value.trim());if(m||d.produit||d.culture||d.stade||d.volume||d.annee||l.length){if(window.ImageStore&&l.length){d.imageIds=[];for(const v of l){const h=`img_${d.id}_${d.imageIds.length}`;await window.ImageStore.store(h,v),d.imageIds.push(h)}}vt([d,...ge()]),s.remove(),ze()}}),document.body.appendChild(s)}function Wt(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const i=ae.filter(s=>s.orgId===E.orgId).sort((s,l)=>s.name.localeCompare(l.name,"fr")),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const a=document.createElement("select");a.className="breadcrumb-nav-select",a.innerHTML=i.map(s=>`<option value="${s.id}"${s.id===I?" selected":""}>${s.name}</option>`).join(""),a.addEventListener("change",()=>{window.location.href=`parcelle-detail.html?id=${a.value}`}),n.appendChild(a),t.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var i,n,a;if(!E){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}Lt(),dt(x.name||E.name,{label:"Parcelles",href:"parcelles.html"}),Wt(),Y(),fi(),Mi(),Bi(),li(),hi(),ki();const e=pt.get("tab");e&&((i=document.querySelector(`.detail-tab-btn[data-pane="tab-${e}"]`))==null||i.click()),ui(),pi(),le(),(n=document.getElementById("parcel-add-widget-btn"))==null||n.addEventListener("click",Ft),(a=document.getElementById("btn-export-csv"))==null||a.addEventListener("click",Si),document.addEventListener("click",s=>{const l=s.target.closest(".chart-cumul-add-btn");if(!l)return;s.stopPropagation();const u=l.dataset.cumulLabel,m=l.dataset.cumulVal;if(!confirm(`Ajouter "${u} : ${m}" au tableau de bord ?`))return;const r=document.createElement("div");r.textContent="Cumul ajouté au tableau de bord",Object.assign(r.style,{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",background:"rgba(28,28,30,.9)",color:"#fff",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",zIndex:"9999",pointerEvents:"none"}),document.body.appendChild(r),setTimeout(()=>r.remove(),2500)});const t=document.getElementById("sidebar");t&&new MutationObserver(()=>oe()).observe(t,{attributes:!0,attributeFilter:["data-role"]})});let Se="capteur",V=null;const ht=`charts-order-parcel-${I}`;function _t(){try{return JSON.parse(localStorage.getItem(ht)||"null")}catch{return null}}function Vt(e){localStorage.setItem(ht,JSON.stringify(e))}function Gt(e){let t=null;e.addEventListener("dragstart",i=>{const n=i.target.closest(".chart-card[data-card-key]");n&&(t=n,n.classList.add("chart-dragging"),i.dataTransfer.effectAllowed="move")}),e.addEventListener("dragend",()=>{t==null||t.classList.remove("chart-dragging"),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over")),t=null;const i=[...e.querySelectorAll(".chart-card[data-card-key]")].map(n=>n.dataset.cardKey);Vt(i)}),e.addEventListener("dragover",i=>{if(i.preventDefault(),!t)return;const n=i.target.closest(".chart-card[data-card-key]");if(!n||n===t)return;e.querySelectorAll(".chart-card").forEach(s=>s.classList.remove("chart-drag-over")),n.classList.add("chart-drag-over");const a=n.getBoundingClientRect().top+n.getBoundingClientRect().height/2;e.insertBefore(t,i.clientY<a?n:n.nextSibling)}),e.addEventListener("drop",i=>{i.preventDefault(),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over"))})}function Yt(e,t){const i=T.filter(d=>t.includes(d.id)),n=i.filter(d=>W.includes(d.model)),a=i.filter(d=>Ve.includes(d.model)),s=i.filter(d=>!W.includes(d.model)&&!Ve.includes(d.model)),l=we(),u=new Set;i.forEach(d=>(F[d.model]||[]).forEach(c=>u.add(c.id)));const m=[];if(s.forEach(d=>{const c=F[d.model];if(!c)return;const o=`${d.model} · ${d.serial}`,p=Math.floor(5+Math.random()*55);c.forEach(v=>{if(v.isWindComposite){m.push({key:`wind-${d.id}`,type:"wind",sensor:d,source:o,emissionMins:p});return}m.push({key:`s${d.id}-${v.id}`,type:"metric",metric:v,source:o,emissionMins:p,sensorId:d.id})})}),n.length>0){const d=`Tensiomètres · ${n.length} capteur${n.length>1?"s":""}`,c=Math.floor(5+Math.random()*55);["pothydr","tsol"].forEach(o=>{m.push({key:`tensio-${o}`,type:"tensio",metricId:o,source:d,emissionMins:c,tensioSensors:n})})}a.forEach(d=>{const c=jt[d.model]||[],o=`${Z[d.model]||d.model} · ${d.serial}`,p=Math.floor(5+Math.random()*55);c.length>0&&(m.push({key:`capa-vwc-${d.id}`,type:"capa-vwc",sensor:d,horizons:c,source:o,emissionMins:p}),m.push({key:`capa-tsol-${d.id}`,type:"capa-tsol",sensor:d,horizons:c,source:o,emissionMins:p}))}),Oe.filter(d=>!u.has(d.id)).forEach(d=>m.push({key:`always-${d.id}`,type:"metric",metric:d,source:"parcelle",emissionMins:null,unavailable:l<60}));const r=_t();if(r!=null&&r.length){const d=new Map(r.map((c,o)=>[c,o]));m.sort((c,o)=>(d.has(c.key)?d.get(c.key):1/0)-(d.has(o.key)?d.get(o.key):1/0))}m.forEach(d=>{d.type==="metric"?qe(e,d.metric,d.source,d.emissionMins,d.key,d.unavailable,d.sensorId):d.type==="wind"?Tt(e,d.source,d.emissionMins,d.key):d.type==="tensio"?Xt(e,d.metricId,d.tensioSensors,d.source,d.emissionMins,d.key):d.type==="capa-vwc"?Kt(e,d.horizons,d.source,d.emissionMins,d.key):d.type==="capa-tsol"&&Zt(e,d.horizons,d.source,d.emissionMins,d.key)}),Gt(e)}function Me(e){const t=T.filter(a=>e.includes(a.id)),i=new Set,n=[];return t.forEach(a=>{(F[a.model]||[]).forEach(s=>{i.has(s.id)||(i.add(s.id),n.push(s))})}),Oe.forEach(a=>{i.has(a.id)||(i.add(a.id),n.push(a))}),n}function Y(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",V){e.className="compare-rows";const i=ae.find(v=>v.id===V),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${x.name||E.name}</span></div>
      <div class="compare-col-header">
        <span>${(i==null?void 0:i.name)||"Parcelle"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{V=null,ke(),Y()});const a=Me(x.linkedSensorIds),s=Be(V),l=(s==null?void 0:s.linkedSensorIds)??T.filter(v=>v.parcelIds.includes(V)).map(v=>v.id),u=Me(l),m=a.map(v=>v.id),r=u.map(v=>v.id),d=m.filter(v=>r.includes(v)),c=m.filter(v=>!r.includes(v)),o=r.filter(v=>!m.includes(v));[...d,...c,...o].forEach(v=>{const h=a.find(y=>y.id===v),f=u.find(y=>y.id===v),b=document.createElement("div");b.className="compare-row";const g=document.createElement("div");h?qe(g,h):g.innerHTML='<div class="compare-chart-empty">—</div>';const w=document.createElement("div");f?qe(w,f):w.innerHTML='<div class="compare-chart-empty">—</div>',b.appendChild(g),b.appendChild(w),e.appendChild(b)})}else e.className="charts-stack",Yt(e,x.linkedSensorIds);ni()}const be=["#5b8dd9","#e07050","#4ecdc4","#f5c842","#c090e0","#78d8a0"];function Jt(e){const t=e.depth||30;return[{depth:t,label:`${t} cm`,sensor:e}]}function Ut(e){if(Se==="capteur")return e.map((i,n)=>({label:i.serial,color:be[n%be.length],depth:i.depth||30,sensor:i}));const t=new Map;return e.forEach(i=>Jt(i).forEach(n=>{t.has(n.depth)||t.set(n.depth,n)})),[...t.values()].sort((i,n)=>i.depth-n.depth).map((i,n)=>({label:i.label,color:be[n%be.length],depth:i.depth,sensor:i.sensor}))}function Xt(e,t,i,n=null,a=null,s=null){var v;const u={pothydr:{name:"Potentiel hydrique",unit:"kPa"},tsol:{name:"Température du sol",unit:"°C"}}[t],m=Ut(i),r=document.createElement("div");r.className="chart-card tensio-multi-card",r.dataset.tensioMetric=t,r.dataset.tensioCurves=JSON.stringify(m.map(h=>({depth:h.depth,color:h.color}))),s&&(r.dataset.cardKey=s,r.draggable=!0);const d=m.map(h=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${h.color};vertical-align:middle;border-radius:1px"></span>
      ${h.label}
    </span>`).join(""),c=n?`<span class="chart-card-source">${n}</span>`:"",o=a!=null?`<span class="chart-card-emission">il y a ${a} min</span>`:"",p=`
    <div class="chart-tensio-toggle">
      <button class="btn-secondary btn-sm tensio-toggle-btn${Se==="capteur"?" active":""}" data-mode="capteur">Par capteur</button>
      <button class="btn-secondary btn-sm tensio-toggle-btn${Se==="horizon"?" active":""}" data-mode="horizon">Par horizon</button>
    </div>`;r.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((v=m[0])==null?void 0:v.color)||be[0]}">${u.name}</span>
      <span class="chart-card-unit">${u.unit}</span>
      ${c}${o}
    </div>
    ${p}
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${d}</div>
    <svg class="chart-svg tensio-svg" data-metric="${t}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,r.querySelectorAll(".tensio-toggle-btn").forEach(h=>{h.addEventListener("click",()=>{Se=h.dataset.mode,Y()})}),e.appendChild(r)}function ft(e,t,i,n,a,s,l,u){var d;const m=document.createElement("div");m.className=`chart-card ${l}-multi-card`,m.dataset[l+"Curves"]=JSON.stringify(t.map(c=>({depth:c.depth,color:c[i]}))),u&&(m.dataset.cardKey=u,m.draggable=!0);const r=t.map(c=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${c[i]};vertical-align:middle;border-radius:1px"></span>
      ${c.label}
    </span>`).join("");return m.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((d=t[0])==null?void 0:d[i])||"#46DA82"}">${n}</span>
      <span class="chart-card-unit">${a}</span>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${r}</div>
    <svg class="chart-svg ${s}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,e.appendChild(m),m}function Kt(e,t,i=null,n=null,a=null){ft(e,t,"vwcColor","Teneur en eau du sol","%vol","capa-svg","capa",a)}function Zt(e,t,i=null,n=null,a=null){ft(e,t,"tsolColor","Température du sol par horizon","°C","capa-tsol-svg","capaT",a)}function qe(e,t,i=null,n=null,a=null,s=!1,l=null){var v;const u=t.base(),m=document.createElement("div");m.className="chart-card",m.dataset.base=u,m.dataset.color=t.color,m.dataset.cumul=t.isCumul?"1":"",m.dataset.chartType=t.chartType||"line",m.dataset.metricId=t.id,m.dataset.metricName=t.name,m.dataset.metricUnit=t.unit,a&&(m.dataset.cardKey=a,m.draggable=!0);const r=t.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label} : <strong>${Ke(t)} ${t.cumul.unit}</strong></span><button class="chart-cumul-add-btn" data-cumul-label="${t.cumul.label}" data-cumul-val="${Ke(t)} ${t.cumul.unit}" title="Ajouter au tableau de bord"><i class="bi bi-house"></i></button></div>`:"",d=i?`<span class="chart-card-source">${i}</span>`:"",c=n!=null?`<span class="chart-card-emission">il y a ${n} min</span>`:"";let o="";if(l){const h=((v=document.getElementById("time-step"))==null?void 0:v.value)||"1h";o=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${l}&metricId=${t.id}&parcelId=${I}&period=${X}&step=${h}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`}const p=s?'<div class="chart-unavailable">Données indisponibles pour ce pas de temps</div>':'<svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>';m.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${d}${c}${o}
    </div>
    ${p}
    ${r}
  `,e.appendChild(m)}let fe=null;function Qt(){return fe||(fe=document.createElement("div"),fe.className="chart-tooltip",document.body.appendChild(fe)),fe}function ei(e,t){return t==="temp"||t==="temperature"?["#6eb4d4","#e07050"]:t==="tseche"||t==="thumide"?["#6eb4d4","#e07050"]:t==="temp_rosee"?["#a0d0f0","#4090c0"]:[ti(e,.55),e]}function ti(e,t){const i=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),s=Math.round(i+(255-i)*t),l=Math.round(n+(255-n)*t),u=Math.round(a+(255-a)*t);return`#${s.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${u.toString(16).padStart(2,"0")}`}function We(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let i=0;i<e.length-1;i++){const n=e[Math.max(i-1,0)],a=e[i],s=e[i+1],l=e[Math.min(i+2,e.length-1)],u=a.x+(s.x-n.x)/6,m=a.y+(s.y-n.y)/6,r=s.x-(l.x-a.x)/6,d=s.y-(l.y-a.y)/6;t+=` C${u.toFixed(1)},${m.toFixed(1)} ${r.toFixed(1)},${d.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return t}function $e(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Je(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function ii(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function Ue(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function re(e,t,i,n=.15){const a=Je(i),s=Ue(a),l=ii(a),u=()=>1+(Math.random()-.5)*2*n;switch(e){case"temp":return(t-6+s*12)*u();case"tseche":case"thumide":return(t-4+s*8)*u();case"temp_rosee":{const m=t-6+s*12;return Math.min(m-1,t-8+s*6)*u()}case"tsol":{const m=Je(i+120);return(t-3+Ue(m)*6)*u()}case"humidite":return Math.min(100,Math.max(20,(t+(1-s)*25-s*15)*u()));case"rayonnement":return Math.max(0,l*t*1.3*u());case"etp":return Math.max(0,l*t*1.5*u());case"humec":return Math.max(0,t*Math.max(0,.8-l*1.2)*u());case"pluie":return Math.random()<.12?t*Math.random()*2:0;case"vent":case"rafales":return Math.max(0,t*(.6+l*.8)*u());default:return Math.max(0,t*u())}}function ni(){const e=Ht(),t=we();T.filter(n=>x.linkedSensorIds.includes(n.id)).filter(n=>W.includes(n.model)),document.querySelectorAll(".chart-card").forEach(n=>{if(n.classList.contains("tensio-multi-card")){const o=n.querySelector(".tensio-svg"),p=JSON.parse(n.dataset.tensioCurves||"[]");o&&p.length>0&&ai(o,p,e,t);return}if(n.classList.contains("capa-multi-card")){const o=n.querySelector(".capa-svg"),p=JSON.parse(n.dataset.capaCurves||"[]");o&&p.length>0&&Xe(o,p,e,t,"vwc");return}if(n.classList.contains("capaT-multi-card")){const o=n.querySelector(".capa-tsol-svg"),p=JSON.parse(n.dataset.capaTCurves||"[]");o&&p.length>0&&Xe(o,p,e,t,"tsol");return}const a=n.querySelector(".chart-svg");if(!a)return;const s=parseFloat(n.dataset.base),l=n.dataset.color,u=n.dataset.cumul==="1",m=n.dataset.chartType||"line",r=n.dataset.metricId||"",d=n.dataset.metricName||"",c=n.dataset.metricUnit||"";n.dataset.isIrrigation?ri(a,l,e,t):si(a,s,l,e,t,u,m,r,d,c)}),bt(),gt()}function ai(e,t,i,n){const l={t:14,r:10,b:28,l:46},u=600-l.l-l.r,m=180-l.t-l.b,r=t.map(w=>{const y=20+w.depth*.8+Math.random()*20;return Array.from({length:i},(S,C)=>{const A=(i-1-C)*n;return Math.max(0,re("pothydr",y,A))})}),d=r.flat(),c=Math.min(...d),o=Math.max(...d),p=o-c||1,v=w=>l.l+w/Math.max(i-1,1)*u,h=w=>l.t+m-(w-c)/p*m,f=`tc-${Math.random().toString(36).slice(2)}`;let b=`<defs><clipPath id="${f}"><rect x="${l.l}" y="${l.t}" width="${u}" height="${m}"/></clipPath></defs>`;for(let w=0;w<=4;w++){const y=l.t+w/4*m,S=o-w/4*p;b+=`<line x1="${l.l}" y1="${y.toFixed(1)}" x2="${600-l.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,b+=`<text x="${l.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${S.toFixed(0)}</text>`}r.forEach((w,y)=>{const S=w.map((A,B)=>({x:v(B),y:h(A)})),C=We(S);b+=`<path d="${C}" fill="none" stroke="${t[y].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${f})"/>`}),b+=`<line x1="${l.l}" y1="${l.t+m}" x2="${600-l.r}" y2="${l.t+m}" stroke="var(--bdr2)" stroke-width="1"/>`;const g=Math.max(1,Math.floor(i/6));for(let w=0;w<i;w+=g){const y=(i-1-w)*n;b+=`<text x="${v(w).toFixed(1)}" y="${(l.t+m+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${$e(y)}</text>`}e.innerHTML=b}function Xe(e,t,i,n,a="vwc"){const u={t:14,r:10,b:28,l:46},m=600-u.l-u.r,r=180-u.t-u.b,d=t.map((y,S)=>{if(a==="tsol"){const A=16-y.depth*.06+S*.5+Math.random()*3;return Array.from({length:i},(B,M)=>{const q=(i-1-M)*n;return re("tsol",A,q)})}const C=35-y.depth*.15+S*2+Math.random()*8;return Array.from({length:i},(A,B)=>{const M=(i-1-B)*n;return Math.max(10,Math.min(55,re("teneur-eau",C,M)))})}),c=d.flat(),o=Math.floor(Math.min(...c)-2),p=Math.ceil(Math.max(...c)+2),v=p-o||1,h=y=>u.l+y/Math.max(i-1,1)*m,f=y=>u.t+r-(y-o)/v*r,b=`cc-${Math.random().toString(36).slice(2)}`;let g=`<defs><clipPath id="${b}"><rect x="${u.l}" y="${u.t}" width="${m}" height="${r}"/></clipPath></defs>`;for(let y=0;y<=4;y++){const S=u.t+y/4*r,C=p-y/4*v;g+=`<line x1="${u.l}" y1="${S.toFixed(1)}" x2="${600-u.r}" y2="${S.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,g+=`<text x="${u.l-5}" y="${(S+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${C.toFixed(0)}</text>`}d.forEach((y,S)=>{const C=y.map((B,M)=>({x:h(M),y:f(B)})),A=We(C);g+=`<path d="${A}" fill="none" stroke="${t[S].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${b})"/>`}),g+=`<line x1="${u.l}" y1="${u.t+r}" x2="${600-u.r}" y2="${u.t+r}" stroke="var(--bdr2)" stroke-width="1"/>`;const w=Math.max(1,Math.floor(i/6));for(let y=0;y<i;y+=w){const S=(i-1-y)*n;g+=`<text x="${h(y).toFixed(1)}" y="${(u.t+r+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${$e(S)}</text>`}e.innerHTML=g}function si(e,t,i,n,a,s,l="line",u="",m="",r=""){const o={t:14,r:10,b:28,l:46},p=600-o.l-o.r,v=180-o.t-o.b,h=Math.max(1,Math.round(a/15)),f=Array.from({length:n},(k,j)=>{const H=(n-1-j)*a;if(s){let R=0;for(let N=0;N<h;N++)R+=re(u,t/h,H+N*(a/h));return R}else if(h>1){let R=0;for(let N=0;N<h;N++)R+=re(u,t,H+N*(a/h));return R/h}else return re(u,t,H)}),b=l==="bar"?0:Math.min(...f),g=Math.max(...f),w=g-b||1,y=k=>o.l+k/Math.max(n-1,1)*p,S=k=>o.t+v-(k-b)/w*v,C=`grad_${Math.random().toString(36).slice(2)}`,[A,B]=ei(i,u);let M=`<defs>
    <linearGradient id="${C}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${A}"/>
      <stop offset="100%" stop-color="${B}"/>
    </linearGradient>
    <clipPath id="clip_${C}">
      <rect x="${o.l}" y="${o.t}" width="${p}" height="${v}"/>
    </clipPath>
  </defs>`;for(let k=0;k<=4;k++){const j=o.t+k/4*v,H=g-k/4*w,R=Math.abs(H)>=100?H.toFixed(0):Math.abs(H)>=10?H.toFixed(1):H.toFixed(2);M+=`<line x1="${o.l}" y1="${j.toFixed(1)}" x2="${600-o.r}" y2="${j.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,M+=`<text x="${o.l-5}" y="${(j+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${R}</text>`}M+=`<line x1="${o.l}" y1="${o.t+v}" x2="${600-o.r}" y2="${o.t+v}" stroke="var(--bdr2)" stroke-width="1"/>`;const q=Math.max(1,Math.floor(n/6));for(let k=0;k<n;k+=q){const j=y(k).toFixed(1),H=(n-k)*a;M+=`<line x1="${j}" y1="${o.t}" x2="${j}" y2="${o.t+v}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,M+=`<text x="${j}" y="${o.t+v+14}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${$e(H)}</text>`}if(l==="bar"){const k=Math.max(2,p/n*.65);f.forEach((j,H)=>{if(j<=0)return;const R=y(H),N=S(j),he=o.t+v-N;M+=`<rect x="${(R-k/2).toFixed(1)}" y="${N.toFixed(1)}" width="${k.toFixed(1)}" height="${he.toFixed(1)}" fill="url(#${C})" opacity="0.9" rx="1"/>`})}else{const k=f.map((R,N)=>({x:y(N),y:S(R)})),j=We(k),H=j+` L${y(n-1).toFixed(1)},${o.t+v} L${o.l.toFixed(1)},${o.t+v} Z`;M+=`<path d="${H}" fill="${B}" opacity="0.07" clip-path="url(#clip_${C})"/>`,M+=`<path d="${j}" fill="none" stroke="url(#${C})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${C})"/>`}M+=`<rect class="chart-hover-rect" x="${o.l}" y="${o.t}" width="${p}" height="${v}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=M,oi(e,f,y,S,b,g,n,a,m,r,i,o,600)}function oi(e,t,i,n,a,s,l,u,m,r,d,c,o,p){const v=Qt(),h=e.querySelector(".chart-hover-rect");if(!h)return;const b=document.createElementNS("http://www.w3.org/2000/svg","circle");b.setAttribute("r","4"),b.setAttribute("fill",d),b.setAttribute("stroke","#fff"),b.setAttribute("stroke-width","1.5"),b.style.display="none",b.style.pointerEvents="none",e.appendChild(b),h.addEventListener("mousemove",g=>{const w=e.getBoundingClientRect(),y=o/w.width,S=(g.clientX-w.left)*y,C=o-c.l-c.r,A=Math.max(0,Math.min(1,(S-c.l)/C)),B=Math.round(A*(l-1));if(B<0||B>=t.length)return;const M=t[B],q=i(B),k=n(M);b.setAttribute("cx",q),b.setAttribute("cy",k),b.style.display="";const j=(l-B)*u,H=$e(j),R=Math.abs(M)>=100?M.toFixed(1):M.toFixed(2);v.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${m}</div>
      <div class="chart-tooltip-val" style="color:${d}">${R} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${r}</span></div>
      <div class="chart-tooltip-ts">${H}</div>
    `,v.style.display="block";const N=g.clientX+12,he=g.clientY-10;v.style.left=`${Math.min(N,window.innerWidth-160)}px`,v.style.top=`${he}px`}),h.addEventListener("mouseleave",()=>{v.style.display="none",b.style.display="none"})}function ri(e,t,i,n){const l={t:12,r:8,b:28,l:44},u=600-l.l-l.r,m=180-l.t-l.b,r=Date.now(),d=i*n*6e4,c=Array(i).fill(0);(x.irrigationEvents||[]).forEach(b=>{const g=new Date(b.isoDate).getTime(),w=r-g;if(w<0||w>d)return;const y=Math.floor((d-w)/(n*6e4));y>=0&&y<i&&(c[y]+=b.mm||0)});const o=Math.max(...c,1),p=b=>l.l+b/Math.max(i-1,1)*u,v=b=>l.t+m-b/o*m;let h="";for(let b=0;b<=4;b++){const g=l.t+b/4*m,w=(o-b/4*o).toFixed(1);h+=`<line x1="${l.l}" y1="${g}" x2="${600-l.r}" y2="${g}" stroke="var(--bdr2)" stroke-width="1"/>`,h+=`<text x="${l.l-4}" y="${g+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${w}</text>`}const f=Math.max(4,u/i*.65);c.forEach((b,g)=>{if(b<=0)return;const w=p(g),y=v(b),S=l.t+m-y;h+=`<rect x="${(w-f/2).toFixed(1)}" y="${y.toFixed(1)}" width="${f.toFixed(1)}" height="${S.toFixed(1)}" fill="${t}" opacity="0.85" rx="1"/>`}),e.innerHTML=h}function Ke(e){const i={pluie:()=>$(20,120),etp:()=>D(15,80),rayonnement:()=>$(500,3e3)}[e.id];return i?i():$(10,100)}function li(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),i=document.getElementById("time-step"),n=new Date,a=new Date(n-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",s=>{const l=s.target.closest(".period-preset-btn");if(l)if(e.querySelectorAll(".period-preset-btn").forEach(u=>u.classList.remove("active")),l.classList.add("active"),X=l.dataset.period,X==="custom")t.style.display="flex";else{t.style.display="none";const u=document.getElementById("time-step");u&&(u.value=Pt(X)),Y()}}),document.getElementById("date-from").addEventListener("change",Ze),document.getElementById("date-to").addEventListener("change",Ze),i.addEventListener("change",Y)}function Ze(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(ce=new Date(e),de=new Date(t+"T23:59:59"),ce<de&&Y())}const Qe={"Blé tendre":[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé. Profondeur optimale 3–4 cm."},{name:"Levée",date:"2025-11-05",bbch:"BBCH 09",desc:"Apparition de la première feuille au-dessus du sol."},{name:"Tallage",date:"2026-02-15",bbch:"BBCH 21",desc:"1er talle apparu. Période sensible au froid."},{name:"Épi 1 cm",date:"2026-04-20",bbch:"BBCH 30",desc:"Montaison. Début de la différenciation de l'épi."},{name:"Épiaison",date:"2026-05-20",bbch:"BBCH 55",desc:"La moitié de l'épiaison est atteinte. Risque maximal de fusariose."},{name:"Floraison",date:"2026-05-28",bbch:"BBCH 65",desc:"Pleine floraison. Fenêtre critique pour la qualité du grain."},{name:"Maturité",date:"2026-07-10",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %. Récolte possible."}],Maïs:[{name:"Semis",date:"2026-04-25",bbch:"BBCH 00",desc:"Sol > 10 °C à 5 cm. Fenêtre de semis idéale."},{name:"Levée",date:"2026-05-10",bbch:"BBCH 09",desc:"Coleoptile visible. 10 jours après semis en conditions normales."},{name:"4 feuilles",date:"2026-05-28",bbch:"BBCH 14",desc:"V4. Intervention herbicide possible."},{name:"6 feuilles",date:"2026-06-12",bbch:"BBCH 16",desc:"V6. Stade critique pour la nutrition azotée."},{name:"Floraison ♂",date:"2026-07-15",bbch:"BBCH 65",desc:"VT. Émission du pollen. Forte demande en eau (≥ 8 mm/j)."},{name:"Soie",date:"2026-07-18",bbch:"BBCH 67",desc:"R1. Fécondation. Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-20",bbch:"BBCH 89",desc:"Point noir visible. Récolte selon teneur en eau."}],Colza:[{name:"Semis",date:"2025-08-25",bbch:"BBCH 00",desc:"Sol humide, T° < 25 °C. Objectif : 30 plants/m²."},{name:"Levée",date:"2025-09-05",bbch:"BBCH 09",desc:"Cotylédon visible. Période à risque limaces."},{name:"Rosette",date:"2025-11-15",bbch:"BBCH 18",desc:"8 feuilles étalées. Bon état pour entrer en hiver."},{name:"Reprise",date:"2026-02-20",bbch:"BBCH 30",desc:"Allongement de l'hypocotyle. Fin de la période de vernalisation."},{name:"Bouton floral",date:"2026-03-25",bbch:"BBCH 51",desc:"Inflorescence visible. Risque sclérotinia à surveiller."},{name:"Floraison",date:"2026-04-10",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile. Éviter les traitements."},{name:"Siliques",date:"2026-05-05",bbch:"BBCH 75",desc:"Siliques de 2 cm. Fin de floraison, début de remplissage."},{name:"Maturité",date:"2026-07-05",bbch:"BBCH 89",desc:"Siliques brunes, graines noires. Seuil récolte < 9 % eau."}],Tournesol:[{name:"Semis",date:"2026-04-20",bbch:"BBCH 00",desc:"Sol > 8 °C à 5 cm. Profondeur 4–5 cm."},{name:"Levée",date:"2026-05-05",bbch:"BBCH 09",desc:"Cotylédon hors sol. Période sensible aux oiseaux."},{name:"4 feuilles",date:"2026-05-25",bbch:"BBCH 14",desc:"V4. Interventions herbicides possibles."},{name:"Bouton floral",date:"2026-06-25",bbch:"BBCH 51",desc:"E2. Bouton visible. Fin du développement végétatif."},{name:"Floraison",date:"2026-07-10",bbch:"BBCH 65",desc:"R5.1. Fleurs ligulées ouvertes. Stress hydrique critique."},{name:"Maturité",date:"2026-09-05",bbch:"BBCH 89",desc:"Capitule brun, dos jaune. Teneur en eau 9–12 %."}],Vigne:[{name:"Débourrement",date:"2026-04-05",bbch:"BBCH 05",desc:"Bourgeon en coton. Risque gel augmente fortement."},{name:"Sortie feuilles",date:"2026-04-20",bbch:"BBCH 11",desc:"1ère feuille étalée. Début des traitements prophylactiques."},{name:"Floraison",date:"2026-06-10",bbch:"BBCH 65",desc:"Anthèse. Niveau de risque mildiou et oïdium maximal."},{name:"Nouaison",date:"2026-06-25",bbch:"BBCH 71",desc:"Baies visibles. Consolidation du rendement."},{name:"Véraison",date:"2026-08-05",bbch:"BBCH 81",desc:"Changement de couleur. Arrêt des traitements phytos recommandé."},{name:"Récolte",date:"2026-09-15",bbch:"BBCH 89",desc:"Maturité technologique. Date selon profil variétal."}],Sorgho:[{name:"Semis",date:"2026-05-10",bbch:"BBCH 00",desc:"Sol > 12 °C à 5 cm."},{name:"Levée",date:"2026-05-25",bbch:"BBCH 09",desc:"Coleoptile visible."},{name:"Montaison",date:"2026-07-01",bbch:"BBCH 30",desc:"Début de la montaison. Forte demande azotée."},{name:"Floraison",date:"2026-07-25",bbch:"BBCH 65",desc:"Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-15",bbch:"BBCH 89",desc:"Teneur en eau < 25 %. Récolte adaptée."}],"Orge de printemps":[{name:"Semis",date:"2026-03-15",bbch:"BBCH 00",desc:"Semis dès que sol ressuyé, T° > 5 °C."},{name:"Levée",date:"2026-04-01",bbch:"BBCH 09",desc:"Coleoptile visible. Période sensible aux limaces."},{name:"Tallage",date:"2026-04-20",bbch:"BBCH 21",desc:"Premier talle. Couverture du sol progressive."},{name:"Montaison",date:"2026-05-10",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-06-05",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-07-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-08-05",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],Orge:[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé, profondeur 3–4 cm."},{name:"Levée",date:"2025-11-04",bbch:"BBCH 09",desc:"Coleoptile visible. Surveillance limaces."},{name:"Tallage",date:"2026-02-08",bbch:"BBCH 21",desc:"Reprise de végétation. Premier talle."},{name:"Montaison",date:"2026-04-02",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-05-07",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-05-18",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-06-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-07-01",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],"Pomme de terre":[{name:"Plantation",date:"2026-04-02",bbch:"BBCH 00",desc:"Tubercules-semences à 10 cm, espacement 30–35 cm."},{name:"Levée",date:"2026-04-26",bbch:"BBCH 09",desc:"Tiges émergées. Risque gel résiduel."},{name:"Croissance",date:"2026-05-15",bbch:"BBCH 31",desc:"Fermeture du rang. Première application fongicide."},{name:"Tuberisation",date:"2026-06-05",bbch:"BBCH 71",desc:"Initiation des tubercules. Demande en eau maximale."},{name:"Grossissement",date:"2026-07-01",bbch:"BBCH 81",desc:"Grossissement actif. Irrigation critique."},{name:"Maturité",date:"2026-08-15",bbch:"BBCH 89",desc:"Fanes sèches, peau des tubercules fixée. Récolte."}],Cerisier:[{name:"Dormance",date:"2025-12-15",bbch:"BBCH 00",desc:"Repos végétatif. Besoin en froid accumulé."},{name:"Bourgeons",date:"2026-02-20",bbch:"BBCH 03",desc:"Gonflement des bourgeons. Chilling satisfait."},{name:"Débourrement",date:"2026-03-18",bbch:"BBCH 07",desc:"Pointe verte visible. Risque gel fort (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-08",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation croisée nécessaire."},{name:"Nouaison",date:"2026-04-28",bbch:"BBCH 71",desc:"Petits fruits noués. Chute physiologique normale."},{name:"Fructification",date:"2026-05-12",bbch:"BBCH 81",desc:"Grossissement actif des cerises. Irrigation si déficit."},{name:"Récolte",date:"2026-06-18",bbch:"BBCH 89",desc:"Cerises à maturité. Récolte échelonnée selon variété."}],Poire:[{name:"Débourrement",date:"2026-03-28",bbch:"BBCH 07",desc:"Pointe verte. Vigilance gel (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-15",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile."},{name:"Nouaison",date:"2026-05-05",bbch:"BBCH 71",desc:"Petits fruits noués. Éclaircissage si nécessaire."},{name:"Croissance",date:"2026-06-15",bbch:"BBCH 78",desc:"Grossissement actif. Besoins en eau importants."},{name:"Véraison",date:"2026-08-10",bbch:"BBCH 84",desc:"Changement de couleur. Arrêt des traitements phytos."},{name:"Récolte",date:"2026-09-10",bbch:"BBCH 89",desc:"Récolte selon indice de maturité (pénétromètre, amidon)."}],Pomme:[{name:"Débourrement",date:"2026-04-01",bbch:"BBCH 07",desc:"Pointe verte. Risque gel résiduel."},{name:"Floraison",date:"2026-04-25",bbch:"BBCH 65",desc:"Pleine floraison. Risque tavelure maximal."},{name:"Nouaison",date:"2026-05-15",bbch:"BBCH 71",desc:"Petits fruits visibles. Éclaircissage possible."},{name:"Croissance",date:"2026-06-10",bbch:"BBCH 78",desc:"Grossissement actif. Surveillance carpocapse."},{name:"Véraison",date:"2026-08-15",bbch:"BBCH 84",desc:"Coloration des fruits. Maturation avancée."},{name:"Récolte",date:"2026-09-20",bbch:"BBCH 89",desc:"Récolte selon variété et indice de maturité."}],Salade:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Laitue:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Betterave:[{name:"Semis",date:"2026-03-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé (T° > 5 °C) et ressuyé."},{name:"Levée",date:"2026-04-08",bbch:"BBCH 09",desc:"Cotylédons hors sol. Période à risque limaces."},{name:"4 feuilles",date:"2026-05-01",bbch:"BBCH 14",desc:"Couverture partielle du sol. Interventions herbicides."},{name:"Fermeture rang",date:"2026-06-15",bbch:"BBCH 37",desc:"Canopée fermée. Forte demande en eau et azote."},{name:"Grossissement",date:"2026-08-01",bbch:"BBCH 40",desc:"Grossissement actif de la racine. Accumulation de sucres."},{name:"Récolte",date:"2026-10-20",bbch:"BBCH 89",desc:"Teneur en sucre optimale. Arrachage selon planning usine."}]},ci=[{name:"Semis",date:"2026-04-01",bbch:"BBCH 00",desc:"Semis."},{name:"Levée",date:"2026-04-20",bbch:"BBCH 09",desc:"Levée des plantules."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Floraison."},{name:"Récolte",date:"2026-08-20",bbch:"BBCH 89",desc:"Maturité physiologique."}];function di(e){if(!e)return[];const t=e.toLowerCase();for(const i of Object.keys(Qe))if(t.startsWith(i.toLowerCase()))return Qe[i];return ci}function ui(){const e=document.getElementById("toggle-phenologie");e&&e.addEventListener("change",()=>{bt()})}function bt(){document.querySelectorAll(".pheno-overlay").forEach(h=>h.remove());const e=document.getElementById("toggle-phenologie");if(!(e!=null&&e.checked))return;const t=x.crop||E.crop,i=di(t);if(!i.length)return;const n=Date.now(),a=ue()*6e4,s=n-a,l=600,u=46,m=10,r=14,d=28,c=l-u-m,o=r+4,p=180-d,v=i.filter(h=>{const f=new Date(h.date).getTime();return f>=s&&f<=n});v.length&&document.querySelectorAll(".chart-card").forEach(h=>{const f=h.querySelector(".chart-svg, .tensio-svg");if(!f)return;const b=document.createElementNS("http://www.w3.org/2000/svg","g");b.setAttribute("class","pheno-overlay"),v.forEach(g=>{const y=(new Date(g.date).getTime()-s)/a,S=u+y*c,C=document.createElementNS("http://www.w3.org/2000/svg","line");C.setAttribute("x1",S.toFixed(1)),C.setAttribute("x2",S.toFixed(1)),C.setAttribute("y1",o),C.setAttribute("y2",p),C.setAttribute("stroke","#3a9e6a"),C.setAttribute("stroke-width","1"),C.setAttribute("stroke-dasharray","4,3"),b.appendChild(C);const A=14,B=g.name.length>A?g.name.slice(0,A-1)+"…":g.name,M=(S+3).toFixed(1),q=(o+2).toFixed(1),k=document.createElementNS("http://www.w3.org/2000/svg","text");k.setAttribute("x",M),k.setAttribute("y",q),k.setAttribute("transform",`rotate(90, ${M}, ${q})`),k.setAttribute("text-anchor","start"),k.setAttribute("font-size","9"),k.setAttribute("font-family","var(--font)"),k.setAttribute("fill","#3a9e6a"),k.style.cursor="pointer",k.textContent=B,b.appendChild(k);const j=document.createElementNS("http://www.w3.org/2000/svg","rect");j.setAttribute("x",(S-8).toFixed(1)),j.setAttribute("y",o.toString()),j.setAttribute("width","16"),j.setAttribute("height",(p-o).toString()),j.setAttribute("fill","transparent"),j.style.cursor="pointer",j.addEventListener("click",H=>mi(g,H)),b.appendChild(j)}),f.appendChild(b)})}let se=null;function mi(e,t){se&&(se.remove(),se=null);const i=document.createElement("div");i.className="pheno-popover";const n=l=>{const[u,m,r]=l.split("-");return`${r}/${m}/${u}`};i.innerHTML=`
    <div class="pheno-pop-hd">
      <span class="pheno-pop-badge">${e.bbch}</span>
      <span class="pheno-pop-name">${e.name}</span>
      <button class="pheno-pop-close">×</button>
    </div>
    <div class="pheno-pop-date">${n(e.date)}</div>
  `,i.querySelector(".pheno-pop-close").addEventListener("click",()=>{i.remove(),se=null});const a=t.clientX,s=t.clientY;i.style.position="fixed",i.style.top=s-8+"px",i.style.left=a+12+"px",document.body.appendChild(i),se=i,setTimeout(()=>{const l=i.offsetWidth,u=i.offsetHeight;let m=s-8,r=a+12;r+l>window.innerWidth-8&&(r=a-l-12),m+u>window.innerHeight-8&&(m=s-u),i.style.top=Math.max(8,m)+"px",i.style.left=Math.max(8,r)+"px"},0),document.addEventListener("click",function l(u){i.contains(u.target)||(i.remove(),se=null,document.removeEventListener("click",l))},{capture:!0})}function pi(){const e=document.getElementById("toggle-notes");e&&e.addEventListener("change",gt)}function gt(){document.querySelectorAll(".notes-overlay").forEach(o=>o.remove()),et();const e=document.getElementById("toggle-notes");if(!(e!=null&&e.checked))return;const t=ge().filter(o=>o.type==="note"||o.type==="traitement");if(!t.length)return;const i=Date.now(),n=ue()*6e4,a=i-n,s=600,l=46,u=10,m=28,r=s-l-u,d=180-m,c=t.filter(o=>{const p=new Date(o.date+"T12:00:00").getTime();return p>=a&&p<=i});c.length&&document.querySelectorAll(".chart-card").forEach(o=>{const p=o.querySelector(".chart-svg, .tensio-svg");if(!p)return;const v=document.createElementNS("http://www.w3.org/2000/svg","g");v.setAttribute("class","notes-overlay"),c.forEach(h=>{const b=(new Date(h.date+"T12:00:00").getTime()-a)/n,g=l+b*r,y=h.type==="traitement"?"#78c860":"#60a8e0",S=d+9,C=document.createElementNS("http://www.w3.org/2000/svg","polygon"),A=5;C.setAttribute("points",`${g.toFixed(1)},${(S-A).toFixed(1)} ${(g+A).toFixed(1)},${S.toFixed(1)} ${g.toFixed(1)},${(S+A).toFixed(1)} ${(g-A).toFixed(1)},${S.toFixed(1)}`),C.setAttribute("fill",y),C.setAttribute("stroke","#fff"),C.setAttribute("stroke-width","1.5"),v.appendChild(C);const B=document.createElementNS("http://www.w3.org/2000/svg","rect");B.setAttribute("x",(g-9).toFixed(1)),B.setAttribute("y",d.toFixed(1)),B.setAttribute("width","18"),B.setAttribute("height","18"),B.setAttribute("fill","transparent"),B.style.cursor="default",B.addEventListener("mouseenter",M=>vi(h,M)),B.addEventListener("mouseleave",et),v.appendChild(B)}),p.appendChild(v)})}let G=null;function vi(e,t){G||(G=document.createElement("div"),G.className="note-tip",document.body.appendChild(G));const i=e.type==="traitement";let a=`<div class="note-tip-header">
    <span class="note-tip-badge note-tip-badge--${i?"trait":"note"}">
      <i class="bi ${i?"bi-eyedropper":"bi-pencil"}"></i> ${i?"Traitement":"Note"}
    </span>
    <span class="note-tip-date">${(u=>{const[m,r,d]=u.split("-");return`${d}/${r}/${m}`})(e.date)}</span>
  </div>`;e.texte&&(a+=`<div class="note-tip-texte">${e.texte}</div>`),i&&(e.produit||e.dose||e.cible)&&(a+='<div class="note-tip-detail">',e.produit&&(a+=`<span><i class="bi bi-flask"></i> ${e.produit}</span>`),e.dose&&(a+=`<span><i class="bi bi-droplet"></i> ${e.dose}</span>`),e.cible&&(a+=`<span><i class="bi bi-bullseye"></i> ${e.cible}</span>`),a+="</div>"),G.innerHTML=a,G.style.display="block";const s=t.clientX+14,l=t.clientY-10;G.style.left=s+"px",G.style.top=l+"px",requestAnimationFrame(()=>{const u=G.offsetWidth;s+u>window.innerWidth-8&&(G.style.left=t.clientX-u-10+"px")})}function et(){G&&(G.style.display="none")}function hi(){ke()}function ke(){var t,i,n,a;const e=document.getElementById("compare-control");if(e)if(V){const s=((t=ae.find(l=>l.id===V))==null?void 0:t.name)||"Parcelle";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${s} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(i=e.querySelector(".compare-clear-icon"))==null||i.addEventListener("click",l=>{l.stopPropagation(),V=null,ke(),Y()}),(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",tt)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",tt)}function tt(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),i=ae.filter(s=>s.id!==I),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher une parcelle…">
    <div class="compare-dropdown-list">
      ${i.map(s=>`<div class="compare-dropdown-item${s.id===V?" active":""}" data-id="${s.id}"><i class="bi bi-map"></i> ${s.name}</div>`).join("")}
    </div>
  `,t.appendChild(n);const a=n.querySelector(".compare-search-input");a.focus(),a.addEventListener("input",s=>{const l=s.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(u=>{u.style.display=u.textContent.toLowerCase().includes(l)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(s=>{s.addEventListener("click",()=>{V=parseInt(s.dataset.id),n.remove(),ke(),Y()})}),setTimeout(()=>{document.addEventListener("click",function s(l){!n.contains(l.target)&&!t.contains(l.target)&&(n.remove(),document.removeEventListener("click",s))})},0)}function fi(){const e=Ne.find(t=>t.id===E.orgId);yt(e),gi(e),Ee(),Fe(),oe(),_e(),Ei()}const it=["Abricotier","Ail","Amandier","Artichaut","Asperge","Aubergine","Avoine","Basilic","Betterave fourragère","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Chou pommé","Ciboulette","Citrouille","Clémentinier","Courgette","Echalote","Endive","Epinard","Fève","Figuier","Fraisier","Framboisier","Gesse","Giroflier","Haricot vert","Houblon","Kiwi","Lavande","Lentille","Luzerne","Maïs doux","Maïs grain","Maïs semence","Maïs silage","Melon","Menthe","Moutarde","Navet","Nectarinier","Noisetier","Noyer","Oignon","Olivier","Orge de brasserie","Orge de printemps","Orge d'hiver","Pêcher","Persil","Pissenlit","Poireau","Pois chiche","Pois de conserve","Pois fourrager","Pois protéagineux","Poivron","Pomme de terre","Pommier","Poirier","Prunier","Pruneau d'Agen","Radis","Raisin de cuve","Raisin de table","Riz","Romarin","Sarrasin","Seigle","Soja","Sorgho","Tabac","Thym","Tomate","Tournesol","Triticale","Vigne","Cardon","Céleri","Cerise","Châtaignier","Colza","Courge","Fénugrec","Groseillier","Lin fibre","Lin oléagineux","Mâche","Millet","Myrtille","Noix de cajou","Paprika","Patate douce","Pistachier","Poisson-Chat","Quinoa","Safran","Sainfoin","Scorsonère","Shallot","Topinambour","Trèfle","Vesce","Fétuque","Ray-grass","Prairie temporaire","Prairie permanente","Jachère","Autre"];function yt(e){const t=document.getElementById("panel-ident"),i=x,n=i.texture||null,a=i.irrigation||null,s=i.crop||it[0],l=i.env||null,u=n===Ae,m=i.soilAnalysis||{};t.innerHTML=`
    ${xe("Nom",i.name||"—","name","text")}
    ${bi("Culture",s,"crop",it)}
    ${nt("Surface",(i.area?`${i.area} ha`:"—")+' <span class="field-computed">(calculé)</span>')}
    ${je("Environnement",l,"env",At,"Plein champ")}
    ${je("Texture sol",n,"texture",[...kt,Ae],"Indéfini")}
    ${u?`
      ${xe("Argile (%)",String(m.argile??""),"soilArgile","number")}
      ${xe("Limon (%)",String(m.limon??""),"soilLimon","number")}
      ${xe("Sable (%)",String(m.sable??""),"soilSable","number")}
    `:""}
    ${je("Irrigation",a,"irrigation",mt,"Non renseigné")}
    ${nt("Exploitation",e?e.name:"—")}
  `,Q(t,"name",i.name||"",r=>{O({name:r}),dt(r,{label:"Parcelles",href:"parcelles.html"})}),Q(t,"crop",s,r=>O({crop:r})),Q(t,"env",l||"",r=>O({env:r||null})),Q(t,"texture",n||"",r=>{const d=r||null,c={texture:d};d!==Ae&&(c.soilAnalysis=null),O(c),yt(e)}),u&&(Q(t,"soilArgile",String(m.argile??""),r=>O({soilAnalysis:{...x.soilAnalysis,argile:+r}})),Q(t,"soilLimon",String(m.limon??""),r=>O({soilAnalysis:{...x.soilAnalysis,limon:+r}})),Q(t,"soilSable",String(m.sable??""),r=>O({soilAnalysis:{...x.soilAnalysis,sable:+r}}))),Q(t,"irrigation",a||"",r=>O({irrigation:r||null}))}function xe(e,t,i,n="text"){const a=(t||"").replace(/"/g,"&quot;");return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <input type="${n}" class="panel-field-input" data-val value="${a}">
    </div>`}function bi(e,t,i,n){return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${n.map(a=>`<option${a===t?" selected":""}>${a}</option>`).join("")}
      </select>
    </div>`}function je(e,t,i,n,a="—"){const l=n.includes(a)?"":`<option value=""${t?"":" selected"}>${a}</option>`;return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${l}
        ${n.map(u=>`<option${u===(t||a)?" selected":""}>${u}</option>`).join("")}
      </select>
    </div>`}function nt(e,t){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${t}</span>
    </div>`}function Q(e,t,i,n){const a=e.querySelector(`[data-field="${t}"] [data-val]`);if(!a)return;const s=()=>{var u;const l=(u=a.value)==null?void 0:u.trim();l&&l!==i&&(i=l,n(l))};a.addEventListener("change",s),a.tagName==="INPUT"&&a.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),a.blur())})}function gi(e){const t=document.getElementById("panel-geoloc"),i=x.latlngs||E.latlngs,n=Array.isArray(i)&&i.length>=3,a=x.ville||E.ville||(e==null?void 0:e.ville)||"—",s=E.departement||(e==null?void 0:e.departement),l=x.lat??E.lat??(e==null?void 0:e.lat),u=x.lng??E.lng??(e==null?void 0:e.lng);t.innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${s?` (${s})`:""}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${l!=null?l.toFixed(4):"—"}, ${u!=null?u.toFixed(4):"—"}</span>
    </div>
    ${l!=null?`<div class="panel-row">
      <a href="https://www.google.com/maps?q=${l.toFixed(6)},${u.toFixed(6)}" target="_blank" class="itinerary-link">
        <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
      </a>
    </div>`:""}
    <div style="padding:4px 0 4px">
      <a href="parcelle-modifier-contour.html?id=${I}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${n?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function yi(){const e=new Set;return T.filter(i=>x.linkedSensorIds.includes(i.id)).forEach(i=>{const n=F[i.model]||[];W.includes(i.model)||n.forEach(a=>e.add(a.id))}),e}function at(e){const t=F[e]||[];return t.length?`<div class="sensor-metric-badges">${t.map(i=>`<span class="sensor-metric-badge" style="--mc:${i.color}">${i.name}</span>`).join("")}</div>`:""}function Ee(){const e=document.getElementById("panel-sensors"),t=T.filter(p=>x.linkedSensorIds.includes(p.id)),i=T.filter(p=>p.orgId===E.orgId&&!x.linkedSensorIds.includes(p.id)),n=t.filter(p=>!W.includes(p.model)),a={};n.forEach(p=>(F[p.model]||[]).forEach(v=>{a[v.id]=(a[v.id]||0)+1}));const s=Object.entries(a).filter(([,p])=>p>1).map(([p])=>{var v;return((v=Object.values(F).flat().find(h=>h.id===p))==null?void 0:v.name)||p});let l="";if(s.length>0&&(l+=`<div class="sensor-conflict-banner">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <span>Conflit de métriques : <strong>${s.join(", ")}</strong> mesurée(s) par plusieurs capteurs. Les données peuvent être en doublon.</span>
    </div>`),t.length===0)l+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>';else{const p=t.filter(h=>W.includes(h.model)),v=t.filter(h=>!W.includes(h.model));if(l+=v.map(h=>{const f=h.event&&(Array.isArray(h.event)?h.event.length>0:!0),b=f?Array.isArray(h.event)?h.event[0]:h.event:null;return`
      <div class="sensor-linked-row">
        <div class="sensor-linked-info">
          <div style="display:flex;align-items:center;gap:6px">
            <a href="capteur-detail.html?id=${h.id}" class="sensor-linked-link">${Z[h.model]||h.model}</a>
            ${f?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
          </div>
          <span class="sensor-linked-detail">${h.model} · ${h.serial}</span>
          ${f?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${b}</span>`:""}
          ${at(h.model)}
        </div>
        <button class="remove-sensor-btn icon-btn" data-id="${h.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>`}).join(""),p.length>0){const h={};p.forEach(f=>{const b=f.depth!=null?`${f.depth} cm`:f.model;h[b]||(h[b]=[]),h[b].push(f)}),l+=`<div class="sensor-kit-hd">
        <span class="sensor-kit-hd-label">Kit de tensiomètres</span>
        ${at("CHP-15/30")}
      </div>`,Object.entries(h).forEach(([f,b])=>{l+=`<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${f}</div>`,l+=b.map(g=>{const w=g.event&&(Array.isArray(g.event)?g.event.length>0:!0),y=w?Array.isArray(g.event)?g.event[0]:g.event:null;return`
          <div class="sensor-linked-row" style="padding-left:12px">
            <div class="sensor-linked-info">
              <div style="display:flex;align-items:center;gap:6px">
                <a href="capteur-detail.html?id=${g.id}" class="sensor-linked-link">${Z[g.model]||g.model}</a>
                ${w?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
              </div>
              <span class="sensor-linked-detail">${g.model} · ${g.serial}</span>
              ${w?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${y}</span>`:""}
            </div>
            <button class="remove-sensor-btn icon-btn" data-id="${g.id}" title="Retirer">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>`}).join("")})}}e.innerHTML=l;const u=t.some(p=>p.model==="PYRANO"),m=[{name:"Évapotranspiration (ETP)",color:"#c090e0"},...u?[]:[{name:"Rayonnement solaire",color:"#f5c842"}],{name:"Température de rosée",color:"#80c8e8"}],r=document.getElementById("panel-parcel-metrics-ext");r&&(r.innerHTML=`
      <div class="panel-parcel-metrics">
        <div class="panel-parcel-metrics-title">Données spatialisées</div>
        <div class="sensor-metric-badges">
          ${m.map(p=>`<span class="sensor-metric-badge" style="--mc:${p.color}">${p.name}</span>`).join("")}
        </div>
      </div>`);const d=document.getElementById("sensor-add-row"),c=document.getElementById("add-sensor-select");d&&c&&(i.length>0?(c.innerHTML='<option value="">Ajouter un capteur…</option>'+i.map(p=>`<option value="${p.id}">${Z[p.model]||p.model} — ${p.serial}</option>`).join(""),d.style.display=""):d.style.display="none"),e.querySelectorAll(".remove-sensor-btn").forEach(p=>{p.addEventListener("click",()=>{const v=parseInt(p.dataset.id),h=T.find(b=>b.id===v),f=h?`${Z[h.model]||h.model} — ${h.serial}`:`capteur #${v}`;me({title:"Retirer le capteur",message:`Retirer <strong>${f}</strong> de cette parcelle ?<br><br>Les données historiques sont conservées.`,confirmLabel:"Retirer",onConfirm:()=>{const b=x.linkedSensorIds.filter(g=>g!==v);O({linkedSensorIds:b}),ot(b),Ee(),Y(),le()}})})});const o=document.getElementById("add-sensor-btn");o&&o.addEventListener("click",()=>{const p=document.getElementById("add-sensor-select"),v=parseInt(p.value);if(!v)return;const h=T.find(b=>b.id===v);if(!h)return;const f=Pe(h.model);if(f){const g=T.filter(w=>x.linkedSensorIds.includes(w.id)).filter(w=>{const y=Pe(w.model);return y&&y!==f});if(g.length>0){const w=g.map(y=>`${Z[y.model]||y.model} — ${y.serial}`).join(", ");me({title:"Capteur incompatible",message:`Cette parcelle utilise déjà : <strong>${w}</strong>.<br><br>Les capteurs de sol (CHP, CAPA, EC, T_MINI) sont exclusifs — une seule technologie par parcelle.<br><br>Retirer ${g.length>1?"ces capteurs":"ce capteur"} et ajouter le nouveau ?`,confirmLabel:"Remplacer",onConfirm:()=>{const y=new Set(g.map(C=>C.id)),S=x.linkedSensorIds.filter(C=>!y.has(C));O({linkedSensorIds:[...S,v]}),ot(S),rt(h),Ee(),Y(),le()}});return}}if(!W.includes(h.model)){const b=yi(),w=(F[h.model]||[]).map(y=>y.id).filter(y=>b.has(y));if(w.length>0){const y=w.map(C=>{const A=Object.values(F).flat().find(B=>B.id===C);return(A==null?void 0:A.name)||C});if(!confirm(`Attention : ce capteur (${h.model}) mesure des métriques déjà fournies par un autre capteur :
• ${y.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}O({linkedSensorIds:[...x.linkedSensorIds,v]}),rt(h),Ee(),Y(),le()})}function Fe(){var l;const e=document.getElementById("panel-integrations"),t=x.integrations||[],i=It.filter(u=>!t.includes(u));let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':n+=t.map(u=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${u}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(u)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),e.innerHTML=n;const a=document.getElementById("integ-add-row"),s=document.getElementById("add-integ-select");a&&s&&(i.length>0?(s.innerHTML='<option value="">Ajouter une intégration…</option>'+i.map(u=>`<option value="${encodeURIComponent(u)}">${u}</option>`).join(""),a.style.display=""):a.style.display="none"),e.querySelectorAll(".remove-integ-btn").forEach(u=>{u.addEventListener("click",()=>{const m=decodeURIComponent(u.dataset.name);me({title:"Retirer l'intégration",message:`Retirer <strong>${m}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{O({integrations:x.integrations.filter(r=>r!==m)}),Fe()}})})}),(l=document.getElementById("add-integ-btn"))==null||l.addEventListener("click",()=>{const u=document.getElementById("add-integ-select"),m=decodeURIComponent(u.value);m&&(O({integrations:[...x.integrations,m]}),Fe())})}let U=null,K=null;function wi(){if(U!==null)return;const e=Be(I);U=e.linkedOrgMemberIds??te.filter(t=>{var i,n;return t.source==="adherent"&&((i=t.parcelIds)==null?void 0:i.includes(I))&&((n=t.orgIds)==null?void 0:n.includes(E.orgId))}).map(t=>t.id),K=e.linkedConseillerIds??te.filter(t=>{var i;return t.source==="réseau"&&((i=t.parcelIds)==null?void 0:i.includes(I))}).map(t=>t.id)}function st(e,t,i){return`<div class="member-row">
    <div>
      <span class="member-name">${e.prenom} ${e.nom}</span>
      ${i?`<span class="member-role-badge">${e.role}</span>`:""}
    </div>
    ${t?`<button class="remove-membre-btn icon-btn" data-id="${e.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function oe(){var c;wi();const e=((c=document.getElementById("sidebar"))==null?void 0:c.getAttribute("data-role"))==="adherent-reseau",t=document.getElementById("panel-membres"),i=document.getElementById("panel-membres-section"),n=te.filter(o=>{var p;return o.source==="adherent"&&((p=o.orgIds)==null?void 0:p.includes(E.orgId))}),a=n.filter(o=>U.includes(o.id));i&&(i.style.display=!e&&n.length===0?"none":""),t&&(t.innerHTML=a.length?a.map(o=>st(o,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',t.querySelectorAll(".remove-membre-btn").forEach(o=>{o.addEventListener("click",()=>{const p=parseInt(o.dataset.id),v=te.find(h=>h.id===p);me({title:"Retirer le membre",message:`Retirer <strong>${v?`${v.prenom} ${v.nom}`:`membre #${p}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{U=U.filter(h=>h!==p),ie(I,{linkedOrgMemberIds:U}),oe()}})})}));const s=document.getElementById("add-membre-org-row");s&&(s.style.display="");const l=document.getElementById("add-membre-org-select");l&&(l.innerHTML='<option value="">Associer un membre…</option>',n.filter(o=>!U.includes(o.id)).forEach(o=>{const p=document.createElement("option");p.value=o.id,p.textContent=`${o.prenom} ${o.nom}`,l.appendChild(p)})),document.getElementById("add-membre-org-btn").onclick=()=>{const o=parseInt(l==null?void 0:l.value);!o||U.includes(o)||(U.push(o),ie(I,{linkedOrgMemberIds:U}),oe())};const u=document.getElementById("panel-conseillers"),m=document.getElementById("panel-conseillers-section"),r=te.filter(o=>o.source==="réseau"&&K.includes(o.id));m&&(m.style.display=e&&r.length===0?"none":""),u&&(u.innerHTML=r.length?r.map(o=>st(o,!e,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',e||u.querySelectorAll(".remove-membre-btn").forEach(o=>{o.addEventListener("click",()=>{const p=parseInt(o.dataset.id),v=te.find(h=>h.id===p);me({title:"Retirer le conseiller",message:`Retirer <strong>${v?`${v.prenom} ${v.nom}`:`conseiller #${p}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{K=K.filter(h=>h!==p),ie(I,{linkedConseillerIds:K}),oe()}})})}));const d=document.getElementById("add-conseiller-row");if(d&&(d.style.display=e?"none":""),!e){const o=document.getElementById("add-membre-select");o&&(o.innerHTML='<option value="">Ajouter un conseiller…</option>',te.filter(p=>p.source==="réseau"&&!K.includes(p.id)).forEach(p=>{const v=document.createElement("option");v.value=p.id,v.textContent=`${p.prenom} ${p.nom} (${p.role})`,o.appendChild(v)})),document.getElementById("add-membre-btn").onclick=()=>{const p=parseInt(o==null?void 0:o.value);!p||K.includes(p)||(K.push(p),ie(I,{linkedConseillerIds:K}),oe())}}}function _e(){const e=document.getElementById("panel-alertes"),t=x.alertes||[],i={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':n+=t.map((a,s)=>`
      <div class="alert-item">
        <i class="bi ${i[a.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition||""} ${a.threshold||""} ${a.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${s}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),n+='<button id="create-alert-btn" class="action-btn" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=n,e.querySelectorAll(".remove-alert-btn").forEach(a=>{a.addEventListener("click",()=>{const s=parseInt(a.dataset.idx),l=[...x.alertes];l.splice(s,1),O({alertes:l}),_e()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{xi(e)})}function $i(){const e=[];return T.filter(i=>x.linkedSensorIds.includes(i.id)).forEach(i=>{(F[i.model]||[]).forEach(a=>{e.find(s=>s.id===a.id)||e.push({id:a.id,name:a.name,unit:a.unit})})}),Oe.forEach(i=>{e.find(n=>n.id===i.id)||e.push({id:i.id,name:i.name,unit:i.unit})}),e}function xi(e){if(e.querySelector(".alert-create-form"))return;const i=$i(),n=document.createElement("div");n.className="alert-create-form",n.innerHTML=`
    <div class="alert-form-row">
      <select id="alert-metric" class="panel-add-select">
        <option value="">Métrique…</option>
        ${i.map(a=>`<option value="${a.id}" data-unit="${a.unit}">${a.name}</option>`).join("")}
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
  `,e.appendChild(n),n.querySelector("#alert-metric").addEventListener("change",a=>{const s=a.target.selectedOptions[0];n.querySelector("#alert-unit-label").textContent=(s==null?void 0:s.dataset.unit)||"—"}),n.querySelector("#alert-save-btn").addEventListener("click",()=>{const s=n.querySelector("#alert-metric").value,l=i.find(d=>d.id===s),u=n.querySelector("#alert-condition").value,m=n.querySelector("#alert-threshold").value;if(!s||!m)return;const r={type:"seuil",label:`Alerte ${(l==null?void 0:l.name)||s}`,metric:(l==null?void 0:l.name)||s,condition:u,threshold:m,unit:(l==null?void 0:l.unit)||""};O({alertes:[...x.alertes||[],r]}),_e()}),n.querySelector("#alert-cancel-btn").addEventListener("click",()=>n.remove())}function Ci(e,t){const i=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(i),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function Si(){const e=x.name||E.name||"Parcelle",t=Me(x.linkedSensorIds);let i;if(V){const o=ae.find(f=>f.id===V),p=T.filter(f=>f.parcelIds.includes(V)).map(f=>f.id),v=Me(p),h=(o==null?void 0:o.name)||"Comparaison";i=[...t.map(f=>({h:`[${e}] ${f.name} (${f.unit})`,gen:f.base})),...v.map(f=>({h:`[${h}] ${f.name} (${f.unit})`,gen:f.base}))]}else i=t.map(o=>({h:`${o.name} (${o.unit})`,gen:o.base}));const n=ue()*6e4,a=we()*6e4,s=X==="custom"&&de?de:new Date,l=X==="custom"&&ce?ce:new Date(s-n),u=Math.min(Math.ceil((s-l)/a)+1,500),m=(s-l)/Math.max(u-1,1),r=["Horodatage",...i.map(o=>o.h)].join(";"),d=Array.from({length:u},(o,p)=>[new Date(l.getTime()+p*m).toISOString().replace("T"," ").slice(0,19),...i.map(h=>h.gen())].join(";")),c=e.replace(/[^\w]/g,"_");Ci([r,...d].join(`\r
`),`${c}_${X}_${new Date().toISOString().slice(0,10)}.csv`)}function me({title:e,message:t,confirmLabel:i="Confirmer",onConfirm:n}){const a=document.createElement("div");a.className="modal add-modal",a.style.zIndex="9999",a.innerHTML=`
    <div class="add-modal-content" style="max-width:400px">
      <div class="add-modal-header">
        <span class="add-modal-title">${e}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div style="padding:16px 20px;display:flex;flex-direction:column;gap:16px">
        <p style="margin:0;font-size:13px;color:var(--txt2);line-height:1.5">${t}</p>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button class="btn-secondary confirm-cancel">Annuler</button>
          <button class="btn-danger confirm-ok">${i}</button>
        </div>
      </div>
    </div>`,a.querySelector(".add-modal-close").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-cancel").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-ok").addEventListener("click",()=>{a.remove(),n()}),a.addEventListener("click",s=>{s.target===a&&a.remove()}),document.body.appendChild(a)}function Ei(){const e=document.getElementById("panel-actions");e.innerHTML=`
    <button class="action-btn action-btn--danger" id="archive-parcel-btn"><i class="bi bi-archive"></i> Archiver la parcelle</button>
  `,e.querySelector("#archive-parcel-btn").addEventListener("click",()=>{const t=T.filter(n=>x.linkedSensorIds.includes(n.id)),i=t.length?t.map(n=>`<strong>${n.model} ${n.serial}</strong>`).join(", "):"aucun capteur lié";me({title:"Archiver la parcelle",message:`Vous êtes sur le point d'archiver <strong>${x.name||E.name}</strong>.<br><br>Capteurs liés : ${i}.<br><br>L'archivage masque la parcelle sans supprimer les données historiques.`,confirmLabel:"Archiver",onConfirm:()=>showToast("Parcelle archivée (fonctionnalité à venir)")})})}function Mi(){if(Te){Te.invalidateSize();return}const e=Ne.find(n=>n.id===E.orgId);if(!(e!=null&&e.lat))return;const t=x.latlngs||E.latlngs,i=L.map("parcel-mini-map",{zoomControl:!1,attributionControl:!1});if(Te=i,L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(i),Array.isArray(t)&&t.length>=3){const n=L.polygon(t,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(i);i.fitBounds(n.getBounds(),{padding:[10,10]})}else i.setView([e.lat,e.lng],13),L.circleMarker([e.lat,e.lng],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(i)}function Bi(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),i=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",i.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}let Te=null;function ki(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(i=>i.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.pane).classList.add("active"),t.dataset.pane==="tab-journal"&&ze()})})}const Ai={"previsions-5j":{size:"1x1",title:"Prévisions 5 jours",icon:"bi-calendar3-week",color:"#5b8dd9",render:Ii,footer:{label:"Voir les prévisions",href:"previsions.html"}},weephyt:{size:"1x1",title:"Weephyt",icon:"bi-shield-check",color:"#2d9e5f",render:Li,footer:{label:"Voir Weephyt",href:"#"}},cumuls:{size:"1x1",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#2E75B6",render:De},bilan:{size:"1x1",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4",render:Oi,footer:{label:"Voir les données",href:"#",tab:"donnees"}},irrigations:{size:"1x1",title:"Irrigations",icon:"bi-moisture",color:"#FF8C00",render:ye,footer:{label:"Voir les irrigations",href:`irrigation.html?plot=${I}`}},gel:{size:"1x1",title:"Suivi du risque de gel",icon:"bi-thermometer-snow",color:"#FEE7B4",render:Pi,footer:{label:"Voir les prévisions",href:"previsions.html"}},dpv:{size:"1x1",title:"DPV",icon:"bi-droplet-half",color:"#5E88EC",render:Hi,footer:{label:"Voir les données",href:"#",tab:"donnees"}},thi:{size:"1x1",title:"THI",icon:"bi-heart-pulse",color:"#e0a030",render:qi,footer:{label:"Voir les données",href:"#",tab:"donnees"}},"temp-rosee":{size:"1x1",title:"Température de rosée",icon:"bi-thermometer",color:"#72B0D8",render:Fi,footer:{label:"Voir les données",href:"#",tab:"donnees"}},"temp-sol":{size:"1x1",title:"Température du sol",icon:"bi-layers",color:"#795548",render:Di,footer:{label:"Voir les données",href:"#",tab:"donnees"}},maizy:{size:"1x1",title:"Maï'zy",icon:"bi-calendar-check",color:"#2d9e5f",render:Ri,footer:{label:"Voir Maï'zy",href:"#"}},tavelure:{size:"1x1",title:"Tavelure Pomme",icon:"bi-exclamation-triangle",color:"#e07050",render:Ni,footer:{label:"Voir Tavelure",href:"#"}},"suivi-culture":{size:"1x1",title:"Suivi de culture",icon:"bi-flower2",color:"#78d8a0",render:ee},decitrait:{size:"1x1",title:"Decitrait",icon:"bi-shield",color:"#6080b0",render:ee,footer:{label:"Voir Decitrait",href:"#"}},"previsions-6h":{size:"1x1",title:"Prévisions à 6 heures",icon:"bi-clock",color:"#5b8dd9",render:ee,footer:{label:"Voir les prévisions",href:"previsions.html"}},"previsions-jour":{size:"1x1",title:"Prévisions du jour",icon:"bi-sun",color:"#f5c842",render:ee,footer:{label:"Voir les prévisions",href:"previsions.html"}},"previsions-tensio":{size:"1x1",title:"Prévisions tensiométrie",icon:"bi-graph-down",color:"#A6C157",render:ee,footer:{label:"Voir les prévisions",href:"previsions.html"}},"w-station":{size:"1x1",title:"Station météo",icon:"bi-broadcast",color:"#FBAF05",render:J("w-station"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-thygro":{size:"1x1",title:"Thermomètre-hygromètre",icon:"bi-thermometer-half",color:"#FBAF05",render:J("w-thygro"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-tsol":{size:"1x1",title:"Thermomètre de sol",icon:"bi-layers",color:"#795548",render:J("w-tsol"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-anem":{size:"1x1",title:"Anémomètre",icon:"bi-wind",color:"#616161",render:J("w-anem"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-pyrano":{size:"1x1",title:"Pyranomètre",icon:"bi-sun",color:"#CBCB0B",render:J("w-pyrano"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-lws":{size:"1x1",title:"Capteur d'humectation foliaire",icon:"bi-droplet",color:"#00887E",render:J("w-lws"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-par":{size:"1x1",title:"Capteur PAR",icon:"bi-brightness-high",color:"#4CBB17",render:J("w-par"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-capa":{size:"1x1",title:"Sonde capacitive",icon:"bi-moisture",color:"#ED9A2C",render:J("w-capa"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-tensio":{size:"1x1",title:"Tensiomètre",icon:"bi-graph-down",color:"#A6C157",render:J("w-tensio"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-ec":{size:"1x1",title:"Sonde de fertirrigation",icon:"bi-plug",color:"#2BCDDE",render:J("w-ec"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"profil-capteurs":{size:"1x1",title:"Profil capteurs",icon:"bi-bar-chart",color:"#5b8dd9",render:ee},"niveau-reservoir":{size:"1x1",title:"Niveau de réservoir (RFU)",icon:"bi-droplet-fill",color:"#0172A4",render:ee},"profil-reservoir":{size:"1x1",title:"Profil de réservoir",icon:"bi-clipboard-data",color:"#0172A4",render:ee}},wt=()=>`dash-widgets-parcel-${I}`;function pe(){try{const e=JSON.parse(localStorage.getItem(wt()));if(Array.isArray(e)&&e.length)return e}catch{}return ji()}function ve(e){localStorage.setItem(wt(),JSON.stringify(e))}function ot(e){const t=T.filter(r=>e.includes(r.id)),i=new Set(t.map(r=>r.model)),n=[...i].some(r=>r.startsWith("CAPA-")),a=[...i].some(r=>W.includes(r)),s=new Set(["previsions-5j","weephyt","cumuls"]);(i.has("P+")||i.has("PT")||i.has("SMV")||i.has("P"))&&s.add("w-station"),i.has("TH")&&s.add("w-thygro"),i.has("T_MINI")&&s.add("w-tsol"),i.has("W")&&s.add("w-anem"),i.has("PYRANO")&&s.add("w-pyrano"),i.has("LWS")&&s.add("w-lws"),i.has("T_GEL")&&s.add("gel"),i.has("PAR")&&s.add("w-par"),n&&s.add("w-capa"),a&&s.add("w-tensio"),i.has("EC")&&s.add("w-ec"),(a||n)&&s.add("bilan"),(!!E.irrigation&&E.irrigation!=="Non irrigué"||_.some(r=>r.plotId===E.id))&&s.add("irrigations");const u=pe(),m=u.filter(r=>s.has(r));m.length!==u.length&&ve(m)}function rt(e){const t=pe(),i=a=>{t.includes(a)||t.push(a)},n=e.model;(n==="P+"||n==="PT"||n==="SMV"||n==="P")&&i("w-station"),n==="TH"&&i("w-thygro"),n==="T_MINI"&&i("w-tsol"),n==="W"&&i("w-anem"),n==="PYRANO"&&i("w-pyrano"),n==="LWS"&&i("w-lws"),n==="T_GEL"&&i("gel"),n==="PAR"&&i("w-par"),n==="EC"&&i("w-ec"),n.startsWith("CAPA-")&&(i("w-capa"),i("bilan")),W.includes(n)&&(i("w-tensio"),i("bilan")),ve(t)}function ji(){const e=T.filter(l=>x.linkedSensorIds.includes(l.id)),t=new Set(e.map(l=>l.model)),i=[...t].some(l=>l.startsWith("CAPA-")),n=[...t].some(l=>W.includes(l)),a=["previsions-5j","weephyt","cumuls"];return(t.has("P+")||t.has("PT")||t.has("SMV")||t.has("P"))&&a.push("w-station"),t.has("TH")&&a.push("w-thygro"),t.has("T_MINI")&&a.push("w-tsol"),t.has("W")&&a.push("w-anem"),t.has("PYRANO")&&a.push("w-pyrano"),t.has("LWS")&&a.push("w-lws"),t.has("T_GEL")&&a.push("gel"),t.has("PAR")&&a.push("w-par"),i&&a.push("w-capa"),n&&a.push("w-tensio"),t.has("EC")&&a.push("w-ec"),(n||i)&&a.push("bilan"),(!!E.irrigation&&E.irrigation!=="Non irrigué"||_.some(l=>l.plotId===E.id))&&a.push("irrigations"),a}function le(){const e=document.getElementById("dash-grid");if(!e)return;const t=pe();!t.includes("irrigations")&&_.some(i=>i.plotId===E.id)&&(t.push("irrigations"),ve(t)),e.innerHTML="",t.forEach(i=>{const n=Ai[i];if(!n)return;const a=document.createElement("div");a.className=`dash-block dash-block--${n.size}`,a.dataset.id=i,a.draggable=!0;const s=n.footer?`<div class="dash-block-ft"><a class="dash-block-ft-link" href="${n.footer.href}"${n.footer.tab?` data-tab="${n.footer.tab}"`:""}>${n.footer.label} →</a></div>`:"";a.innerHTML=`
      <div class="dash-block-hd" style="color:${n.color}">
        <span style="display:flex;align-items:center;gap:6px"><i class="bi ${n.icon}"></i> ${n.title}</span>
        <button class="dash-menu-btn" data-wid="${i}" title="Options" aria-label="Options">···</button>
      </div>
      <div class="dash-block-body" id="dblock-${i}"></div>
      ${s}`,e.appendChild(a),n.render(a.querySelector(`#dblock-${i}`))}),e.querySelectorAll(".dash-menu-btn").forEach(i=>{i.addEventListener("click",n=>{var r,d,c,o;n.stopPropagation(),(r=document.querySelector(".dash-dropdown"))==null||r.remove();const a=i.dataset.wid,s=document.createElement("div");s.className="dash-dropdown";const l=a==="irrigations"?`
        <button class="dash-dd-item" data-action="set-vol">Définir le volume limité de la parcelle</button>
        <button class="dash-dd-item" data-action="set-irrig-type">Modifier le type d'irrigation</button>`:"";s.innerHTML=`${l}<button class="dash-dd-item dash-dd-remove" data-action="remove" data-wid="${a}">Retirer le widget</button>`;const u=i.getBoundingClientRect(),m=e.getBoundingClientRect();s.style.top=`${u.bottom-m.top+4}px`,s.style.right=`${m.right-u.right}px`,e.style.position="relative",e.appendChild(s),(d=s.querySelector('[data-action="remove"]'))==null||d.addEventListener("click",()=>{s.remove();const p=pe().filter(v=>v!==a);ve(p),le()}),(c=s.querySelector('[data-action="set-vol"]'))==null||c.addEventListener("click",()=>{s.remove(),Re("vol")}),(o=s.querySelector('[data-action="set-irrig-type"]'))==null||o.addEventListener("click",()=>{s.remove(),Re("type")}),setTimeout(()=>document.addEventListener("click",()=>s.remove(),{once:!0}),0)})}),e.querySelectorAll(".dash-block-ft-link[data-tab]").forEach(i=>{i.addEventListener("click",n=>{var a;n.preventDefault(),(a=document.querySelector(`.detail-tab-btn[data-pane="tab-${i.dataset.tab}"]`))==null||a.click()})}),zi(e)}function $t(e,t=380,i=90){const u=t-28-8,m=i-6-20,r=e.flatMap(g=>g.values);let d=Math.min(...r),c=Math.max(...r);d===c&&(d-=1,c+=1);const o=e[0].values.length,p=g=>(28+g/(o-1)*u).toFixed(1),v=g=>(6+m-(g-d)/(c-d)*m).toFixed(1),h=[.25,.5,.75].map(g=>{const w=(6+g*m).toFixed(1);return`<line x1="28" y1="${w}" x2="${t-8}" y2="${w}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),f=[d,(d+c)/2,c].map(g=>`<text x="25" y="${(+v(g)+3.5).toFixed(0)}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>`).join(""),b=e.map(g=>`<path d="${g.values.map((y,S)=>`${S?"L":"M"}${p(S)},${v(y)}`).join("")}" fill="none" stroke="${g.color}" stroke-width="1.8" stroke-linejoin="round"/>`).join("");return`<svg width="100%" height="${i}" viewBox="0 0 ${t} ${i}" preserveAspectRatio="none">${f}${h}${b}</svg>`}function Ti(e,t,i,n){const d=(f,b)=>{const g=Math.PI+f*Math.PI,w=Math.PI+b*Math.PI,y=(80+60*Math.cos(g)).toFixed(1),S=(90+60*Math.sin(g)).toFixed(1),C=(80+60*Math.cos(w)).toFixed(1),A=(90+60*Math.sin(w)).toFixed(1);return`M${y},${S} A60,60,0,${b-f>.5?1:0},1,${C},${A}`},c=d(0,1),o=t.filter(f=>f.from<e).map(f=>`<path d="${d(f.from,Math.min(f.to,e))}" fill="none" stroke="${f.color}" stroke-width="12" stroke-linecap="butt"/>`).join(""),p=Math.PI+e*Math.PI,v=(80+60*Math.cos(p)).toFixed(1),h=(90+60*Math.sin(p)).toFixed(1);return`<svg width="160" height="100" viewBox="0 0 160 100">
    <path d="${c}" fill="none" stroke="var(--bdr2)" stroke-width="12" stroke-linecap="butt"/>
    ${o}
    <circle cx="${v}" cy="${h}" r="5" fill="white" stroke="var(--txt3)" stroke-width="1.5"/>
    <text x="80" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="var(--txt)">${n}</text>
    <text x="80" y="96" text-anchor="middle" font-size="9" fill="var(--txt3)">${i}</text>
  </svg>`}function Ii(e){const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],n=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],a=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],s=new Date,l=ae.find(o=>o.id===I),u=Ne.find(o=>o.id===(l==null?void 0:l.orgId)),m=(l==null?void 0:l.ville)||(u==null?void 0:u.ville)||"—",r=(o,p)=>{const v=new Date(s);v.setDate(v.getDate()+o);const h=Math.floor((I*7+o*3)%11/2.2);return{lbl:o===0?"Auj.":t[v.getDay()],date:`${v.getDate()} ${i[v.getMonth()]}`,tmax:$(17+p,34+p),tmin:$(4+p,15+p),pluie:h>=3?$(2,18):0,vent:$(10,35),rafales:$(25,70),wi:h}},d=[0,1,2].map(o=>r(o,0)).concat([3,4].map(o=>r(o,-1))),c=o=>`
    <div class="w-prev5-day">
      <div class="w-prev5-daylbl">${o.lbl}</div>
      <div class="w-prev5-date">${o.date}</div>
      <i class="bi ${n[o.wi]} w-prev5-icon" title="${a[o.wi]}"></i>
      <div class="w-prev5-row"><i class="bi bi-droplet-fill" style="color:#45b7d1;font-size:9px"></i><span>${o.pluie>0?o.pluie+" mm":"—"}</span></div>
      <div class="w-prev5-row w-prev5-tmax"><i class="bi bi-thermometer-high" style="font-size:9px"></i>${o.tmax}°</div>
      <div class="w-prev5-row w-prev5-tmin"><i class="bi bi-thermometer-low" style="font-size:9px"></i>${o.tmin}°</div>
      <div class="w-prev5-row" style="color:var(--txt3)"><i class="bi bi-wind" style="font-size:9px"></i>${o.vent}</div>
      <div class="w-prev5-row" style="color:var(--txt3);font-size:9px"><i class="bi bi-arrow-up-right" style="font-size:9px"></i>${o.rafales}</div>
    </div>`;e.innerHTML=`
    <div class="w-prev5-loc"><i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i> ${m}</div>
    <div class="w-prev5-model-hdr">
      <span class="w-prev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="w-prev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="w-prev5-grid">${d.map(c).join("")}</div>`}function Li(e){const t=new Date,i=x.crop||E.crop||"",n=[{label:"Herbicides de contact",seed:7},{label:"Fongicides",seed:3},{label:"Herbicides racinaires",seed:11},{label:"Herbicides systémiques",seed:5}],a=Array.from({length:12},(u,m)=>{const r=new Date(t);return r.setHours(r.getHours()+m),r}),s=u=>`${String(u.getHours()).padStart(2,"0")}h`,l=u=>{const m=a.map((r,d)=>(u.seed*17+d*5)%11<6);return a.map((r,d)=>`
      <div class="w-weephyt-dot-wrap" title="${s(r)} — ${m[d]?"Fenêtre OK":"Fenêtre non OK"}">
        <div class="w-weephyt-tl-dot" style="background:${m[d]?"#2d9e5f":"#e07050"}"></div>
        <div class="w-weephyt-tl-lbl">${d%3===0?s(r):""}</div>
      </div>`).join("")};e.innerHTML=`<div class="w-weephyt-wrap">
    <div class="w-weephyt-tl-legend"><span style="color:#2d9e5f">● OK</span><span style="color:#e07050">● Non OK</span></div>
    ${n.map(u=>`
      <div class="w-weephyt-family">
        <div class="w-weephyt-family-label">${u.label}</div>
        <div class="w-weephyt-timeline">${l(u)}</div>
      </div>`).join("")}
    <div class="w-weephyt-src">Via <strong>Weephyt</strong> · ${i||"—"}</div>
  </div>`}const xt=()=>`w-cumuls-state-${I}`;function Ct(){try{return JSON.parse(localStorage.getItem(xt()))||{}}catch{return{}}}function Ie(e){const t=Ct();localStorage.setItem(xt(),JSON.stringify({...t,...e}))}function De(e){const t=T.filter(r=>x.linkedSensorIds.includes(r.id)),i=new Set(t.flatMap(r=>(F[r.model]||[]).map(d=>d.id))),n=`${new Date().getFullYear()}-01-01`,a=Ct(),s=new Set(a.hidden||[]),l=a.dates||{},u=a.cfg||{},m=[{id:"etp",label:"Évapotranspiration",value:D(20,80).toFixed(1),unit:"mm",color:"#c090e0",icon:"bi-sun",show:!0},{id:"pluie",label:"Pluie",value:$(10,50),unit:"mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy",show:i.has("pluie")},{id:"djc",label:"Degrés jours",value:$(40,180),unit:"DJ",color:"#e07050",icon:"bi-thermometer-half",show:i.has("temp"),cfg:!0,cfgLabel:`${u.djMin??0}–${u.djMax??18}°C`,cfgFields:[{key:"djMin",label:"T min",def:0},{key:"djMax",label:"T max",def:18}]},{id:"hfroid",label:"Heures de froid",value:$(5,40),unit:"h",color:"#5b8dd9",icon:"bi-snow",show:i.has("temp"),cfg:!0,cfgLabel:`< ${u.hfSeuil??7.2}°C`,cfgFields:[{key:"hfSeuil",label:"Seuil",def:7.2}]},{id:"humec",label:"Humectation",value:D(2,20).toFixed(1),unit:"h",color:"#78d8a0",icon:"bi-droplet",show:i.has("humec")},{id:"enso",label:"Ensoleillement",value:D(30,90).toFixed(1),unit:"h",color:"#f5c842",icon:"bi-brightness-high",show:!0}].filter(r=>r.show&&!s.has(r.id));e.innerHTML=`<div class="w-cumuls-list">${m.map(r=>{const d=l[r.id]||n;return d.split("-").reverse().join("/"),`
      <div class="w-cumul-item">
        <i class="bi ${r.icon} w-cumul-icon" style="color:${r.color}"></i>
        <div class="w-cumul-body">
          <div class="w-cumul-lbl">${r.label}</div>
          <div class="w-cumul-val" style="color:${r.color}">${r.value}<span class="w-cumul-unit"> ${r.unit}</span></div>
          <div class="w-cumul-date">Depuis le <input type="date" class="w-cumul-date-input" data-cid="${r.id}" value="${d}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px">${r.cfg?`<button class="w-cumul-cfg" data-cid="${r.id}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px;line-height:1"><i class="bi bi-gear"></i> ${r.cfgLabel}</button>`:""}</div>
        </div>
        <button class="w-cumul-del" data-cid="${r.id}" title="Retirer">×</button>
      </div>`}).join("")}</div>`,e.querySelectorAll(".w-cumul-del").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation(),s.add(r.dataset.cid),Ie({hidden:[...s]}),De(e)})}),e.querySelectorAll(".w-cumul-date-input").forEach(r=>{r.addEventListener("change",()=>{l[r.dataset.cid]=r.value,Ie({dates:l})})}),e.querySelectorAll(".w-cumul-cfg").forEach(r=>{r.addEventListener("click",d=>{var v;d.stopPropagation();const c=r.dataset.cid,o=m.find(h=>h.id===c);if(!(o!=null&&o.cfgFields))return;(v=e.querySelector(".w-cumul-cfg-panel"))==null||v.remove();const p=document.createElement("div");p.className="w-cumul-cfg-panel",p.style.gridColumn="1 / -1",p.innerHTML=`<div class="w-cumul-cfg-title">Paramétrer ${o.label}</div>`+o.cfgFields.map(h=>`
          <label class="w-cumul-cfg-row">
            <span>${h.label} (°C)</span>
            <input type="number" class="w-cumul-cfg-inp" data-key="${h.key}" value="${u[h.key]??h.def}" step="0.1">
          </label>`).join("")+'<button class="w-cumul-cfg-ok">OK</button>',r.closest(".w-cumul-item").after(p),p.querySelector(".w-cumul-cfg-ok").addEventListener("click",()=>{p.querySelectorAll(".w-cumul-cfg-inp").forEach(h=>{u[h.dataset.key]=parseFloat(h.value)||0}),Ie({cfg:u}),p.remove(),De(e)})})})}function Pi(e){if(!T.filter(c=>x.linkedSensorIds.includes(c.id)).some(c=>c.model==="T_GEL")){e.innerHTML='<div class="dash-empty">Capteur T_GEL non lié</div>';return}const i=25,n=D(0,5),a=Array.from({length:i},(c,o)=>+(n+o*.18+D(-.8,.8)).toFixed(1)),s=a.map(c=>+(c-D(1,2.5)).toFixed(1)),l=$t([{values:a,color:"#23B19B"},{values:s,color:"#5E88EC"}],380,100),u=a[i-1],m=s[i-1],r=$(5,8),d=String(Math.floor(Math.random()*60)).padStart(2,"0");e.innerHTML=`<div class="w-gel-wrap">
    <div class="w-gel-legend">
      <span style="color:#23B19B"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sèche</span>
      <span style="color:#5E88EC"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. humide</span>
      <span style="font-size:10px;color:var(--txt3)">12 dernières heures</span>
    </div>
    <div class="w-gel-chart">${l}</div>
    <div class="w-gel-cards">
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. sèche </span><span class="w-gel-card-val" style="color:#23B19B">${u}°C</span></div>
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. humide </span><span class="w-gel-card-val" style="color:#5E88EC">${m}°C</span></div>
    </div>
    <div class="w-gel-meteo">
      <div class="w-gel-meteo-row"><i class="bi bi-sunrise" style="color:#CBCB0B"></i><span>Lever du soleil</span><strong>${r}h${d}</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-cloud" style="color:#8090a0"></i><span>Couverture nuageuse</span><strong>${$(20,80)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i><span>Humidité</span><strong>${$(60,90)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-wind" style="color:#616161"></i><span>Vent moyen</span><strong>${$(5,25)} km/h</strong></div>
    </div>
  </div>`}function Hi(e){const t=T.filter(o=>x.linkedSensorIds.includes(o.id));if(!t.some(o=>{const p=F[o.model]||[];return p.some(v=>v.id==="temp")&&p.some(v=>v.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=D(18,30),a=$(40,85),l=+(.611*Math.exp(17.27*n/(n+237.3))*(1-a/100)).toFixed(2),u=Math.min(l/2,1),m=l<.4?"#5b8dd9":l<.8?"#2d9e5f":l<1.2?"#f5a030":"#e07050",r=l<.4?"Transpiration faible":l<.8?"Transpiration optimale":l<1.2?"Forte transpiration":"Stress hydrique",d=[{from:0,to:.2,color:"#5b8dd9"},{from:.2,to:.4,color:"#45b7d1"},{from:.4,to:.6,color:"#2d9e5f"},{from:.6,to:.8,color:"#a0c840"},{from:.8,to:.9,color:"#f5a030"},{from:.9,to:1,color:"#e07050"}],c=t.find(o=>{const p=F[o.model]||[];return p.some(v=>v.id==="temp")&&p.some(v=>v.id==="humidite")});e.innerHTML=`<div class="w-dpv-wrap">
    <div class="w-dpv-gauge" style="color:${m}">${Ti(u,d,r,l+" kPa")}</div>
    <div class="w-dpv-details">
      <div class="w-dpv-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${n.toFixed(1)} °C</div>
      <div class="w-dpv-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${a} %</div>
    </div>
    ${c?`<div class="w-sensor-src">${Z[c.model]||c.model} · ${c.serial}</div>`:""}
  </div>`}function qi(e){if(!T.filter(o=>x.linkedSensorIds.includes(o.id)).some(o=>{const p=F[o.model]||[];return p.some(v=>v.id==="temp")&&p.some(v=>v.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=D(20,35),a=$(45,90),s=+(n-.55*(1-a/100)*(n-14.5)).toFixed(0),l=s<68?"#2d9e5f":s<72?"#f5c842":s<79?"#f5a030":"#e07050",u=s<68?"Confort":s<72?"Stress léger":s<79?"Stress modéré":"Stress sévère",m=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],r=new Date,d=Array.from({length:3},(o,p)=>{const v=new Date(r);return v.setDate(v.getDate()+p+1),{day:m[v.getDay()],m:$(64,72),j:$(68,80),s:$(62,70)}}),c=o=>o<68?"#2d9e5f":o<72?"#f5c842":"#f5a030";e.innerHTML=`<div class="w-thi-wrap">
    <div class="w-thi-header">
      <div class="w-thi-score" style="color:${l}">
        <div class="w-thi-val">${s}</div>
        <div class="w-thi-status">${u}</div>
      </div>
      <button class="w-thi-info-btn" title="Légende THI"><i class="bi bi-info-circle"></i></button>
    </div>
    <div class="w-thi-details">
      <div class="w-thi-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${n.toFixed(1)} °C</div>
      <div class="w-thi-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${a} %</div>
    </div>
    <div class="w-thi-forecast">
      <div class="w-thi-fc-label">Prévisions</div>
      ${d.map(o=>`<div class="w-thi-fc-row">
        <span class="w-thi-fc-day">${o.day}</span>
        <span class="w-thi-fc-val" style="color:${c(o.m)}">${o.m}</span>
        <span class="w-thi-fc-val" style="color:${c(o.j)}">${o.j}</span>
        <span class="w-thi-fc-val" style="color:${c(o.s)}">${o.s}</span>
      </div>`).join("")}
      <div class="w-thi-fc-legend"><span>Matin</span><span>Journée</span><span>Soir</span></div>
    </div>
  </div>`,e.querySelector(".w-thi-info-btn").addEventListener("click",o=>{o.stopPropagation();const p=e.querySelector(".w-thi-legend");if(p){p.remove();return}const v=document.createElement("div");v.className="w-thi-legend",v.innerHTML=`
      <div class="w-thi-legend-title">Échelle THI</div>
      <div class="w-thi-legend-row" style="color:#2d9e5f"><span class="w-thi-legend-range">&lt; 68</span><span>Confort</span></div>
      <div class="w-thi-legend-row" style="color:#f5c842"><span class="w-thi-legend-range">68 – 71</span><span>Stress léger</span></div>
      <div class="w-thi-legend-row" style="color:#f5a030"><span class="w-thi-legend-range">72 – 78</span><span>Stress modéré</span></div>
      <div class="w-thi-legend-row" style="color:#e07050"><span class="w-thi-legend-range">≥ 79</span><span>Stress sévère</span></div>`,e.querySelector(".w-thi-wrap").insertBefore(v,e.querySelector(".w-thi-details"))})}function Fi(e){if(!T.filter(m=>x.linkedSensorIds.includes(m.id)).some(m=>{const r=F[m.model]||[];return r.some(d=>d.id==="temp")&&r.some(d=>d.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=72,a=D(14,22),s=Array.from({length:n},(m,r)=>+(a+6*Math.sin(r/24*2*Math.PI-Math.PI/2)+D(-.5,.5)).toFixed(1)),l=Array.from({length:n},(m,r)=>Math.max(30,Math.min(100,70-15*Math.sin(r/24*2*Math.PI-Math.PI/2)+D(-3,3)))),u=s.map((m,r)=>{const d=l[r]/100,c=17.27,o=237.3,p=Math.log(d)+c*m/(o+m);return+(o*p/(c-p)).toFixed(1)});e.innerHTML=`<div class="w-temprosee-wrap">
    ${$t([{values:s,color:"#FBAF05"},{values:u,color:"#72B0D8"}],380,100)}
    <div class="w-temprosee-legend">
      <span style="color:#FBAF05"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Température (${s[n-1]}°C)</span>
      <span style="color:#72B0D8"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Point de rosée (${u[n-1]}°C)</span>
      <span style="font-size:10px;color:var(--txt3)">3 derniers jours</span>
    </div>
  </div>`}function Di(e){if(!T.filter(M=>x.linkedSensorIds.includes(M.id)).some(M=>(F[M.model]||[]).some(q=>q.id==="tsol"))){e.innerHTML='<div class="dash-empty">Capteur T. sol requis</div>';return}const n=48,a=D(14,20),s=Array.from({length:n},(M,q)=>+(a+3*Math.sin(q/24*2*Math.PI-Math.PI/2)+D(-.4,.4)).toFixed(1)),l=15,u=22,m=380,r=100,d=28,c=8,o=6,p=20,v=m-d-c,h=r-o-p,f=[...s,l,u],b=Math.min(...f)-1,g=Math.max(...f)+1,w=M=>(d+M/(n-1)*v).toFixed(1),y=M=>(o+h-(M-b)/(g-b)*h).toFixed(1),S=+y(l),C=+y(u),A=[.25,.5,.75].map(M=>{const q=(o+M*h).toFixed(1);return`<line x1="${d}" y1="${q}" x2="${m-c}" y2="${q}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),B=s.map((M,q)=>`${q?"L":"M"}${w(q)},${y(M)}`).join("");e.innerHTML=`<div class="w-tsol-wrap">
    <svg width="100%" height="${r}" viewBox="0 0 ${m} ${r}" preserveAspectRatio="none">
      ${A}
      <rect x="${d}" y="${C.toFixed(1)}" width="${v}" height="${(S-C).toFixed(1)}" fill="rgba(45,158,95,.1)"/>
      <line x1="${d}" y1="${S.toFixed(1)}" x2="${m-c}" y2="${S.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <line x1="${d}" y1="${C.toFixed(1)}" x2="${m-c}" y2="${C.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <path d="${B}" fill="none" stroke="#795548" stroke-width="2" stroke-linejoin="round"/>
      <text x="${d-3}" y="${o+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>
      <text x="${d-3}" y="${o+h+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${b.toFixed(0)}</text>
    </svg>
    <div class="w-tsol-legend">
      <span style="color:#795548"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sol · ${s[n-1]}°C</span>
      <span style="color:#2d9e5f;font-size:10px"><i class="bi bi-square-fill" style="opacity:.3"></i> Zone optimale ${l}–${u}°C</span>
      <span style="font-size:10px;color:var(--txt3)">48 dernières heures</span>
    </div>
  </div>`}function Ri(e){const t=(x.crop||E.crop||"").toLowerCase();if(!t.includes("maïs")&&!t.includes("mais")){e.innerHTML='<div class="dash-empty">Culture Maïs requise</div>';return}const i=[{name:"Farmflex 253",target:1320},{name:"DKC 3230",target:1380},{name:"Ronaldinio",target:1290},{name:"Banguy",target:1350}],n=i[I%i.length],a=E.degresJour||$(600,1200),s=Math.min(a/n.target,1),l=Math.max(0,n.target-a),u=new Date,m=Math.round(l/10),r=new Date(u);r.setDate(r.getDate()+Math.max(0,m-5));const d=new Date(u);d.setDate(d.getDate()+m+5);const c=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],o=p=>`${p.getDate()} ${c[p.getMonth()]}`;e.innerHTML=`<div class="w-maizy-wrap">
    <div class="w-maizy-title">Récolte prévisionnelle</div>
    <div class="w-maizy-dates">${o(r)} — ${o(d)}</div>
    <div class="w-maizy-bar-wrap">
      <div class="w-maizy-bar-track"><div class="w-maizy-bar-fill" style="width:${(s*100).toFixed(1)}%"></div></div>
      <div class="w-maizy-bar-pct">${(s*100).toFixed(0)} %</div>
    </div>
    <div class="w-maizy-dj">
      <span class="w-maizy-dj-val">${a.toFixed?a.toFixed(1):a}</span>
      <span class="w-maizy-dj-sep"> / ${n.target} DJ</span>
      <span class="w-maizy-dj-vari">${n.name}</span>
    </div>
    <a class="w-maizy-link" href="#">Voir le détail <i class="bi bi-arrow-right"></i></a>
  </div>`}function Ni(e){const t=(x.crop||E.crop||"").toLowerCase();if(!t.includes("pommier")&&!t.includes("pomme")){e.innerHTML='<div class="dash-empty">Culture Pommier requise</div>';return}const i=new Date,n=new Date(i);n.setDate(n.getDate()-$(2,8));const a=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=d=>`${d.getDate()} ${a[d.getMonth()]}`,l=$(8,24),u=$(80,280),m=u>200?"Élevé":u>120?"Modéré":"Léger",r=u>200?"#e07050":u>120?"#f5a030":"#2d9e5f";e.innerHTML=`<div class="w-tav-wrap">
    <div class="w-tav-ep">Dernier épisode · <strong>${s(n)}</strong></div>
    <div class="w-tav-stats">
      <div class="w-tav-stat"><span class="w-tav-stat-val">${l}h</span><span class="w-tav-stat-lbl">Durée</span></div>
      <div class="w-tav-stat"><span class="w-tav-stat-val">${u} DH</span><span class="w-tav-stat-lbl">Degrés-heures</span></div>
    </div>
    <div class="w-tav-risk" style="color:${r}">
      <i class="bi bi-circle-fill" style="font-size:8px;vertical-align:middle"></i>
      Risque d'infection estimé <strong>${m}</strong>
    </div>
    <a class="w-maizy-link" href="#">Afficher l'historique <i class="bi bi-arrow-right"></i></a>
  </div>`}function ee(e){e.innerHTML=`<div class="dash-empty" style="padding-top:20px">
    <i class="bi bi-hourglass" style="font-size:20px;opacity:.3;display:block;margin-bottom:6px"></i>
    Widget bientôt disponible
  </div>`}function J(e){return t=>{var r,d;const i=T.filter(c=>x.linkedSensorIds.includes(c.id)),n={"w-station":c=>["P+","PT","SMV","P"].includes(c.model),"w-thygro":c=>c.model==="TH","w-tsol":c=>c.model==="T_MINI","w-anem":c=>c.model==="W","w-pyrano":c=>c.model==="PYRANO","w-lws":c=>c.model==="LWS","w-par":c=>c.model==="PAR","w-capa":c=>c.model.startsWith("CAPA-"),"w-tensio":c=>W.includes(c.model),"w-ec":c=>c.model==="EC"},a=i.find(n[e]||(()=>!1));if(!a){t.innerHTML='<div class="dash-empty">Aucun capteur compatible lié</div>';return}const s=F[a.model]||[],u=({"w-station":()=>{const c=[];return s.some(o=>o.id==="temp")&&c.push({label:"Température",val:$(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"}),s.some(o=>o.id==="pluie")&&c.push({label:"Pluie 24h",val:$(0,14)+" mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy"}),s.some(o=>o.id==="humidite")&&c.push({label:"Humidité",val:$(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}),c},"w-thygro":()=>[{label:"Température",val:$(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"},{label:"Humidité",val:$(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}],"w-tsol":()=>[{label:"Temp. sol",val:$(8,22)+" °C",color:"#795548",icon:"bi-layers"}],"w-anem":()=>[{label:"Vitesse",val:$(0,40)+" km/h",color:"#616161",icon:"bi-wind"},{label:"Direction",val:["N","NE","E","SE","S","SO","O","NO"][$(0,7)],color:"#616161",icon:"bi-compass"}],"w-pyrano":()=>[{label:"Rayonnement",val:$(100,900)+" W/m²",color:"#CBCB0B",icon:"bi-sun"}],"w-lws":()=>[{label:"Humectation",val:D(0,12).toFixed(1)+" h/j",color:"#00887E",icon:"bi-droplet"}],"w-par":()=>[{label:"PPFD",val:$(100,2e3)+" µmol/m²/s",color:"#4CBB17",icon:"bi-brightness-high"}],"w-capa":()=>s.filter(c=>c.id.startsWith("vwc")).slice(0,3).map(c=>({label:c.name,val:$(15,45)+" %vol",color:c.color,icon:"bi-moisture"})),"w-tensio":()=>[{label:"Potentiel hydrique",val:$(10,150)+" kPa",color:"#A6C157",icon:"bi-graph-down"}],"w-ec":()=>[{label:"Conductivité",val:D(.1,3).toFixed(2)+" mS/cm",color:"#2BCDDE",icon:"bi-plug"}]}[e]||(()=>[]))();t.innerHTML=`
      <div class="w-sensor-rows">${u.map(c=>`
        <div class="w-sensor-row">
          <i class="bi ${c.icon}" style="color:${c.color};flex-shrink:0"></i>
          <span class="w-sensor-val" style="color:${c.color}">${c.val}</span>
          <span class="w-sensor-lbl">${c.label}</span>
        </div>`).join("")}</div>
      <div class="w-sensor-src">${Z[a.model]||a.model} · ${a.serial}</div>`;const m=(r=t.closest(".dash-block"))==null?void 0:r.querySelector(".dash-block-ft-link");if(m){const c=((d=document.getElementById("time-step"))==null?void 0:d.value)||"1h";m.href=`capteur-graphique.html?sensorId=${a.id}&parcelId=${I}&period=${X}&step=${c}`,m.removeAttribute("data-tab")}}}function Oi(e){const t=T.filter(f=>x.linkedSensorIds.includes(f.id)),i=t.some(f=>f.model.startsWith("CAPA-")),n=t.some(f=>W.includes(f.model)),a=E.reserveHydrique||80,s=(E.id*17+13)%41,l=Math.min(95,Math.max(20,55+s)),u=Math.round(a*l/100),m=4+s%5-2,r=Math.max(2,Math.min(6,m)),d=Math.round(r*7-u*.3),c=Math.max(0,d),o=l>60?"#2d9e5f":l>35?"#e07820":"#e04040",p=l>60?"Réserve suffisante":l>35?"Réserve à surveiller":"Réserve critique",v=l>60?"bi-check-circle-fill":l>35?"bi-exclamation-circle-fill":"bi-x-circle-fill";if(!i&&!n){e.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:var(--txt3)">
      <i class="bi bi-droplet" style="font-size:24px"></i>
      <div style="font-size:13px;text-align:center">Ajoutez une sonde capacitive ou un tensiomètre pour suivre l'état hydrique</div>
    </div>`;return}const h=i?[{label:"10 cm",pct:Math.min(100,l+s%12-5),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,l+s%8),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,l-s%10+3),color:"#a07010"}]:[{label:"Potentiel",pct:l,color:"#5b8dd9"}];e.innerHTML=`
    <div class="w-bilan-layout">
      <div class="w-bilan-status" style="color:${o}">
        <i class="bi ${v}"></i> ${p}
      </div>
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track">
          <div class="w-bilan-gauge-fill" style="width:${l}%;background:${o}"></div>
        </div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${o}">${u} mm / ${a} mm RFU (${l} %)</span>
          <span>${a} mm</span>
        </div>
      </div>
      <div class="w-bilan-horizons">
        ${h.map(f=>`
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${f.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${f.pct}%;background:${f.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${f.color}">${f.pct} %</span>
          </div>`).join("")}
      </div>
      <div class="w-bilan-footer">
        <div class="w-bilan-kpi">
          <div class="w-bilan-kpi-lbl">ETP 7 j</div>
          <div class="w-bilan-kpi-val">${(r*7).toFixed(0)} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-bilan-kpi">
          <div class="w-bilan-kpi-lbl">Dose conseillée</div>
          <div class="w-bilan-kpi-val" style="color:${c>0?"#0172A4":"var(--ok)"}">
            ${c>0?`${c} <span class="w-irrig-unit">mm</span>`:'<i class="bi bi-check2" style="font-size:14px"></i>'}
          </div>
        </div>
      </div>
    </div>`}function Re(e){const t=document.createElement("div");if(t.className="journal-form-overlay",e==="vol"){const i=Be(I).volumeMaxM3??"";t.innerHTML=`
      <div class="journal-form-modal">
        <div class="journal-form-title">Volume limité de la parcelle</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Volume limité (m³)</label>
          <input id="iwa-vol-inp" class="journal-form-input" type="number" min="0" placeholder="—" value="${i}" style="width:120px">
        </div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const n=t.querySelector("#iwa-vol-inp").value;ie(I,{volumeMaxM3:n!==""?parseInt(n):null}),t.remove(),document.querySelector("#dblock-irrigations")&&ye(document.querySelector("#dblock-irrigations"))}}else{const i=x.irrigation||"";t.innerHTML=`
      <div class="journal-form-modal">
        <div class="journal-form-title">Type d'irrigation</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="iwa-type-sel" class="journal-form-input">
            ${mt.map(n=>`<option${n===(i||"Non renseigné")?" selected":""}>${n}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const n=t.querySelector("#iwa-type-sel").value;O({irrigation:n}),t.remove(),document.querySelector("#dblock-irrigations")&&ye(document.querySelector("#dblock-irrigations"))}}t.addEventListener("click",i=>{i.target===t&&t.remove()})}function St(e,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigations existantes</span>
        <button class="irr-edit-close" id="irr-cf-close">×</button>
      </div>
      <div class="irr-edit-body" style="font-size:13px;color:var(--txt);line-height:1.5">
        <p style="margin:0"><strong>${e} irrigation${e>1?"s":""}</strong> déjà enregistrée${e>1?"s":""} pour cette parcelle.</p>
        <p style="margin:8px 0 0;color:var(--txt2)">Voulez-vous les écraser avec la nouvelle saisie ?</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-cf-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-cf-overwrite">Écraser</button>
      </div>
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",s=>{s.target===i&&n()}),i.querySelector("#irr-cf-close").addEventListener("click",n),i.querySelector("#irr-cf-cancel").addEventListener("click",n),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),t()})}function Et(e,t){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const i=document.createElement("div");i.className="irr-save-confirm",i.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(s=>`<div>${s}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",s=>{s.target===i&&n()}),i.querySelector("#irr-confirm-close").addEventListener("click",n)}function lt(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Date</label>
        <input type="date" id="irr-m-s-date" class="journal-form-input" value="${ne}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Quantité (mm)</label>
        <input type="number" id="irr-m-s-qty" class="journal-form-input" value="10" min="1">
      </div>
      <div class="journal-form-actions">
        <button class="btn-secondary" id="irr-m-s-cancel">Annuler</button>
        <button id="irr-m-s-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#irr-m-s-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-s-save").onclick=()=>{const i=t.querySelector("#irr-m-s-date").value,n=parseInt(t.querySelector("#irr-m-s-qty").value)||0;if(!i||!n)return;const a=i>ne,s=()=>{_.push({iso:i,mm:n,real:!a,plotId:E.id,fromStrategy:!1}),ut(),t.remove(),ye(e),Et("Irrigation enregistrée",[`Date : ${He(i)}`,`Quantité : ${n} mm`])},l=_.filter(u=>u.plotId===E.id&&u.iso===i);if(l.length){St(l.length,()=>{_.splice(0,_.length,..._.filter(u=>!(u.plotId===E.id&&u.iso===i))),s()});return}s()}}function ct(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une saison d'irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Début</label>
        <input type="date" id="irr-m-sa-debut" class="journal-form-input" value="${ne}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Fin</label>
        <input type="date" id="irr-m-sa-fin" class="journal-form-input" value="${Dt(ne,120)}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Quantité (mm)</label>
        <input type="number" id="irr-m-sa-qty" class="journal-form-input" value="10" min="1">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Fréquence (jours)</label>
        <input type="number" id="irr-m-sa-freq" class="journal-form-input" value="7" min="1" max="30">
      </div>
      <div class="irr-lc-preview" id="irr-m-sa-preview">—</div>
      <div class="journal-form-actions">
        <button class="btn-secondary" id="irr-m-sa-cancel">Annuler</button>
        <button id="irr-m-sa-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(t);const i=()=>{const n=t.querySelector("#irr-m-sa-debut").value,a=t.querySelector("#irr-m-sa-fin").value,s=parseInt(t.querySelector("#irr-m-sa-qty").value)||0,l=parseInt(t.querySelector("#irr-m-sa-freq").value)||0,u=t.querySelector("#irr-m-sa-preview");if(!n||!a||l<=0){u.textContent="—";return}let m=0,r=new Date(n),d=new Date(a);for(;r<=d&&m<200;)m++,r.setDate(r.getDate()+l);if(m>0){const c=E.area>0?Math.round(m*s*E.area*10):0,o=c>0?` · ${c.toLocaleString("fr-FR")} m³`:"";u.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${m} irrigations · ${m*s} mm${o}</span>`}else u.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'};i(),t.querySelector("#irr-m-sa-debut").addEventListener("change",i),t.querySelector("#irr-m-sa-fin").addEventListener("change",i),t.querySelector("#irr-m-sa-qty").addEventListener("input",i),t.querySelector("#irr-m-sa-freq").addEventListener("input",i),t.addEventListener("click",n=>{n.target===t&&t.remove()}),t.querySelector("#irr-m-sa-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-sa-save").onclick=()=>{const n=t.querySelector("#irr-m-sa-debut").value,a=t.querySelector("#irr-m-sa-fin").value,s=parseInt(t.querySelector("#irr-m-sa-qty").value)||10,l=parseInt(t.querySelector("#irr-m-sa-freq").value)||7;if(!n||!a)return;const u=[];let m=new Date(n),r=new Date(a);for(;m<=r&&u.length<200;)u.push(new Date(m)),m.setDate(m.getDate()+l);const d=Bt(),c=()=>{u.forEach(p=>{const v=p.toISOString().slice(0,10);_.push({iso:v,mm:s,real:v<=ne,plotId:E.id,fromStrategy:!0,seasonId:d})}),ut(),t.remove(),ye(e),Et("Saison enregistrée",[`Début : ${He(n)} · Fin : ${He(a)}`,`${u.length} irrigations · ${s} mm · tous les ${l} j`])},o=_.filter(p=>p.plotId===E.id&&p.iso>=n&&p.iso<=a);if(o.length){St(o.length,()=>{_.splice(0,_.length,..._.filter(p=>!(p.plotId===E.id&&p.iso>=n&&p.iso<=a))),c()});return}c()}}function ye(e){var v,h,f,b,g;const t=_.filter(w=>w.plotId===E.id),i=t.filter(w=>w.real),n=t.filter(w=>!w.real),a=i.reduce((w,y)=>w+y.mm,0),s=n.reduce((w,y)=>w+y.mm,0),l=a+s,u=x.irrigation||E.irrigation;let m="";if(t.some(w=>w.fromStrategy)){const w=[...t].sort((A,B)=>A.iso.localeCompare(B.iso)),y=w[w.length-1],S=w[w.length-2],C=S?Math.round((new Date(y.iso)-new Date(S.iso))/864e5):null;m=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${y.mm} mm</strong>${C?` tous les <strong>${C} jours</strong>`:""}.</div>
      </div>`}const d=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-act-saisie">+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" type="button" id="w-irrig-act-saison">↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`,o=u&&!new Set(["Non irrigué","Non renseigné",""]).has(u),p=()=>{var y;const w=(y=e.closest(".dash-block"))==null?void 0:y.querySelector(".dash-block-ft-link");w&&(w.textContent=o?"Voir les irrigations →":"Gérer les irrigations →")};if(!o){e.innerHTML=`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez préciser un type d'irrigation.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-set-type" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,(v=e.querySelector("#w-irrig-set-type"))==null||v.addEventListener("click",()=>Re("type")),p();return}if(!t.length){e.innerHTML=`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3)">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${d}
      </div>`,(h=e.querySelector("#w-irrig-act-saisie"))==null||h.addEventListener("click",()=>lt(e)),(f=e.querySelector("#w-irrig-act-saison"))==null||f.addEventListener("click",()=>ct(e)),p();return}e.innerHTML=`
    <div class="w-irrig-layout">
      <div class="w-irrig-kpis">
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Effectuées</div>
          <div class="w-irrig-kpi-val" style="color:#E07820">${a} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Planifiées</div>
          <div class="w-irrig-kpi-val" style="color:#FFB705">${s} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Total</div>
          <div class="w-irrig-kpi-val" style="color:var(--txt3)">${l} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${m}
      ${d}
    </div>`,(b=e.querySelector("#w-irrig-act-saisie"))==null||b.addEventListener("click",()=>lt(e)),(g=e.querySelector("#w-irrig-act-saison"))==null||g.addEventListener("click",()=>ct(e)),p()}function zi(e){let t=null;e.querySelectorAll(".dash-block").forEach(i=>{i.addEventListener("dragstart",n=>{t=i,n.dataTransfer.effectAllowed="move",setTimeout(()=>i.classList.add("dash-drag-ghost"),0)}),i.addEventListener("dragend",()=>{i.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(n=>n.classList.remove("dash-drag-over")),t=null,ve([...e.querySelectorAll(".dash-block")].map(n=>n.dataset.id))}),i.addEventListener("dragover",n=>{n.preventDefault(),!(!t||i===t)&&(n.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),i.classList.add("dash-drag-over"))}),i.addEventListener("dragleave",()=>{i.classList.remove("dash-drag-over")}),i.addEventListener("drop",n=>{if(n.preventDefault(),!t||i===t)return;i.classList.remove("dash-drag-over");const a=[...e.querySelectorAll(".dash-block")],s=a.indexOf(t),l=a.indexOf(i);s<l?i.after(t):i.before(t)})})}
