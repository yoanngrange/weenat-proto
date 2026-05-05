import"./main-CTKmqMeY.js";import{u as h}from"./breadcrumb-DEBQjfiD.js";import{s as d}from"./sensors-CeUIY8ag.js";import{p}from"./plots-Dwluc99O.js";const v={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité air","temp-humide":"Température humide","temp-seche":"Température sèche"},m=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",sensorIds:[1,3],parcelIds:[1,2],threshold:10,operator:">",phones:[]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",sensorIds:[2],parcelIds:[3],threshold:2,operator:"<",phones:[]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",sensorIds:[5],parcelIds:[4,5],threshold:30,operator:"<",phones:[]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",sensorIds:[1,4],parcelIds:[],threshold:80,operator:">",phones:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",sensorIds:[],parcelIds:[1],threshold:50,operator:"<",phones:[]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",sensorIds:[2],parcelIds:[2,3],threshold:2,operator:">",phones:[]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",sensorIds:[6],parcelIds:[6],threshold:100,operator:">",phones:[]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",sensorIds:[3],parcelIds:[1],threshold:0,operator:"<",phones:["+33 6 12 34 56 78"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",sensorIds:[4],parcelIds:[3],threshold:35,operator:">",phones:["+33 6 12 34 56 78"]}];document.addEventListener("DOMContentLoaded",()=>{const t=new URLSearchParams(window.location.search),s=parseInt(t.get("id")),a=m.find(i=>i.id===s)||m[0];h(a.name,{label:"Mes alertes",href:"alertes.html"}),document.getElementById("breadcrumb-title").textContent=a.name,f(a)});function f(t){var l,r,c;const s=document.getElementById("alert-config-root"),a=t.metric==="temp-seche"||t.metric==="temp-humide",i=d.filter(e=>t.sensorIds.includes(e.id)),o=p.filter(e=>t.parcelIds.includes(e.id));s.innerHTML=`
    <div class="param-section">
      <div class="param-section-title" style="display:flex;align-items:center;justify-content:space-between">
        <span>Informations générales</span>
        <label class="toggle-switch" title="${t.statut==="actif"?"Désactiver":"Activer"}">
          <input type="checkbox" id="cfg-statut"${t.statut==="actif"?" checked":""}>
          <span class="toggle-track"></span>
        </label>
      </div>
      <div class="param-form-grid" style="max-width:580px">
        <div class="param-field param-field--wide">
          <label class="param-label">Nom de l'alerte</label>
          <input type="text" class="param-input" id="cfg-name" value="${g(t.name)}">
        </div>
        <div class="param-field">
          <label class="param-label">Métrique</label>
          <select class="param-input" id="cfg-metric">
            ${Object.entries(v).map(([e,n])=>`<option value="${e}"${e===t.metric?" selected":""}>${n}</option>`).join("")}
          </select>
        </div>
        <div class="param-field">
          <label class="param-label">Condition</label>
          <div style="display:flex;gap:8px">
            <select class="param-input" id="cfg-operator" style="width:80px">
              <option value=">"${t.operator===">"?" selected":""}>&gt;</option>
              <option value="<"${t.operator==="<"?" selected":""}>&lt;</option>
              <option value=">="${t.operator===">="?" selected":""}>&ge;</option>
              <option value="<="${t.operator==="<="?" selected":""}>&le;</option>
            </select>
            <input type="number" class="param-input" id="cfg-threshold" value="${t.threshold}" style="flex:1">
          </div>
        </div>
      </div>
    </div>

    <div class="param-section">
      <div class="param-section-title">Capteurs surveillés</div>
      <div id="cfg-sensors-list" style="display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
        ${i.length?i.map(e=>`
            <div class="admin-item-row">
              <span>${e.serial} <span style="color:var(--txt3);font-size:11px">${e.model}</span></span>
              <button class="icon-btn" title="Retirer"><i class="bi bi-x-lg"></i></button>
            </div>`).join(""):'<span class="tag-none">Aucun capteur</span>'}
      </div>
      <select class="param-input" id="cfg-add-sensor" style="max-width:360px">
        <option value="">+ Ajouter un capteur</option>
        ${d.filter(e=>!t.sensorIds.includes(e.id)).slice(0,60).map(e=>`<option value="${e.id}">${e.serial} (${e.model})</option>`).join("")}
      </select>
    </div>

    <div class="param-section">
      <div class="param-section-title">Parcelles surveillées</div>
      <div id="cfg-parcels-list" style="display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
        ${o.length?o.map(e=>`
            <div class="admin-item-row">
              <span>${e.name}</span>
              <button class="icon-btn" title="Retirer"><i class="bi bi-x-lg"></i></button>
            </div>`).join(""):'<span class="tag-none">Aucune parcelle</span>'}
      </div>
      <select class="param-input" id="cfg-add-parcel" style="max-width:360px">
        <option value="">+ Ajouter une parcelle</option>
        ${p.filter(e=>!t.parcelIds.includes(e.id)).slice(0,60).map(e=>`<option value="${e.id}">${e.name}</option>`).join("")}
      </select>
    </div>

    ${a?`
    <div class="param-section">
      <div class="param-section-title">Numéros de téléphone</div>
      <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">Les alertes SMS sont disponibles pour les métriques de température.</div>
      <div id="cfg-phones-list" style="display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
        ${(t.phones||[]).map(e=>`
          <div class="admin-item-row">
            <span>${e}</span>
            <button class="icon-btn" title="Retirer"><i class="bi bi-x-lg"></i></button>
          </div>`).join("")||'<span class="tag-none">Aucun numéro</span>'}
      </div>
      <div style="display:flex;gap:8px;align-items:center;max-width:360px">
        <input type="tel" class="param-input" id="cfg-phone-input" placeholder="+33 6 …" style="flex:1">
        <button class="btn-secondary" id="cfg-add-phone"><i class="bi bi-plus"></i> Ajouter</button>
      </div>
    </div>
    `:""}

    <div style="display:flex;gap:12px;margin-top:8px">
      <button class="btn-primary" id="cfg-save">
        <i class="bi bi-check-lg"></i> Enregistrer
      </button>
      <button class="btn-secondary" onclick="window.location.href='alertes.html'">Annuler</button>
      <button class="btn-secondary" style="margin-left:auto;color:var(--err)" id="cfg-delete">
        <i class="bi bi-trash"></i> Supprimer l'alerte
      </button>
    </div>
  `,(l=document.getElementById("cfg-save"))==null||l.addEventListener("click",()=>u("Alerte enregistrée.")),(r=document.getElementById("cfg-delete"))==null||r.addEventListener("click",()=>{confirm(`Supprimer "${t.name}" ?`)&&(window.location.href="alertes.html")}),(c=document.getElementById("cfg-add-phone"))==null||c.addEventListener("click",()=>{var n;const e=document.getElementById("cfg-phone-input");(n=e==null?void 0:e.value)!=null&&n.trim()&&(u(`Numéro ${e.value.trim()} ajouté.`),e.value="")})}function g(t){return(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function u(t){const s=document.createElement("div");s.className="toast",s.textContent=t,document.body.appendChild(s),setTimeout(()=>s.classList.add("show"),10),setTimeout(()=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300)},2500)}
