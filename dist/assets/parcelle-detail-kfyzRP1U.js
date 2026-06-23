import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as ne}from"./plots-DhtWL7s_.js";import{s as F}from"./sensors-CRadjF8G.js";import{o as Ve}from"./orgs-DnFmvGlp.js";import{m as ae}from"./members-Cr98hVG_.js";import{u as Ct}from"./breadcrumb-CzFWtd6d.js";import{m as Jt,d as se,c as Ce}from"./store-CX9wca99.js";import{I as O,g as Ut,s as St}from"./irrigations-C22Dtsoo.js";import{S as Xt,a as De,E as Kt,I as Mt}from"./constants-Dur9W-JX.js";const Et=new URLSearchParams(window.location.search),T=parseInt(Et.get("id")),S=ne.find(e=>e.id===T);function x(e,t){return Math.floor(Math.random()*(t-e+1))+e}function R(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}const Ge=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul d'ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",base:()=>x(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#72B0D8",base:()=>x(2,16),isCumul:!1}],Zt={id:"irrigation",name:"Irrigation",unit:"mm",color:"#FF8C00",base:()=>0,isCumul:!0,chartType:"bar",isIrrigation:!0},q={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>x(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>x(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>x(40,90)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>x(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>x(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>x(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],SMV:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>x(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>x(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>x(40,90)},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>x(10,28),cumul:{label:"Cumul de degrés jour",unit:"°j"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>x(40,90)}],"CHP-15/30":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>x(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],"CHP-30/60":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>x(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],"CHP-60/90":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>x(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],"CAPA-30-3":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>x(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>x(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>x(15,45)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],"CAPA-60-6":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>x(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>x(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>x(15,45)},{id:"vwc40",name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",base:()=>x(17,43)},{id:"vwc50",name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",base:()=>x(18,42)},{id:"vwc60",name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",base:()=>x(18,42)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],T_MINI:[{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],LWS:[{id:"humec",name:"Humectation foliaire",unit:"h",color:"#00887E",base:()=>x(0,12)}],T_GEL:[{id:"tseche",name:"Temp. sèche",unit:"°C",color:"#23B19B",base:()=>x(-2,12)},{id:"thumide",name:"Temp. humide",unit:"°C",color:"#5E88EC",base:()=>x(-4,10)}],W:[{id:"_vent",name:"Vent",unit:"km/h · direction",color:"#7bc4b0",isWindComposite:!0,base:()=>x(0,40)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>R(.1,3)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>x(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>x(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}],PAR:[{id:"par",name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#c47a00",base:()=>x(0,2e3)}]},_=["CHP-15/30","CHP-30/60","CHP-60/90"],Oe=[{name:"Tensiomètre (CHP)",models:new Set(["CHP-15/30","CHP-30/60","CHP-60/90"])},{name:"Sonde capacitive (CAPA)",models:new Set(["CAPA-30-3","CAPA-60-6"])},{name:"Sonde fertirrigation (EC)",models:new Set(["EC"])},{name:"Thermomètre de sol (T_MINI)",models:new Set(["T_MINI"])}];function Ne(e){return Oe.find(t=>t.models.has(e))||null}const Qt={"CAPA-30-3":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"}],"CAPA-60-6":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"},{depth:40,label:"40 cm",vwcColor:"#949494",tsolColor:"#804828"},{depth:50,label:"50 cm",vwcColor:"#870021",tsolColor:"#603818"},{depth:60,label:"60 cm",vwcColor:"#F608C2",tsolColor:"#402810"}]},Ue=["CAPA-30-3","CAPA-60-6"],ee={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function ei(e,t=null,i=null,n=null){const a=Math.max(2,Math.min(200,Math.floor(fe()/be()))),s=Array.from({length:a},()=>x(5,35)),c=s.map(j=>Math.min(j+x(3,18),80)),l=Array.from({length:a},()=>x(0,359)),m=600,d=200,f=46,r=16,o=16,p=28,u=m-f-r,h=d-o-p,v=Math.ceil(Math.max(...c)/10)*10||50,$=j=>f+j/Math.max(a-1,1)*u,g=j=>o+h-j/v*h,w=c.map((j,I)=>`${$(I).toFixed(1)},${g(j).toFixed(1)}`).join("L"),y=[...s].reverse().map((j,I)=>`${$(a-1-I).toFixed(1)},${g(j).toFixed(1)}`).join("L"),E=`M${w}L${y}Z`,b=s.map((j,I)=>`${I?"L":"M"}${$(I).toFixed(1)},${g(j).toFixed(1)}`).join(""),C=[.25,.5,.75].map(j=>{const I=(o+h-j*h).toFixed(1);return`<line x1="${f}" y1="${I}" x2="${m-r}" y2="${I}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),k=[0,.5,1].map(j=>{const I=o+h-j*h;return`<text x="${f-4}" y="${(I+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(j*v)}</text>`}).join(""),B=`<line x1="${f}" y1="${o+h}" x2="${m-r}" y2="${o+h}" stroke="var(--bdr2)" stroke-width="1"/>`,A=Math.max(1,Math.floor(a/6));let P="";for(let j=0;j<a;j+=A){const I=(a-1-j)/Math.max(a-1,1)*fe();P+=`<text x="${$(j).toFixed(1)}" y="${(o+h+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ge(I)}</text>`}const W=Math.max(1,Math.round(a/25)),Z=[];for(let j=0;j<a;j+=W){const I=$(j).toFixed(1),N=(o+h*.35).toFixed(1);Z.push(`<g transform="translate(${I},${N}) rotate(${l[j]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const D=document.createElement("div");D.className="chart-card",n&&(D.dataset.cardKey=n,D.draggable=!0);const ye=t?`<span class="chart-card-source">${t}</span>`:"",H=i!=null?`<span class="chart-card-emission">il y a ${i} min</span>`:"";D.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
      <div class="chart-card-meta">${ye}${H}</div>
    </div>
    <svg width="100%" height="${d}" viewBox="0 0 ${m} ${d}" preserveAspectRatio="none">
      ${k}${C}${B}${P}
      <path d="${E}" fill="#7bc4b0" opacity=".18"/>
      <path d="${b}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${Z.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(D)}const ti=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let M={};function ii(){const e=Ce(T);if(M={...S,...e},!M.linkedSensorIds){const n=F.filter(a=>a.parcelIds.includes(T)).map(a=>a.id);M.linkedSensorIds=e.linkedSensorIds??n}M.integrations||(M.integrations=[...S.integrations||[]]),M.alertes||(M.alertes=[]);const t=F.filter(n=>M.linkedSensorIds.includes(n.id)),i=Oe.find(n=>t.some(a=>n.models.has(a.model)));i&&Oe.some(a=>a!==i&&t.some(s=>a.models.has(s.model)))&&(M.linkedSensorIds=M.linkedSensorIds.filter(a=>{const s=F.find(l=>l.id===a);if(!s)return!0;const c=Ne(s.model);return!c||c===i}),se(T,{linkedSensorIds:M.linkedSensorIds}))}function z(e){Object.assign(M,e),Object.assign(S,e),se(T,e)}let J="j7j2",me=null,pe=null;const ni=new Set(["pluie","temp","humidite","pothydr","etp","temp_rosee","rayonnement","_vent"]),ai={j7j2:2};function fe(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,j7j2:10080,"30d":43200,"365d":525600};return J==="custom"&&me&&pe?Math.max(60,Math.round((pe-me)/6e4)):e[J]??10080}function be(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function si(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"||e==="j7j2"?"1d":"1h"}function oi(){const e=fe(),t=be();return Math.max(2,Math.min(200,Math.floor(e/t)))}function ri(){const e=ai[J]||0;if(!e)return 0;const t=be();return Math.max(1,Math.round(e*1440/t))}const Xe={Cumuls:"cumuls",Pluie:"pluie-hist",Évapotranspiration:"etp-hist","Maï'zy":"maizy","Suivi de culture":"suivi-culture",Traitements:"weephyt",Decitrait:"decitrait","Tavelure Pomme":"tavelure",DPV:"dpv",THI:"thi","Température de rosée":"temp-rosee","Température du sol":"temp-sol","Rayonnement solaire":"w-pyrano",Gel:"gel","Prévisions à 5 jours":"previsions-5j","Prévisions à 6 heures":"previsions-6h","Prévisions du jour":"previsions-jour","Prévisions de tensiométrie":"previsions-tensio",Anémomètre:"w-anem","Capteur d'humectation foliaire":"w-lws","Capteur PAR":"w-par",Pyranomètre:"w-pyrano","Station météo":"w-station","Station Météo Virtuelle":"w-station","Thermomètre de sol":"w-tsol","Thermomètre-Hygromètre":"w-thygro","Bilan hydrique":"bilan",Irrigations:"irrigations","Sonde capacitive":"w-capa",Tensiomètre:"w-tensio","Sonde de fertirrigation":"w-ec","Profil capteurs":"profil-capteurs","Niveau de réservoir en eau utilisable":"niveau-reservoir","Profil de niveau de réservoir":"profil-reservoir"},li=[{title:"Cumuls",items:["Cumuls","Pluie","Évapotranspiration"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Traitements","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire","Gel"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Irrigation",items:["Bilan hydrique","Irrigations","Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]}];function ci(){const e=F.filter(d=>M.linkedSensorIds.includes(d.id)),t=new Set(e.map(d=>d.model)),i=(M.crop||S.crop||"").toLowerCase(),n=he(),a=e.some(d=>{const f=q[d.model]||[];return f.some(r=>r.id==="temp")&&f.some(r=>r.id==="humidite")}),s=e.some(d=>(q[d.model]||[]).some(f=>f.id==="tsol")),c=e.some(d=>(q[d.model]||[]).some(f=>f.cumul)),l=d=>Xe[d]?d==="Gel"?t.has("T_GEL"):d==="Maï'zy"?i.includes("maïs")||i.includes("mais"):d==="Tavelure Pomme"?i.includes("pommier"):d==="Station météo"?t.has("P+")||t.has("PT")||t.has("P"):d==="Station Météo Virtuelle"?t.has("SMV"):d==="Thermomètre-Hygromètre"?t.has("TH"):d==="Thermomètre de sol"?t.has("T_MINI")||s:d==="Anémomètre"?t.has("W"):d==="Pyranomètre"||d==="Rayonnement solaire"?t.has("PYRANO"):d==="Capteur d'humectation foliaire"?t.has("LWS"):d==="Capteur PAR"?t.has("PAR"):d==="Bilan hydrique"?[...t].some(r=>r.startsWith("CAPA-"))||[...t].some(r=>_.includes(r)):d==="Irrigations"?!0:d==="Sonde capacitive"?[...t].some(r=>r.startsWith("CAPA-")):d==="Tensiomètre"?[...t].some(r=>_.includes(r)):d==="Sonde de fertirrigation"?t.has("EC"):d==="DPV"||d==="THI"||d==="Température de rosée"?a:d==="Température du sol"?s:d==="Cumuls"?c:!0:!0,m=document.createElement("div");m.className="modal add-modal",m.innerHTML=`
    <div class="add-modal-content" style="max-width:520px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter un widget</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      ${li.map(d=>{const f=d.items.filter(l);return f.length?`
        <div class="add-modal-section">
          <div class="add-modal-section-label">${d.title}</div>
          <div class="wcat-list">
            ${f.map(r=>{const o=Xe[r],p=o&&n.includes(o);return`
              <div class="wcat-item">
                <span>${r}</span>
                ${p?'<span class="wcat-already"><i class="bi bi-check2"></i> Ajouté</span>':`<button class="wcat-add-btn" type="button" data-wid="${o}"><i class="bi bi-plus-circle"></i> Ajouter</button>`}
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")}
    </div>`,m.addEventListener("click",d=>{d.target===m&&m.remove()}),m.querySelector(".add-modal-close").addEventListener("click",()=>m.remove()),m.querySelectorAll(".wcat-add-btn").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.wid;if(!f)return;const r=he();r.includes(f)||(r.push(f),ve(r)),m.remove(),ue()})}),document.body.appendChild(m)}const je=`weenat-journal-${T}`,oe=new Date().toISOString().slice(0,10);function di(e,t){const i=new Date(e);return i.setDate(i.getDate()+t),i.toISOString().slice(0,10)}function ze(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,i,n]=e.split("-");return`${parseInt(n)} ${t[parseInt(i)-1]} ${e.split("-")[0]}`}const ui=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"];function mi(){const e=S,t=[],i=(l,m,d="Système")=>t.push({id:"auto-"+l+m.slice(0,8),type:"modification",date:l,texte:m,auteur:d}),n=e.orgId===1,a=n?"Jean-Michel Dutilleul":"Thomas Bertrand",s=n?"Alexandre Bernard":"Sophie Dubois";return i("2024-01-01","Création de la parcelle",a),e.crop&&i("2024-03-15",`Culture définie : ${e.crop}`,a),e.texture&&i("2024-03-15",`Texture de sol définie : ${e.texture}`,a),e.irrigation&&i("2024-04-01",`Type d'irrigation : ${e.irrigation}`,a),F.filter(l=>M.linkedSensorIds.includes(l.id)).forEach(l=>i("2024-06-10",`Liaison capteur : ${ee[l.model]||l.model} · ${l.serial}`,s)),i("2026-03-01","Début de cycle cultural 2026",a),t}const pi=new Set(["culture","stade","irrigation","cycle"]),Ke=[["BBCH 21 — Tallage actif","BBCH 30 — Début montaison","BBCH 45 — Gonflement épis"],["BBCH 13 — 3 feuilles étalées","BBCH 31 — Début élongation","BBCH 59 — Fin de floraison"],["BBCH 09 — Levée","BBCH 40 — Développement des organes de récolte","BBCH 49 — Taille de récolte atteinte"],["BBCH 15 — 5 feuilles étalées","BBCH 51 — Apparition inflorescence","BBCH 69 — Fin de floraison"]],Ze=["Apache","RGT Bilboa","Soissons","Fixion","Forum","Allez-y"],Qe=["Mise en place de la saison 2026","Démarrage de la nouvelle campagne","Lancement de la saison sur cette parcelle"],et=["Développement homogène sur la parcelle","Légère hétérogénéité en bordure, sous surveillance","Bon développement, conforme aux attentes"];function tt(e,t){const i=S.crop||"Blé tendre",n=S.id%100,a=Ke[S.id%Ke.length],s=Ze[S.id%Ze.length],c=S.id%6;return[{id:17434656e5,type:"cycle",date:te("2026-03-01",c),auteur:e,action:"début",culture:i,annee:"2026",texte:Qe[n%Qe.length]},{id:17438976e5,type:"culture",date:te("2026-03-06",c),auteur:e,action:"modification",culture:i,variete:s,texte:"Culture confirmée pour la saison 2026"},{id:17443296e5,type:"stade",date:te("2026-04-11",c),auteur:e,stade:a[0],culture:i,texte:""},{id:17453664e5,type:"stade",date:te("2026-04-23",c),auteur:t,stade:a[1],culture:i,texte:""},{id:17460576e5,type:"stade",date:te("2026-05-01",c),auteur:t,stade:a[2],culture:i,texte:et[n%et.length]}]}function te(e,t){const i=new Date(e+"T00:00:00");return i.setDate(i.getDate()+t),i.toISOString().slice(0,10)}function fi(e){return O.filter(t=>t.plotId===e&&t.real).map(t=>({id:`auto-irrig-${e}-${t.iso}-${t.mm}`,type:"irrigation",date:t.iso,volume:t.mm,unite:"mm",methode:S.irrigation||"",texte:"Irrigation effectuée.",auteur:"Système",_auto:!0}))}function xe(){const e=S.orgId===1,t=e?"Jean-Michel Dutilleul":"Thomas Bertrand",i=e?"Marie Martin":"Sophie Dubois";try{const m=localStorage.getItem(je);if(m){const d=JSON.parse(m);if(Array.isArray(d)){if(!d.some(r=>pi.has(r.type))){const r=[...tt(t,i),...d];return localStorage.setItem(je,JSON.stringify(r)),r}return d}}}catch{}const n=[{cible:"Pucerons",produit:"Karate Zeon 10 CS",dose:"0,1 L/ha",obs1:"Observation de quelques pucerons sur les feuilles basses. À surveiller.",obs2:"peu de pucerons visibles, situation sous contrôle."},{cible:"Mildiou",produit:"Bordeaux mixture",dose:"2 kg/ha",obs1:"Taches suspectes observées sur les feuilles basses, conditions humides.",obs2:"progression stoppée, feuillage sain."},{cible:"Limaces",produit:"Métaldéhyde",dose:"5 kg/ha",obs1:"Dégâts de limaces constatés en bordure de parcelle après les pluies.",obs2:"dégâts limités, population réduite."},{cible:"Altises",produit:"Karaté K",dose:"75 mL/ha",obs1:"Présence d'altises sur jeunes plants, seuil de nuisibilité approché.",obs2:"population sous contrôle, reprise normale."}],a=S.id%n.length,s=n[a],c=S.id%6,l=[{id:17469216e5,type:"note",category:"Observation générale",date:te("2026-05-11",c),auteur:t,texte:s.obs1},{id:17473536e5,type:"traitement",date:te("2026-05-16",c),auteur:i,texte:"Application conforme aux conditions météo. Vent < 2 m/s.",produit:s.produit,dose:s.dose,cible:s.cible},{id:17477856e5,type:"note",category:"Observation générale",date:te("2026-05-21",c),auteur:t,texte:`Suite traitement du ${te("2026-05-16",c).split("-").reverse().slice(0,2).join("/")} : ${s.obs2}`},...tt(t,i)];return localStorage.setItem(je,JSON.stringify(l)),l}function kt(e){localStorage.setItem(je,JSON.stringify(e))}function Ye(){const e=document.getElementById("journal-container");if(!e)return;const t=xe(),i=[...mi(),...fi(T)],n=[...t,...i].sort((r,o)=>o.date.localeCompare(r.date)),a=r=>{const[o,p,u]=r.split("-");return`${u}/${p}/${o}`},s={note:{label:"Note",icon:"bi-pencil",dotCls:"note",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotCls:"traitement",badgeCls:"traitement"},modification:{label:"Modification",icon:"bi-pencil-square",dotCls:"modification",badgeCls:"modification"},culture:{label:"Culture",icon:"bi-flower1",dotCls:"culture",badgeCls:"culture"},cycle:{label:"Cycle cultural",icon:"bi-arrow-repeat",dotCls:"cycle",badgeCls:"cycle"},stade:{label:"Stade phéno.",icon:"bi-calendar2-check",dotCls:"stade",badgeCls:"stade"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotCls:"irrigation",badgeCls:"irrigation"}};let l=`
    <div class="journal-add-bar">
      <div class="jrn-add-wrap" id="jrn-add-wrap">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="jrn-add-btn" style="width:auto">
          <i class="bi bi-plus-lg"></i> Ajouter
          <i class="bi bi-chevron-down" style="font-size:10px;margin-left:1px"></i>
        </button>
        <div class="jrn-add-menu" id="jrn-add-menu">
          ${[{type:"note",label:"Note",icon:"bi-pencil-square"},{type:"traitement",label:"Traitement phytosanitaire",icon:"bi-eyedropper"},null,{type:"culture",label:"Culture",icon:"bi-flower1"},{type:"stade",label:"Stade phénologique",icon:"bi-calendar2-check"},{type:"irrigation",label:"Irrigation",icon:"bi-droplet-half"},{type:"cycle",label:"Cycle cultural",icon:"bi-arrow-repeat"}].map(r=>r===null?'<div class="jrn-add-sep"></div>':`<button class="jrn-add-item" data-type="${r.type}">
                <i class="bi ${r.icon}"></i> ${r.label}
               </button>`).join("")}
        </div>
      </div>
    </div>
    <div class="journal-timeline">
  `;n.length===0?l+='<div class="journal-empty">Aucune entrée dans le journal.</div>':n.forEach(r=>{var h;const o=s[r.type]||s.note,p=r.type==="note",u=r.type==="traitement";l+=`
        <div class="jrn-entry" data-id="${r.id}">
          <div class="jrn-entry-aside">
            <div class="jrn-dot jrn-dot--${o.dotCls}"><i class="bi ${o.icon}"></i></div>
          </div>
          <div class="jrn-entry-body">
            <div class="jrn-entry-hd">
              <span class="jrn-entry-date">${a(r.date)}</span>
              <span class="journal-type-badge journal-type-badge--${o.badgeCls}">
                ${o.label}
              </span>
              ${r.auteur?`<span class="jrn-entry-auteur">${r.auteur}</span>`:""}
              ${p?`<button class="jrn-entry-delete" data-id="${r.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>`:""}
            </div>
            ${r.texte?`<div class="jrn-entry-texte">${r.texte}</div>`:""}
            ${u&&(r.produit||r.dose||r.cible)?`
              <div class="jrn-entry-meta">
                ${r.produit?`<span class="jrn-entry-meta-chip"><i class="bi bi-flask"></i>${r.produit}</span>`:""}
                ${r.dose?`<span class="jrn-entry-meta-chip"><i class="bi bi-droplet"></i>${r.dose}</span>`:""}
                ${r.cible?`<span class="jrn-entry-meta-chip"><i class="bi bi-bullseye"></i>${r.cible}</span>`:""}
              </div>`:""}
            ${r.type==="culture"?`<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-tag"></i>${r.action==="ajout"?"Ajout":r.action==="retrait"?"Retrait":"Modification"}</span>
                ${r.culture?`<span class="jrn-entry-meta-chip"><i class="bi bi-flower1"></i>${r.culture}</span>`:""}
                ${r.variete?`<span class="jrn-entry-meta-chip"><i class="bi bi-tag-fill"></i>${r.variete}</span>`:""}
              </div>`:""}
            ${r.type==="stade"?`<div class="jrn-entry-meta">
                ${r.stade?`<span class="jrn-entry-meta-chip"><i class="bi bi-diagram-3"></i>${r.stade}</span>`:""}
                ${r.culture?`<span class="jrn-entry-meta-chip">${r.culture}</span>`:""}
              </div>`:""}
            ${r.type==="irrigation"?`<div class="jrn-entry-meta">
                ${r.volume?`<span class="jrn-entry-meta-chip"><i class="bi bi-droplet-fill"></i>${r.volume} ${r.unite||"mm"}</span>`:""}
                ${r.methode?`<span class="jrn-entry-meta-chip"><i class="bi bi-water"></i>${r.methode}</span>`:""}
              </div>`:""}
            ${r.type==="cycle"?`<div class="jrn-entry-meta">
                <span class="jrn-entry-meta-chip"><i class="bi bi-arrow-right-circle"></i>${r.action==="fin"?"Fin de cycle":"Début de cycle"}</span>
                ${r.culture?`<span class="jrn-entry-meta-chip"><i class="bi bi-flower1"></i>${r.culture}</span>`:""}
                ${r.annee?`<span class="jrn-entry-meta-chip"><i class="bi bi-calendar3"></i>${r.annee}</span>`:""}
              </div>`:""}
            ${(h=r.imageIds)!=null&&h.length?`<div class="jrn-entry-photos-row" data-entry-id="${r.id}"></div>`:""}
          </div>
        </div>
      `}),l+="</div>",e.innerHTML=l;const m=e.querySelector("#jrn-add-btn"),d=e.querySelector("#jrn-add-menu");m==null||m.addEventListener("click",r=>{r.stopPropagation(),d.classList.toggle("open")}),document.addEventListener("click",()=>d==null?void 0:d.classList.remove("open")),e.querySelectorAll(".jrn-add-item").forEach(r=>{r.addEventListener("click",()=>{d.classList.remove("open"),hi(r.dataset.type)})}),e.querySelectorAll(".jrn-entry-delete").forEach(r=>{r.addEventListener("click",()=>{var u,h;const o=parseInt(r.dataset.id),p=xe().find(v=>v.id===o);(u=p==null?void 0:p.imageIds)!=null&&u.length&&((h=window.ImageStore)==null||h.remove(p.imageIds)),kt(xe().filter(v=>v.id!==o)),Ye()})});const f=window.ImageStore;f&&e.querySelectorAll(".jrn-entry-photos-row[data-entry-id]").forEach(async r=>{var p;const o=t.find(u=>String(u.id)===r.dataset.entryId);if((p=o==null?void 0:o.imageIds)!=null&&p.length)for(const u of o.imageIds)try{const h=await f.get(u);if(!h)continue;const v=document.createElement("img");v.className="jrn-entry-photo",v.src=h,v.alt="",v.addEventListener("click",()=>{var $;return($=window.openLightbox)==null?void 0:$.call(window,h)}),r.appendChild(v)}catch{}})}function hi(e){const t={note:"Ajouter une note",traitement:"Ajouter un traitement",culture:"Culture — événement",stade:"Stade phénologique",irrigation:"Irrigation",cycle:"Cycle cultural"},i=S.crop||"",n={note:`
      <div class="journal-form-row">
        <label class="journal-form-label">Catégorie</label>
        <select id="jrn-f-category" class="journal-form-input">
          ${ui.map(l=>`<option>${l}</option>`).join("")}
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
        <label class="journal-form-label">Culture</label>
        <input type="text" id="jrn-f-culture" class="journal-form-input" value="${i}" placeholder="Culture concernée">
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
          <input type="date" id="jrn-f-date" class="journal-form-input" value="${oe}">
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
    </div>`,s.querySelector(".add-modal-close").addEventListener("click",()=>s.remove()),s.addEventListener("click",l=>{l.target===s&&s.remove()});const c=[];a&&window.ImageStore&&window.setupImgUpload(s.querySelector("#jrn-f-img-input"),s.querySelector("#jrn-f-img-btn"),s.querySelector("#jrn-f-previews"),s.querySelector("#jrn-f-img-err"),c),s.querySelector("#jrn-f-save").addEventListener("click",async()=>{var o,p;const l=s.querySelector("#jrn-f-date").value||oe,m=((o=s.querySelector("#jrn-f-texte"))==null?void 0:o.value.trim())||"",d=S.orgId===1?"Jean-Michel Dutilleul":"Thomas Bertrand",f={id:Date.now(),type:e,date:l,texte:m,auteur:d};if(e==="note")f.category=((p=s.querySelector("#jrn-f-category"))==null?void 0:p.value)||"";else if(e==="traitement")f.produit=s.querySelector("#jrn-f-produit").value.trim(),f.dose=s.querySelector("#jrn-f-dose").value.trim(),f.cible=s.querySelector("#jrn-f-cible").value.trim();else if(e==="culture")f.action=s.querySelector("#jrn-f-action").value,f.culture=s.querySelector("#jrn-f-culture").value.trim(),f.variete=s.querySelector("#jrn-f-variete").value.trim();else if(e==="stade")f.stade=s.querySelector("#jrn-f-stade").value.trim(),f.culture=s.querySelector("#jrn-f-culture").value.trim();else if(e==="irrigation"){const u=parseFloat(s.querySelector("#jrn-f-volume").value);f.volume=isNaN(u)?0:u,f.unite=s.querySelector("#jrn-f-unite").value,f.methode=s.querySelector("#jrn-f-methode").value}else e==="cycle"&&(f.action=s.querySelector("#jrn-f-action").value,f.culture=s.querySelector("#jrn-f-culture").value.trim(),f.annee=s.querySelector("#jrn-f-annee").value.trim());if(m||f.produit||f.culture||f.stade||f.volume||f.annee||c.length){if(window.ImageStore&&c.length){f.imageIds=[];for(const u of c){const h=`img_${f.id}_${f.imageIds.length}`;await window.ImageStore.store(h,u),f.imageIds.push(h)}}kt([f,...xe()]),s.remove(),Ye()}}),document.body.appendChild(s)}function vi(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const i=ne.filter(s=>s.orgId===S.orgId).sort((s,c)=>s.name.localeCompare(c.name,"fr")),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const a=document.createElement("select");a.className="breadcrumb-nav-select",a.innerHTML=i.map(s=>`<option value="${s.id}"${s.id===T?" selected":""}>${s.name}</option>`).join(""),a.addEventListener("change",()=>{window.location.href=`parcelle-detail.html?id=${a.value}`}),n.appendChild(a),t.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var i,n,a;if(!S){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}ii(),Ct(M.name||S.name,{label:"Parcelles",href:"parcelles.html"}),vi(),U(),Yi(),on(),rn(),Ri(),Gi(),ln();const e=Et.get("tab");e&&((i=document.querySelector(`.detail-tab-btn[data-pane="tab-${e}"]`))==null||i.click()),zi(),Wi(),ue(),(n=document.getElementById("parcel-add-widget-btn"))==null||n.addEventListener("click",ci),(a=document.getElementById("btn-export-csv"))==null||a.addEventListener("click",tn),document.addEventListener("click",s=>{var o;const c=s.target.closest(".chart-cumul-add-btn");if(!c)return;s.stopPropagation();const l=c.dataset.cumulLabel,m=c.dataset.cumulVal;if(!confirm(`Ajouter "${l} : ${m}" au tableau de bord ?`))return;const d=((o=c.closest(".chart-card"))==null?void 0:o.dataset.color)||"var(--pri)",f=Jt({label:l,val:m,color:d,subjectLabel:S.name}),r=document.createElement("div");r.textContent=f==="max"?"Limite de cumuls au tableau de bord atteinte":"Cumul ajouté au tableau de bord",Object.assign(r.style,{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",background:"rgba(28,28,30,.9)",color:"#fff",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",zIndex:"9999",pointerEvents:"none"}),document.body.appendChild(r),setTimeout(()=>r.remove(),2500)});const t=document.getElementById("sidebar");t&&new MutationObserver(()=>ce()).observe(t,{attributes:!0,attributeFilter:["data-role"]})});let Ae="capteur",G=null;const Bt=`charts-order-parcel-${T}`;function bi(){try{return JSON.parse(localStorage.getItem(Bt)||"null")}catch{return null}}function gi(e){localStorage.setItem(Bt,JSON.stringify(e))}function yi(e){let t=null;e.addEventListener("dragstart",i=>{const n=i.target.closest(".chart-card[data-card-key]");n&&(t=n,n.classList.add("chart-dragging"),i.dataTransfer.effectAllowed="move")}),e.addEventListener("dragend",()=>{t==null||t.classList.remove("chart-dragging"),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over")),t=null;const i=[...e.querySelectorAll(".chart-card[data-card-key]")].map(n=>n.dataset.cardKey);gi(i)}),e.addEventListener("dragover",i=>{if(i.preventDefault(),!t)return;const n=i.target.closest(".chart-card[data-card-key]");if(!n||n===t)return;e.querySelectorAll(".chart-card").forEach(s=>s.classList.remove("chart-drag-over")),n.classList.add("chart-drag-over");const a=n.getBoundingClientRect().top+n.getBoundingClientRect().height/2;e.insertBefore(t,i.clientY<a?n:n.nextSibling)}),e.addEventListener("drop",i=>{i.preventDefault(),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over"))})}function wi(e,t){const i=F.filter(r=>t.includes(r.id)),n=i.filter(r=>_.includes(r.model)),a=i.filter(r=>Ue.includes(r.model)),s=i.filter(r=>!_.includes(r.model)&&!Ue.includes(r.model)),c=be(),l=new Set;i.forEach(r=>(q[r.model]||[]).forEach(o=>l.add(o.id)));const m=[];if(s.forEach(r=>{const o=q[r.model];if(!o)return;const p=`${r.model} · ${r.serial}`,u=Math.floor(5+Math.random()*55);o.forEach(h=>{if(h.isWindComposite){m.push({key:`wind-${r.id}`,type:"wind",sensor:r,source:p,emissionMins:u});return}m.push({key:`s${r.id}-${h.id}`,type:"metric",metric:h,source:p,emissionMins:u,sensorId:r.id})})}),n.length>0){const r=`Tensiomètres · ${n.length} capteur${n.length>1?"s":""}`,o=Math.floor(5+Math.random()*55);["pothydr","tsol"].forEach(p=>{m.push({key:`tensio-${p}`,type:"tensio",metricId:p,source:r,emissionMins:o,tensioSensors:n})})}a.forEach(r=>{const o=Qt[r.model]||[],p=`${ee[r.model]||r.model} · ${r.serial}`,u=Math.floor(5+Math.random()*55);o.length>0&&(m.push({key:`capa-vwc-${r.id}`,type:"capa-vwc",sensor:r,horizons:o,source:p,emissionMins:u}),m.push({key:`capa-tsol-${r.id}`,type:"capa-tsol",sensor:r,horizons:o,source:p,emissionMins:u}))}),Ge.filter(r=>!l.has(r.id)).forEach(r=>m.push({key:`always-${r.id}`,type:"metric",metric:r,source:"parcelle",emissionMins:null,unavailable:c<60})),(!!S.irrigation&&S.irrigation!=="Non irrigué"||O.some(r=>r.plotId===T))&&m.push({key:"always-irrigation",type:"metric",metric:Zt,source:"parcelle",emissionMins:null});const f=bi();if(f!=null&&f.length){const r=new Map(f.map((o,p)=>[o,p]));m.sort((o,p)=>(r.has(o.key)?r.get(o.key):1/0)-(r.has(p.key)?r.get(p.key):1/0))}m.forEach(r=>{r.type==="metric"?_e(e,r.metric,r.source,r.emissionMins,r.key,r.unavailable,r.sensorId):r.type==="wind"?ei(e,r.source,r.emissionMins,r.key):r.type==="tensio"?Ci(e,r.metricId,r.tensioSensors,r.source,r.emissionMins,r.key):r.type==="capa-vwc"?Si(e,r.horizons,r.source,r.emissionMins,r.key):r.type==="capa-tsol"&&Mi(e,r.horizons,r.source,r.emissionMins,r.key)}),yi(e)}function Le(e){const t=F.filter(a=>e.includes(a.id)),i=new Set,n=[];return t.forEach(a=>{(q[a.model]||[]).forEach(s=>{i.has(s.id)||(i.add(s.id),n.push(s))})}),Ge.forEach(a=>{i.has(a.id)||(i.add(a.id),n.push(a))}),n}function U(){var t;const e=document.getElementById("charts-container");if(e.innerHTML="",G){e.className="compare-rows";const i=ne.find(u=>u.id===G),n=document.createElement("div");n.className="compare-header-row",n.innerHTML=`
      <div class="compare-col-header"><span>${M.name||S.name}</span></div>
      <div class="compare-col-header">
        <span>${(i==null?void 0:i.name)||"Parcelle"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(n),(t=n.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{G=null,He(),U()});const a=Le(M.linkedSensorIds),s=Ce(G),c=(s==null?void 0:s.linkedSensorIds)??F.filter(u=>u.parcelIds.includes(G)).map(u=>u.id),l=Le(c),m=a.map(u=>u.id),d=l.map(u=>u.id),f=m.filter(u=>d.includes(u)),r=m.filter(u=>!d.includes(u)),o=d.filter(u=>!m.includes(u));[...f,...r,...o].forEach(u=>{const h=a.find(y=>y.id===u),v=l.find(y=>y.id===u),$=document.createElement("div");$.className="compare-row";const g=document.createElement("div");h?_e(g,h):g.innerHTML='<div class="compare-chart-empty">—</div>';const w=document.createElement("div");v?_e(w,v):w.innerHTML='<div class="compare-chart-empty">—</div>',$.appendChild(g),$.appendChild(w),e.appendChild($)})}else e.className="charts-stack",wi(e,M.linkedSensorIds);Ti()}const $e=["#5b8dd9","#e07050","#4ecdc4","#f5c842","#c090e0","#78d8a0"];function $i(e){const t=e.depth||30;return[{depth:t,label:`${t} cm`,sensor:e}]}function xi(e){if(Ae==="capteur")return e.map((i,n)=>({label:i.serial,color:$e[n%$e.length],depth:i.depth||30,sensor:i}));const t=new Map;return e.forEach(i=>$i(i).forEach(n=>{t.has(n.depth)||t.set(n.depth,n)})),[...t.values()].sort((i,n)=>i.depth-n.depth).map((i,n)=>({label:i.label,color:$e[n%$e.length],depth:i.depth,sensor:i.sensor}))}function Ci(e,t,i,n=null,a=null,s=null){var u;const l={pothydr:{name:"Potentiel hydrique",unit:"kPa"},tsol:{name:"Température du sol",unit:"°C"}}[t],m=xi(i),d=document.createElement("div");d.className="chart-card tensio-multi-card",d.dataset.tensioMetric=t,d.dataset.tensioCurves=JSON.stringify(m.map(h=>({depth:h.depth,color:h.color}))),s&&(d.dataset.cardKey=s,d.draggable=!0);const f=m.map(h=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${h.color};vertical-align:middle;border-radius:1px"></span>
      ${h.label}
    </span>`).join(""),r=n?`<span class="chart-card-source">${n}</span>`:"",o=a!=null?`<span class="chart-card-emission">il y a ${a} min</span>`:"",p=`
    <div class="chart-tensio-toggle">
      <button class="btn-secondary btn-sm tensio-toggle-btn${Ae==="capteur"?" active":""}" data-mode="capteur">Par capteur</button>
      <button class="btn-secondary btn-sm tensio-toggle-btn${Ae==="horizon"?" active":""}" data-mode="horizon">Par horizon</button>
    </div>`;d.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((u=m[0])==null?void 0:u.color)||$e[0]}">${l.name}</span>
      <span class="chart-card-unit">${l.unit}</span>
      ${r}${o}
    </div>
    ${p}
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${f}</div>
    <svg class="chart-svg tensio-svg" data-metric="${t}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,d.querySelectorAll(".tensio-toggle-btn").forEach(h=>{h.addEventListener("click",()=>{Ae=h.dataset.mode,U()})}),e.appendChild(d)}function jt(e,t,i,n,a,s,c,l){var f;const m=document.createElement("div");m.className=`chart-card ${c}-multi-card`,m.dataset[c+"Curves"]=JSON.stringify(t.map(r=>({depth:r.depth,color:r[i]}))),l&&(m.dataset.cardKey=l,m.draggable=!0);const d=t.map(r=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${r[i]};vertical-align:middle;border-radius:1px"></span>
      ${r.label}
    </span>`).join("");return m.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((f=t[0])==null?void 0:f[i])||"#46DA82"}">${n}</span>
      <span class="chart-card-unit">${a}</span>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${d}</div>
    <svg class="chart-svg ${s}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,e.appendChild(m),m}function Si(e,t,i=null,n=null,a=null){jt(e,t,"vwcColor","Teneur en eau du sol","%vol","capa-svg","capa",a)}function Mi(e,t,i=null,n=null,a=null){jt(e,t,"tsolColor","Température du sol par horizon","°C","capa-tsol-svg","capaT",a)}function _e(e,t,i=null,n=null,a=null,s=!1,c=null){var u;const l=t.base(),m=document.createElement("div");m.className="chart-card",m.dataset.base=l,m.dataset.color=t.color,m.dataset.cumul=t.isCumul?"1":"",m.dataset.chartType=t.chartType||"line",m.dataset.metricId=t.id,m.dataset.metricName=t.name,m.dataset.metricUnit=t.unit,t.isIrrigation&&(m.dataset.isIrrigation="1"),a&&(m.dataset.cardKey=a,m.draggable=!0);const d=t.cumul?`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label} : <strong>${st(t)} ${t.cumul.unit}</strong></span><button class="chart-cumul-add-btn" data-cumul-label="${t.cumul.label}" data-cumul-val="${st(t)} ${t.cumul.unit}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button></div>`:"",f=i?`<span class="chart-card-source">${i}</span>`:"",r=n!=null?`<span class="chart-card-emission">il y a ${n} min</span>`:"";let o="";if(c){const h=((u=document.getElementById("time-step"))==null?void 0:u.value)||"1h";o=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${c}&metricId=${t.id}&parcelId=${T}&period=${J}&step=${h}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`}const p=s?'<div class="chart-unavailable">Données indisponibles pour ce pas de temps</div>':'<svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>';m.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${f}${r}${o}
    </div>
    ${p}
    ${d}
  `,e.appendChild(m)}let we=null;function Ei(){return we||(we=document.createElement("div"),we.className="chart-tooltip",document.body.appendChild(we)),we}function ki(e,t){return t==="temp"||t==="temperature"?["#6eb4d4","#e07050"]:t==="tseche"||t==="thumide"?["#6eb4d4","#e07050"]:t==="temp_rosee"?["#a0d0f0","#4090c0"]:[Bi(e,.55),e]}function Bi(e,t){const i=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),s=Math.round(i+(255-i)*t),c=Math.round(n+(255-n)*t),l=Math.round(a+(255-a)*t);return`#${s.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`}function Pe(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let i=0;i<e.length-1;i++){const n=e[Math.max(i-1,0)],a=e[i],s=e[i+1],c=e[Math.min(i+2,e.length-1)],l=a.x+(s.x-n.x)/6,m=a.y+(s.y-n.y)/6,d=s.x-(c.x-a.x)/6,f=s.y-(c.y-a.y)/6;t+=` C${l.toFixed(1)},${m.toFixed(1)} ${d.toFixed(1)},${f.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return t}function ge(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function it(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function ji(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function nt(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function Ai(e){const t=Math.floor((Date.now()-e*6e4)/864e5),i=Math.sin(t*12.9898+78.233)*43758.5453;return i-Math.floor(i)}function de(e,t,i,n=.15){const a=it(i),s=nt(a),c=ji(a),l=Ai(i),m=()=>1+(Math.random()-.5)*2*n;switch(e){case"temp":{const d=.6+l*.8;return(t-6+s*12*d)*m()}case"tseche":case"thumide":{const d=.6+l*.8;return(t-4+s*8*d)*m()}case"temp_rosee":{const d=.6+l*.8,f=t-6+s*12*d;return Math.min(f-1,t-8+s*6*d)*m()}case"tsol":{const d=it(i+120),f=.7+l*.6;return(t-3+nt(d)*6*f)*m()}case"humidite":{const d=1.4-l*.8;return Math.min(100,Math.max(20,(t+(1-s)*25*d-s*15)*m()))}case"rayonnement":{const d=.4+l*.9;return Math.max(0,c*t*1.3*d*m())}case"etp":{const d=.4+l*.9;return Math.max(0,c*t*1.5*d*m())}case"humec":{const d=1.4-l*.8;return Math.max(0,t*Math.max(0,.8-c*1.2)*d*m())}case"pluie":{const d=.06+(1-l)*.22;return Math.random()<d?t*Math.random()*2.5*(1.3-l):0}case"vent":case"rafales":{const d=.5+l;return Math.max(0,t*(.6+c*.8)*d*m())}default:return Math.max(0,t*m())}}function Ti(){const e=oi(),t=be(),i=ri();F.filter(a=>M.linkedSensorIds.includes(a.id)).filter(a=>_.includes(a.model)),document.querySelectorAll(".chart-card").forEach(a=>{if(a.classList.contains("tensio-multi-card")){const p=a.querySelector(".tensio-svg"),u=JSON.parse(a.dataset.tensioCurves||"[]");p&&u.length>0&&Ii(p,u,e,t);return}if(a.classList.contains("capa-multi-card")){const p=a.querySelector(".capa-svg"),u=JSON.parse(a.dataset.capaCurves||"[]");p&&u.length>0&&at(p,u,e,t,"vwc");return}if(a.classList.contains("capaT-multi-card")){const p=a.querySelector(".capa-tsol-svg"),u=JSON.parse(a.dataset.capaTCurves||"[]");p&&u.length>0&&at(p,u,e,t,"tsol");return}const s=a.querySelector(".chart-svg");if(!s)return;const c=parseFloat(a.dataset.base),l=a.dataset.color,m=a.dataset.cumul==="1",d=a.dataset.chartType||"line",f=a.dataset.metricId||"",r=a.dataset.metricName||"",o=a.dataset.metricUnit||"";if(a.dataset.isIrrigation)qi(s,l,e,t,i);else{const p=i>0&&ni.has(f);Li(s,c,l,e,t,m,d,f,r,o,i,p)}}),At(),Tt()}function Ii(e,t,i,n){const c={t:14,r:10,b:28,l:46},l=600-c.l-c.r,m=180-c.t-c.b,d=t.map(w=>{const y=20+w.depth*.8+Math.random()*20;return Array.from({length:i},(E,b)=>{const C=(i-1-b)*n;return Math.max(0,de("pothydr",y,C))})}),f=d.flat(),r=Math.min(...f),o=Math.max(...f),p=o-r||1,u=w=>c.l+w/Math.max(i-1,1)*l,h=w=>c.t+m-(w-r)/p*m,v=`tc-${Math.random().toString(36).slice(2)}`;let $=`<defs><clipPath id="${v}"><rect x="${c.l}" y="${c.t}" width="${l}" height="${m}"/></clipPath></defs>`;for(let w=0;w<=4;w++){const y=c.t+w/4*m,E=o-w/4*p;$+=`<line x1="${c.l}" y1="${y.toFixed(1)}" x2="${600-c.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,$+=`<text x="${c.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${E.toFixed(0)}</text>`}d.forEach((w,y)=>{const E=w.map((C,k)=>({x:u(k),y:h(C)})),b=Pe(E);$+=`<path d="${b}" fill="none" stroke="${t[y].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${v})"/>`}),$+=`<line x1="${c.l}" y1="${c.t+m}" x2="${600-c.r}" y2="${c.t+m}" stroke="var(--bdr2)" stroke-width="1"/>`;const g=Math.max(1,Math.floor(i/6));for(let w=0;w<i;w+=g){const y=(i-1-w)*n;$+=`<text x="${u(w).toFixed(1)}" y="${(c.t+m+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ge(y)}</text>`}e.innerHTML=$}function at(e,t,i,n,a="vwc"){const l={t:14,r:10,b:28,l:46},m=600-l.l-l.r,d=180-l.t-l.b,f=t.map((y,E)=>{if(a==="tsol"){const C=16-y.depth*.06+E*.5+Math.random()*3;return Array.from({length:i},(k,B)=>{const A=(i-1-B)*n;return de("tsol",C,A)})}const b=35-y.depth*.15+E*2+Math.random()*8;return Array.from({length:i},(C,k)=>{const B=(i-1-k)*n;return Math.max(10,Math.min(55,de("teneur-eau",b,B)))})}),r=f.flat(),o=Math.floor(Math.min(...r)-2),p=Math.ceil(Math.max(...r)+2),u=p-o||1,h=y=>l.l+y/Math.max(i-1,1)*m,v=y=>l.t+d-(y-o)/u*d,$=`cc-${Math.random().toString(36).slice(2)}`;let g=`<defs><clipPath id="${$}"><rect x="${l.l}" y="${l.t}" width="${m}" height="${d}"/></clipPath></defs>`;for(let y=0;y<=4;y++){const E=l.t+y/4*d,b=p-y/4*u;g+=`<line x1="${l.l}" y1="${E.toFixed(1)}" x2="${600-l.r}" y2="${E.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,g+=`<text x="${l.l-5}" y="${(E+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${b.toFixed(0)}</text>`}f.forEach((y,E)=>{const b=y.map((k,B)=>({x:h(B),y:v(k)})),C=Pe(b);g+=`<path d="${C}" fill="none" stroke="${t[E].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${$})"/>`}),g+=`<line x1="${l.l}" y1="${l.t+d}" x2="${600-l.r}" y2="${l.t+d}" stroke="var(--bdr2)" stroke-width="1"/>`;const w=Math.max(1,Math.floor(i/6));for(let y=0;y<i;y+=w){const E=(i-1-y)*n;g+=`<text x="${h(y).toFixed(1)}" y="${(l.t+d+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ge(E)}</text>`}e.innerHTML=g}function Li(e,t,i,n,a,s,c="line",l="",m="",d="",f=0,r=!1){const u={t:14,r:10,b:28,l:46},h=600-u.l-u.r,v=180-u.t-u.b,$=n+f,g=r?f:0,w=n+g,y=Math.max(1,Math.round(a/15)),E=Array.from({length:w},(H,j)=>{const I=(n-1-j)*a;if(s){let N=0;for(let V=0;V<y;V++)N+=de(l,t/y,I+V*(a/y));return N}else if(y>1){let N=0;for(let V=0;V<y;V++)N+=de(l,t,I+V*(a/y));return N/y}else return de(l,t,I)}),b=c==="bar"?0:Math.min(...E),C=Math.max(...E),k=C-b||1,B=H=>u.l+H/Math.max($-1,1)*h,A=H=>u.t+v-(H-b)/k*v,P=`grad_${Math.random().toString(36).slice(2)}`,[W,Z]=ki(i,l);let D=`<defs>
    <linearGradient id="${P}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${W}"/>
      <stop offset="100%" stop-color="${Z}"/>
    </linearGradient>
    <clipPath id="clip_${P}">
      <rect x="${u.l}" y="${u.t}" width="${h}" height="${v}"/>
    </clipPath>
  </defs>`;if(f>0){const H=B(n-.5),j=`stripe_${P}`;D+=`<defs><pattern id="${j}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${H.toFixed(1)}" y="${u.t}" width="${(600-u.r-H).toFixed(1)}" height="${v}" fill="url(#${j})"/>
      <line x1="${H.toFixed(1)}" y1="${u.t}" x2="${H.toFixed(1)}" y2="${u.t+v}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-u.r-4).toFixed(1)}" y="${(u.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}for(let H=0;H<=4;H++){const j=u.t+H/4*v,I=C-H/4*k,N=Math.abs(I)>=100?I.toFixed(0):Math.abs(I)>=10?I.toFixed(1):I.toFixed(2);D+=`<line x1="${u.l}" y1="${j.toFixed(1)}" x2="${600-u.r}" y2="${j.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,D+=`<text x="${u.l-5}" y="${(j+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${N}</text>`}D+=`<line x1="${u.l}" y1="${u.t+v}" x2="${600-u.r}" y2="${u.t+v}" stroke="var(--bdr2)" stroke-width="1"/>`;const ye=Math.max(1,Math.floor($/6));for(let H=0;H<$;H+=ye){const j=B(H).toFixed(1),I=(n-H)*a;D+=`<line x1="${j}" y1="${u.t}" x2="${j}" y2="${u.t+v}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,D+=`<text x="${j}" y="${u.t+v+14}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${ge(I)}</text>`}if(c==="bar"){const H=Math.max(2,h/$*.65);E.forEach((j,I)=>{if(j<=0)return;const N=I>=n,V=B(I),Ee=A(j),Fe=u.t+v-Ee;D+=`<rect x="${(V-H/2).toFixed(1)}" y="${Ee.toFixed(1)}" width="${H.toFixed(1)}" height="${Fe.toFixed(1)}" fill="${N?"#C7C7CC":`url(#${P})`}" opacity="${N?"0.5":"0.9"}" rx="1"/>`})}else{const H=E.slice(0,n).map((N,V)=>({x:B(V),y:A(N)})),j=Pe(H),I=j+` L${B(n-1).toFixed(1)},${u.t+v} L${u.l.toFixed(1)},${u.t+v} Z`;if(D+=`<path d="${I}" fill="${Z}" opacity="0.07" clip-path="url(#clip_${P})"/>`,D+=`<path d="${j}" fill="none" stroke="url(#${P})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${P})"/>`,g>0){const N=E.slice(n-1).map((Ee,Fe)=>({x:B(n-1+Fe),y:A(Ee)})),V=Pe(N);D+=`<path d="${V}" fill="none" stroke="url(#${P})" stroke-width="2" stroke-dasharray="5,4" stroke-linejoin="round" stroke-linecap="round" opacity="0.5" clip-path="url(#clip_${P})"/>`}}D+=`<rect class="chart-hover-rect" x="${u.l}" y="${u.t}" width="${h}" height="${v}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=D,Pi(e,E,B,A,b,C,$,n,a,m,d,i,u,600)}function Pi(e,t,i,n,a,s,c,l,m,d,f,r,o,p,u){const h=Ei(),v=e.querySelector(".chart-hover-rect");if(!v)return;const g=document.createElementNS("http://www.w3.org/2000/svg","circle");g.setAttribute("r","4"),g.setAttribute("fill",r),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width","1.5"),g.style.display="none",g.style.pointerEvents="none",e.appendChild(g),v.addEventListener("mousemove",w=>{const y=e.getBoundingClientRect(),E=p/y.width,b=(w.clientX-y.left)*E,C=p-o.l-o.r,k=Math.max(0,Math.min(1,(b-o.l)/C)),B=Math.round(k*(c-1));if(B<0||B>=t.length)return;const A=t[B],P=i(B),W=n(A);g.setAttribute("cx",P),g.setAttribute("cy",W),g.style.display="";const Z=(l-B)*m,D=ge(Z),ye=Math.abs(A)>=100?A.toFixed(1):A.toFixed(2);h.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${d}</div>
      <div class="chart-tooltip-val" style="color:${r}">${ye} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${f}</span></div>
      <div class="chart-tooltip-ts">${D}</div>
    `,h.style.display="block";const H=w.clientX+12,j=w.clientY-10;h.style.left=`${Math.min(H,window.innerWidth-160)}px`,h.style.top=`${j}px`}),v.addEventListener("mouseleave",()=>{h.style.display="none",g.style.display="none"})}function Hi(e,t,i,n=0){const a=Date.now(),s=i*6e4,c=a-t*s,l=t+n,m=new Array(l).fill(0);return O.filter(d=>d.plotId===e).forEach(d=>{const f=new Date(d.iso).getTime();if(f<c)return;const r=Math.min(l-1,Math.floor((f-c)/s));r>=0&&(m[r]+=d.mm||0)}),m}function Fi(e){return e.id%3===2}function Di(e,t){const i=(e.id*13+t*23)%17/17;return i>.4?+(3+i*12).toFixed(1):0}function qi(e,t,i,n,a=0){const l={t:12,r:8,b:28,l:44},m=600-l.l-l.r,d=180-l.t-l.b,f=n===1440&&Fi(S),r=i+a,o=Hi(T,i,n,a),p=n*6e4,u=Date.now()-i*p,h=[];if(f){const b=new Date;b.setHours(0,0,0,0);for(let C=1;C<=7;C++){const k=Di(S,C);if(k<=0)continue;const B=b.getTime()+C*864e5+12*36e5,A=Math.floor((B-u)/p);A>=i&&A<r&&h.push({idx:A,v:k})}}const v=Math.max(...o,...h.map(b=>b.v),1),$=b=>l.l+b/Math.max(r-1,1)*m,g=b=>l.t+d-b/v*d;let w="";for(let b=0;b<=4;b++){const C=l.t+b/4*d,k=(v-b/4*v).toFixed(1);w+=`<line x1="${l.l}" y1="${C}" x2="${600-l.r}" y2="${C}" stroke="var(--bdr2)" stroke-width="1"/>`,w+=`<text x="${l.l-4}" y="${C+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${k}</text>`}w+=`<line x1="${l.l}" y1="${l.t+d}" x2="${600-l.r}" y2="${l.t+d}" stroke="var(--bdr2)" stroke-width="1"/>`;const y=Math.max(1,Math.floor(r/6));for(let b=0;b<r;b+=y){const C=$(b).toFixed(1),k=(i-b)*n,B=n>=1440||k<0?(()=>{const A=new Date(Date.now()-k*6e4);return`${String(A.getDate()).padStart(2,"0")}/${String(A.getMonth()+1).padStart(2,"0")}`})():ge(k);w+=`<text x="${C}" y="${(l.t+d+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${B}</text>`}if(a>0){const b=$(i-.5),C=`irrig_stripe_${Math.random().toString(36).slice(2,8)}`;w+=`<defs><pattern id="${C}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${b.toFixed(1)}" y="${l.t}" width="${(600-l.r-b).toFixed(1)}" height="${d}" fill="url(#${C})"/>
      <line x1="${b.toFixed(1)}" y1="${l.t}" x2="${b.toFixed(1)}" y2="${l.t+d}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-l.r-4).toFixed(1)}" y="${(l.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}const E=Math.max(4,m/r*.65);o.forEach((b,C)=>{if(b<=0)return;const k=C>=i,B=$(C),A=g(b),P=l.t+d-A;w+=`<rect x="${(B-E/2).toFixed(1)}" y="${A.toFixed(1)}" width="${E.toFixed(1)}" height="${P.toFixed(1)}" fill="${k?"#C7C7CC":t}" opacity="${k?"0.5":"0.85"}" rx="1"/>`}),h.forEach(({idx:b,v:C})=>{const k=$(b),B=g(C),A=l.t+d-B;w+=`<rect x="${(k-E/2).toFixed(1)}" y="${B.toFixed(1)}" width="${E.toFixed(1)}" height="${A.toFixed(1)}" fill="none" stroke="${t}" stroke-width="1.5" stroke-dasharray="3,2" rx="1"/>`}),h.length&&(w+=`<text x="${(l.l+2).toFixed(1)}" y="${(l.t+12).toFixed(1)}" font-size="10" font-family="var(--font)" fill="${t}" font-style="italic">┄ Recommandé (Irrigation Advizor)</text>`),e.innerHTML=w}function st(e){const i={pluie:()=>x(20,120),etp:()=>R(15,80),rayonnement:()=>x(500,3e3)}[e.id];return i?i():x(10,100)}function Ri(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),i=document.getElementById("time-step"),n=new Date,a=new Date(n-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",s=>{const c=s.target.closest(".period-preset-btn");if(c)if(e.querySelectorAll(".period-preset-btn").forEach(l=>l.classList.remove("active")),c.classList.add("active"),J=c.dataset.period,J==="custom")t.style.display="flex";else{t.style.display="none";const l=document.getElementById("time-step");l&&(l.value=si(J)),U()}}),document.getElementById("date-from").addEventListener("change",ot),document.getElementById("date-to").addEventListener("change",ot),i.addEventListener("change",U)}function ot(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(me=new Date(e),pe=new Date(t+"T23:59:59"),me<pe&&U())}const rt={"Blé tendre":[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé. Profondeur optimale 3–4 cm."},{name:"Levée",date:"2025-11-05",bbch:"BBCH 09",desc:"Apparition de la première feuille au-dessus du sol."},{name:"Tallage",date:"2026-02-15",bbch:"BBCH 21",desc:"1er talle apparu. Période sensible au froid."},{name:"Épi 1 cm",date:"2026-04-20",bbch:"BBCH 30",desc:"Montaison. Début de la différenciation de l'épi."},{name:"Épiaison",date:"2026-05-20",bbch:"BBCH 55",desc:"La moitié de l'épiaison est atteinte. Risque maximal de fusariose."},{name:"Floraison",date:"2026-05-28",bbch:"BBCH 65",desc:"Pleine floraison. Fenêtre critique pour la qualité du grain."},{name:"Maturité",date:"2026-07-10",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %. Récolte possible."}],Maïs:[{name:"Semis",date:"2026-04-25",bbch:"BBCH 00",desc:"Sol > 10 °C à 5 cm. Fenêtre de semis idéale."},{name:"Levée",date:"2026-05-10",bbch:"BBCH 09",desc:"Coleoptile visible. 10 jours après semis en conditions normales."},{name:"4 feuilles",date:"2026-05-28",bbch:"BBCH 14",desc:"V4. Intervention herbicide possible."},{name:"6 feuilles",date:"2026-06-12",bbch:"BBCH 16",desc:"V6. Stade critique pour la nutrition azotée."},{name:"Floraison ♂",date:"2026-07-15",bbch:"BBCH 65",desc:"VT. Émission du pollen. Forte demande en eau (≥ 8 mm/j)."},{name:"Soie",date:"2026-07-18",bbch:"BBCH 67",desc:"R1. Fécondation. Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-20",bbch:"BBCH 89",desc:"Point noir visible. Récolte selon teneur en eau."}],Colza:[{name:"Semis",date:"2025-08-25",bbch:"BBCH 00",desc:"Sol humide, T° < 25 °C. Objectif : 30 plants/m²."},{name:"Levée",date:"2025-09-05",bbch:"BBCH 09",desc:"Cotylédon visible. Période à risque limaces."},{name:"Rosette",date:"2025-11-15",bbch:"BBCH 18",desc:"8 feuilles étalées. Bon état pour entrer en hiver."},{name:"Reprise",date:"2026-02-20",bbch:"BBCH 30",desc:"Allongement de l'hypocotyle. Fin de la période de vernalisation."},{name:"Bouton floral",date:"2026-03-25",bbch:"BBCH 51",desc:"Inflorescence visible. Risque sclérotinia à surveiller."},{name:"Floraison",date:"2026-04-10",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile. Éviter les traitements."},{name:"Siliques",date:"2026-05-05",bbch:"BBCH 75",desc:"Siliques de 2 cm. Fin de floraison, début de remplissage."},{name:"Maturité",date:"2026-07-05",bbch:"BBCH 89",desc:"Siliques brunes, graines noires. Seuil récolte < 9 % eau."}],Tournesol:[{name:"Semis",date:"2026-04-20",bbch:"BBCH 00",desc:"Sol > 8 °C à 5 cm. Profondeur 4–5 cm."},{name:"Levée",date:"2026-05-05",bbch:"BBCH 09",desc:"Cotylédon hors sol. Période sensible aux oiseaux."},{name:"4 feuilles",date:"2026-05-25",bbch:"BBCH 14",desc:"V4. Interventions herbicides possibles."},{name:"Bouton floral",date:"2026-06-25",bbch:"BBCH 51",desc:"E2. Bouton visible. Fin du développement végétatif."},{name:"Floraison",date:"2026-07-10",bbch:"BBCH 65",desc:"R5.1. Fleurs ligulées ouvertes. Stress hydrique critique."},{name:"Maturité",date:"2026-09-05",bbch:"BBCH 89",desc:"Capitule brun, dos jaune. Teneur en eau 9–12 %."}],Vigne:[{name:"Débourrement",date:"2026-04-05",bbch:"BBCH 05",desc:"Bourgeon en coton. Risque gel augmente fortement."},{name:"Sortie feuilles",date:"2026-04-20",bbch:"BBCH 11",desc:"1ère feuille étalée. Début des traitements prophylactiques."},{name:"Floraison",date:"2026-06-10",bbch:"BBCH 65",desc:"Anthèse. Niveau de risque mildiou et oïdium maximal."},{name:"Nouaison",date:"2026-06-25",bbch:"BBCH 71",desc:"Baies visibles. Consolidation du rendement."},{name:"Véraison",date:"2026-08-05",bbch:"BBCH 81",desc:"Changement de couleur. Arrêt des traitements phytos recommandé."},{name:"Récolte",date:"2026-09-15",bbch:"BBCH 89",desc:"Maturité technologique. Date selon profil variétal."}],Sorgho:[{name:"Semis",date:"2026-05-10",bbch:"BBCH 00",desc:"Sol > 12 °C à 5 cm."},{name:"Levée",date:"2026-05-25",bbch:"BBCH 09",desc:"Coleoptile visible."},{name:"Montaison",date:"2026-07-01",bbch:"BBCH 30",desc:"Début de la montaison. Forte demande azotée."},{name:"Floraison",date:"2026-07-25",bbch:"BBCH 65",desc:"Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-15",bbch:"BBCH 89",desc:"Teneur en eau < 25 %. Récolte adaptée."}],"Orge de printemps":[{name:"Semis",date:"2026-03-15",bbch:"BBCH 00",desc:"Semis dès que sol ressuyé, T° > 5 °C."},{name:"Levée",date:"2026-04-01",bbch:"BBCH 09",desc:"Coleoptile visible. Période sensible aux limaces."},{name:"Tallage",date:"2026-04-20",bbch:"BBCH 21",desc:"Premier talle. Couverture du sol progressive."},{name:"Montaison",date:"2026-05-10",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-06-05",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-07-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-08-05",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],Orge:[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé, profondeur 3–4 cm."},{name:"Levée",date:"2025-11-04",bbch:"BBCH 09",desc:"Coleoptile visible. Surveillance limaces."},{name:"Tallage",date:"2026-02-08",bbch:"BBCH 21",desc:"Reprise de végétation. Premier talle."},{name:"Montaison",date:"2026-04-02",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-05-07",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-05-18",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-06-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-07-01",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],"Pomme de terre":[{name:"Plantation",date:"2026-04-02",bbch:"BBCH 00",desc:"Tubercules-semences à 10 cm, espacement 30–35 cm."},{name:"Levée",date:"2026-04-26",bbch:"BBCH 09",desc:"Tiges émergées. Risque gel résiduel."},{name:"Croissance",date:"2026-05-15",bbch:"BBCH 31",desc:"Fermeture du rang. Première application fongicide."},{name:"Tuberisation",date:"2026-06-05",bbch:"BBCH 71",desc:"Initiation des tubercules. Demande en eau maximale."},{name:"Grossissement",date:"2026-07-01",bbch:"BBCH 81",desc:"Grossissement actif. Irrigation critique."},{name:"Maturité",date:"2026-08-15",bbch:"BBCH 89",desc:"Fanes sèches, peau des tubercules fixée. Récolte."}],Cerisier:[{name:"Dormance",date:"2025-12-15",bbch:"BBCH 00",desc:"Repos végétatif. Besoin en froid accumulé."},{name:"Bourgeons",date:"2026-02-20",bbch:"BBCH 03",desc:"Gonflement des bourgeons. Chilling satisfait."},{name:"Débourrement",date:"2026-03-18",bbch:"BBCH 07",desc:"Pointe verte visible. Risque gel fort (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-08",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation croisée nécessaire."},{name:"Nouaison",date:"2026-04-28",bbch:"BBCH 71",desc:"Petits fruits noués. Chute physiologique normale."},{name:"Fructification",date:"2026-05-12",bbch:"BBCH 81",desc:"Grossissement actif des cerises. Irrigation si déficit."},{name:"Récolte",date:"2026-06-18",bbch:"BBCH 89",desc:"Cerises à maturité. Récolte échelonnée selon variété."}],Poire:[{name:"Débourrement",date:"2026-03-28",bbch:"BBCH 07",desc:"Pointe verte. Vigilance gel (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-15",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile."},{name:"Nouaison",date:"2026-05-05",bbch:"BBCH 71",desc:"Petits fruits noués. Éclaircissage si nécessaire."},{name:"Croissance",date:"2026-06-15",bbch:"BBCH 78",desc:"Grossissement actif. Besoins en eau importants."},{name:"Véraison",date:"2026-08-10",bbch:"BBCH 84",desc:"Changement de couleur. Arrêt des traitements phytos."},{name:"Récolte",date:"2026-09-10",bbch:"BBCH 89",desc:"Récolte selon indice de maturité (pénétromètre, amidon)."}],Pomme:[{name:"Débourrement",date:"2026-04-01",bbch:"BBCH 07",desc:"Pointe verte. Risque gel résiduel."},{name:"Floraison",date:"2026-04-25",bbch:"BBCH 65",desc:"Pleine floraison. Risque tavelure maximal."},{name:"Nouaison",date:"2026-05-15",bbch:"BBCH 71",desc:"Petits fruits visibles. Éclaircissage possible."},{name:"Croissance",date:"2026-06-10",bbch:"BBCH 78",desc:"Grossissement actif. Surveillance carpocapse."},{name:"Véraison",date:"2026-08-15",bbch:"BBCH 84",desc:"Coloration des fruits. Maturation avancée."},{name:"Récolte",date:"2026-09-20",bbch:"BBCH 89",desc:"Récolte selon variété et indice de maturité."}],Salade:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Laitue:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Betterave:[{name:"Semis",date:"2026-03-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé (T° > 5 °C) et ressuyé."},{name:"Levée",date:"2026-04-08",bbch:"BBCH 09",desc:"Cotylédons hors sol. Période à risque limaces."},{name:"4 feuilles",date:"2026-05-01",bbch:"BBCH 14",desc:"Couverture partielle du sol. Interventions herbicides."},{name:"Fermeture rang",date:"2026-06-15",bbch:"BBCH 37",desc:"Canopée fermée. Forte demande en eau et azote."},{name:"Grossissement",date:"2026-08-01",bbch:"BBCH 40",desc:"Grossissement actif de la racine. Accumulation de sucres."},{name:"Récolte",date:"2026-10-20",bbch:"BBCH 89",desc:"Teneur en sucre optimale. Arrachage selon planning usine."}]},Oi=[{name:"Semis",date:"2026-04-01",bbch:"BBCH 00",desc:"Semis."},{name:"Levée",date:"2026-04-20",bbch:"BBCH 09",desc:"Levée des plantules."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Floraison."},{name:"Récolte",date:"2026-08-20",bbch:"BBCH 89",desc:"Maturité physiologique."}];function Ni(e){if(!e)return[];const t=e.toLowerCase();for(const i of Object.keys(rt))if(t.startsWith(i.toLowerCase()))return rt[i];return Oi}function zi(){const e=document.getElementById("toggle-phenologie");e&&e.addEventListener("change",()=>{At()})}function At(){document.querySelectorAll(".pheno-overlay").forEach(h=>h.remove());const e=document.getElementById("toggle-phenologie");if(!(e!=null&&e.checked))return;const t=M.crop||S.crop,i=Ni(t);if(!i.length)return;const n=Date.now(),a=fe()*6e4,s=n-a,c=600,l=46,m=10,d=14,f=28,r=c-l-m,o=d+4,p=180-f,u=i.filter(h=>{const v=new Date(h.date).getTime();return v>=s&&v<=n});u.length&&document.querySelectorAll(".chart-card").forEach(h=>{const v=h.querySelector(".chart-svg, .tensio-svg");if(!v)return;const $=document.createElementNS("http://www.w3.org/2000/svg","g");$.setAttribute("class","pheno-overlay"),u.forEach(g=>{const y=(new Date(g.date).getTime()-s)/a,E=l+y*r,b=document.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1",E.toFixed(1)),b.setAttribute("x2",E.toFixed(1)),b.setAttribute("y1",o),b.setAttribute("y2",p),b.setAttribute("stroke","#3a9e6a"),b.setAttribute("stroke-width","1"),b.setAttribute("stroke-dasharray","4,3"),$.appendChild(b);const C=14,k=g.name.length>C?g.name.slice(0,C-1)+"…":g.name,B=(E+3).toFixed(1),A=(o+2).toFixed(1),P=document.createElementNS("http://www.w3.org/2000/svg","text");P.setAttribute("x",B),P.setAttribute("y",A),P.setAttribute("transform",`rotate(90, ${B}, ${A})`),P.setAttribute("text-anchor","start"),P.setAttribute("font-size","9"),P.setAttribute("font-family","var(--font)"),P.setAttribute("fill","#3a9e6a"),P.style.cursor="pointer",P.textContent=k,$.appendChild(P);const W=document.createElementNS("http://www.w3.org/2000/svg","rect");W.setAttribute("x",(E-8).toFixed(1)),W.setAttribute("y",o.toString()),W.setAttribute("width","16"),W.setAttribute("height",(p-o).toString()),W.setAttribute("fill","transparent"),W.style.cursor="pointer",W.addEventListener("click",Z=>_i(g,Z)),$.appendChild(W)}),v.appendChild($)})}let re=null;function _i(e,t){re&&(re.remove(),re=null);const i=document.createElement("div");i.className="pheno-popover";const n=c=>{const[l,m,d]=c.split("-");return`${d}/${m}/${l}`};i.innerHTML=`
    <div class="pheno-pop-hd">
      <span class="pheno-pop-badge">${e.bbch}</span>
      <span class="pheno-pop-name">${e.name}</span>
      <button class="pheno-pop-close">×</button>
    </div>
    <div class="pheno-pop-date">${n(e.date)}</div>
  `,i.querySelector(".pheno-pop-close").addEventListener("click",()=>{i.remove(),re=null});const a=t.clientX,s=t.clientY;i.style.position="fixed",i.style.top=s-8+"px",i.style.left=a+12+"px",document.body.appendChild(i),re=i,setTimeout(()=>{const c=i.offsetWidth,l=i.offsetHeight;let m=s-8,d=a+12;d+c>window.innerWidth-8&&(d=a-c-12),m+l>window.innerHeight-8&&(m=s-l),i.style.top=Math.max(8,m)+"px",i.style.left=Math.max(8,d)+"px"},0),document.addEventListener("click",function c(l){i.contains(l.target)||(i.remove(),re=null,document.removeEventListener("click",c))},{capture:!0})}function Wi(){const e=document.getElementById("toggle-notes");e&&e.addEventListener("change",Tt)}function Tt(){document.querySelectorAll(".notes-overlay").forEach(o=>o.remove()),lt();const e=document.getElementById("toggle-notes");if(!(e!=null&&e.checked))return;const t=xe().filter(o=>o.type==="note"||o.type==="traitement");if(!t.length)return;const i=Date.now(),n=fe()*6e4,a=i-n,s=600,c=46,l=10,m=28,d=s-c-l,f=180-m,r=t.filter(o=>{const p=new Date(o.date+"T12:00:00").getTime();return p>=a&&p<=i});r.length&&document.querySelectorAll(".chart-card").forEach(o=>{const p=o.querySelector(".chart-svg, .tensio-svg");if(!p)return;const u=document.createElementNS("http://www.w3.org/2000/svg","g");u.setAttribute("class","notes-overlay"),r.forEach(h=>{const $=(new Date(h.date+"T12:00:00").getTime()-a)/n,g=c+$*d,y=h.type==="traitement"?"#78c860":"#60a8e0",E=f+9,b=document.createElementNS("http://www.w3.org/2000/svg","polygon"),C=5;b.setAttribute("points",`${g.toFixed(1)},${(E-C).toFixed(1)} ${(g+C).toFixed(1)},${E.toFixed(1)} ${g.toFixed(1)},${(E+C).toFixed(1)} ${(g-C).toFixed(1)},${E.toFixed(1)}`),b.setAttribute("fill",y),b.setAttribute("stroke","#fff"),b.setAttribute("stroke-width","1.5"),u.appendChild(b);const k=document.createElementNS("http://www.w3.org/2000/svg","rect");k.setAttribute("x",(g-9).toFixed(1)),k.setAttribute("y",f.toFixed(1)),k.setAttribute("width","18"),k.setAttribute("height","18"),k.setAttribute("fill","transparent"),k.style.cursor="default",k.addEventListener("mouseenter",B=>Vi(h,B)),k.addEventListener("mouseleave",lt),u.appendChild(k)}),p.appendChild(u)})}let Y=null;function Vi(e,t){Y||(Y=document.createElement("div"),Y.className="note-tip",document.body.appendChild(Y));const i=e.type==="traitement";let a=`<div class="note-tip-header">
    <span class="note-tip-badge note-tip-badge--${i?"trait":"note"}">
      <i class="bi ${i?"bi-eyedropper":"bi-pencil"}"></i> ${i?"Traitement":"Note"}
    </span>
    <span class="note-tip-date">${(l=>{const[m,d,f]=l.split("-");return`${f}/${d}/${m}`})(e.date)}</span>
  </div>`;e.texte&&(a+=`<div class="note-tip-texte">${e.texte}</div>`),i&&(e.produit||e.dose||e.cible)&&(a+='<div class="note-tip-detail">',e.produit&&(a+=`<span><i class="bi bi-flask"></i> ${e.produit}</span>`),e.dose&&(a+=`<span><i class="bi bi-droplet"></i> ${e.dose}</span>`),e.cible&&(a+=`<span><i class="bi bi-bullseye"></i> ${e.cible}</span>`),a+="</div>"),Y.innerHTML=a,Y.style.display="block";const s=t.clientX+14,c=t.clientY-10;Y.style.left=s+"px",Y.style.top=c+"px",requestAnimationFrame(()=>{const l=Y.offsetWidth;s+l>window.innerWidth-8&&(Y.style.left=t.clientX-l-10+"px")})}function lt(){Y&&(Y.style.display="none")}function Gi(){He()}function He(){var t,i,n,a;const e=document.getElementById("compare-control");if(e)if(G){const s=((t=ne.find(c=>c.id===G))==null?void 0:t.name)||"Parcelle";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${s} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(i=e.querySelector(".compare-clear-icon"))==null||i.addEventListener("click",c=>{c.stopPropagation(),G=null,He(),U()}),(n=e.querySelector("#compare-open-btn"))==null||n.addEventListener("click",ct)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(a=e.querySelector("#compare-open-btn"))==null||a.addEventListener("click",ct)}function ct(){const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),i=ne.filter(s=>s.id!==T),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher une parcelle…">
    <div class="compare-dropdown-list">
      ${i.map(s=>`<div class="compare-dropdown-item${s.id===G?" active":""}" data-id="${s.id}"><i class="bi bi-map"></i> ${s.name}</div>`).join("")}
    </div>
  `,t.appendChild(n);const a=n.querySelector(".compare-search-input");a.focus(),a.addEventListener("input",s=>{const c=s.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-item").forEach(l=>{l.style.display=l.textContent.toLowerCase().includes(c)?"":"none"})}),n.querySelectorAll(".compare-dropdown-item").forEach(s=>{s.addEventListener("click",()=>{G=parseInt(s.dataset.id),n.remove(),He(),U()})}),setTimeout(()=>{document.addEventListener("click",function s(c){!n.contains(c.target)&&!t.contains(c.target)&&(n.remove(),document.removeEventListener("click",s))})},0)}function Yi(){const e=Ve.find(t=>t.id===S.orgId);It(e),Ui(e),Te(),We(),ce(),Je()}const dt=["Abricotier","Ail","Amandier","Artichaut","Asperge","Aubergine","Avoine","Basilic","Betterave fourragère","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Chou pommé","Ciboulette","Citrouille","Clémentinier","Courgette","Echalote","Endive","Epinard","Fève","Figuier","Fraisier","Framboisier","Gesse","Giroflier","Haricot vert","Houblon","Kiwi","Lavande","Lentille","Luzerne","Maïs doux","Maïs grain","Maïs semence","Maïs silage","Melon","Menthe","Moutarde","Navet","Nectarinier","Noisetier","Noyer","Oignon","Olivier","Orge de brasserie","Orge de printemps","Orge d'hiver","Pêcher","Persil","Pissenlit","Poireau","Pois chiche","Pois de conserve","Pois fourrager","Pois protéagineux","Poivron","Pomme de terre","Pommier","Poirier","Prunier","Pruneau d'Agen","Radis","Raisin de cuve","Raisin de table","Riz","Romarin","Sarrasin","Seigle","Soja","Sorgho","Tabac","Thym","Tomate","Tournesol","Triticale","Vigne","Cardon","Céleri","Cerise","Châtaignier","Colza","Courge","Fénugrec","Groseillier","Lin fibre","Lin oléagineux","Mâche","Millet","Myrtille","Noix de cajou","Paprika","Patate douce","Pistachier","Poisson-Chat","Quinoa","Safran","Sainfoin","Scorsonère","Shallot","Topinambour","Trèfle","Vesce","Fétuque","Ray-grass","Prairie temporaire","Prairie permanente","Jachère","Autre"];function It(e){const t=document.getElementById("panel-ident"),i=M,n=i.texture||null,a=i.irrigation||null,s=i.crop||dt[0],c=i.env||null,l=n===De,m=i.soilAnalysis||{},d=i.latlngs,f=Array.isArray(d)&&d.length>=3,r=i.area?`${i.area} ha <span class="field-computed">(calculé)</span>`:f?'— <span class="field-computed">(calculé)</span>':'<span class="field-computed">Tracez le contour pour calculer la surface de la parcelle.</span>';t.innerHTML=`
    ${ke("Nom",i.name||"—","name","text")}
    ${Ji("Culture",s,"crop",dt)}
    ${ut("Surface",r)}
    ${qe("Environnement",c,"env",Kt,"Plein champ")}
    ${qe("Texture sol",n,"texture",[...Xt,De],"Indéfini")}
    ${l?`
      ${ke("Argile (%)",String(m.argile??""),"soilArgile","number")}
      ${ke("Limon (%)",String(m.limon??""),"soilLimon","number")}
      ${ke("Sable (%)",String(m.sable??""),"soilSable","number")}
    `:""}
    ${qe("Irrigation",a,"irrigation",Mt,"Non renseigné")}
    ${ut("Exploitation",e?e.name:"—")}
  `,ie(t,"name",i.name||"",o=>{z({name:o}),Ct(o,{label:"Parcelles",href:"parcelles.html"})}),ie(t,"crop",s,o=>z({crop:o})),ie(t,"env",c||"",o=>z({env:o||null})),ie(t,"texture",n||"",o=>{const p=o||null,u={texture:p};p!==De&&(u.soilAnalysis=null),z(u),It(e)}),l&&(ie(t,"soilArgile",String(m.argile??""),o=>z({soilAnalysis:{...M.soilAnalysis,argile:+o}})),ie(t,"soilLimon",String(m.limon??""),o=>z({soilAnalysis:{...M.soilAnalysis,limon:+o}})),ie(t,"soilSable",String(m.sable??""),o=>z({soilAnalysis:{...M.soilAnalysis,sable:+o}}))),ie(t,"irrigation",a||"",o=>z({irrigation:o||null}))}function ke(e,t,i,n="text"){const a=(t||"").replace(/"/g,"&quot;");return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <input type="${n}" class="panel-field-input" data-val value="${a}">
    </div>`}function Ji(e,t,i,n){return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${n.map(a=>`<option${a===t?" selected":""}>${a}</option>`).join("")}
      </select>
    </div>`}function qe(e,t,i,n,a="—"){const c=n.includes(a)?"":`<option value=""${t?"":" selected"}>${a}</option>`;return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${c}
        ${n.map(l=>`<option${l===(t||a)?" selected":""}>${l}</option>`).join("")}
      </select>
    </div>`}function ut(e,t){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${t}</span>
    </div>`}function ie(e,t,i,n){const a=e.querySelector(`[data-field="${t}"] [data-val]`);if(!a)return;const s=()=>{var l;const c=(l=a.value)==null?void 0:l.trim();c&&c!==i&&(i=c,n(c))};a.addEventListener("change",s),a.tagName==="INPUT"&&a.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),a.blur())})}function Ui(e){const t=document.getElementById("panel-geoloc"),i=M.latlngs,n=Array.isArray(i)&&i.length>=3,a=M.ville||S.ville||(e==null?void 0:e.ville)||"—",s=S.departement||(e==null?void 0:e.departement),c=M.lat??S.lat??(e==null?void 0:e.lat),l=M.lng??S.lng??(e==null?void 0:e.lng);t.innerHTML=`
    <div class="panel-row">
      <span class="panel-row-key">Commune</span>
      <span class="panel-row-val">${a}${s?` (${s})`:""}</span>
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
      <a href="parcelle-modifier-contour.html?id=${T}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${n?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function Xi(){const e=new Set;return F.filter(i=>M.linkedSensorIds.includes(i.id)).forEach(i=>{const n=q[i.model]||[];_.includes(i.model)||n.forEach(a=>e.add(a.id))}),e}function mt(e){const t=q[e]||[];return t.length?`<div class="sensor-metric-badges">${t.map(i=>`<span class="sensor-metric-badge" style="--mc:${i.color}">${i.name}</span>`).join("")}</div>`:""}function Te(){const e=document.getElementById("panel-sensors"),t=F.filter(p=>M.linkedSensorIds.includes(p.id)),i=F.filter(p=>p.orgId===S.orgId&&!M.linkedSensorIds.includes(p.id)),n=t.filter(p=>!_.includes(p.model)),a={};n.forEach(p=>(q[p.model]||[]).forEach(u=>{a[u.id]=(a[u.id]||0)+1}));const s=Object.entries(a).filter(([,p])=>p>1).map(([p])=>{var u;return((u=Object.values(q).flat().find(h=>h.id===p))==null?void 0:u.name)||p});let c="";if(s.length>0&&(c+=`<div class="sensor-conflict-banner">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <span>Conflit de métriques : <strong>${s.join(", ")}</strong> mesurée(s) par plusieurs capteurs. Les données peuvent être en doublon.</span>
    </div>`),t.length===0)c+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>';else{const p=t.filter(h=>_.includes(h.model)),u=t.filter(h=>!_.includes(h.model));if(c+=u.map(h=>{const v=h.event&&(Array.isArray(h.event)?h.event.length>0:!0),$=v?Array.isArray(h.event)?h.event[0]:h.event:null;return`
      <div class="sensor-linked-row">
        <div class="sensor-linked-info">
          <div style="display:flex;align-items:center;gap:6px">
            <a href="capteur-detail.html?id=${h.id}" class="sensor-linked-link">${ee[h.model]||h.model}</a>
            ${v?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
          </div>
          <span class="sensor-linked-detail">${h.model} · ${h.serial}</span>
          ${v?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${$}</span>`:""}
          ${mt(h.model)}
        </div>
        <button class="remove-sensor-btn icon-btn" data-id="${h.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>`}).join(""),p.length>0){const h={};p.forEach(v=>{const $=v.depth!=null?`${v.depth} cm`:v.model;h[$]||(h[$]=[]),h[$].push(v)}),c+=`<div class="sensor-kit-hd">
        <span class="sensor-kit-hd-label">Kit de tensiomètres</span>
        ${mt("CHP-15/30")}
      </div>`,Object.entries(h).forEach(([v,$])=>{c+=`<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${v}</div>`,c+=$.map(g=>{const w=g.event&&(Array.isArray(g.event)?g.event.length>0:!0),y=w?Array.isArray(g.event)?g.event[0]:g.event:null;return`
          <div class="sensor-linked-row" style="padding-left:12px">
            <div class="sensor-linked-info">
              <div style="display:flex;align-items:center;gap:6px">
                <a href="capteur-detail.html?id=${g.id}" class="sensor-linked-link">${ee[g.model]||g.model}</a>
                ${w?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
              </div>
              <span class="sensor-linked-detail">${g.model} · ${g.serial}</span>
              ${w?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${y}</span>`:""}
            </div>
            <button class="remove-sensor-btn icon-btn" data-id="${g.id}" title="Retirer">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>`}).join("")})}}e.innerHTML=c;const l=t.some(p=>p.model==="PYRANO"),m=[{name:"Évapotranspiration (ETP)",color:"#c090e0"},...l?[]:[{name:"Rayonnement solaire",color:"#f5c842"}],{name:"Température de rosée",color:"#80c8e8"}],d=document.getElementById("panel-parcel-metrics-ext");d&&(d.innerHTML=`
      <div class="panel-parcel-metrics">
        <div class="panel-parcel-metrics-title">Données spatialisées</div>
        <div class="sensor-metric-badges">
          ${m.map(p=>`<span class="sensor-metric-badge" style="--mc:${p.color}">${p.name}</span>`).join("")}
        </div>
      </div>`);const f=document.getElementById("sensor-add-row"),r=document.getElementById("add-sensor-select");f&&r&&(i.length>0?(r.innerHTML='<option value="">Ajouter un capteur…</option>'+i.map(p=>`<option value="${p.id}">${ee[p.model]||p.model} — ${p.serial}</option>`).join(""),f.style.display=""):f.style.display="none"),e.querySelectorAll(".remove-sensor-btn").forEach(p=>{p.addEventListener("click",()=>{const u=parseInt(p.dataset.id),h=F.find($=>$.id===u),v=h?`${ee[h.model]||h.model} — ${h.serial}`:`capteur #${u}`;Se({title:"Retirer le capteur",message:`Retirer <strong>${v}</strong> de cette parcelle ?<br><br>Les données historiques sont conservées.`,confirmLabel:"Retirer",onConfirm:()=>{const $=M.linkedSensorIds.filter(g=>g!==u);z({linkedSensorIds:$}),ht($),Te(),U(),ue()}})})});const o=document.getElementById("add-sensor-btn");o&&o.addEventListener("click",()=>{const p=document.getElementById("add-sensor-select"),u=parseInt(p.value);if(!u)return;const h=F.find($=>$.id===u);if(!h)return;const v=Ne(h.model);if(v){const g=F.filter(w=>M.linkedSensorIds.includes(w.id)).filter(w=>{const y=Ne(w.model);return y&&y!==v});if(g.length>0){const w=g.map(y=>`${ee[y.model]||y.model} — ${y.serial}`).join(", ");Se({title:"Capteur incompatible",message:`Cette parcelle utilise déjà : <strong>${w}</strong>.<br><br>Les capteurs de sol (CHP, CAPA, EC, T_MINI) sont exclusifs — une seule technologie par parcelle.<br><br>Retirer ${g.length>1?"ces capteurs":"ce capteur"} et ajouter le nouveau ?`,confirmLabel:"Remplacer",onConfirm:()=>{const y=new Set(g.map(b=>b.id)),E=M.linkedSensorIds.filter(b=>!y.has(b));z({linkedSensorIds:[...E,u]}),ht(E),vt(h),Te(),U(),ue()}});return}}if(!_.includes(h.model)){const $=Xi(),w=(q[h.model]||[]).map(y=>y.id).filter(y=>$.has(y));if(w.length>0){const y=w.map(b=>{const C=Object.values(q).flat().find(k=>k.id===b);return(C==null?void 0:C.name)||b});if(!confirm(`Attention : ce capteur (${h.model}) mesure des métriques déjà fournies par un autre capteur :
• ${y.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}z({linkedSensorIds:[...M.linkedSensorIds,u]}),vt(h),Te(),U(),ue()})}function We(){var c;const e=document.getElementById("panel-integrations"),t=M.integrations||[],i=ti.filter(l=>!t.includes(l));let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':n+=t.map(l=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${l}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(l)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),e.innerHTML=n;const a=document.getElementById("integ-add-row"),s=document.getElementById("add-integ-select");a&&s&&(i.length>0?(s.innerHTML='<option value="">Ajouter une intégration…</option>'+i.map(l=>`<option value="${encodeURIComponent(l)}">${l}</option>`).join(""),a.style.display=""):a.style.display="none"),e.querySelectorAll(".remove-integ-btn").forEach(l=>{l.addEventListener("click",()=>{const m=decodeURIComponent(l.dataset.name);Se({title:"Retirer l'intégration",message:`Retirer <strong>${m}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{z({integrations:M.integrations.filter(d=>d!==m)}),We()}})})}),(c=document.getElementById("add-integ-btn"))==null||c.addEventListener("click",()=>{const l=document.getElementById("add-integ-select"),m=decodeURIComponent(l.value);m&&(z({integrations:[...M.integrations,m]}),We())})}let K=null,Q=null;function Ki(){if(K!==null)return;const e=Ce(T);K=e.linkedOrgMemberIds??ae.filter(t=>{var i,n;return t.source==="adherent"&&((i=t.parcelIds)==null?void 0:i.includes(T))&&((n=t.orgIds)==null?void 0:n.includes(S.orgId))}).map(t=>t.id),Q=e.linkedConseillerIds??ae.filter(t=>{var i;return t.source==="réseau"&&((i=t.parcelIds)==null?void 0:i.includes(T))}).map(t=>t.id)}function pt(e,t,i){return`<div class="member-row">
    <div>
      <span class="member-name">${e.prenom} ${e.nom}</span>
      ${i?`<span class="member-role-badge">${e.role}</span>`:""}
    </div>
    ${t?`<button class="remove-membre-btn icon-btn" data-id="${e.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function ce(){var r;Ki();const e=((r=document.getElementById("sidebar"))==null?void 0:r.getAttribute("data-role"))==="adherent-reseau",t=document.getElementById("panel-membres"),i=document.getElementById("panel-membres-section"),n=ae.filter(o=>{var p;return o.source==="adherent"&&((p=o.orgIds)==null?void 0:p.includes(S.orgId))}),a=n.filter(o=>K.includes(o.id));i&&(i.style.display=!e&&n.length===0?"none":""),t&&(t.innerHTML=a.length?a.map(o=>pt(o,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',t.querySelectorAll(".remove-membre-btn").forEach(o=>{o.addEventListener("click",()=>{const p=parseInt(o.dataset.id),u=ae.find(h=>h.id===p);Se({title:"Retirer le membre",message:`Retirer <strong>${u?`${u.prenom} ${u.nom}`:`membre #${p}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{K=K.filter(h=>h!==p),se(T,{linkedOrgMemberIds:K}),ce()}})})}));const s=document.getElementById("add-membre-org-row");s&&(s.style.display="");const c=document.getElementById("add-membre-org-select");c&&(c.innerHTML='<option value="">Associer un membre…</option>',n.filter(o=>!K.includes(o.id)).forEach(o=>{const p=document.createElement("option");p.value=o.id,p.textContent=`${o.prenom} ${o.nom}`,c.appendChild(p)})),document.getElementById("add-membre-org-btn").onclick=()=>{const o=parseInt(c==null?void 0:c.value);!o||K.includes(o)||(K.push(o),se(T,{linkedOrgMemberIds:K}),ce())};const l=document.getElementById("panel-conseillers"),m=document.getElementById("panel-conseillers-section"),d=ae.filter(o=>o.source==="réseau"&&Q.includes(o.id));m&&(m.style.display=e&&d.length===0?"none":""),l&&(l.innerHTML=d.length?d.map(o=>pt(o,!e,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',e||l.querySelectorAll(".remove-membre-btn").forEach(o=>{o.addEventListener("click",()=>{const p=parseInt(o.dataset.id),u=ae.find(h=>h.id===p);Se({title:"Retirer le conseiller",message:`Retirer <strong>${u?`${u.prenom} ${u.nom}`:`conseiller #${p}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{Q=Q.filter(h=>h!==p),se(T,{linkedConseillerIds:Q}),ce()}})})}));const f=document.getElementById("add-conseiller-row");if(f&&(f.style.display=e?"none":""),!e){const o=document.getElementById("add-membre-select");o&&(o.innerHTML='<option value="">Ajouter un conseiller…</option>',ae.filter(p=>p.source==="réseau"&&!Q.includes(p.id)).forEach(p=>{const u=document.createElement("option");u.value=p.id,u.textContent=`${p.prenom} ${p.nom} (${p.role})`,o.appendChild(u)})),document.getElementById("add-membre-btn").onclick=()=>{const p=parseInt(o==null?void 0:o.value);!p||Q.includes(p)||(Q.push(p),se(T,{linkedConseillerIds:Q}),ce())}}}function Je(){const e=document.getElementById("panel-alertes"),t=M.alertes||[],i={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':n+=t.map((a,s)=>`
      <div class="alert-item">
        <i class="bi ${i[a.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition||""} ${a.threshold||""} ${a.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${s}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),n+='<button id="create-alert-btn" class="action-btn action-btn--primary" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=n,e.querySelectorAll(".remove-alert-btn").forEach(a=>{a.addEventListener("click",()=>{const s=parseInt(a.dataset.idx),c=[...M.alertes];c.splice(s,1),z({alertes:c}),Je()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{Qi(e)})}function Zi(){const e=[];return F.filter(i=>M.linkedSensorIds.includes(i.id)).forEach(i=>{(q[i.model]||[]).forEach(a=>{e.find(s=>s.id===a.id)||e.push({id:a.id,name:a.name,unit:a.unit})})}),Ge.forEach(i=>{e.find(n=>n.id===i.id)||e.push({id:i.id,name:i.name,unit:i.unit})}),e}function Qi(e){if(e.querySelector(".alert-create-form"))return;const i=Zi(),n=document.createElement("div");n.className="alert-create-form",n.innerHTML=`
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
  `,e.appendChild(n),n.querySelector("#alert-metric").addEventListener("change",a=>{const s=a.target.selectedOptions[0];n.querySelector("#alert-unit-label").textContent=(s==null?void 0:s.dataset.unit)||"—"}),n.querySelector("#alert-save-btn").addEventListener("click",()=>{const s=n.querySelector("#alert-metric").value,c=i.find(f=>f.id===s),l=n.querySelector("#alert-condition").value,m=n.querySelector("#alert-threshold").value;if(!s||!m)return;const d={type:"seuil",label:`Alerte ${(c==null?void 0:c.name)||s}`,metric:(c==null?void 0:c.name)||s,condition:l,threshold:m,unit:(c==null?void 0:c.unit)||""};z({alertes:[...M.alertes||[],d]}),Je()}),n.querySelector("#alert-cancel-btn").addEventListener("click",()=>n.remove())}function en(e,t){const i=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(i),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function tn(){const e=M.name||S.name||"Parcelle",t=Le(M.linkedSensorIds);let i;if(G){const o=ne.find(v=>v.id===G),p=F.filter(v=>v.parcelIds.includes(G)).map(v=>v.id),u=Le(p),h=(o==null?void 0:o.name)||"Comparaison";i=[...t.map(v=>({h:`[${e}] ${v.name} (${v.unit})`,gen:v.base})),...u.map(v=>({h:`[${h}] ${v.name} (${v.unit})`,gen:v.base}))]}else i=t.map(o=>({h:`${o.name} (${o.unit})`,gen:o.base}));const n=fe()*6e4,a=be()*6e4,s=J==="custom"&&pe?pe:new Date,c=J==="custom"&&me?me:new Date(s-n),l=Math.min(Math.ceil((s-c)/a)+1,500),m=(s-c)/Math.max(l-1,1),d=["Horodatage",...i.map(o=>o.h)].join(";"),f=Array.from({length:l},(o,p)=>[new Date(c.getTime()+p*m).toISOString().replace("T"," ").slice(0,19),...i.map(h=>h.gen())].join(";")),r=e.replace(/[^\w]/g,"_");en([d,...f].join(`\r
`),`${r}_${J}_${new Date().toISOString().slice(0,10)}.csv`)}function Se({title:e,message:t,confirmLabel:i="Confirmer",onConfirm:n}){const a=document.createElement("div");a.className="modal add-modal",a.style.zIndex="9999",a.innerHTML=`
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
    </div>`,a.querySelector(".add-modal-close").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-cancel").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-ok").addEventListener("click",()=>{a.remove(),n()}),a.addEventListener("click",s=>{s.target===a&&a.remove()}),document.body.appendChild(a)}const nn={zoomControl:!1,attributionControl:!1,dragging:!1,touchZoom:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1,tap:!1},Lt=[{key:"N",icon:"bi-arrow-up"},{key:"NE",icon:"bi-arrow-up-right"},{key:"E",icon:"bi-arrow-right"},{key:"SE",icon:"bi-arrow-down-right"},{key:"S",icon:"bi-arrow-down"},{key:"SW",icon:"bi-arrow-down-left"},{key:"W",icon:"bi-arrow-left"},{key:"NW",icon:"bi-arrow-up-left"}];function an(e,t){const i=(Math.atan2(t,e)*180/Math.PI+360)%360;return Lt[Math.round(i/45)%8].key}function sn(e,t){const i=e.getNorth(),n=e.getSouth(),a=e.getEast(),s=e.getWest(),c=(i-n)*.1,l=(a-s)*.1,m=i-c,d=n+c,f=a-l,r=s+l,o=(m+d)/2,p=(f+r)/2;return{N:[m,p],NE:[m,f],E:[o,f],SE:[d,f],S:[d,p],SW:[d,r],W:[o,r],NW:[m,r]}[t]}function ft(e,t,i){const n=M.linkedSensorIds||[];if(!n.length)return;const a=e.getBounds(),s={};n.forEach(c=>{const l=F.find(o=>o.id===c);if(!l)return;const m=l.parcelIds.find(o=>o!==S.id),d=m?ne.find(o=>o.id===m):null,f=(d==null?void 0:d.lat)??t,r=(d==null?void 0:d.lng)??i;if(!(f==null||r==null))if(a.contains([f,r]))L.circleMarker([f,r],{radius:6,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.95}).addTo(e);else{const o=an(f-t,r-i);s[o]=(s[o]||0)+1}}),Object.entries(s).forEach(([c,l])=>{const m=Lt.find(f=>f.key===c),d=L.divIcon({className:"mini-map-dir-arrow",html:`<div class="mini-map-dir-arrow-inner"><i class="bi ${m.icon}"></i>${l>1?`<span class="mini-map-dir-count">${l}</span>`:""}</div>`,iconSize:[24,24],iconAnchor:[12,12]});L.marker(sn(a,c),{icon:d,interactive:!1}).addTo(e)})}function on(){if(Re){Re.invalidateSize();return}const e=Ve.find(s=>s.id===S.orgId),t=M.lat??S.lat??(e==null?void 0:e.lat),i=M.lng??S.lng??(e==null?void 0:e.lng);if(t==null||i==null)return;const n=M.latlngs,a=L.map("parcel-mini-map",nn);if(Re=a,L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(a),Array.isArray(n)&&n.length>=3){const s=L.polygon(n,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(a);a.fitBounds(s.getBounds(),{padding:[10,10]});const c=s.getBounds().getCenter();ft(a,c.lat,c.lng)}else{const s=.009009009009009009,c=1/(111*Math.cos(t*Math.PI/180));a.fitBounds([[t-s,i-c],[t+s,i+c]]),L.circleMarker([t,i],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(a),ft(a,t,i)}}function rn(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),i=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",i.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}let Re=null;function ln(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(i=>i.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.pane).classList.add("active"),t.dataset.pane==="tab-journal"&&Ye()})})}const cn={"previsions-5j":{size:"1x1",title:"Prévisions 5 jours",icon:"bi-calendar3-week",color:"#5b8dd9",render:mn,footer:{label:"Voir détails",href:"previsions.html"}},weephyt:{size:"1x1",title:"Traitements",icon:"bi-shield-check",color:"#2d9e5f",render:pn,footer:{label:"Voir détails",href:"#",tab:"journal"}},cumuls:{size:"1x1",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#2E75B6",render:Ie},"pluie-hist":{size:"1x1",title:"Pluie",icon:"bi-cloud-rain-heavy",color:"#2E75B6",render:wt("pluie"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"etp-hist":{size:"1x1",title:"Évapotranspiration",icon:"bi-moisture",color:"#7DBDD7",render:wt("etp"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},bilan:{size:"1x1",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4",render:xn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},irrigations:{size:"1x1",title:"Irrigations",icon:"bi-moisture",color:"#FF8C00",render:Me,footer:{label:"Voir détails",href:`irrigation.html?plot=${T}`}},gel:{size:"1x1",title:"Suivi du risque de gel",icon:"bi-thermometer-snow",color:"#FEE7B4",render:fn,footer:{label:"Voir détails",href:"previsions.html"}},dpv:{size:"1x1",title:"DPV",icon:"bi-droplet-half",color:"#5E88EC",render:hn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},thi:{size:"1x1",title:"THI",icon:"bi-heart-pulse",color:"#e0a030",render:vn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},"temp-rosee":{size:"1x1",title:"Température de rosée",icon:"bi-thermometer",color:"#72B0D8",render:bn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},"temp-sol":{size:"1x1",title:"Température du sol",icon:"bi-layers",color:"#795548",render:gn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},maizy:{size:"1x1",title:"Maï'zy",icon:"bi-calendar-check",color:"#2d9e5f",render:yn,footer:{label:"Voir détails",href:"#"}},tavelure:{size:"1x1",title:"Tavelure Pomme",icon:"bi-exclamation-triangle",color:"#e07050",render:wn,footer:{label:"Voir détails",href:"#"}},"suivi-culture":{size:"1x1",title:"Suivi de culture",icon:"bi-flower2",color:"#78d8a0",render:le},decitrait:{size:"1x1",title:"Decitrait",icon:"bi-shield",color:"#6080b0",render:le,footer:{label:"Voir détails",href:"#"}},"previsions-6h":{size:"1x1",title:"Prévisions à 6 heures",icon:"bi-clock",color:"#5b8dd9",render:le,footer:{label:"Voir détails",href:"previsions.html"}},"previsions-jour":{size:"1x1",title:"Prévisions du jour",icon:"bi-sun",color:"#f5c842",render:le,footer:{label:"Voir détails",href:"previsions.html"}},"previsions-tensio":{size:"1x1",title:"Prévisions tensiométrie",icon:"bi-graph-down",color:"#A6C157",render:le,footer:{label:"Voir détails",href:"previsions.html"}},"w-station":{size:"1x1",title:"Station météo",icon:"bi-broadcast",color:"#FBAF05",render:X("w-station"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-thygro":{size:"1x1",title:"Thermomètre-hygromètre",icon:"bi-thermometer-half",color:"#FBAF05",render:X("w-thygro"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-tsol":{size:"1x1",title:"Thermomètre de sol",icon:"bi-layers",color:"#795548",render:X("w-tsol"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-anem":{size:"1x1",title:"Anémomètre",icon:"bi-wind",color:"#616161",render:X("w-anem"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-pyrano":{size:"1x1",title:"Pyranomètre",icon:"bi-sun",color:"#CBCB0B",render:X("w-pyrano"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-lws":{size:"1x1",title:"Capteur d'humectation foliaire",icon:"bi-droplet",color:"#00887E",render:X("w-lws"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-par":{size:"1x1",title:"Capteur PAR",icon:"bi-brightness-high",color:"#4CBB17",render:X("w-par"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-capa":{size:"1x1",title:"Sonde capacitive",icon:"bi-moisture",color:"#ED9A2C",render:X("w-capa"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-tensio":{size:"1x1",title:"Tensiomètre",icon:"bi-graph-down",color:"#A6C157",render:X("w-tensio"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-ec":{size:"1x1",title:"Sonde de fertirrigation",icon:"bi-plug",color:"#2BCDDE",render:X("w-ec"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"profil-capteurs":{size:"1x1",title:"Profil capteurs",icon:"bi-bar-chart",color:"#5b8dd9",render:le},"niveau-reservoir":{size:"1x1",title:"Niveau de réservoir (RFU)",icon:"bi-droplet-fill",color:"#0172A4",render:_t},"profil-reservoir":{size:"1x1",title:"Profil de réservoir",icon:"bi-clipboard-data",color:"#0172A4",render:Wt}},Pt=()=>`dash-widgets-parcel-${T}`;function he(){try{const e=JSON.parse(localStorage.getItem(Pt()));if(Array.isArray(e)&&e.length)return e}catch{}return dn()}function ve(e){localStorage.setItem(Pt(),JSON.stringify(e))}function ht(e){const t=F.filter(d=>e.includes(d.id)),i=new Set(t.map(d=>d.model)),n=[...i].some(d=>d.startsWith("CAPA-")),a=[...i].some(d=>_.includes(d)),s=new Set(["previsions-5j","weephyt","cumuls","pluie-hist","etp-hist"]);(i.has("P+")||i.has("PT")||i.has("SMV")||i.has("P"))&&s.add("w-station"),i.has("TH")&&s.add("w-thygro"),i.has("T_MINI")&&s.add("w-tsol"),i.has("W")&&s.add("w-anem"),i.has("PYRANO")&&s.add("w-pyrano"),i.has("LWS")&&s.add("w-lws"),i.has("T_GEL")&&s.add("gel"),i.has("PAR")&&s.add("w-par"),n&&s.add("w-capa"),a&&s.add("w-tensio"),i.has("EC")&&s.add("w-ec"),(a||n)&&s.add("bilan"),(!!S.irrigation&&S.irrigation!=="Non irrigué"||O.some(d=>d.plotId===S.id))&&s.add("irrigations");const l=he(),m=l.filter(d=>s.has(d));m.length!==l.length&&ve(m)}function vt(e){const t=he(),i=a=>{t.includes(a)||t.push(a)},n=e.model;(n==="P+"||n==="PT"||n==="SMV"||n==="P")&&i("w-station"),n==="TH"&&i("w-thygro"),n==="T_MINI"&&i("w-tsol"),n==="W"&&i("w-anem"),n==="PYRANO"&&i("w-pyrano"),n==="LWS"&&i("w-lws"),n==="T_GEL"&&i("gel"),n==="PAR"&&i("w-par"),n==="EC"&&i("w-ec"),n.startsWith("CAPA-")&&(i("w-capa"),i("bilan")),_.includes(n)&&(i("w-tensio"),i("bilan")),ve(t)}function dn(){const e=F.filter(c=>M.linkedSensorIds.includes(c.id)),t=new Set(e.map(c=>c.model)),i=[...t].some(c=>c.startsWith("CAPA-")),n=[...t].some(c=>_.includes(c)),a=!!S.irrigation&&S.irrigation!=="Non irrigué"||O.some(c=>c.plotId===S.id),s=["previsions-5j"];return a&&s.push("irrigations"),s.push("weephyt","cumuls"),(t.has("P+")||t.has("PT")||t.has("SMV")||t.has("P"))&&s.push("w-station"),t.has("TH")&&s.push("w-thygro"),t.has("T_MINI")&&s.push("w-tsol"),t.has("W")&&s.push("w-anem"),t.has("PYRANO")&&s.push("w-pyrano"),t.has("LWS")&&s.push("w-lws"),t.has("T_GEL")&&s.push("gel"),t.has("PAR")&&s.push("w-par"),i&&s.push("w-capa"),n&&s.push("w-tensio"),t.has("EC")&&s.push("w-ec"),(n||i)&&s.push("bilan"),s.push("pluie-hist","etp-hist"),s}function ue(){const e=document.getElementById("dash-grid");if(!e)return;const t=he();!t.includes("irrigations")&&O.some(i=>i.plotId===S.id)&&(t.push("irrigations"),ve(t)),e.innerHTML="",t.forEach(i=>{const n=cn[i];if(!n)return;const a=document.createElement("div");a.className=`dash-block dash-block--${n.size}`,a.dataset.id=i,a.draggable=!0;const s=n.footer?`<div class="dash-block-ft"><a class="dash-block-ft-link" href="${n.footer.href}"${n.footer.tab?` data-tab="${n.footer.tab}"`:""}>${n.footer.label} →</a></div>`:"";a.innerHTML=`
      <div class="dash-block-hd" style="color:${n.color}">
        <span style="display:flex;align-items:center;gap:6px"><i class="bi ${n.icon}"></i> ${n.title}</span>
        <button class="dash-menu-btn" data-wid="${i}" title="Options" aria-label="Options">···</button>
      </div>
      <div class="dash-block-body" id="dblock-${i}"></div>
      ${s}`,e.appendChild(a),n.render(a.querySelector(`#dblock-${i}`))}),e.querySelectorAll(".dash-menu-btn").forEach(i=>{i.addEventListener("click",n=>{var d,f,r;n.stopPropagation(),(d=document.querySelector(".dash-dropdown"))==null||d.remove();const a=i.dataset.wid,s=document.createElement("div");s.className="dash-dropdown";const c=a==="irrigations"?`
        <button class="dash-dd-item" data-action="set-vol">Définir le volume limité et le débit</button>`:"";s.innerHTML=`${c}<button class="dash-dd-item dash-dd-remove" data-action="remove" data-wid="${a}">Retirer le widget</button>`;const l=i.getBoundingClientRect(),m=e.getBoundingClientRect();s.style.top=`${l.bottom-m.top+4}px`,s.style.right=`${m.right-l.right}px`,e.style.position="relative",e.appendChild(s),(f=s.querySelector('[data-action="remove"]'))==null||f.addEventListener("click",()=>{s.remove();const o=he().filter(p=>p!==a);ve(o),ue()}),(r=s.querySelector('[data-action="set-vol"]'))==null||r.addEventListener("click",()=>{s.remove(),Vt("vol")}),setTimeout(()=>document.addEventListener("click",()=>s.remove(),{once:!0}),0)})}),e.querySelectorAll(".dash-block-ft-link[data-tab]").forEach(i=>{i.addEventListener("click",n=>{var a;n.preventDefault(),(a=document.querySelector(`.detail-tab-btn[data-pane="tab-${i.dataset.tab}"]`))==null||a.click()})}),Cn(e)}function Ht(e,t=380,i=90){const l=t-28-8,m=i-6-20,d=e.flatMap(g=>g.values);let f=Math.min(...d),r=Math.max(...d);f===r&&(f-=1,r+=1);const o=e[0].values.length,p=g=>(28+g/(o-1)*l).toFixed(1),u=g=>(6+m-(g-f)/(r-f)*m).toFixed(1),h=[.25,.5,.75].map(g=>{const w=(6+g*m).toFixed(1);return`<line x1="28" y1="${w}" x2="${t-8}" y2="${w}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),v=[f,(f+r)/2,r].map(g=>`<text x="25" y="${(+u(g)+3.5).toFixed(0)}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>`).join(""),$=e.map(g=>`<path d="${g.values.map((y,E)=>`${E?"L":"M"}${p(E)},${u(y)}`).join("")}" fill="none" stroke="${g.color}" stroke-width="1.8" stroke-linejoin="round"/>`).join("");return`<svg width="100%" height="${i}" viewBox="0 0 ${t} ${i}" preserveAspectRatio="none">${v}${h}${$}</svg>`}function un(e,t,i,n){const f=(v,$)=>{const g=Math.PI+v*Math.PI,w=Math.PI+$*Math.PI,y=(80+60*Math.cos(g)).toFixed(1),E=(90+60*Math.sin(g)).toFixed(1),b=(80+60*Math.cos(w)).toFixed(1),C=(90+60*Math.sin(w)).toFixed(1);return`M${y},${E} A60,60,0,${$-v>.5?1:0},1,${b},${C}`},r=f(0,1),o=t.filter(v=>v.from<e).map(v=>`<path d="${f(v.from,Math.min(v.to,e))}" fill="none" stroke="${v.color}" stroke-width="12" stroke-linecap="butt"/>`).join(""),p=Math.PI+e*Math.PI,u=(80+60*Math.cos(p)).toFixed(1),h=(90+60*Math.sin(p)).toFixed(1);return`<svg width="160" height="100" viewBox="0 0 160 100">
    <path d="${r}" fill="none" stroke="var(--bdr2)" stroke-width="12" stroke-linecap="butt"/>
    ${o}
    <circle cx="${u}" cy="${h}" r="5" fill="white" stroke="var(--txt3)" stroke-width="1.5"/>
    <text x="80" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="var(--txt)">${n}</text>
    <text x="80" y="96" text-anchor="middle" font-size="9" fill="var(--txt3)">${i}</text>
  </svg>`}function mn(e){const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],n=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],a=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],s=new Date,c=ne.find(o=>o.id===T),l=Ve.find(o=>o.id===(c==null?void 0:c.orgId)),m=(c==null?void 0:c.ville)||(l==null?void 0:l.ville)||"—",d=(o,p)=>{const u=new Date(s);u.setDate(u.getDate()+o);const h=Math.floor((T*7+o*3)%11/2.2);return{lbl:o===0?"Auj.":t[u.getDay()],date:`${u.getDate()} ${i[u.getMonth()]}`,tmax:x(17+p,34+p),tmin:x(4+p,15+p),pluie:h>=3?x(2,18):0,vent:x(10,35),rafales:x(25,70),wi:h}},f=[0,1,2].map(o=>d(o,0)).concat([3,4].map(o=>d(o,-1))),r=o=>`
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
    <div class="w-prev5-grid">${f.map(r).join("")}</div>`}function pn(e){var m;const t=new Date,i=[{label:"Herbicides de contact",seed:7},{label:"Fongicides",seed:3},{label:"Herbicides racinaires",seed:11},{label:"Herbicides systémiques",seed:5}],n=Array.from({length:24},(d,f)=>{const r=new Date(t);return r.setMinutes(0,0,0),r.setHours(r.getHours()+f),r}),a=d=>`${String(d.getHours()).padStart(2,"0")}h`,s=d=>d.toDateString()===t.toDateString()?"Aujourd'hui":"Demain",c=d=>{const f=n.map((p,u)=>(d.seed*17+T*13+u*5)%11<6),r=f.findIndex(p=>p);if(r===-1)return null;let o=r;for(;o+1<f.length&&f[o+1];)o++;return{from:n[r],to:new Date(n[o].getTime()+36e5)}},l=i.map(d=>{const f=c(d);return`<div class="w-weephyt-family-row">
      <span class="w-weephyt-family-label">${d.label}</span>
      ${f?`<span class="w-weephyt-window"><i class="bi bi-check-circle-fill"></i> ${s(f.from)} ${a(f.from)}–${a(f.to)}</span>`:'<span class="w-weephyt-window w-weephyt-window--none">Aucune fenêtre sous 24h</span>'}
    </div>`}).join("");e.innerHTML=`<div class="w-weephyt-wrap">
    <div class="w-weephyt-rows">${l}</div>
    <div class="w-weephyt-actions">
      <button class="w-weephyt-btn w-weephyt-btn--pri" id="w-weephyt-saisir">Saisir un traitement</button>
    </div>
  </div>`,(m=e.querySelector("#w-weephyt-saisir"))==null||m.addEventListener("click",()=>{var d;return(d=window.openJournalModal)==null?void 0:d.call(window,"traitement")})}const Ft=()=>`w-cumuls-state-${T}`;function Dt(){try{return JSON.parse(localStorage.getItem(Ft()))||{}}catch{return{}}}function Be(e){const t=Dt();localStorage.setItem(Ft(),JSON.stringify({...t,...e}))}function Ie(e){const t=F.filter(o=>M.linkedSensorIds.includes(o.id)),i=new Set(t.flatMap(o=>(q[o.model]||[]).map(p=>p.id))),n=`${new Date().getFullYear()}-01-01`,a=Dt(),s=new Set(a.hidden||[]),c=a.dates||{},l=a.cfg||{},m=[{id:"etp",label:"Évapotranspiration",value:R(20,80).toFixed(1),unit:"mm",color:"#c090e0",icon:"bi-sun",show:!0},{id:"pluie",label:"Pluie",value:x(10,50),unit:"mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy",show:i.has("pluie")},{id:"djc",label:"Degrés jours",value:x(40,180),unit:"DJ",color:"#e07050",icon:"bi-thermometer-half",show:i.has("temp"),cfg:!0,cfgLabel:`${l.djMin??0}–${l.djMax??18}°C`,cfgFields:[{key:"djMin",label:"T min",def:0},{key:"djMax",label:"T max",def:18}]},{id:"hfroid",label:"Heures de froid",value:x(5,40),unit:"h",color:"#0B3A64",icon:"bi-snow",show:i.has("temp"),cfg:!0,cfgLabel:`< ${l.hfSeuil??7.2}°C`,cfgFields:[{key:"hfSeuil",label:"Seuil",def:7.2}]},{id:"humec",label:"Humectation",value:R(2,20).toFixed(1),unit:"h",color:"#78d8a0",icon:"bi-droplet",show:i.has("humec")},{id:"enso",label:"Ensoleillement",value:R(30,90).toFixed(1),unit:"h",color:"#f5c842",icon:"bi-brightness-high",show:!0}].filter(o=>o.show),d=m.filter(o=>!s.has(o.id)),f=m.filter(o=>s.has(o.id)),r=f.length?`<div style="border-top:1px solid var(--bdr2);padding-top:8px;margin-top:8px">
        <div style="font-size:11px;color:var(--txt3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${f.map(o=>`
          <button class="w-cumul-restore" data-cid="${o.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed var(--bdr);border-radius:8px;padding:7px 10px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${o.icon}" style="color:${o.color};font-size:14px;flex-shrink:0"></i>
            <span style="font-size:12px;color:var(--txt);flex:1">${o.label}</span>
            <i class="bi bi-plus-circle" style="color:var(--pri);font-size:14px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"";e.innerHTML=`<div class="w-cumuls-list">${d.map(o=>{const p=c[o.id]||n;return p.split("-").reverse().join("/"),`
      <div class="w-cumul-item">
        <i class="bi ${o.icon} w-cumul-icon" style="color:${o.color}"></i>
        <div class="w-cumul-body">
          <div class="w-cumul-lbl">${o.label}</div>
          <div class="w-cumul-val" style="color:${o.color}">${o.value}<span class="w-cumul-unit"> ${o.unit}</span></div>
          <div class="w-cumul-date">Depuis le <input type="date" class="w-cumul-date-input" data-cid="${o.id}" value="${p}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px">${o.cfg?`<button class="w-cumul-cfg" data-cid="${o.id}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px;line-height:1"><i class="bi bi-gear"></i> ${o.cfgLabel}</button>`:""}</div>
        </div>
        <button class="w-cumul-del" data-cid="${o.id}" title="Retirer">×</button>
      </div>`}).join("")}</div>${r}`,e.querySelectorAll(".w-cumul-del").forEach(o=>{o.addEventListener("click",p=>{p.stopPropagation(),s.add(o.dataset.cid),Be({hidden:[...s]}),Ie(e)})}),e.querySelectorAll(".w-cumul-restore").forEach(o=>{o.addEventListener("click",p=>{p.stopPropagation(),s.delete(o.dataset.cid),Be({hidden:[...s]}),Ie(e)})}),e.querySelectorAll(".w-cumul-date-input").forEach(o=>{o.addEventListener("change",()=>{c[o.dataset.cid]=o.value,Be({dates:c})})}),e.querySelectorAll(".w-cumul-cfg").forEach(o=>{o.addEventListener("click",p=>{var $;p.stopPropagation();const u=o.dataset.cid,h=d.find(g=>g.id===u);if(!(h!=null&&h.cfgFields))return;($=e.querySelector(".w-cumul-cfg-panel"))==null||$.remove();const v=document.createElement("div");v.className="w-cumul-cfg-panel",v.style.gridColumn="1 / -1",v.innerHTML=`<div class="w-cumul-cfg-title">Paramétrer ${h.label}</div>`+h.cfgFields.map(g=>`
          <label class="w-cumul-cfg-row">
            <span>${g.label} (°C)</span>
            <input type="number" class="w-cumul-cfg-inp" data-key="${g.key}" value="${l[g.key]??g.def}" step="0.1">
          </label>`).join("")+'<button class="w-cumul-cfg-ok">OK</button>',o.closest(".w-cumul-item").after(v),v.querySelector(".w-cumul-cfg-ok").addEventListener("click",()=>{v.querySelectorAll(".w-cumul-cfg-inp").forEach(g=>{l[g.dataset.key]=parseFloat(g.value)||0}),Be({cfg:l}),v.remove(),Ie(e)})})})}function fn(e){if(!F.filter(r=>M.linkedSensorIds.includes(r.id)).some(r=>r.model==="T_GEL")){e.innerHTML='<div class="dash-empty">Capteur T_GEL non lié</div>';return}const i=25,n=R(0,5),a=Array.from({length:i},(r,o)=>+(n+o*.18+R(-.8,.8)).toFixed(1)),s=a.map(r=>+(r-R(1,2.5)).toFixed(1)),c=Ht([{values:a,color:"#23B19B"},{values:s,color:"#5E88EC"}],380,100),l=a[i-1],m=s[i-1],d=x(5,8),f=String(Math.floor(Math.random()*60)).padStart(2,"0");e.innerHTML=`<div class="w-gel-wrap">
    <div class="w-gel-legend">
      <span style="color:#23B19B"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sèche</span>
      <span style="color:#5E88EC"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. humide</span>
      <span style="font-size:10px;color:var(--txt3)">12 dernières heures</span>
    </div>
    <div class="w-gel-chart">${c}</div>
    <div class="w-gel-cards">
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. sèche </span><span class="w-gel-card-val" style="color:#23B19B">${l}°C</span></div>
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. humide </span><span class="w-gel-card-val" style="color:#5E88EC">${m}°C</span></div>
    </div>
    <div class="w-gel-meteo">
      <div class="w-gel-meteo-row"><i class="bi bi-sunrise" style="color:#CBCB0B"></i><span>Lever du soleil</span><strong>${d}h${f}</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-cloud" style="color:#8090a0"></i><span>Couverture nuageuse</span><strong>${x(20,80)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i><span>Humidité</span><strong>${x(60,90)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-wind" style="color:#616161"></i><span>Vent moyen</span><strong>${x(5,25)} km/h</strong></div>
    </div>
  </div>`}function hn(e){const t=F.filter(o=>M.linkedSensorIds.includes(o.id));if(!t.some(o=>{const p=q[o.model]||[];return p.some(u=>u.id==="temp")&&p.some(u=>u.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=R(18,30),a=x(40,85),c=+(.611*Math.exp(17.27*n/(n+237.3))*(1-a/100)).toFixed(2),l=Math.min(c/2,1),m=c<.4?"#5b8dd9":c<.8?"#2d9e5f":c<1.2?"#f5a030":"#e07050",d=c<.4?"Transpiration faible":c<.8?"Transpiration optimale":c<1.2?"Forte transpiration":"Stress hydrique",f=[{from:0,to:.2,color:"#5b8dd9"},{from:.2,to:.4,color:"#45b7d1"},{from:.4,to:.6,color:"#2d9e5f"},{from:.6,to:.8,color:"#a0c840"},{from:.8,to:.9,color:"#f5a030"},{from:.9,to:1,color:"#e07050"}],r=t.find(o=>{const p=q[o.model]||[];return p.some(u=>u.id==="temp")&&p.some(u=>u.id==="humidite")});e.innerHTML=`<div class="w-dpv-wrap">
    <div class="w-dpv-gauge" style="color:${m}">${un(l,f,d,c+" kPa")}</div>
    <div class="w-dpv-details">
      <div class="w-dpv-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${n.toFixed(1)} °C</div>
      <div class="w-dpv-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${a} %</div>
    </div>
    ${r?`<div class="w-sensor-src">${ee[r.model]||r.model} · ${r.serial}</div>`:""}
  </div>`}function vn(e){if(!F.filter(o=>M.linkedSensorIds.includes(o.id)).some(o=>{const p=q[o.model]||[];return p.some(u=>u.id==="temp")&&p.some(u=>u.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=R(20,35),a=x(45,90),s=+(n-.55*(1-a/100)*(n-14.5)).toFixed(0),c=s<68?"#2d9e5f":s<72?"#f5c842":s<79?"#f5a030":"#e07050",l=s<68?"Confort":s<72?"Stress léger":s<79?"Stress modéré":"Stress sévère",m=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],d=new Date,f=Array.from({length:3},(o,p)=>{const u=new Date(d);return u.setDate(u.getDate()+p+1),{day:m[u.getDay()],m:x(64,72),j:x(68,80),s:x(62,70)}}),r=o=>o<68?"#2d9e5f":o<72?"#f5c842":"#f5a030";e.innerHTML=`<div class="w-thi-wrap">
    <div class="w-thi-header">
      <div class="w-thi-score" style="color:${c}">
        <div class="w-thi-val">${s}</div>
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
      ${f.map(o=>`<div class="w-thi-fc-row">
        <span class="w-thi-fc-day">${o.day}</span>
        <span class="w-thi-fc-val" style="color:${r(o.m)}">${o.m}</span>
        <span class="w-thi-fc-val" style="color:${r(o.j)}">${o.j}</span>
        <span class="w-thi-fc-val" style="color:${r(o.s)}">${o.s}</span>
      </div>`).join("")}
      <div class="w-thi-fc-legend"><span>Matin</span><span>Journée</span><span>Soir</span></div>
    </div>
  </div>`,e.querySelector(".w-thi-info-btn").addEventListener("click",o=>{o.stopPropagation();const p=e.querySelector(".w-thi-legend");if(p){p.remove();return}const u=document.createElement("div");u.className="w-thi-legend",u.innerHTML=`
      <div class="w-thi-legend-title">Échelle THI</div>
      <div class="w-thi-legend-row" style="color:#2d9e5f"><span class="w-thi-legend-range">&lt; 68</span><span>Confort</span></div>
      <div class="w-thi-legend-row" style="color:#f5c842"><span class="w-thi-legend-range">68 – 71</span><span>Stress léger</span></div>
      <div class="w-thi-legend-row" style="color:#f5a030"><span class="w-thi-legend-range">72 – 78</span><span>Stress modéré</span></div>
      <div class="w-thi-legend-row" style="color:#e07050"><span class="w-thi-legend-range">≥ 79</span><span>Stress sévère</span></div>`,e.querySelector(".w-thi-wrap").insertBefore(u,e.querySelector(".w-thi-details"))})}function bn(e){if(!F.filter(m=>M.linkedSensorIds.includes(m.id)).some(m=>{const d=q[m.model]||[];return d.some(f=>f.id==="temp")&&d.some(f=>f.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=72,a=R(14,22),s=Array.from({length:n},(m,d)=>+(a+6*Math.sin(d/24*2*Math.PI-Math.PI/2)+R(-.5,.5)).toFixed(1)),c=Array.from({length:n},(m,d)=>Math.max(30,Math.min(100,70-15*Math.sin(d/24*2*Math.PI-Math.PI/2)+R(-3,3)))),l=s.map((m,d)=>{const f=c[d]/100,r=17.27,o=237.3,p=Math.log(f)+r*m/(o+m);return+(o*p/(r-p)).toFixed(1)});e.innerHTML=`<div class="w-temprosee-wrap">
    ${Ht([{values:s,color:"#FBAF05"},{values:l,color:"#72B0D8"}],380,100)}
    <div class="w-temprosee-legend">
      <span style="color:#FBAF05"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Température (${s[n-1]}°C)</span>
      <span style="color:#72B0D8"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Point de rosée (${l[n-1]}°C)</span>
      <span style="font-size:10px;color:var(--txt3)">3 derniers jours</span>
    </div>
  </div>`}function gn(e){if(!F.filter(B=>M.linkedSensorIds.includes(B.id)).some(B=>(q[B.model]||[]).some(A=>A.id==="tsol"))){e.innerHTML='<div class="dash-empty">Capteur T. sol requis</div>';return}const n=48,a=R(14,20),s=Array.from({length:n},(B,A)=>+(a+3*Math.sin(A/24*2*Math.PI-Math.PI/2)+R(-.4,.4)).toFixed(1)),c=15,l=22,m=380,d=100,f=28,r=8,o=6,p=20,u=m-f-r,h=d-o-p,v=[...s,c,l],$=Math.min(...v)-1,g=Math.max(...v)+1,w=B=>(f+B/(n-1)*u).toFixed(1),y=B=>(o+h-(B-$)/(g-$)*h).toFixed(1),E=+y(c),b=+y(l),C=[.25,.5,.75].map(B=>{const A=(o+B*h).toFixed(1);return`<line x1="${f}" y1="${A}" x2="${m-r}" y2="${A}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),k=s.map((B,A)=>`${A?"L":"M"}${w(A)},${y(B)}`).join("");e.innerHTML=`<div class="w-tsol-wrap">
    <svg width="100%" height="${d}" viewBox="0 0 ${m} ${d}" preserveAspectRatio="none">
      ${C}
      <rect x="${f}" y="${b.toFixed(1)}" width="${u}" height="${(E-b).toFixed(1)}" fill="rgba(45,158,95,.1)"/>
      <line x1="${f}" y1="${E.toFixed(1)}" x2="${m-r}" y2="${E.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <line x1="${f}" y1="${b.toFixed(1)}" x2="${m-r}" y2="${b.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <path d="${k}" fill="none" stroke="#795548" stroke-width="2" stroke-linejoin="round"/>
      <text x="${f-3}" y="${o+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>
      <text x="${f-3}" y="${o+h+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${$.toFixed(0)}</text>
    </svg>
    <div class="w-tsol-legend">
      <span style="color:#795548"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sol · ${s[n-1]}°C</span>
      <span style="color:#2d9e5f;font-size:10px"><i class="bi bi-square-fill" style="opacity:.3"></i> Zone optimale ${c}–${l}°C</span>
      <span style="font-size:10px;color:var(--txt3)">48 dernières heures</span>
    </div>
  </div>`}function yn(e){const t=(M.crop||S.crop||"").toLowerCase();if(!t.includes("maïs")&&!t.includes("mais")){e.innerHTML='<div class="dash-empty">Culture Maïs requise</div>';return}const i=[{name:"Farmflex 253",target:1320},{name:"DKC 3230",target:1380},{name:"Ronaldinio",target:1290},{name:"Banguy",target:1350}],n=i[T%i.length],a=S.degresJour||x(600,1200),s=Math.min(a/n.target,1),c=Math.max(0,n.target-a),l=new Date,m=Math.round(c/10),d=new Date(l);d.setDate(d.getDate()+Math.max(0,m-5));const f=new Date(l);f.setDate(f.getDate()+m+5);const r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],o=p=>`${p.getDate()} ${r[p.getMonth()]}`;e.innerHTML=`<div class="w-maizy-wrap">
    <div class="w-maizy-title">Récolte prévisionnelle</div>
    <div class="w-maizy-dates">${o(d)} — ${o(f)}</div>
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
  </div>`}function wn(e){const t=(M.crop||S.crop||"").toLowerCase();if(!t.includes("pommier")&&!t.includes("pomme")){e.innerHTML='<div class="dash-empty">Culture Pommier requise</div>';return}const i=new Date,n=new Date(i);n.setDate(n.getDate()-x(2,8));const a=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=f=>`${f.getDate()} ${a[f.getMonth()]}`,c=x(8,24),l=x(80,280),m=l>200?"Élevé":l>120?"Modéré":"Léger",d=l>200?"#e07050":l>120?"#f5a030":"#2d9e5f";e.innerHTML=`<div class="w-tav-wrap">
    <div class="w-tav-ep">Dernier épisode · <strong>${s(n)}</strong></div>
    <div class="w-tav-stats">
      <div class="w-tav-stat"><span class="w-tav-stat-val">${c}h</span><span class="w-tav-stat-lbl">Durée</span></div>
      <div class="w-tav-stat"><span class="w-tav-stat-val">${l} DH</span><span class="w-tav-stat-lbl">Degrés-heures</span></div>
    </div>
    <div class="w-tav-risk" style="color:${d}">
      <i class="bi bi-circle-fill" style="font-size:8px;vertical-align:middle"></i>
      Risque d'infection estimé <strong>${m}</strong>
    </div>
    <a class="w-maizy-link" href="#">Afficher l'historique <i class="bi bi-arrow-right"></i></a>
  </div>`}const qt=[{id:"j7",label:"J-7"},{id:"j1",label:"J-1"},{id:"j0",label:"J0"},{id:"last",label:"Dernières données"}],$n=qt.filter(e=>e.id==="j7"||e.id==="j1"),bt=()=>`w-reservoir-agg-${T}`,gt=()=>`w-profil-reservoir-agg-${T}`;function Rt(e,t="j0"){return localStorage.getItem(e())||t}function Ot(e,t){localStorage.setItem(e(),t)}function Nt(e){const t=S.reserveHydrique||80,i=(S.id*17+13)%41,n={j7:-8,j1:-2,j0:0,last:1},a=Math.min(95,Math.max(15,55+i+(n[e]||0))),s=Math.round(t*a/100);return{rhu:t,pct:a,mm:s}}function zt(e,t=qt){return`<select class="w-reservoir-agg-sel">
    ${t.map(i=>`<option value="${i.id}"${i.id===e?" selected":""}>${i.label}</option>`).join("")}
  </select>`}function _t(e){const t=Rt(bt),{rhu:i,pct:n,mm:a}=Nt(t),s=n>60?"#2d9e5f":n>35?"#e07820":"#e04040";e.innerHTML=`
    <div class="w-bilan-layout">
      ${zt(t)}
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track"><div class="w-bilan-gauge-fill" style="width:${n}%;background:${s}"></div></div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${s}">${a} mm / ${i} mm RFU (${n} %)</span>
          <span>${i} mm</span>
        </div>
      </div>
    </div>`,e.querySelector(".w-reservoir-agg-sel").addEventListener("change",c=>{Ot(bt,c.target.value),_t(e)})}function Wt(e){const t=Rt(gt,"j1"),{pct:i}=Nt(t),n=(S.id*17+13)%41,a=[{label:"10 cm",pct:Math.min(100,Math.max(0,i+n%12-5)),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,Math.max(0,i+n%8)),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,Math.max(0,i-n%10+3)),color:"#a07010"}];e.innerHTML=`
    <div class="w-bilan-layout">
      ${zt(t,$n)}
      <div class="w-bilan-horizons">
        ${a.map(s=>`
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${s.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${s.pct}%;background:${s.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${s.color}">${s.pct} %</span>
          </div>`).join("")}
      </div>
    </div>`,e.querySelector(".w-reservoir-agg-sel").addEventListener("change",s=>{Ot(gt,s.target.value),Wt(e)})}function le(e){e.innerHTML=`<div class="dash-empty" style="padding-top:20px">
    <i class="bi bi-hourglass" style="font-size:20px;opacity:.3;display:block;margin-bottom:6px"></i>
    Widget bientôt disponible
  </div>`}function X(e){return t=>{var o,p;const i=F.filter(u=>M.linkedSensorIds.includes(u.id)),n={"w-station":u=>["P+","PT","SMV","P"].includes(u.model),"w-thygro":u=>u.model==="TH","w-tsol":u=>u.model==="T_MINI","w-anem":u=>u.model==="W","w-pyrano":u=>u.model==="PYRANO","w-lws":u=>u.model==="LWS","w-par":u=>u.model==="PAR","w-capa":u=>u.model.startsWith("CAPA-"),"w-tensio":u=>_.includes(u.model),"w-ec":u=>u.model==="EC"},a=i.find(n[e]||(()=>!1));if(!a){t.innerHTML='<div class="dash-empty">Aucun capteur compatible lié</div>';return}const s=q[a.model]||[],l=({"w-station":()=>{const u=[];return s.some(h=>h.id==="temp")&&u.push({label:"Température",val:x(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"}),s.some(h=>h.id==="pluie")&&u.push({label:"Pluie 24h",val:x(0,14)+" mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy"}),s.some(h=>h.id==="humidite")&&u.push({label:"Humidité",val:x(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}),u},"w-thygro":()=>[{label:"Température",val:x(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"},{label:"Humidité",val:x(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}],"w-tsol":()=>[{label:"Temp. sol",val:x(8,22)+" °C",color:"#795548",icon:"bi-layers"}],"w-anem":()=>[{label:"Vitesse",val:x(0,40)+" km/h",color:"#616161",icon:"bi-wind"},{label:"Direction",val:["N","NE","E","SE","S","SO","O","NO"][x(0,7)],color:"#616161",icon:"bi-compass"}],"w-pyrano":()=>[{label:"Rayonnement",val:x(100,900)+" W/m²",color:"#CBCB0B",icon:"bi-sun"}],"w-lws":()=>[{label:"Humectation",val:R(0,12).toFixed(1)+" h/j",color:"#00887E",icon:"bi-droplet"}],"w-par":()=>[{label:"PPFD",val:x(100,2e3)+" µmol/m²/s",color:"#4CBB17",icon:"bi-brightness-high"}],"w-capa":()=>s.filter(u=>u.id.startsWith("vwc")).slice(0,3).map(u=>({label:u.name,val:x(15,45)+" %vol",color:u.color,icon:"bi-moisture"})),"w-tensio":()=>[{label:"Potentiel hydrique",val:x(10,150)+" kPa",color:"#A6C157",icon:"bi-graph-down"}],"w-ec":()=>[{label:"Conductivité",val:R(.1,3).toFixed(2)+" mS/cm",color:"#2BCDDE",icon:"bi-plug"}]}[e]||(()=>[]))(),m=new Date(Date.now()-Math.floor(5+Math.random()*55)*6e4),d=u=>String(u).padStart(2,"0"),f=`${d(m.getDate())}/${d(m.getMonth()+1)}/${m.getFullYear()} à ${d(m.getHours())}:${d(m.getMinutes())}`;t.innerHTML=`
      <div class="w-sensor-rows">${l.map(u=>`
        <div class="w-sensor-row">
          <i class="bi ${u.icon}" style="color:${u.color};flex-shrink:0"></i>
          <span class="w-sensor-val" style="color:${u.color}">${u.val}</span>
          <span class="w-sensor-lbl">${u.label}</span>
        </div>`).join("")}</div>
      <div class="w-sensor-src">${ee[a.model]||a.model} · ${a.serial}</div>
      <div class="w-sensor-ts">Dernière mesure : ${f}</div>`;const r=(o=t.closest(".dash-block"))==null?void 0:o.querySelector(".dash-block-ft-link");if(r){const u=((p=document.getElementById("time-step"))==null?void 0:p.value)||"1h";r.href=`capteur-graphique.html?sensorId=${a.id}&parcelId=${T}&period=${J}&step=${u}`,r.removeAttribute("data-tab")}}}const yt="#bf5af2";function wt(e){return t=>{const i=e==="pluie"?{color:"#2E75B6",unit:"mm"}:{color:"#7DBDD7",unit:"mm"},n=new Date;n.setHours(0,0,0,0);const a=[];for(let b=-7;b<=7;b++){const C=new Date(n);C.setDate(C.getDate()+b);const k=(T*31+(b+7)*17)%101/101,B=e==="pluie"?k>.72?+(2+k*18).toFixed(1):k>.5?+(k*4).toFixed(1):0:+(1.2+k*4.2).toFixed(1);a.push({d:C,off:b,val:B,isFc:b>0})}const s=Math.max(1,...a.map(b=>b.val)),c=600,l=130,m=14,d=22,f=4,r=4,o=l-m-d,p=(c-f-r)/a.length,u=`w-hist-stripe-${e}`,h=a.findIndex(b=>b.off===0),$=f+h*p+p,g=a.map((b,C)=>{const k=f+C*p,B=Math.max(0,b.val/s*o),A=m+o-B,P=b.off===0?yt:b.isFc?`${i.color}66`:i.color;return`<rect x="${(k+p*.15).toFixed(1)}" y="${A.toFixed(1)}" width="${(p*.7).toFixed(1)}" height="${B.toFixed(1)}" rx="2" fill="${P}"/>`}).join(""),w=a.map((b,C)=>{if(b.off%4!==0)return"";const k=f+C*p+p/2,B=b.off===0?"Auj.":`${b.d.getDate()}/${b.d.getMonth()+1}`;return`<text x="${k.toFixed(1)}" y="${l-6}" font-size="8" text-anchor="middle" fill="var(--txt3)">${B}</text>`}).join(""),y=a.filter(b=>!b.isFc).reduce((b,C)=>b+C.val,0),E=a.filter(b=>b.isFc).reduce((b,C)=>b+C.val,0);t.innerHTML=`
      <div class="w-hist-summary">
        <span class="w-hist-summary-item"><span class="w-hist-dot" style="background:${i.color}"></span>7j : <strong>${y.toFixed(1)} ${i.unit}</strong></span>
        <span class="w-hist-summary-item"><span class="w-hist-dot" style="background:${yt}"></span>Prévision 7j : <strong>${E.toFixed(1)} ${i.unit}</strong></span>
      </div>
      <div class="w-hist-chart-wrap">
        <svg class="w-hist-svg" width="100%" height="100%" viewBox="0 0 ${c} ${l}" preserveAspectRatio="none">
          <defs><pattern id="${u}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
          </pattern></defs>
          <rect x="${$.toFixed(1)}" y="${m}" width="${(c-r-$).toFixed(1)}" height="${o}" fill="url(#${u})"/>
          <line x1="${$.toFixed(1)}" y1="${m}" x2="${$.toFixed(1)}" y2="${m+o}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
          ${g}
          ${w}
        </svg>
      </div>`}}function xn(e){const t=F.filter(v=>M.linkedSensorIds.includes(v.id)),i=t.some(v=>v.model.startsWith("CAPA-")),n=t.some(v=>_.includes(v.model)),a=S.reserveHydrique||80,s=(S.id*17+13)%41,c=Math.min(95,Math.max(20,55+s)),l=Math.round(a*c/100),m=4+s%5-2,d=Math.max(2,Math.min(6,m)),f=Math.round(d*7-l*.3),r=Math.max(0,f),o=c>60?"#2d9e5f":c>35?"#e07820":"#e04040",p=c>60?"Réserve suffisante":c>35?"Réserve à surveiller":"Réserve critique",u=c>60?"bi-check-circle-fill":c>35?"bi-exclamation-circle-fill":"bi-x-circle-fill";if(!i&&!n){e.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:var(--txt3)">
      <i class="bi bi-droplet" style="font-size:24px"></i>
      <div style="font-size:13px;text-align:center">Ajoutez une sonde capacitive ou un tensiomètre pour suivre l'état hydrique</div>
    </div>`;return}const h=i?[{label:"10 cm",pct:Math.min(100,c+s%12-5),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,c+s%8),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,c-s%10+3),color:"#a07010"}]:[{label:"Potentiel",pct:c,color:"#5b8dd9"}];e.innerHTML=`
    <div class="w-bilan-layout">
      <div class="w-bilan-status" style="color:${o}">
        <i class="bi ${u}"></i> ${p}
      </div>
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track">
          <div class="w-bilan-gauge-fill" style="width:${c}%;background:${o}"></div>
        </div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${o}">${l} mm / ${a} mm RFU (${c} %)</span>
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
          <div class="w-bilan-kpi-val" style="color:${r>0?"#0172A4":"var(--ok)"}">
            ${r>0?`${r} <span class="w-irrig-unit">mm</span>`:'<i class="bi bi-check2" style="font-size:14px"></i>'}
          </div>
        </div>
      </div>
    </div>`}function Vt(e){const t=document.createElement("div");if(t.className="journal-form-overlay",e==="vol"){const i=Ce(T).volumeMaxM3??"",n=Ce(T).debitM3h??"";t.innerHTML=`
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
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const a=t.querySelector("#iwa-vol-inp").value,s=t.querySelector("#iwa-debit-inp").value;se(T,{volumeMaxM3:a!==""?parseInt(a):null,debitM3h:s!==""?parseFloat(s):null}),t.remove(),document.querySelector("#dblock-irrigations")&&Me(document.querySelector("#dblock-irrigations"))}}else{const i=M.irrigation||"";t.innerHTML=`
      <div class="journal-form-modal">
        <div class="journal-form-title">Type d'irrigation</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="iwa-type-sel" class="journal-form-input">
            ${Mt.map(n=>`<option${n===(i||"Non renseigné")?" selected":""}>${n}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const n=t.querySelector("#iwa-type-sel").value;z({irrigation:n}),t.remove(),document.querySelector("#dblock-irrigations")&&Me(document.querySelector("#dblock-irrigations"))}}t.addEventListener("click",i=>{i.target===t&&t.remove()})}function Gt(e,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",s=>{s.target===i&&n()}),i.querySelector("#irr-cf-close").addEventListener("click",n),i.querySelector("#irr-cf-cancel").addEventListener("click",n),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),t()})}function Yt(e,t){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const i=document.createElement("div");i.className="irr-save-confirm",i.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(s=>`<div>${s}</div>`).join("")}</div>
      <a href="irrigation.html?plot=${T}" class="irr-save-confirm-link">Gérer les irrigations de toutes mes parcelles &gt;</a>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",s=>{s.target===i&&n()}),i.querySelector("#irr-confirm-close").addEventListener("click",n)}function $t(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Date</label>
        <input type="date" id="irr-m-s-date" class="journal-form-input" value="${oe}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Quantité (mm)</label>
        <input type="number" id="irr-m-s-qty" class="journal-form-input" value="10" min="1">
      </div>
      <div class="journal-form-actions">
        <button class="btn-secondary" id="irr-m-s-cancel">Annuler</button>
        <button id="irr-m-s-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#irr-m-s-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-s-save").onclick=()=>{const i=t.querySelector("#irr-m-s-date").value,n=parseInt(t.querySelector("#irr-m-s-qty").value)||0;if(!i||!n)return;const a=i>oe,s=()=>{O.push({iso:i,mm:n,real:!a,plotId:S.id,fromStrategy:!1}),St(),t.remove(),Me(e),Yt("Irrigation enregistrée",[`Date : ${ze(i)}`,`Quantité : ${n} mm`])},c=O.filter(l=>l.plotId===S.id&&l.iso===i);if(c.length){Gt(c.length,()=>{O.splice(0,O.length,...O.filter(l=>!(l.plotId===S.id&&l.iso===i))),s()});return}s()}}function xt(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une saison d'irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Début</label>
        <input type="date" id="irr-m-sa-debut" class="journal-form-input" value="${oe}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Fin</label>
        <input type="date" id="irr-m-sa-fin" class="journal-form-input" value="${di(oe,120)}">
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
    </div>`,document.body.appendChild(t);const i=()=>{const n=t.querySelector("#irr-m-sa-debut").value,a=t.querySelector("#irr-m-sa-fin").value,s=parseInt(t.querySelector("#irr-m-sa-qty").value)||0,c=parseInt(t.querySelector("#irr-m-sa-freq").value)||0,l=t.querySelector("#irr-m-sa-preview");if(!n||!a||c<=0){l.textContent="—";return}let m=0,d=new Date(n),f=new Date(a);for(;d<=f&&m<200;)m++,d.setDate(d.getDate()+c);if(m>0){const r=S.area>0?Math.round(m*s*S.area*10):0,o=r>0?` · ${r.toLocaleString("fr-FR")} m³`:"";l.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${m} irrigations · ${m*s} mm${o}</span>`}else l.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'};i(),t.querySelector("#irr-m-sa-debut").addEventListener("change",i),t.querySelector("#irr-m-sa-fin").addEventListener("change",i),t.querySelector("#irr-m-sa-qty").addEventListener("input",i),t.querySelector("#irr-m-sa-freq").addEventListener("input",i),t.addEventListener("click",n=>{n.target===t&&t.remove()}),t.querySelector("#irr-m-sa-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-sa-save").onclick=()=>{const n=t.querySelector("#irr-m-sa-debut").value,a=t.querySelector("#irr-m-sa-fin").value,s=parseInt(t.querySelector("#irr-m-sa-qty").value)||10,c=parseInt(t.querySelector("#irr-m-sa-freq").value)||7;if(!n||!a)return;const l=[];let m=new Date(n),d=new Date(a);for(;m<=d&&l.length<200;)l.push(new Date(m)),m.setDate(m.getDate()+c);const f=Ut(),r=()=>{l.forEach(p=>{const u=p.toISOString().slice(0,10);O.push({iso:u,mm:s,real:u<=oe,plotId:S.id,fromStrategy:!0,seasonId:f})}),St(),t.remove(),Me(e),Yt("Saison enregistrée",[`Début : ${ze(n)} · Fin : ${ze(a)}`,`${l.length} irrigations · ${s} mm · tous les ${c} j`])},o=O.filter(p=>p.plotId===S.id&&p.iso>=n&&p.iso<=a);if(o.length){Gt(o.length,()=>{O.splice(0,O.length,...O.filter(p=>!(p.plotId===S.id&&p.iso>=n&&p.iso<=a))),r()});return}r()}}function Me(e){var u,h,v,$,g;const t=O.filter(w=>w.plotId===S.id),i=t.filter(w=>w.real),n=t.filter(w=>!w.real),a=i.reduce((w,y)=>w+y.mm,0),s=n.reduce((w,y)=>w+y.mm,0),c=a+s,l=M.irrigation||S.irrigation;let m="";if(t.some(w=>w.fromStrategy)){const w=[...t].sort((C,k)=>C.iso.localeCompare(k.iso)),y=w[w.length-1],E=w[w.length-2],b=E?Math.round((new Date(y.iso)-new Date(E.iso))/864e5):null;m=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${y.mm} mm</strong>${b?` tous les <strong>${b} jours</strong>`:""}.</div>
      </div>`}const f=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-act-saisie">+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" type="button" id="w-irrig-act-saison">↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`,o=l&&!new Set(["Non irrigué","Non renseigné",""]).has(l),p=()=>{var y;const w=(y=e.closest(".dash-block"))==null?void 0:y.querySelector(".dash-block-ft-link");w&&(w.textContent="Voir détails →")};if(!o){e.innerHTML=`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez renseigner un type d'irrigation sur cette parcelle.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-set-type" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,(u=e.querySelector("#w-irrig-set-type"))==null||u.addEventListener("click",()=>Vt("type")),p();return}if(!t.length){e.innerHTML=`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3)">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${f}
      </div>`,(h=e.querySelector("#w-irrig-act-saisie"))==null||h.addEventListener("click",()=>$t(e)),(v=e.querySelector("#w-irrig-act-saison"))==null||v.addEventListener("click",()=>xt(e)),p();return}e.innerHTML=`
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
          <div class="w-irrig-kpi-val" style="color:var(--txt3)">${c} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${m}
      ${f}
    </div>`,($=e.querySelector("#w-irrig-act-saisie"))==null||$.addEventListener("click",()=>$t(e)),(g=e.querySelector("#w-irrig-act-saison"))==null||g.addEventListener("click",()=>xt(e)),p()}function Cn(e){let t=null;e.querySelectorAll(".dash-block").forEach(i=>{i.addEventListener("dragstart",n=>{t=i,n.dataTransfer.effectAllowed="move",setTimeout(()=>i.classList.add("dash-drag-ghost"),0)}),i.addEventListener("dragend",()=>{i.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(n=>n.classList.remove("dash-drag-over")),t=null,ve([...e.querySelectorAll(".dash-block")].map(n=>n.dataset.id))}),i.addEventListener("dragover",n=>{n.preventDefault(),!(!t||i===t)&&(n.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),i.classList.add("dash-drag-over"))}),i.addEventListener("dragleave",()=>{i.classList.remove("dash-drag-over")}),i.addEventListener("drop",n=>{if(n.preventDefault(),!t||i===t)return;i.classList.remove("dash-drag-over");const a=[...e.querySelectorAll(".dash-block")],s=a.indexOf(t),c=a.indexOf(i);s<c?i.after(t):i.before(t)})})}
