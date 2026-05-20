const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/irrigation-DP3zu6VU.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-BEtOZiNT.js","assets/sensors-DDe0aa9W.js","assets/network-YzWdS0n_.js","assets/orgs-Cx4wNzLL.js","assets/members-DEd9yWse.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as F}from"./plots-BEtOZiNT.js";import{s as O}from"./sensors-DDe0aa9W.js";import{n as me}from"./network-YzWdS0n_.js";import{o as Y}from"./orgs-Cx4wNzLL.js";import{m as Ie}from"./members-DEd9yWse.js";const ve=[];function fe(t){const i=document.getElementById("phone-screen"),e=document.createElement("div");return e.className="m-detail-layer",e.innerHTML=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-detail-layer--in")),ve.push(e),e}function Z(){const t=ve.pop();t&&(t.classList.remove("m-detail-layer--in"),setTimeout(()=>t.remove(),300))}function Ye(){return ve.length}function Mt(){return ve.some(t=>t.dataset.dirty==="true")}function ps(){ve.forEach(t=>delete t.dataset.dirty)}window.addEventListener("m-tab-change",()=>{ve.forEach(t=>t.remove()),ve.length=0});const Xe={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Et=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Ke=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let re={};function X(t){var s;const i=document.getElementById("phone-screen");(s=document.querySelector(".m-toast"))==null||s.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function he({title:t,body:i,onDone:e,doneLabel:s="OK"}){var l;const o=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${s}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,n.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const a=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",a),n.querySelector(".m-sheet-done").addEventListener("click",()=>{e==null||e(),a()}),n.addEventListener("click",d=>{d.target===n&&a()}),n}function Qe(t,i,e){const s=document.createElement("div");s.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${t}">`;const o=s.querySelector("input");he({title:t,body:s,doneLabel:"Enregistrer",onDone:()=>{e(o.value.trim()),X("Enregistré")}}),setTimeout(()=>o.focus(),300)}function et(t,i,e,s){const o=document.createElement("div");o.innerHTML=i.map((a,l)=>`
    <div class="m-sheet-option${a===e?" m-sheet-option--active":""}" data-i="${l}">
      <span>${a}</span>
      ${a===e?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const n=he({title:t,body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelectorAll(".m-sheet-option").forEach(a=>{a.addEventListener("click",()=>{s(i[+a.dataset.i]),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280),X("Enregistré")})})}function At(t,i){const e=document.createElement("div"),s=()=>{var o;e.innerHTML=t.map((n,a)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${a}" data-f="label" value="${n.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${a}" data-f="numero" value="${n.numero}" placeholder="+33 6…">
        </div>
        ${a>0?`<button class="m-sheet-remove" data-i="${a}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',e.querySelectorAll("input").forEach(n=>{n.addEventListener("input",()=>{t[+n.dataset.i][n.dataset.f]=n.value})}),e.querySelectorAll(".m-sheet-remove").forEach(n=>{n.addEventListener("click",()=>{t.splice(+n.dataset.i,1),s()})}),(o=e.querySelector(".m-sheet-add-phone"))==null||o.addEventListener("click",()=>{t.push({label:"",numero:""}),s()})};s(),he({title:"Téléphone(s)",body:e,doneLabel:"Enregistrer",onDone:()=>{i(t),X("Enregistré")}})}function Tt(t,i,e){const s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${t.name}</div>
      <div class="m-sheet-key-date">créée le ${t.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${t.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,s.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var n;(n=navigator.clipboard)==null||n.writeText(t.value).catch(()=>{}),X("Clé copiée !")});const o=he({title:"Clé API",body:s,doneLabel:"Fermer",onDone:()=>{}});s.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const n=i.findIndex(a=>a.id===t.id);n!==-1&&i.splice(n,1),o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{o.remove(),e()},280),X("Clé supprimée")})}function kt(){const t="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>t[Math.floor(Math.random()*t.length)]).join("")}function Pt(t){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const e=i.querySelector("input");he({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const s=e.value.trim();if(!s){X("Entrez un nom");return}const o={id:Date.now(),name:s,created:new Date().toLocaleDateString("fr-FR"),value:kt()};t(o),X("Clé générée")}}),setTimeout(()=>e.focus(),300)}function It(t,i){re={profile:JSON.parse(JSON.stringify(Xe[i]||Xe.admin)),langue:"Français",unites:Ke[0]};const s=localStorage.getItem("mobile_avatarUrl")||null;function o(){const a=re.profile,l=s?`<img src="${s}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${a.initials}</span>`,d=a.apiKeys.map(c=>`
      <div class="m-list-row" data-key-id="${c.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${c.name}</span>
          <span class="m-list-row-sub">créée le ${c.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),r=a.phones.map((c,b)=>`
      <div class="m-list-row${b===a.phones.length-1&&a.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${c.label||"Numéro "+(b+1)}</span>
        <span class="m-list-row-value">${c.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");t.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${l}</div>
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
          <span class="m-list-row-value" id="val-langue">${re.langue}</span>
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
    `,n()}function n(){var l;const a=re.profile;(l=t.querySelector("#m-avatar-upload"))==null||l.addEventListener("change",d=>{const r=d.target.files[0];if(!r)return;const c=new FileReader;c.onload=b=>{localStorage.setItem("mobile_avatarUrl",b.target.result),t.querySelector("#m-avatar").innerHTML=`<img src="${b.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},c.readAsDataURL(r)}),t.querySelectorAll(".m-list-row[data-action]").forEach(d=>{d.addEventListener("click",()=>{switch(d.dataset.action){case"prenom":Qe("Prénom",a.prenom,r=>{a.prenom=r,o()});break;case"nom":Qe("Nom",a.nom,r=>{a.nom=r,o()});break;case"email":he({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${a.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>X("Fonctionnalité à venir")});break;case"phones":At(a.phones,r=>{a.phones=r,o()});break;case"mdp":he({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>X("Fonctionnalité à venir")});break;case"langue":et("Langue",Et,re.langue,r=>{re.langue=r,t.querySelector("#val-langue").textContent=r});break;case"unites":et("Unités",Ke,re.unites,r=>{re.unites=r,t.querySelector("#val-unites").textContent=r.split(" ")[0]});break;case"gen-key":Pt(r=>{a.apiKeys.push(r),o()});break;case"delete":X("Contactez le support pour supprimer votre compte");break}})}),t.querySelectorAll(".m-list-row[data-key-id]").forEach(d=>{d.addEventListener("click",()=>{const r=a.apiKeys.find(c=>c.id===+d.dataset.keyId);r&&Tt(r,a.apiKeys,o)})}),t.querySelectorAll(".m-toggle input[data-notif]").forEach(d=>{d.addEventListener("change",()=>X("Préférence enregistrée"))})}o()}function H(t){var s;const i=document.getElementById("phone-screen");(s=document.querySelector(".m-toast"))==null||s.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function U({title:t,body:i,doneLabel:e="Fermer",onDone:s}={}){var l;const o=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${e}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,n.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const a=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",a),n.querySelector(".m-sheet-done").addEventListener("click",()=>{s==null||s(),a()}),n.addEventListener("click",d=>{d.target===n&&a()}),n}function qt(t){const i=[{label:"Seuil dépassé",desc:"Conditions déclenchantes vérifiées",duration:"2h34",resolved:!0},{label:"Seuil dépassé",desc:"Notification SMS envoyée",duration:"45min",resolved:!0},{label:"Seuil dépassé",desc:"Valeur mesurée hors plage",duration:"1h20",resolved:!0},{label:"Fausse alerte",desc:"Pic transitoire — durée < seuil",duration:null,resolved:!0},{label:"Seuil dépassé",desc:"Conditions toujours vérifiées",duration:"3h05",resolved:!0},{label:"Alerte en cours",desc:"Conditions vérifiées depuis ce matin",duration:null,resolved:!1}],e=3+t%5,s=Date.now();return Array.from({length:e},(o,n)=>{const a=t*17+n*7,l=1+n*(2+a%6),d=new Date(s-l*864e5),r=i[a%i.length],c=d.getDate(),b=d.getMonth()+1;return{date:`${String(c).padStart(2,"0")}/${String(b).padStart(2,"0")}`,heure:`${String(6+a%14).padStart(2,"0")}h${String(a%60).padStart(2,"0")}`,label:r.label,desc:r.desc,duration:r.duration,resolved:n>0?!0:r.resolved}})}const jt=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Ht=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],tt={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},_t={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function qe(t){if(!t)return"—";const[i,e,s]=t.split("-");return`${s}/${e}/${i}`}function it(t){const i=t.sensorIds.map(s=>{const o=O.find(n=>n.id===s);return o?`${o.model} ${o.serial}`:null}).filter(Boolean),e=t.parcelIds.map(s=>{const o=F.find(n=>n.id===s);return(o==null?void 0:o.name)||null}).filter(Boolean);return[...i,...e]}function Dt(t,i){var a;let e=t.querySelector("#alertes-content");e||(e=document.createElement("div"),e.id="alertes-content",t.appendChild(e));const s=[...i==="adherent"?Ht:jt];function o(){if(!s.length){e.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}e.innerHTML=s.map(l=>{it(l);const d=_t[l.metric]||"bi-bell",r=l.statut==="actif";return`
        <div class="m-alert-card" data-id="${l.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${r?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${d}"></i>
            </div>
            <span class="m-alert-name">${l.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${r?"checked":""} data-id="${l.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${tt[l.metric]||l.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${qe(l.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${l.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),n()}function n(){e.querySelectorAll(".m-alert-toggle input").forEach(l=>{l.addEventListener("change",d=>{d.stopPropagation();const r=+l.dataset.id,c=s.find(b=>b.id===r);c&&(c.statut=l.checked?"actif":"inactif",o(),H(`Alerte ${l.checked?"activée":"désactivée"}`))})}),e.querySelectorAll(".m-alert-more-btn").forEach(l=>{l.addEventListener("click",d=>{d.stopPropagation();const r=+l.dataset.id,c=s.find(C=>C.id===r);if(!c)return;it(c);const b=document.createElement("div"),v=qt(r);function h(){const C=c.sensorIds.map((P,S)=>{const A=O.find(f=>f.id===P);return A?{label:`${A.model} ${A.serial}`,type:"sensor",idx:S}:null}).filter(Boolean),T=c.parcelIds.map((P,S)=>{const A=F.find(f=>f.id===P);return A?{label:A.name,type:"parcel",idx:S}:null}).filter(Boolean),N=[...C,...T];return N.length?N.map(P=>`<div class="m-perimetre-item" data-type="${P.type}" data-idx="${P.idx}">
                <span>${P.label}</span>
                <button class="m-perimetre-del" data-type="${P.type}" data-idx="${P.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const y=document.createElement("div");y.className="m-sheet-info-rows";function x(){var P;b.innerHTML="";const C=document.createElement("div");C.className="m-sheet-info-rows",C.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${tt[c.metric]||c.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${qe(c.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${qe(c.created)}</span></div>
            ${(P=c.phones)!=null&&P.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${c.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${c.statut}</span></div>`;const T=document.createElement("div");T.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",T.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${h()}</div>`,C.appendChild(T),b.appendChild(C);const N=document.createElement("div");N.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${v.map(S=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${S.resolved?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${S.date} à ${S.heure}${S.duration?` · ${S.duration}`:""}</div>
                <div class="m-history-label">${S.label}</div>
                <div class="m-history-desc">${S.desc}</div>
              </div></div>`).join("")}`,b.appendChild(N),b.querySelectorAll(".m-perimetre-del").forEach(S=>{S.addEventListener("click",A=>{A.stopPropagation();const f=S.dataset.type,p=+S.dataset.idx;f==="sensor"?c.sensorIds.splice(p,1):c.parcelIds.splice(p,1),x(),o(),H("Retiré du périmètre")})})}x(),U({title:c.name,body:b,doneLabel:"Fermer",onDone:()=>{}})})}),e.querySelectorAll(".m-alert-card").forEach(l=>{l.addEventListener("click",d=>{if(d.target.closest(".m-alert-toggle")||d.target.closest(".m-alert-more-btn"))return;const r=+l.dataset.id,c=s.find(h=>h.id===r);if(!c)return;const b=document.createElement("div");b.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const v=U({title:c.name,body:b,doneLabel:"Fermer",onDone:()=>{}});b.querySelector("#al-edit").addEventListener("click",()=>{v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),H("Modification à venir")},280)}),b.querySelector("#al-delete").addEventListener("click",()=>{const h=s.findIndex(y=>y.id===r);h!==-1&&s.splice(h,1),v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),o()},280),H("Alerte supprimée")})})})}(a=t.querySelector(".m-navbar-action"))==null||a.addEventListener("click",()=>{H("Création d'alerte — à venir")}),o()}const Rt="modulepreload",Bt=function(t){return"/weenat-proto/"+t},st={},ee=function(i,e,s){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(e.map(d=>{if(d=Bt(d),d in st)return;st[d]=!0;const r=d.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const b=document.createElement("link");if(b.rel=r?"stylesheet":Rt,r||(b.as="script"),b.crossOrigin="",b.href=d,l&&b.setAttribute("nonce",l),document.head.appendChild(b),r)return new Promise((v,h)=>{b.addEventListener("load",v),b.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&n(l.reason);return i().catch(n)})},Ft={admin:100,adherent:1},ft="weenat-m-dash";function Oe(){try{return JSON.parse(localStorage.getItem(ft))||{}}catch{return{}}}function Ot(t){try{localStorage.setItem(ft,JSON.stringify({...Oe(),...t}))}catch{}}const V=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet-fill",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun-fill",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield-fill",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle-fill",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3-fill",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Support",icon:"bi-question-circle-fill",color:"#30d158",active:!0,available:!0,fixed:!0}];function ue(t){var s;const i=document.getElementById("phone-screen");(s=document.querySelector(".m-toast"))==null||s.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function je({title:t,body:i,doneLabel:e="Fermer",onDone:s}={}){var l;const o=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${e}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,n.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const a=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",a),n.querySelector(".m-sheet-done").addEventListener("click",()=>{s==null||s(),a()}),n.addEventListener("click",d=>{d.target===n&&a()}),n}const at=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#45b7d1"}];function nt(){return Array.from({length:14},(t,i)=>i).map(t=>{const i=new Date;i.setDate(i.getDate()+t);const e=at[Math.floor(Math.random()*at.length)],s=e.label==="Pluie"||e.label==="Averses",o=Math.round(8+Math.random()*8),n=Math.round(16+Math.random()*14),a=Array.from({length:24},(l,d)=>{const r=Math.sin(Math.PI*(d-6)/12),c=Math.round(o+(n-o)*Math.max(0,r)),b=s&&d>=8&&d<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:d,label:`${String(d).padStart(2,"0")}h`,temp:c,pluie:b,hum:Math.round(85-40*Math.max(0,r)),vent:Math.round(10+Math.random()*20),icon:b>0?"bi-cloud-rain-fill":d<7||d>20?"bi-moon-fill":e.icon}});return{dayLabel:t===0?"Aujourd'hui":t===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...e,pluie:s?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:o,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:n,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:a}})}function He(t){const i=t.id,e=t.reserveHydrique||50,s=+((i*2.3+7)%32).toFixed(1),o=+((i*1.1+14)%14+10).toFixed(1),n=+((i*.6+1)%6).toFixed(1),a=Math.round(e*((i%5+1)/10)),l=Math.max(0,+(a+s-o-n).toFixed(0)),d=l<a?a-l:0;return{j0:a,j7:l,bilan:d}}const Ne=4,lt=["#0172A4","#ff8500","#30d158","#bf5af2"],Be={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol"},Nt={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C"},ot={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},zt=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function gt(t){return t==="1d"||t==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:t==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function Vt(t,i){const e=["etp","rayonnement","temp_rosee"];if(!t)return[];if(t.startsWith("p-")){const o=new Set(e);return i.filter(n=>n.parcelId===+t.slice(2)).forEach(n=>(ot[n.model]||[]).forEach(a=>o.add(a))),[...o].filter(n=>n in Be)}const s=i.find(o=>o.id===+t.slice(2));return s?ot[s.model]||[]:[]}function Wt(t,i){return t==="1d"||t==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?t==="365d"?["Jan","Avr","Jul","Oct","Déc"]:t==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?t==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?t==="365d"?["Jan","Avr","Jul","Oct","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let ne=[],de=[];(()=>{const t=Oe();if(t.catalog){const i=t.catalog.map(e=>e.id);V.sort((e,s)=>{const o=i.indexOf(e.id),n=i.indexOf(s.id);return(o<0?999:o)-(n<0?999:n)}),t.catalog.forEach(e=>{const s=V.find(o=>o.id===e.id);s&&(s.active=e.active)})}t.mesuresList&&(ne=t.mesuresList),t.cumulsList&&(de=t.cumulsList)})();function Gt(t,i,e){const s=[...t+i].reduce((a,l)=>a+l.charCodeAt(0),1),o=a=>(Math.sin(s*.07+a*.5)+Math.sin(s*.03+a*1.3))/2+.5,n={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:e},(a,l)=>n.sparse&&o(l*3.7)>.28?0:Math.max(0,n.base+n.amp*o(l*.28+1.2)))}function Jt(t,i){const e={"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[t.period]||42,s=Gt(t.subjectKey,t.metricId,e),o=270,n=60,a=26,l=12,d=Math.max(...s,1),r=s.map((y,x)=>`${a+Math.round(x/(e-1)*o)},${n-l-Math.round(y/d*(n-l-4))}`).join(" ");let c="";for(let y=0;y<=2;y++){const x=Math.round(y/2*(n-l-4)+4);c+=`<line x1="${a}" y1="${x}" x2="${a+o}" y2="${x}" stroke="#E8E6E0" stroke-width=".5"/>`,c+=`<text x="${a-3}" y="${x+3}" text-anchor="end" font-size="7" fill="#B0AEA8">${+(d*(1-y/2)).toFixed(d<5?1:0)}</text>`}const b=Wt(t.period,t.step),v=b.map((y,x)=>`<text x="${a+Math.round(x/(b.length-1)*o)}" y="${n+2}" text-anchor="middle" font-size="7" fill="#B0AEA8">${y}</text>`).join(""),h=JSON.stringify(s.map(y=>+y.toFixed(2)));return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${t.color}">${t.metricLabel} <span style="font-weight:400;color:#636366">· ${t.subjectLabel}</span></div>
          <div class="m-wf-card-sub">${t.periodLabel} · ${t.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${t.unit}" data-series='${h}' style="position:relative;margin-top:4px">
        <svg viewBox="0 0 ${a+o} ${n+6}" style="width:100%;display:block;overflow:visible">
          ${c}
          <polyline points="${r}" fill="none" stroke="${t.color}" stroke-width="1.5" stroke-linejoin="round"/>
          <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${n}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
          ${v}
        </svg>
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
    </div>`}function rt(t,i){const e=ne.length>=Ne,s=t.map(l=>`<option value="p-${l.id}">${l.name}</option>`).join(""),o=i.filter(l=>l.parcelId).map(l=>{const d=t.find(r=>r.id===l.parcelId);return`<option value="s-${l.id}">${l.model} — ${l.serial}${d?` · ${d.name}`:""}</option>`}).join(""),n=gt("7d"),a=ne.length?ne.map(Jt).join(""):'<div class="m-wf-empty">Aucune mesure enregistrée</div>';return`
    <div class="m-list-section-header">Nouvelle mesure</div>
    <div class="m-wf-form${e?" m-wf-disabled":""}">
      <select class="m-wf-sel" id="msr-subject" ${e?"disabled":""}>
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${s}</optgroup>
        ${o?`<optgroup label="Capteurs">${o}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period" ${e?"disabled":""}>
          ${zt.map(l=>`<option value="${l.id}"${l.id==="7d"?" selected":""}>${l.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step" ${e?"disabled":""}>
          ${n.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Créer la mesure</button>
      ${e?'<div class="m-wf-max-msg">Quantité maximale atteinte. Supprimez une mesure pour en ajouter une nouvelle.</div>':""}
    </div>
    <div class="m-list-section-header" style="margin-top:16px">Mesures enregistrées</div>
    <div id="msr-list">${a}</div>`}const _e=8;function Ut(t){const i=t.id;return!t.irrigation||t.irrigation==="Pas d'irrigation"?0:i%3===0?Math.round((i*1.7+8)%30+5):0}function ct(t,i=!1){if(!t.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const e=[...t].sort((a,l)=>He(l).bilan-He(a).bilan),o=(i?e:e.slice(0,_e)).map(a=>{const{j0:l,j7:d,bilan:r}=He(a),c=Ut(a);return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${a.id}">${a.name}</button>
      <div class="m-bh-td">${l}</div>
      <div class="m-bh-td">${d}</div>
      <div class="m-bh-td m-bh-td--reco">${r>0?r:"—"}</div>
      <div class="m-bh-td m-bh-td--planif">${c>0?c:"—"}</div>`}).join(""),n=!i&&e.length>_e?`<button class="m-bh-expand" id="bh-expand">Afficher les ${t.length-_e} autres parcelles <i class="bi bi-chevron-down"></i></button>`:"";return`
    <div class="m-bh-table">
      <div class="m-bh-gh"></div>
      <div class="m-bh-gh" style="grid-column:span 2">Niveau RFU</div>
      <div class="m-bh-gh" style="grid-column:span 2">Irrigations J+7</div>
      <div class="m-bh-th m-bh-unit-lbl">mm</div>
      <div class="m-bh-th">J0</div>
      <div class="m-bh-th">J+7</div>
      <div class="m-bh-th">Reco.</div>
      <div class="m-bh-th">Planif.</div>
      ${o}
    </div>
    ${n}
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
    </div>`}function Zt(t,i,e){const s=t.map(r=>{const c=[r.name,r.crop,r.ville].filter(Boolean).join(" · ");return`<option value="p-${r.id}">${c}</option>`}).join(""),o=i.map(r=>`<option value="s-${r.id}">${r.model} — ${r.serial}</option>`).join(""),n=`
    <optgroup label="Parcelles">${s}</optgroup>
    ${o?`<optgroup label="Capteurs">${o}</optgroup>`:""}`,a=(r,c)=>{const b=`${r.dayLabel.charAt(0).toUpperCase()+r.dayLabel.slice(1)} · ${r.dateStr}`;return`
    <div class="m-prev-card" data-day="${c}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${r.icon}" style="color:${r.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${b}</span>
          <span class="m-prev-card-cond">${r.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-card-body">
        <div class="m-prev-row"><span>Pluie</span><strong>${r.pluie} mm</strong></div>
        <div class="m-prev-row"><span>Température</span><strong>${r.tMin}°C <em>${r.tMinHeure}</em> — ${r.tMax}°C <em>${r.tMaxHeure}</em></strong></div>
        <div class="m-prev-row"><span>Humidité</span><strong>${r.humMoy}%</strong></div>
        <div class="m-prev-row"><span>Vent</span><strong>${r.ventMoy}/${r.ventRafales} km/h</strong></div>
        <div class="m-prev-row m-prev-row--last"><span>Évapotranspiration</span><strong>${r.etp} mm</strong></div>
      </div>
    </div>`},l=e.slice(0,3).map(a).join(""),d=e.slice(3).map(a).join("");return`
    <select class="m-prev-select">${n}</select>
    <div class="m-prev-cards">
      ${l}
      <div class="m-prev-extra" style="display:none">${d}</div>
      <button class="m-prev-expand-btn">Voir les ${e.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const ce=[{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:["P+","PT","SMV"]},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:["PYRANO"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],Yt=new Set(ce.flatMap(t=>t.needsModels||[]));function Xt(t){if(!t)return ce;if(t.startsWith("s-")){const e=O.find(s=>s.id===+t.slice(2));return e?ce.filter(s=>s.needsModels===null||s.needsModels.includes(e.model)):ce}const i=new Set(O.filter(e=>e.parcelId===+t.slice(2)).map(e=>e.model));return ce.filter(e=>e.needsModels===null||e.needsModels.some(s=>i.has(s)))}const Kt={pluie:{icon:"bi-droplet-fill",color:"#45b7d1"},dj:{icon:"bi-thermometer-sun",color:"#ff9f0a"},hf:{icon:"bi-thermometer-low",color:"#5ac8fa"},etp:{icon:"bi-moisture",color:"#30d158"},rayo:{icon:"bi-sun-fill",color:"#f5c842"},humec:{icon:"bi-droplet-half",color:"#bf5af2"}};function Qt(){return de.length?de.map((t,i)=>{const e=new Date(t.fromDate).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"});return`<div class="m-cumuls-saved-card" style="position:relative">
      <button class="m-cumuls-del" data-cidx="${i}" type="button" title="Supprimer">×</button>
      <div class="m-cumuls-saved-row1">
        <span class="m-cumuls-saved-metric"><i class="bi ${t.icon}" style="color:${t.color}"></i> ${t.metricLabel}</span>
        <span class="m-cumuls-saved-val">${t.value} <span class="m-cumuls-saved-unit">${t.unit}</span></span>
      </div>
      <div class="m-cumuls-saved-row2">${t.subjectLabel}</div>
      <div class="m-cumuls-saved-row3">depuis le ${e}${t.thresholds?t.metricId==="hf"?` · seuil < ${t.thresholds.cold}°C`:t.metricId==="dj"?` · ${t.thresholds.low}–${t.thresholds.high}°C`:"":""}</div>
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function ei(t,i,e){if(!t||!i)return null;const s=ce.find(a=>a.id===e)||ce[0],o=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),n=t.split("").reduce((a,l)=>a+l.charCodeAt(0),0)+o;return+(s.base+n%(s.amp*10)/10).toFixed(1)}function dt(t,i){const e=de.length>=Ne,s=`${new Date().getFullYear()}-01-01`,o=i.filter(c=>c.parcelId&&Yt.has(c.model)),n=new Set(o.map(c=>c.parcelId)),l=t.filter(c=>n.has(c.id)).map(c=>`<option value="p-${c.id}">${c.name}</option>`).join(""),d=o.map(c=>{const b=t.find(v=>v.id===c.parcelId);return`<option value="s-${c.id}">${c.model} — ${c.serial}${b?` · ${b.name}`:""}</option>`}).join(""),r=de.length?Qt():'<div class="m-wf-empty">Aucun cumul enregistré</div>';return`
    <div class="m-list-section-header">Nouveau cumul</div>
    <div class="m-wf-form${e?" m-wf-disabled":""}">
      <select class="m-wf-sel" id="cumuls-subject" ${e?"disabled":""}>
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${l}</optgroup>
        ${d?`<optgroup label="Capteurs">${d}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="cumuls-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div id="cumuls-thresholds"></div>
      <div class="m-wf-row">
        <div class="m-wf-field">
          <span class="m-wf-label">Depuis le</span>
          <input type="date" class="m-wf-date" id="cumuls-from" value="${s}" ${e?"disabled":""}>
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Créer le cumul</button>
      ${e?'<div class="m-wf-max-msg">Quantité maximale atteinte. Supprimez un cumul pour en ajouter un nouveau.</div>':""}
    </div>
    <div class="m-list-section-header" style="margin-top:16px">Cumuls enregistrés</div>
    <div id="cumuls-saved-list">${r}</div>`}const ti={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function ii(t){const i=t.id,e=new Date,s=ti[t.crop]||["—"],o=s[i%s.length];let n,a;i%5===3?(n=0,a=(e.getHours()+2+i%3*3)%24):(n=(i*2+1)%6+1,a=6+i%5*2);const l=2+i%3,d=new Date(e);d.setDate(d.getDate()+n);const r=n===0?"Aujourd'hui":d.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),c=n*1440+a*60-(e.getHours()*60+e.getMinutes()),b=c>=0&&c<=600;return{product:o,winDateStr:r,winHour:a,winDur:l,isUrgent:b}}function si(t){const i=t.filter(e=>e.crop);return i.length?`<div class="m-w-list">${i.map(e=>{const s=ii(e),o=s.isUrgent?"#ff9f0a":"#1c1c1e",n=s.isUrgent?'<i class="bi bi-alarm-fill" style="color:#ff9f0a"></i> ':"";return`<div class="m-w-row">
      <div class="m-w-row-main">
        <div class="m-w-row-name">${e.name}</div>
        <div class="m-w-row-sub">${e.crop}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:12px;font-weight:600;color:${o}">${n}${s.winDateStr} · ${s.winHour}h</div>
        <div style="font-size:11px;color:#8e8e93">${s.winDur}h de traitement</div>
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>'}const ai={"capteur couché":{icon:"bi-arrow-down-circle-fill",color:"#ff9f0a"},"émissions interrompues":{icon:"bi-wifi-off",color:"#ff3b30"},"capteur déplacé":{icon:"bi-geo-alt-fill",color:"#ff9f0a"},"cuillère bloquée":{icon:"bi-x-octagon-fill",color:"#ff3b30"}};function ni(t,i){const e=i.filter(s=>s.event&&(Array.isArray(s.event)?s.event.length>0:!0));return e.length?`<div class="m-w-list">${e.map(s=>{const o=t.find(l=>l.id===s.parcelId),a=(Array.isArray(s.event)?s.event:[s.event]).map(l=>{const d=ai[l]||{icon:"bi-exclamation-circle-fill",color:"#ff9f0a"};return`<span class="m-ev-badge" style="color:${d.color}"><i class="bi ${d.icon}"></i> ${l}</span>`}).join("");return`<div class="m-w-row" style="flex-direction:column;align-items:flex-start;gap:4px">
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
        <div class="m-w-row-name">${s.model} — ${s.serial}</div>
        <div style="font-size:11px;color:#8e8e93">${(o==null?void 0:o.ville)||(o==null?void 0:o.name)||"—"}</div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px">${a}</div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const yt={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},li={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]},oi=new Set(["Blé tendre","Blé dur","Maïs","Maïs ensilage","Pomme de terre","Carotte","Tournesol","Pommier","Colza","Betterave sucrière"]);function ri(t){const i=t.id,e=yt[t.crop]||li,s=i%e.stages.length,o=(i*2+5)%18+4,n=new Date("2026-04-18");n.setDate(n.getDate()+o);const a=n.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:e.stages[s],nextStage:e.nextStages[s],variety:e.varieties[i%e.varieties.length],nextDateStr:a,daysToNext:o}}function ci(t){const i=t.filter(e=>e.crop);return i.length?`<div class="m-w-list">${i.map(e=>{const s=!!yt[e.crop],o=s?ri(e):null,n=s&&oi.has(e.crop),a=s&&o.variety!=="—"?` · ${o.variety}`:"";return`<div class="m-w-row">
      <div class="m-w-row-main">
        <div class="m-w-row-name">${e.name}</div>
        <div class="m-w-row-sub">${e.crop}${a}</div>
      </div>
      <div style="text-align:right;flex-shrink:0;max-width:48%">
        ${s?`<div style="font-size:12px;font-weight:600;color:#1c1c1e;line-height:1.3">${o.stage.split(" (BBCH")[0]}</div>
             ${n?`<div style="font-size:11px;color:#636366">↗ ${o.nextStage} · ${o.nextDateStr}</div>`:""}`:'<div style="font-size:12px;color:#b0aead;font-style:italic">Stade non renseigné</div>'}
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>'}function di(){const t=F.map(s=>s.orgId).filter((s,o,n)=>n.indexOf(s)===o&&s!==100).length,i=O.length,e=F.length;return`
    <div class="m-reseau-name">${me.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Adhérents</span></div>
      <div class="m-reseau-stat"><strong>${e}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Capteurs</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${me.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${me.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${me.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${me.siege.adresse}, ${me.siege.codePostal} ${me.siege.ville}</span></div>
    </div>`}function mi(){return`
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
    </a>`}const mt=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function ui(){var r;const t=document.getElementById("phone-screen");(r=document.querySelector(".m-sheet-overlay"))==null||r.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,t.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const e=i.querySelector("#chat-messages"),s=i.querySelector("#chat-input"),o=i.querySelector("#chat-send"),n=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",n),i.addEventListener("click",c=>{c.target===i&&n()});function a(c,b){const v=document.createElement("div");v.className=`m-chat-msg m-chat-msg--${b}`,v.innerHTML=`<div class="m-chat-bubble">${c}</div>`,e.appendChild(v),e.scrollTop=e.scrollHeight}function l(){const c=document.createElement("div");return c.className="m-chat-msg m-chat-msg--bot m-chat-typing",c.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',e.appendChild(c),e.scrollTop=e.scrollHeight,c}function d(){const c=s.value.trim();if(!c)return;a(c,"user"),s.value="",o.disabled=!0;const b=l();setTimeout(()=>{b.remove();const v=mt[Math.floor(Math.random()*mt.length)];a(v,"bot"),o.disabled=!1,s.focus()},1200+Math.random()*800)}o.addEventListener("click",d),s.addEventListener("keydown",c=>{c.key==="Enter"&&d()}),setTimeout(()=>s.focus(),350)}function pi(t,i){let e=t.querySelector("#dashboard-content");e||(e=document.createElement("div"),e.id="dashboard-content",t.appendChild(e));const s=Ft[i]||1,o=s===100?F:F.filter(f=>f.orgId===s),n=new Set(o.map(f=>f.id)),a=O.filter(f=>n.has(f.parcelId));let l=nt();const d=Oe(),r=new Set(["mon_reseau","support"]),c=new Set(d.collapsed??V.map(f=>f.id).filter(f=>!r.has(f)));function b(){Ot({catalog:V.map(f=>({id:f.id,active:f.active})),collapsed:[...c],mesuresList:ne,cumulsList:de})}function v(f,p){const u=f.fixed?"":`<button class="m-widget-menu" data-widget="${f.id}" type="button">•••</button>`,m=c.has(f.id);return`
      <div class="m-widget${m?" m-widget--collapsed":""}" data-widget="${f.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${f.id}">
          <div class="m-widget-icon-wrap" style="background:${f.color}20;color:${f.color}">
            <i class="bi ${f.icon}"></i>
          </div>
          <span class="m-widget-title">${f.title}</span>
          <i class="bi ${m?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${f.fixed?"0":"8px"}"></i>
          ${u}
        </div>
        <div class="m-widget-bd" style="${m?"display:none":""}">${p}</div>
      </div>`}function h(){l=nt();const f=V.filter(u=>u.active&&!u.fixed),p=V.filter(u=>u.active&&u.fixed);e.innerHTML=`
      <button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${[...f,...p].map(u=>{let m="";return u.id==="bilan_hydrique"?m=ct(o,!1):u.id==="previsions"?m=Zt(o,a,l):u.id==="cumuls"?m=dt(o,a):u.id==="temps_reel"?m=rt(o,a):u.id==="traitements"?m=si(o):u.id==="evenements"?m=ni(o,a):u.id==="cultures"?m=ci(o):u.id==="mon_reseau"?m=di():u.id==="support"&&(m=mi()),v(u,m)}).join("")}
      <div style="height:24px"></div>`,N()}const y='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function x(f,p){const u=f[p],m=`${u.dayLabel.charAt(0).toUpperCase()+u.dayLabel.slice(1)} · ${u.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${y}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${p===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${u.icon}" style="color:${u.color};font-size:22px"></i><span class="m-d-name">${m}</span></div>
          <button class="m-day-nav" id="next-day" ${p>=f.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${u.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${u.tMin} / ${u.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${u.ventMoy}/${u.ventRafales}</strong></div>
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
            ${u.hours.map((g,$)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${$<u.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${g.label}</span>
                <i class="bi ${g.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#45b7d1;width:44px;flex-shrink:0">${g.pluie>0?`${g.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${g.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${g.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${g.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function C(f,p,u){var m,g;f.querySelector(".m-detail-back").addEventListener("click",Z),(m=f.querySelector("#prev-day"))==null||m.addEventListener("click",()=>{f.innerHTML=x(p,u-1),C(f,p,u-1)}),(g=f.querySelector("#next-day"))==null||g.addEventListener("click",()=>{f.innerHTML=x(p,u+1),C(f,p,u+1)})}function T(f,p){const u=fe(x(f,p));C(u,f,p)}function N(){var I,z,J,Le;(I=t.querySelector(".m-navbar-action"))==null||I.addEventListener("click",S),(z=e.querySelector("#dash-add-widget-btn"))==null||z.addEventListener("click",A),e.querySelectorAll(".m-widget-hd--toggle").forEach(M=>{M.addEventListener("click",R=>{if(R.target.closest(".m-widget-menu"))return;const j=M.dataset.collapse;c.has(j)?c.delete(j):c.add(j),b(),h()})}),(J=e.querySelector("#bh-expand"))==null||J.addEventListener("click",()=>{const M=e.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');M&&(M.innerHTML=ct(o,!0),p(),f())});function f(){e.querySelectorAll(".m-bh-plot-link").forEach(M=>{M.addEventListener("click",()=>{const R=F.find(j=>j.id===+M.dataset.plotId);R&&ee(()=>Promise.resolve().then(()=>Ai),void 0).then(j=>j.initParcelDetail(R,[]))})})}function p(){var M,R,j;(M=e.querySelector("#bh-btn-calendar"))==null||M.addEventListener("click",()=>{ee(()=>import("./irrigation-DP3zu6VU.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(B=>B.openCalendar(o,""))}),(R=e.querySelector("#bh-btn-irrigation"))==null||R.addEventListener("click",()=>{ee(()=>import("./irrigation-DP3zu6VU.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(B=>B.openIrrigationSaisie(o,ue))}),(j=e.querySelector("#bh-btn-strategie"))==null||j.addEventListener("click",()=>{ee(()=>import("./irrigation-DP3zu6VU.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(B=>B.openIrrigationStrategie(o,ue))})}f(),p();function u(){const M=e.querySelector('[data-widget="cumuls"] .m-widget-bd');M&&(M.innerHTML=dt(o,a),m())}function m(){var B,G,te,ie;const M=()=>{var q;const D=(q=e.querySelector("#cumuls-metric"))==null?void 0:q.value,E=e.querySelector("#cumuls-thresholds");E&&(D==="hf"?E.innerHTML=`
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`:D==="dj"?E.innerHTML=`
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`:E.innerHTML="")},R=()=>{var k;const D=e.querySelector("#cumuls-metric"),E=(k=e.querySelector("#cumuls-subject"))==null?void 0:k.value;if(!D)return;const q=Xt(E);D.innerHTML='<option value="">— Métrique —</option>'+q.map(_=>`<option value="${_.id}">${_.label}</option>`).join(""),D.disabled=!E||!q.length,M(),j()},j=()=>{var Q,se,ae;const D=e.querySelector("#cumuls-create"),E=e.querySelector("#cumuls-date-err"),q=(Q=e.querySelector("#cumuls-subject"))==null?void 0:Q.value,k=(se=e.querySelector("#cumuls-from"))==null?void 0:se.value,_=(ae=e.querySelector("#cumuls-metric"))==null?void 0:ae.value,W=k?(Date.now()-new Date(k))/864e5>365:!1;E&&(E.style.display=W?"":"none"),D&&(D.disabled=!q||!k||!_||W)};(B=e.querySelector("#cumuls-subject"))==null||B.addEventListener("change",()=>{R(),j()}),(G=e.querySelector("#cumuls-from"))==null||G.addEventListener("change",j),(te=e.querySelector("#cumuls-metric"))==null||te.addEventListener("change",()=>{M(),j()}),(ie=e.querySelector("#cumuls-create"))==null||ie.addEventListener("click",()=>{var se,ae,ge,ye,$e,Ze;const D=e.querySelector("#cumuls-subject"),E=D==null?void 0:D.value,q=(se=e.querySelector("#cumuls-from"))==null?void 0:se.value,k=(ae=e.querySelector("#cumuls-metric"))==null?void 0:ae.value;if(!E||!q||!k)return;const _=ce.find(Lt=>Lt.id===k),W=Kt[k]||{icon:"bi-bar-chart-fill",color:"#636366"},Q=k==="hf"?{cold:+(((ge=e.querySelector("#cumuls-th-cold"))==null?void 0:ge.value)??7.2)}:k==="dj"?{low:+(((ye=e.querySelector("#cumuls-th-low"))==null?void 0:ye.value)??0),high:+((($e=e.querySelector("#cumuls-th-high"))==null?void 0:$e.value)??18)}:null;de.push({metricId:k,metricLabel:(_==null?void 0:_.label)||k,unit:(_==null?void 0:_.unit)||"",icon:W.icon,color:W.color,subjectKey:E,subjectLabel:(((Ze=D.options[D.selectedIndex])==null?void 0:Ze.text)||E).trim(),fromDate:q,value:String(ei(E,q,k)??"—"),thresholds:Q}),b(),u()}),e.querySelectorAll(".m-cumuls-del").forEach(D=>{D.addEventListener("click",()=>{de.splice(+D.dataset.cidx,1),b(),u()})})}m(),(Le=e.querySelector("#open-chat-btn"))==null||Le.addEventListener("click",ui);function g(){e.querySelectorAll(".m-tr-chart-wrap").forEach(M=>{const R=M.querySelector(".m-tr-cursor"),j=M.querySelector(".m-tr-tooltip");if(!j)return;const B=JSON.parse(M.dataset.series||"[]"),G=M.dataset.unit||"",te=B.length,ie=26,D=270;M.addEventListener("pointermove",E=>{const q=M.getBoundingClientRect(),k=Math.max(0,Math.min(((E.clientX-q.left)*(ie+D)/q.width-ie)/D,1)),_=B[Math.round(k*(te-1))]??null;if(R){const W=ie+Math.round(k*D);R.setAttribute("x1",W),R.setAttribute("x2",W),R.setAttribute("opacity","1")}j.style.display="",j.style.left=`${Math.max(0,Math.min(E.clientX-q.left-24,q.width-60))}px`,j.textContent=_!==null?`${(+_).toFixed(1)} ${G}`:"—"}),M.addEventListener("pointerleave",()=>{j.style.display="none",R==null||R.setAttribute("opacity","0")})})}function $(){const M=e.querySelector('[data-widget="temps_reel"] .m-widget-bd');M&&(M.innerHTML=rt(o,a),w())}function w(){var B,G,te,ie,D;const M=()=>{var q,k;const E=e.querySelector("#msr-create");E&&(E.disabled=!((q=e.querySelector("#msr-subject"))!=null&&q.value)||!((k=e.querySelector("#msr-metric"))!=null&&k.value)||ne.length>=Ne)},R=()=>{var _;const E=e.querySelector("#msr-metric"),q=(_=e.querySelector("#msr-subject"))==null?void 0:_.value;if(!E)return;const k=Vt(q,a);E.innerHTML='<option value="">— Métrique —</option>'+k.map(W=>`<option value="${W}">${Be[W]}</option>`).join(""),E.disabled=!q||!k.length,M()},j=()=>{var k;const E=e.querySelector("#msr-step"),q=((k=e.querySelector("#msr-period"))==null?void 0:k.value)||"7d";E&&(E.innerHTML=gt(q).map(_=>`<option value="${_.id}">${_.label}</option>`).join(""),M())};(B=e.querySelector("#msr-subject"))==null||B.addEventListener("change",()=>{R(),M()}),(G=e.querySelector("#msr-period"))==null||G.addEventListener("change",()=>{j(),M()}),(te=e.querySelector("#msr-metric"))==null||te.addEventListener("change",M),(ie=e.querySelector("#msr-step"))==null||ie.addEventListener("change",M),(D=e.querySelector("#msr-create"))==null||D.addEventListener("click",()=>{var ge,ye,$e;const E=e.querySelector("#msr-subject"),q=e.querySelector("#msr-metric"),k=e.querySelector("#msr-period"),_=e.querySelector("#msr-step"),W=E==null?void 0:E.value,Q=q==null?void 0:q.value,se=k==null?void 0:k.value,ae=_==null?void 0:_.value;!W||!Q||!se||!ae||(ne.push({subjectKey:W,subjectLabel:(((ge=E.options[E.selectedIndex])==null?void 0:ge.text)||W).trim(),metricId:Q,metricLabel:Be[Q]||Q,unit:Nt[Q]||"",period:se,periodLabel:(((ye=k.options[k.selectedIndex])==null?void 0:ye.text)||se).trim(),step:ae,stepLabel:((($e=_.options[_.selectedIndex])==null?void 0:$e.text)||ae).trim(),color:lt[ne.length%lt.length]}),b(),$())}),e.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(E=>{E.addEventListener("click",()=>{ne.splice(+E.dataset.idx,1),b(),$()})}),g()}w(),e.querySelectorAll(".m-prev-card").forEach(M=>{M.addEventListener("click",()=>{T(l,+M.dataset.day)})});const L=e.querySelector(".m-prev-expand-btn");L&&L.addEventListener("click",()=>T(l,3)),e.querySelectorAll(".m-widget-menu").forEach(M=>{M.addEventListener("click",R=>{R.stopPropagation();const j=V.find(te=>te.id===M.dataset.widget);if(!j)return;const B=document.createElement("div");B.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="menu-config">Configurer</a>
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const G=je({title:j.title,body:B,doneLabel:"Fermer",onDone:()=>{}});B.querySelector("#menu-config").addEventListener("click",()=>{G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),ue("Configuration à venir")},280)}),B.querySelector("#menu-move").addEventListener("click",()=>{G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),P()},280)}),B.querySelector("#menu-remove").addEventListener("click",()=>{j.active=!1,G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),b(),h()},280),ue("Widget retiré")})})})}function P(){const f=document.createElement("div"),p=()=>V.filter(m=>m.active&&!m.fixed),u=()=>{const m=p();f.innerHTML=m.map((g,$)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${g.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${$}" data-dir="-1" ${$===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${$}" data-dir="1" ${$===m.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),f.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(g=>{g.addEventListener("click",()=>{const $=p(),w=+g.dataset.i,L=w+ +g.dataset.dir,I=V.indexOf($[w]),z=V.indexOf($[L]);[V[I],V[z]]=[V[z],V[I]],b(),u(),h()})})};u(),je({title:"Réorganiser les widgets",body:f,doneLabel:"Fermer",onDone:()=>{}})}function S(){const p=fe(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
          <span style="font-size:17px;font-weight:600">Ajouter</span>
          <div style="width:44px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:52px">
        <div style="padding:20px 16px">
          <div class="m-add-section-label">Mon exploitation</div>
          <div class="m-add-grid">
            <button class="m-add-item" data-action="parcelle">
              <div class="m-add-icon"><i class="bi bi-geo-alt-fill"></i></div>
              <span>Parcelle</span>
            </button>
            <button class="m-add-item" data-action="capteur">
              <div class="m-add-icon"><i class="bi bi-broadcast"></i></div>
              <span>Capteur</span>
            </button>
            <button class="m-add-item" data-action="station">
              <div class="m-add-icon"><i class="bi bi-cloud-sun-fill"></i></div>
              <span>Station météo virtuelle</span>
            </button>
            <button class="m-add-item" data-action="membre">
              <div class="m-add-icon"><i class="bi bi-person-plus-fill"></i></div>
              <span>Membre</span>
            </button>
            <button class="m-add-item" data-action="irrigation">
              <div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-droplet-fill"></i></div>
              <span>Irrigation</span>
            </button>
            <button class="m-add-item" data-action="strategie-irrigation">
              <div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-arrow-repeat"></i></div>
              <span>Saison d'irr.</span>
            </button>
            <button class="m-add-item" data-action="calendrier">
              <div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-calendar3"></i></div>
              <span>Voir les irrigations</span>
            </button>
          </div>
          ${i==="admin"?`
          <div class="m-add-section-label" style="margin-top:20px">Mon réseau</div>
          <div class="m-add-grid">
            <button class="m-add-item" data-action="adherent">
              <div class="m-add-icon"><i class="bi bi-building"></i></div>
              <span>Adhérent</span>
            </button>
          </div>`:""}
          <div class="m-add-section-label" style="margin-top:20px">Mon compte</div>
          <div class="m-add-grid">
            <button class="m-add-item" data-action="alerte">
              <div class="m-add-icon"><i class="bi bi-bell-fill"></i></div>
              <span>Alerte</span>
            </button>
            <button class="m-add-item" data-action="export">
              <div class="m-add-icon"><i class="bi bi-download"></i></div>
              <span>Export de données</span>
            </button>
          </div>
        </div>
      </div>`);p.querySelector(".m-detail-back").addEventListener("click",Z),p.querySelectorAll(".m-add-item").forEach(u=>{u.addEventListener("click",()=>{const m=u.dataset.action;m==="irrigation"?(Z(),ee(()=>import("./irrigation-DP3zu6VU.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(g=>g.openIrrigationSaisie(o,ue))):m==="strategie-irrigation"?(Z(),ee(()=>import("./irrigation-DP3zu6VU.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(g=>g.openIrrigationStrategie(o,ue))):m==="calendrier"?(Z(),ee(()=>import("./irrigation-DP3zu6VU.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(g=>g.openCalendar(o,""))):ue("Fonctionnalité à venir")})})}function A(){const f=document.createElement("div"),p=()=>{const u=V.filter(m=>!m.fixed);f.innerHTML=u.map(m=>`
        <div class="m-catalog-row${m.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${m.color}20;color:${m.color}"><i class="bi ${m.icon}"></i></div>
          <span class="m-catalog-title">${m.title}</span>
          ${m.available?`<button class="m-catalog-toggle${m.active?" m-catalog-toggle--on":""}" data-cid="${m.id}" type="button">
                <i class="bi ${m.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),f.querySelectorAll("[data-cid]").forEach(m=>{m.addEventListener("click",()=>{const g=V.find($=>$.id===m.dataset.cid);g&&(g.active=!g.active,b(),p(),h())})})};p(),je({title:"Widgets disponibles",body:f,doneLabel:"Fermer",onDone:()=>{}})}h()}const vi=new URLSearchParams(window.location.search).get("role")==="adherent"?"adherent":"admin",hi=[{title:"Cumuls",items:["Cumul Degrés jours","Cumul Pluie","Cumul Ensoleillement","Cumul Evapotranspiration","Cumul Heures froides","Cumul Humectation foliaire"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Weephyt","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]},{title:"Irrigation",items:["Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]}];function bi(){const t=hi.map(e=>`
    <div class="m-list-section-header">${e.title}</div>
    ${e.items.map(s=>`
      <div class="m-wcat-item">
        <span>${s}</span>
        <button class="m-wcat-add" type="button"><i class="bi bi-plus-circle"></i></button>
      </div>`).join("")}`).join(""),i=fe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Ajouter un widget</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:8px 0 32px">${t}</div>
    </div>`);i.querySelector(".m-detail-back").addEventListener("click",Z),i.querySelectorAll(".m-wcat-add").forEach(e=>{e.addEventListener("click",()=>H("Widget bientôt disponible"))})}function fi(t){const e=fe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Ajouter</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="detail-content" class="m-detail-content" style="top:52px">
      <div style="padding:20px 16px">
        <div class="m-add-section-label">Mon exploitation</div>
        <div class="m-add-grid">
          <button class="m-add-item" data-action="parcelle"><div class="m-add-icon"><i class="bi bi-geo-alt-fill"></i></div><span>Parcelle</span></button>
          <button class="m-add-item" data-action="capteur"><div class="m-add-icon"><i class="bi bi-broadcast"></i></div><span>Capteur</span></button>
          <button class="m-add-item" data-action="station"><div class="m-add-icon"><i class="bi bi-cloud-sun-fill"></i></div><span>Station météo virtuelle</span></button>
          <button class="m-add-item" data-action="membre"><div class="m-add-icon"><i class="bi bi-person-plus-fill"></i></div><span>Membre</span></button>
          <button class="m-add-item" data-action="irrigation"><div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-droplet-fill"></i></div><span>Irrigation</span></button>
          <button class="m-add-item" data-action="strategie-irrigation"><div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-arrow-repeat"></i></div><span>Saison d'irr.</span></button>
          <button class="m-add-item" data-action="calendrier"><div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-calendar3"></i></div><span>Voir les irrigations</span></button>
        </div>
        ${vi==="admin"?`
        <div class="m-add-section-label" style="margin-top:20px">Mon réseau</div>
        <div class="m-add-grid">
          <button class="m-add-item" data-action="adherent"><div class="m-add-icon"><i class="bi bi-building"></i></div><span>Adhérent</span></button>
        </div>`:""}
        <div class="m-add-section-label" style="margin-top:20px">Mon compte</div>
        <div class="m-add-grid">
          <button class="m-add-item" data-action="alerte"><div class="m-add-icon"><i class="bi bi-bell-fill"></i></div><span>Alerte</span></button>
          <button class="m-add-item" data-action="export"><div class="m-add-icon"><i class="bi bi-download"></i></div><span>Export de données</span></button>
        </div>
      </div>
    </div>`);e.querySelector(".m-detail-back").addEventListener("click",Z),e.querySelectorAll(".m-add-item").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.action;o==="irrigation"?(Z(),ee(()=>import("./irrigation-DP3zu6VU.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(n=>n.openIrrigationSaisie([t],H))):o==="strategie-irrigation"?(Z(),ee(()=>import("./irrigation-DP3zu6VU.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(n=>n.openIrrigationStrategie([t],H))):o==="calendrier"?(Z(),ee(()=>import("./irrigation-DP3zu6VU.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(n=>n.openCalendar([t],""))):H("Fonctionnalité à venir")})})}const Te={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#c090e0",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#80c8e8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1},humectation:{label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}},$t={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function ze(t,i){const e={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[t]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(s,o)=>{const n=o/i*Math.PI*4;if(e.sparse&&Math.random()>.25)return 0;const a=e.base+e.amp*Math.sin(n-1)+(Math.random()-.5)*e.amp*.5;return Math.max(e.min,Math.min(e.max,a))})}const Ve={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},We={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function gi(t,i,e,s,o,n=20){const a=We[t]||10080,l=new Date,d=v=>t==="1d"||t==="hier"?`${String(v.getHours()).padStart(2,"0")}h`:t==="365d"?v.toLocaleDateString("fr-FR",{month:"short"}):`${String(v.getDate()).padStart(2,"0")}/${String(v.getMonth()+1).padStart(2,"0")}`,r=4,c=i-e-s,b=o-n;return Array.from({length:r+1},(v,h)=>{const y=h/r,x=new Date(l.getTime()-(1-y)*a*6e4),C=(e+y*c).toFixed(1),T=h===0?"start":h===r?"end":"middle";return[`<line x1="${C}" y1="${b}" x2="${C}" y2="${b+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${C}" y="${o-3}" text-anchor="${T}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(x)}</text>`].join("")}).join("")}function yi(t,i,e,s="7d"){const o=Ve[s]||60,n=ze(t,o),a=320,l=100,d=34,r=6,c=10,b=20,v=a-d-r,h=l-c-b,y=e?0:Math.min(...n),x=Math.max(...n,y+.001),C=x-y,T=w=>d+w/(n.length-1)*v,N=w=>c+h-(w-y)/C*h,P=`g${Math.random().toString(36).slice(2,8)}`,S=[0,.5,1].map(w=>{const L=y+w*C,I=c+h-w*h;return`<text x="${d-3}" y="${(I+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${L<10?L.toFixed(1):Math.round(L)}</text>`}).join(""),A=[.25,.5,.75].map(w=>{const L=(c+h-w*h).toFixed(1);return`<line x1="${d}" y1="${L}" x2="${a-r}" y2="${L}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),f=`<line x1="${d}" y1="${c+h}" x2="${a-r}" y2="${c+h}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,p=gi(s,a,d,r,l);if(e){const w=v/n.length*.7,L=n.map((I,z)=>{const J=(I-y)/C*h,Le=c+h-J;return`<rect x="${(T(z)-w/2).toFixed(1)}" y="${Le.toFixed(1)}" width="${w.toFixed(1)}" height="${J.toFixed(1)}" fill="${i}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${a} ${l}" width="100%" height="${l}" preserveAspectRatio="none">${S}${A}${f}${p}${L}</svg>`}const m=n.map((w,L)=>[T(L),N(w)]).map(([w,L],I)=>`${I?"L":"M"}${w.toFixed(1)},${L.toFixed(1)}`).join(" "),g=`${m} L${T(n.length-1).toFixed(1)},${(c+h).toFixed(1)} L${d},${(c+h).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:n.map(w=>+w.toFixed(2)),minV:+y.toFixed(2),maxV:+x.toFixed(2)}))}" data-color="${i}" style="position:relative">
    <svg viewBox="0 0 ${a} ${l}" width="100%" height="${l}" preserveAspectRatio="none">
      <defs><linearGradient id="${P}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${S}${A}${f}
      <path d="${g}" fill="url(#${P})"/>
      <path d="${m}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${p}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function $i(t,i,e){if(!e)return"";const s=Ve[i]||60,n=(We[i]||10080)/(s*60),a=ze(t,s);let l=[];if(e==="temp"){const d=a.reduce((c,b)=>c+Math.max(0,b),0)*(n/24),r=a.filter(c=>c<7).length*n;l=[{label:"Degrés jours",val:`${Math.round(d)} DJ`},{label:"Heures de froid",val:`${Math.round(r)} h`}]}else if(e==="pluie")l=[{label:"Cumul pluie",val:`${a.reduce((r,c)=>r+c,0).toFixed(1)} mm`}];else if(e==="rayo"){const d=a.filter(r=>r>120).length*n;l=[{label:"Ensoleillement",val:`${Math.round(d)} h`}]}else if(e==="etp")l=[{label:"ETP cumulée",val:`${(a.reduce((r,c)=>r+c,0)*(n/24)).toFixed(1)} mm`}];else if(e==="hws"){const d=a.filter(r=>r>50).length*n;l=[{label:"Heures d'humectation",val:`${Math.round(d)} h`}]}return l.length?`<div class="m-chart-cumuls">${l.map(d=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${d.label}</span>
      <span class="m-chart-cumul-val">${d.val}</span>
    </div>`).join("")}</div>`:""}function wi(t,i){const e=Te[t];return e?`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${e.color}">${e.label}</span>
      </div>
      ${yi(t,e.color,e.cumul,i)}
      ${$i(t,i,e.cumulsType)}
    </div>`:""}function xi(t){const i=JSON.parse(decodeURIComponent(t.dataset.chart||"{}"));if(!i.vals)return;const{vals:e,minV:s,maxV:o}=i,n=t.querySelector(".m-chart-tip"),a=t.querySelector(".m-chart-crosshair"),l=t.dataset.color||"#0172A4";function d(c){const b=t.getBoundingClientRect(),v=Math.max(0,Math.min(1,(c-b.left)/b.width)),h=Math.round(v*(e.length-1)),y=e[h],x=v*100;a.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${x}%;width:1px;background:${l};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(x,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=y<10?y.toFixed(1):String(Math.round(y))}function r(){a.style.display="none",n.style.display="none"}t.addEventListener("pointermove",c=>{c.preventDefault(),d(c.clientX)}),t.addEventListener("pointerdown",c=>d(c.clientX)),t.addEventListener("pointerup",r),t.addEventListener("pointerleave",r),t.style.cursor="crosshair"}function Ci(){return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${["Bilan hydrique","Stades phénologiques","Alertes actives","Données temps-réel"].map(i=>`
        <div class="m-placeholder-widget">
          <span class="m-placeholder-widget-name">${i}</span>
          <button class="m-widget-menu" type="button">•••</button>
        </div>`).join("")}
    </div>`}function Si(t,i){const e=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),s=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:i});document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(s.href),100)}function Li(t,i,e){const s=new Set;i.forEach(h=>{const y=O.find(x=>x.id===h);y&&($t[y.model]||[]).forEach(x=>s.add(x))});const o=[...new Set(["etp","rayonnement","temp_rosee",...s])].filter(h=>Te[h]),n=Ve[e]||60,a=We[e]||10080,l=a/n*6e4,d=new Date,r=new Date(d-a*6e4),c=["Horodatage",...o.map(h=>`${Te[h].label} (${Te[h].unit})`)].join(";"),b=Array.from({length:n},(h,y)=>[new Date(r.getTime()+y*l).toISOString().replace("T"," ").slice(0,19),...o.map(C=>ze(C,1)[0].toFixed(2))].join(";")),v=(t.name||"parcelle").replace(/[^\w]/g,"_");Si([c,...b].join(`\r
`),`${v}_${e}_${new Date().toISOString().slice(0,10)}.csv`)}function Mi(t,i="7d",e="1h"){const s=new Set;t.forEach(n=>{const a=O.find(l=>l.id===n);a&&($t[a.model]||[]).forEach(l=>s.add(l))});const o=[...new Set(["etp","rayonnement","temp_rosee",...s])];return`
    <div class="m-period-bar">
      <select class="m-period-sel">
        <option value="365d"${i==="365d"?" selected":""}>365 jours</option>
        <option value="30d"${i==="30d"?" selected":""}>30 jours</option>
        <option value="7d"${i==="7d"?" selected":""}>7 jours</option>
        <option value="hier"${i==="hier"?" selected":""}>Hier</option>
        <option value="1d"${i==="1d"?" selected":""}>Aujourd'hui</option>
        <option value="custom"${i==="custom"?" selected":""}>Personnalisé</option>
      </select>
      <select class="m-step-sel">
        <option value="1h"${e==="1h"?" selected":""}>Horaire</option>
        <option value="1d"${e==="1d"?" selected":""}>Journalier</option>
        <option value="1w"${e==="1w"?" selected":""}>Hebdo</option>
      </select>
      <button class="m-export-btn" title="Exporter CSV"><i class="bi bi-download"></i></button>
    </div>
    <div class="m-detail-section">
      ${o.map(n=>wi(n,i)).join("")}
    </div>`}function Ei(t,i,e){const s=e.map(o=>{const n=O.find(a=>a.id===o);return n?`${n.model} — ${n.serial}`:null}).filter(Boolean);return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row" data-action="edit-name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${t.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-exploitation">
          <span class="m-list-row-label">Exploitation</span>
          <span class="m-list-row-value">${(i==null?void 0:i.name)||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="edit-crop">
          <span class="m-list-row-label">Culture</span>
          <span class="m-list-row-value">${t.crop||"—"}</span>
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
          <a class="m-itinerary-link" href="geo:${t.lat},${t.lng}?q=${t.lat},${t.lng}" target="_blank">
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
          <span class="m-list-row-value">${t.irrigation||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${t.texture||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${s.length?s.map((o,n)=>`<div class="m-list-row${n===s.length-1?" m-list-row--last":""}">
              <span class="m-list-row-label">${o}</span>
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
          <span class="m-list-row-value">${(t.integrations||[]).length||"—"}</span>
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
    </div>`}function Fe(t,i=[]){const e=Y.find(v=>v.id===t.orgId);let s="widgets",o="7d",n="1h",a=!1;const l=(e==null?void 0:e.ville)||"",d=fe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Parcelles</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${t.name}</div>
          ${t.crop||l?`<div class="m-detail-subtitle">${[t.crop,l].filter(Boolean).join(" · ")}</div>`:""}
        </div>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="widgets">Widgets</button>
      <button class="m-detail-tab" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function r(){const v=d.querySelector("#detail-content");s==="widgets"&&(v.innerHTML=Ci()),s==="donnees"&&(v.innerHTML=Mi(i,o,n)),s==="params"&&(v.innerHTML=Ei(t,e,i),c()),b()}function c(){const v=window.L;v&&setTimeout(()=>{var x;const h=d.querySelector("#parcel-minimap");if(!h)return;const y=v.map(h,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(v.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(y),((x=t.latlngs)==null?void 0:x.length)>=3){const C=v.polygon(t.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(y);y.fitBounds(C.getBounds(),{padding:[8,8]})}else y.setView([t.lat,t.lng],14),v.circleMarker([t.lat,t.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(y)},50)}function b(){var v,h,y,x;(v=d.querySelector(".m-period-sel"))==null||v.addEventListener("change",C=>{o=C.target.value,r()}),(h=d.querySelector(".m-step-sel"))==null||h.addEventListener("change",C=>{n=C.target.value,r()}),(y=d.querySelector(".m-export-btn"))==null||y.addEventListener("click",()=>Li(t,i,o)),d.querySelectorAll(".m-chart-svg-wrap").forEach(C=>xi(C)),d.querySelectorAll(".m-list-row[data-action]").forEach(C=>{C.addEventListener("click",()=>H("Fonctionnalité à venir"))}),d.querySelectorAll(".m-widget-menu").forEach(C=>{C.addEventListener("click",T=>{T.stopPropagation(),H("Options widget")})}),(x=d.querySelector(".m-add-widget-btn"))==null||x.addEventListener("click",bi)}d.querySelectorAll(".m-detail-tab").forEach(v=>{v.addEventListener("click",()=>{d.querySelectorAll(".m-detail-tab").forEach(h=>h.classList.remove("active")),v.classList.add("active"),s=v.dataset.view,r()})}),d.querySelector("#d-plus").addEventListener("click",()=>fi(t)),d.querySelector(".m-detail-back").addEventListener("click",Z),d.querySelector("#d-star").addEventListener("click",()=>{a=!a;const v=d.querySelector("#d-star");v.querySelector("i").className=a?"bi bi-star-fill":"bi bi-star",v.style.color=a?"#f5c842":"",H(a?"Ajouté aux favoris":"Retiré des favoris")}),d.querySelector("#d-plus").addEventListener("click",()=>{const v=`
      <a class="m-sheet-link" data-a="widget"><i class="bi bi-grid-1x2"></i> Widget</a>
      <a class="m-sheet-link" data-a="irrigation"><i class="bi bi-droplet"></i> Irrigation</a>
      <a class="m-sheet-link" data-a="strategie-irrigation"><i class="bi bi-arrow-repeat"></i> Stratégie d'irrigation</a>
      <a class="m-sheet-link" data-a="capteur"><i class="bi bi-broadcast"></i> Capteur</a>
      <a class="m-sheet-link" data-a="alerte"><i class="bi bi-bell"></i> Alerte</a>
      <a class="m-sheet-link" data-a="integration" style="color:#8e8e93">
        <i class="bi bi-plug"></i> Intégration <span style="font-size:11px">(version web uniquement)</span>
      </a>
      <a class="m-sheet-link" data-a="note"><i class="bi bi-pencil"></i> Note</a>`,h=document.createElement("div");h.innerHTML=v;const y=U({title:"Ajouter à la parcelle",body:h,doneLabel:"Fermer",onDone:()=>{}});h.querySelectorAll("[data-a]").forEach(x=>{x.addEventListener("click",()=>{const C=x.dataset.a;y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{y.remove(),H(C==="integration"?"Disponible sur la version web":"Fonctionnalité à venir")},280)})})}),r()}const Ai=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:Fe},Symbol.toStringTag,{value:"Module"})),we=100,Ti={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function xe(t,i){const e=Ti[i];return e?O.some(s=>s.parcelId===t.id&&e.includes(s.model)):!0}const Me=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température air",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function ki(t){switch(t){case"irrigation":return Math.round(Math.random()>.4?Math.random()*45:0);case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Pi(t,i){let e=t.querySelector("#parcelles-content");e||(e=document.createElement("div"),e.id="parcelles-content",t.appendChild(e));const s=i==="admin",o=Y.filter(S=>S.id!==we),n=Object.fromEntries(Y.map(S=>[S.id,S]));let a=null,l=null;const d={};let r="carte",c="pluie",b="7 derniers jours",v="all";function h(S){const A=`${S}-${c}-${b}`;return A in d||(d[A]=ki(c)),d[A]}function y(S){var A;return((A=n[S.orgId])==null?void 0:A.ville)||null}function x(){return s?v==="all"?F:v===String(we)?F.filter(S=>S.orgId===we):F.filter(S=>String(S.orgId)===v):F.filter(S=>S.orgId===1)}function C(){if(a){try{a.remove()}catch{}a=null,l=null}}function T(){C();const S=Me.find(m=>m.id===c)||Me[0],A=x(),f=s?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${we}"${v===String(we)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${o.map(m=>`<option value="${m.id}"${v===String(m.id)?" selected":""}>${m.name}</option>`).join("")}
      </select>`:"",p=[...A].sort((m,g)=>{const $=xe(m,c),w=xe(g,c);return $&&!w?-1:!$&&w?1:$?h(g.id)-h(m.id):0}),u=p.length?`<div class="m-plain-list">${p.map(m=>{const g=y(m),$=xe(m,c);return`
            <div class="m-plain-row m-tappable" data-plot-id="${m.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${m.name}</span>
                ${g?`<span class="m-plain-city">${g}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${$?"":" m-plain-na"}">${$?`${h(m.id)} ${S.unit}`:"—"}</span>
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';e.innerHTML=`
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${r==="carte"?" m-view-btn--on":""}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${r==="liste"?" m-view-btn--on":""}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${Me.map(m=>`<option value="${m.id}"${m.id===c?" selected":""}>${m.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${S.aggs.map(m=>`<option${m===b?" selected":""}>${m}</option>`).join("")}
          </select>
        </div>
        ${f}
      </div>
      ${r==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${u}</div>`}`,P(),r==="carte"&&N(A,S)}function N(S,A){const f=window.L;f&&setTimeout(()=>{const p=e.querySelector("#parcel-map");if(!p)return;a=f.map(p,{zoomControl:!1,attributionControl:!1}),f.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(a);const u=[];S.forEach(m=>{const g=xe(m,c)?`${h(m.id)} ${A.unit}`:"—",$=O.filter(J=>J.parcelId===m.id).map(J=>J.id),w=()=>Fe(m,$),L=[m.lat,m.lng];m.latlngs&&m.latlngs.length>=3?(f.polygon(m.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(a).on("click",w),u.push(...m.latlngs)):u.push(L);const I=xe(m,c),z=f.circleMarker(L,{radius:I?8:6,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:I?.95:.4}).addTo(a);I&&z.bindTooltip(g,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),z.on("click",w)}),u.length&&(l=u,a.fitBounds(u,{padding:[32,32]})),a.invalidateSize()},0)}window.addEventListener("m-tab-change",S=>{S.detail==="parcelles"&&r==="carte"&&a&&setTimeout(()=>{a.invalidateSize(),l!=null&&l.length&&a.fitBounds(l,{padding:[32,32]})},50)});function P(){var S,A,f;e.querySelectorAll(".m-view-btn").forEach(p=>p.addEventListener("click",()=>{r=p.dataset.view,T()})),(S=e.querySelector("#metric-sel"))==null||S.addEventListener("change",p=>{var u;c=p.target.value,b=((u=Me.find(m=>m.id===c))==null?void 0:u.defaultAgg)||"",T()}),(A=e.querySelector("#agg-sel"))==null||A.addEventListener("change",p=>{b=p.target.value,T()}),(f=e.querySelector("#org-filter"))==null||f.addEventListener("change",p=>{v=p.target.value,T()}),e.querySelectorAll(".m-tappable[data-plot-id]").forEach(p=>{p.addEventListener("click",()=>{const u=F.find(g=>g.id===+p.dataset.plotId);if(!u)return;const m=O.filter(g=>g.parcelId===u.id).map(g=>g.id);Fe(u,m)})})}T()}const wt={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},Ii={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"},xt={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#e07050",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#80c8e8",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}]};function Ge(t,i){const e={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[t]||{base:50,amp:20,min:0};return Array.from({length:i},(s,o)=>{const n=o/i*Math.PI*4;if(e.sparse&&Math.random()>.25)return 0;const a=e.base+e.amp*Math.sin(n-1)+(Math.random()-.5)*e.amp*.5;return Math.max(e.min??0,Math.min(e.max??9999,a))})}const Je={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function qi(t,i,e,s,o,n=20){const a=Je[t]||10080,l=new Date,d=v=>t==="1d"||t==="hier"?`${String(v.getHours()).padStart(2,"0")}h`:t==="365d"?v.toLocaleDateString("fr-FR",{month:"short"}):`${String(v.getDate()).padStart(2,"0")}/${String(v.getMonth()+1).padStart(2,"0")}`,r=4,c=i-e-s,b=o-n;return Array.from({length:r+1},(v,h)=>{const y=h/r,x=new Date(l.getTime()-(1-y)*a*6e4),C=(e+y*c).toFixed(1),T=h===0?"start":h===r?"end":"middle";return[`<line x1="${C}" y1="${b}" x2="${C}" y2="${b+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${C}" y="${o-3}" text-anchor="${T}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(x)}</text>`].join("")}).join("")}function ji(t,i,e,s="7d"){const o=Ue[s]||60,n=Ge(t,o),a=320,l=100,d=34,r=6,c=10,b=20,v=a-d-r,h=l-c-b,y=e?0:Math.min(...n),x=Math.max(...n,y+.001),C=x-y,T=w=>d+w/(n.length-1)*v,N=w=>c+h-(w-y)/C*h,P=`g${Math.random().toString(36).slice(2,8)}`,S=[0,.5,1].map(w=>{const L=y+w*C,I=c+h-w*h;return`<text x="${d-3}" y="${(I+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${L<10?L.toFixed(1):Math.round(L)}</text>`}).join(""),A=[.25,.5,.75].map(w=>`<line x1="${d}" y1="${(c+h-w*h).toFixed(1)}" x2="${a-r}" y2="${(c+h-w*h).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),f=`<line x1="${d}" y1="${c+h}" x2="${a-r}" y2="${c+h}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,p=qi(s,a,d,r,l);if(e){const w=v/n.length*.7;return`<svg viewBox="0 0 ${a} ${l}" width="100%" height="${l}" preserveAspectRatio="none">
      ${S}${A}${f}
      ${n.map((L,I)=>{const z=(L-y)/C*h,J=c+h-z;return`<rect x="${(T(I)-w/2).toFixed(1)}" y="${J.toFixed(1)}" width="${w.toFixed(1)}" height="${z.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${p}
    </svg>`}const m=n.map((w,L)=>[T(L),N(w)]).map(([w,L],I)=>`${I?"L":"M"}${w.toFixed(1)},${L.toFixed(1)}`).join(" "),g=`${m} L${T(n.length-1).toFixed(1)},${(c+h).toFixed(1)} L${d},${(c+h).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:n.map(w=>+w.toFixed(2)),minV:+y.toFixed(2),maxV:+x.toFixed(2)}))}" data-color="${i}" style="position:relative">
    <svg viewBox="0 0 ${a} ${l}" width="100%" height="${l}" preserveAspectRatio="none">
      <defs><linearGradient id="${P}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${S}${A}${f}
      <path d="${g}" fill="url(#${P})"/>
      <path d="${m}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${p}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Hi(t){const i=JSON.parse(decodeURIComponent(t.dataset.chart||"{}"));if(!i.vals)return;const{vals:e}=i,s=t.querySelector(".m-chart-tip"),o=t.querySelector(".m-chart-crosshair"),n=t.dataset.color||"#0172A4";function a(d){const r=t.getBoundingClientRect(),c=Math.max(0,Math.min(1,(d-r.left)/r.width)),b=Math.round(c*(e.length-1)),v=e[b],h=c*100;o.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${h}%;width:1px;background:${n};opacity:.5`,s.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(h,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,s.textContent=v<10?v.toFixed(1):String(Math.round(v))}function l(){o.style.display="none",s.style.display="none"}t.addEventListener("pointermove",d=>{d.preventDefault(),a(d.clientX)}),t.addEventListener("pointerdown",d=>a(d.clientX)),t.addEventListener("pointerup",l),t.addEventListener("pointerleave",l),t.style.cursor="crosshair"}const Ue={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function _i(t,i,e){if(!e)return"";const s=Ue[i]||60,n=(Je[i]||10080)/(s*60),a=Ge(t,s);let l=[];if(e==="temp"){const d=a.reduce((c,b)=>c+Math.max(0,b),0)*(n/24),r=a.filter(c=>c<7).length*n;l=[{label:"Degrés jours",val:`${Math.round(d)} DJ`},{label:"Heures de froid",val:`${Math.round(r)} h`}]}else if(e==="pluie")l=[{label:"Cumul pluie",val:`${a.reduce((r,c)=>r+c,0).toFixed(1)} mm`}];else if(e==="rayo"){const d=a.filter(r=>r>120).length*n;l=[{label:"Ensoleillement",val:`${Math.round(d)} h`}]}else if(e==="hws"){const d=a.filter(r=>r>50).length*n;l=[{label:"Heures d'humectation",val:`${Math.round(d)} h`}]}return l.length?`<div class="m-chart-cumuls">${l.map(d=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${d.label}</span>
      <span class="m-chart-cumul-val">${d.val}</span>
    </div>`).join("")}</div>`:""}function Di(t,i){const e=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),s=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:i});document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(s.href),100)}function Ri(t,i){const e=xt[t.model]||[];if(!e.length)return;const s=Ue[i]||60,o=Je[i]||10080,n=o/s*6e4,a=new Date,l=new Date(a-o*6e4),d=["Horodatage",...e.map(c=>`${c.label} (${c.unit})`)].join(";"),r=Array.from({length:s},(c,b)=>[new Date(l.getTime()+b*n).toISOString().replace("T"," ").slice(0,19),...e.map(h=>Ge(h.id,1)[0].toFixed(2))].join(";"));Di([d,...r].join(`\r
`),`${t.serial}_${i}_${new Date().toISOString().slice(0,10)}.csv`)}function Bi(t,i="7d",e="1h"){const s=xt[t.model]||[];if(!s.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const o=s.map(n=>`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${n.color}">${n.label}</span>
        </div>
        ${ji(n.id,n.color,n.cumul,i)}
        ${_i(n.id,i,n.cumulsType)}
      </div>`).join("");return`
    <div class="m-period-bar">
      <select class="m-period-sel">
        <option value="365d"${i==="365d"?" selected":""}>365 jours</option>
        <option value="30d"${i==="30d"?" selected":""}>30 jours</option>
        <option value="7d"${i==="7d"?" selected":""}>7 jours</option>
        <option value="hier"${i==="hier"?" selected":""}>Hier</option>
        <option value="1d"${i==="1d"?" selected":""}>Aujourd'hui</option>
        <option value="custom"${i==="custom"?" selected":""}>Personnalisé</option>
      </select>
      <select class="m-step-sel">
        <option value="1h"${e==="1h"?" selected":""}>Horaire</option>
        <option value="1d"${e==="1d"?" selected":""}>Journalier</option>
        <option value="1w"${e==="1w"?" selected":""}>Hebdo</option>
      </select>
      <button class="m-export-btn" title="Exporter CSV"><i class="bi bi-download"></i></button>
    </div>
    <div class="m-detail-section">${o}</div>`}function Fi(t){const i=t.parcelId?F.find(a=>a.id===t.parcelId):null,e=i?Y.find(a=>a.id===i.orgId):null,s=t.networkQuality||0,o=s>70?"#30d158":s>40?"#ff9f0a":"#ff3b30",n=t.event?[t.event]:[];return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${Ii[t.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${t.model} — ${wt[t.model]||t.model}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">N° de série</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:13px">${t.serial}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Réseau télécom</span>
          <span class="m-list-row-value">${t.telecom||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-exploitation">
          <span class="m-list-row-label">Exploitation</span>
          <span class="m-list-row-value">${(e==null?void 0:e.name)||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation</div>
      <div class="m-list">
        ${i?'<div id="sensor-minimap" class="m-minimap-container"></div>':""}
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${(e==null?void 0:e.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${(i==null?void 0:i.lat)||0},${(i==null?void 0:i.lng)||0}?q=${(i==null?void 0:i.lat)||0},${(i==null?void 0:i.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">État</div>
      <div class="m-list">
        ${n.length?n.map(a=>`<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${a}</span></div>`).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${o};font-weight:600">${s}%</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Émissions (7j)</span>
          <span class="m-list-row-value">${t.messages7d??"—"} msg</span>
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
        ${i?`<div class="m-list-row"><span class="m-list-row-label">Parcelle</span><span class="m-list-row-value">${i.name}</span><i class="bi bi-chevron-right m-list-chevron"></i></div>`:""}
        <div class="m-list-row m-list-row--last" data-action="add-plot" style="color:#007aff">
          <i class="bi bi-plus-circle" style="font-size:15px"></i>
          <span class="m-list-row-label" style="color:#007aff">Lier une parcelle</span>
        </div>
      </div>

      <div class="m-list-section-header">Gestion</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'ajout</span>
          <span class="m-list-row-value">${t.lastMessage?new Date(t.lastMessage).toLocaleDateString("fr-FR"):"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last" data-action="delete" style="color:#ff3b30">
          <i class="bi bi-trash" style="color:#ff3b30;font-size:15px"></i>
          <span class="m-list-row-label" style="color:#ff3b30">Supprimer de l'exploitation</span>
        </div>
      </div>
      <div style="height:24px"></div>
    </div>`}function ut(t){var b;const i=t.parcelId?F.find(v=>v.id===t.parcelId):null;let e="donnees",s="7d",o="1h",n=!1;const a=i&&((b=Y.find(v=>v.id===i.orgId))==null?void 0:b.ville)||"",l=fe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${t.serial}</div>
          <div class="m-detail-subtitle">${[wt[t.model]||t.model,a].filter(Boolean).join(" · ")}</div>
        </div>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function d(){const v=l.querySelector("#detail-content");e==="donnees"&&(v.innerHTML=Bi(t,s,o)),e==="params"&&(v.innerHTML=Fi(t),r()),c()}function r(){const v=window.L;!v||!i||setTimeout(()=>{const h=l.querySelector("#sensor-minimap");if(!h)return;const y=v.map(h,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});v.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(y),y.setView([i.lat,i.lng],15),v.circleMarker([i.lat,i.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(y)},50)}function c(){var v,h,y;(v=l.querySelector(".m-period-sel"))==null||v.addEventListener("change",x=>{s=x.target.value,d()}),(h=l.querySelector(".m-step-sel"))==null||h.addEventListener("change",x=>{o=x.target.value,d()}),(y=l.querySelector(".m-export-btn"))==null||y.addEventListener("click",()=>Ri(t,s)),l.querySelectorAll(".m-chart-svg-wrap").forEach(x=>Hi(x)),l.querySelectorAll(".m-list-row[data-action]").forEach(x=>{x.addEventListener("click",()=>H("Fonctionnalité à venir"))})}l.querySelectorAll(".m-detail-tab").forEach(v=>{v.addEventListener("click",()=>{l.querySelectorAll(".m-detail-tab").forEach(h=>h.classList.remove("active")),v.classList.add("active"),e=v.dataset.view,d()})}),l.querySelector(".m-detail-back").addEventListener("click",Z),l.querySelector("#d-star").addEventListener("click",()=>{n=!n;const v=l.querySelector("#d-star");v.querySelector("i").className=n?"bi bi-star-fill":"bi bi-star",v.style.color=n?"#f5c842":"",H(n?"Ajouté aux favoris":"Retiré des favoris")}),l.querySelector("#d-plus").addEventListener("click",()=>{const v=`
      <button class="m-sheet-option" data-a="plot"><i class="bi bi-map"></i> Parcelle</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" data-a="maintenance"><i class="bi bi-tools"></i> Opération de maintenance</button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`,h=document.createElement("div");h.innerHTML=v;const y=U({title:"Ajouter au capteur",body:h,doneLabel:"Fermer",onDone:()=>{}});h.querySelectorAll("[data-a]").forEach(x=>{x.addEventListener("click",()=>{y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{y.remove(),H("Fonctionnalité à venir")},280)})})}),d()}const be=100,pt=1,De=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Oi={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},Ni={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function Ee(t,i){return(Ni[t]||[]).includes(i)}function zi(t){return Oi[t]||t}const Ae=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Vi(t){switch(t){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Wi(t,i){let e=t.querySelector("#capteurs-content");e||(e=document.createElement("div"),e.id="capteurs-content",t.appendChild(e));const s=i==="admin",o=Y.filter(f=>f.id!==be),n=Object.fromEntries(F.map(f=>[f.id,f])),a=Object.fromEntries(Y.map(f=>[f.id,f]));let l=null,d=null;const r={};let c="carte",b="pluie",v="7 derniers jours",h="all";function y(f){const p=`${f}-${b}-${v}`;return p in r||(r[p]=Vi(b)),r[p]}function x(){if(s){if(h==="all")return O;if(h===String(be)){const g=new Set(F.filter($=>$.orgId===be).map($=>$.id));return O.filter($=>g.has($.parcelId))}const m=new Set(F.filter(g=>String(g.orgId)===h).map(g=>g.id));return O.filter(g=>m.has(g.parcelId))}const f=new Set(F.filter(m=>m.orgId===pt).map(m=>m.id)),p=O.filter(m=>f.has(m.parcelId)),u=O.filter(m=>!f.has(m.parcelId)&&De.includes(m.model));return h==="mine"?p:h==="network"?u:[...p,...u]}function C(f){const p=f.parcelId?n[f.parcelId]:null;if(!p)return null;const u=(f.id*7919%1e3-500)/1e6,m=(f.id*6271%1e3-500)/1e6;return{lat:p.lat+u,lng:p.lng+m,name:p.name}}function T(f){var u;const p=f.parcelId?n[f.parcelId]:null;return p&&((u=a[p.orgId])==null?void 0:u.ville)||null}function N(){if(l){try{l.remove()}catch{}l=null,d=null}}function P(){N();const f=Ae.find($=>$.id===b)||Ae[0],p=x();let u;if(s)u=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${be}"${h===String(be)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${o.map($=>`<option value="${$.id}"${h===String($.id)?" selected":""}>${$.name}</option>`).join("")}
        </select>`;else{const $=Y.find(L=>L.id===pt),w=Y.find(L=>L.id===be);u=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${h==="all"?" selected":""}>Tout le réseau</option>
          <option value="mine"${h==="mine"?" selected":""}>${($==null?void 0:$.name)||"Mon organisation"}</option>
          <option value="network"${h==="network"?" selected":""}>${(w==null?void 0:w.name)||"Breiz'Agri Conseil"}</option>
        </select>`}const m=[...p].sort(($,w)=>{const L=Ee($.model,b),I=Ee(w.model,b);return L&&!I?-1:!L&&I?1:L?y(w.id)-y($.id):0}),g=m.length?`<div class="m-plain-list">${m.map($=>{const w=De.includes($.model),I=Ee($.model,b)?`<span class="m-sensor-val">${y($.id)} ${f.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${$.id}">
              <div class="m-sensor-icon" style="background:${w?"#0172A420":"#5b8dd920"};color:${w?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${zi($.model)}</span>
                <span class="m-sensor-sub">${$.serial}${T($)?` · ${T($)}`:""}</span>
              </div>
              ${I}
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';e.innerHTML=`
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
            ${Ae.map($=>`<option value="${$.id}"${$.id===b?" selected":""}>${$.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${f.aggs.map($=>`<option${$===v?" selected":""}>${$}</option>`).join("")}
          </select>
        </div>
        ${u}
      </div>
      ${c==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${g}</div>`}`,A(),c==="carte"&&S(p,f)}function S(f,p){const u=window.L;u&&setTimeout(()=>{const m=e.querySelector("#sensor-map");if(!m)return;l=u.map(m,{zoomControl:!1,attributionControl:!1}),u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l);const g=[];f.forEach($=>{const w=C($);if(!w)return;const L=Ee($.model,b),I=De.includes($.model),z=u.circleMarker([w.lat,w.lng],{radius:L?10:7,color:"#fff",weight:2,fillColor:I?"#0172A4":"#5b8dd9",fillOpacity:L?.95:.45}).addTo(l);L&&z.bindTooltip(`${y($.id)} ${p.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),z.on("click",()=>ut($)),g.push([w.lat,w.lng])}),g.length&&(d=g,l.fitBounds(g,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",f=>{f.detail==="capteurs"&&c==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),d!=null&&d.length&&l.fitBounds(d,{padding:[32,32]})},50)});function A(){var f,p,u;e.querySelectorAll(".m-view-btn").forEach(m=>m.addEventListener("click",()=>{c=m.dataset.view,P()})),(f=e.querySelector("#metric-sel"))==null||f.addEventListener("change",m=>{var g;b=m.target.value,v=((g=Ae.find($=>$.id===b))==null?void 0:g.defaultAgg)||"",P()}),(p=e.querySelector("#agg-sel"))==null||p.addEventListener("change",m=>{v=m.target.value,P()}),(u=e.querySelector("#org-filter"))==null||u.addEventListener("change",m=>{h=m.target.value,P()}),e.querySelectorAll(".m-tappable[data-sensor-id]").forEach(m=>{m.addEventListener("click",()=>{const g=O.find($=>$.id===+m.dataset.sensorId);g&&ut(g)})})}P()}const Re=100,vt=1,Gi=["Arboriculture","Viticulture","Maraîchage","Grandes cultures","Polyculture-Élevage","Pépiniériste","Floriculture","Trufficulture","Organismes publics / semi-publics","Coopérative","Négoce","Concessionnaire","Semencier","Laboratoire / Institut / Recherche","Autre"],Ji=["Essentiel","Plus","Expert"],Ui=["Administrateur","Agent","Lecteur"];function Zi(t){const i=(t||"").match(/(\d{5})/);if(i){const e=t.indexOf(i[0]);return{rue:t.slice(0,e).trim().replace(/,\s*$/,""),cp:i[0],ville:t.slice(e+5).trim().replace(/^,?\s*/,"")}}return{rue:t||"",cp:"",ville:""}}function ht({rue:t,cp:i,ville:e}){return[t,i&&e?`${i} ${e}`:i||e].filter(Boolean).join(", ")}function Yi(t){const[i,e,s]=t.split("-");return`${s}/${e}/${i}`}function Xi(t,i){if(!t)return{};const e=i==="admin",s=Y.find(p=>p.id===(e?Re:vt));if(!s)return{};const n=(e?Ie.filter(p=>{var u;return!((u=p.orgIds)!=null&&u.length)||p.orgIds.includes(Re)}):Ie.filter(p=>{var u;return(u=p.orgIds)==null?void 0:u.includes(vt)})).map(p=>({...p})),a=Y.filter(p=>p.id!==Re&&p.statut!=="inactif").length,l=Zi(s.adresse||""),d={rue:"",cp:"",ville:""},r={name:s.name,metiers:[e?"Coopérative":"Grandes cultures"],adresseFactu:l,adresseLivrai:d,markerLat:s.lat||48.117,markerLng:s.lng||-1.678,plan:s.plan||"Plus",contrat:{numero:e?"CTR-NET-2022-00001":s.codeAdherent||"CTR-2022-00418",dateAdhesion:s.dateAdhesion||"2022-03-15",licencesMembres:e?Ie.length:3,licencesAdherents:e?a:null,licencesIntegrations:e?27:2}};let c=null,b=null,v=null;function h(){if(!v)return;const p=t.querySelector(`#${v}`);if(!p)return;if(c){try{c.remove()}catch{}c=null,b=null}const u=window.L;u&&(c=u.map(p,{zoomControl:!0,attributionControl:!1}),u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(c),c.setView([r.markerLat,r.markerLng],14),b=u.marker([r.markerLat,r.markerLng],{draggable:!0}).addTo(c),b.on("dragend",()=>{const m=b.getLatLng();r.markerLat=m.lat,r.markerLng=m.lng,H("Position mise à jour")}),setTimeout(()=>c==null?void 0:c.invalidateSize(),50))}function y(){if(v=`expl-map-${Math.random().toString(36).slice(2,8)}`,c){try{c.remove()}catch{}c=null,b=null}const p=ht(r.adresseFactu)||"—",u=ht(r.adresseLivrai);t.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Exploitation</div>
      <div class="m-list">
        <div class="m-list-row" data-action="name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${r.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="metier">
          <span class="m-list-row-label">Métier</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px">${r.metiers.length?r.metiers.join(", "):"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Adresses</div>
      <div class="m-list">
        <div class="m-list-row" data-action="adresse-factu">
          <span class="m-list-row-label">Facturation</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${p}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${u||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation <span style="font-size:11px;font-weight:400;color:#8e8e93">— déplacer le marqueur pour modifier</span></div>
      <div id="${v}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${r.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Yi(r.contrat.dateAdhesion)}</span>
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
        <div class="m-list-row m-list-row--last" data-action="plan">
          <span class="m-list-row-label">Abonnement</span>
          <span class="m-list-row-value" style="color:#0172A4;font-weight:600">${r.plan}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Membres (${n.length})</div>
      <div class="m-list">
        ${n.length?n.map((m,g)=>`
          <div class="m-list-row${g===n.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${g}">
            <div class="m-list-row-col">
              <span class="m-list-row-label">${m.prenom} ${m.nom}</span>
              <span class="m-list-row-sub">${m.role}</span>
            </div>
            <i class="bi bi-chevron-right m-list-chevron"></i>
          </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun membre</span></div>'}
      </div>
      <div style="height:32px"></div>`,x()}function x(){t.querySelectorAll(".m-list-row[data-action]").forEach(p=>{p.addEventListener("click",()=>{switch(p.dataset.action){case"name":C("Nom de l'exploitation",r.name,u=>{r.name=u,y()});break;case"metier":N();break;case"adresse-factu":T("Adresse de facturation",r.adresseFactu,u=>{r.adresseFactu=u,y()});break;case"adresse-livrai":T("Adresse de livraison",r.adresseLivrai,u=>{r.adresseLivrai=u,y()});break;case"plan":P("Abonnement",Ji,r.plan,u=>{r.plan=u,y()});break}})}),t.querySelectorAll("[data-member-idx]").forEach(p=>{p.addEventListener("click",()=>S(+p.dataset.memberIdx))})}function C(p,u,m){const g=document.createElement("div");g.innerHTML=`<input class="m-sheet-input" type="text" value="${(u||"").replace(/"/g,"&quot;")}" placeholder="${p}">`;const $=g.querySelector("input");U({title:p,body:g,doneLabel:"Enregistrer",onDone:()=>{const w=$.value.trim();w&&(m(w),H("Enregistré"))}}),setTimeout(()=>$.focus(),300)}function T(p,u,m){const g=document.createElement("div");g.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(u.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${u.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(u.ville||"").replace(/"/g,"&quot;")}">`,U({title:p,body:g,doneLabel:"Enregistrer",onDone:()=>{m({rue:g.querySelector("#f-rue").value.trim(),cp:g.querySelector("#f-cp").value.trim(),ville:g.querySelector("#f-ville").value.trim()}),H("Enregistré")}}),setTimeout(()=>g.querySelector("#f-rue").focus(),300)}function N(){const p=new Set(r.metiers),u=document.createElement("div"),m=()=>{u.innerHTML=Gi.map(g=>`
        <div class="m-sheet-option${p.has(g)?" m-sheet-option--active":""}" data-m="${g}" style="justify-content:space-between">
          <span>${g}</span>
          ${p.has(g)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),u.querySelectorAll("[data-m]").forEach(g=>{g.addEventListener("click",()=>{const $=g.dataset.m;p.has($)?p.delete($):p.add($),m()})})};m(),U({title:"Métiers",body:u,doneLabel:"Valider",onDone:()=>{r.metiers=[...p],y()}})}function P(p,u,m,g){const $=document.createElement("div");$.innerHTML=u.map((L,I)=>`
      <div class="m-sheet-option${L===m?" m-sheet-option--active":""}" data-i="${I}">
        <span>${L}</span>${L===m?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const w=U({title:p,body:$,doneLabel:"Fermer",onDone:()=>{}});$.querySelectorAll(".m-sheet-option").forEach(L=>{L.addEventListener("click",()=>{g(u[+L.dataset.i]),w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>w.remove(),280),H("Enregistré")})})}function S(p){const u=n[p];if(!u)return;const m=document.createElement("div");m.innerHTML=`
      <div class="m-sheet-links">
        <a class="m-sheet-link" id="mem-delete" style="color:#ff3b30">Supprimer ${u.prenom} ${u.nom}</a>
      </div>`;const g=U({title:`${u.prenom} ${u.nom}`,body:m,doneLabel:"Fermer",onDone:()=>{}});m.querySelector("#mem-delete").addEventListener("click",()=>{n.splice(p,1),g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{g.remove(),y()},280),H("Membre retiré")})}function A(){const p=document.createElement("div");p.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <input class="m-sheet-input" type="text" placeholder="Prénom Nom" id="inv-name">
      <select class="m-sheet-input" id="inv-role">
        ${Ui.map(u=>`<option>${u}</option>`).join("")}
      </select>`,U({title:"Inviter un membre",body:p,doneLabel:"Envoyer",onDone:()=>H("Invitation envoyée")}),setTimeout(()=>p.querySelector("#inv-email").focus(),300)}y();function f(){requestAnimationFrame(()=>setTimeout(h,100))}return{onAdd:A,refresh:f}}const Ki=100,Qi=["Essentiel","Plus","Expert"],es={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function bt(t){return es[t]||{label:t||"—",color:"#8e8e93"}}function ts(t,i){if(!t)return{};if(i!=="admin")return t.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const e=Y.filter(a=>a.id!==Ki).map(a=>({...a}));function s(){const a=e.filter(l=>l.statut!=="inactif");t.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Adhérents — ${a.length} actifs sur ${e.length}</div>
      <div class="m-list">
        ${e.map((l,d)=>{const r=bt(l.statut);return`
            <div class="m-list-row${d===e.length-1?" m-list-row--last":""} m-tappable" data-org-idx="${d}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${l.proprietaire||l.name}</span>
                <span class="m-list-row-sub">${l.name} · ${l.plan||"—"}</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${r.color};flex-shrink:0;margin-right:4px">${r.label}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join("")}
      </div>
      <div style="height:32px"></div>`,t.querySelectorAll("[data-org-idx]").forEach(l=>{l.addEventListener("click",()=>o(e[+l.dataset.orgIdx],+l.dataset.orgIdx))})}function o(a,l){var h,y;const d=bt(a.statut),r=a.statut==="invitation en attente",c=`https://app.weenat.com/invitation?code=${a.codeAdherent||"ADZ-XXX"}`,b=document.createElement("div");b.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email</span><span>${a.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${a.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${a.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${a.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${F.filter(x=>x.orgId===a.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const x=new Set(F.filter(C=>C.orgId===a.id).map(C=>C.id));return O.filter(C=>x.has(C.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${d.color};font-weight:600">${d.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${a.dateAdhesion?a.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${r?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const v=U({title:a.name,body:b,doneLabel:"Fermer",onDone:()=>{}});(h=b.querySelector("#lnk-copy"))==null||h.addEventListener("click",()=>{var x;(x=navigator.clipboard)==null||x.writeText(c).catch(()=>{}),H("Lien copié !")}),(y=b.querySelector("#lnk-cancel"))==null||y.addEventListener("click",()=>{a.statut="inactif",v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),s(),H("Invitation annulée")},280)}),b.querySelector("#lnk-delete").addEventListener("click",()=>{e.splice(l,1),v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),s(),H("Adhérent supprimé")},280)})}function n(){const a=document.createElement("div");a.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${Qi.map(l=>`<option>${l}</option>`).join("")}
      </select>`,U({title:"Inviter un adhérent",body:a,doneLabel:"Envoyer",onDone:()=>{const l=a.querySelector("#adh-email").value.trim(),d=a.querySelector("#adh-code").value.trim();if(!l||!d){H("Email et code requis");return}e.push({id:Date.now(),name:l,proprietaire:l,email:l,codeAdherent:d,plan:a.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),s(),H("Invitation envoyée")}}),setTimeout(()=>a.querySelector("#adh-email").focus(),300)}return s(),{onAdd:n}}const is=new URLSearchParams(window.location.search),oe=is.get("role")==="adherent"?"adherent":"admin";function Ct(){const t=document.getElementById("status-time");if(!t)return;const i=new Date;t.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}Ct();setInterval(Ct,1e4);const le=["dashboard","parcelles","capteurs","alertes","parametres"];let ke="dashboard";function pe(t){var i,e;!le.includes(t)||t===ke||(ke=t,document.querySelectorAll(".m-screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(s=>s.classList.remove("active")),(i=document.getElementById(`screen-${t}`))==null||i.classList.add("active"),(e=document.querySelector(`.nav-item[data-tab="${t}"]`))==null||e.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})))}function ss(t){var e;(e=document.getElementById("abandon-modal"))==null||e.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),t()})}document.getElementById("bottom-nav").addEventListener("click",t=>{const i=t.target.closest(".nav-item");if(!i)return;const e=i.dataset.tab;Ye()>0&&Mt()?ss(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})),pe(e)}):(Ye()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})),pe(e))});let K=null,Ce=null;const St=50,Se=document.getElementById("screen-stack");Se.addEventListener("mousedown",t=>{if(t.target.closest(".leaflet-container")){K=null;return}K=t.clientX,Ce=t.clientY});Se.addEventListener("mouseup",t=>{if(K===null)return;const i=t.clientX-K,e=t.clientY-Ce;if(Math.abs(i)>St&&Math.abs(i)>Math.abs(e)){const s=le.indexOf(ke);i<0&&s<le.length-1&&pe(le[s+1]),i>0&&s>0&&pe(le[s-1])}K=null,Ce=null});Se.addEventListener("mouseleave",()=>{K=null});Se.addEventListener("touchstart",t=>{if(t.target.closest(".leaflet-container")){K=null;return}K=t.touches[0].clientX,Ce=t.touches[0].clientY},{passive:!0});Se.addEventListener("touchend",t=>{if(K===null)return;const i=t.changedTouches[0].clientX-K,e=t.changedTouches[0].clientY-Ce;if(Math.abs(i)>St&&Math.abs(i)>Math.abs(e)){const s=le.indexOf(ke);i<0&&s<le.length-1&&pe(le[s+1]),i>0&&s>0&&pe(le[s-1])}K=null},{passive:!0});const as=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...oe==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],Pe={};function ns(t){const i=document.getElementById("param-plus-btn"),e=document.getElementById("param-plus-spacer"),s=Pe[t];i&&e&&(s!=null&&s.onAdd?(i.style.display="",e.style.display="none",i.onclick=s.onAdd):(i.style.display="none",e.style.display=""))}function ls(){var i;const t=document.getElementById("param-segment");t&&(oe==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),as.forEach((e,s)=>{const o=document.createElement("button");o.className="m-segment-btn"+(s===0?" active":""),o.textContent=e.label,o.dataset.target=e.id,o.addEventListener("click",()=>{var n,a,l;t.querySelectorAll(".m-segment-btn").forEach(d=>d.classList.remove("active")),o.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(d=>d.classList.remove("active")),(n=document.getElementById(e.id))==null||n.classList.add("active"),ns(e.id),(l=(a=Pe[e.id])==null?void 0:a.refresh)==null||l.call(a)}),t.appendChild(o)}))}ls();pi(document.getElementById("screen-dashboard"),oe);Pi(document.getElementById("screen-parcelles"),oe);Wi(document.getElementById("screen-capteurs"),oe);Dt(document.getElementById("screen-alertes"),oe);It(document.getElementById("param-compte"),oe);Pe["param-exploitation"]=Xi(document.getElementById("param-exploitation"),oe);Pe["param-reseau"]=ts(document.getElementById("param-reseau"),oe);export{Z as a,ps as c,fe as p};
