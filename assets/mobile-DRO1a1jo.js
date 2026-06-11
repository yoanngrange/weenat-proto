const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-lpmJKc3T.js","assets/sensors-CS05Ml5Z.js","assets/irrigations-C22Dtsoo.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-DHZTuoR0.js","assets/store-Cvb9jQ9w.js","assets/orgs-DnFmvGlp.js","assets/network-YzWdS0n_.js","assets/constants-DfU_DrBB.js","assets/members-CuDabgg3.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as ce}from"./plots-DHZTuoR0.js";import{d as Ui,b as Yi,c as Gt,e as qs}from"./store-Cvb9jQ9w.js";import{s as ne}from"./sensors-CS05Ml5Z.js";import{o as ge}from"./orgs-DnFmvGlp.js";import{n as De}from"./network-YzWdS0n_.js";import{I as pe,s as Ze,g as Ps}from"./irrigations-C22Dtsoo.js";import{I as oi,S as Zi,M as Ki,A as jt,a as di}from"./constants-DfU_DrBB.js";import{m as Dt}from"./members-CuDabgg3.js";const Xe=[];function xe(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),Xe.push(t),t}function he(){const e=Xe.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function ui(){return Xe.length}function js(){return Xe.some(e=>e.dataset.dirty==="true")}function Xi(){Xe.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{Xe.forEach(e=>e.remove()),Xe.length=0});const pi={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Ds=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],mi=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let Ne={};function qe(e){var l;const i=document.getElementById("phone-screen");(l=document.querySelector(".m-toast"))==null||l.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Qe({title:e,body:i,onDone:t,doneLabel:l="OK"}){var c;const n=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${l}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),s()}),o.addEventListener("click",p=>{p.target===o&&s()}),o}function vi(e,i,t){const l=document.createElement("div");l.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const n=l.querySelector("input");Qe({title:e,body:l,doneLabel:"Enregistrer",onDone:()=>{t(n.value.trim()),qe("Enregistré")}}),setTimeout(()=>n.focus(),300)}function bi(e,i,t,l){const n=document.createElement("div");n.innerHTML=i.map((s,c)=>`
    <div class="m-sheet-option${s===t?" m-sheet-option--active":""}" data-i="${c}">
      <span>${s}</span>
      ${s===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const o=Qe({title:e,body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{l(i[+s.dataset.i]),o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280),qe("Enregistré")})})}function zs(e,i){const t=document.createElement("div"),l=()=>{var n;t.innerHTML=e.map((o,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${o.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${o.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(o=>{o.addEventListener("input",()=>{e[+o.dataset.i][o.dataset.f]=o.value})}),t.querySelectorAll(".m-sheet-remove").forEach(o=>{o.addEventListener("click",()=>{e.splice(+o.dataset.i,1),l()})}),(n=t.querySelector(".m-sheet-add-phone"))==null||n.addEventListener("click",()=>{e.push({label:"",numero:""}),l()})};l(),Qe({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),qe("Enregistré")}})}function _s(e,i,t){const l=document.createElement("div");l.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,l.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var o;(o=navigator.clipboard)==null||o.writeText(e.value).catch(()=>{}),qe("Clé copiée !")});const n=Qe({title:"Clé API",body:l,doneLabel:"Fermer",onDone:()=>{}});l.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const o=i.findIndex(s=>s.id===e.id);o!==-1&&i.splice(o,1),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{n.remove(),t()},280),qe("Clé supprimée")})}function Hs(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function Bs(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");Qe({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const l=t.value.trim();if(!l){qe("Entrez un nom");return}const n={id:Date.now(),name:l,created:new Date().toLocaleDateString("fr-FR"),value:Hs()};e(n),qe("Clé générée")}}),setTimeout(()=>t.focus(),300)}function Fs(e,i){Ne={profile:JSON.parse(JSON.stringify(pi[i]||pi.admin)),langue:"Français",unites:mi[0]};const l=localStorage.getItem("mobile_avatarUrl")||null;function n(){const s=Ne.profile,c=l?`<img src="${l}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,p=s.apiKeys.map(d=>`
      <div class="m-list-row" data-key-id="${d.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${d.name}</span>
          <span class="m-list-row-sub">créée le ${d.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),r=s.phones.map((d,v)=>`
      <div class="m-list-row${v===s.phones.length-1&&s.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${d.label||"Numéro "+(v+1)}</span>
        <span class="m-list-row-value">${d.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");e.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${c}</div>
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
          <span class="m-list-row-value" id="val-langue">${Ne.langue}</span>
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
        ${p}
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
    `,o()}function o(){var c;const s=Ne.profile;(c=e.querySelector("#m-avatar-upload"))==null||c.addEventListener("change",p=>{const r=p.target.files[0];if(!r)return;const d=new FileReader;d.onload=v=>{localStorage.setItem("mobile_avatarUrl",v.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${v.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},d.readAsDataURL(r)}),e.querySelectorAll(".m-list-row[data-action]").forEach(p=>{p.addEventListener("click",()=>{switch(p.dataset.action){case"prenom":vi("Prénom",s.prenom,r=>{s.prenom=r,n()});break;case"nom":vi("Nom",s.nom,r=>{s.nom=r,n()});break;case"email":Qe({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>qe("Fonctionnalité à venir")});break;case"phones":zs(s.phones,r=>{s.phones=r,n()});break;case"mdp":Qe({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>qe("Fonctionnalité à venir")});break;case"langue":bi("Langue",Ds,Ne.langue,r=>{Ne.langue=r,e.querySelector("#val-langue").textContent=r});break;case"unites":bi("Unités",mi,Ne.unites,r=>{Ne.unites=r,e.querySelector("#val-unites").textContent=r.split(" ")[0]});break;case"gen-key":Bs(r=>{s.apiKeys.push(r),n()});break;case"delete":qe("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(p=>{p.addEventListener("click",()=>{const r=s.apiKeys.find(d=>d.id===+p.dataset.keyId);r&&_s(r,s.apiKeys,n)})}),e.querySelectorAll(".m-toggle input[data-notif]").forEach(p=>{p.addEventListener("change",()=>qe("Préférence enregistrée"))})}n()}function Q(e){var l;const i=document.getElementById("phone-screen");(l=document.querySelector(".m-toast"))==null||l.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function be({title:e,body:i,doneLabel:t="Fermer",onDone:l}={}){var c;const n=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{l==null||l(),s()}),o.addEventListener("click",p=>{p.target===o&&s()}),o}function ut({title:e,message:i="",confirmLabel:t="Confirmer",confirmColor:l="#ff3b30",onConfirm:n}){var p;const o=document.getElementById("phone-screen");(p=document.querySelector(".m-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd" style="justify-content:center;padding:12px 16px 8px">
        <span class="m-sheet-title">${e}</span>
      </div>
      <div class="m-sheet-body" style="padding:4px 16px 32px">
        ${i?`<p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px;text-align:center">${i}</p>`:""}
        <button id="sc-confirm" style="width:100%;padding:14px;background:${l};color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;margin-bottom:8px">${t}</button>
        <button id="sc-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
      </div>
    </div>`,o.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const c=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#sc-cancel").addEventListener("click",c),s.querySelector("#sc-confirm").addEventListener("click",()=>{c(),setTimeout(()=>n==null?void 0:n(),50)}),s.addEventListener("click",r=>{r.target===s&&c()})}function Rs(e){const i=3+e%5,t=Date.now();return Array.from({length:i},(l,n)=>{const o=e*17+n*7,s=1+n*(2+o%6),c=t-s*864e5-o%8*36e5,p=(1+o%5)*36e5+o%60*6e4,r=n===0&&o%7===0;return{start:new Date(c),end:r?null:new Date(c+p)}})}const Os=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Ns=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],fi={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},Vs={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function zt(e){if(!e)return"—";const[i,t,l]=e.split("-");return`${l}/${t}/${i}`}function hi(e){const i=e.sensorIds.map(l=>{const n=ne.find(o=>o.id===l);return n?`${n.model} ${n.serial}`:null}).filter(Boolean),t=e.parcelIds.map(l=>{const n=ce.find(o=>o.id===l);return(n==null?void 0:n.name)||null}).filter(Boolean);return[...i,...t]}function Ws(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const l=[...i==="adherent"?Ns:Os];function n(){if(!l.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=l.map(s=>{hi(s);const c=Vs[s.metric]||"bi-bell",p=s.statut==="actif";return`
        <div class="m-alert-card" data-id="${s.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${p?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${c}"></i>
            </div>
            <span class="m-alert-name">${s.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${p?"checked":""} data-id="${s.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${fi[s.metric]||s.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${zt(s.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${s.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),o()}function o(){t.querySelectorAll(".m-alert-toggle input").forEach(s=>{s.addEventListener("change",c=>{c.stopPropagation();const p=+s.dataset.id,r=l.find(d=>d.id===p);r&&(r.statut=s.checked?"actif":"inactif",n(),Q(`Alerte ${s.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-more-btn").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation();const p=+s.dataset.id,r=l.find(b=>b.id===p);if(!r)return;hi(r);const d=document.createElement("div"),v=Rs(p);function $(){const b=r.sensorIds.map((h,w)=>{const x=ne.find(M=>M.id===h);return x?{label:`${x.model} ${x.serial}`,type:"sensor",idx:w}:null}).filter(Boolean),m=r.parcelIds.map((h,w)=>{const x=ce.find(M=>M.id===h);return x?{label:x.name,type:"parcel",idx:w}:null}).filter(Boolean),g=[...b,...m];return g.length?g.map(h=>`<div class="m-perimetre-item" data-type="${h.type}" data-idx="${h.idx}">
                <span>${h.label}</span>
                <button class="m-perimetre-del" data-type="${h.type}" data-idx="${h.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const a=document.createElement("div");a.className="m-sheet-info-rows";function u(){var w;d.innerHTML="";const b=document.createElement("div");b.className="m-sheet-info-rows",b.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${fi[r.metric]||r.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${zt(r.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${zt(r.created)}</span></div>
            ${(w=r.phones)!=null&&w.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${r.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${r.statut}</span></div>`;const m=document.createElement("div");m.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",m.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${$()}</div>`,b.appendChild(m),d.appendChild(b);const g=x=>x.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+x.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${v.map(x=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${x.end?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${g(x.start)} → <span style="color:${x.end?"inherit":"#ff9f0a"}">${x.end?g(x.end):"En cours"}</span></div>
              </div></div>`).join("")}`,d.appendChild(h),d.querySelectorAll(".m-perimetre-del").forEach(x=>{x.addEventListener("click",M=>{M.stopPropagation();const E=x.dataset.type,y=+x.dataset.idx;E==="sensor"?r.sensorIds.splice(y,1):r.parcelIds.splice(y,1),u(),n(),Q("Retiré du périmètre")})})}u(),be({title:r.name,body:d,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-alert-card").forEach(s=>{s.addEventListener("click",c=>{if(c.target.closest(".m-alert-toggle")||c.target.closest(".m-alert-more-btn"))return;const p=+s.dataset.id,r=l.find($=>$.id===p);if(!r)return;const d=document.createElement("div");d.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const v=be({title:r.name,body:d,doneLabel:"Fermer",onDone:()=>{}});d.querySelector("#al-edit").addEventListener("click",()=>{v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),Q("Modification à venir")},280)}),d.querySelector("#al-delete").addEventListener("click",()=>{const $=l.findIndex(a=>a.id===p);$!==-1&&l.splice($,1),v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),n()},280),Q("Alerte supprimée")})})})}n()}const Js="modulepreload",Gs=function(e){return"/weenat-proto/"+e},gi={},ye=function(i,t,l){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(t.map(p=>{if(p=Gs(p),p in gi)return;gi[p]=!0;const r=p.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${d}`))return;const v=document.createElement("link");if(v.rel=r?"stylesheet":Js,r||(v.as="script"),v.crossOrigin="",v.href=p,c&&v.setAttribute("nonce",c),document.head.appendChild(v),r)return new Promise(($,a)=>{v.addEventListener("load",$),v.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return n.then(s=>{for(const c of s||[])c.status==="rejected"&&o(c.reason);return i().catch(o)})};function et(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const _e=new Date().toISOString().split("T")[0];function ct(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,l,n]=e.split("-");return`${parseInt(n)} ${i[parseInt(l)-1]} ${t}`}function yi(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,l]=e.split("-");return`${parseInt(l)} ${i[parseInt(t)-1]}`}function Ut(e){return!e||e===_e?"":e<_e?'<span class="irr-pill irr-pill--past">Passée · Effectuée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function Yt(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Tt(e,i,t){const l=i.length>0&&i.every(o=>t.has(o.id)),n=[...i].sort((o,s)=>o.name.localeCompare(s.name,"fr")).map(o=>{const s=t.has(o.id);return`<div class="irr-plot-row${s?" irr-plot-row--sel":""}" data-pid="${o.id}">
      <div><div class="irr-plot-name">${o.name}</div>${Us(o)}</div>
      ${Yt(s,!1)}
    </div>`}).join("");return`<div class="irr-sel-all-row" id="irr-sel-all">
    <span class="irr-sel-all-lbl">${l?"Tout désélectionner":"Tout sélectionner"}</span>
    ${Yt(l,!1)}
  </div>${n}`}function Zt({title:e,body:i,onSave:t,onDelete:l,saveLabel:n="Enregistrer"}){var p,r;const o=document.getElementById("phone-screen");(p=document.querySelector(".irr-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="irr-sheet-overlay",s.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${l?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${n}</button>
      </div>
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const c=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",d=>{d.target===s&&c()}),(r=s.querySelector("#iss-del"))==null||r.addEventListener("click",()=>{l==null||l(),c()}),s.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),c()}),s}function Qi(e,i,t){const l=i.filter(c=>e.has(c.id)&&(!c.irrigation||c.irrigation==="Non irrigué"));if(!l.length){t();return}const n=document.createElement("div");n.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${l.length===1?`<strong>${l[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${l.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" class="m-prev-select" style="margin-bottom:0">
      <option value="">— Choisir un type —</option>
      ${oi.map(c=>`<option value="${c}">${c}</option>`).join("")}
    </select>`;const s=Zt({title:"Type d'irrigation",body:n,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const c=n.querySelector("#irr-type-ask").value;c&&l.forEach(p=>{p.irrigation=c,Ui(p.id,{irrigation:c})}),t()}}).querySelector("#iss-del");s&&(s.textContent="Passer",s.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function Us(e){const i=e.crop,t=e.irrigation||null,l=e.substrate?"Substrat : "+e.substrate:e.texture||null,n=[i,t||"<em>type irrigation non renseigné</em>",l].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${n.join(" · ")}</span>`}function es(e,i,t=null,l=!1){let n=new Set((t==null?void 0:t.ids)??[]),o=_e,s=10;function c(){return Tt([],e,n)}function p(a){a.querySelector("#irr-date-hint").innerHTML=Ut(o)}function r(a){const u=n.size,b=a.querySelector(".irr-summary"),m=a.querySelector(".irr-save-btn");!b||!m||(t?(b.textContent="",m.disabled=!1,m.textContent="Enregistrer"):(b.textContent=u===0?"":`${u} parcelle${u>1?"s":""} · ${s} mm`,m.disabled=u===0,m.textContent="Enregistrer"))}function d(a){var u;a.querySelectorAll(".irr-plot-row").forEach(b=>{b.addEventListener("click",()=>{const m=+b.dataset.pid;n.has(m)?n.delete(m):n.add(m),a.querySelector("#irr-sel-list").innerHTML=c(),d(a),r(a)})}),(u=a.querySelector("#irr-sel-all"))==null||u.addEventListener("click",()=>{const b=e.some(m=>!n.has(m.id));e.forEach(m=>b?n.add(m.id):n.delete(m.id)),a.querySelector("#irr-sel-list").innerHTML=c(),d(a),r(a)})}const v=t?`<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${t.ids.length>1?"Parcelles concernées":"Parcelle concernée"} : ${t.label}</span>
       </div>`:`<div id="irr-sel-list">${c()}</div>`,$=et(xe(`
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
      ${v}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${t?"":"disabled"}>Enregistrer</button>
    </div>
  `));$.dataset.dirty="true",t||d($),r($),$.querySelector("#irr-back").addEventListener("click",he),$.querySelector("#irr-date").addEventListener("change",a=>{o=a.target.value,p($),r($)}),$.querySelector("#irr-qty").addEventListener("input",a=>{s=parseInt(a.target.value)||1,r($)}),$.querySelector(".irr-save-btn").addEventListener("click",()=>{const a=t?new Set(t.ids):n;Qi(a,e,()=>{const u=o>_e;a.forEach(h=>{pe.push({iso:o,mm:s,real:!u,plotId:h,fromStrategy:!1})}),Ze();const m=[{title:null,names:[...a].map(h=>{var w;return(w=e.find(x=>x.id===h))==null?void 0:w.name}).filter(Boolean)}],g=a.size===1?String([...a][0]):"all";Xi(),ts({title:a.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:ct(o)},{label:"Quantité",value:`${s} mm`}],parcelSections:m,isFut:u,plots:e,calFilter:g,addedCount:a.size,stackDepth:1,backToParcel:l})})})}function Kt(e,i,t=null,l=null,n=!1){let o=new Set((t==null?void 0:t.ids)??[]),s=_e,c=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],p=10,r=7;function d(){if(!s||!c||r<=0)return[];const b=[],m=new Date(c);let g=new Date(s);for(;g<=m&&b.length<100;)b.push(new Date(g)),g.setDate(g.getDate()+r);return b}function v(){const b=d();o.size;const m=b.length>0?`<span class="irr-preview-ok">↗ ${b.length} irrigations · ${b.length*p} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${s}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${c}" />
        </div>
      </div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="strat-qty" value="${p}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence <span class="irr-unit">(jours)</span></div>
          <input type="number" class="irr-qty-input" id="strat-freq" value="${r}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${m}</div>
      ${t?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${t.ids.length>1?"Parcelles concernées":"Parcelle concernée"} : ${t.label}</span>
           </div>`:Tt([],e,o)}
      <div class="irr-bottom-spacer"></div>
    `}function $(b){const m=o.size,g=d(),h=b.querySelector(".irr-save-btn"),w=b.querySelector(".irr-summary");!h||!w||(h.disabled=m===0||g.length===0,w.textContent=m===0?"":`${m} parcelle${m>1?"s":""} · ${g.length} occurrences`,h.textContent="Voir l'aperçu →")}function a(b){var h,w,x,M,E;const m=b.querySelector(".irr-scroll-body");m.querySelectorAll(".irr-plot-row").forEach(y=>{y.addEventListener("click",()=>{const I=+y.dataset.pid;o.has(I)?o.delete(I):o.add(I),m.innerHTML=v(),a(b),$(b)})}),(h=m.querySelector("#irr-sel-all"))==null||h.addEventListener("click",()=>{const y=e.some(I=>!o.has(I.id));e.forEach(I=>y?o.add(I.id):o.delete(I.id)),m.innerHTML=v(),a(b),$(b)});const g=()=>{const y=d(),I=m.querySelector("#strat-preview");I&&(I.innerHTML=y.length>0?`<span class="irr-preview-ok">↗ ${y.length} irrigations · ${y.length*p} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),$(b)};(w=m.querySelector("#strat-debut"))==null||w.addEventListener("change",y=>{s=y.target.value,g()}),(x=m.querySelector("#strat-fin"))==null||x.addEventListener("change",y=>{c=y.target.value,g()}),(M=m.querySelector("#strat-qty"))==null||M.addEventListener("input",y=>{p=parseInt(y.target.value)||1,g()}),(E=m.querySelector("#strat-freq"))==null||E.addEventListener("input",y=>{r=parseInt(y.target.value)||1,g()})}const u=et(xe(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${v()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));u.dataset.dirty="true",a(u),$(u),u.querySelector("#strat-back").addEventListener("click",he),u.querySelector(".irr-save-btn").addEventListener("click",()=>{const b=d();Ys(u,e,o,s,c,p,r,b,i,t,l,n)})}function Ys(e,i,t,l,n,o,s,c,p,r,d=null,v=!1){var E;const $=t.size,a=5;c.length-a;function u(y){const C=y.toISOString().slice(0,10)>=_e?"#FFB705":"#FF8500",q=y.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${ct(q)}</span>
      <span style="font-size:13px;font-weight:700;color:${C}">${o} mm</span>
    </div>`}const b=c.filter(y=>y.toISOString().slice(0,10)<_e),m=c.filter(y=>y.toISOString().slice(0,10)>=_e),g=m.slice(0,a),h=m.slice(a),w=b.length?`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${b.map(u).join("")}`:"",x=m.length?`
    <div class="irr-section-lbl" style="margin-top:${b.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${g.map(u).join("")}
    ${h.length?`
      <div id="apercu-rest" style="display:none">${h.map(u).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${h.length} irrigation${h.length>1?"s":""} de plus</button>
    `:""}`:"",M=et(xe(`
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
          <div class="irr-apercu-big">${c.length} irrigations</div>
          <div class="irr-apercu-sub">${yi(l)} → ${yi(n)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${c.length*o} mm</div>
          <div class="irr-apercu-sub">${$} parcelle${$>1?"s":""} · ${o} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${w}
        ${x}
        ${!b.length&&!m.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));M.dataset.dirty="true",M.querySelector("#apercu-back").addEventListener("click",he),(E=M.querySelector("#apercu-show-more"))==null||E.addEventListener("click",y=>{M.querySelector("#apercu-rest").style.display="",y.target.remove()}),M.querySelector("#apercu-confirm").addEventListener("click",()=>{const y=r?new Set(r.ids):t;Qi(y,i,()=>{d&&pe.splice(0,pe.length,...pe.filter(L=>!(d.has(L.seasonId)&&L.fromStrategy&&!L.real)));const I=Ps();c.forEach(L=>{const f=L.toISOString().slice(0,10);y.forEach(k=>{pe.push({iso:f,mm:o,real:f<=_e,plotId:k,fromStrategy:!0,seasonId:I})})}),Ze();const q=[{title:null,names:[...y].map(L=>{var f;return(f=i.find(k=>k.id===L))==null?void 0:f.name}).filter(Boolean)}],j=y.size===1?String([...y][0]):"all";Xi(),ts({title:"Saison enregistrée",params:[{label:"Début",value:ct(l)},{label:"Fin",value:ct(n)},{label:"Quantité",value:`${o} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${c.length*y.size}`}],parcelSections:q,isFut:!0,plots:i,calFilter:j,addedCount:c.length*y.size,stackDepth:2,backToParcel:v})})})}function ts({title:e,params:i,parcelSections:t=[],isFut:l,plots:n,calFilter:o,addedCount:s=0,stackDepth:c=3,backToParcel:p=!1}){const r=(i||[]).map(g=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${g.label}</span>
      <span class="irr-confirm-param-val">${g.value}</span>
    </div>`).join(""),d=3,v=t.flatMap(g=>g.names.map(h=>({title:g.title,name:h}))),$=v.slice(0,d),a=v.slice(d);function u(g){const h=[];let w=null;for(const x of g)(!w||w.title!==x.title)&&(w={title:x.title,names:[]},h.push(w)),w.names.push(x.name);return h.map(x=>`
      ${x.title?`<div class="irr-confirm-sec-hd">${x.title}</div>`:""}
      ${x.names.map(M=>`<div class="irr-confirm-parcel">· ${M}</div>`).join("")}
    `).join("")}const b=v.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${u($)}
      ${a.length?`
        <details class="irr-confirm-more">
          <summary>${a.length} parcelle${a.length>1?"s":""} de plus</summary>
          ${u(a)}
        </details>`:""}
    </div>`,m=et(xe(`
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
      <div class="irr-confirm-params">${r}</div>
      ${b}
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
            <div class="irr-confirm-opt-title">${p?"Retour à la parcelle":"Retour au tableau de bord"}</div>
            <div class="irr-confirm-opt-sub">Continuer la navigation</div>
          </div>
        </div>
      </div>
    </div>
  `));m.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&pe.splice(pe.length-s,s),he()}),m.querySelector("#conf-back").addEventListener("click",()=>{for(let g=0;g<=c;g++)he()}),m.querySelector("#conf-calendar").addEventListener("click",()=>{is(n,o)})}const Zs=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function is(e,i){let t=i||"";function l(a){if(!a||a==="all")return null;const u=e.find(b=>String(b.id)===String(a));return u?{ids:[u.id],label:u.name}:null}function n(){return!t||t==="all"?pe:pe.filter(a=>a.plotId===+t)}function o(a){const u=a.filter(h=>h.real),b=a.filter(h=>!h.real),m=u.reduce((h,w)=>h+w.mm,0),g=b.reduce((h,w)=>h+w.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${m} mm</div>
        <div class="irr-cumul-count">${u.length} irrigation${u.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${g} mm</div>
        <div class="irr-cumul-count">${b.length} irrigation${b.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${m+g} mm</div>
        <div class="irr-cumul-count">${u.length+b.length} irrigations</div>
      </div>
    </div>`}function s(a){if(a.length<2)return"";const u=[...a].sort((D,_)=>D.iso<_.iso?-1:1),b=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],m=new Date(u[0].iso),g=new Date(u[u.length-1].iso),h=Math.max(g-m,1),w=300,x=26,M=5,E=5,y=x-E-4,I=y-E-3,C=x+M+13,q=C+2,j=D=>Math.round((D-m)/h*w),L=D=>{const[,_,B]=D.split("-");return`${parseInt(B)}/${parseInt(_)}`},f=[],k=new Date(m.getFullYear(),m.getMonth()+1,1);for(;k<=g;)f.push(new Date(k)),k.setMonth(k.getMonth()+1);const T=f.map(D=>`<line x1="${j(D)}" y1="${x-6}" x2="${j(D)}" y2="${x+M+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),S=[m,...f,g],A=S.slice(0,-1).map((D,_)=>{const B=j(D),F=j(S[_+1]);return F-B<16?"":`<text x="${Math.round((B+F)/2)}" y="${I}" font-size="8" fill="#B0AEA8" text-anchor="middle">${b[D.getMonth()]}</text>`}).join(""),P=u.map(D=>{const _=D.real?"#FF8500":"#FFB705",B=j(new Date(D.iso)),[,F,U]=D.iso.split("-"),ee=`${parseInt(U)} ${Zs[parseInt(F)-1]} · ${D.mm} mm`;return`<circle cx="${B}" cy="${y}" r="${E}" fill="${_}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${B}" cy="${y}" r="${E+6}" fill="transparent" pointer-events="all"><title>${ee}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${w}" height="${q}" viewBox="0 0 ${w} ${q}" style="width:100%;display:block">
        ${A}
        <rect x="0" y="${x}" width="${w}" height="${M}" rx="${M/2}" fill="#E0DED8"/>
        ${T}
        ${P}
        <text x="1" y="${C}" font-size="9" fill="#B0AEA8">${L(u[0].iso)}</text>
        <text x="${w-1}" y="${C}" font-size="9" fill="#B0AEA8" text-anchor="end">${L(u[u.length-1].iso)}</text>
      </svg>
    </div>`}function c(a,u,b){const m=document.createElement("div");let g=a.iso,h=a.mm;m.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${a.iso}" />
          <div id="edit-date-hint">${Ut(a.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${a.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,m.querySelector("#edit-date").addEventListener("change",w=>{g=w.target.value,m.querySelector("#edit-date-hint").innerHTML=Ut(g)}),m.querySelector("#edit-qty").addEventListener("input",w=>{const x=parseInt(w.target.value);x>0&&(h=x)}),Zt({title:a.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée",body:m,saveLabel:"Enregistrer",onSave:()=>{a.iso=g,a.mm=h,a.real=g<=_e,Ze(),d(b)},onDelete:()=>{const w=pe.indexOf(a);w>-1&&pe.splice(w,1),Ze(),d(b)}})}function p(a,u){const b=+a,m=document.createElement("div");let g=!1,h=!1;function w(){return new Set(pe.filter(M=>M.plotId===b&&M.fromStrategy&&M.seasonId).map(M=>M.seasonId))}function x(){var M,E,y,I,C,q,j;m.innerHTML=`
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
        ${g?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>`:""}
        ${h?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Supprimer toutes les irrigations de cette saison ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(M=m.querySelector("#strat-modify"))==null||M.addEventListener("click",()=>{var T;(T=document.querySelector(".irr-sheet-overlay"))==null||T.remove();const L=w(),f=e.find(S=>S.id===b),k=f?{ids:[f.id],label:f.name}:null;Kt(e,()=>d(u),k,L)}),(E=m.querySelector("#strat-stop"))==null||E.addEventListener("click",()=>{g=!0,h=!1,x()}),(y=m.querySelector("#strat-delete"))==null||y.addEventListener("click",()=>{h=!0,g=!1,x()}),(I=m.querySelector("#stop-cancel"))==null||I.addEventListener("click",()=>{g=!1,x()}),(C=m.querySelector("#stop-confirm"))==null||C.addEventListener("click",()=>{var f;const L=w();pe.splice(0,pe.length,...pe.filter(k=>!(k.plotId===b&&L.has(k.seasonId)&&!k.real))),Ze(),(f=document.querySelector(".irr-sheet-overlay"))==null||f.remove(),d(u)}),(q=m.querySelector("#delete-cancel"))==null||q.addEventListener("click",()=>{h=!1,x()}),(j=m.querySelector("#delete-confirm"))==null||j.addEventListener("click",()=>{var f;const L=w();pe.splice(0,pe.length,...pe.filter(k=>!(k.plotId===b&&L.has(k.seasonId)))),Ze(),(f=document.querySelector(".irr-sheet-overlay"))==null||f.remove(),d(u)})}x(),Zt({title:"Gérer la saison",body:m,saveLabel:"Fermer",onSave:()=>{}})}function r(a){if(!a.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const u=[...a].filter(g=>!g.real).sort((g,h)=>g.iso<h.iso?-1:1),b=[...a].filter(g=>g.real).sort((g,h)=>g.iso>h.iso?-1:1);function m(g){const h=g.real?"#FF8500":"#FFB705",w=pe.indexOf(g);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${ct(g.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${h};white-space:nowrap;margin-right:4px">${g.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${w}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${w}" title="Supprimer">🗑</button>
      </div>`}return`
      ${b.length?`
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${b.length}</span></summary>
          ${b.map(m).join("")}
        </details>`:""}
      ${u.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${u.length}</span></summary>
          ${u.map(m).join("")}
        </details>`:""}
    `}function d(a){var w,x,M;const u=a.querySelector(".irr-cal-body");if(!t){u.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const b={};if(u.querySelectorAll("details[data-section]").forEach(E=>{b[E.dataset.section]=E.open}),t==="all"){const E={};for(const C of pe){const q=C.plotId??"unknown";E[q]||(E[q]=[]),E[q].push(C)}const y=Object.keys(E);if(!y.length){u.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const I=y.sort((C,q)=>{var f,k;const j=((f=e.find(T=>String(T.id)===C))==null?void 0:f.name)??C,L=((k=e.find(T=>String(T.id)===q))==null?void 0:k.name)??q;return j.localeCompare(L,"fr")});u.innerHTML=I.map(C=>{var f;const q=E[C],j=q.some(k=>k.fromStrategy);return`<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${((f=e.find(k=>String(k.id)===C))==null?void 0:f.name)??C}</div>
          ${o(q)}
          ${s(q)}
          ${j?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-pid="${C}">Modifier la saison ↗</button>
          </div>`:""}
        </div>`}).join(""),u.querySelectorAll("[data-strat-pid]").forEach(C=>{C.addEventListener("click",()=>p(C.dataset.stratPid,a))});return}const m=n(),h=m.some(E=>E.fromStrategy)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`;u.innerHTML=`
      ${o(m)}
      ${s(m)}
      ${h}
      ${r(m)}
    `,u.querySelectorAll("details[data-section]").forEach(E=>{const y=E.dataset.section;y in b&&(E.open=b[y])}),u.querySelectorAll(".irr-edit-btn").forEach(E=>{E.addEventListener("click",y=>{y.stopPropagation();const I=pe[+E.dataset.iidx];I&&c(I,m,a)})}),u.querySelectorAll(".irr-del-btn").forEach(E=>{E.addEventListener("click",y=>{y.stopPropagation();const I=+E.dataset.iidx;I>=0&&(pe.splice(I,1),Ze(),d(a))})}),(w=u.querySelector("#open-strat-edit"))==null||w.addEventListener("click",()=>{p(t,a)}),(x=u.querySelector("#cal-add-irrig"))==null||x.addEventListener("click",()=>{es(e,()=>d(a),l(t))}),(M=u.querySelector("#cal-add-strat"))==null||M.addEventListener("click",()=>{Kt(e,()=>d(a),l(t))})}const v=[...e].sort((a,u)=>a.name.localeCompare(u.name,"fr")).map(a=>`<option value="${a.id}"${String(a.id)===String(t)?" selected":""}>${a.name}</option>`).join(""),$=et(xe(`
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
          ${v}
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));$.querySelector("#cal-back").addEventListener("click",he),$.querySelector("#cal-filter-sel").addEventListener("change",a=>{t=a.target.value,d($)}),d($)}const Ke=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:Tt,checkIcon:Yt,flexLayer:et,openCalendar:is,openIrrigationSaisie:es,openIrrigationStrategie:Kt},Symbol.toStringTag,{value:"Module"})),Ks=[{name:"Allier AgriTech",distance:8,adherents:31,capteurs:198,parcelles:1140},{name:"Auvergne Agri Conseil",distance:15,adherents:54,capteurs:361,parcelles:2080},{name:"Réseau Bourbonnais",distance:22,adherents:18,capteurs:112,parcelles:630},{name:"Creuse Agri Net",distance:38,adherents:12,capteurs:74,parcelles:410},{name:"Puy-de-Dôme Connect",distance:45,adherents:39,capteurs:255,parcelles:1490}],xi={name:"Breiz'Agri Conseil",city:"Rennes (35)",phone:"02 99 XX XX XX",email:"contact@breizagri.fr",capteurs:312,parcelles:1830,sharedSensorTypes:["Capteurs météo"]};function $i(e){return e.split(" ").filter(i=>i.length>2).slice(0,2).map(i=>i[0].toUpperCase()).join("")}const Me={prenom:"Pierre",nom:"Jourdain",email:"pierre@gaec-jourdain.fr",phone:"06 71 23 45 67",orgName:"GAEC Jourdain",adresse:"Lieu-dit La Croix Blanche, 03500 Saint-Pourçain-sur-Sioule",selectedPlan:"expert",joinNetwork:!0},Xs={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre 15/30 cm","CHP-30/60":"Tensiomètre 30/60 cm","CHP-60/90":"Tensiomètre 60/90 cm","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},Qs={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]},en=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),_t=[{id:"essential",name:"Weenat Essential",priceNum:0,price:"Gratuit",color:"#636366",features:["Aucun capteur physique","Historique illimité","Alertes","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"plus",name:"Weenat Plus",priceNum:16.5,price:"16,5 €/mois",color:"#00B093",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"expert",name:"Weenat Expert",priceNum:30,price:"30 €/mois",color:"#006798",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées","Capteurs irrigation","Fonctionnalités irrigation"]}],tn={Administrateur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!0}]}],Agent:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}],Lecteur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!1}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!1}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!1},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}]};function sn(e,i,t,l){const n=i==="essential",o=i==="expert";return e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?["signup","verify","emailVerified","creating","done"]:e==="new-adherent"?["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkInfo","invite","plan",...o?["volumeChoice"]:[],"creating","done"]:["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkChoice",...t?["networkPick"]:[],"invite","plan",...n?[]:["payment","paymentConfirmed"],...o?["volumeChoice"]:[],"creating","done"]}function nn(e,i,t,l){return sn(e,i,t)}const an={signup:"Inscription",verify:"Vérification",orgName:"Exploitation",geoloc:"Localisation",orgInfo:"Informations",networkChoice:"Réseau",networkPick:"Choisir un réseau",networkInfo:"Mon réseau",invite:"Invitations",plan:"Abonnement",payment:"Paiement",paymentConfirmed:"Paiement",volumeChoice:"Volume autorisé",parcelMap:"Parcelle",parcelSource:"Source de données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"};function on(e,i){const t=document.getElementById("phone-screen");let l=0,n=e==="new-adherent"?"expert":Me.selectedPlan,o=Me.joinNetwork,s=!1,c=0,p=!0,r=46.3021,d=3.2938,v=null,$=null,a="smv",u=[],b="Parcelle 1";const m=document.createElement("div");m.id="onboarding-overlay",m.className="m-ob-overlay",t.appendChild(m);function g(){return nn(e,n,o)}function h(){return g()[l]}function w(){return g().filter(z=>!["creating","done","parcelDone","emailVerified","paymentConfirmed"].includes(z)).length}function x(){return _t.find(z=>z.id===n)}function M(){const z=g().slice(0,l).filter(oe=>oe!=="creating"&&oe!=="done"&&oe!=="parcelDone").length;return`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Math.round(z/w()*100)}%"></div></div>`}function E(z,X=!0){const oe=h(),W=new Set(["creating","done","parcelDone","emailVerified","paymentConfirmed"]),J=X&&l>0&&!W.has(oe),R=an[oe]||"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${J?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${R}</span>
          <div style="width:32px"></div>
        </div>
        ${W.has(oe)?"":M()}
        <div class="m-ob-body">${z}</div>
      </div>`}function y(){l++,He()}function I(){l--,He()}function C(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-person"></i></div>
        <h2 class="m-ob-h2">Créer mon compte</h2>
      </div>
      <div class="m-ob-form" style="margin-top:20px">
        <div class="m-ob-row2">
          <div class="m-ob-field">
            <label class="m-ob-label">Prénom</label>
            <input class="m-ob-input" type="text" placeholder="Prénom" value="${Me.prenom}">
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">Nom</label>
            <input class="m-ob-input" type="text" placeholder="Nom" value="${Me.nom}">
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Adresse email professionnelle</label>
          <input class="m-ob-input" type="email" placeholder="Adresse email professionnelle" value="${Me.email}">
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Mot de passe</label>
          <div class="m-ob-pw-strength"><div class="m-ob-pw-bar" style="width:75%;background:#ff9f0a"></div></div>
          <div class="m-ob-pw-wrap">
            <input class="m-ob-input m-ob-input--pw" id="ob-pw" type="password" placeholder="Mot de passe" value="Jourdain2026!">
            <button class="m-ob-pw-eye" id="ob-pw-eye" type="button"><i class="bi bi-eye${s?"":"-slash"}"></i></button>
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Pays</label>
          <div class="m-ob-select-flag">
            <span class="m-ob-flag">🇫🇷</span>
            <select class="m-ob-input m-ob-input--select">
              <option selected>France</option><option>Belgique</option><option>Espagne</option><option>Italie</option>
            </select>
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Numéro de téléphone</label>
          <div class="m-ob-phone-wrap">
            <div class="m-ob-phone-prefix"><span>🇫🇷</span></div>
            <input class="m-ob-input m-ob-input--phone" type="tel" placeholder="06 12 12 12 12" value="${Me.phone}">
          </div>
        </div>
        <label class="m-ob-cgu-row">
          <input type="checkbox" checked>
          <span>J'ai lu et j'accepte les <a href="#">conditions d'utilisations</a> et la <a href="#">politique de confidentialité</a></span>
        </label>
      </div>
      <button class="m-ob-cta" id="ob-next">Créer mon compte</button>
    `,!1)}function q(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-envelope-check"></i></div>
        <h2 class="m-ob-h2">Vérifiez votre adresse email</h2>
        <p class="m-ob-sub">Un e-mail a été envoyé à<br><strong>${Me.email}</strong></p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Code de vérification</label>
          <input class="m-ob-input m-ob-input--code" type="text" value="847291" maxlength="6" inputmode="numeric">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Confirmer</button>
      <button class="m-ob-link" type="button">Renvoyer le code</button>
    `)}function j(){return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          <div style="width:32px"></div>
          <span class="m-ob-step-label"></span>
          <div style="width:32px"></div>
        </div>
        <div class="m-ob-body" style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:20px;padding:32px 24px">
          <div style="width:72px;height:72px;border-radius:50%;background:#e8fff0;display:flex;align-items:center;justify-content:center">
            <i class="bi bi-check-circle-fill" style="font-size:36px;color:#30d158"></i>
          </div>
          <h2 class="m-ob-h2" style="text-align:center">Votre adresse email est vérifiée</h2>
          <p class="m-ob-sub" style="text-align:center"><strong>${Me.email}</strong><br>a bien été confirmée.</p>
          <button class="m-ob-cta" id="ob-next" style="margin-top:12px">Continuer</button>
        </div>
      </div>`}function L(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-building"></i></div>
        <h2 class="m-ob-h2">Votre exploitation</h2>
        <p class="m-ob-sub">Comment s'appelle votre exploitation ?</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de l'exploitation</label>
          <input class="m-ob-input" type="text" value="${Me.orgName}">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function f(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#fff3e8;color:#ff9f0a"><i class="bi bi-geo-alt"></i></div>
        <h2 class="m-ob-h2">Géolocalisation</h2>
      </div>
      <ul class="m-ob-value-bullets">
        <li><i class="bi bi-check-circle-fill"></i>Centrer la carte sur votre exploitation</li>
        <li><i class="bi bi-check-circle-fill"></i>Proposer des données météo locales précises</li>
        <li><i class="bi bi-check-circle-fill"></i>Faciliter la création de vos parcelles</li>
      </ul>
      <div id="ob-geoloc-btns">
        <button class="m-ob-cta" id="ob-geoloc-allow"><i class="bi bi-crosshair2"></i> Autoriser la géolocalisation</button>
        <button class="m-ob-link" id="ob-geoloc-manual" type="button">Saisir l'adresse manuellement</button>
      </div>
      <div id="ob-geoloc-addr" style="display:none">
        <div class="m-ob-form">
          <div class="m-ob-field">
            <label class="m-ob-label">Adresse de votre exploitation</label>
            <input class="m-ob-input" type="text" value="${Me.adresse}">
          </div>
          <div id="ob-addr-map" class="m-ob-addr-map"></div>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      </div>
    `)}function k(){const z=Ki.map(X=>`<button type="button" class="m-ob-pill" data-metier="${X}">${X}</button>`).join("");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-house"></i></div>
        <h2 class="m-ob-h2">Votre activité</h2>
        <p class="m-ob-sub">Ces informations nous permettent de vous conseiller les fonctionnalités les plus adaptées.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Métier(s)</label>
          <div class="m-ob-pills">${z}</div>
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function T(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3"></i></div>
        <h2 class="m-ob-h2">Rejoindre un réseau</h2>
      </div>
      <ul class="m-ob-value-bullets">
        <li><i class="bi bi-check-circle-fill"></i>Accédez aux capteurs partagés par votre réseau</li>
        <li><i class="bi bi-check-circle-fill"></i>Bénéficiez de conseils sur l'installation des capteurs et l'utilisation de l'app</li>
        <li><i class="bi bi-check-circle-fill"></i>Votre conseiller peut suivre l'état de vos parcelles et capteurs, avec votre accord</li>
      </ul>
      <div class="m-ob-plan-cards" style="margin-top:16px">
        <div class="m-ob-plan-card" data-join="oui">
          <div class="m-ob-plan-name">Oui, rejoindre un réseau</div>
          <div class="m-ob-plan-desc">Je veux rejoindre un réseau, partager des données et profiter du conseil.</div>
        </div>
        <div class="m-ob-plan-card" data-join="non">
          <div class="m-ob-plan-name">Non merci</div>
          <div class="m-ob-plan-desc">Je gère mon exploitation sur l'application Weenat en autonomie.</div>
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function S(){const z=Ks.map(X=>`
      <div class="m-ob-net-row" data-net="${X.name}">
        <div class="m-ob-net-avatar">${$i(X.name)}</div>
        <div class="m-ob-net-info">
          <div class="m-ob-net-name">${X.name}</div>
          <div class="m-ob-net-meta">${X.distance} km · ${X.capteurs} capteurs · ${X.parcelles} parcelles</div>
        </div>
        <div class="m-ob-net-check"><i class="bi bi-circle"></i></div>
      </div>`).join("");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-building-check"></i></div>
        <h2 class="m-ob-h2">Choisir un réseau</h2>
        <p class="m-ob-sub">Les 5 réseaux les plus proches de votre exploitation.</p>
      </div>
      <div class="m-ob-net-list">${z}</div>
      <button class="m-ob-cta" id="ob-next">Rejoindre</button>
    `)}function A(){var X,oe,W;const z=xi;return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3-fill"></i></div>
        <h2 class="m-ob-h2">Mon réseau</h2>
        <p class="m-ob-sub">Vous avez été invité à rejoindre ce réseau.</p>
      </div>
      <div class="m-ob-info-card" style="background:var(--bg2,#f5f5f7);border-radius:12px;padding:20px 16px;margin:0 0 16px">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:14px">
          <div class="m-ob-net-avatar" style="width:64px;height:64px;font-size:24px;border-radius:16px;margin-bottom:8px">${$i(z.name)}</div>
          <div style="font-weight:700;font-size:16px">${z.name}</div>
          <div style="font-size:13px;color:#636366">${z.city}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px;margin-top:6px"><i class="bi bi-telephone" style="color:#0172A4"></i> ${z.phone}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px"><i class="bi bi-envelope" style="color:#0172A4"></i> ${z.email}</div>
        </div>
        <div style="display:flex;gap:16px;padding-top:12px;padding-bottom:12px;border-top:.5px solid rgba(0,0,0,.1)">
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${z.capteurs}</div><div style="font-size:11px;color:#636366">capteurs</div></div>
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${z.parcelles}</div><div style="font-size:11px;color:#636366">parcelles</div></div>
        </div>
        <div style="padding-top:12px;border-top:.5px solid rgba(0,0,0,.1)">
          <div style="font-size:13px;color:#3a3a3c;margin-bottom:${(X=z.sharedSensorTypes)!=null&&X.length?"8px":"0"}">Capteurs partagés entre les adhérents${(oe=z.sharedSensorTypes)!=null&&oe.length?" :":" : Aucun capteur partagé"}</div>
          ${(W=z.sharedSensorTypes)!=null&&W.length?`<div class="m-ob-pills">${z.sharedSensorTypes.map(J=>`<span class="m-ob-pill m-ob-pill--on" style="cursor:default">${J}</span>`).join("")}</div>`:""}
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function P(z){const X=tn[z];return X?`<div class="m-ob-role-perms">${X.map(oe=>`
      <div class="m-rp-section">
        <div class="m-rp-section-title">${oe.section}</div>
        ${oe.items.map(W=>`
          <div class="m-rp-item">
            <i class="bi bi-${W.ok?"check-circle-fill":"x-circle-fill"}" style="color:${W.ok?"#30d158":"#ff3b30"}"></i>
            <span>${W.label}</span>
          </div>`).join("")}
      </div>`).join("")}</div>`:""}function D(){return`
      <div class="m-ob-invite-block">
        <div style="display:flex;align-items:center;gap:8px">
          <input class="m-ob-input m-ob-input--email" type="email" placeholder="adresse@email.fr" style="flex:1;min-width:0;margin-bottom:0">
          <button class="m-ob-invite-remove" type="button" title="Supprimer"><i class="bi bi-trash"></i></button>
        </div>
        <select class="m-ob-select m-ob-invite-role-sel" style="margin-top:6px">
          <option value="">Choisir un rôle…</option>
          <option>Administrateur</option><option>Agent</option><option>Lecteur</option>
        </select>
        <div class="m-ob-role-perms-wrap"></div>
      </div>`}function _(){return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-people"></i></div>
        <h2 class="m-ob-h2">Inviter des membres</h2>
        <p class="m-ob-sub">Ajoutez des collègues de votre exploitation. Salariés, chefs de culture, conseillers externes...</p>
      </div>
      <div class="m-ob-form" id="ob-invite-list">${D()}</div>
      <button class="m-ob-add-member" id="ob-add-member" type="button"><i class="bi bi-plus-circle"></i> Ajouter un membre</button>
      <p style="font-size:12px;color:#636366;margin:10px 0 4px;line-height:1.4"><i class="bi bi-info-circle" style="margin-right:4px"></i>Chaque membre implique une licence payante additionnelle.</p>
      <button class="m-ob-cta" id="ob-send-invites">Continuer</button>
      <button class="m-ob-link" id="ob-skip-invite" type="button">Passer cette étape</button>
    `)}function B(){const z=e==="new-adherent",X=xi;if(z){const W=_t.find(R=>R.id==="expert"),J=W.features.map(R=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${W.color}"></i> ${R}</li>`).join("");return E(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-gift"></i></div>
          <h2 class="m-ob-h2">Votre abonnement</h2>
          <p class="m-ob-sub">Le réseau <strong>${X.name}</strong> vous a invité à profiter de l'abonnement <strong style="color:${W.color}">Weenat Expert</strong>. Découvrez ce qu'il comprend.</p>
        </div>
        <div class="m-ob-sub-card m-ob-sub-card--on" style="--plan-color:${W.color}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${W.color}">${W.name}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${W.color};background:${W.color}">
              <i class="bi bi-check" style="color:#fff;font-size:13px"></i>
            </div>
          </div>
          <ul class="m-ob-feat-list" style="display:block;margin-top:10px">${J}</ul>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      `)}const oe=_t.map(W=>{const J=W.id===n,R=W.features.map(H=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${W.color}"></i> ${H}</li>`).join("");return`
        <div class="m-ob-sub-card${J?" m-ob-sub-card--on":""}" data-plan="${W.id}" style="${J?`--plan-color:${W.color}`:""}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${W.color}">${W.name}${W.id==="expert"?' <span style="font-size:11px;font-weight:400;opacity:.8">(irrigation)</span>':""}</div>
              <div class="m-ob-sub-price">${W.price}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${J?W.color:"#c7c7cc"};background:${J?W.color:"transparent"}">
              ${J?'<i class="bi bi-check" style="color:#fff;font-size:13px"></i>':""}
            </div>
          </div>
          <button class="m-ob-feat-toggle" data-plan="${W.id}" type="button">
            Ce qui est inclus <i class="bi bi-chevron-down"></i>
          </button>
          <ul class="m-ob-feat-list" id="feat-${W.id}" style="display:none">${R}</ul>
        </div>`}).join("");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-grid-1x2"></i></div>
        <h2 class="m-ob-h2">Votre abonnement</h2>
        <p class="m-ob-sub">Choisissez le plan qui correspond à vos besoins.</p>
      </div>
      <div class="m-ob-sub-cards">${oe}</div>
      <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
    `)}function F(){const z=x(),X=c+1,oe=X*z.priceNum,W=oe*12,J=R=>R%1===0?`${R}`:R.toFixed(1).replace(".",",");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-credit-card"></i></div>
        <h2 class="m-ob-h2">Paiement</h2>
      </div>
      <div class="m-ob-pay-summary">
        <div class="m-ob-pay-line">
          <span style="color:${z.color};font-weight:700">${z.name}</span>
          <span class="m-ob-pay-price" style="color:${z.color}">${J(z.priceNum)} €<span class="m-ob-pay-period">/licence/mois</span></span>
        </div>
        ${X>1?`
        <div class="m-ob-pay-line" style="margin-top:6px">
          <span style="font-size:13px;color:#636366">${X} licences (${c} invité${c>1?"s":""} + vous)</span>
          <span style="font-size:15px;font-weight:700;color:${z.color}">${J(oe)} €/mois</span>
        </div>
        <button class="m-ob-link" id="ob-remove-invites" type="button" style="font-size:12px;color:#636366;padding:2px 0;text-align:left">Retirer les invités et ne prendre qu'une licence</button>`:""}
        <div class="m-ob-pay-divider"></div>
        <div class="m-ob-pay-line">
          <span style="font-weight:600">Total annuel</span>
          <span style="font-size:17px;font-weight:700;color:${z.color}">${J(W)} €/an</span>
        </div>
        <div class="m-ob-pay-line--sub">
          <p>Engagement d'un an · Renouvellement automatique</p><br>
          <p>Vous recevrez un email un mois avant la date de renouvellement de votre abonnement.</p>
        </div>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Numéro de carte</label>
          <div class="m-ob-card-wrap">
            <input class="m-ob-input m-ob-input--card" type="text" value="4242 4242 4242 4242" maxlength="19" inputmode="numeric">
            <span class="m-ob-card-brand"><i class="bi bi-credit-card-2-front"></i></span>
          </div>
        </div>
        <div class="m-ob-row2">
          <div class="m-ob-field">
            <label class="m-ob-label">Date d'expiration</label>
            <input class="m-ob-input" type="text" value="08 / 28" maxlength="7" inputmode="numeric" placeholder="MM / AA">
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">CVV</label>
            <input class="m-ob-input" type="text" value="•••" maxlength="4" inputmode="numeric" placeholder="CVV">
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Nom sur la carte</label>
          <input class="m-ob-input" type="text" value="Pierre Jourdain">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next" style="background:${z.color}"><i class="bi bi-lock-fill" style="font-size:13px"></i> Payer ${J(W)} €</button>
      <p class="m-ob-legal" style="margin-top:10px"><i class="bi bi-shield-check"></i> Paiement sécurisé SSL · Données chiffrées</p>
    `)}function U(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-droplet-half"></i></div>
        <h2 class="m-ob-h2">Volume autorisé</h2>
        <p class="m-ob-sub">Votre abonnement Expert inclut le suivi du volume d'eau prélevé. Êtes-vous soumis à un volume annuel ?</p>
      </div>
      <div class="m-ob-plan-cards">
        <div class="m-ob-plan-card" data-volume="oui">
          <div class="m-ob-plan-name">Oui, j'ai un volume autorisé</div>
          <div class="m-ob-plan-desc">Je veux suivre mes irrigations et me limiter à ce volume.</div>
          <div id="ob-volume-field" style="display:none;margin-top:12px">
            <label class="m-ob-label" style="font-size:12px">Volume maximal (m³/an)</label>
            <input class="m-ob-input m-ob-input--number" id="ob-volume-input" type="text" inputmode="numeric" placeholder="Ex : 150 000" style="margin-top:4px">
          </div>
        </div>
        <div class="m-ob-plan-card" data-volume="non">
          <div class="m-ob-plan-name">Non</div>
          <div class="m-ob-plan-desc">Je n'ai pas de restriction ou de volume limité.</div>
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
      <button class="m-ob-link" id="ob-next" type="button">Je ne sais pas encore</button>
    `)}function ee(){return x(),`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          <div style="width:32px"></div>
          <span class="m-ob-step-label">Paiement</span>
          <div style="width:32px"></div>
        </div>
        <div class="m-ob-body" style="display:flex;flex-direction:column;gap:20px;padding:32px 24px">
          <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
            <div style="width:64px;height:64px;border-radius:50%;background:#e8fff0;display:flex;align-items:center;justify-content:center">
              <i class="bi bi-check-circle-fill" style="font-size:32px;color:#30d158"></i>
            </div>
            <h2 class="m-ob-h2" style="text-align:center">Paiement confirmé</h2>
            <p class="m-ob-sub" style="text-align:center">Un reçu de votre paiement vous a été envoyé par email à <strong>${Me.email}</strong>.</p>
          </div>
          <div class="m-ob-form" style="margin-top:0">
            <div class="m-ob-field">
              <label class="m-ob-label">Copie des factures (facultatif)</label>
              <p style="font-size:12px;color:#636366;margin:0 0 8px;line-height:1.4">Ajoutez une adresse email pour envoyer ce reçu et des copies des factures à un tiers (comptable, achats, finances…)</p>
              <input class="m-ob-input" type="email" placeholder="Adresse email du destinataire">
            </div>
          </div>
          <button class="m-ob-cta" id="ob-next">Continuer</button>
        </div>
      </div>`}function fe(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-spinner"><div class="m-ob-spinner-ring"></div></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Création de votre espace…</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?"Nous configurons votre accès et créons votre exploitation par défaut.":"Nous configurons votre exploitation."}</p>
      </div>`}function ae(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Votre espace est prêt !</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?`Votre compte a été créé. Votre exploitation par défaut <strong>Exploitation ${Me.nom}</strong> est prête.`:"Une parcelle et une station météo virtuelle ont été créées à l'adresse de votre exploitation. Vous pouvez les modifier ou les supprimer."}</p>
        <button class="m-ob-cta" id="ob-finish" style="margin-top:32px">Accéder à mon exploitation</button>
      </div>`}function ve(){return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-map-fill"></i></div>
        <h2 class="m-ob-h2">Position de la parcelle</h2>
      </div>
      <div id="ob-parcel-map" style="width:100%;height:220px;border-radius:12px;overflow:hidden;margin-bottom:12px"></div>
      <div style="background:#f5f5f7;border-radius:10px;padding:12px 14px;margin-bottom:16px;font-size:13px;color:#3a3a3c;line-height:1.5">
        <i class="bi bi-crosshair2" style="color:#0172A4;margin-right:6px"></i>
        Positionnez le centre de votre parcelle.<br><br>
        <span style="color:#636366">Vous pourrez tracer son contour sur la version web de l'application.</span>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function Se(){if(n==="essential")return y(),"";const oe=["P+","CHP-15/30","CAPA-30-3","EC"].map(J=>ne.find(R=>R.orgId===1&&R.model===J)).filter(Boolean);return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(J=>`
          <div class="m-ob-plan-card${a===J.id?" m-ob-plan-card--on":""}" data-psource="${J.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${J.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${J.title}</div>
                <div class="m-ob-plan-desc">${J.desc}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>

      <div id="ob-link-sensors" style="display:${a==="link"?"block":"none"}">
        <div style="font-size:13px;font-weight:600;margin-bottom:8px;color:#3a3a3c">Capteurs disponibles</div>
        <div id="ob-sensor-conflict" style="display:none;gap:8px;align-items:flex-start;padding:10px 12px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;margin-bottom:10px">
          <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;flex-shrink:0;margin-top:1px"></i>
          <span id="ob-sensor-conflict-msg" style="font-size:12px;color:#7a5a00;line-height:1.4"></span>
        </div>
        ${oe.map(J=>`
          <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:.5px solid rgba(0,0,0,.08);cursor:pointer">
            <input type="checkbox" ${u.includes(J.id)?"checked":""} data-sensor-id="${J.id}" style="width:18px;height:18px;flex-shrink:0">
            <div>
              <div style="font-size:14px;font-weight:600;color:#1c1c1e">${Xs[J.model]||J.model}</div>
              <div style="font-size:12px;color:#636366;margin-top:1px">${J.model} · ${J.serial}</div>
            </div>
          </label>`).join("")}
      </div>

      <div id="ob-add-sensor-form" style="display:${a==="add"?"block":"none"}">
        <div class="m-ob-form" style="margin-top:0">
          <div class="m-ob-field">
            <label class="m-ob-label">Numéro de série</label>
            <div style="display:flex;gap:8px">
              <input class="m-ob-input" type="text" placeholder="Ex : W-123456" style="flex:1">
              <button type="button" style="background:#0172A4;color:#fff;border:none;border-radius:8px;padding:0 12px;font-size:20px;cursor:pointer"><i class="bi bi-qr-code-scan"></i></button>
            </div>
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">Depuis quand ce capteur a-t-il été installé ?</label>
            <input class="m-ob-input" type="date" value="${new Date().toISOString().split("T")[0]}">
          </div>
        </div>
      </div>

      <button class="m-ob-cta" id="ob-next" style="margin-top:8px">Continuer</button>
      <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
    `)}function Te(){const z=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),X=new Set(["EC"]),oe=ne.filter(R=>u.includes(R.id)),W=oe.some(R=>z.has(R.model)),J=oe.some(R=>X.has(R.model));return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${b}">
        </div>
        ${W?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${Zi.map(R=>`<option>${R}</option>`).join("")}
          </select>
        </div>
        ${J?`
        <div class="m-ob-field">
          <label class="m-ob-label">Substrat</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            <option>Laine de roche</option><option>Fibre de coco</option><option>Perlite</option><option>Terreau</option><option>Sol natif</option>
          </select>
        </div>`:""}
        `:`
        <div class="m-ob-field">
          <label class="m-ob-label">Culture</label>
          <input class="m-ob-input" type="text" placeholder="Ex : Blé tendre, Maïs, Vigne…">
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Environnement</label>
          <select class="m-ob-input m-ob-input--select">
            <option selected>Plein champ</option>
            <option>Serre</option><option>Tunnel</option><option>Verger</option><option>Vigne</option>
          </select>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Type d'irrigation</label>
          <select class="m-ob-input m-ob-input--select">
            ${oi.map(R=>`<option${R==="Non irrigué"?" selected":""}>${R}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function Je(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub">
          <strong>${b}</strong> a été créée avec succès.
          ${n==="essential"?"<br>Une station météo virtuelle a été ajoutée au centre de la parcelle.":""}
        </p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Accéder au tableau de bord</button>
      </div>`}const Ge={signup:C,verify:q,emailVerified:j,orgName:L,geoloc:f,orgInfo:k,networkChoice:T,networkPick:S,networkInfo:A,invite:_,plan:B,payment:F,paymentConfirmed:ee,volumeChoice:U,creating:fe,done:ae,parcelMap:ve,parcelSource:Se,parcelConfig:Te,parcelDone:Je};function He(){const z=Ge[h()];if(!z)return;const X=z();X&&(m.innerHTML=X),K()}function O(){c=[...m.querySelectorAll("#ob-invite-list .m-ob-input--email")].filter(X=>X.value.trim()).length}function se(){const z=window.L;z&&setTimeout(()=>{const X=m.querySelector("#ob-parcel-map");if(!X||X._leaflet_id)return;$=z.map(X,{zoomControl:!0,attributionControl:!1}).setView([r,d],15),z.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo($),z.circleMarker([r,d],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo($);const oe=r+45e-5;v=z.marker([oe,d],{icon:z.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),draggable:!0}).addTo($),v.on("dragend",()=>{const W=v.getLatLng();r=W.lat,d=W.lng}),$.invalidateSize()},50)}function K(){var X,oe,W,J,R,H,N,Y,G,re,te,me,ie,le;(X=m.querySelector("#ob-back"))==null||X.addEventListener("click",I),m.querySelectorAll("#ob-next").forEach(V=>V.addEventListener("click",y)),(oe=m.querySelector("#ob-pw-eye"))==null||oe.addEventListener("click",()=>{s=!s;const V=m.querySelector("#ob-pw");V&&(V.type=s?"text":"password");const Z=m.querySelector("#ob-pw-eye i");Z&&(Z.className=s?"bi bi-eye":"bi bi-eye-slash")}),m.querySelectorAll(".m-ob-sub-card").forEach(V=>{V.addEventListener("click",Z=>{Z.target.closest(".m-ob-feat-toggle")||(n=V.dataset.plan,He())})}),m.querySelectorAll(".m-ob-feat-toggle").forEach(V=>{V.addEventListener("click",Z=>{Z.stopPropagation();const de=m.querySelector(`#feat-${V.dataset.plan}`),ue=V.querySelector(".bi");if(!de)return;const $e=de.style.display!=="none";de.style.display=$e?"none":"block",ue.className=`bi bi-chevron-${$e?"down":"up"}`})}),m.querySelectorAll("[data-join]").forEach(V=>{V.addEventListener("click",()=>{o=V.dataset.join==="oui",m.querySelectorAll("[data-join]").forEach(Z=>Z.classList.toggle("m-ob-plan-card--on",Z===V))})}),m.querySelectorAll("[data-net]").forEach(V=>{V.addEventListener("click",()=>{m.querySelectorAll("[data-net]").forEach(Z=>{const de=Z===V;Z.classList.toggle("m-ob-net-row--on",de),Z.querySelector(".bi").className=`bi bi-${de?"check-circle-fill":"circle"}`})})});const z=()=>{var de;(de=m.querySelector("#ob-geoloc-btns"))==null||de.remove();const V=m.querySelector("#ob-geoloc-addr");V&&(V.style.display="");const Z=window.L;Z&&setTimeout(()=>{const ue=m.querySelector("#ob-addr-map");if(!ue||ue._leaflet_id)return;const $e=Z.map(ue,{zoomControl:!0,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}).setView([46.3021,3.2938],13);Z.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:18}).addTo($e),Z.marker([46.3021,3.2938]).addTo($e)},50)};(W=m.querySelector("#ob-geoloc-allow"))==null||W.addEventListener("click",z),(J=m.querySelector("#ob-geoloc-manual"))==null||J.addEventListener("click",z),m.querySelectorAll(".m-ob-pill").forEach(V=>{V.addEventListener("click",()=>V.classList.toggle("m-ob-pill--on"))}),(R=m.querySelector("#ob-add-member"))==null||R.addEventListener("click",()=>{const V=m.querySelector("#ob-invite-list"),Z=document.createElement("div");Z.innerHTML=D(),V.appendChild(Z.firstElementChild)}),(H=m.querySelector("#ob-invite-list"))==null||H.addEventListener("click",V=>{const Z=V.target.closest(".m-ob-invite-remove");if(!Z)return;const de=Z.closest(".m-ob-invite-block");de&&de.remove()}),(N=m.querySelector("#ob-invite-list"))==null||N.addEventListener("change",V=>{var ue;const Z=V.target.closest(".m-ob-invite-role-sel");if(!Z)return;const de=(ue=Z.closest(".m-ob-invite-block"))==null?void 0:ue.querySelector(".m-ob-role-perms-wrap");de&&(de.innerHTML=P(Z.value))}),(Y=m.querySelector("#ob-remove-invites"))==null||Y.addEventListener("click",()=>{c=0,He()}),(G=m.querySelector("#ob-send-invites"))==null||G.addEventListener("click",()=>{O(),y()}),(re=m.querySelector("#ob-skip-invite"))==null||re.addEventListener("click",()=>{c=0,y()}),m.querySelectorAll("[data-psource]").forEach(V=>{V.addEventListener("click",()=>{a=V.dataset.psource,m.querySelectorAll("[data-psource]").forEach(Z=>Z.classList.toggle("m-ob-plan-card--on",Z===V)),m.querySelector("#ob-link-sensors").style.display=a==="link"?"block":"none",m.querySelector("#ob-add-sensor-form").style.display=a==="add"?"block":"none"})}),m.querySelectorAll("[data-sensor-id]").forEach(V=>{V.addEventListener("change",()=>{const Z=parseInt(V.dataset.sensorId);V.checked?u.includes(Z)||u.push(Z):u=u.filter(Ce=>Ce!==Z);const ue=ne.filter(Ce=>u.includes(Ce.id)).filter(Ce=>!en.has(Ce.model)),$e={};ue.forEach(Ce=>(Qs[Ce.model]||[]).forEach(nt=>{$e[nt]=($e[nt]||0)+1}));const Ae=Object.entries($e).filter(([,Ce])=>Ce>1).map(([Ce])=>Ce),je=m.querySelector("#ob-sensor-conflict"),st=m.querySelector("#ob-sensor-conflict-msg");je&&st&&(Ae.length>0?(st.textContent=`Plusieurs capteurs mesurent la même métrique (${Ae.join(", ")}). Décochez l'un des capteurs redondants.`,je.style.display="flex"):je.style.display="none")})}),m.querySelectorAll("[data-volume]").forEach(V=>{V.addEventListener("click",()=>{p=V.dataset.volume==="oui",m.querySelectorAll("[data-volume]").forEach(de=>de.classList.toggle("m-ob-plan-card--on",de===V));const Z=m.querySelector("#ob-volume-field");Z&&(Z.style.display=p?"block":"none")})}),(te=m.querySelector("#ob-skip-source"))==null||te.addEventListener("click",()=>{a="smv",y()}),(me=m.querySelector("#ob-parcel-name"))==null||me.addEventListener("input",V=>{b=V.target.value}),h()==="parcelMap"&&se(),h()==="creating"&&setTimeout(()=>{l++,He()},2200),(ie=m.querySelector("#ob-finish"))==null||ie.addEventListener("click",()=>{m.classList.add("m-ob-overlay--out"),setTimeout(()=>{m.remove(),i()},400)}),(le=m.querySelector("#ob-see-parcel"))==null||le.addEventListener("click",()=>{m.classList.add("m-ob-overlay--out"),setTimeout(()=>{m.remove(),i()},400)})}He()}const ln=["Ail","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Colza","Courgette","Féverole","Haricot vert","Laitue","Lin oléagineux","Luzerne","Maïs fourrage","Maïs grain","Orge d'hiver","Orge de printemps","Oignon","Pêcher","Pois protéagineux","Poireau","Poirier","Pomme de terre","Pommier","Prairie","Prunier","Ray-grass","Soja","Tomate","Tournesol","Trèfle","Vigne"];function ss({showBack:e=!0,btnLabel:i="Ajouter",showSkip:t=!1}={}){return`
    <div class="m-ob-screen" style="background:#1c1c1e;padding-bottom:24px">
      <div class="m-ob-topbar" style="background:transparent">
        ${e?'<button class="m-ob-back" id="ob-back" style="color:#fff;background:rgba(255,255,255,.15)"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
        <span class="m-ob-step-label" style="color:#fff">Scanner le code barre</span>
        <button class="m-ob-back" id="ob-close" style="color:#fff;background:rgba(255,255,255,.15);margin-left:auto"><i class="bi bi-x-lg"></i></button>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;padding:0 16px;gap:16px;min-height:0">
        <div style="flex:1;background:#000;border-radius:20px;border:2.5px solid rgba(255,255,255,.85);position:relative;overflow:hidden;min-height:180px">
          <div style="position:absolute;top:18px;left:18px;width:30px;height:30px;border-top:3px solid #fff;border-left:3px solid #fff;border-radius:3px 0 0 0"></div>
          <div style="position:absolute;top:18px;right:18px;width:30px;height:30px;border-top:3px solid #fff;border-right:3px solid #fff;border-radius:0 3px 0 0"></div>
          <div style="position:absolute;bottom:18px;left:18px;width:30px;height:30px;border-bottom:3px solid #fff;border-left:3px solid #fff;border-radius:0 0 0 3px"></div>
          <div style="position:absolute;bottom:18px;right:18px;width:30px;height:30px;border-bottom:3px solid #fff;border-right:3px solid #fff;border-radius:0 0 3px 0"></div>
        </div>
        <div style="background:#fff;border-radius:20px;padding:16px 16px 4px;flex-shrink:0">
          <input class="m-ob-input" id="ob-sensor-serial" type="text" placeholder="Ou entrez le numéro de série du capteur" style="margin-bottom:12px">
          <button class="m-ob-cta" id="ob-next" style="margin:0 0 12px"><i class="bi bi-plus-lg"></i> ${i}</button>
          ${t?'<button class="m-ob-link" id="ob-skip-source" type="button" style="margin-bottom:8px">Passer cette étape</button>':""}
        </div>
      </div>
    </div>`}async function rn(e,i){var t,l,n,o;try{const c=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${i}`)).json();return((t=c.address)==null?void 0:t.village)||((l=c.address)==null?void 0:l.town)||((n=c.address)==null?void 0:n.city)||((o=c.address)==null?void 0:o.municipality)||""}catch{return""}}function cn(e){const i=document.getElementById("phone-screen");let t=46.3021,l=3.2938,n=null,o=null,s=46.3021+45e-5,c=3.2938,p=null,r=null,d="smv",v=[],$="",a=0;const u=["parcelMap","parcelSource","parcelData","parcelConfig","parcelDone"],b={parcelMap:"Parcelle",parcelSource:"Source de données",parcelData:"Données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"},m=document.createElement("div");m.id="parcel-creation-overlay",m.className="m-ob-overlay",i.appendChild(m);function g(){return u[a]}function h(){a++,f()}function w(){a--,f()}function x(S,A=!0){const P=g(),D=A&&a>0&&P!=="parcelDone",_=b[P]||"",B=u.filter(fe=>fe!=="parcelDone"),F=B.indexOf(P),U=F>=0?Math.round(F/B.length*100):100,ee=P!=="parcelDone"?`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${U}%"></div></div>`:"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${D?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${_}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${ee}
        <div class="m-ob-body">${S}</div>
      </div>`}function M(){return x(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-map-fill"></i></div>
        <h2 class="m-ob-h2">Position de la parcelle</h2>
      </div>
      <div id="ob-parcel-map" style="width:100%;height:220px;border-radius:12px;overflow:hidden;margin-bottom:12px"></div>
      <div style="background:#f5f5f7;border-radius:10px;padding:12px 14px;margin-bottom:16px;font-size:13px;color:#3a3a3c;line-height:1.5">
        <i class="bi bi-crosshair2" style="color:#0172A4;margin-right:6px"></i>
        Déplacez le marqueur ou cliquez sur la carte pour positionner le centre de votre parcelle.<br><br>
        <span style="color:#636366">Vous pourrez tracer son contour sur la version web de l'application.</span>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `,!1)}function E(){return x(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(A=>`
          <div class="m-ob-plan-card${d===A.id?" m-ob-plan-card--on":""}" data-psource="${A.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${A.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${A.title}</div>
                <div class="m-ob-plan-desc">${A.desc}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
      <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
    `)}function y(){if(d==="smv")return x(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-cloud-sun"></i></div>
          <h2 class="m-ob-h2">Station météo virtuelle</h2>
          <p class="m-ob-sub">Positionnez la station. Par défaut au centre de la parcelle.</p>
        </div>
        <div id="ob-smv-map" style="width:100%;height:220px;border-radius:12px;overflow:hidden;margin-bottom:12px"></div>
        <div style="background:#f5f5f7;border-radius:10px;padding:12px 14px;margin-bottom:16px;font-size:13px;color:#3a3a3c;line-height:1.5">
          <i class="bi bi-crosshair2" style="color:#0172A4;margin-right:6px"></i>
          Déplacez le marqueur ou cliquez sur la carte pour positionner la station.
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
      `);if(d==="link"){const S=ne.slice(0,6);return x(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-link-45deg"></i></div>
          <h2 class="m-ob-h2">Lier un capteur</h2>
          <p class="m-ob-sub">Sélectionnez les capteurs à lier à cette parcelle.</p>
        </div>
        <div style="background:#fff;border-radius:12px;overflow:hidden;border:.5px solid rgba(0,0,0,.1);margin-bottom:16px">
          ${S.map((A,P)=>`
            <label style="display:flex;align-items:center;gap:12px;padding:12px 14px;${P<S.length-1?"border-bottom:.5px solid rgba(0,0,0,.08)":""};cursor:pointer">
              <input type="checkbox" ${v.includes(A.id)?"checked":""} data-sensor-id="${A.id}" style="width:18px;height:18px;flex-shrink:0">
              <div>
                <div style="font-size:14px;font-weight:600">${A.model}</div>
                <div style="font-size:12px;color:#636366">${A.serial}</div>
              </div>
            </label>`).join("")}
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
        <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
      `)}return ss({showBack:!0,btnLabel:"Continuer",showSkip:!0})}function I(){const S=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),A=new Set(["EC"]),P=ne.filter(F=>v.includes(F.id)),D=P.some(F=>S.has(F.model)),_=P.some(F=>A.has(F.model)),B=oi.filter(F=>F!=="Non renseigné");return $||rn(t,l).then(F=>{if(!F)return;$=F;const U=m.querySelector("#ob-parcel-name");U&&!U._edited&&(U.value=F)}),x(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${$}" placeholder="Chargement…">
        </div>
        ${D?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${Zi.map(F=>`<option>${F}</option>`).join("")}
          </select>
        </div>
        ${_?`
        <div class="m-ob-field">
          <label class="m-ob-label">Substrat</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            <option>Laine de roche</option><option>Fibre de coco</option><option>Perlite</option><option>Terreau</option><option>Sol natif</option>
          </select>
        </div>`:""}
        `:`
        <div class="m-ob-field">
          <label class="m-ob-label">Culture</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="" disabled selected>Sélectionnez une culture</option>
            ${ln.map(F=>`<option>${F}</option>`).join("")}
          </select>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Environnement</label>
          <select class="m-ob-input m-ob-input--select">
            <option selected>Plein champ</option>
            <option>Serre</option>
          </select>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Type d'irrigation</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="" disabled selected>Sélectionnez un type d'irrigation</option>
            ${B.map(F=>`<option>${F}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function C(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub"><strong>${$||"La parcelle"}</strong> a été créée avec succès.</p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function q(){const S=window.L;S&&setTimeout(()=>{const A=m.querySelector("#ob-parcel-map");if(!A||A._leaflet_id)return;o=S.map(A,{zoomControl:!0,attributionControl:!1}).setView([t,l],15),S.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(o),S.circleMarker([t,l],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(o);const P=S.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});n=S.marker([t+45e-5,l],{icon:P,draggable:!0}).addTo(o),n.on("dragend",()=>{const D=n.getLatLng();t=D.lat,l=D.lng}),o.on("click",D=>{t=D.latlng.lat,l=D.latlng.lng,n.setLatLng([t,l])}),o.invalidateSize()},50)}function j(){const S=window.L;S&&(s=t+45e-5,c=l,setTimeout(()=>{const A=m.querySelector("#ob-smv-map");if(!A||A._leaflet_id)return;r=S.map(A,{zoomControl:!0,attributionControl:!1}).setView([t,l],15),S.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(r),S.circleMarker([t,l],{radius:8,color:"#fff",weight:2,fillColor:"#E05252",fillOpacity:1}).addTo(r);const P=S.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#0172A4;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});p=S.marker([s,c],{icon:P,draggable:!0}).addTo(r),p.on("dragend",()=>{const D=p.getLatLng();s=D.lat,c=D.lng}),r.on("click",D=>{s=D.latlng.lat,c=D.latlng.lng,p.setLatLng([s,c])}),r.invalidateSize()},50))}const L={parcelMap:M,parcelSource:E,parcelData:y,parcelConfig:I,parcelDone:C};function f(){var A;const S=(A=L[g()])==null?void 0:A.call(L);S&&(m.innerHTML=S),T()}function k(){m.classList.add("m-ob-overlay--out"),setTimeout(()=>{m.remove(),e()},400)}function T(){var A,P,D,_,B;(A=m.querySelector("#ob-back"))==null||A.addEventListener("click",w),(P=m.querySelector("#ob-close"))==null||P.addEventListener("click",k),m.querySelectorAll("#ob-next").forEach(F=>F.addEventListener("click",h)),m.querySelectorAll("[data-psource]").forEach(F=>{F.addEventListener("click",()=>{d=F.dataset.psource,m.querySelectorAll("[data-psource]").forEach(U=>U.classList.toggle("m-ob-plan-card--on",U===F))})}),m.querySelectorAll("[data-sensor-id]").forEach(F=>{F.addEventListener("change",()=>{const U=parseInt(F.dataset.sensorId);F.checked?v.includes(U)||v.push(U):v=v.filter(ee=>ee!==U)})}),(D=m.querySelector("#ob-skip-source"))==null||D.addEventListener("click",()=>{d="smv",h()});const S=m.querySelector("#ob-parcel-name");S&&S.addEventListener("input",F=>{F.target._edited=!0,$=F.target.value}),g()==="parcelMap"&&q(),g()==="parcelData"&&d==="smv"&&j(),(_=m.querySelector("#ob-see-parcel"))==null||_.addEventListener("click",k),(B=m.querySelector("#ob-finish"))==null||B.addEventListener("click",k)}f()}function dn(e){const i=document.getElementById("phone-screen");let t=0;const l=["sensorAdd","sensorDone"],n=document.createElement("div");n.id="sensor-creation-overlay",n.className="m-ob-overlay",i.appendChild(n);function o(){return l[t]}function s(){t++,v()}function c(){return ss({showBack:!1,btnLabel:"Enregistrer le capteur",showSkip:!1})}function p(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Capteur ajouté !</h2>
        <p class="m-ob-sub">Votre capteur a été enregistré avec succès.</p>
        <button class="m-ob-cta" id="ob-see-sensor" style="margin-top:32px"><i class="bi bi-broadcast"></i> Voir le capteur</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function r(){n.classList.add("m-ob-overlay--out"),setTimeout(()=>{n.remove(),e()},400)}function d(){var $,a,u,b;($=n.querySelector("#ob-close"))==null||$.addEventListener("click",r),(a=n.querySelector("#ob-next"))==null||a.addEventListener("click",s),(u=n.querySelector("#ob-see-sensor"))==null||u.addEventListener("click",r),(b=n.querySelector("#ob-finish"))==null||b.addEventListener("click",r)}function v(){var u;const $={sensorAdd:c,sensorDone:p},a=(u=$[o()])==null?void 0:u.call($);a&&(n.innerHTML=a),d()}v()}const ns={admin:100,adherent:1,new:41},as="weenat-m-dash";function pt(){try{return JSON.parse(localStorage.getItem(as))||{}}catch{return{}}}function wi(e){try{localStorage.setItem(as,JSON.stringify({...pt(),...e}))}catch{}}const we=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls préférés",info:"Mes cumuls préférés.<br><br>Ajoutez ici les valeurs des cumuls qui sont importants pour vous en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures préférées",info:"Mes mesures préférées.<br><br>Ajoutez ici les indicateurs de vos parcelles ou capteurs qui vous intéressent en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"radar_pluie",title:"Radar de pluie",icon:"bi-cloud-rain-heavy",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function un(e,i,t){var o;const l=document.getElementById("phone-screen");(o=document.querySelector(".m-winfo-overlay"))==null||o.remove();const n=document.createElement("div");n.className="m-winfo-overlay",n.innerHTML=`
    <div class="m-winfo-modal">
      <div class="m-winfo-hd">
        <span class="m-winfo-title">${e}</span>
        <button class="m-winfo-close" type="button"><i class="bi bi-x"></i></button>
      </div>
      <div class="m-winfo-gif">
        ${t?`<img src="${t}" alt="${e}">`:'<div class="m-winfo-gif-placeholder"><i class="bi bi-play-circle" style="font-size:28px;display:block;margin-bottom:6px"></i>GIF à venir</div>'}
      </div>
      <div class="m-winfo-body">${i}</div>
    </div>`,n.querySelector(".m-winfo-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",s=>{s.target===n&&n.remove()}),l.appendChild(n)}function Be(e){var l;const i=document.getElementById("phone-screen");(l=document.querySelector(".m-toast"))==null||l.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Fe({title:e,body:i,doneLabel:t="Fermer",onDone:l}={}){var c;const n=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{l==null||l(),s()}),o.addEventListener("click",p=>{p.target===o&&s()}),o}const Si=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function Ei(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=Si[Math.floor(Math.random()*Si.length)],l=t.label==="Pluie"||t.label==="Averses",n=Math.round(8+Math.random()*8),o=Math.round(16+Math.random()*14),s=Array.from({length:24},(c,p)=>{const r=Math.sin(Math.PI*(p-6)/12),d=Math.round(n+(o-n)*Math.max(0,r)),v=l&&p>=8&&p<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:p,label:`${String(p).padStart(2,"0")}h`,temp:d,pluie:v,hum:Math.round(85-40*Math.max(0,r)),vent:Math.round(10+Math.random()*20),icon:v>0?"bi-cloud-rain-fill":p<7||p>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:l?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:n,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:o,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function Ht(e){const i=e.id,t=e.reserveHydrique||50,l=+((i*2.3+7)%32).toFixed(1),n=+((i*1.1+14)%14+10).toFixed(1),o=+((i*.6+1)%6).toFixed(1),s=Math.round(t*((i%5+1)/10)),c=Math.max(0,+(s+l-n-o).toFixed(0)),p=c<s?s-c:0;return{j0:s,j7:c,bilan:p}}const kt=4,Bt=5,ki=["#0172A4","#ff8500","#30d158","#bf5af2"],os={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548"},Xt={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol"},pn={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C"},Ci={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},mn=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function ls(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function vn(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const n=new Set(t);return i.filter(o=>o.parcelIds.includes(+e.slice(2))).forEach(o=>(Ci[o.model]||[]).forEach(s=>n.add(s))),[...n].filter(o=>o in Xt)}const l=i.find(n=>n.id===+e.slice(2));return l?Ci[l.model]||[]:[]}function bn(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let ze=[],Ie=[];(()=>{const e=pt();if(e.catalog){const i=e.catalog.map(t=>t.id);we.sort((t,l)=>{const n=i.indexOf(t.id),o=i.indexOf(l.id);return(n<0?999:n)-(o<0?999:o)}),e.catalog.forEach(t=>{const l=we.find(n=>n.id===t.id);l&&(l.active=t.active)})}e.mesuresList&&(ze=e.mesuresList),e.cumulsList&&(Ie=e.cumulsList)})();function fn(e,i,t){const l=[...e+i].reduce((s,c)=>s+c.charCodeAt(0),1),n=s=>(Math.sin(l*.07+s*.5)+Math.sin(l*.03+s*1.3))/2+.5,o={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(s,c)=>o.sparse&&n(c*3.7)>.28?0:Math.max(0,o.base+o.amp*n(c*.28+1.2)))}const hn=new Set(["pluie","etp"]);function gn(e,i){var w;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,l=fn(e.subjectKey,e.metricId,t),n=270,o=100,s=28,c=14,p=Math.max(...l,1),r=hn.has(e.metricId);let d,v="";for(let x=0;x<=2;x++){const M=Math.round(x/2*(o-c-4)+4);v+=`<line x1="${s}" y1="${M}" x2="${s+n}" y2="${M}" stroke="#E8E6E0" stroke-width=".5"/>`,v+=`<text x="${s-3}" y="${M+3}" text-anchor="end" font-size="8" fill="#636366">${+(p*(1-x/2)).toFixed(p<5?1:0)}</text>`}const $=bn(e.period,e.step),a=$.map((x,M)=>`<text x="${s+Math.round(M/($.length-1)*n)}" y="${o+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${x}</text>`).join(""),u=JSON.stringify(l.map(x=>+x.toFixed(2))),b=os[e.metricId]||e.color,m=e.metricId==="pluie"?"#2E75B6":b;if(r){const x=Math.max(1,n/t*.7),M=l.map((E,y)=>{const I=Math.round(E/p*(o-c-4)),C=s+Math.round(y/(t-1)*n)-x/2,q=o-c-I;return`<rect x="${C.toFixed(1)}" y="${q.toFixed(1)}" width="${x.toFixed(1)}" height="${I.toFixed(1)}" fill="${m}" opacity=".85" rx="1"/>`}).join("");d=`<svg viewBox="0 0 ${s+n} ${o+6}" style="width:100%;display:block;overflow:visible">${v}${M}${a}</svg>`}else{const x=l.map((M,E)=>`${s+Math.round(E/(t-1)*n)},${o-c-Math.round(M/p*(o-c-4))}`).join(" ");d=`<svg viewBox="0 0 ${s+n} ${o+6}" style="width:100%;display:block;overflow:visible">
      ${v}
      <polyline points="${x}" fill="none" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${o}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${a}
    </svg>`}const g=(w=e.subjectKey)!=null&&w.startsWith("s-")?e.subjectKey.slice(2):null,h=g?`<button class="m-wf-view-data" data-sensor-id="${g}" data-period="${e.period}" data-step="${e.step}" style="display:flex;align-items:center;gap:4px;margin-top:8px;padding:6px 10px;border:none;background:rgba(0,122,255,.08);border-radius:8px;color:#007AFF;font-size:12px;font-weight:600;cursor:pointer;width:100%;justify-content:center">Voir les données <i class="bi bi-fullscreen" style="font-size:11px"></i></button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?m:b}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${u}' style="position:relative;margin-top:4px">
        ${d}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${h}
    </div>`}function Li(e,i){const t=ze.length>=kt,l=e.map(c=>`<option value="p-${c.id}">${ft(c)}</option>`).join(""),n=i.filter(c=>c.parcelIds.length>0).map(c=>`<option value="s-${c.id}">${ht(c,e)}</option>`).join(""),o=ls("7d");return`
    <div id="msr-list">${ze.length?ze.map(gn).join(""):'<div class="m-wf-empty">Ajoutez ici les mesures que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${ze.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${kt}/${kt})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez une mesure pour en ajouter une nouvelle.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="msr-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${l}</optgroup>
        ${n?`<optgroup label="Capteurs">${n}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period">
          ${mn.map(c=>`<option value="${c.id}"${c.id==="7d"?" selected":""}>${c.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${o.map(c=>`<option value="${c.id}">${c.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Ajouter la mesure</button>
    </div>`}`}function yn(e,i){const t=new Date().toISOString().split("T")[0],l=new Date;l.setDate(l.getDate()+7);const n=l.toISOString().split("T")[0];return pe.filter(o=>!o.real&&o.iso>=t&&o.iso<=n&&o.plotId===e.id).reduce((o,s)=>o+s.mm,0)}const Ai=9;function at(e,i=!1,t=pt().sensorlessEnabled??!0){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const l=[],n=e.slice(),o=(m,g)=>Ht(g).bilan-Ht(m).bilan,s=[...l.flatMap(m=>m.ids.map(g=>e.find(h=>h.id===g)).filter(Boolean).sort(o)),...n.slice().sort(o)],c=i?s:s.slice(0,Ai),p=new Set(c.map(m=>m.id)),r=s.length-c.length,d=m=>{const g=ne.some(I=>I.parcelIds.includes(m.id)&&(I.model.startsWith("CHP")||I.model.startsWith("CAPA")||I.model.startsWith("EC"))),{j0:h,j7:w,bilan:x}=Ht(m),M=yn(m),E=g?h:'<span style="color:#aeaeb2">—</span>',y=g?w:'<span style="color:#aeaeb2">—</span>';return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${m.id}">${m.name}</button>
      <div class="m-bh-td">${E}</div>
      <div class="m-bh-td">${y}</div>
      ${t?`<div class="m-bh-td m-bh-td--reco">${x>0?x:"—"}</div>`:""}
      <div class="m-bh-td m-bh-td--planif">${M>0?M:"—"}</div>`};let v="";for(const m of l){const g=m.ids.map(h=>e.find(w=>w.id===h)).filter(Boolean).filter(h=>p.has(h.id)).sort(o);g.length&&(v+=`<div class="m-bh-group-row" style="background:rgba(0,0,0,.035)">⬡ ${m.label}</div>`,v+=g.map(d).join(""))}const $=n.filter(m=>p.has(m.id)).sort(o);$.length&&l.length&&(v+='<div class="m-bh-group-row">⬡ Autres parcelles</div>'),v+=$.map(d).join("");const a=t?"1fr 38px 38px 46px 46px":"1fr 38px 38px 46px",u=t?2:1,b=s.length>Ai?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${r} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${a}">
        <div class="m-bh-gh"></div>
        <div class="m-bh-gh" style="grid-column:span 2">Niveau RFU</div>
        <div class="m-bh-gh" style="grid-column:span ${u}">Irrigations J+7</div>
        <div class="m-bh-th m-bh-unit-lbl">données en mm</div>
        <div class="m-bh-th">J0</div>
        <div class="m-bh-th">J+7</div>
        ${t?'<div class="m-bh-th">Reco.</div>':""}
        <div class="m-bh-th">Planif.</div>
        ${v}
      </div>
    </div>
    ${b}
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
    </div>`}const Ft=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function xn(e,i,t,l){Object.fromEntries(ge.map(a=>[a.id,a]));const n=e.map(a=>`<option value="p-${a.id}">${Ft(ft(a))}</option>`).join(""),o=i.map(a=>`<option value="s-${a.id}">${Ft(ht(a,e))}</option>`).join(""),s=`
    <optgroup label="Parcelles">${n}</optgroup>
    ${o?`<optgroup label="Capteurs">${o}</optgroup>`:""}`,c=(a,u)=>{const b=`${a.dayLabel.charAt(0).toUpperCase()+a.dayLabel.slice(1)} · ${a.dateStr}`;return`
    <div class="m-prev-card" data-day="${u}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${a.icon}" style="color:${a.color};font-size:26px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${b}</span>
          <span class="m-prev-card-cond">${a.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-tbl">
        <div class="m-prev-tbl-cell">
          <i class="bi bi-cloud-rain" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${a.pluie}</span>
          <span class="m-prev-tbl-unit">mm</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-thermometer-half" style="color:#E05252"></i>
          <span class="m-prev-tbl-val">${a.tMin}–${a.tMax}</span>
          <span class="m-prev-tbl-unit">°C</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-droplet" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${a.humMoy}</span>
          <span class="m-prev-tbl-unit">%</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-wind" style="color:#636366"></i>
          <span class="m-prev-tbl-val">${a.ventMoy}/<em>${a.ventRafales}</em></span>
          <span class="m-prev-tbl-unit">km/h</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-moisture" style="color:#24B066"></i>
          <span class="m-prev-tbl-val">${a.etp}</span>
          <span class="m-prev-tbl-unit">ETP</span>
        </div>
      </div>
    </div>`},p=t.slice(0,3).map(c).join(""),r=t.slice(3).map(c).join(""),d=ge.find(a=>a.id===(l==="admin"?100:1)),v=(d==null?void 0:d.adresse)||"";return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${v?`<option value="addr">${Ft(`${d.name} — ${d.ville||v}`)}</option>`:""}${s}</select>
    <div class="m-prev-cards">
      ${p}
      <div class="m-prev-extra" style="display:none">${r}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Re=[{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:null},{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],rs=new Set(Re.flatMap(e=>e.needsModels||[]));function Rt(e){if(!e)return Re;if(e.startsWith("s-")){const t=ne.find(l=>l.id===+e.slice(2));return t?Re.filter(l=>l.needsModels===null||l.needsModels.includes(t.model)):Re}const i=new Set(ne.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Re.filter(t=>t.needsModels===null||t.needsModels.some(l=>i.has(l)))}const Mi={etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#FEE7B4"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function $n(){return Ie.length?Ie.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
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
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function Ti(e,i,t){if(!e||!i)return null;const l=Re.find(s=>s.id===t)||Re[0],n=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),o=e.split("").reduce((s,c)=>s+c.charCodeAt(0),0)+n;return+(l.base+o%(l.amp*10)/10).toFixed(1)}function Ii(e,i){const t=Ie.length>=Bt,l=`${new Date().getFullYear()}-01-01`,n=i.filter(p=>p.parcelIds.length>0&&rs.has(p.model)),o=e.map(p=>`<option value="p-${p.id}">${ft(p)}</option>`).join(""),s=n.map(p=>`<option value="s-${p.id}">${ht(p,e)}</option>`).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${Ie.length?$n():'<div class="m-wf-empty">Ajoutez ici les cumuls que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Ie.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${Bt}/${Bt})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez un cumul pour en ajouter un nouveau.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="cumuls-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${o}</optgroup>
        ${s?`<optgroup label="Capteurs">${s}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="cumuls-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div id="cumuls-thresholds"></div>
      <div class="m-wf-row">
        <div class="m-wf-field">
          <span class="m-wf-label">Depuis le</span>
          <input type="date" class="m-wf-date" id="cumuls-from" value="${l}">
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Ajouter le cumul</button>
    </div>`}`}function wn(e){const i=e.id,t=new Date;let l,n;i%5===3?(l=0,n=(t.getHours()+2+i%3*3)%24):(l=(i*2+1)%6+1,n=6+i%5*2);const o=2+i%3,s=new Date(t);s.setDate(s.getDate()+l);const c=l===0?"Aujourd'hui":s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),p=l*1440+n*60-(t.getHours()*60+t.getMinutes());return{winDateStr:c,winHour:n,winDur:o,minutesFromNow:p}}const Sn="#1a9e40";function En(e){const t=e.filter(n=>n.crop).map(n=>({p:n,d:wn(n)})).filter(({d:n})=>n.minutesFromNow>=0&&n.minutesFromNow<=1440).sort((n,o)=>n.d.minutesFromNow-o.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:n,d:o})=>{const s=String(o.winHour).padStart(2,"0"),c=String((o.winHour+o.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${n.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${n.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${Sn};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
            <i class="bi bi-check2-circle" style="font-size:12px"></i>
            ${o.winDateStr} · ${s}h–${c}h
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const cs="weenat-m-traitements";function dt(){try{return JSON.parse(localStorage.getItem(cs))||[]}catch{return[]}}function li(e){localStorage.setItem(cs,JSON.stringify(e))}function kn(e,i){let t=new Set;const l=[],n=new Date().toISOString().split("T")[0];function o(){return Tt(l,e,t)}function s(r){const d=t.size,v=r.querySelector(".irr-summary"),$=r.querySelector(".irr-save-btn");!v||!$||(v.textContent=d===0?"":`${d} parcelle${d>1?"s":""}`,$.disabled=d===0)}function c(r){var d;(d=r.querySelector("#irr-sel-all"))==null||d.addEventListener("click",()=>{const v=e.every($=>t.has($.id));e.forEach($=>v?t.delete($.id):t.add($.id)),r.querySelector("#trait-sel-list").innerHTML=o(),c(r),s(r)}),r.querySelectorAll(".irr-group-card").forEach(v=>{v.addEventListener("click",()=>{const $=v.dataset.gids.split(",").map(Number),a=$.every(u=>t.has(u));$.forEach(u=>a?t.delete(u):t.add(u)),r.querySelector("#trait-sel-list").innerHTML=o(),c(r),s(r)})}),r.querySelectorAll(".irr-plot-row").forEach(v=>{v.addEventListener("click",()=>{const $=+v.dataset.pid;t.has($)?t.delete($):t.add($),r.querySelector("#trait-sel-list").innerHTML=o(),c(r),s(r)})})}const p=et(xe(`
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
            <input type="date" class="irr-date-input" id="trait-date" value="${n}">
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
      <div id="trait-sel-list">${o()}</div>
    </div>
    <div class="irr-bottom-bar" style="border-top-color:rgba(48,209,88,.2)">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled style="background:#1a9e40;border-color:#1a9e40">Enregistrer</button>
    </div>
  `));c(p),s(p),p.querySelector("#trait-back").addEventListener("click",he),p.querySelector(".irr-save-btn").addEventListener("click",()=>{const r=p.querySelector("#trait-date").value||n,d=p.querySelector("#trait-produit").value.trim()||"—",v=p.querySelector("#trait-dose").value.trim()||"—",$=dt();$.unshift({id:Date.now(),date:r,produit:d,dose:v,plotIds:[...t]}),li($),he(),i("Traitement enregistré")})}function Cn(e,i,t){const l=i==="adherent"?ns.adherent:null,n=l!==null?ce.filter(r=>r.orgId===l):ce;let o=null;const s=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Tableau de bord</span></button>
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-right:44px">Traitements</span>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:10px 16px 4px">
        <select id="trait-filter" class="m-prev-select" style="margin-bottom:0">
          <option value="">Toutes les parcelles</option>
          ${n.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}
        </select>
      </div>
      <div id="trait-cal-content" style="padding:6px 16px 16px"></div>
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",he);const c=r=>{const[d,v,$]=r.split("-");return`${$}/${v}/${d}`};function p(){const r=s.querySelector("#trait-cal-content");let d=dt();if(o!==null&&(d=d.filter(v=>(v.plotIds||[]).includes(o))),!d.length){r.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}r.innerHTML=d.map(v=>{const $=(v.plotIds||[]).map(a=>{var u;return(u=e.find(b=>b.id===a))==null?void 0:u.name}).filter(Boolean);return`
        <div class="m-trait-cal-card" data-id="${v.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${c(v.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${$.length} parcelle${$.length>1?"s":""}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${v.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${v.dose}</div>
          ${$.length?`<div style="font-size:11px;color:#8e8e93;margin-top:6px">${$.join(", ")}</div>`:""}
        </div>`}).join(""),r.querySelectorAll(".m-trait-cal-card").forEach(v=>{v.addEventListener("click",()=>{const $=+v.dataset.id,u=dt().find(h=>h.id===$);if(!u)return;const b=(u.plotIds||[]).map(h=>{var w;return(w=e.find(x=>x.id===h))==null?void 0:w.name}).filter(Boolean),m=document.createElement("div");m.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${c(u.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${u.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${u.dose}</div>
            ${b.length?`<div style="font-size:12px;color:#8e8e93">${b.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const g=Fe({title:"Traitement",body:m,doneLabel:"Fermer",onDone:()=>{}});m.querySelector("#tcal-del").addEventListener("click",()=>{const h=dt().filter(w=>w.id!==$);li(h),g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{g.remove(),p()},280),t("Traitement supprimé")}),m.querySelector("#tcal-edit").addEventListener("click",()=>{g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>g.remove(),280),Ln(u,e,t,p)})})})}s.querySelector("#trait-filter").addEventListener("change",r=>{o=r.target.value?+r.target.value:null,p()}),p()}function Ln(e,i,t,l){const n=document.createElement("div");n.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="tedit-date" value="${e.date}">
      </div>
      <div>
        <div class="m-form-label">Produit</div>
        <input type="text" class="m-sheet-input" id="tedit-produit" value="${e.produit}">
      </div>
      <div>
        <div class="m-form-label">Dose</div>
        <input type="text" class="m-sheet-input" id="tedit-dose" value="${e.dose}">
      </div>
    </div>`,Fe({title:"Modifier le traitement",body:n,doneLabel:"Enregistrer",onDone:()=>{const o=dt(),s=o.findIndex(c=>c.id===e.id);s!==-1&&(o[s].date=n.querySelector("#tedit-date").value||e.date,o[s].produit=n.querySelector("#tedit-produit").value.trim()||e.produit,o[s].dose=n.querySelector("#tedit-dose").value.trim()||e.dose,li(o)),t("Traitement modifié"),l()}})}const An={"capteur déplacé":"M12 2c-2.117 0-3.98.741-5.588 2.225C4.803 5.708 4 7.699 4 10.199c0 1.6.6 3.322 1.8 5.164C7 17.205 8.818 19.2 11.25 21.35a1.2 1.2 0 0 0 .75.275 1.2 1.2 0 0 0 .75-.275c2.433-2.15 4.25-4.145 5.45-5.987C19.4 13.521 20 11.8 20 10.2c0-2.5-.803-4.491-2.412-5.974C15.98 2.74 14.117 2 12 2zm0 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 7v3a.969.969 0 0 1-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287A.966.966 0 0 1 11 10V7c0-.283.095-.52.287-.713A.969.969 0 0 1 12 6zm0 7a.97.97 0 0 1 .713.287c.191.192.287.43.287.713s-.096.522-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287c-.192-.191-.287-.43-.287-.713s.095-.52.287-.713A.969.969 0 0 1 12 13z","émissions interrompues":"M19.075 21.9 8.125 10.975c-.033.167-.063.333-.087.5S8 11.817 8 12c0 .383.046.746.138 1.087.091.342.229.663.412.963.15.25.217.517.2.8a1.04 1.04 0 0 1-.3.7c-.2.2-.438.292-.713.275s-.487-.133-.637-.35c-.35-.5-.62-1.042-.813-1.625A5.889 5.889 0 0 1 6 12a5.985 5.985 0 0 1 .575-2.575L5.1 7.95c-.35.6-.62 1.238-.813 1.913A7.79 7.79 0 0 0 4 12a7.855 7.855 0 0 0 1.675 4.9c.183.233.27.487.262.762-.008.275-.112.513-.312.713a.916.916 0 0 1-1.375-.05c-.7-.867-1.25-1.837-1.65-2.913S2 13.2 2 12c0-1.033.146-2.008.437-2.925A10.71 10.71 0 0 1 3.65 6.5L2.075 4.925a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725a.948.948 0 0 1 .7-.275c.283 0 .525.092.725.275l16.975 17c.183.183.275.417.275.7s-.092.517-.275.7c-.2.2-.442.3-.725.3s-.517-.1-.7-.3zm1.275-4.4-1.45-1.45c.35-.6.62-1.238.813-1.913S20 12.75 20 12a7.854 7.854 0 0 0-1.675-4.9c-.183-.233-.27-.487-.263-.762s.113-.513.313-.713a.916.916 0 0 1 1.375.05c.7.867 1.25 1.833 1.65 2.9.4 1.067.6 2.208.6 3.425 0 1.017-.146 1.988-.438 2.913S20.867 16.7 20.35 17.5zm-2.925-2.925-1.55-1.55c.033-.167.062-.333.087-.5S16 12.183 16 12c0-.383-.046-.746-.138-1.088s-.229-.662-.412-.962a1.367 1.367 0 0 1-.2-.8 1.04 1.04 0 0 1 .3-.7.93.93 0 0 1 .712-.287.76.76 0 0 1 .638.337c.35.483.62 1.025.813 1.625.191.6.287 1.225.287 1.875a5.985 5.985 0 0 1-.575 2.575z","capteur couché":"M6 5a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h7a1 1 0 1 0 0-2h-7V7a2 2 0 0 0-2-2H6zm3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 16v2h20v-2H2z","cuillère bloquée":"M17.615 3.25c-.268 0-.537.103-.742.309L3.508 16.922a1.05 1.05 0 0 0 0 1.486l.031.027-.002.002.05.041c.459.438 1.055.718 1.733.813.678.094 1.416 0 2.139-.274a5.793 5.793 0 0 0 2.018-1.322 5.802 5.802 0 0 0 1.322-2.02c.411-1.087.411-2.189 0-3.074l7.558-7.558a1.047 1.047 0 0 0 0-1.485 1.046 1.046 0 0 0-.742-.308zm-1.037 8.416a.473.473 0 0 0-.35.137l-1.05 1.05a.435.435 0 0 0-.106.163.555.555 0 0 0-.031.187c0 .067.01.13.031.188.02.058.055.112.105.162l1.051 1.05a.473.473 0 0 0 .35.137.472.472 0 0 0 .488-.488.474.474 0 0 0-.138-.35l-.2-.199h.037c.834 0 1.542.292 2.125.875.584.584.875 1.292.875 2.125 0 .675-.198 1.274-.593 1.799a3.032 3.032 0 0 1-1.532 1.088.527.527 0 0 0-.267.187.465.465 0 0 0-.108.287c0 .167.06.3.176.4.117.1.254.13.412.089a3.912 3.912 0 0 0 2.1-1.426 3.882 3.882 0 0 0 .812-2.424c0-1.116-.387-2.063-1.162-2.838-.775-.775-1.72-1.162-2.838-1.162h-.037l.2-.201a.474.474 0 0 0 .138-.35.473.473 0 0 0-.488-.486zm-2.563 2.344a.462.462 0 0 0-.337.156c-.292.358-.516.75-.674 1.18-.159.429-.239.882-.239 1.357 0 .917.271 1.728.813 2.432a3.922 3.922 0 0 0 2.1 1.418.442.442 0 0 0 .414-.082.479.479 0 0 0 .173-.393.532.532 0 0 0-.375-.488 2.946 2.946 0 0 1-1.53-1.08 2.939 2.939 0 0 1-.595-1.807c0-.341.054-.666.163-.974.108-.309.262-.594.462-.852a.565.565 0 0 0 .131-.375.477.477 0 0 0-.142-.336.48.48 0 0 0-.364-.156z"},qi=new Set(["P+","PT","P"]);function ft(e){return[e.name,e.crop].filter(Boolean).join(" — ")}function ht(e,i){var o,s;const t=Object.fromEntries(ge.map(c=>[c.id,c])),l=ds[e.model]||e.model,n=((o=(e.parcelIds||[]).map(c=>i.find(p=>p.id===c)).filter(Boolean).find(c=>c.ville))==null?void 0:o.ville)||((s=t[e.orgId])==null?void 0:s.ville)||"";return[l,e.serial,n].filter(Boolean).join(" — ")}const ds={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function Mn(e,i){const t=Object.fromEntries(ge.map(n=>[n.id,n])),l=i.filter(n=>n.event?(Array.isArray(n.event)?n.event:[n.event]).filter(c=>c!=="cuillère bloquée"||qi.has(n.model)).length>0:!1);return l.length?`<div class="m-w-list">${l.map(n=>{var d;const o=e.find(v=>(n.parcelIds||[]).includes(v.id)),s=(o==null?void 0:o.ville)||((d=t[n.orgId])==null?void 0:d.ville)||"",p=(Array.isArray(n.event)?n.event:[n.event]).filter(v=>v!=="cuillère bloquée"||qi.has(n.model)).map(v=>{const $=An[v]||"";return`<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:#ff3b30;border-radius:6px;flex-shrink:0" title="${v}"><svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="${$}"/></svg></span>`}).join(""),r=ds[n.model]||n.model;return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${n.id}">
      <div style="flex:1;min-width:0">
        <div class="m-w-row-name">${r}</div>
        <div style="font-size:12px;color:#636366;margin-top:1px">${n.model} — ${n.serial}</div>
        ${s?`<div style="font-size:11px;color:#8e8e93;margin-top:1px">${s}</div>`:""}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;width:61px;justify-content:flex-end">${p}</div>
        <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const us={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},Tn={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function In(e){const i=e.id,t=us[e.crop]||Tn,l=i%t.stages.length,n=(i*2+5)%18+4,o=new Date("2026-04-18");o.setDate(o.getDate()+n);const s=o.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[l],nextStage:t.nextStages[l],variety:t.varieties[i%t.varieties.length],nextDateStr:s,daysToNext:n}}function qn(e){const i=e.filter(n=>n.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const n of i)t[n.crop]||(t[n.crop]=[]),t[n.crop].push(n);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([n,o])=>{const s=o.map(c=>{const p=!!us[c.crop],r=p?In(c):null,d=p&&r.variety!=="—"?r.variety:"",v=p?r.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${c.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${c.name}</div>
          ${d?`<div class="m-w-row-sub">${d}</div>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${v}</div>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>`}).join("");return`<details class="m-crop-group">
      <summary class="m-crop-summary">
        <div class="m-crop-summary-left">
          <div class="m-crop-summary-name">${n}</div>
          <div class="m-crop-summary-count">${o.length} parcelle${o.length>1?"s":""}</div>
        </div>
        <i class="bi bi-chevron-right m-crop-chevron"></i>
      </summary>
      <div class="m-crop-plots">${s}</div>
    </details>`}).join("")}`}const ps="weenat-m-notes";function Ue(){try{return JSON.parse(localStorage.getItem(ps))||[]}catch{return[]}}function Ot(e){localStorage.setItem(ps,JSON.stringify(e))}function Pi(e){const i=Ue(),t=g=>{const[h,w,x]=g.split("-");return`${x}/${w}/${h}`},l=g=>g.length>70?g.slice(0,70)+"…":g,n=(g,h)=>{const w=g.text.length>70,x=(g.imageIds||[]).length,M=x>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${x} photo${x>1?"s":""}</span>`:"",E=g.linkedType?`<span style="font-size:10px;background:${g.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${g.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${g.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${g.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${h}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${w||x>0||g.linkedType?"pointer":"default"}">
        <button class="m-note-del m-del-btn" data-idx="${h}" style="position:absolute;top:8px;right:8px">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span>${t(g.date)}${g.time?" · "+g.time:""}</span>
          ${g.auteur?`<span style="color:#636366;font-weight:500">${g.auteur}</span>`:""}
          ${g.role?`<span style="font-size:10px;background:${g.role==="conseiller"?"#eef4ff":"#f2f2f7"};color:${g.role==="conseiller"?"#3a7bd5":"#636366"};border-radius:4px;padding:1px 5px;font-weight:500">${g.role==="conseiller"?"Conseiller":"Membre"}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${l(g.text)}</div>
        ${E||M?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${E}${M}</div>`:""}
      </div>`},o=i.slice(0,5),s=o.length?o.map((g,h)=>n(g,h)).join(""):"",c=new Date,p=c.toISOString().slice(0,10),r=`${String(c.getHours()).padStart(2,"0")}:${String(c.getMinutes()).padStart(2,"0")}`,d=ge.find(g=>g.id===(e==="admin"?100:1)),v=d?`${d.prenomProprietaire} ${d.nomProprietaire}`:"",$=d==null?void 0:d.id,a=e==="adherent"?ce.filter(g=>g.orgId===$):ce,u=e==="adherent"?ne.filter(g=>g.parcelIds.some(h=>a.some(w=>w.id===h))):ne,b=a.map(g=>`<option value="p-${g.id}">${ft(g)}</option>`).join(""),m=u.map(g=>`<option value="s-${g.id}">${ht(g,a)}</option>`).join("");return`
    ${s?`<div id="notes-list" style="margin-bottom:12px">${s}</div>`:""}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:8px">
      <select id="notes-link" class="m-sheet-input">
        <option value="">— Sans lien —</option>
        <optgroup label="Parcelles">${b}</optgroup>
        <optgroup label="Capteurs">${m}</optgroup>
      </select>
      <textarea id="notes-input" class="m-sheet-input" placeholder="Votre note…" rows="2" style="resize:none"></textarea>
      <div style="display:flex;gap:6px">
        <input type="date" id="notes-date" class="m-sheet-input" value="${p}" style="flex:1">
        <input type="time" id="notes-time" class="m-sheet-input" value="${r}" style="flex:1">
      </div>
    </div>
    <div class="jrn-img-zone" style="margin-bottom:8px">
      <div class="jrn-img-previews" id="notes-previews"></div>
      <button type="button" class="jrn-img-add-btn" id="notes-img-btn"><i class="bi bi-camera"></i> Ajouter une photo</button>
      <input type="file" id="notes-img-input" accept="image/*" multiple style="display:none">
      <div class="jrn-img-error" id="notes-img-error"></div>
    </div>
    <input type="hidden" id="notes-auteur" value="${v}">
    <button id="notes-add" class="m-btn m-btn--primary" style="margin-bottom:6px">Ajouter la note</button>
    <button id="notes-view" class="m-btn m-btn--secondary">Voir les notes${i.length?` (${i.length})`:""}</button>`}function Pn(e){const i=ce.map(n=>n.orgId).filter((n,o,s)=>s.indexOf(n)===o&&n!==100).length,t=ne.length,l=ce.length;return`
    <div class="m-reseau-name">${De.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${l}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${De.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${De.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${De.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${De.siege.adresse}, ${De.siege.codePostal} ${De.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function jn(){return`
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
    </a>`}const ji=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Dn(){var r;const e=document.getElementById("phone-screen");(r=document.querySelector(".m-sheet-overlay"))==null||r.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),l=i.querySelector("#chat-input"),n=i.querySelector("#chat-send"),o=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",o),i.addEventListener("click",d=>{d.target===i&&o()});function s(d,v){const $=document.createElement("div");$.className=`m-chat-msg m-chat-msg--${v}`,$.innerHTML=`<div class="m-chat-bubble">${d}</div>`,t.appendChild($),t.scrollTop=t.scrollHeight}function c(){const d=document.createElement("div");return d.className="m-chat-msg m-chat-msg--bot m-chat-typing",d.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(d),t.scrollTop=t.scrollHeight,d}function p(){const d=l.value.trim();if(!d)return;s(d,"user"),l.value="",n.disabled=!0;const v=c();setTimeout(()=>{v.remove();const $=ji[Math.floor(Math.random()*ji.length)];s($,"bot"),n.disabled=!1,l.focus()},1200+Math.random()*800)}n.addEventListener("click",p),l.addEventListener("keydown",d=>{d.key==="Enter"&&p()}),setTimeout(()=>l.focus(),350)}function zn(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const l=ns[i]||1,n=l===100?ce:ce.filter(f=>f.orgId===l),o=new Set(n.map(f=>f.id)),s=ne.filter(f=>f.parcelIds.some(k=>o.has(k)));let c=Ei(),p=null,r=null;function d(){return i!=="admin"?n:p===null?ce:ce.filter(f=>f.orgId===p)}function v(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${ge.filter(k=>k.id!==100).sort((k,T)=>k.name.localeCompare(T.name)).map(k=>`<option value="${k.id}">${k.name}</option>`).join("")}
    </select>`}const $=pt(),a=new Set(["mon_reseau","support"]),u=new Set($.collapsed??we.map(f=>f.id).filter(f=>!a.has(f)));function b(){wi({catalog:we.map(f=>({id:f.id,active:f.active})),collapsed:[...u],mesuresList:ze,cumulsList:Ie})}function m(){return`
      <div class="m-onboard-grid">
        <div class="m-onboard-card">
          <div class="m-onboard-hd">
            <div class="m-onboard-icon" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-broadcast"></i></div>
            <div class="m-onboard-title">Ajouter un capteur</div>
          </div>
          <div class="m-onboard-desc">Ajoutez vos capteurs pour accéder aux mesures.</div>
          <button class="m-onboard-btn" data-action="add-sensor" type="button">Ajouter</button>
        </div>
        <div class="m-onboard-card">
          <div class="m-onboard-hd">
            <div class="m-onboard-icon" style="background:#30d15820;color:#30d158"><i class="bi bi-map"></i></div>
            <div class="m-onboard-title">Créer une parcelle</div>
          </div>
          <div class="m-onboard-desc">Créez vos parcelles pour réunir vos capteurs et agréger vos données, gérer votre parcellaire, suivre vos cultures et piloter vos interventions et irrigations.</div>
          <button class="m-onboard-btn" data-action="add-parcel" type="button">Créer</button>
        </div>
      </div>`}function g(){return`
      <div style="position:relative">
        <div id="radar-map" style="width:100%;aspect-ratio:1/1.4"></div>
        <div id="radar-loading" class="radar-loading">Chargement du radar…</div>
      </div>
      <div class="radar-controls">
        <button id="radar-play-btn" class="radar-play-btn" type="button"><i class="bi bi-play-fill"></i></button>
        <div class="radar-slider-wrap">
          <input id="radar-slider" type="range" min="0" max="11" value="8" step="1" class="radar-slider-input">
        </div>
        <span id="radar-time-lbl" class="radar-time-lbl">--:--</span>
      </div>`}function h(){const f=window.L;f&&setTimeout(()=>{const k=t.querySelector("#radar-map");if(!k||r)return;const T=n[0]?[n[0].lat,n[0].lng]:[47.5,-1.5];r=f.map(k,{zoomControl:!0,attributionControl:!1,tap:!1}).setView(T,7),f.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:14}).addTo(r);const S=t.querySelector("#radar-slider"),A=t.querySelector("#radar-time-lbl"),P=t.querySelector("#radar-play-btn"),D=t.querySelector("#radar-loading");let _=[],B=0,F=0,U=null,ee=!1,fe=null;function ae(ve){if(!_.length)return;U&&r.removeLayer(U);const Se=_[ve];U=f.tileLayer(`https://tilecache.rainviewer.com${Se.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:.65,zIndex:10}).addTo(r);const Te=new Date(Se.time*1e3);A.textContent=Te.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),A.style.color=ve>=B?"#007aff":"#8e8e93",S.value=ve}S.addEventListener("input",()=>{F=+S.value,ae(F)}),P.addEventListener("click",()=>{ee=!ee,P.innerHTML=ee?'<i class="bi bi-pause-fill"></i>':'<i class="bi bi-play-fill"></i>',ee?fe=setInterval(()=>{F=(F+1)%_.length,ae(F)},500):clearInterval(fe)}),fetch("https://api.rainviewer.com/public/weather-maps.json").then(ve=>ve.json()).then(ve=>{var Je,Ge;D==null||D.remove();const Se=((Je=ve.radar)==null?void 0:Je.past)||[],Te=((Ge=ve.radar)==null?void 0:Ge.nowcast)||[];_=[...Se,...Te],B=Se.length,_.length&&(S.max=_.length-1,F=Math.max(0,B-1),ae(F))}).catch(()=>{D&&(D.textContent="Radar indisponible")})},50)}function w(f,k){const T=f.fixed?"":`<button class="m-widget-menu" data-widget="${f.id}" type="button">•••</button>`,S=u.has(f.id);return`
      <div class="m-widget${S?" m-widget--collapsed":""}" data-widget="${f.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${f.id}">
          <div class="m-widget-icon-wrap" style="background:${f.color}20;color:${f.color}">
            <i class="bi ${f.icon}"></i>
          </div>
          <span class="m-widget-title">${f.title}</span>
          ${f.info?`<button class="m-widget-info" data-widget="${f.id}" type="button"><i class="bi bi-info-circle"></i></button>`:""}
          <i class="bi ${S?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${f.fixed?"0":"8px"}"></i>
          ${T}
        </div>
        <div class="m-widget-bd" style="${S?"display:none":""}">${k}</div>
      </div>`}function x(){r==null||r.remove(),r=null,c=Ei();const f=new Set(["previsions","support"]),k=we.filter(S=>S.active&&!S.fixed&&(i!=="new"||f.has(S.id))),T=we.filter(S=>S.active&&S.fixed&&(i!=="new"||f.has(S.id)));t.innerHTML=`
      ${i==="new"?m():'<button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>'}
      ${[...k,...T].map(S=>{let A="";return S.id==="bilan_hydrique"?A=v()+at(d()):S.id==="previsions"?A=xn(n,s,c,i):S.id==="cumuls"?A=Ii(n,s):S.id==="temps_reel"?A=Li(n,s):S.id==="traitements"?A=En(n):S.id==="evenements"?A=Mn(n,s):S.id==="cultures"?A=qn(n):S.id==="notes"?A=Pi(i):S.id==="radar_pluie"?A=g():S.id==="mon_reseau"?A=Pn(i):S.id==="support"&&(A=jn()),w(S,A)}).join("")}
      <div style="height:24px"></div>`,C(),u.has("radar_pluie")||h()}const M='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function E(f,k){const T=f[k],S=`${T.dayLabel.charAt(0).toUpperCase()+T.dayLabel.slice(1)} · ${T.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${M}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${k===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${T.icon}" style="color:${T.color};font-size:22px"></i><span class="m-d-name">${S}</span></div>
          <button class="m-day-nav" id="next-day" ${k>=f.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${T.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${T.tMin} / ${T.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${T.ventMoy}/${T.ventRafales}</strong></div>
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
            ${T.hours.map((A,P)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${P<T.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${A.label}</span>
                <i class="bi ${A.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${A.pluie>0?`${A.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${A.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${A.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${A.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function y(f,k,T){var S,A;f.querySelector(".m-detail-back").addEventListener("click",he),(S=f.querySelector("#prev-day"))==null||S.addEventListener("click",()=>{f.innerHTML=E(k,T-1),y(f,k,T-1)}),(A=f.querySelector("#next-day"))==null||A.addEventListener("click",()=>{f.innerHTML=E(k,T+1),y(f,k,T+1)})}function I(f,k){const T=xe(E(f,k));y(T,f,k)}function C(){var ae,ve,Se,Te,Je,Ge,He;(ae=e.querySelector(".m-navbar-action"))==null||ae.addEventListener("click",j),(ve=t.querySelector("#dash-add-widget-btn"))==null||ve.addEventListener("click",L),(Se=t.querySelector('[data-action="add-parcel"]'))==null||Se.addEventListener("click",()=>cn(()=>x())),(Te=t.querySelector('[data-action="add-sensor"]'))==null||Te.addEventListener("click",()=>dn(()=>x())),t.querySelectorAll(".m-widget-info").forEach(O=>{O.addEventListener("click",se=>{se.stopPropagation();const K=we.find(z=>z.id===O.dataset.widget);K&&un(K.title,K.info,K.gif)})}),t.querySelectorAll(".m-widget-hd--toggle").forEach(O=>{O.addEventListener("click",se=>{if(se.target.closest(".m-widget-menu")||se.target.closest(".m-widget-info"))return;const K=O.dataset.collapse;u.has(K)?u.delete(K):u.add(K),b(),x()})}),(Je=t.querySelector("#trait-btn-saisir"))==null||Je.addEventListener("click",()=>{kn(n,Be)}),(Ge=t.querySelector("#trait-btn-voir"))==null||Ge.addEventListener("click",()=>{Cn(n,i,Be)}),t.querySelectorAll(".m-trait-card").forEach(O=>{O.addEventListener("click",()=>{const se=ce.find(K=>K.id===+O.dataset.plotId);if(se){const K=ne.filter(z=>z.parcelIds.includes(se.id)).map(z=>z.id);ye(()=>Promise.resolve().then(()=>Nt),void 0).then(z=>z.initParcelDetail(se,K,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(O=>{O.addEventListener("click",()=>{const se=s.find(K=>K.id===+O.dataset.sensorId);se&&ye(()=>Promise.resolve().then(()=>At),void 0).then(K=>K.initSensorDetail(se,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(O=>{O.addEventListener("click",()=>{const se=ce.find(K=>K.id===+O.dataset.plotId);if(se){const K=ne.filter(z=>z.parcelIds.includes(se.id)).map(z=>z.id);ye(()=>Promise.resolve().then(()=>Nt),void 0).then(z=>z.initParcelDetail(se,K,"params","Tableau de bord"))}})});function f(){t.querySelectorAll(".m-bh-plot-link").forEach(O=>{O.addEventListener("click",()=>{const se=ce.find(K=>K.id===+O.dataset.plotId);if(se){const K=ne.filter(z=>z.parcelIds.includes(se.id)).map(z=>z.id);ye(()=>Promise.resolve().then(()=>Nt),void 0).then(z=>z.initParcelDetail(se,K,"widgets","Tableau de bord"))}})})}function k(){var O,se,K;(O=t.querySelector("#bh-btn-calendar"))==null||O.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>Ke),void 0).then(z=>z.openCalendar(n,""))}),(se=t.querySelector("#bh-btn-irrigation"))==null||se.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>Ke),void 0).then(z=>z.openIrrigationSaisie(n,Be))}),(K=t.querySelector("#bh-btn-strategie"))==null||K.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>Ke),void 0).then(z=>z.openIrrigationStrategie(n,Be))})}function T(){const O=t.querySelector("#bh-expand");O&&O.addEventListener("click",()=>{const se=O.dataset.expanded==="true",K=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');K&&(K.innerHTML=v()+at(d(),!se),f(),k(),T(),i==="admin"&&S())})}function S(){const O=t.querySelector("#bh-org-select");O&&(O.value=p===null?"all":String(p),O.addEventListener("change",()=>{p=O.value==="all"?null:+O.value;const se=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');se&&(se.innerHTML=v()+at(d()),f(),k(),T(),S())}))}f(),k(),T(),i==="admin"&&S();function A(){const O=t.querySelector('[data-widget="cumuls"] .m-widget-bd');O&&(O.innerHTML=Ii(n,s),P())}function P(){var oe,W,J,R;const O=()=>{var Y;const H=(Y=t.querySelector("#cumuls-metric"))==null?void 0:Y.value,N=t.querySelector("#cumuls-thresholds");N&&(H==="hf"?N.innerHTML=`
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`:H==="dj"?N.innerHTML=`
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`:N.innerHTML="")},se=()=>{var G;const H=t.querySelector("#cumuls-metric"),N=(G=t.querySelector("#cumuls-subject"))==null?void 0:G.value;if(!H)return;const Y=Rt(N);H.innerHTML='<option value="">— Métrique —</option>'+Y.map(re=>`<option value="${re.id}">${re.label}</option>`).join(""),H.disabled=!N||!Y.length,O(),K()},K=()=>{var me,ie,le;const H=t.querySelector("#cumuls-create"),N=t.querySelector("#cumuls-date-err"),Y=(me=t.querySelector("#cumuls-subject"))==null?void 0:me.value,G=(ie=t.querySelector("#cumuls-from"))==null?void 0:ie.value,re=(le=t.querySelector("#cumuls-metric"))==null?void 0:le.value,te=G?(Date.now()-new Date(G))/864e5>365:!1;N&&(N.style.display=te?"":"none"),H&&(H.disabled=!Y||!G||!re||te)};(oe=t.querySelector("#cumuls-subject"))==null||oe.addEventListener("change",()=>{se(),K()}),(W=t.querySelector("#cumuls-from"))==null||W.addEventListener("change",K),(J=t.querySelector("#cumuls-metric"))==null||J.addEventListener("change",()=>{O(),K()}),(R=t.querySelector("#cumuls-create"))==null||R.addEventListener("click",()=>{var ie,le,V,Z,de,ue;const H=t.querySelector("#cumuls-subject"),N=H==null?void 0:H.value,Y=(ie=t.querySelector("#cumuls-from"))==null?void 0:ie.value,G=(le=t.querySelector("#cumuls-metric"))==null?void 0:le.value;if(!N||!Y||!G)return;const re=Re.find($e=>$e.id===G),te=Mi[G]||{icon:"bi-bar-chart-fill",color:"#636366"},me=G==="hf"?{cold:+(((V=t.querySelector("#cumuls-th-cold"))==null?void 0:V.value)??7.2)}:G==="dj"?{low:+(((Z=t.querySelector("#cumuls-th-low"))==null?void 0:Z.value)??0),high:+(((de=t.querySelector("#cumuls-th-high"))==null?void 0:de.value)??18)}:null;Ie.push({metricId:G,metricLabel:(re==null?void 0:re.label)||G,unit:(re==null?void 0:re.unit)||"",icon:te.icon,color:te.color,subjectKey:N,subjectLabel:(((ue=H.options[H.selectedIndex])==null?void 0:ue.text)||N).trim(),fromDate:Y,value:String(Ti(N,Y,G)??"—"),thresholds:me}),b(),A()}),t.querySelectorAll(".m-cumuls-del").forEach(H=>{H.addEventListener("click",()=>{Ie.splice(+H.dataset.cidx,1),b(),A()})}),t.querySelectorAll(".m-cumuls-edit").forEach(H=>{H.addEventListener("click",()=>X(+H.dataset.cidx))});function z(H,N={}){return H==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${N.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:H==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${N.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${N.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function X(H){const N=Ie[H];if(!N)return;const Y=s.filter(le=>le.parcelIds.length>0&&rs.has(le.model)),G=n.map(le=>`<option value="p-${le.id}"${N.subjectKey===`p-${le.id}`?" selected":""}>${ft(le)}</option>`).join(""),re=Y.map(le=>`<option value="s-${le.id}"${N.subjectKey===`s-${le.id}`?" selected":""}>${ht(le,n)}</option>`).join(""),me=Rt(N.subjectKey).map(le=>`<option value="${le.id}"${N.metricId===le.id?" selected":""}>${le.label}</option>`).join(""),ie=document.createElement("div");ie.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",ie.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${G}</optgroup>
            ${re?`<optgroup label="Capteurs">${re}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${me}
          </select>
          <div id="cedit-thresholds">${z(N.metricId,N.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${N.fromDate}">
          </div>`,ie.querySelector("#cedit-subject").addEventListener("change",()=>{const le=ie.querySelector("#cedit-subject").value,V=ie.querySelector("#cedit-metric"),Z=Rt(le);V.innerHTML='<option value="">— Métrique —</option>'+Z.map(de=>`<option value="${de.id}">${de.label}</option>`).join(""),ie.querySelector("#cedit-thresholds").innerHTML=""}),ie.querySelector("#cedit-metric").addEventListener("change",()=>{ie.querySelector("#cedit-thresholds").innerHTML=z(ie.querySelector("#cedit-metric").value)}),Fe({title:"Modifier le cumul",body:ie,doneLabel:"Enregistrer",onDone:()=>{var st,Ce,nt,ci;const le=ie.querySelector("#cedit-subject").value||N.subjectKey,V=ie.querySelector("#cedit-metric").value||N.metricId,Z=ie.querySelector("#cedit-from").value||N.fromDate;if(!le||!V||!Z)return;if((Date.now()-new Date(Z))/864e5>365){Be("Date trop ancienne (max 365 jours)");return}const ue=Re.find(Is=>Is.id===V),$e=Mi[V]||{icon:"bi-bar-chart-fill",color:"#636366"},Ae=ie.querySelector("#cedit-subject"),je=V==="hf"?{cold:+(((st=ie.querySelector("#cedit-th-cold"))==null?void 0:st.value)??7.2)}:V==="dj"?{low:+(((Ce=ie.querySelector("#cedit-th-low"))==null?void 0:Ce.value)??0),high:+(((nt=ie.querySelector("#cedit-th-high"))==null?void 0:nt.value)??18)}:null;Ie[H]={...N,metricId:V,metricLabel:(ue==null?void 0:ue.label)||V,unit:(ue==null?void 0:ue.unit)||"",icon:$e.icon,color:$e.color,subjectKey:le,subjectLabel:(((ci=Ae.options[Ae.selectedIndex])==null?void 0:ci.text)||le).trim(),fromDate:Z,value:String(Ti(le,Z,V)??"—"),thresholds:je},b(),A()}})}}P(),(He=t.querySelector("#open-chat-btn"))==null||He.addEventListener("click",Dn);function D(){const O=t.querySelector('[data-widget="notes"] .m-widget-bd');O&&(O.innerHTML=Pi(i),B())}let _=[];function B(){var oe,W;_=[];const O=t.querySelector("#notes-img-input"),se=t.querySelector("#notes-img-btn"),K=t.querySelector("#notes-previews"),z=t.querySelector("#notes-img-error");O&&se&&K&&window.setupImgUpload&&window.setupImgUpload(O,se,K,z,_),(oe=t.querySelector("#notes-add"))==null||oe.addEventListener("click",async()=>{var le,V,Z,de,ue,$e;const J=(le=t.querySelector("#notes-input"))==null?void 0:le.value.trim(),R=((V=t.querySelector("#notes-date"))==null?void 0:V.value)||new Date().toISOString().slice(0,10),H=((Z=t.querySelector("#notes-time"))==null?void 0:Z.value)||"",N=((de=t.querySelector("#notes-auteur"))==null?void 0:de.value)||"";if(!J)return;const Y=((ue=t.querySelector("#notes-link"))==null?void 0:ue.value)||"";let G=null,re=null,te="";if(Y.startsWith("p-"))G="parcel",re=+Y.slice(2),te=(($e=ce.find(Ae=>Ae.id===re))==null?void 0:$e.name)||"";else if(Y.startsWith("s-")){G="sensor",re=+Y.slice(2);const Ae=ne.find(je=>je.id===re);te=Ae?Ae.serial:""}const me=[];if(_.length&&window.ImageStore)for(const Ae of _){const je=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(je,Ae),me.push(je)}const ie=Ue();ie.unshift({date:R,time:H,text:J,auteur:N,role:"membre",imageIds:me,linkedType:G,linkedId:re,linkedName:te}),Ot(ie),t.querySelector("#notes-input").value="",D()}),(W=t.querySelector("#notes-view"))==null||W.addEventListener("click",()=>{const J=Y=>{const[G,re,te]=Y.split("-");return`${te}/${re}/${G}`},R=Y=>Y.length>70?Y.slice(0,70)+"…":Y,H=document.createElement("div");function N(){const Y=Ue();if(!Y.length){H.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}H.innerHTML=Y.map((G,re)=>{const te=(G.imageIds||[]).length,me=G.linkedType?`<span style="font-size:10px;background:${G.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${G.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${G.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${G.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${re}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del m-del-btn" data-idx="${re}" style="position:absolute;top:8px;right:8px">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${J(G.date)}${G.time?" · "+G.time:""}</span>
                  ${G.auteur?`<span style="color:#636366;font-weight:500">${G.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${R(G.text)}</div>
                ${me||te>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${me}${te>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${te} photo${te>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),H.querySelectorAll(".m-note-del").forEach(G=>{G.addEventListener("click",async re=>{var le;re.stopPropagation();const te=Ue(),me=+G.dataset.idx,ie=te[me];(le=ie==null?void 0:ie.imageIds)!=null&&le.length&&window.ImageStore&&await window.ImageStore.remove(ie.imageIds),te.splice(me,1),Ot(te),N(),D()})}),H.querySelectorAll(".m-note-card").forEach(G=>{G.addEventListener("click",async()=>{const te=Ue()[+G.dataset.idx];if(!te)return;const me=te.linkedType?`<span style="font-size:11px;background:${te.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${te.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${te.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${te.linkedName||""}</span>`:"",ie=document.createElement("div");if(ie.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${J(te.date)}${te.time?" · "+te.time:""}</span>
                  ${te.auteur?`<span style="color:#636366;font-weight:500">${te.auteur}</span>`:""}
                  ${me}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${te.text}</div>
                ${(te.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Fe({title:"Note",body:ie,doneLabel:"Fermer",onDone:()=>{}}),(te.imageIds||[]).length&&window.ImageStore){const le=ie.querySelector("#note-detail-photos");for(const V of te.imageIds){const Z=await window.ImageStore.get(V);if(!Z)continue;const de=document.createElement("div");de.className="jrn-img-thumb-wrap";const ue=document.createElement("img");ue.className="jrn-img-thumb",ue.src=Z,ue.alt="",ue.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(Z)}),de.appendChild(ue),le.appendChild(de)}}})})}N(),Fe({title:"Notes",body:H,doneLabel:"Fermer",onDone:()=>{}})});const X=J=>{const[R,H,N]=J.split("-");return`${N}/${H}/${R}`};t.querySelectorAll("#notes-list .m-note-del").forEach(J=>{J.addEventListener("click",async R=>{var G;R.stopPropagation();const H=Ue(),N=+J.dataset.idx,Y=H[N];(G=Y==null?void 0:Y.imageIds)!=null&&G.length&&window.ImageStore&&await window.ImageStore.remove(Y.imageIds),H.splice(N,1),Ot(H),D()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(J=>{J.addEventListener("click",async()=>{const H=Ue()[+J.dataset.idx];if(!H)return;const N=H.linkedType?`<span style="font-size:11px;background:${H.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${H.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${H.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${H.linkedName||""}</span>`:"",Y=document.createElement("div");if(Y.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${X(H.date)}${H.time?" · "+H.time:""}</span>
              ${H.auteur?`<span style="color:#636366;font-weight:500">${H.auteur}</span>`:""}
              ${N}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${H.text}</div>
            ${(H.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Fe({title:"Note",body:Y,doneLabel:"Fermer",onDone:()=>{}}),(H.imageIds||[]).length&&window.ImageStore){const G=Y.querySelector("#note-detail-photos");for(const re of H.imageIds){const te=await window.ImageStore.get(re);if(!te)continue;const me=document.createElement("div");me.className="jrn-img-thumb-wrap";const ie=document.createElement("img");ie.className="jrn-img-thumb",ie.src=te,ie.alt="",ie.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(te)}),me.appendChild(ie),G.appendChild(me)}}})})}B();function F(){t.querySelectorAll(".m-tr-chart-wrap").forEach(O=>{const se=O.querySelector(".m-tr-cursor"),K=O.querySelector(".m-tr-tooltip");if(!K)return;const z=JSON.parse(O.dataset.series||"[]"),X=O.dataset.unit||"",oe=z.length,W=26,J=270;O.addEventListener("pointermove",R=>{const H=O.getBoundingClientRect(),N=Math.max(0,Math.min(((R.clientX-H.left)*(W+J)/H.width-W)/J,1)),Y=z[Math.round(N*(oe-1))]??null;if(se){const G=W+Math.round(N*J);se.setAttribute("x1",G),se.setAttribute("x2",G),se.setAttribute("opacity","1")}K.style.display="",K.style.left=`${Math.max(0,Math.min(R.clientX-H.left-24,H.width-60))}px`,K.textContent=Y!==null?`${(+Y).toFixed(1)} ${X}`:"—"}),O.addEventListener("pointerleave",()=>{K.style.display="none",se==null||se.setAttribute("opacity","0")})})}function U(){const O=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');O&&(O.innerHTML=Li(n,s),ee())}function ee(){var z,X,oe,W,J;const O=()=>{var H,N;const R=t.querySelector("#msr-create");R&&(R.disabled=!((H=t.querySelector("#msr-subject"))!=null&&H.value)||!((N=t.querySelector("#msr-metric"))!=null&&N.value)||ze.length>=kt)},se=()=>{var Y;const R=t.querySelector("#msr-metric"),H=(Y=t.querySelector("#msr-subject"))==null?void 0:Y.value;if(!R)return;const N=vn(H,s);R.innerHTML='<option value="">— Métrique —</option>'+N.map(G=>`<option value="${G}">${Xt[G]}</option>`).join(""),R.disabled=!H||!N.length,O()},K=()=>{var N;const R=t.querySelector("#msr-step"),H=((N=t.querySelector("#msr-period"))==null?void 0:N.value)||"7d";R&&(R.innerHTML=ls(H).map(Y=>`<option value="${Y.id}">${Y.label}</option>`).join(""),O())};(z=t.querySelector("#msr-subject"))==null||z.addEventListener("change",()=>{se(),O()}),(X=t.querySelector("#msr-period"))==null||X.addEventListener("change",()=>{K(),O()}),(oe=t.querySelector("#msr-metric"))==null||oe.addEventListener("change",O),(W=t.querySelector("#msr-step"))==null||W.addEventListener("change",O),(J=t.querySelector("#msr-create"))==null||J.addEventListener("click",()=>{var ie,le,V;const R=t.querySelector("#msr-subject"),H=t.querySelector("#msr-metric"),N=t.querySelector("#msr-period"),Y=t.querySelector("#msr-step"),G=R==null?void 0:R.value,re=H==null?void 0:H.value,te=N==null?void 0:N.value,me=Y==null?void 0:Y.value;!G||!re||!te||!me||(ze.push({subjectKey:G,subjectLabel:(((ie=R.options[R.selectedIndex])==null?void 0:ie.text)||G).trim(),metricId:re,metricLabel:Xt[re]||re,unit:pn[re]||"",period:te,periodLabel:(((le=N.options[N.selectedIndex])==null?void 0:le.text)||te).trim(),step:me,stepLabel:(((V=Y.options[Y.selectedIndex])==null?void 0:V.text)||me).trim(),color:os[re]||ki[ze.length%ki.length]}),b(),U())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(R=>{R.addEventListener("click",()=>{ze.splice(+R.dataset.idx,1),b(),U()})}),t.querySelectorAll(".m-wf-view-data[data-sensor-id]").forEach(R=>{R.addEventListener("click",()=>{const H=+R.dataset.sensorId,N=ne.find(Y=>Y.id===H);N&&ye(()=>Promise.resolve().then(()=>At),void 0).then(Y=>Y.initSensorDetail(N,"donnees",i))})}),F()}ee(),t.querySelectorAll(".m-prev-card").forEach(O=>{O.addEventListener("click",()=>{I(c,+O.dataset.day)})});const fe=t.querySelector(".m-prev-expand-btn");fe&&fe.addEventListener("click",()=>I(c,3)),t.querySelectorAll(".m-widget-menu").forEach(O=>{O.addEventListener("click",se=>{var J;se.stopPropagation();const K=we.find(R=>R.id===O.dataset.widget);if(!K)return;const z=document.createElement("div"),X=K.id==="bilan_hydrique",oe=pt().sensorlessEnabled??!0;z.innerHTML=`
          <div class="m-sheet-links">
            ${X?`<a class="m-sheet-link" id="menu-sensorless">${oe?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const W=Fe({title:K.title,body:z,doneLabel:"Fermer",onDone:()=>{}});(J=z.querySelector("#menu-sensorless"))==null||J.addEventListener("click",()=>{wi({sensorlessEnabled:!oe}),W.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{W.remove();const R=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');R&&(R.innerHTML=v()+at(d()),f(),k(),T(),i==="admin"&&S())},280)}),z.querySelector("#menu-move").addEventListener("click",()=>{W.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{W.remove(),q()},280)}),z.querySelector("#menu-remove").addEventListener("click",()=>{K.active=!1,W.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{W.remove(),b(),x()},280),Be("Widget retiré")})})})}function q(){const f=document.createElement("div"),k=()=>we.filter(S=>S.active&&!S.fixed),T=()=>{const S=k();f.innerHTML=S.map((A,P)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${A.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${P}" data-dir="-1" ${P===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${P}" data-dir="1" ${P===S.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),f.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(A=>{A.addEventListener("click",()=>{const P=k(),D=+A.dataset.i,_=D+ +A.dataset.dir,B=we.indexOf(P[D]),F=we.indexOf(P[_]);[we[B],we[F]]=[we[F],we[B]],b(),T(),x()})})};T(),Fe({title:"Réorganiser les widgets",body:f,doneLabel:"Fermer",onDone:()=>{}})}function j(){const f=i==="admin",k=xe(`
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
            ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(T=>`
              <button class="m-add-item" data-action="${T.action}">
                <i class="bi ${T.icon}"></i>
                <span>${T.label}</span>
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
      </div>`);k.querySelector(".m-detail-back").addEventListener("click",he),k.querySelectorAll(".m-add-item").forEach(T=>{T.addEventListener("click",()=>{const S=T.dataset.action;S==="irrigation"?(he(),ye(()=>Promise.resolve().then(()=>Ke),void 0).then(A=>A.openIrrigationSaisie(n,Be))):S==="strategie-irrigation"?(he(),ye(()=>Promise.resolve().then(()=>Ke),void 0).then(A=>A.openIrrigationStrategie(n,Be))):Be("Fonctionnalité à venir")})})}function L(){const f=document.createElement("div"),k=()=>{const T=we.filter(S=>!S.fixed);f.innerHTML=T.map(S=>`
        <div class="m-catalog-row${S.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${S.color}20;color:${S.color}"><i class="bi ${S.icon}"></i></div>
          <span class="m-catalog-title">${S.title}</span>
          ${S.available?`<button class="m-catalog-toggle${S.active?" m-catalog-toggle--on":""}" data-cid="${S.id}" type="button">
                <i class="bi ${S.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),f.querySelectorAll("[data-cid]").forEach(S=>{S.addEventListener("click",()=>{const A=we.find(P=>P.id===S.dataset.cid);A&&(A.active=!A.active,b(),k(),x())})})};k(),Fe({title:"Widgets disponibles",body:f,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",f=>{if(f.key!=="weenat_proto_store")return;Yi(ce);const k=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');k&&(k.innerHTML=v()+at(d()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=j,x()}const Ct=new URLSearchParams(window.location.search).get("role")==="adherent"?"adherent":"admin",Ee={djMin:0,djMax:18,hfSeuil:7.2},_n={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"},irrigation:{metricLabel:"Cumul d'irrigation",unit:"mm",icon:"bi-moisture",color:"#FF8C00"}},Di="weenat-m-dash",Hn=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermomètre-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Capteur d'humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],Qt={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},ms=e=>`dash-widgets-parcel-${e}`;function Bn(e,i){const t=i.map(o=>ne.find(s=>s.id===o)).filter(Boolean),l=new Set(t.map(o=>o.model)),n=["previsions-5j","cumuls","irrigations"];return Object.entries(Qt).forEach(([o,s])=>{s.some(c=>l.has(c))&&n.push(o)}),n}function Lt(e,i){try{const t=JSON.parse(localStorage.getItem(ms(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return Bn(e,i)}function vs(e,i){localStorage.setItem(ms(e),JSON.stringify(i))}function Fn(e,i,t){const l=new Set(Lt(e,i)),n=Hn.map((s,c)=>`
    <div class="m-list-section-header"${c>0?' style="margin-top:20px"':""}>${s.title}</div>
    ${s.items.map(p=>{const r=l.has(p.id);return`
        <div class="m-wcat-item">
          <span>${p.label}</span>
          ${r?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${p.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`}).join("")}`).join(""),o=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Ajouter un widget</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:8px 0 32px">${n}</div>
    </div>`);o.querySelector(".m-detail-back").addEventListener("click",he),o.querySelectorAll(".m-wcat-add").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.wid,p=Lt(e,i);p.includes(c)||(p.push(c),vs(e.id,p)),he(),t==null||t()})})}const Ve={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Capteur d'humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1},irrigation:{label:"Irrigation",unit:"mm",color:"#FF8C00",cumul:!0,cumulsType:"irrigation"}},Rn={pluie:14,temperature:14,humidite:14,vent:14,etp:14,temp_rosee:14,rayonnement:14,pothydr:7},mt={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function It(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(l,n)=>{const o=n/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(o-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,s))})}const qt={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},gt={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function bs(e,i){const t=qt[i]||60,l=gt[i]||10080,n=Date.now(),o=n-l*6e4,s=l*6e4/t,c=new Array(t).fill(0);return pe.filter(p=>p.plotId===e).forEach(p=>{const r=new Date(p.iso).getTime();if(r<o||r>n)return;const d=Math.min(t-1,Math.floor((r-o)/s));c[d]+=p.mm}),c}function On(e,i,t,l,n,o=20,s=0){const c=gt[e]||10080,p=c+s,r=new Date,d=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,v=4,$=i-t-l,a=n-o;return Array.from({length:v+1},(u,b)=>{const m=b/v,g=new Date(r.getTime()+(m*p-c)*6e4),h=(t+m*$).toFixed(1),w=b===0?"start":b===v?"end":"middle";return[`<line x1="${h}" y1="${a}" x2="${h}" y2="${a+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${h}" y="${n-3}" text-anchor="${w}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(g)}</text>`].join("")}).join("")}function fs(e,i,t,l="7d",n="",o=null){const s=qt[l]||60,c=gt[l]||10080,p=c/1440,r=Rn[e]||0,d=r>0&&e!=="irrigation"?Math.max(1,Math.round(Math.min(r,p)/p*s)):0,v=d>0?Math.min(r,p)/p*c:0,$=e==="irrigation"?bs(o,l):It(e,s+d),a=320,u=100,b=34,m=6,g=10,h=20,w=a-b-m,x=u-g-h,M=t?0:Math.min(...$),E=Math.max(...$,M+.001),y=E-M,I=U=>b+U/($.length-1)*w,C=U=>g+x-(U-M)/y*x,q=`g${Math.random().toString(36).slice(2,8)}`,j=[0,.5,1].map(U=>{const ee=M+U*y,fe=g+x-U*x;return`<text x="${b-3}" y="${(fe+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${ee<10?ee.toFixed(1):Math.round(ee)}</text>`}).join(""),L=[.25,.5,.75].map(U=>{const ee=(g+x-U*x).toFixed(1);return`<line x1="${b}" y1="${ee}" x2="${a-m}" y2="${ee}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),f=`<line x1="${b}" y1="${g+x}" x2="${a-m}" y2="${g+x}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,k=On(l,a,b,m,u,h,v);let T="";if(d>0){const U=I(s-.5),ee=`stripe${q}`;T=`<defs><pattern id="${ee}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.06)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.18)" stroke-width="3"/>
      </pattern></defs>
      <rect x="${U.toFixed(1)}" y="${g}" width="${(a-m-U).toFixed(1)}" height="${x}" fill="url(#${ee})"/>
      <line x1="${U.toFixed(1)}" y1="${g}" x2="${U.toFixed(1)}" y2="${g+x}" stroke="rgba(142,142,147,.35)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(a-m-3).toFixed(1)}" y="${(g+9).toFixed(1)}" text-anchor="end" font-size="8" fill="#8e8e93" font-family="-apple-system" font-style="italic">Prévisions</text>`}if(t){const U=w/$.length*.7,ee=$.map((fe,ae)=>{const ve=(fe-M)/y*x,Se=g+x-ve,Te=ae>=s;return`<rect x="${(I(ae)-U/2).toFixed(1)}" y="${Se.toFixed(1)}" width="${U.toFixed(1)}" height="${ve.toFixed(1)}" fill="${Te?"#C7C7CC":i}" opacity="${Te?".55":".8"}" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${a} ${u}" width="100%" height="${u}" preserveAspectRatio="none">${T}${j}${L}${f}${k}${ee}</svg>`}const S=$.map((U,ee)=>[I(ee),C(U)]),A=S.slice(0,s),P=S.slice(s-1),D=A.map(([U,ee],fe)=>`${fe?"L":"M"}${U.toFixed(1)},${ee.toFixed(1)}`).join(" "),_=d>0?P.map(([U,ee],fe)=>`${fe?"L":"M"}${U.toFixed(1)},${ee.toFixed(1)}`).join(" "):"",B=`${D} L${I(s-1).toFixed(1)},${(g+x).toFixed(1)} L${b},${(g+x).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:$.map(U=>+U.toFixed(2)),minV:+M.toFixed(2),maxV:+E.toFixed(2)}))}" data-color="${i}" data-unit="${n}" style="position:relative">
    <svg viewBox="0 0 ${a} ${u}" width="100%" height="${u}" preserveAspectRatio="none">
      <defs><linearGradient id="${q}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${T}
      ${j}${L}${f}
      <path d="${B}" fill="url(#${q})"/>
      <path d="${D}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${_?`<path d="${_}" fill="none" stroke="${i}" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>`:""}
      ${S.map(([U,ee],fe)=>`<circle cx="${U.toFixed(1)}" cy="${ee.toFixed(1)}" r="2" fill="${i}" opacity="${fe>=s?".55":"1"}"/>`).join("")}
      ${k}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Nn(e,i,t,l=null){if(!t)return"";const n=qt[i]||60,s=(gt[i]||10080)/(n*60),c=e==="irrigation"?bs(l,i):It(e,n);let p=[];if(t==="temp"){const r=c.reduce((v,$)=>v+Math.max(0,Math.min($,Ee.djMax)-Ee.djMin),0)*(s/24),d=c.filter(v=>v<Ee.hfSeuil).length*s;p=[{label:"Degrés jours",val:`${Math.round(r)} DJ`,metricId:"dj",thresholdText:`${Ee.djMin}°C → ${Ee.djMax}°C`},{label:"Heures de froid",val:`${Math.round(d)} h`,metricId:"hf",thresholdText:`< ${Ee.hfSeuil}°C`}]}else if(t==="pluie")p=[{label:"Cumul pluie",val:`${c.reduce((d,v)=>d+v,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const r=c.filter(d=>d>120).length*s;p=[{label:"Ensoleillement",val:`${Math.round(r)} h`,metricId:"rayo"}]}else if(t==="etp")p=[{label:"Évapotranspiration cumulée",val:`${(c.reduce((d,v)=>d+v,0)*(s/24)).toFixed(1)} mm`,metricId:"etp"}];else if(t==="hws"){const r=c.filter(d=>d>50).length*s;p=[{label:"Heures d'humectation",val:`${Math.round(r)} h`,metricId:"humec"}]}else t==="irrigation"&&(p=[{label:"Cumul irrigation",val:`${c.reduce((d,v)=>d+v,0).toFixed(1)} mm`,metricId:"irrigation"}]);return p.length?`<div class="m-chart-cumuls">${p.map(r=>{const d=r.metricId==="dj"||r.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${r.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${r.label}</span>
          ${r.thresholdText?`<span class="m-chart-cumul-thresh">${r.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${r.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${d}
        <button class="m-cumul-add-btn" data-cumul-label="${r.label}" data-cumul-val="${r.val}" data-cumul-metric-id="${r.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}function zi(e,i,t=null,l=null){const n=Ve[e];if(!n)return"";const o=Nn(e,i,n.cumulsType,l),s=t||e==="irrigation"?`<div class="m-chart-details-link" data-sensor-id="${t??""}" data-metric-id="${e}">Voir détails →</div>`:"";return`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${n.color}">${n.label}</span>
      </div>
      ${fs(e,n.color,n.cumul,i,n.unit||"",l)}
      ${s}
      ${o}
    </div>`}function Vn(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*l)/255>.5?"#000000":"#ffffff"}function Wn(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:l,maxV:n}=i,o=e.querySelector(".m-chart-tip"),s=e.querySelector(".m-chart-crosshair"),c=e.dataset.color||"#0172A4",p=e.dataset.unit||"";function r(v){const $=e.getBoundingClientRect(),a=Math.max(0,Math.min(1,(v-$.left)/$.width)),u=Math.round(a*(t.length-1)),b=t[u],m=a*100,g=(b<10?b.toFixed(1):String(Math.round(b)))+(p?` ${p}`:""),h=Vn(c);s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${m}%;width:1px;background:${c};opacity:.5`,o.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(m,75)}%;background:${c};color:${h};border:1.5px solid ${h};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,o.textContent=g}function d(){s.style.display="none",o.style.display="none"}e.addEventListener("pointermove",v=>{v.preventDefault(),r(v.clientX)}),e.addEventListener("pointerdown",v=>r(v.clientX)),e.addEventListener("pointerup",d),e.addEventListener("pointerleave",d),e.style.cursor="crosshair"}function Jn(e){const i=pe.filter(ae=>ae.plotId===e.id),t=i.filter(ae=>ae.real),l=i.filter(ae=>!ae.real),n=t.reduce((ae,ve)=>ae+ve.mm,0),o=l.reduce((ae,ve)=>ae+ve.mm,0),s=Gt(e.id).irrigation??e.irrigation,c=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],p=ae=>{const[,ve,Se]=ae.split("-");return`${+Se} ${c[+ve-1]}`},r=ae=>ae.toLocaleString("fr-FR")+" m³",d=e.area??0,v=Math.round(n*d*10),$=Math.round(o*d*10),a=v+$,u=Gt(e.id).volumeMaxM3??null,b=ge.find(ae=>ae.id===e.orgId);qs(e.orgId).volumeMax??(b==null||b.volumeMax);const m=u&&d?Math.min(100,Math.round(v/u*100)):0,g=u&&d?Math.min(100-m,Math.round($/u*100)):0,w=s&&!new Set(["Non irrigué","Non renseigné",""]).has(s),x=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-act-saisie" type="button"${w?"":" disabled"}>+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-act-saison" type="button"${w?"":" disabled"}>↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`,M=s?`<span class="w-irrig-type-pill"><i class="bi bi-droplet-fill"></i> ${s}</span>`:"";if(!w)return it("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3,#8e8e93)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez préciser un type d'irrigation.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-set-type" type="button" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,"irrigations");if(!i.length)return it("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3,#8e8e93);padding:8px 0">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${x}
      </div>`,"irrigations",M);const E=u&&d?`
    <div class="w-irrig-progress">
      <div class="w-irrig-prog-row">
        <div class="w-irrig-prog-lbl">
          <span>Volume limité de la parcelle :</span>
          <span style="${a>u?"color:#E05252;font-weight:600":"font-weight:600;color:var(--txt,#1c1c1e)"}">${r(a)} / ${r(u)}</span>
        </div>
        <div class="w-irrig-prog-bg"><div class="w-irrig-prog-real" style="width:${m}%"></div><div class="w-irrig-prog-plan" style="width:${g}%"></div></div>
      </div>
    </div>`:"",y=i.map(ae=>ae.iso).sort(),I=y[0]||`${new Date().getFullYear()}-04-01`,C=y[y.length-1]||`${new Date().getFullYear()}-10-10`,q=new Date(I).getTime(),j=new Date(C).getTime(),L=Math.max(j-q,1),f=ae=>((new Date(ae).getTime()-q)/L*100).toFixed(1),k=ae=>{const[,ve,Se]=ae.split("-");return`${+Se}/${+ve}`},T=new Date(I).getMonth()+1,S=new Date(C).getMonth()+1,A=new Date(I).getFullYear(),P=Array.from({length:S-T+1},(ae,ve)=>T+ve).map(ae=>`<span class="w-irrig-track-mlbl" style="left:${f(`${A}-${String(ae).padStart(2,"0")}-01`)}%">${c[ae-1]}</span>`).join(""),D=i.map(ae=>`<div class="w-irrig-dot-track" style="left:${f(ae.iso)}%;background:${ae.real?"#E07820":"#FFB705"}" data-tip="${p(ae.iso)} · ${ae.mm} mm"></div>`).join(""),_=`
    <div class="w-irrig-track-wrap">
      <div class="w-irrig-track-months">${P}</div>
      <div class="w-irrig-track">
        <div class="w-irrig-track-line"></div>
        ${D}
      </div>
      <div class="w-irrig-track-range">
        <span>${k(I)}</span><span>${k(C)}</span>
      </div>
      <div class="w-irrig-track-legend">
        <span><span class="w-irrig-dot-sml" style="background:#E07820"></span> Effectuée</span>
        <span><span class="w-irrig-dot-sml" style="background:#FFB705"></span> Planifiée</span>
      </div>
    </div>`,B=n+o,F=t.length+l.length,U=v+$,fe=`
    <div class="w-irrig-layout">
      <div class="w-irrig-kpis">
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Effectuées</div>
          <div class="w-irrig-kpi-val" style="color:#E07820">${n} <span class="w-irrig-unit">mm</span></div>
          <div class="w-irrig-kpi-sub"><span>${t.length} apport${t.length>1?"s":""}</span>${d?`<span>${r(v)}</span>`:""}</div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Planifiées</div>
          <div class="w-irrig-kpi-val" style="color:#FFB705">${o} <span class="w-irrig-unit">mm</span></div>
          <div class="w-irrig-kpi-sub"><span>${l.length} apport${l.length>1?"s":""}</span>${d?`<span>${r($)}</span>`:""}</div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Total</div>
          <div class="w-irrig-kpi-val" style="color:#0172A4">${B} <span class="w-irrig-unit">mm</span></div>
          <div class="w-irrig-kpi-sub"><span>${F} apport${F>1?"s":""}</span>${d?`<span>${r(U)}</span>`:""}</div>
        </div>
      </div>
      ${E}
      ${_}
      ${x}
    </div>
    <div class="m-irrig-footer-link">Voir les irrigations →</div>`;return it("Irrigations","bi-moisture","#FF8C00",fe,"irrigations",M)}function Gn(e,i=[]){const t=Lt(e,i),l=i.map(o=>ne.find(s=>s.id===o)).filter(Boolean);let n="";for(const o of t)if(o==="irrigations")n+=Jn(e);else if(o==="cumuls")n+=Yn(e,i);else if(o==="previsions-5j")n+=Zn(e);else if(Qt[o]){const s=new Set(Qt[o]),c=l.filter(p=>s.has(p.model));c.length&&(n+=Kn(c,o))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${n}
    </div>`}function it(e,i,t,l,n="",o=""){return`
    <div class="m-widget-card">
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${n}" type="button">•••</button>
      </div>
      ${o?`<div class="m-widget-card-subtitle">${o}</div>`:""}
      ${l}
    </div>`}function Ye(e,i,t){const l=(e*9301+49297)%233280,o={etp:1+l%60/100,pluie:.8+l%70/100,djc:4+l%60/10,hfroid:.4+l%12/10,humec:.1+l%20/100,enso:4+l%40/10}[i]??1,s=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(o*s*10)/10}const hs=e=>`m-pcumuls-${e}`;function tt(e){try{return JSON.parse(localStorage.getItem(hs(e)))||{}}catch{return{}}}function xt(e,i){const t=tt(e);localStorage.setItem(hs(e),JSON.stringify({...t,...i}))}const Un={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function Yn(e,i=[]){const t=new Set;i.forEach(a=>{const u=ne.find(b=>b.id===a);u&&(mt[u.model]||[]).forEach(b=>t.add(b))});const l=`${new Date().getFullYear()}-01-01`,n=tt(e.id),o=new Set(n.hidden||[]),s=n.dates||{},c=n.cfg||{};e.id;const p=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:Ye(e.id,"etp",s.etp||l),show:!0},{id:"enso",label:"Rayonnement solaire",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:Ye(e.id,"enso",s.enso||l),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:Ye(e.id,"pluie",s.pluie||l),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:Ye(e.id,"djc",s.djc||l),show:t.has("temperature"),cfg:!0,cfgLabel:`${c.djMin??0}–${c.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#FEE7B4",icon:"bi-snow",val:Ye(e.id,"hfroid",s.hfroid||l),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${c.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:Ye(e.id,"humec",s.humec||l),show:t.has("humectation")}].filter(a=>a.show),r=p.filter(a=>!o.has(a.id)),d=p.filter(a=>o.has(a.id)),v=d.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${d.map(a=>`
          <button class="m-pcumul-add" data-cid="${a.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${a.icon}" style="color:${a.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${a.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",$=r.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${r.map(a=>{const u=s[a.id]||l;return`<div class="m-cumuls-saved-card" style="position:relative">
          <button class="m-pcumul-del m-del-btn" data-cid="${a.id}" data-pid="${e.id}" type="button" style="position:absolute;top:8px;right:8px">×</button>
          <div class="m-pcumul-hd">
            <div class="m-pcumul-icon" style="background:${a.color}22;color:${a.color}"><i class="bi ${a.icon}"></i></div>
            <div class="m-pcumul-label" style="color:${a.color}">${a.label}</div>
          </div>
          <div class="m-pcumul-value" style="color:${a.color}">${a.val}<span class="m-pcumul-unit">${a.unit}</span></div>
          <div class="m-pcumul-since">
            <span>Depuis le</span>
            <input type="date" class="m-pcumul-date m-pcumul-date-inp" data-cid="${a.id}" data-pid="${e.id}" value="${u}">
            ${a.cfg?`<button class="m-pcumul-cfg m-pcumul-cfg-btn" data-cid="${a.id}" data-pid="${e.id}"><i class="bi bi-gear"></i> ${a.cfgLabel}</button>`:""}
          </div>
        </div>`}).join("")}${v}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${v}`;return it("Cumuls","bi-bar-chart-fill","#0172A4",$,"cumuls")}function Zn(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],l=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],n=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],o=new Date,s=ge.find(u=>u.id===(e==null?void 0:e.orgId)),c=(e==null?void 0:e.ville)||(s==null?void 0:s.ville)||"—",p=(e==null?void 0:e.id)||1,r=(u,b)=>Math.floor(Math.random()*(b-u+1))+u,d=(u,b)=>{const m=new Date(o);m.setDate(m.getDate()+u);const g=Math.floor((p*7+u*3)%11/2.2);return{lbl:u===0?"Auj.":i[m.getDay()],date:`${m.getDate()} ${t[m.getMonth()]}`,tmax:r(17+b,34+b),tmin:r(4+b,15+b),pluie:g>=3?r(2,18):0,vent:r(10,35),wi:g}},v=[0,1,2].map(u=>d(u,0)).concat([3,4].map(u=>d(u,-1))),$=u=>`
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${u.lbl}</div>
      <div class="m-wprev5-date">${u.date}</div>
      <i class="bi ${l[u.wi]} m-wprev5-icon" title="${n[u.wi]}"></i>
      <div class="m-wprev5-rain${u.pluie===0?" m-wprev5-rain--none":""}">${u.pluie>0?u.pluie+" mm":"—"}</div>
      <div class="m-wprev5-tmax">${u.tmax}°</div>
      <div class="m-wprev5-tmin">${u.tmin}°</div>
      <div class="m-wprev5-wind">${u.vent} <span>km/h</span></div>
    </div>`,a=`
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${c}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${v.map($).join("")}</div>`;return it("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",a,"previsions-5j")}function Kn(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},l={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},n={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(o=>{const s=t[o.model]||"bi-broadcast",c=gs[o.model]||o.model,p=l[o.model]||"#0172A4",r=n[o.model]||[],d=Ve[r[0]],v=r[0],$=`
      <div style="margin-bottom:6px">
        ${d?fs(v,p,!1,"1d",d.unit||""):'<div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--txt3);font-size:12px">Données indisponibles</div>'}
      </div>
      <div class="m-wsensor-vals">
        ${r.slice(0,3).map(a=>{const u=Ve[a];if(!u)return"";const m=It(a,1)[0],g=m<10?m.toFixed(1):Math.round(m);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${u.label}</span>
            <span class="m-wsensor-value" style="color:${u.color}">${g} ${u.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer" style="display:flex;align-items:center;justify-content:space-between">
        <span>${o.serial}</span>
        <button class="m-wsensor-voir-donnees" data-sensor-id="${o.id}" data-metric-id="${v}" style="border:none;background:none;color:#007AFF;font-size:12px;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;gap:3px">Voir les données <i class="bi bi-arrow-right-short"></i></button>
      </div>`;return it(c,s,p,$,i)}).join("")}function Xn(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),l=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(l),l.click(),document.body.removeChild(l),setTimeout(()=>URL.revokeObjectURL(l.href),100)}function Qn(e,i,t){const l=new Set;i.forEach(a=>{const u=ne.find(b=>b.id===a);u&&(mt[u.model]||[]).forEach(b=>l.add(b))});const n=[...new Set(["etp","rayonnement","temp_rosee",...l])].filter(a=>Ve[a]),o=qt[t]||60,s=gt[t]||10080,c=s/o*6e4,p=new Date,r=new Date(p-s*6e4),d=["Horodatage",...n.map(a=>`${Ve[a].label} (${Ve[a].unit})`)].join(";"),v=Array.from({length:o},(a,u)=>[new Date(r.getTime()+u*c).toISOString().replace("T"," ").slice(0,19),...n.map(m=>It(m,1)[0].toFixed(2))].join(";")),$=(e.name||"parcelle").replace(/[^\w]/g,"_");Xn([d,...v].join(`\r
`),`${$}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function ea(e,i="7d",t="1h",l=null){const n=new Set,o={};e.forEach(v=>{const $=ne.find(a=>a.id===v);$&&(mt[$.model]||[]).forEach(a=>{n.add(a),o[a]||(o[a]=v)})});const s=pe.some(v=>v.plotId===l),c=["pluie","irrigation","temperature","humidite","pothydr","teneur","temp_sol","vent","rayonnement","humectation","par","temp_rosee","etp"],p=[...new Set([...n,"etp","rayonnement","temp_rosee",...s?["irrigation"]:[]])].filter(v=>Ve[v]).sort((v,$)=>{const a=c.indexOf(v),u=c.indexOf($);return(a===-1?999:a)-(u===-1?999:u)}),r=new Date().toISOString().slice(0,10),d=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-from m-custom-date" value="${d}">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to m-custom-date" value="${r}">
      </div>`:""}
    </div>
    <div class="m-detail-section">
      ${(()=>{const v=e[0]??null;return p.map($=>$==="irrigation"?zi($,i,null,l):zi($,i,o[$]??v)).join("")})()}
    </div>`}const ta={"IRRÉ-LIS Multi-Cultures":{icon:"bi-droplet-fill",color:"#2E75B6"},"IRRÉ-LIS Mono-Culture":{icon:"bi-droplet-fill",color:"#2E75B6"},DeciTrait:{icon:"bi-shield-check",color:"#4CAF50"},Limacapt:{icon:"bi-bug",color:"#795548"},"Modèles Arvalis — PRÉVI-LIS / MILÉOS":{icon:"bi-graph-up",color:"#FBAF05"},Xarvio:{icon:"bi-grid-3x3-gap",color:"#00B14F"},Pixagri:{icon:"bi-map",color:"#00897B"},VitiMeteo:{icon:"bi-flower1",color:"#8B4C9E"},Rimpro:{icon:"bi-cloud-lightning",color:"#E53935"},"Cropwise Protector":{icon:"bi-shield-fill-check",color:"#43A047"},"Movida GrapeVision":{icon:"bi-eye",color:"#7B1FA2"}};function ei(e){const i=ta[e]||{icon:"bi-puzzle",color:"#8e8e93"};return`<i class="bi ${i.icon}" style="font-size:18px;color:${i.color};width:24px;text-align:center;flex-shrink:0"></i>`}const gs={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"};function ia(e,i,t){const l=t.map(d=>ne.find(v=>v.id===d)).filter(Boolean),n=l.some(d=>d.model==="P+"||d.model==="PT"),o=l.some(d=>d.model==="P"),s=n&&o,c=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),p=new Map;l.forEach(d=>{(mt[d.model]||[]).forEach(v=>{p.has(v)||p.set(v,[]),p.get(v).push(d)})});const r=new Set;return p.forEach((d,v)=>{d.length<=1||d.every($=>c.has($.model))||d.forEach($=>r.add($.id))}),`
    <div class="m-detail-section">
      ${s?`
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
        ${l.length?l.map((d,v)=>{const $=d.event&&(Array.isArray(d.event)?d.event.length>0:!0),a=r.has(d.id),u=gs[d.model]||d.model,b=(mt[d.model]||[]).map(m=>{const g=Ve[m];return g?`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${g.color}18;color:${g.color};border:1px solid ${g.color}40;white-space:nowrap">${g.label}</span>`:""}).join("");return`<div class="m-list-row${v===l.length-1?" m-list-row--last":""} m-tappable" data-open-sensor="${d.id}" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:15px;font-weight:500;display:flex;align-items:center;gap:5px">
                      ${u}
                      ${$?'<span style="width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0;display:inline-block"></span>':""}
                      ${a?'<i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:12px;flex-shrink:0"></i>':""}
                    </div>
                    <div style="font-size:12px;color:#8e8e93;margin-top:1px">${d.model} · ${d.serial}</div>
                  </div>
                  <button class="btn-sensor-more" data-sensor-id="${d.id}" style="border:none;background:none;color:#8e8e93;font-size:18px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1" onclick="event.stopPropagation()">···</button>
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
                </div>
                ${b?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${b}</div>`:""}
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun capteur lié</span></div>'}
        ${r.size?`
        <div style="display:flex;gap:8px;align-items:flex-start;padding:10px 14px;background:#fff8e1;border-top:.5px solid rgba(0,0,0,.07)">
          <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;flex-shrink:0;margin-top:1px"></i>
          <span style="font-size:12px;color:#7a5a00;line-height:1.4">Plusieurs capteurs mesurent la même métrique. Les données peuvent se cumuler en double. Déliez l'un des capteurs redondants.</span>
        </div>`:""}
        <div class="m-list-row m-list-row--last" data-action="add-sensor" style="color:#0172A4">
          <i class="bi bi-plus-circle" style="font-size:15px;color:#0172A4"></i>
          <span class="m-list-row-label" style="color:#0172A4">Ajouter un capteur</span>
        </div>
      </div>

      <div class="m-list-section-header">Alertes & Intégrations</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-integrations" style="flex-direction:column;align-items:stretch;gap:6px">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <span class="m-list-row-label">Intégrations</span>
            <i class="bi bi-chevron-right m-list-chevron" style="position:static;margin-left:auto"></i>
          </div>
          ${(e.integrations||[]).length?`
          <div style="display:flex;flex-wrap:wrap;gap:5px">
            ${(e.integrations||[]).map(d=>`
              <span style="display:inline-flex;align-items:center;gap:5px;background:#EFF6FF;color:#0172A4;border:1px solid #BFDBFE;border-radius:20px;padding:3px 10px 3px 7px;font-size:12px;font-weight:500;line-height:1.4">
                ${ei(d)}<span>${d}</span>
              </span>`).join("")}
          </div>`:""}
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
    </div>`}function ti(e,i=[],t="widgets",l="Parcelles"){let n=ge.find(h=>h.id===e.orgId),o=t,s="7d",c="1h",p=!1;const r=(n==null?void 0:n.ville)||"",d=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${l}</span></button>
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
    <div id="detail-content" class="m-detail-content"></div>`);function v(){const h=ge.filter(E=>E.id!==100&&E.statut!=="inactif"),w=document.createElement("div"),x=()=>{w.innerHTML=h.map(E=>`
        <div class="m-sheet-option${E.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${E.id}">
          <span>${E.name}</span>
          ${E.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),w.querySelectorAll("[data-pick-org]").forEach(E=>{E.addEventListener("click",()=>{const y=+E.dataset.pickOrg;y!==e.orgId&&(e.orgId=y,n=ge.find(I=>I.id===y),b(),Q("Exploitation mise à jour")),M.classList.remove("m-sheet-overlay--show"),setTimeout(()=>M.remove(),280)})})},M=be({title:"Exploitation",body:w,doneLabel:"Fermer",onDone:()=>{}});x()}function $(){const h=["Pivot","Enrouleur","Rampe","Goutte à goutte","Aspersion","Non irrigué"],w=Gt(e.id).irrigation??e.irrigation,x=document.createElement("div"),M=()=>{x.innerHTML=`
        <div class="m-sheet-option${w?"":" m-sheet-option--active"}" data-pick-irrig="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez un type</span>
          ${w?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${h.map(y=>`
          <div class="m-sheet-option${y===w?" m-sheet-option--active":""}" data-pick-irrig="${y}">
            <span>${y}</span>
            ${y===w?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,x.querySelectorAll("[data-pick-irrig]").forEach(y=>{y.addEventListener("click",()=>{const I=y.dataset.pickIrrig;I&&I!==w&&(Ui(e.id,{irrigation:I}),e.irrigation=I,b(),Q("Type d'irrigation mis à jour")),E.classList.remove("m-sheet-overlay--show"),setTimeout(()=>E.remove(),280)})})},E=be({title:"Type d'irrigation",body:x,doneLabel:"Fermer",onDone:()=>{}});M()}const a=["IRRÉ-LIS Multi-Cultures","IRRÉ-LIS Mono-Culture","DeciTrait","Limacapt","Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","Movida GrapeVision"];function u(){let h=[...e.integrations||[]];function w(M){const E=a.filter(y=>!h.includes(y));M.innerHTML=`
        <div class="m-list-section-header">${h.length?`Actives (${h.length})`:"Actives"}</div>
        <div class="m-list">
          ${h.length?h.map((y,I)=>`
            <div class="m-list-row${I===h.length-1?" m-list-row--last":""}" style="gap:10px">
              ${ei(y)}
              <span class="m-list-row-label" style="flex:1">${y}</span>
              <button class="btn-unlink-integ" data-integ="${y}" style="border:none;background:none;color:#ff3b30;font-size:13px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Délier</button>
            </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucune intégration active</span></div>'}
        </div>
        ${E.length?`
        <div class="m-list-section-header">Disponibles</div>
        <div class="m-list">
          ${E.map((y,I)=>`
            <div class="m-list-row${I===E.length-1?" m-list-row--last":""}" style="gap:10px">
              ${ei(y)}
              <span class="m-list-row-label" style="flex:1">${y}</span>
              <button class="btn-add-integ" data-integ="${y}" style="border:none;background:none;color:#0172A4;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Lier</button>
            </div>`).join("")}
        </div>`:""}`,M.querySelectorAll(".btn-unlink-integ").forEach(y=>{y.addEventListener("click",()=>{h=h.filter(I=>I!==y.dataset.integ),e.integrations=[...h],w(M),Q("Intégration déliée")})}),M.querySelectorAll(".btn-add-integ").forEach(y=>{y.addEventListener("click",()=>{h.includes(y.dataset.integ)||h.push(y.dataset.integ),e.integrations=[...h],w(M),Q("Intégration liée")})})}const x=xe(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${e.name}</span></button>
          <span style="font-size:17px;font-weight:600">Intégrations</span>
          <div style="width:60px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="integ-list-content" style="padding-bottom:32px"></div>`);x.querySelector(".m-detail-back").addEventListener("click",he),w(x.querySelector("#integ-list-content"))}function b(){const h=d.querySelector("#detail-content");o==="widgets"&&(h.innerHTML=Gn(e,i)),o==="donnees"&&(h.innerHTML=ea(i,s,c,e.id)),o==="params"&&(h.innerHTML=ia(e,n,i),m()),g()}function m(){const h=window.L;h&&setTimeout(()=>{var M;const w=d.querySelector("#parcel-minimap");if(!w)return;const x=h.map(w,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(h.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(x),((M=e.latlngs)==null?void 0:M.length)>=3){const E=h.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(x);x.fitBounds(E.getBounds(),{padding:[8,8]})}else x.setView([e.lat,e.lng],14),h.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(x)},50)}function g(){var h,w,x,M,E,y,I;(h=d.querySelector(".m-period-sel"))==null||h.addEventListener("change",C=>{s=C.target.value,b()}),(w=d.querySelector(".m-step-sel"))==null||w.addEventListener("change",C=>{c=C.target.value,b()}),(x=d.querySelector(".m-export-btn"))==null||x.addEventListener("click",()=>Qn(e,i,s)),d.querySelectorAll(".m-chart-svg-wrap").forEach(C=>Wn(C)),d.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(C=>{C.addEventListener("click",()=>{const q=+C.dataset.sensorId,j=ne.find(L=>L.id===q);j&&ye(()=>import("./chart-fullscreen-lpmJKc3T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(L=>L.initChartFullscreen({sensor:j,linkedSensorIds:i,metricId:C.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),d.querySelectorAll(".m-irrig-footer-link").forEach(C=>{C.addEventListener("click",()=>{o="donnees",d.querySelectorAll(".m-detail-tab").forEach(q=>q.classList.toggle("active",q.dataset.view==="donnees")),b()})}),d.querySelectorAll(".m-chart-details-link").forEach(C=>{C.addEventListener("click",()=>{if(C.dataset.metricId==="irrigation"){ye(()=>import("./chart-fullscreen-lpmJKc3T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(L=>L.initChartFullscreen({linkedSensorIds:i,metricId:"irrigation",backLabel:e.name,parcel:e}));return}const q=+C.dataset.sensorId,j=ne.find(L=>L.id===q);j&&ye(()=>import("./chart-fullscreen-lpmJKc3T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(L=>L.initChartFullscreen({sensor:j,linkedSensorIds:i,metricId:C.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),d.addEventListener("click",C=>{const q=C.target.closest(".m-cumul-add-btn");if(q){const L=q.dataset.cumulMetricId,f=q.dataset.cumulVal,k=_n[L];if(!k)return;const T=document.createElement("div");T.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${k.metricLabel}</strong> (<em>${f}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,be({title:"Tableau de bord",body:T,doneLabel:"Ajouter",onDone:()=>{const S=JSON.parse(localStorage.getItem(Di)||"{}"),A=S.cumulsList||[];if(A.length>=5){Q("Maximum de cumuls atteint (5)");return}const P=L==="hf"?{cold:Ee.hfSeuil}:L==="dj"?{low:Ee.djMin,high:Ee.djMax}:null;A.push({metricId:L,...k,subjectKey:`p-${e.id}`,subjectLabel:e.name,fromDate:`${new Date().getFullYear()}-01-01`,value:f,thresholds:P}),S.cumulsList=A,localStorage.setItem(Di,JSON.stringify(S)),Q("Cumul ajouté au tableau de bord")}});return}const j=C.target.closest(".m-cumul-edit-btn");if(j){const L=j.dataset.cumulMetricId,f=document.createElement("div");L==="hf"?(f.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Ee.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,be({title:"Heures de froid",body:f,doneLabel:"Appliquer",onDone:()=>{var k;Ee.hfSeuil=+(((k=f.querySelector("#edit-hf-seuil"))==null?void 0:k.value)??7.2),b()}})):L==="dj"&&(f.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Ee.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Ee.djMax}" step="1" min="-20" max="50">
          </div>`,be({title:"Degrés-jours",body:f,doneLabel:"Appliquer",onDone:()=>{var k,T;Ee.djMin=+(((k=f.querySelector("#edit-dj-min"))==null?void 0:k.value)??0),Ee.djMax=+(((T=f.querySelector("#edit-dj-max"))==null?void 0:T.value)??18),b()}}));return}}),d.querySelectorAll("[data-open-sensor]").forEach(C=>{C.addEventListener("click",()=>{const q=+C.dataset.openSensor,j=ne.find(L=>L.id===q);j&&ye(()=>Promise.resolve().then(()=>At),void 0).then(L=>L.initSensorDetail(j,"donnees",Ct))})}),d.querySelectorAll(".btn-sensor-more").forEach(C=>{C.addEventListener("click",q=>{q.stopPropagation();const j=+C.dataset.sensorId,L=ne.find(S=>S.id===j);if(!L)return;const f=L.model==="P+"||L.model==="PT"?"Station météo":L.model==="P"?"Pluviomètre":L.model,k=document.createElement("div");k.innerHTML=`
          <div style="padding:8px 0">
            <button id="sheet-open-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;text-align:left">
              <i class="bi bi-broadcast" style="color:#0172A4;width:22px;text-align:center"></i>Voir la fiche capteur
            </button>
            <div style="height:.5px;background:rgba(0,0,0,.1);margin:0 20px"></div>
            <button id="sheet-unlink-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;color:#ff3b30;text-align:left">
              <i class="bi bi-x-circle" style="width:22px;text-align:center"></i>Délier de cette parcelle
            </button>
          </div>`;const T=be({title:`${f} · ${L.serial}`,body:k,doneLabel:"Fermer",onDone:()=>{}});k.querySelector("#sheet-open-sensor").addEventListener("click",()=>{T.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{T.remove(),ye(()=>Promise.resolve().then(()=>At),void 0).then(S=>S.initSensorDetail(L,"donnees",Ct))},280)}),k.querySelector("#sheet-unlink-sensor").addEventListener("click",()=>{T.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{T.remove(),ut({title:"Délier le capteur",message:`Délier <strong>${f} — ${L.serial}</strong> de <strong>${e.name}</strong> ?`,confirmLabel:"Délier",confirmColor:"#ff3b30",onConfirm:()=>{const S=i.indexOf(j);S!==-1&&i.splice(S,1),L.parcelIds=L.parcelIds.filter(A=>A!==e.id),b(),Q(`${L.serial} délié`)}})},280)})})}),d.querySelectorAll(".m-list-row[data-action]").forEach(C=>{C.addEventListener("click",()=>{C.dataset.action==="edit-exploitation"?v():C.dataset.action==="edit-irrigation"?$():C.dataset.action==="edit-integrations"?u():C.dataset.action==="archive"?ut({title:"Archiver la parcelle",message:`Archiver <strong>${e.name}</strong> ? Elle ne sera plus visible dans votre exploitation.`,confirmLabel:"Archiver",confirmColor:"#ff9f0a",onConfirm:()=>Q("Parcelle archivée (fonctionnalité à venir)")}):Q("Fonctionnalité à venir")})}),d.querySelectorAll(".m-widget-menu").forEach(C=>{C.addEventListener("click",q=>{var S;q.stopPropagation();const j=C.dataset.wid;if(!j)return;(S=d.querySelector(".m-widget-dd"))==null||S.remove();const L=document.createElement("div");L.className="m-widget-dd",L.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:180px",L.innerHTML=`<button class="m-widget-dd-remove" data-wid="${j}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const f=d.querySelector(".m-detail-content"),k=C.getBoundingClientRect(),T=f.getBoundingClientRect();L.style.top=`${k.bottom-T.top+f.scrollTop+4}px`,L.style.right=`${T.right-k.right}px`,f.style.position="relative",f.appendChild(L),L.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{L.remove();const A=Lt(e,i).filter(P=>P!==j);vs(e.id,A),b()}),setTimeout(()=>document.addEventListener("click",()=>L.remove(),{once:!0}),0)})}),(M=d.querySelector(".m-add-widget-btn"))==null||M.addEventListener("click",()=>Fn(e,i,b)),(E=d.querySelector(".m-irrig-act-saisie"))==null||E.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>Ke),void 0).then(C=>C.openIrrigationSaisie([e],Q,{ids:[e.id],label:e.name},!0))}),(y=d.querySelector(".m-irrig-act-saison"))==null||y.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>Ke),void 0).then(C=>C.openIrrigationStrategie([e],Q,{ids:[e.id],label:e.name},null,!0))}),(I=d.querySelector(".m-irrig-set-type"))==null||I.addEventListener("click",()=>{o="params",d.querySelectorAll(".m-detail-tab").forEach(C=>C.classList.toggle("active",C.dataset.view==="params")),b(),$()}),d.querySelectorAll(".m-pcumul-del").forEach(C=>{C.addEventListener("click",q=>{q.stopPropagation();const j=+C.dataset.pid,L=tt(j),f=new Set(L.hidden||[]);f.add(C.dataset.cid),xt(j,{hidden:[...f]}),b()})}),d.querySelectorAll(".m-pcumul-date").forEach(C=>{C.addEventListener("click",()=>{var q;return(q=C.showPicker)==null?void 0:q.call(C)}),C.addEventListener("change",()=>{const q=+C.dataset.pid,j=C.dataset.cid,L=C.value;if(!L||(Date.now()-new Date(L))/864e5>365)return;const T=tt(q).dates||{};T[j]=L,xt(q,{dates:T});const S=C.closest(".m-cumuls-saved-card"),A=S==null?void 0:S.querySelector(".m-pcumul-value");if(A){const P=S.querySelector(".m-pcumul-unit"),D=(P==null?void 0:P.textContent.trim())||"",_=Ye(q,j,L);A.innerHTML=`${_}<span class="m-pcumul-unit">${D}</span>`}})}),d.querySelectorAll(".m-pcumul-cfg").forEach(C=>{C.addEventListener("click",q=>{var A;q.stopPropagation();const j=+C.dataset.pid,L=C.dataset.cid,k={...tt(j).cfg},T=Un[L];if(!T)return;(A=d.querySelector(".m-pcumul-cfg-panel"))==null||A.remove();const S=document.createElement("div");S.className="m-pcumul-cfg-panel",S.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",S.innerHTML=T.map(P=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${P.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${P.key}" value="${k[P.key]??P.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',C.closest(".m-cumuls-saved-card").after(S),S.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{S.querySelectorAll(".m-pcumul-cfg-inp").forEach(P=>{k[P.dataset.key]=parseFloat(P.value)||0}),xt(j,{cfg:k}),S.remove(),b()})})}),d.querySelectorAll(".m-pcumul-add").forEach(C=>{C.addEventListener("click",q=>{q.stopPropagation();const j=+C.dataset.pid,L=C.dataset.cid,f=tt(j),k=new Set(f.hidden||[]);k.delete(L),xt(j,{hidden:[...k]}),b()})})}d.querySelectorAll(".m-detail-tab").forEach(h=>{h.addEventListener("click",()=>{d.querySelectorAll(".m-detail-tab").forEach(w=>w.classList.remove("active")),h.classList.add("active"),o=h.dataset.view,b()})}),d.querySelector(".m-detail-back").addEventListener("click",he),d.querySelector("#d-star").addEventListener("click",()=>{p=!p;const h=d.querySelector("#d-star");h.querySelector("i").className=p?"bi bi-star-fill":"bi bi-star",h.style.color=p?"#f5c842":"",Q(p?"Ajouté aux favoris":"Retiré des favoris")}),d.querySelector("#d-plus").addEventListener("click",()=>{var h;(h=window.showMobileAddPage)==null||h.call(window)}),d.querySelector("#d-journal").addEventListener("click",()=>aa(e)),b()}function sa(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}const ys=e=>`parcel-journal-${e}`,na=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"];function ii(e){try{const i=localStorage.getItem(ys(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"note",category:"Observation générale",date:"2026-05-11",auteur:"Jean Dupont",role:"membre",texte:"Quelques pucerons sur feuilles basses. À surveiller."},{id:2,type:"traitement",date:"2026-05-16",auteur:"Sophie Martin",role:"conseiller",texte:"Vent < 2 m/s, conditions conformes.",produit:"Karate Zeon",dose:"0,1 L/ha",cible:"Pucerons"}]}function xs(e,i){localStorage.setItem(ys(e),JSON.stringify(i))}function aa(e){const i=ge.find(o=>o.id===e.orgId),t=(i==null?void 0:i.ville)||"",l=xe(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);l.querySelector(".m-detail-back").addEventListener("click",he);function n(){var v,$;const o=l.querySelector("#mjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(a=>a.linkedType==="parcel"&&a.linkedId===e.id).map((a,u)=>({id:`dash-${u}`,type:"note",date:a.date,texte:a.text,auteur:a.auteur,role:a.role,_fromDashboard:!0})),c=[...ii(e.id),...s].sort((a,u)=>u.date.localeCompare(a.date)),p=a=>{const[u,b,m]=a.split("-");return`${m}/${b}/${u}`},r={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"}};let d=`
      <div style="padding:12px 16px 4px;display:flex;flex-direction:column;gap:8px">
        <button class="m-btn m-btn--secondary" id="mjrn-add-note">
          <i class="bi bi-pencil-square"></i> Ajouter une note
        </button>
        <button class="m-btn m-btn--secondary" id="mjrn-add-trait">
          <i class="bi bi-eyedropper"></i> Ajouter un traitement
        </button>
      </div>
    `;c.length===0?d+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(d+='<div class="m-jrn-timeline">',c.forEach((a,u)=>{const b=r[a.type]||r.note,m=a.type==="traitement",g=u===c.length-1,h=!!a._fromDashboard;d+=`
          <div class="m-jrn-entry" data-id="${a.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${b.dotBg};color:${b.dotColor};border-color:${b.dotColor}40">
                <i class="bi ${b.icon}"></i>
              </div>
              ${g?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${p(a.date)}</span>
                <span class="journal-type-badge journal-type-badge--${b.badgeCls}">${b.label}</span>
                ${h?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${a.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${a.texte?`<div class="m-jrn-texte">${a.texte}</div>`:""}
              ${a.auteur?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${a.auteur}${sa(a.role)}</div>`:""}
              ${m&&(a.produit||a.dose||a.cible)?`
                <div class="m-jrn-meta">
                  ${a.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${a.produit}</span>`:""}
                  ${a.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${a.dose}</span>`:""}
                  ${a.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${a.cible}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),d+="</div>"),o.innerHTML=d,(v=o.querySelector("#mjrn-add-note"))==null||v.addEventListener("click",()=>_i("note",e.id,n)),($=o.querySelector("#mjrn-add-trait"))==null||$.addEventListener("click",()=>_i("traitement",e.id,n)),o.querySelectorAll(".m-jrn-del").forEach(a=>{a.addEventListener("click",()=>{const u=parseInt(a.dataset.id);xs(e.id,ii(e.id).filter(b=>b.id!==u)),n()})})}n()}function _i(e,i,t){const l=e==="traitement",n=new Date().toISOString().slice(0,10),o=Ct==="admin"?"conseiller":"membre",s=ge.find(r=>r.id===(Ct==="admin"?100:1)),c=s?`${s.prenomProprietaire} ${s.nomProprietaire}`:"Jean Dupont",p=document.createElement("div");p.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:12px">
      ${l?"":`
      <div>
        <div class="m-form-label">Catégorie</div>
        <select class="m-sheet-input" id="mjf-category">
          ${na.map(r=>`<option value="${r}">${r}</option>`).join("")}
        </select>
      </div>`}
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="mjf-date" value="${n}">
      </div>
      <div>
        <div class="m-form-label">${l?"Observations":"Texte"}</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="${l?"Conditions météo, remarques…":"Votre note…"}" style="resize:none;min-height:90px"></textarea>
      </div>
      ${l?`
      <div>
        <div class="m-form-label">Produit</div>
        <input type="text" class="m-sheet-input" id="mjf-produit" placeholder="Ex : Bordeaux mixture">
      </div>
      <div style="display:flex;gap:8px">
        <div style="flex:1">
          <div class="m-form-label">Dose</div>
          <input type="text" class="m-sheet-input" id="mjf-dose" placeholder="Ex : 2 kg/ha" style="margin-bottom:0">
        </div>
        <div style="flex:1">
          <div class="m-form-label">Cible</div>
          <input type="text" class="m-sheet-input" id="mjf-cible" placeholder="Ex : Mildiou" style="margin-bottom:0">
        </div>
      </div>`:""}
    </div>`,be({title:l?"Ajouter un traitement":"Ajouter une note",body:p,doneLabel:"Enregistrer",onDone:()=>{var a;const r=p.querySelector("#mjf-date").value||n,d=p.querySelector("#mjf-texte").value.trim(),v=l?"":((a=p.querySelector("#mjf-category"))==null?void 0:a.value)||"",$={id:Date.now(),type:e,date:r,texte:d,auteur:c,role:o};l||($.category=v),l&&($.produit=p.querySelector("#mjf-produit").value.trim(),$.dose=p.querySelector("#mjf-dose").value.trim(),$.cible=p.querySelector("#mjf-cible").value.trim()),!(!d&&!$.produit)&&(xs(i,[$,...ii(i)]),t())}}),setTimeout(()=>{var r;return(r=p.querySelector("#mjf-texte"))==null?void 0:r.focus()},380)}const Nt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:ti},Symbol.toStringTag,{value:"Module"})),ot=100,oa={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function lt(e,i){const t=oa[i];return t?ne.some(l=>l.parcelIds.includes(e.id)&&t.includes(l.model)):!0}const $t=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function la(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*l)/255>.5?"#000000":"#ffffff"}function Hi(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"irrigation":return i===0?"#c7c7cc":i<30?"#FFDFB8":"#FF8C00";case"etp":return i<2?"#D6EDF9":i<5?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"temp_rosee":return i<5?"#D2DEFA":i<12?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"rfu":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function ra(e,i){const t=new Date().toISOString().split("T")[0],l=s=>{const c=new Date;return c.setDate(c.getDate()-s),c.toISOString().split("T")[0]},n=s=>{const c=new Date;return c.setDate(c.getDate()+s),c.toISOString().split("T")[0]},o=pe.filter(s=>s.plotId===e);switch(i){case"Aujourd'hui":return o.filter(s=>s.iso===t).reduce((s,c)=>s+c.mm,0);case"7 derniers jours":return o.filter(s=>s.real&&s.iso>=l(7)).reduce((s,c)=>s+c.mm,0);case"30 derniers jours":return o.filter(s=>s.real&&s.iso>=l(30)).reduce((s,c)=>s+c.mm,0);case"Demain":return o.filter(s=>!s.real&&s.iso===n(1)).reduce((s,c)=>s+c.mm,0);case"7 prochains jours":return o.filter(s=>!s.real&&s.iso>t&&s.iso<=n(7)).reduce((s,c)=>s+c.mm,0);case"30 prochains jours":return o.filter(s=>!s.real&&s.iso>t&&s.iso<=n(30)).reduce((s,c)=>s+c.mm,0);case"Toute la saison":return o.filter(s=>s.real).reduce((s,c)=>s+c.mm,0);default:return o.filter(s=>s.real).reduce((s,c)=>s+c.mm,0)}}function ca(e){switch(e){case"irrigation":return 0;case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function da(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const l=i==="admin",n=ge.filter(h=>h.id!==ot);Object.fromEntries(ge.map(h=>[h.id,h]));let o=null,s=null;const c={};let p="carte",r="pluie",d="7 derniers jours",v="all";function $(h){if(r==="irrigation")return ra(h,d);const w=`${h}-${r}-${d}`;return w in c||(c[w]=ca(r)),c[w]}function a(){return l?v==="all"?ce:v===String(ot)?ce.filter(h=>h.orgId===ot):ce.filter(h=>String(h.orgId)===v):ce.filter(h=>h.orgId===1)}function u(){if(o){try{o.remove()}catch{}o=null,s=null}}function b(){u();const h=$t.find(y=>y.id===r)||$t[0],w=a(),x=l?`
      <select class="m-filter-select" id="org-filter" style="flex:0 0 44px;height:44px">
        <option value="all">Toutes les organisations</option>
        <option value="${ot}"${v===String(ot)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${n.map(y=>`<option value="${y.id}"${v===String(y.id)?" selected":""}>${y.name}</option>`).join("")}
      </select>`:"",M=[...w].sort((y,I)=>{const C=lt(y,r),q=lt(I,r);return C&&!q?-1:!C&&q?1:C?$(I.id)-$(y.id):0}),E=M.length?`<div class="m-plain-list">${M.map(y=>{const I=[y.crop,y.irrigation].filter(Boolean).join(" · "),C=lt(y,r),q=ne.filter(j=>j.parcelIds.includes(y.id)).some(j=>j.event&&(Array.isArray(j.event)?j.event.length>0:!0));return`
            <div class="m-plain-row m-tappable" data-plot-id="${y.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${y.name}${q?' <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px"></span>':""}</span>
                ${I?`<span class="m-plain-city">${I}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                ${(()=>{const j=C&&!(r==="irrigation"&&!pe.some(f=>f.plotId===y.id)),L=j?$(y.id):null;return`<span class="m-plain-data${j?"":" m-plain-na"}"${j?` style="color:${Hi(r,L)}"`:""}>${j?`${L} ${h.unit}`:"—"}</span>`})()}
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';t.innerHTML=`
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${p==="carte"?" m-view-btn--on":""}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${p==="liste"?" m-view-btn--on":""}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${$t.map(y=>`<option value="${y.id}"${y.id===r?" selected":""}>${y.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${h.aggs.map(y=>`<option${y===d?" selected":""}>${y}</option>`).join("")}
          </select>
        </div>
        ${x}
      </div>
      ${p==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${E}</div>`}`,g(),p==="carte"&&m(w,h)}function m(h,w){const x=window.L;x&&setTimeout(()=>{const M=t.querySelector("#parcel-map");if(!M)return;o=x.map(M,{zoomControl:!1,attributionControl:!1}),x.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(o);const E=[];h.forEach(y=>{var A;const I=r!=="irrigation"||pe.some(P=>P.plotId===y.id),C=lt(y,r)&&I?`${$(y.id)} ${w.unit}`:"—",q=ne.filter(P=>P.parcelIds.includes(y.id)).map(P=>P.id),j=()=>ti(y,q),L=[y.lat,y.lng],f=lt(y,r)&&I,k=f?Hi(r,$(y.id)):"#0172A4";y.latlngs&&y.latlngs.length>=3?(x.polygon(y.latlngs,{color:"#fff",weight:2,fillColor:k,fillOpacity:.35}).addTo(o).on("click",j),E.push(...y.latlngs)):E.push(L);const T=x.circleMarker(L,{radius:f?8:6,color:"#fff",weight:2,fillColor:k,fillOpacity:f?.95:.4}).addTo(o);if(q.some(P=>{const D=ne.find(_=>_.id===P);return(D==null?void 0:D.event)&&(Array.isArray(D.event)?D.event.length>0:!0)})&&x.marker(L,{icon:x.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(o),f){T.bindTooltip(C,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const P=_=>{if(!_)return;const B=la(k);_.style.setProperty("background",k,"important"),_.style.setProperty("color",B,"important"),_.style.setProperty("border-color",B,"important"),_.style.setProperty("box-shadow","none","important")},D=(A=T.getTooltip())==null?void 0:A.getElement();D&&P(D),T.on("tooltipopen",_=>P(_.tooltip.getElement()))}T.on("click",j)}),E.length&&(s=E,o.fitBounds(E,{padding:[32,32]})),o.invalidateSize()},0)}window.addEventListener("m-tab-change",h=>{h.detail==="parcelles"&&p==="carte"&&o&&setTimeout(()=>{o.invalidateSize(),s!=null&&s.length&&o.fitBounds(s,{padding:[32,32]})},50)});function g(){var h,w,x;t.querySelectorAll(".m-view-btn").forEach(M=>M.addEventListener("click",()=>{p=M.dataset.view,b()})),(h=t.querySelector("#metric-sel"))==null||h.addEventListener("change",M=>{var E;r=M.target.value,d=((E=$t.find(y=>y.id===r))==null?void 0:E.defaultAgg)||"",b()}),(w=t.querySelector("#agg-sel"))==null||w.addEventListener("change",M=>{d=M.target.value,b()}),(x=t.querySelector("#org-filter"))==null||x.addEventListener("change",M=>{v=M.target.value,b()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(M=>{M.addEventListener("click",()=>{const E=ce.find(I=>I.id===+M.dataset.plotId);if(!E)return;const y=ne.filter(I=>I.parcelIds.includes(E.id)).map(I=>I.id);ti(E,y)})})}b()}const ke={djMin:0,djMax:18,hfSeuil:7.2},ua={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"}},Bi="weenat-m-dash",si={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},pa={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"};function ri(e){return e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[15,60]:e==="CHP-60/90"?[15,90]:null}function Fi(e,i){const t=si[e.model]?`${si[e.model]} · ${e.model}`:e.model,l=ri(e.model)&&e.depth!=null?`${e.depth} cm`:null;return[t,l,i].filter(Boolean).join(" · ")}const vt={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function $s(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(l,n)=>{const o=n/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(o-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,s))})}const ws={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function ma(e,i,t,l,n,o=20){const s=ws[e]||10080,c=new Date,p=$=>e==="1d"||e==="hier"?`${String($.getHours()).padStart(2,"0")}h`:e==="365d"?$.toLocaleDateString("fr-FR",{month:"short"}):`${String($.getDate()).padStart(2,"0")}/${String($.getMonth()+1).padStart(2,"0")}`,r=4,d=i-t-l,v=n-o;return Array.from({length:r+1},($,a)=>{const u=a/r,b=new Date(c.getTime()-(1-u)*s*6e4),m=(t+u*d).toFixed(1),g=a===0?"start":a===r?"end":"middle";return[`<line x1="${m}" y1="${v}" x2="${m}" y2="${v+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${m}" y="${n-3}" text-anchor="${g}" font-size="9" fill="#8e8e93" font-family="-apple-system">${p(b)}</text>`].join("")}).join("")}function va(e,i,t,l="7d",n=""){const o=Ss[l]||60,s=$s(e,o),c=320,p=100,r=34,d=6,v=10,$=20,a=c-r-d,u=p-v-$,b=t?0:Math.min(...s),m=Math.max(...s,b+.001),g=m-b,h=f=>r+f/(s.length-1)*a,w=f=>v+u-(f-b)/g*u,x=`g${Math.random().toString(36).slice(2,8)}`,M=[0,.5,1].map(f=>{const k=b+f*g,T=v+u-f*u;return`<text x="${r-3}" y="${(T+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${k<10?k.toFixed(1):Math.round(k)}</text>`}).join(""),E=[.25,.5,.75].map(f=>`<line x1="${r}" y1="${(v+u-f*u).toFixed(1)}" x2="${c-d}" y2="${(v+u-f*u).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),y=`<line x1="${r}" y1="${v+u}" x2="${c-d}" y2="${v+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,I=ma(l,c,r,d,p);if(t){const f=a/s.length*.7;return`<svg viewBox="0 0 ${c} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      ${M}${E}${y}
      ${s.map((k,T)=>{const S=(k-b)/g*u,A=v+u-S;return`<rect x="${(h(T)-f/2).toFixed(1)}" y="${A.toFixed(1)}" width="${f.toFixed(1)}" height="${S.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${I}
    </svg>`}const C=s.map((f,k)=>[h(k),w(f)]),q=C.map(([f,k],T)=>`${T?"L":"M"}${f.toFixed(1)},${k.toFixed(1)}`).join(" "),j=`${q} L${h(s.length-1).toFixed(1)},${(v+u).toFixed(1)} L${r},${(v+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(f=>+f.toFixed(2)),minV:+b.toFixed(2),maxV:+m.toFixed(2)}))}" data-color="${i}" data-unit="${n}" style="position:relative">
    <svg viewBox="0 0 ${c} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      <defs><linearGradient id="${x}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${M}${E}${y}
      <path d="${j}" fill="url(#${x})"/>
      <path d="${q}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${C.map(([f,k])=>`<circle cx="${f.toFixed(1)}" cy="${k.toFixed(1)}" r="2" fill="${i}"/>`).join("")}
      ${I}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function ba(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*l)/255>.5?"#000000":"#ffffff"}function fa(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,l=e.querySelector(".m-chart-tip"),n=e.querySelector(".m-chart-crosshair"),o=e.dataset.color||"#0172A4",s=e.dataset.unit||"";function c(r){const d=e.getBoundingClientRect(),v=Math.max(0,Math.min(1,(r-d.left)/d.width)),$=Math.round(v*(t.length-1)),a=t[$],u=v*100,b=(a<10?a.toFixed(1):String(Math.round(a)))+(s?` ${s}`:""),m=ba(o);n.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${u}%;width:1px;background:${o};opacity:.5`,l.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(u,75)}%;background:${o};color:${m};border:1.5px solid ${m};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,l.textContent=b}function p(){n.style.display="none",l.style.display="none"}e.addEventListener("pointermove",r=>{r.preventDefault(),c(r.clientX)}),e.addEventListener("pointerdown",r=>c(r.clientX)),e.addEventListener("pointerup",p),e.addEventListener("pointerleave",p),e.style.cursor="crosshair"}const Ss={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function ha(e,i,t){if(!t)return"";const l=Ss[i]||60,o=(ws[i]||10080)/(l*60),s=$s(e,l);let c=[];if(t==="temp"){const p=s.reduce((d,v)=>d+Math.max(0,Math.min(v,ke.djMax)-ke.djMin),0)*(o/24),r=s.filter(d=>d<ke.hfSeuil).length*o;c=[{label:"Degrés jours",val:`${Math.round(p)} DJ`,metricId:"dj",thresholdText:`${ke.djMin}°C → ${ke.djMax}°C`},{label:"Heures de froid",val:`${Math.round(r)} h`,metricId:"hf",thresholdText:`< ${ke.hfSeuil}°C`}]}else if(t==="pluie")c=[{label:"Cumul pluie",val:`${s.reduce((r,d)=>r+d,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const p=s.filter(r=>r>120).length*o;c=[{label:"Ensoleillement",val:`${Math.round(p)} h`,metricId:"rayo"}]}else if(t==="hws"){const p=s.filter(r=>r>50).length*o;c=[{label:"Heures d'humectation",val:`${Math.round(p)} h`,metricId:"humec"}]}return c.length?`<div class="m-chart-cumuls">${c.map(p=>{const r=p.metricId==="dj"||p.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${p.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${p.label}</span>
          ${p.thresholdText?`<span class="m-chart-cumul-thresh">${p.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${p.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${r}
        <button class="m-cumul-add-btn" data-cumul-label="${p.label}" data-cumul-val="${p.val}" data-cumul-metric-id="${p.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}function ga(e,i="7d",t="1h"){const l=vt[e.model]||[];if(!l.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const n={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},o=l.map(p=>{const r=n[p.id]||p.id,d=ha(p.id,i,p.cumulsType);return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${p.color}">${p.label}</span>
        </div>
        ${va(p.id,p.color,p.cumul,i,p.unit||"")}
        <div class="m-chart-details-link" data-metric-id="${r}">Voir détails →</div>
        ${d}
      </div>`}).join(""),s=new Date().toISOString().slice(0,10),c=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-from m-custom-date" value="${c}">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to m-custom-date" value="${s}">
      </div>`:""}
    </div>
    <div class="m-detail-section">${o}</div>`}function ya(e){var p;const i=(e.parcelIds||[]).map(r=>ce.find(d=>d.id===r)).filter(Boolean),t=i[0]||null,l=t?ge.find(r=>r.id===t.orgId):null,n=e.networkQuality||0,o=n>70?"#30d158":n>40?"#ff9f0a":"#ff3b30",s=e.event?Array.isArray(e.event)?e.event:[e.event]:[],c=i.map((r,d)=>`<div class="m-list-row${d===i.length-1&&i.length>0,""}" data-unlink-plot="${r.id}">
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
            value="${((p=(()=>{try{return JSON.parse(localStorage.getItem("weenat-sensor-names"))||{}}catch{return{}}})())==null?void 0:p[e.id])||""}"
            style="flex:1;min-width:0;margin-left:10px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 10px;font-size:14px;font-family:inherit;color:#1c1c1e;background:#f5f5f7;outline:none;user-select:text;-webkit-user-select:text">
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${pa[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${si[e.model]||e.model}</span>
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
          <span class="m-list-row-value">${(l==null?void 0:l.name)||"—"}</span>
        </div>
      </div>

      ${(()=>{const r=ri(e.model);return r?`
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
          <span class="m-list-row-value">${(l==null?void 0:l.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${(t==null?void 0:t.lat)||0},${(t==null?void 0:t.lng)||0}?q=${(t==null?void 0:t.lat)||0},${(t==null?void 0:t.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">Anomalies</div>
      <div class="m-list">
        ${s.length?s.map((r,d)=>{const v=r.toLowerCase().includes("déplacé");return`<div class="m-list-row" style="justify-content:space-between;gap:10px">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${r}</span>
                </div>
                ${v?`<button class="ev-stop-btn" data-ev-idx="${d}" style="flex-shrink:0;background:rgba(255,59,48,.1);border:1px solid #ff3b30;border-radius:8px;padding:5px 10px;font-size:12px;color:#ff3b30;font-family:inherit;cursor:pointer;white-space:nowrap">Arrêter</button>`:""}
              </div>`}).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${o};font-weight:600">${n}%</span>
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
        ${c}
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
    </div>`}function ni(e,i="donnees",t="admin"){var a;e.parcelIds||(e.parcelIds=[]);const l=e.parcelIds.length?ce.find(u=>e.parcelIds.includes(u.id)):null;let n=i,o="7d",s="1h",c=!1;const p=l&&((a=ge.find(u=>u.id===l.orgId))==null?void 0:a.ville)||"",r=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${Fi(e,p)}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres${e.event&&(!Array.isArray(e.event)||e.event.length>0)?' <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px;margin-bottom:1px;flex-shrink:0"></span>':""}</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function d(){const u=r.querySelector("#detail-content");n==="donnees"&&(u.innerHTML=ga(e,o,s)),n==="params"&&(u.innerHTML=ya(e),v()),$()}function v(){const u=window.L,b=e.parcelIds.length?ce.find(m=>e.parcelIds.includes(m.id)):null;!u||!b||setTimeout(()=>{const m=r.querySelector("#sensor-minimap");if(!m)return;const g=u.map(m,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(g),g.setView([b.lat,b.lng],15),u.circleMarker([b.lat,b.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(g)},50)}function $(){var u,b,m,g;(u=r.querySelector(".m-period-sel"))==null||u.addEventListener("change",h=>{o=h.target.value,d()}),(b=r.querySelector(".m-step-sel"))==null||b.addEventListener("change",h=>{s=h.target.value,d()}),r.querySelectorAll(".m-chart-svg-wrap").forEach(h=>fa(h)),r.querySelectorAll(".m-chart-details-link[data-metric-id]").forEach(h=>{h.addEventListener("click",()=>{ye(()=>import("./chart-fullscreen-lpmJKc3T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(w=>w.initChartFullscreen({sensor:e,metricId:h.dataset.metricId,backLabel:"Retour"}))})}),r.addEventListener("click",h=>{const w=h.target.closest(".m-cumul-add-btn");if(w){const M=w.dataset.cumulMetricId,E=w.dataset.cumulVal,y=ua[M];if(!y)return;const I=`${e.model} ${e.serial}`,C=document.createElement("div");C.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${y.metricLabel}</strong> (<em>${E}</em>) au tableau de bord du capteur <strong>${e.serial}</strong> ?</div>`,be({title:"Tableau de bord",body:C,doneLabel:"Ajouter",onDone:()=>{const q=JSON.parse(localStorage.getItem(Bi)||"{}"),j=q.cumulsList||[];if(j.length>=5){Q("Maximum de cumuls atteint (5)");return}const L=M==="hf"?{cold:ke.hfSeuil}:M==="dj"?{low:ke.djMin,high:ke.djMax}:null;j.push({metricId:M,...y,subjectKey:`s-${e.id}`,subjectLabel:I,fromDate:`${new Date().getFullYear()}-01-01`,value:E,thresholds:L}),q.cumulsList=j,localStorage.setItem(Bi,JSON.stringify(q)),Q("Cumul ajouté au tableau de bord")}});return}const x=h.target.closest(".m-cumul-edit-btn");if(x){const M=x.dataset.cumulMetricId,E=document.createElement("div");M==="hf"?(E.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${ke.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,be({title:"Heures de froid",body:E,doneLabel:"Appliquer",onDone:()=>{var y;ke.hfSeuil=+(((y=E.querySelector("#edit-hf-seuil"))==null?void 0:y.value)??7.2),d()}})):M==="dj"&&(E.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${ke.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${ke.djMax}" step="1" min="-20" max="50">
          </div>`,be({title:"Degrés-jours",body:E,doneLabel:"Appliquer",onDone:()=>{var y,I;ke.djMin=+(((y=E.querySelector("#edit-dj-min"))==null?void 0:y.value)??0),ke.djMax=+(((I=E.querySelector("#edit-dj-max"))==null?void 0:I.value)??18),d()}}))}}),r.querySelectorAll(".m-list-row[data-action]").forEach(h=>{h.addEventListener("click",()=>{const w=h.dataset.action;if(w==="add-maintenance")Ri(e,{openForm:!0});else if(w==="add-plot")xa(e,t,d);else if(w==="delete"){const x=ce.find(M=>{var E;return(E=e.parcelIds)==null?void 0:E.includes(M.id)});ut({title:"Retirer de l'exploitation",message:`Retirer <strong>${e.model} ${e.serial}</strong> de l'exploitation ?${x?`<br><br>Parcelle liée : <strong>${x.name}</strong>.`:""}<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>Q("Capteur retiré de l'exploitation (fonctionnalité à venir)")})}else Q("Fonctionnalité à venir")})}),r.querySelectorAll(".ev-stop-btn").forEach(h=>{h.addEventListener("click",w=>{w.stopPropagation();const x=+h.dataset.evIdx;Array.isArray(e.event)?(e.event=e.event.filter((M,E)=>E!==x),e.event.length||(e.event=null)):e.event=null,d()})}),r.querySelectorAll("[data-unlink-plot-btn]").forEach(h=>{h.addEventListener("click",w=>{w.stopPropagation();const x=+h.dataset.unlinkPlotBtn,M=ce.find(E=>E.id===x);ut({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${(M==null?void 0:M.name)||"la parcelle"}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(E=>E!==x),Q(`Délié de ${(M==null?void 0:M.name)||"la parcelle"}`),d()}})})}),(m=r.querySelector("#sensor-name-input"))==null||m.addEventListener("change",h=>{const w=h.target.value.trim();try{const M=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};w?M[e.id]=w:delete M[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(M))}catch{}const x=r.querySelector(".m-detail-title");x&&(x.textContent=w||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))}),(g=r.querySelector("#chp-depth-save"))==null||g.addEventListener("click",()=>{const h=r.querySelector("#chp-depth-input"),w=ri(e.model);if(!h||!w)return;let x=parseInt(h.value);if(isNaN(x))return;x=Math.max(w[0],Math.min(w[1],x)),h.value=x,e.depth=x;const M=r.querySelector(".m-detail-subtitle");M&&(M.textContent=Fi(e,p)),Q(`Profondeur enregistrée : ${x} cm`)})}r.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{r.querySelectorAll(".m-detail-tab").forEach(b=>b.classList.remove("active")),u.classList.add("active"),n=u.dataset.view,d()})}),r.querySelector(".m-detail-back").addEventListener("click",he),r.querySelector("#d-star").addEventListener("click",()=>{c=!c;const u=r.querySelector("#d-star");u.querySelector("i").className=c?"bi bi-star-fill":"bi bi-star",u.style.color=c?"#f5c842":"",Q(c?"Ajouté aux favoris":"Retiré des favoris")}),r.querySelector("#d-journal").addEventListener("click",()=>Ri(e)),r.querySelector("#d-plus").addEventListener("click",()=>{var u;return(u=window.showMobileAddPage)==null?void 0:u.call(window)}),d()}const Es=e=>`sensor-journal-${e}`,ks=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function ai(e){try{const i=localStorage.getItem(Es(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",role:"conseiller",texte:""},{id:2,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",role:"conseiller",texte:""},{id:3,type:"note",date:"2023-11-02",user:"Jean Dupont",role:"membre",texte:"Capteur légèrement déplacé — redressé"}]}function Cs(e,i){localStorage.setItem(Es(e),JSON.stringify(i))}function xa(e,i,t){const l=i==="adherent"?1:null,n=l?ce.filter(r=>r.orgId===l):ce.filter(r=>r.orgId!==100),o=new Set((vt[e.model]||[]).map(r=>r.id)),s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function c(r=""){const d=r.toLowerCase(),v=d?n.filter(a=>a.name.toLowerCase().includes(d)||(a.crop||"").toLowerCase().includes(d)):n,$=s.querySelector("#plot-list");if(!v.length){$.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}$.innerHTML="",v.forEach((a,u)=>{const b=e.parcelIds.includes(a.id),m=u===v.length-1,g=document.createElement("div");g.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${m?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,g.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${a.name}</span>
          ${a.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${a.crop}</span>`:""}
        </span>
        ${b?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,g.addEventListener("click",()=>{if(b)ut({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${a.name}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(h=>h!==a.id),Q(`Délié de ${a.name}`),c(r),t()}});else{const h=ne.find(w=>w.id!==e.id&&w.parcelIds.includes(a.id)&&(vt[w.model]||[]).some(x=>o.has(x.id)));h?(p.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{p.remove(),$a(e,a,h,t)},280)):(e.parcelIds=[...e.parcelIds,a.id],Q(`Lié à ${a.name}`),c(r),t())}}),$.appendChild(g)})}c();const p=be({title:"Parcelles liées",body:s,doneLabel:"Fermer",onDone:()=>{t()}});s.querySelector("#plot-search").addEventListener("input",r=>c(r.target.value))}function $a(e,i,t,l){const n=(vt[t.model]||[]).filter(c=>(vt[e.model]||[]).some(p=>p.id===c.id)).map(c=>c.label).join(", "),o=document.createElement("div");o.innerHTML=`
    <div style="display:flex;align-items:flex-start;gap:10px;padding:6px 0 14px;font-size:13px;color:#636366;line-height:1.5">
      <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:17px;flex-shrink:0;margin-top:1px"></i>
      <span>La parcelle <strong style="color:#1c1c1e">${i.name}</strong> a déjà un capteur mesurant <strong style="color:#1c1c1e">${n}</strong>. Quel capteur conserver ?</span>
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
    <div style="height:6px"></div>`;const s=be({title:"Conflit de métrique",body:o,doneLabel:"Annuler",onDone:()=>{}});o.querySelector("#keep-existing").addEventListener("click",()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),Q("Liaison annulée")},280)}),o.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(c=>c!==i.id),e.parcelIds=[...e.parcelIds,i.id],s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),Q(`Lié à ${i.name}`),l()},280)})}function Ri(e,i={}){const t=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",he);const l=Object.fromEntries(ks.map(o=>[o.id,o]));function n(){var d;const o=t.querySelector("#sjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(v=>v.linkedType==="sensor"&&v.linkedId===e.id).map((v,$)=>({id:`dash-${$}`,type:"note",date:v.date,texte:v.text,user:v.auteur,_fromDashboard:!0})),c=[...ai(e.id),...s].sort((v,$)=>$.date.localeCompare(v.date)),p=v=>{const[$,a,u]=v.split("-");return`${u}/${a}/${$}`};let r=`
      <div style="padding:12px 16px 8px">
        <button class="m-btn m-btn--primary" id="sjrn-add-btn">
          <i class="bi bi-plus-circle-fill"></i> Ajouter une opération de maintenance
        </button>
      </div>
    `;c.length===0?r+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(r+='<div class="m-jrn-timeline">',c.forEach((v,$)=>{const a=l[v.type]||{label:v.type,icon:"bi-circle",color:"#8e8e93"},u=$===c.length-1,b=!!v._fromDashboard;r+=`
          <div class="m-jrn-entry" data-id="${v.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${a.color}18;color:${a.color};border-color:${a.color}40">
                <i class="bi ${a.icon}"></i>
              </div>
              ${u?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${p(v.date)}</span>
                <span style="font-size:12px;font-weight:600;color:${a.color}">${a.label}</span>
                ${b?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${v.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${v.texte?`<div class="m-jrn-texte">${v.texte}</div>`:""}
              ${v.user?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${v.user}${wa(v.role)}</div>`:""}
            </div>
          </div>`}),r+="</div>"),o.innerHTML=r,(d=o.querySelector("#sjrn-add-btn"))==null||d.addEventListener("click",()=>Oi(e.id,n)),o.querySelectorAll(".m-jrn-del").forEach(v=>{v.addEventListener("click",()=>{const $=parseInt(v.dataset.id);Cs(e.id,ai(e.id).filter(a=>a.id!==$)),n()})})}n(),i.openForm&&Oi(e.id,n)}function wa(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}function Oi(e,i){const t=new Date().toISOString().slice(0,10),l=document.createElement("div");l.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${ks.map(n=>`<option value="${n.id}">${n.label}</option>`).join("")}
        </select>
      </div>
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="sjf-date" value="${t}">
      </div>
      <div>
        <div class="m-form-label">Intervenant</div>
        <input type="text" class="m-sheet-input" id="sjf-user" value="Jean Dupont">
      </div>
      <div>
        <div class="m-form-label">Note</div>
        <textarea class="m-sheet-input" id="sjf-texte" placeholder="Observations éventuelles…" style="resize:none;min-height:72px"></textarea>
      </div>
    </div>`,be({title:"Opération de maintenance",body:l,doneLabel:"Enregistrer",onDone:()=>{const n=l.querySelector("#sjf-type").value,o=l.querySelector("#sjf-date").value||t,s=l.querySelector("#sjf-user").value.trim()||"Jean Dupont",c=localStorage.getItem("menuRole")==="admin-reseau"?"conseiller":"membre",p=l.querySelector("#sjf-texte").value.trim();Cs(e,[{id:Date.now(),type:n,date:o,user:s,role:c,texte:p},...ai(e)]),i()}}),setTimeout(()=>{var n;return(n=l.querySelector("#sjf-texte"))==null?void 0:n.focus()},350)}const At=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:ni},Symbol.toStringTag,{value:"Module"})),rt=100,Ni=1,Vt=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Sa={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Ea={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function wt(e,i){return(Ea[e]||[]).includes(i)}function ka(e){return Sa[e]||e}function Ca(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const St=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function La(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*l)/255>.5?"#000000":"#ffffff"}function Vi(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"pothydr":return i<80?"#E2EAC7":i<150?"#A6C157":"#7D9537";case"teneur":return i<15?"#F7D2A1":i<30?"#ED9A2C":"#BC7210";case"temp_sol":return i<8?"#D9C6BF":i<18?"#795548":"#484646";case"temp_sche":return i<0?"#9DECDF":i<10?"#23B19B":"#177365";case"temp_hum":return i<0?"#D2DEFA":i<10?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function Aa(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Ma(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const l=i==="admin",n=ge.filter(E=>E.id!==rt),o=Object.fromEntries(ce.map(E=>[E.id,E])),s=Object.fromEntries(ge.map(E=>[E.id,E]));let c=null,p=null;const r={};let d="carte",v="pluie",$="7 derniers jours",a="all";function u(E){const y=`${E}-${v}-${$}`;return y in r||(r[y]=Aa(v)),r[y]}function b(){if(l){if(a==="anomalies")return ne.filter(q=>q.event&&(Array.isArray(q.event)?q.event.length>0:!0));if(a==="all")return ne;if(a===String(rt)){const q=new Set(ce.filter(j=>j.orgId===rt).map(j=>j.id));return ne.filter(j=>j.parcelIds.some(L=>q.has(L)))}const C=new Set(ce.filter(q=>String(q.orgId)===a).map(q=>q.id));return ne.filter(q=>q.parcelIds.some(j=>C.has(j)))}const E=new Set(ce.filter(C=>C.orgId===Ni).map(C=>C.id)),y=ne.filter(C=>C.parcelIds.some(q=>E.has(q))),I=ne.filter(C=>!C.parcelIds.some(q=>E.has(q))&&Vt.includes(C.model));return a==="mine"?y:a==="network"?I:[...y,...I]}function m(E){const y=E.parcelIds.length?o[E.parcelIds[0]]:null;if(!y)return null;const I=(E.id*7919%1e3-500)/1e6,C=(E.id*6271%1e3-500)/1e6;return{lat:y.lat+I,lng:y.lng+C,name:y.name}}function g(E){var I,C;const y=E.parcelIds.length?o[E.parcelIds[0]]:null;return(y?(I=s[y.orgId])==null?void 0:I.ville:null)||((C=s[E.orgId])==null?void 0:C.ville)||null}function h(){if(c){try{c.remove()}catch{}c=null,p=null}}function w(){h();const E=St.find(L=>L.id===v)||St[0],y=b();let I;const C=ne.some(L=>L.event&&(Array.isArray(L.event)?L.event.length>0:!0));if(l)I=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${a==="all"?" selected":""}>Toutes les organisations</option>
            ${C?`<option value="anomalies"${a==="anomalies"?" selected":""}>⚠ Anomalies capteurs</option>`:""}
            <option value="${rt}"${a===String(rt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
            ${n.map(L=>`<option value="${L.id}"${a===String(L.id)?" selected":""}>${L.name}</option>`).join("")}
          </select>
        </div>`;else{const L=ge.find(f=>f.id===Ni);I=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${a==="all"?" selected":""}>Tous les capteurs du réseau</option>
            <option value="mine"${a==="mine"?" selected":""}>${(L==null?void 0:L.name)||"Mon exploitation"} uniquement</option>
          </select>
        </div>`}const q=[...y].sort((L,f)=>{const k=wt(L.model,v),T=wt(f.model,v);return k&&!T?-1:!k&&T?1:k?u(f.id)-u(L.id):0}),j=q.length?`<div class="m-plain-list">${q.map(L=>{const f=Vt.includes(L.model),k=wt(L.model,v),T=k?u(L.id):null,S=k?`<span class="m-sensor-val" style="color:${Vi(v,T)}">${T} ${E.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>',A=L.event&&(Array.isArray(L.event)?L.event.length>0:!0);return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${L.id}">
              <div class="m-sensor-icon" style="position:relative;background:${f?"#0172A420":"#5b8dd920"};color:${f?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
                ${A?'<span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff"></span>':""}
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${ka(L.model)} - ${L.model}</span>
                <span class="m-sensor-sub">${[g(L),Ca(L)].filter(Boolean).join(" - ")}</span>
                ${A?`<span style="font-size:11px;color:#ff3b30;font-weight:500"><i class="bi bi-exclamation-triangle-fill"></i> ${Array.isArray(L.event)?L.event[0]:L.event}</span>`:""}
              </div>
              ${S}
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';t.innerHTML=`
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
            ${St.map(L=>`<option value="${L.id}"${L.id===v?" selected":""}>${L.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${E.aggs.map(L=>`<option${L===$?" selected":""}>${L}</option>`).join("")}
          </select>
        </div>
        ${I}
      </div>
      ${d==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${j}</div>`}`,M(),d==="carte"&&x(y,E)}function x(E,y){const I=window.L;I&&setTimeout(()=>{const C=t.querySelector("#sensor-map");if(!C)return;c=I.map(C,{zoomControl:!1,attributionControl:!1}),I.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(c);const q=[];E.forEach(j=>{var A;const L=m(j);if(!L)return;const f=wt(j.model,v),k=Vt.includes(j.model),T=f?Vi(v,u(j.id)):k?"#0172A4":"#5b8dd9",S=I.circleMarker([L.lat,L.lng],{radius:f?10:7,color:"#fff",weight:2,fillColor:T,fillOpacity:f?.95:.45}).addTo(c);if(f){S.bindTooltip(`${u(j.id)} ${y.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const P=_=>{if(!_)return;const B=La(T);_.style.setProperty("background",T,"important"),_.style.setProperty("color",B,"important"),_.style.setProperty("border-color",B,"important"),_.style.setProperty("box-shadow","none","important")},D=(A=S.getTooltip())==null?void 0:A.getElement();D&&P(D),S.on("tooltipopen",_=>P(_.tooltip.getElement()))}S.on("click",()=>ni(j,"donnees",i)),j.event&&(!Array.isArray(j.event)||j.event.length>0)&&I.marker([L.lat,L.lng],{icon:I.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(c),q.push([L.lat,L.lng])}),q.length&&(p=q,c.fitBounds(q,{padding:[32,32]})),c.invalidateSize()},0)}window.addEventListener("m-tab-change",E=>{E.detail==="capteurs"&&(w(),d==="carte"&&c&&setTimeout(()=>{c.invalidateSize(),p!=null&&p.length&&c.fitBounds(p,{padding:[32,32]})},50))});function M(){var E,y,I;t.querySelectorAll(".m-view-btn").forEach(C=>C.addEventListener("click",()=>{d=C.dataset.view,w()})),(E=t.querySelector("#metric-sel"))==null||E.addEventListener("change",C=>{var q;v=C.target.value,$=((q=St.find(j=>j.id===v))==null?void 0:q.defaultAgg)||"",w()}),(y=t.querySelector("#agg-sel"))==null||y.addEventListener("change",C=>{$=C.target.value,w()}),(I=t.querySelector("#org-filter"))==null||I.addEventListener("change",C=>{a=C.target.value,w()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(C=>{C.addEventListener("click",()=>{const q=ne.find(j=>j.id===+C.dataset.sensorId);q&&ni(q,"donnees",i)})})}w(),window.addEventListener("weenat-sensor-renamed",()=>{d==="liste"&&w()})}const Ta=["Essentiel","Plus","Expert"],Ia=["Administrateur","Agent","Lecteur"],Wi=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function qa(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function Pa(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function Ji({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function Et(e){if(!e)return"—";const[i,t,l]=e.split("-");return`${l}/${t}/${i}`}function Gi(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let l=11;l>=0;l--){const n=new Date(i.getFullYear(),i.getMonth()-l,1),o=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),c=l>0?l===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${o}-${s}`,dateEmission:`${o}-${s}-01`,montant:n.getMonth()===11?1980:t[l%t.length],statut:c})}return e.reverse()}function ja(e,i){var L;if(!e)return{};const t=i==="admin",l=i==="new-member-admin"||i==="new-member-agent"||i==="new-member-reader",n=i!=="new-member-reader",o=t?[{id:"100",name:"Breiz'Agri Conseil"},{id:"42",name:"Exploitation Dupont"}]:l?[]:[{id:"1",name:"Ferme du Bocage"},{id:"dutilleul",name:"Exploitation Dutilleul"}];let s=((L=o[0])==null?void 0:L.id)??null;const c=ge.find(f=>f.id===(t?jt:di));if(!c)return{};const r=(t?Dt.filter(f=>{var k;return!((k=f.orgIds)!=null&&k.length)||f.orgIds.includes(jt)}):Dt.filter(f=>{var k;return(k=f.orgIds)==null?void 0:k.includes(di)})).filter(f=>f.statut!=="inactif").map(f=>({...f})),d=ge.filter(f=>f.id!==jt&&f.statut!=="inactif").length,v=Pa(c.adresse||""),$={rue:"",cp:"",ville:""},a={name:c.name,siret:c.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:v,adresseLivrai:$,pays:"France",markerLat:c.lat||48.117,markerLng:c.lng||-1.678,plan:c.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":c.codeAdherent||"CTR-2022-00418",dateAdhesion:c.dateAdhesion||"2022-03-15",licencesMembres:t?Dt.length:3,licencesAdherents:t?d:null,licencesIntegrations:t?27:2}};let u=null,b=null;function m(){if(!b)return;const f=e.querySelector(`#${b}`);if(!f)return;if(u){try{u.remove()}catch{}u=null}const k=window.L;k&&(u=k.map(f,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),k.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(u),u.setView([a.markerLat,a.markerLng],14),k.marker([a.markerLat,a.markerLng],{draggable:!1}).addTo(u),setTimeout(()=>u==null?void 0:u.invalidateSize(),50))}function g(){if(b=`expl-map-${Math.random().toString(36).slice(2,8)}`,u){try{u.remove()}catch{}u=null}const f=Ji(a.adresseFactu)||"—",k=Ji(a.adresseLivrai),T=t?Gi():[],S=T.slice(0,3),A=T.length>3,P=r.slice(0,3),D=r.length>3;function _(B,F){const U=B.statut==="payée"?"#30d158":"#ff9f0a",ee=B.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${F?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${B.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${B.numero}</span>
            <span class="m-list-row-sub">${Et(B.dateEmission)} · ${B.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${U};flex-shrink:0;margin-right:4px">${ee}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}e.innerHTML=`
      ${o.length>1?`
      <div style="padding:12px 16px 4px">
        <select id="org-selector" style="width:100%;padding:10px 14px;border-radius:10px;border:1.5px solid #e5e5ea;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e;cursor:pointer">
          ${o.map(B=>`<option value="${B.id}"${B.id===s?" selected":""}>${B.name}</option>`).join("")}
        </select>
      </div>
      `:""}
      <div class="m-list-section-header" style="margin-top:16px">Exploitation</div>
      <div class="m-list">
        <div class="m-list-row" data-action="name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${a.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="metier" style="align-items:flex-start;padding-top:12px;padding-bottom:12px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Métiers</span>
            ${a.metiers.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">${a.metiers.map(B=>`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:4px;padding:2px 8px;font-size:12px;font-weight:500">${B}</span>`).join("")}</div>`:'<div style="font-size:13px;color:#8e8e93;margin-top:4px">—</div>'}
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Adresses</div>
      <div class="m-list">
        <div class="m-list-row" data-action="adresse-factu">
          <span class="m-list-row-label">Facturation</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${f}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${k||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="pays">
          <span class="m-list-row-label">Pays</span>
          <span class="m-list-row-value">${a.pays}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="siret">
          <span class="m-list-row-label">SIRET</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:12px">${a.siret||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation</div>
      <div id="${b}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${a.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Et(a.contrat.dateAdhesion)}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Licences membres</span>
          <span class="m-list-row-value">${a.contrat.licencesMembres}</span>
        </div>
        ${a.contrat.licencesAdherents!=null?`
        <div class="m-list-row">
          <span class="m-list-row-label">Adhérents actifs</span>
          <span class="m-list-row-value">${a.contrat.licencesAdherents}</span>
        </div>`:""}
        <div class="m-list-row">
          <span class="m-list-row-label">Licences intégrations</span>
          <span class="m-list-row-value">${a.contrat.licencesIntegrations}</span>
        </div>
        <div class="m-list-row m-list-row--last" ${t?'data-action="plan"':""}>
          <span class="m-list-row-label">Abonnement</span>
          <span class="m-list-row-value" style="color:#0172A4;font-weight:600">${a.plan}</span>
          ${t?'<i class="bi bi-chevron-right m-list-chevron"></i>':""}
        </div>
      </div>

      ${t?`
      <div class="m-list-section-header">Factures</div>
      <div class="m-list">
        ${S.map((B,F)=>_(B,!A&&F===S.length-1)).join("")}
        ${A?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${T.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${r.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${r.length?[...P.map((B,F)=>`
            <div class="m-list-row${!D&&F===P.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${F}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${B.prenom} ${B.nom}</span>
                <span class="m-list-row-sub">${B.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),D?`
            <div class="m-list-row m-list-row--last m-tappable" data-action="voir-membres">
              <span class="m-list-row-label" style="color:#007aff">Voir tous les membres</span>
              <span class="m-list-row-value" style="color:#8e8e93">${r.length}</span>
              <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
            </div>`:""].join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun membre</span></div>'}
      </div>
      <div style="padding:8px 16px 4px">
        <button id="btn-ajouter-membre" class="m-btn m-btn--outline" style="margin-bottom:20px">Ajouter un membre</button>
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
          <button id="btn-quitter-reseau" class="m-btn m-btn--danger" style="margin-bottom:20px">Quitter le réseau</button>
        </div>
      </div>

      <div id="reseau-panel-independante" style="display:none">
        <div style="margin:4px 16px 14px;background:#f2f2f7;border-radius:12px;padding:14px">
          <ul style="margin:0 0 10px;padding:0;list-style:none;display:flex;flex-direction:column;gap:9px">
            <li style="display:flex;gap:9px;font-size:13px;color:#3a3a3c;line-height:1.4"><i class="bi bi-check-circle-fill" style="color:#0172A4;flex-shrink:0;margin-top:1px"></i>Accédez aux capteurs partagés par votre réseau</li>
            <li style="display:flex;gap:9px;font-size:13px;color:#3a3a3c;line-height:1.4"><i class="bi bi-check-circle-fill" style="color:#0172A4;flex-shrink:0;margin-top:1px"></i>Bénéficiez de conseils sur l'installation des capteurs et l'utilisation de l'app</li>
            <li style="display:flex;gap:9px;font-size:13px;color:#3a3a3c;line-height:1.4"><i class="bi bi-check-circle-fill" style="color:#0172A4;flex-shrink:0;margin-top:1px"></i>Votre conseiller peut suivre l'état de vos parcelles et capteurs, avec votre accord</li>
          </ul>
          <p style="margin:0;font-size:12px;color:#636366;line-height:1.5;border-top:.5px solid rgba(0,0,0,.1);padding-top:10px">Contrairement à d'autres plateformes, vous ne partagez des données qu'avec les autres exploitations adhérentes du réseau, pas n'importe qui.</p>
        </div>
        <div style="padding:0 16px 8px;font-size:13px;color:#8e8e93">Les 5 réseaux les plus proches de votre exploitation</div>
        <div class="m-list">
          ${Wi.slice(0,5).map((B,F)=>`
            <div class="m-list-row${F===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${qa(B.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${B.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${B.distance} km · ${B.capteurs} capteurs · ${B.parcelles} parcelles</div>
                <button class="m-join-net-btn" data-net-idx="${F}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
              </div>
            </div>`).join("")}
        </div>
      </div>
      `}
      ${l?`
      <div style="display:flex;gap:0;margin:16px 16px 12px;background:#e5e5ea;border-radius:9px;padding:2px">
        <button class="m-exploit-tab m-exploit-tab--active" data-exploit-tab="adherent" style="flex:1;border:none;border-radius:7px;padding:6px 0;font-size:13px;font-weight:500;cursor:pointer;background:#fff;color:#000;font-family:inherit;transition:background .15s,color .15s">Adhérent</button>
        <button class="m-exploit-tab" data-exploit-tab="membre" style="flex:1;border:none;border-radius:7px;padding:6px 0;font-size:13px;font-weight:500;cursor:pointer;background:transparent;color:#8e8e93;font-family:inherit;transition:background .15s,color .15s">Membre</button>
      </div>
      <div id="default-exploit-panel" style="display:none">
        <div class="m-list-section-header">L'exploitation créée par défaut à la création de mon compte</div>
        <div class="m-list">
          <div class="m-list-row">
            <span class="m-list-row-label">Nom</span>
            <span class="m-list-row-value">Exploitation Jourdain</span>
          </div>
          <div class="m-list-row">
            <span class="m-list-row-label">Abonnement</span>
            <span class="m-list-row-value">Weenat Essential</span>
          </div>
          <div class="m-list-row m-list-row--last">
            <span class="m-list-row-label">Créée le</span>
            <span class="m-list-row-value">${Et("2026-06-08")}</span>
          </div>
        </div>
        <div style="padding:8px 20px 0">
          <button id="btn-use-default-exploit" class="m-btn m-btn--outline" style="margin-bottom:20px">Utiliser cette exploitation</button>
        </div>
      </div>
      `:""}
      <div style="height:32px"></div>`,h()}function h(){var f,k,T,S;(f=e.querySelector("#org-selector"))==null||f.addEventListener("change",A=>{s=A.target.value;const P=o.find(D=>D.id===s);P&&(a.name=P.name,g())}),e.querySelectorAll(".m-list-row[data-action]").forEach(A=>{A.addEventListener("click",()=>{if(n)switch(A.dataset.action){case"name":w("Nom de l'exploitation",a.name,P=>{a.name=P,g()});break;case"siret":w("SIRET",a.siret,P=>{a.siret=P,g()});break;case"metier":M();break;case"adresse-factu":x("Adresse de facturation",a.adresseFactu,P=>{a.adresseFactu=P,g()});break;case"adresse-livrai":x("Adresse de livraison",a.adresseLivrai,P=>{a.adresseLivrai=P,g()});break;case"pays":w("Pays",a.pays,P=>{a.pays=P,g()});break;case"plan":E("Abonnement",Ta,a.plan,P=>{a.plan=P,g()});break;case"facture":Q(`PDF ${A.dataset.factureId} téléchargé`);break;case"voir-factures":C();break;case"voir-membres":I();break}})}),e.querySelectorAll("[data-member-idx]").forEach(A=>{A.addEventListener("click",()=>y(+A.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(A=>{A.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach(D=>{const _=D===A;D.style.background=_?"#fff":"transparent",D.style.color=_?"#000":"#8e8e93"});const P=A.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=P==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=P==="independante"?"":"none"})}),(k=e.querySelector("#btn-ajouter-membre"))==null||k.addEventListener("click",q),(T=e.querySelector("#btn-quitter-reseau"))==null||T.addEventListener("click",()=>{const A=document.createElement("div");A.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,be({title:"Quitter le réseau ?",body:A,doneLabel:"Confirmer",onDone:()=>Q("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(A=>{A.addEventListener("click",()=>{const P=Wi[+A.dataset.netIdx];Q(`Demande envoyée à ${P.name}`)})}),e.querySelectorAll(".m-exploit-tab").forEach(A=>{A.addEventListener("click",()=>{e.querySelectorAll(".m-exploit-tab").forEach(D=>{const _=D===A;D.style.background=_?"#fff":"transparent",D.style.color=_?"#000":"#8e8e93"});const P=e.querySelector("#default-exploit-panel");P&&(P.style.display=A.dataset.exploitTab==="membre"?"":"none")})}),(S=e.querySelector("#btn-use-default-exploit"))==null||S.addEventListener("click",()=>{Q("Exploitation Jourdain sélectionnée")})}function w(f,k,T){const S=document.createElement("div");S.innerHTML=`<input class="m-sheet-input" type="text" value="${(k||"").replace(/"/g,"&quot;")}" placeholder="${f}">`;const A=S.querySelector("input");be({title:f,body:S,doneLabel:"Enregistrer",onDone:()=>{const P=A.value.trim();P&&(T(P),Q("Enregistré"))}}),setTimeout(()=>A.focus(),300)}function x(f,k,T){const S=document.createElement("div");S.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(k.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${k.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(k.ville||"").replace(/"/g,"&quot;")}">`,be({title:f,body:S,doneLabel:"Enregistrer",onDone:()=>{T({rue:S.querySelector("#f-rue").value.trim(),cp:S.querySelector("#f-cp").value.trim(),ville:S.querySelector("#f-ville").value.trim()}),Q("Enregistré")}}),setTimeout(()=>S.querySelector("#f-rue").focus(),300)}function M(){const f=new Set(a.metiers),k=document.createElement("div"),T=()=>{k.innerHTML=Ki.map(S=>`
        <div class="m-sheet-option${f.has(S)?" m-sheet-option--active":""}" data-m="${S}" style="justify-content:space-between">
          <span>${S}</span>
          ${f.has(S)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),k.querySelectorAll("[data-m]").forEach(S=>{S.addEventListener("click",()=>{const A=S.dataset.m;f.has(A)?f.delete(A):f.add(A),T()})})};T(),be({title:"Métiers",body:k,doneLabel:"Valider",onDone:()=>{a.metiers=[...f],g()}})}function E(f,k,T,S){const A=document.createElement("div");A.innerHTML=k.map((D,_)=>`
      <div class="m-sheet-option${D===T?" m-sheet-option--active":""}" data-i="${_}">
        <span>${D}</span>${D===T?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const P=be({title:f,body:A,doneLabel:"Fermer",onDone:()=>{}});A.querySelectorAll(".m-sheet-option").forEach(D=>{D.addEventListener("click",()=>{S(k[+D.dataset.i]),P.classList.remove("m-sheet-overlay--show"),setTimeout(()=>P.remove(),280),Q("Enregistré")})})}function y(f,k){const T=r[f];if(!T)return;const S=document.createElement("div");S.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${T.role}</span></div>
        ${T.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${T.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${T.prenom} ${T.nom}</a>
      </div>`;const A=be({title:`${T.prenom} ${T.nom}`,body:S,doneLabel:"Fermer",onDone:()=>{}});S.querySelector("#mem-delete").addEventListener("click",()=>{r.splice(f,1),A.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{A.remove(),g(),Q("Membre retiré"),k==null||k()},280)})}function I(){let f="",T=20;function S(){if(!f)return r;const _=f.toLowerCase();return r.filter(B=>`${B.prenom} ${B.nom}`.toLowerCase().includes(_)||(B.email||"").toLowerCase().includes(_)||(B.role||"").toLowerCase().includes(_))}const A=xe(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),P=A.querySelector("#mbr-list-content");function D(){var U;const _=S(),B=_.slice(0,T),F=_.length-B.length;P.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${_.length} membre${_.length!==1?"s":""}${f?" trouvé"+(_.length!==1?"s":""):" actif"+(_.length!==1?"s":"")}</div>
        <div class="m-list">
          ${B.length?B.map((ee,fe)=>`<div class="m-list-row${fe===B.length-1&&F===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${r.indexOf(ee)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${ee.prenom} ${ee.nom}</span>
                <span class="m-list-row-sub">${ee.role}${ee.email?" · "+ee.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${F>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${F} de plus</span>
            </div>`:""}
          ${_.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,P.querySelectorAll("[data-mbr-idx]").forEach(ee=>{ee.addEventListener("click",()=>y(+ee.dataset.mbrIdx,D))}),(U=P.querySelector("#mbr-load-more"))==null||U.addEventListener("click",()=>{T+=20,D()})}A.querySelector(".m-detail-back").addEventListener("click",he),A.querySelector("#mbr-invite-btn").addEventListener("click",q),A.querySelector("#mbr-search").addEventListener("input",_=>{f=_.target.value,T=20,D()}),D()}function C(){const f=Gi();let k="";function T(){if(!k)return f;const D=k.toLowerCase();return f.filter(_=>_.numero.toLowerCase().includes(D)||_.statut.toLowerCase().includes(D)||String(_.montant).includes(D))}const S=xe(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),A=S.querySelector("#fac-list-content");function P(){const D=T();A.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${D.length} facture${D.length!==1?"s":""}</div>
        <div class="m-list">
          ${D.length?D.map((_,B)=>{const F=_.statut==="payée"?"#30d158":"#ff9f0a",U=_.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${B===D.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${_.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${_.numero}</span>
                <span class="m-list-row-sub">${Et(_.dateEmission)} · ${_.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${F};flex-shrink:0;margin-right:4px">${U}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,A.querySelectorAll("[data-fac-id]").forEach(_=>{_.addEventListener("click",()=>Q(`PDF ${_.dataset.facId} téléchargé`))})}S.querySelector(".m-detail-back").addEventListener("click",he),S.querySelector("#fac-search").addEventListener("input",D=>{k=D.target.value,P()}),P()}function q(){const f=document.createElement("div");f.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${Ia.map(k=>`<option>${k}</option>`).join("")}
      </select>`,be({title:"Ajouter un membre",body:f,doneLabel:"Inviter",onDone:()=>{f.querySelector("#inv-email").value.trim()&&Q("Invitation envoyée")}}),setTimeout(()=>f.querySelector("#inv-email").focus(),300)}g();function j(){requestAnimationFrame(()=>setTimeout(m,100))}return{onAdd:null,refresh:j}}const Da=100,za=["Essentiel","Plus","Expert"],_a={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function Wt(e){return _a[e]||{label:e||"—",color:"#8e8e93"}}function Ha(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=ge.filter(a=>a.id!==Da&&a.statut!=="inactif").map(a=>({...a})),l={...De,siege:{...De.siege},antennes:De.antennes.map(a=>({...a}))},n={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function o(a,u,b,m){return a.slice(u,b).map((g,h)=>{const w=u+h,x=Wt(g.statut),M=g.statut==="demande en attente";return`
        <div class="m-list-row${w===m?" m-list-row--last":""} m-tappable" data-org-idx="${w}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${g.proprietaire||g.name}</span>
            <span class="m-list-row-sub">${g.name} · ${g.plan||"—"}</span>
          </div>
          ${M?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${w}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${w}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${x.color};flex-shrink:0;margin-right:4px">${x.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function s(){let a="",b=20;function m(){if(!a)return t;const x=a.toLowerCase();return t.filter(M=>(M.proprietaire||M.name||"").toLowerCase().includes(x)||(M.name||"").toLowerCase().includes(x)||(M.email||"").toLowerCase().includes(x)||(M.codeAdherent||"").toLowerCase().includes(x))}const g=xe(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),h=g.querySelector("#adh-list-content");function w(){var I;const x=m(),M=x.slice(0,b),E=x.length-M.length,y=x.filter(C=>C.statut==="actif"||C.statut==="actif en essai").length;h.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${a?x.length+" résultat"+(x.length!==1?"s":""):y+" actif"+(y!==1?"s":"")+" · "+x.length+" total"}</div>
        <div class="m-list">
          ${M.length?M.map((C,q)=>{const j=t.indexOf(C),L=Wt(C.statut),f=C.statut==="demande en attente";return`
              <div class="m-list-row${q===M.length-1&&E===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${j}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${C.proprietaire||C.name}</span>
                  <span class="m-list-row-sub">${C.name} · ${C.plan||"—"}</span>
                </div>
                ${f?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${j}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${j}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${L.color};flex-shrink:0;margin-right:4px">${L.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${E>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${E} de plus</span>
            </div>`:""}
        </div>`,h.querySelectorAll("[data-lp-org-idx]").forEach(C=>{C.addEventListener("click",q=>{q.target.closest("[data-adh-action]")||v(t[+C.dataset.lpOrgIdx],+C.dataset.lpOrgIdx,w)})}),h.querySelectorAll("[data-adh-action]").forEach(C=>{C.addEventListener("click",q=>{q.stopPropagation();const j=+C.dataset.lpAdhIdx,L=C.dataset.adhAction,f=t[j];f&&(L==="valider"?(f.statut="actif",c(),w(),Q(`${f.proprietaire||f.name} validé`)):(t.splice(j,1),c(),w(),Q("Demande rejetée")))})}),(I=h.querySelector("#adh-load-more"))==null||I.addEventListener("click",()=>{b+=20,w()})}g.querySelector(".m-detail-back").addEventListener("click",he),g.querySelector("#adh-invite-btn").addEventListener("click",$),g.querySelector("#adh-search").addEventListener("input",x=>{a=x.target.value,b=20,w()}),w()}function c(){var h;const a=t.filter(w=>w.statut!=="inactif"),u=`${l.siege.adresse}, ${l.siege.codePostal} ${l.siege.ville}`;e.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Réseau</div>
      <div class="m-list">
        <div class="m-list-row" data-action="net-nom">
          <span class="m-list-row-label">Nom du réseau</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:13px">${l.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="net-siege">
          <span class="m-list-row-label">Siège</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:12px">${u}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="net-antennes" style="align-items:flex-start;padding-top:10px;padding-bottom:10px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Antennes</span>
            <span class="m-web-only-hint">Modifiable sur la version web</span>
          </div>
          <span class="m-list-row-value" style="color:#8e8e93;flex-shrink:0">${l.antennes.length} antenne${l.antennes.length>1?"s":""}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-footer">Description, logo et contacts modifiables sur la version web</div>

      <div class="m-list-section-header">Partage entre les adhérents</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs météo</span>
          <label class="m-toggle"><input type="checkbox" id="tog-meteo"${n.partageMeteo?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs irrigation</span>
          <label class="m-toggle"><input type="checkbox" id="tog-sol"${n.partageSol?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Stations météo virtuelles</span>
          <label class="m-toggle"><input type="checkbox" id="tog-irrigation"${n.partageIrrigation?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
      </div>

      <div class="m-list-section-header">Adhérents — ${a.length} actifs</div>
      <div class="m-list">
        ${o(t,0,Math.min(5,t.length),t.length>5?-1:t.length-1)}
        ${t.length>5?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${t.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(w=>{w.addEventListener("click",x=>{x.target.closest("[data-adh-action]")||v(t[+w.dataset.orgIdx],+w.dataset.orgIdx)})}),(h=e.querySelector('[data-action="voir-adherents"]'))==null||h.addEventListener("click",s),e.querySelectorAll("[data-adh-action]").forEach(w=>{w.addEventListener("click",x=>{x.stopPropagation();const M=+w.dataset.adhIdx,E=w.dataset.adhAction,y=t[M];y&&(E==="valider"?(y.statut="actif",c(),Q(`${y.proprietaire||y.name} validé`)):(t.splice(M,1),c(),Q("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(w=>{w.addEventListener("click",()=>{switch(w.dataset.action){case"net-nom":p("Nom du réseau",l.nom,x=>{l.nom=x,c()});break;case"net-siege":r();break;case"net-antennes":d();break}})});const b=e.querySelector("#tog-meteo"),m=e.querySelector("#tog-sol"),g=e.querySelector("#tog-irrigation");b==null||b.addEventListener("change",()=>{n.partageMeteo=b.checked,Q("Préférence enregistrée")}),m==null||m.addEventListener("change",()=>{n.partageSol=m.checked,Q("Préférence enregistrée")}),g==null||g.addEventListener("change",()=>{n.partageIrrigation=g.checked,Q("Préférence enregistrée")})}function p(a,u,b){const m=document.createElement("div");m.innerHTML=`<input class="m-sheet-input" type="text" value="${(u||"").replace(/"/g,"&quot;")}" placeholder="${a}">`;const g=m.querySelector("input");be({title:a,body:m,doneLabel:"Enregistrer",onDone:()=>{const h=g.value.trim();h&&(b(h),Q("Enregistré"))}}),setTimeout(()=>g.focus(),300)}function r(){const a=document.createElement("div");a.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${l.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${l.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${l.siege.ville.replace(/"/g,"&quot;")}">`,be({title:"Adresse du siège",body:a,doneLabel:"Enregistrer",onDone:()=>{l.siege.adresse=a.querySelector("#s-rue").value.trim(),l.siege.codePostal=a.querySelector("#s-cp").value.trim(),l.siege.ville=a.querySelector("#s-ville").value.trim(),c(),Q("Enregistré")}}),setTimeout(()=>a.querySelector("#s-rue").focus(),300)}function d(){const a=document.createElement("div");(()=>{a.innerHTML=l.antennes.map((b,m)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${b.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${b.adresse}, ${b.codePostal} ${b.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${b.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),be({title:"Antennes",body:a,doneLabel:"Fermer",onDone:()=>{}})}function v(a,u,b){var M,E;const m=Wt(a.statut),g=a.statut==="invitation en attente",h=`https://app.weenat.com/invitation?code=${a.codeAdherent||"ADZ-XXX"}`,w=document.createElement("div");w.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${a.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${a.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${a.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${a.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${ce.filter(y=>y.orgId===a.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const y=new Set(ce.filter(I=>I.orgId===a.id).map(I=>I.id));return ne.filter(I=>y.has(I.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${m.color};font-weight:600">${m.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${a.dateAdhesion?a.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${g?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const x=be({title:a.name,body:w,doneLabel:"Fermer",onDone:()=>{}});(M=w.querySelector("#lnk-copy"))==null||M.addEventListener("click",()=>{var y;(y=navigator.clipboard)==null||y.writeText(h).catch(()=>{}),Q("Lien copié !")}),(E=w.querySelector("#lnk-cancel"))==null||E.addEventListener("click",()=>{a.statut="inactif",x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{x.remove(),c(),b==null||b(),Q("Invitation annulée")},280)}),w.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(u,1),x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{x.remove(),c(),b==null||b(),Q("Adhérent supprimé")},280)})}function $(){const a=document.createElement("div");a.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${za.map(u=>`<option>${u}</option>`).join("")}
      </select>`,be({title:"Inviter un adhérent",body:a,doneLabel:"Envoyer",onDone:()=>{const u=a.querySelector("#adh-email").value.trim(),b=a.querySelector("#adh-code").value.trim();if(!u||!b){Q("Email et code requis");return}t.push({id:Date.now(),name:u,proprietaire:u,email:u,codeAdherent:b,plan:a.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),c(),Q("Invitation envoyée")}}),setTimeout(()=>a.querySelector("#adh-email").focus(),300)}return c(),{onAdd:$}}Yi(ce);const Ba=new URLSearchParams(window.location.search),Jt=Ba.get("role"),Ls=new Set(["new","new-adherent","new-member-admin","new-member-agent","new-member-reader"]),Le=Jt==="adherent"?"adherent":Ls.has(Jt)?Jt:"admin";function As(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}As();setInterval(As,1e4);const Oe=["parcelles","capteurs","dashboard","alertes","parametres"];let Mt="parcelles";function We(e){var i,t;!Oe.includes(e)||e===Mt||(Mt=e,document.querySelectorAll(".m-screen").forEach(l=>l.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(l=>l.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function Fa(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;ui()>0&&js()?Fa(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),We(t)}):(ui()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),We(t))});let Pe=null,bt=null;const Ms=50,yt=document.getElementById("screen-stack");yt.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){Pe=null;return}Pe=e.clientX,bt=e.clientY});yt.addEventListener("mouseup",e=>{if(Pe===null)return;const i=e.clientX-Pe,t=e.clientY-bt;if(Math.abs(i)>Ms&&Math.abs(i)>Math.abs(t)){const l=Oe.indexOf(Mt);i<0&&l<Oe.length-1&&We(Oe[l+1]),i>0&&l>0&&We(Oe[l-1])}Pe=null,bt=null});yt.addEventListener("mouseleave",()=>{Pe=null});yt.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){Pe=null;return}Pe=e.touches[0].clientX,bt=e.touches[0].clientY},{passive:!0});yt.addEventListener("touchend",e=>{if(Pe===null)return;const i=e.changedTouches[0].clientX-Pe,t=e.changedTouches[0].clientY-bt;if(Math.abs(i)>Ms&&Math.abs(i)>Math.abs(t)){const l=Oe.indexOf(Mt);i<0&&l<Oe.length-1&&We(Oe[l+1]),i>0&&l>0&&We(Oe[l-1])}Pe=null},{passive:!0});const Ra=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...Le==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],Pt={};function Ts(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=Pt[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var l;return(l=window.showMobileAddPage)==null?void 0:l.call(window)})}function Oa(){var i;const e=document.getElementById("param-segment");e&&(Le==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),Ra.forEach((t,l)=>{const n=document.createElement("button");n.className="m-segment-btn"+(l===0?" active":""),n.textContent=t.label,n.dataset.target=t.id,n.addEventListener("click",()=>{var o,s,c;e.querySelectorAll(".m-segment-btn").forEach(p=>p.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(p=>p.classList.remove("active")),(o=document.getElementById(t.id))==null||o.classList.add("active"),Ts(t.id),(c=(s=Pt[t.id])==null?void 0:s.refresh)==null||c.call(s)}),e.appendChild(n)}))}Oa();Ls.has(Le)&&on(Le,()=>{(Le==="new"||Le==="new-adherent")&&We("dashboard")});zn(document.getElementById("screen-dashboard"),Le);da(document.getElementById("screen-parcelles"),Le);Ma(document.getElementById("screen-capteurs"),Le);Ws(document.getElementById("screen-alertes"),Le);Fs(document.getElementById("param-compte"),Le);Pt["param-exploitation"]=ja(document.getElementById("param-exploitation"),Le);Pt["param-reseau"]=Ha(document.getElementById("param-reseau"),Le);function Na(){var l;const e=Le==="admin",i=document.getElementById("phone-screen");(l=document.getElementById("m-add-modal"))==null||l.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#f2f2f7;flex-shrink:0;border-bottom:.5px solid rgba(0,0,0,.1)">
      <span style="font-size:17px;font-weight:700">Ajouter</span>
      <button id="m-add-close" style="width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.07);border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <div style="overflow-y:auto;flex:1;padding:12px 16px">
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon exploitation</div>
        ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(n=>`
          <button class="m-add-row" data-action="${n.action}" style="display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08);text-align:left">
            <i class="bi ${n.icon}" style="color:#0172A4;width:22px;text-align:center;flex-shrink:0"></i>
            <span>${n.label}</span>
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(n=>{n.addEventListener("click",()=>{var o;t.remove(),(n.dataset.action==="note"||n.dataset.action==="traitement")&&((o=window.openJournalModal)==null||o.call(window,n.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=Na;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});Ts("param-compte");export{he as a,xe as p,be as s};
