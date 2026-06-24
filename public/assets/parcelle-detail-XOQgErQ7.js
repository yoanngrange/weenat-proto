import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{p as oe}from"./plots-DhtWL7s_.js";import{s as F}from"./sensors-CRadjF8G.js";import{o as Ze}from"./orgs-DnFmvGlp.js";import{m as re}from"./members-Cr98hVG_.js";import{u as Bt}from"./breadcrumb-CzFWtd6d.js";import{m as ai,d as le,c as je}from"./store-CX9wca99.js";import{I as N,g as si,s as jt}from"./irrigations-C22Dtsoo.js";import{S as oi,a as _e,E as ri,I as Tt}from"./constants-Dur9W-JX.js";const At=new URLSearchParams(window.location.search),P=parseInt(At.get("id")),E=oe.find(e=>e.id===P);function x(e,t){return Math.floor(Math.random()*(t-e+1))+e}function R(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))}const Qe=[{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul d'ETP",unit:"mm"},isCumul:!1,chartType:"bar"},{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#CBCB0B",base:()=>x(0,900),cumul:{label:"Énergie",unit:"Wh/m²"},isCumul:!1},{id:"temp_rosee",name:"Température de rosée",unit:"°C",color:"#72B0D8",base:()=>x(2,16),isCumul:!1}],li={id:"irrigation",name:"Irrigation",unit:"mm",color:"#FF8C00",base:()=>0,isCumul:!0,chartType:"bar",isIrrigation:!0},q={"P+":[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>x(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>x(10,28),cumul:{label:"Cumul de degrés jour",unit:"DJ"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>x(40,90)}],PT:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>x(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>x(10,28),cumul:{label:"Cumul de degrés jour",unit:"DJ"}},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],P:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>x(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"}],SMV:[{id:"pluie",name:"Pluie",unit:"mm",color:"#2E75B6",base:()=>x(0,8),cumul:{label:"Cumul de pluie",unit:"mm"},isCumul:!0,chartType:"bar"},{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>x(10,28),cumul:{label:"Cumul de degrés jour",unit:"DJ"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>x(40,90)},{id:"etp",name:"Évapotranspiration (ETP)",unit:"mm/j",color:"#7DBDD7",base:()=>R(.5,5),cumul:{label:"Cumul ETP",unit:"mm"},isCumul:!1,chartType:"bar"}],TH:[{id:"temp",name:"Température",unit:"°C",color:"#FBAF05",base:()=>x(10,28),cumul:{label:"Cumul de degrés jour",unit:"DJ"}},{id:"humidite",name:"Humidité",unit:"%",color:"#5B12A4",base:()=>x(40,90)}],"CHP-15/30":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>x(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],"CHP-30/60":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>x(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],"CHP-60/90":[{id:"pothydr",name:"Potentiel hydrique",unit:"kPa",color:"#A6C157",base:()=>x(10,150)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],"CAPA-30-3":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>x(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>x(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>x(15,45)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],"CAPA-60-6":[{id:"vwc10",name:"Teneur en eau du sol 10 cm",unit:"%vol",color:"#105200",base:()=>x(15,45)},{id:"vwc20",name:"Teneur en eau du sol 20 cm",unit:"%vol",color:"#8C5E82",base:()=>x(15,45)},{id:"vwc30",name:"Teneur en eau du sol 30 cm",unit:"%vol",color:"#46DA82",base:()=>x(15,45)},{id:"vwc40",name:"Teneur en eau du sol 40 cm",unit:"%vol",color:"#949494",base:()=>x(17,43)},{id:"vwc50",name:"Teneur en eau du sol 50 cm",unit:"%vol",color:"#870021",base:()=>x(18,42)},{id:"vwc60",name:"Teneur en eau du sol 60 cm",unit:"%vol",color:"#F608C2",base:()=>x(18,42)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],T_MINI:[{id:"tsol",name:"Température du sol",unit:"°C",color:"#795548",base:()=>x(8,22)}],LWS:[{id:"humec",name:"Humectation foliaire",unit:"h",color:"#00887E",base:()=>x(0,12)}],T_GEL:[{id:"tseche",name:"Temp. sèche",unit:"°C",color:"#23B19B",base:()=>x(-2,12)},{id:"thumide",name:"Temp. humide",unit:"°C",color:"#5E88EC",base:()=>x(-4,10)}],W:[{id:"_vent",name:"Vent",unit:"km/h · direction",color:"#7bc4b0",isWindComposite:!0,base:()=>x(0,40)}],EC:[{id:"ec",name:"Conductivité",unit:"mS/cm",color:"#f0a030",base:()=>R(.1,3)},{id:"tsol",name:"Température du sol",unit:"°C",color:"#bb8fce",base:()=>x(8,22)}],PYRANO:[{id:"rayonnement",name:"Rayonnement",unit:"W/m²",color:"#f5c842",base:()=>x(0,900),cumul:{label:"Énergie",unit:"Wh/m²"}}],PAR:[{id:"par",name:"Densité de flux de photons photosynthétiques",unit:"µmol/m²/s",color:"#c47a00",base:()=>x(0,2e3)}]},V=["CHP-15/30","CHP-30/60","CHP-60/90"],Ye=[{name:"Tensiomètre (CHP)",models:new Set(["CHP-15/30","CHP-30/60","CHP-60/90"])},{name:"Sonde capacitive (CAPA)",models:new Set(["CAPA-30-3","CAPA-60-6"])},{name:"Sonde fertirrigation (EC)",models:new Set(["EC"])},{name:"Thermomètre de sol (T_MINI)",models:new Set(["T_MINI"])}];function Je(e){return Ye.find(t=>t.models.has(e))||null}const ci={"CAPA-30-3":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"}],"CAPA-60-6":[{depth:10,label:"10 cm",vwcColor:"#105200",tsolColor:"#FFA040"},{depth:20,label:"20 cm",vwcColor:"#8C5E82",tsolColor:"#E07050"},{depth:30,label:"30 cm",vwcColor:"#46DA82",tsolColor:"#A04030"},{depth:40,label:"40 cm",vwcColor:"#949494",tsolColor:"#804828"},{depth:50,label:"50 cm",vwcColor:"#870021",tsolColor:"#603818"},{depth:60,label:"60 cm",vwcColor:"#F608C2",tsolColor:"#402810"}]},nt=["CAPA-30-3","CAPA-60-6"],ne={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function di(e,t=null,i=null,n=null){const a=Math.max(2,Math.min(200,Math.floor(me()/Se()))),s=Array.from({length:a},()=>x(5,35)),l=s.map(T=>Math.min(T+x(3,18),80)),u=Array.from({length:a},()=>x(0,359)),d=600,c=200,m=46,r=16,o=16,f=28,h=d-m-r,p=c-o-f,b=Math.ceil(Math.max(...l)/10)*10||50,w=T=>m+T/Math.max(a-1,1)*h,g=T=>o+p-T/b*p,$=l.map((T,I)=>`${w(I).toFixed(1)},${g(T).toFixed(1)}`).join("L"),C=[...s].reverse().map((T,I)=>`${w(a-1-I).toFixed(1)},${g(T).toFixed(1)}`).join("L"),B=`M${$}L${C}Z`,v=s.map((T,I)=>`${I?"L":"M"}${w(I).toFixed(1)},${g(T).toFixed(1)}`).join(""),y=[.25,.5,.75].map(T=>{const I=(o+p-T*p).toFixed(1);return`<line x1="${m}" y1="${I}" x2="${d-r}" y2="${I}" stroke="rgba(0,0,0,.06)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),S=[0,.5,1].map(T=>{const I=o+p-T*p;return`<text x="${m-4}" y="${(I+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--txt3)">${Math.round(T*b)}</text>`}).join(""),M=`<line x1="${m}" y1="${o+p}" x2="${d-r}" y2="${o+p}" stroke="var(--bdr2)" stroke-width="1"/>`,j=Math.max(1,Math.floor(a/6));let A="";for(let T=0;T<a;T+=j){const I=(a-1-T)/Math.max(a-1,1)*me();A+=`<text x="${w(T).toFixed(1)}" y="${(o+p+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${fe(I)}</text>`}const H=Math.max(1,Math.round(a/25)),J=[];for(let T=0;T<a;T+=H){const I=w(T).toFixed(1),D=(o+p*.35).toFixed(1);J.push(`<g transform="translate(${I},${D}) rotate(${u[T]})">
      <line x1="0" y1="6" x2="0" y2="-6" stroke="#3a7090" stroke-width="1.5" opacity=".7"/>
      <polygon points="0,-9 -2.5,-4 2.5,-4" fill="#3a7090" opacity=".7"/>
    </g>`)}const U=document.createElement("div");U.className="chart-card",n&&(U.dataset.cardKey=n,U.draggable=!0);const O=t?`<span class="chart-card-source">${t}</span>`:"",ae=i!=null?`<span class="chart-card-emission">il y a ${i} min</span>`:"";U.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:#7bc4b0">Vent</span>
      <span class="chart-card-unit">km/h · direction</span>
      <div class="chart-card-meta">${O}${ae}</div>
    </div>
    <svg width="100%" height="${c}" viewBox="0 0 ${d} ${c}" preserveAspectRatio="none">
      ${S}${y}${M}${A}
      <path d="${B}" fill="#7bc4b0" opacity=".18"/>
      <path d="${v}" fill="none" stroke="#7bc4b0" stroke-width="2" stroke-linejoin="round"/>
      ${J.join("")}
    </svg>
    <div class="wind-chart-legend">
      <span><i class="bi bi-dash" style="color:#7bc4b0;font-size:16px;vertical-align:middle"></i> Vitesse</span>
      <span><span class="wind-legend-band"></span> Rafales</span>
      <span><svg width="12" height="14" viewBox="-6 -7 12 14" style="vertical-align:middle"><line x1="0" y1="5" x2="0" y2="-5" stroke="#3a7090" stroke-width="1.5"/><polygon points="0,-7 -2.5,-2 2.5,-2" fill="#3a7090"/></svg> Direction</span>
    </div>`,e.appendChild(U)}const ui=["Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","IRRÉ-LIS Mono-Culture","Movida GrapeVision","DeciTrait"];let k={};function mi(){const e=je(P);if(k={...E,...e},!k.linkedSensorIds){const n=F.filter(a=>a.parcelIds.includes(P)).map(a=>a.id);k.linkedSensorIds=e.linkedSensorIds??n}k.integrations||(k.integrations=[...E.integrations||[]]),k.alertes||(k.alertes=[]);const t=F.filter(n=>k.linkedSensorIds.includes(n.id)),i=Ye.find(n=>t.some(a=>n.models.has(a.model)));i&&Ye.some(a=>a!==i&&t.some(s=>a.models.has(s.model)))&&(k.linkedSensorIds=k.linkedSensorIds.filter(a=>{const s=F.find(u=>u.id===a);if(!s)return!0;const l=Je(s.model);return!l||l===i}),le(P,{linkedSensorIds:k.linkedSensorIds}))}function W(e){Object.assign(k,e),Object.assign(E,e),le(P,e)}let K="j7j2",ye=null,we=null;const pi=new Set(["pluie","temp","humidite","pothydr","etp","temp_rosee","rayonnement","_vent"]),fi={j7j2:2};function me(){const e={"1d":1440,hier:1440,"3d":4320,"7d":10080,j7j2:10080,"30d":43200,"365d":525600};return K==="custom"&&ye&&we?Math.max(60,Math.round((we-ye)/6e4)):e[K]??10080}function Se(){var t;const e=((t=document.getElementById("time-step"))==null?void 0:t.value)||"1h";return{max:15,"1h":60,"1d":1440,"1w":10080,"1mo":43200}[e]??60}function hi(e){return e==="365d"?"1mo":e==="30d"?"1w":e==="7d"||e==="j7j2"?"1d":"1h"}function vi(){const e=me(),t=Se();return Math.max(2,Math.min(200,Math.floor(e/t)))}function bi(){const e=fi[K]||0;if(!e)return 0;const t=Se();return Math.max(1,Math.round(e*1440/t))}const at={Cumuls:"cumuls",Pluie:"pluie-hist",Évapotranspiration:"etp-hist","Maï'zy":"maizy","Suivi de culture":"suivi-culture",Traitements:"weephyt",Decitrait:"decitrait","Tavelure Pomme":"tavelure",DPV:"dpv",THI:"thi","Température de rosée":"temp-rosee","Température du sol":"temp-sol","Rayonnement solaire":"w-pyrano",Gel:"gel","Prévisions à 5 jours":"previsions-5j","Prévisions à 6 heures":"previsions-6h","Prévisions du jour":"previsions-jour","Prévisions de tensiométrie":"previsions-tensio",Anémomètre:"w-anem","Capteur d'humectation foliaire":"w-lws","Capteur PAR":"w-par",Pyranomètre:"w-pyrano","Station météo":"w-station","Station Météo Virtuelle":"w-station","Thermomètre de sol":"w-tsol","Thermomètre-Hygromètre":"w-thygro","Bilan hydrique":"bilan",Irrigations:"irrigations","Sonde capacitive":"w-capa",Tensiomètre:"w-tensio","Sonde de fertirrigation":"w-ec","Profil capteurs":"profil-capteurs","Niveau de réservoir en eau utilisable":"niveau-reservoir","Profil de niveau de réservoir":"profil-reservoir"},gi=[{title:"Cumuls",items:["Cumuls","Pluie","Évapotranspiration"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Traitements","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire","Gel"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Irrigation",items:["Bilan hydrique","Irrigations","Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]}];function yi(){const e=F.filter(c=>k.linkedSensorIds.includes(c.id)),t=new Set(e.map(c=>c.model)),i=(k.crop||E.crop||"").toLowerCase(),n=$e(),a=e.some(c=>{const m=q[c.model]||[];return m.some(r=>r.id==="temp")&&m.some(r=>r.id==="humidite")}),s=e.some(c=>(q[c.model]||[]).some(m=>m.id==="tsol")),l=e.some(c=>(q[c.model]||[]).some(m=>m.cumul)),u=c=>at[c]?c==="Gel"?t.has("T_GEL"):c==="Maï'zy"?i.includes("maïs")||i.includes("mais"):c==="Tavelure Pomme"?i.includes("pommier"):c==="Station météo"?t.has("P+")||t.has("PT")||t.has("P"):c==="Station Météo Virtuelle"?t.has("SMV"):c==="Thermomètre-Hygromètre"?t.has("TH"):c==="Thermomètre de sol"?t.has("T_MINI")||s:c==="Anémomètre"?t.has("W"):c==="Pyranomètre"||c==="Rayonnement solaire"?t.has("PYRANO"):c==="Capteur d'humectation foliaire"?t.has("LWS"):c==="Capteur PAR"?t.has("PAR"):c==="Bilan hydrique"?[...t].some(r=>r.startsWith("CAPA-"))||[...t].some(r=>V.includes(r)):c==="Irrigations"?!0:c==="Sonde capacitive"?[...t].some(r=>r.startsWith("CAPA-")):c==="Tensiomètre"?[...t].some(r=>V.includes(r)):c==="Sonde de fertirrigation"?t.has("EC"):c==="DPV"||c==="THI"||c==="Température de rosée"?a:c==="Température du sol"?s:c==="Cumuls"?l:!0:!0,d=document.createElement("div");d.className="modal add-modal",d.innerHTML=`
    <div class="add-modal-content" style="max-width:520px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter un widget</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      ${gi.map(c=>{const m=c.items.filter(u);return m.length?`
        <div class="add-modal-section">
          <div class="add-modal-section-label">${c.title}</div>
          <div class="wcat-list">
            ${m.map(r=>{const o=at[r],f=o&&n.includes(o);return`
              <div class="wcat-item">
                <span>${r}</span>
                ${f?'<span class="wcat-already"><i class="bi bi-check2"></i> Ajouté</span>':`<button class="wcat-add-btn" type="button" data-wid="${o}"><i class="bi bi-plus-circle"></i> Ajouter</button>`}
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")}
    </div>`,d.addEventListener("click",c=>{c.target===d&&d.remove()}),d.querySelector(".add-modal-close").addEventListener("click",()=>d.remove()),d.querySelectorAll(".wcat-add-btn").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.wid;if(!m)return;const r=$e();r.includes(m)||(r.push(m),xe(r)),d.remove(),ge()})}),document.body.appendChild(d)}const Fe=`weenat-journal-${P}`,ce=new Date().toISOString().slice(0,10);function wi(e,t){const i=new Date(e);return i.setDate(i.getDate()+t),i.toISOString().slice(0,10)}function Ue(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,i,n]=e.split("-");return`${parseInt(n)} ${t[parseInt(i)-1]} ${e.split("-")[0]}`}const $i=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"];function xi(){const e=E,t=[],i=(u,d,c="Système")=>t.push({id:"auto-"+u+d.slice(0,8),type:"modification",date:u,texte:d,auteur:c}),n=e.orgId===1,a=n?"Jean-Michel Dutilleul":"Thomas Bertrand",s=n?"Alexandre Bernard":"Sophie Dubois";return i("2024-01-01","Création de la parcelle",a),e.crop&&i("2024-03-15",`Culture définie : ${e.crop}`,a),e.texture&&i("2024-03-15",`Texture de sol définie : ${e.texture}`,a),e.irrigation&&i("2024-04-01",`Type d'irrigation : ${e.irrigation}`,a),F.filter(u=>k.linkedSensorIds.includes(u.id)).forEach(u=>i("2024-06-10",`Liaison capteur : ${ne[u.model]||u.model} · ${u.serial}`,s)),i("2026-03-01","Début de cycle cultural 2026",a),t}const Si=new Set(["culture","stade","irrigation","cycle"]),st=[["BBCH 21 — Tallage actif","BBCH 30 — Début montaison","BBCH 45 — Gonflement épis"],["BBCH 13 — 3 feuilles étalées","BBCH 31 — Début élongation","BBCH 59 — Fin de floraison"],["BBCH 09 — Levée","BBCH 40 — Développement des organes de récolte","BBCH 49 — Taille de récolte atteinte"],["BBCH 15 — 5 feuilles étalées","BBCH 51 — Apparition inflorescence","BBCH 69 — Fin de floraison"]],ot=["Apache","RGT Bilboa","Soissons","Fixion","Forum","Allez-y"],rt=["Mise en place de la saison 2026","Démarrage de la nouvelle campagne","Lancement de la saison sur cette parcelle"],lt=["Développement homogène sur la parcelle","Légère hétérogénéité en bordure, sous surveillance","Bon développement, conforme aux attentes"];function Xe(e,t){const i=E.crop||"Blé tendre",n=E.id%100,a=st[E.id%st.length],s=ot[E.id%ot.length],l=E.id%6;return[{id:17434656e5,type:"cycle",date:ee(te(61),l),auteur:e,action:"début",culture:i,annee:"2026",texte:rt[n%rt.length]},{id:17438976e5,type:"culture",date:ee(te(56),l),auteur:e,action:"modification",culture:i,variete:s,texte:"Culture confirmée pour la saison 2026"},{id:17443296e5,type:"stade",date:ee(te(50),l),auteur:e,stade:a[0],culture:i,texte:""},{id:17453664e5,type:"stade",date:ee(te(38),l),auteur:t,stade:a[1],culture:i,texte:""},{id:17460576e5,type:"stade",date:ee(te(28),l),auteur:t,stade:a[2],culture:i,texte:lt[n%lt.length]}]}function ee(e,t){const i=new Date(e+"T00:00:00");return i.setDate(i.getDate()+t),i.toISOString().slice(0,10)}function te(e){const t=new Date;return t.setHours(0,0,0,0),t.setDate(t.getDate()-e),t.toISOString().slice(0,10)}function Ci(e){return N.filter(t=>t.plotId===e&&t.real).map(t=>({id:`auto-irrig-${e}-${t.iso}-${t.mm}`,type:"irrigation",date:t.iso,volume:t.mm,unite:"mm",methode:E.irrigation||"",texte:"Irrigation effectuée.",auteur:"Système",_auto:!0}))}const Le=[{cible:"Pucerons",produit:"Karate Zeon 10 CS",dose:"0,1 L/ha",obs1:"Observation de quelques pucerons sur les feuilles basses. À surveiller.",obs2:"peu de pucerons visibles, situation sous contrôle."},{cible:"Mildiou",produit:"Bordeaux mixture",dose:"2 kg/ha",obs1:"Taches suspectes observées sur les feuilles basses, conditions humides.",obs2:"progression stoppée, feuillage sain."},{cible:"Limaces",produit:"Métaldéhyde",dose:"5 kg/ha",obs1:"Dégâts de limaces constatés en bordure de parcelle après les pluies.",obs2:"dégâts limités, population réduite."},{cible:"Altises",produit:"Karaté K",dose:"75 mL/ha",obs1:"Présence d'altises sur jeunes plants, seuil de nuisibilité approché.",obs2:"population sous contrôle, reprise normale."}],It=17481e8;function Lt(e,t){const i=E.id%Le.length,n=Le[i],a=Le[(i+1)%Le.length],s=E.id%6,l=ee(te(14),s),u=ee(te(5),s);return[{id:17469216e5,type:"note",category:"Observation générale",date:ee(te(19),s),auteur:e,texte:n.obs1},{id:17473536e5,type:"traitement",date:l,auteur:t,texte:"Application conforme aux conditions météo. Vent < 2 m/s.",produit:n.produit,dose:n.dose,cible:n.cible},{id:17477856e5,type:"note",category:"Observation générale",date:ee(te(9),s),auteur:e,texte:`Suite traitement du ${l.split("-").reverse().slice(0,2).join("/")} : ${n.obs2}`},{id:1748e9,type:"traitement",date:u,auteur:t,texte:"Application conforme aux conditions météo. Vent < 2 m/s.",produit:a.produit,dose:a.dose,cible:a.cible},{id:It,type:"note",category:"Observation générale",date:ee(te(2),s),auteur:e,texte:`Suite traitement du ${u.split("-").reverse().slice(0,2).join("/")} : ${a.obs2}`}]}function Mi(e,t,i){const n=e.find(l=>l.id===It);if(!n||Math.round((Date.now()-new Date(n.date+"T00:00:00").getTime())/864e5)<=20)return e;const s=new Map([...Lt(t,i),...Xe(t,i)].map(l=>[l.id,l]));return e.map(l=>s.get(l.id)||l)}function ke(){const e=E.orgId===1,t=e?"Jean-Michel Dutilleul":"Thomas Bertrand",i=e?"Marie Martin":"Sophie Dubois";try{const a=localStorage.getItem(Fe);if(a){let s=JSON.parse(a);if(Array.isArray(s)){const l=s.some(d=>Si.has(d.type));l||(s=[...Xe(t,i),...s]);const u=Mi(s,t,i);return(!l||u!==s)&&localStorage.setItem(Fe,JSON.stringify(u)),u}}}catch{}const n=[...Lt(t,i),...Xe(t,i)];return localStorage.setItem(Fe,JSON.stringify(n)),n}function Pt(e){localStorage.setItem(Fe,JSON.stringify(e))}function et(){const e=document.getElementById("journal-container");if(!e)return;const t=ke(),i=[...xi(),...Ci(P)],n=[...t,...i].sort((r,o)=>o.date.localeCompare(r.date)),a=r=>{const[o,f,h]=r.split("-");return`${h}/${f}/${o}`},s={note:{label:"Note",icon:"bi-pencil",dotCls:"note",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotCls:"traitement",badgeCls:"traitement"},modification:{label:"Modification",icon:"bi-pencil-square",dotCls:"modification",badgeCls:"modification"},culture:{label:"Culture",icon:"bi-flower1",dotCls:"culture",badgeCls:"culture"},cycle:{label:"Cycle cultural",icon:"bi-arrow-repeat",dotCls:"cycle",badgeCls:"cycle"},stade:{label:"Stade phéno.",icon:"bi-calendar2-check",dotCls:"stade",badgeCls:"stade"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotCls:"irrigation",badgeCls:"irrigation"}};let u=`
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
  `;n.length===0?u+='<div class="journal-empty">Aucune entrée dans le journal.</div>':n.forEach(r=>{var p;const o=s[r.type]||s.note,f=r.type==="note",h=r.type==="traitement";u+=`
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
              ${f?`<button class="jrn-entry-delete" data-id="${r.id}" title="Supprimer"><i class="bi bi-trash3"></i></button>`:""}
            </div>
            ${r.texte?`<div class="jrn-entry-texte">${r.texte}</div>`:""}
            ${h&&(r.produit||r.dose||r.cible)?`
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
            ${(p=r.imageIds)!=null&&p.length?`<div class="jrn-entry-photos-row" data-entry-id="${r.id}"></div>`:""}
          </div>
        </div>
      `}),u+="</div>",e.innerHTML=u;const d=e.querySelector("#jrn-add-btn"),c=e.querySelector("#jrn-add-menu");d==null||d.addEventListener("click",r=>{r.stopPropagation(),c.classList.toggle("open")}),document.addEventListener("click",()=>c==null?void 0:c.classList.remove("open")),e.querySelectorAll(".jrn-add-item").forEach(r=>{r.addEventListener("click",()=>{c.classList.remove("open"),Ei(r.dataset.type)})}),e.querySelectorAll(".jrn-entry-delete").forEach(r=>{r.addEventListener("click",()=>{var h,p;const o=parseInt(r.dataset.id),f=ke().find(b=>b.id===o);(h=f==null?void 0:f.imageIds)!=null&&h.length&&((p=window.ImageStore)==null||p.remove(f.imageIds)),Pt(ke().filter(b=>b.id!==o)),et()})});const m=window.ImageStore;m&&e.querySelectorAll(".jrn-entry-photos-row[data-entry-id]").forEach(async r=>{var f;const o=t.find(h=>String(h.id)===r.dataset.entryId);if((f=o==null?void 0:o.imageIds)!=null&&f.length)for(const h of o.imageIds)try{const p=await m.get(h);if(!p)continue;const b=document.createElement("img");b.className="jrn-entry-photo",b.src=p,b.alt="",b.addEventListener("click",()=>{var w;return(w=window.openLightbox)==null?void 0:w.call(window,p)}),r.appendChild(b)}catch{}})}function Ei(e){const t={note:"Ajouter une note",traitement:"Ajouter un traitement",culture:"Culture — événement",stade:"Stade phénologique",irrigation:"Irrigation",cycle:"Cycle cultural"},i=E.crop||"",n={note:`
      <div class="journal-form-row">
        <label class="journal-form-label">Catégorie</label>
        <select id="jrn-f-category" class="journal-form-input">
          ${$i.map(u=>`<option>${u}</option>`).join("")}
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
          <input type="date" id="jrn-f-date" class="journal-form-input" value="${ce}">
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
    </div>`,s.querySelector(".add-modal-close").addEventListener("click",()=>s.remove()),s.addEventListener("click",u=>{u.target===s&&s.remove()});const l=[];a&&window.ImageStore&&window.setupImgUpload(s.querySelector("#jrn-f-img-input"),s.querySelector("#jrn-f-img-btn"),s.querySelector("#jrn-f-previews"),s.querySelector("#jrn-f-img-err"),l),s.querySelector("#jrn-f-save").addEventListener("click",async()=>{var o,f;const u=s.querySelector("#jrn-f-date").value||ce,d=((o=s.querySelector("#jrn-f-texte"))==null?void 0:o.value.trim())||"",c=E.orgId===1?"Jean-Michel Dutilleul":"Thomas Bertrand",m={id:Date.now(),type:e,date:u,texte:d,auteur:c};if(e==="note")m.category=((f=s.querySelector("#jrn-f-category"))==null?void 0:f.value)||"";else if(e==="traitement")m.produit=s.querySelector("#jrn-f-produit").value.trim(),m.dose=s.querySelector("#jrn-f-dose").value.trim(),m.cible=s.querySelector("#jrn-f-cible").value.trim();else if(e==="culture")m.action=s.querySelector("#jrn-f-action").value,m.culture=s.querySelector("#jrn-f-culture").value.trim(),m.variete=s.querySelector("#jrn-f-variete").value.trim();else if(e==="stade")m.stade=s.querySelector("#jrn-f-stade").value.trim(),m.culture=s.querySelector("#jrn-f-culture").value.trim();else if(e==="irrigation"){const h=parseFloat(s.querySelector("#jrn-f-volume").value);m.volume=isNaN(h)?0:h,m.unite=s.querySelector("#jrn-f-unite").value,m.methode=s.querySelector("#jrn-f-methode").value}else e==="cycle"&&(m.action=s.querySelector("#jrn-f-action").value,m.culture=s.querySelector("#jrn-f-culture").value.trim(),m.annee=s.querySelector("#jrn-f-annee").value.trim());if(d||m.produit||m.culture||m.stade||m.volume||m.annee||l.length){if(window.ImageStore&&l.length){m.imageIds=[];for(const h of l){const p=`img_${m.id}_${m.imageIds.length}`;await window.ImageStore.store(p,h),m.imageIds.push(p)}}Pt([m,...ke()]),s.remove(),et()}}),document.body.appendChild(s)}function ki(){const e=document.getElementById("breadcrumb-title");if(!e)return;const t=e.querySelector("span:last-child");if(!t)return;const i=oe.filter(s=>s.orgId===E.orgId).sort((s,l)=>s.name.localeCompare(l.name,"fr")),n=document.createElement("span");n.className="breadcrumb-nav-wrap";const a=document.createElement("select");a.className="breadcrumb-nav-select",a.innerHTML=i.map(s=>`<option value="${s.id}"${s.id===P?" selected":""}>${s.name}</option>`).join(""),a.addEventListener("change",()=>{window.location.href=`parcelle-detail.html?id=${a.value}`}),n.appendChild(a),t.replaceWith(n)}document.addEventListener("DOMContentLoaded",()=>{var i,n,a;if(!E){document.body.innerHTML='<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>';return}mi(),Bt(k.name||E.name,{label:"Parcelles",href:"parcelles.html"}),ki(),Y(),sn(),bn(),gn(),Xi(),an(),yn();const e=At.get("tab");e&&((i=document.querySelector(`.detail-tab-btn[data-pane="tab-${e}"]`))==null||i.click()),Qi(),tn(),ge(),(n=document.getElementById("parcel-add-widget-btn"))==null||n.addEventListener("click",yi),(a=document.getElementById("btn-export-csv"))==null||a.addEventListener("click",pn),document.addEventListener("click",s=>{var o;const l=s.target.closest(".chart-cumul-add-btn");if(!l)return;s.stopPropagation();const u=l.dataset.cumulLabel,d=l.dataset.cumulVal;if(!confirm(`Ajouter "${u} : ${d}" au tableau de bord ?`))return;const c=((o=l.closest(".chart-card"))==null?void 0:o.dataset.color)||"var(--pri)",m=ai({label:u,val:d,color:c,subjectLabel:E.name}),r=document.createElement("div");r.textContent=m==="max"?"Limite de cumuls au tableau de bord atteinte":"Cumul ajouté au tableau de bord",Object.assign(r.style,{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",background:"rgba(28,28,30,.9)",color:"#fff",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",zIndex:"9999",pointerEvents:"none"}),document.body.appendChild(r),setTimeout(()=>r.remove(),2500)});const t=document.getElementById("sidebar");t&&new MutationObserver(()=>be()).observe(t,{attributes:!0,attributeFilter:["data-role"]})});let De="capteur",G=null,de=!1;const Bi=365*1440,Ht=`charts-order-parcel-${P}`;function ji(){try{return JSON.parse(localStorage.getItem(Ht)||"null")}catch{return null}}function Ti(e){localStorage.setItem(Ht,JSON.stringify(e))}function Ai(e){let t=null;e.addEventListener("dragstart",i=>{const n=i.target.closest(".chart-card[data-card-key]");n&&(t=n,n.classList.add("chart-dragging"),i.dataTransfer.effectAllowed="move")}),e.addEventListener("dragend",()=>{t==null||t.classList.remove("chart-dragging"),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over")),t=null;const i=[...e.querySelectorAll(".chart-card[data-card-key]")].map(n=>n.dataset.cardKey);Ti(i)}),e.addEventListener("dragover",i=>{if(i.preventDefault(),!t)return;const n=i.target.closest(".chart-card[data-card-key]");if(!n||n===t)return;e.querySelectorAll(".chart-card").forEach(s=>s.classList.remove("chart-drag-over")),n.classList.add("chart-drag-over");const a=n.getBoundingClientRect().top+n.getBoundingClientRect().height/2;e.insertBefore(t,i.clientY<a?n:n.nextSibling)}),e.addEventListener("drop",i=>{i.preventDefault(),e.querySelectorAll(".chart-card").forEach(n=>n.classList.remove("chart-drag-over"))})}function Ii(e,t){const i=F.filter(r=>t.includes(r.id)),n=i.filter(r=>V.includes(r.model)),a=i.filter(r=>nt.includes(r.model)),s=i.filter(r=>!V.includes(r.model)&&!nt.includes(r.model)),l=Se(),u=new Set;i.forEach(r=>(q[r.model]||[]).forEach(o=>u.add(o.id)));const d=[];if(s.forEach(r=>{const o=q[r.model];if(!o)return;const f=`${r.model} · ${r.serial}`,h=Math.floor(5+Math.random()*55);o.forEach(p=>{if(p.isWindComposite){d.push({key:`wind-${r.id}`,type:"wind",sensor:r,source:f,emissionMins:h});return}d.push({key:`s${r.id}-${p.id}`,type:"metric",metric:p,source:f,emissionMins:h,sensorId:r.id})})}),n.length>0){const r=`Tensiomètres · ${n.length} capteur${n.length>1?"s":""}`,o=Math.floor(5+Math.random()*55);["pothydr","tsol"].forEach(f=>{d.push({key:`tensio-${f}`,type:"tensio",metricId:f,source:r,emissionMins:o,tensioSensors:n})})}a.forEach(r=>{const o=ci[r.model]||[],f=`${ne[r.model]||r.model} · ${r.serial}`,h=Math.floor(5+Math.random()*55);o.length>0&&(d.push({key:`capa-vwc-${r.id}`,type:"capa-vwc",sensor:r,horizons:o,source:f,emissionMins:h}),d.push({key:`capa-tsol-${r.id}`,type:"capa-tsol",sensor:r,horizons:o,source:f,emissionMins:h}))}),Qe.filter(r=>!u.has(r.id)).forEach(r=>d.push({key:`always-${r.id}`,type:"metric",metric:r,source:"parcelle",emissionMins:null,unavailable:l<60})),(!!E.irrigation&&E.irrigation!=="Non irrigué"||N.some(r=>r.plotId===P))&&d.push({key:"always-irrigation",type:"metric",metric:li,source:"parcelle",emissionMins:null});const m=ji();if(m!=null&&m.length){const r=new Map(m.map((o,f)=>[o,f]));d.sort((o,f)=>(r.has(o.key)?r.get(o.key):1/0)-(r.has(f.key)?r.get(f.key):1/0))}d.forEach(r=>{r.type==="metric"?Ee(e,r.metric,r.source,r.emissionMins,r.key,r.unavailable,r.sensorId):r.type==="wind"?di(e,r.source,r.emissionMins,r.key):r.type==="tensio"?Hi(e,r.metricId,r.tensioSensors,r.source,r.emissionMins,r.key):r.type==="capa-vwc"?Fi(e,r.horizons,r.source,r.emissionMins,r.key):r.type==="capa-tsol"&&Di(e,r.horizons,r.source,r.emissionMins,r.key)}),Ai(e)}function Be(e){const t=F.filter(a=>e.includes(a.id)),i=new Set,n=[];return t.forEach(a=>{(q[a.model]||[]).forEach(s=>{i.has(s.id)||(i.add(s.id),n.push(s))})}),Qe.forEach(a=>{i.has(a.id)||(i.add(a.id),n.push(a))}),n}function Y(){var t,i;const e=document.getElementById("charts-container");if(e.innerHTML="",de){e.className="compare-rows";const n=new Date().getFullYear(),a=document.createElement("div");a.className="compare-header-row",a.innerHTML=`
      <div class="compare-col-header"><span>${k.name||E.name} — ${n-1}</span></div>
      <div class="compare-col-header">
        <span>${k.name||E.name} — ${n}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(a),(t=a.querySelector(".compare-close-btn"))==null||t.addEventListener("click",()=>{de=!1,pe(),Y()}),Be(k.linkedSensorIds).forEach(l=>{const u=document.createElement("div");u.className="compare-row";const d=document.createElement("div");Ee(d,l,null,null,null,!1,null,!0);const c=document.createElement("div");Ee(c,l,null,null,null,!1,null,!1),u.appendChild(d),u.appendChild(c),e.appendChild(u)})}else if(G){e.className="compare-rows";const n=oe.find(p=>p.id===G),a=document.createElement("div");a.className="compare-header-row",a.innerHTML=`
      <div class="compare-col-header"><span>${k.name||E.name}</span></div>
      <div class="compare-col-header">
        <span>${(n==null?void 0:n.name)||"Parcelle"}</span>
        <button class="icon-btn compare-close-btn" title="Fermer la comparaison"><i class="bi bi-x-lg"></i></button>
      </div>`,e.appendChild(a),(i=a.querySelector(".compare-close-btn"))==null||i.addEventListener("click",()=>{G=null,pe(),Y()});const s=Be(k.linkedSensorIds),l=je(G),u=(l==null?void 0:l.linkedSensorIds)??F.filter(p=>p.parcelIds.includes(G)).map(p=>p.id),d=Be(u),c=s.map(p=>p.id),m=d.map(p=>p.id),r=c.filter(p=>m.includes(p)),o=c.filter(p=>!m.includes(p)),f=m.filter(p=>!c.includes(p));[...r,...o,...f].forEach(p=>{const b=s.find(B=>B.id===p),w=d.find(B=>B.id===p),g=document.createElement("div");g.className="compare-row";const $=document.createElement("div");b?Ee($,b):$.innerHTML='<div class="compare-chart-empty">—</div>';const C=document.createElement("div");w?Ee(C,w):C.innerHTML='<div class="compare-chart-empty">—</div>',g.appendChild($),g.appendChild(C),e.appendChild(g)})}else e.className="charts-stack",Ii(e,k.linkedSensorIds);zi()}const Me=["#5b8dd9","#e07050","#4ecdc4","#f5c842","#c090e0","#78d8a0"];function Li(e){const t=e.depth||30;return[{depth:t,label:`${t} cm`,sensor:e}]}function Pi(e){if(De==="capteur")return e.map((i,n)=>({label:i.serial,color:Me[n%Me.length],depth:i.depth||30,sensor:i}));const t=new Map;return e.forEach(i=>Li(i).forEach(n=>{t.has(n.depth)||t.set(n.depth,n)})),[...t.values()].sort((i,n)=>i.depth-n.depth).map((i,n)=>({label:i.label,color:Me[n%Me.length],depth:i.depth,sensor:i.sensor}))}function Hi(e,t,i,n=null,a=null,s=null){var h;const u={pothydr:{name:"Potentiel hydrique",unit:"kPa"},tsol:{name:"Température du sol",unit:"°C"}}[t],d=Pi(i),c=document.createElement("div");c.className="chart-card tensio-multi-card",c.dataset.tensioMetric=t,c.dataset.tensioCurves=JSON.stringify(d.map(p=>({depth:p.depth,color:p.color,label:p.label}))),s&&(c.dataset.cardKey=s,c.draggable=!0);const m=d.map(p=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${p.color};vertical-align:middle;border-radius:1px"></span>
      ${p.label}
    </span>`).join(""),r=n?`<span class="chart-card-source">${n}</span>`:"",o=a!=null?`<span class="chart-card-emission">il y a ${a} min</span>`:"",f=`
    <div class="chart-tensio-toggle">
      <button class="btn-secondary btn-sm tensio-toggle-btn${De==="capteur"?" active":""}" data-mode="capteur">Par capteur</button>
      <button class="btn-secondary btn-sm tensio-toggle-btn${De==="horizon"?" active":""}" data-mode="horizon">Par horizon</button>
    </div>`;c.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((h=d[0])==null?void 0:h.color)||Me[0]}">${u.name}</span>
      <span class="chart-card-unit">${u.unit}</span>
      ${r}${o}
    </div>
    ${f}
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${m}</div>
    <svg class="chart-svg tensio-svg" data-metric="${t}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,c.querySelectorAll(".tensio-toggle-btn").forEach(p=>{p.addEventListener("click",()=>{De=p.dataset.mode,Y()})}),e.appendChild(c)}function Ft(e,t,i,n,a,s,l,u){var m;const d=document.createElement("div");d.className=`chart-card ${l}-multi-card`,d.dataset[l+"Curves"]=JSON.stringify(t.map(r=>({depth:r.depth,color:r[i],label:r.label}))),u&&(d.dataset.cardKey=u,d.draggable=!0);const c=t.map(r=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--txt2)">
      <span style="display:inline-block;width:20px;height:2px;background:${r[i]};vertical-align:middle;border-radius:1px"></span>
      ${r.label}
    </span>`).join("");return d.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${((m=t[0])==null?void 0:m[i])||"#46DA82"}">${n}</span>
      <span class="chart-card-unit">${a}</span>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding:4px 14px 2px">${c}</div>
    <svg class="chart-svg ${s}" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>
  `,e.appendChild(d),d}function Fi(e,t,i=null,n=null,a=null){Ft(e,t,"vwcColor","Teneur en eau du sol","%vol","capa-svg","capa",a)}function Di(e,t,i=null,n=null,a=null){Ft(e,t,"tsolColor","Température du sol par horizon","°C","capa-tsol-svg","capaT",a)}function Ee(e,t,i=null,n=null,a=null,s=!1,l=null,u=!1){var p;const d=t.base(),c=document.createElement("div");c.className="chart-card",c.dataset.base=d,c.dataset.color=t.color,c.dataset.cumul=t.isCumul?"1":"",c.dataset.chartType=t.chartType||"line",c.dataset.metricId=t.id,c.dataset.metricName=t.name,u&&(c.dataset.yearShift="1"),c.dataset.metricUnit=t.unit,t.isIrrigation&&(c.dataset.isIrrigation="1"),a&&(c.dataset.cardKey=a,c.draggable=!0);const m=t.cumul?(()=>{const b=`${Ui(t,u)} ${t.cumul.unit}`;return`<div class="chart-cumul"><span class="chart-cumul-label">${t.cumul.label} : <strong>${b}</strong><button class="chart-cumul-add-btn" data-cumul-label="${t.cumul.label}" data-cumul-val="${b}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button></span></div>`})():"",r=i?`<span class="chart-card-source">${i}</span>`:"",o=n!=null?`<span class="chart-card-emission">il y a ${n} min</span>`:"";let f="";if(l){const b=((p=document.getElementById("time-step"))==null?void 0:p.value)||"1h";f=`<a class="chart-card-expand" href="capteur-graphique.html?sensorId=${l}&metricId=${t.id}&parcelId=${P}&period=${K}&step=${b}" title="Graphique plein écran"><i class="bi bi-fullscreen"></i></a>`}const h=s?'<div class="chart-unavailable">Données indisponibles pour ce pas de temps</div>':'<svg class="chart-svg" width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none"></svg>';c.innerHTML=`
    <div class="chart-card-header">
      <span class="chart-card-name" style="color:${t.color}">${t.name}</span>
      <span class="chart-card-unit">${t.unit}</span>
      ${r}${o}${f}
    </div>
    ${h}
    ${m}
  `,e.appendChild(c)}let Ce=null;function Dt(){return Ce||(Ce=document.createElement("div"),Ce.className="chart-tooltip",document.body.appendChild(Ce)),Ce}function qi(e,t){return t==="temp"||t==="temperature"?["#6eb4d4","#e07050"]:t==="tseche"||t==="thumide"?["#6eb4d4","#e07050"]:t==="temp_rosee"?["#a0d0f0","#4090c0"]:[Ri(e,.55),e]}function Ri(e,t){const i=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),s=Math.round(i+(255-i)*t),l=Math.round(n+(255-n)*t),u=Math.round(a+(255-a)*t);return`#${s.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${u.toString(16).padStart(2,"0")}`}function Oe(e){if(e.length<2)return"";if(e.length===2)return`M${e[0].x},${e[0].y} L${e[1].x},${e[1].y}`;let t=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let i=0;i<e.length-1;i++){const n=e[Math.max(i-1,0)],a=e[i],s=e[i+1],l=e[Math.min(i+2,e.length-1)],u=a.x+(s.x-n.x)/6,d=a.y+(s.y-n.y)/6,c=s.x-(l.x-a.x)/6,m=s.y-(l.y-a.y)/6;t+=` C${u.toFixed(1)},${d.toFixed(1)} ${c.toFixed(1)},${m.toFixed(1)} ${s.x.toFixed(1)},${s.y.toFixed(1)}`}return t}function fe(e){const t=new Date(Date.now()-e*6e4);return e<1440?`${String(t.getHours()).padStart(2,"0")}h`:e>=43200?["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"][t.getMonth()]:`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}`}function ct(e){const t=Date.now()-e*6e4;return new Date(t).getHours()+new Date(t).getMinutes()/60}function Oi(e){return Math.max(0,Math.sin(Math.PI*(e-6)/12))}function dt(e){return .5+.5*Math.sin(2*Math.PI*(e-4)/24-Math.PI/2)}function Ni(e){const t=Math.floor((Date.now()-e*6e4)/864e5),i=Math.sin(t*12.9898+78.233)*43758.5453;return i-Math.floor(i)}function ue(e,t,i,n=.15){const a=ct(i),s=dt(a),l=Oi(a),u=Ni(i),d=()=>1+(Math.random()-.5)*2*n;switch(e){case"temp":{const c=.6+u*.8;return(t-6+s*12*c)*d()}case"tseche":case"thumide":{const c=.6+u*.8;return(t-4+s*8*c)*d()}case"temp_rosee":{const c=.6+u*.8,m=t-6+s*12*c;return Math.min(m-1,t-8+s*6*c)*d()}case"tsol":{const c=ct(i+120),m=.7+u*.6;return(t-3+dt(c)*6*m)*d()}case"humidite":{const c=1.4-u*.8;return Math.min(100,Math.max(20,(t+(1-s)*25*c-s*15)*d()))}case"rayonnement":{const c=.4+u*.9;return Math.max(0,l*t*1.3*c*d())}case"etp":{const c=.4+u*.9;return Math.max(0,l*t*1.5*c*d())}case"humec":{const c=1.4-u*.8;return Math.max(0,t*Math.max(0,.8-l*1.2)*c*d())}case"pluie":{const c=Date.now()-i*6e4,m=Math.floor(c/864e5)-Math.floor(Date.now()/864e5),r=Ne(m);if(r<=0)return 0;const o=Math.floor(it(m)*21),f=new Date(c).getHours()+new Date(c).getMinutes()/60;return f>=o&&f<o+3?r/12:0}case"vent":case"rafales":{const c=.5+u;return Math.max(0,t*(.6+l*.8)*c*d())}default:return Math.max(0,t*d())}}function zi(){const e=vi(),t=Se(),i=bi();F.filter(a=>k.linkedSensorIds.includes(a.id)).filter(a=>V.includes(a.model)),document.querySelectorAll(".chart-card").forEach(a=>{if(a.classList.contains("tensio-multi-card")){const h=a.querySelector(".tensio-svg"),p=JSON.parse(a.dataset.tensioCurves||"[]");h&&p.length>0&&_i(h,p,e,t,a.dataset.tensioMetric||"pothydr",i);return}if(a.classList.contains("capa-multi-card")){const h=a.querySelector(".capa-svg"),p=JSON.parse(a.dataset.capaCurves||"[]");h&&p.length>0&&ut(h,p,e,t,"vwc",i);return}if(a.classList.contains("capaT-multi-card")){const h=a.querySelector(".capa-tsol-svg"),p=JSON.parse(a.dataset.capaTCurves||"[]");h&&p.length>0&&ut(h,p,e,t,"tsol",i);return}const s=a.querySelector(".chart-svg");if(!s)return;const l=parseFloat(a.dataset.base),u=a.dataset.color,d=a.dataset.cumul==="1",c=a.dataset.chartType||"line",m=a.dataset.metricId||"",r=a.dataset.metricName||"",o=a.dataset.metricUnit||"",f=a.dataset.yearShift==="1"?Bi:0;if(a.dataset.isIrrigation)Ji(s,u,e,t,i);else{const h=f===0&&i>0&&pi.has(m);Wi(s,l,u,e,t,d,c,m,r,o,f===0?i:0,h,f)}}),Ot(),Nt()}function _i(e,t,i,n,a="pothydr",s=0){const d={t:14,r:10,b:28,l:46},c=600-d.l-d.r,m=180-d.t-d.b,r=a==="tsol"?"°C":"kPa",o=i+s,f=t.map(y=>{const S=a==="tsol"?16-y.depth*.04+Math.random()*3:20+y.depth*.8+Math.random()*20;return Array.from({length:i},(M,j)=>{const A=(i-1-j)*n;return a==="tsol"?ue("tsol",S,A):Math.max(0,ue("pothydr",S,A))})}),h=f.flat(),p=Math.min(...h),b=Math.max(...h),w=b-p||1,g=y=>d.l+y/Math.max(o-1,1)*c,$=y=>d.t+m-(y-p)/w*m,C=`tc-${Math.random().toString(36).slice(2)}`;let B=`<defs><clipPath id="${C}"><rect x="${d.l}" y="${d.t}" width="${c}" height="${m}"/></clipPath></defs>`;for(let y=0;y<=4;y++){const S=d.t+y/4*m,M=b-y/4*w;B+=`<line x1="${d.l}" y1="${S.toFixed(1)}" x2="${600-d.r}" y2="${S.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,B+=`<text x="${d.l-5}" y="${(S+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${M.toFixed(0)}</text>`}if(s>0){const y=g(i-.5),S=`tc_stripe_${Math.random().toString(36).slice(2,8)}`;B+=`<defs><pattern id="${S}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${y.toFixed(1)}" y="${d.t}" width="${(600-d.r-y).toFixed(1)}" height="${m}" fill="url(#${S})"/>
      <line x1="${y.toFixed(1)}" y1="${d.t}" x2="${y.toFixed(1)}" y2="${d.t+m}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-d.r-4).toFixed(1)}" y="${(d.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}f.forEach((y,S)=>{const M=y.map((A,H)=>({x:g(H),y:$(A)})),j=Oe(M);B+=`<path d="${j}" fill="none" stroke="${t[S].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${C})"/>`}),B+=`<line x1="${d.l}" y1="${d.t+m}" x2="${600-d.r}" y2="${d.t+m}" stroke="var(--bdr2)" stroke-width="1"/>`;const v=Math.max(1,Math.floor(o/6));for(let y=0;y<o;y+=v){const S=(i-y)*n,M=n>=1440||S<0?(()=>{const j=new Date(Date.now()-S*6e4);return`${String(j.getDate()).padStart(2,"0")}/${String(j.getMonth()+1).padStart(2,"0")}`})():fe(S);B+=`<text x="${g(y).toFixed(1)}" y="${(d.t+m+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${M}</text>`}B+=`<rect class="chart-hover-rect" x="${d.l}" y="${d.t}" width="${c}" height="${m}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=B,qt(e,f,t,g,$,i,n,r,d,600,o)}function ut(e,t,i,n,a="vwc",s=0){const d={t:14,r:10,b:28,l:46},c=600-d.l-d.r,m=180-d.t-d.b,r=i+s,o=t.map((v,y)=>{if(a==="tsol"){const M=16-v.depth*.06+y*.5+Math.random()*3;return Array.from({length:i},(j,A)=>{const H=(i-1-A)*n;return ue("tsol",M,H)})}const S=35-v.depth*.15+y*2+Math.random()*8;return Array.from({length:i},(M,j)=>{const A=(i-1-j)*n;return Math.max(10,Math.min(55,ue("teneur-eau",S,A)))})}),f=o.flat(),h=Math.floor(Math.min(...f)-2),p=Math.ceil(Math.max(...f)+2),b=p-h||1,w=v=>d.l+v/Math.max(r-1,1)*c,g=v=>d.t+m-(v-h)/b*m,$=`cc-${Math.random().toString(36).slice(2)}`;let C=`<defs><clipPath id="${$}"><rect x="${d.l}" y="${d.t}" width="${c}" height="${m}"/></clipPath></defs>`;for(let v=0;v<=4;v++){const y=d.t+v/4*m,S=p-v/4*b;C+=`<line x1="${d.l}" y1="${y.toFixed(1)}" x2="${600-d.r}" y2="${y.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,C+=`<text x="${d.l-5}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${S.toFixed(0)}</text>`}if(s>0){const v=w(i-.5),y=`cc_stripe_${Math.random().toString(36).slice(2,8)}`;C+=`<defs><pattern id="${y}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${v.toFixed(1)}" y="${d.t}" width="${(600-d.r-v).toFixed(1)}" height="${m}" fill="url(#${y})"/>
      <line x1="${v.toFixed(1)}" y1="${d.t}" x2="${v.toFixed(1)}" y2="${d.t+m}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-d.r-4).toFixed(1)}" y="${(d.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}o.forEach((v,y)=>{const S=v.map((j,A)=>({x:w(A),y:g(j)})),M=Oe(S);C+=`<path d="${M}" fill="none" stroke="${t[y].color}" stroke-width="2" stroke-linecap="round" clip-path="url(#${$})"/>`}),C+=`<line x1="${d.l}" y1="${d.t+m}" x2="${600-d.r}" y2="${d.t+m}" stroke="var(--bdr2)" stroke-width="1"/>`;const B=Math.max(1,Math.floor(r/6));for(let v=0;v<r;v+=B){const y=(i-v)*n,S=n>=1440||y<0?(()=>{const M=new Date(Date.now()-y*6e4);return`${String(M.getDate()).padStart(2,"0")}/${String(M.getMonth()+1).padStart(2,"0")}`})():fe(y);C+=`<text x="${w(v).toFixed(1)}" y="${(d.t+m+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${S}</text>`}C+=`<rect class="chart-hover-rect" x="${d.l}" y="${d.t}" width="${c}" height="${m}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=C,qt(e,o,t,w,g,i,n,a==="tsol"?"°C":"%vol",d,600,r)}function qt(e,t,i,n,a,s,l,u,d,c,m=s){const r=Dt(),o=e.querySelector(".chart-hover-rect");if(!o)return;const f="http://www.w3.org/2000/svg",h=t.map((p,b)=>{var g;const w=document.createElementNS(f,"circle");return w.setAttribute("r","4"),w.setAttribute("fill",((g=i[b])==null?void 0:g.color)||"#888"),w.setAttribute("stroke","#fff"),w.setAttribute("stroke-width","1.5"),w.style.display="none",w.style.pointerEvents="none",e.appendChild(w),w});o.addEventListener("mousemove",p=>{const b=e.getBoundingClientRect(),w=c/b.width,g=(p.clientX-b.left)*w,$=c-d.l-d.r,C=Math.max(0,Math.min(1,(g-d.l)/$)),B=Math.round(C*(m-1));if(B<0)return;const v=t.map((M,j)=>{var O,ae;const A=M[B];if(A===void 0)return"";h[j].setAttribute("cx",n(B)),h[j].setAttribute("cy",a(A)),h[j].style.display="";const H=((O=i[j])==null?void 0:O.label)||"",J=((ae=i[j])==null?void 0:ae.color)||"#888",U=Math.abs(A)>=100?A.toFixed(1):A.toFixed(2);return`<div style="display:flex;align-items:center;gap:5px;margin-top:2px">
        <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${J};flex-shrink:0"></span>
        <span style="color:var(--txt2)">${H}</span>
        <strong style="margin-left:auto;color:${J}">${U} ${u}</strong>
      </div>`}).join("");if(!v){h.forEach(M=>M.style.display="none"),r.style.display="none";return}const y=(s-1-B)*l,S=l>=1440||y<0?(()=>{const M=new Date(Date.now()-y*6e4);return`${String(M.getDate()).padStart(2,"0")}/${String(M.getMonth()+1).padStart(2,"0")}`})():fe(y);r.innerHTML=`<div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${S}</div>${v}`,r.style.display="block",r.style.left=`${Math.min(p.clientX+12,window.innerWidth-200)}px`,r.style.top=`${p.clientY-10}px`}),o.addEventListener("mouseleave",()=>{r.style.display="none",h.forEach(p=>p.style.display="none")})}function Wi(e,t,i,n,a,s,l="line",u="",d="",c="",m=0,r=!1,o=0){const p={t:14,r:10,b:28,l:46},b=600-p.l-p.r,w=180-p.t-p.b,g=n+m,$=r?m:0,C=n+$,B=Math.max(1,Math.round(a/15)),v=Array.from({length:C},(T,I)=>{const D=(n-1-I)*a+o;if(s){let z=0;for(let _=0;_<B;_++)z+=ue(u,t/B,D+_*(a/B));return z}else if(B>1){let z=0;for(let _=0;_<B;_++)z+=ue(u,t,D+_*(a/B));return z/B}else return ue(u,t,D)}),y=l==="bar"?0:Math.min(...v),S=Math.max(...v),M=S-y||1,j=T=>p.l+T/Math.max(g-1,1)*b,A=T=>p.t+w-(T-y)/M*w,H=`grad_${Math.random().toString(36).slice(2)}`,[J,U]=qi(i,u);let O=`<defs>
    <linearGradient id="${H}" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${J}"/>
      <stop offset="100%" stop-color="${U}"/>
    </linearGradient>
    <clipPath id="clip_${H}">
      <rect x="${p.l}" y="${p.t}" width="${b}" height="${w}"/>
    </clipPath>
  </defs>`;if(m>0){const T=j(n-.5),I=`stripe_${H}`;O+=`<defs><pattern id="${I}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${T.toFixed(1)}" y="${p.t}" width="${(600-p.r-T).toFixed(1)}" height="${w}" fill="url(#${I})"/>
      <line x1="${T.toFixed(1)}" y1="${p.t}" x2="${T.toFixed(1)}" y2="${p.t+w}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-p.r-4).toFixed(1)}" y="${(p.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}for(let T=0;T<=4;T++){const I=p.t+T/4*w,D=S-T/4*M,z=Math.abs(D)>=100?D.toFixed(0):Math.abs(D)>=10?D.toFixed(1):D.toFixed(2);O+=`<line x1="${p.l}" y1="${I.toFixed(1)}" x2="${600-p.r}" y2="${I.toFixed(1)}" stroke="var(--bdr2)" stroke-width="1"/>`,O+=`<text x="${p.l-5}" y="${(I+4).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)">${z}</text>`}O+=`<line x1="${p.l}" y1="${p.t+w}" x2="${600-p.r}" y2="${p.t+w}" stroke="var(--bdr2)" stroke-width="1"/>`;const ae=Math.max(1,Math.floor(g/6));for(let T=0;T<g;T+=ae){const I=j(T).toFixed(1),D=(n-T)*a,z=a>=1440||D<0?(()=>{const _=new Date(Date.now()-D*6e4);return`${String(_.getDate()).padStart(2,"0")}/${String(_.getMonth()+1).padStart(2,"0")}`})():fe(D);O+=`<line x1="${I}" y1="${p.t}" x2="${I}" y2="${p.t+w}" stroke="var(--bdr2)" stroke-width="1" stroke-dasharray="3,3"/>`,O+=`<text x="${I}" y="${p.t+w+14}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${z}</text>`}if(l==="bar"){const T=Math.max(2,b/g*.65);v.forEach((I,D)=>{if(I<=0)return;const z=D>=n,_=j(D),Ie=A(I),ze=p.t+w-Ie;O+=`<rect x="${(_-T/2).toFixed(1)}" y="${Ie.toFixed(1)}" width="${T.toFixed(1)}" height="${ze.toFixed(1)}" fill="${z?"#C7C7CC":`url(#${H})`}" opacity="${z?"0.5":"0.9"}" rx="1"/>`})}else{const T=v.slice(0,n).map((z,_)=>({x:j(_),y:A(z)})),I=Oe(T),D=I+` L${j(n-1).toFixed(1)},${p.t+w} L${p.l.toFixed(1)},${p.t+w} Z`;if(O+=`<path d="${D}" fill="${U}" opacity="0.07" clip-path="url(#clip_${H})"/>`,O+=`<path d="${I}" fill="none" stroke="url(#${H})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#clip_${H})"/>`,$>0){const z=v.slice(n-1).map((Ie,ze)=>({x:j(n-1+ze),y:A(Ie)})),_=Oe(z);O+=`<path d="${_}" fill="none" stroke="url(#${H})" stroke-width="2" stroke-dasharray="5,4" stroke-linejoin="round" stroke-linecap="round" opacity="0.5" clip-path="url(#clip_${H})"/>`}}O+=`<rect class="chart-hover-rect" x="${p.l}" y="${p.t}" width="${b}" height="${w}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=O,Rt(e,v,j,A,y,S,g,n,a,d,c,i,p,600)}function Rt(e,t,i,n,a,s,l,u,d,c,m,r,o,f,h){const p=Dt(),b=e.querySelector(".chart-hover-rect");if(!b)return;const g=document.createElementNS("http://www.w3.org/2000/svg","circle");g.setAttribute("r","4"),g.setAttribute("fill",r),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width","1.5"),g.style.display="none",g.style.pointerEvents="none",e.appendChild(g),b.addEventListener("mousemove",$=>{const C=e.getBoundingClientRect(),B=f/C.width,v=($.clientX-C.left)*B,y=f-o.l-o.r,S=Math.max(0,Math.min(1,(v-o.l)/y)),M=Math.round(S*(l-1));if(M<0||M>=t.length)return;const j=t[M],A=i(M),H=n(j);g.setAttribute("cx",A),g.setAttribute("cy",H),g.style.display="";const J=(u-M)*d,U=d>=1440||J<0?(()=>{const I=new Date(Date.now()-J*6e4);return`${String(I.getDate()).padStart(2,"0")}/${String(I.getMonth()+1).padStart(2,"0")}`})():fe(J),O=Math.abs(j)>=100?j.toFixed(1):j.toFixed(2);p.innerHTML=`
      <div style="font-size:11px;color:var(--txt3);margin-bottom:2px">${c}</div>
      <div class="chart-tooltip-val" style="color:${r}">${O} <span style="font-size:12px;font-weight:400;color:var(--txt2)">${m}</span></div>
      <div class="chart-tooltip-ts">${U}</div>
    `,p.style.display="block";const ae=$.clientX+12,T=$.clientY-10;p.style.left=`${Math.min(ae,window.innerWidth-160)}px`,p.style.top=`${T}px`}),b.addEventListener("mouseleave",()=>{p.style.display="none",g.style.display="none"})}function Vi(e,t,i,n=0){const a=Date.now(),s=i*6e4,l=a-t*s,u=t+n,d=new Array(u).fill(0);return N.filter(c=>c.plotId===e).forEach(c=>{const m=new Date(c.iso).getTime();if(m<l)return;const r=Math.min(u-1,Math.floor((m-l)/s));r>=0&&(d[r]+=c.mm||0)}),d}function Gi(e){return e.id%3===2}function Yi(e,t){const i=(e.id*13+t*23)%17/17;return i>.4?+(3+i*12).toFixed(1):0}function Ji(e,t,i,n,a=0){const u={t:12,r:8,b:28,l:44},d=600-u.l-u.r,c=180-u.t-u.b,m=n===1440&&Gi(E),r=i+a,o=Vi(P,i,n,a),f=n*6e4,h=Date.now()-i*f,p=[];if(m){const v=new Date;v.setHours(0,0,0,0);for(let y=1;y<=7;y++){const S=Yi(E,y);if(S<=0)continue;const M=v.getTime()+y*864e5+12*36e5,j=Math.floor((M-h)/f);j>=i&&j<r&&p.push({idx:j,v:S})}}const b=Math.max(...o,...p.map(v=>v.v),1),w=v=>u.l+v/Math.max(r-1,1)*d,g=v=>u.t+c-v/b*c;let $="";for(let v=0;v<=4;v++){const y=u.t+v/4*c,S=(b-v/4*b).toFixed(1);$+=`<line x1="${u.l}" y1="${y}" x2="${600-u.r}" y2="${y}" stroke="var(--bdr2)" stroke-width="1"/>`,$+=`<text x="${u.l-4}" y="${y+4}" text-anchor="end" font-size="10" fill="var(--txt3)">${S}</text>`}$+=`<line x1="${u.l}" y1="${u.t+c}" x2="${600-u.r}" y2="${u.t+c}" stroke="var(--bdr2)" stroke-width="1"/>`;const C=Math.max(1,Math.floor(r/6));for(let v=0;v<r;v+=C){const y=w(v).toFixed(1),S=(i-v)*n,M=n>=1440||S<0?(()=>{const j=new Date(Date.now()-S*6e4);return`${String(j.getDate()).padStart(2,"0")}/${String(j.getMonth()+1).padStart(2,"0")}`})():fe(S);$+=`<text x="${y}" y="${(u.t+c+14).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--font)" fill="var(--txt3)">${M}</text>`}if(a>0){const v=w(i-.5),y=`irrig_stripe_${Math.random().toString(36).slice(2,8)}`;$+=`<defs><pattern id="${y}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
      </pattern></defs>
      <rect x="${v.toFixed(1)}" y="${u.t}" width="${(600-u.r-v).toFixed(1)}" height="${c}" fill="url(#${y})"/>
      <line x1="${v.toFixed(1)}" y1="${u.t}" x2="${v.toFixed(1)}" y2="${u.t+c}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(600-u.r-4).toFixed(1)}" y="${(u.t+12).toFixed(1)}" text-anchor="end" font-size="10" font-family="var(--font)" fill="var(--txt3)" font-style="italic">Prévisions</text>`}const B=Math.max(4,d/r*.65);o.forEach((v,y)=>{if(v<=0)return;const S=y>=i,M=w(y),j=g(v),A=u.t+c-j;$+=`<rect x="${(M-B/2).toFixed(1)}" y="${j.toFixed(1)}" width="${B.toFixed(1)}" height="${A.toFixed(1)}" fill="${S?"#C7C7CC":t}" opacity="${S?"0.5":"0.85"}" rx="1"/>`}),p.forEach(({idx:v,v:y})=>{const S=w(v),M=g(y),j=u.t+c-M;$+=`<rect x="${(S-B/2).toFixed(1)}" y="${M.toFixed(1)}" width="${B.toFixed(1)}" height="${j.toFixed(1)}" fill="none" stroke="${t}" stroke-width="1.5" stroke-dasharray="3,2" rx="1"/>`}),p.length&&($+=`<text x="${(u.l+2).toFixed(1)}" y="${(u.t+12).toFixed(1)}" font-size="10" font-family="var(--font)" fill="${t}" font-style="italic">┄ Recommandé (Irrigation Advizor)</text>`),$+=`<rect class="chart-hover-rect" x="${u.l}" y="${u.t}" width="${d}" height="${c}" fill="transparent" style="cursor:crosshair"/>`,e.innerHTML=$,Rt(e,o,w,g,0,b,r,i,n,"Irrigation","mm",t,u,600)}function Ui(e,t=!1){if(e.id==="pluie"){const a=Math.max(1,Math.ceil(me()/1440)),s=t?365:0;let l=0;for(let u=-(a-1);u<=0;u++)l+=Ne(u-s);return+l.toFixed(1)}const n={etp:()=>R(15,80),rayonnement:()=>x(500,3e3)}[e.id];return n?n():x(10,100)}function Xi(){const e=document.getElementById("period-presets"),t=document.getElementById("custom-date-row"),i=document.getElementById("time-step"),n=new Date,a=new Date(n-7*864e5);document.getElementById("date-from").value=a.toISOString().slice(0,10),document.getElementById("date-to").value=n.toISOString().slice(0,10),e.addEventListener("click",s=>{const l=s.target.closest(".period-preset-btn");if(l)if(e.querySelectorAll(".period-preset-btn").forEach(u=>u.classList.remove("active")),l.classList.add("active"),K=l.dataset.period,K==="custom")t.style.display="flex";else{t.style.display="none";const u=document.getElementById("time-step");u&&(u.value=hi(K)),Y()}}),document.getElementById("date-from").addEventListener("change",mt),document.getElementById("date-to").addEventListener("change",mt),i.addEventListener("change",Y)}function mt(){const e=document.getElementById("date-from").value,t=document.getElementById("date-to").value;e&&t&&(ye=new Date(e),we=new Date(t+"T23:59:59"),ye<we&&Y())}const pt={"Blé tendre":[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé. Profondeur optimale 3–4 cm."},{name:"Levée",date:"2025-11-05",bbch:"BBCH 09",desc:"Apparition de la première feuille au-dessus du sol."},{name:"Tallage",date:"2026-02-15",bbch:"BBCH 21",desc:"1er talle apparu. Période sensible au froid."},{name:"Épi 1 cm",date:"2026-04-20",bbch:"BBCH 30",desc:"Montaison. Début de la différenciation de l'épi."},{name:"Épiaison",date:"2026-05-20",bbch:"BBCH 55",desc:"La moitié de l'épiaison est atteinte. Risque maximal de fusariose."},{name:"Floraison",date:"2026-05-28",bbch:"BBCH 65",desc:"Pleine floraison. Fenêtre critique pour la qualité du grain."},{name:"Maturité",date:"2026-07-10",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %. Récolte possible."}],Maïs:[{name:"Semis",date:"2026-04-25",bbch:"BBCH 00",desc:"Sol > 10 °C à 5 cm. Fenêtre de semis idéale."},{name:"Levée",date:"2026-05-10",bbch:"BBCH 09",desc:"Coleoptile visible. 10 jours après semis en conditions normales."},{name:"4 feuilles",date:"2026-05-28",bbch:"BBCH 14",desc:"V4. Intervention herbicide possible."},{name:"6 feuilles",date:"2026-06-12",bbch:"BBCH 16",desc:"V6. Stade critique pour la nutrition azotée."},{name:"Floraison ♂",date:"2026-07-15",bbch:"BBCH 65",desc:"VT. Émission du pollen. Forte demande en eau (≥ 8 mm/j)."},{name:"Soie",date:"2026-07-18",bbch:"BBCH 67",desc:"R1. Fécondation. Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-20",bbch:"BBCH 89",desc:"Point noir visible. Récolte selon teneur en eau."}],Colza:[{name:"Semis",date:"2025-08-25",bbch:"BBCH 00",desc:"Sol humide, T° < 25 °C. Objectif : 30 plants/m²."},{name:"Levée",date:"2025-09-05",bbch:"BBCH 09",desc:"Cotylédon visible. Période à risque limaces."},{name:"Rosette",date:"2025-11-15",bbch:"BBCH 18",desc:"8 feuilles étalées. Bon état pour entrer en hiver."},{name:"Reprise",date:"2026-02-20",bbch:"BBCH 30",desc:"Allongement de l'hypocotyle. Fin de la période de vernalisation."},{name:"Bouton floral",date:"2026-03-25",bbch:"BBCH 51",desc:"Inflorescence visible. Risque sclérotinia à surveiller."},{name:"Floraison",date:"2026-04-10",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile. Éviter les traitements."},{name:"Siliques",date:"2026-05-05",bbch:"BBCH 75",desc:"Siliques de 2 cm. Fin de floraison, début de remplissage."},{name:"Maturité",date:"2026-07-05",bbch:"BBCH 89",desc:"Siliques brunes, graines noires. Seuil récolte < 9 % eau."}],Tournesol:[{name:"Semis",date:"2026-04-20",bbch:"BBCH 00",desc:"Sol > 8 °C à 5 cm. Profondeur 4–5 cm."},{name:"Levée",date:"2026-05-05",bbch:"BBCH 09",desc:"Cotylédon hors sol. Période sensible aux oiseaux."},{name:"4 feuilles",date:"2026-05-25",bbch:"BBCH 14",desc:"V4. Interventions herbicides possibles."},{name:"Bouton floral",date:"2026-06-25",bbch:"BBCH 51",desc:"E2. Bouton visible. Fin du développement végétatif."},{name:"Floraison",date:"2026-07-10",bbch:"BBCH 65",desc:"R5.1. Fleurs ligulées ouvertes. Stress hydrique critique."},{name:"Maturité",date:"2026-09-05",bbch:"BBCH 89",desc:"Capitule brun, dos jaune. Teneur en eau 9–12 %."}],Vigne:[{name:"Débourrement",date:"2026-04-05",bbch:"BBCH 05",desc:"Bourgeon en coton. Risque gel augmente fortement."},{name:"Sortie feuilles",date:"2026-04-20",bbch:"BBCH 11",desc:"1ère feuille étalée. Début des traitements prophylactiques."},{name:"Floraison",date:"2026-06-10",bbch:"BBCH 65",desc:"Anthèse. Niveau de risque mildiou et oïdium maximal."},{name:"Nouaison",date:"2026-06-25",bbch:"BBCH 71",desc:"Baies visibles. Consolidation du rendement."},{name:"Véraison",date:"2026-08-05",bbch:"BBCH 81",desc:"Changement de couleur. Arrêt des traitements phytos recommandé."},{name:"Récolte",date:"2026-09-15",bbch:"BBCH 89",desc:"Maturité technologique. Date selon profil variétal."}],Sorgho:[{name:"Semis",date:"2026-05-10",bbch:"BBCH 00",desc:"Sol > 12 °C à 5 cm."},{name:"Levée",date:"2026-05-25",bbch:"BBCH 09",desc:"Coleoptile visible."},{name:"Montaison",date:"2026-07-01",bbch:"BBCH 30",desc:"Début de la montaison. Forte demande azotée."},{name:"Floraison",date:"2026-07-25",bbch:"BBCH 65",desc:"Sensibilité maximale au stress hydrique."},{name:"Maturité",date:"2026-09-15",bbch:"BBCH 89",desc:"Teneur en eau < 25 %. Récolte adaptée."}],"Orge de printemps":[{name:"Semis",date:"2026-03-15",bbch:"BBCH 00",desc:"Semis dès que sol ressuyé, T° > 5 °C."},{name:"Levée",date:"2026-04-01",bbch:"BBCH 09",desc:"Coleoptile visible. Période sensible aux limaces."},{name:"Tallage",date:"2026-04-20",bbch:"BBCH 21",desc:"Premier talle. Couverture du sol progressive."},{name:"Montaison",date:"2026-05-10",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-06-05",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-07-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-08-05",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],Orge:[{name:"Semis",date:"2025-10-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé, profondeur 3–4 cm."},{name:"Levée",date:"2025-11-04",bbch:"BBCH 09",desc:"Coleoptile visible. Surveillance limaces."},{name:"Tallage",date:"2026-02-08",bbch:"BBCH 21",desc:"Reprise de végétation. Premier talle."},{name:"Montaison",date:"2026-04-02",bbch:"BBCH 30",desc:"Allongement du premier entre-nœud."},{name:"Épiaison",date:"2026-05-07",bbch:"BBCH 55",desc:"Moitié de l'épiaison atteinte."},{name:"Floraison",date:"2026-05-18",bbch:"BBCH 65",desc:"Anthèse. Risque fusariose à surveiller."},{name:"Grain pâteux",date:"2026-06-05",bbch:"BBCH 83",desc:"Grain à consistance pâteuse. Maturation avancée."},{name:"Récolte",date:"2026-07-01",bbch:"BBCH 89",desc:"Grain dur, teneur en eau ≤ 15 %."}],"Pomme de terre":[{name:"Plantation",date:"2026-04-02",bbch:"BBCH 00",desc:"Tubercules-semences à 10 cm, espacement 30–35 cm."},{name:"Levée",date:"2026-04-26",bbch:"BBCH 09",desc:"Tiges émergées. Risque gel résiduel."},{name:"Croissance",date:"2026-05-15",bbch:"BBCH 31",desc:"Fermeture du rang. Première application fongicide."},{name:"Tuberisation",date:"2026-06-05",bbch:"BBCH 71",desc:"Initiation des tubercules. Demande en eau maximale."},{name:"Grossissement",date:"2026-07-01",bbch:"BBCH 81",desc:"Grossissement actif. Irrigation critique."},{name:"Maturité",date:"2026-08-15",bbch:"BBCH 89",desc:"Fanes sèches, peau des tubercules fixée. Récolte."}],Cerisier:[{name:"Dormance",date:"2025-12-15",bbch:"BBCH 00",desc:"Repos végétatif. Besoin en froid accumulé."},{name:"Bourgeons",date:"2026-02-20",bbch:"BBCH 03",desc:"Gonflement des bourgeons. Chilling satisfait."},{name:"Débourrement",date:"2026-03-18",bbch:"BBCH 07",desc:"Pointe verte visible. Risque gel fort (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-08",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation croisée nécessaire."},{name:"Nouaison",date:"2026-04-28",bbch:"BBCH 71",desc:"Petits fruits noués. Chute physiologique normale."},{name:"Fructification",date:"2026-05-12",bbch:"BBCH 81",desc:"Grossissement actif des cerises. Irrigation si déficit."},{name:"Récolte",date:"2026-06-18",bbch:"BBCH 89",desc:"Cerises à maturité. Récolte échelonnée selon variété."}],Poire:[{name:"Débourrement",date:"2026-03-28",bbch:"BBCH 07",desc:"Pointe verte. Vigilance gel (T° critique −2 °C)."},{name:"Floraison",date:"2026-04-15",bbch:"BBCH 65",desc:"Pleine floraison. Pollinisation entomophile."},{name:"Nouaison",date:"2026-05-05",bbch:"BBCH 71",desc:"Petits fruits noués. Éclaircissage si nécessaire."},{name:"Croissance",date:"2026-06-15",bbch:"BBCH 78",desc:"Grossissement actif. Besoins en eau importants."},{name:"Véraison",date:"2026-08-10",bbch:"BBCH 84",desc:"Changement de couleur. Arrêt des traitements phytos."},{name:"Récolte",date:"2026-09-10",bbch:"BBCH 89",desc:"Récolte selon indice de maturité (pénétromètre, amidon)."}],Pomme:[{name:"Débourrement",date:"2026-04-01",bbch:"BBCH 07",desc:"Pointe verte. Risque gel résiduel."},{name:"Floraison",date:"2026-04-25",bbch:"BBCH 65",desc:"Pleine floraison. Risque tavelure maximal."},{name:"Nouaison",date:"2026-05-15",bbch:"BBCH 71",desc:"Petits fruits visibles. Éclaircissage possible."},{name:"Croissance",date:"2026-06-10",bbch:"BBCH 78",desc:"Grossissement actif. Surveillance carpocapse."},{name:"Véraison",date:"2026-08-15",bbch:"BBCH 84",desc:"Coloration des fruits. Maturation avancée."},{name:"Récolte",date:"2026-09-20",bbch:"BBCH 89",desc:"Récolte selon variété et indice de maturité."}],Salade:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Laitue:[{name:"Plantation",date:"2026-04-15",bbch:"BBCH 00",desc:"Repiquage des plants. Sol meuble et frais."},{name:"Reprise",date:"2026-04-25",bbch:"BBCH 09",desc:"Reprise végétative. Irrigation de démarrage."},{name:"Croissance",date:"2026-05-10",bbch:"BBCH 31",desc:"Développement foliaire actif. Apport azoté."},{name:"Pommaison",date:"2026-05-22",bbch:"BBCH 41",desc:"Formation de la pomme. Réduire l'irrigation."},{name:"Récolte",date:"2026-05-30",bbch:"BBCH 89",desc:"Pomme ferme, feuilles extérieures vertes. Récolte."}],Betterave:[{name:"Semis",date:"2026-03-20",bbch:"BBCH 00",desc:"Semis en sol réchauffé (T° > 5 °C) et ressuyé."},{name:"Levée",date:"2026-04-08",bbch:"BBCH 09",desc:"Cotylédons hors sol. Période à risque limaces."},{name:"4 feuilles",date:"2026-05-01",bbch:"BBCH 14",desc:"Couverture partielle du sol. Interventions herbicides."},{name:"Fermeture rang",date:"2026-06-15",bbch:"BBCH 37",desc:"Canopée fermée. Forte demande en eau et azote."},{name:"Grossissement",date:"2026-08-01",bbch:"BBCH 40",desc:"Grossissement actif de la racine. Accumulation de sucres."},{name:"Récolte",date:"2026-10-20",bbch:"BBCH 89",desc:"Teneur en sucre optimale. Arrachage selon planning usine."}]},Ki=[{name:"Semis",date:"2026-04-01",bbch:"BBCH 00",desc:"Semis."},{name:"Levée",date:"2026-04-20",bbch:"BBCH 09",desc:"Levée des plantules."},{name:"Floraison",date:"2026-06-15",bbch:"BBCH 65",desc:"Floraison."},{name:"Récolte",date:"2026-08-20",bbch:"BBCH 89",desc:"Maturité physiologique."}];function Zi(e){if(!e)return[];const t=e.toLowerCase();for(const i of Object.keys(pt))if(t.startsWith(i.toLowerCase()))return pt[i];return Ki}function Qi(){const e=document.getElementById("toggle-phenologie");e&&e.addEventListener("change",()=>{Ot()})}function Ot(){document.querySelectorAll(".pheno-overlay").forEach(p=>p.remove());const e=document.getElementById("toggle-phenologie");if(!(e!=null&&e.checked))return;const t=k.crop||E.crop,i=Zi(t);if(!i.length)return;const n=Date.now(),a=me()*6e4,s=n-a,l=600,u=46,d=10,c=14,m=28,r=l-u-d,o=c+4,f=180-m,h=i.filter(p=>{const b=new Date(p.date).getTime();return b>=s&&b<=n});h.length&&document.querySelectorAll(".chart-card").forEach(p=>{const b=p.querySelector(".chart-svg, .tensio-svg");if(!b)return;const w=document.createElementNS("http://www.w3.org/2000/svg","g");w.setAttribute("class","pheno-overlay"),h.forEach(g=>{const C=(new Date(g.date).getTime()-s)/a,B=u+C*r,v=document.createElementNS("http://www.w3.org/2000/svg","line");v.setAttribute("x1",B.toFixed(1)),v.setAttribute("x2",B.toFixed(1)),v.setAttribute("y1",o),v.setAttribute("y2",f),v.setAttribute("stroke","#3a9e6a"),v.setAttribute("stroke-width","1"),v.setAttribute("stroke-dasharray","4,3"),w.appendChild(v);const y=14,S=g.name.length>y?g.name.slice(0,y-1)+"…":g.name,M=(B+3).toFixed(1),j=(o+2).toFixed(1),A=document.createElementNS("http://www.w3.org/2000/svg","text");A.setAttribute("x",M),A.setAttribute("y",j),A.setAttribute("transform",`rotate(90, ${M}, ${j})`),A.setAttribute("text-anchor","start"),A.setAttribute("font-size","9"),A.setAttribute("font-family","var(--font)"),A.setAttribute("fill","#3a9e6a"),A.style.cursor="pointer",A.textContent=S,w.appendChild(A);const H=document.createElementNS("http://www.w3.org/2000/svg","rect");H.setAttribute("x",(B-8).toFixed(1)),H.setAttribute("y",o.toString()),H.setAttribute("width","16"),H.setAttribute("height",(f-o).toString()),H.setAttribute("fill","transparent"),H.style.cursor="pointer",H.addEventListener("click",J=>en(g,J)),w.appendChild(H)}),b.appendChild(w)})}let he=null;function en(e,t){he&&(he.remove(),he=null);const i=document.createElement("div");i.className="pheno-popover";const n=l=>{const[u,d,c]=l.split("-");return`${c}/${d}/${u}`};i.innerHTML=`
    <div class="pheno-pop-hd">
      <span class="pheno-pop-badge">${e.bbch}</span>
      <span class="pheno-pop-name">${e.name}</span>
      <button class="pheno-pop-close">×</button>
    </div>
    <div class="pheno-pop-date">${n(e.date)}</div>
  `,i.querySelector(".pheno-pop-close").addEventListener("click",()=>{i.remove(),he=null});const a=t.clientX,s=t.clientY;i.style.position="fixed",i.style.top=s-8+"px",i.style.left=a+12+"px",document.body.appendChild(i),he=i,setTimeout(()=>{const l=i.offsetWidth,u=i.offsetHeight;let d=s-8,c=a+12;c+l>window.innerWidth-8&&(c=a-l-12),d+u>window.innerHeight-8&&(d=s-u),i.style.top=Math.max(8,d)+"px",i.style.left=Math.max(8,c)+"px"},0),document.addEventListener("click",function l(u){i.contains(u.target)||(i.remove(),he=null,document.removeEventListener("click",l))},{capture:!0})}function tn(){const e=document.getElementById("toggle-notes");e&&e.addEventListener("change",Nt)}function Nt(){document.querySelectorAll(".notes-overlay").forEach(o=>o.remove()),ft();const e=document.getElementById("toggle-notes");if(!(e!=null&&e.checked))return;const t=ke().filter(o=>o.type==="note"||o.type==="traitement");if(!t.length)return;const i=Date.now(),n=me()*6e4,a=i-n,s=600,l=46,u=10,d=28,c=s-l-u,m=180-d,r=t.filter(o=>{const f=new Date(o.date+"T12:00:00").getTime();return f>=a&&f<=i});r.length&&document.querySelectorAll(".chart-card").forEach(o=>{const f=o.querySelector(".chart-svg, .tensio-svg");if(!f)return;const h=document.createElementNS("http://www.w3.org/2000/svg","g");h.setAttribute("class","notes-overlay"),r.forEach(p=>{const w=(new Date(p.date+"T12:00:00").getTime()-a)/n,g=l+w*c,C=p.type==="traitement"?"#78c860":"#60a8e0",B=m+9,v=document.createElementNS("http://www.w3.org/2000/svg","polygon"),y=5;v.setAttribute("points",`${g.toFixed(1)},${(B-y).toFixed(1)} ${(g+y).toFixed(1)},${B.toFixed(1)} ${g.toFixed(1)},${(B+y).toFixed(1)} ${(g-y).toFixed(1)},${B.toFixed(1)}`),v.setAttribute("fill",C),v.setAttribute("stroke","#fff"),v.setAttribute("stroke-width","1.5"),h.appendChild(v);const S=document.createElementNS("http://www.w3.org/2000/svg","rect");S.setAttribute("x",(g-9).toFixed(1)),S.setAttribute("y",m.toFixed(1)),S.setAttribute("width","18"),S.setAttribute("height","18"),S.setAttribute("fill","transparent"),S.style.cursor="default",S.addEventListener("mouseenter",M=>nn(p,M)),S.addEventListener("mouseleave",ft),h.appendChild(S)}),f.appendChild(h)})}let X=null;function nn(e,t){X||(X=document.createElement("div"),X.className="note-tip",document.body.appendChild(X));const i=e.type==="traitement";let a=`<div class="note-tip-header">
    <span class="note-tip-badge note-tip-badge--${i?"trait":"note"}">
      <i class="bi ${i?"bi-eyedropper":"bi-pencil"}"></i> ${i?"Traitement":"Note"}
    </span>
    <span class="note-tip-date">${(u=>{const[d,c,m]=u.split("-");return`${m}/${c}/${d}`})(e.date)}</span>
  </div>`;e.texte&&(a+=`<div class="note-tip-texte">${e.texte}</div>`),i&&(e.produit||e.dose||e.cible)&&(a+='<div class="note-tip-detail">',e.produit&&(a+=`<span><i class="bi bi-flask"></i> ${e.produit}</span>`),e.dose&&(a+=`<span><i class="bi bi-droplet"></i> ${e.dose}</span>`),e.cible&&(a+=`<span><i class="bi bi-bullseye"></i> ${e.cible}</span>`),a+="</div>"),X.innerHTML=a,X.style.display="block";const s=t.clientX+14,l=t.clientY-10;X.style.left=s+"px",X.style.top=l+"px",requestAnimationFrame(()=>{const u=X.offsetWidth;s+u>window.innerWidth-8&&(X.style.left=t.clientX-u-10+"px")})}function ft(){X&&(X.style.display="none")}function an(){pe()}function pe(){var t,i,n,a,s,l;const e=document.getElementById("compare-control");if(e)if(de)e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> Même période l'année dernière <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(t=e.querySelector(".compare-clear-icon"))==null||t.addEventListener("click",u=>{u.stopPropagation(),de=!1,pe(),Y()}),(i=e.querySelector("#compare-open-btn"))==null||i.addEventListener("click",We);else if(G){const u=((n=oe.find(d=>d.id===G))==null?void 0:n.name)||"Parcelle";e.innerHTML=`<button class="compare-btn compare-btn--active" id="compare-open-btn"><i class="bi bi-layout-split"></i> ${u} <i class="bi bi-x-lg compare-clear-icon" style="opacity:.7"></i></button>`,(a=e.querySelector(".compare-clear-icon"))==null||a.addEventListener("click",d=>{d.stopPropagation(),G=null,pe(),Y()}),(s=e.querySelector("#compare-open-btn"))==null||s.addEventListener("click",We)}else e.innerHTML='<button class="compare-btn" id="compare-open-btn"><i class="bi bi-layout-split"></i> Comparer avec…</button>',(l=e.querySelector("#compare-open-btn"))==null||l.addEventListener("click",We)}function We(){var s;const e=document.getElementById("compare-dropdown");if(e){e.remove();return}const t=document.getElementById("compare-control"),i=oe.filter(l=>l.id!==P),n=document.createElement("div");n.id="compare-dropdown",n.className="compare-dropdown",n.innerHTML=`
    <input class="compare-search-input" type="text" placeholder="Rechercher une parcelle…">
    <div class="compare-dropdown-item compare-dropdown-item--year-ago${de?" active":""}" data-year-ago="1"><i class="bi bi-calendar2-week"></i> Même période l'année dernière</div>
    <div class="compare-dropdown-sep"></div>
    <div class="compare-dropdown-list">
      ${i.map(l=>`<div class="compare-dropdown-item${l.id===G?" active":""}" data-id="${l.id}"><i class="bi bi-map"></i> ${l.name}</div>`).join("")}
    </div>
  `,t.appendChild(n);const a=n.querySelector(".compare-search-input");a.focus(),a.addEventListener("input",l=>{const u=l.target.value.toLowerCase();n.querySelectorAll(".compare-dropdown-list .compare-dropdown-item").forEach(d=>{d.style.display=d.textContent.toLowerCase().includes(u)?"":"none"})}),(s=n.querySelector(".compare-dropdown-item--year-ago"))==null||s.addEventListener("click",()=>{G=null,de=!0,n.remove(),pe(),Y()}),n.querySelectorAll(".compare-dropdown-list .compare-dropdown-item").forEach(l=>{l.addEventListener("click",()=>{de=!1,G=parseInt(l.dataset.id),n.remove(),pe(),Y()})}),setTimeout(()=>{document.addEventListener("click",function l(u){!n.contains(u.target)&&!t.contains(u.target)&&(n.remove(),document.removeEventListener("click",l))})},0)}function sn(){const e=Ze.find(t=>t.id===E.orgId);zt(e),rn(e),qe(),Ke(),be(),tt()}const ht=["Abricotier","Ail","Amandier","Artichaut","Asperge","Aubergine","Avoine","Basilic","Betterave fourragère","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Chou pommé","Ciboulette","Citrouille","Clémentinier","Courgette","Echalote","Endive","Epinard","Fève","Figuier","Fraisier","Framboisier","Gesse","Giroflier","Haricot vert","Houblon","Kiwi","Lavande","Lentille","Luzerne","Maïs doux","Maïs grain","Maïs semence","Maïs silage","Melon","Menthe","Moutarde","Navet","Nectarinier","Noisetier","Noyer","Oignon","Olivier","Orge de brasserie","Orge de printemps","Orge d'hiver","Pêcher","Persil","Pissenlit","Poireau","Pois chiche","Pois de conserve","Pois fourrager","Pois protéagineux","Poivron","Pomme de terre","Pommier","Poirier","Prunier","Pruneau d'Agen","Radis","Raisin de cuve","Raisin de table","Riz","Romarin","Sarrasin","Seigle","Soja","Sorgho","Tabac","Thym","Tomate","Tournesol","Triticale","Vigne","Cardon","Céleri","Cerise","Châtaignier","Colza","Courge","Fénugrec","Groseillier","Lin fibre","Lin oléagineux","Mâche","Millet","Myrtille","Noix de cajou","Paprika","Patate douce","Pistachier","Poisson-Chat","Quinoa","Safran","Sainfoin","Scorsonère","Shallot","Topinambour","Trèfle","Vesce","Fétuque","Ray-grass","Prairie temporaire","Prairie permanente","Jachère","Autre"];function zt(e){const t=document.getElementById("panel-ident"),i=k,n=i.texture||null,a=i.irrigation||null,s=i.crop||ht[0],l=i.env||null,u=n===_e,d=i.soilAnalysis||{},c=i.latlngs,m=Array.isArray(c)&&c.length>=3,r=i.area?`${i.area} ha <span class="field-computed">(calculé)</span>`:m?'— <span class="field-computed">(calculé)</span>':'<span class="field-computed">Tracez le contour pour calculer la surface de la parcelle.</span>';t.innerHTML=`
    ${Pe("Nom",i.name||"—","name","text")}
    ${on("Culture",s,"crop",ht)}
    ${vt("Surface",r)}
    ${Ve("Environnement",l,"env",ri,"Plein champ")}
    ${Ve("Texture sol",n,"texture",[...oi,_e],"Indéfini")}
    ${u?`
      ${Pe("Argile (%)",String(d.argile??""),"soilArgile","number")}
      ${Pe("Limon (%)",String(d.limon??""),"soilLimon","number")}
      ${Pe("Sable (%)",String(d.sable??""),"soilSable","number")}
    `:""}
    ${Ve("Irrigation",a,"irrigation",Tt,"Non renseigné")}
    ${vt("Exploitation",e?e.name:"—")}
  `,se(t,"name",i.name||"",o=>{W({name:o}),Bt(o,{label:"Parcelles",href:"parcelles.html"})}),se(t,"crop",s,o=>W({crop:o})),se(t,"env",l||"",o=>W({env:o||null})),se(t,"texture",n||"",o=>{const f=o||null,h={texture:f};f!==_e&&(h.soilAnalysis=null),W(h),zt(e)}),u&&(se(t,"soilArgile",String(d.argile??""),o=>W({soilAnalysis:{...k.soilAnalysis,argile:+o}})),se(t,"soilLimon",String(d.limon??""),o=>W({soilAnalysis:{...k.soilAnalysis,limon:+o}})),se(t,"soilSable",String(d.sable??""),o=>W({soilAnalysis:{...k.soilAnalysis,sable:+o}}))),se(t,"irrigation",a||"",o=>W({irrigation:o||null}))}function Pe(e,t,i,n="text"){const a=(t||"").replace(/"/g,"&quot;");return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <input type="${n}" class="panel-field-input" data-val value="${a}">
    </div>`}function on(e,t,i,n){return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${n.map(a=>`<option${a===t?" selected":""}>${a}</option>`).join("")}
      </select>
    </div>`}function Ve(e,t,i,n,a="—"){const l=n.includes(a)?"":`<option value=""${t?"":" selected"}>${a}</option>`;return`
    <div class="panel-row" data-field="${i}">
      <span class="panel-row-key">${e}</span>
      <select class="panel-field-input" data-val>
        ${l}
        ${n.map(u=>`<option${u===(t||a)?" selected":""}>${u}</option>`).join("")}
      </select>
    </div>`}function vt(e,t){return`
    <div class="panel-row">
      <span class="panel-row-key">${e}</span>
      <span class="panel-row-val">${t}</span>
    </div>`}function se(e,t,i,n){const a=e.querySelector(`[data-field="${t}"] [data-val]`);if(!a)return;const s=()=>{var u;const l=(u=a.value)==null?void 0:u.trim();l&&l!==i&&(i=l,n(l))};a.addEventListener("change",s),a.tagName==="INPUT"&&a.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),a.blur())})}function rn(e){const t=document.getElementById("panel-geoloc"),i=k.latlngs,n=Array.isArray(i)&&i.length>=3,a=k.ville||E.ville||(e==null?void 0:e.ville)||"—",s=E.departement||(e==null?void 0:e.departement),l=k.lat??E.lat??(e==null?void 0:e.lat),u=k.lng??E.lng??(e==null?void 0:e.lng);t.innerHTML=`
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
      <a href="parcelle-modifier-contour.html?id=${P}" class="contour-link">
        <i class="bi bi-pencil-square"></i>
        ${n?"Modifier le contour":"Tracer le contour"}
      </a>
    </div>
  `}function ln(){const e=new Set;return F.filter(i=>k.linkedSensorIds.includes(i.id)).forEach(i=>{const n=q[i.model]||[];V.includes(i.model)||n.forEach(a=>e.add(a.id))}),e}function bt(e){const t=q[e]||[];return t.length?`<div class="sensor-metric-badges">${t.map(i=>`<span class="sensor-metric-badge" style="--mc:${i.color}">${i.name}</span>`).join("")}</div>`:""}function qe(){const e=document.getElementById("panel-sensors"),t=F.filter(f=>k.linkedSensorIds.includes(f.id)),i=F.filter(f=>f.orgId===E.orgId&&!k.linkedSensorIds.includes(f.id)),n=t.filter(f=>!V.includes(f.model)),a={};n.forEach(f=>(q[f.model]||[]).forEach(h=>{a[h.id]=(a[h.id]||0)+1}));const s=Object.entries(a).filter(([,f])=>f>1).map(([f])=>{var h;return((h=Object.values(q).flat().find(p=>p.id===f))==null?void 0:h.name)||f});let l="";if(s.length>0&&(l+=`<div class="sensor-conflict-banner">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <span>Conflit de métriques : <strong>${s.join(", ")}</strong> mesurée(s) par plusieurs capteurs. Les données peuvent être en doublon.</span>
    </div>`),t.length===0)l+='<div class="panel-empty" style="margin-bottom:8px">Aucun capteur lié</div>';else{const f=t.filter(p=>V.includes(p.model)),h=t.filter(p=>!V.includes(p.model));if(l+=h.map(p=>{const b=p.event&&(Array.isArray(p.event)?p.event.length>0:!0),w=b?Array.isArray(p.event)?p.event[0]:p.event:null;return`
      <div class="sensor-linked-row">
        <div class="sensor-linked-info">
          <div style="display:flex;align-items:center;gap:6px">
            <a href="capteur-detail.html?id=${p.id}" class="sensor-linked-link">${ne[p.model]||p.model}</a>
            ${b?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
          </div>
          <span class="sensor-linked-detail">${p.model} · ${p.serial}</span>
          ${b?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${w}</span>`:""}
          ${bt(p.model)}
        </div>
        <button class="remove-sensor-btn icon-btn" data-id="${p.id}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>`}).join(""),f.length>0){const p={};f.forEach(b=>{const w=b.depth!=null?`${b.depth} cm`:b.model;p[w]||(p[w]=[]),p[w].push(b)}),l+=`<div class="sensor-kit-hd">
        <span class="sensor-kit-hd-label">Kit de tensiomètres</span>
        ${bt("CHP-15/30")}
      </div>`,Object.entries(p).forEach(([b,w])=>{l+=`<div style="font-size:11px;color:var(--txt2);margin:4px 0 2px">— ${b}</div>`,l+=w.map(g=>{const $=g.event&&(Array.isArray(g.event)?g.event.length>0:!0),C=$?Array.isArray(g.event)?g.event[0]:g.event:null;return`
          <div class="sensor-linked-row" style="padding-left:12px">
            <div class="sensor-linked-info">
              <div style="display:flex;align-items:center;gap:6px">
                <a href="capteur-detail.html?id=${g.id}" class="sensor-linked-link">${ne[g.model]||g.model}</a>
                ${$?'<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0"></span>':""}
              </div>
              <span class="sensor-linked-detail">${g.model} · ${g.serial}</span>
              ${$?`<span style="font-size:11px;color:#ff3b30;display:flex;align-items:center;gap:4px"><i class="bi bi-exclamation-triangle-fill"></i>${C}</span>`:""}
            </div>
            <button class="remove-sensor-btn icon-btn" data-id="${g.id}" title="Retirer">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>`}).join("")})}}e.innerHTML=l;const u=t.some(f=>f.model==="PYRANO"),d=[{name:"Évapotranspiration (ETP)",color:"#c090e0"},...u?[]:[{name:"Rayonnement solaire",color:"#f5c842"}],{name:"Température de rosée",color:"#80c8e8"}],c=document.getElementById("panel-parcel-metrics-ext");c&&(c.innerHTML=`
      <div class="panel-parcel-metrics">
        <div class="panel-parcel-metrics-title">Données spatialisées</div>
        <div class="sensor-metric-badges">
          ${d.map(f=>`<span class="sensor-metric-badge" style="--mc:${f.color}">${f.name}</span>`).join("")}
        </div>
      </div>`);const m=document.getElementById("sensor-add-row"),r=document.getElementById("add-sensor-select");m&&r&&(i.length>0?(r.innerHTML='<option value="">Ajouter un capteur…</option>'+i.map(f=>`<option value="${f.id}">${ne[f.model]||f.model} — ${f.serial}</option>`).join(""),m.style.display=""):m.style.display="none"),e.querySelectorAll(".remove-sensor-btn").forEach(f=>{f.addEventListener("click",()=>{const h=parseInt(f.dataset.id),p=F.find(w=>w.id===h),b=p?`${ne[p.model]||p.model} — ${p.serial}`:`capteur #${h}`;Te({title:"Retirer le capteur",message:`Retirer <strong>${b}</strong> de cette parcelle ?<br><br>Les données historiques sont conservées.`,confirmLabel:"Retirer",onConfirm:()=>{const w=k.linkedSensorIds.filter(g=>g!==h);W({linkedSensorIds:w}),wt(w),qe(),Y(),ge()}})})});const o=document.getElementById("add-sensor-btn");o&&o.addEventListener("click",()=>{const f=document.getElementById("add-sensor-select"),h=parseInt(f.value);if(!h)return;const p=F.find(w=>w.id===h);if(!p)return;const b=Je(p.model);if(b){const g=F.filter($=>k.linkedSensorIds.includes($.id)).filter($=>{const C=Je($.model);return C&&C!==b});if(g.length>0){const $=g.map(C=>`${ne[C.model]||C.model} — ${C.serial}`).join(", ");Te({title:"Capteur incompatible",message:`Cette parcelle utilise déjà : <strong>${$}</strong>.<br><br>Les capteurs de sol (CHP, CAPA, EC, T_MINI) sont exclusifs — une seule technologie par parcelle.<br><br>Retirer ${g.length>1?"ces capteurs":"ce capteur"} et ajouter le nouveau ?`,confirmLabel:"Remplacer",onConfirm:()=>{const C=new Set(g.map(v=>v.id)),B=k.linkedSensorIds.filter(v=>!C.has(v));W({linkedSensorIds:[...B,h]}),wt(B),$t(p),qe(),Y(),ge()}});return}}if(!V.includes(p.model)){const w=ln(),$=(q[p.model]||[]).map(C=>C.id).filter(C=>w.has(C));if($.length>0){const C=$.map(v=>{const y=Object.values(q).flat().find(S=>S.id===v);return(y==null?void 0:y.name)||v});if(!confirm(`Attention : ce capteur (${p.model}) mesure des métriques déjà fournies par un autre capteur :
• ${C.join(`
• `)}

Voulez-vous l'ajouter quand même ?`))return}}W({linkedSensorIds:[...k.linkedSensorIds,h]}),$t(p),qe(),Y(),ge()})}function Ke(){var l;const e=document.getElementById("panel-integrations"),t=k.integrations||[],i=ui.filter(u=>!t.includes(u));let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune intégration active</div>':n+=t.map(u=>`
      <div class="integ-pill-row">
        <span class="integ-pill"><i class="bi bi-plug-fill"></i> ${u}</span>
        <button class="remove-integ-btn icon-btn" data-name="${encodeURIComponent(u)}" title="Retirer">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `).join(""),e.innerHTML=n;const a=document.getElementById("integ-add-row"),s=document.getElementById("add-integ-select");a&&s&&(i.length>0?(s.innerHTML='<option value="">Ajouter une intégration…</option>'+i.map(u=>`<option value="${encodeURIComponent(u)}">${u}</option>`).join(""),a.style.display=""):a.style.display="none"),e.querySelectorAll(".remove-integ-btn").forEach(u=>{u.addEventListener("click",()=>{const d=decodeURIComponent(u.dataset.name);Te({title:"Retirer l'intégration",message:`Retirer <strong>${d}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{W({integrations:k.integrations.filter(c=>c!==d)}),Ke()}})})}),(l=document.getElementById("add-integ-btn"))==null||l.addEventListener("click",()=>{const u=document.getElementById("add-integ-select"),d=decodeURIComponent(u.value);d&&(W({integrations:[...k.integrations,d]}),Ke())})}let Q=null,ie=null;function cn(){if(Q!==null)return;const e=je(P);Q=e.linkedOrgMemberIds??re.filter(t=>{var i,n;return t.source==="adherent"&&((i=t.parcelIds)==null?void 0:i.includes(P))&&((n=t.orgIds)==null?void 0:n.includes(E.orgId))}).map(t=>t.id),ie=e.linkedConseillerIds??re.filter(t=>{var i;return t.source==="réseau"&&((i=t.parcelIds)==null?void 0:i.includes(P))}).map(t=>t.id)}function gt(e,t,i){return`<div class="member-row">
    <div>
      <span class="member-name">${e.prenom} ${e.nom}</span>
      ${i?`<span class="member-role-badge">${e.role}</span>`:""}
    </div>
    ${t?`<button class="remove-membre-btn icon-btn" data-id="${e.id}" title="Retirer"><i class="bi bi-x-lg"></i></button>`:""}
  </div>`}function be(){var r;cn();const e=((r=document.getElementById("sidebar"))==null?void 0:r.getAttribute("data-role"))==="adherent-reseau",t=document.getElementById("panel-membres"),i=document.getElementById("panel-membres-section"),n=re.filter(o=>{var f;return o.source==="adherent"&&((f=o.orgIds)==null?void 0:f.includes(E.orgId))}),a=n.filter(o=>Q.includes(o.id));i&&(i.style.display=!e&&n.length===0?"none":""),t&&(t.innerHTML=a.length?a.map(o=>gt(o,!0,!1)).join(""):'<p class="panel-empty">Aucun membre associé.</p>',t.querySelectorAll(".remove-membre-btn").forEach(o=>{o.addEventListener("click",()=>{const f=parseInt(o.dataset.id),h=re.find(p=>p.id===f);Te({title:"Retirer le membre",message:`Retirer <strong>${h?`${h.prenom} ${h.nom}`:`membre #${f}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{Q=Q.filter(p=>p!==f),le(P,{linkedOrgMemberIds:Q}),be()}})})}));const s=document.getElementById("add-membre-org-row");s&&(s.style.display="");const l=document.getElementById("add-membre-org-select");l&&(l.innerHTML='<option value="">Associer un membre…</option>',n.filter(o=>!Q.includes(o.id)).forEach(o=>{const f=document.createElement("option");f.value=o.id,f.textContent=`${o.prenom} ${o.nom}`,l.appendChild(f)})),document.getElementById("add-membre-org-btn").onclick=()=>{const o=parseInt(l==null?void 0:l.value);!o||Q.includes(o)||(Q.push(o),le(P,{linkedOrgMemberIds:Q}),be())};const u=document.getElementById("panel-conseillers"),d=document.getElementById("panel-conseillers-section"),c=re.filter(o=>o.source==="réseau"&&ie.includes(o.id));d&&(d.style.display=e&&c.length===0?"none":""),u&&(u.innerHTML=c.length?c.map(o=>gt(o,!e,!0)).join(""):'<p class="panel-empty">Aucun conseiller associé.</p>',e||u.querySelectorAll(".remove-membre-btn").forEach(o=>{o.addEventListener("click",()=>{const f=parseInt(o.dataset.id),h=re.find(p=>p.id===f);Te({title:"Retirer le conseiller",message:`Retirer <strong>${h?`${h.prenom} ${h.nom}`:`conseiller #${f}`}</strong> de cette parcelle ?`,confirmLabel:"Retirer",onConfirm:()=>{ie=ie.filter(p=>p!==f),le(P,{linkedConseillerIds:ie}),be()}})})}));const m=document.getElementById("add-conseiller-row");if(m&&(m.style.display=e?"none":""),!e){const o=document.getElementById("add-membre-select");o&&(o.innerHTML='<option value="">Ajouter un conseiller…</option>',re.filter(f=>f.source==="réseau"&&!ie.includes(f.id)).forEach(f=>{const h=document.createElement("option");h.value=f.id,h.textContent=`${f.prenom} ${f.nom} (${f.role})`,o.appendChild(h)})),document.getElementById("add-membre-btn").onclick=()=>{const f=parseInt(o==null?void 0:o.value);!f||ie.includes(f)||(ie.push(f),le(P,{linkedConseillerIds:ie}),be())}}}function tt(){const e=document.getElementById("panel-alertes"),t=k.alertes||[],i={seuil:"bi-graph-up-arrow",cumul:"bi-droplet",absence:"bi-wifi-off"};let n="";t.length===0?n+='<div class="panel-empty" style="margin-bottom:8px">Aucune alerte configurée</div>':n+=t.map((a,s)=>`
      <div class="alert-item">
        <i class="bi ${i[a.type]||"bi-bell"}" style="color:var(--warn)"></i>
        <div class="alert-item-body">
          <div class="alert-item-label">${a.label}</div>
          <div class="alert-item-meta">${a.metric} ${a.condition||""} ${a.threshold||""} ${a.unit||""}</div>
        </div>
        <button class="remove-alert-btn icon-btn" data-idx="${s}" title="Supprimer"><i class="bi bi-trash"></i></button>
      </div>
    `).join(""),n+='<button id="create-alert-btn" class="action-btn action-btn--primary" style="margin-top:6px"><i class="bi bi-plus"></i> Créer une alerte</button>',e.innerHTML=n,e.querySelectorAll(".remove-alert-btn").forEach(a=>{a.addEventListener("click",()=>{const s=parseInt(a.dataset.idx),l=[...k.alertes];l.splice(s,1),W({alertes:l}),tt()})}),document.getElementById("create-alert-btn").addEventListener("click",()=>{un(e)})}function dn(){const e=[];return F.filter(i=>k.linkedSensorIds.includes(i.id)).forEach(i=>{(q[i.model]||[]).forEach(a=>{e.find(s=>s.id===a.id)||e.push({id:a.id,name:a.name,unit:a.unit})})}),Qe.forEach(i=>{e.find(n=>n.id===i.id)||e.push({id:i.id,name:i.name,unit:i.unit})}),e}function un(e){if(e.querySelector(".alert-create-form"))return;const i=dn(),n=document.createElement("div");n.className="alert-create-form",n.innerHTML=`
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
  `,e.appendChild(n),n.querySelector("#alert-metric").addEventListener("change",a=>{const s=a.target.selectedOptions[0];n.querySelector("#alert-unit-label").textContent=(s==null?void 0:s.dataset.unit)||"—"}),n.querySelector("#alert-save-btn").addEventListener("click",()=>{const s=n.querySelector("#alert-metric").value,l=i.find(m=>m.id===s),u=n.querySelector("#alert-condition").value,d=n.querySelector("#alert-threshold").value;if(!s||!d)return;const c={type:"seuil",label:`Alerte ${(l==null?void 0:l.name)||s}`,metric:(l==null?void 0:l.name)||s,condition:u,threshold:d,unit:(l==null?void 0:l.unit)||""};W({alertes:[...k.alertes||[],c]}),tt()}),n.querySelector("#alert-cancel-btn").addEventListener("click",()=>n.remove())}function mn(e,t){const i=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(i),download:t});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function pn(){const e=k.name||E.name||"Parcelle",t=Be(k.linkedSensorIds);let i;if(G){const o=oe.find(b=>b.id===G),f=F.filter(b=>b.parcelIds.includes(G)).map(b=>b.id),h=Be(f),p=(o==null?void 0:o.name)||"Comparaison";i=[...t.map(b=>({h:`[${e}] ${b.name} (${b.unit})`,gen:b.base})),...h.map(b=>({h:`[${p}] ${b.name} (${b.unit})`,gen:b.base}))]}else i=t.map(o=>({h:`${o.name} (${o.unit})`,gen:o.base}));const n=me()*6e4,a=Se()*6e4,s=K==="custom"&&we?we:new Date,l=K==="custom"&&ye?ye:new Date(s-n),u=Math.min(Math.ceil((s-l)/a)+1,500),d=(s-l)/Math.max(u-1,1),c=["Horodatage",...i.map(o=>o.h)].join(";"),m=Array.from({length:u},(o,f)=>[new Date(l.getTime()+f*d).toISOString().replace("T"," ").slice(0,19),...i.map(p=>p.gen())].join(";")),r=e.replace(/[^\w]/g,"_");mn([c,...m].join(`\r
`),`${r}_${K}_${new Date().toISOString().slice(0,10)}.csv`)}function Te({title:e,message:t,confirmLabel:i="Confirmer",onConfirm:n}){const a=document.createElement("div");a.className="modal add-modal",a.style.zIndex="9999",a.innerHTML=`
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
    </div>`,a.querySelector(".add-modal-close").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-cancel").addEventListener("click",()=>a.remove()),a.querySelector(".confirm-ok").addEventListener("click",()=>{a.remove(),n()}),a.addEventListener("click",s=>{s.target===a&&a.remove()}),document.body.appendChild(a)}const fn={zoomControl:!1,attributionControl:!1,dragging:!1,touchZoom:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1,tap:!1},_t=[{key:"N",icon:"bi-arrow-up"},{key:"NE",icon:"bi-arrow-up-right"},{key:"E",icon:"bi-arrow-right"},{key:"SE",icon:"bi-arrow-down-right"},{key:"S",icon:"bi-arrow-down"},{key:"SW",icon:"bi-arrow-down-left"},{key:"W",icon:"bi-arrow-left"},{key:"NW",icon:"bi-arrow-up-left"}];function hn(e,t){const i=(Math.atan2(t,e)*180/Math.PI+360)%360;return _t[Math.round(i/45)%8].key}function vn(e,t){const i=e.getNorth(),n=e.getSouth(),a=e.getEast(),s=e.getWest(),l=(i-n)*.1,u=(a-s)*.1,d=i-l,c=n+l,m=a-u,r=s+u,o=(d+c)/2,f=(m+r)/2;return{N:[d,f],NE:[d,m],E:[o,m],SE:[c,m],S:[c,f],SW:[c,r],W:[o,r],NW:[d,r]}[t]}function yt(e,t,i){const n=k.linkedSensorIds||[];if(!n.length)return;const a=e.getBounds(),s={};n.forEach(l=>{const u=F.find(o=>o.id===l);if(!u)return;const d=u.parcelIds.find(o=>o!==E.id),c=d?oe.find(o=>o.id===d):null,m=(c==null?void 0:c.lat)??t,r=(c==null?void 0:c.lng)??i;if(!(m==null||r==null))if(a.contains([m,r]))L.circleMarker([m,r],{radius:6,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.95}).addTo(e);else{const o=hn(m-t,r-i);s[o]=(s[o]||0)+1}}),Object.entries(s).forEach(([l,u])=>{const d=_t.find(m=>m.key===l),c=L.divIcon({className:"mini-map-dir-arrow",html:`<div class="mini-map-dir-arrow-inner"><i class="bi ${d.icon}"></i>${u>1?`<span class="mini-map-dir-count">${u}</span>`:""}</div>`,iconSize:[24,24],iconAnchor:[12,12]});L.marker(vn(a,l),{icon:c,interactive:!1}).addTo(e)})}function bn(){if(Ge){Ge.invalidateSize();return}const e=Ze.find(s=>s.id===E.orgId),t=k.lat??E.lat??(e==null?void 0:e.lat),i=k.lng??E.lng??(e==null?void 0:e.lng);if(t==null||i==null)return;const n=k.latlngs,a=L.map("parcel-mini-map",fn);if(Ge=a,L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri"}).addTo(a),Array.isArray(n)&&n.length>=3){const s=L.polygon(n,{color:"white",weight:2,fillColor:"#0172A4",fillOpacity:.3}).addTo(a);a.fitBounds(s.getBounds(),{padding:[10,10]});const l=s.getBounds().getCenter();yt(a,l.lat,l.lng)}else{const s=.009009009009009009,l=1/(111*Math.cos(t*Math.PI/180));a.fitBounds([[t-s,i-l],[t+s,i+l]]),L.circleMarker([t,i],{radius:7,color:"white",fillColor:"var(--ok)",fillOpacity:1,weight:2}).addTo(a),yt(a,t,i)}}function gn(){const e=document.getElementById("detail-layout"),t=document.getElementById("panel-toggle"),i=t.querySelector("i");t.addEventListener("click",()=>{const n=e.classList.toggle("panel-collapsed");t.title=n?"Afficher le panneau":"Masquer le panneau",i.className=n?"bi bi-chevron-left":"bi bi-chevron-right"})}let Ge=null;function yn(){const e=document.querySelectorAll(".detail-tab-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),document.querySelectorAll(".detail-tab-pane").forEach(i=>i.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.pane).classList.add("active"),t.dataset.pane==="tab-journal"&&et()})})}const wn={"previsions-5j":{size:"1x1",title:"Prévisions 5 jours",icon:"bi-calendar3-week",color:"#5b8dd9",render:Sn,footer:{label:"Voir détails",href:"previsions.html"}},weephyt:{size:"1x1",title:"Traitements",icon:"bi-shield-check",color:"#2d9e5f",render:Cn,footer:{label:"Voir détails",href:"#",tab:"journal"}},cumuls:{size:"1x1",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#2E75B6",render:Re},"pluie-hist":{size:"1x1",title:"Pluie",icon:"bi-cloud-rain-heavy",color:"#2E75B6",render:Mt("pluie"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"etp-hist":{size:"1x1",title:"Évapotranspiration",icon:"bi-moisture",color:"#7DBDD7",render:Mt("etp"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},bilan:{size:"1x1",title:"Bilan hydrique",icon:"bi-droplet",color:"#0172A4",render:Hn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},irrigations:{size:"1x1",title:"Irrigations",icon:"bi-moisture",color:"#FF8C00",render:Ae,footer:{label:"Voir détails",href:`irrigation.html?plot=${P}`}},gel:{size:"1x1",title:"Suivi du risque de gel",icon:"bi-thermometer-snow",color:"#FEE7B4",render:Mn,footer:{label:"Voir détails",href:"previsions.html"}},dpv:{size:"1x1",title:"DPV",icon:"bi-droplet-half",color:"#5E88EC",render:En,footer:{label:"Voir détails",href:"#",tab:"donnees"}},thi:{size:"1x1",title:"THI",icon:"bi-heart-pulse",color:"#e0a030",render:kn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},"temp-rosee":{size:"1x1",title:"Température de rosée",icon:"bi-thermometer",color:"#72B0D8",render:Bn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},"temp-sol":{size:"1x1",title:"Température du sol",icon:"bi-layers",color:"#795548",render:jn,footer:{label:"Voir détails",href:"#",tab:"donnees"}},maizy:{size:"1x1",title:"Maï'zy",icon:"bi-calendar-check",color:"#2d9e5f",render:Tn,footer:{label:"Voir détails",href:"#"}},tavelure:{size:"1x1",title:"Tavelure Pomme",icon:"bi-exclamation-triangle",color:"#e07050",render:An,footer:{label:"Voir détails",href:"#"}},"suivi-culture":{size:"1x1",title:"Suivi de culture",icon:"bi-flower2",color:"#78d8a0",render:ve},decitrait:{size:"1x1",title:"Decitrait",icon:"bi-shield",color:"#6080b0",render:ve,footer:{label:"Voir détails",href:"#"}},"previsions-6h":{size:"1x1",title:"Prévisions à 6 heures",icon:"bi-clock",color:"#5b8dd9",render:ve,footer:{label:"Voir détails",href:"previsions.html"}},"previsions-jour":{size:"1x1",title:"Prévisions du jour",icon:"bi-sun",color:"#f5c842",render:ve,footer:{label:"Voir détails",href:"previsions.html"}},"previsions-tensio":{size:"1x1",title:"Prévisions tensiométrie",icon:"bi-graph-down",color:"#A6C157",render:ve,footer:{label:"Voir détails",href:"previsions.html"}},"w-station":{size:"1x1",title:"Station météo",icon:"bi-broadcast",color:"#FBAF05",render:Z("w-station"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-thygro":{size:"1x1",title:"Thermomètre-hygromètre",icon:"bi-thermometer-half",color:"#FBAF05",render:Z("w-thygro"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-tsol":{size:"1x1",title:"Thermomètre de sol",icon:"bi-layers",color:"#795548",render:Z("w-tsol"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-anem":{size:"1x1",title:"Anémomètre",icon:"bi-wind",color:"#616161",render:Z("w-anem"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-pyrano":{size:"1x1",title:"Pyranomètre",icon:"bi-sun",color:"#CBCB0B",render:Z("w-pyrano"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-lws":{size:"1x1",title:"Capteur d'humectation foliaire",icon:"bi-droplet",color:"#00887E",render:Z("w-lws"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-par":{size:"1x1",title:"Capteur PAR",icon:"bi-brightness-high",color:"#4CBB17",render:Z("w-par"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-capa":{size:"1x1",title:"Sonde capacitive",icon:"bi-moisture",color:"#ED9A2C",render:Z("w-capa"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-tensio":{size:"1x1",title:"Tensiomètre",icon:"bi-graph-down",color:"#A6C157",render:Z("w-tensio"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"w-ec":{size:"1x1",title:"Sonde de fertirrigation",icon:"bi-plug",color:"#2BCDDE",render:Z("w-ec"),footer:{label:"Voir détails",href:"#",tab:"donnees"}},"profil-capteurs":{size:"1x1",title:"Profil capteurs",icon:"bi-bar-chart",color:"#5b8dd9",render:ve},"niveau-reservoir":{size:"1x1",title:"Niveau de réservoir (RFU)",icon:"bi-droplet-fill",color:"#0172A4",render:Qt},"profil-reservoir":{size:"1x1",title:"Profil de réservoir",icon:"bi-clipboard-data",color:"#0172A4",render:ei}},Wt=()=>`dash-widgets-parcel-${P}`;function $e(){try{const e=JSON.parse(localStorage.getItem(Wt()));if(Array.isArray(e)&&e.length)return e}catch{}return $n()}function xe(e){localStorage.setItem(Wt(),JSON.stringify(e))}function wt(e){const t=F.filter(c=>e.includes(c.id)),i=new Set(t.map(c=>c.model)),n=[...i].some(c=>c.startsWith("CAPA-")),a=[...i].some(c=>V.includes(c)),s=new Set(["previsions-5j","weephyt","cumuls","pluie-hist","etp-hist"]);(i.has("P+")||i.has("PT")||i.has("SMV")||i.has("P"))&&s.add("w-station"),i.has("TH")&&s.add("w-thygro"),i.has("T_MINI")&&s.add("w-tsol"),i.has("W")&&s.add("w-anem"),i.has("PYRANO")&&s.add("w-pyrano"),i.has("LWS")&&s.add("w-lws"),i.has("T_GEL")&&s.add("gel"),i.has("PAR")&&s.add("w-par"),n&&s.add("w-capa"),a&&s.add("w-tensio"),i.has("EC")&&s.add("w-ec"),(a||n)&&s.add("bilan"),(!!E.irrigation&&E.irrigation!=="Non irrigué"||N.some(c=>c.plotId===E.id))&&s.add("irrigations");const u=$e(),d=u.filter(c=>s.has(c));d.length!==u.length&&xe(d)}function $t(e){const t=$e(),i=a=>{t.includes(a)||t.push(a)},n=e.model;(n==="P+"||n==="PT"||n==="SMV"||n==="P")&&i("w-station"),n==="TH"&&i("w-thygro"),n==="T_MINI"&&i("w-tsol"),n==="W"&&i("w-anem"),n==="PYRANO"&&i("w-pyrano"),n==="LWS"&&i("w-lws"),n==="T_GEL"&&i("gel"),n==="PAR"&&i("w-par"),n==="EC"&&i("w-ec"),n.startsWith("CAPA-")&&(i("w-capa"),i("bilan")),V.includes(n)&&(i("w-tensio"),i("bilan")),xe(t)}function $n(){const e=F.filter(l=>k.linkedSensorIds.includes(l.id)),t=new Set(e.map(l=>l.model)),i=[...t].some(l=>l.startsWith("CAPA-")),n=[...t].some(l=>V.includes(l)),a=!!E.irrigation&&E.irrigation!=="Non irrigué"||N.some(l=>l.plotId===E.id),s=["previsions-5j"];return a&&s.push("irrigations"),s.push("weephyt","cumuls"),(t.has("P+")||t.has("PT")||t.has("SMV")||t.has("P"))&&s.push("w-station"),t.has("TH")&&s.push("w-thygro"),t.has("T_MINI")&&s.push("w-tsol"),t.has("W")&&s.push("w-anem"),t.has("PYRANO")&&s.push("w-pyrano"),t.has("LWS")&&s.push("w-lws"),t.has("T_GEL")&&s.push("gel"),t.has("PAR")&&s.push("w-par"),i&&s.push("w-capa"),n&&s.push("w-tensio"),t.has("EC")&&s.push("w-ec"),(n||i)&&s.push("bilan"),s.push("pluie-hist","etp-hist"),s}function ge(){const e=document.getElementById("dash-grid");if(!e)return;const t=$e();!t.includes("irrigations")&&N.some(i=>i.plotId===E.id)&&(t.push("irrigations"),xe(t)),e.innerHTML="",t.forEach(i=>{const n=wn[i];if(!n)return;const a=document.createElement("div");a.className=`dash-block dash-block--${n.size}`,a.dataset.id=i,a.draggable=!0;const s=n.footer?`<div class="dash-block-ft"><a class="dash-block-ft-link" href="${n.footer.href}"${n.footer.tab?` data-tab="${n.footer.tab}"`:""}>${n.footer.label} →</a></div>`:"";a.innerHTML=`
      <div class="dash-block-hd" style="color:${n.color}">
        <span style="display:flex;align-items:center;gap:6px"><i class="bi ${n.icon}"></i> ${n.title}</span>
        <button class="dash-menu-btn" data-wid="${i}" title="Options" aria-label="Options">···</button>
      </div>
      <div class="dash-block-body" id="dblock-${i}"></div>
      ${s}`,e.appendChild(a),n.render(a.querySelector(`#dblock-${i}`))}),e.querySelectorAll(".dash-menu-btn").forEach(i=>{i.addEventListener("click",n=>{var c,m,r;n.stopPropagation(),(c=document.querySelector(".dash-dropdown"))==null||c.remove();const a=i.dataset.wid,s=document.createElement("div");s.className="dash-dropdown";const l=a==="irrigations"?`
        <button class="dash-dd-item" data-action="set-vol">Définir le volume limité et le débit</button>`:"";s.innerHTML=`${l}<button class="dash-dd-item dash-dd-remove" data-action="remove" data-wid="${a}">Retirer le widget</button>`;const u=i.getBoundingClientRect(),d=e.getBoundingClientRect();s.style.top=`${u.bottom-d.top+4}px`,s.style.right=`${d.right-u.right}px`,e.style.position="relative",e.appendChild(s),(m=s.querySelector('[data-action="remove"]'))==null||m.addEventListener("click",()=>{s.remove();const o=$e().filter(f=>f!==a);xe(o),ge()}),(r=s.querySelector('[data-action="set-vol"]'))==null||r.addEventListener("click",()=>{s.remove(),ti("vol")}),setTimeout(()=>document.addEventListener("click",()=>s.remove(),{once:!0}),0)})}),e.querySelectorAll(".dash-block-ft-link[data-tab]").forEach(i=>{i.addEventListener("click",n=>{var a;n.preventDefault(),(a=document.querySelector(`.detail-tab-btn[data-pane="tab-${i.dataset.tab}"]`))==null||a.click()})}),Fn(e)}function Vt(e,t=380,i=90){const u=t-28-8,d=i-6-20,c=e.flatMap(g=>g.values);let m=Math.min(...c),r=Math.max(...c);m===r&&(m-=1,r+=1);const o=e[0].values.length,f=g=>(28+g/(o-1)*u).toFixed(1),h=g=>(6+d-(g-m)/(r-m)*d).toFixed(1),p=[.25,.5,.75].map(g=>{const $=(6+g*d).toFixed(1);return`<line x1="28" y1="${$}" x2="${t-8}" y2="${$}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),b=[m,(m+r)/2,r].map(g=>`<text x="25" y="${(+h(g)+3.5).toFixed(0)}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>`).join(""),w=e.map(g=>`<path d="${g.values.map((C,B)=>`${B?"L":"M"}${f(B)},${h(C)}`).join("")}" fill="none" stroke="${g.color}" stroke-width="1.8" stroke-linejoin="round"/>`).join("");return`<svg width="100%" height="${i}" viewBox="0 0 ${t} ${i}" preserveAspectRatio="none">${b}${p}${w}</svg>`}function xn(e,t,i,n){const m=(b,w)=>{const g=Math.PI+b*Math.PI,$=Math.PI+w*Math.PI,C=(80+60*Math.cos(g)).toFixed(1),B=(90+60*Math.sin(g)).toFixed(1),v=(80+60*Math.cos($)).toFixed(1),y=(90+60*Math.sin($)).toFixed(1);return`M${C},${B} A60,60,0,${w-b>.5?1:0},1,${v},${y}`},r=m(0,1),o=t.filter(b=>b.from<e).map(b=>`<path d="${m(b.from,Math.min(b.to,e))}" fill="none" stroke="${b.color}" stroke-width="12" stroke-linecap="butt"/>`).join(""),f=Math.PI+e*Math.PI,h=(80+60*Math.cos(f)).toFixed(1),p=(90+60*Math.sin(f)).toFixed(1);return`<svg width="160" height="100" viewBox="0 0 160 100">
    <path d="${r}" fill="none" stroke="var(--bdr2)" stroke-width="12" stroke-linecap="butt"/>
    ${o}
    <circle cx="${h}" cy="${p}" r="5" fill="white" stroke="var(--txt3)" stroke-width="1.5"/>
    <text x="80" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="var(--txt)">${n}</text>
    <text x="80" y="96" text-anchor="middle" font-size="9" fill="var(--txt3)">${i}</text>
  </svg>`}function Sn(e){const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],n=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],a=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],s=new Date,l=oe.find(o=>o.id===P),u=Ze.find(o=>o.id===(l==null?void 0:l.orgId)),d=(l==null?void 0:l.ville)||(u==null?void 0:u.ville)||"—",c=(o,f)=>{const h=new Date(s);h.setDate(h.getDate()+o);const p=Math.floor((P*7+o*3)%11/2.2);return{lbl:o===0?"Auj.":t[h.getDay()],date:`${h.getDate()} ${i[h.getMonth()]}`,tmax:x(17+f,34+f),tmin:x(4+f,15+f),pluie:p>=3?x(2,18):0,vent:x(10,35),rafales:x(25,70),wi:p}},m=[0,1,2].map(o=>c(o,0)).concat([3,4].map(o=>c(o,-1))),r=o=>`
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
    <div class="w-prev5-loc"><i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i> ${d}</div>
    <div class="w-prev5-model-hdr">
      <span class="w-prev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="w-prev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="w-prev5-grid">${m.map(r).join("")}</div>`}function Cn(e){var d;const t=new Date,i=[{label:"Herbicides de contact",seed:7},{label:"Fongicides",seed:3},{label:"Herbicides racinaires",seed:11},{label:"Herbicides systémiques",seed:5}],n=Array.from({length:24},(c,m)=>{const r=new Date(t);return r.setMinutes(0,0,0),r.setHours(r.getHours()+m),r}),a=c=>`${String(c.getHours()).padStart(2,"0")}h`,s=c=>c.toDateString()===t.toDateString()?"Aujourd'hui":"Demain",l=c=>{const m=n.map((f,h)=>(c.seed*17+P*13+h*5)%11<6),r=m.findIndex(f=>f);if(r===-1)return null;let o=r;for(;o+1<m.length&&m[o+1];)o++;return{from:n[r],to:new Date(n[o].getTime()+36e5)}},u=i.map(c=>{const m=l(c);return`<div class="w-weephyt-family-row">
      <span class="w-weephyt-family-label">${c.label}</span>
      ${m?`<span class="w-weephyt-window"><i class="bi bi-check-circle-fill"></i> ${s(m.from)} ${a(m.from)}–${a(m.to)}</span>`:'<span class="w-weephyt-window w-weephyt-window--none">Aucune fenêtre sous 24h</span>'}
    </div>`}).join("");e.innerHTML=`<div class="w-weephyt-wrap">
    <div class="w-weephyt-rows">${u}</div>
    <div class="w-weephyt-actions">
      <button class="w-weephyt-btn w-weephyt-btn--pri" id="w-weephyt-saisir">Saisir un traitement</button>
    </div>
  </div>`,(d=e.querySelector("#w-weephyt-saisir"))==null||d.addEventListener("click",()=>{var c;return(c=window.openJournalModal)==null?void 0:c.call(window,"traitement")})}const Gt=()=>`w-cumuls-state-${P}`;function Yt(){try{return JSON.parse(localStorage.getItem(Gt()))||{}}catch{return{}}}function He(e){const t=Yt();localStorage.setItem(Gt(),JSON.stringify({...t,...e}))}function Re(e){const t=F.filter(o=>k.linkedSensorIds.includes(o.id)),i=new Set(t.flatMap(o=>(q[o.model]||[]).map(f=>f.id))),n=`${new Date().getFullYear()}-01-01`,a=Yt(),s=new Set(a.hidden||[]),l=a.dates||{},u=a.cfg||{},d=[{id:"etp",label:"Évapotranspiration",value:R(20,80).toFixed(1),unit:"mm",color:"#c090e0",icon:"bi-sun",show:!0},{id:"pluie",label:"Pluie",value:Pn(l.pluie||n),unit:"mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy",show:i.has("pluie")},{id:"djc",label:"Degrés jours",value:x(40,180),unit:"DJ",color:"#e07050",icon:"bi-thermometer-half",show:i.has("temp"),cfg:!0,cfgLabel:`${u.djMin??0}–${u.djMax??18}°C`,cfgFields:[{key:"djMin",label:"T min",def:0},{key:"djMax",label:"T max",def:18}]},{id:"hfroid",label:"Heures de froid",value:x(5,40),unit:"h",color:"#0B3A64",icon:"bi-snow",show:i.has("temp"),cfg:!0,cfgLabel:`< ${u.hfSeuil??7.2}°C`,cfgFields:[{key:"hfSeuil",label:"Seuil",def:7.2}]},{id:"humec",label:"Humectation",value:R(2,20).toFixed(1),unit:"h",color:"#78d8a0",icon:"bi-droplet",show:i.has("humec")},{id:"enso",label:"Ensoleillement",value:R(30,90).toFixed(1),unit:"h",color:"#f5c842",icon:"bi-brightness-high",show:!0}].filter(o=>o.show),c=d.filter(o=>!s.has(o.id)),m=d.filter(o=>s.has(o.id)),r=m.length?`<div style="border-top:1px solid var(--bdr2);padding-top:8px;margin-top:8px">
        <div style="font-size:11px;color:var(--txt3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${m.map(o=>`
          <button class="w-cumul-restore" data-cid="${o.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed var(--bdr);border-radius:8px;padding:7px 10px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${o.icon}" style="color:${o.color};font-size:14px;flex-shrink:0"></i>
            <span style="font-size:12px;color:var(--txt);flex:1">${o.label}</span>
            <i class="bi bi-plus-circle" style="color:var(--pri);font-size:14px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"";e.innerHTML=`<div class="w-cumuls-list">${c.map(o=>{const f=l[o.id]||n;return f.split("-").reverse().join("/"),`
      <div class="w-cumul-item">
        <i class="bi ${o.icon} w-cumul-icon" style="color:${o.color}"></i>
        <div class="w-cumul-body">
          <div class="w-cumul-lbl">${o.label}</div>
          <div class="w-cumul-val" style="color:${o.color}">${o.value}<span class="w-cumul-unit"> ${o.unit}</span></div>
          <div class="w-cumul-date">Depuis le <input type="date" class="w-cumul-date-input" data-cid="${o.id}" value="${f}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px">${o.cfg?`<button class="w-cumul-cfg" data-cid="${o.id}" style="border:1px solid var(--bdr2);background:transparent;font-size:12px;color:var(--txt3);cursor:pointer;font-family:inherit;padding:3px 5px;border-radius:5px;line-height:1"><i class="bi bi-gear"></i> ${o.cfgLabel}</button>`:""}</div>
        </div>
        <button class="w-cumul-del" data-cid="${o.id}" title="Retirer">×</button>
      </div>`}).join("")}</div>${r}`,e.querySelectorAll(".w-cumul-del").forEach(o=>{o.addEventListener("click",f=>{f.stopPropagation(),s.add(o.dataset.cid),He({hidden:[...s]}),Re(e)})}),e.querySelectorAll(".w-cumul-restore").forEach(o=>{o.addEventListener("click",f=>{f.stopPropagation(),s.delete(o.dataset.cid),He({hidden:[...s]}),Re(e)})}),e.querySelectorAll(".w-cumul-date-input").forEach(o=>{o.addEventListener("change",()=>{l[o.dataset.cid]=o.value,He({dates:l})})}),e.querySelectorAll(".w-cumul-cfg").forEach(o=>{o.addEventListener("click",f=>{var w;f.stopPropagation();const h=o.dataset.cid,p=c.find(g=>g.id===h);if(!(p!=null&&p.cfgFields))return;(w=e.querySelector(".w-cumul-cfg-panel"))==null||w.remove();const b=document.createElement("div");b.className="w-cumul-cfg-panel",b.style.gridColumn="1 / -1",b.innerHTML=`<div class="w-cumul-cfg-title">Paramétrer ${p.label}</div>`+p.cfgFields.map(g=>`
          <label class="w-cumul-cfg-row">
            <span>${g.label} (°C)</span>
            <input type="number" class="w-cumul-cfg-inp" data-key="${g.key}" value="${u[g.key]??g.def}" step="0.1">
          </label>`).join("")+'<button class="w-cumul-cfg-ok">OK</button>',o.closest(".w-cumul-item").after(b),b.querySelector(".w-cumul-cfg-ok").addEventListener("click",()=>{b.querySelectorAll(".w-cumul-cfg-inp").forEach(g=>{u[g.dataset.key]=parseFloat(g.value)||0}),He({cfg:u}),b.remove(),Re(e)})})})}function Mn(e){if(!F.filter(r=>k.linkedSensorIds.includes(r.id)).some(r=>r.model==="T_GEL")){e.innerHTML='<div class="dash-empty">Capteur T_GEL non lié</div>';return}const i=25,n=R(0,5),a=Array.from({length:i},(r,o)=>+(n+o*.18+R(-.8,.8)).toFixed(1)),s=a.map(r=>+(r-R(1,2.5)).toFixed(1)),l=Vt([{values:a,color:"#23B19B"},{values:s,color:"#5E88EC"}],380,100),u=a[i-1],d=s[i-1],c=x(5,8),m=String(Math.floor(Math.random()*60)).padStart(2,"0");e.innerHTML=`<div class="w-gel-wrap">
    <div class="w-gel-legend">
      <span style="color:#23B19B"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sèche</span>
      <span style="color:#5E88EC"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. humide</span>
      <span style="font-size:10px;color:var(--txt3)">12 dernières heures</span>
    </div>
    <div class="w-gel-chart">${l}</div>
    <div class="w-gel-cards">
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. sèche </span><span class="w-gel-card-val" style="color:#23B19B">${u}°C</span></div>
      <div class="w-gel-card"><span class="w-gel-card-lbl">T. humide </span><span class="w-gel-card-val" style="color:#5E88EC">${d}°C</span></div>
    </div>
    <div class="w-gel-meteo">
      <div class="w-gel-meteo-row"><i class="bi bi-sunrise" style="color:#CBCB0B"></i><span>Lever du soleil</span><strong>${c}h${m}</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-cloud" style="color:#8090a0"></i><span>Couverture nuageuse</span><strong>${x(20,80)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i><span>Humidité</span><strong>${x(60,90)} %</strong></div>
      <div class="w-gel-meteo-row"><i class="bi bi-wind" style="color:#616161"></i><span>Vent moyen</span><strong>${x(5,25)} km/h</strong></div>
    </div>
  </div>`}function En(e){const t=F.filter(o=>k.linkedSensorIds.includes(o.id));if(!t.some(o=>{const f=q[o.model]||[];return f.some(h=>h.id==="temp")&&f.some(h=>h.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=R(18,30),a=x(40,85),l=+(.611*Math.exp(17.27*n/(n+237.3))*(1-a/100)).toFixed(2),u=Math.min(l/2,1),d=l<.4?"#5b8dd9":l<.8?"#2d9e5f":l<1.2?"#f5a030":"#e07050",c=l<.4?"Transpiration faible":l<.8?"Transpiration optimale":l<1.2?"Forte transpiration":"Stress hydrique",m=[{from:0,to:.2,color:"#5b8dd9"},{from:.2,to:.4,color:"#45b7d1"},{from:.4,to:.6,color:"#2d9e5f"},{from:.6,to:.8,color:"#a0c840"},{from:.8,to:.9,color:"#f5a030"},{from:.9,to:1,color:"#e07050"}],r=t.find(o=>{const f=q[o.model]||[];return f.some(h=>h.id==="temp")&&f.some(h=>h.id==="humidite")});e.innerHTML=`<div class="w-dpv-wrap">
    <div class="w-dpv-gauge" style="color:${d}">${xn(u,m,c,l+" kPa")}</div>
    <div class="w-dpv-details">
      <div class="w-dpv-row"><i class="bi bi-thermometer-half" style="color:#FBAF05"></i> ${n.toFixed(1)} °C</div>
      <div class="w-dpv-row"><i class="bi bi-droplet-half" style="color:#5B12A4"></i> ${a} %</div>
    </div>
    ${r?`<div class="w-sensor-src">${ne[r.model]||r.model} · ${r.serial}</div>`:""}
  </div>`}function kn(e){if(!F.filter(o=>k.linkedSensorIds.includes(o.id)).some(o=>{const f=q[o.model]||[];return f.some(h=>h.id==="temp")&&f.some(h=>h.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=R(20,35),a=x(45,90),s=+(n-.55*(1-a/100)*(n-14.5)).toFixed(0),l=s<68?"#2d9e5f":s<72?"#f5c842":s<79?"#f5a030":"#e07050",u=s<68?"Confort":s<72?"Stress léger":s<79?"Stress modéré":"Stress sévère",d=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],c=new Date,m=Array.from({length:3},(o,f)=>{const h=new Date(c);return h.setDate(h.getDate()+f+1),{day:d[h.getDay()],m:x(64,72),j:x(68,80),s:x(62,70)}}),r=o=>o<68?"#2d9e5f":o<72?"#f5c842":"#f5a030";e.innerHTML=`<div class="w-thi-wrap">
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
      ${m.map(o=>`<div class="w-thi-fc-row">
        <span class="w-thi-fc-day">${o.day}</span>
        <span class="w-thi-fc-val" style="color:${r(o.m)}">${o.m}</span>
        <span class="w-thi-fc-val" style="color:${r(o.j)}">${o.j}</span>
        <span class="w-thi-fc-val" style="color:${r(o.s)}">${o.s}</span>
      </div>`).join("")}
      <div class="w-thi-fc-legend"><span>Matin</span><span>Journée</span><span>Soir</span></div>
    </div>
  </div>`,e.querySelector(".w-thi-info-btn").addEventListener("click",o=>{o.stopPropagation();const f=e.querySelector(".w-thi-legend");if(f){f.remove();return}const h=document.createElement("div");h.className="w-thi-legend",h.innerHTML=`
      <div class="w-thi-legend-title">Échelle THI</div>
      <div class="w-thi-legend-row" style="color:#2d9e5f"><span class="w-thi-legend-range">&lt; 68</span><span>Confort</span></div>
      <div class="w-thi-legend-row" style="color:#f5c842"><span class="w-thi-legend-range">68 – 71</span><span>Stress léger</span></div>
      <div class="w-thi-legend-row" style="color:#f5a030"><span class="w-thi-legend-range">72 – 78</span><span>Stress modéré</span></div>
      <div class="w-thi-legend-row" style="color:#e07050"><span class="w-thi-legend-range">≥ 79</span><span>Stress sévère</span></div>`,e.querySelector(".w-thi-wrap").insertBefore(h,e.querySelector(".w-thi-details"))})}function Bn(e){if(!F.filter(d=>k.linkedSensorIds.includes(d.id)).some(d=>{const c=q[d.model]||[];return c.some(m=>m.id==="temp")&&c.some(m=>m.id==="humidite")})){e.innerHTML='<div class="dash-empty">Capteur T+HR requis</div>';return}const n=72,a=R(14,22),s=Array.from({length:n},(d,c)=>+(a+6*Math.sin(c/24*2*Math.PI-Math.PI/2)+R(-.5,.5)).toFixed(1)),l=Array.from({length:n},(d,c)=>Math.max(30,Math.min(100,70-15*Math.sin(c/24*2*Math.PI-Math.PI/2)+R(-3,3)))),u=s.map((d,c)=>{const m=l[c]/100,r=17.27,o=237.3,f=Math.log(m)+r*d/(o+d);return+(o*f/(r-f)).toFixed(1)});e.innerHTML=`<div class="w-temprosee-wrap">
    ${Vt([{values:s,color:"#FBAF05"},{values:u,color:"#72B0D8"}],380,100)}
    <div class="w-temprosee-legend">
      <span style="color:#FBAF05"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Température (${s[n-1]}°C)</span>
      <span style="color:#72B0D8"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> Point de rosée (${u[n-1]}°C)</span>
      <span style="font-size:10px;color:var(--txt3)">3 derniers jours</span>
    </div>
  </div>`}function jn(e){if(!F.filter(M=>k.linkedSensorIds.includes(M.id)).some(M=>(q[M.model]||[]).some(j=>j.id==="tsol"))){e.innerHTML='<div class="dash-empty">Capteur T. sol requis</div>';return}const n=48,a=R(14,20),s=Array.from({length:n},(M,j)=>+(a+3*Math.sin(j/24*2*Math.PI-Math.PI/2)+R(-.4,.4)).toFixed(1)),l=15,u=22,d=380,c=100,m=28,r=8,o=6,f=20,h=d-m-r,p=c-o-f,b=[...s,l,u],w=Math.min(...b)-1,g=Math.max(...b)+1,$=M=>(m+M/(n-1)*h).toFixed(1),C=M=>(o+p-(M-w)/(g-w)*p).toFixed(1),B=+C(l),v=+C(u),y=[.25,.5,.75].map(M=>{const j=(o+M*p).toFixed(1);return`<line x1="${m}" y1="${j}" x2="${d-r}" y2="${j}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`}).join(""),S=s.map((M,j)=>`${j?"L":"M"}${$(j)},${C(M)}`).join("");e.innerHTML=`<div class="w-tsol-wrap">
    <svg width="100%" height="${c}" viewBox="0 0 ${d} ${c}" preserveAspectRatio="none">
      ${y}
      <rect x="${m}" y="${v.toFixed(1)}" width="${h}" height="${(B-v).toFixed(1)}" fill="rgba(45,158,95,.1)"/>
      <line x1="${m}" y1="${B.toFixed(1)}" x2="${d-r}" y2="${B.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <line x1="${m}" y1="${v.toFixed(1)}" x2="${d-r}" y2="${v.toFixed(1)}" stroke="#2d9e5f" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
      <path d="${S}" fill="none" stroke="#795548" stroke-width="2" stroke-linejoin="round"/>
      <text x="${m-3}" y="${o+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${g.toFixed(0)}</text>
      <text x="${m-3}" y="${o+p+4}" text-anchor="end" font-size="9" fill="var(--txt3)">${w.toFixed(0)}</text>
    </svg>
    <div class="w-tsol-legend">
      <span style="color:#795548"><i class="bi bi-dash" style="font-size:14px;vertical-align:middle"></i> T. sol · ${s[n-1]}°C</span>
      <span style="color:#2d9e5f;font-size:10px"><i class="bi bi-square-fill" style="opacity:.3"></i> Zone optimale ${l}–${u}°C</span>
      <span style="font-size:10px;color:var(--txt3)">48 dernières heures</span>
    </div>
  </div>`}function Tn(e){const t=(k.crop||E.crop||"").toLowerCase();if(!t.includes("maïs")&&!t.includes("mais")){e.innerHTML='<div class="dash-empty">Culture Maïs requise</div>';return}const i=[{name:"Farmflex 253",target:1320},{name:"DKC 3230",target:1380},{name:"Ronaldinio",target:1290},{name:"Banguy",target:1350}],n=i[P%i.length],a=E.degresJour||x(600,1200),s=Math.min(a/n.target,1),l=Math.max(0,n.target-a),u=new Date,d=Math.round(l/10),c=new Date(u);c.setDate(c.getDate()+Math.max(0,d-5));const m=new Date(u);m.setDate(m.getDate()+d+5);const r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],o=f=>`${f.getDate()} ${r[f.getMonth()]}`;e.innerHTML=`<div class="w-maizy-wrap">
    <div class="w-maizy-title">Récolte prévisionnelle</div>
    <div class="w-maizy-dates">${o(c)} — ${o(m)}</div>
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
  </div>`}function An(e){const t=(k.crop||E.crop||"").toLowerCase();if(!t.includes("pommier")&&!t.includes("pomme")){e.innerHTML='<div class="dash-empty">Culture Pommier requise</div>';return}const i=new Date,n=new Date(i);n.setDate(n.getDate()-x(2,8));const a=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=m=>`${m.getDate()} ${a[m.getMonth()]}`,l=x(8,24),u=x(80,280),d=u>200?"Élevé":u>120?"Modéré":"Léger",c=u>200?"#e07050":u>120?"#f5a030":"#2d9e5f";e.innerHTML=`<div class="w-tav-wrap">
    <div class="w-tav-ep">Dernier épisode · <strong>${s(n)}</strong></div>
    <div class="w-tav-stats">
      <div class="w-tav-stat"><span class="w-tav-stat-val">${l}h</span><span class="w-tav-stat-lbl">Durée</span></div>
      <div class="w-tav-stat"><span class="w-tav-stat-val">${u} DH</span><span class="w-tav-stat-lbl">Degrés-heures</span></div>
    </div>
    <div class="w-tav-risk" style="color:${c}">
      <i class="bi bi-circle-fill" style="font-size:8px;vertical-align:middle"></i>
      Risque d'infection estimé <strong>${d}</strong>
    </div>
    <a class="w-maizy-link" href="#">Afficher l'historique <i class="bi bi-arrow-right"></i></a>
  </div>`}const Jt=[{id:"j7",label:"J-7"},{id:"j1",label:"J-1"},{id:"j0",label:"J0"},{id:"last",label:"Dernières données"}],In=Jt.filter(e=>e.id==="j7"||e.id==="j1"),xt=()=>`w-reservoir-agg-${P}`,St=()=>`w-profil-reservoir-agg-${P}`;function Ut(e,t="j0"){return localStorage.getItem(e())||t}function Xt(e,t){localStorage.setItem(e(),t)}function Kt(e){const t=E.reserveHydrique||80,i=(E.id*17+13)%41,n={j7:-8,j1:-2,j0:0,last:1},a=Math.min(95,Math.max(15,55+i+(n[e]||0))),s=Math.round(t*a/100);return{rhu:t,pct:a,mm:s}}function Zt(e,t=Jt){return`<select class="w-reservoir-agg-sel">
    ${t.map(i=>`<option value="${i.id}"${i.id===e?" selected":""}>${i.label}</option>`).join("")}
  </select>`}function Qt(e){const t=Ut(xt),{rhu:i,pct:n,mm:a}=Kt(t),s=n>60?"#2d9e5f":n>35?"#e07820":"#e04040";e.innerHTML=`
    <div class="w-bilan-layout">
      ${Zt(t)}
      <div class="w-bilan-gauge-wrap">
        <div class="w-bilan-gauge-track"><div class="w-bilan-gauge-fill" style="width:${n}%;background:${s}"></div></div>
        <div class="w-bilan-gauge-labels">
          <span>0</span>
          <span style="font-weight:600;color:${s}">${a} mm / ${i} mm RFU (${n} %)</span>
          <span>${i} mm</span>
        </div>
      </div>
    </div>`,e.querySelector(".w-reservoir-agg-sel").addEventListener("change",l=>{Xt(xt,l.target.value),Qt(e)})}function ei(e){const t=Ut(St,"j1"),{pct:i}=Kt(t),n=(E.id*17+13)%41,a=[{label:"10 cm",pct:Math.min(100,Math.max(0,i+n%12-5)),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,Math.max(0,i+n%8)),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,Math.max(0,i-n%10+3)),color:"#a07010"}];e.innerHTML=`
    <div class="w-bilan-layout">
      ${Zt(t,In)}
      <div class="w-bilan-horizons">
        ${a.map(s=>`
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${s.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${s.pct}%;background:${s.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${s.color}">${s.pct} %</span>
          </div>`).join("")}
      </div>
    </div>`,e.querySelector(".w-reservoir-agg-sel").addEventListener("change",s=>{Xt(St,s.target.value),ei(e)})}function ve(e){e.innerHTML=`<div class="dash-empty" style="padding-top:20px">
    <i class="bi bi-hourglass" style="font-size:20px;opacity:.3;display:block;margin-bottom:6px"></i>
    Widget bientôt disponible
  </div>`}function Z(e){return t=>{var o,f;const i=F.filter(h=>k.linkedSensorIds.includes(h.id)),n={"w-station":h=>["P+","PT","SMV","P"].includes(h.model),"w-thygro":h=>h.model==="TH","w-tsol":h=>h.model==="T_MINI","w-anem":h=>h.model==="W","w-pyrano":h=>h.model==="PYRANO","w-lws":h=>h.model==="LWS","w-par":h=>h.model==="PAR","w-capa":h=>h.model.startsWith("CAPA-"),"w-tensio":h=>V.includes(h.model),"w-ec":h=>h.model==="EC"},a=i.find(n[e]||(()=>!1));if(!a){t.innerHTML='<div class="dash-empty">Aucun capteur compatible lié</div>';return}const s=q[a.model]||[],u=({"w-station":()=>{const h=[];return s.some(p=>p.id==="temp")&&h.push({label:"Température",val:x(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"}),s.some(p=>p.id==="pluie")&&h.push({label:"Pluie 24h",val:x(0,14)+" mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy"}),s.some(p=>p.id==="humidite")&&h.push({label:"Humidité",val:x(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}),h},"w-thygro":()=>[{label:"Température",val:x(10,30)+" °C",color:"#FBAF05",icon:"bi-thermometer-half"},{label:"Humidité",val:x(40,90)+" %",color:"#5B12A4",icon:"bi-droplet-half"}],"w-tsol":()=>[{label:"Temp. sol",val:x(8,22)+" °C",color:"#795548",icon:"bi-layers"}],"w-anem":()=>[{label:"Vitesse",val:x(0,40)+" km/h",color:"#616161",icon:"bi-wind"},{label:"Direction",val:["N","NE","E","SE","S","SO","O","NO"][x(0,7)],color:"#616161",icon:"bi-compass"}],"w-pyrano":()=>[{label:"Rayonnement",val:x(100,900)+" W/m²",color:"#CBCB0B",icon:"bi-sun"}],"w-lws":()=>[{label:"Humectation",val:R(0,12).toFixed(1)+" h/j",color:"#00887E",icon:"bi-droplet"}],"w-par":()=>[{label:"PPFD",val:x(100,2e3)+" µmol/m²/s",color:"#4CBB17",icon:"bi-brightness-high"}],"w-capa":()=>s.filter(h=>h.id.startsWith("vwc")).slice(0,3).map(h=>({label:h.name,val:x(15,45)+" %vol",color:h.color,icon:"bi-moisture"})),"w-tensio":()=>[{label:"Potentiel hydrique",val:x(10,150)+" kPa",color:"#A6C157",icon:"bi-graph-down"}],"w-ec":()=>[{label:"Conductivité",val:R(.1,3).toFixed(2)+" mS/cm",color:"#2BCDDE",icon:"bi-plug"}]}[e]||(()=>[]))(),d=new Date(Date.now()-Math.floor(5+Math.random()*55)*6e4),c=h=>String(h).padStart(2,"0"),m=`${c(d.getDate())}/${c(d.getMonth()+1)}/${d.getFullYear()} à ${c(d.getHours())}:${c(d.getMinutes())}`;t.innerHTML=`
      <div class="w-sensor-rows">${u.map(h=>`
        <div class="w-sensor-row">
          <i class="bi ${h.icon}" style="color:${h.color};flex-shrink:0"></i>
          <span class="w-sensor-val" style="color:${h.color}">${h.val}</span>
          <span class="w-sensor-lbl">${h.label}</span>
        </div>`).join("")}</div>
      <div class="w-sensor-src">${ne[a.model]||a.model} · ${a.serial}</div>
      <div class="w-sensor-ts">Dernière mesure : ${m}</div>`;const r=(o=t.closest(".dash-block"))==null?void 0:o.querySelector(".dash-block-ft-link");if(r){const h=((f=document.getElementById("time-step"))==null?void 0:f.value)||"1h";r.href=`capteur-graphique.html?sensorId=${a.id}&parcelId=${P}&period=${K}&step=${h}`,r.removeAttribute("data-tab")}}}function it(e){return((P*31+(e+7)*17)%101+101)%101/101}function Ne(e){const t=it(e);return t>.72?+(2+t*18).toFixed(1):t>.5?+(t*4).toFixed(1):0}function Ln(e,t){return Math.round((e.getTime()-t.getTime())/864e5)}function Pn(e){const t=new Date;t.setHours(0,0,0,0);const i=new Date(e+"T00:00:00");let n=0;for(let a=new Date(i);a<=t;a.setDate(a.getDate()+1))n+=Ne(Ln(a,t));return+n.toFixed(1)}const Ct="#bf5af2";function Mt(e){return t=>{const i=e==="pluie"?{color:"#2E75B6",unit:"mm"}:{color:"#7DBDD7",unit:"mm"},n=new Date;n.setHours(0,0,0,0);const a=[];for(let v=-7;v<=7;v++){const y=new Date(n);y.setDate(y.getDate()+v);const S=it(v),M=e==="pluie"?Ne(v):+(1.2+S*4.2).toFixed(1);a.push({d:y,off:v,val:M,isFc:v>0})}const s=Math.max(1,...a.map(v=>v.val)),l=600,u=130,d=14,c=22,m=4,r=4,o=u-d-c,f=(l-m-r)/a.length,h=`w-hist-stripe-${e}`,p=a.findIndex(v=>v.off===0),w=m+p*f+f,g=a.map((v,y)=>{const S=m+y*f,M=Math.max(0,v.val/s*o),j=d+o-M,A=v.off===0?Ct:v.isFc?`${i.color}66`:i.color;return`<rect x="${(S+f*.15).toFixed(1)}" y="${j.toFixed(1)}" width="${(f*.7).toFixed(1)}" height="${M.toFixed(1)}" rx="2" fill="${A}"/>`}).join(""),$=a.map((v,y)=>{if(v.off%4!==0)return"";const S=m+y*f+f/2,M=v.off===0?"Auj.":`${v.d.getDate()}/${v.d.getMonth()+1}`;return`<text x="${S.toFixed(1)}" y="${u-6}" font-size="8" text-anchor="middle" fill="var(--txt3)">${M}</text>`}).join(""),C=a.filter(v=>!v.isFc).reduce((v,y)=>v+y.val,0),B=a.filter(v=>v.isFc).reduce((v,y)=>v+y.val,0);t.innerHTML=`
      <div class="w-hist-summary">
        <span class="w-hist-summary-item"><span class="w-hist-dot" style="background:${i.color}"></span>7j : <strong>${C.toFixed(1)} ${i.unit}</strong></span>
        <span class="w-hist-summary-item"><span class="w-hist-dot" style="background:${Ct}"></span>Prévision 7j : <strong>${B.toFixed(1)} ${i.unit}</strong></span>
      </div>
      <div class="w-hist-chart-wrap">
        <svg class="w-hist-svg" width="100%" height="100%" viewBox="0 0 ${l} ${u}" preserveAspectRatio="none">
          <defs><pattern id="${h}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="8" height="8" fill="rgba(142,142,147,.05)"/>
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(142,142,147,.16)" stroke-width="4"/>
          </pattern></defs>
          <rect x="${w.toFixed(1)}" y="${d}" width="${(l-r-w).toFixed(1)}" height="${o}" fill="url(#${h})"/>
          <line x1="${w.toFixed(1)}" y1="${d}" x2="${w.toFixed(1)}" y2="${d+o}" stroke="rgba(142,142,147,.4)" stroke-width="1" stroke-dasharray="2,2"/>
          ${g}
          ${$}
        </svg>
      </div>`}}function Hn(e){const t=F.filter(b=>k.linkedSensorIds.includes(b.id)),i=t.some(b=>b.model.startsWith("CAPA-")),n=t.some(b=>V.includes(b.model)),a=E.reserveHydrique||80,s=(E.id*17+13)%41,l=Math.min(95,Math.max(20,55+s)),u=Math.round(a*l/100),d=4+s%5-2,c=Math.max(2,Math.min(6,d)),m=Math.round(c*7-u*.3),r=Math.max(0,m),o=l>60?"#2d9e5f":l>35?"#e07820":"#e04040",f=l>60?"Réserve suffisante":l>35?"Réserve à surveiller":"Réserve critique",h=l>60?"bi-check-circle-fill":l>35?"bi-exclamation-circle-fill":"bi-x-circle-fill";if(!i&&!n){e.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:var(--txt3)">
      <i class="bi bi-droplet" style="font-size:24px"></i>
      <div style="font-size:13px;text-align:center">Ajoutez une sonde capacitive ou un tensiomètre pour suivre l'état hydrique</div>
    </div>`;return}const p=i?[{label:"10 cm",pct:Math.min(100,l+s%12-5),color:"#f0cc60"},{label:"30 cm",pct:Math.min(100,l+s%8),color:"#c89c30"},{label:"60 cm",pct:Math.min(100,l-s%10+3),color:"#a07010"}]:[{label:"Potentiel",pct:l,color:"#5b8dd9"}];e.innerHTML=`
    <div class="w-bilan-layout">
      <div class="w-bilan-status" style="color:${o}">
        <i class="bi ${h}"></i> ${f}
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
        ${p.map(b=>`
          <div class="w-bilan-hz">
            <span class="w-bilan-hz-lbl">${b.label}</span>
            <div class="w-bilan-hz-bar"><div style="width:${b.pct}%;background:${b.color};height:100%;border-radius:3px;transition:width .4s"></div></div>
            <span class="w-bilan-hz-val" style="color:${b.color}">${b.pct} %</span>
          </div>`).join("")}
      </div>
      <div class="w-bilan-footer">
        <div class="w-bilan-kpi">
          <div class="w-bilan-kpi-lbl">ETP 7 j</div>
          <div class="w-bilan-kpi-val">${(c*7).toFixed(0)} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-bilan-kpi">
          <div class="w-bilan-kpi-lbl">Dose conseillée</div>
          <div class="w-bilan-kpi-val" style="color:${r>0?"#0172A4":"var(--ok)"}">
            ${r>0?`${r} <span class="w-irrig-unit">mm</span>`:'<i class="bi bi-check2" style="font-size:14px"></i>'}
          </div>
        </div>
      </div>
    </div>`}function ti(e){const t=document.createElement("div");if(t.className="journal-form-overlay",e==="vol"){const i=je(P).volumeMaxM3??"",n=je(P).debitM3h??"";t.innerHTML=`
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
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const a=t.querySelector("#iwa-vol-inp").value,s=t.querySelector("#iwa-debit-inp").value;le(P,{volumeMaxM3:a!==""?parseInt(a):null,debitM3h:s!==""?parseFloat(s):null}),t.remove(),document.querySelector("#dblock-irrigations")&&Ae(document.querySelector("#dblock-irrigations"))}}else{const i=k.irrigation||"";t.innerHTML=`
      <div class="journal-form-modal">
        <div class="journal-form-title">Type d'irrigation</div>
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="iwa-type-sel" class="journal-form-input">
            ${Tt.map(n=>`<option${n===(i||"Non renseigné")?" selected":""}>${n}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-actions">
          <button class="btn-secondary" id="iwa-cancel">Annuler</button>
          <button id="iwa-save">Enregistrer</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#iwa-cancel").onclick=()=>t.remove(),t.querySelector("#iwa-save").onclick=()=>{const n=t.querySelector("#iwa-type-sel").value;W({irrigation:n}),t.remove(),document.querySelector("#dblock-irrigations")&&Ae(document.querySelector("#dblock-irrigations"))}}t.addEventListener("click",i=>{i.target===t&&t.remove()})}function ii(e,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",s=>{s.target===i&&n()}),i.querySelector("#irr-cf-close").addEventListener("click",n),i.querySelector("#irr-cf-cancel").addEventListener("click",n),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),t()})}function ni(e,t){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const i=document.createElement("div");i.className="irr-save-confirm",i.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(s=>`<div>${s}</div>`).join("")}</div>
      <a href="irrigation.html?plot=${P}" class="irr-save-confirm-link">Gérer les irrigations de toutes mes parcelles &gt;</a>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",s=>{s.target===i&&n()}),i.querySelector("#irr-confirm-close").addEventListener("click",n)}function Et(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Date</label>
        <input type="date" id="irr-m-s-date" class="journal-form-input" value="${ce}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Quantité (mm)</label>
        <input type="number" id="irr-m-s-qty" class="journal-form-input" value="10" min="1">
      </div>
      <div class="journal-form-actions">
        <button class="btn-secondary" id="irr-m-s-cancel">Annuler</button>
        <button id="irr-m-s-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#irr-m-s-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-s-save").onclick=()=>{const i=t.querySelector("#irr-m-s-date").value,n=parseInt(t.querySelector("#irr-m-s-qty").value)||0;if(!i||!n)return;const a=i>ce,s=()=>{N.push({iso:i,mm:n,real:!a,plotId:E.id,fromStrategy:!1}),jt(),t.remove(),Ae(e),ni("Irrigation enregistrée",[`Date : ${Ue(i)}`,`Quantité : ${n} mm`])},l=N.filter(u=>u.plotId===E.id&&u.iso===i);if(l.length){ii(l.length,()=>{N.splice(0,N.length,...N.filter(u=>!(u.plotId===E.id&&u.iso===i))),s()});return}s()}}function kt(e){const t=document.createElement("div");t.className="journal-form-overlay",t.innerHTML=`
    <div class="journal-form-modal">
      <div class="journal-form-title">Saisir une saison d'irrigation</div>
      <div class="journal-form-row">
        <label class="journal-form-label">Début</label>
        <input type="date" id="irr-m-sa-debut" class="journal-form-input" value="${ce}">
      </div>
      <div class="journal-form-row">
        <label class="journal-form-label">Fin</label>
        <input type="date" id="irr-m-sa-fin" class="journal-form-input" value="${wi(ce,120)}">
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
    </div>`,document.body.appendChild(t);const i=()=>{const n=t.querySelector("#irr-m-sa-debut").value,a=t.querySelector("#irr-m-sa-fin").value,s=parseInt(t.querySelector("#irr-m-sa-qty").value)||0,l=parseInt(t.querySelector("#irr-m-sa-freq").value)||0,u=t.querySelector("#irr-m-sa-preview");if(!n||!a||l<=0){u.textContent="—";return}let d=0,c=new Date(n),m=new Date(a);for(;c<=m&&d<200;)d++,c.setDate(c.getDate()+l);if(d>0){const r=E.area>0?Math.round(d*s*E.area*10):0,o=r>0?` · ${r.toLocaleString("fr-FR")} m³`:"";u.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${d} irrigations · ${d*s} mm${o}</span>`}else u.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'};i(),t.querySelector("#irr-m-sa-debut").addEventListener("change",i),t.querySelector("#irr-m-sa-fin").addEventListener("change",i),t.querySelector("#irr-m-sa-qty").addEventListener("input",i),t.querySelector("#irr-m-sa-freq").addEventListener("input",i),t.addEventListener("click",n=>{n.target===t&&t.remove()}),t.querySelector("#irr-m-sa-cancel").onclick=()=>t.remove(),t.querySelector("#irr-m-sa-save").onclick=()=>{const n=t.querySelector("#irr-m-sa-debut").value,a=t.querySelector("#irr-m-sa-fin").value,s=parseInt(t.querySelector("#irr-m-sa-qty").value)||10,l=parseInt(t.querySelector("#irr-m-sa-freq").value)||7;if(!n||!a)return;const u=[];let d=new Date(n),c=new Date(a);for(;d<=c&&u.length<200;)u.push(new Date(d)),d.setDate(d.getDate()+l);const m=si(),r=()=>{u.forEach(f=>{const h=f.toISOString().slice(0,10);N.push({iso:h,mm:s,real:h<=ce,plotId:E.id,fromStrategy:!0,seasonId:m})}),jt(),t.remove(),Ae(e),ni("Saison enregistrée",[`Début : ${Ue(n)} · Fin : ${Ue(a)}`,`${u.length} irrigations · ${s} mm · tous les ${l} j`])},o=N.filter(f=>f.plotId===E.id&&f.iso>=n&&f.iso<=a);if(o.length){ii(o.length,()=>{N.splice(0,N.length,...N.filter(f=>!(f.plotId===E.id&&f.iso>=n&&f.iso<=a))),r()});return}r()}}function Ae(e){var h,p,b,w,g;const t=N.filter($=>$.plotId===E.id),i=t.filter($=>$.real),n=t.filter($=>!$.real),a=i.reduce(($,C)=>$+C.mm,0),s=n.reduce(($,C)=>$+C.mm,0),l=a+s,u=k.irrigation||E.irrigation;let d="";if(t.some($=>$.fromStrategy)){const $=[...t].sort((y,S)=>y.iso.localeCompare(S.iso)),C=$[$.length-1],B=$[$.length-2],v=B?Math.round((new Date(C.iso)-new Date(B.iso))/864e5):null;d=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${C.mm} mm</strong>${v?` tous les <strong>${v} jours</strong>`:""}.</div>
      </div>`}const m=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-act-saisie">+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" type="button" id="w-irrig-act-saison">↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`,o=u&&!new Set(["Non irrigué","Non renseigné",""]).has(u),f=()=>{var C;const $=(C=e.closest(".dash-block"))==null?void 0:C.querySelector(".dash-block-ft-link");$&&($.textContent="Voir détails →")};if(!o){e.innerHTML=`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez renseigner un type d'irrigation sur cette parcelle.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" type="button" id="w-irrig-set-type" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,(h=e.querySelector("#w-irrig-set-type"))==null||h.addEventListener("click",()=>ti("type")),f();return}if(!t.length){e.innerHTML=`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3)">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${m}
      </div>`,(p=e.querySelector("#w-irrig-act-saisie"))==null||p.addEventListener("click",()=>Et(e)),(b=e.querySelector("#w-irrig-act-saison"))==null||b.addEventListener("click",()=>kt(e)),f();return}e.innerHTML=`
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
      ${d}
      ${m}
    </div>`,(w=e.querySelector("#w-irrig-act-saisie"))==null||w.addEventListener("click",()=>Et(e)),(g=e.querySelector("#w-irrig-act-saison"))==null||g.addEventListener("click",()=>kt(e)),f()}function Fn(e){let t=null;e.querySelectorAll(".dash-block").forEach(i=>{i.addEventListener("dragstart",n=>{t=i,n.dataTransfer.effectAllowed="move",setTimeout(()=>i.classList.add("dash-drag-ghost"),0)}),i.addEventListener("dragend",()=>{i.classList.remove("dash-drag-ghost"),e.querySelectorAll(".dash-block").forEach(n=>n.classList.remove("dash-drag-over")),t=null,xe([...e.querySelectorAll(".dash-block")].map(n=>n.dataset.id))}),i.addEventListener("dragover",n=>{n.preventDefault(),!(!t||i===t)&&(n.dataTransfer.dropEffect="move",e.querySelectorAll(".dash-block").forEach(a=>a.classList.remove("dash-drag-over")),i.classList.add("dash-drag-over"))}),i.addEventListener("dragleave",()=>{i.classList.remove("dash-drag-over")}),i.addEventListener("drop",n=>{if(n.preventDefault(),!t||i===t)return;i.classList.remove("dash-drag-over");const a=[...e.querySelectorAll(".dash-block")],s=a.indexOf(t),l=a.indexOf(i);s<l?i.after(t):i.before(t)})})}
