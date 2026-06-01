const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-RmWGEL7x.js","assets/sensors-wI07SRZE.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-BFmvZ9cD.js","assets/store-InOgbptE.js","assets/orgs-Cx4wNzLL.js","assets/network-YzWdS0n_.js","assets/irrigations-C22Dtsoo.js","assets/constants-C2D4LmLD.js","assets/members-CuDabgg3.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as W}from"./plots-BFmvZ9cD.js";import{d as Xi,e as $i}from"./store-InOgbptE.js";import{s as G}from"./sensors-wI07SRZE.js";import{o as ne}from"./orgs-Cx4wNzLL.js";import{n as xe}from"./network-YzWdS0n_.js";import{I as ee,s as Pe,g as Qi}from"./irrigations-C22Dtsoo.js";import{I as es,A as ct,a as Wt,M as ts}from"./constants-C2D4LmLD.js";import{m as ut}from"./members-CuDabgg3.js";const He=[];function re(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),He.push(t),t}function ie(){const e=He.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function Jt(){return He.length}function is(){return He.some(e=>e.dataset.dirty==="true")}function wi(){He.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{He.forEach(e=>e.remove()),He.length=0});const Gt={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},ss=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Ut=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let Me={};function be(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ze({title:e,body:i,onDone:t,doneLabel:n="OK"}){var d;const o=document.getElementById("phone-screen");(d=document.querySelector(".m-sheet-overlay"))==null||d.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${n}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,s.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const a=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};return s.querySelector(".m-sheet-cancel").addEventListener("click",a),s.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),a()}),s.addEventListener("click",u=>{u.target===s&&a()}),s}function Yt(e,i,t){const n=document.createElement("div");n.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const o=n.querySelector("input");ze({title:e,body:n,doneLabel:"Enregistrer",onDone:()=>{t(o.value.trim()),be("Enregistré")}}),setTimeout(()=>o.focus(),300)}function Zt(e,i,t,n){const o=document.createElement("div");o.innerHTML=i.map((a,d)=>`
    <div class="m-sheet-option${a===t?" m-sheet-option--active":""}" data-i="${d}">
      <span>${a}</span>
      ${a===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const s=ze({title:e,body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelectorAll(".m-sheet-option").forEach(a=>{a.addEventListener("click",()=>{n(i[+a.dataset.i]),s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280),be("Enregistré")})})}function ns(e,i){const t=document.createElement("div"),n=()=>{var o;t.innerHTML=e.map((s,a)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${a}" data-f="label" value="${s.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${a}" data-f="numero" value="${s.numero}" placeholder="+33 6…">
        </div>
        ${a>0?`<button class="m-sheet-remove" data-i="${a}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(s=>{s.addEventListener("input",()=>{e[+s.dataset.i][s.dataset.f]=s.value})}),t.querySelectorAll(".m-sheet-remove").forEach(s=>{s.addEventListener("click",()=>{e.splice(+s.dataset.i,1),n()})}),(o=t.querySelector(".m-sheet-add-phone"))==null||o.addEventListener("click",()=>{e.push({label:"",numero:""}),n()})};n(),ze({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),be("Enregistré")}})}function as(e,i,t){const n=document.createElement("div");n.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,n.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var s;(s=navigator.clipboard)==null||s.writeText(e.value).catch(()=>{}),be("Clé copiée !")});const o=ze({title:"Clé API",body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const s=i.findIndex(a=>a.id===e.id);s!==-1&&i.splice(s,1),o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{o.remove(),t()},280),be("Clé supprimée")})}function ls(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function os(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");ze({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const n=t.value.trim();if(!n){be("Entrez un nom");return}const o={id:Date.now(),name:n,created:new Date().toLocaleDateString("fr-FR"),value:ls()};e(o),be("Clé générée")}}),setTimeout(()=>t.focus(),300)}function rs(e,i){Me={profile:JSON.parse(JSON.stringify(Gt[i]||Gt.admin)),langue:"Français",unites:Ut[0]};const n=localStorage.getItem("mobile_avatarUrl")||null;function o(){const a=Me.profile,d=n?`<img src="${n}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${a.initials}</span>`,u=a.apiKeys.map(c=>`
      <div class="m-list-row" data-key-id="${c.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${c.name}</span>
          <span class="m-list-row-sub">créée le ${c.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),r=a.phones.map((c,f)=>`
      <div class="m-list-row${f===a.phones.length-1&&a.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${c.label||"Numéro "+(f+1)}</span>
        <span class="m-list-row-value">${c.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");e.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${d}</div>
        <div class="m-compte-name">${a.prenom} ${a.nom}</div>
        <label class="m-compte-avatar-btn">
          <input type="file" accept="image/*" id="m-avatar-upload" hidden>
          Changer la photo
        </label>
      </div>

      <div class="m-list-section-header">Identité</div>
      <div class="m-list">
        <div class="m-list-row" data-action="prenom">
          <span class="m-list-row-label">Prénom</span>
          <span class="m-list-row-value">${a.prenom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="nom">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${a.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Contact</div>
      <div class="m-list">
        <div class="m-list-row" data-action="email">
          <span class="m-list-row-label">Email</span>
          <span class="m-list-row-value" style="font-size:13px">${a.email} <i class="bi bi-check-circle-fill" style="color:#30d158;font-size:10px"></i></span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        ${r}
        <div class="m-list-row m-list-row--last" data-action="phones" style="color:#007aff">
          <i class="bi bi-plus-circle" style="font-size:15px"></i>
          <span class="m-list-row-label" style="color:#007aff">Gérer les numéros</span>
        </div>
      </div>

      <div class="m-list-section-header">Sécurité</div>
      <div class="m-list">
        <div class="m-list-row m-list-row--last" data-action="mdp">
          <span class="m-list-row-label">Mot de passe</span>
          <span class="m-list-row-value" style="letter-spacing:3px">••••••••</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Notifications</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Email</span>
          <label class="m-toggle"><input type="checkbox" checked data-notif="email"><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">SMS</span>
          <label class="m-toggle"><input type="checkbox" data-notif="sms"><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Notification push</span>
          <label class="m-toggle"><input type="checkbox" checked data-notif="push"><span class="m-toggle-track"></span></label>
        </div>
      </div>
      <div class="m-list-section-footer">Les notifications concernent les parcelles, capteurs, et les membres. Les alertes sont paramétrables depuis la section « Alertes ».</div>

      <div class="m-list-section-header">Préférences</div>
      <div class="m-list">
        <div class="m-list-row" data-action="langue">
          <span class="m-list-row-label">Langue</span>
          <span class="m-list-row-value" id="val-langue">${Me.langue}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="unites">
          <span class="m-list-row-label">Unités</span>
          <span class="m-list-row-value" id="val-unites">Métrique</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Clés API</div>
      <div class="m-list" id="api-keys-list">
        ${u}
        <div class="m-list-row m-list-row--last" data-action="gen-key">
          <i class="bi bi-plus-circle" style="color:#007aff;font-size:16px"></i>
          <span class="m-list-row-label" style="color:#007aff">Générer une clé</span>
        </div>
      </div>

      <div class="m-list-section-header m-list-section-header--danger">Données personnelles</div>
      <div class="m-list" style="margin-bottom:32px">
        <div class="m-list-row m-list-row--last" data-action="delete">
          <i class="bi bi-trash" style="color:#ff3b30;font-size:16px"></i>
          <span class="m-list-row-label" style="color:#ff3b30;text-align:center;flex:1">Supprimer mon compte</span>
        </div>
      </div>
    `,s()}function s(){var d;const a=Me.profile;(d=e.querySelector("#m-avatar-upload"))==null||d.addEventListener("change",u=>{const r=u.target.files[0];if(!r)return;const c=new FileReader;c.onload=f=>{localStorage.setItem("mobile_avatarUrl",f.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${f.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},c.readAsDataURL(r)}),e.querySelectorAll(".m-list-row[data-action]").forEach(u=>{u.addEventListener("click",()=>{switch(u.dataset.action){case"prenom":Yt("Prénom",a.prenom,r=>{a.prenom=r,o()});break;case"nom":Yt("Nom",a.nom,r=>{a.nom=r,o()});break;case"email":ze({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${a.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>be("Fonctionnalité à venir")});break;case"phones":ns(a.phones,r=>{a.phones=r,o()});break;case"mdp":ze({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>be("Fonctionnalité à venir")});break;case"langue":Zt("Langue",ss,Me.langue,r=>{Me.langue=r,e.querySelector("#val-langue").textContent=r});break;case"unites":Zt("Unités",Ut,Me.unites,r=>{Me.unites=r,e.querySelector("#val-unites").textContent=r.split(" ")[0]});break;case"gen-key":os(r=>{a.apiKeys.push(r),o()});break;case"delete":be("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(u=>{u.addEventListener("click",()=>{const r=a.apiKeys.find(c=>c.id===+u.dataset.keyId);r&&as(r,a.apiKeys,o)})}),e.querySelectorAll(".m-toggle input[data-notif]").forEach(u=>{u.addEventListener("change",()=>be("Préférence enregistrée"))})}o()}function V(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function oe({title:e,body:i,doneLabel:t="Fermer",onDone:n}={}){var d;const o=document.getElementById("phone-screen");(d=document.querySelector(".m-sheet-overlay"))==null||d.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,s.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const a=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};return s.querySelector(".m-sheet-cancel").addEventListener("click",a),s.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),a()}),s.addEventListener("click",u=>{u.target===s&&a()}),s}function ds(e){const i=[{label:"Seuil dépassé",desc:"Conditions déclenchantes vérifiées",duration:"2h34",resolved:!0},{label:"Seuil dépassé",desc:"Notification SMS envoyée",duration:"45min",resolved:!0},{label:"Seuil dépassé",desc:"Valeur mesurée hors plage",duration:"1h20",resolved:!0},{label:"Fausse alerte",desc:"Pic transitoire — durée < seuil",duration:null,resolved:!0},{label:"Seuil dépassé",desc:"Conditions toujours vérifiées",duration:"3h05",resolved:!0},{label:"Alerte en cours",desc:"Conditions vérifiées depuis ce matin",duration:null,resolved:!1}],t=3+e%5,n=Date.now();return Array.from({length:t},(o,s)=>{const a=e*17+s*7,d=1+s*(2+a%6),u=new Date(n-d*864e5),r=i[a%i.length],c=u.getDate(),f=u.getMonth()+1;return{date:`${String(c).padStart(2,"0")}/${String(f).padStart(2,"0")}`,heure:`${String(6+a%14).padStart(2,"0")}h${String(a%60).padStart(2,"0")}`,label:r.label,desc:r.desc,duration:r.duration,resolved:s>0?!0:r.resolved}})}const cs=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],us=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],Kt={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},ps={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function pt(e){if(!e)return"—";const[i,t,n]=e.split("-");return`${n}/${t}/${i}`}function Xt(e){const i=e.sensorIds.map(n=>{const o=G.find(s=>s.id===n);return o?`${o.model} ${o.serial}`:null}).filter(Boolean),t=e.parcelIds.map(n=>{const o=W.find(s=>s.id===n);return(o==null?void 0:o.name)||null}).filter(Boolean);return[...i,...t]}function ms(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const n=[...i==="adherent"?us:cs];function o(){if(!n.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=n.map(a=>{Xt(a);const d=ps[a.metric]||"bi-bell",u=a.statut==="actif";return`
        <div class="m-alert-card" data-id="${a.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${u?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${d}"></i>
            </div>
            <span class="m-alert-name">${a.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${u?"checked":""} data-id="${a.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${Kt[a.metric]||a.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${pt(a.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${a.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),s()}function s(){t.querySelectorAll(".m-alert-toggle input").forEach(a=>{a.addEventListener("change",d=>{d.stopPropagation();const u=+a.dataset.id,r=n.find(c=>c.id===u);r&&(r.statut=a.checked?"actif":"inactif",o(),V(`Alerte ${a.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-more-btn").forEach(a=>{a.addEventListener("click",d=>{d.stopPropagation();const u=+a.dataset.id,r=n.find(m=>m.id===u);if(!r)return;Xt(r);const c=document.createElement("div"),f=ds(u);function E(){const m=r.sensorIds.map((y,v)=>{const L=G.find(A=>A.id===y);return L?{label:`${L.model} ${L.serial}`,type:"sensor",idx:v}:null}).filter(Boolean),g=r.parcelIds.map((y,v)=>{const L=W.find(A=>A.id===y);return L?{label:L.name,type:"parcel",idx:v}:null}).filter(Boolean),w=[...m,...g];return w.length?w.map(y=>`<div class="m-perimetre-item" data-type="${y.type}" data-idx="${y.idx}">
                <span>${y.label}</span>
                <button class="m-perimetre-del" data-type="${y.type}" data-idx="${y.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const l=document.createElement("div");l.className="m-sheet-info-rows";function p(){var y;c.innerHTML="";const m=document.createElement("div");m.className="m-sheet-info-rows",m.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Kt[r.metric]||r.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${pt(r.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${pt(r.created)}</span></div>
            ${(y=r.phones)!=null&&y.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${r.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${r.statut}</span></div>`;const g=document.createElement("div");g.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",g.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${E()}</div>`,m.appendChild(g),c.appendChild(m);const w=document.createElement("div");w.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${f.map(v=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${v.resolved?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${v.date} à ${v.heure}${v.duration?` · ${v.duration}`:""}</div>
                <div class="m-history-label">${v.label}</div>
                <div class="m-history-desc">${v.desc}</div>
              </div></div>`).join("")}`,c.appendChild(w),c.querySelectorAll(".m-perimetre-del").forEach(v=>{v.addEventListener("click",L=>{L.stopPropagation();const A=v.dataset.type,x=+v.dataset.idx;A==="sensor"?r.sensorIds.splice(x,1):r.parcelIds.splice(x,1),p(),o(),V("Retiré du périmètre")})})}p(),oe({title:r.name,body:c,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-alert-card").forEach(a=>{a.addEventListener("click",d=>{if(d.target.closest(".m-alert-toggle")||d.target.closest(".m-alert-more-btn"))return;const u=+a.dataset.id,r=n.find(E=>E.id===u);if(!r)return;const c=document.createElement("div");c.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const f=oe({title:r.name,body:c,doneLabel:"Fermer",onDone:()=>{}});c.querySelector("#al-edit").addEventListener("click",()=>{f.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{f.remove(),V("Modification à venir")},280)}),c.querySelector("#al-delete").addEventListener("click",()=>{const E=n.findIndex(l=>l.id===u);E!==-1&&n.splice(E,1),f.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{f.remove(),o()},280),V("Alerte supprimée")})})})}o()}const vs="modulepreload",fs=function(e){return"/weenat-proto/"+e},Qt={},me=function(i,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(u=>{if(u=fs(u),u in Qt)return;Qt[u]=!0;const r=u.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${c}`))return;const f=document.createElement("link");if(f.rel=r?"stylesheet":vs,r||(f.as="script"),f.crossOrigin="",f.href=u,d&&f.setAttribute("nonce",d),document.head.appendChild(f),r)return new Promise((E,l)=>{f.addEventListener("load",E),f.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return o.then(a=>{for(const d of a||[])d.status==="rejected"&&s(d.reason);return i().catch(s)})};function _e(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const we=new Date().toISOString().split("T")[0];function Je(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,n,o]=e.split("-");return`${parseInt(o)} ${i[parseInt(n)-1]} ${t}`}function ei(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,n]=e.split("-");return`${parseInt(n)} ${i[parseInt(t)-1]}`}function wt(e){return!e||e===we?"":e<we?'<span class="irr-pill irr-pill--past">Passée · Réalisée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function St(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function ot(e,i,t){const n=i.length>0&&i.every(s=>t.has(s.id)),o=[...i].sort((s,a)=>s.name.localeCompare(a.name,"fr")).map(s=>{const a=t.has(s.id);return`<div class="irr-plot-row${a?" irr-plot-row--sel":""}" data-pid="${s.id}">
      <div><div class="irr-plot-name">${s.name}</div>${hs(s)}</div>
      ${St(a,!1)}
    </div>`}).join("");return`<div class="irr-sel-all-row" id="irr-sel-all">
    <span class="irr-sel-all-lbl">${n?"Tout désélectionner":"Tout sélectionner"}</span>
    ${St(n,!1)}
  </div>${o}`}function Et({title:e,body:i,onSave:t,onDelete:n,saveLabel:o="Enregistrer"}){var u,r;const s=document.getElementById("phone-screen");(u=document.querySelector(".irr-sheet-overlay"))==null||u.remove();const a=document.createElement("div");a.className="irr-sheet-overlay",a.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${n?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${o}</button>
      </div>
    </div>`,a.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),s.appendChild(a),requestAnimationFrame(()=>a.classList.add("irr-sheet-overlay--open"));const d=()=>{a.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>a.remove(),280)};return a.addEventListener("click",c=>{c.target===a&&d()}),(r=a.querySelector("#iss-del"))==null||r.addEventListener("click",()=>{n==null||n(),d()}),a.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),d()}),a}function Si(e,i,t){const n=i.filter(d=>e.has(d.id)&&(!d.irrigation||d.irrigation==="Non irrigué"));if(!n.length){t();return}const o=document.createElement("div");o.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${n.length===1?`<strong>${n[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${n.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" style="width:100%;padding:12px;border-radius:10px;border:1px solid #E0DED8;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e">
      <option value="">— Choisir un type —</option>
      ${es.map(d=>`<option value="${d}">${d}</option>`).join("")}
    </select>`;const a=Et({title:"Type d'irrigation",body:o,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const d=o.querySelector("#irr-type-ask").value;d&&n.forEach(u=>{u.irrigation=d,Xi(u.id,{irrigation:d})}),t()}}).querySelector("#iss-del");a&&(a.textContent="Passer",a.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function hs(e){const i=e.crop,t=e.irrigation||null,n=e.substrate?"Substrat : "+e.substrate:e.texture||null,o=[i,t||"<em>type irrigation non renseigné</em>",n].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${o.join(" · ")}</span>`}function Ei(e,i,t=null){let n=new Set((t==null?void 0:t.ids)??[]),o=we,s=10;function a(){return ot([],e,n)}function d(l){l.querySelector("#irr-date-hint").innerHTML=wt(o)}function u(l){const p=n.size,m=l.querySelector(".irr-summary"),g=l.querySelector(".irr-save-btn");!m||!g||(t?(m.textContent="",g.disabled=!1,g.textContent="Enregistrer"):(m.textContent=p===0?"":`${p} parcelle${p>1?"s":""} · ${s} mm`,g.disabled=p===0,g.textContent="Enregistrer"))}function r(l){var p;l.querySelectorAll(".irr-plot-row").forEach(m=>{m.addEventListener("click",()=>{const g=+m.dataset.pid;n.has(g)?n.delete(g):n.add(g),l.querySelector("#irr-sel-list").innerHTML=a(),r(l),u(l)})}),(p=l.querySelector("#irr-sel-all"))==null||p.addEventListener("click",()=>{const m=e.some(g=>!n.has(g.id));e.forEach(g=>m?n.add(g.id):n.delete(g.id)),l.querySelector("#irr-sel-list").innerHTML=a(),r(l),u(l)})}const c=t?e.filter(l=>t.ids.includes(l.id)):[],f=t?`<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${t.label} <span style="color:#9E9D98;font-weight:400">· ${t.ids.length} parcelle${t.ids.length>1?"s":""}</span></span>
       </div>
       ${c.map(l=>`<div style="font-size:13px;color:#636366;padding:2px 4px">· ${l.name}</div>`).join("")}`:`<div id="irr-sel-list">${a()}</div>`,E=_e(re(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="irr-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saisir une irrigation</span>
        <div style="width:60px"></div>
      </div>
      <div class="irr-fixed-inputs">
        <div class="irr-fields-row" style="margin-bottom:0">
          <div class="irr-field-card">
            <div class="irr-field-lbl">Date</div>
            <input type="date" class="irr-date-input" id="irr-date" value="${o}" />
            <div id="irr-date-hint" style="min-height:14px"></div>
          </div>
          <div class="irr-field-card">
            <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
            <input type="number" class="irr-qty-input" id="irr-qty" value="${s}" min="1" />
            <div class="irr-field-hint">par parcelle</div>
          </div>
        </div>
      </div>
    </div>
    <div class="irr-scroll-body">
      ${f}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${t?"":"disabled"}>Enregistrer</button>
    </div>
  `));E.dataset.dirty="true",t||r(E),u(E),E.querySelector("#irr-back").addEventListener("click",ie),E.querySelector("#irr-date").addEventListener("change",l=>{o=l.target.value,d(E),u(E)}),E.querySelector("#irr-qty").addEventListener("input",l=>{s=parseInt(l.target.value)||1,u(E)}),E.querySelector(".irr-save-btn").addEventListener("click",()=>{const l=t?new Set(t.ids):n;Si(l,e,()=>{const p=o>we;l.forEach(y=>{ee.push({iso:o,mm:s,real:!p,plotId:y,fromStrategy:!1})}),Pe();const g=[{title:null,names:[...l].map(y=>{var v;return(v=e.find(L=>L.id===y))==null?void 0:v.name}).filter(Boolean)}],w=l.size===1?String([...l][0]):"all";wi(),Li({title:l.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:Je(o)},{label:"Quantité",value:`${s} mm`}],parcelSections:g,isFut:p,plots:e,calFilter:w,addedCount:l.size,stackDepth:1})})})}function Lt(e,i,t=null,n=null){let o=new Set((t==null?void 0:t.ids)??[]),s=we,a=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],d=10,u=7;function r(){if(!s||!a||u<=0)return[];const p=[],m=new Date(a);let g=new Date(s);for(;g<=m&&p.length<100;)p.push(new Date(g)),g.setDate(g.getDate()+u);return p}function c(){const p=r();o.size;const m=p.length>0?`<span class="irr-preview-ok">↗ ${p.length} irrigations · ${p.length*d} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${s}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${a}" />
        </div>
      </div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="strat-qty" value="${d}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence <span class="irr-unit">(jours)</span></div>
          <input type="number" class="irr-qty-input" id="strat-freq" value="${u}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${m}</div>
      ${t?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${t.label} <span style="color:#9E9D98;font-weight:400">· ${t.ids.length} parcelle${t.ids.length>1?"s":""}</span></span>
           </div>`:ot([],e,o)}
      <div class="irr-bottom-spacer"></div>
    `}function f(p){const m=o.size,g=r(),w=p.querySelector(".irr-save-btn"),y=p.querySelector(".irr-summary");!w||!y||(w.disabled=m===0||g.length===0,y.textContent=m===0?"":`${m} parcelle${m>1?"s":""} · ${g.length} occurrences`,w.textContent="Voir l'aperçu →")}function E(p){var w,y,v,L,A;const m=p.querySelector(".irr-scroll-body");m.querySelectorAll(".irr-plot-row").forEach(x=>{x.addEventListener("click",()=>{const C=+x.dataset.pid;o.has(C)?o.delete(C):o.add(C),m.innerHTML=c(),E(p),f(p)})}),(w=m.querySelector("#irr-sel-all"))==null||w.addEventListener("click",()=>{const x=e.some(C=>!o.has(C.id));e.forEach(C=>x?o.add(C.id):o.delete(C.id)),m.innerHTML=c(),E(p),f(p)});const g=()=>{const x=r(),C=m.querySelector("#strat-preview");C&&(C.innerHTML=x.length>0?`<span class="irr-preview-ok">↗ ${x.length} irrigations · ${x.length*d} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),f(p)};(y=m.querySelector("#strat-debut"))==null||y.addEventListener("change",x=>{s=x.target.value,g()}),(v=m.querySelector("#strat-fin"))==null||v.addEventListener("change",x=>{a=x.target.value,g()}),(L=m.querySelector("#strat-qty"))==null||L.addEventListener("input",x=>{d=parseInt(x.target.value)||1,g()}),(A=m.querySelector("#strat-freq"))==null||A.addEventListener("input",x=>{u=parseInt(x.target.value)||1,g()})}const l=_e(re(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${c()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));l.dataset.dirty="true",E(l),f(l),l.querySelector("#strat-back").addEventListener("click",ie),l.querySelector(".irr-save-btn").addEventListener("click",()=>{const p=r();bs(l,e,o,s,a,d,u,p,i,t,n)})}function bs(e,i,t,n,o,s,a,d,u,r,c=null){var A;const f=t.size,E=5;d.length-E;function l(x){const k=x.toISOString().slice(0,10)>=we?"#FFB705":"#FF8500",h=x.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${Je(h)}</span>
      <span style="font-size:13px;font-weight:700;color:${k}">${s} mm</span>
    </div>`}const p=d.filter(x=>x.toISOString().slice(0,10)<we),m=d.filter(x=>x.toISOString().slice(0,10)>=we),g=m.slice(0,E),w=m.slice(E),y=p.length?`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${p.map(l).join("")}`:"",v=m.length?`
    <div class="irr-section-lbl" style="margin-top:${p.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${g.map(l).join("")}
    ${w.length?`
      <div id="apercu-rest" style="display:none">${w.map(l).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${w.length} irrigation${w.length>1?"s":""} de plus</button>
    `:""}`:"",L=_e(re(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="apercu-back"><i class="bi bi-chevron-left"></i> Modifier</button>
        <span class="irr-header-title">Aperçu</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">
      <div class="irr-apercu-summary">
        <div>
          <div class="irr-apercu-big">${d.length} irrigations</div>
          <div class="irr-apercu-sub">${ei(n)} → ${ei(o)} · tous les ${a}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${d.length*s} mm</div>
          <div class="irr-apercu-sub">${f} parcelle${f>1?"s":""} · ${s} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${y}
        ${v}
        ${!p.length&&!m.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));L.dataset.dirty="true",L.querySelector("#apercu-back").addEventListener("click",ie),(A=L.querySelector("#apercu-show-more"))==null||A.addEventListener("click",x=>{L.querySelector("#apercu-rest").style.display="",x.target.remove()}),L.querySelector("#apercu-confirm").addEventListener("click",()=>{const x=r?new Set(r.ids):t;Si(x,i,()=>{c&&ee.splice(0,ee.length,...ee.filter(b=>!(c.has(b.seasonId)&&b.fromStrategy&&!b.real)));const C=Qi();d.forEach(b=>{const $=b.toISOString().slice(0,10);x.forEach(M=>{ee.push({iso:$,mm:s,real:$<=we,plotId:M,fromStrategy:!0,seasonId:C})})}),Pe();const h=[{title:null,names:[...x].map(b=>{var $;return($=i.find(M=>M.id===b))==null?void 0:$.name}).filter(Boolean)}],S=x.size===1?String([...x][0]):"all";wi(),Li({title:"Saison enregistrée",params:[{label:"Début",value:Je(n)},{label:"Fin",value:Je(o)},{label:"Quantité",value:`${s} mm/irrig.`},{label:"Fréquence",value:`tous les ${a} jours`},{label:"Irrigations générées",value:`${d.length*x.size}`}],parcelSections:h,isFut:!0,plots:i,calFilter:S,addedCount:d.length*x.size,stackDepth:2})})})}function Li({title:e,params:i,parcelSections:t=[],isFut:n,plots:o,calFilter:s,addedCount:a=0,stackDepth:d=3}){const u=(i||[]).map(g=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${g.label}</span>
      <span class="irr-confirm-param-val">${g.value}</span>
    </div>`).join(""),r=3,c=t.flatMap(g=>g.names.map(w=>({title:g.title,name:w}))),f=c.slice(0,r),E=c.slice(r);function l(g){const w=[];let y=null;for(const v of g)(!y||y.title!==v.title)&&(y={title:v.title,names:[]},w.push(y)),y.names.push(v.name);return w.map(v=>`
      ${v.title?`<div class="irr-confirm-sec-hd">${v.title}</div>`:""}
      ${v.names.map(L=>`<div class="irr-confirm-parcel">· ${L}</div>`).join("")}
    `).join("")}const p=c.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${l(f)}
      ${E.length?`
        <details class="irr-confirm-more">
          <summary>${E.length} parcelle${E.length>1?"s":""} de plus</summary>
          ${l(E)}
        </details>`:""}
    </div>`,m=_e(re(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <div style="width:60px"></div>
        <span class="irr-header-title">${e.includes("aison")?"Saison":e.includes("rrigations")?"Enregistrées":"Enregistrée"}</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body irr-confirm-body">
      <div class="irr-confirm-icon-wrap">
        <div class="irr-confirm-icon">✓</div>
      </div>
      <div class="irr-confirm-title">${e}</div>
      <div class="irr-confirm-params">${u}</div>
      ${p}
      <div class="irr-confirm-options">
        <div class="irr-confirm-opt" id="conf-edit">
          <div class="irr-confirm-opt-icon" style="background:#F5F4F0">✎</div>
          <div>
            <div class="irr-confirm-opt-title">Modifier</div>
            <div class="irr-confirm-opt-sub">Corriger une erreur de saisie</div>
          </div>
        </div>
        <div class="irr-confirm-opt irr-confirm-opt--primary" id="conf-calendar">
          <div class="irr-confirm-opt-icon" style="background:#E6F1FB">📅</div>
          <div>
            <div class="irr-confirm-opt-title">Voir les irrigations</div>
            <div class="irr-confirm-opt-sub">Irrigations effectuées et planifiées</div>
          </div>
        </div>
        <div class="irr-confirm-opt" id="conf-back">
          <div class="irr-confirm-opt-icon" style="background:#F5F4F0">↩</div>
          <div>
            <div class="irr-confirm-opt-title">Retour au tableau de bord</div>
            <div class="irr-confirm-opt-sub">Continuer la navigation</div>
          </div>
        </div>
      </div>
    </div>
  `));m.querySelector("#conf-edit").addEventListener("click",()=>{a>0&&ee.splice(ee.length-a,a),ie()}),m.querySelector("#conf-back").addEventListener("click",()=>{for(let g=0;g<=d;g++)ie()}),m.querySelector("#conf-calendar").addEventListener("click",()=>{Ci(o,s)})}const gs=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function Ci(e,i){let t=i||"";function n(l){if(!l||l==="all")return null;const p=e.find(m=>String(m.id)===String(l));return p?{ids:[p.id],label:p.name}:null}function o(){return!t||t==="all"?ee:ee.filter(l=>l.plotId===+t)}function s(l){const p=l.filter(y=>y.real),m=l.filter(y=>!y.real),g=p.reduce((y,v)=>y+v.mm,0),w=m.reduce((y,v)=>y+v.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${g} mm</div>
        <div class="irr-cumul-count">${p.length} irrigation${p.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${w} mm</div>
        <div class="irr-cumul-count">${m.length} irrigation${m.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${g+w} mm</div>
        <div class="irr-cumul-count">${p.length+m.length} irrigations</div>
      </div>
    </div>`}function a(l){if(l.length<2)return"";const p=[...l].sort((U,ve)=>U.iso<ve.iso?-1:1),m=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],g=new Date(p[0].iso),w=new Date(p[p.length-1].iso),y=Math.max(w-g,1),v=300,L=26,A=5,x=5,C=L-x-4,k=C-x-3,h=L+A+13,S=h+2,b=U=>Math.round((U-g)/y*v),$=U=>{const[,ve,fe]=U.split("-");return`${parseInt(fe)}/${parseInt(ve)}`},M=[],T=new Date(g.getFullYear(),g.getMonth()+1,1);for(;T<=w;)M.push(new Date(T)),T.setMonth(T.getMonth()+1);const H=M.map(U=>`<line x1="${b(U)}" y1="${L-6}" x2="${b(U)}" y2="${L+A+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),z=[g,...M,w],Q=z.slice(0,-1).map((U,ve)=>{const fe=b(U),Te=b(z[ve+1]);return Te-fe<16?"":`<text x="${Math.round((fe+Te)/2)}" y="${k}" font-size="8" fill="#B0AEA8" text-anchor="middle">${m[U.getMonth()]}</text>`}).join(""),ce=p.map(U=>{const ve=U.real?"#FF8500":"#FFB705",fe=b(new Date(U.iso)),[,Te,Xe]=U.iso.split("-"),Qe=`${parseInt(Xe)} ${gs[parseInt(Te)-1]} · ${U.mm} mm`;return`<circle cx="${fe}" cy="${C}" r="${x}" fill="${ve}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${fe}" cy="${C}" r="${x+6}" fill="transparent" pointer-events="all"><title>${Qe}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${v}" height="${S}" viewBox="0 0 ${v} ${S}" style="width:100%;display:block">
        ${Q}
        <rect x="0" y="${L}" width="${v}" height="${A}" rx="${A/2}" fill="#E0DED8"/>
        ${H}
        ${ce}
        <text x="1" y="${h}" font-size="9" fill="#B0AEA8">${$(p[0].iso)}</text>
        <text x="${v-1}" y="${h}" font-size="9" fill="#B0AEA8" text-anchor="end">${$(p[p.length-1].iso)}</text>
      </svg>
    </div>`}function d(l,p,m){const g=document.createElement("div");let w=l.iso,y=l.mm;g.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${l.iso}" />
          <div id="edit-date-hint">${wt(l.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${l.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,g.querySelector("#edit-date").addEventListener("change",v=>{w=v.target.value,g.querySelector("#edit-date-hint").innerHTML=wt(w)}),g.querySelector("#edit-qty").addEventListener("input",v=>{const L=parseInt(v.target.value);L>0&&(y=L)}),Et({title:l.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée",body:g,saveLabel:"Enregistrer",onSave:()=>{l.iso=w,l.mm=y,l.real=w<=we,Pe(),c(m)},onDelete:()=>{const v=ee.indexOf(l);v>-1&&ee.splice(v,1),Pe(),c(m)}})}function u(l,p){const m=+l,g=document.createElement("div");let w=!1,y=!1;function v(){return new Set(ee.filter(A=>A.plotId===m&&A.fromStrategy&&A.seasonId).map(A=>A.seasonId))}function L(){var A,x,C,k,h,S,b;g.innerHTML=`
        <div class="irr-strat-opt" id="strat-modify">
          <div class="irr-strat-opt-icon" style="background:#E6F1FB">✎</div>
          <div>
            <div class="irr-strat-opt-title">Modifier les paramètres</div>
            <div class="irr-strat-opt-sub">Quantité, fréquence, dates · Les irrigations passées sont conservées</div>
          </div>
        </div>
        <div class="irr-strat-opt irr-strat-opt--danger" id="strat-stop">
          <div class="irr-strat-opt-icon" style="background:#FDECEC">✕</div>
          <div>
            <div class="irr-strat-opt-title" style="color:#8B1A1A">Arrêter la saison</div>
            <div class="irr-strat-opt-sub" style="color:#C05050">Supprime les irrigations futures de cette parcelle</div>
          </div>
        </div>
        <div class="irr-strat-opt irr-strat-opt--danger" id="strat-delete">
          <div class="irr-strat-opt-icon" style="background:#FDECEC">🗑</div>
          <div>
            <div class="irr-strat-opt-title" style="color:#8B1A1A">Supprimer la saison</div>
            <div class="irr-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations de cette parcelle</div>
          </div>
        </div>
        ${w?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>`:""}
        ${y?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Supprimer toutes les irrigations de cette saison ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(A=g.querySelector("#strat-modify"))==null||A.addEventListener("click",()=>{var H;(H=document.querySelector(".irr-sheet-overlay"))==null||H.remove();const $=v(),M=e.find(z=>z.id===m),T=M?{ids:[M.id],label:M.name}:null;Lt(e,()=>c(p),T,$)}),(x=g.querySelector("#strat-stop"))==null||x.addEventListener("click",()=>{w=!0,y=!1,L()}),(C=g.querySelector("#strat-delete"))==null||C.addEventListener("click",()=>{y=!0,w=!1,L()}),(k=g.querySelector("#stop-cancel"))==null||k.addEventListener("click",()=>{w=!1,L()}),(h=g.querySelector("#stop-confirm"))==null||h.addEventListener("click",()=>{var M;const $=v();ee.splice(0,ee.length,...ee.filter(T=>!(T.plotId===m&&$.has(T.seasonId)&&!T.real))),Pe(),(M=document.querySelector(".irr-sheet-overlay"))==null||M.remove(),c(p)}),(S=g.querySelector("#delete-cancel"))==null||S.addEventListener("click",()=>{y=!1,L()}),(b=g.querySelector("#delete-confirm"))==null||b.addEventListener("click",()=>{var M;const $=v();ee.splice(0,ee.length,...ee.filter(T=>!(T.plotId===m&&$.has(T.seasonId)))),Pe(),(M=document.querySelector(".irr-sheet-overlay"))==null||M.remove(),c(p)})}L(),Et({title:"Gérer la saison",body:g,saveLabel:"Fermer",onSave:()=>{}})}function r(l){if(!l.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const p=[...l].filter(w=>!w.real).sort((w,y)=>w.iso<y.iso?-1:1),m=[...l].filter(w=>w.real).sort((w,y)=>w.iso>y.iso?-1:1);function g(w){const y=w.real?"#FF8500":"#FFB705",v=ee.indexOf(w);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${Je(w.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${y};white-space:nowrap;margin-right:4px">${w.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${v}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${v}" title="Supprimer">🗑</button>
      </div>`}return`
      ${m.length?`
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${m.length}</span></summary>
          ${m.map(g).join("")}
        </details>`:""}
      ${p.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${p.length}</span></summary>
          ${p.map(g).join("")}
        </details>`:""}
    `}function c(l){var v,L,A;const p=l.querySelector(".irr-cal-body");if(!t){p.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const m={};if(p.querySelectorAll("details[data-section]").forEach(x=>{m[x.dataset.section]=x.open}),t==="all"){const x={};for(const h of ee){const S=h.plotId??"unknown";x[S]||(x[S]=[]),x[S].push(h)}const C=Object.keys(x);if(!C.length){p.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const k=C.sort((h,S)=>{var M,T;const b=((M=e.find(H=>String(H.id)===h))==null?void 0:M.name)??h,$=((T=e.find(H=>String(H.id)===S))==null?void 0:T.name)??S;return b.localeCompare($,"fr")});p.innerHTML=k.map(h=>{var M;const S=x[h],b=S.some(T=>T.fromStrategy);return`<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${((M=e.find(T=>String(T.id)===h))==null?void 0:M.name)??h}</div>
          ${s(S)}
          ${a(S)}
          ${b?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-pid="${h}">Modifier la saison ↗</button>
          </div>`:""}
        </div>`}).join(""),p.querySelectorAll("[data-strat-pid]").forEach(h=>{h.addEventListener("click",()=>u(h.dataset.stratPid,l))});return}const g=o(),y=g.some(x=>x.fromStrategy)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`;p.innerHTML=`
      ${s(g)}
      ${a(g)}
      ${y}
      ${r(g)}
    `,p.querySelectorAll("details[data-section]").forEach(x=>{const C=x.dataset.section;C in m&&(x.open=m[C])}),p.querySelectorAll(".irr-edit-btn").forEach(x=>{x.addEventListener("click",C=>{C.stopPropagation();const k=ee[+x.dataset.iidx];k&&d(k,g,l)})}),p.querySelectorAll(".irr-del-btn").forEach(x=>{x.addEventListener("click",C=>{C.stopPropagation();const k=+x.dataset.iidx;k>=0&&(ee.splice(k,1),Pe(),c(l))})}),(v=p.querySelector("#open-strat-edit"))==null||v.addEventListener("click",()=>{u(t,l)}),(L=p.querySelector("#cal-add-irrig"))==null||L.addEventListener("click",()=>{Ei(e,()=>c(l),n(t))}),(A=p.querySelector("#cal-add-strat"))==null||A.addEventListener("click",()=>{Lt(e,()=>c(l),n(t))})}const f=[...e].sort((l,p)=>l.name.localeCompare(p.name,"fr")).map(l=>`<option value="${l.id}"${String(l.id)===String(t)?" selected":""}>${l.name}</option>`).join(""),E=_e(re(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="cal-back"><i class="bi bi-chevron-left"></i> Retour</button>
        <span class="irr-header-title">Irrigations</span>
        <div style="width:60px"></div>
      </div>
      <div style="padding:4px 14px 10px">
        <div style="font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Parcelle</div>
        <select class="irr-cal-select" id="cal-filter-sel">
          <option value="" disabled ${t?"":"selected"}>— Sélectionner —</option>
          <option value="all"${t==="all"?" selected":""}>Toutes les parcelles</option>
          ${f}
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));E.querySelector("#cal-back").addEventListener("click",ie),E.querySelector("#cal-filter-sel").addEventListener("change",l=>{t=l.target.value,c(E)}),c(E)}const Re=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:ot,checkIcon:St,flexLayer:_e,openCalendar:Ci,openIrrigationSaisie:Ei,openIrrigationStrategie:Lt},Symbol.toStringTag,{value:"Module"})),ki={admin:100,adherent:1},Ai="weenat-m-dash";function Ue(){try{return JSON.parse(localStorage.getItem(Ai))||{}}catch{return{}}}function ti(e){try{localStorage.setItem(Ai,JSON.stringify({...Ue(),...e}))}catch{}}const de=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function Ee(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Le({title:e,body:i,doneLabel:t="Fermer",onDone:n}={}){var d;const o=document.getElementById("phone-screen");(d=document.querySelector(".m-sheet-overlay"))==null||d.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,s.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const a=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};return s.querySelector(".m-sheet-cancel").addEventListener("click",a),s.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),a()}),s.addEventListener("click",u=>{u.target===s&&a()}),s}const ii=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function si(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=ii[Math.floor(Math.random()*ii.length)],n=t.label==="Pluie"||t.label==="Averses",o=Math.round(8+Math.random()*8),s=Math.round(16+Math.random()*14),a=Array.from({length:24},(d,u)=>{const r=Math.sin(Math.PI*(u-6)/12),c=Math.round(o+(s-o)*Math.max(0,r)),f=n&&u>=8&&u<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:u,label:`${String(u).padStart(2,"0")}h`,temp:c,pluie:f,hum:Math.round(85-40*Math.max(0,r)),vent:Math.round(10+Math.random()*20),icon:f>0?"bi-cloud-rain-fill":u<7||u>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:n?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:o,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:s,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:a}})}function mt(e){const i=e.id,t=e.reserveHydrique||50,n=+((i*2.3+7)%32).toFixed(1),o=+((i*1.1+14)%14+10).toFixed(1),s=+((i*.6+1)%6).toFixed(1),a=Math.round(t*((i%5+1)/10)),d=Math.max(0,+(a+n-o-s).toFixed(0)),u=d<a?a-d:0;return{j0:a,j7:d,bilan:u}}const nt=4,vt=5,ni=["#0172A4","#ff8500","#30d158","#bf5af2"],Mi={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548"},Ct={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol"},ys={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C"},ai={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},xs=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function Ti(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function $s(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const o=new Set(t);return i.filter(s=>s.parcelIds.includes(+e.slice(2))).forEach(s=>(ai[s.model]||[]).forEach(a=>o.add(a))),[...o].filter(s=>s in Ct)}const n=i.find(o=>o.id===+e.slice(2));return n?ai[n.model]||[]:[]}function ws(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let $e=[],he=[];(()=>{const e=Ue();if(e.catalog){const i=e.catalog.map(t=>t.id);de.sort((t,n)=>{const o=i.indexOf(t.id),s=i.indexOf(n.id);return(o<0?999:o)-(s<0?999:s)}),e.catalog.forEach(t=>{const n=de.find(o=>o.id===t.id);n&&(n.active=t.active)})}e.mesuresList&&($e=e.mesuresList),e.cumulsList&&(he=e.cumulsList)})();function Ss(e,i,t){const n=[...e+i].reduce((a,d)=>a+d.charCodeAt(0),1),o=a=>(Math.sin(n*.07+a*.5)+Math.sin(n*.03+a*1.3))/2+.5,s={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(a,d)=>s.sparse&&o(d*3.7)>.28?0:Math.max(0,s.base+s.amp*o(d*.28+1.2)))}const Es=new Set(["pluie","etp"]);function Ls(e,i){var v;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,n=Ss(e.subjectKey,e.metricId,t),o=270,s=100,a=28,d=14,u=Math.max(...n,1),r=Es.has(e.metricId);let c,f="";for(let L=0;L<=2;L++){const A=Math.round(L/2*(s-d-4)+4);f+=`<line x1="${a}" y1="${A}" x2="${a+o}" y2="${A}" stroke="#E8E6E0" stroke-width=".5"/>`,f+=`<text x="${a-3}" y="${A+3}" text-anchor="end" font-size="8" fill="#636366">${+(u*(1-L/2)).toFixed(u<5?1:0)}</text>`}const E=ws(e.period,e.step),l=E.map((L,A)=>`<text x="${a+Math.round(A/(E.length-1)*o)}" y="${s+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${L}</text>`).join(""),p=JSON.stringify(n.map(L=>+L.toFixed(2))),m=Mi[e.metricId]||e.color,g=e.metricId==="pluie"?"#2E75B6":m;if(r){const L=Math.max(1,o/t*.7),A=n.map((x,C)=>{const k=Math.round(x/u*(s-d-4)),h=a+Math.round(C/(t-1)*o)-L/2,S=s-d-k;return`<rect x="${h.toFixed(1)}" y="${S.toFixed(1)}" width="${L.toFixed(1)}" height="${k.toFixed(1)}" fill="${g}" opacity=".85" rx="1"/>`}).join("");c=`<svg viewBox="0 0 ${a+o} ${s+6}" style="width:100%;display:block;overflow:visible">${f}${A}${l}</svg>`}else{const L=n.map((A,x)=>`${a+Math.round(x/(t-1)*o)},${s-d-Math.round(A/u*(s-d-4))}`).join(" ");c=`<svg viewBox="0 0 ${a+o} ${s+6}" style="width:100%;display:block;overflow:visible">
      ${f}
      <polyline points="${L}" fill="none" stroke="${m}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${s}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${l}
    </svg>`}const w=(v=e.subjectKey)!=null&&v.startsWith("s-")?e.subjectKey.slice(2):null,y=w?`<button class="m-wf-view-data" data-sensor-id="${w}" data-period="${e.period}" data-step="${e.step}" style="display:flex;align-items:center;gap:4px;margin-top:8px;padding:6px 10px;border:none;background:rgba(0,122,255,.08);border-radius:8px;color:#007AFF;font-size:12px;font-weight:600;cursor:pointer;width:100%;justify-content:center">Voir les données <i class="bi bi-fullscreen" style="font-size:11px"></i></button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?g:m}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${p}' style="position:relative;margin-top:4px">
        ${c}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${y}
    </div>`}function li(e,i){const t=$e.length>=nt,n=e.map(d=>`<option value="p-${d.id}">${d.name}</option>`).join(""),o=i.filter(d=>d.parcelIds.length>0).map(d=>{const u=e.find(r=>d.parcelIds.includes(r.id));return`<option value="s-${d.id}">${d.model} — ${d.serial}${u?` · ${u.name}`:""}</option>`}).join(""),s=Ti("7d");return`
    <div id="msr-list">${$e.length?$e.map(Ls).join(""):'<div class="m-wf-empty">Aucune mesure configurée</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${$e.length?"16px":"0"}">Ajouter une mesure</div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${nt}/${nt})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez une mesure pour en ajouter une nouvelle.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="msr-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${n}</optgroup>
        ${o?`<optgroup label="Capteurs">${o}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period">
          ${xs.map(d=>`<option value="${d.id}"${d.id==="7d"?" selected":""}>${d.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${s.map(d=>`<option value="${d.id}">${d.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Créer la mesure</button>
    </div>`}`}function Cs(e,i){const t=new Date().toISOString().split("T")[0],n=new Date;n.setDate(n.getDate()+7);const o=n.toISOString().split("T")[0];return ee.filter(s=>!s.real&&s.iso>=t&&s.iso<=o&&s.plotId===e.id).reduce((s,a)=>s+a.mm,0)}const oi=9;function Ne(e,i=!1,t=Ue().sensorlessEnabled??!0){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const n=[],o=e.slice(),s=(g,w)=>mt(w).bilan-mt(g).bilan,a=[...n.flatMap(g=>g.ids.map(w=>e.find(y=>y.id===w)).filter(Boolean).sort(s)),...o.slice().sort(s)],d=i?a:a.slice(0,oi),u=new Set(d.map(g=>g.id)),r=a.length-d.length,c=g=>{const w=G.some(k=>k.parcelIds.includes(g.id)&&(k.model.startsWith("CHP")||k.model.startsWith("CAPA")||k.model.startsWith("EC"))),{j0:y,j7:v,bilan:L}=mt(g),A=Cs(g),x=w?y:'<span style="color:#aeaeb2">—</span>',C=w?v:'<span style="color:#aeaeb2">—</span>';return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${g.id}">${g.name}</button>
      <div class="m-bh-td">${x}</div>
      <div class="m-bh-td">${C}</div>
      ${t?`<div class="m-bh-td m-bh-td--reco">${L>0?L:"—"}</div>`:""}
      <div class="m-bh-td m-bh-td--planif">${A>0?A:"—"}</div>`};let f="";for(const g of n){const w=g.ids.map(y=>e.find(v=>v.id===y)).filter(Boolean).filter(y=>u.has(y.id)).sort(s);w.length&&(f+=`<div class="m-bh-group-row" style="background:rgba(0,0,0,.035)">⬡ ${g.label}</div>`,f+=w.map(c).join(""))}const E=o.filter(g=>u.has(g.id)).sort(s);E.length&&n.length&&(f+='<div class="m-bh-group-row">⬡ Autres parcelles</div>'),f+=E.map(c).join("");const l=t?"1fr 38px 38px 46px 46px":"1fr 38px 38px 46px",p=t?2:1,m=a.length>oi?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${r} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${l}">
        <div class="m-bh-gh"></div>
        <div class="m-bh-gh" style="grid-column:span 2">Niveau RFU</div>
        <div class="m-bh-gh" style="grid-column:span ${p}">Irrigations J+7</div>
        <div class="m-bh-th m-bh-unit-lbl">données en mm</div>
        <div class="m-bh-th">J0</div>
        <div class="m-bh-th">J+7</div>
        ${t?'<div class="m-bh-th">Reco.</div>':""}
        <div class="m-bh-th">Planif.</div>
        ${f}
      </div>
    </div>
    ${m}
    <div class="m-bh-actions">
      <button class="m-bh-action" id="bh-btn-irrigation">
        <i class="bi bi-droplet-fill"></i> Saisir une irrigation
      </button>
      <button class="m-bh-action m-bh-action--sec" id="bh-btn-strategie">
        <i class="bi bi-arrow-repeat"></i> Saisir une saison d'irrigation
      </button>
      <button class="m-bh-action m-bh-action--cal" id="bh-btn-calendar">
        <i class="bi bi-calendar3"></i> Voir les irrigations
      </button>
    </div>`}const ft=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function ks(e,i,t,n){const o=Object.fromEntries(ne.map(p=>[p.id,p])),s=e.map(p=>{var w;const m=p.ville||((w=o[p.orgId])==null?void 0:w.ville)||null,g=ft([p.name,p.crop||null,m].filter(Boolean).join(" · "));return`<option value="p-${p.id}">${g}</option>`}).join(""),a=i.map(p=>{var w,y;const m=((w=p.parcelIds.map(v=>e.find(L=>L.id===v)).filter(Boolean).find(v=>v.ville))==null?void 0:w.ville)||((y=o[p.orgId])==null?void 0:y.ville)||"",g=ft(`${p.serial}${m?` — ${m}`:""}`);return`<option value="s-${p.id}">${g}</option>`}).join(""),d=`
    <optgroup label="Parcelles">${s}</optgroup>
    ${a?`<optgroup label="Capteurs">${a}</optgroup>`:""}`,u=(p,m)=>{const g=`${p.dayLabel.charAt(0).toUpperCase()+p.dayLabel.slice(1)} · ${p.dateStr}`;return`
    <div class="m-prev-card" data-day="${m}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${p.icon}" style="color:${p.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${g}</span>
          <span class="m-prev-card-cond">${p.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-card-body">
        <div class="m-prev-row"><span>Pluie</span><strong>${p.pluie} mm</strong></div>
        <div class="m-prev-row"><span>Température</span><strong>${p.tMin}°C <em>${p.tMinHeure}</em> — ${p.tMax}°C <em>${p.tMaxHeure}</em></strong></div>
        <div class="m-prev-row"><span>Humidité</span><strong>${p.humMoy}%</strong></div>
        <div class="m-prev-row"><span>Vent</span><strong>${p.ventMoy}/${p.ventRafales} km/h</strong></div>
        <div class="m-prev-row m-prev-row--last"><span>Évapotranspiration</span><strong>${p.etp} mm</strong></div>
      </div>
    </div>`},r=t.slice(0,3).map(u).join(""),c=t.slice(3).map(u).join(""),f=ne.find(p=>p.id===(n==="admin"?100:1)),E=(f==null?void 0:f.adresse)||"";return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${E?`<option value="addr">${ft(`${f.name} — ${f.ville||E}`)}</option>`:""}${d}</select>
    <div class="m-prev-cards">
      ${r}
      <div class="m-prev-extra" style="display:none">${c}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Ce=[{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:["P+","PT","SMV"]},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:["PYRANO"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],Ii=new Set(Ce.flatMap(e=>e.needsModels||[]));function ht(e){if(!e)return Ce;if(e.startsWith("s-")){const t=G.find(n=>n.id===+e.slice(2));return t?Ce.filter(n=>n.needsModels===null||n.needsModels.includes(t.model)):Ce}const i=new Set(G.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Ce.filter(t=>t.needsModels===null||t.needsModels.some(n=>i.has(n)))}const ri={pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#FEE7B4"},etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function As(){return he.length?he.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
      <button class="m-cumuls-del" data-cidx="${i}" type="button" title="Supprimer">×</button>
      <div class="m-cumuls-saved-row1">
        <span class="m-cumuls-saved-metric"><i class="bi ${e.icon}" style="color:${e.color}"></i> ${e.metricLabel}</span>
        <span class="m-cumuls-saved-val">${e.value} <span class="m-cumuls-saved-unit">${e.unit}</span></span>
      </div>
      <div class="m-cumuls-saved-row2">${e.subjectLabel}</div>
      <div class="m-cumuls-saved-row3">
        <span>depuis le ${e.fromDate}${t}</span>
        <button class="m-cumuls-edit" data-cidx="${i}" type="button" title="Modifier"><i class="bi bi-pencil"></i> Modifier</button>
      </div>
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function di(e,i,t){if(!e||!i)return null;const n=Ce.find(a=>a.id===t)||Ce[0],o=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),s=e.split("").reduce((a,d)=>a+d.charCodeAt(0),0)+o;return+(n.base+s%(n.amp*10)/10).toFixed(1)}function ci(e,i){const t=he.length>=vt,n=`${new Date().getFullYear()}-01-01`,o=i.filter(c=>c.parcelIds.length>0&&Ii.has(c.model)),s=new Set(o.flatMap(c=>c.parcelIds)),d=e.filter(c=>s.has(c.id)).map(c=>`<option value="p-${c.id}">${c.name}</option>`).join(""),u=o.map(c=>{const f=e.find(E=>c.parcelIds.includes(E.id));return`<option value="s-${c.id}">${c.model} — ${c.serial}${f?` · ${f.name}`:""}</option>`}).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${he.length?As():'<div class="m-wf-empty">Aucun cumul enregistré</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${he.length?"16px":"0"}">Ajouter un cumul</div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${vt}/${vt})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez un cumul pour en ajouter un nouveau.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="cumuls-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${d}</optgroup>
        ${u?`<optgroup label="Capteurs">${u}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="cumuls-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div id="cumuls-thresholds"></div>
      <div class="m-wf-row">
        <div class="m-wf-field">
          <span class="m-wf-label">Depuis le</span>
          <input type="date" class="m-wf-date" id="cumuls-from" value="${n}">
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Créer le cumul</button>
    </div>`}`}const Ms={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function Ts(e){const i=e.id,t=new Date,n=Ms[e.crop]||["—"],o=n[i%n.length];let s,a;i%5===3?(s=0,a=(t.getHours()+2+i%3*3)%24):(s=(i*2+1)%6+1,a=6+i%5*2);const d=2+i%3,u=new Date(t);u.setDate(u.getDate()+s);const r=s===0?"Aujourd'hui":u.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),c=s*1440+a*60-(t.getHours()*60+t.getMinutes()),f=c>=0&&c<=600;return{product:o,winDateStr:r,winHour:a,winDur:d,isUrgent:f,minutesFromNow:c}}const Is="#1a9e40";function js(e){const t=e.filter(o=>o.crop).map(o=>({p:o,d:Ts(o)})).filter(({d:o})=>o.minutesFromNow>=0&&o.minutesFromNow<=1440).sort((o,s)=>o.d.minutesFromNow-s.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:o,d:s})=>{const a=String(s.winHour).padStart(2,"0"),d=String((s.winHour+s.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${o.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${o.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${Is};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
            <i class="bi bi-check2-circle" style="font-size:12px"></i>
            ${s.winDateStr} · ${a}h–${d}h
          </div>
        </div>
      </div>`}).join("")}</div>
    <div class="m-bh-actions" style="--trait-green:#30d158">
      <button class="m-bh-action" id="trait-btn-saisir" style="background:#1a9e40;border-color:#1a9e40">
        <i class="bi bi-eyedropper-fill"></i> Saisir un traitement
      </button>
      <button class="m-bh-action m-bh-action--cal" id="trait-btn-voir">
        <i class="bi bi-calendar3"></i> Voir les traitements
      </button>
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const ji="weenat-m-traitements";function Ge(){try{return JSON.parse(localStorage.getItem(ji))||[]}catch{return[]}}function qt(e){localStorage.setItem(ji,JSON.stringify(e))}function qs(e,i){let t=new Set;const n=[],o=new Date().toISOString().split("T")[0];function s(){return ot(n,e,t)}function a(r){const c=t.size,f=r.querySelector(".irr-summary"),E=r.querySelector(".irr-save-btn");!f||!E||(f.textContent=c===0?"":`${c} parcelle${c>1?"s":""}`,E.disabled=c===0)}function d(r){r.querySelectorAll(".irr-group-card").forEach(c=>{c.addEventListener("click",()=>{const f=c.dataset.gids.split(",").map(Number),E=f.every(l=>t.has(l));f.forEach(l=>E?t.delete(l):t.add(l)),r.querySelector("#trait-sel-list").innerHTML=s(),d(r),a(r)})}),r.querySelectorAll(".irr-plot-row").forEach(c=>{c.addEventListener("click",()=>{const f=+c.dataset.pid;t.has(f)?t.delete(f):t.add(f),r.querySelector("#trait-sel-list").innerHTML=s(),d(r),a(r)})})}const u=_e(re(`
    <div class="irr-detail-header" style="--irr-accent:#30d158">
      <div class="irr-header-row">
        <button class="irr-back" id="trait-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saisir un traitement</span>
        <div style="width:60px"></div>
      </div>
      <div class="irr-fixed-inputs">
        <div class="irr-fields-row" style="margin-bottom:0">
          <div class="irr-field-card">
            <div class="irr-field-lbl">Date</div>
            <input type="date" class="irr-date-input" id="trait-date" value="${o}">
          </div>
          <div class="irr-field-card">
            <div class="irr-field-lbl">Produit</div>
            <input type="text" class="irr-qty-input" id="trait-produit" placeholder="Ex : Prosaro" style="font-size:13px">
          </div>
        </div>
        <div class="irr-fields-row" style="margin-top:6px;margin-bottom:0">
          <div class="irr-field-card">
            <div class="irr-field-lbl">Dose</div>
            <input type="text" class="irr-qty-input" id="trait-dose" placeholder="Ex : 1 L/ha" style="font-size:13px">
          </div>
        </div>
      </div>
    </div>
    <div class="irr-scroll-body">
      <div id="trait-sel-list">${s()}</div>
    </div>
    <div class="irr-bottom-bar" style="border-top-color:rgba(48,209,88,.2)">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled style="background:#1a9e40;border-color:#1a9e40">Enregistrer</button>
    </div>
  `));d(u),a(u),u.querySelector("#trait-back").addEventListener("click",ie),u.querySelector(".irr-save-btn").addEventListener("click",()=>{const r=u.querySelector("#trait-date").value||o,c=u.querySelector("#trait-produit").value.trim()||"—",f=u.querySelector("#trait-dose").value.trim()||"—",E=Ge();E.unshift({id:Date.now(),date:r,produit:c,dose:f,plotIds:[...t]}),qt(E),ie(),i("Traitement enregistré")})}function Ps(e,i,t){const n=i==="adherent"?ki.adherent:null,o=n!==null?W.filter(r=>r.orgId===n):W;let s=null;const a=re(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Tableau de bord</span></button>
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-right:44px">Traitements</span>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:10px 16px 4px">
        <select id="trait-filter" style="width:100%;font-size:13px;padding:7px 9px;border:1px solid rgba(0,0,0,.12);border-radius:8px;font-family:inherit;background:#fafafa">
          <option value="">Toutes les parcelles</option>
          ${o.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}
        </select>
      </div>
      <div id="trait-cal-content" style="padding:6px 16px 16px"></div>
    </div>`);a.querySelector(".m-detail-back").addEventListener("click",ie);const d=r=>{const[c,f,E]=r.split("-");return`${E}/${f}/${c}`};function u(){const r=a.querySelector("#trait-cal-content");let c=Ge();if(s!==null&&(c=c.filter(f=>(f.plotIds||[]).includes(s))),!c.length){r.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}r.innerHTML=c.map(f=>{const E=(f.plotIds||[]).map(l=>{var p;return(p=e.find(m=>m.id===l))==null?void 0:p.name}).filter(Boolean);return`
        <div class="m-trait-cal-card" data-id="${f.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${d(f.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${E.length} parcelle${E.length>1?"s":""}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${f.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${f.dose}</div>
          ${E.length?`<div style="font-size:11px;color:#8e8e93;margin-top:6px">${E.join(", ")}</div>`:""}
        </div>`}).join(""),r.querySelectorAll(".m-trait-cal-card").forEach(f=>{f.addEventListener("click",()=>{const E=+f.dataset.id,p=Ge().find(y=>y.id===E);if(!p)return;const m=(p.plotIds||[]).map(y=>{var v;return(v=e.find(L=>L.id===y))==null?void 0:v.name}).filter(Boolean),g=document.createElement("div");g.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${d(p.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${p.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${p.dose}</div>
            ${m.length?`<div style="font-size:12px;color:#8e8e93">${m.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const w=Le({title:"Traitement",body:g,doneLabel:"Fermer",onDone:()=>{}});g.querySelector("#tcal-del").addEventListener("click",()=>{const y=Ge().filter(v=>v.id!==E);qt(y),w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{w.remove(),u()},280),t("Traitement supprimé")}),g.querySelector("#tcal-edit").addEventListener("click",()=>{w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>w.remove(),280),Ds(p,e,t,u)})})})}a.querySelector("#trait-filter").addEventListener("change",r=>{s=r.target.value?+r.target.value:null,u()}),u()}function Ds(e,i,t,n){const o=document.createElement("div");o.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">Date</div>
        <input type="date" id="tedit-date" value="${e.date}" style="width:100%;box-sizing:border-box;font-size:13px;padding:7px 9px;border:1px solid rgba(0,0,0,.12);border-radius:6px;font-family:inherit">
      </div>
      <div>
        <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">Produit</div>
        <input type="text" id="tedit-produit" value="${e.produit}" style="width:100%;box-sizing:border-box;font-size:13px;padding:7px 9px;border:1px solid rgba(0,0,0,.12);border-radius:6px;font-family:inherit">
      </div>
      <div>
        <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">Dose</div>
        <input type="text" id="tedit-dose" value="${e.dose}" style="width:100%;box-sizing:border-box;font-size:13px;padding:7px 9px;border:1px solid rgba(0,0,0,.12);border-radius:6px;font-family:inherit">
      </div>
    </div>`,Le({title:"Modifier le traitement",body:o,doneLabel:"Enregistrer",onDone:()=>{const s=Ge(),a=s.findIndex(d=>d.id===e.id);a!==-1&&(s[a].date=o.querySelector("#tedit-date").value||e.date,s[a].produit=o.querySelector("#tedit-produit").value.trim()||e.produit,s[a].dose=o.querySelector("#tedit-dose").value.trim()||e.dose,qt(s)),t("Traitement modifié"),n()}})}const Hs={"capteur couché":{icon:"bi-arrow-down-circle-fill",color:"#ff9f0a"},"émissions interrompues":{icon:"bi-wifi-off",color:"#ff3b30"},"capteur déplacé":{icon:"bi-geo-alt-fill",color:"#ff9f0a"},"cuillère bloquée":{icon:"bi-x-octagon-fill",color:"#ff3b30"}};function zs(e,i){const t=i.filter(n=>n.event&&(Array.isArray(n.event)?n.event.length>0:!0));return t.length?`<div class="m-w-list">${t.map(n=>{const o=e.find(d=>n.parcelIds.includes(d.id)),a=(Array.isArray(n.event)?n.event:[n.event]).map(d=>{const u=Hs[d]||{icon:"bi-exclamation-circle-fill",color:"#ff9f0a"};return`<span class="m-ev-badge" style="color:${u.color}"><i class="bi ${u.icon}"></i> ${d}</span>`}).join("");return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${n.id}" style="flex-direction:column;align-items:flex-start;gap:4px">
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
        <div class="m-w-row-name">${n.model} — ${n.serial}</div>
        <div style="display:flex;align-items:center;gap:5px">
          <span style="font-size:11px;color:#8e8e93">${(o==null?void 0:o.ville)||(o==null?void 0:o.name)||"—"}</span>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px">${a}</div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const qi={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},_s={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Bs(e){const i=e.id,t=qi[e.crop]||_s,n=i%t.stages.length,o=(i*2+5)%18+4,s=new Date("2026-04-18");s.setDate(s.getDate()+o);const a=s.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[n],nextStage:t.nextStages[n],variety:t.varieties[i%t.varieties.length],nextDateStr:a,daysToNext:o}}function Fs(e){const i=e.filter(o=>o.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const o of i)t[o.crop]||(t[o.crop]=[]),t[o.crop].push(o);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([o,s])=>{const a=s.map(d=>{const u=!!qi[d.crop],r=u?Bs(d):null,c=u&&r.variety!=="—"?r.variety:"",f=u?r.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${d.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${d.name}</div>
          ${c?`<div class="m-w-row-sub">${c}</div>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${f}</div>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>`}).join("");return`<details class="m-crop-group">
      <summary class="m-crop-summary">
        <div class="m-crop-summary-left">
          <div class="m-crop-summary-name">${o}</div>
          <div class="m-crop-summary-count">${s.length} parcelle${s.length>1?"s":""}</div>
        </div>
        <i class="bi bi-chevron-right m-crop-chevron"></i>
      </summary>
      <div class="m-crop-plots">${a}</div>
    </details>`}).join("")}`}const Pi="weenat-m-notes";function je(){try{return JSON.parse(localStorage.getItem(Pi))||[]}catch{return[]}}function bt(e){localStorage.setItem(Pi,JSON.stringify(e))}function ui(e){const i=je(),t=y=>{const[v,L,A]=y.split("-");return`${A}/${L}/${v}`},n=y=>y.length>70?y.slice(0,70)+"…":y,o=(y,v)=>{const L=y.text.length>70,A=(y.imageIds||[]).length,x=A>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${A} photo${A>1?"s":""}</span>`:"",C=y.linkedType?`<span style="font-size:10px;background:${y.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${y.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${y.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${y.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${v}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${L||A>0||y.linkedType?"pointer":"default"}">
        <button class="m-note-del" data-idx="${v}" style="position:absolute;top:8px;right:8px;border:none;background:rgba(0,0,0,.08);border-radius:50%;width:22px;height:22px;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#636366">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center">
          <span>${t(y.date)}${y.time?" · "+y.time:""}</span>
          ${y.auteur?`<span style="color:#636366;font-weight:500">${y.auteur}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${n(y.text)}</div>
        ${C||x?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${C}${x}</div>`:""}
      </div>`},s=i.slice(0,5),a=s.length?s.map((y,v)=>o(y,v)).join(""):"",d=new Date,u=d.toISOString().slice(0,10),r=`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`,c=ne.find(y=>y.id===(e==="admin"?100:1)),f=c?`${c.prenomProprietaire} ${c.nomProprietaire}`:"",E=c==null?void 0:c.id,l=e==="adherent"?W.filter(y=>y.orgId===E):W,p=e==="adherent"?G.filter(y=>y.parcelIds.some(v=>l.some(L=>L.id===v))):G,m=l.map(y=>`<option value="p-${y.id}">${y.name}</option>`).join(""),g=p.map(y=>{var L;const v=((L=y.parcelIds.map(A=>W.find(x=>x.id===A)).filter(Boolean).find(A=>A.ville))==null?void 0:L.ville)||"";return`<option value="s-${y.id}">${y.serial}${v?" — "+v:""}</option>`}).join(""),w="width:100%;box-sizing:border-box;font-size:13px;padding:7px 9px;border:1px solid rgba(0,0,0,.12);border-radius:6px;font-family:inherit;background:#fafafa";return`
    ${a?`<div id="notes-list" style="margin-bottom:12px">${a}</div>`:""}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <select id="notes-link" style="${w};margin-bottom:6px;color:#1c1c1e">
      <option value="">— Sans lien —</option>
      <optgroup label="Parcelles">${m}</optgroup>
      <optgroup label="Capteurs">${g}</optgroup>
    </select>
    <textarea id="notes-input" placeholder="Votre note…" rows="2"
      style="${w};resize:none;margin-bottom:6px"></textarea>
    <div style="display:flex;gap:6px;margin-bottom:6px">
      <input type="date" id="notes-date" value="${u}" style="${w}">
      <input type="time" id="notes-time" value="${r}" style="${w}">
    </div>
    <div class="jrn-img-zone" style="margin-bottom:8px">
      <div class="jrn-img-previews" id="notes-previews"></div>
      <button type="button" class="jrn-img-add-btn" id="notes-img-btn"><i class="bi bi-camera"></i> Ajouter une photo</button>
      <input type="file" id="notes-img-input" accept="image/*" multiple style="display:none">
      <div class="jrn-img-error" id="notes-img-error"></div>
    </div>
    <input type="hidden" id="notes-auteur" value="${f}">
    <button id="notes-add" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:8px;padding:9px 16px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;margin-bottom:6px">Ajouter la note</button>
    <button id="notes-view" style="width:100%;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:8px;padding:9px 16px;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer">Voir les notes${i.length?` (${i.length})`:""}</button>`}function Os(e){const i=W.map(o=>o.orgId).filter((o,s,a)=>a.indexOf(o)===s&&o!==100).length,t=G.length,n=W.length;return`
    <div class="m-reseau-name">${xe.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${n}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${xe.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${xe.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${xe.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${xe.siege.adresse}, ${xe.siege.codePostal} ${xe.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function Rs(){return`
    <button class="m-support-chat-btn" id="open-chat-btn" type="button">
      <div class="m-support-chat-avatar"><i class="bi bi-robot"></i></div>
      <div class="m-support-chat-info">
        <span>Assistant virtuel Weenat</span>
        <em>Réponse immédiate</em>
      </div>
      <i class="bi bi-chevron-right" style="color:#c7c7cc"></i>
    </button>
    <div class="m-support-list">
      <div class="m-support-list-label">Infos équipe support</div>
      <a class="m-support-row" href="mailto:support@weenat.com">
        <div class="m-support-ico"><i class="bi bi-envelope-fill"></i></div>
        <div class="m-support-info"><span>Email</span><strong>support@weenat.com</strong></div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc"></i>
      </a>
      <a class="m-support-row" href="tel:+33784968456">
        <div class="m-support-ico"><i class="bi bi-telephone-fill"></i></div>
        <div class="m-support-info"><span>Téléphone</span><strong>+33 7 84 96 84 56</strong></div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc"></i>
      </a>
      <div class="m-support-row">
        <div class="m-support-ico"><i class="bi bi-clock-fill"></i></div>
        <div class="m-support-info"><span>Horaires</span><strong>Lun–Jeu 9h–18h · Ven 9h–17h</strong></div>
      </div>
    </div>
    <a class="m-support-center" href="https://support.weenat.com/" target="_blank">
      <i class="bi bi-book"></i> Consulter le centre d'aide
    </a>`}const pi=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Ns(){var r;const e=document.getElementById("phone-screen");(r=document.querySelector(".m-sheet-overlay"))==null||r.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
    <div class="m-sheet m-chat-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-chat-hd">
        <button class="m-sheet-cancel" id="chat-close">Fermer</button>
        <div class="m-chat-hd-center">
          <div class="m-chat-avatar"><i class="bi bi-robot"></i></div>
          <div>
            <div class="m-chat-hd-name">Assistant Weenat</div>
            <div class="m-chat-hd-status"><span class="m-chat-online"></span>En ligne</div>
          </div>
        </div>
        <div style="width:60px"></div>
      </div>
      <div class="m-chat-messages" id="chat-messages">
        <div class="m-chat-msg m-chat-msg--bot">
          <div class="m-chat-bubble">Bonjour ! Je suis l'assistant Weenat. Comment puis-je vous aider ?</div>
        </div>
      </div>
      <div class="m-chat-input-row">
        <input class="m-chat-input" id="chat-input" type="text" placeholder="Posez votre question…">
        <button class="m-chat-send" id="chat-send" type="button"><i class="bi bi-arrow-up"></i></button>
      </div>
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),n=i.querySelector("#chat-input"),o=i.querySelector("#chat-send"),s=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",s),i.addEventListener("click",c=>{c.target===i&&s()});function a(c,f){const E=document.createElement("div");E.className=`m-chat-msg m-chat-msg--${f}`,E.innerHTML=`<div class="m-chat-bubble">${c}</div>`,t.appendChild(E),t.scrollTop=t.scrollHeight}function d(){const c=document.createElement("div");return c.className="m-chat-msg m-chat-msg--bot m-chat-typing",c.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(c),t.scrollTop=t.scrollHeight,c}function u(){const c=n.value.trim();if(!c)return;a(c,"user"),n.value="",o.disabled=!0;const f=d();setTimeout(()=>{f.remove();const E=pi[Math.floor(Math.random()*pi.length)];a(E,"bot"),o.disabled=!1,n.focus()},1200+Math.random()*800)}o.addEventListener("click",u),n.addEventListener("keydown",c=>{c.key==="Enter"&&u()}),setTimeout(()=>n.focus(),350)}function Vs(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const n=ki[i]||1,o=n===100?W:W.filter(h=>h.orgId===n),s=new Set(o.map(h=>h.id)),a=G.filter(h=>h.parcelIds.some(S=>s.has(S)));let d=si(),u=null;function r(){return i!=="admin"?o:u===null?W:W.filter(h=>h.orgId===u)}function c(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${ne.filter(S=>S.id!==100).sort((S,b)=>S.name.localeCompare(b.name)).map(S=>`<option value="${S.id}">${S.name}</option>`).join("")}
    </select>`}const f=Ue(),E=new Set(["mon_reseau","support"]),l=new Set(f.collapsed??de.map(h=>h.id).filter(h=>!E.has(h)));function p(){ti({catalog:de.map(h=>({id:h.id,active:h.active})),collapsed:[...l],mesuresList:$e,cumulsList:he})}function m(h,S){const b=h.fixed?"":`<button class="m-widget-menu" data-widget="${h.id}" type="button">•••</button>`,$=l.has(h.id);return`
      <div class="m-widget${$?" m-widget--collapsed":""}" data-widget="${h.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${h.id}">
          <div class="m-widget-icon-wrap" style="background:${h.color}20;color:${h.color}">
            <i class="bi ${h.icon}"></i>
          </div>
          <span class="m-widget-title">${h.title}</span>
          <i class="bi ${$?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${h.fixed?"0":"8px"}"></i>
          ${b}
        </div>
        <div class="m-widget-bd" style="${$?"display:none":""}">${S}</div>
      </div>`}function g(){d=si();const h=de.filter(b=>b.active&&!b.fixed),S=de.filter(b=>b.active&&b.fixed);t.innerHTML=`
      <button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${[...h,...S].map(b=>{let $="";return b.id==="bilan_hydrique"?$=c()+Ne(r()):b.id==="previsions"?$=ks(o,a,d,i):b.id==="cumuls"?$=ci(o,a):b.id==="temps_reel"?$=li(o,a):b.id==="traitements"?$=js(o):b.id==="evenements"?$=zs(o,a):b.id==="cultures"?$=Fs(o):b.id==="notes"?$=ui(i):b.id==="mon_reseau"?$=Os(i):b.id==="support"&&($=Rs()),m(b,$)}).join("")}
      <div style="height:24px"></div>`,A()}const w='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function y(h,S){const b=h[S],$=`${b.dayLabel.charAt(0).toUpperCase()+b.dayLabel.slice(1)} · ${b.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${w}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${S===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${b.icon}" style="color:${b.color};font-size:22px"></i><span class="m-d-name">${$}</span></div>
          <button class="m-day-nav" id="next-day" ${S>=h.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${b.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${b.tMin} / ${b.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${b.ventMoy}/${b.ventRafales}</strong></div>
          </div>
          <div class="m-list-section-header">Heure par heure</div>
          <div style="background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.07);overflow:hidden;margin-bottom:24px">
            <div style="display:flex;align-items:center;gap:12px;padding:6px 14px;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9f9">
              <span style="width:28px;flex-shrink:0"></span>
              <span style="width:18px;flex-shrink:0;font-size:10px;color:#8e8e93;text-align:center"><i class="bi bi-cloud"></i></span>
              <span style="width:44px;flex-shrink:0;font-size:10px;color:#8e8e93"><i class="bi bi-droplet"></i></span>
              <span style="width:40px;flex-shrink:0;font-size:10px;color:#8e8e93"><i class="bi bi-thermometer"></i></span>
              <span style="font-size:10px;color:#8e8e93"><i class="bi bi-moisture"></i></span>
              <span style="margin-left:auto;font-size:10px;color:#8e8e93"><i class="bi bi-wind"></i></span>
            </div>
            ${b.hours.map((M,T)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${T<b.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${M.label}</span>
                <i class="bi ${M.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${M.pluie>0?`${M.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${M.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${M.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${M.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function v(h,S,b){var $,M;h.querySelector(".m-detail-back").addEventListener("click",ie),($=h.querySelector("#prev-day"))==null||$.addEventListener("click",()=>{h.innerHTML=y(S,b-1),v(h,S,b-1)}),(M=h.querySelector("#next-day"))==null||M.addEventListener("click",()=>{h.innerHTML=y(S,b+1),v(h,S,b+1)})}function L(h,S){const b=re(y(h,S));v(b,h,S)}function A(){var Te,Xe,Qe,_t,Bt;(Te=e.querySelector(".m-navbar-action"))==null||Te.addEventListener("click",C),(Xe=t.querySelector("#dash-add-widget-btn"))==null||Xe.addEventListener("click",k),t.querySelectorAll(".m-widget-hd--toggle").forEach(q=>{q.addEventListener("click",F=>{if(F.target.closest(".m-widget-menu"))return;const _=q.dataset.collapse;l.has(_)?l.delete(_):l.add(_),p(),g()})}),(Qe=t.querySelector("#trait-btn-saisir"))==null||Qe.addEventListener("click",()=>{qs(o,Ee)}),(_t=t.querySelector("#trait-btn-voir"))==null||_t.addEventListener("click",()=>{Ps(o,i,Ee)}),t.querySelectorAll(".m-trait-card").forEach(q=>{q.addEventListener("click",()=>{const F=W.find(_=>_.id===+q.dataset.plotId);if(F){const _=G.filter(R=>R.parcelIds.includes(F.id)).map(R=>R.id);me(()=>Promise.resolve().then(()=>gt),void 0).then(R=>R.initParcelDetail(F,_,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(q=>{q.addEventListener("click",()=>{const F=a.find(_=>_.id===+q.dataset.sensorId);F&&me(()=>Promise.resolve().then(()=>hi),void 0).then(_=>_.initSensorDetail(F,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(q=>{q.addEventListener("click",()=>{const F=W.find(_=>_.id===+q.dataset.plotId);if(F){const _=G.filter(R=>R.parcelIds.includes(F.id)).map(R=>R.id);me(()=>Promise.resolve().then(()=>gt),void 0).then(R=>R.initParcelDetail(F,_,"params","Tableau de bord"))}})});function h(){t.querySelectorAll(".m-bh-plot-link").forEach(q=>{q.addEventListener("click",()=>{const F=W.find(_=>_.id===+q.dataset.plotId);if(F){const _=G.filter(R=>R.parcelIds.includes(F.id)).map(R=>R.id);me(()=>Promise.resolve().then(()=>gt),void 0).then(R=>R.initParcelDetail(F,_,"widgets","Tableau de bord"))}})})}function S(){var q,F,_;(q=t.querySelector("#bh-btn-calendar"))==null||q.addEventListener("click",()=>{me(()=>Promise.resolve().then(()=>Re),void 0).then(R=>R.openCalendar(o,""))}),(F=t.querySelector("#bh-btn-irrigation"))==null||F.addEventListener("click",()=>{me(()=>Promise.resolve().then(()=>Re),void 0).then(R=>R.openIrrigationSaisie(o,Ee))}),(_=t.querySelector("#bh-btn-strategie"))==null||_.addEventListener("click",()=>{me(()=>Promise.resolve().then(()=>Re),void 0).then(R=>R.openIrrigationStrategie(o,Ee))})}function b(){const q=t.querySelector("#bh-expand");q&&q.addEventListener("click",()=>{const F=q.dataset.expanded==="true",_=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');_&&(_.innerHTML=c()+Ne(r(),!F),h(),S(),b(),i==="admin"&&$())})}function $(){const q=t.querySelector("#bh-org-select");q&&(q.value=u===null?"all":String(u),q.addEventListener("change",()=>{u=q.value==="all"?null:+q.value;const F=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');F&&(F.innerHTML=c()+Ne(r()),h(),S(),b(),$())}))}h(),S(),b(),i==="admin"&&$();function M(){const q=t.querySelector('[data-widget="cumuls"] .m-widget-bd');q&&(q.innerHTML=ci(o,a),T())}function T(){var ue,ae,K,O;const q=()=>{var D;const I=(D=t.querySelector("#cumuls-metric"))==null?void 0:D.value,j=t.querySelector("#cumuls-thresholds");j&&(I==="hf"?j.innerHTML=`
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`:I==="dj"?j.innerHTML=`
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`:j.innerHTML="")},F=()=>{var P;const I=t.querySelector("#cumuls-metric"),j=(P=t.querySelector("#cumuls-subject"))==null?void 0:P.value;if(!I)return;const D=ht(j);I.innerHTML='<option value="">— Métrique —</option>'+D.map(J=>`<option value="${J.id}">${J.label}</option>`).join(""),I.disabled=!j||!D.length,q(),_()},_=()=>{var X,Z,le;const I=t.querySelector("#cumuls-create"),j=t.querySelector("#cumuls-date-err"),D=(X=t.querySelector("#cumuls-subject"))==null?void 0:X.value,P=(Z=t.querySelector("#cumuls-from"))==null?void 0:Z.value,J=(le=t.querySelector("#cumuls-metric"))==null?void 0:le.value,B=P?(Date.now()-new Date(P))/864e5>365:!1;j&&(j.style.display=B?"":"none"),I&&(I.disabled=!D||!P||!J||B)};(ue=t.querySelector("#cumuls-subject"))==null||ue.addEventListener("change",()=>{F(),_()}),(ae=t.querySelector("#cumuls-from"))==null||ae.addEventListener("change",_),(K=t.querySelector("#cumuls-metric"))==null||K.addEventListener("change",()=>{q(),_()}),(O=t.querySelector("#cumuls-create"))==null||O.addEventListener("click",()=>{var Z,le,Y,N,te,se;const I=t.querySelector("#cumuls-subject"),j=I==null?void 0:I.value,D=(Z=t.querySelector("#cumuls-from"))==null?void 0:Z.value,P=(le=t.querySelector("#cumuls-metric"))==null?void 0:le.value;if(!j||!D||!P)return;const J=Ce.find(Ae=>Ae.id===P),B=ri[P]||{icon:"bi-bar-chart-fill",color:"#636366"},X=P==="hf"?{cold:+(((Y=t.querySelector("#cumuls-th-cold"))==null?void 0:Y.value)??7.2)}:P==="dj"?{low:+(((N=t.querySelector("#cumuls-th-low"))==null?void 0:N.value)??0),high:+(((te=t.querySelector("#cumuls-th-high"))==null?void 0:te.value)??18)}:null;he.push({metricId:P,metricLabel:(J==null?void 0:J.label)||P,unit:(J==null?void 0:J.unit)||"",icon:B.icon,color:B.color,subjectKey:j,subjectLabel:(((se=I.options[I.selectedIndex])==null?void 0:se.text)||j).trim(),fromDate:D,value:String(di(j,D,P)??"—"),thresholds:X}),p(),M()}),t.querySelectorAll(".m-cumuls-del").forEach(I=>{I.addEventListener("click",()=>{he.splice(+I.dataset.cidx,1),p(),M()})}),t.querySelectorAll(".m-cumuls-edit").forEach(I=>{I.addEventListener("click",()=>ye(+I.dataset.cidx))});function R(I,j={}){return I==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${j.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:I==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${j.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${j.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function ye(I){const j=he[I];if(!j)return;const D=a.filter(N=>N.parcelIds.length>0&&Ii.has(N.model)),P=new Set(D.flatMap(N=>N.parcelIds)),B=o.filter(N=>P.has(N.id)).map(N=>`<option value="p-${N.id}"${j.subjectKey===`p-${N.id}`?" selected":""}>${N.name}</option>`).join(""),X=D.map(N=>{const te=o.find(se=>N.parcelIds.includes(se.id));return`<option value="s-${N.id}"${j.subjectKey===`s-${N.id}`?" selected":""}>${N.model} — ${N.serial}${te?` · ${te.name}`:""}</option>`}).join(""),le=ht(j.subjectKey).map(N=>`<option value="${N.id}"${j.metricId===N.id?" selected":""}>${N.label}</option>`).join(""),Y=document.createElement("div");Y.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",Y.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${B}</optgroup>
            ${X?`<optgroup label="Capteurs">${X}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${le}
          </select>
          <div id="cedit-thresholds">${R(j.metricId,j.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${j.fromDate}">
          </div>`,Y.querySelector("#cedit-subject").addEventListener("change",()=>{const N=Y.querySelector("#cedit-subject").value,te=Y.querySelector("#cedit-metric"),se=ht(N);te.innerHTML='<option value="">— Métrique —</option>'+se.map(Ae=>`<option value="${Ae.id}">${Ae.label}</option>`).join(""),Y.querySelector("#cedit-thresholds").innerHTML=""}),Y.querySelector("#cedit-metric").addEventListener("change",()=>{Y.querySelector("#cedit-thresholds").innerHTML=R(Y.querySelector("#cedit-metric").value)}),Le({title:"Modifier le cumul",body:Y,doneLabel:"Enregistrer",onDone:()=>{var Ot,Rt,Nt,Vt;const N=Y.querySelector("#cedit-subject").value||j.subjectKey,te=Y.querySelector("#cedit-metric").value||j.metricId,se=Y.querySelector("#cedit-from").value||j.fromDate;if(!N||!te||!se)return;if((Date.now()-new Date(se))/864e5>365){Ee("Date trop ancienne (max 365 jours)");return}const pe=Ce.find(Ki=>Ki.id===te),Ie=ri[te]||{icon:"bi-bar-chart-fill",color:"#636366"},Ft=Y.querySelector("#cedit-subject"),Zi=te==="hf"?{cold:+(((Ot=Y.querySelector("#cedit-th-cold"))==null?void 0:Ot.value)??7.2)}:te==="dj"?{low:+(((Rt=Y.querySelector("#cedit-th-low"))==null?void 0:Rt.value)??0),high:+(((Nt=Y.querySelector("#cedit-th-high"))==null?void 0:Nt.value)??18)}:null;he[I]={...j,metricId:te,metricLabel:(pe==null?void 0:pe.label)||te,unit:(pe==null?void 0:pe.unit)||"",icon:Ie.icon,color:Ie.color,subjectKey:N,subjectLabel:(((Vt=Ft.options[Ft.selectedIndex])==null?void 0:Vt.text)||N).trim(),fromDate:se,value:String(di(N,se,te)??"—"),thresholds:Zi},p(),M()}})}}T(),(Bt=t.querySelector("#open-chat-btn"))==null||Bt.addEventListener("click",Ns);function H(){const q=t.querySelector('[data-widget="notes"] .m-widget-bd');q&&(q.innerHTML=ui(i),Q())}let z=[];function Q(){var ue,ae;z=[];const q=t.querySelector("#notes-img-input"),F=t.querySelector("#notes-img-btn"),_=t.querySelector("#notes-previews"),R=t.querySelector("#notes-img-error");q&&F&&_&&window.setupImgUpload&&window.setupImgUpload(q,F,_,R,z),(ue=t.querySelector("#notes-add"))==null||ue.addEventListener("click",async()=>{var le,Y,N,te,se,Ae;const K=(le=t.querySelector("#notes-input"))==null?void 0:le.value.trim(),O=((Y=t.querySelector("#notes-date"))==null?void 0:Y.value)||new Date().toISOString().slice(0,10),I=((N=t.querySelector("#notes-time"))==null?void 0:N.value)||"",j=((te=t.querySelector("#notes-auteur"))==null?void 0:te.value)||"";if(!K)return;const D=((se=t.querySelector("#notes-link"))==null?void 0:se.value)||"";let P=null,J=null,B="";if(D.startsWith("p-"))P="parcel",J=+D.slice(2),B=((Ae=W.find(pe=>pe.id===J))==null?void 0:Ae.name)||"";else if(D.startsWith("s-")){P="sensor",J=+D.slice(2);const pe=G.find(Ie=>Ie.id===J);B=pe?pe.serial:""}const X=[];if(z.length&&window.ImageStore)for(const pe of z){const Ie=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(Ie,pe),X.push(Ie)}const Z=je();Z.unshift({date:O,time:I,text:K,auteur:j,imageIds:X,linkedType:P,linkedId:J,linkedName:B}),bt(Z),t.querySelector("#notes-input").value="",H()}),(ae=t.querySelector("#notes-view"))==null||ae.addEventListener("click",()=>{const K=D=>{const[P,J,B]=D.split("-");return`${B}/${J}/${P}`},O=D=>D.length>70?D.slice(0,70)+"…":D,I=document.createElement("div");function j(){const D=je();if(!D.length){I.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}I.innerHTML=D.map((P,J)=>{const B=(P.imageIds||[]).length,X=P.linkedType?`<span style="font-size:10px;background:${P.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${P.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${P.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${P.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${J}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del" data-idx="${J}" style="position:absolute;top:8px;right:8px;border:none;background:rgba(0,0,0,.08);border-radius:50%;width:22px;height:22px;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#636366">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${K(P.date)}${P.time?" · "+P.time:""}</span>
                  ${P.auteur?`<span style="color:#636366;font-weight:500">${P.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${O(P.text)}</div>
                ${X||B>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${X}${B>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${B} photo${B>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),I.querySelectorAll(".m-note-del").forEach(P=>{P.addEventListener("click",async J=>{var le;J.stopPropagation();const B=je(),X=+P.dataset.idx,Z=B[X];(le=Z==null?void 0:Z.imageIds)!=null&&le.length&&window.ImageStore&&await window.ImageStore.remove(Z.imageIds),B.splice(X,1),bt(B),j(),H()})}),I.querySelectorAll(".m-note-card").forEach(P=>{P.addEventListener("click",async()=>{const B=je()[+P.dataset.idx];if(!B)return;const X=B.linkedType?`<span style="font-size:11px;background:${B.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${B.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${B.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${B.linkedName||""}</span>`:"",Z=document.createElement("div");if(Z.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${K(B.date)}${B.time?" · "+B.time:""}</span>
                  ${B.auteur?`<span style="color:#636366;font-weight:500">${B.auteur}</span>`:""}
                  ${X}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${B.text}</div>
                ${(B.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Le({title:"Note",body:Z,doneLabel:"Fermer",onDone:()=>{}}),(B.imageIds||[]).length&&window.ImageStore){const le=Z.querySelector("#note-detail-photos");for(const Y of B.imageIds){const N=await window.ImageStore.get(Y);if(!N)continue;const te=document.createElement("div");te.className="jrn-img-thumb-wrap";const se=document.createElement("img");se.className="jrn-img-thumb",se.src=N,se.alt="",se.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(N)}),te.appendChild(se),le.appendChild(te)}}})})}j(),Le({title:"Notes",body:I,doneLabel:"Fermer",onDone:()=>{}})});const ye=K=>{const[O,I,j]=K.split("-");return`${j}/${I}/${O}`};t.querySelectorAll("#notes-list .m-note-del").forEach(K=>{K.addEventListener("click",async O=>{var P;O.stopPropagation();const I=je(),j=+K.dataset.idx,D=I[j];(P=D==null?void 0:D.imageIds)!=null&&P.length&&window.ImageStore&&await window.ImageStore.remove(D.imageIds),I.splice(j,1),bt(I),H()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(K=>{K.addEventListener("click",async()=>{const I=je()[+K.dataset.idx];if(!I)return;const j=I.linkedType?`<span style="font-size:11px;background:${I.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${I.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${I.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${I.linkedName||""}</span>`:"",D=document.createElement("div");if(D.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${ye(I.date)}${I.time?" · "+I.time:""}</span>
              ${I.auteur?`<span style="color:#636366;font-weight:500">${I.auteur}</span>`:""}
              ${j}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${I.text}</div>
            ${(I.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Le({title:"Note",body:D,doneLabel:"Fermer",onDone:()=>{}}),(I.imageIds||[]).length&&window.ImageStore){const P=D.querySelector("#note-detail-photos");for(const J of I.imageIds){const B=await window.ImageStore.get(J);if(!B)continue;const X=document.createElement("div");X.className="jrn-img-thumb-wrap";const Z=document.createElement("img");Z.className="jrn-img-thumb",Z.src=B,Z.alt="",Z.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(B)}),X.appendChild(Z),P.appendChild(X)}}})})}Q();function ce(){t.querySelectorAll(".m-tr-chart-wrap").forEach(q=>{const F=q.querySelector(".m-tr-cursor"),_=q.querySelector(".m-tr-tooltip");if(!_)return;const R=JSON.parse(q.dataset.series||"[]"),ye=q.dataset.unit||"",ue=R.length,ae=26,K=270;q.addEventListener("pointermove",O=>{const I=q.getBoundingClientRect(),j=Math.max(0,Math.min(((O.clientX-I.left)*(ae+K)/I.width-ae)/K,1)),D=R[Math.round(j*(ue-1))]??null;if(F){const P=ae+Math.round(j*K);F.setAttribute("x1",P),F.setAttribute("x2",P),F.setAttribute("opacity","1")}_.style.display="",_.style.left=`${Math.max(0,Math.min(O.clientX-I.left-24,I.width-60))}px`,_.textContent=D!==null?`${(+D).toFixed(1)} ${ye}`:"—"}),q.addEventListener("pointerleave",()=>{_.style.display="none",F==null||F.setAttribute("opacity","0")})})}function U(){const q=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');q&&(q.innerHTML=li(o,a),ve())}function ve(){var R,ye,ue,ae,K;const q=()=>{var I,j;const O=t.querySelector("#msr-create");O&&(O.disabled=!((I=t.querySelector("#msr-subject"))!=null&&I.value)||!((j=t.querySelector("#msr-metric"))!=null&&j.value)||$e.length>=nt)},F=()=>{var D;const O=t.querySelector("#msr-metric"),I=(D=t.querySelector("#msr-subject"))==null?void 0:D.value;if(!O)return;const j=$s(I,a);O.innerHTML='<option value="">— Métrique —</option>'+j.map(P=>`<option value="${P}">${Ct[P]}</option>`).join(""),O.disabled=!I||!j.length,q()},_=()=>{var j;const O=t.querySelector("#msr-step"),I=((j=t.querySelector("#msr-period"))==null?void 0:j.value)||"7d";O&&(O.innerHTML=Ti(I).map(D=>`<option value="${D.id}">${D.label}</option>`).join(""),q())};(R=t.querySelector("#msr-subject"))==null||R.addEventListener("change",()=>{F(),q()}),(ye=t.querySelector("#msr-period"))==null||ye.addEventListener("change",()=>{_(),q()}),(ue=t.querySelector("#msr-metric"))==null||ue.addEventListener("change",q),(ae=t.querySelector("#msr-step"))==null||ae.addEventListener("change",q),(K=t.querySelector("#msr-create"))==null||K.addEventListener("click",()=>{var Z,le,Y;const O=t.querySelector("#msr-subject"),I=t.querySelector("#msr-metric"),j=t.querySelector("#msr-period"),D=t.querySelector("#msr-step"),P=O==null?void 0:O.value,J=I==null?void 0:I.value,B=j==null?void 0:j.value,X=D==null?void 0:D.value;!P||!J||!B||!X||($e.push({subjectKey:P,subjectLabel:(((Z=O.options[O.selectedIndex])==null?void 0:Z.text)||P).trim(),metricId:J,metricLabel:Ct[J]||J,unit:ys[J]||"",period:B,periodLabel:(((le=j.options[j.selectedIndex])==null?void 0:le.text)||B).trim(),step:X,stepLabel:(((Y=D.options[D.selectedIndex])==null?void 0:Y.text)||X).trim(),color:Mi[J]||ni[$e.length%ni.length]}),p(),U())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(O=>{O.addEventListener("click",()=>{$e.splice(+O.dataset.idx,1),p(),U()})}),t.querySelectorAll(".m-wf-view-data[data-sensor-id]").forEach(O=>{O.addEventListener("click",()=>{const I=+O.dataset.sensorId,j=G.find(D=>D.id===I);j&&me(()=>Promise.resolve().then(()=>hi),void 0).then(D=>D.initSensorDetail(j,"donnees",i))})}),ce()}ve(),t.querySelectorAll(".m-prev-card").forEach(q=>{q.addEventListener("click",()=>{L(d,+q.dataset.day)})});const fe=t.querySelector(".m-prev-expand-btn");fe&&fe.addEventListener("click",()=>L(d,3)),t.querySelectorAll(".m-widget-menu").forEach(q=>{q.addEventListener("click",F=>{var K;F.stopPropagation();const _=de.find(O=>O.id===q.dataset.widget);if(!_)return;const R=document.createElement("div"),ye=_.id==="bilan_hydrique",ue=Ue().sensorlessEnabled??!0;R.innerHTML=`
          <div class="m-sheet-links">
            ${ye?`<a class="m-sheet-link" id="menu-sensorless">${ue?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const ae=Le({title:_.title,body:R,doneLabel:"Fermer",onDone:()=>{}});(K=R.querySelector("#menu-sensorless"))==null||K.addEventListener("click",()=>{ti({sensorlessEnabled:!ue}),ae.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{ae.remove();const O=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');O&&(O.innerHTML=c()+Ne(r()),h(),S(),b(),i==="admin"&&$())},280)}),R.querySelector("#menu-move").addEventListener("click",()=>{ae.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{ae.remove(),x()},280)}),R.querySelector("#menu-remove").addEventListener("click",()=>{_.active=!1,ae.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{ae.remove(),p(),g()},280),Ee("Widget retiré")})})})}function x(){const h=document.createElement("div"),S=()=>de.filter($=>$.active&&!$.fixed),b=()=>{const $=S();h.innerHTML=$.map((M,T)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${M.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${T}" data-dir="-1" ${T===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${T}" data-dir="1" ${T===$.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),h.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(M=>{M.addEventListener("click",()=>{const T=S(),H=+M.dataset.i,z=H+ +M.dataset.dir,Q=de.indexOf(T[H]),ce=de.indexOf(T[z]);[de[Q],de[ce]]=[de[ce],de[Q]],p(),b(),g()})})};b(),Le({title:"Réorganiser les widgets",body:h,doneLabel:"Fermer",onDone:()=>{}})}function C(){const h=i==="admin",S=re(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
          <span style="font-size:17px;font-weight:600">Ajouter</span>
          <div style="width:44px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:52px">
        <div style="padding:12px 16px">
          <div class="m-add-section-label">Mon exploitation</div>
          <div class="m-add-list">
            ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"}].map(b=>`
              <button class="m-add-item" data-action="${b.action}">
                <i class="bi ${b.icon}"></i>
                <span>${b.label}</span>
              </button>`).join("")}
          </div>
          ${h?`
          <div class="m-add-section-label" style="margin-top:16px">Mon réseau</div>
          <div class="m-add-list">
            <button class="m-add-item" data-action="adherent">
              <i class="bi bi-building"></i>
              <span>Adhérent</span>
            </button>
          </div>`:""}
          <div class="m-add-section-label" style="margin-top:16px">Mon compte</div>
          <div class="m-add-list">
            <button class="m-add-item" data-action="alerte">
              <i class="bi bi-bell"></i>
              <span>Alerte</span>
            </button>
          </div>
        </div>
      </div>`);S.querySelector(".m-detail-back").addEventListener("click",ie),S.querySelectorAll(".m-add-item").forEach(b=>{b.addEventListener("click",()=>{const $=b.dataset.action;$==="irrigation"?(ie(),me(()=>Promise.resolve().then(()=>Re),void 0).then(M=>M.openIrrigationSaisie(o,Ee))):$==="strategie-irrigation"?(ie(),me(()=>Promise.resolve().then(()=>Re),void 0).then(M=>M.openIrrigationStrategie(o,Ee))):Ee("Fonctionnalité à venir")})})}function k(){const h=document.createElement("div"),S=()=>{const b=de.filter($=>!$.fixed);h.innerHTML=b.map($=>`
        <div class="m-catalog-row${$.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${$.color}20;color:${$.color}"><i class="bi ${$.icon}"></i></div>
          <span class="m-catalog-title">${$.title}</span>
          ${$.available?`<button class="m-catalog-toggle${$.active?" m-catalog-toggle--on":""}" data-cid="${$.id}" type="button">
                <i class="bi ${$.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),h.querySelectorAll("[data-cid]").forEach($=>{$.addEventListener("click",()=>{const M=de.find(T=>T.id===$.dataset.cid);M&&(M.active=!M.active,p(),S(),g())})})};S(),Le({title:"Widgets disponibles",body:h,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",h=>{if(h.key!=="weenat_proto_store")return;$i(W);const S=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');S&&(S.innerHTML=c()+Ne(r()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=C,g()}new URLSearchParams(window.location.search).get("role");const Ws=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermo-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],kt={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},Di=e=>`dash-widgets-parcel-${e}`;function Js(e,i){const t=i.map(a=>G.find(d=>d.id===a)).filter(Boolean),n=new Set(t.map(a=>a.model)),o=["previsions-5j","cumuls"];return e.irrigation&&e.irrigation!=="Non irrigué"&&o.push("irrigations"),Object.entries(kt).forEach(([a,d])=>{d.some(u=>n.has(u))&&o.push(a)}),o}function at(e,i){try{const t=JSON.parse(localStorage.getItem(Di(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return Js(e,i)}function Hi(e,i){localStorage.setItem(Di(e),JSON.stringify(i))}function Gs(e,i,t){const n=new Set(at(e,i)),o=Ws.map((a,d)=>`
    <div class="m-list-section-header"${d>0?' style="margin-top:20px"':""}>${a.title}</div>
    ${a.items.map(u=>{const r=n.has(u.id);return`
        <div class="m-wcat-item">
          <span>${u.label}</span>
          ${r?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${u.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`}).join("")}`).join(""),s=re(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Ajouter un widget</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:8px 0 32px">${o}</div>
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",ie),s.querySelectorAll(".m-wcat-add").forEach(a=>{a.addEventListener("click",()=>{const d=a.dataset.wid,u=at(e,i);u.includes(d)||(u.push(d),Hi(e.id,u)),ie(),t==null||t()})})}const Oe={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}},Pt={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function rt(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(n,o)=>{const s=o/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const a=t.base+t.amp*Math.sin(s-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,a))})}const Dt={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},Ht={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Us(e,i,t,n,o,s=20){const a=Ht[e]||10080,d=new Date,u=E=>e==="1d"||e==="hier"?`${String(E.getHours()).padStart(2,"0")}h`:e==="365d"?E.toLocaleDateString("fr-FR",{month:"short"}):`${String(E.getDate()).padStart(2,"0")}/${String(E.getMonth()+1).padStart(2,"0")}`,r=4,c=i-t-n,f=o-s;return Array.from({length:r+1},(E,l)=>{const p=l/r,m=new Date(d.getTime()-(1-p)*a*6e4),g=(t+p*c).toFixed(1),w=l===0?"start":l===r?"end":"middle";return[`<line x1="${g}" y1="${f}" x2="${g}" y2="${f+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${g}" y="${o-3}" text-anchor="${w}" font-size="9" fill="#8e8e93" font-family="-apple-system">${u(m)}</text>`].join("")}).join("")}function zi(e,i,t,n="7d"){const o=Dt[n]||60,s=rt(e,o),a=320,d=100,u=34,r=6,c=10,f=20,E=a-u-r,l=d-c-f,p=t?0:Math.min(...s),m=Math.max(...s,p+.001),g=m-p,w=$=>u+$/(s.length-1)*E,y=$=>c+l-($-p)/g*l,v=`g${Math.random().toString(36).slice(2,8)}`,L=[0,.5,1].map($=>{const M=p+$*g,T=c+l-$*l;return`<text x="${u-3}" y="${(T+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${M<10?M.toFixed(1):Math.round(M)}</text>`}).join(""),A=[.25,.5,.75].map($=>{const M=(c+l-$*l).toFixed(1);return`<line x1="${u}" y1="${M}" x2="${a-r}" y2="${M}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),x=`<line x1="${u}" y1="${c+l}" x2="${a-r}" y2="${c+l}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,C=Us(n,a,u,r,d);if(t){const $=E/s.length*.7,M=s.map((T,H)=>{const z=(T-p)/g*l,Q=c+l-z;return`<rect x="${(w(H)-$/2).toFixed(1)}" y="${Q.toFixed(1)}" width="${$.toFixed(1)}" height="${z.toFixed(1)}" fill="${i}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${a} ${d}" width="100%" height="${d}" preserveAspectRatio="none">${L}${A}${x}${C}${M}</svg>`}const h=s.map(($,M)=>[w(M),y($)]).map(([$,M],T)=>`${T?"L":"M"}${$.toFixed(1)},${M.toFixed(1)}`).join(" "),S=`${h} L${w(s.length-1).toFixed(1)},${(c+l).toFixed(1)} L${u},${(c+l).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map($=>+$.toFixed(2)),minV:+p.toFixed(2),maxV:+m.toFixed(2)}))}" data-color="${i}" style="position:relative">
    <svg viewBox="0 0 ${a} ${d}" width="100%" height="${d}" preserveAspectRatio="none">
      <defs><linearGradient id="${v}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${L}${A}${x}
      <path d="${S}" fill="url(#${v})"/>
      <path d="${h}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${C}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Ys(e,i,t){if(!t)return"";const n=Dt[i]||60,s=(Ht[i]||10080)/(n*60),a=rt(e,n);let d=[];if(t==="temp"){const u=a.reduce((c,f)=>c+Math.max(0,f),0)*(s/24),r=a.filter(c=>c<7).length*s;d=[{label:"Degrés jours",val:`${Math.round(u)} DJ`},{label:"Heures de froid",val:`${Math.round(r)} h`}]}else if(t==="pluie")d=[{label:"Cumul pluie",val:`${a.reduce((r,c)=>r+c,0).toFixed(1)} mm`}];else if(t==="rayo"){const u=a.filter(r=>r>120).length*s;d=[{label:"Ensoleillement",val:`${Math.round(u)} h`}]}else if(t==="etp")d=[{label:"ETP cumulée",val:`${(a.reduce((r,c)=>r+c,0)*(s/24)).toFixed(1)} mm`}];else if(t==="hws"){const u=a.filter(r=>r>50).length*s;d=[{label:"Heures d'humectation",val:`${Math.round(u)} h`}]}return d.length?`<div class="m-chart-cumuls">${d.map(u=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${u.label}</span>
      <span class="m-chart-cumul-val">${u.val}</span>
    </div>`).join("")}</div>`:""}function Zs(e,i,t=null){const n=Oe[e];if(!n)return"";const o=t?`<button class="m-chart-expand-btn" data-sensor-id="${t}" data-metric-id="${e}" style="border:none;background:none;color:#007AFF;font-size:11px;padding:2px 4px;cursor:pointer;display:flex;align-items:center;gap:3px;margin-left:auto;font-family:inherit"><i class="bi bi-fullscreen"></i> Voir les données</button>`:"";return`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${n.color}">${n.label}</span>
        ${o}
      </div>
      ${zi(e,n.color,n.cumul,i)}
      ${Ys(e,i,n.cumulsType)}
    </div>`}function Ks(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:n,maxV:o}=i,s=e.querySelector(".m-chart-tip"),a=e.querySelector(".m-chart-crosshair"),d=e.dataset.color||"#0172A4";function u(c){const f=e.getBoundingClientRect(),E=Math.max(0,Math.min(1,(c-f.left)/f.width)),l=Math.round(E*(t.length-1)),p=t[l],m=E*100;a.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${m}%;width:1px;background:${d};opacity:.5`,s.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(m,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,s.textContent=p<10?p.toFixed(1):String(Math.round(p))}function r(){a.style.display="none",s.style.display="none"}e.addEventListener("pointermove",c=>{c.preventDefault(),u(c.clientX)}),e.addEventListener("pointerdown",c=>u(c.clientX)),e.addEventListener("pointerup",r),e.addEventListener("pointerleave",r),e.style.cursor="crosshair"}function Xs(e){const i=ee.filter(f=>f.plotId===e.id),t=new Date().toISOString().split("T")[0],n=i.filter(f=>f.real),o=i.filter(f=>!f.real),s=n.reduce((f,E)=>f+E.mm,0),a=o.reduce((f,E)=>f+E.mm,0),d=o.filter(f=>f.iso>=t).sort((f,E)=>f.iso<E.iso?-1:1)[0],u=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],r=f=>{const[,E,l]=f.split("-");return`${+l} ${u[+E-1]}`},c=e.irrigation;return i.length?`
    <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
        <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
          <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          ${c?`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:20px;padding:1px 8px;font-size:11px;font-weight:600">${c}</span>`:""}
          ${e.substrate||e.texture?`<span style="background:#f0f0f0;color:#636366;border-radius:20px;padding:1px 8px;font-size:11px;font-weight:500">${e.substrate?"Substrat : "+e.substrate:e.texture}</span>`:""}
        </span>
        <button class="m-widget-menu" type="button">•••</button>
      </div>
      <div style="display:flex;gap:20px;width:100%">
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Réalisées</div>
          <div style="font-size:22px;font-weight:700;color:#E07820;line-height:1.1">${s} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${n.length} irrig.</div>
        </div>
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Planifiées</div>
          <div style="font-size:22px;font-weight:700;color:#FFB705;line-height:1.1">${a} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${o.length} irrig.</div>
        </div>
      </div>
      ${d?`<div style="font-size:12px;color:#3a3a3c"><i class="bi bi-arrow-right-circle" style="color:#0172A4"></i> Prochaine · <strong>${r(d.iso)}</strong> · ${d.mm} mm</div>`:""}
    </div>`:`
      <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:8px">
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
          <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
            <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          </span>
          <button class="m-widget-menu" data-wid="irrigations" type="button">•••</button>
        </div>
        <div style="font-size:13px;color:#8e8e93">Aucune irrigation enregistrée cette saison</div>
      </div>`}function Qs(e,i=[]){const t=at(e,i),n=i.map(s=>G.find(a=>a.id===s)).filter(Boolean);let o="";for(const s of t)if(s==="irrigations")o+=Xs(e);else if(s==="cumuls")o+=tn(e,i);else if(s==="previsions-5j")o+=sn(e);else if(kt[s]){const a=new Set(kt[s]),d=n.filter(u=>a.has(u.model));d.length&&(o+=nn(d,s))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${o}
    </div>`}function zt(e,i,t,n,o=""){return`
    <div class="m-widget-card">
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${o}" type="button">•••</button>
      </div>
      ${n}
    </div>`}function qe(e,i,t){const n=(e*9301+49297)%233280,s={etp:1+n%60/100,pluie:.8+n%70/100,djc:4+n%60/10,hfroid:.4+n%12/10,humec:.1+n%20/100,enso:4+n%40/10}[i]??1,a=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(s*a*10)/10}const _i=e=>`m-pcumuls-${e}`;function Fe(e){try{return JSON.parse(localStorage.getItem(_i(e)))||{}}catch{return{}}}function et(e,i){const t=Fe(e);localStorage.setItem(_i(e),JSON.stringify({...t,...i}))}const en={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function tn(e,i=[]){const t=new Set;i.forEach(l=>{const p=G.find(m=>m.id===l);p&&(Pt[p.model]||[]).forEach(m=>t.add(m))});const n=`${new Date().getFullYear()}-01-01`,o=Fe(e.id),s=new Set(o.hidden||[]),a=o.dates||{},d=o.cfg||{};e.id;const u=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:qe(e.id,"etp",a.etp||n),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:qe(e.id,"pluie",a.pluie||n),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:qe(e.id,"djc",a.djc||n),show:t.has("temperature"),cfg:!0,cfgLabel:`${d.djMin??0}–${d.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#FEE7B4",icon:"bi-snow",val:qe(e.id,"hfroid",a.hfroid||n),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${d.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:qe(e.id,"humec",a.humec||n),show:t.has("humectation")},{id:"enso",label:"Ensoleillement",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:qe(e.id,"enso",a.enso||n),show:!0}].filter(l=>l.show),r=u.filter(l=>!s.has(l.id)),c=u.filter(l=>s.has(l.id)),f=c.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${c.map(l=>`
          <button class="m-pcumul-add" data-cid="${l.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${l.icon}" style="color:${l.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${l.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",E=r.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${r.map(l=>{const p=a[l.id]||n;return`<div class="m-cumuls-saved-card" style="position:relative">
          <button class="m-pcumul-del" data-cid="${l.id}" data-pid="${e.id}" type="button" style="position:absolute;top:8px;right:8px;border:none;background:rgba(0,0,0,.08);border-radius:50%;width:22px;height:22px;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#636366">×</button>
          <div class="m-cumuls-saved-row1" style="padding-right:32px">
            <span class="m-cumuls-saved-metric"><i class="bi ${l.icon}" style="color:${l.color}"></i> ${l.label}</span>
            <span class="m-cumuls-saved-val" style="color:${l.color}">${l.val}<span class="m-cumuls-saved-unit"> ${l.unit}</span></span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:4px;flex-wrap:wrap">
            <span style="font-size:12px;color:#8e8e93">Depuis le</span>
            <input type="date" class="m-pcumul-date" data-cid="${l.id}" data-pid="${e.id}" value="${p}" style="border: 1px solid #CCC;background: transparent;font-size: 12px;color: #8e8e93;cursor: pointer;font-family: inherit;padding: 4px;border-radius: 5px;">
            ${l.cfg?`<button class="m-pcumul-cfg" data-cid="${l.id}" data-pid="${e.id}" style="border: 1px solid #CCC;background: transparent;font-size: 11px;color: #8e8e93;cursor: pointer;font-family: inherit;padding: 5px;border-radius: 5px;"><i class="bi bi-gear"></i> ${l.cfgLabel}</button>`:""}
          </div>
        </div>`}).join("")}${f}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${f}`;return zt("Cumuls","bi-bar-chart-fill","#0172A4",E,"cumuls")}function sn(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],n=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],o=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],s=new Date,a=ne.find(p=>p.id===(e==null?void 0:e.orgId)),d=(e==null?void 0:e.ville)||(a==null?void 0:a.ville)||"—",u=(e==null?void 0:e.id)||1,r=(p,m)=>Math.floor(Math.random()*(m-p+1))+p,c=(p,m)=>{const g=new Date(s);g.setDate(g.getDate()+p);const w=Math.floor((u*7+p*3)%11/2.2);return{lbl:p===0?"Auj.":i[g.getDay()],date:`${g.getDate()} ${t[g.getMonth()]}`,tmax:r(17+m,34+m),tmin:r(4+m,15+m),pluie:w>=3?r(2,18):0,vent:r(10,35),wi:w}},f=[0,1,2].map(p=>c(p,0)).concat([3,4].map(p=>c(p,-1))),E=p=>`
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${p.lbl}</div>
      <div class="m-wprev5-date">${p.date}</div>
      <i class="bi ${n[p.wi]} m-wprev5-icon" title="${o[p.wi]}"></i>
      <div class="m-wprev5-rain${p.pluie===0?" m-wprev5-rain--none":""}">${p.pluie>0?p.pluie+" mm":"—"}</div>
      <div class="m-wprev5-tmax">${p.tmax}°</div>
      <div class="m-wprev5-tmin">${p.tmin}°</div>
      <div class="m-wprev5-wind">${p.vent} <span>km/h</span></div>
    </div>`,l=`
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${d}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${f.map(E).join("")}</div>`;return zt("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",l,"previsions-5j")}function nn(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},n={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermo-hygro",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},o={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},s={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(a=>{const d=t[a.model]||"bi-broadcast",u=n[a.model]||a.model,r=o[a.model]||"#0172A4",c=s[a.model]||[],f=Oe[c[0]],E=c[0],l=`
      <div style="margin-bottom:6px">
        ${f?zi(E,r,!1,"1d"):'<div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--txt3);font-size:12px">Données indisponibles</div>'}
      </div>
      <div class="m-wsensor-vals">
        ${c.slice(0,3).map(p=>{const m=Oe[p];if(!m)return"";const w=rt(p,1)[0],y=w<10?w.toFixed(1):Math.round(w);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${m.label}</span>
            <span class="m-wsensor-value" style="color:${m.color}">${y} ${m.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer" style="display:flex;align-items:center;justify-content:space-between">
        <span>${a.serial}</span>
        <button class="m-wsensor-voir-donnees" data-sensor-id="${a.id}" data-metric-id="${E}" style="border:none;background:none;color:#007AFF;font-size:12px;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;gap:3px">Voir les données <i class="bi bi-arrow-right-short"></i></button>
      </div>`;return zt(u,d,r,l,i)}).join("")}function an(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function ln(e,i,t){const n=new Set;i.forEach(l=>{const p=G.find(m=>m.id===l);p&&(Pt[p.model]||[]).forEach(m=>n.add(m))});const o=[...new Set(["etp","rayonnement","temp_rosee",...n])].filter(l=>Oe[l]),s=Dt[t]||60,a=Ht[t]||10080,d=a/s*6e4,u=new Date,r=new Date(u-a*6e4),c=["Horodatage",...o.map(l=>`${Oe[l].label} (${Oe[l].unit})`)].join(";"),f=Array.from({length:s},(l,p)=>[new Date(r.getTime()+p*d).toISOString().replace("T"," ").slice(0,19),...o.map(g=>rt(g,1)[0].toFixed(2))].join(";")),E=(e.name||"parcelle").replace(/[^\w]/g,"_");an([c,...f].join(`\r
`),`${E}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function on(e,i="7d",t="1h"){const n=new Set,o={};e.forEach(u=>{const r=G.find(c=>c.id===u);r&&(Pt[r.model]||[]).forEach(c=>{n.add(c),o[c]||(o[c]=u)})});const s=[...new Set(["etp","rayonnement","temp_rosee",...n])],a=new Date().toISOString().slice(0,10),d=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
    <div class="m-period-bar" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:8px">
        <select class="m-period-sel" style="flex:1;min-width:0">
          <option value="365d"${i==="365d"?" selected":""}>365 jours</option>
          <option value="30d"${i==="30d"?" selected":""}>30 jours</option>
          <option value="7d"${i==="7d"?" selected":""}>7 jours</option>
          <option value="hier"${i==="hier"?" selected":""}>Hier</option>
          <option value="1d"${i==="1d"?" selected":""}>Aujourd'hui</option>
          <option value="custom"${i==="custom"?" selected":""}>Personnalisé</option>
        </select>
        <select class="m-step-sel" style="flex:1;min-width:0">
          <option value="1h"${t==="1h"?" selected":""}>Horaire</option>
          <option value="1d"${t==="1d"?" selected":""}>Journalier</option>
          <option value="1w"${t==="1w"?" selected":""}>Hebdo</option>
        </select>
      </div>
      ${i==="custom"?`
      <div style="display:flex;gap:8px;margin-top:8px;align-items:center">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">Du</label>
        <input type="date" class="m-custom-from" value="${d}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to" value="${a}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
      </div>`:""}
    </div>
    <div class="m-detail-section">
      ${s.map(u=>Zs(u,i,o[u]??null)).join("")}
    </div>`}function rn(e,i,t){const n=t.map(u=>G.find(r=>r.id===u)).filter(Boolean),o=n.map(u=>`${u.model} — ${u.serial}`),s=n.some(u=>u.model==="P+"||u.model==="PT"),a=n.some(u=>u.model==="P");return`
    <div class="m-detail-section">
      ${s&&a?`
        <div class="m-conflict-banner">
          <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;flex-shrink:0"></i>
          <span>Ce capteur pluviomètre (P) est redondant avec la station météo (P+) déjà liée. Les données pluie peuvent se cumuler en double dans les bilans. Envisagez de délier l'un des deux.</span>
        </div>`:""}
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${e.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-exploitation">
          <span class="m-list-row-label">Exploitation</span>
          <span class="m-list-row-value">${(i==null?void 0:i.name)||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-crop">
          <span class="m-list-row-label">Culture</span>
          <span class="m-list-row-value">${e.crop||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-variety">
          <span class="m-list-row-label">Variété</span>
          <span class="m-list-row-value">—</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-stade">
          <span class="m-list-row-label">Stade phénologique</span>
          <span class="m-list-row-value">—</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation</div>
      <div class="m-list">
        <div id="parcel-minimap" class="m-minimap-container"></div>
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${(i==null?void 0:i.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${e.lat},${e.lng}?q=${e.lat},${e.lng}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">Configuration</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-env">
          <span class="m-list-row-label">Environnement</span>
          <span class="m-list-row-value">${e.env||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-irrigation">
          <span class="m-list-row-label">Irrigation</span>
          <span class="m-list-row-value">${e.irrigation||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${e.substrate?"Substrat : "+e.substrate:e.texture||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${o.length?o.map((u,r)=>`<div class="m-list-row${r===o.length-1?" m-list-row--last":""}">
              <span class="m-list-row-label">${u}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun capteur lié</span></div>'}
        <div class="m-list-row m-list-row--last" data-action="add-sensor" style="color:#007aff">
          <i class="bi bi-plus-circle" style="font-size:15px"></i>
          <span class="m-list-row-label" style="color:#007aff">Ajouter un capteur</span>
        </div>
      </div>

      <div class="m-list-section-header">Alertes & Intégrations</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-integrations">
          <span class="m-list-row-label">Intégrations</span>
          <span class="m-list-row-value">${(e.integrations||[]).length||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-alertes">
          <span class="m-list-row-label">Alertes</span>
          <span class="m-list-row-value">—</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Gestion</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Date de création</span>
          <span class="m-list-row-value">01/01/2024</span>
        </div>
        <div class="m-list-row m-list-row--last" data-action="archive" style="color:#ff9f0a">
          <i class="bi bi-archive" style="font-size:15px;color:#ff9f0a"></i>
          <span class="m-list-row-label" style="color:#ff9f0a">Archiver la parcelle</span>
        </div>
      </div>
      <div style="height:24px"></div>
    </div>`}function At(e,i=[],t="widgets",n="Parcelles"){let o=ne.find(m=>m.id===e.orgId),s=t,a="7d",d="1h",u=!1;const r=(o==null?void 0:o.ville)||"",c=re(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${n}</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.name}</div>
          ${e.crop||r?`<div class="m-detail-subtitle">${[r,e.crop].filter(Boolean).join(" · ")}</div>`:""}
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${t==="widgets"?"active":""}" data-view="widgets">Widgets</button>
      <button class="m-detail-tab ${t==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${t==="params"?"active":""}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function f(){const m=ne.filter(v=>v.id!==100&&v.statut!=="inactif"),g=document.createElement("div"),w=()=>{g.innerHTML=m.map(v=>`
        <div class="m-sheet-option${v.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${v.id}">
          <span>${v.name}</span>
          ${v.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),g.querySelectorAll("[data-pick-org]").forEach(v=>{v.addEventListener("click",()=>{const L=+v.dataset.pickOrg;L!==e.orgId&&(e.orgId=L,o=ne.find(A=>A.id===L),E(),V("Exploitation mise à jour")),y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>y.remove(),280)})})},y=oe({title:"Exploitation",body:g,doneLabel:"Fermer",onDone:()=>{}});w()}function E(){const m=c.querySelector("#detail-content");s==="widgets"&&(m.innerHTML=Qs(e,i)),s==="donnees"&&(m.innerHTML=on(i,a,d)),s==="params"&&(m.innerHTML=rn(e,o,i),l()),p()}function l(){const m=window.L;m&&setTimeout(()=>{var y;const g=c.querySelector("#parcel-minimap");if(!g)return;const w=m.map(g,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(m.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(w),((y=e.latlngs)==null?void 0:y.length)>=3){const v=m.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(w);w.fitBounds(v.getBounds(),{padding:[8,8]})}else w.setView([e.lat,e.lng],14),m.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(w)},50)}function p(){var m,g,w,y;(m=c.querySelector(".m-period-sel"))==null||m.addEventListener("change",v=>{a=v.target.value,E()}),(g=c.querySelector(".m-step-sel"))==null||g.addEventListener("change",v=>{d=v.target.value,E()}),(w=c.querySelector(".m-export-btn"))==null||w.addEventListener("click",()=>ln(e,i,a)),c.querySelectorAll(".m-chart-svg-wrap").forEach(v=>Ks(v)),c.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(v=>{v.addEventListener("click",()=>{const L=+v.dataset.sensorId,A=G.find(x=>x.id===L);A&&me(()=>import("./chart-fullscreen-RmWGEL7x.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(x=>x.initChartFullscreen({sensor:A,linkedSensorIds:i,metricId:v.dataset.metricId||null,backLabel:e.name}))})}),c.querySelectorAll(".m-chart-expand-btn[data-sensor-id]").forEach(v=>{v.addEventListener("click",()=>{const L=+v.dataset.sensorId,A=G.find(x=>x.id===L);A&&me(()=>import("./chart-fullscreen-RmWGEL7x.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(x=>x.initChartFullscreen({sensor:A,linkedSensorIds:i,metricId:v.dataset.metricId||null,backLabel:e.name}))})}),c.querySelectorAll(".m-list-row[data-action]").forEach(v=>{v.addEventListener("click",()=>{v.dataset.action==="edit-exploitation"?f():V("Fonctionnalité à venir")})}),c.querySelectorAll(".m-widget-menu").forEach(v=>{v.addEventListener("click",L=>{var S;L.stopPropagation();const A=v.dataset.wid;if(!A)return;(S=c.querySelector(".m-widget-dd"))==null||S.remove();const x=document.createElement("div");x.className="m-widget-dd",x.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:180px",x.innerHTML=`<button class="m-widget-dd-remove" data-wid="${A}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const C=c.querySelector(".m-detail-content"),k=v.getBoundingClientRect(),h=C.getBoundingClientRect();x.style.top=`${k.bottom-h.top+C.scrollTop+4}px`,x.style.right=`${h.right-k.right}px`,C.style.position="relative",C.appendChild(x),x.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{x.remove();const b=at(e,i).filter($=>$!==A);Hi(e.id,b),E()}),setTimeout(()=>document.addEventListener("click",()=>x.remove(),{once:!0}),0)})}),(y=c.querySelector(".m-add-widget-btn"))==null||y.addEventListener("click",()=>Gs(e,i,E)),c.querySelectorAll(".m-pcumul-del").forEach(v=>{v.addEventListener("click",L=>{L.stopPropagation();const A=+v.dataset.pid,x=Fe(A),C=new Set(x.hidden||[]);C.add(v.dataset.cid),et(A,{hidden:[...C]}),E()})}),c.querySelectorAll(".m-pcumul-date").forEach(v=>{v.addEventListener("change",()=>{const L=+v.dataset.pid,A=v.dataset.cid,x=v.value;if(!x||(Date.now()-new Date(x))/864e5>365)return;const h=Fe(L).dates||{};h[A]=x,et(L,{dates:h});const S=v.closest(".m-cumuls-saved-card"),b=S==null?void 0:S.querySelector(".m-cumuls-saved-val");if(b){const $=S.querySelector(".m-cumuls-saved-unit"),M=($==null?void 0:$.textContent.trim())||"",T=qe(L,A,x);b.innerHTML=`${T}<span class="m-cumuls-saved-unit"> ${M}</span>`}})}),c.querySelectorAll(".m-pcumul-cfg").forEach(v=>{v.addEventListener("click",L=>{var b;L.stopPropagation();const A=+v.dataset.pid,x=v.dataset.cid,k={...Fe(A).cfg},h=en[x];if(!h)return;(b=c.querySelector(".m-pcumul-cfg-panel"))==null||b.remove();const S=document.createElement("div");S.className="m-pcumul-cfg-panel",S.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",S.innerHTML=h.map($=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${$.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${$.key}" value="${k[$.key]??$.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',v.closest(".m-cumuls-saved-card").after(S),S.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{S.querySelectorAll(".m-pcumul-cfg-inp").forEach($=>{k[$.dataset.key]=parseFloat($.value)||0}),et(A,{cfg:k}),S.remove(),E()})})}),c.querySelectorAll(".m-pcumul-add").forEach(v=>{v.addEventListener("click",L=>{L.stopPropagation();const A=+v.dataset.pid,x=v.dataset.cid,C=Fe(A),k=new Set(C.hidden||[]);k.delete(x),et(A,{hidden:[...k]}),E()})})}c.querySelectorAll(".m-detail-tab").forEach(m=>{m.addEventListener("click",()=>{c.querySelectorAll(".m-detail-tab").forEach(g=>g.classList.remove("active")),m.classList.add("active"),s=m.dataset.view,E()})}),c.querySelector(".m-detail-back").addEventListener("click",ie),c.querySelector("#d-star").addEventListener("click",()=>{u=!u;const m=c.querySelector("#d-star");m.querySelector("i").className=u?"bi bi-star-fill":"bi bi-star",m.style.color=u?"#f5c842":"",V(u?"Ajouté aux favoris":"Retiré des favoris")}),c.querySelector("#d-plus").addEventListener("click",()=>{var m;(m=window.showMobileAddPage)==null||m.call(window)}),c.querySelector("#d-journal").addEventListener("click",()=>dn(e)),E()}const Bi=e=>`parcel-journal-${e}`;function Mt(e){try{const i=localStorage.getItem(Bi(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"note",category:"Observation générale",date:"2026-05-11",auteur:"Jean Dupont",texte:"Quelques pucerons sur feuilles basses. À surveiller."},{id:2,type:"traitement",date:"2026-05-16",auteur:"Sophie Martin",texte:"Vent < 2 m/s, conditions conformes.",produit:"Karate Zeon",dose:"0,1 L/ha",cible:"Pucerons"}]}function Fi(e,i){localStorage.setItem(Bi(e),JSON.stringify(i))}function dn(e){const i=ne.find(s=>s.id===e.orgId),t=(i==null?void 0:i.ville)||"",n=re(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Parcelle</span></button>
        <span style="font-size:15px;font-weight:600;color:var(--txt3)">Journal</span>
        <div style="width:44px"></div>
      </div>
      <div class="m-detail-identity" style="pointer-events:none">
        <div style="width:38px"></div>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.name}</div>
          ${e.crop||t?`<div class="m-detail-subtitle">${[t,e.crop].filter(Boolean).join(" · ")}</div>`:""}
        </div>
        <div style="width:38px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);n.querySelector(".m-detail-back").addEventListener("click",ie);function o(){var f,E;const s=n.querySelector("#mjrn-content"),a=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(l=>l.linkedType==="parcel"&&l.linkedId===e.id).map((l,p)=>({id:`dash-${p}`,type:"note",date:l.date,texte:l.text,auteur:l.auteur,_fromDashboard:!0})),d=[...Mt(e.id),...a].sort((l,p)=>p.date.localeCompare(l.date)),u=l=>{const[p,m,g]=l.split("-");return`${g}/${m}/${p}`},r={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"}};let c=`
      <div style="padding:12px 16px 4px;display:flex;gap:8px">
        <button class="btn-secondary btn-sm" id="mjrn-add-note" style="gap:6px;flex:1;justify-content:center">
          <i class="bi bi-pencil-square"></i> Note
        </button>
        <button class="btn-secondary btn-sm" id="mjrn-add-trait" style="gap:6px;flex:1;justify-content:center">
          <i class="bi bi-eyedropper"></i> Traitement
        </button>
      </div>
    `;d.length===0?c+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(c+='<div class="m-jrn-timeline">',d.forEach((l,p)=>{const m=r[l.type]||r.note,g=l.type==="traitement",w=p===d.length-1,y=!!l._fromDashboard;c+=`
          <div class="m-jrn-entry" data-id="${l.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${m.dotBg};color:${m.dotColor};border-color:${m.dotColor}40">
                <i class="bi ${m.icon}"></i>
              </div>
              ${w?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${u(l.date)}</span>
                <span class="journal-type-badge journal-type-badge--${m.badgeCls}">${m.label}</span>
                ${y?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${l.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${l.texte?`<div class="m-jrn-texte">${l.texte}</div>`:""}
              ${l.auteur&&y?`<div style="font-size:11px;color:#8e8e93;margin-top:2px">${l.auteur}</div>`:""}
              ${g&&(l.produit||l.dose||l.cible)?`
                <div class="m-jrn-meta">
                  ${l.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${l.produit}</span>`:""}
                  ${l.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${l.dose}</span>`:""}
                  ${l.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${l.cible}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),c+="</div>"),s.innerHTML=c,(f=s.querySelector("#mjrn-add-note"))==null||f.addEventListener("click",()=>mi("note",e.id,o)),(E=s.querySelector("#mjrn-add-trait"))==null||E.addEventListener("click",()=>mi("traitement",e.id,o)),s.querySelectorAll(".m-jrn-del").forEach(l=>{l.addEventListener("click",()=>{const p=parseInt(l.dataset.id);Fi(e.id,Mt(e.id).filter(m=>m.id!==p)),o()})})}o()}function mi(e,i,t){const n=e==="traitement",o=new Date().toISOString().slice(0,10),s=document.createElement("div");s.className="modal add-modal",s.innerHTML=`
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">${n?"Ajouter un traitement":"Ajouter une note"}</span>
        <button class="add-modal-close">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="mjf-date" class="journal-form-input" value="${o}">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">${n?"Observations":"Texte"}</label>
          <textarea id="mjf-texte" class="journal-form-textarea" placeholder="${n?"Conditions météo…":"Votre note…"}"></textarea>
        </div>
        ${n?`
        <div class="journal-form-row">
          <label class="journal-form-label">Produit</label>
          <input type="text" id="mjf-produit" class="journal-form-input" placeholder="Ex : Bordeaux mixture">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Dose</label>
          <input type="text" id="mjf-dose" class="journal-form-input" placeholder="Ex : 2 kg/ha">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Cible</label>
          <input type="text" id="mjf-cible" class="journal-form-input" placeholder="Ex : Mildiou">
        </div>`:""}
        <button class="btn-primary btn-sm" id="mjf-save" style="width:100%;justify-content:center;margin-top:4px">Enregistrer</button>
      </div>
    </div>`,s.querySelector(".add-modal-close").addEventListener("click",()=>s.remove()),s.addEventListener("click",a=>{a.target===s&&s.remove()}),s.querySelector("#mjf-save").addEventListener("click",()=>{const a=s.querySelector("#mjf-date").value||o,d=s.querySelector("#mjf-texte").value.trim(),u={id:Date.now(),type:e,date:a,texte:d,auteur:"Jean Dupont"};n&&(u.produit=s.querySelector("#mjf-produit").value.trim(),u.dose=s.querySelector("#mjf-dose").value.trim(),u.cible=s.querySelector("#mjf-cible").value.trim()),!(!d&&!u.produit)&&(Fi(i,[u,...Mt(i)]),s.remove(),t())}),document.body.appendChild(s)}const gt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:At},Symbol.toStringTag,{value:"Module"})),Ve=100,cn={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function We(e,i){const t=cn[i];return t?G.some(n=>n.parcelIds.includes(e.id)&&t.includes(n.model)):!0}const tt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température air",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function un(e){switch(e){case"irrigation":return Math.round(Math.random()>.4?Math.random()*45:0);case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function pn(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const n=i==="admin",o=ne.filter(y=>y.id!==Ve);Object.fromEntries(ne.map(y=>[y.id,y]));let s=null,a=null;const d={};let u="carte",r="pluie",c="7 derniers jours",f="all";function E(y){const v=`${y}-${r}-${c}`;return v in d||(d[v]=un(r)),d[v]}function l(){return n?f==="all"?W:f===String(Ve)?W.filter(y=>y.orgId===Ve):W.filter(y=>String(y.orgId)===f):W.filter(y=>y.orgId===1)}function p(){if(s){try{s.remove()}catch{}s=null,a=null}}function m(){p();const y=tt.find(C=>C.id===r)||tt[0],v=l(),L=n?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${Ve}"${f===String(Ve)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${o.map(C=>`<option value="${C.id}"${f===String(C.id)?" selected":""}>${C.name}</option>`).join("")}
      </select>`:"",A=[...v].sort((C,k)=>{const h=We(C,r),S=We(k,r);return h&&!S?-1:!h&&S?1:h?E(k.id)-E(C.id):0}),x=A.length?`<div class="m-plain-list">${A.map(C=>{const k=[C.crop,C.irrigation].filter(Boolean).join(" · "),h=We(C,r);return`
            <div class="m-plain-row m-tappable" data-plot-id="${C.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${C.name}</span>
                ${k?`<span class="m-plain-city">${k}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${h?"":" m-plain-na"}">${h?`${E(C.id)} ${y.unit}`:"—"}</span>
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';t.innerHTML=`
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${u==="carte"?" m-view-btn--on":""}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${u==="liste"?" m-view-btn--on":""}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${tt.map(C=>`<option value="${C.id}"${C.id===r?" selected":""}>${C.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${y.aggs.map(C=>`<option${C===c?" selected":""}>${C}</option>`).join("")}
          </select>
        </div>
        ${L}
      </div>
      ${u==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${x}</div>`}`,w(),u==="carte"&&g(v,y)}function g(y,v){const L=window.L;L&&setTimeout(()=>{const A=t.querySelector("#parcel-map");if(!A)return;s=L.map(A,{zoomControl:!1,attributionControl:!1}),L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(s);const x=[];y.forEach(C=>{const k=We(C,r)?`${E(C.id)} ${v.unit}`:"—",h=G.filter(T=>T.parcelIds.includes(C.id)).map(T=>T.id),S=()=>At(C,h),b=[C.lat,C.lng];C.latlngs&&C.latlngs.length>=3?(L.polygon(C.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(s).on("click",S),x.push(...C.latlngs)):x.push(b);const $=We(C,r),M=L.circleMarker(b,{radius:$?8:6,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:$?.95:.4}).addTo(s);$&&M.bindTooltip(k,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),M.on("click",S)}),x.length&&(a=x,s.fitBounds(x,{padding:[32,32]})),s.invalidateSize()},0)}window.addEventListener("m-tab-change",y=>{y.detail==="parcelles"&&u==="carte"&&s&&setTimeout(()=>{s.invalidateSize(),a!=null&&a.length&&s.fitBounds(a,{padding:[32,32]})},50)});function w(){var y,v,L;t.querySelectorAll(".m-view-btn").forEach(A=>A.addEventListener("click",()=>{u=A.dataset.view,m()})),(y=t.querySelector("#metric-sel"))==null||y.addEventListener("change",A=>{var x;r=A.target.value,c=((x=tt.find(C=>C.id===r))==null?void 0:x.defaultAgg)||"",m()}),(v=t.querySelector("#agg-sel"))==null||v.addEventListener("change",A=>{c=A.target.value,m()}),(L=t.querySelector("#org-filter"))==null||L.addEventListener("change",A=>{f=A.target.value,m()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(A=>{A.addEventListener("click",()=>{const x=W.find(k=>k.id===+A.dataset.plotId);if(!x)return;const C=G.filter(k=>k.parcelIds.includes(x.id)).map(k=>k.id);At(x,C)})})}m()}const Tt={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},mn={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"},Ye={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function Oi(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(n,o)=>{const s=o/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const a=t.base+t.amp*Math.sin(s-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,a))})}const Ri={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function vn(e,i,t,n,o,s=20){const a=Ri[e]||10080,d=new Date,u=E=>e==="1d"||e==="hier"?`${String(E.getHours()).padStart(2,"0")}h`:e==="365d"?E.toLocaleDateString("fr-FR",{month:"short"}):`${String(E.getDate()).padStart(2,"0")}/${String(E.getMonth()+1).padStart(2,"0")}`,r=4,c=i-t-n,f=o-s;return Array.from({length:r+1},(E,l)=>{const p=l/r,m=new Date(d.getTime()-(1-p)*a*6e4),g=(t+p*c).toFixed(1),w=l===0?"start":l===r?"end":"middle";return[`<line x1="${g}" y1="${f}" x2="${g}" y2="${f+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${g}" y="${o-3}" text-anchor="${w}" font-size="9" fill="#8e8e93" font-family="-apple-system">${u(m)}</text>`].join("")}).join("")}function fn(e,i,t,n="7d"){const o=Ni[n]||60,s=Oi(e,o),a=320,d=100,u=34,r=6,c=10,f=20,E=a-u-r,l=d-c-f,p=t?0:Math.min(...s),m=Math.max(...s,p+.001),g=m-p,w=$=>u+$/(s.length-1)*E,y=$=>c+l-($-p)/g*l,v=`g${Math.random().toString(36).slice(2,8)}`,L=[0,.5,1].map($=>{const M=p+$*g,T=c+l-$*l;return`<text x="${u-3}" y="${(T+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${M<10?M.toFixed(1):Math.round(M)}</text>`}).join(""),A=[.25,.5,.75].map($=>`<line x1="${u}" y1="${(c+l-$*l).toFixed(1)}" x2="${a-r}" y2="${(c+l-$*l).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),x=`<line x1="${u}" y1="${c+l}" x2="${a-r}" y2="${c+l}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,C=vn(n,a,u,r,d);if(t){const $=E/s.length*.7;return`<svg viewBox="0 0 ${a} ${d}" width="100%" height="${d}" preserveAspectRatio="none">
      ${L}${A}${x}
      ${s.map((M,T)=>{const H=(M-p)/g*l,z=c+l-H;return`<rect x="${(w(T)-$/2).toFixed(1)}" y="${z.toFixed(1)}" width="${$.toFixed(1)}" height="${H.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${C}
    </svg>`}const h=s.map(($,M)=>[w(M),y($)]).map(([$,M],T)=>`${T?"L":"M"}${$.toFixed(1)},${M.toFixed(1)}`).join(" "),S=`${h} L${w(s.length-1).toFixed(1)},${(c+l).toFixed(1)} L${u},${(c+l).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map($=>+$.toFixed(2)),minV:+p.toFixed(2),maxV:+m.toFixed(2)}))}" data-color="${i}" style="position:relative">
    <svg viewBox="0 0 ${a} ${d}" width="100%" height="${d}" preserveAspectRatio="none">
      <defs><linearGradient id="${v}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${L}${A}${x}
      <path d="${S}" fill="url(#${v})"/>
      <path d="${h}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${C}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function hn(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,n=e.querySelector(".m-chart-tip"),o=e.querySelector(".m-chart-crosshair"),s=e.dataset.color||"#0172A4";function a(u){const r=e.getBoundingClientRect(),c=Math.max(0,Math.min(1,(u-r.left)/r.width)),f=Math.round(c*(t.length-1)),E=t[f],l=c*100;o.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${l}%;width:1px;background:${s};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(l,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=E<10?E.toFixed(1):String(Math.round(E))}function d(){o.style.display="none",n.style.display="none"}e.addEventListener("pointermove",u=>{u.preventDefault(),a(u.clientX)}),e.addEventListener("pointerdown",u=>a(u.clientX)),e.addEventListener("pointerup",d),e.addEventListener("pointerleave",d),e.style.cursor="crosshair"}const Ni={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function bn(e,i,t){if(!t)return"";const n=Ni[i]||60,s=(Ri[i]||10080)/(n*60),a=Oi(e,n);let d=[];if(t==="temp"){const u=a.reduce((c,f)=>c+Math.max(0,f),0)*(s/24),r=a.filter(c=>c<7).length*s;d=[{label:"Degrés jours",val:`${Math.round(u)} DJ`},{label:"Heures de froid",val:`${Math.round(r)} h`}]}else if(t==="pluie")d=[{label:"Cumul pluie",val:`${a.reduce((r,c)=>r+c,0).toFixed(1)} mm`}];else if(t==="rayo"){const u=a.filter(r=>r>120).length*s;d=[{label:"Ensoleillement",val:`${Math.round(u)} h`}]}else if(t==="hws"){const u=a.filter(r=>r>50).length*s;d=[{label:"Heures d'humectation",val:`${Math.round(u)} h`}]}return d.length?`<div class="m-chart-cumuls">${d.map(u=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${u.label}</span>
      <span class="m-chart-cumul-val">${u.val}</span>
    </div>`).join("")}</div>`:""}function gn(e,i="7d",t="1h"){const n=Ye[e.model]||[];if(!n.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const o={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},s=n.map(u=>{const r=o[u.id]||u.id;return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${u.color}">${u.label}</span>
          <button class="m-chart-expand-btn" data-metric-id="${r}" style="border:none;background:none;color:#007AFF;font-size:11px;padding:2px 4px;cursor:pointer;display:flex;align-items:center;margin-left:auto"><i class="bi bi-fullscreen"></i></button>
        </div>
        ${fn(u.id,u.color,u.cumul,i)}
        ${bn(u.id,i,u.cumulsType)}
      </div>`}).join(""),a=new Date().toISOString().slice(0,10),d=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
    <div class="m-period-bar" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:8px">
        <select class="m-period-sel" style="flex:1;min-width:0">
          <option value="365d"${i==="365d"?" selected":""}>365 jours</option>
          <option value="30d"${i==="30d"?" selected":""}>30 jours</option>
          <option value="7d"${i==="7d"?" selected":""}>7 jours</option>
          <option value="hier"${i==="hier"?" selected":""}>Hier</option>
          <option value="1d"${i==="1d"?" selected":""}>Aujourd'hui</option>
          <option value="custom"${i==="custom"?" selected":""}>Personnalisé</option>
        </select>
        <select class="m-step-sel" style="flex:1;min-width:0">
          <option value="1h"${t==="1h"?" selected":""}>Horaire</option>
          <option value="1d"${t==="1d"?" selected":""}>Journalier</option>
          <option value="1w"${t==="1w"?" selected":""}>Hebdo</option>
        </select>
      </div>
      ${i==="custom"?`
      <div style="display:flex;gap:8px;margin-top:8px;align-items:center">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">Du</label>
        <input type="date" class="m-custom-from" value="${d}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to" value="${a}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
      </div>`:""}
    </div>
    <div class="m-detail-section">${s}</div>`}function yn(e){var u;const i=(e.parcelIds||[]).map(r=>W.find(c=>c.id===r)).filter(Boolean),t=i[0]||null,n=t?ne.find(r=>r.id===t.orgId):null,o=e.networkQuality||0,s=o>70?"#30d158":o>40?"#ff9f0a":"#ff3b30",a=e.event?Array.isArray(e.event)?e.event:[e.event]:[],d=i.map((r,c)=>`<div class="m-list-row${c===i.length-1&&i.length>0,""}" data-unlink-plot="${r.id}">
      <span class="m-list-row-label">${r.name}</span>
      ${r.crop?`<span class="m-list-row-value">${r.crop}</span>`:""}
      <button data-unlink-plot-btn="${r.id}" style="background:none;border:none;padding:4px 6px;cursor:pointer;color:#ff3b30;font-size:13px;line-height:1;flex-shrink:0" title="Délier">
        <i class="bi bi-x-circle"></i>
      </button>
    </div>`).join("");return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Nom du capteur</span>
          <input type="text" id="sensor-name-input" class="m-inline-input" placeholder="${e.serial}"
            value="${((u=(()=>{try{return JSON.parse(localStorage.getItem("weenat-sensor-names"))||{}}catch{return{}}})())==null?void 0:u[e.id])||""}"
            style="flex:1;min-width:0;margin-left:10px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 10px;font-size:14px;font-family:inherit;color:#1c1c1e;background:#f5f5f7;outline:none;user-select:text;-webkit-user-select:text">
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${mn[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${Tt[e.model]||e.model}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">N° de série</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:13px">${e.serial}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Réseau télécom</span>
          <span class="m-list-row-value">${e.telecom||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Exploitation</span>
          <span class="m-list-row-value">${(n==null?void 0:n.name)||"—"}</span>
        </div>
      </div>

      <div class="m-list-section-header">Géolocalisation</div>
      <div class="m-list">
        ${t?'<div id="sensor-minimap" class="m-minimap-container"></div>':""}
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${(n==null?void 0:n.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${(t==null?void 0:t.lat)||0},${(t==null?void 0:t.lng)||0}?q=${(t==null?void 0:t.lat)||0},${(t==null?void 0:t.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">Anomalies</div>
      <div class="m-list">
        ${a.length?a.map(r=>`<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${r}</span></div>`).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${s};font-weight:600">${o}%</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Émissions (moy. 7 j)</span>
          <span class="m-list-row-value">${e.messages7d??"—"} msg</span>
        </div>
      </div>

      <div class="m-list-section-header">Maintenance</div>
      <div class="m-list">
        <div class="m-list-row m-list-row--last" data-action="add-maintenance" style="color:#007aff">
          <i class="bi bi-plus-circle" style="font-size:15px"></i>
          <span class="m-list-row-label" style="color:#007aff">Ajouter une opération</span>
        </div>
      </div>

      <div class="m-list-section-header">Parcelles liées</div>
      <div class="m-list" id="linked-plots-list">
        ${d}
        <div class="m-list-row m-list-row--last" data-action="add-plot" style="color:#007aff">
          <i class="bi bi-plus-circle" style="font-size:15px"></i>
          <span class="m-list-row-label" style="color:#007aff">Lier une parcelle</span>
        </div>
      </div>

      <div class="m-list-section-header">Gestion</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'ajout</span>
          <span class="m-list-row-value">${e.lastMessage?new Date(e.lastMessage).toLocaleDateString("fr-FR"):"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last" data-action="delete" style="color:#ff3b30">
          <i class="bi bi-trash" style="color:#ff3b30;font-size:15px"></i>
          <span class="m-list-row-label" style="color:#ff3b30">Supprimer de l'exploitation</span>
        </div>
      </div>
      <div style="height:24px"></div>
    </div>`}function It(e,i="donnees",t="admin"){var l;e.parcelIds||(e.parcelIds=[]);const n=e.parcelIds.length?W.find(p=>e.parcelIds.includes(p.id)):null;let o=i,s="7d",a="1h",d=!1;const u=n&&((l=ne.find(p=>p.id===n.orgId))==null?void 0:l.ville)||"",r=re(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${[Tt[e.model]?`${Tt[e.model]} · ${e.model}`:e.model,u].filter(Boolean).join(" · ")}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function c(){const p=r.querySelector("#detail-content");o==="donnees"&&(p.innerHTML=gn(e,s,a)),o==="params"&&(p.innerHTML=yn(e),f()),E()}function f(){const p=window.L,m=e.parcelIds.length?W.find(g=>e.parcelIds.includes(g.id)):null;!p||!m||setTimeout(()=>{const g=r.querySelector("#sensor-minimap");if(!g)return;const w=p.map(g,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});p.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(w),w.setView([m.lat,m.lng],15),p.circleMarker([m.lat,m.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(w)},50)}function E(){var p,m,g;(p=r.querySelector(".m-period-sel"))==null||p.addEventListener("change",w=>{s=w.target.value,c()}),(m=r.querySelector(".m-step-sel"))==null||m.addEventListener("change",w=>{a=w.target.value,c()}),r.querySelectorAll(".m-chart-svg-wrap").forEach(w=>hn(w)),r.querySelectorAll(".m-chart-expand-btn[data-metric-id]").forEach(w=>{w.addEventListener("click",()=>{me(()=>import("./chart-fullscreen-RmWGEL7x.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(y=>y.initChartFullscreen({sensor:e,metricId:w.dataset.metricId,backLabel:e.serial}))})}),r.querySelectorAll(".m-list-row[data-action]").forEach(w=>{w.addEventListener("click",()=>{const y=w.dataset.action;y==="add-maintenance"?vi(e,{openForm:!0}):y==="add-plot"?xn(e,t,c):V("Fonctionnalité à venir")})}),r.querySelectorAll("[data-unlink-plot-btn]").forEach(w=>{w.addEventListener("click",y=>{y.stopPropagation();const v=+w.dataset.unlinkPlotBtn;e.parcelIds=e.parcelIds.filter(A=>A!==v);const L=W.find(A=>A.id===v);V(`Délié de ${(L==null?void 0:L.name)||"la parcelle"}`),c()})}),(g=r.querySelector("#sensor-name-input"))==null||g.addEventListener("change",w=>{const y=w.target.value.trim();try{const L=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};y?L[e.id]=y:delete L[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(L))}catch{}const v=r.querySelector(".m-detail-title");v&&(v.textContent=y||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))})}r.querySelectorAll(".m-detail-tab").forEach(p=>{p.addEventListener("click",()=>{r.querySelectorAll(".m-detail-tab").forEach(m=>m.classList.remove("active")),p.classList.add("active"),o=p.dataset.view,c()})}),r.querySelector(".m-detail-back").addEventListener("click",ie),r.querySelector("#d-star").addEventListener("click",()=>{d=!d;const p=r.querySelector("#d-star");p.querySelector("i").className=d?"bi bi-star-fill":"bi bi-star",p.style.color=d?"#f5c842":"",V(d?"Ajouté aux favoris":"Retiré des favoris")}),r.querySelector("#d-journal").addEventListener("click",()=>vi(e)),r.querySelector("#d-plus").addEventListener("click",()=>{var p;return(p=window.showMobileAddPage)==null?void 0:p.call(window)}),c()}const Vi=e=>`sensor-journal-${e}`,Wi=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function jt(e){try{const i=localStorage.getItem(Vi(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",texte:""},{id:2,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",texte:""},{id:3,type:"note",date:"2023-11-02",user:"Agriculteur",texte:"Capteur légèrement déplacé — redressé"}]}function Ji(e,i){localStorage.setItem(Vi(e),JSON.stringify(i))}function xn(e,i,t){const n=i==="adherent"?1:null,o=n?W.filter(r=>r.orgId===n):W.filter(r=>r.orgId!==100),s=new Set((Ye[e.model]||[]).map(r=>r.id)),a=document.createElement("div");a.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function d(r=""){const c=r.toLowerCase(),f=c?o.filter(l=>l.name.toLowerCase().includes(c)||(l.crop||"").toLowerCase().includes(c)):o,E=a.querySelector("#plot-list");if(!f.length){E.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}E.innerHTML="",f.forEach((l,p)=>{const m=e.parcelIds.includes(l.id),g=p===f.length-1,w=document.createElement("div");w.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${g?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,w.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${l.name}</span>
          ${l.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${l.crop}</span>`:""}
        </span>
        ${m?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,w.addEventListener("click",()=>{if(m)e.parcelIds=e.parcelIds.filter(y=>y!==l.id),V(`Délié de ${l.name}`),d(r),t();else{const y=G.find(v=>v.id!==e.id&&v.parcelIds.includes(l.id)&&(Ye[v.model]||[]).some(L=>s.has(L.id)));y?(u.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{u.remove(),$n(e,l,y,t)},280)):(e.parcelIds=[...e.parcelIds,l.id],V(`Lié à ${l.name}`),d(r),t())}}),E.appendChild(w)})}d();const u=oe({title:"Parcelles liées",body:a,doneLabel:"Fermer",onDone:()=>{t()}});a.querySelector("#plot-search").addEventListener("input",r=>d(r.target.value))}function $n(e,i,t,n){const o=(Ye[t.model]||[]).filter(d=>(Ye[e.model]||[]).some(u=>u.id===d.id)).map(d=>d.label).join(", "),s=document.createElement("div");s.innerHTML=`
    <div style="display:flex;align-items:flex-start;gap:10px;padding:6px 0 14px;font-size:13px;color:#636366;line-height:1.5">
      <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:17px;flex-shrink:0;margin-top:1px"></i>
      <span>La parcelle <strong style="color:#1c1c1e">${i.name}</strong> a déjà un capteur mesurant <strong style="color:#1c1c1e">${o}</strong>. Quel capteur conserver ?</span>
    </div>

    <div style="border-radius:12px;overflow:hidden;border:.5px solid rgba(0,0,0,.12)">
      <div class="m-sheet-option" id="keep-existing" style="gap:12px;border-bottom:.5px solid rgba(0,0,0,.1)">
        <div style="width:36px;height:36px;border-radius:50%;background:#f2f2f7;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <i class="bi bi-broadcast" style="color:#636366;font-size:15px"></i>
        </div>
        <div style="flex:1;min-width:0;text-align:left">
          <div style="font-size:15px;font-weight:600;color:#1c1c1e">${t.model} · <span style="font-family:monospace;font-weight:400">${t.serial}</span></div>
          <div style="font-size:12px;color:#8e8e93;margin-top:2px">Conserver ce capteur</div>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-sheet-option" id="keep-new" style="gap:12px">
        <div style="width:36px;height:36px;border-radius:50%;background:#e8f3ff;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <i class="bi bi-broadcast" style="color:#0172A4;font-size:15px"></i>
        </div>
        <div style="flex:1;min-width:0;text-align:left">
          <div style="font-size:15px;font-weight:600;color:#0172A4">${e.model} · <span style="font-family:monospace;font-weight:400">${e.serial}</span></div>
          <div style="font-size:12px;color:#0172A4;opacity:.75;margin-top:2px">Utiliser ce capteur à la place</div>
        </div>
        <i class="bi bi-chevron-right" style="color:#0172A4;font-size:13px;flex-shrink:0"></i>
      </div>
    </div>
    <div style="height:6px"></div>`;const a=oe({title:"Conflit de métrique",body:s,doneLabel:"Annuler",onDone:()=>{}});s.querySelector("#keep-existing").addEventListener("click",()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{a.remove(),V("Liaison annulée")},280)}),s.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(d=>d!==i.id),e.parcelIds=[...e.parcelIds,i.id],a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{a.remove(),V(`Lié à ${i.name}`),n()},280)})}function vi(e,i={}){const t=re(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",ie);const n=Object.fromEntries(Wi.map(s=>[s.id,s]));function o(){var c;const s=t.querySelector("#sjrn-content"),a=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(f=>f.linkedType==="sensor"&&f.linkedId===e.id).map((f,E)=>({id:`dash-${E}`,type:"note",date:f.date,texte:f.text,user:f.auteur,_fromDashboard:!0})),d=[...jt(e.id),...a].sort((f,E)=>E.date.localeCompare(f.date)),u=f=>{const[E,l,p]=f.split("-");return`${p}/${l}/${E}`};let r=`
      <div style="padding:12px 16px 8px">
        <button class="btn-primary" id="sjrn-add-btn" style="width:100%;justify-content:center;gap:8px;font-size:15px;padding:11px 16px;border-radius:10px">
          <i class="bi bi-plus-circle-fill"></i> Ajouter une opération de maintenance
        </button>
      </div>
    `;d.length===0?r+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(r+='<div class="m-jrn-timeline">',d.forEach((f,E)=>{const l=n[f.type]||{label:f.type,icon:"bi-circle",color:"#8e8e93"},p=E===d.length-1,m=!!f._fromDashboard;r+=`
          <div class="m-jrn-entry" data-id="${f.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${l.color}18;color:${l.color};border-color:${l.color}40">
                <i class="bi ${l.icon}"></i>
              </div>
              ${p?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${u(f.date)}</span>
                <span style="font-size:12px;font-weight:600;color:${l.color}">${l.label}</span>
                ${m?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${f.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${f.texte?`<div class="m-jrn-texte">${f.texte}</div>`:""}
              ${f.user?`<div style="font-size:11px;color:#8e8e93;margin-top:2px">${f.user}</div>`:""}
            </div>
          </div>`}),r+="</div>"),s.innerHTML=r,(c=s.querySelector("#sjrn-add-btn"))==null||c.addEventListener("click",()=>fi(e.id,o)),s.querySelectorAll(".m-jrn-del").forEach(f=>{f.addEventListener("click",()=>{const E=parseInt(f.dataset.id);Ji(e.id,jt(e.id).filter(l=>l.id!==E)),o()})})}o(),i.openForm&&fi(e.id,o)}function fi(e,i){const t=new Date().toISOString().slice(0,10),n=document.createElement("div");n.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-sheet-input-label" style="font-size:12px;color:#8e8e93;margin-bottom:4px">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${Wi.map(o=>`<option value="${o.id}">${o.label}</option>`).join("")}
        </select>
      </div>
      <div>
        <div class="m-sheet-input-label" style="font-size:12px;color:#8e8e93;margin-bottom:4px">Date</div>
        <input type="date" class="m-sheet-input" id="sjf-date" value="${t}">
      </div>
      <div>
        <div class="m-sheet-input-label" style="font-size:12px;color:#8e8e93;margin-bottom:4px">Intervenant</div>
        <input type="text" class="m-sheet-input" id="sjf-user" value="Jean Dupont">
      </div>
      <div>
        <div class="m-sheet-input-label" style="font-size:12px;color:#8e8e93;margin-bottom:4px">Note</div>
        <textarea class="m-sheet-input" id="sjf-texte" placeholder="Observations éventuelles…" style="resize:none;min-height:72px"></textarea>
      </div>
    </div>`,oe({title:"Opération de maintenance",body:n,doneLabel:"Enregistrer",onDone:()=>{const o=n.querySelector("#sjf-type").value,s=n.querySelector("#sjf-date").value||t,a=n.querySelector("#sjf-user").value.trim()||"Jean Dupont",d=n.querySelector("#sjf-texte").value.trim();Ji(e,[{id:Date.now(),type:o,date:s,user:a,texte:d},...jt(e)]),i()}}),setTimeout(()=>{var o;return(o=n.querySelector("#sjf-texte"))==null?void 0:o.focus()},350)}const hi=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:It},Symbol.toStringTag,{value:"Module"})),Be=100,bi=1,yt=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],wn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},Sn={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function it(e,i){return(Sn[e]||[]).includes(i)}function En(e){return wn[e]||e}function Ln(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const st=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Cn(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function kn(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const n=i==="admin",o=ne.filter(x=>x.id!==Be),s=Object.fromEntries(W.map(x=>[x.id,x])),a=Object.fromEntries(ne.map(x=>[x.id,x]));let d=null,u=null;const r={};let c="carte",f="pluie",E="7 derniers jours",l="all";function p(x){const C=`${x}-${f}-${E}`;return C in r||(r[C]=Cn(f)),r[C]}function m(){if(n){if(l==="all")return G;if(l===String(Be)){const S=new Set(W.filter(b=>b.orgId===Be).map(b=>b.id));return G.filter(b=>b.parcelIds.some($=>S.has($)))}const h=new Set(W.filter(S=>String(S.orgId)===l).map(S=>S.id));return G.filter(S=>S.parcelIds.some(b=>h.has(b)))}const x=new Set(W.filter(h=>h.orgId===bi).map(h=>h.id)),C=G.filter(h=>h.parcelIds.some(S=>x.has(S))),k=G.filter(h=>!h.parcelIds.some(S=>x.has(S))&&yt.includes(h.model));return l==="mine"?C:l==="network"?k:[...C,...k]}function g(x){const C=x.parcelIds.length?s[x.parcelIds[0]]:null;if(!C)return null;const k=(x.id*7919%1e3-500)/1e6,h=(x.id*6271%1e3-500)/1e6;return{lat:C.lat+k,lng:C.lng+h,name:C.name}}function w(x){var k,h;const C=x.parcelIds.length?s[x.parcelIds[0]]:null;return(C?(k=a[C.orgId])==null?void 0:k.ville:null)||((h=a[x.orgId])==null?void 0:h.ville)||null}function y(){if(d){try{d.remove()}catch{}d=null,u=null}}function v(){y();const x=st.find(b=>b.id===f)||st[0],C=m();let k;if(n)k=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${Be}"${l===String(Be)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${o.map(b=>`<option value="${b.id}"${l===String(b.id)?" selected":""}>${b.name}</option>`).join("")}
        </select>`;else{const b=ne.find(M=>M.id===bi),$=ne.find(M=>M.id===Be);k=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${l==="all"?" selected":""}>Tout le réseau</option>
          <option value="network"${l==="network"?" selected":""}>${($==null?void 0:$.name)||"Breiz'Agri Conseil"} uniquement</option>
          <option value="mine"${l==="mine"?" selected":""}>${(b==null?void 0:b.name)||"Mon organisation"} uniquement</option>
        </select>`}const h=[...C].sort((b,$)=>{const M=it(b.model,f),T=it($.model,f);return M&&!T?-1:!M&&T?1:M?p($.id)-p(b.id):0}),S=h.length?`<div class="m-plain-list">${h.map(b=>{const $=yt.includes(b.model),T=it(b.model,f)?`<span class="m-sensor-val">${p(b.id)} ${x.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${b.id}">
              <div class="m-sensor-icon" style="background:${$?"#0172A420":"#5b8dd920"};color:${$?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${En(b.model)} - ${b.model}</span>
                <span class="m-sensor-sub">${[w(b),Ln(b)].filter(Boolean).join(" - ")}</span>
              </div>
              ${T}
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';t.innerHTML=`
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${c==="carte"?" m-view-btn--on":""}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${c==="liste"?" m-view-btn--on":""}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${st.map(b=>`<option value="${b.id}"${b.id===f?" selected":""}>${b.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${x.aggs.map(b=>`<option${b===E?" selected":""}>${b}</option>`).join("")}
          </select>
        </div>
        ${k}
      </div>
      ${c==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${S}</div>`}`,A(),c==="carte"&&L(C,x)}function L(x,C){const k=window.L;k&&setTimeout(()=>{const h=t.querySelector("#sensor-map");if(!h)return;d=k.map(h,{zoomControl:!1,attributionControl:!1}),k.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(d);const S=[];x.forEach(b=>{const $=g(b);if(!$)return;const M=it(b.model,f),T=yt.includes(b.model),H=k.circleMarker([$.lat,$.lng],{radius:M?10:7,color:"#fff",weight:2,fillColor:T?"#0172A4":"#5b8dd9",fillOpacity:M?.95:.45}).addTo(d);M&&H.bindTooltip(`${p(b.id)} ${C.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),H.on("click",()=>It(b,"donnees",i)),S.push([$.lat,$.lng])}),S.length&&(u=S,d.fitBounds(S,{padding:[32,32]})),d.invalidateSize()},0)}window.addEventListener("m-tab-change",x=>{x.detail==="capteurs"&&(v(),c==="carte"&&d&&setTimeout(()=>{d.invalidateSize(),u!=null&&u.length&&d.fitBounds(u,{padding:[32,32]})},50))});function A(){var x,C,k;t.querySelectorAll(".m-view-btn").forEach(h=>h.addEventListener("click",()=>{c=h.dataset.view,v()})),(x=t.querySelector("#metric-sel"))==null||x.addEventListener("change",h=>{var S;f=h.target.value,E=((S=st.find(b=>b.id===f))==null?void 0:S.defaultAgg)||"",v()}),(C=t.querySelector("#agg-sel"))==null||C.addEventListener("change",h=>{E=h.target.value,v()}),(k=t.querySelector("#org-filter"))==null||k.addEventListener("change",h=>{l=h.target.value,v()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(h=>{h.addEventListener("click",()=>{const S=G.find(b=>b.id===+h.dataset.sensorId);S&&It(S,"donnees",i)})})}v(),window.addEventListener("weenat-sensor-renamed",()=>{c==="liste"&&v()})}const An=["Essentiel","Plus","Expert"],Mn=["Administrateur","Agent","Lecteur"],gi=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function Tn(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function In(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function yi({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function xt(e){if(!e)return"—";const[i,t,n]=e.split("-");return`${n}/${t}/${i}`}function xi(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let n=11;n>=0;n--){const o=new Date(i.getFullYear(),i.getMonth()-n,1),s=o.getFullYear(),a=String(o.getMonth()+1).padStart(2,"0"),d=n>0?n===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${s}-${a}`,dateEmission:`${s}-${a}-01`,montant:o.getMonth()===11?1980:t[n%t.length],statut:d})}return e.reverse()}function jn(e,i){if(!e)return{};const t=i==="admin",n=ne.find(k=>k.id===(t?ct:Wt));if(!n)return{};const s=(t?ut.filter(k=>{var h;return!((h=k.orgIds)!=null&&h.length)||k.orgIds.includes(ct)}):ut.filter(k=>{var h;return(h=k.orgIds)==null?void 0:h.includes(Wt)})).filter(k=>k.statut!=="inactif").map(k=>({...k})),a=ne.filter(k=>k.id!==ct&&k.statut!=="inactif").length,d=In(n.adresse||""),u={rue:"",cp:"",ville:""},r={name:n.name,siret:n.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:d,adresseLivrai:u,pays:"France",markerLat:n.lat||48.117,markerLng:n.lng||-1.678,plan:n.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":n.codeAdherent||"CTR-2022-00418",dateAdhesion:n.dateAdhesion||"2022-03-15",licencesMembres:t?ut.length:3,licencesAdherents:t?a:null,licencesIntegrations:t?27:2}};let c=null,f=null;function E(){if(!f)return;const k=e.querySelector(`#${f}`);if(!k)return;if(c){try{c.remove()}catch{}c=null}const h=window.L;h&&(c=h.map(k,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),h.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(c),c.setView([r.markerLat,r.markerLng],14),h.marker([r.markerLat,r.markerLng],{draggable:!1}).addTo(c),setTimeout(()=>c==null?void 0:c.invalidateSize(),50))}function l(){if(f=`expl-map-${Math.random().toString(36).slice(2,8)}`,c){try{c.remove()}catch{}c=null}const k=yi(r.adresseFactu)||"—",h=yi(r.adresseLivrai),S=t?xi():[],b=S.slice(0,3),$=S.length>3,M=s.slice(0,3),T=s.length>3;function H(z,Q){const ce=z.statut==="payée"?"#30d158":"#ff9f0a",U=z.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${Q?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${z.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${z.numero}</span>
            <span class="m-list-row-sub">${xt(z.dateEmission)} · ${z.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${ce};flex-shrink:0;margin-right:4px">${U}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}e.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Exploitation</div>
      <div class="m-list">
        <div class="m-list-row" data-action="name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${r.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="metier" style="align-items:flex-start;padding-top:12px;padding-bottom:12px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Métiers</span>
            ${r.metiers.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">${r.metiers.map(z=>`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:4px;padding:2px 8px;font-size:12px;font-weight:500">${z}</span>`).join("")}</div>`:'<div style="font-size:13px;color:#8e8e93;margin-top:4px">—</div>'}
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Adresses</div>
      <div class="m-list">
        <div class="m-list-row" data-action="adresse-factu">
          <span class="m-list-row-label">Facturation</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${k}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${h||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="pays">
          <span class="m-list-row-label">Pays</span>
          <span class="m-list-row-value">${r.pays}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="siret">
          <span class="m-list-row-label">SIRET</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:12px">${r.siret||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation</div>
      <div id="${f}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${r.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${xt(r.contrat.dateAdhesion)}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Licences membres</span>
          <span class="m-list-row-value">${r.contrat.licencesMembres}</span>
        </div>
        ${r.contrat.licencesAdherents!=null?`
        <div class="m-list-row">
          <span class="m-list-row-label">Adhérents actifs</span>
          <span class="m-list-row-value">${r.contrat.licencesAdherents}</span>
        </div>`:""}
        <div class="m-list-row">
          <span class="m-list-row-label">Licences intégrations</span>
          <span class="m-list-row-value">${r.contrat.licencesIntegrations}</span>
        </div>
        <div class="m-list-row m-list-row--last" ${t?'data-action="plan"':""}>
          <span class="m-list-row-label">Abonnement</span>
          <span class="m-list-row-value" style="color:#0172A4;font-weight:600">${r.plan}</span>
          ${t?'<i class="bi bi-chevron-right m-list-chevron"></i>':""}
        </div>
      </div>

      ${t?`
      <div class="m-list-section-header">Factures</div>
      <div class="m-list">
        ${b.map((z,Q)=>H(z,!$&&Q===b.length-1)).join("")}
        ${$?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${S.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${s.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${s.length?[...M.map((z,Q)=>`
            <div class="m-list-row${!T&&Q===M.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${Q}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${z.prenom} ${z.nom}</span>
                <span class="m-list-row-sub">${z.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),T?`
            <div class="m-list-row m-list-row--last m-tappable" data-action="voir-membres">
              <span class="m-list-row-label" style="color:#007aff">Voir tous les membres</span>
              <span class="m-list-row-value" style="color:#8e8e93">${s.length}</span>
              <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
            </div>`:""].join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun membre</span></div>'}
      </div>
      <div style="padding:8px 16px 4px">
        <button id="btn-ajouter-membre" style="width:100%;padding:13px;background:none;border:1.5px solid #0172A4;color:#0172A4;border-radius:12px;font-size:15px;font-weight:500;font-family:inherit;cursor:pointer;margin-bottom:20px;">Ajouter un membre</button>
      </div>

      ${t?"":`
      <div class="m-list-section-header">Réseaux</div>
      <div style="display:flex;gap:0;margin:0 16px 12px;background:#e5e5ea;border-radius:9px;padding:2px">
        <button class="m-reseau-tab m-reseau-tab--active" data-reseau-tab="adherente" style="flex:1;border:none;border-radius:7px;padding:6px 0;font-size:13px;font-weight:500;cursor:pointer;background:#fff;color:#000;font-family:inherit;transition:background .15s,color .15s">Adhérente d'un réseau</button>
        <button class="m-reseau-tab" data-reseau-tab="independante" style="flex:1;border:none;border-radius:7px;padding:6px 0;font-size:13px;font-weight:500;cursor:pointer;background:transparent;color:#8e8e93;font-family:inherit;transition:background .15s,color .15s">Indépendante</button>
      </div>

      <div id="reseau-panel-adherente">
        <div class="m-list" style="margin-bottom:5px">
          <div class="m-list-row m-list-row--last" style="align-items:flex-start;padding:16px">
            <div style="width:44px;height:44px;border-radius:10px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
              <span style="font-size:12px;font-weight:700;color:#0172A4">BA</span>
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:600;font-size:15px;margin-bottom:4px">Breiz'Agri Conseil</div>
              <div style="font-size:13px;color:#3c3c43;line-height:1.5">L'exploitation Ferme du Bocage est adhérente du réseau Breiz'Agri Conseil.</div>
              <div style="font-size:12px;color:#8e8e93;margin-top:4px">Membre depuis le 15/03/2022</div>
            </div>
          </div>
        </div>
        <div style="padding:0px 20px 0px 20px">
          <button id="btn-quitter-reseau" style="width:100%;padding:13px;background:none;border:1.5px solid #ff3b30;color:#ff3b30;border-radius:12px;font-size:15px;font-weight:500;font-family:inherit;cursor:pointer;margin-bottom:20px;">Quitter le réseau</button>
        </div>
      </div>

      <div id="reseau-panel-independante" style="display:none">
        <div style="padding:0 16px 8px;font-size:13px;color:#8e8e93">5 réseaux les plus proches de votre exploitation</div>
        <div class="m-list">
          ${gi.slice(0,5).map((z,Q)=>`
            <div class="m-list-row${Q===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${Tn(z.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${z.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${z.distance} km <br> ${z.capteurs} capteurs <br> ${z.parcelles} parcelles <br> ${z.adherents} adhérents <br> </div>
                <button class="m-join-net-btn" data-net-idx="${Q}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
              </div>
            </div>`).join("")}
        </div>
      </div>
      `}
      <div style="height:32px"></div>`,p()}function p(){var k,h;e.querySelectorAll(".m-list-row[data-action]").forEach(S=>{S.addEventListener("click",()=>{switch(S.dataset.action){case"name":m("Nom de l'exploitation",r.name,b=>{r.name=b,l()});break;case"siret":m("SIRET",r.siret,b=>{r.siret=b,l()});break;case"metier":w();break;case"adresse-factu":g("Adresse de facturation",r.adresseFactu,b=>{r.adresseFactu=b,l()});break;case"adresse-livrai":g("Adresse de livraison",r.adresseLivrai,b=>{r.adresseLivrai=b,l()});break;case"pays":m("Pays",r.pays,b=>{r.pays=b,l()});break;case"plan":y("Abonnement",An,r.plan,b=>{r.plan=b,l()});break;case"facture":V(`PDF ${S.dataset.factureId} téléchargé`);break;case"voir-factures":A();break;case"voir-membres":L();break}})}),e.querySelectorAll("[data-member-idx]").forEach(S=>{S.addEventListener("click",()=>v(+S.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(S=>{S.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach($=>{const M=$===S;$.style.background=M?"#fff":"transparent",$.style.color=M?"#000":"#8e8e93"});const b=S.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=b==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=b==="independante"?"":"none"})}),(k=e.querySelector("#btn-ajouter-membre"))==null||k.addEventListener("click",x),(h=e.querySelector("#btn-quitter-reseau"))==null||h.addEventListener("click",()=>{const S=document.createElement("div");S.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,oe({title:"Quitter le réseau ?",body:S,doneLabel:"Confirmer",onDone:()=>V("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(S=>{S.addEventListener("click",()=>{const b=gi[+S.dataset.netIdx];V(`Demande envoyée à ${b.name}`)})})}function m(k,h,S){const b=document.createElement("div");b.innerHTML=`<input class="m-sheet-input" type="text" value="${(h||"").replace(/"/g,"&quot;")}" placeholder="${k}">`;const $=b.querySelector("input");oe({title:k,body:b,doneLabel:"Enregistrer",onDone:()=>{const M=$.value.trim();M&&(S(M),V("Enregistré"))}}),setTimeout(()=>$.focus(),300)}function g(k,h,S){const b=document.createElement("div");b.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(h.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${h.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(h.ville||"").replace(/"/g,"&quot;")}">`,oe({title:k,body:b,doneLabel:"Enregistrer",onDone:()=>{S({rue:b.querySelector("#f-rue").value.trim(),cp:b.querySelector("#f-cp").value.trim(),ville:b.querySelector("#f-ville").value.trim()}),V("Enregistré")}}),setTimeout(()=>b.querySelector("#f-rue").focus(),300)}function w(){const k=new Set(r.metiers),h=document.createElement("div"),S=()=>{h.innerHTML=ts.map(b=>`
        <div class="m-sheet-option${k.has(b)?" m-sheet-option--active":""}" data-m="${b}" style="justify-content:space-between">
          <span>${b}</span>
          ${k.has(b)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),h.querySelectorAll("[data-m]").forEach(b=>{b.addEventListener("click",()=>{const $=b.dataset.m;k.has($)?k.delete($):k.add($),S()})})};S(),oe({title:"Métiers",body:h,doneLabel:"Valider",onDone:()=>{r.metiers=[...k],l()}})}function y(k,h,S,b){const $=document.createElement("div");$.innerHTML=h.map((T,H)=>`
      <div class="m-sheet-option${T===S?" m-sheet-option--active":""}" data-i="${H}">
        <span>${T}</span>${T===S?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const M=oe({title:k,body:$,doneLabel:"Fermer",onDone:()=>{}});$.querySelectorAll(".m-sheet-option").forEach(T=>{T.addEventListener("click",()=>{b(h[+T.dataset.i]),M.classList.remove("m-sheet-overlay--show"),setTimeout(()=>M.remove(),280),V("Enregistré")})})}function v(k,h){const S=s[k];if(!S)return;const b=document.createElement("div");b.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${S.role}</span></div>
        ${S.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${S.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${S.prenom} ${S.nom}</a>
      </div>`;const $=oe({title:`${S.prenom} ${S.nom}`,body:b,doneLabel:"Fermer",onDone:()=>{}});b.querySelector("#mem-delete").addEventListener("click",()=>{s.splice(k,1),$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{$.remove(),l(),V("Membre retiré"),h==null||h()},280)})}function L(){let k="",S=20;function b(){if(!k)return s;const H=k.toLowerCase();return s.filter(z=>`${z.prenom} ${z.nom}`.toLowerCase().includes(H)||(z.email||"").toLowerCase().includes(H)||(z.role||"").toLowerCase().includes(H))}const $=re(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Mon exploitation</span></button>
          <span style="font-size:17px;font-weight:600">Membres</span>
          <button id="mbr-invite-btn" style="border:none;background:none;color:#0172A4;font-size:15px;font-weight:500;cursor:pointer;padding:4px;font-family:inherit">Inviter</button>
        </div>
        <div class="m-lp-search">
          <div class="m-lp-search-inner">
            <i class="bi bi-search"></i>
            <input class="m-lp-search-input" type="search" id="mbr-search" placeholder="Nom, rôle, email…">
          </div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),M=$.querySelector("#mbr-list-content");function T(){var ce;const H=b(),z=H.slice(0,S),Q=H.length-z.length;M.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${H.length} membre${H.length!==1?"s":""}${k?" trouvé"+(H.length!==1?"s":""):" actif"+(H.length!==1?"s":"")}</div>
        <div class="m-list">
          ${z.length?z.map((U,ve)=>`<div class="m-list-row${ve===z.length-1&&Q===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${s.indexOf(U)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${U.prenom} ${U.nom}</span>
                <span class="m-list-row-sub">${U.role}${U.email?" · "+U.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${Q>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${Q} de plus</span>
            </div>`:""}
          ${H.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,M.querySelectorAll("[data-mbr-idx]").forEach(U=>{U.addEventListener("click",()=>v(+U.dataset.mbrIdx,T))}),(ce=M.querySelector("#mbr-load-more"))==null||ce.addEventListener("click",()=>{S+=20,T()})}$.querySelector(".m-detail-back").addEventListener("click",ie),$.querySelector("#mbr-invite-btn").addEventListener("click",x),$.querySelector("#mbr-search").addEventListener("input",H=>{k=H.target.value,S=20,T()}),T()}function A(){const k=xi();let h="";function S(){if(!h)return k;const T=h.toLowerCase();return k.filter(H=>H.numero.toLowerCase().includes(T)||H.statut.toLowerCase().includes(T)||String(H.montant).includes(T))}const b=re(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Mon exploitation</span></button>
          <span style="font-size:17px;font-weight:600">Factures</span>
          <div style="width:44px"></div>
        </div>
        <div class="m-lp-search">
          <div class="m-lp-search-inner">
            <i class="bi bi-search"></i>
            <input class="m-lp-search-input" type="search" id="fac-search" placeholder="N° facture, statut…">
          </div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),$=b.querySelector("#fac-list-content");function M(){const T=S();$.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${T.length} facture${T.length!==1?"s":""}</div>
        <div class="m-list">
          ${T.length?T.map((H,z)=>{const Q=H.statut==="payée"?"#30d158":"#ff9f0a",ce=H.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${z===T.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${H.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${H.numero}</span>
                <span class="m-list-row-sub">${xt(H.dateEmission)} · ${H.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${Q};flex-shrink:0;margin-right:4px">${ce}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,$.querySelectorAll("[data-fac-id]").forEach(H=>{H.addEventListener("click",()=>V(`PDF ${H.dataset.facId} téléchargé`))})}b.querySelector(".m-detail-back").addEventListener("click",ie),b.querySelector("#fac-search").addEventListener("input",T=>{h=T.target.value,M()}),M()}function x(){const k=document.createElement("div");k.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${Mn.map(h=>`<option>${h}</option>`).join("")}
      </select>`,oe({title:"Ajouter un membre",body:k,doneLabel:"Inviter",onDone:()=>{k.querySelector("#inv-email").value.trim()&&V("Invitation envoyée")}}),setTimeout(()=>k.querySelector("#inv-email").focus(),300)}l();function C(){requestAnimationFrame(()=>setTimeout(E,100))}return{onAdd:x,refresh:C}}const qn=100,Pn=["Essentiel","Plus","Expert"],Dn={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function $t(e){return Dn[e]||{label:e||"—",color:"#8e8e93"}}function Hn(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=ne.filter(l=>l.id!==qn&&l.statut!=="inactif").map(l=>({...l})),n={...xe,siege:{...xe.siege},antennes:xe.antennes.map(l=>({...l}))},o={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function s(l,p,m,g){return l.slice(p,m).map((w,y)=>{const v=p+y,L=$t(w.statut),A=w.statut==="demande en attente";return`
        <div class="m-list-row${v===g?" m-list-row--last":""} m-tappable" data-org-idx="${v}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${w.proprietaire||w.name}</span>
            <span class="m-list-row-sub">${w.name} · ${w.plan||"—"}</span>
          </div>
          ${A?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${v}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${v}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${L.color};flex-shrink:0;margin-right:4px">${L.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function a(){let l="",m=20;function g(){if(!l)return t;const L=l.toLowerCase();return t.filter(A=>(A.proprietaire||A.name||"").toLowerCase().includes(L)||(A.name||"").toLowerCase().includes(L)||(A.email||"").toLowerCase().includes(L)||(A.codeAdherent||"").toLowerCase().includes(L))}const w=re(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Mon réseau</span></button>
          <span style="font-size:17px;font-weight:600">Adhérents</span>
          <button id="adh-invite-btn" style="border:none;background:none;color:#0172A4;font-size:15px;font-weight:500;cursor:pointer;padding:4px;font-family:inherit">Inviter</button>
        </div>
        <div class="m-lp-search">
          <div class="m-lp-search-inner">
            <i class="bi bi-search"></i>
            <input class="m-lp-search-input" type="search" id="adh-search" placeholder="Nom, email, code…">
          </div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),y=w.querySelector("#adh-list-content");function v(){var k;const L=g(),A=L.slice(0,m),x=L.length-A.length,C=L.filter(h=>h.statut==="actif"||h.statut==="actif en essai").length;y.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${l?L.length+" résultat"+(L.length!==1?"s":""):C+" actif"+(C!==1?"s":"")+" · "+L.length+" total"}</div>
        <div class="m-list">
          ${A.length?A.map((h,S)=>{const b=t.indexOf(h),$=$t(h.statut),M=h.statut==="demande en attente";return`
              <div class="m-list-row${S===A.length-1&&x===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${b}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${h.proprietaire||h.name}</span>
                  <span class="m-list-row-sub">${h.name} · ${h.plan||"—"}</span>
                </div>
                ${M?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${b}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${b}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${$.color};flex-shrink:0;margin-right:4px">${$.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${x>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${x} de plus</span>
            </div>`:""}
        </div>`,y.querySelectorAll("[data-lp-org-idx]").forEach(h=>{h.addEventListener("click",S=>{S.target.closest("[data-adh-action]")||f(t[+h.dataset.lpOrgIdx],+h.dataset.lpOrgIdx,v)})}),y.querySelectorAll("[data-adh-action]").forEach(h=>{h.addEventListener("click",S=>{S.stopPropagation();const b=+h.dataset.lpAdhIdx,$=h.dataset.adhAction,M=t[b];M&&($==="valider"?(M.statut="actif",d(),v(),V(`${M.proprietaire||M.name} validé`)):(t.splice(b,1),d(),v(),V("Demande rejetée")))})}),(k=y.querySelector("#adh-load-more"))==null||k.addEventListener("click",()=>{m+=20,v()})}w.querySelector(".m-detail-back").addEventListener("click",ie),w.querySelector("#adh-invite-btn").addEventListener("click",E),w.querySelector("#adh-search").addEventListener("input",L=>{l=L.target.value,m=20,v()}),v()}function d(){var y;const l=t.filter(v=>v.statut!=="inactif"),p=`${n.siege.adresse}, ${n.siege.codePostal} ${n.siege.ville}`;e.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Réseau</div>
      <div class="m-list">
        <div class="m-list-row" data-action="net-nom">
          <span class="m-list-row-label">Nom du réseau</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:13px">${n.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="net-siege">
          <span class="m-list-row-label">Siège</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:12px">${p}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="net-antennes" style="align-items:flex-start;padding-top:10px;padding-bottom:10px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Antennes</span>
            <span class="m-web-only-hint">Modifiable sur la version web</span>
          </div>
          <span class="m-list-row-value" style="color:#8e8e93;flex-shrink:0">${n.antennes.length} antenne${n.antennes.length>1?"s":""}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-footer">Description, logo et contacts modifiables sur la version web</div>

      <div class="m-list-section-header">Partage entre les adhérents</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs météo</span>
          <label class="m-toggle"><input type="checkbox" id="tog-meteo"${o.partageMeteo?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs irrigation</span>
          <label class="m-toggle"><input type="checkbox" id="tog-sol"${o.partageSol?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Stations météo virtuelles</span>
          <label class="m-toggle"><input type="checkbox" id="tog-irrigation"${o.partageIrrigation?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
      </div>

      <div class="m-list-section-header">Adhérents — ${l.length} actifs</div>
      <div class="m-list">
        ${s(t,0,Math.min(5,t.length),t.length>5?-1:t.length-1)}
        ${t.length>5?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${t.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(v=>{v.addEventListener("click",L=>{L.target.closest("[data-adh-action]")||f(t[+v.dataset.orgIdx],+v.dataset.orgIdx)})}),(y=e.querySelector('[data-action="voir-adherents"]'))==null||y.addEventListener("click",a),e.querySelectorAll("[data-adh-action]").forEach(v=>{v.addEventListener("click",L=>{L.stopPropagation();const A=+v.dataset.adhIdx,x=v.dataset.adhAction,C=t[A];C&&(x==="valider"?(C.statut="actif",d(),V(`${C.proprietaire||C.name} validé`)):(t.splice(A,1),d(),V("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(v=>{v.addEventListener("click",()=>{switch(v.dataset.action){case"net-nom":u("Nom du réseau",n.nom,L=>{n.nom=L,d()});break;case"net-siege":r();break;case"net-antennes":c();break}})});const m=e.querySelector("#tog-meteo"),g=e.querySelector("#tog-sol"),w=e.querySelector("#tog-irrigation");m==null||m.addEventListener("change",()=>{o.partageMeteo=m.checked,V("Préférence enregistrée")}),g==null||g.addEventListener("change",()=>{o.partageSol=g.checked,V("Préférence enregistrée")}),w==null||w.addEventListener("change",()=>{o.partageIrrigation=w.checked,V("Préférence enregistrée")})}function u(l,p,m){const g=document.createElement("div");g.innerHTML=`<input class="m-sheet-input" type="text" value="${(p||"").replace(/"/g,"&quot;")}" placeholder="${l}">`;const w=g.querySelector("input");oe({title:l,body:g,doneLabel:"Enregistrer",onDone:()=>{const y=w.value.trim();y&&(m(y),V("Enregistré"))}}),setTimeout(()=>w.focus(),300)}function r(){const l=document.createElement("div");l.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${n.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${n.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${n.siege.ville.replace(/"/g,"&quot;")}">`,oe({title:"Adresse du siège",body:l,doneLabel:"Enregistrer",onDone:()=>{n.siege.adresse=l.querySelector("#s-rue").value.trim(),n.siege.codePostal=l.querySelector("#s-cp").value.trim(),n.siege.ville=l.querySelector("#s-ville").value.trim(),d(),V("Enregistré")}}),setTimeout(()=>l.querySelector("#s-rue").focus(),300)}function c(){const l=document.createElement("div");(()=>{l.innerHTML=n.antennes.map((m,g)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${m.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${m.adresse}, ${m.codePostal} ${m.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${m.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),oe({title:"Antennes",body:l,doneLabel:"Fermer",onDone:()=>{}})}function f(l,p,m){var A,x;const g=$t(l.statut),w=l.statut==="invitation en attente",y=`https://app.weenat.com/invitation?code=${l.codeAdherent||"ADZ-XXX"}`,v=document.createElement("div");v.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${l.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${l.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${l.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${l.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${W.filter(C=>C.orgId===l.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const C=new Set(W.filter(k=>k.orgId===l.id).map(k=>k.id));return G.filter(k=>C.has(k.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${g.color};font-weight:600">${g.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${l.dateAdhesion?l.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${w?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const L=oe({title:l.name,body:v,doneLabel:"Fermer",onDone:()=>{}});(A=v.querySelector("#lnk-copy"))==null||A.addEventListener("click",()=>{var C;(C=navigator.clipboard)==null||C.writeText(y).catch(()=>{}),V("Lien copié !")}),(x=v.querySelector("#lnk-cancel"))==null||x.addEventListener("click",()=>{l.statut="inactif",L.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{L.remove(),d(),m==null||m(),V("Invitation annulée")},280)}),v.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(p,1),L.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{L.remove(),d(),m==null||m(),V("Adhérent supprimé")},280)})}function E(){const l=document.createElement("div");l.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${Pn.map(p=>`<option>${p}</option>`).join("")}
      </select>`,oe({title:"Inviter un adhérent",body:l,doneLabel:"Envoyer",onDone:()=>{const p=l.querySelector("#adh-email").value.trim(),m=l.querySelector("#adh-code").value.trim();if(!p||!m){V("Email et code requis");return}t.push({id:Date.now(),name:p,proprietaire:p,email:p,codeAdherent:m,plan:l.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),d(),V("Invitation envoyée")}}),setTimeout(()=>l.querySelector("#adh-email").focus(),300)}return d(),{onAdd:E}}$i(W);const zn=new URLSearchParams(window.location.search),Se=zn.get("role")==="adherent"?"adherent":"admin";function Gi(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}Gi();setInterval(Gi,1e4);const ke=["dashboard","parcelles","capteurs","alertes","parametres"];let lt="dashboard";function De(e){var i,t;!ke.includes(e)||e===lt||(lt=e,document.querySelectorAll(".m-screen").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function _n(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;Jt()>0&&is()?_n(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),De(t)}):(Jt()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),De(t))});let ge=null,Ze=null;const Ui=50,Ke=document.getElementById("screen-stack");Ke.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){ge=null;return}ge=e.clientX,Ze=e.clientY});Ke.addEventListener("mouseup",e=>{if(ge===null)return;const i=e.clientX-ge,t=e.clientY-Ze;if(Math.abs(i)>Ui&&Math.abs(i)>Math.abs(t)){const n=ke.indexOf(lt);i<0&&n<ke.length-1&&De(ke[n+1]),i>0&&n>0&&De(ke[n-1])}ge=null,Ze=null});Ke.addEventListener("mouseleave",()=>{ge=null});Ke.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){ge=null;return}ge=e.touches[0].clientX,Ze=e.touches[0].clientY},{passive:!0});Ke.addEventListener("touchend",e=>{if(ge===null)return;const i=e.changedTouches[0].clientX-ge,t=e.changedTouches[0].clientY-Ze;if(Math.abs(i)>Ui&&Math.abs(i)>Math.abs(t)){const n=ke.indexOf(lt);i<0&&n<ke.length-1&&De(ke[n+1]),i>0&&n>0&&De(ke[n-1])}ge=null},{passive:!0});const Bn=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...Se==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],dt={};function Yi(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=dt[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var n;return(n=window.showMobileAddPage)==null?void 0:n.call(window)})}function Fn(){var i;const e=document.getElementById("param-segment");e&&(Se==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),Bn.forEach((t,n)=>{const o=document.createElement("button");o.className="m-segment-btn"+(n===0?" active":""),o.textContent=t.label,o.dataset.target=t.id,o.addEventListener("click",()=>{var s,a,d;e.querySelectorAll(".m-segment-btn").forEach(u=>u.classList.remove("active")),o.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(u=>u.classList.remove("active")),(s=document.getElementById(t.id))==null||s.classList.add("active"),Yi(t.id),(d=(a=dt[t.id])==null?void 0:a.refresh)==null||d.call(a)}),e.appendChild(o)}))}Fn();Vs(document.getElementById("screen-dashboard"),Se);pn(document.getElementById("screen-parcelles"),Se);kn(document.getElementById("screen-capteurs"),Se);ms(document.getElementById("screen-alertes"),Se);rs(document.getElementById("param-compte"),Se);dt["param-exploitation"]=jn(document.getElementById("param-exploitation"),Se);dt["param-reseau"]=Hn(document.getElementById("param-reseau"),Se);function On(){var n;const e=Se==="admin",i=document.getElementById("phone-screen");(n=document.getElementById("m-add-modal"))==null||n.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#f2f2f7;flex-shrink:0;border-bottom:.5px solid rgba(0,0,0,.1)">
      <span style="font-size:17px;font-weight:700">Ajouter</span>
      <button id="m-add-close" style="width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.07);border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <div style="overflow-y:auto;flex:1;padding:12px 16px">
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon exploitation</div>
        ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"}].map(o=>`
          <button class="m-add-row" data-action="${o.action}" style="display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08);text-align:left">
            <i class="bi ${o.icon}" style="color:#0172A4;width:22px;text-align:center;flex-shrink:0"></i>
            <span>${o.label}</span>
          </button>`).join("")}
      </div>
      ${e?`
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon réseau</div>
        <button class="m-add-row" data-action="adherent" style="display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08);text-align:left">
          <i class="bi bi-building" style="color:#0172A4;width:22px;text-align:center;flex-shrink:0"></i>
          <span>Adhérent</span>
        </button>
      </div>`:""}
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(o=>{o.addEventListener("click",()=>{var s;t.remove(),(o.dataset.action==="note"||o.dataset.action==="traitement")&&((s=window.openJournalModal)==null||s.call(window,o.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=On;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});Yi("param-compte");export{ie as a,re as p,oe as s};
