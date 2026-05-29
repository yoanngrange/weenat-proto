import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as V}from"./plots-BFmvZ9cD.js";import{d as es,e as $i}from"./store-InOgbptE.js";import{s as Y}from"./sensors-Bk1sI8WC.js";import{o as se}from"./orgs-Cx4wNzLL.js";import{n as xe}from"./network-YzWdS0n_.js";import{b as Me,I as X,s as He}from"./irrigations-WiYYdaCC.js";import{I as ts,A as vt,a as Jt,M as is}from"./constants-C2D4LmLD.js";import{m as ft}from"./members-C_ssoUx1.js";const Be=[];function ce(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),Be.push(t),t}function te(){const e=Be.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function Gt(){return Be.length}function ss(){return Be.some(e=>e.dataset.dirty==="true")}function wi(){Be.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{Be.forEach(e=>e.remove()),Be.length=0});const Ut={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},as=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Yt=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let je={};function fe(e){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function _e({title:e,body:i,onDone:t,doneLabel:a="OK"}){var o;const l=document.getElementById("phone-screen");(o=document.querySelector(".m-sheet-overlay"))==null||o.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${a}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,n.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),l.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const s=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",s),n.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),s()}),n.addEventListener("click",d=>{d.target===n&&s()}),n}function Zt(e,i,t){const a=document.createElement("div");a.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const l=a.querySelector("input");_e({title:e,body:a,doneLabel:"Enregistrer",onDone:()=>{t(l.value.trim()),fe("Enregistré")}}),setTimeout(()=>l.focus(),300)}function Kt(e,i,t,a){const l=document.createElement("div");l.innerHTML=i.map((s,o)=>`
    <div class="m-sheet-option${s===t?" m-sheet-option--active":""}" data-i="${o}">
      <span>${s}</span>
      ${s===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const n=_e({title:e,body:l,doneLabel:"Fermer",onDone:()=>{}});l.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{a(i[+s.dataset.i]),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280),fe("Enregistré")})})}function ns(e,i){const t=document.createElement("div"),a=()=>{var l;t.innerHTML=e.map((n,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${n.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${n.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(n=>{n.addEventListener("input",()=>{e[+n.dataset.i][n.dataset.f]=n.value})}),t.querySelectorAll(".m-sheet-remove").forEach(n=>{n.addEventListener("click",()=>{e.splice(+n.dataset.i,1),a()})}),(l=t.querySelector(".m-sheet-add-phone"))==null||l.addEventListener("click",()=>{e.push({label:"",numero:""}),a()})};a(),_e({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),fe("Enregistré")}})}function ls(e,i,t){const a=document.createElement("div");a.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,a.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var n;(n=navigator.clipboard)==null||n.writeText(e.value).catch(()=>{}),fe("Clé copiée !")});const l=_e({title:"Clé API",body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const n=i.findIndex(s=>s.id===e.id);n!==-1&&i.splice(n,1),l.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{l.remove(),t()},280),fe("Clé supprimée")})}function os(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function rs(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");_e({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const a=t.value.trim();if(!a){fe("Entrez un nom");return}const l={id:Date.now(),name:a,created:new Date().toLocaleDateString("fr-FR"),value:os()};e(l),fe("Clé générée")}}),setTimeout(()=>t.focus(),300)}function cs(e,i){je={profile:JSON.parse(JSON.stringify(Ut[i]||Ut.admin)),langue:"Français",unites:Yt[0]};const a=localStorage.getItem("mobile_avatarUrl")||null;function l(){const s=je.profile,o=a?`<img src="${a}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,d=s.apiKeys.map(c=>`
      <div class="m-list-row" data-key-id="${c.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${c.name}</span>
          <span class="m-list-row-sub">créée le ${c.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),r=s.phones.map((c,x)=>`
      <div class="m-list-row${x===s.phones.length-1&&s.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${c.label||"Numéro "+(x+1)}</span>
        <span class="m-list-row-value">${c.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");e.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${o}</div>
        <div class="m-compte-name">${s.prenom} ${s.nom}</div>
        <label class="m-compte-avatar-btn">
          <input type="file" accept="image/*" id="m-avatar-upload" hidden>
          Changer la photo
        </label>
      </div>

      <div class="m-list-section-header">Identité</div>
      <div class="m-list">
        <div class="m-list-row" data-action="prenom">
          <span class="m-list-row-label">Prénom</span>
          <span class="m-list-row-value">${s.prenom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="nom">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${s.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Contact</div>
      <div class="m-list">
        <div class="m-list-row" data-action="email">
          <span class="m-list-row-label">Email</span>
          <span class="m-list-row-value" style="font-size:13px">${s.email} <i class="bi bi-check-circle-fill" style="color:#30d158;font-size:10px"></i></span>
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
          <span class="m-list-row-value" id="val-langue">${je.langue}</span>
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
        ${d}
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
    `,n()}function n(){var o;const s=je.profile;(o=e.querySelector("#m-avatar-upload"))==null||o.addEventListener("change",d=>{const r=d.target.files[0];if(!r)return;const c=new FileReader;c.onload=x=>{localStorage.setItem("mobile_avatarUrl",x.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${x.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},c.readAsDataURL(r)}),e.querySelectorAll(".m-list-row[data-action]").forEach(d=>{d.addEventListener("click",()=>{switch(d.dataset.action){case"prenom":Zt("Prénom",s.prenom,r=>{s.prenom=r,l()});break;case"nom":Zt("Nom",s.nom,r=>{s.nom=r,l()});break;case"email":_e({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>fe("Fonctionnalité à venir")});break;case"phones":ns(s.phones,r=>{s.phones=r,l()});break;case"mdp":_e({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>fe("Fonctionnalité à venir")});break;case"langue":Kt("Langue",as,je.langue,r=>{je.langue=r,e.querySelector("#val-langue").textContent=r});break;case"unites":Kt("Unités",Yt,je.unites,r=>{je.unites=r,e.querySelector("#val-unites").textContent=r.split(" ")[0]});break;case"gen-key":rs(r=>{s.apiKeys.push(r),l()});break;case"delete":fe("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(d=>{d.addEventListener("click",()=>{const r=s.apiKeys.find(c=>c.id===+d.dataset.keyId);r&&ls(r,s.apiKeys,l)})}),e.querySelectorAll(".m-toggle input[data-notif]").forEach(d=>{d.addEventListener("change",()=>fe("Préférence enregistrée"))})}l()}function N(e){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function oe({title:e,body:i,doneLabel:t="Fermer",onDone:a}={}){var o;const l=document.getElementById("phone-screen");(o=document.querySelector(".m-sheet-overlay"))==null||o.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,n.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),l.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const s=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",s),n.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),s()}),n.addEventListener("click",d=>{d.target===n&&s()}),n}function ds(e){const i=[{label:"Seuil dépassé",desc:"Conditions déclenchantes vérifiées",duration:"2h34",resolved:!0},{label:"Seuil dépassé",desc:"Notification SMS envoyée",duration:"45min",resolved:!0},{label:"Seuil dépassé",desc:"Valeur mesurée hors plage",duration:"1h20",resolved:!0},{label:"Fausse alerte",desc:"Pic transitoire — durée < seuil",duration:null,resolved:!0},{label:"Seuil dépassé",desc:"Conditions toujours vérifiées",duration:"3h05",resolved:!0},{label:"Alerte en cours",desc:"Conditions vérifiées depuis ce matin",duration:null,resolved:!1}],t=3+e%5,a=Date.now();return Array.from({length:t},(l,n)=>{const s=e*17+n*7,o=1+n*(2+s%6),d=new Date(a-o*864e5),r=i[s%i.length],c=d.getDate(),x=d.getMonth()+1;return{date:`${String(c).padStart(2,"0")}/${String(x).padStart(2,"0")}`,heure:`${String(6+s%14).padStart(2,"0")}h${String(s%60).padStart(2,"0")}`,label:r.label,desc:r.desc,duration:r.duration,resolved:n>0?!0:r.resolved}})}const us=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],ps=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],Xt={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},ms={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function ht(e){if(!e)return"—";const[i,t,a]=e.split("-");return`${a}/${t}/${i}`}function Qt(e){const i=e.sensorIds.map(a=>{const l=Y.find(n=>n.id===a);return l?`${l.model} ${l.serial}`:null}).filter(Boolean),t=e.parcelIds.map(a=>{const l=V.find(n=>n.id===a);return(l==null?void 0:l.name)||null}).filter(Boolean);return[...i,...t]}function vs(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const a=[...i==="adherent"?ps:us];function l(){if(!a.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=a.map(s=>{Qt(s);const o=ms[s.metric]||"bi-bell",d=s.statut==="actif";return`
        <div class="m-alert-card" data-id="${s.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${d?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${o}"></i>
            </div>
            <span class="m-alert-name">${s.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${d?"checked":""} data-id="${s.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${Xt[s.metric]||s.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${ht(s.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${s.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),n()}function n(){t.querySelectorAll(".m-alert-toggle input").forEach(s=>{s.addEventListener("change",o=>{o.stopPropagation();const d=+s.dataset.id,r=a.find(c=>c.id===d);r&&(r.statut=s.checked?"actif":"inactif",l(),N(`Alerte ${s.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-more-btn").forEach(s=>{s.addEventListener("click",o=>{o.stopPropagation();const d=+s.dataset.id,r=a.find(g=>g.id===d);if(!r)return;Qt(r);const c=document.createElement("div"),x=ds(d);function L(){const g=r.sensorIds.map((m,v)=>{const S=Y.find(C=>C.id===m);return S?{label:`${S.model} ${S.serial}`,type:"sensor",idx:v}:null}).filter(Boolean),y=r.parcelIds.map((m,v)=>{const S=V.find(C=>C.id===m);return S?{label:S.name,type:"parcel",idx:v}:null}).filter(Boolean),b=[...g,...y];return b.length?b.map(m=>`<div class="m-perimetre-item" data-type="${m.type}" data-idx="${m.idx}">
                <span>${m.label}</span>
                <button class="m-perimetre-del" data-type="${m.type}" data-idx="${m.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const u=document.createElement("div");u.className="m-sheet-info-rows";function p(){var m;c.innerHTML="";const g=document.createElement("div");g.className="m-sheet-info-rows",g.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Xt[r.metric]||r.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${ht(r.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${ht(r.created)}</span></div>
            ${(m=r.phones)!=null&&m.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${r.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${r.statut}</span></div>`;const y=document.createElement("div");y.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",y.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${L()}</div>`,g.appendChild(y),c.appendChild(g);const b=document.createElement("div");b.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${x.map(v=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${v.resolved?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${v.date} à ${v.heure}${v.duration?` · ${v.duration}`:""}</div>
                <div class="m-history-label">${v.label}</div>
                <div class="m-history-desc">${v.desc}</div>
              </div></div>`).join("")}`,c.appendChild(b),c.querySelectorAll(".m-perimetre-del").forEach(v=>{v.addEventListener("click",S=>{S.stopPropagation();const C=v.dataset.type,E=+v.dataset.idx;C==="sensor"?r.sensorIds.splice(E,1):r.parcelIds.splice(E,1),p(),l(),N("Retiré du périmètre")})})}p(),oe({title:r.name,body:c,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-alert-card").forEach(s=>{s.addEventListener("click",o=>{if(o.target.closest(".m-alert-toggle")||o.target.closest(".m-alert-more-btn"))return;const d=+s.dataset.id,r=a.find(L=>L.id===d);if(!r)return;const c=document.createElement("div");c.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const x=oe({title:r.name,body:c,doneLabel:"Fermer",onDone:()=>{}});c.querySelector("#al-edit").addEventListener("click",()=>{x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{x.remove(),N("Modification à venir")},280)}),c.querySelector("#al-delete").addEventListener("click",()=>{const L=a.findIndex(u=>u.id===d);L!==-1&&a.splice(L,1),x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{x.remove(),l()},280),N("Alerte supprimée")})})})}l()}const fs="modulepreload",hs=function(e){return"/weenat-proto/"+e},ei={},Ee=function(i,t,a){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=Promise.allSettled(t.map(d=>{if(d=hs(d),d in ei)return;ei[d]=!0;const r=d.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const x=document.createElement("link");if(x.rel=r?"stylesheet":fs,r||(x.as="script"),x.crossOrigin="",x.href=d,o&&x.setAttribute("nonce",o),document.head.appendChild(x),r)return new Promise((L,u)=>{x.addEventListener("load",L),x.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return l.then(s=>{for(const o of s||[])o.status==="rejected"&&n(o.reason);return i().catch(n)})};function Fe(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const we=new Date().toISOString().split("T")[0];function Ze(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,a,l]=e.split("-");return`${parseInt(l)} ${i[parseInt(a)-1]} ${t}`}function Si(e,i,t,a){if(t){const s=t.ids.map(o=>{var d;return(d=i.find(r=>r.id===o))==null?void 0:d.name}).filter(Boolean);return[{title:`Groupe "${t.label}"`,names:s}]}const l=new Set(e),n=[];for(const s of a)if(s.ids.length>=2&&s.ids.every(o=>e.has(o))){const o=s.ids.map(d=>{var r;return(r=i.find(c=>c.id===d))==null?void 0:r.name}).filter(Boolean);n.push({title:`Groupe "${s.label}"`,names:o}),s.ids.forEach(d=>l.delete(d))}if(l.size>0){const s=[...l].map(o=>{var d;return(d=i.find(r=>r.id===o))==null?void 0:d.name}).filter(Boolean);n.push({title:n.length>0?"Autres parcelles":null,names:s})}return n}function ti(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,a]=e.split("-");return`${parseInt(a)} ${i[parseInt(t)-1]}`}function Ct(e){return!e||e===we?"":e<we?'<span class="irr-pill irr-pill--past">Passée · Réalisée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function ot(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Ei(e,i,t){const a=[],l=new Set(e);for(const n of i){const s=n.ids.filter(o=>e.has(o));s.length&&(s.length===n.ids.length?(a.push(n.label),n.ids.forEach(o=>l.delete(o))):s.forEach(o=>{const d=t.find(r=>r.id===o);d&&(a.push(d.name),l.delete(o))}))}for(const n of l){const s=t.find(o=>o.id===n);s&&a.push(s.name)}return a}function ut(e,i,t){const a=i.filter(s=>!e.some(o=>o.ids.includes(s.id))),l=e.map(s=>{const o=s.ids.every(c=>t.has(c)),d=s.ids.some(c=>t.has(c)),r=s.ids.map(c=>i.find(x=>x.id===c)).filter(Boolean).map(c=>{const x=t.has(c.id);return`<div class="irr-plot-row irr-plot-row--child${x?" irr-plot-row--sel":""}" data-pid="${c.id}">
          <div class="irr-plot-name">${c.name}</div>
          ${ot(x,!1)}
        </div>`}).join("");return`<div class="irr-group-card${o?" irr-group-card--sel":""}" data-gids="${s.ids.join(",")}">
      <div class="irr-group-info">
        <div class="irr-group-name">${s.label}</div>
        <div class="irr-group-meta">${s.ids.length} parcelle${s.ids.length>1?"s":""}</div>
      </div>
      ${ot(o,d)}
    </div>${r}`}).join(""),n=a.map(s=>{const o=t.has(s.id);return`<div class="irr-plot-row${o?" irr-plot-row--sel":""}" data-pid="${s.id}">
      <div><div class="irr-plot-name">${s.name}</div>${bs(s)}</div>
      ${ot(o,!1)}
    </div>`}).join("");return l+(a.length?`${e.length?'<div class="irr-section-lbl" style="margin-top:10px">Autres parcelles</div>':""}${n}`:"")}function kt({title:e,body:i,onSave:t,onDelete:a,saveLabel:l="Enregistrer"}){var d,r;const n=document.getElementById("phone-screen");(d=document.querySelector(".irr-sheet-overlay"))==null||d.remove();const s=document.createElement("div");s.className="irr-sheet-overlay",s.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${a?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${l}</button>
      </div>
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const o=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",c=>{c.target===s&&o()}),(r=s.querySelector("#iss-del"))==null||r.addEventListener("click",()=>{a==null||a(),o()}),s.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),o()}),s}function Li(e,i,t){const a=i.filter(o=>e.has(o.id)&&(!o.irrigation||o.irrigation==="Non irrigué"));if(!a.length){t();return}const l=document.createElement("div");l.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${a.length===1?`<strong>${a[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${a.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" style="width:100%;padding:12px;border-radius:10px;border:1px solid #E0DED8;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e">
      <option value="">— Choisir un type —</option>
      ${ts.map(o=>`<option value="${o}">${o}</option>`).join("")}
    </select>`;const s=kt({title:"Type d'irrigation",body:l,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const o=l.querySelector("#irr-type-ask").value;o&&a.forEach(d=>{d.irrigation=o,es(d.id,{irrigation:o})}),t()}}).querySelector("#iss-del");s&&(s.textContent="Passer",s.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function bs(e){const i=e.crop,t=e.irrigation||null,a=e.substrate?"Substrat : "+e.substrate:e.texture||null,l=[i,t||"<em>type irrigation non renseigné</em>",a].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${l.join(" · ")}</span>`}function Ci(e,i,t=null){let a=new Set((t==null?void 0:t.ids)??[]),l=we,n=10;const s=Me(e);function o(){return ut(s,e,a)}function d(p){p.querySelector("#irr-date-hint").innerHTML=Ct(l)}function r(p){const g=a.size,y=p.querySelector(".irr-summary"),b=p.querySelector(".irr-save-btn");!y||!b||(t?(y.textContent="",b.disabled=!1,b.textContent="Enregistrer"):(y.textContent=g===0?"":`${g} parcelle${g>1?"s":""} · ${n} mm`,b.disabled=g===0,b.textContent="Enregistrer"))}function c(p){p.querySelectorAll(".irr-group-card").forEach(g=>{g.addEventListener("click",()=>{const y=g.dataset.gids.split(",").map(Number),b=y.every(m=>a.has(m));y.forEach(m=>b?a.delete(m):a.add(m)),p.querySelector("#irr-sel-list").innerHTML=o(),c(p),r(p)})}),p.querySelectorAll(".irr-plot-row").forEach(g=>{g.addEventListener("click",()=>{const y=+g.dataset.pid;a.has(y)?a.delete(y):a.add(y),p.querySelector("#irr-sel-list").innerHTML=o(),c(p),r(p)})})}const x=t?e.filter(p=>t.ids.includes(p.id)):[],L=t?`<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${t.label} <span style="color:#9E9D98;font-weight:400">· ${t.ids.length} parcelle${t.ids.length>1?"s":""}</span></span>
       </div>
       ${x.map(p=>`<div style="font-size:13px;color:#636366;padding:2px 4px">· ${p.name}</div>`).join("")}`:`<div id="irr-sel-list">${o()}</div>`,u=Fe(ce(`
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
            <input type="date" class="irr-date-input" id="irr-date" value="${l}" />
            <div id="irr-date-hint" style="min-height:14px"></div>
          </div>
          <div class="irr-field-card">
            <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
            <input type="number" class="irr-qty-input" id="irr-qty" value="${n}" min="1" />
            <div class="irr-field-hint">par parcelle</div>
          </div>
        </div>
      </div>
    </div>
    <div class="irr-scroll-body">
      ${L}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${t?"":"disabled"}>Enregistrer</button>
    </div>
  `));u.dataset.dirty="true",t||c(u),r(u),u.querySelector("#irr-back").addEventListener("click",te),u.querySelector("#irr-date").addEventListener("change",p=>{l=p.target.value,d(u),r(u)}),u.querySelector("#irr-qty").addEventListener("input",p=>{n=parseInt(p.target.value)||1,r(u)}),u.querySelector(".irr-save-btn").addEventListener("click",()=>{const p=t?new Set(t.ids):a;Li(p,e,()=>{const g=l>we,y=t?[t.label]:Ei(p,s,e);y.forEach(S=>{X.push({iso:l,mm:n,real:!g,label:S,fromStrategy:!1})}),He();const b=y.length===1?y[0]:"all",m=Si(p,e,t,s),v=m.reduce((S,C)=>S+C.names.length,0);wi(),ki({title:v>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:Ze(l)},{label:"Quantité",value:`${n} mm`}],parcelSections:m,isFut:g,plots:e,calFilter:b,addedCount:y.length,stackDepth:1})})})}function At(e,i,t=null,a=null){let l=new Set((t==null?void 0:t.ids)??[]),n=we,s=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],o=10,d=7;const r=Me(e);function c(){if(!n||!s||d<=0)return[];const g=[],y=new Date(s);let b=new Date(n);for(;b<=y&&g.length<100;)g.push(new Date(b)),b.setDate(b.getDate()+d);return g}function x(){const g=c();l.size;const y=g.length>0?`<span class="irr-preview-ok">↗ ${g.length} irrigations · ${g.length*o} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${n}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${s}" />
        </div>
      </div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="strat-qty" value="${o}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence <span class="irr-unit">(jours)</span></div>
          <input type="number" class="irr-qty-input" id="strat-freq" value="${d}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${y}</div>
      ${t?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${t.label} <span style="color:#9E9D98;font-weight:400">· ${t.ids.length} parcelle${t.ids.length>1?"s":""}</span></span>
           </div>`:ut(r,e,l)}
      <div class="irr-bottom-spacer"></div>
    `}function L(g){const y=l.size,b=c(),m=g.querySelector(".irr-save-btn"),v=g.querySelector(".irr-summary");!m||!v||(m.disabled=y===0||b.length===0,v.textContent=y===0?"":`${y} parcelle${y>1?"s":""} · ${b.length} occurrences`,m.textContent="Voir l'aperçu →")}function u(g){var m,v,S,C;const y=g.querySelector(".irr-scroll-body");y.querySelectorAll(".irr-group-card").forEach(E=>{E.addEventListener("click",()=>{const k=E.dataset.gids.split(",").map(Number),A=k.every(f=>l.has(f));k.forEach(f=>A?l.delete(f):l.add(f)),y.innerHTML=x(),u(g),L(g)})}),y.querySelectorAll(".irr-plot-row").forEach(E=>{E.addEventListener("click",()=>{const k=+E.dataset.pid;l.has(k)?l.delete(k):l.add(k),y.innerHTML=x(),u(g),L(g)})});const b=()=>{const E=c(),k=y.querySelector("#strat-preview");k&&(k.innerHTML=E.length>0?`<span class="irr-preview-ok">↗ ${E.length} irrigations · ${E.length*o} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),L(g)};(m=y.querySelector("#strat-debut"))==null||m.addEventListener("change",E=>{n=E.target.value,b()}),(v=y.querySelector("#strat-fin"))==null||v.addEventListener("change",E=>{s=E.target.value,b()}),(S=y.querySelector("#strat-qty"))==null||S.addEventListener("input",E=>{o=parseInt(E.target.value)||1,b()}),(C=y.querySelector("#strat-freq"))==null||C.addEventListener("input",E=>{d=parseInt(E.target.value)||1,b()})}const p=Fe(ce(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${x()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));p.dataset.dirty="true",u(p),L(p),p.querySelector("#strat-back").addEventListener("click",te),p.querySelector(".irr-save-btn").addEventListener("click",()=>{const g=c();gs(p,e,l,n,s,o,d,g,i,t,a)})}function gs(e,i,t,a,l,n,s,o,d,r,c=null){var C;const x=t.size,L=5;o.length-L;function u(E){const A=E.toISOString().slice(0,10)>=we?"#FFB705":"#FF8500",f=E.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${Ze(f)}</span>
      <span style="font-size:13px;font-weight:700;color:${A}">${n} mm</span>
    </div>`}const p=o.filter(E=>E.toISOString().slice(0,10)<we),g=o.filter(E=>E.toISOString().slice(0,10)>=we),y=g.slice(0,L),b=g.slice(L),m=p.length?`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${p.map(u).join("")}`:"",v=g.length?`
    <div class="irr-section-lbl" style="margin-top:${p.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${y.map(u).join("")}
    ${b.length?`
      <div id="apercu-rest" style="display:none">${b.map(u).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${b.length} irrigation${b.length>1?"s":""} de plus</button>
    `:""}`:"",S=Fe(ce(`
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
          <div class="irr-apercu-big">${o.length} irrigations</div>
          <div class="irr-apercu-sub">${ti(a)} → ${ti(l)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${o.length*n} mm</div>
          <div class="irr-apercu-sub">${x} parcelle${x>1?"s":""} · ${n} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${m}
        ${v}
        ${!p.length&&!g.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));S.dataset.dirty="true",S.querySelector("#apercu-back").addEventListener("click",te),(C=S.querySelector("#apercu-show-more"))==null||C.addEventListener("click",E=>{S.querySelector("#apercu-rest").style.display="",E.target.remove()}),S.querySelector("#apercu-confirm").addEventListener("click",()=>{const E=Me(i),k=r?new Set(r.ids):t;Li(k,i,()=>{const A=r?[r.label]:Ei(k,E,i),f=A.length===1?A[0]:"all",w=Si(k,i,r,E);c&&X.splice(0,X.length,...X.filter(h=>!(A.includes(h.label)&&h.fromStrategy&&!h.real))),o.forEach(h=>{const $=h.toISOString().slice(0,10);A.forEach(M=>{X.push({iso:$,mm:n,real:$<=we,label:M,fromStrategy:!0})})}),He(),wi(),ki({title:"Saison enregistrée",params:[{label:"Début",value:Ze(a)},{label:"Fin",value:Ze(l)},{label:"Quantité",value:`${n} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${o.length*A.length}`}],parcelSections:w,isFut:!0,plots:i,calFilter:f,addedCount:o.length*A.length,stackDepth:2})})})}function ki({title:e,params:i,parcelSections:t=[],isFut:a,plots:l,calFilter:n,addedCount:s=0,stackDepth:o=3}){const d=(i||[]).map(y=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${y.label}</span>
      <span class="irr-confirm-param-val">${y.value}</span>
    </div>`).join(""),r=3,c=t.flatMap(y=>y.names.map(b=>({title:y.title,name:b}))),x=c.slice(0,r),L=c.slice(r);function u(y){const b=[];let m=null;for(const v of y)(!m||m.title!==v.title)&&(m={title:v.title,names:[]},b.push(m)),m.names.push(v.name);return b.map(v=>`
      ${v.title?`<div class="irr-confirm-sec-hd">${v.title}</div>`:""}
      ${v.names.map(S=>`<div class="irr-confirm-parcel">· ${S}</div>`).join("")}
    `).join("")}const p=c.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${u(x)}
      ${L.length?`
        <details class="irr-confirm-more">
          <summary>${L.length} parcelle${L.length>1?"s":""} de plus</summary>
          ${u(L)}
        </details>`:""}
    </div>`,g=Fe(ce(`
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
      <div class="irr-confirm-params">${d}</div>
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
  `));g.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&X.splice(X.length-s,s),te()}),g.querySelector("#conf-back").addEventListener("click",()=>{for(let y=0;y<=o;y++)te()}),g.querySelector("#conf-calendar").addEventListener("click",()=>{Ai(l,n)})}const ys=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function Ai(e,i){const t=Me(e);let a=i||"";function l(y,b,m){if(!y)return null;const v=b.find(C=>C.label===y);if(v)return{ids:v.ids,label:v.label};const S=m.find(C=>String(C.id)===String(y))??m.find(C=>C.name===y);return S?{ids:[S.id],label:S.name}:null}function n(){if(!a||a==="all")return X;const y=t.find(m=>m.label===a);if(y)return X.filter(m=>m.label===y.label);const b=e.find(m=>String(m.id)===String(a));if(b){const m=new Set(t.filter(v=>v.ids.includes(b.id)).map(v=>v.label));return X.filter(v=>v.label===b.name||m.has(v.label))}return X}function s(y){const b=y.filter(C=>C.real),m=y.filter(C=>!C.real),v=b.reduce((C,E)=>C+E.mm,0),S=m.reduce((C,E)=>C+E.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${v} mm</div>
        <div class="irr-cumul-count">${b.length} irrigation${b.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${S} mm</div>
        <div class="irr-cumul-count">${m.length} irrigation${m.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${v+S} mm</div>
        <div class="irr-cumul-count">${b.length+m.length} irrigations</div>
      </div>
    </div>`}function o(y){if(y.length<2)return"";const b=[...y].sort((ae,be)=>ae.iso<be.iso?-1:1),m=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],v=new Date(b[0].iso),S=new Date(b[b.length-1].iso),C=Math.max(S-v,1),E=300,k=26,A=5,f=5,w=k-f-4,h=w-f-3,$=k+A+13,M=$+2,T=ae=>Math.round((ae-v)/C*E),z=ae=>{const[,be,ge]=ae.split("-");return`${parseInt(ge)}/${parseInt(be)}`},H=[],J=new Date(v.getFullYear(),v.getMonth()+1,1);for(;J<=S;)H.push(new Date(J)),J.setMonth(J.getMonth()+1);const ue=H.map(ae=>`<line x1="${T(ae)}" y1="${k-6}" x2="${T(ae)}" y2="${k+A+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),re=[v,...H,S],Oe=re.slice(0,-1).map((ae,be)=>{const ge=T(ae),qe=T(re[be+1]);return qe-ge<16?"":`<text x="${Math.round((ge+qe)/2)}" y="${h}" font-size="8" fill="#B0AEA8" text-anchor="middle">${m[ae.getMonth()]}</text>`}).join(""),We=b.map(ae=>{const be=ae.real?"#FF8500":"#FFB705",ge=T(new Date(ae.iso)),[,qe,it]=ae.iso.split("-"),q=`${parseInt(it)} ${ys[parseInt(qe)-1]} · ${ae.mm} mm`;return`<circle cx="${ge}" cy="${w}" r="${f}" fill="${be}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${ge}" cy="${w}" r="${f+6}" fill="transparent" pointer-events="all"><title>${q}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${E}" height="${M}" viewBox="0 0 ${E} ${M}" style="width:100%;display:block">
        ${Oe}
        <rect x="0" y="${k}" width="${E}" height="${A}" rx="${A/2}" fill="#E0DED8"/>
        ${ue}
        ${We}
        <text x="1" y="${$}" font-size="9" fill="#B0AEA8">${z(b[0].iso)}</text>
        <text x="${E-1}" y="${$}" font-size="9" fill="#B0AEA8" text-anchor="end">${z(b[b.length-1].iso)}</text>
      </svg>
    </div>`}function d(y,b,m){var f,w;const S=Me(e).find(h=>h.label===y.label),C=document.createElement("div");let E="single",k=y.iso,A=y.mm;C.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${y.iso}" />
          <div id="edit-date-hint">${Ct(y.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${y.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>
      ${S&&S.ids.length>1?`
      <div class="irr-scope-box">
        <div class="irr-scope-lbl">Appliquer à…</div>
        <div class="irr-scope-btns">
          <button class="irr-scope-btn irr-scope-btn--on" id="scope-single">Cette occurrence</button>
          <button class="irr-scope-btn" id="scope-group">Tout le groupe (${S.ids.length})</button>
        </div>
      </div>`:""}`,C.querySelector("#edit-date").addEventListener("change",h=>{k=h.target.value,C.querySelector("#edit-date-hint").innerHTML=Ct(k)}),C.querySelector("#edit-qty").addEventListener("input",h=>{const $=parseInt(h.target.value);$>0&&(A=$)}),S&&((f=C.querySelector("#scope-single"))==null||f.addEventListener("click",h=>{E="single",C.querySelectorAll(".irr-scope-btn").forEach($=>$.classList.remove("irr-scope-btn--on")),h.target.classList.add("irr-scope-btn--on")}),(w=C.querySelector("#scope-group"))==null||w.addEventListener("click",h=>{E="group",C.querySelectorAll(".irr-scope-btn").forEach($=>$.classList.remove("irr-scope-btn--on")),h.target.classList.add("irr-scope-btn--on")})),kt({title:y.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée",body:C,saveLabel:"Enregistrer",onSave:()=>{y.iso=k,y.mm=A,y.real=k<=we,E==="group"&&S&&X.filter(h=>h.label===y.label).forEach(h=>{h.mm=A}),He(),x(m)},onDelete:()=>{const h=X.indexOf(y);h>-1&&X.splice(h,1),He(),x(m)}})}function r(y,b){const m=document.createElement("div");let v=!1,S=!1;function C(){var E,k,A,f,w,h,$;m.innerHTML=`
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
            <div class="irr-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations futures planifiées</div>
          </div>
        </div>
        <div class="irr-strat-opt irr-strat-opt--danger" id="strat-delete">
          <div class="irr-strat-opt-icon" style="background:#FDECEC">🗑</div>
          <div>
            <div class="irr-strat-opt-title" style="color:#8B1A1A">Supprimer la saison</div>
            <div class="irr-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations, effectuées et planifiées</div>
          </div>
        </div>
        ${v?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>`:""}
        ${S?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Supprimer toutes les irrigations de cette saison ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(E=m.querySelector("#strat-modify"))==null||E.addEventListener("click",()=>{var T;(T=document.querySelector(".irr-sheet-overlay"))==null||T.remove();const M=l(y,t,e);At(e,()=>x(b),M,(M==null?void 0:M.label)??y)}),(k=m.querySelector("#strat-stop"))==null||k.addEventListener("click",()=>{v=!0,S=!1,C()}),(A=m.querySelector("#strat-delete"))==null||A.addEventListener("click",()=>{S=!0,v=!1,C()}),(f=m.querySelector("#stop-cancel"))==null||f.addEventListener("click",()=>{v=!1,C()}),(w=m.querySelector("#stop-confirm"))==null||w.addEventListener("click",()=>{var M;X.splice(0,X.length,...X.filter(T=>!(T.label===y&&!T.real))),He(),(M=document.querySelector(".irr-sheet-overlay"))==null||M.remove(),x(b)}),(h=m.querySelector("#delete-cancel"))==null||h.addEventListener("click",()=>{S=!1,C()}),($=m.querySelector("#delete-confirm"))==null||$.addEventListener("click",()=>{var M;X.splice(0,X.length,...X.filter(T=>T.label!==y)),He(),(M=document.querySelector(".irr-sheet-overlay"))==null||M.remove(),x(b)})}C(),kt({title:"Gérer la saison",body:m,saveLabel:"Fermer",onSave:()=>{}})}function c(y){if(!y.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const b=[...y].filter(S=>!S.real).sort((S,C)=>S.iso<C.iso?-1:1),m=[...y].filter(S=>S.real).sort((S,C)=>S.iso>C.iso?-1:1);function v(S){const C=S.real?"#FF8500":"#FFB705",E=X.indexOf(S);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${Ze(S.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${C};white-space:nowrap;margin-right:4px">${S.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${E}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${E}" title="Supprimer">🗑</button>
      </div>`}return`
      ${m.length?`
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${m.length}</span></summary>
          ${m.map(v).join("")}
        </details>`:""}
      ${b.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${b.length}</span></summary>
          ${b.map(v).join("")}
        </details>`:""}
    `}function x(y){var E,k,A;const b=y.querySelector(".irr-cal-body");if(!a){b.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const m={};if(b.querySelectorAll("details[data-section]").forEach(f=>{m[f.dataset.section]=f.open}),a==="all"){const f={};for(const h of X)f[h.label]||(f[h.label]=[]),f[h.label].push(h);const w=Object.keys(f);if(!w.length){b.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}b.innerHTML=w.map(h=>{const $=f[h],M=$.some(T=>T.fromStrategy);return`<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${h}</div>
          ${s($)}
          ${o($)}
          ${M?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-label="${h}">Modifier la saison ↗</button>
          </div>`:""}
        </div>`}).join(""),b.querySelectorAll("[data-strat-label]").forEach(h=>{h.addEventListener("click",()=>r(h.dataset.stratLabel,y))});return}const v=n(),C=v.some(f=>f.fromStrategy)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`;b.innerHTML=`
      ${s(v)}
      ${o(v)}
      ${C}
      ${c(v)}
    `,b.querySelectorAll("details[data-section]").forEach(f=>{const w=f.dataset.section;w in m&&(f.open=m[w])}),b.querySelectorAll(".irr-edit-btn").forEach(f=>{f.addEventListener("click",w=>{w.stopPropagation();const h=X[+f.dataset.iidx];h&&d(h,v,y)})}),b.querySelectorAll(".irr-del-btn").forEach(f=>{f.addEventListener("click",w=>{w.stopPropagation();const h=+f.dataset.iidx;h>=0&&(X.splice(h,1),He(),x(y))})}),(E=b.querySelector("#open-strat-edit"))==null||E.addEventListener("click",()=>{r(a,y)}),(k=b.querySelector("#cal-add-irrig"))==null||k.addEventListener("click",()=>{Ci(e,()=>x(y),l(a,t,e))}),(A=b.querySelector("#cal-add-strat"))==null||A.addEventListener("click",()=>{At(e,()=>x(y),l(a,t,e))})}const L=e.filter(y=>!t.some(b=>b.ids.includes(y.id))),u=t.map(y=>{const b=y.ids.map(m=>e.find(v=>v.id===m)).filter(Boolean).map(m=>`<option value="${m.id}"${String(m.id)===String(a)?" selected":""}>- ${m.name}</option>`).join("");return`<optgroup label="${y.label} (${y.ids.length} parcelles)">
      <option value="${y.label}"${y.label===a?" selected":""}>GROUPE : ${y.label}</option>
      ${b}
    </optgroup>`}).join(""),p=L.length?`<optgroup label="Autres parcelles">${L.map(y=>`<option value="${y.id}"${String(y.id)===String(a)?" selected":""}>${y.name}</option>`).join("")}</optgroup>`:"",g=Fe(ce(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="cal-back"><i class="bi bi-chevron-left"></i> Retour</button>
        <span class="irr-header-title">Irrigations</span>
        <div style="width:60px"></div>
      </div>
      <div style="padding:4px 14px 10px">
        <div style="font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Parcelle ou groupe</div>
        <select class="irr-cal-select" id="cal-filter-sel">
          <option value="" disabled ${a?"":"selected"}>— Sélectionner —</option>
          <option value="all"${a==="all"?" selected":""}>Toutes les parcelles</option>
          ${u}
          ${p}
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));g.querySelector("#cal-back").addEventListener("click",te),g.querySelector("#cal-filter-sel").addEventListener("change",y=>{a=y.target.value,x(g)}),x(g)}const Je=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:ut,checkIcon:ot,flexLayer:Fe,openCalendar:Ai,openIrrigationSaisie:Ci,openIrrigationStrategie:At},Symbol.toStringTag,{value:"Module"})),Mi={admin:100,adherent:1},Ti="weenat-m-dash";function Xe(){try{return JSON.parse(localStorage.getItem(Ti))||{}}catch{return{}}}function ii(e){try{localStorage.setItem(Ti,JSON.stringify({...Xe(),...e}))}catch{}}const de=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function Le(e){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Ce({title:e,body:i,doneLabel:t="Fermer",onDone:a}={}){var o;const l=document.getElementById("phone-screen");(o=document.querySelector(".m-sheet-overlay"))==null||o.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,n.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),l.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const s=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",s),n.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),s()}),n.addEventListener("click",d=>{d.target===n&&s()}),n}const si=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function ai(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=si[Math.floor(Math.random()*si.length)],a=t.label==="Pluie"||t.label==="Averses",l=Math.round(8+Math.random()*8),n=Math.round(16+Math.random()*14),s=Array.from({length:24},(o,d)=>{const r=Math.sin(Math.PI*(d-6)/12),c=Math.round(l+(n-l)*Math.max(0,r)),x=a&&d>=8&&d<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:d,label:`${String(d).padStart(2,"0")}h`,temp:c,pluie:x,hum:Math.round(85-40*Math.max(0,r)),vent:Math.round(10+Math.random()*20),icon:x>0?"bi-cloud-rain-fill":d<7||d>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:a?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:l,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:n,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function bt(e){const i=e.id,t=e.reserveHydrique||50,a=+((i*2.3+7)%32).toFixed(1),l=+((i*1.1+14)%14+10).toFixed(1),n=+((i*.6+1)%6).toFixed(1),s=Math.round(t*((i%5+1)/10)),o=Math.max(0,+(s+a-l-n).toFixed(0)),d=o<s?s-o:0;return{j0:s,j7:o,bilan:d}}const rt=4,gt=5,ni=["#0172A4","#ff8500","#30d158","#bf5af2"],ji={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548"},Mt={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol"},xs={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C"},li={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},$s=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function qi(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function ws(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const l=new Set(t);return i.filter(n=>n.parcelIds.includes(+e.slice(2))).forEach(n=>(li[n.model]||[]).forEach(s=>l.add(s))),[...l].filter(n=>n in Mt)}const a=i.find(l=>l.id===+e.slice(2));return a?li[a.model]||[]:[]}function Ss(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let $e=[],ve=[];(()=>{const e=Xe();if(e.catalog){const i=e.catalog.map(t=>t.id);de.sort((t,a)=>{const l=i.indexOf(t.id),n=i.indexOf(a.id);return(l<0?999:l)-(n<0?999:n)}),e.catalog.forEach(t=>{const a=de.find(l=>l.id===t.id);a&&(a.active=t.active)})}e.mesuresList&&($e=e.mesuresList),e.cumulsList&&(ve=e.cumulsList)})();function Es(e,i,t){const a=[...e+i].reduce((s,o)=>s+o.charCodeAt(0),1),l=s=>(Math.sin(a*.07+s*.5)+Math.sin(a*.03+s*1.3))/2+.5,n={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(s,o)=>n.sparse&&l(o*3.7)>.28?0:Math.max(0,n.base+n.amp*l(o*.28+1.2)))}const Ls=new Set(["pluie","etp"]);function Cs(e,i){const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,a=Es(e.subjectKey,e.metricId,t),l=270,n=100,s=28,o=14,d=Math.max(...a,1),r=Ls.has(e.metricId);let c,x="";for(let b=0;b<=2;b++){const m=Math.round(b/2*(n-o-4)+4);x+=`<line x1="${s}" y1="${m}" x2="${s+l}" y2="${m}" stroke="#E8E6E0" stroke-width=".5"/>`,x+=`<text x="${s-3}" y="${m+3}" text-anchor="end" font-size="8" fill="#636366">${+(d*(1-b/2)).toFixed(d<5?1:0)}</text>`}const L=Ss(e.period,e.step),u=L.map((b,m)=>`<text x="${s+Math.round(m/(L.length-1)*l)}" y="${n+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${b}</text>`).join(""),p=JSON.stringify(a.map(b=>+b.toFixed(2))),g=ji[e.metricId]||e.color,y=e.metricId==="pluie"?"#2E75B6":g;if(r){const b=Math.max(1,l/t*.7),m=a.map((v,S)=>{const C=Math.round(v/d*(n-o-4)),E=s+Math.round(S/(t-1)*l)-b/2,k=n-o-C;return`<rect x="${E.toFixed(1)}" y="${k.toFixed(1)}" width="${b.toFixed(1)}" height="${C.toFixed(1)}" fill="${y}" opacity=".85" rx="1"/>`}).join("");c=`<svg viewBox="0 0 ${s+l} ${n+6}" style="width:100%;display:block;overflow:visible">${x}${m}${u}</svg>`}else{const b=a.map((m,v)=>`${s+Math.round(v/(t-1)*l)},${n-o-Math.round(m/d*(n-o-4))}`).join(" ");c=`<svg viewBox="0 0 ${s+l} ${n+6}" style="width:100%;display:block;overflow:visible">
      ${x}
      <polyline points="${b}" fill="none" stroke="${g}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${n}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${u}
    </svg>`}return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?y:g}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${p}' style="position:relative;margin-top:4px">
        ${c}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
    </div>`}function oi(e,i){const t=$e.length>=rt,a=e.map(o=>`<option value="p-${o.id}">${o.name}</option>`).join(""),l=i.filter(o=>o.parcelIds.length>0).map(o=>{const d=e.find(r=>o.parcelIds.includes(r.id));return`<option value="s-${o.id}">${o.model} — ${o.serial}${d?` · ${d.name}`:""}</option>`}).join(""),n=qi("7d");return`
    <div id="msr-list">${$e.length?$e.map(Cs).join(""):'<div class="m-wf-empty">Aucune mesure configurée</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${$e.length?"16px":"0"}">Ajouter une mesure</div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${rt}/${rt})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez une mesure pour en ajouter une nouvelle.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="msr-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${a}</optgroup>
        ${l?`<optgroup label="Capteurs">${l}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period">
          ${$s.map(o=>`<option value="${o.id}"${o.id==="7d"?" selected":""}>${o.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${n.map(o=>`<option value="${o.id}">${o.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Créer la mesure</button>
    </div>`}`}function ks(e,i){const t=new Date().toISOString().split("T")[0],a=new Date;a.setDate(a.getDate()+7);const l=a.toISOString().split("T")[0],n=new Set([e.name]);return Me(i).filter(s=>s.ids.includes(e.id)).forEach(s=>n.add(s.label)),X.filter(s=>!s.real&&s.iso>=t&&s.iso<=l&&n.has(s.label)).reduce((s,o)=>s+o.mm,0)}const ri=9;function Ge(e,i=!1,t=Xe().sensorlessEnabled??!0){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const a=Me(e),l=new Set(a.flatMap(b=>b.ids)),n=e.filter(b=>!l.has(b.id)),s=(b,m)=>bt(m).bilan-bt(b).bilan,o=[...a.flatMap(b=>b.ids.map(m=>e.find(v=>v.id===m)).filter(Boolean).sort(s)),...n.slice().sort(s)],d=i?o:o.slice(0,ri),r=new Set(d.map(b=>b.id)),c=o.length-d.length,x=b=>{const m=Y.some(f=>f.parcelIds.includes(b.id)&&(f.model.startsWith("CHP")||f.model.startsWith("CAPA")||f.model.startsWith("EC"))),{j0:v,j7:S,bilan:C}=bt(b),E=ks(b,e),k=m?v:'<span style="color:#aeaeb2">—</span>',A=m?S:'<span style="color:#aeaeb2">—</span>';return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${b.id}">${b.name}</button>
      <div class="m-bh-td">${k}</div>
      <div class="m-bh-td">${A}</div>
      ${t?`<div class="m-bh-td m-bh-td--reco">${C>0?C:"—"}</div>`:""}
      <div class="m-bh-td m-bh-td--planif">${E>0?E:"—"}</div>`};let L="";for(const b of a){const m=b.ids.map(v=>e.find(S=>S.id===v)).filter(Boolean).filter(v=>r.has(v.id)).sort(s);m.length&&(L+=`<div class="m-bh-group-row" style="background:rgba(0,0,0,.035)">⬡ ${b.label}</div>`,L+=m.map(x).join(""))}const u=n.filter(b=>r.has(b.id)).sort(s);u.length&&a.length&&(L+='<div class="m-bh-group-row">⬡ Autres parcelles</div>'),L+=u.map(x).join("");const p=t?"1fr 38px 38px 46px 46px":"1fr 38px 38px 46px",g=t?2:1,y=o.length>ri?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${c} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${p}">
        <div class="m-bh-gh"></div>
        <div class="m-bh-gh" style="grid-column:span 2">Niveau RFU</div>
        <div class="m-bh-gh" style="grid-column:span ${g}">Irrigations J+7</div>
        <div class="m-bh-th m-bh-unit-lbl">données en mm</div>
        <div class="m-bh-th">J0</div>
        <div class="m-bh-th">J+7</div>
        ${t?'<div class="m-bh-th">Reco.</div>':""}
        <div class="m-bh-th">Planif.</div>
        ${L}
      </div>
    </div>
    ${y}
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
    </div>`}const yt=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function As(e,i,t,a){const l=Object.fromEntries(se.map(p=>[p.id,p])),n=e.map(p=>{var b;const g=p.ville||((b=l[p.orgId])==null?void 0:b.ville)||null,y=yt([p.name,p.crop||null,g].filter(Boolean).join(" · "));return`<option value="p-${p.id}">${y}</option>`}).join(""),s=i.map(p=>{var b,m;const g=((b=p.parcelIds.map(v=>e.find(S=>S.id===v)).filter(Boolean).find(v=>v.ville))==null?void 0:b.ville)||((m=l[p.orgId])==null?void 0:m.ville)||"",y=yt(`${p.serial}${g?` — ${g}`:""}`);return`<option value="s-${p.id}">${y}</option>`}).join(""),o=`
    <optgroup label="Parcelles">${n}</optgroup>
    ${s?`<optgroup label="Capteurs">${s}</optgroup>`:""}`,d=(p,g)=>{const y=`${p.dayLabel.charAt(0).toUpperCase()+p.dayLabel.slice(1)} · ${p.dateStr}`;return`
    <div class="m-prev-card" data-day="${g}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${p.icon}" style="color:${p.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${y}</span>
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
    </div>`},r=t.slice(0,3).map(d).join(""),c=t.slice(3).map(d).join(""),x=se.find(p=>p.id===(a==="admin"?100:1)),L=(x==null?void 0:x.adresse)||"";return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${L?`<option value="addr">${yt(`${x.name} — ${x.ville||L}`)}</option>`:""}${o}</select>
    <div class="m-prev-cards">
      ${r}
      <div class="m-prev-extra" style="display:none">${c}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const ke=[{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:["P+","PT","SMV"]},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:["PYRANO"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],Ii=new Set(ke.flatMap(e=>e.needsModels||[]));function xt(e){if(!e)return ke;if(e.startsWith("s-")){const t=Y.find(a=>a.id===+e.slice(2));return t?ke.filter(a=>a.needsModels===null||a.needsModels.includes(t.model)):ke}const i=new Set(Y.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return ke.filter(t=>t.needsModels===null||t.needsModels.some(a=>i.has(a)))}const ci={pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#FEE7B4"},etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function Ms(){return ve.length?ve.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
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
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function di(e,i,t){if(!e||!i)return null;const a=ke.find(s=>s.id===t)||ke[0],l=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),n=e.split("").reduce((s,o)=>s+o.charCodeAt(0),0)+l;return+(a.base+n%(a.amp*10)/10).toFixed(1)}function ui(e,i){const t=ve.length>=gt,a=`${new Date().getFullYear()}-01-01`,l=i.filter(c=>c.parcelIds.length>0&&Ii.has(c.model)),n=new Set(l.flatMap(c=>c.parcelIds)),o=e.filter(c=>n.has(c.id)).map(c=>`<option value="p-${c.id}">${c.name}</option>`).join(""),d=l.map(c=>{const x=e.find(L=>c.parcelIds.includes(L.id));return`<option value="s-${c.id}">${c.model} — ${c.serial}${x?` · ${x.name}`:""}</option>`}).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${ve.length?Ms():'<div class="m-wf-empty">Aucun cumul enregistré</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${ve.length?"16px":"0"}">Ajouter un cumul</div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${gt}/${gt})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez un cumul pour en ajouter un nouveau.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="cumuls-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${o}</optgroup>
        ${d?`<optgroup label="Capteurs">${d}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="cumuls-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div id="cumuls-thresholds"></div>
      <div class="m-wf-row">
        <div class="m-wf-field">
          <span class="m-wf-label">Depuis le</span>
          <input type="date" class="m-wf-date" id="cumuls-from" value="${a}">
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Créer le cumul</button>
    </div>`}`}const Ts={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function js(e){const i=e.id,t=new Date,a=Ts[e.crop]||["—"],l=a[i%a.length];let n,s;i%5===3?(n=0,s=(t.getHours()+2+i%3*3)%24):(n=(i*2+1)%6+1,s=6+i%5*2);const o=2+i%3,d=new Date(t);d.setDate(d.getDate()+n);const r=n===0?"Aujourd'hui":d.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),c=n*1440+s*60-(t.getHours()*60+t.getMinutes()),x=c>=0&&c<=600;return{product:l,winDateStr:r,winHour:s,winDur:o,isUrgent:x,minutesFromNow:c}}const qs="#1a9e40";function Is(e){const t=e.filter(l=>l.crop).map(l=>({p:l,d:js(l)})).filter(({d:l})=>l.minutesFromNow>=0&&l.minutesFromNow<=1440).sort((l,n)=>l.d.minutesFromNow-n.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:l,d:n})=>{const s=String(n.winHour).padStart(2,"0"),o=String((n.winHour+n.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${l.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${l.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${l.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${qs};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
            <i class="bi bi-check2-circle" style="font-size:12px"></i>
            ${n.winDateStr} · ${s}h–${o}h
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const Pi="weenat-m-traitements";function Ke(){try{return JSON.parse(localStorage.getItem(Pi))||[]}catch{return[]}}function Ht(e){localStorage.setItem(Pi,JSON.stringify(e))}function Ps(e,i){let t=new Set;const a=Me(e),l=new Date().toISOString().split("T")[0];function n(){return ut(a,e,t)}function s(r){const c=t.size,x=r.querySelector(".irr-summary"),L=r.querySelector(".irr-save-btn");!x||!L||(x.textContent=c===0?"":`${c} parcelle${c>1?"s":""}`,L.disabled=c===0)}function o(r){r.querySelectorAll(".irr-group-card").forEach(c=>{c.addEventListener("click",()=>{const x=c.dataset.gids.split(",").map(Number),L=x.every(u=>t.has(u));x.forEach(u=>L?t.delete(u):t.add(u)),r.querySelector("#trait-sel-list").innerHTML=n(),o(r),s(r)})}),r.querySelectorAll(".irr-plot-row").forEach(c=>{c.addEventListener("click",()=>{const x=+c.dataset.pid;t.has(x)?t.delete(x):t.add(x),r.querySelector("#trait-sel-list").innerHTML=n(),o(r),s(r)})})}const d=Fe(ce(`
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
            <input type="date" class="irr-date-input" id="trait-date" value="${l}">
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
      <div id="trait-sel-list">${n()}</div>
    </div>
    <div class="irr-bottom-bar" style="border-top-color:rgba(48,209,88,.2)">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled style="background:#1a9e40;border-color:#1a9e40">Enregistrer</button>
    </div>
  `));o(d),s(d),d.querySelector("#trait-back").addEventListener("click",te),d.querySelector(".irr-save-btn").addEventListener("click",()=>{const r=d.querySelector("#trait-date").value||l,c=d.querySelector("#trait-produit").value.trim()||"—",x=d.querySelector("#trait-dose").value.trim()||"—",L=Ke();L.unshift({id:Date.now(),date:r,produit:c,dose:x,plotIds:[...t]}),Ht(L),te(),i("Traitement enregistré")})}function Ds(e,i,t){const a=i==="adherent"?Mi.adherent:null,l=a!==null?V.filter(r=>r.orgId===a):V;let n=null;const s=ce(`
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
          ${l.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}
        </select>
      </div>
      <div id="trait-cal-content" style="padding:6px 16px 16px"></div>
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",te);const o=r=>{const[c,x,L]=r.split("-");return`${L}/${x}/${c}`};function d(){const r=s.querySelector("#trait-cal-content");let c=Ke();if(n!==null&&(c=c.filter(x=>(x.plotIds||[]).includes(n))),!c.length){r.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}r.innerHTML=c.map(x=>{const L=(x.plotIds||[]).map(u=>{var p;return(p=e.find(g=>g.id===u))==null?void 0:p.name}).filter(Boolean);return`
        <div class="m-trait-cal-card" data-id="${x.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${o(x.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${L.length} parcelle${L.length>1?"s":""}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${x.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${x.dose}</div>
          ${L.length?`<div style="font-size:11px;color:#8e8e93;margin-top:6px">${L.join(", ")}</div>`:""}
        </div>`}).join(""),r.querySelectorAll(".m-trait-cal-card").forEach(x=>{x.addEventListener("click",()=>{const L=+x.dataset.id,p=Ke().find(m=>m.id===L);if(!p)return;const g=(p.plotIds||[]).map(m=>{var v;return(v=e.find(S=>S.id===m))==null?void 0:v.name}).filter(Boolean),y=document.createElement("div");y.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${o(p.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${p.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${p.dose}</div>
            ${g.length?`<div style="font-size:12px;color:#8e8e93">${g.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const b=Ce({title:"Traitement",body:y,doneLabel:"Fermer",onDone:()=>{}});y.querySelector("#tcal-del").addEventListener("click",()=>{const m=Ke().filter(v=>v.id!==L);Ht(m),b.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{b.remove(),d()},280),t("Traitement supprimé")}),y.querySelector("#tcal-edit").addEventListener("click",()=>{b.classList.remove("m-sheet-overlay--show"),setTimeout(()=>b.remove(),280),Hs(p,e,t,d)})})})}s.querySelector("#trait-filter").addEventListener("change",r=>{n=r.target.value?+r.target.value:null,d()}),d()}function Hs(e,i,t,a){const l=document.createElement("div");l.innerHTML=`
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
    </div>`,Ce({title:"Modifier le traitement",body:l,doneLabel:"Enregistrer",onDone:()=>{const n=Ke(),s=n.findIndex(o=>o.id===e.id);s!==-1&&(n[s].date=l.querySelector("#tedit-date").value||e.date,n[s].produit=l.querySelector("#tedit-produit").value.trim()||e.produit,n[s].dose=l.querySelector("#tedit-dose").value.trim()||e.dose,Ht(n)),t("Traitement modifié"),a()}})}const zs={"capteur couché":{icon:"bi-arrow-down-circle-fill",color:"#ff9f0a"},"émissions interrompues":{icon:"bi-wifi-off",color:"#ff3b30"},"capteur déplacé":{icon:"bi-geo-alt-fill",color:"#ff9f0a"},"cuillère bloquée":{icon:"bi-x-octagon-fill",color:"#ff3b30"}};function Bs(e,i){const t=i.filter(a=>a.event&&(Array.isArray(a.event)?a.event.length>0:!0));return t.length?`<div class="m-w-list">${t.map(a=>{const l=e.find(o=>a.parcelIds.includes(o.id)),s=(Array.isArray(a.event)?a.event:[a.event]).map(o=>{const d=zs[o]||{icon:"bi-exclamation-circle-fill",color:"#ff9f0a"};return`<span class="m-ev-badge" style="color:${d.color}"><i class="bi ${d.icon}"></i> ${o}</span>`}).join("");return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${a.id}" style="flex-direction:column;align-items:flex-start;gap:4px">
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
        <div class="m-w-row-name">${a.model} — ${a.serial}</div>
        <div style="display:flex;align-items:center;gap:5px">
          <span style="font-size:11px;color:#8e8e93">${(l==null?void 0:l.ville)||(l==null?void 0:l.name)||"—"}</span>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px">${s}</div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const Di={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},_s={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Fs(e){const i=e.id,t=Di[e.crop]||_s,a=i%t.stages.length,l=(i*2+5)%18+4,n=new Date("2026-04-18");n.setDate(n.getDate()+l);const s=n.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[a],nextStage:t.nextStages[a],variety:t.varieties[i%t.varieties.length],nextDateStr:s,daysToNext:l}}function Os(e){const i=e.filter(l=>l.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const l of i)t[l.crop]||(t[l.crop]=[]),t[l.crop].push(l);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([l,n])=>{const s=n.map(o=>{const d=!!Di[o.crop],r=d?Fs(o):null,c=d&&r.variety!=="—"?r.variety:"",x=d?r.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${o.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${o.name}</div>
          ${c?`<div class="m-w-row-sub">${c}</div>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${x}</div>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>`}).join("");return`<details class="m-crop-group">
      <summary class="m-crop-summary">
        <div class="m-crop-summary-left">
          <div class="m-crop-summary-name">${l}</div>
          <div class="m-crop-summary-count">${n.length} parcelle${n.length>1?"s":""}</div>
        </div>
        <i class="bi bi-chevron-right m-crop-chevron"></i>
      </summary>
      <div class="m-crop-plots">${s}</div>
    </details>`}).join("")}`}const Hi="weenat-m-notes";function Pe(){try{return JSON.parse(localStorage.getItem(Hi))||[]}catch{return[]}}function $t(e){localStorage.setItem(Hi,JSON.stringify(e))}function pi(e){const i=Pe(),t=m=>{const[v,S,C]=m.split("-");return`${C}/${S}/${v}`},a=m=>m.length>70?m.slice(0,70)+"…":m,l=(m,v)=>{const S=m.text.length>70,C=(m.imageIds||[]).length,E=C>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${C} photo${C>1?"s":""}</span>`:"",k=m.linkedType?`<span style="font-size:10px;background:${m.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${m.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${m.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${m.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${v}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${S||C>0||m.linkedType?"pointer":"default"}">
        <button class="m-note-del" data-idx="${v}" style="position:absolute;top:8px;right:8px;border:none;background:rgba(0,0,0,.08);border-radius:50%;width:22px;height:22px;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#636366">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center">
          <span>${t(m.date)}${m.time?" · "+m.time:""}</span>
          ${m.auteur?`<span style="color:#636366;font-weight:500">${m.auteur}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${a(m.text)}</div>
        ${k||E?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${k}${E}</div>`:""}
      </div>`},n=i.slice(0,5),s=n.length?n.map((m,v)=>l(m,v)).join(""):"",o=new Date,d=o.toISOString().slice(0,10),r=`${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")}`,c=se.find(m=>m.id===(e==="admin"?100:1)),x=c?`${c.prenomProprietaire} ${c.nomProprietaire}`:"",L=c==null?void 0:c.id,u=e==="adherent"?V.filter(m=>m.orgId===L):V,p=e==="adherent"?Y.filter(m=>m.parcelIds.some(v=>u.some(S=>S.id===v))):Y,g=u.map(m=>`<option value="p-${m.id}">${m.name}</option>`).join(""),y=p.map(m=>{var S;const v=((S=m.parcelIds.map(C=>V.find(E=>E.id===C)).filter(Boolean).find(C=>C.ville))==null?void 0:S.ville)||"";return`<option value="s-${m.id}">${m.serial}${v?" — "+v:""}</option>`}).join(""),b="width:100%;box-sizing:border-box;font-size:13px;padding:7px 9px;border:1px solid rgba(0,0,0,.12);border-radius:6px;font-family:inherit;background:#fafafa";return`
    ${s?`<div id="notes-list" style="margin-bottom:12px">${s}</div>`:""}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <select id="notes-link" style="${b};margin-bottom:6px;color:#1c1c1e">
      <option value="">— Sans lien —</option>
      <optgroup label="Parcelles">${g}</optgroup>
      <optgroup label="Capteurs">${y}</optgroup>
    </select>
    <textarea id="notes-input" placeholder="Votre note…" rows="2"
      style="${b};resize:none;margin-bottom:6px"></textarea>
    <div style="display:flex;gap:6px;margin-bottom:6px">
      <input type="date" id="notes-date" value="${d}" style="${b}">
      <input type="time" id="notes-time" value="${r}" style="${b}">
    </div>
    <div class="jrn-img-zone" style="margin-bottom:8px">
      <div class="jrn-img-previews" id="notes-previews"></div>
      <button type="button" class="jrn-img-add-btn" id="notes-img-btn"><i class="bi bi-camera"></i> Ajouter une photo</button>
      <input type="file" id="notes-img-input" accept="image/*" multiple style="display:none">
      <div class="jrn-img-error" id="notes-img-error"></div>
    </div>
    <input type="hidden" id="notes-auteur" value="${x}">
    <button id="notes-add" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:8px;padding:9px 16px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;margin-bottom:6px">Ajouter la note</button>
    <button id="notes-view" style="width:100%;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:8px;padding:9px 16px;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer">Voir les notes${i.length?` (${i.length})`:""}</button>`}function Rs(e){const i=V.map(l=>l.orgId).filter((l,n,s)=>s.indexOf(l)===n&&l!==100).length,t=Y.length,a=V.length;return`
    <div class="m-reseau-name">${xe.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${a}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${xe.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${xe.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${xe.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${xe.siege.adresse}, ${xe.siege.codePostal} ${xe.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function Ns(){return`
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
    </a>`}const mi=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Vs(){var r;const e=document.getElementById("phone-screen");(r=document.querySelector(".m-sheet-overlay"))==null||r.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),a=i.querySelector("#chat-input"),l=i.querySelector("#chat-send"),n=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",n),i.addEventListener("click",c=>{c.target===i&&n()});function s(c,x){const L=document.createElement("div");L.className=`m-chat-msg m-chat-msg--${x}`,L.innerHTML=`<div class="m-chat-bubble">${c}</div>`,t.appendChild(L),t.scrollTop=t.scrollHeight}function o(){const c=document.createElement("div");return c.className="m-chat-msg m-chat-msg--bot m-chat-typing",c.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(c),t.scrollTop=t.scrollHeight,c}function d(){const c=a.value.trim();if(!c)return;s(c,"user"),a.value="",l.disabled=!0;const x=o();setTimeout(()=>{x.remove();const L=mi[Math.floor(Math.random()*mi.length)];s(L,"bot"),l.disabled=!1,a.focus()},1200+Math.random()*800)}l.addEventListener("click",d),a.addEventListener("keydown",c=>{c.key==="Enter"&&d()}),setTimeout(()=>a.focus(),350)}function Ws(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const a=Mi[i]||1,l=a===100?V:V.filter(f=>f.orgId===a),n=new Set(l.map(f=>f.id)),s=Y.filter(f=>f.parcelIds.some(w=>n.has(w)));let o=ai(),d=null;function r(){return i!=="admin"?l:d===null?V:V.filter(f=>f.orgId===d)}function c(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${se.filter(w=>w.id!==100).sort((w,h)=>w.name.localeCompare(h.name)).map(w=>`<option value="${w.id}">${w.name}</option>`).join("")}
    </select>`}const x=Xe(),L=new Set(["mon_reseau","support"]),u=new Set(x.collapsed??de.map(f=>f.id).filter(f=>!L.has(f)));function p(){ii({catalog:de.map(f=>({id:f.id,active:f.active})),collapsed:[...u],mesuresList:$e,cumulsList:ve})}function g(f,w){const h=f.fixed?"":`<button class="m-widget-menu" data-widget="${f.id}" type="button">•••</button>`,$=u.has(f.id);return`
      <div class="m-widget${$?" m-widget--collapsed":""}" data-widget="${f.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${f.id}">
          <div class="m-widget-icon-wrap" style="background:${f.color}20;color:${f.color}">
            <i class="bi ${f.icon}"></i>
          </div>
          <span class="m-widget-title">${f.title}</span>
          <i class="bi ${$?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${f.fixed?"0":"8px"}"></i>
          ${h}
        </div>
        <div class="m-widget-bd" style="${$?"display:none":""}">${w}</div>
      </div>`}function y(){o=ai();const f=de.filter(h=>h.active&&!h.fixed),w=de.filter(h=>h.active&&h.fixed);t.innerHTML=`
      <button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${[...f,...w].map(h=>{let $="";return h.id==="bilan_hydrique"?$=c()+Ge(r()):h.id==="previsions"?$=As(l,s,o,i):h.id==="cumuls"?$=ui(l,s):h.id==="temps_reel"?$=oi(l,s):h.id==="traitements"?$=Is(l):h.id==="evenements"?$=Bs(l,s):h.id==="cultures"?$=Os(l):h.id==="notes"?$=pi(i):h.id==="mon_reseau"?$=Rs(i):h.id==="support"&&($=Ns()),g(h,$)}).join("")}
      <div style="height:24px"></div>`,C()}const b='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function m(f,w){const h=f[w],$=`${h.dayLabel.charAt(0).toUpperCase()+h.dayLabel.slice(1)} · ${h.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${b}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${w===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${h.icon}" style="color:${h.color};font-size:22px"></i><span class="m-d-name">${$}</span></div>
          <button class="m-day-nav" id="next-day" ${w>=f.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${h.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${h.tMin} / ${h.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${h.ventMoy}/${h.ventRafales}</strong></div>
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
            ${h.hours.map((M,T)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${T<h.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${M.label}</span>
                <i class="bi ${M.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${M.pluie>0?`${M.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${M.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${M.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${M.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function v(f,w,h){var $,M;f.querySelector(".m-detail-back").addEventListener("click",te),($=f.querySelector("#prev-day"))==null||$.addEventListener("click",()=>{f.innerHTML=m(w,h-1),v(f,w,h-1)}),(M=f.querySelector("#next-day"))==null||M.addEventListener("click",()=>{f.innerHTML=m(w,h+1),v(f,w,h+1)})}function S(f,w){const h=ce(m(f,w));v(h,f,w)}function C(){var ae,be,ge,qe,it;(ae=e.querySelector(".m-navbar-action"))==null||ae.addEventListener("click",k),(be=t.querySelector("#dash-add-widget-btn"))==null||be.addEventListener("click",A),t.querySelectorAll(".m-widget-hd--toggle").forEach(q=>{q.addEventListener("click",F=>{if(F.target.closest(".m-widget-menu"))return;const B=q.dataset.collapse;u.has(B)?u.delete(B):u.add(B),p(),y()})}),(ge=t.querySelector("#trait-btn-saisir"))==null||ge.addEventListener("click",()=>{Ps(l,Le)}),(qe=t.querySelector("#trait-btn-voir"))==null||qe.addEventListener("click",()=>{Ds(l,i,Le)}),t.querySelectorAll(".m-trait-card").forEach(q=>{q.addEventListener("click",()=>{const F=V.find(B=>B.id===+q.dataset.plotId);F&&Ee(()=>Promise.resolve().then(()=>wt),void 0).then(B=>B.initParcelDetail(F,[],"widgets","Tableau de bord"))})}),t.querySelectorAll("[data-sensor-id]").forEach(q=>{q.addEventListener("click",()=>{const F=s.find(B=>B.id===+q.dataset.sensorId);F&&Ee(()=>Promise.resolve().then(()=>wa),void 0).then(B=>B.initSensorDetail(F,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(q=>{q.addEventListener("click",()=>{const F=V.find(B=>B.id===+q.dataset.plotId);F&&Ee(()=>Promise.resolve().then(()=>wt),void 0).then(B=>B.initParcelDetail(F,[],"params","Tableau de bord"))})});function f(){t.querySelectorAll(".m-bh-plot-link").forEach(q=>{q.addEventListener("click",()=>{const F=V.find(B=>B.id===+q.dataset.plotId);F&&Ee(()=>Promise.resolve().then(()=>wt),void 0).then(B=>B.initParcelDetail(F,[],"widgets","Tableau de bord"))})})}function w(){var q,F,B;(q=t.querySelector("#bh-btn-calendar"))==null||q.addEventListener("click",()=>{Ee(()=>Promise.resolve().then(()=>Je),void 0).then(ee=>ee.openCalendar(l,""))}),(F=t.querySelector("#bh-btn-irrigation"))==null||F.addEventListener("click",()=>{Ee(()=>Promise.resolve().then(()=>Je),void 0).then(ee=>ee.openIrrigationSaisie(l,Le))}),(B=t.querySelector("#bh-btn-strategie"))==null||B.addEventListener("click",()=>{Ee(()=>Promise.resolve().then(()=>Je),void 0).then(ee=>ee.openIrrigationStrategie(l,Le))})}function h(){const q=t.querySelector("#bh-expand");q&&q.addEventListener("click",()=>{const F=q.dataset.expanded==="true",B=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');B&&(B.innerHTML=c()+Ge(r(),!F),f(),w(),h(),i==="admin"&&$())})}function $(){const q=t.querySelector("#bh-org-select");q&&(q.value=d===null?"all":String(d),q.addEventListener("change",()=>{d=q.value==="all"?null:+q.value;const F=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');F&&(F.innerHTML=c()+Ge(r()),f(),w(),h(),$())}))}f(),w(),h(),i==="admin"&&$();function M(){const q=t.querySelector('[data-widget="cumuls"] .m-widget-bd');q&&(q.innerHTML=ui(l,s),T())}function T(){var pe,ne,Z,O;const q=()=>{var D;const j=(D=t.querySelector("#cumuls-metric"))==null?void 0:D.value,I=t.querySelector("#cumuls-thresholds");I&&(j==="hf"?I.innerHTML=`
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`:j==="dj"?I.innerHTML=`
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`:I.innerHTML="")},F=()=>{var P;const j=t.querySelector("#cumuls-metric"),I=(P=t.querySelector("#cumuls-subject"))==null?void 0:P.value;if(!j)return;const D=xt(I);j.innerHTML='<option value="">— Métrique —</option>'+D.map(W=>`<option value="${W.id}">${W.label}</option>`).join(""),j.disabled=!I||!D.length,q(),B()},B=()=>{var K,U,le;const j=t.querySelector("#cumuls-create"),I=t.querySelector("#cumuls-date-err"),D=(K=t.querySelector("#cumuls-subject"))==null?void 0:K.value,P=(U=t.querySelector("#cumuls-from"))==null?void 0:U.value,W=(le=t.querySelector("#cumuls-metric"))==null?void 0:le.value,_=P?(Date.now()-new Date(P))/864e5>365:!1;I&&(I.style.display=_?"":"none"),j&&(j.disabled=!D||!P||!W||_)};(pe=t.querySelector("#cumuls-subject"))==null||pe.addEventListener("change",()=>{F(),B()}),(ne=t.querySelector("#cumuls-from"))==null||ne.addEventListener("change",B),(Z=t.querySelector("#cumuls-metric"))==null||Z.addEventListener("change",()=>{q(),B()}),(O=t.querySelector("#cumuls-create"))==null||O.addEventListener("click",()=>{var U,le,G,R,Q,ie;const j=t.querySelector("#cumuls-subject"),I=j==null?void 0:j.value,D=(U=t.querySelector("#cumuls-from"))==null?void 0:U.value,P=(le=t.querySelector("#cumuls-metric"))==null?void 0:le.value;if(!I||!D||!P)return;const W=ke.find(Te=>Te.id===P),_=ci[P]||{icon:"bi-bar-chart-fill",color:"#636366"},K=P==="hf"?{cold:+(((G=t.querySelector("#cumuls-th-cold"))==null?void 0:G.value)??7.2)}:P==="dj"?{low:+(((R=t.querySelector("#cumuls-th-low"))==null?void 0:R.value)??0),high:+(((Q=t.querySelector("#cumuls-th-high"))==null?void 0:Q.value)??18)}:null;ve.push({metricId:P,metricLabel:(W==null?void 0:W.label)||P,unit:(W==null?void 0:W.unit)||"",icon:_.icon,color:_.color,subjectKey:I,subjectLabel:(((ie=j.options[j.selectedIndex])==null?void 0:ie.text)||I).trim(),fromDate:D,value:String(di(I,D,P)??"—"),thresholds:K}),p(),M()}),t.querySelectorAll(".m-cumuls-del").forEach(j=>{j.addEventListener("click",()=>{ve.splice(+j.dataset.cidx,1),p(),M()})}),t.querySelectorAll(".m-cumuls-edit").forEach(j=>{j.addEventListener("click",()=>ye(+j.dataset.cidx))});function ee(j,I={}){return j==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${I.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:j==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${I.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${I.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function ye(j){const I=ve[j];if(!I)return;const D=s.filter(R=>R.parcelIds.length>0&&Ii.has(R.model)),P=new Set(D.flatMap(R=>R.parcelIds)),_=l.filter(R=>P.has(R.id)).map(R=>`<option value="p-${R.id}"${I.subjectKey===`p-${R.id}`?" selected":""}>${R.name}</option>`).join(""),K=D.map(R=>{const Q=l.find(ie=>R.parcelIds.includes(ie.id));return`<option value="s-${R.id}"${I.subjectKey===`s-${R.id}`?" selected":""}>${R.model} — ${R.serial}${Q?` · ${Q.name}`:""}</option>`}).join(""),le=xt(I.subjectKey).map(R=>`<option value="${R.id}"${I.metricId===R.id?" selected":""}>${R.label}</option>`).join(""),G=document.createElement("div");G.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",G.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${_}</optgroup>
            ${K?`<optgroup label="Capteurs">${K}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${le}
          </select>
          <div id="cedit-thresholds">${ee(I.metricId,I.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${I.fromDate}">
          </div>`,G.querySelector("#cedit-subject").addEventListener("change",()=>{const R=G.querySelector("#cedit-subject").value,Q=G.querySelector("#cedit-metric"),ie=xt(R);Q.innerHTML='<option value="">— Métrique —</option>'+ie.map(Te=>`<option value="${Te.id}">${Te.label}</option>`).join(""),G.querySelector("#cedit-thresholds").innerHTML=""}),G.querySelector("#cedit-metric").addEventListener("change",()=>{G.querySelector("#cedit-thresholds").innerHTML=ee(G.querySelector("#cedit-metric").value)}),Ce({title:"Modifier le cumul",body:G,doneLabel:"Enregistrer",onDone:()=>{var Rt,Nt,Vt,Wt;const R=G.querySelector("#cedit-subject").value||I.subjectKey,Q=G.querySelector("#cedit-metric").value||I.metricId,ie=G.querySelector("#cedit-from").value||I.fromDate;if(!R||!Q||!ie)return;if((Date.now()-new Date(ie))/864e5>365){Le("Date trop ancienne (max 365 jours)");return}const me=ke.find(Qi=>Qi.id===Q),Ie=ci[Q]||{icon:"bi-bar-chart-fill",color:"#636366"},Ot=G.querySelector("#cedit-subject"),Xi=Q==="hf"?{cold:+(((Rt=G.querySelector("#cedit-th-cold"))==null?void 0:Rt.value)??7.2)}:Q==="dj"?{low:+(((Nt=G.querySelector("#cedit-th-low"))==null?void 0:Nt.value)??0),high:+(((Vt=G.querySelector("#cedit-th-high"))==null?void 0:Vt.value)??18)}:null;ve[j]={...I,metricId:Q,metricLabel:(me==null?void 0:me.label)||Q,unit:(me==null?void 0:me.unit)||"",icon:Ie.icon,color:Ie.color,subjectKey:R,subjectLabel:(((Wt=Ot.options[Ot.selectedIndex])==null?void 0:Wt.text)||R).trim(),fromDate:ie,value:String(di(R,ie,Q)??"—"),thresholds:Xi},p(),M()}})}}T(),(it=t.querySelector("#open-chat-btn"))==null||it.addEventListener("click",Vs);function z(){const q=t.querySelector('[data-widget="notes"] .m-widget-bd');q&&(q.innerHTML=pi(i),J())}let H=[];function J(){var pe,ne;H=[];const q=t.querySelector("#notes-img-input"),F=t.querySelector("#notes-img-btn"),B=t.querySelector("#notes-previews"),ee=t.querySelector("#notes-img-error");q&&F&&B&&window.setupImgUpload&&window.setupImgUpload(q,F,B,ee,H),(pe=t.querySelector("#notes-add"))==null||pe.addEventListener("click",async()=>{var le,G,R,Q,ie,Te;const Z=(le=t.querySelector("#notes-input"))==null?void 0:le.value.trim(),O=((G=t.querySelector("#notes-date"))==null?void 0:G.value)||new Date().toISOString().slice(0,10),j=((R=t.querySelector("#notes-time"))==null?void 0:R.value)||"",I=((Q=t.querySelector("#notes-auteur"))==null?void 0:Q.value)||"";if(!Z)return;const D=((ie=t.querySelector("#notes-link"))==null?void 0:ie.value)||"";let P=null,W=null,_="";if(D.startsWith("p-"))P="parcel",W=+D.slice(2),_=((Te=V.find(me=>me.id===W))==null?void 0:Te.name)||"";else if(D.startsWith("s-")){P="sensor",W=+D.slice(2);const me=Y.find(Ie=>Ie.id===W);_=me?me.serial:""}const K=[];if(H.length&&window.ImageStore)for(const me of H){const Ie=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(Ie,me),K.push(Ie)}const U=Pe();U.unshift({date:O,time:j,text:Z,auteur:I,imageIds:K,linkedType:P,linkedId:W,linkedName:_}),$t(U),t.querySelector("#notes-input").value="",z()}),(ne=t.querySelector("#notes-view"))==null||ne.addEventListener("click",()=>{const Z=D=>{const[P,W,_]=D.split("-");return`${_}/${W}/${P}`},O=D=>D.length>70?D.slice(0,70)+"…":D,j=document.createElement("div");function I(){const D=Pe();if(!D.length){j.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}j.innerHTML=D.map((P,W)=>{const _=(P.imageIds||[]).length,K=P.linkedType?`<span style="font-size:10px;background:${P.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${P.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${P.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${P.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${W}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del" data-idx="${W}" style="position:absolute;top:8px;right:8px;border:none;background:rgba(0,0,0,.08);border-radius:50%;width:22px;height:22px;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#636366">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${Z(P.date)}${P.time?" · "+P.time:""}</span>
                  ${P.auteur?`<span style="color:#636366;font-weight:500">${P.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${O(P.text)}</div>
                ${K||_>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${K}${_>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${_} photo${_>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),j.querySelectorAll(".m-note-del").forEach(P=>{P.addEventListener("click",async W=>{var le;W.stopPropagation();const _=Pe(),K=+P.dataset.idx,U=_[K];(le=U==null?void 0:U.imageIds)!=null&&le.length&&window.ImageStore&&await window.ImageStore.remove(U.imageIds),_.splice(K,1),$t(_),I(),z()})}),j.querySelectorAll(".m-note-card").forEach(P=>{P.addEventListener("click",async()=>{const _=Pe()[+P.dataset.idx];if(!_)return;const K=_.linkedType?`<span style="font-size:11px;background:${_.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${_.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${_.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${_.linkedName||""}</span>`:"",U=document.createElement("div");if(U.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${Z(_.date)}${_.time?" · "+_.time:""}</span>
                  ${_.auteur?`<span style="color:#636366;font-weight:500">${_.auteur}</span>`:""}
                  ${K}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${_.text}</div>
                ${(_.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ce({title:"Note",body:U,doneLabel:"Fermer",onDone:()=>{}}),(_.imageIds||[]).length&&window.ImageStore){const le=U.querySelector("#note-detail-photos");for(const G of _.imageIds){const R=await window.ImageStore.get(G);if(!R)continue;const Q=document.createElement("div");Q.className="jrn-img-thumb-wrap";const ie=document.createElement("img");ie.className="jrn-img-thumb",ie.src=R,ie.alt="",ie.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(R)}),Q.appendChild(ie),le.appendChild(Q)}}})})}I(),Ce({title:"Notes",body:j,doneLabel:"Fermer",onDone:()=>{}})});const ye=Z=>{const[O,j,I]=Z.split("-");return`${I}/${j}/${O}`};t.querySelectorAll("#notes-list .m-note-del").forEach(Z=>{Z.addEventListener("click",async O=>{var P;O.stopPropagation();const j=Pe(),I=+Z.dataset.idx,D=j[I];(P=D==null?void 0:D.imageIds)!=null&&P.length&&window.ImageStore&&await window.ImageStore.remove(D.imageIds),j.splice(I,1),$t(j),z()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(Z=>{Z.addEventListener("click",async()=>{const j=Pe()[+Z.dataset.idx];if(!j)return;const I=j.linkedType?`<span style="font-size:11px;background:${j.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${j.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${j.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${j.linkedName||""}</span>`:"",D=document.createElement("div");if(D.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${ye(j.date)}${j.time?" · "+j.time:""}</span>
              ${j.auteur?`<span style="color:#636366;font-weight:500">${j.auteur}</span>`:""}
              ${I}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${j.text}</div>
            ${(j.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ce({title:"Note",body:D,doneLabel:"Fermer",onDone:()=>{}}),(j.imageIds||[]).length&&window.ImageStore){const P=D.querySelector("#note-detail-photos");for(const W of j.imageIds){const _=await window.ImageStore.get(W);if(!_)continue;const K=document.createElement("div");K.className="jrn-img-thumb-wrap";const U=document.createElement("img");U.className="jrn-img-thumb",U.src=_,U.alt="",U.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(_)}),K.appendChild(U),P.appendChild(K)}}})})}J();function ue(){t.querySelectorAll(".m-tr-chart-wrap").forEach(q=>{const F=q.querySelector(".m-tr-cursor"),B=q.querySelector(".m-tr-tooltip");if(!B)return;const ee=JSON.parse(q.dataset.series||"[]"),ye=q.dataset.unit||"",pe=ee.length,ne=26,Z=270;q.addEventListener("pointermove",O=>{const j=q.getBoundingClientRect(),I=Math.max(0,Math.min(((O.clientX-j.left)*(ne+Z)/j.width-ne)/Z,1)),D=ee[Math.round(I*(pe-1))]??null;if(F){const P=ne+Math.round(I*Z);F.setAttribute("x1",P),F.setAttribute("x2",P),F.setAttribute("opacity","1")}B.style.display="",B.style.left=`${Math.max(0,Math.min(O.clientX-j.left-24,j.width-60))}px`,B.textContent=D!==null?`${(+D).toFixed(1)} ${ye}`:"—"}),q.addEventListener("pointerleave",()=>{B.style.display="none",F==null||F.setAttribute("opacity","0")})})}function re(){const q=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');q&&(q.innerHTML=oi(l,s),Oe())}function Oe(){var ee,ye,pe,ne,Z;const q=()=>{var j,I;const O=t.querySelector("#msr-create");O&&(O.disabled=!((j=t.querySelector("#msr-subject"))!=null&&j.value)||!((I=t.querySelector("#msr-metric"))!=null&&I.value)||$e.length>=rt)},F=()=>{var D;const O=t.querySelector("#msr-metric"),j=(D=t.querySelector("#msr-subject"))==null?void 0:D.value;if(!O)return;const I=ws(j,s);O.innerHTML='<option value="">— Métrique —</option>'+I.map(P=>`<option value="${P}">${Mt[P]}</option>`).join(""),O.disabled=!j||!I.length,q()},B=()=>{var I;const O=t.querySelector("#msr-step"),j=((I=t.querySelector("#msr-period"))==null?void 0:I.value)||"7d";O&&(O.innerHTML=qi(j).map(D=>`<option value="${D.id}">${D.label}</option>`).join(""),q())};(ee=t.querySelector("#msr-subject"))==null||ee.addEventListener("change",()=>{F(),q()}),(ye=t.querySelector("#msr-period"))==null||ye.addEventListener("change",()=>{B(),q()}),(pe=t.querySelector("#msr-metric"))==null||pe.addEventListener("change",q),(ne=t.querySelector("#msr-step"))==null||ne.addEventListener("change",q),(Z=t.querySelector("#msr-create"))==null||Z.addEventListener("click",()=>{var U,le,G;const O=t.querySelector("#msr-subject"),j=t.querySelector("#msr-metric"),I=t.querySelector("#msr-period"),D=t.querySelector("#msr-step"),P=O==null?void 0:O.value,W=j==null?void 0:j.value,_=I==null?void 0:I.value,K=D==null?void 0:D.value;!P||!W||!_||!K||($e.push({subjectKey:P,subjectLabel:(((U=O.options[O.selectedIndex])==null?void 0:U.text)||P).trim(),metricId:W,metricLabel:Mt[W]||W,unit:xs[W]||"",period:_,periodLabel:(((le=I.options[I.selectedIndex])==null?void 0:le.text)||_).trim(),step:K,stepLabel:(((G=D.options[D.selectedIndex])==null?void 0:G.text)||K).trim(),color:ji[W]||ni[$e.length%ni.length]}),p(),re())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(O=>{O.addEventListener("click",()=>{$e.splice(+O.dataset.idx,1),p(),re()})}),ue()}Oe(),t.querySelectorAll(".m-prev-card").forEach(q=>{q.addEventListener("click",()=>{S(o,+q.dataset.day)})});const We=t.querySelector(".m-prev-expand-btn");We&&We.addEventListener("click",()=>S(o,3)),t.querySelectorAll(".m-widget-menu").forEach(q=>{q.addEventListener("click",F=>{var Z;F.stopPropagation();const B=de.find(O=>O.id===q.dataset.widget);if(!B)return;const ee=document.createElement("div"),ye=B.id==="bilan_hydrique",pe=Xe().sensorlessEnabled??!0;ee.innerHTML=`
          <div class="m-sheet-links">
            ${ye?`<a class="m-sheet-link" id="menu-sensorless">${pe?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const ne=Ce({title:B.title,body:ee,doneLabel:"Fermer",onDone:()=>{}});(Z=ee.querySelector("#menu-sensorless"))==null||Z.addEventListener("click",()=>{ii({sensorlessEnabled:!pe}),ne.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{ne.remove();const O=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');O&&(O.innerHTML=c()+Ge(r()),f(),w(),h(),i==="admin"&&$())},280)}),ee.querySelector("#menu-move").addEventListener("click",()=>{ne.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{ne.remove(),E()},280)}),ee.querySelector("#menu-remove").addEventListener("click",()=>{B.active=!1,ne.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{ne.remove(),p(),y()},280),Le("Widget retiré")})})})}function E(){const f=document.createElement("div"),w=()=>de.filter($=>$.active&&!$.fixed),h=()=>{const $=w();f.innerHTML=$.map((M,T)=>`
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
        </div>`).join(""),f.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(M=>{M.addEventListener("click",()=>{const T=w(),z=+M.dataset.i,H=z+ +M.dataset.dir,J=de.indexOf(T[z]),ue=de.indexOf(T[H]);[de[J],de[ue]]=[de[ue],de[J]],p(),h(),y()})})};h(),Ce({title:"Réorganiser les widgets",body:f,doneLabel:"Fermer",onDone:()=>{}})}function k(){const f=i==="admin",w=ce(`
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
            ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"}].map(h=>`
              <button class="m-add-item" data-action="${h.action}">
                <i class="bi ${h.icon}"></i>
                <span>${h.label}</span>
              </button>`).join("")}
          </div>
          ${f?`
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
      </div>`);w.querySelector(".m-detail-back").addEventListener("click",te),w.querySelectorAll(".m-add-item").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.action;$==="irrigation"?(te(),Ee(()=>Promise.resolve().then(()=>Je),void 0).then(M=>M.openIrrigationSaisie(l,Le))):$==="strategie-irrigation"?(te(),Ee(()=>Promise.resolve().then(()=>Je),void 0).then(M=>M.openIrrigationStrategie(l,Le))):Le("Fonctionnalité à venir")})})}function A(){const f=document.createElement("div"),w=()=>{const h=de.filter($=>!$.fixed);f.innerHTML=h.map($=>`
        <div class="m-catalog-row${$.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${$.color}20;color:${$.color}"><i class="bi ${$.icon}"></i></div>
          <span class="m-catalog-title">${$.title}</span>
          ${$.available?`<button class="m-catalog-toggle${$.active?" m-catalog-toggle--on":""}" data-cid="${$.id}" type="button">
                <i class="bi ${$.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),f.querySelectorAll("[data-cid]").forEach($=>{$.addEventListener("click",()=>{const M=de.find(T=>T.id===$.dataset.cid);M&&(M.active=!M.active,p(),w(),y())})})};w(),Ce({title:"Widgets disponibles",body:f,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",f=>{if(f.key!=="weenat_proto_store")return;$i(V);const w=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');w&&(w.innerHTML=c()+Ge(r()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=k,y()}new URLSearchParams(window.location.search).get("role");const Js=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermo-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],Tt={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},zi=e=>`dash-widgets-parcel-${e}`;function Gs(e,i){const t=i.map(s=>Y.find(o=>o.id===s)).filter(Boolean),a=new Set(t.map(s=>s.model)),l=["previsions-5j","cumuls"];return e.irrigation&&e.irrigation!=="Non irrigué"&&l.push("irrigations"),Object.entries(Tt).forEach(([s,o])=>{o.some(d=>a.has(d))&&l.push(s)}),l}function ct(e,i){try{const t=JSON.parse(localStorage.getItem(zi(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return Gs(e,i)}function Bi(e,i){localStorage.setItem(zi(e),JSON.stringify(i))}function Us(e,i,t){const a=new Set(ct(e,i)),l=Js.map((s,o)=>`
    <div class="m-list-section-header"${o>0?' style="margin-top:20px"':""}>${s.title}</div>
    ${s.items.map(d=>{const r=a.has(d.id);return`
        <div class="m-wcat-item">
          <span>${d.label}</span>
          ${r?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${d.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`}).join("")}`).join(""),n=ce(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Ajouter un widget</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:8px 0 32px">${l}</div>
    </div>`);n.querySelector(".m-detail-back").addEventListener("click",te),n.querySelectorAll(".m-wcat-add").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.wid,d=ct(e,i);d.includes(o)||(d.push(o),Bi(e.id,d)),te(),t==null||t()})})}const Ve={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}},zt={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function pt(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(a,l)=>{const n=l/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(n-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,s))})}const Bt={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},_t={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Ys(e,i,t,a,l,n=20){const s=_t[e]||10080,o=new Date,d=L=>e==="1d"||e==="hier"?`${String(L.getHours()).padStart(2,"0")}h`:e==="365d"?L.toLocaleDateString("fr-FR",{month:"short"}):`${String(L.getDate()).padStart(2,"0")}/${String(L.getMonth()+1).padStart(2,"0")}`,r=4,c=i-t-a,x=l-n;return Array.from({length:r+1},(L,u)=>{const p=u/r,g=new Date(o.getTime()-(1-p)*s*6e4),y=(t+p*c).toFixed(1),b=u===0?"start":u===r?"end":"middle";return[`<line x1="${y}" y1="${x}" x2="${y}" y2="${x+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${y}" y="${l-3}" text-anchor="${b}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(g)}</text>`].join("")}).join("")}function _i(e,i,t,a="7d"){const l=Bt[a]||60,n=pt(e,l),s=320,o=100,d=34,r=6,c=10,x=20,L=s-d-r,u=o-c-x,p=t?0:Math.min(...n),g=Math.max(...n,p+.001),y=g-p,b=$=>d+$/(n.length-1)*L,m=$=>c+u-($-p)/y*u,v=`g${Math.random().toString(36).slice(2,8)}`,S=[0,.5,1].map($=>{const M=p+$*y,T=c+u-$*u;return`<text x="${d-3}" y="${(T+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${M<10?M.toFixed(1):Math.round(M)}</text>`}).join(""),C=[.25,.5,.75].map($=>{const M=(c+u-$*u).toFixed(1);return`<line x1="${d}" y1="${M}" x2="${s-r}" y2="${M}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),E=`<line x1="${d}" y1="${c+u}" x2="${s-r}" y2="${c+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,k=Ys(a,s,d,r,o);if(t){const $=L/n.length*.7,M=n.map((T,z)=>{const H=(T-p)/y*u,J=c+u-H;return`<rect x="${(b(z)-$/2).toFixed(1)}" y="${J.toFixed(1)}" width="${$.toFixed(1)}" height="${H.toFixed(1)}" fill="${i}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${s} ${o}" width="100%" height="${o}" preserveAspectRatio="none">${S}${C}${E}${k}${M}</svg>`}const f=n.map(($,M)=>[b(M),m($)]).map(([$,M],T)=>`${T?"L":"M"}${$.toFixed(1)},${M.toFixed(1)}`).join(" "),w=`${f} L${b(n.length-1).toFixed(1)},${(c+u).toFixed(1)} L${d},${(c+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:n.map($=>+$.toFixed(2)),minV:+p.toFixed(2),maxV:+g.toFixed(2)}))}" data-color="${i}" style="position:relative">
    <svg viewBox="0 0 ${s} ${o}" width="100%" height="${o}" preserveAspectRatio="none">
      <defs><linearGradient id="${v}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${S}${C}${E}
      <path d="${w}" fill="url(#${v})"/>
      <path d="${f}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${k}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Zs(e,i,t){if(!t)return"";const a=Bt[i]||60,n=(_t[i]||10080)/(a*60),s=pt(e,a);let o=[];if(t==="temp"){const d=s.reduce((c,x)=>c+Math.max(0,x),0)*(n/24),r=s.filter(c=>c<7).length*n;o=[{label:"Degrés jours",val:`${Math.round(d)} DJ`},{label:"Heures de froid",val:`${Math.round(r)} h`}]}else if(t==="pluie")o=[{label:"Cumul pluie",val:`${s.reduce((r,c)=>r+c,0).toFixed(1)} mm`}];else if(t==="rayo"){const d=s.filter(r=>r>120).length*n;o=[{label:"Ensoleillement",val:`${Math.round(d)} h`}]}else if(t==="etp")o=[{label:"ETP cumulée",val:`${(s.reduce((r,c)=>r+c,0)*(n/24)).toFixed(1)} mm`}];else if(t==="hws"){const d=s.filter(r=>r>50).length*n;o=[{label:"Heures d'humectation",val:`${Math.round(d)} h`}]}return o.length?`<div class="m-chart-cumuls">${o.map(d=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${d.label}</span>
      <span class="m-chart-cumul-val">${d.val}</span>
    </div>`).join("")}</div>`:""}function Ks(e,i){const t=Ve[e];return t?`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${t.color}">${t.label}</span>
      </div>
      ${_i(e,t.color,t.cumul,i)}
      ${Zs(e,i,t.cumulsType)}
    </div>`:""}function Xs(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:a,maxV:l}=i,n=e.querySelector(".m-chart-tip"),s=e.querySelector(".m-chart-crosshair"),o=e.dataset.color||"#0172A4";function d(c){const x=e.getBoundingClientRect(),L=Math.max(0,Math.min(1,(c-x.left)/x.width)),u=Math.round(L*(t.length-1)),p=t[u],g=L*100;s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${g}%;width:1px;background:${o};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(g,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=p<10?p.toFixed(1):String(Math.round(p))}function r(){s.style.display="none",n.style.display="none"}e.addEventListener("pointermove",c=>{c.preventDefault(),d(c.clientX)}),e.addEventListener("pointerdown",c=>d(c.clientX)),e.addEventListener("pointerup",r),e.addEventListener("pointerleave",r),e.style.cursor="crosshair"}function Qs(e){const i=Me(V.filter(p=>p.orgId===e.orgId)),t=new Set([e.name]);i.filter(p=>p.ids.includes(e.id)).forEach(p=>t.add(p.label));const a=[e.crop,e.irrigation].filter(Boolean).join(" · ");a&&t.add(a);const l=X.filter(p=>t.has(p.label)),n=new Date().toISOString().split("T")[0],s=l.filter(p=>p.real),o=l.filter(p=>!p.real),d=s.reduce((p,g)=>p+g.mm,0),r=o.reduce((p,g)=>p+g.mm,0),c=o.filter(p=>p.iso>=n).sort((p,g)=>p.iso<g.iso?-1:1)[0],x=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],L=p=>{const[,g,y]=p.split("-");return`${+y} ${x[+g-1]}`},u=e.irrigation;return l.length?`
    <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
        <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
          <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          ${u?`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:20px;padding:1px 8px;font-size:11px;font-weight:600">${u}</span>`:""}
          ${e.substrate||e.texture?`<span style="background:#f0f0f0;color:#636366;border-radius:20px;padding:1px 8px;font-size:11px;font-weight:500">${e.substrate?"Substrat : "+e.substrate:e.texture}</span>`:""}
        </span>
        <button class="m-widget-menu" type="button">•••</button>
      </div>
      <div style="display:flex;gap:20px;width:100%">
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Réalisées</div>
          <div style="font-size:22px;font-weight:700;color:#E07820;line-height:1.1">${d} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${s.length} irrig.</div>
        </div>
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Planifiées</div>
          <div style="font-size:22px;font-weight:700;color:#FFB705;line-height:1.1">${r} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${o.length} irrig.</div>
        </div>
      </div>
      ${c?`<div style="font-size:12px;color:#3a3a3c"><i class="bi bi-arrow-right-circle" style="color:#0172A4"></i> Prochaine · <strong>${L(c.iso)}</strong> · ${c.mm} mm</div>`:""}
    </div>`:`
      <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:8px">
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
          <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
            <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          </span>
          <button class="m-widget-menu" data-wid="irrigations" type="button">•••</button>
        </div>
        <div style="font-size:13px;color:#8e8e93">Aucune irrigation enregistrée cette saison</div>
      </div>`}function ea(e,i=[]){const t=ct(e,i),a=i.map(n=>Y.find(s=>s.id===n)).filter(Boolean);let l="";for(const n of t)if(n==="irrigations")l+=Qs(e);else if(n==="cumuls")l+=ia(e,i);else if(n==="previsions-5j")l+=sa(e);else if(Tt[n]){const s=new Set(Tt[n]),o=a.filter(d=>s.has(d.model));o.length&&(l+=aa(o,n))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${l}
    </div>`}function Ft(e,i,t,a,l=""){return`
    <div class="m-widget-card">
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${l}" type="button">•••</button>
      </div>
      ${a}
    </div>`}function De(e,i,t){const a=(e*9301+49297)%233280,n={etp:1+a%60/100,pluie:.8+a%70/100,djc:4+a%60/10,hfroid:.4+a%12/10,humec:.1+a%20/100,enso:4+a%40/10}[i]??1,s=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(n*s*10)/10}const Fi=e=>`m-pcumuls-${e}`;function Ne(e){try{return JSON.parse(localStorage.getItem(Fi(e)))||{}}catch{return{}}}function st(e,i){const t=Ne(e);localStorage.setItem(Fi(e),JSON.stringify({...t,...i}))}const ta={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function ia(e,i=[]){const t=new Set;i.forEach(u=>{const p=Y.find(g=>g.id===u);p&&(zt[p.model]||[]).forEach(g=>t.add(g))});const a=`${new Date().getFullYear()}-01-01`,l=Ne(e.id),n=new Set(l.hidden||[]),s=l.dates||{},o=l.cfg||{};e.id;const d=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:De(e.id,"etp",s.etp||a),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:De(e.id,"pluie",s.pluie||a),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:De(e.id,"djc",s.djc||a),show:t.has("temperature"),cfg:!0,cfgLabel:`${o.djMin??0}–${o.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#FEE7B4",icon:"bi-snow",val:De(e.id,"hfroid",s.hfroid||a),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${o.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:De(e.id,"humec",s.humec||a),show:t.has("humectation")},{id:"enso",label:"Ensoleillement",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:De(e.id,"enso",s.enso||a),show:!0}].filter(u=>u.show),r=d.filter(u=>!n.has(u.id)),c=d.filter(u=>n.has(u.id)),x=c.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${c.map(u=>`
          <button class="m-pcumul-add" data-cid="${u.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${u.icon}" style="color:${u.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${u.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",L=r.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${r.map(u=>{const p=s[u.id]||a;return`<div class="m-cumuls-saved-card" style="position:relative">
          <button class="m-pcumul-del" data-cid="${u.id}" data-pid="${e.id}" type="button" style="position:absolute;top:8px;right:8px;border:none;background:rgba(0,0,0,.08);border-radius:50%;width:22px;height:22px;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#636366">×</button>
          <div class="m-cumuls-saved-row1" style="padding-right:32px">
            <span class="m-cumuls-saved-metric"><i class="bi ${u.icon}" style="color:${u.color}"></i> ${u.label}</span>
            <span class="m-cumuls-saved-val" style="color:${u.color}">${u.val}<span class="m-cumuls-saved-unit"> ${u.unit}</span></span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:4px;flex-wrap:wrap">
            <span style="font-size:12px;color:#8e8e93">Depuis le</span>
            <input type="date" class="m-pcumul-date" data-cid="${u.id}" data-pid="${e.id}" value="${p}" style="border: 1px solid #CCC;background: transparent;font-size: 12px;color: #8e8e93;cursor: pointer;font-family: inherit;padding: 4px;border-radius: 5px;">
            ${u.cfg?`<button class="m-pcumul-cfg" data-cid="${u.id}" data-pid="${e.id}" style="border: 1px solid #CCC;background: transparent;font-size: 11px;color: #8e8e93;cursor: pointer;font-family: inherit;padding: 5px;border-radius: 5px;"><i class="bi bi-gear"></i> ${u.cfgLabel}</button>`:""}
          </div>
        </div>`}).join("")}${x}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${x}`;return Ft("Cumuls","bi-bar-chart-fill","#0172A4",L,"cumuls")}function sa(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],a=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],l=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],n=new Date,s=se.find(p=>p.id===(e==null?void 0:e.orgId)),o=(e==null?void 0:e.ville)||(s==null?void 0:s.ville)||"—",d=(e==null?void 0:e.id)||1,r=(p,g)=>Math.floor(Math.random()*(g-p+1))+p,c=(p,g)=>{const y=new Date(n);y.setDate(y.getDate()+p);const b=Math.floor((d*7+p*3)%11/2.2);return{lbl:p===0?"Auj.":i[y.getDay()],date:`${y.getDate()} ${t[y.getMonth()]}`,tmax:r(17+g,34+g),tmin:r(4+g,15+g),pluie:b>=3?r(2,18):0,vent:r(10,35),wi:b}},x=[0,1,2].map(p=>c(p,0)).concat([3,4].map(p=>c(p,-1))),L=p=>`
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${p.lbl}</div>
      <div class="m-wprev5-date">${p.date}</div>
      <i class="bi ${a[p.wi]} m-wprev5-icon" title="${l[p.wi]}"></i>
      <div class="m-wprev5-rain${p.pluie===0?" m-wprev5-rain--none":""}">${p.pluie>0?p.pluie+" mm":"—"}</div>
      <div class="m-wprev5-tmax">${p.tmax}°</div>
      <div class="m-wprev5-tmin">${p.tmin}°</div>
      <div class="m-wprev5-wind">${p.vent} <span>km/h</span></div>
    </div>`,u=`
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${o}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${x.map(L).join("")}</div>`;return Ft("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",u,"previsions-5j")}function aa(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},a={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermo-hygro",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},l={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},n={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(s=>{const o=t[s.model]||"bi-broadcast",d=a[s.model]||s.model,r=l[s.model]||"#0172A4",c=n[s.model]||[],x=Ve[c[0]],L=c[0],u=`
      <div style="margin-bottom:6px">
        ${x?_i(L,r,!1,"1d"):'<div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--txt3);font-size:12px">Données indisponibles</div>'}
      </div>
      <div class="m-wsensor-vals">
        ${c.slice(0,3).map(p=>{const g=Ve[p];if(!g)return"";const b=pt(p,1)[0],m=b<10?b.toFixed(1):Math.round(b);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${g.label}</span>
            <span class="m-wsensor-value" style="color:${g.color}">${m} ${g.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer">${s.serial}</div>`;return Ft(d,o,r,u,i)}).join("")}function na(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function la(e,i,t){const a=new Set;i.forEach(u=>{const p=Y.find(g=>g.id===u);p&&(zt[p.model]||[]).forEach(g=>a.add(g))});const l=[...new Set(["etp","rayonnement","temp_rosee",...a])].filter(u=>Ve[u]),n=Bt[t]||60,s=_t[t]||10080,o=s/n*6e4,d=new Date,r=new Date(d-s*6e4),c=["Horodatage",...l.map(u=>`${Ve[u].label} (${Ve[u].unit})`)].join(";"),x=Array.from({length:n},(u,p)=>[new Date(r.getTime()+p*o).toISOString().replace("T"," ").slice(0,19),...l.map(y=>pt(y,1)[0].toFixed(2))].join(";")),L=(e.name||"parcelle").replace(/[^\w]/g,"_");na([c,...x].join(`\r
`),`${L}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function oa(e,i="7d",t="1h"){const a=new Set;e.forEach(o=>{const d=Y.find(r=>r.id===o);d&&(zt[d.model]||[]).forEach(r=>a.add(r))});const l=[...new Set(["etp","rayonnement","temp_rosee",...a])],n=new Date().toISOString().slice(0,10),s=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-from" value="${s}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to" value="${n}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
      </div>`:""}
    </div>
    <div class="m-detail-section">
      ${l.map(o=>Ks(o,i)).join("")}
    </div>`}function ra(e,i,t){const a=t.map(d=>Y.find(r=>r.id===d)).filter(Boolean),l=a.map(d=>`${d.model} — ${d.serial}`),n=a.some(d=>d.model==="P+"||d.model==="PT"),s=a.some(d=>d.model==="P");return`
    <div class="m-detail-section">
      ${n&&s?`
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
        ${l.length?l.map((d,r)=>`<div class="m-list-row${r===l.length-1?" m-list-row--last":""}">
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
    </div>`}function jt(e,i=[],t="widgets",a="Parcelles"){let l=se.find(g=>g.id===e.orgId),n=t,s="7d",o="1h",d=!1;const r=(l==null?void 0:l.ville)||"",c=ce(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${a}</span></button>
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
    <div id="detail-content" class="m-detail-content"></div>`);function x(){const g=se.filter(v=>v.id!==100&&v.statut!=="inactif"),y=document.createElement("div"),b=()=>{y.innerHTML=g.map(v=>`
        <div class="m-sheet-option${v.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${v.id}">
          <span>${v.name}</span>
          ${v.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),y.querySelectorAll("[data-pick-org]").forEach(v=>{v.addEventListener("click",()=>{const S=+v.dataset.pickOrg;S!==e.orgId&&(e.orgId=S,l=se.find(C=>C.id===S),L(),N("Exploitation mise à jour")),m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>m.remove(),280)})})},m=oe({title:"Exploitation",body:y,doneLabel:"Fermer",onDone:()=>{}});b()}function L(){const g=c.querySelector("#detail-content");n==="widgets"&&(g.innerHTML=ea(e,i)),n==="donnees"&&(g.innerHTML=oa(i,s,o)),n==="params"&&(g.innerHTML=ra(e,l,i),u()),p()}function u(){const g=window.L;g&&setTimeout(()=>{var m;const y=c.querySelector("#parcel-minimap");if(!y)return;const b=g.map(y,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(g.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(b),((m=e.latlngs)==null?void 0:m.length)>=3){const v=g.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(b);b.fitBounds(v.getBounds(),{padding:[8,8]})}else b.setView([e.lat,e.lng],14),g.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(b)},50)}function p(){var g,y,b,m;(g=c.querySelector(".m-period-sel"))==null||g.addEventListener("change",v=>{s=v.target.value,L()}),(y=c.querySelector(".m-step-sel"))==null||y.addEventListener("change",v=>{o=v.target.value,L()}),(b=c.querySelector(".m-export-btn"))==null||b.addEventListener("click",()=>la(e,i,s)),c.querySelectorAll(".m-chart-svg-wrap").forEach(v=>Xs(v)),c.querySelectorAll(".m-list-row[data-action]").forEach(v=>{v.addEventListener("click",()=>{v.dataset.action==="edit-exploitation"?x():N("Fonctionnalité à venir")})}),c.querySelectorAll(".m-widget-menu").forEach(v=>{v.addEventListener("click",S=>{var w;S.stopPropagation();const C=v.dataset.wid;if(!C)return;(w=c.querySelector(".m-widget-dd"))==null||w.remove();const E=document.createElement("div");E.className="m-widget-dd",E.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:180px",E.innerHTML=`<button class="m-widget-dd-remove" data-wid="${C}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const k=c.querySelector(".m-detail-content"),A=v.getBoundingClientRect(),f=k.getBoundingClientRect();E.style.top=`${A.bottom-f.top+k.scrollTop+4}px`,E.style.right=`${f.right-A.right}px`,k.style.position="relative",k.appendChild(E),E.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{E.remove();const h=ct(e,i).filter($=>$!==C);Bi(e.id,h),L()}),setTimeout(()=>document.addEventListener("click",()=>E.remove(),{once:!0}),0)})}),(m=c.querySelector(".m-add-widget-btn"))==null||m.addEventListener("click",()=>Us(e,i,L)),c.querySelectorAll(".m-pcumul-del").forEach(v=>{v.addEventListener("click",S=>{S.stopPropagation();const C=+v.dataset.pid,E=Ne(C),k=new Set(E.hidden||[]);k.add(v.dataset.cid),st(C,{hidden:[...k]}),L()})}),c.querySelectorAll(".m-pcumul-date").forEach(v=>{v.addEventListener("change",()=>{const S=+v.dataset.pid,C=v.dataset.cid,E=v.value;if(!E||(Date.now()-new Date(E))/864e5>365)return;const f=Ne(S).dates||{};f[C]=E,st(S,{dates:f});const w=v.closest(".m-cumuls-saved-card"),h=w==null?void 0:w.querySelector(".m-cumuls-saved-val");if(h){const $=w.querySelector(".m-cumuls-saved-unit"),M=($==null?void 0:$.textContent.trim())||"",T=De(S,C,E);h.innerHTML=`${T}<span class="m-cumuls-saved-unit"> ${M}</span>`}})}),c.querySelectorAll(".m-pcumul-cfg").forEach(v=>{v.addEventListener("click",S=>{var h;S.stopPropagation();const C=+v.dataset.pid,E=v.dataset.cid,A={...Ne(C).cfg},f=ta[E];if(!f)return;(h=c.querySelector(".m-pcumul-cfg-panel"))==null||h.remove();const w=document.createElement("div");w.className="m-pcumul-cfg-panel",w.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",w.innerHTML=f.map($=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${$.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${$.key}" value="${A[$.key]??$.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',v.closest(".m-cumuls-saved-card").after(w),w.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{w.querySelectorAll(".m-pcumul-cfg-inp").forEach($=>{A[$.dataset.key]=parseFloat($.value)||0}),st(C,{cfg:A}),w.remove(),L()})})}),c.querySelectorAll(".m-pcumul-add").forEach(v=>{v.addEventListener("click",S=>{S.stopPropagation();const C=+v.dataset.pid,E=v.dataset.cid,k=Ne(C),A=new Set(k.hidden||[]);A.delete(E),st(C,{hidden:[...A]}),L()})})}c.querySelectorAll(".m-detail-tab").forEach(g=>{g.addEventListener("click",()=>{c.querySelectorAll(".m-detail-tab").forEach(y=>y.classList.remove("active")),g.classList.add("active"),n=g.dataset.view,L()})}),c.querySelector(".m-detail-back").addEventListener("click",te),c.querySelector("#d-star").addEventListener("click",()=>{d=!d;const g=c.querySelector("#d-star");g.querySelector("i").className=d?"bi bi-star-fill":"bi bi-star",g.style.color=d?"#f5c842":"",N(d?"Ajouté aux favoris":"Retiré des favoris")}),c.querySelector("#d-plus").addEventListener("click",()=>{var g;(g=window.showMobileAddPage)==null||g.call(window)}),c.querySelector("#d-journal").addEventListener("click",()=>ca(e)),L()}const Oi=e=>`parcel-journal-${e}`;function qt(e){try{const i=localStorage.getItem(Oi(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"note",category:"Observation générale",date:"2026-05-11",auteur:"Jean Dupont",texte:"Quelques pucerons sur feuilles basses. À surveiller."},{id:2,type:"traitement",date:"2026-05-16",auteur:"Sophie Martin",texte:"Vent < 2 m/s, conditions conformes.",produit:"Karate Zeon",dose:"0,1 L/ha",cible:"Pucerons"}]}function Ri(e,i){localStorage.setItem(Oi(e),JSON.stringify(i))}function ca(e){const i=se.find(n=>n.id===e.orgId),t=(i==null?void 0:i.ville)||"",a=ce(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);a.querySelector(".m-detail-back").addEventListener("click",te);function l(){var x,L;const n=a.querySelector("#mjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(u=>u.linkedType==="parcel"&&u.linkedId===e.id).map((u,p)=>({id:`dash-${p}`,type:"note",date:u.date,texte:u.text,auteur:u.auteur,_fromDashboard:!0})),o=[...qt(e.id),...s].sort((u,p)=>p.date.localeCompare(u.date)),d=u=>{const[p,g,y]=u.split("-");return`${y}/${g}/${p}`},r={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"}};let c=`
      <div style="padding:12px 16px 4px;display:flex;gap:8px">
        <button class="btn-secondary btn-sm" id="mjrn-add-note" style="gap:6px;flex:1;justify-content:center">
          <i class="bi bi-pencil-square"></i> Note
        </button>
        <button class="btn-secondary btn-sm" id="mjrn-add-trait" style="gap:6px;flex:1;justify-content:center">
          <i class="bi bi-eyedropper"></i> Traitement
        </button>
      </div>
    `;o.length===0?c+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(c+='<div class="m-jrn-timeline">',o.forEach((u,p)=>{const g=r[u.type]||r.note,y=u.type==="traitement",b=p===o.length-1,m=!!u._fromDashboard;c+=`
          <div class="m-jrn-entry" data-id="${u.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${g.dotBg};color:${g.dotColor};border-color:${g.dotColor}40">
                <i class="bi ${g.icon}"></i>
              </div>
              ${b?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${d(u.date)}</span>
                <span class="journal-type-badge journal-type-badge--${g.badgeCls}">${g.label}</span>
                ${m?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${u.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${u.texte?`<div class="m-jrn-texte">${u.texte}</div>`:""}
              ${u.auteur&&m?`<div style="font-size:11px;color:#8e8e93;margin-top:2px">${u.auteur}</div>`:""}
              ${y&&(u.produit||u.dose||u.cible)?`
                <div class="m-jrn-meta">
                  ${u.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${u.produit}</span>`:""}
                  ${u.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${u.dose}</span>`:""}
                  ${u.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${u.cible}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),c+="</div>"),n.innerHTML=c,(x=n.querySelector("#mjrn-add-note"))==null||x.addEventListener("click",()=>vi("note",e.id,l)),(L=n.querySelector("#mjrn-add-trait"))==null||L.addEventListener("click",()=>vi("traitement",e.id,l)),n.querySelectorAll(".m-jrn-del").forEach(u=>{u.addEventListener("click",()=>{const p=parseInt(u.dataset.id);Ri(e.id,qt(e.id).filter(g=>g.id!==p)),l()})})}l()}function vi(e,i,t){const a=e==="traitement",l=new Date().toISOString().slice(0,10),n=document.createElement("div");n.className="modal add-modal",n.innerHTML=`
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">${a?"Ajouter un traitement":"Ajouter une note"}</span>
        <button class="add-modal-close">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="mjf-date" class="journal-form-input" value="${l}">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">${a?"Observations":"Texte"}</label>
          <textarea id="mjf-texte" class="journal-form-textarea" placeholder="${a?"Conditions météo…":"Votre note…"}"></textarea>
        </div>
        ${a?`
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
    </div>`,n.querySelector(".add-modal-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",s=>{s.target===n&&n.remove()}),n.querySelector("#mjf-save").addEventListener("click",()=>{const s=n.querySelector("#mjf-date").value||l,o=n.querySelector("#mjf-texte").value.trim(),d={id:Date.now(),type:e,date:s,texte:o,auteur:"Jean Dupont"};a&&(d.produit=n.querySelector("#mjf-produit").value.trim(),d.dose=n.querySelector("#mjf-dose").value.trim(),d.cible=n.querySelector("#mjf-cible").value.trim()),!(!o&&!d.produit)&&(Ri(i,[d,...qt(i)]),n.remove(),t())}),document.body.appendChild(n)}const wt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:jt},Symbol.toStringTag,{value:"Module"})),Ue=100,da={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function Ye(e,i){const t=da[i];return t?Y.some(a=>a.parcelIds.includes(e.id)&&t.includes(a.model)):!0}const at=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température air",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function ua(e){switch(e){case"irrigation":return Math.round(Math.random()>.4?Math.random()*45:0);case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function pa(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const a=i==="admin",l=se.filter(m=>m.id!==Ue);Object.fromEntries(se.map(m=>[m.id,m]));let n=null,s=null;const o={};let d="carte",r="pluie",c="7 derniers jours",x="all";function L(m){const v=`${m}-${r}-${c}`;return v in o||(o[v]=ua(r)),o[v]}function u(){return a?x==="all"?V:x===String(Ue)?V.filter(m=>m.orgId===Ue):V.filter(m=>String(m.orgId)===x):V.filter(m=>m.orgId===1)}function p(){if(n){try{n.remove()}catch{}n=null,s=null}}function g(){p();const m=at.find(k=>k.id===r)||at[0],v=u(),S=a?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${Ue}"${x===String(Ue)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${l.map(k=>`<option value="${k.id}"${x===String(k.id)?" selected":""}>${k.name}</option>`).join("")}
      </select>`:"",C=[...v].sort((k,A)=>{const f=Ye(k,r),w=Ye(A,r);return f&&!w?-1:!f&&w?1:f?L(A.id)-L(k.id):0}),E=C.length?`<div class="m-plain-list">${C.map(k=>{const A=[k.crop,k.irrigation].filter(Boolean).join(" · "),f=Ye(k,r);return`
            <div class="m-plain-row m-tappable" data-plot-id="${k.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${k.name}</span>
                ${A?`<span class="m-plain-city">${A}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${f?"":" m-plain-na"}">${f?`${L(k.id)} ${m.unit}`:"—"}</span>
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';t.innerHTML=`
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${d==="carte"?" m-view-btn--on":""}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${d==="liste"?" m-view-btn--on":""}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${at.map(k=>`<option value="${k.id}"${k.id===r?" selected":""}>${k.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${m.aggs.map(k=>`<option${k===c?" selected":""}>${k}</option>`).join("")}
          </select>
        </div>
        ${S}
      </div>
      ${d==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${E}</div>`}`,b(),d==="carte"&&y(v,m)}function y(m,v){const S=window.L;S&&setTimeout(()=>{const C=t.querySelector("#parcel-map");if(!C)return;n=S.map(C,{zoomControl:!1,attributionControl:!1}),S.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(n);const E=[];m.forEach(k=>{const A=Ye(k,r)?`${L(k.id)} ${v.unit}`:"—",f=Y.filter(T=>T.parcelIds.includes(k.id)).map(T=>T.id),w=()=>jt(k,f),h=[k.lat,k.lng];k.latlngs&&k.latlngs.length>=3?(S.polygon(k.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(n).on("click",w),E.push(...k.latlngs)):E.push(h);const $=Ye(k,r),M=S.circleMarker(h,{radius:$?8:6,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:$?.95:.4}).addTo(n);$&&M.bindTooltip(A,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),M.on("click",w)}),E.length&&(s=E,n.fitBounds(E,{padding:[32,32]})),n.invalidateSize()},0)}window.addEventListener("m-tab-change",m=>{m.detail==="parcelles"&&d==="carte"&&n&&setTimeout(()=>{n.invalidateSize(),s!=null&&s.length&&n.fitBounds(s,{padding:[32,32]})},50)});function b(){var m,v,S;t.querySelectorAll(".m-view-btn").forEach(C=>C.addEventListener("click",()=>{d=C.dataset.view,g()})),(m=t.querySelector("#metric-sel"))==null||m.addEventListener("change",C=>{var E;r=C.target.value,c=((E=at.find(k=>k.id===r))==null?void 0:E.defaultAgg)||"",g()}),(v=t.querySelector("#agg-sel"))==null||v.addEventListener("change",C=>{c=C.target.value,g()}),(S=t.querySelector("#org-filter"))==null||S.addEventListener("change",C=>{x=C.target.value,g()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(C=>{C.addEventListener("click",()=>{const E=V.find(A=>A.id===+C.dataset.plotId);if(!E)return;const k=Y.filter(A=>A.parcelIds.includes(E.id)).map(A=>A.id);jt(E,k)})})}g()}const It={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},ma={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"},Qe={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function Ni(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(a,l)=>{const n=l/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(n-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,s))})}const Vi={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function va(e,i,t,a,l,n=20){const s=Vi[e]||10080,o=new Date,d=L=>e==="1d"||e==="hier"?`${String(L.getHours()).padStart(2,"0")}h`:e==="365d"?L.toLocaleDateString("fr-FR",{month:"short"}):`${String(L.getDate()).padStart(2,"0")}/${String(L.getMonth()+1).padStart(2,"0")}`,r=4,c=i-t-a,x=l-n;return Array.from({length:r+1},(L,u)=>{const p=u/r,g=new Date(o.getTime()-(1-p)*s*6e4),y=(t+p*c).toFixed(1),b=u===0?"start":u===r?"end":"middle";return[`<line x1="${y}" y1="${x}" x2="${y}" y2="${x+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${y}" y="${l-3}" text-anchor="${b}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(g)}</text>`].join("")}).join("")}function fa(e,i,t,a="7d"){const l=Wi[a]||60,n=Ni(e,l),s=320,o=100,d=34,r=6,c=10,x=20,L=s-d-r,u=o-c-x,p=t?0:Math.min(...n),g=Math.max(...n,p+.001),y=g-p,b=$=>d+$/(n.length-1)*L,m=$=>c+u-($-p)/y*u,v=`g${Math.random().toString(36).slice(2,8)}`,S=[0,.5,1].map($=>{const M=p+$*y,T=c+u-$*u;return`<text x="${d-3}" y="${(T+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${M<10?M.toFixed(1):Math.round(M)}</text>`}).join(""),C=[.25,.5,.75].map($=>`<line x1="${d}" y1="${(c+u-$*u).toFixed(1)}" x2="${s-r}" y2="${(c+u-$*u).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),E=`<line x1="${d}" y1="${c+u}" x2="${s-r}" y2="${c+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,k=va(a,s,d,r,o);if(t){const $=L/n.length*.7;return`<svg viewBox="0 0 ${s} ${o}" width="100%" height="${o}" preserveAspectRatio="none">
      ${S}${C}${E}
      ${n.map((M,T)=>{const z=(M-p)/y*u,H=c+u-z;return`<rect x="${(b(T)-$/2).toFixed(1)}" y="${H.toFixed(1)}" width="${$.toFixed(1)}" height="${z.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${k}
    </svg>`}const f=n.map(($,M)=>[b(M),m($)]).map(([$,M],T)=>`${T?"L":"M"}${$.toFixed(1)},${M.toFixed(1)}`).join(" "),w=`${f} L${b(n.length-1).toFixed(1)},${(c+u).toFixed(1)} L${d},${(c+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:n.map($=>+$.toFixed(2)),minV:+p.toFixed(2),maxV:+g.toFixed(2)}))}" data-color="${i}" style="position:relative">
    <svg viewBox="0 0 ${s} ${o}" width="100%" height="${o}" preserveAspectRatio="none">
      <defs><linearGradient id="${v}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${S}${C}${E}
      <path d="${w}" fill="url(#${v})"/>
      <path d="${f}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${k}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function ha(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,a=e.querySelector(".m-chart-tip"),l=e.querySelector(".m-chart-crosshair"),n=e.dataset.color||"#0172A4";function s(d){const r=e.getBoundingClientRect(),c=Math.max(0,Math.min(1,(d-r.left)/r.width)),x=Math.round(c*(t.length-1)),L=t[x],u=c*100;l.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${u}%;width:1px;background:${n};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(u,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=L<10?L.toFixed(1):String(Math.round(L))}function o(){l.style.display="none",a.style.display="none"}e.addEventListener("pointermove",d=>{d.preventDefault(),s(d.clientX)}),e.addEventListener("pointerdown",d=>s(d.clientX)),e.addEventListener("pointerup",o),e.addEventListener("pointerleave",o),e.style.cursor="crosshair"}const Wi={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function ba(e,i,t){if(!t)return"";const a=Wi[i]||60,n=(Vi[i]||10080)/(a*60),s=Ni(e,a);let o=[];if(t==="temp"){const d=s.reduce((c,x)=>c+Math.max(0,x),0)*(n/24),r=s.filter(c=>c<7).length*n;o=[{label:"Degrés jours",val:`${Math.round(d)} DJ`},{label:"Heures de froid",val:`${Math.round(r)} h`}]}else if(t==="pluie")o=[{label:"Cumul pluie",val:`${s.reduce((r,c)=>r+c,0).toFixed(1)} mm`}];else if(t==="rayo"){const d=s.filter(r=>r>120).length*n;o=[{label:"Ensoleillement",val:`${Math.round(d)} h`}]}else if(t==="hws"){const d=s.filter(r=>r>50).length*n;o=[{label:"Heures d'humectation",val:`${Math.round(d)} h`}]}return o.length?`<div class="m-chart-cumuls">${o.map(d=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${d.label}</span>
      <span class="m-chart-cumul-val">${d.val}</span>
    </div>`).join("")}</div>`:""}function ga(e,i="7d",t="1h"){const a=Qe[e.model]||[];if(!a.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const l=a.map(o=>`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${o.color}">${o.label}</span>
        </div>
        ${fa(o.id,o.color,o.cumul,i)}
        ${ba(o.id,i,o.cumulsType)}
      </div>`).join(""),n=new Date().toISOString().slice(0,10),s=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-from" value="${s}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to" value="${n}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
      </div>`:""}
    </div>
    <div class="m-detail-section">${l}</div>`}function ya(e){var d;const i=(e.parcelIds||[]).map(r=>V.find(c=>c.id===r)).filter(Boolean),t=i[0]||null,a=t?se.find(r=>r.id===t.orgId):null,l=e.networkQuality||0,n=l>70?"#30d158":l>40?"#ff9f0a":"#ff3b30",s=e.event?Array.isArray(e.event)?e.event:[e.event]:[],o=i.map((r,c)=>`<div class="m-list-row${c===i.length-1&&i.length>0,""}" data-unlink-plot="${r.id}">
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
            value="${((d=(()=>{try{return JSON.parse(localStorage.getItem("weenat-sensor-names"))||{}}catch{return{}}})())==null?void 0:d[e.id])||""}"
            style="flex:1;min-width:0;margin-left:10px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 10px;font-size:14px;font-family:inherit;color:#1c1c1e;background:#f5f5f7;outline:none;user-select:text;-webkit-user-select:text">
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${ma[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${It[e.model]||e.model}</span>
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
          <span class="m-list-row-value">${(a==null?void 0:a.name)||"—"}</span>
        </div>
      </div>

      <div class="m-list-section-header">Géolocalisation</div>
      <div class="m-list">
        ${t?'<div id="sensor-minimap" class="m-minimap-container"></div>':""}
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${(a==null?void 0:a.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${(t==null?void 0:t.lat)||0},${(t==null?void 0:t.lng)||0}?q=${(t==null?void 0:t.lat)||0},${(t==null?void 0:t.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">Anomalies</div>
      <div class="m-list">
        ${s.length?s.map(r=>`<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${r}</span></div>`).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${n};font-weight:600">${l}%</span>
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
        ${o}
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
    </div>`}function Pt(e,i="donnees",t="admin"){var u;e.parcelIds||(e.parcelIds=[]);const a=e.parcelIds.length?V.find(p=>e.parcelIds.includes(p.id)):null;let l=i,n="7d",s="1h",o=!1;const d=a&&((u=se.find(p=>p.id===a.orgId))==null?void 0:u.ville)||"",r=ce(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${[It[e.model]?`${It[e.model]} · ${e.model}`:e.model,d].filter(Boolean).join(" · ")}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function c(){const p=r.querySelector("#detail-content");l==="donnees"&&(p.innerHTML=ga(e,n,s)),l==="params"&&(p.innerHTML=ya(e),x()),L()}function x(){const p=window.L,g=e.parcelIds.length?V.find(y=>e.parcelIds.includes(y.id)):null;!p||!g||setTimeout(()=>{const y=r.querySelector("#sensor-minimap");if(!y)return;const b=p.map(y,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});p.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(b),b.setView([g.lat,g.lng],15),p.circleMarker([g.lat,g.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(b)},50)}function L(){var p,g,y;(p=r.querySelector(".m-period-sel"))==null||p.addEventListener("change",b=>{n=b.target.value,c()}),(g=r.querySelector(".m-step-sel"))==null||g.addEventListener("change",b=>{s=b.target.value,c()}),r.querySelectorAll(".m-chart-svg-wrap").forEach(b=>ha(b)),r.querySelectorAll(".m-list-row[data-action]").forEach(b=>{b.addEventListener("click",()=>{const m=b.dataset.action;m==="add-maintenance"?fi(e,{openForm:!0}):m==="add-plot"?xa(e,t,c):N("Fonctionnalité à venir")})}),r.querySelectorAll("[data-unlink-plot-btn]").forEach(b=>{b.addEventListener("click",m=>{m.stopPropagation();const v=+b.dataset.unlinkPlotBtn;e.parcelIds=e.parcelIds.filter(C=>C!==v);const S=V.find(C=>C.id===v);N(`Délié de ${(S==null?void 0:S.name)||"la parcelle"}`),c()})}),(y=r.querySelector("#sensor-name-input"))==null||y.addEventListener("change",b=>{const m=b.target.value.trim();try{const S=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};m?S[e.id]=m:delete S[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(S))}catch{}const v=r.querySelector(".m-detail-title");v&&(v.textContent=m||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))})}r.querySelectorAll(".m-detail-tab").forEach(p=>{p.addEventListener("click",()=>{r.querySelectorAll(".m-detail-tab").forEach(g=>g.classList.remove("active")),p.classList.add("active"),l=p.dataset.view,c()})}),r.querySelector(".m-detail-back").addEventListener("click",te),r.querySelector("#d-star").addEventListener("click",()=>{o=!o;const p=r.querySelector("#d-star");p.querySelector("i").className=o?"bi bi-star-fill":"bi bi-star",p.style.color=o?"#f5c842":"",N(o?"Ajouté aux favoris":"Retiré des favoris")}),r.querySelector("#d-journal").addEventListener("click",()=>fi(e)),r.querySelector("#d-plus").addEventListener("click",()=>{var p;return(p=window.showMobileAddPage)==null?void 0:p.call(window)}),c()}const Ji=e=>`sensor-journal-${e}`,Gi=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function Dt(e){try{const i=localStorage.getItem(Ji(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",texte:""},{id:2,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",texte:""},{id:3,type:"note",date:"2023-11-02",user:"Agriculteur",texte:"Capteur légèrement déplacé — redressé"}]}function Ui(e,i){localStorage.setItem(Ji(e),JSON.stringify(i))}function xa(e,i,t){const a=i==="adherent"?1:null,l=a?V.filter(r=>r.orgId===a):V.filter(r=>r.orgId!==100),n=new Set((Qe[e.model]||[]).map(r=>r.id)),s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function o(r=""){const c=r.toLowerCase(),x=c?l.filter(u=>u.name.toLowerCase().includes(c)||(u.crop||"").toLowerCase().includes(c)):l,L=s.querySelector("#plot-list");if(!x.length){L.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}L.innerHTML="",x.forEach((u,p)=>{const g=e.parcelIds.includes(u.id),y=p===x.length-1,b=document.createElement("div");b.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${y?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,b.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${u.name}</span>
          ${u.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${u.crop}</span>`:""}
        </span>
        ${g?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,b.addEventListener("click",()=>{if(g)e.parcelIds=e.parcelIds.filter(m=>m!==u.id),N(`Délié de ${u.name}`),o(r),t();else{const m=Y.find(v=>v.id!==e.id&&v.parcelIds.includes(u.id)&&(Qe[v.model]||[]).some(S=>n.has(S.id)));m?(d.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{d.remove(),$a(e,u,m,t)},280)):(e.parcelIds=[...e.parcelIds,u.id],N(`Lié à ${u.name}`),o(r),t())}}),L.appendChild(b)})}o();const d=oe({title:"Parcelles liées",body:s,doneLabel:"Fermer",onDone:()=>{t()}});s.querySelector("#plot-search").addEventListener("input",r=>o(r.target.value))}function $a(e,i,t,a){const l=(Qe[t.model]||[]).filter(o=>(Qe[e.model]||[]).some(d=>d.id===o.id)).map(o=>o.label).join(", "),n=document.createElement("div");n.innerHTML=`
    <div style="display:flex;align-items:flex-start;gap:10px;padding:6px 0 14px;font-size:13px;color:#636366;line-height:1.5">
      <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:17px;flex-shrink:0;margin-top:1px"></i>
      <span>La parcelle <strong style="color:#1c1c1e">${i.name}</strong> a déjà un capteur mesurant <strong style="color:#1c1c1e">${l}</strong>. Quel capteur conserver ?</span>
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
    <div style="height:6px"></div>`;const s=oe({title:"Conflit de métrique",body:n,doneLabel:"Annuler",onDone:()=>{}});n.querySelector("#keep-existing").addEventListener("click",()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),N("Liaison annulée")},280)}),n.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(o=>o!==i.id),e.parcelIds=[...e.parcelIds,i.id],s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),N(`Lié à ${i.name}`),a()},280)})}function fi(e,i={}){const t=ce(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",te);const a=Object.fromEntries(Gi.map(n=>[n.id,n]));function l(){var c;const n=t.querySelector("#sjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(x=>x.linkedType==="sensor"&&x.linkedId===e.id).map((x,L)=>({id:`dash-${L}`,type:"note",date:x.date,texte:x.text,user:x.auteur,_fromDashboard:!0})),o=[...Dt(e.id),...s].sort((x,L)=>L.date.localeCompare(x.date)),d=x=>{const[L,u,p]=x.split("-");return`${p}/${u}/${L}`};let r=`
      <div style="padding:12px 16px 8px">
        <button class="btn-primary" id="sjrn-add-btn" style="width:100%;justify-content:center;gap:8px;font-size:15px;padding:11px 16px;border-radius:10px">
          <i class="bi bi-plus-circle-fill"></i> Ajouter une opération de maintenance
        </button>
      </div>
    `;o.length===0?r+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(r+='<div class="m-jrn-timeline">',o.forEach((x,L)=>{const u=a[x.type]||{label:x.type,icon:"bi-circle",color:"#8e8e93"},p=L===o.length-1,g=!!x._fromDashboard;r+=`
          <div class="m-jrn-entry" data-id="${x.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${u.color}18;color:${u.color};border-color:${u.color}40">
                <i class="bi ${u.icon}"></i>
              </div>
              ${p?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${d(x.date)}</span>
                <span style="font-size:12px;font-weight:600;color:${u.color}">${u.label}</span>
                ${g?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${x.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${x.texte?`<div class="m-jrn-texte">${x.texte}</div>`:""}
              ${x.user?`<div style="font-size:11px;color:#8e8e93;margin-top:2px">${x.user}</div>`:""}
            </div>
          </div>`}),r+="</div>"),n.innerHTML=r,(c=n.querySelector("#sjrn-add-btn"))==null||c.addEventListener("click",()=>hi(e.id,l)),n.querySelectorAll(".m-jrn-del").forEach(x=>{x.addEventListener("click",()=>{const L=parseInt(x.dataset.id);Ui(e.id,Dt(e.id).filter(u=>u.id!==L)),l()})})}l(),i.openForm&&hi(e.id,l)}function hi(e,i){const t=new Date().toISOString().slice(0,10),a=document.createElement("div");a.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-sheet-input-label" style="font-size:12px;color:#8e8e93;margin-bottom:4px">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${Gi.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
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
    </div>`,oe({title:"Opération de maintenance",body:a,doneLabel:"Enregistrer",onDone:()=>{const l=a.querySelector("#sjf-type").value,n=a.querySelector("#sjf-date").value||t,s=a.querySelector("#sjf-user").value.trim()||"Jean Dupont",o=a.querySelector("#sjf-texte").value.trim();Ui(e,[{id:Date.now(),type:l,date:n,user:s,texte:o},...Dt(e)]),i()}}),setTimeout(()=>{var l;return(l=a.querySelector("#sjf-texte"))==null?void 0:l.focus()},350)}const wa=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:Pt},Symbol.toStringTag,{value:"Module"})),Re=100,bi=1,St=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Sa={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},Ea={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function nt(e,i){return(Ea[e]||[]).includes(i)}function La(e){return Sa[e]||e}function Ca(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const lt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function ka(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Aa(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const a=i==="admin",l=se.filter(E=>E.id!==Re),n=Object.fromEntries(V.map(E=>[E.id,E])),s=Object.fromEntries(se.map(E=>[E.id,E]));let o=null,d=null;const r={};let c="carte",x="pluie",L="7 derniers jours",u="all";function p(E){const k=`${E}-${x}-${L}`;return k in r||(r[k]=ka(x)),r[k]}function g(){if(a){if(u==="all")return Y;if(u===String(Re)){const w=new Set(V.filter(h=>h.orgId===Re).map(h=>h.id));return Y.filter(h=>h.parcelIds.some($=>w.has($)))}const f=new Set(V.filter(w=>String(w.orgId)===u).map(w=>w.id));return Y.filter(w=>w.parcelIds.some(h=>f.has(h)))}const E=new Set(V.filter(f=>f.orgId===bi).map(f=>f.id)),k=Y.filter(f=>f.parcelIds.some(w=>E.has(w))),A=Y.filter(f=>!f.parcelIds.some(w=>E.has(w))&&St.includes(f.model));return u==="mine"?k:u==="network"?A:[...k,...A]}function y(E){const k=E.parcelIds.length?n[E.parcelIds[0]]:null;if(!k)return null;const A=(E.id*7919%1e3-500)/1e6,f=(E.id*6271%1e3-500)/1e6;return{lat:k.lat+A,lng:k.lng+f,name:k.name}}function b(E){var A,f;const k=E.parcelIds.length?n[E.parcelIds[0]]:null;return(k?(A=s[k.orgId])==null?void 0:A.ville:null)||((f=s[E.orgId])==null?void 0:f.ville)||null}function m(){if(o){try{o.remove()}catch{}o=null,d=null}}function v(){m();const E=lt.find(h=>h.id===x)||lt[0],k=g();let A;if(a)A=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${Re}"${u===String(Re)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${l.map(h=>`<option value="${h.id}"${u===String(h.id)?" selected":""}>${h.name}</option>`).join("")}
        </select>`;else{const h=se.find(M=>M.id===bi),$=se.find(M=>M.id===Re);A=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${u==="all"?" selected":""}>Tout le réseau</option>
          <option value="network"${u==="network"?" selected":""}>${($==null?void 0:$.name)||"Breiz'Agri Conseil"} uniquement</option>
          <option value="mine"${u==="mine"?" selected":""}>${(h==null?void 0:h.name)||"Mon organisation"} uniquement</option>
        </select>`}const f=[...k].sort((h,$)=>{const M=nt(h.model,x),T=nt($.model,x);return M&&!T?-1:!M&&T?1:M?p($.id)-p(h.id):0}),w=f.length?`<div class="m-plain-list">${f.map(h=>{const $=St.includes(h.model),T=nt(h.model,x)?`<span class="m-sensor-val">${p(h.id)} ${E.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${h.id}">
              <div class="m-sensor-icon" style="background:${$?"#0172A420":"#5b8dd920"};color:${$?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${La(h.model)} - ${h.model}</span>
                <span class="m-sensor-sub">${[b(h),Ca(h)].filter(Boolean).join(" - ")}</span>
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
            ${lt.map(h=>`<option value="${h.id}"${h.id===x?" selected":""}>${h.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${E.aggs.map(h=>`<option${h===L?" selected":""}>${h}</option>`).join("")}
          </select>
        </div>
        ${A}
      </div>
      ${c==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${w}</div>`}`,C(),c==="carte"&&S(k,E)}function S(E,k){const A=window.L;A&&setTimeout(()=>{const f=t.querySelector("#sensor-map");if(!f)return;o=A.map(f,{zoomControl:!1,attributionControl:!1}),A.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(o);const w=[];E.forEach(h=>{const $=y(h);if(!$)return;const M=nt(h.model,x),T=St.includes(h.model),z=A.circleMarker([$.lat,$.lng],{radius:M?10:7,color:"#fff",weight:2,fillColor:T?"#0172A4":"#5b8dd9",fillOpacity:M?.95:.45}).addTo(o);M&&z.bindTooltip(`${p(h.id)} ${k.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),z.on("click",()=>Pt(h,"donnees",i)),w.push([$.lat,$.lng])}),w.length&&(d=w,o.fitBounds(w,{padding:[32,32]})),o.invalidateSize()},0)}window.addEventListener("m-tab-change",E=>{E.detail==="capteurs"&&(v(),c==="carte"&&o&&setTimeout(()=>{o.invalidateSize(),d!=null&&d.length&&o.fitBounds(d,{padding:[32,32]})},50))});function C(){var E,k,A;t.querySelectorAll(".m-view-btn").forEach(f=>f.addEventListener("click",()=>{c=f.dataset.view,v()})),(E=t.querySelector("#metric-sel"))==null||E.addEventListener("change",f=>{var w;x=f.target.value,L=((w=lt.find(h=>h.id===x))==null?void 0:w.defaultAgg)||"",v()}),(k=t.querySelector("#agg-sel"))==null||k.addEventListener("change",f=>{L=f.target.value,v()}),(A=t.querySelector("#org-filter"))==null||A.addEventListener("change",f=>{u=f.target.value,v()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(f=>{f.addEventListener("click",()=>{const w=Y.find(h=>h.id===+f.dataset.sensorId);w&&Pt(w,"donnees",i)})})}v(),window.addEventListener("weenat-sensor-renamed",()=>{c==="liste"&&v()})}const Ma=["Essentiel","Plus","Expert"],Ta=["Administrateur","Agent","Lecteur"],gi=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function ja(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function qa(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function yi({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function Et(e){if(!e)return"—";const[i,t,a]=e.split("-");return`${a}/${t}/${i}`}function xi(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let a=11;a>=0;a--){const l=new Date(i.getFullYear(),i.getMonth()-a,1),n=l.getFullYear(),s=String(l.getMonth()+1).padStart(2,"0"),o=a>0?a===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${n}-${s}`,dateEmission:`${n}-${s}-01`,montant:l.getMonth()===11?1980:t[a%t.length],statut:o})}return e.reverse()}function Ia(e,i){if(!e)return{};const t=i==="admin",a=se.find(A=>A.id===(t?vt:Jt));if(!a)return{};const n=(t?ft.filter(A=>{var f;return!((f=A.orgIds)!=null&&f.length)||A.orgIds.includes(vt)}):ft.filter(A=>{var f;return(f=A.orgIds)==null?void 0:f.includes(Jt)})).filter(A=>A.statut!=="inactif").map(A=>({...A})),s=se.filter(A=>A.id!==vt&&A.statut!=="inactif").length,o=qa(a.adresse||""),d={rue:"",cp:"",ville:""},r={name:a.name,siret:a.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:o,adresseLivrai:d,pays:"France",markerLat:a.lat||48.117,markerLng:a.lng||-1.678,plan:a.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":a.codeAdherent||"CTR-2022-00418",dateAdhesion:a.dateAdhesion||"2022-03-15",licencesMembres:t?ft.length:3,licencesAdherents:t?s:null,licencesIntegrations:t?27:2}};let c=null,x=null;function L(){if(!x)return;const A=e.querySelector(`#${x}`);if(!A)return;if(c){try{c.remove()}catch{}c=null}const f=window.L;f&&(c=f.map(A,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),f.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(c),c.setView([r.markerLat,r.markerLng],14),f.marker([r.markerLat,r.markerLng],{draggable:!1}).addTo(c),setTimeout(()=>c==null?void 0:c.invalidateSize(),50))}function u(){if(x=`expl-map-${Math.random().toString(36).slice(2,8)}`,c){try{c.remove()}catch{}c=null}const A=yi(r.adresseFactu)||"—",f=yi(r.adresseLivrai),w=t?xi():[],h=w.slice(0,3),$=w.length>3,M=n.slice(0,3),T=n.length>3;function z(H,J){const ue=H.statut==="payée"?"#30d158":"#ff9f0a",re=H.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${J?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${H.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${H.numero}</span>
            <span class="m-list-row-sub">${Et(H.dateEmission)} · ${H.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${ue};flex-shrink:0;margin-right:4px">${re}</span>
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
            ${r.metiers.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">${r.metiers.map(H=>`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:4px;padding:2px 8px;font-size:12px;font-weight:500">${H}</span>`).join("")}</div>`:'<div style="font-size:13px;color:#8e8e93;margin-top:4px">—</div>'}
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Adresses</div>
      <div class="m-list">
        <div class="m-list-row" data-action="adresse-factu">
          <span class="m-list-row-label">Facturation</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${A}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${f||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
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
      <div id="${x}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${r.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Et(r.contrat.dateAdhesion)}</span>
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
        ${h.map((H,J)=>z(H,!$&&J===h.length-1)).join("")}
        ${$?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${w.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${n.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${n.length?[...M.map((H,J)=>`
            <div class="m-list-row${!T&&J===M.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${J}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${H.prenom} ${H.nom}</span>
                <span class="m-list-row-sub">${H.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),T?`
            <div class="m-list-row m-list-row--last m-tappable" data-action="voir-membres">
              <span class="m-list-row-label" style="color:#007aff">Voir tous les membres</span>
              <span class="m-list-row-value" style="color:#8e8e93">${n.length}</span>
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
          ${gi.slice(0,5).map((H,J)=>`
            <div class="m-list-row${J===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${ja(H.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${H.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${H.distance} km · ${H.adherents} adhérents · ${H.capteurs} capteurs · ${H.parcelles} parcelles</div>
                <button class="m-join-net-btn" data-net-idx="${J}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
              </div>
            </div>`).join("")}
        </div>
      </div>
      `}
      <div style="height:32px"></div>`,p()}function p(){var A,f;e.querySelectorAll(".m-list-row[data-action]").forEach(w=>{w.addEventListener("click",()=>{switch(w.dataset.action){case"name":g("Nom de l'exploitation",r.name,h=>{r.name=h,u()});break;case"siret":g("SIRET",r.siret,h=>{r.siret=h,u()});break;case"metier":b();break;case"adresse-factu":y("Adresse de facturation",r.adresseFactu,h=>{r.adresseFactu=h,u()});break;case"adresse-livrai":y("Adresse de livraison",r.adresseLivrai,h=>{r.adresseLivrai=h,u()});break;case"pays":g("Pays",r.pays,h=>{r.pays=h,u()});break;case"plan":m("Abonnement",Ma,r.plan,h=>{r.plan=h,u()});break;case"facture":N(`PDF ${w.dataset.factureId} téléchargé`);break;case"voir-factures":C();break;case"voir-membres":S();break}})}),e.querySelectorAll("[data-member-idx]").forEach(w=>{w.addEventListener("click",()=>v(+w.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(w=>{w.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach($=>{const M=$===w;$.style.background=M?"#fff":"transparent",$.style.color=M?"#000":"#8e8e93"});const h=w.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=h==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=h==="independante"?"":"none"})}),(A=e.querySelector("#btn-ajouter-membre"))==null||A.addEventListener("click",E),(f=e.querySelector("#btn-quitter-reseau"))==null||f.addEventListener("click",()=>{const w=document.createElement("div");w.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,oe({title:"Quitter le réseau ?",body:w,doneLabel:"Confirmer",onDone:()=>N("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(w=>{w.addEventListener("click",()=>{const h=gi[+w.dataset.netIdx];N(`Demande envoyée à ${h.name}`)})})}function g(A,f,w){const h=document.createElement("div");h.innerHTML=`<input class="m-sheet-input" type="text" value="${(f||"").replace(/"/g,"&quot;")}" placeholder="${A}">`;const $=h.querySelector("input");oe({title:A,body:h,doneLabel:"Enregistrer",onDone:()=>{const M=$.value.trim();M&&(w(M),N("Enregistré"))}}),setTimeout(()=>$.focus(),300)}function y(A,f,w){const h=document.createElement("div");h.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(f.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${f.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(f.ville||"").replace(/"/g,"&quot;")}">`,oe({title:A,body:h,doneLabel:"Enregistrer",onDone:()=>{w({rue:h.querySelector("#f-rue").value.trim(),cp:h.querySelector("#f-cp").value.trim(),ville:h.querySelector("#f-ville").value.trim()}),N("Enregistré")}}),setTimeout(()=>h.querySelector("#f-rue").focus(),300)}function b(){const A=new Set(r.metiers),f=document.createElement("div"),w=()=>{f.innerHTML=is.map(h=>`
        <div class="m-sheet-option${A.has(h)?" m-sheet-option--active":""}" data-m="${h}" style="justify-content:space-between">
          <span>${h}</span>
          ${A.has(h)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),f.querySelectorAll("[data-m]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.m;A.has($)?A.delete($):A.add($),w()})})};w(),oe({title:"Métiers",body:f,doneLabel:"Valider",onDone:()=>{r.metiers=[...A],u()}})}function m(A,f,w,h){const $=document.createElement("div");$.innerHTML=f.map((T,z)=>`
      <div class="m-sheet-option${T===w?" m-sheet-option--active":""}" data-i="${z}">
        <span>${T}</span>${T===w?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const M=oe({title:A,body:$,doneLabel:"Fermer",onDone:()=>{}});$.querySelectorAll(".m-sheet-option").forEach(T=>{T.addEventListener("click",()=>{h(f[+T.dataset.i]),M.classList.remove("m-sheet-overlay--show"),setTimeout(()=>M.remove(),280),N("Enregistré")})})}function v(A,f){const w=n[A];if(!w)return;const h=document.createElement("div");h.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${w.role}</span></div>
        ${w.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${w.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${w.prenom} ${w.nom}</a>
      </div>`;const $=oe({title:`${w.prenom} ${w.nom}`,body:h,doneLabel:"Fermer",onDone:()=>{}});h.querySelector("#mem-delete").addEventListener("click",()=>{n.splice(A,1),$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{$.remove(),u(),N("Membre retiré"),f==null||f()},280)})}function S(){let A="",w=20;function h(){if(!A)return n;const z=A.toLowerCase();return n.filter(H=>`${H.prenom} ${H.nom}`.toLowerCase().includes(z)||(H.email||"").toLowerCase().includes(z)||(H.role||"").toLowerCase().includes(z))}const $=ce(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),M=$.querySelector("#mbr-list-content");function T(){var ue;const z=h(),H=z.slice(0,w),J=z.length-H.length;M.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${z.length} membre${z.length!==1?"s":""}${A?" trouvé"+(z.length!==1?"s":""):" actif"+(z.length!==1?"s":"")}</div>
        <div class="m-list">
          ${H.length?H.map((re,Oe)=>`<div class="m-list-row${Oe===H.length-1&&J===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${n.indexOf(re)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${re.prenom} ${re.nom}</span>
                <span class="m-list-row-sub">${re.role}${re.email?" · "+re.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${J>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${J} de plus</span>
            </div>`:""}
          ${z.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,M.querySelectorAll("[data-mbr-idx]").forEach(re=>{re.addEventListener("click",()=>v(+re.dataset.mbrIdx,T))}),(ue=M.querySelector("#mbr-load-more"))==null||ue.addEventListener("click",()=>{w+=20,T()})}$.querySelector(".m-detail-back").addEventListener("click",te),$.querySelector("#mbr-invite-btn").addEventListener("click",E),$.querySelector("#mbr-search").addEventListener("input",z=>{A=z.target.value,w=20,T()}),T()}function C(){const A=xi();let f="";function w(){if(!f)return A;const T=f.toLowerCase();return A.filter(z=>z.numero.toLowerCase().includes(T)||z.statut.toLowerCase().includes(T)||String(z.montant).includes(T))}const h=ce(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),$=h.querySelector("#fac-list-content");function M(){const T=w();$.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${T.length} facture${T.length!==1?"s":""}</div>
        <div class="m-list">
          ${T.length?T.map((z,H)=>{const J=z.statut==="payée"?"#30d158":"#ff9f0a",ue=z.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${H===T.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${z.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${z.numero}</span>
                <span class="m-list-row-sub">${Et(z.dateEmission)} · ${z.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${J};flex-shrink:0;margin-right:4px">${ue}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,$.querySelectorAll("[data-fac-id]").forEach(z=>{z.addEventListener("click",()=>N(`PDF ${z.dataset.facId} téléchargé`))})}h.querySelector(".m-detail-back").addEventListener("click",te),h.querySelector("#fac-search").addEventListener("input",T=>{f=T.target.value,M()}),M()}function E(){const A=document.createElement("div");A.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${Ta.map(f=>`<option>${f}</option>`).join("")}
      </select>`,oe({title:"Ajouter un membre",body:A,doneLabel:"Inviter",onDone:()=>{A.querySelector("#inv-email").value.trim()&&N("Invitation envoyée")}}),setTimeout(()=>A.querySelector("#inv-email").focus(),300)}u();function k(){requestAnimationFrame(()=>setTimeout(L,100))}return{onAdd:E,refresh:k}}const Pa=100,Da=["Essentiel","Plus","Expert"],Ha={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function Lt(e){return Ha[e]||{label:e||"—",color:"#8e8e93"}}function za(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=se.filter(u=>u.id!==Pa&&u.statut!=="inactif").map(u=>({...u})),a={...xe,siege:{...xe.siege},antennes:xe.antennes.map(u=>({...u}))},l={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function n(u,p,g,y){return u.slice(p,g).map((b,m)=>{const v=p+m,S=Lt(b.statut),C=b.statut==="demande en attente";return`
        <div class="m-list-row${v===y?" m-list-row--last":""} m-tappable" data-org-idx="${v}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${b.proprietaire||b.name}</span>
            <span class="m-list-row-sub">${b.name} · ${b.plan||"—"}</span>
          </div>
          ${C?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${v}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${v}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${S.color};flex-shrink:0;margin-right:4px">${S.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function s(){let u="",g=20;function y(){if(!u)return t;const S=u.toLowerCase();return t.filter(C=>(C.proprietaire||C.name||"").toLowerCase().includes(S)||(C.name||"").toLowerCase().includes(S)||(C.email||"").toLowerCase().includes(S)||(C.codeAdherent||"").toLowerCase().includes(S))}const b=ce(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),m=b.querySelector("#adh-list-content");function v(){var A;const S=y(),C=S.slice(0,g),E=S.length-C.length,k=S.filter(f=>f.statut==="actif"||f.statut==="actif en essai").length;m.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${u?S.length+" résultat"+(S.length!==1?"s":""):k+" actif"+(k!==1?"s":"")+" · "+S.length+" total"}</div>
        <div class="m-list">
          ${C.length?C.map((f,w)=>{const h=t.indexOf(f),$=Lt(f.statut),M=f.statut==="demande en attente";return`
              <div class="m-list-row${w===C.length-1&&E===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${h}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${f.proprietaire||f.name}</span>
                  <span class="m-list-row-sub">${f.name} · ${f.plan||"—"}</span>
                </div>
                ${M?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${h}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${h}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${$.color};flex-shrink:0;margin-right:4px">${$.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${E>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${E} de plus</span>
            </div>`:""}
        </div>`,m.querySelectorAll("[data-lp-org-idx]").forEach(f=>{f.addEventListener("click",w=>{w.target.closest("[data-adh-action]")||x(t[+f.dataset.lpOrgIdx],+f.dataset.lpOrgIdx,v)})}),m.querySelectorAll("[data-adh-action]").forEach(f=>{f.addEventListener("click",w=>{w.stopPropagation();const h=+f.dataset.lpAdhIdx,$=f.dataset.adhAction,M=t[h];M&&($==="valider"?(M.statut="actif",o(),v(),N(`${M.proprietaire||M.name} validé`)):(t.splice(h,1),o(),v(),N("Demande rejetée")))})}),(A=m.querySelector("#adh-load-more"))==null||A.addEventListener("click",()=>{g+=20,v()})}b.querySelector(".m-detail-back").addEventListener("click",te),b.querySelector("#adh-invite-btn").addEventListener("click",L),b.querySelector("#adh-search").addEventListener("input",S=>{u=S.target.value,g=20,v()}),v()}function o(){var m;const u=t.filter(v=>v.statut!=="inactif"),p=`${a.siege.adresse}, ${a.siege.codePostal} ${a.siege.ville}`;e.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Réseau</div>
      <div class="m-list">
        <div class="m-list-row" data-action="net-nom">
          <span class="m-list-row-label">Nom du réseau</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:13px">${a.nom}</span>
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
          <span class="m-list-row-value" style="color:#8e8e93;flex-shrink:0">${a.antennes.length} antenne${a.antennes.length>1?"s":""}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-footer">Description, logo et contacts modifiables sur la version web</div>

      <div class="m-list-section-header">Partage entre les adhérents</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs météo</span>
          <label class="m-toggle"><input type="checkbox" id="tog-meteo"${l.partageMeteo?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs irrigation</span>
          <label class="m-toggle"><input type="checkbox" id="tog-sol"${l.partageSol?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Stations météo virtuelles</span>
          <label class="m-toggle"><input type="checkbox" id="tog-irrigation"${l.partageIrrigation?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
      </div>

      <div class="m-list-section-header">Adhérents — ${u.length} actifs</div>
      <div class="m-list">
        ${n(t,0,Math.min(5,t.length),t.length>5?-1:t.length-1)}
        ${t.length>5?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${t.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(v=>{v.addEventListener("click",S=>{S.target.closest("[data-adh-action]")||x(t[+v.dataset.orgIdx],+v.dataset.orgIdx)})}),(m=e.querySelector('[data-action="voir-adherents"]'))==null||m.addEventListener("click",s),e.querySelectorAll("[data-adh-action]").forEach(v=>{v.addEventListener("click",S=>{S.stopPropagation();const C=+v.dataset.adhIdx,E=v.dataset.adhAction,k=t[C];k&&(E==="valider"?(k.statut="actif",o(),N(`${k.proprietaire||k.name} validé`)):(t.splice(C,1),o(),N("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(v=>{v.addEventListener("click",()=>{switch(v.dataset.action){case"net-nom":d("Nom du réseau",a.nom,S=>{a.nom=S,o()});break;case"net-siege":r();break;case"net-antennes":c();break}})});const g=e.querySelector("#tog-meteo"),y=e.querySelector("#tog-sol"),b=e.querySelector("#tog-irrigation");g==null||g.addEventListener("change",()=>{l.partageMeteo=g.checked,N("Préférence enregistrée")}),y==null||y.addEventListener("change",()=>{l.partageSol=y.checked,N("Préférence enregistrée")}),b==null||b.addEventListener("change",()=>{l.partageIrrigation=b.checked,N("Préférence enregistrée")})}function d(u,p,g){const y=document.createElement("div");y.innerHTML=`<input class="m-sheet-input" type="text" value="${(p||"").replace(/"/g,"&quot;")}" placeholder="${u}">`;const b=y.querySelector("input");oe({title:u,body:y,doneLabel:"Enregistrer",onDone:()=>{const m=b.value.trim();m&&(g(m),N("Enregistré"))}}),setTimeout(()=>b.focus(),300)}function r(){const u=document.createElement("div");u.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${a.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${a.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${a.siege.ville.replace(/"/g,"&quot;")}">`,oe({title:"Adresse du siège",body:u,doneLabel:"Enregistrer",onDone:()=>{a.siege.adresse=u.querySelector("#s-rue").value.trim(),a.siege.codePostal=u.querySelector("#s-cp").value.trim(),a.siege.ville=u.querySelector("#s-ville").value.trim(),o(),N("Enregistré")}}),setTimeout(()=>u.querySelector("#s-rue").focus(),300)}function c(){const u=document.createElement("div");(()=>{u.innerHTML=a.antennes.map((g,y)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${g.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${g.adresse}, ${g.codePostal} ${g.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${g.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),oe({title:"Antennes",body:u,doneLabel:"Fermer",onDone:()=>{}})}function x(u,p,g){var C,E;const y=Lt(u.statut),b=u.statut==="invitation en attente",m=`https://app.weenat.com/invitation?code=${u.codeAdherent||"ADZ-XXX"}`,v=document.createElement("div");v.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${u.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${u.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${u.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${u.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${V.filter(k=>k.orgId===u.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const k=new Set(V.filter(A=>A.orgId===u.id).map(A=>A.id));return Y.filter(A=>k.has(A.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${y.color};font-weight:600">${y.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${u.dateAdhesion?u.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${b?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const S=oe({title:u.name,body:v,doneLabel:"Fermer",onDone:()=>{}});(C=v.querySelector("#lnk-copy"))==null||C.addEventListener("click",()=>{var k;(k=navigator.clipboard)==null||k.writeText(m).catch(()=>{}),N("Lien copié !")}),(E=v.querySelector("#lnk-cancel"))==null||E.addEventListener("click",()=>{u.statut="inactif",S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{S.remove(),o(),g==null||g(),N("Invitation annulée")},280)}),v.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(p,1),S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{S.remove(),o(),g==null||g(),N("Adhérent supprimé")},280)})}function L(){const u=document.createElement("div");u.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${Da.map(p=>`<option>${p}</option>`).join("")}
      </select>`,oe({title:"Inviter un adhérent",body:u,doneLabel:"Envoyer",onDone:()=>{const p=u.querySelector("#adh-email").value.trim(),g=u.querySelector("#adh-code").value.trim();if(!p||!g){N("Email et code requis");return}t.push({id:Date.now(),name:p,proprietaire:p,email:p,codeAdherent:g,plan:u.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),o(),N("Invitation envoyée")}}),setTimeout(()=>u.querySelector("#adh-email").focus(),300)}return o(),{onAdd:L}}$i(V);const Ba=new URLSearchParams(window.location.search),Se=Ba.get("role")==="adherent"?"adherent":"admin";function Yi(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}Yi();setInterval(Yi,1e4);const Ae=["dashboard","parcelles","capteurs","alertes","parametres"];let dt="dashboard";function ze(e){var i,t;!Ae.includes(e)||e===dt||(dt=e,document.querySelectorAll(".m-screen").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function _a(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;Gt()>0&&ss()?_a(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),ze(t)}):(Gt()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),ze(t))});let he=null,et=null;const Zi=50,tt=document.getElementById("screen-stack");tt.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){he=null;return}he=e.clientX,et=e.clientY});tt.addEventListener("mouseup",e=>{if(he===null)return;const i=e.clientX-he,t=e.clientY-et;if(Math.abs(i)>Zi&&Math.abs(i)>Math.abs(t)){const a=Ae.indexOf(dt);i<0&&a<Ae.length-1&&ze(Ae[a+1]),i>0&&a>0&&ze(Ae[a-1])}he=null,et=null});tt.addEventListener("mouseleave",()=>{he=null});tt.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){he=null;return}he=e.touches[0].clientX,et=e.touches[0].clientY},{passive:!0});tt.addEventListener("touchend",e=>{if(he===null)return;const i=e.changedTouches[0].clientX-he,t=e.changedTouches[0].clientY-et;if(Math.abs(i)>Zi&&Math.abs(i)>Math.abs(t)){const a=Ae.indexOf(dt);i<0&&a<Ae.length-1&&ze(Ae[a+1]),i>0&&a>0&&ze(Ae[a-1])}he=null},{passive:!0});const Fa=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...Se==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],mt={};function Ki(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=mt[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var a;return(a=window.showMobileAddPage)==null?void 0:a.call(window)})}function Oa(){var i;const e=document.getElementById("param-segment");e&&(Se==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),Fa.forEach((t,a)=>{const l=document.createElement("button");l.className="m-segment-btn"+(a===0?" active":""),l.textContent=t.label,l.dataset.target=t.id,l.addEventListener("click",()=>{var n,s,o;e.querySelectorAll(".m-segment-btn").forEach(d=>d.classList.remove("active")),l.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(d=>d.classList.remove("active")),(n=document.getElementById(t.id))==null||n.classList.add("active"),Ki(t.id),(o=(s=mt[t.id])==null?void 0:s.refresh)==null||o.call(s)}),e.appendChild(l)}))}Oa();Ws(document.getElementById("screen-dashboard"),Se);pa(document.getElementById("screen-parcelles"),Se);Aa(document.getElementById("screen-capteurs"),Se);vs(document.getElementById("screen-alertes"),Se);cs(document.getElementById("param-compte"),Se);mt["param-exploitation"]=Ia(document.getElementById("param-exploitation"),Se);mt["param-reseau"]=za(document.getElementById("param-reseau"),Se);function Ra(){var a;const e=Se==="admin",i=document.getElementById("phone-screen");(a=document.getElementById("m-add-modal"))==null||a.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#f2f2f7;flex-shrink:0;border-bottom:.5px solid rgba(0,0,0,.1)">
      <span style="font-size:17px;font-weight:700">Ajouter</span>
      <button id="m-add-close" style="width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.07);border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <div style="overflow-y:auto;flex:1;padding:12px 16px">
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon exploitation</div>
        ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"}].map(l=>`
          <button class="m-add-row" data-action="${l.action}" style="display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08);text-align:left">
            <i class="bi ${l.icon}" style="color:#0172A4;width:22px;text-align:center;flex-shrink:0"></i>
            <span>${l.label}</span>
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(l=>{l.addEventListener("click",()=>{var n;t.remove(),(l.dataset.action==="note"||l.dataset.action==="traitement")&&((n=window.openJournalModal)==null||n.call(window,l.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=Ra;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});Ki("param-compte");
