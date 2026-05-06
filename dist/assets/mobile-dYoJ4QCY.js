import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as C}from"./plots-kiLnwOqV.js";import{s as P}from"./sensors-BNMTTq_e.js";import{n as D}from"./network-YzWdS0n_.js";import{o as O}from"./orgs-Cx4wNzLL.js";const le={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Se=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],ne=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let F={};function I(e){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function B({title:e,body:s,onDone:t,doneLabel:a="OK"}){var n;const c=document.getElementById("phone-screen");(n=document.querySelector(".m-sheet-overlay"))==null||n.remove();const i=document.createElement("div");i.className="m-sheet-overlay",i.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${a}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,i.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),c.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const l=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};return i.querySelector(".m-sheet-cancel").addEventListener("click",l),i.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),l()}),i.addEventListener("click",o=>{o.target===i&&l()}),i}function oe(e,s,t){const a=document.createElement("div");a.innerHTML=`<input class="m-sheet-input" type="text" value="${s}" placeholder="${e}">`;const c=a.querySelector("input");B({title:e,body:a,doneLabel:"Enregistrer",onDone:()=>{t(c.value.trim()),I("Enregistré")}}),setTimeout(()=>c.focus(),300)}function re(e,s,t,a){const c=document.createElement("div");c.innerHTML=s.map((l,n)=>`
    <div class="m-sheet-option${l===t?" m-sheet-option--active":""}" data-i="${n}">
      <span>${l}</span>
      ${l===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const i=B({title:e,body:c,doneLabel:"Fermer",onDone:()=>{}});c.querySelectorAll(".m-sheet-option").forEach(l=>{l.addEventListener("click",()=>{a(s[+l.dataset.i]),i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280),I("Enregistré")})})}function Ae(e,s){const t=document.createElement("div"),a=()=>{var c;t.innerHTML=e.map((i,l)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${l}" data-f="label" value="${i.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${l}" data-f="numero" value="${i.numero}" placeholder="+33 6…">
        </div>
        ${l>0?`<button class="m-sheet-remove" data-i="${l}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(i=>{i.addEventListener("input",()=>{e[+i.dataset.i][i.dataset.f]=i.value})}),t.querySelectorAll(".m-sheet-remove").forEach(i=>{i.addEventListener("click",()=>{e.splice(+i.dataset.i,1),a()})}),(c=t.querySelector(".m-sheet-add-phone"))==null||c.addEventListener("click",()=>{e.push({label:"",numero:""}),a()})};a(),B({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{s(e),I("Enregistré")}})}function Te(e,s,t){const a=document.createElement("div");a.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,a.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var i;(i=navigator.clipboard)==null||i.writeText(e.value).catch(()=>{}),I("Clé copiée !")});const c=B({title:"Clé API",body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const i=s.findIndex(l=>l.id===e.id);i!==-1&&s.splice(i,1),c.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{c.remove(),t()},280),I("Clé supprimée")})}function Ce(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function ke(e){const s=document.createElement("div");s.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=s.querySelector("input");B({title:"Nouvelle clé API",body:s,doneLabel:"Générer",onDone:()=>{const a=t.value.trim();if(!a){I("Entrez un nom");return}const c={id:Date.now(),name:a,created:new Date().toLocaleDateString("fr-FR"),value:Ce()};e(c),I("Clé générée")}}),setTimeout(()=>t.focus(),300)}function Pe(e,s){F={profile:JSON.parse(JSON.stringify(le[s]||le.admin)),langue:"Français",unites:ne[0]};const a=localStorage.getItem("mobile_avatarUrl")||null;function c(){const l=F.profile,n=a?`<img src="${a}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${l.initials}</span>`,o=l.apiKeys.map(u=>`
      <div class="m-list-row" data-key-id="${u.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${u.name}</span>
          <span class="m-list-row-sub">créée le ${u.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),v=l.phones.map((u,g)=>`
      <div class="m-list-row${g===l.phones.length-1&&l.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${u.label||"Numéro "+(g+1)}</span>
        <span class="m-list-row-value">${u.numero}</span>
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
        ${v}
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
          <span class="m-list-row-value" id="val-langue">${F.langue}</span>
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
    `,i()}function i(){var n;const l=F.profile;(n=e.querySelector("#m-avatar-upload"))==null||n.addEventListener("change",o=>{const v=o.target.files[0];if(!v)return;const u=new FileReader;u.onload=g=>{localStorage.setItem("mobile_avatarUrl",g.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${g.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},u.readAsDataURL(v)}),e.querySelectorAll(".m-list-row[data-action]").forEach(o=>{o.addEventListener("click",()=>{switch(o.dataset.action){case"prenom":oe("Prénom",l.prenom,v=>{l.prenom=v,c()});break;case"nom":oe("Nom",l.nom,v=>{l.nom=v,c()});break;case"email":B({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${l.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>I("Fonctionnalité à venir")});break;case"phones":Ae(l.phones,v=>{l.phones=v,c()});break;case"mdp":B({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>I("Fonctionnalité à venir")});break;case"langue":re("Langue",Se,F.langue,v=>{F.langue=v,e.querySelector("#val-langue").textContent=v});break;case"unites":re("Unités",ne,F.unites,v=>{F.unites=v,e.querySelector("#val-unites").textContent=v.split(" ")[0]});break;case"gen-key":ke(v=>{l.apiKeys.push(v),c()});break;case"delete":I("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(o=>{o.addEventListener("click",()=>{const v=l.apiKeys.find(u=>u.id===+o.dataset.keyId);v&&Te(v,l.apiKeys,c)})}),e.querySelectorAll(".m-toggle input[data-notif]").forEach(o=>{o.addEventListener("change",()=>I("Préférence enregistrée"))})}c()}const qe={admin:100,adherent:1},q=[{id:"bilan_hydrique",title:"Bilan hydrique",icon:"bi-droplet-fill",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun-fill",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Données temps-réel",icon:"bi-activity",color:"#ff9f0a",active:!1,available:!1,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#bf5af2",active:!1,available:!1,fixed:!1},{id:"capteurs_fav",title:"Capteurs favoris",icon:"bi-star-fill",color:"#ff9f0a",active:!1,available:!1,fixed:!1},{id:"parcelles_fav",title:"Parcelles favorites",icon:"bi-bookmark-fill",color:"#30d158",active:!1,available:!1,fixed:!1},{id:"mon_secteur",title:"Mon secteur",icon:"bi-geo-alt-fill",color:"#ff6b6b",active:!1,available:!1,fixed:!1},{id:"traitements",title:"Traitements phytosanitaires",icon:"bi-shield-fill",color:"#4ecdc4",active:!1,available:!1,fixed:!1},{id:"cultures",title:"Cultures & Stades phénologiques",icon:"bi-flower1",color:"#a2c4c9",active:!1,available:!1,fixed:!1},{id:"evenements",title:"Capteurs avec événement en cours",icon:"bi-exclamation-triangle-fill",color:"#ff3b30",active:!1,available:!1,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3-fill",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Support",icon:"bi-question-circle-fill",color:"#30d158",active:!0,available:!0,fixed:!0}];function ce(e){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Z({title:e,body:s,doneLabel:t="Fermer",onDone:a}={}){var n;const c=document.getElementById("phone-screen");(n=document.querySelector(".m-sheet-overlay"))==null||n.remove();const i=document.createElement("div");i.className="m-sheet-overlay",i.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,i.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),c.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const l=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};return i.querySelector(".m-sheet-cancel").addEventListener("click",l),i.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),l()}),i.addEventListener("click",o=>{o.target===i&&l()}),i}const de=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#45b7d1"}];function me(){return[0,1,2].map(e=>{const s=new Date;s.setDate(s.getDate()+e);const t=de[Math.floor(Math.random()*de.length)],a=t.label==="Pluie"||t.label==="Averses",c=Math.round(8+Math.random()*8),i=Math.round(16+Math.random()*14);return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":s.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:s.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:a?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:c,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:i,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35)}})}function Ie(e){const s=Math.round(80+e.area*8),t=Math.round(s*(.35+Math.random()*.45)),a=Math.round(18+Math.random()*22),c=Math.round(Math.random()*20),i=Math.max(0,t-a+c),l=i<t?t-i:0;return{j0:t,j7:i,bilan:l}}const ie=8;function ue(e,s=!1){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const a=(s?e:e.slice(0,ie)).map(i=>{const{j0:l,j7:n,bilan:o}=Ie(i);return`
      <div class="m-bh-th-n">${i.name}</div>
      <div class="m-bh-td">${l}</div>
      <div class="m-bh-td">${n}</div>
      <div class="m-bh-td">${o>0?`${o} mm`:""}</div>`}).join(""),c=!s&&e.length>ie?`<button class="m-bh-expand" id="bh-expand">Afficher les ${e.length-ie} autres parcelles <i class="bi bi-chevron-down"></i></button>`:"";return`
    <div class="m-bh-table">
      <div class="m-bh-th"></div>
      <div class="m-bh-th">J0</div>
      <div class="m-bh-th">J+7</div>
      <div class="m-bh-th">🪣</div>
      ${a}
    </div>
    ${c}`}function je(e,s,t){const a=e.map(n=>{const o=[n.name,n.crop,n.ville].filter(Boolean).join(" · ");return`<option value="p-${n.id}">${o}</option>`}).join(""),c=s.map(n=>`<option value="s-${n.id}">${n.model} — ${n.serial}</option>`).join(""),i=`
    <optgroup label="Parcelles">${a}</optgroup>
    ${c?`<optgroup label="Capteurs">${c}</optgroup>`:""}`,l=t.map((n,o)=>{const v=`${n.dayLabel.charAt(0).toUpperCase()+n.dayLabel.slice(1)} · ${n.dateStr}`;return`
    <div class="m-prev-card" data-day="${o}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${n.icon}" style="color:${n.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${v}</span>
          <span class="m-prev-card-cond">${n.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-card-body">
        <div class="m-prev-row"><span>Pluie cumulée</span><strong>${n.pluie} mm</strong></div>
        <div class="m-prev-row"><span>ETP cumulée</span><strong>${n.etp} mm</strong></div>
        <div class="m-prev-row"><span>T° min</span><strong>${n.tMin}°C <em>${n.tMinHeure}</em></strong></div>
        <div class="m-prev-row"><span>T° max</span><strong>${n.tMax}°C <em>${n.tMaxHeure}</em></strong></div>
        <div class="m-prev-row"><span>Humidité moyenne</span><strong>${n.humMoy}%</strong></div>
        <div class="m-prev-row"><span>Vent moyen</span><strong>${n.ventMoy} km/h</strong></div>
        <div class="m-prev-row m-prev-row--last"><span>Rafales</span><strong>${n.ventRafales} km/h</strong></div>
      </div>
    </div>`}).join("");return`
    <select class="m-prev-select">${i}</select>
    <div class="m-prev-cards">${l}</div>`}function He(){const e=C.map(a=>a.orgId).filter((a,c,i)=>i.indexOf(a)===c&&a!==100).length,s=P.length,t=C.length;return`
    <div class="m-reseau-name">${D.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${e}</strong><span>Adhérents</span></div>
      <div class="m-reseau-stat"><strong>${t}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${s}</strong><span>Capteurs</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${D.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${D.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${D.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${D.siege.adresse}, ${D.siege.codePostal} ${D.siege.ville}</span></div>
    </div>`}function _e(){return`
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
    </a>`}const pe=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Fe(){var v;const e=document.getElementById("phone-screen");(v=document.querySelector(".m-sheet-overlay"))==null||v.remove();const s=document.createElement("div");s.className="m-sheet-overlay m-sheet-overlay--tall",s.innerHTML=`
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
    </div>`,e.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const t=s.querySelector("#chat-messages"),a=s.querySelector("#chat-input"),c=s.querySelector("#chat-send"),i=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#chat-close").addEventListener("click",i),s.addEventListener("click",u=>{u.target===s&&i()});function l(u,g){const d=document.createElement("div");d.className=`m-chat-msg m-chat-msg--${g}`,d.innerHTML=`<div class="m-chat-bubble">${u}</div>`,t.appendChild(d),t.scrollTop=t.scrollHeight}function n(){const u=document.createElement("div");return u.className="m-chat-msg m-chat-msg--bot m-chat-typing",u.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(u),t.scrollTop=t.scrollHeight,u}function o(){const u=a.value.trim();if(!u)return;l(u,"user"),a.value="",c.disabled=!0;const g=n();setTimeout(()=>{g.remove();const d=pe[Math.floor(Math.random()*pe.length)];l(d,"bot"),c.disabled=!1,a.focus()},1200+Math.random()*800)}c.addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&o()}),setTimeout(()=>a.focus(),350)}function Re(e,s){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const a=qe[s]||1,c=a===100?C:C.filter(r=>r.orgId===a),i=new Set(c.map(r=>r.id)),l=P.filter(r=>i.has(r.parcelId));let n=me();function o(r,b){const w=r.fixed?"":`<button class="m-widget-menu" data-widget="${r.id}" type="button">•••</button>`;return`
      <div class="m-widget" data-widget="${r.id}">
        <div class="m-widget-hd">
          <div class="m-widget-icon-wrap" style="background:${r.color}20;color:${r.color}">
            <i class="bi ${r.icon}"></i>
          </div>
          <span class="m-widget-title">${r.title}</span>
          ${w}
        </div>
        <div class="m-widget-bd">${b}</div>
      </div>`}function v(){n=me();const r=q.filter(w=>w.active&&!w.fixed),b=q.filter(w=>w.active&&w.fixed);t.innerHTML=`
      ${[...r,...b].map(w=>{let y="";return w.id==="bilan_hydrique"?y=ue(c,!1):w.id==="previsions"?y=je(c,l,n):w.id==="mon_reseau"?y=He():w.id==="support"&&(y=_e()),o(w,y)}).join("")}
      <div style="height:24px"></div>`,u()}function u(){var r,b,w;(r=e.querySelector(".m-navbar-action"))==null||r.addEventListener("click",d),(b=t.querySelector("#bh-expand"))==null||b.addEventListener("click",()=>{const y=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');y&&(y.innerHTML=ue(c,!0))}),(w=t.querySelector("#open-chat-btn"))==null||w.addEventListener("click",Fe),t.querySelectorAll(".m-prev-card").forEach(y=>{y.addEventListener("click",()=>{const M=n[+y.dataset.day];if(!M)return;const A=`
          <div class="m-prev-detail">
            <div class="m-prev-detail-top">
              <i class="bi ${M.icon}" style="color:${M.color};font-size:40px"></i>
              <div>
                <div class="m-prev-detail-cond">${M.label}</div>
                <div class="m-prev-detail-date">${M.dateStr}</div>
              </div>
            </div>
            <div class="m-prev-detail-grid">
              <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><span>Pluie</span><strong>${M.pluie} mm</strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-droplet-half"></i><span>ETP</span><strong>${M.etp} mm</strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><span>T° min</span><strong>${M.tMin}°C <small>${M.tMinHeure}</small></strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-thermometer-high"></i><span>T° max</span><strong>${M.tMax}°C <small>${M.tMaxHeure}</small></strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-moisture"></i><span>Humidité</span><strong>${M.humMoy}%</strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><span>Vent moy.</span><strong>${M.ventMoy} km/h</strong></div>
              <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><span>Rafales</span><strong>${M.ventRafales} km/h</strong></div>
            </div>
          </div>`;Z({title:M.dayLabel,body:A,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-widget-menu").forEach(y=>{y.addEventListener("click",M=>{M.stopPropagation();const A=q.find(S=>S.id===y.dataset.widget);if(!A)return;const T=document.createElement("div");T.innerHTML=`
          <button class="m-sheet-option" id="menu-config"><i class="bi bi-gear"></i> Configurer</button>
          <button class="m-sheet-option" id="menu-move"><i class="bi bi-arrow-down-up"></i> Déplacer</button>
          <button class="m-sheet-option" id="menu-remove" style="color:#ff3b30"><i class="bi bi-dash-circle"></i> Retirer</button>`;const E=Z({title:A.title,body:T,doneLabel:"Annuler",onDone:()=>{}});T.querySelector("#menu-config").addEventListener("click",()=>{E.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{E.remove(),ce("Configuration à venir")},280)}),T.querySelector("#menu-move").addEventListener("click",()=>{E.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{E.remove(),g()},280)}),T.querySelector("#menu-remove").addEventListener("click",()=>{A.active=!1,E.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{E.remove(),v()},280),ce("Widget retiré")})})})}function g(){const r=document.createElement("div"),b=()=>q.filter(y=>y.active&&!y.fixed),w=()=>{const y=b();r.innerHTML=y.map((M,A)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${M.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${A}" data-dir="-1" ${A===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${A}" data-dir="1" ${A===y.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),r.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(M=>{M.addEventListener("click",()=>{const A=b(),T=+M.dataset.i,E=T+ +M.dataset.dir,S=q.indexOf(A[T]),$=q.indexOf(A[E]);[q[S],q[$]]=[q[$],q[S]],w(),v()})})};w(),Z({title:"Réorganiser les widgets",body:r,doneLabel:"Fermer",onDone:()=>{}})}function d(){const r=document.createElement("div"),b=()=>{const w=q.filter(y=>!y.fixed);r.innerHTML=w.map(y=>`
        <div class="m-catalog-row${y.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${y.color}20;color:${y.color}"><i class="bi ${y.icon}"></i></div>
          <span class="m-catalog-title">${y.title}</span>
          ${y.available?`<button class="m-catalog-toggle${y.active?" m-catalog-toggle--on":""}" data-cid="${y.id}" type="button">
                <i class="bi ${y.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),r.querySelectorAll("[data-cid]").forEach(y=>{y.addEventListener("click",()=>{const M=q.find(A=>A.id===y.dataset.cid);M&&(M.active=!M.active,b(),v())})})};b(),Z({title:"Widgets disponibles",body:r,doneLabel:"Fermer",onDone:()=>{}})}v()}const fe=[];function ge(e){const s=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),fe.push(t),t}function ye(){const e=fe.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function R(e){var a;const s=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,s.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function $e({title:e,body:s,doneLabel:t="Fermer",onDone:a}={}){var n;const c=document.getElementById("phone-screen");(n=document.querySelector(".m-sheet-overlay"))==null||n.remove();const i=document.createElement("div");i.className="m-sheet-overlay",i.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,i.querySelector(".m-sheet-body").appendChild(typeof s=="string"?Object.assign(document.createElement("div"),{innerHTML:s}):s),c.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const l=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};return i.querySelector(".m-sheet-cancel").addEventListener("click",l),i.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),l()}),i.addEventListener("click",o=>{o.target===i&&l()}),i}const Oe={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#c090e0",cumul:!0},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#80c8e8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0},temperature:{label:"Température",unit:"°C",color:"#e07050",cumul:!1},humidite:{label:"Humidité air",unit:"%",color:"#4ecdc4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}},Ne={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function we(e,s){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:s},(a,c)=>{const i=c/s*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const l=t.base+t.amp*Math.sin(i-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,l))})}const De={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function Be(e,s,t,a="7d"){const c=De[a]||60,i=we(e,c),l=320,n=100,o=34,v=6,u=10,g=20,d=l-o-v,r=n-u-g,b=t?0:Math.min(...i),w=Math.max(...i,b+.001),y=w-b,M=f=>o+f/(i.length-1)*d,A=f=>u+r-(f-b)/y*r,T=`g${Math.random().toString(36).slice(2,8)}`,E=[0,.5,1].map(f=>{const p=b+f*y,L=u+r-f*r;return`<text x="${o-3}" y="${(L+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${p<10?p.toFixed(1):Math.round(p)}</text>`}).join(""),S=[.25,.5,.75].map(f=>{const p=(u+r-f*r).toFixed(1);return`<line x1="${o}" y1="${p}" x2="${l-v}" y2="${p}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join("");if(t){const f=d/i.length*.7,p=i.map((L,j)=>{const k=(L-b)/y*r,z=u+r-k;return`<rect x="${(M(j)-f/2).toFixed(1)}" y="${z.toFixed(1)}" width="${f.toFixed(1)}" height="${k.toFixed(1)}" fill="${s}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${l} ${n}" width="100%" height="${n}" preserveAspectRatio="none">${E}${S}${p}</svg>`}const h=i.map((f,p)=>[M(p),A(f)]).map(([f,p],L)=>`${L?"L":"M"}${f.toFixed(1)},${p.toFixed(1)}`).join(" "),x=`${h} L${M(i.length-1).toFixed(1)},${(u+r).toFixed(1)} L${o},${(u+r).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:i.map(f=>+f.toFixed(2)),minV:+b.toFixed(2),maxV:+w.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${l} ${n}" width="100%" height="${n}" preserveAspectRatio="none">
      <defs><linearGradient id="${T}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${E}${S}
      <path d="${x}" fill="url(#${T})"/>
      <path d="${h}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function ze(e,s){const t=Oe[e];if(!t)return"";const a=we(e,1)[0];return`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${t.color}">${t.label}</span>
        <span class="m-chart-current">${a<10?a.toFixed(1):Math.round(a)} <em>${t.unit}</em></span>
      </div>
      ${Be(e,t.color,t.cumul,s)}
    </div>`}function We(e){const s=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!s.vals)return;const{vals:t,minV:a,maxV:c}=s,i=e.querySelector(".m-chart-tip"),l=e.querySelector(".m-chart-crosshair"),n=e.dataset.color||"#0172A4";function o(u){const g=e.getBoundingClientRect(),d=Math.max(0,Math.min(1,(u-g.left)/g.width)),r=Math.round(d*(t.length-1)),b=t[r],w=d*100;l.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${w}%;width:1px;background:${n};opacity:.5`,i.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(w,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,i.textContent=b<10?b.toFixed(1):String(Math.round(b))}function v(){l.style.display="none",i.style.display="none"}e.addEventListener("pointermove",u=>{u.preventDefault(),o(u.clientX)}),e.addEventListener("pointerdown",u=>o(u.clientX)),e.addEventListener("pointerup",v),e.addEventListener("pointerleave",v),e.style.cursor="crosshair"}function Ve(){return`
    <div class="m-detail-section">
      ${["Bilan hydrique","Stades phénologiques","Alertes actives","Données temps-réel"].map(s=>`
        <div class="m-placeholder-widget">
          <span class="m-placeholder-widget-name">${s}</span>
          <button class="m-widget-menu" type="button">•••</button>
        </div>`).join("")}
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
    </div>`}function Ge(e,s="7d",t="1h"){const a=new Set;e.forEach(n=>{const o=P.find(v=>v.id===n);o&&(Ne[o.model]||[]).forEach(v=>a.add(v))});const c=[...new Set(["etp","rayonnement","temp_rosee",...a])];return`
    <div class="m-period-bar">
      <div class="m-period-pills">${Object.entries({"365d":"365j","30d":"30j","7d":"7j",hier:"Hier","1d":"Auj.",custom:"Perso"}).map(([n,o])=>`<button class="m-period-pill${n===s?" active":""}" data-period="${n}">${o}</button>`).join("")}</div>
      <select class="m-step-sel">
        <option value="1h"${t==="1h"?" selected":""}>Horaire</option>
        <option value="1d"${t==="1d"?" selected":""}>Journalier</option>
        <option value="1w"${t==="1w"?" selected":""}>Hebdo</option>
      </select>
    </div>
    <div class="m-detail-section">
      ${c.map(n=>ze(n,s)).join("")}
    </div>`}function Je(e,s,t){const a=t.map(c=>{const i=P.find(l=>l.id===c);return i?`${i.model} — ${i.serial}`:null}).filter(Boolean);return`
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
          <a class="m-itinerary-link" href="https://maps.apple.com/?q=${encodeURIComponent((s==null?void 0:s.ville)||"")}&sll=${e.lat},${e.lng}" target="_blank">
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
        ${a.length?a.map((c,i)=>`<div class="m-list-row${i===a.length-1?" m-list-row--last":""}">
              <span class="m-list-row-label">${c}</span>
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
    </div>`}function ve(e,s=[]){const t=O.find(d=>d.id===e.orgId);let a="widgets",c="7d",i="1h",l=!1;const n=(t==null?void 0:t.ville)||"",o=ge(`
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
    <div id="detail-content" class="m-detail-content"></div>`);function v(){const d=o.querySelector("#detail-content");a==="widgets"&&(d.innerHTML=Ve()),a==="donnees"&&(d.innerHTML=Ge(s,c,i)),a==="params"&&(d.innerHTML=Je(e,t,s),u()),g()}function u(){const d=window.L;d&&setTimeout(()=>{var w;const r=o.querySelector("#parcel-minimap");if(!r)return;const b=d.map(r,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(d.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(b),((w=e.latlngs)==null?void 0:w.length)>=3){const y=d.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(b);b.fitBounds(y.getBounds(),{padding:[8,8]})}else b.setView([e.lat,e.lng],14),d.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(b)},50)}function g(){var d,r;o.querySelectorAll(".m-period-pill").forEach(b=>{b.addEventListener("click",()=>{c=b.dataset.period,v()})}),(d=o.querySelector(".m-step-sel"))==null||d.addEventListener("change",b=>{i=b.target.value,v()}),o.querySelectorAll(".m-chart-svg-wrap").forEach(b=>We(b)),o.querySelectorAll(".m-list-row[data-action]").forEach(b=>{b.addEventListener("click",()=>R("Fonctionnalité à venir"))}),o.querySelectorAll(".m-widget-menu").forEach(b=>{b.addEventListener("click",w=>{w.stopPropagation(),R("Options widget")})}),(r=o.querySelector(".m-add-widget-btn"))==null||r.addEventListener("click",()=>R("Catalogue de widgets — à venir"))}o.querySelectorAll(".m-detail-tab").forEach(d=>{d.addEventListener("click",()=>{o.querySelectorAll(".m-detail-tab").forEach(r=>r.classList.remove("active")),d.classList.add("active"),a=d.dataset.view,v()})}),o.querySelector(".m-detail-back").addEventListener("click",ye),o.querySelector("#d-star").addEventListener("click",()=>{l=!l;const d=o.querySelector("#d-star");d.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",d.style.color=l?"#f5c842":"",R(l?"Ajouté aux favoris":"Retiré des favoris")}),o.querySelector("#d-plus").addEventListener("click",()=>{const d=`
      <button class="m-sheet-option" data-a="widget"><i class="bi bi-grid-1x2"></i> Widget</button>
      <button class="m-sheet-option" data-a="irrigation"><i class="bi bi-droplet"></i> Irrigation</button>
      <button class="m-sheet-option" data-a="capteur"><i class="bi bi-broadcast"></i> Capteur</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" style="color:#8e8e93" data-a="integration">
        <i class="bi bi-plug"></i> Intégration <span style="font-size:11px">(version web uniquement)</span>
      </button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`,r=document.createElement("div");r.innerHTML=d;const b=$e({title:"Ajouter à la parcelle",body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll("[data-a]").forEach(w=>{w.addEventListener("click",()=>{const y=w.dataset.a;b.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{b.remove(),R(y==="integration"?"Disponible sur la version web":"Fonctionnalité à venir")},280)})})}),v()}const G=100,Ue={pluie:["P+","PT","P"]};function X(e,s){const t=Ue[s];return t?P.some(a=>a.parcelId===e.id&&t.includes(a.model)):!0}const Q=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température air",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité air",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"}];function Ye(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);default:return+(Math.random()*100).toFixed(1)}}function Ke(e,s){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const a=s==="admin",c=O.filter(E=>E.id!==G),i=Object.fromEntries(O.map(E=>[E.id,E]));let l=null,n=null;const o={};let v="carte",u="pluie",g="7 derniers jours",d="all";function r(E){const S=`${E}-${u}-${g}`;return S in o||(o[S]=Ye(u)),o[S]}function b(E){var S;return((S=i[E.orgId])==null?void 0:S.ville)||null}function w(){return a?d==="all"?C:d===String(G)?C.filter(E=>E.orgId===G):C.filter(E=>String(E.orgId)===d):C.filter(E=>E.orgId===1)}function y(){if(l){try{l.remove()}catch{}l=null,n=null}}function M(){y();const E=Q.find(m=>m.id===u)||Q[0],S=w(),$=a?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${G}"${d===String(G)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${c.map(m=>`<option value="${m.id}"${d===String(m.id)?" selected":""}>${m.name}</option>`).join("")}
      </select>`:"",h=[...S].sort((m,f)=>{const p=X(m,u),L=X(f,u);return p&&!L?-1:!p&&L?1:p?r(f.id)-r(m.id):0}),x=h.length?`<div class="m-plain-list">${h.map(m=>{const f=b(m),p=X(m,u);return`
            <div class="m-plain-row m-tappable" data-plot-id="${m.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${m.name}</span>
                ${f?`<span class="m-plain-city">${f}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${p?"":" m-plain-na"}">${p?`${r(m.id)} ${E.unit}`:"—"}</span>
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';t.innerHTML=`
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${v==="carte"?" m-view-btn--on":""}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${v==="liste"?" m-view-btn--on":""}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${Q.map(m=>`<option value="${m.id}"${m.id===u?" selected":""}>${m.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${E.aggs.map(m=>`<option${m===g?" selected":""}>${m}</option>`).join("")}
          </select>
        </div>
        ${$}
      </div>
      ${v==="carte"?'<div id="parcel-map" class="m-map-container"></div>':x}`,T(),v==="carte"&&A(S,E)}function A(E,S){const $=window.L;$&&setTimeout(()=>{const h=t.querySelector("#parcel-map");if(!h)return;l=$.map(h,{zoomControl:!1,attributionControl:!1}),$.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l);const x=[];E.forEach(m=>{var z,V;const f=X(m,u)?`${r(m.id)} ${S.unit}`:m.name,p=P.filter(N=>N.parcelId===m.id).map(N=>N.id),L=()=>ve(m,p),j=[m.lat,m.lng];if(m.latlngs&&m.latlngs.length>=3){const N=$.polygon(m.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(l);N.bindTooltip(f,{permanent:!0,direction:"center",className:"m-map-tip",interactive:!0}),N.on("click",L),(z=N.getTooltip())==null||z.on("click",L),x.push(...m.latlngs)}const k=$.circleMarker(j,{radius:7,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(l);k.on("click",L),m.latlngs?x.push(...m.latlngs):(k.bindTooltip(f,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),(V=k.getTooltip())==null||V.on("click",L),x.push(j))}),x.length&&(n=x,l.fitBounds(x,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",E=>{E.detail==="parcelles"&&v==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),n!=null&&n.length&&l.fitBounds(n,{padding:[32,32]})},50)});function T(){var E,S,$;t.querySelectorAll(".m-view-btn").forEach(h=>h.addEventListener("click",()=>{v=h.dataset.view,M()})),(E=t.querySelector("#metric-sel"))==null||E.addEventListener("change",h=>{var x;u=h.target.value,g=((x=Q.find(m=>m.id===u))==null?void 0:x.defaultAgg)||"",M()}),(S=t.querySelector("#agg-sel"))==null||S.addEventListener("change",h=>{g=h.target.value,M()}),($=t.querySelector("#org-filter"))==null||$.addEventListener("change",h=>{d=h.target.value,M()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(h=>{h.addEventListener("click",()=>{const x=C.find(f=>f.id===+h.dataset.plotId);if(!x)return;const m=P.filter(f=>f.parcelId===x.id).map(f=>f.id);ve(x,m)})})}M()}const xe={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},Ze={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"},Xe={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1},{id:"humidite",label:"Humidité air",unit:"%",color:"#4ecdc4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1},{id:"humidite",label:"Humidité air",unit:"%",color:"#4ecdc4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1},{id:"humidite",label:"Humidité air",unit:"%",color:"#4ecdc4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#e07050",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#80c8e8",cumul:!1}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}]};function Me(e,s){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8}}[e]||{base:50,amp:20,min:0};return Array.from({length:s},(a,c)=>{const i=c/s*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const l=t.base+t.amp*Math.sin(i-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,l))})}function Qe(e,s,t){const a=Me(e,42),c=320,i=72,l=34,n=6,o=6,v=18,u=c-l-n,g=i-o-v,d=t?0:Math.min(...a),r=Math.max(...a,d+.001),b=r-d,w=h=>l+h/(a.length-1)*u,y=h=>o+g-(h-d)/b*g,M=`g${Math.random().toString(36).slice(2,8)}`,A=[0,.5,1].map(h=>{const x=d+h*b,m=o+g-h*g;return`<text x="${l-3}" y="${(m+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${x<10?x.toFixed(1):Math.round(x)}</text>`}).join("");if(t){const h=u/a.length*.7;return`<svg viewBox="0 0 ${c} ${i}" width="100%" height="${i}" preserveAspectRatio="none">
      ${A}
      ${a.map((x,m)=>{const f=(x-d)/b*g,p=o+g-f;return`<rect x="${(w(m)-h/2).toFixed(1)}" y="${p.toFixed(1)}" width="${h.toFixed(1)}" height="${f.toFixed(1)}" fill="${s}" opacity=".75" rx="1"/>`}).join("")}
    </svg>`}const E=a.map((h,x)=>[w(x),y(h)]).map(([h,x],m)=>`${m?"L":"M"}${h.toFixed(1)},${x.toFixed(1)}`).join(" "),S=`${E} L${w(a.length-1).toFixed(1)},${(o+g).toFixed(1)} L${l},${(o+g).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:a.map(h=>+h.toFixed(2)),minV:+d.toFixed(2),maxV:+r.toFixed(2)}))}" data-color="${s}" style="position:relative">
    <svg viewBox="0 0 ${c} ${i}" width="100%" height="${i}" preserveAspectRatio="none">
      <defs><linearGradient id="${M}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${s}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${A}
      ${[.25,.5,.75].map(h=>`<line x1="${l}" y1="${(o+g-h*g).toFixed(1)}" x2="${c-n}" y2="${(o+g-h*g).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join("")}
      <path d="${S}" fill="url(#${M})"/>
      <path d="${E}" fill="none" stroke="${s}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function et(e){const s=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!s.vals)return;const{vals:t}=s,a=e.querySelector(".m-chart-tip"),c=e.querySelector(".m-chart-crosshair"),i=e.dataset.color||"#0172A4";function l(o){const v=e.getBoundingClientRect(),u=Math.max(0,Math.min(1,(o-v.left)/v.width)),g=Math.round(u*(t.length-1)),d=t[g],r=u*100;c.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${r}%;width:1px;background:${i};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(r,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=d<10?d.toFixed(1):String(Math.round(d))}function n(){c.style.display="none",a.style.display="none"}e.addEventListener("pointermove",o=>{o.preventDefault(),l(o.clientX)}),e.addEventListener("pointerdown",o=>l(o.clientX)),e.addEventListener("pointerup",n),e.addEventListener("pointerleave",n),e.style.cursor="crosshair"}function tt(e,s="7d",t="1h"){const a=Xe[e.model]||[];if(!a.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const i=Object.entries({"365d":"365j","30d":"30j","7d":"7j",hier:"Hier","1d":"Auj.",custom:"Perso"}).map(([n,o])=>`<button class="m-period-pill${n===s?" active":""}" data-period="${n}">${o}</button>`).join(""),l=a.map(n=>{const o=Me(n.id,1)[0];return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${n.color}">${n.label}</span>
          <span class="m-chart-current">${o<10?o.toFixed(1):Math.round(o)} <em>${n.unit}</em></span>
        </div>
        ${Qe(n.id,n.color,n.cumul)}
      </div>`}).join("");return`
    <div class="m-period-bar">
      <div class="m-period-pills">${i}</div>
      <select class="m-step-sel">
        <option value="1h"${t==="1h"?" selected":""}>Horaire</option>
        <option value="1d"${t==="1d"?" selected":""}>Journalier</option>
        <option value="1w"${t==="1w"?" selected":""}>Hebdo</option>
      </select>
    </div>
    <div class="m-detail-section">${l}</div>`}function st(e){const s=e.parcelId?C.find(l=>l.id===e.parcelId):null,t=s?O.find(l=>l.id===s.orgId):null,a=e.networkQuality||0,c=a>70?"#30d158":a>40?"#ff9f0a":"#ff3b30",i=e.event?[e.event]:[];return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${Ze[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${xe[e.model]||e.model}</span>
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
          <a class="m-itinerary-link" href="https://maps.apple.com/?q=${encodeURIComponent((t==null?void 0:t.ville)||"")}&sll=${(s==null?void 0:s.lat)||0},${(s==null?void 0:s.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">État</div>
      <div class="m-list">
        ${i.length?i.map(l=>`<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${l}</span></div>`).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${c};font-weight:600">${a}%</span>
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
    </div>`}function he(e){var g;const s=e.parcelId?C.find(d=>d.id===e.parcelId):null;let t="donnees",a="7d",c="1h",i=!1;const l=s&&((g=O.find(d=>d.id===s.orgId))==null?void 0:g.ville)||"",n=ge(`
    <div class="m-detail-header">
      <div class="m-detail-row1">
        <div class="m-navbar-logo-mark">W</div>
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-row2">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <span class="m-d-name">${e.serial}</span>
        <span class="m-d-sep">·</span><span class="m-d-sub">${xe[e.model]||e.model}</span>
        ${l?`<span class="m-d-sep">·</span><span class="m-d-commune">${l}</span>`:""}
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab active" data-view="donnees">Données</button>
      <button class="m-detail-tab" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function o(){const d=n.querySelector("#detail-content");t==="donnees"&&(d.innerHTML=tt(e,a,c)),t==="params"&&(d.innerHTML=st(e),v()),u()}function v(){const d=window.L;!d||!s||setTimeout(()=>{const r=n.querySelector("#sensor-minimap");if(!r)return;const b=d.map(r,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});d.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(b),b.setView([s.lat,s.lng],15),d.circleMarker([s.lat,s.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(b)},50)}function u(){var d;n.querySelectorAll(".m-period-pill").forEach(r=>{r.addEventListener("click",()=>{a=r.dataset.period,o()})}),(d=n.querySelector(".m-step-sel"))==null||d.addEventListener("change",r=>{c=r.target.value,o()}),n.querySelectorAll(".m-chart-svg-wrap").forEach(r=>et(r)),n.querySelectorAll(".m-list-row[data-action]").forEach(r=>{r.addEventListener("click",()=>R("Fonctionnalité à venir"))})}n.querySelectorAll(".m-detail-tab").forEach(d=>{d.addEventListener("click",()=>{n.querySelectorAll(".m-detail-tab").forEach(r=>r.classList.remove("active")),d.classList.add("active"),t=d.dataset.view,o()})}),n.querySelector(".m-detail-back").addEventListener("click",ye),n.querySelector("#d-star").addEventListener("click",()=>{i=!i;const d=n.querySelector("#d-star");d.querySelector("i").className=i?"bi bi-star-fill":"bi bi-star",d.style.color=i?"#f5c842":"",R(i?"Ajouté aux favoris":"Retiré des favoris")}),n.querySelector("#d-plus").addEventListener("click",()=>{const d=`
      <button class="m-sheet-option" data-a="plot"><i class="bi bi-map"></i> Parcelle</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" data-a="maintenance"><i class="bi bi-tools"></i> Opération de maintenance</button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>`,r=document.createElement("div");r.innerHTML=d;const b=$e({title:"Ajouter au capteur",body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll("[data-a]").forEach(w=>{w.addEventListener("click",()=>{b.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{b.remove(),R("Fonctionnalité à venir")},280)})})}),o()}const J=100,be=1,ae=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],it={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},at={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:[],PYRANO:[],PAR:[],LWS:[],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function ee(e,s){return(at[e]||[]).includes(s)}function lt(e){return it[e]||e}const te=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"}];function nt(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);default:return+(Math.random()*100).toFixed(1)}}function ot(e,s){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const a=s==="admin",c=O.filter($=>$.id!==J),i=Object.fromEntries(C.map($=>[$.id,$])),l=Object.fromEntries(O.map($=>[$.id,$]));let n=null,o=null;const v={};let u="carte",g="pluie",d="7 derniers jours",r="all";function b($){const h=`${$}-${g}-${d}`;return h in v||(v[h]=nt(g)),v[h]}function w(){if(a){if(r==="all")return P;if(r===String(J)){const f=new Set(C.filter(p=>p.orgId===J).map(p=>p.id));return P.filter(p=>f.has(p.parcelId))}const m=new Set(C.filter(f=>String(f.orgId)===r).map(f=>f.id));return P.filter(f=>m.has(f.parcelId))}const $=new Set(C.filter(m=>m.orgId===be).map(m=>m.id)),h=P.filter(m=>$.has(m.parcelId)),x=P.filter(m=>!$.has(m.parcelId)&&ae.includes(m.model));return r==="mine"?h:r==="network"?x:[...h,...x]}function y($){const h=$.parcelId?i[$.parcelId]:null;return h?{lat:h.lat,lng:h.lng,name:h.name}:null}function M($){var x;const h=$.parcelId?i[$.parcelId]:null;return h&&((x=l[h.orgId])==null?void 0:x.ville)||null}function A(){if(n){try{n.remove()}catch{}n=null,o=null}}function T(){A();const $=te.find(p=>p.id===g)||te[0],h=w();let x;if(a)x=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${J}"${r===String(J)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${c.map(p=>`<option value="${p.id}"${r===String(p.id)?" selected":""}>${p.name}</option>`).join("")}
        </select>`;else{const p=O.find(L=>L.id===be);x=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${r==="all"?" selected":""}>Toutes</option>
          <option value="mine"${r==="mine"?" selected":""}>${(p==null?void 0:p.name)||"Mon organisation"}</option>
          <option value="network"${r==="network"?" selected":""}>Capteurs réseau</option>
        </select>`}const m=[...h].sort((p,L)=>{const j=ee(p.model,g),k=ee(L.model,g);return j&&!k?-1:!j&&k?1:j?b(L.id)-b(p.id):0}),f=m.length?`<div class="m-plain-list">${m.map(p=>{const L=ae.includes(p.model),k=ee(p.model,g)?`<span class="m-sensor-val">${b(p.id)} ${$.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${p.id}">
              <div class="m-sensor-icon" style="background:${L?"#0172A420":"#5b8dd920"};color:${L?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${lt(p.model)}</span>
                <span class="m-sensor-sub">${p.serial}${M(p)?` · ${M(p)}`:""}</span>
              </div>
              ${k}
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';t.innerHTML=`
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
            ${te.map(p=>`<option value="${p.id}"${p.id===g?" selected":""}>${p.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${$.aggs.map(p=>`<option${p===d?" selected":""}>${p}</option>`).join("")}
          </select>
        </div>
        ${x}
      </div>
      ${u==="carte"?'<div id="sensor-map" class="m-map-container"></div>':f}`,S(),u==="carte"&&E(h,$)}function E($,h){const x=window.L;x&&setTimeout(()=>{const m=t.querySelector("#sensor-map");if(!m)return;n=x.map(m,{zoomControl:!1,attributionControl:!1}),x.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(n);const f=[];$.forEach(p=>{const L=y(p);if(!L)return;const k=ee(p.model,g)?`${b(p.id)} ${h.unit}`:"—",z=ae.includes(p.model),V=x.circleMarker([L.lat,L.lng],{radius:10,color:"#fff",weight:2,fillColor:z?"#0172A4":"#5b8dd9",fillOpacity:.9}).addTo(n);V.bindTooltip(k,{permanent:!0,direction:"top",className:"m-map-tip"}),V.on("click",()=>he(p)),f.push([L.lat,L.lng])}),f.length&&(o=f,n.fitBounds(f,{padding:[32,32]})),n.invalidateSize()},0)}window.addEventListener("m-tab-change",$=>{$.detail==="capteurs"&&u==="carte"&&n&&setTimeout(()=>{n.invalidateSize(),o!=null&&o.length&&n.fitBounds(o,{padding:[32,32]})},50)});function S(){var $,h,x;t.querySelectorAll(".m-view-btn").forEach(m=>m.addEventListener("click",()=>{u=m.dataset.view,T()})),($=t.querySelector("#metric-sel"))==null||$.addEventListener("change",m=>{var f;g=m.target.value,d=((f=te.find(p=>p.id===g))==null?void 0:f.defaultAgg)||"",T()}),(h=t.querySelector("#agg-sel"))==null||h.addEventListener("change",m=>{d=m.target.value,T()}),(x=t.querySelector("#org-filter"))==null||x.addEventListener("change",m=>{r=m.target.value,T()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(m=>{m.addEventListener("click",()=>{const f=P.find(p=>p.id===+m.dataset.sensorId);f&&he(f)})})}T()}const rt=new URLSearchParams(window.location.search),W=rt.get("role")==="adherent"?"adherent":"admin";function Ee(){const e=document.getElementById("status-time");if(!e)return;const s=new Date;e.textContent=s.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}Ee();setInterval(Ee,1e4);const H=["dashboard","parcelles","capteurs","alertes","parametres"];let se="dashboard";function U(e){var s,t;!H.includes(e)||e===se||(se=e,document.querySelectorAll(".m-screen").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),(s=document.getElementById(`screen-${e}`))==null||s.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}document.getElementById("bottom-nav").addEventListener("click",e=>{const s=e.target.closest(".nav-item");s&&U(s.dataset.tab)});let _=null,Y=null;const Le=50,K=document.getElementById("screen-stack");K.addEventListener("mousedown",e=>{_=e.clientX,Y=e.clientY});K.addEventListener("mouseup",e=>{if(_===null)return;const s=e.clientX-_,t=e.clientY-Y;if(Math.abs(s)>Le&&Math.abs(s)>Math.abs(t)){const a=H.indexOf(se);s<0&&a<H.length-1&&U(H[a+1]),s>0&&a>0&&U(H[a-1])}_=null,Y=null});K.addEventListener("mouseleave",()=>{_=null});K.addEventListener("touchstart",e=>{_=e.touches[0].clientX,Y=e.touches[0].clientY},{passive:!0});K.addEventListener("touchend",e=>{if(_===null)return;const s=e.changedTouches[0].clientX-_,t=e.changedTouches[0].clientY-Y;if(Math.abs(s)>Le&&Math.abs(s)>Math.abs(t)){const a=H.indexOf(se);s<0&&a<H.length-1&&U(H[a+1]),s>0&&a>0&&U(H[a-1])}_=null},{passive:!0});const ct=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...W==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]];function dt(){var s;const e=document.getElementById("param-segment");e&&(W==="adherent"&&((s=document.getElementById("param-reseau"))==null||s.style.setProperty("display","none")),ct.forEach((t,a)=>{const c=document.createElement("button");c.className="m-segment-btn"+(a===0?" active":""),c.textContent=t.label,c.dataset.target=t.id,c.addEventListener("click",()=>{var i;e.querySelectorAll(".m-segment-btn").forEach(l=>l.classList.remove("active")),c.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(l=>l.classList.remove("active")),(i=document.getElementById(t.id))==null||i.classList.add("active")}),e.appendChild(c)}))}dt();Re(document.getElementById("screen-dashboard"),W);Ke(document.getElementById("screen-parcelles"),W);ot(document.getElementById("screen-capteurs"),W);Pe(document.getElementById("param-compte"),W);
