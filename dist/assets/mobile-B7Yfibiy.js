const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-DWpyWMgo.js","assets/sensors-CRadjF8G.js","assets/irrigations-C22Dtsoo.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-Bejh2i72.js","assets/store-Bgo0c0M9.js","assets/orgs-DnFmvGlp.js","assets/network-YzWdS0n_.js","assets/constants-D_Yu58_o.js","assets/members-CuDabgg3.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as de}from"./plots-Bejh2i72.js";import{d as Oe,b as xs,c as Ke,j as dn}from"./store-Bgo0c0M9.js";import{s as le}from"./sensors-CRadjF8G.js";import{o as he}from"./orgs-DnFmvGlp.js";import{n as Ne}from"./network-YzWdS0n_.js";import{I as pe,s as it,g as un}from"./irrigations-C22Dtsoo.js";import{I as Gt,S as Li,M as $s,a as ht,E as pn,A as Xt,b as Pi}from"./constants-D_Yu58_o.js";import{m as Qt}from"./members-CuDabgg3.js";const nt=[];function ge(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),nt.push(t),t}function ve(){const e=nt.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function zi(){return nt.length}function mn(){return nt.some(e=>e.dataset.dirty==="true")}function ws(){nt.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{nt.forEach(e=>e.remove()),nt.length=0});const vn=[{key:"orgs",label:"Organisations",icon:"bi-building",desc:"Ajouts de membres, changements d'organisation, nouvelles exploitations"},{key:"capteurs",label:"Capteurs",icon:"bi-broadcast",desc:"Anomalies, changements d'état, mise à jour firmware"},{key:"alertes",label:"Alertes",icon:"bi-bell",desc:"Déclenchements de seuils et alertes météo configurées"}],Di=[{key:"email",label:"Email",icon:"bi-envelope"},{key:"sms",label:"SMS",icon:"bi-phone"},{key:"push",label:"Push",icon:"bi-bell"}],bn=["Mon réseau","Mon organisation","Mon secteur"],ei={orgs:"Mon organisation",capteurs:"Mon réseau",alertes:"Mon secteur"},Fi={orgs:{email:!0,sms:!1,push:!0},capteurs:{email:!0,sms:!1,push:!0},alertes:{email:!0,sms:!0,push:!0}};function fn(e){let i=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif"))||JSON.parse(JSON.stringify(Fi))}catch{return JSON.parse(JSON.stringify(Fi))}})(),t=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif-peri"))||JSON.parse(JSON.stringify(ei))}catch{return JSON.parse(JSON.stringify(ei))}})();function n(){localStorage.setItem("weenat-mobile-notif",JSON.stringify(i)),localStorage.setItem("weenat-mobile-notif-peri",JSON.stringify(t)),e("Préférences enregistrées")}function o(s){const l=i[s.key]||{},p=t[s.key]||ei[s.key];return`
      <div class="m-list-section-header" style="display:flex;align-items:center;gap:6px">
        <i class="bi ${s.icon}" style="font-size:13px"></i> ${s.label}
      </div>
      <p style="font-size:12px;color:#8e8e93;margin:0 16px 8px;line-height:1.4">${s.desc}</p>
      <div class="m-list">
        ${Di.map((d,c)=>{const m=c===Di.length-1&&!0;return`<div class="m-list-row">
            <i class="bi ${d.icon}" style="color:#636366;font-size:14px;flex-shrink:0;width:20px;text-align:center"></i>
            <span class="m-list-row-label">${d.label}</span>
            <label class="m-toggle">
              <input type="checkbox" class="notif-toggle" data-cat="${s.key}" data-ch="${d.key}" ${l[d.key]?"checked":""}>
              <span class="m-toggle-track"></span>
            </label>
          </div>`}).join("")}
        <div class="m-list-row m-list-row--last" style="align-items:center;gap:8px">
          <i class="bi bi-geo-alt" style="color:#636366;font-size:14px;flex-shrink:0;width:20px;text-align:center"></i>
          <span class="m-list-row-label">Périmètre</span>
          <select class="notif-peri-sel" data-cat="${s.key}" style="border:none;background:transparent;font-size:14px;color:#636366;font-family:inherit;text-align:right;flex:1;min-width:0;outline:none;cursor:pointer">
            ${bn.map(d=>`<option value="${d}"${d===p?" selected":""}>${d}</option>`).join("")}
          </select>
        </div>
      </div>`}const a=ge(`
    <div class="m-detail-header" style="flex-shrink:0">
      <div class="m-detail-topbar">
        <button class="m-detail-back" id="notif-back"><i class="bi bi-chevron-left"></i><span>Compte</span></button>
      </div>
      <div style="padding:0 16px 12px">
        <div style="font-size:20px;font-weight:700;color:#1c1c1e">Notifications</div>
        <div style="font-size:13px;color:#8e8e93;margin-top:2px">Choisissez comment et pour quoi être notifié</div>
      </div>
    </div>
    <div style="flex:1;overflow-y:auto;padding-bottom:32px">
      ${vn.map(s=>o(s)).join("")}
      <div class="m-list-section-footer" style="margin-top:8px">
        Les alertes de seuil se configurent depuis la section <strong>Alertes</strong> de l'application.
      </div>
    </div>
  `);a.querySelector("#notif-back").addEventListener("click",ve),a.querySelectorAll(".notif-toggle").forEach(s=>{s.addEventListener("change",()=>{const l=s.dataset.cat,p=s.dataset.ch;i[l][p]=s.checked,n()})}),a.querySelectorAll(".notif-peri-sel").forEach(s=>{s.addEventListener("change",()=>{t[s.dataset.cat]=s.value,n()})})}const _i={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},hn=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Hi=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let Ze={};function _e(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ot({title:e,body:i,onDone:t,doneLabel:n="OK"}){var l;const o=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${n}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}function Bi(e,i,t){const n=document.createElement("div");n.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const o=n.querySelector("input");ot({title:e,body:n,doneLabel:"Enregistrer",onDone:()=>{t(o.value.trim()),_e("Enregistré")}}),setTimeout(()=>o.focus(),300)}function Ri(e,i,t,n){const o=document.createElement("div");o.innerHTML=i.map((s,l)=>`
    <div class="m-sheet-option${s===t?" m-sheet-option--active":""}" data-i="${l}">
      <span>${s}</span>
      ${s===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const a=ot({title:e,body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{n(i[+s.dataset.i]),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280),_e("Enregistré")})})}function gn(e,i){const t=document.createElement("div"),n=()=>{var o;t.innerHTML=e.map((a,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${a.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${a.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(a=>{a.addEventListener("input",()=>{e[+a.dataset.i][a.dataset.f]=a.value})}),t.querySelectorAll(".m-sheet-remove").forEach(a=>{a.addEventListener("click",()=>{e.splice(+a.dataset.i,1),n()})}),(o=t.querySelector(".m-sheet-add-phone"))==null||o.addEventListener("click",()=>{e.push({label:"",numero:""}),n()})};n(),ot({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),_e("Enregistré")}})}function yn(e,i,t){const n=document.createElement("div");n.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,n.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var a;(a=navigator.clipboard)==null||a.writeText(e.value).catch(()=>{}),_e("Clé copiée !")});const o=ot({title:"Clé API",body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const a=i.findIndex(s=>s.id===e.id);a!==-1&&i.splice(a,1),o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{o.remove(),t()},280),_e("Clé supprimée")})}function xn(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function $n(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");ot({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const n=t.value.trim();if(!n){_e("Entrez un nom");return}const o={id:Date.now(),name:n,created:new Date().toLocaleDateString("fr-FR"),value:xn()};e(o),_e("Clé générée")}}),setTimeout(()=>t.focus(),300)}function wn(e,i){Ze={profile:JSON.parse(JSON.stringify(_i[i]||_i.admin)),langue:"Français",unites:Hi[0]};const n=localStorage.getItem("mobile_avatarUrl")||null;function o(){const s=Ze.profile,l=n?`<img src="${n}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,p=s.apiKeys.map(c=>`
      <div class="m-list-row" data-key-id="${c.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${c.name}</span>
          <span class="m-list-row-sub">créée le ${c.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),d=s.phones.map((c,m)=>`
      <div class="m-list-row${m===s.phones.length-1&&s.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${c.label||"Numéro "+(m+1)}</span>
        <span class="m-list-row-value">${c.numero}</span>
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
        ${d}
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
        <div class="m-list-row m-list-row--last" data-action="notif-settings" style="cursor:pointer">
          <i class="bi bi-bell" style="color:#636366;font-size:16px;flex-shrink:0"></i>
          <span class="m-list-row-label">Paramétrage des notifications</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>
      <div class="m-list-section-footer">Email, SMS et push par catégorie et périmètre.</div>

      <div class="m-list-section-header">Préférences</div>
      <div class="m-list">
        <div class="m-list-row" data-action="langue">
          <span class="m-list-row-label">Langue</span>
          <span class="m-list-row-value" id="val-langue">${Ze.langue}</span>
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
    `,a()}function a(){var l;const s=Ze.profile;(l=e.querySelector("#m-avatar-upload"))==null||l.addEventListener("change",p=>{const d=p.target.files[0];if(!d)return;const c=new FileReader;c.onload=m=>{localStorage.setItem("mobile_avatarUrl",m.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${m.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},c.readAsDataURL(d)}),e.querySelectorAll(".m-list-row[data-action]").forEach(p=>{p.addEventListener("click",()=>{switch(p.dataset.action){case"prenom":Bi("Prénom",s.prenom,d=>{s.prenom=d,o()});break;case"nom":Bi("Nom",s.nom,d=>{s.nom=d,o()});break;case"email":ot({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>_e("Fonctionnalité à venir")});break;case"phones":gn(s.phones,d=>{s.phones=d,o()});break;case"mdp":{const d=document.createElement("div");d.innerHTML=`
              <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(0,122,255,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
                  <i class="bi bi-envelope-at" style="font-size:26px;color:#007aff"></i>
                </div>
                <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 20px">Un e-mail de réinitialisation sera envoyé à <strong>${s.email}</strong>. Vous pourrez ensuite définir un nouveau mot de passe.</p>
                <button id="send-reset-btn" style="background:#007aff;color:#fff;border:none;border-radius:12px;padding:14px 0;font-size:16px;font-weight:600;cursor:pointer;width:100%">Envoyer l'e-mail</button>
              </div>`;const c=ot({title:"Réinitialiser le mot de passe",body:d,doneLabel:"Annuler",onDone:()=>{}});d.querySelector("#send-reset-btn").addEventListener("click",()=>{c.classList.remove("m-sheet-overlay--show"),setTimeout(()=>c.remove(),280),_e("E-mail de réinitialisation envoyé")});break}case"langue":Ri("Langue",hn,Ze.langue,d=>{Ze.langue=d,e.querySelector("#val-langue").textContent=d});break;case"unites":Ri("Unités",Hi,Ze.unites,d=>{Ze.unites=d,e.querySelector("#val-unites").textContent=d.split(" ")[0]});break;case"gen-key":$n(d=>{s.apiKeys.push(d),o()});break;case"notif-settings":fn(_e);break;case"delete":_e("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(p=>{p.addEventListener("click",()=>{const d=s.apiKeys.find(c=>c.id===+p.dataset.keyId);d&&yn(d,s.apiKeys,o)})})}o()}function U(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ue({title:e,body:i,doneLabel:t="Fermer",onDone:n}={}){var l;const o=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}function Ot({title:e,message:i="",confirmLabel:t="Confirmer",confirmColor:n="#ff3b30",onConfirm:o}){var p;const a=document.getElementById("phone-screen");(p=document.querySelector(".m-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd" style="justify-content:center;padding:12px 16px 8px">
        <span class="m-sheet-title">${e}</span>
      </div>
      <div class="m-sheet-body" style="padding:4px 16px 32px">
        ${i?`<p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px;text-align:center">${i}</p>`:""}
        <button id="sc-confirm" style="width:100%;padding:14px;background:${n};color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;margin-bottom:8px">${t}</button>
        <button id="sc-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
      </div>
    </div>`,a.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const l=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#sc-cancel").addEventListener("click",l),s.querySelector("#sc-confirm").addEventListener("click",()=>{l(),setTimeout(()=>o==null?void 0:o(),50)}),s.addEventListener("click",d=>{d.target===s&&l()})}function Sn(e){const i=3+e%5,t=Date.now();return Array.from({length:i},(n,o)=>{const a=e*17+o*7,s=1+o*(2+a%6),l=t-s*864e5-a%8*36e5,p=(1+a%5)*36e5+a%60*6e4,d=o===0&&a%7===0;return{start:new Date(l),end:d?null:new Date(l+p)}})}const kn=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],En=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],Oi={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},Ln={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function ti(e){if(!e)return"—";const[i,t,n]=e.split("-");return`${n}/${t}/${i}`}function Ni(e){const i=e.sensorIds.map(n=>{const o=le.find(a=>a.id===n);return o?`${o.model} ${o.serial}`:null}).filter(Boolean),t=e.parcelIds.map(n=>{const o=de.find(a=>a.id===n);return(o==null?void 0:o.name)||null}).filter(Boolean);return[...i,...t]}function Cn(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const n=i==="new"||i==="new-adherent"?[]:[...i==="adherent"?En:kn];function o(){if(!n.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=n.map(s=>{Ni(s);const l=Ln[s.metric]||"bi-bell",p=s.statut==="actif";return`
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
              <span class="m-alert-row-val">${Oi[s.metric]||s.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${ti(s.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${s.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),a()}function a(){t.querySelectorAll(".m-alert-toggle input").forEach(s=>{s.addEventListener("change",l=>{l.stopPropagation();const p=+s.dataset.id,d=n.find(c=>c.id===p);d&&(d.statut=s.checked?"actif":"inactif",o(),U(`Alerte ${s.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-more-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const p=+s.dataset.id,d=n.find(b=>b.id===p);if(!d)return;Ni(d);const c=document.createElement("div"),m=Sn(p);function f(){const b=d.sensorIds.map((h,k)=>{const w=le.find(I=>I.id===h);return w?{label:`${w.model} ${w.serial}`,type:"sensor",idx:k}:null}).filter(Boolean),v=d.parcelIds.map((h,k)=>{const w=de.find(I=>I.id===h);return w?{label:w.name,type:"parcel",idx:k}:null}).filter(Boolean),g=[...b,...v];return g.length?g.map(h=>`<div class="m-perimetre-item" data-type="${h.type}" data-idx="${h.idx}">
                <span>${h.label}</span>
                <button class="m-perimetre-del" data-type="${h.type}" data-idx="${h.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const r=document.createElement("div");r.className="m-sheet-info-rows";function u(){var k;c.innerHTML="";const b=document.createElement("div");b.className="m-sheet-info-rows",b.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Oi[d.metric]||d.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${ti(d.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${ti(d.created)}</span></div>
            ${(k=d.phones)!=null&&k.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${d.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${d.statut}</span></div>`;const v=document.createElement("div");v.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",v.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${f()}</div>`,b.appendChild(v),c.appendChild(b);const g=w=>w.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+w.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${m.map(w=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${w.end?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${g(w.start)} → <span style="color:${w.end?"inherit":"#ff9f0a"}">${w.end?g(w.end):"En cours"}</span></div>
              </div></div>`).join("")}`,c.appendChild(h),c.querySelectorAll(".m-perimetre-del").forEach(w=>{w.addEventListener("click",I=>{I.stopPropagation();const C=w.dataset.type,E=+w.dataset.idx;C==="sensor"?d.sensorIds.splice(E,1):d.parcelIds.splice(E,1),u(),o(),U("Retiré du périmètre")})})}u(),ue({title:d.name,body:c,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-alert-card").forEach(s=>{s.addEventListener("click",l=>{if(l.target.closest(".m-alert-toggle")||l.target.closest(".m-alert-more-btn"))return;const p=+s.dataset.id,d=n.find(f=>f.id===p);if(!d)return;const c=document.createElement("div");c.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const m=ue({title:d.name,body:c,doneLabel:"Fermer",onDone:()=>{}});c.querySelector("#al-edit").addEventListener("click",()=>{m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),U("Modification à venir")},280)}),c.querySelector("#al-delete").addEventListener("click",()=>{const f=n.findIndex(r=>r.id===p);f!==-1&&n.splice(f,1),m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),o()},280),U("Alerte supprimée")})})})}o()}const An="modulepreload",Mn=function(e){return"/weenat-proto/"+e},Vi={},$e=function(i,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(t.map(p=>{if(p=Mn(p),p in Vi)return;Vi[p]=!0;const d=p.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${c}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":An,d||(m.as="script"),m.crossOrigin="",m.href=p,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((f,r)=>{m.addEventListener("load",f),m.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&a(l.reason);return i().catch(a)})},Ss=e=>`parcel-journal-${e}`;function Nt(e){try{const i=localStorage.getItem(Ss(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"note",category:"Observation générale",date:"2026-05-11",auteur:"Jean Dupont",role:"membre",texte:"Quelques pucerons sur feuilles basses. À surveiller."},{id:2,type:"traitement",date:"2026-05-16",auteur:"Sophie Martin",role:"conseiller",texte:"Vent < 2 m/s, conditions conformes.",produit:"Karate Zeon",dose:"0,1 L/ha",cible:"Pucerons"},{id:3,type:"integration",date:"2026-04-02",texte:"L'intégration « Rimpro » a expiré et n'est plus active.",_system:!0},{id:4,type:"integration",date:"2025-10-02",texte:"Intégration « Rimpro » activée.",_system:!0}]}function Ci(e,i){localStorage.setItem(Ss(e),JSON.stringify(i))}function Pe(e,i){const t={id:`sys-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,_system:!0,...i};Ci(e,[t,...Nt(e)])}function ks(e,i,t="Irrigations",n=null){const o=i.find(s=>s.id===+e);if(!o)return;const a=le.filter(s=>s.parcelIds.includes(o.id)).map(s=>s.id);$e(()=>Promise.resolve().then(()=>Rt),void 0).then(s=>{s.initParcelDetail(o,a,"widgets",t),n&&setTimeout(()=>{var l;(l=document.querySelector(`[data-widget-id="${n}"], #${n}`))==null||l.scrollIntoView({behavior:"smooth",block:"start"})},150)})}function at(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const Ae=new Date().toISOString().split("T")[0];function gt(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,n,o]=e.split("-");return`${parseInt(o)} ${i[parseInt(n)-1]} ${t}`}function qt(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,n]=e.split("-");return`${parseInt(n)} ${i[parseInt(t)-1]}`}function pi(e){return!e||e===Ae?"":e<Ae?'<span class="irr-pill irr-pill--past">Passée · Effectuée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function mi(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Ut(e,i,t){const n=i.length>0&&i.every(a=>t.has(a.id)),o=[...i].sort((a,s)=>a.name.localeCompare(s.name,"fr")).map(a=>{const s=t.has(a.id);return`<div class="irr-plot-row${s?" irr-plot-row--sel":""}" data-pid="${a.id}">
      <div><div class="irr-plot-name">${a.name}</div>${Tn(a)}</div>
      ${mi(s,!1)}
    </div>`}).join("");return`<div class="irr-sel-all-row" id="irr-sel-all">
    <span class="irr-sel-all-lbl">${n?"Tout désélectionner":"Tout sélectionner"}</span>
    ${mi(n,!1)}
  </div>${o}`}function vi({title:e,body:i,onSave:t,onDelete:n,saveLabel:o="Enregistrer"}){var p,d;const a=document.getElementById("phone-screen");(p=document.querySelector(".irr-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="irr-sheet-overlay",s.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${n?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${o}</button>
      </div>
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),a.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const l=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",c=>{c.target===s&&l()}),(d=s.querySelector("#iss-del"))==null||d.addEventListener("click",()=>{n==null||n(),l()}),s.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),l()}),s}function Es(e,i,t){const n=i.filter(l=>e.has(l.id)&&(!l.irrigation||l.irrigation==="Non irrigué"));if(!n.length){t();return}const o=document.createElement("div");o.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${n.length===1?`<strong>${n[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${n.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" class="m-prev-select" style="margin-bottom:0">
      <option value="">— Choisir un type —</option>
      ${Gt.map(l=>`<option value="${l}">${l}</option>`).join("")}
    </select>`;const s=vi({title:"Type d'irrigation",body:o,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const l=o.querySelector("#irr-type-ask").value;l&&n.forEach(p=>{p.irrigation=l,Oe(p.id,{irrigation:l})}),t()}}).querySelector("#iss-del");s&&(s.textContent="Passer",s.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function Tn(e){const i=e.crop,t=e.irrigation||null,n=e.substrate?"Substrat : "+e.substrate:e.texture||null,o=[i,t||"<em>type irrigation non renseigné</em>",n].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${o.join(" · ")}</span>`}function Ls(e,i,t=null,n=!1,o=null){let a=new Set((t==null?void 0:t.ids)??[]),s=Ae,l=10;function p(){return Ut([],e,a)}function d(u){u.querySelector("#irr-date-hint").innerHTML=pi(s)}function c(u){const b=a.size,v=u.querySelector(".irr-summary"),g=u.querySelector(".irr-save-btn");!v||!g||(t?(v.textContent="",g.disabled=!1,g.textContent="Enregistrer"):(v.textContent=b===0?"":`${b} parcelle${b>1?"s":""} · ${l} mm`,g.disabled=b===0,g.textContent="Enregistrer"))}function m(u){var b;u.querySelectorAll(".irr-plot-row").forEach(v=>{v.addEventListener("click",()=>{const g=+v.dataset.pid;a.has(g)?a.delete(g):a.add(g),u.querySelector("#irr-sel-list").innerHTML=p(),m(u),c(u)})}),(b=u.querySelector("#irr-sel-all"))==null||b.addEventListener("click",()=>{const v=e.some(g=>!a.has(g.id));e.forEach(g=>v?a.add(g.id):a.delete(g.id)),u.querySelector("#irr-sel-list").innerHTML=p(),m(u),c(u)})}const f=t?`<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${t.ids.length>1?"Parcelles concernées":"Parcelle concernée"} : ${t.label}</span>
       </div>`:`<div id="irr-sel-list">${p()}</div>`,r=at(ge(`
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
      ${f}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${t?"":"disabled"}>Enregistrer</button>
    </div>
  `));r.dataset.dirty="true",t||m(r),c(r),r.querySelector("#irr-back").addEventListener("click",ve),r.querySelector("#irr-date").addEventListener("change",u=>{s=u.target.value,d(r),c(r)}),r.querySelector("#irr-qty").addEventListener("input",u=>{l=parseInt(u.target.value)||1,c(r)}),r.querySelector(".irr-save-btn").addEventListener("click",()=>{const u=t?new Set(t.ids):a;Es(u,e,()=>{const b=s>Ae;u.forEach(k=>{pe.push({iso:s,mm:l,real:!b,plotId:k,fromStrategy:!1})}),it();const g=[{title:null,names:[...u].map(k=>{var w;return(w=e.find(I=>I.id===k))==null?void 0:w.name}).filter(Boolean)}],h=u.size===1?String([...u][0]):"all";ws(),Cs({title:u.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:gt(s)},{label:"Quantité",value:`${l} mm`}],parcelSections:g,isFut:b,plots:e,calFilter:h,addedCount:u.size,stackDepth:1,backToParcel:n,onBack:o})})})}function bi(e,i,t=null,n=null,o=!1,a=null){let s=new Set((t==null?void 0:t.ids)??[]),l=Ae,p=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],d=10,c=7,m=null,f=null;if(n){const h=pe.filter(k=>k.fromStrategy&&n.has(k.seasonId));if(h.length){const k=h.map(I=>I.iso).sort();l=k[0],p=k[k.length-1],d=h[0].mm;const w=[...new Set(k)];c=w.length>=2?Math.round((new Date(w[1])-new Date(w[0]))/864e5):7,m=l,f=p}}function r(){if(!l||!p||c<=0)return[];const h=[],k=new Date(p);let w=new Date(l);for(;w<=k&&h.length<100;)h.push(new Date(w)),w.setDate(w.getDate()+c);return h}function u(){const h=r();s.size;const k=h.length>0?`<span class="irr-preview-ok">↗ ${h.length} irrigations · ${h.length*d} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
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
          <input type="number" class="irr-qty-input" id="strat-qty" value="${d}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence <span class="irr-unit">(jours)</span></div>
          <input type="number" class="irr-qty-input" id="strat-freq" value="${c}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${k}</div>
      ${t?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${t.ids.length>1?"Parcelles concernées":"Parcelle concernée"} : ${t.label}</span>
           </div>`:Ut([],e,s)}
      <div class="irr-bottom-spacer"></div>
    `}function b(h){const k=s.size,w=r(),I=h.querySelector(".irr-save-btn"),C=h.querySelector(".irr-summary");!I||!C||(I.disabled=k===0||w.length===0,C.textContent=k===0?"":`${k} parcelle${k>1?"s":""} · ${w.length} occurrences`,I.textContent="Voir l'aperçu →")}function v(h){var I,C,E,H,P;const k=h.querySelector(".irr-scroll-body");k.querySelectorAll(".irr-plot-row").forEach(A=>{A.addEventListener("click",()=>{const T=+A.dataset.pid;s.has(T)?s.delete(T):s.add(T),k.innerHTML=u(),v(h),b(h)})}),(I=k.querySelector("#irr-sel-all"))==null||I.addEventListener("click",()=>{const A=e.some(T=>!s.has(T.id));e.forEach(T=>A?s.add(T.id):s.delete(T.id)),k.innerHTML=u(),v(h),b(h)});const w=()=>{const A=r(),T=k.querySelector("#strat-preview");T&&(T.innerHTML=A.length>0?`<span class="irr-preview-ok">↗ ${A.length} irrigations · ${A.length*d} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),b(h)};(C=k.querySelector("#strat-debut"))==null||C.addEventListener("change",A=>{l=A.target.value,w()}),(E=k.querySelector("#strat-fin"))==null||E.addEventListener("change",A=>{p=A.target.value,w()}),(H=k.querySelector("#strat-qty"))==null||H.addEventListener("input",A=>{d=parseInt(A.target.value)||1,w()}),(P=k.querySelector("#strat-freq"))==null||P.addEventListener("input",A=>{c=parseInt(A.target.value)||1,w()})}const g=at(ge(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${u()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));g.dataset.dirty="true",v(g),b(g),g.querySelector("#strat-back").addEventListener("click",ve),g.querySelector(".irr-save-btn").addEventListener("click",()=>{const h=r();In(g,e,s,l,p,d,c,h,i,t,n,o,a,m,f)})}function In(e,i,t,n,o,a,s,l,p,d,c=null,m=!1,f=null,r=null,u=null){var M,S,x;const b=t.size,v=!!c&&(n!==r||o!==u),g=v?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées.",h=5;l.length-h;function k(y){const z=y.toISOString().slice(0,10)>=Ae?"#FFB705":"#FF8500",L=y.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${gt(L)}</span>
      <span style="font-size:13px;font-weight:700;color:${z}">${a} mm</span>
    </div>`}const w=l.filter(y=>y.toISOString().slice(0,10)<Ae),I=l.filter(y=>y.toISOString().slice(0,10)>=Ae),C=I.slice(0,h),E=I.slice(h),H=`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${w.length?w.map(k).join(""):'<div style="font-size:13px;color:#9E9D98;padding:8px 0">Aucune irrigation effectuée</div>'}`,P=I.length?`
    <div class="irr-section-lbl" style="margin-top:${w.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${C.map(k).join("")}
    ${E.length?`
      <div id="apercu-rest" style="display:none">${E.map(k).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${E.length} irrigation${E.length>1?"s":""} de plus</button>
    `:""}`:"",A=at(ge(`
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
          <div class="irr-apercu-sub">${qt(n)} → ${qt(o)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${l.length*a} mm</div>
          <div class="irr-apercu-sub">${b} parcelle${b>1?"s":""} · ${a} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${H}
        ${P}
        ${!w.length&&!I.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      ${c?`
      <div class="irr-stop-confirm" style="margin-top:12px">
        <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">${g}</div>
        <div id="apercu-edit-confirm" style="display:none;gap:8px">
          <button class="irr-scope-btn" id="apercu-edit-cancel">Annuler</button>
          <button class="irr-scope-btn irr-scope-btn--danger" id="apercu-edit-confirm-btn">Confirmer la modification</button>
        </div>
      </div>`:""}
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));A.dataset.dirty="true",A.querySelector("#apercu-back").addEventListener("click",ve),(M=A.querySelector("#apercu-show-more"))==null||M.addEventListener("click",y=>{A.querySelector("#apercu-rest").style.display="",y.target.remove()});function T(){const y=d?new Set(d.ids):t;Es(y,i,()=>{c&&(v?pe.splice(0,pe.length,...pe.filter(q=>!(c.has(q.seasonId)&&q.fromStrategy))):pe.splice(0,pe.length,...pe.filter(q=>!(c.has(q.seasonId)&&q.fromStrategy&&q.iso>Ae))));const $=c&&!v?l.filter(q=>q.toISOString().slice(0,10)>Ae):l,z=un();if($.forEach(q=>{const F=q.toISOString().slice(0,10);y.forEach(V=>{pe.push({iso:F,mm:a,real:F<=Ae,plotId:V,fromStrategy:!0,seasonId:z})})}),it(),c){const q=v?"sur toute la saison":"à partir de demain";y.forEach(F=>{Pe(F,{type:"modification",date:Ae,texte:`Saison d'irrigation modifiée (${q}) : ${a} mm tous les ${s} jours, du ${qt(n)} au ${qt(o)} (${l.length} irrigations).`})})}const j=[{title:null,names:[...y].map(q=>{var F;return(F=i.find(V=>V.id===q))==null?void 0:F.name}).filter(Boolean)}],D=y.size===1?String([...y][0]):"all";ws(),Cs({title:"Saison enregistrée",params:[{label:"Début",value:gt(n)},{label:"Fin",value:gt(o)},{label:"Quantité",value:`${a} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${l.length*y.size}`}],parcelSections:j,isFut:!0,plots:i,calFilter:D,addedCount:l.length*y.size,stackDepth:2,backToParcel:m,onBack:f})})}A.querySelector("#apercu-confirm").addEventListener("click",()=>{if(c){A.querySelector("#apercu-edit-confirm").style.display="flex",A.querySelector("#apercu-edit-confirm").scrollIntoView({behavior:"smooth",block:"center"});return}T()}),(S=A.querySelector("#apercu-edit-cancel"))==null||S.addEventListener("click",()=>{A.querySelector("#apercu-edit-confirm").style.display="none"}),(x=A.querySelector("#apercu-edit-confirm-btn"))==null||x.addEventListener("click",T)}function Cs({title:e,params:i,parcelSections:t=[],isFut:n,plots:o,calFilter:a,addedCount:s=0,stackDepth:l=3,backToParcel:p=!1,onBack:d=null}){const c=(i||[]).map(h=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${h.label}</span>
      <span class="irr-confirm-param-val">${h.value}</span>
    </div>`).join(""),m=3,f=t.flatMap(h=>h.names.map(k=>({title:h.title,name:k}))),r=f.slice(0,m),u=f.slice(m);function b(h){const k=[];let w=null;for(const I of h)(!w||w.title!==I.title)&&(w={title:I.title,names:[]},k.push(w)),w.names.push(I.name);return k.map(I=>`
      ${I.title?`<div class="irr-confirm-sec-hd">${I.title}</div>`:""}
      ${I.names.map(C=>`<div class="irr-confirm-parcel">· ${C}</div>`).join("")}
    `).join("")}const v=f.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${b(r)}
      ${u.length?`
        <details class="irr-confirm-more">
          <summary>${u.length} parcelle${u.length>1?"s":""} de plus</summary>
          ${b(u)}
        </details>`:""}
    </div>`,g=at(ge(`
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
      <div class="irr-confirm-params">${c}</div>
      ${v}
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
  `));g.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&pe.splice(pe.length-s,s),ve()}),g.querySelector("#conf-back").addEventListener("click",()=>{for(let h=0;h<=l;h++)ve();d==null||d()}),g.querySelector("#conf-calendar").addEventListener("click",()=>{As(o,a)})}const qn=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function As(e,i){let t=i||"";function n(r){if(!r||r==="all")return null;const u=e.find(b=>String(b.id)===String(r));return u?{ids:[u.id],label:u.name}:null}function o(){return!t||t==="all"?pe:pe.filter(r=>r.plotId===+t)}function a(r){const u=r.filter(h=>h.real),b=r.filter(h=>!h.real),v=u.reduce((h,k)=>h+k.mm,0),g=b.reduce((h,k)=>h+k.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${v} mm</div>
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
        <div class="irr-cumul-val">${v+g} mm</div>
        <div class="irr-cumul-count">${u.length+b.length} irrigations</div>
      </div>
    </div>`}function s(r){if(r.length<2)return"";const u=[...r].sort((j,D)=>j.iso<D.iso?-1:1),b=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],v=new Date(u[0].iso),g=new Date(u[u.length-1].iso),h=Math.max(g-v,1),k=300,w=26,I=5,C=5,E=w-C-4,H=E-C-3,P=w+I+13,A=P+2,T=j=>Math.round((j-v)/h*k),M=j=>{const[,D,q]=j.split("-");return`${parseInt(q)}/${parseInt(D)}`},S=[],x=new Date(v.getFullYear(),v.getMonth()+1,1);for(;x<=g;)S.push(new Date(x)),x.setMonth(x.getMonth()+1);const y=S.map(j=>`<line x1="${T(j)}" y1="${w-6}" x2="${T(j)}" y2="${w+I+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),$=[v,...S,g],z=$.slice(0,-1).map((j,D)=>{const q=T(j),F=T($[D+1]);return F-q<16?"":`<text x="${Math.round((q+F)/2)}" y="${H}" font-size="8" fill="#B0AEA8" text-anchor="middle">${b[j.getMonth()]}</text>`}).join(""),L=u.map(j=>{const D=j.real?"#FF8500":"#FFB705",q=T(new Date(j.iso)),[,F,V]=j.iso.split("-"),re=`${parseInt(V)} ${qn[parseInt(F)-1]} · ${j.mm} mm`;return`<circle cx="${q}" cy="${E}" r="${C}" fill="${D}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${q}" cy="${E}" r="${C+6}" fill="transparent" pointer-events="all"><title>${re}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${k}" height="${A}" viewBox="0 0 ${k} ${A}" style="width:100%;display:block">
        ${z}
        <rect x="0" y="${w}" width="${k}" height="${I}" rx="${I/2}" fill="#E0DED8"/>
        ${y}
        ${L}
        <text x="1" y="${P}" font-size="9" fill="#B0AEA8">${M(u[0].iso)}</text>
        <text x="${k-1}" y="${P}" font-size="9" fill="#B0AEA8" text-anchor="end">${M(u[u.length-1].iso)}</text>
      </svg>
    </div>`}function l(r,u,b){const v=document.createElement("div");let g=r.iso,h=r.mm;v.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${r.iso}" />
          <div id="edit-date-hint">${pi(r.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${r.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,v.querySelector("#edit-date").addEventListener("change",k=>{g=k.target.value,v.querySelector("#edit-date-hint").innerHTML=pi(g)}),v.querySelector("#edit-qty").addEventListener("input",k=>{const w=parseInt(k.target.value);w>0&&(h=w)}),vi({title:r.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée",body:v,saveLabel:"Enregistrer",onSave:()=>{r.iso=g,r.mm=h,r.real=g<=Ae,it(),c(b)},onDelete:()=>{const k=pe.indexOf(r);k>-1&&pe.splice(k,1),it(),c(b)}})}function p(r,u){const b=+r,v=document.createElement("div");let g=!1,h=!1;function k(){return new Set(pe.filter(C=>C.plotId===b&&C.fromStrategy&&C.seasonId).map(C=>C.seasonId))}function w(){return pe.some(C=>C.plotId===b&&!C.fromStrategy)}function I(){var C,E,H,P,A,T,M;v.innerHTML=`
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
          ${w()?'<div style="font-size:12px;color:#7A3A00;margin-bottom:8px">Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.</div>':""}
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(C=v.querySelector("#strat-modify"))==null||C.addEventListener("click",()=>{var $;($=document.querySelector(".irr-sheet-overlay"))==null||$.remove();const S=k(),x=e.find(z=>z.id===b),y=x?{ids:[x.id],label:x.name}:null;bi(e,()=>c(u),y,S)}),(E=v.querySelector("#strat-stop"))==null||E.addEventListener("click",()=>{g=!0,h=!1,I()}),(H=v.querySelector("#strat-delete"))==null||H.addEventListener("click",()=>{h=!0,g=!1,I()}),(P=v.querySelector("#stop-cancel"))==null||P.addEventListener("click",()=>{g=!1,I()}),(A=v.querySelector("#stop-confirm"))==null||A.addEventListener("click",()=>{var y;const S=k(),x=pe.filter($=>$.plotId===b&&S.has($.seasonId)&&!$.real).length;pe.splice(0,pe.length,...pe.filter($=>!($.plotId===b&&S.has($.seasonId)&&!$.real))),it(),Pe(b,{type:"modification",date:Ae,texte:`Saison d'irrigation arrêtée (${x} irrigation(s) planifiée(s) annulée(s)).`}),(y=document.querySelector(".irr-sheet-overlay"))==null||y.remove(),c(u)}),(T=v.querySelector("#delete-cancel"))==null||T.addEventListener("click",()=>{h=!1,I()}),(M=v.querySelector("#delete-confirm"))==null||M.addEventListener("click",()=>{var x;const S=pe.filter(y=>y.plotId===b).length;pe.splice(0,pe.length,...pe.filter(y=>y.plotId!==b)),it(),Pe(b,{type:"modification",date:Ae,texte:`Saison d'irrigation supprimée (${S} irrigation(s) retirée(s) du calendrier).`}),(x=document.querySelector(".irr-sheet-overlay"))==null||x.remove(),c(u)})}I(),vi({title:"Gérer la saison",body:v,saveLabel:"Fermer",onSave:()=>{}})}function d(r){if(!r.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const u=[...r].filter(g=>!g.real).sort((g,h)=>g.iso<h.iso?-1:1),b=[...r].filter(g=>g.real).sort((g,h)=>g.iso>h.iso?-1:1);function v(g){const h=g.real?"#FF8500":"#FFB705",k=pe.indexOf(g);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${gt(g.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${h};white-space:nowrap;margin-right:4px">${g.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${k}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${k}" title="Supprimer">🗑</button>
      </div>`}return`
      ${b.length?`
        <details class="irr-section-details" data-section="effectuees"${u.length?"":" open"}>
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${b.length}</span></summary>
          ${b.map(v).join("")}
        </details>`:""}
      ${u.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${u.length}</span></summary>
          ${u.map(v).join("")}
        </details>`:""}
    `}function c(r){var I,C,E,H;const u=r.querySelector(".irr-cal-body");if(!t){u.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const b={};if(u.querySelectorAll("details[data-section]").forEach(P=>{b[P.dataset.section]=P.open}),t==="all"){const P={};for(const M of pe){const S=M.plotId??"unknown";P[S]||(P[S]=[]),P[S].push(M)}const A=Object.keys(P).filter(M=>e.some(S=>String(S.id)===M));if(!A.length){u.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const T=A.sort((M,S)=>{var $,z;const x=(($=e.find(L=>String(L.id)===M))==null?void 0:$.name)??M,y=((z=e.find(L=>String(L.id)===S))==null?void 0:z.name)??S;return x.localeCompare(y,"fr")});u.innerHTML=T.map(M=>{const S=P[M],x=S.some(L=>L.fromStrategy),y=e.find(L=>String(L.id)===M),$=(y==null?void 0:y.name)??M,z=[y==null?void 0:y.crop,y==null?void 0:y.irrigation].filter(Boolean);return`<div style="margin-bottom:20px">
          <button class="irr-cal-plot-link" data-goto-pid="${M}" style="display:flex;align-items:baseline;gap:6px;background:none;border:none;padding:0;margin-bottom:6px;text-align:left;cursor:pointer">
            <span style="font-size:13px;font-weight:700;color:#185FA5;text-decoration:underline">${$}</span>
            ${z.length?`<span style="font-size:11px;color:#8e8e93">${z.join(" · ")}</span>`:""}
          </button>
          ${a(S)}
          ${s(S)}
          ${x?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-pid="${M}">Modifier la saison <i class="bi bi-chevron-down"></i></button>
          </div>`:""}
        </div>`}).join(""),u.querySelectorAll("[data-strat-pid]").forEach(M=>{M.addEventListener("click",()=>p(M.dataset.stratPid,r))}),u.querySelectorAll("[data-goto-pid]").forEach(M=>{M.addEventListener("click",()=>{t=M.dataset.gotoPid;const S=r.querySelector("#cal-filter-sel");S&&(S.value=t),c(r)})});return}const v=o(),g=v.some(P=>P.fromStrategy),h=t!=="all"?e.find(P=>String(P.id)===String(t)):null,k=h?`<button class="irr-cal-plot-link" id="cal-goto-plot" style="display:inline-flex;align-items:center;gap:5px;background:none;border:none;padding:0;text-align:left;cursor:pointer;font-size:13px;font-weight:700;color:#185FA5;text-decoration:underline">
          <svg width="13" height="13" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.23205 12.5C5.56103 11.809 4.98368 11.1423 4.5 10.5H3.49984C3.12107 10.5 2.77481 10.714 2.60542 11.0528L0.105694 16.0522C-0.0492999 16.3622 -0.0330139 16.7309 0.149193 17.0257C0.331399 17.3205 0.653266 17.5 0.999844 17.5H17.9998C18.3464 17.5 18.6683 17.3205 18.8505 17.0257C19.0327 16.7309 19.0493 16.3628 18.8943 16.0528L16.3943 11.0528C16.2249 10.714 15.8786 10.5 15.4998 10.5H14.5C14.0163 11.1423 13.439 11.809 12.768 12.5H14.8818L16.3818 15.5H2.61788L4.11788 12.5H6.23205Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.49984 14C9.40818 14 9.31651 13.9822 9.22484 13.9465C9.13318 13.9108 9.05297 13.8633 8.98422 13.8038C7.3113 12.2701 6.06234 10.8464 5.23734 9.53284C4.41234 8.2188 3.99984 6.99108 3.99984 5.84968C3.99984 4.06624 4.55282 2.64544 5.65878 1.58726C6.76428 0.529087 8.04464 0 9.49984 0C10.9551 0 12.2354 0.529087 13.3409 1.58726C14.4469 2.64544 14.9998 4.06624 14.9998 5.84968C14.9998 6.99108 14.5873 8.2188 13.7623 9.53284C12.9373 10.8464 11.6884 12.2701 10.0155 13.8038C9.94672 13.8633 9.86651 13.9108 9.77484 13.9465C9.68318 13.9822 9.59151 14 9.49984 14ZM9.49984 7C10.6044 7 11.4998 6.10457 11.4998 5C11.4998 3.89543 10.6044 3 9.49984 3C8.39527 3 7.49984 3.89543 7.49984 5C7.49984 6.10457 8.39527 7 9.49984 7Z" fill="currentColor"/></svg>
          Voir la parcelle
        </button>`:"",w=g?`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison <i class="bi bi-chevron-down"></i></button>
           ${k}
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
           ${k}
         </div>`;u.innerHTML=`
      ${a(v)}
      ${s(v)}
      ${w}
      ${d(v)}
    `,(I=u.querySelector("#cal-goto-plot"))==null||I.addEventListener("click",()=>{h&&ks(h.id,e)}),u.querySelectorAll("details[data-section]").forEach(P=>{const A=P.dataset.section;A in b&&(P.open=b[A])}),u.querySelectorAll(".irr-edit-btn").forEach(P=>{P.addEventListener("click",A=>{A.stopPropagation();const T=pe[+P.dataset.iidx];T&&l(T,v,r)})}),u.querySelectorAll(".irr-del-btn").forEach(P=>{P.addEventListener("click",A=>{A.stopPropagation();const T=+P.dataset.iidx;T>=0&&(pe.splice(T,1),it(),c(r))})}),(C=u.querySelector("#open-strat-edit"))==null||C.addEventListener("click",()=>{p(t,r)}),(E=u.querySelector("#cal-add-irrig"))==null||E.addEventListener("click",()=>{Ls(e,()=>c(r),n(t))}),(H=u.querySelector("#cal-add-strat"))==null||H.addEventListener("click",()=>{bi(e,()=>c(r),n(t))})}const m=[...e].sort((r,u)=>r.name.localeCompare(u.name,"fr")).map(r=>`<option value="${r.id}"${String(r.id)===String(t)?" selected":""}>${r.name}</option>`).join(""),f=at(ge(`
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
          ${m}
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));f.querySelector("#cal-back").addEventListener("click",ve),f.querySelector("#cal-filter-sel").addEventListener("change",r=>{t=r.target.value,c(f)}),c(f)}const st=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:Ut,checkIcon:mi,flexLayer:at,goToPlot:ks,openCalendar:As,openIrrigationSaisie:Ls,openIrrigationStrategie:bi},Symbol.toStringTag,{value:"Module"})),jn=[{name:"Allier AgriTech",distance:8,adherents:31,capteurs:198,parcelles:1140,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Auvergne Agri Conseil",distance:15,adherents:54,capteurs:361,parcelles:2080,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]},{name:"Réseau Bourbonnais",distance:22,adherents:18,capteurs:112,parcelles:630,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Creuse Agri Net",distance:38,adherents:12,capteurs:74,parcelles:410,sharedSensorTypes:["Capteurs d'irrigation"]},{name:"Puy-de-Dôme Connect",distance:45,adherents:39,capteurs:255,parcelles:1490,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]}],Ji={name:"Breiz'Agri Conseil",city:"Rennes (35)",phone:"02 99 XX XX XX",email:"contact@breizagri.fr",capteurs:312,parcelles:1830,sharedSensorTypes:["Capteurs météo"]},Pn=["Capteurs météo","Capteurs d'irrigation","Stations météo virtuelles"];function Wi(e){return e.split(" ").filter(i=>i.length>2).slice(0,2).map(i=>i[0].toUpperCase()).join("")}const De={prenom:"Pierre",nom:"Jourdain",email:"pierre@gaec-jourdain.fr",phone:"06 71 23 45 67",orgName:"GAEC Jourdain",adresse:"Lieu-dit La Croix Blanche, 03500 Saint-Pourçain-sur-Sioule",selectedPlan:"expert",joinNetwork:!0},Ms={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre 15/30 cm","CHP-30/60":"Tensiomètre 30/60 cm","CHP-60/90":"Tensiomètre 60/90 cm","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},zn={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]},Dn=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),Fn={"CHP-15/30":[15,30],"CHP-30/60":[30,60],"CHP-60/90":[45,90]},ii=[{id:"essential",name:"Weenat Essential",priceNum:0,price:"Gratuit",color:"#636366",features:["Aucun capteur physique","Historique illimité","Alertes","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"plus",name:"Weenat Plus",priceNum:16.5,price:"16,5 €/mois",color:"#00B093",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"expert",name:"Weenat Expert",priceNum:30,price:"30 €/mois",color:"#006798",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées","Capteurs irrigation","Fonctionnalités irrigation"]}],si={Administrateur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!0}]}],Agent:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}],Lecteur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!1}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!1}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!1},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}]};function _n(e,i,t,n){const o=i==="essential",a=i==="expert";return e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?["signup","verify","emailVerified","creating","done"]:e==="new-adherent"?["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkInfo","invite","plan",...a?["volumeChoice"]:[],"creating","done"]:["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkChoice",...t?["networkPick"]:[],"invite","plan",...o?[]:["payment","paymentConfirmed"],...a?["volumeChoice"]:[],"creating","done"]}function Hn(e,i,t,n){return _n(e,i,t)}const Bn={signup:"Inscription",verify:"Vérification",orgName:"Exploitation",geoloc:"Localisation",orgInfo:"Informations",networkChoice:"Réseau",networkPick:"Choisir un réseau",networkInfo:"Mon réseau",invite:"Invitations",plan:"Abonnement",payment:"Paiement",paymentConfirmed:"Paiement",volumeChoice:"Volume autorisé",parcelMap:"Parcelle",parcelSource:"Source de données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"};function Rn(e,i){const t=document.getElementById("phone-screen");let n=0,o=e==="new-adherent"?"expert":De.selectedPlan,a=De.joinNetwork,s=!1,l=0,p=!0,d=46.3021,c=3.2938,m=null,f=null,r="smv",u=[],b="Parcelle 1";const v=document.createElement("div");v.id="onboarding-overlay",v.className="m-ob-overlay",t.appendChild(v);function g(){return Hn(e,o,a)}function h(){return g()[n]}function k(){return g().filter(O=>!["creating","done","parcelDone","emailVerified","paymentConfirmed"].includes(O)).length}function w(){return ii.find(O=>O.id===o)}function I(){const O=g().slice(0,n).filter(W=>W!=="creating"&&W!=="done"&&W!=="parcelDone").length;return`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Math.round(O/k()*100)}%"></div></div>`}function C(O,J=!0){const W=h(),R=new Set(["creating","done","parcelDone","emailVerified","paymentConfirmed"]),_=J&&n>0&&!R.has(W),B=Bn[W]||"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${_?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${B}</span>
          <div style="width:32px"></div>
        </div>
        ${R.has(W)?"":I()}
        <div class="m-ob-body">${O}</div>
      </div>`}function E(){n++,Je()}function H(){n--,Je()}function P(){return C(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-person"></i></div>
        <h2 class="m-ob-h2">Créer mon compte</h2>
      </div>
      <div class="m-ob-form" style="margin-top:20px">
        <div class="m-ob-row2">
          <div class="m-ob-field">
            <label class="m-ob-label">Prénom</label>
            <input class="m-ob-input" type="text" placeholder="Prénom" value="${De.prenom}">
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">Nom</label>
            <input class="m-ob-input" type="text" placeholder="Nom" value="${De.nom}">
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Adresse email professionnelle</label>
          <input class="m-ob-input" type="email" placeholder="Adresse email professionnelle" value="${De.email}">
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
            <input class="m-ob-input m-ob-input--phone" type="tel" placeholder="06 12 12 12 12" value="${De.phone}">
          </div>
        </div>
        <label class="m-ob-cgu-row">
          <input type="checkbox" checked>
          <span>J'ai lu et j'accepte les <a href="#">conditions d'utilisations</a> et la <a href="#">politique de confidentialité</a></span>
        </label>
      </div>
      <button class="m-ob-cta" id="ob-next">Créer mon compte</button>
    `,!1)}function A(){return C(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-envelope-check"></i></div>
        <h2 class="m-ob-h2">Vérifiez votre adresse email</h2>
        <p class="m-ob-sub">Un e-mail a été envoyé à<br><strong>${De.email}</strong></p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Code de vérification</label>
          <input class="m-ob-input m-ob-input--code" type="text" value="847291" maxlength="6" inputmode="numeric">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Confirmer</button>
      <button class="m-ob-link" type="button">Renvoyer le code</button>
    `)}function T(){return`
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
          <p class="m-ob-sub" style="text-align:center"><strong>${De.email}</strong><br>a bien été confirmée.</p>
          <button class="m-ob-cta" id="ob-next" style="margin-top:12px">Continuer</button>
        </div>
      </div>`}function M(){return C(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-building"></i></div>
        <h2 class="m-ob-h2">Votre exploitation</h2>
        <p class="m-ob-sub">Comment s'appelle votre exploitation ?</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de l'exploitation</label>
          <input class="m-ob-input" type="text" value="${De.orgName}">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function S(){return C(`
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
            <input class="m-ob-input" type="text" value="${De.adresse}">
          </div>
          <div id="ob-addr-map" class="m-ob-addr-map"></div>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      </div>
    `)}function x(){const O=$s.map(J=>`<button type="button" class="m-ob-pill" data-metier="${J}">${J}</button>`).join("");return C(`
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
    `)}function y(){return C(`
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
    `)}function $(){const O=jn.map(J=>{var W;return`
      <div class="m-ob-net-row" data-net="${J.name}">
        <div class="m-ob-net-avatar">${Wi(J.name)}</div>
        <div class="m-ob-net-info">
          <div class="m-ob-net-name">${J.name}</div>
          <div class="m-ob-net-meta">${J.distance} km · ${J.capteurs} capteurs · ${J.parcelles} parcelles</div>
          ${(W=J.sharedSensorTypes)!=null&&W.length?`<div class="m-ob-net-tags">${J.sharedSensorTypes.map(R=>`<span class="m-ob-net-tag">${R}</span>`).join("")}</div>`:""}
        </div>
        <div class="m-ob-net-check"><i class="bi bi-circle"></i></div>
      </div>`}).join("");return C(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-building-check"></i></div>
        <h2 class="m-ob-h2">Choisir un réseau</h2>
        <p class="m-ob-sub">Les 5 réseaux les plus proches de votre exploitation.</p>
      </div>
      <div class="m-ob-net-list">${O}</div>
      <button class="m-ob-cta" id="ob-next">Rejoindre</button>
    `)}function z(){var J;const O=Ji;return C(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3-fill"></i></div>
        <h2 class="m-ob-h2">Mon réseau</h2>
        <p class="m-ob-sub">Vous avez été invité à rejoindre ce réseau.</p>
      </div>
      <div class="m-ob-info-card" style="background:var(--bg2,#f5f5f7);border-radius:12px;padding:20px 16px;margin:0 0 16px">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:14px">
          <div class="m-ob-net-avatar" style="width:64px;height:64px;font-size:24px;border-radius:16px;margin-bottom:8px">${Wi(O.name)}</div>
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
          ${(J=O.sharedSensorTypes)!=null&&J.length?`
          <div style="font-size:13px;color:#3a3a3c;margin-bottom:8px">Capteurs partagés entre les adhérents :</div>
          <div class="m-ob-pills">${Pn.map(W=>`<span class="m-ob-pill${O.sharedSensorTypes.includes(W)?" m-ob-pill--on":" m-ob-pill--off"}" style="cursor:default">${W}</span>`).join("")}</div>
          `:`<div style="font-size:13px;color:#3a3a3c">Aucun capteur n'est partagé entre les adhérents de ce réseau</div>`}
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function L(O){const J=si[O];return J?`<div class="m-ob-role-perms">${J.map(W=>`
      <div class="m-rp-section">
        <div class="m-rp-section-title">${W.section}</div>
        ${W.items.map(R=>`
          <div class="m-rp-item">
            <i class="bi bi-${R.ok?"check-circle-fill":"x-circle-fill"}" style="color:${R.ok?"#30d158":"#ff3b30"}"></i>
            <span>${R.label}</span>
          </div>`).join("")}
      </div>`).join("")}</div>`:""}function j(O){const J=si[O];return J?`<div class="m-rp-summary">${J.map(R=>{const _=R.items.filter(Q=>Q.ok).length,B=_===0?"none":_===R.items.length?"full":"partial",Y={full:"check-circle-fill",partial:"dash-circle-fill",none:"x-circle"}[B],G={full:"#30d158",partial:"#ff9500",none:"#c7c7cc"}[B],ne=R.section.replace("Exploitations adhérentes","Adhérents");return`<div class="m-rp-badge"><i class="bi bi-${Y}" style="color:${G}"></i><span>${ne}</span></div>`}).join("")}</div>`:""}function D(){const O=Object.keys(si);return`
      <button type="button" class="m-rp-toggle" id="ob-roles-info-toggle"><span>Comparer les droits par rôle</span><i class="bi bi-chevron-down"></i></button>
      <div class="m-ob-roles-info" id="ob-roles-info" hidden>
        <div class="m-ob-roles-tabs">${O.map((J,W)=>`<button type="button" class="m-ob-roles-tab${W===0?" m-ob-roles-tab--on":""}" data-role="${J}">${J}</button>`).join("")}</div>
        <div id="ob-roles-info-detail">${L(O[0])}</div>
      </div>`}function q(){return`
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
      </div>`}function F(){return C(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-people"></i></div>
        <h2 class="m-ob-h2">Inviter des membres</h2>
        <p class="m-ob-sub">Ajoutez des collègues de votre exploitation. Salariés, chefs de culture, conseillers externes...</p>
        <p class="m-ob-sub" style="margin-top:6px">Chaque membre implique une licence payante additionnelle.</p>
      </div>
      ${D()}
      <div id="ob-invite-list">${q()}</div>
      <button class="m-ob-add-member" id="ob-add-member" type="button"><i class="bi bi-plus-circle"></i> Ajouter un membre</button>
      <button class="m-ob-cta" id="ob-send-invites">Continuer</button>
      <button class="m-ob-link" id="ob-skip-invite" type="button">Passer cette étape</button>
    `)}function V(){const O=e==="new-adherent",J=Ji;if(O){const R=ii.find(B=>B.id==="expert"),_=R.features.map(B=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${R.color}"></i> ${B}</li>`).join("");return C(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-gift"></i></div>
          <h2 class="m-ob-h2">Votre abonnement</h2>
          <p class="m-ob-sub">Le réseau <strong>${J.name}</strong> vous a invité à profiter de l'abonnement <strong style="color:${R.color}">Weenat Expert</strong>. Découvrez ce qu'il comprend.</p>
        </div>
        <div class="m-ob-sub-card m-ob-sub-card--on" style="--plan-color:${R.color}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${R.color}">${R.name}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${R.color};background:${R.color}">
              <i class="bi bi-check" style="color:#fff;font-size:13px"></i>
            </div>
          </div>
          <ul class="m-ob-feat-list" style="display:block;margin-top:10px">${_}</ul>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      `)}const W=ii.map(R=>{const _=R.id===o,B=R.features.map(Y=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${R.color}"></i> ${Y}</li>`).join("");return`
        <div class="m-ob-sub-card${_?" m-ob-sub-card--on":""}" data-plan="${R.id}" style="${_?`--plan-color:${R.color}`:""}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${R.color}">${R.name}${R.id==="expert"?' <span style="font-size:11px;font-weight:400;opacity:.8">(irrigation)</span>':""}</div>
              <div class="m-ob-sub-price">${R.price}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${_?R.color:"#c7c7cc"};background:${_?R.color:"transparent"}">
              ${_?'<i class="bi bi-check" style="color:#fff;font-size:13px"></i>':""}
            </div>
          </div>
          <button class="m-ob-feat-toggle" data-plan="${R.id}" type="button">
            Ce qui est inclus <i class="bi bi-chevron-down"></i>
          </button>
          <ul class="m-ob-feat-list" id="feat-${R.id}" style="display:none">${B}</ul>
        </div>`}).join("");return C(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-grid-1x2"></i></div>
        <h2 class="m-ob-h2">Votre abonnement</h2>
        <p class="m-ob-sub">Choisissez le plan qui correspond à vos besoins.</p>
      </div>
      <div class="m-ob-sub-cards">${W}</div>
      <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
    `)}function re(){const O=w(),J=l+1,W=J*O.priceNum,R=W*12,_=B=>B%1===0?`${B}`:B.toFixed(1).replace(".",",");return C(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-credit-card"></i></div>
        <h2 class="m-ob-h2">Paiement</h2>
      </div>
      <div class="m-ob-pay-summary">
        <div class="m-ob-pay-line">
          <span style="color:${O.color};font-weight:700">${O.name}</span>
          <span class="m-ob-pay-price" style="color:${O.color}">${_(O.priceNum)} €<span class="m-ob-pay-period">/licence/mois</span></span>
        </div>
        ${J>1?`
        <div class="m-ob-pay-line" style="margin-top:6px">
          <span style="font-size:13px;color:#636366">${J} licences (${l} invité${l>1?"s":""} + vous)</span>
          <span style="font-size:15px;font-weight:700;color:${O.color}">${_(W)} €/mois</span>
        </div>
        <button class="m-ob-link" id="ob-remove-invites" type="button" style="font-size:12px;color:#636366;padding:2px 0;text-align:left">Retirer les invités et ne prendre qu'une licence</button>`:""}
        <div class="m-ob-pay-divider"></div>
        <div class="m-ob-pay-line">
          <span style="font-weight:600">Total annuel</span>
          <span style="font-size:17px;font-weight:700;color:${O.color}">${_(R)} €/an</span>
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
      <button class="m-ob-cta" id="ob-next" style="background:${O.color}"><i class="bi bi-lock-fill" style="font-size:13px"></i> Payer ${_(R)} €</button>
      <p class="m-ob-legal" style="margin-top:10px"><i class="bi bi-shield-check"></i> Paiement sécurisé SSL · Données chiffrées</p>
    `)}function ie(){return C(`
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
    `)}function se(){return w(),`
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
            <p class="m-ob-sub" style="text-align:center">Un reçu de votre paiement vous a été envoyé par email à <strong>${De.email}</strong>.</p>
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
      </div>`}function oe(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-spinner"><div class="m-ob-spinner-ring"></div></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Création de votre espace…</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?"Nous configurons votre accès et créons votre exploitation par défaut.":"Nous configurons votre exploitation."}</p>
      </div>`}function ye(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Votre espace est prêt !</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?`Votre compte a été créé. Votre exploitation par défaut <strong>Exploitation ${De.nom}</strong> est prête.`:"Une parcelle et une station météo virtuelle ont été créées à l'adresse de votre exploitation. Vous pouvez les modifier ou les supprimer."}</p>
        <button class="m-ob-cta" id="ob-finish" style="margin-top:32px">Accéder à mon exploitation</button>
      </div>`}function qe(){return C(`
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
    `)}function Re(){if(o==="essential")return E(),"";const W=["P+","CHP-15/30","CAPA-30-3","EC"].map(_=>le.find(B=>B.orgId===1&&B.model===_)).filter(Boolean);return C(`
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
        ${W.map(_=>`
          <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:.5px solid rgba(0,0,0,.08);cursor:pointer">
            <input type="checkbox" ${u.includes(_.id)?"checked":""} data-sensor-id="${_.id}" style="width:18px;height:18px;flex-shrink:0">
            <div>
              <div style="font-size:14px;font-weight:600;color:#1c1c1e">${Ms[_.model]||_.model}</div>
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
    `)}function Ve(){const O=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),J=new Set(["EC"]),W=le.filter(B=>u.includes(B.id)),R=W.some(B=>O.has(B.model)),_=W.some(B=>J.has(B.model));return C(`
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
        ${R?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${Li.map(B=>`<option>${B}</option>`).join("")}
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
            ${Gt.map(B=>`<option${B==="Non irrigué"?" selected":""}>${B}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function Qe(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub">
          <strong>${b}</strong> a été créée avec succès.
          ${o==="essential"?"<br>Une station météo virtuelle a été ajoutée au centre de la parcelle.":""}
        </p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Accéder au tableau de bord</button>
      </div>`}const Tt={signup:P,verify:A,emailVerified:T,orgName:M,geoloc:S,orgInfo:x,networkChoice:y,networkPick:$,networkInfo:z,invite:F,plan:V,payment:re,paymentConfirmed:se,volumeChoice:ie,creating:oe,done:ye,parcelMap:qe,parcelSource:Re,parcelConfig:Ve,parcelDone:Qe};function Je(){const O=Tt[h()];if(!O)return;const J=O();J&&(v.innerHTML=J),Ee()}function N(){l=[...v.querySelectorAll("#ob-invite-list .m-ob-input--email")].filter(J=>J.value.trim()).length}function te(){const O=window.L;O&&setTimeout(()=>{const J=v.querySelector("#ob-parcel-map");if(!J||J._leaflet_id)return;f=O.map(J,{zoomControl:!0,attributionControl:!1}).setView([d,c],15),O.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(f),O.circleMarker([d,c],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(f);const W=d+45e-5;m=O.marker([W,c],{icon:O.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),draggable:!0}).addTo(f),m.on("dragend",()=>{const R=m.getLatLng();d=R.lat,c=R.lng}),f.invalidateSize()},50)}const Z=new Set(["orgInfo","networkChoice","networkPick","plan","payment","volumeChoice"]);function ee(){const O=h();if(!Z.has(O))return;const J=v.querySelector("#ob-next");if(!J)return;let W=!0;O==="orgInfo"?W=v.querySelectorAll(".m-ob-pill--on").length>0:O==="networkChoice"?W=v.querySelectorAll("[data-join].m-ob-plan-card--on").length>0:O==="networkPick"?W=v.querySelectorAll("[data-net].m-ob-net-row--on").length>0:O==="plan"?W=v.querySelectorAll(".m-ob-sub-card--on").length>0:O==="payment"?W=[...v.querySelectorAll(".m-ob-form .m-ob-input")].every(_=>_.value.trim().length>0):O==="volumeChoice"&&(W=v.querySelectorAll("[data-volume].m-ob-plan-card--on").length>0),J.disabled=!W,J.style.opacity=W?"":"0.4"}function Ee(){var J,W,R,_,B,Y,G,ne,Q,be,ae,ce,fe,we,ke,xe;(J=v.querySelector("#ob-back"))==null||J.addEventListener("click",H),v.querySelectorAll("#ob-next").forEach(K=>K.addEventListener("click",E)),(W=v.querySelector("#ob-pw-eye"))==null||W.addEventListener("click",()=>{s=!s;const K=v.querySelector("#ob-pw");K&&(K.type=s?"text":"password");const X=v.querySelector("#ob-pw-eye i");X&&(X.className=s?"bi bi-eye":"bi bi-eye-slash")}),v.querySelectorAll(".m-ob-sub-card").forEach(K=>{K.addEventListener("click",X=>{X.target.closest(".m-ob-feat-toggle")||(o=K.dataset.plan,Je())})}),v.querySelectorAll(".m-ob-feat-toggle").forEach(K=>{K.addEventListener("click",X=>{X.stopPropagation();const me=v.querySelector(`#feat-${K.dataset.plan}`),je=K.querySelector(".bi");if(!me)return;const ze=me.style.display!=="none";me.style.display=ze?"none":"block",je.className=`bi bi-chevron-${ze?"down":"up"}`})}),v.querySelectorAll("[data-join]").forEach(K=>{K.addEventListener("click",()=>{a=K.dataset.join==="oui",v.querySelectorAll("[data-join]").forEach(X=>X.classList.toggle("m-ob-plan-card--on",X===K)),ee()})}),v.querySelectorAll("[data-net]").forEach(K=>{K.addEventListener("click",()=>{v.querySelectorAll("[data-net]").forEach(X=>{const me=X===K;X.classList.toggle("m-ob-net-row--on",me),X.querySelector(".bi").className=`bi bi-${me?"check-circle-fill":"circle"}`}),ee()})});const O=()=>{var me;(me=v.querySelector("#ob-geoloc-btns"))==null||me.remove();const K=v.querySelector("#ob-geoloc-addr");K&&(K.style.display="");const X=window.L;X&&setTimeout(()=>{const je=v.querySelector("#ob-addr-map");if(!je||je._leaflet_id)return;const ze=X.map(je,{zoomControl:!0,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}).setView([46.3021,3.2938],13);X.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:18}).addTo(ze),X.marker([46.3021,3.2938]).addTo(ze)},50)};(R=v.querySelector("#ob-geoloc-allow"))==null||R.addEventListener("click",O),(_=v.querySelector("#ob-geoloc-manual"))==null||_.addEventListener("click",O),v.querySelectorAll(".m-ob-pill").forEach(K=>{K.addEventListener("click",()=>{K.classList.toggle("m-ob-pill--on"),ee()})}),(B=v.querySelector("#ob-add-member"))==null||B.addEventListener("click",()=>{const K=v.querySelector("#ob-invite-list"),X=document.createElement("div");X.innerHTML=q(),K.appendChild(X.firstElementChild)}),(Y=v.querySelector("#ob-invite-list"))==null||Y.addEventListener("click",K=>{const X=K.target.closest(".m-ob-invite-remove");if(!X)return;const me=X.closest(".m-ob-invite-item");me&&me.remove()}),(G=v.querySelector("#ob-roles-info-toggle"))==null||G.addEventListener("click",()=>{const K=v.querySelector("#ob-roles-info-toggle"),X=v.querySelector("#ob-roles-info"),me=!X.hidden;X.hidden=me,K.classList.toggle("m-rp-toggle--open",!me),K.querySelector("span").textContent=me?"Comparer les droits par rôle":"Masquer la comparaison des rôles"}),(ne=v.querySelector("#ob-roles-info"))==null||ne.addEventListener("click",K=>{const X=K.target.closest(".m-ob-roles-tab");X&&(v.querySelectorAll(".m-ob-roles-tab").forEach(me=>me.classList.toggle("m-ob-roles-tab--on",me===X)),v.querySelector("#ob-roles-info-detail").innerHTML=L(X.dataset.role))}),(Q=v.querySelector("#ob-invite-list"))==null||Q.addEventListener("change",K=>{var je;const X=K.target.closest(".m-ob-invite-role-sel");if(!X)return;const me=(je=X.closest(".m-ob-invite-item"))==null?void 0:je.querySelector(".m-ob-role-summary-wrap");me&&(me.innerHTML=j(X.value))}),(be=v.querySelector("#ob-remove-invites"))==null||be.addEventListener("click",()=>{l=0,Je()}),(ae=v.querySelector("#ob-send-invites"))==null||ae.addEventListener("click",()=>{N(),E()}),(ce=v.querySelector("#ob-skip-invite"))==null||ce.addEventListener("click",()=>{l=0,E()}),v.querySelectorAll("[data-psource]").forEach(K=>{K.addEventListener("click",()=>{r=K.dataset.psource,v.querySelectorAll("[data-psource]").forEach(X=>X.classList.toggle("m-ob-plan-card--on",X===K)),v.querySelector("#ob-link-sensors").style.display=r==="link"?"block":"none",v.querySelector("#ob-add-sensor-form").style.display=r==="add"?"block":"none"})}),v.querySelectorAll("[data-sensor-id]").forEach(K=>{K.addEventListener("change",()=>{const X=parseInt(K.dataset.sensorId);K.checked?u.includes(X)||u.push(X):u=u.filter(Fe=>Fe!==X);const je=le.filter(Fe=>u.includes(Fe.id)).filter(Fe=>!Dn.has(Fe.model)),ze={};je.forEach(Fe=>(zn[Fe.model]||[]).forEach(ji=>{ze[ji]=(ze[ji]||0)+1}));const pt=Object.entries(ze).filter(([,Fe])=>Fe>1).map(([Fe])=>Fe),lt=v.querySelector("#ob-sensor-conflict"),It=v.querySelector("#ob-sensor-conflict-msg");lt&&It&&(pt.length>0?(It.textContent=`Plusieurs capteurs mesurent la même métrique (${pt.join(", ")}). Décochez l'un des capteurs redondants.`,lt.style.display="flex"):lt.style.display="none")})}),v.querySelectorAll("[data-volume]").forEach(K=>{K.addEventListener("click",()=>{p=K.dataset.volume==="oui",v.querySelectorAll("[data-volume]").forEach(me=>me.classList.toggle("m-ob-plan-card--on",me===K));const X=v.querySelector("#ob-volume-field");X&&(X.style.display=p?"block":"none"),ee()})}),(fe=v.querySelector("#ob-skip-source"))==null||fe.addEventListener("click",()=>{r="smv",E()}),(we=v.querySelector("#ob-parcel-name"))==null||we.addEventListener("input",K=>{b=K.target.value}),h()==="parcelMap"&&te(),h()==="creating"&&setTimeout(()=>{n++,Je()},2200),(ke=v.querySelector("#ob-finish"))==null||ke.addEventListener("click",()=>{v.classList.add("m-ob-overlay--out"),setTimeout(()=>{v.remove(),i()},400)}),(xe=v.querySelector("#ob-see-parcel"))==null||xe.addEventListener("click",()=>{v.classList.add("m-ob-overlay--out"),setTimeout(()=>{v.remove(),i()},400)}),v.querySelectorAll(".m-ob-form .m-ob-input").forEach(K=>{K.addEventListener("input",ee)}),ee()}Je()}const On=["Ail","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Colza","Courgette","Féverole","Haricot vert","Laitue","Lin oléagineux","Luzerne","Maïs fourrage","Maïs grain","Orge d'hiver","Orge de printemps","Oignon","Pêcher","Pois protéagineux","Poireau","Poirier","Pomme de terre","Pommier","Prairie","Prunier","Ray-grass","Soja","Tomate","Tournesol","Trèfle","Vigne"];function Ts({showBack:e=!0,btnLabel:i="Ajouter",showSkip:t=!1}={}){return`
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
          <select class="m-ob-input m-ob-input--select" id="ob-sensor-model" style="margin-bottom:12px">
            ${Object.entries(Ms).map(([n,o])=>`<option value="${n}">${o} (${n})</option>`).join("")}
          </select>
          <div class="m-ob-field" id="ob-sensor-depth-field" style="display:none;margin-bottom:12px">
            <label class="m-ob-label">Profondeur d'installation</label>
            <select class="m-ob-input m-ob-input--select" id="ob-sensor-depth"></select>
          </div>
          <button class="m-ob-cta" id="ob-next" style="margin:0 0 12px"><i class="bi bi-plus-lg"></i> ${i}</button>
          ${t?'<button class="m-ob-link" id="ob-skip-source" type="button" style="margin-bottom:8px">Passer cette étape</button>':""}
        </div>
      </div>
    </div>`}function Is(e){const i=e.querySelector("#ob-sensor-model"),t=e.querySelector("#ob-sensor-depth-field"),n=e.querySelector("#ob-sensor-depth");if(!i||!t||!n)return;const o=()=>{const a=Fn[i.value];if(!a){t.style.display="none";return}const s=[];for(let l=a[0];l<=a[1];l+=5)s.push(l);n.innerHTML=s.map(l=>`<option value="${l}">${l} cm</option>`).join(""),t.style.display=""};i.addEventListener("change",o),o()}async function Nn(e,i){var t,n,o,a;try{const l=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${i}`)).json();return((t=l.address)==null?void 0:t.village)||((n=l.address)==null?void 0:n.town)||((o=l.address)==null?void 0:o.city)||((a=l.address)==null?void 0:a.municipality)||""}catch{return""}}function Vn(e){const i=document.getElementById("phone-screen");let t=46.3021,n=3.2938,o=null,a=null,s=46.3021+45e-5,l=3.2938,p=null,d=null,c="smv",m=[],f="",r=0;const u=["parcelMap","parcelSource","parcelData","parcelConfig","parcelDone"],b={parcelMap:"Parcelle",parcelSource:"Source de données",parcelData:"Données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"},v=document.createElement("div");v.id="parcel-creation-overlay",v.className="m-ob-overlay",i.appendChild(v);function g(){return u[r]}function h(){r++,S()}function k(){r--,S()}function w($,z=!0){const L=g(),j=z&&r>0&&L!=="parcelDone",D=b[L]||"",q=u.filter(ie=>ie!=="parcelDone"),F=q.indexOf(L),V=F>=0?Math.round(F/q.length*100):100,re=L!=="parcelDone"?`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${V}%"></div></div>`:"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${j?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${D}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${re}
        <div class="m-ob-body">${$}</div>
      </div>`}function I(){return w(`
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
    `,!1)}function C(){return w(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(z=>`
          <div class="m-ob-plan-card${c===z.id?" m-ob-plan-card--on":""}" data-psource="${z.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${z.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${z.title}</div>
                <div class="m-ob-plan-desc">${z.desc}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
      <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
    `)}function E(){if(c==="smv")return w(`
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
      `);if(c==="link"){const $=le.slice(0,6);return w(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-link-45deg"></i></div>
          <h2 class="m-ob-h2">Lier un capteur</h2>
          <p class="m-ob-sub">Sélectionnez les capteurs à lier à cette parcelle.</p>
        </div>
        <div style="background:#fff;border-radius:12px;overflow:hidden;border:.5px solid rgba(0,0,0,.1);margin-bottom:16px">
          ${$.map((z,L)=>`
            <label style="display:flex;align-items:center;gap:12px;padding:12px 14px;${L<$.length-1?"border-bottom:.5px solid rgba(0,0,0,.08)":""};cursor:pointer">
              <input type="checkbox" ${m.includes(z.id)?"checked":""} data-sensor-id="${z.id}" style="width:18px;height:18px;flex-shrink:0">
              <div>
                <div style="font-size:14px;font-weight:600">${z.model}</div>
                <div style="font-size:12px;color:#636366">${z.serial}</div>
              </div>
            </label>`).join("")}
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
        <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
      `)}return Ts({showBack:!0,btnLabel:"Continuer",showSkip:!0})}function H(){const $=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),z=new Set(["EC"]),L=le.filter(F=>m.includes(F.id)),j=L.some(F=>$.has(F.model)),D=L.some(F=>z.has(F.model)),q=Gt.filter(F=>F!=="Non renseigné");return f||Nn(t,n).then(F=>{if(!F)return;f=F;const V=v.querySelector("#ob-parcel-name");V&&!V._edited&&(V.value=F)}),w(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${f}" placeholder="Chargement…">
        </div>
        ${j?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${Li.map(F=>`<option>${F}</option>`).join("")}
          </select>
        </div>
        ${D?`
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
            ${On.map(F=>`<option>${F}</option>`).join("")}
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
            ${q.map(F=>`<option>${F}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function P(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub"><strong>${f||"La parcelle"}</strong> a été créée avec succès.</p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function A(){const $=window.L;$&&setTimeout(()=>{const z=v.querySelector("#ob-parcel-map");if(!z||z._leaflet_id)return;a=$.map(z,{zoomControl:!0,attributionControl:!1}).setView([t,n],15),$.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(a),$.circleMarker([t,n],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(a);const L=$.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});o=$.marker([t+45e-5,n],{icon:L,draggable:!0}).addTo(a),o.on("dragend",()=>{const j=o.getLatLng();t=j.lat,n=j.lng}),a.on("click",j=>{t=j.latlng.lat,n=j.latlng.lng,o.setLatLng([t,n])}),a.invalidateSize()},50)}function T(){const $=window.L;$&&(s=t+45e-5,l=n,setTimeout(()=>{const z=v.querySelector("#ob-smv-map");if(!z||z._leaflet_id)return;d=$.map(z,{zoomControl:!0,attributionControl:!1}).setView([t,n],15),$.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(d),$.circleMarker([t,n],{radius:8,color:"#fff",weight:2,fillColor:"#E05252",fillOpacity:1}).addTo(d);const L=$.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#0172A4;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});p=$.marker([s,l],{icon:L,draggable:!0}).addTo(d),p.on("dragend",()=>{const j=p.getLatLng();s=j.lat,l=j.lng}),d.on("click",j=>{s=j.latlng.lat,l=j.latlng.lng,p.setLatLng([s,l])}),d.invalidateSize()},50))}const M={parcelMap:I,parcelSource:C,parcelData:E,parcelConfig:H,parcelDone:P};function S(){var z;const $=(z=M[g()])==null?void 0:z.call(M);$&&(v.innerHTML=$),y()}function x(){v.classList.add("m-ob-overlay--out"),setTimeout(()=>{v.remove(),e()},400)}function y(){var z,L,j,D,q;(z=v.querySelector("#ob-back"))==null||z.addEventListener("click",k),(L=v.querySelector("#ob-close"))==null||L.addEventListener("click",x),v.querySelectorAll("#ob-next").forEach(F=>F.addEventListener("click",h)),Is(v),v.querySelectorAll("[data-psource]").forEach(F=>{F.addEventListener("click",()=>{c=F.dataset.psource,v.querySelectorAll("[data-psource]").forEach(V=>V.classList.toggle("m-ob-plan-card--on",V===F))})}),v.querySelectorAll("[data-sensor-id]").forEach(F=>{F.addEventListener("change",()=>{const V=parseInt(F.dataset.sensorId);F.checked?m.includes(V)||m.push(V):m=m.filter(re=>re!==V)})}),(j=v.querySelector("#ob-skip-source"))==null||j.addEventListener("click",()=>{c="smv",h()});const $=v.querySelector("#ob-parcel-name");$&&$.addEventListener("input",F=>{F.target._edited=!0,f=F.target.value}),g()==="parcelMap"&&A(),g()==="parcelData"&&c==="smv"&&T(),(D=v.querySelector("#ob-see-parcel"))==null||D.addEventListener("click",x),(q=v.querySelector("#ob-finish"))==null||q.addEventListener("click",x)}S()}function Jn(e){const i=document.getElementById("phone-screen");let t=0;const n=["sensorAdd","sensorDone"],o=document.createElement("div");o.id="sensor-creation-overlay",o.className="m-ob-overlay",i.appendChild(o);function a(){return n[t]}function s(){t++,m()}function l(){return Ts({showBack:!1,btnLabel:"Enregistrer le capteur",showSkip:!1})}function p(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Capteur ajouté !</h2>
        <p class="m-ob-sub">Votre capteur a été enregistré avec succès.</p>
        <button class="m-ob-cta" id="ob-see-sensor" style="margin-top:32px"><i class="bi bi-broadcast"></i> Voir le capteur</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function d(){o.classList.add("m-ob-overlay--out"),setTimeout(()=>{o.remove(),e()},400)}function c(){var f,r,u,b;(f=o.querySelector("#ob-close"))==null||f.addEventListener("click",d),(r=o.querySelector("#ob-next"))==null||r.addEventListener("click",s),(u=o.querySelector("#ob-see-sensor"))==null||u.addEventListener("click",d),(b=o.querySelector("#ob-finish"))==null||b.addEventListener("click",d),Is(o)}function m(){var u;const f={sensorAdd:l,sensorDone:p},r=(u=f[a()])==null?void 0:u.call(f);r&&(o.innerHTML=r),c()}m()}function Ai(e){var i;return((i=e.integrations)==null?void 0:i.some(t=>t.startsWith("IRRÉ-LIS")))??!1}const fi="weenat-irrelis-config";function ut(e){try{const l=JSON.parse(localStorage.getItem(fi)||"{}");if(l[e])return l[e]}catch{}const t=60+e*13%50,n=Math.round(t*.42),o=["Maïs","Maïs","Maïs","Blé","Maïs","Tournesol","Orge","Maïs"],a=o[e%o.length],s=String(5+e%16).padStart(2,"0");return{ru:t,rfu:n,culture:a,semisDate:`2026-04-${s}`}}function Wn(e,i){try{const t=JSON.parse(localStorage.getItem(fi)||"{}");t[e]={...ut(e),...i},localStorage.setItem(fi,JSON.stringify(t))}catch{}}function wt(e,i=5){const t=ut(e.id),{ru:n,rfu:o}=t,a=e.id,s=new Date("2026-04-01T00:00:00"),l=new Date;l.setHours(0,0,0,0);const d=Math.round((l-s)/864e5),c=d+i,m=[],f=[],r=[],u=[],b=[];let v=n*.88;for(let g=0;g<c;g++){const h=Math.sin(a*7919+g*1.73),k=Math.sin(a*1337+g*2.91),w=Math.sin(a*999+g*.57),I=Math.max(.5,2.4+g*.022+w*.75);r.push(+I.toFixed(1));const C=h>.44&&g%4!==1?Math.min(35,Math.round(3+Math.abs(h-.44)*85)):0;f.push(C);let E=0;g<d&&g>=25&&g%11===0&&v<o*1.12&&(E=Math.round(22+Math.abs(k)*8)),u.push(E),v=v-I+C+E;const H=Math.max(0,v-n);b.push(+H.toFixed(1)),v=Math.max(0,Math.min(n,v)),m.push(+v.toFixed(1))}return{reservoir:m,pluie:f,etp:r,drainage:b,irrigation:u,nDays:d,nFcDays:i,ru:n,rfu:o,cfg:t}}function Mi(e,i){const t=wt(e,5),n=t.nDays;switch(i){case"Aujourd'hui":return t.reservoir[n]??0;case"Demain":return t.reservoir[n+1]??0;case"J+3":return t.reservoir[n+3]??0;case"J+5":return t.reservoir[n+5]??0;default:return t.reservoir[n]??0}}function qs(e,i,t){return e>=i?"#24B066":e>=t*.15?"#E8A020":"#E05252"}function js(e){const{reservoir:i,nDays:t,ru:n,rfu:o}=e,a=288,s=68,l={l:6,r:6,t:6,b:6},p=a-l.l-l.r,d=s-l.t-l.b,c=i.slice(0,t+1);if(c.length<2)return"";const m=w=>l.t+d-Math.max(0,Math.min(1,w/n))*d,f=w=>l.l+w/(c.length-1)*p,r=m(o),u=m(n*.15),b=l.t+d;function v(w){let I=`M${w[0].x.toFixed(1)},${w[0].y.toFixed(1)}`;for(let C=0;C<w.length-1;C++){const E=w[Math.max(C-1,0)],H=w[C],P=w[C+1],A=w[Math.min(C+2,w.length-1)],T=H.x+(P.x-E.x)/6,M=H.y+(P.y-E.y)/6,S=P.x-(A.x-H.x)/6,x=P.y-(A.y-H.y)/6;I+=` C${T.toFixed(1)},${M.toFixed(1)} ${S.toFixed(1)},${x.toFixed(1)} ${P.x.toFixed(1)},${P.y.toFixed(1)}`}return I}const g=c.map((w,I)=>({x:f(I),y:m(w)})),h=v(g),k=f(c.length-1).toFixed(1);return`<svg viewBox="0 0 ${a} ${s}" width="${a}" height="${s}" style="display:block">
    <rect x="${l.l}" y="${l.t}" width="${p}" height="${(r-l.t).toFixed(1)}" fill="#24B066" opacity="0.13"/>
    <rect x="${l.l}" y="${r.toFixed(1)}" width="${p}" height="${(u-r).toFixed(1)}" fill="#E8A020" opacity="0.11"/>
    <rect x="${l.l}" y="${u.toFixed(1)}" width="${p}" height="${(b-u).toFixed(1)}" fill="#E05252" opacity="0.11"/>
    <line x1="${l.l}" y1="${r.toFixed(1)}" x2="${l.l+p}" y2="${r.toFixed(1)}" stroke="#24B066" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    <line x1="${l.l}" y1="${u.toFixed(1)}" x2="${l.l+p}" y2="${u.toFixed(1)}" stroke="#E05252" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    <path d="${h} L${k},${b} L${l.l},${b} Z" fill="#0172A4" opacity="0.09"/>
    <path d="${h}" fill="none" stroke="#0172A4" stroke-width="2" stroke-linejoin="round"/>
    <line x1="${f(t).toFixed(1)}" y1="${l.t}" x2="${f(t).toFixed(1)}" y2="${b}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3" opacity="0.7"/>
  </svg>`}const Gn=[{label:"Levée",daysAfter:10,color:"#81C784"},{label:"4 feuilles",daysAfter:22,color:"#4CAF50"},{label:"10 feuilles",daysAfter:38,color:"#FFA726"},{label:"15 feuilles",daysAfter:52,color:"#FF7043"},{label:"Floraison",daysAfter:68,color:"#E91E63"},{label:"Sl. laiteux",daysAfter:83,color:"#9C27B0"},{label:"70% humidité",daysAfter:100,color:"#5C6BC0"}];function Gi(e){if(e.length<2)return"";let i=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let t=0;t<e.length-1;t++){const n=e[Math.max(t-1,0)],o=e[t],a=e[t+1],s=e[Math.min(t+2,e.length-1)],l=o.x+(a.x-n.x)/6,p=o.y+(a.y-n.y)/6,d=a.x-(s.x-o.x)/6,c=a.y-(s.y-o.y)/6;i+=` C${l.toFixed(1)},${p.toFixed(1)} ${d.toFixed(1)},${c.toFixed(1)} ${a.x.toFixed(1)},${a.y.toFixed(1)}`}return i}const Ps=["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"];function Un(e,i,t){const{reservoir:n,nDays:o,nFcDays:a,ru:s,rfu:l,cfg:p}=t,d=o+a,c=n.slice(0,d),m=s*.15,f={t:22,r:38,b:22,l:40},r=e-f.l-f.r,u=i-f.t-f.b,b=D=>f.t+u-Math.max(0,Math.min(1,D/s))*u,v=D=>f.l+D/Math.max(d-1,1)*r,g=f.t,h=b(l),k=b(m),w=f.t+u,I=new Date("2026-04-01T00:00:00"),C=new Date(p.semisDate+"T00:00:00"),E=Math.round((C-I)/864e5),H=(p.culture==="Maïs"?Gn:[]).map(D=>{const q=E+D.daysAfter;if(q<0||q>d)return"";const F=v(q),V=F.toFixed(1),re=q>o,ie=(F+3).toFixed(0),se=(w-4).toFixed(0);return`<line x1="${V}" y1="${g}" x2="${V}" y2="${w}" stroke="${D.color}" stroke-width="1.5" stroke-dasharray="${re?"4,4":"3,2"}" opacity="0.65"/>
<text transform="translate(${ie},${se}) rotate(-90)" font-size="8" font-family="-apple-system,sans-serif" fill="${D.color}" font-weight="600">${D.label}</text>`}).join(""),P=[];for(let D=0;D<=d;D++){const q=new Date(I.getTime()+D*864e5);q.getDate()===1&&P.push(`<text x="${v(D).toFixed(1)}" y="${i-4}" text-anchor="middle" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${Ps[q.getMonth()]}</text>`)}const T=[0,Math.round(m),l,s].map(D=>{const q=(b(D)+4).toFixed(1);return`<text x="${f.l-5}" y="${q}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${D}</text>`}).join(""),M=c.map((D,q)=>({x:v(q),y:b(D)})),S=M.slice(0,o+1),x=M.slice(o),y=Gi(S),$=x.length>=2?Gi(x):"",z=v(o).toFixed(1),L=S.length?S[S.length-1].x.toFixed(1):z,j=y?`${y} L${L},${w} L${f.l},${w} Z`:"";return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <defs>
      <clipPath id="il-c"><rect x="${f.l}" y="${f.t}" width="${r}" height="${u}"/></clipPath>
      <linearGradient id="il-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0172A4" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#0172A4" stop-opacity="0.01"/>
      </linearGradient>
    </defs>
    <!-- Zones -->
    <rect x="${f.l}" y="${g}" width="${r}" height="${(h-g).toFixed(1)}" fill="#24B066" opacity="0.12"/>
    <rect x="${f.l}" y="${h.toFixed(1)}" width="${r}" height="${(k-h).toFixed(1)}" fill="#E8A020" opacity="0.12"/>
    <rect x="${f.l}" y="${k.toFixed(1)}" width="${r}" height="${(w-k).toFixed(1)}" fill="#E05252" opacity="0.12"/>
    <!-- Zone lines -->
    <line x1="${f.l}" y1="${h.toFixed(1)}" x2="${f.l+r}" y2="${h.toFixed(1)}" stroke="#24B066" stroke-width="1" stroke-dasharray="6,4" opacity="0.55"/>
    <line x1="${f.l}" y1="${k.toFixed(1)}" x2="${f.l+r}" y2="${k.toFixed(1)}" stroke="#E05252" stroke-width="1" stroke-dasharray="6,4" opacity="0.55"/>
    <!-- Zone labels -->
    <text x="${f.l+r-4}" y="${((g+h)/2+4).toFixed(1)}" text-anchor="end" font-size="9" font-family="-apple-system,sans-serif" fill="#24B066" font-weight="600">RFU</text>
    <text x="${f.l+r-4}" y="${(k+12).toFixed(1)}" text-anchor="end" font-size="9" font-family="-apple-system,sans-serif" fill="#E05252" font-weight="600">Survie</text>
    <!-- Phenological stages -->
    <g clip-path="url(#il-c)">${H}</g>
    <!-- Fill -->
    ${j?`<path d="${j}" fill="url(#il-g)" clip-path="url(#il-c)"/>`:""}
    <!-- Historical curve -->
    ${y?`<path d="${y}" fill="none" stroke="#0172A4" stroke-width="2.5" stroke-linejoin="round" clip-path="url(#il-c)"/>`:""}
    <!-- Forecast (dashed) -->
    ${$?`<path d="${$}" fill="none" stroke="#0172A4" stroke-width="2" stroke-dasharray="7,5" stroke-linejoin="round" opacity="0.7" clip-path="url(#il-c)"/>`:""}
    <!-- Today -->
    <line x1="${z}" y1="${f.t}" x2="${z}" y2="${w}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="${z}" y="${f.t-5}" text-anchor="middle" font-size="9" font-family="-apple-system,sans-serif" fill="#8e8e93">Auj.</text>
    <!-- Y axis -->
    ${T}
    <text x="${f.l-5}" y="${f.t-6}" text-anchor="end" font-size="9" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>
    <!-- X axis -->
    ${P.join("")}
    <!-- Border -->
    <rect x="${f.l}" y="${f.t}" width="${r}" height="${u}" fill="none" stroke="rgba(0,0,0,.07)" stroke-width="1"/>
  </svg>`}function Yn(e,i,t){const{pluie:n,etp:o,drainage:a,irrigation:s,nDays:l,nFcDays:p,ru:d}=t,c=l+p,m={t:6,r:38,b:22,l:40},f=e-m.l-m.r,r=i-m.t-m.b,u=m.t+r/2,b=Math.max(...n.slice(0,c).map((P,A)=>P+(s[A]||0)),1),v=Math.max(...o.slice(0,c).map((P,A)=>P+(a[A]||0)),1),g=Math.max(b,v,1),h=r/2,k=Math.max(1.5,f/c-1),w=P=>m.l+P/Math.max(c-1,1)*f-k/2;let I="";for(let P=0;P<c;P++){const A=n[P]/g*h,T=s[P]/g*h,M=o[P]/g*h,S=a[P]/g*h,x=w(P).toFixed(1),y=k.toFixed(1);n[P]>0&&(I+=`<rect x="${x}" y="${(u-A).toFixed(1)}"       width="${y}" height="${A.toFixed(1)}"   fill="#2E75B6" opacity="0.85"/>`),s[P]>0&&(I+=`<rect x="${x}" y="${(u-A-T).toFixed(1)}"   width="${y}" height="${T.toFixed(1)}"  fill="#FF8C00" opacity="0.85"/>`),I+=`<rect x="${x}" y="${u.toFixed(1)}" width="${y}" height="${M.toFixed(1)}" fill="#00887E" opacity="0.75"/>`,a[P]>0&&(I+=`<rect x="${x}" y="${(u+M).toFixed(1)}"        width="${y}" height="${S.toFixed(1)}"  fill="#8B1A1A" opacity="0.75"/>`)}const C=new Date("2026-04-01T00:00:00"),E=[];for(let P=0;P<=c;P++){const A=new Date(C.getTime()+P*864e5);if(A.getDate()===1){const T=m.l+P/Math.max(c-1,1)*f;E.push(`<text x="${T.toFixed(1)}" y="${i-4}" text-anchor="middle" font-size="10" font-family="-apple-system,sans-serif" fill="#8e8e93">${Ps[A.getMonth()]}</text>`)}}const H=(m.l+l/Math.max(c-1,1)*f).toFixed(1);return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <line x1="${m.l}" y1="${u.toFixed(1)}" x2="${m.l+f}" y2="${u.toFixed(1)}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>
    ${I}
    <line x1="${H}" y1="${m.t}" x2="${H}" y2="${m.t+r}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3" opacity="0.7"/>
    ${E.join("")}
    <rect x="${m.l}" y="${m.t}" width="${f}" height="${r}" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="1"/>
  </svg>`}function Zn(){return`<div style="display:flex;gap:10px;flex-wrap:wrap;padding:4px 12px;background:#f9f9f9;border-top:.5px solid rgba(0,0,0,.08);border-bottom:.5px solid rgba(0,0,0,.08)">
    <span style="font-size:10px;color:#0172A4;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:20px;height:2px;background:#0172A4"></span>Réserve</span>
    <span style="font-size:10px;color:#0172A4;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:20px;height:2px;background:#0172A4;border-bottom:2px dashed #0172A4"></span>Prévision</span>
    <span style="font-size:10px;color:#2E75B6;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:10px;height:10px;background:#2E75B6;border-radius:2px"></span>Pluie</span>
    <span style="font-size:10px;color:#FF8C00;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:10px;height:10px;background:#FF8C00;border-radius:2px"></span>Irrigation</span>
    <span style="font-size:10px;color:#00887E;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:10px;height:10px;background:#00887E;border-radius:2px"></span>ETP</span>
    <span style="font-size:10px;color:#8B1A1A;display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:10px;height:10px;background:#8B1A1A;border-radius:2px"></span>Drainage</span>
  </div>`}function Kn(e,i){const t=e.clientWidth,n=e.clientHeight;if(!t||!n)return;const o=32,s=Math.round((n-o)*.32),l=n-o-s;e.innerHTML=Un(t,l,i)+Zn()+Yn(t,s,i)}function Ui(e,i){const t=ut(e.id),n=document.createElement("div");n.innerHTML=`
    <div style="padding:4px 0 8px">
      <div class="m-form-label">Culture</div>
      <select id="il-culture" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;margin-bottom:14px">
        ${["Maïs","Blé","Orge","Colza","Tournesol","Sorgho","Betterave"].map(a=>`<option${a===t.culture?" selected":""}>${a}</option>`).join("")}
      </select>
      <div class="m-form-label">Date de semis</div>
      <input id="il-semis" type="date" value="${t.semisDate}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
      <div class="m-form-label">Réserve utile (RU) — mm</div>
      <input id="il-ru" type="number" value="${t.ru}" min="20" max="200" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
      <div class="m-form-label">RFU (réserve facilement utilisable) — mm</div>
      <input id="il-rfu" type="number" value="${t.rfu}" min="5" max="150" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
      <button id="il-cfg-save" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Enregistrer</button>
    </div>`;const o=ue({title:`Configuration — ${e.name}`,body:n,doneLabel:"Annuler",onDone:()=>{}});n.querySelector("#il-cfg-save").addEventListener("click",()=>{Wn(e.id,{culture:n.querySelector("#il-culture").value,semisDate:n.querySelector("#il-semis").value,ru:+n.querySelector("#il-ru").value||t.ru,rfu:+n.querySelector("#il-rfu").value||t.rfu}),o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{o.remove(),i==null||i()},280),U("Configuration enregistrée")})}function Xn(e,i){const{pluie:t,irrigation:n,nDays:o}=i,a=new Date("2026-04-01T00:00:00"),s=[];for(let c=0;c<o;c++){const f=new Date(a.getTime()+c*864e5).toLocaleDateString("fr-FR",{day:"numeric",month:"short"});t[c]>0&&s.push({type:"pluie",label:f,value:t[c]}),n[c]>0&&s.push({type:"irrigation",label:f,value:n[c]})}const l=s.slice(-12).reverse().map(c=>`
    <div style="display:flex;align-items:center;gap:12px;padding:10px 16px;border-bottom:.5px solid rgba(0,0,0,.07)">
      <div style="width:32px;height:32px;border-radius:50%;background:${c.type==="pluie"?"rgba(46,117,182,.12)":"rgba(255,140,0,.12)"};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <i class="bi ${c.type==="pluie"?"bi-cloud-rain":"bi-droplet-fill"}" style="color:${c.type==="pluie"?"#2E75B6":"#FF8C00"};font-size:14px"></i>
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:600;color:#1c1c1e">${c.type==="pluie"?"Pluie":"Irrigation"}</div>
        <div style="font-size:12px;color:#8e8e93">${c.label}</div>
      </div>
      <div style="font-size:15px;font-weight:700;color:${c.type==="pluie"?"#2E75B6":"#FF8C00"}">${c.value} mm</div>
    </div>`).join(""),p=ge(`
    <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:.5px solid rgba(0,0,0,.1);background:#fff">
      <button id="gpi-back" style="color:#0172A4;background:none;border:none;font-size:15px;cursor:pointer;display:flex;align-items:center;gap:4px"><i class="bi bi-chevron-left"></i> Irré-LIS</button>
      <span style="font-size:16px;font-weight:700;color:#1c1c1e;flex:1;text-align:center">${e.name}</span>
      <div style="width:80px"></div>
    </div>
    <div style="display:flex;gap:8px;padding:14px 16px 12px">
      <button id="gpi-add-pluie" style="flex:1;background:rgba(46,117,182,.1);color:#2E75B6;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Pluie</button>
      <button id="gpi-add-irrig" style="flex:1;background:rgba(255,140,0,.1);color:#FF8C00;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Irrigation</button>
    </div>
    <div class="m-list-section-header" style="padding:0 16px;margin-bottom:4px">Derniers événements</div>
    <div style="overflow-y:auto;flex:1">
      ${l||'<p style="color:#8e8e93;text-align:center;padding:24px 0">Aucun événement enregistré</p>'}
    </div>
  `);p.style.cssText="display:flex;flex-direction:column;background:#f2f2f7",p.querySelector("#gpi-back").addEventListener("click",()=>ve());function d(c){const m=document.createElement("div");m.innerHTML=`
      <div style="padding:4px 0 8px">
        <div class="m-form-label">Date</div>
        <input id="gpi-date" type="date" value="${new Date().toISOString().split("T")[0]}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
        <div class="m-form-label">Quantité (mm)</div>
        <input id="gpi-mm" type="number" placeholder="ex : 25" min="0" max="300" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
        <button id="gpi-save" style="width:100%;background:${c==="pluie"?"#2E75B6":"#FF8C00"};color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Enregistrer</button>
      </div>`;const r=ue({title:c==="pluie"?"Ajouter une pluie":"Ajouter une irrigation",body:m,doneLabel:"Annuler",onDone:()=>{}});m.querySelector("#gpi-save").addEventListener("click",()=>{r.classList.remove("m-sheet-overlay--show"),setTimeout(()=>r.remove(),280),U(`${c==="pluie"?"Pluie":"Irrigation"} enregistrée`)})}p.querySelector("#gpi-add-pluie").addEventListener("click",()=>d("pluie")),p.querySelector("#gpi-add-irrig").addEventListener("click",()=>d("irrigation"))}function Qn(e){const i=document.createElement("div");i.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
      <div style="width:56px;height:56px;border-radius:50%;background:rgba(48,209,88,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
        <i class="bi bi-file-earmark-spreadsheet" style="font-size:26px;color:#30d158"></i>
      </div>
      <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px">Le bilan hydrique Irré-LIS de <strong>${e.name}</strong> sera envoyé par e-mail au format Excel.</p>
      <div class="m-form-label" style="align-self:flex-start;width:100%;text-align:left">Adresse e-mail</div>
      <input id="il-dl-email" type="email" value="contact@fermebocage.fr" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
      <button id="il-dl-send" style="width:100%;background:#30d158;color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Envoyer le fichier</button>
    </div>`;const t=ue({title:"Télécharger le bilan",body:i,doneLabel:"Annuler",onDone:()=>{}});i.querySelector("#il-dl-send").addEventListener("click",()=>{t.classList.remove("m-sheet-overlay--show"),setTimeout(()=>t.remove(),280),U("Bilan envoyé par e-mail")})}function eo(e){const i=ut(e.id),t=new Date(i.semisDate+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"long"}),n=ge(`
    <div class="m-fs-topbar">
      <button class="m-fs-back" id="il-back"><i class="bi bi-chevron-left"></i>Parcelles</button>
      <span class="m-fs-info-text">${e.name}</span>
      <button class="m-fs-cfg-btn" id="il-cfg-btn"><i class="bi bi-sliders"></i></button>
    </div>
    <div style="display:flex;align-items:center;gap:8px;padding:7px 14px 6px;background:#fff;border-bottom:.5px solid rgba(0,0,0,.1)">
      <span style="font-size:12px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:3px 9px">Irré-LIS</span>
      <span style="font-size:13px;color:#1c1c1e;font-weight:500">${i.culture}</span>
      <span style="font-size:11px;color:#8e8e93;margin-left:auto">Semis : ${t}</span>
    </div>
    <div id="il-chart-area" style="flex:1;overflow:hidden;background:#fff;min-height:0"></div>
    <div style="display:flex;background:#fff;border-top:.5px solid rgba(0,0,0,.1);padding:8px 10px 14px;gap:8px">
      <button id="il-btn-config" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;background:rgba(0,122,255,.07);border:none;border-radius:12px;padding:10px 4px;cursor:pointer">
        <i class="bi bi-gear" style="font-size:20px;color:#007aff"></i>
        <span style="font-size:11px;color:#007aff;font-weight:600">Configurer</span>
      </button>
      <button id="il-btn-pluv" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;background:rgba(1,114,164,.07);border:none;border-radius:12px;padding:10px 4px;cursor:pointer">
        <i class="bi bi-cloud-rain" style="font-size:20px;color:#0172A4"></i>
        <span style="font-size:11px;color:#0172A4;font-weight:600;text-align:center;line-height:1.2">Pluies &amp;<br>irrigations</span>
      </button>
      <button id="il-btn-dl" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;background:rgba(48,209,88,.07);border:none;border-radius:12px;padding:10px 4px;cursor:pointer">
        <i class="bi bi-download" style="font-size:20px;color:#30d158"></i>
        <span style="font-size:11px;color:#30d158;font-weight:600">Télécharger</span>
      </button>
    </div>
  `);n.classList.add("m-fs-layer");const o=n.querySelector("#il-chart-area");let a=wt(e,5),s=null;function l(){o.clientWidth&&o.clientHeight&&Kn(o,a)}s=new ResizeObserver(()=>requestAnimationFrame(l)),s.observe(o),requestAnimationFrame(l),n.querySelector("#il-back").addEventListener("click",()=>{s==null||s.disconnect(),ve()});const p=()=>{a=wt(e,5),l()};n.querySelector("#il-cfg-btn").addEventListener("click",()=>Ui(e,p)),n.querySelector("#il-btn-config").addEventListener("click",()=>Ui(e,p)),n.querySelector("#il-btn-pluv").addEventListener("click",()=>Xn(e,a)),n.querySelector("#il-btn-dl").addEventListener("click",()=>Qn(e))}const to=Object.freeze(Object.defineProperty({__proto__:null,getIrrelisConfig:ut,getIrrelisDailyData:wt,getIrrelisVal:Mi,hasIrrelis:Ai,irrelisColor:qs,makeIrrelisMiniSvg:js,openIrrelisDetail:eo},Symbol.toStringTag,{value:"Module"})),zs={admin:100,adherent:1,new:41},Ds="weenat-m-dash";function dt(){try{return JSON.parse(localStorage.getItem(Ds))||{}}catch{return{}}}function yt(e){try{localStorage.setItem(Ds,JSON.stringify({...dt(),...e}))}catch{}}const Se=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls préférés",info:"Mes cumuls préférés.<br><br>Ajoutez ici les valeurs des cumuls qui sont importants pour vous en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures préférées",info:"Mes mesures préférées.<br><br>Ajoutez ici les indicateurs de vos parcelles ou capteurs qui vous intéressent en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"radar_pluie",title:"Radar de pluie",icon:"bi-cloud-rain-heavy",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"irrelis",title:"Bilan Irré-LIS",icon:"bi-moisture",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function io(e,i,t){var a;const n=document.getElementById("phone-screen");(a=document.querySelector(".m-winfo-overlay"))==null||a.remove();const o=document.createElement("div");o.className="m-winfo-overlay",o.innerHTML=`
    <div class="m-winfo-modal">
      <div class="m-winfo-hd">
        <span class="m-winfo-title">${e}</span>
        <button class="m-winfo-close" type="button"><i class="bi bi-x"></i></button>
      </div>
      <div class="m-winfo-gif">
        ${t?`<img src="${t}" alt="${e}">`:'<div class="m-winfo-gif-placeholder"><i class="bi bi-play-circle" style="font-size:28px;display:block;margin-bottom:6px"></i>GIF à venir</div>'}
      </div>
      <div class="m-winfo-body">${i}</div>
    </div>`,o.querySelector(".m-winfo-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",s=>{s.target===o&&o.remove()}),n.appendChild(o)}function We(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Ge({title:e,body:i,doneLabel:t="Fermer",onDone:n}={}){var l;const o=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}const Yi=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function Zi(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=Yi[Math.floor(Math.random()*Yi.length)],n=t.label==="Pluie"||t.label==="Averses",o=Math.round(8+Math.random()*8),a=Math.round(16+Math.random()*14),s=Array.from({length:24},(l,p)=>{const d=Math.sin(Math.PI*(p-6)/12),c=Math.round(o+(a-o)*Math.max(0,d)),m=n&&p>=8&&p<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:p,label:`${String(p).padStart(2,"0")}h`,temp:c,pluie:m,hum:Math.round(85-40*Math.max(0,d)),vent:Math.round(10+Math.random()*20),icon:m>0?"bi-cloud-rain-fill":p<7||p>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:n?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:o,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:a,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function Ki(e){const i=e.id,t=e.reserveHydrique||50,n=+((i*2.3+7)%32).toFixed(1),o=+((i*1.1+14)%14+10).toFixed(1),a=+((i*.6+1)%6).toFixed(1),s=Math.round(t*((i%5+1)/10)),l=Math.max(0,+(s+n-o-a).toFixed(0)),p=l<s?s-l:0;return{j0:s,j7:l,bilan:p}}const xt=4,_t=5,Xi=["#0172A4","#ff8500","#30d158","#bf5af2"],Fs={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548",irrigation:"#FF8C00"},hi={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol",irrigation:"Irrigation"},so={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C",irrigation:"mm"},Qi={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},no=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function _s(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function oo(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const o=new Set(t),a=+e.slice(2);i.filter(l=>l.parcelIds.includes(a)).forEach(l=>(Qi[l.model]||[]).forEach(p=>o.add(p)));const s=de.find(l=>l.id===a);return(s!=null&&s.irrigation&&s.irrigation!=="Non irrigué"||pe.some(l=>l.plotId===a))&&o.add("irrigation"),[...o].filter(l=>l in hi)}const n=i.find(o=>o.id===+e.slice(2));return n?Qi[n.model]||[]:[]}function ao(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let Me=[],Te=[];(()=>{const e=dt();if(e.catalog){const i=e.catalog.map(t=>t.id);Se.sort((t,n)=>{const o=i.indexOf(t.id),a=i.indexOf(n.id);return(o<0?999:o)-(a<0?999:a)}),e.catalog.forEach(t=>{const n=Se.find(o=>o.id===t.id);n&&(n.active=t.active)})}e.mesuresList&&(Me=e.mesuresList),e.cumulsList&&(Te=e.cumulsList)})();let Ht=null,Bt=null;function Hs(e){return Me.length>=xt?"max":Me.some(i=>i.subjectKey===e.subjectKey&&i.metricId===e.metricId&&i.period===e.period&&i.step===e.step)?"dup":(Me.push(e),yt({mesuresList:Me}),Ht==null||Ht(),"ok")}function Bs(e){return Te.length>=_t?"max":(Te.push(e),yt({cumulsList:Te}),Bt==null||Bt(),"ok")}function lo(e,i,t){if(i==="irrigation"&&e.startsWith("p-")){const s=parseInt(e.slice(2),10),l=Date.now(),p=24*36e5,d=l-t*p,c=new Array(t).fill(0);return pe.filter(m=>m.plotId===s&&m.real).forEach(m=>{const f=new Date(m.iso).getTime();if(f<d||f>l)return;const r=Math.min(t-1,Math.floor((f-d)/p));c[r]+=m.mm||0}),c}const n=[...e+i].reduce((s,l)=>s+l.charCodeAt(0),1),o=s=>(Math.sin(n*.07+s*.5)+Math.sin(n*.03+s*1.3))/2+.5,a={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(s,l)=>a.sparse&&o(l*3.7)>.28?0:Math.max(0,a.base+a.amp*o(l*.28+1.2)))}const ro=new Set(["pluie","etp","irrigation"]);function co(e,i){var w,I;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,n=lo(e.subjectKey,e.metricId,t),o=270,a=100,s=28,l=14,p=Math.max(...n,1),d=ro.has(e.metricId);let c,m="";for(let C=0;C<=2;C++){const E=Math.round(C/2*(a-l-4)+4);m+=`<line x1="${s}" y1="${E}" x2="${s+o}" y2="${E}" stroke="#E8E6E0" stroke-width=".5"/>`,m+=`<text x="${s-3}" y="${E+3}" text-anchor="end" font-size="8" fill="#636366">${+(p*(1-C/2)).toFixed(p<5?1:0)}</text>`}const f=ao(e.period,e.step),r=f.map((C,E)=>`<text x="${s+Math.round(E/(f.length-1)*o)}" y="${a+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${C}</text>`).join(""),u=JSON.stringify(n.map(C=>+C.toFixed(2))),b=Fs[e.metricId]||e.color,v=e.metricId==="pluie"?"#2E75B6":b;if(d){const C=Math.max(1,o/t*.7),E=n.map((H,P)=>{const A=Math.round(H/p*(a-l-4)),T=s+Math.round(P/(t-1)*o)-C/2,M=a-l-A;return`<rect x="${T.toFixed(1)}" y="${M.toFixed(1)}" width="${C.toFixed(1)}" height="${A.toFixed(1)}" fill="${v}" opacity=".85" rx="1"/>`}).join("");c=`<svg viewBox="0 0 ${s+o} ${a+6}" style="width:100%;display:block;overflow:visible">${m}${E}${r}</svg>`}else{const C=n.map((E,H)=>`${s+Math.round(H/(t-1)*o)},${a-l-Math.round(E/p*(a-l-4))}`).join(" ");c=`<svg viewBox="0 0 ${s+o} ${a+6}" style="width:100%;display:block;overflow:visible">
      ${m}
      <polyline points="${C}" fill="none" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${a}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${r}
    </svg>`}const g=(w=e.subjectKey)!=null&&w.startsWith("s-")?e.subjectKey.slice(2):null,h=(I=e.subjectKey)!=null&&I.startsWith("p-")?e.subjectKey.slice(2):null,k=g||h?`<button class="m-wf-view-data" ${g?`data-sensor-id="${g}"`:`data-parcel-id="${h}"`} data-metric-id="${e.metricId}" data-period="${e.period}" data-step="${e.step}" style="display:flex;align-items:center;gap:4px;margin-top:8px;padding:6px 10px;border:none;background:rgba(0,122,255,.08);border-radius:8px;color:#007AFF;font-size:12px;font-weight:600;cursor:pointer;width:100%;justify-content:center">Voir détails <i class="bi bi-fullscreen" style="font-size:11px"></i></button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?v:b}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${u}' style="position:relative;margin-top:4px">
        ${c}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${k}
    </div>`}function es(e,i){const t=Me.length>=xt,n=[...e].sort((l,p)=>l.name.localeCompare(p.name,"fr")).map(l=>`<option value="p-${l.id}">${Lt(l)}</option>`).join(""),o=i.filter(l=>l.parcelIds.length>0).map(l=>`<option value="s-${l.id}">${Ct(l,e)}</option>`).join(""),a=_s("7d");return`
    <div id="msr-list">${Me.length?Me.map(co).join(""):'<div class="m-wf-empty">Ajoutez ici les mesures que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Me.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${xt}/${xt})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez une mesure pour en ajouter une nouvelle.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="msr-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${n}</optgroup>
        ${o?`<optgroup label="Capteurs">${o}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period">
          ${no.map(l=>`<option value="${l.id}"${l.id==="7d"?" selected":""}>${l.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${a.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Ajouter la mesure</button>
    </div>`}`}function uo(e){const i=new Date().toISOString().split("T")[0],t=new Date;t.setDate(t.getDate()+7);const n=t.toISOString().split("T")[0];return pe.filter(o=>o.iso>i&&o.iso<=n&&o.plotId===e.id).reduce((o,a)=>o+a.mm,0)}function po(e){return 25+e.id*7%20}const ts=9;function mo(e){const i=e.filter(s=>Ai(s));if(!i.length)return'<div class="m-widget-empty"><i class="bi bi-droplet" style="color:#0172A4;font-size:28px"></i><p>Aucune parcelle avec le service Irré-LIS</p></div>';const t=wt(i[0],5),n=js(t),o=i.map(s=>{const l=ut(s.id),p=Math.round(Mi(s,"Aujourd'hui")),d=qs(p,l.rfu,l.ru),c=Math.round(p/l.ru*100);return`
      <div class="m-il-row" data-il-plot="${s.id}" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:.5px solid rgba(0,0,0,.07);cursor:pointer">
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${s.name}</div>
          <div style="font-size:11px;color:#8e8e93">${l.culture} · semis ${new Date(l.semisDate+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:17px;font-weight:700;color:${d}">${p} <span style="font-size:11px;font-weight:400">mm</span></div>
          <div style="font-size:10px;color:#8e8e93">${c}% RU</div>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px;flex-shrink:0"></i>
      </div>`}).join("");return`
    <div style="margin-bottom:6px;border-radius:10px;overflow:hidden;border:1px solid rgba(0,0,0,.07)">${n}</div>
    <div style="font-size:11px;color:#8e8e93;margin-bottom:2px">Réserve en eau — Aujourd'hui</div>
    ${o}
    <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap">
    <span style="font-size:10px;color:#24B066;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#24B066"></span>RFU</span>
    <span style="font-size:10px;color:#E8A020;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#E8A020"></span>Sous RFU</span>
    <span style="font-size:10px;color:#E05252;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#E05252"></span>Réservoir de survie</span>
  </div>`}function mt(e,i=!1,t=dt().sensorlessEnabled??!0,n=dt().irrigAdvisor??!1){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const o=C=>C.id%3===2,a=e.slice(),s=(C,E)=>Ki(E).bilan-Ki(C).bilan,l=a.slice().sort(s),p=i?l:l.slice(0,ts),d=new Set(p.map(C=>C.id)),c=l.length-p.length,m=C=>Math.round((C.id*2.3+7)%32*10)/10,f=C=>Math.round(((C.id*1.1+14)%14+10)*10)/10,r="font-size:11px;font-weight:700;color:#8e8e93;text-align:right;padding-bottom:6px;text-transform:uppercase;letter-spacing:.03em;line-height:1.3",u=C=>`<span style="display:block;font-size:9px;font-weight:400;text-transform:none;color:#b0aead;letter-spacing:0">${C}</span>`,b="border-top:none",v=(C,E)=>{const H=uo(C),P=m(C),A=f(C),T=E===0?"border-top:none":"border-top:.5px solid rgba(0,0,0,.18);padding-top:8px;margin-top:2px",M=`<button class="m-bh-th-n m-bh-plot-link" data-plot-id="${C.id}" style="grid-column:1/-1;white-space:normal;overflow:visible;text-overflow:unset;text-align:left;${T}">${C.name}</button>`;if(n){const x=o(C)?po(C):null,y=x!==null?H>=x?"#24B066":"#E05252":null,$=x!==null?`<span style="color:${y};font-weight:700">${x}</span>`:'<span style="color:#c7c7cc">—</span>';return`
        ${M}
        <div class="m-bh-td" style="${b}">${P}</div>
        <div class="m-bh-td" style="${b}">${A}</div>
        <div class="m-bh-td m-bh-td--planif" style="${b}">${H>0?H:"—"}</div>
        <div class="m-bh-td" style="${b}">${$}</div>`}return`
      ${M}
      <div class="m-bh-td" style="${b}">${P}</div>
      <div class="m-bh-td" style="${b}">${A}</div>
      <div class="m-bh-td m-bh-td--planif" style="${b}">${H>0?H:"—"}</div>`},g=l.filter(C=>d.has(C.id)).map((C,E)=>v(C,E)).join(""),h=n?"1fr 1fr 1.5fr 1fr":"1fr 1fr 1.5fr",k=n?`<div style="${r}">Pluie${u("J+7 mm")}</div>
       <div style="${r}">ETP${u("J+7 mm")}</div>
       <div style="${r}">Irr. planif.${u("J+7 mm")}</div>
       <div style="${r}">Irr. reco.${u("J+7 mm")}</div>`:`<div style="${r}">Pluie${u("J+7 mm")}</div>
       <div style="${r}">ETP${u("J+7 mm")}</div>
       <div style="${r}">Irr. planif.${u("J+7 mm")}</div>`,w=n?`<div style="font-size:11px;color:#8e8e93;margin-bottom:6px">
         <i class="bi bi-info-circle" style="color:#ff9f0a"></i>
         Reco. affiché uniquement pour les parcelles avec Irrigation Advisor actif
       </div>`:"",I=l.length>ts?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${c} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <label style="display:flex;align-items:center;gap:8px;padding:4px 0 8px;cursor:pointer;font-size:13px;color:#1c1c1e">
      <input type="checkbox" id="bh-advisor-cb" ${n?"checked":""} style="width:16px;height:16px;accent-color:#ff9f0a">
      Irrigation Advisor${n?' <span style="font-size:11px;color:#ff9f0a;font-weight:600">✦</span>':""}
    </label>
    ${w}
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${h};gap:0 6px">
        ${k}
        ${g}
      </div>
    </div>
    ${I}
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
    </div>`}const ni=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function vo(e,i,t,n){Object.fromEntries(he.map(r=>[r.id,r]));const o=[...e].sort((r,u)=>r.name.localeCompare(u.name,"fr")).map(r=>`<option value="p-${r.id}">${ni(Lt(r))}</option>`).join(""),a=i.map(r=>`<option value="s-${r.id}">${ni(Ct(r,e))}</option>`).join(""),s=`
    <optgroup label="Parcelles">${o}</optgroup>
    ${a?`<optgroup label="Capteurs">${a}</optgroup>`:""}`,l=(r,u)=>{const b=`${r.dayLabel.charAt(0).toUpperCase()+r.dayLabel.slice(1)} · ${r.dateStr}`;return`
    <div class="m-prev-card" data-day="${u}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${r.icon}" style="color:${r.color};font-size:26px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${b}</span>
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
    </div>`},p=t.slice(0,3).map(l).join(""),d=t.slice(3).map(l).join(""),c=he.find(r=>r.id===(n==="admin"?100:1)),m=(c==null?void 0:c.adresse)||"";return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${m?`<option value="addr">${ni(`${c.name} — ${c.ville||m}`)}</option>`:""}${s}</select>
    <div class="m-prev-cards">
      ${p}
      <div class="m-prev-extra" style="display:none">${d}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Ue=[{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:null},{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],Rs=new Set(Ue.flatMap(e=>e.needsModels||[]));function oi(e){if(!e)return Ue;if(e.startsWith("s-")){const t=le.find(n=>n.id===+e.slice(2));return t?Ue.filter(n=>n.needsModels===null||n.needsModels.includes(t.model)):Ue}const i=new Set(le.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Ue.filter(t=>t.needsModels===null||t.needsModels.some(n=>i.has(n)))}const is={etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#FEE7B4"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function bo(){return Te.length?Te.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
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
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function ss(e,i,t){if(!e||!i)return null;const n=Ue.find(s=>s.id===t)||Ue[0],o=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),a=e.split("").reduce((s,l)=>s+l.charCodeAt(0),0)+o;return+(n.base+a%(n.amp*10)/10).toFixed(1)}function ns(e,i){const t=Te.length>=_t,n=`${new Date().getFullYear()}-01-01`,o=i.filter(p=>p.parcelIds.length>0&&Rs.has(p.model)),a=[...e].sort((p,d)=>p.name.localeCompare(d.name,"fr")).map(p=>`<option value="p-${p.id}">${Lt(p)}</option>`).join(""),s=o.map(p=>`<option value="s-${p.id}">${Ct(p,e)}</option>`).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${Te.length?bo():'<div class="m-wf-empty">Ajoutez ici les cumuls que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Te.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${_t}/${_t})</div>
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
          <input type="date" class="m-wf-date" id="cumuls-from" value="${n}">
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Ajouter le cumul</button>
    </div>`}`}function fo(e){const i=e.id,t=new Date;let n,o;i%5===3?(n=0,o=(t.getHours()+2+i%3*3)%24):(n=(i*2+1)%6+1,o=6+i%5*2);const a=2+i%3,s=new Date(t);s.setDate(s.getDate()+n);const l=n===0?"Aujourd'hui":s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),p=n*1440+o*60-(t.getHours()*60+t.getMinutes());return{winDateStr:l,winHour:o,winDur:a,minutesFromNow:p}}const ho="#1a9e40";function go(e){const t=e.filter(o=>o.crop).map(o=>({p:o,d:fo(o)})).filter(({d:o})=>o.minutesFromNow>=0&&o.minutesFromNow<=1440).sort((o,a)=>o.d.minutesFromNow-a.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:o,d:a})=>{const s=String(a.winHour).padStart(2,"0"),l=String((a.winHour+a.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${o.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${o.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${ho};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
            <i class="bi bi-check2-circle" style="font-size:12px"></i>
            ${a.winDateStr} · ${s}h–${l}h
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const Os="weenat-m-traitements";function $t(){try{return JSON.parse(localStorage.getItem(Os))||[]}catch{return[]}}function Ti(e){localStorage.setItem(Os,JSON.stringify(e))}function yo(e,i){let t=new Set;const n=[],o=new Date().toISOString().split("T")[0];function a(){return Ut(n,e,t)}function s(d){const c=t.size,m=d.querySelector(".irr-summary"),f=d.querySelector(".irr-save-btn");!m||!f||(m.textContent=c===0?"":`${c} parcelle${c>1?"s":""}`,f.disabled=c===0)}function l(d){var c;(c=d.querySelector("#irr-sel-all"))==null||c.addEventListener("click",()=>{const m=e.every(f=>t.has(f.id));e.forEach(f=>m?t.delete(f.id):t.add(f.id)),d.querySelector("#trait-sel-list").innerHTML=a(),l(d),s(d)}),d.querySelectorAll(".irr-group-card").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.gids.split(",").map(Number),r=f.every(u=>t.has(u));f.forEach(u=>r?t.delete(u):t.add(u)),d.querySelector("#trait-sel-list").innerHTML=a(),l(d),s(d)})}),d.querySelectorAll(".irr-plot-row").forEach(m=>{m.addEventListener("click",()=>{const f=+m.dataset.pid;t.has(f)?t.delete(f):t.add(f),d.querySelector("#trait-sel-list").innerHTML=a(),l(d),s(d)})})}const p=at(ge(`
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
            <input type="date" class="irr-date-input" id="trait-date" value="${o}">
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
  `));l(p),s(p),p.querySelector("#trait-back").addEventListener("click",ve),p.querySelector(".irr-save-btn").addEventListener("click",()=>{const d=p.querySelector("#trait-date").value||o,c=p.querySelector("#trait-produit").value.trim()||"—",m=p.querySelector("#trait-dose").value.trim()||"—",f=$t();f.unshift({id:Date.now(),date:d,produit:c,dose:m,plotIds:[...t]}),Ti(f),ve(),i("Traitement enregistré")})}function xo(e,i,t){const n=i==="adherent"?zs.adherent:null,o=n!==null?de.filter(d=>d.orgId===n):de;let a=null;const s=ge(`
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
          ${o.map(d=>`<option value="${d.id}">${d.name}</option>`).join("")}
        </select>
      </div>
      <div id="trait-cal-content" style="padding:6px 16px 16px"></div>
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",ve);const l=d=>{const[c,m,f]=d.split("-");return`${f}/${m}/${c}`};function p(){const d=s.querySelector("#trait-cal-content");let c=$t();if(a!==null&&(c=c.filter(m=>(m.plotIds||[]).includes(a))),!c.length){d.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}d.innerHTML=c.map(m=>{const f=(m.plotIds||[]).map(r=>{var u;return(u=e.find(b=>b.id===r))==null?void 0:u.name}).filter(Boolean);return`
        <div class="m-trait-cal-card" data-id="${m.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${l(m.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${f.length} parcelle${f.length>1?"s":""}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${m.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${m.dose}</div>
          ${f.length?`<div style="font-size:11px;color:#8e8e93;margin-top:6px">${f.join(", ")}</div>`:""}
        </div>`}).join(""),d.querySelectorAll(".m-trait-cal-card").forEach(m=>{m.addEventListener("click",()=>{const f=+m.dataset.id,u=$t().find(h=>h.id===f);if(!u)return;const b=(u.plotIds||[]).map(h=>{var k;return(k=e.find(w=>w.id===h))==null?void 0:k.name}).filter(Boolean),v=document.createElement("div");v.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${l(u.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${u.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${u.dose}</div>
            ${b.length?`<div style="font-size:12px;color:#8e8e93">${b.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const g=Ge({title:"Traitement",body:v,doneLabel:"Fermer",onDone:()=>{}});v.querySelector("#tcal-del").addEventListener("click",()=>{const h=$t().filter(k=>k.id!==f);Ti(h),g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{g.remove(),p()},280),t("Traitement supprimé")}),v.querySelector("#tcal-edit").addEventListener("click",()=>{g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>g.remove(),280),$o(u,e,t,p)})})})}s.querySelector("#trait-filter").addEventListener("change",d=>{a=d.target.value?+d.target.value:null,p()}),p()}function $o(e,i,t,n){const o=document.createElement("div");o.innerHTML=`
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
    </div>`,Ge({title:"Modifier le traitement",body:o,doneLabel:"Enregistrer",onDone:()=>{const a=$t(),s=a.findIndex(l=>l.id===e.id);s!==-1&&(a[s].date=o.querySelector("#tedit-date").value||e.date,a[s].produit=o.querySelector("#tedit-produit").value.trim()||e.produit,a[s].dose=o.querySelector("#tedit-dose").value.trim()||e.dose,Ti(a)),t("Traitement modifié"),n()}})}const wo={"capteur déplacé":"M12 2c-2.117 0-3.98.741-5.588 2.225C4.803 5.708 4 7.699 4 10.199c0 1.6.6 3.322 1.8 5.164C7 17.205 8.818 19.2 11.25 21.35a1.2 1.2 0 0 0 .75.275 1.2 1.2 0 0 0 .75-.275c2.433-2.15 4.25-4.145 5.45-5.987C19.4 13.521 20 11.8 20 10.2c0-2.5-.803-4.491-2.412-5.974C15.98 2.74 14.117 2 12 2zm0 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 7v3a.969.969 0 0 1-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287A.966.966 0 0 1 11 10V7c0-.283.095-.52.287-.713A.969.969 0 0 1 12 6zm0 7a.97.97 0 0 1 .713.287c.191.192.287.43.287.713s-.096.522-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287c-.192-.191-.287-.43-.287-.713s.095-.52.287-.713A.969.969 0 0 1 12 13z","émissions interrompues":"M19.075 21.9 8.125 10.975c-.033.167-.063.333-.087.5S8 11.817 8 12c0 .383.046.746.138 1.087.091.342.229.663.412.963.15.25.217.517.2.8a1.04 1.04 0 0 1-.3.7c-.2.2-.438.292-.713.275s-.487-.133-.637-.35c-.35-.5-.62-1.042-.813-1.625A5.889 5.889 0 0 1 6 12a5.985 5.985 0 0 1 .575-2.575L5.1 7.95c-.35.6-.62 1.238-.813 1.913A7.79 7.79 0 0 0 4 12a7.855 7.855 0 0 0 1.675 4.9c.183.233.27.487.262.762-.008.275-.112.513-.312.713a.916.916 0 0 1-1.375-.05c-.7-.867-1.25-1.837-1.65-2.913S2 13.2 2 12c0-1.033.146-2.008.437-2.925A10.71 10.71 0 0 1 3.65 6.5L2.075 4.925a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725a.948.948 0 0 1 .7-.275c.283 0 .525.092.725.275l16.975 17c.183.183.275.417.275.7s-.092.517-.275.7c-.2.2-.442.3-.725.3s-.517-.1-.7-.3zm1.275-4.4-1.45-1.45c.35-.6.62-1.238.813-1.913S20 12.75 20 12a7.854 7.854 0 0 0-1.675-4.9c-.183-.233-.27-.487-.263-.762s.113-.513.313-.713a.916.916 0 0 1 1.375.05c.7.867 1.25 1.833 1.65 2.9.4 1.067.6 2.208.6 3.425 0 1.017-.146 1.988-.438 2.913S20.867 16.7 20.35 17.5zm-2.925-2.925-1.55-1.55c.033-.167.062-.333.087-.5S16 12.183 16 12c0-.383-.046-.746-.138-1.088s-.229-.662-.412-.962a1.367 1.367 0 0 1-.2-.8 1.04 1.04 0 0 1 .3-.7.93.93 0 0 1 .712-.287.76.76 0 0 1 .638.337c.35.483.62 1.025.813 1.625.191.6.287 1.225.287 1.875a5.985 5.985 0 0 1-.575 2.575z","capteur couché":"M6 5a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h7a1 1 0 1 0 0-2h-7V7a2 2 0 0 0-2-2H6zm3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 16v2h20v-2H2z","cuillère bloquée":"M17.615 3.25c-.268 0-.537.103-.742.309L3.508 16.922a1.05 1.05 0 0 0 0 1.486l.031.027-.002.002.05.041c.459.438 1.055.718 1.733.813.678.094 1.416 0 2.139-.274a5.793 5.793 0 0 0 2.018-1.322 5.802 5.802 0 0 0 1.322-2.02c.411-1.087.411-2.189 0-3.074l7.558-7.558a1.047 1.047 0 0 0 0-1.485 1.046 1.046 0 0 0-.742-.308zm-1.037 8.416a.473.473 0 0 0-.35.137l-1.05 1.05a.435.435 0 0 0-.106.163.555.555 0 0 0-.031.187c0 .067.01.13.031.188.02.058.055.112.105.162l1.051 1.05a.473.473 0 0 0 .35.137.472.472 0 0 0 .488-.488.474.474 0 0 0-.138-.35l-.2-.199h.037c.834 0 1.542.292 2.125.875.584.584.875 1.292.875 2.125 0 .675-.198 1.274-.593 1.799a3.032 3.032 0 0 1-1.532 1.088.527.527 0 0 0-.267.187.465.465 0 0 0-.108.287c0 .167.06.3.176.4.117.1.254.13.412.089a3.912 3.912 0 0 0 2.1-1.426 3.882 3.882 0 0 0 .812-2.424c0-1.116-.387-2.063-1.162-2.838-.775-.775-1.72-1.162-2.838-1.162h-.037l.2-.201a.474.474 0 0 0 .138-.35.473.473 0 0 0-.488-.486zm-2.563 2.344a.462.462 0 0 0-.337.156c-.292.358-.516.75-.674 1.18-.159.429-.239.882-.239 1.357 0 .917.271 1.728.813 2.432a3.922 3.922 0 0 0 2.1 1.418.442.442 0 0 0 .414-.082.479.479 0 0 0 .173-.393.532.532 0 0 0-.375-.488 2.946 2.946 0 0 1-1.53-1.08 2.939 2.939 0 0 1-.595-1.807c0-.341.054-.666.163-.974.108-.309.262-.594.462-.852a.565.565 0 0 0 .131-.375.477.477 0 0 0-.142-.336.48.48 0 0 0-.364-.156z"},os=new Set(["P+","PT","P"]);function Lt(e){return[e.name,e.crop].filter(Boolean).join(" — ")}function Ct(e,i){var a,s;const t=Object.fromEntries(he.map(l=>[l.id,l])),n=Ns[e.model]||e.model,o=((a=(e.parcelIds||[]).map(l=>i.find(p=>p.id===l)).filter(Boolean).find(l=>l.ville))==null?void 0:a.ville)||((s=t[e.orgId])==null?void 0:s.ville)||"";return[n,e.serial,o].filter(Boolean).join(" — ")}const Ns={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function So(e,i){const t=Object.fromEntries(he.map(o=>[o.id,o])),n=i.filter(o=>o.event?(Array.isArray(o.event)?o.event:[o.event]).filter(l=>l!=="cuillère bloquée"||os.has(o.model)).length>0:!1);return n.length?`<div class="m-w-list">${n.map(o=>{var c;const a=e.find(m=>(o.parcelIds||[]).includes(m.id)),s=(a==null?void 0:a.ville)||((c=t[o.orgId])==null?void 0:c.ville)||"",p=(Array.isArray(o.event)?o.event:[o.event]).filter(m=>m!=="cuillère bloquée"||os.has(o.model)).map(m=>{const f=wo[m]||"";return`<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:#ff3b30;border-radius:6px;flex-shrink:0" title="${m}"><svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="${f}"/></svg></span>`}).join(""),d=Ns[o.model]||o.model;return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${o.id}">
      <div style="flex:1;min-width:0">
        <div class="m-w-row-name">${d}</div>
        <div style="font-size:12px;color:#636366;margin-top:1px">${o.model} — ${o.serial}</div>
        ${s?`<div style="font-size:11px;color:#8e8e93;margin-top:1px">${s}</div>`:""}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;width:61px;justify-content:flex-end">${p}</div>
        <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const Vs={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},ko={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Eo(e){const i=e.id,t=Vs[e.crop]||ko,n=i%t.stages.length,o=(i*2+5)%18+4,a=new Date("2026-04-18");a.setDate(a.getDate()+o);const s=a.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[n],nextStage:t.nextStages[n],variety:t.varieties[i%t.varieties.length],nextDateStr:s,daysToNext:o}}function Lo(e){const i=e.filter(o=>o.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const o of i)t[o.crop]||(t[o.crop]=[]),t[o.crop].push(o);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([o,a])=>{const s=a.map(l=>{const p=!!Vs[l.crop],d=p?Eo(l):null,c=p&&d.variety!=="—"?d.variety:"",m=p?d.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${l.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${l.name}</div>
          ${c?`<div class="m-w-row-sub">${c}</div>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${m}</div>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>`}).join("");return`<details class="m-crop-group">
      <summary class="m-crop-summary">
        <div class="m-crop-summary-left">
          <div class="m-crop-summary-name">${o}</div>
          <div class="m-crop-summary-count">${a.length} parcelle${a.length>1?"s":""}</div>
        </div>
        <i class="bi bi-chevron-right m-crop-chevron"></i>
      </summary>
      <div class="m-crop-plots">${s}</div>
    </details>`}).join("")}`}const Js="weenat-m-notes";function et(){try{return JSON.parse(localStorage.getItem(Js))||[]}catch{return[]}}function ai(e){localStorage.setItem(Js,JSON.stringify(e))}function as(e){const i=et(),t=g=>{const[h,k,w]=g.split("-");return`${w}/${k}/${h}`},n=g=>g.length>70?g.slice(0,70)+"…":g,o=(g,h)=>{const k=g.text.length>70,w=(g.imageIds||[]).length,I=w>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${w} photo${w>1?"s":""}</span>`:"",C=g.linkedType?`<span style="font-size:10px;background:${g.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${g.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${g.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${g.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${h}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${k||w>0||g.linkedType?"pointer":"default"}">
        <button class="m-note-del m-del-btn" data-idx="${h}" style="position:absolute;top:8px;right:8px">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span>${t(g.date)}${g.time?" · "+g.time:""}</span>
          ${g.auteur?`<span style="color:#636366;font-weight:500">${g.auteur}</span>`:""}
          ${g.role?`<span style="font-size:10px;background:${g.role==="conseiller"?"#eef4ff":"#f2f2f7"};color:${g.role==="conseiller"?"#3a7bd5":"#636366"};border-radius:4px;padding:1px 5px;font-weight:500">${g.role==="conseiller"?"Conseiller":"Membre"}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${n(g.text)}</div>
        ${C||I?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${C}${I}</div>`:""}
      </div>`},a=i.slice(0,5),s=a.length?a.map((g,h)=>o(g,h)).join(""):"",l=new Date,p=l.toISOString().slice(0,10),d=`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`,c=he.find(g=>g.id===(e==="admin"?100:1)),m=c?`${c.prenomProprietaire} ${c.nomProprietaire}`:"",f=c==null?void 0:c.id,r=e==="adherent"?de.filter(g=>g.orgId===f):de,u=e==="adherent"?le.filter(g=>g.parcelIds.some(h=>r.some(k=>k.id===h))):le,b=[...r].sort((g,h)=>g.name.localeCompare(h.name,"fr")).map(g=>`<option value="p-${g.id}">${Lt(g)}</option>`).join(""),v=u.map(g=>`<option value="s-${g.id}">${Ct(g,r)}</option>`).join("");return`
    ${s?`<div id="notes-list" style="margin-bottom:12px">${s}</div>`:""}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:8px">
      <select id="notes-link" class="m-sheet-input">
        <option value="">— Sans lien —</option>
        <optgroup label="Parcelles">${b}</optgroup>
        <optgroup label="Capteurs">${v}</optgroup>
      </select>
      <textarea id="notes-input" class="m-sheet-input" placeholder="Votre note…" rows="2" style="resize:none"></textarea>
      <div style="display:flex;gap:6px">
        <input type="date" id="notes-date" class="m-sheet-input" value="${p}" style="flex:1">
        <input type="time" id="notes-time" class="m-sheet-input" value="${d}" style="flex:1">
      </div>
    </div>
    <div class="jrn-img-zone" style="margin-bottom:8px">
      <div class="jrn-img-previews" id="notes-previews"></div>
      <button type="button" class="jrn-img-add-btn" id="notes-img-btn"><i class="bi bi-camera"></i> Ajouter une photo</button>
      <input type="file" id="notes-img-input" accept="image/*" multiple style="display:none">
      <div class="jrn-img-error" id="notes-img-error"></div>
    </div>
    <input type="hidden" id="notes-auteur" value="${m}">
    <button id="notes-add" class="m-btn m-btn--primary" style="margin-bottom:6px">Ajouter la note</button>
    <button id="notes-view" class="m-btn m-btn--secondary">Voir les notes${i.length?` (${i.length})`:""}</button>`}function Co(e){const i=de.map(o=>o.orgId).filter((o,a,s)=>s.indexOf(o)===a&&o!==100).length,t=le.length,n=de.length;return`
    <div class="m-reseau-name">${Ne.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${n}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${Ne.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${Ne.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${Ne.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${Ne.siege.adresse}, ${Ne.siege.codePostal} ${Ne.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function Ao(){return`
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
    </a>`}const ls=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Mo(){var d;const e=document.getElementById("phone-screen");(d=document.querySelector(".m-sheet-overlay"))==null||d.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),n=i.querySelector("#chat-input"),o=i.querySelector("#chat-send"),a=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",a),i.addEventListener("click",c=>{c.target===i&&a()});function s(c,m){const f=document.createElement("div");f.className=`m-chat-msg m-chat-msg--${m}`,f.innerHTML=`<div class="m-chat-bubble">${c}</div>`,t.appendChild(f),t.scrollTop=t.scrollHeight}function l(){const c=document.createElement("div");return c.className="m-chat-msg m-chat-msg--bot m-chat-typing",c.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(c),t.scrollTop=t.scrollHeight,c}function p(){const c=n.value.trim();if(!c)return;s(c,"user"),n.value="",o.disabled=!0;const m=l();setTimeout(()=>{m.remove();const f=ls[Math.floor(Math.random()*ls.length)];s(f,"bot"),o.disabled=!1,n.focus()},1200+Math.random()*800)}o.addEventListener("click",p),n.addEventListener("keydown",c=>{c.key==="Enter"&&p()}),setTimeout(()=>n.focus(),350)}function To(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const n=zs[i]||1,o=i==="new"||i==="new-adherent"?[]:n===100?de:de.filter(S=>S.orgId===n),a=new Set(o.map(S=>S.id)),s=i==="new"||i==="new-adherent"?[]:le.filter(S=>S.parcelIds.some(x=>a.has(x)));let l=Zi(),p=null,d=null;function c(){return i!=="admin"?o:p===null?de:de.filter(S=>S.orgId===p)}function m(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${he.filter(x=>x.id!==100).sort((x,y)=>x.name.localeCompare(y.name)).map(x=>`<option value="${x.id}">${x.name}</option>`).join("")}
    </select>`}const f=dt(),r=new Set(["mon_reseau","support"]),u=new Set(f.collapsed??Se.map(S=>S.id).filter(S=>!r.has(S)));function b(){yt({catalog:Se.map(S=>({id:S.id,active:S.active})),collapsed:[...u],mesuresList:Me,cumulsList:Te})}function v(){return`
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
      </div>`}function h(){const S=window.L;S&&setTimeout(()=>{const x=t.querySelector("#radar-map");if(!x||d)return;const y=o[0]?[o[0].lat,o[0].lng]:[47.5,-1.5];d=S.map(x,{zoomControl:!0,attributionControl:!1,tap:!1}).setView(y,7),S.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:14}).addTo(d);const $=t.querySelector("#radar-slider"),z=t.querySelector("#radar-time-lbl"),L=t.querySelector("#radar-play-btn"),j=t.querySelector("#radar-loading");let D=[],q=0,F=0,V=null,re=!1,ie=null;function se(oe){if(!D.length)return;V&&d.removeLayer(V);const ye=D[oe];V=S.tileLayer(`https://tilecache.rainviewer.com${ye.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:.65,zIndex:10}).addTo(d);const qe=new Date(ye.time*1e3);z.textContent=qe.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),z.style.color=oe>=q?"#007aff":"#8e8e93",$.value=oe}$.addEventListener("input",()=>{F=+$.value,se(F)}),L.addEventListener("click",()=>{re=!re,L.innerHTML=re?'<i class="bi bi-pause-fill"></i>':'<i class="bi bi-play-fill"></i>',re?ie=setInterval(()=>{F=(F+1)%D.length,se(F)},500):clearInterval(ie)}),fetch("https://api.rainviewer.com/public/weather-maps.json").then(oe=>oe.json()).then(oe=>{var Re,Ve;j==null||j.remove();const ye=((Re=oe.radar)==null?void 0:Re.past)||[],qe=((Ve=oe.radar)==null?void 0:Ve.nowcast)||[];D=[...ye,...qe],q=ye.length,D.length&&($.max=D.length-1,F=Math.max(0,q-1),se(F))}).catch(()=>{j&&(j.textContent="Radar indisponible")})},50)}function k(S,x){const y=S.fixed?"":`<button class="m-widget-menu" data-widget="${S.id}" type="button">•••</button>`,$=u.has(S.id);return`
      <div class="m-widget${$?" m-widget--collapsed":""}" data-widget="${S.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${S.id}">
          <div class="m-widget-icon-wrap" style="background:${S.color}20;color:${S.color}">
            <i class="bi ${S.icon}"></i>
          </div>
          <span class="m-widget-title">${S.title}</span>
          ${S.info?`<button class="m-widget-info" data-widget="${S.id}" type="button"><i class="bi bi-info-circle"></i></button>`:""}
          <i class="bi ${$?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${S.fixed?"0":"8px"}"></i>
          ${y}
        </div>
        <div class="m-widget-bd" style="${$?"display:none":""}">${x}</div>
      </div>`}function w(){d==null||d.remove(),d=null,l=Zi();const S=new Set(["previsions","support"]),x=Se.filter($=>$.active&&!$.fixed&&(i!=="new"||S.has($.id))),y=Se.filter($=>$.active&&$.fixed&&(i!=="new"||S.has($.id)));t.innerHTML=`
      ${i==="new"?v():'<button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>'}
      ${[...x,...y].map($=>{let z="";return $.id==="bilan_hydrique"?z=m()+mt(c()):$.id==="previsions"?z=vo(o,s,l,i):$.id==="cumuls"?z=ns(o,s):$.id==="temps_reel"?z=es(o,s):$.id==="traitements"?z=go(o):$.id==="evenements"?z=So(o,s):$.id==="cultures"?z=Lo(o):$.id==="notes"?z=as(i):$.id==="radar_pluie"?z=g():$.id==="irrelis"?z=mo(o):$.id==="mon_reseau"?z=Co(i):$.id==="support"&&(z=Ao()),k($,z)}).join("")}
      <div style="height:24px"></div>`,P(),u.has("radar_pluie")||h()}const I='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function C(S,x,y=""){const $=S[x],z=`${$.dayLabel.charAt(0).toUpperCase()+$.dayLabel.slice(1)} · ${$.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${I}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${x===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px">
            <i class="bi ${$.icon}" style="color:${$.color};font-size:22px"></i>
            <div>
              <span class="m-d-name">${z}</span>
              ${y?`<div style="font-size:12px;color:#8e8e93;margin-top:1px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</div>`:""}
            </div>
          </div>
          <button class="m-day-nav" id="next-day" ${x>=S.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${$.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${$.tMin} / ${$.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${$.ventMoy}/${$.ventRafales}</strong></div>
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
            ${$.hours.map((L,j)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${j<$.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${L.label}</span>
                <i class="bi ${L.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${L.pluie>0?`${L.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${L.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${L.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${L.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function E(S,x,y,$=""){var z,L;S.querySelector(".m-detail-back").addEventListener("click",ve),(z=S.querySelector("#prev-day"))==null||z.addEventListener("click",()=>{S.innerHTML=C(x,y-1,$),E(S,x,y-1,$)}),(L=S.querySelector("#next-day"))==null||L.addEventListener("click",()=>{S.innerHTML=C(x,y+1,$),E(S,x,y+1,$)})}function H(S,x,y=""){const $=ge(C(S,x,y));E($,S,x,y)}function P(){var ye,qe,Re,Ve,Qe,Tt,Je;(ye=e.querySelector(".m-navbar-action"))==null||ye.addEventListener("click",T),(qe=t.querySelector("#dash-add-widget-btn"))==null||qe.addEventListener("click",M),(Re=t.querySelector('[data-action="add-parcel"]'))==null||Re.addEventListener("click",()=>Vn(()=>w())),(Ve=t.querySelector('[data-action="add-sensor"]'))==null||Ve.addEventListener("click",()=>Jn(()=>w())),t.querySelectorAll(".m-widget-info").forEach(N=>{N.addEventListener("click",te=>{te.stopPropagation();const Z=Se.find(ee=>ee.id===N.dataset.widget);Z&&io(Z.title,Z.info,Z.gif)})}),t.querySelectorAll(".m-widget-hd--toggle").forEach(N=>{N.addEventListener("click",te=>{if(te.target.closest(".m-widget-menu")||te.target.closest(".m-widget-info"))return;const Z=N.dataset.collapse;u.has(Z)?u.delete(Z):u.add(Z),b(),w()})}),(Qe=t.querySelector("#trait-btn-saisir"))==null||Qe.addEventListener("click",()=>{yo(o,We)}),(Tt=t.querySelector("#trait-btn-voir"))==null||Tt.addEventListener("click",()=>{xo(o,i,We)}),t.querySelectorAll(".m-trait-card").forEach(N=>{N.addEventListener("click",()=>{const te=de.find(Z=>Z.id===+N.dataset.plotId);if(te){const Z=le.filter(ee=>ee.parcelIds.includes(te.id)).map(ee=>ee.id);$e(()=>Promise.resolve().then(()=>Rt),void 0).then(ee=>ee.initParcelDetail(te,Z,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(N=>{N.addEventListener("click",()=>{const te=s.find(Z=>Z.id===+N.dataset.sensorId);te&&$e(()=>Promise.resolve().then(()=>Ei),void 0).then(Z=>Z.initSensorDetail(te,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(N=>{N.addEventListener("click",()=>{const te=de.find(Z=>Z.id===+N.dataset.plotId);if(te){const Z=le.filter(ee=>ee.parcelIds.includes(te.id)).map(ee=>ee.id);$e(()=>Promise.resolve().then(()=>Rt),void 0).then(ee=>ee.initParcelDetail(te,Z,"params","Tableau de bord"))}})});function S(){t.querySelectorAll(".m-bh-plot-link").forEach(N=>{N.addEventListener("click",()=>{const te=de.find(Z=>Z.id===+N.dataset.plotId);if(te){const Z=le.filter(ee=>ee.parcelIds.includes(te.id)).map(ee=>ee.id);$e(()=>Promise.resolve().then(()=>Rt),void 0).then(ee=>{ee.initParcelDetail(te,Z,"widgets","Tableau de bord"),setTimeout(()=>{var Ee;(Ee=document.querySelector('[data-widget-id="irrigations"]'))==null||Ee.scrollIntoView({behavior:"smooth",block:"start"})},150)})}})})}function x(){var N,te,Z;(N=t.querySelector("#bh-btn-calendar"))==null||N.addEventListener("click",()=>{$e(()=>Promise.resolve().then(()=>st),void 0).then(ee=>ee.openCalendar(o,""))}),(te=t.querySelector("#bh-btn-irrigation"))==null||te.addEventListener("click",()=>{$e(()=>Promise.resolve().then(()=>st),void 0).then(ee=>ee.openIrrigationSaisie(o,We))}),(Z=t.querySelector("#bh-btn-strategie"))==null||Z.addEventListener("click",()=>{$e(()=>Promise.resolve().then(()=>st),void 0).then(ee=>ee.openIrrigationStrategie(o,We))})}function y(){const N=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');N&&(N.innerHTML=m()+mt(c()),S(),x(),$(),z(),i==="admin"&&L())}function $(){const N=t.querySelector("#bh-expand");N&&N.addEventListener("click",()=>{const te=N.dataset.expanded==="true",Z=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');Z&&(Z.innerHTML=m()+mt(c(),!te),S(),x(),$(),z(),i==="admin"&&L())})}function z(){const N=t.querySelector("#bh-advisor-cb");N&&N.addEventListener("change",()=>{yt({irrigAdvisor:N.checked}),y()})}function L(){const N=t.querySelector("#bh-org-select");N&&(N.value=p===null?"all":String(p),N.addEventListener("change",()=>{p=N.value==="all"?null:+N.value,y()}))}S(),x(),$(),z(),i==="admin"&&L(),t.querySelectorAll('[data-widget="irrelis"] .m-il-row').forEach(N=>{N.addEventListener("click",()=>{const te=de.find(Z=>Z.id===+N.dataset.ilPlot);te&&$e(()=>Promise.resolve().then(()=>to),void 0).then(Z=>Z.openIrrelisDetail(te))})});function j(){const N=t.querySelector('[data-widget="cumuls"] .m-widget-bd');N&&(N.innerHTML=ns(o,s),D())}Bt=j;function D(){var O,J,W,R;const N=()=>{var Y;const _=(Y=t.querySelector("#cumuls-metric"))==null?void 0:Y.value,B=t.querySelector("#cumuls-thresholds");B&&(_==="hf"?B.innerHTML=`
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`:_==="dj"?B.innerHTML=`
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`:B.innerHTML="")},te=()=>{var G;const _=t.querySelector("#cumuls-metric"),B=(G=t.querySelector("#cumuls-subject"))==null?void 0:G.value;if(!_)return;const Y=oi(B);_.innerHTML='<option value="">— Métrique —</option>'+Y.map(ne=>`<option value="${ne.id}">${ne.label}</option>`).join(""),_.disabled=!B||!Y.length,N(),Z()},Z=()=>{var be,ae,ce;const _=t.querySelector("#cumuls-create"),B=t.querySelector("#cumuls-date-err"),Y=(be=t.querySelector("#cumuls-subject"))==null?void 0:be.value,G=(ae=t.querySelector("#cumuls-from"))==null?void 0:ae.value,ne=(ce=t.querySelector("#cumuls-metric"))==null?void 0:ce.value,Q=G?(Date.now()-new Date(G))/864e5>365:!1;B&&(B.style.display=Q?"":"none"),_&&(_.disabled=!Y||!G||!ne||Q)};(O=t.querySelector("#cumuls-subject"))==null||O.addEventListener("change",()=>{te(),Z()}),(J=t.querySelector("#cumuls-from"))==null||J.addEventListener("change",Z),(W=t.querySelector("#cumuls-metric"))==null||W.addEventListener("change",()=>{N(),Z()}),(R=t.querySelector("#cumuls-create"))==null||R.addEventListener("click",()=>{var ae,ce,fe,we,ke,xe;const _=t.querySelector("#cumuls-subject"),B=_==null?void 0:_.value,Y=(ae=t.querySelector("#cumuls-from"))==null?void 0:ae.value,G=(ce=t.querySelector("#cumuls-metric"))==null?void 0:ce.value;if(!B||!Y||!G)return;const ne=Ue.find(K=>K.id===G),Q=is[G]||{icon:"bi-bar-chart-fill",color:"#636366"},be=G==="hf"?{cold:+(((fe=t.querySelector("#cumuls-th-cold"))==null?void 0:fe.value)??7.2)}:G==="dj"?{low:+(((we=t.querySelector("#cumuls-th-low"))==null?void 0:we.value)??0),high:+(((ke=t.querySelector("#cumuls-th-high"))==null?void 0:ke.value)??18)}:null;Te.push({metricId:G,metricLabel:(ne==null?void 0:ne.label)||G,unit:(ne==null?void 0:ne.unit)||"",icon:Q.icon,color:Q.color,subjectKey:B,subjectLabel:(((xe=_.options[_.selectedIndex])==null?void 0:xe.text)||B).trim(),fromDate:Y,value:String(ss(B,Y,G)??"—"),thresholds:be}),b(),j()}),t.querySelectorAll(".m-cumuls-del").forEach(_=>{_.addEventListener("click",()=>{Te.splice(+_.dataset.cidx,1),b(),j()})}),t.querySelectorAll(".m-cumuls-edit").forEach(_=>{_.addEventListener("click",()=>Ee(+_.dataset.cidx))});function ee(_,B={}){return _==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${B.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:_==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${B.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${B.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function Ee(_){const B=Te[_];if(!B)return;const Y=s.filter(ce=>ce.parcelIds.length>0&&Rs.has(ce.model)),G=[...o].sort((ce,fe)=>ce.name.localeCompare(fe.name,"fr")).map(ce=>`<option value="p-${ce.id}"${B.subjectKey===`p-${ce.id}`?" selected":""}>${Lt(ce)}</option>`).join(""),ne=Y.map(ce=>`<option value="s-${ce.id}"${B.subjectKey===`s-${ce.id}`?" selected":""}>${Ct(ce,o)}</option>`).join(""),be=oi(B.subjectKey).map(ce=>`<option value="${ce.id}"${B.metricId===ce.id?" selected":""}>${ce.label}</option>`).join(""),ae=document.createElement("div");ae.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",ae.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${G}</optgroup>
            ${ne?`<optgroup label="Capteurs">${ne}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${be}
          </select>
          <div id="cedit-thresholds">${ee(B.metricId,B.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${B.fromDate}">
          </div>`,ae.querySelector("#cedit-subject").addEventListener("change",()=>{const ce=ae.querySelector("#cedit-subject").value,fe=ae.querySelector("#cedit-metric"),we=oi(ce);fe.innerHTML='<option value="">— Métrique —</option>'+we.map(ke=>`<option value="${ke.id}">${ke.label}</option>`).join(""),ae.querySelector("#cedit-thresholds").innerHTML=""}),ae.querySelector("#cedit-metric").addEventListener("change",()=>{ae.querySelector("#cedit-thresholds").innerHTML=ee(ae.querySelector("#cedit-metric").value)}),Ge({title:"Modifier le cumul",body:ae,doneLabel:"Enregistrer",onDone:()=>{var je,ze,pt,lt;const ce=ae.querySelector("#cedit-subject").value||B.subjectKey,fe=ae.querySelector("#cedit-metric").value||B.metricId,we=ae.querySelector("#cedit-from").value||B.fromDate;if(!ce||!fe||!we)return;if((Date.now()-new Date(we))/864e5>365){We("Date trop ancienne (max 365 jours)");return}const xe=Ue.find(It=>It.id===fe),K=is[fe]||{icon:"bi-bar-chart-fill",color:"#636366"},X=ae.querySelector("#cedit-subject"),me=fe==="hf"?{cold:+(((je=ae.querySelector("#cedit-th-cold"))==null?void 0:je.value)??7.2)}:fe==="dj"?{low:+(((ze=ae.querySelector("#cedit-th-low"))==null?void 0:ze.value)??0),high:+(((pt=ae.querySelector("#cedit-th-high"))==null?void 0:pt.value)??18)}:null;Te[_]={...B,metricId:fe,metricLabel:(xe==null?void 0:xe.label)||fe,unit:(xe==null?void 0:xe.unit)||"",icon:K.icon,color:K.color,subjectKey:ce,subjectLabel:(((lt=X.options[X.selectedIndex])==null?void 0:lt.text)||ce).trim(),fromDate:we,value:String(ss(ce,we,fe)??"—"),thresholds:me},b(),j()}})}}D(),(Je=t.querySelector("#open-chat-btn"))==null||Je.addEventListener("click",Mo);function q(){const N=t.querySelector('[data-widget="notes"] .m-widget-bd');N&&(N.innerHTML=as(i),V())}let F=[];function V(){var O,J;F=[];const N=t.querySelector("#notes-img-input"),te=t.querySelector("#notes-img-btn"),Z=t.querySelector("#notes-previews"),ee=t.querySelector("#notes-img-error");N&&te&&Z&&window.setupImgUpload&&window.setupImgUpload(N,te,Z,ee,F),(O=t.querySelector("#notes-add"))==null||O.addEventListener("click",async()=>{var ce,fe,we,ke,xe,K;const W=(ce=t.querySelector("#notes-input"))==null?void 0:ce.value.trim(),R=((fe=t.querySelector("#notes-date"))==null?void 0:fe.value)||new Date().toISOString().slice(0,10),_=((we=t.querySelector("#notes-time"))==null?void 0:we.value)||"",B=((ke=t.querySelector("#notes-auteur"))==null?void 0:ke.value)||"";if(!W)return;const Y=((xe=t.querySelector("#notes-link"))==null?void 0:xe.value)||"";let G=null,ne=null,Q="";if(Y.startsWith("p-"))G="parcel",ne=+Y.slice(2),Q=((K=de.find(X=>X.id===ne))==null?void 0:K.name)||"";else if(Y.startsWith("s-")){G="sensor",ne=+Y.slice(2);const X=le.find(me=>me.id===ne);Q=X?X.serial:""}const be=[];if(F.length&&window.ImageStore)for(const X of F){const me=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(me,X),be.push(me)}const ae=et();ae.unshift({date:R,time:_,text:W,auteur:B,role:"membre",imageIds:be,linkedType:G,linkedId:ne,linkedName:Q}),ai(ae),t.querySelector("#notes-input").value="",q()}),(J=t.querySelector("#notes-view"))==null||J.addEventListener("click",()=>{const W=Y=>{const[G,ne,Q]=Y.split("-");return`${Q}/${ne}/${G}`},R=Y=>Y.length>70?Y.slice(0,70)+"…":Y,_=document.createElement("div");function B(){const Y=et();if(!Y.length){_.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}_.innerHTML=Y.map((G,ne)=>{const Q=(G.imageIds||[]).length,be=G.linkedType?`<span style="font-size:10px;background:${G.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${G.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${G.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${G.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${ne}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del m-del-btn" data-idx="${ne}" style="position:absolute;top:8px;right:8px">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${W(G.date)}${G.time?" · "+G.time:""}</span>
                  ${G.auteur?`<span style="color:#636366;font-weight:500">${G.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${R(G.text)}</div>
                ${be||Q>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${be}${Q>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${Q} photo${Q>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),_.querySelectorAll(".m-note-del").forEach(G=>{G.addEventListener("click",async ne=>{var ce;ne.stopPropagation();const Q=et(),be=+G.dataset.idx,ae=Q[be];(ce=ae==null?void 0:ae.imageIds)!=null&&ce.length&&window.ImageStore&&await window.ImageStore.remove(ae.imageIds),Q.splice(be,1),ai(Q),B(),q()})}),_.querySelectorAll(".m-note-card").forEach(G=>{G.addEventListener("click",async()=>{const Q=et()[+G.dataset.idx];if(!Q)return;const be=Q.linkedType?`<span style="font-size:11px;background:${Q.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${Q.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${Q.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${Q.linkedName||""}</span>`:"",ae=document.createElement("div");if(ae.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${W(Q.date)}${Q.time?" · "+Q.time:""}</span>
                  ${Q.auteur?`<span style="color:#636366;font-weight:500">${Q.auteur}</span>`:""}
                  ${be}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${Q.text}</div>
                ${(Q.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ge({title:"Note",body:ae,doneLabel:"Fermer",onDone:()=>{}}),(Q.imageIds||[]).length&&window.ImageStore){const ce=ae.querySelector("#note-detail-photos");for(const fe of Q.imageIds){const we=await window.ImageStore.get(fe);if(!we)continue;const ke=document.createElement("div");ke.className="jrn-img-thumb-wrap";const xe=document.createElement("img");xe.className="jrn-img-thumb",xe.src=we,xe.alt="",xe.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(we)}),ke.appendChild(xe),ce.appendChild(ke)}}})})}B(),Ge({title:"Notes",body:_,doneLabel:"Fermer",onDone:()=>{}})});const Ee=W=>{const[R,_,B]=W.split("-");return`${B}/${_}/${R}`};t.querySelectorAll("#notes-list .m-note-del").forEach(W=>{W.addEventListener("click",async R=>{var G;R.stopPropagation();const _=et(),B=+W.dataset.idx,Y=_[B];(G=Y==null?void 0:Y.imageIds)!=null&&G.length&&window.ImageStore&&await window.ImageStore.remove(Y.imageIds),_.splice(B,1),ai(_),q()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(W=>{W.addEventListener("click",async()=>{const _=et()[+W.dataset.idx];if(!_)return;const B=_.linkedType?`<span style="font-size:11px;background:${_.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${_.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${_.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${_.linkedName||""}</span>`:"",Y=document.createElement("div");if(Y.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${Ee(_.date)}${_.time?" · "+_.time:""}</span>
              ${_.auteur?`<span style="color:#636366;font-weight:500">${_.auteur}</span>`:""}
              ${B}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${_.text}</div>
            ${(_.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ge({title:"Note",body:Y,doneLabel:"Fermer",onDone:()=>{}}),(_.imageIds||[]).length&&window.ImageStore){const G=Y.querySelector("#note-detail-photos");for(const ne of _.imageIds){const Q=await window.ImageStore.get(ne);if(!Q)continue;const be=document.createElement("div");be.className="jrn-img-thumb-wrap";const ae=document.createElement("img");ae.className="jrn-img-thumb",ae.src=Q,ae.alt="",ae.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(Q)}),be.appendChild(ae),G.appendChild(be)}}})})}V();function re(){t.querySelectorAll(".m-tr-chart-wrap").forEach(N=>{const te=N.querySelector(".m-tr-cursor"),Z=N.querySelector(".m-tr-tooltip");if(!Z)return;const ee=JSON.parse(N.dataset.series||"[]"),Ee=N.dataset.unit||"",O=ee.length,J=26,W=270;N.addEventListener("pointermove",R=>{const _=N.getBoundingClientRect(),B=Math.max(0,Math.min(((R.clientX-_.left)*(J+W)/_.width-J)/W,1)),Y=ee[Math.round(B*(O-1))]??null;if(te){const G=J+Math.round(B*W);te.setAttribute("x1",G),te.setAttribute("x2",G),te.setAttribute("opacity","1")}Z.style.display="",Z.style.left=`${Math.max(0,Math.min(R.clientX-_.left-24,_.width-60))}px`,Z.textContent=Y!==null?`${(+Y).toFixed(1)} ${Ee}`:"—"}),N.addEventListener("pointerleave",()=>{Z.style.display="none",te==null||te.setAttribute("opacity","0")})})}function ie(){const N=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');N&&(N.innerHTML=es(o,s),se())}Ht=ie;function se(){var ee,Ee,O,J,W;const N=()=>{var _,B;const R=t.querySelector("#msr-create");R&&(R.disabled=!((_=t.querySelector("#msr-subject"))!=null&&_.value)||!((B=t.querySelector("#msr-metric"))!=null&&B.value)||Me.length>=xt)},te=()=>{var Y;const R=t.querySelector("#msr-metric"),_=(Y=t.querySelector("#msr-subject"))==null?void 0:Y.value;if(!R)return;const B=oo(_,s);R.innerHTML='<option value="">— Métrique —</option>'+B.map(G=>`<option value="${G}">${hi[G]}</option>`).join(""),R.disabled=!_||!B.length,N()},Z=()=>{var B;const R=t.querySelector("#msr-step"),_=((B=t.querySelector("#msr-period"))==null?void 0:B.value)||"7d";R&&(R.innerHTML=_s(_).map(Y=>`<option value="${Y.id}">${Y.label}</option>`).join(""),N())};(ee=t.querySelector("#msr-subject"))==null||ee.addEventListener("change",()=>{te(),N()}),(Ee=t.querySelector("#msr-period"))==null||Ee.addEventListener("change",()=>{Z(),N()}),(O=t.querySelector("#msr-metric"))==null||O.addEventListener("change",N),(J=t.querySelector("#msr-step"))==null||J.addEventListener("change",N),(W=t.querySelector("#msr-create"))==null||W.addEventListener("click",()=>{var ae,ce,fe;const R=t.querySelector("#msr-subject"),_=t.querySelector("#msr-metric"),B=t.querySelector("#msr-period"),Y=t.querySelector("#msr-step"),G=R==null?void 0:R.value,ne=_==null?void 0:_.value,Q=B==null?void 0:B.value,be=Y==null?void 0:Y.value;!G||!ne||!Q||!be||(Me.push({subjectKey:G,subjectLabel:(((ae=R.options[R.selectedIndex])==null?void 0:ae.text)||G).trim(),metricId:ne,metricLabel:hi[ne]||ne,unit:so[ne]||"",period:Q,periodLabel:(((ce=B.options[B.selectedIndex])==null?void 0:ce.text)||Q).trim(),step:be,stepLabel:(((fe=Y.options[Y.selectedIndex])==null?void 0:fe.text)||be).trim(),color:Fs[ne]||Xi[Me.length%Xi.length]}),b(),ie())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(R=>{R.addEventListener("click",()=>{Me.splice(+R.dataset.idx,1),b(),ie()})}),t.querySelectorAll(".m-wf-view-data").forEach(R=>{R.addEventListener("click",()=>{const _=R.dataset.metricId||null;if(R.dataset.sensorId){const B=+R.dataset.sensorId,Y=le.find(G=>G.id===B);Y&&$e(()=>import("./chart-fullscreen-DWpyWMgo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(G=>G.initChartFullscreen({sensor:Y,metricId:_,backLabel:Y.model+" "+Y.serial}))}else if(R.dataset.parcelId){const B=+R.dataset.parcelId,Y=o.find(ne=>ne.id===B),G=le.filter(ne=>{var Q;return(Q=ne.parcelIds)==null?void 0:Q.includes(B)}).map(ne=>ne.id);Y&&$e(()=>import("./chart-fullscreen-DWpyWMgo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(ne=>ne.initChartFullscreen({parcel:Y,linkedSensorIds:G,metricId:_,backLabel:Y.name}))}})}),re()}se(),t.querySelectorAll(".m-prev-card").forEach(N=>{N.addEventListener("click",()=>{var Z,ee;const te=((ee=(Z=t.querySelector(".m-prev-select"))==null?void 0:Z.selectedOptions[0])==null?void 0:ee.text)||"";H(l,+N.dataset.day,te)})});const oe=t.querySelector(".m-prev-expand-btn");oe&&oe.addEventListener("click",()=>{var te,Z;const N=((Z=(te=t.querySelector(".m-prev-select"))==null?void 0:te.selectedOptions[0])==null?void 0:Z.text)||"";H(l,3,N)}),t.querySelectorAll(".m-widget-menu").forEach(N=>{N.addEventListener("click",te=>{var W;te.stopPropagation();const Z=Se.find(R=>R.id===N.dataset.widget);if(!Z)return;const ee=document.createElement("div"),Ee=Z.id==="bilan_hydrique",O=dt().sensorlessEnabled??!0;ee.innerHTML=`
          <div class="m-sheet-links">
            ${Ee?`<a class="m-sheet-link" id="menu-sensorless">${O?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const J=Ge({title:Z.title,body:ee,doneLabel:"Fermer",onDone:()=>{}});(W=ee.querySelector("#menu-sensorless"))==null||W.addEventListener("click",()=>{yt({sensorlessEnabled:!O}),J.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{J.remove();const R=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');R&&(R.innerHTML=m()+mt(c()),S(),x(),$(),i==="admin"&&L())},280)}),ee.querySelector("#menu-move").addEventListener("click",()=>{J.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{J.remove(),A()},280)}),ee.querySelector("#menu-remove").addEventListener("click",()=>{Z.active=!1,J.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{J.remove(),b(),w()},280),We("Widget retiré")})})})}function A(){const S=document.createElement("div"),x=()=>Se.filter($=>$.active&&!$.fixed),y=()=>{const $=x();S.innerHTML=$.map((z,L)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${z.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${L}" data-dir="-1" ${L===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${L}" data-dir="1" ${L===$.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),S.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(z=>{z.addEventListener("click",()=>{const L=x(),j=+z.dataset.i,D=j+ +z.dataset.dir,q=Se.indexOf(L[j]),F=Se.indexOf(L[D]);[Se[q],Se[F]]=[Se[F],Se[q]],b(),y(),w()})})};y(),Ge({title:"Réorganiser les widgets",body:S,doneLabel:"Fermer",onDone:()=>{}})}function T(){const S=i==="admin",x=ge(`
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
            ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(y=>`
              <button class="m-add-item" data-action="${y.action}">
                <i class="bi ${y.icon}"></i>
                <span>${y.label}</span>
              </button>`).join("")}
          </div>
          ${S?`
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
      </div>`);x.querySelector(".m-detail-back").addEventListener("click",ve),x.querySelectorAll(".m-add-item").forEach(y=>{y.addEventListener("click",()=>{const $=y.dataset.action;$==="irrigation"?(ve(),$e(()=>Promise.resolve().then(()=>st),void 0).then(z=>z.openIrrigationSaisie(o,We))):$==="strategie-irrigation"?(ve(),$e(()=>Promise.resolve().then(()=>st),void 0).then(z=>z.openIrrigationStrategie(o,We))):We("Fonctionnalité à venir")})})}function M(){const S=document.createElement("div"),x=()=>{const y=Se.filter($=>!$.fixed);S.innerHTML=y.map($=>`
        <div class="m-catalog-row${$.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${$.color}20;color:${$.color}"><i class="bi ${$.icon}"></i></div>
          <span class="m-catalog-title">${$.title}</span>
          ${$.available?`<button class="m-catalog-toggle${$.active?" m-catalog-toggle--on":""}" data-cid="${$.id}" type="button">
                <i class="bi ${$.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),S.querySelectorAll("[data-cid]").forEach($=>{$.addEventListener("click",()=>{const z=Se.find(L=>L.id===$.dataset.cid);z&&(z.active=!z.active,b(),x(),w())})})};x(),Ge({title:"Widgets disponibles",body:S,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",S=>{if(S.key!=="weenat_proto_store")return;xs(de);const x=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');x&&(x.innerHTML=m()+mt(c()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=T,w()}const rs={"Blé tendre":["Semis","Levée","Tallage","Épi 1 cm","Épiaison","Floraison","Maturité"],Maïs:["Semis","Levée","4 feuilles","6 feuilles","Floraison ♂","Soie","Maturité"],Colza:["Semis","Levée","Rosette","Reprise","Bouton floral","Floraison","Siliques","Maturité"],Tournesol:["Semis","Levée","4 feuilles","Bouton floral","Floraison","Maturité"],Vigne:["Débourrement","Sortie feuilles","Floraison","Nouaison","Véraison","Récolte"],Sorgho:["Semis","Levée","Montaison","Floraison","Maturité"],"Orge de printemps":["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],Orge:["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],"Pomme de terre":["Plantation","Levée","Croissance","Tuberisation","Grossissement","Maturité"],Cerisier:["Dormance","Bourgeons","Débourrement","Floraison","Nouaison","Fructification","Récolte"],Poire:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Pomme:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Salade:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Laitue:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Betterave:["Semis","Levée","4 feuilles","Fermeture rang","Grossissement","Récolte"]},cs=["Semis","Levée","Floraison","Récolte"];function Io(e){if(!e)return cs;const i=e.toLowerCase();for(const t of Object.keys(rs))if(i.startsWith(t.toLowerCase()))return rs[t];return cs}const Vt=new URLSearchParams(window.location.search).get("role")==="adherent"?"adherent":"admin",Le={djMin:0,djMax:18,hfSeuil:7.2},qo={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"},irrigation:{metricLabel:"Cumul d'irrigation",unit:"mm",icon:"bi-moisture",color:"#FF8C00"}},jo=4,Po=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermomètre-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Capteur d'humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],gi={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},Ws=e=>`dash-widgets-parcel-${e}`;function zo(e,i){const t=i.map(a=>le.find(s=>s.id===a)).filter(Boolean),n=new Set(t.map(a=>a.model)),o=["previsions-5j","cumuls","irrigations"];return Object.entries(gi).forEach(([a,s])=>{s.some(l=>n.has(l))&&o.push(a)}),o}function Jt(e,i){try{const t=JSON.parse(localStorage.getItem(Ws(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return zo(e,i)}function Gs(e,i){localStorage.setItem(Ws(e),JSON.stringify(i))}function Do(e,i,t){const n=new Set(Jt(e,i)),o=Po.map((s,l)=>`
    <div class="m-list-section-header"${l>0?' style="margin-top:20px"':""}>${s.title}</div>
    ${s.items.map(p=>{const d=n.has(p.id);return`
        <div class="m-wcat-item">
          <span>${p.label}</span>
          ${d?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${p.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`}).join("")}`).join(""),a=ge(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Ajouter un widget</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:8px 0 32px">${o}</div>
    </div>`);a.querySelector(".m-detail-back").addEventListener("click",ve),a.querySelectorAll(".m-wcat-add").forEach(s=>{s.addEventListener("click",()=>{const l=s.dataset.wid,p=Jt(e,i);p.includes(l)||(p.push(l),Gs(e.id,p)),ve(),t==null||t()})})}const He={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Capteur d'humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1},irrigation:{label:"Irrigation",unit:"mm",color:"#FF8C00",cumul:!0,cumulsType:"irrigation"},rfu:{label:"Niveau de réservoir",unit:"mm",color:"#0099CC",cumul:!1},nrs:{label:"Niveau de réservoir (spatialisé)",unit:"mm",color:"#0172A4",cumul:!1}},Fo=new Set(["pluie","temperature","humidite","vent","pothydr","etp","temp_rosee","rayonnement"]),Ii={j7j2:2},St={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function Yt(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3},rfu:{base:60,amp:30,min:0,max:120},nrs:{base:65,amp:28,min:0,max:120}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(n,o)=>{const a=o/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,s))})}const Zt={"365d":52,"30d":60,"7d":84,j7j2:108,hier:48,"1d":24,custom:60},At={"365d":525600,"30d":43200,"7d":10080,j7j2:10080,hier:1440,"1d":1440,custom:10080};function Us(e,i,t=0,n=0,o=null){const a=o??(Zt[i]||60),s=At[i]||10080,l=Date.now(),p=l-s*6e4,d=s*6e4/a,c=new Array(a+t).fill(0),m=t>0?n*6e4/t:0;return pe.filter(f=>f.plotId===e).forEach(f=>{const r=new Date(f.iso).getTime();if(!(r<p)){if(r<=l){const u=Math.min(a-1,Math.floor((r-p)/d));c[u]+=f.mm}else if(t>0&&r<=l+n*6e4){const u=Math.min(t-1,Math.floor((r-l)/m));c[a+u]+=f.mm}}}),c}function _o(e,i,t,n,o,a=20,s=0){const l=At[e]||10080,p=l+s,d=new Date,c=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,m=4,f=i-t-n,r=o-a;return Array.from({length:m+1},(u,b)=>{const v=b/m,g=new Date(d.getTime()+(v*p-l)*6e4),h=(t+v*f).toFixed(1),k=b===0?"start":b===m?"end":"middle";return[`<line x1="${h}" y1="${r}" x2="${h}" y2="${r+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${h}" y="${o-3}" text-anchor="${k}" font-size="9" fill="#8e8e93" font-family="-apple-system">${c(g)}</text>`].join("")}).join("")}function Ho(e,i,t,n="7d",o="",a=null){const s=Zt[n]||60,l=At[n]||10080,p=Ii[n]||0,d=l/1440,c=p>0?Math.round(s*d/(d+p)):s,m=s-c,f=m>0?p*1440:0,u=m>0&&Fo.has(e)?m:0,b=e==="irrigation"?Us(a,n,m,m>0?p*1440:0,c):Yt(e,c+u),v=320,g=100,h=34,k=6,w=10,I=20,C=v-h-k,E=g-w-I,H=t?0:Math.min(...b),P=Math.max(...b,H+.001),A=P-H,T=se=>h+se/(s-1)*C,M=se=>w+E-(se-H)/A*E,S=`g${Math.random().toString(36).slice(2,8)}`,x=[0,.5,1].map(se=>{const oe=H+se*A,ye=w+E-se*E;return`<text x="${h-3}" y="${(ye+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${oe<10?oe.toFixed(1):Math.round(oe)}</text>`}).join(""),y=[.25,.5,.75].map(se=>{const oe=(w+E-se*E).toFixed(1);return`<line x1="${h}" y1="${oe}" x2="${v-k}" y2="${oe}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),$=`<line x1="${h}" y1="${w+E}" x2="${v-k}" y2="${w+E}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,z=_o(n,v,h,k,g,I,f);let L="";if(m>0){const se=T(c-.5),oe=`stripe${S}`;L=`<defs><pattern id="${oe}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.06)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.18)" stroke-width="3"/>
      </pattern></defs>
      <rect x="${se.toFixed(1)}" y="${w}" width="${(v-k-se).toFixed(1)}" height="${E}" fill="url(#${oe})"/>
      <line x1="${se.toFixed(1)}" y1="${w}" x2="${se.toFixed(1)}" y2="${w+E}" stroke="rgba(142,142,147,.35)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(v-k-3).toFixed(1)}" y="${(w+9).toFixed(1)}" text-anchor="end" font-size="8" fill="#8e8e93" font-family="-apple-system" font-style="italic">Prévisions</text>`}if(t){const se=C/b.length*.7,oe=b.map((ye,qe)=>{const Re=(ye-H)/A*E,Ve=w+E-Re,Qe=qe>=c;return`<rect x="${(T(qe)-se/2).toFixed(1)}" y="${Ve.toFixed(1)}" width="${se.toFixed(1)}" height="${Re.toFixed(1)}" fill="${Qe?"#C7C7CC":i}" opacity="${Qe?".55":".8"}" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${v} ${g}" width="100%" height="${g}" preserveAspectRatio="none">${L}${x}${y}${$}${z}${oe}</svg>`}const j=b.map((se,oe)=>[T(oe),M(se)]),D=j.slice(0,c),q=j.slice(c-1),F=D.map(([se,oe],ye)=>`${ye?"L":"M"}${se.toFixed(1)},${oe.toFixed(1)}`).join(" "),V=u>0?q.map(([se,oe],ye)=>`${ye?"L":"M"}${se.toFixed(1)},${oe.toFixed(1)}`).join(" "):"",re=`${F} L${T(c-1).toFixed(1)},${(w+E).toFixed(1)} L${h},${(w+E).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:b.map(se=>+se.toFixed(2)),minV:+H.toFixed(2),maxV:+P.toFixed(2)}))}" data-color="${i}" data-unit="${o}" style="position:relative">
    <svg viewBox="0 0 ${v} ${g}" width="100%" height="${g}" preserveAspectRatio="none">
      <defs><linearGradient id="${S}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${L}
      ${x}${y}${$}
      <path d="${re}" fill="url(#${S})"/>
      <path d="${F}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${V?`<path d="${V}" fill="none" stroke="${i}" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>`:""}
      ${j.map(([se,oe],ye)=>`<circle cx="${se.toFixed(1)}" cy="${oe.toFixed(1)}" r="2" fill="${i}" opacity="${ye>=c?".55":"1"}"/>`).join("")}
      ${z}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Bo(e,i,t,n=null){if(!t)return"";const o=Zt[i]||60,a=At[i]||10080,s=Ii[i]||0,l=a/1440,p=s>0?Math.round(o*l/(l+s)):o,d=a/(p*60),c=e==="irrigation"?Us(n,i,0,0,p):Yt(e,p);let m=[];if(t==="temp"){const f=c.reduce((u,b)=>u+Math.max(0,Math.min(b,Le.djMax)-Le.djMin),0)*(d/24),r=c.filter(u=>u<Le.hfSeuil).length*d;m=[{label:"Cumul de degrés jours",val:`${Math.round(f)} DJ`,metricId:"dj",thresholdText:`${Le.djMin}°C → ${Le.djMax}°C`},{label:"Cumul d'heures de froid",val:`${Math.round(r)} h`,metricId:"hf",thresholdText:`< ${Le.hfSeuil}°C`}]}else if(t==="pluie")m=[{label:"Cumul de pluie",val:`${c.reduce((r,u)=>r+u,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const f=c.filter(r=>r>120).length*d;m=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(f)} h`,metricId:"rayo"}]}else if(t==="etp")m=[{label:"Cumul d'évapotranspiration",val:`${(c.reduce((r,u)=>r+u,0)*(d/24)).toFixed(1)} mm`,metricId:"etp"}];else if(t==="hws"){const f=c.filter(r=>r>50).length*d;m=[{label:"Cumul d'heures d'humectation foliaire",val:`${Math.round(f)} h`,metricId:"humec"}]}else t==="irrigation"&&(m=[{label:"Cumul irrigation",val:`${c.reduce((r,u)=>r+u,0).toFixed(1)} mm`,metricId:"irrigation"}]);return m.length?`<div class="m-chart-cumuls">${m.map(f=>{const r=f.metricId==="dj"||f.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${f.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${f.label}</span>
          ${f.thresholdText?`<span class="m-chart-cumul-thresh">${f.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${f.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${r}
        <button class="m-cumul-add-btn" data-cumul-label="${f.label}" data-cumul-val="${f.val}" data-cumul-metric-id="${f.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}const Ro={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",j7j2:"J-7 → J+2",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},Oo={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"};function ds(e,i,t=null,n=null,o="1h",a=null){const s=He[e];if(!s)return"";const l=Bo(e,i,s.cumulsType,n),p=t||e==="irrigation"?`<div class="m-chart-details-link" data-sensor-id="${t??""}" data-metric-id="${e}">Voir détails →</div>`:"",d=a?`<button class="m-msr-add-btn" data-msr-metric-id="${e}" data-msr-subject-key="${a.key}" data-msr-subject-label="${a.label}" data-msr-period="${i}" data-msr-step="${o}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`:"";return`
    <div class="m-chart-card" data-metric-id="${e}">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${s.color}">${s.label}</span>
        ${d}
      </div>
      ${Ho(e,s.color,s.cumul,i,s.unit||"",n)}
      ${p}
      ${l}
    </div>`}function No(e){const i=e.dataset.msrMetricId,t=e.dataset.msrSubjectKey,n=e.dataset.msrSubjectLabel,o=e.dataset.msrPeriod,a=e.dataset.msrStep,s=He[i];if(!s)return;const l=Hs({subjectKey:t,subjectLabel:n,metricId:i,metricLabel:s.label,unit:s.unit||"",period:o,periodLabel:Ro[o]||o,step:a,stepLabel:Oo[a]||a,color:s.color});if(l==="max"){U(`Maximum de mesures atteint (${jo})`);return}if(l==="dup"){U("Cette mesure est déjà dans vos favoris");return}U("Mesure ajoutée au tableau de bord")}function Vo(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function Jo(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:n,maxV:o}=i,a=e.querySelector(".m-chart-tip"),s=e.querySelector(".m-chart-crosshair"),l=e.dataset.color||"#0172A4",p=e.dataset.unit||"";function d(m){const f=e.getBoundingClientRect(),r=Math.max(0,Math.min(1,(m-f.left)/f.width)),u=Math.round(r*(t.length-1)),b=t[u],v=r*100,g=(b<10?b.toFixed(1):String(Math.round(b)))+(p?` ${p}`:""),h=Vo(l);s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${v}%;width:1px;background:${l};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(v,75)}%;background:${l};color:${h};border:1.5px solid ${h};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=g}function c(){s.style.display="none",a.style.display="none"}e.addEventListener("pointermove",m=>{m.preventDefault(),d(m.clientX)}),e.addEventListener("pointerdown",m=>d(m.clientX)),e.addEventListener("pointerup",c),e.addEventListener("pointerleave",c),e.style.cursor="crosshair"}function Wo(e){const i=pe.filter(b=>b.plotId===e.id),t=i.filter(b=>b.real),n=i.filter(b=>!b.real),o=t.reduce((b,v)=>b+v.mm,0),a=n.reduce((b,v)=>b+v.mm,0),s=Ke(e.id).irrigation??e.irrigation,p=s&&!new Set(["Non irrigué","Non renseigné",""]).has(s),d=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-act-saisie" type="button"${p?"":" disabled"}>+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-act-saison" type="button"${p?"":" disabled"}>↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`;if(!p)return ct("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3,#8e8e93)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez préciser un type d'irrigation.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-set-type" type="button" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,"irrigations");if(!i.length)return ct("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3,#8e8e93);padding:8px 0">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${d}
      </div>`,"irrigations");let c="";if(i.some(b=>b.fromStrategy)){const b=[...i].sort((k,w)=>k.iso.localeCompare(w.iso)),v=b[b.length-1],g=b[b.length-2],h=g?Math.round((new Date(v.iso)-new Date(g.iso))/864e5):null;c=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${v.mm} mm</strong>${h?` tous les <strong>${h} jours</strong>`:""}.</div>
      </div>`}const f=o+a,u=`
    <div class="w-irrig-layout">
      <div class="w-irrig-kpis">
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Effectuées</div>
          <div class="w-irrig-kpi-val" style="color:#E07820">${o} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Planifiées</div>
          <div class="w-irrig-kpi-val" style="color:#FFB705">${a} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Total</div>
          <div class="w-irrig-kpi-val" style="color:#8e8e93">${f} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${c}
      ${d}
    </div>
    <div class="m-irrig-footer-link">Voir les irrigations →</div>`;return ct("Irrigations","bi-moisture","#FF8C00",u,"irrigations")}function Go(e,i=[]){const t=Jt(e,i),n=i.map(a=>le.find(s=>s.id===a)).filter(Boolean);let o="";for(const a of t)if(a==="irrigations")o+=Wo(e);else if(a==="cumuls")o+=Yo(e,i);else if(a==="previsions-5j")o+=Ko(e);else if(gi[a]){const s=new Set(gi[a]),l=n.filter(p=>s.has(p.model));l.length&&(o+=Xo(l,a))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${o}
    </div>`}function ct(e,i,t,n,o="",a=""){return`
    <div class="m-widget-card"${o?` data-widget-id="${o}"`:""}>
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${o}" type="button">•••</button>
      </div>
      ${a?`<div class="m-widget-card-subtitle">${a}</div>`:""}
      ${n}
    </div>`}function tt(e,i,t){const n=(e*9301+49297)%233280,a={etp:1+n%60/100,pluie:.8+n%70/100,djc:4+n%60/10,hfroid:.4+n%12/10,humec:.1+n%20/100,enso:4+n%40/10}[i]??1,s=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(a*s*10)/10}const Ys=e=>`m-pcumuls-${e}`;function rt(e){try{return JSON.parse(localStorage.getItem(Ys(e)))||{}}catch{return{}}}function jt(e,i){const t=rt(e);localStorage.setItem(Ys(e),JSON.stringify({...t,...i}))}const Uo={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function Yo(e,i=[]){const t=new Set;i.forEach(r=>{const u=le.find(b=>b.id===r);u&&(St[u.model]||[]).forEach(b=>t.add(b))});const n=`${new Date().getFullYear()}-01-01`,o=rt(e.id),a=new Set(o.hidden||[]),s=o.dates||{},l=o.cfg||{};e.id;const p=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:tt(e.id,"etp",s.etp||n),show:!0},{id:"enso",label:"Rayonnement solaire",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:tt(e.id,"enso",s.enso||n),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:tt(e.id,"pluie",s.pluie||n),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:tt(e.id,"djc",s.djc||n),show:t.has("temperature"),cfg:!0,cfgLabel:`${l.djMin??0}–${l.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#FEE7B4",icon:"bi-snow",val:tt(e.id,"hfroid",s.hfroid||n),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${l.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:tt(e.id,"humec",s.humec||n),show:t.has("humectation")}].filter(r=>r.show),d=p.filter(r=>!a.has(r.id)),c=p.filter(r=>a.has(r.id)),m=c.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${c.map(r=>`
          <button class="m-pcumul-add" data-cid="${r.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${r.icon}" style="color:${r.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${r.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",f=d.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${d.map(r=>{const u=s[r.id]||n;return`<div class="m-cumuls-saved-card" style="position:relative">
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
        </div>`}).join("")}${m}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${m}`;return ct("Cumuls","bi-bar-chart-fill","#0172A4",f,"cumuls")}const Zs={};function Ks(e){const i=(e==null?void 0:e.id)||1,t=(a,s,l)=>{const p=Math.sin(a*9301+49297)*43758.5453;return s+Math.floor((p-Math.floor(p))*(l-s+1))},n=[{label:"Ensoleillé",icon:"bi-sun",color:"#f4a01c"},{label:"Part. nuageux",icon:"bi-cloud-sun",color:"#5b8dd9"},{label:"Couvert",icon:"bi-cloud",color:"#8e8e93"},{label:"Pluie",icon:"bi-cloud-rain-fill",color:"#2E75B6"},{label:"Orageux",icon:"bi-cloud-lightning-rain",color:"#bf5af2"}],o=new Date;return Array.from({length:14},(a,s)=>{const l=new Date(o);l.setDate(l.getDate()+s);const p=t(i*17+s*7,0,4),d=n[p],c=p>=3,m=t(i*3+s*11,6,14),f=t(i*5+s*13,17,32),r=Array.from({length:24},(u,b)=>{const v=Math.sin(Math.PI*(b-6)/12),g=Math.round(m+(f-m)*Math.max(0,v)),h=c&&b>=8&&b<=16&&t(i+s*100+b,0,9)>5?+(t(i+s*100+b+1,0,30)/10).toFixed(1):0;return{label:`${String(b).padStart(2,"0")}h`,temp:g,pluie:h,hum:Math.round(85-40*Math.max(0,v)),vent:t(i*7+s*50+b,8,30),icon:h>0?"bi-cloud-rain-fill":b<7||b>20?"bi-moon-fill":d.icon}});return{dayLabel:s===0?"Aujourd'hui":s===1?"Demain":l.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:l.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...d,pluie:c?t(i*23+s*31,2,20):0,tMin:m,tMax:f,ventMoy:t(i*11+s*17,8,30),ventRafales:t(i*13+s*19,18,50),hours:r}})}function li(e,i,t){const n=e[i],o=`${n.dayLabel.charAt(0).toUpperCase()+n.dayLabel.slice(1)} · ${n.dateStr}`,a=t?`<div style="font-size:12px;color:#8e8e93;text-align:center;padding:2px 0 6px"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${t}</div>`:"";return`
    <div class="m-detail-header">
      <div class="m-detail-row1">
        <div style="width:32px"></div>
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
        <div style="width:32px"></div>
      </div>
      <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
        <button class="m-day-nav" id="prev-day" ${i===0?"disabled":""}>‹</button>
        <div style="display:flex;flex-direction:column;align-items:center;gap:2px">
          ${a}
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${n.icon}" style="color:${n.color};font-size:20px"></i><span class="m-d-name">${o}</span></div>
        </div>
        <button class="m-day-nav" id="next-day" ${i>=e.length-1?"disabled":""}>›</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="detail-content" class="m-detail-content" style="top:84px">
      <div style="padding:12px 16px 0">
        <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
          <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${n.pluie} mm</strong></div>
          <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${n.tMin} / ${n.tMax}°C</strong></div>
          <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${n.ventMoy}/${n.ventRafales}</strong></div>
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
          ${n.hours.map((s,l)=>`
            <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${l<n.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
              <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${s.label}</span>
              <i class="bi ${s.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
              <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${s.pluie>0?s.pluie+"mm":""}</span>
              <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${s.temp}°C</span>
              <span style="font-size:12px;color:#8e8e93">${s.hum}%</span>
              <span style="font-size:12px;color:#8e8e93;margin-left:auto">${s.vent} km/h</span>
            </div>`).join("")}
        </div>
      </div>
    </div>`}function Zo(e){const i=Zs[e.id]||Ks(e),t=e.name,n=ge(li(i,0,t)),o=(a,s)=>{var l,p;a.querySelector(".m-detail-back").addEventListener("click",ve),(l=a.querySelector("#prev-day"))==null||l.addEventListener("click",()=>{a.innerHTML=li(i,s-1,t),o(a,s-1)}),(p=a.querySelector("#next-day"))==null||p.addEventListener("click",()=>{a.innerHTML=li(i,s+1,t),o(a,s+1)})};o(n,0)}function Ko(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=he.find(d=>d.id===(e==null?void 0:e.orgId)),n=(e==null?void 0:e.ville)||(t==null?void 0:t.ville)||"—",o=(e==null?void 0:e.id)||1,a=Ks(e);Zs[o]=a;const s=a.slice(0,5).map((d,c)=>({lbl:c===0?"Auj.":i[new Date(Date.now()+c*864e5).getDay()],date:d.dateStr,tmax:d.tMax,tmin:d.tMin,pluie:d.pluie,vent:d.ventMoy,icon:d.icon,label:d.label})),l=d=>`
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${d.lbl}</div>
      <div class="m-wprev5-date">${d.date}</div>
      <i class="bi ${d.icon} m-wprev5-icon" title="${d.label}"></i>
      <div class="m-wprev5-rain${d.pluie===0?" m-wprev5-rain--none":""}">${d.pluie>0?d.pluie+" mm":"—"}</div>
      <div class="m-wprev5-tmax">${d.tmax}°</div>
      <div class="m-wprev5-tmin">${d.tmin}°</div>
      <div class="m-wprev5-wind">${d.vent} <span>km/h</span></div>
    </div>`,p=`
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${n}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${s.map(l).join("")}</div>
    <div style="padding:6px 12px 4px;text-align:right">
      <button class="m-prev5j-voir-details" style="background:none;border:none;color:#0172A4;font-size:13px;cursor:pointer;padding:4px 0">Voir détails <i class="bi bi-chevron-right" style="font-size:11px"></i></button>
    </div>`;return ct("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",p,"previsions-5j")}function Xo(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},n={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},o={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(a=>{const s=t[a.model]||"bi-broadcast",l=Xs[a.model]||a.model,p=n[a.model]||"#0172A4",d=o[a.model]||[],c=d[0],f=a.model.startsWith("CAPA")?30:15,r=f-a.id*7%f,u=`
      <div class="m-wsensor-vals" style="margin:8px 0">
        ${d.slice(0,4).map(b=>{const v=He[b];if(!v)return"";const h=Yt(b,1)[0],k=h<10?h.toFixed(1):Math.round(h);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${v.label}</span>
            <span class="m-wsensor-value" style="color:${v.color}">${k} ${v.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer" style="display:flex;align-items:center;justify-content:space-between">
        <span style="font-size:11px;color:#8e8e93">Il y a ${r} min · ${a.serial}</span>
        <button class="m-wsensor-voir-donnees" data-sensor-id="${a.id}" data-metric-id="${c}" style="border:none;background:none;color:#007AFF;font-size:12px;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;gap:3px">Voir les données <i class="bi bi-arrow-right-short"></i></button>
      </div>`;return ct(l,s,p,u,i)}).join("")}function Qo(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function ea(e,i,t){const n=new Set;i.forEach(v=>{const g=le.find(h=>h.id===v);g&&(St[g.model]||[]).forEach(h=>n.add(h))});const o=[...new Set(["etp","rayonnement","temp_rosee",...n])].filter(v=>He[v]),a=Zt[t]||60,s=At[t]||10080,l=Ii[t]||0,p=s/1440,d=l>0?Math.round(a*p/(p+l)):a,c=s/d*6e4,m=new Date,f=new Date(m-s*6e4),r=["Horodatage",...o.map(v=>`${He[v].label} (${He[v].unit})`)].join(";"),u=Array.from({length:d},(v,g)=>[new Date(f.getTime()+g*c).toISOString().replace("T"," ").slice(0,19),...o.map(k=>Yt(k,1)[0].toFixed(2))].join(";")),b=(e.name||"parcelle").replace(/[^\w]/g,"_");Qo([r,...u].join(`\r
`),`${b}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function ta(e,i="7d",t="1h",n=null){const o=new Set,a={};e.forEach(r=>{const u=le.find(b=>b.id===r);u&&(St[u.model]||[]).forEach(b=>{o.add(b),a[b]||(a[b]=r)})});const s=pe.some(r=>r.plotId===n),l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),p=e.some(r=>{const u=le.find(b=>b.id===r);return u&&l.has(u.model)}),d=["pluie","irrigation","temperature","humidite","pothydr","teneur","temp_sol","vent","rayonnement","humectation","par","temp_rosee","etp"],c=[...new Set([...o,"etp","rayonnement","temp_rosee",...p?["rfu"]:["nrs"],...s?["irrigation"]:[]])].filter(r=>He[r]).sort((r,u)=>{const b=d.indexOf(r),v=d.indexOf(u);return(b===-1?999:b)-(v===-1?999:v)}),m=new Date().toISOString().slice(0,10),f=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
    <div class="m-period-bar" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:8px">
        <select class="m-period-sel" style="flex:1;min-width:0">
          <option value="j7j2"${i==="j7j2"?" selected":""}>J-7 → J+2</option>
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
        <input type="date" class="m-custom-from m-custom-date" value="${f}">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to m-custom-date" value="${m}">
      </div>`:""}
    </div>
    <div class="m-detail-section">
      ${(()=>{const r=e[0]??null,u=n!=null?de.find(v=>v.id===n):null,b=u?{key:`p-${u.id}`,label:u.name}:null;return c.map(v=>v==="irrigation"?ds(v,i,null,n,t,b):ds(v,i,a[v]??r,null,t,b)).join("")})()}
    </div>`}const ia={"IRRÉ-LIS Multi-Cultures":{icon:"bi-droplet-fill",color:"#2E75B6"},"IRRÉ-LIS Mono-Culture":{icon:"bi-droplet-fill",color:"#2E75B6"},DeciTrait:{icon:"bi-shield-check",color:"#4CAF50"},Limacapt:{icon:"bi-bug",color:"#795548"},"Modèles Arvalis — PRÉVI-LIS / MILÉOS":{icon:"bi-graph-up",color:"#FBAF05"},Xarvio:{icon:"bi-grid-3x3-gap",color:"#00B14F"},Pixagri:{icon:"bi-map",color:"#00897B"},VitiMeteo:{icon:"bi-flower1",color:"#8B4C9E"},Rimpro:{icon:"bi-cloud-lightning",color:"#E53935"},"Cropwise Protector":{icon:"bi-shield-fill-check",color:"#43A047"},"Movida GrapeVision":{icon:"bi-eye",color:"#7B1FA2"}};function sa(e){if(e.substrate)return"Substrat : "+e.substrate;if(e.texture===ht&&e.soilAnalysis){const{argile:i,limon:t,sable:n}=e.soilAnalysis;return`Analyse de sol (argile ${i}% / limon ${t}% / sable ${n}%)`}return e.texture||"—"}function yi(e){const i=ia[e]||{icon:"bi-puzzle",color:"#8e8e93"};return`<i class="bi ${i.icon}" style="font-size:18px;color:${i.color};width:24px;text-align:center;flex-shrink:0"></i>`}const Xs={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"};function na(e,i,t){const n=t.map(c=>le.find(m=>m.id===c)).filter(Boolean),o=n.some(c=>c.model==="P+"||c.model==="PT"),a=n.some(c=>c.model==="P"),s=o&&a,l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),p=new Map;n.forEach(c=>{(St[c.model]||[]).forEach(m=>{p.has(m)||p.set(m,[]),p.get(m).push(c)})});const d=new Set;return p.forEach((c,m)=>{c.length<=1||c.every(f=>l.has(f.model))||c.forEach(f=>d.add(f.id))}),`
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
          <span class="m-list-row-value">${e.variety||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-stade">
          <span class="m-list-row-label">Stade phénologique</span>
          <span class="m-list-row-value">${e.phenoStage||"—"}</span>
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
          <span class="m-list-row-value">${Ke(e.id).volumeMaxM3??e.volumeMaxM3?`${(Ke(e.id).volumeMaxM3??e.volumeMaxM3).toLocaleString("fr-FR")} m³`:"Non défini"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${sa(e)}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${n.length?n.map((c,m)=>{const f=c.event&&(Array.isArray(c.event)?c.event.length>0:!0),r=d.has(c.id),u=Xs[c.model]||c.model,b=(St[c.model]||[]).map(v=>{const g=He[v];return g?`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${g.color}18;color:${g.color};border:1px solid ${g.color}40;white-space:nowrap">${g.label}</span>`:""}).join("");return`<div class="m-list-row${m===n.length-1?" m-list-row--last":""} m-tappable" data-open-sensor="${c.id}" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:15px;font-weight:500;display:flex;align-items:center;gap:5px">
                      ${u}
                      ${f?'<span style="width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0;display:inline-block"></span>':""}
                      ${r?'<i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:12px;flex-shrink:0"></i>':""}
                    </div>
                    <div style="font-size:12px;color:#8e8e93;margin-top:1px">${c.model} · ${c.serial}</div>
                  </div>
                  <button class="btn-sensor-more" data-sensor-id="${c.id}" style="border:none;background:none;color:#8e8e93;font-size:18px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1" onclick="event.stopPropagation()">···</button>
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
                </div>
                ${b?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${b}</div>`:""}
                ${l.has(c.model)&&c.depth!=null?`<div style="font-size:12px;color:#8e8e93;margin-top:2px">Profondeur d'installation : ${c.depth} cm</div>`:""}
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun capteur lié</span></div>'}
        ${d.size?`
        <div style="display:flex;gap:8px;align-items:flex-start;padding:10px 14px;background:#fff8e1;border-top:.5px solid rgba(0,0,0,.07)">
          <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;flex-shrink:0;margin-top:1px"></i>
          <span style="font-size:12px;color:#7a5a00;line-height:1.4">Plusieurs capteurs mesurent la même métrique. Les données peuvent se cumuler en double. Déliez l'un des capteurs redondants.</span>
        </div>`:""}
        <div class="m-list-row m-list-row--last" data-action="add-sensor" style="color:#0172A4">
          <i class="bi bi-plus-circle" style="font-size:15px;color:#0172A4"></i>
          <span class="m-list-row-label" style="color:#0172A4">Ajouter un capteur</span>
        </div>
      </div>

      <div class="m-list-section-header">Données spatialisées</div>
      <div class="m-list">
        <div class="m-list-row m-list-row--last" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            ${[He.etp,...n.some(c=>c.model==="PYRANO")?[]:[He.rayonnement],He.temp_rosee].map(c=>`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${c.color}18;color:${c.color};border:1px solid ${c.color}40;white-space:nowrap">${c.label}</span>`).join("")}
          </div>
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
            ${(e.integrations||[]).map(c=>`
              <span style="display:inline-flex;align-items:center;gap:5px;background:#EFF6FF;color:#0172A4;border:1px solid #BFDBFE;border-radius:20px;padding:3px 10px 3px 7px;font-size:12px;font-weight:500;line-height:1.4">
                ${yi(c)}<span>${c}</span>
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
        <div class="m-list-row m-list-row--last m-tappable" data-action="delete-parcel">
          <span class="m-list-row-label" style="color:#ff3b30">Supprimer la parcelle</span>
          <i class="bi bi-trash" style="color:#ff3b30"></i>
        </div>
      </div>
      <div style="height:24px"></div>
    </div>`}function xi(e,i=[],t="widgets",n="Parcelles"){let o=he.find(A=>A.id===e.orgId),a=t,s="j7j2",l="1d",p=!1;const d=(o==null?void 0:o.ville)||"",c=ge(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${n}</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.name}</div>
          ${e.crop||d?`<div class="m-detail-subtitle">${[d,e.crop].filter(Boolean).join(" · ")}</div>`:""}
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${t==="widgets"?"active":""}" data-view="widgets">Widgets</button>
      <button class="m-detail-tab ${t==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${t==="params"?"active":""}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function m(){const A=he.filter(x=>x.id!==100&&x.statut!=="inactif"),T=document.createElement("div"),M=()=>{T.innerHTML=A.map(x=>`
        <div class="m-sheet-option${x.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${x.id}">
          <span>${x.name}</span>
          ${x.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),T.querySelectorAll("[data-pick-org]").forEach(x=>{x.addEventListener("click",()=>{const y=+x.dataset.pickOrg;y!==e.orgId&&(e.orgId=y,o=he.find($=>$.id===y),E(),U("Exploitation mise à jour")),S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>S.remove(),280)})})},S=ue({title:"Exploitation",body:T,doneLabel:"Fermer",onDone:()=>{}});M()}function f(){const A=Gt.filter(y=>y!=="Non renseigné"),T=Ke(e.id).irrigation??e.irrigation,M=document.createElement("div"),S=()=>{M.innerHTML=`
        <div class="m-sheet-option${T?"":" m-sheet-option--active"}" data-pick-irrig="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez un type</span>
          ${T?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${A.map(y=>`
          <div class="m-sheet-option${y===T?" m-sheet-option--active":""}" data-pick-irrig="${y}">
            <span>${y}</span>
            ${y===T?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,M.querySelectorAll("[data-pick-irrig]").forEach(y=>{y.addEventListener("click",()=>{const $=y.dataset.pickIrrig;$&&$!==T&&(Oe(e.id,{irrigation:$}),e.irrigation=$,Pe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Type d'irrigation modifié : ${T||"—"} → ${$}.`}),E(),U("Type d'irrigation mis à jour")),x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>x.remove(),280)})})},x=ue({title:"Type d'irrigation",body:M,doneLabel:"Fermer",onDone:()=>{}});S()}function r(){const A=pn,T=Ke(e.id).env??e.env??"Plein champ",M=document.createElement("div"),S=()=>{M.innerHTML=A.map(y=>`
        <div class="m-sheet-option${y===T?" m-sheet-option--active":""}" data-pick-env="${y}">
          <span>${y}</span>
          ${y===T?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),M.querySelectorAll("[data-pick-env]").forEach(y=>{y.addEventListener("click",()=>{const $=y.dataset.pickEnv;$&&$!==T&&(Oe(e.id,{env:$}),e.env=$,Pe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Environnement modifié : ${T||"—"} → ${$}.`}),E(),U("Environnement mis à jour")),x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>x.remove(),280)})})},x=ue({title:"Environnement",body:M,doneLabel:"Fermer",onDone:()=>{}});S()}function u(){const A=[...Li,ht],T=Ke(e.id).texture??e.texture,M=document.createElement("div"),S=()=>{M.innerHTML=`
        <div class="m-sheet-option${T?"":" m-sheet-option--active"}" data-pick-texture="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez une texture</span>
          ${T?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${A.map(y=>`
          <div class="m-sheet-option${y===T?" m-sheet-option--active":""}" data-pick-texture="${y}">
            <span>${y}</span>
            ${y===T?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,M.querySelectorAll("[data-pick-texture]").forEach(y=>{y.addEventListener("click",()=>{const $=y.dataset.pickTexture;if(x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>x.remove(),280),$===ht){k(T);return}$!==T&&(Oe(e.id,{texture:$||null,soilAnalysis:null}),e.texture=$||null,e.soilAnalysis=null,Pe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${T||"—"} → ${$||"—"}.`}),E(),U("Texture de sol mise à jour"))})})},x=ue({title:"Texture de sol",body:M,doneLabel:"Fermer",onDone:()=>{}});S()}function b(){const A=e.name||"",T=document.createElement("div");T.innerHTML=`<input class="m-sheet-input" type="text" value="${A.replace(/"/g,"&quot;")}" placeholder="Nom de la parcelle">`;const M=T.querySelector("input");ue({title:"Nom",body:T,doneLabel:"Enregistrer",onDone:()=>{const S=M.value.trim();S&&S!==A&&(Oe(e.id,{name:S}),e.name=S,Pe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Nom de la parcelle modifié : ${A} → ${S}.`}),E(),U("Nom mis à jour"))}}),setTimeout(()=>M.focus(),300)}function v(){const A=e.variety||"",T=document.createElement("div");T.innerHTML=`<input class="m-sheet-input" type="text" value="${A.replace(/"/g,"&quot;")}" placeholder="Variété">`;const M=T.querySelector("input");ue({title:"Variété",body:T,doneLabel:"Enregistrer",onDone:()=>{const S=M.value.trim();S!==A&&(Oe(e.id,{variety:S||null}),e.variety=S||null,Pe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Variété modifiée : ${A||"—"} → ${S||"—"}.`}),E(),U("Variété mise à jour"))}}),setTimeout(()=>M.focus(),300)}function g(){const A=cropOptions,T=e.crop,M=document.createElement("div");M.innerHTML=A.map(x=>`
      <div class="m-sheet-option${x===T?" m-sheet-option--active":""}" data-pick-crop="${x}">
        <span>${x}</span>
        ${x===T?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const S=ue({title:"Culture",body:M,doneLabel:"Fermer",onDone:()=>{}});M.querySelectorAll("[data-pick-crop]").forEach(x=>{x.addEventListener("click",()=>{const y=x.dataset.pickCrop;S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>S.remove(),280),y!==T&&(Oe(e.id,{crop:y,phenoStage:null}),e.crop=y,e.phenoStage=null,Pe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Culture modifiée : ${T||"—"} → ${y}.`}),E(),U("Culture mise à jour"))})})}function h(){const A=Io(e.crop),T=e.phenoStage,M=document.createElement("div");M.innerHTML=A.map(x=>`
      <div class="m-sheet-option${x===T?" m-sheet-option--active":""}" data-pick-stade="${x}">
        <span>${x}</span>
        ${x===T?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const S=ue({title:"Stade phénologique",body:M,doneLabel:"Fermer",onDone:()=>{}});M.querySelectorAll("[data-pick-stade]").forEach(x=>{x.addEventListener("click",()=>{const y=x.dataset.pickStade;S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>S.remove(),280),y!==T&&(Oe(e.id,{phenoStage:y}),e.phenoStage=y,Pe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Stade phénologique modifié : ${T||"—"} → ${y}.`}),E(),U("Stade phénologique mis à jour"))})})}function k(A){const T=Ke(e.id).soilAnalysis??e.soilAnalysis??{},M=document.createElement("div");M.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:12px">
      <div>
        <label class="m-form-label">Argile (%)</label>
        <input type="number" class="m-sheet-input" id="soil-argile" value="${T.argile??""}" placeholder="Ex : 25" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Limon (%)</label>
        <input type="number" class="m-sheet-input" id="soil-limon" value="${T.limon??""}" placeholder="Ex : 40" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Sable (%)</label>
        <input type="number" class="m-sheet-input" id="soil-sable" value="${T.sable??""}" placeholder="Ex : 35" min="0" max="100">
      </div>
    </div>`,ue({title:"Analyse de sol",body:M,doneLabel:"Enregistrer",onDone:()=>{var z,L,j;const S=+(((z=M.querySelector("#soil-argile"))==null?void 0:z.value)||0),x=+(((L=M.querySelector("#soil-limon"))==null?void 0:L.value)||0),y=+(((j=M.querySelector("#soil-sable"))==null?void 0:j.value)||0),$={argile:S,limon:x,sable:y};Oe(e.id,{texture:ht,soilAnalysis:$}),e.texture=ht,e.soilAnalysis=$,Pe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${A||"—"} → analyse de sol (argile ${S}% / limon ${x}% / sable ${y}%).`}),E(),U("Analyse de sol enregistrée")}})}function w(){const A=Ke(e.id).volumeMaxM3??e.volumeMaxM3??null,T=document.createElement("div");T.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
      <label class="m-form-label">Volume limité (m³)</label>
      <input type="number" class="m-sheet-input" id="edit-volume-max" value="${A??""}" placeholder="Ex : 33000" step="100" min="0">
    </div>`,ue({title:"Volume limité de la parcelle",body:T,doneLabel:"Appliquer",onDone:()=>{var x;const M=(x=T.querySelector("#edit-volume-max"))==null?void 0:x.value,S=M===""?null:Math.max(0,+M);Oe(e.id,{volumeMaxM3:S}),e.volumeMaxM3=S,E(),U("Volume limité mis à jour")}})}const I=["IRRÉ-LIS Multi-Cultures","IRRÉ-LIS Mono-Culture","DeciTrait","Limacapt","Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","Movida GrapeVision"];function C(){let A=[...e.integrations||[]];function T(S){const x=I.filter(y=>!A.includes(y));S.innerHTML=`
        <div class="m-list-section-header">${A.length?`Actives (${A.length})`:"Actives"}</div>
        <div class="m-list">
          ${A.length?A.map((y,$)=>`
            <div class="m-list-row${$===A.length-1?" m-list-row--last":""}" style="gap:10px">
              ${yi(y)}
              <span class="m-list-row-label" style="flex:1">${y}</span>
              <button class="btn-unlink-integ" data-integ="${y}" style="border:none;background:none;color:#ff3b30;font-size:13px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Délier</button>
            </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucune intégration active</span></div>'}
        </div>
        ${x.length?`
        <div class="m-list-section-header">Disponibles</div>
        <div class="m-list">
          ${x.map((y,$)=>`
            <div class="m-list-row${$===x.length-1?" m-list-row--last":""}" style="gap:10px">
              ${yi(y)}
              <span class="m-list-row-label" style="flex:1">${y}</span>
              <button class="btn-add-integ" data-integ="${y}" style="border:none;background:none;color:#0172A4;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Lier</button>
            </div>`).join("")}
        </div>`:""}`,S.querySelectorAll(".btn-unlink-integ").forEach(y=>{y.addEventListener("click",()=>{A=A.filter($=>$!==y.dataset.integ),e.integrations=[...A],Pe(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${y.dataset.integ} » retirée de la parcelle.`}),T(S),U("Intégration déliée")})}),S.querySelectorAll(".btn-add-integ").forEach(y=>{y.addEventListener("click",()=>{A.includes(y.dataset.integ)||A.push(y.dataset.integ),e.integrations=[...A],Pe(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${y.dataset.integ} » activée sur la parcelle.`}),T(S),U("Intégration liée")})})}const M=ge(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${e.name}</span></button>
          <span style="font-size:17px;font-weight:600">Intégrations</span>
          <div style="width:60px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="integ-list-content" style="padding-bottom:32px"></div>`);M.querySelector(".m-detail-back").addEventListener("click",ve),T(M.querySelector("#integ-list-content"))}function E(){const A=c.querySelector("#detail-content");a==="widgets"&&(A.innerHTML=Go(e,i)),a==="donnees"&&(A.innerHTML=ta(i,s,l,e.id)),a==="params"&&(A.innerHTML=na(e,o,i),H()),P()}function H(){const A=window.L;A&&setTimeout(()=>{var S;const T=c.querySelector("#parcel-minimap");if(!T)return;const M=A.map(T,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(A.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(M),((S=e.latlngs)==null?void 0:S.length)>=3){const x=A.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(M);M.fitBounds(x.getBounds(),{padding:[8,8]})}else M.setView([e.lat,e.lng],14),A.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(M)},50)}function P(){var A,T,M,S,x,y,$,z;(A=c.querySelector(".m-prev5j-voir-details"))==null||A.addEventListener("click",()=>Zo(e)),(T=c.querySelector(".m-period-sel"))==null||T.addEventListener("change",L=>{s=L.target.value,s==="j7j2"&&(l="1d"),E()}),(M=c.querySelector(".m-step-sel"))==null||M.addEventListener("change",L=>{l=L.target.value,E()}),(S=c.querySelector(".m-export-btn"))==null||S.addEventListener("click",()=>ea(e,i,s)),c.querySelectorAll(".m-chart-svg-wrap").forEach(L=>Jo(L)),c.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(L=>{L.addEventListener("click",()=>{const j=+L.dataset.sensorId,D=le.find(q=>q.id===j);D&&$e(()=>import("./chart-fullscreen-DWpyWMgo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(q=>q.initChartFullscreen({sensor:D,linkedSensorIds:i,metricId:L.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),c.querySelectorAll(".m-irrig-footer-link").forEach(L=>{L.addEventListener("click",()=>{a="donnees",c.querySelectorAll(".m-detail-tab").forEach(j=>j.classList.toggle("active",j.dataset.view==="donnees")),E(),requestAnimationFrame(()=>{var j;(j=c.querySelector('.m-chart-card[data-metric-id="irrigation"]'))==null||j.scrollIntoView({block:"start"})})})}),c.querySelectorAll(".m-chart-details-link").forEach(L=>{L.addEventListener("click",()=>{if(L.dataset.metricId==="irrigation"){$e(()=>import("./chart-fullscreen-DWpyWMgo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(q=>q.initChartFullscreen({linkedSensorIds:i,metricId:"irrigation",backLabel:e.name,parcel:e}));return}const j=+L.dataset.sensorId,D=le.find(q=>q.id===j);D&&$e(()=>import("./chart-fullscreen-DWpyWMgo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(q=>q.initChartFullscreen({sensor:D,linkedSensorIds:i,metricId:L.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),c.querySelectorAll(".m-msr-add-btn").forEach(L=>{L.addEventListener("click",()=>No(L))}),c.addEventListener("click",L=>{const j=L.target.closest(".m-cumul-add-btn");if(j){const q=j.dataset.cumulMetricId,F=j.dataset.cumulVal,V=qo[q];if(!V)return;const re=document.createElement("div");re.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${V.metricLabel}</strong> (<em>${F}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,ue({title:"Tableau de bord",body:re,doneLabel:"Ajouter",onDone:()=>{const ie=q==="hf"?{cold:Le.hfSeuil}:q==="dj"?{low:Le.djMin,high:Le.djMax}:null;if(Bs({metricId:q,...V,subjectKey:`p-${e.id}`,subjectLabel:e.name,fromDate:`${new Date().getFullYear()}-01-01`,value:F,thresholds:ie})==="max"){U("Maximum de cumuls atteint (5)");return}U("Cumul ajouté au tableau de bord")}});return}const D=L.target.closest(".m-cumul-edit-btn");if(D){const q=D.dataset.cumulMetricId,F=document.createElement("div");q==="hf"?(F.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Le.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:F,doneLabel:"Appliquer",onDone:()=>{var V;Le.hfSeuil=+(((V=F.querySelector("#edit-hf-seuil"))==null?void 0:V.value)??7.2),E()}})):q==="dj"&&(F.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Le.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Le.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:F,doneLabel:"Appliquer",onDone:()=>{var V,re;Le.djMin=+(((V=F.querySelector("#edit-dj-min"))==null?void 0:V.value)??0),Le.djMax=+(((re=F.querySelector("#edit-dj-max"))==null?void 0:re.value)??18),E()}}));return}}),c.querySelectorAll("[data-open-sensor]").forEach(L=>{L.addEventListener("click",()=>{const j=+L.dataset.openSensor,D=le.find(q=>q.id===j);D&&$e(()=>Promise.resolve().then(()=>Ei),void 0).then(q=>q.initSensorDetail(D,"donnees",Vt))})}),c.querySelectorAll(".btn-sensor-more").forEach(L=>{L.addEventListener("click",j=>{j.stopPropagation();const D=+L.dataset.sensorId,q=le.find(ie=>ie.id===D);if(!q)return;const F=q.model==="P+"||q.model==="PT"?"Station météo":q.model==="P"?"Pluviomètre":q.model,V=document.createElement("div");V.innerHTML=`
          <div style="padding:8px 0">
            <button id="sheet-open-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;text-align:left">
              <i class="bi bi-broadcast" style="color:#0172A4;width:22px;text-align:center"></i>Voir la fiche capteur
            </button>
            <div style="height:.5px;background:rgba(0,0,0,.1);margin:0 20px"></div>
            <button id="sheet-unlink-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;color:#ff3b30;text-align:left">
              <i class="bi bi-x-circle" style="width:22px;text-align:center"></i>Délier de cette parcelle
            </button>
          </div>`;const re=ue({title:`${F} · ${q.serial}`,body:V,doneLabel:"Fermer",onDone:()=>{}});V.querySelector("#sheet-open-sensor").addEventListener("click",()=>{re.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{re.remove(),$e(()=>Promise.resolve().then(()=>Ei),void 0).then(ie=>ie.initSensorDetail(q,"donnees",Vt))},280)}),V.querySelector("#sheet-unlink-sensor").addEventListener("click",()=>{re.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{re.remove(),Ot({title:"Délier le capteur",message:`Délier <strong>${F} — ${q.serial}</strong> de <strong>${e.name}</strong> ?`,confirmLabel:"Délier",confirmColor:"#ff3b30",onConfirm:()=>{const ie=i.indexOf(D);ie!==-1&&i.splice(ie,1),q.parcelIds=q.parcelIds.filter(se=>se!==e.id),E(),U(`${q.serial} délié`)}})},280)})})}),c.querySelectorAll(".m-list-row[data-action]").forEach(L=>{L.addEventListener("click",()=>{if(L.dataset.action==="edit-exploitation")m();else if(L.dataset.action==="edit-name")b();else if(L.dataset.action==="edit-crop")g();else if(L.dataset.action==="edit-variety")v();else if(L.dataset.action==="edit-stade")h();else if(L.dataset.action==="edit-env")r();else if(L.dataset.action==="edit-irrigation")f();else if(L.dataset.action==="edit-volume-max")w();else if(L.dataset.action==="edit-texture")u();else if(L.dataset.action==="edit-integrations")C();else if(L.dataset.action==="delete-parcel"){const j=document.createElement("div");j.innerHTML=`
            <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 14px;text-align:center">
              La parcelle <strong>${e.name}</strong> sera définitivement supprimée.<br>Cette action est irréversible.
            </p>
            <div style="background:#fff8e8;border:1px solid #f0a500;border-radius:12px;padding:13px 14px;margin-bottom:18px">
              <div style="font-size:13px;font-weight:600;color:#1c1c1e;margin-bottom:5px">
                <i class="bi bi-lightbulb-fill" style="color:#f0a500;margin-right:4px"></i>Avant de supprimer…
              </div>
              <p style="font-size:13px;color:#636366;margin:0;line-height:1.55">
                Vous souhaitez peut-être simplement <strong>changer de culture</strong> ou <strong>redémarrer un cycle de culture</strong> ?
                Dans ce cas, modifiez la culture ou relancez un cycle depuis la configuration de la parcelle.
              </p>
            </div>
            <button id="do-delete-parcel" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer">
              Supprimer la parcelle
            </button>
          `;const D=ue({title:"Supprimer la parcelle ?",body:j,doneLabel:"Annuler",onDone:()=>{}});j.querySelector("#do-delete-parcel").addEventListener("click",()=>{D.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{D.remove(),dn(e.id,de),ve(),window.dispatchEvent(new CustomEvent("parcel-deleted",{detail:{id:e.id}}))},280)})}else U("Fonctionnalité à venir")})}),c.querySelectorAll(".m-widget-menu").forEach(L=>{L.addEventListener("click",j=>{var ie;j.stopPropagation();const D=L.dataset.wid;if(!D)return;(ie=c.querySelector(".m-widget-dd"))==null||ie.remove();const q=document.createElement("div");q.className="m-widget-dd",q.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:180px",q.innerHTML=`<button class="m-widget-dd-remove" data-wid="${D}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const F=c.querySelector(".m-detail-content"),V=L.getBoundingClientRect(),re=F.getBoundingClientRect();q.style.top=`${V.bottom-re.top+F.scrollTop+4}px`,q.style.right=`${re.right-V.right}px`,F.style.position="relative",F.appendChild(q),q.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{q.remove();const se=Jt(e,i).filter(oe=>oe!==D);Gs(e.id,se),E()}),setTimeout(()=>document.addEventListener("click",()=>q.remove(),{once:!0}),0)})}),(x=c.querySelector(".m-add-widget-btn"))==null||x.addEventListener("click",()=>Do(e,i,E)),(y=c.querySelector(".m-irrig-act-saisie"))==null||y.addEventListener("click",()=>{$e(()=>Promise.resolve().then(()=>st),void 0).then(L=>L.openIrrigationSaisie([e],U,{ids:[e.id],label:e.name},!0,E))}),($=c.querySelector(".m-irrig-act-saison"))==null||$.addEventListener("click",()=>{$e(()=>Promise.resolve().then(()=>st),void 0).then(L=>L.openIrrigationStrategie([e],U,{ids:[e.id],label:e.name},null,!0,E))}),(z=c.querySelector(".m-irrig-set-type"))==null||z.addEventListener("click",()=>{a="params",c.querySelectorAll(".m-detail-tab").forEach(L=>L.classList.toggle("active",L.dataset.view==="params")),E(),f()}),c.querySelectorAll(".m-pcumul-del").forEach(L=>{L.addEventListener("click",j=>{j.stopPropagation();const D=+L.dataset.pid,q=rt(D),F=new Set(q.hidden||[]);F.add(L.dataset.cid),jt(D,{hidden:[...F]}),E()})}),c.querySelectorAll(".m-pcumul-date").forEach(L=>{L.addEventListener("click",()=>{var j;return(j=L.showPicker)==null?void 0:j.call(L)}),L.addEventListener("change",()=>{const j=+L.dataset.pid,D=L.dataset.cid,q=L.value;if(!q||(Date.now()-new Date(q))/864e5>365)return;const re=rt(j).dates||{};re[D]=q,jt(j,{dates:re});const ie=L.closest(".m-cumuls-saved-card"),se=ie==null?void 0:ie.querySelector(".m-pcumul-value");if(se){const oe=ie.querySelector(".m-pcumul-unit"),ye=(oe==null?void 0:oe.textContent.trim())||"",qe=tt(j,D,q);se.innerHTML=`${qe}<span class="m-pcumul-unit">${ye}</span>`}})}),c.querySelectorAll(".m-pcumul-cfg").forEach(L=>{L.addEventListener("click",j=>{var se;j.stopPropagation();const D=+L.dataset.pid,q=L.dataset.cid,V={...rt(D).cfg},re=Uo[q];if(!re)return;(se=c.querySelector(".m-pcumul-cfg-panel"))==null||se.remove();const ie=document.createElement("div");ie.className="m-pcumul-cfg-panel",ie.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",ie.innerHTML=re.map(oe=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${oe.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${oe.key}" value="${V[oe.key]??oe.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',L.closest(".m-cumuls-saved-card").after(ie),ie.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{ie.querySelectorAll(".m-pcumul-cfg-inp").forEach(oe=>{V[oe.dataset.key]=parseFloat(oe.value)||0}),jt(D,{cfg:V}),ie.remove(),E()})})}),c.querySelectorAll(".m-pcumul-add").forEach(L=>{L.addEventListener("click",j=>{j.stopPropagation();const D=+L.dataset.pid,q=L.dataset.cid,F=rt(D),V=new Set(F.hidden||[]);V.delete(q),jt(D,{hidden:[...V]}),E()})})}c.querySelectorAll(".m-detail-tab").forEach(A=>{A.addEventListener("click",()=>{c.querySelectorAll(".m-detail-tab").forEach(T=>T.classList.remove("active")),A.classList.add("active"),a=A.dataset.view,E()})}),c.querySelector(".m-detail-back").addEventListener("click",ve),c.querySelector("#d-star").addEventListener("click",()=>{p=!p;const A=c.querySelector("#d-star");A.querySelector("i").className=p?"bi bi-star-fill":"bi bi-star",A.style.color=p?"#f5c842":"",U(p?"Ajouté aux favoris":"Retiré des favoris")}),c.querySelector("#d-plus").addEventListener("click",()=>{var A;(A=window.showMobileAddPage)==null||A.call(window)}),c.querySelector("#d-journal").addEventListener("click",()=>ca(e)),E()}function oa(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}const aa=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"],$i=e=>{const[i,t,n]=e.split("-");return`${n}/${t}/${i}`};function la(e){const i=[],t=(o,a)=>i.push({id:`auto-mod-${o}-${a.slice(0,16)}`,type:"modification",date:o,texte:a,_system:!0});t("2024-01-01","Création de la parcelle"),e.crop&&t("2024-03-15",`Culture définie : ${e.crop}`);const n=e.substrate?`Substrat : ${e.substrate}`:e.texture;return n&&t("2024-03-15",`Texture de sol définie : ${n}`),e.irrigation&&t("2024-04-01",`Type d'irrigation défini : ${e.irrigation}`),i}function ra(e){const i=[],t=pe.filter(o=>o.plotId===e);t.filter(o=>!o.fromStrategy).forEach(o=>{i.push({id:`auto-irrig-${o.iso}-${o.mm}`,type:"irrigation",date:o.iso,texte:o.real?`Irrigation ponctuelle de ${o.mm} mm enregistrée.`:`Irrigation ponctuelle de ${o.mm} mm planifiée.`,_system:!0})});const n=new Map;return t.filter(o=>o.fromStrategy&&o.seasonId).forEach(o=>{n.has(o.seasonId)||n.set(o.seasonId,[]),n.get(o.seasonId).push(o)}),n.forEach((o,a)=>{o.sort((c,m)=>c.iso.localeCompare(m.iso));const s=o[0],l=o[o.length-1],p=s.mm,d=o.length>1?Math.round((new Date(o[1].iso)-new Date(o[0].iso))/864e5):7;i.push({id:`auto-irrig-season-${a}`,type:"irrigation",date:s.iso,texte:`Saison d'irrigation programmée : ${p} mm tous les ${d} jours, du ${$i(s.iso)} au ${$i(l.iso)} (${o.length} irrigation${o.length>1?"s":""}, ${o.length*p} mm au total).`,_system:!0})}),i}function ca(e){const i=he.find(a=>a.id===e.orgId),t=(i==null?void 0:i.ville)||"",n=ge(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);n.querySelector(".m-detail-back").addEventListener("click",ve);function o(){var f,r;const a=n.querySelector("#mjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(u=>u.linkedType==="parcel"&&u.linkedId===e.id).map((u,b)=>({id:`dash-${b}`,type:"note",date:u.date,texte:u.text,auteur:u.auteur,role:u.role,_fromDashboard:!0})),l=[...la(e),...ra(e.id)],p=[...Nt(e.id),...s,...l].sort((u,b)=>b.date.localeCompare(u.date)),d=$i,c={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotColor:"#1d4ed8",dotBg:"#eff6ff",badgeCls:"irrigation"},integration:{label:"Intégration",icon:"bi-plug-fill",dotColor:"#7a4fa0",dotBg:"#f5f0fb",badgeCls:"integration"},modification:{label:"Modification",icon:"bi-pencil-square",dotColor:"#7a6a1e",dotBg:"#fdf8ee",badgeCls:"modification"}};let m=`
      <div style="padding:12px 16px 4px;display:flex;flex-direction:column;gap:8px">
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-note">
          <i class="bi bi-pencil-square"></i> Ajouter une note
        </button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-trait">
          <i class="bi bi-eyedropper"></i> Ajouter un traitement
        </button>
      </div>
    `;p.length===0?m+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(m+='<div class="m-jrn-timeline">',p.forEach((u,b)=>{const v=c[u.type]||c.note,g=u.type==="traitement",h=b===p.length-1,k=!!u._fromDashboard,w=!!u._system;m+=`
          <div class="m-jrn-entry" data-id="${u.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${v.dotBg};color:${v.dotColor};border-color:${v.dotColor}40">
                <i class="bi ${v.icon}"></i>
              </div>
              ${h?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${d(u.date)}</span>
                <span class="journal-type-badge journal-type-badge--${v.badgeCls}">${v.label}</span>
                ${k?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':w?"":`<button class="m-jrn-del" data-id="${u.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${u.texte?`<div class="m-jrn-texte">${u.texte}</div>`:""}
              ${u.auteur?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${u.auteur}${oa(u.role)}</div>`:""}
              ${g&&(u.produit||u.dose||u.cible)?`
                <div class="m-jrn-meta">
                  ${u.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${u.produit}</span>`:""}
                  ${u.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${u.dose}</span>`:""}
                  ${u.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${u.cible}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),m+="</div>"),a.innerHTML=m,(f=a.querySelector("#mjrn-add-note"))==null||f.addEventListener("click",()=>us("note",e.id,o)),(r=a.querySelector("#mjrn-add-trait"))==null||r.addEventListener("click",()=>us("traitement",e.id,o)),a.querySelectorAll(".m-jrn-del").forEach(u=>{u.addEventListener("click",()=>{const b=parseInt(u.dataset.id);Ci(e.id,Nt(e.id).filter(v=>v.id!==b)),o()})})}o()}function us(e,i,t){const n=e==="traitement",o=new Date().toISOString().slice(0,10),a=Vt==="admin"?"conseiller":"membre",s=he.find(d=>d.id===(Vt==="admin"?100:1)),l=s?`${s.prenomProprietaire} ${s.nomProprietaire}`:"Jean Dupont",p=document.createElement("div");p.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:12px">
      ${n?"":`
      <div>
        <div class="m-form-label">Catégorie</div>
        <select class="m-sheet-input" id="mjf-category">
          ${aa.map(d=>`<option value="${d}">${d}</option>`).join("")}
        </select>
      </div>`}
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="mjf-date" value="${o}">
      </div>
      <div>
        <div class="m-form-label">${n?"Observations":"Texte"}</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="${n?"Conditions météo, remarques…":"Votre note…"}" style="resize:none;min-height:90px"></textarea>
      </div>
      ${n?`
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
    </div>`,ue({title:n?"Ajouter un traitement":"Ajouter une note",body:p,doneLabel:"Enregistrer",onDone:()=>{var r;const d=p.querySelector("#mjf-date").value||o,c=p.querySelector("#mjf-texte").value.trim(),m=n?"":((r=p.querySelector("#mjf-category"))==null?void 0:r.value)||"",f={id:Date.now(),type:e,date:d,texte:c,auteur:l,role:a};n||(f.category=m),n&&(f.produit=p.querySelector("#mjf-produit").value.trim(),f.dose=p.querySelector("#mjf-dose").value.trim(),f.cible=p.querySelector("#mjf-cible").value.trim()),!(!c&&!f.produit)&&(Ci(i,[f,...Nt(i)]),t())}}),setTimeout(()=>{var d;return(d=p.querySelector("#mjf-texte"))==null?void 0:d.focus()},380)}const Rt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:xi},Symbol.toStringTag,{value:"Module"})),vt=100,da={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function bt(e,i){if(i==="irrelis")return Ai(e);const t=da[i];return t?le.some(n=>n.parcelIds.includes(e.id)&&t.includes(n.model)):!0}const Pt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"nrs",label:"Niveau de réservoir (spatialisé)",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Hier"],defaultAgg:"7 derniers jours"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"},{id:"irrelis",label:"Irré-LIS",unit:"mm",aggs:["Aujourd'hui","Demain","J+3","J+5"],defaultAgg:"Aujourd'hui"}];function ua(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function ps(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"irrigation":return i===0?"#c7c7cc":i<30?"#FFDFB8":"#FF8C00";case"etp":return i<2?"#D6EDF9":i<5?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"temp_rosee":return i<5?"#D2DEFA":i<12?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"rfu":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"nrs":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";case"irrelis":return i>=35?"#24B066":i>=12?"#E8A020":"#E05252";default:return"#0172A4"}}function pa(e,i){const t=new Date().toISOString().split("T")[0],n=s=>{const l=new Date;return l.setDate(l.getDate()-s),l.toISOString().split("T")[0]},o=s=>{const l=new Date;return l.setDate(l.getDate()+s),l.toISOString().split("T")[0]},a=pe.filter(s=>s.plotId===e);switch(i){case"Aujourd'hui":return a.filter(s=>s.iso===t).reduce((s,l)=>s+l.mm,0);case"7 derniers jours":return a.filter(s=>s.real&&s.iso>=n(7)).reduce((s,l)=>s+l.mm,0);case"30 derniers jours":return a.filter(s=>s.real&&s.iso>=n(30)).reduce((s,l)=>s+l.mm,0);case"Demain":return a.filter(s=>!s.real&&s.iso===o(1)).reduce((s,l)=>s+l.mm,0);case"7 prochains jours":return a.filter(s=>!s.real&&s.iso>t&&s.iso<=o(7)).reduce((s,l)=>s+l.mm,0);case"30 prochains jours":return a.filter(s=>!s.real&&s.iso>t&&s.iso<=o(30)).reduce((s,l)=>s+l.mm,0);case"Toute la saison":return a.filter(s=>s.real).reduce((s,l)=>s+l.mm,0);default:return a.filter(s=>s.real).reduce((s,l)=>s+l.mm,0)}}function ma(e){switch(e){case"irrigation":return 0;case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"nrs":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function va(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const n=i==="admin",o=he.filter(h=>h.id!==vt);Object.fromEntries(he.map(h=>[h.id,h]));let a=null,s=null;const l={};let p="carte",d="pluie",c="7 derniers jours",m="all";function f(h){if(d==="irrigation")return pa(h,c);if(d==="irrelis"){const w=de.find(I=>I.id===h);return w?Math.round(Mi(w,c)):0}const k=`${h}-${d}-${c}`;return k in l||(l[k]=ma(d)),l[k]}function r(){return i==="new"||i==="new-adherent"?[]:n?m==="all"?de:m===String(vt)?de.filter(h=>h.orgId===vt):de.filter(h=>String(h.orgId)===m):de.filter(h=>h.orgId===1)}function u(){if(a){try{a.remove()}catch{}a=null,s=null}}function b(){u();const h=Pt.find(E=>E.id===d)||Pt[0],k=r(),w=n?`
      <select class="m-filter-select" id="org-filter" style="flex:0 0 44px;height:44px">
        <option value="all">Toutes les organisations</option>
        <option value="${vt}"${m===String(vt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${o.map(E=>`<option value="${E.id}"${m===String(E.id)?" selected":""}>${E.name}</option>`).join("")}
      </select>`:"",I=[...k].sort((E,H)=>{const P=bt(E,d),A=bt(H,d);return P&&!A?-1:!P&&A?1:P?f(H.id)-f(E.id):E.name.localeCompare(H.name,"fr")}),C=I.length?`<div class="m-plain-list">${I.map(E=>{var M,S,x;const H=((M=E.latlngs)==null?void 0:M.length)>0||((S=E.shape)==null?void 0:S.type)==="polygon"||((x=E.shape)==null?void 0:x.type)==="rectangle",P=[E.crop,E.irrigation,H&&E.area?`${E.area} ha`:null].filter(Boolean).join(" · "),A=bt(E,d),T=le.filter(y=>y.parcelIds.includes(E.id)).some(y=>y.event&&(Array.isArray(y.event)?y.event.length>0:!0));return`
            <div class="m-plain-row m-tappable" data-plot-id="${E.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${E.name}${T?' <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px"></span>':""}</span>
                ${P?`<span class="m-plain-city">${P}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                ${(()=>{const y=A&&!(d==="irrigation"&&!pe.some(z=>z.plotId===E.id)),$=y?f(E.id):null;return`<span class="m-plain-data${y?"":" m-plain-na"}"${y?` style="color:${ps(d,$)}"`:""}>${y?`${$} ${h.unit}`:"—"}</span>`})()}
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:i==="new"||i==="new-adherent"?`<div class="m-empty-state"><i class="bi bi-map"></i><p>Vous n'avez pas encore de parcelle</p><button onclick="window.showMobileAddPage?.()" style="margin-top:8px;background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer">Créer une parcelle</button></div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';t.innerHTML=`
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
            ${Pt.map(E=>`<option value="${E.id}"${E.id===d?" selected":""}>${E.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${h.aggs.map(E=>`<option${E===c?" selected":""}>${E}</option>`).join("")}
          </select>
        </div>
        ${w}
      </div>
      ${p==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${C}</div>`}`,g(),p==="carte"&&v(k,h)}function v(h,k){const w=window.L;w&&setTimeout(()=>{const I=t.querySelector("#parcel-map");if(!I)return;if(a=w.map(I,{zoomControl:!1,attributionControl:!1}),w.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(a),!h.length&&(i==="new"||i==="new-adherent")){const E=he.find(A=>A.id===1);E&&a.setView([E.lat,E.lng],13),a.invalidateSize();const H=I.parentElement;H.style.position="relative";const P=document.createElement("div");P.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",P.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-geo-alt" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de parcelle</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Créez votre première parcelle pour commencer à suivre vos cultures.</p>
            <button id="empty-create-parcel-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Créer une parcelle</button>
          </div>`,H.appendChild(P),H.querySelector("#empty-create-parcel-btn").addEventListener("click",()=>{var A;return(A=window.showMobileAddPage)==null?void 0:A.call(window)});return}const C=[];h.forEach(E=>{var z;const H=d!=="irrigation"||pe.some(L=>L.plotId===E.id),P=bt(E,d)&&H?`${f(E.id)} ${k.unit}`:"—",A=le.filter(L=>L.parcelIds.includes(E.id)).map(L=>L.id),T=()=>xi(E,A),M=[E.lat,E.lng],S=bt(E,d)&&H,x=S?ps(d,f(E.id)):"#0172A4";E.latlngs&&E.latlngs.length>=3?(w.polygon(E.latlngs,{color:"#fff",weight:2,fillColor:x,fillOpacity:.35}).addTo(a).on("click",T),C.push(...E.latlngs)):C.push(M);const y=w.circleMarker(M,{radius:S?8:6,color:"#fff",weight:2,fillColor:x,fillOpacity:S?.95:.4}).addTo(a);if(A.some(L=>{const j=le.find(D=>D.id===L);return(j==null?void 0:j.event)&&(Array.isArray(j.event)?j.event.length>0:!0)})&&w.marker(M,{icon:w.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(a),S){y.bindTooltip(P,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const L=D=>{if(!D)return;const q=ua(x);D.style.setProperty("background",x,"important"),D.style.setProperty("color",q,"important"),D.style.setProperty("border-color",q,"important"),D.style.setProperty("box-shadow","none","important")},j=(z=y.getTooltip())==null?void 0:z.getElement();j&&L(j),y.on("tooltipopen",D=>L(D.tooltip.getElement()))}y.on("click",T)}),C.length&&(s=C,a.fitBounds(C,{padding:[32,32]})),a.invalidateSize()},0)}window.addEventListener("m-tab-change",h=>{h.detail==="parcelles"&&p==="carte"&&a&&setTimeout(()=>{a.invalidateSize(),s!=null&&s.length&&a.fitBounds(s,{padding:[32,32]})},50)});function g(){var h,k,w;t.querySelectorAll(".m-view-btn").forEach(I=>I.addEventListener("click",()=>{p=I.dataset.view,b()})),(h=t.querySelector("#metric-sel"))==null||h.addEventListener("change",I=>{var C;d=I.target.value,c=((C=Pt.find(E=>E.id===d))==null?void 0:C.defaultAgg)||"",b()}),(k=t.querySelector("#agg-sel"))==null||k.addEventListener("change",I=>{c=I.target.value,b()}),(w=t.querySelector("#org-filter"))==null||w.addEventListener("change",I=>{m=I.target.value,b()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(I=>{I.addEventListener("click",()=>{const C=de.find(H=>H.id===+I.dataset.plotId);if(!C)return;const E=le.filter(H=>H.parcelIds.includes(C.id)).map(H=>H.id);xi(C,E)})})}b()}const Ce={djMin:0,djMax:18,hfSeuil:7.2},ba={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"}},fa=4,ha={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},ga={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"},ya={"cuillère bloquée":{icon:"bi-droplet-fill",summary:"La cuillère du pluviomètre ne se déverse pas correctement. Les mesures de pluie peuvent être inexactes ou nulles.",causes:["Feuilles, insectes ou toiles d'araignées obstruant l'entonnoir","Corps étranger bloquant l'axe de rotation de la cuillère","Dépôts calcaires ou algues dans le mécanisme","Capteur installé hors niveau (non vertical)","Gel partiel du mécanisme en période froide"],solutions:[{n:1,title:"Inspecter l'entonnoir",desc:"Retirez toute feuille, insecte ou débris présent dans l'entonnoir. Inspectez visuellement la cuillère."},{n:2,title:"Tester la cuillère manuellement",desc:"Appuyez alternativement sur chaque compartiment de la cuillère : elle doit basculer librement d'un côté à l'autre."},{n:3,title:"Rincer à l'eau claire",desc:"Versez lentement de l'eau claire dans l'entonnoir. Évitez les détergents qui pourraient laisser des résidus affectant les mesures."},{n:4,title:"Vérifier la verticalité",desc:"Assurez-vous que le mat ou le support est bien vertical à l'aide d'un niveau à bulle. Une inclinaison de 5° peut bloquer la cuillère."},{n:5,title:"Observer les prochaines pluies",desc:"Si l'anomalie persiste après la prochaine pluie, comparez avec une station voisine. Contactez le support si nécessaire."}],diag:[{label:"Dernière mesure de pluie",hint:"Vérifiez si des pluies ont bien été comptabilisées récemment"},{label:"Station voisine",hint:"Comparez avec un autre capteur P ou P+ proche"},{label:"Historique nettoyage",hint:"Vérifiez le journal de maintenance du capteur"},{label:"Saison",hint:"Automne/hiver : vérifiez la présence de gel ou feuilles"}]},"capteur couché":{icon:"bi-phone-landscape",summary:"Le capteur a détecté une position anormale (inclinaison excessive). Les mesures météo peuvent être perturbées.",causes:["Coup de vent violent ayant renversé ou incliné le support","Choc accidentel (passage d'engins agricoles, animaux)","Support ou mat inadapté, insuffisamment ancré","Affaissement du sol après forte pluie","Neige ou givre ayant alourdi le capteur"],solutions:[{n:1,title:"Se rendre sur site",desc:"Vérifiez visuellement l'état du capteur et de son support."},{n:2,title:"Redresser et fixer le support",desc:"Remettez le mat en position verticale. Utilisez un niveau à bulle pour vérifier. Renforcez l'ancrage si nécessaire."},{n:3,title:"Vérifier l'intégrité du capteur",desc:"Inspectez le boîtier, l'antenne et les capteurs externes (anémomètre, girouette, pluvio) pour tout dommage visible."},{n:4,title:"Contrôler la qualité du signal",desc:"Après remise en place, vérifiez que les émissions reprennent normalement et que le signal est bon."},{n:5,title:"Signaler l'anomalie résolue",desc:`Utilisez le bouton "Arrêter" pour clore l'anomalie une fois le capteur en position correcte.`}],diag:[{label:"Qualité du signal",hint:"Un signal dégradé peut indiquer un problème d'antenne"},{label:"Date de l'anomalie",hint:"Correspond-elle à un épisode météo violent ?"},{label:"Type de support",hint:"Mat télescopique, piquet, fixation murale ?"},{label:"Accès terrain",hint:"Vérifiez si la parcelle est accessible (engins, conditions météo)"}]},"émissions interrompues":{icon:"bi-wifi-off",summary:"Le capteur n'émet plus de données. Aucune mesure n'a été reçue depuis un moment anormalement long.",causes:["Batterie déchargée ou défaillante","Perte de couverture réseau télécom (Sigfox / LoRa)","Obstruction physique du signal (bâtiment, relief, végétation)","Défaillance électronique interne","Exposition à l'eau ou à l'humidité excessive (joint endommagé)"],solutions:[{n:1,title:"Vérifier le niveau de batterie",desc:"Accédez aux paramètres du capteur et consultez l'indicateur de batterie. Si critique, procédez au remplacement."},{n:2,title:"Contrôler la couverture réseau",desc:"Vérifiez la carte de couverture Sigfox ou LoRa pour l'emplacement du capteur. Un déplacement de quelques mètres peut suffire."},{n:3,title:"Relancer manuellement",desc:"Sur certains modèles, un appui court sur le bouton d'activation peut forcer une tentative d'émission. Consultez la notice."},{n:4,title:"Inspecter l'étanchéité",desc:"Vérifiez l'état des joints et du boîtier. Une infiltration d'eau peut provoquer des courts-circuits."},{n:5,title:"Contacter le support",desc:"Si les étapes précédentes n'ont pas résolu le problème, le capteur peut nécessiter une réparation ou un remplacement."}],diag:[{label:"Dernière émission",hint:"Il y a combien de temps ? Heure/jour de la dernière trame reçue"},{label:"Couverture réseau",hint:"Vérifiez sur la carte de couverture opérateur"},{label:"Batterie",hint:"Niveau batterie lors de la dernière émission connue"},{label:"Météo récente",hint:"Orage, forte pluie, gel ayant pu affecter le capteur"}]},"capteur déplacé":{icon:"bi-geo-alt",summary:"Le capteur a été détecté à un emplacement différent de sa position habituelle.",causes:["Déplacement intentionnel non enregistré dans l'application","Vol ou déplacement non autorisé du capteur","Dérive GPS en cas de signal GNSS perturbé","Déplacement lors d'opérations agricoles (travaux, irrigation)"],solutions:[{n:1,title:"Vérifier la position actuelle",desc:"Rendez-vous sur site pour confirmer l'emplacement physique du capteur."},{n:2,title:"Mettre à jour la position",desc:"Si le capteur a été déplacé intentionnellement, mettez à jour sa géolocalisation dans les paramètres."},{n:3,title:"Signaler un vol",desc:"Si le capteur a disparu, contactez les autorités et le support Weenat pour signalement et désactivation."},{n:4,title:"Clore l'anomalie",desc:`Une fois la situation clarifiée, utilisez le bouton "Arrêter" pour clore l'événement.`}],diag:[{label:"Coordonnées initiales",hint:"Comparez avec les coordonnées enregistrées dans les paramètres"},{label:"Dernier passage",hint:"Qui a eu accès à la parcelle récemment ?"},{label:"Signal GPS",hint:"Un signal faible peut fausser la localisation sans déplacement réel"}]}};function xa(e,i){const t=ya[e]||{summary:"Anomalie détectée sur ce capteur.",causes:["Cause inconnue — contactez le support pour plus d'informations."],solutions:[{n:1,title:"Contacter le support",desc:"Décrivez l'anomalie observée pour obtenir de l'aide."}]};let n="causes";function o(f,r,u){return`<button class="m-anom-tab" data-tab="${f}" style="flex:1;padding:10px 4px;background:none;border:none;border-bottom:2px solid ${u?"#0172A4":"transparent"};font-size:13px;font-weight:${u?"600":"400"};color:${u?"#0172A4":"#8e8e93"};cursor:pointer;font-family:inherit;white-space:nowrap">${r}</button>`}function a(){return`<ul style="margin:0;padding:0 0 0 18px;display:flex;flex-direction:column;gap:10px">
      ${t.causes.map(f=>`<li style="font-size:14px;color:#1c1c1e;line-height:1.5">${f}</li>`).join("")}
    </ul>`}function s(){return t.solutions.map(f=>`
      <div style="display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid #f2f2f7">
        <div style="min-width:28px;height:28px;border-radius:50%;background:#0172A4;color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${f.n}</div>
        <div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${f.title}</div>
          <div style="font-size:13px;color:#636366;line-height:1.5">${f.desc}</div>
        </div>
      </div>`).join("")}function l(){return`<div style="display:flex;flex-direction:column;gap:12px">
      <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 4px">Si les solutions proposées n'ont pas résolu le problème, l'équipe support Weenat est disponible pour vous aider.</p>

      <a href="mailto:support@weenat.com" style="display:flex;align-items:center;gap:12px;background:#f5f5f7;border-radius:12px;padding:14px 16px;text-decoration:none;color:#1c1c1e">
        <i class="bi bi-envelope-fill" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
        <div>
          <div style="font-size:13px;font-weight:600">Email</div>
          <div style="font-size:13px;color:#0172A4">support@weenat.com</div>
        </div>
      </a>

      <a href="tel:+33784968456" style="display:flex;align-items:center;gap:12px;background:#f5f5f7;border-radius:12px;padding:14px 16px;text-decoration:none;color:#1c1c1e">
        <i class="bi bi-telephone-fill" style="font-size:20px;color:#30d158;flex-shrink:0"></i>
        <div>
          <div style="font-size:13px;font-weight:600">Téléphone</div>
          <div style="font-size:13px;color:#30d158">+33 7 84 96 84 56</div>
          <div style="font-size:11px;color:#8e8e93">Lun–Jeu 9h–18h · Ven 9h–17h</div>
        </div>
      </a>

      <a href="https://support.weenat.com/" target="_blank" style="display:flex;align-items:center;gap:12px;background:#f5f5f7;border-radius:12px;padding:14px 16px;text-decoration:none;color:#1c1c1e">
        <i class="bi bi-book-fill" style="font-size:20px;color:#ff9f0a;flex-shrink:0"></i>
        <div>
          <div style="font-size:13px;font-weight:600">Centre d'aide</div>
          <div style="font-size:13px;color:#ff9f0a">support.weenat.com</div>
        </div>
      </a>

      <div style="margin-top:4px;padding:12px;background:#fff8e8;border-radius:10px;border:1px solid #ffcc00">
        <div style="font-size:12px;font-weight:600;color:#1c1c1e;margin-bottom:3px">Informations à préparer</div>
        <ul style="margin:0;padding-left:16px;font-size:12px;color:#636366;line-height:1.6">
          <li>Numéro de série : <strong>${i.serial}</strong></li>
          <li>Modèle : <strong>${i.model}</strong></li>
          <li>Anomalie signalée : <strong>${e}</strong></li>
        </ul>
      </div>
    </div>`}function p(){return`
      <div style="display:flex;border-bottom:1px solid #e5e5ea;background:#fff">
        ${o("causes","Causes",n==="causes")}
        ${o("solutions","Solutions",n==="solutions")}
        ${o("support","Support",n==="support")}
      </div>`}function d(){return n==="causes"?a():n==="solutions"?s():l()}const c=ge(`
    <div class="m-detail-header" style="flex-shrink:0">
      <div class="m-detail-topbar">
        <button class="m-detail-back" id="anom-back"><i class="bi bi-chevron-left"></i><span>Capteur</span></button>
      </div>
      <div style="padding:0 16px 12px;display:flex;align-items:center;gap:10px">
        <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;font-size:18px;flex-shrink:0"></i>
        <div>
          <div style="font-size:17px;font-weight:700;color:#1c1c1e">${e.charAt(0).toUpperCase()+e.slice(1)}</div>
          <div style="font-size:12px;color:#8e8e93">${i.model} ${i.serial}</div>
        </div>
      </div>
    </div>
    <div id="anom-tabs-bar" style="flex-shrink:0">${p()}</div>
    <div style="flex:1;overflow-y:auto">
      <div style="padding:16px">
        <p style="font-size:13px;color:#636366;line-height:1.5;margin:0 0 16px;padding:12px;background:#fff3f3;border-radius:10px;border-left:3px solid #ff3b30">${t.summary}</p>
        <div id="anom-content">${d()}</div>
      </div>
    </div>
  `);c.querySelector("#anom-back").addEventListener("click",ve);function m(){c.querySelectorAll(".m-anom-tab").forEach(f=>{f.addEventListener("click",()=>{n=f.dataset.tab,c.querySelector("#anom-tabs-bar").innerHTML=p(),c.querySelector("#anom-content").innerHTML=d(),m()})})}m()}const wi={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},$a={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"};function qi(e){return e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[30,60]:e==="CHP-60/90"?[45,90]:null}function ms(e,i){const t=wi[e.model]?`${wi[e.model]} · ${e.model}`:e.model,n=qi(e.model)&&e.depth!=null?`${e.depth} cm`:null;return[t,n,i].filter(Boolean).join(" · ")}const kt={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function Qs(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(n,o)=>{const a=o/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,s))})}const en={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function wa(e,i,t,n,o,a=20){const s=en[e]||10080,l=new Date,p=f=>e==="1d"||e==="hier"?`${String(f.getHours()).padStart(2,"0")}h`:e==="365d"?f.toLocaleDateString("fr-FR",{month:"short"}):`${String(f.getDate()).padStart(2,"0")}/${String(f.getMonth()+1).padStart(2,"0")}`,d=4,c=i-t-n,m=o-a;return Array.from({length:d+1},(f,r)=>{const u=r/d,b=new Date(l.getTime()-(1-u)*s*6e4),v=(t+u*c).toFixed(1),g=r===0?"start":r===d?"end":"middle";return[`<line x1="${v}" y1="${m}" x2="${v}" y2="${m+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${v}" y="${o-3}" text-anchor="${g}" font-size="9" fill="#8e8e93" font-family="-apple-system">${p(b)}</text>`].join("")}).join("")}function Sa(e,i,t,n="7d",o=""){const a=tn[n]||60,s=Qs(e,a),l=320,p=100,d=34,c=6,m=10,f=20,r=l-d-c,u=p-m-f,b=t?0:Math.min(...s),v=Math.max(...s,b+.001),g=v-b,h=S=>d+S/(s.length-1)*r,k=S=>m+u-(S-b)/g*u,w=`g${Math.random().toString(36).slice(2,8)}`,I=[0,.5,1].map(S=>{const x=b+S*g,y=m+u-S*u;return`<text x="${d-3}" y="${(y+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${x<10?x.toFixed(1):Math.round(x)}</text>`}).join(""),C=[.25,.5,.75].map(S=>`<line x1="${d}" y1="${(m+u-S*u).toFixed(1)}" x2="${l-c}" y2="${(m+u-S*u).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),E=`<line x1="${d}" y1="${m+u}" x2="${l-c}" y2="${m+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,H=wa(n,l,d,c,p);if(t){const S=r/s.length*.7;return`<svg viewBox="0 0 ${l} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      ${I}${C}${E}
      ${s.map((x,y)=>{const $=(x-b)/g*u,z=m+u-$;return`<rect x="${(h(y)-S/2).toFixed(1)}" y="${z.toFixed(1)}" width="${S.toFixed(1)}" height="${$.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${H}
    </svg>`}const P=s.map((S,x)=>[h(x),k(S)]),A=P.map(([S,x],y)=>`${y?"L":"M"}${S.toFixed(1)},${x.toFixed(1)}`).join(" "),T=`${A} L${h(s.length-1).toFixed(1)},${(m+u).toFixed(1)} L${d},${(m+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(S=>+S.toFixed(2)),minV:+b.toFixed(2),maxV:+v.toFixed(2)}))}" data-color="${i}" data-unit="${o}" style="position:relative">
    <svg viewBox="0 0 ${l} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      <defs><linearGradient id="${w}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${I}${C}${E}
      <path d="${T}" fill="url(#${w})"/>
      <path d="${A}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${P.map(([S,x])=>`<circle cx="${S.toFixed(1)}" cy="${x.toFixed(1)}" r="2" fill="${i}"/>`).join("")}
      ${H}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function ka(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function Ea(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,n=e.querySelector(".m-chart-tip"),o=e.querySelector(".m-chart-crosshair"),a=e.dataset.color||"#0172A4",s=e.dataset.unit||"";function l(d){const c=e.getBoundingClientRect(),m=Math.max(0,Math.min(1,(d-c.left)/c.width)),f=Math.round(m*(t.length-1)),r=t[f],u=m*100,b=(r<10?r.toFixed(1):String(Math.round(r)))+(s?` ${s}`:""),v=ka(a);o.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${u}%;width:1px;background:${a};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(u,75)}%;background:${a};color:${v};border:1.5px solid ${v};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=b}function p(){o.style.display="none",n.style.display="none"}e.addEventListener("pointermove",d=>{d.preventDefault(),l(d.clientX)}),e.addEventListener("pointerdown",d=>l(d.clientX)),e.addEventListener("pointerup",p),e.addEventListener("pointerleave",p),e.style.cursor="crosshair"}const tn={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function La(e,i,t){if(!t)return"";const n=tn[i]||60,a=(en[i]||10080)/(n*60),s=Qs(e,n);let l=[];if(t==="temp"){const p=s.reduce((c,m)=>c+Math.max(0,Math.min(m,Ce.djMax)-Ce.djMin),0)*(a/24),d=s.filter(c=>c<Ce.hfSeuil).length*a;l=[{label:"Degrés jours",val:`${Math.round(p)} DJ`,metricId:"dj",thresholdText:`${Ce.djMin}°C → ${Ce.djMax}°C`},{label:"Heures de froid",val:`${Math.round(d)} h`,metricId:"hf",thresholdText:`< ${Ce.hfSeuil}°C`}]}else if(t==="pluie")l=[{label:"Cumul de pluie",val:`${s.reduce((d,c)=>d+c,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const p=s.filter(d=>d>120).length*a;l=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(p)} h`,metricId:"rayo"}]}else if(t==="hws"){const p=s.filter(d=>d>50).length*a;l=[{label:"Cumul d'heures d'humectation",val:`${Math.round(p)} h`,metricId:"humec"}]}return l.length?`<div class="m-chart-cumuls">${l.map(p=>{const d=p.metricId==="dj"||p.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${p.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${p.label}</span>
          ${p.thresholdText?`<span class="m-chart-cumul-thresh">${p.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${p.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${d}
        <button class="m-cumul-add-btn" data-cumul-label="${p.label}" data-cumul-val="${p.val}" data-cumul-metric-id="${p.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}function Ca(e,i="7d",t="1h"){const n=kt[e.model]||[];if(!n.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const o={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},a={temp:"temperature"},s=new Set(["tseche","thumide"]),l=n.map(c=>{const m=o[c.id]||c.id,f=La(c.id,i,c.cumulsType),r=s.has(c.id)?"":`<button class="m-msr-add-btn" data-msr-metric-id="${a[c.id]||c.id}" data-msr-label="${c.label}" data-msr-unit="${c.unit||""}" data-msr-color="${c.color}" data-msr-period="${i}" data-msr-step="${t}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`;return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${c.color}">${c.label}</span>
          ${r}
        </div>
        ${Sa(c.id,c.color,c.cumul,i,c.unit||"")}
        <div class="m-chart-details-link" data-metric-id="${m}">Voir détails →</div>
        ${f}
      </div>`}).join(""),p=new Date().toISOString().slice(0,10),d=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-to m-custom-date" value="${p}">
      </div>`:""}
    </div>
    <div class="m-detail-section">${l}</div>`}function Aa(e){var p;const i=(e.parcelIds||[]).map(d=>de.find(c=>c.id===d)).filter(Boolean),t=i[0]||null,n=t?he.find(d=>d.id===t.orgId):null,o=e.networkQuality||0,a=o>70?"#30d158":o>40?"#ff9f0a":"#ff3b30",s=e.event?Array.isArray(e.event)?e.event:[e.event]:[],l=i.map((d,c)=>`<div class="m-list-row${c===i.length-1&&i.length>0,""}" data-unlink-plot="${d.id}">
      <span class="m-list-row-label">${d.name}</span>
      ${d.crop?`<span class="m-list-row-value">${d.crop}</span>`:""}
      <button data-unlink-plot-btn="${d.id}" style="background:none;border:none;padding:4px 6px;cursor:pointer;color:#ff3b30;font-size:13px;line-height:1;flex-shrink:0" title="Délier">
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
          <span class="m-list-row-value">${$a[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${wi[e.model]||e.model}</span>
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
          <span class="m-list-row-value">${(n==null?void 0:n.name)||"—"}</span>
        </div>
      </div>

      ${(()=>{const d=qi(e.model);return d?`
          <div class="m-list-section-header">Configuration</div>
          <div class="m-list">
            <div class="m-list-row m-list-row--last" style="flex-wrap:wrap;gap:8px">
              <span class="m-list-row-label">Profondeur d'installation</span>
              <div style="display:flex;align-items:center;gap:6px;margin-left:auto">
                <input type="number" id="chp-depth-input" value="${e.depth??d[0]}" min="${d[0]}" max="${d[1]}" step="5"
                  style="width:62px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 8px;font-size:14px;font-family:inherit;background:#f5f5f7;text-align:center;-webkit-appearance:none">
                <span style="font-size:13px;color:#8e8e93">cm</span>
                <button id="chp-depth-save" style="background:#0172A4;color:#fff;border:none;border-radius:8px;padding:6px 12px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer">Enregistrer</button>
              </div>
              <div style="width:100%;font-size:11px;color:#8e8e93;margin-top:-4px">De ${d[0]} à ${d[1]} cm</div>
            </div>
          </div>`:""})()}

      <div class="m-list-section-header">Géolocalisation</div>
      <div class="m-list">
        ${t?'<div id="sensor-minimap" class="m-minimap-container"></div>':""}
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${(n==null?void 0:n.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${(t==null?void 0:t.lat)||0},${(t==null?void 0:t.lng)||0}?q=${(t==null?void 0:t.lat)||0},${(t==null?void 0:t.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">Anomalies</div>
      <div class="m-list">
        ${s.length?s.map((d,c)=>{const m=d.toLowerCase().includes("déplacé");return`<div class="m-list-row m-ev-row" data-ev-idx="${c}" style="justify-content:space-between;gap:10px;cursor:pointer">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${d}</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
                  ${m?`<button class="ev-stop-btn" data-ev-idx="${c}" style="background:rgba(255,59,48,.1);border:1px solid #ff3b30;border-radius:8px;padding:5px 10px;font-size:12px;color:#ff3b30;font-family:inherit;cursor:pointer;white-space:nowrap">Arrêter</button>`:""}
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
                </div>
              </div>`}).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${a};font-weight:600">${o}%</span>
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
    </div>`}function Si(e,i="donnees",t="admin"){var r;e.parcelIds||(e.parcelIds=[]);const n=e.parcelIds.length?de.find(u=>e.parcelIds.includes(u.id)):null;let o=i,a="7d",s="1h",l=!1;const p=n&&((r=he.find(u=>u.id===n.orgId))==null?void 0:r.ville)||"",d=ge(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${ms(e,p)}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres${e.event&&(!Array.isArray(e.event)||e.event.length>0)?' <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px;margin-bottom:1px;flex-shrink:0"></span>':""}</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function c(){const u=d.querySelector("#detail-content");o==="donnees"&&(u.innerHTML=Ca(e,a,s)),o==="params"&&(u.innerHTML=Aa(e),m()),f()}function m(){const u=window.L,b=e.parcelIds.length?de.find(v=>e.parcelIds.includes(v.id)):null;!u||!b||setTimeout(()=>{const v=d.querySelector("#sensor-minimap");if(!v)return;const g=u.map(v,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(g),g.setView([b.lat,b.lng],15),u.circleMarker([b.lat,b.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(g)},50)}function f(){var u,b,v,g;(u=d.querySelector(".m-period-sel"))==null||u.addEventListener("change",h=>{a=h.target.value,c()}),(b=d.querySelector(".m-step-sel"))==null||b.addEventListener("change",h=>{s=h.target.value,c()}),d.querySelectorAll(".m-chart-svg-wrap").forEach(h=>Ea(h)),d.querySelectorAll(".m-chart-details-link[data-metric-id]").forEach(h=>{h.addEventListener("click",()=>{$e(()=>import("./chart-fullscreen-DWpyWMgo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(k=>k.initChartFullscreen({sensor:e,metricId:h.dataset.metricId,backLabel:"Retour"}))})}),d.querySelectorAll(".m-msr-add-btn").forEach(h=>{h.addEventListener("click",()=>{const k=h.dataset.msrMetricId,w=`s-${e.id}`,I=`${e.model} ${e.serial}`,C=h.dataset.msrPeriod,E=h.dataset.msrStep,H=Hs({subjectKey:w,subjectLabel:I,metricId:k,metricLabel:h.dataset.msrLabel,unit:h.dataset.msrUnit||"",period:C,periodLabel:ha[C]||C,step:E,stepLabel:ga[E]||E,color:h.dataset.msrColor});if(H==="max"){U(`Maximum de mesures atteint (${fa})`);return}if(H==="dup"){U("Cette mesure est déjà dans vos favoris");return}U("Mesure ajoutée au tableau de bord")})}),d.addEventListener("click",h=>{const k=h.target.closest(".m-cumul-add-btn");if(k){const I=k.dataset.cumulMetricId,C=k.dataset.cumulVal,E=ba[I];if(!E)return;const H=`${e.model} ${e.serial}`,P=document.createElement("div");P.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${E.metricLabel}</strong> (<em>${C}</em>) au tableau de bord du capteur <strong>${e.serial}</strong> ?</div>`,ue({title:"Tableau de bord",body:P,doneLabel:"Ajouter",onDone:()=>{const A=I==="hf"?{cold:Ce.hfSeuil}:I==="dj"?{low:Ce.djMin,high:Ce.djMax}:null;if(Bs({metricId:I,...E,subjectKey:`s-${e.id}`,subjectLabel:H,fromDate:`${new Date().getFullYear()}-01-01`,value:C,thresholds:A})==="max"){U("Maximum de cumuls atteint (5)");return}U("Cumul ajouté au tableau de bord")}});return}const w=h.target.closest(".m-cumul-edit-btn");if(w){const I=w.dataset.cumulMetricId,C=document.createElement("div");I==="hf"?(C.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Ce.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:C,doneLabel:"Appliquer",onDone:()=>{var E;Ce.hfSeuil=+(((E=C.querySelector("#edit-hf-seuil"))==null?void 0:E.value)??7.2),c()}})):I==="dj"&&(C.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Ce.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Ce.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:C,doneLabel:"Appliquer",onDone:()=>{var E,H;Ce.djMin=+(((E=C.querySelector("#edit-dj-min"))==null?void 0:E.value)??0),Ce.djMax=+(((H=C.querySelector("#edit-dj-max"))==null?void 0:H.value)??18),c()}}))}}),d.querySelectorAll(".m-list-row[data-action]").forEach(h=>{h.addEventListener("click",()=>{const k=h.dataset.action;if(k==="add-maintenance")vs(e,{openForm:!0});else if(k==="add-plot")Ma(e,t,c);else if(k==="delete"){const w=de.find(I=>{var C;return(C=e.parcelIds)==null?void 0:C.includes(I.id)});Ot({title:"Retirer de l'exploitation",message:`Retirer <strong>${e.model} ${e.serial}</strong> de l'exploitation ?${w?`<br><br>Parcelle liée : <strong>${w.name}</strong>.`:""}<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>U("Capteur retiré de l'exploitation (fonctionnalité à venir)")})}else U("Fonctionnalité à venir")})}),d.querySelectorAll(".ev-stop-btn").forEach(h=>{h.addEventListener("click",k=>{k.stopPropagation();const w=+h.dataset.evIdx;Array.isArray(e.event)?(e.event=e.event.filter((I,C)=>C!==w),e.event.length||(e.event=null)):e.event=null,c()})}),d.querySelectorAll(".m-ev-row").forEach(h=>{h.addEventListener("click",k=>{if(k.target.closest(".ev-stop-btn"))return;const w=+h.dataset.evIdx,I=e.event?Array.isArray(e.event)?e.event:[e.event]:[];I[w]&&xa(I[w],e)})}),d.querySelectorAll("[data-unlink-plot-btn]").forEach(h=>{h.addEventListener("click",k=>{k.stopPropagation();const w=+h.dataset.unlinkPlotBtn,I=de.find(C=>C.id===w);Ot({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${(I==null?void 0:I.name)||"la parcelle"}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(C=>C!==w),U(`Délié de ${(I==null?void 0:I.name)||"la parcelle"}`),c()}})})}),(v=d.querySelector("#sensor-name-input"))==null||v.addEventListener("change",h=>{const k=h.target.value.trim();try{const I=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};k?I[e.id]=k:delete I[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(I))}catch{}const w=d.querySelector(".m-detail-title");w&&(w.textContent=k||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))}),(g=d.querySelector("#chp-depth-save"))==null||g.addEventListener("click",()=>{const h=d.querySelector("#chp-depth-input"),k=qi(e.model);if(!h||!k)return;let w=parseInt(h.value);if(isNaN(w))return;w=Math.max(k[0],Math.min(k[1],w)),h.value=w,e.depth=w;const I=d.querySelector(".m-detail-subtitle");I&&(I.textContent=ms(e,p)),U(`Profondeur enregistrée : ${w} cm`)})}d.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{d.querySelectorAll(".m-detail-tab").forEach(b=>b.classList.remove("active")),u.classList.add("active"),o=u.dataset.view,c()})}),d.querySelector(".m-detail-back").addEventListener("click",ve),d.querySelector("#d-star").addEventListener("click",()=>{l=!l;const u=d.querySelector("#d-star");u.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",u.style.color=l?"#f5c842":"",U(l?"Ajouté aux favoris":"Retiré des favoris")}),d.querySelector("#d-journal").addEventListener("click",()=>vs(e)),d.querySelector("#d-plus").addEventListener("click",()=>{var u;return(u=window.showMobileAddPage)==null?void 0:u.call(window)}),c()}const sn=e=>`sensor-journal-${e}`,nn=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function ki(e){try{const i=localStorage.getItem(sn(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",role:"conseiller",texte:""},{id:2,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",role:"conseiller",texte:""},{id:3,type:"note",date:"2023-11-02",user:"Jean Dupont",role:"membre",texte:"Capteur légèrement déplacé — redressé"}]}function on(e,i){localStorage.setItem(sn(e),JSON.stringify(i))}function Ma(e,i,t){const n=i==="adherent"?1:null,o=n?de.filter(d=>d.orgId===n):de.filter(d=>d.orgId!==100),a=new Set((kt[e.model]||[]).map(d=>d.id)),s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function l(d=""){const c=d.toLowerCase(),m=(c?o.filter(r=>r.name.toLowerCase().includes(c)||(r.crop||"").toLowerCase().includes(c)):o).slice().sort((r,u)=>r.name.localeCompare(u.name,"fr")),f=s.querySelector("#plot-list");if(!m.length){f.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}f.innerHTML="",m.forEach((r,u)=>{const b=e.parcelIds.includes(r.id),v=u===m.length-1,g=document.createElement("div");g.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${v?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,g.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${r.name}</span>
          ${r.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${r.crop}</span>`:""}
        </span>
        ${b?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,g.addEventListener("click",()=>{if(b)Ot({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${r.name}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(h=>h!==r.id),U(`Délié de ${r.name}`),l(d),t()}});else{const h=le.find(k=>k.id!==e.id&&k.parcelIds.includes(r.id)&&(kt[k.model]||[]).some(w=>a.has(w.id)));h?(p.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{p.remove(),Ta(e,r,h,t)},280)):(e.parcelIds=[...e.parcelIds,r.id],U(`Lié à ${r.name}`),l(d),t())}}),f.appendChild(g)})}l();const p=ue({title:"Parcelles liées",body:s,doneLabel:"Fermer",onDone:()=>{t()}});s.querySelector("#plot-search").addEventListener("input",d=>l(d.target.value))}function Ta(e,i,t,n){const o=(kt[t.model]||[]).filter(l=>(kt[e.model]||[]).some(p=>p.id===l.id)).map(l=>l.label).join(", "),a=document.createElement("div");a.innerHTML=`
    <div style="display:flex;align-items:flex-start;gap:10px;padding:6px 0 14px;font-size:13px;color:#636366;line-height:1.5">
      <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:17px;flex-shrink:0;margin-top:1px"></i>
      <span>La parcelle <strong style="color:#1c1c1e">${i.name}</strong> a déjà un capteur mesurant <strong style="color:#1c1c1e">${o}</strong>. Quel capteur conserver ?</span>
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
    <div style="height:6px"></div>`;const s=ue({title:"Conflit de métrique",body:a,doneLabel:"Annuler",onDone:()=>{}});a.querySelector("#keep-existing").addEventListener("click",()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),U("Liaison annulée")},280)}),a.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(l=>l!==i.id),e.parcelIds=[...e.parcelIds,i.id],s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),U(`Lié à ${i.name}`),n()},280)})}function vs(e,i={}){const t=ge(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",ve);const n=Object.fromEntries(nn.map(a=>[a.id,a]));function o(){var c;const a=t.querySelector("#sjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(m=>m.linkedType==="sensor"&&m.linkedId===e.id).map((m,f)=>({id:`dash-${f}`,type:"note",date:m.date,texte:m.text,user:m.auteur,_fromDashboard:!0})),l=[...ki(e.id),...s].sort((m,f)=>f.date.localeCompare(m.date)),p=m=>{const[f,r,u]=m.split("-");return`${u}/${r}/${f}`};let d=`
      <div style="padding:12px 16px 8px">
        <button class="m-btn m-btn--primary" id="sjrn-add-btn">
          <i class="bi bi-plus-circle-fill"></i> Ajouter une opération de maintenance
        </button>
      </div>
    `;l.length===0?d+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(d+='<div class="m-jrn-timeline">',l.forEach((m,f)=>{const r=n[m.type]||{label:m.type,icon:"bi-circle",color:"#8e8e93"},u=f===l.length-1,b=!!m._fromDashboard;d+=`
          <div class="m-jrn-entry" data-id="${m.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${r.color}18;color:${r.color};border-color:${r.color}40">
                <i class="bi ${r.icon}"></i>
              </div>
              ${u?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${p(m.date)}</span>
                <span style="font-size:12px;font-weight:600;color:${r.color}">${r.label}</span>
                ${b?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${m.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${m.texte?`<div class="m-jrn-texte">${m.texte}</div>`:""}
              ${m.user?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${m.user}${Ia(m.role)}</div>`:""}
            </div>
          </div>`}),d+="</div>"),a.innerHTML=d,(c=a.querySelector("#sjrn-add-btn"))==null||c.addEventListener("click",()=>bs(e.id,o)),a.querySelectorAll(".m-jrn-del").forEach(m=>{m.addEventListener("click",()=>{const f=parseInt(m.dataset.id);on(e.id,ki(e.id).filter(r=>r.id!==f)),o()})})}o(),i.openForm&&bs(e.id,o)}function Ia(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}function bs(e,i){const t=new Date().toISOString().slice(0,10),n=document.createElement("div");n.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${nn.map(o=>`<option value="${o.id}">${o.label}</option>`).join("")}
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
    </div>`,ue({title:"Opération de maintenance",body:n,doneLabel:"Enregistrer",onDone:()=>{const o=n.querySelector("#sjf-type").value,a=n.querySelector("#sjf-date").value||t,s=n.querySelector("#sjf-user").value.trim()||"Jean Dupont",l=localStorage.getItem("menuRole")==="admin-reseau"?"conseiller":"membre",p=n.querySelector("#sjf-texte").value.trim();on(e,[{id:Date.now(),type:o,date:a,user:s,role:l,texte:p},...ki(e)]),i()}}),setTimeout(()=>{var o;return(o=n.querySelector("#sjf-texte"))==null?void 0:o.focus()},350)}const Ei=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:Si},Symbol.toStringTag,{value:"Module"})),ft=100,ri=1,ci=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],qa={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},ja={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function zt(e,i){return(ja[e]||[]).includes(i)}function Pa(e){return qa[e]||e}function za(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const Dt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Da(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function fs(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"pothydr":return i<80?"#E2EAC7":i<150?"#A6C157":"#7D9537";case"teneur":return i<15?"#F7D2A1":i<30?"#ED9A2C":"#BC7210";case"temp_sol":return i<8?"#D9C6BF":i<18?"#795548":"#484646";case"temp_sche":return i<0?"#9DECDF":i<10?"#23B19B":"#177365";case"temp_hum":return i<0?"#D2DEFA":i<10?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function Fa(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function _a(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const n=i==="admin",o=he.filter(C=>C.id!==ft),a=Object.fromEntries(de.map(C=>[C.id,C])),s=Object.fromEntries(he.map(C=>[C.id,C]));let l=null,p=null;const d={};let c="carte",m="pluie",f="7 derniers jours",r="all";function u(C){const E=`${C}-${m}-${f}`;return E in d||(d[E]=Fa(m)),d[E]}function b(){if(i==="new"||i==="new-adherent")return[];if(n){if(r==="anomalies")return le.filter(A=>A.event&&(Array.isArray(A.event)?A.event.length>0:!0));if(r==="all")return le;if(r===String(ft)){const A=new Set(de.filter(T=>T.orgId===ft).map(T=>T.id));return le.filter(T=>T.parcelIds.some(M=>A.has(M)))}const P=new Set(de.filter(A=>String(A.orgId)===r).map(A=>A.id));return le.filter(A=>A.parcelIds.some(T=>P.has(T)))}const C=new Set(de.filter(P=>P.orgId===ri).map(P=>P.id)),E=le.filter(P=>P.parcelIds.some(A=>C.has(A))),H=le.filter(P=>!P.parcelIds.some(A=>C.has(A))&&ci.includes(P.model));return r==="mine"?E:r==="network"?H:[...E,...H]}function v(C){const E=C.parcelIds.length?a[C.parcelIds[0]]:null;if(!E)return null;const H=(C.id*7919%1e3-500)/1e6,P=(C.id*6271%1e3-500)/1e6;return{lat:E.lat+H,lng:E.lng+P,name:E.name}}function g(C){var H,P;const E=C.parcelIds.length?a[C.parcelIds[0]]:null;return(E?(H=s[E.orgId])==null?void 0:H.ville:null)||((P=s[C.orgId])==null?void 0:P.ville)||null}function h(){if(l){try{l.remove()}catch{}l=null,p=null}}function k(){h();const C=Dt.find(M=>M.id===m)||Dt[0],E=b();let H;const P=le.some(M=>M.event&&(Array.isArray(M.event)?M.event.length>0:!0));if(n)H=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${r==="all"?" selected":""}>Toutes les organisations</option>
            ${P?`<option value="anomalies"${r==="anomalies"?" selected":""}>⚠ Anomalies capteurs</option>`:""}
            <option value="${ft}"${r===String(ft)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
            ${o.map(M=>`<option value="${M.id}"${r===String(M.id)?" selected":""}>${M.name}</option>`).join("")}
          </select>
        </div>`;else{const M=he.find(S=>S.id===ri);H=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${r==="all"?" selected":""}>Tous les capteurs du réseau</option>
            <option value="mine"${r==="mine"?" selected":""}>${(M==null?void 0:M.name)||"Mon exploitation"} uniquement</option>
          </select>
        </div>`}const A=[...E].sort((M,S)=>{const x=zt(M.model,m),y=zt(S.model,m);return x&&!y?-1:!x&&y?1:x?u(S.id)-u(M.id):0}),T=A.length?`<div class="m-plain-list">${A.map(M=>{const S=ci.includes(M.model),x=zt(M.model,m),y=x?u(M.id):null,$=x?`<span class="m-sensor-val" style="color:${fs(m,y)}">${y} ${C.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>',z=M.event&&(Array.isArray(M.event)?M.event.length>0:!0);return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${M.id}">
              <div class="m-sensor-icon" style="position:relative;background:${S?"#0172A420":"#5b8dd920"};color:${S?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
                ${z?'<span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff"></span>':""}
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${Pa(M.model)} - ${M.model}</span>
                <span class="m-sensor-sub">${[g(M),za(M)].filter(Boolean).join(" - ")}</span>
                ${z?`<span style="font-size:11px;color:#ff3b30;font-weight:500"><i class="bi bi-exclamation-triangle-fill"></i> ${Array.isArray(M.event)?M.event[0]:M.event}</span>`:""}
              </div>
              ${$}
            </div>`}).join("")}</div>`:i==="new"||i==="new-adherent"?`<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Vous n'avez pas encore de capteur</p><button onclick="window.showMobileAddPage?.()" style="margin-top:8px;background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer">Ajouter un capteur</button></div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';t.innerHTML=`
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
            ${Dt.map(M=>`<option value="${M.id}"${M.id===m?" selected":""}>${M.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${C.aggs.map(M=>`<option${M===f?" selected":""}>${M}</option>`).join("")}
          </select>
        </div>
        ${H}
      </div>
      ${c==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${T}</div>`}`,I(),c==="carte"&&w(E,C)}function w(C,E){const H=window.L;H&&setTimeout(()=>{const P=t.querySelector("#sensor-map");if(!P)return;if(l=H.map(P,{zoomControl:!1,attributionControl:!1}),H.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l),!C.length&&(i==="new"||i==="new-adherent")){const T=he.find(x=>x.id===ri);T&&l.setView([T.lat,T.lng],13),l.invalidateSize();const M=P.parentElement;M.style.position="relative";const S=document.createElement("div");S.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",S.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-broadcast" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de capteur</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Ajoutez votre premier capteur pour commencer à collecter des données.</p>
            <button id="empty-add-sensor-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Ajouter un capteur</button>
          </div>`,M.appendChild(S),M.querySelector("#empty-add-sensor-btn").addEventListener("click",()=>{var x;return(x=window.showMobileAddPage)==null?void 0:x.call(window)});return}const A=[];C.forEach(T=>{var z;const M=v(T);if(!M)return;const S=zt(T.model,m),x=ci.includes(T.model),y=S?fs(m,u(T.id)):x?"#0172A4":"#5b8dd9",$=H.circleMarker([M.lat,M.lng],{radius:S?10:7,color:"#fff",weight:2,fillColor:y,fillOpacity:S?.95:.45}).addTo(l);if(S){$.bindTooltip(`${u(T.id)} ${E.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const L=D=>{if(!D)return;const q=Da(y);D.style.setProperty("background",y,"important"),D.style.setProperty("color",q,"important"),D.style.setProperty("border-color",q,"important"),D.style.setProperty("box-shadow","none","important")},j=(z=$.getTooltip())==null?void 0:z.getElement();j&&L(j),$.on("tooltipopen",D=>L(D.tooltip.getElement()))}$.on("click",()=>Si(T,"donnees",i)),T.event&&(!Array.isArray(T.event)||T.event.length>0)&&H.marker([M.lat,M.lng],{icon:H.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(l),A.push([M.lat,M.lng])}),A.length&&(p=A,l.fitBounds(A,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",C=>{C.detail==="capteurs"&&(k(),c==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),p!=null&&p.length&&l.fitBounds(p,{padding:[32,32]})},50))});function I(){var C,E,H;t.querySelectorAll(".m-view-btn").forEach(P=>P.addEventListener("click",()=>{c=P.dataset.view,k()})),(C=t.querySelector("#metric-sel"))==null||C.addEventListener("change",P=>{var A;m=P.target.value,f=((A=Dt.find(T=>T.id===m))==null?void 0:A.defaultAgg)||"",k()}),(E=t.querySelector("#agg-sel"))==null||E.addEventListener("change",P=>{f=P.target.value,k()}),(H=t.querySelector("#org-filter"))==null||H.addEventListener("change",P=>{r=P.target.value,k()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(P=>{P.addEventListener("click",()=>{const A=le.find(T=>T.id===+P.dataset.sensorId);A&&Si(A,"donnees",i)})})}k(),window.addEventListener("weenat-sensor-renamed",()=>{c==="liste"&&k()})}const Ha=["Essentiel","Plus","Expert"],Ba=["Administrateur","Agent","Lecteur"],hs=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function Ra(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function Oa(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function gs({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function Ft(e){if(!e)return"—";const[i,t,n]=e.split("-");return`${n}/${t}/${i}`}function ys(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let n=11;n>=0;n--){const o=new Date(i.getFullYear(),i.getMonth()-n,1),a=o.getFullYear(),s=String(o.getMonth()+1).padStart(2,"0"),l=n>0?n===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${a}-${s}`,dateEmission:`${a}-${s}-01`,montant:o.getMonth()===11?1980:t[n%t.length],statut:l})}return e.reverse()}function Na(e,i){var S;if(!e)return{};const t=i==="admin",n=i==="new-member-admin"||i==="new-member-agent"||i==="new-member-reader",o=i!=="new-member-reader",a=t?[{id:"100",name:"Breiz'Agri Conseil"},{id:"42",name:"Exploitation Dupont"}]:n?[]:[{id:"1",name:"Ferme du Bocage"},{id:"dutilleul",name:"Exploitation Dutilleul"}];let s=((S=a[0])==null?void 0:S.id)??null;const l=he.find(x=>x.id===(t?Xt:Pi));if(!l)return{};const d=(t?Qt.filter(x=>{var y;return!((y=x.orgIds)!=null&&y.length)||x.orgIds.includes(Xt)}):Qt.filter(x=>{var y;return(y=x.orgIds)==null?void 0:y.includes(Pi)})).filter(x=>x.statut!=="inactif").map(x=>({...x})),c=he.filter(x=>x.id!==Xt&&x.statut!=="inactif").length,m=Oa(l.adresse||""),f={rue:"",cp:"",ville:""},r={name:l.name,siret:l.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:m,adresseLivrai:f,copieFactures:l.copieFactures||"",pays:"France",markerLat:l.lat||48.117,markerLng:l.lng||-1.678,plan:l.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":l.codeAdherent||"CTR-2022-00418",dateAdhesion:l.dateAdhesion||"2022-03-15",licencesMembres:t?Qt.length:3,licencesAdherents:t?c:null,licencesIntegrations:t?27:2}};let u=null,b=null;function v(){if(!b)return;const x=e.querySelector(`#${b}`);if(!x)return;if(u){try{u.remove()}catch{}u=null}const y=window.L;y&&(u=y.map(x,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),y.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(u),u.setView([r.markerLat,r.markerLng],14),y.marker([r.markerLat,r.markerLng],{draggable:!1}).addTo(u),setTimeout(()=>u==null?void 0:u.invalidateSize(),50))}function g(){if(b=`expl-map-${Math.random().toString(36).slice(2,8)}`,u){try{u.remove()}catch{}u=null}const x=gs(r.adresseFactu)||"—",y=gs(r.adresseLivrai),$=t?ys():[],z=$.slice(0,3),L=$.length>3,j=d.slice(0,3),D=d.length>3;function q(F,V){const re=F.statut==="payée"?"#30d158":"#ff9f0a",ie=F.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${V?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${F.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${F.numero}</span>
            <span class="m-list-row-sub">${Ft(F.dateEmission)} · ${F.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${re};flex-shrink:0;margin-right:4px">${ie}</span>
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
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${x}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${y||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="pays">
          <span class="m-list-row-label">Pays</span>
          <span class="m-list-row-value">${r.pays}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="siret">
          <span class="m-list-row-label">SIRET</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:12px">${r.siret||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="copie-factures" style="align-items:flex-start;padding-top:12px;padding-bottom:12px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Envoyer une copie des factures</span>
            <div style="font-size:12px;color:#8e8e93;margin-top:4px;line-height:1.4">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</div>
            <div style="font-size:13px;color:${r.copieFactures?"#1c1c1e":"#8e8e93"};margin-top:6px">${r.copieFactures||"Aucune adresse renseignée"}</div>
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation</div>
      <div id="${b}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${r.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Ft(r.contrat.dateAdhesion)}</span>
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
        ${z.map((F,V)=>q(F,!L&&V===z.length-1)).join("")}
        ${L?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${$.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${d.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${d.length?[...j.map((F,V)=>`
            <div class="m-list-row${!D&&V===j.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${V}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${F.prenom} ${F.nom}</span>
                <span class="m-list-row-sub">${F.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),D?`
            <div class="m-list-row m-list-row--last m-tappable" data-action="voir-membres">
              <span class="m-list-row-label" style="color:#007aff">Voir tous les membres</span>
              <span class="m-list-row-value" style="color:#8e8e93">${d.length}</span>
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
          ${hs.slice(0,5).map((F,V)=>`
            <div class="m-list-row${V===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${Ra(F.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${F.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${F.distance} km · ${F.capteurs} capteurs · ${F.parcelles} parcelles</div>
                <button class="m-join-net-btn" data-net-idx="${V}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
              </div>
            </div>`).join("")}
        </div>
      </div>
      `}
      ${n?`
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
            <span class="m-list-row-value">${Ft("2026-06-08")}</span>
          </div>
        </div>
        <div style="padding:8px 20px 0">
          <button id="btn-use-default-exploit" class="m-btn m-btn--outline" style="margin-bottom:20px">Utiliser cette exploitation</button>
        </div>
      </div>
      `:""}
      <div style="height:32px"></div>`,h()}function h(){var x,y,$,z;(x=e.querySelector("#org-selector"))==null||x.addEventListener("change",L=>{s=L.target.value;const j=a.find(D=>D.id===s);j&&(r.name=j.name,g())}),e.querySelectorAll(".m-list-row[data-action]").forEach(L=>{L.addEventListener("click",()=>{if(o)switch(L.dataset.action){case"name":k("Nom de l'exploitation",r.name,j=>{r.name=j,g()});break;case"siret":k("SIRET",r.siret,j=>{r.siret=j,g()});break;case"metier":C();break;case"adresse-factu":I("Adresse de facturation",r.adresseFactu,j=>{r.adresseFactu=j,g()});break;case"adresse-livrai":I("Adresse de livraison",r.adresseLivrai,j=>{r.adresseLivrai=j,g()});break;case"pays":k("Pays",r.pays,j=>{r.pays=j,g()});break;case"copie-factures":w(r.copieFactures,j=>{r.copieFactures=j,l.copieFactures=j,g()});break;case"plan":E("Abonnement",Ha,r.plan,j=>{r.plan=j,g()});break;case"facture":U(`PDF ${L.dataset.factureId} téléchargé`);break;case"voir-factures":A();break;case"voir-membres":P();break}})}),e.querySelectorAll("[data-member-idx]").forEach(L=>{L.addEventListener("click",()=>H(+L.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(L=>{L.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach(D=>{const q=D===L;D.style.background=q?"#fff":"transparent",D.style.color=q?"#000":"#8e8e93"});const j=L.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=j==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=j==="independante"?"":"none"})}),(y=e.querySelector("#btn-ajouter-membre"))==null||y.addEventListener("click",T),($=e.querySelector("#btn-quitter-reseau"))==null||$.addEventListener("click",()=>{const L=document.createElement("div");L.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,ue({title:"Quitter le réseau ?",body:L,doneLabel:"Confirmer",onDone:()=>U("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(L=>{L.addEventListener("click",()=>{const j=hs[+L.dataset.netIdx];U(`Demande envoyée à ${j.name}`)})}),e.querySelectorAll(".m-exploit-tab").forEach(L=>{L.addEventListener("click",()=>{e.querySelectorAll(".m-exploit-tab").forEach(D=>{const q=D===L;D.style.background=q?"#fff":"transparent",D.style.color=q?"#000":"#8e8e93"});const j=e.querySelector("#default-exploit-panel");j&&(j.style.display=L.dataset.exploitTab==="membre"?"":"none")})}),(z=e.querySelector("#btn-use-default-exploit"))==null||z.addEventListener("click",()=>{U("Exploitation Jourdain sélectionnée")})}function k(x,y,$){const z=document.createElement("div");z.innerHTML=`<input class="m-sheet-input" type="text" value="${(y||"").replace(/"/g,"&quot;")}" placeholder="${x}">`;const L=z.querySelector("input");ue({title:x,body:z,doneLabel:"Enregistrer",onDone:()=>{const j=L.value.trim();j&&($(j),U("Enregistré"))}}),setTimeout(()=>L.focus(),300)}function w(x,y){const $=document.createElement("div");$.innerHTML=`
      <div style="font-size:13px;color:#636366;line-height:1.4;margin-bottom:10px">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</div>
      <input class="m-sheet-input" type="email" placeholder="Adresse email du destinataire" value="${(x||"").replace(/"/g,"&quot;")}">`;const z=$.querySelector("input");ue({title:"Copie des factures",body:$,doneLabel:"Enregistrer",onDone:()=>{y(z.value.trim()),U("Enregistré")}}),setTimeout(()=>z.focus(),300)}function I(x,y,$){const z=document.createElement("div");z.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(y.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${y.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(y.ville||"").replace(/"/g,"&quot;")}">`,ue({title:x,body:z,doneLabel:"Enregistrer",onDone:()=>{$({rue:z.querySelector("#f-rue").value.trim(),cp:z.querySelector("#f-cp").value.trim(),ville:z.querySelector("#f-ville").value.trim()}),U("Enregistré")}}),setTimeout(()=>z.querySelector("#f-rue").focus(),300)}function C(){const x=new Set(r.metiers),y=document.createElement("div"),$=()=>{y.innerHTML=$s.map(z=>`
        <div class="m-sheet-option${x.has(z)?" m-sheet-option--active":""}" data-m="${z}" style="justify-content:space-between">
          <span>${z}</span>
          ${x.has(z)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),y.querySelectorAll("[data-m]").forEach(z=>{z.addEventListener("click",()=>{const L=z.dataset.m;x.has(L)?x.delete(L):x.add(L),$()})})};$(),ue({title:"Métiers",body:y,doneLabel:"Valider",onDone:()=>{r.metiers=[...x],g()}})}function E(x,y,$,z){const L=document.createElement("div");L.innerHTML=y.map((D,q)=>`
      <div class="m-sheet-option${D===$?" m-sheet-option--active":""}" data-i="${q}">
        <span>${D}</span>${D===$?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const j=ue({title:x,body:L,doneLabel:"Fermer",onDone:()=>{}});L.querySelectorAll(".m-sheet-option").forEach(D=>{D.addEventListener("click",()=>{z(y[+D.dataset.i]),j.classList.remove("m-sheet-overlay--show"),setTimeout(()=>j.remove(),280),U("Enregistré")})})}function H(x,y){const $=d[x];if(!$)return;const z=document.createElement("div");z.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${$.role}</span></div>
        ${$.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${$.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${$.prenom} ${$.nom}</a>
      </div>`;const L=ue({title:`${$.prenom} ${$.nom}`,body:z,doneLabel:"Fermer",onDone:()=>{}});z.querySelector("#mem-delete").addEventListener("click",()=>{d.splice(x,1),L.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{L.remove(),g(),U("Membre retiré"),y==null||y()},280)})}function P(){let x="",$=20;function z(){if(!x)return d;const q=x.toLowerCase();return d.filter(F=>`${F.prenom} ${F.nom}`.toLowerCase().includes(q)||(F.email||"").toLowerCase().includes(q)||(F.role||"").toLowerCase().includes(q))}const L=ge(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),j=L.querySelector("#mbr-list-content");function D(){var re;const q=z(),F=q.slice(0,$),V=q.length-F.length;j.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${q.length} membre${q.length!==1?"s":""}${x?" trouvé"+(q.length!==1?"s":""):" actif"+(q.length!==1?"s":"")}</div>
        <div class="m-list">
          ${F.length?F.map((ie,se)=>`<div class="m-list-row${se===F.length-1&&V===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${d.indexOf(ie)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${ie.prenom} ${ie.nom}</span>
                <span class="m-list-row-sub">${ie.role}${ie.email?" · "+ie.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${V>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${V} de plus</span>
            </div>`:""}
          ${q.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,j.querySelectorAll("[data-mbr-idx]").forEach(ie=>{ie.addEventListener("click",()=>H(+ie.dataset.mbrIdx,D))}),(re=j.querySelector("#mbr-load-more"))==null||re.addEventListener("click",()=>{$+=20,D()})}L.querySelector(".m-detail-back").addEventListener("click",ve),L.querySelector("#mbr-invite-btn").addEventListener("click",T),L.querySelector("#mbr-search").addEventListener("input",q=>{x=q.target.value,$=20,D()}),D()}function A(){const x=ys();let y="";function $(){if(!y)return x;const D=y.toLowerCase();return x.filter(q=>q.numero.toLowerCase().includes(D)||q.statut.toLowerCase().includes(D)||String(q.montant).includes(D))}const z=ge(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),L=z.querySelector("#fac-list-content");function j(){const D=$();L.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${D.length} facture${D.length!==1?"s":""}</div>
        <div class="m-list">
          ${D.length?D.map((q,F)=>{const V=q.statut==="payée"?"#30d158":"#ff9f0a",re=q.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${F===D.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${q.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${q.numero}</span>
                <span class="m-list-row-sub">${Ft(q.dateEmission)} · ${q.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${V};flex-shrink:0;margin-right:4px">${re}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,L.querySelectorAll("[data-fac-id]").forEach(q=>{q.addEventListener("click",()=>U(`PDF ${q.dataset.facId} téléchargé`))})}z.querySelector(".m-detail-back").addEventListener("click",ve),z.querySelector("#fac-search").addEventListener("input",D=>{y=D.target.value,j()}),j()}function T(){const x=document.createElement("div");x.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${Ba.map(y=>`<option>${y}</option>`).join("")}
      </select>`,ue({title:"Ajouter un membre",body:x,doneLabel:"Inviter",onDone:()=>{x.querySelector("#inv-email").value.trim()&&U("Invitation envoyée")}}),setTimeout(()=>x.querySelector("#inv-email").focus(),300)}g();function M(){requestAnimationFrame(()=>setTimeout(v,100))}return{onAdd:null,refresh:M}}const Va=100,Ja=["Essentiel","Plus","Expert"],Wa={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function di(e){return Wa[e]||{label:e||"—",color:"#8e8e93"}}function Ga(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=he.filter(r=>r.id!==Va&&r.statut!=="inactif").map(r=>({...r})),n={...Ne,siege:{...Ne.siege},antennes:Ne.antennes.map(r=>({...r}))},o={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function a(r,u,b,v){return r.slice(u,b).map((g,h)=>{const k=u+h,w=di(g.statut),I=g.statut==="demande en attente";return`
        <div class="m-list-row${k===v?" m-list-row--last":""} m-tappable" data-org-idx="${k}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${g.proprietaire||g.name}</span>
            <span class="m-list-row-sub">${g.name} · ${g.plan||"—"}</span>
          </div>
          ${I?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${k}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${k}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${w.color};flex-shrink:0;margin-right:4px">${w.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function s(){let r="",b=20;function v(){if(!r)return t;const w=r.toLowerCase();return t.filter(I=>(I.proprietaire||I.name||"").toLowerCase().includes(w)||(I.name||"").toLowerCase().includes(w)||(I.email||"").toLowerCase().includes(w)||(I.codeAdherent||"").toLowerCase().includes(w))}const g=ge(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),h=g.querySelector("#adh-list-content");function k(){var H;const w=v(),I=w.slice(0,b),C=w.length-I.length,E=w.filter(P=>P.statut==="actif"||P.statut==="actif en essai").length;h.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${r?w.length+" résultat"+(w.length!==1?"s":""):E+" actif"+(E!==1?"s":"")+" · "+w.length+" total"}</div>
        <div class="m-list">
          ${I.length?I.map((P,A)=>{const T=t.indexOf(P),M=di(P.statut),S=P.statut==="demande en attente";return`
              <div class="m-list-row${A===I.length-1&&C===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${T}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${P.proprietaire||P.name}</span>
                  <span class="m-list-row-sub">${P.name} · ${P.plan||"—"}</span>
                </div>
                ${S?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${T}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${T}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${M.color};flex-shrink:0;margin-right:4px">${M.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${C>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${C} de plus</span>
            </div>`:""}
        </div>`,h.querySelectorAll("[data-lp-org-idx]").forEach(P=>{P.addEventListener("click",A=>{A.target.closest("[data-adh-action]")||m(t[+P.dataset.lpOrgIdx],+P.dataset.lpOrgIdx,k)})}),h.querySelectorAll("[data-adh-action]").forEach(P=>{P.addEventListener("click",A=>{A.stopPropagation();const T=+P.dataset.lpAdhIdx,M=P.dataset.adhAction,S=t[T];S&&(M==="valider"?(S.statut="actif",l(),k(),U(`${S.proprietaire||S.name} validé`)):(t.splice(T,1),l(),k(),U("Demande rejetée")))})}),(H=h.querySelector("#adh-load-more"))==null||H.addEventListener("click",()=>{b+=20,k()})}g.querySelector(".m-detail-back").addEventListener("click",ve),g.querySelector("#adh-invite-btn").addEventListener("click",f),g.querySelector("#adh-search").addEventListener("input",w=>{r=w.target.value,b=20,k()}),k()}function l(){var h;const r=t.filter(k=>k.statut!=="inactif"),u=`${n.siege.adresse}, ${n.siege.codePostal} ${n.siege.ville}`;e.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Réseau</div>
      <div class="m-list">
        <div class="m-list-row" data-action="net-nom">
          <span class="m-list-row-label">Nom du réseau</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:13px">${n.nom}</span>
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
          <span class="m-list-row-value" style="color:#8e8e93;flex-shrink:0">${n.antennes.length} antenne${n.antennes.length>1?"s":""}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-footer">Description, logo et contacts modifiables sur la version web</div>

      <div class="m-list-section-header">Partage entre les adhérents</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs météo</span>
          <label class="m-toggle"><input type="checkbox" id="tog-meteo"${o.partageMeteo?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs irrigation</span>
          <label class="m-toggle"><input type="checkbox" id="tog-sol"${o.partageSol?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Stations météo virtuelles</span>
          <label class="m-toggle"><input type="checkbox" id="tog-irrigation"${o.partageIrrigation?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
      </div>

      <div class="m-list-section-header">Adhérents — ${r.length} actifs</div>
      <div class="m-list">
        ${a(t,0,Math.min(5,t.length),t.length>5?-1:t.length-1)}
        ${t.length>5?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${t.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(k=>{k.addEventListener("click",w=>{w.target.closest("[data-adh-action]")||m(t[+k.dataset.orgIdx],+k.dataset.orgIdx)})}),(h=e.querySelector('[data-action="voir-adherents"]'))==null||h.addEventListener("click",s),e.querySelectorAll("[data-adh-action]").forEach(k=>{k.addEventListener("click",w=>{w.stopPropagation();const I=+k.dataset.adhIdx,C=k.dataset.adhAction,E=t[I];E&&(C==="valider"?(E.statut="actif",l(),U(`${E.proprietaire||E.name} validé`)):(t.splice(I,1),l(),U("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(k=>{k.addEventListener("click",()=>{switch(k.dataset.action){case"net-nom":p("Nom du réseau",n.nom,w=>{n.nom=w,l()});break;case"net-siege":d();break;case"net-antennes":c();break}})});const b=e.querySelector("#tog-meteo"),v=e.querySelector("#tog-sol"),g=e.querySelector("#tog-irrigation");b==null||b.addEventListener("change",()=>{o.partageMeteo=b.checked,U("Préférence enregistrée")}),v==null||v.addEventListener("change",()=>{o.partageSol=v.checked,U("Préférence enregistrée")}),g==null||g.addEventListener("change",()=>{o.partageIrrigation=g.checked,U("Préférence enregistrée")})}function p(r,u,b){const v=document.createElement("div");v.innerHTML=`<input class="m-sheet-input" type="text" value="${(u||"").replace(/"/g,"&quot;")}" placeholder="${r}">`;const g=v.querySelector("input");ue({title:r,body:v,doneLabel:"Enregistrer",onDone:()=>{const h=g.value.trim();h&&(b(h),U("Enregistré"))}}),setTimeout(()=>g.focus(),300)}function d(){const r=document.createElement("div");r.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${n.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${n.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${n.siege.ville.replace(/"/g,"&quot;")}">`,ue({title:"Adresse du siège",body:r,doneLabel:"Enregistrer",onDone:()=>{n.siege.adresse=r.querySelector("#s-rue").value.trim(),n.siege.codePostal=r.querySelector("#s-cp").value.trim(),n.siege.ville=r.querySelector("#s-ville").value.trim(),l(),U("Enregistré")}}),setTimeout(()=>r.querySelector("#s-rue").focus(),300)}function c(){const r=document.createElement("div");(()=>{r.innerHTML=n.antennes.map((b,v)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${b.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${b.adresse}, ${b.codePostal} ${b.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${b.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),ue({title:"Antennes",body:r,doneLabel:"Fermer",onDone:()=>{}})}function m(r,u,b){var I,C;const v=di(r.statut),g=r.statut==="invitation en attente",h=`https://app.weenat.com/invitation?code=${r.codeAdherent||"ADZ-XXX"}`,k=document.createElement("div");k.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${r.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${r.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${r.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${r.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${de.filter(E=>E.orgId===r.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const E=new Set(de.filter(H=>H.orgId===r.id).map(H=>H.id));return le.filter(H=>E.has(H.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${v.color};font-weight:600">${v.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${r.dateAdhesion?r.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${g?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const w=ue({title:r.name,body:k,doneLabel:"Fermer",onDone:()=>{}});(I=k.querySelector("#lnk-copy"))==null||I.addEventListener("click",()=>{var E;(E=navigator.clipboard)==null||E.writeText(h).catch(()=>{}),U("Lien copié !")}),(C=k.querySelector("#lnk-cancel"))==null||C.addEventListener("click",()=>{r.statut="inactif",w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{w.remove(),l(),b==null||b(),U("Invitation annulée")},280)}),k.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(u,1),w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{w.remove(),l(),b==null||b(),U("Adhérent supprimé")},280)})}function f(){const r=document.createElement("div");r.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${Ja.map(u=>`<option>${u}</option>`).join("")}
      </select>`,ue({title:"Inviter un adhérent",body:r,doneLabel:"Envoyer",onDone:()=>{const u=r.querySelector("#adh-email").value.trim(),b=r.querySelector("#adh-code").value.trim();if(!u||!b){U("Email et code requis");return}t.push({id:Date.now(),name:u,proprietaire:u,email:u,codeAdherent:b,plan:r.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),l(),U("Invitation envoyée")}}),setTimeout(()=>r.querySelector("#adh-email").focus(),300)}return l(),{onAdd:f}}xs(de);const Ua=new URLSearchParams(window.location.search),ui=Ua.get("role"),an=new Set(["new","new-adherent","new-member-admin","new-member-agent","new-member-reader"]),Ie=ui==="adherent"?"adherent":an.has(ui)?ui:"admin";function ln(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}ln();setInterval(ln,1e4);const Ye=["parcelles","capteurs","dashboard","alertes","parametres"];let Wt="parcelles";function Xe(e){var i,t;!Ye.includes(e)||e===Wt||(Wt=e,document.querySelectorAll(".m-screen").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function Ya(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;zi()>0&&mn()?Ya(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Xe(t)}):(zi()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Xe(t))});let Be=null,Et=null;const rn=50,Mt=document.getElementById("screen-stack");Mt.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){Be=null;return}Be=e.clientX,Et=e.clientY});Mt.addEventListener("mouseup",e=>{if(Be===null)return;const i=e.clientX-Be,t=e.clientY-Et;if(Math.abs(i)>rn&&Math.abs(i)>Math.abs(t)){const n=Ye.indexOf(Wt);i<0&&n<Ye.length-1&&Xe(Ye[n+1]),i>0&&n>0&&Xe(Ye[n-1])}Be=null,Et=null});Mt.addEventListener("mouseleave",()=>{Be=null});Mt.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){Be=null;return}Be=e.touches[0].clientX,Et=e.touches[0].clientY},{passive:!0});Mt.addEventListener("touchend",e=>{if(Be===null)return;const i=e.changedTouches[0].clientX-Be,t=e.changedTouches[0].clientY-Et;if(Math.abs(i)>rn&&Math.abs(i)>Math.abs(t)){const n=Ye.indexOf(Wt);i<0&&n<Ye.length-1&&Xe(Ye[n+1]),i>0&&n>0&&Xe(Ye[n-1])}Be=null},{passive:!0});const Za=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...Ie==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],Kt={};function cn(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=Kt[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var n;return(n=window.showMobileAddPage)==null?void 0:n.call(window)})}function Ka(){var i;const e=document.getElementById("param-segment");e&&(Ie==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),Za.forEach((t,n)=>{const o=document.createElement("button");o.className="m-segment-btn"+(n===0?" active":""),o.textContent=t.label,o.dataset.target=t.id,o.addEventListener("click",()=>{var a,s,l;e.querySelectorAll(".m-segment-btn").forEach(p=>p.classList.remove("active")),o.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(p=>p.classList.remove("active")),(a=document.getElementById(t.id))==null||a.classList.add("active"),cn(t.id),(l=(s=Kt[t.id])==null?void 0:s.refresh)==null||l.call(s)}),e.appendChild(o)}))}Ka();an.has(Ie)&&Rn(Ie,()=>{(Ie==="new"||Ie==="new-adherent")&&Xe("dashboard")});To(document.getElementById("screen-dashboard"),Ie);va(document.getElementById("screen-parcelles"),Ie);_a(document.getElementById("screen-capteurs"),Ie);Cn(document.getElementById("screen-alertes"),Ie);wn(document.getElementById("param-compte"),Ie);Kt["param-exploitation"]=Na(document.getElementById("param-exploitation"),Ie);Kt["param-reseau"]=Ga(document.getElementById("param-reseau"),Ie);function Xa(){var n;const e=Ie==="admin",i=document.getElementById("phone-screen");(n=document.getElementById("m-add-modal"))==null||n.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#f2f2f7;flex-shrink:0;border-bottom:.5px solid rgba(0,0,0,.1)">
      <span style="font-size:17px;font-weight:700">Ajouter</span>
      <button id="m-add-close" style="width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.07);border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <div style="overflow-y:auto;flex:1;padding:12px 16px">
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon exploitation</div>
        ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(o=>`
          <button class="m-add-row" data-action="${o.action}" style="display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08);text-align:left">
            <i class="bi ${o.icon}" style="color:#0172A4;width:22px;text-align:center;flex-shrink:0"></i>
            <span>${o.label}</span>
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(o=>{o.addEventListener("click",()=>{var a;t.remove(),(o.dataset.action==="note"||o.dataset.action==="traitement")&&((a=window.openJournalModal)==null||a.call(window,o.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=Xa;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});cn("param-compte");export{ve as a,ge as p,ue as s};
