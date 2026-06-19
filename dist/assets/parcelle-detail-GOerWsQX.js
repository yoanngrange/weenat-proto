import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as se}from"./plots-Bejh2i72.js";import{s as P}from"./sensors-CRadjF8G.js";import{o as We}from"./orgs-DnFmvGlp.js";import{m as ie}from"./members-CuDabgg3.js";import{u as ht}from"./breadcrumb-CzFWtd6d.js";import{d as ne,b as Ie}from"./store-Dh73ozZU.js";import{I as z,g as Dt,s as ft}from"./irrigations-C22Dtsoo.js";import{S as Nt,a as Pe,E as Ot,I as bt}from"./constants-D_Yu58_o.js";const gt=new URLSearchParams(window.location.search),A=parseInt(gt.get("id")),S=se.find(e=>e.id===A);function $(e,t){return Math.floor(Math.random()*(t-e+1))+e}function D(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}const Ve=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>D(.5,5),cumul:{label:"Cumul d'ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",base:()=>$(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#72B0D8",base:()=>$(2,16),isCumul:!1}],zt={id:"irrigation",name:"Irrigation",unit:"mm",color:"#FF8C00",base:()=>0,isCumul:!0,chartType:"bar",isIrrigation:!0},R={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>D(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],SMV:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>D(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)}],"CHP-15/30":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CHP-30/60":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CHP-60/90":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CAPA-30-3":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>$(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>$(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>$(15,45)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CAPA-60-6":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>$(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>$(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>$(15,45)},{id:"vwc40",name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",base:()=>$(17,43)},{id:"vwc50",name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",base:()=>$(18,42)},{id:"vwc60",name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",base:()=>$(18,42)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],T_MINI:[{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],LWS:[{id:"humec",name:"Humectation foliaire",unit:"h",color:"#00887E",base:()=>$(0,12)}],T_GEL:[{id:"tseche",name:"Temp. sèche",unit:"°C",color:"#23B19B",base:()=>$(-2,12)},{id:"thumide",name:"Temp. humide",unit:"°C",color:"#5E88EC",base:()=>$(-4,10)}],W:[{id:"_vent",name:"Vent",unit:"km/h · direction",color:"#7bc4b0",isWindComposite:!0,base:()=>$(0,40)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>D(.1,3)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>$(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>$(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}],PAR:[{id:"par",name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#c47a00",base:()=>$(0,2e3)}]},_=["CHP-15/30","CHP-30/60","CHP-60/90"],Re=[{name:"Tensiomètre (CHP)",models:new Set(["CHP-15/30","CHP-30/60","CHP-60/90"])},{name:"Sonde capacitive (CAPA)",models:new Set(["CAPA-30-3","CAPA-60-6"])},{name:"Sonde fertirrigation (EC)",models:new Set(["EC"])},{name:"Thermomètre de sol (T_MINI)",models:new Set(["T_MINI"])}];function De(e){return Re.find(t=>t.models.has(e))||null}const _t={"CAPA-30-3":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"}],"CAPA-60-6":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"},{depth:40,label:"40 cm",vwcColor:"#949494",tsolColor:"#804828"},{depth:50,label:"50 cm",vwcColor:"#870021",tsolColor:"#603818"},{depth:60,label:"60 cm",vwcColor:"#F608C2",tsolColor:"#402810"}]},Je=["CAPA-30-3","CAPA-60-6"],ee={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function Wt(e,t=null,i=null,n=null){const a=Math.max(2,Math.min(200,Math.floor(pe()/fe()))),o=Array.from({length:a},()=>$(5,35)),c=o.map(E=>Math.min(E+$(3,18),80)),l=Array.from({length:a},()=>$(0,359)),u=600,r=200,v=46,s=16,d=16,m=28,p=u-v-s,h=r-d-m,f=Math.ceil(Math.max(...c)/10)*10||50,y=E=>v+E/Math.max(a-1,1)*p,b=E=>d+h-E/f*h,w=c.map((E,j)=>`${y(j).toFixed(1)},${b(E).toFixed(1)}`).join("L"),g=[...o].reverse().map((E,j)=>`${y(a-1-j).toFixed(1)},${b(E).toFixed(1)}`).join("L"),C=`M${w}L${g}Z`,M=o.map((E,j)=>`${j?"L":"M"}${y(j).toFixed(1)},${b(E).toFixed(1)}`).join(""),B=[.25,.5,.75].map(E=>{const j=(d+h-E*h).toFixed(1);return`<line x1="${v}" y1="${j}" x2="${u-s}" y2="${j}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),I=[0,.5,1].map(E=>{const j=d+h-E*h;return`<text x="${v-4}" y="${(j+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(E*f)}</text>`}).join(""),k=`<line x1="${v}" y1="${d+h}" x2="${u-s}" y2="${d+h}" stroke="var(--bdr2)" stroke-width="1"/>`,H=Math.max(1,Math.floor(a/6));let F="";for(let E=0;E<a;E+=H){const j=(a-1-E)/Math.max(a-1,1)*pe();F+=`<text x="${y(E).toFixed(1)}" y="${(d+h+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Ce(j)}</text>`}const W=Math.max(1,Math.round(a/25)),Z=[];for(let E=0;E<a;E+=W){const j=y(E).toFixed(1),N=(d+h*.35).toFixed(1);Z.push(`<g transform="translate(${j},${N}) rotate(${l[E]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const q=document.createElement("div");q.className="chart-card",n&&(q.dataset.cardKey=n,q.draggable=!0);const be=t?`<span class="chart-card-source">${t}</span>`:"",T=i!=null?`<span class="chart-card-emission">il y a ${i} min</span>`:"";q.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
      <div class="chart-card-meta">${be}${T}</div>
    </div>
    <svg width="100%" height="${r}" viewBox="0 0 ${u} ${r}" preserveAspectRatio="none">
      ${I}${B}${k}${F}
      <path d="${C}" fill="#7bc4b0" opacity=".18"/>
      <path d="${M}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${Z.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(q)}const Vt=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let x={};function Gt(){const e=Ie(A);if(x={...S,...e},!x.linkedSensorIds){const n=P.filter(a=>a.parcelIds.includes(A)).map(a=>a.id);x.linkedSensorIds=e.linkedSensorIds??n}x.integrations||(x.integrations=[...S.integrations||[]]),x.alertes||(x.alertes=[]);const t=P.filter(n=>x.linkedSensorIds.includes(n.id)),i=Re.find(n=>t.some(a=>n.models.has(a.model)));i&&Re.some(a=>a!==i&&t.some(o=>a.models.has(o.model)))&&(x.linkedSensorIds=x.linkedSensorIds.filter(a=>{const o=P.find(l=>l.id===a);if(!o)return!0;const c=De(o.model);return!c||c===i}),ne(A,{linkedSensorIds:x.linkedSensorIds}))}function O(e){Object.assign(x,e),Object.assign(S,e),ne(A,e)}let J="j7j2",ue=null,me=null;const Yt=new Set(["pluie","temp","humidite","pothydr","etp","temp_rosee","rayonnement","_vent"]),Jt={j7j2:2};function pe(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,j7j2:10080,"30d":43200,"365d":525600};return J==="custom"&&ue&&me?Math.max(60,Math.round((me-ue)/6e4)):e[J]??10080}function fe(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function Ut(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"||e==="j7j2"?"1d":"1h"}function Xt(){const e=pe(),t=fe();return Math.max(2,Math.min(200,Math.floor(e/t)))}function Kt(){const e=Jt[J]||0;if(!e)return 0;const t=fe();return Math.max(1,Math.round(e*1440/t))}const Ue={Cumuls:"cumuls","Maï'zy":"maizy","Suivi de culture":"suivi-culture",Weephyt:"weephyt",Decitrait:"decitrait","Tavelure Pomme":"tavelure",DPV:"dpv",THI:"thi","Température de rosée":"temp-rosee","Température du sol":"temp-sol","Rayonnement solaire":"w-pyrano",Gel:"gel","Prévisions à 5 jours":"previsions-5j","Prévisions à 6 heures":"previsions-6h","Prévisions du jour":"previsions-jour","Prévisions de tensiométrie":"previsions-tensio",Anémomètre:"w-anem","Capteur d'humectation foliaire":"w-lws","Capteur PAR":"w-par",Pyranomètre:"w-pyrano","Station météo":"w-station","Station Météo Virtuelle":"w-station","Thermomètre de sol":"w-tsol","Thermomètre-Hygromètre":"w-thygro","Bilan hydrique":"bilan",Irrigations:"irrigations","Sonde capacitive":"w-capa",Tensiomètre:"w-tensio","Sonde de fertirrigation":"w-ec","Profil capteurs":"profil-capteurs","Niveau de réservoir en eau utilisable":"niveau-reservoir","Profil de niveau de réservoir":"profil-reservoir"},Zt=[{title:"Cumuls",items:["Cumuls"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Weephyt","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire","Gel"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Irrigation",items:["Bilan hydrique","Irrigations","Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]}];function Qt(){const e=P.filter(r=>x.linkedSensorIds.includes(r.id)),t=new Set(e.map(r=>r.model)),i=(x.crop||S.crop||"").toLowerCase(),n=ve(),a=e.some(r=>{const v=R[r.model]||[];return v.some(s=>s.id==="temp")&&v.some(s=>s.id==="humidite")}),o=e.some(r=>(R[r.model]||[]).some(v=>v.id==="tsol")),c=e.some(r=>(R[r.model]||[]).some(v=>v.cumul)),l=r=>Ue[r]?r==="Gel"?t.has("T_GEL"):r==="Maï'zy"?i.includes("maïs")||i.includes("mais"):r==="Tavelure Pomme"?i.includes("pommier"):r==="Station météo"?t.has("P+")||t.has("PT")||t.has("P"):r==="Station Météo Virtuelle"?t.has("SMV"):r==="Thermomètre-Hygromètre"?t.has("TH"):r==="Thermomètre de sol"?t.has("T_MINI")||o:r==="Anémomètre"?t.has("W"):r==="Pyranomètre"||r==="Rayonnement solaire"?t.has("PYRANO"):r==="Capteur d'humectation foliaire"?t.has("LWS"):r==="Capteur PAR"?t.has("PAR"):r==="Bilan hydrique"?[...t].some(s=>s.startsWith("CAPA-"))||[...t].some(s=>_.includes(s)):r==="Irrigations"?!0:r==="Sonde capacitive"?[...t].some(s=>s.startsWith("CAPA-")):r==="Tensiomètre"?[...t].some(s=>_.includes(s)):r==="Sonde de fertirrigation"?t.has("EC"):r==="DPV"||r==="THI"||r==="Température de rosée"?a:r==="Température du sol"?o:r==="Cumuls"?c:!0:!0,u=document.createElement("div");u.className="modal add-modal",u.innerHTML=`
    <div class="add-modal-content" style="max-width:520px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter un widget</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      ${Zt.map(r=>{const v=r.items.filter(l);return v.length?`
        <div class="add-modal-section">
          <div class="add-modal-section-label">${r.title}</div>
          <div class="wcat-list">
            ${v.map(s=>{const d=Ue[s],m=d&&n.includes(d);return`
              <div class="wcat-item">
                <span>${s}</span>
                ${m?'<span class="wcat-already"><i class="bi bi-check2"></i> Ajouté</span>':`<button class="wcat-add-btn" type="button" data-wid="${d}"><i class="bi bi-plus-circle"></i> Ajouter</button>`}
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")}
    </div>`,u.addEventListener("click",r=>{r.target===u&&u.remove()}),u.querySelector(".add-modal-close").addEventListener("click",()=>u.remove()),u.querySelectorAll(".wcat-add-btn").forEach(r=>{r.addEventListener("click",()=>{const v=r.dataset.wid;if(!v)return;const s=ve();s.includes(v)||(s.push(v),he(s)),u.remove(),de()})}),document.body.appendChild(u)}const Ee=`weenat-journal-${A}`,ae=new Date().toISOString().slice(0,10);function ei(e,t){const i=new Date(e);return i.setDate(i.getDate()+t),i.toISOString().slice(0,10)}function Ne(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,i,n]=e.split("-");return`${parseInt(n)} ${t[parseInt(i)-1]} ${e.split("-")[0]}`}const ti=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"];function ii(){const e=S,t=[],i=(l,u,r="Système")=>t.push({id:"auto-"+l+u.slice(0,8),type:"modification",date:l,texte:u,auteur:r}),n=e.orgId===1,a=n?"Jean-Michel Dutilleul":"Thomas Bertrand",o=n?"Alexandre Bernard":"Sophie Dubois";return i("2024-01-01","Création de la parcelle",a),e.crop&&i("2024-03-15",`Culture définie : ${e.crop}`,a),e.texture&&i("2024-03-15",`Texture de sol définie : ${e.texture}`,a),e.irrigation&&i("2024-04-01",`Type d'irrigation : ${e.irrigation}`,a),P.filter(l=>x.linkedSensorIds.includes(l.id)).forEach(l=>i("2024-06-10",`Liaison capteur : ${ee[l.model]||l.model} · ${l.serial}`,o)),i("2026-03-01","Début de cycle cultural 2026",a),t}const ni=new Set(["culture","stade","irrigation","cycle"]);function Xe(e,t){const i=S.crop||"Blé tendre";return[{id:17434656e5,type:"cycle",date:"2026-03-01",auteur:e,action:"début",annee:"2026",texte:"Mise en place de la saison 2026"},{id:17438976e5,type:"culture",date:"2026-03-06",auteur:e,action:"modification",culture:i,texte:"Culture confirmée pour la saison 2026"},{id:17443296e5,type:"stade",date:"2026-04-11",auteur:e,stade:"BBCH 21 — Tallage actif",culture:i,texte:""},{id:17447616e5,type:"irrigation",date:"2026-04-16",auteur:e,volume:25,unite:"mm",methode:"Aspersion",texte:"Déclenchement suite alerte potentiel hydrique"},{id:17453664e5,type:"stade",date:"2026-04-23",auteur:t,stade:"BBCH 30 — Début montaison",culture:i,texte:""},{id:17457984e5,type:"irrigation",date:"2026-04-28",auteur:e,volume:30,unite:"mm",methode:"Aspersion",texte:""},{id:17460576e5,type:"stade",date:"2026-05-01",auteur:t,stade:"BBCH 45 — Gonflement épis",culture:i,texte:"Développement homogène sur la parcelle"}]}function we(){const e=S.orgId===1,t=e?"Jean-Michel Dutilleul":"Thomas Bertrand",i=e?"Marie Martin":"Sophie Dubois";try{const a=localStorage.getItem(Ee);if(a){const o=JSON.parse(a);if(Array.isArray(o)){if(!o.some(l=>ni.has(l.type))){const l=[...Xe(t,i),...o];return localStorage.setItem(Ee,JSON.stringify(l)),l}return o}}}catch{}const n=[{id:17469216e5,type:"note",category:"Observation générale",date:"2026-05-11",auteur:t,texte:"Observation de quelques pucerons sur les feuilles basses. À surveiller."},{id:17473536e5,type:"traitement",date:"2026-05-16",auteur:i,texte:"Application conforme aux conditions météo. Vent < 2 m/s.",produit:"Karate Zeon 10 CS",dose:"0,1 L/ha",cible:"Pucerons"},{id:17477856e5,type:"note",category:"Observation générale",date:"2026-05-21",auteur:t,texte:"Suite traitement du 16/05 : peu de pucerons visibles, situation sous contrôle."},...Xe(t,i)];return localStorage.setItem(Ee,JSON.stringify(n)),n}function yt(e){localStorage.setItem(Ee,JSON.stringify(e))}function Ge(){const e=document.getElementById("journal-container");if(!e)return;const t=we(),i=ii(),n=[...t,...i].sort((s,d)=>d.date.localeCompare(s.date)),a=s=>{const[d,m,p]=s.split("-");return`${p}/${m}/${d}`},o={note:{label:"Note",icon:"bi-pencil",dotCls:"note",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotCls:"traitement",badgeCls:"traitement"},modification:{label:"Modification",icon:"bi-pencil-square",dotCls:"modification",badgeCls:"modification"},culture:{label:"Culture",icon:"bi-flower1",dotCls:"culture",badgeCls:"culture"},cycle:{label:"Cycle cultural",icon:"bi-arrow-repeat",dotCls:"cycle",badgeCls:"cycle"},stade:{label:"Stade phéno.",icon:"bi-calendar2-check",dotCls:"stade",badgeCls:"stade"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotCls:"irrigation",badgeCls:"irrigation"}};let l=`
    <div class="journal-add-bar">
      <div class="jrn-add-wrap" id="jrn-add-wrap">
        <button class="btn-primary btn-sm" id="jrn-add-btn" style="gap:6px">
          <i class="bi bi-plus-lg"></i> Ajouter
          <i class="bi bi-chevron-down" style="font-size:10px;margin-left:1px"></i>
        </button>
        <div class="jrn-add-menu" id="jrn-add-menu">
          ${[{type:"note",label:"Note",icon:"bi-pencil-square"},{type:"traitement",label:"Traitement phytosanitaire",icon:"bi-eyedropper"},null,{type:"culture",label:"Culture",icon:"bi-flower1"},{type:"stade",label:"Stade phénologique",icon:"bi-calendar2-check"},{type:"irrigation",label:"Irrigation",icon:"bi-droplet-half"},{type:"cycle",label:"Cycle cultural",icon:"bi-arrow-repeat"}].map(s=>s===null?'<div class="jrn-add-sep"></div>':`<button class="jrn-add-item" data-type="${s.type}">
                <i class="bi ${s.icon}"></i> ${s.label}
               </button>`).join("")}
        </div>
      </div>
    </div>
    <div class="journal-timeline">
  `;n.length===0?l+='<div class="journal-empty">Aucune entrée dans le journal.</div>':n.forEach(s=>{var h;const d=o[s.type]||o.note,m=s.type==="modification",p=s.type==="traitement";l+=`
        <div class="jrn-entry" data-id="${s.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot jrn-dot--${d.dotCls}"><i class="bi ${d.icon}"></i></div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${a(s.date)}</span>
              <span class="journal-type-badge journal-type-badge--${d.badgeCls}">
                ${d.label}
              </span>
              ${s.auteur?`<span class="jrn-entry-auteur">${s.auteur}</span>`:""}
              ${m?"":`<button class="jrn-entry-delete" data-id="${s.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>`}
            </div>
            ${s.texte?`<div class="jrn-entry-texte">${s.texte}</div>`:""}
            ${p&&(s.produit||s.dose||s.cible)?`
              <div class="jrn-entry-meta">
                ${s.produit?`<span class="jrn-entry-meta-chip"><i class="bi bi-flask"></i>${s.produit}</span>`:""}
                ${s.dose?`<span class="jrn-entry-meta-chip"><i class="bi bi-droplet"></i>${s.dose}</span>`:""}
                ${s.cible?`<span class="jrn-entry-meta-chip"><i class="bi bi-bullseye"></i>${s.cible}</span>`:""}
              </div>`:""}
            ${s.type==="culture"?`<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-tag"></i>${s.action==="ajout"?"Ajout":s.action==="retrait"?"Retrait":"Modification"}</span>
                ${s.culture?`<span class="jrn-entry-meta-chip"><i class="bi bi-flower1"></i>${s.culture}</span>`:""}
              </div>`:""}
            ${s.type==="stade"?`<div class="jrn-entry-meta">
                ${s.stade?`<span class="jrn-entry-meta-chip"><i class="bi bi-diagram-3"></i>${s.stade}</span>`:""}
                ${s.culture?`<span class="jrn-entry-meta-chip">${s.culture}</span>`:""}
              </div>`:""}
            ${s.type==="irrigation"?`<div class="jrn-entry-meta">
                ${s.volume?`<span class="jrn-entry-meta-chip"><i class="bi bi-droplet-fill"></i>${s.volume} ${s.unite||"mm"}</span>`:""}
                ${s.methode?`<span class="jrn-entry-meta-chip"><i class="bi bi-water"></i>${s.methode}</span>`:""}
              </div>`:""}
            ${s.type==="cycle"?`<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-arrow-right-circle"></i>${s.action==="fin"?"Fin de cycle":"Début de cycle"}</span>
                ${s.annee?`<span class="jrn-entry-meta-chip"><i class="bi bi-calendar3"></i>${s.annee}</span>`:""}
              </div>`:""}
            ${(h=s.imageIds)!=null&&h.length?`<div class="jrn-entry-photos-row" data-entry-id="${s.id}"></div>`:""}
          </div>
        </div>
      `}),l+="</div>",e.innerHTML=l;const u=e.querySelector("#jrn-add-btn"),r=e.querySelector("#jrn-add-menu");u==null||u.addEventListener("click",s=>{s.stopPropagation(),r.classList.toggle("open")}),document.addEventListener("click",()=>r==null?void 0:r.classList.remove("open")),e.querySelectorAll(".jrn-add-item").forEach(s=>{s.addEventListener("click",()=>{r.classList.remove("open"),ai(s.dataset.type)})}),e.querySelectorAll(".jrn-entry-delete").forEach(s=>{s.addEventListener("click",()=>{var p,h;const d=parseInt(s.dataset.id),m=we().find(f=>f.id===d);(p=m==null?void 0:m.imageIds)!=null&&p.length&&((h=window.ImageStore)==null||h.remove(m.imageIds)),yt(we().filter(f=>f.id!==d)),Ge()})});const v=window.ImageStore;v&&e.querySelectorAll(".jrn-entry-photos-row[data-entry-id]").forEach(async s=>{var m;const d=t.find(p=>String(p.id)===s.dataset.entryId);if((m=d==null?void 0:d.imageIds)!=null&&m.length)for(const p of d.imageIds)try{const h=await v.get(p);if(!h)continue;const f=document.createElement("img");f.className="jrn-entry-photo",f.src=h,f.alt="",f.addEventListener("click",()=>{var y;return(y=window.openLightbox)==null?void 0:y.call(window,h)}),s.appendChild(f)}catch{}})}function ai(e){const t={note:"Ajouter une note",traitement:"Ajouter un traitement",culture:"Culture — événement",stade:"Stade phénologique",irrigation:"Irrigation",cycle:"Cycle cultural"},i=S.crop||"",n={note:`
      <div class="journal-form-row">
        <label class="journal-form-label">Catégorie</label>
        <select id="jrn-f-category" class="journal-form-input">
          ${ti.map(l=>`<option>${l}</option>`).join("")}
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
      </div>`},a=e==="note"||e==="traitement",o=document.createElement("div");o.className="modal add-modal",o.innerHTML=`
    <div class="add-modal-content" style="max-width:480px">
      <div class="add-modal-header">
        <span class="add-modal-title">${t[e]||"Ajouter une entrée"}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="jrn-f-date" class="journal-form-input" value="${ae}">
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
    </div>`,o.querySelector(".add-modal-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",l=>{l.target===o&&o.remove()});const c=[];a&&window.ImageStore&&window.setupImgUpload(o.querySelector("#jrn-f-img-input"),o.querySelector("#jrn-f-img-btn"),o.querySelector("#jrn-f-previews"),o.querySelector("#jrn-f-img-err"),c),o.querySelector("#jrn-f-save").addEventListener("click",async()=>{var d,m;const l=o.querySelector("#jrn-f-date").value||ae,u=((d=o.querySelector("#jrn-f-texte"))==null?void 0:d.value.trim())||"",r=S.orgId===1?"Jean-Michel Dutilleul":"Thomas Bertrand",v={id:Date.now(),type:e,date:l,texte:u,auteur:r};if(e==="note")v.category=((m=o.querySelector("#jrn-f-category"))==null?void 0:m.value)||"";else if(e==="traitement")v.produit=o.querySelector("#jrn-f-produit").value.trim(),v.dose=o.querySelector("#jrn-f-dose").value.trim(),v.cible=o.querySelector("#jrn-f-cible").value.trim();else if(e==="culture")v.action=o.querySelector("#jrn-f-action").value,v.culture=o.querySelector("#jrn-f-culture").value.trim();else if(e==="stade")v.stade=o.querySelector("#jrn-f-stade").value.trim(),v.culture=o.querySelector("#jrn-f-culture").value.trim();else if(e==="irrigation"){const p=parseFloat(o.querySelector("#jrn-f-volume").value);v.volume=isNaN(p)?0:p,v.unite=o.querySelector("#jrn-f-unite").value,v.methode=o.querySelector("#jrn-f-methode").value}else e==="cycle"&&(v.action=o.querySelector("#jrn-f-action").value,v.annee=o.querySelector("#jrn-f-annee").value.trim());if(u||v.produit||v.culture||v.stade||v.volume||v.annee||c.length){if(window.ImageStore&&c.length){v.imageIds=[];for(const p of c){const h=`img_${v.id}_${v.imageIds.length}`;await window.ImageStore.store(h,p),v.imageIds.push(h)}}yt([v,...we()]),o.remove(),Ge()}}),document.body.appendChild(o)}function si(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const i=se.filter(o=>o.orgId===S.orgId).sort((o,c)=>o.name.localeCompare(c.name,"fr")),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const a=document.createElement("select");a.className="breadcrumb-nav-select",a.innerHTML=i.map(o=>`<option value="${o.id}"${o.id===A?" selected":""}>${o.name}</option>`).join(""),a.addEventListener("change",()=>{window.location.href=`parcelle-detail.html?id=${a.value}`}),n.appendChild(a),t.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var i,n,a;if(!S){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}Gt(),ht(x.name||S.name,{label:"Parcelles",href:"parcelles.html"}),si(),U(),Pi(),_i(),Wi(),Ei(),Li(),Vi();const e=gt.get("tab");e&&((i=document.querySelector(`.detail-tab-btn[data-pane="tab-${e}"]`))==null||i.click()),ji(),Ii(),de(),(n=document.getElementById("parcel-add-widget-btn"))==null||n.addEventListener("click",Qt),(a=document.getElementById("btn-export-csv"))==null||a.addEventListener("click",zi),document.addEventListener("click",o=>{const c=o.target.closest(".chart-cumul-add-btn");if(!c)return;o.stopPropagation();const l=c.dataset.cumulLabel,u=c.dataset.cumulVal;if(!confirm(`Ajouter "${l} : ${u}" au tableau de bord ?`))return;const r=document.createElement("div");r.textContent="Cumul ajouté au tableau de bord",Object.assign(r.style,{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",background:"rgba(28,28,30,.9)",color:"#fff",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",zIndex:"9999",pointerEvents:"none"}),document.body.appendChild(r),setTimeout(()=>r.remove(),2500)});const t=document.getElementById("sidebar");t&&new MutationObserver(()=>le()).observe(t,{attributes:!0,attributeFilter:["data-role"]})});let ke="capteur",G=null;const wt=`charts-order-parcel-${A}`;function oi(){try{return JSON.parse(localStorage.getItem(wt)||"null")}catch{return null}}function ri(e){localStorage.setItem(wt,JSON.stringify(e))}function li(e){let t=null;e.addEventListener("dragstart",i=>{const n=i.target.closest(".chart-card[data-card-key]");n&&(t=n,n.classList.add("chart-dragging"),i.dataTransfer.effectAllowed="move")}),e.addEventListener("dragend",()=>{t==null||t.classList.remove("chart-dragging"),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over")),t=null;const i=[...e.querySelectorAll(".chart-card[data-card-key]")].map(n=>n.dataset.cardKey);ri(i)}),e.addEventListener("dragover",i=>{if(i.preventDefault(),!t)return;const n=i.target.closest(".chart-card[data-card-key]");if(!n||n===t)return;e.querySelectorAll(".chart-card").forEach(o=>o.classList.remove("chart-drag-over")),n.classList.add("chart-drag-over");const a=n.getBoundingClientRect().top+n.getBoundingClientRect().height/2;e.insertBefore(t,i.clientY<a?n:n.nextSibling)}),e.addEventListener("drop",i=>{i.preventDefault(),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over"))})}function ci(e,t){const i=P.filter(s=>t.includes(s.id)),n=i.filter(s=>_.includes(s.model)),a=i.filter(s=>Je.includes(s.model)),o=i.filter(s=>!_.includes(s.model)&&!Je.includes(s.model)),c=fe(),l=new Set;i.forEach(s=>(R[s.model]||[]).forEach(d=>l.add(d.id)));const u=[];if(o.forEach(s=>{const d=R[s.model];if(!d)return;const m=`${s.model} · ${s.serial}`,p=Math.floor(5+Math.random()*55);d.forEach(h=>{if(h.isWindComposite){u.push({key:`wind-${s.id}`,type:"wind",sensor:s,source:m,emissionMins:p});return}u.push({key:`s${s.id}-${h.id}`,type:"metric",metric:h,source:m,emissionMins:p,sensorId:s.id})})}),n.length>0){const s=`Tensiomètres · ${n.length} capteur${n.length>1?"s":""}`,d=Math.floor(5+Math.random()*55);["pothydr","tsol"].forEach(m=>{u.push({key:`tensio-${m}`,type:"tensio",metricId:m,source:s,emissionMins:d,tensioSensors:n})})}a.forEach(s=>{const d=_t[s.model]||[],m=`${ee[s.model]||s.model} · ${s.serial}`,p=Math.floor(5+Math.random()*55);d.length>0&&(u.push({key:`capa-vwc-${s.id}`,type:"capa-vwc",sensor:s,horizons:d,source:m,emissionMins:p}),u.push({key:`capa-tsol-${s.id}`,type:"capa-tsol",sensor:s,horizons:d,source:m,emissionMins:p}))}),Ve.filter(s=>!l.has(s.id)).forEach(s=>u.push({key:`always-${s.id}`,type:"metric",metric:s,source:"parcelle",emissionMins:null,unavailable:c<60})),(!!S.irrigation&&S.irrigation!=="Non irrigué"||z.some(s=>s.plotId===A))&&u.push({key:"always-irrigation",type:"metric",metric:zt,source:"parcelle",emissionMins:null});const v=oi();if(v!=null&&v.length){const s=new Map(v.map((d,m)=>[d,m]));u.sort((d,m)=>(s.has(d.key)?s.get(d.key):1/0)-(s.has(m.key)?s.get(m.key):1/0))}u.forEach(s=>{s.type==="metric"?Oe(e,s.metric,s.source,s.emissionMins,s.key,s.unavailable,s.sensorId):s.type==="wind"?Wt(e,s.source,s.emissionMins,s.key):s.type==="tensio"?mi(e,s.metricId,s.tensioSensors,s.source,s.emissionMins,s.key):s.type==="capa-vwc"?pi(e,s.horizons,s.source,s.emissionMins,s.key):s.type==="capa-tsol"&&vi(e,s.horizons,s.source,s.emissionMins,s.key)}),li(e)}function je(e){const t=P.filter(a=>e.includes(a.id)),i=new Set,n=[];return t.forEach(a=>{(R[a.model]||[]).forEach(o=>{i.has(o.id)||(i.add(o.id),n.push(o))})}),Ve.forEach(a=>{i.has(a.id)||(i.add(a.id),n.push(a))}),n}function U(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",G){e.className="compare-rows";const i=se.find(p=>p.id===G),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${x.name||S.name}</span></div>
      <div class="compare-col-header">
        <span>${(i==null?void 0:i.name)||"Parcelle"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{G=null,Te(),U()});const a=je(x.linkedSensorIds),o=Ie(G),c=(o==null?void 0:o.linkedSensorIds)??P.filter(p=>p.parcelIds.includes(G)).map(p=>p.id),l=je(c),u=a.map(p=>p.id),r=l.map(p=>p.id),v=u.filter(p=>r.includes(p)),s=u.filter(p=>!r.includes(p)),d=r.filter(p=>!u.includes(p));[...v,...s,...d].forEach(p=>{const h=a.find(g=>g.id===p),f=l.find(g=>g.id===p),y=document.createElement("div");y.className="compare-row";const b=document.createElement("div");h?Oe(b,h):b.innerHTML='<div class="compare-chart-empty">—</div>';const w=document.createElement("div");f?Oe(w,f):w.innerHTML='<div class="compare-chart-empty">—</div>',y.appendChild(b),y.appendChild(w),e.appendChild(y)})}else e.className="charts-stack",ci(e,x.linkedSensorIds);wi()}const ye=["#5b8dd9","#e07050","#4ecdc4","#f5c842","#c090e0","#78d8a0"];function di(e){const t=e.depth||30;return[{depth:t,label:`${t} cm`,sensor:e}]}function ui(e){if(ke==="capteur")return e.map((i,n)=>({label:i.serial,color:ye[n%ye.length],depth:i.depth||30,sensor:i}));const t=new Map;return e.forEach(i=>di(i).forEach(n=>{t.has(n.depth)||t.set(n.depth,n)})),[...t.values()].sort((i,n)=>i.depth-n.depth).map((i,n)=>({label:i.label,color:ye[n%ye.length],depth:i.depth,sensor:i.sensor}))}function mi(e,t,i,n=null,a=null,o=null){var p;const l={pothydr:{name:"Potentiel hydrique",unit:"kPa"},tsol:{name:"Température du sol",unit:"°C"}}[t],u=ui(i),r=document.createElement("div");r.className="chart-card tensio-multi-card",r.dataset.tensioMetric=t,r.dataset.tensioCurves=JSON.stringify(u.map(h=>({depth:h.depth,color:h.color}))),o&&(r.dataset.cardKey=o,r.draggable=!0);const v=u.map(h=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${h.color};vertical-align:middle;border-radius:1px"></span>
      ${h.label}
    </span>`).join(""),s=n?`<span class="chart-card-source">${n}</span>`:"",d=a!=null?`<span class="chart-card-emission">il y a ${a} min</span>`:"",m=`
    <div class="chart-tensio-toggle">
      <button class="btn-secondary btn-sm tensio-toggle-btn${ke==="capteur"?" active":""}" data-mode="capteur">Par capteur</button>
      <button class="btn-secondary btn-sm tensio-toggle-btn${ke==="horizon"?" active":""}" data-mode="horizon">Par horizon</button>
    </div>`;r.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((p=u[0])==null?void 0:p.color)||ye[0]}">${l.name}</span>
      <span class="chart-card-unit">${l.unit}</span>
      ${s}${d}
    </div>
    ${m}
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${v}</div>
    <svg class="chart-svg tensio-svg" data-metric="${t}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,r.querySelectorAll(".tensio-toggle-btn").forEach(h=>{h.addEventListener("click",()=>{ke=h.dataset.mode,U()})}),e.appendChild(r)}function $t(e,t,i,n,a,o,c,l){var v;const u=document.createElement("div");u.className=`chart-card ${c}-multi-card`,u.dataset[c+"Curves"]=JSON.stringify(t.map(s=>({depth:s.depth,color:s[i]}))),l&&(u.dataset.cardKey=l,u.draggable=!0);const r=t.map(s=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${s[i]};vertical-align:middle;border-radius:1px"></span>
      ${s.label}
    </span>`).join("");return u.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((v=t[0])==null?void 0:v[i])||"#46DA82"}">${n}</span>
      <span class="chart-card-unit">${a}</span>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${r}</div>
    <svg class="chart-svg ${o}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,e.appendChild(u),u}function pi(e,t,i=null,n=null,a=null){$t(e,t,"vwcColor","Teneur en eau du sol","%vol","capa-svg","capa",a)}function vi(e,t,i=null,n=null,a=null){$t(e,t,"tsolColor","Température du sol par horizon","°C","capa-tsol-svg","capaT",a)}function Oe(e,t,i=null,n=null,a=null,o=!1,c=null){var p;const l=t.base(),u=document.createElement("div");u.className="chart-card",u.dataset.base=l,u.dataset.color=t.color,u.dataset.cumul=t.isCumul?"1":"",u.dataset.chartType=t.chartType||"line",u.dataset.metricId=t.id,u.dataset.metricName=t.name,u.dataset.metricUnit=t.unit,t.isIrrigation&&(u.dataset.isIrrigation="1"),a&&(u.dataset.cardKey=a,u.draggable=!0);const r=t.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label} : <strong>${et(t)} ${t.cumul.unit}</strong></span><button class="chart-cumul-add-btn" data-cumul-label="${t.cumul.label}" data-cumul-val="${et(t)} ${t.cumul.unit}" title="Ajouter au tableau de bord"><i class="bi bi-house"></i></button></div>`:"",v=i?`<span class="chart-card-source">${i}</span>`:"",s=n!=null?`<span class="chart-card-emission">il y a ${n} min</span>`:"";let d="";if(c){const h=((p=document.getElementById("time-step"))==null?void 0:p.value)||"1h";d=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${c}&metricId=${t.id}&parcelId=${A}&period=${J}&step=${h}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`}const m=o?'<div class="chart-unavailable">Données indisponibles pour ce pas de temps</div>':'<svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>';u.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${v}${s}${d}
    </div>
    ${m}
    ${r}
  `,e.appendChild(u)}let ge=null;function hi(){return ge||(ge=document.createElement("div"),ge.className="chart-tooltip",document.body.appendChild(ge)),ge}function fi(e,t){return t==="temp"||t==="temperature"?["#6eb4d4","#e07050"]:t==="tseche"||t==="thumide"?["#6eb4d4","#e07050"]:t==="temp_rosee"?["#a0d0f0","#4090c0"]:[bi(e,.55),e]}function bi(e,t){const i=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),o=Math.round(i+(255-i)*t),c=Math.round(n+(255-n)*t),l=Math.round(a+(255-a)*t);return`#${o.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`}function Ae(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let i=0;i<e.length-1;i++){const n=e[Math.max(i-1,0)],a=e[i],o=e[i+1],c=e[Math.min(i+2,e.length-1)],l=a.x+(o.x-n.x)/6,u=a.y+(o.y-n.y)/6,r=o.x-(c.x-a.x)/6,v=o.y-(c.y-a.y)/6;t+=` C${l.toFixed(1)},${u.toFixed(1)} ${r.toFixed(1)},${v.toFixed(1)} ${o.x.toFixed(1)},${o.y.toFixed(1)}`}return t}function Ce(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function Ke(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function gi(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function Ze(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function yi(e){const t=Math.floor((Date.now()-e*6e4)/864e5),i=Math.sin(t*12.9898+78.233)*43758.5453;return i-Math.floor(i)}function ce(e,t,i,n=.15){const a=Ke(i),o=Ze(a),c=gi(a),l=yi(i),u=()=>1+(Math.random()-.5)*2*n;switch(e){case"temp":{const r=.6+l*.8;return(t-6+o*12*r)*u()}case"tseche":case"thumide":{const r=.6+l*.8;return(t-4+o*8*r)*u()}case"temp_rosee":{const r=.6+l*.8,v=t-6+o*12*r;return Math.min(v-1,t-8+o*6*r)*u()}case"tsol":{const r=Ke(i+120),v=.7+l*.6;return(t-3+Ze(r)*6*v)*u()}case"humidite":{const r=1.4-l*.8;return Math.min(100,Math.max(20,(t+(1-o)*25*r-o*15)*u()))}case"rayonnement":{const r=.4+l*.9;return Math.max(0,c*t*1.3*r*u())}case"etp":{const r=.4+l*.9;return Math.max(0,c*t*1.5*r*u())}case"humec":{const r=1.4-l*.8;return Math.max(0,t*Math.max(0,.8-c*1.2)*r*u())}case"pluie":{const r=.06+(1-l)*.22;return Math.random()<r?t*Math.random()*2.5*(1.3-l):0}case"vent":case"rafales":{const r=.5+l;return Math.max(0,t*(.6+c*.8)*r*u())}default:return Math.max(0,t*u())}}function wi(){const e=Xt(),t=fe(),i=Kt();P.filter(a=>x.linkedSensorIds.includes(a.id)).filter(a=>_.includes(a.model)),document.querySelectorAll(".chart-card").forEach(a=>{if(a.classList.contains("tensio-multi-card")){const m=a.querySelector(".tensio-svg"),p=JSON.parse(a.dataset.tensioCurves||"[]");m&&p.length>0&&$i(m,p,e,t);return}if(a.classList.contains("capa-multi-card")){const m=a.querySelector(".capa-svg"),p=JSON.parse(a.dataset.capaCurves||"[]");m&&p.length>0&&Qe(m,p,e,t,"vwc");return}if(a.classList.contains("capaT-multi-card")){const m=a.querySelector(".capa-tsol-svg"),p=JSON.parse(a.dataset.capaTCurves||"[]");m&&p.length>0&&Qe(m,p,e,t,"tsol");return}const o=a.querySelector(".chart-svg");if(!o)return;const c=parseFloat(a.dataset.base),l=a.dataset.color,u=a.dataset.cumul==="1",r=a.dataset.chartType||"line",v=a.dataset.metricId||"",s=a.dataset.metricName||"",d=a.dataset.metricUnit||"";if(a.dataset.isIrrigation)Mi(o,l,e,t,i);else{const m=i>0&&Yt.has(v);xi(o,c,l,e,t,u,r,v,s,d,i,m)}}),xt(),Ct()}function $i(e,t,i,n){const c={t:14,r:10,b:28,l:46},l=600-c.l-c.r,u=180-c.t-c.b,r=t.map(w=>{const g=20+w.depth*.8+Math.random()*20;return Array.from({length:i},(C,M)=>{const B=(i-1-M)*n;return Math.max(0,ce("pothydr",g,B))})}),v=r.flat(),s=Math.min(...v),d=Math.max(...v),m=d-s||1,p=w=>c.l+w/Math.max(i-1,1)*l,h=w=>c.t+u-(w-s)/m*u,f=`tc-${Math.random().toString(36).slice(2)}`;let y=`<defs><clipPath id="${f}"><rect x="${c.l}" y="${c.t}" width="${l}" height="${u}"/></clipPath></defs>`;for(let w=0;w<=4;w++){const g=c.t+w/4*u,C=d-w/4*m;y+=`<line x1="${c.l}" y1="${g.toFixed(1)}" x2="${600-c.r}" y2="${g.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,y+=`<text x="${c.l-5}" y="${(g+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${C.toFixed(0)}</text>`}r.forEach((w,g)=>{const C=w.map((B,I)=>({x:p(I),y:h(B)})),M=Ae(C);y+=`<path d="${M}" fill="none" stroke="${t[g].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${f})"/>`}),y+=`<line x1="${c.l}" y1="${c.t+u}" x2="${600-c.r}" y2="${c.t+u}" stroke="var(--bdr2)" stroke-width="1"/>`;const b=Math.max(1,Math.floor(i/6));for(let w=0;w<i;w+=b){const g=(i-1-w)*n;y+=`<text x="${p(w).toFixed(1)}" y="${(c.t+u+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Ce(g)}</text>`}e.innerHTML=y}function Qe(e,t,i,n,a="vwc"){const l={t:14,r:10,b:28,l:46},u=600-l.l-l.r,r=180-l.t-l.b,v=t.map((g,C)=>{if(a==="tsol"){const B=16-g.depth*.06+C*.5+Math.random()*3;return Array.from({length:i},(I,k)=>{const H=(i-1-k)*n;return ce("tsol",B,H)})}const M=35-g.depth*.15+C*2+Math.random()*8;return Array.from({length:i},(B,I)=>{const k=(i-1-I)*n;return Math.max(10,Math.min(55,ce("teneur-eau",M,k)))})}),s=v.flat(),d=Math.floor(Math.min(...s)-2),m=Math.ceil(Math.max(...s)+2),p=m-d||1,h=g=>l.l+g/Math.max(i-1,1)*u,f=g=>l.t+r-(g-d)/p*r,y=`cc-${Math.random().toString(36).slice(2)}`;let b=`<defs><clipPath id="${y}"><rect x="${l.l}" y="${l.t}" width="${u}" height="${r}"/></clipPath></defs>`;for(let g=0;g<=4;g++){const C=l.t+g/4*r,M=m-g/4*p;b+=`<line x1="${l.l}" y1="${C.toFixed(1)}" x2="${600-l.r}" y2="${C.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,b+=`<text x="${l.l-5}" y="${(C+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${M.toFixed(0)}</text>`}v.forEach((g,C)=>{const M=g.map((I,k)=>({x:h(k),y:f(I)})),B=Ae(M);b+=`<path d="${B}" fill="none" stroke="${t[C].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${y})"/>`}),b+=`<line x1="${l.l}" y1="${l.t+r}" x2="${600-l.r}" y2="${l.t+r}" stroke="var(--bdr2)" stroke-width="1"/>`;const w=Math.max(1,Math.floor(i/6));for(let g=0;g<i;g+=w){const C=(i-1-g)*n;b+=`<text x="${h(g).toFixed(1)}" y="${(l.t+r+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Ce(C)}</text>`}e.innerHTML=b}function xi(e,t,i,n,a,o,c="line",l="",u="",r="",v=0,s=!1){const p={t:14,r:10,b:28,l:46},h=600-p.l-p.r,f=180-p.t-p.b,y=n+v,b=s?v:0,w=n+b,g=Math.max(1,Math.round(a/15)),C=Array.from({length:w},(T,E)=>{const j=(n-1-E)*a;if(o){let N=0;for(let V=0;V<g;V++)N+=ce(l,t/g,j+V*(a/g));return N}else if(g>1){let N=0;for(let V=0;V<g;V++)N+=ce(l,t,j+V*(a/g));return N/g}else return ce(l,t,j)}),M=c==="bar"?0:Math.min(...C),B=Math.max(...C),I=B-M||1,k=T=>p.l+T/Math.max(y-1,1)*h,H=T=>p.t+f-(T-M)/I*f,F=`grad_${Math.random().toString(36).slice(2)}`,[W,Z]=fi(i,l);let q=`<defs>
    <linearGradient id="${F}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${W}"/>
      <stop offset="100%" stop-color="${Z}"/>
    </linearGradient>
    <clipPath id="clip_${F}">
      <rect x="${p.l}" y="${p.t}" width="${h}" height="${f}"/>
    </clipPath>
  </defs>`;if(v>0){const T=k(n-.5),E=`stripe_${F}`;q+=`<defs><pattern id="${E}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${T.toFixed(1)}" y="${p.t}" width="${(600-p.r-T).toFixed(1)}" height="${f}" fill="url(#${E})"/>
      <line x1="${T.toFixed(1)}" y1="${p.t}" x2="${T.toFixed(1)}" y2="${p.t+f}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-p.r-4).toFixed(1)}" y="${(p.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}for(let T=0;T<=4;T++){const E=p.t+T/4*f,j=B-T/4*I,N=Math.abs(j)>=100?j.toFixed(0):Math.abs(j)>=10?j.toFixed(1):j.toFixed(2);q+=`<line x1="${p.l}" y1="${E.toFixed(1)}" x2="${600-p.r}" y2="${E.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,q+=`<text x="${p.l-5}" y="${(E+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${N}</text>`}q+=`<line x1="${p.l}" y1="${p.t+f}" x2="${600-p.r}" y2="${p.t+f}" stroke="var(--bdr2)" stroke-width="1"/>`;const be=Math.max(1,Math.floor(y/6));for(let T=0;T<y;T+=be){const E=k(T).toFixed(1),j=(n-T)*a;q+=`<line x1="${E}" y1="${p.t}" x2="${E}" y2="${p.t+f}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,q+=`<text x="${E}" y="${p.t+f+14}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Ce(j)}</text>`}if(c==="bar"){const T=Math.max(2,h/y*.65);C.forEach((E,j)=>{if(E<=0)return;const N=j>=n,V=k(j),Se=H(E),Le=p.t+f-Se;q+=`<rect x="${(V-T/2).toFixed(1)}" y="${Se.toFixed(1)}" width="${T.toFixed(1)}" height="${Le.toFixed(1)}" fill="${N?"#C7C7CC":`url(#${F})`}" opacity="${N?"0.5":"0.9"}" rx="1"/>`})}else{const T=C.slice(0,n).map((N,V)=>({x:k(V),y:H(N)})),E=Ae(T),j=E+` L${k(n-1).toFixed(1)},${p.t+f} L${p.l.toFixed(1)},${p.t+f} Z`;if(q+=`<path d="${j}" fill="${Z}" opacity="0.07" clip-path="url(#clip_${F})"/>`,q+=`<path d="${E}" fill="none" stroke="url(#${F})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${F})"/>`,b>0){const N=C.slice(n-1).map((Se,Le)=>({x:k(n-1+Le),y:H(Se)})),V=Ae(N);q+=`<path d="${V}" fill="none" stroke="url(#${F})" stroke-width="2" stroke-dasharray="5,4" stroke-linejoin="round" stroke-linecap="round" opacity="0.5" clip-path="url(#clip_${F})"/>`}}q+=`<rect class="chart-hover-rect" x="${p.l}" y="${p.t}" width="${h}" height="${f}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=q,Ci(e,C,k,H,M,B,y,n,a,u,r,i,p,600)}function Ci(e,t,i,n,a,o,c,l,u,r,v,s,d,m,p){const h=hi(),f=e.querySelector(".chart-hover-rect");if(!f)return;const b=document.createElementNS("http://www.w3.org/2000/svg","circle");b.setAttribute("r","4"),b.setAttribute("fill",s),b.setAttribute("stroke","#fff"),b.setAttribute("stroke-width","1.5"),b.style.display="none",b.style.pointerEvents="none",e.appendChild(b),f.addEventListener("mousemove",w=>{const g=e.getBoundingClientRect(),C=m/g.width,M=(w.clientX-g.left)*C,B=m-d.l-d.r,I=Math.max(0,Math.min(1,(M-d.l)/B)),k=Math.round(I*(c-1));if(k<0||k>=t.length)return;const H=t[k],F=i(k),W=n(H);b.setAttribute("cx",F),b.setAttribute("cy",W),b.style.display="";const Z=(l-k)*u,q=Ce(Z),be=Math.abs(H)>=100?H.toFixed(1):H.toFixed(2);h.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${r}</div>
      <div class="chart-tooltip-val" style="color:${s}">${be} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${v}</span></div>
      <div class="chart-tooltip-ts">${q}</div>
    `,h.style.display="block";const T=w.clientX+12,E=w.clientY-10;h.style.left=`${Math.min(T,window.innerWidth-160)}px`,h.style.top=`${E}px`}),f.addEventListener("mouseleave",()=>{h.style.display="none",b.style.display="none"})}function Si(e,t,i,n=0){const a=Date.now(),o=i*6e4,c=a-t*o,l=t+n,u=new Array(l).fill(0);return z.filter(r=>r.plotId===e).forEach(r=>{const v=new Date(r.iso).getTime();if(v<c)return;const s=Math.min(l-1,Math.floor((v-c)/o));s>=0&&(u[s]+=r.mm||0)}),u}function Mi(e,t,i,n,a=0){const l={t:12,r:8,b:28,l:44},u=600-l.l-l.r,r=180-l.t-l.b,v=i+a,s=Si(A,i,n,a),d=Math.max(...s,1),m=y=>l.l+y/Math.max(v-1,1)*u,p=y=>l.t+r-y/d*r;let h="";for(let y=0;y<=4;y++){const b=l.t+y/4*r,w=(d-y/4*d).toFixed(1);h+=`<line x1="${l.l}" y1="${b}" x2="${600-l.r}" y2="${b}" stroke="var(--bdr2)" stroke-width="1"/>`,h+=`<text x="${l.l-4}" y="${b+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${w}</text>`}if(a>0){const y=m(i-.5),b=`irrig_stripe_${Math.random().toString(36).slice(2,8)}`;h+=`<defs><pattern id="${b}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${y.toFixed(1)}" y="${l.t}" width="${(600-l.r-y).toFixed(1)}" height="${r}" fill="url(#${b})"/>
      <line x1="${y.toFixed(1)}" y1="${l.t}" x2="${y.toFixed(1)}" y2="${l.t+r}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-l.r-4).toFixed(1)}" y="${(l.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}const f=Math.max(4,u/v*.65);s.forEach((y,b)=>{if(y<=0)return;const w=b>=i,g=m(b),C=p(y),M=l.t+r-C;h+=`<rect x="${(g-f/2).toFixed(1)}" y="${C.toFixed(1)}" width="${f.toFixed(1)}" height="${M.toFixed(1)}" fill="${w?"#C7C7CC":t}" opacity="${w?"0.5":"0.85"}" rx="1"/>`}),e.innerHTML=h}function et(e){const i={pluie:()=>$(20,120),etp:()=>D(15,80),rayonnement:()=>$(500,3e3)}[e.id];return i?i():$(10,100)}function Ei(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),i=document.getElementById("time-step"),n=new Date,a=new Date(n-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",o=>{const c=o.target.closest(".period-preset-btn");if(c)if(e.querySelectorAll(".period-preset-btn").forEach(l=>l.classList.remove("active")),c.classList.add("active"),J=c.dataset.period,J==="custom")t.style.display="flex";else{t.style.display="none";const l=document.getElementById("time-step");l&&(l.value=Ut(J)),U()}}),document.getElementById("date-from").addEventListener("change",tt),document.getElementById("date-to").addEventListener("change",tt),i.addEventListener("change",U)}function tt(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(ue=new Date(e),me=new Date(t+"T23:59:59"),ue<me&&U())}const it={"Blé tendre":[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé. Profondeur optimale 3–4 cm."},{name:"Levée",date:"2025-11-05",bbch:"BBCH 09",desc:"Apparition de la première feuille au-dessus du sol."},{name:"Tallage",date:"2026-02-15",bbch:"BBCH 21",desc:"1er talle apparu. Période sensible au froid."},{name:"Épi 1 cm",date:"2026-04-20",bbch:"BBCH 30",desc:"Montaison. Début de la différenciation de l'épi."},{name:"Épiaison",date:"2026-05-20",bbch:"BBCH 55",desc:"La moitié de l'épiaison est atteinte. Risque maximal de fusariose."},{name:"Floraison",date:"2026-05-28",bbch:"BBCH 65",desc:"Pleine floraison. Fenêtre critique pour la qualité du grain."},{name:"Maturité",date:"2026-07-10",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %. Récolte possible."}],Maïs:[{name:"Semis",date:"2026-04-25",bbch:"BBCH 00",desc:"Sol > 10 °C à 5 cm. Fenêtre de semis idéale."},{name:"Levée",date:"2026-05-10",bbch:"BBCH 09",desc:"Coleoptile visible. 10 jours après semis en conditions normales."},{name:"4 feuilles",date:"2026-05-28",bbch:"BBCH 14",desc:"V4. Intervention herbicide possible."},{name:"6 feuilles",date:"2026-06-12",bbch:"BBCH 16",desc:"V6. Stade critique pour la nutrition azotée."},{name:"Floraison ♂",date:"2026-07-15",bbch:"BBCH 65",desc:"VT. Émission du pollen. Forte demande en eau (≥ 8 mm/j)."},{name:"Soie",date:"2026-07-18",bbch:"BBCH 67",desc:"R1. Fécondation. Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-20",bbch:"BBCH 89",desc:"Point noir visible. Récolte selon teneur en eau."}],Colza:[{name:"Semis",date:"2025-08-25",bbch:"BBCH 00",desc:"Sol humide, T° < 25 °C. Objectif : 30 plants/m²."},{name:"Levée",date:"2025-09-05",bbch:"BBCH 09",desc:"Cotylédon visible. Période à risque limaces."},{name:"Rosette",date:"2025-11-15",bbch:"BBCH 18",desc:"8 feuilles étalées. Bon état pour entrer en hiver."},{name:"Reprise",date:"2026-02-20",bbch:"BBCH 30",desc:"Allongement de l'hypocotyle. Fin de la période de vernalisation."},{name:"Bouton floral",date:"2026-03-25",bbch:"BBCH 51",desc:"Inflorescence visible. Risque sclérotinia à surveiller."},{name:"Floraison",date:"2026-04-10",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile. Éviter les traitements."},{name:"Siliques",date:"2026-05-05",bbch:"BBCH 75",desc:"Siliques de 2 cm. Fin de floraison, début de remplissage."},{name:"Maturité",date:"2026-07-05",bbch:"BBCH 89",desc:"Siliques brunes, graines noires. Seuil récolte < 9 % eau."}],Tournesol:[{name:"Semis",date:"2026-04-20",bbch:"BBCH 00",desc:"Sol > 8 °C à 5 cm. Profondeur 4–5 cm."},{name:"Levée",date:"2026-05-05",bbch:"BBCH 09",desc:"Cotylédon hors sol. Période sensible aux oiseaux."},{name:"4 feuilles",date:"2026-05-25",bbch:"BBCH 14",desc:"V4. Interventions herbicides possibles."},{name:"Bouton floral",date:"2026-06-25",bbch:"BBCH 51",desc:"E2. Bouton visible. Fin du développement végétatif."},{name:"Floraison",date:"2026-07-10",bbch:"BBCH 65",desc:"R5.1. Fleurs ligulées ouvertes. Stress hydrique critique."},{name:"Maturité",date:"2026-09-05",bbch:"BBCH 89",desc:"Capitule brun, dos jaune. Teneur en eau 9–12 %."}],Vigne:[{name:"Débourrement",date:"2026-04-05",bbch:"BBCH 05",desc:"Bourgeon en coton. Risque gel augmente fortement."},{name:"Sortie feuilles",date:"2026-04-20",bbch:"BBCH 11",desc:"1ère feuille étalée. Début des traitements prophylactiques."},{name:"Floraison",date:"2026-06-10",bbch:"BBCH 65",desc:"Anthèse. Niveau de risque mildiou et oïdium maximal."},{name:"Nouaison",date:"2026-06-25",bbch:"BBCH 71",desc:"Baies visibles. Consolidation du rendement."},{name:"Véraison",date:"2026-08-05",bbch:"BBCH 81",desc:"Changement de couleur. Arrêt des traitements phytos recommandé."},{name:"Récolte",date:"2026-09-15",bbch:"BBCH 89",desc:"Maturité technologique. Date selon profil variétal."}],Sorgho:[{name:"Semis",date:"2026-05-10",bbch:"BBCH 00",desc:"Sol > 12 °C à 5 cm."},{name:"Levée",date:"2026-05-25",bbch:"BBCH 09",desc:"Coleoptile visible."},{name:"Montaison",date:"2026-07-01",bbch:"BBCH 30",desc:"Début de la montaison. Forte demande azotée."},{name:"Floraison",date:"2026-07-25",bbch:"BBCH 65",desc:"Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-15",bbch:"BBCH 89",desc:"Teneur en eau < 25 %. Récolte adaptée."}],"Orge de printemps":[{name:"Semis",date:"2026-03-15",bbch:"BBCH 00",desc:"Semis dès que sol ressuyé, T° > 5 °C."},{name:"Levée",date:"2026-04-01",bbch:"BBCH 09",desc:"Coleoptile visible. Période sensible aux limaces."},{name:"Tallage",date:"2026-04-20",bbch:"BBCH 21",desc:"Premier talle. Couverture du sol progressive."},{name:"Montaison",date:"2026-05-10",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-06-05",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-07-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-08-05",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],Orge:[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé, profondeur 3–4 cm."},{name:"Levée",date:"2025-11-04",bbch:"BBCH 09",desc:"Coleoptile visible. Surveillance limaces."},{name:"Tallage",date:"2026-02-08",bbch:"BBCH 21",desc:"Reprise de végétation. Premier talle."},{name:"Montaison",date:"2026-04-02",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-05-07",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-05-18",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-06-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-07-01",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],"Pomme de terre":[{name:"Plantation",date:"2026-04-02",bbch:"BBCH 00",desc:"Tubercules-semences à 10 cm, espacement 30–35 cm."},{name:"Levée",date:"2026-04-26",bbch:"BBCH 09",desc:"Tiges émergées. Risque gel résiduel."},{name:"Croissance",date:"2026-05-15",bbch:"BBCH 31",desc:"Fermeture du rang. Première application fongicide."},{name:"Tuberisation",date:"2026-06-05",bbch:"BBCH 71",desc:"Initiation des tubercules. Demande en eau maximale."},{name:"Grossissement",date:"2026-07-01",bbch:"BBCH 81",desc:"Grossissement actif. Irrigation critique."},{name:"Maturité",date:"2026-08-15",bbch:"BBCH 89",desc:"Fanes sèches, peau des tubercules fixée. Récolte."}],Cerisier:[{name:"Dormance",date:"2025-12-15",bbch:"BBCH 00",desc:"Repos végétatif. Besoin en froid accumulé."},{name:"Bourgeons",date:"2026-02-20",bbch:"BBCH 03",desc:"Gonflement des bourgeons. Chilling satisfait."},{name:"Débourrement",date:"2026-03-18",bbch:"BBCH 07",desc:"Pointe verte visible. Risque gel fort (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-08",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation croisée nécessaire."},{name:"Nouaison",date:"2026-04-28",bbch:"BBCH 71",desc:"Petits fruits noués. Chute physiologique normale."},{name:"Fructification",date:"2026-05-12",bbch:"BBCH 81",desc:"Grossissement actif des cerises. Irrigation si déficit."},{name:"Récolte",date:"2026-06-18",bbch:"BBCH 89",desc:"Cerises à maturité. Récolte échelonnée selon variété."}],Poire:[{name:"Débourrement",date:"2026-03-28",bbch:"BBCH 07",desc:"Pointe verte. Vigilance gel (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-15",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile."},{name:"Nouaison",date:"2026-05-05",bbch:"BBCH 71",desc:"Petits fruits noués. Éclaircissage si nécessaire."},{name:"Croissance",date:"2026-06-15",bbch:"BBCH 78",desc:"Grossissement actif. Besoins en eau importants."},{name:"Véraison",date:"2026-08-10",bbch:"BBCH 84",desc:"Changement de couleur. Arrêt des traitements phytos."},{name:"Récolte",date:"2026-09-10",bbch:"BBCH 89",desc:"Récolte selon indice de maturité (pénétromètre, amidon)."}],Pomme:[{name:"Débourrement",date:"2026-04-01",bbch:"BBCH 07",desc:"Pointe verte. Risque gel résiduel."},{name:"Floraison",date:"2026-04-25",bbch:"BBCH 65",desc:"Pleine floraison. Risque tavelure maximal."},{name:"Nouaison",date:"2026-05-15",bbch:"BBCH 71",desc:"Petits fruits visibles. Éclaircissage possible."},{name:"Croissance",date:"2026-06-10",bbch:"BBCH 78",desc:"Grossissement actif. Surveillance carpocapse."},{name:"Véraison",date:"2026-08-15",bbch:"BBCH 84",desc:"Coloration des fruits. Maturation avancée."},{name:"Récolte",date:"2026-09-20",bbch:"BBCH 89",desc:"Récolte selon variété et indice de maturité."}],Salade:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Laitue:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Betterave:[{name:"Semis",date:"2026-03-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé (T° > 5 °C) et ressuyé."},{name:"Levée",date:"2026-04-08",bbch:"BBCH 09",desc:"Cotylédons hors sol. Période à risque limaces."},{name:"4 feuilles",date:"2026-05-01",bbch:"BBCH 14",desc:"Couverture partielle du sol. Interventions herbicides."},{name:"Fermeture rang",date:"2026-06-15",bbch:"BBCH 37",desc:"Canopée fermée. Forte demande en eau et azote."},{name:"Grossissement",date:"2026-08-01",bbch:"BBCH 40",desc:"Grossissement actif de la racine. Accumulation de sucres."},{name:"Récolte",date:"2026-10-20",bbch:"BBCH 89",desc:"Teneur en sucre optimale. Arrachage selon planning usine."}]},ki=[{name:"Semis",date:"2026-04-01",bbch:"BBCH 00",desc:"Semis."},{name:"Levée",date:"2026-04-20",bbch:"BBCH 09",desc:"Levée des plantules."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Floraison."},{name:"Récolte",date:"2026-08-20",bbch:"BBCH 89",desc:"Maturité physiologique."}];function Bi(e){if(!e)return[];const t=e.toLowerCase();for(const i of Object.keys(it))if(t.startsWith(i.toLowerCase()))return it[i];return ki}function ji(){const e=document.getElementById("toggle-phenologie");e&&e.addEventListener("change",()=>{xt()})}function xt(){document.querySelectorAll(".pheno-overlay").forEach(h=>h.remove());const e=document.getElementById("toggle-phenologie");if(!(e!=null&&e.checked))return;const t=x.crop||S.crop,i=Bi(t);if(!i.length)return;const n=Date.now(),a=pe()*6e4,o=n-a,c=600,l=46,u=10,r=14,v=28,s=c-l-u,d=r+4,m=180-v,p=i.filter(h=>{const f=new Date(h.date).getTime();return f>=o&&f<=n});p.length&&document.querySelectorAll(".chart-card").forEach(h=>{const f=h.querySelector(".chart-svg, .tensio-svg");if(!f)return;const y=document.createElementNS("http://www.w3.org/2000/svg","g");y.setAttribute("class","pheno-overlay"),p.forEach(b=>{const g=(new Date(b.date).getTime()-o)/a,C=l+g*s,M=document.createElementNS("http://www.w3.org/2000/svg","line");M.setAttribute("x1",C.toFixed(1)),M.setAttribute("x2",C.toFixed(1)),M.setAttribute("y1",d),M.setAttribute("y2",m),M.setAttribute("stroke","#3a9e6a"),M.setAttribute("stroke-width","1"),M.setAttribute("stroke-dasharray","4,3"),y.appendChild(M);const B=14,I=b.name.length>B?b.name.slice(0,B-1)+"…":b.name,k=(C+3).toFixed(1),H=(d+2).toFixed(1),F=document.createElementNS("http://www.w3.org/2000/svg","text");F.setAttribute("x",k),F.setAttribute("y",H),F.setAttribute("transform",`rotate(90, ${k}, ${H})`),F.setAttribute("text-anchor","start"),F.setAttribute("font-size","9"),F.setAttribute("font-family","var(--font)"),F.setAttribute("fill","#3a9e6a"),F.style.cursor="pointer",F.textContent=I,y.appendChild(F);const W=document.createElementNS("http://www.w3.org/2000/svg","rect");W.setAttribute("x",(C-8).toFixed(1)),W.setAttribute("y",d.toString()),W.setAttribute("width","16"),W.setAttribute("height",(m-d).toString()),W.setAttribute("fill","transparent"),W.style.cursor="pointer",W.addEventListener("click",Z=>Ai(b,Z)),y.appendChild(W)}),f.appendChild(y)})}let oe=null;function Ai(e,t){oe&&(oe.remove(),oe=null);const i=document.createElement("div");i.className="pheno-popover";const n=c=>{const[l,u,r]=c.split("-");return`${r}/${u}/${l}`};i.innerHTML=`
    <div class="pheno-pop-hd">
      <span class="pheno-pop-badge">${e.bbch}</span>
      <span class="pheno-pop-name">${e.name}</span>
      <button class="pheno-pop-close">×</button>
    </div>
    <div class="pheno-pop-date">${n(e.date)}</div>
  `,i.querySelector(".pheno-pop-close").addEventListener("click",()=>{i.remove(),oe=null});const a=t.clientX,o=t.clientY;i.style.position="fixed",i.style.top=o-8+"px",i.style.left=a+12+"px",document.body.appendChild(i),oe=i,setTimeout(()=>{const c=i.offsetWidth,l=i.offsetHeight;let u=o-8,r=a+12;r+c>window.innerWidth-8&&(r=a-c-12),u+l>window.innerHeight-8&&(u=o-l),i.style.top=Math.max(8,u)+"px",i.style.left=Math.max(8,r)+"px"},0),document.addEventListener("click",function c(l){i.contains(l.target)||(i.remove(),oe=null,document.removeEventListener("click",c))},{capture:!0})}function Ii(){const e=document.getElementById("toggle-notes");e&&e.addEventListener("change",Ct)}function Ct(){document.querySelectorAll(".notes-overlay").forEach(d=>d.remove()),nt();const e=document.getElementById("toggle-notes");if(!(e!=null&&e.checked))return;const t=we().filter(d=>d.type==="note"||d.type==="traitement");if(!t.length)return;const i=Date.now(),n=pe()*6e4,a=i-n,o=600,c=46,l=10,u=28,r=o-c-l,v=180-u,s=t.filter(d=>{const m=new Date(d.date+"T12:00:00").getTime();return m>=a&&m<=i});s.length&&document.querySelectorAll(".chart-card").forEach(d=>{const m=d.querySelector(".chart-svg, .tensio-svg");if(!m)return;const p=document.createElementNS("http://www.w3.org/2000/svg","g");p.setAttribute("class","notes-overlay"),s.forEach(h=>{const y=(new Date(h.date+"T12:00:00").getTime()-a)/n,b=c+y*r,g=h.type==="traitement"?"#78c860":"#60a8e0",C=v+9,M=document.createElementNS("http://www.w3.org/2000/svg","polygon"),B=5;M.setAttribute("points",`${b.toFixed(1)},${(C-B).toFixed(1)} ${(b+B).toFixed(1)},${C.toFixed(1)} ${b.toFixed(1)},${(C+B).toFixed(1)} ${(b-B).toFixed(1)},${C.toFixed(1)}`),M.setAttribute("fill",g),M.setAttribute("stroke","#fff"),M.setAttribute("stroke-width","1.5"),p.appendChild(M);const I=document.createElementNS("http://www.w3.org/2000/svg","rect");I.setAttribute("x",(b-9).toFixed(1)),I.setAttribute("y",v.toFixed(1)),I.setAttribute("width","18"),I.setAttribute("height","18"),I.setAttribute("fill","transparent"),I.style.cursor="default",I.addEventListener("mouseenter",k=>Ti(h,k)),I.addEventListener("mouseleave",nt),p.appendChild(I)}),m.appendChild(p)})}let Y=null;function Ti(e,t){Y||(Y=document.createElement("div"),Y.className="note-tip",document.body.appendChild(Y));const i=e.type==="traitement";let a=`<div class="note-tip-header">
    <span class="note-tip-badge note-tip-badge--${i?"trait":"note"}">
      <i class="bi ${i?"bi-eyedropper":"bi-pencil"}"></i> ${i?"Traitement":"Note"}
    </span>
    <span class="note-tip-date">${(l=>{const[u,r,v]=l.split("-");return`${v}/${r}/${u}`})(e.date)}</span>
  </div>`;e.texte&&(a+=`<div class="note-tip-texte">${e.texte}</div>`),i&&(e.produit||e.dose||e.cible)&&(a+='<div class="note-tip-detail">',e.produit&&(a+=`<span><i class="bi bi-flask"></i> ${e.produit}</span>`),e.dose&&(a+=`<span><i class="bi bi-droplet"></i> ${e.dose}</span>`),e.cible&&(a+=`<span><i class="bi bi-bullseye"></i> ${e.cible}</span>`),a+="</div>"),Y.innerHTML=a,Y.style.display="block";const o=t.clientX+14,c=t.clientY-10;Y.style.left=o+"px",Y.style.top=c+"px",requestAnimationFrame(()=>{const l=Y.offsetWidth;o+l>window.innerWidth-8&&(Y.style.left=t.clientX-l-10+"px")})}function nt(){Y&&(Y.style.display="none")}function Li(){Te()}function Te(){var t,i,n,a;const e=document.getElementById("compare-control");if(e)if(G){const o=((t=se.find(c=>c.id===G))==null?void 0:t.name)||"Parcelle";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${o} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(i=e.querySelector(".compare-clear-icon"))==null||i.addEventListener("click",c=>{c.stopPropagation(),G=null,Te(),U()}),(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",at)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",at)}function at(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),i=se.filter(o=>o.id!==A),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher une parcelle…">
    <div class="compare-dropdown-list">
      ${i.map(o=>`<div class="compare-dropdown-item${o.id===G?" active":""}" data-id="${o.id}"><i class="bi bi-map"></i> ${o.name}</div>`).join("")}
    </div>
  `,t.appendChild(n);const a=n.querySelector(".compare-search-input");a.focus(),a.addEventListener("input",o=>{const c=o.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(l=>{l.style.display=l.textContent.toLowerCase().includes(c)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(o=>{o.addEventListener("click",()=>{G=parseInt(o.dataset.id),n.remove(),Te(),U()})}),setTimeout(()=>{document.addEventListener("click",function o(c){!n.contains(c.target)&&!t.contains(c.target)&&(n.remove(),document.removeEventListener("click",o))})},0)}function Pi(){const e=We.find(t=>t.id===S.orgId);St(e),Fi(e),Be(),ze(),le(),Ye()}const st=["Abricotier","Ail","Amandier","Artichaut","Asperge","Aubergine","Avoine","Basilic","Betterave fourragère","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Chou pommé","Ciboulette","Citrouille","Clémentinier","Courgette","Echalote","Endive","Epinard","Fève","Figuier","Fraisier","Framboisier","Gesse","Giroflier","Haricot vert","Houblon","Kiwi","Lavande","Lentille","Luzerne","Maïs doux","Maïs grain","Maïs semence","Maïs silage","Melon","Menthe","Moutarde","Navet","Nectarinier","Noisetier","Noyer","Oignon","Olivier","Orge de brasserie","Orge de printemps","Orge d'hiver","Pêcher","Persil","Pissenlit","Poireau","Pois chiche","Pois de conserve","Pois fourrager","Pois protéagineux","Poivron","Pomme de terre","Pommier","Poirier","Prunier","Pruneau d'Agen","Radis","Raisin de cuve","Raisin de table","Riz","Romarin","Sarrasin","Seigle","Soja","Sorgho","Tabac","Thym","Tomate","Tournesol","Triticale","Vigne","Cardon","Céleri","Cerise","Châtaignier","Colza","Courge","Fénugrec","Groseillier","Lin fibre","Lin oléagineux","Mâche","Millet","Myrtille","Noix de cajou","Paprika","Patate douce","Pistachier","Poisson-Chat","Quinoa","Safran","Sainfoin","Scorsonère","Shallot","Topinambour","Trèfle","Vesce","Fétuque","Ray-grass","Prairie temporaire","Prairie permanente","Jachère","Autre"];function St(e){const t=document.getElementById("panel-ident"),i=x,n=i.texture||null,a=i.irrigation||null,o=i.crop||st[0],c=i.env||null,l=n===Pe,u=i.soilAnalysis||{};t.innerHTML=`
    ${Me("Nom",i.name||"—","name","text")}
    ${Hi("Culture",o,"crop",st)}
    ${ot("Surface",(i.area?`${i.area} ha`:"—")+' <span class="field-computed">(calculé)</span>')}
    ${He("Environnement",c,"env",Ot,"Plein champ")}
    ${He("Texture sol",n,"texture",[...Nt,Pe],"Indéfini")}
    ${l?`
      ${Me("Argile (%)",String(u.argile??""),"soilArgile","number")}
      ${Me("Limon (%)",String(u.limon??""),"soilLimon","number")}
      ${Me("Sable (%)",String(u.sable??""),"soilSable","number")}
    `:""}
    ${He("Irrigation",a,"irrigation",bt,"Non renseigné")}
    ${ot("Exploitation",e?e.name:"—")}
  `,te(t,"name",i.name||"",r=>{O({name:r}),ht(r,{label:"Parcelles",href:"parcelles.html"})}),te(t,"crop",o,r=>O({crop:r})),te(t,"env",c||"",r=>O({env:r||null})),te(t,"texture",n||"",r=>{const v=r||null,s={texture:v};v!==Pe&&(s.soilAnalysis=null),O(s),St(e)}),l&&(te(t,"soilArgile",String(u.argile??""),r=>O({soilAnalysis:{...x.soilAnalysis,argile:+r}})),te(t,"soilLimon",String(u.limon??""),r=>O({soilAnalysis:{...x.soilAnalysis,limon:+r}})),te(t,"soilSable",String(u.sable??""),r=>O({soilAnalysis:{...x.soilAnalysis,sable:+r}}))),te(t,"irrigation",a||"",r=>O({irrigation:r||null}))}function Me(e,t,i,n="text"){const a=(t||"").replace(/"/g,"&quot;");return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <input type="${n}" class="panel-field-input" data-val value="${a}">
    </div>`}function Hi(e,t,i,n){return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${n.map(a=>`<option${a===t?" selected":""}>${a}</option>`).join("")}
      </select>
    </div>`}function He(e,t,i,n,a="—"){const c=n.includes(a)?"":`<option value=""${t?"":" selected"}>${a}</option>`;return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${c}
        ${n.map(l=>`<option${l===(t||a)?" selected":""}>${l}</option>`).join("")}
      </select>
    </div>`}function ot(e,t){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${t}</span>
    </div>`}function te(e,t,i,n){const a=e.querySelector(`[data-field="${t}"] [data-val]`);if(!a)return;const o=()=>{var l;const c=(l=a.value)==null?void 0:l.trim();c&&c!==i&&(i=c,n(c))};a.addEventListener("change",o),a.tagName==="INPUT"&&a.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),a.blur())})}function Fi(e){const t=document.getElementById("panel-geoloc"),i=x.latlngs||S.latlngs,n=Array.isArray(i)&&i.length>=3,a=x.ville||S.ville||(e==null?void 0:e.ville)||"—",o=S.departement||(e==null?void 0:e.departement),c=x.lat??S.lat??(e==null?void 0:e.lat),l=x.lng??S.lng??(e==null?void 0:e.lng);t.innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${o?` (${o})`:""}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${c!=null?c.toFixed(4):"—"}, ${l!=null?l.toFixed(4):"—"}</span>
    </div>
    ${c!=null?`<div class="panel-row">
      <a href="https://www.google.com/maps?q=${c.toFixed(6)},${l.toFixed(6)}" target="_blank" class="itinerary-link">
        <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
      </a>
    </div>`:""}
    <div style="padding:4px 0 4px">
      <a href="parcelle-modifier-contour.html?id=${A}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${n?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function qi(){const e=new Set;return P.filter(i=>x.linkedSensorIds.includes(i.id)).forEach(i=>{const n=R[i.model]||[];_.includes(i.model)||n.forEach(a=>e.add(a.id))}),e}function rt(e){const t=R[e]||[];return t.length?`<div class="sensor-metric-badges">${t.map(i=>`<span class="sensor-metric-badge" style="--mc:${i.color}">${i.name}</span>`).join("")}</div>`:""}function Be(){const e=document.getElementById("panel-sensors"),t=P.filter(m=>x.linkedSensorIds.includes(m.id)),i=P.filter(m=>m.orgId===S.orgId&&!x.linkedSensorIds.includes(m.id)),n=t.filter(m=>!_.includes(m.model)),a={};n.forEach(m=>(R[m.model]||[]).forEach(p=>{a[p.id]=(a[p.id]||0)+1}));const o=Object.entries(a).filter(([,m])=>m>1).map(([m])=>{var p;return((p=Object.values(R).flat().find(h=>h.id===m))==null?void 0:p.name)||m});let c="";if(o.length>0&&(c+=`<div class="sensor-conflict-banner">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <span>Conflit de métriques : <strong>${o.join(", ")}</strong> mesurée(s) par plusieurs capteurs. Les données peuvent être en doublon.</span>
    </div>`),t.length===0)c+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>';else{const m=t.filter(h=>_.includes(h.model)),p=t.filter(h=>!_.includes(h.model));if(c+=p.map(h=>{const f=h.event&&(Array.isArray(h.event)?h.event.length>0:!0),y=f?Array.isArray(h.event)?h.event[0]:h.event:null;return`
      <div class="sensor-linked-row">
        <div class="sensor-linked-info">
          <div style="display:flex;align-items:center;gap:6px">
            <a href="capteur-detail.html?id=${h.id}" class="sensor-linked-link">${ee[h.model]||h.model}</a>
            ${f?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
          </div>
          <span class="sensor-linked-detail">${h.model} · ${h.serial}</span>
          ${f?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${y}</span>`:""}
          ${rt(h.model)}
        </div>
        <button class="remove-sensor-btn icon-btn" data-id="${h.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>`}).join(""),m.length>0){const h={};m.forEach(f=>{const y=f.depth!=null?`${f.depth} cm`:f.model;h[y]||(h[y]=[]),h[y].push(f)}),c+=`<div class="sensor-kit-hd">
        <span class="sensor-kit-hd-label">Kit de tensiomètres</span>
        ${rt("CHP-15/30")}
      </div>`,Object.entries(h).forEach(([f,y])=>{c+=`<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${f}</div>`,c+=y.map(b=>{const w=b.event&&(Array.isArray(b.event)?b.event.length>0:!0),g=w?Array.isArray(b.event)?b.event[0]:b.event:null;return`
          <div class="sensor-linked-row" style="padding-left:12px">
            <div class="sensor-linked-info">
              <div style="display:flex;align-items:center;gap:6px">
                <a href="capteur-detail.html?id=${b.id}" class="sensor-linked-link">${ee[b.model]||b.model}</a>
                ${w?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
              </div>
              <span class="sensor-linked-detail">${b.model} · ${b.serial}</span>
              ${w?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${g}</span>`:""}
            </div>
            <button class="remove-sensor-btn icon-btn" data-id="${b.id}" title="Retirer">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>`}).join("")})}}e.innerHTML=c;const l=t.some(m=>m.model==="PYRANO"),u=[{name:"Évapotranspiration (ETP)",color:"#c090e0"},...l?[]:[{name:"Rayonnement solaire",color:"#f5c842"}],{name:"Température de rosée",color:"#80c8e8"}],r=document.getElementById("panel-parcel-metrics-ext");r&&(r.innerHTML=`
      <div class="panel-parcel-metrics">
        <div class="panel-parcel-metrics-title">Données spatialisées</div>
        <div class="sensor-metric-badges">
          ${u.map(m=>`<span class="sensor-metric-badge" style="--mc:${m.color}">${m.name}</span>`).join("")}
        </div>
      </div>`);const v=document.getElementById("sensor-add-row"),s=document.getElementById("add-sensor-select");v&&s&&(i.length>0?(s.innerHTML='<option value="">Ajouter un capteur…</option>'+i.map(m=>`<option value="${m.id}">${ee[m.model]||m.model} — ${m.serial}</option>`).join(""),v.style.display=""):v.style.display="none"),e.querySelectorAll(".remove-sensor-btn").forEach(m=>{m.addEventListener("click",()=>{const p=parseInt(m.dataset.id),h=P.find(y=>y.id===p),f=h?`${ee[h.model]||h.model} — ${h.serial}`:`capteur #${p}`;$e({title:"Retirer le capteur",message:`Retirer <strong>${f}</strong> de cette parcelle ?<br><br>Les données historiques sont conservées.`,confirmLabel:"Retirer",onConfirm:()=>{const y=x.linkedSensorIds.filter(b=>b!==p);O({linkedSensorIds:y}),ct(y),Be(),U(),de()}})})});const d=document.getElementById("add-sensor-btn");d&&d.addEventListener("click",()=>{const m=document.getElementById("add-sensor-select"),p=parseInt(m.value);if(!p)return;const h=P.find(y=>y.id===p);if(!h)return;const f=De(h.model);if(f){const b=P.filter(w=>x.linkedSensorIds.includes(w.id)).filter(w=>{const g=De(w.model);return g&&g!==f});if(b.length>0){const w=b.map(g=>`${ee[g.model]||g.model} — ${g.serial}`).join(", ");$e({title:"Capteur incompatible",message:`Cette parcelle utilise déjà : <strong>${w}</strong>.<br><br>Les capteurs de sol (CHP, CAPA, EC, T_MINI) sont exclusifs — une seule technologie par parcelle.<br><br>Retirer ${b.length>1?"ces capteurs":"ce capteur"} et ajouter le nouveau ?`,confirmLabel:"Remplacer",onConfirm:()=>{const g=new Set(b.map(M=>M.id)),C=x.linkedSensorIds.filter(M=>!g.has(M));O({linkedSensorIds:[...C,p]}),ct(C),dt(h),Be(),U(),de()}});return}}if(!_.includes(h.model)){const y=qi(),w=(R[h.model]||[]).map(g=>g.id).filter(g=>y.has(g));if(w.length>0){const g=w.map(M=>{const B=Object.values(R).flat().find(I=>I.id===M);return(B==null?void 0:B.name)||M});if(!confirm(`Attention : ce capteur (${h.model}) mesure des métriques déjà fournies par un autre capteur :
• ${g.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}O({linkedSensorIds:[...x.linkedSensorIds,p]}),dt(h),Be(),U(),de()})}function ze(){var c;const e=document.getElementById("panel-integrations"),t=x.integrations||[],i=Vt.filter(l=>!t.includes(l));let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':n+=t.map(l=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${l}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(l)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),e.innerHTML=n;const a=document.getElementById("integ-add-row"),o=document.getElementById("add-integ-select");a&&o&&(i.length>0?(o.innerHTML='<option value="">Ajouter une intégration…</option>'+i.map(l=>`<option value="${encodeURIComponent(l)}">${l}</option>`).join(""),a.style.display=""):a.style.display="none"),e.querySelectorAll(".remove-integ-btn").forEach(l=>{l.addEventListener("click",()=>{const u=decodeURIComponent(l.dataset.name);$e({title:"Retirer l'intégration",message:`Retirer <strong>${u}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{O({integrations:x.integrations.filter(r=>r!==u)}),ze()}})})}),(c=document.getElementById("add-integ-btn"))==null||c.addEventListener("click",()=>{const l=document.getElementById("add-integ-select"),u=decodeURIComponent(l.value);u&&(O({integrations:[...x.integrations,u]}),ze())})}let K=null,Q=null;function Ri(){if(K!==null)return;const e=Ie(A);K=e.linkedOrgMemberIds??ie.filter(t=>{var i,n;return t.source==="adherent"&&((i=t.parcelIds)==null?void 0:i.includes(A))&&((n=t.orgIds)==null?void 0:n.includes(S.orgId))}).map(t=>t.id),Q=e.linkedConseillerIds??ie.filter(t=>{var i;return t.source==="réseau"&&((i=t.parcelIds)==null?void 0:i.includes(A))}).map(t=>t.id)}function lt(e,t,i){return`<div class="member-row">
    <div>
      <span class="member-name">${e.prenom} ${e.nom}</span>
      ${i?`<span class="member-role-badge">${e.role}</span>`:""}
    </div>
    ${t?`<button class="remove-membre-btn icon-btn" data-id="${e.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function le(){var s;Ri();const e=((s=document.getElementById("sidebar"))==null?void 0:s.getAttribute("data-role"))==="adherent-reseau",t=document.getElementById("panel-membres"),i=document.getElementById("panel-membres-section"),n=ie.filter(d=>{var m;return d.source==="adherent"&&((m=d.orgIds)==null?void 0:m.includes(S.orgId))}),a=n.filter(d=>K.includes(d.id));i&&(i.style.display=!e&&n.length===0?"none":""),t&&(t.innerHTML=a.length?a.map(d=>lt(d,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',t.querySelectorAll(".remove-membre-btn").forEach(d=>{d.addEventListener("click",()=>{const m=parseInt(d.dataset.id),p=ie.find(h=>h.id===m);$e({title:"Retirer le membre",message:`Retirer <strong>${p?`${p.prenom} ${p.nom}`:`membre #${m}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{K=K.filter(h=>h!==m),ne(A,{linkedOrgMemberIds:K}),le()}})})}));const o=document.getElementById("add-membre-org-row");o&&(o.style.display="");const c=document.getElementById("add-membre-org-select");c&&(c.innerHTML='<option value="">Associer un membre…</option>',n.filter(d=>!K.includes(d.id)).forEach(d=>{const m=document.createElement("option");m.value=d.id,m.textContent=`${d.prenom} ${d.nom}`,c.appendChild(m)})),document.getElementById("add-membre-org-btn").onclick=()=>{const d=parseInt(c==null?void 0:c.value);!d||K.includes(d)||(K.push(d),ne(A,{linkedOrgMemberIds:K}),le())};const l=document.getElementById("panel-conseillers"),u=document.getElementById("panel-conseillers-section"),r=ie.filter(d=>d.source==="réseau"&&Q.includes(d.id));u&&(u.style.display=e&&r.length===0?"none":""),l&&(l.innerHTML=r.length?r.map(d=>lt(d,!e,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',e||l.querySelectorAll(".remove-membre-btn").forEach(d=>{d.addEventListener("click",()=>{const m=parseInt(d.dataset.id),p=ie.find(h=>h.id===m);$e({title:"Retirer le conseiller",message:`Retirer <strong>${p?`${p.prenom} ${p.nom}`:`conseiller #${m}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{Q=Q.filter(h=>h!==m),ne(A,{linkedConseillerIds:Q}),le()}})})}));const v=document.getElementById("add-conseiller-row");if(v&&(v.style.display=e?"none":""),!e){const d=document.getElementById("add-membre-select");d&&(d.innerHTML='<option value="">Ajouter un conseiller…</option>',ie.filter(m=>m.source==="réseau"&&!Q.includes(m.id)).forEach(m=>{const p=document.createElement("option");p.value=m.id,p.textContent=`${m.prenom} ${m.nom} (${m.role})`,d.appendChild(p)})),document.getElementById("add-membre-btn").onclick=()=>{const m=parseInt(d==null?void 0:d.value);!m||Q.includes(m)||(Q.push(m),ne(A,{linkedConseillerIds:Q}),le())}}}function Ye(){const e=document.getElementById("panel-alertes"),t=x.alertes||[],i={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':n+=t.map((a,o)=>`
      <div class="alert-item">
        <i class="bi ${i[a.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition||""} ${a.threshold||""} ${a.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${o}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),n+='<button id="create-alert-btn" class="action-btn" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=n,e.querySelectorAll(".remove-alert-btn").forEach(a=>{a.addEventListener("click",()=>{const o=parseInt(a.dataset.idx),c=[...x.alertes];c.splice(o,1),O({alertes:c}),Ye()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{Ni(e)})}function Di(){const e=[];return P.filter(i=>x.linkedSensorIds.includes(i.id)).forEach(i=>{(R[i.model]||[]).forEach(a=>{e.find(o=>o.id===a.id)||e.push({id:a.id,name:a.name,unit:a.unit})})}),Ve.forEach(i=>{e.find(n=>n.id===i.id)||e.push({id:i.id,name:i.name,unit:i.unit})}),e}function Ni(e){if(e.querySelector(".alert-create-form"))return;const i=Di(),n=document.createElement("div");n.className="alert-create-form",n.innerHTML=`
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
  `,e.appendChild(n),n.querySelector("#alert-metric").addEventListener("change",a=>{const o=a.target.selectedOptions[0];n.querySelector("#alert-unit-label").textContent=(o==null?void 0:o.dataset.unit)||"—"}),n.querySelector("#alert-save-btn").addEventListener("click",()=>{const o=n.querySelector("#alert-metric").value,c=i.find(v=>v.id===o),l=n.querySelector("#alert-condition").value,u=n.querySelector("#alert-threshold").value;if(!o||!u)return;const r={type:"seuil",label:`Alerte ${(c==null?void 0:c.name)||o}`,metric:(c==null?void 0:c.name)||o,condition:l,threshold:u,unit:(c==null?void 0:c.unit)||""};O({alertes:[...x.alertes||[],r]}),Ye()}),n.querySelector("#alert-cancel-btn").addEventListener("click",()=>n.remove())}function Oi(e,t){const i=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(i),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function zi(){const e=x.name||S.name||"Parcelle",t=je(x.linkedSensorIds);let i;if(G){const d=se.find(f=>f.id===G),m=P.filter(f=>f.parcelIds.includes(G)).map(f=>f.id),p=je(m),h=(d==null?void 0:d.name)||"Comparaison";i=[...t.map(f=>({h:`[${e}] ${f.name} (${f.unit})`,gen:f.base})),...p.map(f=>({h:`[${h}] ${f.name} (${f.unit})`,gen:f.base}))]}else i=t.map(d=>({h:`${d.name} (${d.unit})`,gen:d.base}));const n=pe()*6e4,a=fe()*6e4,o=J==="custom"&&me?me:new Date,c=J==="custom"&&ue?ue:new Date(o-n),l=Math.min(Math.ceil((o-c)/a)+1,500),u=(o-c)/Math.max(l-1,1),r=["Horodatage",...i.map(d=>d.h)].join(";"),v=Array.from({length:l},(d,m)=>[new Date(c.getTime()+m*u).toISOString().replace("T"," ").slice(0,19),...i.map(h=>h.gen())].join(";")),s=e.replace(/[^\w]/g,"_");Oi([r,...v].join(`\r
`),`${s}_${J}_${new Date().toISOString().slice(0,10)}.csv`)}function $e({title:e,message:t,confirmLabel:i="Confirmer",onConfirm:n}){const a=document.createElement("div");a.className="modal add-modal",a.style.zIndex="9999",a.innerHTML=`
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
    </div>`,a.querySelector(".add-modal-close").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-cancel").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-ok").addEventListener("click",()=>{a.remove(),n()}),a.addEventListener("click",o=>{o.target===a&&a.remove()}),document.body.appendChild(a)}function _i(){if(Fe){Fe.invalidateSize();return}const e=We.find(n=>n.id===S.orgId);if(!(e!=null&&e.lat))return;const t=x.latlngs||S.latlngs,i=L.map("parcel-mini-map",{zoomControl:!1,attributionControl:!1});if(Fe=i,L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(i),Array.isArray(t)&&t.length>=3){const n=L.polygon(t,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(i);i.fitBounds(n.getBounds(),{padding:[10,10]})}else i.setView([e.lat,e.lng],13),L.circleMarker([e.lat,e.lng],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(i)}function Wi(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),i=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",i.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}let Fe=null;function Vi(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(i=>i.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.pane).classList.add("active"),t.dataset.pane==="tab-journal"&&Ge()})})}const Gi={"previsions-5j":{size:"1x1",title:"Prévisions 5 jours",icon:"bi-calendar3-week",color:"#5b8dd9",render:Ui,footer:{label:"Voir les prévisions",href:"previsions.html"}},weephyt:{size:"1x1",title:"Weephyt",icon:"bi-shield-check",color:"#2d9e5f",render:Xi,footer:{label:"Voir Weephyt",href:"#"}},cumuls:{size:"1x1",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#2E75B6",render:_e},bilan:{size:"1x1",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4",render:on,footer:{label:"Voir les données",href:"#",tab:"donnees"}},irrigations:{size:"1x1",title:"Irrigations",icon:"bi-moisture",color:"#FF8C00",render:xe,footer:{label:"Voir les irrigations",href:`irrigation.html?plot=${A}`}},gel:{size:"1x1",title:"Suivi du risque de gel",icon:"bi-thermometer-snow",color:"#FEE7B4",render:Ki,footer:{label:"Voir les prévisions",href:"previsions.html"}},dpv:{size:"1x1",title:"DPV",icon:"bi-droplet-half",color:"#5E88EC",render:Zi,footer:{label:"Voir les données",href:"#",tab:"donnees"}},thi:{size:"1x1",title:"THI",icon:"bi-heart-pulse",color:"#e0a030",render:Qi,footer:{label:"Voir les données",href:"#",tab:"donnees"}},"temp-rosee":{size:"1x1",title:"Température de rosée",icon:"bi-thermometer",color:"#72B0D8",render:en,footer:{label:"Voir les données",href:"#",tab:"donnees"}},"temp-sol":{size:"1x1",title:"Température du sol",icon:"bi-layers",color:"#795548",render:tn,footer:{label:"Voir les données",href:"#",tab:"donnees"}},maizy:{size:"1x1",title:"Maï'zy",icon:"bi-calendar-check",color:"#2d9e5f",render:nn,footer:{label:"Voir Maï'zy",href:"#"}},tavelure:{size:"1x1",title:"Tavelure Pomme",icon:"bi-exclamation-triangle",color:"#e07050",render:an,footer:{label:"Voir Tavelure",href:"#"}},"suivi-culture":{size:"1x1",title:"Suivi de culture",icon:"bi-flower2",color:"#78d8a0",render:re},decitrait:{size:"1x1",title:"Decitrait",icon:"bi-shield",color:"#6080b0",render:re,footer:{label:"Voir Decitrait",href:"#"}},"previsions-6h":{size:"1x1",title:"Prévisions à 6 heures",icon:"bi-clock",color:"#5b8dd9",render:re,footer:{label:"Voir les prévisions",href:"previsions.html"}},"previsions-jour":{size:"1x1",title:"Prévisions du jour",icon:"bi-sun",color:"#f5c842",render:re,footer:{label:"Voir les prévisions",href:"previsions.html"}},"previsions-tensio":{size:"1x1",title:"Prévisions tensiométrie",icon:"bi-graph-down",color:"#A6C157",render:re,footer:{label:"Voir les prévisions",href:"previsions.html"}},"w-station":{size:"1x1",title:"Station météo",icon:"bi-broadcast",color:"#FBAF05",render:X("w-station"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-thygro":{size:"1x1",title:"Thermomètre-hygromètre",icon:"bi-thermometer-half",color:"#FBAF05",render:X("w-thygro"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-tsol":{size:"1x1",title:"Thermomètre de sol",icon:"bi-layers",color:"#795548",render:X("w-tsol"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-anem":{size:"1x1",title:"Anémomètre",icon:"bi-wind",color:"#616161",render:X("w-anem"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-pyrano":{size:"1x1",title:"Pyranomètre",icon:"bi-sun",color:"#CBCB0B",render:X("w-pyrano"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-lws":{size:"1x1",title:"Capteur d'humectation foliaire",icon:"bi-droplet",color:"#00887E",render:X("w-lws"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-par":{size:"1x1",title:"Capteur PAR",icon:"bi-brightness-high",color:"#4CBB17",render:X("w-par"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-capa":{size:"1x1",title:"Sonde capacitive",icon:"bi-moisture",color:"#ED9A2C",render:X("w-capa"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-tensio":{size:"1x1",title:"Tensiomètre",icon:"bi-graph-down",color:"#A6C157",render:X("w-tensio"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-ec":{size:"1x1",title:"Sonde de fertirrigation",icon:"bi-plug",color:"#2BCDDE",render:X("w-ec"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"profil-capteurs":{size:"1x1",title:"Profil capteurs",icon:"bi-bar-chart",color:"#5b8dd9",render:re},"niveau-reservoir":{size:"1x1",title:"Niveau de réservoir (RFU)",icon:"bi-droplet-fill",color:"#0172A4",render:Pt},"profil-reservoir":{size:"1x1",title:"Profil de réservoir",icon:"bi-clipboard-data",color:"#0172A4",render:Ht}},Mt=()=>`dash-widgets-parcel-${A}`;function ve(){try{const e=JSON.parse(localStorage.getItem(Mt()));if(Array.isArray(e)&&e.length)return e}catch{}return Yi()}function he(e){localStorage.setItem(Mt(),JSON.stringify(e))}function ct(e){const t=P.filter(r=>e.includes(r.id)),i=new Set(t.map(r=>r.model)),n=[...i].some(r=>r.startsWith("CAPA-")),a=[...i].some(r=>_.includes(r)),o=new Set(["previsions-5j","weephyt","cumuls"]);(i.has("P+")||i.has("PT")||i.has("SMV")||i.has("P"))&&o.add("w-station"),i.has("TH")&&o.add("w-thygro"),i.has("T_MINI")&&o.add("w-tsol"),i.has("W")&&o.add("w-anem"),i.has("PYRANO")&&o.add("w-pyrano"),i.has("LWS")&&o.add("w-lws"),i.has("T_GEL")&&o.add("gel"),i.has("PAR")&&o.add("w-par"),n&&o.add("w-capa"),a&&o.add("w-tensio"),i.has("EC")&&o.add("w-ec"),(a||n)&&o.add("bilan"),(!!S.irrigation&&S.irrigation!=="Non irrigué"||z.some(r=>r.plotId===S.id))&&o.add("irrigations");const l=ve(),u=l.filter(r=>o.has(r));u.length!==l.length&&he(u)}function dt(e){const t=ve(),i=a=>{t.includes(a)||t.push(a)},n=e.model;(n==="P+"||n==="PT"||n==="SMV"||n==="P")&&i("w-station"),n==="TH"&&i("w-thygro"),n==="T_MINI"&&i("w-tsol"),n==="W"&&i("w-anem"),n==="PYRANO"&&i("w-pyrano"),n==="LWS"&&i("w-lws"),n==="T_GEL"&&i("gel"),n==="PAR"&&i("w-par"),n==="EC"&&i("w-ec"),n.startsWith("CAPA-")&&(i("w-capa"),i("bilan")),_.includes(n)&&(i("w-tensio"),i("bilan")),he(t)}function Yi(){const e=P.filter(c=>x.linkedSensorIds.includes(c.id)),t=new Set(e.map(c=>c.model)),i=[...t].some(c=>c.startsWith("CAPA-")),n=[...t].some(c=>_.includes(c)),a=["previsions-5j","weephyt","cumuls"];return(t.has("P+")||t.has("PT")||t.has("SMV")||t.has("P"))&&a.push("w-station"),t.has("TH")&&a.push("w-thygro"),t.has("T_MINI")&&a.push("w-tsol"),t.has("W")&&a.push("w-anem"),t.has("PYRANO")&&a.push("w-pyrano"),t.has("LWS")&&a.push("w-lws"),t.has("T_GEL")&&a.push("gel"),t.has("PAR")&&a.push("w-par"),i&&a.push("w-capa"),n&&a.push("w-tensio"),t.has("EC")&&a.push("w-ec"),(n||i)&&a.push("bilan"),(!!S.irrigation&&S.irrigation!=="Non irrigué"||z.some(c=>c.plotId===S.id))&&a.push("irrigations"),a}function de(){const e=document.getElementById("dash-grid");if(!e)return;const t=ve();!t.includes("irrigations")&&z.some(i=>i.plotId===S.id)&&(t.push("irrigations"),he(t)),e.innerHTML="",t.forEach(i=>{const n=Gi[i];if(!n)return;const a=document.createElement("div");a.className=`dash-block dash-block--${n.size}`,a.dataset.id=i,a.draggable=!0;const o=n.footer?`<div class="dash-block-ft"><a class="dash-block-ft-link" href="${n.footer.href}"${n.footer.tab?` data-tab="${n.footer.tab}"`:""}>${n.footer.label} →</a></div>`:"";a.innerHTML=`
      <div class="dash-block-hd" style="color:${n.color}">
        <span style="display:flex;align-items:center;gap:6px"><i class="bi ${n.icon}"></i> ${n.title}</span>
        <button class="dash-menu-btn" data-wid="${i}" title="Options" aria-label="Options">···</button>
      </div>
      <div class="dash-block-body" id="dblock-${i}"></div>
      ${o}`,e.appendChild(a),n.render(a.querySelector(`#dblock-${i}`))}),e.querySelectorAll(".dash-menu-btn").forEach(i=>{i.addEventListener("click",n=>{var r,v,s;n.stopPropagation(),(r=document.querySelector(".dash-dropdown"))==null||r.remove();const a=i.dataset.wid,o=document.createElement("div");o.className="dash-dropdown";const c=a==="irrigations"?`
        <button class="dash-dd-item" data-action="set-vol">Définir le volume limité de la parcelle</button>`:"";o.innerHTML=`${c}<button class="dash-dd-item dash-dd-remove" data-action="remove" data-wid="${a}">Retirer le widget</button>`;const l=i.getBoundingClientRect(),u=e.getBoundingClientRect();o.style.top=`${l.bottom-u.top+4}px`,o.style.right=`${u.right-l.right}px`,e.style.position="relative",e.appendChild(o),(v=o.querySelector('[data-action="remove"]'))==null||v.addEventListener("click",()=>{o.remove();const d=ve().filter(m=>m!==a);he(d),de()}),(s=o.querySelector('[data-action="set-vol"]'))==null||s.addEventListener("click",()=>{o.remove(),Ft("vol")}),setTimeout(()=>document.addEventListener("click",()=>o.remove(),{once:!0}),0)})}),e.querySelectorAll(".dash-block-ft-link[data-tab]").forEach(i=>{i.addEventListener("click",n=>{var a;n.preventDefault(),(a=document.querySelector(`.detail-tab-btn[data-pane="tab-${i.dataset.tab}"]`))==null||a.click()})}),rn(e)}function Et(e,t=380,i=90){const l=t-28-8,u=i-6-20,r=e.flatMap(b=>b.values);let v=Math.min(...r),s=Math.max(...r);v===s&&(v-=1,s+=1);const d=e[0].values.length,m=b=>(28+b/(d-1)*l).toFixed(1),p=b=>(6+u-(b-v)/(s-v)*u).toFixed(1),h=[.25,.5,.75].map(b=>{const w=(6+b*u).toFixed(1);return`<line x1="28" y1="${w}" x2="${t-8}" y2="${w}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),f=[v,(v+s)/2,s].map(b=>`<text x="25" y="${(+p(b)+3.5).toFixed(0)}" text-anchor="end" font-size="9" fill="var(--txt3)">${b.toFixed(0)}</text>`).join(""),y=e.map(b=>`<path d="${b.values.map((g,C)=>`${C?"L":"M"}${m(C)},${p(g)}`).join("")}" fill="none" stroke="${b.color}" stroke-width="1.8" stroke-linejoin="round"/>`).join("");return`<svg width="100%" height="${i}" viewBox="0 0 ${t} ${i}" preserveAspectRatio="none">${f}${h}${y}</svg>`}function Ji(e,t,i,n){const v=(f,y)=>{const b=Math.PI+f*Math.PI,w=Math.PI+y*Math.PI,g=(80+60*Math.cos(b)).toFixed(1),C=(90+60*Math.sin(b)).toFixed(1),M=(80+60*Math.cos(w)).toFixed(1),B=(90+60*Math.sin(w)).toFixed(1);return`M${g},${C} A60,60,0,${y-f>.5?1:0},1,${M},${B}`},s=v(0,1),d=t.filter(f=>f.from<e).map(f=>`<path d="${v(f.from,Math.min(f.to,e))}" fill="none" stroke="${f.color}" stroke-width="12" stroke-linecap="butt"/>`).join(""),m=Math.PI+e*Math.PI,p=(80+60*Math.cos(m)).toFixed(1),h=(90+60*Math.sin(m)).toFixed(1);return`<svg width="160" height="100" viewBox="0 0 160 100">
    <path d="${s}" fill="none" stroke="var(--bdr2)" stroke-width="12" stroke-linecap="butt"/>
    ${d}
    <circle cx="${p}" cy="${h}" r="5" fill="white" stroke="var(--txt3)" stroke-width="1.5"/>
    <text x="80" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="var(--txt)">${n}</text>
    <text x="80" y="96" text-anchor="middle" font-size="9" fill="var(--txt3)">${i}</text>
  </svg>`}function Ui(e){const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],n=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],a=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],o=new Date,c=se.find(d=>d.id===A),l=We.find(d=>d.id===(c==null?void 0:c.orgId)),u=(c==null?void 0:c.ville)||(l==null?void 0:l.ville)||"—",r=(d,m)=>{const p=new Date(o);p.setDate(p.getDate()+d);const h=Math.floor((A*7+d*3)%11/2.2);return{lbl:d===0?"Auj.":t[p.getDay()],date:`${p.getDate()} ${i[p.getMonth()]}`,tmax:$(17+m,34+m),tmin:$(4+m,15+m),pluie:h>=3?$(2,18):0,vent:$(10,35),rafales:$(25,70),wi:h}},v=[0,1,2].map(d=>r(d,0)).concat([3,4].map(d=>r(d,-1))),s=d=>`
    <div class="w-prev5-day">
      <div class="w-prev5-daylbl">${d.lbl}</div>
      <div class="w-prev5-date">${d.date}</div>
      <i class="bi ${n[d.wi]} w-prev5-icon" title="${a[d.wi]}"></i>
      <div class="w-prev5-row"><i class="bi bi-droplet-fill" style="color:#45b7d1;font-size:9px"></i><span>${d.pluie>0?d.pluie+" mm":"—"}</span></div>
      <div class="w-prev5-row w-prev5-tmax"><i class="bi bi-thermometer-high" style="font-size:9px"></i>${d.tmax}°</div>
      <div class="w-prev5-row w-prev5-tmin"><i class="bi bi-thermometer-low" style="font-size:9px"></i>${d.tmin}°</div>
      <div class="w-prev5-row" style="color:var(--txt3)"><i class="bi bi-wind" style="font-size:9px"></i>${d.vent}</div>
      <div class="w-prev5-row" style="color:var(--txt3);font-size:9px"><i class="bi bi-arrow-up-right" style="font-size:9px"></i>${d.rafales}</div>
    </div>`;e.innerHTML=`
    <div class="w-prev5-loc"><i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i> ${u}</div>
    <div class="w-prev5-model-hdr">
      <span class="w-prev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="w-prev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="w-prev5-grid">${v.map(s).join("")}</div>`}function Xi(e){const t=new Date,i=x.crop||S.crop||"",n=[{label:"Herbicides de contact",seed:7},{label:"Fongicides",seed:3},{label:"Herbicides racinaires",seed:11},{label:"Herbicides systémiques",seed:5}],a=Array.from({length:12},(l,u)=>{const r=new Date(t);return r.setHours(r.getHours()+u),r}),o=l=>`${String(l.getHours()).padStart(2,"0")}h`,c=l=>{const u=a.map((r,v)=>(l.seed*17+v*5)%11<6);return a.map((r,v)=>`
      <div class="w-weephyt-dot-wrap" title="${o(r)} — ${u[v]?"Fenêtre OK":"Fenêtre non OK"}">
        <div class="w-weephyt-tl-dot" style="background:${u[v]?"#2d9e5f":"#e07050"}"></div>
        <div class="w-weephyt-tl-lbl">${v%3===0?o(r):""}</div>
      </div>`).join("")};e.innerHTML=`<div class="w-weephyt-wrap">
    <div class="w-weephyt-tl-legend"><span style="color:#2d9e5f">● OK</span><span style="color:#e07050">● Non OK</span></div>
    ${n.map(l=>`
      <div class="w-weephyt-family">
        <div class="w-weephyt-family-label">${l.label}</div>
        <div class="w-weephyt-timeline">${c(l)}</div>
      </div>`).join("")}
    <div class="w-weephyt-src">Via <strong>Weephyt</strong> · ${i||"—"}</div>
  </div>`}const kt=()=>`w-cumuls-state-${A}`;function Bt(){try{return JSON.parse(localStorage.getItem(kt()))||{}}catch{return{}}}function qe(e){const t=Bt();localStorage.setItem(kt(),JSON.stringify({...t,...e}))}function _e(e){const t=P.filter(r=>x.linkedSensorIds.includes(r.id)),i=new Set(t.flatMap(r=>(R[r.model]||[]).map(v=>v.id))),n=`${new Date().getFullYear()}-01-01`,a=Bt(),o=new Set(a.hidden||[]),c=a.dates||{},l=a.cfg||{},u=[{id:"etp",label:"Évapotranspiration",value:D(20,80).toFixed(1),unit:"mm",color:"#c090e0",icon:"bi-sun",show:!0},{id:"pluie",label:"Pluie",value:$(10,50),unit:"mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy",show:i.has("pluie")},{id:"djc",label:"Degrés jours",value:$(40,180),unit:"DJ",color:"#e07050",icon:"bi-thermometer-half",show:i.has("temp"),cfg:!0,cfgLabel:`${l.djMin??0}–${l.djMax??18}°C`,cfgFields:[{key:"djMin",label:"T min",def:0},{key:"djMax",label:"T max",def:18}]},{id:"hfroid",label:"Heures de froid",value:$(5,40),unit:"h",color:"#5b8dd9",icon:"bi-snow",show:i.has("temp"),cfg:!0,cfgLabel:`< ${l.hfSeuil??7.2}°C`,cfgFields:[{key:"hfSeuil",label:"Seuil",def:7.2}]},{id:"humec",label:"Humectation",value:D(2,20).toFixed(1),unit:"h",color:"#78d8a0",icon:"bi-droplet",show:i.has("humec")},{id:"enso",label:"Ensoleillement",value:D(30,90).toFixed(1),unit:"h",color:"#f5c842",icon:"bi-brightness-high",show:!0}].filter(r=>r.show&&!o.has(r.id));e.innerHTML=`<div class="w-cumuls-list">${u.map(r=>{const v=c[r.id]||n;return v.split("-").reverse().join("/"),`
      <div class="w-cumul-item">
        <i class="bi ${r.icon} w-cumul-icon" style="color:${r.color}"></i>
        <div class="w-cumul-body">
          <div class="w-cumul-lbl">${r.label}</div>
          <div class="w-cumul-val" style="color:${r.color}">${r.value}<span class="w-cumul-unit"> ${r.unit}</span></div>
          <div class="w-cumul-date">Depuis le <input type="date" class="w-cumul-date-input" data-cid="${r.id}" value="${v}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px">${r.cfg?`<button class="w-cumul-cfg" data-cid="${r.id}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px;line-height:1"><i class="bi bi-gear"></i> ${r.cfgLabel}</button>`:""}</div>
        </div>
        <button class="w-cumul-del" data-cid="${r.id}" title="Retirer">×</button>
      </div>`}).join("")}</div>`,e.querySelectorAll(".w-cumul-del").forEach(r=>{r.addEventListener("click",v=>{v.stopPropagation(),o.add(r.dataset.cid),qe({hidden:[...o]}),_e(e)})}),e.querySelectorAll(".w-cumul-date-input").forEach(r=>{r.addEventListener("change",()=>{c[r.dataset.cid]=r.value,qe({dates:c})})}),e.querySelectorAll(".w-cumul-cfg").forEach(r=>{r.addEventListener("click",v=>{var p;v.stopPropagation();const s=r.dataset.cid,d=u.find(h=>h.id===s);if(!(d!=null&&d.cfgFields))return;(p=e.querySelector(".w-cumul-cfg-panel"))==null||p.remove();const m=document.createElement("div");m.className="w-cumul-cfg-panel",m.style.gridColumn="1 / -1",m.innerHTML=`<div class="w-cumul-cfg-title">Paramétrer ${d.label}</div>`+d.cfgFields.map(h=>`
          <label class="w-cumul-cfg-row">
            <span>${h.label} (°C)</span>
            <input type="number" class="w-cumul-cfg-inp" data-key="${h.key}" value="${l[h.key]??h.def}" step="0.1">
          </label>`).join("")+'<button class="w-cumul-cfg-ok">OK</button>',r.closest(".w-cumul-item").after(m),m.querySelector(".w-cumul-cfg-ok").addEventListener("click",()=>{m.querySelectorAll(".w-cumul-cfg-inp").forEach(h=>{l[h.dataset.key]=parseFloat(h.value)||0}),qe({cfg:l}),m.remove(),_e(e)})})})}function Ki(e){if(!P.filter(s=>x.linkedSensorIds.includes(s.id)).some(s=>s.model==="T_GEL")){e.innerHTML='<div class="dash-empty">Capteur T_GEL non lié</div>';return}const i=25,n=D(0,5),a=Array.from({length:i},(s,d)=>+(n+d*.18+D(-.8,.8)).toFixed(1)),o=a.map(s=>+(s-D(1,2.5)).toFixed(1)),c=Et([{values:a,color:"#23B19B"},{values:o,color:"#5E88EC"}],380,100),l=a[i-1],u=o[i-1],r=$(5,8),v=String(Math.floor(Math.random()*60)).padStart(2,"0");e.innerHTML=`<div class="w-gel-wrap">
    <div class="w-gel-legend">
      <span style="color:#23B19B"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sèche</span>
      <span style="color:#5E88EC"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. humide</span>
      <span style="font-size:10px;color:var(--txt3)">12 dernières heures</span>
    </div>
    <div class="w-gel-chart">${c}</div>
    <div class="w-gel-cards">
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. sèche </span><span class="w-gel-card-val" style="color:#23B19B">${l}°C</span></div>
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. humide </span><span class="w-gel-card-val" style="color:#5E88EC">${u}°C</span></div>
    </div>
    <div class="w-gel-meteo">
      <div class="w-gel-meteo-row"><i class="bi bi-sunrise" style="color:#CBCB0B"></i><span>Lever du soleil</span><strong>${r}h${v}</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-cloud" style="color:#8090a0"></i><span>Couverture nuageuse</span><strong>${$(20,80)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i><span>Humidité</span><strong>${$(60,90)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-wind" style="color:#616161"></i><span>Vent moyen</span><strong>${$(5,25)} km/h</strong></div>
    </div>
  </div>`}function Zi(e){const t=P.filter(d=>x.linkedSensorIds.includes(d.id));if(!t.some(d=>{const m=R[d.model]||[];return m.some(p=>p.id==="temp")&&m.some(p=>p.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=D(18,30),a=$(40,85),c=+(.611*Math.exp(17.27*n/(n+237.3))*(1-a/100)).toFixed(2),l=Math.min(c/2,1),u=c<.4?"#5b8dd9":c<.8?"#2d9e5f":c<1.2?"#f5a030":"#e07050",r=c<.4?"Transpiration faible":c<.8?"Transpiration optimale":c<1.2?"Forte transpiration":"Stress hydrique",v=[{from:0,to:.2,color:"#5b8dd9"},{from:.2,to:.4,color:"#45b7d1"},{from:.4,to:.6,color:"#2d9e5f"},{from:.6,to:.8,color:"#a0c840"},{from:.8,to:.9,color:"#f5a030"},{from:.9,to:1,color:"#e07050"}],s=t.find(d=>{const m=R[d.model]||[];return m.some(p=>p.id==="temp")&&m.some(p=>p.id==="humidite")});e.innerHTML=`<div class="w-dpv-wrap">
    <div class="w-dpv-gauge" style="color:${u}">${Ji(l,v,r,c+" kPa")}</div>
    <div class="w-dpv-details">
      <div class="w-dpv-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${n.toFixed(1)} °C</div>
      <div class="w-dpv-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${a} %</div>
    </div>
    ${s?`<div class="w-sensor-src">${ee[s.model]||s.model} · ${s.serial}</div>`:""}
  </div>`}function Qi(e){if(!P.filter(d=>x.linkedSensorIds.includes(d.id)).some(d=>{const m=R[d.model]||[];return m.some(p=>p.id==="temp")&&m.some(p=>p.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=D(20,35),a=$(45,90),o=+(n-.55*(1-a/100)*(n-14.5)).toFixed(0),c=o<68?"#2d9e5f":o<72?"#f5c842":o<79?"#f5a030":"#e07050",l=o<68?"Confort":o<72?"Stress léger":o<79?"Stress modéré":"Stress sévère",u=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],r=new Date,v=Array.from({length:3},(d,m)=>{const p=new Date(r);return p.setDate(p.getDate()+m+1),{day:u[p.getDay()],m:$(64,72),j:$(68,80),s:$(62,70)}}),s=d=>d<68?"#2d9e5f":d<72?"#f5c842":"#f5a030";e.innerHTML=`<div class="w-thi-wrap">
    <div class="w-thi-header">
      <div class="w-thi-score" style="color:${c}">
        <div class="w-thi-val">${o}</div>
        <div class="w-thi-status">${l}</div>
      </div>
      <button class="w-thi-info-btn" title="Légende THI"><i class="bi bi-info-circle"></i></button>
    </div>
    <div class="w-thi-details">
      <div class="w-thi-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${n.toFixed(1)} °C</div>
      <div class="w-thi-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${a} %</div>
    </div>
    <div class="w-thi-forecast">
      <div class="w-thi-fc-label">Prévisions</div>
      ${v.map(d=>`<div class="w-thi-fc-row">
        <span class="w-thi-fc-day">${d.day}</span>
        <span class="w-thi-fc-val" style="color:${s(d.m)}">${d.m}</span>
        <span class="w-thi-fc-val" style="color:${s(d.j)}">${d.j}</span>
        <span class="w-thi-fc-val" style="color:${s(d.s)}">${d.s}</span>
      </div>`).join("")}
      <div class="w-thi-fc-legend"><span>Matin</span><span>Journée</span><span>Soir</span></div>
    </div>
  </div>`,e.querySelector(".w-thi-info-btn").addEventListener("click",d=>{d.stopPropagation();const m=e.querySelector(".w-thi-legend");if(m){m.remove();return}const p=document.createElement("div");p.className="w-thi-legend",p.innerHTML=`
      <div class="w-thi-legend-title">Échelle THI</div>
      <div class="w-thi-legend-row" style="color:#2d9e5f"><span class="w-thi-legend-range">&lt; 68</span><span>Confort</span></div>
      <div class="w-thi-legend-row" style="color:#f5c842"><span class="w-thi-legend-range">68 – 71</span><span>Stress léger</span></div>
      <div class="w-thi-legend-row" style="color:#f5a030"><span class="w-thi-legend-range">72 – 78</span><span>Stress modéré</span></div>
      <div class="w-thi-legend-row" style="color:#e07050"><span class="w-thi-legend-range">≥ 79</span><span>Stress sévère</span></div>`,e.querySelector(".w-thi-wrap").insertBefore(p,e.querySelector(".w-thi-details"))})}function en(e){if(!P.filter(u=>x.linkedSensorIds.includes(u.id)).some(u=>{const r=R[u.model]||[];return r.some(v=>v.id==="temp")&&r.some(v=>v.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=72,a=D(14,22),o=Array.from({length:n},(u,r)=>+(a+6*Math.sin(r/24*2*Math.PI-Math.PI/2)+D(-.5,.5)).toFixed(1)),c=Array.from({length:n},(u,r)=>Math.max(30,Math.min(100,70-15*Math.sin(r/24*2*Math.PI-Math.PI/2)+D(-3,3)))),l=o.map((u,r)=>{const v=c[r]/100,s=17.27,d=237.3,m=Math.log(v)+s*u/(d+u);return+(d*m/(s-m)).toFixed(1)});e.innerHTML=`<div class="w-temprosee-wrap">
    ${Et([{values:o,color:"#FBAF05"},{values:l,color:"#72B0D8"}],380,100)}
    <div class="w-temprosee-legend">
      <span style="color:#FBAF05"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Température (${o[n-1]}°C)</span>
      <span style="color:#72B0D8"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Point de rosée (${l[n-1]}°C)</span>
      <span style="font-size:10px;color:var(--txt3)">3 derniers jours</span>
    </div>
  </div>`}function tn(e){if(!P.filter(k=>x.linkedSensorIds.includes(k.id)).some(k=>(R[k.model]||[]).some(H=>H.id==="tsol"))){e.innerHTML='<div class="dash-empty">Capteur T. sol requis</div>';return}const n=48,a=D(14,20),o=Array.from({length:n},(k,H)=>+(a+3*Math.sin(H/24*2*Math.PI-Math.PI/2)+D(-.4,.4)).toFixed(1)),c=15,l=22,u=380,r=100,v=28,s=8,d=6,m=20,p=u-v-s,h=r-d-m,f=[...o,c,l],y=Math.min(...f)-1,b=Math.max(...f)+1,w=k=>(v+k/(n-1)*p).toFixed(1),g=k=>(d+h-(k-y)/(b-y)*h).toFixed(1),C=+g(c),M=+g(l),B=[.25,.5,.75].map(k=>{const H=(d+k*h).toFixed(1);return`<line x1="${v}" y1="${H}" x2="${u-s}" y2="${H}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),I=o.map((k,H)=>`${H?"L":"M"}${w(H)},${g(k)}`).join("");e.innerHTML=`<div class="w-tsol-wrap">
    <svg width="100%" height="${r}" viewBox="0 0 ${u} ${r}" preserveAspectRatio="none">
      ${B}
      <rect x="${v}" y="${M.toFixed(1)}" width="${p}" height="${(C-M).toFixed(1)}" fill="rgba(45,158,95,.1)"/>
      <line x1="${v}" y1="${C.toFixed(1)}" x2="${u-s}" y2="${C.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <line x1="${v}" y1="${M.toFixed(1)}" x2="${u-s}" y2="${M.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <path d="${I}" fill="none" stroke="#795548" stroke-width="2" stroke-linejoin="round"/>
      <text x="${v-3}" y="${d+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${b.toFixed(0)}</text>
      <text x="${v-3}" y="${d+h+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${y.toFixed(0)}</text>
    </svg>
    <div class="w-tsol-legend">
      <span style="color:#795548"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sol · ${o[n-1]}°C</span>
      <span style="color:#2d9e5f;font-size:10px"><i class="bi bi-square-fill" style="opacity:.3"></i> Zone optimale ${c}–${l}°C</span>
      <span style="font-size:10px;color:var(--txt3)">48 dernières heures</span>
    </div>
  </div>`}function nn(e){const t=(x.crop||S.crop||"").toLowerCase();if(!t.includes("maïs")&&!t.includes("mais")){e.innerHTML='<div class="dash-empty">Culture Maïs requise</div>';return}const i=[{name:"Farmflex 253",target:1320},{name:"DKC 3230",target:1380},{name:"Ronaldinio",target:1290},{name:"Banguy",target:1350}],n=i[A%i.length],a=S.degresJour||$(600,1200),o=Math.min(a/n.target,1),c=Math.max(0,n.target-a),l=new Date,u=Math.round(c/10),r=new Date(l);r.setDate(r.getDate()+Math.max(0,u-5));const v=new Date(l);v.setDate(v.getDate()+u+5);const s=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],d=m=>`${m.getDate()} ${s[m.getMonth()]}`;e.innerHTML=`<div class="w-maizy-wrap">
    <div class="w-maizy-title">Récolte prévisionnelle</div>
    <div class="w-maizy-dates">${d(r)} — ${d(v)}</div>
    <div class="w-maizy-bar-wrap">
      <div class="w-maizy-bar-track"><div class="w-maizy-bar-fill" style="width:${(o*100).toFixed(1)}%"></div></div>
      <div class="w-maizy-bar-pct">${(o*100).toFixed(0)} %</div>
    </div>
    <div class="w-maizy-dj">
      <span class="w-maizy-dj-val">${a.toFixed?a.toFixed(1):a}</span>
      <span class="w-maizy-dj-sep"> / ${n.target} DJ</span>
      <span class="w-maizy-dj-vari">${n.name}</span>
    </div>
    <a class="w-maizy-link" href="#">Voir le détail <i class="bi bi-arrow-right"></i></a>
  </div>`}function an(e){const t=(x.crop||S.crop||"").toLowerCase();if(!t.includes("pommier")&&!t.includes("pomme")){e.innerHTML='<div class="dash-empty">Culture Pommier requise</div>';return}const i=new Date,n=new Date(i);n.setDate(n.getDate()-$(2,8));const a=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],o=v=>`${v.getDate()} ${a[v.getMonth()]}`,c=$(8,24),l=$(80,280),u=l>200?"Élevé":l>120?"Modéré":"Léger",r=l>200?"#e07050":l>120?"#f5a030":"#2d9e5f";e.innerHTML=`<div class="w-tav-wrap">
    <div class="w-tav-ep">Dernier épisode · <strong>${o(n)}</strong></div>
    <div class="w-tav-stats">
      <div class="w-tav-stat"><span class="w-tav-stat-val">${c}h</span><span class="w-tav-stat-lbl">Durée</span></div>
      <div class="w-tav-stat"><span class="w-tav-stat-val">${l} DH</span><span class="w-tav-stat-lbl">Degrés-heures</span></div>
    </div>
    <div class="w-tav-risk" style="color:${r}">
      <i class="bi bi-circle-fill" style="font-size:8px;vertical-align:middle"></i>
      Risque d'infection estimé <strong>${u}</strong>
    </div>
    <a class="w-maizy-link" href="#">Afficher l'historique <i class="bi bi-arrow-right"></i></a>
  </div>`}const jt=[{id:"j7",label:"J-7"},{id:"j1",label:"J-1"},{id:"j0",label:"J0"},{id:"last",label:"Dernières données"}],sn=jt.filter(e=>e.id==="j7"||e.id==="j1"),ut=()=>`w-reservoir-agg-${A}`,mt=()=>`w-profil-reservoir-agg-${A}`;function At(e,t="j0"){return localStorage.getItem(e())||t}function It(e,t){localStorage.setItem(e(),t)}function Tt(e){const t=S.reserveHydrique||80,i=(S.id*17+13)%41,n={j7:-8,j1:-2,j0:0,last:1},a=Math.min(95,Math.max(15,55+i+(n[e]||0))),o=Math.round(t*a/100);return{rhu:t,pct:a,mm:o}}function Lt(e,t=jt){return`<select class="w-reservoir-agg-sel">
    ${t.map(i=>`<option value="${i.id}"${i.id===e?" selected":""}>${i.label}</option>`).join("")}
  </select>`}function Pt(e){const t=At(ut),{rhu:i,pct:n,mm:a}=Tt(t),o=n>60?"#2d9e5f":n>35?"#e07820":"#e04040";e.innerHTML=`
    <div class="w-bilan-layout">
      ${Lt(t)}
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track"><div class="w-bilan-gauge-fill" style="width:${n}%;background:${o}"></div></div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${o}">${a} mm / ${i} mm RFU (${n} %)</span>
          <span>${i} mm</span>
        </div>
      </div>
    </div>`,e.querySelector(".w-reservoir-agg-sel").addEventListener("change",c=>{It(ut,c.target.value),Pt(e)})}function Ht(e){const t=At(mt,"j1"),{pct:i}=Tt(t),n=(S.id*17+13)%41,a=[{label:"10 cm",pct:Math.min(100,Math.max(0,i+n%12-5)),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,Math.max(0,i+n%8)),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,Math.max(0,i-n%10+3)),color:"#a07010"}];e.innerHTML=`
    <div class="w-bilan-layout">
      ${Lt(t,sn)}
      <div class="w-bilan-horizons">
        ${a.map(o=>`
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${o.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${o.pct}%;background:${o.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${o.color}">${o.pct} %</span>
          </div>`).join("")}
      </div>
    </div>`,e.querySelector(".w-reservoir-agg-sel").addEventListener("change",o=>{It(mt,o.target.value),Ht(e)})}function re(e){e.innerHTML=`<div class="dash-empty" style="padding-top:20px">
    <i class="bi bi-hourglass" style="font-size:20px;opacity:.3;display:block;margin-bottom:6px"></i>
    Widget bientôt disponible
  </div>`}function X(e){return t=>{var r,v;const i=P.filter(s=>x.linkedSensorIds.includes(s.id)),n={"w-station":s=>["P+","PT","SMV","P"].includes(s.model),"w-thygro":s=>s.model==="TH","w-tsol":s=>s.model==="T_MINI","w-anem":s=>s.model==="W","w-pyrano":s=>s.model==="PYRANO","w-lws":s=>s.model==="LWS","w-par":s=>s.model==="PAR","w-capa":s=>s.model.startsWith("CAPA-"),"w-tensio":s=>_.includes(s.model),"w-ec":s=>s.model==="EC"},a=i.find(n[e]||(()=>!1));if(!a){t.innerHTML='<div class="dash-empty">Aucun capteur compatible lié</div>';return}const o=R[a.model]||[],l=({"w-station":()=>{const s=[];return o.some(d=>d.id==="temp")&&s.push({label:"Température",val:$(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"}),o.some(d=>d.id==="pluie")&&s.push({label:"Pluie 24h",val:$(0,14)+" mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy"}),o.some(d=>d.id==="humidite")&&s.push({label:"Humidité",val:$(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}),s},"w-thygro":()=>[{label:"Température",val:$(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"},{label:"Humidité",val:$(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}],"w-tsol":()=>[{label:"Temp. sol",val:$(8,22)+" °C",color:"#795548",icon:"bi-layers"}],"w-anem":()=>[{label:"Vitesse",val:$(0,40)+" km/h",color:"#616161",icon:"bi-wind"},{label:"Direction",val:["N","NE","E","SE","S","SO","O","NO"][$(0,7)],color:"#616161",icon:"bi-compass"}],"w-pyrano":()=>[{label:"Rayonnement",val:$(100,900)+" W/m²",color:"#CBCB0B",icon:"bi-sun"}],"w-lws":()=>[{label:"Humectation",val:D(0,12).toFixed(1)+" h/j",color:"#00887E",icon:"bi-droplet"}],"w-par":()=>[{label:"PPFD",val:$(100,2e3)+" µmol/m²/s",color:"#4CBB17",icon:"bi-brightness-high"}],"w-capa":()=>o.filter(s=>s.id.startsWith("vwc")).slice(0,3).map(s=>({label:s.name,val:$(15,45)+" %vol",color:s.color,icon:"bi-moisture"})),"w-tensio":()=>[{label:"Potentiel hydrique",val:$(10,150)+" kPa",color:"#A6C157",icon:"bi-graph-down"}],"w-ec":()=>[{label:"Conductivité",val:D(.1,3).toFixed(2)+" mS/cm",color:"#2BCDDE",icon:"bi-plug"}]}[e]||(()=>[]))();t.innerHTML=`
      <div class="w-sensor-rows">${l.map(s=>`
        <div class="w-sensor-row">
          <i class="bi ${s.icon}" style="color:${s.color};flex-shrink:0"></i>
          <span class="w-sensor-val" style="color:${s.color}">${s.val}</span>
          <span class="w-sensor-lbl">${s.label}</span>
        </div>`).join("")}</div>
      <div class="w-sensor-src">${ee[a.model]||a.model} · ${a.serial}</div>`;const u=(r=t.closest(".dash-block"))==null?void 0:r.querySelector(".dash-block-ft-link");if(u){const s=((v=document.getElementById("time-step"))==null?void 0:v.value)||"1h";u.href=`capteur-graphique.html?sensorId=${a.id}&parcelId=${A}&period=${J}&step=${s}`,u.removeAttribute("data-tab")}}}function on(e){const t=P.filter(f=>x.linkedSensorIds.includes(f.id)),i=t.some(f=>f.model.startsWith("CAPA-")),n=t.some(f=>_.includes(f.model)),a=S.reserveHydrique||80,o=(S.id*17+13)%41,c=Math.min(95,Math.max(20,55+o)),l=Math.round(a*c/100),u=4+o%5-2,r=Math.max(2,Math.min(6,u)),v=Math.round(r*7-l*.3),s=Math.max(0,v),d=c>60?"#2d9e5f":c>35?"#e07820":"#e04040",m=c>60?"Réserve suffisante":c>35?"Réserve à surveiller":"Réserve critique",p=c>60?"bi-check-circle-fill":c>35?"bi-exclamation-circle-fill":"bi-x-circle-fill";if(!i&&!n){e.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:var(--txt3)">
      <i class="bi bi-droplet" style="font-size:24px"></i>
      <div style="font-size:13px;text-align:center">Ajoutez une sonde capacitive ou un tensiomètre pour suivre l'état hydrique</div>
    </div>`;return}const h=i?[{label:"10 cm",pct:Math.min(100,c+o%12-5),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,c+o%8),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,c-o%10+3),color:"#a07010"}]:[{label:"Potentiel",pct:c,color:"#5b8dd9"}];e.innerHTML=`
    <div class="w-bilan-layout">
      <div class="w-bilan-status" style="color:${d}">
        <i class="bi ${p}"></i> ${m}
      </div>
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track">
          <div class="w-bilan-gauge-fill" style="width:${c}%;background:${d}"></div>
        </div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${d}">${l} mm / ${a} mm RFU (${c} %)</span>
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
          <div class="w-bilan-kpi-val" style="color:${s>0?"#0172A4":"var(--ok)"}">
            ${s>0?`${s} <span class="w-irrig-unit">mm</span>`:'<i class="bi bi-check2" style="font-size:14px"></i>'}
          </div>
        </div>
      </div>
    </div>`}function Ft(e){const t=document.createElement("div");if(t.className="journal-form-overlay",e==="vol"){const i=Ie(A).volumeMaxM3??"";t.innerHTML=`
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
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const n=t.querySelector("#iwa-vol-inp").value;ne(A,{volumeMaxM3:n!==""?parseInt(n):null}),t.remove(),document.querySelector("#dblock-irrigations")&&xe(document.querySelector("#dblock-irrigations"))}}else{const i=x.irrigation||"";t.innerHTML=`
      <div class="journal-form-modal">
        <div class="journal-form-title">Type d'irrigation</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="iwa-type-sel" class="journal-form-input">
            ${bt.map(n=>`<option${n===(i||"Non renseigné")?" selected":""}>${n}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const n=t.querySelector("#iwa-type-sel").value;O({irrigation:n}),t.remove(),document.querySelector("#dblock-irrigations")&&xe(document.querySelector("#dblock-irrigations"))}}t.addEventListener("click",i=>{i.target===t&&t.remove()})}function qt(e,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",o=>{o.target===i&&n()}),i.querySelector("#irr-cf-close").addEventListener("click",n),i.querySelector("#irr-cf-cancel").addEventListener("click",n),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),t()})}function Rt(e,t){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const i=document.createElement("div");i.className="irr-save-confirm",i.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(o=>`<div>${o}</div>`).join("")}</div>
      <a href="irrigation.html?plot=${A}" class="irr-save-confirm-link">Gérer les irrigations de toutes mes parcelles &gt;</a>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",o=>{o.target===i&&n()}),i.querySelector("#irr-confirm-close").addEventListener("click",n)}function pt(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Date</label>
        <input type="date" id="irr-m-s-date" class="journal-form-input" value="${ae}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Quantité (mm)</label>
        <input type="number" id="irr-m-s-qty" class="journal-form-input" value="10" min="1">
      </div>
      <div class="journal-form-actions">
        <button class="btn-secondary" id="irr-m-s-cancel">Annuler</button>
        <button id="irr-m-s-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#irr-m-s-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-s-save").onclick=()=>{const i=t.querySelector("#irr-m-s-date").value,n=parseInt(t.querySelector("#irr-m-s-qty").value)||0;if(!i||!n)return;const a=i>ae,o=()=>{z.push({iso:i,mm:n,real:!a,plotId:S.id,fromStrategy:!1}),ft(),t.remove(),xe(e),Rt("Irrigation enregistrée",[`Date : ${Ne(i)}`,`Quantité : ${n} mm`])},c=z.filter(l=>l.plotId===S.id&&l.iso===i);if(c.length){qt(c.length,()=>{z.splice(0,z.length,...z.filter(l=>!(l.plotId===S.id&&l.iso===i))),o()});return}o()}}function vt(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une saison d'irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Début</label>
        <input type="date" id="irr-m-sa-debut" class="journal-form-input" value="${ae}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Fin</label>
        <input type="date" id="irr-m-sa-fin" class="journal-form-input" value="${ei(ae,120)}">
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
    </div>`,document.body.appendChild(t);const i=()=>{const n=t.querySelector("#irr-m-sa-debut").value,a=t.querySelector("#irr-m-sa-fin").value,o=parseInt(t.querySelector("#irr-m-sa-qty").value)||0,c=parseInt(t.querySelector("#irr-m-sa-freq").value)||0,l=t.querySelector("#irr-m-sa-preview");if(!n||!a||c<=0){l.textContent="—";return}let u=0,r=new Date(n),v=new Date(a);for(;r<=v&&u<200;)u++,r.setDate(r.getDate()+c);if(u>0){const s=S.area>0?Math.round(u*o*S.area*10):0,d=s>0?` · ${s.toLocaleString("fr-FR")} m³`:"";l.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${u} irrigations · ${u*o} mm${d}</span>`}else l.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'};i(),t.querySelector("#irr-m-sa-debut").addEventListener("change",i),t.querySelector("#irr-m-sa-fin").addEventListener("change",i),t.querySelector("#irr-m-sa-qty").addEventListener("input",i),t.querySelector("#irr-m-sa-freq").addEventListener("input",i),t.addEventListener("click",n=>{n.target===t&&t.remove()}),t.querySelector("#irr-m-sa-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-sa-save").onclick=()=>{const n=t.querySelector("#irr-m-sa-debut").value,a=t.querySelector("#irr-m-sa-fin").value,o=parseInt(t.querySelector("#irr-m-sa-qty").value)||10,c=parseInt(t.querySelector("#irr-m-sa-freq").value)||7;if(!n||!a)return;const l=[];let u=new Date(n),r=new Date(a);for(;u<=r&&l.length<200;)l.push(new Date(u)),u.setDate(u.getDate()+c);const v=Dt(),s=()=>{l.forEach(m=>{const p=m.toISOString().slice(0,10);z.push({iso:p,mm:o,real:p<=ae,plotId:S.id,fromStrategy:!0,seasonId:v})}),ft(),t.remove(),xe(e),Rt("Saison enregistrée",[`Début : ${Ne(n)} · Fin : ${Ne(a)}`,`${l.length} irrigations · ${o} mm · tous les ${c} j`])},d=z.filter(m=>m.plotId===S.id&&m.iso>=n&&m.iso<=a);if(d.length){qt(d.length,()=>{z.splice(0,z.length,...z.filter(m=>!(m.plotId===S.id&&m.iso>=n&&m.iso<=a))),s()});return}s()}}function xe(e){var p,h,f,y,b;const t=z.filter(w=>w.plotId===S.id),i=t.filter(w=>w.real),n=t.filter(w=>!w.real),a=i.reduce((w,g)=>w+g.mm,0),o=n.reduce((w,g)=>w+g.mm,0),c=a+o,l=x.irrigation||S.irrigation;let u="";if(t.some(w=>w.fromStrategy)){const w=[...t].sort((B,I)=>B.iso.localeCompare(I.iso)),g=w[w.length-1],C=w[w.length-2],M=C?Math.round((new Date(g.iso)-new Date(C.iso))/864e5):null;u=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${g.mm} mm</strong>${M?` tous les <strong>${M} jours</strong>`:""}.</div>
      </div>`}const v=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-act-saisie">+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" type="button" id="w-irrig-act-saison">↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`,d=l&&!new Set(["Non irrigué","Non renseigné",""]).has(l),m=()=>{var g;const w=(g=e.closest(".dash-block"))==null?void 0:g.querySelector(".dash-block-ft-link");w&&(w.textContent=d?"Voir les irrigations →":"Gérer les irrigations →")};if(!d){e.innerHTML=`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez préciser un type d'irrigation.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-set-type" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,(p=e.querySelector("#w-irrig-set-type"))==null||p.addEventListener("click",()=>Ft("type")),m();return}if(!t.length){e.innerHTML=`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3)">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${v}
      </div>`,(h=e.querySelector("#w-irrig-act-saisie"))==null||h.addEventListener("click",()=>pt(e)),(f=e.querySelector("#w-irrig-act-saison"))==null||f.addEventListener("click",()=>vt(e)),m();return}e.innerHTML=`
    <div class="w-irrig-layout">
      <div class="w-irrig-kpis">
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Effectuées</div>
          <div class="w-irrig-kpi-val" style="color:#E07820">${a} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Planifiées</div>
          <div class="w-irrig-kpi-val" style="color:#FFB705">${o} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Total</div>
          <div class="w-irrig-kpi-val" style="color:var(--txt3)">${c} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${u}
      ${v}
    </div>`,(y=e.querySelector("#w-irrig-act-saisie"))==null||y.addEventListener("click",()=>pt(e)),(b=e.querySelector("#w-irrig-act-saison"))==null||b.addEventListener("click",()=>vt(e)),m()}function rn(e){let t=null;e.querySelectorAll(".dash-block").forEach(i=>{i.addEventListener("dragstart",n=>{t=i,n.dataTransfer.effectAllowed="move",setTimeout(()=>i.classList.add("dash-drag-ghost"),0)}),i.addEventListener("dragend",()=>{i.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(n=>n.classList.remove("dash-drag-over")),t=null,he([...e.querySelectorAll(".dash-block")].map(n=>n.dataset.id))}),i.addEventListener("dragover",n=>{n.preventDefault(),!(!t||i===t)&&(n.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),i.classList.add("dash-drag-over"))}),i.addEventListener("dragleave",()=>{i.classList.remove("dash-drag-over")}),i.addEventListener("drop",n=>{if(n.preventDefault(),!t||i===t)return;i.classList.remove("dash-drag-over");const a=[...e.querySelectorAll(".dash-block")],o=a.indexOf(t),c=a.indexOf(i);o<c?i.after(t):i.before(t)})})}
