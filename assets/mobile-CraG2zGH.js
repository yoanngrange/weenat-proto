const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-DxMXOcvR.js","assets/sensors-CS05Ml5Z.js","assets/irrigations-C22Dtsoo.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-DHZTuoR0.js","assets/store-BGemiHCf.js","assets/orgs-DnFmvGlp.js","assets/network-YzWdS0n_.js","assets/constants-D_Yu58_o.js","assets/members-CuDabgg3.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as le}from"./plots-DHZTuoR0.js";import{d as at,b as os,c as Ge}from"./store-BGemiHCf.js";import{s as ne}from"./sensors-CS05Ml5Z.js";import{o as ve}from"./orgs-DnFmvGlp.js";import{n as He}from"./network-YzWdS0n_.js";import{I as ce,s as Qe,g as Fs}from"./irrigations-C22Dtsoo.js";import{I as Ot,S as gi,M as ls,a as mt,E as Os,A as Wt,b as Si}from"./constants-D_Yu58_o.js";import{m as Gt}from"./members-CuDabgg3.js";const tt=[];function ye(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),tt.push(t),t}function me(){const e=tt.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function Ei(){return tt.length}function Rs(){return tt.some(e=>e.dataset.dirty==="true")}function rs(){tt.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{tt.forEach(e=>e.remove()),tt.length=0});const ki={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Ns=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Li=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let We={};function ze(e){var o;const i=document.getElementById("phone-screen");(o=document.querySelector(".m-toast"))==null||o.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function it({title:e,body:i,onDone:t,doneLabel:o="OK"}){var c;const n=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${o}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}function Ci(e,i,t){const o=document.createElement("div");o.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const n=o.querySelector("input");it({title:e,body:o,doneLabel:"Enregistrer",onDone:()=>{t(n.value.trim()),ze("Enregistré")}}),setTimeout(()=>n.focus(),300)}function Ai(e,i,t,o){const n=document.createElement("div");n.innerHTML=i.map((s,c)=>`
    <div class="m-sheet-option${s===t?" m-sheet-option--active":""}" data-i="${c}">
      <span>${s}</span>
      ${s===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const a=it({title:e,body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{o(i[+s.dataset.i]),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280),ze("Enregistré")})})}function Vs(e,i){const t=document.createElement("div"),o=()=>{var n;t.innerHTML=e.map((a,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${a.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${a.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(a=>{a.addEventListener("input",()=>{e[+a.dataset.i][a.dataset.f]=a.value})}),t.querySelectorAll(".m-sheet-remove").forEach(a=>{a.addEventListener("click",()=>{e.splice(+a.dataset.i,1),o()})}),(n=t.querySelector(".m-sheet-add-phone"))==null||n.addEventListener("click",()=>{e.push({label:"",numero:""}),o()})};o(),it({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),ze("Enregistré")}})}function Js(e,i,t){const o=document.createElement("div");o.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,o.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var a;(a=navigator.clipboard)==null||a.writeText(e.value).catch(()=>{}),ze("Clé copiée !")});const n=it({title:"Clé API",body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const a=i.findIndex(s=>s.id===e.id);a!==-1&&i.splice(a,1),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{n.remove(),t()},280),ze("Clé supprimée")})}function Ws(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function Gs(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");it({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const o=t.value.trim();if(!o){ze("Entrez un nom");return}const n={id:Date.now(),name:o,created:new Date().toLocaleDateString("fr-FR"),value:Ws()};e(n),ze("Clé générée")}}),setTimeout(()=>t.focus(),300)}function Us(e,i){We={profile:JSON.parse(JSON.stringify(ki[i]||ki.admin)),langue:"Français",unites:Li[0]};const o=localStorage.getItem("mobile_avatarUrl")||null;function n(){const s=We.profile,c=o?`<img src="${o}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,p=s.apiKeys.map(d=>`
      <div class="m-list-row" data-key-id="${d.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${d.name}</span>
          <span class="m-list-row-sub">créée le ${d.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),r=s.phones.map((d,b)=>`
      <div class="m-list-row${b===s.phones.length-1&&s.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${d.label||"Numéro "+(b+1)}</span>
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
          <span class="m-list-row-value" id="val-langue">${We.langue}</span>
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
    `,a()}function a(){var c;const s=We.profile;(c=e.querySelector("#m-avatar-upload"))==null||c.addEventListener("change",p=>{const r=p.target.files[0];if(!r)return;const d=new FileReader;d.onload=b=>{localStorage.setItem("mobile_avatarUrl",b.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${b.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},d.readAsDataURL(r)}),e.querySelectorAll(".m-list-row[data-action]").forEach(p=>{p.addEventListener("click",()=>{switch(p.dataset.action){case"prenom":Ci("Prénom",s.prenom,r=>{s.prenom=r,n()});break;case"nom":Ci("Nom",s.nom,r=>{s.nom=r,n()});break;case"email":it({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>ze("Fonctionnalité à venir")});break;case"phones":Vs(s.phones,r=>{s.phones=r,n()});break;case"mdp":it({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>ze("Fonctionnalité à venir")});break;case"langue":Ai("Langue",Ns,We.langue,r=>{We.langue=r,e.querySelector("#val-langue").textContent=r});break;case"unites":Ai("Unités",Li,We.unites,r=>{We.unites=r,e.querySelector("#val-unites").textContent=r.split(" ")[0]});break;case"gen-key":Gs(r=>{s.apiKeys.push(r),n()});break;case"delete":ze("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(p=>{p.addEventListener("click",()=>{const r=s.apiKeys.find(d=>d.id===+p.dataset.keyId);r&&Js(r,s.apiKeys,n)})}),e.querySelectorAll(".m-toggle input[data-notif]").forEach(p=>{p.addEventListener("change",()=>ze("Préférence enregistrée"))})}n()}function U(e){var o;const i=document.getElementById("phone-screen");(o=document.querySelector(".m-toast"))==null||o.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function de({title:e,body:i,doneLabel:t="Fermer",onDone:o}={}){var c;const n=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{o==null||o(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}function ft({title:e,message:i="",confirmLabel:t="Confirmer",confirmColor:o="#ff3b30",onConfirm:n}){var p;const a=document.getElementById("phone-screen");(p=document.querySelector(".m-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd" style="justify-content:center;padding:12px 16px 8px">
        <span class="m-sheet-title">${e}</span>
      </div>
      <div class="m-sheet-body" style="padding:4px 16px 32px">
        ${i?`<p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px;text-align:center">${i}</p>`:""}
        <button id="sc-confirm" style="width:100%;padding:14px;background:${o};color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;margin-bottom:8px">${t}</button>
        <button id="sc-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
      </div>
    </div>`,a.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const c=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#sc-cancel").addEventListener("click",c),s.querySelector("#sc-confirm").addEventListener("click",()=>{c(),setTimeout(()=>n==null?void 0:n(),50)}),s.addEventListener("click",r=>{r.target===s&&c()})}function Ys(e){const i=3+e%5,t=Date.now();return Array.from({length:i},(o,n)=>{const a=e*17+n*7,s=1+n*(2+a%6),c=t-s*864e5-a%8*36e5,p=(1+a%5)*36e5+a%60*6e4,r=n===0&&a%7===0;return{start:new Date(c),end:r?null:new Date(c+p)}})}const Ks=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Zs=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],Mi={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},Xs={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function Ut(e){if(!e)return"—";const[i,t,o]=e.split("-");return`${o}/${t}/${i}`}function Ii(e){const i=e.sensorIds.map(o=>{const n=ne.find(a=>a.id===o);return n?`${n.model} ${n.serial}`:null}).filter(Boolean),t=e.parcelIds.map(o=>{const n=le.find(a=>a.id===o);return(n==null?void 0:n.name)||null}).filter(Boolean);return[...i,...t]}function Qs(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const o=[...i==="adherent"?Zs:Ks];function n(){if(!o.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=o.map(s=>{Ii(s);const c=Xs[s.metric]||"bi-bell",p=s.statut==="actif";return`
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
              <span class="m-alert-row-val">${Mi[s.metric]||s.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${Ut(s.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${s.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),a()}function a(){t.querySelectorAll(".m-alert-toggle input").forEach(s=>{s.addEventListener("change",c=>{c.stopPropagation();const p=+s.dataset.id,r=o.find(d=>d.id===p);r&&(r.statut=s.checked?"actif":"inactif",n(),U(`Alerte ${s.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-more-btn").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation();const p=+s.dataset.id,r=o.find(f=>f.id===p);if(!r)return;Ii(r);const d=document.createElement("div"),b=Ys(p);function $(){const f=r.sensorIds.map((w,E)=>{const S=ne.find(M=>M.id===w);return S?{label:`${S.model} ${S.serial}`,type:"sensor",idx:E}:null}).filter(Boolean),m=r.parcelIds.map((w,E)=>{const S=le.find(M=>M.id===w);return S?{label:S.name,type:"parcel",idx:E}:null}).filter(Boolean),h=[...f,...m];return h.length?h.map(w=>`<div class="m-perimetre-item" data-type="${w.type}" data-idx="${w.idx}">
                <span>${w.label}</span>
                <button class="m-perimetre-del" data-type="${w.type}" data-idx="${w.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const l=document.createElement("div");l.className="m-sheet-info-rows";function u(){var E;d.innerHTML="";const f=document.createElement("div");f.className="m-sheet-info-rows",f.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Mi[r.metric]||r.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${Ut(r.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${Ut(r.created)}</span></div>
            ${(E=r.phones)!=null&&E.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${r.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${r.statut}</span></div>`;const m=document.createElement("div");m.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",m.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${$()}</div>`,f.appendChild(m),d.appendChild(f);const h=S=>S.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+S.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),w=document.createElement("div");w.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${b.map(S=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${S.end?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${h(S.start)} → <span style="color:${S.end?"inherit":"#ff9f0a"}">${S.end?h(S.end):"En cours"}</span></div>
              </div></div>`).join("")}`,d.appendChild(w),d.querySelectorAll(".m-perimetre-del").forEach(S=>{S.addEventListener("click",M=>{M.stopPropagation();const y=S.dataset.type,g=+S.dataset.idx;y==="sensor"?r.sensorIds.splice(g,1):r.parcelIds.splice(g,1),u(),n(),U("Retiré du périmètre")})})}u(),de({title:r.name,body:d,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-alert-card").forEach(s=>{s.addEventListener("click",c=>{if(c.target.closest(".m-alert-toggle")||c.target.closest(".m-alert-more-btn"))return;const p=+s.dataset.id,r=o.find($=>$.id===p);if(!r)return;const d=document.createElement("div");d.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const b=de({title:r.name,body:d,doneLabel:"Fermer",onDone:()=>{}});d.querySelector("#al-edit").addEventListener("click",()=>{b.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{b.remove(),U("Modification à venir")},280)}),d.querySelector("#al-delete").addEventListener("click",()=>{const $=o.findIndex(l=>l.id===p);$!==-1&&o.splice($,1),b.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{b.remove(),n()},280),U("Alerte supprimée")})})})}n()}const en="modulepreload",tn=function(e){return"/weenat-proto/"+e},Ti={},ge=function(i,t,o){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(t.map(p=>{if(p=tn(p),p in Ti)return;Ti[p]=!0;const r=p.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${d}`))return;const b=document.createElement("link");if(b.rel=r?"stylesheet":en,r||(b.as="script"),b.crossOrigin="",b.href=p,c&&b.setAttribute("nonce",c),document.head.appendChild(b),r)return new Promise(($,l)=>{b.addEventListener("load",$),b.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return n.then(s=>{for(const c of s||[])c.status==="rejected"&&a(c.reason);return i().catch(a)})},cs=e=>`parcel-journal-${e}`;function Dt(e){try{const i=localStorage.getItem(cs(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"note",category:"Observation générale",date:"2026-05-11",auteur:"Jean Dupont",role:"membre",texte:"Quelques pucerons sur feuilles basses. À surveiller."},{id:2,type:"traitement",date:"2026-05-16",auteur:"Sophie Martin",role:"conseiller",texte:"Vent < 2 m/s, conditions conformes.",produit:"Karate Zeon",dose:"0,1 L/ha",cible:"Pucerons"},{id:3,type:"integration",date:"2026-04-02",texte:"L'intégration « Rimpro » a expiré et n'est plus active.",_system:!0},{id:4,type:"integration",date:"2025-10-02",texte:"Intégration « Rimpro » activée.",_system:!0}]}function yi(e,i){localStorage.setItem(cs(e),JSON.stringify(i))}function Re(e,i){const t={id:`sys-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,_system:!0,...i};yi(e,[t,...Dt(e)])}function st(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const Ce=new Date().toISOString().split("T")[0];function vt(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,o,n]=e.split("-");return`${parseInt(n)} ${i[parseInt(o)-1]} ${t}`}function Ct(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,o]=e.split("-");return`${parseInt(o)} ${i[parseInt(t)-1]}`}function oi(e){return!e||e===Ce?"":e<Ce?'<span class="irr-pill irr-pill--past">Passée · Effectuée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function li(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Rt(e,i,t){const o=i.length>0&&i.every(a=>t.has(a.id)),n=[...i].sort((a,s)=>a.name.localeCompare(s.name,"fr")).map(a=>{const s=t.has(a.id);return`<div class="irr-plot-row${s?" irr-plot-row--sel":""}" data-pid="${a.id}">
      <div><div class="irr-plot-name">${a.name}</div>${sn(a)}</div>
      ${li(s,!1)}
    </div>`}).join("");return`<div class="irr-sel-all-row" id="irr-sel-all">
    <span class="irr-sel-all-lbl">${o?"Tout désélectionner":"Tout sélectionner"}</span>
    ${li(o,!1)}
  </div>${n}`}function ri({title:e,body:i,onSave:t,onDelete:o,saveLabel:n="Enregistrer"}){var p,r;const a=document.getElementById("phone-screen");(p=document.querySelector(".irr-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="irr-sheet-overlay",s.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${o?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${n}</button>
      </div>
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),a.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const c=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",d=>{d.target===s&&c()}),(r=s.querySelector("#iss-del"))==null||r.addEventListener("click",()=>{o==null||o(),c()}),s.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),c()}),s}function ds(e,i,t){const o=i.filter(c=>e.has(c.id)&&(!c.irrigation||c.irrigation==="Non irrigué"));if(!o.length){t();return}const n=document.createElement("div");n.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${o.length===1?`<strong>${o[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${o.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" class="m-prev-select" style="margin-bottom:0">
      <option value="">— Choisir un type —</option>
      ${Ot.map(c=>`<option value="${c}">${c}</option>`).join("")}
    </select>`;const s=ri({title:"Type d'irrigation",body:n,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const c=n.querySelector("#irr-type-ask").value;c&&o.forEach(p=>{p.irrigation=c,at(p.id,{irrigation:c})}),t()}}).querySelector("#iss-del");s&&(s.textContent="Passer",s.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function sn(e){const i=e.crop,t=e.irrigation||null,o=e.substrate?"Substrat : "+e.substrate:e.texture||null,n=[i,t||"<em>type irrigation non renseigné</em>",o].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${n.join(" · ")}</span>`}function us(e,i,t=null,o=!1){let n=new Set((t==null?void 0:t.ids)??[]),a=Ce,s=10;function c(){return Rt([],e,n)}function p(l){l.querySelector("#irr-date-hint").innerHTML=oi(a)}function r(l){const u=n.size,f=l.querySelector(".irr-summary"),m=l.querySelector(".irr-save-btn");!f||!m||(t?(f.textContent="",m.disabled=!1,m.textContent="Enregistrer"):(f.textContent=u===0?"":`${u} parcelle${u>1?"s":""} · ${s} mm`,m.disabled=u===0,m.textContent="Enregistrer"))}function d(l){var u;l.querySelectorAll(".irr-plot-row").forEach(f=>{f.addEventListener("click",()=>{const m=+f.dataset.pid;n.has(m)?n.delete(m):n.add(m),l.querySelector("#irr-sel-list").innerHTML=c(),d(l),r(l)})}),(u=l.querySelector("#irr-sel-all"))==null||u.addEventListener("click",()=>{const f=e.some(m=>!n.has(m.id));e.forEach(m=>f?n.add(m.id):n.delete(m.id)),l.querySelector("#irr-sel-list").innerHTML=c(),d(l),r(l)})}const b=t?`<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${t.ids.length>1?"Parcelles concernées":"Parcelle concernée"} : ${t.label}</span>
       </div>`:`<div id="irr-sel-list">${c()}</div>`,$=st(ye(`
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
            <input type="date" class="irr-date-input" id="irr-date" value="${a}" />
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
      ${b}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${t?"":"disabled"}>Enregistrer</button>
    </div>
  `));$.dataset.dirty="true",t||d($),r($),$.querySelector("#irr-back").addEventListener("click",me),$.querySelector("#irr-date").addEventListener("change",l=>{a=l.target.value,p($),r($)}),$.querySelector("#irr-qty").addEventListener("input",l=>{s=parseInt(l.target.value)||1,r($)}),$.querySelector(".irr-save-btn").addEventListener("click",()=>{const l=t?new Set(t.ids):n;ds(l,e,()=>{const u=a>Ce;l.forEach(w=>{ce.push({iso:a,mm:s,real:!u,plotId:w,fromStrategy:!1})}),Qe();const m=[{title:null,names:[...l].map(w=>{var E;return(E=e.find(S=>S.id===w))==null?void 0:E.name}).filter(Boolean)}],h=l.size===1?String([...l][0]):"all";rs(),ps({title:l.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:vt(a)},{label:"Quantité",value:`${s} mm`}],parcelSections:m,isFut:u,plots:e,calFilter:h,addedCount:l.size,stackDepth:1,backToParcel:o})})})}function ci(e,i,t=null,o=null,n=!1){let a=new Set((t==null?void 0:t.ids)??[]),s=Ce,c=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],p=10,r=7;function d(){if(!s||!c||r<=0)return[];const f=[],m=new Date(c);let h=new Date(s);for(;h<=m&&f.length<100;)f.push(new Date(h)),h.setDate(h.getDate()+r);return f}function b(){const f=d();a.size;const m=f.length>0?`<span class="irr-preview-ok">↗ ${f.length} irrigations · ${f.length*p} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
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
           </div>`:Rt([],e,a)}
      <div class="irr-bottom-spacer"></div>
    `}function $(f){const m=a.size,h=d(),w=f.querySelector(".irr-save-btn"),E=f.querySelector(".irr-summary");!w||!E||(w.disabled=m===0||h.length===0,E.textContent=m===0?"":`${m} parcelle${m>1?"s":""} · ${h.length} occurrences`,w.textContent="Voir l'aperçu →")}function l(f){var w,E,S,M,y;const m=f.querySelector(".irr-scroll-body");m.querySelectorAll(".irr-plot-row").forEach(g=>{g.addEventListener("click",()=>{const A=+g.dataset.pid;a.has(A)?a.delete(A):a.add(A),m.innerHTML=b(),l(f),$(f)})}),(w=m.querySelector("#irr-sel-all"))==null||w.addEventListener("click",()=>{const g=e.some(A=>!a.has(A.id));e.forEach(A=>g?a.add(A.id):a.delete(A.id)),m.innerHTML=b(),l(f),$(f)});const h=()=>{const g=d(),A=m.querySelector("#strat-preview");A&&(A.innerHTML=g.length>0?`<span class="irr-preview-ok">↗ ${g.length} irrigations · ${g.length*p} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),$(f)};(E=m.querySelector("#strat-debut"))==null||E.addEventListener("change",g=>{s=g.target.value,h()}),(S=m.querySelector("#strat-fin"))==null||S.addEventListener("change",g=>{c=g.target.value,h()}),(M=m.querySelector("#strat-qty"))==null||M.addEventListener("input",g=>{p=parseInt(g.target.value)||1,h()}),(y=m.querySelector("#strat-freq"))==null||y.addEventListener("input",g=>{r=parseInt(g.target.value)||1,h()})}const u=st(ye(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${b()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));u.dataset.dirty="true",l(u),$(u),u.querySelector("#strat-back").addEventListener("click",me),u.querySelector(".irr-save-btn").addEventListener("click",()=>{const f=d();nn(u,e,a,s,c,p,r,f,i,t,o,n)})}function nn(e,i,t,o,n,a,s,c,p,r,d=null,b=!1){var y;const $=t.size,l=5;c.length-l;function u(g){const I=g.toISOString().slice(0,10)>=Ce?"#FFB705":"#FF8500",q=g.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${vt(q)}</span>
      <span style="font-size:13px;font-weight:700;color:${I}">${a} mm</span>
    </div>`}const f=c.filter(g=>g.toISOString().slice(0,10)<Ce),m=c.filter(g=>g.toISOString().slice(0,10)>=Ce),h=m.slice(0,l),w=m.slice(l),E=f.length?`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${f.map(u).join("")}`:"",S=m.length?`
    <div class="irr-section-lbl" style="margin-top:${f.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${h.map(u).join("")}
    ${w.length?`
      <div id="apercu-rest" style="display:none">${w.map(u).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${w.length} irrigation${w.length>1?"s":""} de plus</button>
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
          <div class="irr-apercu-big">${c.length} irrigations</div>
          <div class="irr-apercu-sub">${Ct(o)} → ${Ct(n)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${c.length*a} mm</div>
          <div class="irr-apercu-sub">${$} parcelle${$>1?"s":""} · ${a} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${E}
        ${S}
        ${!f.length&&!m.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));M.dataset.dirty="true",M.querySelector("#apercu-back").addEventListener("click",me),(y=M.querySelector("#apercu-show-more"))==null||y.addEventListener("click",g=>{M.querySelector("#apercu-rest").style.display="",g.target.remove()}),M.querySelector("#apercu-confirm").addEventListener("click",()=>{const g=r?new Set(r.ids):t;ds(g,i,()=>{d&&ce.splice(0,ce.length,...ce.filter(T=>!(d.has(T.seasonId)&&T.fromStrategy&&!T.real)));const A=Fs();c.forEach(T=>{const v=T.toISOString().slice(0,10);g.forEach(k=>{ce.push({iso:v,mm:a,real:v<=Ce,plotId:k,fromStrategy:!0,seasonId:A})})}),Qe(),d&&g.forEach(T=>{Re(T,{type:"modification",date:Ce,texte:`Saison d'irrigation modifiée : ${a} mm tous les ${s} jours, du ${Ct(o)} au ${Ct(n)} (${c.length} irrigations).`})});const q=[{title:null,names:[...g].map(T=>{var v;return(v=i.find(k=>k.id===T))==null?void 0:v.name}).filter(Boolean)}],j=g.size===1?String([...g][0]):"all";rs(),ps({title:"Saison enregistrée",params:[{label:"Début",value:vt(o)},{label:"Fin",value:vt(n)},{label:"Quantité",value:`${a} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${c.length*g.size}`}],parcelSections:q,isFut:!0,plots:i,calFilter:j,addedCount:c.length*g.size,stackDepth:2,backToParcel:b})})})}function ps({title:e,params:i,parcelSections:t=[],isFut:o,plots:n,calFilter:a,addedCount:s=0,stackDepth:c=3,backToParcel:p=!1}){const r=(i||[]).map(h=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${h.label}</span>
      <span class="irr-confirm-param-val">${h.value}</span>
    </div>`).join(""),d=3,b=t.flatMap(h=>h.names.map(w=>({title:h.title,name:w}))),$=b.slice(0,d),l=b.slice(d);function u(h){const w=[];let E=null;for(const S of h)(!E||E.title!==S.title)&&(E={title:S.title,names:[]},w.push(E)),E.names.push(S.name);return w.map(S=>`
      ${S.title?`<div class="irr-confirm-sec-hd">${S.title}</div>`:""}
      ${S.names.map(M=>`<div class="irr-confirm-parcel">· ${M}</div>`).join("")}
    `).join("")}const f=b.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${u($)}
      ${l.length?`
        <details class="irr-confirm-more">
          <summary>${l.length} parcelle${l.length>1?"s":""} de plus</summary>
          ${u(l)}
        </details>`:""}
    </div>`,m=st(ye(`
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
      ${f}
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
  `));m.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&ce.splice(ce.length-s,s),me()}),m.querySelector("#conf-back").addEventListener("click",()=>{for(let h=0;h<=c;h++)me()}),m.querySelector("#conf-calendar").addEventListener("click",()=>{ms(n,a)})}const an=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function ms(e,i){let t=i||"";function o(l){if(!l||l==="all")return null;const u=e.find(f=>String(f.id)===String(l));return u?{ids:[u.id],label:u.name}:null}function n(){return!t||t==="all"?ce:ce.filter(l=>l.plotId===+t)}function a(l){const u=l.filter(w=>w.real),f=l.filter(w=>!w.real),m=u.reduce((w,E)=>w+E.mm,0),h=f.reduce((w,E)=>w+E.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${m} mm</div>
        <div class="irr-cumul-count">${u.length} irrigation${u.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${h} mm</div>
        <div class="irr-cumul-count">${f.length} irrigation${f.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${m+h} mm</div>
        <div class="irr-cumul-count">${u.length+f.length} irrigations</div>
      </div>
    </div>`}function s(l){if(l.length<2)return"";const u=[...l].sort((P,z)=>P.iso<z.iso?-1:1),f=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],m=new Date(u[0].iso),h=new Date(u[u.length-1].iso),w=Math.max(h-m,1),E=300,S=26,M=5,y=5,g=S-y-4,A=g-y-3,I=S+M+13,q=I+2,j=P=>Math.round((P-m)/w*E),T=P=>{const[,z,F]=P.split("-");return`${parseInt(F)}/${parseInt(z)}`},v=[],k=new Date(m.getFullYear(),m.getMonth()+1,1);for(;k<=h;)v.push(new Date(k)),k.setMonth(k.getMonth()+1);const C=v.map(P=>`<line x1="${j(P)}" y1="${S-6}" x2="${j(P)}" y2="${S+M+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),x=[m,...v,h],L=x.slice(0,-1).map((P,z)=>{const F=j(P),O=j(x[z+1]);return O-F<16?"":`<text x="${Math.round((F+O)/2)}" y="${A}" font-size="8" fill="#B0AEA8" text-anchor="middle">${f[P.getMonth()]}</text>`}).join(""),D=u.map(P=>{const z=P.real?"#FF8500":"#FFB705",F=j(new Date(P.iso)),[,O,Y]=P.iso.split("-"),te=`${parseInt(Y)} ${an[parseInt(O)-1]} · ${P.mm} mm`;return`<circle cx="${F}" cy="${g}" r="${y}" fill="${z}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${F}" cy="${g}" r="${y+6}" fill="transparent" pointer-events="all"><title>${te}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${E}" height="${q}" viewBox="0 0 ${E} ${q}" style="width:100%;display:block">
        ${L}
        <rect x="0" y="${S}" width="${E}" height="${M}" rx="${M/2}" fill="#E0DED8"/>
        ${C}
        ${D}
        <text x="1" y="${I}" font-size="9" fill="#B0AEA8">${T(u[0].iso)}</text>
        <text x="${E-1}" y="${I}" font-size="9" fill="#B0AEA8" text-anchor="end">${T(u[u.length-1].iso)}</text>
      </svg>
    </div>`}function c(l,u,f){const m=document.createElement("div");let h=l.iso,w=l.mm;m.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${l.iso}" />
          <div id="edit-date-hint">${oi(l.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${l.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,m.querySelector("#edit-date").addEventListener("change",E=>{h=E.target.value,m.querySelector("#edit-date-hint").innerHTML=oi(h)}),m.querySelector("#edit-qty").addEventListener("input",E=>{const S=parseInt(E.target.value);S>0&&(w=S)}),ri({title:l.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée",body:m,saveLabel:"Enregistrer",onSave:()=>{l.iso=h,l.mm=w,l.real=h<=Ce,Qe(),d(f)},onDelete:()=>{const E=ce.indexOf(l);E>-1&&ce.splice(E,1),Qe(),d(f)}})}function p(l,u){const f=+l,m=document.createElement("div");let h=!1,w=!1;function E(){return new Set(ce.filter(M=>M.plotId===f&&M.fromStrategy&&M.seasonId).map(M=>M.seasonId))}function S(){var M,y,g,A,I,q,j;m.innerHTML=`
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
        ${h?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>`:""}
        ${w?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Supprimer toutes les irrigations de cette saison ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(M=m.querySelector("#strat-modify"))==null||M.addEventListener("click",()=>{var C;(C=document.querySelector(".irr-sheet-overlay"))==null||C.remove();const T=E(),v=e.find(x=>x.id===f),k=v?{ids:[v.id],label:v.name}:null;ci(e,()=>d(u),k,T)}),(y=m.querySelector("#strat-stop"))==null||y.addEventListener("click",()=>{h=!0,w=!1,S()}),(g=m.querySelector("#strat-delete"))==null||g.addEventListener("click",()=>{w=!0,h=!1,S()}),(A=m.querySelector("#stop-cancel"))==null||A.addEventListener("click",()=>{h=!1,S()}),(I=m.querySelector("#stop-confirm"))==null||I.addEventListener("click",()=>{var k;const T=E(),v=ce.filter(C=>C.plotId===f&&T.has(C.seasonId)&&!C.real).length;ce.splice(0,ce.length,...ce.filter(C=>!(C.plotId===f&&T.has(C.seasonId)&&!C.real))),Qe(),Re(f,{type:"modification",date:Ce,texte:`Saison d'irrigation arrêtée (${v} irrigation(s) planifiée(s) annulée(s)).`}),(k=document.querySelector(".irr-sheet-overlay"))==null||k.remove(),d(u)}),(q=m.querySelector("#delete-cancel"))==null||q.addEventListener("click",()=>{w=!1,S()}),(j=m.querySelector("#delete-confirm"))==null||j.addEventListener("click",()=>{var k;const T=E(),v=ce.filter(C=>C.plotId===f&&T.has(C.seasonId)).length;ce.splice(0,ce.length,...ce.filter(C=>!(C.plotId===f&&T.has(C.seasonId)))),Qe(),Re(f,{type:"modification",date:Ce,texte:`Saison d'irrigation supprimée (${v} irrigation(s) retirée(s) du calendrier).`}),(k=document.querySelector(".irr-sheet-overlay"))==null||k.remove(),d(u)})}S(),ri({title:"Gérer la saison",body:m,saveLabel:"Fermer",onSave:()=>{}})}function r(l){if(!l.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const u=[...l].filter(h=>!h.real).sort((h,w)=>h.iso<w.iso?-1:1),f=[...l].filter(h=>h.real).sort((h,w)=>h.iso>w.iso?-1:1);function m(h){const w=h.real?"#FF8500":"#FFB705",E=ce.indexOf(h);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${vt(h.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${w};white-space:nowrap;margin-right:4px">${h.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${E}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${E}" title="Supprimer">🗑</button>
      </div>`}return`
      ${f.length?`
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${f.length}</span></summary>
          ${f.map(m).join("")}
        </details>`:""}
      ${u.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${u.length}</span></summary>
          ${u.map(m).join("")}
        </details>`:""}
    `}function d(l){var E,S,M;const u=l.querySelector(".irr-cal-body");if(!t){u.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const f={};if(u.querySelectorAll("details[data-section]").forEach(y=>{f[y.dataset.section]=y.open}),t==="all"){const y={};for(const I of ce){const q=I.plotId??"unknown";y[q]||(y[q]=[]),y[q].push(I)}const g=Object.keys(y);if(!g.length){u.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const A=g.sort((I,q)=>{var v,k;const j=((v=e.find(C=>String(C.id)===I))==null?void 0:v.name)??I,T=((k=e.find(C=>String(C.id)===q))==null?void 0:k.name)??q;return j.localeCompare(T,"fr")});u.innerHTML=A.map(I=>{var v;const q=y[I],j=q.some(k=>k.fromStrategy);return`<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${((v=e.find(k=>String(k.id)===I))==null?void 0:v.name)??I}</div>
          ${a(q)}
          ${s(q)}
          ${j?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-pid="${I}">Modifier la saison ↗</button>
          </div>`:""}
        </div>`}).join(""),u.querySelectorAll("[data-strat-pid]").forEach(I=>{I.addEventListener("click",()=>p(I.dataset.stratPid,l))});return}const m=n(),w=m.some(y=>y.fromStrategy)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`;u.innerHTML=`
      ${a(m)}
      ${s(m)}
      ${w}
      ${r(m)}
    `,u.querySelectorAll("details[data-section]").forEach(y=>{const g=y.dataset.section;g in f&&(y.open=f[g])}),u.querySelectorAll(".irr-edit-btn").forEach(y=>{y.addEventListener("click",g=>{g.stopPropagation();const A=ce[+y.dataset.iidx];A&&c(A,m,l)})}),u.querySelectorAll(".irr-del-btn").forEach(y=>{y.addEventListener("click",g=>{g.stopPropagation();const A=+y.dataset.iidx;A>=0&&(ce.splice(A,1),Qe(),d(l))})}),(E=u.querySelector("#open-strat-edit"))==null||E.addEventListener("click",()=>{p(t,l)}),(S=u.querySelector("#cal-add-irrig"))==null||S.addEventListener("click",()=>{us(e,()=>d(l),o(t))}),(M=u.querySelector("#cal-add-strat"))==null||M.addEventListener("click",()=>{ci(e,()=>d(l),o(t))})}const b=[...e].sort((l,u)=>l.name.localeCompare(u.name,"fr")).map(l=>`<option value="${l.id}"${String(l.id)===String(t)?" selected":""}>${l.name}</option>`).join(""),$=st(ye(`
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
          ${b}
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));$.querySelector("#cal-back").addEventListener("click",me),$.querySelector("#cal-filter-sel").addEventListener("change",l=>{t=l.target.value,d($)}),d($)}const et=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:Rt,checkIcon:li,flexLayer:st,openCalendar:ms,openIrrigationSaisie:us,openIrrigationStrategie:ci},Symbol.toStringTag,{value:"Module"})),on=[{name:"Allier AgriTech",distance:8,adherents:31,capteurs:198,parcelles:1140,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Auvergne Agri Conseil",distance:15,adherents:54,capteurs:361,parcelles:2080,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]},{name:"Réseau Bourbonnais",distance:22,adherents:18,capteurs:112,parcelles:630,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Creuse Agri Net",distance:38,adherents:12,capteurs:74,parcelles:410,sharedSensorTypes:["Capteurs d'irrigation"]},{name:"Puy-de-Dôme Connect",distance:45,adherents:39,capteurs:255,parcelles:1490,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]}],ji={name:"Breiz'Agri Conseil",city:"Rennes (35)",phone:"02 99 XX XX XX",email:"contact@breizagri.fr",capteurs:312,parcelles:1830,sharedSensorTypes:["Capteurs météo"]},ln=["Capteurs météo","Capteurs d'irrigation","Stations météo virtuelles"];function qi(e){return e.split(" ").filter(i=>i.length>2).slice(0,2).map(i=>i[0].toUpperCase()).join("")}const je={prenom:"Pierre",nom:"Jourdain",email:"pierre@gaec-jourdain.fr",phone:"06 71 23 45 67",orgName:"GAEC Jourdain",adresse:"Lieu-dit La Croix Blanche, 03500 Saint-Pourçain-sur-Sioule",selectedPlan:"expert",joinNetwork:!0},rn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre 15/30 cm","CHP-30/60":"Tensiomètre 30/60 cm","CHP-60/90":"Tensiomètre 60/90 cm","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},cn={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]},dn=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),Yt=[{id:"essential",name:"Weenat Essential",priceNum:0,price:"Gratuit",color:"#636366",features:["Aucun capteur physique","Historique illimité","Alertes","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"plus",name:"Weenat Plus",priceNum:16.5,price:"16,5 €/mois",color:"#00B093",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"expert",name:"Weenat Expert",priceNum:30,price:"30 €/mois",color:"#006798",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées","Capteurs irrigation","Fonctionnalités irrigation"]}],Kt={Administrateur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!0}]}],Agent:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}],Lecteur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!1}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!1}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!1},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}]};function un(e,i,t,o){const n=i==="essential",a=i==="expert";return e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?["signup","verify","emailVerified","creating","done"]:e==="new-adherent"?["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkInfo","invite","plan",...a?["volumeChoice"]:[],"creating","done"]:["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkChoice",...t?["networkPick"]:[],"invite","plan",...n?[]:["payment","paymentConfirmed"],...a?["volumeChoice"]:[],"creating","done"]}function pn(e,i,t,o){return un(e,i,t)}const mn={signup:"Inscription",verify:"Vérification",orgName:"Exploitation",geoloc:"Localisation",orgInfo:"Informations",networkChoice:"Réseau",networkPick:"Choisir un réseau",networkInfo:"Mon réseau",invite:"Invitations",plan:"Abonnement",payment:"Paiement",paymentConfirmed:"Paiement",volumeChoice:"Volume autorisé",parcelMap:"Parcelle",parcelSource:"Source de données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"};function vn(e,i){const t=document.getElementById("phone-screen");let o=0,n=e==="new-adherent"?"expert":je.selectedPlan,a=je.joinNetwork,s=!1,c=0,p=!0,r=46.3021,d=3.2938,b=null,$=null,l="smv",u=[],f="Parcelle 1";const m=document.createElement("div");m.id="onboarding-overlay",m.className="m-ob-overlay",t.appendChild(m);function h(){return pn(e,n,a)}function w(){return h()[o]}function E(){return h().filter(R=>!["creating","done","parcelDone","emailVerified","paymentConfirmed"].includes(R)).length}function S(){return Yt.find(R=>R.id===n)}function M(){const R=h().slice(0,o).filter(G=>G!=="creating"&&G!=="done"&&G!=="parcelDone").length;return`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Math.round(R/E()*100)}%"></div></div>`}function y(R,V=!0){const G=w(),B=new Set(["creating","done","parcelDone","emailVerified","paymentConfirmed"]),_=V&&o>0&&!B.has(G),H=mn[G]||"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${_?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${H}</span>
          <div style="width:32px"></div>
        </div>
        ${B.has(G)?"":M()}
        <div class="m-ob-body">${R}</div>
      </div>`}function g(){o++,Q()}function A(){o--,Q()}function I(){return y(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-person"></i></div>
        <h2 class="m-ob-h2">Créer mon compte</h2>
      </div>
      <div class="m-ob-form" style="margin-top:20px">
        <div class="m-ob-row2">
          <div class="m-ob-field">
            <label class="m-ob-label">Prénom</label>
            <input class="m-ob-input" type="text" placeholder="Prénom" value="${je.prenom}">
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">Nom</label>
            <input class="m-ob-input" type="text" placeholder="Nom" value="${je.nom}">
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Adresse email professionnelle</label>
          <input class="m-ob-input" type="email" placeholder="Adresse email professionnelle" value="${je.email}">
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
            <input class="m-ob-input m-ob-input--phone" type="tel" placeholder="06 12 12 12 12" value="${je.phone}">
          </div>
        </div>
        <label class="m-ob-cgu-row">
          <input type="checkbox" checked>
          <span>J'ai lu et j'accepte les <a href="#">conditions d'utilisations</a> et la <a href="#">politique de confidentialité</a></span>
        </label>
      </div>
      <button class="m-ob-cta" id="ob-next">Créer mon compte</button>
    `,!1)}function q(){return y(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-envelope-check"></i></div>
        <h2 class="m-ob-h2">Vérifiez votre adresse email</h2>
        <p class="m-ob-sub">Un e-mail a été envoyé à<br><strong>${je.email}</strong></p>
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
          <p class="m-ob-sub" style="text-align:center"><strong>${je.email}</strong><br>a bien été confirmée.</p>
          <button class="m-ob-cta" id="ob-next" style="margin-top:12px">Continuer</button>
        </div>
      </div>`}function T(){return y(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-building"></i></div>
        <h2 class="m-ob-h2">Votre exploitation</h2>
        <p class="m-ob-sub">Comment s'appelle votre exploitation ?</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de l'exploitation</label>
          <input class="m-ob-input" type="text" value="${je.orgName}">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function v(){return y(`
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
            <input class="m-ob-input" type="text" value="${je.adresse}">
          </div>
          <div id="ob-addr-map" class="m-ob-addr-map"></div>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      </div>
    `)}function k(){const R=ls.map(V=>`<button type="button" class="m-ob-pill" data-metier="${V}">${V}</button>`).join("");return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-house"></i></div>
        <h2 class="m-ob-h2">Votre activité</h2>
        <p class="m-ob-sub">Ces informations nous permettent de vous conseiller les fonctionnalités les plus adaptées.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Métier(s)</label>
          <div class="m-ob-pills">${R}</div>
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
    `)}function x(){const R=on.map(V=>{var G;return`
      <div class="m-ob-net-row" data-net="${V.name}">
        <div class="m-ob-net-avatar">${qi(V.name)}</div>
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
      <div class="m-ob-net-list">${R}</div>
      <button class="m-ob-cta" id="ob-next">Rejoindre</button>
    `)}function L(){var V;const R=ji;return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3-fill"></i></div>
        <h2 class="m-ob-h2">Mon réseau</h2>
        <p class="m-ob-sub">Vous avez été invité à rejoindre ce réseau.</p>
      </div>
      <div class="m-ob-info-card" style="background:var(--bg2,#f5f5f7);border-radius:12px;padding:20px 16px;margin:0 0 16px">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:14px">
          <div class="m-ob-net-avatar" style="width:64px;height:64px;font-size:24px;border-radius:16px;margin-bottom:8px">${qi(R.name)}</div>
          <div style="font-weight:700;font-size:16px">${R.name}</div>
          <div style="font-size:13px;color:#636366">${R.city}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px;margin-top:6px"><i class="bi bi-telephone" style="color:#0172A4"></i> ${R.phone}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px"><i class="bi bi-envelope" style="color:#0172A4"></i> ${R.email}</div>
        </div>
        <div style="display:flex;gap:16px;padding-top:12px;padding-bottom:12px;border-top:.5px solid rgba(0,0,0,.1)">
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${R.capteurs}</div><div style="font-size:11px;color:#636366">capteurs</div></div>
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${R.parcelles}</div><div style="font-size:11px;color:#636366">parcelles</div></div>
        </div>
        <div style="padding-top:12px;border-top:.5px solid rgba(0,0,0,.1)">
          ${(V=R.sharedSensorTypes)!=null&&V.length?`
          <div style="font-size:13px;color:#3a3a3c;margin-bottom:8px">Capteurs partagés entre les adhérents :</div>
          <div class="m-ob-pills">${ln.map(G=>`<span class="m-ob-pill${R.sharedSensorTypes.includes(G)?" m-ob-pill--on":" m-ob-pill--off"}" style="cursor:default">${G}</span>`).join("")}</div>
          `:`<div style="font-size:13px;color:#3a3a3c">Aucun capteur n'est partagé entre les adhérents de ce réseau</div>`}
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function D(R){const V=Kt[R];return V?`<div class="m-ob-role-perms">${V.map(G=>`
      <div class="m-rp-section">
        <div class="m-rp-section-title">${G.section}</div>
        ${G.items.map(B=>`
          <div class="m-rp-item">
            <i class="bi bi-${B.ok?"check-circle-fill":"x-circle-fill"}" style="color:${B.ok?"#30d158":"#ff3b30"}"></i>
            <span>${B.label}</span>
          </div>`).join("")}
      </div>`).join("")}</div>`:""}function P(R){const V=Kt[R];return V?`<div class="m-rp-summary">${V.map(B=>{const _=B.items.filter(ee=>ee.ok).length,H=_===0?"none":_===B.items.length?"full":"partial",J={full:"check-circle-fill",partial:"dash-circle-fill",none:"x-circle"}[H],W={full:"#30d158",partial:"#ff9500",none:"#c7c7cc"}[H],ae=B.section.replace("Exploitations adhérentes","Adhérents");return`<div class="m-rp-badge"><i class="bi bi-${J}" style="color:${W}"></i><span>${ae}</span></div>`}).join("")}</div>`:""}function z(){const R=Object.keys(Kt);return`
      <button type="button" class="m-rp-toggle" id="ob-roles-info-toggle"><span>Comparer les droits par rôle</span><i class="bi bi-chevron-down"></i></button>
      <div class="m-ob-roles-info" id="ob-roles-info" hidden>
        <div class="m-ob-roles-tabs">${R.map((V,G)=>`<button type="button" class="m-ob-roles-tab${G===0?" m-ob-roles-tab--on":""}" data-role="${V}">${V}</button>`).join("")}</div>
        <div id="ob-roles-info-detail">${D(R[0])}</div>
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
      </div>`}function O(){return y(`
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
    `)}function Y(){const R=e==="new-adherent",V=ji;if(R){const B=Yt.find(H=>H.id==="expert"),_=B.features.map(H=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${B.color}"></i> ${H}</li>`).join("");return y(`
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
      `)}const G=Yt.map(B=>{const _=B.id===n,H=B.features.map(J=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${B.color}"></i> ${J}</li>`).join("");return`
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
    `)}function te(){const R=S(),V=c+1,G=V*R.priceNum,B=G*12,_=H=>H%1===0?`${H}`:H.toFixed(1).replace(".",",");return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-credit-card"></i></div>
        <h2 class="m-ob-h2">Paiement</h2>
      </div>
      <div class="m-ob-pay-summary">
        <div class="m-ob-pay-line">
          <span style="color:${R.color};font-weight:700">${R.name}</span>
          <span class="m-ob-pay-price" style="color:${R.color}">${_(R.priceNum)} €<span class="m-ob-pay-period">/licence/mois</span></span>
        </div>
        ${V>1?`
        <div class="m-ob-pay-line" style="margin-top:6px">
          <span style="font-size:13px;color:#636366">${V} licences (${c} invité${c>1?"s":""} + vous)</span>
          <span style="font-size:15px;font-weight:700;color:${R.color}">${_(G)} €/mois</span>
        </div>
        <button class="m-ob-link" id="ob-remove-invites" type="button" style="font-size:12px;color:#636366;padding:2px 0;text-align:left">Retirer les invités et ne prendre qu'une licence</button>`:""}
        <div class="m-ob-pay-divider"></div>
        <div class="m-ob-pay-line">
          <span style="font-weight:600">Total annuel</span>
          <span style="font-size:17px;font-weight:700;color:${R.color}">${_(B)} €/an</span>
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
      <button class="m-ob-cta" id="ob-next" style="background:${R.color}"><i class="bi bi-lock-fill" style="font-size:13px"></i> Payer ${_(B)} €</button>
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
    `)}function Ae(){return S(),`
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
            <p class="m-ob-sub" style="text-align:center">Un reçu de votre paiement vous a été envoyé par email à <strong>${je.email}</strong>.</p>
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
      </div>`}function Me(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Votre espace est prêt !</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?`Votre compte a été créé. Votre exploitation par défaut <strong>Exploitation ${je.nom}</strong> est prête.`:"Une parcelle et une station météo virtuelle ont été créées à l'adresse de votre exploitation. Vous pouvez les modifier ou les supprimer."}</p>
        <button class="m-ob-cta" id="ob-finish" style="margin-top:32px">Accéder à mon exploitation</button>
      </div>`}function qe(){return y(`
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
    `)}function Ye(){if(n==="essential")return g(),"";const G=["P+","CHP-15/30","CAPA-30-3","EC"].map(_=>ne.find(H=>H.orgId===1&&H.model===_)).filter(Boolean);return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(_=>`
          <div class="m-ob-plan-card${l===_.id?" m-ob-plan-card--on":""}" data-psource="${_.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${_.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${_.title}</div>
                <div class="m-ob-plan-desc">${_.desc}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>

      <div id="ob-link-sensors" style="display:${l==="link"?"block":"none"}">
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

      <div id="ob-add-sensor-form" style="display:${l==="add"?"block":"none"}">
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
    `)}function Ke(){const R=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),V=new Set(["EC"]),G=ne.filter(H=>u.includes(H.id)),B=G.some(H=>R.has(H.model)),_=G.some(H=>V.has(H.model));return y(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${f}">
        </div>
        ${B?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${gi.map(H=>`<option>${H}</option>`).join("")}
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
            ${Ot.map(H=>`<option${H==="Non irrigué"?" selected":""}>${H}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function kt(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub">
          <strong>${f}</strong> a été créée avec succès.
          ${n==="essential"?"<br>Une station météo virtuelle a été ajoutée au centre de la parcelle.":""}
        </p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Accéder au tableau de bord</button>
      </div>`}const N={signup:I,verify:q,emailVerified:j,orgName:T,geoloc:v,orgInfo:k,networkChoice:C,networkPick:x,networkInfo:L,invite:O,plan:Y,payment:te,paymentConfirmed:Ae,volumeChoice:be,creating:$e,done:Me,parcelMap:qe,parcelSource:Ye,parcelConfig:Ke,parcelDone:kt};function Q(){const R=N[w()];if(!R)return;const V=R();V&&(m.innerHTML=V),Ie()}function X(){c=[...m.querySelectorAll("#ob-invite-list .m-ob-input--email")].filter(V=>V.value.trim()).length}function se(){const R=window.L;R&&setTimeout(()=>{const V=m.querySelector("#ob-parcel-map");if(!V||V._leaflet_id)return;$=R.map(V,{zoomControl:!0,attributionControl:!1}).setView([r,d],15),R.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo($),R.circleMarker([r,d],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo($);const G=r+45e-5;b=R.marker([G,d],{icon:R.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),draggable:!0}).addTo($),b.on("dragend",()=>{const B=b.getLatLng();r=B.lat,d=B.lng}),$.invalidateSize()},50)}function Ie(){var V,G,B,_,H,J,W,ae,ee,ue,ie,oe,pe,he,we,fe;(V=m.querySelector("#ob-back"))==null||V.addEventListener("click",A),m.querySelectorAll("#ob-next").forEach(K=>K.addEventListener("click",g)),(G=m.querySelector("#ob-pw-eye"))==null||G.addEventListener("click",()=>{s=!s;const K=m.querySelector("#ob-pw");K&&(K.type=s?"text":"password");const Z=m.querySelector("#ob-pw-eye i");Z&&(Z.className=s?"bi bi-eye":"bi bi-eye-slash")}),m.querySelectorAll(".m-ob-sub-card").forEach(K=>{K.addEventListener("click",Z=>{Z.target.closest(".m-ob-feat-toggle")||(n=K.dataset.plan,Q())})}),m.querySelectorAll(".m-ob-feat-toggle").forEach(K=>{K.addEventListener("click",Z=>{Z.stopPropagation();const re=m.querySelector(`#feat-${K.dataset.plan}`),Le=K.querySelector(".bi");if(!re)return;const Te=re.style.display!=="none";re.style.display=Te?"none":"block",Le.className=`bi bi-chevron-${Te?"down":"up"}`})}),m.querySelectorAll("[data-join]").forEach(K=>{K.addEventListener("click",()=>{a=K.dataset.join==="oui",m.querySelectorAll("[data-join]").forEach(Z=>Z.classList.toggle("m-ob-plan-card--on",Z===K))})}),m.querySelectorAll("[data-net]").forEach(K=>{K.addEventListener("click",()=>{m.querySelectorAll("[data-net]").forEach(Z=>{const re=Z===K;Z.classList.toggle("m-ob-net-row--on",re),Z.querySelector(".bi").className=`bi bi-${re?"check-circle-fill":"circle"}`})})});const R=()=>{var re;(re=m.querySelector("#ob-geoloc-btns"))==null||re.remove();const K=m.querySelector("#ob-geoloc-addr");K&&(K.style.display="");const Z=window.L;Z&&setTimeout(()=>{const Le=m.querySelector("#ob-addr-map");if(!Le||Le._leaflet_id)return;const Te=Z.map(Le,{zoomControl:!0,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}).setView([46.3021,3.2938],13);Z.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:18}).addTo(Te),Z.marker([46.3021,3.2938]).addTo(Te)},50)};(B=m.querySelector("#ob-geoloc-allow"))==null||B.addEventListener("click",R),(_=m.querySelector("#ob-geoloc-manual"))==null||_.addEventListener("click",R),m.querySelectorAll(".m-ob-pill").forEach(K=>{K.addEventListener("click",()=>K.classList.toggle("m-ob-pill--on"))}),(H=m.querySelector("#ob-add-member"))==null||H.addEventListener("click",()=>{const K=m.querySelector("#ob-invite-list"),Z=document.createElement("div");Z.innerHTML=F(),K.appendChild(Z.firstElementChild)}),(J=m.querySelector("#ob-invite-list"))==null||J.addEventListener("click",K=>{const Z=K.target.closest(".m-ob-invite-remove");if(!Z)return;const re=Z.closest(".m-ob-invite-item");re&&re.remove()}),(W=m.querySelector("#ob-roles-info-toggle"))==null||W.addEventListener("click",()=>{const K=m.querySelector("#ob-roles-info-toggle"),Z=m.querySelector("#ob-roles-info"),re=!Z.hidden;Z.hidden=re,K.classList.toggle("m-rp-toggle--open",!re),K.querySelector("span").textContent=re?"Comparer les droits par rôle":"Masquer la comparaison des rôles"}),(ae=m.querySelector("#ob-roles-info"))==null||ae.addEventListener("click",K=>{const Z=K.target.closest(".m-ob-roles-tab");Z&&(m.querySelectorAll(".m-ob-roles-tab").forEach(re=>re.classList.toggle("m-ob-roles-tab--on",re===Z)),m.querySelector("#ob-roles-info-detail").innerHTML=D(Z.dataset.role))}),(ee=m.querySelector("#ob-invite-list"))==null||ee.addEventListener("change",K=>{var Le;const Z=K.target.closest(".m-ob-invite-role-sel");if(!Z)return;const re=(Le=Z.closest(".m-ob-invite-item"))==null?void 0:Le.querySelector(".m-ob-role-summary-wrap");re&&(re.innerHTML=P(Z.value))}),(ue=m.querySelector("#ob-remove-invites"))==null||ue.addEventListener("click",()=>{c=0,Q()}),(ie=m.querySelector("#ob-send-invites"))==null||ie.addEventListener("click",()=>{X(),g()}),(oe=m.querySelector("#ob-skip-invite"))==null||oe.addEventListener("click",()=>{c=0,g()}),m.querySelectorAll("[data-psource]").forEach(K=>{K.addEventListener("click",()=>{l=K.dataset.psource,m.querySelectorAll("[data-psource]").forEach(Z=>Z.classList.toggle("m-ob-plan-card--on",Z===K)),m.querySelector("#ob-link-sensors").style.display=l==="link"?"block":"none",m.querySelector("#ob-add-sensor-form").style.display=l==="add"?"block":"none"})}),m.querySelectorAll("[data-sensor-id]").forEach(K=>{K.addEventListener("change",()=>{const Z=parseInt(K.dataset.sensorId);K.checked?u.includes(Z)||u.push(Z):u=u.filter(Pe=>Pe!==Z);const Le=ne.filter(Pe=>u.includes(Pe.id)).filter(Pe=>!dn.has(Pe.model)),Te={};Le.forEach(Pe=>(cn[Pe.model]||[]).forEach(wi=>{Te[wi]=(Te[wi]||0)+1}));const rt=Object.entries(Te).filter(([,Pe])=>Pe>1).map(([Pe])=>Pe),nt=m.querySelector("#ob-sensor-conflict"),Lt=m.querySelector("#ob-sensor-conflict-msg");nt&&Lt&&(rt.length>0?(Lt.textContent=`Plusieurs capteurs mesurent la même métrique (${rt.join(", ")}). Décochez l'un des capteurs redondants.`,nt.style.display="flex"):nt.style.display="none")})}),m.querySelectorAll("[data-volume]").forEach(K=>{K.addEventListener("click",()=>{p=K.dataset.volume==="oui",m.querySelectorAll("[data-volume]").forEach(re=>re.classList.toggle("m-ob-plan-card--on",re===K));const Z=m.querySelector("#ob-volume-field");Z&&(Z.style.display=p?"block":"none")})}),(pe=m.querySelector("#ob-skip-source"))==null||pe.addEventListener("click",()=>{l="smv",g()}),(he=m.querySelector("#ob-parcel-name"))==null||he.addEventListener("input",K=>{f=K.target.value}),w()==="parcelMap"&&se(),w()==="creating"&&setTimeout(()=>{o++,Q()},2200),(we=m.querySelector("#ob-finish"))==null||we.addEventListener("click",()=>{m.classList.add("m-ob-overlay--out"),setTimeout(()=>{m.remove(),i()},400)}),(fe=m.querySelector("#ob-see-parcel"))==null||fe.addEventListener("click",()=>{m.classList.add("m-ob-overlay--out"),setTimeout(()=>{m.remove(),i()},400)})}Q()}const bn=["Ail","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Colza","Courgette","Féverole","Haricot vert","Laitue","Lin oléagineux","Luzerne","Maïs fourrage","Maïs grain","Orge d'hiver","Orge de printemps","Oignon","Pêcher","Pois protéagineux","Poireau","Poirier","Pomme de terre","Pommier","Prairie","Prunier","Ray-grass","Soja","Tomate","Tournesol","Trèfle","Vigne"];function vs({showBack:e=!0,btnLabel:i="Ajouter",showSkip:t=!1}={}){return`
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
    </div>`}async function fn(e,i){var t,o,n,a;try{const c=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${i}`)).json();return((t=c.address)==null?void 0:t.village)||((o=c.address)==null?void 0:o.town)||((n=c.address)==null?void 0:n.city)||((a=c.address)==null?void 0:a.municipality)||""}catch{return""}}function hn(e){const i=document.getElementById("phone-screen");let t=46.3021,o=3.2938,n=null,a=null,s=46.3021+45e-5,c=3.2938,p=null,r=null,d="smv",b=[],$="",l=0;const u=["parcelMap","parcelSource","parcelData","parcelConfig","parcelDone"],f={parcelMap:"Parcelle",parcelSource:"Source de données",parcelData:"Données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"},m=document.createElement("div");m.id="parcel-creation-overlay",m.className="m-ob-overlay",i.appendChild(m);function h(){return u[l]}function w(){l++,v()}function E(){l--,v()}function S(x,L=!0){const D=h(),P=L&&l>0&&D!=="parcelDone",z=f[D]||"",F=u.filter(be=>be!=="parcelDone"),O=F.indexOf(D),Y=O>=0?Math.round(O/F.length*100):100,te=D!=="parcelDone"?`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Y}%"></div></div>`:"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${P?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${z}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${te}
        <div class="m-ob-body">${x}</div>
      </div>`}function M(){return S(`
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
    `,!1)}function y(){return S(`
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
    `)}function g(){if(d==="smv")return S(`
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
      `);if(d==="link"){const x=ne.slice(0,6);return S(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-link-45deg"></i></div>
          <h2 class="m-ob-h2">Lier un capteur</h2>
          <p class="m-ob-sub">Sélectionnez les capteurs à lier à cette parcelle.</p>
        </div>
        <div style="background:#fff;border-radius:12px;overflow:hidden;border:.5px solid rgba(0,0,0,.1);margin-bottom:16px">
          ${x.map((L,D)=>`
            <label style="display:flex;align-items:center;gap:12px;padding:12px 14px;${D<x.length-1?"border-bottom:.5px solid rgba(0,0,0,.08)":""};cursor:pointer">
              <input type="checkbox" ${b.includes(L.id)?"checked":""} data-sensor-id="${L.id}" style="width:18px;height:18px;flex-shrink:0">
              <div>
                <div style="font-size:14px;font-weight:600">${L.model}</div>
                <div style="font-size:12px;color:#636366">${L.serial}</div>
              </div>
            </label>`).join("")}
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
        <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
      `)}return vs({showBack:!0,btnLabel:"Continuer",showSkip:!0})}function A(){const x=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),L=new Set(["EC"]),D=ne.filter(O=>b.includes(O.id)),P=D.some(O=>x.has(O.model)),z=D.some(O=>L.has(O.model)),F=Ot.filter(O=>O!=="Non renseigné");return $||fn(t,o).then(O=>{if(!O)return;$=O;const Y=m.querySelector("#ob-parcel-name");Y&&!Y._edited&&(Y.value=O)}),S(`
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
        ${P?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${gi.map(O=>`<option>${O}</option>`).join("")}
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
            ${bn.map(O=>`<option>${O}</option>`).join("")}
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
            ${F.map(O=>`<option>${O}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function I(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub"><strong>${$||"La parcelle"}</strong> a été créée avec succès.</p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function q(){const x=window.L;x&&setTimeout(()=>{const L=m.querySelector("#ob-parcel-map");if(!L||L._leaflet_id)return;a=x.map(L,{zoomControl:!0,attributionControl:!1}).setView([t,o],15),x.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(a),x.circleMarker([t,o],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(a);const D=x.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});n=x.marker([t+45e-5,o],{icon:D,draggable:!0}).addTo(a),n.on("dragend",()=>{const P=n.getLatLng();t=P.lat,o=P.lng}),a.on("click",P=>{t=P.latlng.lat,o=P.latlng.lng,n.setLatLng([t,o])}),a.invalidateSize()},50)}function j(){const x=window.L;x&&(s=t+45e-5,c=o,setTimeout(()=>{const L=m.querySelector("#ob-smv-map");if(!L||L._leaflet_id)return;r=x.map(L,{zoomControl:!0,attributionControl:!1}).setView([t,o],15),x.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(r),x.circleMarker([t,o],{radius:8,color:"#fff",weight:2,fillColor:"#E05252",fillOpacity:1}).addTo(r);const D=x.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#0172A4;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});p=x.marker([s,c],{icon:D,draggable:!0}).addTo(r),p.on("dragend",()=>{const P=p.getLatLng();s=P.lat,c=P.lng}),r.on("click",P=>{s=P.latlng.lat,c=P.latlng.lng,p.setLatLng([s,c])}),r.invalidateSize()},50))}const T={parcelMap:M,parcelSource:y,parcelData:g,parcelConfig:A,parcelDone:I};function v(){var L;const x=(L=T[h()])==null?void 0:L.call(T);x&&(m.innerHTML=x),C()}function k(){m.classList.add("m-ob-overlay--out"),setTimeout(()=>{m.remove(),e()},400)}function C(){var L,D,P,z,F;(L=m.querySelector("#ob-back"))==null||L.addEventListener("click",E),(D=m.querySelector("#ob-close"))==null||D.addEventListener("click",k),m.querySelectorAll("#ob-next").forEach(O=>O.addEventListener("click",w)),m.querySelectorAll("[data-psource]").forEach(O=>{O.addEventListener("click",()=>{d=O.dataset.psource,m.querySelectorAll("[data-psource]").forEach(Y=>Y.classList.toggle("m-ob-plan-card--on",Y===O))})}),m.querySelectorAll("[data-sensor-id]").forEach(O=>{O.addEventListener("change",()=>{const Y=parseInt(O.dataset.sensorId);O.checked?b.includes(Y)||b.push(Y):b=b.filter(te=>te!==Y)})}),(P=m.querySelector("#ob-skip-source"))==null||P.addEventListener("click",()=>{d="smv",w()});const x=m.querySelector("#ob-parcel-name");x&&x.addEventListener("input",O=>{O.target._edited=!0,$=O.target.value}),h()==="parcelMap"&&q(),h()==="parcelData"&&d==="smv"&&j(),(z=m.querySelector("#ob-see-parcel"))==null||z.addEventListener("click",k),(F=m.querySelector("#ob-finish"))==null||F.addEventListener("click",k)}v()}function gn(e){const i=document.getElementById("phone-screen");let t=0;const o=["sensorAdd","sensorDone"],n=document.createElement("div");n.id="sensor-creation-overlay",n.className="m-ob-overlay",i.appendChild(n);function a(){return o[t]}function s(){t++,b()}function c(){return vs({showBack:!1,btnLabel:"Enregistrer le capteur",showSkip:!1})}function p(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Capteur ajouté !</h2>
        <p class="m-ob-sub">Votre capteur a été enregistré avec succès.</p>
        <button class="m-ob-cta" id="ob-see-sensor" style="margin-top:32px"><i class="bi bi-broadcast"></i> Voir le capteur</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function r(){n.classList.add("m-ob-overlay--out"),setTimeout(()=>{n.remove(),e()},400)}function d(){var $,l,u,f;($=n.querySelector("#ob-close"))==null||$.addEventListener("click",r),(l=n.querySelector("#ob-next"))==null||l.addEventListener("click",s),(u=n.querySelector("#ob-see-sensor"))==null||u.addEventListener("click",r),(f=n.querySelector("#ob-finish"))==null||f.addEventListener("click",r)}function b(){var u;const $={sensorAdd:c,sensorDone:p},l=(u=$[a()])==null?void 0:u.call($);l&&(n.innerHTML=l),d()}b()}const bs={admin:100,adherent:1,new:41},fs="weenat-m-dash";function ht(){try{return JSON.parse(localStorage.getItem(fs))||{}}catch{return{}}}function Pi(e){try{localStorage.setItem(fs,JSON.stringify({...ht(),...e}))}catch{}}const xe=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls préférés",info:"Mes cumuls préférés.<br><br>Ajoutez ici les valeurs des cumuls qui sont importants pour vous en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures préférées",info:"Mes mesures préférées.<br><br>Ajoutez ici les indicateurs de vos parcelles ou capteurs qui vous intéressent en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"radar_pluie",title:"Radar de pluie",icon:"bi-cloud-rain-heavy",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function yn(e,i,t){var a;const o=document.getElementById("phone-screen");(a=document.querySelector(".m-winfo-overlay"))==null||a.remove();const n=document.createElement("div");n.className="m-winfo-overlay",n.innerHTML=`
    <div class="m-winfo-modal">
      <div class="m-winfo-hd">
        <span class="m-winfo-title">${e}</span>
        <button class="m-winfo-close" type="button"><i class="bi bi-x"></i></button>
      </div>
      <div class="m-winfo-gif">
        ${t?`<img src="${t}" alt="${e}">`:'<div class="m-winfo-gif-placeholder"><i class="bi bi-play-circle" style="font-size:28px;display:block;margin-bottom:6px"></i>GIF à venir</div>'}
      </div>
      <div class="m-winfo-body">${i}</div>
    </div>`,n.querySelector(".m-winfo-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",s=>{s.target===n&&n.remove()}),o.appendChild(n)}function Fe(e){var o;const i=document.getElementById("phone-screen");(o=document.querySelector(".m-toast"))==null||o.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Oe({title:e,body:i,doneLabel:t="Fermer",onDone:o}={}){var c;const n=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{o==null||o(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}const Di=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function zi(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=Di[Math.floor(Math.random()*Di.length)],o=t.label==="Pluie"||t.label==="Averses",n=Math.round(8+Math.random()*8),a=Math.round(16+Math.random()*14),s=Array.from({length:24},(c,p)=>{const r=Math.sin(Math.PI*(p-6)/12),d=Math.round(n+(a-n)*Math.max(0,r)),b=o&&p>=8&&p<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:p,label:`${String(p).padStart(2,"0")}h`,temp:d,pluie:b,hum:Math.round(85-40*Math.max(0,r)),vent:Math.round(10+Math.random()*20),icon:b>0?"bi-cloud-rain-fill":p<7||p>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:o?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:n,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:a,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function Zt(e){const i=e.id,t=e.reserveHydrique||50,o=+((i*2.3+7)%32).toFixed(1),n=+((i*1.1+14)%14+10).toFixed(1),a=+((i*.6+1)%6).toFixed(1),s=Math.round(t*((i%5+1)/10)),c=Math.max(0,+(s+o-n-a).toFixed(0)),p=c<s?s-c:0;return{j0:s,j7:c,bilan:p}}const Pt=4,Xt=5,_i=["#0172A4","#ff8500","#30d158","#bf5af2"],hs={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548"},di={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol"},xn={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C"},Hi={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},$n=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function gs(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function wn(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const n=new Set(t);return i.filter(a=>a.parcelIds.includes(+e.slice(2))).forEach(a=>(Hi[a.model]||[]).forEach(s=>n.add(s))),[...n].filter(a=>a in di)}const o=i.find(n=>n.id===+e.slice(2));return o?Hi[o.model]||[]:[]}function Sn(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let Be=[],De=[];(()=>{const e=ht();if(e.catalog){const i=e.catalog.map(t=>t.id);xe.sort((t,o)=>{const n=i.indexOf(t.id),a=i.indexOf(o.id);return(n<0?999:n)-(a<0?999:a)}),e.catalog.forEach(t=>{const o=xe.find(n=>n.id===t.id);o&&(o.active=t.active)})}e.mesuresList&&(Be=e.mesuresList),e.cumulsList&&(De=e.cumulsList)})();function En(e,i,t){const o=[...e+i].reduce((s,c)=>s+c.charCodeAt(0),1),n=s=>(Math.sin(o*.07+s*.5)+Math.sin(o*.03+s*1.3))/2+.5,a={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(s,c)=>a.sparse&&n(c*3.7)>.28?0:Math.max(0,a.base+a.amp*n(c*.28+1.2)))}const kn=new Set(["pluie","etp"]);function Ln(e,i){var E;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,o=En(e.subjectKey,e.metricId,t),n=270,a=100,s=28,c=14,p=Math.max(...o,1),r=kn.has(e.metricId);let d,b="";for(let S=0;S<=2;S++){const M=Math.round(S/2*(a-c-4)+4);b+=`<line x1="${s}" y1="${M}" x2="${s+n}" y2="${M}" stroke="#E8E6E0" stroke-width=".5"/>`,b+=`<text x="${s-3}" y="${M+3}" text-anchor="end" font-size="8" fill="#636366">${+(p*(1-S/2)).toFixed(p<5?1:0)}</text>`}const $=Sn(e.period,e.step),l=$.map((S,M)=>`<text x="${s+Math.round(M/($.length-1)*n)}" y="${a+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${S}</text>`).join(""),u=JSON.stringify(o.map(S=>+S.toFixed(2))),f=hs[e.metricId]||e.color,m=e.metricId==="pluie"?"#2E75B6":f;if(r){const S=Math.max(1,n/t*.7),M=o.map((y,g)=>{const A=Math.round(y/p*(a-c-4)),I=s+Math.round(g/(t-1)*n)-S/2,q=a-c-A;return`<rect x="${I.toFixed(1)}" y="${q.toFixed(1)}" width="${S.toFixed(1)}" height="${A.toFixed(1)}" fill="${m}" opacity=".85" rx="1"/>`}).join("");d=`<svg viewBox="0 0 ${s+n} ${a+6}" style="width:100%;display:block;overflow:visible">${b}${M}${l}</svg>`}else{const S=o.map((M,y)=>`${s+Math.round(y/(t-1)*n)},${a-c-Math.round(M/p*(a-c-4))}`).join(" ");d=`<svg viewBox="0 0 ${s+n} ${a+6}" style="width:100%;display:block;overflow:visible">
      ${b}
      <polyline points="${S}" fill="none" stroke="${f}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${a}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${l}
    </svg>`}const h=(E=e.subjectKey)!=null&&E.startsWith("s-")?e.subjectKey.slice(2):null,w=h?`<button class="m-wf-view-data" data-sensor-id="${h}" data-period="${e.period}" data-step="${e.step}" style="display:flex;align-items:center;gap:4px;margin-top:8px;padding:6px 10px;border:none;background:rgba(0,122,255,.08);border-radius:8px;color:#007AFF;font-size:12px;font-weight:600;cursor:pointer;width:100%;justify-content:center">Voir les données <i class="bi bi-fullscreen" style="font-size:11px"></i></button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?m:f}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${u}' style="position:relative;margin-top:4px">
        ${d}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${w}
    </div>`}function Bi(e,i){const t=Be.length>=Pt,o=e.map(c=>`<option value="p-${c.id}">${$t(c)}</option>`).join(""),n=i.filter(c=>c.parcelIds.length>0).map(c=>`<option value="s-${c.id}">${wt(c,e)}</option>`).join(""),a=gs("7d");return`
    <div id="msr-list">${Be.length?Be.map(Ln).join(""):'<div class="m-wf-empty">Ajoutez ici les mesures que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Be.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${Pt}/${Pt})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez une mesure pour en ajouter une nouvelle.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="msr-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${o}</optgroup>
        ${n?`<optgroup label="Capteurs">${n}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period">
          ${$n.map(c=>`<option value="${c.id}"${c.id==="7d"?" selected":""}>${c.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${a.map(c=>`<option value="${c.id}">${c.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Ajouter la mesure</button>
    </div>`}`}function Cn(e,i){const t=new Date().toISOString().split("T")[0],o=new Date;o.setDate(o.getDate()+7);const n=o.toISOString().split("T")[0];return ce.filter(a=>!a.real&&a.iso>=t&&a.iso<=n&&a.plotId===e.id).reduce((a,s)=>a+s.mm,0)}const Fi=9;function ct(e,i=!1,t=ht().sensorlessEnabled??!0){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const o=[],n=e.slice(),a=(m,h)=>Zt(h).bilan-Zt(m).bilan,s=[...o.flatMap(m=>m.ids.map(h=>e.find(w=>w.id===h)).filter(Boolean).sort(a)),...n.slice().sort(a)],c=i?s:s.slice(0,Fi),p=new Set(c.map(m=>m.id)),r=s.length-c.length,d=m=>{const h=ne.some(A=>A.parcelIds.includes(m.id)&&(A.model.startsWith("CHP")||A.model.startsWith("CAPA")||A.model.startsWith("EC"))),{j0:w,j7:E,bilan:S}=Zt(m),M=Cn(m),y=h?w:'<span style="color:#aeaeb2">—</span>',g=h?E:'<span style="color:#aeaeb2">—</span>';return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${m.id}">${m.name}</button>
      <div class="m-bh-td">${y}</div>
      <div class="m-bh-td">${g}</div>
      ${t?`<div class="m-bh-td m-bh-td--reco">${S>0?S:"—"}</div>`:""}
      <div class="m-bh-td m-bh-td--planif">${M>0?M:"—"}</div>`};let b="";for(const m of o){const h=m.ids.map(w=>e.find(E=>E.id===w)).filter(Boolean).filter(w=>p.has(w.id)).sort(a);h.length&&(b+=`<div class="m-bh-group-row" style="background:rgba(0,0,0,.035)">⬡ ${m.label}</div>`,b+=h.map(d).join(""))}const $=n.filter(m=>p.has(m.id)).sort(a);$.length&&o.length&&(b+='<div class="m-bh-group-row">⬡ Autres parcelles</div>'),b+=$.map(d).join("");const l=t?"1fr 38px 38px 46px 46px":"1fr 38px 38px 46px",u=t?2:1,f=s.length>Fi?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${r} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${l}">
        <div class="m-bh-gh"></div>
        <div class="m-bh-gh" style="grid-column:span 2">Niveau RFU</div>
        <div class="m-bh-gh" style="grid-column:span ${u}">Irrigations J+7</div>
        <div class="m-bh-th m-bh-unit-lbl">données en mm</div>
        <div class="m-bh-th">J0</div>
        <div class="m-bh-th">J+7</div>
        ${t?'<div class="m-bh-th">Reco.</div>':""}
        <div class="m-bh-th">Planif.</div>
        ${b}
      </div>
    </div>
    ${f}
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
    </div>`}const Qt=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function An(e,i,t,o){Object.fromEntries(ve.map(l=>[l.id,l]));const n=e.map(l=>`<option value="p-${l.id}">${Qt($t(l))}</option>`).join(""),a=i.map(l=>`<option value="s-${l.id}">${Qt(wt(l,e))}</option>`).join(""),s=`
    <optgroup label="Parcelles">${n}</optgroup>
    ${a?`<optgroup label="Capteurs">${a}</optgroup>`:""}`,c=(l,u)=>{const f=`${l.dayLabel.charAt(0).toUpperCase()+l.dayLabel.slice(1)} · ${l.dateStr}`;return`
    <div class="m-prev-card" data-day="${u}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${l.icon}" style="color:${l.color};font-size:26px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${f}</span>
          <span class="m-prev-card-cond">${l.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-tbl">
        <div class="m-prev-tbl-cell">
          <i class="bi bi-cloud-rain" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${l.pluie}</span>
          <span class="m-prev-tbl-unit">mm</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-thermometer-half" style="color:#E05252"></i>
          <span class="m-prev-tbl-val">${l.tMin}–${l.tMax}</span>
          <span class="m-prev-tbl-unit">°C</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-droplet" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${l.humMoy}</span>
          <span class="m-prev-tbl-unit">%</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-wind" style="color:#636366"></i>
          <span class="m-prev-tbl-val">${l.ventMoy}/<em>${l.ventRafales}</em></span>
          <span class="m-prev-tbl-unit">km/h</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-moisture" style="color:#24B066"></i>
          <span class="m-prev-tbl-val">${l.etp}</span>
          <span class="m-prev-tbl-unit">ETP</span>
        </div>
      </div>
    </div>`},p=t.slice(0,3).map(c).join(""),r=t.slice(3).map(c).join(""),d=ve.find(l=>l.id===(o==="admin"?100:1)),b=(d==null?void 0:d.adresse)||"";return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${b?`<option value="addr">${Qt(`${d.name} — ${d.ville||b}`)}</option>`:""}${s}</select>
    <div class="m-prev-cards">
      ${p}
      <div class="m-prev-extra" style="display:none">${r}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Ne=[{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:null},{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],ys=new Set(Ne.flatMap(e=>e.needsModels||[]));function ei(e){if(!e)return Ne;if(e.startsWith("s-")){const t=ne.find(o=>o.id===+e.slice(2));return t?Ne.filter(o=>o.needsModels===null||o.needsModels.includes(t.model)):Ne}const i=new Set(ne.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Ne.filter(t=>t.needsModels===null||t.needsModels.some(o=>i.has(o)))}const Oi={etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#FEE7B4"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function Mn(){return De.length?De.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
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
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function Ri(e,i,t){if(!e||!i)return null;const o=Ne.find(s=>s.id===t)||Ne[0],n=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),a=e.split("").reduce((s,c)=>s+c.charCodeAt(0),0)+n;return+(o.base+a%(o.amp*10)/10).toFixed(1)}function Ni(e,i){const t=De.length>=Xt,o=`${new Date().getFullYear()}-01-01`,n=i.filter(p=>p.parcelIds.length>0&&ys.has(p.model)),a=e.map(p=>`<option value="p-${p.id}">${$t(p)}</option>`).join(""),s=n.map(p=>`<option value="s-${p.id}">${wt(p,e)}</option>`).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${De.length?Mn():'<div class="m-wf-empty">Ajoutez ici les cumuls que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${De.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${Xt}/${Xt})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez un cumul pour en ajouter un nouveau.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="cumuls-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${a}</optgroup>
        ${s?`<optgroup label="Capteurs">${s}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="cumuls-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div id="cumuls-thresholds"></div>
      <div class="m-wf-row">
        <div class="m-wf-field">
          <span class="m-wf-label">Depuis le</span>
          <input type="date" class="m-wf-date" id="cumuls-from" value="${o}">
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Ajouter le cumul</button>
    </div>`}`}function In(e){const i=e.id,t=new Date;let o,n;i%5===3?(o=0,n=(t.getHours()+2+i%3*3)%24):(o=(i*2+1)%6+1,n=6+i%5*2);const a=2+i%3,s=new Date(t);s.setDate(s.getDate()+o);const c=o===0?"Aujourd'hui":s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),p=o*1440+n*60-(t.getHours()*60+t.getMinutes());return{winDateStr:c,winHour:n,winDur:a,minutesFromNow:p}}const Tn="#1a9e40";function jn(e){const t=e.filter(n=>n.crop).map(n=>({p:n,d:In(n)})).filter(({d:n})=>n.minutesFromNow>=0&&n.minutesFromNow<=1440).sort((n,a)=>n.d.minutesFromNow-a.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:n,d:a})=>{const s=String(a.winHour).padStart(2,"0"),c=String((a.winHour+a.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${n.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${n.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${Tn};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
            <i class="bi bi-check2-circle" style="font-size:12px"></i>
            ${a.winDateStr} · ${s}h–${c}h
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const xs="weenat-m-traitements";function bt(){try{return JSON.parse(localStorage.getItem(xs))||[]}catch{return[]}}function xi(e){localStorage.setItem(xs,JSON.stringify(e))}function qn(e,i){let t=new Set;const o=[],n=new Date().toISOString().split("T")[0];function a(){return Rt(o,e,t)}function s(r){const d=t.size,b=r.querySelector(".irr-summary"),$=r.querySelector(".irr-save-btn");!b||!$||(b.textContent=d===0?"":`${d} parcelle${d>1?"s":""}`,$.disabled=d===0)}function c(r){var d;(d=r.querySelector("#irr-sel-all"))==null||d.addEventListener("click",()=>{const b=e.every($=>t.has($.id));e.forEach($=>b?t.delete($.id):t.add($.id)),r.querySelector("#trait-sel-list").innerHTML=a(),c(r),s(r)}),r.querySelectorAll(".irr-group-card").forEach(b=>{b.addEventListener("click",()=>{const $=b.dataset.gids.split(",").map(Number),l=$.every(u=>t.has(u));$.forEach(u=>l?t.delete(u):t.add(u)),r.querySelector("#trait-sel-list").innerHTML=a(),c(r),s(r)})}),r.querySelectorAll(".irr-plot-row").forEach(b=>{b.addEventListener("click",()=>{const $=+b.dataset.pid;t.has($)?t.delete($):t.add($),r.querySelector("#trait-sel-list").innerHTML=a(),c(r),s(r)})})}const p=st(ye(`
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
      <div id="trait-sel-list">${a()}</div>
    </div>
    <div class="irr-bottom-bar" style="border-top-color:rgba(48,209,88,.2)">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled style="background:#1a9e40;border-color:#1a9e40">Enregistrer</button>
    </div>
  `));c(p),s(p),p.querySelector("#trait-back").addEventListener("click",me),p.querySelector(".irr-save-btn").addEventListener("click",()=>{const r=p.querySelector("#trait-date").value||n,d=p.querySelector("#trait-produit").value.trim()||"—",b=p.querySelector("#trait-dose").value.trim()||"—",$=bt();$.unshift({id:Date.now(),date:r,produit:d,dose:b,plotIds:[...t]}),xi($),me(),i("Traitement enregistré")})}function Pn(e,i,t){const o=i==="adherent"?bs.adherent:null,n=o!==null?le.filter(r=>r.orgId===o):le;let a=null;const s=ye(`
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
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",me);const c=r=>{const[d,b,$]=r.split("-");return`${$}/${b}/${d}`};function p(){const r=s.querySelector("#trait-cal-content");let d=bt();if(a!==null&&(d=d.filter(b=>(b.plotIds||[]).includes(a))),!d.length){r.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}r.innerHTML=d.map(b=>{const $=(b.plotIds||[]).map(l=>{var u;return(u=e.find(f=>f.id===l))==null?void 0:u.name}).filter(Boolean);return`
        <div class="m-trait-cal-card" data-id="${b.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${c(b.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${$.length} parcelle${$.length>1?"s":""}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${b.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${b.dose}</div>
          ${$.length?`<div style="font-size:11px;color:#8e8e93;margin-top:6px">${$.join(", ")}</div>`:""}
        </div>`}).join(""),r.querySelectorAll(".m-trait-cal-card").forEach(b=>{b.addEventListener("click",()=>{const $=+b.dataset.id,u=bt().find(w=>w.id===$);if(!u)return;const f=(u.plotIds||[]).map(w=>{var E;return(E=e.find(S=>S.id===w))==null?void 0:E.name}).filter(Boolean),m=document.createElement("div");m.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${c(u.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${u.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${u.dose}</div>
            ${f.length?`<div style="font-size:12px;color:#8e8e93">${f.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const h=Oe({title:"Traitement",body:m,doneLabel:"Fermer",onDone:()=>{}});m.querySelector("#tcal-del").addEventListener("click",()=>{const w=bt().filter(E=>E.id!==$);xi(w),h.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{h.remove(),p()},280),t("Traitement supprimé")}),m.querySelector("#tcal-edit").addEventListener("click",()=>{h.classList.remove("m-sheet-overlay--show"),setTimeout(()=>h.remove(),280),Dn(u,e,t,p)})})})}s.querySelector("#trait-filter").addEventListener("change",r=>{a=r.target.value?+r.target.value:null,p()}),p()}function Dn(e,i,t,o){const n=document.createElement("div");n.innerHTML=`
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
    </div>`,Oe({title:"Modifier le traitement",body:n,doneLabel:"Enregistrer",onDone:()=>{const a=bt(),s=a.findIndex(c=>c.id===e.id);s!==-1&&(a[s].date=n.querySelector("#tedit-date").value||e.date,a[s].produit=n.querySelector("#tedit-produit").value.trim()||e.produit,a[s].dose=n.querySelector("#tedit-dose").value.trim()||e.dose,xi(a)),t("Traitement modifié"),o()}})}const zn={"capteur déplacé":"M12 2c-2.117 0-3.98.741-5.588 2.225C4.803 5.708 4 7.699 4 10.199c0 1.6.6 3.322 1.8 5.164C7 17.205 8.818 19.2 11.25 21.35a1.2 1.2 0 0 0 .75.275 1.2 1.2 0 0 0 .75-.275c2.433-2.15 4.25-4.145 5.45-5.987C19.4 13.521 20 11.8 20 10.2c0-2.5-.803-4.491-2.412-5.974C15.98 2.74 14.117 2 12 2zm0 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 7v3a.969.969 0 0 1-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287A.966.966 0 0 1 11 10V7c0-.283.095-.52.287-.713A.969.969 0 0 1 12 6zm0 7a.97.97 0 0 1 .713.287c.191.192.287.43.287.713s-.096.522-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287c-.192-.191-.287-.43-.287-.713s.095-.52.287-.713A.969.969 0 0 1 12 13z","émissions interrompues":"M19.075 21.9 8.125 10.975c-.033.167-.063.333-.087.5S8 11.817 8 12c0 .383.046.746.138 1.087.091.342.229.663.412.963.15.25.217.517.2.8a1.04 1.04 0 0 1-.3.7c-.2.2-.438.292-.713.275s-.487-.133-.637-.35c-.35-.5-.62-1.042-.813-1.625A5.889 5.889 0 0 1 6 12a5.985 5.985 0 0 1 .575-2.575L5.1 7.95c-.35.6-.62 1.238-.813 1.913A7.79 7.79 0 0 0 4 12a7.855 7.855 0 0 0 1.675 4.9c.183.233.27.487.262.762-.008.275-.112.513-.312.713a.916.916 0 0 1-1.375-.05c-.7-.867-1.25-1.837-1.65-2.913S2 13.2 2 12c0-1.033.146-2.008.437-2.925A10.71 10.71 0 0 1 3.65 6.5L2.075 4.925a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725a.948.948 0 0 1 .7-.275c.283 0 .525.092.725.275l16.975 17c.183.183.275.417.275.7s-.092.517-.275.7c-.2.2-.442.3-.725.3s-.517-.1-.7-.3zm1.275-4.4-1.45-1.45c.35-.6.62-1.238.813-1.913S20 12.75 20 12a7.854 7.854 0 0 0-1.675-4.9c-.183-.233-.27-.487-.263-.762s.113-.513.313-.713a.916.916 0 0 1 1.375.05c.7.867 1.25 1.833 1.65 2.9.4 1.067.6 2.208.6 3.425 0 1.017-.146 1.988-.438 2.913S20.867 16.7 20.35 17.5zm-2.925-2.925-1.55-1.55c.033-.167.062-.333.087-.5S16 12.183 16 12c0-.383-.046-.746-.138-1.088s-.229-.662-.412-.962a1.367 1.367 0 0 1-.2-.8 1.04 1.04 0 0 1 .3-.7.93.93 0 0 1 .712-.287.76.76 0 0 1 .638.337c.35.483.62 1.025.813 1.625.191.6.287 1.225.287 1.875a5.985 5.985 0 0 1-.575 2.575z","capteur couché":"M6 5a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h7a1 1 0 1 0 0-2h-7V7a2 2 0 0 0-2-2H6zm3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 16v2h20v-2H2z","cuillère bloquée":"M17.615 3.25c-.268 0-.537.103-.742.309L3.508 16.922a1.05 1.05 0 0 0 0 1.486l.031.027-.002.002.05.041c.459.438 1.055.718 1.733.813.678.094 1.416 0 2.139-.274a5.793 5.793 0 0 0 2.018-1.322 5.802 5.802 0 0 0 1.322-2.02c.411-1.087.411-2.189 0-3.074l7.558-7.558a1.047 1.047 0 0 0 0-1.485 1.046 1.046 0 0 0-.742-.308zm-1.037 8.416a.473.473 0 0 0-.35.137l-1.05 1.05a.435.435 0 0 0-.106.163.555.555 0 0 0-.031.187c0 .067.01.13.031.188.02.058.055.112.105.162l1.051 1.05a.473.473 0 0 0 .35.137.472.472 0 0 0 .488-.488.474.474 0 0 0-.138-.35l-.2-.199h.037c.834 0 1.542.292 2.125.875.584.584.875 1.292.875 2.125 0 .675-.198 1.274-.593 1.799a3.032 3.032 0 0 1-1.532 1.088.527.527 0 0 0-.267.187.465.465 0 0 0-.108.287c0 .167.06.3.176.4.117.1.254.13.412.089a3.912 3.912 0 0 0 2.1-1.426 3.882 3.882 0 0 0 .812-2.424c0-1.116-.387-2.063-1.162-2.838-.775-.775-1.72-1.162-2.838-1.162h-.037l.2-.201a.474.474 0 0 0 .138-.35.473.473 0 0 0-.488-.486zm-2.563 2.344a.462.462 0 0 0-.337.156c-.292.358-.516.75-.674 1.18-.159.429-.239.882-.239 1.357 0 .917.271 1.728.813 2.432a3.922 3.922 0 0 0 2.1 1.418.442.442 0 0 0 .414-.082.479.479 0 0 0 .173-.393.532.532 0 0 0-.375-.488 2.946 2.946 0 0 1-1.53-1.08 2.939 2.939 0 0 1-.595-1.807c0-.341.054-.666.163-.974.108-.309.262-.594.462-.852a.565.565 0 0 0 .131-.375.477.477 0 0 0-.142-.336.48.48 0 0 0-.364-.156z"},Vi=new Set(["P+","PT","P"]);function $t(e){return[e.name,e.crop].filter(Boolean).join(" — ")}function wt(e,i){var a,s;const t=Object.fromEntries(ve.map(c=>[c.id,c])),o=$s[e.model]||e.model,n=((a=(e.parcelIds||[]).map(c=>i.find(p=>p.id===c)).filter(Boolean).find(c=>c.ville))==null?void 0:a.ville)||((s=t[e.orgId])==null?void 0:s.ville)||"";return[o,e.serial,n].filter(Boolean).join(" — ")}const $s={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function _n(e,i){const t=Object.fromEntries(ve.map(n=>[n.id,n])),o=i.filter(n=>n.event?(Array.isArray(n.event)?n.event:[n.event]).filter(c=>c!=="cuillère bloquée"||Vi.has(n.model)).length>0:!1);return o.length?`<div class="m-w-list">${o.map(n=>{var d;const a=e.find(b=>(n.parcelIds||[]).includes(b.id)),s=(a==null?void 0:a.ville)||((d=t[n.orgId])==null?void 0:d.ville)||"",p=(Array.isArray(n.event)?n.event:[n.event]).filter(b=>b!=="cuillère bloquée"||Vi.has(n.model)).map(b=>{const $=zn[b]||"";return`<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:#ff3b30;border-radius:6px;flex-shrink:0" title="${b}"><svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="${$}"/></svg></span>`}).join(""),r=$s[n.model]||n.model;return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${n.id}">
      <div style="flex:1;min-width:0">
        <div class="m-w-row-name">${r}</div>
        <div style="font-size:12px;color:#636366;margin-top:1px">${n.model} — ${n.serial}</div>
        ${s?`<div style="font-size:11px;color:#8e8e93;margin-top:1px">${s}</div>`:""}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;width:61px;justify-content:flex-end">${p}</div>
        <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const ws={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},Hn={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Bn(e){const i=e.id,t=ws[e.crop]||Hn,o=i%t.stages.length,n=(i*2+5)%18+4,a=new Date("2026-04-18");a.setDate(a.getDate()+n);const s=a.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[o],nextStage:t.nextStages[o],variety:t.varieties[i%t.varieties.length],nextDateStr:s,daysToNext:n}}function Fn(e){const i=e.filter(n=>n.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const n of i)t[n.crop]||(t[n.crop]=[]),t[n.crop].push(n);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([n,a])=>{const s=a.map(c=>{const p=!!ws[c.crop],r=p?Bn(c):null,d=p&&r.variety!=="—"?r.variety:"",b=p?r.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${c.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${c.name}</div>
          ${d?`<div class="m-w-row-sub">${d}</div>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${b}</div>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>`}).join("");return`<details class="m-crop-group">
      <summary class="m-crop-summary">
        <div class="m-crop-summary-left">
          <div class="m-crop-summary-name">${n}</div>
          <div class="m-crop-summary-count">${a.length} parcelle${a.length>1?"s":""}</div>
        </div>
        <i class="bi bi-chevron-right m-crop-chevron"></i>
      </summary>
      <div class="m-crop-plots">${s}</div>
    </details>`}).join("")}`}const Ss="weenat-m-notes";function Ze(){try{return JSON.parse(localStorage.getItem(Ss))||[]}catch{return[]}}function ti(e){localStorage.setItem(Ss,JSON.stringify(e))}function Ji(e){const i=Ze(),t=h=>{const[w,E,S]=h.split("-");return`${S}/${E}/${w}`},o=h=>h.length>70?h.slice(0,70)+"…":h,n=(h,w)=>{const E=h.text.length>70,S=(h.imageIds||[]).length,M=S>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${S} photo${S>1?"s":""}</span>`:"",y=h.linkedType?`<span style="font-size:10px;background:${h.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${h.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${h.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${h.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${w}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${E||S>0||h.linkedType?"pointer":"default"}">
        <button class="m-note-del m-del-btn" data-idx="${w}" style="position:absolute;top:8px;right:8px">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span>${t(h.date)}${h.time?" · "+h.time:""}</span>
          ${h.auteur?`<span style="color:#636366;font-weight:500">${h.auteur}</span>`:""}
          ${h.role?`<span style="font-size:10px;background:${h.role==="conseiller"?"#eef4ff":"#f2f2f7"};color:${h.role==="conseiller"?"#3a7bd5":"#636366"};border-radius:4px;padding:1px 5px;font-weight:500">${h.role==="conseiller"?"Conseiller":"Membre"}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${o(h.text)}</div>
        ${y||M?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${y}${M}</div>`:""}
      </div>`},a=i.slice(0,5),s=a.length?a.map((h,w)=>n(h,w)).join(""):"",c=new Date,p=c.toISOString().slice(0,10),r=`${String(c.getHours()).padStart(2,"0")}:${String(c.getMinutes()).padStart(2,"0")}`,d=ve.find(h=>h.id===(e==="admin"?100:1)),b=d?`${d.prenomProprietaire} ${d.nomProprietaire}`:"",$=d==null?void 0:d.id,l=e==="adherent"?le.filter(h=>h.orgId===$):le,u=e==="adherent"?ne.filter(h=>h.parcelIds.some(w=>l.some(E=>E.id===w))):ne,f=l.map(h=>`<option value="p-${h.id}">${$t(h)}</option>`).join(""),m=u.map(h=>`<option value="s-${h.id}">${wt(h,l)}</option>`).join("");return`
    ${s?`<div id="notes-list" style="margin-bottom:12px">${s}</div>`:""}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:8px">
      <select id="notes-link" class="m-sheet-input">
        <option value="">— Sans lien —</option>
        <optgroup label="Parcelles">${f}</optgroup>
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
    <input type="hidden" id="notes-auteur" value="${b}">
    <button id="notes-add" class="m-btn m-btn--primary" style="margin-bottom:6px">Ajouter la note</button>
    <button id="notes-view" class="m-btn m-btn--secondary">Voir les notes${i.length?` (${i.length})`:""}</button>`}function On(e){const i=le.map(n=>n.orgId).filter((n,a,s)=>s.indexOf(n)===a&&n!==100).length,t=ne.length,o=le.length;return`
    <div class="m-reseau-name">${He.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${o}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${He.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${He.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${He.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${He.siege.adresse}, ${He.siege.codePostal} ${He.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function Rn(){return`
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
    </a>`}const Wi=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Nn(){var r;const e=document.getElementById("phone-screen");(r=document.querySelector(".m-sheet-overlay"))==null||r.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),o=i.querySelector("#chat-input"),n=i.querySelector("#chat-send"),a=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",a),i.addEventListener("click",d=>{d.target===i&&a()});function s(d,b){const $=document.createElement("div");$.className=`m-chat-msg m-chat-msg--${b}`,$.innerHTML=`<div class="m-chat-bubble">${d}</div>`,t.appendChild($),t.scrollTop=t.scrollHeight}function c(){const d=document.createElement("div");return d.className="m-chat-msg m-chat-msg--bot m-chat-typing",d.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(d),t.scrollTop=t.scrollHeight,d}function p(){const d=o.value.trim();if(!d)return;s(d,"user"),o.value="",n.disabled=!0;const b=c();setTimeout(()=>{b.remove();const $=Wi[Math.floor(Math.random()*Wi.length)];s($,"bot"),n.disabled=!1,o.focus()},1200+Math.random()*800)}n.addEventListener("click",p),o.addEventListener("keydown",d=>{d.key==="Enter"&&p()}),setTimeout(()=>o.focus(),350)}function Vn(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const o=bs[i]||1,n=o===100?le:le.filter(v=>v.orgId===o),a=new Set(n.map(v=>v.id)),s=ne.filter(v=>v.parcelIds.some(k=>a.has(k)));let c=zi(),p=null,r=null;function d(){return i!=="admin"?n:p===null?le:le.filter(v=>v.orgId===p)}function b(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${ve.filter(k=>k.id!==100).sort((k,C)=>k.name.localeCompare(C.name)).map(k=>`<option value="${k.id}">${k.name}</option>`).join("")}
    </select>`}const $=ht(),l=new Set(["mon_reseau","support"]),u=new Set($.collapsed??xe.map(v=>v.id).filter(v=>!l.has(v)));function f(){Pi({catalog:xe.map(v=>({id:v.id,active:v.active})),collapsed:[...u],mesuresList:Be,cumulsList:De})}function m(){return`
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
      </div>`}function h(){return`
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
      </div>`}function w(){const v=window.L;v&&setTimeout(()=>{const k=t.querySelector("#radar-map");if(!k||r)return;const C=n[0]?[n[0].lat,n[0].lng]:[47.5,-1.5];r=v.map(k,{zoomControl:!0,attributionControl:!1,tap:!1}).setView(C,7),v.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:14}).addTo(r);const x=t.querySelector("#radar-slider"),L=t.querySelector("#radar-time-lbl"),D=t.querySelector("#radar-play-btn"),P=t.querySelector("#radar-loading");let z=[],F=0,O=0,Y=null,te=!1,be=null;function Ae($e){if(!z.length)return;Y&&r.removeLayer(Y);const Me=z[$e];Y=v.tileLayer(`https://tilecache.rainviewer.com${Me.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:.65,zIndex:10}).addTo(r);const qe=new Date(Me.time*1e3);L.textContent=qe.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),L.style.color=$e>=F?"#007aff":"#8e8e93",x.value=$e}x.addEventListener("input",()=>{O=+x.value,Ae(O)}),D.addEventListener("click",()=>{te=!te,D.innerHTML=te?'<i class="bi bi-pause-fill"></i>':'<i class="bi bi-play-fill"></i>',te?be=setInterval(()=>{O=(O+1)%z.length,Ae(O)},500):clearInterval(be)}),fetch("https://api.rainviewer.com/public/weather-maps.json").then($e=>$e.json()).then($e=>{var Ye,Ke;P==null||P.remove();const Me=((Ye=$e.radar)==null?void 0:Ye.past)||[],qe=((Ke=$e.radar)==null?void 0:Ke.nowcast)||[];z=[...Me,...qe],F=Me.length,z.length&&(x.max=z.length-1,O=Math.max(0,F-1),Ae(O))}).catch(()=>{P&&(P.textContent="Radar indisponible")})},50)}function E(v,k){const C=v.fixed?"":`<button class="m-widget-menu" data-widget="${v.id}" type="button">•••</button>`,x=u.has(v.id);return`
      <div class="m-widget${x?" m-widget--collapsed":""}" data-widget="${v.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${v.id}">
          <div class="m-widget-icon-wrap" style="background:${v.color}20;color:${v.color}">
            <i class="bi ${v.icon}"></i>
          </div>
          <span class="m-widget-title">${v.title}</span>
          ${v.info?`<button class="m-widget-info" data-widget="${v.id}" type="button"><i class="bi bi-info-circle"></i></button>`:""}
          <i class="bi ${x?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${v.fixed?"0":"8px"}"></i>
          ${C}
        </div>
        <div class="m-widget-bd" style="${x?"display:none":""}">${k}</div>
      </div>`}function S(){r==null||r.remove(),r=null,c=zi();const v=new Set(["previsions","support"]),k=xe.filter(x=>x.active&&!x.fixed&&(i!=="new"||v.has(x.id))),C=xe.filter(x=>x.active&&x.fixed&&(i!=="new"||v.has(x.id)));t.innerHTML=`
      ${i==="new"?m():'<button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>'}
      ${[...k,...C].map(x=>{let L="";return x.id==="bilan_hydrique"?L=b()+ct(d()):x.id==="previsions"?L=An(n,s,c,i):x.id==="cumuls"?L=Ni(n,s):x.id==="temps_reel"?L=Bi(n,s):x.id==="traitements"?L=jn(n):x.id==="evenements"?L=_n(n,s):x.id==="cultures"?L=Fn(n):x.id==="notes"?L=Ji(i):x.id==="radar_pluie"?L=h():x.id==="mon_reseau"?L=On(i):x.id==="support"&&(L=Rn()),E(x,L)}).join("")}
      <div style="height:24px"></div>`,I(),u.has("radar_pluie")||w()}const M='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function y(v,k){const C=v[k],x=`${C.dayLabel.charAt(0).toUpperCase()+C.dayLabel.slice(1)} · ${C.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${M}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${k===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${C.icon}" style="color:${C.color};font-size:22px"></i><span class="m-d-name">${x}</span></div>
          <button class="m-day-nav" id="next-day" ${k>=v.length-1?"disabled":""}>›</button>
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
            ${C.hours.map((L,D)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${D<C.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${L.label}</span>
                <i class="bi ${L.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${L.pluie>0?`${L.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${L.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${L.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${L.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function g(v,k,C){var x,L;v.querySelector(".m-detail-back").addEventListener("click",me),(x=v.querySelector("#prev-day"))==null||x.addEventListener("click",()=>{v.innerHTML=y(k,C-1),g(v,k,C-1)}),(L=v.querySelector("#next-day"))==null||L.addEventListener("click",()=>{v.innerHTML=y(k,C+1),g(v,k,C+1)})}function A(v,k){const C=ye(y(v,k));g(C,v,k)}function I(){var Ae,$e,Me,qe,Ye,Ke,kt;(Ae=e.querySelector(".m-navbar-action"))==null||Ae.addEventListener("click",j),($e=t.querySelector("#dash-add-widget-btn"))==null||$e.addEventListener("click",T),(Me=t.querySelector('[data-action="add-parcel"]'))==null||Me.addEventListener("click",()=>hn(()=>S())),(qe=t.querySelector('[data-action="add-sensor"]'))==null||qe.addEventListener("click",()=>gn(()=>S())),t.querySelectorAll(".m-widget-info").forEach(N=>{N.addEventListener("click",Q=>{Q.stopPropagation();const X=xe.find(se=>se.id===N.dataset.widget);X&&yn(X.title,X.info,X.gif)})}),t.querySelectorAll(".m-widget-hd--toggle").forEach(N=>{N.addEventListener("click",Q=>{if(Q.target.closest(".m-widget-menu")||Q.target.closest(".m-widget-info"))return;const X=N.dataset.collapse;u.has(X)?u.delete(X):u.add(X),f(),S()})}),(Ye=t.querySelector("#trait-btn-saisir"))==null||Ye.addEventListener("click",()=>{qn(n,Fe)}),(Ke=t.querySelector("#trait-btn-voir"))==null||Ke.addEventListener("click",()=>{Pn(n,i,Fe)}),t.querySelectorAll(".m-trait-card").forEach(N=>{N.addEventListener("click",()=>{const Q=le.find(X=>X.id===+N.dataset.plotId);if(Q){const X=ne.filter(se=>se.parcelIds.includes(Q.id)).map(se=>se.id);ge(()=>Promise.resolve().then(()=>ii),void 0).then(se=>se.initParcelDetail(Q,X,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(N=>{N.addEventListener("click",()=>{const Q=s.find(X=>X.id===+N.dataset.sensorId);Q&&ge(()=>Promise.resolve().then(()=>Bt),void 0).then(X=>X.initSensorDetail(Q,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(N=>{N.addEventListener("click",()=>{const Q=le.find(X=>X.id===+N.dataset.plotId);if(Q){const X=ne.filter(se=>se.parcelIds.includes(Q.id)).map(se=>se.id);ge(()=>Promise.resolve().then(()=>ii),void 0).then(se=>se.initParcelDetail(Q,X,"params","Tableau de bord"))}})});function v(){t.querySelectorAll(".m-bh-plot-link").forEach(N=>{N.addEventListener("click",()=>{const Q=le.find(X=>X.id===+N.dataset.plotId);if(Q){const X=ne.filter(se=>se.parcelIds.includes(Q.id)).map(se=>se.id);ge(()=>Promise.resolve().then(()=>ii),void 0).then(se=>se.initParcelDetail(Q,X,"widgets","Tableau de bord"))}})})}function k(){var N,Q,X;(N=t.querySelector("#bh-btn-calendar"))==null||N.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(se=>se.openCalendar(n,""))}),(Q=t.querySelector("#bh-btn-irrigation"))==null||Q.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(se=>se.openIrrigationSaisie(n,Fe))}),(X=t.querySelector("#bh-btn-strategie"))==null||X.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(se=>se.openIrrigationStrategie(n,Fe))})}function C(){const N=t.querySelector("#bh-expand");N&&N.addEventListener("click",()=>{const Q=N.dataset.expanded==="true",X=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');X&&(X.innerHTML=b()+ct(d(),!Q),v(),k(),C(),i==="admin"&&x())})}function x(){const N=t.querySelector("#bh-org-select");N&&(N.value=p===null?"all":String(p),N.addEventListener("change",()=>{p=N.value==="all"?null:+N.value;const Q=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');Q&&(Q.innerHTML=b()+ct(d()),v(),k(),C(),x())}))}v(),k(),C(),i==="admin"&&x();function L(){const N=t.querySelector('[data-widget="cumuls"] .m-widget-bd');N&&(N.innerHTML=Ni(n,s),D())}function D(){var R,V,G,B;const N=()=>{var J;const _=(J=t.querySelector("#cumuls-metric"))==null?void 0:J.value,H=t.querySelector("#cumuls-thresholds");H&&(_==="hf"?H.innerHTML=`
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
            </div>`:H.innerHTML="")},Q=()=>{var W;const _=t.querySelector("#cumuls-metric"),H=(W=t.querySelector("#cumuls-subject"))==null?void 0:W.value;if(!_)return;const J=ei(H);_.innerHTML='<option value="">— Métrique —</option>'+J.map(ae=>`<option value="${ae.id}">${ae.label}</option>`).join(""),_.disabled=!H||!J.length,N(),X()},X=()=>{var ue,ie,oe;const _=t.querySelector("#cumuls-create"),H=t.querySelector("#cumuls-date-err"),J=(ue=t.querySelector("#cumuls-subject"))==null?void 0:ue.value,W=(ie=t.querySelector("#cumuls-from"))==null?void 0:ie.value,ae=(oe=t.querySelector("#cumuls-metric"))==null?void 0:oe.value,ee=W?(Date.now()-new Date(W))/864e5>365:!1;H&&(H.style.display=ee?"":"none"),_&&(_.disabled=!J||!W||!ae||ee)};(R=t.querySelector("#cumuls-subject"))==null||R.addEventListener("change",()=>{Q(),X()}),(V=t.querySelector("#cumuls-from"))==null||V.addEventListener("change",X),(G=t.querySelector("#cumuls-metric"))==null||G.addEventListener("change",()=>{N(),X()}),(B=t.querySelector("#cumuls-create"))==null||B.addEventListener("click",()=>{var ie,oe,pe,he,we,fe;const _=t.querySelector("#cumuls-subject"),H=_==null?void 0:_.value,J=(ie=t.querySelector("#cumuls-from"))==null?void 0:ie.value,W=(oe=t.querySelector("#cumuls-metric"))==null?void 0:oe.value;if(!H||!J||!W)return;const ae=Ne.find(K=>K.id===W),ee=Oi[W]||{icon:"bi-bar-chart-fill",color:"#636366"},ue=W==="hf"?{cold:+(((pe=t.querySelector("#cumuls-th-cold"))==null?void 0:pe.value)??7.2)}:W==="dj"?{low:+(((he=t.querySelector("#cumuls-th-low"))==null?void 0:he.value)??0),high:+(((we=t.querySelector("#cumuls-th-high"))==null?void 0:we.value)??18)}:null;De.push({metricId:W,metricLabel:(ae==null?void 0:ae.label)||W,unit:(ae==null?void 0:ae.unit)||"",icon:ee.icon,color:ee.color,subjectKey:H,subjectLabel:(((fe=_.options[_.selectedIndex])==null?void 0:fe.text)||H).trim(),fromDate:J,value:String(Ri(H,J,W)??"—"),thresholds:ue}),f(),L()}),t.querySelectorAll(".m-cumuls-del").forEach(_=>{_.addEventListener("click",()=>{De.splice(+_.dataset.cidx,1),f(),L()})}),t.querySelectorAll(".m-cumuls-edit").forEach(_=>{_.addEventListener("click",()=>Ie(+_.dataset.cidx))});function se(_,H={}){return _==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${H.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:_==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${H.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${H.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function Ie(_){const H=De[_];if(!H)return;const J=s.filter(oe=>oe.parcelIds.length>0&&ys.has(oe.model)),W=n.map(oe=>`<option value="p-${oe.id}"${H.subjectKey===`p-${oe.id}`?" selected":""}>${$t(oe)}</option>`).join(""),ae=J.map(oe=>`<option value="s-${oe.id}"${H.subjectKey===`s-${oe.id}`?" selected":""}>${wt(oe,n)}</option>`).join(""),ue=ei(H.subjectKey).map(oe=>`<option value="${oe.id}"${H.metricId===oe.id?" selected":""}>${oe.label}</option>`).join(""),ie=document.createElement("div");ie.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",ie.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${W}</optgroup>
            ${ae?`<optgroup label="Capteurs">${ae}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${ue}
          </select>
          <div id="cedit-thresholds">${se(H.metricId,H.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${H.fromDate}">
          </div>`,ie.querySelector("#cedit-subject").addEventListener("change",()=>{const oe=ie.querySelector("#cedit-subject").value,pe=ie.querySelector("#cedit-metric"),he=ei(oe);pe.innerHTML='<option value="">— Métrique —</option>'+he.map(we=>`<option value="${we.id}">${we.label}</option>`).join(""),ie.querySelector("#cedit-thresholds").innerHTML=""}),ie.querySelector("#cedit-metric").addEventListener("change",()=>{ie.querySelector("#cedit-thresholds").innerHTML=se(ie.querySelector("#cedit-metric").value)}),Oe({title:"Modifier le cumul",body:ie,doneLabel:"Enregistrer",onDone:()=>{var Le,Te,rt,nt;const oe=ie.querySelector("#cedit-subject").value||H.subjectKey,pe=ie.querySelector("#cedit-metric").value||H.metricId,he=ie.querySelector("#cedit-from").value||H.fromDate;if(!oe||!pe||!he)return;if((Date.now()-new Date(he))/864e5>365){Fe("Date trop ancienne (max 365 jours)");return}const fe=Ne.find(Lt=>Lt.id===pe),K=Oi[pe]||{icon:"bi-bar-chart-fill",color:"#636366"},Z=ie.querySelector("#cedit-subject"),re=pe==="hf"?{cold:+(((Le=ie.querySelector("#cedit-th-cold"))==null?void 0:Le.value)??7.2)}:pe==="dj"?{low:+(((Te=ie.querySelector("#cedit-th-low"))==null?void 0:Te.value)??0),high:+(((rt=ie.querySelector("#cedit-th-high"))==null?void 0:rt.value)??18)}:null;De[_]={...H,metricId:pe,metricLabel:(fe==null?void 0:fe.label)||pe,unit:(fe==null?void 0:fe.unit)||"",icon:K.icon,color:K.color,subjectKey:oe,subjectLabel:(((nt=Z.options[Z.selectedIndex])==null?void 0:nt.text)||oe).trim(),fromDate:he,value:String(Ri(oe,he,pe)??"—"),thresholds:re},f(),L()}})}}D(),(kt=t.querySelector("#open-chat-btn"))==null||kt.addEventListener("click",Nn);function P(){const N=t.querySelector('[data-widget="notes"] .m-widget-bd');N&&(N.innerHTML=Ji(i),F())}let z=[];function F(){var R,V;z=[];const N=t.querySelector("#notes-img-input"),Q=t.querySelector("#notes-img-btn"),X=t.querySelector("#notes-previews"),se=t.querySelector("#notes-img-error");N&&Q&&X&&window.setupImgUpload&&window.setupImgUpload(N,Q,X,se,z),(R=t.querySelector("#notes-add"))==null||R.addEventListener("click",async()=>{var oe,pe,he,we,fe,K;const G=(oe=t.querySelector("#notes-input"))==null?void 0:oe.value.trim(),B=((pe=t.querySelector("#notes-date"))==null?void 0:pe.value)||new Date().toISOString().slice(0,10),_=((he=t.querySelector("#notes-time"))==null?void 0:he.value)||"",H=((we=t.querySelector("#notes-auteur"))==null?void 0:we.value)||"";if(!G)return;const J=((fe=t.querySelector("#notes-link"))==null?void 0:fe.value)||"";let W=null,ae=null,ee="";if(J.startsWith("p-"))W="parcel",ae=+J.slice(2),ee=((K=le.find(Z=>Z.id===ae))==null?void 0:K.name)||"";else if(J.startsWith("s-")){W="sensor",ae=+J.slice(2);const Z=ne.find(re=>re.id===ae);ee=Z?Z.serial:""}const ue=[];if(z.length&&window.ImageStore)for(const Z of z){const re=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(re,Z),ue.push(re)}const ie=Ze();ie.unshift({date:B,time:_,text:G,auteur:H,role:"membre",imageIds:ue,linkedType:W,linkedId:ae,linkedName:ee}),ti(ie),t.querySelector("#notes-input").value="",P()}),(V=t.querySelector("#notes-view"))==null||V.addEventListener("click",()=>{const G=J=>{const[W,ae,ee]=J.split("-");return`${ee}/${ae}/${W}`},B=J=>J.length>70?J.slice(0,70)+"…":J,_=document.createElement("div");function H(){const J=Ze();if(!J.length){_.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}_.innerHTML=J.map((W,ae)=>{const ee=(W.imageIds||[]).length,ue=W.linkedType?`<span style="font-size:10px;background:${W.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${W.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${W.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${W.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${ae}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del m-del-btn" data-idx="${ae}" style="position:absolute;top:8px;right:8px">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${G(W.date)}${W.time?" · "+W.time:""}</span>
                  ${W.auteur?`<span style="color:#636366;font-weight:500">${W.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${B(W.text)}</div>
                ${ue||ee>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${ue}${ee>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${ee} photo${ee>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),_.querySelectorAll(".m-note-del").forEach(W=>{W.addEventListener("click",async ae=>{var oe;ae.stopPropagation();const ee=Ze(),ue=+W.dataset.idx,ie=ee[ue];(oe=ie==null?void 0:ie.imageIds)!=null&&oe.length&&window.ImageStore&&await window.ImageStore.remove(ie.imageIds),ee.splice(ue,1),ti(ee),H(),P()})}),_.querySelectorAll(".m-note-card").forEach(W=>{W.addEventListener("click",async()=>{const ee=Ze()[+W.dataset.idx];if(!ee)return;const ue=ee.linkedType?`<span style="font-size:11px;background:${ee.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${ee.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${ee.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${ee.linkedName||""}</span>`:"",ie=document.createElement("div");if(ie.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${G(ee.date)}${ee.time?" · "+ee.time:""}</span>
                  ${ee.auteur?`<span style="color:#636366;font-weight:500">${ee.auteur}</span>`:""}
                  ${ue}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${ee.text}</div>
                ${(ee.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Oe({title:"Note",body:ie,doneLabel:"Fermer",onDone:()=>{}}),(ee.imageIds||[]).length&&window.ImageStore){const oe=ie.querySelector("#note-detail-photos");for(const pe of ee.imageIds){const he=await window.ImageStore.get(pe);if(!he)continue;const we=document.createElement("div");we.className="jrn-img-thumb-wrap";const fe=document.createElement("img");fe.className="jrn-img-thumb",fe.src=he,fe.alt="",fe.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(he)}),we.appendChild(fe),oe.appendChild(we)}}})})}H(),Oe({title:"Notes",body:_,doneLabel:"Fermer",onDone:()=>{}})});const Ie=G=>{const[B,_,H]=G.split("-");return`${H}/${_}/${B}`};t.querySelectorAll("#notes-list .m-note-del").forEach(G=>{G.addEventListener("click",async B=>{var W;B.stopPropagation();const _=Ze(),H=+G.dataset.idx,J=_[H];(W=J==null?void 0:J.imageIds)!=null&&W.length&&window.ImageStore&&await window.ImageStore.remove(J.imageIds),_.splice(H,1),ti(_),P()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(G=>{G.addEventListener("click",async()=>{const _=Ze()[+G.dataset.idx];if(!_)return;const H=_.linkedType?`<span style="font-size:11px;background:${_.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${_.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${_.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${_.linkedName||""}</span>`:"",J=document.createElement("div");if(J.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${Ie(_.date)}${_.time?" · "+_.time:""}</span>
              ${_.auteur?`<span style="color:#636366;font-weight:500">${_.auteur}</span>`:""}
              ${H}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${_.text}</div>
            ${(_.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Oe({title:"Note",body:J,doneLabel:"Fermer",onDone:()=>{}}),(_.imageIds||[]).length&&window.ImageStore){const W=J.querySelector("#note-detail-photos");for(const ae of _.imageIds){const ee=await window.ImageStore.get(ae);if(!ee)continue;const ue=document.createElement("div");ue.className="jrn-img-thumb-wrap";const ie=document.createElement("img");ie.className="jrn-img-thumb",ie.src=ee,ie.alt="",ie.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(ee)}),ue.appendChild(ie),W.appendChild(ue)}}})})}F();function O(){t.querySelectorAll(".m-tr-chart-wrap").forEach(N=>{const Q=N.querySelector(".m-tr-cursor"),X=N.querySelector(".m-tr-tooltip");if(!X)return;const se=JSON.parse(N.dataset.series||"[]"),Ie=N.dataset.unit||"",R=se.length,V=26,G=270;N.addEventListener("pointermove",B=>{const _=N.getBoundingClientRect(),H=Math.max(0,Math.min(((B.clientX-_.left)*(V+G)/_.width-V)/G,1)),J=se[Math.round(H*(R-1))]??null;if(Q){const W=V+Math.round(H*G);Q.setAttribute("x1",W),Q.setAttribute("x2",W),Q.setAttribute("opacity","1")}X.style.display="",X.style.left=`${Math.max(0,Math.min(B.clientX-_.left-24,_.width-60))}px`,X.textContent=J!==null?`${(+J).toFixed(1)} ${Ie}`:"—"}),N.addEventListener("pointerleave",()=>{X.style.display="none",Q==null||Q.setAttribute("opacity","0")})})}function Y(){const N=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');N&&(N.innerHTML=Bi(n,s),te())}function te(){var se,Ie,R,V,G;const N=()=>{var _,H;const B=t.querySelector("#msr-create");B&&(B.disabled=!((_=t.querySelector("#msr-subject"))!=null&&_.value)||!((H=t.querySelector("#msr-metric"))!=null&&H.value)||Be.length>=Pt)},Q=()=>{var J;const B=t.querySelector("#msr-metric"),_=(J=t.querySelector("#msr-subject"))==null?void 0:J.value;if(!B)return;const H=wn(_,s);B.innerHTML='<option value="">— Métrique —</option>'+H.map(W=>`<option value="${W}">${di[W]}</option>`).join(""),B.disabled=!_||!H.length,N()},X=()=>{var H;const B=t.querySelector("#msr-step"),_=((H=t.querySelector("#msr-period"))==null?void 0:H.value)||"7d";B&&(B.innerHTML=gs(_).map(J=>`<option value="${J.id}">${J.label}</option>`).join(""),N())};(se=t.querySelector("#msr-subject"))==null||se.addEventListener("change",()=>{Q(),N()}),(Ie=t.querySelector("#msr-period"))==null||Ie.addEventListener("change",()=>{X(),N()}),(R=t.querySelector("#msr-metric"))==null||R.addEventListener("change",N),(V=t.querySelector("#msr-step"))==null||V.addEventListener("change",N),(G=t.querySelector("#msr-create"))==null||G.addEventListener("click",()=>{var ie,oe,pe;const B=t.querySelector("#msr-subject"),_=t.querySelector("#msr-metric"),H=t.querySelector("#msr-period"),J=t.querySelector("#msr-step"),W=B==null?void 0:B.value,ae=_==null?void 0:_.value,ee=H==null?void 0:H.value,ue=J==null?void 0:J.value;!W||!ae||!ee||!ue||(Be.push({subjectKey:W,subjectLabel:(((ie=B.options[B.selectedIndex])==null?void 0:ie.text)||W).trim(),metricId:ae,metricLabel:di[ae]||ae,unit:xn[ae]||"",period:ee,periodLabel:(((oe=H.options[H.selectedIndex])==null?void 0:oe.text)||ee).trim(),step:ue,stepLabel:(((pe=J.options[J.selectedIndex])==null?void 0:pe.text)||ue).trim(),color:hs[ae]||_i[Be.length%_i.length]}),f(),Y())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(B=>{B.addEventListener("click",()=>{Be.splice(+B.dataset.idx,1),f(),Y()})}),t.querySelectorAll(".m-wf-view-data[data-sensor-id]").forEach(B=>{B.addEventListener("click",()=>{const _=+B.dataset.sensorId,H=ne.find(J=>J.id===_);H&&ge(()=>Promise.resolve().then(()=>Bt),void 0).then(J=>J.initSensorDetail(H,"donnees",i))})}),O()}te(),t.querySelectorAll(".m-prev-card").forEach(N=>{N.addEventListener("click",()=>{A(c,+N.dataset.day)})});const be=t.querySelector(".m-prev-expand-btn");be&&be.addEventListener("click",()=>A(c,3)),t.querySelectorAll(".m-widget-menu").forEach(N=>{N.addEventListener("click",Q=>{var G;Q.stopPropagation();const X=xe.find(B=>B.id===N.dataset.widget);if(!X)return;const se=document.createElement("div"),Ie=X.id==="bilan_hydrique",R=ht().sensorlessEnabled??!0;se.innerHTML=`
          <div class="m-sheet-links">
            ${Ie?`<a class="m-sheet-link" id="menu-sensorless">${R?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const V=Oe({title:X.title,body:se,doneLabel:"Fermer",onDone:()=>{}});(G=se.querySelector("#menu-sensorless"))==null||G.addEventListener("click",()=>{Pi({sensorlessEnabled:!R}),V.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{V.remove();const B=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');B&&(B.innerHTML=b()+ct(d()),v(),k(),C(),i==="admin"&&x())},280)}),se.querySelector("#menu-move").addEventListener("click",()=>{V.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{V.remove(),q()},280)}),se.querySelector("#menu-remove").addEventListener("click",()=>{X.active=!1,V.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{V.remove(),f(),S()},280),Fe("Widget retiré")})})})}function q(){const v=document.createElement("div"),k=()=>xe.filter(x=>x.active&&!x.fixed),C=()=>{const x=k();v.innerHTML=x.map((L,D)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${L.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${D}" data-dir="-1" ${D===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${D}" data-dir="1" ${D===x.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),v.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(L=>{L.addEventListener("click",()=>{const D=k(),P=+L.dataset.i,z=P+ +L.dataset.dir,F=xe.indexOf(D[P]),O=xe.indexOf(D[z]);[xe[F],xe[O]]=[xe[O],xe[F]],f(),C(),S()})})};C(),Oe({title:"Réorganiser les widgets",body:v,doneLabel:"Fermer",onDone:()=>{}})}function j(){const v=i==="admin",k=ye(`
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
          ${v?`
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
      </div>`);k.querySelector(".m-detail-back").addEventListener("click",me),k.querySelectorAll(".m-add-item").forEach(C=>{C.addEventListener("click",()=>{const x=C.dataset.action;x==="irrigation"?(me(),ge(()=>Promise.resolve().then(()=>et),void 0).then(L=>L.openIrrigationSaisie(n,Fe))):x==="strategie-irrigation"?(me(),ge(()=>Promise.resolve().then(()=>et),void 0).then(L=>L.openIrrigationStrategie(n,Fe))):Fe("Fonctionnalité à venir")})})}function T(){const v=document.createElement("div"),k=()=>{const C=xe.filter(x=>!x.fixed);v.innerHTML=C.map(x=>`
        <div class="m-catalog-row${x.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${x.color}20;color:${x.color}"><i class="bi ${x.icon}"></i></div>
          <span class="m-catalog-title">${x.title}</span>
          ${x.available?`<button class="m-catalog-toggle${x.active?" m-catalog-toggle--on":""}" data-cid="${x.id}" type="button">
                <i class="bi ${x.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),v.querySelectorAll("[data-cid]").forEach(x=>{x.addEventListener("click",()=>{const L=xe.find(D=>D.id===x.dataset.cid);L&&(L.active=!L.active,f(),k(),S())})})};k(),Oe({title:"Widgets disponibles",body:v,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",v=>{if(v.key!=="weenat_proto_store")return;os(le);const k=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');k&&(k.innerHTML=b()+ct(d()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=j,S()}const zt=new URLSearchParams(window.location.search).get("role")==="adherent"?"adherent":"admin",Se={djMin:0,djMax:18,hfSeuil:7.2},Jn={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"},irrigation:{metricLabel:"Cumul d'irrigation",unit:"mm",icon:"bi-moisture",color:"#FF8C00"}},_t="weenat-m-dash",Gi=4,Wn=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermomètre-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Capteur d'humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],ui={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},Es=e=>`dash-widgets-parcel-${e}`;function Gn(e,i){const t=i.map(a=>ne.find(s=>s.id===a)).filter(Boolean),o=new Set(t.map(a=>a.model)),n=["previsions-5j","cumuls","irrigations"];return Object.entries(ui).forEach(([a,s])=>{s.some(c=>o.has(c))&&n.push(a)}),n}function Ht(e,i){try{const t=JSON.parse(localStorage.getItem(Es(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return Gn(e,i)}function ks(e,i){localStorage.setItem(Es(e),JSON.stringify(i))}function Un(e,i,t){const o=new Set(Ht(e,i)),n=Wn.map((s,c)=>`
    <div class="m-list-section-header"${c>0?' style="margin-top:20px"':""}>${s.title}</div>
    ${s.items.map(p=>{const r=o.has(p.id);return`
        <div class="m-wcat-item">
          <span>${p.label}</span>
          ${r?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${p.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`}).join("")}`).join(""),a=ye(`
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
    </div>`);a.querySelector(".m-detail-back").addEventListener("click",me),a.querySelectorAll(".m-wcat-add").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.wid,p=Ht(e,i);p.includes(c)||(p.push(c),ks(e.id,p)),me(),t==null||t()})})}const Je={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Capteur d'humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1},irrigation:{label:"Irrigation",unit:"mm",color:"#FF8C00",cumul:!0,cumulsType:"irrigation"}},Yn={pluie:14,temperature:14,humidite:14,vent:14,etp:14,temp_rosee:14,rayonnement:14,pothydr:7,irrigation:7},gt={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function Nt(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(o,n)=>{const a=n/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,s))})}const Vt={"365d":52,"30d":60,"7d":84,j7j7:84,hier:48,"1d":24,custom:60},St={"365d":525600,"30d":43200,"7d":10080,j7j7:10080,hier:1440,"1d":1440,custom:10080};function Ls(e,i,t=0,o=0){const n=Vt[i]||60,a=St[i]||10080,s=Date.now(),c=s-a*6e4,p=a*6e4/n,r=new Array(n+t).fill(0),d=t>0?o*6e4/t:0;return ce.filter(b=>b.plotId===e).forEach(b=>{const $=new Date(b.iso).getTime();if(!($<c)){if($<=s){const l=Math.min(n-1,Math.floor(($-c)/p));r[l]+=b.mm}else if(t>0&&$<=s+o*6e4){const l=Math.min(t-1,Math.floor(($-s)/d));r[n+l]+=b.mm}}}),r}function Kn(e,i,t,o,n,a=20,s=0){const c=St[e]||10080,p=c+s,r=new Date,d=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,b=4,$=i-t-o,l=n-a;return Array.from({length:b+1},(u,f)=>{const m=f/b,h=new Date(r.getTime()+(m*p-c)*6e4),w=(t+m*$).toFixed(1),E=f===0?"start":f===b?"end":"middle";return[`<line x1="${w}" y1="${l}" x2="${w}" y2="${l+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${w}" y="${n-3}" text-anchor="${E}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(h)}</text>`].join("")}).join("")}function Cs(e,i,t,o="7d",n="",a=null){const s=Vt[o]||60,c=St[o]||10080,p=c/1440,r=Yn[e]||0,d=r>0?Math.max(1,Math.round(Math.min(r,p)/p*s)):0,b=d>0?Math.min(r,p)/p*c:0,$=e==="irrigation"?Ls(a,o,d,b):Nt(e,s+d),l=320,u=100,f=34,m=6,h=10,w=20,E=l-f-m,S=u-h-w,M=t?0:Math.min(...$),y=Math.max(...$,M+.001),g=y-M,A=Y=>f+Y/($.length-1)*E,I=Y=>h+S-(Y-M)/g*S,q=`g${Math.random().toString(36).slice(2,8)}`,j=[0,.5,1].map(Y=>{const te=M+Y*g,be=h+S-Y*S;return`<text x="${f-3}" y="${(be+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${te<10?te.toFixed(1):Math.round(te)}</text>`}).join(""),T=[.25,.5,.75].map(Y=>{const te=(h+S-Y*S).toFixed(1);return`<line x1="${f}" y1="${te}" x2="${l-m}" y2="${te}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),v=`<line x1="${f}" y1="${h+S}" x2="${l-m}" y2="${h+S}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,k=Kn(o,l,f,m,u,w,b);let C="";if(d>0){const Y=A(s-.5),te=`stripe${q}`;C=`<defs><pattern id="${te}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.06)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.18)" stroke-width="3"/>
      </pattern></defs>
      <rect x="${Y.toFixed(1)}" y="${h}" width="${(l-m-Y).toFixed(1)}" height="${S}" fill="url(#${te})"/>
      <line x1="${Y.toFixed(1)}" y1="${h}" x2="${Y.toFixed(1)}" y2="${h+S}" stroke="rgba(142,142,147,.35)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(l-m-3).toFixed(1)}" y="${(h+9).toFixed(1)}" text-anchor="end" font-size="8" fill="#8e8e93" font-family="-apple-system" font-style="italic">Prévisions</text>`}if(t){const Y=E/$.length*.7,te=$.map((be,Ae)=>{const $e=(be-M)/g*S,Me=h+S-$e,qe=Ae>=s;return`<rect x="${(A(Ae)-Y/2).toFixed(1)}" y="${Me.toFixed(1)}" width="${Y.toFixed(1)}" height="${$e.toFixed(1)}" fill="${qe?"#C7C7CC":i}" opacity="${qe?".55":".8"}" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${l} ${u}" width="100%" height="${u}" preserveAspectRatio="none">${C}${j}${T}${v}${k}${te}</svg>`}const x=$.map((Y,te)=>[A(te),I(Y)]),L=x.slice(0,s),D=x.slice(s-1),P=L.map(([Y,te],be)=>`${be?"L":"M"}${Y.toFixed(1)},${te.toFixed(1)}`).join(" "),z=d>0?D.map(([Y,te],be)=>`${be?"L":"M"}${Y.toFixed(1)},${te.toFixed(1)}`).join(" "):"",F=`${P} L${A(s-1).toFixed(1)},${(h+S).toFixed(1)} L${f},${(h+S).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:$.map(Y=>+Y.toFixed(2)),minV:+M.toFixed(2),maxV:+y.toFixed(2)}))}" data-color="${i}" data-unit="${n}" style="position:relative">
    <svg viewBox="0 0 ${l} ${u}" width="100%" height="${u}" preserveAspectRatio="none">
      <defs><linearGradient id="${q}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${C}
      ${j}${T}${v}
      <path d="${F}" fill="url(#${q})"/>
      <path d="${P}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${z?`<path d="${z}" fill="none" stroke="${i}" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>`:""}
      ${x.map(([Y,te],be)=>`<circle cx="${Y.toFixed(1)}" cy="${te.toFixed(1)}" r="2" fill="${i}" opacity="${be>=s?".55":"1"}"/>`).join("")}
      ${k}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Zn(e,i,t,o=null){if(!t)return"";const n=Vt[i]||60,s=(St[i]||10080)/(n*60),c=e==="irrigation"?Ls(o,i):Nt(e,n);let p=[];if(t==="temp"){const r=c.reduce((b,$)=>b+Math.max(0,Math.min($,Se.djMax)-Se.djMin),0)*(s/24),d=c.filter(b=>b<Se.hfSeuil).length*s;p=[{label:"Degrés jours",val:`${Math.round(r)} DJ`,metricId:"dj",thresholdText:`${Se.djMin}°C → ${Se.djMax}°C`},{label:"Heures de froid",val:`${Math.round(d)} h`,metricId:"hf",thresholdText:`< ${Se.hfSeuil}°C`}]}else if(t==="pluie")p=[{label:"Cumul pluie",val:`${c.reduce((d,b)=>d+b,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const r=c.filter(d=>d>120).length*s;p=[{label:"Ensoleillement",val:`${Math.round(r)} h`,metricId:"rayo"}]}else if(t==="etp")p=[{label:"Évapotranspiration cumulée",val:`${(c.reduce((d,b)=>d+b,0)*(s/24)).toFixed(1)} mm`,metricId:"etp"}];else if(t==="hws"){const r=c.filter(d=>d>50).length*s;p=[{label:"Heures d'humectation",val:`${Math.round(r)} h`,metricId:"humec"}]}else t==="irrigation"&&(p=[{label:"Cumul irrigation",val:`${c.reduce((d,b)=>d+b,0).toFixed(1)} mm`,metricId:"irrigation"}]);return p.length?`<div class="m-chart-cumuls">${p.map(r=>{const d=r.metricId==="dj"||r.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${r.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${r.label}</span>
          ${r.thresholdText?`<span class="m-chart-cumul-thresh">${r.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${r.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${d}
        <button class="m-cumul-add-btn" data-cumul-label="${r.label}" data-cumul-val="${r.val}" data-cumul-metric-id="${r.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}const Xn={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",j7j7:"J-7 → J+7",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},Qn={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"};function Ui(e,i,t=null,o=null,n="1h",a=null){const s=Je[e];if(!s)return"";const c=Zn(e,i,s.cumulsType,o),p=t||e==="irrigation"?`<div class="m-chart-details-link" data-sensor-id="${t??""}" data-metric-id="${e}">Voir détails →</div>`:"",r=a&&e!=="irrigation"?`<button class="m-msr-add-btn" data-msr-metric-id="${e}" data-msr-subject-key="${a.key}" data-msr-subject-label="${a.label}" data-msr-period="${i}" data-msr-step="${n}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`:"";return`
    <div class="m-chart-card" data-metric-id="${e}">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${s.color}">${s.label}</span>
        ${r}
      </div>
      ${Cs(e,s.color,s.cumul,i,s.unit||"",o)}
      ${p}
      ${c}
    </div>`}function ea(e){const i=e.dataset.msrMetricId,t=e.dataset.msrSubjectKey,o=e.dataset.msrSubjectLabel,n=e.dataset.msrPeriod,a=e.dataset.msrStep,s=Je[i];if(!s)return;const c=JSON.parse(localStorage.getItem(_t)||"{}"),p=c.mesuresList||[];if(p.length>=Gi){U(`Maximum de mesures atteint (${Gi})`);return}if(p.some(r=>r.subjectKey===t&&r.metricId===i&&r.period===n&&r.step===a)){U("Cette mesure est déjà dans vos favoris");return}p.push({subjectKey:t,subjectLabel:o,metricId:i,metricLabel:s.label,unit:s.unit||"",period:n,periodLabel:Xn[n]||n,step:a,stepLabel:Qn[a]||a,color:s.color}),c.mesuresList=p,localStorage.setItem(_t,JSON.stringify(c)),U("Mesure ajoutée au tableau de bord")}function ta(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function ia(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:o,maxV:n}=i,a=e.querySelector(".m-chart-tip"),s=e.querySelector(".m-chart-crosshair"),c=e.dataset.color||"#0172A4",p=e.dataset.unit||"";function r(b){const $=e.getBoundingClientRect(),l=Math.max(0,Math.min(1,(b-$.left)/$.width)),u=Math.round(l*(t.length-1)),f=t[u],m=l*100,h=(f<10?f.toFixed(1):String(Math.round(f)))+(p?` ${p}`:""),w=ta(c);s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${m}%;width:1px;background:${c};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(m,75)}%;background:${c};color:${w};border:1.5px solid ${w};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=h}function d(){s.style.display="none",a.style.display="none"}e.addEventListener("pointermove",b=>{b.preventDefault(),r(b.clientX)}),e.addEventListener("pointerdown",b=>r(b.clientX)),e.addEventListener("pointerup",d),e.addEventListener("pointerleave",d),e.style.cursor="crosshair"}function sa(e){const i=ce.filter(f=>f.plotId===e.id),t=i.filter(f=>f.real),o=i.filter(f=>!f.real),n=t.reduce((f,m)=>f+m.mm,0),a=o.reduce((f,m)=>f+m.mm,0),s=Ge(e.id).irrigation??e.irrigation,p=s&&!new Set(["Non irrigué","Non renseigné",""]).has(s),r=`
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
        ${r}
      </div>`,"irrigations");let d="";if(i.some(f=>f.fromStrategy)){const f=[...i].sort((E,S)=>E.iso.localeCompare(S.iso)),m=f[f.length-1],h=f[f.length-2],w=h?Math.round((new Date(m.iso)-new Date(h.iso))/864e5):null;d=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${m.mm} mm</strong>${w?` tous les <strong>${w} jours</strong>`:""}.</div>
      </div>`}const $=n+a,u=`
    <div class="w-irrig-layout">
      <div class="w-irrig-kpis">
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Effectuées</div>
          <div class="w-irrig-kpi-val" style="color:#E07820">${n} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Planifiées</div>
          <div class="w-irrig-kpi-val" style="color:#FFB705">${a} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Total</div>
          <div class="w-irrig-kpi-val" style="color:#8e8e93">${$} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${d}
      ${r}
    </div>
    <div class="m-irrig-footer-link">Voir les irrigations →</div>`;return lt("Irrigations","bi-moisture","#FF8C00",u,"irrigations")}function na(e,i=[]){const t=Ht(e,i),o=i.map(a=>ne.find(s=>s.id===a)).filter(Boolean);let n="";for(const a of t)if(a==="irrigations")n+=sa(e);else if(a==="cumuls")n+=oa(e,i);else if(a==="previsions-5j")n+=la(e);else if(ui[a]){const s=new Set(ui[a]),c=o.filter(p=>s.has(p.model));c.length&&(n+=ra(c,a))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${n}
    </div>`}function lt(e,i,t,o,n="",a=""){return`
    <div class="m-widget-card">
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${n}" type="button">•••</button>
      </div>
      ${a?`<div class="m-widget-card-subtitle">${a}</div>`:""}
      ${o}
    </div>`}function Xe(e,i,t){const o=(e*9301+49297)%233280,a={etp:1+o%60/100,pluie:.8+o%70/100,djc:4+o%60/10,hfroid:.4+o%12/10,humec:.1+o%20/100,enso:4+o%40/10}[i]??1,s=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(a*s*10)/10}const As=e=>`m-pcumuls-${e}`;function ot(e){try{return JSON.parse(localStorage.getItem(As(e)))||{}}catch{return{}}}function At(e,i){const t=ot(e);localStorage.setItem(As(e),JSON.stringify({...t,...i}))}const aa={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function oa(e,i=[]){const t=new Set;i.forEach(l=>{const u=ne.find(f=>f.id===l);u&&(gt[u.model]||[]).forEach(f=>t.add(f))});const o=`${new Date().getFullYear()}-01-01`,n=ot(e.id),a=new Set(n.hidden||[]),s=n.dates||{},c=n.cfg||{};e.id;const p=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:Xe(e.id,"etp",s.etp||o),show:!0},{id:"enso",label:"Rayonnement solaire",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:Xe(e.id,"enso",s.enso||o),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:Xe(e.id,"pluie",s.pluie||o),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:Xe(e.id,"djc",s.djc||o),show:t.has("temperature"),cfg:!0,cfgLabel:`${c.djMin??0}–${c.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#FEE7B4",icon:"bi-snow",val:Xe(e.id,"hfroid",s.hfroid||o),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${c.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:Xe(e.id,"humec",s.humec||o),show:t.has("humectation")}].filter(l=>l.show),r=p.filter(l=>!a.has(l.id)),d=p.filter(l=>a.has(l.id)),b=d.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${d.map(l=>`
          <button class="m-pcumul-add" data-cid="${l.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${l.icon}" style="color:${l.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${l.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",$=r.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${r.map(l=>{const u=s[l.id]||o;return`<div class="m-cumuls-saved-card" style="position:relative">
          <button class="m-pcumul-del m-del-btn" data-cid="${l.id}" data-pid="${e.id}" type="button" style="position:absolute;top:8px;right:8px">×</button>
          <div class="m-pcumul-hd">
            <div class="m-pcumul-icon" style="background:${l.color}22;color:${l.color}"><i class="bi ${l.icon}"></i></div>
            <div class="m-pcumul-label" style="color:${l.color}">${l.label}</div>
          </div>
          <div class="m-pcumul-value" style="color:${l.color}">${l.val}<span class="m-pcumul-unit">${l.unit}</span></div>
          <div class="m-pcumul-since">
            <span>Depuis le</span>
            <input type="date" class="m-pcumul-date m-pcumul-date-inp" data-cid="${l.id}" data-pid="${e.id}" value="${u}">
            ${l.cfg?`<button class="m-pcumul-cfg m-pcumul-cfg-btn" data-cid="${l.id}" data-pid="${e.id}"><i class="bi bi-gear"></i> ${l.cfgLabel}</button>`:""}
          </div>
        </div>`}).join("")}${b}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${b}`;return lt("Cumuls","bi-bar-chart-fill","#0172A4",$,"cumuls")}function la(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],o=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-lightning-rain"],n=["Ensoleillé","Part. nuageux","Couvert","Pluvieux","Orageux"],a=new Date,s=ve.find(u=>u.id===(e==null?void 0:e.orgId)),c=(e==null?void 0:e.ville)||(s==null?void 0:s.ville)||"—",p=(e==null?void 0:e.id)||1,r=(u,f)=>Math.floor(Math.random()*(f-u+1))+u,d=(u,f)=>{const m=new Date(a);m.setDate(m.getDate()+u);const h=Math.floor((p*7+u*3)%11/2.2);return{lbl:u===0?"Auj.":i[m.getDay()],date:`${m.getDate()} ${t[m.getMonth()]}`,tmax:r(17+f,34+f),tmin:r(4+f,15+f),pluie:h>=3?r(2,18):0,vent:r(10,35),wi:h}},b=[0,1,2].map(u=>d(u,0)).concat([3,4].map(u=>d(u,-1))),$=u=>`
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${u.lbl}</div>
      <div class="m-wprev5-date">${u.date}</div>
      <i class="bi ${o[u.wi]} m-wprev5-icon" title="${n[u.wi]}"></i>
      <div class="m-wprev5-rain${u.pluie===0?" m-wprev5-rain--none":""}">${u.pluie>0?u.pluie+" mm":"—"}</div>
      <div class="m-wprev5-tmax">${u.tmax}°</div>
      <div class="m-wprev5-tmin">${u.tmin}°</div>
      <div class="m-wprev5-wind">${u.vent} <span>km/h</span></div>
    </div>`,l=`
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${c}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${b.map($).join("")}</div>`;return lt("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",l,"previsions-5j")}function ra(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},o={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},n={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(a=>{const s=t[a.model]||"bi-broadcast",c=Ms[a.model]||a.model,p=o[a.model]||"#0172A4",r=n[a.model]||[],d=Je[r[0]],b=r[0],$=`
      <div style="margin-bottom:6px">
        ${d?Cs(b,p,!1,"1d",d.unit||""):'<div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--txt3);font-size:12px">Données indisponibles</div>'}
      </div>
      <div class="m-wsensor-vals">
        ${r.slice(0,3).map(l=>{const u=Je[l];if(!u)return"";const m=Nt(l,1)[0],h=m<10?m.toFixed(1):Math.round(m);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${u.label}</span>
            <span class="m-wsensor-value" style="color:${u.color}">${h} ${u.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer" style="display:flex;align-items:center;justify-content:space-between">
        <span>${a.serial}</span>
        <button class="m-wsensor-voir-donnees" data-sensor-id="${a.id}" data-metric-id="${b}" style="border:none;background:none;color:#007AFF;font-size:12px;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;gap:3px">Voir les données <i class="bi bi-arrow-right-short"></i></button>
      </div>`;return lt(c,s,p,$,i)}).join("")}function ca(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),o=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(o.href),100)}function da(e,i,t){const o=new Set;i.forEach(l=>{const u=ne.find(f=>f.id===l);u&&(gt[u.model]||[]).forEach(f=>o.add(f))});const n=[...new Set(["etp","rayonnement","temp_rosee",...o])].filter(l=>Je[l]),a=Vt[t]||60,s=St[t]||10080,c=s/a*6e4,p=new Date,r=new Date(p-s*6e4),d=["Horodatage",...n.map(l=>`${Je[l].label} (${Je[l].unit})`)].join(";"),b=Array.from({length:a},(l,u)=>[new Date(r.getTime()+u*c).toISOString().replace("T"," ").slice(0,19),...n.map(m=>Nt(m,1)[0].toFixed(2))].join(";")),$=(e.name||"parcelle").replace(/[^\w]/g,"_");ca([d,...b].join(`\r
`),`${$}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function ua(e,i="7d",t="1h",o=null){const n=new Set,a={};e.forEach(b=>{const $=ne.find(l=>l.id===b);$&&(gt[$.model]||[]).forEach(l=>{n.add(l),a[l]||(a[l]=b)})});const s=ce.some(b=>b.plotId===o),c=["pluie","irrigation","temperature","humidite","pothydr","teneur","temp_sol","vent","rayonnement","humectation","par","temp_rosee","etp"],p=[...new Set([...n,"etp","rayonnement","temp_rosee",...s?["irrigation"]:[]])].filter(b=>Je[b]).sort((b,$)=>{const l=c.indexOf(b),u=c.indexOf($);return(l===-1?999:l)-(u===-1?999:u)}),r=new Date().toISOString().slice(0,10),d=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-to m-custom-date" value="${r}">
      </div>`:""}
    </div>
    <div class="m-detail-section">
      ${(()=>{const b=e[0]??null,$=o!=null?le.find(u=>u.id===o):null,l=$?{key:`p-${$.id}`,label:$.name}:null;return p.map(u=>u==="irrigation"?Ui(u,i,null,o):Ui(u,i,a[u]??b,null,t,l)).join("")})()}
    </div>`}const pa={"IRRÉ-LIS Multi-Cultures":{icon:"bi-droplet-fill",color:"#2E75B6"},"IRRÉ-LIS Mono-Culture":{icon:"bi-droplet-fill",color:"#2E75B6"},DeciTrait:{icon:"bi-shield-check",color:"#4CAF50"},Limacapt:{icon:"bi-bug",color:"#795548"},"Modèles Arvalis — PRÉVI-LIS / MILÉOS":{icon:"bi-graph-up",color:"#FBAF05"},Xarvio:{icon:"bi-grid-3x3-gap",color:"#00B14F"},Pixagri:{icon:"bi-map",color:"#00897B"},VitiMeteo:{icon:"bi-flower1",color:"#8B4C9E"},Rimpro:{icon:"bi-cloud-lightning",color:"#E53935"},"Cropwise Protector":{icon:"bi-shield-fill-check",color:"#43A047"},"Movida GrapeVision":{icon:"bi-eye",color:"#7B1FA2"}};function ma(e){if(e.substrate)return"Substrat : "+e.substrate;if(e.texture===mt&&e.soilAnalysis){const{argile:i,limon:t,sable:o}=e.soilAnalysis;return`Analyse de sol (argile ${i}% / limon ${t}% / sable ${o}%)`}return e.texture||"—"}function pi(e){const i=pa[e]||{icon:"bi-puzzle",color:"#8e8e93"};return`<i class="bi ${i.icon}" style="font-size:18px;color:${i.color};width:24px;text-align:center;flex-shrink:0"></i>`}const Ms={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"};function va(e,i,t){const o=t.map(d=>ne.find(b=>b.id===d)).filter(Boolean),n=o.some(d=>d.model==="P+"||d.model==="PT"),a=o.some(d=>d.model==="P"),s=n&&a,c=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),p=new Map;o.forEach(d=>{(gt[d.model]||[]).forEach(b=>{p.has(b)||p.set(b,[]),p.get(b).push(d)})});const r=new Set;return p.forEach((d,b)=>{d.length<=1||d.every($=>c.has($.model))||d.forEach($=>r.add($.id))}),`
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
          <span class="m-list-row-value">${ma(e)}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${o.length?o.map((d,b)=>{const $=d.event&&(Array.isArray(d.event)?d.event.length>0:!0),l=r.has(d.id),u=Ms[d.model]||d.model,f=(gt[d.model]||[]).map(m=>{const h=Je[m];return h?`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${h.color}18;color:${h.color};border:1px solid ${h.color}40;white-space:nowrap">${h.label}</span>`:""}).join("");return`<div class="m-list-row${b===o.length-1?" m-list-row--last":""} m-tappable" data-open-sensor="${d.id}" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:15px;font-weight:500;display:flex;align-items:center;gap:5px">
                      ${u}
                      ${$?'<span style="width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0;display:inline-block"></span>':""}
                      ${l?'<i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:12px;flex-shrink:0"></i>':""}
                    </div>
                    <div style="font-size:12px;color:#8e8e93;margin-top:1px">${d.model} · ${d.serial}</div>
                  </div>
                  <button class="btn-sensor-more" data-sensor-id="${d.id}" style="border:none;background:none;color:#8e8e93;font-size:18px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1" onclick="event.stopPropagation()">···</button>
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
                </div>
                ${f?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${f}</div>`:""}
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
                ${pi(d)}<span>${d}</span>
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
    </div>`}function mi(e,i=[],t="widgets",o="Parcelles"){let n=ve.find(y=>y.id===e.orgId),a=t,s="7d",c="1h",p=!1;const r=(n==null?void 0:n.ville)||"",d=ye(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${o}</span></button>
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
    <div id="detail-content" class="m-detail-content"></div>`);function b(){const y=ve.filter(q=>q.id!==100&&q.statut!=="inactif"),g=document.createElement("div"),A=()=>{g.innerHTML=y.map(q=>`
        <div class="m-sheet-option${q.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${q.id}">
          <span>${q.name}</span>
          ${q.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),g.querySelectorAll("[data-pick-org]").forEach(q=>{q.addEventListener("click",()=>{const j=+q.dataset.pickOrg;j!==e.orgId&&(e.orgId=j,n=ve.find(T=>T.id===j),E(),U("Exploitation mise à jour")),I.classList.remove("m-sheet-overlay--show"),setTimeout(()=>I.remove(),280)})})},I=de({title:"Exploitation",body:g,doneLabel:"Fermer",onDone:()=>{}});A()}function $(){const y=Ot.filter(j=>j!=="Non renseigné"),g=Ge(e.id).irrigation??e.irrigation,A=document.createElement("div"),I=()=>{A.innerHTML=`
        <div class="m-sheet-option${g?"":" m-sheet-option--active"}" data-pick-irrig="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez un type</span>
          ${g?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${y.map(j=>`
          <div class="m-sheet-option${j===g?" m-sheet-option--active":""}" data-pick-irrig="${j}">
            <span>${j}</span>
            ${j===g?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,A.querySelectorAll("[data-pick-irrig]").forEach(j=>{j.addEventListener("click",()=>{const T=j.dataset.pickIrrig;T&&T!==g&&(at(e.id,{irrigation:T}),e.irrigation=T,Re(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Type d'irrigation modifié : ${g||"—"} → ${T}.`}),E(),U("Type d'irrigation mis à jour")),q.classList.remove("m-sheet-overlay--show"),setTimeout(()=>q.remove(),280)})})},q=de({title:"Type d'irrigation",body:A,doneLabel:"Fermer",onDone:()=>{}});I()}function l(){const y=Os,g=Ge(e.id).env??e.env??"Plein champ",A=document.createElement("div"),I=()=>{A.innerHTML=y.map(j=>`
        <div class="m-sheet-option${j===g?" m-sheet-option--active":""}" data-pick-env="${j}">
          <span>${j}</span>
          ${j===g?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),A.querySelectorAll("[data-pick-env]").forEach(j=>{j.addEventListener("click",()=>{const T=j.dataset.pickEnv;T&&T!==g&&(at(e.id,{env:T}),e.env=T,Re(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Environnement modifié : ${g||"—"} → ${T}.`}),E(),U("Environnement mis à jour")),q.classList.remove("m-sheet-overlay--show"),setTimeout(()=>q.remove(),280)})})},q=de({title:"Environnement",body:A,doneLabel:"Fermer",onDone:()=>{}});I()}function u(){const y=[...gi,mt],g=Ge(e.id).texture??e.texture,A=document.createElement("div"),I=()=>{A.innerHTML=`
        <div class="m-sheet-option${g?"":" m-sheet-option--active"}" data-pick-texture="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez une texture</span>
          ${g?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${y.map(j=>`
          <div class="m-sheet-option${j===g?" m-sheet-option--active":""}" data-pick-texture="${j}">
            <span>${j}</span>
            ${j===g?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,A.querySelectorAll("[data-pick-texture]").forEach(j=>{j.addEventListener("click",()=>{const T=j.dataset.pickTexture;if(q.classList.remove("m-sheet-overlay--show"),setTimeout(()=>q.remove(),280),T===mt){f(g);return}T!==g&&(at(e.id,{texture:T||null,soilAnalysis:null}),e.texture=T||null,e.soilAnalysis=null,Re(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${g||"—"} → ${T||"—"}.`}),E(),U("Texture de sol mise à jour"))})})},q=de({title:"Texture de sol",body:A,doneLabel:"Fermer",onDone:()=>{}});I()}function f(y){const g=Ge(e.id).soilAnalysis??e.soilAnalysis??{},A=document.createElement("div");A.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:12px">
      <div>
        <label class="m-form-label">Argile (%)</label>
        <input type="number" class="m-sheet-input" id="soil-argile" value="${g.argile??""}" placeholder="Ex : 25" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Limon (%)</label>
        <input type="number" class="m-sheet-input" id="soil-limon" value="${g.limon??""}" placeholder="Ex : 40" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Sable (%)</label>
        <input type="number" class="m-sheet-input" id="soil-sable" value="${g.sable??""}" placeholder="Ex : 35" min="0" max="100">
      </div>
    </div>`,de({title:"Analyse de sol",body:A,doneLabel:"Enregistrer",onDone:()=>{var v,k,C;const I=+(((v=A.querySelector("#soil-argile"))==null?void 0:v.value)||0),q=+(((k=A.querySelector("#soil-limon"))==null?void 0:k.value)||0),j=+(((C=A.querySelector("#soil-sable"))==null?void 0:C.value)||0),T={argile:I,limon:q,sable:j};at(e.id,{texture:mt,soilAnalysis:T}),e.texture=mt,e.soilAnalysis=T,Re(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${y||"—"} → analyse de sol (argile ${I}% / limon ${q}% / sable ${j}%).`}),E(),U("Analyse de sol enregistrée")}})}function m(){const y=Ge(e.id).volumeMaxM3??e.volumeMaxM3??null,g=document.createElement("div");g.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
      <label class="m-form-label">Volume limité (m³)</label>
      <input type="number" class="m-sheet-input" id="edit-volume-max" value="${y??""}" placeholder="Ex : 33000" step="100" min="0">
    </div>`,de({title:"Volume limité de la parcelle",body:g,doneLabel:"Appliquer",onDone:()=>{var q;const A=(q=g.querySelector("#edit-volume-max"))==null?void 0:q.value,I=A===""?null:Math.max(0,+A);at(e.id,{volumeMaxM3:I}),e.volumeMaxM3=I,E(),U("Volume limité mis à jour")}})}const h=["IRRÉ-LIS Multi-Cultures","IRRÉ-LIS Mono-Culture","DeciTrait","Limacapt","Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","Movida GrapeVision"];function w(){let y=[...e.integrations||[]];function g(I){const q=h.filter(j=>!y.includes(j));I.innerHTML=`
        <div class="m-list-section-header">${y.length?`Actives (${y.length})`:"Actives"}</div>
        <div class="m-list">
          ${y.length?y.map((j,T)=>`
            <div class="m-list-row${T===y.length-1?" m-list-row--last":""}" style="gap:10px">
              ${pi(j)}
              <span class="m-list-row-label" style="flex:1">${j}</span>
              <button class="btn-unlink-integ" data-integ="${j}" style="border:none;background:none;color:#ff3b30;font-size:13px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Délier</button>
            </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucune intégration active</span></div>'}
        </div>
        ${q.length?`
        <div class="m-list-section-header">Disponibles</div>
        <div class="m-list">
          ${q.map((j,T)=>`
            <div class="m-list-row${T===q.length-1?" m-list-row--last":""}" style="gap:10px">
              ${pi(j)}
              <span class="m-list-row-label" style="flex:1">${j}</span>
              <button class="btn-add-integ" data-integ="${j}" style="border:none;background:none;color:#0172A4;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Lier</button>
            </div>`).join("")}
        </div>`:""}`,I.querySelectorAll(".btn-unlink-integ").forEach(j=>{j.addEventListener("click",()=>{y=y.filter(T=>T!==j.dataset.integ),e.integrations=[...y],Re(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${j.dataset.integ} » retirée de la parcelle.`}),g(I),U("Intégration déliée")})}),I.querySelectorAll(".btn-add-integ").forEach(j=>{j.addEventListener("click",()=>{y.includes(j.dataset.integ)||y.push(j.dataset.integ),e.integrations=[...y],Re(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${j.dataset.integ} » activée sur la parcelle.`}),g(I),U("Intégration liée")})})}const A=ye(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${e.name}</span></button>
          <span style="font-size:17px;font-weight:600">Intégrations</span>
          <div style="width:60px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="integ-list-content" style="padding-bottom:32px"></div>`);A.querySelector(".m-detail-back").addEventListener("click",me),g(A.querySelector("#integ-list-content"))}function E(){const y=d.querySelector("#detail-content");a==="widgets"&&(y.innerHTML=na(e,i)),a==="donnees"&&(y.innerHTML=ua(i,s,c,e.id)),a==="params"&&(y.innerHTML=va(e,n,i),S()),M()}function S(){const y=window.L;y&&setTimeout(()=>{var I;const g=d.querySelector("#parcel-minimap");if(!g)return;const A=y.map(g,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(y.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(A),((I=e.latlngs)==null?void 0:I.length)>=3){const q=y.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(A);A.fitBounds(q.getBounds(),{padding:[8,8]})}else A.setView([e.lat,e.lng],14),y.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(A)},50)}function M(){var y,g,A,I,q,j,T;(y=d.querySelector(".m-period-sel"))==null||y.addEventListener("change",v=>{s=v.target.value,E()}),(g=d.querySelector(".m-step-sel"))==null||g.addEventListener("change",v=>{c=v.target.value,E()}),(A=d.querySelector(".m-export-btn"))==null||A.addEventListener("click",()=>da(e,i,s)),d.querySelectorAll(".m-chart-svg-wrap").forEach(v=>ia(v)),d.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(v=>{v.addEventListener("click",()=>{const k=+v.dataset.sensorId,C=ne.find(x=>x.id===k);C&&ge(()=>import("./chart-fullscreen-DxMXOcvR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(x=>x.initChartFullscreen({sensor:C,linkedSensorIds:i,metricId:v.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),d.querySelectorAll(".m-irrig-footer-link").forEach(v=>{v.addEventListener("click",()=>{a="donnees",d.querySelectorAll(".m-detail-tab").forEach(k=>k.classList.toggle("active",k.dataset.view==="donnees")),E(),requestAnimationFrame(()=>{var k;(k=d.querySelector('.m-chart-card[data-metric-id="irrigation"]'))==null||k.scrollIntoView({block:"start"})})})}),d.querySelectorAll(".m-chart-details-link").forEach(v=>{v.addEventListener("click",()=>{if(v.dataset.metricId==="irrigation"){ge(()=>import("./chart-fullscreen-DxMXOcvR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(x=>x.initChartFullscreen({linkedSensorIds:i,metricId:"irrigation",backLabel:e.name,parcel:e}));return}const k=+v.dataset.sensorId,C=ne.find(x=>x.id===k);C&&ge(()=>import("./chart-fullscreen-DxMXOcvR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(x=>x.initChartFullscreen({sensor:C,linkedSensorIds:i,metricId:v.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),d.querySelectorAll(".m-msr-add-btn").forEach(v=>{v.addEventListener("click",()=>ea(v))}),d.addEventListener("click",v=>{const k=v.target.closest(".m-cumul-add-btn");if(k){const x=k.dataset.cumulMetricId,L=k.dataset.cumulVal,D=Jn[x];if(!D)return;const P=document.createElement("div");P.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${D.metricLabel}</strong> (<em>${L}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,de({title:"Tableau de bord",body:P,doneLabel:"Ajouter",onDone:()=>{const z=JSON.parse(localStorage.getItem(_t)||"{}"),F=z.cumulsList||[];if(F.length>=5){U("Maximum de cumuls atteint (5)");return}const O=x==="hf"?{cold:Se.hfSeuil}:x==="dj"?{low:Se.djMin,high:Se.djMax}:null;F.push({metricId:x,...D,subjectKey:`p-${e.id}`,subjectLabel:e.name,fromDate:`${new Date().getFullYear()}-01-01`,value:L,thresholds:O}),z.cumulsList=F,localStorage.setItem(_t,JSON.stringify(z)),U("Cumul ajouté au tableau de bord")}});return}const C=v.target.closest(".m-cumul-edit-btn");if(C){const x=C.dataset.cumulMetricId,L=document.createElement("div");x==="hf"?(L.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Se.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,de({title:"Heures de froid",body:L,doneLabel:"Appliquer",onDone:()=>{var D;Se.hfSeuil=+(((D=L.querySelector("#edit-hf-seuil"))==null?void 0:D.value)??7.2),E()}})):x==="dj"&&(L.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Se.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Se.djMax}" step="1" min="-20" max="50">
          </div>`,de({title:"Degrés-jours",body:L,doneLabel:"Appliquer",onDone:()=>{var D,P;Se.djMin=+(((D=L.querySelector("#edit-dj-min"))==null?void 0:D.value)??0),Se.djMax=+(((P=L.querySelector("#edit-dj-max"))==null?void 0:P.value)??18),E()}}));return}}),d.querySelectorAll("[data-open-sensor]").forEach(v=>{v.addEventListener("click",()=>{const k=+v.dataset.openSensor,C=ne.find(x=>x.id===k);C&&ge(()=>Promise.resolve().then(()=>Bt),void 0).then(x=>x.initSensorDetail(C,"donnees",zt))})}),d.querySelectorAll(".btn-sensor-more").forEach(v=>{v.addEventListener("click",k=>{k.stopPropagation();const C=+v.dataset.sensorId,x=ne.find(z=>z.id===C);if(!x)return;const L=x.model==="P+"||x.model==="PT"?"Station météo":x.model==="P"?"Pluviomètre":x.model,D=document.createElement("div");D.innerHTML=`
          <div style="padding:8px 0">
            <button id="sheet-open-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;text-align:left">
              <i class="bi bi-broadcast" style="color:#0172A4;width:22px;text-align:center"></i>Voir la fiche capteur
            </button>
            <div style="height:.5px;background:rgba(0,0,0,.1);margin:0 20px"></div>
            <button id="sheet-unlink-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;color:#ff3b30;text-align:left">
              <i class="bi bi-x-circle" style="width:22px;text-align:center"></i>Délier de cette parcelle
            </button>
          </div>`;const P=de({title:`${L} · ${x.serial}`,body:D,doneLabel:"Fermer",onDone:()=>{}});D.querySelector("#sheet-open-sensor").addEventListener("click",()=>{P.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{P.remove(),ge(()=>Promise.resolve().then(()=>Bt),void 0).then(z=>z.initSensorDetail(x,"donnees",zt))},280)}),D.querySelector("#sheet-unlink-sensor").addEventListener("click",()=>{P.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{P.remove(),ft({title:"Délier le capteur",message:`Délier <strong>${L} — ${x.serial}</strong> de <strong>${e.name}</strong> ?`,confirmLabel:"Délier",confirmColor:"#ff3b30",onConfirm:()=>{const z=i.indexOf(C);z!==-1&&i.splice(z,1),x.parcelIds=x.parcelIds.filter(F=>F!==e.id),E(),U(`${x.serial} délié`)}})},280)})})}),d.querySelectorAll(".m-list-row[data-action]").forEach(v=>{v.addEventListener("click",()=>{v.dataset.action==="edit-exploitation"?b():v.dataset.action==="edit-env"?l():v.dataset.action==="edit-irrigation"?$():v.dataset.action==="edit-volume-max"?m():v.dataset.action==="edit-texture"?u():v.dataset.action==="edit-integrations"?w():v.dataset.action==="archive"?ft({title:"Archiver la parcelle",message:`Archiver <strong>${e.name}</strong> ? Elle ne sera plus visible dans votre exploitation.`,confirmLabel:"Archiver",confirmColor:"#ff9f0a",onConfirm:()=>U("Parcelle archivée (fonctionnalité à venir)")}):U("Fonctionnalité à venir")})}),d.querySelectorAll(".m-widget-menu").forEach(v=>{v.addEventListener("click",k=>{var z;k.stopPropagation();const C=v.dataset.wid;if(!C)return;(z=d.querySelector(".m-widget-dd"))==null||z.remove();const x=document.createElement("div");x.className="m-widget-dd",x.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:180px",x.innerHTML=`<button class="m-widget-dd-remove" data-wid="${C}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const L=d.querySelector(".m-detail-content"),D=v.getBoundingClientRect(),P=L.getBoundingClientRect();x.style.top=`${D.bottom-P.top+L.scrollTop+4}px`,x.style.right=`${P.right-D.right}px`,L.style.position="relative",L.appendChild(x),x.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{x.remove();const F=Ht(e,i).filter(O=>O!==C);ks(e.id,F),E()}),setTimeout(()=>document.addEventListener("click",()=>x.remove(),{once:!0}),0)})}),(I=d.querySelector(".m-add-widget-btn"))==null||I.addEventListener("click",()=>Un(e,i,E)),(q=d.querySelector(".m-irrig-act-saisie"))==null||q.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(v=>v.openIrrigationSaisie([e],U,{ids:[e.id],label:e.name},!0))}),(j=d.querySelector(".m-irrig-act-saison"))==null||j.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(v=>v.openIrrigationStrategie([e],U,{ids:[e.id],label:e.name},null,!0))}),(T=d.querySelector(".m-irrig-set-type"))==null||T.addEventListener("click",()=>{a="params",d.querySelectorAll(".m-detail-tab").forEach(v=>v.classList.toggle("active",v.dataset.view==="params")),E(),$()}),d.querySelectorAll(".m-pcumul-del").forEach(v=>{v.addEventListener("click",k=>{k.stopPropagation();const C=+v.dataset.pid,x=ot(C),L=new Set(x.hidden||[]);L.add(v.dataset.cid),At(C,{hidden:[...L]}),E()})}),d.querySelectorAll(".m-pcumul-date").forEach(v=>{v.addEventListener("click",()=>{var k;return(k=v.showPicker)==null?void 0:k.call(v)}),v.addEventListener("change",()=>{const k=+v.dataset.pid,C=v.dataset.cid,x=v.value;if(!x||(Date.now()-new Date(x))/864e5>365)return;const P=ot(k).dates||{};P[C]=x,At(k,{dates:P});const z=v.closest(".m-cumuls-saved-card"),F=z==null?void 0:z.querySelector(".m-pcumul-value");if(F){const O=z.querySelector(".m-pcumul-unit"),Y=(O==null?void 0:O.textContent.trim())||"",te=Xe(k,C,x);F.innerHTML=`${te}<span class="m-pcumul-unit">${Y}</span>`}})}),d.querySelectorAll(".m-pcumul-cfg").forEach(v=>{v.addEventListener("click",k=>{var F;k.stopPropagation();const C=+v.dataset.pid,x=v.dataset.cid,D={...ot(C).cfg},P=aa[x];if(!P)return;(F=d.querySelector(".m-pcumul-cfg-panel"))==null||F.remove();const z=document.createElement("div");z.className="m-pcumul-cfg-panel",z.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",z.innerHTML=P.map(O=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${O.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${O.key}" value="${D[O.key]??O.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',v.closest(".m-cumuls-saved-card").after(z),z.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{z.querySelectorAll(".m-pcumul-cfg-inp").forEach(O=>{D[O.dataset.key]=parseFloat(O.value)||0}),At(C,{cfg:D}),z.remove(),E()})})}),d.querySelectorAll(".m-pcumul-add").forEach(v=>{v.addEventListener("click",k=>{k.stopPropagation();const C=+v.dataset.pid,x=v.dataset.cid,L=ot(C),D=new Set(L.hidden||[]);D.delete(x),At(C,{hidden:[...D]}),E()})})}d.querySelectorAll(".m-detail-tab").forEach(y=>{y.addEventListener("click",()=>{d.querySelectorAll(".m-detail-tab").forEach(g=>g.classList.remove("active")),y.classList.add("active"),a=y.dataset.view,E()})}),d.querySelector(".m-detail-back").addEventListener("click",me),d.querySelector("#d-star").addEventListener("click",()=>{p=!p;const y=d.querySelector("#d-star");y.querySelector("i").className=p?"bi bi-star-fill":"bi bi-star",y.style.color=p?"#f5c842":"",U(p?"Ajouté aux favoris":"Retiré des favoris")}),d.querySelector("#d-plus").addEventListener("click",()=>{var y;(y=window.showMobileAddPage)==null||y.call(window)}),d.querySelector("#d-journal").addEventListener("click",()=>ya(e)),E()}function ba(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}const fa=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"],vi=e=>{const[i,t,o]=e.split("-");return`${o}/${t}/${i}`};function ha(e){const i=[],t=(n,a)=>i.push({id:`auto-mod-${n}-${a.slice(0,16)}`,type:"modification",date:n,texte:a,_system:!0});t("2024-01-01","Création de la parcelle"),e.crop&&t("2024-03-15",`Culture définie : ${e.crop}`);const o=e.substrate?`Substrat : ${e.substrate}`:e.texture;return o&&t("2024-03-15",`Texture de sol définie : ${o}`),e.irrigation&&t("2024-04-01",`Type d'irrigation défini : ${e.irrigation}`),i}function ga(e){const i=[],t=ce.filter(n=>n.plotId===e);t.filter(n=>!n.fromStrategy).forEach(n=>{i.push({id:`auto-irrig-${n.iso}-${n.mm}`,type:"irrigation",date:n.iso,texte:n.real?`Irrigation ponctuelle de ${n.mm} mm enregistrée.`:`Irrigation ponctuelle de ${n.mm} mm planifiée.`,_system:!0})});const o=new Map;return t.filter(n=>n.fromStrategy&&n.seasonId).forEach(n=>{o.has(n.seasonId)||o.set(n.seasonId,[]),o.get(n.seasonId).push(n)}),o.forEach((n,a)=>{n.sort((d,b)=>d.iso.localeCompare(b.iso));const s=n[0],c=n[n.length-1],p=s.mm,r=n.length>1?Math.round((new Date(n[1].iso)-new Date(n[0].iso))/864e5):7;i.push({id:`auto-irrig-season-${a}`,type:"irrigation",date:s.iso,texte:`Saison d'irrigation programmée : ${p} mm tous les ${r} jours, du ${vi(s.iso)} au ${vi(c.iso)} (${n.length} irrigation${n.length>1?"s":""}, ${n.length*p} mm au total).`,_system:!0})}),i}function ya(e){const i=ve.find(a=>a.id===e.orgId),t=(i==null?void 0:i.ville)||"",o=ye(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);o.querySelector(".m-detail-back").addEventListener("click",me);function n(){var $,l;const a=o.querySelector("#mjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(u=>u.linkedType==="parcel"&&u.linkedId===e.id).map((u,f)=>({id:`dash-${f}`,type:"note",date:u.date,texte:u.text,auteur:u.auteur,role:u.role,_fromDashboard:!0})),c=[...ha(e),...ga(e.id)],p=[...Dt(e.id),...s,...c].sort((u,f)=>f.date.localeCompare(u.date)),r=vi,d={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotColor:"#1d4ed8",dotBg:"#eff6ff",badgeCls:"irrigation"},integration:{label:"Intégration",icon:"bi-plug-fill",dotColor:"#7a4fa0",dotBg:"#f5f0fb",badgeCls:"integration"},modification:{label:"Modification",icon:"bi-pencil-square",dotColor:"#7a6a1e",dotBg:"#fdf8ee",badgeCls:"modification"}};let b=`
      <div style="padding:12px 16px 4px;display:flex;flex-direction:column;gap:8px">
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-note">
          <i class="bi bi-pencil-square"></i> Ajouter une note
        </button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-trait">
          <i class="bi bi-eyedropper"></i> Ajouter un traitement
        </button>
      </div>
    `;p.length===0?b+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(b+='<div class="m-jrn-timeline">',p.forEach((u,f)=>{const m=d[u.type]||d.note,h=u.type==="traitement",w=f===p.length-1,E=!!u._fromDashboard,S=!!u._system;b+=`
          <div class="m-jrn-entry" data-id="${u.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${m.dotBg};color:${m.dotColor};border-color:${m.dotColor}40">
                <i class="bi ${m.icon}"></i>
              </div>
              ${w?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${r(u.date)}</span>
                <span class="journal-type-badge journal-type-badge--${m.badgeCls}">${m.label}</span>
                ${E?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':S?"":`<button class="m-jrn-del" data-id="${u.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${u.texte?`<div class="m-jrn-texte">${u.texte}</div>`:""}
              ${u.auteur?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${u.auteur}${ba(u.role)}</div>`:""}
              ${h&&(u.produit||u.dose||u.cible)?`
                <div class="m-jrn-meta">
                  ${u.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${u.produit}</span>`:""}
                  ${u.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${u.dose}</span>`:""}
                  ${u.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${u.cible}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),b+="</div>"),a.innerHTML=b,($=a.querySelector("#mjrn-add-note"))==null||$.addEventListener("click",()=>Yi("note",e.id,n)),(l=a.querySelector("#mjrn-add-trait"))==null||l.addEventListener("click",()=>Yi("traitement",e.id,n)),a.querySelectorAll(".m-jrn-del").forEach(u=>{u.addEventListener("click",()=>{const f=parseInt(u.dataset.id);yi(e.id,Dt(e.id).filter(m=>m.id!==f)),n()})})}n()}function Yi(e,i,t){const o=e==="traitement",n=new Date().toISOString().slice(0,10),a=zt==="admin"?"conseiller":"membre",s=ve.find(r=>r.id===(zt==="admin"?100:1)),c=s?`${s.prenomProprietaire} ${s.nomProprietaire}`:"Jean Dupont",p=document.createElement("div");p.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:12px">
      ${o?"":`
      <div>
        <div class="m-form-label">Catégorie</div>
        <select class="m-sheet-input" id="mjf-category">
          ${fa.map(r=>`<option value="${r}">${r}</option>`).join("")}
        </select>
      </div>`}
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="mjf-date" value="${n}">
      </div>
      <div>
        <div class="m-form-label">${o?"Observations":"Texte"}</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="${o?"Conditions météo, remarques…":"Votre note…"}" style="resize:none;min-height:90px"></textarea>
      </div>
      ${o?`
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
    </div>`,de({title:o?"Ajouter un traitement":"Ajouter une note",body:p,doneLabel:"Enregistrer",onDone:()=>{var l;const r=p.querySelector("#mjf-date").value||n,d=p.querySelector("#mjf-texte").value.trim(),b=o?"":((l=p.querySelector("#mjf-category"))==null?void 0:l.value)||"",$={id:Date.now(),type:e,date:r,texte:d,auteur:c,role:a};o||($.category=b),o&&($.produit=p.querySelector("#mjf-produit").value.trim(),$.dose=p.querySelector("#mjf-dose").value.trim(),$.cible=p.querySelector("#mjf-cible").value.trim()),!(!d&&!$.produit)&&(yi(i,[$,...Dt(i)]),t())}}),setTimeout(()=>{var r;return(r=p.querySelector("#mjf-texte"))==null?void 0:r.focus()},380)}const ii=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:mi},Symbol.toStringTag,{value:"Module"})),dt=100,xa={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function ut(e,i){const t=xa[i];return t?ne.some(o=>o.parcelIds.includes(e.id)&&t.includes(o.model)):!0}const Mt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function $a(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function Ki(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"irrigation":return i===0?"#c7c7cc":i<30?"#FFDFB8":"#FF8C00";case"etp":return i<2?"#D6EDF9":i<5?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"temp_rosee":return i<5?"#D2DEFA":i<12?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"rfu":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function wa(e,i){const t=new Date().toISOString().split("T")[0],o=s=>{const c=new Date;return c.setDate(c.getDate()-s),c.toISOString().split("T")[0]},n=s=>{const c=new Date;return c.setDate(c.getDate()+s),c.toISOString().split("T")[0]},a=ce.filter(s=>s.plotId===e);switch(i){case"Aujourd'hui":return a.filter(s=>s.iso===t).reduce((s,c)=>s+c.mm,0);case"7 derniers jours":return a.filter(s=>s.real&&s.iso>=o(7)).reduce((s,c)=>s+c.mm,0);case"30 derniers jours":return a.filter(s=>s.real&&s.iso>=o(30)).reduce((s,c)=>s+c.mm,0);case"Demain":return a.filter(s=>!s.real&&s.iso===n(1)).reduce((s,c)=>s+c.mm,0);case"7 prochains jours":return a.filter(s=>!s.real&&s.iso>t&&s.iso<=n(7)).reduce((s,c)=>s+c.mm,0);case"30 prochains jours":return a.filter(s=>!s.real&&s.iso>t&&s.iso<=n(30)).reduce((s,c)=>s+c.mm,0);case"Toute la saison":return a.filter(s=>s.real).reduce((s,c)=>s+c.mm,0);default:return a.filter(s=>s.real).reduce((s,c)=>s+c.mm,0)}}function Sa(e){switch(e){case"irrigation":return 0;case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Ea(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const o=i==="admin",n=ve.filter(w=>w.id!==dt);Object.fromEntries(ve.map(w=>[w.id,w]));let a=null,s=null;const c={};let p="carte",r="pluie",d="7 derniers jours",b="all";function $(w){if(r==="irrigation")return wa(w,d);const E=`${w}-${r}-${d}`;return E in c||(c[E]=Sa(r)),c[E]}function l(){return o?b==="all"?le:b===String(dt)?le.filter(w=>w.orgId===dt):le.filter(w=>String(w.orgId)===b):le.filter(w=>w.orgId===1)}function u(){if(a){try{a.remove()}catch{}a=null,s=null}}function f(){u();const w=Mt.find(g=>g.id===r)||Mt[0],E=l(),S=o?`
      <select class="m-filter-select" id="org-filter" style="flex:0 0 44px;height:44px">
        <option value="all">Toutes les organisations</option>
        <option value="${dt}"${b===String(dt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${n.map(g=>`<option value="${g.id}"${b===String(g.id)?" selected":""}>${g.name}</option>`).join("")}
      </select>`:"",M=[...E].sort((g,A)=>{const I=ut(g,r),q=ut(A,r);return I&&!q?-1:!I&&q?1:I?$(A.id)-$(g.id):0}),y=M.length?`<div class="m-plain-list">${M.map(g=>{const A=[g.crop,g.irrigation].filter(Boolean).join(" · "),I=ut(g,r),q=ne.filter(j=>j.parcelIds.includes(g.id)).some(j=>j.event&&(Array.isArray(j.event)?j.event.length>0:!0));return`
            <div class="m-plain-row m-tappable" data-plot-id="${g.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${g.name}${q?' <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px"></span>':""}</span>
                ${A?`<span class="m-plain-city">${A}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                ${(()=>{const j=I&&!(r==="irrigation"&&!ce.some(v=>v.plotId===g.id)),T=j?$(g.id):null;return`<span class="m-plain-data${j?"":" m-plain-na"}"${j?` style="color:${Ki(r,T)}"`:""}>${j?`${T} ${w.unit}`:"—"}</span>`})()}
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
            ${Mt.map(g=>`<option value="${g.id}"${g.id===r?" selected":""}>${g.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${w.aggs.map(g=>`<option${g===d?" selected":""}>${g}</option>`).join("")}
          </select>
        </div>
        ${S}
      </div>
      ${p==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${y}</div>`}`,h(),p==="carte"&&m(E,w)}function m(w,E){const S=window.L;S&&setTimeout(()=>{const M=t.querySelector("#parcel-map");if(!M)return;a=S.map(M,{zoomControl:!1,attributionControl:!1}),S.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(a);const y=[];w.forEach(g=>{var L;const A=r!=="irrigation"||ce.some(D=>D.plotId===g.id),I=ut(g,r)&&A?`${$(g.id)} ${E.unit}`:"—",q=ne.filter(D=>D.parcelIds.includes(g.id)).map(D=>D.id),j=()=>mi(g,q),T=[g.lat,g.lng],v=ut(g,r)&&A,k=v?Ki(r,$(g.id)):"#0172A4";g.latlngs&&g.latlngs.length>=3?(S.polygon(g.latlngs,{color:"#fff",weight:2,fillColor:k,fillOpacity:.35}).addTo(a).on("click",j),y.push(...g.latlngs)):y.push(T);const C=S.circleMarker(T,{radius:v?8:6,color:"#fff",weight:2,fillColor:k,fillOpacity:v?.95:.4}).addTo(a);if(q.some(D=>{const P=ne.find(z=>z.id===D);return(P==null?void 0:P.event)&&(Array.isArray(P.event)?P.event.length>0:!0)})&&S.marker(T,{icon:S.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(a),v){C.bindTooltip(I,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const D=z=>{if(!z)return;const F=$a(k);z.style.setProperty("background",k,"important"),z.style.setProperty("color",F,"important"),z.style.setProperty("border-color",F,"important"),z.style.setProperty("box-shadow","none","important")},P=(L=C.getTooltip())==null?void 0:L.getElement();P&&D(P),C.on("tooltipopen",z=>D(z.tooltip.getElement()))}C.on("click",j)}),y.length&&(s=y,a.fitBounds(y,{padding:[32,32]})),a.invalidateSize()},0)}window.addEventListener("m-tab-change",w=>{w.detail==="parcelles"&&p==="carte"&&a&&setTimeout(()=>{a.invalidateSize(),s!=null&&s.length&&a.fitBounds(s,{padding:[32,32]})},50)});function h(){var w,E,S;t.querySelectorAll(".m-view-btn").forEach(M=>M.addEventListener("click",()=>{p=M.dataset.view,f()})),(w=t.querySelector("#metric-sel"))==null||w.addEventListener("change",M=>{var y;r=M.target.value,d=((y=Mt.find(g=>g.id===r))==null?void 0:y.defaultAgg)||"",f()}),(E=t.querySelector("#agg-sel"))==null||E.addEventListener("change",M=>{d=M.target.value,f()}),(S=t.querySelector("#org-filter"))==null||S.addEventListener("change",M=>{b=M.target.value,f()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(M=>{M.addEventListener("click",()=>{const y=le.find(A=>A.id===+M.dataset.plotId);if(!y)return;const g=ne.filter(A=>A.parcelIds.includes(y.id)).map(A=>A.id);mi(y,g)})})}f()}const Ee={djMin:0,djMax:18,hfSeuil:7.2},ka={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"}},It="weenat-m-dash",Zi=4,La={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},Ca={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"},bi={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Aa={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"};function $i(e){return e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[15,60]:e==="CHP-60/90"?[15,90]:null}function Xi(e,i){const t=bi[e.model]?`${bi[e.model]} · ${e.model}`:e.model,o=$i(e.model)&&e.depth!=null?`${e.depth} cm`:null;return[t,o,i].filter(Boolean).join(" · ")}const yt={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function Is(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(o,n)=>{const a=n/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,s))})}const Ts={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Ma(e,i,t,o,n,a=20){const s=Ts[e]||10080,c=new Date,p=$=>e==="1d"||e==="hier"?`${String($.getHours()).padStart(2,"0")}h`:e==="365d"?$.toLocaleDateString("fr-FR",{month:"short"}):`${String($.getDate()).padStart(2,"0")}/${String($.getMonth()+1).padStart(2,"0")}`,r=4,d=i-t-o,b=n-a;return Array.from({length:r+1},($,l)=>{const u=l/r,f=new Date(c.getTime()-(1-u)*s*6e4),m=(t+u*d).toFixed(1),h=l===0?"start":l===r?"end":"middle";return[`<line x1="${m}" y1="${b}" x2="${m}" y2="${b+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${m}" y="${n-3}" text-anchor="${h}" font-size="9" fill="#8e8e93" font-family="-apple-system">${p(f)}</text>`].join("")}).join("")}function Ia(e,i,t,o="7d",n=""){const a=js[o]||60,s=Is(e,a),c=320,p=100,r=34,d=6,b=10,$=20,l=c-r-d,u=p-b-$,f=t?0:Math.min(...s),m=Math.max(...s,f+.001),h=m-f,w=v=>r+v/(s.length-1)*l,E=v=>b+u-(v-f)/h*u,S=`g${Math.random().toString(36).slice(2,8)}`,M=[0,.5,1].map(v=>{const k=f+v*h,C=b+u-v*u;return`<text x="${r-3}" y="${(C+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${k<10?k.toFixed(1):Math.round(k)}</text>`}).join(""),y=[.25,.5,.75].map(v=>`<line x1="${r}" y1="${(b+u-v*u).toFixed(1)}" x2="${c-d}" y2="${(b+u-v*u).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),g=`<line x1="${r}" y1="${b+u}" x2="${c-d}" y2="${b+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,A=Ma(o,c,r,d,p);if(t){const v=l/s.length*.7;return`<svg viewBox="0 0 ${c} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      ${M}${y}${g}
      ${s.map((k,C)=>{const x=(k-f)/h*u,L=b+u-x;return`<rect x="${(w(C)-v/2).toFixed(1)}" y="${L.toFixed(1)}" width="${v.toFixed(1)}" height="${x.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${A}
    </svg>`}const I=s.map((v,k)=>[w(k),E(v)]),q=I.map(([v,k],C)=>`${C?"L":"M"}${v.toFixed(1)},${k.toFixed(1)}`).join(" "),j=`${q} L${w(s.length-1).toFixed(1)},${(b+u).toFixed(1)} L${r},${(b+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(v=>+v.toFixed(2)),minV:+f.toFixed(2),maxV:+m.toFixed(2)}))}" data-color="${i}" data-unit="${n}" style="position:relative">
    <svg viewBox="0 0 ${c} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      <defs><linearGradient id="${S}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${M}${y}${g}
      <path d="${j}" fill="url(#${S})"/>
      <path d="${q}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${I.map(([v,k])=>`<circle cx="${v.toFixed(1)}" cy="${k.toFixed(1)}" r="2" fill="${i}"/>`).join("")}
      ${A}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Ta(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function ja(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,o=e.querySelector(".m-chart-tip"),n=e.querySelector(".m-chart-crosshair"),a=e.dataset.color||"#0172A4",s=e.dataset.unit||"";function c(r){const d=e.getBoundingClientRect(),b=Math.max(0,Math.min(1,(r-d.left)/d.width)),$=Math.round(b*(t.length-1)),l=t[$],u=b*100,f=(l<10?l.toFixed(1):String(Math.round(l)))+(s?` ${s}`:""),m=Ta(a);n.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${u}%;width:1px;background:${a};opacity:.5`,o.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(u,75)}%;background:${a};color:${m};border:1.5px solid ${m};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,o.textContent=f}function p(){n.style.display="none",o.style.display="none"}e.addEventListener("pointermove",r=>{r.preventDefault(),c(r.clientX)}),e.addEventListener("pointerdown",r=>c(r.clientX)),e.addEventListener("pointerup",p),e.addEventListener("pointerleave",p),e.style.cursor="crosshair"}const js={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function qa(e,i,t){if(!t)return"";const o=js[i]||60,a=(Ts[i]||10080)/(o*60),s=Is(e,o);let c=[];if(t==="temp"){const p=s.reduce((d,b)=>d+Math.max(0,Math.min(b,Ee.djMax)-Ee.djMin),0)*(a/24),r=s.filter(d=>d<Ee.hfSeuil).length*a;c=[{label:"Degrés jours",val:`${Math.round(p)} DJ`,metricId:"dj",thresholdText:`${Ee.djMin}°C → ${Ee.djMax}°C`},{label:"Heures de froid",val:`${Math.round(r)} h`,metricId:"hf",thresholdText:`< ${Ee.hfSeuil}°C`}]}else if(t==="pluie")c=[{label:"Cumul pluie",val:`${s.reduce((r,d)=>r+d,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const p=s.filter(r=>r>120).length*a;c=[{label:"Ensoleillement",val:`${Math.round(p)} h`,metricId:"rayo"}]}else if(t==="hws"){const p=s.filter(r=>r>50).length*a;c=[{label:"Heures d'humectation",val:`${Math.round(p)} h`,metricId:"humec"}]}return c.length?`<div class="m-chart-cumuls">${c.map(p=>{const r=p.metricId==="dj"||p.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${p.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${p.label}</span>
          ${p.thresholdText?`<span class="m-chart-cumul-thresh">${p.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${p.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${r}
        <button class="m-cumul-add-btn" data-cumul-label="${p.label}" data-cumul-val="${p.val}" data-cumul-metric-id="${p.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}function Pa(e,i="7d",t="1h"){const o=yt[e.model]||[];if(!o.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const n={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},a={temp:"temperature"},s=new Set(["tseche","thumide"]),c=o.map(d=>{const b=n[d.id]||d.id,$=qa(d.id,i,d.cumulsType),l=s.has(d.id)?"":`<button class="m-msr-add-btn" data-msr-metric-id="${a[d.id]||d.id}" data-msr-label="${d.label}" data-msr-unit="${d.unit||""}" data-msr-color="${d.color}" data-msr-period="${i}" data-msr-step="${t}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`;return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${d.color}">${d.label}</span>
          ${l}
        </div>
        ${Ia(d.id,d.color,d.cumul,i,d.unit||"")}
        <div class="m-chart-details-link" data-metric-id="${b}">Voir détails →</div>
        ${$}
      </div>`}).join(""),p=new Date().toISOString().slice(0,10),r=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-from m-custom-date" value="${r}">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to m-custom-date" value="${p}">
      </div>`:""}
    </div>
    <div class="m-detail-section">${c}</div>`}function Da(e){var p;const i=(e.parcelIds||[]).map(r=>le.find(d=>d.id===r)).filter(Boolean),t=i[0]||null,o=t?ve.find(r=>r.id===t.orgId):null,n=e.networkQuality||0,a=n>70?"#30d158":n>40?"#ff9f0a":"#ff3b30",s=e.event?Array.isArray(e.event)?e.event:[e.event]:[],c=i.map((r,d)=>`<div class="m-list-row${d===i.length-1&&i.length>0,""}" data-unlink-plot="${r.id}">
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
          <span class="m-list-row-value">${Aa[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${bi[e.model]||e.model}</span>
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
          <span class="m-list-row-value">${(o==null?void 0:o.name)||"—"}</span>
        </div>
      </div>

      ${(()=>{const r=$i(e.model);return r?`
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
          <span class="m-list-row-value">${(o==null?void 0:o.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${(t==null?void 0:t.lat)||0},${(t==null?void 0:t.lng)||0}?q=${(t==null?void 0:t.lat)||0},${(t==null?void 0:t.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">Anomalies</div>
      <div class="m-list">
        ${s.length?s.map((r,d)=>{const b=r.toLowerCase().includes("déplacé");return`<div class="m-list-row" style="justify-content:space-between;gap:10px">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${r}</span>
                </div>
                ${b?`<button class="ev-stop-btn" data-ev-idx="${d}" style="flex-shrink:0;background:rgba(255,59,48,.1);border:1px solid #ff3b30;border-radius:8px;padding:5px 10px;font-size:12px;color:#ff3b30;font-family:inherit;cursor:pointer;white-space:nowrap">Arrêter</button>`:""}
              </div>`}).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${a};font-weight:600">${n}%</span>
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
    </div>`}function fi(e,i="donnees",t="admin"){var l;e.parcelIds||(e.parcelIds=[]);const o=e.parcelIds.length?le.find(u=>e.parcelIds.includes(u.id)):null;let n=i,a="7d",s="1h",c=!1;const p=o&&((l=ve.find(u=>u.id===o.orgId))==null?void 0:l.ville)||"",r=ye(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${Xi(e,p)}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres${e.event&&(!Array.isArray(e.event)||e.event.length>0)?' <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px;margin-bottom:1px;flex-shrink:0"></span>':""}</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function d(){const u=r.querySelector("#detail-content");n==="donnees"&&(u.innerHTML=Pa(e,a,s)),n==="params"&&(u.innerHTML=Da(e),b()),$()}function b(){const u=window.L,f=e.parcelIds.length?le.find(m=>e.parcelIds.includes(m.id)):null;!u||!f||setTimeout(()=>{const m=r.querySelector("#sensor-minimap");if(!m)return;const h=u.map(m,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(h),h.setView([f.lat,f.lng],15),u.circleMarker([f.lat,f.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(h)},50)}function $(){var u,f,m,h;(u=r.querySelector(".m-period-sel"))==null||u.addEventListener("change",w=>{a=w.target.value,d()}),(f=r.querySelector(".m-step-sel"))==null||f.addEventListener("change",w=>{s=w.target.value,d()}),r.querySelectorAll(".m-chart-svg-wrap").forEach(w=>ja(w)),r.querySelectorAll(".m-chart-details-link[data-metric-id]").forEach(w=>{w.addEventListener("click",()=>{ge(()=>import("./chart-fullscreen-DxMXOcvR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(E=>E.initChartFullscreen({sensor:e,metricId:w.dataset.metricId,backLabel:"Retour"}))})}),r.querySelectorAll(".m-msr-add-btn").forEach(w=>{w.addEventListener("click",()=>{const E=w.dataset.msrMetricId,S=`s-${e.id}`,M=`${e.model} ${e.serial}`,y=w.dataset.msrPeriod,g=w.dataset.msrStep,A=JSON.parse(localStorage.getItem(It)||"{}"),I=A.mesuresList||[];if(I.length>=Zi){U(`Maximum de mesures atteint (${Zi})`);return}if(I.some(q=>q.subjectKey===S&&q.metricId===E&&q.period===y&&q.step===g)){U("Cette mesure est déjà dans vos favoris");return}I.push({subjectKey:S,subjectLabel:M,metricId:E,metricLabel:w.dataset.msrLabel,unit:w.dataset.msrUnit||"",period:y,periodLabel:La[y]||y,step:g,stepLabel:Ca[g]||g,color:w.dataset.msrColor}),A.mesuresList=I,localStorage.setItem(It,JSON.stringify(A)),U("Mesure ajoutée au tableau de bord")})}),r.addEventListener("click",w=>{const E=w.target.closest(".m-cumul-add-btn");if(E){const M=E.dataset.cumulMetricId,y=E.dataset.cumulVal,g=ka[M];if(!g)return;const A=`${e.model} ${e.serial}`,I=document.createElement("div");I.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${g.metricLabel}</strong> (<em>${y}</em>) au tableau de bord du capteur <strong>${e.serial}</strong> ?</div>`,de({title:"Tableau de bord",body:I,doneLabel:"Ajouter",onDone:()=>{const q=JSON.parse(localStorage.getItem(It)||"{}"),j=q.cumulsList||[];if(j.length>=5){U("Maximum de cumuls atteint (5)");return}const T=M==="hf"?{cold:Ee.hfSeuil}:M==="dj"?{low:Ee.djMin,high:Ee.djMax}:null;j.push({metricId:M,...g,subjectKey:`s-${e.id}`,subjectLabel:A,fromDate:`${new Date().getFullYear()}-01-01`,value:y,thresholds:T}),q.cumulsList=j,localStorage.setItem(It,JSON.stringify(q)),U("Cumul ajouté au tableau de bord")}});return}const S=w.target.closest(".m-cumul-edit-btn");if(S){const M=S.dataset.cumulMetricId,y=document.createElement("div");M==="hf"?(y.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Ee.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,de({title:"Heures de froid",body:y,doneLabel:"Appliquer",onDone:()=>{var g;Ee.hfSeuil=+(((g=y.querySelector("#edit-hf-seuil"))==null?void 0:g.value)??7.2),d()}})):M==="dj"&&(y.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Ee.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Ee.djMax}" step="1" min="-20" max="50">
          </div>`,de({title:"Degrés-jours",body:y,doneLabel:"Appliquer",onDone:()=>{var g,A;Ee.djMin=+(((g=y.querySelector("#edit-dj-min"))==null?void 0:g.value)??0),Ee.djMax=+(((A=y.querySelector("#edit-dj-max"))==null?void 0:A.value)??18),d()}}))}}),r.querySelectorAll(".m-list-row[data-action]").forEach(w=>{w.addEventListener("click",()=>{const E=w.dataset.action;if(E==="add-maintenance")Qi(e,{openForm:!0});else if(E==="add-plot")za(e,t,d);else if(E==="delete"){const S=le.find(M=>{var y;return(y=e.parcelIds)==null?void 0:y.includes(M.id)});ft({title:"Retirer de l'exploitation",message:`Retirer <strong>${e.model} ${e.serial}</strong> de l'exploitation ?${S?`<br><br>Parcelle liée : <strong>${S.name}</strong>.`:""}<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>U("Capteur retiré de l'exploitation (fonctionnalité à venir)")})}else U("Fonctionnalité à venir")})}),r.querySelectorAll(".ev-stop-btn").forEach(w=>{w.addEventListener("click",E=>{E.stopPropagation();const S=+w.dataset.evIdx;Array.isArray(e.event)?(e.event=e.event.filter((M,y)=>y!==S),e.event.length||(e.event=null)):e.event=null,d()})}),r.querySelectorAll("[data-unlink-plot-btn]").forEach(w=>{w.addEventListener("click",E=>{E.stopPropagation();const S=+w.dataset.unlinkPlotBtn,M=le.find(y=>y.id===S);ft({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${(M==null?void 0:M.name)||"la parcelle"}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(y=>y!==S),U(`Délié de ${(M==null?void 0:M.name)||"la parcelle"}`),d()}})})}),(m=r.querySelector("#sensor-name-input"))==null||m.addEventListener("change",w=>{const E=w.target.value.trim();try{const M=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};E?M[e.id]=E:delete M[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(M))}catch{}const S=r.querySelector(".m-detail-title");S&&(S.textContent=E||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))}),(h=r.querySelector("#chp-depth-save"))==null||h.addEventListener("click",()=>{const w=r.querySelector("#chp-depth-input"),E=$i(e.model);if(!w||!E)return;let S=parseInt(w.value);if(isNaN(S))return;S=Math.max(E[0],Math.min(E[1],S)),w.value=S,e.depth=S;const M=r.querySelector(".m-detail-subtitle");M&&(M.textContent=Xi(e,p)),U(`Profondeur enregistrée : ${S} cm`)})}r.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{r.querySelectorAll(".m-detail-tab").forEach(f=>f.classList.remove("active")),u.classList.add("active"),n=u.dataset.view,d()})}),r.querySelector(".m-detail-back").addEventListener("click",me),r.querySelector("#d-star").addEventListener("click",()=>{c=!c;const u=r.querySelector("#d-star");u.querySelector("i").className=c?"bi bi-star-fill":"bi bi-star",u.style.color=c?"#f5c842":"",U(c?"Ajouté aux favoris":"Retiré des favoris")}),r.querySelector("#d-journal").addEventListener("click",()=>Qi(e)),r.querySelector("#d-plus").addEventListener("click",()=>{var u;return(u=window.showMobileAddPage)==null?void 0:u.call(window)}),d()}const qs=e=>`sensor-journal-${e}`,Ps=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function hi(e){try{const i=localStorage.getItem(qs(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",role:"conseiller",texte:""},{id:2,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",role:"conseiller",texte:""},{id:3,type:"note",date:"2023-11-02",user:"Jean Dupont",role:"membre",texte:"Capteur légèrement déplacé — redressé"}]}function Ds(e,i){localStorage.setItem(qs(e),JSON.stringify(i))}function za(e,i,t){const o=i==="adherent"?1:null,n=o?le.filter(r=>r.orgId===o):le.filter(r=>r.orgId!==100),a=new Set((yt[e.model]||[]).map(r=>r.id)),s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function c(r=""){const d=r.toLowerCase(),b=d?n.filter(l=>l.name.toLowerCase().includes(d)||(l.crop||"").toLowerCase().includes(d)):n,$=s.querySelector("#plot-list");if(!b.length){$.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}$.innerHTML="",b.forEach((l,u)=>{const f=e.parcelIds.includes(l.id),m=u===b.length-1,h=document.createElement("div");h.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${m?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,h.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${l.name}</span>
          ${l.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${l.crop}</span>`:""}
        </span>
        ${f?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,h.addEventListener("click",()=>{if(f)ft({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${l.name}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(w=>w!==l.id),U(`Délié de ${l.name}`),c(r),t()}});else{const w=ne.find(E=>E.id!==e.id&&E.parcelIds.includes(l.id)&&(yt[E.model]||[]).some(S=>a.has(S.id)));w?(p.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{p.remove(),_a(e,l,w,t)},280)):(e.parcelIds=[...e.parcelIds,l.id],U(`Lié à ${l.name}`),c(r),t())}}),$.appendChild(h)})}c();const p=de({title:"Parcelles liées",body:s,doneLabel:"Fermer",onDone:()=>{t()}});s.querySelector("#plot-search").addEventListener("input",r=>c(r.target.value))}function _a(e,i,t,o){const n=(yt[t.model]||[]).filter(c=>(yt[e.model]||[]).some(p=>p.id===c.id)).map(c=>c.label).join(", "),a=document.createElement("div");a.innerHTML=`
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
    <div style="height:6px"></div>`;const s=de({title:"Conflit de métrique",body:a,doneLabel:"Annuler",onDone:()=>{}});a.querySelector("#keep-existing").addEventListener("click",()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),U("Liaison annulée")},280)}),a.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(c=>c!==i.id),e.parcelIds=[...e.parcelIds,i.id],s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),U(`Lié à ${i.name}`),o()},280)})}function Qi(e,i={}){const t=ye(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",me);const o=Object.fromEntries(Ps.map(a=>[a.id,a]));function n(){var d;const a=t.querySelector("#sjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(b=>b.linkedType==="sensor"&&b.linkedId===e.id).map((b,$)=>({id:`dash-${$}`,type:"note",date:b.date,texte:b.text,user:b.auteur,_fromDashboard:!0})),c=[...hi(e.id),...s].sort((b,$)=>$.date.localeCompare(b.date)),p=b=>{const[$,l,u]=b.split("-");return`${u}/${l}/${$}`};let r=`
      <div style="padding:12px 16px 8px">
        <button class="m-btn m-btn--primary" id="sjrn-add-btn">
          <i class="bi bi-plus-circle-fill"></i> Ajouter une opération de maintenance
        </button>
      </div>
    `;c.length===0?r+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(r+='<div class="m-jrn-timeline">',c.forEach((b,$)=>{const l=o[b.type]||{label:b.type,icon:"bi-circle",color:"#8e8e93"},u=$===c.length-1,f=!!b._fromDashboard;r+=`
          <div class="m-jrn-entry" data-id="${b.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${l.color}18;color:${l.color};border-color:${l.color}40">
                <i class="bi ${l.icon}"></i>
              </div>
              ${u?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${p(b.date)}</span>
                <span style="font-size:12px;font-weight:600;color:${l.color}">${l.label}</span>
                ${f?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${b.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${b.texte?`<div class="m-jrn-texte">${b.texte}</div>`:""}
              ${b.user?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${b.user}${Ha(b.role)}</div>`:""}
            </div>
          </div>`}),r+="</div>"),a.innerHTML=r,(d=a.querySelector("#sjrn-add-btn"))==null||d.addEventListener("click",()=>es(e.id,n)),a.querySelectorAll(".m-jrn-del").forEach(b=>{b.addEventListener("click",()=>{const $=parseInt(b.dataset.id);Ds(e.id,hi(e.id).filter(l=>l.id!==$)),n()})})}n(),i.openForm&&es(e.id,n)}function Ha(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}function es(e,i){const t=new Date().toISOString().slice(0,10),o=document.createElement("div");o.innerHTML=`
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
    </div>`,de({title:"Opération de maintenance",body:o,doneLabel:"Enregistrer",onDone:()=>{const n=o.querySelector("#sjf-type").value,a=o.querySelector("#sjf-date").value||t,s=o.querySelector("#sjf-user").value.trim()||"Jean Dupont",c=localStorage.getItem("menuRole")==="admin-reseau"?"conseiller":"membre",p=o.querySelector("#sjf-texte").value.trim();Ds(e,[{id:Date.now(),type:n,date:a,user:s,role:c,texte:p},...hi(e)]),i()}}),setTimeout(()=>{var n;return(n=o.querySelector("#sjf-texte"))==null?void 0:n.focus()},350)}const Bt=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:fi},Symbol.toStringTag,{value:"Module"})),pt=100,ts=1,si=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Ba={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Fa={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function Tt(e,i){return(Fa[e]||[]).includes(i)}function Oa(e){return Ba[e]||e}function Ra(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const jt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Na(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function is(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"pothydr":return i<80?"#E2EAC7":i<150?"#A6C157":"#7D9537";case"teneur":return i<15?"#F7D2A1":i<30?"#ED9A2C":"#BC7210";case"temp_sol":return i<8?"#D9C6BF":i<18?"#795548":"#484646";case"temp_sche":return i<0?"#9DECDF":i<10?"#23B19B":"#177365";case"temp_hum":return i<0?"#D2DEFA":i<10?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function Va(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Ja(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const o=i==="admin",n=ve.filter(y=>y.id!==pt),a=Object.fromEntries(le.map(y=>[y.id,y])),s=Object.fromEntries(ve.map(y=>[y.id,y]));let c=null,p=null;const r={};let d="carte",b="pluie",$="7 derniers jours",l="all";function u(y){const g=`${y}-${b}-${$}`;return g in r||(r[g]=Va(b)),r[g]}function f(){if(o){if(l==="anomalies")return ne.filter(q=>q.event&&(Array.isArray(q.event)?q.event.length>0:!0));if(l==="all")return ne;if(l===String(pt)){const q=new Set(le.filter(j=>j.orgId===pt).map(j=>j.id));return ne.filter(j=>j.parcelIds.some(T=>q.has(T)))}const I=new Set(le.filter(q=>String(q.orgId)===l).map(q=>q.id));return ne.filter(q=>q.parcelIds.some(j=>I.has(j)))}const y=new Set(le.filter(I=>I.orgId===ts).map(I=>I.id)),g=ne.filter(I=>I.parcelIds.some(q=>y.has(q))),A=ne.filter(I=>!I.parcelIds.some(q=>y.has(q))&&si.includes(I.model));return l==="mine"?g:l==="network"?A:[...g,...A]}function m(y){const g=y.parcelIds.length?a[y.parcelIds[0]]:null;if(!g)return null;const A=(y.id*7919%1e3-500)/1e6,I=(y.id*6271%1e3-500)/1e6;return{lat:g.lat+A,lng:g.lng+I,name:g.name}}function h(y){var A,I;const g=y.parcelIds.length?a[y.parcelIds[0]]:null;return(g?(A=s[g.orgId])==null?void 0:A.ville:null)||((I=s[y.orgId])==null?void 0:I.ville)||null}function w(){if(c){try{c.remove()}catch{}c=null,p=null}}function E(){w();const y=jt.find(T=>T.id===b)||jt[0],g=f();let A;const I=ne.some(T=>T.event&&(Array.isArray(T.event)?T.event.length>0:!0));if(o)A=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${l==="all"?" selected":""}>Toutes les organisations</option>
            ${I?`<option value="anomalies"${l==="anomalies"?" selected":""}>⚠ Anomalies capteurs</option>`:""}
            <option value="${pt}"${l===String(pt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
            ${n.map(T=>`<option value="${T.id}"${l===String(T.id)?" selected":""}>${T.name}</option>`).join("")}
          </select>
        </div>`;else{const T=ve.find(v=>v.id===ts);A=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${l==="all"?" selected":""}>Tous les capteurs du réseau</option>
            <option value="mine"${l==="mine"?" selected":""}>${(T==null?void 0:T.name)||"Mon exploitation"} uniquement</option>
          </select>
        </div>`}const q=[...g].sort((T,v)=>{const k=Tt(T.model,b),C=Tt(v.model,b);return k&&!C?-1:!k&&C?1:k?u(v.id)-u(T.id):0}),j=q.length?`<div class="m-plain-list">${q.map(T=>{const v=si.includes(T.model),k=Tt(T.model,b),C=k?u(T.id):null,x=k?`<span class="m-sensor-val" style="color:${is(b,C)}">${C} ${y.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>',L=T.event&&(Array.isArray(T.event)?T.event.length>0:!0);return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${T.id}">
              <div class="m-sensor-icon" style="position:relative;background:${v?"#0172A420":"#5b8dd920"};color:${v?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
                ${L?'<span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff"></span>':""}
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${Oa(T.model)} - ${T.model}</span>
                <span class="m-sensor-sub">${[h(T),Ra(T)].filter(Boolean).join(" - ")}</span>
                ${L?`<span style="font-size:11px;color:#ff3b30;font-weight:500"><i class="bi bi-exclamation-triangle-fill"></i> ${Array.isArray(T.event)?T.event[0]:T.event}</span>`:""}
              </div>
              ${x}
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
            ${jt.map(T=>`<option value="${T.id}"${T.id===b?" selected":""}>${T.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${y.aggs.map(T=>`<option${T===$?" selected":""}>${T}</option>`).join("")}
          </select>
        </div>
        ${A}
      </div>
      ${d==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${j}</div>`}`,M(),d==="carte"&&S(g,y)}function S(y,g){const A=window.L;A&&setTimeout(()=>{const I=t.querySelector("#sensor-map");if(!I)return;c=A.map(I,{zoomControl:!1,attributionControl:!1}),A.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(c);const q=[];y.forEach(j=>{var L;const T=m(j);if(!T)return;const v=Tt(j.model,b),k=si.includes(j.model),C=v?is(b,u(j.id)):k?"#0172A4":"#5b8dd9",x=A.circleMarker([T.lat,T.lng],{radius:v?10:7,color:"#fff",weight:2,fillColor:C,fillOpacity:v?.95:.45}).addTo(c);if(v){x.bindTooltip(`${u(j.id)} ${g.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const D=z=>{if(!z)return;const F=Na(C);z.style.setProperty("background",C,"important"),z.style.setProperty("color",F,"important"),z.style.setProperty("border-color",F,"important"),z.style.setProperty("box-shadow","none","important")},P=(L=x.getTooltip())==null?void 0:L.getElement();P&&D(P),x.on("tooltipopen",z=>D(z.tooltip.getElement()))}x.on("click",()=>fi(j,"donnees",i)),j.event&&(!Array.isArray(j.event)||j.event.length>0)&&A.marker([T.lat,T.lng],{icon:A.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(c),q.push([T.lat,T.lng])}),q.length&&(p=q,c.fitBounds(q,{padding:[32,32]})),c.invalidateSize()},0)}window.addEventListener("m-tab-change",y=>{y.detail==="capteurs"&&(E(),d==="carte"&&c&&setTimeout(()=>{c.invalidateSize(),p!=null&&p.length&&c.fitBounds(p,{padding:[32,32]})},50))});function M(){var y,g,A;t.querySelectorAll(".m-view-btn").forEach(I=>I.addEventListener("click",()=>{d=I.dataset.view,E()})),(y=t.querySelector("#metric-sel"))==null||y.addEventListener("change",I=>{var q;b=I.target.value,$=((q=jt.find(j=>j.id===b))==null?void 0:q.defaultAgg)||"",E()}),(g=t.querySelector("#agg-sel"))==null||g.addEventListener("change",I=>{$=I.target.value,E()}),(A=t.querySelector("#org-filter"))==null||A.addEventListener("change",I=>{l=I.target.value,E()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(I=>{I.addEventListener("click",()=>{const q=ne.find(j=>j.id===+I.dataset.sensorId);q&&fi(q,"donnees",i)})})}E(),window.addEventListener("weenat-sensor-renamed",()=>{d==="liste"&&E()})}const Wa=["Essentiel","Plus","Expert"],Ga=["Administrateur","Agent","Lecteur"],ss=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function Ua(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function Ya(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function ns({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function qt(e){if(!e)return"—";const[i,t,o]=e.split("-");return`${o}/${t}/${i}`}function as(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let o=11;o>=0;o--){const n=new Date(i.getFullYear(),i.getMonth()-o,1),a=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),c=o>0?o===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${a}-${s}`,dateEmission:`${a}-${s}-01`,montant:n.getMonth()===11?1980:t[o%t.length],statut:c})}return e.reverse()}function Ka(e,i){var T;if(!e)return{};const t=i==="admin",o=i==="new-member-admin"||i==="new-member-agent"||i==="new-member-reader",n=i!=="new-member-reader",a=t?[{id:"100",name:"Breiz'Agri Conseil"},{id:"42",name:"Exploitation Dupont"}]:o?[]:[{id:"1",name:"Ferme du Bocage"},{id:"dutilleul",name:"Exploitation Dutilleul"}];let s=((T=a[0])==null?void 0:T.id)??null;const c=ve.find(v=>v.id===(t?Wt:Si));if(!c)return{};const r=(t?Gt.filter(v=>{var k;return!((k=v.orgIds)!=null&&k.length)||v.orgIds.includes(Wt)}):Gt.filter(v=>{var k;return(k=v.orgIds)==null?void 0:k.includes(Si)})).filter(v=>v.statut!=="inactif").map(v=>({...v})),d=ve.filter(v=>v.id!==Wt&&v.statut!=="inactif").length,b=Ya(c.adresse||""),$={rue:"",cp:"",ville:""},l={name:c.name,siret:c.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:b,adresseLivrai:$,pays:"France",markerLat:c.lat||48.117,markerLng:c.lng||-1.678,plan:c.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":c.codeAdherent||"CTR-2022-00418",dateAdhesion:c.dateAdhesion||"2022-03-15",licencesMembres:t?Gt.length:3,licencesAdherents:t?d:null,licencesIntegrations:t?27:2}};let u=null,f=null;function m(){if(!f)return;const v=e.querySelector(`#${f}`);if(!v)return;if(u){try{u.remove()}catch{}u=null}const k=window.L;k&&(u=k.map(v,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),k.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(u),u.setView([l.markerLat,l.markerLng],14),k.marker([l.markerLat,l.markerLng],{draggable:!1}).addTo(u),setTimeout(()=>u==null?void 0:u.invalidateSize(),50))}function h(){if(f=`expl-map-${Math.random().toString(36).slice(2,8)}`,u){try{u.remove()}catch{}u=null}const v=ns(l.adresseFactu)||"—",k=ns(l.adresseLivrai),C=t?as():[],x=C.slice(0,3),L=C.length>3,D=r.slice(0,3),P=r.length>3;function z(F,O){const Y=F.statut==="payée"?"#30d158":"#ff9f0a",te=F.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${O?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${F.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${F.numero}</span>
            <span class="m-list-row-sub">${qt(F.dateEmission)} · ${F.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${Y};flex-shrink:0;margin-right:4px">${te}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}e.innerHTML=`
      ${a.length>1?`
      <div style="padding:12px 16px 4px">
        <select id="org-selector" style="width:100%;padding:10px 14px;border-radius:10px;border:1.5px solid #e5e5ea;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e;cursor:pointer">
          ${a.map(F=>`<option value="${F.id}"${F.id===s?" selected":""}>${F.name}</option>`).join("")}
        </select>
      </div>
      `:""}
      <div class="m-list-section-header" style="margin-top:16px">Exploitation</div>
      <div class="m-list">
        <div class="m-list-row" data-action="name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${l.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="metier" style="align-items:flex-start;padding-top:12px;padding-bottom:12px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Métiers</span>
            ${l.metiers.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">${l.metiers.map(F=>`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:4px;padding:2px 8px;font-size:12px;font-weight:500">${F}</span>`).join("")}</div>`:'<div style="font-size:13px;color:#8e8e93;margin-top:4px">—</div>'}
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Adresses</div>
      <div class="m-list">
        <div class="m-list-row" data-action="adresse-factu">
          <span class="m-list-row-label">Facturation</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${v}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${k||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="pays">
          <span class="m-list-row-label">Pays</span>
          <span class="m-list-row-value">${l.pays}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="siret">
          <span class="m-list-row-label">SIRET</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:12px">${l.siret||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation</div>
      <div id="${f}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${l.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${qt(l.contrat.dateAdhesion)}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Licences membres</span>
          <span class="m-list-row-value">${l.contrat.licencesMembres}</span>
        </div>
        ${l.contrat.licencesAdherents!=null?`
        <div class="m-list-row">
          <span class="m-list-row-label">Adhérents actifs</span>
          <span class="m-list-row-value">${l.contrat.licencesAdherents}</span>
        </div>`:""}
        <div class="m-list-row">
          <span class="m-list-row-label">Licences intégrations</span>
          <span class="m-list-row-value">${l.contrat.licencesIntegrations}</span>
        </div>
        <div class="m-list-row m-list-row--last" ${t?'data-action="plan"':""}>
          <span class="m-list-row-label">Abonnement</span>
          <span class="m-list-row-value" style="color:#0172A4;font-weight:600">${l.plan}</span>
          ${t?'<i class="bi bi-chevron-right m-list-chevron"></i>':""}
        </div>
      </div>

      ${t?`
      <div class="m-list-section-header">Factures</div>
      <div class="m-list">
        ${x.map((F,O)=>z(F,!L&&O===x.length-1)).join("")}
        ${L?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${C.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${r.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${r.length?[...D.map((F,O)=>`
            <div class="m-list-row${!P&&O===D.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${O}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${F.prenom} ${F.nom}</span>
                <span class="m-list-row-sub">${F.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),P?`
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
          ${ss.slice(0,5).map((F,O)=>`
            <div class="m-list-row${O===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${Ua(F.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${F.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${F.distance} km · ${F.capteurs} capteurs · ${F.parcelles} parcelles</div>
                <button class="m-join-net-btn" data-net-idx="${O}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
              </div>
            </div>`).join("")}
        </div>
      </div>
      `}
      ${o?`
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
      <div style="height:32px"></div>`,w()}function w(){var v,k,C,x;(v=e.querySelector("#org-selector"))==null||v.addEventListener("change",L=>{s=L.target.value;const D=a.find(P=>P.id===s);D&&(l.name=D.name,h())}),e.querySelectorAll(".m-list-row[data-action]").forEach(L=>{L.addEventListener("click",()=>{if(n)switch(L.dataset.action){case"name":E("Nom de l'exploitation",l.name,D=>{l.name=D,h()});break;case"siret":E("SIRET",l.siret,D=>{l.siret=D,h()});break;case"metier":M();break;case"adresse-factu":S("Adresse de facturation",l.adresseFactu,D=>{l.adresseFactu=D,h()});break;case"adresse-livrai":S("Adresse de livraison",l.adresseLivrai,D=>{l.adresseLivrai=D,h()});break;case"pays":E("Pays",l.pays,D=>{l.pays=D,h()});break;case"plan":y("Abonnement",Wa,l.plan,D=>{l.plan=D,h()});break;case"facture":U(`PDF ${L.dataset.factureId} téléchargé`);break;case"voir-factures":I();break;case"voir-membres":A();break}})}),e.querySelectorAll("[data-member-idx]").forEach(L=>{L.addEventListener("click",()=>g(+L.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(L=>{L.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach(P=>{const z=P===L;P.style.background=z?"#fff":"transparent",P.style.color=z?"#000":"#8e8e93"});const D=L.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=D==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=D==="independante"?"":"none"})}),(k=e.querySelector("#btn-ajouter-membre"))==null||k.addEventListener("click",q),(C=e.querySelector("#btn-quitter-reseau"))==null||C.addEventListener("click",()=>{const L=document.createElement("div");L.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,de({title:"Quitter le réseau ?",body:L,doneLabel:"Confirmer",onDone:()=>U("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(L=>{L.addEventListener("click",()=>{const D=ss[+L.dataset.netIdx];U(`Demande envoyée à ${D.name}`)})}),e.querySelectorAll(".m-exploit-tab").forEach(L=>{L.addEventListener("click",()=>{e.querySelectorAll(".m-exploit-tab").forEach(P=>{const z=P===L;P.style.background=z?"#fff":"transparent",P.style.color=z?"#000":"#8e8e93"});const D=e.querySelector("#default-exploit-panel");D&&(D.style.display=L.dataset.exploitTab==="membre"?"":"none")})}),(x=e.querySelector("#btn-use-default-exploit"))==null||x.addEventListener("click",()=>{U("Exploitation Jourdain sélectionnée")})}function E(v,k,C){const x=document.createElement("div");x.innerHTML=`<input class="m-sheet-input" type="text" value="${(k||"").replace(/"/g,"&quot;")}" placeholder="${v}">`;const L=x.querySelector("input");de({title:v,body:x,doneLabel:"Enregistrer",onDone:()=>{const D=L.value.trim();D&&(C(D),U("Enregistré"))}}),setTimeout(()=>L.focus(),300)}function S(v,k,C){const x=document.createElement("div");x.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(k.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${k.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(k.ville||"").replace(/"/g,"&quot;")}">`,de({title:v,body:x,doneLabel:"Enregistrer",onDone:()=>{C({rue:x.querySelector("#f-rue").value.trim(),cp:x.querySelector("#f-cp").value.trim(),ville:x.querySelector("#f-ville").value.trim()}),U("Enregistré")}}),setTimeout(()=>x.querySelector("#f-rue").focus(),300)}function M(){const v=new Set(l.metiers),k=document.createElement("div"),C=()=>{k.innerHTML=ls.map(x=>`
        <div class="m-sheet-option${v.has(x)?" m-sheet-option--active":""}" data-m="${x}" style="justify-content:space-between">
          <span>${x}</span>
          ${v.has(x)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),k.querySelectorAll("[data-m]").forEach(x=>{x.addEventListener("click",()=>{const L=x.dataset.m;v.has(L)?v.delete(L):v.add(L),C()})})};C(),de({title:"Métiers",body:k,doneLabel:"Valider",onDone:()=>{l.metiers=[...v],h()}})}function y(v,k,C,x){const L=document.createElement("div");L.innerHTML=k.map((P,z)=>`
      <div class="m-sheet-option${P===C?" m-sheet-option--active":""}" data-i="${z}">
        <span>${P}</span>${P===C?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const D=de({title:v,body:L,doneLabel:"Fermer",onDone:()=>{}});L.querySelectorAll(".m-sheet-option").forEach(P=>{P.addEventListener("click",()=>{x(k[+P.dataset.i]),D.classList.remove("m-sheet-overlay--show"),setTimeout(()=>D.remove(),280),U("Enregistré")})})}function g(v,k){const C=r[v];if(!C)return;const x=document.createElement("div");x.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${C.role}</span></div>
        ${C.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${C.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${C.prenom} ${C.nom}</a>
      </div>`;const L=de({title:`${C.prenom} ${C.nom}`,body:x,doneLabel:"Fermer",onDone:()=>{}});x.querySelector("#mem-delete").addEventListener("click",()=>{r.splice(v,1),L.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{L.remove(),h(),U("Membre retiré"),k==null||k()},280)})}function A(){let v="",C=20;function x(){if(!v)return r;const z=v.toLowerCase();return r.filter(F=>`${F.prenom} ${F.nom}`.toLowerCase().includes(z)||(F.email||"").toLowerCase().includes(z)||(F.role||"").toLowerCase().includes(z))}const L=ye(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),D=L.querySelector("#mbr-list-content");function P(){var Y;const z=x(),F=z.slice(0,C),O=z.length-F.length;D.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${z.length} membre${z.length!==1?"s":""}${v?" trouvé"+(z.length!==1?"s":""):" actif"+(z.length!==1?"s":"")}</div>
        <div class="m-list">
          ${F.length?F.map((te,be)=>`<div class="m-list-row${be===F.length-1&&O===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${r.indexOf(te)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${te.prenom} ${te.nom}</span>
                <span class="m-list-row-sub">${te.role}${te.email?" · "+te.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${O>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${O} de plus</span>
            </div>`:""}
          ${z.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,D.querySelectorAll("[data-mbr-idx]").forEach(te=>{te.addEventListener("click",()=>g(+te.dataset.mbrIdx,P))}),(Y=D.querySelector("#mbr-load-more"))==null||Y.addEventListener("click",()=>{C+=20,P()})}L.querySelector(".m-detail-back").addEventListener("click",me),L.querySelector("#mbr-invite-btn").addEventListener("click",q),L.querySelector("#mbr-search").addEventListener("input",z=>{v=z.target.value,C=20,P()}),P()}function I(){const v=as();let k="";function C(){if(!k)return v;const P=k.toLowerCase();return v.filter(z=>z.numero.toLowerCase().includes(P)||z.statut.toLowerCase().includes(P)||String(z.montant).includes(P))}const x=ye(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),L=x.querySelector("#fac-list-content");function D(){const P=C();L.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${P.length} facture${P.length!==1?"s":""}</div>
        <div class="m-list">
          ${P.length?P.map((z,F)=>{const O=z.statut==="payée"?"#30d158":"#ff9f0a",Y=z.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${F===P.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${z.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${z.numero}</span>
                <span class="m-list-row-sub">${qt(z.dateEmission)} · ${z.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${O};flex-shrink:0;margin-right:4px">${Y}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,L.querySelectorAll("[data-fac-id]").forEach(z=>{z.addEventListener("click",()=>U(`PDF ${z.dataset.facId} téléchargé`))})}x.querySelector(".m-detail-back").addEventListener("click",me),x.querySelector("#fac-search").addEventListener("input",P=>{k=P.target.value,D()}),D()}function q(){const v=document.createElement("div");v.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${Ga.map(k=>`<option>${k}</option>`).join("")}
      </select>`,de({title:"Ajouter un membre",body:v,doneLabel:"Inviter",onDone:()=>{v.querySelector("#inv-email").value.trim()&&U("Invitation envoyée")}}),setTimeout(()=>v.querySelector("#inv-email").focus(),300)}h();function j(){requestAnimationFrame(()=>setTimeout(m,100))}return{onAdd:null,refresh:j}}const Za=100,Xa=["Essentiel","Plus","Expert"],Qa={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function ni(e){return Qa[e]||{label:e||"—",color:"#8e8e93"}}function eo(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=ve.filter(l=>l.id!==Za&&l.statut!=="inactif").map(l=>({...l})),o={...He,siege:{...He.siege},antennes:He.antennes.map(l=>({...l}))},n={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function a(l,u,f,m){return l.slice(u,f).map((h,w)=>{const E=u+w,S=ni(h.statut),M=h.statut==="demande en attente";return`
        <div class="m-list-row${E===m?" m-list-row--last":""} m-tappable" data-org-idx="${E}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${h.proprietaire||h.name}</span>
            <span class="m-list-row-sub">${h.name} · ${h.plan||"—"}</span>
          </div>
          ${M?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${E}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${E}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${S.color};flex-shrink:0;margin-right:4px">${S.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function s(){let l="",f=20;function m(){if(!l)return t;const S=l.toLowerCase();return t.filter(M=>(M.proprietaire||M.name||"").toLowerCase().includes(S)||(M.name||"").toLowerCase().includes(S)||(M.email||"").toLowerCase().includes(S)||(M.codeAdherent||"").toLowerCase().includes(S))}const h=ye(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),w=h.querySelector("#adh-list-content");function E(){var A;const S=m(),M=S.slice(0,f),y=S.length-M.length,g=S.filter(I=>I.statut==="actif"||I.statut==="actif en essai").length;w.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${l?S.length+" résultat"+(S.length!==1?"s":""):g+" actif"+(g!==1?"s":"")+" · "+S.length+" total"}</div>
        <div class="m-list">
          ${M.length?M.map((I,q)=>{const j=t.indexOf(I),T=ni(I.statut),v=I.statut==="demande en attente";return`
              <div class="m-list-row${q===M.length-1&&y===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${j}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${I.proprietaire||I.name}</span>
                  <span class="m-list-row-sub">${I.name} · ${I.plan||"—"}</span>
                </div>
                ${v?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${j}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${j}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${T.color};flex-shrink:0;margin-right:4px">${T.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${y>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${y} de plus</span>
            </div>`:""}
        </div>`,w.querySelectorAll("[data-lp-org-idx]").forEach(I=>{I.addEventListener("click",q=>{q.target.closest("[data-adh-action]")||b(t[+I.dataset.lpOrgIdx],+I.dataset.lpOrgIdx,E)})}),w.querySelectorAll("[data-adh-action]").forEach(I=>{I.addEventListener("click",q=>{q.stopPropagation();const j=+I.dataset.lpAdhIdx,T=I.dataset.adhAction,v=t[j];v&&(T==="valider"?(v.statut="actif",c(),E(),U(`${v.proprietaire||v.name} validé`)):(t.splice(j,1),c(),E(),U("Demande rejetée")))})}),(A=w.querySelector("#adh-load-more"))==null||A.addEventListener("click",()=>{f+=20,E()})}h.querySelector(".m-detail-back").addEventListener("click",me),h.querySelector("#adh-invite-btn").addEventListener("click",$),h.querySelector("#adh-search").addEventListener("input",S=>{l=S.target.value,f=20,E()}),E()}function c(){var w;const l=t.filter(E=>E.statut!=="inactif"),u=`${o.siege.adresse}, ${o.siege.codePostal} ${o.siege.ville}`;e.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Réseau</div>
      <div class="m-list">
        <div class="m-list-row" data-action="net-nom">
          <span class="m-list-row-label">Nom du réseau</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:13px">${o.nom}</span>
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
          <span class="m-list-row-value" style="color:#8e8e93;flex-shrink:0">${o.antennes.length} antenne${o.antennes.length>1?"s":""}</span>
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

      <div class="m-list-section-header">Adhérents — ${l.length} actifs</div>
      <div class="m-list">
        ${a(t,0,Math.min(5,t.length),t.length>5?-1:t.length-1)}
        ${t.length>5?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${t.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(E=>{E.addEventListener("click",S=>{S.target.closest("[data-adh-action]")||b(t[+E.dataset.orgIdx],+E.dataset.orgIdx)})}),(w=e.querySelector('[data-action="voir-adherents"]'))==null||w.addEventListener("click",s),e.querySelectorAll("[data-adh-action]").forEach(E=>{E.addEventListener("click",S=>{S.stopPropagation();const M=+E.dataset.adhIdx,y=E.dataset.adhAction,g=t[M];g&&(y==="valider"?(g.statut="actif",c(),U(`${g.proprietaire||g.name} validé`)):(t.splice(M,1),c(),U("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(E=>{E.addEventListener("click",()=>{switch(E.dataset.action){case"net-nom":p("Nom du réseau",o.nom,S=>{o.nom=S,c()});break;case"net-siege":r();break;case"net-antennes":d();break}})});const f=e.querySelector("#tog-meteo"),m=e.querySelector("#tog-sol"),h=e.querySelector("#tog-irrigation");f==null||f.addEventListener("change",()=>{n.partageMeteo=f.checked,U("Préférence enregistrée")}),m==null||m.addEventListener("change",()=>{n.partageSol=m.checked,U("Préférence enregistrée")}),h==null||h.addEventListener("change",()=>{n.partageIrrigation=h.checked,U("Préférence enregistrée")})}function p(l,u,f){const m=document.createElement("div");m.innerHTML=`<input class="m-sheet-input" type="text" value="${(u||"").replace(/"/g,"&quot;")}" placeholder="${l}">`;const h=m.querySelector("input");de({title:l,body:m,doneLabel:"Enregistrer",onDone:()=>{const w=h.value.trim();w&&(f(w),U("Enregistré"))}}),setTimeout(()=>h.focus(),300)}function r(){const l=document.createElement("div");l.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${o.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${o.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${o.siege.ville.replace(/"/g,"&quot;")}">`,de({title:"Adresse du siège",body:l,doneLabel:"Enregistrer",onDone:()=>{o.siege.adresse=l.querySelector("#s-rue").value.trim(),o.siege.codePostal=l.querySelector("#s-cp").value.trim(),o.siege.ville=l.querySelector("#s-ville").value.trim(),c(),U("Enregistré")}}),setTimeout(()=>l.querySelector("#s-rue").focus(),300)}function d(){const l=document.createElement("div");(()=>{l.innerHTML=o.antennes.map((f,m)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${f.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${f.adresse}, ${f.codePostal} ${f.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${f.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),de({title:"Antennes",body:l,doneLabel:"Fermer",onDone:()=>{}})}function b(l,u,f){var M,y;const m=ni(l.statut),h=l.statut==="invitation en attente",w=`https://app.weenat.com/invitation?code=${l.codeAdherent||"ADZ-XXX"}`,E=document.createElement("div");E.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${l.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${l.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${l.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${l.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${le.filter(g=>g.orgId===l.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const g=new Set(le.filter(A=>A.orgId===l.id).map(A=>A.id));return ne.filter(A=>g.has(A.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${m.color};font-weight:600">${m.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${l.dateAdhesion?l.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${h?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const S=de({title:l.name,body:E,doneLabel:"Fermer",onDone:()=>{}});(M=E.querySelector("#lnk-copy"))==null||M.addEventListener("click",()=>{var g;(g=navigator.clipboard)==null||g.writeText(w).catch(()=>{}),U("Lien copié !")}),(y=E.querySelector("#lnk-cancel"))==null||y.addEventListener("click",()=>{l.statut="inactif",S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{S.remove(),c(),f==null||f(),U("Invitation annulée")},280)}),E.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(u,1),S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{S.remove(),c(),f==null||f(),U("Adhérent supprimé")},280)})}function $(){const l=document.createElement("div");l.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${Xa.map(u=>`<option>${u}</option>`).join("")}
      </select>`,de({title:"Inviter un adhérent",body:l,doneLabel:"Envoyer",onDone:()=>{const u=l.querySelector("#adh-email").value.trim(),f=l.querySelector("#adh-code").value.trim();if(!u||!f){U("Email et code requis");return}t.push({id:Date.now(),name:u,proprietaire:u,email:u,codeAdherent:f,plan:l.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),c(),U("Invitation envoyée")}}),setTimeout(()=>l.querySelector("#adh-email").focus(),300)}return c(),{onAdd:$}}os(le);const to=new URLSearchParams(window.location.search),ai=to.get("role"),zs=new Set(["new","new-adherent","new-member-admin","new-member-agent","new-member-reader"]),ke=ai==="adherent"?"adherent":zs.has(ai)?ai:"admin";function _s(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}_s();setInterval(_s,1e4);const Ve=["parcelles","capteurs","dashboard","alertes","parametres"];let Ft="parcelles";function Ue(e){var i,t;!Ve.includes(e)||e===Ft||(Ft=e,document.querySelectorAll(".m-screen").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(o=>o.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function io(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;Ei()>0&&Rs()?io(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Ue(t)}):(Ei()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Ue(t))});let _e=null,xt=null;const Hs=50,Et=document.getElementById("screen-stack");Et.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){_e=null;return}_e=e.clientX,xt=e.clientY});Et.addEventListener("mouseup",e=>{if(_e===null)return;const i=e.clientX-_e,t=e.clientY-xt;if(Math.abs(i)>Hs&&Math.abs(i)>Math.abs(t)){const o=Ve.indexOf(Ft);i<0&&o<Ve.length-1&&Ue(Ve[o+1]),i>0&&o>0&&Ue(Ve[o-1])}_e=null,xt=null});Et.addEventListener("mouseleave",()=>{_e=null});Et.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){_e=null;return}_e=e.touches[0].clientX,xt=e.touches[0].clientY},{passive:!0});Et.addEventListener("touchend",e=>{if(_e===null)return;const i=e.changedTouches[0].clientX-_e,t=e.changedTouches[0].clientY-xt;if(Math.abs(i)>Hs&&Math.abs(i)>Math.abs(t)){const o=Ve.indexOf(Ft);i<0&&o<Ve.length-1&&Ue(Ve[o+1]),i>0&&o>0&&Ue(Ve[o-1])}_e=null},{passive:!0});const so=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...ke==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],Jt={};function Bs(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=Jt[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var o;return(o=window.showMobileAddPage)==null?void 0:o.call(window)})}function no(){var i;const e=document.getElementById("param-segment");e&&(ke==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),so.forEach((t,o)=>{const n=document.createElement("button");n.className="m-segment-btn"+(o===0?" active":""),n.textContent=t.label,n.dataset.target=t.id,n.addEventListener("click",()=>{var a,s,c;e.querySelectorAll(".m-segment-btn").forEach(p=>p.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(p=>p.classList.remove("active")),(a=document.getElementById(t.id))==null||a.classList.add("active"),Bs(t.id),(c=(s=Jt[t.id])==null?void 0:s.refresh)==null||c.call(s)}),e.appendChild(n)}))}no();zs.has(ke)&&vn(ke,()=>{(ke==="new"||ke==="new-adherent")&&Ue("dashboard")});Vn(document.getElementById("screen-dashboard"),ke);Ea(document.getElementById("screen-parcelles"),ke);Ja(document.getElementById("screen-capteurs"),ke);Qs(document.getElementById("screen-alertes"),ke);Us(document.getElementById("param-compte"),ke);Jt["param-exploitation"]=Ka(document.getElementById("param-exploitation"),ke);Jt["param-reseau"]=eo(document.getElementById("param-reseau"),ke);function ao(){var o;const e=ke==="admin",i=document.getElementById("phone-screen");(o=document.getElementById("m-add-modal"))==null||o.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(n=>{n.addEventListener("click",()=>{var a;t.remove(),(n.dataset.action==="note"||n.dataset.action==="traitement")&&((a=window.openJournalModal)==null||a.call(window,n.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=ao;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});Bs("param-compte");export{me as a,ye as p,de as s};
