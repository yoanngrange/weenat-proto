import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{u as c}from"./breadcrumb-DEBQjfiD.js";import{m}from"./members-C_ssoUx1.js";import{o as p}from"./orgs-Cx4wNzLL.js";import{n as l}from"./network-YzWdS0n_.js";import{M as u}from"./constants-C2D4LmLD.js";document.addEventListener("DOMContentLoaded",()=>{c(),A(),v()});function v(){const a=document.getElementById("param-map");if(!a||!window.L)return;const t=r.lat||48.117,e=r.lng||-1.678,i=L.map(a,{zoomControl:!0,scrollWheelZoom:!1}).setView([t,e],13);L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:18}).addTo(i),L.marker([t,e],{draggable:!1}).addTo(i).bindPopup(`<strong>${r.name||"Mon exploitation"}</strong>`).openPopup()}const d=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840,ville:"Bruz",telephone:"02 99 05 12 34"},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920,ville:"Saint-Brieuc",telephone:"02 96 33 45 67"},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310,ville:"Vitré",telephone:"02 99 75 23 89"},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540,ville:"Loudéac",telephone:"02 96 28 14 56"},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120,ville:"Guingamp",telephone:"02 96 44 89 12"},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830,ville:"Carhaix",telephone:"02 98 93 56 78"},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310,ville:"Landivisiau",telephone:"02 98 68 32 14"},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540,ville:"Morlaix",telephone:"02 98 88 71 23"},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120,ville:"Saint-Lô",telephone:"02 33 77 45 90"},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180,ville:"Fougères",telephone:"02 99 99 12 67"},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740,ville:"Saint-Malo",telephone:"02 99 40 78 34"},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380,ville:"Redon",telephone:"02 99 71 56 89"},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420,ville:"Vannes",telephone:"02 97 47 23 45"},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690,ville:"Nantes",telephone:"02 40 35 67 12"},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050,ville:"Laval",telephone:"02 43 56 34 78"},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580,ville:"Cherbourg",telephone:"02 33 93 45 67"},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960,ville:"Caen",telephone:"02 31 44 89 23"},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150,ville:"Mayenne",telephone:"02 43 04 56 78"},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680,ville:"Angers",telephone:"02 41 88 12 34"},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630,ville:"Saumur",telephone:"02 41 51 78 90"}];function g(a){return a.split(/[\s'']+/).filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join("")}const x=[{id:"plus",name:"Weenat Plus",price:"14 €/mois",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API"],color:"#00B093",current:!0},{id:"expert",name:"Weenat Expert",price:"25 €/mois",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","Capteurs et fonctionnalités Irrigation"],color:"#006798"}],h=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau",b=p.find(a=>a.id===100)||{};function f(a){const t=(a||"").match(/(\d{5})/);if(t){const e=a.indexOf(t[0]);return{rue:a.slice(0,e).trim().replace(/,\s*$/,""),cp:t[0],ville:a.slice(e+5).trim().replace(/^,?\s*/,"")}}return{rue:a||"",cp:"",ville:""}}const r=h?{...b,name:l.nom,adresse:l.siege.adresse,codePostal:l.siege.codePostal,ville:l.siege.ville,pays:l.siege.pays}:(()=>{const a=p.find(t=>t.id===1)||{name:"Ferme du Bocage",ville:"Rennes",lat:48.1,lng:-1.7};if(!a.codePostal&&a.adresse){const{rue:t,cp:e,ville:i}=f(a.adresse);return{...a,adresse:t,codePostal:e,ville:i||a.ville}}return a})(),y=m.filter(a=>a.role==="propriétaire"||a.role==="admin");function A(){var t;const a=document.getElementById("parametres-form");a&&(a.innerHTML=`
    <div class="param-2col">
      <div class="param-section">
        <div class="param-section-title">Mon exploitation</div>
        <div class="param-form-grid">
          <div class="param-field">
            <label class="param-label">Nom de l'exploitation</label>
            <input type="text" class="param-input" id="org-name" value="${r.name||""}">
          </div>
          <div class="param-field">
            <label class="param-label">Propriétaire</label>
            <select class="param-input" id="org-owner">
              ${y.map(e=>`<option value="${e.id}">${e.prenom} ${e.nom}</option>`).join("")}
            </select>
          </div>
          <div class="param-field param-field--wide">
            <label class="param-label">Métiers</label>
            <div class="param-chips" id="profession-chips">
              ${u.map(e=>`
                <label class="param-chip">
                  <input type="checkbox" value="${e}"> ${e}
                </label>
              `).join("")}
            </div>
          </div>
          <div class="param-field param-field--wide">
            <label class="param-label">Adresse du siège</label>
            <input type="text" class="param-input" id="org-address" placeholder="Numéro et rue" value="${r.adresse||""}">
          </div>
          <div class="param-field">
            <label class="param-label">Code postal</label>
            <input type="text" class="param-input" id="org-cp" placeholder="00000" value="${r.codePostal||""}">
          </div>
          <div class="param-field">
            <label class="param-label">Ville</label>
            <input type="text" class="param-input" id="org-ville" placeholder="Ville" value="${r.ville||""}">
          </div>
        </div>
        <button class="btn-primary" id="save-org-btn" style="margin-top:16px">
          <i class="bi bi-check-lg"></i> Enregistrer
        </button>
      </div>

      <div class="param-section" style="padding:0;overflow:hidden;border-radius:8px;border:1px solid var(--bdr)">
        <div style="padding:10px 14px;font-weight:600;font-size:13px;border-bottom:1px solid var(--bdr);background:var(--bg2)">
          <i class="bi bi-geo-alt" style="color:var(--pri)"></i> Localisation de l'exploitation
        </div>
        <div id="param-map" style="height:100%;min-height:260px"></div>
        <div style="padding:8px 14px;font-size:12px;color:var(--txt2)">
          <i class="bi bi-info-circle"></i> Position calculée depuis l'adresse renseignée.
        </div>
      </div>
    </div>

    <div class="param-section">
      <div class="param-section-title">Niveau d'abonnement</div>
      <div class="param-plans">
        ${x.map(e=>`
          <div class="param-plan${e.current?" param-plan--current":""}" style="border-color:${e.current?e.color:"var(--bdr)"}">
            ${e.current?`<div class="param-plan-badge" style="background:${e.color}">Actuel</div>`:""}
            <div class="param-plan-name" style="color:${e.color}">${e.name}</div>
            <div class="param-plan-price">${e.price}</div>
            <ul class="param-plan-features">
              ${e.features.map(i=>`<li><i class="bi bi-check-circle-fill" style="color:${e.color}"></i> ${i}</li>`).join("")}
            </ul>
            ${e.current?"":`<button class="btn-secondary" style="margin-top:12px;width:100%">Passer à ${e.name.replace("Weenat ","")}</button>`}
          </div>
        `).join("")}
      </div>
    </div>

    <div class="param-section">
      <div class="param-section-title">Réseaux</div>
      <div style="display:inline-flex;gap:0;background:var(--bg2);border:1px solid var(--bdr);border-radius:8px;padding:3px;margin-bottom:20px">
        <button class="p-reseau-tab" data-ptab="adherente" style="border:none;border-radius:6px;padding:7px 18px;font-size:13px;font-weight:500;cursor:pointer;background:#0172A4;color:#fff;font-family:inherit">Adhérente d'un réseau</button>
        <button class="p-reseau-tab" data-ptab="independante" style="border:none;border-radius:6px;padding:7px 18px;font-size:13px;font-weight:500;cursor:pointer;background:transparent;color:var(--txt2);font-family:inherit">Indépendante</button>
      </div>

      <div id="p-reseau-panel-adherente">
        <div style="display:flex;align-items:flex-start;gap:16px;padding:16px;background:var(--bg2);border:1px solid var(--bdr);border-radius:8px;margin-bottom:14px">
          <div style="width:48px;height:48px;border-radius:10px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <span style="font-size:13px;font-weight:700;color:#0172A4">BA</span>
          </div>
          <div>
            <div style="font-weight:600;font-size:15px;margin-bottom:4px">Breiz'Agri Conseil</div>
            <div style="font-size:13px;color:var(--txt2);line-height:1.5">L'exploitation Ferme du Bocage est adhérente du réseau Breiz'Agri Conseil.</div>
            <div style="font-size:12px;color:var(--txt3);margin-top:4px">Membre depuis le 15/03/2022</div>
          </div>
        </div>
        <button id="p-btn-quitter-reseau" class="btn-danger">Quitter le réseau</button>
      </div>

      <div id="p-reseau-panel-independante" style="display:none">
        <div style="font-size:13px;color:var(--txt2);margin-bottom:14px">20 réseaux proches de votre exploitation</div>
        <div style="display:flex;flex-wrap:wrap;gap:10px">
          ${d.map((e,i)=>`
            <div style="display:flex;flex-direction:column;gap:10px;padding:14px 16px;background:var(--bg2);border:1px solid var(--bdr);border-radius:8px;min-width:280px;flex:1">
              <div style="display:flex;align-items:flex-start;gap:12px">
                <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                  <span style="font-size:11px;font-weight:700;color:#0172A4">${g(e.name)}</span>
                </div>
                <div style="flex:1;min-width:0">
                  <div style="font-weight:600;font-size:14px">${e.name}</div>
                  <div style="font-size:12px;color:var(--txt2);margin-top:3px">${e.distance} km · ${e.adherents} adhérents · ${e.capteurs} capteurs · ${e.parcelles} parcelles</div>
                  <div style="font-size:12px;color:var(--txt3);margin-top:3px">${e.ville} · ${e.telephone}</div>
                </div>
              </div>
              <button class="btn-secondary p-join-btn" data-net-idx="${i}" style="align-self:flex-start;font-size:12px">Demander à rejoindre</button>
            </div>`).join("")}
          <div style="min-width:280px;flex:1;height:0;padding:0;margin:0"></div>
          <div style="min-width:280px;flex:1;height:0;padding:0;margin:0"></div>
          <div style="min-width:280px;flex:1;height:0;padding:0;margin:0"></div>
        </div>
      </div>
    </div>
  `,document.getElementById("save-org-btn").addEventListener("click",()=>{n("Paramètres enregistrés.")}),a.querySelectorAll(".p-reseau-tab").forEach(e=>{e.addEventListener("click",()=>{a.querySelectorAll(".p-reseau-tab").forEach(s=>{const o=s===e;s.style.background=o?"#0172A4":"transparent",s.style.color=o?"#fff":"var(--txt2)"});const i=e.dataset.ptab;a.querySelector("#p-reseau-panel-adherente").style.display=i==="adherente"?"":"none",a.querySelector("#p-reseau-panel-independante").style.display=i==="independante"?"":"none"})}),(t=a.querySelector("#p-btn-quitter-reseau"))==null||t.addEventListener("click",()=>{confirm(`Quitter le réseau Breiz'Agri Conseil ?

Cette action est irréversible et devra être validée par votre administrateur réseau.`)&&n("Demande de résiliation envoyée.")}),a.querySelectorAll(".p-join-btn").forEach(e=>{e.addEventListener("click",()=>{const i=d[+e.dataset.netIdx];n(`Demande envoyée à ${i.name}`)})}))}function n(a){const t=document.createElement("div");t.className="toast",t.textContent=a,document.body.appendChild(t),setTimeout(()=>t.remove(),3e3)}
