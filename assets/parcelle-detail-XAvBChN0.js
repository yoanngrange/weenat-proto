import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as oe}from"./plots-DhtWL7s_.js";import{s as P}from"./sensors-CRadjF8G.js";import{o as Ve}from"./orgs-DnFmvGlp.js";import{m as ne}from"./members-Cr98hVG_.js";import{u as wt}from"./breadcrumb-CzFWtd6d.js";import{d as ae,c as xe}from"./store-c0FlIf2T.js";import{I as O,g as Wt,s as $t}from"./irrigations-C22Dtsoo.js";import{S as Vt,a as qe,E as Gt,I as xt}from"./constants-CJpDUNiw.js";const Ct=new URLSearchParams(window.location.search),k=parseInt(Ct.get("id")),C=oe.find(e=>e.id===k);function $(e,t){return Math.floor(Math.random()*(t-e+1))+e}function R(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}const Ge=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul d'ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",base:()=>$(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#72B0D8",base:()=>$(2,16),isCumul:!1}],Yt={id:"irrigation",name:"Irrigation",unit:"mm",color:"#FF8C00",base:()=>0,isCumul:!0,chartType:"bar",isIrrigation:!0},D={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],SMV:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>$(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>$(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>$(40,90)}],"CHP-15/30":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CHP-30/60":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CHP-60/90":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>$(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CAPA-30-3":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>$(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>$(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>$(15,45)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],"CAPA-60-6":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>$(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>$(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>$(15,45)},{id:"vwc40",name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",base:()=>$(17,43)},{id:"vwc50",name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",base:()=>$(18,42)},{id:"vwc60",name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",base:()=>$(18,42)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],T_MINI:[{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>$(8,22)}],LWS:[{id:"humec",name:"Humectation foliaire",unit:"h",color:"#00887E",base:()=>$(0,12)}],T_GEL:[{id:"tseche",name:"Temp. sèche",unit:"°C",color:"#23B19B",base:()=>$(-2,12)},{id:"thumide",name:"Temp. humide",unit:"°C",color:"#5E88EC",base:()=>$(-4,10)}],W:[{id:"_vent",name:"Vent",unit:"km/h · direction",color:"#7bc4b0",isWindComposite:!0,base:()=>$(0,40)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>R(.1,3)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>$(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>$(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}],PAR:[{id:"par",name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#c47a00",base:()=>$(0,2e3)}]},_=["CHP-15/30","CHP-30/60","CHP-60/90"],Oe=[{name:"Tensiomètre (CHP)",models:new Set(["CHP-15/30","CHP-30/60","CHP-60/90"])},{name:"Sonde capacitive (CAPA)",models:new Set(["CAPA-30-3","CAPA-60-6"])},{name:"Sonde fertirrigation (EC)",models:new Set(["EC"])},{name:"Thermomètre de sol (T_MINI)",models:new Set(["T_MINI"])}];function Ne(e){return Oe.find(t=>t.models.has(e))||null}const Jt={"CAPA-30-3":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"}],"CAPA-60-6":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"},{depth:40,label:"40 cm",vwcColor:"#949494",tsolColor:"#804828"},{depth:50,label:"50 cm",vwcColor:"#870021",tsolColor:"#603818"},{depth:60,label:"60 cm",vwcColor:"#F608C2",tsolColor:"#402810"}]},Ue=["CAPA-30-3","CAPA-60-6"],ee={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function Ut(e,t=null,i=null,a=null){const n=Math.max(2,Math.min(200,Math.floor(ve()/be()))),s=Array.from({length:n},()=>$(5,35)),c=s.map(E=>Math.min(E+$(3,18),80)),l=Array.from({length:n},()=>$(0,359)),u=600,d=200,v=46,o=16,r=16,m=28,p=u-v-o,f=d-r-m,h=Math.ceil(Math.max(...c)/10)*10||50,g=E=>v+E/Math.max(n-1,1)*p,b=E=>r+f-E/h*f,w=c.map((E,A)=>`${g(A).toFixed(1)},${b(E).toFixed(1)}`).join("L"),y=[...s].reverse().map((E,A)=>`${g(n-1-A).toFixed(1)},${b(E).toFixed(1)}`).join("L"),S=`M${w}L${y}Z`,M=s.map((E,A)=>`${A?"L":"M"}${g(A).toFixed(1)},${b(E).toFixed(1)}`).join(""),j=[.25,.5,.75].map(E=>{const A=(r+f-E*f).toFixed(1);return`<line x1="${v}" y1="${A}" x2="${u-o}" y2="${A}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),I=[0,.5,1].map(E=>{const A=r+f-E*f;return`<text x="${v-4}" y="${(A+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(E*h)}</text>`}).join(""),B=`<line x1="${v}" y1="${r+f}" x2="${u-o}" y2="${r+f}" stroke="var(--bdr2)" stroke-width="1"/>`,H=Math.max(1,Math.floor(n/6));let F="";for(let E=0;E<n;E+=H){const A=(n-1-E)/Math.max(n-1,1)*ve();F+=`<text x="${g(E).toFixed(1)}" y="${(r+f+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Me(A)}</text>`}const W=Math.max(1,Math.round(n/25)),Z=[];for(let E=0;E<n;E+=W){const A=g(E).toFixed(1),N=(r+f*.35).toFixed(1);Z.push(`<g transform="translate(${A},${N}) rotate(${l[E]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const q=document.createElement("div");q.className="chart-card",a&&(q.dataset.cardKey=a,q.draggable=!0);const ge=t?`<span class="chart-card-source">${t}</span>`:"",T=i!=null?`<span class="chart-card-emission">il y a ${i} min</span>`:"";q.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
      <div class="chart-card-meta">${ge}${T}</div>
    </div>
    <svg width="100%" height="${d}" viewBox="0 0 ${u} ${d}" preserveAspectRatio="none">
      ${I}${j}${B}${F}
      <path d="${S}" fill="#7bc4b0" opacity=".18"/>
      <path d="${M}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${Z.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(q)}const Xt=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let x={};function Kt(){const e=xe(k);if(x={...C,...e},!x.linkedSensorIds){const a=P.filter(n=>n.parcelIds.includes(k)).map(n=>n.id);x.linkedSensorIds=e.linkedSensorIds??a}x.integrations||(x.integrations=[...C.integrations||[]]),x.alertes||(x.alertes=[]);const t=P.filter(a=>x.linkedSensorIds.includes(a.id)),i=Oe.find(a=>t.some(n=>a.models.has(n.model)));i&&Oe.some(n=>n!==i&&t.some(s=>n.models.has(s.model)))&&(x.linkedSensorIds=x.linkedSensorIds.filter(n=>{const s=P.find(l=>l.id===n);if(!s)return!0;const c=Ne(s.model);return!c||c===i}),ae(k,{linkedSensorIds:x.linkedSensorIds}))}function z(e){Object.assign(x,e),Object.assign(C,e),ae(k,e)}let J="j7j2",me=null,pe=null;const Zt=new Set(["pluie","temp","humidite","pothydr","etp","temp_rosee","rayonnement","_vent"]),Qt={j7j2:2};function ve(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,j7j2:10080,"30d":43200,"365d":525600};return J==="custom"&&me&&pe?Math.max(60,Math.round((pe-me)/6e4)):e[J]??10080}function be(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function ei(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"||e==="j7j2"?"1d":"1h"}function ti(){const e=ve(),t=be();return Math.max(2,Math.min(200,Math.floor(e/t)))}function ii(){const e=Qt[J]||0;if(!e)return 0;const t=be();return Math.max(1,Math.round(e*1440/t))}const Xe={Cumuls:"cumuls","Maï'zy":"maizy","Suivi de culture":"suivi-culture",Weephyt:"weephyt",Decitrait:"decitrait","Tavelure Pomme":"tavelure",DPV:"dpv",THI:"thi","Température de rosée":"temp-rosee","Température du sol":"temp-sol","Rayonnement solaire":"w-pyrano",Gel:"gel","Prévisions à 5 jours":"previsions-5j","Prévisions à 6 heures":"previsions-6h","Prévisions du jour":"previsions-jour","Prévisions de tensiométrie":"previsions-tensio",Anémomètre:"w-anem","Capteur d'humectation foliaire":"w-lws","Capteur PAR":"w-par",Pyranomètre:"w-pyrano","Station météo":"w-station","Station Météo Virtuelle":"w-station","Thermomètre de sol":"w-tsol","Thermomètre-Hygromètre":"w-thygro","Bilan hydrique":"bilan",Irrigations:"irrigations","Sonde capacitive":"w-capa",Tensiomètre:"w-tensio","Sonde de fertirrigation":"w-ec","Profil capteurs":"profil-capteurs","Niveau de réservoir en eau utilisable":"niveau-reservoir","Profil de niveau de réservoir":"profil-reservoir"},ni=[{title:"Cumuls",items:["Cumuls"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Weephyt","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire","Gel"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Irrigation",items:["Bilan hydrique","Irrigations","Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]}];function ai(){const e=P.filter(d=>x.linkedSensorIds.includes(d.id)),t=new Set(e.map(d=>d.model)),i=(x.crop||C.crop||"").toLowerCase(),a=fe(),n=e.some(d=>{const v=D[d.model]||[];return v.some(o=>o.id==="temp")&&v.some(o=>o.id==="humidite")}),s=e.some(d=>(D[d.model]||[]).some(v=>v.id==="tsol")),c=e.some(d=>(D[d.model]||[]).some(v=>v.cumul)),l=d=>Xe[d]?d==="Gel"?t.has("T_GEL"):d==="Maï'zy"?i.includes("maïs")||i.includes("mais"):d==="Tavelure Pomme"?i.includes("pommier"):d==="Station météo"?t.has("P+")||t.has("PT")||t.has("P"):d==="Station Météo Virtuelle"?t.has("SMV"):d==="Thermomètre-Hygromètre"?t.has("TH"):d==="Thermomètre de sol"?t.has("T_MINI")||s:d==="Anémomètre"?t.has("W"):d==="Pyranomètre"||d==="Rayonnement solaire"?t.has("PYRANO"):d==="Capteur d'humectation foliaire"?t.has("LWS"):d==="Capteur PAR"?t.has("PAR"):d==="Bilan hydrique"?[...t].some(o=>o.startsWith("CAPA-"))||[...t].some(o=>_.includes(o)):d==="Irrigations"?!0:d==="Sonde capacitive"?[...t].some(o=>o.startsWith("CAPA-")):d==="Tensiomètre"?[...t].some(o=>_.includes(o)):d==="Sonde de fertirrigation"?t.has("EC"):d==="DPV"||d==="THI"||d==="Température de rosée"?n:d==="Température du sol"?s:d==="Cumuls"?c:!0:!0,u=document.createElement("div");u.className="modal add-modal",u.innerHTML=`
    <div class="add-modal-content" style="max-width:520px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter un widget</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      ${ni.map(d=>{const v=d.items.filter(l);return v.length?`
        <div class="add-modal-section">
          <div class="add-modal-section-label">${d.title}</div>
          <div class="wcat-list">
            ${v.map(o=>{const r=Xe[o],m=r&&a.includes(r);return`
              <div class="wcat-item">
                <span>${o}</span>
                ${m?'<span class="wcat-already"><i class="bi bi-check2"></i> Ajouté</span>':`<button class="wcat-add-btn" type="button" data-wid="${r}"><i class="bi bi-plus-circle"></i> Ajouter</button>`}
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")}
    </div>`,u.addEventListener("click",d=>{d.target===u&&u.remove()}),u.querySelector(".add-modal-close").addEventListener("click",()=>u.remove()),u.querySelectorAll(".wcat-add-btn").forEach(d=>{d.addEventListener("click",()=>{const v=d.dataset.wid;if(!v)return;const o=fe();o.includes(v)||(o.push(v),he(o)),u.remove(),ue()})}),document.body.appendChild(u)}const ke=`weenat-journal-${k}`,se=new Date().toISOString().slice(0,10);function si(e,t){const i=new Date(e);return i.setDate(i.getDate()+t),i.toISOString().slice(0,10)}function ze(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,i,a]=e.split("-");return`${parseInt(a)} ${t[parseInt(i)-1]} ${e.split("-")[0]}`}const oi=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"];function ri(){const e=C,t=[],i=(l,u,d="Système")=>t.push({id:"auto-"+l+u.slice(0,8),type:"modification",date:l,texte:u,auteur:d}),a=e.orgId===1,n=a?"Jean-Michel Dutilleul":"Thomas Bertrand",s=a?"Alexandre Bernard":"Sophie Dubois";return i("2024-01-01","Création de la parcelle",n),e.crop&&i("2024-03-15",`Culture définie : ${e.crop}`,n),e.texture&&i("2024-03-15",`Texture de sol définie : ${e.texture}`,n),e.irrigation&&i("2024-04-01",`Type d'irrigation : ${e.irrigation}`,n),P.filter(l=>x.linkedSensorIds.includes(l.id)).forEach(l=>i("2024-06-10",`Liaison capteur : ${ee[l.model]||l.model} · ${l.serial}`,s)),i("2026-03-01","Début de cycle cultural 2026",n),t}const li=new Set(["culture","stade","irrigation","cycle"]),Ke=[["BBCH 21 — Tallage actif","BBCH 30 — Début montaison","BBCH 45 — Gonflement épis"],["BBCH 13 — 3 feuilles étalées","BBCH 31 — Début élongation","BBCH 59 — Fin de floraison"],["BBCH 09 — Levée","BBCH 40 — Développement des organes de récolte","BBCH 49 — Taille de récolte atteinte"],["BBCH 15 — 5 feuilles étalées","BBCH 51 — Apparition inflorescence","BBCH 69 — Fin de floraison"]],Ze=["Apache","RGT Bilboa","Soissons","Fixion","Forum","Allez-y"],Qe=["Mise en place de la saison 2026","Démarrage de la nouvelle campagne","Lancement de la saison sur cette parcelle"],et=["Développement homogène sur la parcelle","Légère hétérogénéité en bordure, sous surveillance","Bon développement, conforme aux attentes"];function tt(e,t){const i=C.crop||"Blé tendre",a=C.id%100,n=Ke[C.id%Ke.length],s=Ze[C.id%Ze.length],c=C.id%6;return[{id:17434656e5,type:"cycle",date:te("2026-03-01",c),auteur:e,action:"début",annee:"2026",texte:Qe[a%Qe.length]},{id:17438976e5,type:"culture",date:te("2026-03-06",c),auteur:e,action:"modification",culture:i,variete:s,texte:"Culture confirmée pour la saison 2026"},{id:17443296e5,type:"stade",date:te("2026-04-11",c),auteur:e,stade:n[0],culture:i,texte:""},{id:17453664e5,type:"stade",date:te("2026-04-23",c),auteur:t,stade:n[1],culture:i,texte:""},{id:17460576e5,type:"stade",date:te("2026-05-01",c),auteur:t,stade:n[2],culture:i,texte:et[a%et.length]}]}function te(e,t){const i=new Date(e+"T00:00:00");return i.setDate(i.getDate()+t),i.toISOString().slice(0,10)}function ci(e){return O.filter(t=>t.plotId===e&&t.real).map(t=>({id:`auto-irrig-${e}-${t.iso}-${t.mm}`,type:"irrigation",date:t.iso,volume:t.mm,unite:"mm",methode:C.irrigation||"",texte:"Irrigation effectuée.",auteur:"Système",_auto:!0}))}function $e(){const e=C.orgId===1,t=e?"Jean-Michel Dutilleul":"Thomas Bertrand",i=e?"Marie Martin":"Sophie Dubois";try{const u=localStorage.getItem(ke);if(u){const d=JSON.parse(u);if(Array.isArray(d)){if(!d.some(o=>li.has(o.type))){const o=[...tt(t,i),...d];return localStorage.setItem(ke,JSON.stringify(o)),o}return d}}}catch{}const a=[{cible:"Pucerons",produit:"Karate Zeon 10 CS",dose:"0,1 L/ha",obs1:"Observation de quelques pucerons sur les feuilles basses. À surveiller.",obs2:"peu de pucerons visibles, situation sous contrôle."},{cible:"Mildiou",produit:"Bordeaux mixture",dose:"2 kg/ha",obs1:"Taches suspectes observées sur les feuilles basses, conditions humides.",obs2:"progression stoppée, feuillage sain."},{cible:"Limaces",produit:"Métaldéhyde",dose:"5 kg/ha",obs1:"Dégâts de limaces constatés en bordure de parcelle après les pluies.",obs2:"dégâts limités, population réduite."},{cible:"Altises",produit:"Karaté K",dose:"75 mL/ha",obs1:"Présence d'altises sur jeunes plants, seuil de nuisibilité approché.",obs2:"population sous contrôle, reprise normale."}],n=C.id%a.length,s=a[n],c=C.id%6,l=[{id:17469216e5,type:"note",category:"Observation générale",date:te("2026-05-11",c),auteur:t,texte:s.obs1},{id:17473536e5,type:"traitement",date:te("2026-05-16",c),auteur:i,texte:"Application conforme aux conditions météo. Vent < 2 m/s.",produit:s.produit,dose:s.dose,cible:s.cible},{id:17477856e5,type:"note",category:"Observation générale",date:te("2026-05-21",c),auteur:t,texte:`Suite traitement du ${te("2026-05-16",c).split("-").reverse().slice(0,2).join("/")} : ${s.obs2}`},...tt(t,i)];return localStorage.setItem(ke,JSON.stringify(l)),l}function St(e){localStorage.setItem(ke,JSON.stringify(e))}function Ye(){const e=document.getElementById("journal-container");if(!e)return;const t=$e(),i=[...ri(),...ci(k)],a=[...t,...i].sort((o,r)=>r.date.localeCompare(o.date)),n=o=>{const[r,m,p]=o.split("-");return`${p}/${m}/${r}`},s={note:{label:"Note",icon:"bi-pencil",dotCls:"note",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotCls:"traitement",badgeCls:"traitement"},modification:{label:"Modification",icon:"bi-pencil-square",dotCls:"modification",badgeCls:"modification"},culture:{label:"Culture",icon:"bi-flower1",dotCls:"culture",badgeCls:"culture"},cycle:{label:"Cycle cultural",icon:"bi-arrow-repeat",dotCls:"cycle",badgeCls:"cycle"},stade:{label:"Stade phéno.",icon:"bi-calendar2-check",dotCls:"stade",badgeCls:"stade"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotCls:"irrigation",badgeCls:"irrigation"}};let l=`
    <div class="journal-add-bar">
      <div class="jrn-add-wrap" id="jrn-add-wrap">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="jrn-add-btn" style="width:auto">
          <i class="bi bi-plus-lg"></i> Ajouter
          <i class="bi bi-chevron-down" style="font-size:10px;margin-left:1px"></i>
        </button>
        <div class="jrn-add-menu" id="jrn-add-menu">
          ${[{type:"note",label:"Note",icon:"bi-pencil-square"},{type:"traitement",label:"Traitement phytosanitaire",icon:"bi-eyedropper"},null,{type:"culture",label:"Culture",icon:"bi-flower1"},{type:"stade",label:"Stade phénologique",icon:"bi-calendar2-check"},{type:"irrigation",label:"Irrigation",icon:"bi-droplet-half"},{type:"cycle",label:"Cycle cultural",icon:"bi-arrow-repeat"}].map(o=>o===null?'<div class="jrn-add-sep"></div>':`<button class="jrn-add-item" data-type="${o.type}">
                <i class="bi ${o.icon}"></i> ${o.label}
               </button>`).join("")}
        </div>
      </div>
    </div>
    <div class="journal-timeline">
  `;a.length===0?l+='<div class="journal-empty">Aucune entrée dans le journal.</div>':a.forEach(o=>{var f;const r=s[o.type]||s.note,m=o.type==="modification"||o._auto===!0,p=o.type==="traitement";l+=`
        <div class="jrn-entry" data-id="${o.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot jrn-dot--${r.dotCls}"><i class="bi ${r.icon}"></i></div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${n(o.date)}</span>
              <span class="journal-type-badge journal-type-badge--${r.badgeCls}">
                ${r.label}
              </span>
              ${o.auteur?`<span class="jrn-entry-auteur">${o.auteur}</span>`:""}
              ${m?"":`<button class="jrn-entry-delete" data-id="${o.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>`}
            </div>
            ${o.texte?`<div class="jrn-entry-texte">${o.texte}</div>`:""}
            ${p&&(o.produit||o.dose||o.cible)?`
              <div class="jrn-entry-meta">
                ${o.produit?`<span class="jrn-entry-meta-chip"><i class="bi bi-flask"></i>${o.produit}</span>`:""}
                ${o.dose?`<span class="jrn-entry-meta-chip"><i class="bi bi-droplet"></i>${o.dose}</span>`:""}
                ${o.cible?`<span class="jrn-entry-meta-chip"><i class="bi bi-bullseye"></i>${o.cible}</span>`:""}
              </div>`:""}
            ${o.type==="culture"?`<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-tag"></i>${o.action==="ajout"?"Ajout":o.action==="retrait"?"Retrait":"Modification"}</span>
                ${o.culture?`<span class="jrn-entry-meta-chip"><i class="bi bi-flower1"></i>${o.culture}</span>`:""}
                ${o.variete?`<span class="jrn-entry-meta-chip"><i class="bi bi-tag-fill"></i>${o.variete}</span>`:""}
              </div>`:""}
            ${o.type==="stade"?`<div class="jrn-entry-meta">
                ${o.stade?`<span class="jrn-entry-meta-chip"><i class="bi bi-diagram-3"></i>${o.stade}</span>`:""}
                ${o.culture?`<span class="jrn-entry-meta-chip">${o.culture}</span>`:""}
              </div>`:""}
            ${o.type==="irrigation"?`<div class="jrn-entry-meta">
                ${o.volume?`<span class="jrn-entry-meta-chip"><i class="bi bi-droplet-fill"></i>${o.volume} ${o.unite||"mm"}</span>`:""}
                ${o.methode?`<span class="jrn-entry-meta-chip"><i class="bi bi-water"></i>${o.methode}</span>`:""}
              </div>`:""}
            ${o.type==="cycle"?`<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-arrow-right-circle"></i>${o.action==="fin"?"Fin de cycle":"Début de cycle"}</span>
                ${o.annee?`<span class="jrn-entry-meta-chip"><i class="bi bi-calendar3"></i>${o.annee}</span>`:""}
              </div>`:""}
            ${(f=o.imageIds)!=null&&f.length?`<div class="jrn-entry-photos-row" data-entry-id="${o.id}"></div>`:""}
          </div>
        </div>
      `}),l+="</div>",e.innerHTML=l;const u=e.querySelector("#jrn-add-btn"),d=e.querySelector("#jrn-add-menu");u==null||u.addEventListener("click",o=>{o.stopPropagation(),d.classList.toggle("open")}),document.addEventListener("click",()=>d==null?void 0:d.classList.remove("open")),e.querySelectorAll(".jrn-add-item").forEach(o=>{o.addEventListener("click",()=>{d.classList.remove("open"),di(o.dataset.type)})}),e.querySelectorAll(".jrn-entry-delete").forEach(o=>{o.addEventListener("click",()=>{var p,f;const r=parseInt(o.dataset.id),m=$e().find(h=>h.id===r);(p=m==null?void 0:m.imageIds)!=null&&p.length&&((f=window.ImageStore)==null||f.remove(m.imageIds)),St($e().filter(h=>h.id!==r)),Ye()})});const v=window.ImageStore;v&&e.querySelectorAll(".jrn-entry-photos-row[data-entry-id]").forEach(async o=>{var m;const r=t.find(p=>String(p.id)===o.dataset.entryId);if((m=r==null?void 0:r.imageIds)!=null&&m.length)for(const p of r.imageIds)try{const f=await v.get(p);if(!f)continue;const h=document.createElement("img");h.className="jrn-entry-photo",h.src=f,h.alt="",h.addEventListener("click",()=>{var g;return(g=window.openLightbox)==null?void 0:g.call(window,f)}),o.appendChild(h)}catch{}})}function di(e){const t={note:"Ajouter une note",traitement:"Ajouter un traitement",culture:"Culture — événement",stade:"Stade phénologique",irrigation:"Irrigation",cycle:"Cycle cultural"},i=C.crop||"",a={note:`
      <div class="journal-form-row">
        <label class="journal-form-label">Catégorie</label>
        <select id="jrn-f-category" class="journal-form-input">
          ${oi.map(l=>`<option>${l}</option>`).join("")}
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
      </div>`},n=e==="note"||e==="traitement",s=document.createElement("div");s.className="modal add-modal",s.innerHTML=`
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
        ${a[e]||a.note}
        ${n?`
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
    </div>`,s.querySelector(".add-modal-close").addEventListener("click",()=>s.remove()),s.addEventListener("click",l=>{l.target===s&&s.remove()});const c=[];n&&window.ImageStore&&window.setupImgUpload(s.querySelector("#jrn-f-img-input"),s.querySelector("#jrn-f-img-btn"),s.querySelector("#jrn-f-previews"),s.querySelector("#jrn-f-img-err"),c),s.querySelector("#jrn-f-save").addEventListener("click",async()=>{var r,m;const l=s.querySelector("#jrn-f-date").value||se,u=((r=s.querySelector("#jrn-f-texte"))==null?void 0:r.value.trim())||"",d=C.orgId===1?"Jean-Michel Dutilleul":"Thomas Bertrand",v={id:Date.now(),type:e,date:l,texte:u,auteur:d};if(e==="note")v.category=((m=s.querySelector("#jrn-f-category"))==null?void 0:m.value)||"";else if(e==="traitement")v.produit=s.querySelector("#jrn-f-produit").value.trim(),v.dose=s.querySelector("#jrn-f-dose").value.trim(),v.cible=s.querySelector("#jrn-f-cible").value.trim();else if(e==="culture")v.action=s.querySelector("#jrn-f-action").value,v.culture=s.querySelector("#jrn-f-culture").value.trim(),v.variete=s.querySelector("#jrn-f-variete").value.trim();else if(e==="stade")v.stade=s.querySelector("#jrn-f-stade").value.trim(),v.culture=s.querySelector("#jrn-f-culture").value.trim();else if(e==="irrigation"){const p=parseFloat(s.querySelector("#jrn-f-volume").value);v.volume=isNaN(p)?0:p,v.unite=s.querySelector("#jrn-f-unite").value,v.methode=s.querySelector("#jrn-f-methode").value}else e==="cycle"&&(v.action=s.querySelector("#jrn-f-action").value,v.annee=s.querySelector("#jrn-f-annee").value.trim());if(u||v.produit||v.culture||v.stade||v.volume||v.annee||c.length){if(window.ImageStore&&c.length){v.imageIds=[];for(const p of c){const f=`img_${v.id}_${v.imageIds.length}`;await window.ImageStore.store(f,p),v.imageIds.push(f)}}St([v,...$e()]),s.remove(),Ye()}}),document.body.appendChild(s)}function ui(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const i=oe.filter(s=>s.orgId===C.orgId).sort((s,c)=>s.name.localeCompare(c.name,"fr")),a=document.createElement("span");a.className="breadcrumb-nav-wrap";const n=document.createElement("select");n.className="breadcrumb-nav-select",n.innerHTML=i.map(s=>`<option value="${s.id}"${s.id===k?" selected":""}>${s.name}</option>`).join(""),n.addEventListener("change",()=>{window.location.href=`parcelle-detail.html?id=${n.value}`}),a.appendChild(n),t.replaceWith(a)}document.addEventListener("DOMContentLoaded",()=>{var i,a,n;if(!C){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}Kt(),wt(x.name||C.name,{label:"Parcelles",href:"parcelles.html"}),ui(),U(),Oi(),Ui(),Xi(),Ti(),Ri(),Ki();const e=Ct.get("tab");e&&((i=document.querySelector(`.detail-tab-btn[data-pane="tab-${e}"]`))==null||i.click()),Hi(),qi(),ue(),(a=document.getElementById("parcel-add-widget-btn"))==null||a.addEventListener("click",ai),(n=document.getElementById("btn-export-csv"))==null||n.addEventListener("click",Ji),document.addEventListener("click",s=>{const c=s.target.closest(".chart-cumul-add-btn");if(!c)return;s.stopPropagation();const l=c.dataset.cumulLabel,u=c.dataset.cumulVal;if(!confirm(`Ajouter "${l} : ${u}" au tableau de bord ?`))return;const d=document.createElement("div");d.textContent="Cumul ajouté au tableau de bord",Object.assign(d.style,{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",background:"rgba(28,28,30,.9)",color:"#fff",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",zIndex:"9999",pointerEvents:"none"}),document.body.appendChild(d),setTimeout(()=>d.remove(),2500)});const t=document.getElementById("sidebar");t&&new MutationObserver(()=>ce()).observe(t,{attributes:!0,attributeFilter:["data-role"]})});let Ae="capteur",G=null;const Mt=`charts-order-parcel-${k}`;function mi(){try{return JSON.parse(localStorage.getItem(Mt)||"null")}catch{return null}}function pi(e){localStorage.setItem(Mt,JSON.stringify(e))}function vi(e){let t=null;e.addEventListener("dragstart",i=>{const a=i.target.closest(".chart-card[data-card-key]");a&&(t=a,a.classList.add("chart-dragging"),i.dataTransfer.effectAllowed="move")}),e.addEventListener("dragend",()=>{t==null||t.classList.remove("chart-dragging"),e.querySelectorAll(".chart-card").forEach(a=>a.classList.remove("chart-drag-over")),t=null;const i=[...e.querySelectorAll(".chart-card[data-card-key]")].map(a=>a.dataset.cardKey);pi(i)}),e.addEventListener("dragover",i=>{if(i.preventDefault(),!t)return;const a=i.target.closest(".chart-card[data-card-key]");if(!a||a===t)return;e.querySelectorAll(".chart-card").forEach(s=>s.classList.remove("chart-drag-over")),a.classList.add("chart-drag-over");const n=a.getBoundingClientRect().top+a.getBoundingClientRect().height/2;e.insertBefore(t,i.clientY<n?a:a.nextSibling)}),e.addEventListener("drop",i=>{i.preventDefault(),e.querySelectorAll(".chart-card").forEach(a=>a.classList.remove("chart-drag-over"))})}function fi(e,t){const i=P.filter(o=>t.includes(o.id)),a=i.filter(o=>_.includes(o.model)),n=i.filter(o=>Ue.includes(o.model)),s=i.filter(o=>!_.includes(o.model)&&!Ue.includes(o.model)),c=be(),l=new Set;i.forEach(o=>(D[o.model]||[]).forEach(r=>l.add(r.id)));const u=[];if(s.forEach(o=>{const r=D[o.model];if(!r)return;const m=`${o.model} · ${o.serial}`,p=Math.floor(5+Math.random()*55);r.forEach(f=>{if(f.isWindComposite){u.push({key:`wind-${o.id}`,type:"wind",sensor:o,source:m,emissionMins:p});return}u.push({key:`s${o.id}-${f.id}`,type:"metric",metric:f,source:m,emissionMins:p,sensorId:o.id})})}),a.length>0){const o=`Tensiomètres · ${a.length} capteur${a.length>1?"s":""}`,r=Math.floor(5+Math.random()*55);["pothydr","tsol"].forEach(m=>{u.push({key:`tensio-${m}`,type:"tensio",metricId:m,source:o,emissionMins:r,tensioSensors:a})})}n.forEach(o=>{const r=Jt[o.model]||[],m=`${ee[o.model]||o.model} · ${o.serial}`,p=Math.floor(5+Math.random()*55);r.length>0&&(u.push({key:`capa-vwc-${o.id}`,type:"capa-vwc",sensor:o,horizons:r,source:m,emissionMins:p}),u.push({key:`capa-tsol-${o.id}`,type:"capa-tsol",sensor:o,horizons:r,source:m,emissionMins:p}))}),Ge.filter(o=>!l.has(o.id)).forEach(o=>u.push({key:`always-${o.id}`,type:"metric",metric:o,source:"parcelle",emissionMins:null,unavailable:c<60})),(!!C.irrigation&&C.irrigation!=="Non irrigué"||O.some(o=>o.plotId===k))&&u.push({key:"always-irrigation",type:"metric",metric:Yt,source:"parcelle",emissionMins:null});const v=mi();if(v!=null&&v.length){const o=new Map(v.map((r,m)=>[r,m]));u.sort((r,m)=>(o.has(r.key)?o.get(r.key):1/0)-(o.has(m.key)?o.get(m.key):1/0))}u.forEach(o=>{o.type==="metric"?_e(e,o.metric,o.source,o.emissionMins,o.key,o.unavailable,o.sensorId):o.type==="wind"?Ut(e,o.source,o.emissionMins,o.key):o.type==="tensio"?gi(e,o.metricId,o.tensioSensors,o.source,o.emissionMins,o.key):o.type==="capa-vwc"?yi(e,o.horizons,o.source,o.emissionMins,o.key):o.type==="capa-tsol"&&wi(e,o.horizons,o.source,o.emissionMins,o.key)}),vi(e)}function Le(e){const t=P.filter(n=>e.includes(n.id)),i=new Set,a=[];return t.forEach(n=>{(D[n.model]||[]).forEach(s=>{i.has(s.id)||(i.add(s.id),a.push(s))})}),Ge.forEach(n=>{i.has(n.id)||(i.add(n.id),a.push(n))}),a}function U(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",G){e.className="compare-rows";const i=oe.find(p=>p.id===G),a=document.createElement("div");a.className="compare-header-row",a.innerHTML=`
      <div class="compare-col-header"><span>${x.name||C.name}</span></div>
      <div class="compare-col-header">
        <span>${(i==null?void 0:i.name)||"Parcelle"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(a),(t=a.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{G=null,He(),U()});const n=Le(x.linkedSensorIds),s=xe(G),c=(s==null?void 0:s.linkedSensorIds)??P.filter(p=>p.parcelIds.includes(G)).map(p=>p.id),l=Le(c),u=n.map(p=>p.id),d=l.map(p=>p.id),v=u.filter(p=>d.includes(p)),o=u.filter(p=>!d.includes(p)),r=d.filter(p=>!u.includes(p));[...v,...o,...r].forEach(p=>{const f=n.find(y=>y.id===p),h=l.find(y=>y.id===p),g=document.createElement("div");g.className="compare-row";const b=document.createElement("div");f?_e(b,f):b.innerHTML='<div class="compare-chart-empty">—</div>';const w=document.createElement("div");h?_e(w,h):w.innerHTML='<div class="compare-chart-empty">—</div>',g.appendChild(b),g.appendChild(w),e.appendChild(g)})}else e.className="charts-stack",fi(e,x.linkedSensorIds);Ei()}const we=["#5b8dd9","#e07050","#4ecdc4","#f5c842","#c090e0","#78d8a0"];function hi(e){const t=e.depth||30;return[{depth:t,label:`${t} cm`,sensor:e}]}function bi(e){if(Ae==="capteur")return e.map((i,a)=>({label:i.serial,color:we[a%we.length],depth:i.depth||30,sensor:i}));const t=new Map;return e.forEach(i=>hi(i).forEach(a=>{t.has(a.depth)||t.set(a.depth,a)})),[...t.values()].sort((i,a)=>i.depth-a.depth).map((i,a)=>({label:i.label,color:we[a%we.length],depth:i.depth,sensor:i.sensor}))}function gi(e,t,i,a=null,n=null,s=null){var p;const l={pothydr:{name:"Potentiel hydrique",unit:"kPa"},tsol:{name:"Température du sol",unit:"°C"}}[t],u=bi(i),d=document.createElement("div");d.className="chart-card tensio-multi-card",d.dataset.tensioMetric=t,d.dataset.tensioCurves=JSON.stringify(u.map(f=>({depth:f.depth,color:f.color}))),s&&(d.dataset.cardKey=s,d.draggable=!0);const v=u.map(f=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${f.color};vertical-align:middle;border-radius:1px"></span>
      ${f.label}
    </span>`).join(""),o=a?`<span class="chart-card-source">${a}</span>`:"",r=n!=null?`<span class="chart-card-emission">il y a ${n} min</span>`:"",m=`
    <div class="chart-tensio-toggle">
      <button class="btn-secondary btn-sm tensio-toggle-btn${Ae==="capteur"?" active":""}" data-mode="capteur">Par capteur</button>
      <button class="btn-secondary btn-sm tensio-toggle-btn${Ae==="horizon"?" active":""}" data-mode="horizon">Par horizon</button>
    </div>`;d.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((p=u[0])==null?void 0:p.color)||we[0]}">${l.name}</span>
      <span class="chart-card-unit">${l.unit}</span>
      ${o}${r}
    </div>
    ${m}
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${v}</div>
    <svg class="chart-svg tensio-svg" data-metric="${t}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,d.querySelectorAll(".tensio-toggle-btn").forEach(f=>{f.addEventListener("click",()=>{Ae=f.dataset.mode,U()})}),e.appendChild(d)}function Et(e,t,i,a,n,s,c,l){var v;const u=document.createElement("div");u.className=`chart-card ${c}-multi-card`,u.dataset[c+"Curves"]=JSON.stringify(t.map(o=>({depth:o.depth,color:o[i]}))),l&&(u.dataset.cardKey=l,u.draggable=!0);const d=t.map(o=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${o[i]};vertical-align:middle;border-radius:1px"></span>
      ${o.label}
    </span>`).join("");return u.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((v=t[0])==null?void 0:v[i])||"#46DA82"}">${a}</span>
      <span class="chart-card-unit">${n}</span>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${d}</div>
    <svg class="chart-svg ${s}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,e.appendChild(u),u}function yi(e,t,i=null,a=null,n=null){Et(e,t,"vwcColor","Teneur en eau du sol","%vol","capa-svg","capa",n)}function wi(e,t,i=null,a=null,n=null){Et(e,t,"tsolColor","Température du sol par horizon","°C","capa-tsol-svg","capaT",n)}function _e(e,t,i=null,a=null,n=null,s=!1,c=null){var p;const l=t.base(),u=document.createElement("div");u.className="chart-card",u.dataset.base=l,u.dataset.color=t.color,u.dataset.cumul=t.isCumul?"1":"",u.dataset.chartType=t.chartType||"line",u.dataset.metricId=t.id,u.dataset.metricName=t.name,u.dataset.metricUnit=t.unit,t.isIrrigation&&(u.dataset.isIrrigation="1"),n&&(u.dataset.cardKey=n,u.draggable=!0);const d=t.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label} : <strong>${st(t)} ${t.cumul.unit}</strong></span><button class="chart-cumul-add-btn" data-cumul-label="${t.cumul.label}" data-cumul-val="${st(t)} ${t.cumul.unit}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button></div>`:"",v=i?`<span class="chart-card-source">${i}</span>`:"",o=a!=null?`<span class="chart-card-emission">il y a ${a} min</span>`:"";let r="";if(c){const f=((p=document.getElementById("time-step"))==null?void 0:p.value)||"1h";r=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${c}&metricId=${t.id}&parcelId=${k}&period=${J}&step=${f}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`}const m=s?'<div class="chart-unavailable">Données indisponibles pour ce pas de temps</div>':'<svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>';u.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${v}${o}${r}
    </div>
    ${m}
    ${d}
  `,e.appendChild(u)}let ye=null;function $i(){return ye||(ye=document.createElement("div"),ye.className="chart-tooltip",document.body.appendChild(ye)),ye}function xi(e,t){return t==="temp"||t==="temperature"?["#6eb4d4","#e07050"]:t==="tseche"||t==="thumide"?["#6eb4d4","#e07050"]:t==="temp_rosee"?["#a0d0f0","#4090c0"]:[Ci(e,.55),e]}function Ci(e,t){const i=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),s=Math.round(i+(255-i)*t),c=Math.round(a+(255-a)*t),l=Math.round(n+(255-n)*t);return`#${s.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`}function Pe(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let i=0;i<e.length-1;i++){const a=e[Math.max(i-1,0)],n=e[i],s=e[i+1],c=e[Math.min(i+2,e.length-1)],l=n.x+(s.x-a.x)/6,u=n.y+(s.y-a.y)/6,d=s.x-(c.x-n.x)/6,v=s.y-(c.y-n.y)/6;t+=` C${l.toFixed(1)},${u.toFixed(1)} ${d.toFixed(1)},${v.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return t}function Me(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function it(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function Si(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function nt(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function Mi(e){const t=Math.floor((Date.now()-e*6e4)/864e5),i=Math.sin(t*12.9898+78.233)*43758.5453;return i-Math.floor(i)}function de(e,t,i,a=.15){const n=it(i),s=nt(n),c=Si(n),l=Mi(i),u=()=>1+(Math.random()-.5)*2*a;switch(e){case"temp":{const d=.6+l*.8;return(t-6+s*12*d)*u()}case"tseche":case"thumide":{const d=.6+l*.8;return(t-4+s*8*d)*u()}case"temp_rosee":{const d=.6+l*.8,v=t-6+s*12*d;return Math.min(v-1,t-8+s*6*d)*u()}case"tsol":{const d=it(i+120),v=.7+l*.6;return(t-3+nt(d)*6*v)*u()}case"humidite":{const d=1.4-l*.8;return Math.min(100,Math.max(20,(t+(1-s)*25*d-s*15)*u()))}case"rayonnement":{const d=.4+l*.9;return Math.max(0,c*t*1.3*d*u())}case"etp":{const d=.4+l*.9;return Math.max(0,c*t*1.5*d*u())}case"humec":{const d=1.4-l*.8;return Math.max(0,t*Math.max(0,.8-c*1.2)*d*u())}case"pluie":{const d=.06+(1-l)*.22;return Math.random()<d?t*Math.random()*2.5*(1.3-l):0}case"vent":case"rafales":{const d=.5+l;return Math.max(0,t*(.6+c*.8)*d*u())}default:return Math.max(0,t*u())}}function Ei(){const e=ti(),t=be(),i=ii();P.filter(n=>x.linkedSensorIds.includes(n.id)).filter(n=>_.includes(n.model)),document.querySelectorAll(".chart-card").forEach(n=>{if(n.classList.contains("tensio-multi-card")){const m=n.querySelector(".tensio-svg"),p=JSON.parse(n.dataset.tensioCurves||"[]");m&&p.length>0&&Bi(m,p,e,t);return}if(n.classList.contains("capa-multi-card")){const m=n.querySelector(".capa-svg"),p=JSON.parse(n.dataset.capaCurves||"[]");m&&p.length>0&&at(m,p,e,t,"vwc");return}if(n.classList.contains("capaT-multi-card")){const m=n.querySelector(".capa-tsol-svg"),p=JSON.parse(n.dataset.capaTCurves||"[]");m&&p.length>0&&at(m,p,e,t,"tsol");return}const s=n.querySelector(".chart-svg");if(!s)return;const c=parseFloat(n.dataset.base),l=n.dataset.color,u=n.dataset.cumul==="1",d=n.dataset.chartType||"line",v=n.dataset.metricId||"",o=n.dataset.metricName||"",r=n.dataset.metricUnit||"";if(n.dataset.isIrrigation)Ii(s,l,e,t,i);else{const m=i>0&&Zt.has(v);ji(s,c,l,e,t,u,d,v,o,r,i,m)}}),Bt(),jt()}function Bi(e,t,i,a){const c={t:14,r:10,b:28,l:46},l=600-c.l-c.r,u=180-c.t-c.b,d=t.map(w=>{const y=20+w.depth*.8+Math.random()*20;return Array.from({length:i},(S,M)=>{const j=(i-1-M)*a;return Math.max(0,de("pothydr",y,j))})}),v=d.flat(),o=Math.min(...v),r=Math.max(...v),m=r-o||1,p=w=>c.l+w/Math.max(i-1,1)*l,f=w=>c.t+u-(w-o)/m*u,h=`tc-${Math.random().toString(36).slice(2)}`;let g=`<defs><clipPath id="${h}"><rect x="${c.l}" y="${c.t}" width="${l}" height="${u}"/></clipPath></defs>`;for(let w=0;w<=4;w++){const y=c.t+w/4*u,S=r-w/4*m;g+=`<line x1="${c.l}" y1="${y.toFixed(1)}" x2="${600-c.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,g+=`<text x="${c.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${S.toFixed(0)}</text>`}d.forEach((w,y)=>{const S=w.map((j,I)=>({x:p(I),y:f(j)})),M=Pe(S);g+=`<path d="${M}" fill="none" stroke="${t[y].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${h})"/>`}),g+=`<line x1="${c.l}" y1="${c.t+u}" x2="${600-c.r}" y2="${c.t+u}" stroke="var(--bdr2)" stroke-width="1"/>`;const b=Math.max(1,Math.floor(i/6));for(let w=0;w<i;w+=b){const y=(i-1-w)*a;g+=`<text x="${p(w).toFixed(1)}" y="${(c.t+u+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Me(y)}</text>`}e.innerHTML=g}function at(e,t,i,a,n="vwc"){const l={t:14,r:10,b:28,l:46},u=600-l.l-l.r,d=180-l.t-l.b,v=t.map((y,S)=>{if(n==="tsol"){const j=16-y.depth*.06+S*.5+Math.random()*3;return Array.from({length:i},(I,B)=>{const H=(i-1-B)*a;return de("tsol",j,H)})}const M=35-y.depth*.15+S*2+Math.random()*8;return Array.from({length:i},(j,I)=>{const B=(i-1-I)*a;return Math.max(10,Math.min(55,de("teneur-eau",M,B)))})}),o=v.flat(),r=Math.floor(Math.min(...o)-2),m=Math.ceil(Math.max(...o)+2),p=m-r||1,f=y=>l.l+y/Math.max(i-1,1)*u,h=y=>l.t+d-(y-r)/p*d,g=`cc-${Math.random().toString(36).slice(2)}`;let b=`<defs><clipPath id="${g}"><rect x="${l.l}" y="${l.t}" width="${u}" height="${d}"/></clipPath></defs>`;for(let y=0;y<=4;y++){const S=l.t+y/4*d,M=m-y/4*p;b+=`<line x1="${l.l}" y1="${S.toFixed(1)}" x2="${600-l.r}" y2="${S.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,b+=`<text x="${l.l-5}" y="${(S+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${M.toFixed(0)}</text>`}v.forEach((y,S)=>{const M=y.map((I,B)=>({x:f(B),y:h(I)})),j=Pe(M);b+=`<path d="${j}" fill="none" stroke="${t[S].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${g})"/>`}),b+=`<line x1="${l.l}" y1="${l.t+d}" x2="${600-l.r}" y2="${l.t+d}" stroke="var(--bdr2)" stroke-width="1"/>`;const w=Math.max(1,Math.floor(i/6));for(let y=0;y<i;y+=w){const S=(i-1-y)*a;b+=`<text x="${f(y).toFixed(1)}" y="${(l.t+d+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Me(S)}</text>`}e.innerHTML=b}function ji(e,t,i,a,n,s,c="line",l="",u="",d="",v=0,o=!1){const p={t:14,r:10,b:28,l:46},f=600-p.l-p.r,h=180-p.t-p.b,g=a+v,b=o?v:0,w=a+b,y=Math.max(1,Math.round(n/15)),S=Array.from({length:w},(T,E)=>{const A=(a-1-E)*n;if(s){let N=0;for(let V=0;V<y;V++)N+=de(l,t/y,A+V*(n/y));return N}else if(y>1){let N=0;for(let V=0;V<y;V++)N+=de(l,t,A+V*(n/y));return N/y}else return de(l,t,A)}),M=c==="bar"?0:Math.min(...S),j=Math.max(...S),I=j-M||1,B=T=>p.l+T/Math.max(g-1,1)*f,H=T=>p.t+h-(T-M)/I*h,F=`grad_${Math.random().toString(36).slice(2)}`,[W,Z]=xi(i,l);let q=`<defs>
    <linearGradient id="${F}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${W}"/>
      <stop offset="100%" stop-color="${Z}"/>
    </linearGradient>
    <clipPath id="clip_${F}">
      <rect x="${p.l}" y="${p.t}" width="${f}" height="${h}"/>
    </clipPath>
  </defs>`;if(v>0){const T=B(a-.5),E=`stripe_${F}`;q+=`<defs><pattern id="${E}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${T.toFixed(1)}" y="${p.t}" width="${(600-p.r-T).toFixed(1)}" height="${h}" fill="url(#${E})"/>
      <line x1="${T.toFixed(1)}" y1="${p.t}" x2="${T.toFixed(1)}" y2="${p.t+h}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-p.r-4).toFixed(1)}" y="${(p.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}for(let T=0;T<=4;T++){const E=p.t+T/4*h,A=j-T/4*I,N=Math.abs(A)>=100?A.toFixed(0):Math.abs(A)>=10?A.toFixed(1):A.toFixed(2);q+=`<line x1="${p.l}" y1="${E.toFixed(1)}" x2="${600-p.r}" y2="${E.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,q+=`<text x="${p.l-5}" y="${(E+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${N}</text>`}q+=`<line x1="${p.l}" y1="${p.t+h}" x2="${600-p.r}" y2="${p.t+h}" stroke="var(--bdr2)" stroke-width="1"/>`;const ge=Math.max(1,Math.floor(g/6));for(let T=0;T<g;T+=ge){const E=B(T).toFixed(1),A=(a-T)*n;q+=`<line x1="${E}" y1="${p.t}" x2="${E}" y2="${p.t+h}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,q+=`<text x="${E}" y="${p.t+h+14}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${Me(A)}</text>`}if(c==="bar"){const T=Math.max(2,f/g*.65);S.forEach((E,A)=>{if(E<=0)return;const N=A>=a,V=B(A),Ee=H(E),Fe=p.t+h-Ee;q+=`<rect x="${(V-T/2).toFixed(1)}" y="${Ee.toFixed(1)}" width="${T.toFixed(1)}" height="${Fe.toFixed(1)}" fill="${N?"#C7C7CC":`url(#${F})`}" opacity="${N?"0.5":"0.9"}" rx="1"/>`})}else{const T=S.slice(0,a).map((N,V)=>({x:B(V),y:H(N)})),E=Pe(T),A=E+` L${B(a-1).toFixed(1)},${p.t+h} L${p.l.toFixed(1)},${p.t+h} Z`;if(q+=`<path d="${A}" fill="${Z}" opacity="0.07" clip-path="url(#clip_${F})"/>`,q+=`<path d="${E}" fill="none" stroke="url(#${F})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${F})"/>`,b>0){const N=S.slice(a-1).map((Ee,Fe)=>({x:B(a-1+Fe),y:H(Ee)})),V=Pe(N);q+=`<path d="${V}" fill="none" stroke="url(#${F})" stroke-width="2" stroke-dasharray="5,4" stroke-linejoin="round" stroke-linecap="round" opacity="0.5" clip-path="url(#clip_${F})"/>`}}q+=`<rect class="chart-hover-rect" x="${p.l}" y="${p.t}" width="${f}" height="${h}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=q,ki(e,S,B,H,M,j,g,a,n,u,d,i,p,600)}function ki(e,t,i,a,n,s,c,l,u,d,v,o,r,m,p){const f=$i(),h=e.querySelector(".chart-hover-rect");if(!h)return;const b=document.createElementNS("http://www.w3.org/2000/svg","circle");b.setAttribute("r","4"),b.setAttribute("fill",o),b.setAttribute("stroke","#fff"),b.setAttribute("stroke-width","1.5"),b.style.display="none",b.style.pointerEvents="none",e.appendChild(b),h.addEventListener("mousemove",w=>{const y=e.getBoundingClientRect(),S=m/y.width,M=(w.clientX-y.left)*S,j=m-r.l-r.r,I=Math.max(0,Math.min(1,(M-r.l)/j)),B=Math.round(I*(c-1));if(B<0||B>=t.length)return;const H=t[B],F=i(B),W=a(H);b.setAttribute("cx",F),b.setAttribute("cy",W),b.style.display="";const Z=(l-B)*u,q=Me(Z),ge=Math.abs(H)>=100?H.toFixed(1):H.toFixed(2);f.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${d}</div>
      <div class="chart-tooltip-val" style="color:${o}">${ge} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${v}</span></div>
      <div class="chart-tooltip-ts">${q}</div>
    `,f.style.display="block";const T=w.clientX+12,E=w.clientY-10;f.style.left=`${Math.min(T,window.innerWidth-160)}px`,f.style.top=`${E}px`}),h.addEventListener("mouseleave",()=>{f.style.display="none",b.style.display="none"})}function Ai(e,t,i,a=0){const n=Date.now(),s=i*6e4,c=n-t*s,l=t+a,u=new Array(l).fill(0);return O.filter(d=>d.plotId===e).forEach(d=>{const v=new Date(d.iso).getTime();if(v<c)return;const o=Math.min(l-1,Math.floor((v-c)/s));o>=0&&(u[o]+=d.mm||0)}),u}function Ii(e,t,i,a,n=0){const l={t:12,r:8,b:28,l:44},u=600-l.l-l.r,d=180-l.t-l.b,v=i+n,o=Ai(k,i,a,n),r=Math.max(...o,1),m=g=>l.l+g/Math.max(v-1,1)*u,p=g=>l.t+d-g/r*d;let f="";for(let g=0;g<=4;g++){const b=l.t+g/4*d,w=(r-g/4*r).toFixed(1);f+=`<line x1="${l.l}" y1="${b}" x2="${600-l.r}" y2="${b}" stroke="var(--bdr2)" stroke-width="1"/>`,f+=`<text x="${l.l-4}" y="${b+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${w}</text>`}if(n>0){const g=m(i-.5),b=`irrig_stripe_${Math.random().toString(36).slice(2,8)}`;f+=`<defs><pattern id="${b}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${g.toFixed(1)}" y="${l.t}" width="${(600-l.r-g).toFixed(1)}" height="${d}" fill="url(#${b})"/>
      <line x1="${g.toFixed(1)}" y1="${l.t}" x2="${g.toFixed(1)}" y2="${l.t+d}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-l.r-4).toFixed(1)}" y="${(l.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}const h=Math.max(4,u/v*.65);o.forEach((g,b)=>{if(g<=0)return;const w=b>=i,y=m(b),S=p(g),M=l.t+d-S;f+=`<rect x="${(y-h/2).toFixed(1)}" y="${S.toFixed(1)}" width="${h.toFixed(1)}" height="${M.toFixed(1)}" fill="${w?"#C7C7CC":t}" opacity="${w?"0.5":"0.85"}" rx="1"/>`}),e.innerHTML=f}function st(e){const i={pluie:()=>$(20,120),etp:()=>R(15,80),rayonnement:()=>$(500,3e3)}[e.id];return i?i():$(10,100)}function Ti(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),i=document.getElementById("time-step"),a=new Date,n=new Date(a-7*864e5);document.getElementById("date-from").value=n.toISOString().slice(0,10),document.getElementById("date-to").value=a.toISOString().slice(0,10),e.addEventListener("click",s=>{const c=s.target.closest(".period-preset-btn");if(c)if(e.querySelectorAll(".period-preset-btn").forEach(l=>l.classList.remove("active")),c.classList.add("active"),J=c.dataset.period,J==="custom")t.style.display="flex";else{t.style.display="none";const l=document.getElementById("time-step");l&&(l.value=ei(J)),U()}}),document.getElementById("date-from").addEventListener("change",ot),document.getElementById("date-to").addEventListener("change",ot),i.addEventListener("change",U)}function ot(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(me=new Date(e),pe=new Date(t+"T23:59:59"),me<pe&&U())}const rt={"Blé tendre":[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé. Profondeur optimale 3–4 cm."},{name:"Levée",date:"2025-11-05",bbch:"BBCH 09",desc:"Apparition de la première feuille au-dessus du sol."},{name:"Tallage",date:"2026-02-15",bbch:"BBCH 21",desc:"1er talle apparu. Période sensible au froid."},{name:"Épi 1 cm",date:"2026-04-20",bbch:"BBCH 30",desc:"Montaison. Début de la différenciation de l'épi."},{name:"Épiaison",date:"2026-05-20",bbch:"BBCH 55",desc:"La moitié de l'épiaison est atteinte. Risque maximal de fusariose."},{name:"Floraison",date:"2026-05-28",bbch:"BBCH 65",desc:"Pleine floraison. Fenêtre critique pour la qualité du grain."},{name:"Maturité",date:"2026-07-10",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %. Récolte possible."}],Maïs:[{name:"Semis",date:"2026-04-25",bbch:"BBCH 00",desc:"Sol > 10 °C à 5 cm. Fenêtre de semis idéale."},{name:"Levée",date:"2026-05-10",bbch:"BBCH 09",desc:"Coleoptile visible. 10 jours après semis en conditions normales."},{name:"4 feuilles",date:"2026-05-28",bbch:"BBCH 14",desc:"V4. Intervention herbicide possible."},{name:"6 feuilles",date:"2026-06-12",bbch:"BBCH 16",desc:"V6. Stade critique pour la nutrition azotée."},{name:"Floraison ♂",date:"2026-07-15",bbch:"BBCH 65",desc:"VT. Émission du pollen. Forte demande en eau (≥ 8 mm/j)."},{name:"Soie",date:"2026-07-18",bbch:"BBCH 67",desc:"R1. Fécondation. Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-20",bbch:"BBCH 89",desc:"Point noir visible. Récolte selon teneur en eau."}],Colza:[{name:"Semis",date:"2025-08-25",bbch:"BBCH 00",desc:"Sol humide, T° < 25 °C. Objectif : 30 plants/m²."},{name:"Levée",date:"2025-09-05",bbch:"BBCH 09",desc:"Cotylédon visible. Période à risque limaces."},{name:"Rosette",date:"2025-11-15",bbch:"BBCH 18",desc:"8 feuilles étalées. Bon état pour entrer en hiver."},{name:"Reprise",date:"2026-02-20",bbch:"BBCH 30",desc:"Allongement de l'hypocotyle. Fin de la période de vernalisation."},{name:"Bouton floral",date:"2026-03-25",bbch:"BBCH 51",desc:"Inflorescence visible. Risque sclérotinia à surveiller."},{name:"Floraison",date:"2026-04-10",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile. Éviter les traitements."},{name:"Siliques",date:"2026-05-05",bbch:"BBCH 75",desc:"Siliques de 2 cm. Fin de floraison, début de remplissage."},{name:"Maturité",date:"2026-07-05",bbch:"BBCH 89",desc:"Siliques brunes, graines noires. Seuil récolte < 9 % eau."}],Tournesol:[{name:"Semis",date:"2026-04-20",bbch:"BBCH 00",desc:"Sol > 8 °C à 5 cm. Profondeur 4–5 cm."},{name:"Levée",date:"2026-05-05",bbch:"BBCH 09",desc:"Cotylédon hors sol. Période sensible aux oiseaux."},{name:"4 feuilles",date:"2026-05-25",bbch:"BBCH 14",desc:"V4. Interventions herbicides possibles."},{name:"Bouton floral",date:"2026-06-25",bbch:"BBCH 51",desc:"E2. Bouton visible. Fin du développement végétatif."},{name:"Floraison",date:"2026-07-10",bbch:"BBCH 65",desc:"R5.1. Fleurs ligulées ouvertes. Stress hydrique critique."},{name:"Maturité",date:"2026-09-05",bbch:"BBCH 89",desc:"Capitule brun, dos jaune. Teneur en eau 9–12 %."}],Vigne:[{name:"Débourrement",date:"2026-04-05",bbch:"BBCH 05",desc:"Bourgeon en coton. Risque gel augmente fortement."},{name:"Sortie feuilles",date:"2026-04-20",bbch:"BBCH 11",desc:"1ère feuille étalée. Début des traitements prophylactiques."},{name:"Floraison",date:"2026-06-10",bbch:"BBCH 65",desc:"Anthèse. Niveau de risque mildiou et oïdium maximal."},{name:"Nouaison",date:"2026-06-25",bbch:"BBCH 71",desc:"Baies visibles. Consolidation du rendement."},{name:"Véraison",date:"2026-08-05",bbch:"BBCH 81",desc:"Changement de couleur. Arrêt des traitements phytos recommandé."},{name:"Récolte",date:"2026-09-15",bbch:"BBCH 89",desc:"Maturité technologique. Date selon profil variétal."}],Sorgho:[{name:"Semis",date:"2026-05-10",bbch:"BBCH 00",desc:"Sol > 12 °C à 5 cm."},{name:"Levée",date:"2026-05-25",bbch:"BBCH 09",desc:"Coleoptile visible."},{name:"Montaison",date:"2026-07-01",bbch:"BBCH 30",desc:"Début de la montaison. Forte demande azotée."},{name:"Floraison",date:"2026-07-25",bbch:"BBCH 65",desc:"Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-15",bbch:"BBCH 89",desc:"Teneur en eau < 25 %. Récolte adaptée."}],"Orge de printemps":[{name:"Semis",date:"2026-03-15",bbch:"BBCH 00",desc:"Semis dès que sol ressuyé, T° > 5 °C."},{name:"Levée",date:"2026-04-01",bbch:"BBCH 09",desc:"Coleoptile visible. Période sensible aux limaces."},{name:"Tallage",date:"2026-04-20",bbch:"BBCH 21",desc:"Premier talle. Couverture du sol progressive."},{name:"Montaison",date:"2026-05-10",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-06-05",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-07-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-08-05",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],Orge:[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé, profondeur 3–4 cm."},{name:"Levée",date:"2025-11-04",bbch:"BBCH 09",desc:"Coleoptile visible. Surveillance limaces."},{name:"Tallage",date:"2026-02-08",bbch:"BBCH 21",desc:"Reprise de végétation. Premier talle."},{name:"Montaison",date:"2026-04-02",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-05-07",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-05-18",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-06-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-07-01",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],"Pomme de terre":[{name:"Plantation",date:"2026-04-02",bbch:"BBCH 00",desc:"Tubercules-semences à 10 cm, espacement 30–35 cm."},{name:"Levée",date:"2026-04-26",bbch:"BBCH 09",desc:"Tiges émergées. Risque gel résiduel."},{name:"Croissance",date:"2026-05-15",bbch:"BBCH 31",desc:"Fermeture du rang. Première application fongicide."},{name:"Tuberisation",date:"2026-06-05",bbch:"BBCH 71",desc:"Initiation des tubercules. Demande en eau maximale."},{name:"Grossissement",date:"2026-07-01",bbch:"BBCH 81",desc:"Grossissement actif. Irrigation critique."},{name:"Maturité",date:"2026-08-15",bbch:"BBCH 89",desc:"Fanes sèches, peau des tubercules fixée. Récolte."}],Cerisier:[{name:"Dormance",date:"2025-12-15",bbch:"BBCH 00",desc:"Repos végétatif. Besoin en froid accumulé."},{name:"Bourgeons",date:"2026-02-20",bbch:"BBCH 03",desc:"Gonflement des bourgeons. Chilling satisfait."},{name:"Débourrement",date:"2026-03-18",bbch:"BBCH 07",desc:"Pointe verte visible. Risque gel fort (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-08",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation croisée nécessaire."},{name:"Nouaison",date:"2026-04-28",bbch:"BBCH 71",desc:"Petits fruits noués. Chute physiologique normale."},{name:"Fructification",date:"2026-05-12",bbch:"BBCH 81",desc:"Grossissement actif des cerises. Irrigation si déficit."},{name:"Récolte",date:"2026-06-18",bbch:"BBCH 89",desc:"Cerises à maturité. Récolte échelonnée selon variété."}],Poire:[{name:"Débourrement",date:"2026-03-28",bbch:"BBCH 07",desc:"Pointe verte. Vigilance gel (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-15",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile."},{name:"Nouaison",date:"2026-05-05",bbch:"BBCH 71",desc:"Petits fruits noués. Éclaircissage si nécessaire."},{name:"Croissance",date:"2026-06-15",bbch:"BBCH 78",desc:"Grossissement actif. Besoins en eau importants."},{name:"Véraison",date:"2026-08-10",bbch:"BBCH 84",desc:"Changement de couleur. Arrêt des traitements phytos."},{name:"Récolte",date:"2026-09-10",bbch:"BBCH 89",desc:"Récolte selon indice de maturité (pénétromètre, amidon)."}],Pomme:[{name:"Débourrement",date:"2026-04-01",bbch:"BBCH 07",desc:"Pointe verte. Risque gel résiduel."},{name:"Floraison",date:"2026-04-25",bbch:"BBCH 65",desc:"Pleine floraison. Risque tavelure maximal."},{name:"Nouaison",date:"2026-05-15",bbch:"BBCH 71",desc:"Petits fruits visibles. Éclaircissage possible."},{name:"Croissance",date:"2026-06-10",bbch:"BBCH 78",desc:"Grossissement actif. Surveillance carpocapse."},{name:"Véraison",date:"2026-08-15",bbch:"BBCH 84",desc:"Coloration des fruits. Maturation avancée."},{name:"Récolte",date:"2026-09-20",bbch:"BBCH 89",desc:"Récolte selon variété et indice de maturité."}],Salade:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Laitue:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Betterave:[{name:"Semis",date:"2026-03-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé (T° > 5 °C) et ressuyé."},{name:"Levée",date:"2026-04-08",bbch:"BBCH 09",desc:"Cotylédons hors sol. Période à risque limaces."},{name:"4 feuilles",date:"2026-05-01",bbch:"BBCH 14",desc:"Couverture partielle du sol. Interventions herbicides."},{name:"Fermeture rang",date:"2026-06-15",bbch:"BBCH 37",desc:"Canopée fermée. Forte demande en eau et azote."},{name:"Grossissement",date:"2026-08-01",bbch:"BBCH 40",desc:"Grossissement actif de la racine. Accumulation de sucres."},{name:"Récolte",date:"2026-10-20",bbch:"BBCH 89",desc:"Teneur en sucre optimale. Arrachage selon planning usine."}]},Li=[{name:"Semis",date:"2026-04-01",bbch:"BBCH 00",desc:"Semis."},{name:"Levée",date:"2026-04-20",bbch:"BBCH 09",desc:"Levée des plantules."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Floraison."},{name:"Récolte",date:"2026-08-20",bbch:"BBCH 89",desc:"Maturité physiologique."}];function Pi(e){if(!e)return[];const t=e.toLowerCase();for(const i of Object.keys(rt))if(t.startsWith(i.toLowerCase()))return rt[i];return Li}function Hi(){const e=document.getElementById("toggle-phenologie");e&&e.addEventListener("change",()=>{Bt()})}function Bt(){document.querySelectorAll(".pheno-overlay").forEach(f=>f.remove());const e=document.getElementById("toggle-phenologie");if(!(e!=null&&e.checked))return;const t=x.crop||C.crop,i=Pi(t);if(!i.length)return;const a=Date.now(),n=ve()*6e4,s=a-n,c=600,l=46,u=10,d=14,v=28,o=c-l-u,r=d+4,m=180-v,p=i.filter(f=>{const h=new Date(f.date).getTime();return h>=s&&h<=a});p.length&&document.querySelectorAll(".chart-card").forEach(f=>{const h=f.querySelector(".chart-svg, .tensio-svg");if(!h)return;const g=document.createElementNS("http://www.w3.org/2000/svg","g");g.setAttribute("class","pheno-overlay"),p.forEach(b=>{const y=(new Date(b.date).getTime()-s)/n,S=l+y*o,M=document.createElementNS("http://www.w3.org/2000/svg","line");M.setAttribute("x1",S.toFixed(1)),M.setAttribute("x2",S.toFixed(1)),M.setAttribute("y1",r),M.setAttribute("y2",m),M.setAttribute("stroke","#3a9e6a"),M.setAttribute("stroke-width","1"),M.setAttribute("stroke-dasharray","4,3"),g.appendChild(M);const j=14,I=b.name.length>j?b.name.slice(0,j-1)+"…":b.name,B=(S+3).toFixed(1),H=(r+2).toFixed(1),F=document.createElementNS("http://www.w3.org/2000/svg","text");F.setAttribute("x",B),F.setAttribute("y",H),F.setAttribute("transform",`rotate(90, ${B}, ${H})`),F.setAttribute("text-anchor","start"),F.setAttribute("font-size","9"),F.setAttribute("font-family","var(--font)"),F.setAttribute("fill","#3a9e6a"),F.style.cursor="pointer",F.textContent=I,g.appendChild(F);const W=document.createElementNS("http://www.w3.org/2000/svg","rect");W.setAttribute("x",(S-8).toFixed(1)),W.setAttribute("y",r.toString()),W.setAttribute("width","16"),W.setAttribute("height",(m-r).toString()),W.setAttribute("fill","transparent"),W.style.cursor="pointer",W.addEventListener("click",Z=>Fi(b,Z)),g.appendChild(W)}),h.appendChild(g)})}let re=null;function Fi(e,t){re&&(re.remove(),re=null);const i=document.createElement("div");i.className="pheno-popover";const a=c=>{const[l,u,d]=c.split("-");return`${d}/${u}/${l}`};i.innerHTML=`
    <div class="pheno-pop-hd">
      <span class="pheno-pop-badge">${e.bbch}</span>
      <span class="pheno-pop-name">${e.name}</span>
      <button class="pheno-pop-close">×</button>
    </div>
    <div class="pheno-pop-date">${a(e.date)}</div>
  `,i.querySelector(".pheno-pop-close").addEventListener("click",()=>{i.remove(),re=null});const n=t.clientX,s=t.clientY;i.style.position="fixed",i.style.top=s-8+"px",i.style.left=n+12+"px",document.body.appendChild(i),re=i,setTimeout(()=>{const c=i.offsetWidth,l=i.offsetHeight;let u=s-8,d=n+12;d+c>window.innerWidth-8&&(d=n-c-12),u+l>window.innerHeight-8&&(u=s-l),i.style.top=Math.max(8,u)+"px",i.style.left=Math.max(8,d)+"px"},0),document.addEventListener("click",function c(l){i.contains(l.target)||(i.remove(),re=null,document.removeEventListener("click",c))},{capture:!0})}function qi(){const e=document.getElementById("toggle-notes");e&&e.addEventListener("change",jt)}function jt(){document.querySelectorAll(".notes-overlay").forEach(r=>r.remove()),lt();const e=document.getElementById("toggle-notes");if(!(e!=null&&e.checked))return;const t=$e().filter(r=>r.type==="note"||r.type==="traitement");if(!t.length)return;const i=Date.now(),a=ve()*6e4,n=i-a,s=600,c=46,l=10,u=28,d=s-c-l,v=180-u,o=t.filter(r=>{const m=new Date(r.date+"T12:00:00").getTime();return m>=n&&m<=i});o.length&&document.querySelectorAll(".chart-card").forEach(r=>{const m=r.querySelector(".chart-svg, .tensio-svg");if(!m)return;const p=document.createElementNS("http://www.w3.org/2000/svg","g");p.setAttribute("class","notes-overlay"),o.forEach(f=>{const g=(new Date(f.date+"T12:00:00").getTime()-n)/a,b=c+g*d,y=f.type==="traitement"?"#78c860":"#60a8e0",S=v+9,M=document.createElementNS("http://www.w3.org/2000/svg","polygon"),j=5;M.setAttribute("points",`${b.toFixed(1)},${(S-j).toFixed(1)} ${(b+j).toFixed(1)},${S.toFixed(1)} ${b.toFixed(1)},${(S+j).toFixed(1)} ${(b-j).toFixed(1)},${S.toFixed(1)}`),M.setAttribute("fill",y),M.setAttribute("stroke","#fff"),M.setAttribute("stroke-width","1.5"),p.appendChild(M);const I=document.createElementNS("http://www.w3.org/2000/svg","rect");I.setAttribute("x",(b-9).toFixed(1)),I.setAttribute("y",v.toFixed(1)),I.setAttribute("width","18"),I.setAttribute("height","18"),I.setAttribute("fill","transparent"),I.style.cursor="default",I.addEventListener("mouseenter",B=>Di(f,B)),I.addEventListener("mouseleave",lt),p.appendChild(I)}),m.appendChild(p)})}let Y=null;function Di(e,t){Y||(Y=document.createElement("div"),Y.className="note-tip",document.body.appendChild(Y));const i=e.type==="traitement";let n=`<div class="note-tip-header">
    <span class="note-tip-badge note-tip-badge--${i?"trait":"note"}">
      <i class="bi ${i?"bi-eyedropper":"bi-pencil"}"></i> ${i?"Traitement":"Note"}
    </span>
    <span class="note-tip-date">${(l=>{const[u,d,v]=l.split("-");return`${v}/${d}/${u}`})(e.date)}</span>
  </div>`;e.texte&&(n+=`<div class="note-tip-texte">${e.texte}</div>`),i&&(e.produit||e.dose||e.cible)&&(n+='<div class="note-tip-detail">',e.produit&&(n+=`<span><i class="bi bi-flask"></i> ${e.produit}</span>`),e.dose&&(n+=`<span><i class="bi bi-droplet"></i> ${e.dose}</span>`),e.cible&&(n+=`<span><i class="bi bi-bullseye"></i> ${e.cible}</span>`),n+="</div>"),Y.innerHTML=n,Y.style.display="block";const s=t.clientX+14,c=t.clientY-10;Y.style.left=s+"px",Y.style.top=c+"px",requestAnimationFrame(()=>{const l=Y.offsetWidth;s+l>window.innerWidth-8&&(Y.style.left=t.clientX-l-10+"px")})}function lt(){Y&&(Y.style.display="none")}function Ri(){He()}function He(){var t,i,a,n;const e=document.getElementById("compare-control");if(e)if(G){const s=((t=oe.find(c=>c.id===G))==null?void 0:t.name)||"Parcelle";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${s} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(i=e.querySelector(".compare-clear-icon"))==null||i.addEventListener("click",c=>{c.stopPropagation(),G=null,He(),U()}),(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",ct)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",ct)}function ct(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),i=oe.filter(s=>s.id!==k),a=document.createElement("div");a.id="compare-dropdown",a.className="compare-dropdown",a.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher une parcelle…">
    <div class="compare-dropdown-list">
      ${i.map(s=>`<div class="compare-dropdown-item${s.id===G?" active":""}" data-id="${s.id}"><i class="bi bi-map"></i> ${s.name}</div>`).join("")}
    </div>
  `,t.appendChild(a);const n=a.querySelector(".compare-search-input");n.focus(),n.addEventListener("input",s=>{const c=s.target.value.toLowerCase();a.querySelectorAll(".compare-dropdown-item").forEach(l=>{l.style.display=l.textContent.toLowerCase().includes(c)?"":"none"})}),a.querySelectorAll(".compare-dropdown-item").forEach(s=>{s.addEventListener("click",()=>{G=parseInt(s.dataset.id),a.remove(),He(),U()})}),setTimeout(()=>{document.addEventListener("click",function s(c){!a.contains(c.target)&&!t.contains(c.target)&&(a.remove(),document.removeEventListener("click",s))})},0)}function Oi(){const e=Ve.find(t=>t.id===C.orgId);kt(e),zi(e),Ie(),We(),ce(),Je()}const dt=["Abricotier","Ail","Amandier","Artichaut","Asperge","Aubergine","Avoine","Basilic","Betterave fourragère","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Chou pommé","Ciboulette","Citrouille","Clémentinier","Courgette","Echalote","Endive","Epinard","Fève","Figuier","Fraisier","Framboisier","Gesse","Giroflier","Haricot vert","Houblon","Kiwi","Lavande","Lentille","Luzerne","Maïs doux","Maïs grain","Maïs semence","Maïs silage","Melon","Menthe","Moutarde","Navet","Nectarinier","Noisetier","Noyer","Oignon","Olivier","Orge de brasserie","Orge de printemps","Orge d'hiver","Pêcher","Persil","Pissenlit","Poireau","Pois chiche","Pois de conserve","Pois fourrager","Pois protéagineux","Poivron","Pomme de terre","Pommier","Poirier","Prunier","Pruneau d'Agen","Radis","Raisin de cuve","Raisin de table","Riz","Romarin","Sarrasin","Seigle","Soja","Sorgho","Tabac","Thym","Tomate","Tournesol","Triticale","Vigne","Cardon","Céleri","Cerise","Châtaignier","Colza","Courge","Fénugrec","Groseillier","Lin fibre","Lin oléagineux","Mâche","Millet","Myrtille","Noix de cajou","Paprika","Patate douce","Pistachier","Poisson-Chat","Quinoa","Safran","Sainfoin","Scorsonère","Shallot","Topinambour","Trèfle","Vesce","Fétuque","Ray-grass","Prairie temporaire","Prairie permanente","Jachère","Autre"];function kt(e){const t=document.getElementById("panel-ident"),i=x,a=i.texture||null,n=i.irrigation||null,s=i.crop||dt[0],c=i.env||null,l=a===qe,u=i.soilAnalysis||{},d=i.latlngs,v=Array.isArray(d)&&d.length>=3,o=i.area?`${i.area} ha <span class="field-computed">(calculé)</span>`:v?'— <span class="field-computed">(calculé)</span>':'<span class="field-computed">Tracez le contour pour calculer la surface de la parcelle.</span>';t.innerHTML=`
    ${Be("Nom",i.name||"—","name","text")}
    ${Ni("Culture",s,"crop",dt)}
    ${ut("Surface",o)}
    ${De("Environnement",c,"env",Gt,"Plein champ")}
    ${De("Texture sol",a,"texture",[...Vt,qe],"Indéfini")}
    ${l?`
      ${Be("Argile (%)",String(u.argile??""),"soilArgile","number")}
      ${Be("Limon (%)",String(u.limon??""),"soilLimon","number")}
      ${Be("Sable (%)",String(u.sable??""),"soilSable","number")}
    `:""}
    ${De("Irrigation",n,"irrigation",xt,"Non renseigné")}
    ${ut("Exploitation",e?e.name:"—")}
  `,ie(t,"name",i.name||"",r=>{z({name:r}),wt(r,{label:"Parcelles",href:"parcelles.html"})}),ie(t,"crop",s,r=>z({crop:r})),ie(t,"env",c||"",r=>z({env:r||null})),ie(t,"texture",a||"",r=>{const m=r||null,p={texture:m};m!==qe&&(p.soilAnalysis=null),z(p),kt(e)}),l&&(ie(t,"soilArgile",String(u.argile??""),r=>z({soilAnalysis:{...x.soilAnalysis,argile:+r}})),ie(t,"soilLimon",String(u.limon??""),r=>z({soilAnalysis:{...x.soilAnalysis,limon:+r}})),ie(t,"soilSable",String(u.sable??""),r=>z({soilAnalysis:{...x.soilAnalysis,sable:+r}}))),ie(t,"irrigation",n||"",r=>z({irrigation:r||null}))}function Be(e,t,i,a="text"){const n=(t||"").replace(/"/g,"&quot;");return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <input type="${a}" class="panel-field-input" data-val value="${n}">
    </div>`}function Ni(e,t,i,a){return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${a.map(n=>`<option${n===t?" selected":""}>${n}</option>`).join("")}
      </select>
    </div>`}function De(e,t,i,a,n="—"){const c=a.includes(n)?"":`<option value=""${t?"":" selected"}>${n}</option>`;return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${c}
        ${a.map(l=>`<option${l===(t||n)?" selected":""}>${l}</option>`).join("")}
      </select>
    </div>`}function ut(e,t){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${t}</span>
    </div>`}function ie(e,t,i,a){const n=e.querySelector(`[data-field="${t}"] [data-val]`);if(!n)return;const s=()=>{var l;const c=(l=n.value)==null?void 0:l.trim();c&&c!==i&&(i=c,a(c))};n.addEventListener("change",s),n.tagName==="INPUT"&&n.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),n.blur())})}function zi(e){const t=document.getElementById("panel-geoloc"),i=x.latlngs,a=Array.isArray(i)&&i.length>=3,n=x.ville||C.ville||(e==null?void 0:e.ville)||"—",s=C.departement||(e==null?void 0:e.departement),c=x.lat??C.lat??(e==null?void 0:e.lat),l=x.lng??C.lng??(e==null?void 0:e.lng);t.innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${n}${s?` (${s})`:""}</span>
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
      <a href="parcelle-modifier-contour.html?id=${k}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${a?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function _i(){const e=new Set;return P.filter(i=>x.linkedSensorIds.includes(i.id)).forEach(i=>{const a=D[i.model]||[];_.includes(i.model)||a.forEach(n=>e.add(n.id))}),e}function mt(e){const t=D[e]||[];return t.length?`<div class="sensor-metric-badges">${t.map(i=>`<span class="sensor-metric-badge" style="--mc:${i.color}">${i.name}</span>`).join("")}</div>`:""}function Ie(){const e=document.getElementById("panel-sensors"),t=P.filter(m=>x.linkedSensorIds.includes(m.id)),i=P.filter(m=>m.orgId===C.orgId&&!x.linkedSensorIds.includes(m.id)),a=t.filter(m=>!_.includes(m.model)),n={};a.forEach(m=>(D[m.model]||[]).forEach(p=>{n[p.id]=(n[p.id]||0)+1}));const s=Object.entries(n).filter(([,m])=>m>1).map(([m])=>{var p;return((p=Object.values(D).flat().find(f=>f.id===m))==null?void 0:p.name)||m});let c="";if(s.length>0&&(c+=`<div class="sensor-conflict-banner">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <span>Conflit de métriques : <strong>${s.join(", ")}</strong> mesurée(s) par plusieurs capteurs. Les données peuvent être en doublon.</span>
    </div>`),t.length===0)c+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>';else{const m=t.filter(f=>_.includes(f.model)),p=t.filter(f=>!_.includes(f.model));if(c+=p.map(f=>{const h=f.event&&(Array.isArray(f.event)?f.event.length>0:!0),g=h?Array.isArray(f.event)?f.event[0]:f.event:null;return`
      <div class="sensor-linked-row">
        <div class="sensor-linked-info">
          <div style="display:flex;align-items:center;gap:6px">
            <a href="capteur-detail.html?id=${f.id}" class="sensor-linked-link">${ee[f.model]||f.model}</a>
            ${h?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
          </div>
          <span class="sensor-linked-detail">${f.model} · ${f.serial}</span>
          ${h?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${g}</span>`:""}
          ${mt(f.model)}
        </div>
        <button class="remove-sensor-btn icon-btn" data-id="${f.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>`}).join(""),m.length>0){const f={};m.forEach(h=>{const g=h.depth!=null?`${h.depth} cm`:h.model;f[g]||(f[g]=[]),f[g].push(h)}),c+=`<div class="sensor-kit-hd">
        <span class="sensor-kit-hd-label">Kit de tensiomètres</span>
        ${mt("CHP-15/30")}
      </div>`,Object.entries(f).forEach(([h,g])=>{c+=`<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${h}</div>`,c+=g.map(b=>{const w=b.event&&(Array.isArray(b.event)?b.event.length>0:!0),y=w?Array.isArray(b.event)?b.event[0]:b.event:null;return`
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
          </div>`}).join("")})}}e.innerHTML=c;const l=t.some(m=>m.model==="PYRANO"),u=[{name:"Évapotranspiration (ETP)",color:"#c090e0"},...l?[]:[{name:"Rayonnement solaire",color:"#f5c842"}],{name:"Température de rosée",color:"#80c8e8"}],d=document.getElementById("panel-parcel-metrics-ext");d&&(d.innerHTML=`
      <div class="panel-parcel-metrics">
        <div class="panel-parcel-metrics-title">Données spatialisées</div>
        <div class="sensor-metric-badges">
          ${u.map(m=>`<span class="sensor-metric-badge" style="--mc:${m.color}">${m.name}</span>`).join("")}
        </div>
      </div>`);const v=document.getElementById("sensor-add-row"),o=document.getElementById("add-sensor-select");v&&o&&(i.length>0?(o.innerHTML='<option value="">Ajouter un capteur…</option>'+i.map(m=>`<option value="${m.id}">${ee[m.model]||m.model} — ${m.serial}</option>`).join(""),v.style.display=""):v.style.display="none"),e.querySelectorAll(".remove-sensor-btn").forEach(m=>{m.addEventListener("click",()=>{const p=parseInt(m.dataset.id),f=P.find(g=>g.id===p),h=f?`${ee[f.model]||f.model} — ${f.serial}`:`capteur #${p}`;Ce({title:"Retirer le capteur",message:`Retirer <strong>${h}</strong> de cette parcelle ?<br><br>Les données historiques sont conservées.`,confirmLabel:"Retirer",onConfirm:()=>{const g=x.linkedSensorIds.filter(b=>b!==p);z({linkedSensorIds:g}),vt(g),Ie(),U(),ue()}})})});const r=document.getElementById("add-sensor-btn");r&&r.addEventListener("click",()=>{const m=document.getElementById("add-sensor-select"),p=parseInt(m.value);if(!p)return;const f=P.find(g=>g.id===p);if(!f)return;const h=Ne(f.model);if(h){const b=P.filter(w=>x.linkedSensorIds.includes(w.id)).filter(w=>{const y=Ne(w.model);return y&&y!==h});if(b.length>0){const w=b.map(y=>`${ee[y.model]||y.model} — ${y.serial}`).join(", ");Ce({title:"Capteur incompatible",message:`Cette parcelle utilise déjà : <strong>${w}</strong>.<br><br>Les capteurs de sol (CHP, CAPA, EC, T_MINI) sont exclusifs — une seule technologie par parcelle.<br><br>Retirer ${b.length>1?"ces capteurs":"ce capteur"} et ajouter le nouveau ?`,confirmLabel:"Remplacer",onConfirm:()=>{const y=new Set(b.map(M=>M.id)),S=x.linkedSensorIds.filter(M=>!y.has(M));z({linkedSensorIds:[...S,p]}),vt(S),ft(f),Ie(),U(),ue()}});return}}if(!_.includes(f.model)){const g=_i(),w=(D[f.model]||[]).map(y=>y.id).filter(y=>g.has(y));if(w.length>0){const y=w.map(M=>{const j=Object.values(D).flat().find(I=>I.id===M);return(j==null?void 0:j.name)||M});if(!confirm(`Attention : ce capteur (${f.model}) mesure des métriques déjà fournies par un autre capteur :
• ${y.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}z({linkedSensorIds:[...x.linkedSensorIds,p]}),ft(f),Ie(),U(),ue()})}function We(){var c;const e=document.getElementById("panel-integrations"),t=x.integrations||[],i=Xt.filter(l=>!t.includes(l));let a="";t.length===0?a+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':a+=t.map(l=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${l}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(l)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),e.innerHTML=a;const n=document.getElementById("integ-add-row"),s=document.getElementById("add-integ-select");n&&s&&(i.length>0?(s.innerHTML='<option value="">Ajouter une intégration…</option>'+i.map(l=>`<option value="${encodeURIComponent(l)}">${l}</option>`).join(""),n.style.display=""):n.style.display="none"),e.querySelectorAll(".remove-integ-btn").forEach(l=>{l.addEventListener("click",()=>{const u=decodeURIComponent(l.dataset.name);Ce({title:"Retirer l'intégration",message:`Retirer <strong>${u}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{z({integrations:x.integrations.filter(d=>d!==u)}),We()}})})}),(c=document.getElementById("add-integ-btn"))==null||c.addEventListener("click",()=>{const l=document.getElementById("add-integ-select"),u=decodeURIComponent(l.value);u&&(z({integrations:[...x.integrations,u]}),We())})}let K=null,Q=null;function Wi(){if(K!==null)return;const e=xe(k);K=e.linkedOrgMemberIds??ne.filter(t=>{var i,a;return t.source==="adherent"&&((i=t.parcelIds)==null?void 0:i.includes(k))&&((a=t.orgIds)==null?void 0:a.includes(C.orgId))}).map(t=>t.id),Q=e.linkedConseillerIds??ne.filter(t=>{var i;return t.source==="réseau"&&((i=t.parcelIds)==null?void 0:i.includes(k))}).map(t=>t.id)}function pt(e,t,i){return`<div class="member-row">
    <div>
      <span class="member-name">${e.prenom} ${e.nom}</span>
      ${i?`<span class="member-role-badge">${e.role}</span>`:""}
    </div>
    ${t?`<button class="remove-membre-btn icon-btn" data-id="${e.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function ce(){var o;Wi();const e=((o=document.getElementById("sidebar"))==null?void 0:o.getAttribute("data-role"))==="adherent-reseau",t=document.getElementById("panel-membres"),i=document.getElementById("panel-membres-section"),a=ne.filter(r=>{var m;return r.source==="adherent"&&((m=r.orgIds)==null?void 0:m.includes(C.orgId))}),n=a.filter(r=>K.includes(r.id));i&&(i.style.display=!e&&a.length===0?"none":""),t&&(t.innerHTML=n.length?n.map(r=>pt(r,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',t.querySelectorAll(".remove-membre-btn").forEach(r=>{r.addEventListener("click",()=>{const m=parseInt(r.dataset.id),p=ne.find(f=>f.id===m);Ce({title:"Retirer le membre",message:`Retirer <strong>${p?`${p.prenom} ${p.nom}`:`membre #${m}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{K=K.filter(f=>f!==m),ae(k,{linkedOrgMemberIds:K}),ce()}})})}));const s=document.getElementById("add-membre-org-row");s&&(s.style.display="");const c=document.getElementById("add-membre-org-select");c&&(c.innerHTML='<option value="">Associer un membre…</option>',a.filter(r=>!K.includes(r.id)).forEach(r=>{const m=document.createElement("option");m.value=r.id,m.textContent=`${r.prenom} ${r.nom}`,c.appendChild(m)})),document.getElementById("add-membre-org-btn").onclick=()=>{const r=parseInt(c==null?void 0:c.value);!r||K.includes(r)||(K.push(r),ae(k,{linkedOrgMemberIds:K}),ce())};const l=document.getElementById("panel-conseillers"),u=document.getElementById("panel-conseillers-section"),d=ne.filter(r=>r.source==="réseau"&&Q.includes(r.id));u&&(u.style.display=e&&d.length===0?"none":""),l&&(l.innerHTML=d.length?d.map(r=>pt(r,!e,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',e||l.querySelectorAll(".remove-membre-btn").forEach(r=>{r.addEventListener("click",()=>{const m=parseInt(r.dataset.id),p=ne.find(f=>f.id===m);Ce({title:"Retirer le conseiller",message:`Retirer <strong>${p?`${p.prenom} ${p.nom}`:`conseiller #${m}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{Q=Q.filter(f=>f!==m),ae(k,{linkedConseillerIds:Q}),ce()}})})}));const v=document.getElementById("add-conseiller-row");if(v&&(v.style.display=e?"none":""),!e){const r=document.getElementById("add-membre-select");r&&(r.innerHTML='<option value="">Ajouter un conseiller…</option>',ne.filter(m=>m.source==="réseau"&&!Q.includes(m.id)).forEach(m=>{const p=document.createElement("option");p.value=m.id,p.textContent=`${m.prenom} ${m.nom} (${m.role})`,r.appendChild(p)})),document.getElementById("add-membre-btn").onclick=()=>{const m=parseInt(r==null?void 0:r.value);!m||Q.includes(m)||(Q.push(m),ae(k,{linkedConseillerIds:Q}),ce())}}}function Je(){const e=document.getElementById("panel-alertes"),t=x.alertes||[],i={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let a="";t.length===0?a+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':a+=t.map((n,s)=>`
      <div class="alert-item">
        <i class="bi ${i[n.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${n.label}</div>
          <div class="alert-item-meta">${n.metric} ${n.condition||""} ${n.threshold||""} ${n.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${s}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),a+='<button id="create-alert-btn" class="action-btn action-btn--primary" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=a,e.querySelectorAll(".remove-alert-btn").forEach(n=>{n.addEventListener("click",()=>{const s=parseInt(n.dataset.idx),c=[...x.alertes];c.splice(s,1),z({alertes:c}),Je()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{Gi(e)})}function Vi(){const e=[];return P.filter(i=>x.linkedSensorIds.includes(i.id)).forEach(i=>{(D[i.model]||[]).forEach(n=>{e.find(s=>s.id===n.id)||e.push({id:n.id,name:n.name,unit:n.unit})})}),Ge.forEach(i=>{e.find(a=>a.id===i.id)||e.push({id:i.id,name:i.name,unit:i.unit})}),e}function Gi(e){if(e.querySelector(".alert-create-form"))return;const i=Vi(),a=document.createElement("div");a.className="alert-create-form",a.innerHTML=`
    <div class="alert-form-row">
      <select id="alert-metric" class="panel-add-select">
        <option value="">Métrique…</option>
        ${i.map(n=>`<option value="${n.id}" data-unit="${n.unit}">${n.name}</option>`).join("")}
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
  `,e.appendChild(a),a.querySelector("#alert-metric").addEventListener("change",n=>{const s=n.target.selectedOptions[0];a.querySelector("#alert-unit-label").textContent=(s==null?void 0:s.dataset.unit)||"—"}),a.querySelector("#alert-save-btn").addEventListener("click",()=>{const s=a.querySelector("#alert-metric").value,c=i.find(v=>v.id===s),l=a.querySelector("#alert-condition").value,u=a.querySelector("#alert-threshold").value;if(!s||!u)return;const d={type:"seuil",label:`Alerte ${(c==null?void 0:c.name)||s}`,metric:(c==null?void 0:c.name)||s,condition:l,threshold:u,unit:(c==null?void 0:c.unit)||""};z({alertes:[...x.alertes||[],d]}),Je()}),a.querySelector("#alert-cancel-btn").addEventListener("click",()=>a.remove())}function Yi(e,t){const i=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(i),download:t});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function Ji(){const e=x.name||C.name||"Parcelle",t=Le(x.linkedSensorIds);let i;if(G){const r=oe.find(h=>h.id===G),m=P.filter(h=>h.parcelIds.includes(G)).map(h=>h.id),p=Le(m),f=(r==null?void 0:r.name)||"Comparaison";i=[...t.map(h=>({h:`[${e}] ${h.name} (${h.unit})`,gen:h.base})),...p.map(h=>({h:`[${f}] ${h.name} (${h.unit})`,gen:h.base}))]}else i=t.map(r=>({h:`${r.name} (${r.unit})`,gen:r.base}));const a=ve()*6e4,n=be()*6e4,s=J==="custom"&&pe?pe:new Date,c=J==="custom"&&me?me:new Date(s-a),l=Math.min(Math.ceil((s-c)/n)+1,500),u=(s-c)/Math.max(l-1,1),d=["Horodatage",...i.map(r=>r.h)].join(";"),v=Array.from({length:l},(r,m)=>[new Date(c.getTime()+m*u).toISOString().replace("T"," ").slice(0,19),...i.map(f=>f.gen())].join(";")),o=e.replace(/[^\w]/g,"_");Yi([d,...v].join(`\r
`),`${o}_${J}_${new Date().toISOString().slice(0,10)}.csv`)}function Ce({title:e,message:t,confirmLabel:i="Confirmer",onConfirm:a}){const n=document.createElement("div");n.className="modal add-modal",n.style.zIndex="9999",n.innerHTML=`
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
    </div>`,n.querySelector(".add-modal-close").addEventListener("click",()=>n.remove()),n.querySelector(".confirm-cancel").addEventListener("click",()=>n.remove()),n.querySelector(".confirm-ok").addEventListener("click",()=>{n.remove(),a()}),n.addEventListener("click",s=>{s.target===n&&n.remove()}),document.body.appendChild(n)}function Ui(){if(Re){Re.invalidateSize();return}const e=Ve.find(s=>s.id===C.orgId),t=x.lat??C.lat??(e==null?void 0:e.lat),i=x.lng??C.lng??(e==null?void 0:e.lng);if(t==null||i==null)return;const a=x.latlngs,n=L.map("parcel-mini-map",{zoomControl:!1,attributionControl:!1});if(Re=n,L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(n),Array.isArray(a)&&a.length>=3){const s=L.polygon(a,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(n);n.fitBounds(s.getBounds(),{padding:[10,10]})}else{const s=.009009009009009009,c=1/(111*Math.cos(t*Math.PI/180));n.fitBounds([[t-s,i-c],[t+s,i+c]]),L.circleMarker([t,i],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(n)}}function Xi(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),i=t.querySelector("i");t.addEventListener("click",()=>{const a=e.classList.toggle("panel-collapsed");t.title=a?"Afficher le panneau":"Masquer le panneau",i.className=a?"bi bi-chevron-left":"bi bi-chevron-right"})}let Re=null;function Ki(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(i=>i.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.pane).classList.add("active"),t.dataset.pane==="tab-journal"&&Ye()})})}const Zi={"previsions-5j":{size:"1x1",title:"Prévisions 5 jours",icon:"bi-calendar3-week",color:"#5b8dd9",render:tn,footer:{label:"Voir les prévisions",href:"previsions.html"}},weephyt:{size:"1x1",title:"Weephyt",icon:"bi-shield-check",color:"#2d9e5f",render:nn,footer:{label:"Voir Weephyt",href:"#"}},cumuls:{size:"1x1",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#2E75B6",render:Te},bilan:{size:"1x1",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4",render:mn,footer:{label:"Voir les données",href:"#",tab:"donnees"}},irrigations:{size:"1x1",title:"Irrigations",icon:"bi-moisture",color:"#FF8C00",render:Se,footer:{label:"Voir les irrigations",href:`irrigation.html?plot=${k}`}},gel:{size:"1x1",title:"Suivi du risque de gel",icon:"bi-thermometer-snow",color:"#FEE7B4",render:an,footer:{label:"Voir les prévisions",href:"previsions.html"}},dpv:{size:"1x1",title:"DPV",icon:"bi-droplet-half",color:"#5E88EC",render:sn,footer:{label:"Voir les données",href:"#",tab:"donnees"}},thi:{size:"1x1",title:"THI",icon:"bi-heart-pulse",color:"#e0a030",render:on,footer:{label:"Voir les données",href:"#",tab:"donnees"}},"temp-rosee":{size:"1x1",title:"Température de rosée",icon:"bi-thermometer",color:"#72B0D8",render:rn,footer:{label:"Voir les données",href:"#",tab:"donnees"}},"temp-sol":{size:"1x1",title:"Température du sol",icon:"bi-layers",color:"#795548",render:ln,footer:{label:"Voir les données",href:"#",tab:"donnees"}},maizy:{size:"1x1",title:"Maï'zy",icon:"bi-calendar-check",color:"#2d9e5f",render:cn,footer:{label:"Voir Maï'zy",href:"#"}},tavelure:{size:"1x1",title:"Tavelure Pomme",icon:"bi-exclamation-triangle",color:"#e07050",render:dn,footer:{label:"Voir Tavelure",href:"#"}},"suivi-culture":{size:"1x1",title:"Suivi de culture",icon:"bi-flower2",color:"#78d8a0",render:le},decitrait:{size:"1x1",title:"Decitrait",icon:"bi-shield",color:"#6080b0",render:le,footer:{label:"Voir Decitrait",href:"#"}},"previsions-6h":{size:"1x1",title:"Prévisions à 6 heures",icon:"bi-clock",color:"#5b8dd9",render:le,footer:{label:"Voir les prévisions",href:"previsions.html"}},"previsions-jour":{size:"1x1",title:"Prévisions du jour",icon:"bi-sun",color:"#f5c842",render:le,footer:{label:"Voir les prévisions",href:"previsions.html"}},"previsions-tensio":{size:"1x1",title:"Prévisions tensiométrie",icon:"bi-graph-down",color:"#A6C157",render:le,footer:{label:"Voir les prévisions",href:"previsions.html"}},"w-station":{size:"1x1",title:"Station météo",icon:"bi-broadcast",color:"#FBAF05",render:X("w-station"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-thygro":{size:"1x1",title:"Thermomètre-hygromètre",icon:"bi-thermometer-half",color:"#FBAF05",render:X("w-thygro"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-tsol":{size:"1x1",title:"Thermomètre de sol",icon:"bi-layers",color:"#795548",render:X("w-tsol"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-anem":{size:"1x1",title:"Anémomètre",icon:"bi-wind",color:"#616161",render:X("w-anem"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-pyrano":{size:"1x1",title:"Pyranomètre",icon:"bi-sun",color:"#CBCB0B",render:X("w-pyrano"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-lws":{size:"1x1",title:"Capteur d'humectation foliaire",icon:"bi-droplet",color:"#00887E",render:X("w-lws"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-par":{size:"1x1",title:"Capteur PAR",icon:"bi-brightness-high",color:"#4CBB17",render:X("w-par"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-capa":{size:"1x1",title:"Sonde capacitive",icon:"bi-moisture",color:"#ED9A2C",render:X("w-capa"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-tensio":{size:"1x1",title:"Tensiomètre",icon:"bi-graph-down",color:"#A6C157",render:X("w-tensio"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"w-ec":{size:"1x1",title:"Sonde de fertirrigation",icon:"bi-plug",color:"#2BCDDE",render:X("w-ec"),footer:{label:"Voir les données",href:"#",tab:"donnees"}},"profil-capteurs":{size:"1x1",title:"Profil capteurs",icon:"bi-bar-chart",color:"#5b8dd9",render:le},"niveau-reservoir":{size:"1x1",title:"Niveau de réservoir (RFU)",icon:"bi-droplet-fill",color:"#0172A4",render:Rt},"profil-reservoir":{size:"1x1",title:"Profil de réservoir",icon:"bi-clipboard-data",color:"#0172A4",render:Ot}},At=()=>`dash-widgets-parcel-${k}`;function fe(){try{const e=JSON.parse(localStorage.getItem(At()));if(Array.isArray(e)&&e.length)return e}catch{}return Qi()}function he(e){localStorage.setItem(At(),JSON.stringify(e))}function vt(e){const t=P.filter(d=>e.includes(d.id)),i=new Set(t.map(d=>d.model)),a=[...i].some(d=>d.startsWith("CAPA-")),n=[...i].some(d=>_.includes(d)),s=new Set(["previsions-5j","weephyt","cumuls"]);(i.has("P+")||i.has("PT")||i.has("SMV")||i.has("P"))&&s.add("w-station"),i.has("TH")&&s.add("w-thygro"),i.has("T_MINI")&&s.add("w-tsol"),i.has("W")&&s.add("w-anem"),i.has("PYRANO")&&s.add("w-pyrano"),i.has("LWS")&&s.add("w-lws"),i.has("T_GEL")&&s.add("gel"),i.has("PAR")&&s.add("w-par"),a&&s.add("w-capa"),n&&s.add("w-tensio"),i.has("EC")&&s.add("w-ec"),(n||a)&&s.add("bilan"),(!!C.irrigation&&C.irrigation!=="Non irrigué"||O.some(d=>d.plotId===C.id))&&s.add("irrigations");const l=fe(),u=l.filter(d=>s.has(d));u.length!==l.length&&he(u)}function ft(e){const t=fe(),i=n=>{t.includes(n)||t.push(n)},a=e.model;(a==="P+"||a==="PT"||a==="SMV"||a==="P")&&i("w-station"),a==="TH"&&i("w-thygro"),a==="T_MINI"&&i("w-tsol"),a==="W"&&i("w-anem"),a==="PYRANO"&&i("w-pyrano"),a==="LWS"&&i("w-lws"),a==="T_GEL"&&i("gel"),a==="PAR"&&i("w-par"),a==="EC"&&i("w-ec"),a.startsWith("CAPA-")&&(i("w-capa"),i("bilan")),_.includes(a)&&(i("w-tensio"),i("bilan")),he(t)}function Qi(){const e=P.filter(c=>x.linkedSensorIds.includes(c.id)),t=new Set(e.map(c=>c.model)),i=[...t].some(c=>c.startsWith("CAPA-")),a=[...t].some(c=>_.includes(c)),n=["previsions-5j","weephyt","cumuls"];return(t.has("P+")||t.has("PT")||t.has("SMV")||t.has("P"))&&n.push("w-station"),t.has("TH")&&n.push("w-thygro"),t.has("T_MINI")&&n.push("w-tsol"),t.has("W")&&n.push("w-anem"),t.has("PYRANO")&&n.push("w-pyrano"),t.has("LWS")&&n.push("w-lws"),t.has("T_GEL")&&n.push("gel"),t.has("PAR")&&n.push("w-par"),i&&n.push("w-capa"),a&&n.push("w-tensio"),t.has("EC")&&n.push("w-ec"),(a||i)&&n.push("bilan"),(!!C.irrigation&&C.irrigation!=="Non irrigué"||O.some(c=>c.plotId===C.id))&&n.push("irrigations"),n}function ue(){const e=document.getElementById("dash-grid");if(!e)return;const t=fe();!t.includes("irrigations")&&O.some(i=>i.plotId===C.id)&&(t.push("irrigations"),he(t)),e.innerHTML="",t.forEach(i=>{const a=Zi[i];if(!a)return;const n=document.createElement("div");n.className=`dash-block dash-block--${a.size}`,n.dataset.id=i,n.draggable=!0;const s=a.footer?`<div class="dash-block-ft"><a class="dash-block-ft-link" href="${a.footer.href}"${a.footer.tab?` data-tab="${a.footer.tab}"`:""}>${a.footer.label} →</a></div>`:"";n.innerHTML=`
      <div class="dash-block-hd" style="color:${a.color}">
        <span style="display:flex;align-items:center;gap:6px"><i class="bi ${a.icon}"></i> ${a.title}</span>
        <button class="dash-menu-btn" data-wid="${i}" title="Options" aria-label="Options">···</button>
      </div>
      <div class="dash-block-body" id="dblock-${i}"></div>
      ${s}`,e.appendChild(n),a.render(n.querySelector(`#dblock-${i}`))}),e.querySelectorAll(".dash-menu-btn").forEach(i=>{i.addEventListener("click",a=>{var d,v,o;a.stopPropagation(),(d=document.querySelector(".dash-dropdown"))==null||d.remove();const n=i.dataset.wid,s=document.createElement("div");s.className="dash-dropdown";const c=n==="irrigations"?`
        <button class="dash-dd-item" data-action="set-vol">Définir le volume limité et le débit</button>`:"";s.innerHTML=`${c}<button class="dash-dd-item dash-dd-remove" data-action="remove" data-wid="${n}">Retirer le widget</button>`;const l=i.getBoundingClientRect(),u=e.getBoundingClientRect();s.style.top=`${l.bottom-u.top+4}px`,s.style.right=`${u.right-l.right}px`,e.style.position="relative",e.appendChild(s),(v=s.querySelector('[data-action="remove"]'))==null||v.addEventListener("click",()=>{s.remove();const r=fe().filter(m=>m!==n);he(r),ue()}),(o=s.querySelector('[data-action="set-vol"]'))==null||o.addEventListener("click",()=>{s.remove(),Nt("vol")}),setTimeout(()=>document.addEventListener("click",()=>s.remove(),{once:!0}),0)})}),e.querySelectorAll(".dash-block-ft-link[data-tab]").forEach(i=>{i.addEventListener("click",a=>{var n;a.preventDefault(),(n=document.querySelector(`.detail-tab-btn[data-pane="tab-${i.dataset.tab}"]`))==null||n.click()})}),pn(e)}function It(e,t=380,i=90){const l=t-28-8,u=i-6-20,d=e.flatMap(b=>b.values);let v=Math.min(...d),o=Math.max(...d);v===o&&(v-=1,o+=1);const r=e[0].values.length,m=b=>(28+b/(r-1)*l).toFixed(1),p=b=>(6+u-(b-v)/(o-v)*u).toFixed(1),f=[.25,.5,.75].map(b=>{const w=(6+b*u).toFixed(1);return`<line x1="28" y1="${w}" x2="${t-8}" y2="${w}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),h=[v,(v+o)/2,o].map(b=>`<text x="25" y="${(+p(b)+3.5).toFixed(0)}" text-anchor="end" font-size="9" fill="var(--txt3)">${b.toFixed(0)}</text>`).join(""),g=e.map(b=>`<path d="${b.values.map((y,S)=>`${S?"L":"M"}${m(S)},${p(y)}`).join("")}" fill="none" stroke="${b.color}" stroke-width="1.8" stroke-linejoin="round"/>`).join("");return`<svg width="100%" height="${i}" viewBox="0 0 ${t} ${i}" preserveAspectRatio="none">${h}${f}${g}</svg>`}function en(e,t,i,a){const v=(h,g)=>{const b=Math.PI+h*Math.PI,w=Math.PI+g*Math.PI,y=(80+60*Math.cos(b)).toFixed(1),S=(90+60*Math.sin(b)).toFixed(1),M=(80+60*Math.cos(w)).toFixed(1),j=(90+60*Math.sin(w)).toFixed(1);return`M${y},${S} A60,60,0,${g-h>.5?1:0},1,${M},${j}`},o=v(0,1),r=t.filter(h=>h.from<e).map(h=>`<path d="${v(h.from,Math.min(h.to,e))}" fill="none" stroke="${h.color}" stroke-width="12" stroke-linecap="butt"/>`).join(""),m=Math.PI+e*Math.PI,p=(80+60*Math.cos(m)).toFixed(1),f=(90+60*Math.sin(m)).toFixed(1);return`<svg width="160" height="100" viewBox="0 0 160 100">
    <path d="${o}" fill="none" stroke="var(--bdr2)" stroke-width="12" stroke-linecap="butt"/>
    ${r}
    <circle cx="${p}" cy="${f}" r="5" fill="white" stroke="var(--txt3)" stroke-width="1.5"/>
    <text x="80" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="var(--txt)">${a}</text>
    <text x="80" y="96" text-anchor="middle" font-size="9" fill="var(--txt3)">${i}</text>
  </svg>`}function tn(e){const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],a=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],n=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],s=new Date,c=oe.find(r=>r.id===k),l=Ve.find(r=>r.id===(c==null?void 0:c.orgId)),u=(c==null?void 0:c.ville)||(l==null?void 0:l.ville)||"—",d=(r,m)=>{const p=new Date(s);p.setDate(p.getDate()+r);const f=Math.floor((k*7+r*3)%11/2.2);return{lbl:r===0?"Auj.":t[p.getDay()],date:`${p.getDate()} ${i[p.getMonth()]}`,tmax:$(17+m,34+m),tmin:$(4+m,15+m),pluie:f>=3?$(2,18):0,vent:$(10,35),rafales:$(25,70),wi:f}},v=[0,1,2].map(r=>d(r,0)).concat([3,4].map(r=>d(r,-1))),o=r=>`
    <div class="w-prev5-day">
      <div class="w-prev5-daylbl">${r.lbl}</div>
      <div class="w-prev5-date">${r.date}</div>
      <i class="bi ${a[r.wi]} w-prev5-icon" title="${n[r.wi]}"></i>
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
    <div class="w-prev5-grid">${v.map(o).join("")}</div>`}function nn(e){const t=new Date,i=x.crop||C.crop||"",a=[{label:"Herbicides de contact",seed:7},{label:"Fongicides",seed:3},{label:"Herbicides racinaires",seed:11},{label:"Herbicides systémiques",seed:5}],n=Array.from({length:12},(l,u)=>{const d=new Date(t);return d.setHours(d.getHours()+u),d}),s=l=>`${String(l.getHours()).padStart(2,"0")}h`,c=l=>{const u=n.map((d,v)=>(l.seed*17+v*5)%11<6);return n.map((d,v)=>`
      <div class="w-weephyt-dot-wrap" title="${s(d)} — ${u[v]?"Fenêtre OK":"Fenêtre non OK"}">
        <div class="w-weephyt-tl-dot" style="background:${u[v]?"#2d9e5f":"#e07050"}"></div>
        <div class="w-weephyt-tl-lbl">${v%3===0?s(d):""}</div>
      </div>`).join("")};e.innerHTML=`<div class="w-weephyt-wrap">
    <div class="w-weephyt-tl-legend"><span style="color:#2d9e5f">● OK</span><span style="color:#e07050">● Non OK</span></div>
    ${a.map(l=>`
      <div class="w-weephyt-family">
        <div class="w-weephyt-family-label">${l.label}</div>
        <div class="w-weephyt-timeline">${c(l)}</div>
      </div>`).join("")}
    <div class="w-weephyt-src">Via <strong>Weephyt</strong> · ${i||"—"}</div>
  </div>`}const Tt=()=>`w-cumuls-state-${k}`;function Lt(){try{return JSON.parse(localStorage.getItem(Tt()))||{}}catch{return{}}}function je(e){const t=Lt();localStorage.setItem(Tt(),JSON.stringify({...t,...e}))}function Te(e){const t=P.filter(r=>x.linkedSensorIds.includes(r.id)),i=new Set(t.flatMap(r=>(D[r.model]||[]).map(m=>m.id))),a=`${new Date().getFullYear()}-01-01`,n=Lt(),s=new Set(n.hidden||[]),c=n.dates||{},l=n.cfg||{},u=[{id:"etp",label:"Évapotranspiration",value:R(20,80).toFixed(1),unit:"mm",color:"#c090e0",icon:"bi-sun",show:!0},{id:"pluie",label:"Pluie",value:$(10,50),unit:"mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy",show:i.has("pluie")},{id:"djc",label:"Degrés jours",value:$(40,180),unit:"DJ",color:"#e07050",icon:"bi-thermometer-half",show:i.has("temp"),cfg:!0,cfgLabel:`${l.djMin??0}–${l.djMax??18}°C`,cfgFields:[{key:"djMin",label:"T min",def:0},{key:"djMax",label:"T max",def:18}]},{id:"hfroid",label:"Heures de froid",value:$(5,40),unit:"h",color:"#0B3A64",icon:"bi-snow",show:i.has("temp"),cfg:!0,cfgLabel:`< ${l.hfSeuil??7.2}°C`,cfgFields:[{key:"hfSeuil",label:"Seuil",def:7.2}]},{id:"humec",label:"Humectation",value:R(2,20).toFixed(1),unit:"h",color:"#78d8a0",icon:"bi-droplet",show:i.has("humec")},{id:"enso",label:"Ensoleillement",value:R(30,90).toFixed(1),unit:"h",color:"#f5c842",icon:"bi-brightness-high",show:!0}].filter(r=>r.show),d=u.filter(r=>!s.has(r.id)),v=u.filter(r=>s.has(r.id)),o=v.length?`<div style="border-top:1px solid var(--bdr2);padding-top:8px;margin-top:8px">
        <div style="font-size:11px;color:var(--txt3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${v.map(r=>`
          <button class="w-cumul-restore" data-cid="${r.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed var(--bdr);border-radius:8px;padding:7px 10px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${r.icon}" style="color:${r.color};font-size:14px;flex-shrink:0"></i>
            <span style="font-size:12px;color:var(--txt);flex:1">${r.label}</span>
            <i class="bi bi-plus-circle" style="color:var(--pri);font-size:14px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"";e.innerHTML=`<div class="w-cumuls-list">${d.map(r=>{const m=c[r.id]||a;return m.split("-").reverse().join("/"),`
      <div class="w-cumul-item">
        <i class="bi ${r.icon} w-cumul-icon" style="color:${r.color}"></i>
        <div class="w-cumul-body">
          <div class="w-cumul-lbl">${r.label}</div>
          <div class="w-cumul-val" style="color:${r.color}">${r.value}<span class="w-cumul-unit"> ${r.unit}</span></div>
          <div class="w-cumul-date">Depuis le <input type="date" class="w-cumul-date-input" data-cid="${r.id}" value="${m}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px">${r.cfg?`<button class="w-cumul-cfg" data-cid="${r.id}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px;line-height:1"><i class="bi bi-gear"></i> ${r.cfgLabel}</button>`:""}</div>
        </div>
        <button class="w-cumul-del" data-cid="${r.id}" title="Retirer">×</button>
      </div>`}).join("")}</div>${o}`,e.querySelectorAll(".w-cumul-del").forEach(r=>{r.addEventListener("click",m=>{m.stopPropagation(),s.add(r.dataset.cid),je({hidden:[...s]}),Te(e)})}),e.querySelectorAll(".w-cumul-restore").forEach(r=>{r.addEventListener("click",m=>{m.stopPropagation(),s.delete(r.dataset.cid),je({hidden:[...s]}),Te(e)})}),e.querySelectorAll(".w-cumul-date-input").forEach(r=>{r.addEventListener("change",()=>{c[r.dataset.cid]=r.value,je({dates:c})})}),e.querySelectorAll(".w-cumul-cfg").forEach(r=>{r.addEventListener("click",m=>{var g;m.stopPropagation();const p=r.dataset.cid,f=d.find(b=>b.id===p);if(!(f!=null&&f.cfgFields))return;(g=e.querySelector(".w-cumul-cfg-panel"))==null||g.remove();const h=document.createElement("div");h.className="w-cumul-cfg-panel",h.style.gridColumn="1 / -1",h.innerHTML=`<div class="w-cumul-cfg-title">Paramétrer ${f.label}</div>`+f.cfgFields.map(b=>`
          <label class="w-cumul-cfg-row">
            <span>${b.label} (°C)</span>
            <input type="number" class="w-cumul-cfg-inp" data-key="${b.key}" value="${l[b.key]??b.def}" step="0.1">
          </label>`).join("")+'<button class="w-cumul-cfg-ok">OK</button>',r.closest(".w-cumul-item").after(h),h.querySelector(".w-cumul-cfg-ok").addEventListener("click",()=>{h.querySelectorAll(".w-cumul-cfg-inp").forEach(b=>{l[b.dataset.key]=parseFloat(b.value)||0}),je({cfg:l}),h.remove(),Te(e)})})})}function an(e){if(!P.filter(o=>x.linkedSensorIds.includes(o.id)).some(o=>o.model==="T_GEL")){e.innerHTML='<div class="dash-empty">Capteur T_GEL non lié</div>';return}const i=25,a=R(0,5),n=Array.from({length:i},(o,r)=>+(a+r*.18+R(-.8,.8)).toFixed(1)),s=n.map(o=>+(o-R(1,2.5)).toFixed(1)),c=It([{values:n,color:"#23B19B"},{values:s,color:"#5E88EC"}],380,100),l=n[i-1],u=s[i-1],d=$(5,8),v=String(Math.floor(Math.random()*60)).padStart(2,"0");e.innerHTML=`<div class="w-gel-wrap">
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
      <div class="w-gel-meteo-row"><i class="bi bi-sunrise" style="color:#CBCB0B"></i><span>Lever du soleil</span><strong>${d}h${v}</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-cloud" style="color:#8090a0"></i><span>Couverture nuageuse</span><strong>${$(20,80)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i><span>Humidité</span><strong>${$(60,90)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-wind" style="color:#616161"></i><span>Vent moyen</span><strong>${$(5,25)} km/h</strong></div>
    </div>
  </div>`}function sn(e){const t=P.filter(r=>x.linkedSensorIds.includes(r.id));if(!t.some(r=>{const m=D[r.model]||[];return m.some(p=>p.id==="temp")&&m.some(p=>p.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const a=R(18,30),n=$(40,85),c=+(.611*Math.exp(17.27*a/(a+237.3))*(1-n/100)).toFixed(2),l=Math.min(c/2,1),u=c<.4?"#5b8dd9":c<.8?"#2d9e5f":c<1.2?"#f5a030":"#e07050",d=c<.4?"Transpiration faible":c<.8?"Transpiration optimale":c<1.2?"Forte transpiration":"Stress hydrique",v=[{from:0,to:.2,color:"#5b8dd9"},{from:.2,to:.4,color:"#45b7d1"},{from:.4,to:.6,color:"#2d9e5f"},{from:.6,to:.8,color:"#a0c840"},{from:.8,to:.9,color:"#f5a030"},{from:.9,to:1,color:"#e07050"}],o=t.find(r=>{const m=D[r.model]||[];return m.some(p=>p.id==="temp")&&m.some(p=>p.id==="humidite")});e.innerHTML=`<div class="w-dpv-wrap">
    <div class="w-dpv-gauge" style="color:${u}">${en(l,v,d,c+" kPa")}</div>
    <div class="w-dpv-details">
      <div class="w-dpv-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${a.toFixed(1)} °C</div>
      <div class="w-dpv-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${n} %</div>
    </div>
    ${o?`<div class="w-sensor-src">${ee[o.model]||o.model} · ${o.serial}</div>`:""}
  </div>`}function on(e){if(!P.filter(r=>x.linkedSensorIds.includes(r.id)).some(r=>{const m=D[r.model]||[];return m.some(p=>p.id==="temp")&&m.some(p=>p.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const a=R(20,35),n=$(45,90),s=+(a-.55*(1-n/100)*(a-14.5)).toFixed(0),c=s<68?"#2d9e5f":s<72?"#f5c842":s<79?"#f5a030":"#e07050",l=s<68?"Confort":s<72?"Stress léger":s<79?"Stress modéré":"Stress sévère",u=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],d=new Date,v=Array.from({length:3},(r,m)=>{const p=new Date(d);return p.setDate(p.getDate()+m+1),{day:u[p.getDay()],m:$(64,72),j:$(68,80),s:$(62,70)}}),o=r=>r<68?"#2d9e5f":r<72?"#f5c842":"#f5a030";e.innerHTML=`<div class="w-thi-wrap">
    <div class="w-thi-header">
      <div class="w-thi-score" style="color:${c}">
        <div class="w-thi-val">${s}</div>
        <div class="w-thi-status">${l}</div>
      </div>
      <button class="w-thi-info-btn" title="Légende THI"><i class="bi bi-info-circle"></i></button>
    </div>
    <div class="w-thi-details">
      <div class="w-thi-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${a.toFixed(1)} °C</div>
      <div class="w-thi-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${n} %</div>
    </div>
    <div class="w-thi-forecast">
      <div class="w-thi-fc-label">Prévisions</div>
      ${v.map(r=>`<div class="w-thi-fc-row">
        <span class="w-thi-fc-day">${r.day}</span>
        <span class="w-thi-fc-val" style="color:${o(r.m)}">${r.m}</span>
        <span class="w-thi-fc-val" style="color:${o(r.j)}">${r.j}</span>
        <span class="w-thi-fc-val" style="color:${o(r.s)}">${r.s}</span>
      </div>`).join("")}
      <div class="w-thi-fc-legend"><span>Matin</span><span>Journée</span><span>Soir</span></div>
    </div>
  </div>`,e.querySelector(".w-thi-info-btn").addEventListener("click",r=>{r.stopPropagation();const m=e.querySelector(".w-thi-legend");if(m){m.remove();return}const p=document.createElement("div");p.className="w-thi-legend",p.innerHTML=`
      <div class="w-thi-legend-title">Échelle THI</div>
      <div class="w-thi-legend-row" style="color:#2d9e5f"><span class="w-thi-legend-range">&lt; 68</span><span>Confort</span></div>
      <div class="w-thi-legend-row" style="color:#f5c842"><span class="w-thi-legend-range">68 – 71</span><span>Stress léger</span></div>
      <div class="w-thi-legend-row" style="color:#f5a030"><span class="w-thi-legend-range">72 – 78</span><span>Stress modéré</span></div>
      <div class="w-thi-legend-row" style="color:#e07050"><span class="w-thi-legend-range">≥ 79</span><span>Stress sévère</span></div>`,e.querySelector(".w-thi-wrap").insertBefore(p,e.querySelector(".w-thi-details"))})}function rn(e){if(!P.filter(u=>x.linkedSensorIds.includes(u.id)).some(u=>{const d=D[u.model]||[];return d.some(v=>v.id==="temp")&&d.some(v=>v.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const a=72,n=R(14,22),s=Array.from({length:a},(u,d)=>+(n+6*Math.sin(d/24*2*Math.PI-Math.PI/2)+R(-.5,.5)).toFixed(1)),c=Array.from({length:a},(u,d)=>Math.max(30,Math.min(100,70-15*Math.sin(d/24*2*Math.PI-Math.PI/2)+R(-3,3)))),l=s.map((u,d)=>{const v=c[d]/100,o=17.27,r=237.3,m=Math.log(v)+o*u/(r+u);return+(r*m/(o-m)).toFixed(1)});e.innerHTML=`<div class="w-temprosee-wrap">
    ${It([{values:s,color:"#FBAF05"},{values:l,color:"#72B0D8"}],380,100)}
    <div class="w-temprosee-legend">
      <span style="color:#FBAF05"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Température (${s[a-1]}°C)</span>
      <span style="color:#72B0D8"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Point de rosée (${l[a-1]}°C)</span>
      <span style="font-size:10px;color:var(--txt3)">3 derniers jours</span>
    </div>
  </div>`}function ln(e){if(!P.filter(B=>x.linkedSensorIds.includes(B.id)).some(B=>(D[B.model]||[]).some(H=>H.id==="tsol"))){e.innerHTML='<div class="dash-empty">Capteur T. sol requis</div>';return}const a=48,n=R(14,20),s=Array.from({length:a},(B,H)=>+(n+3*Math.sin(H/24*2*Math.PI-Math.PI/2)+R(-.4,.4)).toFixed(1)),c=15,l=22,u=380,d=100,v=28,o=8,r=6,m=20,p=u-v-o,f=d-r-m,h=[...s,c,l],g=Math.min(...h)-1,b=Math.max(...h)+1,w=B=>(v+B/(a-1)*p).toFixed(1),y=B=>(r+f-(B-g)/(b-g)*f).toFixed(1),S=+y(c),M=+y(l),j=[.25,.5,.75].map(B=>{const H=(r+B*f).toFixed(1);return`<line x1="${v}" y1="${H}" x2="${u-o}" y2="${H}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),I=s.map((B,H)=>`${H?"L":"M"}${w(H)},${y(B)}`).join("");e.innerHTML=`<div class="w-tsol-wrap">
    <svg width="100%" height="${d}" viewBox="0 0 ${u} ${d}" preserveAspectRatio="none">
      ${j}
      <rect x="${v}" y="${M.toFixed(1)}" width="${p}" height="${(S-M).toFixed(1)}" fill="rgba(45,158,95,.1)"/>
      <line x1="${v}" y1="${S.toFixed(1)}" x2="${u-o}" y2="${S.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <line x1="${v}" y1="${M.toFixed(1)}" x2="${u-o}" y2="${M.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <path d="${I}" fill="none" stroke="#795548" stroke-width="2" stroke-linejoin="round"/>
      <text x="${v-3}" y="${r+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${b.toFixed(0)}</text>
      <text x="${v-3}" y="${r+f+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>
    </svg>
    <div class="w-tsol-legend">
      <span style="color:#795548"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sol · ${s[a-1]}°C</span>
      <span style="color:#2d9e5f;font-size:10px"><i class="bi bi-square-fill" style="opacity:.3"></i> Zone optimale ${c}–${l}°C</span>
      <span style="font-size:10px;color:var(--txt3)">48 dernières heures</span>
    </div>
  </div>`}function cn(e){const t=(x.crop||C.crop||"").toLowerCase();if(!t.includes("maïs")&&!t.includes("mais")){e.innerHTML='<div class="dash-empty">Culture Maïs requise</div>';return}const i=[{name:"Farmflex 253",target:1320},{name:"DKC 3230",target:1380},{name:"Ronaldinio",target:1290},{name:"Banguy",target:1350}],a=i[k%i.length],n=C.degresJour||$(600,1200),s=Math.min(n/a.target,1),c=Math.max(0,a.target-n),l=new Date,u=Math.round(c/10),d=new Date(l);d.setDate(d.getDate()+Math.max(0,u-5));const v=new Date(l);v.setDate(v.getDate()+u+5);const o=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],r=m=>`${m.getDate()} ${o[m.getMonth()]}`;e.innerHTML=`<div class="w-maizy-wrap">
    <div class="w-maizy-title">Récolte prévisionnelle</div>
    <div class="w-maizy-dates">${r(d)} — ${r(v)}</div>
    <div class="w-maizy-bar-wrap">
      <div class="w-maizy-bar-track"><div class="w-maizy-bar-fill" style="width:${(s*100).toFixed(1)}%"></div></div>
      <div class="w-maizy-bar-pct">${(s*100).toFixed(0)} %</div>
    </div>
    <div class="w-maizy-dj">
      <span class="w-maizy-dj-val">${n.toFixed?n.toFixed(1):n}</span>
      <span class="w-maizy-dj-sep"> / ${a.target} DJ</span>
      <span class="w-maizy-dj-vari">${a.name}</span>
    </div>
    <a class="w-maizy-link" href="#">Voir le détail <i class="bi bi-arrow-right"></i></a>
  </div>`}function dn(e){const t=(x.crop||C.crop||"").toLowerCase();if(!t.includes("pommier")&&!t.includes("pomme")){e.innerHTML='<div class="dash-empty">Culture Pommier requise</div>';return}const i=new Date,a=new Date(i);a.setDate(a.getDate()-$(2,8));const n=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=v=>`${v.getDate()} ${n[v.getMonth()]}`,c=$(8,24),l=$(80,280),u=l>200?"Élevé":l>120?"Modéré":"Léger",d=l>200?"#e07050":l>120?"#f5a030":"#2d9e5f";e.innerHTML=`<div class="w-tav-wrap">
    <div class="w-tav-ep">Dernier épisode · <strong>${s(a)}</strong></div>
    <div class="w-tav-stats">
      <div class="w-tav-stat"><span class="w-tav-stat-val">${c}h</span><span class="w-tav-stat-lbl">Durée</span></div>
      <div class="w-tav-stat"><span class="w-tav-stat-val">${l} DH</span><span class="w-tav-stat-lbl">Degrés-heures</span></div>
    </div>
    <div class="w-tav-risk" style="color:${d}">
      <i class="bi bi-circle-fill" style="font-size:8px;vertical-align:middle"></i>
      Risque d'infection estimé <strong>${u}</strong>
    </div>
    <a class="w-maizy-link" href="#">Afficher l'historique <i class="bi bi-arrow-right"></i></a>
  </div>`}const Pt=[{id:"j7",label:"J-7"},{id:"j1",label:"J-1"},{id:"j0",label:"J0"},{id:"last",label:"Dernières données"}],un=Pt.filter(e=>e.id==="j7"||e.id==="j1"),ht=()=>`w-reservoir-agg-${k}`,bt=()=>`w-profil-reservoir-agg-${k}`;function Ht(e,t="j0"){return localStorage.getItem(e())||t}function Ft(e,t){localStorage.setItem(e(),t)}function qt(e){const t=C.reserveHydrique||80,i=(C.id*17+13)%41,a={j7:-8,j1:-2,j0:0,last:1},n=Math.min(95,Math.max(15,55+i+(a[e]||0))),s=Math.round(t*n/100);return{rhu:t,pct:n,mm:s}}function Dt(e,t=Pt){return`<select class="w-reservoir-agg-sel">
    ${t.map(i=>`<option value="${i.id}"${i.id===e?" selected":""}>${i.label}</option>`).join("")}
  </select>`}function Rt(e){const t=Ht(ht),{rhu:i,pct:a,mm:n}=qt(t),s=a>60?"#2d9e5f":a>35?"#e07820":"#e04040";e.innerHTML=`
    <div class="w-bilan-layout">
      ${Dt(t)}
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track"><div class="w-bilan-gauge-fill" style="width:${a}%;background:${s}"></div></div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${s}">${n} mm / ${i} mm RFU (${a} %)</span>
          <span>${i} mm</span>
        </div>
      </div>
    </div>`,e.querySelector(".w-reservoir-agg-sel").addEventListener("change",c=>{Ft(ht,c.target.value),Rt(e)})}function Ot(e){const t=Ht(bt,"j1"),{pct:i}=qt(t),a=(C.id*17+13)%41,n=[{label:"10 cm",pct:Math.min(100,Math.max(0,i+a%12-5)),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,Math.max(0,i+a%8)),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,Math.max(0,i-a%10+3)),color:"#a07010"}];e.innerHTML=`
    <div class="w-bilan-layout">
      ${Dt(t,un)}
      <div class="w-bilan-horizons">
        ${n.map(s=>`
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${s.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${s.pct}%;background:${s.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${s.color}">${s.pct} %</span>
          </div>`).join("")}
      </div>
    </div>`,e.querySelector(".w-reservoir-agg-sel").addEventListener("change",s=>{Ft(bt,s.target.value),Ot(e)})}function le(e){e.innerHTML=`<div class="dash-empty" style="padding-top:20px">
    <i class="bi bi-hourglass" style="font-size:20px;opacity:.3;display:block;margin-bottom:6px"></i>
    Widget bientôt disponible
  </div>`}function X(e){return t=>{var d,v;const i=P.filter(o=>x.linkedSensorIds.includes(o.id)),a={"w-station":o=>["P+","PT","SMV","P"].includes(o.model),"w-thygro":o=>o.model==="TH","w-tsol":o=>o.model==="T_MINI","w-anem":o=>o.model==="W","w-pyrano":o=>o.model==="PYRANO","w-lws":o=>o.model==="LWS","w-par":o=>o.model==="PAR","w-capa":o=>o.model.startsWith("CAPA-"),"w-tensio":o=>_.includes(o.model),"w-ec":o=>o.model==="EC"},n=i.find(a[e]||(()=>!1));if(!n){t.innerHTML='<div class="dash-empty">Aucun capteur compatible lié</div>';return}const s=D[n.model]||[],l=({"w-station":()=>{const o=[];return s.some(r=>r.id==="temp")&&o.push({label:"Température",val:$(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"}),s.some(r=>r.id==="pluie")&&o.push({label:"Pluie 24h",val:$(0,14)+" mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy"}),s.some(r=>r.id==="humidite")&&o.push({label:"Humidité",val:$(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}),o},"w-thygro":()=>[{label:"Température",val:$(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"},{label:"Humidité",val:$(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}],"w-tsol":()=>[{label:"Temp. sol",val:$(8,22)+" °C",color:"#795548",icon:"bi-layers"}],"w-anem":()=>[{label:"Vitesse",val:$(0,40)+" km/h",color:"#616161",icon:"bi-wind"},{label:"Direction",val:["N","NE","E","SE","S","SO","O","NO"][$(0,7)],color:"#616161",icon:"bi-compass"}],"w-pyrano":()=>[{label:"Rayonnement",val:$(100,900)+" W/m²",color:"#CBCB0B",icon:"bi-sun"}],"w-lws":()=>[{label:"Humectation",val:R(0,12).toFixed(1)+" h/j",color:"#00887E",icon:"bi-droplet"}],"w-par":()=>[{label:"PPFD",val:$(100,2e3)+" µmol/m²/s",color:"#4CBB17",icon:"bi-brightness-high"}],"w-capa":()=>s.filter(o=>o.id.startsWith("vwc")).slice(0,3).map(o=>({label:o.name,val:$(15,45)+" %vol",color:o.color,icon:"bi-moisture"})),"w-tensio":()=>[{label:"Potentiel hydrique",val:$(10,150)+" kPa",color:"#A6C157",icon:"bi-graph-down"}],"w-ec":()=>[{label:"Conductivité",val:R(.1,3).toFixed(2)+" mS/cm",color:"#2BCDDE",icon:"bi-plug"}]}[e]||(()=>[]))();t.innerHTML=`
      <div class="w-sensor-rows">${l.map(o=>`
        <div class="w-sensor-row">
          <i class="bi ${o.icon}" style="color:${o.color};flex-shrink:0"></i>
          <span class="w-sensor-val" style="color:${o.color}">${o.val}</span>
          <span class="w-sensor-lbl">${o.label}</span>
        </div>`).join("")}</div>
      <div class="w-sensor-src">${ee[n.model]||n.model} · ${n.serial}</div>`;const u=(d=t.closest(".dash-block"))==null?void 0:d.querySelector(".dash-block-ft-link");if(u){const o=((v=document.getElementById("time-step"))==null?void 0:v.value)||"1h";u.href=`capteur-graphique.html?sensorId=${n.id}&parcelId=${k}&period=${J}&step=${o}`,u.removeAttribute("data-tab")}}}function mn(e){const t=P.filter(h=>x.linkedSensorIds.includes(h.id)),i=t.some(h=>h.model.startsWith("CAPA-")),a=t.some(h=>_.includes(h.model)),n=C.reserveHydrique||80,s=(C.id*17+13)%41,c=Math.min(95,Math.max(20,55+s)),l=Math.round(n*c/100),u=4+s%5-2,d=Math.max(2,Math.min(6,u)),v=Math.round(d*7-l*.3),o=Math.max(0,v),r=c>60?"#2d9e5f":c>35?"#e07820":"#e04040",m=c>60?"Réserve suffisante":c>35?"Réserve à surveiller":"Réserve critique",p=c>60?"bi-check-circle-fill":c>35?"bi-exclamation-circle-fill":"bi-x-circle-fill";if(!i&&!a){e.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:var(--txt3)">
      <i class="bi bi-droplet" style="font-size:24px"></i>
      <div style="font-size:13px;text-align:center">Ajoutez une sonde capacitive ou un tensiomètre pour suivre l'état hydrique</div>
    </div>`;return}const f=i?[{label:"10 cm",pct:Math.min(100,c+s%12-5),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,c+s%8),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,c-s%10+3),color:"#a07010"}]:[{label:"Potentiel",pct:c,color:"#5b8dd9"}];e.innerHTML=`
    <div class="w-bilan-layout">
      <div class="w-bilan-status" style="color:${r}">
        <i class="bi ${p}"></i> ${m}
      </div>
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track">
          <div class="w-bilan-gauge-fill" style="width:${c}%;background:${r}"></div>
        </div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${r}">${l} mm / ${n} mm RFU (${c} %)</span>
          <span>${n} mm</span>
        </div>
      </div>
      <div class="w-bilan-horizons">
        ${f.map(h=>`
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${h.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${h.pct}%;background:${h.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${h.color}">${h.pct} %</span>
          </div>`).join("")}
      </div>
      <div class="w-bilan-footer">
        <div class="w-bilan-kpi">
          <div class="w-bilan-kpi-lbl">ETP 7 j</div>
          <div class="w-bilan-kpi-val">${(d*7).toFixed(0)} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-bilan-kpi">
          <div class="w-bilan-kpi-lbl">Dose conseillée</div>
          <div class="w-bilan-kpi-val" style="color:${o>0?"#0172A4":"var(--ok)"}">
            ${o>0?`${o} <span class="w-irrig-unit">mm</span>`:'<i class="bi bi-check2" style="font-size:14px"></i>'}
          </div>
        </div>
      </div>
    </div>`}function Nt(e){const t=document.createElement("div");if(t.className="journal-form-overlay",e==="vol"){const i=xe(k).volumeMaxM3??"",a=xe(k).debitM3h??"";t.innerHTML=`
      <div class="journal-form-modal">
        <div class="journal-form-title">Volume limité de la parcelle</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Volume limité (m³)</label>
          <input id="iwa-vol-inp" class="journal-form-input" type="number" min="0" placeholder="—" value="${i}" style="width:120px">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Débit (m³/h)</label>
          <input id="iwa-debit-inp" class="journal-form-input" type="number" min="0" step="0.1" placeholder="Ex. 12" value="${a}" style="width:120px">
        </div>
        <div style="font-size:11px;color:var(--txt3);margin-top:-4px">Si renseigné, la durée d'irrigation estimée s'affiche au survol des quantités dans le calendrier d'irrigation.</div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const n=t.querySelector("#iwa-vol-inp").value,s=t.querySelector("#iwa-debit-inp").value;ae(k,{volumeMaxM3:n!==""?parseInt(n):null,debitM3h:s!==""?parseFloat(s):null}),t.remove(),document.querySelector("#dblock-irrigations")&&Se(document.querySelector("#dblock-irrigations"))}}else{const i=x.irrigation||"";t.innerHTML=`
      <div class="journal-form-modal">
        <div class="journal-form-title">Type d'irrigation</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="iwa-type-sel" class="journal-form-input">
            ${xt.map(a=>`<option${a===(i||"Non renseigné")?" selected":""}>${a}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const a=t.querySelector("#iwa-type-sel").value;z({irrigation:a}),t.remove(),document.querySelector("#dblock-irrigations")&&Se(document.querySelector("#dblock-irrigations"))}}t.addEventListener("click",i=>{i.target===t&&t.remove()})}function zt(e,t){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i);const a=()=>i.remove();i.addEventListener("click",s=>{s.target===i&&a()}),i.querySelector("#irr-cf-close").addEventListener("click",a),i.querySelector("#irr-cf-cancel").addEventListener("click",a),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),t()})}function _t(e,t){var n;(n=document.querySelector(".irr-save-confirm"))==null||n.remove();const i=document.createElement("div");i.className="irr-save-confirm",i.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(s=>`<div>${s}</div>`).join("")}</div>
      <a href="irrigation.html?plot=${k}" class="irr-save-confirm-link">Gérer les irrigations de toutes mes parcelles &gt;</a>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(i);const a=()=>i.remove();i.addEventListener("click",s=>{s.target===i&&a()}),i.querySelector("#irr-confirm-close").addEventListener("click",a)}function gt(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
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
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#irr-m-s-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-s-save").onclick=()=>{const i=t.querySelector("#irr-m-s-date").value,a=parseInt(t.querySelector("#irr-m-s-qty").value)||0;if(!i||!a)return;const n=i>se,s=()=>{O.push({iso:i,mm:a,real:!n,plotId:C.id,fromStrategy:!1}),$t(),t.remove(),Se(e),_t("Irrigation enregistrée",[`Date : ${ze(i)}`,`Quantité : ${a} mm`])},c=O.filter(l=>l.plotId===C.id&&l.iso===i);if(c.length){zt(c.length,()=>{O.splice(0,O.length,...O.filter(l=>!(l.plotId===C.id&&l.iso===i))),s()});return}s()}}function yt(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
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
    </div>`,document.body.appendChild(t);const i=()=>{const a=t.querySelector("#irr-m-sa-debut").value,n=t.querySelector("#irr-m-sa-fin").value,s=parseInt(t.querySelector("#irr-m-sa-qty").value)||0,c=parseInt(t.querySelector("#irr-m-sa-freq").value)||0,l=t.querySelector("#irr-m-sa-preview");if(!a||!n||c<=0){l.textContent="—";return}let u=0,d=new Date(a),v=new Date(n);for(;d<=v&&u<200;)u++,d.setDate(d.getDate()+c);if(u>0){const o=C.area>0?Math.round(u*s*C.area*10):0,r=o>0?` · ${o.toLocaleString("fr-FR")} m³`:"";l.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${u} irrigations · ${u*s} mm${r}</span>`}else l.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'};i(),t.querySelector("#irr-m-sa-debut").addEventListener("change",i),t.querySelector("#irr-m-sa-fin").addEventListener("change",i),t.querySelector("#irr-m-sa-qty").addEventListener("input",i),t.querySelector("#irr-m-sa-freq").addEventListener("input",i),t.addEventListener("click",a=>{a.target===t&&t.remove()}),t.querySelector("#irr-m-sa-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-sa-save").onclick=()=>{const a=t.querySelector("#irr-m-sa-debut").value,n=t.querySelector("#irr-m-sa-fin").value,s=parseInt(t.querySelector("#irr-m-sa-qty").value)||10,c=parseInt(t.querySelector("#irr-m-sa-freq").value)||7;if(!a||!n)return;const l=[];let u=new Date(a),d=new Date(n);for(;u<=d&&l.length<200;)l.push(new Date(u)),u.setDate(u.getDate()+c);const v=Wt(),o=()=>{l.forEach(m=>{const p=m.toISOString().slice(0,10);O.push({iso:p,mm:s,real:p<=se,plotId:C.id,fromStrategy:!0,seasonId:v})}),$t(),t.remove(),Se(e),_t("Saison enregistrée",[`Début : ${ze(a)} · Fin : ${ze(n)}`,`${l.length} irrigations · ${s} mm · tous les ${c} j`])},r=O.filter(m=>m.plotId===C.id&&m.iso>=a&&m.iso<=n);if(r.length){zt(r.length,()=>{O.splice(0,O.length,...O.filter(m=>!(m.plotId===C.id&&m.iso>=a&&m.iso<=n))),o()});return}o()}}function Se(e){var p,f,h,g,b;const t=O.filter(w=>w.plotId===C.id),i=t.filter(w=>w.real),a=t.filter(w=>!w.real),n=i.reduce((w,y)=>w+y.mm,0),s=a.reduce((w,y)=>w+y.mm,0),c=n+s,l=x.irrigation||C.irrigation;let u="";if(t.some(w=>w.fromStrategy)){const w=[...t].sort((j,I)=>j.iso.localeCompare(I.iso)),y=w[w.length-1],S=w[w.length-2],M=S?Math.round((new Date(y.iso)-new Date(S.iso))/864e5):null;u=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${y.mm} mm</strong>${M?` tous les <strong>${M} jours</strong>`:""}.</div>
      </div>`}const v=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-act-saisie">+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" type="button" id="w-irrig-act-saison">↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`,r=l&&!new Set(["Non irrigué","Non renseigné",""]).has(l),m=()=>{var y;const w=(y=e.closest(".dash-block"))==null?void 0:y.querySelector(".dash-block-ft-link");w&&(w.textContent=r?"Voir les irrigations →":"Gérer les irrigations →")};if(!r){e.innerHTML=`
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
        ${v}
      </div>`,(f=e.querySelector("#w-irrig-act-saisie"))==null||f.addEventListener("click",()=>gt(e)),(h=e.querySelector("#w-irrig-act-saison"))==null||h.addEventListener("click",()=>yt(e)),m();return}e.innerHTML=`
    <div class="w-irrig-layout">
      <div class="w-irrig-kpis">
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Effectuées</div>
          <div class="w-irrig-kpi-val" style="color:#E07820">${n} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Planifiées</div>
          <div class="w-irrig-kpi-val" style="color:#FFB705">${s} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Total</div>
          <div class="w-irrig-kpi-val" style="color:var(--txt3)">${c} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${u}
      ${v}
    </div>`,(g=e.querySelector("#w-irrig-act-saisie"))==null||g.addEventListener("click",()=>gt(e)),(b=e.querySelector("#w-irrig-act-saison"))==null||b.addEventListener("click",()=>yt(e)),m()}function pn(e){let t=null;e.querySelectorAll(".dash-block").forEach(i=>{i.addEventListener("dragstart",a=>{t=i,a.dataTransfer.effectAllowed="move",setTimeout(()=>i.classList.add("dash-drag-ghost"),0)}),i.addEventListener("dragend",()=>{i.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),t=null,he([...e.querySelectorAll(".dash-block")].map(a=>a.dataset.id))}),i.addEventListener("dragover",a=>{a.preventDefault(),!(!t||i===t)&&(a.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(n=>n.classList.remove("dash-drag-over")),i.classList.add("dash-drag-over"))}),i.addEventListener("dragleave",()=>{i.classList.remove("dash-drag-over")}),i.addEventListener("drop",a=>{if(a.preventDefault(),!t||i===t)return;i.classList.remove("dash-drag-over");const n=[...e.querySelectorAll(".dash-block")],s=n.indexOf(t),c=n.indexOf(i);s<c?i.after(t):i.before(t)})})}
