import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as P}from"./plots-kiLnwOqV.js";import{s as I}from"./sensors-C_yA0hbg.js";import{n as B}from"./network-YzWdS0n_.js";import{o as F}from"./orgs-Cx4wNzLL.js";const le={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Pe=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],oe=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let O={};function H(e){var n;const s=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function W({title:e,body:s,onDone:t,doneLabel:n="OK"}){var i;const d=document.getElementById("phone-screen");(i=document.querySelector(".m-sheet-overlay"))==null||i.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${n}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,a.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const l=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",l),a.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),l()}),a.addEventListener("click",o=>{o.target===a&&l()}),a}function re(e,s,t){const n=document.createElement("div");n.innerHTML=`<input class="m-sheet-input" type="text" value="${s}" placeholder="${e}">`;const d=n.querySelector("input");W({title:e,body:n,doneLabel:"Enregistrer",onDone:()=>{t(d.value.trim()),H("Enregistré")}}),setTimeout(()=>d.focus(),300)}function ce(e,s,t,n){const d=document.createElement("div");d.innerHTML=s.map((l,i)=>`
    <div class="m-sheet-option${l===t?" m-sheet-option--active":""}" data-i="${i}">
      <span>${l}</span>
      ${l===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const a=W({title:e,body:d,doneLabel:"Fermer",onDone:()=>{}});d.querySelectorAll(".m-sheet-option").forEach(l=>{l.addEventListener("click",()=>{n(s[+l.dataset.i]),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280),H("Enregistré")})})}function Ie(e,s){const t=document.createElement("div"),n=()=>{var d;t.innerHTML=e.map((a,l)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${l}" data-f="label" value="${a.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${l}" data-f="numero" value="${a.numero}" placeholder="+33 6…">
        </div>
        ${l>0?`<button class="m-sheet-remove" data-i="${l}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(a=>{a.addEventListener("input",()=>{e[+a.dataset.i][a.dataset.f]=a.value})}),t.querySelectorAll(".m-sheet-remove").forEach(a=>{a.addEventListener("click",()=>{e.splice(+a.dataset.i,1),n()})}),(d=t.querySelector(".m-sheet-add-phone"))==null||d.addEventListener("click",()=>{e.push({label:"",numero:""}),n()})};n(),W({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{s(e),H("Enregistré")}})}function qe(e,s,t){const n=document.createElement("div");n.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,n.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var a;(a=navigator.clipboard)==null||a.writeText(e.value).catch(()=>{}),H("Clé copiée !")});const d=W({title:"Clé API",body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const a=s.findIndex(l=>l.id===e.id);a!==-1&&s.splice(a,1),d.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{d.remove(),t()},280),H("Clé supprimée")})}function je(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function He(e){const s=document.createElement("div");s.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=s.querySelector("input");W({title:"Nouvelle clé API",body:s,doneLabel:"Générer",onDone:()=>{const n=t.value.trim();if(!n){H("Entrez un nom");return}const d={id:Date.now(),name:n,created:new Date().toLocaleDateString("fr-FR"),value:je()};e(d),H("Clé générée")}}),setTimeout(()=>t.focus(),300)}function Re(e,s){O={profile:JSON.parse(JSON.stringify(le[s]||le.admin)),langue:"Français",unites:oe[0]};const n=localStorage.getItem("mobile_avatarUrl")||null;function d(){const l=O.profile,i=n?`<img src="${n}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${l.initials}</span>`,o=l.apiKeys.map(c=>`
      <div class="m-list-row" data-key-id="${c.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${c.name}</span>
          <span class="m-list-row-sub">créée le ${c.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),m=l.phones.map((c,h)=>`
      <div class="m-list-row${h===l.phones.length-1&&l.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${c.label||"Numéro "+(h+1)}</span>
        <span class="m-list-row-value">${c.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");e.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${i}</div>
        <div class="m-compte-name">${l.prenom} ${l.nom}</div>
        <label class="m-compte-avatar-btn">
          <input type="file" accept="image/*" id="m-avatar-upload" hidden>
          Changer la photo
        </label>
      </div>

      <div class="m-list-section-header">Identité</div>
      <div class="m-list">
        <div class="m-list-row" data-action="prenom">
          <span class="m-list-row-label">Prénom</span>
          <span class="m-list-row-value">${l.prenom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="nom">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${l.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Contact</div>
      <div class="m-list">
        <div class="m-list-row" data-action="email">
          <span class="m-list-row-label">Email</span>
          <span class="m-list-row-value" style="font-size:13px">${l.email} <i class="bi bi-check-circle-fill" style="color:#30d158;font-size:10px"></i></span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        ${m}
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
          <span class="m-list-row-value" id="val-langue">${O.langue}</span>
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
        ${o}
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
    `,a()}function a(){var i;const l=O.profile;(i=e.querySelector("#m-avatar-upload"))==null||i.addEventListener("change",o=>{const m=o.target.files[0];if(!m)return;const c=new FileReader;c.onload=h=>{localStorage.setItem("mobile_avatarUrl",h.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${h.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},c.readAsDataURL(m)}),e.querySelectorAll(".m-list-row[data-action]").forEach(o=>{o.addEventListener("click",()=>{switch(o.dataset.action){case"prenom":re("Prénom",l.prenom,m=>{l.prenom=m,d()});break;case"nom":re("Nom",l.nom,m=>{l.nom=m,d()});break;case"email":W({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${l.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>H("Fonctionnalité à venir")});break;case"phones":Ie(l.phones,m=>{l.phones=m,d()});break;case"mdp":W({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>H("Fonctionnalité à venir")});break;case"langue":ce("Langue",Pe,O.langue,m=>{O.langue=m,e.querySelector("#val-langue").textContent=m});break;case"unites":ce("Unités",oe,O.unites,m=>{O.unites=m,e.querySelector("#val-unites").textContent=m.split(" ")[0]});break;case"gen-key":He(m=>{l.apiKeys.push(m),d()});break;case"delete":H("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(o=>{o.addEventListener("click",()=>{const m=l.apiKeys.find(c=>c.id===+o.dataset.keyId);m&&qe(m,l.apiKeys,d)})}),e.querySelectorAll(".m-toggle input[data-notif]").forEach(o=>{o.addEventListener("change",()=>H("Préférence enregistrée"))})}d()}function j(e){var n;const s=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ne({title:e,body:s,doneLabel:t="Fermer",onDone:n}={}){var i;const d=document.getElementById("phone-screen");(i=document.querySelector(".m-sheet-overlay"))==null||i.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const l=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",l),a.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),l()}),a.addEventListener("click",o=>{o.target===a&&l()}),a}const _e=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Fe=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],De={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité air","temp-humide":"Température humide","temp-seche":"Température sèche"},Ne={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function de(e){if(!e)return"—";const[s,t,n]=e.split("-");return`${n}/${t}/${s}`}function Oe(e){const s=e.sensorIds.map(n=>{const d=I.find(a=>a.id===n);return d?`${d.model} ${d.serial}`:null}).filter(Boolean),t=e.parcelIds.map(n=>{const d=P.find(a=>a.id===n);return(d==null?void 0:d.name)||null}).filter(Boolean);return[...s,...t]}function Be(e,s){var l;let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const n=[...s==="adherent"?Fe:_e];function d(){if(!n.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=n.map(i=>{var h;const o=Oe(i),m=Ne[i.metric]||"bi-bell",c=i.statut==="actif";return`
        <div class="m-alert-card" data-id="${i.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${c?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${m}"></i>
            </div>
            <span class="m-alert-name">${i.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${c?"checked":""} data-id="${i.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${De[i.metric]||i.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Cibles</span>
              <span class="m-alert-row-val">${o.length?o.join(", "):"—"}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${de(i.lastTriggered)}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Créée le</span>
              <span class="m-alert-row-val">${de(i.created)}</span>
            </div>
            ${(h=i.phones)!=null&&h.length?`
            <div class="m-alert-row m-alert-row--last">
              <span class="m-alert-row-label">Téléphone(s)</span>
              <span class="m-alert-row-val">${i.phones.join(", ")}</span>
            </div>`:'<div class="m-alert-row--last"></div>'}
          </div>
        </div>`}).join(""),a()}function a(){t.querySelectorAll(".m-alert-toggle input").forEach(i=>{i.addEventListener("change",o=>{o.stopPropagation();const m=+i.dataset.id,c=n.find(h=>h.id===m);c&&(c.statut=i.checked?"actif":"inactif",d(),j(`Alerte ${i.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-card").forEach(i=>{i.addEventListener("click",o=>{if(o.target.closest(".m-alert-toggle"))return;const m=+i.dataset.id,c=n.find(r=>r.id===m);if(!c)return;const h=document.createElement("div");h.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const u=ne({title:c.name,body:h,doneLabel:"Fermer",onDone:()=>{}});h.querySelector("#al-edit").addEventListener("click",()=>{u.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{u.remove(),j("Modification à venir")},280)}),h.querySelector("#al-delete").addEventListener("click",()=>{const r=n.findIndex(v=>v.id===m);r!==-1&&n.splice(r,1),u.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{u.remove(),d()},280),j("Alerte supprimée")})})})}(l=e.querySelector(".m-navbar-action"))==null||l.addEventListener("click",()=>{j("Création d'alerte — à venir")}),d()}const We={admin:100,adherent:1},q=[{id:"bilan_hydrique",title:"Bilan hydrique",icon:"bi-droplet-fill",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun-fill",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Données temps-réel",icon:"bi-activity",color:"#ff9f0a",active:!1,available:!1,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#bf5af2",active:!1,available:!1,fixed:!1},{id:"capteurs_fav",title:"Capteurs favoris",icon:"bi-star-fill",color:"#ff9f0a",active:!1,available:!1,fixed:!1},{id:"parcelles_fav",title:"Parcelles favorites",icon:"bi-bookmark-fill",color:"#30d158",active:!1,available:!1,fixed:!1},{id:"mon_secteur",title:"Mon secteur",icon:"bi-geo-alt-fill",color:"#ff6b6b",active:!1,available:!1,fixed:!1},{id:"traitements",title:"Traitements phytosanitaires",icon:"bi-shield-fill",color:"#4ecdc4",active:!1,available:!1,fixed:!1},{id:"cultures",title:"Cultures & Stades phénologiques",icon:"bi-flower1",color:"#a2c4c9",active:!1,available:!1,fixed:!1},{id:"evenements",title:"Capteurs avec événement en cours",icon:"bi-exclamation-triangle-fill",color:"#ff3b30",active:!1,available:!1,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3-fill",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Support",icon:"bi-question-circle-fill",color:"#30d158",active:!0,available:!0,fixed:!0}];function me(e){var n;const s=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function X({title:e,body:s,doneLabel:t="Fermer",onDone:n}={}){var i;const d=document.getElementById("phone-screen");(i=document.querySelector(".m-sheet-overlay"))==null||i.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const l=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",l),a.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),l()}),a.addEventListener("click",o=>{o.target===a&&l()}),a}const ue=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#45b7d1"}];function pe(){return[0,1,2].map(e=>{const s=new Date;s.setDate(s.getDate()+e);const t=ue[Math.floor(Math.random()*ue.length)],n=t.label==="Pluie"||t.label==="Averses",d=Math.round(8+Math.random()*8),a=Math.round(16+Math.random()*14);return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":s.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:s.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:n?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:d,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:a,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35)}})}function ze(e){const s=Math.round(80+e.area*8),t=Math.round(s*(.35+Math.random()*.45)),n=Math.round(18+Math.random()*22),d=Math.round(Math.random()*20),a=Math.max(0,t-n+d),l=a<t?t-a:0;return{j0:t,j7:a,bilan:l}}const ae=8;function ve(e,s=!1){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const n=(s?e:e.slice(0,ae)).map(a=>{const{j0:l,j7:i,bilan:o}=ze(a);return`
      <div class="m-bh-th-n">${a.name}</div>
      <div class="m-bh-td">${l}</div>
      <div class="m-bh-td">${i}</div>
      <div class="m-bh-td">${o>0?`${o} mm`:""}</div>`}).join(""),d=!s&&e.length>ae?`<button class="m-bh-expand" id="bh-expand">Afficher les ${e.length-ae} autres parcelles <i class="bi bi-chevron-down"></i></button>`:"";return`
    <div class="m-bh-table">
      <div class="m-bh-th"></div>
      <div class="m-bh-th">J0</div>
      <div class="m-bh-th">J+7</div>
      <div class="m-bh-th">🪣</div>
      ${n}
    </div>
    ${d}`}function Ve(e,s,t){const n=e.map(i=>{const o=[i.name,i.crop,i.ville].filter(Boolean).join(" · ");return`<option value="p-${i.id}">${o}</option>`}).join(""),d=s.map(i=>`<option value="s-${i.id}">${i.model} — ${i.serial}</option>`).join(""),a=`
    <optgroup label="Parcelles">${n}</optgroup>
    ${d?`<optgroup label="Capteurs">${d}</optgroup>`:""}`,l=t.map((i,o)=>{const m=`${i.dayLabel.charAt(0).toUpperCase()+i.dayLabel.slice(1)} · ${i.dateStr}`;return`
    <div class="m-prev-card" data-day="${o}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${i.icon}" style="color:${i.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${m}</span>
          <span class="m-prev-card-cond">${i.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-card-body">
        <div class="m-prev-row"><span>Pluie</span><strong>${i.pluie} mm</strong></div>
        <div class="m-prev-row"><span>T° min</span><strong>${i.tMin}°C <em>${i.tMinHeure}</em></strong></div>
        <div class="m-prev-row"><span>T° max</span><strong>${i.tMax}°C <em>${i.tMaxHeure}</em></strong></div>
        <div class="m-prev-row"><span>Humidité</span><strong>${i.humMoy}%</strong></div>
        <div class="m-prev-row"><span>Vent</span><strong>${i.ventMoy}/${i.ventRafales} km/h</strong></div>
        <div class="m-prev-row m-prev-row--last"><span>Évapotranspiration</span><strong>${i.etp} mm</strong></div>
      </div>
    </div>`}).join("");return`
    <select class="m-prev-select">${a}</select>
    <div class="m-prev-cards">${l}</div>`}function Ge(){const e=P.map(n=>n.orgId).filter((n,d,a)=>a.indexOf(n)===d&&n!==100).length,s=I.length,t=P.length;return`
    <div class="m-reseau-name">${B.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${e}</strong><span>Adhérents</span></div>
      <div class="m-reseau-stat"><strong>${t}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${s}</strong><span>Capteurs</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${B.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${B.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${B.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${B.siege.adresse}, ${B.siege.codePostal} ${B.siege.ville}</span></div>
    </div>`}function Je(){return`
    <button class="m-support-chat-btn" id="open-chat-btn" type="button">
      <div class="m-support-chat-avatar"><i class="bi bi-robot"></i></div>
      <div class="m-support-chat-info">
        <span>Assistant Weenat</span>
        <em>Réponse immédiate</em>
      </div>
      <i class="bi bi-chevron-right" style="color:#c7c7cc"></i>
    </button>
    <div class="m-support-list">
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
    </a>`}const he=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Ue(){var m;const e=document.getElementById("phone-screen");(m=document.querySelector(".m-sheet-overlay"))==null||m.remove();const s=document.createElement("div");s.className="m-sheet-overlay m-sheet-overlay--tall",s.innerHTML=`
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
    </div>`,e.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const t=s.querySelector("#chat-messages"),n=s.querySelector("#chat-input"),d=s.querySelector("#chat-send"),a=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#chat-close").addEventListener("click",a),s.addEventListener("click",c=>{c.target===s&&a()});function l(c,h){const u=document.createElement("div");u.className=`m-chat-msg m-chat-msg--${h}`,u.innerHTML=`<div class="m-chat-bubble">${c}</div>`,t.appendChild(u),t.scrollTop=t.scrollHeight}function i(){const c=document.createElement("div");return c.className="m-chat-msg m-chat-msg--bot m-chat-typing",c.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(c),t.scrollTop=t.scrollHeight,c}function o(){const c=n.value.trim();if(!c)return;l(c,"user"),n.value="",d.disabled=!0;const h=i();setTimeout(()=>{h.remove();const u=he[Math.floor(Math.random()*he.length)];l(u,"bot"),d.disabled=!1,n.focus()},1200+Math.random()*800)}d.addEventListener("click",o),n.addEventListener("keydown",c=>{c.key==="Enter"&&o()}),setTimeout(()=>n.focus(),350)}function Ye(e,s){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const n=We[s]||1,d=n===100?P:P.filter(r=>r.orgId===n),a=new Set(d.map(r=>r.id)),l=I.filter(r=>a.has(r.parcelId));let i=pe();function o(r,v){const g=r.fixed?"":`<button class="m-widget-menu" data-widget="${r.id}" type="button">•••</button>`;return`
      <div class="m-widget" data-widget="${r.id}">
        <div class="m-widget-hd">
          <div class="m-widget-icon-wrap" style="background:${r.color}20;color:${r.color}">
            <i class="bi ${r.icon}"></i>
          </div>
          <span class="m-widget-title">${r.title}</span>
          ${g}
        </div>
        <div class="m-widget-bd">${v}</div>
      </div>`}function m(){i=pe();const r=q.filter(g=>g.active&&!g.fixed),v=q.filter(g=>g.active&&g.fixed);t.innerHTML=`
      ${[...r,...v].map(g=>{let b="";return g.id==="bilan_hydrique"?b=ve(d,!1):g.id==="previsions"?b=Ve(d,l,i):g.id==="mon_reseau"?b=Ge():g.id==="support"&&(b=Je()),o(g,b)}).join("")}
      <div style="height:24px"></div>`,c()}function c(){var r,v,g;(r=e.querySelector(".m-navbar-action"))==null||r.addEventListener("click",u),(v=t.querySelector("#bh-expand"))==null||v.addEventListener("click",()=>{const b=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');b&&(b.innerHTML=ve(d,!0))}),(g=t.querySelector("#open-chat-btn"))==null||g.addEventListener("click",Ue),t.querySelectorAll(".m-prev-card").forEach(b=>{b.addEventListener("click",()=>{const w=i[+b.dataset.day];if(!w)return;const T=`
          <div class="m-prev-detail">
            <div class="m-prev-detail-top">
              <i class="bi ${w.icon}" style="color:${w.color};font-size:40px"></i>
              <div>
                <div class="m-prev-detail-cond">${w.label}</div>
                <div class="m-prev-detail-date">${w.dateStr}</div>
              </div>
            </div>
            <div class="m-prev-detail-grid">
              <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><span>Pluie</span><strong>${w.pluie} mm</strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-droplet-half"></i><span>ETP</span><strong>${w.etp} mm</strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><span>T° min</span><strong>${w.tMin}°C <small>${w.tMinHeure}</small></strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-thermometer-high"></i><span>T° max</span><strong>${w.tMax}°C <small>${w.tMaxHeure}</small></strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-moisture"></i><span>Humidité</span><strong>${w.humMoy}%</strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><span>Vent moy.</span><strong>${w.ventMoy} km/h</strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><span>Rafales</span><strong>${w.ventRafales} km/h</strong></div>
            </div>
          </div>`;X({title:w.dayLabel,body:T,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-widget-menu").forEach(b=>{b.addEventListener("click",w=>{w.stopPropagation();const T=q.find(A=>A.id===b.dataset.widget);if(!T)return;const k=document.createElement("div");k.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="menu-config">Configurer</a>
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const M=X({title:T.title,body:k,doneLabel:"Fermer",onDone:()=>{}});k.querySelector("#menu-config").addEventListener("click",()=>{M.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{M.remove(),me("Configuration à venir")},280)}),k.querySelector("#menu-move").addEventListener("click",()=>{M.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{M.remove(),h()},280)}),k.querySelector("#menu-remove").addEventListener("click",()=>{T.active=!1,M.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{M.remove(),m()},280),me("Widget retiré")})})})}function h(){const r=document.createElement("div"),v=()=>q.filter(b=>b.active&&!b.fixed),g=()=>{const b=v();r.innerHTML=b.map((w,T)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${w.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${T}" data-dir="-1" ${T===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${T}" data-dir="1" ${T===b.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),r.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(w=>{w.addEventListener("click",()=>{const T=v(),k=+w.dataset.i,M=k+ +w.dataset.dir,A=q.indexOf(T[k]),$=q.indexOf(T[M]);[q[A],q[$]]=[q[$],q[A]],g(),m()})})};g(),X({title:"Réorganiser les widgets",body:r,doneLabel:"Fermer",onDone:()=>{}})}function u(){const r=document.createElement("div"),v=()=>{const g=q.filter(b=>!b.fixed);r.innerHTML=g.map(b=>`
        <div class="m-catalog-row${b.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${b.color}20;color:${b.color}"><i class="bi ${b.icon}"></i></div>
          <span class="m-catalog-title">${b.title}</span>
          ${b.available?`<button class="m-catalog-toggle${b.active?" m-catalog-toggle--on":""}" data-cid="${b.id}" type="button">
                <i class="bi ${b.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),r.querySelectorAll("[data-cid]").forEach(b=>{b.addEventListener("click",()=>{const w=q.find(T=>T.id===b.dataset.cid);w&&(w.active=!w.active,v(),m())})})};v(),X({title:"Widgets disponibles",body:r,doneLabel:"Fermer",onDone:()=>{}})}m()}const te=[];function ye(e){const s=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),te.push(t),t}function $e(){const e=te.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}window.addEventListener("m-tab-change",()=>{te.forEach(e=>e.remove()),te.length=0});const Ke={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#c090e0",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#80c8e8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité air",unit:"%",color:"#4ecdc4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1},humectation:{label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}},Xe={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function we(e,s){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:s},(n,d)=>{const a=d/s*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const l=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,l))})}const xe={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},Me={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Ze(e,s,t,n,d,a=20){const l=Me[e]||10080,i=new Date,o=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,m=4,c=s-t-n,h=d-a;return Array.from({length:m+1},(u,r)=>{const v=r/m,g=new Date(i.getTime()-(1-v)*l*6e4),b=(t+v*c).toFixed(1),w=r===0?"start":r===m?"end":"middle";return[`<line x1="${b}" y1="${h}" x2="${b}" y2="${h+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${b}" y="${d-3}" text-anchor="${w}" font-size="9" fill="#8e8e93" font-family="-apple-system">${o(g)}</text>`].join("")}).join("")}function Qe(e,s,t,n="7d"){const d=xe[n]||60,a=we(e,d),l=320,i=100,o=34,m=6,c=10,h=20,u=l-o-m,r=i-c-h,v=t?0:Math.min(...a),g=Math.max(...a,v+.001),b=g-v,w=f=>o+f/(a.length-1)*u,T=f=>c+r-(f-v)/b*r,k=`g${Math.random().toString(36).slice(2,8)}`,M=[0,.5,1].map(f=>{const S=v+f*b,C=c+r-f*r;return`<text x="${o-3}" y="${(C+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${S<10?S.toFixed(1):Math.round(S)}</text>`}).join(""),A=[.25,.5,.75].map(f=>{const S=(c+r-f*r).toFixed(1);return`<line x1="${o}" y1="${S}" x2="${l-m}" y2="${S}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),$=`<line x1="${o}" y1="${c+r}" x2="${l-m}" y2="${c+r}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,x=Ze(n,l,o,m,i);if(t){const f=u/a.length*.7,S=a.map((C,R)=>{const _=(C-v)/b*r,Ce=c+r-_;return`<rect x="${(w(R)-f/2).toFixed(1)}" y="${Ce.toFixed(1)}" width="${f.toFixed(1)}" height="${_.toFixed(1)}" fill="${s}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${l} ${i}" width="100%" height="${i}" preserveAspectRatio="none">${M}${A}${$}${x}${S}</svg>`}const p=a.map((f,S)=>[w(S),T(f)]).map(([f,S],C)=>`${C?"L":"M"}${f.toFixed(1)},${S.toFixed(1)}`).join(" "),E=`${p} L${w(a.length-1).toFixed(1)},${(c+r).toFixed(1)} L${o},${(c+r).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:a.map(f=>+f.toFixed(2)),minV:+v.toFixed(2),maxV:+g.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${l} ${i}" width="100%" height="${i}" preserveAspectRatio="none">
      <defs><linearGradient id="${k}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${M}${A}${$}
      <path d="${E}" fill="url(#${k})"/>
      <path d="${p}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${x}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function et(e,s,t){if(!t)return"";const n=xe[s]||60,a=(Me[s]||10080)/(n*60),l=we(e,n);let i=[];if(t==="temp"){const o=l.reduce((c,h)=>c+Math.max(0,h),0)*(a/24),m=l.filter(c=>c<7).length*a;i=[{label:"Degrés jours",val:`${Math.round(o)} DJ`},{label:"Heures de froid",val:`${Math.round(m)} h`}]}else if(t==="pluie")i=[{label:"Cumul pluie",val:`${l.reduce((m,c)=>m+c,0).toFixed(1)} mm`}];else if(t==="rayo"){const o=l.filter(m=>m>120).length*a;i=[{label:"Ensoleillement",val:`${Math.round(o)} h`}]}else if(t==="etp")i=[{label:"ETP cumulée",val:`${(l.reduce((m,c)=>m+c,0)*(a/24)).toFixed(1)} mm`}];else if(t==="hws"){const o=l.filter(m=>m>50).length*a;i=[{label:"Heures d'humectation",val:`${Math.round(o)} h`}]}return i.length?`<div class="m-chart-cumuls">${i.map(o=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${o.label}</span>
      <span class="m-chart-cumul-val">${o.val}</span>
    </div>`).join("")}</div>`:""}function tt(e,s){const t=Ke[e];return t?`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${t.color}">${t.label}</span>
      </div>
      ${Qe(e,t.color,t.cumul,s)}
      ${et(e,s,t.cumulsType)}
    </div>`:""}function st(e){const s=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!s.vals)return;const{vals:t,minV:n,maxV:d}=s,a=e.querySelector(".m-chart-tip"),l=e.querySelector(".m-chart-crosshair"),i=e.dataset.color||"#0172A4";function o(c){const h=e.getBoundingClientRect(),u=Math.max(0,Math.min(1,(c-h.left)/h.width)),r=Math.round(u*(t.length-1)),v=t[r],g=u*100;l.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${g}%;width:1px;background:${i};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(g,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=v<10?v.toFixed(1):String(Math.round(v))}function m(){l.style.display="none",a.style.display="none"}e.addEventListener("pointermove",c=>{c.preventDefault(),o(c.clientX)}),e.addEventListener("pointerdown",c=>o(c.clientX)),e.addEventListener("pointerup",m),e.addEventListener("pointerleave",m),e.style.cursor="crosshair"}function at(){return`
    <div class="m-detail-section">
      ${["Bilan hydrique","Stades phénologiques","Alertes actives","Données temps-réel"].map(s=>`
        <div class="m-placeholder-widget">
          <span class="m-placeholder-widget-name">${s}</span>
          <button class="m-widget-menu" type="button">•••</button>
        </div>`).join("")}
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
    </div>`}function it(e,s="7d",t="1h"){const n=new Set;e.forEach(a=>{const l=I.find(i=>i.id===a);l&&(Xe[l.model]||[]).forEach(i=>n.add(i))});const d=[...new Set(["etp","rayonnement","temp_rosee",...n])];return`
    <div class="m-period-bar">
      <select class="m-period-sel">
        <option value="365d"${s==="365d"?" selected":""}>365 jours</option>
        <option value="30d"${s==="30d"?" selected":""}>30 jours</option>
        <option value="7d"${s==="7d"?" selected":""}>7 jours</option>
        <option value="hier"${s==="hier"?" selected":""}>Hier</option>
        <option value="1d"${s==="1d"?" selected":""}>Aujourd'hui</option>
        <option value="custom"${s==="custom"?" selected":""}>Personnalisé</option>
      </select>
      <select class="m-step-sel">
        <option value="1h"${t==="1h"?" selected":""}>Horaire</option>
        <option value="1d"${t==="1d"?" selected":""}>Journalier</option>
        <option value="1w"${t==="1w"?" selected":""}>Hebdo</option>
      </select>
    </div>
    <div class="m-detail-section">
      ${d.map(a=>tt(a,s)).join("")}
    </div>`}function nt(e,s,t){const n=t.map(d=>{const a=I.find(l=>l.id===d);return a?`${a.model} — ${a.serial}`:null}).filter(Boolean);return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${e.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-exploitation">
          <span class="m-list-row-label">Exploitation</span>
          <span class="m-list-row-value">${(s==null?void 0:s.name)||"—"}</span>
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
          <span class="m-list-row-value">${(s==null?void 0:s.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="https://maps.apple.com/?q=${encodeURIComponent((s==null?void 0:s.ville)||"")}&sll=${e.lat},${e.lng}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">Configuration</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-env">
          <span class="m-list-row-label">Environnement</span>
          <span class="m-list-row-value">Plein champ</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-irrigation">
          <span class="m-list-row-label">Irrigation</span>
          <span class="m-list-row-value">${e.irrigation||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${e.texture||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${n.length?n.map((d,a)=>`<div class="m-list-row${a===n.length-1?" m-list-row--last":""}">
              <span class="m-list-row-label">${d}</span>
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
    </div>`}function be(e,s=[]){const t=F.find(u=>u.id===e.orgId);let n="widgets",d="7d",a="1h",l=!1;const i=(t==null?void 0:t.ville)||"",o=ye(`
    <div class="m-detail-header">
      <div class="m-detail-row1">
        <div class="m-navbar-logo-mark">W</div>
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Parcelles</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-row2">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <span class="m-d-name">${e.name}</span>
        ${e.crop?`<span class="m-d-sep">·</span><span class="m-d-sub">${e.crop}</span>`:""}
        ${i?`<span class="m-d-sep">·</span><span class="m-d-commune">${i}</span>`:""}
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="widgets">Widgets</button>
      <button class="m-detail-tab" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function m(){const u=o.querySelector("#detail-content");n==="widgets"&&(u.innerHTML=at()),n==="donnees"&&(u.innerHTML=it(s,d,a)),n==="params"&&(u.innerHTML=nt(e,t,s),c()),h()}function c(){const u=window.L;u&&setTimeout(()=>{var g;const r=o.querySelector("#parcel-minimap");if(!r)return;const v=u.map(r,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(v),((g=e.latlngs)==null?void 0:g.length)>=3){const b=u.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(v);v.fitBounds(b.getBounds(),{padding:[8,8]})}else v.setView([e.lat,e.lng],14),u.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(v)},50)}function h(){var u,r,v;(u=o.querySelector(".m-period-sel"))==null||u.addEventListener("change",g=>{d=g.target.value,m()}),(r=o.querySelector(".m-step-sel"))==null||r.addEventListener("change",g=>{a=g.target.value,m()}),o.querySelectorAll(".m-chart-svg-wrap").forEach(g=>st(g)),o.querySelectorAll(".m-list-row[data-action]").forEach(g=>{g.addEventListener("click",()=>j("Fonctionnalité à venir"))}),o.querySelectorAll(".m-widget-menu").forEach(g=>{g.addEventListener("click",b=>{b.stopPropagation(),j("Options widget")})}),(v=o.querySelector(".m-add-widget-btn"))==null||v.addEventListener("click",()=>j("Catalogue de widgets — à venir"))}o.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{o.querySelectorAll(".m-detail-tab").forEach(r=>r.classList.remove("active")),u.classList.add("active"),n=u.dataset.view,m()})}),o.querySelector(".m-detail-back").addEventListener("click",$e),o.querySelector("#d-star").addEventListener("click",()=>{l=!l;const u=o.querySelector("#d-star");u.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",u.style.color=l?"#f5c842":"",j(l?"Ajouté aux favoris":"Retiré des favoris")}),o.querySelector("#d-plus").addEventListener("click",()=>{const u=`
      <button class="m-sheet-option" data-a="widget"><i class="bi bi-grid-1x2"></i> Widget</button>
      <button class="m-sheet-option" data-a="irrigation"><i class="bi bi-droplet"></i> Irrigation</button>
      <button class="m-sheet-option" data-a="capteur"><i class="bi bi-broadcast"></i> Capteur</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" style="color:#8e8e93" data-a="integration">
        <i class="bi bi-plug"></i> Intégration <span style="font-size:11px">(version web uniquement)</span>
      </button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`,r=document.createElement("div");r.innerHTML=u;const v=ne({title:"Ajouter à la parcelle",body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll("[data-a]").forEach(g=>{g.addEventListener("click",()=>{const b=g.dataset.a;v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),j(b==="integration"?"Disponible sur la version web":"Fonctionnalité à venir")},280)})})}),m()}const G=100,lt={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function J(e,s){const t=lt[s];return t?I.some(n=>n.parcelId===e.id&&t.includes(n.model)):!0}const Z=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température air",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité air",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function ot(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function rt(e,s){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const n=s==="admin",d=F.filter(M=>M.id!==G),a=Object.fromEntries(F.map(M=>[M.id,M]));let l=null,i=null;const o={};let m="carte",c="pluie",h="7 derniers jours",u="all";function r(M){const A=`${M}-${c}-${h}`;return A in o||(o[A]=ot(c)),o[A]}function v(M){var A;return((A=a[M.orgId])==null?void 0:A.ville)||null}function g(){return n?u==="all"?P:u===String(G)?P.filter(M=>M.orgId===G):P.filter(M=>String(M.orgId)===u):P.filter(M=>M.orgId===1)}function b(){if(l){try{l.remove()}catch{}l=null,i=null}}function w(){b();const M=Z.find(p=>p.id===c)||Z[0],A=g(),$=n?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${G}"${u===String(G)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${d.map(p=>`<option value="${p.id}"${u===String(p.id)?" selected":""}>${p.name}</option>`).join("")}
      </select>`:"",x=[...A].sort((p,E)=>{const y=J(p,c),f=J(E,c);return y&&!f?-1:!y&&f?1:y?r(E.id)-r(p.id):0}),L=x.length?`<div class="m-plain-list">${x.map(p=>{const E=v(p),y=J(p,c);return`
            <div class="m-plain-row m-tappable" data-plot-id="${p.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${p.name}</span>
                ${E?`<span class="m-plain-city">${E}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${y?"":" m-plain-na"}">${y?`${r(p.id)} ${M.unit}`:"—"}</span>
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';t.innerHTML=`
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${m==="carte"?" m-view-btn--on":""}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${m==="liste"?" m-view-btn--on":""}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${Z.map(p=>`<option value="${p.id}"${p.id===c?" selected":""}>${p.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${M.aggs.map(p=>`<option${p===h?" selected":""}>${p}</option>`).join("")}
          </select>
        </div>
        ${$}
      </div>
      ${m==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${L}</div>`}`,k(),m==="carte"&&T(A,M)}function T(M,A){const $=window.L;$&&setTimeout(()=>{const x=t.querySelector("#parcel-map");if(!x)return;l=$.map(x,{zoomControl:!1,attributionControl:!1}),$.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l);const L=[];M.forEach(p=>{const E=J(p,c)?`${r(p.id)} ${A.unit}`:"—",y=I.filter(_=>_.parcelId===p.id).map(_=>_.id),f=()=>be(p,y),S=[p.lat,p.lng];p.latlngs&&p.latlngs.length>=3?($.polygon(p.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(l).on("click",f),L.push(...p.latlngs)):L.push(S);const C=J(p,c),R=$.circleMarker(S,{radius:C?8:6,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:C?.95:.4}).addTo(l);C&&R.bindTooltip(E,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),R.on("click",f)}),L.length&&(i=L,l.fitBounds(L,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",M=>{M.detail==="parcelles"&&m==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),i!=null&&i.length&&l.fitBounds(i,{padding:[32,32]})},50)});function k(){var M,A,$;t.querySelectorAll(".m-view-btn").forEach(x=>x.addEventListener("click",()=>{m=x.dataset.view,w()})),(M=t.querySelector("#metric-sel"))==null||M.addEventListener("change",x=>{var L;c=x.target.value,h=((L=Z.find(p=>p.id===c))==null?void 0:L.defaultAgg)||"",w()}),(A=t.querySelector("#agg-sel"))==null||A.addEventListener("change",x=>{h=x.target.value,w()}),($=t.querySelector("#org-filter"))==null||$.addEventListener("change",x=>{u=x.target.value,w()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(x=>{x.addEventListener("click",()=>{const L=P.find(E=>E.id===+x.dataset.plotId);if(!L)return;const p=I.filter(E=>E.parcelId===L.id).map(E=>E.id);be(L,p)})})}w()}const Ee={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},ct={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"},dt={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité air",unit:"%",color:"#4ecdc4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité air",unit:"%",color:"#4ecdc4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité air",unit:"%",color:"#4ecdc4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#e07050",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#80c8e8",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}]};function Se(e,s){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:s},(n,d)=>{const a=d/s*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const l=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,l))})}const Le={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function mt(e,s,t,n,d,a=20){const l=Le[e]||10080,i=new Date,o=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,m=4,c=s-t-n,h=d-a;return Array.from({length:m+1},(u,r)=>{const v=r/m,g=new Date(i.getTime()-(1-v)*l*6e4),b=(t+v*c).toFixed(1),w=r===0?"start":r===m?"end":"middle";return[`<line x1="${b}" y1="${h}" x2="${b}" y2="${h+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${b}" y="${d-3}" text-anchor="${w}" font-size="9" fill="#8e8e93" font-family="-apple-system">${o(g)}</text>`].join("")}).join("")}function ut(e,s,t,n="7d"){const d=Ae[n]||60,a=Se(e,d),l=320,i=100,o=34,m=6,c=10,h=20,u=l-o-m,r=i-c-h,v=t?0:Math.min(...a),g=Math.max(...a,v+.001),b=g-v,w=f=>o+f/(a.length-1)*u,T=f=>c+r-(f-v)/b*r,k=`g${Math.random().toString(36).slice(2,8)}`,M=[0,.5,1].map(f=>{const S=v+f*b,C=c+r-f*r;return`<text x="${o-3}" y="${(C+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${S<10?S.toFixed(1):Math.round(S)}</text>`}).join(""),A=[.25,.5,.75].map(f=>`<line x1="${o}" y1="${(c+r-f*r).toFixed(1)}" x2="${l-m}" y2="${(c+r-f*r).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),$=`<line x1="${o}" y1="${c+r}" x2="${l-m}" y2="${c+r}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,x=mt(n,l,o,m,i);if(t){const f=u/a.length*.7;return`<svg viewBox="0 0 ${l} ${i}" width="100%" height="${i}" preserveAspectRatio="none">
      ${M}${A}${$}
      ${a.map((S,C)=>{const R=(S-v)/b*r,_=c+r-R;return`<rect x="${(w(C)-f/2).toFixed(1)}" y="${_.toFixed(1)}" width="${f.toFixed(1)}" height="${R.toFixed(1)}" fill="${s}" opacity=".75" rx="1"/>`}).join("")}
      ${x}
    </svg>`}const p=a.map((f,S)=>[w(S),T(f)]).map(([f,S],C)=>`${C?"L":"M"}${f.toFixed(1)},${S.toFixed(1)}`).join(" "),E=`${p} L${w(a.length-1).toFixed(1)},${(c+r).toFixed(1)} L${o},${(c+r).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:a.map(f=>+f.toFixed(2)),minV:+v.toFixed(2),maxV:+g.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${l} ${i}" width="100%" height="${i}" preserveAspectRatio="none">
      <defs><linearGradient id="${k}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${M}${A}${$}
      <path d="${E}" fill="url(#${k})"/>
      <path d="${p}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${x}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function pt(e){const s=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!s.vals)return;const{vals:t}=s,n=e.querySelector(".m-chart-tip"),d=e.querySelector(".m-chart-crosshair"),a=e.dataset.color||"#0172A4";function l(o){const m=e.getBoundingClientRect(),c=Math.max(0,Math.min(1,(o-m.left)/m.width)),h=Math.round(c*(t.length-1)),u=t[h],r=c*100;d.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${r}%;width:1px;background:${a};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(r,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=u<10?u.toFixed(1):String(Math.round(u))}function i(){d.style.display="none",n.style.display="none"}e.addEventListener("pointermove",o=>{o.preventDefault(),l(o.clientX)}),e.addEventListener("pointerdown",o=>l(o.clientX)),e.addEventListener("pointerup",i),e.addEventListener("pointerleave",i),e.style.cursor="crosshair"}const Ae={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function vt(e,s,t){if(!t)return"";const n=Ae[s]||60,a=(Le[s]||10080)/(n*60),l=Se(e,n);let i=[];if(t==="temp"){const o=l.reduce((c,h)=>c+Math.max(0,h),0)*(a/24),m=l.filter(c=>c<7).length*a;i=[{label:"Degrés jours",val:`${Math.round(o)} DJ`},{label:"Heures de froid",val:`${Math.round(m)} h`}]}else if(t==="pluie")i=[{label:"Cumul pluie",val:`${l.reduce((m,c)=>m+c,0).toFixed(1)} mm`}];else if(t==="rayo"){const o=l.filter(m=>m>120).length*a;i=[{label:"Ensoleillement",val:`${Math.round(o)} h`}]}else if(t==="hws"){const o=l.filter(m=>m>50).length*a;i=[{label:"Heures d'humectation",val:`${Math.round(o)} h`}]}return i.length?`<div class="m-chart-cumuls">${i.map(o=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${o.label}</span>
      <span class="m-chart-cumul-val">${o.val}</span>
    </div>`).join("")}</div>`:""}function ht(e,s="7d",t="1h"){const n=dt[e.model]||[];if(!n.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const d=n.map(a=>`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${a.color}">${a.label}</span>
        </div>
        ${ut(a.id,a.color,a.cumul,s)}
        ${vt(a.id,s,a.cumulsType)}
      </div>`).join("");return`
    <div class="m-period-bar">
      <select class="m-period-sel">
        <option value="365d"${s==="365d"?" selected":""}>365 jours</option>
        <option value="30d"${s==="30d"?" selected":""}>30 jours</option>
        <option value="7d"${s==="7d"?" selected":""}>7 jours</option>
        <option value="hier"${s==="hier"?" selected":""}>Hier</option>
        <option value="1d"${s==="1d"?" selected":""}>Aujourd'hui</option>
        <option value="custom"${s==="custom"?" selected":""}>Personnalisé</option>
      </select>
      <select class="m-step-sel">
        <option value="1h"${t==="1h"?" selected":""}>Horaire</option>
        <option value="1d"${t==="1d"?" selected":""}>Journalier</option>
        <option value="1w"${t==="1w"?" selected":""}>Hebdo</option>
      </select>
    </div>
    <div class="m-detail-section">${d}</div>`}function bt(e){const s=e.parcelId?P.find(l=>l.id===e.parcelId):null,t=s?F.find(l=>l.id===s.orgId):null,n=e.networkQuality||0,d=n>70?"#30d158":n>40?"#ff9f0a":"#ff3b30",a=e.event?[e.event]:[];return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${ct[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${Ee[e.model]||e.model}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">N° de série</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:13px">${e.serial}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Réseau télécom</span>
          <span class="m-list-row-value">${e.telecom||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-exploitation">
          <span class="m-list-row-label">Exploitation</span>
          <span class="m-list-row-value">${(t==null?void 0:t.name)||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation</div>
      <div class="m-list">
        ${s?'<div id="sensor-minimap" class="m-minimap-container"></div>':""}
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${(t==null?void 0:t.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="https://maps.apple.com/?q=${encodeURIComponent((t==null?void 0:t.ville)||"")}&sll=${(s==null?void 0:s.lat)||0},${(s==null?void 0:s.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">État</div>
      <div class="m-list">
        ${a.length?a.map(l=>`<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${l}</span></div>`).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${d};font-weight:600">${n}%</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Émissions (7j)</span>
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

      <div class="m-list-section-header">Liens</div>
      <div class="m-list">
        ${s?`<div class="m-list-row"><span class="m-list-row-label">Parcelle</span><span class="m-list-row-value">${s.name}</span><i class="bi bi-chevron-right m-list-chevron"></i></div>`:""}
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
    </div>`}function fe(e){var h;const s=e.parcelId?P.find(u=>u.id===e.parcelId):null;let t="donnees",n="7d",d="1h",a=!1;const l=s&&((h=F.find(u=>u.id===s.orgId))==null?void 0:h.ville)||"",i=ye(`
    <div class="m-detail-header">
      <div class="m-detail-row1">
        <div class="m-navbar-logo-mark">W</div>
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-row2">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <span class="m-d-name">${e.serial}</span>
        <span class="m-d-sep">·</span><span class="m-d-sub">${Ee[e.model]||e.model}</span>
        ${l?`<span class="m-d-sep">·</span><span class="m-d-commune">${l}</span>`:""}
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function o(){const u=i.querySelector("#detail-content");t==="donnees"&&(u.innerHTML=ht(e,n,d)),t==="params"&&(u.innerHTML=bt(e),m()),c()}function m(){const u=window.L;!u||!s||setTimeout(()=>{const r=i.querySelector("#sensor-minimap");if(!r)return;const v=u.map(r,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(v),v.setView([s.lat,s.lng],15),u.circleMarker([s.lat,s.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(v)},50)}function c(){var u,r;(u=i.querySelector(".m-period-sel"))==null||u.addEventListener("change",v=>{n=v.target.value,o()}),(r=i.querySelector(".m-step-sel"))==null||r.addEventListener("change",v=>{d=v.target.value,o()}),i.querySelectorAll(".m-chart-svg-wrap").forEach(v=>pt(v)),i.querySelectorAll(".m-list-row[data-action]").forEach(v=>{v.addEventListener("click",()=>j("Fonctionnalité à venir"))})}i.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{i.querySelectorAll(".m-detail-tab").forEach(r=>r.classList.remove("active")),u.classList.add("active"),t=u.dataset.view,o()})}),i.querySelector(".m-detail-back").addEventListener("click",$e),i.querySelector("#d-star").addEventListener("click",()=>{a=!a;const u=i.querySelector("#d-star");u.querySelector("i").className=a?"bi bi-star-fill":"bi bi-star",u.style.color=a?"#f5c842":"",j(a?"Ajouté aux favoris":"Retiré des favoris")}),i.querySelector("#d-plus").addEventListener("click",()=>{const u=`
      <button class="m-sheet-option" data-a="plot"><i class="bi bi-map"></i> Parcelle</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" data-a="maintenance"><i class="bi bi-tools"></i> Opération de maintenance</button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`,r=document.createElement("div");r.innerHTML=u;const v=ne({title:"Ajouter au capteur",body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll("[data-a]").forEach(g=>{g.addEventListener("click",()=>{v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),j("Fonctionnalité à venir")},280)})})}),o()}const V=100,ge=1,ie=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],ft={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},gt={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function Q(e,s){return(gt[e]||[]).includes(s)}function yt(e){return ft[e]||e}const ee=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function $t(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function wt(e,s){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const n=s==="admin",d=F.filter($=>$.id!==V),a=Object.fromEntries(P.map($=>[$.id,$])),l=Object.fromEntries(F.map($=>[$.id,$]));let i=null,o=null;const m={};let c="carte",h="pluie",u="7 derniers jours",r="all";function v($){const x=`${$}-${h}-${u}`;return x in m||(m[x]=$t(h)),m[x]}function g(){if(n){if(r==="all")return I;if(r===String(V)){const E=new Set(P.filter(y=>y.orgId===V).map(y=>y.id));return I.filter(y=>E.has(y.parcelId))}const p=new Set(P.filter(E=>String(E.orgId)===r).map(E=>E.id));return I.filter(E=>p.has(E.parcelId))}const $=new Set(P.filter(p=>p.orgId===ge).map(p=>p.id)),x=I.filter(p=>$.has(p.parcelId)),L=I.filter(p=>!$.has(p.parcelId)&&ie.includes(p.model));return r==="mine"?x:r==="network"?L:[...x,...L]}function b($){const x=$.parcelId?a[$.parcelId]:null;if(!x)return null;const L=($.id*7919%1e3-500)/1e6,p=($.id*6271%1e3-500)/1e6;return{lat:x.lat+L,lng:x.lng+p,name:x.name}}function w($){var L;const x=$.parcelId?a[$.parcelId]:null;return x&&((L=l[x.orgId])==null?void 0:L.ville)||null}function T(){if(i){try{i.remove()}catch{}i=null,o=null}}function k(){T();const $=ee.find(y=>y.id===h)||ee[0],x=g();let L;if(n)L=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${V}"${r===String(V)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${d.map(y=>`<option value="${y.id}"${r===String(y.id)?" selected":""}>${y.name}</option>`).join("")}
        </select>`;else{const y=F.find(S=>S.id===ge),f=F.find(S=>S.id===V);L=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${r==="all"?" selected":""}>Tout le réseau</option>
          <option value="mine"${r==="mine"?" selected":""}>${(y==null?void 0:y.name)||"Mon organisation"}</option>
          <option value="network"${r==="network"?" selected":""}>${(f==null?void 0:f.name)||"Breiz'Agri Conseil"}</option>
        </select>`}const p=[...x].sort((y,f)=>{const S=Q(y.model,h),C=Q(f.model,h);return S&&!C?-1:!S&&C?1:S?v(f.id)-v(y.id):0}),E=p.length?`<div class="m-plain-list">${p.map(y=>{const f=ie.includes(y.model),C=Q(y.model,h)?`<span class="m-sensor-val">${v(y.id)} ${$.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${y.id}">
              <div class="m-sensor-icon" style="background:${f?"#0172A420":"#5b8dd920"};color:${f?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${yt(y.model)}</span>
                <span class="m-sensor-sub">${y.serial}${w(y)?` · ${w(y)}`:""}</span>
              </div>
              ${C}
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
            ${ee.map(y=>`<option value="${y.id}"${y.id===h?" selected":""}>${y.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${$.aggs.map(y=>`<option${y===u?" selected":""}>${y}</option>`).join("")}
          </select>
        </div>
        ${L}
      </div>
      ${c==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${E}</div>`}`,A(),c==="carte"&&M(x,$)}function M($,x){const L=window.L;L&&setTimeout(()=>{const p=t.querySelector("#sensor-map");if(!p)return;i=L.map(p,{zoomControl:!1,attributionControl:!1}),L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(i);const E=[];$.forEach(y=>{const f=b(y);if(!f)return;const S=Q(y.model,h),C=ie.includes(y.model),R=L.circleMarker([f.lat,f.lng],{radius:S?10:7,color:"#fff",weight:2,fillColor:C?"#0172A4":"#5b8dd9",fillOpacity:S?.95:.45}).addTo(i);S&&R.bindTooltip(`${v(y.id)} ${x.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),R.on("click",()=>fe(y)),E.push([f.lat,f.lng])}),E.length&&(o=E,i.fitBounds(E,{padding:[32,32]})),i.invalidateSize()},0)}window.addEventListener("m-tab-change",$=>{$.detail==="capteurs"&&c==="carte"&&i&&setTimeout(()=>{i.invalidateSize(),o!=null&&o.length&&i.fitBounds(o,{padding:[32,32]})},50)});function A(){var $,x,L;t.querySelectorAll(".m-view-btn").forEach(p=>p.addEventListener("click",()=>{c=p.dataset.view,k()})),($=t.querySelector("#metric-sel"))==null||$.addEventListener("change",p=>{var E;h=p.target.value,u=((E=ee.find(y=>y.id===h))==null?void 0:E.defaultAgg)||"",k()}),(x=t.querySelector("#agg-sel"))==null||x.addEventListener("change",p=>{u=p.target.value,k()}),(L=t.querySelector("#org-filter"))==null||L.addEventListener("change",p=>{r=p.target.value,k()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(p=>{p.addEventListener("click",()=>{const E=I.find(y=>y.id===+p.dataset.sensorId);E&&fe(E)})})}k()}const xt=new URLSearchParams(window.location.search),z=xt.get("role")==="adherent"?"adherent":"admin";function Te(){const e=document.getElementById("status-time");if(!e)return;const s=new Date;e.textContent=s.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}Te();setInterval(Te,1e4);const D=["dashboard","parcelles","capteurs","alertes","parametres"];let se="dashboard";function U(e){var s,t;!D.includes(e)||e===se||(se=e,document.querySelectorAll(".m-screen").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),(s=document.getElementById(`screen-${e}`))==null||s.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}document.getElementById("bottom-nav").addEventListener("click",e=>{const s=e.target.closest(".nav-item");s&&U(s.dataset.tab)});let N=null,Y=null;const ke=50,K=document.getElementById("screen-stack");K.addEventListener("mousedown",e=>{N=e.clientX,Y=e.clientY});K.addEventListener("mouseup",e=>{if(N===null)return;const s=e.clientX-N,t=e.clientY-Y;if(Math.abs(s)>ke&&Math.abs(s)>Math.abs(t)){const n=D.indexOf(se);s<0&&n<D.length-1&&U(D[n+1]),s>0&&n>0&&U(D[n-1])}N=null,Y=null});K.addEventListener("mouseleave",()=>{N=null});K.addEventListener("touchstart",e=>{N=e.touches[0].clientX,Y=e.touches[0].clientY},{passive:!0});K.addEventListener("touchend",e=>{if(N===null)return;const s=e.changedTouches[0].clientX-N,t=e.changedTouches[0].clientY-Y;if(Math.abs(s)>ke&&Math.abs(s)>Math.abs(t)){const n=D.indexOf(se);s<0&&n<D.length-1&&U(D[n+1]),s>0&&n>0&&U(D[n-1])}N=null},{passive:!0});const Mt=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...z==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]];function Et(){var s;const e=document.getElementById("param-segment");e&&(z==="adherent"&&((s=document.getElementById("param-reseau"))==null||s.style.setProperty("display","none")),Mt.forEach((t,n)=>{const d=document.createElement("button");d.className="m-segment-btn"+(n===0?" active":""),d.textContent=t.label,d.dataset.target=t.id,d.addEventListener("click",()=>{var a;e.querySelectorAll(".m-segment-btn").forEach(l=>l.classList.remove("active")),d.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(l=>l.classList.remove("active")),(a=document.getElementById(t.id))==null||a.classList.add("active")}),e.appendChild(d)}))}Et();Ye(document.getElementById("screen-dashboard"),z);rt(document.getElementById("screen-parcelles"),z);wt(document.getElementById("screen-capteurs"),z);Be(document.getElementById("screen-alertes"),z);Re(document.getElementById("param-compte"),z);
