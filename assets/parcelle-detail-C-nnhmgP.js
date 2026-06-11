import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as te}from"./plots-DHZTuoR0.js";import{s as P}from"./sensors-CS05Ml5Z.js";import{o as ke}from"./orgs-DnFmvGlp.js";import{m as ae}from"./members-CuDabgg3.js";import{u as mt}from"./breadcrumb-CzFWtd6d.js";import{d as se,c as we,e as St}from"./store-Cvb9jQ9w.js";import{I as le}from"./irrigations-C22Dtsoo.js";import{I as pt,S as Mt}from"./constants-DfU_DrBB.js";const ht=new URLSearchParams(window.location.search),H=parseInt(ht.get("id")),B=te.find(e=>e.id===H);function w(e,t){return Math.floor(Math.random()*(t-e+1))+e}function O(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}const qe=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>O(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",base:()=>w(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#72B0D8",base:()=>w(2,16),isCumul:!1}],N={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>w(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>w(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>w(40,90)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>w(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>w(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>O(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>w(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],SMV:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>w(0,8),cumul:{label:"Cumul pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>w(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>w(40,90)},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>O(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>w(10,28),cumul:{label:"DJC",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>w(40,90)}],"CHP-15/30":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>w(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>w(8,22)}],"CHP-30/60":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>w(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>w(8,22)}],"CHP-60/90":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>w(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>w(8,22)}],"CAPA-30-3":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>w(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>w(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>w(15,45)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>w(8,22)}],"CAPA-60-6":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>w(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>w(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>w(15,45)},{id:"vwc40",name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",base:()=>w(17,43)},{id:"vwc50",name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",base:()=>w(18,42)},{id:"vwc60",name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",base:()=>w(18,42)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>w(8,22)}],T_MINI:[{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>w(8,22)}],LWS:[{id:"humec",name:"Humectation foliaire",unit:"h",color:"#00887E",base:()=>w(0,12)}],T_GEL:[{id:"tseche",name:"Temp. sèche",unit:"°C",color:"#23B19B",base:()=>w(-2,12)},{id:"thumide",name:"Temp. humide",unit:"°C",color:"#5E88EC",base:()=>w(-4,10)}],W:[{id:"_vent",name:"Vent",unit:"km/h · direction",color:"#7bc4b0",isWindComposite:!0,base:()=>w(0,40)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>O(.1,3)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>w(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>w(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}],PAR:[{id:"par",name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#c47a00",base:()=>w(0,2e3)}]},_=["CHP-15/30","CHP-30/60","CHP-60/90"],Pe=[{name:"Tensiomètre (CHP)",models:new Set(["CHP-15/30","CHP-30/60","CHP-60/90"])},{name:"Sonde capacitive (CAPA)",models:new Set(["CAPA-30-3","CAPA-60-6"])},{name:"Sonde fertirrigation (EC)",models:new Set(["EC"])},{name:"Thermomètre de sol (T_MINI)",models:new Set(["T_MINI"])}];function Le(e){return Pe.find(t=>t.models.has(e))||null}const Bt={"CAPA-30-3":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"}],"CAPA-60-6":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"},{depth:40,label:"40 cm",vwcColor:"#949494",tsolColor:"#804828"},{depth:50,label:"50 cm",vwcColor:"#870021",tsolColor:"#603818"},{depth:60,label:"60 cm",vwcColor:"#F608C2",tsolColor:"#402810"}]},Ge=["CAPA-30-3","CAPA-60-6"],ee={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function Et(e,t=null,i=null,n=null){const a=Math.max(2,Math.min(200,Math.floor(pe()/$e()))),s=Array.from({length:a},()=>w(5,35)),r=s.map(I=>Math.min(I+w(3,18),80)),u=Array.from({length:a},()=>w(0,359)),m=600,d=200,c=46,l=16,o=16,p=28,h=m-c-l,f=d-o-p,v=Math.ceil(Math.max(...r)/10)*10||50,b=I=>c+I/Math.max(a-1,1)*h,g=I=>o+f-I/v*f,$=r.map((I,W)=>`${b(W).toFixed(1)},${g(I).toFixed(1)}`).join("L"),y=[...s].reverse().map((I,W)=>`${b(a-1-W).toFixed(1)},${g(I).toFixed(1)}`).join("L"),M=`M${$}L${y}Z`,S=s.map((I,W)=>`${W?"L":"M"}${b(W).toFixed(1)},${g(I).toFixed(1)}`).join(""),T=[.25,.5,.75].map(I=>{const W=(o+f-I*f).toFixed(1);return`<line x1="${c}" y1="${W}" x2="${m-l}" y2="${W}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),A=[0,.5,1].map(I=>{const W=o+f-I*f;return`<text x="${c-4}" y="${(W+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(I*v)}</text>`}).join(""),E=`<line x1="${c}" y1="${o+f}" x2="${m-l}" y2="${o+f}" stroke="var(--bdr2)" stroke-width="1"/>`,R=Math.max(1,Math.floor(a/6));let k="";for(let I=0;I<a;I+=R){const W=(a-1-I)/Math.max(a-1,1)*pe();k+=`<text x="${b(I).toFixed(1)}" y="${(o+f+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${xe(W)}</text>`}const j=Math.max(1,Math.round(a/25)),F=[];for(let I=0;I<a;I+=j){const W=b(I).toFixed(1),Te=(o+f*.35).toFixed(1);F.push(`<g transform="translate(${W},${Te}) rotate(${u[I]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const q=document.createElement("div");q.className="chart-card",n&&(q.dataset.cardKey=n,q.draggable=!0);const z=t?`<span class="chart-card-source">${t}</span>`:"",ne=i!=null?`<span class="chart-card-emission">il y a ${i} min</span>`:"";q.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
      <div class="chart-card-meta">${z}${ne}</div>
    </div>
    <svg width="100%" height="${d}" viewBox="0 0 ${m} ${d}" preserveAspectRatio="none">
      ${A}${T}${E}${k}
      <path d="${M}" fill="#7bc4b0" opacity=".18"/>
      <path d="${S}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${F.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(q)}const kt=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let C={};function At(){const e=we(H);if(C={...B,...e},!C.linkedSensorIds){const n=P.filter(a=>a.parcelIds.includes(H)).map(a=>a.id);C.linkedSensorIds=e.linkedSensorIds??n}C.integrations||(C.integrations=[...B.integrations||[]]),C.alertes||(C.alertes=[]);const t=P.filter(n=>C.linkedSensorIds.includes(n.id)),i=Pe.find(n=>t.some(a=>n.models.has(a.model)));i&&Pe.some(a=>a!==i&&t.some(s=>a.models.has(s.model)))&&(C.linkedSensorIds=C.linkedSensorIds.filter(a=>{const s=P.find(u=>u.id===a);if(!s)return!0;const r=Le(s.model);return!r||r===i}),se(H,{linkedSensorIds:C.linkedSensorIds}))}function Y(e){Object.assign(C,e),Object.assign(B,e),se(H,e)}let K="7d",ue=null,me=null;function pe(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,"30d":43200,"365d":525600};return K==="custom"&&ue&&me?Math.max(60,Math.round((me-ue)/6e4)):e[K]??10080}function $e(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Tt(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"?"1d":"1h"}function jt(){const e=pe(),t=$e();return Math.max(2,Math.min(200,Math.floor(e/t)))}const Ye={Cumuls:"cumuls","Maï'zy":"maizy","Suivi de culture":"suivi-culture",Weephyt:"weephyt",Decitrait:"decitrait","Tavelure Pomme":"tavelure",DPV:"dpv",THI:"thi","Température de rosée":"temp-rosee","Température du sol":"temp-sol","Rayonnement solaire":"w-pyrano",Gel:"gel","Prévisions à 5 jours":"previsions-5j","Prévisions à 6 heures":"previsions-6h","Prévisions du jour":"previsions-jour","Prévisions de tensiométrie":"previsions-tensio",Anémomètre:"w-anem","Capteur d'humectation foliaire":"w-lws","Capteur PAR":"w-par",Pyranomètre:"w-pyrano","Station météo":"w-station","Station Météo Virtuelle":"w-station","Thermomètre de sol":"w-tsol","Thermomètre-Hygromètre":"w-thygro","Bilan hydrique":"bilan",Irrigations:"irrigations","Sonde capacitive":"w-capa",Tensiomètre:"w-tensio","Sonde de fertirrigation":"w-ec","Profil capteurs":"profil-capteurs","Niveau de réservoir en eau utilisable":"niveau-reservoir","Profil de niveau de réservoir":"profil-reservoir"},It=[{title:"Cumuls",items:["Cumuls"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Weephyt","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire","Gel"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Irrigation",items:["Bilan hydrique","Irrigations","Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]}];function Pt(){const e=P.filter(d=>C.linkedSensorIds.includes(d.id)),t=new Set(e.map(d=>d.model)),i=(C.crop||B.crop||"").toLowerCase(),n=fe(),a=e.some(d=>{const c=N[d.model]||[];return c.some(l=>l.id==="temp")&&c.some(l=>l.id==="humidite")}),s=e.some(d=>(N[d.model]||[]).some(c=>c.id==="tsol")),r=e.some(d=>(N[d.model]||[]).some(c=>c.cumul)),u=d=>Ye[d]?d==="Gel"?t.has("T_GEL"):d==="Maï'zy"?i.includes("maïs")||i.includes("mais"):d==="Tavelure Pomme"?i.includes("pommier"):d==="Station météo"?t.has("P+")||t.has("PT")||t.has("P"):d==="Station Météo Virtuelle"?t.has("SMV"):d==="Thermomètre-Hygromètre"?t.has("TH"):d==="Thermomètre de sol"?t.has("T_MINI")||s:d==="Anémomètre"?t.has("W"):d==="Pyranomètre"||d==="Rayonnement solaire"?t.has("PYRANO"):d==="Capteur d'humectation foliaire"?t.has("LWS"):d==="Capteur PAR"?t.has("PAR"):d==="Bilan hydrique"?[...t].some(l=>l.startsWith("CAPA-"))||[...t].some(l=>_.includes(l)):d==="Irrigations"?!0:d==="Sonde capacitive"?[...t].some(l=>l.startsWith("CAPA-")):d==="Tensiomètre"?[...t].some(l=>_.includes(l)):d==="Sonde de fertirrigation"?t.has("EC"):d==="DPV"||d==="THI"||d==="Température de rosée"?a:d==="Température du sol"?s:d==="Cumuls"?r:!0:!0,m=document.createElement("div");m.className="modal add-modal",m.innerHTML=`
    <div class="add-modal-content" style="max-width:520px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter un widget</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      ${It.map(d=>{const c=d.items.filter(u);return c.length?`
        <div class="add-modal-section">
          <div class="add-modal-section-label">${d.title}</div>
          <div class="wcat-list">
            ${c.map(l=>{const o=Ye[l],p=o&&n.includes(o);return`
              <div class="wcat-item">
                <span>${l}</span>
                ${p?'<span class="wcat-already"><i class="bi bi-check2"></i> Ajouté</span>':`<button class="wcat-add-btn" type="button" data-wid="${o}"><i class="bi bi-plus-circle"></i> Ajouter</button>`}
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")}
    </div>`,m.addEventListener("click",d=>{d.target===m&&m.remove()}),m.querySelector(".add-modal-close").addEventListener("click",()=>m.remove()),m.querySelectorAll(".wcat-add-btn").forEach(d=>{d.addEventListener("click",()=>{const c=d.dataset.wid;if(!c)return;const l=fe();l.includes(c)||(l.push(c),ve(l)),m.remove(),de()})}),document.body.appendChild(m)}const Se=`weenat-journal-${H}`,Je=new Date().toISOString().slice(0,10),Lt=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"];function Ht(){const e=B,t=[],i=(u,m,d="Système")=>t.push({id:"auto-"+u+m.slice(0,8),type:"modification",date:u,texte:m,auteur:d}),n=e.orgId===1,a=n?"Jean-Michel Dutilleul":"Thomas Bertrand",s=n?"Alexandre Bernard":"Sophie Dubois";return i("2024-01-01","Création de la parcelle",a),e.crop&&i("2024-03-15",`Culture définie : ${e.crop}`,a),e.texture&&i("2024-03-15",`Texture de sol définie : ${e.texture}`,a),e.irrigation&&i("2024-04-01",`Type d'irrigation : ${e.irrigation}`,a),P.filter(u=>C.linkedSensorIds.includes(u.id)).forEach(u=>i("2024-06-10",`Liaison capteur : ${ee[u.model]||u.model} · ${u.serial}`,s)),i("2026-03-01","Début de cycle cultural 2026",a),t}const Ft=new Set(["culture","stade","irrigation","cycle"]);function Ue(e,t){const i=B.crop||"Blé tendre";return[{id:17434656e5,type:"cycle",date:"2026-03-01",auteur:e,action:"début",annee:"2026",texte:"Mise en place de la saison 2026"},{id:17438976e5,type:"culture",date:"2026-03-06",auteur:e,action:"modification",culture:i,texte:"Culture confirmée pour la saison 2026"},{id:17443296e5,type:"stade",date:"2026-04-11",auteur:e,stade:"BBCH 21 — Tallage actif",culture:i,texte:""},{id:17447616e5,type:"irrigation",date:"2026-04-16",auteur:e,volume:25,unite:"mm",methode:"Aspersion",texte:"Déclenchement suite alerte potentiel hydrique"},{id:17453664e5,type:"stade",date:"2026-04-23",auteur:t,stade:"BBCH 30 — Début montaison",culture:i,texte:""},{id:17457984e5,type:"irrigation",date:"2026-04-28",auteur:e,volume:30,unite:"mm",methode:"Aspersion",texte:""},{id:17460576e5,type:"stade",date:"2026-05-01",auteur:t,stade:"BBCH 45 — Gonflement épis",culture:i,texte:"Développement homogène sur la parcelle"}]}function ye(){const e=B.orgId===1,t=e?"Jean-Michel Dutilleul":"Thomas Bertrand",i=e?"Marie Martin":"Sophie Dubois";try{const a=localStorage.getItem(Se);if(a){const s=JSON.parse(a);if(Array.isArray(s)){if(!s.some(u=>Ft.has(u.type))){const u=[...Ue(t,i),...s];return localStorage.setItem(Se,JSON.stringify(u)),u}return s}}}catch{}const n=[{id:17469216e5,type:"note",category:"Observation générale",date:"2026-05-11",auteur:t,texte:"Observation de quelques pucerons sur les feuilles basses. À surveiller."},{id:17473536e5,type:"traitement",date:"2026-05-16",auteur:i,texte:"Application conforme aux conditions météo. Vent < 2 m/s.",produit:"Karate Zeon 10 CS",dose:"0,1 L/ha",cible:"Pucerons"},{id:17477856e5,type:"note",category:"Observation générale",date:"2026-05-21",auteur:t,texte:"Suite traitement du 16/05 : peu de pucerons visibles, situation sous contrôle."},...Ue(t,i)];return localStorage.setItem(Se,JSON.stringify(n)),n}function ft(e){localStorage.setItem(Se,JSON.stringify(e))}function Ne(){const e=document.getElementById("journal-container");if(!e)return;const t=ye(),i=Ht(),n=[...t,...i].sort((l,o)=>o.date.localeCompare(l.date)),a=l=>{const[o,p,h]=l.split("-");return`${h}/${p}/${o}`},s={note:{label:"Note",icon:"bi-pencil",dotCls:"note",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotCls:"traitement",badgeCls:"traitement"},modification:{label:"Modification",icon:"bi-pencil-square",dotCls:"modification",badgeCls:"modification"},culture:{label:"Culture",icon:"bi-flower1",dotCls:"culture",badgeCls:"culture"},cycle:{label:"Cycle cultural",icon:"bi-arrow-repeat",dotCls:"cycle",badgeCls:"cycle"},stade:{label:"Stade phéno.",icon:"bi-calendar2-check",dotCls:"stade",badgeCls:"stade"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotCls:"irrigation",badgeCls:"irrigation"}};let u=`
    <div class="journal-add-bar">
      <div class="jrn-add-wrap" id="jrn-add-wrap">
        <button class="btn-primary btn-sm" id="jrn-add-btn" style="gap:6px">
          <i class="bi bi-plus-lg"></i> Ajouter
          <i class="bi bi-chevron-down" style="font-size:10px;margin-left:1px"></i>
        </button>
        <div class="jrn-add-menu" id="jrn-add-menu">
          ${[{type:"note",label:"Note",icon:"bi-pencil-square"},{type:"traitement",label:"Traitement phytosanitaire",icon:"bi-eyedropper"},null,{type:"culture",label:"Culture",icon:"bi-flower1"},{type:"stade",label:"Stade phénologique",icon:"bi-calendar2-check"},{type:"irrigation",label:"Irrigation",icon:"bi-droplet-half"},{type:"cycle",label:"Cycle cultural",icon:"bi-arrow-repeat"}].map(l=>l===null?'<div class="jrn-add-sep"></div>':`<button class="jrn-add-item" data-type="${l.type}">
                <i class="bi ${l.icon}"></i> ${l.label}
               </button>`).join("")}
        </div>
      </div>
    </div>
    <div class="journal-timeline">
  `;n.length===0?u+='<div class="journal-empty">Aucune entrée dans le journal.</div>':n.forEach(l=>{var f;const o=s[l.type]||s.note,p=l.type==="modification",h=l.type==="traitement";u+=`
        <div class="jrn-entry" data-id="${l.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot jrn-dot--${o.dotCls}"><i class="bi ${o.icon}"></i></div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${a(l.date)}</span>
              <span class="journal-type-badge journal-type-badge--${o.badgeCls}">
                ${o.label}
              </span>
              ${l.auteur?`<span class="jrn-entry-auteur">${l.auteur}</span>`:""}
              ${p?"":`<button class="jrn-entry-delete" data-id="${l.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>`}
            </div>
            ${l.texte?`<div class="jrn-entry-texte">${l.texte}</div>`:""}
            ${h&&(l.produit||l.dose||l.cible)?`
              <div class="jrn-entry-meta">
                ${l.produit?`<span class="jrn-entry-meta-chip"><i class="bi bi-flask"></i>${l.produit}</span>`:""}
                ${l.dose?`<span class="jrn-entry-meta-chip"><i class="bi bi-droplet"></i>${l.dose}</span>`:""}
                ${l.cible?`<span class="jrn-entry-meta-chip"><i class="bi bi-bullseye"></i>${l.cible}</span>`:""}
              </div>`:""}
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
            ${(f=l.imageIds)!=null&&f.length?`<div class="jrn-entry-photos-row" data-entry-id="${l.id}"></div>`:""}
          </div>
        </div>
      `}),u+="</div>",e.innerHTML=u;const m=e.querySelector("#jrn-add-btn"),d=e.querySelector("#jrn-add-menu");m==null||m.addEventListener("click",l=>{l.stopPropagation(),d.classList.toggle("open")}),document.addEventListener("click",()=>d==null?void 0:d.classList.remove("open")),e.querySelectorAll(".jrn-add-item").forEach(l=>{l.addEventListener("click",()=>{d.classList.remove("open"),Dt(l.dataset.type)})}),e.querySelectorAll(".jrn-entry-delete").forEach(l=>{l.addEventListener("click",()=>{var h,f;const o=parseInt(l.dataset.id),p=ye().find(v=>v.id===o);(h=p==null?void 0:p.imageIds)!=null&&h.length&&((f=window.ImageStore)==null||f.remove(p.imageIds)),ft(ye().filter(v=>v.id!==o)),Ne()})});const c=window.ImageStore;c&&e.querySelectorAll(".jrn-entry-photos-row[data-entry-id]").forEach(async l=>{var p;const o=t.find(h=>String(h.id)===l.dataset.entryId);if((p=o==null?void 0:o.imageIds)!=null&&p.length)for(const h of o.imageIds)try{const f=await c.get(h);if(!f)continue;const v=document.createElement("img");v.className="jrn-entry-photo",v.src=f,v.alt="",v.addEventListener("click",()=>{var b;return(b=window.openLightbox)==null?void 0:b.call(window,f)}),l.appendChild(v)}catch{}})}function Dt(e){const t={note:"Ajouter une note",traitement:"Ajouter un traitement",culture:"Culture — événement",stade:"Stade phénologique",irrigation:"Irrigation",cycle:"Cycle cultural"},i=B.crop||"",n={note:`
      <div class="journal-form-row">
        <label class="journal-form-label">Catégorie</label>
        <select id="jrn-f-category" class="journal-form-input">
          ${Lt.map(u=>`<option>${u}</option>`).join("")}
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
          <input type="date" id="jrn-f-date" class="journal-form-input" value="${Je}">
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
    </div>`,s.querySelector(".add-modal-close").addEventListener("click",()=>s.remove()),s.addEventListener("click",u=>{u.target===s&&s.remove()});const r=[];a&&window.ImageStore&&window.setupImgUpload(s.querySelector("#jrn-f-img-input"),s.querySelector("#jrn-f-img-btn"),s.querySelector("#jrn-f-previews"),s.querySelector("#jrn-f-img-err"),r),s.querySelector("#jrn-f-save").addEventListener("click",async()=>{var o,p;const u=s.querySelector("#jrn-f-date").value||Je,m=((o=s.querySelector("#jrn-f-texte"))==null?void 0:o.value.trim())||"",d=B.orgId===1?"Jean-Michel Dutilleul":"Thomas Bertrand",c={id:Date.now(),type:e,date:u,texte:m,auteur:d};if(e==="note")c.category=((p=s.querySelector("#jrn-f-category"))==null?void 0:p.value)||"";else if(e==="traitement")c.produit=s.querySelector("#jrn-f-produit").value.trim(),c.dose=s.querySelector("#jrn-f-dose").value.trim(),c.cible=s.querySelector("#jrn-f-cible").value.trim();else if(e==="culture")c.action=s.querySelector("#jrn-f-action").value,c.culture=s.querySelector("#jrn-f-culture").value.trim();else if(e==="stade")c.stade=s.querySelector("#jrn-f-stade").value.trim(),c.culture=s.querySelector("#jrn-f-culture").value.trim();else if(e==="irrigation"){const h=parseFloat(s.querySelector("#jrn-f-volume").value);c.volume=isNaN(h)?0:h,c.unite=s.querySelector("#jrn-f-unite").value,c.methode=s.querySelector("#jrn-f-methode").value}else e==="cycle"&&(c.action=s.querySelector("#jrn-f-action").value,c.annee=s.querySelector("#jrn-f-annee").value.trim());if(m||c.produit||c.culture||c.stade||c.volume||c.annee||r.length){if(window.ImageStore&&r.length){c.imageIds=[];for(const h of r){const f=`img_${c.id}_${c.imageIds.length}`;await window.ImageStore.store(f,h),c.imageIds.push(f)}}ft([c,...ye()]),s.remove(),Ne()}}),document.body.appendChild(s)}function Rt(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const i=te.filter(s=>s.orgId===B.orgId).sort((s,r)=>s.name.localeCompare(r.name,"fr")),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const a=document.createElement("select");a.className="breadcrumb-nav-select",a.innerHTML=i.map(s=>`<option value="${s.id}"${s.id===H?" selected":""}>${s.name}</option>`).join(""),a.addEventListener("change",()=>{window.location.href=`parcelle-detail.html?id=${a.value}`}),n.appendChild(a),t.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var i,n,a;if(!B){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}At(),mt(C.name||B.name,{label:"Parcelles",href:"parcelles.html"}),Rt(),J(),ui(),Ci(),Si(),ni(),di(),Mi();const e=ht.get("tab");e&&((i=document.querySelector(`.detail-tab-btn[data-pane="tab-${e}"]`))==null||i.click()),oi(),li(),de(),(n=document.getElementById("parcel-add-widget-btn"))==null||n.addEventListener("click",Pt),(a=document.getElementById("btn-export-csv"))==null||a.addEventListener("click",$i),document.addEventListener("click",s=>{const r=s.target.closest(".chart-cumul-add-btn");if(!r)return;s.stopPropagation();const u=r.dataset.cumulLabel,m=r.dataset.cumulVal;if(!confirm(`Ajouter "${u} : ${m}" au tableau de bord ?`))return;const d=document.createElement("div");d.textContent="Cumul ajouté au tableau de bord",Object.assign(d.style,{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",background:"rgba(28,28,30,.9)",color:"#fff",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",zIndex:"9999",pointerEvents:"none"}),document.body.appendChild(d),setTimeout(()=>d.remove(),2500)});const t=document.getElementById("sidebar");t&&new MutationObserver(()=>re()).observe(t,{attributes:!0,attributeFilter:["data-role"]})});let Me="capteur",V=null;const vt=`charts-order-parcel-${H}`;function qt(){try{return JSON.parse(localStorage.getItem(vt)||"null")}catch{return null}}function Nt(e){localStorage.setItem(vt,JSON.stringify(e))}function Ot(e){let t=null;e.addEventListener("dragstart",i=>{const n=i.target.closest(".chart-card[data-card-key]");n&&(t=n,n.classList.add("chart-dragging"),i.dataTransfer.effectAllowed="move")}),e.addEventListener("dragend",()=>{t==null||t.classList.remove("chart-dragging"),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over")),t=null;const i=[...e.querySelectorAll(".chart-card[data-card-key]")].map(n=>n.dataset.cardKey);Nt(i)}),e.addEventListener("dragover",i=>{if(i.preventDefault(),!t)return;const n=i.target.closest(".chart-card[data-card-key]");if(!n||n===t)return;e.querySelectorAll(".chart-card").forEach(s=>s.classList.remove("chart-drag-over")),n.classList.add("chart-drag-over");const a=n.getBoundingClientRect().top+n.getBoundingClientRect().height/2;e.insertBefore(t,i.clientY<a?n:n.nextSibling)}),e.addEventListener("drop",i=>{i.preventDefault(),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over"))})}function zt(e,t){const i=P.filter(c=>t.includes(c.id)),n=i.filter(c=>_.includes(c.model)),a=i.filter(c=>Ge.includes(c.model)),s=i.filter(c=>!_.includes(c.model)&&!Ge.includes(c.model)),r=$e(),u=new Set;i.forEach(c=>(N[c.model]||[]).forEach(l=>u.add(l.id)));const m=[];if(s.forEach(c=>{const l=N[c.model];if(!l)return;const o=`${c.model} · ${c.serial}`,p=Math.floor(5+Math.random()*55);l.forEach(h=>{if(h.isWindComposite){m.push({key:`wind-${c.id}`,type:"wind",sensor:c,source:o,emissionMins:p});return}m.push({key:`s${c.id}-${h.id}`,type:"metric",metric:h,source:o,emissionMins:p,sensorId:c.id})})}),n.length>0){const c=`Tensiomètres · ${n.length} capteur${n.length>1?"s":""}`,l=Math.floor(5+Math.random()*55);["pothydr","tsol"].forEach(o=>{m.push({key:`tensio-${o}`,type:"tensio",metricId:o,source:c,emissionMins:l,tensioSensors:n})})}a.forEach(c=>{const l=Bt[c.model]||[],o=`${ee[c.model]||c.model} · ${c.serial}`,p=Math.floor(5+Math.random()*55);l.length>0&&(m.push({key:`capa-vwc-${c.id}`,type:"capa-vwc",sensor:c,horizons:l,source:o,emissionMins:p}),m.push({key:`capa-tsol-${c.id}`,type:"capa-tsol",sensor:c,horizons:l,source:o,emissionMins:p}))}),qe.filter(c=>!u.has(c.id)).forEach(c=>m.push({key:`always-${c.id}`,type:"metric",metric:c,source:"parcelle",emissionMins:null,unavailable:r<60}));const d=qt();if(d!=null&&d.length){const c=new Map(d.map((l,o)=>[l,o]));m.sort((l,o)=>(c.has(l.key)?c.get(l.key):1/0)-(c.has(o.key)?c.get(o.key):1/0))}m.forEach(c=>{c.type==="metric"?He(e,c.metric,c.source,c.emissionMins,c.key,c.unavailable,c.sensorId):c.type==="wind"?Et(e,c.source,c.emissionMins,c.key):c.type==="tensio"?Vt(e,c.metricId,c.tensioSensors,c.source,c.emissionMins,c.key):c.type==="capa-vwc"?Gt(e,c.horizons,c.source,c.emissionMins,c.key):c.type==="capa-tsol"&&Yt(e,c.horizons,c.source,c.emissionMins,c.key)}),Ot(e)}function Ee(e){const t=P.filter(a=>e.includes(a.id)),i=new Set,n=[];return t.forEach(a=>{(N[a.model]||[]).forEach(s=>{i.has(s.id)||(i.add(s.id),n.push(s))})}),qe.forEach(a=>{i.has(a.id)||(i.add(a.id),n.push(a))}),n}function J(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",V){e.className="compare-rows";const i=te.find(h=>h.id===V),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${C.name||B.name}</span></div>
      <div class="compare-col-header">
        <span>${(i==null?void 0:i.name)||"Parcelle"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{V=null,Ae(),J()});const a=Ee(C.linkedSensorIds),s=we(V),r=(s==null?void 0:s.linkedSensorIds)??P.filter(h=>h.parcelIds.includes(V)).map(h=>h.id),u=Ee(r),m=a.map(h=>h.id),d=u.map(h=>h.id),c=m.filter(h=>d.includes(h)),l=m.filter(h=>!d.includes(h)),o=d.filter(h=>!m.includes(h));[...c,...l,...o].forEach(h=>{const f=a.find(y=>y.id===h),v=u.find(y=>y.id===h),b=document.createElement("div");b.className="compare-row";const g=document.createElement("div");f?He(g,f):g.innerHTML='<div class="compare-chart-empty">—</div>';const $=document.createElement("div");v?He($,v):$.innerHTML='<div class="compare-chart-empty">—</div>',b.appendChild(g),b.appendChild($),e.appendChild(b)})}else e.className="charts-stack",zt(e,C.linkedSensorIds);Zt()}const ge=["#5b8dd9","#e07050","#4ecdc4","#f5c842","#c090e0","#78d8a0"];function Wt(e){const t=e.depth||30;return[{depth:t,label:`${t} cm`,sensor:e}]}function _t(e){if(Me==="capteur")return e.map((i,n)=>({label:i.serial,color:ge[n%ge.length],depth:i.depth||30,sensor:i}));const t=new Map;return e.forEach(i=>Wt(i).forEach(n=>{t.has(n.depth)||t.set(n.depth,n)})),[...t.values()].sort((i,n)=>i.depth-n.depth).map((i,n)=>({label:i.label,color:ge[n%ge.length],depth:i.depth,sensor:i.sensor}))}function Vt(e,t,i,n=null,a=null,s=null){var h;const u={pothydr:{name:"Potentiel hydrique",unit:"kPa"},tsol:{name:"Température du sol",unit:"°C"}}[t],m=_t(i),d=document.createElement("div");d.className="chart-card tensio-multi-card",d.dataset.tensioMetric=t,d.dataset.tensioCurves=JSON.stringify(m.map(f=>({depth:f.depth,color:f.color}))),s&&(d.dataset.cardKey=s,d.draggable=!0);const c=m.map(f=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${f.color};vertical-align:middle;border-radius:1px"></span>
      ${f.label}
    </span>`).join(""),l=n?`<span class="chart-card-source">${n}</span>`:"",o=a!=null?`<span class="chart-card-emission">il y a ${a} min</span>`:"",p=`
    <div class="chart-tensio-toggle">
      <button class="btn-secondary btn-sm tensio-toggle-btn${Me==="capteur"?" active":""}" data-mode="capteur">Par capteur</button>
      <button class="btn-secondary btn-sm tensio-toggle-btn${Me==="horizon"?" active":""}" data-mode="horizon">Par horizon</button>
    </div>`;d.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((h=m[0])==null?void 0:h.color)||ge[0]}">${u.name}</span>
      <span class="chart-card-unit">${u.unit}</span>
      ${l}${o}
    </div>
    ${p}
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${c}</div>
    <svg class="chart-svg tensio-svg" data-metric="${t}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,d.querySelectorAll(".tensio-toggle-btn").forEach(f=>{f.addEventListener("click",()=>{Me=f.dataset.mode,J()})}),e.appendChild(d)}function bt(e,t,i,n,a,s,r,u){var c;const m=document.createElement("div");m.className=`chart-card ${r}-multi-card`,m.dataset[r+"Curves"]=JSON.stringify(t.map(l=>({depth:l.depth,color:l[i]}))),u&&(m.dataset.cardKey=u,m.draggable=!0);const d=t.map(l=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${l[i]};vertical-align:middle;border-radius:1px"></span>
      ${l.label}
    </span>`).join("");return m.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((c=t[0])==null?void 0:c[i])||"#46DA82"}">${n}</span>
      <span class="chart-card-unit">${a}</span>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${d}</div>
    <svg class="chart-svg ${s}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,e.appendChild(m),m}function Gt(e,t,i=null,n=null,a=null){bt(e,t,"vwcColor","Teneur en eau du sol","%vol","capa-svg","capa",a)}function Yt(e,t,i=null,n=null,a=null){bt(e,t,"tsolColor","Température du sol par horizon","°C","capa-tsol-svg","capaT",a)}function He(e,t,i=null,n=null,a=null,s=!1,r=null){var h;const u=t.base(),m=document.createElement("div");m.className="chart-card",m.dataset.base=u,m.dataset.color=t.color,m.dataset.cumul=t.isCumul?"1":"",m.dataset.chartType=t.chartType||"line",m.dataset.metricId=t.id,m.dataset.metricName=t.name,m.dataset.metricUnit=t.unit,a&&(m.dataset.cardKey=a,m.draggable=!0);const d=t.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label} : <strong>${Qe(t)} ${t.cumul.unit}</strong></span><button class="chart-cumul-add-btn" data-cumul-label="${t.cumul.label}" data-cumul-val="${Qe(t)} ${t.cumul.unit}" title="Ajouter au tableau de bord"><i class="bi bi-house"></i></button></div>`:"",c=i?`<span class="chart-card-source">${i}</span>`:"",l=n!=null?`<span class="chart-card-emission">il y a ${n} min</span>`:"";let o="";if(r){const f=((h=document.getElementById("time-step"))==null?void 0:h.value)||"1h";o=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${r}&metricId=${t.id}&parcelId=${H}&period=${K}&step=${f}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`}const p=s?'<div class="chart-unavailable">Données indisponibles pour ce pas de temps</div>':'<svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>';m.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${c}${l}${o}
    </div>
    ${p}
    ${d}
  `,e.appendChild(m)}let be=null;function Jt(){return be||(be=document.createElement("div"),be.className="chart-tooltip",document.body.appendChild(be)),be}function Ut(e,t){return t==="temp"||t==="temperature"?["#6eb4d4","#e07050"]:t==="tseche"||t==="thumide"?["#6eb4d4","#e07050"]:t==="temp_rosee"?["#a0d0f0","#4090c0"]:[Xt(e,.55),e]}function Xt(e,t){const i=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),s=Math.round(i+(255-i)*t),r=Math.round(n+(255-n)*t),u=Math.round(a+(255-a)*t);return`#${s.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${u.toString(16).padStart(2,"0")}`}function Oe(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let i=0;i<e.length-1;i++){const n=e[Math.max(i-1,0)],a=e[i],s=e[i+1],r=e[Math.min(i+2,e.length-1)],u=a.x+(s.x-n.x)/6,m=a.y+(s.y-n.y)/6,d=s.x-(r.x-a.x)/6,c=s.y-(r.y-a.y)/6;t+=` C${u.toFixed(1)},${m.toFixed(1)} ${d.toFixed(1)},${c.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return t}function xe(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Xe(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function Kt(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function Ke(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function ce(e,t,i,n=.15){const a=Xe(i),s=Ke(a),r=Kt(a),u=()=>1+(Math.random()-.5)*2*n;switch(e){case"temp":return(t-6+s*12)*u();case"tseche":case"thumide":return(t-4+s*8)*u();case"temp_rosee":{const m=t-6+s*12;return Math.min(m-1,t-8+s*6)*u()}case"tsol":{const m=Xe(i+120);return(t-3+Ke(m)*6)*u()}case"humidite":return Math.min(100,Math.max(20,(t+(1-s)*25-s*15)*u()));case"rayonnement":return Math.max(0,r*t*1.3*u());case"etp":return Math.max(0,r*t*1.5*u());case"humec":return Math.max(0,t*Math.max(0,.8-r*1.2)*u());case"pluie":return Math.random()<.12?t*Math.random()*2:0;case"vent":case"rafales":return Math.max(0,t*(.6+r*.8)*u());default:return Math.max(0,t*u())}}function Zt(){const e=jt(),t=$e();P.filter(n=>C.linkedSensorIds.includes(n.id)).filter(n=>_.includes(n.model)),document.querySelectorAll(".chart-card").forEach(n=>{if(n.classList.contains("tensio-multi-card")){const o=n.querySelector(".tensio-svg"),p=JSON.parse(n.dataset.tensioCurves||"[]");o&&p.length>0&&Qt(o,p,e,t);return}if(n.classList.contains("capa-multi-card")){const o=n.querySelector(".capa-svg"),p=JSON.parse(n.dataset.capaCurves||"[]");o&&p.length>0&&Ze(o,p,e,t,"vwc");return}if(n.classList.contains("capaT-multi-card")){const o=n.querySelector(".capa-tsol-svg"),p=JSON.parse(n.dataset.capaTCurves||"[]");o&&p.length>0&&Ze(o,p,e,t,"tsol");return}const a=n.querySelector(".chart-svg");if(!a)return;const s=parseFloat(n.dataset.base),r=n.dataset.color,u=n.dataset.cumul==="1",m=n.dataset.chartType||"line",d=n.dataset.metricId||"",c=n.dataset.metricName||"",l=n.dataset.metricUnit||"";n.dataset.isIrrigation?ii(a,r,e,t):ei(a,s,r,e,t,u,m,d,c,l)}),gt(),yt()}function Qt(e,t,i,n){const r={t:14,r:10,b:28,l:46},u=600-r.l-r.r,m=180-r.t-r.b,d=t.map($=>{const y=20+$.depth*.8+Math.random()*20;return Array.from({length:i},(M,S)=>{const T=(i-1-S)*n;return Math.max(0,ce("pothydr",y,T))})}),c=d.flat(),l=Math.min(...c),o=Math.max(...c),p=o-l||1,h=$=>r.l+$/Math.max(i-1,1)*u,f=$=>r.t+m-($-l)/p*m,v=`tc-${Math.random().toString(36).slice(2)}`;let b=`<defs><clipPath id="${v}"><rect x="${r.l}" y="${r.t}" width="${u}" height="${m}"/></clipPath></defs>`;for(let $=0;$<=4;$++){const y=r.t+$/4*m,M=o-$/4*p;b+=`<line x1="${r.l}" y1="${y.toFixed(1)}" x2="${600-r.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,b+=`<text x="${r.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${M.toFixed(0)}</text>`}d.forEach(($,y)=>{const M=$.map((T,A)=>({x:h(A),y:f(T)})),S=Oe(M);b+=`<path d="${S}" fill="none" stroke="${t[y].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${v})"/>`}),b+=`<line x1="${r.l}" y1="${r.t+m}" x2="${600-r.r}" y2="${r.t+m}" stroke="var(--bdr2)" stroke-width="1"/>`;const g=Math.max(1,Math.floor(i/6));for(let $=0;$<i;$+=g){const y=(i-1-$)*n;b+=`<text x="${h($).toFixed(1)}" y="${(r.t+m+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${xe(y)}</text>`}e.innerHTML=b}function Ze(e,t,i,n,a="vwc"){const u={t:14,r:10,b:28,l:46},m=600-u.l-u.r,d=180-u.t-u.b,c=t.map((y,M)=>{if(a==="tsol"){const T=16-y.depth*.06+M*.5+Math.random()*3;return Array.from({length:i},(A,E)=>{const R=(i-1-E)*n;return ce("tsol",T,R)})}const S=35-y.depth*.15+M*2+Math.random()*8;return Array.from({length:i},(T,A)=>{const E=(i-1-A)*n;return Math.max(10,Math.min(55,ce("teneur-eau",S,E)))})}),l=c.flat(),o=Math.floor(Math.min(...l)-2),p=Math.ceil(Math.max(...l)+2),h=p-o||1,f=y=>u.l+y/Math.max(i-1,1)*m,v=y=>u.t+d-(y-o)/h*d,b=`cc-${Math.random().toString(36).slice(2)}`;let g=`<defs><clipPath id="${b}"><rect x="${u.l}" y="${u.t}" width="${m}" height="${d}"/></clipPath></defs>`;for(let y=0;y<=4;y++){const M=u.t+y/4*d,S=p-y/4*h;g+=`<line x1="${u.l}" y1="${M.toFixed(1)}" x2="${600-u.r}" y2="${M.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,g+=`<text x="${u.l-5}" y="${(M+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${S.toFixed(0)}</text>`}c.forEach((y,M)=>{const S=y.map((A,E)=>({x:f(E),y:v(A)})),T=Oe(S);g+=`<path d="${T}" fill="none" stroke="${t[M].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${b})"/>`}),g+=`<line x1="${u.l}" y1="${u.t+d}" x2="${600-u.r}" y2="${u.t+d}" stroke="var(--bdr2)" stroke-width="1"/>`;const $=Math.max(1,Math.floor(i/6));for(let y=0;y<i;y+=$){const M=(i-1-y)*n;g+=`<text x="${f(y).toFixed(1)}" y="${(u.t+d+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${xe(M)}</text>`}e.innerHTML=g}function ei(e,t,i,n,a,s,r="line",u="",m="",d=""){const o={t:14,r:10,b:28,l:46},p=600-o.l-o.r,h=180-o.t-o.b,f=Math.max(1,Math.round(a/15)),v=Array.from({length:n},(k,j)=>{const F=(n-1-j)*a;if(s){let q=0;for(let z=0;z<f;z++)q+=ce(u,t/f,F+z*(a/f));return q}else if(f>1){let q=0;for(let z=0;z<f;z++)q+=ce(u,t,F+z*(a/f));return q/f}else return ce(u,t,F)}),b=r==="bar"?0:Math.min(...v),g=Math.max(...v),$=g-b||1,y=k=>o.l+k/Math.max(n-1,1)*p,M=k=>o.t+h-(k-b)/$*h,S=`grad_${Math.random().toString(36).slice(2)}`,[T,A]=Ut(i,u);let E=`<defs>
    <linearGradient id="${S}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${T}"/>
      <stop offset="100%" stop-color="${A}"/>
    </linearGradient>
    <clipPath id="clip_${S}">
      <rect x="${o.l}" y="${o.t}" width="${p}" height="${h}"/>
    </clipPath>
  </defs>`;for(let k=0;k<=4;k++){const j=o.t+k/4*h,F=g-k/4*$,q=Math.abs(F)>=100?F.toFixed(0):Math.abs(F)>=10?F.toFixed(1):F.toFixed(2);E+=`<line x1="${o.l}" y1="${j.toFixed(1)}" x2="${600-o.r}" y2="${j.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,E+=`<text x="${o.l-5}" y="${(j+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${q}</text>`}E+=`<line x1="${o.l}" y1="${o.t+h}" x2="${600-o.r}" y2="${o.t+h}" stroke="var(--bdr2)" stroke-width="1"/>`;const R=Math.max(1,Math.floor(n/6));for(let k=0;k<n;k+=R){const j=y(k).toFixed(1),F=(n-k)*a;E+=`<line x1="${j}" y1="${o.t}" x2="${j}" y2="${o.t+h}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,E+=`<text x="${j}" y="${o.t+h+14}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${xe(F)}</text>`}if(r==="bar"){const k=Math.max(2,p/n*.65);v.forEach((j,F)=>{if(j<=0)return;const q=y(F),z=M(j),ne=o.t+h-z;E+=`<rect x="${(q-k/2).toFixed(1)}" y="${z.toFixed(1)}" width="${k.toFixed(1)}" height="${ne.toFixed(1)}" fill="url(#${S})" opacity="0.9" rx="1"/>`})}else{const k=v.map((q,z)=>({x:y(z),y:M(q)})),j=Oe(k),F=j+` L${y(n-1).toFixed(1)},${o.t+h} L${o.l.toFixed(1)},${o.t+h} Z`;E+=`<path d="${F}" fill="${A}" opacity="0.07" clip-path="url(#clip_${S})"/>`,E+=`<path d="${j}" fill="none" stroke="url(#${S})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${S})"/>`}E+=`<rect class="chart-hover-rect" x="${o.l}" y="${o.t}" width="${p}" height="${h}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=E,ti(e,v,y,M,b,g,n,a,m,d,i,o,600)}function ti(e,t,i,n,a,s,r,u,m,d,c,l,o,p){const h=Jt(),f=e.querySelector(".chart-hover-rect");if(!f)return;const b=document.createElementNS("http://www.w3.org/2000/svg","circle");b.setAttribute("r","4"),b.setAttribute("fill",c),b.setAttribute("stroke","#fff"),b.setAttribute("stroke-width","1.5"),b.style.display="none",b.style.pointerEvents="none",e.appendChild(b),f.addEventListener("mousemove",g=>{const $=e.getBoundingClientRect(),y=o/$.width,M=(g.clientX-$.left)*y,S=o-l.l-l.r,T=Math.max(0,Math.min(1,(M-l.l)/S)),A=Math.round(T*(r-1));if(A<0||A>=t.length)return;const E=t[A],R=i(A),k=n(E);b.setAttribute("cx",R),b.setAttribute("cy",k),b.style.display="";const j=(r-A)*u,F=xe(j),q=Math.abs(E)>=100?E.toFixed(1):E.toFixed(2);h.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${m}</div>
      <div class="chart-tooltip-val" style="color:${c}">${q} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${d}</span></div>
      <div class="chart-tooltip-ts">${F}</div>
    `,h.style.display="block";const z=g.clientX+12,ne=g.clientY-10;h.style.left=`${Math.min(z,window.innerWidth-160)}px`,h.style.top=`${ne}px`}),f.addEventListener("mouseleave",()=>{h.style.display="none",b.style.display="none"})}function ii(e,t,i,n){const r={t:12,r:8,b:28,l:44},u=600-r.l-r.r,m=180-r.t-r.b,d=Date.now(),c=i*n*6e4,l=Array(i).fill(0);(C.irrigationEvents||[]).forEach(b=>{const g=new Date(b.isoDate).getTime(),$=d-g;if($<0||$>c)return;const y=Math.floor((c-$)/(n*6e4));y>=0&&y<i&&(l[y]+=b.mm||0)});const o=Math.max(...l,1),p=b=>r.l+b/Math.max(i-1,1)*u,h=b=>r.t+m-b/o*m;let f="";for(let b=0;b<=4;b++){const g=r.t+b/4*m,$=(o-b/4*o).toFixed(1);f+=`<line x1="${r.l}" y1="${g}" x2="${600-r.r}" y2="${g}" stroke="var(--bdr2)" stroke-width="1"/>`,f+=`<text x="${r.l-4}" y="${g+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${$}</text>`}const v=Math.max(4,u/i*.65);l.forEach((b,g)=>{if(b<=0)return;const $=p(g),y=h(b),M=r.t+m-y;f+=`<rect x="${($-v/2).toFixed(1)}" y="${y.toFixed(1)}" width="${v.toFixed(1)}" height="${M.toFixed(1)}" fill="${t}" opacity="0.85" rx="1"/>`}),e.innerHTML=f}function Qe(e){const i={pluie:()=>w(20,120),etp:()=>O(15,80),rayonnement:()=>w(500,3e3)}[e.id];return i?i():w(10,100)}function ni(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),i=document.getElementById("time-step"),n=new Date,a=new Date(n-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",s=>{const r=s.target.closest(".period-preset-btn");if(r)if(e.querySelectorAll(".period-preset-btn").forEach(u=>u.classList.remove("active")),r.classList.add("active"),K=r.dataset.period,K==="custom")t.style.display="flex";else{t.style.display="none";const u=document.getElementById("time-step");u&&(u.value=Tt(K)),J()}}),document.getElementById("date-from").addEventListener("change",et),document.getElementById("date-to").addEventListener("change",et),i.addEventListener("change",J)}function et(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(ue=new Date(e),me=new Date(t+"T23:59:59"),ue<me&&J())}const tt={"Blé tendre":[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé. Profondeur optimale 3–4 cm."},{name:"Levée",date:"2025-11-05",bbch:"BBCH 09",desc:"Apparition de la première feuille au-dessus du sol."},{name:"Tallage",date:"2026-02-15",bbch:"BBCH 21",desc:"1er talle apparu. Période sensible au froid."},{name:"Épi 1 cm",date:"2026-04-20",bbch:"BBCH 30",desc:"Montaison. Début de la différenciation de l'épi."},{name:"Épiaison",date:"2026-05-20",bbch:"BBCH 55",desc:"La moitié de l'épiaison est atteinte. Risque maximal de fusariose."},{name:"Floraison",date:"2026-05-28",bbch:"BBCH 65",desc:"Pleine floraison. Fenêtre critique pour la qualité du grain."},{name:"Maturité",date:"2026-07-10",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %. Récolte possible."}],Maïs:[{name:"Semis",date:"2026-04-25",bbch:"BBCH 00",desc:"Sol > 10 °C à 5 cm. Fenêtre de semis idéale."},{name:"Levée",date:"2026-05-10",bbch:"BBCH 09",desc:"Coleoptile visible. 10 jours après semis en conditions normales."},{name:"4 feuilles",date:"2026-05-28",bbch:"BBCH 14",desc:"V4. Intervention herbicide possible."},{name:"6 feuilles",date:"2026-06-12",bbch:"BBCH 16",desc:"V6. Stade critique pour la nutrition azotée."},{name:"Floraison ♂",date:"2026-07-15",bbch:"BBCH 65",desc:"VT. Émission du pollen. Forte demande en eau (≥ 8 mm/j)."},{name:"Soie",date:"2026-07-18",bbch:"BBCH 67",desc:"R1. Fécondation. Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-20",bbch:"BBCH 89",desc:"Point noir visible. Récolte selon teneur en eau."}],Colza:[{name:"Semis",date:"2025-08-25",bbch:"BBCH 00",desc:"Sol humide, T° < 25 °C. Objectif : 30 plants/m²."},{name:"Levée",date:"2025-09-05",bbch:"BBCH 09",desc:"Cotylédon visible. Période à risque limaces."},{name:"Rosette",date:"2025-11-15",bbch:"BBCH 18",desc:"8 feuilles étalées. Bon état pour entrer en hiver."},{name:"Reprise",date:"2026-02-20",bbch:"BBCH 30",desc:"Allongement de l'hypocotyle. Fin de la période de vernalisation."},{name:"Bouton floral",date:"2026-03-25",bbch:"BBCH 51",desc:"Inflorescence visible. Risque sclérotinia à surveiller."},{name:"Floraison",date:"2026-04-10",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile. Éviter les traitements."},{name:"Siliques",date:"2026-05-05",bbch:"BBCH 75",desc:"Siliques de 2 cm. Fin de floraison, début de remplissage."},{name:"Maturité",date:"2026-07-05",bbch:"BBCH 89",desc:"Siliques brunes, graines noires. Seuil récolte < 9 % eau."}],Tournesol:[{name:"Semis",date:"2026-04-20",bbch:"BBCH 00",desc:"Sol > 8 °C à 5 cm. Profondeur 4–5 cm."},{name:"Levée",date:"2026-05-05",bbch:"BBCH 09",desc:"Cotylédon hors sol. Période sensible aux oiseaux."},{name:"4 feuilles",date:"2026-05-25",bbch:"BBCH 14",desc:"V4. Interventions herbicides possibles."},{name:"Bouton floral",date:"2026-06-25",bbch:"BBCH 51",desc:"E2. Bouton visible. Fin du développement végétatif."},{name:"Floraison",date:"2026-07-10",bbch:"BBCH 65",desc:"R5.1. Fleurs ligulées ouvertes. Stress hydrique critique."},{name:"Maturité",date:"2026-09-05",bbch:"BBCH 89",desc:"Capitule brun, dos jaune. Teneur en eau 9–12 %."}],Vigne:[{name:"Débourrement",date:"2026-04-05",bbch:"BBCH 05",desc:"Bourgeon en coton. Risque gel augmente fortement."},{name:"Sortie feuilles",date:"2026-04-20",bbch:"BBCH 11",desc:"1ère feuille étalée. Début des traitements prophylactiques."},{name:"Floraison",date:"2026-06-10",bbch:"BBCH 65",desc:"Anthèse. Niveau de risque mildiou et oïdium maximal."},{name:"Nouaison",date:"2026-06-25",bbch:"BBCH 71",desc:"Baies visibles. Consolidation du rendement."},{name:"Véraison",date:"2026-08-05",bbch:"BBCH 81",desc:"Changement de couleur. Arrêt des traitements phytos recommandé."},{name:"Récolte",date:"2026-09-15",bbch:"BBCH 89",desc:"Maturité technologique. Date selon profil variétal."}],Sorgho:[{name:"Semis",date:"2026-05-10",bbch:"BBCH 00",desc:"Sol > 12 °C à 5 cm."},{name:"Levée",date:"2026-05-25",bbch:"BBCH 09",desc:"Coleoptile visible."},{name:"Montaison",date:"2026-07-01",bbch:"BBCH 30",desc:"Début de la montaison. Forte demande azotée."},{name:"Floraison",date:"2026-07-25",bbch:"BBCH 65",desc:"Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-15",bbch:"BBCH 89",desc:"Teneur en eau < 25 %. Récolte adaptée."}],"Orge de printemps":[{name:"Semis",date:"2026-03-15",bbch:"BBCH 00",desc:"Semis dès que sol ressuyé, T° > 5 °C."},{name:"Levée",date:"2026-04-01",bbch:"BBCH 09",desc:"Coleoptile visible. Période sensible aux limaces."},{name:"Tallage",date:"2026-04-20",bbch:"BBCH 21",desc:"Premier talle. Couverture du sol progressive."},{name:"Montaison",date:"2026-05-10",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-06-05",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-07-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-08-05",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],Orge:[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé, profondeur 3–4 cm."},{name:"Levée",date:"2025-11-04",bbch:"BBCH 09",desc:"Coleoptile visible. Surveillance limaces."},{name:"Tallage",date:"2026-02-08",bbch:"BBCH 21",desc:"Reprise de végétation. Premier talle."},{name:"Montaison",date:"2026-04-02",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-05-07",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-05-18",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-06-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-07-01",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],"Pomme de terre":[{name:"Plantation",date:"2026-04-02",bbch:"BBCH 00",desc:"Tubercules-semences à 10 cm, espacement 30–35 cm."},{name:"Levée",date:"2026-04-26",bbch:"BBCH 09",desc:"Tiges émergées. Risque gel résiduel."},{name:"Croissance",date:"2026-05-15",bbch:"BBCH 31",desc:"Fermeture du rang. Première application fongicide."},{name:"Tuberisation",date:"2026-06-05",bbch:"BBCH 71",desc:"Initiation des tubercules. Demande en eau maximale."},{name:"Grossissement",date:"2026-07-01",bbch:"BBCH 81",desc:"Grossissement actif. Irrigation critique."},{name:"Maturité",date:"2026-08-15",bbch:"BBCH 89",desc:"Fanes sèches, peau des tubercules fixée. Récolte."}],Cerisier:[{name:"Dormance",date:"2025-12-15",bbch:"BBCH 00",desc:"Repos végétatif. Besoin en froid accumulé."},{name:"Bourgeons",date:"2026-02-20",bbch:"BBCH 03",desc:"Gonflement des bourgeons. Chilling satisfait."},{name:"Débourrement",date:"2026-03-18",bbch:"BBCH 07",desc:"Pointe verte visible. Risque gel fort (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-08",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation croisée nécessaire."},{name:"Nouaison",date:"2026-04-28",bbch:"BBCH 71",desc:"Petits fruits noués. Chute physiologique normale."},{name:"Fructification",date:"2026-05-12",bbch:"BBCH 81",desc:"Grossissement actif des cerises. Irrigation si déficit."},{name:"Récolte",date:"2026-06-18",bbch:"BBCH 89",desc:"Cerises à maturité. Récolte échelonnée selon variété."}],Poire:[{name:"Débourrement",date:"2026-03-28",bbch:"BBCH 07",desc:"Pointe verte. Vigilance gel (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-15",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile."},{name:"Nouaison",date:"2026-05-05",bbch:"BBCH 71",desc:"Petits fruits noués. Éclaircissage si nécessaire."},{name:"Croissance",date:"2026-06-15",bbch:"BBCH 78",desc:"Grossissement actif. Besoins en eau importants."},{name:"Véraison",date:"2026-08-10",bbch:"BBCH 84",desc:"Changement de couleur. Arrêt des traitements phytos."},{name:"Récolte",date:"2026-09-10",bbch:"BBCH 89",desc:"Récolte selon indice de maturité (pénétromètre, amidon)."}],Pomme:[{name:"Débourrement",date:"2026-04-01",bbch:"BBCH 07",desc:"Pointe verte. Risque gel résiduel."},{name:"Floraison",date:"2026-04-25",bbch:"BBCH 65",desc:"Pleine floraison. Risque tavelure maximal."},{name:"Nouaison",date:"2026-05-15",bbch:"BBCH 71",desc:"Petits fruits visibles. Éclaircissage possible."},{name:"Croissance",date:"2026-06-10",bbch:"BBCH 78",desc:"Grossissement actif. Surveillance carpocapse."},{name:"Véraison",date:"2026-08-15",bbch:"BBCH 84",desc:"Coloration des fruits. Maturation avancée."},{name:"Récolte",date:"2026-09-20",bbch:"BBCH 89",desc:"Récolte selon variété et indice de maturité."}],Salade:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Laitue:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Betterave:[{name:"Semis",date:"2026-03-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé (T° > 5 °C) et ressuyé."},{name:"Levée",date:"2026-04-08",bbch:"BBCH 09",desc:"Cotylédons hors sol. Période à risque limaces."},{name:"4 feuilles",date:"2026-05-01",bbch:"BBCH 14",desc:"Couverture partielle du sol. Interventions herbicides."},{name:"Fermeture rang",date:"2026-06-15",bbch:"BBCH 37",desc:"Canopée fermée. Forte demande en eau et azote."},{name:"Grossissement",date:"2026-08-01",bbch:"BBCH 40",desc:"Grossissement actif de la racine. Accumulation de sucres."},{name:"Récolte",date:"2026-10-20",bbch:"BBCH 89",desc:"Teneur en sucre optimale. Arrachage selon planning usine."}]},ai=[{name:"Semis",date:"2026-04-01",bbch:"BBCH 00",desc:"Semis."},{name:"Levée",date:"2026-04-20",bbch:"BBCH 09",desc:"Levée des plantules."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Floraison."},{name:"Récolte",date:"2026-08-20",bbch:"BBCH 89",desc:"Maturité physiologique."}];function si(e){if(!e)return[];const t=e.toLowerCase();for(const i of Object.keys(tt))if(t.startsWith(i.toLowerCase()))return tt[i];return ai}function oi(){const e=document.getElementById("toggle-phenologie");e&&e.addEventListener("change",()=>{gt()})}function gt(){document.querySelectorAll(".pheno-overlay").forEach(f=>f.remove());const e=document.getElementById("toggle-phenologie");if(!(e!=null&&e.checked))return;const t=C.crop||B.crop,i=si(t);if(!i.length)return;const n=Date.now(),a=pe()*6e4,s=n-a,r=600,u=46,m=10,d=14,c=28,l=r-u-m,o=d+4,p=180-c,h=i.filter(f=>{const v=new Date(f.date).getTime();return v>=s&&v<=n});h.length&&document.querySelectorAll(".chart-card").forEach(f=>{const v=f.querySelector(".chart-svg, .tensio-svg");if(!v)return;const b=document.createElementNS("http://www.w3.org/2000/svg","g");b.setAttribute("class","pheno-overlay"),h.forEach(g=>{const y=(new Date(g.date).getTime()-s)/a,M=u+y*l,S=document.createElementNS("http://www.w3.org/2000/svg","line");S.setAttribute("x1",M.toFixed(1)),S.setAttribute("x2",M.toFixed(1)),S.setAttribute("y1",o),S.setAttribute("y2",p),S.setAttribute("stroke","#3a9e6a"),S.setAttribute("stroke-width","1"),S.setAttribute("stroke-dasharray","4,3"),b.appendChild(S);const T=14,A=g.name.length>T?g.name.slice(0,T-1)+"…":g.name,E=(M+3).toFixed(1),R=(o+2).toFixed(1),k=document.createElementNS("http://www.w3.org/2000/svg","text");k.setAttribute("x",E),k.setAttribute("y",R),k.setAttribute("transform",`rotate(90, ${E}, ${R})`),k.setAttribute("text-anchor","start"),k.setAttribute("font-size","9"),k.setAttribute("font-family","var(--font)"),k.setAttribute("fill","#3a9e6a"),k.style.cursor="pointer",k.textContent=A,b.appendChild(k);const j=document.createElementNS("http://www.w3.org/2000/svg","rect");j.setAttribute("x",(M-8).toFixed(1)),j.setAttribute("y",o.toString()),j.setAttribute("width","16"),j.setAttribute("height",(p-o).toString()),j.setAttribute("fill","transparent"),j.style.cursor="pointer",j.addEventListener("click",F=>ri(g,F)),b.appendChild(j)}),v.appendChild(b)})}let oe=null;function ri(e,t){oe&&(oe.remove(),oe=null);const i=document.createElement("div");i.className="pheno-popover";const n=r=>{const[u,m,d]=r.split("-");return`${d}/${m}/${u}`};i.innerHTML=`
    <div class="pheno-pop-hd">
      <span class="pheno-pop-badge">${e.bbch}</span>
      <span class="pheno-pop-name">${e.name}</span>
      <button class="pheno-pop-close">×</button>
    </div>
    <div class="pheno-pop-date">${n(e.date)}</div>
  `,i.querySelector(".pheno-pop-close").addEventListener("click",()=>{i.remove(),oe=null});const a=t.clientX,s=t.clientY;i.style.position="fixed",i.style.top=s-8+"px",i.style.left=a+12+"px",document.body.appendChild(i),oe=i,setTimeout(()=>{const r=i.offsetWidth,u=i.offsetHeight;let m=s-8,d=a+12;d+r>window.innerWidth-8&&(d=a-r-12),m+u>window.innerHeight-8&&(m=s-u),i.style.top=Math.max(8,m)+"px",i.style.left=Math.max(8,d)+"px"},0),document.addEventListener("click",function r(u){i.contains(u.target)||(i.remove(),oe=null,document.removeEventListener("click",r))},{capture:!0})}function li(){const e=document.getElementById("toggle-notes");e&&e.addEventListener("change",yt)}function yt(){document.querySelectorAll(".notes-overlay").forEach(o=>o.remove()),it();const e=document.getElementById("toggle-notes");if(!(e!=null&&e.checked))return;const t=ye().filter(o=>o.type==="note"||o.type==="traitement");if(!t.length)return;const i=Date.now(),n=pe()*6e4,a=i-n,s=600,r=46,u=10,m=28,d=s-r-u,c=180-m,l=t.filter(o=>{const p=new Date(o.date+"T12:00:00").getTime();return p>=a&&p<=i});l.length&&document.querySelectorAll(".chart-card").forEach(o=>{const p=o.querySelector(".chart-svg, .tensio-svg");if(!p)return;const h=document.createElementNS("http://www.w3.org/2000/svg","g");h.setAttribute("class","notes-overlay"),l.forEach(f=>{const b=(new Date(f.date+"T12:00:00").getTime()-a)/n,g=r+b*d,y=f.type==="traitement"?"#78c860":"#60a8e0",M=c+9,S=document.createElementNS("http://www.w3.org/2000/svg","polygon"),T=5;S.setAttribute("points",`${g.toFixed(1)},${(M-T).toFixed(1)} ${(g+T).toFixed(1)},${M.toFixed(1)} ${g.toFixed(1)},${(M+T).toFixed(1)} ${(g-T).toFixed(1)},${M.toFixed(1)}`),S.setAttribute("fill",y),S.setAttribute("stroke","#fff"),S.setAttribute("stroke-width","1.5"),h.appendChild(S);const A=document.createElementNS("http://www.w3.org/2000/svg","rect");A.setAttribute("x",(g-9).toFixed(1)),A.setAttribute("y",c.toFixed(1)),A.setAttribute("width","18"),A.setAttribute("height","18"),A.setAttribute("fill","transparent"),A.style.cursor="default",A.addEventListener("mouseenter",E=>ci(f,E)),A.addEventListener("mouseleave",it),h.appendChild(A)}),p.appendChild(h)})}let G=null;function ci(e,t){G||(G=document.createElement("div"),G.className="note-tip",document.body.appendChild(G));const i=e.type==="traitement";let a=`<div class="note-tip-header">
    <span class="note-tip-badge note-tip-badge--${i?"trait":"note"}">
      <i class="bi ${i?"bi-eyedropper":"bi-pencil"}"></i> ${i?"Traitement":"Note"}
    </span>
    <span class="note-tip-date">${(u=>{const[m,d,c]=u.split("-");return`${c}/${d}/${m}`})(e.date)}</span>
  </div>`;e.texte&&(a+=`<div class="note-tip-texte">${e.texte}</div>`),i&&(e.produit||e.dose||e.cible)&&(a+='<div class="note-tip-detail">',e.produit&&(a+=`<span><i class="bi bi-flask"></i> ${e.produit}</span>`),e.dose&&(a+=`<span><i class="bi bi-droplet"></i> ${e.dose}</span>`),e.cible&&(a+=`<span><i class="bi bi-bullseye"></i> ${e.cible}</span>`),a+="</div>"),G.innerHTML=a,G.style.display="block";const s=t.clientX+14,r=t.clientY-10;G.style.left=s+"px",G.style.top=r+"px",requestAnimationFrame(()=>{const u=G.offsetWidth;s+u>window.innerWidth-8&&(G.style.left=t.clientX-u-10+"px")})}function it(){G&&(G.style.display="none")}function di(){Ae()}function Ae(){var t,i,n,a;const e=document.getElementById("compare-control");if(e)if(V){const s=((t=te.find(r=>r.id===V))==null?void 0:t.name)||"Parcelle";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${s} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(i=e.querySelector(".compare-clear-icon"))==null||i.addEventListener("click",r=>{r.stopPropagation(),V=null,Ae(),J()}),(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",nt)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",nt)}function nt(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),i=te.filter(s=>s.id!==H),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher une parcelle…">
    <div class="compare-dropdown-list">
      ${i.map(s=>`<div class="compare-dropdown-item${s.id===V?" active":""}" data-id="${s.id}"><i class="bi bi-map"></i> ${s.name}</div>`).join("")}
    </div>
  `,t.appendChild(n);const a=n.querySelector(".compare-search-input");a.focus(),a.addEventListener("input",s=>{const r=s.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(u=>{u.style.display=u.textContent.toLowerCase().includes(r)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(s=>{s.addEventListener("click",()=>{V=parseInt(s.dataset.id),n.remove(),Ae(),J()})}),setTimeout(()=>{document.addEventListener("click",function s(r){!n.contains(r.target)&&!t.contains(r.target)&&(n.remove(),document.removeEventListener("click",s))})},0)}function ui(){const e=ke.find(t=>t.id===B.orgId);mi(e),fi(e),Be(),Fe(),re(),ze(),xi()}const at=["Abricotier","Ail","Amandier","Artichaut","Asperge","Aubergine","Avoine","Basilic","Betterave fourragère","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Chou pommé","Ciboulette","Citrouille","Clémentinier","Courgette","Echalote","Endive","Epinard","Fève","Figuier","Fraisier","Framboisier","Gesse","Giroflier","Haricot vert","Houblon","Kiwi","Lavande","Lentille","Luzerne","Maïs doux","Maïs grain","Maïs semence","Maïs silage","Melon","Menthe","Moutarde","Navet","Nectarinier","Noisetier","Noyer","Oignon","Olivier","Orge de brasserie","Orge de printemps","Orge d'hiver","Pêcher","Persil","Pissenlit","Poireau","Pois chiche","Pois de conserve","Pois fourrager","Pois protéagineux","Poivron","Pomme de terre","Pommier","Poirier","Prunier","Pruneau d'Agen","Radis","Raisin de cuve","Raisin de table","Riz","Romarin","Sarrasin","Seigle","Soja","Sorgho","Tabac","Thym","Tomate","Tournesol","Triticale","Vigne","Cardon","Céleri","Cerise","Châtaignier","Colza","Courge","Fénugrec","Groseillier","Lin fibre","Lin oléagineux","Mâche","Millet","Myrtille","Noix de cajou","Paprika","Patate douce","Pistachier","Poisson-Chat","Quinoa","Safran","Sainfoin","Scorsonère","Shallot","Topinambour","Trèfle","Vesce","Fétuque","Ray-grass","Prairie temporaire","Prairie permanente","Jachère","Autre"];function mi(e){const t=document.getElementById("panel-ident"),i=C,n=i.texture||null,a=i.irrigation||null,s=i.crop||at[0];t.innerHTML=`
    ${pi("Nom",i.name||"—","name","text")}
    ${hi("Culture",s,"crop",at)}
    ${ot("Surface",(i.area?`${i.area} ha`:"—")+' <span class="field-computed">(calculé)</span>')}
    ${st("Texture sol",n,"texture",Mt,"Indéfini")}
    ${st("Irrigation",a,"irrigation",pt,"Non renseigné")}
    ${ot("Exploitation",e?e.name:"—")}
  `,Ce(t,"name",i.name||"",r=>{Y({name:r}),mt(r,{label:"Parcelles",href:"parcelles.html"})}),Ce(t,"crop",s,r=>Y({crop:r})),Ce(t,"texture",n||"",r=>Y({texture:r||null})),Ce(t,"irrigation",a||"",r=>Y({irrigation:r||null}))}function pi(e,t,i,n="text"){const a=(t||"").replace(/"/g,"&quot;");return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <input type="${n}" class="panel-field-input" data-val value="${a}">
    </div>`}function hi(e,t,i,n){return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${n.map(a=>`<option${a===t?" selected":""}>${a}</option>`).join("")}
      </select>
    </div>`}function st(e,t,i,n,a="—"){const r=n.includes(a)?"":`<option value=""${t?"":" selected"}>${a}</option>`;return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${r}
        ${n.map(u=>`<option${u===(t||a)?" selected":""}>${u}</option>`).join("")}
      </select>
    </div>`}function ot(e,t){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${t}</span>
    </div>`}function Ce(e,t,i,n){const a=e.querySelector(`[data-field="${t}"] [data-val]`);if(!a)return;const s=()=>{var u;const r=(u=a.value)==null?void 0:u.trim();r&&r!==i&&(i=r,n(r))};a.addEventListener("change",s),a.tagName==="INPUT"&&a.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),a.blur())})}function fi(e){const t=document.getElementById("panel-geoloc"),i=C.latlngs||B.latlngs,n=Array.isArray(i)&&i.length>=3,a=C.ville||B.ville||(e==null?void 0:e.ville)||"—",s=B.departement||(e==null?void 0:e.departement),r=C.lat??B.lat??(e==null?void 0:e.lat),u=C.lng??B.lng??(e==null?void 0:e.lng);t.innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${s?` (${s})`:""}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${r!=null?r.toFixed(4):"—"}, ${u!=null?u.toFixed(4):"—"}</span>
    </div>
    ${r!=null?`<div class="panel-row">
      <a href="https://www.google.com/maps?q=${r.toFixed(6)},${u.toFixed(6)}" target="_blank" class="itinerary-link">
        <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
      </a>
    </div>`:""}
    <div style="padding:4px 0 4px">
      <a href="parcelle-modifier-contour.html?id=${H}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${n?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function vi(){const e=new Set;return P.filter(i=>C.linkedSensorIds.includes(i.id)).forEach(i=>{const n=N[i.model]||[];_.includes(i.model)||n.forEach(a=>e.add(a.id))}),e}function rt(e){const t=N[e]||[];return t.length?`<div class="sensor-metric-badges">${t.map(i=>`<span class="sensor-metric-badge" style="--mc:${i.color}">${i.name}</span>`).join("")}</div>`:""}function Be(){const e=document.getElementById("panel-sensors"),t=P.filter(p=>C.linkedSensorIds.includes(p.id)),i=P.filter(p=>p.orgId===B.orgId&&!C.linkedSensorIds.includes(p.id)),n=t.filter(p=>!_.includes(p.model)),a={};n.forEach(p=>(N[p.model]||[]).forEach(h=>{a[h.id]=(a[h.id]||0)+1}));const s=Object.entries(a).filter(([,p])=>p>1).map(([p])=>{var h;return((h=Object.values(N).flat().find(f=>f.id===p))==null?void 0:h.name)||p});let r="";if(s.length>0&&(r+=`<div class="sensor-conflict-banner">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <span>Conflit de métriques : <strong>${s.join(", ")}</strong> mesurée(s) par plusieurs capteurs. Les données peuvent être en doublon.</span>
    </div>`),t.length===0)r+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>';else{const p=t.filter(f=>_.includes(f.model)),h=t.filter(f=>!_.includes(f.model));if(r+=h.map(f=>{const v=f.event&&(Array.isArray(f.event)?f.event.length>0:!0),b=v?Array.isArray(f.event)?f.event[0]:f.event:null;return`
      <div class="sensor-linked-row">
        <div class="sensor-linked-info">
          <div style="display:flex;align-items:center;gap:6px">
            <a href="capteur-detail.html?id=${f.id}" class="sensor-linked-link">${ee[f.model]||f.model}</a>
            ${v?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
          </div>
          <span class="sensor-linked-detail">${f.model} · ${f.serial}</span>
          ${v?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${b}</span>`:""}
          ${rt(f.model)}
        </div>
        <button class="remove-sensor-btn icon-btn" data-id="${f.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>`}).join(""),p.length>0){const f={};p.forEach(v=>{const b=v.depth!=null?`${v.depth} cm`:v.model;f[b]||(f[b]=[]),f[b].push(v)}),r+=`<div class="sensor-kit-hd">
        <span class="sensor-kit-hd-label">Kit de tensiomètres</span>
        ${rt("CHP-15/30")}
      </div>`,Object.entries(f).forEach(([v,b])=>{r+=`<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${v}</div>`,r+=b.map(g=>{const $=g.event&&(Array.isArray(g.event)?g.event.length>0:!0),y=$?Array.isArray(g.event)?g.event[0]:g.event:null;return`
          <div class="sensor-linked-row" style="padding-left:12px">
            <div class="sensor-linked-info">
              <div style="display:flex;align-items:center;gap:6px">
                <a href="capteur-detail.html?id=${g.id}" class="sensor-linked-link">${ee[g.model]||g.model}</a>
                ${$?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
              </div>
              <span class="sensor-linked-detail">${g.model} · ${g.serial}</span>
              ${$?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${y}</span>`:""}
            </div>
            <button class="remove-sensor-btn icon-btn" data-id="${g.id}" title="Retirer">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>`}).join("")})}}e.innerHTML=r;const u=t.some(p=>p.model==="PYRANO"),m=[{name:"Évapotranspiration (ETP)",color:"#c090e0"},...u?[]:[{name:"Rayonnement solaire",color:"#f5c842"}],{name:"Température de rosée",color:"#80c8e8"}],d=document.getElementById("panel-parcel-metrics-ext");d&&(d.innerHTML=`
      <div class="panel-parcel-metrics">
        <div class="panel-parcel-metrics-title">Données spatialisées</div>
        <div class="sensor-metric-badges">
          ${m.map(p=>`<span class="sensor-metric-badge" style="--mc:${p.color}">${p.name}</span>`).join("")}
        </div>
      </div>`);const c=document.getElementById("sensor-add-row"),l=document.getElementById("add-sensor-select");c&&l&&(i.length>0?(l.innerHTML='<option value="">Ajouter un capteur…</option>'+i.map(p=>`<option value="${p.id}">${ee[p.model]||p.model} — ${p.serial}</option>`).join(""),c.style.display=""):c.style.display="none"),e.querySelectorAll(".remove-sensor-btn").forEach(p=>{p.addEventListener("click",()=>{const h=parseInt(p.dataset.id),f=P.find(b=>b.id===h),v=f?`${ee[f.model]||f.model} — ${f.serial}`:`capteur #${h}`;he({title:"Retirer le capteur",message:`Retirer <strong>${v}</strong> de cette parcelle ?<br><br>Les données historiques sont conservées.`,confirmLabel:"Retirer",onConfirm:()=>{const b=C.linkedSensorIds.filter(g=>g!==h);Y({linkedSensorIds:b}),ct(b),Be(),J(),de()}})})});const o=document.getElementById("add-sensor-btn");o&&o.addEventListener("click",()=>{const p=document.getElementById("add-sensor-select"),h=parseInt(p.value);if(!h)return;const f=P.find(b=>b.id===h);if(!f)return;const v=Le(f.model);if(v){const g=P.filter($=>C.linkedSensorIds.includes($.id)).filter($=>{const y=Le($.model);return y&&y!==v});if(g.length>0){const $=g.map(y=>`${ee[y.model]||y.model} — ${y.serial}`).join(", ");he({title:"Capteur incompatible",message:`Cette parcelle utilise déjà : <strong>${$}</strong>.<br><br>Les capteurs de sol (CHP, CAPA, EC, T_MINI) sont exclusifs — une seule technologie par parcelle.<br><br>Retirer ${g.length>1?"ces capteurs":"ce capteur"} et ajouter le nouveau ?`,confirmLabel:"Remplacer",onConfirm:()=>{const y=new Set(g.map(S=>S.id)),M=C.linkedSensorIds.filter(S=>!y.has(S));Y({linkedSensorIds:[...M,h]}),ct(M),dt(f),Be(),J(),de()}});return}}if(!_.includes(f.model)){const b=vi(),$=(N[f.model]||[]).map(y=>y.id).filter(y=>b.has(y));if($.length>0){const y=$.map(S=>{const T=Object.values(N).flat().find(A=>A.id===S);return(T==null?void 0:T.name)||S});if(!confirm(`Attention : ce capteur (${f.model}) mesure des métriques déjà fournies par un autre capteur :
• ${y.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}Y({linkedSensorIds:[...C.linkedSensorIds,h]}),dt(f),Be(),J(),de()})}function Fe(){var r;const e=document.getElementById("panel-integrations"),t=C.integrations||[],i=kt.filter(u=>!t.includes(u));let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':n+=t.map(u=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${u}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(u)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),e.innerHTML=n;const a=document.getElementById("integ-add-row"),s=document.getElementById("add-integ-select");a&&s&&(i.length>0?(s.innerHTML='<option value="">Ajouter une intégration…</option>'+i.map(u=>`<option value="${encodeURIComponent(u)}">${u}</option>`).join(""),a.style.display=""):a.style.display="none"),e.querySelectorAll(".remove-integ-btn").forEach(u=>{u.addEventListener("click",()=>{const m=decodeURIComponent(u.dataset.name);he({title:"Retirer l'intégration",message:`Retirer <strong>${m}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{Y({integrations:C.integrations.filter(d=>d!==m)}),Fe()}})})}),(r=document.getElementById("add-integ-btn"))==null||r.addEventListener("click",()=>{const u=document.getElementById("add-integ-select"),m=decodeURIComponent(u.value);m&&(Y({integrations:[...C.integrations,m]}),Fe())})}let X=null,Q=null;function bi(){if(X!==null)return;const e=we(H);X=e.linkedOrgMemberIds??ae.filter(t=>{var i,n;return t.source==="adherent"&&((i=t.parcelIds)==null?void 0:i.includes(H))&&((n=t.orgIds)==null?void 0:n.includes(B.orgId))}).map(t=>t.id),Q=e.linkedConseillerIds??ae.filter(t=>{var i;return t.source==="réseau"&&((i=t.parcelIds)==null?void 0:i.includes(H))}).map(t=>t.id)}function lt(e,t,i){return`<div class="member-row">
    <div>
      <span class="member-name">${e.prenom} ${e.nom}</span>
      ${i?`<span class="member-role-badge">${e.role}</span>`:""}
    </div>
    ${t?`<button class="remove-membre-btn icon-btn" data-id="${e.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function re(){var l;bi();const e=((l=document.getElementById("sidebar"))==null?void 0:l.getAttribute("data-role"))==="adherent-reseau",t=document.getElementById("panel-membres"),i=document.getElementById("panel-membres-section"),n=ae.filter(o=>{var p;return o.source==="adherent"&&((p=o.orgIds)==null?void 0:p.includes(B.orgId))}),a=n.filter(o=>X.includes(o.id));i&&(i.style.display=!e&&n.length===0?"none":""),t&&(t.innerHTML=a.length?a.map(o=>lt(o,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',t.querySelectorAll(".remove-membre-btn").forEach(o=>{o.addEventListener("click",()=>{const p=parseInt(o.dataset.id),h=ae.find(f=>f.id===p);he({title:"Retirer le membre",message:`Retirer <strong>${h?`${h.prenom} ${h.nom}`:`membre #${p}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{X=X.filter(f=>f!==p),se(H,{linkedOrgMemberIds:X}),re()}})})}));const s=document.getElementById("add-membre-org-row");s&&(s.style.display="");const r=document.getElementById("add-membre-org-select");r&&(r.innerHTML='<option value="">Associer un membre…</option>',n.filter(o=>!X.includes(o.id)).forEach(o=>{const p=document.createElement("option");p.value=o.id,p.textContent=`${o.prenom} ${o.nom}`,r.appendChild(p)})),document.getElementById("add-membre-org-btn").onclick=()=>{const o=parseInt(r==null?void 0:r.value);!o||X.includes(o)||(X.push(o),se(H,{linkedOrgMemberIds:X}),re())};const u=document.getElementById("panel-conseillers"),m=document.getElementById("panel-conseillers-section"),d=ae.filter(o=>o.source==="réseau"&&Q.includes(o.id));m&&(m.style.display=e&&d.length===0?"none":""),u&&(u.innerHTML=d.length?d.map(o=>lt(o,!e,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',e||u.querySelectorAll(".remove-membre-btn").forEach(o=>{o.addEventListener("click",()=>{const p=parseInt(o.dataset.id),h=ae.find(f=>f.id===p);he({title:"Retirer le conseiller",message:`Retirer <strong>${h?`${h.prenom} ${h.nom}`:`conseiller #${p}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{Q=Q.filter(f=>f!==p),se(H,{linkedConseillerIds:Q}),re()}})})}));const c=document.getElementById("add-conseiller-row");if(c&&(c.style.display=e?"none":""),!e){const o=document.getElementById("add-membre-select");o&&(o.innerHTML='<option value="">Ajouter un conseiller…</option>',ae.filter(p=>p.source==="réseau"&&!Q.includes(p.id)).forEach(p=>{const h=document.createElement("option");h.value=p.id,h.textContent=`${p.prenom} ${p.nom} (${p.role})`,o.appendChild(h)})),document.getElementById("add-membre-btn").onclick=()=>{const p=parseInt(o==null?void 0:o.value);!p||Q.includes(p)||(Q.push(p),se(H,{linkedConseillerIds:Q}),re())}}}function ze(){const e=document.getElementById("panel-alertes"),t=C.alertes||[],i={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':n+=t.map((a,s)=>`
      <div class="alert-item">
        <i class="bi ${i[a.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition||""} ${a.threshold||""} ${a.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${s}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),n+='<button id="create-alert-btn" class="action-btn" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=n,e.querySelectorAll(".remove-alert-btn").forEach(a=>{a.addEventListener("click",()=>{const s=parseInt(a.dataset.idx),r=[...C.alertes];r.splice(s,1),Y({alertes:r}),ze()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{yi(e)})}function gi(){const e=[];return P.filter(i=>C.linkedSensorIds.includes(i.id)).forEach(i=>{(N[i.model]||[]).forEach(a=>{e.find(s=>s.id===a.id)||e.push({id:a.id,name:a.name,unit:a.unit})})}),qe.forEach(i=>{e.find(n=>n.id===i.id)||e.push({id:i.id,name:i.name,unit:i.unit})}),e}function yi(e){if(e.querySelector(".alert-create-form"))return;const i=gi(),n=document.createElement("div");n.className="alert-create-form",n.innerHTML=`
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
  `,e.appendChild(n),n.querySelector("#alert-metric").addEventListener("change",a=>{const s=a.target.selectedOptions[0];n.querySelector("#alert-unit-label").textContent=(s==null?void 0:s.dataset.unit)||"—"}),n.querySelector("#alert-save-btn").addEventListener("click",()=>{const s=n.querySelector("#alert-metric").value,r=i.find(c=>c.id===s),u=n.querySelector("#alert-condition").value,m=n.querySelector("#alert-threshold").value;if(!s||!m)return;const d={type:"seuil",label:`Alerte ${(r==null?void 0:r.name)||s}`,metric:(r==null?void 0:r.name)||s,condition:u,threshold:m,unit:(r==null?void 0:r.unit)||""};Y({alertes:[...C.alertes||[],d]}),ze()}),n.querySelector("#alert-cancel-btn").addEventListener("click",()=>n.remove())}function wi(e,t){const i=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(i),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function $i(){const e=C.name||B.name||"Parcelle",t=Ee(C.linkedSensorIds);let i;if(V){const o=te.find(v=>v.id===V),p=P.filter(v=>v.parcelIds.includes(V)).map(v=>v.id),h=Ee(p),f=(o==null?void 0:o.name)||"Comparaison";i=[...t.map(v=>({h:`[${e}] ${v.name} (${v.unit})`,gen:v.base})),...h.map(v=>({h:`[${f}] ${v.name} (${v.unit})`,gen:v.base}))]}else i=t.map(o=>({h:`${o.name} (${o.unit})`,gen:o.base}));const n=pe()*6e4,a=$e()*6e4,s=K==="custom"&&me?me:new Date,r=K==="custom"&&ue?ue:new Date(s-n),u=Math.min(Math.ceil((s-r)/a)+1,500),m=(s-r)/Math.max(u-1,1),d=["Horodatage",...i.map(o=>o.h)].join(";"),c=Array.from({length:u},(o,p)=>[new Date(r.getTime()+p*m).toISOString().replace("T"," ").slice(0,19),...i.map(f=>f.gen())].join(";")),l=e.replace(/[^\w]/g,"_");wi([d,...c].join(`\r
`),`${l}_${K}_${new Date().toISOString().slice(0,10)}.csv`)}function he({title:e,message:t,confirmLabel:i="Confirmer",onConfirm:n}){const a=document.createElement("div");a.className="modal add-modal",a.style.zIndex="9999",a.innerHTML=`
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
    </div>`,a.querySelector(".add-modal-close").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-cancel").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-ok").addEventListener("click",()=>{a.remove(),n()}),a.addEventListener("click",s=>{s.target===a&&a.remove()}),document.body.appendChild(a)}function xi(){const e=document.getElementById("panel-actions");e.innerHTML=`
    <button class="action-btn action-btn--danger" id="archive-parcel-btn"><i class="bi bi-archive"></i> Archiver la parcelle</button>
  `,e.querySelector("#archive-parcel-btn").addEventListener("click",()=>{const t=P.filter(n=>C.linkedSensorIds.includes(n.id)),i=t.length?t.map(n=>`<strong>${n.model} ${n.serial}</strong>`).join(", "):"aucun capteur lié";he({title:"Archiver la parcelle",message:`Vous êtes sur le point d'archiver <strong>${C.name||B.name}</strong>.<br><br>Capteurs liés : ${i}.<br><br>L'archivage masque la parcelle sans supprimer les données historiques.`,confirmLabel:"Archiver",onConfirm:()=>showToast("Parcelle archivée (fonctionnalité à venir)")})})}function Ci(){if(je){je.invalidateSize();return}const e=ke.find(n=>n.id===B.orgId);if(!(e!=null&&e.lat))return;const t=C.latlngs||B.latlngs,i=L.map("parcel-mini-map",{zoomControl:!1,attributionControl:!1});if(je=i,L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(i),Array.isArray(t)&&t.length>=3){const n=L.polygon(t,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(i);i.fitBounds(n.getBounds(),{padding:[10,10]})}else i.setView([e.lat,e.lng],13),L.circleMarker([e.lat,e.lng],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(i)}function Si(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),i=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",i.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}let je=null;function Mi(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(i=>i.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.pane).classList.add("active"),t.dataset.pane==="tab-journal"&&Ne()})})}const Bi={"previsions-5j":{size:"1x1",title:"Prévisions 5 jours",icon:"bi-calendar3-week",color:"#5b8dd9",render:Ai,footer:{label:"Voir les prévisions",href:"previsions.html"}},weephyt:{size:"1x1",title:"Weephyt",icon:"bi-shield-check",color:"#2d9e5f",render:Ti,footer:{label:"Voir Weephyt",href:"#"}},cumuls:{size:"1x1",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#2E75B6",render:De},bilan:{size:"1x1",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4",render:Ri,footer:{label:"Voir les données",href:"#",tab:"donnees"}},irrigations:{size:"1x1",title:"Irrigations",icon:"bi-moisture",color:"#FF8C00",render:Re,footer:{label:"Voir les irrigations",href:`irrigation.html?plot=${H}`}},gel:{size:"1x1",title:"Suivi du risque de gel",icon:"bi-thermometer-snow",color:"#FEE7B4",render:ji,footer:{label:"Voir les prévisions",href:"previsions.html"}},dpv:{size:"1x1",title:"DPV",icon:"bi-droplet-half",color:"#5E88EC",render:Ii,footer:{label:"Voir les données",href:"#",tab:"donnees"}},thi:{size:"1x1",title:"THI",icon:"bi-heart-pulse",color:"#e0a030",render:Pi,footer:{label:"Voir les données",href:"#",tab:"donnees"}},"temp-rosee":{size:"1x1",title:"Température de rosée",icon:"bi-thermometer",color:"#72B0D8",render:Li,footer:{label:"Voir les données",href:"#",tab:"donnees"}},"temp-sol":{size:"1x1",title:"Température du sol",icon:"bi-layers",color:"#795548",render:Hi,footer:{label:"Voir les données",href:"#",tab:"donnees"}},maizy:{size:"1x1",title:"Maï'zy",icon:"bi-calendar-check",color:"#2d9e5f",render:Fi,footer:{label:"Voir Maï'zy",href:"#"}},tavelure:{size:"1x1",title:"Tavelure Pomme",icon:"bi-exclamation-triangle",color:"#e07050",render:Di,footer:{label:"Voir Tavelure",href:"#"}},"suivi-culture":{size:"1x1",title:"Suivi de culture",icon:"bi-flower2",color:"#78d8a0",render:ie},decitrait:{size:"1x1",title:"Decitrait",icon:"bi-shield",color:"#6080b0",render:ie,footer:{label:"Voir Decitrait",href:"#"}},"previsions-6h":{size:"1x1",title:"Prévisions à 6 heures",icon:"bi-clock",color:"#5b8dd9",render:ie,footer:{label:"Voir les prévisions",href:"previsions.html"}},"previsions-jour":{size:"1x1",title:"Prévisions du jour",icon:"bi-sun",color:"#f5c842",render:ie,footer:{label:"Voir les prévisions",href:"previsions.html"}},"previsions-tensio":{size:"1x1",title:"Prévisions tensiométrie",icon:"bi-graph-down",color:"#A6C157",render:ie,footer:{label:"Voir les prévisions",href:"previsions.html"}},"w-station":{size:"1x1",title:"Station météo",icon:"bi-broadcast",color:"#FBAF05",render:U("w-station"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-thygro":{size:"1x1",title:"Thermomètre-hygromètre",icon:"bi-thermometer-half",color:"#FBAF05",render:U("w-thygro"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-tsol":{size:"1x1",title:"Thermomètre de sol",icon:"bi-layers",color:"#795548",render:U("w-tsol"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-anem":{size:"1x1",title:"Anémomètre",icon:"bi-wind",color:"#616161",render:U("w-anem"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-pyrano":{size:"1x1",title:"Pyranomètre",icon:"bi-sun",color:"#CBCB0B",render:U("w-pyrano"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-lws":{size:"1x1",title:"Capteur d'humectation foliaire",icon:"bi-droplet",color:"#00887E",render:U("w-lws"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-par":{size:"1x1",title:"Capteur PAR",icon:"bi-brightness-high",color:"#4CBB17",render:U("w-par"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-capa":{size:"1x1",title:"Sonde capacitive",icon:"bi-moisture",color:"#ED9A2C",render:U("w-capa"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-tensio":{size:"1x1",title:"Tensiomètre",icon:"bi-graph-down",color:"#A6C157",render:U("w-tensio"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-ec":{size:"1x1",title:"Sonde de fertirrigation",icon:"bi-plug",color:"#2BCDDE",render:U("w-ec"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"profil-capteurs":{size:"1x1",title:"Profil capteurs",icon:"bi-bar-chart",color:"#5b8dd9",render:ie},"niveau-reservoir":{size:"1x1",title:"Niveau de réservoir (RFU)",icon:"bi-droplet-fill",color:"#0172A4",render:ie},"profil-reservoir":{size:"1x1",title:"Profil de réservoir",icon:"bi-clipboard-data",color:"#0172A4",render:ie}},wt=()=>`dash-widgets-parcel-${H}`;function fe(){try{const e=JSON.parse(localStorage.getItem(wt()));if(Array.isArray(e)&&e.length)return e}catch{}return Ei()}function ve(e){localStorage.setItem(wt(),JSON.stringify(e))}function ct(e){const t=P.filter(d=>e.includes(d.id)),i=new Set(t.map(d=>d.model)),n=[...i].some(d=>d.startsWith("CAPA-")),a=[...i].some(d=>_.includes(d)),s=new Set(["previsions-5j","weephyt","cumuls"]);(i.has("P+")||i.has("PT")||i.has("SMV")||i.has("P"))&&s.add("w-station"),i.has("TH")&&s.add("w-thygro"),i.has("T_MINI")&&s.add("w-tsol"),i.has("W")&&s.add("w-anem"),i.has("PYRANO")&&s.add("w-pyrano"),i.has("LWS")&&s.add("w-lws"),i.has("T_GEL")&&s.add("gel"),i.has("PAR")&&s.add("w-par"),n&&s.add("w-capa"),a&&s.add("w-tensio"),i.has("EC")&&s.add("w-ec"),(a||n)&&s.add("bilan"),(!!B.irrigation&&B.irrigation!=="Non irrigué"||le.some(d=>d.plotId===B.id))&&s.add("irrigations");const u=fe(),m=u.filter(d=>s.has(d));m.length!==u.length&&ve(m)}function dt(e){const t=fe(),i=a=>{t.includes(a)||t.push(a)},n=e.model;(n==="P+"||n==="PT"||n==="SMV"||n==="P")&&i("w-station"),n==="TH"&&i("w-thygro"),n==="T_MINI"&&i("w-tsol"),n==="W"&&i("w-anem"),n==="PYRANO"&&i("w-pyrano"),n==="LWS"&&i("w-lws"),n==="T_GEL"&&i("gel"),n==="PAR"&&i("w-par"),n==="EC"&&i("w-ec"),n.startsWith("CAPA-")&&(i("w-capa"),i("bilan")),_.includes(n)&&(i("w-tensio"),i("bilan")),ve(t)}function Ei(){const e=P.filter(r=>C.linkedSensorIds.includes(r.id)),t=new Set(e.map(r=>r.model)),i=[...t].some(r=>r.startsWith("CAPA-")),n=[...t].some(r=>_.includes(r)),a=["previsions-5j","weephyt","cumuls"];return(t.has("P+")||t.has("PT")||t.has("SMV")||t.has("P"))&&a.push("w-station"),t.has("TH")&&a.push("w-thygro"),t.has("T_MINI")&&a.push("w-tsol"),t.has("W")&&a.push("w-anem"),t.has("PYRANO")&&a.push("w-pyrano"),t.has("LWS")&&a.push("w-lws"),t.has("T_GEL")&&a.push("gel"),t.has("PAR")&&a.push("w-par"),i&&a.push("w-capa"),n&&a.push("w-tensio"),t.has("EC")&&a.push("w-ec"),(n||i)&&a.push("bilan"),(!!B.irrigation&&B.irrigation!=="Non irrigué"||le.some(r=>r.plotId===B.id))&&a.push("irrigations"),a}function de(){const e=document.getElementById("dash-grid");if(!e)return;const t=fe();!t.includes("irrigations")&&le.some(i=>i.plotId===B.id)&&(t.push("irrigations"),ve(t)),e.innerHTML="",t.forEach(i=>{const n=Bi[i];if(!n)return;const a=document.createElement("div");a.className=`dash-block dash-block--${n.size}`,a.dataset.id=i,a.draggable=!0;const s=n.footer?`<div class="dash-block-ft"><a class="dash-block-ft-link" href="${n.footer.href}"${n.footer.tab?` data-tab="${n.footer.tab}"`:""}>${n.footer.label} →</a></div>`:"";a.innerHTML=`
      <div class="dash-block-hd" style="color:${n.color}">
        <span style="display:flex;align-items:center;gap:6px"><i class="bi ${n.icon}"></i> ${n.title}</span>
        <button class="dash-menu-btn" data-wid="${i}" title="Options" aria-label="Options">···</button>
      </div>
      <div class="dash-block-body" id="dblock-${i}"></div>
      ${s}`,e.appendChild(a),n.render(a.querySelector(`#dblock-${i}`))}),e.querySelectorAll(".dash-menu-btn").forEach(i=>{i.addEventListener("click",n=>{var d,c,l,o;n.stopPropagation(),(d=document.querySelector(".dash-dropdown"))==null||d.remove();const a=i.dataset.wid,s=document.createElement("div");s.className="dash-dropdown";const r=a==="irrigations"?`
        <button class="dash-dd-item" data-action="set-vol">Définir le volume limité de la parcelle</button>
        <button class="dash-dd-item" data-action="set-irrig-type">Modifier le type d'irrigation</button>`:"";s.innerHTML=`${r}<button class="dash-dd-item dash-dd-remove" data-action="remove" data-wid="${a}">Retirer le widget</button>`;const u=i.getBoundingClientRect(),m=e.getBoundingClientRect();s.style.top=`${u.bottom-m.top+4}px`,s.style.right=`${m.right-u.right}px`,e.style.position="relative",e.appendChild(s),(c=s.querySelector('[data-action="remove"]'))==null||c.addEventListener("click",()=>{s.remove();const p=fe().filter(h=>h!==a);ve(p),de()}),(l=s.querySelector('[data-action="set-vol"]'))==null||l.addEventListener("click",()=>{s.remove(),ut("vol")}),(o=s.querySelector('[data-action="set-irrig-type"]'))==null||o.addEventListener("click",()=>{s.remove(),ut("type")}),setTimeout(()=>document.addEventListener("click",()=>s.remove(),{once:!0}),0)})}),e.querySelectorAll(".dash-block-ft-link[data-tab]").forEach(i=>{i.addEventListener("click",n=>{var a;n.preventDefault(),(a=document.querySelector(`.detail-tab-btn[data-pane="tab-${i.dataset.tab}"]`))==null||a.click()})}),qi(e)}function $t(e,t=380,i=90){const u=t-28-8,m=i-6-20,d=e.flatMap(g=>g.values);let c=Math.min(...d),l=Math.max(...d);c===l&&(c-=1,l+=1);const o=e[0].values.length,p=g=>(28+g/(o-1)*u).toFixed(1),h=g=>(6+m-(g-c)/(l-c)*m).toFixed(1),f=[.25,.5,.75].map(g=>{const $=(6+g*m).toFixed(1);return`<line x1="28" y1="${$}" x2="${t-8}" y2="${$}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),v=[c,(c+l)/2,l].map(g=>`<text x="25" y="${(+h(g)+3.5).toFixed(0)}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>`).join(""),b=e.map(g=>`<path d="${g.values.map((y,M)=>`${M?"L":"M"}${p(M)},${h(y)}`).join("")}" fill="none" stroke="${g.color}" stroke-width="1.8" stroke-linejoin="round"/>`).join("");return`<svg width="100%" height="${i}" viewBox="0 0 ${t} ${i}" preserveAspectRatio="none">${v}${f}${b}</svg>`}function ki(e,t,i,n){const c=(v,b)=>{const g=Math.PI+v*Math.PI,$=Math.PI+b*Math.PI,y=(80+60*Math.cos(g)).toFixed(1),M=(90+60*Math.sin(g)).toFixed(1),S=(80+60*Math.cos($)).toFixed(1),T=(90+60*Math.sin($)).toFixed(1);return`M${y},${M} A60,60,0,${b-v>.5?1:0},1,${S},${T}`},l=c(0,1),o=t.filter(v=>v.from<e).map(v=>`<path d="${c(v.from,Math.min(v.to,e))}" fill="none" stroke="${v.color}" stroke-width="12" stroke-linecap="butt"/>`).join(""),p=Math.PI+e*Math.PI,h=(80+60*Math.cos(p)).toFixed(1),f=(90+60*Math.sin(p)).toFixed(1);return`<svg width="160" height="100" viewBox="0 0 160 100">
    <path d="${l}" fill="none" stroke="var(--bdr2)" stroke-width="12" stroke-linecap="butt"/>
    ${o}
    <circle cx="${h}" cy="${f}" r="5" fill="white" stroke="var(--txt3)" stroke-width="1.5"/>
    <text x="80" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="var(--txt)">${n}</text>
    <text x="80" y="96" text-anchor="middle" font-size="9" fill="var(--txt3)">${i}</text>
  </svg>`}function Ai(e){const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],n=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],a=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],s=new Date,r=te.find(o=>o.id===H),u=ke.find(o=>o.id===(r==null?void 0:r.orgId)),m=(r==null?void 0:r.ville)||(u==null?void 0:u.ville)||"—",d=(o,p)=>{const h=new Date(s);h.setDate(h.getDate()+o);const f=Math.floor((H*7+o*3)%11/2.2);return{lbl:o===0?"Auj.":t[h.getDay()],date:`${h.getDate()} ${i[h.getMonth()]}`,tmax:w(17+p,34+p),tmin:w(4+p,15+p),pluie:f>=3?w(2,18):0,vent:w(10,35),rafales:w(25,70),wi:f}},c=[0,1,2].map(o=>d(o,0)).concat([3,4].map(o=>d(o,-1))),l=o=>`
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
    <div class="w-prev5-grid">${c.map(l).join("")}</div>`}function Ti(e){const t=new Date,i=C.crop||B.crop||"",n=[{label:"Herbicides de contact",seed:7},{label:"Fongicides",seed:3},{label:"Herbicides racinaires",seed:11},{label:"Herbicides systémiques",seed:5}],a=Array.from({length:12},(u,m)=>{const d=new Date(t);return d.setHours(d.getHours()+m),d}),s=u=>`${String(u.getHours()).padStart(2,"0")}h`,r=u=>{const m=a.map((d,c)=>(u.seed*17+c*5)%11<6);return a.map((d,c)=>`
      <div class="w-weephyt-dot-wrap" title="${s(d)} — ${m[c]?"Fenêtre OK":"Fenêtre non OK"}">
        <div class="w-weephyt-tl-dot" style="background:${m[c]?"#2d9e5f":"#e07050"}"></div>
        <div class="w-weephyt-tl-lbl">${c%3===0?s(d):""}</div>
      </div>`).join("")};e.innerHTML=`<div class="w-weephyt-wrap">
    <div class="w-weephyt-tl-legend"><span style="color:#2d9e5f">● OK</span><span style="color:#e07050">● Non OK</span></div>
    ${n.map(u=>`
      <div class="w-weephyt-family">
        <div class="w-weephyt-family-label">${u.label}</div>
        <div class="w-weephyt-timeline">${r(u)}</div>
      </div>`).join("")}
    <div class="w-weephyt-src">Via <strong>Weephyt</strong> · ${i||"—"}</div>
  </div>`}const xt=()=>`w-cumuls-state-${H}`;function Ct(){try{return JSON.parse(localStorage.getItem(xt()))||{}}catch{return{}}}function Ie(e){const t=Ct();localStorage.setItem(xt(),JSON.stringify({...t,...e}))}function De(e){const t=P.filter(d=>C.linkedSensorIds.includes(d.id)),i=new Set(t.flatMap(d=>(N[d.model]||[]).map(c=>c.id))),n=`${new Date().getFullYear()}-01-01`,a=Ct(),s=new Set(a.hidden||[]),r=a.dates||{},u=a.cfg||{},m=[{id:"etp",label:"Évapotranspiration",value:O(20,80).toFixed(1),unit:"mm",color:"#c090e0",icon:"bi-sun",show:!0},{id:"pluie",label:"Pluie",value:w(10,50),unit:"mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy",show:i.has("pluie")},{id:"djc",label:"Degrés jours",value:w(40,180),unit:"DJ",color:"#e07050",icon:"bi-thermometer-half",show:i.has("temp"),cfg:!0,cfgLabel:`${u.djMin??0}–${u.djMax??18}°C`,cfgFields:[{key:"djMin",label:"T min",def:0},{key:"djMax",label:"T max",def:18}]},{id:"hfroid",label:"Heures de froid",value:w(5,40),unit:"h",color:"#5b8dd9",icon:"bi-snow",show:i.has("temp"),cfg:!0,cfgLabel:`< ${u.hfSeuil??7.2}°C`,cfgFields:[{key:"hfSeuil",label:"Seuil",def:7.2}]},{id:"humec",label:"Humectation",value:O(2,20).toFixed(1),unit:"h",color:"#78d8a0",icon:"bi-droplet",show:i.has("humec")},{id:"enso",label:"Ensoleillement",value:O(30,90).toFixed(1),unit:"h",color:"#f5c842",icon:"bi-brightness-high",show:!0}].filter(d=>d.show&&!s.has(d.id));e.innerHTML=`<div class="w-cumuls-list">${m.map(d=>{const c=r[d.id]||n;return c.split("-").reverse().join("/"),`
      <div class="w-cumul-item">
        <i class="bi ${d.icon} w-cumul-icon" style="color:${d.color}"></i>
        <div class="w-cumul-body">
          <div class="w-cumul-lbl">${d.label}</div>
          <div class="w-cumul-val" style="color:${d.color}">${d.value}<span class="w-cumul-unit"> ${d.unit}</span></div>
          <div class="w-cumul-date">Depuis le <input type="date" class="w-cumul-date-input" data-cid="${d.id}" value="${c}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px">${d.cfg?`<button class="w-cumul-cfg" data-cid="${d.id}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px;line-height:1"><i class="bi bi-gear"></i> ${d.cfgLabel}</button>`:""}</div>
        </div>
        <button class="w-cumul-del" data-cid="${d.id}" title="Retirer">×</button>
      </div>`}).join("")}</div>`,e.querySelectorAll(".w-cumul-del").forEach(d=>{d.addEventListener("click",c=>{c.stopPropagation(),s.add(d.dataset.cid),Ie({hidden:[...s]}),De(e)})}),e.querySelectorAll(".w-cumul-date-input").forEach(d=>{d.addEventListener("change",()=>{r[d.dataset.cid]=d.value,Ie({dates:r})})}),e.querySelectorAll(".w-cumul-cfg").forEach(d=>{d.addEventListener("click",c=>{var h;c.stopPropagation();const l=d.dataset.cid,o=m.find(f=>f.id===l);if(!(o!=null&&o.cfgFields))return;(h=e.querySelector(".w-cumul-cfg-panel"))==null||h.remove();const p=document.createElement("div");p.className="w-cumul-cfg-panel",p.style.gridColumn="1 / -1",p.innerHTML=`<div class="w-cumul-cfg-title">Paramétrer ${o.label}</div>`+o.cfgFields.map(f=>`
          <label class="w-cumul-cfg-row">
            <span>${f.label} (°C)</span>
            <input type="number" class="w-cumul-cfg-inp" data-key="${f.key}" value="${u[f.key]??f.def}" step="0.1">
          </label>`).join("")+'<button class="w-cumul-cfg-ok">OK</button>',d.closest(".w-cumul-item").after(p),p.querySelector(".w-cumul-cfg-ok").addEventListener("click",()=>{p.querySelectorAll(".w-cumul-cfg-inp").forEach(f=>{u[f.dataset.key]=parseFloat(f.value)||0}),Ie({cfg:u}),p.remove(),De(e)})})})}function ji(e){if(!P.filter(l=>C.linkedSensorIds.includes(l.id)).some(l=>l.model==="T_GEL")){e.innerHTML='<div class="dash-empty">Capteur T_GEL non lié</div>';return}const i=25,n=O(0,5),a=Array.from({length:i},(l,o)=>+(n+o*.18+O(-.8,.8)).toFixed(1)),s=a.map(l=>+(l-O(1,2.5)).toFixed(1)),r=$t([{values:a,color:"#23B19B"},{values:s,color:"#5E88EC"}],380,100),u=a[i-1],m=s[i-1],d=w(5,8),c=String(Math.floor(Math.random()*60)).padStart(2,"0");e.innerHTML=`<div class="w-gel-wrap">
    <div class="w-gel-legend">
      <span style="color:#23B19B"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sèche</span>
      <span style="color:#5E88EC"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. humide</span>
      <span style="font-size:10px;color:var(--txt3)">12 dernières heures</span>
    </div>
    <div class="w-gel-chart">${r}</div>
    <div class="w-gel-cards">
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. sèche </span><span class="w-gel-card-val" style="color:#23B19B">${u}°C</span></div>
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. humide </span><span class="w-gel-card-val" style="color:#5E88EC">${m}°C</span></div>
    </div>
    <div class="w-gel-meteo">
      <div class="w-gel-meteo-row"><i class="bi bi-sunrise" style="color:#CBCB0B"></i><span>Lever du soleil</span><strong>${d}h${c}</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-cloud" style="color:#8090a0"></i><span>Couverture nuageuse</span><strong>${w(20,80)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i><span>Humidité</span><strong>${w(60,90)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-wind" style="color:#616161"></i><span>Vent moyen</span><strong>${w(5,25)} km/h</strong></div>
    </div>
  </div>`}function Ii(e){const t=P.filter(o=>C.linkedSensorIds.includes(o.id));if(!t.some(o=>{const p=N[o.model]||[];return p.some(h=>h.id==="temp")&&p.some(h=>h.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=O(18,30),a=w(40,85),r=+(.611*Math.exp(17.27*n/(n+237.3))*(1-a/100)).toFixed(2),u=Math.min(r/2,1),m=r<.4?"#5b8dd9":r<.8?"#2d9e5f":r<1.2?"#f5a030":"#e07050",d=r<.4?"Transpiration faible":r<.8?"Transpiration optimale":r<1.2?"Forte transpiration":"Stress hydrique",c=[{from:0,to:.2,color:"#5b8dd9"},{from:.2,to:.4,color:"#45b7d1"},{from:.4,to:.6,color:"#2d9e5f"},{from:.6,to:.8,color:"#a0c840"},{from:.8,to:.9,color:"#f5a030"},{from:.9,to:1,color:"#e07050"}],l=t.find(o=>{const p=N[o.model]||[];return p.some(h=>h.id==="temp")&&p.some(h=>h.id==="humidite")});e.innerHTML=`<div class="w-dpv-wrap">
    <div class="w-dpv-gauge" style="color:${m}">${ki(u,c,d,r+" kPa")}</div>
    <div class="w-dpv-details">
      <div class="w-dpv-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${n.toFixed(1)} °C</div>
      <div class="w-dpv-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${a} %</div>
    </div>
    ${l?`<div class="w-sensor-src">${ee[l.model]||l.model} · ${l.serial}</div>`:""}
  </div>`}function Pi(e){if(!P.filter(o=>C.linkedSensorIds.includes(o.id)).some(o=>{const p=N[o.model]||[];return p.some(h=>h.id==="temp")&&p.some(h=>h.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=O(20,35),a=w(45,90),s=+(n-.55*(1-a/100)*(n-14.5)).toFixed(0),r=s<68?"#2d9e5f":s<72?"#f5c842":s<79?"#f5a030":"#e07050",u=s<68?"Confort":s<72?"Stress léger":s<79?"Stress modéré":"Stress sévère",m=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],d=new Date,c=Array.from({length:3},(o,p)=>{const h=new Date(d);return h.setDate(h.getDate()+p+1),{day:m[h.getDay()],m:w(64,72),j:w(68,80),s:w(62,70)}}),l=o=>o<68?"#2d9e5f":o<72?"#f5c842":"#f5a030";e.innerHTML=`<div class="w-thi-wrap">
    <div class="w-thi-header">
      <div class="w-thi-score" style="color:${r}">
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
      ${c.map(o=>`<div class="w-thi-fc-row">
        <span class="w-thi-fc-day">${o.day}</span>
        <span class="w-thi-fc-val" style="color:${l(o.m)}">${o.m}</span>
        <span class="w-thi-fc-val" style="color:${l(o.j)}">${o.j}</span>
        <span class="w-thi-fc-val" style="color:${l(o.s)}">${o.s}</span>
      </div>`).join("")}
      <div class="w-thi-fc-legend"><span>Matin</span><span>Journée</span><span>Soir</span></div>
    </div>
  </div>`,e.querySelector(".w-thi-info-btn").addEventListener("click",o=>{o.stopPropagation();const p=e.querySelector(".w-thi-legend");if(p){p.remove();return}const h=document.createElement("div");h.className="w-thi-legend",h.innerHTML=`
      <div class="w-thi-legend-title">Échelle THI</div>
      <div class="w-thi-legend-row" style="color:#2d9e5f"><span class="w-thi-legend-range">&lt; 68</span><span>Confort</span></div>
      <div class="w-thi-legend-row" style="color:#f5c842"><span class="w-thi-legend-range">68 – 71</span><span>Stress léger</span></div>
      <div class="w-thi-legend-row" style="color:#f5a030"><span class="w-thi-legend-range">72 – 78</span><span>Stress modéré</span></div>
      <div class="w-thi-legend-row" style="color:#e07050"><span class="w-thi-legend-range">≥ 79</span><span>Stress sévère</span></div>`,e.querySelector(".w-thi-wrap").insertBefore(h,e.querySelector(".w-thi-details"))})}function Li(e){if(!P.filter(m=>C.linkedSensorIds.includes(m.id)).some(m=>{const d=N[m.model]||[];return d.some(c=>c.id==="temp")&&d.some(c=>c.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=72,a=O(14,22),s=Array.from({length:n},(m,d)=>+(a+6*Math.sin(d/24*2*Math.PI-Math.PI/2)+O(-.5,.5)).toFixed(1)),r=Array.from({length:n},(m,d)=>Math.max(30,Math.min(100,70-15*Math.sin(d/24*2*Math.PI-Math.PI/2)+O(-3,3)))),u=s.map((m,d)=>{const c=r[d]/100,l=17.27,o=237.3,p=Math.log(c)+l*m/(o+m);return+(o*p/(l-p)).toFixed(1)});e.innerHTML=`<div class="w-temprosee-wrap">
    ${$t([{values:s,color:"#FBAF05"},{values:u,color:"#72B0D8"}],380,100)}
    <div class="w-temprosee-legend">
      <span style="color:#FBAF05"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Température (${s[n-1]}°C)</span>
      <span style="color:#72B0D8"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Point de rosée (${u[n-1]}°C)</span>
      <span style="font-size:10px;color:var(--txt3)">3 derniers jours</span>
    </div>
  </div>`}function Hi(e){if(!P.filter(E=>C.linkedSensorIds.includes(E.id)).some(E=>(N[E.model]||[]).some(R=>R.id==="tsol"))){e.innerHTML='<div class="dash-empty">Capteur T. sol requis</div>';return}const n=48,a=O(14,20),s=Array.from({length:n},(E,R)=>+(a+3*Math.sin(R/24*2*Math.PI-Math.PI/2)+O(-.4,.4)).toFixed(1)),r=15,u=22,m=380,d=100,c=28,l=8,o=6,p=20,h=m-c-l,f=d-o-p,v=[...s,r,u],b=Math.min(...v)-1,g=Math.max(...v)+1,$=E=>(c+E/(n-1)*h).toFixed(1),y=E=>(o+f-(E-b)/(g-b)*f).toFixed(1),M=+y(r),S=+y(u),T=[.25,.5,.75].map(E=>{const R=(o+E*f).toFixed(1);return`<line x1="${c}" y1="${R}" x2="${m-l}" y2="${R}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),A=s.map((E,R)=>`${R?"L":"M"}${$(R)},${y(E)}`).join("");e.innerHTML=`<div class="w-tsol-wrap">
    <svg width="100%" height="${d}" viewBox="0 0 ${m} ${d}" preserveAspectRatio="none">
      ${T}
      <rect x="${c}" y="${S.toFixed(1)}" width="${h}" height="${(M-S).toFixed(1)}" fill="rgba(45,158,95,.1)"/>
      <line x1="${c}" y1="${M.toFixed(1)}" x2="${m-l}" y2="${M.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <line x1="${c}" y1="${S.toFixed(1)}" x2="${m-l}" y2="${S.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <path d="${A}" fill="none" stroke="#795548" stroke-width="2" stroke-linejoin="round"/>
      <text x="${c-3}" y="${o+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>
      <text x="${c-3}" y="${o+f+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${b.toFixed(0)}</text>
    </svg>
    <div class="w-tsol-legend">
      <span style="color:#795548"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sol · ${s[n-1]}°C</span>
      <span style="color:#2d9e5f;font-size:10px"><i class="bi bi-square-fill" style="opacity:.3"></i> Zone optimale ${r}–${u}°C</span>
      <span style="font-size:10px;color:var(--txt3)">48 dernières heures</span>
    </div>
  </div>`}function Fi(e){const t=(C.crop||B.crop||"").toLowerCase();if(!t.includes("maïs")&&!t.includes("mais")){e.innerHTML='<div class="dash-empty">Culture Maïs requise</div>';return}const i=[{name:"Farmflex 253",target:1320},{name:"DKC 3230",target:1380},{name:"Ronaldinio",target:1290},{name:"Banguy",target:1350}],n=i[H%i.length],a=B.degresJour||w(600,1200),s=Math.min(a/n.target,1),r=Math.max(0,n.target-a),u=new Date,m=Math.round(r/10),d=new Date(u);d.setDate(d.getDate()+Math.max(0,m-5));const c=new Date(u);c.setDate(c.getDate()+m+5);const l=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],o=p=>`${p.getDate()} ${l[p.getMonth()]}`;e.innerHTML=`<div class="w-maizy-wrap">
    <div class="w-maizy-title">Récolte prévisionnelle</div>
    <div class="w-maizy-dates">${o(d)} — ${o(c)}</div>
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
  </div>`}function Di(e){const t=(C.crop||B.crop||"").toLowerCase();if(!t.includes("pommier")&&!t.includes("pomme")){e.innerHTML='<div class="dash-empty">Culture Pommier requise</div>';return}const i=new Date,n=new Date(i);n.setDate(n.getDate()-w(2,8));const a=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=c=>`${c.getDate()} ${a[c.getMonth()]}`,r=w(8,24),u=w(80,280),m=u>200?"Élevé":u>120?"Modéré":"Léger",d=u>200?"#e07050":u>120?"#f5a030":"#2d9e5f";e.innerHTML=`<div class="w-tav-wrap">
    <div class="w-tav-ep">Dernier épisode · <strong>${s(n)}</strong></div>
    <div class="w-tav-stats">
      <div class="w-tav-stat"><span class="w-tav-stat-val">${r}h</span><span class="w-tav-stat-lbl">Durée</span></div>
      <div class="w-tav-stat"><span class="w-tav-stat-val">${u} DH</span><span class="w-tav-stat-lbl">Degrés-heures</span></div>
    </div>
    <div class="w-tav-risk" style="color:${d}">
      <i class="bi bi-circle-fill" style="font-size:8px;vertical-align:middle"></i>
      Risque d'infection estimé <strong>${m}</strong>
    </div>
    <a class="w-maizy-link" href="#">Afficher l'historique <i class="bi bi-arrow-right"></i></a>
  </div>`}function ie(e){e.innerHTML=`<div class="dash-empty" style="padding-top:20px">
    <i class="bi bi-hourglass" style="font-size:20px;opacity:.3;display:block;margin-bottom:6px"></i>
    Widget bientôt disponible
  </div>`}function U(e){return t=>{var d,c;const i=P.filter(l=>C.linkedSensorIds.includes(l.id)),n={"w-station":l=>["P+","PT","SMV","P"].includes(l.model),"w-thygro":l=>l.model==="TH","w-tsol":l=>l.model==="T_MINI","w-anem":l=>l.model==="W","w-pyrano":l=>l.model==="PYRANO","w-lws":l=>l.model==="LWS","w-par":l=>l.model==="PAR","w-capa":l=>l.model.startsWith("CAPA-"),"w-tensio":l=>_.includes(l.model),"w-ec":l=>l.model==="EC"},a=i.find(n[e]||(()=>!1));if(!a){t.innerHTML='<div class="dash-empty">Aucun capteur compatible lié</div>';return}const s=N[a.model]||[],u=({"w-station":()=>{const l=[];return s.some(o=>o.id==="temp")&&l.push({label:"Température",val:w(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"}),s.some(o=>o.id==="pluie")&&l.push({label:"Pluie 24h",val:w(0,14)+" mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy"}),s.some(o=>o.id==="humidite")&&l.push({label:"Humidité",val:w(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}),l},"w-thygro":()=>[{label:"Température",val:w(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"},{label:"Humidité",val:w(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}],"w-tsol":()=>[{label:"Temp. sol",val:w(8,22)+" °C",color:"#795548",icon:"bi-layers"}],"w-anem":()=>[{label:"Vitesse",val:w(0,40)+" km/h",color:"#616161",icon:"bi-wind"},{label:"Direction",val:["N","NE","E","SE","S","SO","O","NO"][w(0,7)],color:"#616161",icon:"bi-compass"}],"w-pyrano":()=>[{label:"Rayonnement",val:w(100,900)+" W/m²",color:"#CBCB0B",icon:"bi-sun"}],"w-lws":()=>[{label:"Humectation",val:O(0,12).toFixed(1)+" h/j",color:"#00887E",icon:"bi-droplet"}],"w-par":()=>[{label:"PPFD",val:w(100,2e3)+" µmol/m²/s",color:"#4CBB17",icon:"bi-brightness-high"}],"w-capa":()=>s.filter(l=>l.id.startsWith("vwc")).slice(0,3).map(l=>({label:l.name,val:w(15,45)+" %vol",color:l.color,icon:"bi-moisture"})),"w-tensio":()=>[{label:"Potentiel hydrique",val:w(10,150)+" kPa",color:"#A6C157",icon:"bi-graph-down"}],"w-ec":()=>[{label:"Conductivité",val:O(.1,3).toFixed(2)+" mS/cm",color:"#2BCDDE",icon:"bi-plug"}]}[e]||(()=>[]))();t.innerHTML=`
      <div class="w-sensor-rows">${u.map(l=>`
        <div class="w-sensor-row">
          <i class="bi ${l.icon}" style="color:${l.color};flex-shrink:0"></i>
          <span class="w-sensor-val" style="color:${l.color}">${l.val}</span>
          <span class="w-sensor-lbl">${l.label}</span>
        </div>`).join("")}</div>
      <div class="w-sensor-src">${ee[a.model]||a.model} · ${a.serial}</div>`;const m=(d=t.closest(".dash-block"))==null?void 0:d.querySelector(".dash-block-ft-link");if(m){const l=((c=document.getElementById("time-step"))==null?void 0:c.value)||"1h";m.href=`capteur-graphique.html?sensorId=${a.id}&parcelId=${H}&period=${K}&step=${l}`,m.removeAttribute("data-tab")}}}function Ri(e){const t=P.filter(v=>C.linkedSensorIds.includes(v.id)),i=t.some(v=>v.model.startsWith("CAPA-")),n=t.some(v=>_.includes(v.model)),a=B.reserveHydrique||80,s=(B.id*17+13)%41,r=Math.min(95,Math.max(20,55+s)),u=Math.round(a*r/100),m=4+s%5-2,d=Math.max(2,Math.min(6,m)),c=Math.round(d*7-u*.3),l=Math.max(0,c),o=r>60?"#2d9e5f":r>35?"#e07820":"#e04040",p=r>60?"Réserve suffisante":r>35?"Réserve à surveiller":"Réserve critique",h=r>60?"bi-check-circle-fill":r>35?"bi-exclamation-circle-fill":"bi-x-circle-fill";if(!i&&!n){e.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:var(--txt3)">
      <i class="bi bi-droplet" style="font-size:24px"></i>
      <div style="font-size:13px;text-align:center">Ajoutez une sonde capacitive ou un tensiomètre pour suivre l'état hydrique</div>
    </div>`;return}const f=i?[{label:"10 cm",pct:Math.min(100,r+s%12-5),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,r+s%8),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,r-s%10+3),color:"#a07010"}]:[{label:"Potentiel",pct:r,color:"#5b8dd9"}];e.innerHTML=`
    <div class="w-bilan-layout">
      <div class="w-bilan-status" style="color:${o}">
        <i class="bi ${h}"></i> ${p}
      </div>
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track">
          <div class="w-bilan-gauge-fill" style="width:${r}%;background:${o}"></div>
        </div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${o}">${u} mm / ${a} mm RFU (${r} %)</span>
          <span>${a} mm</span>
        </div>
      </div>
      <div class="w-bilan-horizons">
        ${f.map(v=>`
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${v.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${v.pct}%;background:${v.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${v.color}">${v.pct} %</span>
          </div>`).join("")}
      </div>
      <div class="w-bilan-footer">
        <div class="w-bilan-kpi">
          <div class="w-bilan-kpi-lbl">ETP 7 j</div>
          <div class="w-bilan-kpi-val">${(d*7).toFixed(0)} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-bilan-kpi">
          <div class="w-bilan-kpi-lbl">Dose conseillée</div>
          <div class="w-bilan-kpi-val" style="color:${l>0?"#0172A4":"var(--ok)"}">
            ${l>0?`${l} <span class="w-irrig-unit">mm</span>`:'<i class="bi bi-check2" style="font-size:14px"></i>'}
          </div>
        </div>
      </div>
    </div>`}function ut(e){const t=document.createElement("div");if(t.className="journal-form-overlay",e==="vol"){const i=we(H).volumeMaxM3??"";t.innerHTML=`
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
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const n=t.querySelector("#iwa-vol-inp").value;se(H,{volumeMaxM3:n!==""?parseInt(n):null}),t.remove(),document.querySelector("#dblock-irrigations")&&Re(document.querySelector("#dblock-irrigations"))}}else{const i=C.irrigation||"";t.innerHTML=`
      <div class="journal-form-modal">
        <div class="journal-form-title">Type d'irrigation</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="iwa-type-sel" class="journal-form-input">
            ${pt.map(n=>`<option${n===(i||"Non renseigné")?" selected":""}>${n}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const n=t.querySelector("#iwa-type-sel").value;Y({irrigation:n}),t.remove(),document.querySelector("#dblock-irrigations")&&Re(document.querySelector("#dblock-irrigations"))}}t.addEventListener("click",i=>{i.target===t&&t.remove()})}function Re(e){const t=le.filter(x=>x.plotId===B.id),i=new Date().toISOString().split("T")[0],n=t.filter(x=>x.real),a=t.filter(x=>!x.real),s=n.reduce((x,D)=>x+D.mm,0),r=a.reduce((x,D)=>x+D.mm,0);a.filter(x=>x.iso>=i).sort((x,D)=>x.iso<D.iso?-1:1)[0],n.filter(x=>x.iso<=i).sort((x,D)=>x.iso>D.iso?-1:1)[0];const u=C.irrigation||B.irrigation,m=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],d=x=>{const[,D,Z]=x.split("-");return`${+Z} ${m[+D-1]}`},c=x=>x.toLocaleString("fr-FR")+" m³",l=B.area??0,o=Math.round(s*l*10),p=Math.round(r*l*10),h=o+p,f=we(B.id).volumeMaxM3??null,v=ke.find(x=>x.id===B.orgId);St(B.orgId).volumeMax??(v==null||v.volumeMax);const b=new Set(te.filter(x=>x.orgId===B.orgId).map(x=>x.id)),g=new Map(te.map(x=>[x.id,x]));le.filter(x=>b.has(x.plotId)&&x.real).reduce((x,D)=>{var Z;return x+Math.round(D.mm*(((Z=g.get(D.plotId))==null?void 0:Z.area)??0)*10)},0),le.filter(x=>b.has(x.plotId)&&!x.real).reduce((x,D)=>{var Z;return x+Math.round(D.mm*(((Z=g.get(D.plotId))==null?void 0:Z.area)??0)*10)},0);const $=f&&l?Math.min(100,Math.round(o/f*100)):0,y=f&&l?Math.min(100-$,Math.round(p/f*100)):0,M=t.map(x=>x.iso).sort(),S=M[0]||`${new Date().getFullYear()}-04-01`,T=M[M.length-1]||`${new Date().getFullYear()}-10-10`,A=new Date(S).getTime(),E=new Date(T).getTime(),R=Math.max(E-A,1),k=x=>((new Date(x).getTime()-A)/R*100).toFixed(1),j=x=>{const[,D,Z]=x.split("-");return`${+Z}/${+D}`},F=new Date(S).getMonth()+1,q=new Date(T).getMonth()+1,z=new Date(S).getFullYear(),ne=Array.from({length:q-F+1},(x,D)=>F+D).map(x=>`<span class="w-irrig-track-mlbl" style="left:${k(`${z}-${String(x).padStart(2,"0")}-01`)}%">${m[x-1]}</span>`).join(""),I=t.map(x=>`<div class="w-irrig-dot-track" style="left:${k(x.iso)}%;background:${x.real?"#E07820":"#FFB705"}" data-tip="${d(x.iso)} · ${x.mm} mm"></div>`).join(""),W=`
    <div class="w-irrig-track-wrap">
      <div class="w-irrig-track-months">${ne}</div>
      <div class="w-irrig-track">
        <div class="w-irrig-track-line"></div>
        ${I}
      </div>
      <div class="w-irrig-track-range">
        <span>${j(S)}</span><span>${j(T)}</span>
      </div>
      <div class="w-irrig-track-legend">
        <span><span class="w-irrig-dot-sml" style="background:#E07820"></span> Effectuée</span>
        <span><span class="w-irrig-dot-sml" style="background:#FFB705"></span> Planifiée</span>
      </div>
    </div>`,Te=f&&l?`
    <div class="w-irrig-progress">
      <div class="w-irrig-prog-row">
        <div class="w-irrig-prog-lbl">
          <span>Volume limité de la parcelle :</span>
          <span style="${h>f?"color:#E05252;font-weight:600":"font-weight:600;color:var(--txt)"}">${c(h)} / ${c(f)}</span>
        </div>
        <div class="w-irrig-prog-bg"><div class="w-irrig-prog-real" style="width:${$}%"></div><div class="w-irrig-prog-plan" style="width:${y}%"></div></div>
      </div>
    </div>`:"",We=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <a class="w-irrig-act-btn w-irrig-act-btn--pri" href="irrigation.html?plot=${B.id}&action=saisie">+ Saisir une irrigation</a>
        <a class="w-irrig-act-btn w-irrig-act-btn--sec" href="irrigation.html?plot=${B.id}&action=saison">↺ Saisir une saison d'irrigation</a>
      </div>
    </div>`,_e=u&&!new Set(["Non irrigué","Non renseigné",""]).has(u),Ve=()=>{var D;const x=(D=e.closest(".dash-block"))==null?void 0:D.querySelector(".dash-block-ft-link");x&&(x.textContent=_e?"Voir les irrigations →":"Gérer les irrigations →")};if(!_e){const x=`
      <div class="w-irrig-actions">
        <div class="w-irrig-act-row">
          <a class="w-irrig-act-btn w-irrig-act-btn--pri w-irrig-act-btn--disabled" aria-disabled="true" tabindex="-1">+ Saisir une irrigation</a>
          <a class="w-irrig-act-btn w-irrig-act-btn--sec w-irrig-act-btn--disabled" aria-disabled="true" tabindex="-1">↺ Saisir une saison d'irrigation</a>
        </div>
      </div>`;e.innerHTML=`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez préciser un type d'irrigation.</p>
        </div>
        ${x}
      </div>`,Ve();return}if(!t.length){e.innerHTML=`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3)">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${We}
      </div>`;return}e.innerHTML=`
    <div class="w-irrig-layout">
      <div class="w-irrig-kpis">
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Effectuées</div>
          <div class="w-irrig-kpi-val" style="color:#E07820">${s} <span class="w-irrig-unit">mm</span></div>
          <div class="w-irrig-kpi-sub">${n.length} apport${n.length>1?"s":""}${l?` · ${c(o)}`:""}</div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Planifiées</div>
          <div class="w-irrig-kpi-val" style="color:#FFB705">${r} <span class="w-irrig-unit">mm</span></div>
          <div class="w-irrig-kpi-sub">${a.length} apport${a.length>1?"s":""}${l?` · ${c(p)}`:""}</div>
        </div>
        ${u?`<div class="w-irrig-type-pill"><i class="bi bi-droplet-fill" style="color:#0172A4"></i> ${u}</div>`:""}
      </div>
      ${Te}
      ${W}
      ${We}
    </div>`,Ve()}function qi(e){let t=null;e.querySelectorAll(".dash-block").forEach(i=>{i.addEventListener("dragstart",n=>{t=i,n.dataTransfer.effectAllowed="move",setTimeout(()=>i.classList.add("dash-drag-ghost"),0)}),i.addEventListener("dragend",()=>{i.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(n=>n.classList.remove("dash-drag-over")),t=null,ve([...e.querySelectorAll(".dash-block")].map(n=>n.dataset.id))}),i.addEventListener("dragover",n=>{n.preventDefault(),!(!t||i===t)&&(n.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),i.classList.add("dash-drag-over"))}),i.addEventListener("dragleave",()=>{i.classList.remove("dash-drag-over")}),i.addEventListener("drop",n=>{if(n.preventDefault(),!t||i===t)return;i.classList.remove("dash-drag-over");const a=[...e.querySelectorAll(".dash-block")],s=a.indexOf(t),r=a.indexOf(i);s<r?i.after(t):i.before(t)})})}
