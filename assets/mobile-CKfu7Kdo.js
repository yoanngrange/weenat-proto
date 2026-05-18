import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as j}from"./plots-DRhdmc2N.js";import{s as H}from"./sensors-DDe0aa9W.js";import{n as W}from"./network-YzWdS0n_.js";import{o as R}from"./orgs-Cx4wNzLL.js";import{m as re}from"./members-DEd9yWse.js";const Se={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Je=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Ee=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let V={};function F(t){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,s.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function U({title:t,body:s,onDone:e,doneLabel:a="OK"}){var l;const d=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${a}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,n.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const i=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",i),n.querySelector(".m-sheet-done").addEventListener("click",()=>{e==null||e(),i()}),n.addEventListener("click",r=>{r.target===n&&i()}),n}function Ae(t,s,e){const a=document.createElement("div");a.innerHTML=`<input class="m-sheet-input" type="text" value="${s}" placeholder="${t}">`;const d=a.querySelector("input");U({title:t,body:a,doneLabel:"Enregistrer",onDone:()=>{e(d.value.trim()),F("Enregistré")}}),setTimeout(()=>d.focus(),300)}function Te(t,s,e,a){const d=document.createElement("div");d.innerHTML=s.map((i,l)=>`
    <div class="m-sheet-option${i===e?" m-sheet-option--active":""}" data-i="${l}">
      <span>${i}</span>
      ${i===e?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const n=U({title:t,body:d,doneLabel:"Fermer",onDone:()=>{}});d.querySelectorAll(".m-sheet-option").forEach(i=>{i.addEventListener("click",()=>{a(s[+i.dataset.i]),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280),F("Enregistré")})})}function Ye(t,s){const e=document.createElement("div"),a=()=>{var d;e.innerHTML=t.map((n,i)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${i}" data-f="label" value="${n.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${i}" data-f="numero" value="${n.numero}" placeholder="+33 6…">
        </div>
        ${i>0?`<button class="m-sheet-remove" data-i="${i}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',e.querySelectorAll("input").forEach(n=>{n.addEventListener("input",()=>{t[+n.dataset.i][n.dataset.f]=n.value})}),e.querySelectorAll(".m-sheet-remove").forEach(n=>{n.addEventListener("click",()=>{t.splice(+n.dataset.i,1),a()})}),(d=e.querySelector(".m-sheet-add-phone"))==null||d.addEventListener("click",()=>{t.push({label:"",numero:""}),a()})};a(),U({title:"Téléphone(s)",body:e,doneLabel:"Enregistrer",onDone:()=>{s(t),F("Enregistré")}})}function Xe(t,s,e){const a=document.createElement("div");a.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${t.name}</div>
      <div class="m-sheet-key-date">créée le ${t.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${t.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,a.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var n;(n=navigator.clipboard)==null||n.writeText(t.value).catch(()=>{}),F("Clé copiée !")});const d=U({title:"Clé API",body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const n=s.findIndex(i=>i.id===t.id);n!==-1&&s.splice(n,1),d.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{d.remove(),e()},280),F("Clé supprimée")})}function Ke(){const t="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>t[Math.floor(Math.random()*t.length)]).join("")}function Qe(t){const s=document.createElement("div");s.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const e=s.querySelector("input");U({title:"Nouvelle clé API",body:s,doneLabel:"Générer",onDone:()=>{const a=e.value.trim();if(!a){F("Entrez un nom");return}const d={id:Date.now(),name:a,created:new Date().toLocaleDateString("fr-FR"),value:Ke()};t(d),F("Clé générée")}}),setTimeout(()=>e.focus(),300)}function et(t,s){V={profile:JSON.parse(JSON.stringify(Se[s]||Se.admin)),langue:"Français",unites:Ee[0]};const a=localStorage.getItem("mobile_avatarUrl")||null;function d(){const i=V.profile,l=a?`<img src="${a}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${i.initials}</span>`,r=i.apiKeys.map(c=>`
      <div class="m-list-row" data-key-id="${c.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${c.name}</span>
          <span class="m-list-row-sub">créée le ${c.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),o=i.phones.map((c,h)=>`
      <div class="m-list-row${h===i.phones.length-1&&i.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${c.label||"Numéro "+(h+1)}</span>
        <span class="m-list-row-value">${c.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");t.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${l}</div>
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
        ${o}
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
          <span class="m-list-row-value" id="val-langue">${V.langue}</span>
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
        ${r}
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
    `,n()}function n(){var l;const i=V.profile;(l=t.querySelector("#m-avatar-upload"))==null||l.addEventListener("change",r=>{const o=r.target.files[0];if(!o)return;const c=new FileReader;c.onload=h=>{localStorage.setItem("mobile_avatarUrl",h.target.result),t.querySelector("#m-avatar").innerHTML=`<img src="${h.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},c.readAsDataURL(o)}),t.querySelectorAll(".m-list-row[data-action]").forEach(r=>{r.addEventListener("click",()=>{switch(r.dataset.action){case"prenom":Ae("Prénom",i.prenom,o=>{i.prenom=o,d()});break;case"nom":Ae("Nom",i.nom,o=>{i.nom=o,d()});break;case"email":U({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${i.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>F("Fonctionnalité à venir")});break;case"phones":Ye(i.phones,o=>{i.phones=o,d()});break;case"mdp":U({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>F("Fonctionnalité à venir")});break;case"langue":Te("Langue",Je,V.langue,o=>{V.langue=o,t.querySelector("#val-langue").textContent=o});break;case"unites":Te("Unités",Ee,V.unites,o=>{V.unites=o,t.querySelector("#val-unites").textContent=o.split(" ")[0]});break;case"gen-key":Qe(o=>{i.apiKeys.push(o),d()});break;case"delete":F("Contactez le support pour supprimer votre compte");break}})}),t.querySelectorAll(".m-list-row[data-key-id]").forEach(r=>{r.addEventListener("click",()=>{const o=i.apiKeys.find(c=>c.id===+r.dataset.keyId);o&&Xe(o,i.apiKeys,d)})}),t.querySelectorAll(".m-toggle input[data-notif]").forEach(r=>{r.addEventListener("change",()=>F("Préférence enregistrée"))})}d()}function P(t){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,s.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function _({title:t,body:s,doneLabel:e="Fermer",onDone:a}={}){var l;const d=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${e}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,n.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const i=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",i),n.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),i()}),n.addEventListener("click",r=>{r.target===n&&i()}),n}function tt(t){const s=[{label:"Seuil dépassé",desc:"Conditions déclenchantes vérifiées",duration:"2h34",resolved:!0},{label:"Seuil dépassé",desc:"Notification SMS envoyée",duration:"45min",resolved:!0},{label:"Seuil dépassé",desc:"Valeur mesurée hors plage",duration:"1h20",resolved:!0},{label:"Fausse alerte",desc:"Pic transitoire — durée < seuil",duration:null,resolved:!0},{label:"Seuil dépassé",desc:"Conditions toujours vérifiées",duration:"3h05",resolved:!0},{label:"Alerte en cours",desc:"Conditions vérifiées depuis ce matin",duration:null,resolved:!1}],e=3+t%5,a=Date.now();return Array.from({length:e},(d,n)=>{const i=t*17+n*7,l=1+n*(2+i%6),r=new Date(a-l*864e5),o=s[i%s.length],c=r.getDate(),h=r.getMonth()+1;return{date:`${String(c).padStart(2,"0")}/${String(h).padStart(2,"0")}`,heure:`${String(6+i%14).padStart(2,"0")}h${String(i%60).padStart(2,"0")}`,label:o.label,desc:o.desc,duration:o.duration,resolved:n>0?!0:o.resolved}})}const st=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],it=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],ke={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},at={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function ce(t){if(!t)return"—";const[s,e,a]=t.split("-");return`${a}/${e}/${s}`}function Ie(t){const s=t.sensorIds.map(a=>{const d=H.find(n=>n.id===a);return d?`${d.model} ${d.serial}`:null}).filter(Boolean),e=t.parcelIds.map(a=>{const d=j.find(n=>n.id===a);return(d==null?void 0:d.name)||null}).filter(Boolean);return[...s,...e]}function nt(t,s){var i;let e=t.querySelector("#alertes-content");e||(e=document.createElement("div"),e.id="alertes-content",t.appendChild(e));const a=[...s==="adherent"?it:st];function d(){if(!a.length){e.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}e.innerHTML=a.map(l=>{Ie(l);const r=at[l.metric]||"bi-bell",o=l.statut==="actif";return`
        <div class="m-alert-card" data-id="${l.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${o?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${r}"></i>
            </div>
            <span class="m-alert-name">${l.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${o?"checked":""} data-id="${l.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${ke[l.metric]||l.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${ce(l.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${l.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),n()}function n(){e.querySelectorAll(".m-alert-toggle input").forEach(l=>{l.addEventListener("change",r=>{r.stopPropagation();const o=+l.dataset.id,c=a.find(h=>h.id===o);c&&(c.statut=l.checked?"actif":"inactif",d(),P(`Alerte ${l.checked?"activée":"désactivée"}`))})}),e.querySelectorAll(".m-alert-more-btn").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const o=+l.dataset.id,c=a.find(E=>E.id===o);if(!c)return;Ie(c);const h=document.createElement("div"),m=tt(o);function u(){const E=c.sensorIds.map((A,f)=>{const w=H.find(y=>y.id===A);return w?{label:`${w.model} ${w.serial}`,type:"sensor",idx:f}:null}).filter(Boolean),k=c.parcelIds.map((A,f)=>{const w=j.find(y=>y.id===A);return w?{label:w.name,type:"parcel",idx:f}:null}).filter(Boolean),L=[...E,...k];return L.length?L.map(A=>`<div class="m-perimetre-item" data-type="${A.type}" data-idx="${A.idx}">
                <span>${A.label}</span>
                <button class="m-perimetre-del" data-type="${A.type}" data-idx="${A.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const $=document.createElement("div");$.className="m-sheet-info-rows";function S(){var A;h.innerHTML="";const E=document.createElement("div");E.className="m-sheet-info-rows",E.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${ke[c.metric]||c.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${ce(c.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${ce(c.created)}</span></div>
            ${(A=c.phones)!=null&&A.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${c.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${c.statut}</span></div>`;const k=document.createElement("div");k.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",k.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${u()}</div>`,E.appendChild(k),h.appendChild(E);const L=document.createElement("div");L.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${m.map(f=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${f.resolved?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${f.date} à ${f.heure}${f.duration?` · ${f.duration}`:""}</div>
                <div class="m-history-label">${f.label}</div>
                <div class="m-history-desc">${f.desc}</div>
              </div></div>`).join("")}`,h.appendChild(L),h.querySelectorAll(".m-perimetre-del").forEach(f=>{f.addEventListener("click",w=>{w.stopPropagation();const y=f.dataset.type,p=+f.dataset.idx;y==="sensor"?c.sensorIds.splice(p,1):c.parcelIds.splice(p,1),S(),d(),P("Retiré du périmètre")})})}S(),_({title:c.name,body:h,doneLabel:"Fermer",onDone:()=>{}})})}),e.querySelectorAll(".m-alert-card").forEach(l=>{l.addEventListener("click",r=>{if(r.target.closest(".m-alert-toggle")||r.target.closest(".m-alert-more-btn"))return;const o=+l.dataset.id,c=a.find(u=>u.id===o);if(!c)return;const h=document.createElement("div");h.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const m=_({title:c.name,body:h,doneLabel:"Fermer",onDone:()=>{}});h.querySelector("#al-edit").addEventListener("click",()=>{m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),P("Modification à venir")},280)}),h.querySelector("#al-delete").addEventListener("click",()=>{const u=a.findIndex($=>$.id===o);u!==-1&&a.splice(u,1),m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),d()},280),P("Alerte supprimée")})})})}(i=t.querySelector(".m-navbar-action"))==null||i.addEventListener("click",()=>{P("Création d'alerte — à venir")}),d()}const lt="modulepreload",ot=function(t){return"/weenat-proto/"+t},Pe={},rt=function(s,e,a){let d=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));d=Promise.allSettled(e.map(r=>{if(r=ot(r),r in Pe)return;Pe[r]=!0;const o=r.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":lt,o||(h.as="script"),h.crossOrigin="",h.href=r,l&&h.setAttribute("nonce",l),document.head.appendChild(h),o)return new Promise((m,u)=>{h.addEventListener("load",m),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}function n(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return d.then(i=>{for(const l of i||[])l.status==="rejected"&&n(l.reason);return s().catch(n)})},ae=[];function he(t){const s=document.getElementById("phone-screen"),e=document.createElement("div");return e.className="m-detail-layer",e.innerHTML=t,s.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-detail-layer--in")),ae.push(e),e}function fe(){const t=ae.pop();t&&(t.classList.remove("m-detail-layer--in"),setTimeout(()=>t.remove(),300))}window.addEventListener("m-tab-change",()=>{ae.forEach(t=>t.remove()),ae.length=0});const ct={admin:100,adherent:1},D=[{id:"bilan_hydrique",title:"Bilan hydrique",icon:"bi-droplet-fill",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun-fill",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Données temps-réel",icon:"bi-activity",color:"#ff9f0a",active:!1,available:!1,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"capteurs_fav",title:"Capteurs favoris",icon:"bi-star-fill",color:"#ff9f0a",active:!1,available:!1,fixed:!1},{id:"parcelles_fav",title:"Parcelles favorites",icon:"bi-bookmark-fill",color:"#30d158",active:!1,available:!1,fixed:!1},{id:"mon_secteur",title:"Mon secteur",icon:"bi-geo-alt-fill",color:"#ff6b6b",active:!1,available:!1,fixed:!1},{id:"traitements",title:"Traitements phytosanitaires",icon:"bi-shield-fill",color:"#4ecdc4",active:!1,available:!1,fixed:!1},{id:"cultures",title:"Cultures & Stades phénologiques",icon:"bi-flower1",color:"#a2c4c9",active:!1,available:!1,fixed:!1},{id:"evenements",title:"Capteurs avec événement en cours",icon:"bi-exclamation-triangle-fill",color:"#ff3b30",active:!1,available:!1,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3-fill",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Support",icon:"bi-question-circle-fill",color:"#30d158",active:!0,available:!0,fixed:!0}];function qe(t){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,s.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function de({title:t,body:s,doneLabel:e="Fermer",onDone:a}={}){var l;const d=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${e}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,n.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const i=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",i),n.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),i()}),n.addEventListener("click",r=>{r.target===n&&i()}),n}const je=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#45b7d1"}];function He(){return Array.from({length:14},(t,s)=>s).map(t=>{const s=new Date;s.setDate(s.getDate()+t);const e=je[Math.floor(Math.random()*je.length)],a=e.label==="Pluie"||e.label==="Averses",d=Math.round(8+Math.random()*8),n=Math.round(16+Math.random()*14),i=Array.from({length:24},(l,r)=>{const o=Math.sin(Math.PI*(r-6)/12),c=Math.round(d+(n-d)*Math.max(0,o)),h=a&&r>=8&&r<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:r,label:`${String(r).padStart(2,"0")}h`,temp:c,pluie:h,hum:Math.round(85-40*Math.max(0,o)),vent:Math.round(10+Math.random()*20),icon:h>0?"bi-cloud-rain-fill":r<7||r>20?"bi-moon-fill":e.icon}});return{dayLabel:t===0?"Aujourd'hui":t===1?"Demain":s.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:s.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...e,pluie:a?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:d,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:n,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:i}})}function dt(t){const s=t.id,e=t.reserveHydrique||50,a=+((s*2.3+7)%32).toFixed(1),d=+((s*1.1+14)%14+10).toFixed(1),n=+((s*.6+1)%6).toFixed(1),i=Math.round(e*((s%5+1)/10)),l=Math.max(0,+(i+a-d-n).toFixed(0)),r=l<i?i-l:0;return{j0:i,j7:l,bilan:r}}const me=8;function De(t,s=!1){if(!t.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const a=(s?t:t.slice(0,me)).map(n=>{const{j0:i,j7:l,bilan:r}=dt(n);return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${n.id}">${n.name}</button>
      <div class="m-bh-td">${i}</div>
      <div class="m-bh-td">${l}</div>
      <div class="m-bh-td">${r>0?`${r} mm`:""}</div>`}).join(""),d=!s&&t.length>me?`<button class="m-bh-expand" id="bh-expand">Afficher les ${t.length-me} autres parcelles <i class="bi bi-chevron-down"></i></button>`:"";return`
    <div class="m-bh-table">
      <div class="m-bh-th"></div>
      <div class="m-bh-th">J0</div>
      <div class="m-bh-th">J+7</div>
      <div class="m-bh-th">🪣</div>
      ${a}
    </div>
    ${d}`}function mt(t,s,e){const a=t.map(o=>{const c=[o.name,o.crop,o.ville].filter(Boolean).join(" · ");return`<option value="p-${o.id}">${c}</option>`}).join(""),d=s.map(o=>`<option value="s-${o.id}">${o.model} — ${o.serial}</option>`).join(""),n=`
    <optgroup label="Parcelles">${a}</optgroup>
    ${d?`<optgroup label="Capteurs">${d}</optgroup>`:""}`,i=(o,c)=>{const h=`${o.dayLabel.charAt(0).toUpperCase()+o.dayLabel.slice(1)} · ${o.dateStr}`;return`
    <div class="m-prev-card" data-day="${c}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${o.icon}" style="color:${o.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${h}</span>
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
    </div>`},l=e.slice(0,3).map(i).join(""),r=e.slice(3).map(i).join("");return`
    <select class="m-prev-select">${n}</select>
    <div class="m-prev-cards">
      ${l}
      <div class="m-prev-extra" style="display:none">${r}</div>
      <button class="m-prev-expand-btn">Voir les ${e.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const G=[{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"dh",label:"Degrés-heures",unit:"Dh",base:800,amp:2e3,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}];function ut(t){if(!t||t.startsWith("s-"))return G;const s=+t.slice(2),e=new Set(H.filter(a=>a.parcelId===s).map(a=>a.model));return G.filter(a=>a.needsModels===null||a.needsModels.some(d=>e.has(d)))}function pt(t,s,e){if(!t||!s)return null;const a=G.find(i=>i.id===e)||G[0],d=Math.max(1,Math.round((Date.now()-new Date(s))/864e5)),n=t.split("").reduce((i,l)=>i+l.charCodeAt(0),0)+d;return+(a.base+n%(a.amp*10)/10).toFixed(1)}const vt=[{metric:"Pluie",icon:"bi-droplet-fill",color:"#45b7d1",subject:"La Petite Lande",value:"87.4",unit:"mm",since:"1 jan 2026",params:""},{metric:"Heures de froid",icon:"bi-thermometer-low",color:"#5ac8fa",subject:"La Croix",value:"312",unit:"h",since:"1 jan 2026",params:"< 7.2°C"}];function ht(t,s){const e=new Date;e.setDate(e.getDate()-7);const a=e.toISOString().split("T")[0],d=t.map(i=>`<option value="p-${i.id}">${i.name}</option>`).join(""),n=s.filter(i=>i.parcelId).map(i=>`<option value="s-${i.id}">${i.serial} (${i.model})</option>`).join("");return`
    <div class="m-list-section-header">Nouveau cumul</div>
    <div class="m-cumuls-form">
      <select class="m-cumuls-select" id="cumuls-subject">
        <option value="">Choisir une parcelle ou un capteur…</option>
        <optgroup label="Parcelles">${d}</optgroup>
        ${n?`<optgroup label="Capteurs">${n}</optgroup>`:""}
      </select>
      <div class="m-cumuls-row2">
        <div class="m-cumuls-field">
          <span class="m-cumuls-label">Depuis le</span>
          <input type="date" class="m-cumuls-date" id="cumuls-from" value="${a}">
        </div>
        <div class="m-cumuls-field">
          <span class="m-cumuls-label">Métrique</span>
          <select class="m-cumuls-select m-cumuls-select--sm" id="cumuls-metric">
            ${G.map(i=>`<option value="${i.id}">${i.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="m-cumuls-result" id="cumuls-result">
        <span class="m-cumuls-val" id="cumuls-val">—</span>
        <span class="m-cumuls-unit" id="cumuls-unit">Sélectionnez un sujet</span>
      </div>
    </div>
    <div class="m-list-section-header" style="margin-top:16px">Cumuls enregistrés</div>
    <div class="m-cumuls-saved">
      ${vt.map(i=>`
        <div class="m-cumuls-saved-card">
          <div class="m-cumuls-saved-row1">
            <span class="m-cumuls-saved-metric"><i class="bi ${i.icon}" style="color:${i.color}"></i> ${i.metric}</span>
            <span class="m-cumuls-saved-val">${i.value} <span class="m-cumuls-saved-unit">${i.unit}</span></span>
          </div>
          <div class="m-cumuls-saved-row2">${i.subject}</div>
          <div class="m-cumuls-saved-row3">depuis le ${i.since}${i.params?" · "+i.params:""}</div>
        </div>`).join("")}
    </div>`}function ft(){const t=j.map(a=>a.orgId).filter((a,d,n)=>n.indexOf(a)===d&&a!==100).length,s=H.length,e=j.length;return`
    <div class="m-reseau-name">${W.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Adhérents</span></div>
      <div class="m-reseau-stat"><strong>${e}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${s}</strong><span>Capteurs</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${W.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${W.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${W.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${W.siege.adresse}, ${W.siege.codePostal} ${W.siege.ville}</span></div>
    </div>`}function bt(){return`
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
    </a>`}const _e=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function gt(){var o;const t=document.getElementById("phone-screen");(o=document.querySelector(".m-sheet-overlay"))==null||o.remove();const s=document.createElement("div");s.className="m-sheet-overlay m-sheet-overlay--tall",s.innerHTML=`
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
    </div>`,t.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const e=s.querySelector("#chat-messages"),a=s.querySelector("#chat-input"),d=s.querySelector("#chat-send"),n=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#chat-close").addEventListener("click",n),s.addEventListener("click",c=>{c.target===s&&n()});function i(c,h){const m=document.createElement("div");m.className=`m-chat-msg m-chat-msg--${h}`,m.innerHTML=`<div class="m-chat-bubble">${c}</div>`,e.appendChild(m),e.scrollTop=e.scrollHeight}function l(){const c=document.createElement("div");return c.className="m-chat-msg m-chat-msg--bot m-chat-typing",c.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',e.appendChild(c),e.scrollTop=e.scrollHeight,c}function r(){const c=a.value.trim();if(!c)return;i(c,"user"),a.value="",d.disabled=!0;const h=l();setTimeout(()=>{h.remove();const m=_e[Math.floor(Math.random()*_e.length)];i(m,"bot"),d.disabled=!1,a.focus()},1200+Math.random()*800)}d.addEventListener("click",r),a.addEventListener("keydown",c=>{c.key==="Enter"&&r()}),setTimeout(()=>a.focus(),350)}function yt(t,s){let e=t.querySelector("#dashboard-content");e||(e=document.createElement("div"),e.id="dashboard-content",t.appendChild(e));const a=ct[s]||1,d=a===100?j:j.filter(L=>L.orgId===a),n=new Set(d.map(L=>L.id)),i=H.filter(L=>n.has(L.parcelId));let l=He();const r=new Set;function o(L,A){const f=L.fixed?"":`<button class="m-widget-menu" data-widget="${L.id}" type="button">•••</button>`,w=r.has(L.id);return`
      <div class="m-widget${w?" m-widget--collapsed":""}" data-widget="${L.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${L.id}">
          <div class="m-widget-icon-wrap" style="background:${L.color}20;color:${L.color}">
            <i class="bi ${L.icon}"></i>
          </div>
          <span class="m-widget-title">${L.title}</span>
          <i class="bi ${w?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${L.fixed?"0":"8px"}"></i>
          ${f}
        </div>
        <div class="m-widget-bd" style="${w?"display:none":""}">${A}</div>
      </div>`}function c(){l=He();const L=D.filter(f=>f.active&&!f.fixed),A=D.filter(f=>f.active&&f.fixed);e.innerHTML=`
      ${[...L,...A].map(f=>{let w="";return f.id==="bilan_hydrique"?w=De(d,!1):f.id==="previsions"?w=mt(d,i,l):f.id==="cumuls"?w=ht(d,i):f.id==="mon_reseau"?w=ft():f.id==="support"&&(w=bt()),o(f,w)}).join("")}
      <div style="height:24px"></div>`,S()}const h='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function m(L,A){const f=L[A],w=`${f.dayLabel.charAt(0).toUpperCase()+f.dayLabel.slice(1)} · ${f.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${h}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 0">
          <button class="m-day-nav" id="prev-day" ${A===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${f.icon}" style="color:${f.color};font-size:22px"></i><span class="m-d-name">${w}</span></div>
          <button class="m-day-nav" id="next-day" ${A>=L.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${f.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${f.tMin} / ${f.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${f.ventMoy}/${f.ventRafales}</strong></div>
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
            ${f.hours.map((y,p)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${p<f.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${y.label}</span>
                <i class="bi ${y.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#45b7d1;width:44px;flex-shrink:0">${y.pluie>0?`${y.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${y.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${y.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${y.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function u(L,A,f){var w,y;L.querySelector(".m-detail-back").addEventListener("click",fe),(w=L.querySelector("#prev-day"))==null||w.addEventListener("click",()=>{L.innerHTML=m(A,f-1),u(L,A,f-1)}),(y=L.querySelector("#next-day"))==null||y.addEventListener("click",()=>{L.innerHTML=m(A,f+1),u(L,A,f+1)})}function $(L,A){const f=he(m(L,A));u(f,L,A)}function S(){var y,p,b,v,x,C;(y=t.querySelector(".m-navbar-action"))==null||y.addEventListener("click",k),e.querySelectorAll(".m-widget-hd--toggle").forEach(g=>{g.addEventListener("click",M=>{if(M.target.closest(".m-widget-menu"))return;const T=g.dataset.collapse;r.has(T)?r.delete(T):r.add(T),c()})}),(p=e.querySelector("#bh-expand"))==null||p.addEventListener("click",()=>{const g=e.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');g&&(g.innerHTML=De(d,!0))}),e.querySelectorAll(".m-bh-plot-link").forEach(g=>{g.addEventListener("click",()=>{const M=j.find(T=>T.id===+g.dataset.plotId);M&&rt(()=>Promise.resolve().then(()=>kt),void 0).then(T=>T.initParcelDetail(M,[]))})});const L=e.querySelector("#cumuls-metric"),A=()=>{var q;if(!L)return;const g=(q=e.querySelector("#cumuls-subject"))==null?void 0:q.value,M=ut(g),T=L.value;L.innerHTML=M.map(I=>`<option value="${I.id}"${I.id===T&&M.find(B=>B.id===T)?" selected":""}>${I.label}</option>`).join("")},f=()=>{var xe,Le,Me;const g=(xe=e.querySelector("#cumuls-subject"))==null?void 0:xe.value,M=(Le=e.querySelector("#cumuls-from"))==null?void 0:Le.value,T=(Me=e.querySelector("#cumuls-metric"))==null?void 0:Me.value,q=e.querySelector("#cumuls-val"),I=e.querySelector("#cumuls-unit");if(!q||!I)return;const B=pt(g,M,T),oe=G.find(Ze=>Ze.id===T);B!==null&&g?(q.textContent=B,I.textContent=(oe==null?void 0:oe.unit)||""):(q.textContent="—",I.textContent="Sélectionnez un sujet")};(b=e.querySelector("#cumuls-subject"))==null||b.addEventListener("change",()=>{A(),f()}),(v=e.querySelector("#cumuls-from"))==null||v.addEventListener("change",f),(x=e.querySelector("#cumuls-metric"))==null||x.addEventListener("change",f),(C=e.querySelector("#open-chat-btn"))==null||C.addEventListener("click",gt),e.querySelectorAll(".m-prev-card").forEach(g=>{g.addEventListener("click",()=>{$(l,+g.dataset.day)})});const w=e.querySelector(".m-prev-expand-btn");w&&w.addEventListener("click",()=>$(l,3)),e.querySelectorAll(".m-widget-menu").forEach(g=>{g.addEventListener("click",M=>{M.stopPropagation();const T=D.find(B=>B.id===g.dataset.widget);if(!T)return;const q=document.createElement("div");q.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="menu-config">Configurer</a>
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const I=de({title:T.title,body:q,doneLabel:"Fermer",onDone:()=>{}});q.querySelector("#menu-config").addEventListener("click",()=>{I.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{I.remove(),qe("Configuration à venir")},280)}),q.querySelector("#menu-move").addEventListener("click",()=>{I.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{I.remove(),E()},280)}),q.querySelector("#menu-remove").addEventListener("click",()=>{T.active=!1,I.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{I.remove(),c()},280),qe("Widget retiré")})})})}function E(){const L=document.createElement("div"),A=()=>D.filter(w=>w.active&&!w.fixed),f=()=>{const w=A();L.innerHTML=w.map((y,p)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${y.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${p}" data-dir="-1" ${p===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${p}" data-dir="1" ${p===w.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),L.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(y=>{y.addEventListener("click",()=>{const p=A(),b=+y.dataset.i,v=b+ +y.dataset.dir,x=D.indexOf(p[b]),C=D.indexOf(p[v]);[D[x],D[C]]=[D[C],D[x]],f(),c()})})};f(),de({title:"Réorganiser les widgets",body:L,doneLabel:"Fermer",onDone:()=>{}})}function k(){const L=document.createElement("div"),A=()=>{const f=D.filter(w=>!w.fixed);L.innerHTML=f.map(w=>`
        <div class="m-catalog-row${w.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${w.color}20;color:${w.color}"><i class="bi ${w.icon}"></i></div>
          <span class="m-catalog-title">${w.title}</span>
          ${w.available?`<button class="m-catalog-toggle${w.active?" m-catalog-toggle--on":""}" data-cid="${w.id}" type="button">
                <i class="bi ${w.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),L.querySelectorAll("[data-cid]").forEach(w=>{w.addEventListener("click",()=>{const y=D.find(p=>p.id===w.dataset.cid);y&&(y.active=!y.active,A(),c())})})};A(),de({title:"Widgets disponibles",body:L,doneLabel:"Fermer",onDone:()=>{}})}c()}const ie={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#c090e0",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#80c8e8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1},humectation:{label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}},Be={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function be(t,s){const e={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[t]||{base:50,amp:20,min:0,max:100};return Array.from({length:s},(a,d)=>{const n=d/s*Math.PI*4;if(e.sparse&&Math.random()>.25)return 0;const i=e.base+e.amp*Math.sin(n-1)+(Math.random()-.5)*e.amp*.5;return Math.max(e.min,Math.min(e.max,i))})}const ge={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},ye={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function $t(t,s,e,a,d,n=20){const i=ye[t]||10080,l=new Date,r=m=>t==="1d"||t==="hier"?`${String(m.getHours()).padStart(2,"0")}h`:t==="365d"?m.toLocaleDateString("fr-FR",{month:"short"}):`${String(m.getDate()).padStart(2,"0")}/${String(m.getMonth()+1).padStart(2,"0")}`,o=4,c=s-e-a,h=d-n;return Array.from({length:o+1},(m,u)=>{const $=u/o,S=new Date(l.getTime()-(1-$)*i*6e4),E=(e+$*c).toFixed(1),k=u===0?"start":u===o?"end":"middle";return[`<line x1="${E}" y1="${h}" x2="${E}" y2="${h+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${E}" y="${d-3}" text-anchor="${k}" font-size="9" fill="#8e8e93" font-family="-apple-system">${r(S)}</text>`].join("")}).join("")}function wt(t,s,e,a="7d"){const d=ge[a]||60,n=be(t,d),i=320,l=100,r=34,o=6,c=10,h=20,m=i-r-o,u=l-c-h,$=e?0:Math.min(...n),S=Math.max(...n,$+.001),E=S-$,k=g=>r+g/(n.length-1)*m,L=g=>c+u-(g-$)/E*u,A=`g${Math.random().toString(36).slice(2,8)}`,f=[0,.5,1].map(g=>{const M=$+g*E,T=c+u-g*u;return`<text x="${r-3}" y="${(T+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${M<10?M.toFixed(1):Math.round(M)}</text>`}).join(""),w=[.25,.5,.75].map(g=>{const M=(c+u-g*u).toFixed(1);return`<line x1="${r}" y1="${M}" x2="${i-o}" y2="${M}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),y=`<line x1="${r}" y1="${c+u}" x2="${i-o}" y2="${c+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,p=$t(a,i,r,o,l);if(e){const g=m/n.length*.7,M=n.map((T,q)=>{const I=(T-$)/E*u,B=c+u-I;return`<rect x="${(k(q)-g/2).toFixed(1)}" y="${B.toFixed(1)}" width="${g.toFixed(1)}" height="${I.toFixed(1)}" fill="${s}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${i} ${l}" width="100%" height="${l}" preserveAspectRatio="none">${f}${w}${y}${p}${M}</svg>`}const v=n.map((g,M)=>[k(M),L(g)]).map(([g,M],T)=>`${T?"L":"M"}${g.toFixed(1)},${M.toFixed(1)}`).join(" "),x=`${v} L${k(n.length-1).toFixed(1)},${(c+u).toFixed(1)} L${r},${(c+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:n.map(g=>+g.toFixed(2)),minV:+$.toFixed(2),maxV:+S.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${i} ${l}" width="100%" height="${l}" preserveAspectRatio="none">
      <defs><linearGradient id="${A}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${f}${w}${y}
      <path d="${x}" fill="url(#${A})"/>
      <path d="${v}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${p}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Ct(t,s,e){if(!e)return"";const a=ge[s]||60,n=(ye[s]||10080)/(a*60),i=be(t,a);let l=[];if(e==="temp"){const r=i.reduce((c,h)=>c+Math.max(0,h),0)*(n/24),o=i.filter(c=>c<7).length*n;l=[{label:"Degrés jours",val:`${Math.round(r)} DJ`},{label:"Heures de froid",val:`${Math.round(o)} h`}]}else if(e==="pluie")l=[{label:"Cumul pluie",val:`${i.reduce((o,c)=>o+c,0).toFixed(1)} mm`}];else if(e==="rayo"){const r=i.filter(o=>o>120).length*n;l=[{label:"Ensoleillement",val:`${Math.round(r)} h`}]}else if(e==="etp")l=[{label:"ETP cumulée",val:`${(i.reduce((o,c)=>o+c,0)*(n/24)).toFixed(1)} mm`}];else if(e==="hws"){const r=i.filter(o=>o>50).length*n;l=[{label:"Heures d'humectation",val:`${Math.round(r)} h`}]}return l.length?`<div class="m-chart-cumuls">${l.map(r=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${r.label}</span>
      <span class="m-chart-cumul-val">${r.val}</span>
    </div>`).join("")}</div>`:""}function xt(t,s){const e=ie[t];return e?`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${e.color}">${e.label}</span>
      </div>
      ${wt(t,e.color,e.cumul,s)}
      ${Ct(t,s,e.cumulsType)}
    </div>`:""}function Lt(t){const s=JSON.parse(decodeURIComponent(t.dataset.chart||"{}"));if(!s.vals)return;const{vals:e,minV:a,maxV:d}=s,n=t.querySelector(".m-chart-tip"),i=t.querySelector(".m-chart-crosshair"),l=t.dataset.color||"#0172A4";function r(c){const h=t.getBoundingClientRect(),m=Math.max(0,Math.min(1,(c-h.left)/h.width)),u=Math.round(m*(e.length-1)),$=e[u],S=m*100;i.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${S}%;width:1px;background:${l};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(S,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=$<10?$.toFixed(1):String(Math.round($))}function o(){i.style.display="none",n.style.display="none"}t.addEventListener("pointermove",c=>{c.preventDefault(),r(c.clientX)}),t.addEventListener("pointerdown",c=>r(c.clientX)),t.addEventListener("pointerup",o),t.addEventListener("pointerleave",o),t.style.cursor="crosshair"}function Mt(){return`
    <div class="m-detail-section">
      ${["Bilan hydrique","Stades phénologiques","Alertes actives","Données temps-réel"].map(s=>`
        <div class="m-placeholder-widget">
          <span class="m-placeholder-widget-name">${s}</span>
          <button class="m-widget-menu" type="button">•••</button>
        </div>`).join("")}
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
    </div>`}function St(t,s){const e=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:s});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function Et(t,s,e){const a=new Set;s.forEach(u=>{const $=H.find(S=>S.id===u);$&&(Be[$.model]||[]).forEach(S=>a.add(S))});const d=[...new Set(["etp","rayonnement","temp_rosee",...a])].filter(u=>ie[u]),n=ge[e]||60,i=ye[e]||10080,l=i/n*6e4,r=new Date,o=new Date(r-i*6e4),c=["Horodatage",...d.map(u=>`${ie[u].label} (${ie[u].unit})`)].join(";"),h=Array.from({length:n},(u,$)=>[new Date(o.getTime()+$*l).toISOString().replace("T"," ").slice(0,19),...d.map(E=>be(E,1)[0].toFixed(2))].join(";")),m=(t.name||"parcelle").replace(/[^\w]/g,"_");St([c,...h].join(`\r
`),`${m}_${e}_${new Date().toISOString().slice(0,10)}.csv`)}function At(t,s="7d",e="1h"){const a=new Set;t.forEach(n=>{const i=H.find(l=>l.id===n);i&&(Be[i.model]||[]).forEach(l=>a.add(l))});const d=[...new Set(["etp","rayonnement","temp_rosee",...a])];return`
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
        <option value="1h"${e==="1h"?" selected":""}>Horaire</option>
        <option value="1d"${e==="1d"?" selected":""}>Journalier</option>
        <option value="1w"${e==="1w"?" selected":""}>Hebdo</option>
      </select>
      <button class="m-export-btn" title="Exporter CSV"><i class="bi bi-download"></i></button>
    </div>
    <div class="m-detail-section">
      ${d.map(n=>xt(n,s)).join("")}
    </div>`}function Tt(t,s,e){const a=e.map(d=>{const n=H.find(i=>i.id===d);return n?`${n.model} — ${n.serial}`:null}).filter(Boolean);return`
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
          <span class="m-list-row-value">${(s==null?void 0:s.name)||"—"}</span>
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
          <span class="m-list-row-value">${(s==null?void 0:s.ville)||"—"}</span>
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
        ${a.length?a.map((d,n)=>`<div class="m-list-row${n===a.length-1?" m-list-row--last":""}">
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
    </div>`}function ve(t,s=[]){const e=R.find(m=>m.id===t.orgId);let a="widgets",d="7d",n="1h",i=!1;const l=(e==null?void 0:e.ville)||"",r=he(`
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
    <div id="detail-content" class="m-detail-content"></div>`);function o(){const m=r.querySelector("#detail-content");a==="widgets"&&(m.innerHTML=Mt()),a==="donnees"&&(m.innerHTML=At(s,d,n)),a==="params"&&(m.innerHTML=Tt(t,e,s),c()),h()}function c(){const m=window.L;m&&setTimeout(()=>{var S;const u=r.querySelector("#parcel-minimap");if(!u)return;const $=m.map(u,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(m.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo($),((S=t.latlngs)==null?void 0:S.length)>=3){const E=m.polygon(t.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo($);$.fitBounds(E.getBounds(),{padding:[8,8]})}else $.setView([t.lat,t.lng],14),m.circleMarker([t.lat,t.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo($)},50)}function h(){var m,u,$,S;(m=r.querySelector(".m-period-sel"))==null||m.addEventListener("change",E=>{d=E.target.value,o()}),(u=r.querySelector(".m-step-sel"))==null||u.addEventListener("change",E=>{n=E.target.value,o()}),($=r.querySelector(".m-export-btn"))==null||$.addEventListener("click",()=>Et(t,s,d)),r.querySelectorAll(".m-chart-svg-wrap").forEach(E=>Lt(E)),r.querySelectorAll(".m-list-row[data-action]").forEach(E=>{E.addEventListener("click",()=>P("Fonctionnalité à venir"))}),r.querySelectorAll(".m-widget-menu").forEach(E=>{E.addEventListener("click",k=>{k.stopPropagation(),P("Options widget")})}),(S=r.querySelector(".m-add-widget-btn"))==null||S.addEventListener("click",()=>P("Catalogue de widgets — à venir"))}r.querySelectorAll(".m-detail-tab").forEach(m=>{m.addEventListener("click",()=>{r.querySelectorAll(".m-detail-tab").forEach(u=>u.classList.remove("active")),m.classList.add("active"),a=m.dataset.view,o()})}),r.querySelector(".m-detail-back").addEventListener("click",fe),r.querySelector("#d-star").addEventListener("click",()=>{i=!i;const m=r.querySelector("#d-star");m.querySelector("i").className=i?"bi bi-star-fill":"bi bi-star",m.style.color=i?"#f5c842":"",P(i?"Ajouté aux favoris":"Retiré des favoris")}),r.querySelector("#d-plus").addEventListener("click",()=>{const m=`
      <a class="m-sheet-link" data-a="widget"><i class="bi bi-grid-1x2"></i> Widget</a>
      <a class="m-sheet-link" data-a="irrigation"><i class="bi bi-droplet"></i> Irrigation</a>
      <a class="m-sheet-link" data-a="strategie-irrigation"><i class="bi bi-arrow-repeat"></i> Stratégie d'irrigation</a>
      <a class="m-sheet-link" data-a="capteur"><i class="bi bi-broadcast"></i> Capteur</a>
      <a class="m-sheet-link" data-a="alerte"><i class="bi bi-bell"></i> Alerte</a>
      <a class="m-sheet-link" data-a="integration" style="color:#8e8e93">
        <i class="bi bi-plug"></i> Intégration <span style="font-size:11px">(version web uniquement)</span>
      </a>
      <a class="m-sheet-link" data-a="note"><i class="bi bi-pencil"></i> Note</a>`,u=document.createElement("div");u.innerHTML=m;const $=_({title:"Ajouter à la parcelle",body:u,doneLabel:"Fermer",onDone:()=>{}});u.querySelectorAll("[data-a]").forEach(S=>{S.addEventListener("click",()=>{const E=S.dataset.a;$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{$.remove(),P(E==="integration"?"Disponible sur la version web":"Fonctionnalité à venir")},280)})})}),o()}const kt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:ve},Symbol.toStringTag,{value:"Module"})),J=100,It={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function Y(t,s){const e=It[s];return e?H.some(a=>a.parcelId===t.id&&e.includes(a.model)):!0}const ee=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température air",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Pt(t){switch(t){case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function qt(t,s){let e=t.querySelector("#parcelles-content");e||(e=document.createElement("div"),e.id="parcelles-content",t.appendChild(e));const a=s==="admin",d=R.filter(f=>f.id!==J),n=Object.fromEntries(R.map(f=>[f.id,f]));let i=null,l=null;const r={};let o="carte",c="pluie",h="7 derniers jours",m="all";function u(f){const w=`${f}-${c}-${h}`;return w in r||(r[w]=Pt(c)),r[w]}function $(f){var w;return((w=n[f.orgId])==null?void 0:w.ville)||null}function S(){return a?m==="all"?j:m===String(J)?j.filter(f=>f.orgId===J):j.filter(f=>String(f.orgId)===m):j.filter(f=>f.orgId===1)}function E(){if(i){try{i.remove()}catch{}i=null,l=null}}function k(){E();const f=ee.find(v=>v.id===c)||ee[0],w=S(),y=a?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${J}"${m===String(J)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${d.map(v=>`<option value="${v.id}"${m===String(v.id)?" selected":""}>${v.name}</option>`).join("")}
      </select>`:"",p=[...w].sort((v,x)=>{const C=Y(v,c),g=Y(x,c);return C&&!g?-1:!C&&g?1:C?u(x.id)-u(v.id):0}),b=p.length?`<div class="m-plain-list">${p.map(v=>{const x=$(v),C=Y(v,c);return`
            <div class="m-plain-row m-tappable" data-plot-id="${v.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${v.name}</span>
                ${x?`<span class="m-plain-city">${x}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${C?"":" m-plain-na"}">${C?`${u(v.id)} ${f.unit}`:"—"}</span>
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';e.innerHTML=`
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
            ${ee.map(v=>`<option value="${v.id}"${v.id===c?" selected":""}>${v.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${f.aggs.map(v=>`<option${v===h?" selected":""}>${v}</option>`).join("")}
          </select>
        </div>
        ${y}
      </div>
      ${o==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${b}</div>`}`,A(),o==="carte"&&L(w,f)}function L(f,w){const y=window.L;y&&setTimeout(()=>{const p=e.querySelector("#parcel-map");if(!p)return;i=y.map(p,{zoomControl:!1,attributionControl:!1}),y.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(i);const b=[];f.forEach(v=>{const x=Y(v,c)?`${u(v.id)} ${w.unit}`:"—",C=H.filter(I=>I.parcelId===v.id).map(I=>I.id),g=()=>ve(v,C),M=[v.lat,v.lng];v.latlngs&&v.latlngs.length>=3?(y.polygon(v.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(i).on("click",g),b.push(...v.latlngs)):b.push(M);const T=Y(v,c),q=y.circleMarker(M,{radius:T?8:6,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:T?.95:.4}).addTo(i);T&&q.bindTooltip(x,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),q.on("click",g)}),b.length&&(l=b,i.fitBounds(b,{padding:[32,32]})),i.invalidateSize()},0)}window.addEventListener("m-tab-change",f=>{f.detail==="parcelles"&&o==="carte"&&i&&setTimeout(()=>{i.invalidateSize(),l!=null&&l.length&&i.fitBounds(l,{padding:[32,32]})},50)});function A(){var f,w,y;e.querySelectorAll(".m-view-btn").forEach(p=>p.addEventListener("click",()=>{o=p.dataset.view,k()})),(f=e.querySelector("#metric-sel"))==null||f.addEventListener("change",p=>{var b;c=p.target.value,h=((b=ee.find(v=>v.id===c))==null?void 0:b.defaultAgg)||"",k()}),(w=e.querySelector("#agg-sel"))==null||w.addEventListener("change",p=>{h=p.target.value,k()}),(y=e.querySelector("#org-filter"))==null||y.addEventListener("change",p=>{m=p.target.value,k()}),e.querySelectorAll(".m-tappable[data-plot-id]").forEach(p=>{p.addEventListener("click",()=>{const b=j.find(x=>x.id===+p.dataset.plotId);if(!b)return;const v=H.filter(x=>x.parcelId===b.id).map(x=>x.id);ve(b,v)})})}k()}const Ve={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},jt={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"},We={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#e07050",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#80c8e8",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}]};function $e(t,s){const e={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[t]||{base:50,amp:20,min:0};return Array.from({length:s},(a,d)=>{const n=d/s*Math.PI*4;if(e.sparse&&Math.random()>.25)return 0;const i=e.base+e.amp*Math.sin(n-1)+(Math.random()-.5)*e.amp*.5;return Math.max(e.min??0,Math.min(e.max??9999,i))})}const we={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Ht(t,s,e,a,d,n=20){const i=we[t]||10080,l=new Date,r=m=>t==="1d"||t==="hier"?`${String(m.getHours()).padStart(2,"0")}h`:t==="365d"?m.toLocaleDateString("fr-FR",{month:"short"}):`${String(m.getDate()).padStart(2,"0")}/${String(m.getMonth()+1).padStart(2,"0")}`,o=4,c=s-e-a,h=d-n;return Array.from({length:o+1},(m,u)=>{const $=u/o,S=new Date(l.getTime()-(1-$)*i*6e4),E=(e+$*c).toFixed(1),k=u===0?"start":u===o?"end":"middle";return[`<line x1="${E}" y1="${h}" x2="${E}" y2="${h+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${E}" y="${d-3}" text-anchor="${k}" font-size="9" fill="#8e8e93" font-family="-apple-system">${r(S)}</text>`].join("")}).join("")}function Dt(t,s,e,a="7d"){const d=Ce[a]||60,n=$e(t,d),i=320,l=100,r=34,o=6,c=10,h=20,m=i-r-o,u=l-c-h,$=e?0:Math.min(...n),S=Math.max(...n,$+.001),E=S-$,k=g=>r+g/(n.length-1)*m,L=g=>c+u-(g-$)/E*u,A=`g${Math.random().toString(36).slice(2,8)}`,f=[0,.5,1].map(g=>{const M=$+g*E,T=c+u-g*u;return`<text x="${r-3}" y="${(T+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${M<10?M.toFixed(1):Math.round(M)}</text>`}).join(""),w=[.25,.5,.75].map(g=>`<line x1="${r}" y1="${(c+u-g*u).toFixed(1)}" x2="${i-o}" y2="${(c+u-g*u).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),y=`<line x1="${r}" y1="${c+u}" x2="${i-o}" y2="${c+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,p=Ht(a,i,r,o,l);if(e){const g=m/n.length*.7;return`<svg viewBox="0 0 ${i} ${l}" width="100%" height="${l}" preserveAspectRatio="none">
      ${f}${w}${y}
      ${n.map((M,T)=>{const q=(M-$)/E*u,I=c+u-q;return`<rect x="${(k(T)-g/2).toFixed(1)}" y="${I.toFixed(1)}" width="${g.toFixed(1)}" height="${q.toFixed(1)}" fill="${s}" opacity=".75" rx="1"/>`}).join("")}
      ${p}
    </svg>`}const v=n.map((g,M)=>[k(M),L(g)]).map(([g,M],T)=>`${T?"L":"M"}${g.toFixed(1)},${M.toFixed(1)}`).join(" "),x=`${v} L${k(n.length-1).toFixed(1)},${(c+u).toFixed(1)} L${r},${(c+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:n.map(g=>+g.toFixed(2)),minV:+$.toFixed(2),maxV:+S.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${i} ${l}" width="100%" height="${l}" preserveAspectRatio="none">
      <defs><linearGradient id="${A}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${f}${w}${y}
      <path d="${x}" fill="url(#${A})"/>
      <path d="${v}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${p}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function _t(t){const s=JSON.parse(decodeURIComponent(t.dataset.chart||"{}"));if(!s.vals)return;const{vals:e}=s,a=t.querySelector(".m-chart-tip"),d=t.querySelector(".m-chart-crosshair"),n=t.dataset.color||"#0172A4";function i(r){const o=t.getBoundingClientRect(),c=Math.max(0,Math.min(1,(r-o.left)/o.width)),h=Math.round(c*(e.length-1)),m=e[h],u=c*100;d.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${u}%;width:1px;background:${n};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(u,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=m<10?m.toFixed(1):String(Math.round(m))}function l(){d.style.display="none",a.style.display="none"}t.addEventListener("pointermove",r=>{r.preventDefault(),i(r.clientX)}),t.addEventListener("pointerdown",r=>i(r.clientX)),t.addEventListener("pointerup",l),t.addEventListener("pointerleave",l),t.style.cursor="crosshair"}const Ce={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function Rt(t,s,e){if(!e)return"";const a=Ce[s]||60,n=(we[s]||10080)/(a*60),i=$e(t,a);let l=[];if(e==="temp"){const r=i.reduce((c,h)=>c+Math.max(0,h),0)*(n/24),o=i.filter(c=>c<7).length*n;l=[{label:"Degrés jours",val:`${Math.round(r)} DJ`},{label:"Heures de froid",val:`${Math.round(o)} h`}]}else if(e==="pluie")l=[{label:"Cumul pluie",val:`${i.reduce((o,c)=>o+c,0).toFixed(1)} mm`}];else if(e==="rayo"){const r=i.filter(o=>o>120).length*n;l=[{label:"Ensoleillement",val:`${Math.round(r)} h`}]}else if(e==="hws"){const r=i.filter(o=>o>50).length*n;l=[{label:"Heures d'humectation",val:`${Math.round(r)} h`}]}return l.length?`<div class="m-chart-cumuls">${l.map(r=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${r.label}</span>
      <span class="m-chart-cumul-val">${r.val}</span>
    </div>`).join("")}</div>`:""}function Ft(t,s){const e=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:s});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function Ot(t,s){const e=We[t.model]||[];if(!e.length)return;const a=Ce[s]||60,d=we[s]||10080,n=d/a*6e4,i=new Date,l=new Date(i-d*6e4),r=["Horodatage",...e.map(c=>`${c.label} (${c.unit})`)].join(";"),o=Array.from({length:a},(c,h)=>[new Date(l.getTime()+h*n).toISOString().replace("T"," ").slice(0,19),...e.map(u=>$e(u.id,1)[0].toFixed(2))].join(";"));Ft([r,...o].join(`\r
`),`${t.serial}_${s}_${new Date().toISOString().slice(0,10)}.csv`)}function Nt(t,s="7d",e="1h"){const a=We[t.model]||[];if(!a.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const d=a.map(n=>`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${n.color}">${n.label}</span>
        </div>
        ${Dt(n.id,n.color,n.cumul,s)}
        ${Rt(n.id,s,n.cumulsType)}
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
        <option value="1h"${e==="1h"?" selected":""}>Horaire</option>
        <option value="1d"${e==="1d"?" selected":""}>Journalier</option>
        <option value="1w"${e==="1w"?" selected":""}>Hebdo</option>
      </select>
      <button class="m-export-btn" title="Exporter CSV"><i class="bi bi-download"></i></button>
    </div>
    <div class="m-detail-section">${d}</div>`}function zt(t){const s=t.parcelId?j.find(i=>i.id===t.parcelId):null,e=s?R.find(i=>i.id===s.orgId):null,a=t.networkQuality||0,d=a>70?"#30d158":a>40?"#ff9f0a":"#ff3b30",n=t.event?[t.event]:[];return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${jt[t.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${t.model} — ${Ve[t.model]||t.model}</span>
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
        ${s?'<div id="sensor-minimap" class="m-minimap-container"></div>':""}
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${(e==null?void 0:e.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${(s==null?void 0:s.lat)||0},${(s==null?void 0:s.lng)||0}?q=${(s==null?void 0:s.lat)||0},${(s==null?void 0:s.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">État</div>
      <div class="m-list">
        ${n.length?n.map(i=>`<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${i}</span></div>`).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${d};font-weight:600">${a}%</span>
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
          <span class="m-list-row-value">${t.lastMessage?new Date(t.lastMessage).toLocaleDateString("fr-FR"):"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last" data-action="delete" style="color:#ff3b30">
          <i class="bi bi-trash" style="color:#ff3b30;font-size:15px"></i>
          <span class="m-list-row-label" style="color:#ff3b30">Supprimer de l'exploitation</span>
        </div>
      </div>
      <div style="height:24px"></div>
    </div>`}function Re(t){var h;const s=t.parcelId?j.find(m=>m.id===t.parcelId):null;let e="donnees",a="7d",d="1h",n=!1;const i=s&&((h=R.find(m=>m.id===s.orgId))==null?void 0:h.ville)||"",l=he(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${t.serial}</div>
          <div class="m-detail-subtitle">${[Ve[t.model]||t.model,i].filter(Boolean).join(" · ")}</div>
        </div>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function r(){const m=l.querySelector("#detail-content");e==="donnees"&&(m.innerHTML=Nt(t,a,d)),e==="params"&&(m.innerHTML=zt(t),o()),c()}function o(){const m=window.L;!m||!s||setTimeout(()=>{const u=l.querySelector("#sensor-minimap");if(!u)return;const $=m.map(u,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});m.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo($),$.setView([s.lat,s.lng],15),m.circleMarker([s.lat,s.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo($)},50)}function c(){var m,u,$;(m=l.querySelector(".m-period-sel"))==null||m.addEventListener("change",S=>{a=S.target.value,r()}),(u=l.querySelector(".m-step-sel"))==null||u.addEventListener("change",S=>{d=S.target.value,r()}),($=l.querySelector(".m-export-btn"))==null||$.addEventListener("click",()=>Ot(t,a)),l.querySelectorAll(".m-chart-svg-wrap").forEach(S=>_t(S)),l.querySelectorAll(".m-list-row[data-action]").forEach(S=>{S.addEventListener("click",()=>P("Fonctionnalité à venir"))})}l.querySelectorAll(".m-detail-tab").forEach(m=>{m.addEventListener("click",()=>{l.querySelectorAll(".m-detail-tab").forEach(u=>u.classList.remove("active")),m.classList.add("active"),e=m.dataset.view,r()})}),l.querySelector(".m-detail-back").addEventListener("click",fe),l.querySelector("#d-star").addEventListener("click",()=>{n=!n;const m=l.querySelector("#d-star");m.querySelector("i").className=n?"bi bi-star-fill":"bi bi-star",m.style.color=n?"#f5c842":"",P(n?"Ajouté aux favoris":"Retiré des favoris")}),l.querySelector("#d-plus").addEventListener("click",()=>{const m=`
      <button class="m-sheet-option" data-a="plot"><i class="bi bi-map"></i> Parcelle</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" data-a="maintenance"><i class="bi bi-tools"></i> Opération de maintenance</button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`,u=document.createElement("div");u.innerHTML=m;const $=_({title:"Ajouter au capteur",body:u,doneLabel:"Fermer",onDone:()=>{}});u.querySelectorAll("[data-a]").forEach(S=>{S.addEventListener("click",()=>{$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{$.remove(),P("Fonctionnalité à venir")},280)})})}),r()}const Z=100,Fe=1,ue=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Bt={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},Vt={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function te(t,s){return(Vt[t]||[]).includes(s)}function Wt(t){return Bt[t]||t}const se=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Gt(t){switch(t){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Ut(t,s){let e=t.querySelector("#capteurs-content");e||(e=document.createElement("div"),e.id="capteurs-content",t.appendChild(e));const a=s==="admin",d=R.filter(y=>y.id!==Z),n=Object.fromEntries(j.map(y=>[y.id,y])),i=Object.fromEntries(R.map(y=>[y.id,y]));let l=null,r=null;const o={};let c="carte",h="pluie",m="7 derniers jours",u="all";function $(y){const p=`${y}-${h}-${m}`;return p in o||(o[p]=Gt(h)),o[p]}function S(){if(a){if(u==="all")return H;if(u===String(Z)){const x=new Set(j.filter(C=>C.orgId===Z).map(C=>C.id));return H.filter(C=>x.has(C.parcelId))}const v=new Set(j.filter(x=>String(x.orgId)===u).map(x=>x.id));return H.filter(x=>v.has(x.parcelId))}const y=new Set(j.filter(v=>v.orgId===Fe).map(v=>v.id)),p=H.filter(v=>y.has(v.parcelId)),b=H.filter(v=>!y.has(v.parcelId)&&ue.includes(v.model));return u==="mine"?p:u==="network"?b:[...p,...b]}function E(y){const p=y.parcelId?n[y.parcelId]:null;if(!p)return null;const b=(y.id*7919%1e3-500)/1e6,v=(y.id*6271%1e3-500)/1e6;return{lat:p.lat+b,lng:p.lng+v,name:p.name}}function k(y){var b;const p=y.parcelId?n[y.parcelId]:null;return p&&((b=i[p.orgId])==null?void 0:b.ville)||null}function L(){if(l){try{l.remove()}catch{}l=null,r=null}}function A(){L();const y=se.find(C=>C.id===h)||se[0],p=S();let b;if(a)b=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${Z}"${u===String(Z)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${d.map(C=>`<option value="${C.id}"${u===String(C.id)?" selected":""}>${C.name}</option>`).join("")}
        </select>`;else{const C=R.find(M=>M.id===Fe),g=R.find(M=>M.id===Z);b=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${u==="all"?" selected":""}>Tout le réseau</option>
          <option value="mine"${u==="mine"?" selected":""}>${(C==null?void 0:C.name)||"Mon organisation"}</option>
          <option value="network"${u==="network"?" selected":""}>${(g==null?void 0:g.name)||"Breiz'Agri Conseil"}</option>
        </select>`}const v=[...p].sort((C,g)=>{const M=te(C.model,h),T=te(g.model,h);return M&&!T?-1:!M&&T?1:M?$(g.id)-$(C.id):0}),x=v.length?`<div class="m-plain-list">${v.map(C=>{const g=ue.includes(C.model),T=te(C.model,h)?`<span class="m-sensor-val">${$(C.id)} ${y.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${C.id}">
              <div class="m-sensor-icon" style="background:${g?"#0172A420":"#5b8dd920"};color:${g?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${Wt(C.model)}</span>
                <span class="m-sensor-sub">${C.serial}${k(C)?` · ${k(C)}`:""}</span>
              </div>
              ${T}
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
            ${se.map(C=>`<option value="${C.id}"${C.id===h?" selected":""}>${C.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${y.aggs.map(C=>`<option${C===m?" selected":""}>${C}</option>`).join("")}
          </select>
        </div>
        ${b}
      </div>
      ${c==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${x}</div>`}`,w(),c==="carte"&&f(p,y)}function f(y,p){const b=window.L;b&&setTimeout(()=>{const v=e.querySelector("#sensor-map");if(!v)return;l=b.map(v,{zoomControl:!1,attributionControl:!1}),b.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l);const x=[];y.forEach(C=>{const g=E(C);if(!g)return;const M=te(C.model,h),T=ue.includes(C.model),q=b.circleMarker([g.lat,g.lng],{radius:M?10:7,color:"#fff",weight:2,fillColor:T?"#0172A4":"#5b8dd9",fillOpacity:M?.95:.45}).addTo(l);M&&q.bindTooltip(`${$(C.id)} ${p.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),q.on("click",()=>Re(C)),x.push([g.lat,g.lng])}),x.length&&(r=x,l.fitBounds(x,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",y=>{y.detail==="capteurs"&&c==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),r!=null&&r.length&&l.fitBounds(r,{padding:[32,32]})},50)});function w(){var y,p,b;e.querySelectorAll(".m-view-btn").forEach(v=>v.addEventListener("click",()=>{c=v.dataset.view,A()})),(y=e.querySelector("#metric-sel"))==null||y.addEventListener("change",v=>{var x;h=v.target.value,m=((x=se.find(C=>C.id===h))==null?void 0:x.defaultAgg)||"",A()}),(p=e.querySelector("#agg-sel"))==null||p.addEventListener("change",v=>{m=v.target.value,A()}),(b=e.querySelector("#org-filter"))==null||b.addEventListener("change",v=>{u=v.target.value,A()}),e.querySelectorAll(".m-tappable[data-sensor-id]").forEach(v=>{v.addEventListener("click",()=>{const x=H.find(C=>C.id===+v.dataset.sensorId);x&&Re(x)})})}A()}const pe=100,Oe=1,Zt=["Arboriculture","Viticulture","Maraîchage","Grandes cultures","Polyculture-Élevage","Pépiniériste","Floriculture","Trufficulture","Organismes publics / semi-publics","Coopérative","Négoce","Concessionnaire","Semencier","Laboratoire / Institut / Recherche","Autre"],Jt=["Essentiel","Plus","Expert"],Yt=["Administrateur","Agent","Lecteur"];function Xt(t){const s=(t||"").match(/(\d{5})/);if(s){const e=t.indexOf(s[0]);return{rue:t.slice(0,e).trim().replace(/,\s*$/,""),cp:s[0],ville:t.slice(e+5).trim().replace(/^,?\s*/,"")}}return{rue:t||"",cp:"",ville:""}}function Ne({rue:t,cp:s,ville:e}){return[t,s&&e?`${s} ${e}`:s||e].filter(Boolean).join(", ")}function Kt(t){const[s,e,a]=t.split("-");return`${a}/${e}/${s}`}function Qt(t,s){if(!t)return{};const e=s==="admin",a=R.find(p=>p.id===(e?pe:Oe));if(!a)return{};const n=(e?re.filter(p=>{var b;return!((b=p.orgIds)!=null&&b.length)||p.orgIds.includes(pe)}):re.filter(p=>{var b;return(b=p.orgIds)==null?void 0:b.includes(Oe)})).map(p=>({...p})),i=R.filter(p=>p.id!==pe&&p.statut!=="inactif").length,l=Xt(a.adresse||""),r={rue:"",cp:"",ville:""},o={name:a.name,metiers:[e?"Coopérative":"Grandes cultures"],adresseFactu:l,adresseLivrai:r,markerLat:a.lat||48.117,markerLng:a.lng||-1.678,plan:a.plan||"Plus",contrat:{numero:e?"CTR-NET-2022-00001":a.codeAdherent||"CTR-2022-00418",dateAdhesion:a.dateAdhesion||"2022-03-15",licencesMembres:e?re.length:3,licencesAdherents:e?i:null,licencesIntegrations:e?27:2}};let c=null,h=null,m=null;function u(){if(!m)return;const p=t.querySelector(`#${m}`);if(!p)return;if(c){try{c.remove()}catch{}c=null,h=null}const b=window.L;b&&(c=b.map(p,{zoomControl:!0,attributionControl:!1}),b.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(c),c.setView([o.markerLat,o.markerLng],14),h=b.marker([o.markerLat,o.markerLng],{draggable:!0}).addTo(c),h.on("dragend",()=>{const v=h.getLatLng();o.markerLat=v.lat,o.markerLng=v.lng,P("Position mise à jour")}),setTimeout(()=>c==null?void 0:c.invalidateSize(),50))}function $(){if(m=`expl-map-${Math.random().toString(36).slice(2,8)}`,c){try{c.remove()}catch{}c=null,h=null}const p=Ne(o.adresseFactu)||"—",b=Ne(o.adresseLivrai);t.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Exploitation</div>
      <div class="m-list">
        <div class="m-list-row" data-action="name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${o.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="metier">
          <span class="m-list-row-label">Métier</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px">${o.metiers.length?o.metiers.join(", "):"—"}</span>
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
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${b||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation <span style="font-size:11px;font-weight:400;color:#8e8e93">— déplacer le marqueur pour modifier</span></div>
      <div id="${m}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${o.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Kt(o.contrat.dateAdhesion)}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Licences membres</span>
          <span class="m-list-row-value">${o.contrat.licencesMembres}</span>
        </div>
        ${o.contrat.licencesAdherents!=null?`
        <div class="m-list-row">
          <span class="m-list-row-label">Adhérents actifs</span>
          <span class="m-list-row-value">${o.contrat.licencesAdherents}</span>
        </div>`:""}
        <div class="m-list-row">
          <span class="m-list-row-label">Licences intégrations</span>
          <span class="m-list-row-value">${o.contrat.licencesIntegrations}</span>
        </div>
        <div class="m-list-row m-list-row--last" data-action="plan">
          <span class="m-list-row-label">Abonnement</span>
          <span class="m-list-row-value" style="color:#0172A4;font-weight:600">${o.plan}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Membres (${n.length})</div>
      <div class="m-list">
        ${n.length?n.map((v,x)=>`
          <div class="m-list-row${x===n.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${x}">
            <div class="m-list-row-col">
              <span class="m-list-row-label">${v.prenom} ${v.nom}</span>
              <span class="m-list-row-sub">${v.role}</span>
            </div>
            <i class="bi bi-chevron-right m-list-chevron"></i>
          </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun membre</span></div>'}
      </div>
      <div style="height:32px"></div>`,S()}function S(){t.querySelectorAll(".m-list-row[data-action]").forEach(p=>{p.addEventListener("click",()=>{switch(p.dataset.action){case"name":E("Nom de l'exploitation",o.name,b=>{o.name=b,$()});break;case"metier":L();break;case"adresse-factu":k("Adresse de facturation",o.adresseFactu,b=>{o.adresseFactu=b,$()});break;case"adresse-livrai":k("Adresse de livraison",o.adresseLivrai,b=>{o.adresseLivrai=b,$()});break;case"plan":A("Abonnement",Jt,o.plan,b=>{o.plan=b,$()});break}})}),t.querySelectorAll("[data-member-idx]").forEach(p=>{p.addEventListener("click",()=>f(+p.dataset.memberIdx))})}function E(p,b,v){const x=document.createElement("div");x.innerHTML=`<input class="m-sheet-input" type="text" value="${(b||"").replace(/"/g,"&quot;")}" placeholder="${p}">`;const C=x.querySelector("input");_({title:p,body:x,doneLabel:"Enregistrer",onDone:()=>{const g=C.value.trim();g&&(v(g),P("Enregistré"))}}),setTimeout(()=>C.focus(),300)}function k(p,b,v){const x=document.createElement("div");x.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(b.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${b.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(b.ville||"").replace(/"/g,"&quot;")}">`,_({title:p,body:x,doneLabel:"Enregistrer",onDone:()=>{v({rue:x.querySelector("#f-rue").value.trim(),cp:x.querySelector("#f-cp").value.trim(),ville:x.querySelector("#f-ville").value.trim()}),P("Enregistré")}}),setTimeout(()=>x.querySelector("#f-rue").focus(),300)}function L(){const p=new Set(o.metiers),b=document.createElement("div"),v=()=>{b.innerHTML=Zt.map(x=>`
        <div class="m-sheet-option${p.has(x)?" m-sheet-option--active":""}" data-m="${x}" style="justify-content:space-between">
          <span>${x}</span>
          ${p.has(x)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),b.querySelectorAll("[data-m]").forEach(x=>{x.addEventListener("click",()=>{const C=x.dataset.m;p.has(C)?p.delete(C):p.add(C),v()})})};v(),_({title:"Métiers",body:b,doneLabel:"Valider",onDone:()=>{o.metiers=[...p],$()}})}function A(p,b,v,x){const C=document.createElement("div");C.innerHTML=b.map((M,T)=>`
      <div class="m-sheet-option${M===v?" m-sheet-option--active":""}" data-i="${T}">
        <span>${M}</span>${M===v?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const g=_({title:p,body:C,doneLabel:"Fermer",onDone:()=>{}});C.querySelectorAll(".m-sheet-option").forEach(M=>{M.addEventListener("click",()=>{x(b[+M.dataset.i]),g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>g.remove(),280),P("Enregistré")})})}function f(p){const b=n[p];if(!b)return;const v=document.createElement("div");v.innerHTML=`
      <div class="m-sheet-links">
        <a class="m-sheet-link" id="mem-delete" style="color:#ff3b30">Supprimer ${b.prenom} ${b.nom}</a>
      </div>`;const x=_({title:`${b.prenom} ${b.nom}`,body:v,doneLabel:"Fermer",onDone:()=>{}});v.querySelector("#mem-delete").addEventListener("click",()=>{n.splice(p,1),x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{x.remove(),$()},280),P("Membre retiré")})}function w(){const p=document.createElement("div");p.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <input class="m-sheet-input" type="text" placeholder="Prénom Nom" id="inv-name">
      <select class="m-sheet-input" id="inv-role">
        ${Yt.map(b=>`<option>${b}</option>`).join("")}
      </select>`,_({title:"Inviter un membre",body:p,doneLabel:"Envoyer",onDone:()=>P("Invitation envoyée")}),setTimeout(()=>p.querySelector("#inv-email").focus(),300)}$();function y(){requestAnimationFrame(()=>setTimeout(u,100))}return{onAdd:w,refresh:y}}const es=100,ts=["Essentiel","Plus","Expert"],ss={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function ze(t){return ss[t]||{label:t||"—",color:"#8e8e93"}}function is(t,s){if(!t)return{};if(s!=="admin")return t.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const e=R.filter(i=>i.id!==es).map(i=>({...i}));function a(){const i=e.filter(l=>l.statut!=="inactif");t.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Adhérents — ${i.length} actifs sur ${e.length}</div>
      <div class="m-list">
        ${e.map((l,r)=>{const o=ze(l.statut);return`
            <div class="m-list-row${r===e.length-1?" m-list-row--last":""} m-tappable" data-org-idx="${r}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${l.proprietaire||l.name}</span>
                <span class="m-list-row-sub">${l.name} · ${l.plan||"—"}</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${o.color};flex-shrink:0;margin-right:4px">${o.label}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join("")}
      </div>
      <div style="height:32px"></div>`,t.querySelectorAll("[data-org-idx]").forEach(l=>{l.addEventListener("click",()=>d(e[+l.dataset.orgIdx],+l.dataset.orgIdx))})}function d(i,l){var u,$;const r=ze(i.statut),o=i.statut==="invitation en attente",c=`https://app.weenat.com/invitation?code=${i.codeAdherent||"ADZ-XXX"}`,h=document.createElement("div");h.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email</span><span>${i.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${i.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${i.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${i.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${j.filter(S=>S.orgId===i.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const S=new Set(j.filter(E=>E.orgId===i.id).map(E=>E.id));return H.filter(E=>S.has(E.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${r.color};font-weight:600">${r.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${i.dateAdhesion?i.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${o?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const m=_({title:i.name,body:h,doneLabel:"Fermer",onDone:()=>{}});(u=h.querySelector("#lnk-copy"))==null||u.addEventListener("click",()=>{var S;(S=navigator.clipboard)==null||S.writeText(c).catch(()=>{}),P("Lien copié !")}),($=h.querySelector("#lnk-cancel"))==null||$.addEventListener("click",()=>{i.statut="inactif",m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),a(),P("Invitation annulée")},280)}),h.querySelector("#lnk-delete").addEventListener("click",()=>{e.splice(l,1),m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),a(),P("Adhérent supprimé")},280)})}function n(){const i=document.createElement("div");i.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${ts.map(l=>`<option>${l}</option>`).join("")}
      </select>`,_({title:"Inviter un adhérent",body:i,doneLabel:"Envoyer",onDone:()=>{const l=i.querySelector("#adh-email").value.trim(),r=i.querySelector("#adh-code").value.trim();if(!l||!r){P("Email et code requis");return}e.push({id:Date.now(),name:l,proprietaire:l,email:l,codeAdherent:r,plan:i.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),a(),P("Invitation envoyée")}}),setTimeout(()=>i.querySelector("#adh-email").focus(),300)}return a(),{onAdd:n}}const as=new URLSearchParams(window.location.search),z=as.get("role")==="adherent"?"adherent":"admin";function Ge(){const t=document.getElementById("status-time");if(!t)return;const s=new Date;t.textContent=s.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}Ge();setInterval(Ge,1e4);const N=["dashboard","parcelles","capteurs","alertes","parametres"];let ne="dashboard";function X(t){var s,e;!N.includes(t)||t===ne||(ne=t,document.querySelectorAll(".m-screen").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),(s=document.getElementById(`screen-${t}`))==null||s.classList.add("active"),(e=document.querySelector(`.nav-item[data-tab="${t}"]`))==null||e.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})))}document.getElementById("bottom-nav").addEventListener("click",t=>{const s=t.target.closest(".nav-item");s&&X(s.dataset.tab)});let O=null,K=null;const Ue=50,Q=document.getElementById("screen-stack");Q.addEventListener("mousedown",t=>{if(t.target.closest(".leaflet-container")){O=null;return}O=t.clientX,K=t.clientY});Q.addEventListener("mouseup",t=>{if(O===null)return;const s=t.clientX-O,e=t.clientY-K;if(Math.abs(s)>Ue&&Math.abs(s)>Math.abs(e)){const a=N.indexOf(ne);s<0&&a<N.length-1&&X(N[a+1]),s>0&&a>0&&X(N[a-1])}O=null,K=null});Q.addEventListener("mouseleave",()=>{O=null});Q.addEventListener("touchstart",t=>{if(t.target.closest(".leaflet-container")){O=null;return}O=t.touches[0].clientX,K=t.touches[0].clientY},{passive:!0});Q.addEventListener("touchend",t=>{if(O===null)return;const s=t.changedTouches[0].clientX-O,e=t.changedTouches[0].clientY-K;if(Math.abs(s)>Ue&&Math.abs(s)>Math.abs(e)){const a=N.indexOf(ne);s<0&&a<N.length-1&&X(N[a+1]),s>0&&a>0&&X(N[a-1])}O=null},{passive:!0});const ns=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...z==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],le={};function ls(t){const s=document.getElementById("param-plus-btn"),e=document.getElementById("param-plus-spacer"),a=le[t];s&&e&&(a!=null&&a.onAdd?(s.style.display="",e.style.display="none",s.onclick=a.onAdd):(s.style.display="none",e.style.display=""))}function os(){var s;const t=document.getElementById("param-segment");t&&(z==="adherent"&&((s=document.getElementById("param-reseau"))==null||s.style.setProperty("display","none")),ns.forEach((e,a)=>{const d=document.createElement("button");d.className="m-segment-btn"+(a===0?" active":""),d.textContent=e.label,d.dataset.target=e.id,d.addEventListener("click",()=>{var n,i,l;t.querySelectorAll(".m-segment-btn").forEach(r=>r.classList.remove("active")),d.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(r=>r.classList.remove("active")),(n=document.getElementById(e.id))==null||n.classList.add("active"),ls(e.id),(l=(i=le[e.id])==null?void 0:i.refresh)==null||l.call(i)}),t.appendChild(d)}))}os();yt(document.getElementById("screen-dashboard"),z);qt(document.getElementById("screen-parcelles"),z);Ut(document.getElementById("screen-capteurs"),z);nt(document.getElementById("screen-alertes"),z);et(document.getElementById("param-compte"),z);le["param-exploitation"]=Qt(document.getElementById("param-exploitation"),z);le["param-reseau"]=is(document.getElementById("param-reseau"),z);
