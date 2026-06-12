const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-D3iQiqBD.js","assets/sensors-CS05Ml5Z.js","assets/irrigations-C22Dtsoo.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-DHZTuoR0.js","assets/store-BGemiHCf.js","assets/orgs-DnFmvGlp.js","assets/network-YzWdS0n_.js","assets/constants-D_Yu58_o.js","assets/members-CuDabgg3.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as le}from"./plots-DHZTuoR0.js";import{d as at,b as ns,c as Ge}from"./store-BGemiHCf.js";import{s as ne}from"./sensors-CS05Ml5Z.js";import{o as ve}from"./orgs-DnFmvGlp.js";import{n as Be}from"./network-YzWdS0n_.js";import{I as ce,s as Qe,g as Fs}from"./irrigations-C22Dtsoo.js";import{I as Nt,S as yi,M as as,a as mt,E as Rs,A as Ut,b as Ei}from"./constants-D_Yu58_o.js";import{m as Yt}from"./members-CuDabgg3.js";const tt=[];function ye(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),tt.push(t),t}function me(){const e=tt.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function ki(){return tt.length}function Os(){return tt.some(e=>e.dataset.dirty==="true")}function os(){tt.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{tt.forEach(e=>e.remove()),tt.length=0});const Li={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Ns=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Ci=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let Je={};function _e(e){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function it({title:e,body:i,onDone:t,doneLabel:a="OK"}){var l;const n=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${a}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),s()}),o.addEventListener("click",p=>{p.target===o&&s()}),o}function Ai(e,i,t){const a=document.createElement("div");a.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const n=a.querySelector("input");it({title:e,body:a,doneLabel:"Enregistrer",onDone:()=>{t(n.value.trim()),_e("Enregistré")}}),setTimeout(()=>n.focus(),300)}function Mi(e,i,t,a){const n=document.createElement("div");n.innerHTML=i.map((s,l)=>`
    <div class="m-sheet-option${s===t?" m-sheet-option--active":""}" data-i="${l}">
      <span>${s}</span>
      ${s===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const o=it({title:e,body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{a(i[+s.dataset.i]),o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280),_e("Enregistré")})})}function Vs(e,i){const t=document.createElement("div"),a=()=>{var n;t.innerHTML=e.map((o,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${o.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${o.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(o=>{o.addEventListener("input",()=>{e[+o.dataset.i][o.dataset.f]=o.value})}),t.querySelectorAll(".m-sheet-remove").forEach(o=>{o.addEventListener("click",()=>{e.splice(+o.dataset.i,1),a()})}),(n=t.querySelector(".m-sheet-add-phone"))==null||n.addEventListener("click",()=>{e.push({label:"",numero:""}),a()})};a(),it({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),_e("Enregistré")}})}function Ws(e,i,t){const a=document.createElement("div");a.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,a.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var o;(o=navigator.clipboard)==null||o.writeText(e.value).catch(()=>{}),_e("Clé copiée !")});const n=it({title:"Clé API",body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const o=i.findIndex(s=>s.id===e.id);o!==-1&&i.splice(o,1),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{n.remove(),t()},280),_e("Clé supprimée")})}function Js(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function Gs(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");it({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const a=t.value.trim();if(!a){_e("Entrez un nom");return}const n={id:Date.now(),name:a,created:new Date().toLocaleDateString("fr-FR"),value:Js()};e(n),_e("Clé générée")}}),setTimeout(()=>t.focus(),300)}function Us(e,i){Je={profile:JSON.parse(JSON.stringify(Li[i]||Li.admin)),langue:"Français",unites:Ci[0]};const a=localStorage.getItem("mobile_avatarUrl")||null;function n(){const s=Je.profile,l=a?`<img src="${a}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,p=s.apiKeys.map(d=>`
      <div class="m-list-row" data-key-id="${d.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${d.name}</span>
          <span class="m-list-row-sub">créée le ${d.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),c=s.phones.map((d,v)=>`
      <div class="m-list-row${v===s.phones.length-1&&s.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${d.label||"Numéro "+(v+1)}</span>
        <span class="m-list-row-value">${d.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");e.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${l}</div>
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
        ${c}
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
          <span class="m-list-row-value" id="val-langue">${Je.langue}</span>
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
    `,o()}function o(){var l;const s=Je.profile;(l=e.querySelector("#m-avatar-upload"))==null||l.addEventListener("change",p=>{const c=p.target.files[0];if(!c)return;const d=new FileReader;d.onload=v=>{localStorage.setItem("mobile_avatarUrl",v.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${v.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},d.readAsDataURL(c)}),e.querySelectorAll(".m-list-row[data-action]").forEach(p=>{p.addEventListener("click",()=>{switch(p.dataset.action){case"prenom":Ai("Prénom",s.prenom,c=>{s.prenom=c,n()});break;case"nom":Ai("Nom",s.nom,c=>{s.nom=c,n()});break;case"email":it({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>_e("Fonctionnalité à venir")});break;case"phones":Vs(s.phones,c=>{s.phones=c,n()});break;case"mdp":it({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>_e("Fonctionnalité à venir")});break;case"langue":Mi("Langue",Ns,Je.langue,c=>{Je.langue=c,e.querySelector("#val-langue").textContent=c});break;case"unites":Mi("Unités",Ci,Je.unites,c=>{Je.unites=c,e.querySelector("#val-unites").textContent=c.split(" ")[0]});break;case"gen-key":Gs(c=>{s.apiKeys.push(c),n()});break;case"delete":_e("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(p=>{p.addEventListener("click",()=>{const c=s.apiKeys.find(d=>d.id===+p.dataset.keyId);c&&Ws(c,s.apiKeys,n)})}),e.querySelectorAll(".m-toggle input[data-notif]").forEach(p=>{p.addEventListener("change",()=>_e("Préférence enregistrée"))})}n()}function U(e){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function de({title:e,body:i,doneLabel:t="Fermer",onDone:a}={}){var l;const n=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),s()}),o.addEventListener("click",p=>{p.target===o&&s()}),o}function ht({title:e,message:i="",confirmLabel:t="Confirmer",confirmColor:a="#ff3b30",onConfirm:n}){var p;const o=document.getElementById("phone-screen");(p=document.querySelector(".m-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd" style="justify-content:center;padding:12px 16px 8px">
        <span class="m-sheet-title">${e}</span>
      </div>
      <div class="m-sheet-body" style="padding:4px 16px 32px">
        ${i?`<p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px;text-align:center">${i}</p>`:""}
        <button id="sc-confirm" style="width:100%;padding:14px;background:${a};color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;margin-bottom:8px">${t}</button>
        <button id="sc-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
      </div>
    </div>`,o.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const l=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#sc-cancel").addEventListener("click",l),s.querySelector("#sc-confirm").addEventListener("click",()=>{l(),setTimeout(()=>n==null?void 0:n(),50)}),s.addEventListener("click",c=>{c.target===s&&l()})}function Ys(e){const i=3+e%5,t=Date.now();return Array.from({length:i},(a,n)=>{const o=e*17+n*7,s=1+n*(2+o%6),l=t-s*864e5-o%8*36e5,p=(1+o%5)*36e5+o%60*6e4,c=n===0&&o%7===0;return{start:new Date(l),end:c?null:new Date(l+p)}})}const Zs=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Ks=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],Ti={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},Xs={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function Zt(e){if(!e)return"—";const[i,t,a]=e.split("-");return`${a}/${t}/${i}`}function Ii(e){const i=e.sensorIds.map(a=>{const n=ne.find(o=>o.id===a);return n?`${n.model} ${n.serial}`:null}).filter(Boolean),t=e.parcelIds.map(a=>{const n=le.find(o=>o.id===a);return(n==null?void 0:n.name)||null}).filter(Boolean);return[...i,...t]}function Qs(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const a=[...i==="adherent"?Ks:Zs];function n(){if(!a.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=a.map(s=>{Ii(s);const l=Xs[s.metric]||"bi-bell",p=s.statut==="actif";return`
        <div class="m-alert-card" data-id="${s.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${p?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${l}"></i>
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
              <span class="m-alert-row-val">${Ti[s.metric]||s.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${Zt(s.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${s.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),o()}function o(){t.querySelectorAll(".m-alert-toggle input").forEach(s=>{s.addEventListener("change",l=>{l.stopPropagation();const p=+s.dataset.id,c=a.find(d=>d.id===p);c&&(c.statut=s.checked?"actif":"inactif",n(),U(`Alerte ${s.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-more-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const p=+s.dataset.id,c=a.find(h=>h.id===p);if(!c)return;Ii(c);const d=document.createElement("div"),v=Ys(p);function w(){const h=c.sensorIds.map((g,S)=>{const E=ne.find(M=>M.id===g);return E?{label:`${E.model} ${E.serial}`,type:"sensor",idx:S}:null}).filter(Boolean),b=c.parcelIds.map((g,S)=>{const E=le.find(M=>M.id===g);return E?{label:E.name,type:"parcel",idx:S}:null}).filter(Boolean),f=[...h,...b];return f.length?f.map(g=>`<div class="m-perimetre-item" data-type="${g.type}" data-idx="${g.idx}">
                <span>${g.label}</span>
                <button class="m-perimetre-del" data-type="${g.type}" data-idx="${g.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const r=document.createElement("div");r.className="m-sheet-info-rows";function u(){var S;d.innerHTML="";const h=document.createElement("div");h.className="m-sheet-info-rows",h.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Ti[c.metric]||c.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${Zt(c.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${Zt(c.created)}</span></div>
            ${(S=c.phones)!=null&&S.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${c.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${c.statut}</span></div>`;const b=document.createElement("div");b.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",b.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${w()}</div>`,h.appendChild(b),d.appendChild(h);const f=E=>E.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+E.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),g=document.createElement("div");g.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${v.map(E=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${E.end?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${f(E.start)} → <span style="color:${E.end?"inherit":"#ff9f0a"}">${E.end?f(E.end):"En cours"}</span></div>
              </div></div>`).join("")}`,d.appendChild(g),d.querySelectorAll(".m-perimetre-del").forEach(E=>{E.addEventListener("click",M=>{M.stopPropagation();const y=E.dataset.type,x=+E.dataset.idx;y==="sensor"?c.sensorIds.splice(x,1):c.parcelIds.splice(x,1),u(),n(),U("Retiré du périmètre")})})}u(),de({title:c.name,body:d,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-alert-card").forEach(s=>{s.addEventListener("click",l=>{if(l.target.closest(".m-alert-toggle")||l.target.closest(".m-alert-more-btn"))return;const p=+s.dataset.id,c=a.find(w=>w.id===p);if(!c)return;const d=document.createElement("div");d.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const v=de({title:c.name,body:d,doneLabel:"Fermer",onDone:()=>{}});d.querySelector("#al-edit").addEventListener("click",()=>{v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),U("Modification à venir")},280)}),d.querySelector("#al-delete").addEventListener("click",()=>{const w=a.findIndex(r=>r.id===p);w!==-1&&a.splice(w,1),v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),n()},280),U("Alerte supprimée")})})})}n()}const en="modulepreload",tn=function(e){return"/weenat-proto/"+e},ji={},ge=function(i,t,a){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(t.map(p=>{if(p=tn(p),p in ji)return;ji[p]=!0;const c=p.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${d}`))return;const v=document.createElement("link");if(v.rel=c?"stylesheet":en,c||(v.as="script"),v.crossOrigin="",v.href=p,l&&v.setAttribute("nonce",l),document.head.appendChild(v),c)return new Promise((w,r)=>{v.addEventListener("load",w),v.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return n.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return i().catch(o)})},ls=e=>`parcel-journal-${e}`;function _t(e){try{const i=localStorage.getItem(ls(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"note",category:"Observation générale",date:"2026-05-11",auteur:"Jean Dupont",role:"membre",texte:"Quelques pucerons sur feuilles basses. À surveiller."},{id:2,type:"traitement",date:"2026-05-16",auteur:"Sophie Martin",role:"conseiller",texte:"Vent < 2 m/s, conditions conformes.",produit:"Karate Zeon",dose:"0,1 L/ha",cible:"Pucerons"},{id:3,type:"integration",date:"2026-04-02",texte:"L'intégration « Rimpro » a expiré et n'est plus active.",_system:!0},{id:4,type:"integration",date:"2025-10-02",texte:"Intégration « Rimpro » activée.",_system:!0}]}function xi(e,i){localStorage.setItem(ls(e),JSON.stringify(i))}function Oe(e,i){const t={id:`sys-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,_system:!0,...i};xi(e,[t,..._t(e)])}function st(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const Me=new Date().toISOString().split("T")[0];function vt(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,a,n]=e.split("-");return`${parseInt(n)} ${i[parseInt(a)-1]} ${t}`}function At(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,a]=e.split("-");return`${parseInt(a)} ${i[parseInt(t)-1]}`}function li(e){return!e||e===Me?"":e<Me?'<span class="irr-pill irr-pill--past">Passée · Effectuée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function ri(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Vt(e,i,t){const a=i.length>0&&i.every(o=>t.has(o.id)),n=[...i].sort((o,s)=>o.name.localeCompare(s.name,"fr")).map(o=>{const s=t.has(o.id);return`<div class="irr-plot-row${s?" irr-plot-row--sel":""}" data-pid="${o.id}">
      <div><div class="irr-plot-name">${o.name}</div>${sn(o)}</div>
      ${ri(s,!1)}
    </div>`}).join("");return`<div class="irr-sel-all-row" id="irr-sel-all">
    <span class="irr-sel-all-lbl">${a?"Tout désélectionner":"Tout sélectionner"}</span>
    ${ri(a,!1)}
  </div>${n}`}function ci({title:e,body:i,onSave:t,onDelete:a,saveLabel:n="Enregistrer"}){var p,c;const o=document.getElementById("phone-screen");(p=document.querySelector(".irr-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="irr-sheet-overlay",s.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${a?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${n}</button>
      </div>
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const l=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",d=>{d.target===s&&l()}),(c=s.querySelector("#iss-del"))==null||c.addEventListener("click",()=>{a==null||a(),l()}),s.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),l()}),s}function rs(e,i,t){const a=i.filter(l=>e.has(l.id)&&(!l.irrigation||l.irrigation==="Non irrigué"));if(!a.length){t();return}const n=document.createElement("div");n.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${a.length===1?`<strong>${a[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${a.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" class="m-prev-select" style="margin-bottom:0">
      <option value="">— Choisir un type —</option>
      ${Nt.map(l=>`<option value="${l}">${l}</option>`).join("")}
    </select>`;const s=ci({title:"Type d'irrigation",body:n,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const l=n.querySelector("#irr-type-ask").value;l&&a.forEach(p=>{p.irrigation=l,at(p.id,{irrigation:l})}),t()}}).querySelector("#iss-del");s&&(s.textContent="Passer",s.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function sn(e){const i=e.crop,t=e.irrigation||null,a=e.substrate?"Substrat : "+e.substrate:e.texture||null,n=[i,t||"<em>type irrigation non renseigné</em>",a].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${n.join(" · ")}</span>`}function cs(e,i,t=null,a=!1,n=null){let o=new Set((t==null?void 0:t.ids)??[]),s=Me,l=10;function p(){return Vt([],e,o)}function c(u){u.querySelector("#irr-date-hint").innerHTML=li(s)}function d(u){const h=o.size,b=u.querySelector(".irr-summary"),f=u.querySelector(".irr-save-btn");!b||!f||(t?(b.textContent="",f.disabled=!1,f.textContent="Enregistrer"):(b.textContent=h===0?"":`${h} parcelle${h>1?"s":""} · ${l} mm`,f.disabled=h===0,f.textContent="Enregistrer"))}function v(u){var h;u.querySelectorAll(".irr-plot-row").forEach(b=>{b.addEventListener("click",()=>{const f=+b.dataset.pid;o.has(f)?o.delete(f):o.add(f),u.querySelector("#irr-sel-list").innerHTML=p(),v(u),d(u)})}),(h=u.querySelector("#irr-sel-all"))==null||h.addEventListener("click",()=>{const b=e.some(f=>!o.has(f.id));e.forEach(f=>b?o.add(f.id):o.delete(f.id)),u.querySelector("#irr-sel-list").innerHTML=p(),v(u),d(u)})}const w=t?`<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${t.ids.length>1?"Parcelles concernées":"Parcelle concernée"} : ${t.label}</span>
       </div>`:`<div id="irr-sel-list">${p()}</div>`,r=st(ye(`
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
            <input type="date" class="irr-date-input" id="irr-date" value="${s}" />
            <div id="irr-date-hint" style="min-height:14px"></div>
          </div>
          <div class="irr-field-card">
            <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
            <input type="number" class="irr-qty-input" id="irr-qty" value="${l}" min="1" />
            <div class="irr-field-hint">par parcelle</div>
          </div>
        </div>
      </div>
    </div>
    <div class="irr-scroll-body">
      ${w}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${t?"":"disabled"}>Enregistrer</button>
    </div>
  `));r.dataset.dirty="true",t||v(r),d(r),r.querySelector("#irr-back").addEventListener("click",me),r.querySelector("#irr-date").addEventListener("change",u=>{s=u.target.value,c(r),d(r)}),r.querySelector("#irr-qty").addEventListener("input",u=>{l=parseInt(u.target.value)||1,d(r)}),r.querySelector(".irr-save-btn").addEventListener("click",()=>{const u=t?new Set(t.ids):o;rs(u,e,()=>{const h=s>Me;u.forEach(S=>{ce.push({iso:s,mm:l,real:!h,plotId:S,fromStrategy:!1})}),Qe();const f=[{title:null,names:[...u].map(S=>{var E;return(E=e.find(M=>M.id===S))==null?void 0:E.name}).filter(Boolean)}],g=u.size===1?String([...u][0]):"all";os(),ds({title:u.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:vt(s)},{label:"Quantité",value:`${l} mm`}],parcelSections:f,isFut:h,plots:e,calFilter:g,addedCount:u.size,stackDepth:1,backToParcel:a,onBack:n})})})}function di(e,i,t=null,a=null,n=!1,o=null){let s=new Set((t==null?void 0:t.ids)??[]),l=Me,p=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],c=10,d=7;function v(){if(!l||!p||d<=0)return[];const b=[],f=new Date(p);let g=new Date(l);for(;g<=f&&b.length<100;)b.push(new Date(g)),g.setDate(g.getDate()+d);return b}function w(){const b=v();s.size;const f=b.length>0?`<span class="irr-preview-ok">↗ ${b.length} irrigations · ${b.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${l}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${p}" />
        </div>
      </div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="strat-qty" value="${c}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence <span class="irr-unit">(jours)</span></div>
          <input type="number" class="irr-qty-input" id="strat-freq" value="${d}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${f}</div>
      ${t?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${t.ids.length>1?"Parcelles concernées":"Parcelle concernée"} : ${t.label}</span>
           </div>`:Vt([],e,s)}
      <div class="irr-bottom-spacer"></div>
    `}function r(b){const f=s.size,g=v(),S=b.querySelector(".irr-save-btn"),E=b.querySelector(".irr-summary");!S||!E||(S.disabled=f===0||g.length===0,E.textContent=f===0?"":`${f} parcelle${f>1?"s":""} · ${g.length} occurrences`,S.textContent="Voir l'aperçu →")}function u(b){var S,E,M,y,x;const f=b.querySelector(".irr-scroll-body");f.querySelectorAll(".irr-plot-row").forEach(A=>{A.addEventListener("click",()=>{const T=+A.dataset.pid;s.has(T)?s.delete(T):s.add(T),f.innerHTML=w(),u(b),r(b)})}),(S=f.querySelector("#irr-sel-all"))==null||S.addEventListener("click",()=>{const A=e.some(T=>!s.has(T.id));e.forEach(T=>A?s.add(T.id):s.delete(T.id)),f.innerHTML=w(),u(b),r(b)});const g=()=>{const A=v(),T=f.querySelector("#strat-preview");T&&(T.innerHTML=A.length>0?`<span class="irr-preview-ok">↗ ${A.length} irrigations · ${A.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),r(b)};(E=f.querySelector("#strat-debut"))==null||E.addEventListener("change",A=>{l=A.target.value,g()}),(M=f.querySelector("#strat-fin"))==null||M.addEventListener("change",A=>{p=A.target.value,g()}),(y=f.querySelector("#strat-qty"))==null||y.addEventListener("input",A=>{c=parseInt(A.target.value)||1,g()}),(x=f.querySelector("#strat-freq"))==null||x.addEventListener("input",A=>{d=parseInt(A.target.value)||1,g()})}const h=st(ye(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${w()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));h.dataset.dirty="true",u(h),r(h),h.querySelector("#strat-back").addEventListener("click",me),h.querySelector(".irr-save-btn").addEventListener("click",()=>{const b=v();nn(h,e,s,l,p,c,d,b,i,t,a,n)})}function nn(e,i,t,a,n,o,s,l,p,c,d=null,v=!1){var y;const w=t.size,r=5;l.length-r;function u(x){const T=x.toISOString().slice(0,10)>=Me?"#FFB705":"#FF8500",D=x.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${vt(D)}</span>
      <span style="font-size:13px;font-weight:700;color:${T}">${o} mm</span>
    </div>`}const h=l.filter(x=>x.toISOString().slice(0,10)<Me),b=l.filter(x=>x.toISOString().slice(0,10)>=Me),f=b.slice(0,r),g=b.slice(r),S=h.length?`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${h.map(u).join("")}`:"",E=b.length?`
    <div class="irr-section-lbl" style="margin-top:${h.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${f.map(u).join("")}
    ${g.length?`
      <div id="apercu-rest" style="display:none">${g.map(u).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${g.length} irrigation${g.length>1?"s":""} de plus</button>
    `:""}`:"",M=st(ye(`
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
          <div class="irr-apercu-big">${l.length} irrigations</div>
          <div class="irr-apercu-sub">${At(a)} → ${At(n)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${l.length*o} mm</div>
          <div class="irr-apercu-sub">${w} parcelle${w>1?"s":""} · ${o} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${S}
        ${E}
        ${!h.length&&!b.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));M.dataset.dirty="true",M.querySelector("#apercu-back").addEventListener("click",me),(y=M.querySelector("#apercu-show-more"))==null||y.addEventListener("click",x=>{M.querySelector("#apercu-rest").style.display="",x.target.remove()}),M.querySelector("#apercu-confirm").addEventListener("click",()=>{const x=c?new Set(c.ids):t;rs(x,i,()=>{d&&ce.splice(0,ce.length,...ce.filter(I=>!(d.has(I.seasonId)&&I.fromStrategy&&!I.real)));const A=Fs();l.forEach(I=>{const m=I.toISOString().slice(0,10);x.forEach(k=>{ce.push({iso:m,mm:o,real:m<=Me,plotId:k,fromStrategy:!0,seasonId:A})})}),Qe(),d&&x.forEach(I=>{Oe(I,{type:"modification",date:Me,texte:`Saison d'irrigation modifiée : ${o} mm tous les ${s} jours, du ${At(a)} au ${At(n)} (${l.length} irrigations).`})});const D=[{title:null,names:[...x].map(I=>{var m;return(m=i.find(k=>k.id===I))==null?void 0:m.name}).filter(Boolean)}],j=x.size===1?String([...x][0]):"all";os(),ds({title:"Saison enregistrée",params:[{label:"Début",value:vt(a)},{label:"Fin",value:vt(n)},{label:"Quantité",value:`${o} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${l.length*x.size}`}],parcelSections:D,isFut:!0,plots:i,calFilter:j,addedCount:l.length*x.size,stackDepth:2,backToParcel:v,onBack})})})}function ds({title:e,params:i,parcelSections:t=[],isFut:a,plots:n,calFilter:o,addedCount:s=0,stackDepth:l=3,backToParcel:p=!1,onBack:c=null}){const d=(i||[]).map(g=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${g.label}</span>
      <span class="irr-confirm-param-val">${g.value}</span>
    </div>`).join(""),v=3,w=t.flatMap(g=>g.names.map(S=>({title:g.title,name:S}))),r=w.slice(0,v),u=w.slice(v);function h(g){const S=[];let E=null;for(const M of g)(!E||E.title!==M.title)&&(E={title:M.title,names:[]},S.push(E)),E.names.push(M.name);return S.map(M=>`
      ${M.title?`<div class="irr-confirm-sec-hd">${M.title}</div>`:""}
      ${M.names.map(y=>`<div class="irr-confirm-parcel">· ${y}</div>`).join("")}
    `).join("")}const b=w.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${h(r)}
      ${u.length?`
        <details class="irr-confirm-more">
          <summary>${u.length} parcelle${u.length>1?"s":""} de plus</summary>
          ${h(u)}
        </details>`:""}
    </div>`,f=st(ye(`
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
  `));f.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&ce.splice(ce.length-s,s),me()}),f.querySelector("#conf-back").addEventListener("click",()=>{for(let g=0;g<=l;g++)me();c==null||c()}),f.querySelector("#conf-calendar").addEventListener("click",()=>{us(n,o)})}const an=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function us(e,i){let t=i||"";function a(r){if(!r||r==="all")return null;const u=e.find(h=>String(h.id)===String(r));return u?{ids:[u.id],label:u.name}:null}function n(){return!t||t==="all"?ce:ce.filter(r=>r.plotId===+t)}function o(r){const u=r.filter(g=>g.real),h=r.filter(g=>!g.real),b=u.reduce((g,S)=>g+S.mm,0),f=h.reduce((g,S)=>g+S.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${b} mm</div>
        <div class="irr-cumul-count">${u.length} irrigation${u.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${f} mm</div>
        <div class="irr-cumul-count">${h.length} irrigation${h.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${b+f} mm</div>
        <div class="irr-cumul-count">${u.length+h.length} irrigations</div>
      </div>
    </div>`}function s(r){if(r.length<2)return"";const u=[...r].sort((q,z)=>q.iso<z.iso?-1:1),h=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],b=new Date(u[0].iso),f=new Date(u[u.length-1].iso),g=Math.max(f-b,1),S=300,E=26,M=5,y=5,x=E-y-4,A=x-y-3,T=E+M+13,D=T+2,j=q=>Math.round((q-b)/g*S),I=q=>{const[,z,F]=q.split("-");return`${parseInt(F)}/${parseInt(z)}`},m=[],k=new Date(b.getFullYear(),b.getMonth()+1,1);for(;k<=f;)m.push(new Date(k)),k.setMonth(k.getMonth()+1);const C=m.map(q=>`<line x1="${j(q)}" y1="${E-6}" x2="${j(q)}" y2="${E+M+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),$=[b,...m,f],L=$.slice(0,-1).map((q,z)=>{const F=j(q),R=j($[z+1]);return R-F<16?"":`<text x="${Math.round((F+R)/2)}" y="${A}" font-size="8" fill="#B0AEA8" text-anchor="middle">${h[q.getMonth()]}</text>`}).join(""),P=u.map(q=>{const z=q.real?"#FF8500":"#FFB705",F=j(new Date(q.iso)),[,R,Y]=q.iso.split("-"),te=`${parseInt(Y)} ${an[parseInt(R)-1]} · ${q.mm} mm`;return`<circle cx="${F}" cy="${x}" r="${y}" fill="${z}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${F}" cy="${x}" r="${y+6}" fill="transparent" pointer-events="all"><title>${te}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${S}" height="${D}" viewBox="0 0 ${S} ${D}" style="width:100%;display:block">
        ${L}
        <rect x="0" y="${E}" width="${S}" height="${M}" rx="${M/2}" fill="#E0DED8"/>
        ${C}
        ${P}
        <text x="1" y="${T}" font-size="9" fill="#B0AEA8">${I(u[0].iso)}</text>
        <text x="${S-1}" y="${T}" font-size="9" fill="#B0AEA8" text-anchor="end">${I(u[u.length-1].iso)}</text>
      </svg>
    </div>`}function l(r,u,h){const b=document.createElement("div");let f=r.iso,g=r.mm;b.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${r.iso}" />
          <div id="edit-date-hint">${li(r.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${r.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,b.querySelector("#edit-date").addEventListener("change",S=>{f=S.target.value,b.querySelector("#edit-date-hint").innerHTML=li(f)}),b.querySelector("#edit-qty").addEventListener("input",S=>{const E=parseInt(S.target.value);E>0&&(g=E)}),ci({title:r.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée",body:b,saveLabel:"Enregistrer",onSave:()=>{r.iso=f,r.mm=g,r.real=f<=Me,Qe(),d(h)},onDelete:()=>{const S=ce.indexOf(r);S>-1&&ce.splice(S,1),Qe(),d(h)}})}function p(r,u){const h=+r,b=document.createElement("div");let f=!1,g=!1;function S(){return new Set(ce.filter(M=>M.plotId===h&&M.fromStrategy&&M.seasonId).map(M=>M.seasonId))}function E(){var M,y,x,A,T,D,j;b.innerHTML=`
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
        ${f?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>`:""}
        ${g?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Supprimer toutes les irrigations de cette saison ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(M=b.querySelector("#strat-modify"))==null||M.addEventListener("click",()=>{var C;(C=document.querySelector(".irr-sheet-overlay"))==null||C.remove();const I=S(),m=e.find($=>$.id===h),k=m?{ids:[m.id],label:m.name}:null;di(e,()=>d(u),k,I)}),(y=b.querySelector("#strat-stop"))==null||y.addEventListener("click",()=>{f=!0,g=!1,E()}),(x=b.querySelector("#strat-delete"))==null||x.addEventListener("click",()=>{g=!0,f=!1,E()}),(A=b.querySelector("#stop-cancel"))==null||A.addEventListener("click",()=>{f=!1,E()}),(T=b.querySelector("#stop-confirm"))==null||T.addEventListener("click",()=>{var k;const I=S(),m=ce.filter(C=>C.plotId===h&&I.has(C.seasonId)&&!C.real).length;ce.splice(0,ce.length,...ce.filter(C=>!(C.plotId===h&&I.has(C.seasonId)&&!C.real))),Qe(),Oe(h,{type:"modification",date:Me,texte:`Saison d'irrigation arrêtée (${m} irrigation(s) planifiée(s) annulée(s)).`}),(k=document.querySelector(".irr-sheet-overlay"))==null||k.remove(),d(u)}),(D=b.querySelector("#delete-cancel"))==null||D.addEventListener("click",()=>{g=!1,E()}),(j=b.querySelector("#delete-confirm"))==null||j.addEventListener("click",()=>{var k;const I=S(),m=ce.filter(C=>C.plotId===h&&I.has(C.seasonId)).length;ce.splice(0,ce.length,...ce.filter(C=>!(C.plotId===h&&I.has(C.seasonId)))),Qe(),Oe(h,{type:"modification",date:Me,texte:`Saison d'irrigation supprimée (${m} irrigation(s) retirée(s) du calendrier).`}),(k=document.querySelector(".irr-sheet-overlay"))==null||k.remove(),d(u)})}E(),ci({title:"Gérer la saison",body:b,saveLabel:"Fermer",onSave:()=>{}})}function c(r){if(!r.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const u=[...r].filter(f=>!f.real).sort((f,g)=>f.iso<g.iso?-1:1),h=[...r].filter(f=>f.real).sort((f,g)=>f.iso>g.iso?-1:1);function b(f){const g=f.real?"#FF8500":"#FFB705",S=ce.indexOf(f);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${vt(f.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${g};white-space:nowrap;margin-right:4px">${f.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${S}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${S}" title="Supprimer">🗑</button>
      </div>`}return`
      ${h.length?`
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${h.length}</span></summary>
          ${h.map(b).join("")}
        </details>`:""}
      ${u.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${u.length}</span></summary>
          ${u.map(b).join("")}
        </details>`:""}
    `}function d(r){var S,E,M;const u=r.querySelector(".irr-cal-body");if(!t){u.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const h={};if(u.querySelectorAll("details[data-section]").forEach(y=>{h[y.dataset.section]=y.open}),t==="all"){const y={};for(const T of ce){const D=T.plotId??"unknown";y[D]||(y[D]=[]),y[D].push(T)}const x=Object.keys(y);if(!x.length){u.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const A=x.sort((T,D)=>{var m,k;const j=((m=e.find(C=>String(C.id)===T))==null?void 0:m.name)??T,I=((k=e.find(C=>String(C.id)===D))==null?void 0:k.name)??D;return j.localeCompare(I,"fr")});u.innerHTML=A.map(T=>{var m;const D=y[T],j=D.some(k=>k.fromStrategy);return`<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${((m=e.find(k=>String(k.id)===T))==null?void 0:m.name)??T}</div>
          ${o(D)}
          ${s(D)}
          ${j?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-pid="${T}">Modifier la saison ↗</button>
          </div>`:""}
        </div>`}).join(""),u.querySelectorAll("[data-strat-pid]").forEach(T=>{T.addEventListener("click",()=>p(T.dataset.stratPid,r))});return}const b=n(),g=b.some(y=>y.fromStrategy)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`;u.innerHTML=`
      ${o(b)}
      ${s(b)}
      ${g}
      ${c(b)}
    `,u.querySelectorAll("details[data-section]").forEach(y=>{const x=y.dataset.section;x in h&&(y.open=h[x])}),u.querySelectorAll(".irr-edit-btn").forEach(y=>{y.addEventListener("click",x=>{x.stopPropagation();const A=ce[+y.dataset.iidx];A&&l(A,b,r)})}),u.querySelectorAll(".irr-del-btn").forEach(y=>{y.addEventListener("click",x=>{x.stopPropagation();const A=+y.dataset.iidx;A>=0&&(ce.splice(A,1),Qe(),d(r))})}),(S=u.querySelector("#open-strat-edit"))==null||S.addEventListener("click",()=>{p(t,r)}),(E=u.querySelector("#cal-add-irrig"))==null||E.addEventListener("click",()=>{cs(e,()=>d(r),a(t))}),(M=u.querySelector("#cal-add-strat"))==null||M.addEventListener("click",()=>{di(e,()=>d(r),a(t))})}const v=[...e].sort((r,u)=>r.name.localeCompare(u.name,"fr")).map(r=>`<option value="${r.id}"${String(r.id)===String(t)?" selected":""}>${r.name}</option>`).join(""),w=st(ye(`
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
  `));w.querySelector("#cal-back").addEventListener("click",me),w.querySelector("#cal-filter-sel").addEventListener("change",r=>{t=r.target.value,d(w)}),d(w)}const et=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:Vt,checkIcon:ri,flexLayer:st,openCalendar:us,openIrrigationSaisie:cs,openIrrigationStrategie:di},Symbol.toStringTag,{value:"Module"})),on=[{name:"Allier AgriTech",distance:8,adherents:31,capteurs:198,parcelles:1140,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Auvergne Agri Conseil",distance:15,adherents:54,capteurs:361,parcelles:2080,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]},{name:"Réseau Bourbonnais",distance:22,adherents:18,capteurs:112,parcelles:630,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Creuse Agri Net",distance:38,adherents:12,capteurs:74,parcelles:410,sharedSensorTypes:["Capteurs d'irrigation"]},{name:"Puy-de-Dôme Connect",distance:45,adherents:39,capteurs:255,parcelles:1490,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]}],qi={name:"Breiz'Agri Conseil",city:"Rennes (35)",phone:"02 99 XX XX XX",email:"contact@breizagri.fr",capteurs:312,parcelles:1830,sharedSensorTypes:["Capteurs météo"]},ln=["Capteurs météo","Capteurs d'irrigation","Stations météo virtuelles"];function Pi(e){return e.split(" ").filter(i=>i.length>2).slice(0,2).map(i=>i[0].toUpperCase()).join("")}const Pe={prenom:"Pierre",nom:"Jourdain",email:"pierre@gaec-jourdain.fr",phone:"06 71 23 45 67",orgName:"GAEC Jourdain",adresse:"Lieu-dit La Croix Blanche, 03500 Saint-Pourçain-sur-Sioule",selectedPlan:"expert",joinNetwork:!0},rn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre 15/30 cm","CHP-30/60":"Tensiomètre 30/60 cm","CHP-60/90":"Tensiomètre 60/90 cm","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},cn={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]},dn=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),Kt=[{id:"essential",name:"Weenat Essential",priceNum:0,price:"Gratuit",color:"#636366",features:["Aucun capteur physique","Historique illimité","Alertes","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"plus",name:"Weenat Plus",priceNum:16.5,price:"16,5 €/mois",color:"#00B093",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"expert",name:"Weenat Expert",priceNum:30,price:"30 €/mois",color:"#006798",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées","Capteurs irrigation","Fonctionnalités irrigation"]}],Xt={Administrateur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!0}]}],Agent:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}],Lecteur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!1}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!1}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!1},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}]};function un(e,i,t,a){const n=i==="essential",o=i==="expert";return e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?["signup","verify","emailVerified","creating","done"]:e==="new-adherent"?["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkInfo","invite","plan",...o?["volumeChoice"]:[],"creating","done"]:["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkChoice",...t?["networkPick"]:[],"invite","plan",...n?[]:["payment","paymentConfirmed"],...o?["volumeChoice"]:[],"creating","done"]}function pn(e,i,t,a){return un(e,i,t)}const mn={signup:"Inscription",verify:"Vérification",orgName:"Exploitation",geoloc:"Localisation",orgInfo:"Informations",networkChoice:"Réseau",networkPick:"Choisir un réseau",networkInfo:"Mon réseau",invite:"Invitations",plan:"Abonnement",payment:"Paiement",paymentConfirmed:"Paiement",volumeChoice:"Volume autorisé",parcelMap:"Parcelle",parcelSource:"Source de données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"};function vn(e,i){const t=document.getElementById("phone-screen");let a=0,n=e==="new-adherent"?"expert":Pe.selectedPlan,o=Pe.joinNetwork,s=!1,l=0,p=!0,c=46.3021,d=3.2938,v=null,w=null,r="smv",u=[],h="Parcelle 1";const b=document.createElement("div");b.id="onboarding-overlay",b.className="m-ob-overlay",t.appendChild(b);function f(){return pn(e,n,o)}function g(){return f()[a]}function S(){return f().filter(O=>!["creating","done","parcelDone","emailVerified","paymentConfirmed"].includes(O)).length}function E(){return Kt.find(O=>O.id===n)}function M(){const O=f().slice(0,a).filter(G=>G!=="creating"&&G!=="done"&&G!=="parcelDone").length;return`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Math.round(O/S()*100)}%"></div></div>`}function y(O,V=!0){const G=g(),B=new Set(["creating","done","parcelDone","emailVerified","paymentConfirmed"]),_=V&&a>0&&!B.has(G),H=mn[G]||"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${_?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${H}</span>
          <div style="width:32px"></div>
        </div>
        ${B.has(G)?"":M()}
        <div class="m-ob-body">${O}</div>
      </div>`}function x(){a++,Q()}function A(){a--,Q()}function T(){return y(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-person"></i></div>
        <h2 class="m-ob-h2">Créer mon compte</h2>
      </div>
      <div class="m-ob-form" style="margin-top:20px">
        <div class="m-ob-row2">
          <div class="m-ob-field">
            <label class="m-ob-label">Prénom</label>
            <input class="m-ob-input" type="text" placeholder="Prénom" value="${Pe.prenom}">
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">Nom</label>
            <input class="m-ob-input" type="text" placeholder="Nom" value="${Pe.nom}">
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Adresse email professionnelle</label>
          <input class="m-ob-input" type="email" placeholder="Adresse email professionnelle" value="${Pe.email}">
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
            <input class="m-ob-input m-ob-input--phone" type="tel" placeholder="06 12 12 12 12" value="${Pe.phone}">
          </div>
        </div>
        <label class="m-ob-cgu-row">
          <input type="checkbox" checked>
          <span>J'ai lu et j'accepte les <a href="#">conditions d'utilisations</a> et la <a href="#">politique de confidentialité</a></span>
        </label>
      </div>
      <button class="m-ob-cta" id="ob-next">Créer mon compte</button>
    `,!1)}function D(){return y(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-envelope-check"></i></div>
        <h2 class="m-ob-h2">Vérifiez votre adresse email</h2>
        <p class="m-ob-sub">Un e-mail a été envoyé à<br><strong>${Pe.email}</strong></p>
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
          <p class="m-ob-sub" style="text-align:center"><strong>${Pe.email}</strong><br>a bien été confirmée.</p>
          <button class="m-ob-cta" id="ob-next" style="margin-top:12px">Continuer</button>
        </div>
      </div>`}function I(){return y(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-building"></i></div>
        <h2 class="m-ob-h2">Votre exploitation</h2>
        <p class="m-ob-sub">Comment s'appelle votre exploitation ?</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de l'exploitation</label>
          <input class="m-ob-input" type="text" value="${Pe.orgName}">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function m(){return y(`
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
            <input class="m-ob-input" type="text" value="${Pe.adresse}">
          </div>
          <div id="ob-addr-map" class="m-ob-addr-map"></div>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      </div>
    `)}function k(){const O=as.map(V=>`<button type="button" class="m-ob-pill" data-metier="${V}">${V}</button>`).join("");return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-house"></i></div>
        <h2 class="m-ob-h2">Votre activité</h2>
        <p class="m-ob-sub">Ces informations nous permettent de vous conseiller les fonctionnalités les plus adaptées.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Métier(s)</label>
          <div class="m-ob-pills">${O}</div>
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function C(){return y(`
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
    `)}function $(){const O=on.map(V=>{var G;return`
      <div class="m-ob-net-row" data-net="${V.name}">
        <div class="m-ob-net-avatar">${Pi(V.name)}</div>
        <div class="m-ob-net-info">
          <div class="m-ob-net-name">${V.name}</div>
          <div class="m-ob-net-meta">${V.distance} km · ${V.capteurs} capteurs · ${V.parcelles} parcelles</div>
          ${(G=V.sharedSensorTypes)!=null&&G.length?`<div class="m-ob-net-tags">${V.sharedSensorTypes.map(B=>`<span class="m-ob-net-tag">${B}</span>`).join("")}</div>`:""}
        </div>
        <div class="m-ob-net-check"><i class="bi bi-circle"></i></div>
      </div>`}).join("");return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-building-check"></i></div>
        <h2 class="m-ob-h2">Choisir un réseau</h2>
        <p class="m-ob-sub">Les 5 réseaux les plus proches de votre exploitation.</p>
      </div>
      <div class="m-ob-net-list">${O}</div>
      <button class="m-ob-cta" id="ob-next">Rejoindre</button>
    `)}function L(){var V;const O=qi;return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3-fill"></i></div>
        <h2 class="m-ob-h2">Mon réseau</h2>
        <p class="m-ob-sub">Vous avez été invité à rejoindre ce réseau.</p>
      </div>
      <div class="m-ob-info-card" style="background:var(--bg2,#f5f5f7);border-radius:12px;padding:20px 16px;margin:0 0 16px">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:14px">
          <div class="m-ob-net-avatar" style="width:64px;height:64px;font-size:24px;border-radius:16px;margin-bottom:8px">${Pi(O.name)}</div>
          <div style="font-weight:700;font-size:16px">${O.name}</div>
          <div style="font-size:13px;color:#636366">${O.city}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px;margin-top:6px"><i class="bi bi-telephone" style="color:#0172A4"></i> ${O.phone}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px"><i class="bi bi-envelope" style="color:#0172A4"></i> ${O.email}</div>
        </div>
        <div style="display:flex;gap:16px;padding-top:12px;padding-bottom:12px;border-top:.5px solid rgba(0,0,0,.1)">
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${O.capteurs}</div><div style="font-size:11px;color:#636366">capteurs</div></div>
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${O.parcelles}</div><div style="font-size:11px;color:#636366">parcelles</div></div>
        </div>
        <div style="padding-top:12px;border-top:.5px solid rgba(0,0,0,.1)">
          ${(V=O.sharedSensorTypes)!=null&&V.length?`
          <div style="font-size:13px;color:#3a3a3c;margin-bottom:8px">Capteurs partagés entre les adhérents :</div>
          <div class="m-ob-pills">${ln.map(G=>`<span class="m-ob-pill${O.sharedSensorTypes.includes(G)?" m-ob-pill--on":" m-ob-pill--off"}" style="cursor:default">${G}</span>`).join("")}</div>
          `:`<div style="font-size:13px;color:#3a3a3c">Aucun capteur n'est partagé entre les adhérents de ce réseau</div>`}
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function P(O){const V=Xt[O];return V?`<div class="m-ob-role-perms">${V.map(G=>`
      <div class="m-rp-section">
        <div class="m-rp-section-title">${G.section}</div>
        ${G.items.map(B=>`
          <div class="m-rp-item">
            <i class="bi bi-${B.ok?"check-circle-fill":"x-circle-fill"}" style="color:${B.ok?"#30d158":"#ff3b30"}"></i>
            <span>${B.label}</span>
          </div>`).join("")}
      </div>`).join("")}</div>`:""}function q(O){const V=Xt[O];return V?`<div class="m-rp-summary">${V.map(B=>{const _=B.items.filter(ee=>ee.ok).length,H=_===0?"none":_===B.items.length?"full":"partial",W={full:"check-circle-fill",partial:"dash-circle-fill",none:"x-circle"}[H],J={full:"#30d158",partial:"#ff9500",none:"#c7c7cc"}[H],ae=B.section.replace("Exploitations adhérentes","Adhérents");return`<div class="m-rp-badge"><i class="bi bi-${W}" style="color:${J}"></i><span>${ae}</span></div>`}).join("")}</div>`:""}function z(){const O=Object.keys(Xt);return`
      <button type="button" class="m-rp-toggle" id="ob-roles-info-toggle"><span>Comparer les droits par rôle</span><i class="bi bi-chevron-down"></i></button>
      <div class="m-ob-roles-info" id="ob-roles-info" hidden>
        <div class="m-ob-roles-tabs">${O.map((V,G)=>`<button type="button" class="m-ob-roles-tab${G===0?" m-ob-roles-tab--on":""}" data-role="${V}">${V}</button>`).join("")}</div>
        <div id="ob-roles-info-detail">${P(O[0])}</div>
      </div>`}function F(){return`
      <div class="m-ob-invite-item">
        <div class="m-ob-invite-card">
          <div class="m-ob-invite-fields">
            <input class="m-ob-input" type="email" placeholder="adresse@email.fr">
            <select class="m-ob-select m-ob-invite-role-sel">
              <option value="">Choisir un rôle…</option>
              <option>Administrateur</option><option>Agent</option><option>Lecteur</option>
            </select>
          </div>
          <button class="m-ob-invite-remove" type="button" title="Supprimer"><i class="bi bi-trash"></i></button>
        </div>
        <div class="m-ob-role-summary-wrap"></div>
      </div>`}function R(){return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-people"></i></div>
        <h2 class="m-ob-h2">Inviter des membres</h2>
        <p class="m-ob-sub">Ajoutez des collègues de votre exploitation. Salariés, chefs de culture, conseillers externes...</p>
        <p class="m-ob-sub" style="margin-top:6px">Chaque membre implique une licence payante additionnelle.</p>
      </div>
      ${z()}
      <div id="ob-invite-list">${F()}</div>
      <button class="m-ob-add-member" id="ob-add-member" type="button"><i class="bi bi-plus-circle"></i> Ajouter un membre</button>
      <button class="m-ob-cta" id="ob-send-invites">Continuer</button>
      <button class="m-ob-link" id="ob-skip-invite" type="button">Passer cette étape</button>
    `)}function Y(){const O=e==="new-adherent",V=qi;if(O){const B=Kt.find(H=>H.id==="expert"),_=B.features.map(H=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${B.color}"></i> ${H}</li>`).join("");return y(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-gift"></i></div>
          <h2 class="m-ob-h2">Votre abonnement</h2>
          <p class="m-ob-sub">Le réseau <strong>${V.name}</strong> vous a invité à profiter de l'abonnement <strong style="color:${B.color}">Weenat Expert</strong>. Découvrez ce qu'il comprend.</p>
        </div>
        <div class="m-ob-sub-card m-ob-sub-card--on" style="--plan-color:${B.color}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${B.color}">${B.name}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${B.color};background:${B.color}">
              <i class="bi bi-check" style="color:#fff;font-size:13px"></i>
            </div>
          </div>
          <ul class="m-ob-feat-list" style="display:block;margin-top:10px">${_}</ul>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      `)}const G=Kt.map(B=>{const _=B.id===n,H=B.features.map(W=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${B.color}"></i> ${W}</li>`).join("");return`
        <div class="m-ob-sub-card${_?" m-ob-sub-card--on":""}" data-plan="${B.id}" style="${_?`--plan-color:${B.color}`:""}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${B.color}">${B.name}${B.id==="expert"?' <span style="font-size:11px;font-weight:400;opacity:.8">(irrigation)</span>':""}</div>
              <div class="m-ob-sub-price">${B.price}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${_?B.color:"#c7c7cc"};background:${_?B.color:"transparent"}">
              ${_?'<i class="bi bi-check" style="color:#fff;font-size:13px"></i>':""}
            </div>
          </div>
          <button class="m-ob-feat-toggle" data-plan="${B.id}" type="button">
            Ce qui est inclus <i class="bi bi-chevron-down"></i>
          </button>
          <ul class="m-ob-feat-list" id="feat-${B.id}" style="display:none">${H}</ul>
        </div>`}).join("");return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-grid-1x2"></i></div>
        <h2 class="m-ob-h2">Votre abonnement</h2>
        <p class="m-ob-sub">Choisissez le plan qui correspond à vos besoins.</p>
      </div>
      <div class="m-ob-sub-cards">${G}</div>
      <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
    `)}function te(){const O=E(),V=l+1,G=V*O.priceNum,B=G*12,_=H=>H%1===0?`${H}`:H.toFixed(1).replace(".",",");return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-credit-card"></i></div>
        <h2 class="m-ob-h2">Paiement</h2>
      </div>
      <div class="m-ob-pay-summary">
        <div class="m-ob-pay-line">
          <span style="color:${O.color};font-weight:700">${O.name}</span>
          <span class="m-ob-pay-price" style="color:${O.color}">${_(O.priceNum)} €<span class="m-ob-pay-period">/licence/mois</span></span>
        </div>
        ${V>1?`
        <div class="m-ob-pay-line" style="margin-top:6px">
          <span style="font-size:13px;color:#636366">${V} licences (${l} invité${l>1?"s":""} + vous)</span>
          <span style="font-size:15px;font-weight:700;color:${O.color}">${_(G)} €/mois</span>
        </div>
        <button class="m-ob-link" id="ob-remove-invites" type="button" style="font-size:12px;color:#636366;padding:2px 0;text-align:left">Retirer les invités et ne prendre qu'une licence</button>`:""}
        <div class="m-ob-pay-divider"></div>
        <div class="m-ob-pay-line">
          <span style="font-weight:600">Total annuel</span>
          <span style="font-size:17px;font-weight:700;color:${O.color}">${_(B)} €/an</span>
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
      <button class="m-ob-cta" id="ob-next" style="background:${O.color}"><i class="bi bi-lock-fill" style="font-size:13px"></i> Payer ${_(B)} €</button>
      <p class="m-ob-legal" style="margin-top:10px"><i class="bi bi-shield-check"></i> Paiement sécurisé SSL · Données chiffrées</p>
    `)}function be(){return y(`
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
    `)}function Te(){return E(),`
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
            <p class="m-ob-sub" style="text-align:center">Un reçu de votre paiement vous a été envoyé par email à <strong>${Pe.email}</strong>.</p>
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
      </div>`}function $e(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-spinner"><div class="m-ob-spinner-ring"></div></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Création de votre espace…</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?"Nous configurons votre accès et créons votre exploitation par défaut.":"Nous configurons votre exploitation."}</p>
      </div>`}function Ie(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Votre espace est prêt !</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?`Votre compte a été créé. Votre exploitation par défaut <strong>Exploitation ${Pe.nom}</strong> est prête.`:"Une parcelle et une station météo virtuelle ont été créées à l'adresse de votre exploitation. Vous pouvez les modifier ou les supprimer."}</p>
        <button class="m-ob-cta" id="ob-finish" style="margin-top:32px">Accéder à mon exploitation</button>
      </div>`}function De(){return y(`
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
    `)}function Ye(){if(n==="essential")return x(),"";const G=["P+","CHP-15/30","CAPA-30-3","EC"].map(_=>ne.find(H=>H.orgId===1&&H.model===_)).filter(Boolean);return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(_=>`
          <div class="m-ob-plan-card${r===_.id?" m-ob-plan-card--on":""}" data-psource="${_.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${_.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${_.title}</div>
                <div class="m-ob-plan-desc">${_.desc}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>

      <div id="ob-link-sensors" style="display:${r==="link"?"block":"none"}">
        <div style="font-size:13px;font-weight:600;margin-bottom:8px;color:#3a3a3c">Capteurs disponibles</div>
        <div id="ob-sensor-conflict" style="display:none;gap:8px;align-items:flex-start;padding:10px 12px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;margin-bottom:10px">
          <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;flex-shrink:0;margin-top:1px"></i>
          <span id="ob-sensor-conflict-msg" style="font-size:12px;color:#7a5a00;line-height:1.4"></span>
        </div>
        ${G.map(_=>`
          <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:.5px solid rgba(0,0,0,.08);cursor:pointer">
            <input type="checkbox" ${u.includes(_.id)?"checked":""} data-sensor-id="${_.id}" style="width:18px;height:18px;flex-shrink:0">
            <div>
              <div style="font-size:14px;font-weight:600;color:#1c1c1e">${rn[_.model]||_.model}</div>
              <div style="font-size:12px;color:#636366;margin-top:1px">${_.model} · ${_.serial}</div>
            </div>
          </label>`).join("")}
      </div>

      <div id="ob-add-sensor-form" style="display:${r==="add"?"block":"none"}">
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
    `)}function Ze(){const O=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),V=new Set(["EC"]),G=ne.filter(H=>u.includes(H.id)),B=G.some(H=>O.has(H.model)),_=G.some(H=>V.has(H.model));return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${h}">
        </div>
        ${B?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${yi.map(H=>`<option>${H}</option>`).join("")}
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
            ${Nt.map(H=>`<option${H==="Non irrigué"?" selected":""}>${H}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function Lt(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub">
          <strong>${h}</strong> a été créée avec succès.
          ${n==="essential"?"<br>Une station météo virtuelle a été ajoutée au centre de la parcelle.":""}
        </p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Accéder au tableau de bord</button>
      </div>`}const N={signup:T,verify:D,emailVerified:j,orgName:I,geoloc:m,orgInfo:k,networkChoice:C,networkPick:$,networkInfo:L,invite:R,plan:Y,payment:te,paymentConfirmed:Te,volumeChoice:be,creating:$e,done:Ie,parcelMap:De,parcelSource:Ye,parcelConfig:Ze,parcelDone:Lt};function Q(){const O=N[g()];if(!O)return;const V=O();V&&(b.innerHTML=V),je()}function X(){l=[...b.querySelectorAll("#ob-invite-list .m-ob-input--email")].filter(V=>V.value.trim()).length}function se(){const O=window.L;O&&setTimeout(()=>{const V=b.querySelector("#ob-parcel-map");if(!V||V._leaflet_id)return;w=O.map(V,{zoomControl:!0,attributionControl:!1}).setView([c,d],15),O.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(w),O.circleMarker([c,d],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(w);const G=c+45e-5;v=O.marker([G,d],{icon:O.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),draggable:!0}).addTo(w),v.on("dragend",()=>{const B=v.getLatLng();c=B.lat,d=B.lng}),w.invalidateSize()},50)}function je(){var V,G,B,_,H,W,J,ae,ee,ue,ie,oe,pe,he,we,fe;(V=b.querySelector("#ob-back"))==null||V.addEventListener("click",A),b.querySelectorAll("#ob-next").forEach(Z=>Z.addEventListener("click",x)),(G=b.querySelector("#ob-pw-eye"))==null||G.addEventListener("click",()=>{s=!s;const Z=b.querySelector("#ob-pw");Z&&(Z.type=s?"text":"password");const K=b.querySelector("#ob-pw-eye i");K&&(K.className=s?"bi bi-eye":"bi bi-eye-slash")}),b.querySelectorAll(".m-ob-sub-card").forEach(Z=>{Z.addEventListener("click",K=>{K.target.closest(".m-ob-feat-toggle")||(n=Z.dataset.plan,Q())})}),b.querySelectorAll(".m-ob-feat-toggle").forEach(Z=>{Z.addEventListener("click",K=>{K.stopPropagation();const re=b.querySelector(`#feat-${Z.dataset.plan}`),Ae=Z.querySelector(".bi");if(!re)return;const qe=re.style.display!=="none";re.style.display=qe?"none":"block",Ae.className=`bi bi-chevron-${qe?"down":"up"}`})}),b.querySelectorAll("[data-join]").forEach(Z=>{Z.addEventListener("click",()=>{o=Z.dataset.join==="oui",b.querySelectorAll("[data-join]").forEach(K=>K.classList.toggle("m-ob-plan-card--on",K===Z))})}),b.querySelectorAll("[data-net]").forEach(Z=>{Z.addEventListener("click",()=>{b.querySelectorAll("[data-net]").forEach(K=>{const re=K===Z;K.classList.toggle("m-ob-net-row--on",re),K.querySelector(".bi").className=`bi bi-${re?"check-circle-fill":"circle"}`})})});const O=()=>{var re;(re=b.querySelector("#ob-geoloc-btns"))==null||re.remove();const Z=b.querySelector("#ob-geoloc-addr");Z&&(Z.style.display="");const K=window.L;K&&setTimeout(()=>{const Ae=b.querySelector("#ob-addr-map");if(!Ae||Ae._leaflet_id)return;const qe=K.map(Ae,{zoomControl:!0,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}).setView([46.3021,3.2938],13);K.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:18}).addTo(qe),K.marker([46.3021,3.2938]).addTo(qe)},50)};(B=b.querySelector("#ob-geoloc-allow"))==null||B.addEventListener("click",O),(_=b.querySelector("#ob-geoloc-manual"))==null||_.addEventListener("click",O),b.querySelectorAll(".m-ob-pill").forEach(Z=>{Z.addEventListener("click",()=>Z.classList.toggle("m-ob-pill--on"))}),(H=b.querySelector("#ob-add-member"))==null||H.addEventListener("click",()=>{const Z=b.querySelector("#ob-invite-list"),K=document.createElement("div");K.innerHTML=F(),Z.appendChild(K.firstElementChild)}),(W=b.querySelector("#ob-invite-list"))==null||W.addEventListener("click",Z=>{const K=Z.target.closest(".m-ob-invite-remove");if(!K)return;const re=K.closest(".m-ob-invite-item");re&&re.remove()}),(J=b.querySelector("#ob-roles-info-toggle"))==null||J.addEventListener("click",()=>{const Z=b.querySelector("#ob-roles-info-toggle"),K=b.querySelector("#ob-roles-info"),re=!K.hidden;K.hidden=re,Z.classList.toggle("m-rp-toggle--open",!re),Z.querySelector("span").textContent=re?"Comparer les droits par rôle":"Masquer la comparaison des rôles"}),(ae=b.querySelector("#ob-roles-info"))==null||ae.addEventListener("click",Z=>{const K=Z.target.closest(".m-ob-roles-tab");K&&(b.querySelectorAll(".m-ob-roles-tab").forEach(re=>re.classList.toggle("m-ob-roles-tab--on",re===K)),b.querySelector("#ob-roles-info-detail").innerHTML=P(K.dataset.role))}),(ee=b.querySelector("#ob-invite-list"))==null||ee.addEventListener("change",Z=>{var Ae;const K=Z.target.closest(".m-ob-invite-role-sel");if(!K)return;const re=(Ae=K.closest(".m-ob-invite-item"))==null?void 0:Ae.querySelector(".m-ob-role-summary-wrap");re&&(re.innerHTML=q(K.value))}),(ue=b.querySelector("#ob-remove-invites"))==null||ue.addEventListener("click",()=>{l=0,Q()}),(ie=b.querySelector("#ob-send-invites"))==null||ie.addEventListener("click",()=>{X(),x()}),(oe=b.querySelector("#ob-skip-invite"))==null||oe.addEventListener("click",()=>{l=0,x()}),b.querySelectorAll("[data-psource]").forEach(Z=>{Z.addEventListener("click",()=>{r=Z.dataset.psource,b.querySelectorAll("[data-psource]").forEach(K=>K.classList.toggle("m-ob-plan-card--on",K===Z)),b.querySelector("#ob-link-sensors").style.display=r==="link"?"block":"none",b.querySelector("#ob-add-sensor-form").style.display=r==="add"?"block":"none"})}),b.querySelectorAll("[data-sensor-id]").forEach(Z=>{Z.addEventListener("change",()=>{const K=parseInt(Z.dataset.sensorId);Z.checked?u.includes(K)||u.push(K):u=u.filter(ze=>ze!==K);const Ae=ne.filter(ze=>u.includes(ze.id)).filter(ze=>!dn.has(ze.model)),qe={};Ae.forEach(ze=>(cn[ze.model]||[]).forEach(Si=>{qe[Si]=(qe[Si]||0)+1}));const rt=Object.entries(qe).filter(([,ze])=>ze>1).map(([ze])=>ze),nt=b.querySelector("#ob-sensor-conflict"),Ct=b.querySelector("#ob-sensor-conflict-msg");nt&&Ct&&(rt.length>0?(Ct.textContent=`Plusieurs capteurs mesurent la même métrique (${rt.join(", ")}). Décochez l'un des capteurs redondants.`,nt.style.display="flex"):nt.style.display="none")})}),b.querySelectorAll("[data-volume]").forEach(Z=>{Z.addEventListener("click",()=>{p=Z.dataset.volume==="oui",b.querySelectorAll("[data-volume]").forEach(re=>re.classList.toggle("m-ob-plan-card--on",re===Z));const K=b.querySelector("#ob-volume-field");K&&(K.style.display=p?"block":"none")})}),(pe=b.querySelector("#ob-skip-source"))==null||pe.addEventListener("click",()=>{r="smv",x()}),(he=b.querySelector("#ob-parcel-name"))==null||he.addEventListener("input",Z=>{h=Z.target.value}),g()==="parcelMap"&&se(),g()==="creating"&&setTimeout(()=>{a++,Q()},2200),(we=b.querySelector("#ob-finish"))==null||we.addEventListener("click",()=>{b.classList.add("m-ob-overlay--out"),setTimeout(()=>{b.remove(),i()},400)}),(fe=b.querySelector("#ob-see-parcel"))==null||fe.addEventListener("click",()=>{b.classList.add("m-ob-overlay--out"),setTimeout(()=>{b.remove(),i()},400)})}Q()}const bn=["Ail","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Colza","Courgette","Féverole","Haricot vert","Laitue","Lin oléagineux","Luzerne","Maïs fourrage","Maïs grain","Orge d'hiver","Orge de printemps","Oignon","Pêcher","Pois protéagineux","Poireau","Poirier","Pomme de terre","Pommier","Prairie","Prunier","Ray-grass","Soja","Tomate","Tournesol","Trèfle","Vigne"];function ps({showBack:e=!0,btnLabel:i="Ajouter",showSkip:t=!1}={}){return`
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
    </div>`}async function fn(e,i){var t,a,n,o;try{const l=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${i}`)).json();return((t=l.address)==null?void 0:t.village)||((a=l.address)==null?void 0:a.town)||((n=l.address)==null?void 0:n.city)||((o=l.address)==null?void 0:o.municipality)||""}catch{return""}}function hn(e){const i=document.getElementById("phone-screen");let t=46.3021,a=3.2938,n=null,o=null,s=46.3021+45e-5,l=3.2938,p=null,c=null,d="smv",v=[],w="",r=0;const u=["parcelMap","parcelSource","parcelData","parcelConfig","parcelDone"],h={parcelMap:"Parcelle",parcelSource:"Source de données",parcelData:"Données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"},b=document.createElement("div");b.id="parcel-creation-overlay",b.className="m-ob-overlay",i.appendChild(b);function f(){return u[r]}function g(){r++,m()}function S(){r--,m()}function E($,L=!0){const P=f(),q=L&&r>0&&P!=="parcelDone",z=h[P]||"",F=u.filter(be=>be!=="parcelDone"),R=F.indexOf(P),Y=R>=0?Math.round(R/F.length*100):100,te=P!=="parcelDone"?`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Y}%"></div></div>`:"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${q?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${z}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${te}
        <div class="m-ob-body">${$}</div>
      </div>`}function M(){return E(`
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
    `,!1)}function y(){return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(L=>`
          <div class="m-ob-plan-card${d===L.id?" m-ob-plan-card--on":""}" data-psource="${L.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${L.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${L.title}</div>
                <div class="m-ob-plan-desc">${L.desc}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
      <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
    `)}function x(){if(d==="smv")return E(`
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
      `);if(d==="link"){const $=ne.slice(0,6);return E(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-link-45deg"></i></div>
          <h2 class="m-ob-h2">Lier un capteur</h2>
          <p class="m-ob-sub">Sélectionnez les capteurs à lier à cette parcelle.</p>
        </div>
        <div style="background:#fff;border-radius:12px;overflow:hidden;border:.5px solid rgba(0,0,0,.1);margin-bottom:16px">
          ${$.map((L,P)=>`
            <label style="display:flex;align-items:center;gap:12px;padding:12px 14px;${P<$.length-1?"border-bottom:.5px solid rgba(0,0,0,.08)":""};cursor:pointer">
              <input type="checkbox" ${v.includes(L.id)?"checked":""} data-sensor-id="${L.id}" style="width:18px;height:18px;flex-shrink:0">
              <div>
                <div style="font-size:14px;font-weight:600">${L.model}</div>
                <div style="font-size:12px;color:#636366">${L.serial}</div>
              </div>
            </label>`).join("")}
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
        <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
      `)}return ps({showBack:!0,btnLabel:"Continuer",showSkip:!0})}function A(){const $=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),L=new Set(["EC"]),P=ne.filter(R=>v.includes(R.id)),q=P.some(R=>$.has(R.model)),z=P.some(R=>L.has(R.model)),F=Nt.filter(R=>R!=="Non renseigné");return w||fn(t,a).then(R=>{if(!R)return;w=R;const Y=b.querySelector("#ob-parcel-name");Y&&!Y._edited&&(Y.value=R)}),E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${w}" placeholder="Chargement…">
        </div>
        ${q?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${yi.map(R=>`<option>${R}</option>`).join("")}
          </select>
        </div>
        ${z?`
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
            ${bn.map(R=>`<option>${R}</option>`).join("")}
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
            ${F.map(R=>`<option>${R}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function T(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub"><strong>${w||"La parcelle"}</strong> a été créée avec succès.</p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function D(){const $=window.L;$&&setTimeout(()=>{const L=b.querySelector("#ob-parcel-map");if(!L||L._leaflet_id)return;o=$.map(L,{zoomControl:!0,attributionControl:!1}).setView([t,a],15),$.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(o),$.circleMarker([t,a],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(o);const P=$.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});n=$.marker([t+45e-5,a],{icon:P,draggable:!0}).addTo(o),n.on("dragend",()=>{const q=n.getLatLng();t=q.lat,a=q.lng}),o.on("click",q=>{t=q.latlng.lat,a=q.latlng.lng,n.setLatLng([t,a])}),o.invalidateSize()},50)}function j(){const $=window.L;$&&(s=t+45e-5,l=a,setTimeout(()=>{const L=b.querySelector("#ob-smv-map");if(!L||L._leaflet_id)return;c=$.map(L,{zoomControl:!0,attributionControl:!1}).setView([t,a],15),$.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(c),$.circleMarker([t,a],{radius:8,color:"#fff",weight:2,fillColor:"#E05252",fillOpacity:1}).addTo(c);const P=$.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#0172A4;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});p=$.marker([s,l],{icon:P,draggable:!0}).addTo(c),p.on("dragend",()=>{const q=p.getLatLng();s=q.lat,l=q.lng}),c.on("click",q=>{s=q.latlng.lat,l=q.latlng.lng,p.setLatLng([s,l])}),c.invalidateSize()},50))}const I={parcelMap:M,parcelSource:y,parcelData:x,parcelConfig:A,parcelDone:T};function m(){var L;const $=(L=I[f()])==null?void 0:L.call(I);$&&(b.innerHTML=$),C()}function k(){b.classList.add("m-ob-overlay--out"),setTimeout(()=>{b.remove(),e()},400)}function C(){var L,P,q,z,F;(L=b.querySelector("#ob-back"))==null||L.addEventListener("click",S),(P=b.querySelector("#ob-close"))==null||P.addEventListener("click",k),b.querySelectorAll("#ob-next").forEach(R=>R.addEventListener("click",g)),b.querySelectorAll("[data-psource]").forEach(R=>{R.addEventListener("click",()=>{d=R.dataset.psource,b.querySelectorAll("[data-psource]").forEach(Y=>Y.classList.toggle("m-ob-plan-card--on",Y===R))})}),b.querySelectorAll("[data-sensor-id]").forEach(R=>{R.addEventListener("change",()=>{const Y=parseInt(R.dataset.sensorId);R.checked?v.includes(Y)||v.push(Y):v=v.filter(te=>te!==Y)})}),(q=b.querySelector("#ob-skip-source"))==null||q.addEventListener("click",()=>{d="smv",g()});const $=b.querySelector("#ob-parcel-name");$&&$.addEventListener("input",R=>{R.target._edited=!0,w=R.target.value}),f()==="parcelMap"&&D(),f()==="parcelData"&&d==="smv"&&j(),(z=b.querySelector("#ob-see-parcel"))==null||z.addEventListener("click",k),(F=b.querySelector("#ob-finish"))==null||F.addEventListener("click",k)}m()}function gn(e){const i=document.getElementById("phone-screen");let t=0;const a=["sensorAdd","sensorDone"],n=document.createElement("div");n.id="sensor-creation-overlay",n.className="m-ob-overlay",i.appendChild(n);function o(){return a[t]}function s(){t++,v()}function l(){return ps({showBack:!1,btnLabel:"Enregistrer le capteur",showSkip:!1})}function p(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Capteur ajouté !</h2>
        <p class="m-ob-sub">Votre capteur a été enregistré avec succès.</p>
        <button class="m-ob-cta" id="ob-see-sensor" style="margin-top:32px"><i class="bi bi-broadcast"></i> Voir le capteur</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function c(){n.classList.add("m-ob-overlay--out"),setTimeout(()=>{n.remove(),e()},400)}function d(){var w,r,u,h;(w=n.querySelector("#ob-close"))==null||w.addEventListener("click",c),(r=n.querySelector("#ob-next"))==null||r.addEventListener("click",s),(u=n.querySelector("#ob-see-sensor"))==null||u.addEventListener("click",c),(h=n.querySelector("#ob-finish"))==null||h.addEventListener("click",c)}function v(){var u;const w={sensorAdd:l,sensorDone:p},r=(u=w[o()])==null?void 0:u.call(w);r&&(n.innerHTML=r),d()}v()}const ms={admin:100,adherent:1,new:41},vs="weenat-m-dash";function gt(){try{return JSON.parse(localStorage.getItem(vs))||{}}catch{return{}}}function Ht(e){try{localStorage.setItem(vs,JSON.stringify({...gt(),...e}))}catch{}}const xe=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls préférés",info:"Mes cumuls préférés.<br><br>Ajoutez ici les valeurs des cumuls qui sont importants pour vous en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures préférées",info:"Mes mesures préférées.<br><br>Ajoutez ici les indicateurs de vos parcelles ou capteurs qui vous intéressent en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"radar_pluie",title:"Radar de pluie",icon:"bi-cloud-rain-heavy",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function yn(e,i,t){var o;const a=document.getElementById("phone-screen");(o=document.querySelector(".m-winfo-overlay"))==null||o.remove();const n=document.createElement("div");n.className="m-winfo-overlay",n.innerHTML=`
    <div class="m-winfo-modal">
      <div class="m-winfo-hd">
        <span class="m-winfo-title">${e}</span>
        <button class="m-winfo-close" type="button"><i class="bi bi-x"></i></button>
      </div>
      <div class="m-winfo-gif">
        ${t?`<img src="${t}" alt="${e}">`:'<div class="m-winfo-gif-placeholder"><i class="bi bi-play-circle" style="font-size:28px;display:block;margin-bottom:6px"></i>GIF à venir</div>'}
      </div>
      <div class="m-winfo-body">${i}</div>
    </div>`,n.querySelector(".m-winfo-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",s=>{s.target===n&&n.remove()}),a.appendChild(n)}function Fe(e){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Re({title:e,body:i,doneLabel:t="Fermer",onDone:a}={}){var l;const n=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),s()}),o.addEventListener("click",p=>{p.target===o&&s()}),o}const Di=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function zi(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=Di[Math.floor(Math.random()*Di.length)],a=t.label==="Pluie"||t.label==="Averses",n=Math.round(8+Math.random()*8),o=Math.round(16+Math.random()*14),s=Array.from({length:24},(l,p)=>{const c=Math.sin(Math.PI*(p-6)/12),d=Math.round(n+(o-n)*Math.max(0,c)),v=a&&p>=8&&p<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:p,label:`${String(p).padStart(2,"0")}h`,temp:d,pluie:v,hum:Math.round(85-40*Math.max(0,c)),vent:Math.round(10+Math.random()*20),icon:v>0?"bi-cloud-rain-fill":p<7||p>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:a?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:n,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:o,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function Qt(e){const i=e.id,t=e.reserveHydrique||50,a=+((i*2.3+7)%32).toFixed(1),n=+((i*1.1+14)%14+10).toFixed(1),o=+((i*.6+1)%6).toFixed(1),s=Math.round(t*((i%5+1)/10)),l=Math.max(0,+(s+a-n-o).toFixed(0)),p=l<s?s-l:0;return{j0:s,j7:l,bilan:p}}const bt=4,Pt=5,_i=["#0172A4","#ff8500","#30d158","#bf5af2"],bs={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548"},ui={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol"},xn={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C"},Hi={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},$n=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function fs(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function wn(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const n=new Set(t);return i.filter(o=>o.parcelIds.includes(+e.slice(2))).forEach(o=>(Hi[o.model]||[]).forEach(s=>n.add(s))),[...n].filter(o=>o in ui)}const a=i.find(n=>n.id===+e.slice(2));return a?Hi[a.model]||[]:[]}function Sn(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let ke=[],Le=[];(()=>{const e=gt();if(e.catalog){const i=e.catalog.map(t=>t.id);xe.sort((t,a)=>{const n=i.indexOf(t.id),o=i.indexOf(a.id);return(n<0?999:n)-(o<0?999:o)}),e.catalog.forEach(t=>{const a=xe.find(n=>n.id===t.id);a&&(a.active=t.active)})}e.mesuresList&&(ke=e.mesuresList),e.cumulsList&&(Le=e.cumulsList)})();let Dt=null,zt=null;function hs(e){return ke.length>=bt?"max":ke.some(i=>i.subjectKey===e.subjectKey&&i.metricId===e.metricId&&i.period===e.period&&i.step===e.step)?"dup":(ke.push(e),Ht({mesuresList:ke}),Dt==null||Dt(),"ok")}function gs(e){return Le.length>=Pt?"max":(Le.push(e),Ht({cumulsList:Le}),zt==null||zt(),"ok")}function En(e,i,t){const a=[...e+i].reduce((s,l)=>s+l.charCodeAt(0),1),n=s=>(Math.sin(a*.07+s*.5)+Math.sin(a*.03+s*1.3))/2+.5,o={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(s,l)=>o.sparse&&n(l*3.7)>.28?0:Math.max(0,o.base+o.amp*n(l*.28+1.2)))}const kn=new Set(["pluie","etp"]);function Ln(e,i){var S;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,a=En(e.subjectKey,e.metricId,t),n=270,o=100,s=28,l=14,p=Math.max(...a,1),c=kn.has(e.metricId);let d,v="";for(let E=0;E<=2;E++){const M=Math.round(E/2*(o-l-4)+4);v+=`<line x1="${s}" y1="${M}" x2="${s+n}" y2="${M}" stroke="#E8E6E0" stroke-width=".5"/>`,v+=`<text x="${s-3}" y="${M+3}" text-anchor="end" font-size="8" fill="#636366">${+(p*(1-E/2)).toFixed(p<5?1:0)}</text>`}const w=Sn(e.period,e.step),r=w.map((E,M)=>`<text x="${s+Math.round(M/(w.length-1)*n)}" y="${o+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${E}</text>`).join(""),u=JSON.stringify(a.map(E=>+E.toFixed(2))),h=bs[e.metricId]||e.color,b=e.metricId==="pluie"?"#2E75B6":h;if(c){const E=Math.max(1,n/t*.7),M=a.map((y,x)=>{const A=Math.round(y/p*(o-l-4)),T=s+Math.round(x/(t-1)*n)-E/2,D=o-l-A;return`<rect x="${T.toFixed(1)}" y="${D.toFixed(1)}" width="${E.toFixed(1)}" height="${A.toFixed(1)}" fill="${b}" opacity=".85" rx="1"/>`}).join("");d=`<svg viewBox="0 0 ${s+n} ${o+6}" style="width:100%;display:block;overflow:visible">${v}${M}${r}</svg>`}else{const E=a.map((M,y)=>`${s+Math.round(y/(t-1)*n)},${o-l-Math.round(M/p*(o-l-4))}`).join(" ");d=`<svg viewBox="0 0 ${s+n} ${o+6}" style="width:100%;display:block;overflow:visible">
      ${v}
      <polyline points="${E}" fill="none" stroke="${h}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${o}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${r}
    </svg>`}const f=(S=e.subjectKey)!=null&&S.startsWith("s-")?e.subjectKey.slice(2):null,g=f?`<button class="m-wf-view-data" data-sensor-id="${f}" data-period="${e.period}" data-step="${e.step}" style="display:flex;align-items:center;gap:4px;margin-top:8px;padding:6px 10px;border:none;background:rgba(0,122,255,.08);border-radius:8px;color:#007AFF;font-size:12px;font-weight:600;cursor:pointer;width:100%;justify-content:center">Voir les données <i class="bi bi-fullscreen" style="font-size:11px"></i></button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?b:h}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${u}' style="position:relative;margin-top:4px">
        ${d}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${g}
    </div>`}function Bi(e,i){const t=ke.length>=bt,a=e.map(l=>`<option value="p-${l.id}">${wt(l)}</option>`).join(""),n=i.filter(l=>l.parcelIds.length>0).map(l=>`<option value="s-${l.id}">${St(l,e)}</option>`).join(""),o=fs("7d");return`
    <div id="msr-list">${ke.length?ke.map(Ln).join(""):'<div class="m-wf-empty">Ajoutez ici les mesures que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${ke.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${bt}/${bt})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez une mesure pour en ajouter une nouvelle.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="msr-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${a}</optgroup>
        ${n?`<optgroup label="Capteurs">${n}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period">
          ${$n.map(l=>`<option value="${l.id}"${l.id==="7d"?" selected":""}>${l.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${o.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Ajouter la mesure</button>
    </div>`}`}function Cn(e,i){const t=new Date().toISOString().split("T")[0],a=new Date;a.setDate(a.getDate()+7);const n=a.toISOString().split("T")[0];return ce.filter(o=>!o.real&&o.iso>=t&&o.iso<=n&&o.plotId===e.id).reduce((o,s)=>o+s.mm,0)}const Fi=9;function ct(e,i=!1,t=gt().sensorlessEnabled??!0){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const a=[],n=e.slice(),o=(b,f)=>Qt(f).bilan-Qt(b).bilan,s=[...a.flatMap(b=>b.ids.map(f=>e.find(g=>g.id===f)).filter(Boolean).sort(o)),...n.slice().sort(o)],l=i?s:s.slice(0,Fi),p=new Set(l.map(b=>b.id)),c=s.length-l.length,d=b=>{const f=ne.some(A=>A.parcelIds.includes(b.id)&&(A.model.startsWith("CHP")||A.model.startsWith("CAPA")||A.model.startsWith("EC"))),{j0:g,j7:S,bilan:E}=Qt(b),M=Cn(b),y=f?g:'<span style="color:#aeaeb2">—</span>',x=f?S:'<span style="color:#aeaeb2">—</span>';return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${b.id}">${b.name}</button>
      <div class="m-bh-td">${y}</div>
      <div class="m-bh-td">${x}</div>
      ${t?`<div class="m-bh-td m-bh-td--reco">${E>0?E:"—"}</div>`:""}
      <div class="m-bh-td m-bh-td--planif">${M>0?M:"—"}</div>`};let v="";for(const b of a){const f=b.ids.map(g=>e.find(S=>S.id===g)).filter(Boolean).filter(g=>p.has(g.id)).sort(o);f.length&&(v+=`<div class="m-bh-group-row" style="background:rgba(0,0,0,.035)">⬡ ${b.label}</div>`,v+=f.map(d).join(""))}const w=n.filter(b=>p.has(b.id)).sort(o);w.length&&a.length&&(v+='<div class="m-bh-group-row">⬡ Autres parcelles</div>'),v+=w.map(d).join("");const r=t?"1fr 38px 38px 46px 46px":"1fr 38px 38px 46px",u=t?2:1,h=s.length>Fi?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${c} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${r}">
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
    ${h}
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
    </div>`}const ei=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function An(e,i,t,a){Object.fromEntries(ve.map(r=>[r.id,r]));const n=e.map(r=>`<option value="p-${r.id}">${ei(wt(r))}</option>`).join(""),o=i.map(r=>`<option value="s-${r.id}">${ei(St(r,e))}</option>`).join(""),s=`
    <optgroup label="Parcelles">${n}</optgroup>
    ${o?`<optgroup label="Capteurs">${o}</optgroup>`:""}`,l=(r,u)=>{const h=`${r.dayLabel.charAt(0).toUpperCase()+r.dayLabel.slice(1)} · ${r.dateStr}`;return`
    <div class="m-prev-card" data-day="${u}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${r.icon}" style="color:${r.color};font-size:26px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${h}</span>
          <span class="m-prev-card-cond">${r.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-tbl">
        <div class="m-prev-tbl-cell">
          <i class="bi bi-cloud-rain" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${r.pluie}</span>
          <span class="m-prev-tbl-unit">mm</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-thermometer-half" style="color:#E05252"></i>
          <span class="m-prev-tbl-val">${r.tMin}–${r.tMax}</span>
          <span class="m-prev-tbl-unit">°C</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-droplet" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${r.humMoy}</span>
          <span class="m-prev-tbl-unit">%</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-wind" style="color:#636366"></i>
          <span class="m-prev-tbl-val">${r.ventMoy}/<em>${r.ventRafales}</em></span>
          <span class="m-prev-tbl-unit">km/h</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-moisture" style="color:#24B066"></i>
          <span class="m-prev-tbl-val">${r.etp}</span>
          <span class="m-prev-tbl-unit">ETP</span>
        </div>
      </div>
    </div>`},p=t.slice(0,3).map(l).join(""),c=t.slice(3).map(l).join(""),d=ve.find(r=>r.id===(a==="admin"?100:1)),v=(d==null?void 0:d.adresse)||"";return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${v?`<option value="addr">${ei(`${d.name} — ${d.ville||v}`)}</option>`:""}${s}</select>
    <div class="m-prev-cards">
      ${p}
      <div class="m-prev-extra" style="display:none">${c}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Ne=[{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:null},{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],ys=new Set(Ne.flatMap(e=>e.needsModels||[]));function ti(e){if(!e)return Ne;if(e.startsWith("s-")){const t=ne.find(a=>a.id===+e.slice(2));return t?Ne.filter(a=>a.needsModels===null||a.needsModels.includes(t.model)):Ne}const i=new Set(ne.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Ne.filter(t=>t.needsModels===null||t.needsModels.some(a=>i.has(a)))}const Ri={etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#FEE7B4"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function Mn(){return Le.length?Le.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
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
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function Oi(e,i,t){if(!e||!i)return null;const a=Ne.find(s=>s.id===t)||Ne[0],n=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),o=e.split("").reduce((s,l)=>s+l.charCodeAt(0),0)+n;return+(a.base+o%(a.amp*10)/10).toFixed(1)}function Ni(e,i){const t=Le.length>=Pt,a=`${new Date().getFullYear()}-01-01`,n=i.filter(p=>p.parcelIds.length>0&&ys.has(p.model)),o=e.map(p=>`<option value="p-${p.id}">${wt(p)}</option>`).join(""),s=n.map(p=>`<option value="s-${p.id}">${St(p,e)}</option>`).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${Le.length?Mn():'<div class="m-wf-empty">Ajoutez ici les cumuls que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Le.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${Pt}/${Pt})</div>
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
          <input type="date" class="m-wf-date" id="cumuls-from" value="${a}">
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Ajouter le cumul</button>
    </div>`}`}function Tn(e){const i=e.id,t=new Date;let a,n;i%5===3?(a=0,n=(t.getHours()+2+i%3*3)%24):(a=(i*2+1)%6+1,n=6+i%5*2);const o=2+i%3,s=new Date(t);s.setDate(s.getDate()+a);const l=a===0?"Aujourd'hui":s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),p=a*1440+n*60-(t.getHours()*60+t.getMinutes());return{winDateStr:l,winHour:n,winDur:o,minutesFromNow:p}}const In="#1a9e40";function jn(e){const t=e.filter(n=>n.crop).map(n=>({p:n,d:Tn(n)})).filter(({d:n})=>n.minutesFromNow>=0&&n.minutesFromNow<=1440).sort((n,o)=>n.d.minutesFromNow-o.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:n,d:o})=>{const s=String(o.winHour).padStart(2,"0"),l=String((o.winHour+o.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${n.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${n.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${In};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
            <i class="bi bi-check2-circle" style="font-size:12px"></i>
            ${o.winDateStr} · ${s}h–${l}h
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const xs="weenat-m-traitements";function ft(){try{return JSON.parse(localStorage.getItem(xs))||[]}catch{return[]}}function $i(e){localStorage.setItem(xs,JSON.stringify(e))}function qn(e,i){let t=new Set;const a=[],n=new Date().toISOString().split("T")[0];function o(){return Vt(a,e,t)}function s(c){const d=t.size,v=c.querySelector(".irr-summary"),w=c.querySelector(".irr-save-btn");!v||!w||(v.textContent=d===0?"":`${d} parcelle${d>1?"s":""}`,w.disabled=d===0)}function l(c){var d;(d=c.querySelector("#irr-sel-all"))==null||d.addEventListener("click",()=>{const v=e.every(w=>t.has(w.id));e.forEach(w=>v?t.delete(w.id):t.add(w.id)),c.querySelector("#trait-sel-list").innerHTML=o(),l(c),s(c)}),c.querySelectorAll(".irr-group-card").forEach(v=>{v.addEventListener("click",()=>{const w=v.dataset.gids.split(",").map(Number),r=w.every(u=>t.has(u));w.forEach(u=>r?t.delete(u):t.add(u)),c.querySelector("#trait-sel-list").innerHTML=o(),l(c),s(c)})}),c.querySelectorAll(".irr-plot-row").forEach(v=>{v.addEventListener("click",()=>{const w=+v.dataset.pid;t.has(w)?t.delete(w):t.add(w),c.querySelector("#trait-sel-list").innerHTML=o(),l(c),s(c)})})}const p=st(ye(`
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
  `));l(p),s(p),p.querySelector("#trait-back").addEventListener("click",me),p.querySelector(".irr-save-btn").addEventListener("click",()=>{const c=p.querySelector("#trait-date").value||n,d=p.querySelector("#trait-produit").value.trim()||"—",v=p.querySelector("#trait-dose").value.trim()||"—",w=ft();w.unshift({id:Date.now(),date:c,produit:d,dose:v,plotIds:[...t]}),$i(w),me(),i("Traitement enregistré")})}function Pn(e,i,t){const a=i==="adherent"?ms.adherent:null,n=a!==null?le.filter(c=>c.orgId===a):le;let o=null;const s=ye(`
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
          ${n.map(c=>`<option value="${c.id}">${c.name}</option>`).join("")}
        </select>
      </div>
      <div id="trait-cal-content" style="padding:6px 16px 16px"></div>
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",me);const l=c=>{const[d,v,w]=c.split("-");return`${w}/${v}/${d}`};function p(){const c=s.querySelector("#trait-cal-content");let d=ft();if(o!==null&&(d=d.filter(v=>(v.plotIds||[]).includes(o))),!d.length){c.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}c.innerHTML=d.map(v=>{const w=(v.plotIds||[]).map(r=>{var u;return(u=e.find(h=>h.id===r))==null?void 0:u.name}).filter(Boolean);return`
        <div class="m-trait-cal-card" data-id="${v.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${l(v.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${w.length} parcelle${w.length>1?"s":""}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${v.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${v.dose}</div>
          ${w.length?`<div style="font-size:11px;color:#8e8e93;margin-top:6px">${w.join(", ")}</div>`:""}
        </div>`}).join(""),c.querySelectorAll(".m-trait-cal-card").forEach(v=>{v.addEventListener("click",()=>{const w=+v.dataset.id,u=ft().find(g=>g.id===w);if(!u)return;const h=(u.plotIds||[]).map(g=>{var S;return(S=e.find(E=>E.id===g))==null?void 0:S.name}).filter(Boolean),b=document.createElement("div");b.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${l(u.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${u.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${u.dose}</div>
            ${h.length?`<div style="font-size:12px;color:#8e8e93">${h.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const f=Re({title:"Traitement",body:b,doneLabel:"Fermer",onDone:()=>{}});b.querySelector("#tcal-del").addEventListener("click",()=>{const g=ft().filter(S=>S.id!==w);$i(g),f.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{f.remove(),p()},280),t("Traitement supprimé")}),b.querySelector("#tcal-edit").addEventListener("click",()=>{f.classList.remove("m-sheet-overlay--show"),setTimeout(()=>f.remove(),280),Dn(u,e,t,p)})})})}s.querySelector("#trait-filter").addEventListener("change",c=>{o=c.target.value?+c.target.value:null,p()}),p()}function Dn(e,i,t,a){const n=document.createElement("div");n.innerHTML=`
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
    </div>`,Re({title:"Modifier le traitement",body:n,doneLabel:"Enregistrer",onDone:()=>{const o=ft(),s=o.findIndex(l=>l.id===e.id);s!==-1&&(o[s].date=n.querySelector("#tedit-date").value||e.date,o[s].produit=n.querySelector("#tedit-produit").value.trim()||e.produit,o[s].dose=n.querySelector("#tedit-dose").value.trim()||e.dose,$i(o)),t("Traitement modifié"),a()}})}const zn={"capteur déplacé":"M12 2c-2.117 0-3.98.741-5.588 2.225C4.803 5.708 4 7.699 4 10.199c0 1.6.6 3.322 1.8 5.164C7 17.205 8.818 19.2 11.25 21.35a1.2 1.2 0 0 0 .75.275 1.2 1.2 0 0 0 .75-.275c2.433-2.15 4.25-4.145 5.45-5.987C19.4 13.521 20 11.8 20 10.2c0-2.5-.803-4.491-2.412-5.974C15.98 2.74 14.117 2 12 2zm0 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 7v3a.969.969 0 0 1-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287A.966.966 0 0 1 11 10V7c0-.283.095-.52.287-.713A.969.969 0 0 1 12 6zm0 7a.97.97 0 0 1 .713.287c.191.192.287.43.287.713s-.096.522-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287c-.192-.191-.287-.43-.287-.713s.095-.52.287-.713A.969.969 0 0 1 12 13z","émissions interrompues":"M19.075 21.9 8.125 10.975c-.033.167-.063.333-.087.5S8 11.817 8 12c0 .383.046.746.138 1.087.091.342.229.663.412.963.15.25.217.517.2.8a1.04 1.04 0 0 1-.3.7c-.2.2-.438.292-.713.275s-.487-.133-.637-.35c-.35-.5-.62-1.042-.813-1.625A5.889 5.889 0 0 1 6 12a5.985 5.985 0 0 1 .575-2.575L5.1 7.95c-.35.6-.62 1.238-.813 1.913A7.79 7.79 0 0 0 4 12a7.855 7.855 0 0 0 1.675 4.9c.183.233.27.487.262.762-.008.275-.112.513-.312.713a.916.916 0 0 1-1.375-.05c-.7-.867-1.25-1.837-1.65-2.913S2 13.2 2 12c0-1.033.146-2.008.437-2.925A10.71 10.71 0 0 1 3.65 6.5L2.075 4.925a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725a.948.948 0 0 1 .7-.275c.283 0 .525.092.725.275l16.975 17c.183.183.275.417.275.7s-.092.517-.275.7c-.2.2-.442.3-.725.3s-.517-.1-.7-.3zm1.275-4.4-1.45-1.45c.35-.6.62-1.238.813-1.913S20 12.75 20 12a7.854 7.854 0 0 0-1.675-4.9c-.183-.233-.27-.487-.263-.762s.113-.513.313-.713a.916.916 0 0 1 1.375.05c.7.867 1.25 1.833 1.65 2.9.4 1.067.6 2.208.6 3.425 0 1.017-.146 1.988-.438 2.913S20.867 16.7 20.35 17.5zm-2.925-2.925-1.55-1.55c.033-.167.062-.333.087-.5S16 12.183 16 12c0-.383-.046-.746-.138-1.088s-.229-.662-.412-.962a1.367 1.367 0 0 1-.2-.8 1.04 1.04 0 0 1 .3-.7.93.93 0 0 1 .712-.287.76.76 0 0 1 .638.337c.35.483.62 1.025.813 1.625.191.6.287 1.225.287 1.875a5.985 5.985 0 0 1-.575 2.575z","capteur couché":"M6 5a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h7a1 1 0 1 0 0-2h-7V7a2 2 0 0 0-2-2H6zm3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 16v2h20v-2H2z","cuillère bloquée":"M17.615 3.25c-.268 0-.537.103-.742.309L3.508 16.922a1.05 1.05 0 0 0 0 1.486l.031.027-.002.002.05.041c.459.438 1.055.718 1.733.813.678.094 1.416 0 2.139-.274a5.793 5.793 0 0 0 2.018-1.322 5.802 5.802 0 0 0 1.322-2.02c.411-1.087.411-2.189 0-3.074l7.558-7.558a1.047 1.047 0 0 0 0-1.485 1.046 1.046 0 0 0-.742-.308zm-1.037 8.416a.473.473 0 0 0-.35.137l-1.05 1.05a.435.435 0 0 0-.106.163.555.555 0 0 0-.031.187c0 .067.01.13.031.188.02.058.055.112.105.162l1.051 1.05a.473.473 0 0 0 .35.137.472.472 0 0 0 .488-.488.474.474 0 0 0-.138-.35l-.2-.199h.037c.834 0 1.542.292 2.125.875.584.584.875 1.292.875 2.125 0 .675-.198 1.274-.593 1.799a3.032 3.032 0 0 1-1.532 1.088.527.527 0 0 0-.267.187.465.465 0 0 0-.108.287c0 .167.06.3.176.4.117.1.254.13.412.089a3.912 3.912 0 0 0 2.1-1.426 3.882 3.882 0 0 0 .812-2.424c0-1.116-.387-2.063-1.162-2.838-.775-.775-1.72-1.162-2.838-1.162h-.037l.2-.201a.474.474 0 0 0 .138-.35.473.473 0 0 0-.488-.486zm-2.563 2.344a.462.462 0 0 0-.337.156c-.292.358-.516.75-.674 1.18-.159.429-.239.882-.239 1.357 0 .917.271 1.728.813 2.432a3.922 3.922 0 0 0 2.1 1.418.442.442 0 0 0 .414-.082.479.479 0 0 0 .173-.393.532.532 0 0 0-.375-.488 2.946 2.946 0 0 1-1.53-1.08 2.939 2.939 0 0 1-.595-1.807c0-.341.054-.666.163-.974.108-.309.262-.594.462-.852a.565.565 0 0 0 .131-.375.477.477 0 0 0-.142-.336.48.48 0 0 0-.364-.156z"},Vi=new Set(["P+","PT","P"]);function wt(e){return[e.name,e.crop].filter(Boolean).join(" — ")}function St(e,i){var o,s;const t=Object.fromEntries(ve.map(l=>[l.id,l])),a=$s[e.model]||e.model,n=((o=(e.parcelIds||[]).map(l=>i.find(p=>p.id===l)).filter(Boolean).find(l=>l.ville))==null?void 0:o.ville)||((s=t[e.orgId])==null?void 0:s.ville)||"";return[a,e.serial,n].filter(Boolean).join(" — ")}const $s={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function _n(e,i){const t=Object.fromEntries(ve.map(n=>[n.id,n])),a=i.filter(n=>n.event?(Array.isArray(n.event)?n.event:[n.event]).filter(l=>l!=="cuillère bloquée"||Vi.has(n.model)).length>0:!1);return a.length?`<div class="m-w-list">${a.map(n=>{var d;const o=e.find(v=>(n.parcelIds||[]).includes(v.id)),s=(o==null?void 0:o.ville)||((d=t[n.orgId])==null?void 0:d.ville)||"",p=(Array.isArray(n.event)?n.event:[n.event]).filter(v=>v!=="cuillère bloquée"||Vi.has(n.model)).map(v=>{const w=zn[v]||"";return`<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:#ff3b30;border-radius:6px;flex-shrink:0" title="${v}"><svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="${w}"/></svg></span>`}).join(""),c=$s[n.model]||n.model;return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${n.id}">
      <div style="flex:1;min-width:0">
        <div class="m-w-row-name">${c}</div>
        <div style="font-size:12px;color:#636366;margin-top:1px">${n.model} — ${n.serial}</div>
        ${s?`<div style="font-size:11px;color:#8e8e93;margin-top:1px">${s}</div>`:""}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;width:61px;justify-content:flex-end">${p}</div>
        <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const ws={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},Hn={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Bn(e){const i=e.id,t=ws[e.crop]||Hn,a=i%t.stages.length,n=(i*2+5)%18+4,o=new Date("2026-04-18");o.setDate(o.getDate()+n);const s=o.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[a],nextStage:t.nextStages[a],variety:t.varieties[i%t.varieties.length],nextDateStr:s,daysToNext:n}}function Fn(e){const i=e.filter(n=>n.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const n of i)t[n.crop]||(t[n.crop]=[]),t[n.crop].push(n);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([n,o])=>{const s=o.map(l=>{const p=!!ws[l.crop],c=p?Bn(l):null,d=p&&c.variety!=="—"?c.variety:"",v=p?c.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${l.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${l.name}</div>
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
    </details>`}).join("")}`}const Ss="weenat-m-notes";function Ke(){try{return JSON.parse(localStorage.getItem(Ss))||[]}catch{return[]}}function ii(e){localStorage.setItem(Ss,JSON.stringify(e))}function Wi(e){const i=Ke(),t=f=>{const[g,S,E]=f.split("-");return`${E}/${S}/${g}`},a=f=>f.length>70?f.slice(0,70)+"…":f,n=(f,g)=>{const S=f.text.length>70,E=(f.imageIds||[]).length,M=E>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${E} photo${E>1?"s":""}</span>`:"",y=f.linkedType?`<span style="font-size:10px;background:${f.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${f.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${f.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${f.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${g}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${S||E>0||f.linkedType?"pointer":"default"}">
        <button class="m-note-del m-del-btn" data-idx="${g}" style="position:absolute;top:8px;right:8px">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span>${t(f.date)}${f.time?" · "+f.time:""}</span>
          ${f.auteur?`<span style="color:#636366;font-weight:500">${f.auteur}</span>`:""}
          ${f.role?`<span style="font-size:10px;background:${f.role==="conseiller"?"#eef4ff":"#f2f2f7"};color:${f.role==="conseiller"?"#3a7bd5":"#636366"};border-radius:4px;padding:1px 5px;font-weight:500">${f.role==="conseiller"?"Conseiller":"Membre"}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${a(f.text)}</div>
        ${y||M?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${y}${M}</div>`:""}
      </div>`},o=i.slice(0,5),s=o.length?o.map((f,g)=>n(f,g)).join(""):"",l=new Date,p=l.toISOString().slice(0,10),c=`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`,d=ve.find(f=>f.id===(e==="admin"?100:1)),v=d?`${d.prenomProprietaire} ${d.nomProprietaire}`:"",w=d==null?void 0:d.id,r=e==="adherent"?le.filter(f=>f.orgId===w):le,u=e==="adherent"?ne.filter(f=>f.parcelIds.some(g=>r.some(S=>S.id===g))):ne,h=r.map(f=>`<option value="p-${f.id}">${wt(f)}</option>`).join(""),b=u.map(f=>`<option value="s-${f.id}">${St(f,r)}</option>`).join("");return`
    ${s?`<div id="notes-list" style="margin-bottom:12px">${s}</div>`:""}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:8px">
      <select id="notes-link" class="m-sheet-input">
        <option value="">— Sans lien —</option>
        <optgroup label="Parcelles">${h}</optgroup>
        <optgroup label="Capteurs">${b}</optgroup>
      </select>
      <textarea id="notes-input" class="m-sheet-input" placeholder="Votre note…" rows="2" style="resize:none"></textarea>
      <div style="display:flex;gap:6px">
        <input type="date" id="notes-date" class="m-sheet-input" value="${p}" style="flex:1">
        <input type="time" id="notes-time" class="m-sheet-input" value="${c}" style="flex:1">
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
    <button id="notes-view" class="m-btn m-btn--secondary">Voir les notes${i.length?` (${i.length})`:""}</button>`}function Rn(e){const i=le.map(n=>n.orgId).filter((n,o,s)=>s.indexOf(n)===o&&n!==100).length,t=ne.length,a=le.length;return`
    <div class="m-reseau-name">${Be.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${a}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${Be.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${Be.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${Be.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${Be.siege.adresse}, ${Be.siege.codePostal} ${Be.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function On(){return`
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
    </a>`}const Ji=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Nn(){var c;const e=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),a=i.querySelector("#chat-input"),n=i.querySelector("#chat-send"),o=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",o),i.addEventListener("click",d=>{d.target===i&&o()});function s(d,v){const w=document.createElement("div");w.className=`m-chat-msg m-chat-msg--${v}`,w.innerHTML=`<div class="m-chat-bubble">${d}</div>`,t.appendChild(w),t.scrollTop=t.scrollHeight}function l(){const d=document.createElement("div");return d.className="m-chat-msg m-chat-msg--bot m-chat-typing",d.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(d),t.scrollTop=t.scrollHeight,d}function p(){const d=a.value.trim();if(!d)return;s(d,"user"),a.value="",n.disabled=!0;const v=l();setTimeout(()=>{v.remove();const w=Ji[Math.floor(Math.random()*Ji.length)];s(w,"bot"),n.disabled=!1,a.focus()},1200+Math.random()*800)}n.addEventListener("click",p),a.addEventListener("keydown",d=>{d.key==="Enter"&&p()}),setTimeout(()=>a.focus(),350)}function Vn(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const a=ms[i]||1,n=a===100?le:le.filter(m=>m.orgId===a),o=new Set(n.map(m=>m.id)),s=ne.filter(m=>m.parcelIds.some(k=>o.has(k)));let l=zi(),p=null,c=null;function d(){return i!=="admin"?n:p===null?le:le.filter(m=>m.orgId===p)}function v(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${ve.filter(k=>k.id!==100).sort((k,C)=>k.name.localeCompare(C.name)).map(k=>`<option value="${k.id}">${k.name}</option>`).join("")}
    </select>`}const w=gt(),r=new Set(["mon_reseau","support"]),u=new Set(w.collapsed??xe.map(m=>m.id).filter(m=>!r.has(m)));function h(){Ht({catalog:xe.map(m=>({id:m.id,active:m.active})),collapsed:[...u],mesuresList:ke,cumulsList:Le})}function b(){return`
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
      </div>`}function f(){return`
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
      </div>`}function g(){const m=window.L;m&&setTimeout(()=>{const k=t.querySelector("#radar-map");if(!k||c)return;const C=n[0]?[n[0].lat,n[0].lng]:[47.5,-1.5];c=m.map(k,{zoomControl:!0,attributionControl:!1,tap:!1}).setView(C,7),m.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:14}).addTo(c);const $=t.querySelector("#radar-slider"),L=t.querySelector("#radar-time-lbl"),P=t.querySelector("#radar-play-btn"),q=t.querySelector("#radar-loading");let z=[],F=0,R=0,Y=null,te=!1,be=null;function Te($e){if(!z.length)return;Y&&c.removeLayer(Y);const Ie=z[$e];Y=m.tileLayer(`https://tilecache.rainviewer.com${Ie.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:.65,zIndex:10}).addTo(c);const De=new Date(Ie.time*1e3);L.textContent=De.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),L.style.color=$e>=F?"#007aff":"#8e8e93",$.value=$e}$.addEventListener("input",()=>{R=+$.value,Te(R)}),P.addEventListener("click",()=>{te=!te,P.innerHTML=te?'<i class="bi bi-pause-fill"></i>':'<i class="bi bi-play-fill"></i>',te?be=setInterval(()=>{R=(R+1)%z.length,Te(R)},500):clearInterval(be)}),fetch("https://api.rainviewer.com/public/weather-maps.json").then($e=>$e.json()).then($e=>{var Ye,Ze;q==null||q.remove();const Ie=((Ye=$e.radar)==null?void 0:Ye.past)||[],De=((Ze=$e.radar)==null?void 0:Ze.nowcast)||[];z=[...Ie,...De],F=Ie.length,z.length&&($.max=z.length-1,R=Math.max(0,F-1),Te(R))}).catch(()=>{q&&(q.textContent="Radar indisponible")})},50)}function S(m,k){const C=m.fixed?"":`<button class="m-widget-menu" data-widget="${m.id}" type="button">•••</button>`,$=u.has(m.id);return`
      <div class="m-widget${$?" m-widget--collapsed":""}" data-widget="${m.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${m.id}">
          <div class="m-widget-icon-wrap" style="background:${m.color}20;color:${m.color}">
            <i class="bi ${m.icon}"></i>
          </div>
          <span class="m-widget-title">${m.title}</span>
          ${m.info?`<button class="m-widget-info" data-widget="${m.id}" type="button"><i class="bi bi-info-circle"></i></button>`:""}
          <i class="bi ${$?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${m.fixed?"0":"8px"}"></i>
          ${C}
        </div>
        <div class="m-widget-bd" style="${$?"display:none":""}">${k}</div>
      </div>`}function E(){c==null||c.remove(),c=null,l=zi();const m=new Set(["previsions","support"]),k=xe.filter($=>$.active&&!$.fixed&&(i!=="new"||m.has($.id))),C=xe.filter($=>$.active&&$.fixed&&(i!=="new"||m.has($.id)));t.innerHTML=`
      ${i==="new"?b():'<button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>'}
      ${[...k,...C].map($=>{let L="";return $.id==="bilan_hydrique"?L=v()+ct(d()):$.id==="previsions"?L=An(n,s,l,i):$.id==="cumuls"?L=Ni(n,s):$.id==="temps_reel"?L=Bi(n,s):$.id==="traitements"?L=jn(n):$.id==="evenements"?L=_n(n,s):$.id==="cultures"?L=Fn(n):$.id==="notes"?L=Wi(i):$.id==="radar_pluie"?L=f():$.id==="mon_reseau"?L=Rn(i):$.id==="support"&&(L=On()),S($,L)}).join("")}
      <div style="height:24px"></div>`,T(),u.has("radar_pluie")||g()}const M='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function y(m,k){const C=m[k],$=`${C.dayLabel.charAt(0).toUpperCase()+C.dayLabel.slice(1)} · ${C.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${M}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${k===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${C.icon}" style="color:${C.color};font-size:22px"></i><span class="m-d-name">${$}</span></div>
          <button class="m-day-nav" id="next-day" ${k>=m.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${C.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${C.tMin} / ${C.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${C.ventMoy}/${C.ventRafales}</strong></div>
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
            ${C.hours.map((L,P)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${P<C.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${L.label}</span>
                <i class="bi ${L.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${L.pluie>0?`${L.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${L.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${L.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${L.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function x(m,k,C){var $,L;m.querySelector(".m-detail-back").addEventListener("click",me),($=m.querySelector("#prev-day"))==null||$.addEventListener("click",()=>{m.innerHTML=y(k,C-1),x(m,k,C-1)}),(L=m.querySelector("#next-day"))==null||L.addEventListener("click",()=>{m.innerHTML=y(k,C+1),x(m,k,C+1)})}function A(m,k){const C=ye(y(m,k));x(C,m,k)}function T(){var Te,$e,Ie,De,Ye,Ze,Lt;(Te=e.querySelector(".m-navbar-action"))==null||Te.addEventListener("click",j),($e=t.querySelector("#dash-add-widget-btn"))==null||$e.addEventListener("click",I),(Ie=t.querySelector('[data-action="add-parcel"]'))==null||Ie.addEventListener("click",()=>hn(()=>E())),(De=t.querySelector('[data-action="add-sensor"]'))==null||De.addEventListener("click",()=>gn(()=>E())),t.querySelectorAll(".m-widget-info").forEach(N=>{N.addEventListener("click",Q=>{Q.stopPropagation();const X=xe.find(se=>se.id===N.dataset.widget);X&&yn(X.title,X.info,X.gif)})}),t.querySelectorAll(".m-widget-hd--toggle").forEach(N=>{N.addEventListener("click",Q=>{if(Q.target.closest(".m-widget-menu")||Q.target.closest(".m-widget-info"))return;const X=N.dataset.collapse;u.has(X)?u.delete(X):u.add(X),h(),E()})}),(Ye=t.querySelector("#trait-btn-saisir"))==null||Ye.addEventListener("click",()=>{qn(n,Fe)}),(Ze=t.querySelector("#trait-btn-voir"))==null||Ze.addEventListener("click",()=>{Pn(n,i,Fe)}),t.querySelectorAll(".m-trait-card").forEach(N=>{N.addEventListener("click",()=>{const Q=le.find(X=>X.id===+N.dataset.plotId);if(Q){const X=ne.filter(se=>se.parcelIds.includes(Q.id)).map(se=>se.id);ge(()=>Promise.resolve().then(()=>si),void 0).then(se=>se.initParcelDetail(Q,X,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(N=>{N.addEventListener("click",()=>{const Q=s.find(X=>X.id===+N.dataset.sensorId);Q&&ge(()=>Promise.resolve().then(()=>Rt),void 0).then(X=>X.initSensorDetail(Q,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(N=>{N.addEventListener("click",()=>{const Q=le.find(X=>X.id===+N.dataset.plotId);if(Q){const X=ne.filter(se=>se.parcelIds.includes(Q.id)).map(se=>se.id);ge(()=>Promise.resolve().then(()=>si),void 0).then(se=>se.initParcelDetail(Q,X,"params","Tableau de bord"))}})});function m(){t.querySelectorAll(".m-bh-plot-link").forEach(N=>{N.addEventListener("click",()=>{const Q=le.find(X=>X.id===+N.dataset.plotId);if(Q){const X=ne.filter(se=>se.parcelIds.includes(Q.id)).map(se=>se.id);ge(()=>Promise.resolve().then(()=>si),void 0).then(se=>se.initParcelDetail(Q,X,"widgets","Tableau de bord"))}})})}function k(){var N,Q,X;(N=t.querySelector("#bh-btn-calendar"))==null||N.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(se=>se.openCalendar(n,""))}),(Q=t.querySelector("#bh-btn-irrigation"))==null||Q.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(se=>se.openIrrigationSaisie(n,Fe))}),(X=t.querySelector("#bh-btn-strategie"))==null||X.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(se=>se.openIrrigationStrategie(n,Fe))})}function C(){const N=t.querySelector("#bh-expand");N&&N.addEventListener("click",()=>{const Q=N.dataset.expanded==="true",X=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');X&&(X.innerHTML=v()+ct(d(),!Q),m(),k(),C(),i==="admin"&&$())})}function $(){const N=t.querySelector("#bh-org-select");N&&(N.value=p===null?"all":String(p),N.addEventListener("change",()=>{p=N.value==="all"?null:+N.value;const Q=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');Q&&(Q.innerHTML=v()+ct(d()),m(),k(),C(),$())}))}m(),k(),C(),i==="admin"&&$();function L(){const N=t.querySelector('[data-widget="cumuls"] .m-widget-bd');N&&(N.innerHTML=Ni(n,s),P())}zt=L;function P(){var O,V,G,B;const N=()=>{var W;const _=(W=t.querySelector("#cumuls-metric"))==null?void 0:W.value,H=t.querySelector("#cumuls-thresholds");H&&(_==="hf"?H.innerHTML=`
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`:_==="dj"?H.innerHTML=`
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`:H.innerHTML="")},Q=()=>{var J;const _=t.querySelector("#cumuls-metric"),H=(J=t.querySelector("#cumuls-subject"))==null?void 0:J.value;if(!_)return;const W=ti(H);_.innerHTML='<option value="">— Métrique —</option>'+W.map(ae=>`<option value="${ae.id}">${ae.label}</option>`).join(""),_.disabled=!H||!W.length,N(),X()},X=()=>{var ue,ie,oe;const _=t.querySelector("#cumuls-create"),H=t.querySelector("#cumuls-date-err"),W=(ue=t.querySelector("#cumuls-subject"))==null?void 0:ue.value,J=(ie=t.querySelector("#cumuls-from"))==null?void 0:ie.value,ae=(oe=t.querySelector("#cumuls-metric"))==null?void 0:oe.value,ee=J?(Date.now()-new Date(J))/864e5>365:!1;H&&(H.style.display=ee?"":"none"),_&&(_.disabled=!W||!J||!ae||ee)};(O=t.querySelector("#cumuls-subject"))==null||O.addEventListener("change",()=>{Q(),X()}),(V=t.querySelector("#cumuls-from"))==null||V.addEventListener("change",X),(G=t.querySelector("#cumuls-metric"))==null||G.addEventListener("change",()=>{N(),X()}),(B=t.querySelector("#cumuls-create"))==null||B.addEventListener("click",()=>{var ie,oe,pe,he,we,fe;const _=t.querySelector("#cumuls-subject"),H=_==null?void 0:_.value,W=(ie=t.querySelector("#cumuls-from"))==null?void 0:ie.value,J=(oe=t.querySelector("#cumuls-metric"))==null?void 0:oe.value;if(!H||!W||!J)return;const ae=Ne.find(Z=>Z.id===J),ee=Ri[J]||{icon:"bi-bar-chart-fill",color:"#636366"},ue=J==="hf"?{cold:+(((pe=t.querySelector("#cumuls-th-cold"))==null?void 0:pe.value)??7.2)}:J==="dj"?{low:+(((he=t.querySelector("#cumuls-th-low"))==null?void 0:he.value)??0),high:+(((we=t.querySelector("#cumuls-th-high"))==null?void 0:we.value)??18)}:null;Le.push({metricId:J,metricLabel:(ae==null?void 0:ae.label)||J,unit:(ae==null?void 0:ae.unit)||"",icon:ee.icon,color:ee.color,subjectKey:H,subjectLabel:(((fe=_.options[_.selectedIndex])==null?void 0:fe.text)||H).trim(),fromDate:W,value:String(Oi(H,W,J)??"—"),thresholds:ue}),h(),L()}),t.querySelectorAll(".m-cumuls-del").forEach(_=>{_.addEventListener("click",()=>{Le.splice(+_.dataset.cidx,1),h(),L()})}),t.querySelectorAll(".m-cumuls-edit").forEach(_=>{_.addEventListener("click",()=>je(+_.dataset.cidx))});function se(_,H={}){return _==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${H.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:_==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${H.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${H.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function je(_){const H=Le[_];if(!H)return;const W=s.filter(oe=>oe.parcelIds.length>0&&ys.has(oe.model)),J=n.map(oe=>`<option value="p-${oe.id}"${H.subjectKey===`p-${oe.id}`?" selected":""}>${wt(oe)}</option>`).join(""),ae=W.map(oe=>`<option value="s-${oe.id}"${H.subjectKey===`s-${oe.id}`?" selected":""}>${St(oe,n)}</option>`).join(""),ue=ti(H.subjectKey).map(oe=>`<option value="${oe.id}"${H.metricId===oe.id?" selected":""}>${oe.label}</option>`).join(""),ie=document.createElement("div");ie.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",ie.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${J}</optgroup>
            ${ae?`<optgroup label="Capteurs">${ae}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${ue}
          </select>
          <div id="cedit-thresholds">${se(H.metricId,H.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${H.fromDate}">
          </div>`,ie.querySelector("#cedit-subject").addEventListener("change",()=>{const oe=ie.querySelector("#cedit-subject").value,pe=ie.querySelector("#cedit-metric"),he=ti(oe);pe.innerHTML='<option value="">— Métrique —</option>'+he.map(we=>`<option value="${we.id}">${we.label}</option>`).join(""),ie.querySelector("#cedit-thresholds").innerHTML=""}),ie.querySelector("#cedit-metric").addEventListener("change",()=>{ie.querySelector("#cedit-thresholds").innerHTML=se(ie.querySelector("#cedit-metric").value)}),Re({title:"Modifier le cumul",body:ie,doneLabel:"Enregistrer",onDone:()=>{var Ae,qe,rt,nt;const oe=ie.querySelector("#cedit-subject").value||H.subjectKey,pe=ie.querySelector("#cedit-metric").value||H.metricId,he=ie.querySelector("#cedit-from").value||H.fromDate;if(!oe||!pe||!he)return;if((Date.now()-new Date(he))/864e5>365){Fe("Date trop ancienne (max 365 jours)");return}const fe=Ne.find(Ct=>Ct.id===pe),Z=Ri[pe]||{icon:"bi-bar-chart-fill",color:"#636366"},K=ie.querySelector("#cedit-subject"),re=pe==="hf"?{cold:+(((Ae=ie.querySelector("#cedit-th-cold"))==null?void 0:Ae.value)??7.2)}:pe==="dj"?{low:+(((qe=ie.querySelector("#cedit-th-low"))==null?void 0:qe.value)??0),high:+(((rt=ie.querySelector("#cedit-th-high"))==null?void 0:rt.value)??18)}:null;Le[_]={...H,metricId:pe,metricLabel:(fe==null?void 0:fe.label)||pe,unit:(fe==null?void 0:fe.unit)||"",icon:Z.icon,color:Z.color,subjectKey:oe,subjectLabel:(((nt=K.options[K.selectedIndex])==null?void 0:nt.text)||oe).trim(),fromDate:he,value:String(Oi(oe,he,pe)??"—"),thresholds:re},h(),L()}})}}P(),(Lt=t.querySelector("#open-chat-btn"))==null||Lt.addEventListener("click",Nn);function q(){const N=t.querySelector('[data-widget="notes"] .m-widget-bd');N&&(N.innerHTML=Wi(i),F())}let z=[];function F(){var O,V;z=[];const N=t.querySelector("#notes-img-input"),Q=t.querySelector("#notes-img-btn"),X=t.querySelector("#notes-previews"),se=t.querySelector("#notes-img-error");N&&Q&&X&&window.setupImgUpload&&window.setupImgUpload(N,Q,X,se,z),(O=t.querySelector("#notes-add"))==null||O.addEventListener("click",async()=>{var oe,pe,he,we,fe,Z;const G=(oe=t.querySelector("#notes-input"))==null?void 0:oe.value.trim(),B=((pe=t.querySelector("#notes-date"))==null?void 0:pe.value)||new Date().toISOString().slice(0,10),_=((he=t.querySelector("#notes-time"))==null?void 0:he.value)||"",H=((we=t.querySelector("#notes-auteur"))==null?void 0:we.value)||"";if(!G)return;const W=((fe=t.querySelector("#notes-link"))==null?void 0:fe.value)||"";let J=null,ae=null,ee="";if(W.startsWith("p-"))J="parcel",ae=+W.slice(2),ee=((Z=le.find(K=>K.id===ae))==null?void 0:Z.name)||"";else if(W.startsWith("s-")){J="sensor",ae=+W.slice(2);const K=ne.find(re=>re.id===ae);ee=K?K.serial:""}const ue=[];if(z.length&&window.ImageStore)for(const K of z){const re=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(re,K),ue.push(re)}const ie=Ke();ie.unshift({date:B,time:_,text:G,auteur:H,role:"membre",imageIds:ue,linkedType:J,linkedId:ae,linkedName:ee}),ii(ie),t.querySelector("#notes-input").value="",q()}),(V=t.querySelector("#notes-view"))==null||V.addEventListener("click",()=>{const G=W=>{const[J,ae,ee]=W.split("-");return`${ee}/${ae}/${J}`},B=W=>W.length>70?W.slice(0,70)+"…":W,_=document.createElement("div");function H(){const W=Ke();if(!W.length){_.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}_.innerHTML=W.map((J,ae)=>{const ee=(J.imageIds||[]).length,ue=J.linkedType?`<span style="font-size:10px;background:${J.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${J.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${J.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${J.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${ae}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del m-del-btn" data-idx="${ae}" style="position:absolute;top:8px;right:8px">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${G(J.date)}${J.time?" · "+J.time:""}</span>
                  ${J.auteur?`<span style="color:#636366;font-weight:500">${J.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${B(J.text)}</div>
                ${ue||ee>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${ue}${ee>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${ee} photo${ee>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),_.querySelectorAll(".m-note-del").forEach(J=>{J.addEventListener("click",async ae=>{var oe;ae.stopPropagation();const ee=Ke(),ue=+J.dataset.idx,ie=ee[ue];(oe=ie==null?void 0:ie.imageIds)!=null&&oe.length&&window.ImageStore&&await window.ImageStore.remove(ie.imageIds),ee.splice(ue,1),ii(ee),H(),q()})}),_.querySelectorAll(".m-note-card").forEach(J=>{J.addEventListener("click",async()=>{const ee=Ke()[+J.dataset.idx];if(!ee)return;const ue=ee.linkedType?`<span style="font-size:11px;background:${ee.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${ee.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${ee.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${ee.linkedName||""}</span>`:"",ie=document.createElement("div");if(ie.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${G(ee.date)}${ee.time?" · "+ee.time:""}</span>
                  ${ee.auteur?`<span style="color:#636366;font-weight:500">${ee.auteur}</span>`:""}
                  ${ue}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${ee.text}</div>
                ${(ee.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Re({title:"Note",body:ie,doneLabel:"Fermer",onDone:()=>{}}),(ee.imageIds||[]).length&&window.ImageStore){const oe=ie.querySelector("#note-detail-photos");for(const pe of ee.imageIds){const he=await window.ImageStore.get(pe);if(!he)continue;const we=document.createElement("div");we.className="jrn-img-thumb-wrap";const fe=document.createElement("img");fe.className="jrn-img-thumb",fe.src=he,fe.alt="",fe.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(he)}),we.appendChild(fe),oe.appendChild(we)}}})})}H(),Re({title:"Notes",body:_,doneLabel:"Fermer",onDone:()=>{}})});const je=G=>{const[B,_,H]=G.split("-");return`${H}/${_}/${B}`};t.querySelectorAll("#notes-list .m-note-del").forEach(G=>{G.addEventListener("click",async B=>{var J;B.stopPropagation();const _=Ke(),H=+G.dataset.idx,W=_[H];(J=W==null?void 0:W.imageIds)!=null&&J.length&&window.ImageStore&&await window.ImageStore.remove(W.imageIds),_.splice(H,1),ii(_),q()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(G=>{G.addEventListener("click",async()=>{const _=Ke()[+G.dataset.idx];if(!_)return;const H=_.linkedType?`<span style="font-size:11px;background:${_.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${_.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${_.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${_.linkedName||""}</span>`:"",W=document.createElement("div");if(W.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${je(_.date)}${_.time?" · "+_.time:""}</span>
              ${_.auteur?`<span style="color:#636366;font-weight:500">${_.auteur}</span>`:""}
              ${H}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${_.text}</div>
            ${(_.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Re({title:"Note",body:W,doneLabel:"Fermer",onDone:()=>{}}),(_.imageIds||[]).length&&window.ImageStore){const J=W.querySelector("#note-detail-photos");for(const ae of _.imageIds){const ee=await window.ImageStore.get(ae);if(!ee)continue;const ue=document.createElement("div");ue.className="jrn-img-thumb-wrap";const ie=document.createElement("img");ie.className="jrn-img-thumb",ie.src=ee,ie.alt="",ie.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(ee)}),ue.appendChild(ie),J.appendChild(ue)}}})})}F();function R(){t.querySelectorAll(".m-tr-chart-wrap").forEach(N=>{const Q=N.querySelector(".m-tr-cursor"),X=N.querySelector(".m-tr-tooltip");if(!X)return;const se=JSON.parse(N.dataset.series||"[]"),je=N.dataset.unit||"",O=se.length,V=26,G=270;N.addEventListener("pointermove",B=>{const _=N.getBoundingClientRect(),H=Math.max(0,Math.min(((B.clientX-_.left)*(V+G)/_.width-V)/G,1)),W=se[Math.round(H*(O-1))]??null;if(Q){const J=V+Math.round(H*G);Q.setAttribute("x1",J),Q.setAttribute("x2",J),Q.setAttribute("opacity","1")}X.style.display="",X.style.left=`${Math.max(0,Math.min(B.clientX-_.left-24,_.width-60))}px`,X.textContent=W!==null?`${(+W).toFixed(1)} ${je}`:"—"}),N.addEventListener("pointerleave",()=>{X.style.display="none",Q==null||Q.setAttribute("opacity","0")})})}function Y(){const N=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');N&&(N.innerHTML=Bi(n,s),te())}Dt=Y;function te(){var se,je,O,V,G;const N=()=>{var _,H;const B=t.querySelector("#msr-create");B&&(B.disabled=!((_=t.querySelector("#msr-subject"))!=null&&_.value)||!((H=t.querySelector("#msr-metric"))!=null&&H.value)||ke.length>=bt)},Q=()=>{var W;const B=t.querySelector("#msr-metric"),_=(W=t.querySelector("#msr-subject"))==null?void 0:W.value;if(!B)return;const H=wn(_,s);B.innerHTML='<option value="">— Métrique —</option>'+H.map(J=>`<option value="${J}">${ui[J]}</option>`).join(""),B.disabled=!_||!H.length,N()},X=()=>{var H;const B=t.querySelector("#msr-step"),_=((H=t.querySelector("#msr-period"))==null?void 0:H.value)||"7d";B&&(B.innerHTML=fs(_).map(W=>`<option value="${W.id}">${W.label}</option>`).join(""),N())};(se=t.querySelector("#msr-subject"))==null||se.addEventListener("change",()=>{Q(),N()}),(je=t.querySelector("#msr-period"))==null||je.addEventListener("change",()=>{X(),N()}),(O=t.querySelector("#msr-metric"))==null||O.addEventListener("change",N),(V=t.querySelector("#msr-step"))==null||V.addEventListener("change",N),(G=t.querySelector("#msr-create"))==null||G.addEventListener("click",()=>{var ie,oe,pe;const B=t.querySelector("#msr-subject"),_=t.querySelector("#msr-metric"),H=t.querySelector("#msr-period"),W=t.querySelector("#msr-step"),J=B==null?void 0:B.value,ae=_==null?void 0:_.value,ee=H==null?void 0:H.value,ue=W==null?void 0:W.value;!J||!ae||!ee||!ue||(ke.push({subjectKey:J,subjectLabel:(((ie=B.options[B.selectedIndex])==null?void 0:ie.text)||J).trim(),metricId:ae,metricLabel:ui[ae]||ae,unit:xn[ae]||"",period:ee,periodLabel:(((oe=H.options[H.selectedIndex])==null?void 0:oe.text)||ee).trim(),step:ue,stepLabel:(((pe=W.options[W.selectedIndex])==null?void 0:pe.text)||ue).trim(),color:bs[ae]||_i[ke.length%_i.length]}),h(),Y())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(B=>{B.addEventListener("click",()=>{ke.splice(+B.dataset.idx,1),h(),Y()})}),t.querySelectorAll(".m-wf-view-data[data-sensor-id]").forEach(B=>{B.addEventListener("click",()=>{const _=+B.dataset.sensorId,H=ne.find(W=>W.id===_);H&&ge(()=>Promise.resolve().then(()=>Rt),void 0).then(W=>W.initSensorDetail(H,"donnees",i))})}),R()}te(),t.querySelectorAll(".m-prev-card").forEach(N=>{N.addEventListener("click",()=>{A(l,+N.dataset.day)})});const be=t.querySelector(".m-prev-expand-btn");be&&be.addEventListener("click",()=>A(l,3)),t.querySelectorAll(".m-widget-menu").forEach(N=>{N.addEventListener("click",Q=>{var G;Q.stopPropagation();const X=xe.find(B=>B.id===N.dataset.widget);if(!X)return;const se=document.createElement("div"),je=X.id==="bilan_hydrique",O=gt().sensorlessEnabled??!0;se.innerHTML=`
          <div class="m-sheet-links">
            ${je?`<a class="m-sheet-link" id="menu-sensorless">${O?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const V=Re({title:X.title,body:se,doneLabel:"Fermer",onDone:()=>{}});(G=se.querySelector("#menu-sensorless"))==null||G.addEventListener("click",()=>{Ht({sensorlessEnabled:!O}),V.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{V.remove();const B=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');B&&(B.innerHTML=v()+ct(d()),m(),k(),C(),i==="admin"&&$())},280)}),se.querySelector("#menu-move").addEventListener("click",()=>{V.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{V.remove(),D()},280)}),se.querySelector("#menu-remove").addEventListener("click",()=>{X.active=!1,V.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{V.remove(),h(),E()},280),Fe("Widget retiré")})})})}function D(){const m=document.createElement("div"),k=()=>xe.filter($=>$.active&&!$.fixed),C=()=>{const $=k();m.innerHTML=$.map((L,P)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${L.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${P}" data-dir="-1" ${P===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${P}" data-dir="1" ${P===$.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),m.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(L=>{L.addEventListener("click",()=>{const P=k(),q=+L.dataset.i,z=q+ +L.dataset.dir,F=xe.indexOf(P[q]),R=xe.indexOf(P[z]);[xe[F],xe[R]]=[xe[R],xe[F]],h(),C(),E()})})};C(),Re({title:"Réorganiser les widgets",body:m,doneLabel:"Fermer",onDone:()=>{}})}function j(){const m=i==="admin",k=ye(`
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
            ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(C=>`
              <button class="m-add-item" data-action="${C.action}">
                <i class="bi ${C.icon}"></i>
                <span>${C.label}</span>
              </button>`).join("")}
          </div>
          ${m?`
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
      </div>`);k.querySelector(".m-detail-back").addEventListener("click",me),k.querySelectorAll(".m-add-item").forEach(C=>{C.addEventListener("click",()=>{const $=C.dataset.action;$==="irrigation"?(me(),ge(()=>Promise.resolve().then(()=>et),void 0).then(L=>L.openIrrigationSaisie(n,Fe))):$==="strategie-irrigation"?(me(),ge(()=>Promise.resolve().then(()=>et),void 0).then(L=>L.openIrrigationStrategie(n,Fe))):Fe("Fonctionnalité à venir")})})}function I(){const m=document.createElement("div"),k=()=>{const C=xe.filter($=>!$.fixed);m.innerHTML=C.map($=>`
        <div class="m-catalog-row${$.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${$.color}20;color:${$.color}"><i class="bi ${$.icon}"></i></div>
          <span class="m-catalog-title">${$.title}</span>
          ${$.available?`<button class="m-catalog-toggle${$.active?" m-catalog-toggle--on":""}" data-cid="${$.id}" type="button">
                <i class="bi ${$.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),m.querySelectorAll("[data-cid]").forEach($=>{$.addEventListener("click",()=>{const L=xe.find(P=>P.id===$.dataset.cid);L&&(L.active=!L.active,h(),k(),E())})})};k(),Re({title:"Widgets disponibles",body:m,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",m=>{if(m.key!=="weenat_proto_store")return;ns(le);const k=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');k&&(k.innerHTML=v()+ct(d()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=j,E()}const Bt=new URLSearchParams(window.location.search).get("role")==="adherent"?"adherent":"admin",Se={djMin:0,djMax:18,hfSeuil:7.2},Wn={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"},irrigation:{metricLabel:"Cumul d'irrigation",unit:"mm",icon:"bi-moisture",color:"#FF8C00"}},Jn=4,Gn=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermomètre-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Capteur d'humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],pi={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},Es=e=>`dash-widgets-parcel-${e}`;function Un(e,i){const t=i.map(o=>ne.find(s=>s.id===o)).filter(Boolean),a=new Set(t.map(o=>o.model)),n=["previsions-5j","cumuls","irrigations"];return Object.entries(pi).forEach(([o,s])=>{s.some(l=>a.has(l))&&n.push(o)}),n}function Ft(e,i){try{const t=JSON.parse(localStorage.getItem(Es(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return Un(e,i)}function ks(e,i){localStorage.setItem(Es(e),JSON.stringify(i))}function Yn(e,i,t){const a=new Set(Ft(e,i)),n=Gn.map((s,l)=>`
    <div class="m-list-section-header"${l>0?' style="margin-top:20px"':""}>${s.title}</div>
    ${s.items.map(p=>{const c=a.has(p.id);return`
        <div class="m-wcat-item">
          <span>${p.label}</span>
          ${c?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${p.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`}).join("")}`).join(""),o=ye(`
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
    </div>`);o.querySelector(".m-detail-back").addEventListener("click",me),o.querySelectorAll(".m-wcat-add").forEach(s=>{s.addEventListener("click",()=>{const l=s.dataset.wid,p=Ft(e,i);p.includes(l)||(p.push(l),ks(e.id,p)),me(),t==null||t()})})}const We={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Capteur d'humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1},irrigation:{label:"Irrigation",unit:"mm",color:"#FF8C00",cumul:!0,cumulsType:"irrigation"}},Zn={pluie:14,temperature:14,humidite:14,vent:14,etp:14,temp_rosee:14,rayonnement:14,pothydr:7,irrigation:7},yt={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function Wt(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(a,n)=>{const o=n/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(o-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,s))})}const Jt={"365d":52,"30d":60,"7d":84,j7j7:84,hier:48,"1d":24,custom:60},Et={"365d":525600,"30d":43200,"7d":10080,j7j7:10080,hier:1440,"1d":1440,custom:10080};function Ls(e,i,t=0,a=0){const n=Jt[i]||60,o=Et[i]||10080,s=Date.now(),l=s-o*6e4,p=o*6e4/n,c=new Array(n+t).fill(0),d=t>0?a*6e4/t:0;return ce.filter(v=>v.plotId===e).forEach(v=>{const w=new Date(v.iso).getTime();if(!(w<l)){if(w<=s){const r=Math.min(n-1,Math.floor((w-l)/p));c[r]+=v.mm}else if(t>0&&w<=s+a*6e4){const r=Math.min(t-1,Math.floor((w-s)/d));c[n+r]+=v.mm}}}),c}function Kn(e,i,t,a,n,o=20,s=0){const l=Et[e]||10080,p=l+s,c=new Date,d=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,v=4,w=i-t-a,r=n-o;return Array.from({length:v+1},(u,h)=>{const b=h/v,f=new Date(c.getTime()+(b*p-l)*6e4),g=(t+b*w).toFixed(1),S=h===0?"start":h===v?"end":"middle";return[`<line x1="${g}" y1="${r}" x2="${g}" y2="${r+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${g}" y="${n-3}" text-anchor="${S}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(f)}</text>`].join("")}).join("")}function Cs(e,i,t,a="7d",n="",o=null){const s=Jt[a]||60,l=Et[a]||10080,p=l/1440,c=Zn[e]||0,d=c>0?Math.max(1,Math.round(Math.min(c,p)/p*s)):0,v=d>0?Math.min(c,p)/p*l:0,w=e==="irrigation"?Ls(o,a,d,v):Wt(e,s+d),r=320,u=100,h=34,b=6,f=10,g=20,S=r-h-b,E=u-f-g,M=t?0:Math.min(...w),y=Math.max(...w,M+.001),x=y-M,A=Y=>h+Y/(w.length-1)*S,T=Y=>f+E-(Y-M)/x*E,D=`g${Math.random().toString(36).slice(2,8)}`,j=[0,.5,1].map(Y=>{const te=M+Y*x,be=f+E-Y*E;return`<text x="${h-3}" y="${(be+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${te<10?te.toFixed(1):Math.round(te)}</text>`}).join(""),I=[.25,.5,.75].map(Y=>{const te=(f+E-Y*E).toFixed(1);return`<line x1="${h}" y1="${te}" x2="${r-b}" y2="${te}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),m=`<line x1="${h}" y1="${f+E}" x2="${r-b}" y2="${f+E}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,k=Kn(a,r,h,b,u,g,v);let C="";if(d>0){const Y=A(s-.5),te=`stripe${D}`;C=`<defs><pattern id="${te}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.06)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.18)" stroke-width="3"/>
      </pattern></defs>
      <rect x="${Y.toFixed(1)}" y="${f}" width="${(r-b-Y).toFixed(1)}" height="${E}" fill="url(#${te})"/>
      <line x1="${Y.toFixed(1)}" y1="${f}" x2="${Y.toFixed(1)}" y2="${f+E}" stroke="rgba(142,142,147,.35)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(r-b-3).toFixed(1)}" y="${(f+9).toFixed(1)}" text-anchor="end" font-size="8" fill="#8e8e93" font-family="-apple-system" font-style="italic">Prévisions</text>`}if(t){const Y=S/w.length*.7,te=w.map((be,Te)=>{const $e=(be-M)/x*E,Ie=f+E-$e,De=Te>=s;return`<rect x="${(A(Te)-Y/2).toFixed(1)}" y="${Ie.toFixed(1)}" width="${Y.toFixed(1)}" height="${$e.toFixed(1)}" fill="${De?"#C7C7CC":i}" opacity="${De?".55":".8"}" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${r} ${u}" width="100%" height="${u}" preserveAspectRatio="none">${C}${j}${I}${m}${k}${te}</svg>`}const $=w.map((Y,te)=>[A(te),T(Y)]),L=$.slice(0,s),P=$.slice(s-1),q=L.map(([Y,te],be)=>`${be?"L":"M"}${Y.toFixed(1)},${te.toFixed(1)}`).join(" "),z=d>0?P.map(([Y,te],be)=>`${be?"L":"M"}${Y.toFixed(1)},${te.toFixed(1)}`).join(" "):"",F=`${q} L${A(s-1).toFixed(1)},${(f+E).toFixed(1)} L${h},${(f+E).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:w.map(Y=>+Y.toFixed(2)),minV:+M.toFixed(2),maxV:+y.toFixed(2)}))}" data-color="${i}" data-unit="${n}" style="position:relative">
    <svg viewBox="0 0 ${r} ${u}" width="100%" height="${u}" preserveAspectRatio="none">
      <defs><linearGradient id="${D}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${C}
      ${j}${I}${m}
      <path d="${F}" fill="url(#${D})"/>
      <path d="${q}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${z?`<path d="${z}" fill="none" stroke="${i}" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>`:""}
      ${$.map(([Y,te],be)=>`<circle cx="${Y.toFixed(1)}" cy="${te.toFixed(1)}" r="2" fill="${i}" opacity="${be>=s?".55":"1"}"/>`).join("")}
      ${k}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Xn(e,i,t,a=null){if(!t)return"";const n=Jt[i]||60,s=(Et[i]||10080)/(n*60),l=e==="irrigation"?Ls(a,i):Wt(e,n);let p=[];if(t==="temp"){const c=l.reduce((v,w)=>v+Math.max(0,Math.min(w,Se.djMax)-Se.djMin),0)*(s/24),d=l.filter(v=>v<Se.hfSeuil).length*s;p=[{label:"Cumul de degrés jours",val:`${Math.round(c)} DJ`,metricId:"dj",thresholdText:`${Se.djMin}°C → ${Se.djMax}°C`},{label:"Cumul d'heures de froid",val:`${Math.round(d)} h`,metricId:"hf",thresholdText:`< ${Se.hfSeuil}°C`}]}else if(t==="pluie")p=[{label:"Cumul de pluie",val:`${l.reduce((d,v)=>d+v,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const c=l.filter(d=>d>120).length*s;p=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(c)} h`,metricId:"rayo"}]}else if(t==="etp")p=[{label:"Cumul d'évapotranspiration",val:`${(l.reduce((d,v)=>d+v,0)*(s/24)).toFixed(1)} mm`,metricId:"etp"}];else if(t==="hws"){const c=l.filter(d=>d>50).length*s;p=[{label:"Cumul d'heures d'humectation foliaire",val:`${Math.round(c)} h`,metricId:"humec"}]}else t==="irrigation"&&(p=[{label:"Cumul irrigation",val:`${l.reduce((d,v)=>d+v,0).toFixed(1)} mm`,metricId:"irrigation"}]);return p.length?`<div class="m-chart-cumuls">${p.map(c=>{const d=c.metricId==="dj"||c.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${c.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${c.label}</span>
          ${c.thresholdText?`<span class="m-chart-cumul-thresh">${c.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${c.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${d}
        <button class="m-cumul-add-btn" data-cumul-label="${c.label}" data-cumul-val="${c.val}" data-cumul-metric-id="${c.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}const Qn={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",j7j7:"J-7 → J+7",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},ea={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"};function Gi(e,i,t=null,a=null,n="1h",o=null){const s=We[e];if(!s)return"";const l=Xn(e,i,s.cumulsType,a),p=t||e==="irrigation"?`<div class="m-chart-details-link" data-sensor-id="${t??""}" data-metric-id="${e}">Voir détails →</div>`:"",c=o&&e!=="irrigation"?`<button class="m-msr-add-btn" data-msr-metric-id="${e}" data-msr-subject-key="${o.key}" data-msr-subject-label="${o.label}" data-msr-period="${i}" data-msr-step="${n}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`:"";return`
    <div class="m-chart-card" data-metric-id="${e}">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${s.color}">${s.label}</span>
        ${c}
      </div>
      ${Cs(e,s.color,s.cumul,i,s.unit||"",a)}
      ${p}
      ${l}
    </div>`}function ta(e){const i=e.dataset.msrMetricId,t=e.dataset.msrSubjectKey,a=e.dataset.msrSubjectLabel,n=e.dataset.msrPeriod,o=e.dataset.msrStep,s=We[i];if(!s)return;const l=hs({subjectKey:t,subjectLabel:a,metricId:i,metricLabel:s.label,unit:s.unit||"",period:n,periodLabel:Qn[n]||n,step:o,stepLabel:ea[o]||o,color:s.color});if(l==="max"){U(`Maximum de mesures atteint (${Jn})`);return}if(l==="dup"){U("Cette mesure est déjà dans vos favoris");return}U("Mesure ajoutée au tableau de bord")}function ia(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*a)/255>.5?"#000000":"#ffffff"}function sa(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:a,maxV:n}=i,o=e.querySelector(".m-chart-tip"),s=e.querySelector(".m-chart-crosshair"),l=e.dataset.color||"#0172A4",p=e.dataset.unit||"";function c(v){const w=e.getBoundingClientRect(),r=Math.max(0,Math.min(1,(v-w.left)/w.width)),u=Math.round(r*(t.length-1)),h=t[u],b=r*100,f=(h<10?h.toFixed(1):String(Math.round(h)))+(p?` ${p}`:""),g=ia(l);s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${b}%;width:1px;background:${l};opacity:.5`,o.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(b,75)}%;background:${l};color:${g};border:1.5px solid ${g};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,o.textContent=f}function d(){s.style.display="none",o.style.display="none"}e.addEventListener("pointermove",v=>{v.preventDefault(),c(v.clientX)}),e.addEventListener("pointerdown",v=>c(v.clientX)),e.addEventListener("pointerup",d),e.addEventListener("pointerleave",d),e.style.cursor="crosshair"}function na(e){const i=ce.filter(h=>h.plotId===e.id),t=i.filter(h=>h.real),a=i.filter(h=>!h.real),n=t.reduce((h,b)=>h+b.mm,0),o=a.reduce((h,b)=>h+b.mm,0),s=Ge(e.id).irrigation??e.irrigation,p=s&&!new Set(["Non irrigué","Non renseigné",""]).has(s),c=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-act-saisie" type="button"${p?"":" disabled"}>+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-act-saison" type="button"${p?"":" disabled"}>↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`;if(!p)return lt("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3,#8e8e93)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez préciser un type d'irrigation.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-set-type" type="button" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,"irrigations");if(!i.length)return lt("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3,#8e8e93);padding:8px 0">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${c}
      </div>`,"irrigations");let d="";if(i.some(h=>h.fromStrategy)){const h=[...i].sort((S,E)=>S.iso.localeCompare(E.iso)),b=h[h.length-1],f=h[h.length-2],g=f?Math.round((new Date(b.iso)-new Date(f.iso))/864e5):null;d=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${b.mm} mm</strong>${g?` tous les <strong>${g} jours</strong>`:""}.</div>
      </div>`}const w=n+o,u=`
    <div class="w-irrig-layout">
      <div class="w-irrig-kpis">
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Effectuées</div>
          <div class="w-irrig-kpi-val" style="color:#E07820">${n} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Planifiées</div>
          <div class="w-irrig-kpi-val" style="color:#FFB705">${o} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Total</div>
          <div class="w-irrig-kpi-val" style="color:#8e8e93">${w} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${d}
      ${c}
    </div>
    <div class="m-irrig-footer-link">Voir les irrigations →</div>`;return lt("Irrigations","bi-moisture","#FF8C00",u,"irrigations")}function aa(e,i=[]){const t=Ft(e,i),a=i.map(o=>ne.find(s=>s.id===o)).filter(Boolean);let n="";for(const o of t)if(o==="irrigations")n+=na(e);else if(o==="cumuls")n+=la(e,i);else if(o==="previsions-5j")n+=ra(e);else if(pi[o]){const s=new Set(pi[o]),l=a.filter(p=>s.has(p.model));l.length&&(n+=ca(l,o))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${n}
    </div>`}function lt(e,i,t,a,n="",o=""){return`
    <div class="m-widget-card">
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${n}" type="button">•••</button>
      </div>
      ${o?`<div class="m-widget-card-subtitle">${o}</div>`:""}
      ${a}
    </div>`}function Xe(e,i,t){const a=(e*9301+49297)%233280,o={etp:1+a%60/100,pluie:.8+a%70/100,djc:4+a%60/10,hfroid:.4+a%12/10,humec:.1+a%20/100,enso:4+a%40/10}[i]??1,s=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(o*s*10)/10}const As=e=>`m-pcumuls-${e}`;function ot(e){try{return JSON.parse(localStorage.getItem(As(e)))||{}}catch{return{}}}function Mt(e,i){const t=ot(e);localStorage.setItem(As(e),JSON.stringify({...t,...i}))}const oa={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function la(e,i=[]){const t=new Set;i.forEach(r=>{const u=ne.find(h=>h.id===r);u&&(yt[u.model]||[]).forEach(h=>t.add(h))});const a=`${new Date().getFullYear()}-01-01`,n=ot(e.id),o=new Set(n.hidden||[]),s=n.dates||{},l=n.cfg||{};e.id;const p=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:Xe(e.id,"etp",s.etp||a),show:!0},{id:"enso",label:"Rayonnement solaire",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:Xe(e.id,"enso",s.enso||a),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:Xe(e.id,"pluie",s.pluie||a),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:Xe(e.id,"djc",s.djc||a),show:t.has("temperature"),cfg:!0,cfgLabel:`${l.djMin??0}–${l.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#FEE7B4",icon:"bi-snow",val:Xe(e.id,"hfroid",s.hfroid||a),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${l.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:Xe(e.id,"humec",s.humec||a),show:t.has("humectation")}].filter(r=>r.show),c=p.filter(r=>!o.has(r.id)),d=p.filter(r=>o.has(r.id)),v=d.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${d.map(r=>`
          <button class="m-pcumul-add" data-cid="${r.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${r.icon}" style="color:${r.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${r.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",w=c.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${c.map(r=>{const u=s[r.id]||a;return`<div class="m-cumuls-saved-card" style="position:relative">
          <button class="m-pcumul-del m-del-btn" data-cid="${r.id}" data-pid="${e.id}" type="button" style="position:absolute;top:8px;right:8px">×</button>
          <div class="m-pcumul-hd">
            <div class="m-pcumul-icon" style="background:${r.color}22;color:${r.color}"><i class="bi ${r.icon}"></i></div>
            <div class="m-pcumul-label" style="color:${r.color}">${r.label}</div>
          </div>
          <div class="m-pcumul-value" style="color:${r.color}">${r.val}<span class="m-pcumul-unit">${r.unit}</span></div>
          <div class="m-pcumul-since">
            <span>Depuis le</span>
            <input type="date" class="m-pcumul-date m-pcumul-date-inp" data-cid="${r.id}" data-pid="${e.id}" value="${u}">
            ${r.cfg?`<button class="m-pcumul-cfg m-pcumul-cfg-btn" data-cid="${r.id}" data-pid="${e.id}"><i class="bi bi-gear"></i> ${r.cfgLabel}</button>`:""}
          </div>
        </div>`}).join("")}${v}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${v}`;return lt("Cumuls","bi-bar-chart-fill","#0172A4",w,"cumuls")}function ra(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],a=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],n=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],o=new Date,s=ve.find(u=>u.id===(e==null?void 0:e.orgId)),l=(e==null?void 0:e.ville)||(s==null?void 0:s.ville)||"—",p=(e==null?void 0:e.id)||1,c=(u,h)=>Math.floor(Math.random()*(h-u+1))+u,d=(u,h)=>{const b=new Date(o);b.setDate(b.getDate()+u);const f=Math.floor((p*7+u*3)%11/2.2);return{lbl:u===0?"Auj.":i[b.getDay()],date:`${b.getDate()} ${t[b.getMonth()]}`,tmax:c(17+h,34+h),tmin:c(4+h,15+h),pluie:f>=3?c(2,18):0,vent:c(10,35),wi:f}},v=[0,1,2].map(u=>d(u,0)).concat([3,4].map(u=>d(u,-1))),w=u=>`
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${u.lbl}</div>
      <div class="m-wprev5-date">${u.date}</div>
      <i class="bi ${a[u.wi]} m-wprev5-icon" title="${n[u.wi]}"></i>
      <div class="m-wprev5-rain${u.pluie===0?" m-wprev5-rain--none":""}">${u.pluie>0?u.pluie+" mm":"—"}</div>
      <div class="m-wprev5-tmax">${u.tmax}°</div>
      <div class="m-wprev5-tmin">${u.tmin}°</div>
      <div class="m-wprev5-wind">${u.vent} <span>km/h</span></div>
    </div>`,r=`
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${l}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${v.map(w).join("")}</div>`;return lt("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",r,"previsions-5j")}function ca(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},a={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},n={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(o=>{const s=t[o.model]||"bi-broadcast",l=Ms[o.model]||o.model,p=a[o.model]||"#0172A4",c=n[o.model]||[],d=We[c[0]],v=c[0],w=`
      <div style="margin-bottom:6px">
        ${d?Cs(v,p,!1,"1d",d.unit||""):'<div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--txt3);font-size:12px">Données indisponibles</div>'}
      </div>
      <div class="m-wsensor-vals">
        ${c.slice(0,3).map(r=>{const u=We[r];if(!u)return"";const b=Wt(r,1)[0],f=b<10?b.toFixed(1):Math.round(b);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${u.label}</span>
            <span class="m-wsensor-value" style="color:${u.color}">${f} ${u.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer" style="display:flex;align-items:center;justify-content:space-between">
        <span>${o.serial}</span>
        <button class="m-wsensor-voir-donnees" data-sensor-id="${o.id}" data-metric-id="${v}" style="border:none;background:none;color:#007AFF;font-size:12px;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;gap:3px">Voir les données <i class="bi bi-arrow-right-short"></i></button>
      </div>`;return lt(l,s,p,w,i)}).join("")}function da(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function ua(e,i,t){const a=new Set;i.forEach(r=>{const u=ne.find(h=>h.id===r);u&&(yt[u.model]||[]).forEach(h=>a.add(h))});const n=[...new Set(["etp","rayonnement","temp_rosee",...a])].filter(r=>We[r]),o=Jt[t]||60,s=Et[t]||10080,l=s/o*6e4,p=new Date,c=new Date(p-s*6e4),d=["Horodatage",...n.map(r=>`${We[r].label} (${We[r].unit})`)].join(";"),v=Array.from({length:o},(r,u)=>[new Date(c.getTime()+u*l).toISOString().replace("T"," ").slice(0,19),...n.map(b=>Wt(b,1)[0].toFixed(2))].join(";")),w=(e.name||"parcelle").replace(/[^\w]/g,"_");da([d,...v].join(`\r
`),`${w}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function pa(e,i="7d",t="1h",a=null){const n=new Set,o={};e.forEach(v=>{const w=ne.find(r=>r.id===v);w&&(yt[w.model]||[]).forEach(r=>{n.add(r),o[r]||(o[r]=v)})});const s=ce.some(v=>v.plotId===a),l=["pluie","irrigation","temperature","humidite","pothydr","teneur","temp_sol","vent","rayonnement","humectation","par","temp_rosee","etp"],p=[...new Set([...n,"etp","rayonnement","temp_rosee",...s?["irrigation"]:[]])].filter(v=>We[v]).sort((v,w)=>{const r=l.indexOf(v),u=l.indexOf(w);return(r===-1?999:r)-(u===-1?999:u)}),c=new Date().toISOString().slice(0,10),d=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
    <div class="m-period-bar" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:8px">
        <select class="m-period-sel" style="flex:1;min-width:0">
          <option value="365d"${i==="365d"?" selected":""}>365 jours</option>
          <option value="30d"${i==="30d"?" selected":""}>30 jours</option>
          <option value="7d"${i==="7d"?" selected":""}>7 jours</option>
          <option value="j7j7"${i==="j7j7"?" selected":""}>J-7 → J+7</option>
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
        <input type="date" class="m-custom-to m-custom-date" value="${c}">
      </div>`:""}
    </div>
    <div class="m-detail-section">
      ${(()=>{const v=e[0]??null,w=a!=null?le.find(u=>u.id===a):null,r=w?{key:`p-${w.id}`,label:w.name}:null;return p.map(u=>u==="irrigation"?Gi(u,i,null,a):Gi(u,i,o[u]??v,null,t,r)).join("")})()}
    </div>`}const ma={"IRRÉ-LIS Multi-Cultures":{icon:"bi-droplet-fill",color:"#2E75B6"},"IRRÉ-LIS Mono-Culture":{icon:"bi-droplet-fill",color:"#2E75B6"},DeciTrait:{icon:"bi-shield-check",color:"#4CAF50"},Limacapt:{icon:"bi-bug",color:"#795548"},"Modèles Arvalis — PRÉVI-LIS / MILÉOS":{icon:"bi-graph-up",color:"#FBAF05"},Xarvio:{icon:"bi-grid-3x3-gap",color:"#00B14F"},Pixagri:{icon:"bi-map",color:"#00897B"},VitiMeteo:{icon:"bi-flower1",color:"#8B4C9E"},Rimpro:{icon:"bi-cloud-lightning",color:"#E53935"},"Cropwise Protector":{icon:"bi-shield-fill-check",color:"#43A047"},"Movida GrapeVision":{icon:"bi-eye",color:"#7B1FA2"}};function va(e){if(e.substrate)return"Substrat : "+e.substrate;if(e.texture===mt&&e.soilAnalysis){const{argile:i,limon:t,sable:a}=e.soilAnalysis;return`Analyse de sol (argile ${i}% / limon ${t}% / sable ${a}%)`}return e.texture||"—"}function mi(e){const i=ma[e]||{icon:"bi-puzzle",color:"#8e8e93"};return`<i class="bi ${i.icon}" style="font-size:18px;color:${i.color};width:24px;text-align:center;flex-shrink:0"></i>`}const Ms={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"};function ba(e,i,t){const a=t.map(d=>ne.find(v=>v.id===d)).filter(Boolean),n=a.some(d=>d.model==="P+"||d.model==="PT"),o=a.some(d=>d.model==="P"),s=n&&o,l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),p=new Map;a.forEach(d=>{(yt[d.model]||[]).forEach(v=>{p.has(v)||p.set(v,[]),p.get(v).push(d)})});const c=new Set;return p.forEach((d,v)=>{d.length<=1||d.every(w=>l.has(w.model))||d.forEach(w=>c.add(w.id))}),`
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
          <span class="m-list-row-value">${e.env||"Plein champ"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-irrigation">
          <span class="m-list-row-label">Irrigation</span>
          <span class="m-list-row-value">${e.irrigation||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-volume-max">
          <span class="m-list-row-label">Volume limité</span>
          <span class="m-list-row-value">${Ge(e.id).volumeMaxM3??e.volumeMaxM3?`${(Ge(e.id).volumeMaxM3??e.volumeMaxM3).toLocaleString("fr-FR")} m³`:"Non défini"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${va(e)}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${a.length?a.map((d,v)=>{const w=d.event&&(Array.isArray(d.event)?d.event.length>0:!0),r=c.has(d.id),u=Ms[d.model]||d.model,h=(yt[d.model]||[]).map(b=>{const f=We[b];return f?`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${f.color}18;color:${f.color};border:1px solid ${f.color}40;white-space:nowrap">${f.label}</span>`:""}).join("");return`<div class="m-list-row${v===a.length-1?" m-list-row--last":""} m-tappable" data-open-sensor="${d.id}" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:15px;font-weight:500;display:flex;align-items:center;gap:5px">
                      ${u}
                      ${w?'<span style="width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0;display:inline-block"></span>':""}
                      ${r?'<i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:12px;flex-shrink:0"></i>':""}
                    </div>
                    <div style="font-size:12px;color:#8e8e93;margin-top:1px">${d.model} · ${d.serial}</div>
                  </div>
                  <button class="btn-sensor-more" data-sensor-id="${d.id}" style="border:none;background:none;color:#8e8e93;font-size:18px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1" onclick="event.stopPropagation()">···</button>
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
                </div>
                ${h?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${h}</div>`:""}
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun capteur lié</span></div>'}
        ${c.size?`
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
                ${mi(d)}<span>${d}</span>
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
    </div>`}function vi(e,i=[],t="widgets",a="Parcelles"){let n=ve.find(y=>y.id===e.orgId),o=t,s="7d",l="1h",p=!1;const c=(n==null?void 0:n.ville)||"",d=ye(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${a}</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.name}</div>
          ${e.crop||c?`<div class="m-detail-subtitle">${[c,e.crop].filter(Boolean).join(" · ")}</div>`:""}
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${t==="widgets"?"active":""}" data-view="widgets">Widgets</button>
      <button class="m-detail-tab ${t==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${t==="params"?"active":""}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function v(){const y=ve.filter(D=>D.id!==100&&D.statut!=="inactif"),x=document.createElement("div"),A=()=>{x.innerHTML=y.map(D=>`
        <div class="m-sheet-option${D.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${D.id}">
          <span>${D.name}</span>
          ${D.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),x.querySelectorAll("[data-pick-org]").forEach(D=>{D.addEventListener("click",()=>{const j=+D.dataset.pickOrg;j!==e.orgId&&(e.orgId=j,n=ve.find(I=>I.id===j),S(),U("Exploitation mise à jour")),T.classList.remove("m-sheet-overlay--show"),setTimeout(()=>T.remove(),280)})})},T=de({title:"Exploitation",body:x,doneLabel:"Fermer",onDone:()=>{}});A()}function w(){const y=Nt.filter(j=>j!=="Non renseigné"),x=Ge(e.id).irrigation??e.irrigation,A=document.createElement("div"),T=()=>{A.innerHTML=`
        <div class="m-sheet-option${x?"":" m-sheet-option--active"}" data-pick-irrig="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez un type</span>
          ${x?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${y.map(j=>`
          <div class="m-sheet-option${j===x?" m-sheet-option--active":""}" data-pick-irrig="${j}">
            <span>${j}</span>
            ${j===x?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,A.querySelectorAll("[data-pick-irrig]").forEach(j=>{j.addEventListener("click",()=>{const I=j.dataset.pickIrrig;I&&I!==x&&(at(e.id,{irrigation:I}),e.irrigation=I,Oe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Type d'irrigation modifié : ${x||"—"} → ${I}.`}),S(),U("Type d'irrigation mis à jour")),D.classList.remove("m-sheet-overlay--show"),setTimeout(()=>D.remove(),280)})})},D=de({title:"Type d'irrigation",body:A,doneLabel:"Fermer",onDone:()=>{}});T()}function r(){const y=Rs,x=Ge(e.id).env??e.env??"Plein champ",A=document.createElement("div"),T=()=>{A.innerHTML=y.map(j=>`
        <div class="m-sheet-option${j===x?" m-sheet-option--active":""}" data-pick-env="${j}">
          <span>${j}</span>
          ${j===x?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),A.querySelectorAll("[data-pick-env]").forEach(j=>{j.addEventListener("click",()=>{const I=j.dataset.pickEnv;I&&I!==x&&(at(e.id,{env:I}),e.env=I,Oe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Environnement modifié : ${x||"—"} → ${I}.`}),S(),U("Environnement mis à jour")),D.classList.remove("m-sheet-overlay--show"),setTimeout(()=>D.remove(),280)})})},D=de({title:"Environnement",body:A,doneLabel:"Fermer",onDone:()=>{}});T()}function u(){const y=[...yi,mt],x=Ge(e.id).texture??e.texture,A=document.createElement("div"),T=()=>{A.innerHTML=`
        <div class="m-sheet-option${x?"":" m-sheet-option--active"}" data-pick-texture="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez une texture</span>
          ${x?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${y.map(j=>`
          <div class="m-sheet-option${j===x?" m-sheet-option--active":""}" data-pick-texture="${j}">
            <span>${j}</span>
            ${j===x?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,A.querySelectorAll("[data-pick-texture]").forEach(j=>{j.addEventListener("click",()=>{const I=j.dataset.pickTexture;if(D.classList.remove("m-sheet-overlay--show"),setTimeout(()=>D.remove(),280),I===mt){h(x);return}I!==x&&(at(e.id,{texture:I||null,soilAnalysis:null}),e.texture=I||null,e.soilAnalysis=null,Oe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${x||"—"} → ${I||"—"}.`}),S(),U("Texture de sol mise à jour"))})})},D=de({title:"Texture de sol",body:A,doneLabel:"Fermer",onDone:()=>{}});T()}function h(y){const x=Ge(e.id).soilAnalysis??e.soilAnalysis??{},A=document.createElement("div");A.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:12px">
      <div>
        <label class="m-form-label">Argile (%)</label>
        <input type="number" class="m-sheet-input" id="soil-argile" value="${x.argile??""}" placeholder="Ex : 25" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Limon (%)</label>
        <input type="number" class="m-sheet-input" id="soil-limon" value="${x.limon??""}" placeholder="Ex : 40" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Sable (%)</label>
        <input type="number" class="m-sheet-input" id="soil-sable" value="${x.sable??""}" placeholder="Ex : 35" min="0" max="100">
      </div>
    </div>`,de({title:"Analyse de sol",body:A,doneLabel:"Enregistrer",onDone:()=>{var m,k,C;const T=+(((m=A.querySelector("#soil-argile"))==null?void 0:m.value)||0),D=+(((k=A.querySelector("#soil-limon"))==null?void 0:k.value)||0),j=+(((C=A.querySelector("#soil-sable"))==null?void 0:C.value)||0),I={argile:T,limon:D,sable:j};at(e.id,{texture:mt,soilAnalysis:I}),e.texture=mt,e.soilAnalysis=I,Oe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${y||"—"} → analyse de sol (argile ${T}% / limon ${D}% / sable ${j}%).`}),S(),U("Analyse de sol enregistrée")}})}function b(){const y=Ge(e.id).volumeMaxM3??e.volumeMaxM3??null,x=document.createElement("div");x.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
      <label class="m-form-label">Volume limité (m³)</label>
      <input type="number" class="m-sheet-input" id="edit-volume-max" value="${y??""}" placeholder="Ex : 33000" step="100" min="0">
    </div>`,de({title:"Volume limité de la parcelle",body:x,doneLabel:"Appliquer",onDone:()=>{var D;const A=(D=x.querySelector("#edit-volume-max"))==null?void 0:D.value,T=A===""?null:Math.max(0,+A);at(e.id,{volumeMaxM3:T}),e.volumeMaxM3=T,S(),U("Volume limité mis à jour")}})}const f=["IRRÉ-LIS Multi-Cultures","IRRÉ-LIS Mono-Culture","DeciTrait","Limacapt","Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","Movida GrapeVision"];function g(){let y=[...e.integrations||[]];function x(T){const D=f.filter(j=>!y.includes(j));T.innerHTML=`
        <div class="m-list-section-header">${y.length?`Actives (${y.length})`:"Actives"}</div>
        <div class="m-list">
          ${y.length?y.map((j,I)=>`
            <div class="m-list-row${I===y.length-1?" m-list-row--last":""}" style="gap:10px">
              ${mi(j)}
              <span class="m-list-row-label" style="flex:1">${j}</span>
              <button class="btn-unlink-integ" data-integ="${j}" style="border:none;background:none;color:#ff3b30;font-size:13px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Délier</button>
            </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucune intégration active</span></div>'}
        </div>
        ${D.length?`
        <div class="m-list-section-header">Disponibles</div>
        <div class="m-list">
          ${D.map((j,I)=>`
            <div class="m-list-row${I===D.length-1?" m-list-row--last":""}" style="gap:10px">
              ${mi(j)}
              <span class="m-list-row-label" style="flex:1">${j}</span>
              <button class="btn-add-integ" data-integ="${j}" style="border:none;background:none;color:#0172A4;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Lier</button>
            </div>`).join("")}
        </div>`:""}`,T.querySelectorAll(".btn-unlink-integ").forEach(j=>{j.addEventListener("click",()=>{y=y.filter(I=>I!==j.dataset.integ),e.integrations=[...y],Oe(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${j.dataset.integ} » retirée de la parcelle.`}),x(T),U("Intégration déliée")})}),T.querySelectorAll(".btn-add-integ").forEach(j=>{j.addEventListener("click",()=>{y.includes(j.dataset.integ)||y.push(j.dataset.integ),e.integrations=[...y],Oe(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${j.dataset.integ} » activée sur la parcelle.`}),x(T),U("Intégration liée")})})}const A=ye(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${e.name}</span></button>
          <span style="font-size:17px;font-weight:600">Intégrations</span>
          <div style="width:60px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="integ-list-content" style="padding-bottom:32px"></div>`);A.querySelector(".m-detail-back").addEventListener("click",me),x(A.querySelector("#integ-list-content"))}function S(){const y=d.querySelector("#detail-content");o==="widgets"&&(y.innerHTML=aa(e,i)),o==="donnees"&&(y.innerHTML=pa(i,s,l,e.id)),o==="params"&&(y.innerHTML=ba(e,n,i),E()),M()}function E(){const y=window.L;y&&setTimeout(()=>{var T;const x=d.querySelector("#parcel-minimap");if(!x)return;const A=y.map(x,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(y.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(A),((T=e.latlngs)==null?void 0:T.length)>=3){const D=y.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(A);A.fitBounds(D.getBounds(),{padding:[8,8]})}else A.setView([e.lat,e.lng],14),y.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(A)},50)}function M(){var y,x,A,T,D,j,I;(y=d.querySelector(".m-period-sel"))==null||y.addEventListener("change",m=>{s=m.target.value,S()}),(x=d.querySelector(".m-step-sel"))==null||x.addEventListener("change",m=>{l=m.target.value,S()}),(A=d.querySelector(".m-export-btn"))==null||A.addEventListener("click",()=>ua(e,i,s)),d.querySelectorAll(".m-chart-svg-wrap").forEach(m=>sa(m)),d.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(m=>{m.addEventListener("click",()=>{const k=+m.dataset.sensorId,C=ne.find($=>$.id===k);C&&ge(()=>import("./chart-fullscreen-D3iQiqBD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then($=>$.initChartFullscreen({sensor:C,linkedSensorIds:i,metricId:m.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),d.querySelectorAll(".m-irrig-footer-link").forEach(m=>{m.addEventListener("click",()=>{o="donnees",d.querySelectorAll(".m-detail-tab").forEach(k=>k.classList.toggle("active",k.dataset.view==="donnees")),S(),requestAnimationFrame(()=>{var k;(k=d.querySelector('.m-chart-card[data-metric-id="irrigation"]'))==null||k.scrollIntoView({block:"start"})})})}),d.querySelectorAll(".m-chart-details-link").forEach(m=>{m.addEventListener("click",()=>{if(m.dataset.metricId==="irrigation"){ge(()=>import("./chart-fullscreen-D3iQiqBD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then($=>$.initChartFullscreen({linkedSensorIds:i,metricId:"irrigation",backLabel:e.name,parcel:e}));return}const k=+m.dataset.sensorId,C=ne.find($=>$.id===k);C&&ge(()=>import("./chart-fullscreen-D3iQiqBD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then($=>$.initChartFullscreen({sensor:C,linkedSensorIds:i,metricId:m.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),d.querySelectorAll(".m-msr-add-btn").forEach(m=>{m.addEventListener("click",()=>ta(m))}),d.addEventListener("click",m=>{const k=m.target.closest(".m-cumul-add-btn");if(k){const $=k.dataset.cumulMetricId,L=k.dataset.cumulVal,P=Wn[$];if(!P)return;const q=document.createElement("div");q.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${P.metricLabel}</strong> (<em>${L}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,de({title:"Tableau de bord",body:q,doneLabel:"Ajouter",onDone:()=>{const z=$==="hf"?{cold:Se.hfSeuil}:$==="dj"?{low:Se.djMin,high:Se.djMax}:null;if(gs({metricId:$,...P,subjectKey:`p-${e.id}`,subjectLabel:e.name,fromDate:`${new Date().getFullYear()}-01-01`,value:L,thresholds:z})==="max"){U("Maximum de cumuls atteint (5)");return}U("Cumul ajouté au tableau de bord")}});return}const C=m.target.closest(".m-cumul-edit-btn");if(C){const $=C.dataset.cumulMetricId,L=document.createElement("div");$==="hf"?(L.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Se.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,de({title:"Heures de froid",body:L,doneLabel:"Appliquer",onDone:()=>{var P;Se.hfSeuil=+(((P=L.querySelector("#edit-hf-seuil"))==null?void 0:P.value)??7.2),S()}})):$==="dj"&&(L.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Se.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Se.djMax}" step="1" min="-20" max="50">
          </div>`,de({title:"Degrés-jours",body:L,doneLabel:"Appliquer",onDone:()=>{var P,q;Se.djMin=+(((P=L.querySelector("#edit-dj-min"))==null?void 0:P.value)??0),Se.djMax=+(((q=L.querySelector("#edit-dj-max"))==null?void 0:q.value)??18),S()}}));return}}),d.querySelectorAll("[data-open-sensor]").forEach(m=>{m.addEventListener("click",()=>{const k=+m.dataset.openSensor,C=ne.find($=>$.id===k);C&&ge(()=>Promise.resolve().then(()=>Rt),void 0).then($=>$.initSensorDetail(C,"donnees",Bt))})}),d.querySelectorAll(".btn-sensor-more").forEach(m=>{m.addEventListener("click",k=>{k.stopPropagation();const C=+m.dataset.sensorId,$=ne.find(z=>z.id===C);if(!$)return;const L=$.model==="P+"||$.model==="PT"?"Station météo":$.model==="P"?"Pluviomètre":$.model,P=document.createElement("div");P.innerHTML=`
          <div style="padding:8px 0">
            <button id="sheet-open-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;text-align:left">
              <i class="bi bi-broadcast" style="color:#0172A4;width:22px;text-align:center"></i>Voir la fiche capteur
            </button>
            <div style="height:.5px;background:rgba(0,0,0,.1);margin:0 20px"></div>
            <button id="sheet-unlink-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;color:#ff3b30;text-align:left">
              <i class="bi bi-x-circle" style="width:22px;text-align:center"></i>Délier de cette parcelle
            </button>
          </div>`;const q=de({title:`${L} · ${$.serial}`,body:P,doneLabel:"Fermer",onDone:()=>{}});P.querySelector("#sheet-open-sensor").addEventListener("click",()=>{q.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{q.remove(),ge(()=>Promise.resolve().then(()=>Rt),void 0).then(z=>z.initSensorDetail($,"donnees",Bt))},280)}),P.querySelector("#sheet-unlink-sensor").addEventListener("click",()=>{q.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{q.remove(),ht({title:"Délier le capteur",message:`Délier <strong>${L} — ${$.serial}</strong> de <strong>${e.name}</strong> ?`,confirmLabel:"Délier",confirmColor:"#ff3b30",onConfirm:()=>{const z=i.indexOf(C);z!==-1&&i.splice(z,1),$.parcelIds=$.parcelIds.filter(F=>F!==e.id),S(),U(`${$.serial} délié`)}})},280)})})}),d.querySelectorAll(".m-list-row[data-action]").forEach(m=>{m.addEventListener("click",()=>{m.dataset.action==="edit-exploitation"?v():m.dataset.action==="edit-env"?r():m.dataset.action==="edit-irrigation"?w():m.dataset.action==="edit-volume-max"?b():m.dataset.action==="edit-texture"?u():m.dataset.action==="edit-integrations"?g():m.dataset.action==="archive"?ht({title:"Archiver la parcelle",message:`Archiver <strong>${e.name}</strong> ? Elle ne sera plus visible dans votre exploitation.`,confirmLabel:"Archiver",confirmColor:"#ff9f0a",onConfirm:()=>U("Parcelle archivée (fonctionnalité à venir)")}):U("Fonctionnalité à venir")})}),d.querySelectorAll(".m-widget-menu").forEach(m=>{m.addEventListener("click",k=>{var z;k.stopPropagation();const C=m.dataset.wid;if(!C)return;(z=d.querySelector(".m-widget-dd"))==null||z.remove();const $=document.createElement("div");$.className="m-widget-dd",$.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:180px",$.innerHTML=`<button class="m-widget-dd-remove" data-wid="${C}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const L=d.querySelector(".m-detail-content"),P=m.getBoundingClientRect(),q=L.getBoundingClientRect();$.style.top=`${P.bottom-q.top+L.scrollTop+4}px`,$.style.right=`${q.right-P.right}px`,L.style.position="relative",L.appendChild($),$.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{$.remove();const F=Ft(e,i).filter(R=>R!==C);ks(e.id,F),S()}),setTimeout(()=>document.addEventListener("click",()=>$.remove(),{once:!0}),0)})}),(T=d.querySelector(".m-add-widget-btn"))==null||T.addEventListener("click",()=>Yn(e,i,S)),(D=d.querySelector(".m-irrig-act-saisie"))==null||D.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(m=>m.openIrrigationSaisie([e],U,{ids:[e.id],label:e.name},!0,S))}),(j=d.querySelector(".m-irrig-act-saison"))==null||j.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(m=>m.openIrrigationStrategie([e],U,{ids:[e.id],label:e.name},null,!0,S))}),(I=d.querySelector(".m-irrig-set-type"))==null||I.addEventListener("click",()=>{o="params",d.querySelectorAll(".m-detail-tab").forEach(m=>m.classList.toggle("active",m.dataset.view==="params")),S(),w()}),d.querySelectorAll(".m-pcumul-del").forEach(m=>{m.addEventListener("click",k=>{k.stopPropagation();const C=+m.dataset.pid,$=ot(C),L=new Set($.hidden||[]);L.add(m.dataset.cid),Mt(C,{hidden:[...L]}),S()})}),d.querySelectorAll(".m-pcumul-date").forEach(m=>{m.addEventListener("click",()=>{var k;return(k=m.showPicker)==null?void 0:k.call(m)}),m.addEventListener("change",()=>{const k=+m.dataset.pid,C=m.dataset.cid,$=m.value;if(!$||(Date.now()-new Date($))/864e5>365)return;const q=ot(k).dates||{};q[C]=$,Mt(k,{dates:q});const z=m.closest(".m-cumuls-saved-card"),F=z==null?void 0:z.querySelector(".m-pcumul-value");if(F){const R=z.querySelector(".m-pcumul-unit"),Y=(R==null?void 0:R.textContent.trim())||"",te=Xe(k,C,$);F.innerHTML=`${te}<span class="m-pcumul-unit">${Y}</span>`}})}),d.querySelectorAll(".m-pcumul-cfg").forEach(m=>{m.addEventListener("click",k=>{var F;k.stopPropagation();const C=+m.dataset.pid,$=m.dataset.cid,P={...ot(C).cfg},q=oa[$];if(!q)return;(F=d.querySelector(".m-pcumul-cfg-panel"))==null||F.remove();const z=document.createElement("div");z.className="m-pcumul-cfg-panel",z.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",z.innerHTML=q.map(R=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${R.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${R.key}" value="${P[R.key]??R.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',m.closest(".m-cumuls-saved-card").after(z),z.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{z.querySelectorAll(".m-pcumul-cfg-inp").forEach(R=>{P[R.dataset.key]=parseFloat(R.value)||0}),Mt(C,{cfg:P}),z.remove(),S()})})}),d.querySelectorAll(".m-pcumul-add").forEach(m=>{m.addEventListener("click",k=>{k.stopPropagation();const C=+m.dataset.pid,$=m.dataset.cid,L=ot(C),P=new Set(L.hidden||[]);P.delete($),Mt(C,{hidden:[...P]}),S()})})}d.querySelectorAll(".m-detail-tab").forEach(y=>{y.addEventListener("click",()=>{d.querySelectorAll(".m-detail-tab").forEach(x=>x.classList.remove("active")),y.classList.add("active"),o=y.dataset.view,S()})}),d.querySelector(".m-detail-back").addEventListener("click",me),d.querySelector("#d-star").addEventListener("click",()=>{p=!p;const y=d.querySelector("#d-star");y.querySelector("i").className=p?"bi bi-star-fill":"bi bi-star",y.style.color=p?"#f5c842":"",U(p?"Ajouté aux favoris":"Retiré des favoris")}),d.querySelector("#d-plus").addEventListener("click",()=>{var y;(y=window.showMobileAddPage)==null||y.call(window)}),d.querySelector("#d-journal").addEventListener("click",()=>xa(e)),S()}function fa(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}const ha=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"],bi=e=>{const[i,t,a]=e.split("-");return`${a}/${t}/${i}`};function ga(e){const i=[],t=(n,o)=>i.push({id:`auto-mod-${n}-${o.slice(0,16)}`,type:"modification",date:n,texte:o,_system:!0});t("2024-01-01","Création de la parcelle"),e.crop&&t("2024-03-15",`Culture définie : ${e.crop}`);const a=e.substrate?`Substrat : ${e.substrate}`:e.texture;return a&&t("2024-03-15",`Texture de sol définie : ${a}`),e.irrigation&&t("2024-04-01",`Type d'irrigation défini : ${e.irrigation}`),i}function ya(e){const i=[],t=ce.filter(n=>n.plotId===e);t.filter(n=>!n.fromStrategy).forEach(n=>{i.push({id:`auto-irrig-${n.iso}-${n.mm}`,type:"irrigation",date:n.iso,texte:n.real?`Irrigation ponctuelle de ${n.mm} mm enregistrée.`:`Irrigation ponctuelle de ${n.mm} mm planifiée.`,_system:!0})});const a=new Map;return t.filter(n=>n.fromStrategy&&n.seasonId).forEach(n=>{a.has(n.seasonId)||a.set(n.seasonId,[]),a.get(n.seasonId).push(n)}),a.forEach((n,o)=>{n.sort((d,v)=>d.iso.localeCompare(v.iso));const s=n[0],l=n[n.length-1],p=s.mm,c=n.length>1?Math.round((new Date(n[1].iso)-new Date(n[0].iso))/864e5):7;i.push({id:`auto-irrig-season-${o}`,type:"irrigation",date:s.iso,texte:`Saison d'irrigation programmée : ${p} mm tous les ${c} jours, du ${bi(s.iso)} au ${bi(l.iso)} (${n.length} irrigation${n.length>1?"s":""}, ${n.length*p} mm au total).`,_system:!0})}),i}function xa(e){const i=ve.find(o=>o.id===e.orgId),t=(i==null?void 0:i.ville)||"",a=ye(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);a.querySelector(".m-detail-back").addEventListener("click",me);function n(){var w,r;const o=a.querySelector("#mjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(u=>u.linkedType==="parcel"&&u.linkedId===e.id).map((u,h)=>({id:`dash-${h}`,type:"note",date:u.date,texte:u.text,auteur:u.auteur,role:u.role,_fromDashboard:!0})),l=[...ga(e),...ya(e.id)],p=[..._t(e.id),...s,...l].sort((u,h)=>h.date.localeCompare(u.date)),c=bi,d={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotColor:"#1d4ed8",dotBg:"#eff6ff",badgeCls:"irrigation"},integration:{label:"Intégration",icon:"bi-plug-fill",dotColor:"#7a4fa0",dotBg:"#f5f0fb",badgeCls:"integration"},modification:{label:"Modification",icon:"bi-pencil-square",dotColor:"#7a6a1e",dotBg:"#fdf8ee",badgeCls:"modification"}};let v=`
      <div style="padding:12px 16px 4px;display:flex;flex-direction:column;gap:8px">
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-note">
          <i class="bi bi-pencil-square"></i> Ajouter une note
        </button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-trait">
          <i class="bi bi-eyedropper"></i> Ajouter un traitement
        </button>
      </div>
    `;p.length===0?v+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(v+='<div class="m-jrn-timeline">',p.forEach((u,h)=>{const b=d[u.type]||d.note,f=u.type==="traitement",g=h===p.length-1,S=!!u._fromDashboard,E=!!u._system;v+=`
          <div class="m-jrn-entry" data-id="${u.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${b.dotBg};color:${b.dotColor};border-color:${b.dotColor}40">
                <i class="bi ${b.icon}"></i>
              </div>
              ${g?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${c(u.date)}</span>
                <span class="journal-type-badge journal-type-badge--${b.badgeCls}">${b.label}</span>
                ${S?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':E?"":`<button class="m-jrn-del" data-id="${u.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${u.texte?`<div class="m-jrn-texte">${u.texte}</div>`:""}
              ${u.auteur?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${u.auteur}${fa(u.role)}</div>`:""}
              ${f&&(u.produit||u.dose||u.cible)?`
                <div class="m-jrn-meta">
                  ${u.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${u.produit}</span>`:""}
                  ${u.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${u.dose}</span>`:""}
                  ${u.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${u.cible}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),v+="</div>"),o.innerHTML=v,(w=o.querySelector("#mjrn-add-note"))==null||w.addEventListener("click",()=>Ui("note",e.id,n)),(r=o.querySelector("#mjrn-add-trait"))==null||r.addEventListener("click",()=>Ui("traitement",e.id,n)),o.querySelectorAll(".m-jrn-del").forEach(u=>{u.addEventListener("click",()=>{const h=parseInt(u.dataset.id);xi(e.id,_t(e.id).filter(b=>b.id!==h)),n()})})}n()}function Ui(e,i,t){const a=e==="traitement",n=new Date().toISOString().slice(0,10),o=Bt==="admin"?"conseiller":"membre",s=ve.find(c=>c.id===(Bt==="admin"?100:1)),l=s?`${s.prenomProprietaire} ${s.nomProprietaire}`:"Jean Dupont",p=document.createElement("div");p.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:12px">
      ${a?"":`
      <div>
        <div class="m-form-label">Catégorie</div>
        <select class="m-sheet-input" id="mjf-category">
          ${ha.map(c=>`<option value="${c}">${c}</option>`).join("")}
        </select>
      </div>`}
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="mjf-date" value="${n}">
      </div>
      <div>
        <div class="m-form-label">${a?"Observations":"Texte"}</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="${a?"Conditions météo, remarques…":"Votre note…"}" style="resize:none;min-height:90px"></textarea>
      </div>
      ${a?`
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
    </div>`,de({title:a?"Ajouter un traitement":"Ajouter une note",body:p,doneLabel:"Enregistrer",onDone:()=>{var r;const c=p.querySelector("#mjf-date").value||n,d=p.querySelector("#mjf-texte").value.trim(),v=a?"":((r=p.querySelector("#mjf-category"))==null?void 0:r.value)||"",w={id:Date.now(),type:e,date:c,texte:d,auteur:l,role:o};a||(w.category=v),a&&(w.produit=p.querySelector("#mjf-produit").value.trim(),w.dose=p.querySelector("#mjf-dose").value.trim(),w.cible=p.querySelector("#mjf-cible").value.trim()),!(!d&&!w.produit)&&(xi(i,[w,..._t(i)]),t())}}),setTimeout(()=>{var c;return(c=p.querySelector("#mjf-texte"))==null?void 0:c.focus()},380)}const si=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:vi},Symbol.toStringTag,{value:"Module"})),dt=100,$a={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function ut(e,i){const t=$a[i];return t?ne.some(a=>a.parcelIds.includes(e.id)&&t.includes(a.model)):!0}const Tt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function wa(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*a)/255>.5?"#000000":"#ffffff"}function Yi(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"irrigation":return i===0?"#c7c7cc":i<30?"#FFDFB8":"#FF8C00";case"etp":return i<2?"#D6EDF9":i<5?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"temp_rosee":return i<5?"#D2DEFA":i<12?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"rfu":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function Sa(e,i){const t=new Date().toISOString().split("T")[0],a=s=>{const l=new Date;return l.setDate(l.getDate()-s),l.toISOString().split("T")[0]},n=s=>{const l=new Date;return l.setDate(l.getDate()+s),l.toISOString().split("T")[0]},o=ce.filter(s=>s.plotId===e);switch(i){case"Aujourd'hui":return o.filter(s=>s.iso===t).reduce((s,l)=>s+l.mm,0);case"7 derniers jours":return o.filter(s=>s.real&&s.iso>=a(7)).reduce((s,l)=>s+l.mm,0);case"30 derniers jours":return o.filter(s=>s.real&&s.iso>=a(30)).reduce((s,l)=>s+l.mm,0);case"Demain":return o.filter(s=>!s.real&&s.iso===n(1)).reduce((s,l)=>s+l.mm,0);case"7 prochains jours":return o.filter(s=>!s.real&&s.iso>t&&s.iso<=n(7)).reduce((s,l)=>s+l.mm,0);case"30 prochains jours":return o.filter(s=>!s.real&&s.iso>t&&s.iso<=n(30)).reduce((s,l)=>s+l.mm,0);case"Toute la saison":return o.filter(s=>s.real).reduce((s,l)=>s+l.mm,0);default:return o.filter(s=>s.real).reduce((s,l)=>s+l.mm,0)}}function Ea(e){switch(e){case"irrigation":return 0;case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function ka(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const a=i==="admin",n=ve.filter(g=>g.id!==dt);Object.fromEntries(ve.map(g=>[g.id,g]));let o=null,s=null;const l={};let p="carte",c="pluie",d="7 derniers jours",v="all";function w(g){if(c==="irrigation")return Sa(g,d);const S=`${g}-${c}-${d}`;return S in l||(l[S]=Ea(c)),l[S]}function r(){return a?v==="all"?le:v===String(dt)?le.filter(g=>g.orgId===dt):le.filter(g=>String(g.orgId)===v):le.filter(g=>g.orgId===1)}function u(){if(o){try{o.remove()}catch{}o=null,s=null}}function h(){u();const g=Tt.find(x=>x.id===c)||Tt[0],S=r(),E=a?`
      <select class="m-filter-select" id="org-filter" style="flex:0 0 44px;height:44px">
        <option value="all">Toutes les organisations</option>
        <option value="${dt}"${v===String(dt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${n.map(x=>`<option value="${x.id}"${v===String(x.id)?" selected":""}>${x.name}</option>`).join("")}
      </select>`:"",M=[...S].sort((x,A)=>{const T=ut(x,c),D=ut(A,c);return T&&!D?-1:!T&&D?1:T?w(A.id)-w(x.id):0}),y=M.length?`<div class="m-plain-list">${M.map(x=>{const A=[x.crop,x.irrigation].filter(Boolean).join(" · "),T=ut(x,c),D=ne.filter(j=>j.parcelIds.includes(x.id)).some(j=>j.event&&(Array.isArray(j.event)?j.event.length>0:!0));return`
            <div class="m-plain-row m-tappable" data-plot-id="${x.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${x.name}${D?' <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px"></span>':""}</span>
                ${A?`<span class="m-plain-city">${A}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                ${(()=>{const j=T&&!(c==="irrigation"&&!ce.some(m=>m.plotId===x.id)),I=j?w(x.id):null;return`<span class="m-plain-data${j?"":" m-plain-na"}"${j?` style="color:${Yi(c,I)}"`:""}>${j?`${I} ${g.unit}`:"—"}</span>`})()}
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
            ${Tt.map(x=>`<option value="${x.id}"${x.id===c?" selected":""}>${x.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${g.aggs.map(x=>`<option${x===d?" selected":""}>${x}</option>`).join("")}
          </select>
        </div>
        ${E}
      </div>
      ${p==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${y}</div>`}`,f(),p==="carte"&&b(S,g)}function b(g,S){const E=window.L;E&&setTimeout(()=>{const M=t.querySelector("#parcel-map");if(!M)return;o=E.map(M,{zoomControl:!1,attributionControl:!1}),E.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(o);const y=[];g.forEach(x=>{var L;const A=c!=="irrigation"||ce.some(P=>P.plotId===x.id),T=ut(x,c)&&A?`${w(x.id)} ${S.unit}`:"—",D=ne.filter(P=>P.parcelIds.includes(x.id)).map(P=>P.id),j=()=>vi(x,D),I=[x.lat,x.lng],m=ut(x,c)&&A,k=m?Yi(c,w(x.id)):"#0172A4";x.latlngs&&x.latlngs.length>=3?(E.polygon(x.latlngs,{color:"#fff",weight:2,fillColor:k,fillOpacity:.35}).addTo(o).on("click",j),y.push(...x.latlngs)):y.push(I);const C=E.circleMarker(I,{radius:m?8:6,color:"#fff",weight:2,fillColor:k,fillOpacity:m?.95:.4}).addTo(o);if(D.some(P=>{const q=ne.find(z=>z.id===P);return(q==null?void 0:q.event)&&(Array.isArray(q.event)?q.event.length>0:!0)})&&E.marker(I,{icon:E.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(o),m){C.bindTooltip(T,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const P=z=>{if(!z)return;const F=wa(k);z.style.setProperty("background",k,"important"),z.style.setProperty("color",F,"important"),z.style.setProperty("border-color",F,"important"),z.style.setProperty("box-shadow","none","important")},q=(L=C.getTooltip())==null?void 0:L.getElement();q&&P(q),C.on("tooltipopen",z=>P(z.tooltip.getElement()))}C.on("click",j)}),y.length&&(s=y,o.fitBounds(y,{padding:[32,32]})),o.invalidateSize()},0)}window.addEventListener("m-tab-change",g=>{g.detail==="parcelles"&&p==="carte"&&o&&setTimeout(()=>{o.invalidateSize(),s!=null&&s.length&&o.fitBounds(s,{padding:[32,32]})},50)});function f(){var g,S,E;t.querySelectorAll(".m-view-btn").forEach(M=>M.addEventListener("click",()=>{p=M.dataset.view,h()})),(g=t.querySelector("#metric-sel"))==null||g.addEventListener("change",M=>{var y;c=M.target.value,d=((y=Tt.find(x=>x.id===c))==null?void 0:y.defaultAgg)||"",h()}),(S=t.querySelector("#agg-sel"))==null||S.addEventListener("change",M=>{d=M.target.value,h()}),(E=t.querySelector("#org-filter"))==null||E.addEventListener("change",M=>{v=M.target.value,h()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(M=>{M.addEventListener("click",()=>{const y=le.find(A=>A.id===+M.dataset.plotId);if(!y)return;const x=ne.filter(A=>A.parcelIds.includes(y.id)).map(A=>A.id);vi(y,x)})})}h()}const Ee={djMin:0,djMax:18,hfSeuil:7.2},La={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"}},Ca=4,Aa={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},Ma={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"},fi={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Ta={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"};function wi(e){return e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[15,60]:e==="CHP-60/90"?[15,90]:null}function Zi(e,i){const t=fi[e.model]?`${fi[e.model]} · ${e.model}`:e.model,a=wi(e.model)&&e.depth!=null?`${e.depth} cm`:null;return[t,a,i].filter(Boolean).join(" · ")}const xt={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function Ts(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(a,n)=>{const o=n/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(o-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,s))})}const Is={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Ia(e,i,t,a,n,o=20){const s=Is[e]||10080,l=new Date,p=w=>e==="1d"||e==="hier"?`${String(w.getHours()).padStart(2,"0")}h`:e==="365d"?w.toLocaleDateString("fr-FR",{month:"short"}):`${String(w.getDate()).padStart(2,"0")}/${String(w.getMonth()+1).padStart(2,"0")}`,c=4,d=i-t-a,v=n-o;return Array.from({length:c+1},(w,r)=>{const u=r/c,h=new Date(l.getTime()-(1-u)*s*6e4),b=(t+u*d).toFixed(1),f=r===0?"start":r===c?"end":"middle";return[`<line x1="${b}" y1="${v}" x2="${b}" y2="${v+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${b}" y="${n-3}" text-anchor="${f}" font-size="9" fill="#8e8e93" font-family="-apple-system">${p(h)}</text>`].join("")}).join("")}function ja(e,i,t,a="7d",n=""){const o=js[a]||60,s=Ts(e,o),l=320,p=100,c=34,d=6,v=10,w=20,r=l-c-d,u=p-v-w,h=t?0:Math.min(...s),b=Math.max(...s,h+.001),f=b-h,g=m=>c+m/(s.length-1)*r,S=m=>v+u-(m-h)/f*u,E=`g${Math.random().toString(36).slice(2,8)}`,M=[0,.5,1].map(m=>{const k=h+m*f,C=v+u-m*u;return`<text x="${c-3}" y="${(C+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${k<10?k.toFixed(1):Math.round(k)}</text>`}).join(""),y=[.25,.5,.75].map(m=>`<line x1="${c}" y1="${(v+u-m*u).toFixed(1)}" x2="${l-d}" y2="${(v+u-m*u).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),x=`<line x1="${c}" y1="${v+u}" x2="${l-d}" y2="${v+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,A=Ia(a,l,c,d,p);if(t){const m=r/s.length*.7;return`<svg viewBox="0 0 ${l} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      ${M}${y}${x}
      ${s.map((k,C)=>{const $=(k-h)/f*u,L=v+u-$;return`<rect x="${(g(C)-m/2).toFixed(1)}" y="${L.toFixed(1)}" width="${m.toFixed(1)}" height="${$.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${A}
    </svg>`}const T=s.map((m,k)=>[g(k),S(m)]),D=T.map(([m,k],C)=>`${C?"L":"M"}${m.toFixed(1)},${k.toFixed(1)}`).join(" "),j=`${D} L${g(s.length-1).toFixed(1)},${(v+u).toFixed(1)} L${c},${(v+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(m=>+m.toFixed(2)),minV:+h.toFixed(2),maxV:+b.toFixed(2)}))}" data-color="${i}" data-unit="${n}" style="position:relative">
    <svg viewBox="0 0 ${l} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      <defs><linearGradient id="${E}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${M}${y}${x}
      <path d="${j}" fill="url(#${E})"/>
      <path d="${D}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${T.map(([m,k])=>`<circle cx="${m.toFixed(1)}" cy="${k.toFixed(1)}" r="2" fill="${i}"/>`).join("")}
      ${A}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function qa(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*a)/255>.5?"#000000":"#ffffff"}function Pa(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,a=e.querySelector(".m-chart-tip"),n=e.querySelector(".m-chart-crosshair"),o=e.dataset.color||"#0172A4",s=e.dataset.unit||"";function l(c){const d=e.getBoundingClientRect(),v=Math.max(0,Math.min(1,(c-d.left)/d.width)),w=Math.round(v*(t.length-1)),r=t[w],u=v*100,h=(r<10?r.toFixed(1):String(Math.round(r)))+(s?` ${s}`:""),b=qa(o);n.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${u}%;width:1px;background:${o};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(u,75)}%;background:${o};color:${b};border:1.5px solid ${b};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=h}function p(){n.style.display="none",a.style.display="none"}e.addEventListener("pointermove",c=>{c.preventDefault(),l(c.clientX)}),e.addEventListener("pointerdown",c=>l(c.clientX)),e.addEventListener("pointerup",p),e.addEventListener("pointerleave",p),e.style.cursor="crosshair"}const js={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function Da(e,i,t){if(!t)return"";const a=js[i]||60,o=(Is[i]||10080)/(a*60),s=Ts(e,a);let l=[];if(t==="temp"){const p=s.reduce((d,v)=>d+Math.max(0,Math.min(v,Ee.djMax)-Ee.djMin),0)*(o/24),c=s.filter(d=>d<Ee.hfSeuil).length*o;l=[{label:"Degrés jours",val:`${Math.round(p)} DJ`,metricId:"dj",thresholdText:`${Ee.djMin}°C → ${Ee.djMax}°C`},{label:"Heures de froid",val:`${Math.round(c)} h`,metricId:"hf",thresholdText:`< ${Ee.hfSeuil}°C`}]}else if(t==="pluie")l=[{label:"Cumul pluie",val:`${s.reduce((c,d)=>c+d,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const p=s.filter(c=>c>120).length*o;l=[{label:"Ensoleillement",val:`${Math.round(p)} h`,metricId:"rayo"}]}else if(t==="hws"){const p=s.filter(c=>c>50).length*o;l=[{label:"Heures d'humectation",val:`${Math.round(p)} h`,metricId:"humec"}]}return l.length?`<div class="m-chart-cumuls">${l.map(p=>{const c=p.metricId==="dj"||p.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${p.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${p.label}</span>
          ${p.thresholdText?`<span class="m-chart-cumul-thresh">${p.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${p.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${c}
        <button class="m-cumul-add-btn" data-cumul-label="${p.label}" data-cumul-val="${p.val}" data-cumul-metric-id="${p.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}function za(e,i="7d",t="1h"){const a=xt[e.model]||[];if(!a.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const n={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},o={temp:"temperature"},s=new Set(["tseche","thumide"]),l=a.map(d=>{const v=n[d.id]||d.id,w=Da(d.id,i,d.cumulsType),r=s.has(d.id)?"":`<button class="m-msr-add-btn" data-msr-metric-id="${o[d.id]||d.id}" data-msr-label="${d.label}" data-msr-unit="${d.unit||""}" data-msr-color="${d.color}" data-msr-period="${i}" data-msr-step="${t}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`;return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${d.color}">${d.label}</span>
          ${r}
        </div>
        ${ja(d.id,d.color,d.cumul,i,d.unit||"")}
        <div class="m-chart-details-link" data-metric-id="${v}">Voir détails →</div>
        ${w}
      </div>`}).join(""),p=new Date().toISOString().slice(0,10),c=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-to m-custom-date" value="${p}">
      </div>`:""}
    </div>
    <div class="m-detail-section">${l}</div>`}function _a(e){var p;const i=(e.parcelIds||[]).map(c=>le.find(d=>d.id===c)).filter(Boolean),t=i[0]||null,a=t?ve.find(c=>c.id===t.orgId):null,n=e.networkQuality||0,o=n>70?"#30d158":n>40?"#ff9f0a":"#ff3b30",s=e.event?Array.isArray(e.event)?e.event:[e.event]:[],l=i.map((c,d)=>`<div class="m-list-row${d===i.length-1&&i.length>0,""}" data-unlink-plot="${c.id}">
      <span class="m-list-row-label">${c.name}</span>
      ${c.crop?`<span class="m-list-row-value">${c.crop}</span>`:""}
      <button data-unlink-plot-btn="${c.id}" style="background:none;border:none;padding:4px 6px;cursor:pointer;color:#ff3b30;font-size:13px;line-height:1;flex-shrink:0" title="Délier">
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
          <span class="m-list-row-value">${Ta[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${fi[e.model]||e.model}</span>
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

      ${(()=>{const c=wi(e.model);return c?`
          <div class="m-list-section-header">Configuration</div>
          <div class="m-list">
            <div class="m-list-row m-list-row--last" style="flex-wrap:wrap;gap:8px">
              <span class="m-list-row-label">Profondeur d'installation</span>
              <div style="display:flex;align-items:center;gap:6px;margin-left:auto">
                <input type="number" id="chp-depth-input" value="${e.depth??c[0]}" min="${c[0]}" max="${c[1]}" step="5"
                  style="width:62px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 8px;font-size:14px;font-family:inherit;background:#f5f5f7;text-align:center;-webkit-appearance:none">
                <span style="font-size:13px;color:#8e8e93">cm</span>
                <button id="chp-depth-save" style="background:#0172A4;color:#fff;border:none;border-radius:8px;padding:6px 12px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer">Enregistrer</button>
              </div>
              <div style="width:100%;font-size:11px;color:#8e8e93;margin-top:-4px">De ${c[0]} à ${c[1]} cm</div>
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
        ${s.length?s.map((c,d)=>{const v=c.toLowerCase().includes("déplacé");return`<div class="m-list-row" style="justify-content:space-between;gap:10px">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${c}</span>
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
        ${l}
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
    </div>`}function hi(e,i="donnees",t="admin"){var r;e.parcelIds||(e.parcelIds=[]);const a=e.parcelIds.length?le.find(u=>e.parcelIds.includes(u.id)):null;let n=i,o="7d",s="1h",l=!1;const p=a&&((r=ve.find(u=>u.id===a.orgId))==null?void 0:r.ville)||"",c=ye(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${Zi(e,p)}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres${e.event&&(!Array.isArray(e.event)||e.event.length>0)?' <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px;margin-bottom:1px;flex-shrink:0"></span>':""}</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function d(){const u=c.querySelector("#detail-content");n==="donnees"&&(u.innerHTML=za(e,o,s)),n==="params"&&(u.innerHTML=_a(e),v()),w()}function v(){const u=window.L,h=e.parcelIds.length?le.find(b=>e.parcelIds.includes(b.id)):null;!u||!h||setTimeout(()=>{const b=c.querySelector("#sensor-minimap");if(!b)return;const f=u.map(b,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(f),f.setView([h.lat,h.lng],15),u.circleMarker([h.lat,h.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(f)},50)}function w(){var u,h,b,f;(u=c.querySelector(".m-period-sel"))==null||u.addEventListener("change",g=>{o=g.target.value,d()}),(h=c.querySelector(".m-step-sel"))==null||h.addEventListener("change",g=>{s=g.target.value,d()}),c.querySelectorAll(".m-chart-svg-wrap").forEach(g=>Pa(g)),c.querySelectorAll(".m-chart-details-link[data-metric-id]").forEach(g=>{g.addEventListener("click",()=>{ge(()=>import("./chart-fullscreen-D3iQiqBD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(S=>S.initChartFullscreen({sensor:e,metricId:g.dataset.metricId,backLabel:"Retour"}))})}),c.querySelectorAll(".m-msr-add-btn").forEach(g=>{g.addEventListener("click",()=>{const S=g.dataset.msrMetricId,E=`s-${e.id}`,M=`${e.model} ${e.serial}`,y=g.dataset.msrPeriod,x=g.dataset.msrStep,A=hs({subjectKey:E,subjectLabel:M,metricId:S,metricLabel:g.dataset.msrLabel,unit:g.dataset.msrUnit||"",period:y,periodLabel:Aa[y]||y,step:x,stepLabel:Ma[x]||x,color:g.dataset.msrColor});if(A==="max"){U(`Maximum de mesures atteint (${Ca})`);return}if(A==="dup"){U("Cette mesure est déjà dans vos favoris");return}U("Mesure ajoutée au tableau de bord")})}),c.addEventListener("click",g=>{const S=g.target.closest(".m-cumul-add-btn");if(S){const M=S.dataset.cumulMetricId,y=S.dataset.cumulVal,x=La[M];if(!x)return;const A=`${e.model} ${e.serial}`,T=document.createElement("div");T.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${x.metricLabel}</strong> (<em>${y}</em>) au tableau de bord du capteur <strong>${e.serial}</strong> ?</div>`,de({title:"Tableau de bord",body:T,doneLabel:"Ajouter",onDone:()=>{const D=M==="hf"?{cold:Ee.hfSeuil}:M==="dj"?{low:Ee.djMin,high:Ee.djMax}:null;if(gs({metricId:M,...x,subjectKey:`s-${e.id}`,subjectLabel:A,fromDate:`${new Date().getFullYear()}-01-01`,value:y,thresholds:D})==="max"){U("Maximum de cumuls atteint (5)");return}U("Cumul ajouté au tableau de bord")}});return}const E=g.target.closest(".m-cumul-edit-btn");if(E){const M=E.dataset.cumulMetricId,y=document.createElement("div");M==="hf"?(y.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Ee.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,de({title:"Heures de froid",body:y,doneLabel:"Appliquer",onDone:()=>{var x;Ee.hfSeuil=+(((x=y.querySelector("#edit-hf-seuil"))==null?void 0:x.value)??7.2),d()}})):M==="dj"&&(y.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Ee.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Ee.djMax}" step="1" min="-20" max="50">
          </div>`,de({title:"Degrés-jours",body:y,doneLabel:"Appliquer",onDone:()=>{var x,A;Ee.djMin=+(((x=y.querySelector("#edit-dj-min"))==null?void 0:x.value)??0),Ee.djMax=+(((A=y.querySelector("#edit-dj-max"))==null?void 0:A.value)??18),d()}}))}}),c.querySelectorAll(".m-list-row[data-action]").forEach(g=>{g.addEventListener("click",()=>{const S=g.dataset.action;if(S==="add-maintenance")Ki(e,{openForm:!0});else if(S==="add-plot")Ha(e,t,d);else if(S==="delete"){const E=le.find(M=>{var y;return(y=e.parcelIds)==null?void 0:y.includes(M.id)});ht({title:"Retirer de l'exploitation",message:`Retirer <strong>${e.model} ${e.serial}</strong> de l'exploitation ?${E?`<br><br>Parcelle liée : <strong>${E.name}</strong>.`:""}<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>U("Capteur retiré de l'exploitation (fonctionnalité à venir)")})}else U("Fonctionnalité à venir")})}),c.querySelectorAll(".ev-stop-btn").forEach(g=>{g.addEventListener("click",S=>{S.stopPropagation();const E=+g.dataset.evIdx;Array.isArray(e.event)?(e.event=e.event.filter((M,y)=>y!==E),e.event.length||(e.event=null)):e.event=null,d()})}),c.querySelectorAll("[data-unlink-plot-btn]").forEach(g=>{g.addEventListener("click",S=>{S.stopPropagation();const E=+g.dataset.unlinkPlotBtn,M=le.find(y=>y.id===E);ht({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${(M==null?void 0:M.name)||"la parcelle"}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(y=>y!==E),U(`Délié de ${(M==null?void 0:M.name)||"la parcelle"}`),d()}})})}),(b=c.querySelector("#sensor-name-input"))==null||b.addEventListener("change",g=>{const S=g.target.value.trim();try{const M=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};S?M[e.id]=S:delete M[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(M))}catch{}const E=c.querySelector(".m-detail-title");E&&(E.textContent=S||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))}),(f=c.querySelector("#chp-depth-save"))==null||f.addEventListener("click",()=>{const g=c.querySelector("#chp-depth-input"),S=wi(e.model);if(!g||!S)return;let E=parseInt(g.value);if(isNaN(E))return;E=Math.max(S[0],Math.min(S[1],E)),g.value=E,e.depth=E;const M=c.querySelector(".m-detail-subtitle");M&&(M.textContent=Zi(e,p)),U(`Profondeur enregistrée : ${E} cm`)})}c.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{c.querySelectorAll(".m-detail-tab").forEach(h=>h.classList.remove("active")),u.classList.add("active"),n=u.dataset.view,d()})}),c.querySelector(".m-detail-back").addEventListener("click",me),c.querySelector("#d-star").addEventListener("click",()=>{l=!l;const u=c.querySelector("#d-star");u.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",u.style.color=l?"#f5c842":"",U(l?"Ajouté aux favoris":"Retiré des favoris")}),c.querySelector("#d-journal").addEventListener("click",()=>Ki(e)),c.querySelector("#d-plus").addEventListener("click",()=>{var u;return(u=window.showMobileAddPage)==null?void 0:u.call(window)}),d()}const qs=e=>`sensor-journal-${e}`,Ps=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function gi(e){try{const i=localStorage.getItem(qs(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",role:"conseiller",texte:""},{id:2,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",role:"conseiller",texte:""},{id:3,type:"note",date:"2023-11-02",user:"Jean Dupont",role:"membre",texte:"Capteur légèrement déplacé — redressé"}]}function Ds(e,i){localStorage.setItem(qs(e),JSON.stringify(i))}function Ha(e,i,t){const a=i==="adherent"?1:null,n=a?le.filter(c=>c.orgId===a):le.filter(c=>c.orgId!==100),o=new Set((xt[e.model]||[]).map(c=>c.id)),s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function l(c=""){const d=c.toLowerCase(),v=d?n.filter(r=>r.name.toLowerCase().includes(d)||(r.crop||"").toLowerCase().includes(d)):n,w=s.querySelector("#plot-list");if(!v.length){w.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}w.innerHTML="",v.forEach((r,u)=>{const h=e.parcelIds.includes(r.id),b=u===v.length-1,f=document.createElement("div");f.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${b?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,f.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${r.name}</span>
          ${r.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${r.crop}</span>`:""}
        </span>
        ${h?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,f.addEventListener("click",()=>{if(h)ht({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${r.name}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(g=>g!==r.id),U(`Délié de ${r.name}`),l(c),t()}});else{const g=ne.find(S=>S.id!==e.id&&S.parcelIds.includes(r.id)&&(xt[S.model]||[]).some(E=>o.has(E.id)));g?(p.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{p.remove(),Ba(e,r,g,t)},280)):(e.parcelIds=[...e.parcelIds,r.id],U(`Lié à ${r.name}`),l(c),t())}}),w.appendChild(f)})}l();const p=de({title:"Parcelles liées",body:s,doneLabel:"Fermer",onDone:()=>{t()}});s.querySelector("#plot-search").addEventListener("input",c=>l(c.target.value))}function Ba(e,i,t,a){const n=(xt[t.model]||[]).filter(l=>(xt[e.model]||[]).some(p=>p.id===l.id)).map(l=>l.label).join(", "),o=document.createElement("div");o.innerHTML=`
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
    <div style="height:6px"></div>`;const s=de({title:"Conflit de métrique",body:o,doneLabel:"Annuler",onDone:()=>{}});o.querySelector("#keep-existing").addEventListener("click",()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),U("Liaison annulée")},280)}),o.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(l=>l!==i.id),e.parcelIds=[...e.parcelIds,i.id],s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),U(`Lié à ${i.name}`),a()},280)})}function Ki(e,i={}){const t=ye(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",me);const a=Object.fromEntries(Ps.map(o=>[o.id,o]));function n(){var d;const o=t.querySelector("#sjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(v=>v.linkedType==="sensor"&&v.linkedId===e.id).map((v,w)=>({id:`dash-${w}`,type:"note",date:v.date,texte:v.text,user:v.auteur,_fromDashboard:!0})),l=[...gi(e.id),...s].sort((v,w)=>w.date.localeCompare(v.date)),p=v=>{const[w,r,u]=v.split("-");return`${u}/${r}/${w}`};let c=`
      <div style="padding:12px 16px 8px">
        <button class="m-btn m-btn--primary" id="sjrn-add-btn">
          <i class="bi bi-plus-circle-fill"></i> Ajouter une opération de maintenance
        </button>
      </div>
    `;l.length===0?c+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(c+='<div class="m-jrn-timeline">',l.forEach((v,w)=>{const r=a[v.type]||{label:v.type,icon:"bi-circle",color:"#8e8e93"},u=w===l.length-1,h=!!v._fromDashboard;c+=`
          <div class="m-jrn-entry" data-id="${v.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${r.color}18;color:${r.color};border-color:${r.color}40">
                <i class="bi ${r.icon}"></i>
              </div>
              ${u?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${p(v.date)}</span>
                <span style="font-size:12px;font-weight:600;color:${r.color}">${r.label}</span>
                ${h?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${v.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${v.texte?`<div class="m-jrn-texte">${v.texte}</div>`:""}
              ${v.user?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${v.user}${Fa(v.role)}</div>`:""}
            </div>
          </div>`}),c+="</div>"),o.innerHTML=c,(d=o.querySelector("#sjrn-add-btn"))==null||d.addEventListener("click",()=>Xi(e.id,n)),o.querySelectorAll(".m-jrn-del").forEach(v=>{v.addEventListener("click",()=>{const w=parseInt(v.dataset.id);Ds(e.id,gi(e.id).filter(r=>r.id!==w)),n()})})}n(),i.openForm&&Xi(e.id,n)}function Fa(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}function Xi(e,i){const t=new Date().toISOString().slice(0,10),a=document.createElement("div");a.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${Ps.map(n=>`<option value="${n.id}">${n.label}</option>`).join("")}
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
    </div>`,de({title:"Opération de maintenance",body:a,doneLabel:"Enregistrer",onDone:()=>{const n=a.querySelector("#sjf-type").value,o=a.querySelector("#sjf-date").value||t,s=a.querySelector("#sjf-user").value.trim()||"Jean Dupont",l=localStorage.getItem("menuRole")==="admin-reseau"?"conseiller":"membre",p=a.querySelector("#sjf-texte").value.trim();Ds(e,[{id:Date.now(),type:n,date:o,user:s,role:l,texte:p},...gi(e)]),i()}}),setTimeout(()=>{var n;return(n=a.querySelector("#sjf-texte"))==null?void 0:n.focus()},350)}const Rt=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:hi},Symbol.toStringTag,{value:"Module"})),pt=100,Qi=1,ni=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Ra={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Oa={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function It(e,i){return(Oa[e]||[]).includes(i)}function Na(e){return Ra[e]||e}function Va(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const jt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Wa(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*a)/255>.5?"#000000":"#ffffff"}function es(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"pothydr":return i<80?"#E2EAC7":i<150?"#A6C157":"#7D9537";case"teneur":return i<15?"#F7D2A1":i<30?"#ED9A2C":"#BC7210";case"temp_sol":return i<8?"#D9C6BF":i<18?"#795548":"#484646";case"temp_sche":return i<0?"#9DECDF":i<10?"#23B19B":"#177365";case"temp_hum":return i<0?"#D2DEFA":i<10?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function Ja(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Ga(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const a=i==="admin",n=ve.filter(y=>y.id!==pt),o=Object.fromEntries(le.map(y=>[y.id,y])),s=Object.fromEntries(ve.map(y=>[y.id,y]));let l=null,p=null;const c={};let d="carte",v="pluie",w="7 derniers jours",r="all";function u(y){const x=`${y}-${v}-${w}`;return x in c||(c[x]=Ja(v)),c[x]}function h(){if(a){if(r==="anomalies")return ne.filter(D=>D.event&&(Array.isArray(D.event)?D.event.length>0:!0));if(r==="all")return ne;if(r===String(pt)){const D=new Set(le.filter(j=>j.orgId===pt).map(j=>j.id));return ne.filter(j=>j.parcelIds.some(I=>D.has(I)))}const T=new Set(le.filter(D=>String(D.orgId)===r).map(D=>D.id));return ne.filter(D=>D.parcelIds.some(j=>T.has(j)))}const y=new Set(le.filter(T=>T.orgId===Qi).map(T=>T.id)),x=ne.filter(T=>T.parcelIds.some(D=>y.has(D))),A=ne.filter(T=>!T.parcelIds.some(D=>y.has(D))&&ni.includes(T.model));return r==="mine"?x:r==="network"?A:[...x,...A]}function b(y){const x=y.parcelIds.length?o[y.parcelIds[0]]:null;if(!x)return null;const A=(y.id*7919%1e3-500)/1e6,T=(y.id*6271%1e3-500)/1e6;return{lat:x.lat+A,lng:x.lng+T,name:x.name}}function f(y){var A,T;const x=y.parcelIds.length?o[y.parcelIds[0]]:null;return(x?(A=s[x.orgId])==null?void 0:A.ville:null)||((T=s[y.orgId])==null?void 0:T.ville)||null}function g(){if(l){try{l.remove()}catch{}l=null,p=null}}function S(){g();const y=jt.find(I=>I.id===v)||jt[0],x=h();let A;const T=ne.some(I=>I.event&&(Array.isArray(I.event)?I.event.length>0:!0));if(a)A=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${r==="all"?" selected":""}>Toutes les organisations</option>
            ${T?`<option value="anomalies"${r==="anomalies"?" selected":""}>⚠ Anomalies capteurs</option>`:""}
            <option value="${pt}"${r===String(pt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
            ${n.map(I=>`<option value="${I.id}"${r===String(I.id)?" selected":""}>${I.name}</option>`).join("")}
          </select>
        </div>`;else{const I=ve.find(m=>m.id===Qi);A=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${r==="all"?" selected":""}>Tous les capteurs du réseau</option>
            <option value="mine"${r==="mine"?" selected":""}>${(I==null?void 0:I.name)||"Mon exploitation"} uniquement</option>
          </select>
        </div>`}const D=[...x].sort((I,m)=>{const k=It(I.model,v),C=It(m.model,v);return k&&!C?-1:!k&&C?1:k?u(m.id)-u(I.id):0}),j=D.length?`<div class="m-plain-list">${D.map(I=>{const m=ni.includes(I.model),k=It(I.model,v),C=k?u(I.id):null,$=k?`<span class="m-sensor-val" style="color:${es(v,C)}">${C} ${y.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>',L=I.event&&(Array.isArray(I.event)?I.event.length>0:!0);return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${I.id}">
              <div class="m-sensor-icon" style="position:relative;background:${m?"#0172A420":"#5b8dd920"};color:${m?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
                ${L?'<span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff"></span>':""}
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${Na(I.model)} - ${I.model}</span>
                <span class="m-sensor-sub">${[f(I),Va(I)].filter(Boolean).join(" - ")}</span>
                ${L?`<span style="font-size:11px;color:#ff3b30;font-weight:500"><i class="bi bi-exclamation-triangle-fill"></i> ${Array.isArray(I.event)?I.event[0]:I.event}</span>`:""}
              </div>
              ${$}
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
            ${jt.map(I=>`<option value="${I.id}"${I.id===v?" selected":""}>${I.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${y.aggs.map(I=>`<option${I===w?" selected":""}>${I}</option>`).join("")}
          </select>
        </div>
        ${A}
      </div>
      ${d==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${j}</div>`}`,M(),d==="carte"&&E(x,y)}function E(y,x){const A=window.L;A&&setTimeout(()=>{const T=t.querySelector("#sensor-map");if(!T)return;l=A.map(T,{zoomControl:!1,attributionControl:!1}),A.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l);const D=[];y.forEach(j=>{var L;const I=b(j);if(!I)return;const m=It(j.model,v),k=ni.includes(j.model),C=m?es(v,u(j.id)):k?"#0172A4":"#5b8dd9",$=A.circleMarker([I.lat,I.lng],{radius:m?10:7,color:"#fff",weight:2,fillColor:C,fillOpacity:m?.95:.45}).addTo(l);if(m){$.bindTooltip(`${u(j.id)} ${x.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const P=z=>{if(!z)return;const F=Wa(C);z.style.setProperty("background",C,"important"),z.style.setProperty("color",F,"important"),z.style.setProperty("border-color",F,"important"),z.style.setProperty("box-shadow","none","important")},q=(L=$.getTooltip())==null?void 0:L.getElement();q&&P(q),$.on("tooltipopen",z=>P(z.tooltip.getElement()))}$.on("click",()=>hi(j,"donnees",i)),j.event&&(!Array.isArray(j.event)||j.event.length>0)&&A.marker([I.lat,I.lng],{icon:A.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(l),D.push([I.lat,I.lng])}),D.length&&(p=D,l.fitBounds(D,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",y=>{y.detail==="capteurs"&&(S(),d==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),p!=null&&p.length&&l.fitBounds(p,{padding:[32,32]})},50))});function M(){var y,x,A;t.querySelectorAll(".m-view-btn").forEach(T=>T.addEventListener("click",()=>{d=T.dataset.view,S()})),(y=t.querySelector("#metric-sel"))==null||y.addEventListener("change",T=>{var D;v=T.target.value,w=((D=jt.find(j=>j.id===v))==null?void 0:D.defaultAgg)||"",S()}),(x=t.querySelector("#agg-sel"))==null||x.addEventListener("change",T=>{w=T.target.value,S()}),(A=t.querySelector("#org-filter"))==null||A.addEventListener("change",T=>{r=T.target.value,S()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(T=>{T.addEventListener("click",()=>{const D=ne.find(j=>j.id===+T.dataset.sensorId);D&&hi(D,"donnees",i)})})}S(),window.addEventListener("weenat-sensor-renamed",()=>{d==="liste"&&S()})}const Ua=["Essentiel","Plus","Expert"],Ya=["Administrateur","Agent","Lecteur"],ts=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function Za(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function Ka(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function is({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function qt(e){if(!e)return"—";const[i,t,a]=e.split("-");return`${a}/${t}/${i}`}function ss(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let a=11;a>=0;a--){const n=new Date(i.getFullYear(),i.getMonth()-a,1),o=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),l=a>0?a===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${o}-${s}`,dateEmission:`${o}-${s}-01`,montant:n.getMonth()===11?1980:t[a%t.length],statut:l})}return e.reverse()}function Xa(e,i){var I;if(!e)return{};const t=i==="admin",a=i==="new-member-admin"||i==="new-member-agent"||i==="new-member-reader",n=i!=="new-member-reader",o=t?[{id:"100",name:"Breiz'Agri Conseil"},{id:"42",name:"Exploitation Dupont"}]:a?[]:[{id:"1",name:"Ferme du Bocage"},{id:"dutilleul",name:"Exploitation Dutilleul"}];let s=((I=o[0])==null?void 0:I.id)??null;const l=ve.find(m=>m.id===(t?Ut:Ei));if(!l)return{};const c=(t?Yt.filter(m=>{var k;return!((k=m.orgIds)!=null&&k.length)||m.orgIds.includes(Ut)}):Yt.filter(m=>{var k;return(k=m.orgIds)==null?void 0:k.includes(Ei)})).filter(m=>m.statut!=="inactif").map(m=>({...m})),d=ve.filter(m=>m.id!==Ut&&m.statut!=="inactif").length,v=Ka(l.adresse||""),w={rue:"",cp:"",ville:""},r={name:l.name,siret:l.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:v,adresseLivrai:w,pays:"France",markerLat:l.lat||48.117,markerLng:l.lng||-1.678,plan:l.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":l.codeAdherent||"CTR-2022-00418",dateAdhesion:l.dateAdhesion||"2022-03-15",licencesMembres:t?Yt.length:3,licencesAdherents:t?d:null,licencesIntegrations:t?27:2}};let u=null,h=null;function b(){if(!h)return;const m=e.querySelector(`#${h}`);if(!m)return;if(u){try{u.remove()}catch{}u=null}const k=window.L;k&&(u=k.map(m,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),k.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(u),u.setView([r.markerLat,r.markerLng],14),k.marker([r.markerLat,r.markerLng],{draggable:!1}).addTo(u),setTimeout(()=>u==null?void 0:u.invalidateSize(),50))}function f(){if(h=`expl-map-${Math.random().toString(36).slice(2,8)}`,u){try{u.remove()}catch{}u=null}const m=is(r.adresseFactu)||"—",k=is(r.adresseLivrai),C=t?ss():[],$=C.slice(0,3),L=C.length>3,P=c.slice(0,3),q=c.length>3;function z(F,R){const Y=F.statut==="payée"?"#30d158":"#ff9f0a",te=F.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${R?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${F.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${F.numero}</span>
            <span class="m-list-row-sub">${qt(F.dateEmission)} · ${F.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${Y};flex-shrink:0;margin-right:4px">${te}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}e.innerHTML=`
      ${o.length>1?`
      <div style="padding:12px 16px 4px">
        <select id="org-selector" style="width:100%;padding:10px 14px;border-radius:10px;border:1.5px solid #e5e5ea;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e;cursor:pointer">
          ${o.map(F=>`<option value="${F.id}"${F.id===s?" selected":""}>${F.name}</option>`).join("")}
        </select>
      </div>
      `:""}
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
            ${r.metiers.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">${r.metiers.map(F=>`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:4px;padding:2px 8px;font-size:12px;font-weight:500">${F}</span>`).join("")}</div>`:'<div style="font-size:13px;color:#8e8e93;margin-top:4px">—</div>'}
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Adresses</div>
      <div class="m-list">
        <div class="m-list-row" data-action="adresse-factu">
          <span class="m-list-row-label">Facturation</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${m}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${k||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
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
          <span class="m-list-row-value">${qt(r.contrat.dateAdhesion)}</span>
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
        ${$.map((F,R)=>z(F,!L&&R===$.length-1)).join("")}
        ${L?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${C.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${c.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${c.length?[...P.map((F,R)=>`
            <div class="m-list-row${!q&&R===P.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${R}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${F.prenom} ${F.nom}</span>
                <span class="m-list-row-sub">${F.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),q?`
            <div class="m-list-row m-list-row--last m-tappable" data-action="voir-membres">
              <span class="m-list-row-label" style="color:#007aff">Voir tous les membres</span>
              <span class="m-list-row-value" style="color:#8e8e93">${c.length}</span>
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
          ${ts.slice(0,5).map((F,R)=>`
            <div class="m-list-row${R===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${Za(F.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${F.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${F.distance} km · ${F.capteurs} capteurs · ${F.parcelles} parcelles</div>
                <button class="m-join-net-btn" data-net-idx="${R}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
              </div>
            </div>`).join("")}
        </div>
      </div>
      `}
      ${a?`
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
            <span class="m-list-row-value">${qt("2026-06-08")}</span>
          </div>
        </div>
        <div style="padding:8px 20px 0">
          <button id="btn-use-default-exploit" class="m-btn m-btn--outline" style="margin-bottom:20px">Utiliser cette exploitation</button>
        </div>
      </div>
      `:""}
      <div style="height:32px"></div>`,g()}function g(){var m,k,C,$;(m=e.querySelector("#org-selector"))==null||m.addEventListener("change",L=>{s=L.target.value;const P=o.find(q=>q.id===s);P&&(r.name=P.name,f())}),e.querySelectorAll(".m-list-row[data-action]").forEach(L=>{L.addEventListener("click",()=>{if(n)switch(L.dataset.action){case"name":S("Nom de l'exploitation",r.name,P=>{r.name=P,f()});break;case"siret":S("SIRET",r.siret,P=>{r.siret=P,f()});break;case"metier":M();break;case"adresse-factu":E("Adresse de facturation",r.adresseFactu,P=>{r.adresseFactu=P,f()});break;case"adresse-livrai":E("Adresse de livraison",r.adresseLivrai,P=>{r.adresseLivrai=P,f()});break;case"pays":S("Pays",r.pays,P=>{r.pays=P,f()});break;case"plan":y("Abonnement",Ua,r.plan,P=>{r.plan=P,f()});break;case"facture":U(`PDF ${L.dataset.factureId} téléchargé`);break;case"voir-factures":T();break;case"voir-membres":A();break}})}),e.querySelectorAll("[data-member-idx]").forEach(L=>{L.addEventListener("click",()=>x(+L.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(L=>{L.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach(q=>{const z=q===L;q.style.background=z?"#fff":"transparent",q.style.color=z?"#000":"#8e8e93"});const P=L.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=P==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=P==="independante"?"":"none"})}),(k=e.querySelector("#btn-ajouter-membre"))==null||k.addEventListener("click",D),(C=e.querySelector("#btn-quitter-reseau"))==null||C.addEventListener("click",()=>{const L=document.createElement("div");L.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,de({title:"Quitter le réseau ?",body:L,doneLabel:"Confirmer",onDone:()=>U("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(L=>{L.addEventListener("click",()=>{const P=ts[+L.dataset.netIdx];U(`Demande envoyée à ${P.name}`)})}),e.querySelectorAll(".m-exploit-tab").forEach(L=>{L.addEventListener("click",()=>{e.querySelectorAll(".m-exploit-tab").forEach(q=>{const z=q===L;q.style.background=z?"#fff":"transparent",q.style.color=z?"#000":"#8e8e93"});const P=e.querySelector("#default-exploit-panel");P&&(P.style.display=L.dataset.exploitTab==="membre"?"":"none")})}),($=e.querySelector("#btn-use-default-exploit"))==null||$.addEventListener("click",()=>{U("Exploitation Jourdain sélectionnée")})}function S(m,k,C){const $=document.createElement("div");$.innerHTML=`<input class="m-sheet-input" type="text" value="${(k||"").replace(/"/g,"&quot;")}" placeholder="${m}">`;const L=$.querySelector("input");de({title:m,body:$,doneLabel:"Enregistrer",onDone:()=>{const P=L.value.trim();P&&(C(P),U("Enregistré"))}}),setTimeout(()=>L.focus(),300)}function E(m,k,C){const $=document.createElement("div");$.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(k.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${k.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(k.ville||"").replace(/"/g,"&quot;")}">`,de({title:m,body:$,doneLabel:"Enregistrer",onDone:()=>{C({rue:$.querySelector("#f-rue").value.trim(),cp:$.querySelector("#f-cp").value.trim(),ville:$.querySelector("#f-ville").value.trim()}),U("Enregistré")}}),setTimeout(()=>$.querySelector("#f-rue").focus(),300)}function M(){const m=new Set(r.metiers),k=document.createElement("div"),C=()=>{k.innerHTML=as.map($=>`
        <div class="m-sheet-option${m.has($)?" m-sheet-option--active":""}" data-m="${$}" style="justify-content:space-between">
          <span>${$}</span>
          ${m.has($)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),k.querySelectorAll("[data-m]").forEach($=>{$.addEventListener("click",()=>{const L=$.dataset.m;m.has(L)?m.delete(L):m.add(L),C()})})};C(),de({title:"Métiers",body:k,doneLabel:"Valider",onDone:()=>{r.metiers=[...m],f()}})}function y(m,k,C,$){const L=document.createElement("div");L.innerHTML=k.map((q,z)=>`
      <div class="m-sheet-option${q===C?" m-sheet-option--active":""}" data-i="${z}">
        <span>${q}</span>${q===C?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const P=de({title:m,body:L,doneLabel:"Fermer",onDone:()=>{}});L.querySelectorAll(".m-sheet-option").forEach(q=>{q.addEventListener("click",()=>{$(k[+q.dataset.i]),P.classList.remove("m-sheet-overlay--show"),setTimeout(()=>P.remove(),280),U("Enregistré")})})}function x(m,k){const C=c[m];if(!C)return;const $=document.createElement("div");$.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${C.role}</span></div>
        ${C.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${C.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${C.prenom} ${C.nom}</a>
      </div>`;const L=de({title:`${C.prenom} ${C.nom}`,body:$,doneLabel:"Fermer",onDone:()=>{}});$.querySelector("#mem-delete").addEventListener("click",()=>{c.splice(m,1),L.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{L.remove(),f(),U("Membre retiré"),k==null||k()},280)})}function A(){let m="",C=20;function $(){if(!m)return c;const z=m.toLowerCase();return c.filter(F=>`${F.prenom} ${F.nom}`.toLowerCase().includes(z)||(F.email||"").toLowerCase().includes(z)||(F.role||"").toLowerCase().includes(z))}const L=ye(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),P=L.querySelector("#mbr-list-content");function q(){var Y;const z=$(),F=z.slice(0,C),R=z.length-F.length;P.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${z.length} membre${z.length!==1?"s":""}${m?" trouvé"+(z.length!==1?"s":""):" actif"+(z.length!==1?"s":"")}</div>
        <div class="m-list">
          ${F.length?F.map((te,be)=>`<div class="m-list-row${be===F.length-1&&R===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${c.indexOf(te)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${te.prenom} ${te.nom}</span>
                <span class="m-list-row-sub">${te.role}${te.email?" · "+te.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${R>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${R} de plus</span>
            </div>`:""}
          ${z.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,P.querySelectorAll("[data-mbr-idx]").forEach(te=>{te.addEventListener("click",()=>x(+te.dataset.mbrIdx,q))}),(Y=P.querySelector("#mbr-load-more"))==null||Y.addEventListener("click",()=>{C+=20,q()})}L.querySelector(".m-detail-back").addEventListener("click",me),L.querySelector("#mbr-invite-btn").addEventListener("click",D),L.querySelector("#mbr-search").addEventListener("input",z=>{m=z.target.value,C=20,q()}),q()}function T(){const m=ss();let k="";function C(){if(!k)return m;const q=k.toLowerCase();return m.filter(z=>z.numero.toLowerCase().includes(q)||z.statut.toLowerCase().includes(q)||String(z.montant).includes(q))}const $=ye(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),L=$.querySelector("#fac-list-content");function P(){const q=C();L.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${q.length} facture${q.length!==1?"s":""}</div>
        <div class="m-list">
          ${q.length?q.map((z,F)=>{const R=z.statut==="payée"?"#30d158":"#ff9f0a",Y=z.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${F===q.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${z.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${z.numero}</span>
                <span class="m-list-row-sub">${qt(z.dateEmission)} · ${z.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${R};flex-shrink:0;margin-right:4px">${Y}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,L.querySelectorAll("[data-fac-id]").forEach(z=>{z.addEventListener("click",()=>U(`PDF ${z.dataset.facId} téléchargé`))})}$.querySelector(".m-detail-back").addEventListener("click",me),$.querySelector("#fac-search").addEventListener("input",q=>{k=q.target.value,P()}),P()}function D(){const m=document.createElement("div");m.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${Ya.map(k=>`<option>${k}</option>`).join("")}
      </select>`,de({title:"Ajouter un membre",body:m,doneLabel:"Inviter",onDone:()=>{m.querySelector("#inv-email").value.trim()&&U("Invitation envoyée")}}),setTimeout(()=>m.querySelector("#inv-email").focus(),300)}f();function j(){requestAnimationFrame(()=>setTimeout(b,100))}return{onAdd:null,refresh:j}}const Qa=100,eo=["Essentiel","Plus","Expert"],to={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function ai(e){return to[e]||{label:e||"—",color:"#8e8e93"}}function io(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=ve.filter(r=>r.id!==Qa&&r.statut!=="inactif").map(r=>({...r})),a={...Be,siege:{...Be.siege},antennes:Be.antennes.map(r=>({...r}))},n={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function o(r,u,h,b){return r.slice(u,h).map((f,g)=>{const S=u+g,E=ai(f.statut),M=f.statut==="demande en attente";return`
        <div class="m-list-row${S===b?" m-list-row--last":""} m-tappable" data-org-idx="${S}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${f.proprietaire||f.name}</span>
            <span class="m-list-row-sub">${f.name} · ${f.plan||"—"}</span>
          </div>
          ${M?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${S}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${S}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${E.color};flex-shrink:0;margin-right:4px">${E.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function s(){let r="",h=20;function b(){if(!r)return t;const E=r.toLowerCase();return t.filter(M=>(M.proprietaire||M.name||"").toLowerCase().includes(E)||(M.name||"").toLowerCase().includes(E)||(M.email||"").toLowerCase().includes(E)||(M.codeAdherent||"").toLowerCase().includes(E))}const f=ye(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),g=f.querySelector("#adh-list-content");function S(){var A;const E=b(),M=E.slice(0,h),y=E.length-M.length,x=E.filter(T=>T.statut==="actif"||T.statut==="actif en essai").length;g.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${r?E.length+" résultat"+(E.length!==1?"s":""):x+" actif"+(x!==1?"s":"")+" · "+E.length+" total"}</div>
        <div class="m-list">
          ${M.length?M.map((T,D)=>{const j=t.indexOf(T),I=ai(T.statut),m=T.statut==="demande en attente";return`
              <div class="m-list-row${D===M.length-1&&y===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${j}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${T.proprietaire||T.name}</span>
                  <span class="m-list-row-sub">${T.name} · ${T.plan||"—"}</span>
                </div>
                ${m?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${j}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${j}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${I.color};flex-shrink:0;margin-right:4px">${I.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${y>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${y} de plus</span>
            </div>`:""}
        </div>`,g.querySelectorAll("[data-lp-org-idx]").forEach(T=>{T.addEventListener("click",D=>{D.target.closest("[data-adh-action]")||v(t[+T.dataset.lpOrgIdx],+T.dataset.lpOrgIdx,S)})}),g.querySelectorAll("[data-adh-action]").forEach(T=>{T.addEventListener("click",D=>{D.stopPropagation();const j=+T.dataset.lpAdhIdx,I=T.dataset.adhAction,m=t[j];m&&(I==="valider"?(m.statut="actif",l(),S(),U(`${m.proprietaire||m.name} validé`)):(t.splice(j,1),l(),S(),U("Demande rejetée")))})}),(A=g.querySelector("#adh-load-more"))==null||A.addEventListener("click",()=>{h+=20,S()})}f.querySelector(".m-detail-back").addEventListener("click",me),f.querySelector("#adh-invite-btn").addEventListener("click",w),f.querySelector("#adh-search").addEventListener("input",E=>{r=E.target.value,h=20,S()}),S()}function l(){var g;const r=t.filter(S=>S.statut!=="inactif"),u=`${a.siege.adresse}, ${a.siege.codePostal} ${a.siege.ville}`;e.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Réseau</div>
      <div class="m-list">
        <div class="m-list-row" data-action="net-nom">
          <span class="m-list-row-label">Nom du réseau</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:13px">${a.nom}</span>
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
          <span class="m-list-row-value" style="color:#8e8e93;flex-shrink:0">${a.antennes.length} antenne${a.antennes.length>1?"s":""}</span>
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

      <div class="m-list-section-header">Adhérents — ${r.length} actifs</div>
      <div class="m-list">
        ${o(t,0,Math.min(5,t.length),t.length>5?-1:t.length-1)}
        ${t.length>5?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${t.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(S=>{S.addEventListener("click",E=>{E.target.closest("[data-adh-action]")||v(t[+S.dataset.orgIdx],+S.dataset.orgIdx)})}),(g=e.querySelector('[data-action="voir-adherents"]'))==null||g.addEventListener("click",s),e.querySelectorAll("[data-adh-action]").forEach(S=>{S.addEventListener("click",E=>{E.stopPropagation();const M=+S.dataset.adhIdx,y=S.dataset.adhAction,x=t[M];x&&(y==="valider"?(x.statut="actif",l(),U(`${x.proprietaire||x.name} validé`)):(t.splice(M,1),l(),U("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(S=>{S.addEventListener("click",()=>{switch(S.dataset.action){case"net-nom":p("Nom du réseau",a.nom,E=>{a.nom=E,l()});break;case"net-siege":c();break;case"net-antennes":d();break}})});const h=e.querySelector("#tog-meteo"),b=e.querySelector("#tog-sol"),f=e.querySelector("#tog-irrigation");h==null||h.addEventListener("change",()=>{n.partageMeteo=h.checked,U("Préférence enregistrée")}),b==null||b.addEventListener("change",()=>{n.partageSol=b.checked,U("Préférence enregistrée")}),f==null||f.addEventListener("change",()=>{n.partageIrrigation=f.checked,U("Préférence enregistrée")})}function p(r,u,h){const b=document.createElement("div");b.innerHTML=`<input class="m-sheet-input" type="text" value="${(u||"").replace(/"/g,"&quot;")}" placeholder="${r}">`;const f=b.querySelector("input");de({title:r,body:b,doneLabel:"Enregistrer",onDone:()=>{const g=f.value.trim();g&&(h(g),U("Enregistré"))}}),setTimeout(()=>f.focus(),300)}function c(){const r=document.createElement("div");r.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${a.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${a.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${a.siege.ville.replace(/"/g,"&quot;")}">`,de({title:"Adresse du siège",body:r,doneLabel:"Enregistrer",onDone:()=>{a.siege.adresse=r.querySelector("#s-rue").value.trim(),a.siege.codePostal=r.querySelector("#s-cp").value.trim(),a.siege.ville=r.querySelector("#s-ville").value.trim(),l(),U("Enregistré")}}),setTimeout(()=>r.querySelector("#s-rue").focus(),300)}function d(){const r=document.createElement("div");(()=>{r.innerHTML=a.antennes.map((h,b)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${h.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${h.adresse}, ${h.codePostal} ${h.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${h.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),de({title:"Antennes",body:r,doneLabel:"Fermer",onDone:()=>{}})}function v(r,u,h){var M,y;const b=ai(r.statut),f=r.statut==="invitation en attente",g=`https://app.weenat.com/invitation?code=${r.codeAdherent||"ADZ-XXX"}`,S=document.createElement("div");S.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${r.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${r.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${r.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${r.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${le.filter(x=>x.orgId===r.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const x=new Set(le.filter(A=>A.orgId===r.id).map(A=>A.id));return ne.filter(A=>x.has(A.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${b.color};font-weight:600">${b.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${r.dateAdhesion?r.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${f?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const E=de({title:r.name,body:S,doneLabel:"Fermer",onDone:()=>{}});(M=S.querySelector("#lnk-copy"))==null||M.addEventListener("click",()=>{var x;(x=navigator.clipboard)==null||x.writeText(g).catch(()=>{}),U("Lien copié !")}),(y=S.querySelector("#lnk-cancel"))==null||y.addEventListener("click",()=>{r.statut="inactif",E.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{E.remove(),l(),h==null||h(),U("Invitation annulée")},280)}),S.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(u,1),E.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{E.remove(),l(),h==null||h(),U("Adhérent supprimé")},280)})}function w(){const r=document.createElement("div");r.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${eo.map(u=>`<option>${u}</option>`).join("")}
      </select>`,de({title:"Inviter un adhérent",body:r,doneLabel:"Envoyer",onDone:()=>{const u=r.querySelector("#adh-email").value.trim(),h=r.querySelector("#adh-code").value.trim();if(!u||!h){U("Email et code requis");return}t.push({id:Date.now(),name:u,proprietaire:u,email:u,codeAdherent:h,plan:r.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),l(),U("Invitation envoyée")}}),setTimeout(()=>r.querySelector("#adh-email").focus(),300)}return l(),{onAdd:w}}ns(le);const so=new URLSearchParams(window.location.search),oi=so.get("role"),zs=new Set(["new","new-adherent","new-member-admin","new-member-agent","new-member-reader"]),Ce=oi==="adherent"?"adherent":zs.has(oi)?oi:"admin";function _s(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}_s();setInterval(_s,1e4);const Ve=["parcelles","capteurs","dashboard","alertes","parametres"];let Ot="parcelles";function Ue(e){var i,t;!Ve.includes(e)||e===Ot||(Ot=e,document.querySelectorAll(".m-screen").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function no(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;ki()>0&&Os()?no(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Ue(t)}):(ki()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Ue(t))});let He=null,$t=null;const Hs=50,kt=document.getElementById("screen-stack");kt.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){He=null;return}He=e.clientX,$t=e.clientY});kt.addEventListener("mouseup",e=>{if(He===null)return;const i=e.clientX-He,t=e.clientY-$t;if(Math.abs(i)>Hs&&Math.abs(i)>Math.abs(t)){const a=Ve.indexOf(Ot);i<0&&a<Ve.length-1&&Ue(Ve[a+1]),i>0&&a>0&&Ue(Ve[a-1])}He=null,$t=null});kt.addEventListener("mouseleave",()=>{He=null});kt.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){He=null;return}He=e.touches[0].clientX,$t=e.touches[0].clientY},{passive:!0});kt.addEventListener("touchend",e=>{if(He===null)return;const i=e.changedTouches[0].clientX-He,t=e.changedTouches[0].clientY-$t;if(Math.abs(i)>Hs&&Math.abs(i)>Math.abs(t)){const a=Ve.indexOf(Ot);i<0&&a<Ve.length-1&&Ue(Ve[a+1]),i>0&&a>0&&Ue(Ve[a-1])}He=null},{passive:!0});const ao=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...Ce==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],Gt={};function Bs(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=Gt[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var a;return(a=window.showMobileAddPage)==null?void 0:a.call(window)})}function oo(){var i;const e=document.getElementById("param-segment");e&&(Ce==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),ao.forEach((t,a)=>{const n=document.createElement("button");n.className="m-segment-btn"+(a===0?" active":""),n.textContent=t.label,n.dataset.target=t.id,n.addEventListener("click",()=>{var o,s,l;e.querySelectorAll(".m-segment-btn").forEach(p=>p.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(p=>p.classList.remove("active")),(o=document.getElementById(t.id))==null||o.classList.add("active"),Bs(t.id),(l=(s=Gt[t.id])==null?void 0:s.refresh)==null||l.call(s)}),e.appendChild(n)}))}oo();zs.has(Ce)&&vn(Ce,()=>{(Ce==="new"||Ce==="new-adherent")&&Ue("dashboard")});Vn(document.getElementById("screen-dashboard"),Ce);ka(document.getElementById("screen-parcelles"),Ce);Ga(document.getElementById("screen-capteurs"),Ce);Qs(document.getElementById("screen-alertes"),Ce);Us(document.getElementById("param-compte"),Ce);Gt["param-exploitation"]=Xa(document.getElementById("param-exploitation"),Ce);Gt["param-reseau"]=io(document.getElementById("param-reseau"),Ce);function lo(){var a;const e=Ce==="admin",i=document.getElementById("phone-screen");(a=document.getElementById("m-add-modal"))==null||a.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(n=>{n.addEventListener("click",()=>{var o;t.remove(),(n.dataset.action==="note"||n.dataset.action==="traitement")&&((o=window.openJournalModal)==null||o.call(window,n.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=lo;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});Bs("param-compte");export{me as a,ye as p,de as s};
