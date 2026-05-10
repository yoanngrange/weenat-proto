import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as I}from"./plots-kiLnwOqV.js";import{s as P}from"./sensors-C_yA0hbg.js";import{n as B}from"./network-YzWdS0n_.js";import{o as F}from"./orgs-Cx4wNzLL.js";const pe={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},je=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],ve=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let N={};function H(e){var i;const s=document.getElementById("phone-screen");(i=document.querySelector(".m-toast"))==null||i.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function W({title:e,body:s,onDone:t,doneLabel:i="OK"}){var n;const d=document.getElementById("phone-screen");(n=document.querySelector(".m-sheet-overlay"))==null||n.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${i}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,a.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const l=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",l),a.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),l()}),a.addEventListener("click",o=>{o.target===a&&l()}),a}function he(e,s,t){const i=document.createElement("div");i.innerHTML=`<input class="m-sheet-input" type="text" value="${s}" placeholder="${e}">`;const d=i.querySelector("input");W({title:e,body:i,doneLabel:"Enregistrer",onDone:()=>{t(d.value.trim()),H("Enregistré")}}),setTimeout(()=>d.focus(),300)}function be(e,s,t,i){const d=document.createElement("div");d.innerHTML=s.map((l,n)=>`
    <div class="m-sheet-option${l===t?" m-sheet-option--active":""}" data-i="${n}">
      <span>${l}</span>
      ${l===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const a=W({title:e,body:d,doneLabel:"Fermer",onDone:()=>{}});d.querySelectorAll(".m-sheet-option").forEach(l=>{l.addEventListener("click",()=>{i(s[+l.dataset.i]),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280),H("Enregistré")})})}function He(e,s){const t=document.createElement("div"),i=()=>{var d;t.innerHTML=e.map((a,l)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${l}" data-f="label" value="${a.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${l}" data-f="numero" value="${a.numero}" placeholder="+33 6…">
        </div>
        ${l>0?`<button class="m-sheet-remove" data-i="${l}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(a=>{a.addEventListener("input",()=>{e[+a.dataset.i][a.dataset.f]=a.value})}),t.querySelectorAll(".m-sheet-remove").forEach(a=>{a.addEventListener("click",()=>{e.splice(+a.dataset.i,1),i()})}),(d=t.querySelector(".m-sheet-add-phone"))==null||d.addEventListener("click",()=>{e.push({label:"",numero:""}),i()})};i(),W({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{s(e),H("Enregistré")}})}function Re(e,s,t){const i=document.createElement("div");i.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,i.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var a;(a=navigator.clipboard)==null||a.writeText(e.value).catch(()=>{}),H("Clé copiée !")});const d=W({title:"Clé API",body:i,doneLabel:"Fermer",onDone:()=>{}});i.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const a=s.findIndex(l=>l.id===e.id);a!==-1&&s.splice(a,1),d.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{d.remove(),t()},280),H("Clé supprimée")})}function _e(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function Fe(e){const s=document.createElement("div");s.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=s.querySelector("input");W({title:"Nouvelle clé API",body:s,doneLabel:"Générer",onDone:()=>{const i=t.value.trim();if(!i){H("Entrez un nom");return}const d={id:Date.now(),name:i,created:new Date().toLocaleDateString("fr-FR"),value:_e()};e(d),H("Clé générée")}}),setTimeout(()=>t.focus(),300)}function De(e,s){N={profile:JSON.parse(JSON.stringify(pe[s]||pe.admin)),langue:"Français",unites:ve[0]};const i=localStorage.getItem("mobile_avatarUrl")||null;function d(){const l=N.profile,n=i?`<img src="${i}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${l.initials}</span>`,o=l.apiKeys.map(c=>`
      <div class="m-list-row" data-key-id="${c.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${c.name}</span>
          <span class="m-list-row-sub">créée le ${c.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),m=l.phones.map((c,b)=>`
      <div class="m-list-row${b===l.phones.length-1&&l.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${c.label||"Numéro "+(b+1)}</span>
        <span class="m-list-row-value">${c.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");e.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${n}</div>
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
          <span class="m-list-row-value" id="val-langue">${N.langue}</span>
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
    `,a()}function a(){var n;const l=N.profile;(n=e.querySelector("#m-avatar-upload"))==null||n.addEventListener("change",o=>{const m=o.target.files[0];if(!m)return;const c=new FileReader;c.onload=b=>{localStorage.setItem("mobile_avatarUrl",b.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${b.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},c.readAsDataURL(m)}),e.querySelectorAll(".m-list-row[data-action]").forEach(o=>{o.addEventListener("click",()=>{switch(o.dataset.action){case"prenom":he("Prénom",l.prenom,m=>{l.prenom=m,d()});break;case"nom":he("Nom",l.nom,m=>{l.nom=m,d()});break;case"email":W({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${l.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>H("Fonctionnalité à venir")});break;case"phones":He(l.phones,m=>{l.phones=m,d()});break;case"mdp":W({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>H("Fonctionnalité à venir")});break;case"langue":be("Langue",je,N.langue,m=>{N.langue=m,e.querySelector("#val-langue").textContent=m});break;case"unites":be("Unités",ve,N.unites,m=>{N.unites=m,e.querySelector("#val-unites").textContent=m.split(" ")[0]});break;case"gen-key":Fe(m=>{l.apiKeys.push(m),d()});break;case"delete":H("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(o=>{o.addEventListener("click",()=>{const m=l.apiKeys.find(c=>c.id===+o.dataset.keyId);m&&Re(m,l.apiKeys,d)})}),e.querySelectorAll(".m-toggle input[data-notif]").forEach(o=>{o.addEventListener("change",()=>H("Préférence enregistrée"))})}d()}function j(e){var i;const s=document.getElementById("phone-screen");(i=document.querySelector(".m-toast"))==null||i.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function le({title:e,body:s,doneLabel:t="Fermer",onDone:i}={}){var n;const d=document.getElementById("phone-screen");(n=document.querySelector(".m-sheet-overlay"))==null||n.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const l=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",l),a.querySelector(".m-sheet-done").addEventListener("click",()=>{i==null||i(),l()}),a.addEventListener("click",o=>{o.target===a&&l()}),a}const Oe=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Ne=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],Be={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},We={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function fe(e){if(!e)return"—";const[s,t,i]=e.split("-");return`${i}/${t}/${s}`}function ze(e){const s=e.sensorIds.map(i=>{const d=P.find(a=>a.id===i);return d?`${d.model} ${d.serial}`:null}).filter(Boolean),t=e.parcelIds.map(i=>{const d=I.find(a=>a.id===i);return(d==null?void 0:d.name)||null}).filter(Boolean);return[...s,...t]}function Ve(e,s){var l;let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const i=[...s==="adherent"?Ne:Oe];function d(){if(!i.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=i.map(n=>{var b;const o=ze(n),m=We[n.metric]||"bi-bell",c=n.statut==="actif";return`
        <div class="m-alert-card" data-id="${n.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${c?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${m}"></i>
            </div>
            <span class="m-alert-name">${n.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${c?"checked":""} data-id="${n.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${Be[n.metric]||n.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Cibles</span>
              <span class="m-alert-row-val">${o.length?o.join(", "):"—"}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${fe(n.lastTriggered)}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Créée le</span>
              <span class="m-alert-row-val">${fe(n.created)}</span>
            </div>
            ${(b=n.phones)!=null&&b.length?`
            <div class="m-alert-row m-alert-row--last">
              <span class="m-alert-row-label">Téléphone(s)</span>
              <span class="m-alert-row-val">${n.phones.join(", ")}</span>
            </div>`:'<div class="m-alert-row--last"></div>'}
          </div>
        </div>`}).join(""),a()}function a(){t.querySelectorAll(".m-alert-toggle input").forEach(n=>{n.addEventListener("change",o=>{o.stopPropagation();const m=+n.dataset.id,c=i.find(b=>b.id===m);c&&(c.statut=n.checked?"actif":"inactif",d(),j(`Alerte ${n.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-card").forEach(n=>{n.addEventListener("click",o=>{if(o.target.closest(".m-alert-toggle"))return;const m=+n.dataset.id,c=i.find(r=>r.id===m);if(!c)return;const b=document.createElement("div");b.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const u=le({title:c.name,body:b,doneLabel:"Fermer",onDone:()=>{}});b.querySelector("#al-edit").addEventListener("click",()=>{u.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{u.remove(),j("Modification à venir")},280)}),b.querySelector("#al-delete").addEventListener("click",()=>{const r=i.findIndex(v=>v.id===m);r!==-1&&i.splice(r,1),u.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{u.remove(),d()},280),j("Alerte supprimée")})})})}(l=e.querySelector(".m-navbar-action"))==null||l.addEventListener("click",()=>{j("Création d'alerte — à venir")}),d()}const Ge={admin:100,adherent:1},q=[{id:"bilan_hydrique",title:"Bilan hydrique",icon:"bi-droplet-fill",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun-fill",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Données temps-réel",icon:"bi-activity",color:"#ff9f0a",active:!1,available:!1,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#bf5af2",active:!1,available:!1,fixed:!1},{id:"capteurs_fav",title:"Capteurs favoris",icon:"bi-star-fill",color:"#ff9f0a",active:!1,available:!1,fixed:!1},{id:"parcelles_fav",title:"Parcelles favorites",icon:"bi-bookmark-fill",color:"#30d158",active:!1,available:!1,fixed:!1},{id:"mon_secteur",title:"Mon secteur",icon:"bi-geo-alt-fill",color:"#ff6b6b",active:!1,available:!1,fixed:!1},{id:"traitements",title:"Traitements phytosanitaires",icon:"bi-shield-fill",color:"#4ecdc4",active:!1,available:!1,fixed:!1},{id:"cultures",title:"Cultures & Stades phénologiques",icon:"bi-flower1",color:"#a2c4c9",active:!1,available:!1,fixed:!1},{id:"evenements",title:"Capteurs avec événement en cours",icon:"bi-exclamation-triangle-fill",color:"#ff3b30",active:!1,available:!1,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3-fill",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Support",icon:"bi-question-circle-fill",color:"#30d158",active:!0,available:!0,fixed:!0}];function ge(e){var i;const s=document.getElementById("phone-screen");(i=document.querySelector(".m-toast"))==null||i.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function X({title:e,body:s,doneLabel:t="Fermer",onDone:i}={}){var n;const d=document.getElementById("phone-screen");(n=document.querySelector(".m-sheet-overlay"))==null||n.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const l=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",l),a.querySelector(".m-sheet-done").addEventListener("click",()=>{i==null||i(),l()}),a.addEventListener("click",o=>{o.target===a&&l()}),a}const ye=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#45b7d1"}];function $e(){return[0,1,2].map(e=>{const s=new Date;s.setDate(s.getDate()+e);const t=ye[Math.floor(Math.random()*ye.length)],i=t.label==="Pluie"||t.label==="Averses",d=Math.round(8+Math.random()*8),a=Math.round(16+Math.random()*14);return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":s.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:s.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:i?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:d,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:a,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35)}})}function Ue(e){const s=Math.round(80+e.area*8),t=Math.round(s*(.35+Math.random()*.45)),i=Math.round(18+Math.random()*22),d=Math.round(Math.random()*20),a=Math.max(0,t-i+d),l=a<t?t-a:0;return{j0:t,j7:a,bilan:l}}const ie=8;function we(e,s=!1){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const i=(s?e:e.slice(0,ie)).map(a=>{const{j0:l,j7:n,bilan:o}=Ue(a);return`
      <div class="m-bh-th-n">${a.name}</div>
      <div class="m-bh-td">${l}</div>
      <div class="m-bh-td">${n}</div>
      <div class="m-bh-td">${o>0?`${o} mm`:""}</div>`}).join(""),d=!s&&e.length>ie?`<button class="m-bh-expand" id="bh-expand">Afficher les ${e.length-ie} autres parcelles <i class="bi bi-chevron-down"></i></button>`:"";return`
    <div class="m-bh-table">
      <div class="m-bh-th"></div>
      <div class="m-bh-th">J0</div>
      <div class="m-bh-th">J+7</div>
      <div class="m-bh-th">🪣</div>
      ${i}
    </div>
    ${d}`}function Je(e,s,t){const i=e.map(n=>{const o=[n.name,n.crop,n.ville].filter(Boolean).join(" · ");return`<option value="p-${n.id}">${o}</option>`}).join(""),d=s.map(n=>`<option value="s-${n.id}">${n.model} — ${n.serial}</option>`).join(""),a=`
    <optgroup label="Parcelles">${i}</optgroup>
    ${d?`<optgroup label="Capteurs">${d}</optgroup>`:""}`,l=t.map((n,o)=>{const m=`${n.dayLabel.charAt(0).toUpperCase()+n.dayLabel.slice(1)} · ${n.dateStr}`;return`
    <div class="m-prev-card" data-day="${o}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${n.icon}" style="color:${n.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${m}</span>
          <span class="m-prev-card-cond">${n.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-card-body">
        <div class="m-prev-row"><span>Pluie</span><strong>${n.pluie} mm</strong></div>
        <div class="m-prev-row"><span>T° min</span><strong>${n.tMin}°C <em>${n.tMinHeure}</em></strong></div>
        <div class="m-prev-row"><span>T° max</span><strong>${n.tMax}°C <em>${n.tMaxHeure}</em></strong></div>
        <div class="m-prev-row"><span>Humidité</span><strong>${n.humMoy}%</strong></div>
        <div class="m-prev-row"><span>Vent</span><strong>${n.ventMoy}/${n.ventRafales} km/h</strong></div>
        <div class="m-prev-row m-prev-row--last"><span>Évapotranspiration</span><strong>${n.etp} mm</strong></div>
      </div>
    </div>`}).join("");return`
    <select class="m-prev-select">${a}</select>
    <div class="m-prev-cards">${l}</div>`}function Ye(){const e=I.map(i=>i.orgId).filter((i,d,a)=>a.indexOf(i)===d&&i!==100).length,s=P.length,t=I.length;return`
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
    </div>`}function Ke(){return`
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
    </a>`}const xe=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Xe(){var m;const e=document.getElementById("phone-screen");(m=document.querySelector(".m-sheet-overlay"))==null||m.remove();const s=document.createElement("div");s.className="m-sheet-overlay m-sheet-overlay--tall",s.innerHTML=`
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
    </div>`,e.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const t=s.querySelector("#chat-messages"),i=s.querySelector("#chat-input"),d=s.querySelector("#chat-send"),a=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#chat-close").addEventListener("click",a),s.addEventListener("click",c=>{c.target===s&&a()});function l(c,b){const u=document.createElement("div");u.className=`m-chat-msg m-chat-msg--${b}`,u.innerHTML=`<div class="m-chat-bubble">${c}</div>`,t.appendChild(u),t.scrollTop=t.scrollHeight}function n(){const c=document.createElement("div");return c.className="m-chat-msg m-chat-msg--bot m-chat-typing",c.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(c),t.scrollTop=t.scrollHeight,c}function o(){const c=i.value.trim();if(!c)return;l(c,"user"),i.value="",d.disabled=!0;const b=n();setTimeout(()=>{b.remove();const u=xe[Math.floor(Math.random()*xe.length)];l(u,"bot"),d.disabled=!1,i.focus()},1200+Math.random()*800)}d.addEventListener("click",o),i.addEventListener("keydown",c=>{c.key==="Enter"&&o()}),setTimeout(()=>i.focus(),350)}function Ze(e,s){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const i=Ge[s]||1,d=i===100?I:I.filter(r=>r.orgId===i),a=new Set(d.map(r=>r.id)),l=P.filter(r=>a.has(r.parcelId));let n=$e();function o(r,v){const f=r.fixed?"":`<button class="m-widget-menu" data-widget="${r.id}" type="button">•••</button>`;return`
      <div class="m-widget" data-widget="${r.id}">
        <div class="m-widget-hd">
          <div class="m-widget-icon-wrap" style="background:${r.color}20;color:${r.color}">
            <i class="bi ${r.icon}"></i>
          </div>
          <span class="m-widget-title">${r.title}</span>
          ${f}
        </div>
        <div class="m-widget-bd">${v}</div>
      </div>`}function m(){n=$e();const r=q.filter(f=>f.active&&!f.fixed),v=q.filter(f=>f.active&&f.fixed);t.innerHTML=`
      ${[...r,...v].map(f=>{let h="";return f.id==="bilan_hydrique"?h=we(d,!1):f.id==="previsions"?h=Je(d,l,n):f.id==="mon_reseau"?h=Ye():f.id==="support"&&(h=Ke()),o(f,h)}).join("")}
      <div style="height:24px"></div>`,c()}function c(){var r,v,f;(r=e.querySelector(".m-navbar-action"))==null||r.addEventListener("click",u),(v=t.querySelector("#bh-expand"))==null||v.addEventListener("click",()=>{const h=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');h&&(h.innerHTML=we(d,!0))}),(f=t.querySelector("#open-chat-btn"))==null||f.addEventListener("click",Xe),t.querySelectorAll(".m-prev-card").forEach(h=>{h.addEventListener("click",()=>{const w=n[+h.dataset.day];if(!w)return;const T=`
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
          </div>`;X({title:w.dayLabel,body:T,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-widget-menu").forEach(h=>{h.addEventListener("click",w=>{w.stopPropagation();const T=q.find(A=>A.id===h.dataset.widget);if(!T)return;const C=document.createElement("div");C.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="menu-config">Configurer</a>
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const M=X({title:T.title,body:C,doneLabel:"Fermer",onDone:()=>{}});C.querySelector("#menu-config").addEventListener("click",()=>{M.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{M.remove(),ge("Configuration à venir")},280)}),C.querySelector("#menu-move").addEventListener("click",()=>{M.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{M.remove(),b()},280)}),C.querySelector("#menu-remove").addEventListener("click",()=>{T.active=!1,M.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{M.remove(),m()},280),ge("Widget retiré")})})})}function b(){const r=document.createElement("div"),v=()=>q.filter(h=>h.active&&!h.fixed),f=()=>{const h=v();r.innerHTML=h.map((w,T)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${w.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${T}" data-dir="-1" ${T===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${T}" data-dir="1" ${T===h.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),r.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(w=>{w.addEventListener("click",()=>{const T=v(),C=+w.dataset.i,M=C+ +w.dataset.dir,A=q.indexOf(T[C]),$=q.indexOf(T[M]);[q[A],q[$]]=[q[$],q[A]],f(),m()})})};f(),X({title:"Réorganiser les widgets",body:r,doneLabel:"Fermer",onDone:()=>{}})}function u(){const r=document.createElement("div"),v=()=>{const f=q.filter(h=>!h.fixed);r.innerHTML=f.map(h=>`
        <div class="m-catalog-row${h.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${h.color}20;color:${h.color}"><i class="bi ${h.icon}"></i></div>
          <span class="m-catalog-title">${h.title}</span>
          ${h.available?`<button class="m-catalog-toggle${h.active?" m-catalog-toggle--on":""}" data-cid="${h.id}" type="button">
                <i class="bi ${h.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),r.querySelectorAll("[data-cid]").forEach(h=>{h.addEventListener("click",()=>{const w=q.find(T=>T.id===h.dataset.cid);w&&(w.active=!w.active,v(),m())})})};v(),X({title:"Widgets disponibles",body:r,doneLabel:"Fermer",onDone:()=>{}})}m()}const se=[];function Le(e){const s=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),se.push(t),t}function Ae(){const e=se.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}window.addEventListener("m-tab-change",()=>{se.forEach(e=>e.remove()),se.length=0});const te={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#c090e0",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#80c8e8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1},humectation:{label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}},Te={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function oe(e,s){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:s},(i,d)=>{const a=d/s*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const l=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,l))})}const re={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},ce={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Qe(e,s,t,i,d,a=20){const l=ce[e]||10080,n=new Date,o=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,m=4,c=s-t-i,b=d-a;return Array.from({length:m+1},(u,r)=>{const v=r/m,f=new Date(n.getTime()-(1-v)*l*6e4),h=(t+v*c).toFixed(1),w=r===0?"start":r===m?"end":"middle";return[`<line x1="${h}" y1="${b}" x2="${h}" y2="${b+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${h}" y="${d-3}" text-anchor="${w}" font-size="9" fill="#8e8e93" font-family="-apple-system">${o(f)}</text>`].join("")}).join("")}function et(e,s,t,i="7d"){const d=re[i]||60,a=oe(e,d),l=320,n=100,o=34,m=6,c=10,b=20,u=l-o-m,r=n-c-b,v=t?0:Math.min(...a),f=Math.max(...a,v+.001),h=f-v,w=g=>o+g/(a.length-1)*u,T=g=>c+r-(g-v)/h*r,C=`g${Math.random().toString(36).slice(2,8)}`,M=[0,.5,1].map(g=>{const S=v+g*h,k=c+r-g*r;return`<text x="${o-3}" y="${(k+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${S<10?S.toFixed(1):Math.round(S)}</text>`}).join(""),A=[.25,.5,.75].map(g=>{const S=(c+r-g*r).toFixed(1);return`<line x1="${o}" y1="${S}" x2="${l-m}" y2="${S}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),$=`<line x1="${o}" y1="${c+r}" x2="${l-m}" y2="${c+r}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,x=Qe(i,l,o,m,n);if(t){const g=u/a.length*.7,S=a.map((k,R)=>{const _=(k-v)/h*r,qe=c+r-_;return`<rect x="${(w(R)-g/2).toFixed(1)}" y="${qe.toFixed(1)}" width="${g.toFixed(1)}" height="${_.toFixed(1)}" fill="${s}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${l} ${n}" width="100%" height="${n}" preserveAspectRatio="none">${M}${A}${$}${x}${S}</svg>`}const p=a.map((g,S)=>[w(S),T(g)]).map(([g,S],k)=>`${k?"L":"M"}${g.toFixed(1)},${S.toFixed(1)}`).join(" "),E=`${p} L${w(a.length-1).toFixed(1)},${(c+r).toFixed(1)} L${o},${(c+r).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:a.map(g=>+g.toFixed(2)),minV:+v.toFixed(2),maxV:+f.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${l} ${n}" width="100%" height="${n}" preserveAspectRatio="none">
      <defs><linearGradient id="${C}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${M}${A}${$}
      <path d="${E}" fill="url(#${C})"/>
      <path d="${p}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${x}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function tt(e,s,t){if(!t)return"";const i=re[s]||60,a=(ce[s]||10080)/(i*60),l=oe(e,i);let n=[];if(t==="temp"){const o=l.reduce((c,b)=>c+Math.max(0,b),0)*(a/24),m=l.filter(c=>c<7).length*a;n=[{label:"Degrés jours",val:`${Math.round(o)} DJ`},{label:"Heures de froid",val:`${Math.round(m)} h`}]}else if(t==="pluie")n=[{label:"Cumul pluie",val:`${l.reduce((m,c)=>m+c,0).toFixed(1)} mm`}];else if(t==="rayo"){const o=l.filter(m=>m>120).length*a;n=[{label:"Ensoleillement",val:`${Math.round(o)} h`}]}else if(t==="etp")n=[{label:"ETP cumulée",val:`${(l.reduce((m,c)=>m+c,0)*(a/24)).toFixed(1)} mm`}];else if(t==="hws"){const o=l.filter(m=>m>50).length*a;n=[{label:"Heures d'humectation",val:`${Math.round(o)} h`}]}return n.length?`<div class="m-chart-cumuls">${n.map(o=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${o.label}</span>
      <span class="m-chart-cumul-val">${o.val}</span>
    </div>`).join("")}</div>`:""}function st(e,s){const t=te[e];return t?`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${t.color}">${t.label}</span>
      </div>
      ${et(e,t.color,t.cumul,s)}
      ${tt(e,s,t.cumulsType)}
    </div>`:""}function at(e){const s=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!s.vals)return;const{vals:t,minV:i,maxV:d}=s,a=e.querySelector(".m-chart-tip"),l=e.querySelector(".m-chart-crosshair"),n=e.dataset.color||"#0172A4";function o(c){const b=e.getBoundingClientRect(),u=Math.max(0,Math.min(1,(c-b.left)/b.width)),r=Math.round(u*(t.length-1)),v=t[r],f=u*100;l.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${f}%;width:1px;background:${n};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(f,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=v<10?v.toFixed(1):String(Math.round(v))}function m(){l.style.display="none",a.style.display="none"}e.addEventListener("pointermove",c=>{c.preventDefault(),o(c.clientX)}),e.addEventListener("pointerdown",c=>o(c.clientX)),e.addEventListener("pointerup",m),e.addEventListener("pointerleave",m),e.style.cursor="crosshair"}function it(){return`
    <div class="m-detail-section">
      ${["Bilan hydrique","Stades phénologiques","Alertes actives","Données temps-réel"].map(s=>`
        <div class="m-placeholder-widget">
          <span class="m-placeholder-widget-name">${s}</span>
          <button class="m-widget-menu" type="button">•••</button>
        </div>`).join("")}
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
    </div>`}function nt(e,s){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),i=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:s});document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(i.href),100)}function lt(e,s,t){const i=new Set;s.forEach(r=>{const v=P.find(f=>f.id===r);v&&(Te[v.model]||[]).forEach(f=>i.add(f))});const d=[...new Set(["etp","rayonnement","temp_rosee",...i])].filter(r=>te[r]),a=re[t]||60,l=ce[t]||10080,n=l/a*6e4,o=new Date,m=new Date(o-l*6e4),c=["Horodatage",...d.map(r=>`${te[r].label} (${te[r].unit})`)].join(";"),b=Array.from({length:a},(r,v)=>[new Date(m.getTime()+v*n).toISOString().replace("T"," ").slice(0,19),...d.map(h=>oe(h,1)[0].toFixed(2))].join(";")),u=(e.name||"parcelle").replace(/[^\w]/g,"_");nt([c,...b].join(`\r
`),`${u}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function ot(e,s="7d",t="1h"){const i=new Set;e.forEach(a=>{const l=P.find(n=>n.id===a);l&&(Te[l.model]||[]).forEach(n=>i.add(n))});const d=[...new Set(["etp","rayonnement","temp_rosee",...i])];return`
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
      <button class="m-export-btn" title="Exporter CSV"><i class="bi bi-download"></i></button>
    </div>
    <div class="m-detail-section">
      ${d.map(a=>st(a,s)).join("")}
    </div>`}function rt(e,s,t){const i=t.map(d=>{const a=P.find(l=>l.id===d);return a?`${a.model} — ${a.serial}`:null}).filter(Boolean);return`
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
          <a class="m-itinerary-link" href="geo:${e.lat},${e.lng}?q=${e.lat},${e.lng}" target="_blank">
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
        ${i.length?i.map((d,a)=>`<div class="m-list-row${a===i.length-1?" m-list-row--last":""}">
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
    </div>`}function Me(e,s=[]){const t=F.find(u=>u.id===e.orgId);let i="widgets",d="7d",a="1h",l=!1;const n=(t==null?void 0:t.ville)||"",o=Le(`
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
        ${n?`<span class="m-d-sep">·</span><span class="m-d-commune">${n}</span>`:""}
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="widgets">Widgets</button>
      <button class="m-detail-tab" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function m(){const u=o.querySelector("#detail-content");i==="widgets"&&(u.innerHTML=it()),i==="donnees"&&(u.innerHTML=ot(s,d,a)),i==="params"&&(u.innerHTML=rt(e,t,s),c()),b()}function c(){const u=window.L;u&&setTimeout(()=>{var f;const r=o.querySelector("#parcel-minimap");if(!r)return;const v=u.map(r,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(v),((f=e.latlngs)==null?void 0:f.length)>=3){const h=u.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(v);v.fitBounds(h.getBounds(),{padding:[8,8]})}else v.setView([e.lat,e.lng],14),u.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(v)},50)}function b(){var u,r,v,f;(u=o.querySelector(".m-period-sel"))==null||u.addEventListener("change",h=>{d=h.target.value,m()}),(r=o.querySelector(".m-step-sel"))==null||r.addEventListener("change",h=>{a=h.target.value,m()}),(v=o.querySelector(".m-export-btn"))==null||v.addEventListener("click",()=>lt(e,s,d)),o.querySelectorAll(".m-chart-svg-wrap").forEach(h=>at(h)),o.querySelectorAll(".m-list-row[data-action]").forEach(h=>{h.addEventListener("click",()=>j("Fonctionnalité à venir"))}),o.querySelectorAll(".m-widget-menu").forEach(h=>{h.addEventListener("click",w=>{w.stopPropagation(),j("Options widget")})}),(f=o.querySelector(".m-add-widget-btn"))==null||f.addEventListener("click",()=>j("Catalogue de widgets — à venir"))}o.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{o.querySelectorAll(".m-detail-tab").forEach(r=>r.classList.remove("active")),u.classList.add("active"),i=u.dataset.view,m()})}),o.querySelector(".m-detail-back").addEventListener("click",Ae),o.querySelector("#d-star").addEventListener("click",()=>{l=!l;const u=o.querySelector("#d-star");u.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",u.style.color=l?"#f5c842":"",j(l?"Ajouté aux favoris":"Retiré des favoris")}),o.querySelector("#d-plus").addEventListener("click",()=>{const u=`
      <button class="m-sheet-option" data-a="widget"><i class="bi bi-grid-1x2"></i> Widget</button>
      <button class="m-sheet-option" data-a="irrigation"><i class="bi bi-droplet"></i> Irrigation</button>
      <button class="m-sheet-option" data-a="capteur"><i class="bi bi-broadcast"></i> Capteur</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" style="color:#8e8e93" data-a="integration">
        <i class="bi bi-plug"></i> Intégration <span style="font-size:11px">(version web uniquement)</span>
      </button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`,r=document.createElement("div");r.innerHTML=u;const v=le({title:"Ajouter à la parcelle",body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll("[data-a]").forEach(f=>{f.addEventListener("click",()=>{const h=f.dataset.a;v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),j(h==="integration"?"Disponible sur la version web":"Fonctionnalité à venir")},280)})})}),m()}const G=100,ct={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function U(e,s){const t=ct[s];return t?P.some(i=>i.parcelId===e.id&&t.includes(i.model)):!0}const Z=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température air",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function dt(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function mt(e,s){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const i=s==="admin",d=F.filter(M=>M.id!==G),a=Object.fromEntries(F.map(M=>[M.id,M]));let l=null,n=null;const o={};let m="carte",c="pluie",b="7 derniers jours",u="all";function r(M){const A=`${M}-${c}-${b}`;return A in o||(o[A]=dt(c)),o[A]}function v(M){var A;return((A=a[M.orgId])==null?void 0:A.ville)||null}function f(){return i?u==="all"?I:u===String(G)?I.filter(M=>M.orgId===G):I.filter(M=>String(M.orgId)===u):I.filter(M=>M.orgId===1)}function h(){if(l){try{l.remove()}catch{}l=null,n=null}}function w(){h();const M=Z.find(p=>p.id===c)||Z[0],A=f(),$=i?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${G}"${u===String(G)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${d.map(p=>`<option value="${p.id}"${u===String(p.id)?" selected":""}>${p.name}</option>`).join("")}
      </select>`:"",x=[...A].sort((p,E)=>{const y=U(p,c),g=U(E,c);return y&&!g?-1:!y&&g?1:y?r(E.id)-r(p.id):0}),L=x.length?`<div class="m-plain-list">${x.map(p=>{const E=v(p),y=U(p,c);return`
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
            ${M.aggs.map(p=>`<option${p===b?" selected":""}>${p}</option>`).join("")}
          </select>
        </div>
        ${$}
      </div>
      ${m==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${L}</div>`}`,C(),m==="carte"&&T(A,M)}function T(M,A){const $=window.L;$&&setTimeout(()=>{const x=t.querySelector("#parcel-map");if(!x)return;l=$.map(x,{zoomControl:!1,attributionControl:!1}),$.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l);const L=[];M.forEach(p=>{const E=U(p,c)?`${r(p.id)} ${A.unit}`:"—",y=P.filter(_=>_.parcelId===p.id).map(_=>_.id),g=()=>Me(p,y),S=[p.lat,p.lng];p.latlngs&&p.latlngs.length>=3?($.polygon(p.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(l).on("click",g),L.push(...p.latlngs)):L.push(S);const k=U(p,c),R=$.circleMarker(S,{radius:k?8:6,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:k?.95:.4}).addTo(l);k&&R.bindTooltip(E,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),R.on("click",g)}),L.length&&(n=L,l.fitBounds(L,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",M=>{M.detail==="parcelles"&&m==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),n!=null&&n.length&&l.fitBounds(n,{padding:[32,32]})},50)});function C(){var M,A,$;t.querySelectorAll(".m-view-btn").forEach(x=>x.addEventListener("click",()=>{m=x.dataset.view,w()})),(M=t.querySelector("#metric-sel"))==null||M.addEventListener("change",x=>{var L;c=x.target.value,b=((L=Z.find(p=>p.id===c))==null?void 0:L.defaultAgg)||"",w()}),(A=t.querySelector("#agg-sel"))==null||A.addEventListener("change",x=>{b=x.target.value,w()}),($=t.querySelector("#org-filter"))==null||$.addEventListener("change",x=>{u=x.target.value,w()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(x=>{x.addEventListener("click",()=>{const L=I.find(E=>E.id===+x.dataset.plotId);if(!L)return;const p=P.filter(E=>E.parcelId===L.id).map(E=>E.id);Me(L,p)})})}w()}const Ce={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},ut={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"},ke={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#e07050",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#80c8e8",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}]};function de(e,s){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:s},(i,d)=>{const a=d/s*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const l=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,l))})}const me={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function pt(e,s,t,i,d,a=20){const l=me[e]||10080,n=new Date,o=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,m=4,c=s-t-i,b=d-a;return Array.from({length:m+1},(u,r)=>{const v=r/m,f=new Date(n.getTime()-(1-v)*l*6e4),h=(t+v*c).toFixed(1),w=r===0?"start":r===m?"end":"middle";return[`<line x1="${h}" y1="${b}" x2="${h}" y2="${b+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${h}" y="${d-3}" text-anchor="${w}" font-size="9" fill="#8e8e93" font-family="-apple-system">${o(f)}</text>`].join("")}).join("")}function vt(e,s,t,i="7d"){const d=ue[i]||60,a=de(e,d),l=320,n=100,o=34,m=6,c=10,b=20,u=l-o-m,r=n-c-b,v=t?0:Math.min(...a),f=Math.max(...a,v+.001),h=f-v,w=g=>o+g/(a.length-1)*u,T=g=>c+r-(g-v)/h*r,C=`g${Math.random().toString(36).slice(2,8)}`,M=[0,.5,1].map(g=>{const S=v+g*h,k=c+r-g*r;return`<text x="${o-3}" y="${(k+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${S<10?S.toFixed(1):Math.round(S)}</text>`}).join(""),A=[.25,.5,.75].map(g=>`<line x1="${o}" y1="${(c+r-g*r).toFixed(1)}" x2="${l-m}" y2="${(c+r-g*r).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),$=`<line x1="${o}" y1="${c+r}" x2="${l-m}" y2="${c+r}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,x=pt(i,l,o,m,n);if(t){const g=u/a.length*.7;return`<svg viewBox="0 0 ${l} ${n}" width="100%" height="${n}" preserveAspectRatio="none">
      ${M}${A}${$}
      ${a.map((S,k)=>{const R=(S-v)/h*r,_=c+r-R;return`<rect x="${(w(k)-g/2).toFixed(1)}" y="${_.toFixed(1)}" width="${g.toFixed(1)}" height="${R.toFixed(1)}" fill="${s}" opacity=".75" rx="1"/>`}).join("")}
      ${x}
    </svg>`}const p=a.map((g,S)=>[w(S),T(g)]).map(([g,S],k)=>`${k?"L":"M"}${g.toFixed(1)},${S.toFixed(1)}`).join(" "),E=`${p} L${w(a.length-1).toFixed(1)},${(c+r).toFixed(1)} L${o},${(c+r).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:a.map(g=>+g.toFixed(2)),minV:+v.toFixed(2),maxV:+f.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${l} ${n}" width="100%" height="${n}" preserveAspectRatio="none">
      <defs><linearGradient id="${C}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${M}${A}${$}
      <path d="${E}" fill="url(#${C})"/>
      <path d="${p}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${x}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function ht(e){const s=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!s.vals)return;const{vals:t}=s,i=e.querySelector(".m-chart-tip"),d=e.querySelector(".m-chart-crosshair"),a=e.dataset.color||"#0172A4";function l(o){const m=e.getBoundingClientRect(),c=Math.max(0,Math.min(1,(o-m.left)/m.width)),b=Math.round(c*(t.length-1)),u=t[b],r=c*100;d.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${r}%;width:1px;background:${a};opacity:.5`,i.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(r,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,i.textContent=u<10?u.toFixed(1):String(Math.round(u))}function n(){d.style.display="none",i.style.display="none"}e.addEventListener("pointermove",o=>{o.preventDefault(),l(o.clientX)}),e.addEventListener("pointerdown",o=>l(o.clientX)),e.addEventListener("pointerup",n),e.addEventListener("pointerleave",n),e.style.cursor="crosshair"}const ue={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function bt(e,s,t){if(!t)return"";const i=ue[s]||60,a=(me[s]||10080)/(i*60),l=de(e,i);let n=[];if(t==="temp"){const o=l.reduce((c,b)=>c+Math.max(0,b),0)*(a/24),m=l.filter(c=>c<7).length*a;n=[{label:"Degrés jours",val:`${Math.round(o)} DJ`},{label:"Heures de froid",val:`${Math.round(m)} h`}]}else if(t==="pluie")n=[{label:"Cumul pluie",val:`${l.reduce((m,c)=>m+c,0).toFixed(1)} mm`}];else if(t==="rayo"){const o=l.filter(m=>m>120).length*a;n=[{label:"Ensoleillement",val:`${Math.round(o)} h`}]}else if(t==="hws"){const o=l.filter(m=>m>50).length*a;n=[{label:"Heures d'humectation",val:`${Math.round(o)} h`}]}return n.length?`<div class="m-chart-cumuls">${n.map(o=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${o.label}</span>
      <span class="m-chart-cumul-val">${o.val}</span>
    </div>`).join("")}</div>`:""}function ft(e,s){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),i=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:s});document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(i.href),100)}function gt(e,s){const t=ke[e.model]||[];if(!t.length)return;const i=ue[s]||60,d=me[s]||10080,a=d/i*6e4,l=new Date,n=new Date(l-d*6e4),o=["Horodatage",...t.map(c=>`${c.label} (${c.unit})`)].join(";"),m=Array.from({length:i},(c,b)=>[new Date(n.getTime()+b*a).toISOString().replace("T"," ").slice(0,19),...t.map(r=>de(r.id,1)[0].toFixed(2))].join(";"));ft([o,...m].join(`\r
`),`${e.serial}_${s}_${new Date().toISOString().slice(0,10)}.csv`)}function yt(e,s="7d",t="1h"){const i=ke[e.model]||[];if(!i.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const d=i.map(a=>`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${a.color}">${a.label}</span>
        </div>
        ${vt(a.id,a.color,a.cumul,s)}
        ${bt(a.id,s,a.cumulsType)}
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
      <button class="m-export-btn" title="Exporter CSV"><i class="bi bi-download"></i></button>
    </div>
    <div class="m-detail-section">${d}</div>`}function $t(e){const s=e.parcelId?I.find(l=>l.id===e.parcelId):null,t=s?F.find(l=>l.id===s.orgId):null,i=e.networkQuality||0,d=i>70?"#30d158":i>40?"#ff9f0a":"#ff3b30",a=e.event?[e.event]:[];return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${ut[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${Ce[e.model]||e.model}</span>
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
          <a class="m-itinerary-link" href="geo:${(s==null?void 0:s.lat)||0},${(s==null?void 0:s.lng)||0}?q=${(s==null?void 0:s.lat)||0},${(s==null?void 0:s.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">État</div>
      <div class="m-list">
        ${a.length?a.map(l=>`<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${l}</span></div>`).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${d};font-weight:600">${i}%</span>
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
    </div>`}function Ee(e){var b;const s=e.parcelId?I.find(u=>u.id===e.parcelId):null;let t="donnees",i="7d",d="1h",a=!1;const l=s&&((b=F.find(u=>u.id===s.orgId))==null?void 0:b.ville)||"",n=Le(`
    <div class="m-detail-header">
      <div class="m-detail-row1">
        <div class="m-navbar-logo-mark">W</div>
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-row2">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <span class="m-d-name">${e.serial}</span>
        <span class="m-d-sep">·</span><span class="m-d-sub">${Ce[e.model]||e.model}</span>
        ${l?`<span class="m-d-sep">·</span><span class="m-d-commune">${l}</span>`:""}
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function o(){const u=n.querySelector("#detail-content");t==="donnees"&&(u.innerHTML=yt(e,i,d)),t==="params"&&(u.innerHTML=$t(e),m()),c()}function m(){const u=window.L;!u||!s||setTimeout(()=>{const r=n.querySelector("#sensor-minimap");if(!r)return;const v=u.map(r,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(v),v.setView([s.lat,s.lng],15),u.circleMarker([s.lat,s.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(v)},50)}function c(){var u,r,v;(u=n.querySelector(".m-period-sel"))==null||u.addEventListener("change",f=>{i=f.target.value,o()}),(r=n.querySelector(".m-step-sel"))==null||r.addEventListener("change",f=>{d=f.target.value,o()}),(v=n.querySelector(".m-export-btn"))==null||v.addEventListener("click",()=>gt(e,i)),n.querySelectorAll(".m-chart-svg-wrap").forEach(f=>ht(f)),n.querySelectorAll(".m-list-row[data-action]").forEach(f=>{f.addEventListener("click",()=>j("Fonctionnalité à venir"))})}n.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{n.querySelectorAll(".m-detail-tab").forEach(r=>r.classList.remove("active")),u.classList.add("active"),t=u.dataset.view,o()})}),n.querySelector(".m-detail-back").addEventListener("click",Ae),n.querySelector("#d-star").addEventListener("click",()=>{a=!a;const u=n.querySelector("#d-star");u.querySelector("i").className=a?"bi bi-star-fill":"bi bi-star",u.style.color=a?"#f5c842":"",j(a?"Ajouté aux favoris":"Retiré des favoris")}),n.querySelector("#d-plus").addEventListener("click",()=>{const u=`
      <button class="m-sheet-option" data-a="plot"><i class="bi bi-map"></i> Parcelle</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" data-a="maintenance"><i class="bi bi-tools"></i> Opération de maintenance</button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`,r=document.createElement("div");r.innerHTML=u;const v=le({title:"Ajouter au capteur",body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll("[data-a]").forEach(f=>{f.addEventListener("click",()=>{v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),j("Fonctionnalité à venir")},280)})})}),o()}const V=100,Se=1,ne=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],wt={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},xt={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function Q(e,s){return(xt[e]||[]).includes(s)}function Mt(e){return wt[e]||e}const ee=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Et(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function St(e,s){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const i=s==="admin",d=F.filter($=>$.id!==V),a=Object.fromEntries(I.map($=>[$.id,$])),l=Object.fromEntries(F.map($=>[$.id,$]));let n=null,o=null;const m={};let c="carte",b="pluie",u="7 derniers jours",r="all";function v($){const x=`${$}-${b}-${u}`;return x in m||(m[x]=Et(b)),m[x]}function f(){if(i){if(r==="all")return P;if(r===String(V)){const E=new Set(I.filter(y=>y.orgId===V).map(y=>y.id));return P.filter(y=>E.has(y.parcelId))}const p=new Set(I.filter(E=>String(E.orgId)===r).map(E=>E.id));return P.filter(E=>p.has(E.parcelId))}const $=new Set(I.filter(p=>p.orgId===Se).map(p=>p.id)),x=P.filter(p=>$.has(p.parcelId)),L=P.filter(p=>!$.has(p.parcelId)&&ne.includes(p.model));return r==="mine"?x:r==="network"?L:[...x,...L]}function h($){const x=$.parcelId?a[$.parcelId]:null;if(!x)return null;const L=($.id*7919%1e3-500)/1e6,p=($.id*6271%1e3-500)/1e6;return{lat:x.lat+L,lng:x.lng+p,name:x.name}}function w($){var L;const x=$.parcelId?a[$.parcelId]:null;return x&&((L=l[x.orgId])==null?void 0:L.ville)||null}function T(){if(n){try{n.remove()}catch{}n=null,o=null}}function C(){T();const $=ee.find(y=>y.id===b)||ee[0],x=f();let L;if(i)L=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${V}"${r===String(V)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${d.map(y=>`<option value="${y.id}"${r===String(y.id)?" selected":""}>${y.name}</option>`).join("")}
        </select>`;else{const y=F.find(S=>S.id===Se),g=F.find(S=>S.id===V);L=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${r==="all"?" selected":""}>Tout le réseau</option>
          <option value="mine"${r==="mine"?" selected":""}>${(y==null?void 0:y.name)||"Mon organisation"}</option>
          <option value="network"${r==="network"?" selected":""}>${(g==null?void 0:g.name)||"Breiz'Agri Conseil"}</option>
        </select>`}const p=[...x].sort((y,g)=>{const S=Q(y.model,b),k=Q(g.model,b);return S&&!k?-1:!S&&k?1:S?v(g.id)-v(y.id):0}),E=p.length?`<div class="m-plain-list">${p.map(y=>{const g=ne.includes(y.model),k=Q(y.model,b)?`<span class="m-sensor-val">${v(y.id)} ${$.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${y.id}">
              <div class="m-sensor-icon" style="background:${g?"#0172A420":"#5b8dd920"};color:${g?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${Mt(y.model)}</span>
                <span class="m-sensor-sub">${y.serial}${w(y)?` · ${w(y)}`:""}</span>
              </div>
              ${k}
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
            ${ee.map(y=>`<option value="${y.id}"${y.id===b?" selected":""}>${y.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${$.aggs.map(y=>`<option${y===u?" selected":""}>${y}</option>`).join("")}
          </select>
        </div>
        ${L}
      </div>
      ${c==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${E}</div>`}`,A(),c==="carte"&&M(x,$)}function M($,x){const L=window.L;L&&setTimeout(()=>{const p=t.querySelector("#sensor-map");if(!p)return;n=L.map(p,{zoomControl:!1,attributionControl:!1}),L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(n);const E=[];$.forEach(y=>{const g=h(y);if(!g)return;const S=Q(y.model,b),k=ne.includes(y.model),R=L.circleMarker([g.lat,g.lng],{radius:S?10:7,color:"#fff",weight:2,fillColor:k?"#0172A4":"#5b8dd9",fillOpacity:S?.95:.45}).addTo(n);S&&R.bindTooltip(`${v(y.id)} ${x.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),R.on("click",()=>Ee(y)),E.push([g.lat,g.lng])}),E.length&&(o=E,n.fitBounds(E,{padding:[32,32]})),n.invalidateSize()},0)}window.addEventListener("m-tab-change",$=>{$.detail==="capteurs"&&c==="carte"&&n&&setTimeout(()=>{n.invalidateSize(),o!=null&&o.length&&n.fitBounds(o,{padding:[32,32]})},50)});function A(){var $,x,L;t.querySelectorAll(".m-view-btn").forEach(p=>p.addEventListener("click",()=>{c=p.dataset.view,C()})),($=t.querySelector("#metric-sel"))==null||$.addEventListener("change",p=>{var E;b=p.target.value,u=((E=ee.find(y=>y.id===b))==null?void 0:E.defaultAgg)||"",C()}),(x=t.querySelector("#agg-sel"))==null||x.addEventListener("change",p=>{u=p.target.value,C()}),(L=t.querySelector("#org-filter"))==null||L.addEventListener("change",p=>{r=p.target.value,C()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(p=>{p.addEventListener("click",()=>{const E=P.find(y=>y.id===+p.dataset.sensorId);E&&Ee(E)})})}C()}const Lt=new URLSearchParams(window.location.search),z=Lt.get("role")==="adherent"?"adherent":"admin";function Ie(){const e=document.getElementById("status-time");if(!e)return;const s=new Date;e.textContent=s.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}Ie();setInterval(Ie,1e4);const D=["dashboard","parcelles","capteurs","alertes","parametres"];let ae="dashboard";function J(e){var s,t;!D.includes(e)||e===ae||(ae=e,document.querySelectorAll(".m-screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(i=>i.classList.remove("active")),(s=document.getElementById(`screen-${e}`))==null||s.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}document.getElementById("bottom-nav").addEventListener("click",e=>{const s=e.target.closest(".nav-item");s&&J(s.dataset.tab)});let O=null,Y=null;const Pe=50,K=document.getElementById("screen-stack");K.addEventListener("mousedown",e=>{O=e.clientX,Y=e.clientY});K.addEventListener("mouseup",e=>{if(O===null)return;const s=e.clientX-O,t=e.clientY-Y;if(Math.abs(s)>Pe&&Math.abs(s)>Math.abs(t)){const i=D.indexOf(ae);s<0&&i<D.length-1&&J(D[i+1]),s>0&&i>0&&J(D[i-1])}O=null,Y=null});K.addEventListener("mouseleave",()=>{O=null});K.addEventListener("touchstart",e=>{O=e.touches[0].clientX,Y=e.touches[0].clientY},{passive:!0});K.addEventListener("touchend",e=>{if(O===null)return;const s=e.changedTouches[0].clientX-O,t=e.changedTouches[0].clientY-Y;if(Math.abs(s)>Pe&&Math.abs(s)>Math.abs(t)){const i=D.indexOf(ae);s<0&&i<D.length-1&&J(D[i+1]),s>0&&i>0&&J(D[i-1])}O=null},{passive:!0});const At=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...z==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]];function Tt(){var s;const e=document.getElementById("param-segment");e&&(z==="adherent"&&((s=document.getElementById("param-reseau"))==null||s.style.setProperty("display","none")),At.forEach((t,i)=>{const d=document.createElement("button");d.className="m-segment-btn"+(i===0?" active":""),d.textContent=t.label,d.dataset.target=t.id,d.addEventListener("click",()=>{var a;e.querySelectorAll(".m-segment-btn").forEach(l=>l.classList.remove("active")),d.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(l=>l.classList.remove("active")),(a=document.getElementById(t.id))==null||a.classList.add("active")}),e.appendChild(d)}))}Tt();Ze(document.getElementById("screen-dashboard"),z);mt(document.getElementById("screen-parcelles"),z);St(document.getElementById("screen-capteurs"),z);Ve(document.getElementById("screen-alertes"),z);De(document.getElementById("param-compte"),z);
