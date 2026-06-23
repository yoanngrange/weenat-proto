import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as oe}from"./plots-DhtWL7s_.js";import{s as P}from"./sensors-CRadjF8G.js";import{o as Ve}from"./orgs-DnFmvGlp.js";import{m as ne}from"./members-Cr98hVG_.js";import{u as wt}from"./breadcrumb-CzFWtd6d.js";import{d as ae,c as xe}from"./store-c0FlIf2T.js";import{I as O,g as Wt,s as $t}from"./irrigations-C22Dtsoo.js";import{S as Vt,a as qe,E as Gt,I as xt}from"./constants-CJpDUNiw.js";const Ct=new URLSearchParams(window.location.search),j=parseInt(Ct.get("id")),C=oe.find(e=>e.id===j);function $(e,t){return Math.floor(Math.random()*(t-e+1))+e}function R(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}const Ge=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul d'ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",base:()=>$(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#72B0D8",base:()=>$(2,16),isCumul:!1}],Yt={id:"irrigation",name:"Irrigation",unit:"mm",color:"#FF8C00",base:()=>0,isCumul:!0,chartType:"bar",isIrrigation:!0},D={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],SMV:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)}],"CHP-15/30":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CHP-30/60":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CHP-60/90":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CAPA-30-3":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>$(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>$(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>$(15,45)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CAPA-60-6":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>$(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>$(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>$(15,45)},{id:"vwc40",name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",base:()=>$(17,43)},{id:"vwc50",name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",base:()=>$(18,42)},{id:"vwc60",name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",base:()=>$(18,42)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],T_MINI:[{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],LWS:[{id:"humec",name:"Humectation foliaire",unit:"h",color:"#00887E",base:()=>$(0,12)}],T_GEL:[{id:"tseche",name:"Temp. sèche",unit:"°C",color:"#23B19B",base:()=>$(-2,12)},{id:"thumide",name:"Temp. humide",unit:"°C",color:"#5E88EC",base:()=>$(-4,10)}],W:[{id:"_vent",name:"Vent",unit:"km/h · direction",color:"#7bc4b0",isWindComposite:!0,base:()=>$(0,40)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>R(.1,3)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>$(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>$(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}],PAR:[{id:"par",name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#c47a00",base:()=>$(0,2e3)}]},_=["CHP-15/30","CHP-30/60","CHP-60/90"],Oe=[{name:"Tensiomètre (CHP)",models:new Set(["CHP-15/30","CHP-30/60","CHP-60/90"])},{name:"Sonde capacitive (CAPA)",models:new Set(["CAPA-30-3","CAPA-60-6"])},{name:"Sonde fertirrigation (EC)",models:new Set(["EC"])},{name:"Thermomètre de sol (T_MINI)",models:new Set(["T_MINI"])}];function Ne(e){return Oe.find(t=>t.models.has(e))||null}const Jt={"CAPA-30-3":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"}],"CAPA-60-6":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"},{depth:40,label:"40 cm",vwcColor:"#949494",tsolColor:"#804828"},{depth:50,label:"50 cm",vwcColor:"#870021",tsolColor:"#603818"},{depth:60,label:"60 cm",vwcColor:"#F608C2",tsolColor:"#402810"}]},Ue=["CAPA-30-3","CAPA-60-6"],ee={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function Ut(e,t=null,i=null,n=null){const a=Math.max(2,Math.min(200,Math.floor(fe()/be()))),o=Array.from({length:a},()=>$(5,35)),l=o.map(E=>Math.min(E+$(3,18),80)),c=Array.from({length:a},()=>$(0,359)),u=600,d=200,f=46,s=16,r=16,m=28,p=u-f-s,h=d-r-m,v=Math.ceil(Math.max(...l)/10)*10||50,g=E=>f+E/Math.max(a-1,1)*p,b=E=>r+h-E/v*h,w=l.map((E,A)=>`${g(A).toFixed(1)},${b(E).toFixed(1)}`).join("L"),y=[...o].reverse().map((E,A)=>`${g(a-1-A).toFixed(1)},${b(E).toFixed(1)}`).join("L"),S=`M${w}L${y}Z`,M=o.map((E,A)=>`${A?"L":"M"}${g(A).toFixed(1)},${b(E).toFixed(1)}`).join(""),k=[.25,.5,.75].map(E=>{const A=(r+h-E*h).toFixed(1);return`<line x1="${f}" y1="${A}" x2="${u-s}" y2="${A}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),T=[0,.5,1].map(E=>{const A=r+h-E*h;return`<text x="${f-4}" y="${(A+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(E*v)}</text>`}).join(""),B=`<line x1="${f}" y1="${r+h}" x2="${u-s}" y2="${r+h}" stroke="var(--bdr2)" stroke-width="1"/>`,H=Math.max(1,Math.floor(a/6));let F="";for(let E=0;E<a;E+=H){const A=(a-1-E)/Math.max(a-1,1)*fe();F+=`<text x="${g(E).toFixed(1)}" y="${(r+h+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Me(A)}</text>`}const W=Math.max(1,Math.round(a/25)),Z=[];for(let E=0;E<a;E+=W){const A=g(E).toFixed(1),N=(r+h*.35).toFixed(1);Z.push(`<g transform="translate(${A},${N}) rotate(${c[E]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const q=document.createElement("div");q.className="chart-card",n&&(q.dataset.cardKey=n,q.draggable=!0);const ge=t?`<span class="chart-card-source">${t}</span>`:"",I=i!=null?`<span class="chart-card-emission">il y a ${i} min</span>`:"";q.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
      <div class="chart-card-meta">${ge}${I}</div>
    </div>
    <svg width="100%" height="${d}" viewBox="0 0 ${u} ${d}" preserveAspectRatio="none">
      ${T}${k}${B}${F}
      <path d="${S}" fill="#7bc4b0" opacity=".18"/>
      <path d="${M}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${Z.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(q)}const Xt=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let x={};function Kt(){const e=xe(j);if(x={...C,...e},!x.linkedSensorIds){const n=P.filter(a=>a.parcelIds.includes(j)).map(a=>a.id);x.linkedSensorIds=e.linkedSensorIds??n}x.integrations||(x.integrations=[...C.integrations||[]]),x.alertes||(x.alertes=[]);const t=P.filter(n=>x.linkedSensorIds.includes(n.id)),i=Oe.find(n=>t.some(a=>n.models.has(a.model)));i&&Oe.some(a=>a!==i&&t.some(o=>a.models.has(o.model)))&&(x.linkedSensorIds=x.linkedSensorIds.filter(a=>{const o=P.find(c=>c.id===a);if(!o)return!0;const l=Ne(o.model);return!l||l===i}),ae(j,{linkedSensorIds:x.linkedSensorIds}))}function z(e){Object.assign(x,e),Object.assign(C,e),ae(j,e)}let J="j7j2",me=null,pe=null;const Zt=new Set(["pluie","temp","humidite","pothydr","etp","temp_rosee","rayonnement","_vent"]),Qt={j7j2:2};function fe(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,j7j2:10080,"30d":43200,"365d":525600};return J==="custom"&&me&&pe?Math.max(60,Math.round((pe-me)/6e4)):e[J]??10080}function be(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function ei(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"||e==="j7j2"?"1d":"1h"}function ti(){const e=fe(),t=be();return Math.max(2,Math.min(200,Math.floor(e/t)))}function ii(){const e=Qt[J]||0;if(!e)return 0;const t=be();return Math.max(1,Math.round(e*1440/t))}const Xe={Cumuls:"cumuls","Maï'zy":"maizy","Suivi de culture":"suivi-culture",Traitements:"weephyt",Decitrait:"decitrait","Tavelure Pomme":"tavelure",DPV:"dpv",THI:"thi","Température de rosée":"temp-rosee","Température du sol":"temp-sol","Rayonnement solaire":"w-pyrano",Gel:"gel","Prévisions à 5 jours":"previsions-5j","Prévisions à 6 heures":"previsions-6h","Prévisions du jour":"previsions-jour","Prévisions de tensiométrie":"previsions-tensio",Anémomètre:"w-anem","Capteur d'humectation foliaire":"w-lws","Capteur PAR":"w-par",Pyranomètre:"w-pyrano","Station météo":"w-station","Station Météo Virtuelle":"w-station","Thermomètre de sol":"w-tsol","Thermomètre-Hygromètre":"w-thygro","Bilan hydrique":"bilan",Irrigations:"irrigations","Sonde capacitive":"w-capa",Tensiomètre:"w-tensio","Sonde de fertirrigation":"w-ec","Profil capteurs":"profil-capteurs","Niveau de réservoir en eau utilisable":"niveau-reservoir","Profil de niveau de réservoir":"profil-reservoir"},ni=[{title:"Cumuls",items:["Cumuls"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Traitements","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire","Gel"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Irrigation",items:["Bilan hydrique","Irrigations","Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]}];function ai(){const e=P.filter(d=>x.linkedSensorIds.includes(d.id)),t=new Set(e.map(d=>d.model)),i=(x.crop||C.crop||"").toLowerCase(),n=he(),a=e.some(d=>{const f=D[d.model]||[];return f.some(s=>s.id==="temp")&&f.some(s=>s.id==="humidite")}),o=e.some(d=>(D[d.model]||[]).some(f=>f.id==="tsol")),l=e.some(d=>(D[d.model]||[]).some(f=>f.cumul)),c=d=>Xe[d]?d==="Gel"?t.has("T_GEL"):d==="Maï'zy"?i.includes("maïs")||i.includes("mais"):d==="Tavelure Pomme"?i.includes("pommier"):d==="Station météo"?t.has("P+")||t.has("PT")||t.has("P"):d==="Station Météo Virtuelle"?t.has("SMV"):d==="Thermomètre-Hygromètre"?t.has("TH"):d==="Thermomètre de sol"?t.has("T_MINI")||o:d==="Anémomètre"?t.has("W"):d==="Pyranomètre"||d==="Rayonnement solaire"?t.has("PYRANO"):d==="Capteur d'humectation foliaire"?t.has("LWS"):d==="Capteur PAR"?t.has("PAR"):d==="Bilan hydrique"?[...t].some(s=>s.startsWith("CAPA-"))||[...t].some(s=>_.includes(s)):d==="Irrigations"?!0:d==="Sonde capacitive"?[...t].some(s=>s.startsWith("CAPA-")):d==="Tensiomètre"?[...t].some(s=>_.includes(s)):d==="Sonde de fertirrigation"?t.has("EC"):d==="DPV"||d==="THI"||d==="Température de rosée"?a:d==="Température du sol"?o:d==="Cumuls"?l:!0:!0,u=document.createElement("div");u.className="modal add-modal",u.innerHTML=`
    <div class="add-modal-content" style="max-width:520px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter un widget</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      ${ni.map(d=>{const f=d.items.filter(c);return f.length?`
        <div class="add-modal-section">
          <div class="add-modal-section-label">${d.title}</div>
          <div class="wcat-list">
            ${f.map(s=>{const r=Xe[s],m=r&&n.includes(r);return`
              <div class="wcat-item">
                <span>${s}</span>
                ${m?'<span class="wcat-already"><i class="bi bi-check2"></i> Ajouté</span>':`<button class="wcat-add-btn" type="button" data-wid="${r}"><i class="bi bi-plus-circle"></i> Ajouter</button>`}
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")}
    </div>`,u.addEventListener("click",d=>{d.target===u&&u.remove()}),u.querySelector(".add-modal-close").addEventListener("click",()=>u.remove()),u.querySelectorAll(".wcat-add-btn").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.wid;if(!f)return;const s=he();s.includes(f)||(s.push(f),ve(s)),u.remove(),ue()})}),document.body.appendChild(u)}const ke=`weenat-journal-${j}`,se=new Date().toISOString().slice(0,10);function si(e,t){const i=new Date(e);return i.setDate(i.getDate()+t),i.toISOString().slice(0,10)}function ze(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,i,n]=e.split("-");return`${parseInt(n)} ${t[parseInt(i)-1]} ${e.split("-")[0]}`}const oi=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"];function ri(){const e=C,t=[],i=(c,u,d="Système")=>t.push({id:"auto-"+c+u.slice(0,8),type:"modification",date:c,texte:u,auteur:d}),n=e.orgId===1,a=n?"Jean-Michel Dutilleul":"Thomas Bertrand",o=n?"Alexandre Bernard":"Sophie Dubois";return i("2024-01-01","Création de la parcelle",a),e.crop&&i("2024-03-15",`Culture définie : ${e.crop}`,a),e.texture&&i("2024-03-15",`Texture de sol définie : ${e.texture}`,a),e.irrigation&&i("2024-04-01",`Type d'irrigation : ${e.irrigation}`,a),P.filter(c=>x.linkedSensorIds.includes(c.id)).forEach(c=>i("2024-06-10",`Liaison capteur : ${ee[c.model]||c.model} · ${c.serial}`,o)),i("2026-03-01","Début de cycle cultural 2026",a),t}const li=new Set(["culture","stade","irrigation","cycle"]),Ke=[["BBCH 21 — Tallage actif","BBCH 30 — Début montaison","BBCH 45 — Gonflement épis"],["BBCH 13 — 3 feuilles étalées","BBCH 31 — Début élongation","BBCH 59 — Fin de floraison"],["BBCH 09 — Levée","BBCH 40 — Développement des organes de récolte","BBCH 49 — Taille de récolte atteinte"],["BBCH 15 — 5 feuilles étalées","BBCH 51 — Apparition inflorescence","BBCH 69 — Fin de floraison"]],Ze=["Apache","RGT Bilboa","Soissons","Fixion","Forum","Allez-y"],Qe=["Mise en place de la saison 2026","Démarrage de la nouvelle campagne","Lancement de la saison sur cette parcelle"],et=["Développement homogène sur la parcelle","Légère hétérogénéité en bordure, sous surveillance","Bon développement, conforme aux attentes"];function tt(e,t){const i=C.crop||"Blé tendre",n=C.id%100,a=Ke[C.id%Ke.length],o=Ze[C.id%Ze.length],l=C.id%6;return[{id:17434656e5,type:"cycle",date:te("2026-03-01",l),auteur:e,action:"début",annee:"2026",texte:Qe[n%Qe.length]},{id:17438976e5,type:"culture",date:te("2026-03-06",l),auteur:e,action:"modification",culture:i,variete:o,texte:"Culture confirmée pour la saison 2026"},{id:17443296e5,type:"stade",date:te("2026-04-11",l),auteur:e,stade:a[0],culture:i,texte:""},{id:17453664e5,type:"stade",date:te("2026-04-23",l),auteur:t,stade:a[1],culture:i,texte:""},{id:17460576e5,type:"stade",date:te("2026-05-01",l),auteur:t,stade:a[2],culture:i,texte:et[n%et.length]}]}function te(e,t){const i=new Date(e+"T00:00:00");return i.setDate(i.getDate()+t),i.toISOString().slice(0,10)}function ci(e){return O.filter(t=>t.plotId===e&&t.real).map(t=>({id:`auto-irrig-${e}-${t.iso}-${t.mm}`,type:"irrigation",date:t.iso,volume:t.mm,unite:"mm",methode:C.irrigation||"",texte:"Irrigation effectuée.",auteur:"Système",_auto:!0}))}function $e(){const e=C.orgId===1,t=e?"Jean-Michel Dutilleul":"Thomas Bertrand",i=e?"Marie Martin":"Sophie Dubois";try{const u=localStorage.getItem(ke);if(u){const d=JSON.parse(u);if(Array.isArray(d)){if(!d.some(s=>li.has(s.type))){const s=[...tt(t,i),...d];return localStorage.setItem(ke,JSON.stringify(s)),s}return d}}}catch{}const n=[{cible:"Pucerons",produit:"Karate Zeon 10 CS",dose:"0,1 L/ha",obs1:"Observation de quelques pucerons sur les feuilles basses. À surveiller.",obs2:"peu de pucerons visibles, situation sous contrôle."},{cible:"Mildiou",produit:"Bordeaux mixture",dose:"2 kg/ha",obs1:"Taches suspectes observées sur les feuilles basses, conditions humides.",obs2:"progression stoppée, feuillage sain."},{cible:"Limaces",produit:"Métaldéhyde",dose:"5 kg/ha",obs1:"Dégâts de limaces constatés en bordure de parcelle après les pluies.",obs2:"dégâts limités, population réduite."},{cible:"Altises",produit:"Karaté K",dose:"75 mL/ha",obs1:"Présence d'altises sur jeunes plants, seuil de nuisibilité approché.",obs2:"population sous contrôle, reprise normale."}],a=C.id%n.length,o=n[a],l=C.id%6,c=[{id:17469216e5,type:"note",category:"Observation générale",date:te("2026-05-11",l),auteur:t,texte:o.obs1},{id:17473536e5,type:"traitement",date:te("2026-05-16",l),auteur:i,texte:"Application conforme aux conditions météo. Vent < 2 m/s.",produit:o.produit,dose:o.dose,cible:o.cible},{id:17477856e5,type:"note",category:"Observation générale",date:te("2026-05-21",l),auteur:t,texte:`Suite traitement du ${te("2026-05-16",l).split("-").reverse().slice(0,2).join("/")} : ${o.obs2}`},...tt(t,i)];return localStorage.setItem(ke,JSON.stringify(c)),c}function St(e){localStorage.setItem(ke,JSON.stringify(e))}function Ye(){const e=document.getElementById("journal-container");if(!e)return;const t=$e(),i=[...ri(),...ci(j)],n=[...t,...i].sort((s,r)=>r.date.localeCompare(s.date)),a=s=>{const[r,m,p]=s.split("-");return`${p}/${m}/${r}`},o={note:{label:"Note",icon:"bi-pencil",dotCls:"note",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotCls:"traitement",badgeCls:"traitement"},modification:{label:"Modification",icon:"bi-pencil-square",dotCls:"modification",badgeCls:"modification"},culture:{label:"Culture",icon:"bi-flower1",dotCls:"culture",badgeCls:"culture"},cycle:{label:"Cycle cultural",icon:"bi-arrow-repeat",dotCls:"cycle",badgeCls:"cycle"},stade:{label:"Stade phéno.",icon:"bi-calendar2-check",dotCls:"stade",badgeCls:"stade"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotCls:"irrigation",badgeCls:"irrigation"}};let c=`
    <div class="journal-add-bar">
      <div class="jrn-add-wrap" id="jrn-add-wrap">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="jrn-add-btn" style="width:auto">
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
  `;n.length===0?c+='<div class="journal-empty">Aucune entrée dans le journal.</div>':n.forEach(s=>{var h;const r=o[s.type]||o.note,m=s.type==="modification"||s._auto===!0,p=s.type==="traitement";c+=`
        <div class="jrn-entry" data-id="${s.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot jrn-dot--${r.dotCls}"><i class="bi ${r.icon}"></i></div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${a(s.date)}</span>
              <span class="journal-type-badge journal-type-badge--${r.badgeCls}">
                ${r.label}
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
                ${s.variete?`<span class="jrn-entry-meta-chip"><i class="bi bi-tag-fill"></i>${s.variete}</span>`:""}
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
      `}),c+="</div>",e.innerHTML=c;const u=e.querySelector("#jrn-add-btn"),d=e.querySelector("#jrn-add-menu");u==null||u.addEventListener("click",s=>{s.stopPropagation(),d.classList.toggle("open")}),document.addEventListener("click",()=>d==null?void 0:d.classList.remove("open")),e.querySelectorAll(".jrn-add-item").forEach(s=>{s.addEventListener("click",()=>{d.classList.remove("open"),di(s.dataset.type)})}),e.querySelectorAll(".jrn-entry-delete").forEach(s=>{s.addEventListener("click",()=>{var p,h;const r=parseInt(s.dataset.id),m=$e().find(v=>v.id===r);(p=m==null?void 0:m.imageIds)!=null&&p.length&&((h=window.ImageStore)==null||h.remove(m.imageIds)),St($e().filter(v=>v.id!==r)),Ye()})});const f=window.ImageStore;f&&e.querySelectorAll(".jrn-entry-photos-row[data-entry-id]").forEach(async s=>{var m;const r=t.find(p=>String(p.id)===s.dataset.entryId);if((m=r==null?void 0:r.imageIds)!=null&&m.length)for(const p of r.imageIds)try{const h=await f.get(p);if(!h)continue;const v=document.createElement("img");v.className="jrn-entry-photo",v.src=h,v.alt="",v.addEventListener("click",()=>{var g;return(g=window.openLightbox)==null?void 0:g.call(window,h)}),s.appendChild(v)}catch{}})}function di(e){const t={note:"Ajouter une note",traitement:"Ajouter un traitement",culture:"Culture — événement",stade:"Stade phénologique",irrigation:"Irrigation",cycle:"Cycle cultural"},i=C.crop||"",n={note:`
      <div class="journal-form-row">
        <label class="journal-form-label">Catégorie</label>
        <select id="jrn-f-category" class="journal-form-input">
          ${oi.map(c=>`<option>${c}</option>`).join("")}
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
      <div class="journal-form-grid">
        <div class="journal-form-row">
          <label class="journal-form-label">Culture</label>
          <input type="text" id="jrn-f-culture" class="journal-form-input" value="${i}" placeholder="Ex : Blé tendre">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Variété</label>
          <input type="text" id="jrn-f-variete" class="journal-form-input" placeholder="Ex : Apache">
        </div>
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
          <input type="date" id="jrn-f-date" class="journal-form-input" value="${se}">
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
    </div>`,o.querySelector(".add-modal-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",c=>{c.target===o&&o.remove()});const l=[];a&&window.ImageStore&&window.setupImgUpload(o.querySelector("#jrn-f-img-input"),o.querySelector("#jrn-f-img-btn"),o.querySelector("#jrn-f-previews"),o.querySelector("#jrn-f-img-err"),l),o.querySelector("#jrn-f-save").addEventListener("click",async()=>{var r,m;const c=o.querySelector("#jrn-f-date").value||se,u=((r=o.querySelector("#jrn-f-texte"))==null?void 0:r.value.trim())||"",d=C.orgId===1?"Jean-Michel Dutilleul":"Thomas Bertrand",f={id:Date.now(),type:e,date:c,texte:u,auteur:d};if(e==="note")f.category=((m=o.querySelector("#jrn-f-category"))==null?void 0:m.value)||"";else if(e==="traitement")f.produit=o.querySelector("#jrn-f-produit").value.trim(),f.dose=o.querySelector("#jrn-f-dose").value.trim(),f.cible=o.querySelector("#jrn-f-cible").value.trim();else if(e==="culture")f.action=o.querySelector("#jrn-f-action").value,f.culture=o.querySelector("#jrn-f-culture").value.trim(),f.variete=o.querySelector("#jrn-f-variete").value.trim();else if(e==="stade")f.stade=o.querySelector("#jrn-f-stade").value.trim(),f.culture=o.querySelector("#jrn-f-culture").value.trim();else if(e==="irrigation"){const p=parseFloat(o.querySelector("#jrn-f-volume").value);f.volume=isNaN(p)?0:p,f.unite=o.querySelector("#jrn-f-unite").value,f.methode=o.querySelector("#jrn-f-methode").value}else e==="cycle"&&(f.action=o.querySelector("#jrn-f-action").value,f.annee=o.querySelector("#jrn-f-annee").value.trim());if(u||f.produit||f.culture||f.stade||f.volume||f.annee||l.length){if(window.ImageStore&&l.length){f.imageIds=[];for(const p of l){const h=`img_${f.id}_${f.imageIds.length}`;await window.ImageStore.store(h,p),f.imageIds.push(h)}}St([f,...$e()]),o.remove(),Ye()}}),document.body.appendChild(o)}function ui(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const i=oe.filter(o=>o.orgId===C.orgId).sort((o,l)=>o.name.localeCompare(l.name,"fr")),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const a=document.createElement("select");a.className="breadcrumb-nav-select",a.innerHTML=i.map(o=>`<option value="${o.id}"${o.id===j?" selected":""}>${o.name}</option>`).join(""),a.addEventListener("change",()=>{window.location.href=`parcelle-detail.html?id=${a.value}`}),n.appendChild(a),t.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var i,n,a;if(!C){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}Kt(),wt(x.name||C.name,{label:"Parcelles",href:"parcelles.html"}),ui(),U(),Oi(),Xi(),Ki(),Ii(),Ri(),Zi();const e=Ct.get("tab");e&&((i=document.querySelector(`.detail-tab-btn[data-pane="tab-${e}"]`))==null||i.click()),Hi(),qi(),ue(),(n=document.getElementById("parcel-add-widget-btn"))==null||n.addEventListener("click",ai),(a=document.getElementById("btn-export-csv"))==null||a.addEventListener("click",Ji),document.addEventListener("click",o=>{const l=o.target.closest(".chart-cumul-add-btn");if(!l)return;o.stopPropagation();const c=l.dataset.cumulLabel,u=l.dataset.cumulVal;if(!confirm(`Ajouter "${c} : ${u}" au tableau de bord ?`))return;const d=document.createElement("div");d.textContent="Cumul ajouté au tableau de bord",Object.assign(d.style,{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",background:"rgba(28,28,30,.9)",color:"#fff",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",zIndex:"9999",pointerEvents:"none"}),document.body.appendChild(d),setTimeout(()=>d.remove(),2500)});const t=document.getElementById("sidebar");t&&new MutationObserver(()=>ce()).observe(t,{attributes:!0,attributeFilter:["data-role"]})});let Ae="capteur",G=null;const Mt=`charts-order-parcel-${j}`;function mi(){try{return JSON.parse(localStorage.getItem(Mt)||"null")}catch{return null}}function pi(e){localStorage.setItem(Mt,JSON.stringify(e))}function fi(e){let t=null;e.addEventListener("dragstart",i=>{const n=i.target.closest(".chart-card[data-card-key]");n&&(t=n,n.classList.add("chart-dragging"),i.dataTransfer.effectAllowed="move")}),e.addEventListener("dragend",()=>{t==null||t.classList.remove("chart-dragging"),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over")),t=null;const i=[...e.querySelectorAll(".chart-card[data-card-key]")].map(n=>n.dataset.cardKey);pi(i)}),e.addEventListener("dragover",i=>{if(i.preventDefault(),!t)return;const n=i.target.closest(".chart-card[data-card-key]");if(!n||n===t)return;e.querySelectorAll(".chart-card").forEach(o=>o.classList.remove("chart-drag-over")),n.classList.add("chart-drag-over");const a=n.getBoundingClientRect().top+n.getBoundingClientRect().height/2;e.insertBefore(t,i.clientY<a?n:n.nextSibling)}),e.addEventListener("drop",i=>{i.preventDefault(),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over"))})}function hi(e,t){const i=P.filter(s=>t.includes(s.id)),n=i.filter(s=>_.includes(s.model)),a=i.filter(s=>Ue.includes(s.model)),o=i.filter(s=>!_.includes(s.model)&&!Ue.includes(s.model)),l=be(),c=new Set;i.forEach(s=>(D[s.model]||[]).forEach(r=>c.add(r.id)));const u=[];if(o.forEach(s=>{const r=D[s.model];if(!r)return;const m=`${s.model} · ${s.serial}`,p=Math.floor(5+Math.random()*55);r.forEach(h=>{if(h.isWindComposite){u.push({key:`wind-${s.id}`,type:"wind",sensor:s,source:m,emissionMins:p});return}u.push({key:`s${s.id}-${h.id}`,type:"metric",metric:h,source:m,emissionMins:p,sensorId:s.id})})}),n.length>0){const s=`Tensiomètres · ${n.length} capteur${n.length>1?"s":""}`,r=Math.floor(5+Math.random()*55);["pothydr","tsol"].forEach(m=>{u.push({key:`tensio-${m}`,type:"tensio",metricId:m,source:s,emissionMins:r,tensioSensors:n})})}a.forEach(s=>{const r=Jt[s.model]||[],m=`${ee[s.model]||s.model} · ${s.serial}`,p=Math.floor(5+Math.random()*55);r.length>0&&(u.push({key:`capa-vwc-${s.id}`,type:"capa-vwc",sensor:s,horizons:r,source:m,emissionMins:p}),u.push({key:`capa-tsol-${s.id}`,type:"capa-tsol",sensor:s,horizons:r,source:m,emissionMins:p}))}),Ge.filter(s=>!c.has(s.id)).forEach(s=>u.push({key:`always-${s.id}`,type:"metric",metric:s,source:"parcelle",emissionMins:null,unavailable:l<60})),(!!C.irrigation&&C.irrigation!=="Non irrigué"||O.some(s=>s.plotId===j))&&u.push({key:"always-irrigation",type:"metric",metric:Yt,source:"parcelle",emissionMins:null});const f=mi();if(f!=null&&f.length){const s=new Map(f.map((r,m)=>[r,m]));u.sort((r,m)=>(s.has(r.key)?s.get(r.key):1/0)-(s.has(m.key)?s.get(m.key):1/0))}u.forEach(s=>{s.type==="metric"?_e(e,s.metric,s.source,s.emissionMins,s.key,s.unavailable,s.sensorId):s.type==="wind"?Ut(e,s.source,s.emissionMins,s.key):s.type==="tensio"?gi(e,s.metricId,s.tensioSensors,s.source,s.emissionMins,s.key):s.type==="capa-vwc"?yi(e,s.horizons,s.source,s.emissionMins,s.key):s.type==="capa-tsol"&&wi(e,s.horizons,s.source,s.emissionMins,s.key)}),fi(e)}function Le(e){const t=P.filter(a=>e.includes(a.id)),i=new Set,n=[];return t.forEach(a=>{(D[a.model]||[]).forEach(o=>{i.has(o.id)||(i.add(o.id),n.push(o))})}),Ge.forEach(a=>{i.has(a.id)||(i.add(a.id),n.push(a))}),n}function U(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",G){e.className="compare-rows";const i=oe.find(p=>p.id===G),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${x.name||C.name}</span></div>
      <div class="compare-col-header">
        <span>${(i==null?void 0:i.name)||"Parcelle"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{G=null,He(),U()});const a=Le(x.linkedSensorIds),o=xe(G),l=(o==null?void 0:o.linkedSensorIds)??P.filter(p=>p.parcelIds.includes(G)).map(p=>p.id),c=Le(l),u=a.map(p=>p.id),d=c.map(p=>p.id),f=u.filter(p=>d.includes(p)),s=u.filter(p=>!d.includes(p)),r=d.filter(p=>!u.includes(p));[...f,...s,...r].forEach(p=>{const h=a.find(y=>y.id===p),v=c.find(y=>y.id===p),g=document.createElement("div");g.className="compare-row";const b=document.createElement("div");h?_e(b,h):b.innerHTML='<div class="compare-chart-empty">—</div>';const w=document.createElement("div");v?_e(w,v):w.innerHTML='<div class="compare-chart-empty">—</div>',g.appendChild(b),g.appendChild(w),e.appendChild(g)})}else e.className="charts-stack",hi(e,x.linkedSensorIds);Ei()}const we=["#5b8dd9","#e07050","#4ecdc4","#f5c842","#c090e0","#78d8a0"];function vi(e){const t=e.depth||30;return[{depth:t,label:`${t} cm`,sensor:e}]}function bi(e){if(Ae==="capteur")return e.map((i,n)=>({label:i.serial,color:we[n%we.length],depth:i.depth||30,sensor:i}));const t=new Map;return e.forEach(i=>vi(i).forEach(n=>{t.has(n.depth)||t.set(n.depth,n)})),[...t.values()].sort((i,n)=>i.depth-n.depth).map((i,n)=>({label:i.label,color:we[n%we.length],depth:i.depth,sensor:i.sensor}))}function gi(e,t,i,n=null,a=null,o=null){var p;const c={pothydr:{name:"Potentiel hydrique",unit:"kPa"},tsol:{name:"Température du sol",unit:"°C"}}[t],u=bi(i),d=document.createElement("div");d.className="chart-card tensio-multi-card",d.dataset.tensioMetric=t,d.dataset.tensioCurves=JSON.stringify(u.map(h=>({depth:h.depth,color:h.color}))),o&&(d.dataset.cardKey=o,d.draggable=!0);const f=u.map(h=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${h.color};vertical-align:middle;border-radius:1px"></span>
      ${h.label}
    </span>`).join(""),s=n?`<span class="chart-card-source">${n}</span>`:"",r=a!=null?`<span class="chart-card-emission">il y a ${a} min</span>`:"",m=`
    <div class="chart-tensio-toggle">
      <button class="btn-secondary btn-sm tensio-toggle-btn${Ae==="capteur"?" active":""}" data-mode="capteur">Par capteur</button>
      <button class="btn-secondary btn-sm tensio-toggle-btn${Ae==="horizon"?" active":""}" data-mode="horizon">Par horizon</button>
    </div>`;d.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((p=u[0])==null?void 0:p.color)||we[0]}">${c.name}</span>
      <span class="chart-card-unit">${c.unit}</span>
      ${s}${r}
    </div>
    ${m}
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${f}</div>
    <svg class="chart-svg tensio-svg" data-metric="${t}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,d.querySelectorAll(".tensio-toggle-btn").forEach(h=>{h.addEventListener("click",()=>{Ae=h.dataset.mode,U()})}),e.appendChild(d)}function Et(e,t,i,n,a,o,l,c){var f;const u=document.createElement("div");u.className=`chart-card ${l}-multi-card`,u.dataset[l+"Curves"]=JSON.stringify(t.map(s=>({depth:s.depth,color:s[i]}))),c&&(u.dataset.cardKey=c,u.draggable=!0);const d=t.map(s=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${s[i]};vertical-align:middle;border-radius:1px"></span>
      ${s.label}
    </span>`).join("");return u.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((f=t[0])==null?void 0:f[i])||"#46DA82"}">${n}</span>
      <span class="chart-card-unit">${a}</span>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${d}</div>
    <svg class="chart-svg ${o}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,e.appendChild(u),u}function yi(e,t,i=null,n=null,a=null){Et(e,t,"vwcColor","Teneur en eau du sol","%vol","capa-svg","capa",a)}function wi(e,t,i=null,n=null,a=null){Et(e,t,"tsolColor","Température du sol par horizon","°C","capa-tsol-svg","capaT",a)}function _e(e,t,i=null,n=null,a=null,o=!1,l=null){var p;const c=t.base(),u=document.createElement("div");u.className="chart-card",u.dataset.base=c,u.dataset.color=t.color,u.dataset.cumul=t.isCumul?"1":"",u.dataset.chartType=t.chartType||"line",u.dataset.metricId=t.id,u.dataset.metricName=t.name,u.dataset.metricUnit=t.unit,t.isIrrigation&&(u.dataset.isIrrigation="1"),a&&(u.dataset.cardKey=a,u.draggable=!0);const d=t.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label} : <strong>${st(t)} ${t.cumul.unit}</strong></span><button class="chart-cumul-add-btn" data-cumul-label="${t.cumul.label}" data-cumul-val="${st(t)} ${t.cumul.unit}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button></div>`:"",f=i?`<span class="chart-card-source">${i}</span>`:"",s=n!=null?`<span class="chart-card-emission">il y a ${n} min</span>`:"";let r="";if(l){const h=((p=document.getElementById("time-step"))==null?void 0:p.value)||"1h";r=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${l}&metricId=${t.id}&parcelId=${j}&period=${J}&step=${h}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`}const m=o?'<div class="chart-unavailable">Données indisponibles pour ce pas de temps</div>':'<svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>';u.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${f}${s}${r}
    </div>
    ${m}
    ${d}
  `,e.appendChild(u)}let ye=null;function $i(){return ye||(ye=document.createElement("div"),ye.className="chart-tooltip",document.body.appendChild(ye)),ye}function xi(e,t){return t==="temp"||t==="temperature"?["#6eb4d4","#e07050"]:t==="tseche"||t==="thumide"?["#6eb4d4","#e07050"]:t==="temp_rosee"?["#a0d0f0","#4090c0"]:[Ci(e,.55),e]}function Ci(e,t){const i=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),o=Math.round(i+(255-i)*t),l=Math.round(n+(255-n)*t),c=Math.round(a+(255-a)*t);return`#${o.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}`}function Pe(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let i=0;i<e.length-1;i++){const n=e[Math.max(i-1,0)],a=e[i],o=e[i+1],l=e[Math.min(i+2,e.length-1)],c=a.x+(o.x-n.x)/6,u=a.y+(o.y-n.y)/6,d=o.x-(l.x-a.x)/6,f=o.y-(l.y-a.y)/6;t+=` C${c.toFixed(1)},${u.toFixed(1)} ${d.toFixed(1)},${f.toFixed(1)} ${o.x.toFixed(1)},${o.y.toFixed(1)}`}return t}function Me(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function it(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function Si(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function nt(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function Mi(e){const t=Math.floor((Date.now()-e*6e4)/864e5),i=Math.sin(t*12.9898+78.233)*43758.5453;return i-Math.floor(i)}function de(e,t,i,n=.15){const a=it(i),o=nt(a),l=Si(a),c=Mi(i),u=()=>1+(Math.random()-.5)*2*n;switch(e){case"temp":{const d=.6+c*.8;return(t-6+o*12*d)*u()}case"tseche":case"thumide":{const d=.6+c*.8;return(t-4+o*8*d)*u()}case"temp_rosee":{const d=.6+c*.8,f=t-6+o*12*d;return Math.min(f-1,t-8+o*6*d)*u()}case"tsol":{const d=it(i+120),f=.7+c*.6;return(t-3+nt(d)*6*f)*u()}case"humidite":{const d=1.4-c*.8;return Math.min(100,Math.max(20,(t+(1-o)*25*d-o*15)*u()))}case"rayonnement":{const d=.4+c*.9;return Math.max(0,l*t*1.3*d*u())}case"etp":{const d=.4+c*.9;return Math.max(0,l*t*1.5*d*u())}case"humec":{const d=1.4-c*.8;return Math.max(0,t*Math.max(0,.8-l*1.2)*d*u())}case"pluie":{const d=.06+(1-c)*.22;return Math.random()<d?t*Math.random()*2.5*(1.3-c):0}case"vent":case"rafales":{const d=.5+c;return Math.max(0,t*(.6+l*.8)*d*u())}default:return Math.max(0,t*u())}}function Ei(){const e=ti(),t=be(),i=ii();P.filter(a=>x.linkedSensorIds.includes(a.id)).filter(a=>_.includes(a.model)),document.querySelectorAll(".chart-card").forEach(a=>{if(a.classList.contains("tensio-multi-card")){const m=a.querySelector(".tensio-svg"),p=JSON.parse(a.dataset.tensioCurves||"[]");m&&p.length>0&&Bi(m,p,e,t);return}if(a.classList.contains("capa-multi-card")){const m=a.querySelector(".capa-svg"),p=JSON.parse(a.dataset.capaCurves||"[]");m&&p.length>0&&at(m,p,e,t,"vwc");return}if(a.classList.contains("capaT-multi-card")){const m=a.querySelector(".capa-tsol-svg"),p=JSON.parse(a.dataset.capaTCurves||"[]");m&&p.length>0&&at(m,p,e,t,"tsol");return}const o=a.querySelector(".chart-svg");if(!o)return;const l=parseFloat(a.dataset.base),c=a.dataset.color,u=a.dataset.cumul==="1",d=a.dataset.chartType||"line",f=a.dataset.metricId||"",s=a.dataset.metricName||"",r=a.dataset.metricUnit||"";if(a.dataset.isIrrigation)Ti(o,c,e,t,i);else{const m=i>0&&Zt.has(f);ji(o,l,c,e,t,u,d,f,s,r,i,m)}}),Bt(),jt()}function Bi(e,t,i,n){const l={t:14,r:10,b:28,l:46},c=600-l.l-l.r,u=180-l.t-l.b,d=t.map(w=>{const y=20+w.depth*.8+Math.random()*20;return Array.from({length:i},(S,M)=>{const k=(i-1-M)*n;return Math.max(0,de("pothydr",y,k))})}),f=d.flat(),s=Math.min(...f),r=Math.max(...f),m=r-s||1,p=w=>l.l+w/Math.max(i-1,1)*c,h=w=>l.t+u-(w-s)/m*u,v=`tc-${Math.random().toString(36).slice(2)}`;let g=`<defs><clipPath id="${v}"><rect x="${l.l}" y="${l.t}" width="${c}" height="${u}"/></clipPath></defs>`;for(let w=0;w<=4;w++){const y=l.t+w/4*u,S=r-w/4*m;g+=`<line x1="${l.l}" y1="${y.toFixed(1)}" x2="${600-l.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,g+=`<text x="${l.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${S.toFixed(0)}</text>`}d.forEach((w,y)=>{const S=w.map((k,T)=>({x:p(T),y:h(k)})),M=Pe(S);g+=`<path d="${M}" fill="none" stroke="${t[y].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${v})"/>`}),g+=`<line x1="${l.l}" y1="${l.t+u}" x2="${600-l.r}" y2="${l.t+u}" stroke="var(--bdr2)" stroke-width="1"/>`;const b=Math.max(1,Math.floor(i/6));for(let w=0;w<i;w+=b){const y=(i-1-w)*n;g+=`<text x="${p(w).toFixed(1)}" y="${(l.t+u+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Me(y)}</text>`}e.innerHTML=g}function at(e,t,i,n,a="vwc"){const c={t:14,r:10,b:28,l:46},u=600-c.l-c.r,d=180-c.t-c.b,f=t.map((y,S)=>{if(a==="tsol"){const k=16-y.depth*.06+S*.5+Math.random()*3;return Array.from({length:i},(T,B)=>{const H=(i-1-B)*n;return de("tsol",k,H)})}const M=35-y.depth*.15+S*2+Math.random()*8;return Array.from({length:i},(k,T)=>{const B=(i-1-T)*n;return Math.max(10,Math.min(55,de("teneur-eau",M,B)))})}),s=f.flat(),r=Math.floor(Math.min(...s)-2),m=Math.ceil(Math.max(...s)+2),p=m-r||1,h=y=>c.l+y/Math.max(i-1,1)*u,v=y=>c.t+d-(y-r)/p*d,g=`cc-${Math.random().toString(36).slice(2)}`;let b=`<defs><clipPath id="${g}"><rect x="${c.l}" y="${c.t}" width="${u}" height="${d}"/></clipPath></defs>`;for(let y=0;y<=4;y++){const S=c.t+y/4*d,M=m-y/4*p;b+=`<line x1="${c.l}" y1="${S.toFixed(1)}" x2="${600-c.r}" y2="${S.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,b+=`<text x="${c.l-5}" y="${(S+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${M.toFixed(0)}</text>`}f.forEach((y,S)=>{const M=y.map((T,B)=>({x:h(B),y:v(T)})),k=Pe(M);b+=`<path d="${k}" fill="none" stroke="${t[S].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${g})"/>`}),b+=`<line x1="${c.l}" y1="${c.t+d}" x2="${600-c.r}" y2="${c.t+d}" stroke="var(--bdr2)" stroke-width="1"/>`;const w=Math.max(1,Math.floor(i/6));for(let y=0;y<i;y+=w){const S=(i-1-y)*n;b+=`<text x="${h(y).toFixed(1)}" y="${(c.t+d+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Me(S)}</text>`}e.innerHTML=b}function ji(e,t,i,n,a,o,l="line",c="",u="",d="",f=0,s=!1){const p={t:14,r:10,b:28,l:46},h=600-p.l-p.r,v=180-p.t-p.b,g=n+f,b=s?f:0,w=n+b,y=Math.max(1,Math.round(a/15)),S=Array.from({length:w},(I,E)=>{const A=(n-1-E)*a;if(o){let N=0;for(let V=0;V<y;V++)N+=de(c,t/y,A+V*(a/y));return N}else if(y>1){let N=0;for(let V=0;V<y;V++)N+=de(c,t,A+V*(a/y));return N/y}else return de(c,t,A)}),M=l==="bar"?0:Math.min(...S),k=Math.max(...S),T=k-M||1,B=I=>p.l+I/Math.max(g-1,1)*h,H=I=>p.t+v-(I-M)/T*v,F=`grad_${Math.random().toString(36).slice(2)}`,[W,Z]=xi(i,c);let q=`<defs>
    <linearGradient id="${F}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${W}"/>
      <stop offset="100%" stop-color="${Z}"/>
    </linearGradient>
    <clipPath id="clip_${F}">
      <rect x="${p.l}" y="${p.t}" width="${h}" height="${v}"/>
    </clipPath>
  </defs>`;if(f>0){const I=B(n-.5),E=`stripe_${F}`;q+=`<defs><pattern id="${E}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${I.toFixed(1)}" y="${p.t}" width="${(600-p.r-I).toFixed(1)}" height="${v}" fill="url(#${E})"/>
      <line x1="${I.toFixed(1)}" y1="${p.t}" x2="${I.toFixed(1)}" y2="${p.t+v}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-p.r-4).toFixed(1)}" y="${(p.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}for(let I=0;I<=4;I++){const E=p.t+I/4*v,A=k-I/4*T,N=Math.abs(A)>=100?A.toFixed(0):Math.abs(A)>=10?A.toFixed(1):A.toFixed(2);q+=`<line x1="${p.l}" y1="${E.toFixed(1)}" x2="${600-p.r}" y2="${E.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,q+=`<text x="${p.l-5}" y="${(E+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${N}</text>`}q+=`<line x1="${p.l}" y1="${p.t+v}" x2="${600-p.r}" y2="${p.t+v}" stroke="var(--bdr2)" stroke-width="1"/>`;const ge=Math.max(1,Math.floor(g/6));for(let I=0;I<g;I+=ge){const E=B(I).toFixed(1),A=(n-I)*a;q+=`<line x1="${E}" y1="${p.t}" x2="${E}" y2="${p.t+v}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,q+=`<text x="${E}" y="${p.t+v+14}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Me(A)}</text>`}if(l==="bar"){const I=Math.max(2,h/g*.65);S.forEach((E,A)=>{if(E<=0)return;const N=A>=n,V=B(A),Ee=H(E),Fe=p.t+v-Ee;q+=`<rect x="${(V-I/2).toFixed(1)}" y="${Ee.toFixed(1)}" width="${I.toFixed(1)}" height="${Fe.toFixed(1)}" fill="${N?"#C7C7CC":`url(#${F})`}" opacity="${N?"0.5":"0.9"}" rx="1"/>`})}else{const I=S.slice(0,n).map((N,V)=>({x:B(V),y:H(N)})),E=Pe(I),A=E+` L${B(n-1).toFixed(1)},${p.t+v} L${p.l.toFixed(1)},${p.t+v} Z`;if(q+=`<path d="${A}" fill="${Z}" opacity="0.07" clip-path="url(#clip_${F})"/>`,q+=`<path d="${E}" fill="none" stroke="url(#${F})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${F})"/>`,b>0){const N=S.slice(n-1).map((Ee,Fe)=>({x:B(n-1+Fe),y:H(Ee)})),V=Pe(N);q+=`<path d="${V}" fill="none" stroke="url(#${F})" stroke-width="2" stroke-dasharray="5,4" stroke-linejoin="round" stroke-linecap="round" opacity="0.5" clip-path="url(#clip_${F})"/>`}}q+=`<rect class="chart-hover-rect" x="${p.l}" y="${p.t}" width="${h}" height="${v}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=q,ki(e,S,B,H,M,k,g,n,a,u,d,i,p,600)}function ki(e,t,i,n,a,o,l,c,u,d,f,s,r,m,p){const h=$i(),v=e.querySelector(".chart-hover-rect");if(!v)return;const b=document.createElementNS("http://www.w3.org/2000/svg","circle");b.setAttribute("r","4"),b.setAttribute("fill",s),b.setAttribute("stroke","#fff"),b.setAttribute("stroke-width","1.5"),b.style.display="none",b.style.pointerEvents="none",e.appendChild(b),v.addEventListener("mousemove",w=>{const y=e.getBoundingClientRect(),S=m/y.width,M=(w.clientX-y.left)*S,k=m-r.l-r.r,T=Math.max(0,Math.min(1,(M-r.l)/k)),B=Math.round(T*(l-1));if(B<0||B>=t.length)return;const H=t[B],F=i(B),W=n(H);b.setAttribute("cx",F),b.setAttribute("cy",W),b.style.display="";const Z=(c-B)*u,q=Me(Z),ge=Math.abs(H)>=100?H.toFixed(1):H.toFixed(2);h.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${d}</div>
      <div class="chart-tooltip-val" style="color:${s}">${ge} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${f}</span></div>
      <div class="chart-tooltip-ts">${q}</div>
    `,h.style.display="block";const I=w.clientX+12,E=w.clientY-10;h.style.left=`${Math.min(I,window.innerWidth-160)}px`,h.style.top=`${E}px`}),v.addEventListener("mouseleave",()=>{h.style.display="none",b.style.display="none"})}function Ai(e,t,i,n=0){const a=Date.now(),o=i*6e4,l=a-t*o,c=t+n,u=new Array(c).fill(0);return O.filter(d=>d.plotId===e).forEach(d=>{const f=new Date(d.iso).getTime();if(f<l)return;const s=Math.min(c-1,Math.floor((f-l)/o));s>=0&&(u[s]+=d.mm||0)}),u}function Ti(e,t,i,n,a=0){const c={t:12,r:8,b:28,l:44},u=600-c.l-c.r,d=180-c.t-c.b,f=i+a,s=Ai(j,i,n,a),r=Math.max(...s,1),m=g=>c.l+g/Math.max(f-1,1)*u,p=g=>c.t+d-g/r*d;let h="";for(let g=0;g<=4;g++){const b=c.t+g/4*d,w=(r-g/4*r).toFixed(1);h+=`<line x1="${c.l}" y1="${b}" x2="${600-c.r}" y2="${b}" stroke="var(--bdr2)" stroke-width="1"/>`,h+=`<text x="${c.l-4}" y="${b+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${w}</text>`}if(a>0){const g=m(i-.5),b=`irrig_stripe_${Math.random().toString(36).slice(2,8)}`;h+=`<defs><pattern id="${b}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${g.toFixed(1)}" y="${c.t}" width="${(600-c.r-g).toFixed(1)}" height="${d}" fill="url(#${b})"/>
      <line x1="${g.toFixed(1)}" y1="${c.t}" x2="${g.toFixed(1)}" y2="${c.t+d}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-c.r-4).toFixed(1)}" y="${(c.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}const v=Math.max(4,u/f*.65);s.forEach((g,b)=>{if(g<=0)return;const w=b>=i,y=m(b),S=p(g),M=c.t+d-S;h+=`<rect x="${(y-v/2).toFixed(1)}" y="${S.toFixed(1)}" width="${v.toFixed(1)}" height="${M.toFixed(1)}" fill="${w?"#C7C7CC":t}" opacity="${w?"0.5":"0.85"}" rx="1"/>`}),e.innerHTML=h}function st(e){const i={pluie:()=>$(20,120),etp:()=>R(15,80),rayonnement:()=>$(500,3e3)}[e.id];return i?i():$(10,100)}function Ii(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),i=document.getElementById("time-step"),n=new Date,a=new Date(n-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",o=>{const l=o.target.closest(".period-preset-btn");if(l)if(e.querySelectorAll(".period-preset-btn").forEach(c=>c.classList.remove("active")),l.classList.add("active"),J=l.dataset.period,J==="custom")t.style.display="flex";else{t.style.display="none";const c=document.getElementById("time-step");c&&(c.value=ei(J)),U()}}),document.getElementById("date-from").addEventListener("change",ot),document.getElementById("date-to").addEventListener("change",ot),i.addEventListener("change",U)}function ot(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(me=new Date(e),pe=new Date(t+"T23:59:59"),me<pe&&U())}const rt={"Blé tendre":[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé. Profondeur optimale 3–4 cm."},{name:"Levée",date:"2025-11-05",bbch:"BBCH 09",desc:"Apparition de la première feuille au-dessus du sol."},{name:"Tallage",date:"2026-02-15",bbch:"BBCH 21",desc:"1er talle apparu. Période sensible au froid."},{name:"Épi 1 cm",date:"2026-04-20",bbch:"BBCH 30",desc:"Montaison. Début de la différenciation de l'épi."},{name:"Épiaison",date:"2026-05-20",bbch:"BBCH 55",desc:"La moitié de l'épiaison est atteinte. Risque maximal de fusariose."},{name:"Floraison",date:"2026-05-28",bbch:"BBCH 65",desc:"Pleine floraison. Fenêtre critique pour la qualité du grain."},{name:"Maturité",date:"2026-07-10",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %. Récolte possible."}],Maïs:[{name:"Semis",date:"2026-04-25",bbch:"BBCH 00",desc:"Sol > 10 °C à 5 cm. Fenêtre de semis idéale."},{name:"Levée",date:"2026-05-10",bbch:"BBCH 09",desc:"Coleoptile visible. 10 jours après semis en conditions normales."},{name:"4 feuilles",date:"2026-05-28",bbch:"BBCH 14",desc:"V4. Intervention herbicide possible."},{name:"6 feuilles",date:"2026-06-12",bbch:"BBCH 16",desc:"V6. Stade critique pour la nutrition azotée."},{name:"Floraison ♂",date:"2026-07-15",bbch:"BBCH 65",desc:"VT. Émission du pollen. Forte demande en eau (≥ 8 mm/j)."},{name:"Soie",date:"2026-07-18",bbch:"BBCH 67",desc:"R1. Fécondation. Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-20",bbch:"BBCH 89",desc:"Point noir visible. Récolte selon teneur en eau."}],Colza:[{name:"Semis",date:"2025-08-25",bbch:"BBCH 00",desc:"Sol humide, T° < 25 °C. Objectif : 30 plants/m²."},{name:"Levée",date:"2025-09-05",bbch:"BBCH 09",desc:"Cotylédon visible. Période à risque limaces."},{name:"Rosette",date:"2025-11-15",bbch:"BBCH 18",desc:"8 feuilles étalées. Bon état pour entrer en hiver."},{name:"Reprise",date:"2026-02-20",bbch:"BBCH 30",desc:"Allongement de l'hypocotyle. Fin de la période de vernalisation."},{name:"Bouton floral",date:"2026-03-25",bbch:"BBCH 51",desc:"Inflorescence visible. Risque sclérotinia à surveiller."},{name:"Floraison",date:"2026-04-10",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile. Éviter les traitements."},{name:"Siliques",date:"2026-05-05",bbch:"BBCH 75",desc:"Siliques de 2 cm. Fin de floraison, début de remplissage."},{name:"Maturité",date:"2026-07-05",bbch:"BBCH 89",desc:"Siliques brunes, graines noires. Seuil récolte < 9 % eau."}],Tournesol:[{name:"Semis",date:"2026-04-20",bbch:"BBCH 00",desc:"Sol > 8 °C à 5 cm. Profondeur 4–5 cm."},{name:"Levée",date:"2026-05-05",bbch:"BBCH 09",desc:"Cotylédon hors sol. Période sensible aux oiseaux."},{name:"4 feuilles",date:"2026-05-25",bbch:"BBCH 14",desc:"V4. Interventions herbicides possibles."},{name:"Bouton floral",date:"2026-06-25",bbch:"BBCH 51",desc:"E2. Bouton visible. Fin du développement végétatif."},{name:"Floraison",date:"2026-07-10",bbch:"BBCH 65",desc:"R5.1. Fleurs ligulées ouvertes. Stress hydrique critique."},{name:"Maturité",date:"2026-09-05",bbch:"BBCH 89",desc:"Capitule brun, dos jaune. Teneur en eau 9–12 %."}],Vigne:[{name:"Débourrement",date:"2026-04-05",bbch:"BBCH 05",desc:"Bourgeon en coton. Risque gel augmente fortement."},{name:"Sortie feuilles",date:"2026-04-20",bbch:"BBCH 11",desc:"1ère feuille étalée. Début des traitements prophylactiques."},{name:"Floraison",date:"2026-06-10",bbch:"BBCH 65",desc:"Anthèse. Niveau de risque mildiou et oïdium maximal."},{name:"Nouaison",date:"2026-06-25",bbch:"BBCH 71",desc:"Baies visibles. Consolidation du rendement."},{name:"Véraison",date:"2026-08-05",bbch:"BBCH 81",desc:"Changement de couleur. Arrêt des traitements phytos recommandé."},{name:"Récolte",date:"2026-09-15",bbch:"BBCH 89",desc:"Maturité technologique. Date selon profil variétal."}],Sorgho:[{name:"Semis",date:"2026-05-10",bbch:"BBCH 00",desc:"Sol > 12 °C à 5 cm."},{name:"Levée",date:"2026-05-25",bbch:"BBCH 09",desc:"Coleoptile visible."},{name:"Montaison",date:"2026-07-01",bbch:"BBCH 30",desc:"Début de la montaison. Forte demande azotée."},{name:"Floraison",date:"2026-07-25",bbch:"BBCH 65",desc:"Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-15",bbch:"BBCH 89",desc:"Teneur en eau < 25 %. Récolte adaptée."}],"Orge de printemps":[{name:"Semis",date:"2026-03-15",bbch:"BBCH 00",desc:"Semis dès que sol ressuyé, T° > 5 °C."},{name:"Levée",date:"2026-04-01",bbch:"BBCH 09",desc:"Coleoptile visible. Période sensible aux limaces."},{name:"Tallage",date:"2026-04-20",bbch:"BBCH 21",desc:"Premier talle. Couverture du sol progressive."},{name:"Montaison",date:"2026-05-10",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-06-05",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-07-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-08-05",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],Orge:[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé, profondeur 3–4 cm."},{name:"Levée",date:"2025-11-04",bbch:"BBCH 09",desc:"Coleoptile visible. Surveillance limaces."},{name:"Tallage",date:"2026-02-08",bbch:"BBCH 21",desc:"Reprise de végétation. Premier talle."},{name:"Montaison",date:"2026-04-02",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-05-07",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-05-18",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-06-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-07-01",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],"Pomme de terre":[{name:"Plantation",date:"2026-04-02",bbch:"BBCH 00",desc:"Tubercules-semences à 10 cm, espacement 30–35 cm."},{name:"Levée",date:"2026-04-26",bbch:"BBCH 09",desc:"Tiges émergées. Risque gel résiduel."},{name:"Croissance",date:"2026-05-15",bbch:"BBCH 31",desc:"Fermeture du rang. Première application fongicide."},{name:"Tuberisation",date:"2026-06-05",bbch:"BBCH 71",desc:"Initiation des tubercules. Demande en eau maximale."},{name:"Grossissement",date:"2026-07-01",bbch:"BBCH 81",desc:"Grossissement actif. Irrigation critique."},{name:"Maturité",date:"2026-08-15",bbch:"BBCH 89",desc:"Fanes sèches, peau des tubercules fixée. Récolte."}],Cerisier:[{name:"Dormance",date:"2025-12-15",bbch:"BBCH 00",desc:"Repos végétatif. Besoin en froid accumulé."},{name:"Bourgeons",date:"2026-02-20",bbch:"BBCH 03",desc:"Gonflement des bourgeons. Chilling satisfait."},{name:"Débourrement",date:"2026-03-18",bbch:"BBCH 07",desc:"Pointe verte visible. Risque gel fort (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-08",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation croisée nécessaire."},{name:"Nouaison",date:"2026-04-28",bbch:"BBCH 71",desc:"Petits fruits noués. Chute physiologique normale."},{name:"Fructification",date:"2026-05-12",bbch:"BBCH 81",desc:"Grossissement actif des cerises. Irrigation si déficit."},{name:"Récolte",date:"2026-06-18",bbch:"BBCH 89",desc:"Cerises à maturité. Récolte échelonnée selon variété."}],Poire:[{name:"Débourrement",date:"2026-03-28",bbch:"BBCH 07",desc:"Pointe verte. Vigilance gel (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-15",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile."},{name:"Nouaison",date:"2026-05-05",bbch:"BBCH 71",desc:"Petits fruits noués. Éclaircissage si nécessaire."},{name:"Croissance",date:"2026-06-15",bbch:"BBCH 78",desc:"Grossissement actif. Besoins en eau importants."},{name:"Véraison",date:"2026-08-10",bbch:"BBCH 84",desc:"Changement de couleur. Arrêt des traitements phytos."},{name:"Récolte",date:"2026-09-10",bbch:"BBCH 89",desc:"Récolte selon indice de maturité (pénétromètre, amidon)."}],Pomme:[{name:"Débourrement",date:"2026-04-01",bbch:"BBCH 07",desc:"Pointe verte. Risque gel résiduel."},{name:"Floraison",date:"2026-04-25",bbch:"BBCH 65",desc:"Pleine floraison. Risque tavelure maximal."},{name:"Nouaison",date:"2026-05-15",bbch:"BBCH 71",desc:"Petits fruits visibles. Éclaircissage possible."},{name:"Croissance",date:"2026-06-10",bbch:"BBCH 78",desc:"Grossissement actif. Surveillance carpocapse."},{name:"Véraison",date:"2026-08-15",bbch:"BBCH 84",desc:"Coloration des fruits. Maturation avancée."},{name:"Récolte",date:"2026-09-20",bbch:"BBCH 89",desc:"Récolte selon variété et indice de maturité."}],Salade:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Laitue:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Betterave:[{name:"Semis",date:"2026-03-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé (T° > 5 °C) et ressuyé."},{name:"Levée",date:"2026-04-08",bbch:"BBCH 09",desc:"Cotylédons hors sol. Période à risque limaces."},{name:"4 feuilles",date:"2026-05-01",bbch:"BBCH 14",desc:"Couverture partielle du sol. Interventions herbicides."},{name:"Fermeture rang",date:"2026-06-15",bbch:"BBCH 37",desc:"Canopée fermée. Forte demande en eau et azote."},{name:"Grossissement",date:"2026-08-01",bbch:"BBCH 40",desc:"Grossissement actif de la racine. Accumulation de sucres."},{name:"Récolte",date:"2026-10-20",bbch:"BBCH 89",desc:"Teneur en sucre optimale. Arrachage selon planning usine."}]},Li=[{name:"Semis",date:"2026-04-01",bbch:"BBCH 00",desc:"Semis."},{name:"Levée",date:"2026-04-20",bbch:"BBCH 09",desc:"Levée des plantules."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Floraison."},{name:"Récolte",date:"2026-08-20",bbch:"BBCH 89",desc:"Maturité physiologique."}];function Pi(e){if(!e)return[];const t=e.toLowerCase();for(const i of Object.keys(rt))if(t.startsWith(i.toLowerCase()))return rt[i];return Li}function Hi(){const e=document.getElementById("toggle-phenologie");e&&e.addEventListener("change",()=>{Bt()})}function Bt(){document.querySelectorAll(".pheno-overlay").forEach(h=>h.remove());const e=document.getElementById("toggle-phenologie");if(!(e!=null&&e.checked))return;const t=x.crop||C.crop,i=Pi(t);if(!i.length)return;const n=Date.now(),a=fe()*6e4,o=n-a,l=600,c=46,u=10,d=14,f=28,s=l-c-u,r=d+4,m=180-f,p=i.filter(h=>{const v=new Date(h.date).getTime();return v>=o&&v<=n});p.length&&document.querySelectorAll(".chart-card").forEach(h=>{const v=h.querySelector(".chart-svg, .tensio-svg");if(!v)return;const g=document.createElementNS("http://www.w3.org/2000/svg","g");g.setAttribute("class","pheno-overlay"),p.forEach(b=>{const y=(new Date(b.date).getTime()-o)/a,S=c+y*s,M=document.createElementNS("http://www.w3.org/2000/svg","line");M.setAttribute("x1",S.toFixed(1)),M.setAttribute("x2",S.toFixed(1)),M.setAttribute("y1",r),M.setAttribute("y2",m),M.setAttribute("stroke","#3a9e6a"),M.setAttribute("stroke-width","1"),M.setAttribute("stroke-dasharray","4,3"),g.appendChild(M);const k=14,T=b.name.length>k?b.name.slice(0,k-1)+"…":b.name,B=(S+3).toFixed(1),H=(r+2).toFixed(1),F=document.createElementNS("http://www.w3.org/2000/svg","text");F.setAttribute("x",B),F.setAttribute("y",H),F.setAttribute("transform",`rotate(90, ${B}, ${H})`),F.setAttribute("text-anchor","start"),F.setAttribute("font-size","9"),F.setAttribute("font-family","var(--font)"),F.setAttribute("fill","#3a9e6a"),F.style.cursor="pointer",F.textContent=T,g.appendChild(F);const W=document.createElementNS("http://www.w3.org/2000/svg","rect");W.setAttribute("x",(S-8).toFixed(1)),W.setAttribute("y",r.toString()),W.setAttribute("width","16"),W.setAttribute("height",(m-r).toString()),W.setAttribute("fill","transparent"),W.style.cursor="pointer",W.addEventListener("click",Z=>Fi(b,Z)),g.appendChild(W)}),v.appendChild(g)})}let re=null;function Fi(e,t){re&&(re.remove(),re=null);const i=document.createElement("div");i.className="pheno-popover";const n=l=>{const[c,u,d]=l.split("-");return`${d}/${u}/${c}`};i.innerHTML=`
    <div class="pheno-pop-hd">
      <span class="pheno-pop-badge">${e.bbch}</span>
      <span class="pheno-pop-name">${e.name}</span>
      <button class="pheno-pop-close">×</button>
    </div>
    <div class="pheno-pop-date">${n(e.date)}</div>
  `,i.querySelector(".pheno-pop-close").addEventListener("click",()=>{i.remove(),re=null});const a=t.clientX,o=t.clientY;i.style.position="fixed",i.style.top=o-8+"px",i.style.left=a+12+"px",document.body.appendChild(i),re=i,setTimeout(()=>{const l=i.offsetWidth,c=i.offsetHeight;let u=o-8,d=a+12;d+l>window.innerWidth-8&&(d=a-l-12),u+c>window.innerHeight-8&&(u=o-c),i.style.top=Math.max(8,u)+"px",i.style.left=Math.max(8,d)+"px"},0),document.addEventListener("click",function l(c){i.contains(c.target)||(i.remove(),re=null,document.removeEventListener("click",l))},{capture:!0})}function qi(){const e=document.getElementById("toggle-notes");e&&e.addEventListener("change",jt)}function jt(){document.querySelectorAll(".notes-overlay").forEach(r=>r.remove()),lt();const e=document.getElementById("toggle-notes");if(!(e!=null&&e.checked))return;const t=$e().filter(r=>r.type==="note"||r.type==="traitement");if(!t.length)return;const i=Date.now(),n=fe()*6e4,a=i-n,o=600,l=46,c=10,u=28,d=o-l-c,f=180-u,s=t.filter(r=>{const m=new Date(r.date+"T12:00:00").getTime();return m>=a&&m<=i});s.length&&document.querySelectorAll(".chart-card").forEach(r=>{const m=r.querySelector(".chart-svg, .tensio-svg");if(!m)return;const p=document.createElementNS("http://www.w3.org/2000/svg","g");p.setAttribute("class","notes-overlay"),s.forEach(h=>{const g=(new Date(h.date+"T12:00:00").getTime()-a)/n,b=l+g*d,y=h.type==="traitement"?"#78c860":"#60a8e0",S=f+9,M=document.createElementNS("http://www.w3.org/2000/svg","polygon"),k=5;M.setAttribute("points",`${b.toFixed(1)},${(S-k).toFixed(1)} ${(b+k).toFixed(1)},${S.toFixed(1)} ${b.toFixed(1)},${(S+k).toFixed(1)} ${(b-k).toFixed(1)},${S.toFixed(1)}`),M.setAttribute("fill",y),M.setAttribute("stroke","#fff"),M.setAttribute("stroke-width","1.5"),p.appendChild(M);const T=document.createElementNS("http://www.w3.org/2000/svg","rect");T.setAttribute("x",(b-9).toFixed(1)),T.setAttribute("y",f.toFixed(1)),T.setAttribute("width","18"),T.setAttribute("height","18"),T.setAttribute("fill","transparent"),T.style.cursor="default",T.addEventListener("mouseenter",B=>Di(h,B)),T.addEventListener("mouseleave",lt),p.appendChild(T)}),m.appendChild(p)})}let Y=null;function Di(e,t){Y||(Y=document.createElement("div"),Y.className="note-tip",document.body.appendChild(Y));const i=e.type==="traitement";let a=`<div class="note-tip-header">
    <span class="note-tip-badge note-tip-badge--${i?"trait":"note"}">
      <i class="bi ${i?"bi-eyedropper":"bi-pencil"}"></i> ${i?"Traitement":"Note"}
    </span>
    <span class="note-tip-date">${(c=>{const[u,d,f]=c.split("-");return`${f}/${d}/${u}`})(e.date)}</span>
  </div>`;e.texte&&(a+=`<div class="note-tip-texte">${e.texte}</div>`),i&&(e.produit||e.dose||e.cible)&&(a+='<div class="note-tip-detail">',e.produit&&(a+=`<span><i class="bi bi-flask"></i> ${e.produit}</span>`),e.dose&&(a+=`<span><i class="bi bi-droplet"></i> ${e.dose}</span>`),e.cible&&(a+=`<span><i class="bi bi-bullseye"></i> ${e.cible}</span>`),a+="</div>"),Y.innerHTML=a,Y.style.display="block";const o=t.clientX+14,l=t.clientY-10;Y.style.left=o+"px",Y.style.top=l+"px",requestAnimationFrame(()=>{const c=Y.offsetWidth;o+c>window.innerWidth-8&&(Y.style.left=t.clientX-c-10+"px")})}function lt(){Y&&(Y.style.display="none")}function Ri(){He()}function He(){var t,i,n,a;const e=document.getElementById("compare-control");if(e)if(G){const o=((t=oe.find(l=>l.id===G))==null?void 0:t.name)||"Parcelle";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${o} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(i=e.querySelector(".compare-clear-icon"))==null||i.addEventListener("click",l=>{l.stopPropagation(),G=null,He(),U()}),(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",ct)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",ct)}function ct(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),i=oe.filter(o=>o.id!==j),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher une parcelle…">
    <div class="compare-dropdown-list">
      ${i.map(o=>`<div class="compare-dropdown-item${o.id===G?" active":""}" data-id="${o.id}"><i class="bi bi-map"></i> ${o.name}</div>`).join("")}
    </div>
  `,t.appendChild(n);const a=n.querySelector(".compare-search-input");a.focus(),a.addEventListener("input",o=>{const l=o.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(c=>{c.style.display=c.textContent.toLowerCase().includes(l)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(o=>{o.addEventListener("click",()=>{G=parseInt(o.dataset.id),n.remove(),He(),U()})}),setTimeout(()=>{document.addEventListener("click",function o(l){!n.contains(l.target)&&!t.contains(l.target)&&(n.remove(),document.removeEventListener("click",o))})},0)}function Oi(){const e=Ve.find(t=>t.id===C.orgId);kt(e),zi(e),Te(),We(),ce(),Je()}const dt=["Abricotier","Ail","Amandier","Artichaut","Asperge","Aubergine","Avoine","Basilic","Betterave fourragère","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Chou pommé","Ciboulette","Citrouille","Clémentinier","Courgette","Echalote","Endive","Epinard","Fève","Figuier","Fraisier","Framboisier","Gesse","Giroflier","Haricot vert","Houblon","Kiwi","Lavande","Lentille","Luzerne","Maïs doux","Maïs grain","Maïs semence","Maïs silage","Melon","Menthe","Moutarde","Navet","Nectarinier","Noisetier","Noyer","Oignon","Olivier","Orge de brasserie","Orge de printemps","Orge d'hiver","Pêcher","Persil","Pissenlit","Poireau","Pois chiche","Pois de conserve","Pois fourrager","Pois protéagineux","Poivron","Pomme de terre","Pommier","Poirier","Prunier","Pruneau d'Agen","Radis","Raisin de cuve","Raisin de table","Riz","Romarin","Sarrasin","Seigle","Soja","Sorgho","Tabac","Thym","Tomate","Tournesol","Triticale","Vigne","Cardon","Céleri","Cerise","Châtaignier","Colza","Courge","Fénugrec","Groseillier","Lin fibre","Lin oléagineux","Mâche","Millet","Myrtille","Noix de cajou","Paprika","Patate douce","Pistachier","Poisson-Chat","Quinoa","Safran","Sainfoin","Scorsonère","Shallot","Topinambour","Trèfle","Vesce","Fétuque","Ray-grass","Prairie temporaire","Prairie permanente","Jachère","Autre"];function kt(e){const t=document.getElementById("panel-ident"),i=x,n=i.texture||null,a=i.irrigation||null,o=i.crop||dt[0],l=i.env||null,c=n===qe,u=i.soilAnalysis||{},d=i.latlngs,f=Array.isArray(d)&&d.length>=3,s=i.area?`${i.area} ha <span class="field-computed">(calculé)</span>`:f?'— <span class="field-computed">(calculé)</span>':'<span class="field-computed">Tracez le contour pour calculer la surface de la parcelle.</span>';t.innerHTML=`
    ${Be("Nom",i.name||"—","name","text")}
    ${Ni("Culture",o,"crop",dt)}
    ${ut("Surface",s)}
    ${De("Environnement",l,"env",Gt,"Plein champ")}
    ${De("Texture sol",n,"texture",[...Vt,qe],"Indéfini")}
    ${c?`
      ${Be("Argile (%)",String(u.argile??""),"soilArgile","number")}
      ${Be("Limon (%)",String(u.limon??""),"soilLimon","number")}
      ${Be("Sable (%)",String(u.sable??""),"soilSable","number")}
    `:""}
    ${De("Irrigation",a,"irrigation",xt,"Non renseigné")}
    ${ut("Exploitation",e?e.name:"—")}
  `,ie(t,"name",i.name||"",r=>{z({name:r}),wt(r,{label:"Parcelles",href:"parcelles.html"})}),ie(t,"crop",o,r=>z({crop:r})),ie(t,"env",l||"",r=>z({env:r||null})),ie(t,"texture",n||"",r=>{const m=r||null,p={texture:m};m!==qe&&(p.soilAnalysis=null),z(p),kt(e)}),c&&(ie(t,"soilArgile",String(u.argile??""),r=>z({soilAnalysis:{...x.soilAnalysis,argile:+r}})),ie(t,"soilLimon",String(u.limon??""),r=>z({soilAnalysis:{...x.soilAnalysis,limon:+r}})),ie(t,"soilSable",String(u.sable??""),r=>z({soilAnalysis:{...x.soilAnalysis,sable:+r}}))),ie(t,"irrigation",a||"",r=>z({irrigation:r||null}))}function Be(e,t,i,n="text"){const a=(t||"").replace(/"/g,"&quot;");return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <input type="${n}" class="panel-field-input" data-val value="${a}">
    </div>`}function Ni(e,t,i,n){return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${n.map(a=>`<option${a===t?" selected":""}>${a}</option>`).join("")}
      </select>
    </div>`}function De(e,t,i,n,a="—"){const l=n.includes(a)?"":`<option value=""${t?"":" selected"}>${a}</option>`;return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${l}
        ${n.map(c=>`<option${c===(t||a)?" selected":""}>${c}</option>`).join("")}
      </select>
    </div>`}function ut(e,t){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${t}</span>
    </div>`}function ie(e,t,i,n){const a=e.querySelector(`[data-field="${t}"] [data-val]`);if(!a)return;const o=()=>{var c;const l=(c=a.value)==null?void 0:c.trim();l&&l!==i&&(i=l,n(l))};a.addEventListener("change",o),a.tagName==="INPUT"&&a.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),a.blur())})}function zi(e){const t=document.getElementById("panel-geoloc"),i=x.latlngs,n=Array.isArray(i)&&i.length>=3,a=x.ville||C.ville||(e==null?void 0:e.ville)||"—",o=C.departement||(e==null?void 0:e.departement),l=x.lat??C.lat??(e==null?void 0:e.lat),c=x.lng??C.lng??(e==null?void 0:e.lng);t.innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${o?` (${o})`:""}</span>
    </div>
    <div class="panel-row">
      <span class="panel-row-key">Coordonnées</span>
      <span class="panel-row-val">${l!=null?l.toFixed(4):"—"}, ${c!=null?c.toFixed(4):"—"}</span>
    </div>
    ${l!=null?`<div class="panel-row">
      <a href="https://www.google.com/maps?q=${l.toFixed(6)},${c.toFixed(6)}" target="_blank" class="itinerary-link">
        <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
      </a>
    </div>`:""}
    <div style="padding:4px 0 4px">
      <a href="parcelle-modifier-contour.html?id=${j}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${n?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function _i(){const e=new Set;return P.filter(i=>x.linkedSensorIds.includes(i.id)).forEach(i=>{const n=D[i.model]||[];_.includes(i.model)||n.forEach(a=>e.add(a.id))}),e}function mt(e){const t=D[e]||[];return t.length?`<div class="sensor-metric-badges">${t.map(i=>`<span class="sensor-metric-badge" style="--mc:${i.color}">${i.name}</span>`).join("")}</div>`:""}function Te(){const e=document.getElementById("panel-sensors"),t=P.filter(m=>x.linkedSensorIds.includes(m.id)),i=P.filter(m=>m.orgId===C.orgId&&!x.linkedSensorIds.includes(m.id)),n=t.filter(m=>!_.includes(m.model)),a={};n.forEach(m=>(D[m.model]||[]).forEach(p=>{a[p.id]=(a[p.id]||0)+1}));const o=Object.entries(a).filter(([,m])=>m>1).map(([m])=>{var p;return((p=Object.values(D).flat().find(h=>h.id===m))==null?void 0:p.name)||m});let l="";if(o.length>0&&(l+=`<div class="sensor-conflict-banner">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <span>Conflit de métriques : <strong>${o.join(", ")}</strong> mesurée(s) par plusieurs capteurs. Les données peuvent être en doublon.</span>
    </div>`),t.length===0)l+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>';else{const m=t.filter(h=>_.includes(h.model)),p=t.filter(h=>!_.includes(h.model));if(l+=p.map(h=>{const v=h.event&&(Array.isArray(h.event)?h.event.length>0:!0),g=v?Array.isArray(h.event)?h.event[0]:h.event:null;return`
      <div class="sensor-linked-row">
        <div class="sensor-linked-info">
          <div style="display:flex;align-items:center;gap:6px">
            <a href="capteur-detail.html?id=${h.id}" class="sensor-linked-link">${ee[h.model]||h.model}</a>
            ${v?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
          </div>
          <span class="sensor-linked-detail">${h.model} · ${h.serial}</span>
          ${v?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${g}</span>`:""}
          ${mt(h.model)}
        </div>
        <button class="remove-sensor-btn icon-btn" data-id="${h.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>`}).join(""),m.length>0){const h={};m.forEach(v=>{const g=v.depth!=null?`${v.depth} cm`:v.model;h[g]||(h[g]=[]),h[g].push(v)}),l+=`<div class="sensor-kit-hd">
        <span class="sensor-kit-hd-label">Kit de tensiomètres</span>
        ${mt("CHP-15/30")}
      </div>`,Object.entries(h).forEach(([v,g])=>{l+=`<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${v}</div>`,l+=g.map(b=>{const w=b.event&&(Array.isArray(b.event)?b.event.length>0:!0),y=w?Array.isArray(b.event)?b.event[0]:b.event:null;return`
          <div class="sensor-linked-row" style="padding-left:12px">
            <div class="sensor-linked-info">
              <div style="display:flex;align-items:center;gap:6px">
                <a href="capteur-detail.html?id=${b.id}" class="sensor-linked-link">${ee[b.model]||b.model}</a>
                ${w?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
              </div>
              <span class="sensor-linked-detail">${b.model} · ${b.serial}</span>
              ${w?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${y}</span>`:""}
            </div>
            <button class="remove-sensor-btn icon-btn" data-id="${b.id}" title="Retirer">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>`}).join("")})}}e.innerHTML=l;const c=t.some(m=>m.model==="PYRANO"),u=[{name:"Évapotranspiration (ETP)",color:"#c090e0"},...c?[]:[{name:"Rayonnement solaire",color:"#f5c842"}],{name:"Température de rosée",color:"#80c8e8"}],d=document.getElementById("panel-parcel-metrics-ext");d&&(d.innerHTML=`
      <div class="panel-parcel-metrics">
        <div class="panel-parcel-metrics-title">Données spatialisées</div>
        <div class="sensor-metric-badges">
          ${u.map(m=>`<span class="sensor-metric-badge" style="--mc:${m.color}">${m.name}</span>`).join("")}
        </div>
      </div>`);const f=document.getElementById("sensor-add-row"),s=document.getElementById("add-sensor-select");f&&s&&(i.length>0?(s.innerHTML='<option value="">Ajouter un capteur…</option>'+i.map(m=>`<option value="${m.id}">${ee[m.model]||m.model} — ${m.serial}</option>`).join(""),f.style.display=""):f.style.display="none"),e.querySelectorAll(".remove-sensor-btn").forEach(m=>{m.addEventListener("click",()=>{const p=parseInt(m.dataset.id),h=P.find(g=>g.id===p),v=h?`${ee[h.model]||h.model} — ${h.serial}`:`capteur #${p}`;Ce({title:"Retirer le capteur",message:`Retirer <strong>${v}</strong> de cette parcelle ?<br><br>Les données historiques sont conservées.`,confirmLabel:"Retirer",onConfirm:()=>{const g=x.linkedSensorIds.filter(b=>b!==p);z({linkedSensorIds:g}),ft(g),Te(),U(),ue()}})})});const r=document.getElementById("add-sensor-btn");r&&r.addEventListener("click",()=>{const m=document.getElementById("add-sensor-select"),p=parseInt(m.value);if(!p)return;const h=P.find(g=>g.id===p);if(!h)return;const v=Ne(h.model);if(v){const b=P.filter(w=>x.linkedSensorIds.includes(w.id)).filter(w=>{const y=Ne(w.model);return y&&y!==v});if(b.length>0){const w=b.map(y=>`${ee[y.model]||y.model} — ${y.serial}`).join(", ");Ce({title:"Capteur incompatible",message:`Cette parcelle utilise déjà : <strong>${w}</strong>.<br><br>Les capteurs de sol (CHP, CAPA, EC, T_MINI) sont exclusifs — une seule technologie par parcelle.<br><br>Retirer ${b.length>1?"ces capteurs":"ce capteur"} et ajouter le nouveau ?`,confirmLabel:"Remplacer",onConfirm:()=>{const y=new Set(b.map(M=>M.id)),S=x.linkedSensorIds.filter(M=>!y.has(M));z({linkedSensorIds:[...S,p]}),ft(S),ht(h),Te(),U(),ue()}});return}}if(!_.includes(h.model)){const g=_i(),w=(D[h.model]||[]).map(y=>y.id).filter(y=>g.has(y));if(w.length>0){const y=w.map(M=>{const k=Object.values(D).flat().find(T=>T.id===M);return(k==null?void 0:k.name)||M});if(!confirm(`Attention : ce capteur (${h.model}) mesure des métriques déjà fournies par un autre capteur :
• ${y.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}z({linkedSensorIds:[...x.linkedSensorIds,p]}),ht(h),Te(),U(),ue()})}function We(){var l;const e=document.getElementById("panel-integrations"),t=x.integrations||[],i=Xt.filter(c=>!t.includes(c));let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':n+=t.map(c=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${c}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(c)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),e.innerHTML=n;const a=document.getElementById("integ-add-row"),o=document.getElementById("add-integ-select");a&&o&&(i.length>0?(o.innerHTML='<option value="">Ajouter une intégration…</option>'+i.map(c=>`<option value="${encodeURIComponent(c)}">${c}</option>`).join(""),a.style.display=""):a.style.display="none"),e.querySelectorAll(".remove-integ-btn").forEach(c=>{c.addEventListener("click",()=>{const u=decodeURIComponent(c.dataset.name);Ce({title:"Retirer l'intégration",message:`Retirer <strong>${u}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{z({integrations:x.integrations.filter(d=>d!==u)}),We()}})})}),(l=document.getElementById("add-integ-btn"))==null||l.addEventListener("click",()=>{const c=document.getElementById("add-integ-select"),u=decodeURIComponent(c.value);u&&(z({integrations:[...x.integrations,u]}),We())})}let K=null,Q=null;function Wi(){if(K!==null)return;const e=xe(j);K=e.linkedOrgMemberIds??ne.filter(t=>{var i,n;return t.source==="adherent"&&((i=t.parcelIds)==null?void 0:i.includes(j))&&((n=t.orgIds)==null?void 0:n.includes(C.orgId))}).map(t=>t.id),Q=e.linkedConseillerIds??ne.filter(t=>{var i;return t.source==="réseau"&&((i=t.parcelIds)==null?void 0:i.includes(j))}).map(t=>t.id)}function pt(e,t,i){return`<div class="member-row">
    <div>
      <span class="member-name">${e.prenom} ${e.nom}</span>
      ${i?`<span class="member-role-badge">${e.role}</span>`:""}
    </div>
    ${t?`<button class="remove-membre-btn icon-btn" data-id="${e.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function ce(){var s;Wi();const e=((s=document.getElementById("sidebar"))==null?void 0:s.getAttribute("data-role"))==="adherent-reseau",t=document.getElementById("panel-membres"),i=document.getElementById("panel-membres-section"),n=ne.filter(r=>{var m;return r.source==="adherent"&&((m=r.orgIds)==null?void 0:m.includes(C.orgId))}),a=n.filter(r=>K.includes(r.id));i&&(i.style.display=!e&&n.length===0?"none":""),t&&(t.innerHTML=a.length?a.map(r=>pt(r,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',t.querySelectorAll(".remove-membre-btn").forEach(r=>{r.addEventListener("click",()=>{const m=parseInt(r.dataset.id),p=ne.find(h=>h.id===m);Ce({title:"Retirer le membre",message:`Retirer <strong>${p?`${p.prenom} ${p.nom}`:`membre #${m}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{K=K.filter(h=>h!==m),ae(j,{linkedOrgMemberIds:K}),ce()}})})}));const o=document.getElementById("add-membre-org-row");o&&(o.style.display="");const l=document.getElementById("add-membre-org-select");l&&(l.innerHTML='<option value="">Associer un membre…</option>',n.filter(r=>!K.includes(r.id)).forEach(r=>{const m=document.createElement("option");m.value=r.id,m.textContent=`${r.prenom} ${r.nom}`,l.appendChild(m)})),document.getElementById("add-membre-org-btn").onclick=()=>{const r=parseInt(l==null?void 0:l.value);!r||K.includes(r)||(K.push(r),ae(j,{linkedOrgMemberIds:K}),ce())};const c=document.getElementById("panel-conseillers"),u=document.getElementById("panel-conseillers-section"),d=ne.filter(r=>r.source==="réseau"&&Q.includes(r.id));u&&(u.style.display=e&&d.length===0?"none":""),c&&(c.innerHTML=d.length?d.map(r=>pt(r,!e,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',e||c.querySelectorAll(".remove-membre-btn").forEach(r=>{r.addEventListener("click",()=>{const m=parseInt(r.dataset.id),p=ne.find(h=>h.id===m);Ce({title:"Retirer le conseiller",message:`Retirer <strong>${p?`${p.prenom} ${p.nom}`:`conseiller #${m}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{Q=Q.filter(h=>h!==m),ae(j,{linkedConseillerIds:Q}),ce()}})})}));const f=document.getElementById("add-conseiller-row");if(f&&(f.style.display=e?"none":""),!e){const r=document.getElementById("add-membre-select");r&&(r.innerHTML='<option value="">Ajouter un conseiller…</option>',ne.filter(m=>m.source==="réseau"&&!Q.includes(m.id)).forEach(m=>{const p=document.createElement("option");p.value=m.id,p.textContent=`${m.prenom} ${m.nom} (${m.role})`,r.appendChild(p)})),document.getElementById("add-membre-btn").onclick=()=>{const m=parseInt(r==null?void 0:r.value);!m||Q.includes(m)||(Q.push(m),ae(j,{linkedConseillerIds:Q}),ce())}}}function Je(){const e=document.getElementById("panel-alertes"),t=x.alertes||[],i={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':n+=t.map((a,o)=>`
      <div class="alert-item">
        <i class="bi ${i[a.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition||""} ${a.threshold||""} ${a.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${o}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),n+='<button id="create-alert-btn" class="action-btn action-btn--primary" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=n,e.querySelectorAll(".remove-alert-btn").forEach(a=>{a.addEventListener("click",()=>{const o=parseInt(a.dataset.idx),l=[...x.alertes];l.splice(o,1),z({alertes:l}),Je()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{Gi(e)})}function Vi(){const e=[];return P.filter(i=>x.linkedSensorIds.includes(i.id)).forEach(i=>{(D[i.model]||[]).forEach(a=>{e.find(o=>o.id===a.id)||e.push({id:a.id,name:a.name,unit:a.unit})})}),Ge.forEach(i=>{e.find(n=>n.id===i.id)||e.push({id:i.id,name:i.name,unit:i.unit})}),e}function Gi(e){if(e.querySelector(".alert-create-form"))return;const i=Vi(),n=document.createElement("div");n.className="alert-create-form",n.innerHTML=`
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
  `,e.appendChild(n),n.querySelector("#alert-metric").addEventListener("change",a=>{const o=a.target.selectedOptions[0];n.querySelector("#alert-unit-label").textContent=(o==null?void 0:o.dataset.unit)||"—"}),n.querySelector("#alert-save-btn").addEventListener("click",()=>{const o=n.querySelector("#alert-metric").value,l=i.find(f=>f.id===o),c=n.querySelector("#alert-condition").value,u=n.querySelector("#alert-threshold").value;if(!o||!u)return;const d={type:"seuil",label:`Alerte ${(l==null?void 0:l.name)||o}`,metric:(l==null?void 0:l.name)||o,condition:c,threshold:u,unit:(l==null?void 0:l.unit)||""};z({alertes:[...x.alertes||[],d]}),Je()}),n.querySelector("#alert-cancel-btn").addEventListener("click",()=>n.remove())}function Yi(e,t){const i=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(i),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function Ji(){const e=x.name||C.name||"Parcelle",t=Le(x.linkedSensorIds);let i;if(G){const r=oe.find(v=>v.id===G),m=P.filter(v=>v.parcelIds.includes(G)).map(v=>v.id),p=Le(m),h=(r==null?void 0:r.name)||"Comparaison";i=[...t.map(v=>({h:`[${e}] ${v.name} (${v.unit})`,gen:v.base})),...p.map(v=>({h:`[${h}] ${v.name} (${v.unit})`,gen:v.base}))]}else i=t.map(r=>({h:`${r.name} (${r.unit})`,gen:r.base}));const n=fe()*6e4,a=be()*6e4,o=J==="custom"&&pe?pe:new Date,l=J==="custom"&&me?me:new Date(o-n),c=Math.min(Math.ceil((o-l)/a)+1,500),u=(o-l)/Math.max(c-1,1),d=["Horodatage",...i.map(r=>r.h)].join(";"),f=Array.from({length:c},(r,m)=>[new Date(l.getTime()+m*u).toISOString().replace("T"," ").slice(0,19),...i.map(h=>h.gen())].join(";")),s=e.replace(/[^\w]/g,"_");Yi([d,...f].join(`\r
`),`${s}_${J}_${new Date().toISOString().slice(0,10)}.csv`)}function Ce({title:e,message:t,confirmLabel:i="Confirmer",onConfirm:n}){const a=document.createElement("div");a.className="modal add-modal",a.style.zIndex="9999",a.innerHTML=`
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
    </div>`,a.querySelector(".add-modal-close").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-cancel").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-ok").addEventListener("click",()=>{a.remove(),n()}),a.addEventListener("click",o=>{o.target===a&&a.remove()}),document.body.appendChild(a)}const Ui={zoomControl:!1,attributionControl:!1,dragging:!1,touchZoom:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1,tap:!1};function Xi(){if(Re){Re.invalidateSize();return}const e=Ve.find(o=>o.id===C.orgId),t=x.lat??C.lat??(e==null?void 0:e.lat),i=x.lng??C.lng??(e==null?void 0:e.lng);if(t==null||i==null)return;const n=x.latlngs,a=L.map("parcel-mini-map",Ui);if(Re=a,L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(a),Array.isArray(n)&&n.length>=3){const o=L.polygon(n,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(a);a.fitBounds(o.getBounds(),{padding:[10,10]})}else{const o=.009009009009009009,l=1/(111*Math.cos(t*Math.PI/180));a.fitBounds([[t-o,i-l],[t+o,i+l]]),L.circleMarker([t,i],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(a)}}function Ki(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),i=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",i.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}let Re=null;function Zi(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(i=>i.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.pane).classList.add("active"),t.dataset.pane==="tab-journal"&&Ye()})})}const Qi={"previsions-5j":{size:"1x1",title:"Prévisions 5 jours",icon:"bi-calendar3-week",color:"#5b8dd9",render:nn,footer:{label:"Voir détails",href:"previsions.html"}},weephyt:{size:"1x1",title:"Traitements",icon:"bi-shield-check",color:"#2d9e5f",render:an,footer:{label:"Voir détails",href:"#",tab:"journal"}},cumuls:{size:"1x1",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#2E75B6",render:Ie},bilan:{size:"1x1",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4",render:pn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},irrigations:{size:"1x1",title:"Irrigations",icon:"bi-moisture",color:"#FF8C00",render:Se,footer:{label:"Voir détails",href:`irrigation.html?plot=${j}`}},gel:{size:"1x1",title:"Suivi du risque de gel",icon:"bi-thermometer-snow",color:"#FEE7B4",render:sn,footer:{label:"Voir détails",href:"previsions.html"}},dpv:{size:"1x1",title:"DPV",icon:"bi-droplet-half",color:"#5E88EC",render:on,footer:{label:"Voir détails",href:"#",tab:"donnees"}},thi:{size:"1x1",title:"THI",icon:"bi-heart-pulse",color:"#e0a030",render:rn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},"temp-rosee":{size:"1x1",title:"Température de rosée",icon:"bi-thermometer",color:"#72B0D8",render:ln,footer:{label:"Voir détails",href:"#",tab:"donnees"}},"temp-sol":{size:"1x1",title:"Température du sol",icon:"bi-layers",color:"#795548",render:cn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},maizy:{size:"1x1",title:"Maï'zy",icon:"bi-calendar-check",color:"#2d9e5f",render:dn,footer:{label:"Voir détails",href:"#"}},tavelure:{size:"1x1",title:"Tavelure Pomme",icon:"bi-exclamation-triangle",color:"#e07050",render:un,footer:{label:"Voir détails",href:"#"}},"suivi-culture":{size:"1x1",title:"Suivi de culture",icon:"bi-flower2",color:"#78d8a0",render:le},decitrait:{size:"1x1",title:"Decitrait",icon:"bi-shield",color:"#6080b0",render:le,footer:{label:"Voir détails",href:"#"}},"previsions-6h":{size:"1x1",title:"Prévisions à 6 heures",icon:"bi-clock",color:"#5b8dd9",render:le,footer:{label:"Voir détails",href:"previsions.html"}},"previsions-jour":{size:"1x1",title:"Prévisions du jour",icon:"bi-sun",color:"#f5c842",render:le,footer:{label:"Voir détails",href:"previsions.html"}},"previsions-tensio":{size:"1x1",title:"Prévisions tensiométrie",icon:"bi-graph-down",color:"#A6C157",render:le,footer:{label:"Voir détails",href:"previsions.html"}},"w-station":{size:"1x1",title:"Station météo",icon:"bi-broadcast",color:"#FBAF05",render:X("w-station"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-thygro":{size:"1x1",title:"Thermomètre-hygromètre",icon:"bi-thermometer-half",color:"#FBAF05",render:X("w-thygro"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-tsol":{size:"1x1",title:"Thermomètre de sol",icon:"bi-layers",color:"#795548",render:X("w-tsol"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-anem":{size:"1x1",title:"Anémomètre",icon:"bi-wind",color:"#616161",render:X("w-anem"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-pyrano":{size:"1x1",title:"Pyranomètre",icon:"bi-sun",color:"#CBCB0B",render:X("w-pyrano"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-lws":{size:"1x1",title:"Capteur d'humectation foliaire",icon:"bi-droplet",color:"#00887E",render:X("w-lws"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-par":{size:"1x1",title:"Capteur PAR",icon:"bi-brightness-high",color:"#4CBB17",render:X("w-par"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-capa":{size:"1x1",title:"Sonde capacitive",icon:"bi-moisture",color:"#ED9A2C",render:X("w-capa"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-tensio":{size:"1x1",title:"Tensiomètre",icon:"bi-graph-down",color:"#A6C157",render:X("w-tensio"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-ec":{size:"1x1",title:"Sonde de fertirrigation",icon:"bi-plug",color:"#2BCDDE",render:X("w-ec"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"profil-capteurs":{size:"1x1",title:"Profil capteurs",icon:"bi-bar-chart",color:"#5b8dd9",render:le},"niveau-reservoir":{size:"1x1",title:"Niveau de réservoir (RFU)",icon:"bi-droplet-fill",color:"#0172A4",render:Rt},"profil-reservoir":{size:"1x1",title:"Profil de réservoir",icon:"bi-clipboard-data",color:"#0172A4",render:Ot}},At=()=>`dash-widgets-parcel-${j}`;function he(){try{const e=JSON.parse(localStorage.getItem(At()));if(Array.isArray(e)&&e.length)return e}catch{}return en()}function ve(e){localStorage.setItem(At(),JSON.stringify(e))}function ft(e){const t=P.filter(d=>e.includes(d.id)),i=new Set(t.map(d=>d.model)),n=[...i].some(d=>d.startsWith("CAPA-")),a=[...i].some(d=>_.includes(d)),o=new Set(["previsions-5j","weephyt","cumuls"]);(i.has("P+")||i.has("PT")||i.has("SMV")||i.has("P"))&&o.add("w-station"),i.has("TH")&&o.add("w-thygro"),i.has("T_MINI")&&o.add("w-tsol"),i.has("W")&&o.add("w-anem"),i.has("PYRANO")&&o.add("w-pyrano"),i.has("LWS")&&o.add("w-lws"),i.has("T_GEL")&&o.add("gel"),i.has("PAR")&&o.add("w-par"),n&&o.add("w-capa"),a&&o.add("w-tensio"),i.has("EC")&&o.add("w-ec"),(a||n)&&o.add("bilan"),(!!C.irrigation&&C.irrigation!=="Non irrigué"||O.some(d=>d.plotId===C.id))&&o.add("irrigations");const c=he(),u=c.filter(d=>o.has(d));u.length!==c.length&&ve(u)}function ht(e){const t=he(),i=a=>{t.includes(a)||t.push(a)},n=e.model;(n==="P+"||n==="PT"||n==="SMV"||n==="P")&&i("w-station"),n==="TH"&&i("w-thygro"),n==="T_MINI"&&i("w-tsol"),n==="W"&&i("w-anem"),n==="PYRANO"&&i("w-pyrano"),n==="LWS"&&i("w-lws"),n==="T_GEL"&&i("gel"),n==="PAR"&&i("w-par"),n==="EC"&&i("w-ec"),n.startsWith("CAPA-")&&(i("w-capa"),i("bilan")),_.includes(n)&&(i("w-tensio"),i("bilan")),ve(t)}function en(){const e=P.filter(l=>x.linkedSensorIds.includes(l.id)),t=new Set(e.map(l=>l.model)),i=[...t].some(l=>l.startsWith("CAPA-")),n=[...t].some(l=>_.includes(l)),a=["previsions-5j","weephyt","cumuls"];return(t.has("P+")||t.has("PT")||t.has("SMV")||t.has("P"))&&a.push("w-station"),t.has("TH")&&a.push("w-thygro"),t.has("T_MINI")&&a.push("w-tsol"),t.has("W")&&a.push("w-anem"),t.has("PYRANO")&&a.push("w-pyrano"),t.has("LWS")&&a.push("w-lws"),t.has("T_GEL")&&a.push("gel"),t.has("PAR")&&a.push("w-par"),i&&a.push("w-capa"),n&&a.push("w-tensio"),t.has("EC")&&a.push("w-ec"),(n||i)&&a.push("bilan"),(!!C.irrigation&&C.irrigation!=="Non irrigué"||O.some(l=>l.plotId===C.id))&&a.push("irrigations"),a}function ue(){const e=document.getElementById("dash-grid");if(!e)return;const t=he();!t.includes("irrigations")&&O.some(i=>i.plotId===C.id)&&(t.push("irrigations"),ve(t)),e.innerHTML="",t.forEach(i=>{const n=Qi[i];if(!n)return;const a=document.createElement("div");a.className=`dash-block dash-block--${n.size}`,a.dataset.id=i,a.draggable=!0;const o=n.footer?`<div class="dash-block-ft"><a class="dash-block-ft-link" href="${n.footer.href}"${n.footer.tab?` data-tab="${n.footer.tab}"`:""}>${n.footer.label} →</a></div>`:"";a.innerHTML=`
      <div class="dash-block-hd" style="color:${n.color}">
        <span style="display:flex;align-items:center;gap:6px"><i class="bi ${n.icon}"></i> ${n.title}</span>
        <button class="dash-menu-btn" data-wid="${i}" title="Options" aria-label="Options">···</button>
      </div>
      <div class="dash-block-body" id="dblock-${i}"></div>
      ${o}`,e.appendChild(a),n.render(a.querySelector(`#dblock-${i}`))}),e.querySelectorAll(".dash-menu-btn").forEach(i=>{i.addEventListener("click",n=>{var d,f,s;n.stopPropagation(),(d=document.querySelector(".dash-dropdown"))==null||d.remove();const a=i.dataset.wid,o=document.createElement("div");o.className="dash-dropdown";const l=a==="irrigations"?`
        <button class="dash-dd-item" data-action="set-vol">Définir le volume limité et le débit</button>`:"";o.innerHTML=`${l}<button class="dash-dd-item dash-dd-remove" data-action="remove" data-wid="${a}">Retirer le widget</button>`;const c=i.getBoundingClientRect(),u=e.getBoundingClientRect();o.style.top=`${c.bottom-u.top+4}px`,o.style.right=`${u.right-c.right}px`,e.style.position="relative",e.appendChild(o),(f=o.querySelector('[data-action="remove"]'))==null||f.addEventListener("click",()=>{o.remove();const r=he().filter(m=>m!==a);ve(r),ue()}),(s=o.querySelector('[data-action="set-vol"]'))==null||s.addEventListener("click",()=>{o.remove(),Nt("vol")}),setTimeout(()=>document.addEventListener("click",()=>o.remove(),{once:!0}),0)})}),e.querySelectorAll(".dash-block-ft-link[data-tab]").forEach(i=>{i.addEventListener("click",n=>{var a;n.preventDefault(),(a=document.querySelector(`.detail-tab-btn[data-pane="tab-${i.dataset.tab}"]`))==null||a.click()})}),fn(e)}function Tt(e,t=380,i=90){const c=t-28-8,u=i-6-20,d=e.flatMap(b=>b.values);let f=Math.min(...d),s=Math.max(...d);f===s&&(f-=1,s+=1);const r=e[0].values.length,m=b=>(28+b/(r-1)*c).toFixed(1),p=b=>(6+u-(b-f)/(s-f)*u).toFixed(1),h=[.25,.5,.75].map(b=>{const w=(6+b*u).toFixed(1);return`<line x1="28" y1="${w}" x2="${t-8}" y2="${w}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),v=[f,(f+s)/2,s].map(b=>`<text x="25" y="${(+p(b)+3.5).toFixed(0)}" text-anchor="end" font-size="9" fill="var(--txt3)">${b.toFixed(0)}</text>`).join(""),g=e.map(b=>`<path d="${b.values.map((y,S)=>`${S?"L":"M"}${m(S)},${p(y)}`).join("")}" fill="none" stroke="${b.color}" stroke-width="1.8" stroke-linejoin="round"/>`).join("");return`<svg width="100%" height="${i}" viewBox="0 0 ${t} ${i}" preserveAspectRatio="none">${v}${h}${g}</svg>`}function tn(e,t,i,n){const f=(v,g)=>{const b=Math.PI+v*Math.PI,w=Math.PI+g*Math.PI,y=(80+60*Math.cos(b)).toFixed(1),S=(90+60*Math.sin(b)).toFixed(1),M=(80+60*Math.cos(w)).toFixed(1),k=(90+60*Math.sin(w)).toFixed(1);return`M${y},${S} A60,60,0,${g-v>.5?1:0},1,${M},${k}`},s=f(0,1),r=t.filter(v=>v.from<e).map(v=>`<path d="${f(v.from,Math.min(v.to,e))}" fill="none" stroke="${v.color}" stroke-width="12" stroke-linecap="butt"/>`).join(""),m=Math.PI+e*Math.PI,p=(80+60*Math.cos(m)).toFixed(1),h=(90+60*Math.sin(m)).toFixed(1);return`<svg width="160" height="100" viewBox="0 0 160 100">
    <path d="${s}" fill="none" stroke="var(--bdr2)" stroke-width="12" stroke-linecap="butt"/>
    ${r}
    <circle cx="${p}" cy="${h}" r="5" fill="white" stroke="var(--txt3)" stroke-width="1.5"/>
    <text x="80" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="var(--txt)">${n}</text>
    <text x="80" y="96" text-anchor="middle" font-size="9" fill="var(--txt3)">${i}</text>
  </svg>`}function nn(e){const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],n=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],a=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],o=new Date,l=oe.find(r=>r.id===j),c=Ve.find(r=>r.id===(l==null?void 0:l.orgId)),u=(l==null?void 0:l.ville)||(c==null?void 0:c.ville)||"—",d=(r,m)=>{const p=new Date(o);p.setDate(p.getDate()+r);const h=Math.floor((j*7+r*3)%11/2.2);return{lbl:r===0?"Auj.":t[p.getDay()],date:`${p.getDate()} ${i[p.getMonth()]}`,tmax:$(17+m,34+m),tmin:$(4+m,15+m),pluie:h>=3?$(2,18):0,vent:$(10,35),rafales:$(25,70),wi:h}},f=[0,1,2].map(r=>d(r,0)).concat([3,4].map(r=>d(r,-1))),s=r=>`
    <div class="w-prev5-day">
      <div class="w-prev5-daylbl">${r.lbl}</div>
      <div class="w-prev5-date">${r.date}</div>
      <i class="bi ${n[r.wi]} w-prev5-icon" title="${a[r.wi]}"></i>
      <div class="w-prev5-row"><i class="bi bi-droplet-fill" style="color:#45b7d1;font-size:9px"></i><span>${r.pluie>0?r.pluie+" mm":"—"}</span></div>
      <div class="w-prev5-row w-prev5-tmax"><i class="bi bi-thermometer-high" style="font-size:9px"></i>${r.tmax}°</div>
      <div class="w-prev5-row w-prev5-tmin"><i class="bi bi-thermometer-low" style="font-size:9px"></i>${r.tmin}°</div>
      <div class="w-prev5-row" style="color:var(--txt3)"><i class="bi bi-wind" style="font-size:9px"></i>${r.vent}</div>
      <div class="w-prev5-row" style="color:var(--txt3);font-size:9px"><i class="bi bi-arrow-up-right" style="font-size:9px"></i>${r.rafales}</div>
    </div>`;e.innerHTML=`
    <div class="w-prev5-loc"><i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i> ${u}</div>
    <div class="w-prev5-model-hdr">
      <span class="w-prev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="w-prev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="w-prev5-grid">${f.map(s).join("")}</div>`}function an(e){var u;const t=new Date,i=[{label:"Herbicides de contact",seed:7},{label:"Fongicides",seed:3},{label:"Herbicides racinaires",seed:11},{label:"Herbicides systémiques",seed:5}],n=Array.from({length:24},(d,f)=>{const s=new Date(t);return s.setMinutes(0,0,0),s.setHours(s.getHours()+f),s}),a=d=>`${String(d.getHours()).padStart(2,"0")}h`,o=d=>d.toDateString()===t.toDateString()?"Aujourd'hui":"Demain",l=d=>{const f=n.map((m,p)=>(d.seed*17+j*13+p*5)%11<6),s=f.findIndex(m=>m);if(s===-1)return null;let r=s;for(;r+1<f.length&&f[r+1];)r++;return{from:n[s],to:new Date(n[r].getTime()+36e5)}},c=i.map(d=>{const f=l(d);return`<div class="w-weephyt-family-row">
      <span class="w-weephyt-family-label">${d.label}</span>
      ${f?`<span class="w-weephyt-window"><i class="bi bi-check-circle-fill"></i> ${o(f.from)} ${a(f.from)}–${a(f.to)}</span>`:'<span class="w-weephyt-window w-weephyt-window--none">Aucune fenêtre sous 24h</span>'}
    </div>`}).join("");e.innerHTML=`<div class="w-weephyt-wrap">
    ${c}
    <div class="w-weephyt-actions">
      <button class="w-weephyt-btn w-weephyt-btn--pri" id="w-weephyt-saisir">Saisir un traitement</button>
    </div>
  </div>`,(u=e.querySelector("#w-weephyt-saisir"))==null||u.addEventListener("click",()=>{var d;return(d=window.openJournalModal)==null?void 0:d.call(window,"traitement")})}const It=()=>`w-cumuls-state-${j}`;function Lt(){try{return JSON.parse(localStorage.getItem(It()))||{}}catch{return{}}}function je(e){const t=Lt();localStorage.setItem(It(),JSON.stringify({...t,...e}))}function Ie(e){const t=P.filter(r=>x.linkedSensorIds.includes(r.id)),i=new Set(t.flatMap(r=>(D[r.model]||[]).map(m=>m.id))),n=`${new Date().getFullYear()}-01-01`,a=Lt(),o=new Set(a.hidden||[]),l=a.dates||{},c=a.cfg||{},u=[{id:"etp",label:"Évapotranspiration",value:R(20,80).toFixed(1),unit:"mm",color:"#c090e0",icon:"bi-sun",show:!0},{id:"pluie",label:"Pluie",value:$(10,50),unit:"mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy",show:i.has("pluie")},{id:"djc",label:"Degrés jours",value:$(40,180),unit:"DJ",color:"#e07050",icon:"bi-thermometer-half",show:i.has("temp"),cfg:!0,cfgLabel:`${c.djMin??0}–${c.djMax??18}°C`,cfgFields:[{key:"djMin",label:"T min",def:0},{key:"djMax",label:"T max",def:18}]},{id:"hfroid",label:"Heures de froid",value:$(5,40),unit:"h",color:"#0B3A64",icon:"bi-snow",show:i.has("temp"),cfg:!0,cfgLabel:`< ${c.hfSeuil??7.2}°C`,cfgFields:[{key:"hfSeuil",label:"Seuil",def:7.2}]},{id:"humec",label:"Humectation",value:R(2,20).toFixed(1),unit:"h",color:"#78d8a0",icon:"bi-droplet",show:i.has("humec")},{id:"enso",label:"Ensoleillement",value:R(30,90).toFixed(1),unit:"h",color:"#f5c842",icon:"bi-brightness-high",show:!0}].filter(r=>r.show),d=u.filter(r=>!o.has(r.id)),f=u.filter(r=>o.has(r.id)),s=f.length?`<div style="border-top:1px solid var(--bdr2);padding-top:8px;margin-top:8px">
        <div style="font-size:11px;color:var(--txt3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${f.map(r=>`
          <button class="w-cumul-restore" data-cid="${r.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed var(--bdr);border-radius:8px;padding:7px 10px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${r.icon}" style="color:${r.color};font-size:14px;flex-shrink:0"></i>
            <span style="font-size:12px;color:var(--txt);flex:1">${r.label}</span>
            <i class="bi bi-plus-circle" style="color:var(--pri);font-size:14px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"";e.innerHTML=`<div class="w-cumuls-list">${d.map(r=>{const m=l[r.id]||n;return m.split("-").reverse().join("/"),`
      <div class="w-cumul-item">
        <i class="bi ${r.icon} w-cumul-icon" style="color:${r.color}"></i>
        <div class="w-cumul-body">
          <div class="w-cumul-lbl">${r.label}</div>
          <div class="w-cumul-val" style="color:${r.color}">${r.value}<span class="w-cumul-unit"> ${r.unit}</span></div>
          <div class="w-cumul-date">Depuis le <input type="date" class="w-cumul-date-input" data-cid="${r.id}" value="${m}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px">${r.cfg?`<button class="w-cumul-cfg" data-cid="${r.id}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px;line-height:1"><i class="bi bi-gear"></i> ${r.cfgLabel}</button>`:""}</div>
        </div>
        <button class="w-cumul-del" data-cid="${r.id}" title="Retirer">×</button>
      </div>`}).join("")}</div>${s}`,e.querySelectorAll(".w-cumul-del").forEach(r=>{r.addEventListener("click",m=>{m.stopPropagation(),o.add(r.dataset.cid),je({hidden:[...o]}),Ie(e)})}),e.querySelectorAll(".w-cumul-restore").forEach(r=>{r.addEventListener("click",m=>{m.stopPropagation(),o.delete(r.dataset.cid),je({hidden:[...o]}),Ie(e)})}),e.querySelectorAll(".w-cumul-date-input").forEach(r=>{r.addEventListener("change",()=>{l[r.dataset.cid]=r.value,je({dates:l})})}),e.querySelectorAll(".w-cumul-cfg").forEach(r=>{r.addEventListener("click",m=>{var g;m.stopPropagation();const p=r.dataset.cid,h=d.find(b=>b.id===p);if(!(h!=null&&h.cfgFields))return;(g=e.querySelector(".w-cumul-cfg-panel"))==null||g.remove();const v=document.createElement("div");v.className="w-cumul-cfg-panel",v.style.gridColumn="1 / -1",v.innerHTML=`<div class="w-cumul-cfg-title">Paramétrer ${h.label}</div>`+h.cfgFields.map(b=>`
          <label class="w-cumul-cfg-row">
            <span>${b.label} (°C)</span>
            <input type="number" class="w-cumul-cfg-inp" data-key="${b.key}" value="${c[b.key]??b.def}" step="0.1">
          </label>`).join("")+'<button class="w-cumul-cfg-ok">OK</button>',r.closest(".w-cumul-item").after(v),v.querySelector(".w-cumul-cfg-ok").addEventListener("click",()=>{v.querySelectorAll(".w-cumul-cfg-inp").forEach(b=>{c[b.dataset.key]=parseFloat(b.value)||0}),je({cfg:c}),v.remove(),Ie(e)})})})}function sn(e){if(!P.filter(s=>x.linkedSensorIds.includes(s.id)).some(s=>s.model==="T_GEL")){e.innerHTML='<div class="dash-empty">Capteur T_GEL non lié</div>';return}const i=25,n=R(0,5),a=Array.from({length:i},(s,r)=>+(n+r*.18+R(-.8,.8)).toFixed(1)),o=a.map(s=>+(s-R(1,2.5)).toFixed(1)),l=Tt([{values:a,color:"#23B19B"},{values:o,color:"#5E88EC"}],380,100),c=a[i-1],u=o[i-1],d=$(5,8),f=String(Math.floor(Math.random()*60)).padStart(2,"0");e.innerHTML=`<div class="w-gel-wrap">
    <div class="w-gel-legend">
      <span style="color:#23B19B"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sèche</span>
      <span style="color:#5E88EC"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. humide</span>
      <span style="font-size:10px;color:var(--txt3)">12 dernières heures</span>
    </div>
    <div class="w-gel-chart">${l}</div>
    <div class="w-gel-cards">
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. sèche </span><span class="w-gel-card-val" style="color:#23B19B">${c}°C</span></div>
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. humide </span><span class="w-gel-card-val" style="color:#5E88EC">${u}°C</span></div>
    </div>
    <div class="w-gel-meteo">
      <div class="w-gel-meteo-row"><i class="bi bi-sunrise" style="color:#CBCB0B"></i><span>Lever du soleil</span><strong>${d}h${f}</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-cloud" style="color:#8090a0"></i><span>Couverture nuageuse</span><strong>${$(20,80)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i><span>Humidité</span><strong>${$(60,90)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-wind" style="color:#616161"></i><span>Vent moyen</span><strong>${$(5,25)} km/h</strong></div>
    </div>
  </div>`}function on(e){const t=P.filter(r=>x.linkedSensorIds.includes(r.id));if(!t.some(r=>{const m=D[r.model]||[];return m.some(p=>p.id==="temp")&&m.some(p=>p.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=R(18,30),a=$(40,85),l=+(.611*Math.exp(17.27*n/(n+237.3))*(1-a/100)).toFixed(2),c=Math.min(l/2,1),u=l<.4?"#5b8dd9":l<.8?"#2d9e5f":l<1.2?"#f5a030":"#e07050",d=l<.4?"Transpiration faible":l<.8?"Transpiration optimale":l<1.2?"Forte transpiration":"Stress hydrique",f=[{from:0,to:.2,color:"#5b8dd9"},{from:.2,to:.4,color:"#45b7d1"},{from:.4,to:.6,color:"#2d9e5f"},{from:.6,to:.8,color:"#a0c840"},{from:.8,to:.9,color:"#f5a030"},{from:.9,to:1,color:"#e07050"}],s=t.find(r=>{const m=D[r.model]||[];return m.some(p=>p.id==="temp")&&m.some(p=>p.id==="humidite")});e.innerHTML=`<div class="w-dpv-wrap">
    <div class="w-dpv-gauge" style="color:${u}">${tn(c,f,d,l+" kPa")}</div>
    <div class="w-dpv-details">
      <div class="w-dpv-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${n.toFixed(1)} °C</div>
      <div class="w-dpv-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${a} %</div>
    </div>
    ${s?`<div class="w-sensor-src">${ee[s.model]||s.model} · ${s.serial}</div>`:""}
  </div>`}function rn(e){if(!P.filter(r=>x.linkedSensorIds.includes(r.id)).some(r=>{const m=D[r.model]||[];return m.some(p=>p.id==="temp")&&m.some(p=>p.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=R(20,35),a=$(45,90),o=+(n-.55*(1-a/100)*(n-14.5)).toFixed(0),l=o<68?"#2d9e5f":o<72?"#f5c842":o<79?"#f5a030":"#e07050",c=o<68?"Confort":o<72?"Stress léger":o<79?"Stress modéré":"Stress sévère",u=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],d=new Date,f=Array.from({length:3},(r,m)=>{const p=new Date(d);return p.setDate(p.getDate()+m+1),{day:u[p.getDay()],m:$(64,72),j:$(68,80),s:$(62,70)}}),s=r=>r<68?"#2d9e5f":r<72?"#f5c842":"#f5a030";e.innerHTML=`<div class="w-thi-wrap">
    <div class="w-thi-header">
      <div class="w-thi-score" style="color:${l}">
        <div class="w-thi-val">${o}</div>
        <div class="w-thi-status">${c}</div>
      </div>
      <button class="w-thi-info-btn" title="Légende THI"><i class="bi bi-info-circle"></i></button>
    </div>
    <div class="w-thi-details">
      <div class="w-thi-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${n.toFixed(1)} °C</div>
      <div class="w-thi-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${a} %</div>
    </div>
    <div class="w-thi-forecast">
      <div class="w-thi-fc-label">Prévisions</div>
      ${f.map(r=>`<div class="w-thi-fc-row">
        <span class="w-thi-fc-day">${r.day}</span>
        <span class="w-thi-fc-val" style="color:${s(r.m)}">${r.m}</span>
        <span class="w-thi-fc-val" style="color:${s(r.j)}">${r.j}</span>
        <span class="w-thi-fc-val" style="color:${s(r.s)}">${r.s}</span>
      </div>`).join("")}
      <div class="w-thi-fc-legend"><span>Matin</span><span>Journée</span><span>Soir</span></div>
    </div>
  </div>`,e.querySelector(".w-thi-info-btn").addEventListener("click",r=>{r.stopPropagation();const m=e.querySelector(".w-thi-legend");if(m){m.remove();return}const p=document.createElement("div");p.className="w-thi-legend",p.innerHTML=`
      <div class="w-thi-legend-title">Échelle THI</div>
      <div class="w-thi-legend-row" style="color:#2d9e5f"><span class="w-thi-legend-range">&lt; 68</span><span>Confort</span></div>
      <div class="w-thi-legend-row" style="color:#f5c842"><span class="w-thi-legend-range">68 – 71</span><span>Stress léger</span></div>
      <div class="w-thi-legend-row" style="color:#f5a030"><span class="w-thi-legend-range">72 – 78</span><span>Stress modéré</span></div>
      <div class="w-thi-legend-row" style="color:#e07050"><span class="w-thi-legend-range">≥ 79</span><span>Stress sévère</span></div>`,e.querySelector(".w-thi-wrap").insertBefore(p,e.querySelector(".w-thi-details"))})}function ln(e){if(!P.filter(u=>x.linkedSensorIds.includes(u.id)).some(u=>{const d=D[u.model]||[];return d.some(f=>f.id==="temp")&&d.some(f=>f.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=72,a=R(14,22),o=Array.from({length:n},(u,d)=>+(a+6*Math.sin(d/24*2*Math.PI-Math.PI/2)+R(-.5,.5)).toFixed(1)),l=Array.from({length:n},(u,d)=>Math.max(30,Math.min(100,70-15*Math.sin(d/24*2*Math.PI-Math.PI/2)+R(-3,3)))),c=o.map((u,d)=>{const f=l[d]/100,s=17.27,r=237.3,m=Math.log(f)+s*u/(r+u);return+(r*m/(s-m)).toFixed(1)});e.innerHTML=`<div class="w-temprosee-wrap">
    ${Tt([{values:o,color:"#FBAF05"},{values:c,color:"#72B0D8"}],380,100)}
    <div class="w-temprosee-legend">
      <span style="color:#FBAF05"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Température (${o[n-1]}°C)</span>
      <span style="color:#72B0D8"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Point de rosée (${c[n-1]}°C)</span>
      <span style="font-size:10px;color:var(--txt3)">3 derniers jours</span>
    </div>
  </div>`}function cn(e){if(!P.filter(B=>x.linkedSensorIds.includes(B.id)).some(B=>(D[B.model]||[]).some(H=>H.id==="tsol"))){e.innerHTML='<div class="dash-empty">Capteur T. sol requis</div>';return}const n=48,a=R(14,20),o=Array.from({length:n},(B,H)=>+(a+3*Math.sin(H/24*2*Math.PI-Math.PI/2)+R(-.4,.4)).toFixed(1)),l=15,c=22,u=380,d=100,f=28,s=8,r=6,m=20,p=u-f-s,h=d-r-m,v=[...o,l,c],g=Math.min(...v)-1,b=Math.max(...v)+1,w=B=>(f+B/(n-1)*p).toFixed(1),y=B=>(r+h-(B-g)/(b-g)*h).toFixed(1),S=+y(l),M=+y(c),k=[.25,.5,.75].map(B=>{const H=(r+B*h).toFixed(1);return`<line x1="${f}" y1="${H}" x2="${u-s}" y2="${H}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),T=o.map((B,H)=>`${H?"L":"M"}${w(H)},${y(B)}`).join("");e.innerHTML=`<div class="w-tsol-wrap">
    <svg width="100%" height="${d}" viewBox="0 0 ${u} ${d}" preserveAspectRatio="none">
      ${k}
      <rect x="${f}" y="${M.toFixed(1)}" width="${p}" height="${(S-M).toFixed(1)}" fill="rgba(45,158,95,.1)"/>
      <line x1="${f}" y1="${S.toFixed(1)}" x2="${u-s}" y2="${S.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <line x1="${f}" y1="${M.toFixed(1)}" x2="${u-s}" y2="${M.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <path d="${T}" fill="none" stroke="#795548" stroke-width="2" stroke-linejoin="round"/>
      <text x="${f-3}" y="${r+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${b.toFixed(0)}</text>
      <text x="${f-3}" y="${r+h+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>
    </svg>
    <div class="w-tsol-legend">
      <span style="color:#795548"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sol · ${o[n-1]}°C</span>
      <span style="color:#2d9e5f;font-size:10px"><i class="bi bi-square-fill" style="opacity:.3"></i> Zone optimale ${l}–${c}°C</span>
      <span style="font-size:10px;color:var(--txt3)">48 dernières heures</span>
    </div>
  </div>`}function dn(e){const t=(x.crop||C.crop||"").toLowerCase();if(!t.includes("maïs")&&!t.includes("mais")){e.innerHTML='<div class="dash-empty">Culture Maïs requise</div>';return}const i=[{name:"Farmflex 253",target:1320},{name:"DKC 3230",target:1380},{name:"Ronaldinio",target:1290},{name:"Banguy",target:1350}],n=i[j%i.length],a=C.degresJour||$(600,1200),o=Math.min(a/n.target,1),l=Math.max(0,n.target-a),c=new Date,u=Math.round(l/10),d=new Date(c);d.setDate(d.getDate()+Math.max(0,u-5));const f=new Date(c);f.setDate(f.getDate()+u+5);const s=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],r=m=>`${m.getDate()} ${s[m.getMonth()]}`;e.innerHTML=`<div class="w-maizy-wrap">
    <div class="w-maizy-title">Récolte prévisionnelle</div>
    <div class="w-maizy-dates">${r(d)} — ${r(f)}</div>
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
  </div>`}function un(e){const t=(x.crop||C.crop||"").toLowerCase();if(!t.includes("pommier")&&!t.includes("pomme")){e.innerHTML='<div class="dash-empty">Culture Pommier requise</div>';return}const i=new Date,n=new Date(i);n.setDate(n.getDate()-$(2,8));const a=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],o=f=>`${f.getDate()} ${a[f.getMonth()]}`,l=$(8,24),c=$(80,280),u=c>200?"Élevé":c>120?"Modéré":"Léger",d=c>200?"#e07050":c>120?"#f5a030":"#2d9e5f";e.innerHTML=`<div class="w-tav-wrap">
    <div class="w-tav-ep">Dernier épisode · <strong>${o(n)}</strong></div>
    <div class="w-tav-stats">
      <div class="w-tav-stat"><span class="w-tav-stat-val">${l}h</span><span class="w-tav-stat-lbl">Durée</span></div>
      <div class="w-tav-stat"><span class="w-tav-stat-val">${c} DH</span><span class="w-tav-stat-lbl">Degrés-heures</span></div>
    </div>
    <div class="w-tav-risk" style="color:${d}">
      <i class="bi bi-circle-fill" style="font-size:8px;vertical-align:middle"></i>
      Risque d'infection estimé <strong>${u}</strong>
    </div>
    <a class="w-maizy-link" href="#">Afficher l'historique <i class="bi bi-arrow-right"></i></a>
  </div>`}const Pt=[{id:"j7",label:"J-7"},{id:"j1",label:"J-1"},{id:"j0",label:"J0"},{id:"last",label:"Dernières données"}],mn=Pt.filter(e=>e.id==="j7"||e.id==="j1"),vt=()=>`w-reservoir-agg-${j}`,bt=()=>`w-profil-reservoir-agg-${j}`;function Ht(e,t="j0"){return localStorage.getItem(e())||t}function Ft(e,t){localStorage.setItem(e(),t)}function qt(e){const t=C.reserveHydrique||80,i=(C.id*17+13)%41,n={j7:-8,j1:-2,j0:0,last:1},a=Math.min(95,Math.max(15,55+i+(n[e]||0))),o=Math.round(t*a/100);return{rhu:t,pct:a,mm:o}}function Dt(e,t=Pt){return`<select class="w-reservoir-agg-sel">
    ${t.map(i=>`<option value="${i.id}"${i.id===e?" selected":""}>${i.label}</option>`).join("")}
  </select>`}function Rt(e){const t=Ht(vt),{rhu:i,pct:n,mm:a}=qt(t),o=n>60?"#2d9e5f":n>35?"#e07820":"#e04040";e.innerHTML=`
    <div class="w-bilan-layout">
      ${Dt(t)}
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track"><div class="w-bilan-gauge-fill" style="width:${n}%;background:${o}"></div></div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${o}">${a} mm / ${i} mm RFU (${n} %)</span>
          <span>${i} mm</span>
        </div>
      </div>
    </div>`,e.querySelector(".w-reservoir-agg-sel").addEventListener("change",l=>{Ft(vt,l.target.value),Rt(e)})}function Ot(e){const t=Ht(bt,"j1"),{pct:i}=qt(t),n=(C.id*17+13)%41,a=[{label:"10 cm",pct:Math.min(100,Math.max(0,i+n%12-5)),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,Math.max(0,i+n%8)),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,Math.max(0,i-n%10+3)),color:"#a07010"}];e.innerHTML=`
    <div class="w-bilan-layout">
      ${Dt(t,mn)}
      <div class="w-bilan-horizons">
        ${a.map(o=>`
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${o.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${o.pct}%;background:${o.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${o.color}">${o.pct} %</span>
          </div>`).join("")}
      </div>
    </div>`,e.querySelector(".w-reservoir-agg-sel").addEventListener("change",o=>{Ft(bt,o.target.value),Ot(e)})}function le(e){e.innerHTML=`<div class="dash-empty" style="padding-top:20px">
    <i class="bi bi-hourglass" style="font-size:20px;opacity:.3;display:block;margin-bottom:6px"></i>
    Widget bientôt disponible
  </div>`}function X(e){return t=>{var d,f;const i=P.filter(s=>x.linkedSensorIds.includes(s.id)),n={"w-station":s=>["P+","PT","SMV","P"].includes(s.model),"w-thygro":s=>s.model==="TH","w-tsol":s=>s.model==="T_MINI","w-anem":s=>s.model==="W","w-pyrano":s=>s.model==="PYRANO","w-lws":s=>s.model==="LWS","w-par":s=>s.model==="PAR","w-capa":s=>s.model.startsWith("CAPA-"),"w-tensio":s=>_.includes(s.model),"w-ec":s=>s.model==="EC"},a=i.find(n[e]||(()=>!1));if(!a){t.innerHTML='<div class="dash-empty">Aucun capteur compatible lié</div>';return}const o=D[a.model]||[],c=({"w-station":()=>{const s=[];return o.some(r=>r.id==="temp")&&s.push({label:"Température",val:$(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"}),o.some(r=>r.id==="pluie")&&s.push({label:"Pluie 24h",val:$(0,14)+" mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy"}),o.some(r=>r.id==="humidite")&&s.push({label:"Humidité",val:$(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}),s},"w-thygro":()=>[{label:"Température",val:$(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"},{label:"Humidité",val:$(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}],"w-tsol":()=>[{label:"Temp. sol",val:$(8,22)+" °C",color:"#795548",icon:"bi-layers"}],"w-anem":()=>[{label:"Vitesse",val:$(0,40)+" km/h",color:"#616161",icon:"bi-wind"},{label:"Direction",val:["N","NE","E","SE","S","SO","O","NO"][$(0,7)],color:"#616161",icon:"bi-compass"}],"w-pyrano":()=>[{label:"Rayonnement",val:$(100,900)+" W/m²",color:"#CBCB0B",icon:"bi-sun"}],"w-lws":()=>[{label:"Humectation",val:R(0,12).toFixed(1)+" h/j",color:"#00887E",icon:"bi-droplet"}],"w-par":()=>[{label:"PPFD",val:$(100,2e3)+" µmol/m²/s",color:"#4CBB17",icon:"bi-brightness-high"}],"w-capa":()=>o.filter(s=>s.id.startsWith("vwc")).slice(0,3).map(s=>({label:s.name,val:$(15,45)+" %vol",color:s.color,icon:"bi-moisture"})),"w-tensio":()=>[{label:"Potentiel hydrique",val:$(10,150)+" kPa",color:"#A6C157",icon:"bi-graph-down"}],"w-ec":()=>[{label:"Conductivité",val:R(.1,3).toFixed(2)+" mS/cm",color:"#2BCDDE",icon:"bi-plug"}]}[e]||(()=>[]))();t.innerHTML=`
      <div class="w-sensor-rows">${c.map(s=>`
        <div class="w-sensor-row">
          <i class="bi ${s.icon}" style="color:${s.color};flex-shrink:0"></i>
          <span class="w-sensor-val" style="color:${s.color}">${s.val}</span>
          <span class="w-sensor-lbl">${s.label}</span>
        </div>`).join("")}</div>
      <div class="w-sensor-src">${ee[a.model]||a.model} · ${a.serial}</div>`;const u=(d=t.closest(".dash-block"))==null?void 0:d.querySelector(".dash-block-ft-link");if(u){const s=((f=document.getElementById("time-step"))==null?void 0:f.value)||"1h";u.href=`capteur-graphique.html?sensorId=${a.id}&parcelId=${j}&period=${J}&step=${s}`,u.removeAttribute("data-tab")}}}function pn(e){const t=P.filter(v=>x.linkedSensorIds.includes(v.id)),i=t.some(v=>v.model.startsWith("CAPA-")),n=t.some(v=>_.includes(v.model)),a=C.reserveHydrique||80,o=(C.id*17+13)%41,l=Math.min(95,Math.max(20,55+o)),c=Math.round(a*l/100),u=4+o%5-2,d=Math.max(2,Math.min(6,u)),f=Math.round(d*7-c*.3),s=Math.max(0,f),r=l>60?"#2d9e5f":l>35?"#e07820":"#e04040",m=l>60?"Réserve suffisante":l>35?"Réserve à surveiller":"Réserve critique",p=l>60?"bi-check-circle-fill":l>35?"bi-exclamation-circle-fill":"bi-x-circle-fill";if(!i&&!n){e.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:var(--txt3)">
      <i class="bi bi-droplet" style="font-size:24px"></i>
      <div style="font-size:13px;text-align:center">Ajoutez une sonde capacitive ou un tensiomètre pour suivre l'état hydrique</div>
    </div>`;return}const h=i?[{label:"10 cm",pct:Math.min(100,l+o%12-5),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,l+o%8),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,l-o%10+3),color:"#a07010"}]:[{label:"Potentiel",pct:l,color:"#5b8dd9"}];e.innerHTML=`
    <div class="w-bilan-layout">
      <div class="w-bilan-status" style="color:${r}">
        <i class="bi ${p}"></i> ${m}
      </div>
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track">
          <div class="w-bilan-gauge-fill" style="width:${l}%;background:${r}"></div>
        </div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${r}">${c} mm / ${a} mm RFU (${l} %)</span>
          <span>${a} mm</span>
        </div>
      </div>
      <div class="w-bilan-horizons">
        ${h.map(v=>`
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
          <div class="w-bilan-kpi-val" style="color:${s>0?"#0172A4":"var(--ok)"}">
            ${s>0?`${s} <span class="w-irrig-unit">mm</span>`:'<i class="bi bi-check2" style="font-size:14px"></i>'}
          </div>
        </div>
      </div>
    </div>`}function Nt(e){const t=document.createElement("div");if(t.className="journal-form-overlay",e==="vol"){const i=xe(j).volumeMaxM3??"",n=xe(j).debitM3h??"";t.innerHTML=`
      <div class="journal-form-modal">
        <div class="journal-form-title">Volume limité de la parcelle</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Volume limité (m³)</label>
          <input id="iwa-vol-inp" class="journal-form-input" type="number" min="0" placeholder="—" value="${i}" style="width:120px">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Débit (m³/h)</label>
          <input id="iwa-debit-inp" class="journal-form-input" type="number" min="0" step="0.1" placeholder="Ex. 12" value="${n}" style="width:120px">
        </div>
        <div style="font-size:11px;color:var(--txt3);margin-top:-4px">Si renseigné, la durée d'irrigation estimée s'affiche au survol des quantités dans le calendrier d'irrigation.</div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const a=t.querySelector("#iwa-vol-inp").value,o=t.querySelector("#iwa-debit-inp").value;ae(j,{volumeMaxM3:a!==""?parseInt(a):null,debitM3h:o!==""?parseFloat(o):null}),t.remove(),document.querySelector("#dblock-irrigations")&&Se(document.querySelector("#dblock-irrigations"))}}else{const i=x.irrigation||"";t.innerHTML=`
      <div class="journal-form-modal">
        <div class="journal-form-title">Type d'irrigation</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="iwa-type-sel" class="journal-form-input">
            ${xt.map(n=>`<option${n===(i||"Non renseigné")?" selected":""}>${n}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const n=t.querySelector("#iwa-type-sel").value;z({irrigation:n}),t.remove(),document.querySelector("#dblock-irrigations")&&Se(document.querySelector("#dblock-irrigations"))}}t.addEventListener("click",i=>{i.target===t&&t.remove()})}function zt(e,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",o=>{o.target===i&&n()}),i.querySelector("#irr-cf-close").addEventListener("click",n),i.querySelector("#irr-cf-cancel").addEventListener("click",n),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),t()})}function _t(e,t){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const i=document.createElement("div");i.className="irr-save-confirm",i.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(o=>`<div>${o}</div>`).join("")}</div>
      <a href="irrigation.html?plot=${j}" class="irr-save-confirm-link">Gérer les irrigations de toutes mes parcelles &gt;</a>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",o=>{o.target===i&&n()}),i.querySelector("#irr-confirm-close").addEventListener("click",n)}function gt(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Date</label>
        <input type="date" id="irr-m-s-date" class="journal-form-input" value="${se}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Quantité (mm)</label>
        <input type="number" id="irr-m-s-qty" class="journal-form-input" value="10" min="1">
      </div>
      <div class="journal-form-actions">
        <button class="btn-secondary" id="irr-m-s-cancel">Annuler</button>
        <button id="irr-m-s-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#irr-m-s-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-s-save").onclick=()=>{const i=t.querySelector("#irr-m-s-date").value,n=parseInt(t.querySelector("#irr-m-s-qty").value)||0;if(!i||!n)return;const a=i>se,o=()=>{O.push({iso:i,mm:n,real:!a,plotId:C.id,fromStrategy:!1}),$t(),t.remove(),Se(e),_t("Irrigation enregistrée",[`Date : ${ze(i)}`,`Quantité : ${n} mm`])},l=O.filter(c=>c.plotId===C.id&&c.iso===i);if(l.length){zt(l.length,()=>{O.splice(0,O.length,...O.filter(c=>!(c.plotId===C.id&&c.iso===i))),o()});return}o()}}function yt(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une saison d'irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Début</label>
        <input type="date" id="irr-m-sa-debut" class="journal-form-input" value="${se}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Fin</label>
        <input type="date" id="irr-m-sa-fin" class="journal-form-input" value="${si(se,120)}">
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
    </div>`,document.body.appendChild(t);const i=()=>{const n=t.querySelector("#irr-m-sa-debut").value,a=t.querySelector("#irr-m-sa-fin").value,o=parseInt(t.querySelector("#irr-m-sa-qty").value)||0,l=parseInt(t.querySelector("#irr-m-sa-freq").value)||0,c=t.querySelector("#irr-m-sa-preview");if(!n||!a||l<=0){c.textContent="—";return}let u=0,d=new Date(n),f=new Date(a);for(;d<=f&&u<200;)u++,d.setDate(d.getDate()+l);if(u>0){const s=C.area>0?Math.round(u*o*C.area*10):0,r=s>0?` · ${s.toLocaleString("fr-FR")} m³`:"";c.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${u} irrigations · ${u*o} mm${r}</span>`}else c.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'};i(),t.querySelector("#irr-m-sa-debut").addEventListener("change",i),t.querySelector("#irr-m-sa-fin").addEventListener("change",i),t.querySelector("#irr-m-sa-qty").addEventListener("input",i),t.querySelector("#irr-m-sa-freq").addEventListener("input",i),t.addEventListener("click",n=>{n.target===t&&t.remove()}),t.querySelector("#irr-m-sa-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-sa-save").onclick=()=>{const n=t.querySelector("#irr-m-sa-debut").value,a=t.querySelector("#irr-m-sa-fin").value,o=parseInt(t.querySelector("#irr-m-sa-qty").value)||10,l=parseInt(t.querySelector("#irr-m-sa-freq").value)||7;if(!n||!a)return;const c=[];let u=new Date(n),d=new Date(a);for(;u<=d&&c.length<200;)c.push(new Date(u)),u.setDate(u.getDate()+l);const f=Wt(),s=()=>{c.forEach(m=>{const p=m.toISOString().slice(0,10);O.push({iso:p,mm:o,real:p<=se,plotId:C.id,fromStrategy:!0,seasonId:f})}),$t(),t.remove(),Se(e),_t("Saison enregistrée",[`Début : ${ze(n)} · Fin : ${ze(a)}`,`${c.length} irrigations · ${o} mm · tous les ${l} j`])},r=O.filter(m=>m.plotId===C.id&&m.iso>=n&&m.iso<=a);if(r.length){zt(r.length,()=>{O.splice(0,O.length,...O.filter(m=>!(m.plotId===C.id&&m.iso>=n&&m.iso<=a))),s()});return}s()}}function Se(e){var p,h,v,g,b;const t=O.filter(w=>w.plotId===C.id),i=t.filter(w=>w.real),n=t.filter(w=>!w.real),a=i.reduce((w,y)=>w+y.mm,0),o=n.reduce((w,y)=>w+y.mm,0),l=a+o,c=x.irrigation||C.irrigation;let u="";if(t.some(w=>w.fromStrategy)){const w=[...t].sort((k,T)=>k.iso.localeCompare(T.iso)),y=w[w.length-1],S=w[w.length-2],M=S?Math.round((new Date(y.iso)-new Date(S.iso))/864e5):null;u=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${y.mm} mm</strong>${M?` tous les <strong>${M} jours</strong>`:""}.</div>
      </div>`}const f=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-act-saisie">+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" type="button" id="w-irrig-act-saison">↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`,r=c&&!new Set(["Non irrigué","Non renseigné",""]).has(c),m=()=>{var y;const w=(y=e.closest(".dash-block"))==null?void 0:y.querySelector(".dash-block-ft-link");w&&(w.textContent="Voir détails →")};if(!r){e.innerHTML=`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez renseigner un type d'irrigation sur cette parcelle.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-set-type" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,(p=e.querySelector("#w-irrig-set-type"))==null||p.addEventListener("click",()=>Nt("type")),m();return}if(!t.length){e.innerHTML=`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3)">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${f}
      </div>`,(h=e.querySelector("#w-irrig-act-saisie"))==null||h.addEventListener("click",()=>gt(e)),(v=e.querySelector("#w-irrig-act-saison"))==null||v.addEventListener("click",()=>yt(e)),m();return}e.innerHTML=`
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
          <div class="w-irrig-kpi-val" style="color:var(--txt3)">${l} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${u}
      ${f}
    </div>`,(g=e.querySelector("#w-irrig-act-saisie"))==null||g.addEventListener("click",()=>gt(e)),(b=e.querySelector("#w-irrig-act-saison"))==null||b.addEventListener("click",()=>yt(e)),m()}function fn(e){let t=null;e.querySelectorAll(".dash-block").forEach(i=>{i.addEventListener("dragstart",n=>{t=i,n.dataTransfer.effectAllowed="move",setTimeout(()=>i.classList.add("dash-drag-ghost"),0)}),i.addEventListener("dragend",()=>{i.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(n=>n.classList.remove("dash-drag-over")),t=null,ve([...e.querySelectorAll(".dash-block")].map(n=>n.dataset.id))}),i.addEventListener("dragover",n=>{n.preventDefault(),!(!t||i===t)&&(n.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),i.classList.add("dash-drag-over"))}),i.addEventListener("dragleave",()=>{i.classList.remove("dash-drag-over")}),i.addEventListener("drop",n=>{if(n.preventDefault(),!t||i===t)return;i.classList.remove("dash-drag-over");const a=[...e.querySelectorAll(".dash-block")],o=a.indexOf(t),l=a.indexOf(i);o<l?i.after(t):i.before(t)})})}
