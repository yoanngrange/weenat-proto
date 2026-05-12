import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as P}from"./plots-kiLnwOqV.js";import{s as q}from"./sensors-C_yA0hbg.js";import{n as W}from"./network-YzWdS0n_.js";import{o as R}from"./orgs-Cx4wNzLL.js";import{m as oe}from"./members-DEd9yWse.js";const xe={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Ve=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Se=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let B={};function F(t){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,s.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function G({title:t,body:s,onDone:e,doneLabel:a="OK"}){var n;const d=document.getElementById("phone-screen");(n=document.querySelector(".m-sheet-overlay"))==null||n.remove();const l=document.createElement("div");l.className="m-sheet-overlay",l.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${a}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,l.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(l),requestAnimationFrame(()=>l.classList.add("m-sheet-overlay--show"));const i=()=>{l.classList.remove("m-sheet-overlay--show"),setTimeout(()=>l.remove(),280)};return l.querySelector(".m-sheet-cancel").addEventListener("click",i),l.querySelector(".m-sheet-done").addEventListener("click",()=>{e==null||e(),i()}),l.addEventListener("click",o=>{o.target===l&&i()}),l}function Ee(t,s,e){const a=document.createElement("div");a.innerHTML=`<input class="m-sheet-input" type="text" value="${s}" placeholder="${t}">`;const d=a.querySelector("input");G({title:t,body:a,doneLabel:"Enregistrer",onDone:()=>{e(d.value.trim()),F("Enregistré")}}),setTimeout(()=>d.focus(),300)}function Me(t,s,e,a){const d=document.createElement("div");d.innerHTML=s.map((i,n)=>`
    <div class="m-sheet-option${i===e?" m-sheet-option--active":""}" data-i="${n}">
      <span>${i}</span>
      ${i===e?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const l=G({title:t,body:d,doneLabel:"Fermer",onDone:()=>{}});d.querySelectorAll(".m-sheet-option").forEach(i=>{i.addEventListener("click",()=>{a(s[+i.dataset.i]),l.classList.remove("m-sheet-overlay--show"),setTimeout(()=>l.remove(),280),F("Enregistré")})})}function Ge(t,s){const e=document.createElement("div"),a=()=>{var d;e.innerHTML=t.map((l,i)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${i}" data-f="label" value="${l.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${i}" data-f="numero" value="${l.numero}" placeholder="+33 6…">
        </div>
        ${i>0?`<button class="m-sheet-remove" data-i="${i}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',e.querySelectorAll("input").forEach(l=>{l.addEventListener("input",()=>{t[+l.dataset.i][l.dataset.f]=l.value})}),e.querySelectorAll(".m-sheet-remove").forEach(l=>{l.addEventListener("click",()=>{t.splice(+l.dataset.i,1),a()})}),(d=e.querySelector(".m-sheet-add-phone"))==null||d.addEventListener("click",()=>{t.push({label:"",numero:""}),a()})};a(),G({title:"Téléphone(s)",body:e,doneLabel:"Enregistrer",onDone:()=>{s(t),F("Enregistré")}})}function Ue(t,s,e){const a=document.createElement("div");a.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${t.name}</div>
      <div class="m-sheet-key-date">créée le ${t.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${t.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,a.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var l;(l=navigator.clipboard)==null||l.writeText(t.value).catch(()=>{}),F("Clé copiée !")});const d=G({title:"Clé API",body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const l=s.findIndex(i=>i.id===t.id);l!==-1&&s.splice(l,1),d.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{d.remove(),e()},280),F("Clé supprimée")})}function Je(){const t="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>t[Math.floor(Math.random()*t.length)]).join("")}function Ye(t){const s=document.createElement("div");s.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const e=s.querySelector("input");G({title:"Nouvelle clé API",body:s,doneLabel:"Générer",onDone:()=>{const a=e.value.trim();if(!a){F("Entrez un nom");return}const d={id:Date.now(),name:a,created:new Date().toLocaleDateString("fr-FR"),value:Je()};t(d),F("Clé générée")}}),setTimeout(()=>e.focus(),300)}function Xe(t,s){B={profile:JSON.parse(JSON.stringify(xe[s]||xe.admin)),langue:"Français",unites:Se[0]};const a=localStorage.getItem("mobile_avatarUrl")||null;function d(){const i=B.profile,n=a?`<img src="${a}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${i.initials}</span>`,o=i.apiKeys.map(r=>`
      <div class="m-list-row" data-key-id="${r.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${r.name}</span>
          <span class="m-list-row-sub">créée le ${r.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),c=i.phones.map((r,b)=>`
      <div class="m-list-row${b===i.phones.length-1&&i.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${r.label||"Numéro "+(b+1)}</span>
        <span class="m-list-row-value">${r.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");t.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${n}</div>
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
          <span class="m-list-row-value" id="val-langue">${B.langue}</span>
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
    `,l()}function l(){var n;const i=B.profile;(n=t.querySelector("#m-avatar-upload"))==null||n.addEventListener("change",o=>{const c=o.target.files[0];if(!c)return;const r=new FileReader;r.onload=b=>{localStorage.setItem("mobile_avatarUrl",b.target.result),t.querySelector("#m-avatar").innerHTML=`<img src="${b.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},r.readAsDataURL(c)}),t.querySelectorAll(".m-list-row[data-action]").forEach(o=>{o.addEventListener("click",()=>{switch(o.dataset.action){case"prenom":Ee("Prénom",i.prenom,c=>{i.prenom=c,d()});break;case"nom":Ee("Nom",i.nom,c=>{i.nom=c,d()});break;case"email":G({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${i.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>F("Fonctionnalité à venir")});break;case"phones":Ge(i.phones,c=>{i.phones=c,d()});break;case"mdp":G({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>F("Fonctionnalité à venir")});break;case"langue":Me("Langue",Ve,B.langue,c=>{B.langue=c,t.querySelector("#val-langue").textContent=c});break;case"unites":Me("Unités",Se,B.unites,c=>{B.unites=c,t.querySelector("#val-unites").textContent=c.split(" ")[0]});break;case"gen-key":Ye(c=>{i.apiKeys.push(c),d()});break;case"delete":F("Contactez le support pour supprimer votre compte");break}})}),t.querySelectorAll(".m-list-row[data-key-id]").forEach(o=>{o.addEventListener("click",()=>{const c=i.apiKeys.find(r=>r.id===+o.dataset.keyId);c&&Ue(c,i.apiKeys,d)})}),t.querySelectorAll(".m-toggle input[data-notif]").forEach(o=>{o.addEventListener("change",()=>F("Préférence enregistrée"))})}d()}function I(t){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,s.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function D({title:t,body:s,doneLabel:e="Fermer",onDone:a}={}){var n;const d=document.getElementById("phone-screen");(n=document.querySelector(".m-sheet-overlay"))==null||n.remove();const l=document.createElement("div");l.className="m-sheet-overlay",l.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${e}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,l.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(l),requestAnimationFrame(()=>l.classList.add("m-sheet-overlay--show"));const i=()=>{l.classList.remove("m-sheet-overlay--show"),setTimeout(()=>l.remove(),280)};return l.querySelector(".m-sheet-cancel").addEventListener("click",i),l.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),i()}),l.addEventListener("click",o=>{o.target===l&&i()}),l}function Ze(t){const s=[{label:"Seuil dépassé",desc:"Conditions déclenchantes vérifiées",duration:"2h34",resolved:!0},{label:"Seuil dépassé",desc:"Notification SMS envoyée",duration:"45min",resolved:!0},{label:"Seuil dépassé",desc:"Valeur mesurée hors plage",duration:"1h20",resolved:!0},{label:"Fausse alerte",desc:"Pic transitoire — durée < seuil",duration:null,resolved:!0},{label:"Seuil dépassé",desc:"Conditions toujours vérifiées",duration:"3h05",resolved:!0},{label:"Alerte en cours",desc:"Conditions vérifiées depuis ce matin",duration:null,resolved:!1}],e=3+t%5,a=Date.now();return Array.from({length:e},(d,l)=>{const i=t*17+l*7,n=1+l*(2+i%6),o=new Date(a-n*864e5),c=s[i%s.length],r=o.getDate(),b=o.getMonth()+1;return{date:`${String(r).padStart(2,"0")}/${String(b).padStart(2,"0")}`,heure:`${String(6+i%14).padStart(2,"0")}h${String(i%60).padStart(2,"0")}`,label:c.label,desc:c.desc,duration:c.duration,resolved:l>0?!0:c.resolved}})}const Ke=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Qe=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],Le={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},et={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function re(t){if(!t)return"—";const[s,e,a]=t.split("-");return`${a}/${e}/${s}`}function Ae(t){const s=t.sensorIds.map(a=>{const d=q.find(l=>l.id===a);return d?`${d.model} ${d.serial}`:null}).filter(Boolean),e=t.parcelIds.map(a=>{const d=P.find(l=>l.id===a);return(d==null?void 0:d.name)||null}).filter(Boolean);return[...s,...e]}function tt(t,s){var i;let e=t.querySelector("#alertes-content");e||(e=document.createElement("div"),e.id="alertes-content",t.appendChild(e));const a=[...s==="adherent"?Qe:Ke];function d(){if(!a.length){e.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}e.innerHTML=a.map(n=>{Ae(n);const o=et[n.metric]||"bi-bell",c=n.statut==="actif";return`
        <div class="m-alert-card" data-id="${n.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${c?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${o}"></i>
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
              <span class="m-alert-row-val">${Le[n.metric]||n.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${re(n.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${n.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),l()}function l(){e.querySelectorAll(".m-alert-toggle input").forEach(n=>{n.addEventListener("change",o=>{o.stopPropagation();const c=+n.dataset.id,r=a.find(b=>b.id===c);r&&(r.statut=n.checked?"actif":"inactif",d(),I(`Alerte ${n.checked?"activée":"désactivée"}`))})}),e.querySelectorAll(".m-alert-more-btn").forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation();const c=+n.dataset.id,r=a.find(x=>x.id===c);if(!r)return;Ae(r);const b=document.createElement("div"),m=Ze(c);function p(){const x=r.sensorIds.map((T,S)=>{const k=q.find(E=>E.id===T);return k?{label:`${k.model} ${k.serial}`,type:"sensor",idx:S}:null}).filter(Boolean),L=r.parcelIds.map((T,S)=>{const k=P.find(E=>E.id===T);return k?{label:k.name,type:"parcel",idx:S}:null}).filter(Boolean),M=[...x,...L];return M.length?M.map(T=>`<div class="m-perimetre-item" data-type="${T.type}" data-idx="${T.idx}">
                <span>${T.label}</span>
                <button class="m-perimetre-del" data-type="${T.type}" data-idx="${T.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const w=document.createElement("div");w.className="m-sheet-info-rows";function f(){var T;b.innerHTML="";const x=document.createElement("div");x.className="m-sheet-info-rows",x.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Le[r.metric]||r.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${re(r.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${re(r.created)}</span></div>
            ${(T=r.phones)!=null&&T.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${r.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${r.statut}</span></div>`;const L=document.createElement("div");L.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",L.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${p()}</div>`,x.appendChild(L),b.appendChild(x);const M=document.createElement("div");M.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${m.map(S=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${S.resolved?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${S.date} à ${S.heure}${S.duration?` · ${S.duration}`:""}</div>
                <div class="m-history-label">${S.label}</div>
                <div class="m-history-desc">${S.desc}</div>
              </div></div>`).join("")}`,b.appendChild(M),b.querySelectorAll(".m-perimetre-del").forEach(S=>{S.addEventListener("click",k=>{k.stopPropagation();const E=S.dataset.type,h=+S.dataset.idx;E==="sensor"?r.sensorIds.splice(h,1):r.parcelIds.splice(h,1),f(),d(),I("Retiré du périmètre")})})}f(),D({title:r.name,body:b,doneLabel:"Fermer",onDone:()=>{}})})}),e.querySelectorAll(".m-alert-card").forEach(n=>{n.addEventListener("click",o=>{if(o.target.closest(".m-alert-toggle")||o.target.closest(".m-alert-more-btn"))return;const c=+n.dataset.id,r=a.find(p=>p.id===c);if(!r)return;const b=document.createElement("div");b.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const m=D({title:r.name,body:b,doneLabel:"Fermer",onDone:()=>{}});b.querySelector("#al-edit").addEventListener("click",()=>{m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),I("Modification à venir")},280)}),b.querySelector("#al-delete").addEventListener("click",()=>{const p=a.findIndex(w=>w.id===c);p!==-1&&a.splice(p,1),m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),d()},280),I("Alerte supprimée")})})})}(i=t.querySelector(".m-navbar-action"))==null||i.addEventListener("click",()=>{I("Création d'alerte — à venir")}),d()}const st="modulepreload",it=function(t){return"/weenat-proto/"+t},Te={},at=function(s,e,a){let d=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),n=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));d=Promise.allSettled(e.map(o=>{if(o=it(o),o in Te)return;Te[o]=!0;const c=o.endsWith(".css"),r=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const b=document.createElement("link");if(b.rel=c?"stylesheet":st,c||(b.as="script"),b.crossOrigin="",b.href=o,n&&b.setAttribute("nonce",n),document.head.appendChild(b),c)return new Promise((m,p)=>{b.addEventListener("load",m),b.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}function l(i){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i}return d.then(i=>{for(const n of i||[])n.status==="rejected"&&l(n.reason);return s().catch(l)})},ae=[];function ve(t){const s=document.getElementById("phone-screen"),e=document.createElement("div");return e.className="m-detail-layer",e.innerHTML=t,s.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-detail-layer--in")),ae.push(e),e}function he(){const t=ae.pop();t&&(t.classList.remove("m-detail-layer--in"),setTimeout(()=>t.remove(),300))}window.addEventListener("m-tab-change",()=>{ae.forEach(t=>t.remove()),ae.length=0});const nt={admin:100,adherent:1},_=[{id:"bilan_hydrique",title:"Bilan hydrique",icon:"bi-droplet-fill",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun-fill",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Données temps-réel",icon:"bi-activity",color:"#ff9f0a",active:!1,available:!1,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"capteurs_fav",title:"Capteurs favoris",icon:"bi-star-fill",color:"#ff9f0a",active:!1,available:!1,fixed:!1},{id:"parcelles_fav",title:"Parcelles favorites",icon:"bi-bookmark-fill",color:"#30d158",active:!1,available:!1,fixed:!1},{id:"mon_secteur",title:"Mon secteur",icon:"bi-geo-alt-fill",color:"#ff6b6b",active:!1,available:!1,fixed:!1},{id:"traitements",title:"Traitements phytosanitaires",icon:"bi-shield-fill",color:"#4ecdc4",active:!1,available:!1,fixed:!1},{id:"cultures",title:"Cultures & Stades phénologiques",icon:"bi-flower1",color:"#a2c4c9",active:!1,available:!1,fixed:!1},{id:"evenements",title:"Capteurs avec événement en cours",icon:"bi-exclamation-triangle-fill",color:"#ff3b30",active:!1,available:!1,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3-fill",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Support",icon:"bi-question-circle-fill",color:"#30d158",active:!0,available:!0,fixed:!0}];function ke(t){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,s.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function ce({title:t,body:s,doneLabel:e="Fermer",onDone:a}={}){var n;const d=document.getElementById("phone-screen");(n=document.querySelector(".m-sheet-overlay"))==null||n.remove();const l=document.createElement("div");l.className="m-sheet-overlay",l.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${e}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,l.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),d.appendChild(l),requestAnimationFrame(()=>l.classList.add("m-sheet-overlay--show"));const i=()=>{l.classList.remove("m-sheet-overlay--show"),setTimeout(()=>l.remove(),280)};return l.querySelector(".m-sheet-cancel").addEventListener("click",i),l.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),i()}),l.addEventListener("click",o=>{o.target===l&&i()}),l}const Ce=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#45b7d1"}];function Ie(){return[0,1,2].map(t=>{const s=new Date;s.setDate(s.getDate()+t);const e=Ce[Math.floor(Math.random()*Ce.length)],a=e.label==="Pluie"||e.label==="Averses",d=Math.round(8+Math.random()*8),l=Math.round(16+Math.random()*14),i=Array.from({length:24},(n,o)=>{const c=Math.sin(Math.PI*(o-6)/12),r=Math.round(d+(l-d)*Math.max(0,c)),b=a&&o>=8&&o<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:o,label:`${String(o).padStart(2,"0")}h`,temp:r,pluie:b,hum:Math.round(85-40*Math.max(0,c)),vent:Math.round(10+Math.random()*20),icon:b>0?"bi-cloud-rain-fill":o<7||o>20?"bi-moon-fill":e.icon}});return{dayLabel:t===0?"Aujourd'hui":t===1?"Demain":s.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:s.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...e,pluie:a?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:d,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:l,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:i}})}function lt(t){const s=t.id,e=t.reserveHydrique||50,a=+((s*2.3+7)%32).toFixed(1),d=+((s*1.1+14)%14+10).toFixed(1),l=+((s*.6+1)%6).toFixed(1),i=Math.round(e*((s%5+1)/10)),n=Math.max(0,+(i+a-d-l).toFixed(0)),o=n<i?i-n:0;return{j0:i,j7:n,bilan:o}}const de=8;function Pe(t,s=!1){if(!t.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const a=(s?t:t.slice(0,de)).map(l=>{const{j0:i,j7:n,bilan:o}=lt(l);return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${l.id}">${l.name}</button>
      <div class="m-bh-td">${i}</div>
      <div class="m-bh-td">${n}</div>
      <div class="m-bh-td">${o>0?`${o} mm`:""}</div>`}).join(""),d=!s&&t.length>de?`<button class="m-bh-expand" id="bh-expand">Afficher les ${t.length-de} autres parcelles <i class="bi bi-chevron-down"></i></button>`:"";return`
    <div class="m-bh-table">
      <div class="m-bh-th"></div>
      <div class="m-bh-th">J0</div>
      <div class="m-bh-th">J+7</div>
      <div class="m-bh-th">🪣</div>
      ${a}
    </div>
    ${d}`}function ot(t,s,e){const a=t.map(n=>{const o=[n.name,n.crop,n.ville].filter(Boolean).join(" · ");return`<option value="p-${n.id}">${o}</option>`}).join(""),d=s.map(n=>`<option value="s-${n.id}">${n.model} — ${n.serial}</option>`).join(""),l=`
    <optgroup label="Parcelles">${a}</optgroup>
    ${d?`<optgroup label="Capteurs">${d}</optgroup>`:""}`,i=e.map((n,o)=>{const c=`${n.dayLabel.charAt(0).toUpperCase()+n.dayLabel.slice(1)} · ${n.dateStr}`;return`
    <div class="m-prev-card" data-day="${o}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${n.icon}" style="color:${n.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${c}</span>
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
    <select class="m-prev-select">${l}</select>
    <div class="m-prev-cards">${i}</div>`}const V=[{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"dh",label:"Degrés-heures",unit:"Dh",base:800,amp:2e3,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}];function rt(t){if(!t||t.startsWith("s-"))return V;const s=+t.slice(2),e=new Set(q.filter(a=>a.parcelId===s).map(a=>a.model));return V.filter(a=>a.needsModels===null||a.needsModels.some(d=>e.has(d)))}function ct(t,s,e){if(!t||!s)return null;const a=V.find(i=>i.id===e)||V[0],d=Math.max(1,Math.round((Date.now()-new Date(s))/864e5)),l=t.split("").reduce((i,n)=>i+n.charCodeAt(0),0)+d;return+(a.base+l%(a.amp*10)/10).toFixed(1)}function dt(t,s){const e=new Date;e.setDate(e.getDate()-7);const a=e.toISOString().split("T")[0],d=t.map(i=>`<option value="p-${i.id}">${i.name}</option>`).join(""),l=s.filter(i=>i.parcelId).map(i=>`<option value="s-${i.id}">${i.serial} (${i.model})</option>`).join("");return`
    <div class="m-cumuls-form">
      <select class="m-cumuls-select" id="cumuls-subject">
        <option value="">Choisir une parcelle ou un capteur…</option>
        <optgroup label="Parcelles">${d}</optgroup>
        ${l?`<optgroup label="Capteurs">${l}</optgroup>`:""}
      </select>
      <div class="m-cumuls-row2">
        <div class="m-cumuls-field">
          <span class="m-cumuls-label">Depuis le</span>
          <input type="date" class="m-cumuls-date" id="cumuls-from" value="${a}">
        </div>
        <div class="m-cumuls-field">
          <span class="m-cumuls-label">Métrique</span>
          <select class="m-cumuls-select m-cumuls-select--sm" id="cumuls-metric">
            ${V.map(i=>`<option value="${i.id}">${i.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="m-cumuls-result" id="cumuls-result">
        <span class="m-cumuls-val" id="cumuls-val">—</span>
        <span class="m-cumuls-unit" id="cumuls-unit">Sélectionnez un sujet</span>
      </div>
    </div>`}function mt(){const t=P.map(a=>a.orgId).filter((a,d,l)=>l.indexOf(a)===d&&a!==100).length,s=q.length,e=P.length;return`
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
    </div>`}function ut(){return`
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
    </a>`}const qe=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function pt(){var c;const t=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const s=document.createElement("div");s.className="m-sheet-overlay m-sheet-overlay--tall",s.innerHTML=`
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
    </div>`,t.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const e=s.querySelector("#chat-messages"),a=s.querySelector("#chat-input"),d=s.querySelector("#chat-send"),l=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#chat-close").addEventListener("click",l),s.addEventListener("click",r=>{r.target===s&&l()});function i(r,b){const m=document.createElement("div");m.className=`m-chat-msg m-chat-msg--${b}`,m.innerHTML=`<div class="m-chat-bubble">${r}</div>`,e.appendChild(m),e.scrollTop=e.scrollHeight}function n(){const r=document.createElement("div");return r.className="m-chat-msg m-chat-msg--bot m-chat-typing",r.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',e.appendChild(r),e.scrollTop=e.scrollHeight,r}function o(){const r=a.value.trim();if(!r)return;i(r,"user"),a.value="",d.disabled=!0;const b=n();setTimeout(()=>{b.remove();const m=qe[Math.floor(Math.random()*qe.length)];i(m,"bot"),d.disabled=!1,a.focus()},1200+Math.random()*800)}d.addEventListener("click",o),a.addEventListener("keydown",r=>{r.key==="Enter"&&o()}),setTimeout(()=>a.focus(),350)}function vt(t,s){let e=t.querySelector("#dashboard-content");e||(e=document.createElement("div"),e.id="dashboard-content",t.appendChild(e));const a=nt[s]||1,d=a===100?P:P.filter(f=>f.orgId===a),l=new Set(d.map(f=>f.id)),i=q.filter(f=>l.has(f.parcelId));let n=Ie();const o=new Set;function c(f,x){const L=f.fixed?"":`<button class="m-widget-menu" data-widget="${f.id}" type="button">•••</button>`,M=o.has(f.id);return`
      <div class="m-widget${M?" m-widget--collapsed":""}" data-widget="${f.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${f.id}">
          <div class="m-widget-icon-wrap" style="background:${f.color}20;color:${f.color}">
            <i class="bi ${f.icon}"></i>
          </div>
          <span class="m-widget-title">${f.title}</span>
          <i class="bi ${M?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${f.fixed?"0":"8px"}"></i>
          ${L}
        </div>
        <div class="m-widget-bd" style="${M?"display:none":""}">${x}</div>
      </div>`}function r(){n=Ie();const f=_.filter(L=>L.active&&!L.fixed),x=_.filter(L=>L.active&&L.fixed);e.innerHTML=`
      ${[...f,...x].map(L=>{let M="";return L.id==="bilan_hydrique"?M=Pe(d,!1):L.id==="previsions"?M=ot(d,i,n):L.id==="cumuls"?M=dt(d,i):L.id==="mon_reseau"?M=mt():L.id==="support"&&(M=ut()),c(L,M)}).join("")}
      <div style="height:24px"></div>`,m()}function b(f){const x=`${f.dayLabel.charAt(0).toUpperCase()+f.dayLabel.slice(1)} · ${f.dateStr}`;ve(`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">W</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:center;padding:4px 16px 0">
          <i class="bi ${f.icon}" style="color:${f.color};font-size:24px"></i>
          <span class="m-d-name" style="margin-left:8px">${x}</span>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><span>Pluie</span><strong>${f.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><span>T° min / max</span><strong>${f.tMin} / ${f.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><span>Vent</span><strong>${f.ventMoy}/${f.ventRafales}</strong></div>
          </div>
          <div class="m-list-section-header">Heure par heure</div>
          <div style="background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.07);overflow:hidden;margin-bottom:24px">
            ${f.hours.map((M,T)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${T<f.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${M.label}</span>
                <i class="bi ${M.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${M.temp}°</span>
                <span style="font-size:12px;color:#45b7d1;width:44px;flex-shrink:0">${M.pluie>0?`${M.pluie}mm`:""}</span>
                <span style="font-size:12px;color:#8e8e93">${M.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${M.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`).querySelector(".m-detail-back").addEventListener("click",he)}function m(){var M,T,S,k,E,h;(M=t.querySelector(".m-navbar-action"))==null||M.addEventListener("click",w),e.querySelectorAll(".m-widget-hd--toggle").forEach(v=>{v.addEventListener("click",u=>{if(u.target.closest(".m-widget-menu"))return;const g=v.dataset.collapse;o.has(g)?o.delete(g):o.add(g),r()})}),(T=e.querySelector("#bh-expand"))==null||T.addEventListener("click",()=>{const v=e.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');v&&(v.innerHTML=Pe(d,!0))}),e.querySelectorAll(".m-bh-plot-link").forEach(v=>{v.addEventListener("click",()=>{const u=P.find(g=>g.id===+v.dataset.plotId);u&&at(()=>Promise.resolve().then(()=>Mt),void 0).then(g=>g.initParcelDetail(u,[]))})});const f=e.querySelector("#cumuls-metric"),x=()=>{var y;if(!f)return;const v=(y=e.querySelector("#cumuls-subject"))==null?void 0:y.value,u=rt(v),g=f.value;f.innerHTML=u.map($=>`<option value="${$.id}"${$.id===g&&u.find(A=>A.id===g)?" selected":""}>${$.label}</option>`).join("")},L=()=>{var j,H,Q;const v=(j=e.querySelector("#cumuls-subject"))==null?void 0:j.value,u=(H=e.querySelector("#cumuls-from"))==null?void 0:H.value,g=(Q=e.querySelector("#cumuls-metric"))==null?void 0:Q.value,y=e.querySelector("#cumuls-val"),$=e.querySelector("#cumuls-unit");if(!y||!$)return;const A=ct(v,u,g),C=V.find(We=>We.id===g);A!==null&&v?(y.textContent=A,$.textContent=(C==null?void 0:C.unit)||""):(y.textContent="—",$.textContent="Sélectionnez un sujet")};(S=e.querySelector("#cumuls-subject"))==null||S.addEventListener("change",()=>{x(),L()}),(k=e.querySelector("#cumuls-from"))==null||k.addEventListener("change",L),(E=e.querySelector("#cumuls-metric"))==null||E.addEventListener("change",L),(h=e.querySelector("#open-chat-btn"))==null||h.addEventListener("click",pt),e.querySelectorAll(".m-prev-card").forEach(v=>{v.addEventListener("click",()=>{const u=n[+v.dataset.day];u&&b(u)})}),e.querySelectorAll(".m-widget-menu").forEach(v=>{v.addEventListener("click",u=>{u.stopPropagation();const g=_.find(A=>A.id===v.dataset.widget);if(!g)return;const y=document.createElement("div");y.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="menu-config">Configurer</a>
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const $=ce({title:g.title,body:y,doneLabel:"Fermer",onDone:()=>{}});y.querySelector("#menu-config").addEventListener("click",()=>{$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{$.remove(),ke("Configuration à venir")},280)}),y.querySelector("#menu-move").addEventListener("click",()=>{$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{$.remove(),p()},280)}),y.querySelector("#menu-remove").addEventListener("click",()=>{g.active=!1,$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{$.remove(),r()},280),ke("Widget retiré")})})})}function p(){const f=document.createElement("div"),x=()=>_.filter(M=>M.active&&!M.fixed),L=()=>{const M=x();f.innerHTML=M.map((T,S)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${T.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${S}" data-dir="-1" ${S===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${S}" data-dir="1" ${S===M.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),f.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(T=>{T.addEventListener("click",()=>{const S=x(),k=+T.dataset.i,E=k+ +T.dataset.dir,h=_.indexOf(S[k]),v=_.indexOf(S[E]);[_[h],_[v]]=[_[v],_[h]],L(),r()})})};L(),ce({title:"Réorganiser les widgets",body:f,doneLabel:"Fermer",onDone:()=>{}})}function w(){const f=document.createElement("div"),x=()=>{const L=_.filter(M=>!M.fixed);f.innerHTML=L.map(M=>`
        <div class="m-catalog-row${M.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${M.color}20;color:${M.color}"><i class="bi ${M.icon}"></i></div>
          <span class="m-catalog-title">${M.title}</span>
          ${M.available?`<button class="m-catalog-toggle${M.active?" m-catalog-toggle--on":""}" data-cid="${M.id}" type="button">
                <i class="bi ${M.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),f.querySelectorAll("[data-cid]").forEach(M=>{M.addEventListener("click",()=>{const T=_.find(S=>S.id===M.dataset.cid);T&&(T.active=!T.active,x(),r())})})};x(),ce({title:"Widgets disponibles",body:f,doneLabel:"Fermer",onDone:()=>{}})}r()}const ie={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#c090e0",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#80c8e8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1},humectation:{label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}},Fe={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function fe(t,s){const e={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[t]||{base:50,amp:20,min:0,max:100};return Array.from({length:s},(a,d)=>{const l=d/s*Math.PI*4;if(e.sparse&&Math.random()>.25)return 0;const i=e.base+e.amp*Math.sin(l-1)+(Math.random()-.5)*e.amp*.5;return Math.max(e.min,Math.min(e.max,i))})}const be={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},ge={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function ht(t,s,e,a,d,l=20){const i=ge[t]||10080,n=new Date,o=m=>t==="1d"||t==="hier"?`${String(m.getHours()).padStart(2,"0")}h`:t==="365d"?m.toLocaleDateString("fr-FR",{month:"short"}):`${String(m.getDate()).padStart(2,"0")}/${String(m.getMonth()+1).padStart(2,"0")}`,c=4,r=s-e-a,b=d-l;return Array.from({length:c+1},(m,p)=>{const w=p/c,f=new Date(n.getTime()-(1-w)*i*6e4),x=(e+w*r).toFixed(1),L=p===0?"start":p===c?"end":"middle";return[`<line x1="${x}" y1="${b}" x2="${x}" y2="${b+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${x}" y="${d-3}" text-anchor="${L}" font-size="9" fill="#8e8e93" font-family="-apple-system">${o(f)}</text>`].join("")}).join("")}function ft(t,s,e,a="7d"){const d=be[a]||60,l=fe(t,d),i=320,n=100,o=34,c=6,r=10,b=20,m=i-o-c,p=n-r-b,w=e?0:Math.min(...l),f=Math.max(...l,w+.001),x=f-w,L=$=>o+$/(l.length-1)*m,M=$=>r+p-($-w)/x*p,T=`g${Math.random().toString(36).slice(2,8)}`,S=[0,.5,1].map($=>{const A=w+$*x,C=r+p-$*p;return`<text x="${o-3}" y="${(C+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${A<10?A.toFixed(1):Math.round(A)}</text>`}).join(""),k=[.25,.5,.75].map($=>{const A=(r+p-$*p).toFixed(1);return`<line x1="${o}" y1="${A}" x2="${i-c}" y2="${A}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),E=`<line x1="${o}" y1="${r+p}" x2="${i-c}" y2="${r+p}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,h=ht(a,i,o,c,n);if(e){const $=m/l.length*.7,A=l.map((C,j)=>{const H=(C-w)/x*p,Q=r+p-H;return`<rect x="${(L(j)-$/2).toFixed(1)}" y="${Q.toFixed(1)}" width="${$.toFixed(1)}" height="${H.toFixed(1)}" fill="${s}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${i} ${n}" width="100%" height="${n}" preserveAspectRatio="none">${S}${k}${E}${h}${A}</svg>`}const u=l.map(($,A)=>[L(A),M($)]).map(([$,A],C)=>`${C?"L":"M"}${$.toFixed(1)},${A.toFixed(1)}`).join(" "),g=`${u} L${L(l.length-1).toFixed(1)},${(r+p).toFixed(1)} L${o},${(r+p).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:l.map($=>+$.toFixed(2)),minV:+w.toFixed(2),maxV:+f.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${i} ${n}" width="100%" height="${n}" preserveAspectRatio="none">
      <defs><linearGradient id="${T}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${S}${k}${E}
      <path d="${g}" fill="url(#${T})"/>
      <path d="${u}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${h}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function bt(t,s,e){if(!e)return"";const a=be[s]||60,l=(ge[s]||10080)/(a*60),i=fe(t,a);let n=[];if(e==="temp"){const o=i.reduce((r,b)=>r+Math.max(0,b),0)*(l/24),c=i.filter(r=>r<7).length*l;n=[{label:"Degrés jours",val:`${Math.round(o)} DJ`},{label:"Heures de froid",val:`${Math.round(c)} h`}]}else if(e==="pluie")n=[{label:"Cumul pluie",val:`${i.reduce((c,r)=>c+r,0).toFixed(1)} mm`}];else if(e==="rayo"){const o=i.filter(c=>c>120).length*l;n=[{label:"Ensoleillement",val:`${Math.round(o)} h`}]}else if(e==="etp")n=[{label:"ETP cumulée",val:`${(i.reduce((c,r)=>c+r,0)*(l/24)).toFixed(1)} mm`}];else if(e==="hws"){const o=i.filter(c=>c>50).length*l;n=[{label:"Heures d'humectation",val:`${Math.round(o)} h`}]}return n.length?`<div class="m-chart-cumuls">${n.map(o=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${o.label}</span>
      <span class="m-chart-cumul-val">${o.val}</span>
    </div>`).join("")}</div>`:""}function gt(t,s){const e=ie[t];return e?`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${e.color}">${e.label}</span>
      </div>
      ${ft(t,e.color,e.cumul,s)}
      ${bt(t,s,e.cumulsType)}
    </div>`:""}function yt(t){const s=JSON.parse(decodeURIComponent(t.dataset.chart||"{}"));if(!s.vals)return;const{vals:e,minV:a,maxV:d}=s,l=t.querySelector(".m-chart-tip"),i=t.querySelector(".m-chart-crosshair"),n=t.dataset.color||"#0172A4";function o(r){const b=t.getBoundingClientRect(),m=Math.max(0,Math.min(1,(r-b.left)/b.width)),p=Math.round(m*(e.length-1)),w=e[p],f=m*100;i.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${f}%;width:1px;background:${n};opacity:.5`,l.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(f,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,l.textContent=w<10?w.toFixed(1):String(Math.round(w))}function c(){i.style.display="none",l.style.display="none"}t.addEventListener("pointermove",r=>{r.preventDefault(),o(r.clientX)}),t.addEventListener("pointerdown",r=>o(r.clientX)),t.addEventListener("pointerup",c),t.addEventListener("pointerleave",c),t.style.cursor="crosshair"}function $t(){return`
    <div class="m-detail-section">
      ${["Bilan hydrique","Stades phénologiques","Alertes actives","Données temps-réel"].map(s=>`
        <div class="m-placeholder-widget">
          <span class="m-placeholder-widget-name">${s}</span>
          <button class="m-widget-menu" type="button">•••</button>
        </div>`).join("")}
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
    </div>`}function wt(t,s){const e=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:s});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function xt(t,s,e){const a=new Set;s.forEach(p=>{const w=q.find(f=>f.id===p);w&&(Fe[w.model]||[]).forEach(f=>a.add(f))});const d=[...new Set(["etp","rayonnement","temp_rosee",...a])].filter(p=>ie[p]),l=be[e]||60,i=ge[e]||10080,n=i/l*6e4,o=new Date,c=new Date(o-i*6e4),r=["Horodatage",...d.map(p=>`${ie[p].label} (${ie[p].unit})`)].join(";"),b=Array.from({length:l},(p,w)=>[new Date(c.getTime()+w*n).toISOString().replace("T"," ").slice(0,19),...d.map(x=>fe(x,1)[0].toFixed(2))].join(";")),m=(t.name||"parcelle").replace(/[^\w]/g,"_");wt([r,...b].join(`\r
`),`${m}_${e}_${new Date().toISOString().slice(0,10)}.csv`)}function St(t,s="7d",e="1h"){const a=new Set;t.forEach(l=>{const i=q.find(n=>n.id===l);i&&(Fe[i.model]||[]).forEach(n=>a.add(n))});const d=[...new Set(["etp","rayonnement","temp_rosee",...a])];return`
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
      ${d.map(l=>gt(l,s)).join("")}
    </div>`}function Et(t,s,e){const a=e.map(d=>{const l=q.find(i=>i.id===d);return l?`${l.model} — ${l.serial}`:null}).filter(Boolean);return`
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
        ${a.length?a.map((d,l)=>`<div class="m-list-row${l===a.length-1?" m-list-row--last":""}">
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
    </div>`}function pe(t,s=[]){const e=R.find(m=>m.id===t.orgId);let a="widgets",d="7d",l="1h",i=!1;const n=(e==null?void 0:e.ville)||"",o=ve(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Parcelles</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${t.name}</div>
          ${t.crop||n?`<div class="m-detail-subtitle">${[t.crop,n].filter(Boolean).join(" · ")}</div>`:""}
        </div>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="widgets">Widgets</button>
      <button class="m-detail-tab" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function c(){const m=o.querySelector("#detail-content");a==="widgets"&&(m.innerHTML=$t()),a==="donnees"&&(m.innerHTML=St(s,d,l)),a==="params"&&(m.innerHTML=Et(t,e,s),r()),b()}function r(){const m=window.L;m&&setTimeout(()=>{var f;const p=o.querySelector("#parcel-minimap");if(!p)return;const w=m.map(p,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(m.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(w),((f=t.latlngs)==null?void 0:f.length)>=3){const x=m.polygon(t.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(w);w.fitBounds(x.getBounds(),{padding:[8,8]})}else w.setView([t.lat,t.lng],14),m.circleMarker([t.lat,t.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(w)},50)}function b(){var m,p,w,f;(m=o.querySelector(".m-period-sel"))==null||m.addEventListener("change",x=>{d=x.target.value,c()}),(p=o.querySelector(".m-step-sel"))==null||p.addEventListener("change",x=>{l=x.target.value,c()}),(w=o.querySelector(".m-export-btn"))==null||w.addEventListener("click",()=>xt(t,s,d)),o.querySelectorAll(".m-chart-svg-wrap").forEach(x=>yt(x)),o.querySelectorAll(".m-list-row[data-action]").forEach(x=>{x.addEventListener("click",()=>I("Fonctionnalité à venir"))}),o.querySelectorAll(".m-widget-menu").forEach(x=>{x.addEventListener("click",L=>{L.stopPropagation(),I("Options widget")})}),(f=o.querySelector(".m-add-widget-btn"))==null||f.addEventListener("click",()=>I("Catalogue de widgets — à venir"))}o.querySelectorAll(".m-detail-tab").forEach(m=>{m.addEventListener("click",()=>{o.querySelectorAll(".m-detail-tab").forEach(p=>p.classList.remove("active")),m.classList.add("active"),a=m.dataset.view,c()})}),o.querySelector(".m-detail-back").addEventListener("click",he),o.querySelector("#d-star").addEventListener("click",()=>{i=!i;const m=o.querySelector("#d-star");m.querySelector("i").className=i?"bi bi-star-fill":"bi bi-star",m.style.color=i?"#f5c842":"",I(i?"Ajouté aux favoris":"Retiré des favoris")}),o.querySelector("#d-plus").addEventListener("click",()=>{const m=`
      <button class="m-sheet-option" data-a="widget"><i class="bi bi-grid-1x2"></i> Widget</button>
      <button class="m-sheet-option" data-a="irrigation"><i class="bi bi-droplet"></i> Irrigation</button>
      <button class="m-sheet-option" data-a="capteur"><i class="bi bi-broadcast"></i> Capteur</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" style="color:#8e8e93" data-a="integration">
        <i class="bi bi-plug"></i> Intégration <span style="font-size:11px">(version web uniquement)</span>
      </button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`,p=document.createElement("div");p.innerHTML=m;const w=D({title:"Ajouter à la parcelle",body:p,doneLabel:"Fermer",onDone:()=>{}});p.querySelectorAll("[data-a]").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.a;w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{w.remove(),I(x==="integration"?"Disponible sur la version web":"Fonctionnalité à venir")},280)})})}),c()}const Mt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:pe},Symbol.toStringTag,{value:"Module"})),J=100,Lt={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function Y(t,s){const e=Lt[s];return e?q.some(a=>a.parcelId===t.id&&e.includes(a.model)):!0}const ee=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température air",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function At(t){switch(t){case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Tt(t,s){let e=t.querySelector("#parcelles-content");e||(e=document.createElement("div"),e.id="parcelles-content",t.appendChild(e));const a=s==="admin",d=R.filter(S=>S.id!==J),l=Object.fromEntries(R.map(S=>[S.id,S]));let i=null,n=null;const o={};let c="carte",r="pluie",b="7 derniers jours",m="all";function p(S){const k=`${S}-${r}-${b}`;return k in o||(o[k]=At(r)),o[k]}function w(S){var k;return((k=l[S.orgId])==null?void 0:k.ville)||null}function f(){return a?m==="all"?P:m===String(J)?P.filter(S=>S.orgId===J):P.filter(S=>String(S.orgId)===m):P.filter(S=>S.orgId===1)}function x(){if(i){try{i.remove()}catch{}i=null,n=null}}function L(){x();const S=ee.find(u=>u.id===r)||ee[0],k=f(),E=a?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${J}"${m===String(J)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${d.map(u=>`<option value="${u.id}"${m===String(u.id)?" selected":""}>${u.name}</option>`).join("")}
      </select>`:"",h=[...k].sort((u,g)=>{const y=Y(u,r),$=Y(g,r);return y&&!$?-1:!y&&$?1:y?p(g.id)-p(u.id):0}),v=h.length?`<div class="m-plain-list">${h.map(u=>{const g=w(u),y=Y(u,r);return`
            <div class="m-plain-row m-tappable" data-plot-id="${u.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${u.name}</span>
                ${g?`<span class="m-plain-city">${g}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${y?"":" m-plain-na"}">${y?`${p(u.id)} ${S.unit}`:"—"}</span>
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';e.innerHTML=`
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
            ${ee.map(u=>`<option value="${u.id}"${u.id===r?" selected":""}>${u.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${S.aggs.map(u=>`<option${u===b?" selected":""}>${u}</option>`).join("")}
          </select>
        </div>
        ${E}
      </div>
      ${c==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${v}</div>`}`,T(),c==="carte"&&M(k,S)}function M(S,k){const E=window.L;E&&setTimeout(()=>{const h=e.querySelector("#parcel-map");if(!h)return;i=E.map(h,{zoomControl:!1,attributionControl:!1}),E.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(i);const v=[];S.forEach(u=>{const g=Y(u,r)?`${p(u.id)} ${k.unit}`:"—",y=q.filter(H=>H.parcelId===u.id).map(H=>H.id),$=()=>pe(u,y),A=[u.lat,u.lng];u.latlngs&&u.latlngs.length>=3?(E.polygon(u.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(i).on("click",$),v.push(...u.latlngs)):v.push(A);const C=Y(u,r),j=E.circleMarker(A,{radius:C?8:6,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:C?.95:.4}).addTo(i);C&&j.bindTooltip(g,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),j.on("click",$)}),v.length&&(n=v,i.fitBounds(v,{padding:[32,32]})),i.invalidateSize()},0)}window.addEventListener("m-tab-change",S=>{S.detail==="parcelles"&&c==="carte"&&i&&setTimeout(()=>{i.invalidateSize(),n!=null&&n.length&&i.fitBounds(n,{padding:[32,32]})},50)});function T(){var S,k,E;e.querySelectorAll(".m-view-btn").forEach(h=>h.addEventListener("click",()=>{c=h.dataset.view,L()})),(S=e.querySelector("#metric-sel"))==null||S.addEventListener("change",h=>{var v;r=h.target.value,b=((v=ee.find(u=>u.id===r))==null?void 0:v.defaultAgg)||"",L()}),(k=e.querySelector("#agg-sel"))==null||k.addEventListener("change",h=>{b=h.target.value,L()}),(E=e.querySelector("#org-filter"))==null||E.addEventListener("change",h=>{m=h.target.value,L()}),e.querySelectorAll(".m-tappable[data-plot-id]").forEach(h=>{h.addEventListener("click",()=>{const v=P.find(g=>g.id===+h.dataset.plotId);if(!v)return;const u=q.filter(g=>g.parcelId===v.id).map(g=>g.id);pe(v,u)})})}L()}const Oe={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},kt={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"},Ne={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#e07050",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#80c8e8",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}]};function ye(t,s){const e={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[t]||{base:50,amp:20,min:0};return Array.from({length:s},(a,d)=>{const l=d/s*Math.PI*4;if(e.sparse&&Math.random()>.25)return 0;const i=e.base+e.amp*Math.sin(l-1)+(Math.random()-.5)*e.amp*.5;return Math.max(e.min??0,Math.min(e.max??9999,i))})}const $e={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Ct(t,s,e,a,d,l=20){const i=$e[t]||10080,n=new Date,o=m=>t==="1d"||t==="hier"?`${String(m.getHours()).padStart(2,"0")}h`:t==="365d"?m.toLocaleDateString("fr-FR",{month:"short"}):`${String(m.getDate()).padStart(2,"0")}/${String(m.getMonth()+1).padStart(2,"0")}`,c=4,r=s-e-a,b=d-l;return Array.from({length:c+1},(m,p)=>{const w=p/c,f=new Date(n.getTime()-(1-w)*i*6e4),x=(e+w*r).toFixed(1),L=p===0?"start":p===c?"end":"middle";return[`<line x1="${x}" y1="${b}" x2="${x}" y2="${b+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${x}" y="${d-3}" text-anchor="${L}" font-size="9" fill="#8e8e93" font-family="-apple-system">${o(f)}</text>`].join("")}).join("")}function It(t,s,e,a="7d"){const d=we[a]||60,l=ye(t,d),i=320,n=100,o=34,c=6,r=10,b=20,m=i-o-c,p=n-r-b,w=e?0:Math.min(...l),f=Math.max(...l,w+.001),x=f-w,L=$=>o+$/(l.length-1)*m,M=$=>r+p-($-w)/x*p,T=`g${Math.random().toString(36).slice(2,8)}`,S=[0,.5,1].map($=>{const A=w+$*x,C=r+p-$*p;return`<text x="${o-3}" y="${(C+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${A<10?A.toFixed(1):Math.round(A)}</text>`}).join(""),k=[.25,.5,.75].map($=>`<line x1="${o}" y1="${(r+p-$*p).toFixed(1)}" x2="${i-c}" y2="${(r+p-$*p).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),E=`<line x1="${o}" y1="${r+p}" x2="${i-c}" y2="${r+p}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,h=Ct(a,i,o,c,n);if(e){const $=m/l.length*.7;return`<svg viewBox="0 0 ${i} ${n}" width="100%" height="${n}" preserveAspectRatio="none">
      ${S}${k}${E}
      ${l.map((A,C)=>{const j=(A-w)/x*p,H=r+p-j;return`<rect x="${(L(C)-$/2).toFixed(1)}" y="${H.toFixed(1)}" width="${$.toFixed(1)}" height="${j.toFixed(1)}" fill="${s}" opacity=".75" rx="1"/>`}).join("")}
      ${h}
    </svg>`}const u=l.map(($,A)=>[L(A),M($)]).map(([$,A],C)=>`${C?"L":"M"}${$.toFixed(1)},${A.toFixed(1)}`).join(" "),g=`${u} L${L(l.length-1).toFixed(1)},${(r+p).toFixed(1)} L${o},${(r+p).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:l.map($=>+$.toFixed(2)),minV:+w.toFixed(2),maxV:+f.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${i} ${n}" width="100%" height="${n}" preserveAspectRatio="none">
      <defs><linearGradient id="${T}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${S}${k}${E}
      <path d="${g}" fill="url(#${T})"/>
      <path d="${u}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${h}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Pt(t){const s=JSON.parse(decodeURIComponent(t.dataset.chart||"{}"));if(!s.vals)return;const{vals:e}=s,a=t.querySelector(".m-chart-tip"),d=t.querySelector(".m-chart-crosshair"),l=t.dataset.color||"#0172A4";function i(o){const c=t.getBoundingClientRect(),r=Math.max(0,Math.min(1,(o-c.left)/c.width)),b=Math.round(r*(e.length-1)),m=e[b],p=r*100;d.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${p}%;width:1px;background:${l};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(p,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=m<10?m.toFixed(1):String(Math.round(m))}function n(){d.style.display="none",a.style.display="none"}t.addEventListener("pointermove",o=>{o.preventDefault(),i(o.clientX)}),t.addEventListener("pointerdown",o=>i(o.clientX)),t.addEventListener("pointerup",n),t.addEventListener("pointerleave",n),t.style.cursor="crosshair"}const we={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function qt(t,s,e){if(!e)return"";const a=we[s]||60,l=($e[s]||10080)/(a*60),i=ye(t,a);let n=[];if(e==="temp"){const o=i.reduce((r,b)=>r+Math.max(0,b),0)*(l/24),c=i.filter(r=>r<7).length*l;n=[{label:"Degrés jours",val:`${Math.round(o)} DJ`},{label:"Heures de froid",val:`${Math.round(c)} h`}]}else if(e==="pluie")n=[{label:"Cumul pluie",val:`${i.reduce((c,r)=>c+r,0).toFixed(1)} mm`}];else if(e==="rayo"){const o=i.filter(c=>c>120).length*l;n=[{label:"Ensoleillement",val:`${Math.round(o)} h`}]}else if(e==="hws"){const o=i.filter(c=>c>50).length*l;n=[{label:"Heures d'humectation",val:`${Math.round(o)} h`}]}return n.length?`<div class="m-chart-cumuls">${n.map(o=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${o.label}</span>
      <span class="m-chart-cumul-val">${o.val}</span>
    </div>`).join("")}</div>`:""}function jt(t,s){const e=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:s});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function Ht(t,s){const e=Ne[t.model]||[];if(!e.length)return;const a=we[s]||60,d=$e[s]||10080,l=d/a*6e4,i=new Date,n=new Date(i-d*6e4),o=["Horodatage",...e.map(r=>`${r.label} (${r.unit})`)].join(";"),c=Array.from({length:a},(r,b)=>[new Date(n.getTime()+b*l).toISOString().replace("T"," ").slice(0,19),...e.map(p=>ye(p.id,1)[0].toFixed(2))].join(";"));jt([o,...c].join(`\r
`),`${t.serial}_${s}_${new Date().toISOString().slice(0,10)}.csv`)}function _t(t,s="7d",e="1h"){const a=Ne[t.model]||[];if(!a.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const d=a.map(l=>`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${l.color}">${l.label}</span>
        </div>
        ${It(l.id,l.color,l.cumul,s)}
        ${qt(l.id,s,l.cumulsType)}
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
    <div class="m-detail-section">${d}</div>`}function Dt(t){const s=t.parcelId?P.find(i=>i.id===t.parcelId):null,e=s?R.find(i=>i.id===s.orgId):null,a=t.networkQuality||0,d=a>70?"#30d158":a>40?"#ff9f0a":"#ff3b30",l=t.event?[t.event]:[];return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${kt[t.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${t.model} — ${Oe[t.model]||t.model}</span>
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
        ${l.length?l.map(i=>`<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${i}</span></div>`).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
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
    </div>`}function je(t){var b;const s=t.parcelId?P.find(m=>m.id===t.parcelId):null;let e="donnees",a="7d",d="1h",l=!1;const i=s&&((b=R.find(m=>m.id===s.orgId))==null?void 0:b.ville)||"",n=ve(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${t.serial}</div>
          <div class="m-detail-subtitle">${[Oe[t.model]||t.model,i].filter(Boolean).join(" · ")}</div>
        </div>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function o(){const m=n.querySelector("#detail-content");e==="donnees"&&(m.innerHTML=_t(t,a,d)),e==="params"&&(m.innerHTML=Dt(t),c()),r()}function c(){const m=window.L;!m||!s||setTimeout(()=>{const p=n.querySelector("#sensor-minimap");if(!p)return;const w=m.map(p,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});m.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(w),w.setView([s.lat,s.lng],15),m.circleMarker([s.lat,s.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(w)},50)}function r(){var m,p,w;(m=n.querySelector(".m-period-sel"))==null||m.addEventListener("change",f=>{a=f.target.value,o()}),(p=n.querySelector(".m-step-sel"))==null||p.addEventListener("change",f=>{d=f.target.value,o()}),(w=n.querySelector(".m-export-btn"))==null||w.addEventListener("click",()=>Ht(t,a)),n.querySelectorAll(".m-chart-svg-wrap").forEach(f=>Pt(f)),n.querySelectorAll(".m-list-row[data-action]").forEach(f=>{f.addEventListener("click",()=>I("Fonctionnalité à venir"))})}n.querySelectorAll(".m-detail-tab").forEach(m=>{m.addEventListener("click",()=>{n.querySelectorAll(".m-detail-tab").forEach(p=>p.classList.remove("active")),m.classList.add("active"),e=m.dataset.view,o()})}),n.querySelector(".m-detail-back").addEventListener("click",he),n.querySelector("#d-star").addEventListener("click",()=>{l=!l;const m=n.querySelector("#d-star");m.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",m.style.color=l?"#f5c842":"",I(l?"Ajouté aux favoris":"Retiré des favoris")}),n.querySelector("#d-plus").addEventListener("click",()=>{const m=`
      <button class="m-sheet-option" data-a="plot"><i class="bi bi-map"></i> Parcelle</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" data-a="maintenance"><i class="bi bi-tools"></i> Opération de maintenance</button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`,p=document.createElement("div");p.innerHTML=m;const w=D({title:"Ajouter au capteur",body:p,doneLabel:"Fermer",onDone:()=>{}});p.querySelectorAll("[data-a]").forEach(f=>{f.addEventListener("click",()=>{w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{w.remove(),I("Fonctionnalité à venir")},280)})})}),o()}const U=100,He=1,me=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Rt={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},Ft={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function te(t,s){return(Ft[t]||[]).includes(s)}function Ot(t){return Rt[t]||t}const se=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Nt(t){switch(t){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function zt(t,s){let e=t.querySelector("#capteurs-content");e||(e=document.createElement("div"),e.id="capteurs-content",t.appendChild(e));const a=s==="admin",d=R.filter(E=>E.id!==U),l=Object.fromEntries(P.map(E=>[E.id,E])),i=Object.fromEntries(R.map(E=>[E.id,E]));let n=null,o=null;const c={};let r="carte",b="pluie",m="7 derniers jours",p="all";function w(E){const h=`${E}-${b}-${m}`;return h in c||(c[h]=Nt(b)),c[h]}function f(){if(a){if(p==="all")return q;if(p===String(U)){const g=new Set(P.filter(y=>y.orgId===U).map(y=>y.id));return q.filter(y=>g.has(y.parcelId))}const u=new Set(P.filter(g=>String(g.orgId)===p).map(g=>g.id));return q.filter(g=>u.has(g.parcelId))}const E=new Set(P.filter(u=>u.orgId===He).map(u=>u.id)),h=q.filter(u=>E.has(u.parcelId)),v=q.filter(u=>!E.has(u.parcelId)&&me.includes(u.model));return p==="mine"?h:p==="network"?v:[...h,...v]}function x(E){const h=E.parcelId?l[E.parcelId]:null;if(!h)return null;const v=(E.id*7919%1e3-500)/1e6,u=(E.id*6271%1e3-500)/1e6;return{lat:h.lat+v,lng:h.lng+u,name:h.name}}function L(E){var v;const h=E.parcelId?l[E.parcelId]:null;return h&&((v=i[h.orgId])==null?void 0:v.ville)||null}function M(){if(n){try{n.remove()}catch{}n=null,o=null}}function T(){M();const E=se.find(y=>y.id===b)||se[0],h=f();let v;if(a)v=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${U}"${p===String(U)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${d.map(y=>`<option value="${y.id}"${p===String(y.id)?" selected":""}>${y.name}</option>`).join("")}
        </select>`;else{const y=R.find(A=>A.id===He),$=R.find(A=>A.id===U);v=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${p==="all"?" selected":""}>Tout le réseau</option>
          <option value="mine"${p==="mine"?" selected":""}>${(y==null?void 0:y.name)||"Mon organisation"}</option>
          <option value="network"${p==="network"?" selected":""}>${($==null?void 0:$.name)||"Breiz'Agri Conseil"}</option>
        </select>`}const u=[...h].sort((y,$)=>{const A=te(y.model,b),C=te($.model,b);return A&&!C?-1:!A&&C?1:A?w($.id)-w(y.id):0}),g=u.length?`<div class="m-plain-list">${u.map(y=>{const $=me.includes(y.model),C=te(y.model,b)?`<span class="m-sensor-val">${w(y.id)} ${E.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${y.id}">
              <div class="m-sensor-icon" style="background:${$?"#0172A420":"#5b8dd920"};color:${$?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${Ot(y.model)}</span>
                <span class="m-sensor-sub">${y.serial}${L(y)?` · ${L(y)}`:""}</span>
              </div>
              ${C}
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';e.innerHTML=`
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
            ${se.map(y=>`<option value="${y.id}"${y.id===b?" selected":""}>${y.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${E.aggs.map(y=>`<option${y===m?" selected":""}>${y}</option>`).join("")}
          </select>
        </div>
        ${v}
      </div>
      ${r==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${g}</div>`}`,k(),r==="carte"&&S(h,E)}function S(E,h){const v=window.L;v&&setTimeout(()=>{const u=e.querySelector("#sensor-map");if(!u)return;n=v.map(u,{zoomControl:!1,attributionControl:!1}),v.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(n);const g=[];E.forEach(y=>{const $=x(y);if(!$)return;const A=te(y.model,b),C=me.includes(y.model),j=v.circleMarker([$.lat,$.lng],{radius:A?10:7,color:"#fff",weight:2,fillColor:C?"#0172A4":"#5b8dd9",fillOpacity:A?.95:.45}).addTo(n);A&&j.bindTooltip(`${w(y.id)} ${h.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),j.on("click",()=>je(y)),g.push([$.lat,$.lng])}),g.length&&(o=g,n.fitBounds(g,{padding:[32,32]})),n.invalidateSize()},0)}window.addEventListener("m-tab-change",E=>{E.detail==="capteurs"&&r==="carte"&&n&&setTimeout(()=>{n.invalidateSize(),o!=null&&o.length&&n.fitBounds(o,{padding:[32,32]})},50)});function k(){var E,h,v;e.querySelectorAll(".m-view-btn").forEach(u=>u.addEventListener("click",()=>{r=u.dataset.view,T()})),(E=e.querySelector("#metric-sel"))==null||E.addEventListener("change",u=>{var g;b=u.target.value,m=((g=se.find(y=>y.id===b))==null?void 0:g.defaultAgg)||"",T()}),(h=e.querySelector("#agg-sel"))==null||h.addEventListener("change",u=>{m=u.target.value,T()}),(v=e.querySelector("#org-filter"))==null||v.addEventListener("change",u=>{p=u.target.value,T()}),e.querySelectorAll(".m-tappable[data-sensor-id]").forEach(u=>{u.addEventListener("click",()=>{const g=q.find(y=>y.id===+u.dataset.sensorId);g&&je(g)})})}T()}const ue=100,_e=1,Bt=["Arboriculture","Viticulture","Maraîchage","Grandes cultures","Polyculture-Élevage","Pépiniériste","Floriculture","Trufficulture","Organismes publics / semi-publics","Coopérative","Négoce","Concessionnaire","Semencier","Laboratoire / Institut / Recherche","Autre"],Wt=["Essentiel","Plus","Expert"],Vt=["Administrateur","Agent","Lecteur"];function Gt(t){const s=(t||"").match(/(\d{5})/);if(s){const e=t.indexOf(s[0]);return{rue:t.slice(0,e).trim().replace(/,\s*$/,""),cp:s[0],ville:t.slice(e+5).trim().replace(/^,?\s*/,"")}}return{rue:t||"",cp:"",ville:""}}function De({rue:t,cp:s,ville:e}){return[t,s&&e?`${s} ${e}`:s||e].filter(Boolean).join(", ")}function Ut(t){const[s,e,a]=t.split("-");return`${a}/${e}/${s}`}function Jt(t,s){if(!t)return{};const e=s==="admin",a=R.find(h=>h.id===(e?ue:_e));if(!a)return{};const l=(e?oe.filter(h=>{var v;return!((v=h.orgIds)!=null&&v.length)||h.orgIds.includes(ue)}):oe.filter(h=>{var v;return(v=h.orgIds)==null?void 0:v.includes(_e)})).map(h=>({...h})),i=R.filter(h=>h.id!==ue&&h.statut!=="inactif").length,n=Gt(a.adresse||""),o={rue:"",cp:"",ville:""},c={name:a.name,metiers:[e?"Coopérative":"Grandes cultures"],adresseFactu:n,adresseLivrai:o,markerLat:a.lat||48.117,markerLng:a.lng||-1.678,plan:a.plan||"Plus",contrat:{numero:e?"CTR-NET-2022-00001":a.codeAdherent||"CTR-2022-00418",dateAdhesion:a.dateAdhesion||"2022-03-15",licencesMembres:e?oe.length:3,licencesAdherents:e?i:null,licencesIntegrations:e?27:2}};let r=null,b=null,m=null;function p(){if(!m)return;const h=t.querySelector(`#${m}`);if(!h)return;if(r){try{r.remove()}catch{}r=null,b=null}const v=window.L;v&&(r=v.map(h,{zoomControl:!0,attributionControl:!1}),v.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(r),r.setView([c.markerLat,c.markerLng],14),b=v.marker([c.markerLat,c.markerLng],{draggable:!0}).addTo(r),b.on("dragend",()=>{const u=b.getLatLng();c.markerLat=u.lat,c.markerLng=u.lng,I("Position mise à jour")}),setTimeout(()=>r==null?void 0:r.invalidateSize(),50))}function w(){if(m=`expl-map-${Math.random().toString(36).slice(2,8)}`,r){try{r.remove()}catch{}r=null,b=null}const h=De(c.adresseFactu)||"—",v=De(c.adresseLivrai);t.innerHTML=`
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
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${h}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${v||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation <span style="font-size:11px;font-weight:400;color:#8e8e93">— déplacer le marqueur pour modifier</span></div>
      <div id="${m}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${c.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Ut(c.contrat.dateAdhesion)}</span>
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

      <div class="m-list-section-header">Membres (${l.length})</div>
      <div class="m-list">
        ${l.length?l.map((u,g)=>`
          <div class="m-list-row${g===l.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${g}">
            <div class="m-list-row-col">
              <span class="m-list-row-label">${u.prenom} ${u.nom}</span>
              <span class="m-list-row-sub">${u.role}</span>
            </div>
            <i class="bi bi-chevron-right m-list-chevron"></i>
          </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun membre</span></div>'}
      </div>
      <div style="height:32px"></div>`,f()}function f(){t.querySelectorAll(".m-list-row[data-action]").forEach(h=>{h.addEventListener("click",()=>{switch(h.dataset.action){case"name":x("Nom de l'exploitation",c.name,v=>{c.name=v,w()});break;case"metier":M();break;case"adresse-factu":L("Adresse de facturation",c.adresseFactu,v=>{c.adresseFactu=v,w()});break;case"adresse-livrai":L("Adresse de livraison",c.adresseLivrai,v=>{c.adresseLivrai=v,w()});break;case"plan":T("Abonnement",Wt,c.plan,v=>{c.plan=v,w()});break}})}),t.querySelectorAll("[data-member-idx]").forEach(h=>{h.addEventListener("click",()=>S(+h.dataset.memberIdx))})}function x(h,v,u){const g=document.createElement("div");g.innerHTML=`<input class="m-sheet-input" type="text" value="${(v||"").replace(/"/g,"&quot;")}" placeholder="${h}">`;const y=g.querySelector("input");D({title:h,body:g,doneLabel:"Enregistrer",onDone:()=>{const $=y.value.trim();$&&(u($),I("Enregistré"))}}),setTimeout(()=>y.focus(),300)}function L(h,v,u){const g=document.createElement("div");g.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(v.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${v.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(v.ville||"").replace(/"/g,"&quot;")}">`,D({title:h,body:g,doneLabel:"Enregistrer",onDone:()=>{u({rue:g.querySelector("#f-rue").value.trim(),cp:g.querySelector("#f-cp").value.trim(),ville:g.querySelector("#f-ville").value.trim()}),I("Enregistré")}}),setTimeout(()=>g.querySelector("#f-rue").focus(),300)}function M(){const h=new Set(c.metiers),v=document.createElement("div"),u=()=>{v.innerHTML=Bt.map(g=>`
        <div class="m-sheet-option${h.has(g)?" m-sheet-option--active":""}" data-m="${g}" style="justify-content:space-between">
          <span>${g}</span>
          ${h.has(g)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),v.querySelectorAll("[data-m]").forEach(g=>{g.addEventListener("click",()=>{const y=g.dataset.m;h.has(y)?h.delete(y):h.add(y),u()})})};u(),D({title:"Métiers",body:v,doneLabel:"Valider",onDone:()=>{c.metiers=[...h],w()}})}function T(h,v,u,g){const y=document.createElement("div");y.innerHTML=v.map((A,C)=>`
      <div class="m-sheet-option${A===u?" m-sheet-option--active":""}" data-i="${C}">
        <span>${A}</span>${A===u?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const $=D({title:h,body:y,doneLabel:"Fermer",onDone:()=>{}});y.querySelectorAll(".m-sheet-option").forEach(A=>{A.addEventListener("click",()=>{g(v[+A.dataset.i]),$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>$.remove(),280),I("Enregistré")})})}function S(h){const v=l[h];if(!v)return;const u=document.createElement("div");u.innerHTML=`
      <div class="m-sheet-links">
        <a class="m-sheet-link" id="mem-delete" style="color:#ff3b30">Supprimer ${v.prenom} ${v.nom}</a>
      </div>`;const g=D({title:`${v.prenom} ${v.nom}`,body:u,doneLabel:"Fermer",onDone:()=>{}});u.querySelector("#mem-delete").addEventListener("click",()=>{l.splice(h,1),g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{g.remove(),w()},280),I("Membre retiré")})}function k(){const h=document.createElement("div");h.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <input class="m-sheet-input" type="text" placeholder="Prénom Nom" id="inv-name">
      <select class="m-sheet-input" id="inv-role">
        ${Vt.map(v=>`<option>${v}</option>`).join("")}
      </select>`,D({title:"Inviter un membre",body:h,doneLabel:"Envoyer",onDone:()=>I("Invitation envoyée")}),setTimeout(()=>h.querySelector("#inv-email").focus(),300)}w();function E(){requestAnimationFrame(()=>setTimeout(p,100))}return{onAdd:k,refresh:E}}const Yt=100,Xt=["Essentiel","Plus","Expert"],Zt={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function Re(t){return Zt[t]||{label:t||"—",color:"#8e8e93"}}function Kt(t,s){if(!t)return{};if(s!=="admin")return t.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const e=R.filter(i=>i.id!==Yt).map(i=>({...i}));function a(){const i=e.filter(n=>n.statut!=="inactif");t.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Adhérents — ${i.length} actifs sur ${e.length}</div>
      <div class="m-list">
        ${e.map((n,o)=>{const c=Re(n.statut);return`
            <div class="m-list-row${o===e.length-1?" m-list-row--last":""} m-tappable" data-org-idx="${o}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${n.proprietaire||n.name}</span>
                <span class="m-list-row-sub">${n.name} · ${n.plan||"—"}</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${c.color};flex-shrink:0;margin-right:4px">${c.label}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join("")}
      </div>
      <div style="height:32px"></div>`,t.querySelectorAll("[data-org-idx]").forEach(n=>{n.addEventListener("click",()=>d(e[+n.dataset.orgIdx],+n.dataset.orgIdx))})}function d(i,n){var p,w;const o=Re(i.statut),c=i.statut==="invitation en attente",r=`https://app.weenat.com/invitation?code=${i.codeAdherent||"ADZ-XXX"}`,b=document.createElement("div");b.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email</span><span>${i.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${i.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${i.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${i.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${P.filter(f=>f.orgId===i.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const f=new Set(P.filter(x=>x.orgId===i.id).map(x=>x.id));return q.filter(x=>f.has(x.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${o.color};font-weight:600">${o.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${i.dateAdhesion?i.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${c?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const m=D({title:i.name,body:b,doneLabel:"Fermer",onDone:()=>{}});(p=b.querySelector("#lnk-copy"))==null||p.addEventListener("click",()=>{var f;(f=navigator.clipboard)==null||f.writeText(r).catch(()=>{}),I("Lien copié !")}),(w=b.querySelector("#lnk-cancel"))==null||w.addEventListener("click",()=>{i.statut="inactif",m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),a(),I("Invitation annulée")},280)}),b.querySelector("#lnk-delete").addEventListener("click",()=>{e.splice(n,1),m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),a(),I("Adhérent supprimé")},280)})}function l(){const i=document.createElement("div");i.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${Xt.map(n=>`<option>${n}</option>`).join("")}
      </select>`,D({title:"Inviter un adhérent",body:i,doneLabel:"Envoyer",onDone:()=>{const n=i.querySelector("#adh-email").value.trim(),o=i.querySelector("#adh-code").value.trim();if(!n||!o){I("Email et code requis");return}e.push({id:Date.now(),name:n,proprietaire:n,email:n,codeAdherent:o,plan:i.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),a(),I("Invitation envoyée")}}),setTimeout(()=>i.querySelector("#adh-email").focus(),300)}return a(),{onAdd:l}}const Qt=new URLSearchParams(window.location.search),z=Qt.get("role")==="adherent"?"adherent":"admin";function ze(){const t=document.getElementById("status-time");if(!t)return;const s=new Date;t.textContent=s.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}ze();setInterval(ze,1e4);const N=["dashboard","parcelles","capteurs","alertes","parametres"];let ne="dashboard";function X(t){var s,e;!N.includes(t)||t===ne||(ne=t,document.querySelectorAll(".m-screen").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),(s=document.getElementById(`screen-${t}`))==null||s.classList.add("active"),(e=document.querySelector(`.nav-item[data-tab="${t}"]`))==null||e.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})))}document.getElementById("bottom-nav").addEventListener("click",t=>{const s=t.target.closest(".nav-item");s&&X(s.dataset.tab)});let O=null,Z=null;const Be=50,K=document.getElementById("screen-stack");K.addEventListener("mousedown",t=>{if(t.target.closest(".leaflet-container")){O=null;return}O=t.clientX,Z=t.clientY});K.addEventListener("mouseup",t=>{if(O===null)return;const s=t.clientX-O,e=t.clientY-Z;if(Math.abs(s)>Be&&Math.abs(s)>Math.abs(e)){const a=N.indexOf(ne);s<0&&a<N.length-1&&X(N[a+1]),s>0&&a>0&&X(N[a-1])}O=null,Z=null});K.addEventListener("mouseleave",()=>{O=null});K.addEventListener("touchstart",t=>{if(t.target.closest(".leaflet-container")){O=null;return}O=t.touches[0].clientX,Z=t.touches[0].clientY},{passive:!0});K.addEventListener("touchend",t=>{if(O===null)return;const s=t.changedTouches[0].clientX-O,e=t.changedTouches[0].clientY-Z;if(Math.abs(s)>Be&&Math.abs(s)>Math.abs(e)){const a=N.indexOf(ne);s<0&&a<N.length-1&&X(N[a+1]),s>0&&a>0&&X(N[a-1])}O=null},{passive:!0});const es=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...z==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],le={};function ts(t){const s=document.getElementById("param-plus-btn"),e=document.getElementById("param-plus-spacer"),a=le[t];s&&e&&(a!=null&&a.onAdd?(s.style.display="",e.style.display="none",s.onclick=a.onAdd):(s.style.display="none",e.style.display=""))}function ss(){var s;const t=document.getElementById("param-segment");t&&(z==="adherent"&&((s=document.getElementById("param-reseau"))==null||s.style.setProperty("display","none")),es.forEach((e,a)=>{const d=document.createElement("button");d.className="m-segment-btn"+(a===0?" active":""),d.textContent=e.label,d.dataset.target=e.id,d.addEventListener("click",()=>{var l,i,n;t.querySelectorAll(".m-segment-btn").forEach(o=>o.classList.remove("active")),d.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(o=>o.classList.remove("active")),(l=document.getElementById(e.id))==null||l.classList.add("active"),ts(e.id),(n=(i=le[e.id])==null?void 0:i.refresh)==null||n.call(i)}),t.appendChild(d)}))}ss();vt(document.getElementById("screen-dashboard"),z);Tt(document.getElementById("screen-parcelles"),z);zt(document.getElementById("screen-capteurs"),z);tt(document.getElementById("screen-alertes"),z);Xe(document.getElementById("param-compte"),z);le["param-exploitation"]=Jt(document.getElementById("param-exploitation"),z);le["param-reseau"]=Kt(document.getElementById("param-reseau"),z);
