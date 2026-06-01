const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-mr9d3KSS.js","assets/sensors-wI07SRZE.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-BFmvZ9cD.js","assets/store-InOgbptE.js","assets/orgs-Cx4wNzLL.js","assets/network-YzWdS0n_.js","assets/irrigations-C22Dtsoo.js","assets/constants-C2D4LmLD.js","assets/members-CuDabgg3.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as W}from"./plots-BFmvZ9cD.js";import{d as ts,e as Ei}from"./store-InOgbptE.js";import{s as G}from"./sensors-wI07SRZE.js";import{o as ne}from"./orgs-Cx4wNzLL.js";import{n as xe}from"./network-YzWdS0n_.js";import{I as K,s as Pe,g as is}from"./irrigations-C22Dtsoo.js";import{I as ss,A as ut,a as Gt,M as ns}from"./constants-C2D4LmLD.js";import{m as pt}from"./members-CuDabgg3.js";const He=[];function re(e){const s=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),He.push(t),t}function ie(){const e=He.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function Ut(){return He.length}function as(){return He.some(e=>e.dataset.dirty==="true")}function Li(){He.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{He.forEach(e=>e.remove()),He.length=0});const Yt={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},ls=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Zt=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let Me={};function be(e){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ze({title:e,body:s,onDone:t,doneLabel:a="OK"}){var d;const l=document.getElementById("phone-screen");(d=document.querySelector(".m-sheet-overlay"))==null||d.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${a}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,n.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),l.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const i=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",i),n.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),i()}),n.addEventListener("click",u=>{u.target===n&&i()}),n}function Kt(e,s,t){const a=document.createElement("div");a.innerHTML=`<input class="m-sheet-input" type="text" value="${s}" placeholder="${e}">`;const l=a.querySelector("input");ze({title:e,body:a,doneLabel:"Enregistrer",onDone:()=>{t(l.value.trim()),be("Enregistré")}}),setTimeout(()=>l.focus(),300)}function Xt(e,s,t,a){const l=document.createElement("div");l.innerHTML=s.map((i,d)=>`
    <div class="m-sheet-option${i===t?" m-sheet-option--active":""}" data-i="${d}">
      <span>${i}</span>
      ${i===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const n=ze({title:e,body:l,doneLabel:"Fermer",onDone:()=>{}});l.querySelectorAll(".m-sheet-option").forEach(i=>{i.addEventListener("click",()=>{a(s[+i.dataset.i]),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280),be("Enregistré")})})}function os(e,s){const t=document.createElement("div"),a=()=>{var l;t.innerHTML=e.map((n,i)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${i}" data-f="label" value="${n.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${i}" data-f="numero" value="${n.numero}" placeholder="+33 6…">
        </div>
        ${i>0?`<button class="m-sheet-remove" data-i="${i}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(n=>{n.addEventListener("input",()=>{e[+n.dataset.i][n.dataset.f]=n.value})}),t.querySelectorAll(".m-sheet-remove").forEach(n=>{n.addEventListener("click",()=>{e.splice(+n.dataset.i,1),a()})}),(l=t.querySelector(".m-sheet-add-phone"))==null||l.addEventListener("click",()=>{e.push({label:"",numero:""}),a()})};a(),ze({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{s(e),be("Enregistré")}})}function rs(e,s,t){const a=document.createElement("div");a.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,a.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var n;(n=navigator.clipboard)==null||n.writeText(e.value).catch(()=>{}),be("Clé copiée !")});const l=ze({title:"Clé API",body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const n=s.findIndex(i=>i.id===e.id);n!==-1&&s.splice(n,1),l.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{l.remove(),t()},280),be("Clé supprimée")})}function ds(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function cs(e){const s=document.createElement("div");s.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=s.querySelector("input");ze({title:"Nouvelle clé API",body:s,doneLabel:"Générer",onDone:()=>{const a=t.value.trim();if(!a){be("Entrez un nom");return}const l={id:Date.now(),name:a,created:new Date().toLocaleDateString("fr-FR"),value:ds()};e(l),be("Clé générée")}}),setTimeout(()=>t.focus(),300)}function us(e,s){Me={profile:JSON.parse(JSON.stringify(Yt[s]||Yt.admin)),langue:"Français",unites:Zt[0]};const a=localStorage.getItem("mobile_avatarUrl")||null;function l(){const i=Me.profile,d=a?`<img src="${a}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${i.initials}</span>`,u=i.apiKeys.map(c=>`
      <div class="m-list-row" data-key-id="${c.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${c.name}</span>
          <span class="m-list-row-sub">créée le ${c.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),r=i.phones.map((c,h)=>`
      <div class="m-list-row${h===i.phones.length-1&&i.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${c.label||"Numéro "+(h+1)}</span>
        <span class="m-list-row-value">${c.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");e.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${d}</div>
        <div class="m-compte-name">${i.prenom} ${i.nom}</div>
        <label class="m-compte-avatar-btn">
          <input type="file" accept="image/*" id="m-avatar-upload" hidden>
          Changer la photo
        </label>
      </div>

      <div class="m-list-section-header">Identité</div>
      <div class="m-list">
        <div class="m-list-row" data-action="prenom">
          <span class="m-list-row-label">Prénom</span>
          <span class="m-list-row-value">${i.prenom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="nom">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${i.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Contact</div>
      <div class="m-list">
        <div class="m-list-row" data-action="email">
          <span class="m-list-row-label">Email</span>
          <span class="m-list-row-value" style="font-size:13px">${i.email} <i class="bi bi-check-circle-fill" style="color:#30d158;font-size:10px"></i></span>
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
    `,n()}function n(){var d;const i=Me.profile;(d=e.querySelector("#m-avatar-upload"))==null||d.addEventListener("change",u=>{const r=u.target.files[0];if(!r)return;const c=new FileReader;c.onload=h=>{localStorage.setItem("mobile_avatarUrl",h.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${h.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},c.readAsDataURL(r)}),e.querySelectorAll(".m-list-row[data-action]").forEach(u=>{u.addEventListener("click",()=>{switch(u.dataset.action){case"prenom":Kt("Prénom",i.prenom,r=>{i.prenom=r,l()});break;case"nom":Kt("Nom",i.nom,r=>{i.nom=r,l()});break;case"email":ze({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${i.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>be("Fonctionnalité à venir")});break;case"phones":os(i.phones,r=>{i.phones=r,l()});break;case"mdp":ze({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>be("Fonctionnalité à venir")});break;case"langue":Xt("Langue",ls,Me.langue,r=>{Me.langue=r,e.querySelector("#val-langue").textContent=r});break;case"unites":Xt("Unités",Zt,Me.unites,r=>{Me.unites=r,e.querySelector("#val-unites").textContent=r.split(" ")[0]});break;case"gen-key":cs(r=>{i.apiKeys.push(r),l()});break;case"delete":be("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(u=>{u.addEventListener("click",()=>{const r=i.apiKeys.find(c=>c.id===+u.dataset.keyId);r&&rs(r,i.apiKeys,l)})}),e.querySelectorAll(".m-toggle input[data-notif]").forEach(u=>{u.addEventListener("change",()=>be("Préférence enregistrée"))})}l()}function N(e){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function oe({title:e,body:s,doneLabel:t="Fermer",onDone:a}={}){var d;const l=document.getElementById("phone-screen");(d=document.querySelector(".m-sheet-overlay"))==null||d.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,n.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),l.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const i=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",i),n.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),i()}),n.addEventListener("click",u=>{u.target===n&&i()}),n}function at({title:e,message:s="",confirmLabel:t="Confirmer",confirmColor:a="#ff3b30",onConfirm:l}){var u;const n=document.getElementById("phone-screen");(u=document.querySelector(".m-sheet-overlay"))==null||u.remove();const i=document.createElement("div");i.className="m-sheet-overlay",i.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd" style="justify-content:center;padding:12px 16px 8px">
        <span class="m-sheet-title">${e}</span>
      </div>
      <div class="m-sheet-body" style="padding:4px 16px 32px">
        ${s?`<p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px;text-align:center">${s}</p>`:""}
        <button id="sc-confirm" style="width:100%;padding:14px;background:${a};color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;margin-bottom:8px">${t}</button>
        <button id="sc-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
      </div>
    </div>`,n.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const d=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#sc-cancel").addEventListener("click",d),i.querySelector("#sc-confirm").addEventListener("click",()=>{d(),setTimeout(()=>l==null?void 0:l(),50)}),i.addEventListener("click",r=>{r.target===i&&d()})}function ps(e){const s=[{label:"Seuil dépassé",desc:"Conditions déclenchantes vérifiées",duration:"2h34",resolved:!0},{label:"Seuil dépassé",desc:"Notification SMS envoyée",duration:"45min",resolved:!0},{label:"Seuil dépassé",desc:"Valeur mesurée hors plage",duration:"1h20",resolved:!0},{label:"Fausse alerte",desc:"Pic transitoire — durée < seuil",duration:null,resolved:!0},{label:"Seuil dépassé",desc:"Conditions toujours vérifiées",duration:"3h05",resolved:!0},{label:"Alerte en cours",desc:"Conditions vérifiées depuis ce matin",duration:null,resolved:!1}],t=3+e%5,a=Date.now();return Array.from({length:t},(l,n)=>{const i=e*17+n*7,d=1+n*(2+i%6),u=new Date(a-d*864e5),r=s[i%s.length],c=u.getDate(),h=u.getMonth()+1;return{date:`${String(c).padStart(2,"0")}/${String(h).padStart(2,"0")}`,heure:`${String(6+i%14).padStart(2,"0")}h${String(i%60).padStart(2,"0")}`,label:r.label,desc:r.desc,duration:r.duration,resolved:n>0?!0:r.resolved}})}const ms=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],vs=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],Qt={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},fs={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function mt(e){if(!e)return"—";const[s,t,a]=e.split("-");return`${a}/${t}/${s}`}function ei(e){const s=e.sensorIds.map(a=>{const l=G.find(n=>n.id===a);return l?`${l.model} ${l.serial}`:null}).filter(Boolean),t=e.parcelIds.map(a=>{const l=W.find(n=>n.id===a);return(l==null?void 0:l.name)||null}).filter(Boolean);return[...s,...t]}function hs(e,s){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const a=[...s==="adherent"?vs:ms];function l(){if(!a.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=a.map(i=>{ei(i);const d=fs[i.metric]||"bi-bell",u=i.statut==="actif";return`
        <div class="m-alert-card" data-id="${i.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${u?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${d}"></i>
            </div>
            <span class="m-alert-name">${i.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${u?"checked":""} data-id="${i.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${Qt[i.metric]||i.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${mt(i.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${i.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),n()}function n(){t.querySelectorAll(".m-alert-toggle input").forEach(i=>{i.addEventListener("change",d=>{d.stopPropagation();const u=+i.dataset.id,r=a.find(c=>c.id===u);r&&(r.statut=i.checked?"actif":"inactif",l(),N(`Alerte ${i.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-more-btn").forEach(i=>{i.addEventListener("click",d=>{d.stopPropagation();const u=+i.dataset.id,r=a.find(v=>v.id===u);if(!r)return;ei(r);const c=document.createElement("div"),h=ps(u);function S(){const v=r.sensorIds.map((f,m)=>{const E=G.find(C=>C.id===f);return E?{label:`${E.model} ${E.serial}`,type:"sensor",idx:m}:null}).filter(Boolean),y=r.parcelIds.map((f,m)=>{const E=W.find(C=>C.id===f);return E?{label:E.name,type:"parcel",idx:m}:null}).filter(Boolean),L=[...v,...y];return L.length?L.map(f=>`<div class="m-perimetre-item" data-type="${f.type}" data-idx="${f.idx}">
                <span>${f.label}</span>
                <button class="m-perimetre-del" data-type="${f.type}" data-idx="${f.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const o=document.createElement("div");o.className="m-sheet-info-rows";function p(){var f;c.innerHTML="";const v=document.createElement("div");v.className="m-sheet-info-rows",v.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Qt[r.metric]||r.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${mt(r.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${mt(r.created)}</span></div>
            ${(f=r.phones)!=null&&f.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${r.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${r.statut}</span></div>`;const y=document.createElement("div");y.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",y.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${S()}</div>`,v.appendChild(y),c.appendChild(v);const L=document.createElement("div");L.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${h.map(m=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${m.resolved?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${m.date} à ${m.heure}${m.duration?` · ${m.duration}`:""}</div>
                <div class="m-history-label">${m.label}</div>
                <div class="m-history-desc">${m.desc}</div>
              </div></div>`).join("")}`,c.appendChild(L),c.querySelectorAll(".m-perimetre-del").forEach(m=>{m.addEventListener("click",E=>{E.stopPropagation();const C=m.dataset.type,x=+m.dataset.idx;C==="sensor"?r.sensorIds.splice(x,1):r.parcelIds.splice(x,1),p(),l(),N("Retiré du périmètre")})})}p(),oe({title:r.name,body:c,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-alert-card").forEach(i=>{i.addEventListener("click",d=>{if(d.target.closest(".m-alert-toggle")||d.target.closest(".m-alert-more-btn"))return;const u=+i.dataset.id,r=a.find(S=>S.id===u);if(!r)return;const c=document.createElement("div");c.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const h=oe({title:r.name,body:c,doneLabel:"Fermer",onDone:()=>{}});c.querySelector("#al-edit").addEventListener("click",()=>{h.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{h.remove(),N("Modification à venir")},280)}),c.querySelector("#al-delete").addEventListener("click",()=>{const S=a.findIndex(o=>o.id===u);S!==-1&&a.splice(S,1),h.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{h.remove(),l()},280),N("Alerte supprimée")})})})}l()}const bs="modulepreload",gs=function(e){return"/weenat-proto/"+e},ti={},me=function(s,t,a){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),d=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));l=Promise.allSettled(t.map(u=>{if(u=gs(u),u in ti)return;ti[u]=!0;const r=u.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${c}`))return;const h=document.createElement("link");if(h.rel=r?"stylesheet":bs,r||(h.as="script"),h.crossOrigin="",h.href=u,d&&h.setAttribute("nonce",d),document.head.appendChild(h),r)return new Promise((S,o)=>{h.addEventListener("load",S),h.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${u}`)))})}))}function n(i){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=i,window.dispatchEvent(d),!d.defaultPrevented)throw i}return l.then(i=>{for(const d of i||[])d.status==="rejected"&&n(d.reason);return s().catch(n)})};function _e(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const we=new Date().toISOString().split("T")[0];function Je(e){const s=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,a,l]=e.split("-");return`${parseInt(l)} ${s[parseInt(a)-1]} ${t}`}function ii(e){const s=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,a]=e.split("-");return`${parseInt(a)} ${s[parseInt(t)-1]}`}function St(e){return!e||e===we?"":e<we?'<span class="irr-pill irr-pill--past">Passée · Réalisée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function Et(e,s){return e?'<div class="irr-chk irr-chk--on"></div>':s?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function rt(e,s,t){const a=s.length>0&&s.every(n=>t.has(n.id)),l=[...s].sort((n,i)=>n.name.localeCompare(i.name,"fr")).map(n=>{const i=t.has(n.id);return`<div class="irr-plot-row${i?" irr-plot-row--sel":""}" data-pid="${n.id}">
      <div><div class="irr-plot-name">${n.name}</div>${ys(n)}</div>
      ${Et(i,!1)}
    </div>`}).join("");return`<div class="irr-sel-all-row" id="irr-sel-all">
    <span class="irr-sel-all-lbl">${a?"Tout désélectionner":"Tout sélectionner"}</span>
    ${Et(a,!1)}
  </div>${l}`}function Lt({title:e,body:s,onSave:t,onDelete:a,saveLabel:l="Enregistrer"}){var u,r;const n=document.getElementById("phone-screen");(u=document.querySelector(".irr-sheet-overlay"))==null||u.remove();const i=document.createElement("div");i.className="irr-sheet-overlay",i.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${a?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${l}</button>
      </div>
    </div>`,i.querySelector(".irr-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),n.appendChild(i),requestAnimationFrame(()=>i.classList.add("irr-sheet-overlay--open"));const d=()=>{i.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>i.remove(),280)};return i.addEventListener("click",c=>{c.target===i&&d()}),(r=i.querySelector("#iss-del"))==null||r.addEventListener("click",()=>{a==null||a(),d()}),i.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),d()}),i}function Ci(e,s,t){const a=s.filter(d=>e.has(d.id)&&(!d.irrigation||d.irrigation==="Non irrigué"));if(!a.length){t();return}const l=document.createElement("div");l.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${a.length===1?`<strong>${a[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${a.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" style="width:100%;padding:12px;border-radius:10px;border:1px solid #E0DED8;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e">
      <option value="">— Choisir un type —</option>
      ${ss.map(d=>`<option value="${d}">${d}</option>`).join("")}
    </select>`;const i=Lt({title:"Type d'irrigation",body:l,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const d=l.querySelector("#irr-type-ask").value;d&&a.forEach(u=>{u.irrigation=d,ts(u.id,{irrigation:d})}),t()}}).querySelector("#iss-del");i&&(i.textContent="Passer",i.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function ys(e){const s=e.crop,t=e.irrigation||null,a=e.substrate?"Substrat : "+e.substrate:e.texture||null,l=[s,t||"<em>type irrigation non renseigné</em>",a].filter(Boolean);return!s&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${l.join(" · ")}</span>`}function ki(e,s,t=null){let a=new Set((t==null?void 0:t.ids)??[]),l=we,n=10;function i(){return rt([],e,a)}function d(o){o.querySelector("#irr-date-hint").innerHTML=St(l)}function u(o){const p=a.size,v=o.querySelector(".irr-summary"),y=o.querySelector(".irr-save-btn");!v||!y||(t?(v.textContent="",y.disabled=!1,y.textContent="Enregistrer"):(v.textContent=p===0?"":`${p} parcelle${p>1?"s":""} · ${n} mm`,y.disabled=p===0,y.textContent="Enregistrer"))}function r(o){var p;o.querySelectorAll(".irr-plot-row").forEach(v=>{v.addEventListener("click",()=>{const y=+v.dataset.pid;a.has(y)?a.delete(y):a.add(y),o.querySelector("#irr-sel-list").innerHTML=i(),r(o),u(o)})}),(p=o.querySelector("#irr-sel-all"))==null||p.addEventListener("click",()=>{const v=e.some(y=>!a.has(y.id));e.forEach(y=>v?a.add(y.id):a.delete(y.id)),o.querySelector("#irr-sel-list").innerHTML=i(),r(o),u(o)})}const c=t?e.filter(o=>t.ids.includes(o.id)):[],h=t?`<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${t.label} <span style="color:#9E9D98;font-weight:400">· ${t.ids.length} parcelle${t.ids.length>1?"s":""}</span></span>
       </div>
       ${c.map(o=>`<div style="font-size:13px;color:#636366;padding:2px 4px">· ${o.name}</div>`).join("")}`:`<div id="irr-sel-list">${i()}</div>`,S=_e(re(`
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
      ${h}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${t?"":"disabled"}>Enregistrer</button>
    </div>
  `));S.dataset.dirty="true",t||r(S),u(S),S.querySelector("#irr-back").addEventListener("click",ie),S.querySelector("#irr-date").addEventListener("change",o=>{l=o.target.value,d(S),u(S)}),S.querySelector("#irr-qty").addEventListener("input",o=>{n=parseInt(o.target.value)||1,u(S)}),S.querySelector(".irr-save-btn").addEventListener("click",()=>{const o=t?new Set(t.ids):a;Ci(o,e,()=>{const p=l>we;o.forEach(f=>{K.push({iso:l,mm:n,real:!p,plotId:f,fromStrategy:!1})}),Pe();const y=[{title:null,names:[...o].map(f=>{var m;return(m=e.find(E=>E.id===f))==null?void 0:m.name}).filter(Boolean)}],L=o.size===1?String([...o][0]):"all";Li(),Ai({title:o.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:Je(l)},{label:"Quantité",value:`${n} mm`}],parcelSections:y,isFut:p,plots:e,calFilter:L,addedCount:o.size,stackDepth:1})})})}function Ct(e,s,t=null,a=null){let l=new Set((t==null?void 0:t.ids)??[]),n=we,i=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],d=10,u=7;function r(){if(!n||!i||u<=0)return[];const p=[],v=new Date(i);let y=new Date(n);for(;y<=v&&p.length<100;)p.push(new Date(y)),y.setDate(y.getDate()+u);return p}function c(){const p=r();l.size;const v=p.length>0?`<span class="irr-preview-ok">↗ ${p.length} irrigations · ${p.length*d} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${n}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${i}" />
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
      <div class="irr-preview-box" id="strat-preview">${v}</div>
      ${t?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${t.label} <span style="color:#9E9D98;font-weight:400">· ${t.ids.length} parcelle${t.ids.length>1?"s":""}</span></span>
           </div>`:rt([],e,l)}
      <div class="irr-bottom-spacer"></div>
    `}function h(p){const v=l.size,y=r(),L=p.querySelector(".irr-save-btn"),f=p.querySelector(".irr-summary");!L||!f||(L.disabled=v===0||y.length===0,f.textContent=v===0?"":`${v} parcelle${v>1?"s":""} · ${y.length} occurrences`,L.textContent="Voir l'aperçu →")}function S(p){var L,f,m,E,C;const v=p.querySelector(".irr-scroll-body");v.querySelectorAll(".irr-plot-row").forEach(x=>{x.addEventListener("click",()=>{const k=+x.dataset.pid;l.has(k)?l.delete(k):l.add(k),v.innerHTML=c(),S(p),h(p)})}),(L=v.querySelector("#irr-sel-all"))==null||L.addEventListener("click",()=>{const x=e.some(k=>!l.has(k.id));e.forEach(k=>x?l.add(k.id):l.delete(k.id)),v.innerHTML=c(),S(p),h(p)});const y=()=>{const x=r(),k=v.querySelector("#strat-preview");k&&(k.innerHTML=x.length>0?`<span class="irr-preview-ok">↗ ${x.length} irrigations · ${x.length*d} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),h(p)};(f=v.querySelector("#strat-debut"))==null||f.addEventListener("change",x=>{n=x.target.value,y()}),(m=v.querySelector("#strat-fin"))==null||m.addEventListener("change",x=>{i=x.target.value,y()}),(E=v.querySelector("#strat-qty"))==null||E.addEventListener("input",x=>{d=parseInt(x.target.value)||1,y()}),(C=v.querySelector("#strat-freq"))==null||C.addEventListener("input",x=>{u=parseInt(x.target.value)||1,y()})}const o=_e(re(`
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
  `));o.dataset.dirty="true",S(o),h(o),o.querySelector("#strat-back").addEventListener("click",ie),o.querySelector(".irr-save-btn").addEventListener("click",()=>{const p=r();xs(o,e,l,n,i,d,u,p,s,t,a)})}function xs(e,s,t,a,l,n,i,d,u,r,c=null){var C;const h=t.size,S=5;d.length-S;function o(x){const A=x.toISOString().slice(0,10)>=we?"#FFB705":"#FF8500",b=x.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${Je(b)}</span>
      <span style="font-size:13px;font-weight:700;color:${A}">${n} mm</span>
    </div>`}const p=d.filter(x=>x.toISOString().slice(0,10)<we),v=d.filter(x=>x.toISOString().slice(0,10)>=we),y=v.slice(0,S),L=v.slice(S),f=p.length?`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${p.map(o).join("")}`:"",m=v.length?`
    <div class="irr-section-lbl" style="margin-top:${p.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${y.map(o).join("")}
    ${L.length?`
      <div id="apercu-rest" style="display:none">${L.map(o).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${L.length} irrigation${L.length>1?"s":""} de plus</button>
    `:""}`:"",E=_e(re(`
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
          <div class="irr-apercu-sub">${ii(a)} → ${ii(l)} · tous les ${i}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${d.length*n} mm</div>
          <div class="irr-apercu-sub">${h} parcelle${h>1?"s":""} · ${n} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${f}
        ${m}
        ${!p.length&&!v.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));E.dataset.dirty="true",E.querySelector("#apercu-back").addEventListener("click",ie),(C=E.querySelector("#apercu-show-more"))==null||C.addEventListener("click",x=>{E.querySelector("#apercu-rest").style.display="",x.target.remove()}),E.querySelector("#apercu-confirm").addEventListener("click",()=>{const x=r?new Set(r.ids):t;Ci(x,s,()=>{c&&K.splice(0,K.length,...K.filter(g=>!(c.has(g.seasonId)&&g.fromStrategy&&!g.real)));const k=is();d.forEach(g=>{const $=g.toISOString().slice(0,10);x.forEach(M=>{K.push({iso:$,mm:n,real:$<=we,plotId:M,fromStrategy:!0,seasonId:k})})}),Pe();const b=[{title:null,names:[...x].map(g=>{var $;return($=s.find(M=>M.id===g))==null?void 0:$.name}).filter(Boolean)}],w=x.size===1?String([...x][0]):"all";Li(),Ai({title:"Saison enregistrée",params:[{label:"Début",value:Je(a)},{label:"Fin",value:Je(l)},{label:"Quantité",value:`${n} mm/irrig.`},{label:"Fréquence",value:`tous les ${i} jours`},{label:"Irrigations générées",value:`${d.length*x.size}`}],parcelSections:b,isFut:!0,plots:s,calFilter:w,addedCount:d.length*x.size,stackDepth:2})})})}function Ai({title:e,params:s,parcelSections:t=[],isFut:a,plots:l,calFilter:n,addedCount:i=0,stackDepth:d=3}){const u=(s||[]).map(y=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${y.label}</span>
      <span class="irr-confirm-param-val">${y.value}</span>
    </div>`).join(""),r=3,c=t.flatMap(y=>y.names.map(L=>({title:y.title,name:L}))),h=c.slice(0,r),S=c.slice(r);function o(y){const L=[];let f=null;for(const m of y)(!f||f.title!==m.title)&&(f={title:m.title,names:[]},L.push(f)),f.names.push(m.name);return L.map(m=>`
      ${m.title?`<div class="irr-confirm-sec-hd">${m.title}</div>`:""}
      ${m.names.map(E=>`<div class="irr-confirm-parcel">· ${E}</div>`).join("")}
    `).join("")}const p=c.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${o(h)}
      ${S.length?`
        <details class="irr-confirm-more">
          <summary>${S.length} parcelle${S.length>1?"s":""} de plus</summary>
          ${o(S)}
        </details>`:""}
    </div>`,v=_e(re(`
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
  `));v.querySelector("#conf-edit").addEventListener("click",()=>{i>0&&K.splice(K.length-i,i),ie()}),v.querySelector("#conf-back").addEventListener("click",()=>{for(let y=0;y<=d;y++)ie()}),v.querySelector("#conf-calendar").addEventListener("click",()=>{Mi(l,n)})}const $s=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function Mi(e,s){let t=s||"";function a(o){if(!o||o==="all")return null;const p=e.find(v=>String(v.id)===String(o));return p?{ids:[p.id],label:p.name}:null}function l(){return!t||t==="all"?K:K.filter(o=>o.plotId===+t)}function n(o){const p=o.filter(f=>f.real),v=o.filter(f=>!f.real),y=p.reduce((f,m)=>f+m.mm,0),L=v.reduce((f,m)=>f+m.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${y} mm</div>
        <div class="irr-cumul-count">${p.length} irrigation${p.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${L} mm</div>
        <div class="irr-cumul-count">${v.length} irrigation${v.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${y+L} mm</div>
        <div class="irr-cumul-count">${p.length+v.length} irrigations</div>
      </div>
    </div>`}function i(o){if(o.length<2)return"";const p=[...o].sort((U,ve)=>U.iso<ve.iso?-1:1),v=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],y=new Date(p[0].iso),L=new Date(p[p.length-1].iso),f=Math.max(L-y,1),m=300,E=26,C=5,x=5,k=E-x-4,A=k-x-3,b=E+C+13,w=b+2,g=U=>Math.round((U-y)/f*m),$=U=>{const[,ve,fe]=U.split("-");return`${parseInt(fe)}/${parseInt(ve)}`},M=[],T=new Date(y.getFullYear(),y.getMonth()+1,1);for(;T<=L;)M.push(new Date(T)),T.setMonth(T.getMonth()+1);const P=M.map(U=>`<line x1="${g(U)}" y1="${E-6}" x2="${g(U)}" y2="${E+C+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),z=[y,...M,L],ee=z.slice(0,-1).map((U,ve)=>{const fe=g(U),Te=g(z[ve+1]);return Te-fe<16?"":`<text x="${Math.round((fe+Te)/2)}" y="${A}" font-size="8" fill="#B0AEA8" text-anchor="middle">${v[U.getMonth()]}</text>`}).join(""),ce=p.map(U=>{const ve=U.real?"#FF8500":"#FFB705",fe=g(new Date(U.iso)),[,Te,Xe]=U.iso.split("-"),Qe=`${parseInt(Xe)} ${$s[parseInt(Te)-1]} · ${U.mm} mm`;return`<circle cx="${fe}" cy="${k}" r="${x}" fill="${ve}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${fe}" cy="${k}" r="${x+6}" fill="transparent" pointer-events="all"><title>${Qe}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${m}" height="${w}" viewBox="0 0 ${m} ${w}" style="width:100%;display:block">
        ${ee}
        <rect x="0" y="${E}" width="${m}" height="${C}" rx="${C/2}" fill="#E0DED8"/>
        ${P}
        ${ce}
        <text x="1" y="${b}" font-size="9" fill="#B0AEA8">${$(p[0].iso)}</text>
        <text x="${m-1}" y="${b}" font-size="9" fill="#B0AEA8" text-anchor="end">${$(p[p.length-1].iso)}</text>
      </svg>
    </div>`}function d(o,p,v){const y=document.createElement("div");let L=o.iso,f=o.mm;y.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${o.iso}" />
          <div id="edit-date-hint">${St(o.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${o.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,y.querySelector("#edit-date").addEventListener("change",m=>{L=m.target.value,y.querySelector("#edit-date-hint").innerHTML=St(L)}),y.querySelector("#edit-qty").addEventListener("input",m=>{const E=parseInt(m.target.value);E>0&&(f=E)}),Lt({title:o.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée",body:y,saveLabel:"Enregistrer",onSave:()=>{o.iso=L,o.mm=f,o.real=L<=we,Pe(),c(v)},onDelete:()=>{const m=K.indexOf(o);m>-1&&K.splice(m,1),Pe(),c(v)}})}function u(o,p){const v=+o,y=document.createElement("div");let L=!1,f=!1;function m(){return new Set(K.filter(C=>C.plotId===v&&C.fromStrategy&&C.seasonId).map(C=>C.seasonId))}function E(){var C,x,k,A,b,w,g;y.innerHTML=`
        <div class="irr-strat-opt" id="strat-modify">
          <div class="irr-strat-opt-icon" style="background:#E6F1FB">✎</div>
          <div>
            <div class="irr-strat-opt-title">Modifier la saison</div>
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
        ${L?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>`:""}
        ${f?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Supprimer toutes les irrigations de cette saison ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(C=y.querySelector("#strat-modify"))==null||C.addEventListener("click",()=>{var P;(P=document.querySelector(".irr-sheet-overlay"))==null||P.remove();const $=m(),M=e.find(z=>z.id===v),T=M?{ids:[M.id],label:M.name}:null;Ct(e,()=>c(p),T,$)}),(x=y.querySelector("#strat-stop"))==null||x.addEventListener("click",()=>{L=!0,f=!1,E()}),(k=y.querySelector("#strat-delete"))==null||k.addEventListener("click",()=>{f=!0,L=!1,E()}),(A=y.querySelector("#stop-cancel"))==null||A.addEventListener("click",()=>{L=!1,E()}),(b=y.querySelector("#stop-confirm"))==null||b.addEventListener("click",()=>{var M;const $=m();K.splice(0,K.length,...K.filter(T=>!(T.plotId===v&&$.has(T.seasonId)&&!T.real))),Pe(),(M=document.querySelector(".irr-sheet-overlay"))==null||M.remove(),c(p)}),(w=y.querySelector("#delete-cancel"))==null||w.addEventListener("click",()=>{f=!1,E()}),(g=y.querySelector("#delete-confirm"))==null||g.addEventListener("click",()=>{var M;const $=m();K.splice(0,K.length,...K.filter(T=>!(T.plotId===v&&$.has(T.seasonId)))),Pe(),(M=document.querySelector(".irr-sheet-overlay"))==null||M.remove(),c(p)})}E(),Lt({title:"Gérer la saison",body:y,saveLabel:"Fermer",onSave:()=>{}})}function r(o){if(!o.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const p=[...o].filter(L=>!L.real).sort((L,f)=>L.iso<f.iso?-1:1),v=[...o].filter(L=>L.real).sort((L,f)=>L.iso>f.iso?-1:1);function y(L){const f=L.real?"#FF8500":"#FFB705",m=K.indexOf(L);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${Je(L.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${f};white-space:nowrap;margin-right:4px">${L.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${m}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${m}" title="Supprimer">🗑</button>
      </div>`}return`
      ${v.length?`
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${v.length}</span></summary>
          ${v.map(y).join("")}
        </details>`:""}
      ${p.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${p.length}</span></summary>
          ${p.map(y).join("")}
        </details>`:""}
    `}function c(o){var m,E,C;const p=o.querySelector(".irr-cal-body");if(!t){p.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const v={};if(p.querySelectorAll("details[data-section]").forEach(x=>{v[x.dataset.section]=x.open}),t==="all"){const x={};for(const b of K){const w=b.plotId??"unknown";x[w]||(x[w]=[]),x[w].push(b)}const k=Object.keys(x);if(!k.length){p.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const A=k.sort((b,w)=>{var M,T;const g=((M=e.find(P=>String(P.id)===b))==null?void 0:M.name)??b,$=((T=e.find(P=>String(P.id)===w))==null?void 0:T.name)??w;return g.localeCompare($,"fr")});p.innerHTML=A.map(b=>{var M;const w=x[b],g=w.some(T=>T.fromStrategy);return`<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${((M=e.find(T=>String(T.id)===b))==null?void 0:M.name)??b}</div>
          ${n(w)}
          ${i(w)}
          ${g?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-pid="${b}">Modifier la saison ↗</button>
          </div>`:""}
        </div>`}).join(""),p.querySelectorAll("[data-strat-pid]").forEach(b=>{b.addEventListener("click",()=>u(b.dataset.stratPid,o))});return}const y=l(),f=y.some(x=>x.fromStrategy)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`;p.innerHTML=`
      ${n(y)}
      ${i(y)}
      ${f}
      ${r(y)}
    `,p.querySelectorAll("details[data-section]").forEach(x=>{const k=x.dataset.section;k in v&&(x.open=v[k])}),p.querySelectorAll(".irr-edit-btn").forEach(x=>{x.addEventListener("click",k=>{k.stopPropagation();const A=K[+x.dataset.iidx];A&&d(A,y,o)})}),p.querySelectorAll(".irr-del-btn").forEach(x=>{x.addEventListener("click",k=>{k.stopPropagation();const A=+x.dataset.iidx;A>=0&&(K.splice(A,1),Pe(),c(o))})}),(m=p.querySelector("#open-strat-edit"))==null||m.addEventListener("click",()=>{u(t,o)}),(E=p.querySelector("#cal-add-irrig"))==null||E.addEventListener("click",()=>{ki(e,()=>c(o),a(t))}),(C=p.querySelector("#cal-add-strat"))==null||C.addEventListener("click",()=>{Ct(e,()=>c(o),a(t))})}const h=[...e].sort((o,p)=>o.name.localeCompare(p.name,"fr")).map(o=>`<option value="${o.id}"${String(o.id)===String(t)?" selected":""}>${o.name}</option>`).join(""),S=_e(re(`
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
          ${h}
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));S.querySelector("#cal-back").addEventListener("click",ie),S.querySelector("#cal-filter-sel").addEventListener("change",o=>{t=o.target.value,c(S)}),c(S)}const Re=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:rt,checkIcon:Et,flexLayer:_e,openCalendar:Mi,openIrrigationSaisie:ki,openIrrigationStrategie:Ct},Symbol.toStringTag,{value:"Module"})),Ti={admin:100,adherent:1},Ii="weenat-m-dash";function Ue(){try{return JSON.parse(localStorage.getItem(Ii))||{}}catch{return{}}}function si(e){try{localStorage.setItem(Ii,JSON.stringify({...Ue(),...e}))}catch{}}const de=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function Ee(e){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Le({title:e,body:s,doneLabel:t="Fermer",onDone:a}={}){var d;const l=document.getElementById("phone-screen");(d=document.querySelector(".m-sheet-overlay"))==null||d.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,n.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),l.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const i=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",i),n.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),i()}),n.addEventListener("click",u=>{u.target===n&&i()}),n}const ni=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function ai(){return Array.from({length:14},(e,s)=>s).map(e=>{const s=new Date;s.setDate(s.getDate()+e);const t=ni[Math.floor(Math.random()*ni.length)],a=t.label==="Pluie"||t.label==="Averses",l=Math.round(8+Math.random()*8),n=Math.round(16+Math.random()*14),i=Array.from({length:24},(d,u)=>{const r=Math.sin(Math.PI*(u-6)/12),c=Math.round(l+(n-l)*Math.max(0,r)),h=a&&u>=8&&u<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:u,label:`${String(u).padStart(2,"0")}h`,temp:c,pluie:h,hum:Math.round(85-40*Math.max(0,r)),vent:Math.round(10+Math.random()*20),icon:h>0?"bi-cloud-rain-fill":u<7||u>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":s.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:s.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:a?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:l,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:n,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:i}})}function vt(e){const s=e.id,t=e.reserveHydrique||50,a=+((s*2.3+7)%32).toFixed(1),l=+((s*1.1+14)%14+10).toFixed(1),n=+((s*.6+1)%6).toFixed(1),i=Math.round(t*((s%5+1)/10)),d=Math.max(0,+(i+a-l-n).toFixed(0)),u=d<i?i-d:0;return{j0:i,j7:d,bilan:u}}const nt=4,ft=5,li=["#0172A4","#ff8500","#30d158","#bf5af2"],ji={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548"},kt={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol"},ws={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C"},oi={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},Ss=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function qi(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function Es(e,s){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const l=new Set(t);return s.filter(n=>n.parcelIds.includes(+e.slice(2))).forEach(n=>(oi[n.model]||[]).forEach(i=>l.add(i))),[...l].filter(n=>n in kt)}const a=s.find(l=>l.id===+e.slice(2));return a?oi[a.model]||[]:[]}function Ls(e,s){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:s==="1h"?["J-7","J-5","J-3","J-1","Auj."]:s==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:s==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:s==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let $e=[],he=[];(()=>{const e=Ue();if(e.catalog){const s=e.catalog.map(t=>t.id);de.sort((t,a)=>{const l=s.indexOf(t.id),n=s.indexOf(a.id);return(l<0?999:l)-(n<0?999:n)}),e.catalog.forEach(t=>{const a=de.find(l=>l.id===t.id);a&&(a.active=t.active)})}e.mesuresList&&($e=e.mesuresList),e.cumulsList&&(he=e.cumulsList)})();function Cs(e,s,t){const a=[...e+s].reduce((i,d)=>i+d.charCodeAt(0),1),l=i=>(Math.sin(a*.07+i*.5)+Math.sin(a*.03+i*1.3))/2+.5,n={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[s]||{base:40,amp:40};return Array.from({length:t},(i,d)=>n.sparse&&l(d*3.7)>.28?0:Math.max(0,n.base+n.amp*l(d*.28+1.2)))}const ks=new Set(["pluie","etp"]);function As(e,s){var m;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,a=Cs(e.subjectKey,e.metricId,t),l=270,n=100,i=28,d=14,u=Math.max(...a,1),r=ks.has(e.metricId);let c,h="";for(let E=0;E<=2;E++){const C=Math.round(E/2*(n-d-4)+4);h+=`<line x1="${i}" y1="${C}" x2="${i+l}" y2="${C}" stroke="#E8E6E0" stroke-width=".5"/>`,h+=`<text x="${i-3}" y="${C+3}" text-anchor="end" font-size="8" fill="#636366">${+(u*(1-E/2)).toFixed(u<5?1:0)}</text>`}const S=Ls(e.period,e.step),o=S.map((E,C)=>`<text x="${i+Math.round(C/(S.length-1)*l)}" y="${n+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${E}</text>`).join(""),p=JSON.stringify(a.map(E=>+E.toFixed(2))),v=ji[e.metricId]||e.color,y=e.metricId==="pluie"?"#2E75B6":v;if(r){const E=Math.max(1,l/t*.7),C=a.map((x,k)=>{const A=Math.round(x/u*(n-d-4)),b=i+Math.round(k/(t-1)*l)-E/2,w=n-d-A;return`<rect x="${b.toFixed(1)}" y="${w.toFixed(1)}" width="${E.toFixed(1)}" height="${A.toFixed(1)}" fill="${y}" opacity=".85" rx="1"/>`}).join("");c=`<svg viewBox="0 0 ${i+l} ${n+6}" style="width:100%;display:block;overflow:visible">${h}${C}${o}</svg>`}else{const E=a.map((C,x)=>`${i+Math.round(x/(t-1)*l)},${n-d-Math.round(C/u*(n-d-4))}`).join(" ");c=`<svg viewBox="0 0 ${i+l} ${n+6}" style="width:100%;display:block;overflow:visible">
      ${h}
      <polyline points="${E}" fill="none" stroke="${v}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${n}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${o}
    </svg>`}const L=(m=e.subjectKey)!=null&&m.startsWith("s-")?e.subjectKey.slice(2):null,f=L?`<button class="m-wf-view-data" data-sensor-id="${L}" data-period="${e.period}" data-step="${e.step}" style="display:flex;align-items:center;gap:4px;margin-top:8px;padding:6px 10px;border:none;background:rgba(0,122,255,.08);border-radius:8px;color:#007AFF;font-size:12px;font-weight:600;cursor:pointer;width:100%;justify-content:center">Voir les données <i class="bi bi-fullscreen" style="font-size:11px"></i></button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?y:v}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${s}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${p}' style="position:relative;margin-top:4px">
        ${c}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${f}
    </div>`}function ri(e,s){const t=$e.length>=nt,a=e.map(d=>`<option value="p-${d.id}">${d.name}</option>`).join(""),l=s.filter(d=>d.parcelIds.length>0).map(d=>{const u=e.find(r=>d.parcelIds.includes(r.id));return`<option value="s-${d.id}">${d.model} — ${d.serial}${u?` · ${u.name}`:""}</option>`}).join(""),n=qi("7d");return`
    <div id="msr-list">${$e.length?$e.map(As).join(""):'<div class="m-wf-empty">Aucune mesure configurée</div>'}</div>
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
        <optgroup label="Parcelles">${a}</optgroup>
        ${l?`<optgroup label="Capteurs">${l}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period">
          ${Ss.map(d=>`<option value="${d.id}"${d.id==="7d"?" selected":""}>${d.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${n.map(d=>`<option value="${d.id}">${d.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Créer la mesure</button>
    </div>`}`}function Ms(e,s){const t=new Date().toISOString().split("T")[0],a=new Date;a.setDate(a.getDate()+7);const l=a.toISOString().split("T")[0];return K.filter(n=>!n.real&&n.iso>=t&&n.iso<=l&&n.plotId===e.id).reduce((n,i)=>n+i.mm,0)}const di=9;function Ne(e,s=!1,t=Ue().sensorlessEnabled??!0){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const a=[],l=e.slice(),n=(y,L)=>vt(L).bilan-vt(y).bilan,i=[...a.flatMap(y=>y.ids.map(L=>e.find(f=>f.id===L)).filter(Boolean).sort(n)),...l.slice().sort(n)],d=s?i:i.slice(0,di),u=new Set(d.map(y=>y.id)),r=i.length-d.length,c=y=>{const L=G.some(A=>A.parcelIds.includes(y.id)&&(A.model.startsWith("CHP")||A.model.startsWith("CAPA")||A.model.startsWith("EC"))),{j0:f,j7:m,bilan:E}=vt(y),C=Ms(y),x=L?f:'<span style="color:#aeaeb2">—</span>',k=L?m:'<span style="color:#aeaeb2">—</span>';return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${y.id}">${y.name}</button>
      <div class="m-bh-td">${x}</div>
      <div class="m-bh-td">${k}</div>
      ${t?`<div class="m-bh-td m-bh-td--reco">${E>0?E:"—"}</div>`:""}
      <div class="m-bh-td m-bh-td--planif">${C>0?C:"—"}</div>`};let h="";for(const y of a){const L=y.ids.map(f=>e.find(m=>m.id===f)).filter(Boolean).filter(f=>u.has(f.id)).sort(n);L.length&&(h+=`<div class="m-bh-group-row" style="background:rgba(0,0,0,.035)">⬡ ${y.label}</div>`,h+=L.map(c).join(""))}const S=l.filter(y=>u.has(y.id)).sort(n);S.length&&a.length&&(h+='<div class="m-bh-group-row">⬡ Autres parcelles</div>'),h+=S.map(c).join("");const o=t?"1fr 38px 38px 46px 46px":"1fr 38px 38px 46px",p=t?2:1,v=i.length>di?`<button class="m-bh-expand" id="bh-expand" data-expanded="${s}">
        ${s?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${r} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${o}">
        <div class="m-bh-gh"></div>
        <div class="m-bh-gh" style="grid-column:span 2">Niveau RFU</div>
        <div class="m-bh-gh" style="grid-column:span ${p}">Irrigations J+7</div>
        <div class="m-bh-th m-bh-unit-lbl">données en mm</div>
        <div class="m-bh-th">J0</div>
        <div class="m-bh-th">J+7</div>
        ${t?'<div class="m-bh-th">Reco.</div>':""}
        <div class="m-bh-th">Planif.</div>
        ${h}
      </div>
    </div>
    ${v}
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
    </div>`}const ht=(e,s=40)=>e.length>s?e.slice(0,s-1)+"…":e;function Ts(e,s,t,a){const l=Object.fromEntries(ne.map(p=>[p.id,p])),n=e.map(p=>{var L;const v=p.ville||((L=l[p.orgId])==null?void 0:L.ville)||null,y=ht([p.name,p.crop||null,v].filter(Boolean).join(" · "));return`<option value="p-${p.id}">${y}</option>`}).join(""),i=s.map(p=>{var L,f;const v=((L=p.parcelIds.map(m=>e.find(E=>E.id===m)).filter(Boolean).find(m=>m.ville))==null?void 0:L.ville)||((f=l[p.orgId])==null?void 0:f.ville)||"",y=ht(`${p.serial}${v?` — ${v}`:""}`);return`<option value="s-${p.id}">${y}</option>`}).join(""),d=`
    <optgroup label="Parcelles">${n}</optgroup>
    ${i?`<optgroup label="Capteurs">${i}</optgroup>`:""}`,u=(p,v)=>{const y=`${p.dayLabel.charAt(0).toUpperCase()+p.dayLabel.slice(1)} · ${p.dateStr}`;return`
    <div class="m-prev-card" data-day="${v}" role="button">
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
    </div>`},r=t.slice(0,3).map(u).join(""),c=t.slice(3).map(u).join(""),h=ne.find(p=>p.id===(a==="admin"?100:1)),S=(h==null?void 0:h.adresse)||"";return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${S?`<option value="addr">${ht(`${h.name} — ${h.ville||S}`)}</option>`:""}${d}</select>
    <div class="m-prev-cards">
      ${r}
      <div class="m-prev-extra" style="display:none">${c}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Ce=[{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:["P+","PT","SMV"]},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:["PYRANO"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],Pi=new Set(Ce.flatMap(e=>e.needsModels||[]));function bt(e){if(!e)return Ce;if(e.startsWith("s-")){const t=G.find(a=>a.id===+e.slice(2));return t?Ce.filter(a=>a.needsModels===null||a.needsModels.includes(t.model)):Ce}const s=new Set(G.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Ce.filter(t=>t.needsModels===null||t.needsModels.some(a=>s.has(a)))}const ci={pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#FEE7B4"},etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function Is(){return he.length?he.map((e,s)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
      <button class="m-cumuls-del" data-cidx="${s}" type="button" title="Supprimer">×</button>
      <div class="m-cumuls-saved-row1">
        <span class="m-cumuls-saved-metric"><i class="bi ${e.icon}" style="color:${e.color}"></i> ${e.metricLabel}</span>
        <span class="m-cumuls-saved-val">${e.value} <span class="m-cumuls-saved-unit">${e.unit}</span></span>
      </div>
      <div class="m-cumuls-saved-row2">${e.subjectLabel}</div>
      <div class="m-cumuls-saved-row3">
        <span>depuis le ${e.fromDate}${t}</span>
        <button class="m-cumuls-edit" data-cidx="${s}" type="button" title="Modifier"><i class="bi bi-pencil"></i> Modifier</button>
      </div>
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function ui(e,s,t){if(!e||!s)return null;const a=Ce.find(i=>i.id===t)||Ce[0],l=Math.max(1,Math.round((Date.now()-new Date(s))/864e5)),n=e.split("").reduce((i,d)=>i+d.charCodeAt(0),0)+l;return+(a.base+n%(a.amp*10)/10).toFixed(1)}function pi(e,s){const t=he.length>=ft,a=`${new Date().getFullYear()}-01-01`,l=s.filter(c=>c.parcelIds.length>0&&Pi.has(c.model)),n=new Set(l.flatMap(c=>c.parcelIds)),d=e.filter(c=>n.has(c.id)).map(c=>`<option value="p-${c.id}">${c.name}</option>`).join(""),u=l.map(c=>{const h=e.find(S=>c.parcelIds.includes(S.id));return`<option value="s-${c.id}">${c.model} — ${c.serial}${h?` · ${h.name}`:""}</option>`}).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${he.length?Is():'<div class="m-wf-empty">Aucun cumul enregistré</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${he.length?"16px":"0"}">Ajouter un cumul</div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${ft}/${ft})</div>
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
          <input type="date" class="m-wf-date" id="cumuls-from" value="${a}">
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Créer le cumul</button>
    </div>`}`}const js={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function qs(e){const s=e.id,t=new Date,a=js[e.crop]||["—"],l=a[s%a.length];let n,i;s%5===3?(n=0,i=(t.getHours()+2+s%3*3)%24):(n=(s*2+1)%6+1,i=6+s%5*2);const d=2+s%3,u=new Date(t);u.setDate(u.getDate()+n);const r=n===0?"Aujourd'hui":u.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),c=n*1440+i*60-(t.getHours()*60+t.getMinutes()),h=c>=0&&c<=600;return{product:l,winDateStr:r,winHour:i,winDur:d,isUrgent:h,minutesFromNow:c}}const Ps="#1a9e40";function Ds(e){const t=e.filter(l=>l.crop).map(l=>({p:l,d:qs(l)})).filter(({d:l})=>l.minutesFromNow>=0&&l.minutesFromNow<=1440).sort((l,n)=>l.d.minutesFromNow-n.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:l,d:n})=>{const i=String(n.winHour).padStart(2,"0"),d=String((n.winHour+n.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${l.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${l.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${l.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${Ps};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
            <i class="bi bi-check2-circle" style="font-size:12px"></i>
            ${n.winDateStr} · ${i}h–${d}h
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const Di="weenat-m-traitements";function Ge(){try{return JSON.parse(localStorage.getItem(Di))||[]}catch{return[]}}function Pt(e){localStorage.setItem(Di,JSON.stringify(e))}function Hs(e,s){let t=new Set;const a=[],l=new Date().toISOString().split("T")[0];function n(){return rt(a,e,t)}function i(r){const c=t.size,h=r.querySelector(".irr-summary"),S=r.querySelector(".irr-save-btn");!h||!S||(h.textContent=c===0?"":`${c} parcelle${c>1?"s":""}`,S.disabled=c===0)}function d(r){r.querySelectorAll(".irr-group-card").forEach(c=>{c.addEventListener("click",()=>{const h=c.dataset.gids.split(",").map(Number),S=h.every(o=>t.has(o));h.forEach(o=>S?t.delete(o):t.add(o)),r.querySelector("#trait-sel-list").innerHTML=n(),d(r),i(r)})}),r.querySelectorAll(".irr-plot-row").forEach(c=>{c.addEventListener("click",()=>{const h=+c.dataset.pid;t.has(h)?t.delete(h):t.add(h),r.querySelector("#trait-sel-list").innerHTML=n(),d(r),i(r)})})}const u=_e(re(`
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
  `));d(u),i(u),u.querySelector("#trait-back").addEventListener("click",ie),u.querySelector(".irr-save-btn").addEventListener("click",()=>{const r=u.querySelector("#trait-date").value||l,c=u.querySelector("#trait-produit").value.trim()||"—",h=u.querySelector("#trait-dose").value.trim()||"—",S=Ge();S.unshift({id:Date.now(),date:r,produit:c,dose:h,plotIds:[...t]}),Pt(S),ie(),s("Traitement enregistré")})}function zs(e,s,t){const a=s==="adherent"?Ti.adherent:null,l=a!==null?W.filter(r=>r.orgId===a):W;let n=null;const i=re(`
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
    </div>`);i.querySelector(".m-detail-back").addEventListener("click",ie);const d=r=>{const[c,h,S]=r.split("-");return`${S}/${h}/${c}`};function u(){const r=i.querySelector("#trait-cal-content");let c=Ge();if(n!==null&&(c=c.filter(h=>(h.plotIds||[]).includes(n))),!c.length){r.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}r.innerHTML=c.map(h=>{const S=(h.plotIds||[]).map(o=>{var p;return(p=e.find(v=>v.id===o))==null?void 0:p.name}).filter(Boolean);return`
        <div class="m-trait-cal-card" data-id="${h.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${d(h.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${S.length} parcelle${S.length>1?"s":""}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${h.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${h.dose}</div>
          ${S.length?`<div style="font-size:11px;color:#8e8e93;margin-top:6px">${S.join(", ")}</div>`:""}
        </div>`}).join(""),r.querySelectorAll(".m-trait-cal-card").forEach(h=>{h.addEventListener("click",()=>{const S=+h.dataset.id,p=Ge().find(f=>f.id===S);if(!p)return;const v=(p.plotIds||[]).map(f=>{var m;return(m=e.find(E=>E.id===f))==null?void 0:m.name}).filter(Boolean),y=document.createElement("div");y.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${d(p.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${p.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${p.dose}</div>
            ${v.length?`<div style="font-size:12px;color:#8e8e93">${v.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const L=Le({title:"Traitement",body:y,doneLabel:"Fermer",onDone:()=>{}});y.querySelector("#tcal-del").addEventListener("click",()=>{const f=Ge().filter(m=>m.id!==S);Pt(f),L.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{L.remove(),u()},280),t("Traitement supprimé")}),y.querySelector("#tcal-edit").addEventListener("click",()=>{L.classList.remove("m-sheet-overlay--show"),setTimeout(()=>L.remove(),280),_s(p,e,t,u)})})})}i.querySelector("#trait-filter").addEventListener("change",r=>{n=r.target.value?+r.target.value:null,u()}),u()}function _s(e,s,t,a){const l=document.createElement("div");l.innerHTML=`
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
    </div>`,Le({title:"Modifier le traitement",body:l,doneLabel:"Enregistrer",onDone:()=>{const n=Ge(),i=n.findIndex(d=>d.id===e.id);i!==-1&&(n[i].date=l.querySelector("#tedit-date").value||e.date,n[i].produit=l.querySelector("#tedit-produit").value.trim()||e.produit,n[i].dose=l.querySelector("#tedit-dose").value.trim()||e.dose,Pt(n)),t("Traitement modifié"),a()}})}const Bs={"capteur couché":{icon:"bi-arrow-down-circle-fill",color:"#ff9f0a"},"émissions interrompues":{icon:"bi-wifi-off",color:"#ff3b30"},"capteur déplacé":{icon:"bi-geo-alt-fill",color:"#ff9f0a"},"cuillère bloquée":{icon:"bi-x-octagon-fill",color:"#ff3b30"}};function Fs(e,s){const t=s.filter(a=>a.event&&(Array.isArray(a.event)?a.event.length>0:!0));return t.length?`<div class="m-w-list">${t.map(a=>{const l=e.find(d=>a.parcelIds.includes(d.id)),i=(Array.isArray(a.event)?a.event:[a.event]).map(d=>{const u=Bs[d]||{icon:"bi-exclamation-circle-fill",color:"#ff9f0a"};return`<span class="m-ev-badge" style="color:${u.color}"><i class="bi ${u.icon}"></i> ${d}</span>`}).join("");return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${a.id}" style="flex-direction:column;align-items:flex-start;gap:4px">
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
        <div class="m-w-row-name">${a.model} — ${a.serial}</div>
        <div style="display:flex;align-items:center;gap:5px">
          <span style="font-size:11px;color:#8e8e93">${(l==null?void 0:l.ville)||(l==null?void 0:l.name)||"—"}</span>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px">${i}</div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const Hi={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},Os={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Rs(e){const s=e.id,t=Hi[e.crop]||Os,a=s%t.stages.length,l=(s*2+5)%18+4,n=new Date("2026-04-18");n.setDate(n.getDate()+l);const i=n.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[a],nextStage:t.nextStages[a],variety:t.varieties[s%t.varieties.length],nextDateStr:i,daysToNext:l}}function Ns(e){const s=e.filter(l=>l.crop);if(!s.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const l of s)t[l.crop]||(t[l.crop]=[]),t[l.crop].push(l);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([l,n])=>{const i=n.map(d=>{const u=!!Hi[d.crop],r=u?Rs(d):null,c=u&&r.variety!=="—"?r.variety:"",h=u?r.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${d.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${d.name}</div>
          ${c?`<div class="m-w-row-sub">${c}</div>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${h}</div>
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
      <div class="m-crop-plots">${i}</div>
    </details>`}).join("")}`}const zi="weenat-m-notes";function je(){try{return JSON.parse(localStorage.getItem(zi))||[]}catch{return[]}}function gt(e){localStorage.setItem(zi,JSON.stringify(e))}function mi(e){const s=je(),t=f=>{const[m,E,C]=f.split("-");return`${C}/${E}/${m}`},a=f=>f.length>70?f.slice(0,70)+"…":f,l=(f,m)=>{const E=f.text.length>70,C=(f.imageIds||[]).length,x=C>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${C} photo${C>1?"s":""}</span>`:"",k=f.linkedType?`<span style="font-size:10px;background:${f.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${f.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${f.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${f.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${m}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${E||C>0||f.linkedType?"pointer":"default"}">
        <button class="m-note-del" data-idx="${m}" style="position:absolute;top:8px;right:8px;border:none;background:rgba(0,0,0,.08);border-radius:50%;width:22px;height:22px;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#636366">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center">
          <span>${t(f.date)}${f.time?" · "+f.time:""}</span>
          ${f.auteur?`<span style="color:#636366;font-weight:500">${f.auteur}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${a(f.text)}</div>
        ${k||x?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${k}${x}</div>`:""}
      </div>`},n=s.slice(0,5),i=n.length?n.map((f,m)=>l(f,m)).join(""):"",d=new Date,u=d.toISOString().slice(0,10),r=`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`,c=ne.find(f=>f.id===(e==="admin"?100:1)),h=c?`${c.prenomProprietaire} ${c.nomProprietaire}`:"",S=c==null?void 0:c.id,o=e==="adherent"?W.filter(f=>f.orgId===S):W,p=e==="adherent"?G.filter(f=>f.parcelIds.some(m=>o.some(E=>E.id===m))):G,v=o.map(f=>`<option value="p-${f.id}">${f.name}</option>`).join(""),y=p.map(f=>{var E;const m=((E=f.parcelIds.map(C=>W.find(x=>x.id===C)).filter(Boolean).find(C=>C.ville))==null?void 0:E.ville)||"";return`<option value="s-${f.id}">${f.serial}${m?" — "+m:""}</option>`}).join(""),L="width:100%;box-sizing:border-box;font-size:13px;padding:7px 9px;border:1px solid rgba(0,0,0,.12);border-radius:6px;font-family:inherit;background:#fafafa";return`
    ${i?`<div id="notes-list" style="margin-bottom:12px">${i}</div>`:""}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <select id="notes-link" style="${L};margin-bottom:6px;color:#1c1c1e">
      <option value="">— Sans lien —</option>
      <optgroup label="Parcelles">${v}</optgroup>
      <optgroup label="Capteurs">${y}</optgroup>
    </select>
    <textarea id="notes-input" placeholder="Votre note…" rows="2"
      style="${L};resize:none;margin-bottom:6px"></textarea>
    <div style="display:flex;gap:6px;margin-bottom:6px">
      <input type="date" id="notes-date" value="${u}" style="${L}">
      <input type="time" id="notes-time" value="${r}" style="${L}">
    </div>
    <div class="jrn-img-zone" style="margin-bottom:8px">
      <div class="jrn-img-previews" id="notes-previews"></div>
      <button type="button" class="jrn-img-add-btn" id="notes-img-btn"><i class="bi bi-camera"></i> Ajouter une photo</button>
      <input type="file" id="notes-img-input" accept="image/*" multiple style="display:none">
      <div class="jrn-img-error" id="notes-img-error"></div>
    </div>
    <input type="hidden" id="notes-auteur" value="${h}">
    <button id="notes-add" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:8px;padding:9px 16px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;margin-bottom:6px">Ajouter la note</button>
    <button id="notes-view" style="width:100%;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:8px;padding:9px 16px;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer">Voir les notes${s.length?` (${s.length})`:""}</button>`}function Vs(e){const s=W.map(l=>l.orgId).filter((l,n,i)=>i.indexOf(l)===n&&l!==100).length,t=G.length,a=W.length;return`
    <div class="m-reseau-name">${xe.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${a}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${s}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${xe.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${xe.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${xe.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${xe.siege.adresse}, ${xe.siege.codePostal} ${xe.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function Ws(){return`
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
    </a>`}const vi=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Js(){var r;const e=document.getElementById("phone-screen");(r=document.querySelector(".m-sheet-overlay"))==null||r.remove();const s=document.createElement("div");s.className="m-sheet-overlay m-sheet-overlay--tall",s.innerHTML=`
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
    </div>`,e.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const t=s.querySelector("#chat-messages"),a=s.querySelector("#chat-input"),l=s.querySelector("#chat-send"),n=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#chat-close").addEventListener("click",n),s.addEventListener("click",c=>{c.target===s&&n()});function i(c,h){const S=document.createElement("div");S.className=`m-chat-msg m-chat-msg--${h}`,S.innerHTML=`<div class="m-chat-bubble">${c}</div>`,t.appendChild(S),t.scrollTop=t.scrollHeight}function d(){const c=document.createElement("div");return c.className="m-chat-msg m-chat-msg--bot m-chat-typing",c.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(c),t.scrollTop=t.scrollHeight,c}function u(){const c=a.value.trim();if(!c)return;i(c,"user"),a.value="",l.disabled=!0;const h=d();setTimeout(()=>{h.remove();const S=vi[Math.floor(Math.random()*vi.length)];i(S,"bot"),l.disabled=!1,a.focus()},1200+Math.random()*800)}l.addEventListener("click",u),a.addEventListener("keydown",c=>{c.key==="Enter"&&u()}),setTimeout(()=>a.focus(),350)}function Gs(e,s){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const a=Ti[s]||1,l=a===100?W:W.filter(b=>b.orgId===a),n=new Set(l.map(b=>b.id)),i=G.filter(b=>b.parcelIds.some(w=>n.has(w)));let d=ai(),u=null;function r(){return s!=="admin"?l:u===null?W:W.filter(b=>b.orgId===u)}function c(){return s!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${ne.filter(w=>w.id!==100).sort((w,g)=>w.name.localeCompare(g.name)).map(w=>`<option value="${w.id}">${w.name}</option>`).join("")}
    </select>`}const h=Ue(),S=new Set(["mon_reseau","support"]),o=new Set(h.collapsed??de.map(b=>b.id).filter(b=>!S.has(b)));function p(){si({catalog:de.map(b=>({id:b.id,active:b.active})),collapsed:[...o],mesuresList:$e,cumulsList:he})}function v(b,w){const g=b.fixed?"":`<button class="m-widget-menu" data-widget="${b.id}" type="button">•••</button>`,$=o.has(b.id);return`
      <div class="m-widget${$?" m-widget--collapsed":""}" data-widget="${b.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${b.id}">
          <div class="m-widget-icon-wrap" style="background:${b.color}20;color:${b.color}">
            <i class="bi ${b.icon}"></i>
          </div>
          <span class="m-widget-title">${b.title}</span>
          <i class="bi ${$?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${b.fixed?"0":"8px"}"></i>
          ${g}
        </div>
        <div class="m-widget-bd" style="${$?"display:none":""}">${w}</div>
      </div>`}function y(){d=ai();const b=de.filter(g=>g.active&&!g.fixed),w=de.filter(g=>g.active&&g.fixed);t.innerHTML=`
      <button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${[...b,...w].map(g=>{let $="";return g.id==="bilan_hydrique"?$=c()+Ne(r()):g.id==="previsions"?$=Ts(l,i,d,s):g.id==="cumuls"?$=pi(l,i):g.id==="temps_reel"?$=ri(l,i):g.id==="traitements"?$=Ds(l):g.id==="evenements"?$=Fs(l,i):g.id==="cultures"?$=Ns(l):g.id==="notes"?$=mi(s):g.id==="mon_reseau"?$=Vs(s):g.id==="support"&&($=Ws()),v(g,$)}).join("")}
      <div style="height:24px"></div>`,C()}const L='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function f(b,w){const g=b[w],$=`${g.dayLabel.charAt(0).toUpperCase()+g.dayLabel.slice(1)} · ${g.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${L}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${w===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${g.icon}" style="color:${g.color};font-size:22px"></i><span class="m-d-name">${$}</span></div>
          <button class="m-day-nav" id="next-day" ${w>=b.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${g.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${g.tMin} / ${g.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${g.ventMoy}/${g.ventRafales}</strong></div>
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
            ${g.hours.map((M,T)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${T<g.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${M.label}</span>
                <i class="bi ${M.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${M.pluie>0?`${M.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${M.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${M.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${M.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function m(b,w,g){var $,M;b.querySelector(".m-detail-back").addEventListener("click",ie),($=b.querySelector("#prev-day"))==null||$.addEventListener("click",()=>{b.innerHTML=f(w,g-1),m(b,w,g-1)}),(M=b.querySelector("#next-day"))==null||M.addEventListener("click",()=>{b.innerHTML=f(w,g+1),m(b,w,g+1)})}function E(b,w){const g=re(f(b,w));m(g,b,w)}function C(){var Te,Xe,Qe,Ft,Ot;(Te=e.querySelector(".m-navbar-action"))==null||Te.addEventListener("click",k),(Xe=t.querySelector("#dash-add-widget-btn"))==null||Xe.addEventListener("click",A),t.querySelectorAll(".m-widget-hd--toggle").forEach(q=>{q.addEventListener("click",F=>{if(F.target.closest(".m-widget-menu"))return;const _=q.dataset.collapse;o.has(_)?o.delete(_):o.add(_),p(),y()})}),(Qe=t.querySelector("#trait-btn-saisir"))==null||Qe.addEventListener("click",()=>{Hs(l,Ee)}),(Ft=t.querySelector("#trait-btn-voir"))==null||Ft.addEventListener("click",()=>{zs(l,s,Ee)}),t.querySelectorAll(".m-trait-card").forEach(q=>{q.addEventListener("click",()=>{const F=W.find(_=>_.id===+q.dataset.plotId);if(F){const _=G.filter(R=>R.parcelIds.includes(F.id)).map(R=>R.id);me(()=>Promise.resolve().then(()=>yt),void 0).then(R=>R.initParcelDetail(F,_,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(q=>{q.addEventListener("click",()=>{const F=i.find(_=>_.id===+q.dataset.sensorId);F&&me(()=>Promise.resolve().then(()=>yi),void 0).then(_=>_.initSensorDetail(F,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(q=>{q.addEventListener("click",()=>{const F=W.find(_=>_.id===+q.dataset.plotId);if(F){const _=G.filter(R=>R.parcelIds.includes(F.id)).map(R=>R.id);me(()=>Promise.resolve().then(()=>yt),void 0).then(R=>R.initParcelDetail(F,_,"params","Tableau de bord"))}})});function b(){t.querySelectorAll(".m-bh-plot-link").forEach(q=>{q.addEventListener("click",()=>{const F=W.find(_=>_.id===+q.dataset.plotId);if(F){const _=G.filter(R=>R.parcelIds.includes(F.id)).map(R=>R.id);me(()=>Promise.resolve().then(()=>yt),void 0).then(R=>R.initParcelDetail(F,_,"widgets","Tableau de bord"))}})})}function w(){var q,F,_;(q=t.querySelector("#bh-btn-calendar"))==null||q.addEventListener("click",()=>{me(()=>Promise.resolve().then(()=>Re),void 0).then(R=>R.openCalendar(l,""))}),(F=t.querySelector("#bh-btn-irrigation"))==null||F.addEventListener("click",()=>{me(()=>Promise.resolve().then(()=>Re),void 0).then(R=>R.openIrrigationSaisie(l,Ee))}),(_=t.querySelector("#bh-btn-strategie"))==null||_.addEventListener("click",()=>{me(()=>Promise.resolve().then(()=>Re),void 0).then(R=>R.openIrrigationStrategie(l,Ee))})}function g(){const q=t.querySelector("#bh-expand");q&&q.addEventListener("click",()=>{const F=q.dataset.expanded==="true",_=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');_&&(_.innerHTML=c()+Ne(r(),!F),b(),w(),g(),s==="admin"&&$())})}function $(){const q=t.querySelector("#bh-org-select");q&&(q.value=u===null?"all":String(u),q.addEventListener("change",()=>{u=q.value==="all"?null:+q.value;const F=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');F&&(F.innerHTML=c()+Ne(r()),b(),w(),g(),$())}))}b(),w(),g(),s==="admin"&&$();function M(){const q=t.querySelector('[data-widget="cumuls"] .m-widget-bd');q&&(q.innerHTML=pi(l,i),T())}function T(){var ue,ae,X,O;const q=()=>{var H;const I=(H=t.querySelector("#cumuls-metric"))==null?void 0:H.value,j=t.querySelector("#cumuls-thresholds");j&&(I==="hf"?j.innerHTML=`
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
            </div>`:j.innerHTML="")},F=()=>{var D;const I=t.querySelector("#cumuls-metric"),j=(D=t.querySelector("#cumuls-subject"))==null?void 0:D.value;if(!I)return;const H=bt(j);I.innerHTML='<option value="">— Métrique —</option>'+H.map(J=>`<option value="${J.id}">${J.label}</option>`).join(""),I.disabled=!j||!H.length,q(),_()},_=()=>{var Q,Z,le;const I=t.querySelector("#cumuls-create"),j=t.querySelector("#cumuls-date-err"),H=(Q=t.querySelector("#cumuls-subject"))==null?void 0:Q.value,D=(Z=t.querySelector("#cumuls-from"))==null?void 0:Z.value,J=(le=t.querySelector("#cumuls-metric"))==null?void 0:le.value,B=D?(Date.now()-new Date(D))/864e5>365:!1;j&&(j.style.display=B?"":"none"),I&&(I.disabled=!H||!D||!J||B)};(ue=t.querySelector("#cumuls-subject"))==null||ue.addEventListener("change",()=>{F(),_()}),(ae=t.querySelector("#cumuls-from"))==null||ae.addEventListener("change",_),(X=t.querySelector("#cumuls-metric"))==null||X.addEventListener("change",()=>{q(),_()}),(O=t.querySelector("#cumuls-create"))==null||O.addEventListener("click",()=>{var Z,le,Y,V,te,se;const I=t.querySelector("#cumuls-subject"),j=I==null?void 0:I.value,H=(Z=t.querySelector("#cumuls-from"))==null?void 0:Z.value,D=(le=t.querySelector("#cumuls-metric"))==null?void 0:le.value;if(!j||!H||!D)return;const J=Ce.find(Ae=>Ae.id===D),B=ci[D]||{icon:"bi-bar-chart-fill",color:"#636366"},Q=D==="hf"?{cold:+(((Y=t.querySelector("#cumuls-th-cold"))==null?void 0:Y.value)??7.2)}:D==="dj"?{low:+(((V=t.querySelector("#cumuls-th-low"))==null?void 0:V.value)??0),high:+(((te=t.querySelector("#cumuls-th-high"))==null?void 0:te.value)??18)}:null;he.push({metricId:D,metricLabel:(J==null?void 0:J.label)||D,unit:(J==null?void 0:J.unit)||"",icon:B.icon,color:B.color,subjectKey:j,subjectLabel:(((se=I.options[I.selectedIndex])==null?void 0:se.text)||j).trim(),fromDate:H,value:String(ui(j,H,D)??"—"),thresholds:Q}),p(),M()}),t.querySelectorAll(".m-cumuls-del").forEach(I=>{I.addEventListener("click",()=>{he.splice(+I.dataset.cidx,1),p(),M()})}),t.querySelectorAll(".m-cumuls-edit").forEach(I=>{I.addEventListener("click",()=>ye(+I.dataset.cidx))});function R(I,j={}){return I==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${j.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:I==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${j.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${j.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function ye(I){const j=he[I];if(!j)return;const H=i.filter(V=>V.parcelIds.length>0&&Pi.has(V.model)),D=new Set(H.flatMap(V=>V.parcelIds)),B=l.filter(V=>D.has(V.id)).map(V=>`<option value="p-${V.id}"${j.subjectKey===`p-${V.id}`?" selected":""}>${V.name}</option>`).join(""),Q=H.map(V=>{const te=l.find(se=>V.parcelIds.includes(se.id));return`<option value="s-${V.id}"${j.subjectKey===`s-${V.id}`?" selected":""}>${V.model} — ${V.serial}${te?` · ${te.name}`:""}</option>`}).join(""),le=bt(j.subjectKey).map(V=>`<option value="${V.id}"${j.metricId===V.id?" selected":""}>${V.label}</option>`).join(""),Y=document.createElement("div");Y.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",Y.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${B}</optgroup>
            ${Q?`<optgroup label="Capteurs">${Q}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${le}
          </select>
          <div id="cedit-thresholds">${R(j.metricId,j.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${j.fromDate}">
          </div>`,Y.querySelector("#cedit-subject").addEventListener("change",()=>{const V=Y.querySelector("#cedit-subject").value,te=Y.querySelector("#cedit-metric"),se=bt(V);te.innerHTML='<option value="">— Métrique —</option>'+se.map(Ae=>`<option value="${Ae.id}">${Ae.label}</option>`).join(""),Y.querySelector("#cedit-thresholds").innerHTML=""}),Y.querySelector("#cedit-metric").addEventListener("change",()=>{Y.querySelector("#cedit-thresholds").innerHTML=R(Y.querySelector("#cedit-metric").value)}),Le({title:"Modifier le cumul",body:Y,doneLabel:"Enregistrer",onDone:()=>{var Nt,Vt,Wt,Jt;const V=Y.querySelector("#cedit-subject").value||j.subjectKey,te=Y.querySelector("#cedit-metric").value||j.metricId,se=Y.querySelector("#cedit-from").value||j.fromDate;if(!V||!te||!se)return;if((Date.now()-new Date(se))/864e5>365){Ee("Date trop ancienne (max 365 jours)");return}const pe=Ce.find(es=>es.id===te),Ie=ci[te]||{icon:"bi-bar-chart-fill",color:"#636366"},Rt=Y.querySelector("#cedit-subject"),Qi=te==="hf"?{cold:+(((Nt=Y.querySelector("#cedit-th-cold"))==null?void 0:Nt.value)??7.2)}:te==="dj"?{low:+(((Vt=Y.querySelector("#cedit-th-low"))==null?void 0:Vt.value)??0),high:+(((Wt=Y.querySelector("#cedit-th-high"))==null?void 0:Wt.value)??18)}:null;he[I]={...j,metricId:te,metricLabel:(pe==null?void 0:pe.label)||te,unit:(pe==null?void 0:pe.unit)||"",icon:Ie.icon,color:Ie.color,subjectKey:V,subjectLabel:(((Jt=Rt.options[Rt.selectedIndex])==null?void 0:Jt.text)||V).trim(),fromDate:se,value:String(ui(V,se,te)??"—"),thresholds:Qi},p(),M()}})}}T(),(Ot=t.querySelector("#open-chat-btn"))==null||Ot.addEventListener("click",Js);function P(){const q=t.querySelector('[data-widget="notes"] .m-widget-bd');q&&(q.innerHTML=mi(s),ee())}let z=[];function ee(){var ue,ae;z=[];const q=t.querySelector("#notes-img-input"),F=t.querySelector("#notes-img-btn"),_=t.querySelector("#notes-previews"),R=t.querySelector("#notes-img-error");q&&F&&_&&window.setupImgUpload&&window.setupImgUpload(q,F,_,R,z),(ue=t.querySelector("#notes-add"))==null||ue.addEventListener("click",async()=>{var le,Y,V,te,se,Ae;const X=(le=t.querySelector("#notes-input"))==null?void 0:le.value.trim(),O=((Y=t.querySelector("#notes-date"))==null?void 0:Y.value)||new Date().toISOString().slice(0,10),I=((V=t.querySelector("#notes-time"))==null?void 0:V.value)||"",j=((te=t.querySelector("#notes-auteur"))==null?void 0:te.value)||"";if(!X)return;const H=((se=t.querySelector("#notes-link"))==null?void 0:se.value)||"";let D=null,J=null,B="";if(H.startsWith("p-"))D="parcel",J=+H.slice(2),B=((Ae=W.find(pe=>pe.id===J))==null?void 0:Ae.name)||"";else if(H.startsWith("s-")){D="sensor",J=+H.slice(2);const pe=G.find(Ie=>Ie.id===J);B=pe?pe.serial:""}const Q=[];if(z.length&&window.ImageStore)for(const pe of z){const Ie=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(Ie,pe),Q.push(Ie)}const Z=je();Z.unshift({date:O,time:I,text:X,auteur:j,imageIds:Q,linkedType:D,linkedId:J,linkedName:B}),gt(Z),t.querySelector("#notes-input").value="",P()}),(ae=t.querySelector("#notes-view"))==null||ae.addEventListener("click",()=>{const X=H=>{const[D,J,B]=H.split("-");return`${B}/${J}/${D}`},O=H=>H.length>70?H.slice(0,70)+"…":H,I=document.createElement("div");function j(){const H=je();if(!H.length){I.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}I.innerHTML=H.map((D,J)=>{const B=(D.imageIds||[]).length,Q=D.linkedType?`<span style="font-size:10px;background:${D.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${D.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${D.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${D.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${J}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del" data-idx="${J}" style="position:absolute;top:8px;right:8px;border:none;background:rgba(0,0,0,.08);border-radius:50%;width:22px;height:22px;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#636366">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${X(D.date)}${D.time?" · "+D.time:""}</span>
                  ${D.auteur?`<span style="color:#636366;font-weight:500">${D.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${O(D.text)}</div>
                ${Q||B>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${Q}${B>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${B} photo${B>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),I.querySelectorAll(".m-note-del").forEach(D=>{D.addEventListener("click",async J=>{var le;J.stopPropagation();const B=je(),Q=+D.dataset.idx,Z=B[Q];(le=Z==null?void 0:Z.imageIds)!=null&&le.length&&window.ImageStore&&await window.ImageStore.remove(Z.imageIds),B.splice(Q,1),gt(B),j(),P()})}),I.querySelectorAll(".m-note-card").forEach(D=>{D.addEventListener("click",async()=>{const B=je()[+D.dataset.idx];if(!B)return;const Q=B.linkedType?`<span style="font-size:11px;background:${B.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${B.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${B.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${B.linkedName||""}</span>`:"",Z=document.createElement("div");if(Z.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${X(B.date)}${B.time?" · "+B.time:""}</span>
                  ${B.auteur?`<span style="color:#636366;font-weight:500">${B.auteur}</span>`:""}
                  ${Q}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${B.text}</div>
                ${(B.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Le({title:"Note",body:Z,doneLabel:"Fermer",onDone:()=>{}}),(B.imageIds||[]).length&&window.ImageStore){const le=Z.querySelector("#note-detail-photos");for(const Y of B.imageIds){const V=await window.ImageStore.get(Y);if(!V)continue;const te=document.createElement("div");te.className="jrn-img-thumb-wrap";const se=document.createElement("img");se.className="jrn-img-thumb",se.src=V,se.alt="",se.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(V)}),te.appendChild(se),le.appendChild(te)}}})})}j(),Le({title:"Notes",body:I,doneLabel:"Fermer",onDone:()=>{}})});const ye=X=>{const[O,I,j]=X.split("-");return`${j}/${I}/${O}`};t.querySelectorAll("#notes-list .m-note-del").forEach(X=>{X.addEventListener("click",async O=>{var D;O.stopPropagation();const I=je(),j=+X.dataset.idx,H=I[j];(D=H==null?void 0:H.imageIds)!=null&&D.length&&window.ImageStore&&await window.ImageStore.remove(H.imageIds),I.splice(j,1),gt(I),P()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(X=>{X.addEventListener("click",async()=>{const I=je()[+X.dataset.idx];if(!I)return;const j=I.linkedType?`<span style="font-size:11px;background:${I.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${I.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${I.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${I.linkedName||""}</span>`:"",H=document.createElement("div");if(H.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${ye(I.date)}${I.time?" · "+I.time:""}</span>
              ${I.auteur?`<span style="color:#636366;font-weight:500">${I.auteur}</span>`:""}
              ${j}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${I.text}</div>
            ${(I.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Le({title:"Note",body:H,doneLabel:"Fermer",onDone:()=>{}}),(I.imageIds||[]).length&&window.ImageStore){const D=H.querySelector("#note-detail-photos");for(const J of I.imageIds){const B=await window.ImageStore.get(J);if(!B)continue;const Q=document.createElement("div");Q.className="jrn-img-thumb-wrap";const Z=document.createElement("img");Z.className="jrn-img-thumb",Z.src=B,Z.alt="",Z.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(B)}),Q.appendChild(Z),D.appendChild(Q)}}})})}ee();function ce(){t.querySelectorAll(".m-tr-chart-wrap").forEach(q=>{const F=q.querySelector(".m-tr-cursor"),_=q.querySelector(".m-tr-tooltip");if(!_)return;const R=JSON.parse(q.dataset.series||"[]"),ye=q.dataset.unit||"",ue=R.length,ae=26,X=270;q.addEventListener("pointermove",O=>{const I=q.getBoundingClientRect(),j=Math.max(0,Math.min(((O.clientX-I.left)*(ae+X)/I.width-ae)/X,1)),H=R[Math.round(j*(ue-1))]??null;if(F){const D=ae+Math.round(j*X);F.setAttribute("x1",D),F.setAttribute("x2",D),F.setAttribute("opacity","1")}_.style.display="",_.style.left=`${Math.max(0,Math.min(O.clientX-I.left-24,I.width-60))}px`,_.textContent=H!==null?`${(+H).toFixed(1)} ${ye}`:"—"}),q.addEventListener("pointerleave",()=>{_.style.display="none",F==null||F.setAttribute("opacity","0")})})}function U(){const q=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');q&&(q.innerHTML=ri(l,i),ve())}function ve(){var R,ye,ue,ae,X;const q=()=>{var I,j;const O=t.querySelector("#msr-create");O&&(O.disabled=!((I=t.querySelector("#msr-subject"))!=null&&I.value)||!((j=t.querySelector("#msr-metric"))!=null&&j.value)||$e.length>=nt)},F=()=>{var H;const O=t.querySelector("#msr-metric"),I=(H=t.querySelector("#msr-subject"))==null?void 0:H.value;if(!O)return;const j=Es(I,i);O.innerHTML='<option value="">— Métrique —</option>'+j.map(D=>`<option value="${D}">${kt[D]}</option>`).join(""),O.disabled=!I||!j.length,q()},_=()=>{var j;const O=t.querySelector("#msr-step"),I=((j=t.querySelector("#msr-period"))==null?void 0:j.value)||"7d";O&&(O.innerHTML=qi(I).map(H=>`<option value="${H.id}">${H.label}</option>`).join(""),q())};(R=t.querySelector("#msr-subject"))==null||R.addEventListener("change",()=>{F(),q()}),(ye=t.querySelector("#msr-period"))==null||ye.addEventListener("change",()=>{_(),q()}),(ue=t.querySelector("#msr-metric"))==null||ue.addEventListener("change",q),(ae=t.querySelector("#msr-step"))==null||ae.addEventListener("change",q),(X=t.querySelector("#msr-create"))==null||X.addEventListener("click",()=>{var Z,le,Y;const O=t.querySelector("#msr-subject"),I=t.querySelector("#msr-metric"),j=t.querySelector("#msr-period"),H=t.querySelector("#msr-step"),D=O==null?void 0:O.value,J=I==null?void 0:I.value,B=j==null?void 0:j.value,Q=H==null?void 0:H.value;!D||!J||!B||!Q||($e.push({subjectKey:D,subjectLabel:(((Z=O.options[O.selectedIndex])==null?void 0:Z.text)||D).trim(),metricId:J,metricLabel:kt[J]||J,unit:ws[J]||"",period:B,periodLabel:(((le=j.options[j.selectedIndex])==null?void 0:le.text)||B).trim(),step:Q,stepLabel:(((Y=H.options[H.selectedIndex])==null?void 0:Y.text)||Q).trim(),color:ji[J]||li[$e.length%li.length]}),p(),U())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(O=>{O.addEventListener("click",()=>{$e.splice(+O.dataset.idx,1),p(),U()})}),t.querySelectorAll(".m-wf-view-data[data-sensor-id]").forEach(O=>{O.addEventListener("click",()=>{const I=+O.dataset.sensorId,j=G.find(H=>H.id===I);j&&me(()=>Promise.resolve().then(()=>yi),void 0).then(H=>H.initSensorDetail(j,"donnees",s))})}),ce()}ve(),t.querySelectorAll(".m-prev-card").forEach(q=>{q.addEventListener("click",()=>{E(d,+q.dataset.day)})});const fe=t.querySelector(".m-prev-expand-btn");fe&&fe.addEventListener("click",()=>E(d,3)),t.querySelectorAll(".m-widget-menu").forEach(q=>{q.addEventListener("click",F=>{var X;F.stopPropagation();const _=de.find(O=>O.id===q.dataset.widget);if(!_)return;const R=document.createElement("div"),ye=_.id==="bilan_hydrique",ue=Ue().sensorlessEnabled??!0;R.innerHTML=`
          <div class="m-sheet-links">
            ${ye?`<a class="m-sheet-link" id="menu-sensorless">${ue?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const ae=Le({title:_.title,body:R,doneLabel:"Fermer",onDone:()=>{}});(X=R.querySelector("#menu-sensorless"))==null||X.addEventListener("click",()=>{si({sensorlessEnabled:!ue}),ae.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{ae.remove();const O=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');O&&(O.innerHTML=c()+Ne(r()),b(),w(),g(),s==="admin"&&$())},280)}),R.querySelector("#menu-move").addEventListener("click",()=>{ae.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{ae.remove(),x()},280)}),R.querySelector("#menu-remove").addEventListener("click",()=>{_.active=!1,ae.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{ae.remove(),p(),y()},280),Ee("Widget retiré")})})})}function x(){const b=document.createElement("div"),w=()=>de.filter($=>$.active&&!$.fixed),g=()=>{const $=w();b.innerHTML=$.map((M,T)=>`
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
        </div>`).join(""),b.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(M=>{M.addEventListener("click",()=>{const T=w(),P=+M.dataset.i,z=P+ +M.dataset.dir,ee=de.indexOf(T[P]),ce=de.indexOf(T[z]);[de[ee],de[ce]]=[de[ce],de[ee]],p(),g(),y()})})};g(),Le({title:"Réorganiser les widgets",body:b,doneLabel:"Fermer",onDone:()=>{}})}function k(){const b=s==="admin",w=re(`
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
            ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(g=>`
              <button class="m-add-item" data-action="${g.action}">
                <i class="bi ${g.icon}"></i>
                <span>${g.label}</span>
              </button>`).join("")}
          </div>
          ${b?`
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
      </div>`);w.querySelector(".m-detail-back").addEventListener("click",ie),w.querySelectorAll(".m-add-item").forEach(g=>{g.addEventListener("click",()=>{const $=g.dataset.action;$==="irrigation"?(ie(),me(()=>Promise.resolve().then(()=>Re),void 0).then(M=>M.openIrrigationSaisie(l,Ee))):$==="strategie-irrigation"?(ie(),me(()=>Promise.resolve().then(()=>Re),void 0).then(M=>M.openIrrigationStrategie(l,Ee))):Ee("Fonctionnalité à venir")})})}function A(){const b=document.createElement("div"),w=()=>{const g=de.filter($=>!$.fixed);b.innerHTML=g.map($=>`
        <div class="m-catalog-row${$.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${$.color}20;color:${$.color}"><i class="bi ${$.icon}"></i></div>
          <span class="m-catalog-title">${$.title}</span>
          ${$.available?`<button class="m-catalog-toggle${$.active?" m-catalog-toggle--on":""}" data-cid="${$.id}" type="button">
                <i class="bi ${$.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),b.querySelectorAll("[data-cid]").forEach($=>{$.addEventListener("click",()=>{const M=de.find(T=>T.id===$.dataset.cid);M&&(M.active=!M.active,p(),w(),y())})})};w(),Le({title:"Widgets disponibles",body:b,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",b=>{if(b.key!=="weenat_proto_store")return;Ei(W);const w=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');w&&(w.innerHTML=c()+Ne(r()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),s==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=k,y()}new URLSearchParams(window.location.search).get("role");const Us=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermo-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],At={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},_i=e=>`dash-widgets-parcel-${e}`;function Ys(e,s){const t=s.map(i=>G.find(d=>d.id===i)).filter(Boolean),a=new Set(t.map(i=>i.model)),l=["previsions-5j","cumuls"];return e.irrigation&&e.irrigation!=="Non irrigué"&&l.push("irrigations"),Object.entries(At).forEach(([i,d])=>{d.some(u=>a.has(u))&&l.push(i)}),l}function lt(e,s){try{const t=JSON.parse(localStorage.getItem(_i(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return Ys(e,s)}function Bi(e,s){localStorage.setItem(_i(e),JSON.stringify(s))}function Zs(e,s,t){const a=new Set(lt(e,s)),l=Us.map((i,d)=>`
    <div class="m-list-section-header"${d>0?' style="margin-top:20px"':""}>${i.title}</div>
    ${i.items.map(u=>{const r=a.has(u.id);return`
        <div class="m-wcat-item">
          <span>${u.label}</span>
          ${r?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${u.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`}).join("")}`).join(""),n=re(`
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
    </div>`);n.querySelector(".m-detail-back").addEventListener("click",ie),n.querySelectorAll(".m-wcat-add").forEach(i=>{i.addEventListener("click",()=>{const d=i.dataset.wid,u=lt(e,s);u.includes(d)||(u.push(d),Bi(e.id,u)),ie(),t==null||t()})})}const Oe={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}},Dt={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function dt(e,s){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:s},(a,l)=>{const n=l/s*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const i=t.base+t.amp*Math.sin(n-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,i))})}const Ht={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},zt={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Ks(e,s,t,a,l,n=20){const i=zt[e]||10080,d=new Date,u=S=>e==="1d"||e==="hier"?`${String(S.getHours()).padStart(2,"0")}h`:e==="365d"?S.toLocaleDateString("fr-FR",{month:"short"}):`${String(S.getDate()).padStart(2,"0")}/${String(S.getMonth()+1).padStart(2,"0")}`,r=4,c=s-t-a,h=l-n;return Array.from({length:r+1},(S,o)=>{const p=o/r,v=new Date(d.getTime()-(1-p)*i*6e4),y=(t+p*c).toFixed(1),L=o===0?"start":o===r?"end":"middle";return[`<line x1="${y}" y1="${h}" x2="${y}" y2="${h+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${y}" y="${l-3}" text-anchor="${L}" font-size="9" fill="#8e8e93" font-family="-apple-system">${u(v)}</text>`].join("")}).join("")}function Fi(e,s,t,a="7d"){const l=Ht[a]||60,n=dt(e,l),i=320,d=100,u=34,r=6,c=10,h=20,S=i-u-r,o=d-c-h,p=t?0:Math.min(...n),v=Math.max(...n,p+.001),y=v-p,L=$=>u+$/(n.length-1)*S,f=$=>c+o-($-p)/y*o,m=`g${Math.random().toString(36).slice(2,8)}`,E=[0,.5,1].map($=>{const M=p+$*y,T=c+o-$*o;return`<text x="${u-3}" y="${(T+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${M<10?M.toFixed(1):Math.round(M)}</text>`}).join(""),C=[.25,.5,.75].map($=>{const M=(c+o-$*o).toFixed(1);return`<line x1="${u}" y1="${M}" x2="${i-r}" y2="${M}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),x=`<line x1="${u}" y1="${c+o}" x2="${i-r}" y2="${c+o}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,k=Ks(a,i,u,r,d);if(t){const $=S/n.length*.7,M=n.map((T,P)=>{const z=(T-p)/y*o,ee=c+o-z;return`<rect x="${(L(P)-$/2).toFixed(1)}" y="${ee.toFixed(1)}" width="${$.toFixed(1)}" height="${z.toFixed(1)}" fill="${s}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${i} ${d}" width="100%" height="${d}" preserveAspectRatio="none">${E}${C}${x}${k}${M}</svg>`}const b=n.map(($,M)=>[L(M),f($)]).map(([$,M],T)=>`${T?"L":"M"}${$.toFixed(1)},${M.toFixed(1)}`).join(" "),w=`${b} L${L(n.length-1).toFixed(1)},${(c+o).toFixed(1)} L${u},${(c+o).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:n.map($=>+$.toFixed(2)),minV:+p.toFixed(2),maxV:+v.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${i} ${d}" width="100%" height="${d}" preserveAspectRatio="none">
      <defs><linearGradient id="${m}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${E}${C}${x}
      <path d="${w}" fill="url(#${m})"/>
      <path d="${b}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${k}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Xs(e,s,t){if(!t)return"";const a=Ht[s]||60,n=(zt[s]||10080)/(a*60),i=dt(e,a);let d=[];if(t==="temp"){const u=i.reduce((c,h)=>c+Math.max(0,h),0)*(n/24),r=i.filter(c=>c<7).length*n;d=[{label:"Degrés jours",val:`${Math.round(u)} DJ`},{label:"Heures de froid",val:`${Math.round(r)} h`}]}else if(t==="pluie")d=[{label:"Cumul pluie",val:`${i.reduce((r,c)=>r+c,0).toFixed(1)} mm`}];else if(t==="rayo"){const u=i.filter(r=>r>120).length*n;d=[{label:"Ensoleillement",val:`${Math.round(u)} h`}]}else if(t==="etp")d=[{label:"ETP cumulée",val:`${(i.reduce((r,c)=>r+c,0)*(n/24)).toFixed(1)} mm`}];else if(t==="hws"){const u=i.filter(r=>r>50).length*n;d=[{label:"Heures d'humectation",val:`${Math.round(u)} h`}]}return d.length?`<div class="m-chart-cumuls">${d.map(u=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${u.label}</span>
      <span class="m-chart-cumul-val">${u.val}</span>
    </div>`).join("")}</div>`:""}function Qs(e,s,t=null){const a=Oe[e];if(!a)return"";const l=t?`<button class="m-chart-expand-btn" data-sensor-id="${t}" data-metric-id="${e}" style="border:none;background:none;color:#007AFF;font-size:11px;padding:2px 4px;cursor:pointer;display:flex;align-items:center;gap:3px;margin-left:auto;font-family:inherit"><i class="bi bi-fullscreen"></i> Voir les données</button>`:"";return`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${a.color}">${a.label}</span>
        ${l}
      </div>
      ${Fi(e,a.color,a.cumul,s)}
      ${Xs(e,s,a.cumulsType)}
    </div>`}function en(e){const s=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!s.vals)return;const{vals:t,minV:a,maxV:l}=s,n=e.querySelector(".m-chart-tip"),i=e.querySelector(".m-chart-crosshair"),d=e.dataset.color||"#0172A4";function u(c){const h=e.getBoundingClientRect(),S=Math.max(0,Math.min(1,(c-h.left)/h.width)),o=Math.round(S*(t.length-1)),p=t[o],v=S*100;i.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${v}%;width:1px;background:${d};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(v,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=p<10?p.toFixed(1):String(Math.round(p))}function r(){i.style.display="none",n.style.display="none"}e.addEventListener("pointermove",c=>{c.preventDefault(),u(c.clientX)}),e.addEventListener("pointerdown",c=>u(c.clientX)),e.addEventListener("pointerup",r),e.addEventListener("pointerleave",r),e.style.cursor="crosshair"}function tn(e){const s=K.filter(h=>h.plotId===e.id),t=new Date().toISOString().split("T")[0],a=s.filter(h=>h.real),l=s.filter(h=>!h.real),n=a.reduce((h,S)=>h+S.mm,0),i=l.reduce((h,S)=>h+S.mm,0),d=l.filter(h=>h.iso>=t).sort((h,S)=>h.iso<S.iso?-1:1)[0],u=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],r=h=>{const[,S,o]=h.split("-");return`${+o} ${u[+S-1]}`},c=e.irrigation;return s.length?`
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
          <div style="font-size:22px;font-weight:700;color:#E07820;line-height:1.1">${n} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${a.length} irrig.</div>
        </div>
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Planifiées</div>
          <div style="font-size:22px;font-weight:700;color:#FFB705;line-height:1.1">${i} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${l.length} irrig.</div>
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
      </div>`}function sn(e,s=[]){const t=lt(e,s),a=s.map(n=>G.find(i=>i.id===n)).filter(Boolean);let l="";for(const n of t)if(n==="irrigations")l+=tn(e);else if(n==="cumuls")l+=an(e,s);else if(n==="previsions-5j")l+=ln(e);else if(At[n]){const i=new Set(At[n]),d=a.filter(u=>i.has(u.model));d.length&&(l+=on(d,n))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${l}
    </div>`}function _t(e,s,t,a,l=""){return`
    <div class="m-widget-card">
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${s}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${l}" type="button">•••</button>
      </div>
      ${a}
    </div>`}function qe(e,s,t){const a=(e*9301+49297)%233280,n={etp:1+a%60/100,pluie:.8+a%70/100,djc:4+a%60/10,hfroid:.4+a%12/10,humec:.1+a%20/100,enso:4+a%40/10}[s]??1,i=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(n*i*10)/10}const Oi=e=>`m-pcumuls-${e}`;function Fe(e){try{return JSON.parse(localStorage.getItem(Oi(e)))||{}}catch{return{}}}function et(e,s){const t=Fe(e);localStorage.setItem(Oi(e),JSON.stringify({...t,...s}))}const nn={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function an(e,s=[]){const t=new Set;s.forEach(o=>{const p=G.find(v=>v.id===o);p&&(Dt[p.model]||[]).forEach(v=>t.add(v))});const a=`${new Date().getFullYear()}-01-01`,l=Fe(e.id),n=new Set(l.hidden||[]),i=l.dates||{},d=l.cfg||{};e.id;const u=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:qe(e.id,"etp",i.etp||a),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:qe(e.id,"pluie",i.pluie||a),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:qe(e.id,"djc",i.djc||a),show:t.has("temperature"),cfg:!0,cfgLabel:`${d.djMin??0}–${d.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#FEE7B4",icon:"bi-snow",val:qe(e.id,"hfroid",i.hfroid||a),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${d.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:qe(e.id,"humec",i.humec||a),show:t.has("humectation")},{id:"enso",label:"Ensoleillement",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:qe(e.id,"enso",i.enso||a),show:!0}].filter(o=>o.show),r=u.filter(o=>!n.has(o.id)),c=u.filter(o=>n.has(o.id)),h=c.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${c.map(o=>`
          <button class="m-pcumul-add" data-cid="${o.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${o.icon}" style="color:${o.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${o.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",S=r.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${r.map(o=>{const p=i[o.id]||a;return`<div class="m-cumuls-saved-card" style="position:relative">
          <button class="m-pcumul-del" data-cid="${o.id}" data-pid="${e.id}" type="button" style="position:absolute;top:8px;right:8px;border:none;background:rgba(0,0,0,.08);border-radius:50%;width:22px;height:22px;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#636366">×</button>
          <div class="m-cumuls-saved-row1" style="padding-right:32px">
            <span class="m-cumuls-saved-metric"><i class="bi ${o.icon}" style="color:${o.color}"></i> ${o.label}</span>
            <span class="m-cumuls-saved-val" style="color:${o.color}">${o.val}<span class="m-cumuls-saved-unit"> ${o.unit}</span></span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:4px;flex-wrap:wrap">
            <span style="font-size:12px;color:#8e8e93">Depuis le</span>
            <input type="date" class="m-pcumul-date" data-cid="${o.id}" data-pid="${e.id}" value="${p}" style="border: 1px solid #CCC;background: transparent;font-size: 12px;color: #8e8e93;cursor: pointer;font-family: inherit;padding: 4px;border-radius: 5px;">
            ${o.cfg?`<button class="m-pcumul-cfg" data-cid="${o.id}" data-pid="${e.id}" style="border: 1px solid #CCC;background: transparent;font-size: 11px;color: #8e8e93;cursor: pointer;font-family: inherit;padding: 5px;border-radius: 5px;"><i class="bi bi-gear"></i> ${o.cfgLabel}</button>`:""}
          </div>
        </div>`}).join("")}${h}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${h}`;return _t("Cumuls","bi-bar-chart-fill","#0172A4",S,"cumuls")}function ln(e){const s=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],a=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],l=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],n=new Date,i=ne.find(p=>p.id===(e==null?void 0:e.orgId)),d=(e==null?void 0:e.ville)||(i==null?void 0:i.ville)||"—",u=(e==null?void 0:e.id)||1,r=(p,v)=>Math.floor(Math.random()*(v-p+1))+p,c=(p,v)=>{const y=new Date(n);y.setDate(y.getDate()+p);const L=Math.floor((u*7+p*3)%11/2.2);return{lbl:p===0?"Auj.":s[y.getDay()],date:`${y.getDate()} ${t[y.getMonth()]}`,tmax:r(17+v,34+v),tmin:r(4+v,15+v),pluie:L>=3?r(2,18):0,vent:r(10,35),wi:L}},h=[0,1,2].map(p=>c(p,0)).concat([3,4].map(p=>c(p,-1))),S=p=>`
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${p.lbl}</div>
      <div class="m-wprev5-date">${p.date}</div>
      <i class="bi ${a[p.wi]} m-wprev5-icon" title="${l[p.wi]}"></i>
      <div class="m-wprev5-rain${p.pluie===0?" m-wprev5-rain--none":""}">${p.pluie>0?p.pluie+" mm":"—"}</div>
      <div class="m-wprev5-tmax">${p.tmax}°</div>
      <div class="m-wprev5-tmin">${p.tmin}°</div>
      <div class="m-wprev5-wind">${p.vent} <span>km/h</span></div>
    </div>`,o=`
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${d}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${h.map(S).join("")}</div>`;return _t("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",o,"previsions-5j")}function on(e,s=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},a={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermo-hygro",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},l={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},n={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(i=>{const d=t[i.model]||"bi-broadcast",u=a[i.model]||i.model,r=l[i.model]||"#0172A4",c=n[i.model]||[],h=Oe[c[0]],S=c[0],o=`
      <div style="margin-bottom:6px">
        ${h?Fi(S,r,!1,"1d"):'<div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--txt3);font-size:12px">Données indisponibles</div>'}
      </div>
      <div class="m-wsensor-vals">
        ${c.slice(0,3).map(p=>{const v=Oe[p];if(!v)return"";const L=dt(p,1)[0],f=L<10?L.toFixed(1):Math.round(L);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${v.label}</span>
            <span class="m-wsensor-value" style="color:${v.color}">${f} ${v.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer" style="display:flex;align-items:center;justify-content:space-between">
        <span>${i.serial}</span>
        <button class="m-wsensor-voir-donnees" data-sensor-id="${i.id}" data-metric-id="${S}" style="border:none;background:none;color:#007AFF;font-size:12px;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;gap:3px">Voir les données <i class="bi bi-arrow-right-short"></i></button>
      </div>`;return _t(u,d,r,o,s)}).join("")}function rn(e,s){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:s});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function dn(e,s,t){const a=new Set;s.forEach(o=>{const p=G.find(v=>v.id===o);p&&(Dt[p.model]||[]).forEach(v=>a.add(v))});const l=[...new Set(["etp","rayonnement","temp_rosee",...a])].filter(o=>Oe[o]),n=Ht[t]||60,i=zt[t]||10080,d=i/n*6e4,u=new Date,r=new Date(u-i*6e4),c=["Horodatage",...l.map(o=>`${Oe[o].label} (${Oe[o].unit})`)].join(";"),h=Array.from({length:n},(o,p)=>[new Date(r.getTime()+p*d).toISOString().replace("T"," ").slice(0,19),...l.map(y=>dt(y,1)[0].toFixed(2))].join(";")),S=(e.name||"parcelle").replace(/[^\w]/g,"_");rn([c,...h].join(`\r
`),`${S}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function cn(e,s="7d",t="1h"){const a=new Set,l={};e.forEach(u=>{const r=G.find(c=>c.id===u);r&&(Dt[r.model]||[]).forEach(c=>{a.add(c),l[c]||(l[c]=u)})});const n=[...new Set(["etp","rayonnement","temp_rosee",...a])],i=new Date().toISOString().slice(0,10),d=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
    <div class="m-period-bar" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:8px">
        <select class="m-period-sel" style="flex:1;min-width:0">
          <option value="365d"${s==="365d"?" selected":""}>365 jours</option>
          <option value="30d"${s==="30d"?" selected":""}>30 jours</option>
          <option value="7d"${s==="7d"?" selected":""}>7 jours</option>
          <option value="hier"${s==="hier"?" selected":""}>Hier</option>
          <option value="1d"${s==="1d"?" selected":""}>Aujourd'hui</option>
          <option value="custom"${s==="custom"?" selected":""}>Personnalisé</option>
        </select>
        <select class="m-step-sel" style="flex:1;min-width:0">
          <option value="1h"${t==="1h"?" selected":""}>Horaire</option>
          <option value="1d"${t==="1d"?" selected":""}>Journalier</option>
          <option value="1w"${t==="1w"?" selected":""}>Hebdo</option>
        </select>
      </div>
      ${s==="custom"?`
      <div style="display:flex;gap:8px;margin-top:8px;align-items:center">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">Du</label>
        <input type="date" class="m-custom-from" value="${d}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to" value="${i}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
      </div>`:""}
    </div>
    <div class="m-detail-section">
      ${n.map(u=>Qs(u,s,l[u]??null)).join("")}
    </div>`}function un(e,s,t){const a=t.map(u=>G.find(r=>r.id===u)).filter(Boolean),l=a.map(u=>`${u.model} — ${u.serial}`),n=a.some(u=>u.model==="P+"||u.model==="PT"),i=a.some(u=>u.model==="P");return`
    <div class="m-detail-section">
      ${n&&i?`
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
        ${l.length?l.map((u,r)=>`<div class="m-list-row${r===l.length-1?" m-list-row--last":""}">
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
    </div>`}function Mt(e,s=[],t="widgets",a="Parcelles"){let l=ne.find(v=>v.id===e.orgId),n=t,i="7d",d="1h",u=!1;const r=(l==null?void 0:l.ville)||"",c=re(`
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
    <div id="detail-content" class="m-detail-content"></div>`);function h(){const v=ne.filter(m=>m.id!==100&&m.statut!=="inactif"),y=document.createElement("div"),L=()=>{y.innerHTML=v.map(m=>`
        <div class="m-sheet-option${m.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${m.id}">
          <span>${m.name}</span>
          ${m.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),y.querySelectorAll("[data-pick-org]").forEach(m=>{m.addEventListener("click",()=>{const E=+m.dataset.pickOrg;E!==e.orgId&&(e.orgId=E,l=ne.find(C=>C.id===E),S(),N("Exploitation mise à jour")),f.classList.remove("m-sheet-overlay--show"),setTimeout(()=>f.remove(),280)})})},f=oe({title:"Exploitation",body:y,doneLabel:"Fermer",onDone:()=>{}});L()}function S(){const v=c.querySelector("#detail-content");n==="widgets"&&(v.innerHTML=sn(e,s)),n==="donnees"&&(v.innerHTML=cn(s,i,d)),n==="params"&&(v.innerHTML=un(e,l,s),o()),p()}function o(){const v=window.L;v&&setTimeout(()=>{var f;const y=c.querySelector("#parcel-minimap");if(!y)return;const L=v.map(y,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(v.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(L),((f=e.latlngs)==null?void 0:f.length)>=3){const m=v.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(L);L.fitBounds(m.getBounds(),{padding:[8,8]})}else L.setView([e.lat,e.lng],14),v.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(L)},50)}function p(){var v,y,L,f;(v=c.querySelector(".m-period-sel"))==null||v.addEventListener("change",m=>{i=m.target.value,S()}),(y=c.querySelector(".m-step-sel"))==null||y.addEventListener("change",m=>{d=m.target.value,S()}),(L=c.querySelector(".m-export-btn"))==null||L.addEventListener("click",()=>dn(e,s,i)),c.querySelectorAll(".m-chart-svg-wrap").forEach(m=>en(m)),c.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(m=>{m.addEventListener("click",()=>{const E=+m.dataset.sensorId,C=G.find(x=>x.id===E);C&&me(()=>import("./chart-fullscreen-mr9d3KSS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(x=>x.initChartFullscreen({sensor:C,linkedSensorIds:s,metricId:m.dataset.metricId||null,backLabel:e.name}))})}),c.querySelectorAll(".m-chart-expand-btn[data-sensor-id]").forEach(m=>{m.addEventListener("click",()=>{const E=+m.dataset.sensorId,C=G.find(x=>x.id===E);C&&me(()=>import("./chart-fullscreen-mr9d3KSS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(x=>x.initChartFullscreen({sensor:C,linkedSensorIds:s,metricId:m.dataset.metricId||null,backLabel:e.name}))})}),c.querySelectorAll(".m-list-row[data-action]").forEach(m=>{m.addEventListener("click",()=>{m.dataset.action==="edit-exploitation"?h():m.dataset.action==="archive"?at({title:"Archiver la parcelle",message:`Archiver <strong>${e.name}</strong> ? Elle ne sera plus visible dans votre exploitation.`,confirmLabel:"Archiver",confirmColor:"#ff9f0a",onConfirm:()=>N("Parcelle archivée (fonctionnalité à venir)")}):N("Fonctionnalité à venir")})}),c.querySelectorAll(".m-widget-menu").forEach(m=>{m.addEventListener("click",E=>{var w;E.stopPropagation();const C=m.dataset.wid;if(!C)return;(w=c.querySelector(".m-widget-dd"))==null||w.remove();const x=document.createElement("div");x.className="m-widget-dd",x.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:180px",x.innerHTML=`<button class="m-widget-dd-remove" data-wid="${C}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const k=c.querySelector(".m-detail-content"),A=m.getBoundingClientRect(),b=k.getBoundingClientRect();x.style.top=`${A.bottom-b.top+k.scrollTop+4}px`,x.style.right=`${b.right-A.right}px`,k.style.position="relative",k.appendChild(x),x.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{x.remove();const g=lt(e,s).filter($=>$!==C);Bi(e.id,g),S()}),setTimeout(()=>document.addEventListener("click",()=>x.remove(),{once:!0}),0)})}),(f=c.querySelector(".m-add-widget-btn"))==null||f.addEventListener("click",()=>Zs(e,s,S)),c.querySelectorAll(".m-pcumul-del").forEach(m=>{m.addEventListener("click",E=>{E.stopPropagation();const C=+m.dataset.pid,x=Fe(C),k=new Set(x.hidden||[]);k.add(m.dataset.cid),et(C,{hidden:[...k]}),S()})}),c.querySelectorAll(".m-pcumul-date").forEach(m=>{m.addEventListener("change",()=>{const E=+m.dataset.pid,C=m.dataset.cid,x=m.value;if(!x||(Date.now()-new Date(x))/864e5>365)return;const b=Fe(E).dates||{};b[C]=x,et(E,{dates:b});const w=m.closest(".m-cumuls-saved-card"),g=w==null?void 0:w.querySelector(".m-cumuls-saved-val");if(g){const $=w.querySelector(".m-cumuls-saved-unit"),M=($==null?void 0:$.textContent.trim())||"",T=qe(E,C,x);g.innerHTML=`${T}<span class="m-cumuls-saved-unit"> ${M}</span>`}})}),c.querySelectorAll(".m-pcumul-cfg").forEach(m=>{m.addEventListener("click",E=>{var g;E.stopPropagation();const C=+m.dataset.pid,x=m.dataset.cid,A={...Fe(C).cfg},b=nn[x];if(!b)return;(g=c.querySelector(".m-pcumul-cfg-panel"))==null||g.remove();const w=document.createElement("div");w.className="m-pcumul-cfg-panel",w.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",w.innerHTML=b.map($=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${$.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${$.key}" value="${A[$.key]??$.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',m.closest(".m-cumuls-saved-card").after(w),w.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{w.querySelectorAll(".m-pcumul-cfg-inp").forEach($=>{A[$.dataset.key]=parseFloat($.value)||0}),et(C,{cfg:A}),w.remove(),S()})})}),c.querySelectorAll(".m-pcumul-add").forEach(m=>{m.addEventListener("click",E=>{E.stopPropagation();const C=+m.dataset.pid,x=m.dataset.cid,k=Fe(C),A=new Set(k.hidden||[]);A.delete(x),et(C,{hidden:[...A]}),S()})})}c.querySelectorAll(".m-detail-tab").forEach(v=>{v.addEventListener("click",()=>{c.querySelectorAll(".m-detail-tab").forEach(y=>y.classList.remove("active")),v.classList.add("active"),n=v.dataset.view,S()})}),c.querySelector(".m-detail-back").addEventListener("click",ie),c.querySelector("#d-star").addEventListener("click",()=>{u=!u;const v=c.querySelector("#d-star");v.querySelector("i").className=u?"bi bi-star-fill":"bi bi-star",v.style.color=u?"#f5c842":"",N(u?"Ajouté aux favoris":"Retiré des favoris")}),c.querySelector("#d-plus").addEventListener("click",()=>{var v;(v=window.showMobileAddPage)==null||v.call(window)}),c.querySelector("#d-journal").addEventListener("click",()=>pn(e)),S()}const Ri=e=>`parcel-journal-${e}`;function Tt(e){try{const s=localStorage.getItem(Ri(e));if(s)return JSON.parse(s)}catch{}return[{id:1,type:"note",category:"Observation générale",date:"2026-05-11",auteur:"Jean Dupont",texte:"Quelques pucerons sur feuilles basses. À surveiller."},{id:2,type:"traitement",date:"2026-05-16",auteur:"Sophie Martin",texte:"Vent < 2 m/s, conditions conformes.",produit:"Karate Zeon",dose:"0,1 L/ha",cible:"Pucerons"}]}function Ni(e,s){localStorage.setItem(Ri(e),JSON.stringify(s))}function pn(e){const s=ne.find(n=>n.id===e.orgId),t=(s==null?void 0:s.ville)||"",a=re(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);a.querySelector(".m-detail-back").addEventListener("click",ie);function l(){var h,S;const n=a.querySelector("#mjrn-content"),i=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(o=>o.linkedType==="parcel"&&o.linkedId===e.id).map((o,p)=>({id:`dash-${p}`,type:"note",date:o.date,texte:o.text,auteur:o.auteur,_fromDashboard:!0})),d=[...Tt(e.id),...i].sort((o,p)=>p.date.localeCompare(o.date)),u=o=>{const[p,v,y]=o.split("-");return`${y}/${v}/${p}`},r={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"}};let c=`
      <div style="padding:12px 16px 4px;display:flex;gap:8px">
        <button class="btn-secondary btn-sm" id="mjrn-add-note" style="gap:6px;flex:1;justify-content:center">
          <i class="bi bi-pencil-square"></i> Note
        </button>
        <button class="btn-secondary btn-sm" id="mjrn-add-trait" style="gap:6px;flex:1;justify-content:center">
          <i class="bi bi-eyedropper"></i> Traitement
        </button>
      </div>
    `;d.length===0?c+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(c+='<div class="m-jrn-timeline">',d.forEach((o,p)=>{const v=r[o.type]||r.note,y=o.type==="traitement",L=p===d.length-1,f=!!o._fromDashboard;c+=`
          <div class="m-jrn-entry" data-id="${o.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${v.dotBg};color:${v.dotColor};border-color:${v.dotColor}40">
                <i class="bi ${v.icon}"></i>
              </div>
              ${L?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${u(o.date)}</span>
                <span class="journal-type-badge journal-type-badge--${v.badgeCls}">${v.label}</span>
                ${f?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${o.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${o.texte?`<div class="m-jrn-texte">${o.texte}</div>`:""}
              ${o.auteur&&f?`<div style="font-size:11px;color:#8e8e93;margin-top:2px">${o.auteur}</div>`:""}
              ${y&&(o.produit||o.dose||o.cible)?`
                <div class="m-jrn-meta">
                  ${o.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${o.produit}</span>`:""}
                  ${o.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${o.dose}</span>`:""}
                  ${o.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${o.cible}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),c+="</div>"),n.innerHTML=c,(h=n.querySelector("#mjrn-add-note"))==null||h.addEventListener("click",()=>fi("note",e.id,l)),(S=n.querySelector("#mjrn-add-trait"))==null||S.addEventListener("click",()=>fi("traitement",e.id,l)),n.querySelectorAll(".m-jrn-del").forEach(o=>{o.addEventListener("click",()=>{const p=parseInt(o.dataset.id);Ni(e.id,Tt(e.id).filter(v=>v.id!==p)),l()})})}l()}function fi(e,s,t){const a=e==="traitement",l=new Date().toISOString().slice(0,10),n=document.createElement("div");n.className="modal add-modal",n.innerHTML=`
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
    </div>`,n.querySelector(".add-modal-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",i=>{i.target===n&&n.remove()}),n.querySelector("#mjf-save").addEventListener("click",()=>{const i=n.querySelector("#mjf-date").value||l,d=n.querySelector("#mjf-texte").value.trim(),u={id:Date.now(),type:e,date:i,texte:d,auteur:"Jean Dupont"};a&&(u.produit=n.querySelector("#mjf-produit").value.trim(),u.dose=n.querySelector("#mjf-dose").value.trim(),u.cible=n.querySelector("#mjf-cible").value.trim()),!(!d&&!u.produit)&&(Ni(s,[u,...Tt(s)]),n.remove(),t())}),document.body.appendChild(n)}const yt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:Mt},Symbol.toStringTag,{value:"Module"})),Ve=100,mn={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function We(e,s){const t=mn[s];return t?G.some(a=>a.parcelIds.includes(e.id)&&t.includes(a.model)):!0}const tt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function vn(e,s){const t=new Date().toISOString().split("T")[0],a=i=>{const d=new Date;return d.setDate(d.getDate()-i),d.toISOString().split("T")[0]},l=i=>{const d=new Date;return d.setDate(d.getDate()+i),d.toISOString().split("T")[0]},n=K.filter(i=>i.plotId===e);switch(s){case"Aujourd'hui":return n.filter(i=>i.iso===t).reduce((i,d)=>i+d.mm,0);case"7 derniers jours":return n.filter(i=>i.real&&i.iso>=a(7)).reduce((i,d)=>i+d.mm,0);case"30 derniers jours":return n.filter(i=>i.real&&i.iso>=a(30)).reduce((i,d)=>i+d.mm,0);case"Demain":return n.filter(i=>!i.real&&i.iso===l(1)).reduce((i,d)=>i+d.mm,0);case"7 prochains jours":return n.filter(i=>!i.real&&i.iso>t&&i.iso<=l(7)).reduce((i,d)=>i+d.mm,0);case"30 prochains jours":return n.filter(i=>!i.real&&i.iso>t&&i.iso<=l(30)).reduce((i,d)=>i+d.mm,0);case"Toute la saison":return n.filter(i=>i.real).reduce((i,d)=>i+d.mm,0);default:return n.filter(i=>i.real).reduce((i,d)=>i+d.mm,0)}}function fn(e){switch(e){case"irrigation":return 0;case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function hn(e,s){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const a=s==="admin",l=ne.filter(f=>f.id!==Ve);Object.fromEntries(ne.map(f=>[f.id,f]));let n=null,i=null;const d={};let u="carte",r="pluie",c="7 derniers jours",h="all";function S(f){if(r==="irrigation")return vn(f,c);const m=`${f}-${r}-${c}`;return m in d||(d[m]=fn(r)),d[m]}function o(){return a?h==="all"?W:h===String(Ve)?W.filter(f=>f.orgId===Ve):W.filter(f=>String(f.orgId)===h):W.filter(f=>f.orgId===1)}function p(){if(n){try{n.remove()}catch{}n=null,i=null}}function v(){p();const f=tt.find(k=>k.id===r)||tt[0],m=o(),E=a?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${Ve}"${h===String(Ve)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${l.map(k=>`<option value="${k.id}"${h===String(k.id)?" selected":""}>${k.name}</option>`).join("")}
      </select>`:"",C=[...m].sort((k,A)=>{const b=We(k,r),w=We(A,r);return b&&!w?-1:!b&&w?1:b?S(A.id)-S(k.id):0}),x=C.length?`<div class="m-plain-list">${C.map(k=>{const A=[k.crop,k.irrigation].filter(Boolean).join(" · "),b=We(k,r);return`
            <div class="m-plain-row m-tappable" data-plot-id="${k.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${k.name}</span>
                ${A?`<span class="m-plain-city">${A}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${b?"":" m-plain-na"}">${b&&!(r==="irrigation"&&!K.some(w=>w.plotId===k.id))?`${S(k.id)} ${f.unit}`:"—"}</span>
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
            ${tt.map(k=>`<option value="${k.id}"${k.id===r?" selected":""}>${k.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${f.aggs.map(k=>`<option${k===c?" selected":""}>${k}</option>`).join("")}
          </select>
        </div>
        ${E}
      </div>
      ${u==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${x}</div>`}`,L(),u==="carte"&&y(m,f)}function y(f,m){const E=window.L;E&&setTimeout(()=>{const C=t.querySelector("#parcel-map");if(!C)return;n=E.map(C,{zoomControl:!1,attributionControl:!1}),E.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(n);const x=[];f.forEach(k=>{const A=r!=="irrigation"||K.some(P=>P.plotId===k.id),b=We(k,r)&&A?`${S(k.id)} ${m.unit}`:"—",w=G.filter(P=>P.parcelIds.includes(k.id)).map(P=>P.id),g=()=>Mt(k,w),$=[k.lat,k.lng];k.latlngs&&k.latlngs.length>=3?(E.polygon(k.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(n).on("click",g),x.push(...k.latlngs)):x.push($);const M=We(k,r)&&A,T=E.circleMarker($,{radius:M?8:6,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:M?.95:.4}).addTo(n);M&&T.bindTooltip(b,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),T.on("click",g)}),x.length&&(i=x,n.fitBounds(x,{padding:[32,32]})),n.invalidateSize()},0)}window.addEventListener("m-tab-change",f=>{f.detail==="parcelles"&&u==="carte"&&n&&setTimeout(()=>{n.invalidateSize(),i!=null&&i.length&&n.fitBounds(i,{padding:[32,32]})},50)});function L(){var f,m,E;t.querySelectorAll(".m-view-btn").forEach(C=>C.addEventListener("click",()=>{u=C.dataset.view,v()})),(f=t.querySelector("#metric-sel"))==null||f.addEventListener("change",C=>{var x;r=C.target.value,c=((x=tt.find(k=>k.id===r))==null?void 0:x.defaultAgg)||"",v()}),(m=t.querySelector("#agg-sel"))==null||m.addEventListener("change",C=>{c=C.target.value,v()}),(E=t.querySelector("#org-filter"))==null||E.addEventListener("change",C=>{h=C.target.value,v()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(C=>{C.addEventListener("click",()=>{const x=W.find(A=>A.id===+C.dataset.plotId);if(!x)return;const k=G.filter(A=>A.parcelIds.includes(x.id)).map(A=>A.id);Mt(x,k)})})}v()}const It={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},bn={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"};function Bt(e){return e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[15,60]:e==="CHP-60/90"?[15,90]:null}function hi(e,s){const t=It[e.model]?`${It[e.model]} · ${e.model}`:e.model,a=Bt(e.model)&&e.depth!=null?`${e.depth} cm`:null;return[t,a,s].filter(Boolean).join(" · ")}const Ye={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function Vi(e,s){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:s},(a,l)=>{const n=l/s*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const i=t.base+t.amp*Math.sin(n-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,i))})}const Wi={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function gn(e,s,t,a,l,n=20){const i=Wi[e]||10080,d=new Date,u=S=>e==="1d"||e==="hier"?`${String(S.getHours()).padStart(2,"0")}h`:e==="365d"?S.toLocaleDateString("fr-FR",{month:"short"}):`${String(S.getDate()).padStart(2,"0")}/${String(S.getMonth()+1).padStart(2,"0")}`,r=4,c=s-t-a,h=l-n;return Array.from({length:r+1},(S,o)=>{const p=o/r,v=new Date(d.getTime()-(1-p)*i*6e4),y=(t+p*c).toFixed(1),L=o===0?"start":o===r?"end":"middle";return[`<line x1="${y}" y1="${h}" x2="${y}" y2="${h+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${y}" y="${l-3}" text-anchor="${L}" font-size="9" fill="#8e8e93" font-family="-apple-system">${u(v)}</text>`].join("")}).join("")}function yn(e,s,t,a="7d"){const l=Ji[a]||60,n=Vi(e,l),i=320,d=100,u=34,r=6,c=10,h=20,S=i-u-r,o=d-c-h,p=t?0:Math.min(...n),v=Math.max(...n,p+.001),y=v-p,L=$=>u+$/(n.length-1)*S,f=$=>c+o-($-p)/y*o,m=`g${Math.random().toString(36).slice(2,8)}`,E=[0,.5,1].map($=>{const M=p+$*y,T=c+o-$*o;return`<text x="${u-3}" y="${(T+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${M<10?M.toFixed(1):Math.round(M)}</text>`}).join(""),C=[.25,.5,.75].map($=>`<line x1="${u}" y1="${(c+o-$*o).toFixed(1)}" x2="${i-r}" y2="${(c+o-$*o).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),x=`<line x1="${u}" y1="${c+o}" x2="${i-r}" y2="${c+o}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,k=gn(a,i,u,r,d);if(t){const $=S/n.length*.7;return`<svg viewBox="0 0 ${i} ${d}" width="100%" height="${d}" preserveAspectRatio="none">
      ${E}${C}${x}
      ${n.map((M,T)=>{const P=(M-p)/y*o,z=c+o-P;return`<rect x="${(L(T)-$/2).toFixed(1)}" y="${z.toFixed(1)}" width="${$.toFixed(1)}" height="${P.toFixed(1)}" fill="${s}" opacity=".75" rx="1"/>`}).join("")}
      ${k}
    </svg>`}const b=n.map(($,M)=>[L(M),f($)]).map(([$,M],T)=>`${T?"L":"M"}${$.toFixed(1)},${M.toFixed(1)}`).join(" "),w=`${b} L${L(n.length-1).toFixed(1)},${(c+o).toFixed(1)} L${u},${(c+o).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:n.map($=>+$.toFixed(2)),minV:+p.toFixed(2),maxV:+v.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${i} ${d}" width="100%" height="${d}" preserveAspectRatio="none">
      <defs><linearGradient id="${m}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${E}${C}${x}
      <path d="${w}" fill="url(#${m})"/>
      <path d="${b}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${k}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function xn(e){const s=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!s.vals)return;const{vals:t}=s,a=e.querySelector(".m-chart-tip"),l=e.querySelector(".m-chart-crosshair"),n=e.dataset.color||"#0172A4";function i(u){const r=e.getBoundingClientRect(),c=Math.max(0,Math.min(1,(u-r.left)/r.width)),h=Math.round(c*(t.length-1)),S=t[h],o=c*100;l.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${o}%;width:1px;background:${n};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(o,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=S<10?S.toFixed(1):String(Math.round(S))}function d(){l.style.display="none",a.style.display="none"}e.addEventListener("pointermove",u=>{u.preventDefault(),i(u.clientX)}),e.addEventListener("pointerdown",u=>i(u.clientX)),e.addEventListener("pointerup",d),e.addEventListener("pointerleave",d),e.style.cursor="crosshair"}const Ji={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function $n(e,s,t){if(!t)return"";const a=Ji[s]||60,n=(Wi[s]||10080)/(a*60),i=Vi(e,a);let d=[];if(t==="temp"){const u=i.reduce((c,h)=>c+Math.max(0,h),0)*(n/24),r=i.filter(c=>c<7).length*n;d=[{label:"Degrés jours",val:`${Math.round(u)} DJ`},{label:"Heures de froid",val:`${Math.round(r)} h`}]}else if(t==="pluie")d=[{label:"Cumul pluie",val:`${i.reduce((r,c)=>r+c,0).toFixed(1)} mm`}];else if(t==="rayo"){const u=i.filter(r=>r>120).length*n;d=[{label:"Ensoleillement",val:`${Math.round(u)} h`}]}else if(t==="hws"){const u=i.filter(r=>r>50).length*n;d=[{label:"Heures d'humectation",val:`${Math.round(u)} h`}]}return d.length?`<div class="m-chart-cumuls">${d.map(u=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${u.label}</span>
      <span class="m-chart-cumul-val">${u.val}</span>
    </div>`).join("")}</div>`:""}function wn(e,s="7d",t="1h"){const a=Ye[e.model]||[];if(!a.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const l={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},n=a.map(u=>{const r=l[u.id]||u.id;return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${u.color}">${u.label}</span>
          <button class="m-chart-expand-btn" data-metric-id="${r}" style="border:none;background:none;color:#007AFF;font-size:11px;padding:2px 4px;cursor:pointer;display:flex;align-items:center;margin-left:auto"><i class="bi bi-fullscreen"></i></button>
        </div>
        ${yn(u.id,u.color,u.cumul,s)}
        ${$n(u.id,s,u.cumulsType)}
      </div>`}).join(""),i=new Date().toISOString().slice(0,10),d=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
    <div class="m-period-bar" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:8px">
        <select class="m-period-sel" style="flex:1;min-width:0">
          <option value="365d"${s==="365d"?" selected":""}>365 jours</option>
          <option value="30d"${s==="30d"?" selected":""}>30 jours</option>
          <option value="7d"${s==="7d"?" selected":""}>7 jours</option>
          <option value="hier"${s==="hier"?" selected":""}>Hier</option>
          <option value="1d"${s==="1d"?" selected":""}>Aujourd'hui</option>
          <option value="custom"${s==="custom"?" selected":""}>Personnalisé</option>
        </select>
        <select class="m-step-sel" style="flex:1;min-width:0">
          <option value="1h"${t==="1h"?" selected":""}>Horaire</option>
          <option value="1d"${t==="1d"?" selected":""}>Journalier</option>
          <option value="1w"${t==="1w"?" selected":""}>Hebdo</option>
        </select>
      </div>
      ${s==="custom"?`
      <div style="display:flex;gap:8px;margin-top:8px;align-items:center">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">Du</label>
        <input type="date" class="m-custom-from" value="${d}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to" value="${i}" style="flex:1;font-size:12px;padding:5px;border:1px solid rgba(0,0,0,.15);border-radius:6px;font-family:inherit;background:#fff">
      </div>`:""}
    </div>
    <div class="m-detail-section">${n}</div>`}function Sn(e){var u;const s=(e.parcelIds||[]).map(r=>W.find(c=>c.id===r)).filter(Boolean),t=s[0]||null,a=t?ne.find(r=>r.id===t.orgId):null,l=e.networkQuality||0,n=l>70?"#30d158":l>40?"#ff9f0a":"#ff3b30",i=e.event?Array.isArray(e.event)?e.event:[e.event]:[],d=s.map((r,c)=>`<div class="m-list-row${c===s.length-1&&s.length>0,""}" data-unlink-plot="${r.id}">
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
          <span class="m-list-row-value">${bn[e.model]||"Weenat"}</span>
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

      ${(()=>{const r=Bt(e.model);return r?`
          <div class="m-list-section-header">Configuration</div>
          <div class="m-list">
            <div class="m-list-row m-list-row--last" style="flex-wrap:wrap;gap:8px">
              <span class="m-list-row-label">Profondeur d'installation</span>
              <div style="display:flex;align-items:center;gap:6px;margin-left:auto">
                <input type="number" id="chp-depth-input" value="${e.depth??r[0]}" min="${r[0]}" max="${r[1]}" step="5"
                  style="width:62px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 8px;font-size:14px;font-family:inherit;background:#f5f5f7;text-align:center;-webkit-appearance:none">
                <span style="font-size:13px;color:#8e8e93">cm</span>
                <button id="chp-depth-save" style="background:#0172A4;color:#fff;border:none;border-radius:8px;padding:6px 12px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer">Enregistrer</button>
              </div>
              <div style="width:100%;font-size:11px;color:#8e8e93;margin-top:-4px">De ${r[0]} à ${r[1]} cm</div>
            </div>
          </div>`:""})()}

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
        ${i.length?i.map((r,c)=>{const h=r.toLowerCase().includes("déplacé");return`<div class="m-list-row" style="justify-content:space-between;gap:10px">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${r}</span>
                </div>
                ${h?`<button class="ev-stop-btn" data-ev-idx="${c}" style="flex-shrink:0;background:rgba(255,59,48,.1);border:1px solid #ff3b30;border-radius:8px;padding:5px 10px;font-size:12px;color:#ff3b30;font-family:inherit;cursor:pointer;white-space:nowrap">Arrêter</button>`:""}
              </div>`}).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
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
    </div>`}function jt(e,s="donnees",t="admin"){var o;e.parcelIds||(e.parcelIds=[]);const a=e.parcelIds.length?W.find(p=>e.parcelIds.includes(p.id)):null;let l=s,n="7d",i="1h",d=!1;const u=a&&((o=ne.find(p=>p.id===a.orgId))==null?void 0:o.ville)||"",r=re(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${hi(e,u)}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${s==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${s==="params"?"active":""}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function c(){const p=r.querySelector("#detail-content");l==="donnees"&&(p.innerHTML=wn(e,n,i)),l==="params"&&(p.innerHTML=Sn(e),h()),S()}function h(){const p=window.L,v=e.parcelIds.length?W.find(y=>e.parcelIds.includes(y.id)):null;!p||!v||setTimeout(()=>{const y=r.querySelector("#sensor-minimap");if(!y)return;const L=p.map(y,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});p.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(L),L.setView([v.lat,v.lng],15),p.circleMarker([v.lat,v.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(L)},50)}function S(){var p,v,y,L;(p=r.querySelector(".m-period-sel"))==null||p.addEventListener("change",f=>{n=f.target.value,c()}),(v=r.querySelector(".m-step-sel"))==null||v.addEventListener("change",f=>{i=f.target.value,c()}),r.querySelectorAll(".m-chart-svg-wrap").forEach(f=>xn(f)),r.querySelectorAll(".m-chart-expand-btn[data-metric-id]").forEach(f=>{f.addEventListener("click",()=>{me(()=>import("./chart-fullscreen-mr9d3KSS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(m=>m.initChartFullscreen({sensor:e,metricId:f.dataset.metricId,backLabel:e.serial}))})}),r.querySelectorAll(".m-list-row[data-action]").forEach(f=>{f.addEventListener("click",()=>{const m=f.dataset.action;if(m==="add-maintenance")bi(e,{openForm:!0});else if(m==="add-plot")En(e,t,c);else if(m==="delete"){const E=W.find(C=>{var x;return(x=e.parcelIds)==null?void 0:x.includes(C.id)});at({title:"Retirer de l'exploitation",message:`Retirer <strong>${e.model} ${e.serial}</strong> de l'exploitation ?${E?`<br><br>Parcelle liée : <strong>${E.name}</strong>.`:""}<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>N("Capteur retiré de l'exploitation (fonctionnalité à venir)")})}else N("Fonctionnalité à venir")})}),r.querySelectorAll(".ev-stop-btn").forEach(f=>{f.addEventListener("click",m=>{m.stopPropagation();const E=+f.dataset.evIdx;Array.isArray(e.event)?(e.event=e.event.filter((C,x)=>x!==E),e.event.length||(e.event=null)):e.event=null,c()})}),r.querySelectorAll("[data-unlink-plot-btn]").forEach(f=>{f.addEventListener("click",m=>{m.stopPropagation();const E=+f.dataset.unlinkPlotBtn,C=W.find(x=>x.id===E);at({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${(C==null?void 0:C.name)||"la parcelle"}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(x=>x!==E),N(`Délié de ${(C==null?void 0:C.name)||"la parcelle"}`),c()}})})}),(y=r.querySelector("#sensor-name-input"))==null||y.addEventListener("change",f=>{const m=f.target.value.trim();try{const C=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};m?C[e.id]=m:delete C[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(C))}catch{}const E=r.querySelector(".m-detail-title");E&&(E.textContent=m||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))}),(L=r.querySelector("#chp-depth-save"))==null||L.addEventListener("click",()=>{const f=r.querySelector("#chp-depth-input"),m=Bt(e.model);if(!f||!m)return;let E=parseInt(f.value);if(isNaN(E))return;E=Math.max(m[0],Math.min(m[1],E)),f.value=E,e.depth=E;const C=r.querySelector(".m-detail-subtitle");C&&(C.textContent=hi(e,u)),N(`Profondeur enregistrée : ${E} cm`)})}r.querySelectorAll(".m-detail-tab").forEach(p=>{p.addEventListener("click",()=>{r.querySelectorAll(".m-detail-tab").forEach(v=>v.classList.remove("active")),p.classList.add("active"),l=p.dataset.view,c()})}),r.querySelector(".m-detail-back").addEventListener("click",ie),r.querySelector("#d-star").addEventListener("click",()=>{d=!d;const p=r.querySelector("#d-star");p.querySelector("i").className=d?"bi bi-star-fill":"bi bi-star",p.style.color=d?"#f5c842":"",N(d?"Ajouté aux favoris":"Retiré des favoris")}),r.querySelector("#d-journal").addEventListener("click",()=>bi(e)),r.querySelector("#d-plus").addEventListener("click",()=>{var p;return(p=window.showMobileAddPage)==null?void 0:p.call(window)}),c()}const Gi=e=>`sensor-journal-${e}`,Ui=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function qt(e){try{const s=localStorage.getItem(Gi(e));if(s)return JSON.parse(s)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",texte:""},{id:2,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",texte:""},{id:3,type:"note",date:"2023-11-02",user:"Agriculteur",texte:"Capteur légèrement déplacé — redressé"}]}function Yi(e,s){localStorage.setItem(Gi(e),JSON.stringify(s))}function En(e,s,t){const a=s==="adherent"?1:null,l=a?W.filter(r=>r.orgId===a):W.filter(r=>r.orgId!==100),n=new Set((Ye[e.model]||[]).map(r=>r.id)),i=document.createElement("div");i.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function d(r=""){const c=r.toLowerCase(),h=c?l.filter(o=>o.name.toLowerCase().includes(c)||(o.crop||"").toLowerCase().includes(c)):l,S=i.querySelector("#plot-list");if(!h.length){S.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}S.innerHTML="",h.forEach((o,p)=>{const v=e.parcelIds.includes(o.id),y=p===h.length-1,L=document.createElement("div");L.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${y?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,L.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${o.name}</span>
          ${o.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${o.crop}</span>`:""}
        </span>
        ${v?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,L.addEventListener("click",()=>{if(v)at({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${o.name}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(f=>f!==o.id),N(`Délié de ${o.name}`),d(r),t()}});else{const f=G.find(m=>m.id!==e.id&&m.parcelIds.includes(o.id)&&(Ye[m.model]||[]).some(E=>n.has(E.id)));f?(u.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{u.remove(),Ln(e,o,f,t)},280)):(e.parcelIds=[...e.parcelIds,o.id],N(`Lié à ${o.name}`),d(r),t())}}),S.appendChild(L)})}d();const u=oe({title:"Parcelles liées",body:i,doneLabel:"Fermer",onDone:()=>{t()}});i.querySelector("#plot-search").addEventListener("input",r=>d(r.target.value))}function Ln(e,s,t,a){const l=(Ye[t.model]||[]).filter(d=>(Ye[e.model]||[]).some(u=>u.id===d.id)).map(d=>d.label).join(", "),n=document.createElement("div");n.innerHTML=`
    <div style="display:flex;align-items:flex-start;gap:10px;padding:6px 0 14px;font-size:13px;color:#636366;line-height:1.5">
      <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:17px;flex-shrink:0;margin-top:1px"></i>
      <span>La parcelle <strong style="color:#1c1c1e">${s.name}</strong> a déjà un capteur mesurant <strong style="color:#1c1c1e">${l}</strong>. Quel capteur conserver ?</span>
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
    <div style="height:6px"></div>`;const i=oe({title:"Conflit de métrique",body:n,doneLabel:"Annuler",onDone:()=>{}});n.querySelector("#keep-existing").addEventListener("click",()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{i.remove(),N("Liaison annulée")},280)}),n.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(d=>d!==s.id),e.parcelIds=[...e.parcelIds,s.id],i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{i.remove(),N(`Lié à ${s.name}`),a()},280)})}function bi(e,s={}){const t=re(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",ie);const a=Object.fromEntries(Ui.map(n=>[n.id,n]));function l(){var c;const n=t.querySelector("#sjrn-content"),i=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(h=>h.linkedType==="sensor"&&h.linkedId===e.id).map((h,S)=>({id:`dash-${S}`,type:"note",date:h.date,texte:h.text,user:h.auteur,_fromDashboard:!0})),d=[...qt(e.id),...i].sort((h,S)=>S.date.localeCompare(h.date)),u=h=>{const[S,o,p]=h.split("-");return`${p}/${o}/${S}`};let r=`
      <div style="padding:12px 16px 8px">
        <button class="btn-primary" id="sjrn-add-btn" style="width:100%;justify-content:center;gap:8px;font-size:15px;padding:11px 16px;border-radius:10px">
          <i class="bi bi-plus-circle-fill"></i> Ajouter une opération de maintenance
        </button>
      </div>
    `;d.length===0?r+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(r+='<div class="m-jrn-timeline">',d.forEach((h,S)=>{const o=a[h.type]||{label:h.type,icon:"bi-circle",color:"#8e8e93"},p=S===d.length-1,v=!!h._fromDashboard;r+=`
          <div class="m-jrn-entry" data-id="${h.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${o.color}18;color:${o.color};border-color:${o.color}40">
                <i class="bi ${o.icon}"></i>
              </div>
              ${p?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${u(h.date)}</span>
                <span style="font-size:12px;font-weight:600;color:${o.color}">${o.label}</span>
                ${v?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${h.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${h.texte?`<div class="m-jrn-texte">${h.texte}</div>`:""}
              ${h.user?`<div style="font-size:11px;color:#8e8e93;margin-top:2px">${h.user}</div>`:""}
            </div>
          </div>`}),r+="</div>"),n.innerHTML=r,(c=n.querySelector("#sjrn-add-btn"))==null||c.addEventListener("click",()=>gi(e.id,l)),n.querySelectorAll(".m-jrn-del").forEach(h=>{h.addEventListener("click",()=>{const S=parseInt(h.dataset.id);Yi(e.id,qt(e.id).filter(o=>o.id!==S)),l()})})}l(),s.openForm&&gi(e.id,l)}function gi(e,s){const t=new Date().toISOString().slice(0,10),a=document.createElement("div");a.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-sheet-input-label" style="font-size:12px;color:#8e8e93;margin-bottom:4px">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${Ui.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
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
    </div>`,oe({title:"Opération de maintenance",body:a,doneLabel:"Enregistrer",onDone:()=>{const l=a.querySelector("#sjf-type").value,n=a.querySelector("#sjf-date").value||t,i=a.querySelector("#sjf-user").value.trim()||"Jean Dupont",d=a.querySelector("#sjf-texte").value.trim();Yi(e,[{id:Date.now(),type:l,date:n,user:i,texte:d},...qt(e)]),s()}}),setTimeout(()=>{var l;return(l=a.querySelector("#sjf-texte"))==null?void 0:l.focus()},350)}const yi=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:jt},Symbol.toStringTag,{value:"Module"})),Be=100,xi=1,xt=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Cn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},kn={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function it(e,s){return(kn[e]||[]).includes(s)}function An(e){return Cn[e]||e}function Mn(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const st=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Tn(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function In(e,s){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const a=s==="admin",l=ne.filter(x=>x.id!==Be),n=Object.fromEntries(W.map(x=>[x.id,x])),i=Object.fromEntries(ne.map(x=>[x.id,x]));let d=null,u=null;const r={};let c="carte",h="pluie",S="7 derniers jours",o="all";function p(x){const k=`${x}-${h}-${S}`;return k in r||(r[k]=Tn(h)),r[k]}function v(){if(a){if(o==="all")return G;if(o===String(Be)){const w=new Set(W.filter(g=>g.orgId===Be).map(g=>g.id));return G.filter(g=>g.parcelIds.some($=>w.has($)))}const b=new Set(W.filter(w=>String(w.orgId)===o).map(w=>w.id));return G.filter(w=>w.parcelIds.some(g=>b.has(g)))}const x=new Set(W.filter(b=>b.orgId===xi).map(b=>b.id)),k=G.filter(b=>b.parcelIds.some(w=>x.has(w))),A=G.filter(b=>!b.parcelIds.some(w=>x.has(w))&&xt.includes(b.model));return o==="mine"?k:o==="network"?A:[...k,...A]}function y(x){const k=x.parcelIds.length?n[x.parcelIds[0]]:null;if(!k)return null;const A=(x.id*7919%1e3-500)/1e6,b=(x.id*6271%1e3-500)/1e6;return{lat:k.lat+A,lng:k.lng+b,name:k.name}}function L(x){var A,b;const k=x.parcelIds.length?n[x.parcelIds[0]]:null;return(k?(A=i[k.orgId])==null?void 0:A.ville:null)||((b=i[x.orgId])==null?void 0:b.ville)||null}function f(){if(d){try{d.remove()}catch{}d=null,u=null}}function m(){f();const x=st.find(g=>g.id===h)||st[0],k=v();let A;if(a)A=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${Be}"${o===String(Be)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${l.map(g=>`<option value="${g.id}"${o===String(g.id)?" selected":""}>${g.name}</option>`).join("")}
        </select>`;else{const g=ne.find(M=>M.id===xi),$=ne.find(M=>M.id===Be);A=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${o==="all"?" selected":""}>Tout le réseau</option>
          <option value="network"${o==="network"?" selected":""}>${($==null?void 0:$.name)||"Breiz'Agri Conseil"} uniquement</option>
          <option value="mine"${o==="mine"?" selected":""}>${(g==null?void 0:g.name)||"Mon organisation"} uniquement</option>
        </select>`}const b=[...k].sort((g,$)=>{const M=it(g.model,h),T=it($.model,h);return M&&!T?-1:!M&&T?1:M?p($.id)-p(g.id):0}),w=b.length?`<div class="m-plain-list">${b.map(g=>{const $=xt.includes(g.model),T=it(g.model,h)?`<span class="m-sensor-val">${p(g.id)} ${x.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${g.id}">
              <div class="m-sensor-icon" style="background:${$?"#0172A420":"#5b8dd920"};color:${$?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${An(g.model)} - ${g.model}</span>
                <span class="m-sensor-sub">${[L(g),Mn(g)].filter(Boolean).join(" - ")}</span>
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
            ${st.map(g=>`<option value="${g.id}"${g.id===h?" selected":""}>${g.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${x.aggs.map(g=>`<option${g===S?" selected":""}>${g}</option>`).join("")}
          </select>
        </div>
        ${A}
      </div>
      ${c==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${w}</div>`}`,C(),c==="carte"&&E(k,x)}function E(x,k){const A=window.L;A&&setTimeout(()=>{const b=t.querySelector("#sensor-map");if(!b)return;d=A.map(b,{zoomControl:!1,attributionControl:!1}),A.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(d);const w=[];x.forEach(g=>{const $=y(g);if(!$)return;const M=it(g.model,h),T=xt.includes(g.model),P=A.circleMarker([$.lat,$.lng],{radius:M?10:7,color:"#fff",weight:2,fillColor:T?"#0172A4":"#5b8dd9",fillOpacity:M?.95:.45}).addTo(d);M&&P.bindTooltip(`${p(g.id)} ${k.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),P.on("click",()=>jt(g,"donnees",s)),w.push([$.lat,$.lng])}),w.length&&(u=w,d.fitBounds(w,{padding:[32,32]})),d.invalidateSize()},0)}window.addEventListener("m-tab-change",x=>{x.detail==="capteurs"&&(m(),c==="carte"&&d&&setTimeout(()=>{d.invalidateSize(),u!=null&&u.length&&d.fitBounds(u,{padding:[32,32]})},50))});function C(){var x,k,A;t.querySelectorAll(".m-view-btn").forEach(b=>b.addEventListener("click",()=>{c=b.dataset.view,m()})),(x=t.querySelector("#metric-sel"))==null||x.addEventListener("change",b=>{var w;h=b.target.value,S=((w=st.find(g=>g.id===h))==null?void 0:w.defaultAgg)||"",m()}),(k=t.querySelector("#agg-sel"))==null||k.addEventListener("change",b=>{S=b.target.value,m()}),(A=t.querySelector("#org-filter"))==null||A.addEventListener("change",b=>{o=b.target.value,m()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(b=>{b.addEventListener("click",()=>{const w=G.find(g=>g.id===+b.dataset.sensorId);w&&jt(w,"donnees",s)})})}m(),window.addEventListener("weenat-sensor-renamed",()=>{c==="liste"&&m()})}const jn=["Essentiel","Plus","Expert"],qn=["Administrateur","Agent","Lecteur"],$i=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function Pn(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join("")}function Dn(e){const s=(e||"").match(/(\d{5})/);if(s){const t=e.indexOf(s[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:s[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function wi({rue:e,cp:s,ville:t}){return[e,s&&t?`${s} ${t}`:s||t].filter(Boolean).join(", ")}function $t(e){if(!e)return"—";const[s,t,a]=e.split("-");return`${a}/${t}/${s}`}function Si(){const e=[],s=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let a=11;a>=0;a--){const l=new Date(s.getFullYear(),s.getMonth()-a,1),n=l.getFullYear(),i=String(l.getMonth()+1).padStart(2,"0"),d=a>0?a===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${n}-${i}`,dateEmission:`${n}-${i}-01`,montant:l.getMonth()===11?1980:t[a%t.length],statut:d})}return e.reverse()}function Hn(e,s){if(!e)return{};const t=s==="admin",a=ne.find(A=>A.id===(t?ut:Gt));if(!a)return{};const n=(t?pt.filter(A=>{var b;return!((b=A.orgIds)!=null&&b.length)||A.orgIds.includes(ut)}):pt.filter(A=>{var b;return(b=A.orgIds)==null?void 0:b.includes(Gt)})).filter(A=>A.statut!=="inactif").map(A=>({...A})),i=ne.filter(A=>A.id!==ut&&A.statut!=="inactif").length,d=Dn(a.adresse||""),u={rue:"",cp:"",ville:""},r={name:a.name,siret:a.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:d,adresseLivrai:u,pays:"France",markerLat:a.lat||48.117,markerLng:a.lng||-1.678,plan:a.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":a.codeAdherent||"CTR-2022-00418",dateAdhesion:a.dateAdhesion||"2022-03-15",licencesMembres:t?pt.length:3,licencesAdherents:t?i:null,licencesIntegrations:t?27:2}};let c=null,h=null;function S(){if(!h)return;const A=e.querySelector(`#${h}`);if(!A)return;if(c){try{c.remove()}catch{}c=null}const b=window.L;b&&(c=b.map(A,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),b.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(c),c.setView([r.markerLat,r.markerLng],14),b.marker([r.markerLat,r.markerLng],{draggable:!1}).addTo(c),setTimeout(()=>c==null?void 0:c.invalidateSize(),50))}function o(){if(h=`expl-map-${Math.random().toString(36).slice(2,8)}`,c){try{c.remove()}catch{}c=null}const A=wi(r.adresseFactu)||"—",b=wi(r.adresseLivrai),w=t?Si():[],g=w.slice(0,3),$=w.length>3,M=n.slice(0,3),T=n.length>3;function P(z,ee){const ce=z.statut==="payée"?"#30d158":"#ff9f0a",U=z.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${ee?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${z.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${z.numero}</span>
            <span class="m-list-row-sub">${$t(z.dateEmission)} · ${z.montant.toLocaleString("fr-FR")} € HT</span>
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
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${A}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${b||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
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
      <div id="${h}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${r.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${$t(r.contrat.dateAdhesion)}</span>
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
        ${g.map((z,ee)=>P(z,!$&&ee===g.length-1)).join("")}
        ${$?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${w.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${n.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${n.length?[...M.map((z,ee)=>`
            <div class="m-list-row${!T&&ee===M.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${ee}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${z.prenom} ${z.nom}</span>
                <span class="m-list-row-sub">${z.role}</span>
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
          ${$i.slice(0,5).map((z,ee)=>`
            <div class="m-list-row${ee===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${Pn(z.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${z.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${z.distance} km <br> ${z.capteurs} capteurs <br> ${z.parcelles} parcelles <br> ${z.adherents} adhérents <br> </div>
                <button class="m-join-net-btn" data-net-idx="${ee}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
              </div>
            </div>`).join("")}
        </div>
      </div>
      `}
      <div style="height:32px"></div>`,p()}function p(){var A,b;e.querySelectorAll(".m-list-row[data-action]").forEach(w=>{w.addEventListener("click",()=>{switch(w.dataset.action){case"name":v("Nom de l'exploitation",r.name,g=>{r.name=g,o()});break;case"siret":v("SIRET",r.siret,g=>{r.siret=g,o()});break;case"metier":L();break;case"adresse-factu":y("Adresse de facturation",r.adresseFactu,g=>{r.adresseFactu=g,o()});break;case"adresse-livrai":y("Adresse de livraison",r.adresseLivrai,g=>{r.adresseLivrai=g,o()});break;case"pays":v("Pays",r.pays,g=>{r.pays=g,o()});break;case"plan":f("Abonnement",jn,r.plan,g=>{r.plan=g,o()});break;case"facture":N(`PDF ${w.dataset.factureId} téléchargé`);break;case"voir-factures":C();break;case"voir-membres":E();break}})}),e.querySelectorAll("[data-member-idx]").forEach(w=>{w.addEventListener("click",()=>m(+w.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(w=>{w.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach($=>{const M=$===w;$.style.background=M?"#fff":"transparent",$.style.color=M?"#000":"#8e8e93"});const g=w.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=g==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=g==="independante"?"":"none"})}),(A=e.querySelector("#btn-ajouter-membre"))==null||A.addEventListener("click",x),(b=e.querySelector("#btn-quitter-reseau"))==null||b.addEventListener("click",()=>{const w=document.createElement("div");w.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,oe({title:"Quitter le réseau ?",body:w,doneLabel:"Confirmer",onDone:()=>N("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(w=>{w.addEventListener("click",()=>{const g=$i[+w.dataset.netIdx];N(`Demande envoyée à ${g.name}`)})})}function v(A,b,w){const g=document.createElement("div");g.innerHTML=`<input class="m-sheet-input" type="text" value="${(b||"").replace(/"/g,"&quot;")}" placeholder="${A}">`;const $=g.querySelector("input");oe({title:A,body:g,doneLabel:"Enregistrer",onDone:()=>{const M=$.value.trim();M&&(w(M),N("Enregistré"))}}),setTimeout(()=>$.focus(),300)}function y(A,b,w){const g=document.createElement("div");g.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(b.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${b.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(b.ville||"").replace(/"/g,"&quot;")}">`,oe({title:A,body:g,doneLabel:"Enregistrer",onDone:()=>{w({rue:g.querySelector("#f-rue").value.trim(),cp:g.querySelector("#f-cp").value.trim(),ville:g.querySelector("#f-ville").value.trim()}),N("Enregistré")}}),setTimeout(()=>g.querySelector("#f-rue").focus(),300)}function L(){const A=new Set(r.metiers),b=document.createElement("div"),w=()=>{b.innerHTML=ns.map(g=>`
        <div class="m-sheet-option${A.has(g)?" m-sheet-option--active":""}" data-m="${g}" style="justify-content:space-between">
          <span>${g}</span>
          ${A.has(g)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),b.querySelectorAll("[data-m]").forEach(g=>{g.addEventListener("click",()=>{const $=g.dataset.m;A.has($)?A.delete($):A.add($),w()})})};w(),oe({title:"Métiers",body:b,doneLabel:"Valider",onDone:()=>{r.metiers=[...A],o()}})}function f(A,b,w,g){const $=document.createElement("div");$.innerHTML=b.map((T,P)=>`
      <div class="m-sheet-option${T===w?" m-sheet-option--active":""}" data-i="${P}">
        <span>${T}</span>${T===w?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const M=oe({title:A,body:$,doneLabel:"Fermer",onDone:()=>{}});$.querySelectorAll(".m-sheet-option").forEach(T=>{T.addEventListener("click",()=>{g(b[+T.dataset.i]),M.classList.remove("m-sheet-overlay--show"),setTimeout(()=>M.remove(),280),N("Enregistré")})})}function m(A,b){const w=n[A];if(!w)return;const g=document.createElement("div");g.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${w.role}</span></div>
        ${w.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${w.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${w.prenom} ${w.nom}</a>
      </div>`;const $=oe({title:`${w.prenom} ${w.nom}`,body:g,doneLabel:"Fermer",onDone:()=>{}});g.querySelector("#mem-delete").addEventListener("click",()=>{n.splice(A,1),$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{$.remove(),o(),N("Membre retiré"),b==null||b()},280)})}function E(){let A="",w=20;function g(){if(!A)return n;const P=A.toLowerCase();return n.filter(z=>`${z.prenom} ${z.nom}`.toLowerCase().includes(P)||(z.email||"").toLowerCase().includes(P)||(z.role||"").toLowerCase().includes(P))}const $=re(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),M=$.querySelector("#mbr-list-content");function T(){var ce;const P=g(),z=P.slice(0,w),ee=P.length-z.length;M.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${P.length} membre${P.length!==1?"s":""}${A?" trouvé"+(P.length!==1?"s":""):" actif"+(P.length!==1?"s":"")}</div>
        <div class="m-list">
          ${z.length?z.map((U,ve)=>`<div class="m-list-row${ve===z.length-1&&ee===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${n.indexOf(U)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${U.prenom} ${U.nom}</span>
                <span class="m-list-row-sub">${U.role}${U.email?" · "+U.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${ee>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${ee} de plus</span>
            </div>`:""}
          ${P.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,M.querySelectorAll("[data-mbr-idx]").forEach(U=>{U.addEventListener("click",()=>m(+U.dataset.mbrIdx,T))}),(ce=M.querySelector("#mbr-load-more"))==null||ce.addEventListener("click",()=>{w+=20,T()})}$.querySelector(".m-detail-back").addEventListener("click",ie),$.querySelector("#mbr-invite-btn").addEventListener("click",x),$.querySelector("#mbr-search").addEventListener("input",P=>{A=P.target.value,w=20,T()}),T()}function C(){const A=Si();let b="";function w(){if(!b)return A;const T=b.toLowerCase();return A.filter(P=>P.numero.toLowerCase().includes(T)||P.statut.toLowerCase().includes(T)||String(P.montant).includes(T))}const g=re(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),$=g.querySelector("#fac-list-content");function M(){const T=w();$.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${T.length} facture${T.length!==1?"s":""}</div>
        <div class="m-list">
          ${T.length?T.map((P,z)=>{const ee=P.statut==="payée"?"#30d158":"#ff9f0a",ce=P.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${z===T.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${P.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${P.numero}</span>
                <span class="m-list-row-sub">${$t(P.dateEmission)} · ${P.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${ee};flex-shrink:0;margin-right:4px">${ce}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,$.querySelectorAll("[data-fac-id]").forEach(P=>{P.addEventListener("click",()=>N(`PDF ${P.dataset.facId} téléchargé`))})}g.querySelector(".m-detail-back").addEventListener("click",ie),g.querySelector("#fac-search").addEventListener("input",T=>{b=T.target.value,M()}),M()}function x(){const A=document.createElement("div");A.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${qn.map(b=>`<option>${b}</option>`).join("")}
      </select>`,oe({title:"Ajouter un membre",body:A,doneLabel:"Inviter",onDone:()=>{A.querySelector("#inv-email").value.trim()&&N("Invitation envoyée")}}),setTimeout(()=>A.querySelector("#inv-email").focus(),300)}o();function k(){requestAnimationFrame(()=>setTimeout(S,100))}return{onAdd:null,refresh:k}}const zn=100,_n=["Essentiel","Plus","Expert"],Bn={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function wt(e){return Bn[e]||{label:e||"—",color:"#8e8e93"}}function Fn(e,s){if(!e)return{};if(s!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=ne.filter(o=>o.id!==zn&&o.statut!=="inactif").map(o=>({...o})),a={...xe,siege:{...xe.siege},antennes:xe.antennes.map(o=>({...o}))},l={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function n(o,p,v,y){return o.slice(p,v).map((L,f)=>{const m=p+f,E=wt(L.statut),C=L.statut==="demande en attente";return`
        <div class="m-list-row${m===y?" m-list-row--last":""} m-tappable" data-org-idx="${m}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${L.proprietaire||L.name}</span>
            <span class="m-list-row-sub">${L.name} · ${L.plan||"—"}</span>
          </div>
          ${C?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${m}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${m}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${E.color};flex-shrink:0;margin-right:4px">${E.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function i(){let o="",v=20;function y(){if(!o)return t;const E=o.toLowerCase();return t.filter(C=>(C.proprietaire||C.name||"").toLowerCase().includes(E)||(C.name||"").toLowerCase().includes(E)||(C.email||"").toLowerCase().includes(E)||(C.codeAdherent||"").toLowerCase().includes(E))}const L=re(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),f=L.querySelector("#adh-list-content");function m(){var A;const E=y(),C=E.slice(0,v),x=E.length-C.length,k=E.filter(b=>b.statut==="actif"||b.statut==="actif en essai").length;f.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${o?E.length+" résultat"+(E.length!==1?"s":""):k+" actif"+(k!==1?"s":"")+" · "+E.length+" total"}</div>
        <div class="m-list">
          ${C.length?C.map((b,w)=>{const g=t.indexOf(b),$=wt(b.statut),M=b.statut==="demande en attente";return`
              <div class="m-list-row${w===C.length-1&&x===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${g}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${b.proprietaire||b.name}</span>
                  <span class="m-list-row-sub">${b.name} · ${b.plan||"—"}</span>
                </div>
                ${M?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${g}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${g}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${$.color};flex-shrink:0;margin-right:4px">${$.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${x>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${x} de plus</span>
            </div>`:""}
        </div>`,f.querySelectorAll("[data-lp-org-idx]").forEach(b=>{b.addEventListener("click",w=>{w.target.closest("[data-adh-action]")||h(t[+b.dataset.lpOrgIdx],+b.dataset.lpOrgIdx,m)})}),f.querySelectorAll("[data-adh-action]").forEach(b=>{b.addEventListener("click",w=>{w.stopPropagation();const g=+b.dataset.lpAdhIdx,$=b.dataset.adhAction,M=t[g];M&&($==="valider"?(M.statut="actif",d(),m(),N(`${M.proprietaire||M.name} validé`)):(t.splice(g,1),d(),m(),N("Demande rejetée")))})}),(A=f.querySelector("#adh-load-more"))==null||A.addEventListener("click",()=>{v+=20,m()})}L.querySelector(".m-detail-back").addEventListener("click",ie),L.querySelector("#adh-invite-btn").addEventListener("click",S),L.querySelector("#adh-search").addEventListener("input",E=>{o=E.target.value,v=20,m()}),m()}function d(){var f;const o=t.filter(m=>m.statut!=="inactif"),p=`${a.siege.adresse}, ${a.siege.codePostal} ${a.siege.ville}`;e.innerHTML=`
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

      <div class="m-list-section-header">Adhérents — ${o.length} actifs</div>
      <div class="m-list">
        ${n(t,0,Math.min(5,t.length),t.length>5?-1:t.length-1)}
        ${t.length>5?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${t.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(m=>{m.addEventListener("click",E=>{E.target.closest("[data-adh-action]")||h(t[+m.dataset.orgIdx],+m.dataset.orgIdx)})}),(f=e.querySelector('[data-action="voir-adherents"]'))==null||f.addEventListener("click",i),e.querySelectorAll("[data-adh-action]").forEach(m=>{m.addEventListener("click",E=>{E.stopPropagation();const C=+m.dataset.adhIdx,x=m.dataset.adhAction,k=t[C];k&&(x==="valider"?(k.statut="actif",d(),N(`${k.proprietaire||k.name} validé`)):(t.splice(C,1),d(),N("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(m=>{m.addEventListener("click",()=>{switch(m.dataset.action){case"net-nom":u("Nom du réseau",a.nom,E=>{a.nom=E,d()});break;case"net-siege":r();break;case"net-antennes":c();break}})});const v=e.querySelector("#tog-meteo"),y=e.querySelector("#tog-sol"),L=e.querySelector("#tog-irrigation");v==null||v.addEventListener("change",()=>{l.partageMeteo=v.checked,N("Préférence enregistrée")}),y==null||y.addEventListener("change",()=>{l.partageSol=y.checked,N("Préférence enregistrée")}),L==null||L.addEventListener("change",()=>{l.partageIrrigation=L.checked,N("Préférence enregistrée")})}function u(o,p,v){const y=document.createElement("div");y.innerHTML=`<input class="m-sheet-input" type="text" value="${(p||"").replace(/"/g,"&quot;")}" placeholder="${o}">`;const L=y.querySelector("input");oe({title:o,body:y,doneLabel:"Enregistrer",onDone:()=>{const f=L.value.trim();f&&(v(f),N("Enregistré"))}}),setTimeout(()=>L.focus(),300)}function r(){const o=document.createElement("div");o.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${a.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${a.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${a.siege.ville.replace(/"/g,"&quot;")}">`,oe({title:"Adresse du siège",body:o,doneLabel:"Enregistrer",onDone:()=>{a.siege.adresse=o.querySelector("#s-rue").value.trim(),a.siege.codePostal=o.querySelector("#s-cp").value.trim(),a.siege.ville=o.querySelector("#s-ville").value.trim(),d(),N("Enregistré")}}),setTimeout(()=>o.querySelector("#s-rue").focus(),300)}function c(){const o=document.createElement("div");(()=>{o.innerHTML=a.antennes.map((v,y)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${v.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${v.adresse}, ${v.codePostal} ${v.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${v.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),oe({title:"Antennes",body:o,doneLabel:"Fermer",onDone:()=>{}})}function h(o,p,v){var C,x;const y=wt(o.statut),L=o.statut==="invitation en attente",f=`https://app.weenat.com/invitation?code=${o.codeAdherent||"ADZ-XXX"}`,m=document.createElement("div");m.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${o.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${o.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${o.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${o.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${W.filter(k=>k.orgId===o.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const k=new Set(W.filter(A=>A.orgId===o.id).map(A=>A.id));return G.filter(A=>k.has(A.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${y.color};font-weight:600">${y.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${o.dateAdhesion?o.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${L?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const E=oe({title:o.name,body:m,doneLabel:"Fermer",onDone:()=>{}});(C=m.querySelector("#lnk-copy"))==null||C.addEventListener("click",()=>{var k;(k=navigator.clipboard)==null||k.writeText(f).catch(()=>{}),N("Lien copié !")}),(x=m.querySelector("#lnk-cancel"))==null||x.addEventListener("click",()=>{o.statut="inactif",E.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{E.remove(),d(),v==null||v(),N("Invitation annulée")},280)}),m.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(p,1),E.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{E.remove(),d(),v==null||v(),N("Adhérent supprimé")},280)})}function S(){const o=document.createElement("div");o.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${_n.map(p=>`<option>${p}</option>`).join("")}
      </select>`,oe({title:"Inviter un adhérent",body:o,doneLabel:"Envoyer",onDone:()=>{const p=o.querySelector("#adh-email").value.trim(),v=o.querySelector("#adh-code").value.trim();if(!p||!v){N("Email et code requis");return}t.push({id:Date.now(),name:p,proprietaire:p,email:p,codeAdherent:v,plan:o.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),d(),N("Invitation envoyée")}}),setTimeout(()=>o.querySelector("#adh-email").focus(),300)}return d(),{onAdd:S}}Ei(W);const On=new URLSearchParams(window.location.search),Se=On.get("role")==="adherent"?"adherent":"admin";function Zi(){const e=document.getElementById("status-time");if(!e)return;const s=new Date;e.textContent=s.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}Zi();setInterval(Zi,1e4);const ke=["dashboard","parcelles","capteurs","alertes","parametres"];let ot="dashboard";function De(e){var s,t;!ke.includes(e)||e===ot||(ot=e,document.querySelectorAll(".m-screen").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),(s=document.getElementById(`screen-${e}`))==null||s.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function Rn(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const s=document.createElement("div");s.id="abandon-modal",s.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",s.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(s),s.querySelector("#abandon-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#abandon-ok").addEventListener("click",()=>{s.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var s;e.target.closest(".m-navbar-logo")&&((s=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||s.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const s=e.target.closest(".nav-item");if(!s)return;const t=s.dataset.tab;Ut()>0&&as()?Rn(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),De(t)}):(Ut()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),De(t))});let ge=null,Ze=null;const Ki=50,Ke=document.getElementById("screen-stack");Ke.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){ge=null;return}ge=e.clientX,Ze=e.clientY});Ke.addEventListener("mouseup",e=>{if(ge===null)return;const s=e.clientX-ge,t=e.clientY-Ze;if(Math.abs(s)>Ki&&Math.abs(s)>Math.abs(t)){const a=ke.indexOf(ot);s<0&&a<ke.length-1&&De(ke[a+1]),s>0&&a>0&&De(ke[a-1])}ge=null,Ze=null});Ke.addEventListener("mouseleave",()=>{ge=null});Ke.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){ge=null;return}ge=e.touches[0].clientX,Ze=e.touches[0].clientY},{passive:!0});Ke.addEventListener("touchend",e=>{if(ge===null)return;const s=e.changedTouches[0].clientX-ge,t=e.changedTouches[0].clientY-Ze;if(Math.abs(s)>Ki&&Math.abs(s)>Math.abs(t)){const a=ke.indexOf(ot);s<0&&a<ke.length-1&&De(ke[a+1]),s>0&&a>0&&De(ke[a-1])}ge=null},{passive:!0});const Nn=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...Se==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],ct={};function Xi(e){const s=document.getElementById("param-plus-btn");if(!s)return;const t=ct[e];s.onclick=(t==null?void 0:t.onAdd)??(()=>{var a;return(a=window.showMobileAddPage)==null?void 0:a.call(window)})}function Vn(){var s;const e=document.getElementById("param-segment");e&&(Se==="adherent"&&((s=document.getElementById("param-reseau"))==null||s.style.setProperty("display","none")),Nn.forEach((t,a)=>{const l=document.createElement("button");l.className="m-segment-btn"+(a===0?" active":""),l.textContent=t.label,l.dataset.target=t.id,l.addEventListener("click",()=>{var n,i,d;e.querySelectorAll(".m-segment-btn").forEach(u=>u.classList.remove("active")),l.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(u=>u.classList.remove("active")),(n=document.getElementById(t.id))==null||n.classList.add("active"),Xi(t.id),(d=(i=ct[t.id])==null?void 0:i.refresh)==null||d.call(i)}),e.appendChild(l)}))}Vn();Gs(document.getElementById("screen-dashboard"),Se);hn(document.getElementById("screen-parcelles"),Se);In(document.getElementById("screen-capteurs"),Se);hs(document.getElementById("screen-alertes"),Se);us(document.getElementById("param-compte"),Se);ct["param-exploitation"]=Hn(document.getElementById("param-exploitation"),Se);ct["param-reseau"]=Fn(document.getElementById("param-reseau"),Se);function Wn(){var a;const e=Se==="admin",s=document.getElementById("phone-screen");(a=document.getElementById("m-add-modal"))==null||a.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#f2f2f7;flex-shrink:0;border-bottom:.5px solid rgba(0,0,0,.1)">
      <span style="font-size:17px;font-weight:700">Ajouter</span>
      <button id="m-add-close" style="width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.07);border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <div style="overflow-y:auto;flex:1;padding:12px 16px">
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon exploitation</div>
        ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(l=>`
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(l=>{l.addEventListener("click",()=>{var n;t.remove(),(l.dataset.action==="note"||l.dataset.action==="traitement")&&((n=window.openJournalModal)==null||n.call(window,l.dataset.action))})}),s.appendChild(t)}window.openMobileAddModal=Wn;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var s;(s=document.querySelector(`#${e} .m-navbar-action`))==null||s.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});Xi("param-compte");export{ie as a,re as p,oe as s};
