const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/irrigation-9MJlYti7.js","assets/irrigations-B9z3zJvy.js","assets/plots-2gWiFi4a.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/sensors-DDe0aa9W.js","assets/orgs-Cx4wNzLL.js","assets/network-YzWdS0n_.js","assets/members-DEd9yWse.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as O}from"./plots-2gWiFi4a.js";import{s as N}from"./sensors-DDe0aa9W.js";import{o as J}from"./orgs-Cx4wNzLL.js";import{n as me}from"./network-YzWdS0n_.js";import{b as ze,I as Ct}from"./irrigations-B9z3zJvy.js";import{m as Ie}from"./members-DEd9yWse.js";const ve=[];function be(t){const i=document.getElementById("phone-screen"),e=document.createElement("div");return e.className="m-detail-layer",e.innerHTML=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-detail-layer--in")),ve.push(e),e}function K(){const t=ve.pop();t&&(t.classList.remove("m-detail-layer--in"),setTimeout(()=>t.remove(),300))}function et(){return ve.length}function Bt(){return ve.some(t=>t.dataset.dirty==="true")}function Is(){ve.forEach(t=>delete t.dataset.dirty)}window.addEventListener("m-tab-change",()=>{ve.forEach(t=>t.remove()),ve.length=0});const tt={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Ot=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],it=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let oe={};function Y(t){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function he({title:t,body:i,onDone:e,doneLabel:a="OK"}){var l;const r=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${a}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,s.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),r.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const n=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};return s.querySelector(".m-sheet-cancel").addEventListener("click",n),s.querySelector(".m-sheet-done").addEventListener("click",()=>{e==null||e(),n()}),s.addEventListener("click",d=>{d.target===s&&n()}),s}function st(t,i,e){const a=document.createElement("div");a.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${t}">`;const r=a.querySelector("input");he({title:t,body:a,doneLabel:"Enregistrer",onDone:()=>{e(r.value.trim()),Y("Enregistré")}}),setTimeout(()=>r.focus(),300)}function at(t,i,e,a){const r=document.createElement("div");r.innerHTML=i.map((n,l)=>`
    <div class="m-sheet-option${n===e?" m-sheet-option--active":""}" data-i="${l}">
      <span>${n}</span>
      ${n===e?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const s=he({title:t,body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll(".m-sheet-option").forEach(n=>{n.addEventListener("click",()=>{a(i[+n.dataset.i]),s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280),Y("Enregistré")})})}function Ft(t,i){const e=document.createElement("div"),a=()=>{var r;e.innerHTML=t.map((s,n)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${n}" data-f="label" value="${s.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${n}" data-f="numero" value="${s.numero}" placeholder="+33 6…">
        </div>
        ${n>0?`<button class="m-sheet-remove" data-i="${n}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',e.querySelectorAll("input").forEach(s=>{s.addEventListener("input",()=>{t[+s.dataset.i][s.dataset.f]=s.value})}),e.querySelectorAll(".m-sheet-remove").forEach(s=>{s.addEventListener("click",()=>{t.splice(+s.dataset.i,1),a()})}),(r=e.querySelector(".m-sheet-add-phone"))==null||r.addEventListener("click",()=>{t.push({label:"",numero:""}),a()})};a(),he({title:"Téléphone(s)",body:e,doneLabel:"Enregistrer",onDone:()=>{i(t),Y("Enregistré")}})}function Nt(t,i,e){const a=document.createElement("div");a.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${t.name}</div>
      <div class="m-sheet-key-date">créée le ${t.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${t.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,a.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var s;(s=navigator.clipboard)==null||s.writeText(t.value).catch(()=>{}),Y("Clé copiée !")});const r=he({title:"Clé API",body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const s=i.findIndex(n=>n.id===t.id);s!==-1&&i.splice(s,1),r.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{r.remove(),e()},280),Y("Clé supprimée")})}function zt(){const t="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>t[Math.floor(Math.random()*t.length)]).join("")}function Vt(t){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const e=i.querySelector("input");he({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const a=e.value.trim();if(!a){Y("Entrez un nom");return}const r={id:Date.now(),name:a,created:new Date().toLocaleDateString("fr-FR"),value:zt()};t(r),Y("Clé générée")}}),setTimeout(()=>e.focus(),300)}function Wt(t,i){oe={profile:JSON.parse(JSON.stringify(tt[i]||tt.admin)),langue:"Français",unites:it[0]};const a=localStorage.getItem("mobile_avatarUrl")||null;function r(){const n=oe.profile,l=a?`<img src="${a}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${n.initials}</span>`,d=n.apiKeys.map(o=>`
      <div class="m-list-row" data-key-id="${o.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${o.name}</span>
          <span class="m-list-row-sub">créée le ${o.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),c=n.phones.map((o,m)=>`
      <div class="m-list-row${m===n.phones.length-1&&n.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${o.label||"Numéro "+(m+1)}</span>
        <span class="m-list-row-value">${o.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");t.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${l}</div>
        <div class="m-compte-name">${n.prenom} ${n.nom}</div>
        <label class="m-compte-avatar-btn">
          <input type="file" accept="image/*" id="m-avatar-upload" hidden>
          Changer la photo
        </label>
      </div>

      <div class="m-list-section-header">Identité</div>
      <div class="m-list">
        <div class="m-list-row" data-action="prenom">
          <span class="m-list-row-label">Prénom</span>
          <span class="m-list-row-value">${n.prenom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="nom">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${n.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Contact</div>
      <div class="m-list">
        <div class="m-list-row" data-action="email">
          <span class="m-list-row-label">Email</span>
          <span class="m-list-row-value" style="font-size:13px">${n.email} <i class="bi bi-check-circle-fill" style="color:#30d158;font-size:10px"></i></span>
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
          <span class="m-list-row-value" id="val-langue">${oe.langue}</span>
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
    `,s()}function s(){var l;const n=oe.profile;(l=t.querySelector("#m-avatar-upload"))==null||l.addEventListener("change",d=>{const c=d.target.files[0];if(!c)return;const o=new FileReader;o.onload=m=>{localStorage.setItem("mobile_avatarUrl",m.target.result),t.querySelector("#m-avatar").innerHTML=`<img src="${m.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},o.readAsDataURL(c)}),t.querySelectorAll(".m-list-row[data-action]").forEach(d=>{d.addEventListener("click",()=>{switch(d.dataset.action){case"prenom":st("Prénom",n.prenom,c=>{n.prenom=c,r()});break;case"nom":st("Nom",n.nom,c=>{n.nom=c,r()});break;case"email":he({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${n.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>Y("Fonctionnalité à venir")});break;case"phones":Ft(n.phones,c=>{n.phones=c,r()});break;case"mdp":he({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>Y("Fonctionnalité à venir")});break;case"langue":at("Langue",Ot,oe.langue,c=>{oe.langue=c,t.querySelector("#val-langue").textContent=c});break;case"unites":at("Unités",it,oe.unites,c=>{oe.unites=c,t.querySelector("#val-unites").textContent=c.split(" ")[0]});break;case"gen-key":Vt(c=>{n.apiKeys.push(c),r()});break;case"delete":Y("Contactez le support pour supprimer votre compte");break}})}),t.querySelectorAll(".m-list-row[data-key-id]").forEach(d=>{d.addEventListener("click",()=>{const c=n.apiKeys.find(o=>o.id===+d.dataset.keyId);c&&Nt(c,n.apiKeys,r)})}),t.querySelectorAll(".m-toggle input[data-notif]").forEach(d=>{d.addEventListener("change",()=>Y("Préférence enregistrée"))})}r()}function B(t){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function U({title:t,body:i,doneLabel:e="Fermer",onDone:a}={}){var l;const r=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${e}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,s.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),r.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const n=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};return s.querySelector(".m-sheet-cancel").addEventListener("click",n),s.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),n()}),s.addEventListener("click",d=>{d.target===s&&n()}),s}function Jt(t){const i=[{label:"Seuil dépassé",desc:"Conditions déclenchantes vérifiées",duration:"2h34",resolved:!0},{label:"Seuil dépassé",desc:"Notification SMS envoyée",duration:"45min",resolved:!0},{label:"Seuil dépassé",desc:"Valeur mesurée hors plage",duration:"1h20",resolved:!0},{label:"Fausse alerte",desc:"Pic transitoire — durée < seuil",duration:null,resolved:!0},{label:"Seuil dépassé",desc:"Conditions toujours vérifiées",duration:"3h05",resolved:!0},{label:"Alerte en cours",desc:"Conditions vérifiées depuis ce matin",duration:null,resolved:!1}],e=3+t%5,a=Date.now();return Array.from({length:e},(r,s)=>{const n=t*17+s*7,l=1+s*(2+n%6),d=new Date(a-l*864e5),c=i[n%i.length],o=d.getDate(),m=d.getMonth()+1;return{date:`${String(o).padStart(2,"0")}/${String(m).padStart(2,"0")}`,heure:`${String(6+n%14).padStart(2,"0")}h${String(n%60).padStart(2,"0")}`,label:c.label,desc:c.desc,duration:c.duration,resolved:s>0?!0:c.resolved}})}const Gt=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Ut=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],nt={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},Yt={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function qe(t){if(!t)return"—";const[i,e,a]=t.split("-");return`${a}/${e}/${i}`}function lt(t){const i=t.sensorIds.map(a=>{const r=N.find(s=>s.id===a);return r?`${r.model} ${r.serial}`:null}).filter(Boolean),e=t.parcelIds.map(a=>{const r=O.find(s=>s.id===a);return(r==null?void 0:r.name)||null}).filter(Boolean);return[...i,...e]}function Zt(t,i){var n;let e=t.querySelector("#alertes-content");e||(e=document.createElement("div"),e.id="alertes-content",t.appendChild(e));const a=[...i==="adherent"?Ut:Gt];function r(){if(!a.length){e.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}e.innerHTML=a.map(l=>{lt(l);const d=Yt[l.metric]||"bi-bell",c=l.statut==="actif";return`
        <div class="m-alert-card" data-id="${l.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${c?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${d}"></i>
            </div>
            <span class="m-alert-name">${l.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${c?"checked":""} data-id="${l.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${nt[l.metric]||l.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${qe(l.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${l.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),s()}function s(){e.querySelectorAll(".m-alert-toggle input").forEach(l=>{l.addEventListener("change",d=>{d.stopPropagation();const c=+l.dataset.id,o=a.find(m=>m.id===c);o&&(o.statut=l.checked?"actif":"inactif",r(),B(`Alerte ${l.checked?"activée":"désactivée"}`))})}),e.querySelectorAll(".m-alert-more-btn").forEach(l=>{l.addEventListener("click",d=>{d.stopPropagation();const c=+l.dataset.id,o=a.find($=>$.id===c);if(!o)return;lt(o);const m=document.createElement("div"),v=Jt(c);function u(){const $=o.sensorIds.map((A,T)=>{const j=N.find(g=>g.id===A);return j?{label:`${j.model} ${j.serial}`,type:"sensor",idx:T}:null}).filter(Boolean),S=o.parcelIds.map((A,T)=>{const j=O.find(g=>g.id===A);return j?{label:j.name,type:"parcel",idx:T}:null}).filter(Boolean),L=[...$,...S];return L.length?L.map(A=>`<div class="m-perimetre-item" data-type="${A.type}" data-idx="${A.idx}">
                <span>${A.label}</span>
                <button class="m-perimetre-del" data-type="${A.type}" data-idx="${A.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const b=document.createElement("div");b.className="m-sheet-info-rows";function w(){var A;m.innerHTML="";const $=document.createElement("div");$.className="m-sheet-info-rows",$.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${nt[o.metric]||o.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${qe(o.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${qe(o.created)}</span></div>
            ${(A=o.phones)!=null&&A.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${o.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${o.statut}</span></div>`;const S=document.createElement("div");S.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",S.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${u()}</div>`,$.appendChild(S),m.appendChild($);const L=document.createElement("div");L.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${v.map(T=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${T.resolved?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${T.date} à ${T.heure}${T.duration?` · ${T.duration}`:""}</div>
                <div class="m-history-label">${T.label}</div>
                <div class="m-history-desc">${T.desc}</div>
              </div></div>`).join("")}`,m.appendChild(L),m.querySelectorAll(".m-perimetre-del").forEach(T=>{T.addEventListener("click",j=>{j.stopPropagation();const g=T.dataset.type,p=+T.dataset.idx;g==="sensor"?o.sensorIds.splice(p,1):o.parcelIds.splice(p,1),w(),r(),B("Retiré du périmètre")})})}w(),U({title:o.name,body:m,doneLabel:"Fermer",onDone:()=>{}})})}),e.querySelectorAll(".m-alert-card").forEach(l=>{l.addEventListener("click",d=>{if(d.target.closest(".m-alert-toggle")||d.target.closest(".m-alert-more-btn"))return;const c=+l.dataset.id,o=a.find(u=>u.id===c);if(!o)return;const m=document.createElement("div");m.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const v=U({title:o.name,body:m,doneLabel:"Fermer",onDone:()=>{}});m.querySelector("#al-edit").addEventListener("click",()=>{v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),B("Modification à venir")},280)}),m.querySelector("#al-delete").addEventListener("click",()=>{const u=a.findIndex(b=>b.id===c);u!==-1&&a.splice(u,1),v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),r()},280),B("Alerte supprimée")})})})}(n=t.querySelector(".m-navbar-action"))==null||n.addEventListener("click",()=>{B("Création d'alerte — à venir")}),r()}const Xt="modulepreload",Kt=function(t){return"/weenat-proto/"+t},ot={},ae=function(i,e,a){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.allSettled(e.map(d=>{if(d=Kt(d),d in ot)return;ot[d]=!0;const c=d.endsWith(".css"),o=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${o}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Xt,c||(m.as="script"),m.crossOrigin="",m.href=d,l&&m.setAttribute("nonce",l),document.head.appendChild(m),c)return new Promise((v,u)=>{m.addEventListener("load",v),m.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return r.then(n=>{for(const l of n||[])l.status==="rejected"&&s(l.reason);return i().catch(s)})},Qt={admin:100,adherent:1},St="weenat-m-dash";function Ve(){try{return JSON.parse(localStorage.getItem(St))||{}}catch{return{}}}function ei(t){try{localStorage.setItem(St,JSON.stringify({...Ve(),...t}))}catch{}}const z=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet-fill",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun-fill",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield-fill",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle-fill",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3-fill",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Support",icon:"bi-question-circle-fill",color:"#30d158",active:!0,available:!0,fixed:!0}];function re(t){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function He({title:t,body:i,doneLabel:e="Fermer",onDone:a}={}){var l;const r=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${e}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,s.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),r.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const n=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};return s.querySelector(".m-sheet-cancel").addEventListener("click",n),s.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),n()}),s.addEventListener("click",d=>{d.target===s&&n()}),s}const rt=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#45b7d1"}];function ct(){return Array.from({length:14},(t,i)=>i).map(t=>{const i=new Date;i.setDate(i.getDate()+t);const e=rt[Math.floor(Math.random()*rt.length)],a=e.label==="Pluie"||e.label==="Averses",r=Math.round(8+Math.random()*8),s=Math.round(16+Math.random()*14),n=Array.from({length:24},(l,d)=>{const c=Math.sin(Math.PI*(d-6)/12),o=Math.round(r+(s-r)*Math.max(0,c)),m=a&&d>=8&&d<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:d,label:`${String(d).padStart(2,"0")}h`,temp:o,pluie:m,hum:Math.round(85-40*Math.max(0,c)),vent:Math.round(10+Math.random()*20),icon:m>0?"bi-cloud-rain-fill":d<7||d>20?"bi-moon-fill":e.icon}});return{dayLabel:t===0?"Aujourd'hui":t===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...e,pluie:a?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:r,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:s,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:n}})}function ti(t){const i=t.id,e=t.reserveHydrique||50,a=+((i*2.3+7)%32).toFixed(1),r=+((i*1.1+14)%14+10).toFixed(1),s=+((i*.6+1)%6).toFixed(1),n=Math.round(e*((i%5+1)/10)),l=Math.max(0,+(n+a-r-s).toFixed(0)),d=l<n?n-l:0;return{j0:n,j7:l,bilan:d}}const We=4,dt=["#0172A4","#ff8500","#30d158","#bf5af2"],Re={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol"},ii={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C"},ut={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},si=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function Mt(t){return t==="1d"||t==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:t==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function ai(t,i){const e=["etp","rayonnement","temp_rosee"];if(!t)return[];if(t.startsWith("p-")){const r=new Set(e);return i.filter(s=>s.parcelId===+t.slice(2)).forEach(s=>(ut[s.model]||[]).forEach(n=>r.add(n))),[...r].filter(s=>s in Re)}const a=i.find(r=>r.id===+t.slice(2));return a?ut[a.model]||[]:[]}function ni(t,i){return t==="1d"||t==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?t==="365d"?["Jan","Avr","Jul","Oct","Déc"]:t==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?t==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?t==="365d"?["Jan","Avr","Jul","Oct","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let ne=[],de=[];(()=>{const t=Ve();if(t.catalog){const i=t.catalog.map(e=>e.id);z.sort((e,a)=>{const r=i.indexOf(e.id),s=i.indexOf(a.id);return(r<0?999:r)-(s<0?999:s)}),t.catalog.forEach(e=>{const a=z.find(r=>r.id===e.id);a&&(a.active=e.active)})}t.mesuresList&&(ne=t.mesuresList),t.cumulsList&&(de=t.cumulsList)})();function li(t,i,e){const a=[...t+i].reduce((n,l)=>n+l.charCodeAt(0),1),r=n=>(Math.sin(a*.07+n*.5)+Math.sin(a*.03+n*1.3))/2+.5,s={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:e},(n,l)=>s.sparse&&r(l*3.7)>.28?0:Math.max(0,s.base+s.amp*r(l*.28+1.2)))}const oi=new Set(["pluie","etp"]);function ri(t,i){const e={"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[t.period]||42,a=li(t.subjectKey,t.metricId,e),r=270,s=60,n=26,l=12,d=Math.max(...a,1),c=oi.has(t.metricId);let o,m="";for(let $=0;$<=2;$++){const S=Math.round($/2*(s-l-4)+4);m+=`<line x1="${n}" y1="${S}" x2="${n+r}" y2="${S}" stroke="#E8E6E0" stroke-width=".5"/>`,m+=`<text x="${n-3}" y="${S+3}" text-anchor="end" font-size="7" fill="#B0AEA8">${+(d*(1-$/2)).toFixed(d<5?1:0)}</text>`}const v=ni(t.period,t.step),u=v.map(($,S)=>`<text x="${n+Math.round(S/(v.length-1)*r)}" y="${s+2}" text-anchor="middle" font-size="7" fill="#B0AEA8">${$}</text>`).join(""),b=JSON.stringify(a.map($=>+$.toFixed(2))),w=t.metricId==="pluie"?"#45b7d1":t.color;if(c){const $=Math.max(1,r/e*.7),S=a.map((L,A)=>{const T=Math.round(L/d*(s-l-4)),j=n+Math.round(A/(e-1)*r)-$/2,g=s-l-T;return`<rect x="${j.toFixed(1)}" y="${g.toFixed(1)}" width="${$.toFixed(1)}" height="${T.toFixed(1)}" fill="${w}" opacity=".85" rx="1"/>`}).join("");o=`<svg viewBox="0 0 ${n+r} ${s+6}" style="width:100%;display:block;overflow:visible">${m}${S}${u}</svg>`}else{const $=a.map((S,L)=>`${n+Math.round(L/(e-1)*r)},${s-l-Math.round(S/d*(s-l-4))}`).join(" ");o=`<svg viewBox="0 0 ${n+r} ${s+6}" style="width:100%;display:block;overflow:visible">
      ${m}
      <polyline points="${$}" fill="none" stroke="${t.color}" stroke-width="1.5" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${s}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${u}
    </svg>`}return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${t.metricId==="pluie"?w:t.color}">${t.metricLabel} <span style="font-weight:400;color:#636366">· ${t.subjectLabel}</span></div>
          <div class="m-wf-card-sub">${t.periodLabel} · ${t.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${t.unit}" data-series='${b}' style="position:relative;margin-top:4px">
        ${o}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
    </div>`}function mt(t,i){const e=ne.length>=We,a=t.map(l=>`<option value="p-${l.id}">${l.name}</option>`).join(""),r=i.filter(l=>l.parcelId).map(l=>{const d=t.find(c=>c.id===l.parcelId);return`<option value="s-${l.id}">${l.model} — ${l.serial}${d?` · ${d.name}`:""}</option>`}).join(""),s=Mt("7d"),n=ne.length?ne.map(ri).join(""):'<div class="m-wf-empty">Aucune mesure enregistrée</div>';return`
    <div class="m-list-section-header">Nouvelle mesure</div>
    <div class="m-wf-form${e?" m-wf-disabled":""}">
      <select class="m-wf-sel" id="msr-subject" ${e?"disabled":""}>
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${a}</optgroup>
        ${r?`<optgroup label="Capteurs">${r}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period" ${e?"disabled":""}>
          ${si.map(l=>`<option value="${l.id}"${l.id==="7d"?" selected":""}>${l.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step" ${e?"disabled":""}>
          ${s.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Créer la mesure</button>
      ${e?'<div class="m-wf-max-msg">Quantité maximale atteinte. Supprimez une mesure pour en ajouter une nouvelle.</div>':""}
    </div>
    <div class="m-list-section-header" style="margin-top:16px">Mesures enregistrées</div>
    <div id="msr-list">${n}</div>`}function ci(t,i){const e=new Date().toISOString().split("T")[0],a=new Date;a.setDate(a.getDate()+7);const r=a.toISOString().split("T")[0],s=new Set([t.name]);return ze(i).filter(n=>n.ids.includes(t.id)).forEach(n=>s.add(n.label)),Ct.filter(n=>!n.real&&n.iso>=e&&n.iso<=r&&s.has(n.label)).reduce((n,l)=>n+l.mm,0)}const pt=9;function vt(t,i=!1){if(!t.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const e=ze(t),a=new Set(e.flatMap(v=>v.ids)),r=t.filter(v=>!a.has(v.id)),s=[...e.flatMap(v=>v.ids.map(u=>t.find(b=>b.id===u)).filter(Boolean)),...r],n=i?s:s.slice(0,pt),l=new Set(n.map(v=>v.id)),d=s.length-n.length,c=v=>{const{j0:u,j7:b,bilan:w}=ti(v),$=ci(v,t);return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${v.id}">${v.name}</button>
      <div class="m-bh-td">${u}</div>
      <div class="m-bh-td">${b}</div>
      <div class="m-bh-td m-bh-td--reco">${w>0?w:"—"}</div>
      <div class="m-bh-td m-bh-td--planif">${$>0?$:"—"}</div>`};let o="";for(const v of e){const u=v.ids.map(b=>t.find(w=>w.id===b)).filter(Boolean).filter(b=>l.has(b.id));u.length&&(o+=`<div class="m-bh-group-row">⬡ ${v.label}</div>`,o+=u.map(c).join(""))}o+=r.filter(v=>l.has(v.id)).map(c).join("");const m=s.length>pt?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${d} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
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
    </div>`}function di(t,i,e){const a=Object.fromEntries(J.map(o=>[o.id,o])),r=t.map(o=>{var u;const m=o.ville||((u=a[o.orgId])==null?void 0:u.ville)||null,v=[o.name,o.crop||null,m].filter(Boolean).join(" · ");return`<option value="p-${o.id}">${v}</option>`}).join(""),s=i.map(o=>`<option value="s-${o.id}">${o.model} — ${o.serial}</option>`).join(""),n=`
    <optgroup label="Parcelles">${r}</optgroup>
    ${s?`<optgroup label="Capteurs">${s}</optgroup>`:""}`,l=(o,m)=>{const v=`${o.dayLabel.charAt(0).toUpperCase()+o.dayLabel.slice(1)} · ${o.dateStr}`;return`
    <div class="m-prev-card" data-day="${m}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${o.icon}" style="color:${o.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${v}</span>
          <span class="m-prev-card-cond">${o.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-card-body">
        <div class="m-prev-row"><span>Pluie</span><strong>${o.pluie} mm</strong></div>
        <div class="m-prev-row"><span>Température</span><strong>${o.tMin}°C <em>${o.tMinHeure}</em> — ${o.tMax}°C <em>${o.tMaxHeure}</em></strong></div>
        <div class="m-prev-row"><span>Humidité</span><strong>${o.humMoy}%</strong></div>
        <div class="m-prev-row"><span>Vent</span><strong>${o.ventMoy}/${o.ventRafales} km/h</strong></div>
        <div class="m-prev-row m-prev-row--last"><span>Évapotranspiration</span><strong>${o.etp} mm</strong></div>
      </div>
    </div>`},d=e.slice(0,3).map(l).join(""),c=e.slice(3).map(l).join("");return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${n}</select>
    <div class="m-prev-cards">
      ${d}
      <div class="m-prev-extra" style="display:none">${c}</div>
      <button class="m-prev-expand-btn">Voir les ${e.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const ce=[{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:["P+","PT","SMV"]},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:["PYRANO"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],ui=new Set(ce.flatMap(t=>t.needsModels||[]));function mi(t){if(!t)return ce;if(t.startsWith("s-")){const e=N.find(a=>a.id===+t.slice(2));return e?ce.filter(a=>a.needsModels===null||a.needsModels.includes(e.model)):ce}const i=new Set(N.filter(e=>e.parcelId===+t.slice(2)).map(e=>e.model));return ce.filter(e=>e.needsModels===null||e.needsModels.some(a=>i.has(a)))}const pi={pluie:{icon:"bi-droplet-fill",color:"#45b7d1"},dj:{icon:"bi-thermometer-sun",color:"#ff9f0a"},hf:{icon:"bi-thermometer-low",color:"#5ac8fa"},etp:{icon:"bi-moisture",color:"#30d158"},rayo:{icon:"bi-sun-fill",color:"#f5c842"},humec:{icon:"bi-droplet-half",color:"#bf5af2"}};function vi(){return de.length?de.map((t,i)=>{const e=new Date(t.fromDate).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"});return`<div class="m-cumuls-saved-card" style="position:relative">
      <button class="m-cumuls-del" data-cidx="${i}" type="button" title="Supprimer">×</button>
      <div class="m-cumuls-saved-row1">
        <span class="m-cumuls-saved-metric"><i class="bi ${t.icon}" style="color:${t.color}"></i> ${t.metricLabel}</span>
        <span class="m-cumuls-saved-val">${t.value} <span class="m-cumuls-saved-unit">${t.unit}</span></span>
      </div>
      <div class="m-cumuls-saved-row2">${t.subjectLabel}</div>
      <div class="m-cumuls-saved-row3">depuis le ${e}${t.thresholds?t.metricId==="hf"?` · seuil < ${t.thresholds.cold}°C`:t.metricId==="dj"?` · ${t.thresholds.low}–${t.thresholds.high}°C`:"":""}</div>
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function bi(t,i,e){if(!t||!i)return null;const a=ce.find(n=>n.id===e)||ce[0],r=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),s=t.split("").reduce((n,l)=>n+l.charCodeAt(0),0)+r;return+(a.base+s%(a.amp*10)/10).toFixed(1)}function bt(t,i){const e=de.length>=We,a=`${new Date().getFullYear()}-01-01`,r=i.filter(o=>o.parcelId&&ui.has(o.model)),s=new Set(r.map(o=>o.parcelId)),l=t.filter(o=>s.has(o.id)).map(o=>`<option value="p-${o.id}">${o.name}</option>`).join(""),d=r.map(o=>{const m=t.find(v=>v.id===o.parcelId);return`<option value="s-${o.id}">${o.model} — ${o.serial}${m?` · ${m.name}`:""}</option>`}).join(""),c=de.length?vi():'<div class="m-wf-empty">Aucun cumul enregistré</div>';return`
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
          <input type="date" class="m-wf-date" id="cumuls-from" value="${a}" ${e?"disabled":""}>
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Créer le cumul</button>
      ${e?'<div class="m-wf-max-msg">Quantité maximale atteinte. Supprimez un cumul pour en ajouter un nouveau.</div>':""}
    </div>
    <div class="m-list-section-header" style="margin-top:16px">Cumuls enregistrés</div>
    <div id="cumuls-saved-list">${c}</div>`}const hi={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function fi(t){const i=t.id,e=new Date,a=hi[t.crop]||["—"],r=a[i%a.length];let s,n;i%5===3?(s=0,n=(e.getHours()+2+i%3*3)%24):(s=(i*2+1)%6+1,n=6+i%5*2);const l=2+i%3,d=new Date(e);d.setDate(d.getDate()+s);const c=s===0?"Aujourd'hui":d.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),o=s*1440+n*60-(e.getHours()*60+e.getMinutes()),m=o>=0&&o<=600;return{product:r,winDateStr:c,winHour:n,winDur:l,isUrgent:m,minutesFromNow:o}}function gi(t){const e=t.filter(s=>s.crop).map(s=>({p:s,d:fi(s)})).filter(({d:s})=>s.minutesFromNow>=0&&s.minutesFromNow<=2880).sort((s,n)=>s.d.minutesFromNow-n.d.minutesFromNow);return e.length?`<div class="m-w-list">${e.slice(0,10).map(({p:s,d:n})=>{const l=n.isUrgent?"#ff9f0a":"#1c1c1e",d=n.isUrgent?'<i class="bi bi-alarm-fill" style="color:#ff9f0a"></i> ':"",c=String(n.winHour).padStart(2,"0");return`<div class="m-w-row">
      <div class="m-w-row-main">
        <div class="m-w-row-name">${s.name}</div>
        <div class="m-w-row-sub">${s.crop}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:12px;font-weight:600;color:${l}">${d}${n.winDateStr} · ${c}:00</div>
        <div style="font-size:11px;color:#8e8e93">fenêtre de ${n.winDur} heures</div>
      </div>
    </div>`}).join("")}</div>
    <div class="m-w-see-more" data-action="weephyt">
      <i class="bi bi-box-arrow-up-right"></i> Voir les fenêtres des autres parcelles
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 48h</div>'}const yi={"capteur couché":{icon:"bi-arrow-down-circle-fill",color:"#ff9f0a"},"émissions interrompues":{icon:"bi-wifi-off",color:"#ff3b30"},"capteur déplacé":{icon:"bi-geo-alt-fill",color:"#ff9f0a"},"cuillère bloquée":{icon:"bi-x-octagon-fill",color:"#ff3b30"}};function $i(t,i){const e=i.filter(a=>a.event&&(Array.isArray(a.event)?a.event.length>0:!0));return e.length?`<div class="m-w-list">${e.map(a=>{const r=t.find(l=>l.id===a.parcelId),n=(Array.isArray(a.event)?a.event:[a.event]).map(l=>{const d=yi[l]||{icon:"bi-exclamation-circle-fill",color:"#ff9f0a"};return`<span class="m-ev-badge" style="color:${d.color}"><i class="bi ${d.icon}"></i> ${l}</span>`}).join("");return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${a.id}" style="flex-direction:column;align-items:flex-start;gap:4px">
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
        <div class="m-w-row-name">${a.model} — ${a.serial}</div>
        <div style="display:flex;align-items:center;gap:5px">
          <span style="font-size:11px;color:#8e8e93">${(r==null?void 0:r.ville)||(r==null?void 0:r.name)||"—"}</span>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px">${n}</div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const Et={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},wi={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function xi(t){const i=t.id,e=Et[t.crop]||wi,a=i%e.stages.length,r=(i*2+5)%18+4,s=new Date("2026-04-18");s.setDate(s.getDate()+r);const n=s.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:e.stages[a],nextStage:e.nextStages[a],variety:e.varieties[i%e.varieties.length],nextDateStr:n,daysToNext:r}}function Ci(t){const i=t.filter(r=>r.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const e={};for(const r of i)e[r.crop]||(e[r.crop]=[]),e[r.crop].push(r);return`<div class="m-widget-hint">Appuyez sur une parcelle pour renseigner ou mettre à jour les stades phénologiques</div>
    ${Object.entries(e).map(([r,s])=>{const n=s.map(l=>{const d=!!Et[l.crop],c=d?xi(l):null,o=d&&c.variety!=="—"?c.variety:"",m=d?c.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${l.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${l.name}</div>
          ${o?`<div class="m-w-row-sub">${o}</div>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${m}</div>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>`}).join("");return`<details class="m-crop-group">
      <summary class="m-crop-summary">
        <div class="m-crop-summary-left">
          <div class="m-crop-summary-name">${r}</div>
          <div class="m-crop-summary-count">${s.length} parcelle${s.length>1?"s":""}</div>
        </div>
        <i class="bi bi-chevron-right m-crop-chevron"></i>
      </summary>
      <div class="m-crop-plots">${n}</div>
    </details>`}).join("")}`}function Si(){const t=O.map(a=>a.orgId).filter((a,r,s)=>s.indexOf(a)===r&&a!==100).length,i=N.length,e=O.length;return`
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
    </div>`}function Mi(){return`
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
    </a>`}const ht=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Ei(){var c;const t=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,t.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const e=i.querySelector("#chat-messages"),a=i.querySelector("#chat-input"),r=i.querySelector("#chat-send"),s=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",s),i.addEventListener("click",o=>{o.target===i&&s()});function n(o,m){const v=document.createElement("div");v.className=`m-chat-msg m-chat-msg--${m}`,v.innerHTML=`<div class="m-chat-bubble">${o}</div>`,e.appendChild(v),e.scrollTop=e.scrollHeight}function l(){const o=document.createElement("div");return o.className="m-chat-msg m-chat-msg--bot m-chat-typing",o.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',e.appendChild(o),e.scrollTop=e.scrollHeight,o}function d(){const o=a.value.trim();if(!o)return;n(o,"user"),a.value="",r.disabled=!0;const m=l();setTimeout(()=>{m.remove();const v=ht[Math.floor(Math.random()*ht.length)];n(v,"bot"),r.disabled=!1,a.focus()},1200+Math.random()*800)}r.addEventListener("click",d),a.addEventListener("keydown",o=>{o.key==="Enter"&&d()}),setTimeout(()=>a.focus(),350)}function Li(t,i){let e=t.querySelector("#dashboard-content");e||(e=document.createElement("div"),e.id="dashboard-content",t.appendChild(e));const a=Qt[i]||1,r=a===100?O:O.filter(g=>g.orgId===a),s=new Set(r.map(g=>g.id)),n=N.filter(g=>s.has(g.parcelId));let l=ct();const d=Ve(),c=new Set(["mon_reseau","support"]),o=new Set(d.collapsed??z.map(g=>g.id).filter(g=>!c.has(g)));function m(){ei({catalog:z.map(g=>({id:g.id,active:g.active})),collapsed:[...o],mesuresList:ne,cumulsList:de})}function v(g,p){const h=g.fixed?"":`<button class="m-widget-menu" data-widget="${g.id}" type="button">•••</button>`,f=o.has(g.id);return`
      <div class="m-widget${f?" m-widget--collapsed":""}" data-widget="${g.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${g.id}">
          <div class="m-widget-icon-wrap" style="background:${g.color}20;color:${g.color}">
            <i class="bi ${g.icon}"></i>
          </div>
          <span class="m-widget-title">${g.title}</span>
          <i class="bi ${f?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${g.fixed?"0":"8px"}"></i>
          ${h}
        </div>
        <div class="m-widget-bd" style="${f?"display:none":""}">${p}</div>
      </div>`}function u(){l=ct();const g=z.filter(h=>h.active&&!h.fixed),p=z.filter(h=>h.active&&h.fixed);e.innerHTML=`
      <button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${[...g,...p].map(h=>{let f="";return h.id==="bilan_hydrique"?f=vt(r):h.id==="previsions"?f=di(r,n,l):h.id==="cumuls"?f=bt(r,n):h.id==="temps_reel"?f=mt(r,n):h.id==="traitements"?f=gi(r):h.id==="evenements"?f=$i(r,n):h.id==="cultures"?f=Ci(r):h.id==="mon_reseau"?f=Si():h.id==="support"&&(f=Mi()),v(h,f)}).join("")}
      <div style="height:24px"></div>`,L()}const b='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function w(g,p){const h=g[p],f=`${h.dayLabel.charAt(0).toUpperCase()+h.dayLabel.slice(1)} · ${h.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${b}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${p===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${h.icon}" style="color:${h.color};font-size:22px"></i><span class="m-d-name">${f}</span></div>
          <button class="m-day-nav" id="next-day" ${p>=g.length-1?"disabled":""}>›</button>
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
            ${h.hours.map((y,x)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${x<h.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${y.label}</span>
                <i class="bi ${y.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#45b7d1;width:44px;flex-shrink:0">${y.pluie>0?`${y.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${y.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${y.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${y.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function $(g,p,h){var f,y;g.querySelector(".m-detail-back").addEventListener("click",K),(f=g.querySelector("#prev-day"))==null||f.addEventListener("click",()=>{g.innerHTML=w(p,h-1),$(g,p,h-1)}),(y=g.querySelector("#next-day"))==null||y.addEventListener("click",()=>{g.innerHTML=w(p,h+1),$(g,p,h+1)})}function S(g,p){const h=be(w(g,p));$(h,g,p)}function L(){var G,ue,Ee,Ke;(G=t.querySelector(".m-navbar-action"))==null||G.addEventListener("click",T),(ue=e.querySelector("#dash-add-widget-btn"))==null||ue.addEventListener("click",j),e.querySelectorAll(".m-widget-hd--toggle").forEach(E=>{E.addEventListener("click",H=>{if(H.target.closest(".m-widget-menu"))return;const k=E.dataset.collapse;o.has(k)?o.delete(k):o.add(k),m(),u()})}),(Ee=e.querySelector('[data-action="weephyt"]'))==null||Ee.addEventListener("click",()=>{re("Page Weephyt — à venir")}),e.querySelectorAll("[data-sensor-id]").forEach(E=>{E.addEventListener("click",()=>{const H=n.find(k=>k.id===+E.dataset.sensorId);H&&ae(()=>Promise.resolve().then(()=>as),void 0).then(k=>k.initSensorDetail(H,"params"))})}),e.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(E=>{E.addEventListener("click",()=>{const H=O.find(k=>k.id===+E.dataset.plotId);H&&ae(()=>Promise.resolve().then(()=>gt),void 0).then(k=>k.initParcelDetail(H,[],"params"))})});function g(){e.querySelectorAll(".m-bh-plot-link").forEach(E=>{E.addEventListener("click",()=>{const H=O.find(k=>k.id===+E.dataset.plotId);H&&ae(()=>Promise.resolve().then(()=>gt),void 0).then(k=>k.initParcelDetail(H,[]))})})}function p(){var E,H,k;(E=e.querySelector("#bh-btn-calendar"))==null||E.addEventListener("click",()=>{ae(()=>import("./irrigation-9MJlYti7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(F=>F.openCalendar(r,""))}),(H=e.querySelector("#bh-btn-irrigation"))==null||H.addEventListener("click",()=>{ae(()=>import("./irrigation-9MJlYti7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(F=>F.openIrrigationSaisie(r,re))}),(k=e.querySelector("#bh-btn-strategie"))==null||k.addEventListener("click",()=>{ae(()=>import("./irrigation-9MJlYti7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(F=>F.openIrrigationStrategie(r,re))})}function h(){const E=e.querySelector("#bh-expand");E&&E.addEventListener("click",()=>{const H=E.dataset.expanded==="true",k=e.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');k&&(k.innerHTML=vt(r,!H),g(),p(),h())})}g(),p(),h();function f(){const E=e.querySelector('[data-widget="cumuls"] .m-widget-bd');E&&(E.innerHTML=bt(r,n),y())}function y(){var F,W,ee,te;const E=()=>{var _;const R=(_=e.querySelector("#cumuls-metric"))==null?void 0:_.value,P=e.querySelector("#cumuls-thresholds");P&&(R==="hf"?P.innerHTML=`
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`:R==="dj"?P.innerHTML=`
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`:P.innerHTML="")},H=()=>{var I;const R=e.querySelector("#cumuls-metric"),P=(I=e.querySelector("#cumuls-subject"))==null?void 0:I.value;if(!R)return;const _=mi(P);R.innerHTML='<option value="">— Métrique —</option>'+_.map(D=>`<option value="${D.id}">${D.label}</option>`).join(""),R.disabled=!P||!_.length,E(),k()},k=()=>{var X,ie,se;const R=e.querySelector("#cumuls-create"),P=e.querySelector("#cumuls-date-err"),_=(X=e.querySelector("#cumuls-subject"))==null?void 0:X.value,I=(ie=e.querySelector("#cumuls-from"))==null?void 0:ie.value,D=(se=e.querySelector("#cumuls-metric"))==null?void 0:se.value,V=I?(Date.now()-new Date(I))/864e5>365:!1;P&&(P.style.display=V?"":"none"),R&&(R.disabled=!_||!I||!D||V)};(F=e.querySelector("#cumuls-subject"))==null||F.addEventListener("change",()=>{H(),k()}),(W=e.querySelector("#cumuls-from"))==null||W.addEventListener("change",k),(ee=e.querySelector("#cumuls-metric"))==null||ee.addEventListener("change",()=>{E(),k()}),(te=e.querySelector("#cumuls-create"))==null||te.addEventListener("click",()=>{var ie,se,ye,$e,we,Qe;const R=e.querySelector("#cumuls-subject"),P=R==null?void 0:R.value,_=(ie=e.querySelector("#cumuls-from"))==null?void 0:ie.value,I=(se=e.querySelector("#cumuls-metric"))==null?void 0:se.value;if(!P||!_||!I)return;const D=ce.find(Rt=>Rt.id===I),V=pi[I]||{icon:"bi-bar-chart-fill",color:"#636366"},X=I==="hf"?{cold:+(((ye=e.querySelector("#cumuls-th-cold"))==null?void 0:ye.value)??7.2)}:I==="dj"?{low:+((($e=e.querySelector("#cumuls-th-low"))==null?void 0:$e.value)??0),high:+(((we=e.querySelector("#cumuls-th-high"))==null?void 0:we.value)??18)}:null;de.push({metricId:I,metricLabel:(D==null?void 0:D.label)||I,unit:(D==null?void 0:D.unit)||"",icon:V.icon,color:V.color,subjectKey:P,subjectLabel:(((Qe=R.options[R.selectedIndex])==null?void 0:Qe.text)||P).trim(),fromDate:_,value:String(bi(P,_,I)??"—"),thresholds:X}),m(),f()}),e.querySelectorAll(".m-cumuls-del").forEach(R=>{R.addEventListener("click",()=>{de.splice(+R.dataset.cidx,1),m(),f()})})}y(),(Ke=e.querySelector("#open-chat-btn"))==null||Ke.addEventListener("click",Ei);function x(){e.querySelectorAll(".m-tr-chart-wrap").forEach(E=>{const H=E.querySelector(".m-tr-cursor"),k=E.querySelector(".m-tr-tooltip");if(!k)return;const F=JSON.parse(E.dataset.series||"[]"),W=E.dataset.unit||"",ee=F.length,te=26,R=270;E.addEventListener("pointermove",P=>{const _=E.getBoundingClientRect(),I=Math.max(0,Math.min(((P.clientX-_.left)*(te+R)/_.width-te)/R,1)),D=F[Math.round(I*(ee-1))]??null;if(H){const V=te+Math.round(I*R);H.setAttribute("x1",V),H.setAttribute("x2",V),H.setAttribute("opacity","1")}k.style.display="",k.style.left=`${Math.max(0,Math.min(P.clientX-_.left-24,_.width-60))}px`,k.textContent=D!==null?`${(+D).toFixed(1)} ${W}`:"—"}),E.addEventListener("pointerleave",()=>{k.style.display="none",H==null||H.setAttribute("opacity","0")})})}function C(){const E=e.querySelector('[data-widget="temps_reel"] .m-widget-bd');E&&(E.innerHTML=mt(r,n),M())}function M(){var F,W,ee,te,R;const E=()=>{var _,I;const P=e.querySelector("#msr-create");P&&(P.disabled=!((_=e.querySelector("#msr-subject"))!=null&&_.value)||!((I=e.querySelector("#msr-metric"))!=null&&I.value)||ne.length>=We)},H=()=>{var D;const P=e.querySelector("#msr-metric"),_=(D=e.querySelector("#msr-subject"))==null?void 0:D.value;if(!P)return;const I=ai(_,n);P.innerHTML='<option value="">— Métrique —</option>'+I.map(V=>`<option value="${V}">${Re[V]}</option>`).join(""),P.disabled=!_||!I.length,E()},k=()=>{var I;const P=e.querySelector("#msr-step"),_=((I=e.querySelector("#msr-period"))==null?void 0:I.value)||"7d";P&&(P.innerHTML=Mt(_).map(D=>`<option value="${D.id}">${D.label}</option>`).join(""),E())};(F=e.querySelector("#msr-subject"))==null||F.addEventListener("change",()=>{H(),E()}),(W=e.querySelector("#msr-period"))==null||W.addEventListener("change",()=>{k(),E()}),(ee=e.querySelector("#msr-metric"))==null||ee.addEventListener("change",E),(te=e.querySelector("#msr-step"))==null||te.addEventListener("change",E),(R=e.querySelector("#msr-create"))==null||R.addEventListener("click",()=>{var ye,$e,we;const P=e.querySelector("#msr-subject"),_=e.querySelector("#msr-metric"),I=e.querySelector("#msr-period"),D=e.querySelector("#msr-step"),V=P==null?void 0:P.value,X=_==null?void 0:_.value,ie=I==null?void 0:I.value,se=D==null?void 0:D.value;!V||!X||!ie||!se||(ne.push({subjectKey:V,subjectLabel:(((ye=P.options[P.selectedIndex])==null?void 0:ye.text)||V).trim(),metricId:X,metricLabel:Re[X]||X,unit:ii[X]||"",period:ie,periodLabel:((($e=I.options[I.selectedIndex])==null?void 0:$e.text)||ie).trim(),step:se,stepLabel:(((we=D.options[D.selectedIndex])==null?void 0:we.text)||se).trim(),color:dt[ne.length%dt.length]}),m(),C())}),e.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(P=>{P.addEventListener("click",()=>{ne.splice(+P.dataset.idx,1),m(),C()})}),x()}M(),e.querySelectorAll(".m-prev-card").forEach(E=>{E.addEventListener("click",()=>{S(l,+E.dataset.day)})});const q=e.querySelector(".m-prev-expand-btn");q&&q.addEventListener("click",()=>S(l,3)),e.querySelectorAll(".m-widget-menu").forEach(E=>{E.addEventListener("click",H=>{H.stopPropagation();const k=z.find(ee=>ee.id===E.dataset.widget);if(!k)return;const F=document.createElement("div");F.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="menu-config">Configurer</a>
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const W=He({title:k.title,body:F,doneLabel:"Fermer",onDone:()=>{}});F.querySelector("#menu-config").addEventListener("click",()=>{W.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{W.remove(),re("Configuration à venir")},280)}),F.querySelector("#menu-move").addEventListener("click",()=>{W.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{W.remove(),A()},280)}),F.querySelector("#menu-remove").addEventListener("click",()=>{k.active=!1,W.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{W.remove(),m(),u()},280),re("Widget retiré")})})})}function A(){const g=document.createElement("div"),p=()=>z.filter(f=>f.active&&!f.fixed),h=()=>{const f=p();g.innerHTML=f.map((y,x)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${y.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${x}" data-dir="-1" ${x===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${x}" data-dir="1" ${x===f.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),g.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(y=>{y.addEventListener("click",()=>{const x=p(),C=+y.dataset.i,M=C+ +y.dataset.dir,q=z.indexOf(x[C]),G=z.indexOf(x[M]);[z[q],z[G]]=[z[G],z[q]],m(),h(),u()})})};h(),He({title:"Réorganiser les widgets",body:g,doneLabel:"Fermer",onDone:()=>{}})}function T(){const p=be(`
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
              <span>Saison d'irrigation</span>
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
      </div>`);p.querySelector(".m-detail-back").addEventListener("click",K),p.querySelectorAll(".m-add-item").forEach(h=>{h.addEventListener("click",()=>{const f=h.dataset.action;f==="irrigation"?(K(),ae(()=>import("./irrigation-9MJlYti7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(y=>y.openIrrigationSaisie(r,re))):f==="strategie-irrigation"?(K(),ae(()=>import("./irrigation-9MJlYti7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(y=>y.openIrrigationStrategie(r,re))):f==="calendrier"?(K(),ae(()=>import("./irrigation-9MJlYti7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(y=>y.openCalendar(r,""))):re("Fonctionnalité à venir")})})}function j(){const g=document.createElement("div"),p=()=>{const h=z.filter(f=>!f.fixed);g.innerHTML=h.map(f=>`
        <div class="m-catalog-row${f.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${f.color}20;color:${f.color}"><i class="bi ${f.icon}"></i></div>
          <span class="m-catalog-title">${f.title}</span>
          ${f.available?`<button class="m-catalog-toggle${f.active?" m-catalog-toggle--on":""}" data-cid="${f.id}" type="button">
                <i class="bi ${f.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),g.querySelectorAll("[data-cid]").forEach(f=>{f.addEventListener("click",()=>{const y=z.find(x=>x.id===f.dataset.cid);y&&(y.active=!y.active,m(),p(),u())})})};p(),He({title:"Widgets disponibles",body:g,doneLabel:"Fermer",onDone:()=>{}})}u()}new URLSearchParams(window.location.search).get("role");const Ai=[{title:"Cumuls",items:["Cumul Degrés jours","Cumul Pluie","Cumul Ensoleillement","Cumul Evapotranspiration","Cumul Heures froides","Cumul Humectation foliaire"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Weephyt","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire","Gel"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]},{title:"Irrigation",items:["Bilan hydrique","Irrigations","Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]}];function Ti(){const t=Ai.map(e=>`
    <div class="m-list-section-header">${e.title}</div>
    ${e.items.map(a=>`
      <div class="m-wcat-item">
        <span>${a}</span>
        <button class="m-wcat-add" type="button"><i class="bi bi-plus-circle"></i></button>
      </div>`).join("")}`).join(""),i=be(`
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
    </div>`);i.querySelector(".m-detail-back").addEventListener("click",K),i.querySelectorAll(".m-wcat-add").forEach(e=>{e.addEventListener("click",()=>B("Widget bientôt disponible"))})}const ge={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#c090e0",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#80c8e8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1},humectation:{label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}},Lt={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function ke(t,i){const e={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[t]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(a,r)=>{const s=r/i*Math.PI*4;if(e.sparse&&Math.random()>.25)return 0;const n=e.base+e.amp*Math.sin(s-1)+(Math.random()-.5)*e.amp*.5;return Math.max(e.min,Math.min(e.max,n))})}const Je={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},Ge={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function ji(t,i,e,a,r,s=20){const n=Ge[t]||10080,l=new Date,d=v=>t==="1d"||t==="hier"?`${String(v.getHours()).padStart(2,"0")}h`:t==="365d"?v.toLocaleDateString("fr-FR",{month:"short"}):`${String(v.getDate()).padStart(2,"0")}/${String(v.getMonth()+1).padStart(2,"0")}`,c=4,o=i-e-a,m=r-s;return Array.from({length:c+1},(v,u)=>{const b=u/c,w=new Date(l.getTime()-(1-b)*n*6e4),$=(e+b*o).toFixed(1),S=u===0?"start":u===c?"end":"middle";return[`<line x1="${$}" y1="${m}" x2="${$}" y2="${m+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${$}" y="${r-3}" text-anchor="${S}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(w)}</text>`].join("")}).join("")}function At(t,i,e,a="7d"){const r=Je[a]||60,s=ke(t,r),n=320,l=100,d=34,c=6,o=10,m=20,v=n-d-c,u=l-o-m,b=e?0:Math.min(...s),w=Math.max(...s,b+.001),$=w-b,S=C=>d+C/(s.length-1)*v,L=C=>o+u-(C-b)/$*u,A=`g${Math.random().toString(36).slice(2,8)}`,T=[0,.5,1].map(C=>{const M=b+C*$,q=o+u-C*u;return`<text x="${d-3}" y="${(q+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${M<10?M.toFixed(1):Math.round(M)}</text>`}).join(""),j=[.25,.5,.75].map(C=>{const M=(o+u-C*u).toFixed(1);return`<line x1="${d}" y1="${M}" x2="${n-c}" y2="${M}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),g=`<line x1="${d}" y1="${o+u}" x2="${n-c}" y2="${o+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,p=ji(a,n,d,c,l);if(e){const C=v/s.length*.7,M=s.map((q,G)=>{const ue=(q-b)/$*u,Ee=o+u-ue;return`<rect x="${(S(G)-C/2).toFixed(1)}" y="${Ee.toFixed(1)}" width="${C.toFixed(1)}" height="${ue.toFixed(1)}" fill="${i}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${n} ${l}" width="100%" height="${l}" preserveAspectRatio="none">${T}${j}${g}${p}${M}</svg>`}const f=s.map((C,M)=>[S(M),L(C)]).map(([C,M],q)=>`${q?"L":"M"}${C.toFixed(1)},${M.toFixed(1)}`).join(" "),y=`${f} L${S(s.length-1).toFixed(1)},${(o+u).toFixed(1)} L${d},${(o+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(C=>+C.toFixed(2)),minV:+b.toFixed(2),maxV:+w.toFixed(2)}))}" data-color="${i}" style="position:relative">
    <svg viewBox="0 0 ${n} ${l}" width="100%" height="${l}" preserveAspectRatio="none">
      <defs><linearGradient id="${A}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${T}${j}${g}
      <path d="${y}" fill="url(#${A})"/>
      <path d="${f}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${p}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function ki(t,i,e){if(!e)return"";const a=Je[i]||60,s=(Ge[i]||10080)/(a*60),n=ke(t,a);let l=[];if(e==="temp"){const d=n.reduce((o,m)=>o+Math.max(0,m),0)*(s/24),c=n.filter(o=>o<7).length*s;l=[{label:"Degrés jours",val:`${Math.round(d)} DJ`},{label:"Heures de froid",val:`${Math.round(c)} h`}]}else if(e==="pluie")l=[{label:"Cumul pluie",val:`${n.reduce((c,o)=>c+o,0).toFixed(1)} mm`}];else if(e==="rayo"){const d=n.filter(c=>c>120).length*s;l=[{label:"Ensoleillement",val:`${Math.round(d)} h`}]}else if(e==="etp")l=[{label:"ETP cumulée",val:`${(n.reduce((c,o)=>c+o,0)*(s/24)).toFixed(1)} mm`}];else if(e==="hws"){const d=n.filter(c=>c>50).length*s;l=[{label:"Heures d'humectation",val:`${Math.round(d)} h`}]}return l.length?`<div class="m-chart-cumuls">${l.map(d=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${d.label}</span>
      <span class="m-chart-cumul-val">${d.val}</span>
    </div>`).join("")}</div>`:""}function Pi(t,i){const e=ge[t];return e?`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${e.color}">${e.label}</span>
      </div>
      ${At(t,e.color,e.cumul,i)}
      ${ki(t,i,e.cumulsType)}
    </div>`:""}function Ii(t){const i=JSON.parse(decodeURIComponent(t.dataset.chart||"{}"));if(!i.vals)return;const{vals:e,minV:a,maxV:r}=i,s=t.querySelector(".m-chart-tip"),n=t.querySelector(".m-chart-crosshair"),l=t.dataset.color||"#0172A4";function d(o){const m=t.getBoundingClientRect(),v=Math.max(0,Math.min(1,(o-m.left)/m.width)),u=Math.round(v*(e.length-1)),b=e[u],w=v*100;n.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${w}%;width:1px;background:${l};opacity:.5`,s.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(w,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,s.textContent=b<10?b.toFixed(1):String(Math.round(b))}function c(){n.style.display="none",s.style.display="none"}t.addEventListener("pointermove",o=>{o.preventDefault(),d(o.clientX)}),t.addEventListener("pointerdown",o=>d(o.clientX)),t.addEventListener("pointerup",c),t.addEventListener("pointerleave",c),t.style.cursor="crosshair"}function qi(t){const i=ze(O.filter(b=>b.orgId===t.orgId)),e=new Set([t.name]);i.filter(b=>b.ids.includes(t.id)).forEach(b=>e.add(b.label));const a=[t.crop,t.irrigation].filter(b=>b&&b!=="Pas d'irrigation"&&b!=="Non irrigué").join(" · ");a&&e.add(a);const r=Ct.filter(b=>e.has(b.label)),s=new Date().toISOString().split("T")[0],n=r.filter(b=>b.real),l=r.filter(b=>!b.real),d=n.reduce((b,w)=>b+w.mm,0),c=l.reduce((b,w)=>b+w.mm,0),o=l.filter(b=>b.iso>=s).sort((b,w)=>b.iso<w.iso?-1:1)[0],m=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],v=b=>{const[,w,$]=b.split("-");return`${+$} ${m[+w-1]}`},u=t.irrigation;return r.length?`
    <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
        <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
          <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          ${u&&u!=="Pas d'irrigation"?`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:20px;padding:1px 8px;font-size:11px;font-weight:600">${u}</span>`:""}
        </span>
        <button class="m-widget-menu" type="button">•••</button>
      </div>
      <div style="display:flex;gap:20px;width:100%">
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Réalisées</div>
          <div style="font-size:22px;font-weight:700;color:#E07820;line-height:1.1">${d} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${n.length} irrig.</div>
        </div>
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Planifiées</div>
          <div style="font-size:22px;font-weight:700;color:#FFB705;line-height:1.1">${c} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${l.length} irrig.</div>
        </div>
      </div>
      ${o?`<div style="font-size:12px;color:#3a3a3c"><i class="bi bi-arrow-right-circle" style="color:#0172A4"></i> Prochaine · <strong>${v(o.iso)}</strong> · ${o.mm} mm</div>`:""}
    </div>`:`
      <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:8px">
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
          <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
            <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          </span>
          <button class="m-widget-menu" type="button">•••</button>
        </div>
        <div style="font-size:13px;color:#8e8e93">Aucune irrigation enregistrée cette saison</div>
      </div>`}function Hi(t,i=[]){const e=i.map(r=>N.find(s=>s.id===r)).filter(Boolean),a=Ri(e);return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${qi(t)}
      ${_i(t)}
      ${Di()}
      ${a}
    </div>`}function Ue(t,i,e,a){return`
    <div class="m-widget-card">
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${e}"><i class="bi ${i}"></i> ${t}</span>
        <button class="m-widget-menu" type="button">•••</button>
      </div>
      ${a}
    </div>`}function _i(t){const i=t.id||1,e=(o,m)=>+(o+(i*9301+49297)%233280/233280*(m-o)).toFixed(1),a=e(40,180),r=e(60,200),s=Math.round(e(80,320)),n=Math.round(e(120,600)),l=Math.round(e(20,120)),c=`
    <div class="m-wcumuls-list">
      ${[{label:"Pluie",val:a,unit:"mm",color:"#45b7d1",icon:"bi-cloud-rain-heavy"},{label:"ETP",val:r,unit:"mm",color:"#c090e0",icon:"bi-sun"},{label:"Degrés jours",val:s,unit:"DJ",color:"#e07050",icon:"bi-thermometer-half"},{label:"Ensoleillement",val:n,unit:"h",color:"#f5c842",icon:"bi-brightness-high"},{label:"Heures de froid",val:l,unit:"h",color:"#7bc4b0",icon:"bi-snow"}].map(o=>`
        <div class="m-wcumuls-row">
          <i class="bi ${o.icon}" style="color:${o.color};width:16px;text-align:center"></i>
          <span class="m-wcumuls-label">${o.label}</span>
          <span class="m-wcumuls-val" style="color:${o.color}">${o.val} <span class="m-wcumuls-unit">${o.unit}</span></span>
        </div>`).join("")}
    </div>
    <div class="m-widget-footer">Depuis le 1er janvier 2026</div>`;return Ue("Cumuls saison","bi-bar-chart-line","#0172A4",c)}function Di(){const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],i=["bi-sun","bi-cloud-sun","bi-cloud","bi-cloud-rain","bi-cloud-drizzle","bi-cloud-lightning","bi-cloud-snow"],e=new Date,a=e.getDate(),s=`
    <div class="m-wprev5-grid">
      ${Array.from({length:5},(n,l)=>{const d=new Date(e);d.setDate(e.getDate()+l);const c=a+l*7,o=Math.round(16+(c*127+31)%100/100*12),m=Math.round(o-4-(c*31+17)%40/10),v=(c*41+13)%100<35?Math.round(2+c*13%18):0,u=i[v>0?v>8?3:4:c%3===0?1:c%5===0?2:0];return{day:t[d.getDay()],tmax:o,tmin:m,pluie:v,icon:u}}).map((n,l)=>`
        <div class="m-wprev5-col${l===0?" m-wprev5-col--today":""}">
          <div class="m-wprev5-day">${l===0?"Auj.":n.day}</div>
          <i class="bi ${n.icon} m-wprev5-icon"></i>
          <div class="m-wprev5-tmax">${n.tmax}°</div>
          <div class="m-wprev5-tmin">${n.tmin}°</div>
          ${n.pluie>0?`<div class="m-wprev5-rain">${n.pluie}mm</div>`:'<div class="m-wprev5-rain m-wprev5-rain--none">—</div>'}
        </div>`).join("")}
    </div>
    <div class="m-widget-footer">Source : Modèle Arome · 3 km</div>`;return Ue("Prévisions 5 jours","bi-cloud-sun","#4ecdc4",s)}function Ri(t){if(!t.length)return"";const i={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},e={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermo-hygro",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},a={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},r={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return t.slice(0,4).map(s=>{const n=i[s.model]||"bi-broadcast",l=e[s.model]||s.model,d=a[s.model]||"#0172A4",c=r[s.model]||[],o=ge[c[0]],m=c[0],v=`
      <div style="margin-bottom:6px">
        ${o?At(m,d,!1,"1d"):'<div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--txt3);font-size:12px">Données indisponibles</div>'}
      </div>
      <div class="m-wsensor-vals">
        ${c.slice(0,3).map(u=>{const b=ge[u];if(!b)return"";const $=ke(u,1)[0],S=$<10?$.toFixed(1):Math.round($);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${b.label}</span>
            <span class="m-wsensor-value" style="color:${b.color}">${S} ${b.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer">${s.serial}</div>`;return Ue(l,n,d,v)}).join("")}function Bi(t,i){const e=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:i});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function Oi(t,i,e){const a=new Set;i.forEach(u=>{const b=N.find(w=>w.id===u);b&&(Lt[b.model]||[]).forEach(w=>a.add(w))});const r=[...new Set(["etp","rayonnement","temp_rosee",...a])].filter(u=>ge[u]),s=Je[e]||60,n=Ge[e]||10080,l=n/s*6e4,d=new Date,c=new Date(d-n*6e4),o=["Horodatage",...r.map(u=>`${ge[u].label} (${ge[u].unit})`)].join(";"),m=Array.from({length:s},(u,b)=>[new Date(c.getTime()+b*l).toISOString().replace("T"," ").slice(0,19),...r.map($=>ke($,1)[0].toFixed(2))].join(";")),v=(t.name||"parcelle").replace(/[^\w]/g,"_");Bi([o,...m].join(`\r
`),`${v}_${e}_${new Date().toISOString().slice(0,10)}.csv`)}function Fi(t,i="7d",e="1h"){const a=new Set;t.forEach(s=>{const n=N.find(l=>l.id===s);n&&(Lt[n.model]||[]).forEach(l=>a.add(l))});const r=[...new Set(["etp","rayonnement","temp_rosee",...a])];return`
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
      ${r.map(s=>Pi(s,i)).join("")}
    </div>`}function Ni(t,i,e){const a=e.map(r=>{const s=N.find(n=>n.id===r);return s?`${s.model} — ${s.serial}`:null}).filter(Boolean);return`
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
        ${a.length?a.map((r,s)=>`<div class="m-list-row${s===a.length-1?" m-list-row--last":""}">
              <span class="m-list-row-label">${r}</span>
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
    </div>`}function Be(t,i=[],e="widgets"){const a=J.find(u=>u.id===t.orgId);let r=e,s="7d",n="1h",l=!1;const d=(a==null?void 0:a.ville)||"",c=be(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Parcelles</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${t.name}</div>
          ${t.crop||d?`<div class="m-detail-subtitle">${[t.crop,d].filter(Boolean).join(" · ")}</div>`:""}
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${e==="widgets"?"active":""}" data-view="widgets">Widgets</button>
      <button class="m-detail-tab ${e==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${e==="params"?"active":""}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function o(){const u=c.querySelector("#detail-content");r==="widgets"&&(u.innerHTML=Hi(t,i)),r==="donnees"&&(u.innerHTML=Fi(i,s,n)),r==="params"&&(u.innerHTML=Ni(t,a,i),m()),v()}function m(){const u=window.L;u&&setTimeout(()=>{var $;const b=c.querySelector("#parcel-minimap");if(!b)return;const w=u.map(b,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(w),(($=t.latlngs)==null?void 0:$.length)>=3){const S=u.polygon(t.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(w);w.fitBounds(S.getBounds(),{padding:[8,8]})}else w.setView([t.lat,t.lng],14),u.circleMarker([t.lat,t.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(w)},50)}function v(){var u,b,w,$;(u=c.querySelector(".m-period-sel"))==null||u.addEventListener("change",S=>{s=S.target.value,o()}),(b=c.querySelector(".m-step-sel"))==null||b.addEventListener("change",S=>{n=S.target.value,o()}),(w=c.querySelector(".m-export-btn"))==null||w.addEventListener("click",()=>Oi(t,i,s)),c.querySelectorAll(".m-chart-svg-wrap").forEach(S=>Ii(S)),c.querySelectorAll(".m-list-row[data-action]").forEach(S=>{S.addEventListener("click",()=>B("Fonctionnalité à venir"))}),c.querySelectorAll(".m-widget-menu").forEach(S=>{S.addEventListener("click",L=>{L.stopPropagation(),B("Options widget")})}),($=c.querySelector(".m-add-widget-btn"))==null||$.addEventListener("click",Ti)}c.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{c.querySelectorAll(".m-detail-tab").forEach(b=>b.classList.remove("active")),u.classList.add("active"),r=u.dataset.view,o()})}),c.querySelector(".m-detail-back").addEventListener("click",K),c.querySelector("#d-star").addEventListener("click",()=>{l=!l;const u=c.querySelector("#d-star");u.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",u.style.color=l?"#f5c842":"",B(l?"Ajouté aux favoris":"Retiré des favoris")}),c.querySelector("#d-plus").addEventListener("click",()=>{const u=`
      <a class="m-sheet-link" data-a="widget"><i class="bi bi-grid-1x2"></i> Widget</a>
      <a class="m-sheet-link" data-a="irrigation"><i class="bi bi-droplet"></i> Irrigation</a>
      <a class="m-sheet-link" data-a="strategie-irrigation"><i class="bi bi-arrow-repeat"></i> Stratégie d'irrigation</a>
      <a class="m-sheet-link" data-a="capteur"><i class="bi bi-broadcast"></i> Capteur</a>
      <a class="m-sheet-link" data-a="alerte"><i class="bi bi-bell"></i> Alerte</a>
      <a class="m-sheet-link" data-a="integration" style="color:#8e8e93">
        <i class="bi bi-plug"></i> Intégration <span style="font-size:11px">(version web uniquement)</span>
      </a>
      <a class="m-sheet-link" data-a="note"><i class="bi bi-pencil"></i> Note</a>
      <a class="m-sheet-link" data-a="traitement"><i class="bi bi-eyedropper"></i> Traitement</a>`,b=document.createElement("div");b.innerHTML=u;const w=U({title:"Ajouter à la parcelle",body:b,doneLabel:"Fermer",onDone:()=>{}});b.querySelectorAll("[data-a]").forEach($=>{$.addEventListener("click",()=>{const S=$.dataset.a;w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{w.remove(),B(S==="integration"?"Disponible sur la version web":"Fonctionnalité à venir")},280)})})}),c.querySelector("#d-journal").addEventListener("click",()=>zi(t)),o()}const Tt=t=>`parcel-journal-${t}`;function Oe(t){try{const i=localStorage.getItem(Tt(t));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"note",category:"Observation générale",date:"2026-05-11",auteur:"Jean Dupont",texte:"Quelques pucerons sur feuilles basses. À surveiller."},{id:2,type:"traitement",date:"2026-05-16",auteur:"Sophie Martin",texte:"Vent < 2 m/s, conditions conformes.",produit:"Karate Zeon",dose:"0,1 L/ha",cible:"Pucerons"}]}function jt(t,i){localStorage.setItem(Tt(t),JSON.stringify(i))}function zi(t){const i=J.find(s=>s.id===t.orgId),e=(i==null?void 0:i.ville)||"",a=be(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Parcelle</span></button>
        <span style="font-size:15px;font-weight:600;color:var(--txt3)">Journal</span>
        <div style="width:44px"></div>
      </div>
      <div class="m-detail-identity" style="pointer-events:none">
        <div style="width:38px"></div>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${t.name}</div>
          ${t.crop||e?`<div class="m-detail-subtitle">${[t.crop,e].filter(Boolean).join(" · ")}</div>`:""}
        </div>
        <div style="width:38px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);a.querySelector(".m-detail-back").addEventListener("click",K);function r(){var o,m;const s=a.querySelector("#mjrn-content"),n=Oe(t.id).slice().sort((v,u)=>u.date.localeCompare(v.date)),l=v=>{const[u,b,w]=v.split("-");return`${w}/${b}/${u}`},d={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"}};let c=`
      <div style="padding:12px 16px 4px;display:flex;gap:8px">
        <button class="btn-secondary btn-sm" id="mjrn-add-note" style="gap:6px;flex:1;justify-content:center">
          <i class="bi bi-pencil-square"></i> Note
        </button>
        <button class="btn-secondary btn-sm" id="mjrn-add-trait" style="gap:6px;flex:1;justify-content:center">
          <i class="bi bi-eyedropper"></i> Traitement
        </button>
      </div>
    `;n.length===0?c+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(c+='<div class="m-jrn-timeline">',n.forEach((v,u)=>{const b=d[v.type]||d.note,w=v.type==="traitement",$=u===n.length-1;c+=`
          <div class="m-jrn-entry" data-id="${v.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${b.dotBg};color:${b.dotColor};border-color:${b.dotColor}40">
                <i class="bi ${b.icon}"></i>
              </div>
              ${$?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${l(v.date)}</span>
                <span class="journal-type-badge journal-type-badge--${b.badgeCls}">${b.label}</span>
                <button class="m-jrn-del" data-id="${v.id}"><i class="bi bi-trash3"></i></button>
              </div>
              ${v.texte?`<div class="m-jrn-texte">${v.texte}</div>`:""}
              ${w&&(v.produit||v.dose||v.cible)?`
                <div class="m-jrn-meta">
                  ${v.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${v.produit}</span>`:""}
                  ${v.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${v.dose}</span>`:""}
                  ${v.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${v.cible}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),c+="</div>"),s.innerHTML=c,(o=s.querySelector("#mjrn-add-note"))==null||o.addEventListener("click",()=>ft("note",t.id,r)),(m=s.querySelector("#mjrn-add-trait"))==null||m.addEventListener("click",()=>ft("traitement",t.id,r)),s.querySelectorAll(".m-jrn-del").forEach(v=>{v.addEventListener("click",()=>{const u=parseInt(v.dataset.id);jt(t.id,Oe(t.id).filter(b=>b.id!==u)),r()})})}r()}function ft(t,i,e){const a=t==="traitement",r=new Date().toISOString().slice(0,10),s=document.createElement("div");s.className="modal add-modal",s.innerHTML=`
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">${a?"Ajouter un traitement":"Ajouter une note"}</span>
        <button class="add-modal-close">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="mjf-date" class="journal-form-input" value="${r}">
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
    </div>`,s.querySelector(".add-modal-close").addEventListener("click",()=>s.remove()),s.addEventListener("click",n=>{n.target===s&&s.remove()}),s.querySelector("#mjf-save").addEventListener("click",()=>{const n=s.querySelector("#mjf-date").value||r,l=s.querySelector("#mjf-texte").value.trim(),d={id:Date.now(),type:t,date:n,texte:l,auteur:"Jean Dupont"};a&&(d.produit=s.querySelector("#mjf-produit").value.trim(),d.dose=s.querySelector("#mjf-dose").value.trim(),d.cible=s.querySelector("#mjf-cible").value.trim()),!(!l&&!d.produit)&&(jt(i,[d,...Oe(i)]),s.remove(),e())}),document.body.appendChild(s)}const gt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:Be},Symbol.toStringTag,{value:"Module"})),xe=100,Vi={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function Ce(t,i){const e=Vi[i];return e?N.some(a=>a.parcelId===t.id&&e.includes(a.model)):!0}const Le=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température air",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Wi(t){switch(t){case"irrigation":return Math.round(Math.random()>.4?Math.random()*45:0);case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Ji(t,i){let e=t.querySelector("#parcelles-content");e||(e=document.createElement("div"),e.id="parcelles-content",t.appendChild(e));const a=i==="admin",r=J.filter(L=>L.id!==xe);Object.fromEntries(J.map(L=>[L.id,L]));let s=null,n=null;const l={};let d="carte",c="pluie",o="7 derniers jours",m="all";function v(L){const A=`${L}-${c}-${o}`;return A in l||(l[A]=Wi(c)),l[A]}function u(){return a?m==="all"?O:m===String(xe)?O.filter(L=>L.orgId===xe):O.filter(L=>String(L.orgId)===m):O.filter(L=>L.orgId===1)}function b(){if(s){try{s.remove()}catch{}s=null,n=null}}function w(){b();const L=Le.find(p=>p.id===c)||Le[0],A=u(),T=a?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${xe}"${m===String(xe)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${r.map(p=>`<option value="${p.id}"${m===String(p.id)?" selected":""}>${p.name}</option>`).join("")}
      </select>`:"",j=[...A].sort((p,h)=>{const f=Ce(p,c),y=Ce(h,c);return f&&!y?-1:!f&&y?1:f?v(h.id)-v(p.id):0}),g=j.length?`<div class="m-plain-list">${j.map(p=>{const h=[p.crop,p.irrigation].filter(Boolean).join(" · "),f=Ce(p,c);return`
            <div class="m-plain-row m-tappable" data-plot-id="${p.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${p.name}</span>
                ${h?`<span class="m-plain-city">${h}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${f?"":" m-plain-na"}">${f?`${v(p.id)} ${L.unit}`:"—"}</span>
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';e.innerHTML=`
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
            ${Le.map(p=>`<option value="${p.id}"${p.id===c?" selected":""}>${p.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${L.aggs.map(p=>`<option${p===o?" selected":""}>${p}</option>`).join("")}
          </select>
        </div>
        ${T}
      </div>
      ${d==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${g}</div>`}`,S(),d==="carte"&&$(A,L)}function $(L,A){const T=window.L;T&&setTimeout(()=>{const j=e.querySelector("#parcel-map");if(!j)return;s=T.map(j,{zoomControl:!1,attributionControl:!1}),T.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(s);const g=[];L.forEach(p=>{const h=Ce(p,c)?`${v(p.id)} ${A.unit}`:"—",f=N.filter(q=>q.parcelId===p.id).map(q=>q.id),y=()=>Be(p,f),x=[p.lat,p.lng];p.latlngs&&p.latlngs.length>=3?(T.polygon(p.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(s).on("click",y),g.push(...p.latlngs)):g.push(x);const C=Ce(p,c),M=T.circleMarker(x,{radius:C?8:6,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:C?.95:.4}).addTo(s);C&&M.bindTooltip(h,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),M.on("click",y)}),g.length&&(n=g,s.fitBounds(g,{padding:[32,32]})),s.invalidateSize()},0)}window.addEventListener("m-tab-change",L=>{L.detail==="parcelles"&&d==="carte"&&s&&setTimeout(()=>{s.invalidateSize(),n!=null&&n.length&&s.fitBounds(n,{padding:[32,32]})},50)});function S(){var L,A,T;e.querySelectorAll(".m-view-btn").forEach(j=>j.addEventListener("click",()=>{d=j.dataset.view,w()})),(L=e.querySelector("#metric-sel"))==null||L.addEventListener("change",j=>{var g;c=j.target.value,o=((g=Le.find(p=>p.id===c))==null?void 0:g.defaultAgg)||"",w()}),(A=e.querySelector("#agg-sel"))==null||A.addEventListener("change",j=>{o=j.target.value,w()}),(T=e.querySelector("#org-filter"))==null||T.addEventListener("change",j=>{m=j.target.value,w()}),e.querySelectorAll(".m-tappable[data-plot-id]").forEach(j=>{j.addEventListener("click",()=>{const g=O.find(h=>h.id===+j.dataset.plotId);if(!g)return;const p=N.filter(h=>h.parcelId===g.id).map(h=>h.id);Be(g,p)})})}w()}const kt={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},Gi={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"},Pt={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#e07050",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#80c8e8",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}]};function Ye(t,i){const e={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[t]||{base:50,amp:20,min:0};return Array.from({length:i},(a,r)=>{const s=r/i*Math.PI*4;if(e.sparse&&Math.random()>.25)return 0;const n=e.base+e.amp*Math.sin(s-1)+(Math.random()-.5)*e.amp*.5;return Math.max(e.min??0,Math.min(e.max??9999,n))})}const Ze={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Ui(t,i,e,a,r,s=20){const n=Ze[t]||10080,l=new Date,d=v=>t==="1d"||t==="hier"?`${String(v.getHours()).padStart(2,"0")}h`:t==="365d"?v.toLocaleDateString("fr-FR",{month:"short"}):`${String(v.getDate()).padStart(2,"0")}/${String(v.getMonth()+1).padStart(2,"0")}`,c=4,o=i-e-a,m=r-s;return Array.from({length:c+1},(v,u)=>{const b=u/c,w=new Date(l.getTime()-(1-b)*n*6e4),$=(e+b*o).toFixed(1),S=u===0?"start":u===c?"end":"middle";return[`<line x1="${$}" y1="${m}" x2="${$}" y2="${m+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${$}" y="${r-3}" text-anchor="${S}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(w)}</text>`].join("")}).join("")}function Yi(t,i,e,a="7d"){const r=Xe[a]||60,s=Ye(t,r),n=320,l=100,d=34,c=6,o=10,m=20,v=n-d-c,u=l-o-m,b=e?0:Math.min(...s),w=Math.max(...s,b+.001),$=w-b,S=C=>d+C/(s.length-1)*v,L=C=>o+u-(C-b)/$*u,A=`g${Math.random().toString(36).slice(2,8)}`,T=[0,.5,1].map(C=>{const M=b+C*$,q=o+u-C*u;return`<text x="${d-3}" y="${(q+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${M<10?M.toFixed(1):Math.round(M)}</text>`}).join(""),j=[.25,.5,.75].map(C=>`<line x1="${d}" y1="${(o+u-C*u).toFixed(1)}" x2="${n-c}" y2="${(o+u-C*u).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),g=`<line x1="${d}" y1="${o+u}" x2="${n-c}" y2="${o+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,p=Ui(a,n,d,c,l);if(e){const C=v/s.length*.7;return`<svg viewBox="0 0 ${n} ${l}" width="100%" height="${l}" preserveAspectRatio="none">
      ${T}${j}${g}
      ${s.map((M,q)=>{const G=(M-b)/$*u,ue=o+u-G;return`<rect x="${(S(q)-C/2).toFixed(1)}" y="${ue.toFixed(1)}" width="${C.toFixed(1)}" height="${G.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${p}
    </svg>`}const f=s.map((C,M)=>[S(M),L(C)]).map(([C,M],q)=>`${q?"L":"M"}${C.toFixed(1)},${M.toFixed(1)}`).join(" "),y=`${f} L${S(s.length-1).toFixed(1)},${(o+u).toFixed(1)} L${d},${(o+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(C=>+C.toFixed(2)),minV:+b.toFixed(2),maxV:+w.toFixed(2)}))}" data-color="${i}" style="position:relative">
    <svg viewBox="0 0 ${n} ${l}" width="100%" height="${l}" preserveAspectRatio="none">
      <defs><linearGradient id="${A}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${T}${j}${g}
      <path d="${y}" fill="url(#${A})"/>
      <path d="${f}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${p}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Zi(t){const i=JSON.parse(decodeURIComponent(t.dataset.chart||"{}"));if(!i.vals)return;const{vals:e}=i,a=t.querySelector(".m-chart-tip"),r=t.querySelector(".m-chart-crosshair"),s=t.dataset.color||"#0172A4";function n(d){const c=t.getBoundingClientRect(),o=Math.max(0,Math.min(1,(d-c.left)/c.width)),m=Math.round(o*(e.length-1)),v=e[m],u=o*100;r.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${u}%;width:1px;background:${s};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(u,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=v<10?v.toFixed(1):String(Math.round(v))}function l(){r.style.display="none",a.style.display="none"}t.addEventListener("pointermove",d=>{d.preventDefault(),n(d.clientX)}),t.addEventListener("pointerdown",d=>n(d.clientX)),t.addEventListener("pointerup",l),t.addEventListener("pointerleave",l),t.style.cursor="crosshair"}const Xe={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function Xi(t,i,e){if(!e)return"";const a=Xe[i]||60,s=(Ze[i]||10080)/(a*60),n=Ye(t,a);let l=[];if(e==="temp"){const d=n.reduce((o,m)=>o+Math.max(0,m),0)*(s/24),c=n.filter(o=>o<7).length*s;l=[{label:"Degrés jours",val:`${Math.round(d)} DJ`},{label:"Heures de froid",val:`${Math.round(c)} h`}]}else if(e==="pluie")l=[{label:"Cumul pluie",val:`${n.reduce((c,o)=>c+o,0).toFixed(1)} mm`}];else if(e==="rayo"){const d=n.filter(c=>c>120).length*s;l=[{label:"Ensoleillement",val:`${Math.round(d)} h`}]}else if(e==="hws"){const d=n.filter(c=>c>50).length*s;l=[{label:"Heures d'humectation",val:`${Math.round(d)} h`}]}return l.length?`<div class="m-chart-cumuls">${l.map(d=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${d.label}</span>
      <span class="m-chart-cumul-val">${d.val}</span>
    </div>`).join("")}</div>`:""}function Ki(t,i){const e=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:i});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function Qi(t,i){const e=Pt[t.model]||[];if(!e.length)return;const a=Xe[i]||60,r=Ze[i]||10080,s=r/a*6e4,n=new Date,l=new Date(n-r*6e4),d=["Horodatage",...e.map(o=>`${o.label} (${o.unit})`)].join(";"),c=Array.from({length:a},(o,m)=>[new Date(l.getTime()+m*s).toISOString().replace("T"," ").slice(0,19),...e.map(u=>Ye(u.id,1)[0].toFixed(2))].join(";"));Ki([d,...c].join(`\r
`),`${t.serial}_${i}_${new Date().toISOString().slice(0,10)}.csv`)}function es(t,i="7d",e="1h"){const a=Pt[t.model]||[];if(!a.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const r=a.map(s=>`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${s.color}">${s.label}</span>
        </div>
        ${Yi(s.id,s.color,s.cumul,i)}
        ${Xi(s.id,i,s.cumulsType)}
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
    <div class="m-detail-section">${r}</div>`}function ts(t){const i=t.parcelId?O.find(n=>n.id===t.parcelId):null,e=i?J.find(n=>n.id===i.orgId):null,a=t.networkQuality||0,r=a>70?"#30d158":a>40?"#ff9f0a":"#ff3b30",s=t.event?[t.event]:[];return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${Gi[t.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${t.model} — ${kt[t.model]||t.model}</span>
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
        ${s.length?s.map(n=>`<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${n}</span></div>`).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${r};font-weight:600">${a}%</span>
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
    </div>`}function Fe(t,i="donnees"){var v;const e=t.parcelId?O.find(u=>u.id===t.parcelId):null;let a=i,r="7d",s="1h",n=!1;const l=e&&((v=J.find(u=>u.id===e.orgId))==null?void 0:v.ville)||"",d=be(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${t.serial}</div>
          <div class="m-detail-subtitle">${[kt[t.model]||t.model,l].filter(Boolean).join(" · ")}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function c(){const u=d.querySelector("#detail-content");a==="donnees"&&(u.innerHTML=es(t,r,s)),a==="params"&&(u.innerHTML=ts(t),o()),m()}function o(){const u=window.L;!u||!e||setTimeout(()=>{const b=d.querySelector("#sensor-minimap");if(!b)return;const w=u.map(b,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(w),w.setView([e.lat,e.lng],15),u.circleMarker([e.lat,e.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(w)},50)}function m(){var u,b,w;(u=d.querySelector(".m-period-sel"))==null||u.addEventListener("change",$=>{r=$.target.value,c()}),(b=d.querySelector(".m-step-sel"))==null||b.addEventListener("change",$=>{s=$.target.value,c()}),(w=d.querySelector(".m-export-btn"))==null||w.addEventListener("click",()=>Qi(t,r)),d.querySelectorAll(".m-chart-svg-wrap").forEach($=>Zi($)),d.querySelectorAll(".m-list-row[data-action]").forEach($=>{$.addEventListener("click",()=>B("Fonctionnalité à venir"))})}d.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{d.querySelectorAll(".m-detail-tab").forEach(b=>b.classList.remove("active")),u.classList.add("active"),a=u.dataset.view,c()})}),d.querySelector(".m-detail-back").addEventListener("click",K),d.querySelector("#d-star").addEventListener("click",()=>{n=!n;const u=d.querySelector("#d-star");u.querySelector("i").className=n?"bi bi-star-fill":"bi bi-star",u.style.color=n?"#f5c842":"",B(n?"Ajouté aux favoris":"Retiré des favoris")}),d.querySelector("#d-journal").addEventListener("click",()=>is(t)),d.querySelector("#d-plus").addEventListener("click",()=>{const u=`
      <button class="m-sheet-option" data-a="plot"><i class="bi bi-map"></i> Parcelle</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" data-a="maintenance"><i class="bi bi-tools"></i> Opération de maintenance</button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>
      <button class="m-sheet-option" data-a="traitement"><i class="bi bi-eyedropper"></i> Traitement</button>`,b=document.createElement("div");b.innerHTML=u;const w=U({title:"Ajouter au capteur",body:b,doneLabel:"Fermer",onDone:()=>{}});b.querySelectorAll("[data-a]").forEach($=>{$.addEventListener("click",()=>{w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{w.remove(),B("Fonctionnalité à venir")},280)})})}),c()}const It=t=>`sensor-journal-${t}`,qt=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function Ne(t){try{const i=localStorage.getItem(It(t));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",texte:""},{id:2,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",texte:""},{id:3,type:"note",date:"2023-11-02",user:"Agriculteur",texte:"Capteur légèrement déplacé — redressé"}]}function Ht(t,i){localStorage.setItem(It(t),JSON.stringify(i))}function is(t){const i=be(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);i.querySelector("#sjrn-close").addEventListener("click",K);const e=Object.fromEntries(qt.map(r=>[r.id,r]));function a(){var d;const r=i.querySelector("#sjrn-content"),s=Ne(t.id).slice().sort((c,o)=>o.date.localeCompare(c.date)),n=c=>{const[o,m,v]=c.split("-");return`${v}/${m}/${o}`};let l=`
      <div style="padding:12px 16px 4px">
        <button class="btn-secondary btn-sm" id="sjrn-add-btn" style="gap:6px;width:100%;justify-content:center">
          <i class="bi bi-plus-circle"></i> Ajouter une entrée
        </button>
      </div>
    `;s.length===0?l+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(l+='<div class="m-jrn-timeline">',s.forEach((c,o)=>{const m=e[c.type]||{label:c.type,icon:"bi-circle",color:"#8e8e93"},v=o===s.length-1;l+=`
          <div class="m-jrn-entry" data-id="${c.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${m.color}18;color:${m.color};border-color:${m.color}40">
                <i class="bi ${m.icon}"></i>
              </div>
              ${v?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${n(c.date)}</span>
                <span style="font-size:12px;font-weight:600;color:${m.color}">${m.label}</span>
                <button class="m-jrn-del" data-id="${c.id}"><i class="bi bi-trash3"></i></button>
              </div>
              ${c.texte?`<div class="m-jrn-texte">${c.texte}</div>`:""}
              ${c.user?`<div style="font-size:11px;color:#8e8e93;margin-top:2px">${c.user}</div>`:""}
            </div>
          </div>`}),l+="</div>"),r.innerHTML=l,(d=r.querySelector("#sjrn-add-btn"))==null||d.addEventListener("click",()=>ss(t.id,a)),r.querySelectorAll(".m-jrn-del").forEach(c=>{c.addEventListener("click",()=>{const o=parseInt(c.dataset.id);Ht(t.id,Ne(t.id).filter(m=>m.id!==o)),a()})})}a()}function ss(t,i){const e=new Date().toISOString().slice(0,10),a=document.createElement("div");a.className="modal add-modal",a.innerHTML=`
    <div class="add-modal-content" style="max-width:440px">
      <div class="add-modal-header">
        <span class="add-modal-title">Ajouter une entrée</span>
        <button class="add-modal-close">×</button>
      </div>
      <div class="journal-form">
        <div class="journal-form-row">
          <label class="journal-form-label">Type</label>
          <select id="sjf-type" class="journal-form-input">
            ${qt.map(r=>`<option value="${r.id}">${r.label}</option>`).join("")}
          </select>
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Date</label>
          <input type="date" id="sjf-date" class="journal-form-input" value="${e}">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Intervenant</label>
          <input type="text" id="sjf-user" class="journal-form-input" value="Jean Dupont">
        </div>
        <div class="journal-form-row">
          <label class="journal-form-label">Note</label>
          <textarea id="sjf-texte" class="journal-form-textarea" placeholder="Observations éventuelles…"></textarea>
        </div>
        <button class="btn-primary btn-sm" id="sjf-save" style="width:100%;justify-content:center;margin-top:4px">Enregistrer</button>
      </div>
    </div>`,a.querySelector(".add-modal-close").addEventListener("click",()=>a.remove()),a.addEventListener("click",r=>{r.target===a&&a.remove()}),a.querySelector("#sjf-save").addEventListener("click",()=>{const r=a.querySelector("#sjf-type").value,s=a.querySelector("#sjf-date").value||e,n=a.querySelector("#sjf-user").value.trim()||"Jean Dupont",l=a.querySelector("#sjf-texte").value.trim();Ht(t,[{id:Date.now(),type:r,date:s,user:n,texte:l},...Ne(t)]),a.remove(),i()}),document.body.appendChild(a)}const as=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:Fe},Symbol.toStringTag,{value:"Module"})),fe=100,yt=1,_e=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],ns={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},ls={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function Ae(t,i){return(ls[t]||[]).includes(i)}function os(t){return ns[t]||t}const Te=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function rs(t){switch(t){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function cs(t,i){let e=t.querySelector("#capteurs-content");e||(e=document.createElement("div"),e.id="capteurs-content",t.appendChild(e));const a=i==="admin",r=J.filter(g=>g.id!==fe),s=Object.fromEntries(O.map(g=>[g.id,g])),n=Object.fromEntries(J.map(g=>[g.id,g]));let l=null,d=null;const c={};let o="carte",m="pluie",v="7 derniers jours",u="all";function b(g){const p=`${g}-${m}-${v}`;return p in c||(c[p]=rs(m)),c[p]}function w(){if(a){if(u==="all")return N;if(u===String(fe)){const y=new Set(O.filter(x=>x.orgId===fe).map(x=>x.id));return N.filter(x=>y.has(x.parcelId))}const f=new Set(O.filter(y=>String(y.orgId)===u).map(y=>y.id));return N.filter(y=>f.has(y.parcelId))}const g=new Set(O.filter(f=>f.orgId===yt).map(f=>f.id)),p=N.filter(f=>g.has(f.parcelId)),h=N.filter(f=>!g.has(f.parcelId)&&_e.includes(f.model));return u==="mine"?p:u==="network"?h:[...p,...h]}function $(g){const p=g.parcelId?s[g.parcelId]:null;if(!p)return null;const h=(g.id*7919%1e3-500)/1e6,f=(g.id*6271%1e3-500)/1e6;return{lat:p.lat+h,lng:p.lng+f,name:p.name}}function S(g){var h;const p=g.parcelId?s[g.parcelId]:null;return p&&((h=n[p.orgId])==null?void 0:h.ville)||null}function L(){if(l){try{l.remove()}catch{}l=null,d=null}}function A(){L();const g=Te.find(x=>x.id===m)||Te[0],p=w();let h;if(a)h=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${fe}"${u===String(fe)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${r.map(x=>`<option value="${x.id}"${u===String(x.id)?" selected":""}>${x.name}</option>`).join("")}
        </select>`;else{const x=J.find(M=>M.id===yt),C=J.find(M=>M.id===fe);h=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${u==="all"?" selected":""}>Tout le réseau</option>
          <option value="network"${u==="network"?" selected":""}>${(C==null?void 0:C.name)||"Breiz'Agri Conseil"} uniquement</option>
          <option value="mine"${u==="mine"?" selected":""}>${(x==null?void 0:x.name)||"Mon organisation"} uniquement</option>
        </select>`}const f=[...p].sort((x,C)=>{const M=Ae(x.model,m),q=Ae(C.model,m);return M&&!q?-1:!M&&q?1:M?b(C.id)-b(x.id):0}),y=f.length?`<div class="m-plain-list">${f.map(x=>{const C=_e.includes(x.model),q=Ae(x.model,m)?`<span class="m-sensor-val">${b(x.id)} ${g.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${x.id}">
              <div class="m-sensor-icon" style="background:${C?"#0172A420":"#5b8dd920"};color:${C?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${os(x.model)}</span>
                <span class="m-sensor-sub">${x.serial}${S(x)?` · ${S(x)}`:""}</span>
              </div>
              ${q}
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';e.innerHTML=`
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${o==="carte"?" m-view-btn--on":""}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${o==="liste"?" m-view-btn--on":""}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${Te.map(x=>`<option value="${x.id}"${x.id===m?" selected":""}>${x.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${g.aggs.map(x=>`<option${x===v?" selected":""}>${x}</option>`).join("")}
          </select>
        </div>
        ${h}
      </div>
      ${o==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${y}</div>`}`,j(),o==="carte"&&T(p,g)}function T(g,p){const h=window.L;h&&setTimeout(()=>{const f=e.querySelector("#sensor-map");if(!f)return;l=h.map(f,{zoomControl:!1,attributionControl:!1}),h.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l);const y=[];g.forEach(x=>{const C=$(x);if(!C)return;const M=Ae(x.model,m),q=_e.includes(x.model),G=h.circleMarker([C.lat,C.lng],{radius:M?10:7,color:"#fff",weight:2,fillColor:q?"#0172A4":"#5b8dd9",fillOpacity:M?.95:.45}).addTo(l);M&&G.bindTooltip(`${b(x.id)} ${p.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),G.on("click",()=>Fe(x)),y.push([C.lat,C.lng])}),y.length&&(d=y,l.fitBounds(y,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",g=>{g.detail==="capteurs"&&o==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),d!=null&&d.length&&l.fitBounds(d,{padding:[32,32]})},50)});function j(){var g,p,h;e.querySelectorAll(".m-view-btn").forEach(f=>f.addEventListener("click",()=>{o=f.dataset.view,A()})),(g=e.querySelector("#metric-sel"))==null||g.addEventListener("change",f=>{var y;m=f.target.value,v=((y=Te.find(x=>x.id===m))==null?void 0:y.defaultAgg)||"",A()}),(p=e.querySelector("#agg-sel"))==null||p.addEventListener("change",f=>{v=f.target.value,A()}),(h=e.querySelector("#org-filter"))==null||h.addEventListener("change",f=>{u=f.target.value,A()}),e.querySelectorAll(".m-tappable[data-sensor-id]").forEach(f=>{f.addEventListener("click",()=>{const y=N.find(x=>x.id===+f.dataset.sensorId);y&&Fe(y)})})}A()}const De=100,$t=1,ds=["Arboriculture","Viticulture","Maraîchage","Grandes cultures","Polyculture-Élevage","Pépiniériste","Floriculture","Trufficulture","Organismes publics / semi-publics","Coopérative","Négoce","Concessionnaire","Semencier","Laboratoire / Institut / Recherche","Autre"],us=["Essentiel","Plus","Expert"],ms=["Administrateur","Agent","Lecteur"];function ps(t){const i=(t||"").match(/(\d{5})/);if(i){const e=t.indexOf(i[0]);return{rue:t.slice(0,e).trim().replace(/,\s*$/,""),cp:i[0],ville:t.slice(e+5).trim().replace(/^,?\s*/,"")}}return{rue:t||"",cp:"",ville:""}}function wt({rue:t,cp:i,ville:e}){return[t,i&&e?`${i} ${e}`:i||e].filter(Boolean).join(", ")}function vs(t){const[i,e,a]=t.split("-");return`${a}/${e}/${i}`}function bs(t,i){if(!t)return{};const e=i==="admin",a=J.find(p=>p.id===(e?De:$t));if(!a)return{};const s=(e?Ie.filter(p=>{var h;return!((h=p.orgIds)!=null&&h.length)||p.orgIds.includes(De)}):Ie.filter(p=>{var h;return(h=p.orgIds)==null?void 0:h.includes($t)})).map(p=>({...p})),n=J.filter(p=>p.id!==De&&p.statut!=="inactif").length,l=ps(a.adresse||""),d={rue:"",cp:"",ville:""},c={name:a.name,metiers:[e?"Coopérative":"Grandes cultures"],adresseFactu:l,adresseLivrai:d,markerLat:a.lat||48.117,markerLng:a.lng||-1.678,plan:a.plan||"Plus",contrat:{numero:e?"CTR-NET-2022-00001":a.codeAdherent||"CTR-2022-00418",dateAdhesion:a.dateAdhesion||"2022-03-15",licencesMembres:e?Ie.length:3,licencesAdherents:e?n:null,licencesIntegrations:e?27:2}};let o=null,m=null,v=null;function u(){if(!v)return;const p=t.querySelector(`#${v}`);if(!p)return;if(o){try{o.remove()}catch{}o=null,m=null}const h=window.L;h&&(o=h.map(p,{zoomControl:!0,attributionControl:!1}),h.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(o),o.setView([c.markerLat,c.markerLng],14),m=h.marker([c.markerLat,c.markerLng],{draggable:!0}).addTo(o),m.on("dragend",()=>{const f=m.getLatLng();c.markerLat=f.lat,c.markerLng=f.lng,B("Position mise à jour")}),setTimeout(()=>o==null?void 0:o.invalidateSize(),50))}function b(){if(v=`expl-map-${Math.random().toString(36).slice(2,8)}`,o){try{o.remove()}catch{}o=null,m=null}const p=wt(c.adresseFactu)||"—",h=wt(c.adresseLivrai);t.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Exploitation</div>
      <div class="m-list">
        <div class="m-list-row" data-action="name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${c.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="metier">
          <span class="m-list-row-label">Métier</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px">${c.metiers.length?c.metiers.join(", "):"—"}</span>
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
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${h||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation <span style="font-size:11px;font-weight:400;color:#8e8e93">— déplacer le marqueur pour modifier</span></div>
      <div id="${v}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${c.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${vs(c.contrat.dateAdhesion)}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Licences membres</span>
          <span class="m-list-row-value">${c.contrat.licencesMembres}</span>
        </div>
        ${c.contrat.licencesAdherents!=null?`
        <div class="m-list-row">
          <span class="m-list-row-label">Adhérents actifs</span>
          <span class="m-list-row-value">${c.contrat.licencesAdherents}</span>
        </div>`:""}
        <div class="m-list-row">
          <span class="m-list-row-label">Licences intégrations</span>
          <span class="m-list-row-value">${c.contrat.licencesIntegrations}</span>
        </div>
        <div class="m-list-row m-list-row--last" data-action="plan">
          <span class="m-list-row-label">Abonnement</span>
          <span class="m-list-row-value" style="color:#0172A4;font-weight:600">${c.plan}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Membres (${s.length})</div>
      <div class="m-list">
        ${s.length?s.map((f,y)=>`
          <div class="m-list-row${y===s.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${y}">
            <div class="m-list-row-col">
              <span class="m-list-row-label">${f.prenom} ${f.nom}</span>
              <span class="m-list-row-sub">${f.role}</span>
            </div>
            <i class="bi bi-chevron-right m-list-chevron"></i>
          </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun membre</span></div>'}
      </div>
      <div style="height:32px"></div>`,w()}function w(){t.querySelectorAll(".m-list-row[data-action]").forEach(p=>{p.addEventListener("click",()=>{switch(p.dataset.action){case"name":$("Nom de l'exploitation",c.name,h=>{c.name=h,b()});break;case"metier":L();break;case"adresse-factu":S("Adresse de facturation",c.adresseFactu,h=>{c.adresseFactu=h,b()});break;case"adresse-livrai":S("Adresse de livraison",c.adresseLivrai,h=>{c.adresseLivrai=h,b()});break;case"plan":A("Abonnement",us,c.plan,h=>{c.plan=h,b()});break}})}),t.querySelectorAll("[data-member-idx]").forEach(p=>{p.addEventListener("click",()=>T(+p.dataset.memberIdx))})}function $(p,h,f){const y=document.createElement("div");y.innerHTML=`<input class="m-sheet-input" type="text" value="${(h||"").replace(/"/g,"&quot;")}" placeholder="${p}">`;const x=y.querySelector("input");U({title:p,body:y,doneLabel:"Enregistrer",onDone:()=>{const C=x.value.trim();C&&(f(C),B("Enregistré"))}}),setTimeout(()=>x.focus(),300)}function S(p,h,f){const y=document.createElement("div");y.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(h.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${h.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(h.ville||"").replace(/"/g,"&quot;")}">`,U({title:p,body:y,doneLabel:"Enregistrer",onDone:()=>{f({rue:y.querySelector("#f-rue").value.trim(),cp:y.querySelector("#f-cp").value.trim(),ville:y.querySelector("#f-ville").value.trim()}),B("Enregistré")}}),setTimeout(()=>y.querySelector("#f-rue").focus(),300)}function L(){const p=new Set(c.metiers),h=document.createElement("div"),f=()=>{h.innerHTML=ds.map(y=>`
        <div class="m-sheet-option${p.has(y)?" m-sheet-option--active":""}" data-m="${y}" style="justify-content:space-between">
          <span>${y}</span>
          ${p.has(y)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),h.querySelectorAll("[data-m]").forEach(y=>{y.addEventListener("click",()=>{const x=y.dataset.m;p.has(x)?p.delete(x):p.add(x),f()})})};f(),U({title:"Métiers",body:h,doneLabel:"Valider",onDone:()=>{c.metiers=[...p],b()}})}function A(p,h,f,y){const x=document.createElement("div");x.innerHTML=h.map((M,q)=>`
      <div class="m-sheet-option${M===f?" m-sheet-option--active":""}" data-i="${q}">
        <span>${M}</span>${M===f?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const C=U({title:p,body:x,doneLabel:"Fermer",onDone:()=>{}});x.querySelectorAll(".m-sheet-option").forEach(M=>{M.addEventListener("click",()=>{y(h[+M.dataset.i]),C.classList.remove("m-sheet-overlay--show"),setTimeout(()=>C.remove(),280),B("Enregistré")})})}function T(p){const h=s[p];if(!h)return;const f=document.createElement("div");f.innerHTML=`
      <div class="m-sheet-links">
        <a class="m-sheet-link" id="mem-delete" style="color:#ff3b30">Supprimer ${h.prenom} ${h.nom}</a>
      </div>`;const y=U({title:`${h.prenom} ${h.nom}`,body:f,doneLabel:"Fermer",onDone:()=>{}});f.querySelector("#mem-delete").addEventListener("click",()=>{s.splice(p,1),y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{y.remove(),b()},280),B("Membre retiré")})}function j(){const p=document.createElement("div");p.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <input class="m-sheet-input" type="text" placeholder="Prénom Nom" id="inv-name">
      <select class="m-sheet-input" id="inv-role">
        ${ms.map(h=>`<option>${h}</option>`).join("")}
      </select>`,U({title:"Inviter un membre",body:p,doneLabel:"Envoyer",onDone:()=>B("Invitation envoyée")}),setTimeout(()=>p.querySelector("#inv-email").focus(),300)}b();function g(){requestAnimationFrame(()=>setTimeout(u,100))}return{onAdd:j,refresh:g}}const hs=100,fs=["Essentiel","Plus","Expert"],gs={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function xt(t){return gs[t]||{label:t||"—",color:"#8e8e93"}}function ys(t,i){if(!t)return{};if(i!=="admin")return t.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const e=J.filter(n=>n.id!==hs).map(n=>({...n}));function a(){const n=e.filter(l=>l.statut!=="inactif");t.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Adhérents — ${n.length} actifs sur ${e.length}</div>
      <div class="m-list">
        ${e.map((l,d)=>{const c=xt(l.statut);return`
            <div class="m-list-row${d===e.length-1?" m-list-row--last":""} m-tappable" data-org-idx="${d}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${l.proprietaire||l.name}</span>
                <span class="m-list-row-sub">${l.name} · ${l.plan||"—"}</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${c.color};flex-shrink:0;margin-right:4px">${c.label}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join("")}
      </div>
      <div style="height:32px"></div>`,t.querySelectorAll("[data-org-idx]").forEach(l=>{l.addEventListener("click",()=>r(e[+l.dataset.orgIdx],+l.dataset.orgIdx))})}function r(n,l){var u,b;const d=xt(n.statut),c=n.statut==="invitation en attente",o=`https://app.weenat.com/invitation?code=${n.codeAdherent||"ADZ-XXX"}`,m=document.createElement("div");m.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email</span><span>${n.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${n.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${n.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${n.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${O.filter(w=>w.orgId===n.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const w=new Set(O.filter($=>$.orgId===n.id).map($=>$.id));return N.filter($=>w.has($.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${d.color};font-weight:600">${d.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${n.dateAdhesion?n.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${c?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const v=U({title:n.name,body:m,doneLabel:"Fermer",onDone:()=>{}});(u=m.querySelector("#lnk-copy"))==null||u.addEventListener("click",()=>{var w;(w=navigator.clipboard)==null||w.writeText(o).catch(()=>{}),B("Lien copié !")}),(b=m.querySelector("#lnk-cancel"))==null||b.addEventListener("click",()=>{n.statut="inactif",v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),a(),B("Invitation annulée")},280)}),m.querySelector("#lnk-delete").addEventListener("click",()=>{e.splice(l,1),v.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{v.remove(),a(),B("Adhérent supprimé")},280)})}function s(){const n=document.createElement("div");n.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${fs.map(l=>`<option>${l}</option>`).join("")}
      </select>`,U({title:"Inviter un adhérent",body:n,doneLabel:"Envoyer",onDone:()=>{const l=n.querySelector("#adh-email").value.trim(),d=n.querySelector("#adh-code").value.trim();if(!l||!d){B("Email et code requis");return}e.push({id:Date.now(),name:l,proprietaire:l,email:l,codeAdherent:d,plan:n.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),a(),B("Invitation envoyée")}}),setTimeout(()=>n.querySelector("#adh-email").focus(),300)}return a(),{onAdd:s}}const $s=new URLSearchParams(window.location.search),Q=$s.get("role")==="adherent"?"adherent":"admin";function _t(){const t=document.getElementById("status-time");if(!t)return;const i=new Date;t.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}_t();setInterval(_t,1e4);const le=["dashboard","parcelles","capteurs","alertes","parametres"];let je="dashboard";function pe(t){var i,e;!le.includes(t)||t===je||(je=t,document.querySelectorAll(".m-screen").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),(i=document.getElementById(`screen-${t}`))==null||i.classList.add("active"),(e=document.querySelector(`.nav-item[data-tab="${t}"]`))==null||e.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})))}function ws(t){var e;(e=document.getElementById("abandon-modal"))==null||e.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),t()})}document.getElementById("phone-screen").addEventListener("click",t=>{var i;t.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",t=>{const i=t.target.closest(".nav-item");if(!i)return;const e=i.dataset.tab;et()>0&&Bt()?ws(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})),pe(e)}):(et()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})),pe(e))});let Z=null,Se=null;const Dt=50,Me=document.getElementById("screen-stack");Me.addEventListener("mousedown",t=>{if(t.target.closest(".leaflet-container")){Z=null;return}Z=t.clientX,Se=t.clientY});Me.addEventListener("mouseup",t=>{if(Z===null)return;const i=t.clientX-Z,e=t.clientY-Se;if(Math.abs(i)>Dt&&Math.abs(i)>Math.abs(e)){const a=le.indexOf(je);i<0&&a<le.length-1&&pe(le[a+1]),i>0&&a>0&&pe(le[a-1])}Z=null,Se=null});Me.addEventListener("mouseleave",()=>{Z=null});Me.addEventListener("touchstart",t=>{if(t.target.closest(".leaflet-container")){Z=null;return}Z=t.touches[0].clientX,Se=t.touches[0].clientY},{passive:!0});Me.addEventListener("touchend",t=>{if(Z===null)return;const i=t.changedTouches[0].clientX-Z,e=t.changedTouches[0].clientY-Se;if(Math.abs(i)>Dt&&Math.abs(i)>Math.abs(e)){const a=le.indexOf(je);i<0&&a<le.length-1&&pe(le[a+1]),i>0&&a>0&&pe(le[a-1])}Z=null},{passive:!0});const xs=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...Q==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],Pe={};function Cs(t){const i=document.getElementById("param-plus-btn"),e=document.getElementById("param-plus-spacer"),a=Pe[t];i&&e&&(a!=null&&a.onAdd?(i.style.display="",e.style.display="none",i.onclick=a.onAdd):(i.style.display="none",e.style.display=""))}function Ss(){var i;const t=document.getElementById("param-segment");t&&(Q==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),xs.forEach((e,a)=>{const r=document.createElement("button");r.className="m-segment-btn"+(a===0?" active":""),r.textContent=e.label,r.dataset.target=e.id,r.addEventListener("click",()=>{var s,n,l;t.querySelectorAll(".m-segment-btn").forEach(d=>d.classList.remove("active")),r.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(d=>d.classList.remove("active")),(s=document.getElementById(e.id))==null||s.classList.add("active"),Cs(e.id),(l=(n=Pe[e.id])==null?void 0:n.refresh)==null||l.call(n)}),t.appendChild(r)}))}Ss();Li(document.getElementById("screen-dashboard"),Q);Ji(document.getElementById("screen-parcelles"),Q);cs(document.getElementById("screen-capteurs"),Q);Zt(document.getElementById("screen-alertes"),Q);Wt(document.getElementById("param-compte"),Q);Pe["param-exploitation"]=bs(document.getElementById("param-exploitation"),Q);Pe["param-reseau"]=ys(document.getElementById("param-reseau"),Q);function Ms(){var a;const t=Q==="admin",i=document.getElementById("phone-screen");(a=document.getElementById("m-add-modal"))==null||a.remove();const e=document.createElement("div");e.id="m-add-modal",e.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#f2f2f7;flex-shrink:0;border-bottom:.5px solid rgba(0,0,0,.1)">
      <span style="font-size:17px;font-weight:700">Ajouter</span>
      <button id="m-add-close" style="width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.07);border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <div style="overflow-y:auto;flex:1;padding:12px 16px">
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon exploitation</div>
        ${[{action:"parcelle",icon:"bi-geo-alt-fill",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun-fill",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus-fill",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"}].map(r=>`
          <button class="m-add-row" data-action="${r.action}" style="display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08);text-align:left">
            <i class="bi ${r.icon}" style="color:#0172A4;width:22px;text-align:center;flex-shrink:0"></i>
            <span>${r.label}</span>
          </button>`).join("")}
      </div>
      ${t?`
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon réseau</div>
        <button class="m-add-row" data-action="adherent" style="display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08);text-align:left">
          <i class="bi bi-building" style="color:#0172A4;width:22px;text-align:center;flex-shrink:0"></i>
          <span>Adhérent</span>
        </button>
      </div>`:""}
    </div>`,e.querySelector("#m-add-close").addEventListener("click",()=>e.remove()),e.querySelectorAll(".m-add-row").forEach(r=>{r.addEventListener("click",()=>{var s;e.remove(),(r.dataset.action==="note"||r.dataset.action==="traitement")&&((s=window.openJournalModal)==null||s.call(window,r.dataset.action))})}),i.appendChild(e)}document.querySelectorAll(".m-navbar-action:not(#param-plus-btn)").forEach(t=>{t.addEventListener("click",Ms)});export{K as a,Is as c,be as p};
