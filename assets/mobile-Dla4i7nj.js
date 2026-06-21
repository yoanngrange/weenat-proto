const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-C2-G6jG3.js","assets/sensors-CRadjF8G.js","assets/irrigations-C22Dtsoo.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-DhtWL7s_.js","assets/store-c0FlIf2T.js","assets/orgs-DnFmvGlp.js","assets/network-YzWdS0n_.js","assets/constants-CJpDUNiw.js","assets/members-Cr98hVG_.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as le}from"./plots-DhtWL7s_.js";import{d as Oe,b as Ts,c as He,l as En}from"./store-c0FlIf2T.js";import{s as ce}from"./sensors-CRadjF8G.js";import{o as $e}from"./orgs-DnFmvGlp.js";import{n as We}from"./network-YzWdS0n_.js";import{I as me,s as nt,g as Ln}from"./irrigations-C22Dtsoo.js";import{I as Yt,S as qi,M as Is,A as bi,a as xt,E as An,b as ti}from"./constants-CJpDUNiw.js";import{m as ii}from"./members-Cr98hVG_.js";const Cn="modulepreload",Mn=function(e){return"/weenat-proto/"+e},Hi={},ge=function(i,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(t.map(m=>{if(m=Mn(m),m in Hi)return;Hi[m]=!0;const c=m.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${p}`))return;const v=document.createElement("link");if(v.rel=c?"stylesheet":Cn,c||(v.as="script"),v.crossOrigin="",v.href=m,l&&v.setAttribute("nonce",l),document.head.appendChild(v),c)return new Promise((u,d)=>{v.addEventListener("load",u),v.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return a.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return i().catch(o)})},lt=[];function we(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),lt.push(t),t}function be(){const e=lt.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function Ri(){return lt.length}function Tn(){return lt.some(e=>e.dataset.dirty==="true")}function js(){lt.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{lt.forEach(e=>e.remove()),lt.length=0});const In=[{key:"orgs",label:"Organisations",icon:"bi-building",desc:"Ajouts de membres, changements d'organisation, nouvelles exploitations"},{key:"capteurs",label:"Capteurs",icon:"bi-broadcast",desc:"Anomalies, changements d'état, mise à jour firmware"},{key:"alertes",label:"Alertes",icon:"bi-bell",desc:"Déclenchements de seuils et alertes météo configurées"}],Oi=[{key:"email",label:"Email",icon:"bi-envelope"},{key:"sms",label:"SMS",icon:"bi-phone"},{key:"push",label:"Push",icon:"bi-bell"}],jn=["Mon réseau","Mon organisation","Mon secteur"],si={orgs:"Mon organisation",capteurs:"Mon réseau",alertes:"Mon secteur"},Ni={orgs:{email:!0,sms:!1,push:!0},capteurs:{email:!0,sms:!1,push:!0},alertes:{email:!0,sms:!0,push:!0}};function qn(e){let i=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif"))||JSON.parse(JSON.stringify(Ni))}catch{return JSON.parse(JSON.stringify(Ni))}})(),t=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif-peri"))||JSON.parse(JSON.stringify(si))}catch{return JSON.parse(JSON.stringify(si))}})();function n(){localStorage.setItem("weenat-mobile-notif",JSON.stringify(i)),localStorage.setItem("weenat-mobile-notif-peri",JSON.stringify(t)),e("Préférences enregistrées")}function a(s){const l=i[s.key]||{},m=t[s.key]||si[s.key];return`
      <div class="m-list-section-header" style="display:flex;align-items:center;gap:6px">
        <i class="bi ${s.icon}" style="font-size:13px"></i> ${s.label}
      </div>
      <p style="font-size:12px;color:#8e8e93;margin:0 16px 8px;line-height:1.4">${s.desc}</p>
      <div class="m-list">
        ${Oi.map((c,p)=>{const v=p===Oi.length-1&&!0;return`<div class="m-list-row">
            <i class="bi ${c.icon}" style="color:#636366;font-size:14px;flex-shrink:0;width:20px;text-align:center"></i>
            <span class="m-list-row-label">${c.label}</span>
            <label class="m-toggle">
              <input type="checkbox" class="notif-toggle" data-cat="${s.key}" data-ch="${c.key}" ${l[c.key]?"checked":""}>
              <span class="m-toggle-track"></span>
            </label>
          </div>`}).join("")}
        <div class="m-list-row m-list-row--last" style="align-items:center;gap:8px">
          <i class="bi bi-geo-alt" style="color:#636366;font-size:14px;flex-shrink:0;width:20px;text-align:center"></i>
          <span class="m-list-row-label">Périmètre</span>
          <select class="notif-peri-sel" data-cat="${s.key}" style="border:none;background:transparent;font-size:14px;color:#636366;font-family:inherit;text-align:right;flex:1;min-width:0;outline:none;cursor:pointer">
            ${jn.map(c=>`<option value="${c}"${c===m?" selected":""}>${c}</option>`).join("")}
          </select>
        </div>
      </div>`}const o=we(`
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
      ${In.map(s=>a(s)).join("")}
      <div class="m-list-section-footer" style="margin-top:8px">
        Les alertes de seuil se configurent depuis la section <strong>Alertes</strong> de l'application.
      </div>
    </div>
  `);o.querySelector("#notif-back").addEventListener("click",be),o.querySelectorAll(".notif-toggle").forEach(s=>{s.addEventListener("change",()=>{const l=s.dataset.cat,m=s.dataset.ch;i[l][m]=s.checked,n()})}),o.querySelectorAll(".notif-peri-sel").forEach(s=>{s.addEventListener("change",()=>{t[s.dataset.cat]=s.value,n()})})}const Vi={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Pn=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Ji=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let Qe={};function Ne(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function rt({title:e,body:i,onDone:t,doneLabel:n="OK"}){var l;const a=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${n}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),a.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),s()}),o.addEventListener("click",m=>{m.target===o&&s()}),o}function Wi(e,i,t){const n=document.createElement("div");n.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const a=n.querySelector("input");rt({title:e,body:n,doneLabel:"Enregistrer",onDone:()=>{t(a.value.trim()),Ne("Enregistré")}}),setTimeout(()=>a.focus(),300)}function Ui(e,i,t,n){const a=document.createElement("div");a.innerHTML=i.map((s,l)=>`
    <div class="m-sheet-option${s===t?" m-sheet-option--active":""}" data-i="${l}">
      <span>${s}</span>
      ${s===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const o=rt({title:e,body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{n(i[+s.dataset.i]),o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280),Ne("Enregistré")})})}function Dn(e,i){const t=document.createElement("div"),n=()=>{var a;t.innerHTML=e.map((o,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${o.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${o.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(o=>{o.addEventListener("input",()=>{e[+o.dataset.i][o.dataset.f]=o.value})}),t.querySelectorAll(".m-sheet-remove").forEach(o=>{o.addEventListener("click",()=>{e.splice(+o.dataset.i,1),n()})}),(a=t.querySelector(".m-sheet-add-phone"))==null||a.addEventListener("click",()=>{e.push({label:"",numero:""}),n()})};n(),rt({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),Ne("Enregistré")}})}function zn(e,i,t){const n=document.createElement("div");n.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,n.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var o;(o=navigator.clipboard)==null||o.writeText(e.value).catch(()=>{}),Ne("Clé copiée !")});const a=rt({title:"Clé API",body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const o=i.findIndex(s=>s.id===e.id);o!==-1&&i.splice(o,1),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{a.remove(),t()},280),Ne("Clé supprimée")})}function _n(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function Fn(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");rt({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const n=t.value.trim();if(!n){Ne("Entrez un nom");return}const a={id:Date.now(),name:n,created:new Date().toLocaleDateString("fr-FR"),value:_n()};e(a),Ne("Clé générée")}}),setTimeout(()=>t.focus(),300)}function Bn(e,i){Qe={profile:JSON.parse(JSON.stringify(Vi[i]||Vi.admin)),langue:"Français",unites:Ji[0]};const n=localStorage.getItem("mobile_avatarUrl")||null;function a(){const s=Qe.profile,l=n?`<img src="${n}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,m=s.apiKeys.map(p=>`
      <div class="m-list-row" data-key-id="${p.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${p.name}</span>
          <span class="m-list-row-sub">créée le ${p.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),c=s.phones.map((p,v)=>`
      <div class="m-list-row${v===s.phones.length-1&&s.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${p.label||"Numéro "+(v+1)}</span>
        <span class="m-list-row-value">${p.numero}</span>
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
          <span class="m-list-row-value" id="val-langue">${Qe.langue}</span>
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
        ${m}
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
    `,o()}function o(){var l;const s=Qe.profile;(l=e.querySelector("#m-avatar-upload"))==null||l.addEventListener("change",m=>{const c=m.target.files[0];if(!c)return;const p=new FileReader;p.onload=v=>{localStorage.setItem("mobile_avatarUrl",v.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${v.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},p.readAsDataURL(c)}),e.querySelectorAll(".m-list-row[data-action]").forEach(m=>{m.addEventListener("click",()=>{switch(m.dataset.action){case"prenom":Wi("Prénom",s.prenom,c=>{s.prenom=c,a()});break;case"nom":Wi("Nom",s.nom,c=>{s.nom=c,a()});break;case"email":rt({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>Ne("Fonctionnalité à venir")});break;case"phones":Dn(s.phones,c=>{s.phones=c,a()});break;case"mdp":{const c=document.createElement("div");c.innerHTML=`
              <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(0,122,255,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
                  <i class="bi bi-envelope-at" style="font-size:26px;color:#007aff"></i>
                </div>
                <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 20px">Un e-mail de réinitialisation sera envoyé à <strong>${s.email}</strong>. Vous pourrez ensuite définir un nouveau mot de passe.</p>
                <button id="send-reset-btn" style="background:#007aff;color:#fff;border:none;border-radius:12px;padding:14px 0;font-size:16px;font-weight:600;cursor:pointer;width:100%">Envoyer l'e-mail</button>
              </div>`;const p=rt({title:"Réinitialiser le mot de passe",body:c,doneLabel:"Annuler",onDone:()=>{}});c.querySelector("#send-reset-btn").addEventListener("click",()=>{p.classList.remove("m-sheet-overlay--show"),setTimeout(()=>p.remove(),280),Ne("E-mail de réinitialisation envoyé")});break}case"langue":Ui("Langue",Pn,Qe.langue,c=>{Qe.langue=c,e.querySelector("#val-langue").textContent=c});break;case"unites":Ui("Unités",Ji,Qe.unites,c=>{Qe.unites=c,e.querySelector("#val-unites").textContent=c.split(" ")[0]});break;case"gen-key":Fn(c=>{s.apiKeys.push(c),a()});break;case"notif-settings":qn(Ne);break;case"delete":Ne("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(m=>{m.addEventListener("click",()=>{const c=s.apiKeys.find(p=>p.id===+m.dataset.keyId);c&&zn(c,s.apiKeys,a)})})}a()}function K(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ue({title:e,body:i,doneLabel:t="Fermer",onDone:n}={}){var l;const a=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),a.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),s()}),o.addEventListener("click",m=>{m.target===o&&s()}),o}function Jt({title:e,message:i="",confirmLabel:t="Confirmer",confirmColor:n="#ff3b30",onConfirm:a}){var m;const o=document.getElementById("phone-screen");(m=document.querySelector(".m-sheet-overlay"))==null||m.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
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
    </div>`,o.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const l=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#sc-cancel").addEventListener("click",l),s.querySelector("#sc-confirm").addEventListener("click",()=>{l(),setTimeout(()=>a==null?void 0:a(),50)}),s.addEventListener("click",c=>{c.target===s&&l()})}function Hn(e){const i=3+e%5,t=Date.now();return Array.from({length:i},(n,a)=>{const o=e*17+a*7,s=1+a*(2+o%6),l=t-s*864e5-o%8*36e5,m=(1+o%5)*36e5+o%60*6e4,c=a===0&&o%7===0;return{start:new Date(l),end:c?null:new Date(l+m)}})}const Rn=[{id:1,name:"Pluie forte > 10 mm/h",params:"cumul > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",params:"< 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",params:"< 20%",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",params:"> 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",params:"< 50 W/m²",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",params:"> 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",params:"> 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",params:"< 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",params:"> 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],On=[{id:1,name:"Gel précoce < 2°C",params:"< 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",params:"cumul > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",params:"< 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]},{id:4,name:"Température humide < 0°C",params:"< 0°C",statut:"actif",metric:"temp-humide",created:"2026-02-01",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 78 92 34 15","+33 7 41 08 63 22"]}],Gi={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},Nn={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function ni(e){if(!e)return"—";const[i,t,n]=e.split("-");return`${n}/${t}/${i}`}function Yi(e){const i=e.sensorIds.map(n=>{const a=ce.find(o=>o.id===n);return a?`${a.model} ${a.serial}`:null}).filter(Boolean),t=e.parcelIds.map(n=>{const a=le.find(o=>o.id===n);return(a==null?void 0:a.name)||null}).filter(Boolean);return[...i,...t]}function Vn(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const n=i==="new"||i==="new-adherent"?[]:[...i==="adherent"?On:Rn];function a(){if(!n.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=n.map(s=>{Yi(s);const l=Nn[s.metric]||"bi-bell",m=s.statut==="actif";return`
        <div class="m-alert-card" data-id="${s.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${m?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${l}"></i>
            </div>
            <span class="m-alert-name">${s.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${m?"checked":""} data-id="${s.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${Gi[s.metric]||s.metric}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${ni(s.lastTriggered)}</span>
            </div>
          </div>
          <div class="w-irrig-act-row" style="padding:0 14px 14px">
            <button class="w-irrig-act-btn w-irrig-act-btn--pri m-alert-detail-btn" type="button" data-id="${s.id}">Voir le détail</button>
            <button class="w-irrig-act-btn w-irrig-act-btn--sec m-alert-edit-btn" type="button" data-id="${s.id}">Modifier l'alerte</button>
          </div>
        </div>`}).join(""),o()}function o(){t.querySelectorAll(".m-alert-toggle input").forEach(s=>{s.addEventListener("change",l=>{l.stopPropagation();const m=+s.dataset.id,c=n.find(p=>p.id===m);c&&(c.statut=s.checked?"actif":"inactif",a(),K(`Alerte ${s.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-edit-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation(),K("Modification à venir")})}),t.querySelectorAll(".m-alert-detail-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const m=+s.dataset.id,c=n.find(b=>b.id===m);if(!c)return;Yi(c);const p=document.createElement("div"),v=Hn(m);function u(){const b=c.sensorIds.map((L,A)=>{const D=ce.find(E=>E.id===L);return D?{label:`${D.model} ${D.serial}`,type:"sensor",idx:A}:null}).filter(Boolean),$=c.parcelIds.map((L,A)=>{const D=le.find(E=>E.id===L);return D?{label:D.name,type:"parcel",idx:A}:null}).filter(Boolean),h=[...b,...$];return h.length?h.map(L=>`<div class="m-perimetre-item" data-type="${L.type}" data-idx="${L.idx}">
                <span>${L.label}</span>
                <button class="m-perimetre-del" data-type="${L.type}" data-idx="${L.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const d=document.createElement("div");d.className="m-sheet-info-rows";function r(){var D;p.innerHTML="";const b=document.createElement("div");b.className="m-sheet-info-rows",b.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Gi[c.metric]||c.metric}</span></div>
            <div class="m-sheet-info-row"><span>Paramètres</span><span>${c.params||"—"}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${ni(c.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${ni(c.created)}</span></div>
            ${(D=c.phones)!=null&&D.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${c.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${c.statut}</span></div>`;const $=document.createElement("div");$.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",$.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${u()}</div>`,b.appendChild($),p.appendChild(b);const h=E=>E.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+E.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),L=document.createElement("div");L.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${v.map(E=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${E.end?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${h(E.start)} → <span style="color:${E.end?"inherit":"#ff9f0a"}">${E.end?h(E.end):"En cours"}</span></div>
              </div></div>`).join("")}`,p.appendChild(L),p.querySelectorAll(".m-perimetre-del").forEach(E=>{E.addEventListener("click",w=>{w.stopPropagation();const B=E.dataset.type,F=+E.dataset.idx;B==="sensor"?c.sensorIds.splice(F,1):c.parcelIds.splice(F,1),r(),a(),K("Retiré du périmètre")})});const A=document.createElement("a");A.className="m-sheet-link m-sheet-link--danger",A.style.marginTop="8px",A.textContent="Supprimer l'alerte",A.addEventListener("click",()=>{const E=n.findIndex(w=>w.id===m);E!==-1&&n.splice(E,1),f.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{f.remove(),a()},280),K("Alerte supprimée")}),p.appendChild(A)}r();const f=ue({title:c.name,body:p,doneLabel:"Fermer",onDone:()=>{}})})})}a()}const qs=e=>`parcel-journal-${e}`,Ki=[{cible:"Pucerons",produit:"Karate Zeon",dose:"0,1 L/ha",obs:"Quelques pucerons sur feuilles basses. À surveiller."},{cible:"Mildiou",produit:"Bordeaux mixture",dose:"2 kg/ha",obs:"Taches suspectes sur feuillage, conditions humides."},{cible:"Limaces",produit:"Métaldéhyde",dose:"5 kg/ha",obs:"Dégâts de limaces en bordure après les pluies."},{cible:"Altises",produit:"Karaté K",dose:"75 mL/ha",obs:"Présence d'altises sur jeunes plants."}],Zi=["Rimpro","Weephyt","DeciTrait","Maï'zy"],ut=[["Jean Dupont","membre"],["Marie Martin","membre"],["Alexandre Bernard","conseiller"]];function Wt(e){try{const l=localStorage.getItem(qs(e));if(l)return JSON.parse(l)}catch{}const i=Ki[e%Ki.length],t=Zi[e%Zi.length],[n,a]=ut[e%ut.length],o=e%6,s=(l,m)=>{const c=new Date(l+"T00:00:00");return c.setDate(c.getDate()+m),c.toISOString().slice(0,10)};return[{id:1,type:"note",category:"Observation générale",date:s("2026-05-11",o),auteur:n,role:a,texte:i.obs},{id:2,type:"traitement",date:s("2026-05-16",o),auteur:ut[(e+1)%ut.length][0],role:ut[(e+1)%ut.length][1],texte:"Vent < 2 m/s, conditions conformes.",produit:i.produit,dose:i.dose,cible:i.cible},{id:3,type:"integration",date:s("2026-04-02",o),texte:`L'intégration « ${t} » a expiré et n'est plus active.`,_system:!0},{id:4,type:"integration",date:s("2025-10-02",o),texte:`Intégration « ${t} » activée.`,_system:!0}]}function Pi(e,i){localStorage.setItem(qs(e),JSON.stringify(i))}function _e(e,i){const t={id:`sys-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,_system:!0,...i};Pi(e,[t,...Wt(e)])}function Ps(e,i,t="Irrigations",n=null){const a=i.find(s=>s.id===+e);if(!a)return;const o=ce.filter(s=>s.parcelIds.includes(a.id)).map(s=>s.id);ge(()=>Promise.resolve().then(()=>ot),void 0).then(s=>{s.initParcelDetail(a,o,"widgets",t),n&&setTimeout(()=>{var l;(l=document.querySelector(`[data-widget-id="${n}"], #${n}`))==null||l.scrollIntoView({behavior:"smooth",block:"start"})},150)})}function ct(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const Te=new Date().toISOString().split("T")[0];function $t(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,n,a]=e.split("-");return`${parseInt(a)} ${i[parseInt(n)-1]} ${t}`}function zt(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,n]=e.split("-");return`${parseInt(n)} ${i[parseInt(t)-1]}`}function fi(e){return!e||e===Te?"":e<Te?'<span class="irr-pill irr-pill--past">Passée · Effectuée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function hi(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Kt(e,i,t){const n=i.length>0&&i.every(o=>t.has(o.id)),a=[...i].sort((o,s)=>{const l=t.has(o.id)?0:1,m=t.has(s.id)?0:1;return l!==m?l-m:o.name.localeCompare(s.name,"fr")}).map(o=>{const s=t.has(o.id);return`<div class="irr-plot-row${s?" irr-plot-row--sel":""}" data-pid="${o.id}">
      <div><div class="irr-plot-name">${o.name}</div>${Jn(o)}</div>
      ${hi(s,!1)}
    </div>`}).join("");return`<div class="irr-sel-all-row" id="irr-sel-all">
    <span class="irr-sel-all-lbl">${n?"Tout désélectionner":"Tout sélectionner"}</span>
    ${hi(n,!1)}
  </div>${a}`}function gi({title:e,body:i,onSave:t,onDelete:n,saveLabel:a="Enregistrer"}){var m,c;const o=document.getElementById("phone-screen");(m=document.querySelector(".irr-sheet-overlay"))==null||m.remove();const s=document.createElement("div");s.className="irr-sheet-overlay",s.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${n?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${a}</button>
      </div>
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const l=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",p=>{p.target===s&&l()}),(c=s.querySelector("#iss-del"))==null||c.addEventListener("click",()=>{n==null||n(),l()}),s.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),l()}),s}function Ds(e,i,t){const n=i.filter(l=>e.has(l.id)&&(!l.irrigation||l.irrigation==="Non irrigué"));if(!n.length){t();return}const a=document.createElement("div");a.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${n.length===1?`<strong>${n[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${n.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" class="m-prev-select" style="margin-bottom:0">
      <option value="">— Choisir un type —</option>
      ${Yt.map(l=>`<option value="${l}">${l}</option>`).join("")}
    </select>`;const s=gi({title:"Type d'irrigation",body:a,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const l=a.querySelector("#irr-type-ask").value;l&&n.forEach(m=>{m.irrigation=l,Oe(m.id,{irrigation:l})}),t()}}).querySelector("#iss-del");s&&(s.textContent="Passer",s.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function Jn(e){const i=e.crop,t=e.irrigation||null,n=[i,t||"<em>type irrigation non renseigné</em>"].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${n.join(" · ")}</span>`}function zs(e,i,t=null,n=!1,a=null){let o=new Set((t==null?void 0:t.ids)??[]),s=Te,l=10;function m(){return Kt([],e,o)}function c(r){r.querySelector("#irr-date-hint").innerHTML=fi(s)}function p(r){const f=o.size,b=r.querySelector(".irr-summary"),$=r.querySelector(".irr-save-btn");!b||!$||(b.textContent=f===0?"":`${f} parcelle${f>1?"s":""} · ${l} mm`,$.disabled=f===0,$.textContent="Enregistrer")}function v(r){var f;r.querySelectorAll(".irr-plot-row").forEach(b=>{b.addEventListener("click",()=>{const $=+b.dataset.pid;o.has($)?o.delete($):o.add($),r.querySelector("#irr-sel-list").innerHTML=m(),v(r),p(r)})}),(f=r.querySelector("#irr-sel-all"))==null||f.addEventListener("click",()=>{const b=e.some($=>!o.has($.id));e.forEach($=>b?o.add($.id):o.delete($.id)),r.querySelector("#irr-sel-list").innerHTML=m(),v(r),p(r)})}const u=`<div id="irr-sel-list">${m()}</div>`,d=ct(we(`
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
      ${u}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Enregistrer</button>
    </div>
  `));d.dataset.dirty="true",v(d),p(d),d.querySelector("#irr-back").addEventListener("click",be),d.querySelector("#irr-date").addEventListener("change",r=>{s=r.target.value,c(d),p(d)}),d.querySelector("#irr-qty").addEventListener("input",r=>{l=parseInt(r.target.value)||1,p(d)}),d.querySelector(".irr-save-btn").addEventListener("click",()=>{const r=o;Ds(r,e,()=>{const f=s>Te;r.forEach(L=>{me.push({iso:s,mm:l,real:!f,plotId:L,fromStrategy:!1})}),nt();const $=[{title:null,names:[...r].map(L=>{var A;return(A=e.find(D=>D.id===L))==null?void 0:A.name}).filter(Boolean)}],h=r.size===1?String([...r][0]):"all";js(),_s({title:r.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:$t(s)},{label:"Quantité",value:`${l} mm`}],parcelSections:$,isFut:f,plots:e,calFilter:h,addedCount:r.size,stackDepth:1,backToParcel:n,onBack:a})})})}function yi(e,i,t=null,n=null,a=!1,o=null){let s=new Set((t==null?void 0:t.ids)??[]),l=Te,m=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],c=10,p=7,v=null,u=null;if(n){const h=me.filter(L=>L.fromStrategy&&n.has(L.seasonId));if(h.length){const L=h.map(D=>D.iso).sort();l=L[0],m=L[L.length-1],c=h[0].mm;const A=[...new Set(L)];p=A.length>=2?Math.round((new Date(A[1])-new Date(A[0]))/864e5):7,v=l,u=m}}function d(){if(!l||!m||p<=0)return[];const h=[],L=new Date(m);let A=new Date(l);for(;A<=L&&h.length<100;)h.push(new Date(A)),A.setDate(A.getDate()+p);return h}function r(){const h=d();s.size;const L=h.length>0?`<span class="irr-preview-ok">↗ ${h.length} irrigations · ${h.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${l}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${m}" />
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
          <input type="number" class="irr-qty-input" id="strat-freq" value="${p}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${L}</div>
      ${Kt([],e,s)}
      <div class="irr-bottom-spacer"></div>
    `}function f(h){const L=s.size,A=d(),D=h.querySelector(".irr-save-btn"),E=h.querySelector(".irr-summary");!D||!E||(D.disabled=L===0||A.length===0,E.textContent=L===0?"":`${L} parcelle${L>1?"s":""} · ${A.length} occurrences`,D.textContent="Voir l'aperçu →")}function b(h){var D,E,w,B,F;const L=h.querySelector(".irr-scroll-body");L.querySelectorAll(".irr-plot-row").forEach(M=>{M.addEventListener("click",()=>{const j=+M.dataset.pid;s.has(j)?s.delete(j):s.add(j),L.innerHTML=r(),b(h),f(h)})}),(D=L.querySelector("#irr-sel-all"))==null||D.addEventListener("click",()=>{const M=e.some(j=>!s.has(j.id));e.forEach(j=>M?s.add(j.id):s.delete(j.id)),L.innerHTML=r(),b(h),f(h)});const A=()=>{const M=d(),j=L.querySelector("#strat-preview");j&&(j.innerHTML=M.length>0?`<span class="irr-preview-ok">↗ ${M.length} irrigations · ${M.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),f(h)};(E=L.querySelector("#strat-debut"))==null||E.addEventListener("change",M=>{l=M.target.value,A()}),(w=L.querySelector("#strat-fin"))==null||w.addEventListener("change",M=>{m=M.target.value,A()}),(B=L.querySelector("#strat-qty"))==null||B.addEventListener("input",M=>{c=parseInt(M.target.value)||1,A()}),(F=L.querySelector("#strat-freq"))==null||F.addEventListener("input",M=>{p=parseInt(M.target.value)||1,A()})}const $=ct(we(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${r()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));$.dataset.dirty="true",b($),f($),$.querySelector("#strat-back").addEventListener("click",be),$.querySelector(".irr-save-btn").addEventListener("click",()=>{const h=d();Wn($,e,s,l,m,c,p,h,i,t,n,a,o,v,u)})}function Wn(e,i,t,n,a,o,s,l,m,c,p=null,v=!1,u=null,d=null,r=null){var q,S,g;const f=t.size,b=!!p&&(n!==d||a!==r),$=b?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées.",h=5;l.length-h;function L(x){const T=x.toISOString().slice(0,10)>=Te?"#FFB705":"#FF8500",z=x.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${$t(z)}</span>
      <span style="font-size:13px;font-weight:700;color:${T}">${o} mm</span>
    </div>`}const A=l.filter(x=>x.toISOString().slice(0,10)<Te),D=l.filter(x=>x.toISOString().slice(0,10)>=Te),E=D.slice(0,h),w=D.slice(h),B=`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${A.length?A.map(L).join(""):'<div style="font-size:13px;color:#9E9D98;padding:8px 0">Aucune irrigation effectuée</div>'}`,F=D.length?`
    <div class="irr-section-lbl" style="margin-top:${A.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${E.map(L).join("")}
    ${w.length?`
      <div id="apercu-rest" style="display:none">${w.map(L).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${w.length} irrigation${w.length>1?"s":""} de plus</button>
    `:""}`:"",M=ct(we(`
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
          <div class="irr-apercu-sub">${zt(n)} → ${zt(a)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${l.length*o} mm</div>
          <div class="irr-apercu-sub">${f} parcelle${f>1?"s":""} · ${o} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${B}
        ${F}
        ${!A.length&&!D.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      ${p?`
      <div class="irr-stop-confirm" style="margin-top:12px">
        <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">${$}</div>
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
  `));M.dataset.dirty="true",M.querySelector("#apercu-back").addEventListener("click",be),(q=M.querySelector("#apercu-show-more"))==null||q.addEventListener("click",x=>{M.querySelector("#apercu-rest").style.display="",x.target.remove()});function j(){const x=t;Ds(x,i,()=>{p&&(b?me.splice(0,me.length,...me.filter(P=>!(p.has(P.seasonId)&&P.fromStrategy))):me.splice(0,me.length,...me.filter(P=>!(p.has(P.seasonId)&&P.fromStrategy&&P.iso>Te))));const y=p&&!b?l.filter(P=>P.toISOString().slice(0,10)>Te):l,T=Ln();if(y.forEach(P=>{const C=P.toISOString().slice(0,10);x.forEach(N=>{me.push({iso:C,mm:o,real:C<=Te,plotId:N,fromStrategy:!0,seasonId:T})})}),nt(),p){const P=b?"sur toute la saison":"à partir de demain";x.forEach(C=>{_e(C,{type:"modification",date:Te,texte:`Saison d'irrigation modifiée (${P}) : ${o} mm tous les ${s} jours, du ${zt(n)} au ${zt(a)} (${l.length} irrigations).`})})}const k=[{title:null,names:[...x].map(P=>{var C;return(C=i.find(N=>N.id===P))==null?void 0:C.name}).filter(Boolean)}],I=x.size===1?String([...x][0]):"all";js(),_s({title:"Saison enregistrée",params:[{label:"Début",value:$t(n)},{label:"Fin",value:$t(a)},{label:"Quantité",value:`${o} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${l.length*x.size}`}],parcelSections:k,isFut:!0,plots:i,calFilter:I,addedCount:l.length*x.size,stackDepth:2,backToParcel:v,onBack:u})})}M.querySelector("#apercu-confirm").addEventListener("click",()=>{if(p){M.querySelector("#apercu-edit-confirm").style.display="flex",M.querySelector("#apercu-edit-confirm").scrollIntoView({behavior:"smooth",block:"center"});return}j()}),(S=M.querySelector("#apercu-edit-cancel"))==null||S.addEventListener("click",()=>{M.querySelector("#apercu-edit-confirm").style.display="none"}),(g=M.querySelector("#apercu-edit-confirm-btn"))==null||g.addEventListener("click",j)}function _s({title:e,params:i,parcelSections:t=[],isFut:n,plots:a,calFilter:o,addedCount:s=0,stackDepth:l=3,backToParcel:m=!1,onBack:c=null}){const p=(i||[]).map(h=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${h.label}</span>
      <span class="irr-confirm-param-val">${h.value}</span>
    </div>`).join(""),v=3,u=t.flatMap(h=>h.names.map(L=>({title:h.title,name:L}))),d=u.slice(0,v),r=u.slice(v);function f(h){const L=[];let A=null;for(const D of h)(!A||A.title!==D.title)&&(A={title:D.title,names:[]},L.push(A)),A.names.push(D.name);return L.map(D=>`
      ${D.title?`<div class="irr-confirm-sec-hd">${D.title}</div>`:""}
      ${D.names.map(E=>`<div class="irr-confirm-parcel">· ${E}</div>`).join("")}
    `).join("")}const b=u.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${f(d)}
      ${r.length?`
        <details class="irr-confirm-more">
          <summary>${r.length} parcelle${r.length>1?"s":""} de plus</summary>
          ${f(r)}
        </details>`:""}
    </div>`,$=ct(we(`
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
      <div class="irr-confirm-params">${p}</div>
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
            <div class="irr-confirm-opt-title">${m?"Retour à la parcelle":"Retour au tableau de bord"}</div>
            <div class="irr-confirm-opt-sub">Continuer la navigation</div>
          </div>
        </div>
      </div>
    </div>
  `));$.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&me.splice(me.length-s,s),be()}),$.querySelector("#conf-back").addEventListener("click",()=>{for(let h=0;h<=l;h++)be();c==null||c()}),$.querySelector("#conf-calendar").addEventListener("click",()=>{Fs(a,o)})}const Un=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function Fs(e,i){let t=i||"";function n(d){if(!d||d==="all")return null;const r=e.find(f=>String(f.id)===String(d));return r?{ids:[r.id],label:r.name}:null}function a(){return!t||t==="all"?me:me.filter(d=>d.plotId===+t)}function o(d){const r=d.filter(h=>h.real),f=d.filter(h=>!h.real),b=r.reduce((h,L)=>h+L.mm,0),$=f.reduce((h,L)=>h+L.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${b} mm</div>
        <div class="irr-cumul-count">${r.length} irrigation${r.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${$} mm</div>
        <div class="irr-cumul-count">${f.length} irrigation${f.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${b+$} mm</div>
        <div class="irr-cumul-count">${r.length+f.length} irrigations</div>
      </div>
    </div>`}function s(d){if(d.length<2)return"";const r=[...d].sort((k,I)=>k.iso<I.iso?-1:1),f=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],b=new Date(r[0].iso),$=new Date(r[r.length-1].iso),h=Math.max($-b,1),L=300,A=26,D=5,E=5,w=A-E-4,B=w-E-3,F=A+D+13,M=F+2,j=k=>Math.round((k-b)/h*L),q=k=>{const[,I,P]=k.split("-");return`${parseInt(P)}/${parseInt(I)}`},S=[],g=new Date(b.getFullYear(),b.getMonth()+1,1);for(;g<=$;)S.push(new Date(g)),g.setMonth(g.getMonth()+1);const x=S.map(k=>`<line x1="${j(k)}" y1="${A-6}" x2="${j(k)}" y2="${A+D+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),y=[b,...S,$],T=y.slice(0,-1).map((k,I)=>{const P=j(k),C=j(y[I+1]);return C-P<16?"":`<text x="${Math.round((P+C)/2)}" y="${B}" font-size="8" fill="#B0AEA8" text-anchor="middle">${f[k.getMonth()]}</text>`}).join(""),z=r.map(k=>{const I=k.real?"#FF8500":"#FFB705",P=j(new Date(k.iso)),[,C,N]=k.iso.split("-"),X=`${parseInt(N)} ${Un[parseInt(C)-1]} · ${k.mm} mm`;return`<circle cx="${P}" cy="${w}" r="${E}" fill="${I}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${P}" cy="${w}" r="${E+6}" fill="transparent" pointer-events="all"><title>${X}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${L}" height="${M}" viewBox="0 0 ${L} ${M}" style="width:100%;display:block">
        ${T}
        <rect x="0" y="${A}" width="${L}" height="${D}" rx="${D/2}" fill="#E0DED8"/>
        ${x}
        ${z}
        <text x="1" y="${F}" font-size="9" fill="#B0AEA8">${q(r[0].iso)}</text>
        <text x="${L-1}" y="${F}" font-size="9" fill="#B0AEA8" text-anchor="end">${q(r[r.length-1].iso)}</text>
      </svg>
    </div>`}function l(d,r,f){const b=document.createElement("div");let $=d.iso,h=d.mm;b.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${d.iso}" />
          <div id="edit-date-hint">${fi(d.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${d.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,b.querySelector("#edit-date").addEventListener("change",L=>{$=L.target.value,b.querySelector("#edit-date-hint").innerHTML=fi($)}),b.querySelector("#edit-qty").addEventListener("input",L=>{const A=parseInt(L.target.value);A>0&&(h=A)}),gi({title:d.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée",body:b,saveLabel:"Enregistrer",onSave:()=>{d.iso=$,d.mm=h,d.real=$<=Te,nt(),p(f)},onDelete:()=>{const L=me.indexOf(d);L>-1&&me.splice(L,1),nt(),p(f)}})}function m(d,r){const f=+d,b=document.createElement("div");let $=!1,h=!1;function L(){return new Set(me.filter(E=>E.plotId===f&&E.fromStrategy&&E.seasonId).map(E=>E.seasonId))}function A(){return me.some(E=>E.plotId===f&&!E.fromStrategy)}function D(){var E,w,B,F,M,j,q;b.innerHTML=`
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
        ${$?`
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
          ${A()?'<div style="font-size:12px;color:#7A3A00;margin-bottom:8px">Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.</div>':""}
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(E=b.querySelector("#strat-modify"))==null||E.addEventListener("click",()=>{var y;(y=document.querySelector(".irr-sheet-overlay"))==null||y.remove();const S=L(),g=e.find(T=>T.id===f),x=g?{ids:[g.id],label:g.name}:null;yi(e,()=>p(r),x,S)}),(w=b.querySelector("#strat-stop"))==null||w.addEventListener("click",()=>{$=!0,h=!1,D()}),(B=b.querySelector("#strat-delete"))==null||B.addEventListener("click",()=>{h=!0,$=!1,D()}),(F=b.querySelector("#stop-cancel"))==null||F.addEventListener("click",()=>{$=!1,D()}),(M=b.querySelector("#stop-confirm"))==null||M.addEventListener("click",()=>{var x;const S=L(),g=me.filter(y=>y.plotId===f&&S.has(y.seasonId)&&!y.real).length;me.splice(0,me.length,...me.filter(y=>!(y.plotId===f&&S.has(y.seasonId)&&!y.real))),nt(),_e(f,{type:"modification",date:Te,texte:`Saison d'irrigation arrêtée (${g} irrigation(s) planifiée(s) annulée(s)).`}),(x=document.querySelector(".irr-sheet-overlay"))==null||x.remove(),p(r)}),(j=b.querySelector("#delete-cancel"))==null||j.addEventListener("click",()=>{h=!1,D()}),(q=b.querySelector("#delete-confirm"))==null||q.addEventListener("click",()=>{var g;const S=me.filter(x=>x.plotId===f).length;me.splice(0,me.length,...me.filter(x=>x.plotId!==f)),nt(),_e(f,{type:"modification",date:Te,texte:`Saison d'irrigation supprimée (${S} irrigation(s) retirée(s) du calendrier).`}),(g=document.querySelector(".irr-sheet-overlay"))==null||g.remove(),p(r)})}D(),gi({title:"Gérer la saison",body:b,saveLabel:"Fermer",onSave:()=>{}})}function c(d){if(!d.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const r=[...d].filter($=>!$.real).sort(($,h)=>$.iso<h.iso?-1:1),f=[...d].filter($=>$.real).sort(($,h)=>$.iso>h.iso?-1:1);function b($){const h=$.real?"#FF8500":"#FFB705",L=me.indexOf($);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${$t($.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${h};white-space:nowrap;margin-right:4px">${$.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${L}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${L}" title="Supprimer">🗑</button>
      </div>`}return`
      ${f.length?`
        <details class="irr-section-details" data-section="effectuees"${r.length?"":" open"}>
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${f.length}</span></summary>
          ${f.map(b).join("")}
        </details>`:""}
      ${r.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${r.length}</span></summary>
          ${r.map(b).join("")}
        </details>`:""}
    `}function p(d){var B,F,M,j,q;const r=d.querySelector(".irr-cal-body");if(!t){r.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const f={};if(r.querySelectorAll("details[data-section]").forEach(S=>{f[S.dataset.section]=S.open}),t==="all"){const S={};for(const y of me){const T=y.plotId??"unknown";S[T]||(S[T]=[]),S[T].push(y)}const g=Object.keys(S).filter(y=>e.some(T=>String(T.id)===y));if(!g.length){r.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const x=g.sort((y,T)=>{var I,P;const z=((I=e.find(C=>String(C.id)===y))==null?void 0:I.name)??y,k=((P=e.find(C=>String(C.id)===T))==null?void 0:P.name)??T;return z.localeCompare(k,"fr")});r.innerHTML=x.map((y,T)=>{const z=S[y],k=z.some(Q=>Q.fromStrategy),I=e.find(Q=>String(Q.id)===y),P=(I==null?void 0:I.name)??y,C=[I==null?void 0:I.crop,I==null?void 0:I.irrigation].filter(Boolean),N=T>0?'<hr style="border:none;border-top:1px solid #E0DED8;margin:0 0 16px">':"",X=k?`<div class="irr-cal-add-bar" style="margin-top:8px">
               <button class="irr-cal-add-btn irr-cal-add-btn--sec" data-strat-pid="${y}"><i class="bi bi-pencil"></i> Modifier la saison</button>
             </div>`:`<div class="irr-cal-add-bar" style="margin-top:8px">
               <button class="irr-cal-add-btn irr-cal-add-btn--tert" data-goto-pid="${y}"><i class="bi bi-list-ul"></i> Voir les irrigations</button>
             </div>`;return`${N}<div style="margin-bottom:16px">
          <button class="irr-cal-plot-link" data-goto-pid="${y}" style="display:flex;align-items:baseline;gap:6px;background:none;border:none;padding:0;margin-bottom:6px;text-align:left;cursor:pointer">
            <span style="font-size:13px;font-weight:700;color:#185FA5;text-decoration:underline">${P}</span>
            ${C.length?`<span style="font-size:11px;color:#8e8e93">${C.join(" · ")}</span>`:""}
          </button>
          ${o(z)}
          ${s(z)}
          ${X}
        </div>`}).join(""),r.querySelectorAll("[data-strat-pid]").forEach(y=>{y.addEventListener("click",()=>m(y.dataset.stratPid,d))}),r.querySelectorAll("[data-goto-pid]").forEach(y=>{y.addEventListener("click",()=>{t=y.dataset.gotoPid;const T=d.querySelector("#cal-filter-sel");T&&(T.value=t),p(d)})});return}const b=a(),$=b.some(S=>S.fromStrategy),h=t!=="all"?e.find(S=>String(S.id)===String(t)):null,L=h?'<button class="irr-cal-add-btn irr-cal-add-btn--tert" id="cal-goto-plot"><i class="bi bi-geo-alt-fill"></i> Voir la parcelle</button>':"",D=$?`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="open-strat-edit"><i class="bi bi-pencil"></i> Modifier la saison</button>
           ${h?'<button class="irr-cal-add-btn irr-cal-add-btn--tert" id="cal-edit-params"><i class="bi bi-sliders"></i> Modifier les paramètres</button>':""}
           ${L}
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Saisir une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Saisir une saison d'irrigation</button>
           ${L}
         </div>`,E=[h==null?void 0:h.crop,h==null?void 0:h.irrigation].filter(Boolean),w=E.length?`<div style="padding:8px 14px 2px;font-size:13px;color:#636366">${E.join(" · ")}</div>`:"";r.innerHTML=`
      ${w}
      ${o(b)}
      ${s(b)}
      ${D}
      ${c(b)}
    `,(B=r.querySelector("#cal-goto-plot"))==null||B.addEventListener("click",()=>{h&&Ps(h.id,e)}),(F=r.querySelector("#cal-edit-params"))==null||F.addEventListener("click",()=>{h&&ge(()=>Promise.resolve().then(()=>ot),void 0).then(S=>S.openMobileVolDebitSheet(h,()=>p(d)))}),r.querySelectorAll("details[data-section]").forEach(S=>{const g=S.dataset.section;g in f&&(S.open=f[g])}),r.querySelectorAll(".irr-edit-btn").forEach(S=>{S.addEventListener("click",g=>{g.stopPropagation();const x=me[+S.dataset.iidx];x&&l(x,b,d)})}),r.querySelectorAll(".irr-del-btn").forEach(S=>{S.addEventListener("click",g=>{g.stopPropagation();const x=+S.dataset.iidx;x>=0&&(me.splice(x,1),nt(),p(d))})}),(M=r.querySelector("#open-strat-edit"))==null||M.addEventListener("click",()=>{m(t,d)}),(j=r.querySelector("#cal-add-irrig"))==null||j.addEventListener("click",()=>{zs(e,()=>p(d),n(t))}),(q=r.querySelector("#cal-add-strat"))==null||q.addEventListener("click",()=>{yi(e,()=>p(d),n(t))})}const v=[...e].sort((d,r)=>d.name.localeCompare(r.name,"fr")).map(d=>`<option value="${d.id}"${String(d.id)===String(t)?" selected":""}>${d.name}</option>`).join(""),u=ct(we(`
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
  `));u.querySelector("#cal-back").addEventListener("click",be),u.querySelector("#cal-filter-sel").addEventListener("change",d=>{t=d.target.value,p(u)}),p(u)}const et=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:Kt,checkIcon:hi,flexLayer:ct,goToPlot:Ps,openCalendar:Fs,openIrrigationSaisie:zs,openIrrigationStrategie:yi},Symbol.toStringTag,{value:"Module"})),Gn=[{name:"Allier AgriTech",distance:8,adherents:31,capteurs:198,parcelles:1140,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Auvergne Agri Conseil",distance:15,adherents:54,capteurs:361,parcelles:2080,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]},{name:"Réseau Bourbonnais",distance:22,adherents:18,capteurs:112,parcelles:630,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Creuse Agri Net",distance:38,adherents:12,capteurs:74,parcelles:410,sharedSensorTypes:["Capteurs d'irrigation"]},{name:"Puy-de-Dôme Connect",distance:45,adherents:39,capteurs:255,parcelles:1490,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]}],Xi={name:"Breiz'Agri Conseil",city:"Rennes (35)",phone:"02 99 XX XX XX",email:"contact@breizagri.fr",capteurs:312,parcelles:1830,sharedSensorTypes:["Capteurs météo"]},Yn=["Capteurs météo","Capteurs d'irrigation","Stations météo virtuelles"];function Qi(e){return e.split(" ").filter(i=>i.length>2).slice(0,2).map(i=>i[0].toUpperCase()).join("")}const Be={prenom:"Pierre",nom:"Jourdain",email:"pierre@gaec-jourdain.fr",phone:"06 71 23 45 67",orgName:"GAEC Jourdain",adresse:"Lieu-dit La Croix Blanche, 03500 Saint-Pourçain-sur-Sioule",selectedPlan:"expert",joinNetwork:!0},Bs={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre 15/30 cm","CHP-30/60":"Tensiomètre 30/60 cm","CHP-60/90":"Tensiomètre 60/90 cm","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},Kn={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]},Zn=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),Xn={"CHP-15/30":[15,30],"CHP-30/60":[30,60],"CHP-60/90":[45,90]},ai=[{id:"essential",name:"Weenat Essential",priceNum:0,price:"Gratuit",color:"#636366",features:["Aucun capteur physique","Historique illimité","Alertes","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"plus",name:"Weenat Plus",priceNum:16.5,price:"16,5 €/mois",color:"#00B093",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"expert",name:"Weenat Expert",priceNum:30,price:"30 €/mois",color:"#006798",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées","Capteurs irrigation","Fonctionnalités irrigation"]}],oi={Administrateur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!0}]}],Agent:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}],Lecteur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!1}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!1}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!1},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}]};function Qn(e,i,t,n){const a=i==="essential",o=i==="expert";return e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?["signup","verify","emailVerified","creating","done"]:e==="new-adherent"?["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkInfo","invite","plan",...o?["volumeChoice"]:[],"creating","done"]:["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkChoice",...t?["networkPick"]:[],"invite","plan",...a?[]:["payment","paymentConfirmed"],...o?["volumeChoice"]:[],"creating","done"]}function ea(e,i,t,n){return Qn(e,i,t)}const ta={signup:"Inscription",verify:"Vérification",orgName:"Exploitation",geoloc:"Localisation",orgInfo:"Informations",networkChoice:"Réseau",networkPick:"Choisir un réseau",networkInfo:"Mon réseau",invite:"Invitations",plan:"Abonnement",payment:"Paiement",paymentConfirmed:"Paiement",volumeChoice:"Volume autorisé",parcelMap:"Parcelle",parcelSource:"Source de données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"};function ia(e,i){const t=document.getElementById("phone-screen");let n=0,a=e==="new-adherent"?"expert":Be.selectedPlan,o=Be.joinNetwork,s=!1,l=0,m=!0,c=46.3021,p=3.2938,v=null,u=null,d="smv",r=[],f="Parcelle 1";const b=document.createElement("div");b.id="onboarding-overlay",b.className="m-ob-overlay",t.appendChild(b);function $(){return ea(e,a,o)}function h(){return $()[n]}function L(){return $().filter(V=>!["creating","done","parcelDone","emailVerified","paymentConfirmed"].includes(V)).length}function A(){return ai.find(V=>V.id===a)}function D(){const V=$().slice(0,n).filter(O=>O!=="creating"&&O!=="done"&&O!=="parcelDone").length;return`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Math.round(V/L()*100)}%"></div></div>`}function E(V,U=!0){const O=h(),H=new Set(["creating","done","parcelDone","emailVerified","paymentConfirmed"]),_=U&&n>0&&!H.has(O),R=ta[O]||"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${_?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${R}</span>
          <div style="width:32px"></div>
        </div>
        ${H.has(O)?"":D()}
        <div class="m-ob-body">${V}</div>
      </div>`}function w(){n++,qe()}function B(){n--,qe()}function F(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-person"></i></div>
        <h2 class="m-ob-h2">Créer mon compte</h2>
      </div>
      <div class="m-ob-form" style="margin-top:20px">
        <div class="m-ob-row2">
          <div class="m-ob-field">
            <label class="m-ob-label">Prénom</label>
            <input class="m-ob-input" type="text" placeholder="Prénom" value="${Be.prenom}">
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">Nom</label>
            <input class="m-ob-input" type="text" placeholder="Nom" value="${Be.nom}">
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Adresse email professionnelle</label>
          <input class="m-ob-input" type="email" placeholder="Adresse email professionnelle" value="${Be.email}">
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
            <input class="m-ob-input m-ob-input--phone" type="tel" placeholder="06 12 12 12 12" value="${Be.phone}">
          </div>
        </div>
        <label class="m-ob-cgu-row">
          <input type="checkbox" checked>
          <span>J'ai lu et j'accepte les <a href="#">conditions d'utilisations</a> et la <a href="#">politique de confidentialité</a></span>
        </label>
      </div>
      <button class="m-ob-cta" id="ob-next">Créer mon compte</button>
    `,!1)}function M(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-envelope-check"></i></div>
        <h2 class="m-ob-h2">Vérifiez votre adresse email</h2>
        <p class="m-ob-sub">Un e-mail a été envoyé à<br><strong>${Be.email}</strong></p>
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
          <p class="m-ob-sub" style="text-align:center"><strong>${Be.email}</strong><br>a bien été confirmée.</p>
          <button class="m-ob-cta" id="ob-next" style="margin-top:12px">Continuer</button>
        </div>
      </div>`}function q(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-building"></i></div>
        <h2 class="m-ob-h2">Votre exploitation</h2>
        <p class="m-ob-sub">Comment s'appelle votre exploitation ?</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de l'exploitation</label>
          <input class="m-ob-input" type="text" value="${Be.orgName}">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function S(){return E(`
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
            <input class="m-ob-input" type="text" value="${Be.adresse}">
          </div>
          <div id="ob-addr-map" class="m-ob-addr-map"></div>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      </div>
    `)}function g(){const V=Is.map(U=>`<button type="button" class="m-ob-pill" data-metier="${U}">${U}</button>`).join("");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-house"></i></div>
        <h2 class="m-ob-h2">Votre activité</h2>
        <p class="m-ob-sub">Ces informations nous permettent de vous conseiller les fonctionnalités les plus adaptées.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Métier(s)</label>
          <div class="m-ob-pills">${V}</div>
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function x(){return E(`
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
    `)}function y(){const V=Gn.map(U=>{var O;return`
      <div class="m-ob-net-row" data-net="${U.name}">
        <div class="m-ob-net-avatar">${Qi(U.name)}</div>
        <div class="m-ob-net-info">
          <div class="m-ob-net-name">${U.name}</div>
          <div class="m-ob-net-meta">${U.distance} km · ${U.capteurs} capteurs · ${U.parcelles} parcelles</div>
          ${(O=U.sharedSensorTypes)!=null&&O.length?`<div class="m-ob-net-tags">${U.sharedSensorTypes.map(H=>`<span class="m-ob-net-tag">${H}</span>`).join("")}</div>`:""}
        </div>
        <div class="m-ob-net-check"><i class="bi bi-circle"></i></div>
      </div>`}).join("");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-building-check"></i></div>
        <h2 class="m-ob-h2">Choisir un réseau</h2>
        <p class="m-ob-sub">Les 5 réseaux les plus proches de votre exploitation.</p>
      </div>
      <div class="m-ob-net-list">${V}</div>
      <button class="m-ob-cta" id="ob-next">Rejoindre</button>
    `)}function T(){var U;const V=Xi;return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3-fill"></i></div>
        <h2 class="m-ob-h2">Mon réseau</h2>
        <p class="m-ob-sub">Vous avez été invité à rejoindre ce réseau.</p>
      </div>
      <div class="m-ob-info-card" style="background:var(--bg2,#f5f5f7);border-radius:12px;padding:20px 16px;margin:0 0 16px">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:14px">
          <div class="m-ob-net-avatar" style="width:64px;height:64px;font-size:24px;border-radius:16px;margin-bottom:8px">${Qi(V.name)}</div>
          <div style="font-weight:700;font-size:16px">${V.name}</div>
          <div style="font-size:13px;color:#636366">${V.city}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px;margin-top:6px"><i class="bi bi-telephone" style="color:#0172A4"></i> ${V.phone}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px"><i class="bi bi-envelope" style="color:#0172A4"></i> ${V.email}</div>
        </div>
        <div style="display:flex;gap:16px;padding-top:12px;padding-bottom:12px;border-top:.5px solid rgba(0,0,0,.1)">
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${V.capteurs}</div><div style="font-size:11px;color:#636366">capteurs</div></div>
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${V.parcelles}</div><div style="font-size:11px;color:#636366">parcelles</div></div>
        </div>
        <div style="padding-top:12px;border-top:.5px solid rgba(0,0,0,.1)">
          ${(U=V.sharedSensorTypes)!=null&&U.length?`
          <div style="font-size:13px;color:#3a3a3c;margin-bottom:8px">Capteurs partagés entre les adhérents :</div>
          <div class="m-ob-pills">${Yn.map(O=>`<span class="m-ob-pill${V.sharedSensorTypes.includes(O)?" m-ob-pill--on":" m-ob-pill--off"}" style="cursor:default">${O}</span>`).join("")}</div>
          `:`<div style="font-size:13px;color:#3a3a3c">Aucun capteur n'est partagé entre les adhérents de ce réseau</div>`}
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function z(V){const U=oi[V];return U?`<div class="m-ob-role-perms">${U.map(O=>`
      <div class="m-rp-section">
        <div class="m-rp-section-title">${O.section}</div>
        ${O.items.map(H=>`
          <div class="m-rp-item">
            <i class="bi bi-${H.ok?"check-circle-fill":"x-circle-fill"}" style="color:${H.ok?"#30d158":"#ff3b30"}"></i>
            <span>${H.label}</span>
          </div>`).join("")}
      </div>`).join("")}</div>`:""}function k(V){const U=oi[V];return U?`<div class="m-rp-summary">${U.map(H=>{const _=H.items.filter(ne=>ne.ok).length,R=_===0?"none":_===H.items.length?"full":"partial",G={full:"check-circle-fill",partial:"dash-circle-fill",none:"x-circle"}[R],Y={full:"#30d158",partial:"#ff9500",none:"#c7c7cc"}[R],oe=H.section.replace("Exploitations adhérentes","Adhérents");return`<div class="m-rp-badge"><i class="bi bi-${G}" style="color:${Y}"></i><span>${oe}</span></div>`}).join("")}</div>`:""}function I(){const V=Object.keys(oi);return`
      <button type="button" class="m-rp-toggle" id="ob-roles-info-toggle"><span>Comparer les droits par rôle</span><i class="bi bi-chevron-down"></i></button>
      <div class="m-ob-roles-info" id="ob-roles-info" hidden>
        <div class="m-ob-roles-tabs">${V.map((U,O)=>`<button type="button" class="m-ob-roles-tab${O===0?" m-ob-roles-tab--on":""}" data-role="${U}">${U}</button>`).join("")}</div>
        <div id="ob-roles-info-detail">${z(V[0])}</div>
      </div>`}function P(){return`
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
      </div>`}function C(){return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-people"></i></div>
        <h2 class="m-ob-h2">Inviter des membres</h2>
        <p class="m-ob-sub">Ajoutez des collègues de votre exploitation. Salariés, chefs de culture, conseillers externes...</p>
        <p class="m-ob-sub" style="margin-top:6px">Chaque membre implique une licence payante additionnelle.</p>
      </div>
      ${I()}
      <div id="ob-invite-list">${P()}</div>
      <button class="m-ob-add-member" id="ob-add-member" type="button"><i class="bi bi-plus-circle"></i> Ajouter un membre</button>
      <button class="m-ob-cta" id="ob-send-invites">Continuer</button>
      <button class="m-ob-link" id="ob-skip-invite" type="button">Passer cette étape</button>
    `)}function N(){const V=e==="new-adherent",U=Xi;if(V){const H=ai.find(R=>R.id==="expert"),_=H.features.map(R=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${H.color}"></i> ${R}</li>`).join("");return E(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-gift"></i></div>
          <h2 class="m-ob-h2">Votre abonnement</h2>
          <p class="m-ob-sub">Le réseau <strong>${U.name}</strong> vous a invité à profiter de l'abonnement <strong style="color:${H.color}">Weenat Expert</strong>. Découvrez ce qu'il comprend.</p>
        </div>
        <div class="m-ob-sub-card m-ob-sub-card--on" style="--plan-color:${H.color}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${H.color}">${H.name}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${H.color};background:${H.color}">
              <i class="bi bi-check" style="color:#fff;font-size:13px"></i>
            </div>
          </div>
          <ul class="m-ob-feat-list" style="display:block;margin-top:10px">${_}</ul>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      `)}const O=ai.map(H=>{const _=H.id===a,R=H.features.map(G=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${H.color}"></i> ${G}</li>`).join("");return`
        <div class="m-ob-sub-card${_?" m-ob-sub-card--on":""}" data-plan="${H.id}" style="${_?`--plan-color:${H.color}`:""}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${H.color}">${H.name}${H.id==="expert"?' <span style="font-size:11px;font-weight:400;opacity:.8">(irrigation)</span>':""}</div>
              <div class="m-ob-sub-price">${H.price}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${_?H.color:"#c7c7cc"};background:${_?H.color:"transparent"}">
              ${_?'<i class="bi bi-check" style="color:#fff;font-size:13px"></i>':""}
            </div>
          </div>
          <button class="m-ob-feat-toggle" data-plan="${H.id}" type="button">
            Ce qui est inclus <i class="bi bi-chevron-down"></i>
          </button>
          <ul class="m-ob-feat-list" id="feat-${H.id}" style="display:none">${R}</ul>
        </div>`}).join("");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-grid-1x2"></i></div>
        <h2 class="m-ob-h2">Votre abonnement</h2>
        <p class="m-ob-sub">Choisissez le plan qui correspond à vos besoins.</p>
      </div>
      <div class="m-ob-sub-cards">${O}</div>
      <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
    `)}function X(){const V=A(),U=l+1,O=U*V.priceNum,H=O*12,_=R=>R%1===0?`${R}`:R.toFixed(1).replace(".",",");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-credit-card"></i></div>
        <h2 class="m-ob-h2">Paiement</h2>
      </div>
      <div class="m-ob-pay-summary">
        <div class="m-ob-pay-line">
          <span style="color:${V.color};font-weight:700">${V.name}</span>
          <span class="m-ob-pay-price" style="color:${V.color}">${_(V.priceNum)} €<span class="m-ob-pay-period">/licence/mois</span></span>
        </div>
        ${U>1?`
        <div class="m-ob-pay-line" style="margin-top:6px">
          <span style="font-size:13px;color:#636366">${U} licences (${l} invité${l>1?"s":""} + vous)</span>
          <span style="font-size:15px;font-weight:700;color:${V.color}">${_(O)} €/mois</span>
        </div>
        <button class="m-ob-link" id="ob-remove-invites" type="button" style="font-size:12px;color:#636366;padding:2px 0;text-align:left">Retirer les invités et ne prendre qu'une licence</button>`:""}
        <div class="m-ob-pay-divider"></div>
        <div class="m-ob-pay-line">
          <span style="font-weight:600">Total annuel</span>
          <span style="font-size:17px;font-weight:700;color:${V.color}">${_(H)} €/an</span>
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
      <button class="m-ob-cta" id="ob-next" style="background:${V.color}"><i class="bi bi-lock-fill" style="font-size:13px"></i> Payer ${_(H)} €</button>
      <p class="m-ob-legal" style="margin-top:10px"><i class="bi bi-shield-check"></i> Paiement sécurisé SSL · Données chiffrées</p>
    `)}function Q(){return E(`
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
    `)}function J(){return A(),`
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
            <p class="m-ob-sub" style="text-align:center">Un reçu de votre paiement vous a été envoyé par email à <strong>${Be.email}</strong>.</p>
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
      </div>`}function ee(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-spinner"><div class="m-ob-spinner-ring"></div></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Création de votre espace…</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?"Nous configurons votre accès et créons votre exploitation par défaut.":"Nous configurons votre exploitation."}</p>
      </div>`}function de(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Votre espace est prêt !</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?`Votre compte a été créé. Votre exploitation par défaut <strong>Exploitation ${Be.nom}</strong> est prête.`:"Une parcelle et une station météo virtuelle ont été créées à l'adresse de votre exploitation. Vous pouvez les modifier ou les supprimer."}</p>
        <button class="m-ob-cta" id="ob-finish" style="margin-top:32px">Accéder à mon exploitation</button>
      </div>`}function he(){return E(`
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
    `)}function xe(){if(a==="essential")return w(),"";const O=["P+","CHP-15/30","CAPA-30-3","EC"].map(_=>ce.find(R=>R.orgId===1&&R.model===_)).filter(Boolean);return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(_=>`
          <div class="m-ob-plan-card${d===_.id?" m-ob-plan-card--on":""}" data-psource="${_.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${_.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${_.title}</div>
                <div class="m-ob-plan-desc">${_.desc}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>

      <div id="ob-link-sensors" style="display:${d==="link"?"block":"none"}">
        <div style="font-size:13px;font-weight:600;margin-bottom:8px;color:#3a3a3c">Capteurs disponibles</div>
        <div id="ob-sensor-conflict" style="display:none;gap:8px;align-items:flex-start;padding:10px 12px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;margin-bottom:10px">
          <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;flex-shrink:0;margin-top:1px"></i>
          <span id="ob-sensor-conflict-msg" style="font-size:12px;color:#7a5a00;line-height:1.4"></span>
        </div>
        ${O.map(_=>`
          <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:.5px solid rgba(0,0,0,.08);cursor:pointer">
            <input type="checkbox" ${r.includes(_.id)?"checked":""} data-sensor-id="${_.id}" style="width:18px;height:18px;flex-shrink:0">
            <div>
              <div style="font-size:14px;font-weight:600;color:#1c1c1e">${Bs[_.model]||_.model}</div>
              <div style="font-size:12px;color:#636366;margin-top:1px">${_.model} · ${_.serial}</div>
            </div>
          </label>`).join("")}
      </div>

      <div id="ob-add-sensor-form" style="display:${d==="add"?"block":"none"}">
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
    `)}function je(){const V=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),U=new Set(["EC"]),O=ce.filter(R=>r.includes(R.id)),H=O.some(R=>V.has(R.model)),_=O.some(R=>U.has(R.model));return E(`
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
        ${H?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${qi.map(R=>`<option>${R}</option>`).join("")}
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
            ${Yt.map(R=>`<option${R==="Non irrigué"?" selected":""}>${R}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function Ue(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub">
          <strong>${f}</strong> a été créée avec succès.
          ${a==="essential"?"<br>Une station météo virtuelle a été ajoutée au centre de la parcelle.":""}
        </p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Accéder au tableau de bord</button>
      </div>`}const tt={signup:F,verify:M,emailVerified:j,orgName:q,geoloc:S,orgInfo:g,networkChoice:x,networkPick:y,networkInfo:T,invite:C,plan:N,payment:X,paymentConfirmed:J,volumeChoice:Q,creating:ee,done:de,parcelMap:he,parcelSource:xe,parcelConfig:je,parcelDone:Ue};function qe(){const V=tt[h()];if(!V)return;const U=V();U&&(b.innerHTML=U),Ee()}function W(){l=[...b.querySelectorAll("#ob-invite-list .m-ob-input--email")].filter(U=>U.value.trim()).length}function ie(){const V=window.L;V&&setTimeout(()=>{const U=b.querySelector("#ob-parcel-map");if(!U||U._leaflet_id)return;u=V.map(U,{zoomControl:!0,attributionControl:!1}).setView([c,p],15),V.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(u),V.circleMarker([c,p],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(u);const O=c+45e-5;v=V.marker([O,p],{icon:V.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),draggable:!0}).addTo(u),v.on("dragend",()=>{const H=v.getLatLng();c=H.lat,p=H.lng}),u.invalidateSize()},50)}const Z=new Set(["orgInfo","networkChoice","networkPick","plan","payment","volumeChoice"]);function se(){const V=h();if(!Z.has(V))return;const U=b.querySelector("#ob-next");if(!U)return;let O=!0;V==="orgInfo"?O=b.querySelectorAll(".m-ob-pill--on").length>0:V==="networkChoice"?O=b.querySelectorAll("[data-join].m-ob-plan-card--on").length>0:V==="networkPick"?O=b.querySelectorAll("[data-net].m-ob-net-row--on").length>0:V==="plan"?O=b.querySelectorAll(".m-ob-sub-card--on").length>0:V==="payment"?O=[...b.querySelectorAll(".m-ob-form .m-ob-input")].every(_=>_.value.trim().length>0):V==="volumeChoice"&&(O=b.querySelectorAll("[data-volume].m-ob-plan-card--on").length>0),U.disabled=!O,U.style.opacity=O?"":"0.4"}function Ee(){var U,O,H,_,R,G,Y,oe,ne,fe,re,pe,ye,ke,Ae,Se;(U=b.querySelector("#ob-back"))==null||U.addEventListener("click",B),b.querySelectorAll("#ob-next").forEach(te=>te.addEventListener("click",w)),(O=b.querySelector("#ob-pw-eye"))==null||O.addEventListener("click",()=>{s=!s;const te=b.querySelector("#ob-pw");te&&(te.type=s?"text":"password");const ae=b.querySelector("#ob-pw-eye i");ae&&(ae.className=s?"bi bi-eye":"bi bi-eye-slash")}),b.querySelectorAll(".m-ob-sub-card").forEach(te=>{te.addEventListener("click",ae=>{ae.target.closest(".m-ob-feat-toggle")||(a=te.dataset.plan,qe())})}),b.querySelectorAll(".m-ob-feat-toggle").forEach(te=>{te.addEventListener("click",ae=>{ae.stopPropagation();const ve=b.querySelector(`#feat-${te.dataset.plan}`),ze=te.querySelector(".bi");if(!ve)return;const Fe=ve.style.display!=="none";ve.style.display=Fe?"none":"block",ze.className=`bi bi-chevron-${Fe?"down":"up"}`})}),b.querySelectorAll("[data-join]").forEach(te=>{te.addEventListener("click",()=>{o=te.dataset.join==="oui",b.querySelectorAll("[data-join]").forEach(ae=>ae.classList.toggle("m-ob-plan-card--on",ae===te)),se()})}),b.querySelectorAll("[data-net]").forEach(te=>{te.addEventListener("click",()=>{b.querySelectorAll("[data-net]").forEach(ae=>{const ve=ae===te;ae.classList.toggle("m-ob-net-row--on",ve),ae.querySelector(".bi").className=`bi bi-${ve?"check-circle-fill":"circle"}`}),se()})});const V=()=>{var ve;(ve=b.querySelector("#ob-geoloc-btns"))==null||ve.remove();const te=b.querySelector("#ob-geoloc-addr");te&&(te.style.display="");const ae=window.L;ae&&setTimeout(()=>{const ze=b.querySelector("#ob-addr-map");if(!ze||ze._leaflet_id)return;const Fe=ae.map(ze,{zoomControl:!0,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}).setView([46.3021,3.2938],13);ae.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:18}).addTo(Fe),ae.marker([46.3021,3.2938]).addTo(Fe)},50)};(H=b.querySelector("#ob-geoloc-allow"))==null||H.addEventListener("click",V),(_=b.querySelector("#ob-geoloc-manual"))==null||_.addEventListener("click",V),b.querySelectorAll(".m-ob-pill").forEach(te=>{te.addEventListener("click",()=>{te.classList.toggle("m-ob-pill--on"),se()})}),(R=b.querySelector("#ob-add-member"))==null||R.addEventListener("click",()=>{const te=b.querySelector("#ob-invite-list"),ae=document.createElement("div");ae.innerHTML=P(),te.appendChild(ae.firstElementChild)}),(G=b.querySelector("#ob-invite-list"))==null||G.addEventListener("click",te=>{const ae=te.target.closest(".m-ob-invite-remove");if(!ae)return;const ve=ae.closest(".m-ob-invite-item");ve&&ve.remove()}),(Y=b.querySelector("#ob-roles-info-toggle"))==null||Y.addEventListener("click",()=>{const te=b.querySelector("#ob-roles-info-toggle"),ae=b.querySelector("#ob-roles-info"),ve=!ae.hidden;ae.hidden=ve,te.classList.toggle("m-rp-toggle--open",!ve),te.querySelector("span").textContent=ve?"Comparer les droits par rôle":"Masquer la comparaison des rôles"}),(oe=b.querySelector("#ob-roles-info"))==null||oe.addEventListener("click",te=>{const ae=te.target.closest(".m-ob-roles-tab");ae&&(b.querySelectorAll(".m-ob-roles-tab").forEach(ve=>ve.classList.toggle("m-ob-roles-tab--on",ve===ae)),b.querySelector("#ob-roles-info-detail").innerHTML=z(ae.dataset.role))}),(ne=b.querySelector("#ob-invite-list"))==null||ne.addEventListener("change",te=>{var ze;const ae=te.target.closest(".m-ob-invite-role-sel");if(!ae)return;const ve=(ze=ae.closest(".m-ob-invite-item"))==null?void 0:ze.querySelector(".m-ob-role-summary-wrap");ve&&(ve.innerHTML=k(ae.value))}),(fe=b.querySelector("#ob-remove-invites"))==null||fe.addEventListener("click",()=>{l=0,qe()}),(re=b.querySelector("#ob-send-invites"))==null||re.addEventListener("click",()=>{W(),w()}),(pe=b.querySelector("#ob-skip-invite"))==null||pe.addEventListener("click",()=>{l=0,w()}),b.querySelectorAll("[data-psource]").forEach(te=>{te.addEventListener("click",()=>{d=te.dataset.psource,b.querySelectorAll("[data-psource]").forEach(ae=>ae.classList.toggle("m-ob-plan-card--on",ae===te)),b.querySelector("#ob-link-sensors").style.display=d==="link"?"block":"none",b.querySelector("#ob-add-sensor-form").style.display=d==="add"?"block":"none"})}),b.querySelectorAll("[data-sensor-id]").forEach(te=>{te.addEventListener("change",()=>{const ae=parseInt(te.dataset.sensorId);te.checked?r.includes(ae)||r.push(ae):r=r.filter(Re=>Re!==ae);const ze=ce.filter(Re=>r.includes(Re.id)).filter(Re=>!Zn.has(Re.model)),Fe={};ze.forEach(Re=>(Kn[Re.model]||[]).forEach(Bi=>{Fe[Bi]=(Fe[Bi]||0)+1}));const bt=Object.entries(Fe).filter(([,Re])=>Re>1).map(([Re])=>Re),dt=b.querySelector("#ob-sensor-conflict"),Dt=b.querySelector("#ob-sensor-conflict-msg");dt&&Dt&&(bt.length>0?(Dt.textContent=`Plusieurs capteurs mesurent la même métrique (${bt.join(", ")}). Décochez l'un des capteurs redondants.`,dt.style.display="flex"):dt.style.display="none")})}),b.querySelectorAll("[data-volume]").forEach(te=>{te.addEventListener("click",()=>{m=te.dataset.volume==="oui",b.querySelectorAll("[data-volume]").forEach(ve=>ve.classList.toggle("m-ob-plan-card--on",ve===te));const ae=b.querySelector("#ob-volume-field");ae&&(ae.style.display=m?"block":"none"),se()})}),(ye=b.querySelector("#ob-skip-source"))==null||ye.addEventListener("click",()=>{d="smv",w()}),(ke=b.querySelector("#ob-parcel-name"))==null||ke.addEventListener("input",te=>{f=te.target.value}),h()==="parcelMap"&&ie(),h()==="creating"&&setTimeout(()=>{n++,qe()},2200),(Ae=b.querySelector("#ob-finish"))==null||Ae.addEventListener("click",()=>{b.classList.add("m-ob-overlay--out"),setTimeout(()=>{b.remove(),i()},400)}),(Se=b.querySelector("#ob-see-parcel"))==null||Se.addEventListener("click",()=>{b.classList.add("m-ob-overlay--out"),setTimeout(()=>{b.remove(),i()},400)}),b.querySelectorAll(".m-ob-form .m-ob-input").forEach(te=>{te.addEventListener("input",se)}),se()}qe()}const sa=["Ail","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Colza","Courgette","Féverole","Haricot vert","Laitue","Lin oléagineux","Luzerne","Maïs fourrage","Maïs grain","Orge d'hiver","Orge de printemps","Oignon","Pêcher","Pois protéagineux","Poireau","Poirier","Pomme de terre","Pommier","Prairie","Prunier","Ray-grass","Soja","Tomate","Tournesol","Trèfle","Vigne"];function Hs({showBack:e=!0,btnLabel:i="Ajouter",showSkip:t=!1}={}){return`
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
            ${Object.entries(Bs).map(([n,a])=>`<option value="${n}">${a} (${n})</option>`).join("")}
          </select>
          <div class="m-ob-field" id="ob-sensor-depth-field" style="display:none;margin-bottom:12px">
            <label class="m-ob-label">Profondeur d'installation</label>
            <select class="m-ob-input m-ob-input--select" id="ob-sensor-depth"></select>
          </div>
          <button class="m-ob-cta" id="ob-next" style="margin:0 0 12px"><i class="bi bi-plus-lg"></i> ${i}</button>
          ${t?'<button class="m-ob-link" id="ob-skip-source" type="button" style="margin-bottom:8px">Passer cette étape</button>':""}
        </div>
      </div>
    </div>`}function Rs(e){const i=e.querySelector("#ob-sensor-model"),t=e.querySelector("#ob-sensor-depth-field"),n=e.querySelector("#ob-sensor-depth");if(!i||!t||!n)return;const a=()=>{const o=Xn[i.value];if(!o){t.style.display="none";return}const s=[];for(let l=o[0];l<=o[1];l+=5)s.push(l);n.innerHTML=s.map(l=>`<option value="${l}">${l} cm</option>`).join(""),t.style.display=""};i.addEventListener("change",a),a()}async function na(e,i){var t,n,a,o;try{const l=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${i}`)).json();return((t=l.address)==null?void 0:t.village)||((n=l.address)==null?void 0:n.town)||((a=l.address)==null?void 0:a.city)||((o=l.address)==null?void 0:o.municipality)||""}catch{return""}}function aa(e){const i=document.getElementById("phone-screen");let t=46.3021,n=3.2938,a=null,o=null,s=46.3021+45e-5,l=3.2938,m=null,c=null,p="smv",v=[],u="",d=0;const r=["parcelMap","parcelSource","parcelData","parcelConfig","parcelDone"],f={parcelMap:"Parcelle",parcelSource:"Source de données",parcelData:"Données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"},b=document.createElement("div");b.id="parcel-creation-overlay",b.className="m-ob-overlay",i.appendChild(b);function $(){return r[d]}function h(){d++,S()}function L(){d--,S()}function A(y,T=!0){const z=$(),k=T&&d>0&&z!=="parcelDone",I=f[z]||"",P=r.filter(Q=>Q!=="parcelDone"),C=P.indexOf(z),N=C>=0?Math.round(C/P.length*100):100,X=z!=="parcelDone"?`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${N}%"></div></div>`:"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${k?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${I}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${X}
        <div class="m-ob-body">${y}</div>
      </div>`}function D(){return A(`
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
    `,!1)}function E(){return A(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(T=>`
          <div class="m-ob-plan-card${p===T.id?" m-ob-plan-card--on":""}" data-psource="${T.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${T.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${T.title}</div>
                <div class="m-ob-plan-desc">${T.desc}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
      <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
    `)}function w(){if(p==="smv")return A(`
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
      `);if(p==="link"){const y=ce.slice(0,6);return A(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-link-45deg"></i></div>
          <h2 class="m-ob-h2">Lier un capteur</h2>
          <p class="m-ob-sub">Sélectionnez les capteurs à lier à cette parcelle.</p>
        </div>
        <div style="background:#fff;border-radius:12px;overflow:hidden;border:.5px solid rgba(0,0,0,.1);margin-bottom:16px">
          ${y.map((T,z)=>`
            <label style="display:flex;align-items:center;gap:12px;padding:12px 14px;${z<y.length-1?"border-bottom:.5px solid rgba(0,0,0,.08)":""};cursor:pointer">
              <input type="checkbox" ${v.includes(T.id)?"checked":""} data-sensor-id="${T.id}" style="width:18px;height:18px;flex-shrink:0">
              <div>
                <div style="font-size:14px;font-weight:600">${T.model}</div>
                <div style="font-size:12px;color:#636366">${T.serial}</div>
              </div>
            </label>`).join("")}
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
        <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
      `)}return Hs({showBack:!0,btnLabel:"Continuer",showSkip:!0})}function B(){const y=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),T=new Set(["EC"]),z=ce.filter(C=>v.includes(C.id)),k=z.some(C=>y.has(C.model)),I=z.some(C=>T.has(C.model)),P=Yt.filter(C=>C!=="Non renseigné");return u||na(t,n).then(C=>{if(!C)return;u=C;const N=b.querySelector("#ob-parcel-name");N&&!N._edited&&(N.value=C)}),A(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${u}" placeholder="Chargement…">
        </div>
        ${k?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${qi.map(C=>`<option>${C}</option>`).join("")}
          </select>
        </div>
        ${I?`
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
            ${sa.map(C=>`<option>${C}</option>`).join("")}
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
            ${P.map(C=>`<option>${C}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function F(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub"><strong>${u||"La parcelle"}</strong> a été créée avec succès.</p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function M(){const y=window.L;y&&setTimeout(()=>{const T=b.querySelector("#ob-parcel-map");if(!T||T._leaflet_id)return;o=y.map(T,{zoomControl:!0,attributionControl:!1}).setView([t,n],15),y.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(o),y.circleMarker([t,n],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(o);const z=y.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});a=y.marker([t+45e-5,n],{icon:z,draggable:!0}).addTo(o),a.on("dragend",()=>{const k=a.getLatLng();t=k.lat,n=k.lng}),o.on("click",k=>{t=k.latlng.lat,n=k.latlng.lng,a.setLatLng([t,n])}),o.invalidateSize()},50)}function j(){const y=window.L;y&&(s=t+45e-5,l=n,setTimeout(()=>{const T=b.querySelector("#ob-smv-map");if(!T||T._leaflet_id)return;c=y.map(T,{zoomControl:!0,attributionControl:!1}).setView([t,n],15),y.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(c),y.circleMarker([t,n],{radius:8,color:"#fff",weight:2,fillColor:"#E05252",fillOpacity:1}).addTo(c);const z=y.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#0172A4;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});m=y.marker([s,l],{icon:z,draggable:!0}).addTo(c),m.on("dragend",()=>{const k=m.getLatLng();s=k.lat,l=k.lng}),c.on("click",k=>{s=k.latlng.lat,l=k.latlng.lng,m.setLatLng([s,l])}),c.invalidateSize()},50))}const q={parcelMap:D,parcelSource:E,parcelData:w,parcelConfig:B,parcelDone:F};function S(){var T;const y=(T=q[$()])==null?void 0:T.call(q);y&&(b.innerHTML=y),x()}function g(){b.classList.add("m-ob-overlay--out"),setTimeout(()=>{b.remove(),e()},400)}function x(){var T,z,k,I,P;(T=b.querySelector("#ob-back"))==null||T.addEventListener("click",L),(z=b.querySelector("#ob-close"))==null||z.addEventListener("click",g),b.querySelectorAll("#ob-next").forEach(C=>C.addEventListener("click",h)),Rs(b),b.querySelectorAll("[data-psource]").forEach(C=>{C.addEventListener("click",()=>{p=C.dataset.psource,b.querySelectorAll("[data-psource]").forEach(N=>N.classList.toggle("m-ob-plan-card--on",N===C))})}),b.querySelectorAll("[data-sensor-id]").forEach(C=>{C.addEventListener("change",()=>{const N=parseInt(C.dataset.sensorId);C.checked?v.includes(N)||v.push(N):v=v.filter(X=>X!==N)})}),(k=b.querySelector("#ob-skip-source"))==null||k.addEventListener("click",()=>{p="smv",h()});const y=b.querySelector("#ob-parcel-name");y&&y.addEventListener("input",C=>{C.target._edited=!0,u=C.target.value}),$()==="parcelMap"&&M(),$()==="parcelData"&&p==="smv"&&j(),(I=b.querySelector("#ob-see-parcel"))==null||I.addEventListener("click",g),(P=b.querySelector("#ob-finish"))==null||P.addEventListener("click",g)}S()}function oa(e){const i=document.getElementById("phone-screen");let t=0;const n=["sensorAdd","sensorDone"],a=document.createElement("div");a.id="sensor-creation-overlay",a.className="m-ob-overlay",i.appendChild(a);function o(){return n[t]}function s(){t++,v()}function l(){return Hs({showBack:!1,btnLabel:"Enregistrer le capteur",showSkip:!1})}function m(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Capteur ajouté !</h2>
        <p class="m-ob-sub">Votre capteur a été enregistré avec succès.</p>
        <button class="m-ob-cta" id="ob-see-sensor" style="margin-top:32px"><i class="bi bi-broadcast"></i> Voir le capteur</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function c(){a.classList.add("m-ob-overlay--out"),setTimeout(()=>{a.remove(),e()},400)}function p(){var u,d,r,f;(u=a.querySelector("#ob-close"))==null||u.addEventListener("click",c),(d=a.querySelector("#ob-next"))==null||d.addEventListener("click",s),(r=a.querySelector("#ob-see-sensor"))==null||r.addEventListener("click",c),(f=a.querySelector("#ob-finish"))==null||f.addEventListener("click",c),Rs(a)}function v(){var r;const u={sensorAdd:l,sensorDone:m},d=(r=u[o()])==null?void 0:r.call(u);d&&(a.innerHTML=d),p()}v()}function Tt(e){var i;return((i=e.integrations)==null?void 0:i.some(t=>t.startsWith("IRRÉ-LIS")))??!1}const xi="weenat-irrelis-config";function vt(e){try{const l=JSON.parse(localStorage.getItem(xi)||"{}");if(l[e])return l[e]}catch{}const t=60+e*13%50,n=Math.round(t/3),a=["Maïs","Maïs","Maïs","Blé","Maïs","Tournesol","Orge","Maïs"],o=a[e%a.length],s=String(5+e%16).padStart(2,"0");return{ru:t,rfu:n,culture:o,semisDate:`2026-04-${s}`}}function la(e,i){try{const t=JSON.parse(localStorage.getItem(xi)||"{}");t[e]={...vt(e),...i},localStorage.setItem(xi,JSON.stringify(t))}catch{}}const Os=e=>`weenat-il-events-${e}`;function Ns(e){try{return JSON.parse(localStorage.getItem(Os(e)))||[]}catch{return[]}}function ra(e,i){try{localStorage.setItem(Os(e),JSON.stringify(i))}catch{}}function ca(e,i,t){const n=[];let a=!0,o=5+Math.floor(Math.abs(Math.sin(e*.13))*5);for(let s=0;s<i;s++)if(o<=0&&(a=!a,o=a?4+Math.floor(Math.abs(Math.sin(e*1337+s*.53))*7):1+Math.floor(Math.abs(Math.sin(e*2997+s*.91))*2.9)),o--,a)n.push(0);else{const l=8+Math.floor(Math.abs(Math.sin(e*7919+s*1.73))*22);n.push(s>=t?Math.round(l*.6):l)}return n}function Et(e,i=14){const t=vt(e.id),{ru:n,rfu:a}=t,o=e.id,s=new Date("2026-04-01T00:00:00"),l=new Date("2026-10-01T00:00:00"),m=new Date;m.setHours(0,0,0,0);const c=864e5,p=Math.round((l-s)/c),v=Math.max(0,Math.min(Math.round((m-s)/c),p)),u=p,d=ca(o,u,v),r={};for(const w of Ns(e.id))r[w.iso]||(r[w.iso]={pluie:0,irrigation:0}),r[w.iso][w.type]=(r[w.iso][w.type]||0)+w.mm;const f=[],b=[];for(let w=0;w<u;w++){const{ru:B,rfu:F}=ua(t,s,w);f.push(B),b.push(F)}const $=[],h=[],L=[],A=[],D=[];let E=f[0]*.88;for(let w=0;w<u;w++){const B=new Date(s.getTime()+w*c).toISOString().split("T")[0],F=r[B]||{pluie:0,irrigation:0},M=Math.max(.8,Math.min(5,1+4*Math.pow(Math.max(0,w/150),.6)+Math.sin(o*999+w*.57)*.3)),j=d[w]+F.pluie,q=F.irrigation;L.push(+M.toFixed(1)),h.push(j),A.push(q);const S=f[w];E=E-M+j+q;const g=Math.max(0,E-S),x=Math.min(g,(j+q)*.5);D.push(+x.toFixed(1)),E=Math.max(0,Math.min(S,E)),$.push(+E.toFixed(1))}return{reservoir:$,pluie:h,etp:L,drainage:D,irrigation:A,nDays:v,nFcDays:i,ru:n,rfu:a,cfg:t,apr1:s,ruArr:f,rfuArr:b}}function Di(e,i){const t=Et(e,14),n=t.nDays;switch(i){case"Aujourd'hui":return t.reservoir[n]??0;case"Demain":return t.reservoir[n+1]??0;case"J+3":return t.reservoir[n+3]??0;case"J+5":return t.reservoir[n+5]??0;default:return t.reservoir[n]??0}}function Zt(e,i,t){return e>t?"#007aff":e>=i?"#24B066":e>=t*.15?"#E8A020":"#E05252"}function Vs(e,i,t,n){if(e==="7j"){const a=Math.max(0,i-7);return{startIdx:a,displayLen:Math.min(n-a,7+t)}}if(e==="30j"){const a=Math.max(0,i-30);return{startIdx:a,displayLen:Math.min(n-a,30+t)}}return{startIdx:0,displayLen:n}}const da={Maïs:[{label:"Levée",daysAfter:10},{label:"4 feuilles",daysAfter:22},{label:"10 feuilles",daysAfter:38},{label:"15 feuilles",daysAfter:52},{label:"Floraison",daysAfter:68},{label:"Sl. laiteux",daysAfter:83},{label:"70% humidité",daysAfter:100}],Blé:[{label:"Levée",daysAfter:12},{label:"Tallage",daysAfter:35},{label:"Épiaison",daysAfter:95},{label:"Floraison",daysAfter:110},{label:"Maturité",daysAfter:150}],Orge:[{label:"Levée",daysAfter:10},{label:"Tallage",daysAfter:30},{label:"Épiaison",daysAfter:85},{label:"Floraison",daysAfter:95},{label:"Maturité",daysAfter:135}],Colza:[{label:"Levée",daysAfter:8},{label:"4-6 feuilles",daysAfter:25},{label:"Floraison",daysAfter:70},{label:"Maturité",daysAfter:110}],Tournesol:[{label:"Levée",daysAfter:10},{label:"Bouton étoilé",daysAfter:45},{label:"Floraison",daysAfter:65},{label:"Maturité",daysAfter:105}],Sorgho:[{label:"Levée",daysAfter:12},{label:"Tallage",daysAfter:30},{label:"Floraison",daysAfter:75},{label:"Maturité",daysAfter:115}],Betterave:[{label:"Levée",daysAfter:15},{label:"Couverture du sol",daysAfter:55},{label:"Grossissement racine",daysAfter:90},{label:"Récolte",daysAfter:160}]},es=[{daysAfter:0,factor:.1},{daysAfter:10,factor:.22},{daysAfter:22,factor:.42},{daysAfter:38,factor:.66},{daysAfter:52,factor:.85},{daysAfter:68,factor:1},{daysAfter:83,factor:1},{daysAfter:100,factor:.97}];function ua(e,i,t){if(e.culture!=="Maïs")return{ru:e.ru,rfu:e.rfu};const n=new Date(e.semisDate+"T00:00:00"),a=Math.round((n-i)/864e5),o=t-a;if(o<0)return{ru:Math.round(e.ru*.08),rfu:Math.round(e.rfu*.08)};let s=es[0].factor;for(const c of es)o>=c.daysAfter&&(s=c.factor);const l=Math.round(e.ru*s),m=Math.round(l*e.rfu/e.ru);return{ru:l,rfu:m}}function $i(e){if(e.length<2)return"";let i=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let t=0;t<e.length-1;t++){const n=e[Math.max(t-1,0)],a=e[t],o=e[t+1],s=e[Math.min(t+2,e.length-1)],l=a.x+(o.x-n.x)/6,m=a.y+(o.y-n.y)/6,c=o.x-(s.x-a.x)/6,p=o.y-(s.y-a.y)/6;i+=` C${l.toFixed(1)},${m.toFixed(1)} ${c.toFixed(1)},${p.toFixed(1)} ${o.x.toFixed(1)},${o.y.toFixed(1)}`}return i}const Js=["jan.","fév.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],Ws={t:24,r:38,b:28,l:52},wi={t:8,r:38,b:28,l:52};function pa(e,i,t,n,a){const{reservoir:o,nDays:s,nFcDays:l,cfg:m,apr1:c,ruArr:p,rfuArr:v}=t,u=Ws,d=e-u.l-u.r,r=i-u.t-u.b,f=o.map((O,H)=>O-p[H]),b=v.map((O,H)=>O-p[H]),$=p.map(O=>-O),h=f.slice(n,n+a),L=p.slice(n,n+a),A=Math.min(0,...h),D=Math.max(...L),w=n===0&&a===o.length?Math.min(A,-D)*1.05:Math.min(A*1.15,-5),B=O=>u.t+Math.max(w,Math.min(0,O))/w*r,F=O=>u.l+(O-n)/Math.max(a-1,1)*d,M=u.t+r,j=u.t;function q(O){let H="";for(let _=0;_<a;_++){const R=Math.min(n+_,O.length-1),G=F(n+_).toFixed(1),Y=_>0?O[Math.min(n+_-1,O.length-1)]:null;Y!==null&&O[R]!==Y&&(H+=`${G},${B(Y).toFixed(1)} `),H+=`${G},${B(O[R]).toFixed(1)} `}return H.trim()}const S=q(b),g=S.split(" ").reverse().join(" "),y=q($).split(" ").reverse().join(" "),T=`${u.l},${j} ${(u.l+d).toFixed(1)},${j} ${g}`,z=`${S} ${y}`,k=Math.min(s,b.length-1),I=(B(b[k])-5).toFixed(1),P=`
    <polygon points="${T}" fill="#24B066" opacity="0.1" clip-path="url(#il-c)"/>
    <polygon points="${z}"   fill="#E05252" opacity="0.1" clip-path="url(#il-c)"/>
    <polyline points="${S}" fill="none" stroke="#24B066" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.65" clip-path="url(#il-c)"/>
    <text x="${(u.l+d-4).toFixed(1)}" y="${I}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#24B066" font-weight="700">RFU</text>`,C=new Date(m.semisDate+"T00:00:00"),N=Math.round((C-c)/864e5),X=(da[m.culture]||[]).map(O=>{const H=N+O.daysAfter;if(H<n||H>=n+a)return"";const _=F(H).toFixed(1);return`<line x1="${_}" y1="${j}" x2="${_}" y2="${M}" stroke="#4CAF50" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.55"/>
<circle class="il-stade-dot" data-label="${O.label}" cx="${_}" cy="${M}" r="9" fill="transparent" style="cursor:pointer"/>
<circle cx="${_}" cy="${M}" r="4.5" fill="#4CAF50" stroke="#fff" stroke-width="1.5" style="pointer-events:none"/>`}).join("");let Q="",J="";for(let O=n;O<n+a;O++){const H=new Date(c.getTime()+O*864e5);if(H.getDate()===1){const _=F(O).toFixed(1);Q+=`<line x1="${_}" y1="${u.t}" x2="${_}" y2="${M}" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-dasharray="3,4"/>`;const R=new Date(H.getFullYear(),H.getMonth()+1,1),G=Math.round((R-c)/864e5),Y=Math.min(G,n+a-1),oe=F((O+Y)/2).toFixed(1),ne=String(H.getFullYear()).slice(-2),fe=`${Js[H.getMonth()]} ${ne}`;J+=`<text x="${oe}" y="${i-6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${fe}</text>`}}const ee=`
    <text x="${u.l-6}" y="${(B(0)+11).toFixed(1)}" text-anchor="end" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">0</text>
    <text x="${u.l-6}" y="${(B(w)-3).toFixed(1)}" text-anchor="end" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${Math.round(w)}</text>
    <text x="${u.l-6}" y="${u.t-7}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`,he=f.slice(n,n+a).map((O,H)=>({x:F(n+H),y:B(O)})),xe=s-n,je=he.slice(0,Math.min(Math.max(xe+1,1),he.length)),Ue=Math.min(xe+l+1,he.length),tt=xe>=0&&xe<he.length?he.slice(xe,Ue):[],qe=$i(je),W=tt.length>=2?$i(tt):"",ie=F(Math.max(n,Math.min(s,n+a-1))).toFixed(1),Z=je.length?je[je.length-1].x.toFixed(1):ie,se=qe?`${qe} L${Z},${j} L${u.l},${j} Z`:"",Ee=Math.max(u.l,Math.min(u.l+d,+ie)),V=u.l+d-Ee,U=V>0?`<rect x="${Ee.toFixed(1)}" y="${u.t}" width="${V.toFixed(1)}" height="${r}" fill="url(#il-hatch)" clip-path="url(#il-c)"/>`:"";return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <defs>
      <clipPath id="il-c"><rect x="${u.l}" y="${u.t}" width="${d}" height="${r}"/></clipPath>
      <linearGradient id="il-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0172A4" stop-opacity="0.01"/>
        <stop offset="100%" stop-color="#0172A4" stop-opacity="0.2"/>
      </linearGradient>
      <pattern id="il-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.22)" stroke-width="3"/>
      </pattern>
    </defs>
    ${P}
    ${U}
    <g clip-path="url(#il-c)">${Q}</g>
    ${se?`<path d="${se}" fill="url(#il-g)" clip-path="url(#il-c)"/>`:""}
    ${qe?`<path d="${qe}" fill="none" stroke="#0172A4" stroke-width="2.5" stroke-linejoin="round" clip-path="url(#il-c)"/>`:""}
    ${W?`<path d="${W}" fill="none" stroke="#0172A4" stroke-width="2" stroke-dasharray="7,5" stroke-linejoin="round" opacity="0.7" clip-path="url(#il-c)"/>`:""}
    <line x1="${ie}" y1="${u.t}" x2="${ie}" y2="${M}" stroke="#1c1c1e" stroke-width="2"/>
    <text x="${ie}" y="${u.t-6}" text-anchor="middle" font-size="11" font-family="-apple-system,sans-serif" fill="#1c1c1e" font-weight="700">Aujourd'hui</text>
    ${ee}
    ${J}
    <rect x="${u.l}" y="${u.t}" width="${d}" height="${r}" fill="none" stroke="rgba(0,0,0,.07)" stroke-width="1"/>
    ${X}
  </svg>`}function ma(e,i,t,n,a){const{pluie:o,etp:s,drainage:l,irrigation:m,nDays:c,nFcDays:p,apr1:v}=t,u=wi,d=e-u.l-u.r,r=i-u.t-u.b,f=u.t+r/2,b=o.slice(n,n+a),$=s.slice(n,n+a),h=l.slice(n,n+a),L=m.slice(n,n+a),A=c+p,D=I=>n+I<=A,E=Math.max(...b.map((I,P)=>(D(P)?I:0)+(L[P]||0)),1),w=Math.max(...$.map((I,P)=>D(P)?I+(h[P]||0):0),1),B=Math.max(E,w,1),F=r/2,M=Math.max(1.5,d/a*.8),j=I=>u.l+I/Math.max(a-1,1)*d-M/2;let q="";for(let I=0;I<a;I++){const P=!D(I),C=P?0:b[I],N=P?0:$[I],X=P?0:h[I],Q=C/B*F,J=L[I]/B*F,ee=N/B*F,de=X/B*F,he=j(I).toFixed(1),xe=M.toFixed(1);C>0&&(q+=`<rect x="${he}" y="${(f-Q).toFixed(1)}" width="${xe}" height="${Q.toFixed(1)}" fill="#2E75B6" opacity="0.85"/>`),L[I]>0&&(q+=`<rect x="${he}" y="${(f-Q-J).toFixed(1)}" width="${xe}" height="${J.toFixed(1)}" fill="#FF8C00" opacity="0.85"/>`),P||(q+=`<rect x="${he}" y="${f.toFixed(1)}" width="${xe}" height="${ee.toFixed(1)}" fill="#00887E" opacity="0.75"/>`),X>0&&(q+=`<rect x="${he}" y="${(f+ee).toFixed(1)}" width="${xe}" height="${de.toFixed(1)}" fill="#8B1A1A" opacity="0.75"/>`)}const S=+B.toFixed(1),g=[`<text x="${u.l-6}" y="${(u.t+13).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">+${S}</text>`,`<text x="${u.l-6}" y="${(f+4).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">0</text>`,`<text x="${u.l-6}" y="${(u.t+r).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">-${S}</text>`,`<text x="${u.l-6}" y="${u.t-1}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`].join("");let x="";for(let I=0;I<a;I++){const P=n+I,C=new Date(v.getTime()+P*864e5);if(C.getDate()===1){const N=new Date(C.getFullYear(),C.getMonth()+1,1),X=Math.round((N-v)/864e5),Q=Math.min(X-n,a-1),J=(I+Q)/2,ee=(u.l+J/Math.max(a-1,1)*d).toFixed(1),de=String(C.getFullYear()).slice(-2);x+=`<text x="${ee}" y="${i-6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${Js[C.getMonth()]} ${de}</text>`;const he=(u.l+I/Math.max(a-1,1)*d).toFixed(1);x+=`<line x1="${he}" y1="${u.t}" x2="${he}" y2="${u.t+r}" stroke="rgba(0,0,0,.12)" stroke-width="1" stroke-dasharray="3,4"/>`}}const y=c-n,T=y>=0&&y<a?(u.l+y/Math.max(a-1,1)*d).toFixed(1):null,z=T!==null?Math.max(u.l,Math.min(u.l+d,+T)):null,k=z!==null&&u.l+d-z>0?`<rect x="${z.toFixed(1)}" y="${u.t}" width="${(u.l+d-z).toFixed(1)}" height="${r}" fill="url(#il-hatch-h)"/>`:"";return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <defs>
      <pattern id="il-hatch-h" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.22)" stroke-width="3"/>
      </pattern>
    </defs>
    <line x1="${u.l}" y1="${f.toFixed(1)}" x2="${u.l+d}" y2="${f.toFixed(1)}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>
    ${k}
    ${q}
    ${T?`<line x1="${T}" y1="${u.t}" x2="${T}" y2="${u.t+r}" stroke="#1c1c1e" stroke-width="2"/>`:""}
    ${g}
    ${x}
    <rect x="${u.l}" y="${u.t}" width="${d}" height="${r}" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="1"/>
  </svg>`}function va(){const e=(o,s)=>`<svg width="20" height="10" style="flex-shrink:0"><line x1="0" y1="5" x2="20" y2="5" stroke="${o}" stroke-width="2.5"${s?' stroke-dasharray="5,3"':""}/></svg>`,i=(o,s)=>`<span style="display:inline-block;width:14px;height:10px;background:${o};opacity:${s};border-radius:2px;flex-shrink:0"></span>`,t=o=>`<span style="display:inline-block;width:10px;height:10px;background:${o};border-radius:2px;flex-shrink:0"></span>`,n=(o,s)=>`<span style="display:flex;align-items:center;gap:6px;font-size:13px;color:#3a3a3c"><span style="flex-shrink:0">${o}</span><span>${s}</span></span>`,a=o=>`<div style="display:flex;flex-direction:column;gap:10px">${o.join("")}</div>`;return`<div style="display:flex;flex-direction:column;gap:16px;padding:4px 0">
    ${a([n(e("#0172A4",!1),"Déficit (réserve)"),n(e("#0172A4",!0),"Prévision J+14"),n(i("#24B066","1"),"RFU — réserve facilement utilisable"),n(i("#E05252","1"),"Réservoir de survie")])}
    ${a([n(t("#2E75B6"),"Pluie"),n(t("#FF8C00"),"Irrigation"),n(t("#00887E"),"ETP"),n(t("#8B1A1A"),"Drainage")])}
  </div>`}function ba(e,i){const{nDays:t,nFcDays:n,pluie:a,etp:o,drainage:s,irrigation:l}=e,m=e.reservoir.length,{startIdx:c,displayLen:p}=Vs(i,t,n,m),v=Math.min(c+p,t),u=r=>r.slice(c,v).reduce((f,b)=>f+b,0),d=(r,f,b)=>`<div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px;padding:11px 0;border-bottom:.5px solid rgba(0,0,0,.07)">
      <span style="font-size:14px;color:#3a3a3c">${f}</span>
      <span style="font-size:15px;font-weight:700;color:${r}">${b} mm</span>
    </div>`;return`<div style="padding:0 0 4px">
    ${d("#2E75B6","Pluie",Math.round(u(a)))}
    ${d("#00887E","ETP",+u(o).toFixed(1))}
    ${d("#FF8C00","Irrigation",Math.round(u(l)))}
    ${d("#8B1A1A","Drainage",+u(s).toFixed(1))}
  </div>`}function fa(e,i,t,n,a){const{reservoir:o,ru:s,rfu:l,nDays:m,nFcDays:c,apr1:p,ruArr:v,rfuArr:u,pluie:d,etp:r,drainage:f,irrigation:b}=i,$=Ws,h=a+wi.t,L=e.clientWidth,A=e.clientHeight,D=L-$.l-$.r;e.style.position="relative";const E=document.createElement("div");E.style.cssText="position:absolute;background:rgba(28,28,30,.88);color:#fff;border-radius:10px;padding:6px 11px;font-size:13px;font-weight:600;pointer-events:none;display:none;white-space:nowrap;z-index:20;transform:translate(-50%,-100%);margin-top:-10px;font-family:-apple-system,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.25)";const w=document.createElement("div");w.style.cssText=`position:absolute;width:1px;background:rgba(100,100,100,.35);pointer-events:none;display:none;top:${$.t}px`,w.style.height=A-$.t-wi.b+"px",e.appendChild(w),e.appendChild(E);const B=g=>{const x=Math.max(0,Math.min(1,(g-$.l)/D));return Math.max(0,Math.min(o.length-1,Math.round(t+x*(n-1))))},F=(g,x,y)=>{const T=o[g],z=g>=m,k=v?v[Math.min(g,v.length-1)]:s,I=u?u[Math.min(g,u.length-1)]:l,P=+(T-k).toFixed(1),C=Zt(T,I,k),N=j(g);E.innerHTML=`<span style="color:${C}">${P} mm</span>&ensp;<span style="font-size:11px;opacity:.7">${N}${z?" ·&thinsp;prév.":""}</span>`,E.style.left=Math.max(60,Math.min(e.clientWidth-60,x))+"px",E.style.top=Math.min(y,a-20)+"px",E.style.display="block"},M=(g,x,y)=>{const T=j(g),k=[...g>m+c?[]:[["#2E75B6","Pluie",d[g]],["#00887E","ETP",r[g]],["#8B1A1A","Drainage",f[g]]],["#FF8C00","Irrigation",b[g]]].filter(([,,I])=>I>0);E.innerHTML=k.length?k.map(([I,P,C])=>`<span style="color:${I}">${P} ${C} mm</span>`).join("&ensp;·&ensp;")+`&ensp;<span style="font-size:11px;opacity:.7">${T}</span>`:`<span style="opacity:.7">Aucun mouvement</span>&ensp;<span style="font-size:11px;opacity:.7">${T}</span>`,E.style.left=Math.max(60,Math.min(e.clientWidth-60,x))+"px",E.style.top=Math.max(h+14,Math.min(y,e.clientHeight-10))+"px",E.style.display="block"},j=g=>new Date(p.getTime()+g*864e5).toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),q=(g,x)=>{const y=e.getBoundingClientRect(),T=x-y.top;if(T>e.clientHeight){S();return}const z=g-y.left,k=B(z);T<=a?F(k,z,T):M(k,z,T),w.style.left=z+"px",w.style.display="block"},S=()=>{E.style.display="none",w.style.display="none"};e.addEventListener("mousemove",g=>q(g.clientX,g.clientY)),e.addEventListener("mouseleave",S),e.addEventListener("touchmove",g=>{g.preventDefault(),q(g.touches[0].clientX,g.touches[0].clientY)},{passive:!1}),e.addEventListener("touchend",S)}function ha(e,i,t="saison"){const n=e.clientWidth,a=e.clientHeight;if(!n||!a)return;const{nDays:o,nFcDays:s}=i,l=i.reservoir.length,{startIdx:m,displayLen:c}=Vs(t,o,s,l),p=Math.round(a*3/5),v=a-p;e.innerHTML=pa(n,p,i,m,c)+ma(n,v,i,m,c),fa(e,i,m,c,p),e.querySelectorAll(".il-stade-dot").forEach(u=>{u.addEventListener("click",()=>K(u.dataset.label))})}function ga(e,i){const t=vt(e.id),n=document.createElement("div");n.innerHTML=`
    <div style="padding:4px 0 8px">
      <div class="m-form-label">Culture</div>
      <select id="il-culture" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;margin-bottom:14px">
        ${["Maïs","Blé","Orge","Colza","Tournesol","Sorgho","Betterave"].map(o=>`<option${o===t.culture?" selected":""}>${o}</option>`).join("")}
      </select>
      <div class="m-form-label">Date de semis</div>
      <input id="il-semis" type="date" value="${t.semisDate}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
      <div class="m-form-label">Réserve utile (RU) — mm</div>
      <input id="il-ru" type="number" value="${t.ru}" min="20" max="200" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
      <div class="m-form-label">RFU (réserve facilement utilisable) — mm</div>
      <input id="il-rfu" type="number" value="${t.rfu}" min="5" max="150" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
      <button id="il-cfg-save" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Enregistrer</button>
    </div>`;const a=ue({title:`Configuration — ${e.name}`,body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelector("#il-cfg-save").addEventListener("click",()=>{la(e.id,{culture:n.querySelector("#il-culture").value,semisDate:n.querySelector("#il-semis").value,ru:+n.querySelector("#il-ru").value||t.ru,rfu:+n.querySelector("#il-rfu").value||t.rfu}),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{a.remove(),i==null||i()},280),K("Configuration enregistrée")})}function ya(e,i){let t=[...Ns(e.id)],n=!0,a=!0,o=null;function s(c){return new Date(c+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function l(){const p=[...t.filter(u=>u.type==="pluie"&&n||u.type==="irrigation"&&a)].sort((u,d)=>d.iso.localeCompare(u.iso)),v=p.map(u=>{const d=t.indexOf(u),r=u.type==="pluie",f=r?"rgba(46,117,182,.12)":"rgba(255,140,0,.12)",b=r?"#2E75B6":"#FF8C00";return`
        <div style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:.5px solid rgba(0,0,0,.07)">
          <div style="width:32px;height:32px;border-radius:50%;background:${f};display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="bi ${r?"bi-cloud-rain":"bi-droplet-fill"}" style="color:${b};font-size:14px"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:600;color:#1c1c1e">${r?"Pluie":"Irrigation"}</div>
            <div style="font-size:12px;color:#8e8e93">${s(u.iso)}</div>
          </div>
          <div style="font-size:15px;font-weight:700;color:${b};margin-right:4px">${u.mm} mm</div>
          <button class="gpi-edit" data-idx="${d}" style="background:none;border:none;cursor:pointer;padding:4px;color:#8e8e93"><i class="bi bi-pencil" style="font-size:14px"></i></button>
          <button class="gpi-del" data-idx="${d}" style="background:none;border:none;cursor:pointer;padding:4px;color:#E05252"><i class="bi bi-trash" style="font-size:14px"></i></button>
        </div>`}).join("");o.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:.5px solid rgba(0,0,0,.1);background:#fff;flex-shrink:0">
        <button id="gpi-back" style="color:#0172A4;background:none;border:none;font-size:15px;cursor:pointer;display:flex;align-items:center;gap:4px"><i class="bi bi-chevron-left"></i> Irré-LIS</button>
        <span style="font-size:16px;font-weight:700;color:#1c1c1e;flex:1;text-align:center">Pluies &amp; irrigations</span>
        <div style="width:80px"></div>
      </div>
      <div style="display:flex;gap:20px;padding:12px 16px 8px;flex-shrink:0">
        <label style="display:flex;align-items:center;gap:7px;font-size:14px;font-weight:600;color:#2E75B6;cursor:pointer">
          <input type="checkbox" class="gpi-check" data-t="pluie" ${n?"checked":""} style="width:18px;height:18px;accent-color:#2E75B6;cursor:pointer">
          Pluies
        </label>
        <label style="display:flex;align-items:center;gap:7px;font-size:14px;font-weight:600;color:#FF8C00;cursor:pointer">
          <input type="checkbox" class="gpi-check" data-t="irrigation" ${a?"checked":""} style="width:18px;height:18px;accent-color:#FF8C00;cursor:pointer">
          Irrigations
        </label>
      </div>
      <div style="display:flex;gap:8px;padding:0 16px 12px;flex-shrink:0">
        <button id="gpi-add-pluie" style="flex:1;background:rgba(46,117,182,.1);color:#2E75B6;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Pluie</button>
        <button id="gpi-add-irrig" style="flex:1;background:rgba(255,140,0,.1);color:#FF8C00;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Irrigation</button>
      </div>
      <div style="overflow-y:auto;flex:1;background:#f2f2f7">
        ${p.length?v:'<p style="color:#8e8e93;text-align:center;padding:32px 0;font-size:14px">Aucun événement</p>'}
      </div>
      <div style="padding:10px 16px 20px;background:#fff;border-top:.5px solid rgba(0,0,0,.1);flex-shrink:0">
        <button id="gpi-save" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:14px;padding:15px;font-size:16px;font-weight:700;cursor:pointer">Enregistrer (${t.length})</button>
      </div>`,o.querySelector("#gpi-back").addEventListener("click",()=>be()),o.querySelector("#gpi-add-pluie").addEventListener("click",()=>m("pluie")),o.querySelector("#gpi-add-irrig").addEventListener("click",()=>m("irrigation")),o.querySelector("#gpi-save").addEventListener("click",()=>{ra(e.id,t),be(),i==null||i(),K(`${t.length} événement(s) enregistré(s)`)}),o.querySelectorAll(".gpi-check").forEach(u=>{u.addEventListener("change",()=>{u.dataset.t==="pluie"?n=u.checked:a=u.checked,l()})}),o.querySelectorAll(".gpi-edit").forEach(u=>{u.addEventListener("click",()=>{m(t[+u.dataset.idx].type,+u.dataset.idx)})}),o.querySelectorAll(".gpi-del").forEach(u=>{u.addEventListener("click",()=>{t.splice(+u.dataset.idx,1),l()})})}function m(c,p=-1){var f;const v=p>=0?t[p]:null,u=document.createElement("div");u.innerHTML=`
      <div style="padding:4px 0 8px">
        <div class="m-form-label">Date</div>
        <input id="gpi-date" type="date" value="${(v==null?void 0:v.iso)??new Date().toISOString().split("T")[0]}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
        <div class="m-form-label">Quantité (mm)</div>
        <input id="gpi-mm" type="number" value="${(v==null?void 0:v.mm)??""}" placeholder="ex : 25" min="0" max="300" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
        <button id="gpi-sheet-save" style="width:100%;background:${c==="pluie"?"#2E75B6":"#FF8C00"};color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">${p>=0?"Modifier":"Ajouter"}</button>
        ${p>=0?`<button id="gpi-sheet-transform" style="width:100%;background:none;border:none;color:#8e8e93;font-size:14px;font-weight:600;cursor:pointer;padding:12px 0 0;text-align:center">Transformer en ${c==="pluie"?"irrigation":"pluie"}</button>`:""}
      </div>`;const d=c==="pluie"?p>=0?"Modifier la pluie":"Ajouter une pluie":p>=0?"Modifier l'irrigation":"Ajouter une irrigation",r=ue({title:d,body:u,doneLabel:"Fermer",onDone:()=>{}});u.querySelector("#gpi-sheet-save").addEventListener("click",()=>{const b=u.querySelector("#gpi-date").value,$=parseFloat(u.querySelector("#gpi-mm").value);if(!b||isNaN($)||$<=0)return;const h={type:c,iso:b,mm:+$.toFixed(1)};p>=0?t[p]=h:t.push(h),r.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{r.remove(),l()},280)}),(f=u.querySelector("#gpi-sheet-transform"))==null||f.addEventListener("click",()=>{const b=c==="pluie"?"irrigation":"pluie";t[p]={...t[p],type:b},r.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{r.remove(),l()},280),K(b==="irrigation"?"Transformé en irrigation":"Transformé en pluie")})}o=we(""),o.style.cssText="display:flex;flex-direction:column;background:#f2f2f7",l()}function Us(e){const i=Et(e,14),{reservoir:t,pluie:n,etp:a,drainage:o,irrigation:s,nDays:l,ru:m,rfu:c,cfg:p,ruArr:v,rfuArr:u}=i,d=t[l]??t[l-1]??0,r=v[Math.min(l,v.length-1)],f=u[Math.min(l,u.length-1)],b=Zt(d,f,r),$=Math.round(d/r*100),h=Math.max(0,l-7),L=J=>J.slice(h,l).reduce((ee,de)=>ee+de,0),A=Math.round(L(n)),D=Math.round(L(s)),E=+L(a).toFixed(1),w=+L(o).toFixed(1),B=t.slice(h,l+1),F=260,M=52,j=4,q=4,S=4,g=4,x=F-j-q,y=M-S-g,T=J=>S+y-Math.max(0,Math.min(1.02,J/r))*y,z=J=>j+J/Math.max(B.length-1,1)*x,k=B.map((J,ee)=>({x:z(ee),y:T(J)})),I=$i(k),P=T(f).toFixed(1),C=(S+y).toFixed(1),N=I?`${I} L${z(B.length-1).toFixed(1)},${C} L${j},${C} Z`:"",X=`<svg viewBox="0 0 ${F} ${M}" width="${F}" height="${M}" style="display:block;width:100%;height:${M}px">
    <rect x="${j}" y="${S}" width="${x}" height="${(+P-S).toFixed(1)}" fill="#24B066" opacity="0.1"/>
    <rect x="${j}" y="${P}" width="${x}" height="${(+C-+P).toFixed(1)}" fill="#E05252" opacity="0.08"/>
    <line x1="${j}" y1="${P}" x2="${j+x}" y2="${P}" stroke="#24B066" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    ${N?`<path d="${N}" fill="#0172A4" opacity="0.08"/>`:""}
    ${I?`<path d="${I}" fill="none" stroke="#0172A4" stroke-width="2" stroke-linejoin="round"/>`:""}
  </svg>`,Q=(J,ee,de)=>`<div style="flex:1;text-align:center">
    <div style="font-size:13px;font-weight:700;color:${J}">${de}</div>
    <div style="font-size:10px;color:#8e8e93">${ee}</div>
  </div>`;return`<div class="m-widget-card" data-widget-id="irrelis">
    <div style="padding:12px 14px 10px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-size:11px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:2px 7px">Irré-LIS</span>
        <span style="font-size:14px;font-weight:700;color:${b}">${d} <span style="font-size:11px;font-weight:400">mm</span></span>
        <span style="font-size:11px;color:#8e8e93">${$}% RU</span>
      </div>
      ${X}
      <div style="display:flex;gap:0;margin-top:8px;padding-top:8px;border-top:.5px solid rgba(0,0,0,.07)">
        ${Q("#2E75B6","Pluie 7j",A+" mm")}
        ${Q("#FF8C00","Irrigation 7j",D+" mm")}
        ${Q("#00887E","ETP 7j",E+" mm")}
        ${Q("#8B1A1A","Drainage 7j",w+" mm")}
      </div>
      <button class="m-il-detail-btn m-widget-details-link" data-il-plot="${e.id}">Voir détails →</button>
    </div>
  </div>`}function xa(e,i){const t=new URLSearchParams(location.search).get("role")==="adherent",n=le.filter(s=>Tt(s)&&(!t||s.orgId===bi)).sort((s,l)=>s.name.localeCompare(l.name,"fr")),a=document.createElement("div");a.style.cssText="padding:4px 0",a.innerHTML=n.map(s=>`
    <button class="il-plot-pick" data-id="${s.id}" style="
      display:flex;align-items:center;width:100%;padding:14px 16px;
      border:none;border-bottom:.5px solid rgba(0,0,0,.06);font-family:inherit;cursor:pointer;gap:12px;
      background:${s.id===e.id?"rgba(1,114,164,.07)":"none"}">
      <i class="bi bi-geo-alt" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
      <span style="flex:1;font-size:16px;color:#1c1c1e;font-weight:${s.id===e.id?"700":"400"};text-align:left">${s.name}</span>
      ${s.id===e.id?'<i class="bi bi-check2" style="color:#0172A4;font-size:18px;flex-shrink:0"></i>':""}
    </button>`).join("");const o=ue({title:"Parcelles Irré-LIS",body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelectorAll(".il-plot-pick").forEach(s=>{s.addEventListener("click",()=>{const l=le.find(m=>m.id===+s.dataset.id);o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{o.remove(),l&&l.id!==e.id&&i(l)},280)})})}function Gs(e){const i=vt(e.id);let t="saison";const n=we(`
    <div class="m-fs-topbar">
      <button class="m-fs-back" id="il-back"><i class="bi bi-chevron-left"></i>Parcelles</button>
      <button id="il-plot-picker" style="flex:1;display:flex;align-items:center;justify-content:center;gap:5px;background:none;border:none;cursor:pointer;padding:0 4px;min-width:0">
        <span style="font-size:16px;font-weight:700;color:#1c1c1e;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.name}</span>
        <i class="bi bi-chevron-down" style="font-size:10px;color:#8e8e93;flex-shrink:0;margin-top:1px"></i>
      </button>
      <button id="il-parcel-btn" style="background:none;border:none;color:#0172A4;font-size:13px;font-weight:600;cursor:pointer;padding:0 4px;white-space:nowrap">Parcelle →</button>
    </div>

    <div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:#fff;border-bottom:.5px solid rgba(0,0,0,.1);flex-shrink:0">
      <span style="font-size:12px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:3px 9px;white-space:nowrap;flex-shrink:0">Irré-LIS</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i.culture}</div>
      </div>
      <select id="il-period" style="flex-shrink:0;font-size:13px;color:#1c1c1e;border:1px solid #e5e5ea;border-radius:8px;padding:5px 8px;background:#fff;cursor:pointer;font-family:inherit">
        <option value="saison" selected>Saison entière</option>
        <option value="30j">30 jours</option>
        <option value="7j">7 jours</option>
      </select>
    </div>

    <div id="il-chart-area" style="flex:1;overflow:hidden;background:#fff;min-height:0"></div>

    <div class="w-irrig-act-row w-irrig-act-row--h" style="background:#fff;border-top:.5px solid rgba(0,0,0,.08);padding:8px 14px">
      <button id="il-btn-cumuls" class="w-irrig-act-btn w-irrig-act-btn--sec">Voir cumuls</button>
      <button id="il-btn-legend" class="w-irrig-act-btn w-irrig-act-btn--sec">Voir légende</button>
    </div>
    <div class="w-irrig-act-row" style="background:#fff;border-top:.5px solid rgba(0,0,0,.1);padding:8px 14px 14px">
      <button id="il-btn-pluv" class="w-irrig-act-btn w-irrig-act-btn--pri"><i class="bi bi-cloud-rain"></i> Pluies &amp; irrigations</button>
      <button id="il-btn-config" class="w-irrig-act-btn w-irrig-act-btn--sec"><i class="bi bi-gear"></i> Configurer</button>
    </div>
  `);n.classList.add("m-fs-layer");const a=n.querySelector("#il-chart-area");let o=Et(e,14),s=null;function l(){a.clientWidth&&a.clientHeight&&ha(a,o,t)}s=new ResizeObserver(()=>requestAnimationFrame(l)),s.observe(a),requestAnimationFrame(l),n.querySelector("#il-back").addEventListener("click",()=>{s==null||s.disconnect(),be()}),n.querySelector("#il-plot-picker").addEventListener("click",()=>{xa(e,c=>{s==null||s.disconnect(),be(),requestAnimationFrame(()=>Gs(c))})}),n.querySelector("#il-period").addEventListener("change",c=>{t=c.target.value,l()}),n.querySelector("#il-parcel-btn").addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>ot),void 0).then(c=>c.initParcelDetail(e,[],"widgets","Irré-LIS"))}),n.querySelector("#il-btn-cumuls").addEventListener("click",()=>{const c=document.createElement("div");c.innerHTML=ba(o,t),ue({title:"Cumuls sur la période",body:c,doneLabel:"Fermer",onDone:()=>{}})}),n.querySelector("#il-btn-legend").addEventListener("click",()=>{const c=document.createElement("div");c.innerHTML=va(),ue({title:"Légende",body:c,doneLabel:"Fermer",onDone:()=>{}})});const m=()=>{o=Et(e,14),l()};n.querySelector("#il-btn-config").addEventListener("click",()=>ga(e,m)),n.querySelector("#il-btn-pluv").addEventListener("click",()=>ya(e,m))}const Ys=Object.freeze(Object.defineProperty({__proto__:null,getIrrelisConfig:vt,getIrrelisDailyData:Et,getIrrelisVal:Di,hasIrrelis:Tt,irrelisColor:Zt,irrelisMobileWidget:Us,openIrrelisDetail:Gs},Symbol.toStringTag,{value:"Module"})),Ks={admin:100,adherent:1,new:41},Zs="weenat-m-dash";function mt(){try{return JSON.parse(localStorage.getItem(Zs))||{}}catch{return{}}}function wt(e){try{localStorage.setItem(Zs,JSON.stringify({...mt(),...e}))}catch{}}const Le=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls préférés",info:"Mes cumuls préférés.<br><br>Ajoutez ici les valeurs des cumuls qui sont importants pour vous en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures préférées",info:"Mes mesures préférées.<br><br>Ajoutez ici les indicateurs de vos parcelles ou capteurs qui vous intéressent en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"radar_pluie",title:"Radar de pluie",icon:"bi-cloud-rain-heavy",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"irrelis",title:"Bilan Irré-LIS",icon:"bi-moisture",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function $a(e,i,t){var o;const n=document.getElementById("phone-screen");(o=document.querySelector(".m-winfo-overlay"))==null||o.remove();const a=document.createElement("div");a.className="m-winfo-overlay",a.innerHTML=`
    <div class="m-winfo-modal">
      <div class="m-winfo-hd">
        <span class="m-winfo-title">${e}</span>
        <button class="m-winfo-close" type="button"><i class="bi bi-x"></i></button>
      </div>
      <div class="m-winfo-gif">
        ${t?`<img src="${t}" alt="${e}">`:'<div class="m-winfo-gif-placeholder"><i class="bi bi-play-circle" style="font-size:28px;display:block;margin-bottom:6px"></i>GIF à venir</div>'}
      </div>
      <div class="m-winfo-body">${i}</div>
    </div>`,a.querySelector(".m-winfo-close").addEventListener("click",()=>a.remove()),a.addEventListener("click",s=>{s.target===a&&a.remove()}),n.appendChild(a)}function Ge(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Ye({title:e,body:i,doneLabel:t="Fermer",onDone:n}={}){var l;const a=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),a.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),s()}),o.addEventListener("click",m=>{m.target===o&&s()}),o}const ts=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function is(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=ts[Math.floor(Math.random()*ts.length)],n=t.label==="Pluie"||t.label==="Averses",a=Math.round(8+Math.random()*8),o=Math.round(16+Math.random()*14),s=Array.from({length:24},(l,m)=>{const c=Math.sin(Math.PI*(m-6)/12),p=Math.round(a+(o-a)*Math.max(0,c)),v=n&&m>=8&&m<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:m,label:`${String(m).padStart(2,"0")}h`,temp:p,pluie:v,hum:Math.round(85-40*Math.max(0,c)),vent:Math.round(10+Math.random()*20),icon:v>0?"bi-cloud-rain-fill":m<7||m>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:n?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:a,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:o,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function ss(e){const i=e.id,t=e.reserveHydrique||50,n=+((i*2.3+7)%32).toFixed(1),a=+((i*1.1+14)%14+10).toFixed(1),o=+((i*.6+1)%6).toFixed(1),s=Math.round(t*((i%5+1)/10)),l=Math.max(0,+(s+n-a-o).toFixed(0)),m=l<s?s-l:0;return{j0:s,j7:l,bilan:m}}const St=4,Ot=5,ns=["#0172A4","#ff8500","#30d158","#bf5af2"],Xs={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548",irrigation:"#FF8C00"},Si={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol",irrigation:"Irrigation"},wa={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C",irrigation:"mm"},as={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},Sa=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function Qs(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function ka(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const a=new Set(t),o=+e.slice(2);i.filter(l=>l.parcelIds.includes(o)).forEach(l=>(as[l.model]||[]).forEach(m=>a.add(m)));const s=le.find(l=>l.id===o);return(s!=null&&s.irrigation&&s.irrigation!=="Non irrigué"||me.some(l=>l.plotId===o))&&a.add("irrigation"),[...a].filter(l=>l in Si)}const n=i.find(a=>a.id===+e.slice(2));return n?as[n.model]||[]:[]}function Ea(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let Pe=[],Ie=[];(()=>{const e=mt();if(e.catalog){const i=e.catalog.map(t=>t.id);Le.sort((t,n)=>{const a=i.indexOf(t.id),o=i.indexOf(n.id);return(a<0?999:a)-(o<0?999:o)}),e.catalog.forEach(t=>{const n=Le.find(a=>a.id===t.id);n&&(n.active=t.active)})}e.mesuresList&&(Pe=e.mesuresList),e.cumulsList&&(Ie=e.cumulsList)})();let Nt=null,Vt=null;function en(e){return Pe.length>=St?"max":Pe.some(i=>i.subjectKey===e.subjectKey&&i.metricId===e.metricId&&i.period===e.period&&i.step===e.step)?"dup":(Pe.push(e),wt({mesuresList:Pe}),Nt==null||Nt(),"ok")}function ki(e){return Ie.length>=Ot?"max":(Ie.push(e),wt({cumulsList:Ie}),Vt==null||Vt(),"ok")}function La(e,i,t){if(i==="irrigation"&&e.startsWith("p-")){const s=parseInt(e.slice(2),10),l=Date.now(),m=24*36e5,c=l-t*m,p=new Array(t).fill(0);return me.filter(v=>v.plotId===s&&v.real).forEach(v=>{const u=new Date(v.iso).getTime();if(u<c||u>l)return;const d=Math.min(t-1,Math.floor((u-c)/m));p[d]+=v.mm||0}),p}const n=[...e+i].reduce((s,l)=>s+l.charCodeAt(0),1),a=s=>(Math.sin(n*.07+s*.5)+Math.sin(n*.03+s*1.3))/2+.5,o={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(s,l)=>o.sparse&&a(l*3.7)>.28?0:Math.max(0,o.base+o.amp*a(l*.28+1.2)))}const Aa=new Set(["pluie","etp","irrigation"]);function Ca(e,i){var A,D;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,n=La(e.subjectKey,e.metricId,t),a=270,o=100,s=28,l=14,m=Math.max(...n,1),c=Aa.has(e.metricId);let p,v="";for(let E=0;E<=2;E++){const w=Math.round(E/2*(o-l-4)+4);v+=`<line x1="${s}" y1="${w}" x2="${s+a}" y2="${w}" stroke="#E8E6E0" stroke-width=".5"/>`,v+=`<text x="${s-3}" y="${w+3}" text-anchor="end" font-size="8" fill="#636366">${+(m*(1-E/2)).toFixed(m<5?1:0)}</text>`}const u=Ea(e.period,e.step),d=u.map((E,w)=>`<text x="${s+Math.round(w/(u.length-1)*a)}" y="${o+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${E}</text>`).join(""),r=JSON.stringify(n.map(E=>+E.toFixed(2))),f=Xs[e.metricId]||e.color,b=e.metricId==="pluie"?"#2E75B6":f;if(c){const E=Math.max(1,a/t*.7),w=n.map((B,F)=>{const M=Math.round(B/m*(o-l-4)),j=s+Math.round(F/(t-1)*a)-E/2,q=o-l-M;return`<rect x="${j.toFixed(1)}" y="${q.toFixed(1)}" width="${E.toFixed(1)}" height="${M.toFixed(1)}" fill="${b}" opacity=".85" rx="1"/>`}).join("");p=`<svg viewBox="0 0 ${s+a} ${o+6}" style="width:100%;display:block;overflow:visible">${v}${w}${d}</svg>`}else{const E=n.map((w,B)=>`${s+Math.round(B/(t-1)*a)},${o-l-Math.round(w/m*(o-l-4))}`).join(" ");p=`<svg viewBox="0 0 ${s+a} ${o+6}" style="width:100%;display:block;overflow:visible">
      ${v}
      <polyline points="${E}" fill="none" stroke="${f}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${o}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${d}
    </svg>`}const $=(A=e.subjectKey)!=null&&A.startsWith("s-")?e.subjectKey.slice(2):null,h=(D=e.subjectKey)!=null&&D.startsWith("p-")?e.subjectKey.slice(2):null,L=$||h?`<button class="m-wf-view-data m-widget-details-link" ${$?`data-sensor-id="${$}"`:`data-parcel-id="${h}"`} data-metric-id="${e.metricId}" data-period="${e.period}" data-step="${e.step}">Voir détails →</button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?b:f}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${r}' style="position:relative;margin-top:4px">
        ${p}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${L}
    </div>`}function os(e,i){const t=Pe.length>=St,n=[...e].sort((l,m)=>l.name.localeCompare(m.name,"fr")).map(l=>`<option value="p-${l.id}">${It(l)}</option>`).join(""),a=i.filter(l=>l.parcelIds.length>0).map(l=>`<option value="s-${l.id}">${jt(l,e)}</option>`).join(""),o=Qs("7d");return`
    <div id="msr-list">${Pe.length?Pe.map(Ca).join(""):'<div class="m-wf-empty">Ajoutez ici les mesures que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Pe.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${St}/${St})</div>
        <div style="color:#636366;font-size:12px;margin-top:2px">Supprimez une mesure pour en ajouter une nouvelle.</div>
      </div>
    </div>`:`
    <div class="m-wf-form">
      <select class="m-wf-sel" id="msr-subject">
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${n}</optgroup>
        ${a?`<optgroup label="Capteurs">${a}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period">
          ${Sa.map(l=>`<option value="${l.id}"${l.id==="7d"?" selected":""}>${l.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${o.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Ajouter la mesure</button>
    </div>`}`}function Ma(e){const i=new Date().toISOString().split("T")[0],t=new Date;t.setDate(t.getDate()+7);const n=t.toISOString().split("T")[0];return me.filter(a=>a.iso>i&&a.iso<=n&&a.plotId===e.id).reduce((a,o)=>a+o.mm,0)}function Ta(e){return 25+e.id*7%20}const ls=9;function Ia(e){const i=e.filter(a=>Tt(a));return i.length?`
    <div style="font-size:11px;color:#8e8e93;margin-bottom:2px">Réserve en eau — Aujourd'hui</div>
    ${i.map(a=>{const o=vt(a.id),s=Math.round(Di(a,"Aujourd'hui")),l=Zt(s,o.rfu,o.ru),m=Math.round(s/o.ru*100);return`
      <div class="m-il-row" data-il-plot="${a.id}" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:.5px solid rgba(0,0,0,.07);cursor:pointer">
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.name}</div>
          <div style="font-size:11px;color:#8e8e93">${o.culture} · semis ${new Date(o.semisDate+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:17px;font-weight:700;color:${l}">${s} <span style="font-size:11px;font-weight:400">mm</span></div>
          <div style="font-size:10px;color:#8e8e93">${m}% RU</div>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px;flex-shrink:0"></i>
      </div>`}).join("")}
    <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap">
    <span style="font-size:10px;color:#24B066;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#24B066"></span>RFU</span>
    <span style="font-size:10px;color:#E8A020;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#E8A020"></span>Bas de RFU</span>
    <span style="font-size:10px;color:#E05252;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#E05252"></span>Réservoir de survie</span>
    <span style="font-size:10px;color:#007aff;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#007aff"></span>Saturation</span>
  </div>`:'<div class="m-widget-empty"><i class="bi bi-droplet" style="color:#0172A4;font-size:28px"></i><p>Aucune parcelle avec le service Irré-LIS</p></div>'}function ft(e,i=!1,t=mt().sensorlessEnabled??!0,n=mt().irrigAdvisor??!1){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const a=E=>E.id%3===2,o=e.slice(),s=(E,w)=>ss(w).bilan-ss(E).bilan,l=o.slice().sort(s),m=i?l:l.slice(0,ls),c=new Set(m.map(E=>E.id)),p=l.length-m.length,v=E=>Math.round((E.id*2.3+7)%32*10)/10,u=E=>Math.round(((E.id*1.1+14)%14+10)*10)/10,d="font-size:11px;font-weight:700;color:#8e8e93;text-align:right;padding-bottom:6px;text-transform:uppercase;letter-spacing:.03em;line-height:1.3",r=E=>`<span style="display:block;font-size:9px;font-weight:400;text-transform:none;color:#b0aead;letter-spacing:0">${E}</span>`,f="border-top:none",b=(E,w)=>{const B=Ma(E),F=v(E),M=u(E),j=w===0?"border-top:none":"border-top:.5px solid rgba(0,0,0,.18);padding-top:8px;margin-top:2px",q=`<button class="m-bh-th-n m-bh-plot-link" data-plot-id="${E.id}" style="grid-column:1/-1;white-space:normal;overflow:visible;text-overflow:unset;text-align:left;${j}">${E.name}</button>`;if(n){const g=a(E)?Ta(E):null,x=g!==null?B>=g?"#24B066":"#E05252":null,y=g!==null?`<span style="color:${x};font-weight:700">${g}</span>`:'<span style="color:#c7c7cc">—</span>';return`
        ${q}
        <div class="m-bh-td" style="${f}">${F}</div>
        <div class="m-bh-td" style="${f}">${M}</div>
        <div class="m-bh-td m-bh-td--planif" style="${f}">${B>0?B:"—"}</div>
        <div class="m-bh-td" style="${f}">${y}</div>`}return`
      ${q}
      <div class="m-bh-td" style="${f}">${F}</div>
      <div class="m-bh-td" style="${f}">${M}</div>
      <div class="m-bh-td m-bh-td--planif" style="${f}">${B>0?B:"—"}</div>`},$=l.filter(E=>c.has(E.id)).map((E,w)=>b(E,w)).join(""),h=n?"1fr 1fr 1.5fr 1fr":"1fr 1fr 1.5fr",L=n?`<div style="${d}">Pluie${r("J+7 mm")}</div>
       <div style="${d}">ETP${r("J+7 mm")}</div>
       <div style="${d}">Irr. planif.${r("J+7 mm")}</div>
       <div style="${d}">Irr. reco.${r("J+7 mm")}</div>`:`<div style="${d}">Pluie${r("J+7 mm")}</div>
       <div style="${d}">ETP${r("J+7 mm")}</div>
       <div style="${d}">Irr. planif.${r("J+7 mm")}</div>`,A=n?`<div style="font-size:11px;color:#8e8e93;margin-bottom:6px">
         <i class="bi bi-info-circle" style="color:#ff9f0a"></i>
         Reco. affiché uniquement pour les parcelles avec Irrigation Advisor actif
       </div>`:"",D=l.length>ls?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${p} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <label style="display:flex;align-items:center;gap:8px;padding:4px 0 8px;cursor:pointer;font-size:13px;color:#1c1c1e">
      <input type="checkbox" id="bh-advisor-cb" ${n?"checked":""} style="width:16px;height:16px;accent-color:#ff9f0a">
      Irrigation Advisor${n?' <span style="font-size:11px;color:#ff9f0a;font-weight:600">✦</span>':""}
    </label>
    ${A}
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${h};gap:0 6px">
        ${L}
        ${$}
      </div>
    </div>
    ${D}
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
    </div>`}const rs=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function ja(e,i,t,n){Object.fromEntries($e.map(v=>[v.id,v]));const a=[...e].sort((v,u)=>v.name.localeCompare(u.name,"fr")).map(v=>`<option value="p-${v.id}">${rs(It(v))}</option>`).join(""),o=i.map(v=>`<option value="s-${v.id}">${rs(jt(v,e))}</option>`).join(""),s=`
    <optgroup label="Parcelles">${a}</optgroup>
    ${o?`<optgroup label="Capteurs">${o}</optgroup>`:""}`,l=(v,u)=>{const d=`${v.dayLabel.charAt(0).toUpperCase()+v.dayLabel.slice(1)} · ${v.dateStr}`;return`
    <div class="m-prev-card" data-day="${u}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${v.icon}" style="color:${v.color};font-size:26px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${d}</span>
          <span class="m-prev-card-cond">${v.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-tbl">
        <div class="m-prev-tbl-cell">
          <i class="bi bi-cloud-rain" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${v.pluie}</span>
          <span class="m-prev-tbl-unit">mm</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-thermometer-half" style="color:#E05252"></i>
          <span class="m-prev-tbl-val">${v.tMin}–${v.tMax}</span>
          <span class="m-prev-tbl-unit">°C</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-droplet" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${v.humMoy}</span>
          <span class="m-prev-tbl-unit">%</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-wind" style="color:#636366"></i>
          <span class="m-prev-tbl-val">${v.ventMoy}/<em>${v.ventRafales}</em></span>
          <span class="m-prev-tbl-unit">km/h</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-moisture" style="color:#24B066"></i>
          <span class="m-prev-tbl-val">${v.etp}</span>
          <span class="m-prev-tbl-unit">ETP</span>
        </div>
      </div>
    </div>`},m=t.slice(0,3).map(l).join(""),c=t.slice(3).map(l).join("");return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select"><option value="addr" selected>Adresse de mon exploitation</option>${s}</select>
    <div class="m-prev-cards">
      ${m}
      <div class="m-prev-extra" style="display:none">${c}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Ke=[{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:null},{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],qa={etp:"evapo",rayo:"solar",pluie:"bursty",dj:"temperature",hf:"cold",humec:"bursty"},tn=new Set(Ke.flatMap(e=>e.needsModels||[]));function li(e){if(!e)return Ke;if(e.startsWith("s-")){const t=ce.find(n=>n.id===+e.slice(2));return t?Ke.filter(n=>n.needsModels===null||n.needsModels.includes(t.model)):Ke}const i=new Set(ce.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Ke.filter(t=>t.needsModels===null||t.needsModels.some(n=>i.has(n)))}const cs={etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#0B3A64"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function Pa(){return Ie.length?Ie.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
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
      <button class="m-cumuls-details m-widget-details-link" data-cidx="${i}">Voir détails →</button>
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function ds(e,i,t){if(!e||!i)return null;const n=Ke.find(s=>s.id===t)||Ke[0],a=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),o=e.split("").reduce((s,l)=>s+l.charCodeAt(0),0)+a;return+(n.base+o%(n.amp*10)/10).toFixed(1)}function us(e,i){const t=Ie.length>=Ot,n=`${new Date().getFullYear()}-01-01`,a=i.filter(m=>m.parcelIds.length>0&&tn.has(m.model)),o=[...e].sort((m,c)=>m.name.localeCompare(c.name,"fr")).map(m=>`<option value="p-${m.id}">${It(m)}</option>`).join(""),s=a.map(m=>`<option value="s-${m.id}">${jt(m,e)}</option>`).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${Ie.length?Pa():'<div class="m-wf-empty">Ajoutez ici les cumuls que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Ie.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${Ot}/${Ot})</div>
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
          <input type="date" class="m-wf-date" id="cumuls-from" value="${n}">
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Ajouter le cumul</button>
    </div>`}`}function Da(e){const i=e.id,t=new Date;let n,a;i%5===3?(n=0,a=(t.getHours()+2+i%3*3)%24):(n=(i*2+1)%6+1,a=6+i%5*2);const o=2+i%3,s=new Date(t);s.setDate(s.getDate()+n);const l=n===0?"Aujourd'hui":s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),m=n*1440+a*60-(t.getHours()*60+t.getMinutes());return{winDateStr:l,winHour:a,winDur:o,minutesFromNow:m}}const za="#1a9e40";function _a(e){const t=e.filter(a=>a.crop).map(a=>({p:a,d:Da(a)})).filter(({d:a})=>a.minutesFromNow>=0&&a.minutesFromNow<=1440).sort((a,o)=>a.d.minutesFromNow-o.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:a,d:o})=>{const s=String(o.winHour).padStart(2,"0"),l=String((o.winHour+o.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${a.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${a.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${za};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const sn="weenat-m-traitements";function kt(){try{return JSON.parse(localStorage.getItem(sn))||[]}catch{return[]}}function zi(e){localStorage.setItem(sn,JSON.stringify(e))}function Fa(e,i){let t=new Set;const n=[],a=new Date().toISOString().split("T")[0];function o(){return Kt(n,e,t)}function s(c){const p=t.size,v=c.querySelector(".irr-summary"),u=c.querySelector(".irr-save-btn");!v||!u||(v.textContent=p===0?"":`${p} parcelle${p>1?"s":""}`,u.disabled=p===0)}function l(c){var p;(p=c.querySelector("#irr-sel-all"))==null||p.addEventListener("click",()=>{const v=e.every(u=>t.has(u.id));e.forEach(u=>v?t.delete(u.id):t.add(u.id)),c.querySelector("#trait-sel-list").innerHTML=o(),l(c),s(c)}),c.querySelectorAll(".irr-group-card").forEach(v=>{v.addEventListener("click",()=>{const u=v.dataset.gids.split(",").map(Number),d=u.every(r=>t.has(r));u.forEach(r=>d?t.delete(r):t.add(r)),c.querySelector("#trait-sel-list").innerHTML=o(),l(c),s(c)})}),c.querySelectorAll(".irr-plot-row").forEach(v=>{v.addEventListener("click",()=>{const u=+v.dataset.pid;t.has(u)?t.delete(u):t.add(u),c.querySelector("#trait-sel-list").innerHTML=o(),l(c),s(c)})})}const m=ct(we(`
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
            <input type="date" class="irr-date-input" id="trait-date" value="${a}">
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
  `));l(m),s(m),m.querySelector("#trait-back").addEventListener("click",be),m.querySelector(".irr-save-btn").addEventListener("click",()=>{const c=m.querySelector("#trait-date").value||a,p=m.querySelector("#trait-produit").value.trim()||"—",v=m.querySelector("#trait-dose").value.trim()||"—",u=kt();u.unshift({id:Date.now(),date:c,produit:p,dose:v,plotIds:[...t]}),zi(u),be(),i("Traitement enregistré")})}function Ba(e,i,t){const n=i==="adherent"?Ks.adherent:null,a=n!==null?le.filter(c=>c.orgId===n):le;let o=null;const s=we(`
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
          ${a.map(c=>`<option value="${c.id}">${c.name}</option>`).join("")}
        </select>
      </div>
      <div id="trait-cal-content" style="padding:6px 16px 16px"></div>
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",be);const l=c=>{const[p,v,u]=c.split("-");return`${u}/${v}/${p}`};function m(){const c=s.querySelector("#trait-cal-content");let p=kt();if(o!==null&&(p=p.filter(v=>(v.plotIds||[]).includes(o))),!p.length){c.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}c.innerHTML=p.map(v=>{const u=(v.plotIds||[]).map(d=>{var r;return(r=e.find(f=>f.id===d))==null?void 0:r.name}).filter(Boolean);return`
        <div class="m-trait-cal-card" data-id="${v.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${l(v.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${u.length} parcelle${u.length>1?"s":""}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${v.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${v.dose}</div>
          ${u.length?`<div style="font-size:11px;color:#8e8e93;margin-top:6px">${u.join(", ")}</div>`:""}
        </div>`}).join(""),c.querySelectorAll(".m-trait-cal-card").forEach(v=>{v.addEventListener("click",()=>{const u=+v.dataset.id,r=kt().find(h=>h.id===u);if(!r)return;const f=(r.plotIds||[]).map(h=>{var L;return(L=e.find(A=>A.id===h))==null?void 0:L.name}).filter(Boolean),b=document.createElement("div");b.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${l(r.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${r.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${r.dose}</div>
            ${f.length?`<div style="font-size:12px;color:#8e8e93">${f.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const $=Ye({title:"Traitement",body:b,doneLabel:"Fermer",onDone:()=>{}});b.querySelector("#tcal-del").addEventListener("click",()=>{const h=kt().filter(L=>L.id!==u);zi(h),$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{$.remove(),m()},280),t("Traitement supprimé")}),b.querySelector("#tcal-edit").addEventListener("click",()=>{$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>$.remove(),280),Ha(r,e,t,m)})})})}s.querySelector("#trait-filter").addEventListener("change",c=>{o=c.target.value?+c.target.value:null,m()}),m()}function Ha(e,i,t,n){const a=document.createElement("div");a.innerHTML=`
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
    </div>`,Ye({title:"Modifier le traitement",body:a,doneLabel:"Enregistrer",onDone:()=>{const o=kt(),s=o.findIndex(l=>l.id===e.id);s!==-1&&(o[s].date=a.querySelector("#tedit-date").value||e.date,o[s].produit=a.querySelector("#tedit-produit").value.trim()||e.produit,o[s].dose=a.querySelector("#tedit-dose").value.trim()||e.dose,zi(o)),t("Traitement modifié"),n()}})}const Ra={"capteur déplacé":"M12 2c-2.117 0-3.98.741-5.588 2.225C4.803 5.708 4 7.699 4 10.199c0 1.6.6 3.322 1.8 5.164C7 17.205 8.818 19.2 11.25 21.35a1.2 1.2 0 0 0 .75.275 1.2 1.2 0 0 0 .75-.275c2.433-2.15 4.25-4.145 5.45-5.987C19.4 13.521 20 11.8 20 10.2c0-2.5-.803-4.491-2.412-5.974C15.98 2.74 14.117 2 12 2zm0 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 7v3a.969.969 0 0 1-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287A.966.966 0 0 1 11 10V7c0-.283.095-.52.287-.713A.969.969 0 0 1 12 6zm0 7a.97.97 0 0 1 .713.287c.191.192.287.43.287.713s-.096.522-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287c-.192-.191-.287-.43-.287-.713s.095-.52.287-.713A.969.969 0 0 1 12 13z","émissions interrompues":"M19.075 21.9 8.125 10.975c-.033.167-.063.333-.087.5S8 11.817 8 12c0 .383.046.746.138 1.087.091.342.229.663.412.963.15.25.217.517.2.8a1.04 1.04 0 0 1-.3.7c-.2.2-.438.292-.713.275s-.487-.133-.637-.35c-.35-.5-.62-1.042-.813-1.625A5.889 5.889 0 0 1 6 12a5.985 5.985 0 0 1 .575-2.575L5.1 7.95c-.35.6-.62 1.238-.813 1.913A7.79 7.79 0 0 0 4 12a7.855 7.855 0 0 0 1.675 4.9c.183.233.27.487.262.762-.008.275-.112.513-.312.713a.916.916 0 0 1-1.375-.05c-.7-.867-1.25-1.837-1.65-2.913S2 13.2 2 12c0-1.033.146-2.008.437-2.925A10.71 10.71 0 0 1 3.65 6.5L2.075 4.925a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725a.948.948 0 0 1 .7-.275c.283 0 .525.092.725.275l16.975 17c.183.183.275.417.275.7s-.092.517-.275.7c-.2.2-.442.3-.725.3s-.517-.1-.7-.3zm1.275-4.4-1.45-1.45c.35-.6.62-1.238.813-1.913S20 12.75 20 12a7.854 7.854 0 0 0-1.675-4.9c-.183-.233-.27-.487-.263-.762s.113-.513.313-.713a.916.916 0 0 1 1.375.05c.7.867 1.25 1.833 1.65 2.9.4 1.067.6 2.208.6 3.425 0 1.017-.146 1.988-.438 2.913S20.867 16.7 20.35 17.5zm-2.925-2.925-1.55-1.55c.033-.167.062-.333.087-.5S16 12.183 16 12c0-.383-.046-.746-.138-1.088s-.229-.662-.412-.962a1.367 1.367 0 0 1-.2-.8 1.04 1.04 0 0 1 .3-.7.93.93 0 0 1 .712-.287.76.76 0 0 1 .638.337c.35.483.62 1.025.813 1.625.191.6.287 1.225.287 1.875a5.985 5.985 0 0 1-.575 2.575z","capteur couché":"M6 5a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h7a1 1 0 1 0 0-2h-7V7a2 2 0 0 0-2-2H6zm3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 16v2h20v-2H2z","cuillère bloquée":"M17.615 3.25c-.268 0-.537.103-.742.309L3.508 16.922a1.05 1.05 0 0 0 0 1.486l.031.027-.002.002.05.041c.459.438 1.055.718 1.733.813.678.094 1.416 0 2.139-.274a5.793 5.793 0 0 0 2.018-1.322 5.802 5.802 0 0 0 1.322-2.02c.411-1.087.411-2.189 0-3.074l7.558-7.558a1.047 1.047 0 0 0 0-1.485 1.046 1.046 0 0 0-.742-.308zm-1.037 8.416a.473.473 0 0 0-.35.137l-1.05 1.05a.435.435 0 0 0-.106.163.555.555 0 0 0-.031.187c0 .067.01.13.031.188.02.058.055.112.105.162l1.051 1.05a.473.473 0 0 0 .35.137.472.472 0 0 0 .488-.488.474.474 0 0 0-.138-.35l-.2-.199h.037c.834 0 1.542.292 2.125.875.584.584.875 1.292.875 2.125 0 .675-.198 1.274-.593 1.799a3.032 3.032 0 0 1-1.532 1.088.527.527 0 0 0-.267.187.465.465 0 0 0-.108.287c0 .167.06.3.176.4.117.1.254.13.412.089a3.912 3.912 0 0 0 2.1-1.426 3.882 3.882 0 0 0 .812-2.424c0-1.116-.387-2.063-1.162-2.838-.775-.775-1.72-1.162-2.838-1.162h-.037l.2-.201a.474.474 0 0 0 .138-.35.473.473 0 0 0-.488-.486zm-2.563 2.344a.462.462 0 0 0-.337.156c-.292.358-.516.75-.674 1.18-.159.429-.239.882-.239 1.357 0 .917.271 1.728.813 2.432a3.922 3.922 0 0 0 2.1 1.418.442.442 0 0 0 .414-.082.479.479 0 0 0 .173-.393.532.532 0 0 0-.375-.488 2.946 2.946 0 0 1-1.53-1.08 2.939 2.939 0 0 1-.595-1.807c0-.341.054-.666.163-.974.108-.309.262-.594.462-.852a.565.565 0 0 0 .131-.375.477.477 0 0 0-.142-.336.48.48 0 0 0-.364-.156z"},ps=new Set(["P+","PT","P"]);function It(e){return[e.name,e.crop].filter(Boolean).join(" — ")}function jt(e,i){var o,s;const t=Object.fromEntries($e.map(l=>[l.id,l])),n=nn[e.model]||e.model,a=((o=(e.parcelIds||[]).map(l=>i.find(m=>m.id===l)).filter(Boolean).find(l=>l.ville))==null?void 0:o.ville)||((s=t[e.orgId])==null?void 0:s.ville)||"";return[n,e.serial,a].filter(Boolean).join(" — ")}const nn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function Oa(e,i){const t=Object.fromEntries($e.map(a=>[a.id,a])),n=i.filter(a=>a.event?(Array.isArray(a.event)?a.event:[a.event]).filter(l=>l!=="cuillère bloquée"||ps.has(a.model)).length>0:!1);return n.length?`<div class="m-w-list">${n.map(a=>{var p;const o=e.find(v=>(a.parcelIds||[]).includes(v.id)),s=(o==null?void 0:o.ville)||((p=t[a.orgId])==null?void 0:p.ville)||"",m=(Array.isArray(a.event)?a.event:[a.event]).filter(v=>v!=="cuillère bloquée"||ps.has(a.model)).map(v=>{const u=Ra[v]||"";return`<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:#ff3b30;border-radius:6px;flex-shrink:0" title="${v}"><svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="${u}"/></svg></span>`}).join(""),c=nn[a.model]||a.model;return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${a.id}">
      <div style="flex:1;min-width:0">
        <div class="m-w-row-name">${c}</div>
        <div style="font-size:12px;color:#636366;margin-top:1px">${a.model} — ${a.serial}</div>
        ${s?`<div style="font-size:11px;color:#8e8e93;margin-top:1px">${s}</div>`:""}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;width:61px;justify-content:flex-end">${m}</div>
        <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const an={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},Na={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Va(e){const i=e.id,t=an[e.crop]||Na,n=i%t.stages.length,a=(i*2+5)%18+4,o=new Date("2026-04-18");o.setDate(o.getDate()+a);const s=o.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[n],nextStage:t.nextStages[n],variety:t.varieties[i%t.varieties.length],nextDateStr:s,daysToNext:a}}function Ja(e){const i=e.filter(a=>a.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const a of i)t[a.crop]||(t[a.crop]=[]),t[a.crop].push(a);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([a,o])=>{const s=o.map(l=>{const m=!!an[l.crop],c=m?Va(l):null,p=m&&c.variety!=="—"?c.variety:"",v=m?c.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${l.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${l.name}</div>
          ${p?`<div class="m-w-row-sub">${p}</div>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${v}</div>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>`}).join("");return`<details class="m-crop-group">
      <summary class="m-crop-summary">
        <div class="m-crop-summary-left">
          <div class="m-crop-summary-name">${a}</div>
          <div class="m-crop-summary-count">${o.length} parcelle${o.length>1?"s":""}</div>
        </div>
        <i class="bi bi-chevron-right m-crop-chevron"></i>
      </summary>
      <div class="m-crop-plots">${s}</div>
    </details>`}).join("")}`}const on="weenat-m-notes";function it(){try{return JSON.parse(localStorage.getItem(on))||[]}catch{return[]}}function ri(e){localStorage.setItem(on,JSON.stringify(e))}function ms(e){const i=it(),t=$=>{const[h,L,A]=$.split("-");return`${A}/${L}/${h}`},n=$=>$.length>70?$.slice(0,70)+"…":$,a=($,h)=>{const L=$.text.length>70,A=($.imageIds||[]).length,D=A>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${A} photo${A>1?"s":""}</span>`:"",E=$.linkedType?`<span style="font-size:10px;background:${$.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${$.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${$.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${$.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${h}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${L||A>0||$.linkedType?"pointer":"default"}">
        <button class="m-note-del m-del-btn" data-idx="${h}" style="position:absolute;top:8px;right:8px">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span>${t($.date)}${$.time?" · "+$.time:""}</span>
          ${$.auteur?`<span style="color:#636366;font-weight:500">${$.auteur}</span>`:""}
          ${$.role?`<span style="font-size:10px;background:${$.role==="conseiller"?"#eef4ff":"#f2f2f7"};color:${$.role==="conseiller"?"#3a7bd5":"#636366"};border-radius:4px;padding:1px 5px;font-weight:500">${$.role==="conseiller"?"Conseiller":"Membre"}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${n($.text)}</div>
        ${E||D?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${E}${D}</div>`:""}
      </div>`},o=i.slice(0,5),s=o.length?o.map(($,h)=>a($,h)).join(""):"",l=new Date,m=l.toISOString().slice(0,10),c=`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`,p=$e.find($=>$.id===(e==="admin"?100:1)),v=p?`${p.prenomProprietaire} ${p.nomProprietaire}`:"",u=p==null?void 0:p.id,d=e==="adherent"?le.filter($=>$.orgId===u):le,r=e==="adherent"?ce.filter($=>$.parcelIds.some(h=>d.some(L=>L.id===h))):ce,f=[...d].sort(($,h)=>$.name.localeCompare(h.name,"fr")).map($=>`<option value="p-${$.id}">${It($)}</option>`).join(""),b=r.map($=>`<option value="s-${$.id}">${jt($,d)}</option>`).join("");return`
    ${s?`<div id="notes-list" style="margin-bottom:12px">${s}</div>`:""}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:8px">
      <select id="notes-link" class="m-sheet-input">
        <option value="">— Sans lien —</option>
        <optgroup label="Parcelles">${f}</optgroup>
        <optgroup label="Capteurs">${b}</optgroup>
      </select>
      <textarea id="notes-input" class="m-sheet-input" placeholder="Votre note…" rows="2" style="resize:none"></textarea>
      <div style="display:flex;gap:6px">
        <input type="date" id="notes-date" class="m-sheet-input" value="${m}" style="flex:1">
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
    <button id="notes-view" class="m-btn m-btn--secondary">Voir les notes${i.length?` (${i.length})`:""}</button>`}function Wa(e){const i=le.map(a=>a.orgId).filter((a,o,s)=>s.indexOf(a)===o&&a!==100).length,t=ce.length,n=le.length;return`
    <div class="m-reseau-name">${We.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${n}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${We.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${We.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${We.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${We.siege.adresse}, ${We.siege.codePostal} ${We.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function Ua(){return`
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
    </a>`}const vs=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Ga(){var c;const e=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),n=i.querySelector("#chat-input"),a=i.querySelector("#chat-send"),o=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",o),i.addEventListener("click",p=>{p.target===i&&o()});function s(p,v){const u=document.createElement("div");u.className=`m-chat-msg m-chat-msg--${v}`,u.innerHTML=`<div class="m-chat-bubble">${p}</div>`,t.appendChild(u),t.scrollTop=t.scrollHeight}function l(){const p=document.createElement("div");return p.className="m-chat-msg m-chat-msg--bot m-chat-typing",p.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(p),t.scrollTop=t.scrollHeight,p}function m(){const p=n.value.trim();if(!p)return;s(p,"user"),n.value="",a.disabled=!0;const v=l();setTimeout(()=>{v.remove();const u=vs[Math.floor(Math.random()*vs.length)];s(u,"bot"),a.disabled=!1,n.focus()},1200+Math.random()*800)}a.addEventListener("click",m),n.addEventListener("keydown",p=>{p.key==="Enter"&&m()}),setTimeout(()=>n.focus(),350)}function Ya(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const n=Ks[i]||1,a=i==="new"||i==="new-adherent"?[]:n===100?le:le.filter(S=>S.orgId===n),o=new Set(a.map(S=>S.id)),s=i==="new"||i==="new-adherent"?[]:ce.filter(S=>S.parcelIds.some(g=>o.has(g)));let l=is(),m=null,c=null;function p(){return i!=="admin"?a:m===null?le:le.filter(S=>S.orgId===m)}function v(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${$e.filter(g=>g.id!==100).sort((g,x)=>g.name.localeCompare(x.name)).map(g=>`<option value="${g.id}">${g.name}</option>`).join("")}
    </select>`}const u=mt(),d=new Set(["mon_reseau","support"]),r=new Set(u.collapsed??Le.map(S=>S.id).filter(S=>!d.has(S)));function f(){wt({catalog:Le.map(S=>({id:S.id,active:S.active})),collapsed:[...r],mesuresList:Pe,cumulsList:Ie})}function b(){return`
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
      </div>`}function $(){return`
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
      </div>`}function h(){const S=window.L;S&&setTimeout(()=>{const g=t.querySelector("#radar-map");if(!g||c)return;const x=a[0]?[a[0].lat,a[0].lng]:[47.5,-1.5];c=S.map(g,{zoomControl:!0,attributionControl:!1,tap:!1}).setView(x,7),S.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:14}).addTo(c);const y=t.querySelector("#radar-slider"),T=t.querySelector("#radar-time-lbl"),z=t.querySelector("#radar-play-btn"),k=t.querySelector("#radar-loading");let I=[],P=0,C=0,N=null,X=!1,Q=null;function J(ee){if(!I.length)return;N&&c.removeLayer(N);const de=I[ee];N=S.tileLayer(`https://tilecache.rainviewer.com${de.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:.65,zIndex:10}).addTo(c);const he=new Date(de.time*1e3);T.textContent=he.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),T.style.color=ee>=P?"#007aff":"#8e8e93",y.value=ee}y.addEventListener("input",()=>{C=+y.value,J(C)}),z.addEventListener("click",()=>{X=!X,z.innerHTML=X?'<i class="bi bi-pause-fill"></i>':'<i class="bi bi-play-fill"></i>',X?Q=setInterval(()=>{C=(C+1)%I.length,J(C)},500):clearInterval(Q)}),fetch("https://api.rainviewer.com/public/weather-maps.json").then(ee=>ee.json()).then(ee=>{var xe,je;k==null||k.remove();const de=((xe=ee.radar)==null?void 0:xe.past)||[],he=((je=ee.radar)==null?void 0:je.nowcast)||[];I=[...de,...he],P=de.length,I.length&&(y.max=I.length-1,C=Math.max(0,P-1),J(C))}).catch(()=>{k&&(k.textContent="Radar indisponible")})},50)}function L(S,g){const x=S.fixed?"":`<button class="m-widget-menu" data-widget="${S.id}" type="button">•••</button>`,y=r.has(S.id);return`
      <div class="m-widget${y?" m-widget--collapsed":""}" data-widget="${S.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${S.id}">
          <div class="m-widget-icon-wrap" style="background:${S.color}20;color:${S.color}">
            <i class="bi ${S.icon}"></i>
          </div>
          <span class="m-widget-title">${S.title}</span>
          ${S.info?`<button class="m-widget-info" data-widget="${S.id}" type="button"><i class="bi bi-info-circle"></i></button>`:""}
          <i class="bi ${y?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${S.fixed?"0":"8px"}"></i>
          ${x}
        </div>
        <div class="m-widget-bd" style="${y?"display:none":""}">${g}</div>
      </div>`}function A(){c==null||c.remove(),c=null,l=is();const S=new Set(["previsions","support"]),g=Le.filter(y=>y.active&&!y.fixed&&(i!=="new"||S.has(y.id))),x=Le.filter(y=>y.active&&y.fixed&&(i!=="new"||S.has(y.id)));t.innerHTML=`
      ${i==="new"?b():'<button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>'}
      ${[...g,...x].map(y=>{let T="";return y.id==="bilan_hydrique"?T=v()+ft(p()):y.id==="previsions"?T=ja(a,s,l):y.id==="cumuls"?T=us(a,s):y.id==="temps_reel"?T=os(a,s):y.id==="traitements"?T=_a(a):y.id==="evenements"?T=Oa(a,s):y.id==="cultures"?T=Ja(a):y.id==="notes"?T=ms(i):y.id==="radar_pluie"?T=$():y.id==="irrelis"?T=Ia(a):y.id==="mon_reseau"?T=Wa(i):y.id==="support"&&(T=Ua()),L(y,T)}).join("")}
      <div style="height:24px"></div>`,F(),r.has("radar_pluie")||h()}const D='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function E(S,g,x=""){const y=S[g],T=`${y.dayLabel.charAt(0).toUpperCase()+y.dayLabel.slice(1)} · ${y.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${D}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${g===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px">
            <i class="bi ${y.icon}" style="color:${y.color};font-size:22px"></i>
            <div>
              <span class="m-d-name">${T}</span>
              ${x?`<div style="font-size:12px;color:#8e8e93;margin-top:1px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</div>`:""}
            </div>
          </div>
          <button class="m-day-nav" id="next-day" ${g>=S.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${y.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${y.tMin} / ${y.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${y.ventMoy}/${y.ventRafales}</strong></div>
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
            ${y.hours.map((z,k)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${k<y.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${z.label}</span>
                <i class="bi ${z.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${z.pluie>0?`${z.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${z.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${z.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${z.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function w(S,g,x,y=""){var T,z;S.querySelector(".m-detail-back").addEventListener("click",be),(T=S.querySelector("#prev-day"))==null||T.addEventListener("click",()=>{S.innerHTML=E(g,x-1,y),w(S,g,x-1,y)}),(z=S.querySelector("#next-day"))==null||z.addEventListener("click",()=>{S.innerHTML=E(g,x+1,y),w(S,g,x+1,y)})}function B(S,g,x=""){const y=we(E(S,g,x));w(y,S,g,x)}function F(){var de,he,xe,je,Ue,tt,qe;(de=e.querySelector(".m-navbar-action"))==null||de.addEventListener("click",j),(he=t.querySelector("#dash-add-widget-btn"))==null||he.addEventListener("click",q),(xe=t.querySelector('[data-action="add-parcel"]'))==null||xe.addEventListener("click",()=>aa(()=>A())),(je=t.querySelector('[data-action="add-sensor"]'))==null||je.addEventListener("click",()=>oa(()=>A())),t.querySelectorAll(".m-widget-info").forEach(W=>{W.addEventListener("click",ie=>{ie.stopPropagation();const Z=Le.find(se=>se.id===W.dataset.widget);Z&&$a(Z.title,Z.info,Z.gif)})}),t.querySelectorAll(".m-widget-hd--toggle").forEach(W=>{W.addEventListener("click",ie=>{if(ie.target.closest(".m-widget-menu")||ie.target.closest(".m-widget-info"))return;const Z=W.dataset.collapse;r.has(Z)?r.delete(Z):r.add(Z),f(),A()})}),(Ue=t.querySelector("#trait-btn-saisir"))==null||Ue.addEventListener("click",()=>{Fa(a,Ge)}),(tt=t.querySelector("#trait-btn-voir"))==null||tt.addEventListener("click",()=>{Ba(a,i,Ge)}),t.querySelectorAll(".m-trait-card").forEach(W=>{W.addEventListener("click",()=>{const ie=le.find(Z=>Z.id===+W.dataset.plotId);if(ie){const Z=ce.filter(se=>se.parcelIds.includes(ie.id)).map(se=>se.id);ge(()=>Promise.resolve().then(()=>ot),void 0).then(se=>se.initParcelDetail(ie,Z,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(W=>{W.addEventListener("click",()=>{const ie=s.find(Z=>Z.id===+W.dataset.sensorId);ie&&ge(()=>Promise.resolve().then(()=>ji),void 0).then(Z=>Z.initSensorDetail(ie,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(W=>{W.addEventListener("click",()=>{const ie=le.find(Z=>Z.id===+W.dataset.plotId);if(ie){const Z=ce.filter(se=>se.parcelIds.includes(ie.id)).map(se=>se.id);ge(()=>Promise.resolve().then(()=>ot),void 0).then(se=>se.initParcelDetail(ie,Z,"params","Tableau de bord"))}})});function S(){t.querySelectorAll(".m-bh-plot-link").forEach(W=>{W.addEventListener("click",()=>{const ie=le.find(Z=>Z.id===+W.dataset.plotId);if(ie){const Z=ce.filter(se=>se.parcelIds.includes(ie.id)).map(se=>se.id);ge(()=>Promise.resolve().then(()=>ot),void 0).then(se=>{se.initParcelDetail(ie,Z,"widgets","Tableau de bord"),setTimeout(()=>{var Ee;(Ee=document.querySelector('[data-widget-id="irrigations"]'))==null||Ee.scrollIntoView({behavior:"smooth",block:"start"})},150)})}})})}function g(){var W,ie,Z;(W=t.querySelector("#bh-btn-calendar"))==null||W.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(se=>se.openCalendar(a,""))}),(ie=t.querySelector("#bh-btn-irrigation"))==null||ie.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(se=>se.openIrrigationSaisie(a,Ge))}),(Z=t.querySelector("#bh-btn-strategie"))==null||Z.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(se=>se.openIrrigationStrategie(a,Ge))})}function x(){const W=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');W&&(W.innerHTML=v()+ft(p()),S(),g(),y(),T(),i==="admin"&&z())}function y(){const W=t.querySelector("#bh-expand");W&&W.addEventListener("click",()=>{const ie=W.dataset.expanded==="true",Z=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');Z&&(Z.innerHTML=v()+ft(p(),!ie),S(),g(),y(),T(),i==="admin"&&z())})}function T(){const W=t.querySelector("#bh-advisor-cb");W&&W.addEventListener("change",()=>{wt({irrigAdvisor:W.checked}),x()})}function z(){const W=t.querySelector("#bh-org-select");W&&(W.value=m===null?"all":String(m),W.addEventListener("change",()=>{m=W.value==="all"?null:+W.value,x()}))}S(),g(),y(),T(),i==="admin"&&z(),t.querySelectorAll('[data-widget="irrelis"] .m-il-row').forEach(W=>{W.addEventListener("click",()=>{const ie=le.find(Z=>Z.id===+W.dataset.ilPlot);ie&&ge(()=>Promise.resolve().then(()=>Ys),void 0).then(Z=>Z.openIrrelisDetail(ie))})});function k(){const W=t.querySelector('[data-widget="cumuls"] .m-widget-bd');W&&(W.innerHTML=us(a,s),I())}Vt=k;function I(){var V,U,O,H;const W=()=>{var G;const _=(G=t.querySelector("#cumuls-metric"))==null?void 0:G.value,R=t.querySelector("#cumuls-thresholds");R&&(_==="hf"?R.innerHTML=`
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`:_==="dj"?R.innerHTML=`
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`:R.innerHTML="")},ie=()=>{var Y;const _=t.querySelector("#cumuls-metric"),R=(Y=t.querySelector("#cumuls-subject"))==null?void 0:Y.value;if(!_)return;const G=li(R);_.innerHTML='<option value="">— Métrique —</option>'+G.map(oe=>`<option value="${oe.id}">${oe.label}</option>`).join(""),_.disabled=!R||!G.length,W(),Z()},Z=()=>{var fe,re,pe;const _=t.querySelector("#cumuls-create"),R=t.querySelector("#cumuls-date-err"),G=(fe=t.querySelector("#cumuls-subject"))==null?void 0:fe.value,Y=(re=t.querySelector("#cumuls-from"))==null?void 0:re.value,oe=(pe=t.querySelector("#cumuls-metric"))==null?void 0:pe.value,ne=Y?(Date.now()-new Date(Y))/864e5>365:!1;R&&(R.style.display=ne?"":"none"),_&&(_.disabled=!G||!Y||!oe||ne)};(V=t.querySelector("#cumuls-subject"))==null||V.addEventListener("change",()=>{ie(),Z()}),(U=t.querySelector("#cumuls-from"))==null||U.addEventListener("change",Z),(O=t.querySelector("#cumuls-metric"))==null||O.addEventListener("change",()=>{W(),Z()}),(H=t.querySelector("#cumuls-create"))==null||H.addEventListener("click",()=>{var re,pe,ye,ke,Ae,Se;const _=t.querySelector("#cumuls-subject"),R=_==null?void 0:_.value,G=(re=t.querySelector("#cumuls-from"))==null?void 0:re.value,Y=(pe=t.querySelector("#cumuls-metric"))==null?void 0:pe.value;if(!R||!G||!Y)return;const oe=Ke.find(te=>te.id===Y),ne=cs[Y]||{icon:"bi-bar-chart-fill",color:"#636366"},fe=Y==="hf"?{cold:+(((ye=t.querySelector("#cumuls-th-cold"))==null?void 0:ye.value)??7.2)}:Y==="dj"?{low:+(((ke=t.querySelector("#cumuls-th-low"))==null?void 0:ke.value)??0),high:+(((Ae=t.querySelector("#cumuls-th-high"))==null?void 0:Ae.value)??18)}:null;Ie.push({metricId:Y,metricLabel:(oe==null?void 0:oe.label)||Y,unit:(oe==null?void 0:oe.unit)||"",icon:ne.icon,color:ne.color,subjectKey:R,subjectLabel:(((Se=_.options[_.selectedIndex])==null?void 0:Se.text)||R).trim(),fromDate:G,value:String(ds(R,G,Y)??"—"),thresholds:fe}),f(),k()}),t.querySelectorAll(".m-cumuls-del").forEach(_=>{_.addEventListener("click",()=>{Ie.splice(+_.dataset.cidx,1),f(),k()})}),t.querySelectorAll(".m-cumuls-edit").forEach(_=>{_.addEventListener("click",()=>Ee(+_.dataset.cidx))}),t.querySelectorAll(".m-cumuls-details").forEach(_=>{_.addEventListener("click",()=>{const R=Ie[+_.dataset.cidx];R&&ge(()=>import("./chart-fullscreen-C2-G6jG3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(G=>G.initCumulFullscreen({label:R.metricLabel,unit:R.unit,color:R.color,total:+R.value||0,fromDateIso:R.fromDate,backLabel:"Tableau de bord",seedKey:`${R.subjectKey}-${R.metricId}`,growthShape:qa[R.metricId]||"linear"}))})});function se(_,R={}){return _==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${R.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:_==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${R.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${R.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function Ee(_){const R=Ie[_];if(!R)return;const G=s.filter(pe=>pe.parcelIds.length>0&&tn.has(pe.model)),Y=[...a].sort((pe,ye)=>pe.name.localeCompare(ye.name,"fr")).map(pe=>`<option value="p-${pe.id}"${R.subjectKey===`p-${pe.id}`?" selected":""}>${It(pe)}</option>`).join(""),oe=G.map(pe=>`<option value="s-${pe.id}"${R.subjectKey===`s-${pe.id}`?" selected":""}>${jt(pe,a)}</option>`).join(""),fe=li(R.subjectKey).map(pe=>`<option value="${pe.id}"${R.metricId===pe.id?" selected":""}>${pe.label}</option>`).join(""),re=document.createElement("div");re.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",re.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${Y}</optgroup>
            ${oe?`<optgroup label="Capteurs">${oe}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${fe}
          </select>
          <div id="cedit-thresholds">${se(R.metricId,R.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${R.fromDate}">
          </div>`,re.querySelector("#cedit-subject").addEventListener("change",()=>{const pe=re.querySelector("#cedit-subject").value,ye=re.querySelector("#cedit-metric"),ke=li(pe);ye.innerHTML='<option value="">— Métrique —</option>'+ke.map(Ae=>`<option value="${Ae.id}">${Ae.label}</option>`).join(""),re.querySelector("#cedit-thresholds").innerHTML=""}),re.querySelector("#cedit-metric").addEventListener("change",()=>{re.querySelector("#cedit-thresholds").innerHTML=se(re.querySelector("#cedit-metric").value)}),Ye({title:"Modifier le cumul",body:re,doneLabel:"Enregistrer",onDone:()=>{var ze,Fe,bt,dt;const pe=re.querySelector("#cedit-subject").value||R.subjectKey,ye=re.querySelector("#cedit-metric").value||R.metricId,ke=re.querySelector("#cedit-from").value||R.fromDate;if(!pe||!ye||!ke)return;if((Date.now()-new Date(ke))/864e5>365){Ge("Date trop ancienne (max 365 jours)");return}const Se=Ke.find(Dt=>Dt.id===ye),te=cs[ye]||{icon:"bi-bar-chart-fill",color:"#636366"},ae=re.querySelector("#cedit-subject"),ve=ye==="hf"?{cold:+(((ze=re.querySelector("#cedit-th-cold"))==null?void 0:ze.value)??7.2)}:ye==="dj"?{low:+(((Fe=re.querySelector("#cedit-th-low"))==null?void 0:Fe.value)??0),high:+(((bt=re.querySelector("#cedit-th-high"))==null?void 0:bt.value)??18)}:null;Ie[_]={...R,metricId:ye,metricLabel:(Se==null?void 0:Se.label)||ye,unit:(Se==null?void 0:Se.unit)||"",icon:te.icon,color:te.color,subjectKey:pe,subjectLabel:(((dt=ae.options[ae.selectedIndex])==null?void 0:dt.text)||pe).trim(),fromDate:ke,value:String(ds(pe,ke,ye)??"—"),thresholds:ve},f(),k()}})}}I(),(qe=t.querySelector("#open-chat-btn"))==null||qe.addEventListener("click",Ga);function P(){const W=t.querySelector('[data-widget="notes"] .m-widget-bd');W&&(W.innerHTML=ms(i),N())}let C=[];function N(){var V,U;C=[];const W=t.querySelector("#notes-img-input"),ie=t.querySelector("#notes-img-btn"),Z=t.querySelector("#notes-previews"),se=t.querySelector("#notes-img-error");W&&ie&&Z&&window.setupImgUpload&&window.setupImgUpload(W,ie,Z,se,C),(V=t.querySelector("#notes-add"))==null||V.addEventListener("click",async()=>{var pe,ye,ke,Ae,Se,te;const O=(pe=t.querySelector("#notes-input"))==null?void 0:pe.value.trim(),H=((ye=t.querySelector("#notes-date"))==null?void 0:ye.value)||new Date().toISOString().slice(0,10),_=((ke=t.querySelector("#notes-time"))==null?void 0:ke.value)||"",R=((Ae=t.querySelector("#notes-auteur"))==null?void 0:Ae.value)||"";if(!O)return;const G=((Se=t.querySelector("#notes-link"))==null?void 0:Se.value)||"";let Y=null,oe=null,ne="";if(G.startsWith("p-"))Y="parcel",oe=+G.slice(2),ne=((te=le.find(ae=>ae.id===oe))==null?void 0:te.name)||"";else if(G.startsWith("s-")){Y="sensor",oe=+G.slice(2);const ae=ce.find(ve=>ve.id===oe);ne=ae?ae.serial:""}const fe=[];if(C.length&&window.ImageStore)for(const ae of C){const ve=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(ve,ae),fe.push(ve)}const re=it();re.unshift({date:H,time:_,text:O,auteur:R,role:"membre",imageIds:fe,linkedType:Y,linkedId:oe,linkedName:ne}),ri(re),t.querySelector("#notes-input").value="",P()}),(U=t.querySelector("#notes-view"))==null||U.addEventListener("click",()=>{const O=G=>{const[Y,oe,ne]=G.split("-");return`${ne}/${oe}/${Y}`},H=G=>G.length>70?G.slice(0,70)+"…":G,_=document.createElement("div");function R(){const G=it();if(!G.length){_.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}_.innerHTML=G.map((Y,oe)=>{const ne=(Y.imageIds||[]).length,fe=Y.linkedType?`<span style="font-size:10px;background:${Y.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${Y.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${Y.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${Y.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${oe}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del m-del-btn" data-idx="${oe}" style="position:absolute;top:8px;right:8px">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${O(Y.date)}${Y.time?" · "+Y.time:""}</span>
                  ${Y.auteur?`<span style="color:#636366;font-weight:500">${Y.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${H(Y.text)}</div>
                ${fe||ne>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${fe}${ne>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${ne} photo${ne>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),_.querySelectorAll(".m-note-del").forEach(Y=>{Y.addEventListener("click",async oe=>{var pe;oe.stopPropagation();const ne=it(),fe=+Y.dataset.idx,re=ne[fe];(pe=re==null?void 0:re.imageIds)!=null&&pe.length&&window.ImageStore&&await window.ImageStore.remove(re.imageIds),ne.splice(fe,1),ri(ne),R(),P()})}),_.querySelectorAll(".m-note-card").forEach(Y=>{Y.addEventListener("click",async()=>{const ne=it()[+Y.dataset.idx];if(!ne)return;const fe=ne.linkedType?`<span style="font-size:11px;background:${ne.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${ne.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${ne.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${ne.linkedName||""}</span>`:"",re=document.createElement("div");if(re.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${O(ne.date)}${ne.time?" · "+ne.time:""}</span>
                  ${ne.auteur?`<span style="color:#636366;font-weight:500">${ne.auteur}</span>`:""}
                  ${fe}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${ne.text}</div>
                ${(ne.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ye({title:"Note",body:re,doneLabel:"Fermer",onDone:()=>{}}),(ne.imageIds||[]).length&&window.ImageStore){const pe=re.querySelector("#note-detail-photos");for(const ye of ne.imageIds){const ke=await window.ImageStore.get(ye);if(!ke)continue;const Ae=document.createElement("div");Ae.className="jrn-img-thumb-wrap";const Se=document.createElement("img");Se.className="jrn-img-thumb",Se.src=ke,Se.alt="",Se.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(ke)}),Ae.appendChild(Se),pe.appendChild(Ae)}}})})}R(),Ye({title:"Notes",body:_,doneLabel:"Fermer",onDone:()=>{}})});const Ee=O=>{const[H,_,R]=O.split("-");return`${R}/${_}/${H}`};t.querySelectorAll("#notes-list .m-note-del").forEach(O=>{O.addEventListener("click",async H=>{var Y;H.stopPropagation();const _=it(),R=+O.dataset.idx,G=_[R];(Y=G==null?void 0:G.imageIds)!=null&&Y.length&&window.ImageStore&&await window.ImageStore.remove(G.imageIds),_.splice(R,1),ri(_),P()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(O=>{O.addEventListener("click",async()=>{const _=it()[+O.dataset.idx];if(!_)return;const R=_.linkedType?`<span style="font-size:11px;background:${_.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${_.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${_.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${_.linkedName||""}</span>`:"",G=document.createElement("div");if(G.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${Ee(_.date)}${_.time?" · "+_.time:""}</span>
              ${_.auteur?`<span style="color:#636366;font-weight:500">${_.auteur}</span>`:""}
              ${R}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${_.text}</div>
            ${(_.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ye({title:"Note",body:G,doneLabel:"Fermer",onDone:()=>{}}),(_.imageIds||[]).length&&window.ImageStore){const Y=G.querySelector("#note-detail-photos");for(const oe of _.imageIds){const ne=await window.ImageStore.get(oe);if(!ne)continue;const fe=document.createElement("div");fe.className="jrn-img-thumb-wrap";const re=document.createElement("img");re.className="jrn-img-thumb",re.src=ne,re.alt="",re.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(ne)}),fe.appendChild(re),Y.appendChild(fe)}}})})}N();function X(){t.querySelectorAll(".m-tr-chart-wrap").forEach(W=>{const ie=W.querySelector(".m-tr-cursor"),Z=W.querySelector(".m-tr-tooltip");if(!Z)return;const se=JSON.parse(W.dataset.series||"[]"),Ee=W.dataset.unit||"",V=se.length,U=26,O=270;W.addEventListener("pointermove",H=>{const _=W.getBoundingClientRect(),R=Math.max(0,Math.min(((H.clientX-_.left)*(U+O)/_.width-U)/O,1)),G=se[Math.round(R*(V-1))]??null;if(ie){const Y=U+Math.round(R*O);ie.setAttribute("x1",Y),ie.setAttribute("x2",Y),ie.setAttribute("opacity","1")}Z.style.display="",Z.style.left=`${Math.max(0,Math.min(H.clientX-_.left-24,_.width-60))}px`,Z.textContent=G!==null?`${(+G).toFixed(1)} ${Ee}`:"—"}),W.addEventListener("pointerleave",()=>{Z.style.display="none",ie==null||ie.setAttribute("opacity","0")})})}function Q(){const W=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');W&&(W.innerHTML=os(a,s),J())}Nt=Q;function J(){var se,Ee,V,U,O;const W=()=>{var _,R;const H=t.querySelector("#msr-create");H&&(H.disabled=!((_=t.querySelector("#msr-subject"))!=null&&_.value)||!((R=t.querySelector("#msr-metric"))!=null&&R.value)||Pe.length>=St)},ie=()=>{var G;const H=t.querySelector("#msr-metric"),_=(G=t.querySelector("#msr-subject"))==null?void 0:G.value;if(!H)return;const R=ka(_,s);H.innerHTML='<option value="">— Métrique —</option>'+R.map(Y=>`<option value="${Y}">${Si[Y]}</option>`).join(""),H.disabled=!_||!R.length,W()},Z=()=>{var R;const H=t.querySelector("#msr-step"),_=((R=t.querySelector("#msr-period"))==null?void 0:R.value)||"7d";H&&(H.innerHTML=Qs(_).map(G=>`<option value="${G.id}">${G.label}</option>`).join(""),W())};(se=t.querySelector("#msr-subject"))==null||se.addEventListener("change",()=>{ie(),W()}),(Ee=t.querySelector("#msr-period"))==null||Ee.addEventListener("change",()=>{Z(),W()}),(V=t.querySelector("#msr-metric"))==null||V.addEventListener("change",W),(U=t.querySelector("#msr-step"))==null||U.addEventListener("change",W),(O=t.querySelector("#msr-create"))==null||O.addEventListener("click",()=>{var re,pe,ye;const H=t.querySelector("#msr-subject"),_=t.querySelector("#msr-metric"),R=t.querySelector("#msr-period"),G=t.querySelector("#msr-step"),Y=H==null?void 0:H.value,oe=_==null?void 0:_.value,ne=R==null?void 0:R.value,fe=G==null?void 0:G.value;!Y||!oe||!ne||!fe||(Pe.push({subjectKey:Y,subjectLabel:(((re=H.options[H.selectedIndex])==null?void 0:re.text)||Y).trim(),metricId:oe,metricLabel:Si[oe]||oe,unit:wa[oe]||"",period:ne,periodLabel:(((pe=R.options[R.selectedIndex])==null?void 0:pe.text)||ne).trim(),step:fe,stepLabel:(((ye=G.options[G.selectedIndex])==null?void 0:ye.text)||fe).trim(),color:Xs[oe]||ns[Pe.length%ns.length]}),f(),Q())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(H=>{H.addEventListener("click",()=>{Pe.splice(+H.dataset.idx,1),f(),Q()})}),t.querySelectorAll(".m-wf-view-data").forEach(H=>{H.addEventListener("click",()=>{const _=H.dataset.metricId||null;if(H.dataset.sensorId){const R=+H.dataset.sensorId,G=ce.find(Y=>Y.id===R);G&&ge(()=>import("./chart-fullscreen-C2-G6jG3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(Y=>Y.initChartFullscreen({sensor:G,metricId:_,backLabel:G.model+" "+G.serial}))}else if(H.dataset.parcelId){const R=+H.dataset.parcelId,G=a.find(oe=>oe.id===R),Y=ce.filter(oe=>{var ne;return(ne=oe.parcelIds)==null?void 0:ne.includes(R)}).map(oe=>oe.id);G&&ge(()=>import("./chart-fullscreen-C2-G6jG3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(oe=>oe.initChartFullscreen({parcel:G,linkedSensorIds:Y,metricId:_,backLabel:G.name}))}})}),X()}J(),t.querySelectorAll(".m-prev-card").forEach(W=>{W.addEventListener("click",()=>{var Z,se;const ie=((se=(Z=t.querySelector(".m-prev-select"))==null?void 0:Z.selectedOptions[0])==null?void 0:se.text)||"";B(l,+W.dataset.day,ie)})});const ee=t.querySelector(".m-prev-expand-btn");ee&&ee.addEventListener("click",()=>{var ie,Z;const W=((Z=(ie=t.querySelector(".m-prev-select"))==null?void 0:ie.selectedOptions[0])==null?void 0:Z.text)||"";B(l,3,W)}),t.querySelectorAll(".m-widget-menu").forEach(W=>{W.addEventListener("click",ie=>{var O;ie.stopPropagation();const Z=Le.find(H=>H.id===W.dataset.widget);if(!Z)return;const se=document.createElement("div"),Ee=Z.id==="bilan_hydrique",V=mt().sensorlessEnabled??!0;se.innerHTML=`
          <div class="m-sheet-links">
            ${Ee?`<a class="m-sheet-link" id="menu-sensorless">${V?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const U=Ye({title:Z.title,body:se,doneLabel:"Fermer",onDone:()=>{}});(O=se.querySelector("#menu-sensorless"))==null||O.addEventListener("click",()=>{wt({sensorlessEnabled:!V}),U.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{U.remove();const H=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');H&&(H.innerHTML=v()+ft(p()),S(),g(),y(),i==="admin"&&z())},280)}),se.querySelector("#menu-move").addEventListener("click",()=>{U.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{U.remove(),M()},280)}),se.querySelector("#menu-remove").addEventListener("click",()=>{Z.active=!1,U.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{U.remove(),f(),A()},280),Ge("Widget retiré")})})})}function M(){const S=document.createElement("div"),g=()=>Le.filter(y=>y.active&&!y.fixed),x=()=>{const y=g();S.innerHTML=y.map((T,z)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${T.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${z}" data-dir="-1" ${z===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${z}" data-dir="1" ${z===y.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),S.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(T=>{T.addEventListener("click",()=>{const z=g(),k=+T.dataset.i,I=k+ +T.dataset.dir,P=Le.indexOf(z[k]),C=Le.indexOf(z[I]);[Le[P],Le[C]]=[Le[C],Le[P]],f(),x(),A()})})};x(),Ye({title:"Réorganiser les widgets",body:S,doneLabel:"Fermer",onDone:()=>{}})}function j(){const S=i==="admin",g=we(`
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
            ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(x=>`
              <button class="m-add-item" data-action="${x.action}">
                <i class="bi ${x.icon}"></i>
                <span>${x.label}</span>
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
      </div>`);g.querySelector(".m-detail-back").addEventListener("click",be),g.querySelectorAll(".m-add-item").forEach(x=>{x.addEventListener("click",()=>{const y=x.dataset.action;y==="irrigation"?(be(),ge(()=>Promise.resolve().then(()=>et),void 0).then(T=>T.openIrrigationSaisie(a,Ge))):y==="strategie-irrigation"?(be(),ge(()=>Promise.resolve().then(()=>et),void 0).then(T=>T.openIrrigationStrategie(a,Ge))):Ge("Fonctionnalité à venir")})})}function q(){const S=document.createElement("div"),g=()=>{const x=Le.filter(y=>!y.fixed);S.innerHTML=x.map(y=>`
        <div class="m-catalog-row${y.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${y.color}20;color:${y.color}"><i class="bi ${y.icon}"></i></div>
          <span class="m-catalog-title">${y.title}</span>
          ${y.available?`<button class="m-catalog-toggle${y.active?" m-catalog-toggle--on":""}" data-cid="${y.id}" type="button">
                <i class="bi ${y.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),S.querySelectorAll("[data-cid]").forEach(y=>{y.addEventListener("click",()=>{const T=Le.find(z=>z.id===y.dataset.cid);T&&(T.active=!T.active,f(),g(),A())})})};g(),Ye({title:"Widgets disponibles",body:S,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",S=>{if(S.key!=="weenat_proto_store")return;Ts(le);const g=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');g&&(g.innerHTML=v()+ft(p()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=j,A()}const bs={"Blé tendre":["Semis","Levée","Tallage","Épi 1 cm","Épiaison","Floraison","Maturité"],Maïs:["Semis","Levée","4 feuilles","6 feuilles","Floraison ♂","Soie","Maturité"],Colza:["Semis","Levée","Rosette","Reprise","Bouton floral","Floraison","Siliques","Maturité"],Tournesol:["Semis","Levée","4 feuilles","Bouton floral","Floraison","Maturité"],Vigne:["Débourrement","Sortie feuilles","Floraison","Nouaison","Véraison","Récolte"],Sorgho:["Semis","Levée","Montaison","Floraison","Maturité"],"Orge de printemps":["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],Orge:["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],"Pomme de terre":["Plantation","Levée","Croissance","Tuberisation","Grossissement","Maturité"],Cerisier:["Dormance","Bourgeons","Débourrement","Floraison","Nouaison","Fructification","Récolte"],Poire:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Pomme:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Salade:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Laitue:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Betterave:["Semis","Levée","4 feuilles","Fermeture rang","Grossissement","Récolte"]},fs=["Semis","Levée","Floraison","Récolte"];function Ka(e){if(!e)return fs;const i=e.toLowerCase();for(const t of Object.keys(bs))if(i.startsWith(t.toLowerCase()))return bs[t];return fs}const Lt=new URLSearchParams(window.location.search).get("role")==="adherent"?"adherent":"admin";function ci(e){return Lt==="adherent"?le.filter(i=>i.orgId===e.orgId):le}const Ce={djMin:0,djMax:18,hfSeuil:7.2},Za={etp:"etp",enso:"rayo",pluie:"pluie",djc:"dj",hfroid:"hf",humec:"humec"},Xa={etp:"evapo",enso:"solar",pluie:"bursty",djc:"temperature",hfroid:"cold",humec:"bursty"},hs={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#0B3A64"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"},irrigation:{metricLabel:"Cumul d'irrigation",unit:"mm",icon:"bi-moisture",color:"#FF8C00"}},Qa=4,eo=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermomètre-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Capteur d'humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],Ei={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},ln=e=>`dash-widgets-parcel-${e}`;function to(e,i){const t=i.map(o=>ce.find(s=>s.id===o)).filter(Boolean),n=new Set(t.map(o=>o.model)),a=["previsions-5j","cumuls","irrigations"];return Object.entries(Ei).forEach(([o,s])=>{s.some(l=>n.has(l))&&a.push(o)}),Tt(e)&&a.push("irrelis"),a}function Ut(e,i){try{const t=JSON.parse(localStorage.getItem(ln(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return to(e,i)}function rn(e,i){localStorage.setItem(ln(e),JSON.stringify(i))}function io(e,i,t){const n=new Set(Ut(e,i)),a=eo.map((s,l)=>`
    <div class="m-list-section-header"${l>0?' style="margin-top:20px"':""}>${s.title}</div>
    ${s.items.map(m=>{const c=n.has(m.id);return`
        <div class="m-wcat-item">
          <span>${m.label}</span>
          ${c?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${m.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`}).join("")}`).join(""),o=we(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Ajouter un widget</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:8px 0 32px">${a}</div>
    </div>`);o.querySelector(".m-detail-back").addEventListener("click",be),o.querySelectorAll(".m-wcat-add").forEach(s=>{s.addEventListener("click",()=>{const l=s.dataset.wid,m=Ut(e,i);m.includes(l)||(m.push(l),rn(e.id,m)),be(),t==null||t()})})}const Ve={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Capteur d'humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1},irrigation:{label:"Irrigation",unit:"mm",color:"#FF8C00",cumul:!0,cumulsType:"irrigation"},rfu:{label:"Niveau de réservoir",unit:"mm",color:"#0099CC",cumul:!1},nrs:{label:"Niveau de réservoir (spatialisé)",unit:"mm",color:"#0172A4",cumul:!1}},so=new Set(["pluie","temperature","humidite","vent","pothydr","etp","temp_rosee","rayonnement"]),_i={j7j2:2},At={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function Xt(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3},rfu:{base:60,amp:30,min:0,max:120},nrs:{base:65,amp:28,min:0,max:120}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(n,a)=>{const o=a/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(o-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,s))})}const Qt={"365d":52,"30d":60,"7d":84,j7j2:108,hier:48,"1d":24,custom:60},qt={"365d":525600,"30d":43200,"7d":10080,j7j2:10080,hier:1440,"1d":1440,custom:10080};function cn(e,i,t=0,n=0,a=null){const o=a??(Qt[i]||60),s=qt[i]||10080,l=Date.now(),m=l-s*6e4,c=s*6e4/o,p=new Array(o+t).fill(0),v=t>0?n*6e4/t:0;return me.filter(u=>u.plotId===e).forEach(u=>{const d=new Date(u.iso).getTime();if(!(d<m)){if(d<=l){const r=Math.min(o-1,Math.floor((d-m)/c));p[r]+=u.mm}else if(t>0&&d<=l+n*6e4){const r=Math.min(t-1,Math.floor((d-l)/v));p[o+r]+=u.mm}}}),p}function no(e,i,t,n,a,o=20,s=0){const l=qt[e]||10080,m=l+s,c=new Date,p=r=>e==="1d"||e==="hier"?`${String(r.getHours()).padStart(2,"0")}h`:e==="365d"?r.toLocaleDateString("fr-FR",{month:"short"}):`${String(r.getDate()).padStart(2,"0")}/${String(r.getMonth()+1).padStart(2,"0")}`,v=4,u=i-t-n,d=a-o;return Array.from({length:v+1},(r,f)=>{const b=f/v,$=new Date(c.getTime()+(b*m-l)*6e4),h=(t+b*u).toFixed(1),L=f===0?"start":f===v?"end":"middle";return[`<line x1="${h}" y1="${d}" x2="${h}" y2="${d+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${h}" y="${a-3}" text-anchor="${L}" font-size="9" fill="#8e8e93" font-family="-apple-system">${p($)}</text>`].join("")}).join("")}function ao(e,i,t,n="7d",a="",o=null){const s=Qt[n]||60,l=qt[n]||10080,m=_i[n]||0,c=l/1440,p=m>0?Math.round(s*c/(c+m)):s,v=s-p,u=v>0?m*1440:0,r=v>0&&so.has(e)?v:0,f=e==="irrigation"?cn(o,n,v,v>0?m*1440:0,p):Xt(e,p+r),b=320,$=100,h=34,L=6,A=10,D=20,E=b-h-L,w=$-A-D,B=t?0:Math.min(...f),F=Math.max(...f,B+.001),M=F-B,j=J=>h+J/(s-1)*E,q=J=>A+w-(J-B)/M*w,S=`g${Math.random().toString(36).slice(2,8)}`,g=[0,.5,1].map(J=>{const ee=B+J*M,de=A+w-J*w;return`<text x="${h-3}" y="${(de+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${ee<10?ee.toFixed(1):Math.round(ee)}</text>`}).join(""),x=[.25,.5,.75].map(J=>{const ee=(A+w-J*w).toFixed(1);return`<line x1="${h}" y1="${ee}" x2="${b-L}" y2="${ee}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),y=`<line x1="${h}" y1="${A+w}" x2="${b-L}" y2="${A+w}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,T=no(n,b,h,L,$,D,u);let z="";if(v>0){const J=j(p-.5),ee=`stripe${S}`;z=`<defs><pattern id="${ee}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.06)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.18)" stroke-width="3"/>
      </pattern></defs>
      <rect x="${J.toFixed(1)}" y="${A}" width="${(b-L-J).toFixed(1)}" height="${w}" fill="url(#${ee})"/>
      <line x1="${J.toFixed(1)}" y1="${A}" x2="${J.toFixed(1)}" y2="${A+w}" stroke="rgba(142,142,147,.35)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(b-L-3).toFixed(1)}" y="${(A+9).toFixed(1)}" text-anchor="end" font-size="8" fill="#8e8e93" font-family="-apple-system" font-style="italic">Prévisions</text>`}if(t){const J=E/f.length*.7,ee=f.map((de,he)=>{const xe=(de-B)/M*w,je=A+w-xe,Ue=he>=p;return`<rect x="${(j(he)-J/2).toFixed(1)}" y="${je.toFixed(1)}" width="${J.toFixed(1)}" height="${xe.toFixed(1)}" fill="${Ue?"#C7C7CC":i}" opacity="${Ue?".55":".8"}" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${b} ${$}" width="100%" height="${$}" preserveAspectRatio="none">${z}${g}${x}${y}${T}${ee}</svg>`}const k=f.map((J,ee)=>[j(ee),q(J)]),I=k.slice(0,p),P=k.slice(p-1),C=I.map(([J,ee],de)=>`${de?"L":"M"}${J.toFixed(1)},${ee.toFixed(1)}`).join(" "),N=r>0?P.map(([J,ee],de)=>`${de?"L":"M"}${J.toFixed(1)},${ee.toFixed(1)}`).join(" "):"",X=`${C} L${j(p-1).toFixed(1)},${(A+w).toFixed(1)} L${h},${(A+w).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:f.map(J=>+J.toFixed(2)),minV:+B.toFixed(2),maxV:+F.toFixed(2)}))}" data-color="${i}" data-unit="${a}" style="position:relative">
    <svg viewBox="0 0 ${b} ${$}" width="100%" height="${$}" preserveAspectRatio="none">
      <defs><linearGradient id="${S}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${z}
      ${g}${x}${y}
      <path d="${X}" fill="url(#${S})"/>
      <path d="${C}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${N?`<path d="${N}" fill="none" stroke="${i}" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>`:""}
      ${k.map(([J,ee],de)=>`<circle cx="${J.toFixed(1)}" cy="${ee.toFixed(1)}" r="2" fill="${i}" opacity="${de>=p?".55":"1"}"/>`).join("")}
      ${T}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function oo(e,i,t,n=null){if(!t)return"";const a=Qt[i]||60,o=qt[i]||10080,s=_i[i]||0,l=o/1440,m=s>0?Math.round(a*l/(l+s)):a,c=o/(m*60),p=e==="irrigation"?cn(n,i,0,0,m):Xt(e,m);let v=[];if(t==="temp"){const u=p.reduce((r,f)=>r+Math.max(0,Math.min(f,Ce.djMax)-Ce.djMin),0)*(c/24),d=p.filter(r=>r<Ce.hfSeuil).length*c;v=[{label:"Cumul de degrés jours",val:`${Math.round(u)} DJ`,metricId:"dj",thresholdText:`${Ce.djMin}°C → ${Ce.djMax}°C`},{label:"Cumul d'heures de froid",val:`${Math.round(d)} h`,metricId:"hf",thresholdText:`< ${Ce.hfSeuil}°C`}]}else if(t==="pluie")v=[{label:"Cumul de pluie",val:`${p.reduce((d,r)=>d+r,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const u=p.filter(d=>d>120).length*c;v=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(u)} h`,metricId:"rayo"}]}else if(t==="etp")v=[{label:"Cumul d'évapotranspiration",val:`${(p.reduce((d,r)=>d+r,0)*(c/24)).toFixed(1)} mm`,metricId:"etp"}];else if(t==="hws"){const u=p.filter(d=>d>50).length*c;v=[{label:"Cumul d'heures d'humectation foliaire",val:`${Math.round(u)} h`,metricId:"humec"}]}else t==="irrigation"&&(v=[{label:"Cumul irrigation",val:`${p.reduce((d,r)=>d+r,0).toFixed(1)} mm`,metricId:"irrigation"}]);return v.length?`<div class="m-chart-cumuls">${v.map(u=>{const d=u.metricId==="dj"||u.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${u.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${u.label}</span>
          ${u.thresholdText?`<span class="m-chart-cumul-thresh">${u.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${u.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${d}
        <button class="m-cumul-add-btn" data-cumul-label="${u.label}" data-cumul-val="${u.val}" data-cumul-metric-id="${u.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}const lo={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",j7j2:"J-7 → J+2",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},ro={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"};function gs(e,i,t=null,n=null,a="1h",o=null){const s=Ve[e];if(!s)return"";const l=oo(e,i,s.cumulsType,n),m=t||e==="irrigation"?`<div class="m-chart-details-link" data-sensor-id="${t??""}" data-metric-id="${e}">Voir détails →</div>`:"",c=o?`<button class="m-msr-add-btn" data-msr-metric-id="${e}" data-msr-subject-key="${o.key}" data-msr-subject-label="${o.label}" data-msr-period="${i}" data-msr-step="${a}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`:"";return`
    <div class="m-chart-card" data-metric-id="${e}">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${s.color}">${s.label}</span>
        ${c}
      </div>
      ${ao(e,s.color,s.cumul,i,s.unit||"",n)}
      ${m}
      ${l}
    </div>`}function co(e){const i=e.dataset.msrMetricId,t=e.dataset.msrSubjectKey,n=e.dataset.msrSubjectLabel,a=e.dataset.msrPeriod,o=e.dataset.msrStep,s=Ve[i];if(!s)return;const l=en({subjectKey:t,subjectLabel:n,metricId:i,metricLabel:s.label,unit:s.unit||"",period:a,periodLabel:lo[a]||a,step:o,stepLabel:ro[o]||o,color:s.color});if(l==="max"){K(`Maximum de mesures atteint (${Qa})`);return}if(l==="dup"){K("Cette mesure est déjà dans vos favoris");return}K("Mesure ajoutée au tableau de bord")}function uo(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function po(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:n,maxV:a}=i,o=e.querySelector(".m-chart-tip"),s=e.querySelector(".m-chart-crosshair"),l=e.dataset.color||"#0172A4",m=e.dataset.unit||"";function c(v){const u=e.getBoundingClientRect(),d=Math.max(0,Math.min(1,(v-u.left)/u.width)),r=Math.round(d*(t.length-1)),f=t[r],b=d*100,$=(f<10?f.toFixed(1):String(Math.round(f)))+(m?` ${m}`:""),h=uo(l);s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${b}%;width:1px;background:${l};opacity:.5`,o.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(b,75)}%;background:${l};color:${h};border:1.5px solid ${h};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,o.textContent=$}function p(){s.style.display="none",o.style.display="none"}e.addEventListener("pointermove",v=>{v.preventDefault(),c(v.clientX)}),e.addEventListener("pointerdown",v=>c(v.clientX)),e.addEventListener("pointerup",p),e.addEventListener("pointerleave",p),e.style.cursor="crosshair"}function mo(e){const i=me.filter(r=>r.plotId===e.id),t=i.filter(r=>r.real),n=i.filter(r=>!r.real),a=t.reduce((r,f)=>r+f.mm,0),o=n.reduce((r,f)=>r+f.mm,0),s=He(e.id).irrigation??e.irrigation,m=s&&!new Set(["Non irrigué","Non renseigné",""]).has(s),c=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-act-saisie" type="button"${m?"":" disabled"}>+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-act-saison" type="button"${m?"":" disabled"}>↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`;if(!m)return pt("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3,#8e8e93)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez renseigner un type d'irrigation sur cette parcelle.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-set-type" type="button" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,"irrigations");if(!i.length)return pt("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3,#8e8e93);padding:8px 0">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${c}
      </div>`,"irrigations");let p="";if(i.some(r=>r.fromStrategy)){const r=[...i].sort((h,L)=>h.iso.localeCompare(L.iso)),f=r[r.length-1],b=r[r.length-2],$=b?Math.round((new Date(f.iso)-new Date(b.iso))/864e5):null;p=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${f.mm} mm</strong>${$?` tous les <strong>${$} jours</strong>`:""}.</div>
      </div>`}const u=a+o,d=`
    <div class="w-irrig-layout">
      <div class="w-irrig-kpis">
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Effectuées</div>
          <div class="w-irrig-kpi-val" style="color:#E07820">${a} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Planifiées</div>
          <div class="w-irrig-kpi-val" style="color:#FFB705">${o} <span class="w-irrig-unit">mm</span></div>
        </div>
        <div class="w-irrig-kpi">
          <div class="w-irrig-kpi-lbl">Total</div>
          <div class="w-irrig-kpi-val" style="color:#8e8e93">${u} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${p}
      ${c}
      <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-view-cal" type="button" style="margin-top:5px"><i class="bi bi-calendar3"></i> Voir les irrigations</button>
    </div>`;return pt("Irrigations","bi-moisture","#FF8C00",d,"irrigations")}function vo(e,i=[]){const t=Ut(e,i),n=i.map(o=>ce.find(s=>s.id===o)).filter(Boolean);let a="";for(const o of t)if(o==="irrigations")a+=mo(e);else if(o==="cumuls")a+=fo(e,i);else if(o==="previsions-5j")a+=go(e);else if(o==="irrelis")a+=Us(e);else if(Ei[o]){const s=new Set(Ei[o]),l=n.filter(m=>s.has(m.model));l.length&&(a+=yo(l,o))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${a}
    </div>`}function pt(e,i,t,n,a="",o=""){return`
    <div class="m-widget-card"${a?` data-widget-id="${a}"`:""}>
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${a}" type="button">•••</button>
      </div>
      ${o?`<div class="m-widget-card-subtitle">${o}</div>`:""}
      ${n}
    </div>`}function st(e,i,t){const n=(e*9301+49297)%233280,o={etp:1+n%60/100,pluie:.8+n%70/100,djc:4+n%60/10,hfroid:.4+n%12/10,humec:.1+n%20/100,enso:4+n%40/10}[i]??1,s=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(o*s*10)/10}const dn=e=>`m-pcumuls-${e}`;function at(e){try{return JSON.parse(localStorage.getItem(dn(e)))||{}}catch{return{}}}function _t(e,i){const t=at(e);localStorage.setItem(dn(e),JSON.stringify({...t,...i}))}const bo={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function fo(e,i=[]){const t=new Set;i.forEach(d=>{const r=ce.find(f=>f.id===d);r&&(At[r.model]||[]).forEach(f=>t.add(f))});const n=`${new Date().getFullYear()}-01-01`,a=at(e.id),o=new Set(a.hidden||[]),s=a.dates||{},l=a.cfg||{};e.id;const m=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:st(e.id,"etp",s.etp||n),show:!0},{id:"enso",label:"Rayonnement solaire",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:st(e.id,"enso",s.enso||n),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:st(e.id,"pluie",s.pluie||n),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:st(e.id,"djc",s.djc||n),show:t.has("temperature"),cfg:!0,cfgLabel:`${l.djMin??0}–${l.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#0B3A64",icon:"bi-snow",val:st(e.id,"hfroid",s.hfroid||n),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${l.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:st(e.id,"humec",s.humec||n),show:t.has("humectation")}].filter(d=>d.show),c=m.filter(d=>!o.has(d.id)),p=m.filter(d=>o.has(d.id)),v=p.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${p.map(d=>`
          <button class="m-pcumul-add" data-cid="${d.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${d.icon}" style="color:${d.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${d.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",u=c.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${c.map(d=>{const r=s[d.id]||n;return`<div class="m-cumuls-saved-card" style="position:relative">
          <div style="position:absolute;top:8px;right:8px;display:flex;flex-direction:column;align-items:center;gap:18px">
            <button class="m-pcumul-del m-del-btn" data-cid="${d.id}" data-pid="${e.id}" type="button">×</button>
            <button class="m-pcumul-add-fav m-cumul-add-btn" data-cid="${d.id}" data-pid="${e.id}" data-valnum="${d.val}" data-unit="${d.unit}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
          </div>
          <div class="m-pcumul-hd">
            <div class="m-pcumul-icon" style="background:${d.color}22;color:${d.color}"><i class="bi ${d.icon}"></i></div>
            <div class="m-pcumul-label" style="color:${d.color}">${d.label}</div>
          </div>
          <div class="m-pcumul-value" style="color:${d.color}">${d.val}<span class="m-pcumul-unit">${d.unit}</span></div>
          <div class="m-pcumul-since">
            <span>Depuis le</span>
            <input type="date" class="m-pcumul-date m-pcumul-date-inp" data-cid="${d.id}" data-pid="${e.id}" value="${r}">
            ${d.cfg?`<button class="m-pcumul-cfg m-pcumul-cfg-btn" data-cid="${d.id}" data-pid="${e.id}"><i class="bi bi-gear"></i> ${d.cfgLabel}</button>`:""}
          </div>
          <button class="m-pcumul-details m-widget-details-link" data-cid="${d.id}" data-pid="${e.id}" data-label="${d.label}" data-unit="${d.unit}" data-color="${d.color}" data-val="${d.val}" data-from="${r}">Voir détails →</button>
        </div>`}).join("")}${v}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${v}`;return pt("Cumuls","bi-bar-chart-fill","#0172A4",u,"cumuls")}const un={};function pn(e){const i=(e==null?void 0:e.id)||1,t=(o,s,l)=>{const m=Math.sin(o*9301+49297)*43758.5453;return s+Math.floor((m-Math.floor(m))*(l-s+1))},n=[{label:"Ensoleillé",icon:"bi-sun",color:"#f4a01c"},{label:"Part. nuageux",icon:"bi-cloud-sun",color:"#5b8dd9"},{label:"Couvert",icon:"bi-cloud",color:"#8e8e93"},{label:"Pluie",icon:"bi-cloud-rain-fill",color:"#2E75B6"},{label:"Orageux",icon:"bi-cloud-lightning-rain",color:"#bf5af2"}],a=new Date;return Array.from({length:14},(o,s)=>{const l=new Date(a);l.setDate(l.getDate()+s);const m=t(i*17+s*7,0,4),c=n[m],p=m>=3,v=t(i*3+s*11,6,14),u=t(i*5+s*13,17,32),d=Array.from({length:24},(r,f)=>{const b=Math.sin(Math.PI*(f-6)/12),$=Math.round(v+(u-v)*Math.max(0,b)),h=p&&f>=8&&f<=16&&t(i+s*100+f,0,9)>5?+(t(i+s*100+f+1,0,30)/10).toFixed(1):0;return{label:`${String(f).padStart(2,"0")}h`,temp:$,pluie:h,hum:Math.round(85-40*Math.max(0,b)),vent:t(i*7+s*50+f,8,30),icon:h>0?"bi-cloud-rain-fill":f<7||f>20?"bi-moon-fill":c.icon}});return{dayLabel:s===0?"Aujourd'hui":s===1?"Demain":l.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:l.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...c,pluie:p?t(i*23+s*31,2,20):0,tMin:v,tMax:u,ventMoy:t(i*11+s*17,8,30),ventRafales:t(i*13+s*19,18,50),hours:d}})}function di(e,i,t){const n=e[i],a=`${n.dayLabel.charAt(0).toUpperCase()+n.dayLabel.slice(1)} · ${n.dateStr}`,o=t?`<div style="font-size:12px;color:#8e8e93;text-align:center;padding:2px 0 6px"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${t}</div>`:"";return`
    <div class="m-detail-header">
      <div class="m-detail-row1">
        <div style="width:32px"></div>
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
        <div style="width:32px"></div>
      </div>
      <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
        <button class="m-day-nav" id="prev-day" ${i===0?"disabled":""}>‹</button>
        <div style="display:flex;flex-direction:column;align-items:center;gap:2px">
          ${o}
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${n.icon}" style="color:${n.color};font-size:20px"></i><span class="m-d-name">${a}</span></div>
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
    </div>`}function ho(e){const i=un[e.id]||pn(e),t=e.name,n=we(di(i,0,t)),a=(o,s)=>{var l,m;o.querySelector(".m-detail-back").addEventListener("click",be),(l=o.querySelector("#prev-day"))==null||l.addEventListener("click",()=>{o.innerHTML=di(i,s-1,t),a(o,s-1)}),(m=o.querySelector("#next-day"))==null||m.addEventListener("click",()=>{o.innerHTML=di(i,s+1,t),a(o,s+1)})};a(n,0)}function go(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=$e.find(c=>c.id===(e==null?void 0:e.orgId)),n=(e==null?void 0:e.ville)||(t==null?void 0:t.ville)||"—",a=(e==null?void 0:e.id)||1,o=pn(e);un[a]=o;const s=o.slice(0,5).map((c,p)=>({lbl:p===0?"Auj.":i[new Date(Date.now()+p*864e5).getDay()],date:c.dateStr,tmax:c.tMax,tmin:c.tMin,pluie:c.pluie,vent:c.ventMoy,icon:c.icon,label:c.label})),l=c=>`
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${c.lbl}</div>
      <div class="m-wprev5-date">${c.date}</div>
      <i class="bi ${c.icon} m-wprev5-icon" title="${c.label}"></i>
      <div class="m-wprev5-rain${c.pluie===0?" m-wprev5-rain--none":""}">${c.pluie>0?c.pluie+" mm":"—"}</div>
      <div class="m-wprev5-tmax">${c.tmax}°</div>
      <div class="m-wprev5-tmin">${c.tmin}°</div>
      <div class="m-wprev5-wind">${c.vent} <span>km/h</span></div>
    </div>`,m=`
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${n}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${s.map(l).join("")}</div>
    <button class="m-prev5j-voir-details m-widget-details-link">Voir détails →</button>`;return pt("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",m,"previsions-5j")}function yo(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},n={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},a={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(o=>{const s=t[o.model]||"bi-broadcast",l=mn[o.model]||o.model,m=n[o.model]||"#0172A4",c=a[o.model]||[],p=c[0],u=o.model.startsWith("CAPA")?30:15,d=u-o.id*7%u,r=`
      <div class="m-wsensor-vals" style="margin:8px 0">
        ${c.slice(0,4).map(f=>{const b=Ve[f];if(!b)return"";const h=Xt(f,1)[0],L=h<10?h.toFixed(1):Math.round(h);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${b.label}</span>
            <span class="m-wsensor-value" style="color:${b.color}">${L} ${b.unit}</span>
          </div>`}).join("")}
      </div>
      <div style="font-size:11px;color:#8e8e93">Il y a ${d} min · ${o.serial}</div>
      <button class="m-wsensor-voir-donnees m-widget-details-link" data-sensor-id="${o.id}" data-metric-id="${p}">Voir détails →</button>`;return pt(l,s,m,r,i)}).join("")}function xo(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function $o(e,i,t){const n=new Set;i.forEach(b=>{const $=ce.find(h=>h.id===b);$&&(At[$.model]||[]).forEach(h=>n.add(h))});const a=[...new Set(["etp","rayonnement","temp_rosee",...n])].filter(b=>Ve[b]),o=Qt[t]||60,s=qt[t]||10080,l=_i[t]||0,m=s/1440,c=l>0?Math.round(o*m/(m+l)):o,p=s/c*6e4,v=new Date,u=new Date(v-s*6e4),d=["Horodatage",...a.map(b=>`${Ve[b].label} (${Ve[b].unit})`)].join(";"),r=Array.from({length:c},(b,$)=>[new Date(u.getTime()+$*p).toISOString().replace("T"," ").slice(0,19),...a.map(L=>Xt(L,1)[0].toFixed(2))].join(";")),f=(e.name||"parcelle").replace(/[^\w]/g,"_");xo([d,...r].join(`\r
`),`${f}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function wo(e,i="7d",t="1h",n=null){const a=new Set,o={};e.forEach(d=>{const r=ce.find(f=>f.id===d);r&&(At[r.model]||[]).forEach(f=>{a.add(f),o[f]||(o[f]=d)})});const s=me.some(d=>d.plotId===n),l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),m=e.some(d=>{const r=ce.find(f=>f.id===d);return r&&l.has(r.model)}),c=["pluie","irrigation","temperature","humidite","pothydr","teneur","temp_sol","vent","rayonnement","humectation","par","temp_rosee","etp"],p=[...new Set([...a,"etp","rayonnement","temp_rosee",...m?["rfu"]:["nrs"],...s?["irrigation"]:[]])].filter(d=>Ve[d]).sort((d,r)=>{const f=c.indexOf(d),b=c.indexOf(r);return(f===-1?999:f)-(b===-1?999:b)}),v=new Date().toISOString().slice(0,10),u=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-from m-custom-date" value="${u}">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to m-custom-date" value="${v}">
      </div>`:""}
    </div>
    <div class="m-detail-section">
      ${(()=>{const d=e[0]??null,r=n!=null?le.find(b=>b.id===n):null,f=r?{key:`p-${r.id}`,label:r.name}:null;return p.map(b=>b==="irrigation"?gs(b,i,null,n,t,f):gs(b,i,o[b]??d,null,t,f)).join("")})()}
    </div>`}const So={"IRRÉ-LIS Multi-Cultures":{icon:"bi-droplet-fill",color:"#2E75B6"},"IRRÉ-LIS Mono-Culture":{icon:"bi-droplet-fill",color:"#2E75B6"},DeciTrait:{icon:"bi-shield-check",color:"#4CAF50"},Limacapt:{icon:"bi-bug",color:"#795548"},"Modèles Arvalis — PRÉVI-LIS / MILÉOS":{icon:"bi-graph-up",color:"#FBAF05"},Xarvio:{icon:"bi-grid-3x3-gap",color:"#00B14F"},Pixagri:{icon:"bi-map",color:"#00897B"},VitiMeteo:{icon:"bi-flower1",color:"#8B4C9E"},Rimpro:{icon:"bi-cloud-lightning",color:"#E53935"},"Cropwise Protector":{icon:"bi-shield-fill-check",color:"#43A047"},"Movida GrapeVision":{icon:"bi-eye",color:"#7B1FA2"}};function ko(e){if(e.substrate)return"Substrat : "+e.substrate;if(e.texture===xt&&e.soilAnalysis){const{argile:i,limon:t,sable:n}=e.soilAnalysis;return`Analyse de sol (argile ${i}% / limon ${t}% / sable ${n}%)`}return e.texture||"—"}function Li(e){const i=So[e]||{icon:"bi-puzzle",color:"#8e8e93"};return`<i class="bi ${i.icon}" style="font-size:18px;color:${i.color};width:24px;text-align:center;flex-shrink:0"></i>`}const mn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"};function Eo(e,i,t){var p,v;const n=t.map(u=>ce.find(d=>d.id===u)).filter(Boolean),a=n.some(u=>u.model==="P+"||u.model==="PT"),o=n.some(u=>u.model==="P"),s=a&&o,l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),m=new Map;n.forEach(u=>{(At[u.model]||[]).forEach(d=>{m.has(d)||m.set(d,[]),m.get(d).push(u)})});const c=new Set;return m.forEach((u,d)=>{u.length<=1||u.every(r=>l.has(r.model))||u.forEach(r=>c.add(r.id))}),`
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
      ${((p=e.shape)==null?void 0:p.type)==="point"&&!(((v=e.latlngs)==null?void 0:v.length)>=3)?`
        <div style="display:flex;gap:10px;align-items:flex-start;padding:12px 14px;background:var(--pri2);border:1px solid var(--pri);border-radius:10px;margin-bottom:10px">
          <i class="bi bi-info-circle-fill" style="color:var(--pri);flex-shrink:0;margin-top:1px"></i>
          <span style="font-size:13px;color:var(--txt2);line-height:1.4">Cette parcelle n'a pas encore de contour tracé — elle n'apparaît que comme un point sur la carte. Rendez-vous sur la version Web pour le tracer (Parcelle → Localisation → Tracer le contour).</span>
        </div>
      `:""}
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
          <span class="m-list-row-value">${He(e.id).volumeMaxM3??e.volumeMaxM3?`${(He(e.id).volumeMaxM3??e.volumeMaxM3).toLocaleString("fr-FR")} m³`:"Non défini"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        ${e.irrigation&&!["Non irrigué","Non renseigné",""].includes(e.irrigation)?`
        <div class="m-list-row" data-action="edit-debit">
          <span class="m-list-row-label">Débit</span>
          <span class="m-list-row-value">${He(e.id).debitM3h?`${He(e.id).debitM3h} m³/h`:"Non défini"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`:""}
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${ko(e)}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${n.length?n.map((u,d)=>{const r=u.event&&(Array.isArray(u.event)?u.event.length>0:!0),f=c.has(u.id),b=mn[u.model]||u.model,$=(At[u.model]||[]).map(h=>{const L=Ve[h];return L?`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${L.color}18;color:${L.color};border:1px solid ${L.color}40;white-space:nowrap">${L.label}</span>`:""}).join("");return`<div class="m-list-row${d===n.length-1?" m-list-row--last":""} m-tappable" data-open-sensor="${u.id}" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:15px;font-weight:500;display:flex;align-items:center;gap:5px">
                      ${b}
                      ${r?'<span style="width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0;display:inline-block"></span>':""}
                      ${f?'<i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:12px;flex-shrink:0"></i>':""}
                    </div>
                    <div style="font-size:12px;color:#8e8e93;margin-top:1px">${u.model} · ${u.serial}</div>
                  </div>
                  <button class="btn-sensor-more" data-sensor-id="${u.id}" style="border:none;background:none;color:#8e8e93;font-size:18px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1" onclick="event.stopPropagation()">···</button>
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
                </div>
                ${$?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${$}</div>`:""}
                ${l.has(u.model)&&u.depth!=null?`<div style="font-size:12px;color:#8e8e93;margin-top:2px">Profondeur d'installation : ${u.depth} cm</div>`:""}
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

      <div class="m-list-section-header">Données spatialisées</div>
      <div class="m-list">
        <div class="m-list-row m-list-row--last" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            ${[Ve.etp,...n.some(u=>u.model==="PYRANO")?[]:[Ve.rayonnement],Ve.temp_rosee].map(u=>`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${u.color}18;color:${u.color};border:1px solid ${u.color}40;white-space:nowrap">${u.label}</span>`).join("")}
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
            ${(e.integrations||[]).map(u=>`
              <span style="display:inline-flex;align-items:center;gap:5px;background:#EFF6FF;color:#0172A4;border:1px solid #BFDBFE;border-radius:20px;padding:3px 10px 3px 7px;font-size:12px;font-weight:500;line-height:1.4">
                ${Li(u)}<span>${u}</span>
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
    </div>`}function Ai(e,i=[],t="widgets",n="Parcelles"){let a=$e.find(M=>M.id===e.orgId),o=t,s="j7j2",l="1d",m=!1;const c=(a==null?void 0:a.ville)||"",p=we(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${n}</span></button>
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
    <div id="detail-content" class="m-detail-content"></div>`);function v(){const M=$e.filter(g=>g.id!==100&&g.statut!=="inactif"),j=document.createElement("div"),q=()=>{j.innerHTML=M.map(g=>`
        <div class="m-sheet-option${g.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${g.id}">
          <span>${g.name}</span>
          ${g.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),j.querySelectorAll("[data-pick-org]").forEach(g=>{g.addEventListener("click",()=>{const x=+g.dataset.pickOrg;x!==e.orgId&&(e.orgId=x,a=$e.find(y=>y.id===x),w(),K("Exploitation mise à jour")),S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>S.remove(),280)})})},S=ue({title:"Exploitation",body:j,doneLabel:"Fermer",onDone:()=>{}});q()}function u(){const M=Yt.filter(x=>x!=="Non renseigné"),j=He(e.id).irrigation??e.irrigation,q=document.createElement("div"),S=()=>{q.innerHTML=`
        <div class="m-sheet-option${j?"":" m-sheet-option--active"}" data-pick-irrig="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez un type</span>
          ${j?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${M.map(x=>`
          <div class="m-sheet-option${x===j?" m-sheet-option--active":""}" data-pick-irrig="${x}">
            <span>${x}</span>
            ${x===j?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,q.querySelectorAll("[data-pick-irrig]").forEach(x=>{x.addEventListener("click",()=>{const y=x.dataset.pickIrrig;y&&y!==j&&(Oe(e.id,{irrigation:y}),e.irrigation=y,_e(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Type d'irrigation modifié : ${j||"—"} → ${y}.`}),w(),K("Type d'irrigation mis à jour")),g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>g.remove(),280)})})},g=ue({title:"Type d'irrigation",body:q,doneLabel:"Fermer",onDone:()=>{}});S()}function d(){const M=An,j=He(e.id).env??e.env??"Plein champ",q=document.createElement("div"),S=()=>{q.innerHTML=M.map(x=>`
        <div class="m-sheet-option${x===j?" m-sheet-option--active":""}" data-pick-env="${x}">
          <span>${x}</span>
          ${x===j?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),q.querySelectorAll("[data-pick-env]").forEach(x=>{x.addEventListener("click",()=>{const y=x.dataset.pickEnv;y&&y!==j&&(Oe(e.id,{env:y}),e.env=y,_e(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Environnement modifié : ${j||"—"} → ${y}.`}),w(),K("Environnement mis à jour")),g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>g.remove(),280)})})},g=ue({title:"Environnement",body:q,doneLabel:"Fermer",onDone:()=>{}});S()}function r(){const M=[...qi,xt],j=He(e.id).texture??e.texture,q=document.createElement("div"),S=()=>{q.innerHTML=`
        <div class="m-sheet-option${j?"":" m-sheet-option--active"}" data-pick-texture="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez une texture</span>
          ${j?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${M.map(x=>`
          <div class="m-sheet-option${x===j?" m-sheet-option--active":""}" data-pick-texture="${x}">
            <span>${x}</span>
            ${x===j?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,q.querySelectorAll("[data-pick-texture]").forEach(x=>{x.addEventListener("click",()=>{const y=x.dataset.pickTexture;if(g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>g.remove(),280),y===xt){L(j);return}y!==j&&(Oe(e.id,{texture:y||null,soilAnalysis:null}),e.texture=y||null,e.soilAnalysis=null,_e(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${j||"—"} → ${y||"—"}.`}),w(),K("Texture de sol mise à jour"))})})},g=ue({title:"Texture de sol",body:q,doneLabel:"Fermer",onDone:()=>{}});S()}function f(){const M=e.name||"",j=document.createElement("div");j.innerHTML=`<input class="m-sheet-input" type="text" value="${M.replace(/"/g,"&quot;")}" placeholder="Nom de la parcelle">`;const q=j.querySelector("input");ue({title:"Nom",body:j,doneLabel:"Enregistrer",onDone:()=>{const S=q.value.trim();S&&S!==M&&(Oe(e.id,{name:S}),e.name=S,_e(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Nom de la parcelle modifié : ${M} → ${S}.`}),w(),K("Nom mis à jour"))}}),setTimeout(()=>q.focus(),300)}function b(){const M=e.variety||"",j=document.createElement("div");j.innerHTML=`<input class="m-sheet-input" type="text" value="${M.replace(/"/g,"&quot;")}" placeholder="Variété">`;const q=j.querySelector("input");ue({title:"Variété",body:j,doneLabel:"Enregistrer",onDone:()=>{const S=q.value.trim();S!==M&&(Oe(e.id,{variety:S||null}),e.variety=S||null,_e(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Variété modifiée : ${M||"—"} → ${S||"—"}.`}),w(),K("Variété mise à jour"))}}),setTimeout(()=>q.focus(),300)}function $(){const M=cropOptions,j=e.crop,q=document.createElement("div");q.innerHTML=M.map(g=>`
      <div class="m-sheet-option${g===j?" m-sheet-option--active":""}" data-pick-crop="${g}">
        <span>${g}</span>
        ${g===j?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const S=ue({title:"Culture",body:q,doneLabel:"Fermer",onDone:()=>{}});q.querySelectorAll("[data-pick-crop]").forEach(g=>{g.addEventListener("click",()=>{const x=g.dataset.pickCrop;S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>S.remove(),280),x!==j&&(Oe(e.id,{crop:x,phenoStage:null}),e.crop=x,e.phenoStage=null,_e(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Culture modifiée : ${j||"—"} → ${x}.`}),w(),K("Culture mise à jour"))})})}function h(){const M=Ka(e.crop),j=e.phenoStage,q=document.createElement("div");q.innerHTML=M.map(g=>`
      <div class="m-sheet-option${g===j?" m-sheet-option--active":""}" data-pick-stade="${g}">
        <span>${g}</span>
        ${g===j?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const S=ue({title:"Stade phénologique",body:q,doneLabel:"Fermer",onDone:()=>{}});q.querySelectorAll("[data-pick-stade]").forEach(g=>{g.addEventListener("click",()=>{const x=g.dataset.pickStade;S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>S.remove(),280),x!==j&&(Oe(e.id,{phenoStage:x}),e.phenoStage=x,_e(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Stade phénologique modifié : ${j||"—"} → ${x}.`}),w(),K("Stade phénologique mis à jour"))})})}function L(M){const j=He(e.id).soilAnalysis??e.soilAnalysis??{},q=document.createElement("div");q.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:12px">
      <div>
        <label class="m-form-label">Argile (%)</label>
        <input type="number" class="m-sheet-input" id="soil-argile" value="${j.argile??""}" placeholder="Ex : 25" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Limon (%)</label>
        <input type="number" class="m-sheet-input" id="soil-limon" value="${j.limon??""}" placeholder="Ex : 40" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Sable (%)</label>
        <input type="number" class="m-sheet-input" id="soil-sable" value="${j.sable??""}" placeholder="Ex : 35" min="0" max="100">
      </div>
    </div>`,ue({title:"Analyse de sol",body:q,doneLabel:"Enregistrer",onDone:()=>{var T,z,k;const S=+(((T=q.querySelector("#soil-argile"))==null?void 0:T.value)||0),g=+(((z=q.querySelector("#soil-limon"))==null?void 0:z.value)||0),x=+(((k=q.querySelector("#soil-sable"))==null?void 0:k.value)||0),y={argile:S,limon:g,sable:x};Oe(e.id,{texture:xt,soilAnalysis:y}),e.texture=xt,e.soilAnalysis=y,_e(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${M||"—"} → analyse de sol (argile ${S}% / limon ${g}% / sable ${x}%).`}),w(),K("Analyse de sol enregistrée")}})}function A(){const M=He(e.id).volumeMaxM3??e.volumeMaxM3??null,j=document.createElement("div");j.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
      <label class="m-form-label">Volume limité (m³)</label>
      <input type="number" class="m-sheet-input" id="edit-volume-max" value="${M??""}" placeholder="Ex : 33000" step="100" min="0">
    </div>`,ue({title:"Volume limité de la parcelle",body:j,doneLabel:"Appliquer",onDone:()=>{var g;const q=(g=j.querySelector("#edit-volume-max"))==null?void 0:g.value,S=q===""?null:Math.max(0,+q);Oe(e.id,{volumeMaxM3:S}),e.volumeMaxM3=S,w(),K("Volume limité mis à jour")}})}const D=["IRRÉ-LIS Multi-Cultures","IRRÉ-LIS Mono-Culture","DeciTrait","Limacapt","Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","Movida GrapeVision"];function E(){let M=[...e.integrations||[]];function j(S){const g=D.filter(x=>!M.includes(x));S.innerHTML=`
        <div class="m-list-section-header">${M.length?`Actives (${M.length})`:"Actives"}</div>
        <div class="m-list">
          ${M.length?M.map((x,y)=>`
            <div class="m-list-row${y===M.length-1?" m-list-row--last":""}" style="gap:10px">
              ${Li(x)}
              <span class="m-list-row-label" style="flex:1">${x}</span>
              <button class="btn-unlink-integ" data-integ="${x}" style="border:none;background:none;color:#ff3b30;font-size:13px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Délier</button>
            </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucune intégration active</span></div>'}
        </div>
        ${g.length?`
        <div class="m-list-section-header">Disponibles</div>
        <div class="m-list">
          ${g.map((x,y)=>`
            <div class="m-list-row${y===g.length-1?" m-list-row--last":""}" style="gap:10px">
              ${Li(x)}
              <span class="m-list-row-label" style="flex:1">${x}</span>
              <button class="btn-add-integ" data-integ="${x}" style="border:none;background:none;color:#0172A4;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Lier</button>
            </div>`).join("")}
        </div>`:""}`,S.querySelectorAll(".btn-unlink-integ").forEach(x=>{x.addEventListener("click",()=>{M=M.filter(y=>y!==x.dataset.integ),e.integrations=[...M],_e(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${x.dataset.integ} » retirée de la parcelle.`}),j(S),K("Intégration déliée")})}),S.querySelectorAll(".btn-add-integ").forEach(x=>{x.addEventListener("click",()=>{M.includes(x.dataset.integ)||M.push(x.dataset.integ),e.integrations=[...M],_e(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${x.dataset.integ} » activée sur la parcelle.`}),j(S),K("Intégration liée")})})}const q=we(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${e.name}</span></button>
          <span style="font-size:17px;font-weight:600">Intégrations</span>
          <div style="width:60px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="integ-list-content" style="padding-bottom:32px"></div>`);q.querySelector(".m-detail-back").addEventListener("click",be),j(q.querySelector("#integ-list-content"))}function w(){const M=p.querySelector("#detail-content");o==="widgets"&&(M.innerHTML=vo(e,i)),o==="donnees"&&(M.innerHTML=wo(i,s,l,e.id)),o==="params"&&(M.innerHTML=Eo(e,a,i),B()),F()}function B(){const M=window.L;M&&setTimeout(()=>{var S;const j=p.querySelector("#parcel-minimap");if(!j)return;const q=M.map(j,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(M.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(q),((S=e.latlngs)==null?void 0:S.length)>=3){const g=M.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(q);q.fitBounds(g.getBounds(),{padding:[8,8]})}else q.setView([e.lat,e.lng],14),M.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(q)},50)}function F(){var M,j,q,S,g,x,y,T,z;(M=p.querySelector(".m-prev5j-voir-details"))==null||M.addEventListener("click",()=>ho(e)),(j=p.querySelector(".m-period-sel"))==null||j.addEventListener("change",k=>{s=k.target.value,s==="j7j2"&&(l="1d"),w()}),(q=p.querySelector(".m-step-sel"))==null||q.addEventListener("change",k=>{l=k.target.value,w()}),(S=p.querySelector(".m-export-btn"))==null||S.addEventListener("click",()=>$o(e,i,s)),p.querySelectorAll(".m-chart-svg-wrap").forEach(k=>po(k)),p.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(k=>{k.addEventListener("click",()=>{const I=+k.dataset.sensorId,P=ce.find(C=>C.id===I);P&&ge(()=>import("./chart-fullscreen-C2-G6jG3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(C=>C.initChartFullscreen({sensor:P,linkedSensorIds:i,metricId:k.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),p.querySelectorAll(".m-irrig-view-cal").forEach(k=>{k.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(I=>I.openCalendar(ci(e),String(e.id)))})}),p.querySelectorAll(".m-chart-details-link").forEach(k=>{k.addEventListener("click",()=>{if(k.dataset.metricId==="irrigation"){ge(()=>import("./chart-fullscreen-C2-G6jG3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(C=>C.initChartFullscreen({linkedSensorIds:i,metricId:"irrigation",backLabel:e.name,parcel:e}));return}const I=+k.dataset.sensorId,P=ce.find(C=>C.id===I);P&&ge(()=>import("./chart-fullscreen-C2-G6jG3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(C=>C.initChartFullscreen({sensor:P,linkedSensorIds:i,metricId:k.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),(g=p.querySelector(".m-il-detail-btn"))==null||g.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>Ys),void 0).then(k=>k.openIrrelisDetail(e))}),p.querySelectorAll(".m-msr-add-btn").forEach(k=>{k.addEventListener("click",()=>co(k))}),p.addEventListener("click",k=>{const I=k.target.closest(".m-cumul-add-btn");if(I){const C=I.dataset.cumulMetricId,N=I.dataset.cumulVal,X=hs[C];if(!X)return;const Q=document.createElement("div");Q.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${X.metricLabel}</strong> (<em>${N}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,ue({title:"Tableau de bord",body:Q,doneLabel:"Ajouter",onDone:()=>{const J=C==="hf"?{cold:Ce.hfSeuil}:C==="dj"?{low:Ce.djMin,high:Ce.djMax}:null;if(ki({metricId:C,...X,subjectKey:`p-${e.id}`,subjectLabel:e.name,fromDate:`${new Date().getFullYear()}-01-01`,value:N,thresholds:J})==="max"){K("Maximum de cumuls atteint (5)");return}K("Cumul ajouté au tableau de bord")}});return}const P=k.target.closest(".m-cumul-edit-btn");if(P){const C=P.dataset.cumulMetricId,N=document.createElement("div");C==="hf"?(N.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Ce.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:N,doneLabel:"Appliquer",onDone:()=>{var X;Ce.hfSeuil=+(((X=N.querySelector("#edit-hf-seuil"))==null?void 0:X.value)??7.2),w()}})):C==="dj"&&(N.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Ce.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Ce.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:N,doneLabel:"Appliquer",onDone:()=>{var X,Q;Ce.djMin=+(((X=N.querySelector("#edit-dj-min"))==null?void 0:X.value)??0),Ce.djMax=+(((Q=N.querySelector("#edit-dj-max"))==null?void 0:Q.value)??18),w()}}));return}}),p.querySelectorAll("[data-open-sensor]").forEach(k=>{k.addEventListener("click",()=>{const I=+k.dataset.openSensor,P=ce.find(C=>C.id===I);P&&ge(()=>Promise.resolve().then(()=>ji),void 0).then(C=>C.initSensorDetail(P,"donnees",Lt))})}),p.querySelectorAll(".btn-sensor-more").forEach(k=>{k.addEventListener("click",I=>{I.stopPropagation();const P=+k.dataset.sensorId,C=ce.find(J=>J.id===P);if(!C)return;const N=C.model==="P+"||C.model==="PT"?"Station météo":C.model==="P"?"Pluviomètre":C.model,X=document.createElement("div");X.innerHTML=`
          <div style="padding:8px 0">
            <button id="sheet-open-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;text-align:left">
              <i class="bi bi-broadcast" style="color:#0172A4;width:22px;text-align:center"></i>Voir la fiche capteur
            </button>
            <div style="height:.5px;background:rgba(0,0,0,.1);margin:0 20px"></div>
            <button id="sheet-unlink-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;color:#ff3b30;text-align:left">
              <i class="bi bi-x-circle" style="width:22px;text-align:center"></i>Délier de cette parcelle
            </button>
          </div>`;const Q=ue({title:`${N} · ${C.serial}`,body:X,doneLabel:"Fermer",onDone:()=>{}});X.querySelector("#sheet-open-sensor").addEventListener("click",()=>{Q.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{Q.remove(),ge(()=>Promise.resolve().then(()=>ji),void 0).then(J=>J.initSensorDetail(C,"donnees",Lt))},280)}),X.querySelector("#sheet-unlink-sensor").addEventListener("click",()=>{Q.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{Q.remove(),Jt({title:"Délier le capteur",message:`Délier <strong>${N} — ${C.serial}</strong> de <strong>${e.name}</strong> ?`,confirmLabel:"Délier",confirmColor:"#ff3b30",onConfirm:()=>{const J=i.indexOf(P);J!==-1&&i.splice(J,1),C.parcelIds=C.parcelIds.filter(ee=>ee!==e.id),w(),K(`${C.serial} délié`)}})},280)})})}),p.querySelectorAll(".m-list-row[data-action]").forEach(k=>{k.addEventListener("click",()=>{if(k.dataset.action==="edit-exploitation")v();else if(k.dataset.action==="edit-name")f();else if(k.dataset.action==="edit-crop")$();else if(k.dataset.action==="edit-variety")b();else if(k.dataset.action==="edit-stade")h();else if(k.dataset.action==="edit-env")d();else if(k.dataset.action==="edit-irrigation")u();else if(k.dataset.action==="edit-volume-max")A();else if(k.dataset.action==="edit-debit")Ci(e,w);else if(k.dataset.action==="edit-texture")r();else if(k.dataset.action==="edit-integrations")E();else if(k.dataset.action==="delete-parcel"){const I=document.createElement("div");I.innerHTML=`
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
          `;const P=ue({title:"Supprimer la parcelle ?",body:I,doneLabel:"Annuler",onDone:()=>{}});I.querySelector("#do-delete-parcel").addEventListener("click",()=>{P.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{P.remove(),En(e.id,le),be(),window.dispatchEvent(new CustomEvent("parcel-deleted",{detail:{id:e.id}}))},280)})}else K("Fonctionnalité à venir")})}),p.querySelectorAll(".m-widget-menu").forEach(k=>{k.addEventListener("click",I=>{var ee,de;I.stopPropagation();const P=k.dataset.wid;if(!P)return;(ee=p.querySelector(".m-widget-dd"))==null||ee.remove();const C=document.createElement("div");C.className="m-widget-dd",C.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:220px";const N=P==="irrigations"?'<button class="m-widget-dd-vol" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;border-bottom:.5px solid rgba(0,0,0,.08);background:none;font-size:14px;color:#1c1c1e;font-family:inherit;cursor:pointer">Définir le volume limité et le débit</button>':"";C.innerHTML=`${N}<button class="m-widget-dd-remove" data-wid="${P}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const X=p.querySelector(".m-detail-content"),Q=k.getBoundingClientRect(),J=X.getBoundingClientRect();C.style.top=`${Q.bottom-J.top+X.scrollTop+4}px`,C.style.right=`${J.right-Q.right}px`,X.style.position="relative",X.appendChild(C),(de=C.querySelector(".m-widget-dd-vol"))==null||de.addEventListener("click",()=>{C.remove(),Ci(e,w)}),C.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{C.remove();const he=Ut(e,i).filter(xe=>xe!==P);rn(e.id,he),w()}),setTimeout(()=>document.addEventListener("click",()=>C.remove(),{once:!0}),0)})}),(x=p.querySelector(".m-add-widget-btn"))==null||x.addEventListener("click",()=>io(e,i,w)),(y=p.querySelector(".m-irrig-act-saisie"))==null||y.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(k=>k.openIrrigationSaisie(ci(e),K,{ids:[e.id],label:e.name},!0,w))}),(T=p.querySelector(".m-irrig-act-saison"))==null||T.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(k=>k.openIrrigationStrategie(ci(e),K,{ids:[e.id],label:e.name},null,!0,w))}),(z=p.querySelector(".m-irrig-set-type"))==null||z.addEventListener("click",()=>{o="params",p.querySelectorAll(".m-detail-tab").forEach(k=>k.classList.toggle("active",k.dataset.view==="params")),w(),u()}),p.querySelectorAll(".m-pcumul-del").forEach(k=>{k.addEventListener("click",I=>{I.stopPropagation();const P=+k.dataset.pid,C=at(P),N=new Set(C.hidden||[]);N.add(k.dataset.cid),_t(P,{hidden:[...N]}),w()})}),p.querySelectorAll(".m-pcumul-add-fav").forEach(k=>{k.addEventListener("click",I=>{var J;I.stopPropagation();const P=Za[k.dataset.cid],C=hs[P];if(!C)return;const N=+k.dataset.pid,X=((J=at(N).dates)==null?void 0:J[k.dataset.cid])||`${new Date().getFullYear()}-01-01`,Q=document.createElement("div");Q.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${C.metricLabel}</strong> (<em>${k.dataset.valnum} ${k.dataset.unit}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,ue({title:"Tableau de bord",body:Q,doneLabel:"Ajouter",onDone:()=>{if(ki({metricId:P,...C,subjectKey:`p-${N}`,subjectLabel:e.name,fromDate:X,value:k.dataset.valnum,thresholds:null})==="max"){K("Maximum de cumuls atteint (5)");return}K("Cumul ajouté au tableau de bord")}})})}),p.querySelectorAll(".m-pcumul-details").forEach(k=>{k.addEventListener("click",()=>{ge(()=>import("./chart-fullscreen-C2-G6jG3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(I=>I.initCumulFullscreen({label:k.dataset.label,unit:k.dataset.unit,color:k.dataset.color,total:+k.dataset.val||0,fromDateIso:k.dataset.from,backLabel:e.name,seedKey:`${k.dataset.pid}-${k.dataset.cid}`,growthShape:Xa[k.dataset.cid]||"linear"}))})}),p.querySelectorAll(".m-pcumul-date").forEach(k=>{k.addEventListener("click",()=>{var I;return(I=k.showPicker)==null?void 0:I.call(k)}),k.addEventListener("change",()=>{const I=+k.dataset.pid,P=k.dataset.cid,C=k.value;if(!C||(Date.now()-new Date(C))/864e5>365)return;const Q=at(I).dates||{};Q[P]=C,_t(I,{dates:Q});const J=k.closest(".m-cumuls-saved-card"),ee=J==null?void 0:J.querySelector(".m-pcumul-value");if(ee){const de=J.querySelector(".m-pcumul-unit"),he=(de==null?void 0:de.textContent.trim())||"",xe=st(I,P,C);ee.innerHTML=`${xe}<span class="m-pcumul-unit">${he}</span>`}})}),p.querySelectorAll(".m-pcumul-cfg").forEach(k=>{k.addEventListener("click",I=>{var ee;I.stopPropagation();const P=+k.dataset.pid,C=k.dataset.cid,X={...at(P).cfg},Q=bo[C];if(!Q)return;(ee=p.querySelector(".m-pcumul-cfg-panel"))==null||ee.remove();const J=document.createElement("div");J.className="m-pcumul-cfg-panel",J.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",J.innerHTML=Q.map(de=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${de.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${de.key}" value="${X[de.key]??de.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',k.closest(".m-cumuls-saved-card").after(J),J.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{J.querySelectorAll(".m-pcumul-cfg-inp").forEach(de=>{X[de.dataset.key]=parseFloat(de.value)||0}),_t(P,{cfg:X}),J.remove(),w()})})}),p.querySelectorAll(".m-pcumul-add").forEach(k=>{k.addEventListener("click",I=>{I.stopPropagation();const P=+k.dataset.pid,C=k.dataset.cid,N=at(P),X=new Set(N.hidden||[]);X.delete(C),_t(P,{hidden:[...X]}),w()})})}p.querySelectorAll(".m-detail-tab").forEach(M=>{M.addEventListener("click",()=>{p.querySelectorAll(".m-detail-tab").forEach(j=>j.classList.remove("active")),M.classList.add("active"),o=M.dataset.view,w()})}),p.querySelector(".m-detail-back").addEventListener("click",be),p.querySelector("#d-star").addEventListener("click",()=>{m=!m;const M=p.querySelector("#d-star");M.querySelector("i").className=m?"bi bi-star-fill":"bi bi-star",M.style.color=m?"#f5c842":"",K(m?"Ajouté aux favoris":"Retiré des favoris")}),p.querySelector("#d-plus").addEventListener("click",()=>{var M;(M=window.showMobileAddPage)==null||M.call(window)}),p.querySelector("#d-journal").addEventListener("click",()=>Io(e)),w()}function Lo(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}const Ao=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"],Co=e=>{const[i,t,n]=e.split("-");return`${n}/${t}/${i}`};function Mo(e){const i=[],t=(a,o)=>i.push({id:`auto-mod-${a}-${o.slice(0,16)}`,type:"modification",date:a,texte:o,_system:!0});t("2024-01-01","Création de la parcelle"),e.crop&&t("2024-03-15",`Culture définie : ${e.crop}`);const n=e.substrate?`Substrat : ${e.substrate}`:e.texture;return n&&t("2024-03-15",`Texture de sol définie : ${n}`),e.irrigation&&t("2024-04-01",`Type d'irrigation défini : ${e.irrigation}`),i}function To(e){const i=le.find(t=>t.id===e);return me.filter(t=>t.plotId===e&&t.real).map(t=>({id:`auto-irrig-${e}-${t.iso}-${t.mm}`,type:"irrigation",date:t.iso,volume:t.mm,unite:"mm",methode:(i==null?void 0:i.irrigation)||"",texte:"Irrigation effectuée.",auteur:"Système",_system:!0}))}function Ci(e,i){const t=He(e.id).volumeMaxM3??"",n=He(e.id).debitM3h??"",a=document.createElement("div");a.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <div class="m-form-label">Volume limité (m³)</div>
        <input type="number" class="m-sheet-input" id="mvd-vol" min="0" placeholder="—" value="${t}">
      </div>
      <div>
        <div class="m-form-label">Débit (m³/h)</div>
        <input type="number" class="m-sheet-input" id="mvd-debit" min="0" step="0.1" placeholder="Ex. 12" value="${n}">
      </div>
      <div style="font-size:12px;color:#8e8e93">Si le débit est renseigné, la durée d'irrigation estimée s'affiche au survol des quantités dans le calendrier (web).</div>
    </div>`,ue({title:"Volume limité et débit",body:a,doneLabel:"Enregistrer",onDone:()=>{const o=a.querySelector("#mvd-vol").value,s=a.querySelector("#mvd-debit").value;Oe(e.id,{volumeMaxM3:o!==""?parseInt(o):null,debitM3h:s!==""?parseFloat(s):null}),i==null||i()}})}function Io(e){const i=$e.find(o=>o.id===e.orgId),t=(i==null?void 0:i.ville)||"",n=we(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);n.querySelector(".m-detail-back").addEventListener("click",be);function a(){var d;const o=n.querySelector("#mjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(r=>r.linkedType==="parcel"&&r.linkedId===e.id).map((r,f)=>({id:`dash-${f}`,type:"note",date:r.date,texte:r.text,auteur:r.auteur,role:r.role,_fromDashboard:!0})),l=[...Mo(e),...To(e.id)],m=[...Wt(e.id),...s,...l].sort((r,f)=>f.date.localeCompare(r.date)),c=Co,p={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"},culture:{label:"Culture",icon:"bi-flower1",dotColor:"#15803d",dotBg:"#f0fdf4",badgeCls:"culture"},stade:{label:"Stade phéno.",icon:"bi-calendar2-check",dotColor:"#7c3aed",dotBg:"#f5f3ff",badgeCls:"stade"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotColor:"#1d4ed8",dotBg:"#eff6ff",badgeCls:"irrigation"},cycle:{label:"Cycle cultural",icon:"bi-arrow-repeat",dotColor:"#c2410c",dotBg:"#fff7ed",badgeCls:"cycle"},integration:{label:"Intégration",icon:"bi-plug-fill",dotColor:"#7a4fa0",dotBg:"#f5f0fb",badgeCls:"integration"},modification:{label:"Modification",icon:"bi-pencil-square",dotColor:"#7a6a1e",dotBg:"#fdf8ee",badgeCls:"modification"}},v=[{type:"note",label:"Note",icon:"bi-pencil-square"},{type:"traitement",label:"Traitement phytosanitaire",icon:"bi-eyedropper"},{type:"culture",label:"Culture",icon:"bi-flower1"},{type:"stade",label:"Stade phénologique",icon:"bi-calendar2-check"},{type:"irrigation",label:"Irrigation",icon:"bi-droplet-half"},{type:"cycle",label:"Cycle cultural",icon:"bi-arrow-repeat"}];let u=`
      <div style="padding:12px 16px 4px">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="mjrn-add-btn">
          <i class="bi bi-plus-lg"></i> Ajouter
        </button>
      </div>
    `;m.length===0?u+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(u+='<div class="m-jrn-timeline">',m.forEach((r,f)=>{const b=p[r.type]||p.note,$=r.type==="traitement",h=f===m.length-1,L=!!r._fromDashboard,A=!!r._system;u+=`
          <div class="m-jrn-entry" data-id="${r.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${b.dotBg};color:${b.dotColor};border-color:${b.dotColor}40">
                <i class="bi ${b.icon}"></i>
              </div>
              ${h?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${c(r.date)}</span>
                <span class="journal-type-badge journal-type-badge--${b.badgeCls}">${b.label}</span>
                ${L?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':A?"":`<button class="m-jrn-del" data-id="${r.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${r.texte?`<div class="m-jrn-texte">${r.texte}</div>`:""}
              ${r.auteur?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${r.auteur}${Lo(r.role)}</div>`:""}
              ${$&&(r.produit||r.dose||r.cible)?`
                <div class="m-jrn-meta">
                  ${r.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${r.produit}</span>`:""}
                  ${r.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${r.dose}</span>`:""}
                  ${r.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${r.cible}</span>`:""}
                </div>`:""}
              ${r.type==="culture"?`
                <div class="m-jrn-meta">
                  ${r.action?`<span class="m-jrn-chip"><i class="bi bi-tag"></i>${r.action==="ajout"?"Ajout":r.action==="retrait"?"Retrait":"Modification"}</span>`:""}
                  ${r.culture?`<span class="m-jrn-chip"><i class="bi bi-flower1"></i>${r.culture}</span>`:""}
                  ${r.variete?`<span class="m-jrn-chip"><i class="bi bi-tag-fill"></i>${r.variete}</span>`:""}
                </div>`:""}
              ${r.type==="stade"?`
                <div class="m-jrn-meta">
                  ${r.stade?`<span class="m-jrn-chip"><i class="bi bi-diagram-3"></i>${r.stade}</span>`:""}
                  ${r.culture?`<span class="m-jrn-chip">${r.culture}</span>`:""}
                </div>`:""}
              ${r.type==="irrigation"?`
                <div class="m-jrn-meta">
                  ${r.volume?`<span class="m-jrn-chip"><i class="bi bi-droplet-fill"></i>${r.volume} ${r.unite||"mm"}</span>`:""}
                  ${r.methode?`<span class="m-jrn-chip"><i class="bi bi-water"></i>${r.methode}</span>`:""}
                </div>`:""}
              ${r.type==="cycle"?`
                <div class="m-jrn-meta">
                  <span class="m-jrn-chip"><i class="bi bi-arrow-right-circle"></i>${r.action==="fin"?"Fin de cycle":"Début de cycle"}</span>
                  ${r.annee?`<span class="m-jrn-chip"><i class="bi bi-calendar3"></i>${r.annee}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),u+="</div>"),o.innerHTML=u,(d=o.querySelector("#mjrn-add-btn"))==null||d.addEventListener("click",()=>{const r=document.createElement("div");r.innerHTML=`<div class="m-sheet-links">${v.map(b=>`<a class="m-sheet-link" data-type="${b.type}"><i class="bi ${b.icon}" style="margin-right:8px;color:#8e8e93"></i>${b.label}</a>`).join("")}</div>`;const f=ue({title:"Ajouter une entrée",body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll(".m-sheet-link").forEach(b=>{b.addEventListener("click",()=>{f.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{f.remove(),jo(b.dataset.type,e.id,a)},280)})})}),o.querySelectorAll(".m-jrn-del").forEach(r=>{r.addEventListener("click",()=>{const f=parseInt(r.dataset.id);Pi(e.id,Wt(e.id).filter(b=>b.id!==f)),a()})})}a()}function jo(e,i,t){const n=new Date().toISOString().slice(0,10),a=Lt==="admin"?"conseiller":"membre",o=$e.find(u=>u.id===(Lt==="admin"?100:1)),s=o?`${o.prenomProprietaire} ${o.nomProprietaire}`:"Jean Dupont",l=le.find(u=>u.id===i),m=(l==null?void 0:l.crop)||"",c={note:"Ajouter une note",traitement:"Ajouter un traitement",culture:"Culture — événement",stade:"Stade phénologique",irrigation:"Irrigation",cycle:"Cycle cultural"},p={note:`
      <div>
        <div class="m-form-label">Catégorie</div>
        <select class="m-sheet-input" id="mjf-category">
          ${Ao.map(u=>`<option value="${u}">${u}</option>`).join("")}
        </select>
      </div>
      <div>
        <div class="m-form-label">Texte</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="Votre note…" style="resize:none;min-height:90px"></textarea>
      </div>`,traitement:`
      <div>
        <div class="m-form-label">Observations</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="Conditions météo, remarques…" style="resize:none;min-height:90px"></textarea>
      </div>
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
      </div>`,culture:`
      <div>
        <div class="m-form-label">Action</div>
        <select class="m-sheet-input" id="mjf-action">
          <option value="ajout">Ajout de culture</option>
          <option value="modification" selected>Modification de culture</option>
          <option value="retrait">Retrait de culture</option>
        </select>
      </div>
      <div style="display:flex;gap:8px">
        <div style="flex:1">
          <div class="m-form-label">Culture</div>
          <input type="text" class="m-sheet-input" id="mjf-culture" value="${m}" placeholder="Ex : Blé tendre" style="margin-bottom:0">
        </div>
        <div style="flex:1">
          <div class="m-form-label">Variété</div>
          <input type="text" class="m-sheet-input" id="mjf-variete" placeholder="Ex : Apache" style="margin-bottom:0">
        </div>
      </div>
      <div>
        <div class="m-form-label">Note</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="Précisions…" style="resize:none;min-height:70px"></textarea>
      </div>`,stade:`
      <div>
        <div class="m-form-label">Stade (BBCH)</div>
        <input type="text" class="m-sheet-input" id="mjf-stade" placeholder="Ex : BBCH 30 — Début montaison">
      </div>
      <div>
        <div class="m-form-label">Culture</div>
        <input type="text" class="m-sheet-input" id="mjf-culture" value="${m}" placeholder="Culture concernée">
      </div>
      <div>
        <div class="m-form-label">Observations</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="Observations…" style="resize:none;min-height:70px"></textarea>
      </div>`,irrigation:`
      <div style="display:flex;gap:8px">
        <div style="flex:1">
          <div class="m-form-label">Volume</div>
          <input type="number" class="m-sheet-input" id="mjf-volume" min="0" step="0.5" placeholder="0" style="margin-bottom:0">
        </div>
        <div style="flex:1">
          <div class="m-form-label">Unité</div>
          <select class="m-sheet-input" id="mjf-unite" style="margin-bottom:0">
            <option value="mm" selected>mm</option>
            <option value="m³/ha">m³/ha</option>
            <option value="m³">m³</option>
          </select>
        </div>
      </div>
      <div>
        <div class="m-form-label">Méthode</div>
        <select class="m-sheet-input" id="mjf-methode">
          <option value="">— Non précisé —</option>
          <option>Aspersion</option><option>Goutte à goutte</option>
          <option>Gravitaire</option><option>Pivot</option><option>Enrouleur</option><option>Autre</option>
        </select>
      </div>
      <div>
        <div class="m-form-label">Observations</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="Observations…" style="resize:none;min-height:70px"></textarea>
      </div>`,cycle:`
      <div>
        <div class="m-form-label">Événement</div>
        <select class="m-sheet-input" id="mjf-action">
          <option value="début">Début de cycle cultural</option>
          <option value="fin">Fin de cycle cultural</option>
        </select>
      </div>
      <div>
        <div class="m-form-label">Année</div>
        <input type="text" class="m-sheet-input" id="mjf-annee" value="${new Date().getFullYear()}">
      </div>
      <div>
        <div class="m-form-label">Note</div>
        <textarea class="m-sheet-input" id="mjf-texte" placeholder="Précisions…" style="resize:none;min-height:70px"></textarea>
      </div>`},v=document.createElement("div");v.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="mjf-date" value="${n}">
      </div>
      ${p[e]||p.note}
    </div>`,ue({title:c[e]||"Ajouter une entrée",body:v,doneLabel:"Enregistrer",onDone:()=>{var b,$;const u=v.querySelector("#mjf-date").value||n,d=((b=v.querySelector("#mjf-texte"))==null?void 0:b.value.trim())||"",r={id:Date.now(),type:e,date:u,texte:d,auteur:s,role:a};if(e==="note")r.category=(($=v.querySelector("#mjf-category"))==null?void 0:$.value)||"";else if(e==="traitement")r.produit=v.querySelector("#mjf-produit").value.trim(),r.dose=v.querySelector("#mjf-dose").value.trim(),r.cible=v.querySelector("#mjf-cible").value.trim();else if(e==="culture")r.action=v.querySelector("#mjf-action").value,r.culture=v.querySelector("#mjf-culture").value.trim(),r.variete=v.querySelector("#mjf-variete").value.trim();else if(e==="stade")r.stade=v.querySelector("#mjf-stade").value.trim(),r.culture=v.querySelector("#mjf-culture").value.trim();else if(e==="irrigation"){const h=parseFloat(v.querySelector("#mjf-volume").value);r.volume=isNaN(h)?0:h,r.unite=v.querySelector("#mjf-unite").value,r.methode=v.querySelector("#mjf-methode").value}else e==="cycle"&&(r.action=v.querySelector("#mjf-action").value,r.annee=v.querySelector("#mjf-annee").value.trim());(d||r.produit||r.culture||r.stade||r.volume||r.annee)&&(Pi(i,[r,...Wt(i)]),t())}}),setTimeout(()=>{var u;return(u=v.querySelector("#mjf-texte"))==null?void 0:u.focus()},380)}const ot=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:Ai,openMobileVolDebitSheet:Ci},Symbol.toStringTag,{value:"Module"})),ht=100,qo={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function gt(e,i){if(i==="irrelis")return Tt(e);const t=qo[i];return t?ce.some(n=>n.parcelIds.includes(e.id)&&t.includes(n.model)):!0}const Ft=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"nrs",label:"Niveau de réservoir (spatialisé)",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Hier"],defaultAgg:"7 derniers jours"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"},{id:"irrelis",label:"Irré-LIS",unit:"mm",aggs:["Aujourd'hui","Demain","J+3","J+5"],defaultAgg:"Aujourd'hui"}];function Po(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function ys(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"irrigation":return i===0?"#c7c7cc":i<30?"#FFDFB8":"#FF8C00";case"etp":return i<2?"#D6EDF9":i<5?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"temp_rosee":return i<5?"#D2DEFA":i<12?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"rfu":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"nrs":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";case"irrelis":return i>=35?"#24B066":i>=12?"#E8A020":"#E05252";default:return"#0172A4"}}function Do(e,i){const t=new Date().toISOString().split("T")[0],n=s=>{const l=new Date;return l.setDate(l.getDate()-s),l.toISOString().split("T")[0]},a=s=>{const l=new Date;return l.setDate(l.getDate()+s),l.toISOString().split("T")[0]},o=me.filter(s=>s.plotId===e);switch(i){case"Aujourd'hui":return o.filter(s=>s.iso===t).reduce((s,l)=>s+l.mm,0);case"7 derniers jours":return o.filter(s=>s.real&&s.iso>=n(7)).reduce((s,l)=>s+l.mm,0);case"30 derniers jours":return o.filter(s=>s.real&&s.iso>=n(30)).reduce((s,l)=>s+l.mm,0);case"Demain":return o.filter(s=>!s.real&&s.iso===a(1)).reduce((s,l)=>s+l.mm,0);case"7 prochains jours":return o.filter(s=>!s.real&&s.iso>t&&s.iso<=a(7)).reduce((s,l)=>s+l.mm,0);case"30 prochains jours":return o.filter(s=>!s.real&&s.iso>t&&s.iso<=a(30)).reduce((s,l)=>s+l.mm,0);case"Toute la saison":return o.filter(s=>s.real).reduce((s,l)=>s+l.mm,0);default:return o.filter(s=>s.real).reduce((s,l)=>s+l.mm,0)}}function zo(e){switch(e){case"irrigation":return 0;case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"nrs":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function _o(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const n=i==="admin",a=$e.filter(h=>h.id!==ht);Object.fromEntries($e.map(h=>[h.id,h]));let o=null,s=null;const l={};let m="carte",c="pluie",p="7 derniers jours",v="all";function u(h){if(c==="irrigation")return Do(h,p);if(c==="irrelis"){const A=le.find(D=>D.id===h);return A?Math.round(Di(A,p)):0}const L=`${h}-${c}-${p}`;return L in l||(l[L]=zo(c)),l[L]}function d(){return i==="new"||i==="new-adherent"?[]:n?v==="all"?le:v===String(ht)?le.filter(h=>h.orgId===ht):le.filter(h=>String(h.orgId)===v):le.filter(h=>h.orgId===1)}function r(){if(o){try{o.remove()}catch{}o=null,s=null}}function f(){r();const h=Ft.find(w=>w.id===c)||Ft[0],L=d(),A=n?`
      <select class="m-filter-select" id="org-filter" style="flex:0 0 44px;height:44px">
        <option value="all">Toutes les organisations</option>
        <option value="${ht}"${v===String(ht)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${a.map(w=>`<option value="${w.id}"${v===String(w.id)?" selected":""}>${w.name}</option>`).join("")}
      </select>`:"",D=[...L].sort((w,B)=>{const F=gt(w,c),M=gt(B,c);return F&&!M?-1:!F&&M?1:F?u(B.id)-u(w.id):w.name.localeCompare(B.name,"fr")}),E=D.length?`<div class="m-plain-list">${D.map(w=>{var q,S,g;const B=((q=w.latlngs)==null?void 0:q.length)>0||((S=w.shape)==null?void 0:S.type)==="polygon"||((g=w.shape)==null?void 0:g.type)==="rectangle",F=[w.crop,w.irrigation,B&&w.area?`${w.area} ha`:null].filter(Boolean).join(" · "),M=gt(w,c),j=ce.filter(x=>x.parcelIds.includes(w.id)).some(x=>x.event&&(Array.isArray(x.event)?x.event.length>0:!0));return`
            <div class="m-plain-row m-tappable" data-plot-id="${w.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${w.name}${j?' <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px"></span>':""}</span>
                ${F?`<span class="m-plain-city">${F}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                ${(()=>{const x=M&&!(c==="irrigation"&&!me.some(T=>T.plotId===w.id)),y=x?u(w.id):null;return`<span class="m-plain-data${x?"":" m-plain-na"}"${x?` style="color:${ys(c,y)}"`:""}>${x?`${y} ${h.unit}`:"—"}</span>`})()}
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join("")}</div>`:i==="new"||i==="new-adherent"?`<div class="m-empty-state"><i class="bi bi-map"></i><p>Vous n'avez pas encore de parcelle</p><button onclick="window.showMobileAddPage?.()" style="margin-top:8px;background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer">Créer une parcelle</button></div>`:'<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>';t.innerHTML=`
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${m==="carte"?" m-view-btn--on":""}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${m==="liste"?" m-view-btn--on":""}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${Ft.map(w=>`<option value="${w.id}"${w.id===c?" selected":""}>${w.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${h.aggs.map(w=>`<option${w===p?" selected":""}>${w}</option>`).join("")}
          </select>
        </div>
        ${A}
      </div>
      ${m==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${E}</div>`}`,$(),m==="carte"&&b(L,h)}function b(h,L){const A=window.L;A&&setTimeout(()=>{const D=t.querySelector("#parcel-map");if(!D)return;if(o=A.map(D,{zoomControl:!1,attributionControl:!1}),A.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(o),!h.length&&(i==="new"||i==="new-adherent")){const w=$e.find(M=>M.id===1);w&&o.setView([w.lat,w.lng],13),o.invalidateSize();const B=D.parentElement;B.style.position="relative";const F=document.createElement("div");F.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",F.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-geo-alt" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de parcelle</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Créez votre première parcelle pour commencer à suivre vos cultures.</p>
            <button id="empty-create-parcel-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Créer une parcelle</button>
          </div>`,B.appendChild(F),B.querySelector("#empty-create-parcel-btn").addEventListener("click",()=>{var M;return(M=window.showMobileAddPage)==null?void 0:M.call(window)});return}const E=[];h.forEach(w=>{var T;const B=c!=="irrigation"||me.some(z=>z.plotId===w.id),F=gt(w,c)&&B?`${u(w.id)} ${L.unit}`:"—",M=ce.filter(z=>z.parcelIds.includes(w.id)).map(z=>z.id),j=()=>Ai(w,M),q=[w.lat,w.lng],S=gt(w,c)&&B,g=S?ys(c,u(w.id)):"#0172A4";w.latlngs&&w.latlngs.length>=3?(A.polygon(w.latlngs,{color:"#fff",weight:2,fillColor:g,fillOpacity:.35}).addTo(o).on("click",j),E.push(...w.latlngs)):E.push(q);const x=A.circleMarker(q,{radius:S?8:6,color:"#fff",weight:2,fillColor:g,fillOpacity:S?.95:.4}).addTo(o);if(M.some(z=>{const k=ce.find(I=>I.id===z);return(k==null?void 0:k.event)&&(Array.isArray(k.event)?k.event.length>0:!0)})&&A.marker(q,{icon:A.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(o),S){x.bindTooltip(F,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const z=I=>{if(!I)return;const P=Po(g);I.style.setProperty("background",g,"important"),I.style.setProperty("color",P,"important"),I.style.setProperty("border-color",P,"important"),I.style.setProperty("box-shadow","none","important")},k=(T=x.getTooltip())==null?void 0:T.getElement();k&&z(k),x.on("tooltipopen",I=>z(I.tooltip.getElement()))}x.on("click",j)}),E.length&&(s=E,o.fitBounds(E,{padding:[32,32]})),o.invalidateSize()},0)}window.addEventListener("m-tab-change",h=>{h.detail==="parcelles"&&m==="carte"&&o&&setTimeout(()=>{o.invalidateSize(),s!=null&&s.length&&o.fitBounds(s,{padding:[32,32]})},50)});function $(){var h,L,A;t.querySelectorAll(".m-view-btn").forEach(D=>D.addEventListener("click",()=>{m=D.dataset.view,f()})),(h=t.querySelector("#metric-sel"))==null||h.addEventListener("change",D=>{var E;c=D.target.value,p=((E=Ft.find(w=>w.id===c))==null?void 0:E.defaultAgg)||"",f()}),(L=t.querySelector("#agg-sel"))==null||L.addEventListener("change",D=>{p=D.target.value,f()}),(A=t.querySelector("#org-filter"))==null||A.addEventListener("change",D=>{v=D.target.value,f()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(D=>{D.addEventListener("click",()=>{const E=le.find(B=>B.id===+D.dataset.plotId);if(!E)return;const w=ce.filter(B=>B.parcelIds.includes(E.id)).map(B=>B.id);Ai(E,w)})})}f()}const Me={djMin:0,djMax:18,hfSeuil:7.2},Fo={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#0B3A64"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"}},Bo=4,Ho={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},Ro={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"},Oo={"cuillère bloquée":{icon:"bi-droplet-fill",summary:"La cuillère du pluviomètre ne se déverse pas correctement. Les mesures de pluie peuvent être inexactes ou nulles.",causes:["Feuilles, insectes ou toiles d'araignées obstruant l'entonnoir","Corps étranger bloquant l'axe de rotation de la cuillère","Dépôts calcaires ou algues dans le mécanisme","Capteur installé hors niveau (non vertical)","Gel partiel du mécanisme en période froide"],solutions:[{n:1,title:"Inspecter l'entonnoir",desc:"Retirez toute feuille, insecte ou débris présent dans l'entonnoir. Inspectez visuellement la cuillère."},{n:2,title:"Tester la cuillère manuellement",desc:"Appuyez alternativement sur chaque compartiment de la cuillère : elle doit basculer librement d'un côté à l'autre."},{n:3,title:"Rincer à l'eau claire",desc:"Versez lentement de l'eau claire dans l'entonnoir. Évitez les détergents qui pourraient laisser des résidus affectant les mesures."},{n:4,title:"Vérifier la verticalité",desc:"Assurez-vous que le mat ou le support est bien vertical à l'aide d'un niveau à bulle. Une inclinaison de 5° peut bloquer la cuillère."},{n:5,title:"Observer les prochaines pluies",desc:"Si l'anomalie persiste après la prochaine pluie, comparez avec une station voisine. Contactez le support si nécessaire."}],diag:[{label:"Dernière mesure de pluie",hint:"Vérifiez si des pluies ont bien été comptabilisées récemment"},{label:"Station voisine",hint:"Comparez avec un autre capteur P ou P+ proche"},{label:"Historique nettoyage",hint:"Vérifiez le journal de maintenance du capteur"},{label:"Saison",hint:"Automne/hiver : vérifiez la présence de gel ou feuilles"}]},"capteur couché":{icon:"bi-phone-landscape",summary:"Le capteur a détecté une position anormale (inclinaison excessive). Les mesures météo peuvent être perturbées.",causes:["Coup de vent violent ayant renversé ou incliné le support","Choc accidentel (passage d'engins agricoles, animaux)","Support ou mat inadapté, insuffisamment ancré","Affaissement du sol après forte pluie","Neige ou givre ayant alourdi le capteur"],solutions:[{n:1,title:"Se rendre sur site",desc:"Vérifiez visuellement l'état du capteur et de son support."},{n:2,title:"Redresser et fixer le support",desc:"Remettez le mat en position verticale. Utilisez un niveau à bulle pour vérifier. Renforcez l'ancrage si nécessaire."},{n:3,title:"Vérifier l'intégrité du capteur",desc:"Inspectez le boîtier, l'antenne et les capteurs externes (anémomètre, girouette, pluvio) pour tout dommage visible."},{n:4,title:"Contrôler la qualité du signal",desc:"Après remise en place, vérifiez que les émissions reprennent normalement et que le signal est bon."},{n:5,title:"Signaler l'anomalie résolue",desc:`Utilisez le bouton "Arrêter" pour clore l'anomalie une fois le capteur en position correcte.`}],diag:[{label:"Qualité du signal",hint:"Un signal dégradé peut indiquer un problème d'antenne"},{label:"Date de l'anomalie",hint:"Correspond-elle à un épisode météo violent ?"},{label:"Type de support",hint:"Mat télescopique, piquet, fixation murale ?"},{label:"Accès terrain",hint:"Vérifiez si la parcelle est accessible (engins, conditions météo)"}]},"émissions interrompues":{icon:"bi-wifi-off",summary:"Le capteur n'émet plus de données. Aucune mesure n'a été reçue depuis un moment anormalement long.",causes:["Batterie déchargée ou défaillante","Perte de couverture réseau télécom (Sigfox / LoRa)","Obstruction physique du signal (bâtiment, relief, végétation)","Défaillance électronique interne","Exposition à l'eau ou à l'humidité excessive (joint endommagé)"],solutions:[{n:1,title:"Vérifier le niveau de batterie",desc:"Accédez aux paramètres du capteur et consultez l'indicateur de batterie. Si critique, procédez au remplacement."},{n:2,title:"Contrôler la couverture réseau",desc:"Vérifiez la carte de couverture Sigfox ou LoRa pour l'emplacement du capteur. Un déplacement de quelques mètres peut suffire."},{n:3,title:"Relancer manuellement",desc:"Sur certains modèles, un appui court sur le bouton d'activation peut forcer une tentative d'émission. Consultez la notice."},{n:4,title:"Inspecter l'étanchéité",desc:"Vérifiez l'état des joints et du boîtier. Une infiltration d'eau peut provoquer des courts-circuits."},{n:5,title:"Contacter le support",desc:"Si les étapes précédentes n'ont pas résolu le problème, le capteur peut nécessiter une réparation ou un remplacement."}],diag:[{label:"Dernière émission",hint:"Il y a combien de temps ? Heure/jour de la dernière trame reçue"},{label:"Couverture réseau",hint:"Vérifiez sur la carte de couverture opérateur"},{label:"Batterie",hint:"Niveau batterie lors de la dernière émission connue"},{label:"Météo récente",hint:"Orage, forte pluie, gel ayant pu affecter le capteur"}]},"capteur déplacé":{icon:"bi-geo-alt",summary:"Le capteur a été détecté à un emplacement différent de sa position habituelle.",causes:["Déplacement intentionnel non enregistré dans l'application","Vol ou déplacement non autorisé du capteur","Dérive GPS en cas de signal GNSS perturbé","Déplacement lors d'opérations agricoles (travaux, irrigation)"],solutions:[{n:1,title:"Vérifier la position actuelle",desc:"Rendez-vous sur site pour confirmer l'emplacement physique du capteur."},{n:2,title:"Mettre à jour la position",desc:"Si le capteur a été déplacé intentionnellement, mettez à jour sa géolocalisation dans les paramètres."},{n:3,title:"Signaler un vol",desc:"Si le capteur a disparu, contactez les autorités et le support Weenat pour signalement et désactivation."},{n:4,title:"Clore l'anomalie",desc:`Une fois la situation clarifiée, utilisez le bouton "Arrêter" pour clore l'événement.`}],diag:[{label:"Coordonnées initiales",hint:"Comparez avec les coordonnées enregistrées dans les paramètres"},{label:"Dernier passage",hint:"Qui a eu accès à la parcelle récemment ?"},{label:"Signal GPS",hint:"Un signal faible peut fausser la géolocalisation sans déplacement réel"}]}};function No(e,i){const t=Oo[e]||{summary:"Anomalie détectée sur ce capteur.",causes:["Cause inconnue — contactez le support pour plus d'informations."],solutions:[{n:1,title:"Contacter le support",desc:"Décrivez l'anomalie observée pour obtenir de l'aide."}]};let n="causes";function a(u,d,r){return`<button class="m-anom-tab" data-tab="${u}" style="flex:1;padding:10px 4px;background:none;border:none;border-bottom:2px solid ${r?"#0172A4":"transparent"};font-size:13px;font-weight:${r?"600":"400"};color:${r?"#0172A4":"#8e8e93"};cursor:pointer;font-family:inherit;white-space:nowrap">${d}</button>`}function o(){return`<ul style="margin:0;padding:0 0 0 18px;display:flex;flex-direction:column;gap:10px">
      ${t.causes.map(u=>`<li style="font-size:14px;color:#1c1c1e;line-height:1.5">${u}</li>`).join("")}
    </ul>`}function s(){return t.solutions.map(u=>`
      <div style="display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid #f2f2f7">
        <div style="min-width:28px;height:28px;border-radius:50%;background:#0172A4;color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${u.n}</div>
        <div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${u.title}</div>
          <div style="font-size:13px;color:#636366;line-height:1.5">${u.desc}</div>
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
    </div>`}function m(){return`
      <div style="display:flex;border-bottom:1px solid #e5e5ea;background:#fff">
        ${a("causes","Causes",n==="causes")}
        ${a("solutions","Solutions",n==="solutions")}
        ${a("support","Support",n==="support")}
      </div>`}function c(){return n==="causes"?o():n==="solutions"?s():l()}const p=we(`
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
    <div id="anom-tabs-bar" style="flex-shrink:0">${m()}</div>
    <div style="flex:1;overflow-y:auto">
      <div style="padding:16px">
        <p style="font-size:13px;color:#636366;line-height:1.5;margin:0 0 16px;padding:12px;background:#fff3f3;border-radius:10px;border-left:3px solid #ff3b30">${t.summary}</p>
        <div id="anom-content">${c()}</div>
      </div>
    </div>
  `);p.querySelector("#anom-back").addEventListener("click",be);function v(){p.querySelectorAll(".m-anom-tab").forEach(u=>{u.addEventListener("click",()=>{n=u.dataset.tab,p.querySelector("#anom-tabs-bar").innerHTML=m(),p.querySelector("#anom-content").innerHTML=c(),v()})})}v()}const Mi={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Vo={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"};function Fi(e){return e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[30,60]:e==="CHP-60/90"?[45,90]:null}function xs(e,i){const t=Mi[e.model]?`${Mi[e.model]} · ${e.model}`:e.model,n=Fi(e.model)&&e.depth!=null?`${e.depth} cm`:null;return[t,n,i].filter(Boolean).join(" · ")}const Ct={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function vn(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(n,a)=>{const o=a/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(o-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,s))})}const bn={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Jo(e,i,t,n,a,o=20){const s=bn[e]||10080,l=new Date,m=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,c=4,p=i-t-n,v=a-o;return Array.from({length:c+1},(u,d)=>{const r=d/c,f=new Date(l.getTime()-(1-r)*s*6e4),b=(t+r*p).toFixed(1),$=d===0?"start":d===c?"end":"middle";return[`<line x1="${b}" y1="${v}" x2="${b}" y2="${v+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${b}" y="${a-3}" text-anchor="${$}" font-size="9" fill="#8e8e93" font-family="-apple-system">${m(f)}</text>`].join("")}).join("")}function Wo(e,i,t,n="7d",a=""){const o=fn[n]||60,s=vn(e,o),l=320,m=100,c=34,p=6,v=10,u=20,d=l-c-p,r=m-v-u,f=t?0:Math.min(...s),b=Math.max(...s,f+.001),$=b-f,h=S=>c+S/(s.length-1)*d,L=S=>v+r-(S-f)/$*r,A=`g${Math.random().toString(36).slice(2,8)}`,D=[0,.5,1].map(S=>{const g=f+S*$,x=v+r-S*r;return`<text x="${c-3}" y="${(x+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${g<10?g.toFixed(1):Math.round(g)}</text>`}).join(""),E=[.25,.5,.75].map(S=>`<line x1="${c}" y1="${(v+r-S*r).toFixed(1)}" x2="${l-p}" y2="${(v+r-S*r).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),w=`<line x1="${c}" y1="${v+r}" x2="${l-p}" y2="${v+r}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,B=Jo(n,l,c,p,m);if(t){const S=d/s.length*.7;return`<svg viewBox="0 0 ${l} ${m}" width="100%" height="${m}" preserveAspectRatio="none">
      ${D}${E}${w}
      ${s.map((g,x)=>{const y=(g-f)/$*r,T=v+r-y;return`<rect x="${(h(x)-S/2).toFixed(1)}" y="${T.toFixed(1)}" width="${S.toFixed(1)}" height="${y.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${B}
    </svg>`}const F=s.map((S,g)=>[h(g),L(S)]),M=F.map(([S,g],x)=>`${x?"L":"M"}${S.toFixed(1)},${g.toFixed(1)}`).join(" "),j=`${M} L${h(s.length-1).toFixed(1)},${(v+r).toFixed(1)} L${c},${(v+r).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(S=>+S.toFixed(2)),minV:+f.toFixed(2),maxV:+b.toFixed(2)}))}" data-color="${i}" data-unit="${a}" style="position:relative">
    <svg viewBox="0 0 ${l} ${m}" width="100%" height="${m}" preserveAspectRatio="none">
      <defs><linearGradient id="${A}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${D}${E}${w}
      <path d="${j}" fill="url(#${A})"/>
      <path d="${M}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${F.map(([S,g])=>`<circle cx="${S.toFixed(1)}" cy="${g.toFixed(1)}" r="2" fill="${i}"/>`).join("")}
      ${B}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Uo(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function Go(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,n=e.querySelector(".m-chart-tip"),a=e.querySelector(".m-chart-crosshair"),o=e.dataset.color||"#0172A4",s=e.dataset.unit||"";function l(c){const p=e.getBoundingClientRect(),v=Math.max(0,Math.min(1,(c-p.left)/p.width)),u=Math.round(v*(t.length-1)),d=t[u],r=v*100,f=(d<10?d.toFixed(1):String(Math.round(d)))+(s?` ${s}`:""),b=Uo(o);a.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${r}%;width:1px;background:${o};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(r,75)}%;background:${o};color:${b};border:1.5px solid ${b};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=f}function m(){a.style.display="none",n.style.display="none"}e.addEventListener("pointermove",c=>{c.preventDefault(),l(c.clientX)}),e.addEventListener("pointerdown",c=>l(c.clientX)),e.addEventListener("pointerup",m),e.addEventListener("pointerleave",m),e.style.cursor="crosshair"}const fn={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function Yo(e,i,t){if(!t)return"";const n=fn[i]||60,o=(bn[i]||10080)/(n*60),s=vn(e,n);let l=[];if(t==="temp"){const m=s.reduce((p,v)=>p+Math.max(0,Math.min(v,Me.djMax)-Me.djMin),0)*(o/24),c=s.filter(p=>p<Me.hfSeuil).length*o;l=[{label:"Degrés jours",val:`${Math.round(m)} DJ`,metricId:"dj",thresholdText:`${Me.djMin}°C → ${Me.djMax}°C`},{label:"Heures de froid",val:`${Math.round(c)} h`,metricId:"hf",thresholdText:`< ${Me.hfSeuil}°C`}]}else if(t==="pluie")l=[{label:"Cumul de pluie",val:`${s.reduce((c,p)=>c+p,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const m=s.filter(c=>c>120).length*o;l=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(m)} h`,metricId:"rayo"}]}else if(t==="hws"){const m=s.filter(c=>c>50).length*o;l=[{label:"Cumul d'heures d'humectation",val:`${Math.round(m)} h`,metricId:"humec"}]}return l.length?`<div class="m-chart-cumuls">${l.map(m=>{const c=m.metricId==="dj"||m.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${m.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${m.label}</span>
          ${m.thresholdText?`<span class="m-chart-cumul-thresh">${m.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${m.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${c}
        <button class="m-cumul-add-btn" data-cumul-label="${m.label}" data-cumul-val="${m.val}" data-cumul-metric-id="${m.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}function Ko(e,i="7d",t="1h"){const n=Ct[e.model]||[];if(!n.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const a={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},o={temp:"temperature"},s=new Set(["tseche","thumide"]),l=n.map(p=>{const v=a[p.id]||p.id,u=Yo(p.id,i,p.cumulsType),d=s.has(p.id)?"":`<button class="m-msr-add-btn" data-msr-metric-id="${o[p.id]||p.id}" data-msr-label="${p.label}" data-msr-unit="${p.unit||""}" data-msr-color="${p.color}" data-msr-period="${i}" data-msr-step="${t}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`;return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${p.color}">${p.label}</span>
          ${d}
        </div>
        ${Wo(p.id,p.color,p.cumul,i,p.unit||"")}
        <div class="m-chart-details-link" data-metric-id="${v}">Voir détails →</div>
        ${u}
      </div>`}).join(""),m=new Date().toISOString().slice(0,10),c=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-to m-custom-date" value="${m}">
      </div>`:""}
    </div>
    <div class="m-detail-section">${l}</div>`}function Zo(e){var m;const i=(e.parcelIds||[]).map(c=>le.find(p=>p.id===c)).filter(Boolean),t=i[0]||null,n=t?$e.find(c=>c.id===t.orgId):null,a=e.networkQuality||0,o=a>70?"#30d158":a>40?"#ff9f0a":"#ff3b30",s=e.event?Array.isArray(e.event)?e.event:[e.event]:[],l=i.map((c,p)=>`<div class="m-list-row${p===i.length-1&&i.length>0,""}" data-unlink-plot="${c.id}">
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
            value="${((m=(()=>{try{return JSON.parse(localStorage.getItem("weenat-sensor-names"))||{}}catch{return{}}})())==null?void 0:m[e.id])||""}"
            style="flex:1;min-width:0;margin-left:10px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 10px;font-size:14px;font-family:inherit;color:#1c1c1e;background:#f5f5f7;outline:none;user-select:text;-webkit-user-select:text">
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${Vo[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${Mi[e.model]||e.model}</span>
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

      ${(()=>{const c=Fi(e.model);return c?`
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
        ${s.length?s.map((c,p)=>{const v=c.toLowerCase().includes("déplacé");return`<div class="m-list-row m-ev-row" data-ev-idx="${p}" style="justify-content:space-between;gap:10px;cursor:pointer">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${c}</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
                  ${v?`<button class="ev-stop-btn" data-ev-idx="${p}" style="background:rgba(255,59,48,.1);border:1px solid #ff3b30;border-radius:8px;padding:5px 10px;font-size:12px;color:#ff3b30;font-family:inherit;cursor:pointer;white-space:nowrap">Arrêter</button>`:""}
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
                </div>
              </div>`}).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${o};font-weight:600">${a}%</span>
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
    </div>`}function Ti(e,i="donnees",t="admin"){var d;e.parcelIds||(e.parcelIds=[]);const n=e.parcelIds.length?le.find(r=>e.parcelIds.includes(r.id)):null;let a=i,o="7d",s="1h",l=!1;const m=n&&((d=$e.find(r=>r.id===n.orgId))==null?void 0:d.ville)||"",c=we(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${xs(e,m)}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres${e.event&&(!Array.isArray(e.event)||e.event.length>0)?' <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px;margin-bottom:1px;flex-shrink:0"></span>':""}</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function p(){const r=c.querySelector("#detail-content");a==="donnees"&&(r.innerHTML=Ko(e,o,s)),a==="params"&&(r.innerHTML=Zo(e),v()),u()}function v(){const r=window.L,f=e.parcelIds.length?le.find(b=>e.parcelIds.includes(b.id)):null;!r||!f||setTimeout(()=>{const b=c.querySelector("#sensor-minimap");if(!b)return;const $=r.map(b,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});r.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo($),$.setView([f.lat,f.lng],15),r.circleMarker([f.lat,f.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo($)},50)}function u(){var r,f,b,$;(r=c.querySelector(".m-period-sel"))==null||r.addEventListener("change",h=>{o=h.target.value,p()}),(f=c.querySelector(".m-step-sel"))==null||f.addEventListener("change",h=>{s=h.target.value,p()}),c.querySelectorAll(".m-chart-svg-wrap").forEach(h=>Go(h)),c.querySelectorAll(".m-chart-details-link[data-metric-id]").forEach(h=>{h.addEventListener("click",()=>{ge(()=>import("./chart-fullscreen-C2-G6jG3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(L=>L.initChartFullscreen({sensor:e,metricId:h.dataset.metricId,backLabel:"Retour"}))})}),c.querySelectorAll(".m-msr-add-btn").forEach(h=>{h.addEventListener("click",()=>{const L=h.dataset.msrMetricId,A=`s-${e.id}`,D=`${e.model} ${e.serial}`,E=h.dataset.msrPeriod,w=h.dataset.msrStep,B=en({subjectKey:A,subjectLabel:D,metricId:L,metricLabel:h.dataset.msrLabel,unit:h.dataset.msrUnit||"",period:E,periodLabel:Ho[E]||E,step:w,stepLabel:Ro[w]||w,color:h.dataset.msrColor});if(B==="max"){K(`Maximum de mesures atteint (${Bo})`);return}if(B==="dup"){K("Cette mesure est déjà dans vos favoris");return}K("Mesure ajoutée au tableau de bord")})}),c.addEventListener("click",h=>{const L=h.target.closest(".m-cumul-add-btn");if(L){const D=L.dataset.cumulMetricId,E=L.dataset.cumulVal,w=Fo[D];if(!w)return;const B=`${e.model} ${e.serial}`,F=document.createElement("div");F.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${w.metricLabel}</strong> (<em>${E}</em>) au tableau de bord du capteur <strong>${e.serial}</strong> ?</div>`,ue({title:"Tableau de bord",body:F,doneLabel:"Ajouter",onDone:()=>{const M=D==="hf"?{cold:Me.hfSeuil}:D==="dj"?{low:Me.djMin,high:Me.djMax}:null;if(ki({metricId:D,...w,subjectKey:`s-${e.id}`,subjectLabel:B,fromDate:`${new Date().getFullYear()}-01-01`,value:E,thresholds:M})==="max"){K("Maximum de cumuls atteint (5)");return}K("Cumul ajouté au tableau de bord")}});return}const A=h.target.closest(".m-cumul-edit-btn");if(A){const D=A.dataset.cumulMetricId,E=document.createElement("div");D==="hf"?(E.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Me.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:E,doneLabel:"Appliquer",onDone:()=>{var w;Me.hfSeuil=+(((w=E.querySelector("#edit-hf-seuil"))==null?void 0:w.value)??7.2),p()}})):D==="dj"&&(E.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Me.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Me.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:E,doneLabel:"Appliquer",onDone:()=>{var w,B;Me.djMin=+(((w=E.querySelector("#edit-dj-min"))==null?void 0:w.value)??0),Me.djMax=+(((B=E.querySelector("#edit-dj-max"))==null?void 0:B.value)??18),p()}}))}}),c.querySelectorAll(".m-list-row[data-action]").forEach(h=>{h.addEventListener("click",()=>{const L=h.dataset.action;if(L==="add-maintenance")Ss(e,{openForm:!0});else if(L==="add-plot")Xo(e,t,p);else if(L==="delete"){const A=le.find(D=>{var E;return(E=e.parcelIds)==null?void 0:E.includes(D.id)});Jt({title:"Retirer de l'exploitation",message:`Retirer <strong>${e.model} ${e.serial}</strong> de l'exploitation ?${A?`<br><br>Parcelle liée : <strong>${A.name}</strong>.`:""}<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>K("Capteur retiré de l'exploitation (fonctionnalité à venir)")})}else K("Fonctionnalité à venir")})}),c.querySelectorAll(".ev-stop-btn").forEach(h=>{h.addEventListener("click",L=>{L.stopPropagation();const A=+h.dataset.evIdx;Array.isArray(e.event)?(e.event=e.event.filter((D,E)=>E!==A),e.event.length||(e.event=null)):e.event=null,p()})}),c.querySelectorAll(".m-ev-row").forEach(h=>{h.addEventListener("click",L=>{if(L.target.closest(".ev-stop-btn"))return;const A=+h.dataset.evIdx,D=e.event?Array.isArray(e.event)?e.event:[e.event]:[];D[A]&&No(D[A],e)})}),c.querySelectorAll("[data-unlink-plot-btn]").forEach(h=>{h.addEventListener("click",L=>{L.stopPropagation();const A=+h.dataset.unlinkPlotBtn,D=le.find(E=>E.id===A);Jt({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${(D==null?void 0:D.name)||"la parcelle"}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(E=>E!==A),K(`Délié de ${(D==null?void 0:D.name)||"la parcelle"}`),p()}})})}),(b=c.querySelector("#sensor-name-input"))==null||b.addEventListener("change",h=>{const L=h.target.value.trim();try{const D=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};L?D[e.id]=L:delete D[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(D))}catch{}const A=c.querySelector(".m-detail-title");A&&(A.textContent=L||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))}),($=c.querySelector("#chp-depth-save"))==null||$.addEventListener("click",()=>{const h=c.querySelector("#chp-depth-input"),L=Fi(e.model);if(!h||!L)return;let A=parseInt(h.value);if(isNaN(A))return;A=Math.max(L[0],Math.min(L[1],A)),h.value=A,e.depth=A;const D=c.querySelector(".m-detail-subtitle");D&&(D.textContent=xs(e,m)),K(`Profondeur enregistrée : ${A} cm`)})}c.querySelectorAll(".m-detail-tab").forEach(r=>{r.addEventListener("click",()=>{c.querySelectorAll(".m-detail-tab").forEach(f=>f.classList.remove("active")),r.classList.add("active"),a=r.dataset.view,p()})}),c.querySelector(".m-detail-back").addEventListener("click",be),c.querySelector("#d-star").addEventListener("click",()=>{l=!l;const r=c.querySelector("#d-star");r.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",r.style.color=l?"#f5c842":"",K(l?"Ajouté aux favoris":"Retiré des favoris")}),c.querySelector("#d-journal").addEventListener("click",()=>Ss(e)),c.querySelector("#d-plus").addEventListener("click",()=>{var r;return(r=window.showMobileAddPage)==null?void 0:r.call(window)}),p()}const hn=e=>`sensor-journal-${e}`,gn=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}],$s=["Capteur légèrement déplacé — redressé","Antenne réorientée pour améliorer la réception","Végétation haute autour du capteur — dégagée","Capteur incliné après un coup de vent — stabilisé"],ws=["antenne","bocal","lacet","cuillere"];function Ii(e){try{const a=localStorage.getItem(hn(e));if(a)return JSON.parse(a)}catch{}const i=ws[e%ws.length],t=(a,o)=>{const s=new Date(a+"T00:00:00");return s.setDate(s.getDate()+o),s.toISOString().slice(0,10)},n=e%8;return[{id:1,type:"installation",date:t("2023-01-15",n),user:"Technicien Weenat",role:"conseiller",texte:""},{id:2,type:i,date:t("2023-06-10",n),user:"Technicien Weenat",role:"conseiller",texte:""},{id:3,type:"note",date:t("2023-11-02",n),user:"Jean Dupont",role:"membre",texte:$s[e%$s.length]}]}function yn(e,i){localStorage.setItem(hn(e),JSON.stringify(i))}function Xo(e,i,t){const n=i==="adherent"?1:null,a=n?le.filter(c=>c.orgId===n):le.filter(c=>c.orgId!==100),o=new Set((Ct[e.model]||[]).map(c=>c.id)),s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function l(c=""){const p=c.toLowerCase(),v=(p?a.filter(d=>d.name.toLowerCase().includes(p)||(d.crop||"").toLowerCase().includes(p)):a).slice().sort((d,r)=>d.name.localeCompare(r.name,"fr")),u=s.querySelector("#plot-list");if(!v.length){u.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}u.innerHTML="",v.forEach((d,r)=>{const f=e.parcelIds.includes(d.id),b=r===v.length-1,$=document.createElement("div");$.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${b?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,$.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${d.name}</span>
          ${d.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${d.crop}</span>`:""}
        </span>
        ${f?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,$.addEventListener("click",()=>{if(f)Jt({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${d.name}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(h=>h!==d.id),K(`Délié de ${d.name}`),l(c),t()}});else{const h=ce.find(L=>L.id!==e.id&&L.parcelIds.includes(d.id)&&(Ct[L.model]||[]).some(A=>o.has(A.id)));h?(m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),Qo(e,d,h,t)},280)):(e.parcelIds=[...e.parcelIds,d.id],K(`Lié à ${d.name}`),l(c),t())}}),u.appendChild($)})}l();const m=ue({title:"Parcelles liées",body:s,doneLabel:"Fermer",onDone:()=>{t()}});s.querySelector("#plot-search").addEventListener("input",c=>l(c.target.value))}function Qo(e,i,t,n){const a=(Ct[t.model]||[]).filter(l=>(Ct[e.model]||[]).some(m=>m.id===l.id)).map(l=>l.label).join(", "),o=document.createElement("div");o.innerHTML=`
    <div style="display:flex;align-items:flex-start;gap:10px;padding:6px 0 14px;font-size:13px;color:#636366;line-height:1.5">
      <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:17px;flex-shrink:0;margin-top:1px"></i>
      <span>La parcelle <strong style="color:#1c1c1e">${i.name}</strong> a déjà un capteur mesurant <strong style="color:#1c1c1e">${a}</strong>. Quel capteur conserver ?</span>
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
    <div style="height:6px"></div>`;const s=ue({title:"Conflit de métrique",body:o,doneLabel:"Annuler",onDone:()=>{}});o.querySelector("#keep-existing").addEventListener("click",()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),K("Liaison annulée")},280)}),o.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(l=>l!==i.id),e.parcelIds=[...e.parcelIds,i.id],s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),K(`Lié à ${i.name}`),n()},280)})}function Ss(e,i={}){const t=we(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",be);const n=Object.fromEntries(gn.map(o=>[o.id,o]));function a(){var p;const o=t.querySelector("#sjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(v=>v.linkedType==="sensor"&&v.linkedId===e.id).map((v,u)=>({id:`dash-${u}`,type:"note",date:v.date,texte:v.text,user:v.auteur,_fromDashboard:!0})),l=[...Ii(e.id),...s].sort((v,u)=>u.date.localeCompare(v.date)),m=v=>{const[u,d,r]=v.split("-");return`${r}/${d}/${u}`};let c=`
      <div style="padding:12px 16px 8px">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="sjrn-add-btn">
          <i class="bi bi-plus-lg"></i> Ajouter une entrée
        </button>
      </div>
    `;l.length===0?c+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(c+='<div class="m-jrn-timeline">',l.forEach((v,u)=>{const d=n[v.type]||{label:v.type,icon:"bi-circle",color:"#8e8e93"},r=u===l.length-1,f=!!v._fromDashboard;c+=`
          <div class="m-jrn-entry" data-id="${v.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${d.color}18;color:${d.color};border-color:${d.color}40">
                <i class="bi ${d.icon}"></i>
              </div>
              ${r?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${m(v.date)}</span>
                <span class="journal-type-badge journal-type-badge--maintenance">${d.label}</span>
                ${f?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${v.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${v.texte?`<div class="m-jrn-texte">${v.texte}</div>`:""}
              ${v.user?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${v.user}${el(v.role)}</div>`:""}
            </div>
          </div>`}),c+="</div>"),o.innerHTML=c,(p=o.querySelector("#sjrn-add-btn"))==null||p.addEventListener("click",()=>ks(e.id,a)),o.querySelectorAll(".m-jrn-del").forEach(v=>{v.addEventListener("click",()=>{const u=parseInt(v.dataset.id);yn(e.id,Ii(e.id).filter(d=>d.id!==u)),a()})})}a(),i.openForm&&ks(e.id,a)}function el(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}function ks(e,i){const t=new Date().toISOString().slice(0,10),n=document.createElement("div");n.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${gn.map(a=>`<option value="${a.id}">${a.label}</option>`).join("")}
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
    </div>`,ue({title:"Opération de maintenance",body:n,doneLabel:"Enregistrer",onDone:()=>{const a=n.querySelector("#sjf-type").value,o=n.querySelector("#sjf-date").value||t,s=n.querySelector("#sjf-user").value.trim()||"Jean Dupont",l=localStorage.getItem("menuRole")==="admin-reseau"?"conseiller":"membre",m=n.querySelector("#sjf-texte").value.trim();yn(e,[{id:Date.now(),type:a,date:o,user:s,role:l,texte:m},...Ii(e)]),i()}}),setTimeout(()=>{var a;return(a=n.querySelector("#sjf-texte"))==null?void 0:a.focus()},350)}const ji=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:Ti},Symbol.toStringTag,{value:"Module"})),yt=100,ui=1,pi=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],tl={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},il={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function Bt(e,i){return(il[e]||[]).includes(i)}function sl(e){return tl[e]||e}function nl(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const Ht=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function al(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function Es(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"pothydr":return i<80?"#E2EAC7":i<150?"#A6C157":"#7D9537";case"teneur":return i<15?"#F7D2A1":i<30?"#ED9A2C":"#BC7210";case"temp_sol":return i<8?"#D9C6BF":i<18?"#795548":"#484646";case"temp_sche":return i<0?"#9DECDF":i<10?"#23B19B":"#177365";case"temp_hum":return i<0?"#D2DEFA":i<10?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function ol(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function ll(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const n=i==="admin",a=$e.filter(E=>E.id!==yt),o=Object.fromEntries(le.map(E=>[E.id,E])),s=Object.fromEntries($e.map(E=>[E.id,E]));let l=null,m=null;const c={};let p="carte",v="pluie",u="7 derniers jours",d="all";function r(E){const w=`${E}-${v}-${u}`;return w in c||(c[w]=ol(v)),c[w]}function f(){if(i==="new"||i==="new-adherent")return[];if(n){if(d==="anomalies")return ce.filter(M=>M.event&&(Array.isArray(M.event)?M.event.length>0:!0));if(d==="all")return ce;if(d===String(yt)){const M=new Set(le.filter(j=>j.orgId===yt).map(j=>j.id));return ce.filter(j=>j.parcelIds.some(q=>M.has(q)))}const F=new Set(le.filter(M=>String(M.orgId)===d).map(M=>M.id));return ce.filter(M=>M.parcelIds.some(j=>F.has(j)))}const E=new Set(le.filter(F=>F.orgId===ui).map(F=>F.id)),w=ce.filter(F=>F.parcelIds.some(M=>E.has(M))),B=ce.filter(F=>!F.parcelIds.some(M=>E.has(M))&&pi.includes(F.model));return d==="mine"?w:d==="network"?B:[...w,...B]}function b(E){const w=E.parcelIds.length?o[E.parcelIds[0]]:null;if(!w)return null;const B=(E.id*7919%1e3-500)/1e6,F=(E.id*6271%1e3-500)/1e6;return{lat:w.lat+B,lng:w.lng+F,name:w.name}}function $(E){var B,F;const w=E.parcelIds.length?o[E.parcelIds[0]]:null;return(w?(B=s[w.orgId])==null?void 0:B.ville:null)||((F=s[E.orgId])==null?void 0:F.ville)||null}function h(){if(l){try{l.remove()}catch{}l=null,m=null}}function L(){h();const E=Ht.find(q=>q.id===v)||Ht[0],w=f();let B;const F=ce.some(q=>q.event&&(Array.isArray(q.event)?q.event.length>0:!0));if(n)B=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${d==="all"?" selected":""}>Toutes les organisations</option>
            ${F?`<option value="anomalies"${d==="anomalies"?" selected":""}>⚠ Anomalies capteurs</option>`:""}
            <option value="${yt}"${d===String(yt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
            ${a.map(q=>`<option value="${q.id}"${d===String(q.id)?" selected":""}>${q.name}</option>`).join("")}
          </select>
        </div>`;else{const q=$e.find(S=>S.id===ui);B=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${d==="all"?" selected":""}>Tous les capteurs du réseau</option>
            <option value="mine"${d==="mine"?" selected":""}>${(q==null?void 0:q.name)||"Mon exploitation"} uniquement</option>
          </select>
        </div>`}const M=[...w].sort((q,S)=>{const g=Bt(q.model,v),x=Bt(S.model,v);return g&&!x?-1:!g&&x?1:g?r(S.id)-r(q.id):0}),j=M.length?`<div class="m-plain-list">${M.map(q=>{const S=pi.includes(q.model),g=Bt(q.model,v),x=g?r(q.id):null,y=g?`<span class="m-sensor-val" style="color:${Es(v,x)}">${x} ${E.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>',T=q.event&&(Array.isArray(q.event)?q.event.length>0:!0);return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${q.id}">
              <div class="m-sensor-icon" style="position:relative;background:${S?"#0172A420":"#5b8dd920"};color:${S?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
                ${T?'<span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff"></span>':""}
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${sl(q.model)} - ${q.model}</span>
                <span class="m-sensor-sub">${[$(q),nl(q)].filter(Boolean).join(" - ")}</span>
                ${T?`<span style="font-size:11px;color:#ff3b30;font-weight:500"><i class="bi bi-exclamation-triangle-fill"></i> ${Array.isArray(q.event)?q.event[0]:q.event}</span>`:""}
              </div>
              ${y}
            </div>`}).join("")}</div>`:i==="new"||i==="new-adherent"?`<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Vous n'avez pas encore de capteur</p><button onclick="window.showMobileAddPage?.()" style="margin-top:8px;background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer">Ajouter un capteur</button></div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';t.innerHTML=`
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
            ${Ht.map(q=>`<option value="${q.id}"${q.id===v?" selected":""}>${q.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${E.aggs.map(q=>`<option${q===u?" selected":""}>${q}</option>`).join("")}
          </select>
        </div>
        ${B}
      </div>
      ${p==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${j}</div>`}`,D(),p==="carte"&&A(w,E)}function A(E,w){const B=window.L;B&&setTimeout(()=>{const F=t.querySelector("#sensor-map");if(!F)return;if(l=B.map(F,{zoomControl:!1,attributionControl:!1}),B.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l),!E.length&&(i==="new"||i==="new-adherent")){const j=$e.find(g=>g.id===ui);j&&l.setView([j.lat,j.lng],13),l.invalidateSize();const q=F.parentElement;q.style.position="relative";const S=document.createElement("div");S.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",S.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-broadcast" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de capteur</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Ajoutez votre premier capteur pour commencer à collecter des données.</p>
            <button id="empty-add-sensor-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Ajouter un capteur</button>
          </div>`,q.appendChild(S),q.querySelector("#empty-add-sensor-btn").addEventListener("click",()=>{var g;return(g=window.showMobileAddPage)==null?void 0:g.call(window)});return}const M=[];E.forEach(j=>{var T;const q=b(j);if(!q)return;const S=Bt(j.model,v),g=pi.includes(j.model),x=S?Es(v,r(j.id)):g?"#0172A4":"#5b8dd9",y=B.circleMarker([q.lat,q.lng],{radius:S?10:7,color:"#fff",weight:2,fillColor:x,fillOpacity:S?.95:.45}).addTo(l);if(S){y.bindTooltip(`${r(j.id)} ${w.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const z=I=>{if(!I)return;const P=al(x);I.style.setProperty("background",x,"important"),I.style.setProperty("color",P,"important"),I.style.setProperty("border-color",P,"important"),I.style.setProperty("box-shadow","none","important")},k=(T=y.getTooltip())==null?void 0:T.getElement();k&&z(k),y.on("tooltipopen",I=>z(I.tooltip.getElement()))}y.on("click",()=>Ti(j,"donnees",i)),j.event&&(!Array.isArray(j.event)||j.event.length>0)&&B.marker([q.lat,q.lng],{icon:B.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(l),M.push([q.lat,q.lng])}),M.length&&(m=M,l.fitBounds(M,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",E=>{E.detail==="capteurs"&&(L(),p==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),m!=null&&m.length&&l.fitBounds(m,{padding:[32,32]})},50))});function D(){var E,w,B;t.querySelectorAll(".m-view-btn").forEach(F=>F.addEventListener("click",()=>{p=F.dataset.view,L()})),(E=t.querySelector("#metric-sel"))==null||E.addEventListener("change",F=>{var M;v=F.target.value,u=((M=Ht.find(j=>j.id===v))==null?void 0:M.defaultAgg)||"",L()}),(w=t.querySelector("#agg-sel"))==null||w.addEventListener("change",F=>{u=F.target.value,L()}),(B=t.querySelector("#org-filter"))==null||B.addEventListener("change",F=>{d=F.target.value,L()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(F=>{F.addEventListener("click",()=>{const M=ce.find(j=>j.id===+F.dataset.sensorId);M&&Ti(M,"donnees",i)})})}L(),window.addEventListener("weenat-sensor-renamed",()=>{p==="liste"&&L()})}const rl=["Essentiel","Plus","Expert"],cl=["Administrateur","Agent","Lecteur"],Ls=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function dl(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function ul(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function As({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function Rt(e){if(!e)return"—";const[i,t,n]=e.split("-");return`${n}/${t}/${i}`}function Cs(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let n=11;n>=0;n--){const a=new Date(i.getFullYear(),i.getMonth()-n,1),o=a.getFullYear(),s=String(a.getMonth()+1).padStart(2,"0"),l=n>0?n===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${o}-${s}`,dateEmission:`${o}-${s}-01`,montant:a.getMonth()===11?1980:t[n%t.length],statut:l})}return e.reverse()}function pl(e,i){var S;if(!e)return{};const t=i==="admin",n=i==="new-member-admin"||i==="new-member-agent"||i==="new-member-reader",a=i!=="new-member-reader",o=t?[{id:"100",name:"Breiz'Agri Conseil"},{id:"42",name:"Exploitation Dupont"}]:n?[]:[{id:"1",name:"Ferme du Bocage"},{id:"dutilleul",name:"Exploitation Dutilleul"}];let s=((S=o[0])==null?void 0:S.id)??null;const l=$e.find(g=>g.id===(t?ti:bi));if(!l)return{};const c=(t?ii.filter(g=>{var x;return!((x=g.orgIds)!=null&&x.length)||g.orgIds.includes(ti)}):ii.filter(g=>{var x;return(x=g.orgIds)==null?void 0:x.includes(bi)})).filter(g=>g.statut!=="inactif").map(g=>({...g})),p=$e.filter(g=>g.id!==ti&&g.statut!=="inactif").length,v=ul(l.adresse||""),u={rue:"",cp:"",ville:""},d={name:l.name,siret:l.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:v,adresseLivrai:u,copieFactures:l.copieFactures||"",pays:"France",markerLat:l.lat||48.117,markerLng:l.lng||-1.678,plan:l.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":l.codeAdherent||"CTR-2022-00418",dateAdhesion:l.dateAdhesion||"2022-03-15",licencesMembres:t?ii.length:3,licencesAdherents:t?p:null,licencesIntegrations:t?27:2}};let r=null,f=null;function b(){if(!f)return;const g=e.querySelector(`#${f}`);if(!g)return;if(r){try{r.remove()}catch{}r=null}const x=window.L;x&&(r=x.map(g,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),x.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(r),r.setView([d.markerLat,d.markerLng],14),x.marker([d.markerLat,d.markerLng],{draggable:!1}).addTo(r),setTimeout(()=>r==null?void 0:r.invalidateSize(),50))}function $(){if(f=`expl-map-${Math.random().toString(36).slice(2,8)}`,r){try{r.remove()}catch{}r=null}const g=As(d.adresseFactu)||"—",x=As(d.adresseLivrai),y=t?Cs():[],T=y.slice(0,3),z=y.length>3,k=c.slice(0,3),I=c.length>3;function P(C,N){const X=C.statut==="payée"?"#30d158":"#ff9f0a",Q=C.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${N?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${C.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${C.numero}</span>
            <span class="m-list-row-sub">${Rt(C.dateEmission)} · ${C.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${X};flex-shrink:0;margin-right:4px">${Q}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}e.innerHTML=`
      ${o.length>1?`
      <div style="padding:12px 16px 4px">
        <select id="org-selector" style="width:100%;padding:10px 14px;border-radius:10px;border:1.5px solid #e5e5ea;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e;cursor:pointer">
          ${o.map(C=>`<option value="${C.id}"${C.id===s?" selected":""}>${C.name}</option>`).join("")}
        </select>
      </div>
      `:""}
      <div class="m-list-section-header" style="margin-top:16px">Exploitation</div>
      <div class="m-list">
        <div class="m-list-row" data-action="name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${d.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="metier" style="align-items:flex-start;padding-top:12px;padding-bottom:12px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Métiers</span>
            ${d.metiers.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">${d.metiers.map(C=>`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:4px;padding:2px 8px;font-size:12px;font-weight:500">${C}</span>`).join("")}</div>`:'<div style="font-size:13px;color:#8e8e93;margin-top:4px">—</div>'}
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Adresses</div>
      <div class="m-list">
        <div class="m-list-row" data-action="adresse-factu">
          <span class="m-list-row-label">Facturation</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${g}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${x||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="pays">
          <span class="m-list-row-label">Pays</span>
          <span class="m-list-row-value">${d.pays}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="siret">
          <span class="m-list-row-label">SIRET</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:12px">${d.siret||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="copie-factures" style="align-items:flex-start;padding-top:12px;padding-bottom:12px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Envoyer une copie des factures</span>
            <div style="font-size:12px;color:#8e8e93;margin-top:4px;line-height:1.4">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</div>
            <div style="font-size:13px;color:${d.copieFactures?"#1c1c1e":"#8e8e93"};margin-top:6px">${d.copieFactures||"Aucune adresse renseignée"}</div>
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation</div>
      <div id="${f}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${d.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Rt(d.contrat.dateAdhesion)}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Licences membres</span>
          <span class="m-list-row-value">${d.contrat.licencesMembres}</span>
        </div>
        ${d.contrat.licencesAdherents!=null?`
        <div class="m-list-row">
          <span class="m-list-row-label">Adhérents actifs</span>
          <span class="m-list-row-value">${d.contrat.licencesAdherents}</span>
        </div>`:""}
        <div class="m-list-row">
          <span class="m-list-row-label">Licences intégrations</span>
          <span class="m-list-row-value">${d.contrat.licencesIntegrations}</span>
        </div>
        <div class="m-list-row m-list-row--last" ${t?'data-action="plan"':""}>
          <span class="m-list-row-label">Abonnement</span>
          <span class="m-list-row-value" style="color:#0172A4;font-weight:600">${d.plan}</span>
          ${t?'<i class="bi bi-chevron-right m-list-chevron"></i>':""}
        </div>
      </div>

      ${t?`
      <div class="m-list-section-header">Factures</div>
      <div class="m-list">
        ${T.map((C,N)=>P(C,!z&&N===T.length-1)).join("")}
        ${z?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${y.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${c.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${c.length?[...k.map((C,N)=>`
            <div class="m-list-row${!I&&N===k.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${N}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${C.prenom} ${C.nom}</span>
                <span class="m-list-row-sub">${C.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),I?`
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
          ${Ls.slice(0,5).map((C,N)=>`
            <div class="m-list-row${N===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${dl(C.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${C.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${C.distance} km · ${C.capteurs} capteurs · ${C.parcelles} parcelles</div>
                <button class="m-join-net-btn" data-net-idx="${N}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
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
            <span class="m-list-row-value">${Rt("2026-06-08")}</span>
          </div>
        </div>
        <div style="padding:8px 20px 0">
          <button id="btn-use-default-exploit" class="m-btn m-btn--outline" style="margin-bottom:20px">Utiliser cette exploitation</button>
        </div>
      </div>
      `:""}
      <div style="height:32px"></div>`,h()}function h(){var g,x,y,T;(g=e.querySelector("#org-selector"))==null||g.addEventListener("change",z=>{s=z.target.value;const k=o.find(I=>I.id===s);k&&(d.name=k.name,$())}),e.querySelectorAll(".m-list-row[data-action]").forEach(z=>{z.addEventListener("click",()=>{if(a)switch(z.dataset.action){case"name":L("Nom de l'exploitation",d.name,k=>{d.name=k,$()});break;case"siret":L("SIRET",d.siret,k=>{d.siret=k,$()});break;case"metier":E();break;case"adresse-factu":D("Adresse de facturation",d.adresseFactu,k=>{d.adresseFactu=k,$()});break;case"adresse-livrai":D("Adresse de livraison",d.adresseLivrai,k=>{d.adresseLivrai=k,$()});break;case"pays":L("Pays",d.pays,k=>{d.pays=k,$()});break;case"copie-factures":A(d.copieFactures,k=>{d.copieFactures=k,l.copieFactures=k,$()});break;case"plan":w("Abonnement",rl,d.plan,k=>{d.plan=k,$()});break;case"facture":K(`PDF ${z.dataset.factureId} téléchargé`);break;case"voir-factures":M();break;case"voir-membres":F();break}})}),e.querySelectorAll("[data-member-idx]").forEach(z=>{z.addEventListener("click",()=>B(+z.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(z=>{z.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach(I=>{const P=I===z;I.style.background=P?"#fff":"transparent",I.style.color=P?"#000":"#8e8e93"});const k=z.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=k==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=k==="independante"?"":"none"})}),(x=e.querySelector("#btn-ajouter-membre"))==null||x.addEventListener("click",j),(y=e.querySelector("#btn-quitter-reseau"))==null||y.addEventListener("click",()=>{const z=document.createElement("div");z.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,ue({title:"Quitter le réseau ?",body:z,doneLabel:"Confirmer",onDone:()=>K("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(z=>{z.addEventListener("click",()=>{const k=Ls[+z.dataset.netIdx];K(`Demande envoyée à ${k.name}`)})}),e.querySelectorAll(".m-exploit-tab").forEach(z=>{z.addEventListener("click",()=>{e.querySelectorAll(".m-exploit-tab").forEach(I=>{const P=I===z;I.style.background=P?"#fff":"transparent",I.style.color=P?"#000":"#8e8e93"});const k=e.querySelector("#default-exploit-panel");k&&(k.style.display=z.dataset.exploitTab==="membre"?"":"none")})}),(T=e.querySelector("#btn-use-default-exploit"))==null||T.addEventListener("click",()=>{K("Exploitation Jourdain sélectionnée")})}function L(g,x,y){const T=document.createElement("div");T.innerHTML=`<input class="m-sheet-input" type="text" value="${(x||"").replace(/"/g,"&quot;")}" placeholder="${g}">`;const z=T.querySelector("input");ue({title:g,body:T,doneLabel:"Enregistrer",onDone:()=>{const k=z.value.trim();k&&(y(k),K("Enregistré"))}}),setTimeout(()=>z.focus(),300)}function A(g,x){const y=document.createElement("div");y.innerHTML=`
      <div style="font-size:13px;color:#636366;line-height:1.4;margin-bottom:10px">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</div>
      <input class="m-sheet-input" type="email" placeholder="Adresse email du destinataire" value="${(g||"").replace(/"/g,"&quot;")}">`;const T=y.querySelector("input");ue({title:"Copie des factures",body:y,doneLabel:"Enregistrer",onDone:()=>{x(T.value.trim()),K("Enregistré")}}),setTimeout(()=>T.focus(),300)}function D(g,x,y){const T=document.createElement("div");T.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(x.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${x.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(x.ville||"").replace(/"/g,"&quot;")}">`,ue({title:g,body:T,doneLabel:"Enregistrer",onDone:()=>{y({rue:T.querySelector("#f-rue").value.trim(),cp:T.querySelector("#f-cp").value.trim(),ville:T.querySelector("#f-ville").value.trim()}),K("Enregistré")}}),setTimeout(()=>T.querySelector("#f-rue").focus(),300)}function E(){const g=new Set(d.metiers),x=document.createElement("div"),y=()=>{x.innerHTML=Is.map(T=>`
        <div class="m-sheet-option${g.has(T)?" m-sheet-option--active":""}" data-m="${T}" style="justify-content:space-between">
          <span>${T}</span>
          ${g.has(T)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),x.querySelectorAll("[data-m]").forEach(T=>{T.addEventListener("click",()=>{const z=T.dataset.m;g.has(z)?g.delete(z):g.add(z),y()})})};y(),ue({title:"Métiers",body:x,doneLabel:"Valider",onDone:()=>{d.metiers=[...g],$()}})}function w(g,x,y,T){const z=document.createElement("div");z.innerHTML=x.map((I,P)=>`
      <div class="m-sheet-option${I===y?" m-sheet-option--active":""}" data-i="${P}">
        <span>${I}</span>${I===y?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const k=ue({title:g,body:z,doneLabel:"Fermer",onDone:()=>{}});z.querySelectorAll(".m-sheet-option").forEach(I=>{I.addEventListener("click",()=>{T(x[+I.dataset.i]),k.classList.remove("m-sheet-overlay--show"),setTimeout(()=>k.remove(),280),K("Enregistré")})})}function B(g,x){const y=c[g];if(!y)return;const T=document.createElement("div");T.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${y.role}</span></div>
        ${y.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${y.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${y.prenom} ${y.nom}</a>
      </div>`;const z=ue({title:`${y.prenom} ${y.nom}`,body:T,doneLabel:"Fermer",onDone:()=>{}});T.querySelector("#mem-delete").addEventListener("click",()=>{c.splice(g,1),z.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{z.remove(),$(),K("Membre retiré"),x==null||x()},280)})}function F(){let g="",y=20;function T(){if(!g)return c;const P=g.toLowerCase();return c.filter(C=>`${C.prenom} ${C.nom}`.toLowerCase().includes(P)||(C.email||"").toLowerCase().includes(P)||(C.role||"").toLowerCase().includes(P))}const z=we(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),k=z.querySelector("#mbr-list-content");function I(){var X;const P=T(),C=P.slice(0,y),N=P.length-C.length;k.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${P.length} membre${P.length!==1?"s":""}${g?" trouvé"+(P.length!==1?"s":""):" actif"+(P.length!==1?"s":"")}</div>
        <div class="m-list">
          ${C.length?C.map((Q,J)=>`<div class="m-list-row${J===C.length-1&&N===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${c.indexOf(Q)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${Q.prenom} ${Q.nom}</span>
                <span class="m-list-row-sub">${Q.role}${Q.email?" · "+Q.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${N>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${N} de plus</span>
            </div>`:""}
          ${P.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,k.querySelectorAll("[data-mbr-idx]").forEach(Q=>{Q.addEventListener("click",()=>B(+Q.dataset.mbrIdx,I))}),(X=k.querySelector("#mbr-load-more"))==null||X.addEventListener("click",()=>{y+=20,I()})}z.querySelector(".m-detail-back").addEventListener("click",be),z.querySelector("#mbr-invite-btn").addEventListener("click",j),z.querySelector("#mbr-search").addEventListener("input",P=>{g=P.target.value,y=20,I()}),I()}function M(){const g=Cs();let x="";function y(){if(!x)return g;const I=x.toLowerCase();return g.filter(P=>P.numero.toLowerCase().includes(I)||P.statut.toLowerCase().includes(I)||String(P.montant).includes(I))}const T=we(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),z=T.querySelector("#fac-list-content");function k(){const I=y();z.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${I.length} facture${I.length!==1?"s":""}</div>
        <div class="m-list">
          ${I.length?I.map((P,C)=>{const N=P.statut==="payée"?"#30d158":"#ff9f0a",X=P.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${C===I.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${P.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${P.numero}</span>
                <span class="m-list-row-sub">${Rt(P.dateEmission)} · ${P.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${N};flex-shrink:0;margin-right:4px">${X}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,z.querySelectorAll("[data-fac-id]").forEach(P=>{P.addEventListener("click",()=>K(`PDF ${P.dataset.facId} téléchargé`))})}T.querySelector(".m-detail-back").addEventListener("click",be),T.querySelector("#fac-search").addEventListener("input",I=>{x=I.target.value,k()}),k()}function j(){const g=document.createElement("div");g.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${cl.map(x=>`<option>${x}</option>`).join("")}
      </select>`,ue({title:"Ajouter un membre",body:g,doneLabel:"Inviter",onDone:()=>{g.querySelector("#inv-email").value.trim()&&K("Invitation envoyée")}}),setTimeout(()=>g.querySelector("#inv-email").focus(),300)}$();function q(){requestAnimationFrame(()=>setTimeout(b,100))}return{onAdd:null,refresh:q}}const ml=100,vl=["Essentiel","Plus","Expert"],bl={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function mi(e){return bl[e]||{label:e||"—",color:"#8e8e93"}}function fl(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=$e.filter(d=>d.id!==ml&&d.statut!=="inactif").map(d=>({...d})),n={...We,siege:{...We.siege},antennes:We.antennes.map(d=>({...d}))},a={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function o(d,r,f,b){return d.slice(r,f).map(($,h)=>{const L=r+h,A=mi($.statut),D=$.statut==="demande en attente";return`
        <div class="m-list-row${L===b?" m-list-row--last":""} m-tappable" data-org-idx="${L}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${$.proprietaire||$.name}</span>
            <span class="m-list-row-sub">${$.name} · ${$.plan||"—"}</span>
          </div>
          ${D?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${L}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${L}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${A.color};flex-shrink:0;margin-right:4px">${A.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function s(){let d="",f=20;function b(){if(!d)return t;const A=d.toLowerCase();return t.filter(D=>(D.proprietaire||D.name||"").toLowerCase().includes(A)||(D.name||"").toLowerCase().includes(A)||(D.email||"").toLowerCase().includes(A)||(D.codeAdherent||"").toLowerCase().includes(A))}const $=we(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),h=$.querySelector("#adh-list-content");function L(){var B;const A=b(),D=A.slice(0,f),E=A.length-D.length,w=A.filter(F=>F.statut==="actif"||F.statut==="actif en essai").length;h.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${d?A.length+" résultat"+(A.length!==1?"s":""):w+" actif"+(w!==1?"s":"")+" · "+A.length+" total"}</div>
        <div class="m-list">
          ${D.length?D.map((F,M)=>{const j=t.indexOf(F),q=mi(F.statut),S=F.statut==="demande en attente";return`
              <div class="m-list-row${M===D.length-1&&E===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${j}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${F.proprietaire||F.name}</span>
                  <span class="m-list-row-sub">${F.name} · ${F.plan||"—"}</span>
                </div>
                ${S?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${j}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${j}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${q.color};flex-shrink:0;margin-right:4px">${q.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${E>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${E} de plus</span>
            </div>`:""}
        </div>`,h.querySelectorAll("[data-lp-org-idx]").forEach(F=>{F.addEventListener("click",M=>{M.target.closest("[data-adh-action]")||v(t[+F.dataset.lpOrgIdx],+F.dataset.lpOrgIdx,L)})}),h.querySelectorAll("[data-adh-action]").forEach(F=>{F.addEventListener("click",M=>{M.stopPropagation();const j=+F.dataset.lpAdhIdx,q=F.dataset.adhAction,S=t[j];S&&(q==="valider"?(S.statut="actif",l(),L(),K(`${S.proprietaire||S.name} validé`)):(t.splice(j,1),l(),L(),K("Demande rejetée")))})}),(B=h.querySelector("#adh-load-more"))==null||B.addEventListener("click",()=>{f+=20,L()})}$.querySelector(".m-detail-back").addEventListener("click",be),$.querySelector("#adh-invite-btn").addEventListener("click",u),$.querySelector("#adh-search").addEventListener("input",A=>{d=A.target.value,f=20,L()}),L()}function l(){var h;const d=t.filter(L=>L.statut!=="inactif"),r=`${n.siege.adresse}, ${n.siege.codePostal} ${n.siege.ville}`;e.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Réseau</div>
      <div class="m-list">
        <div class="m-list-row" data-action="net-nom">
          <span class="m-list-row-label">Nom du réseau</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:13px">${n.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="net-siege">
          <span class="m-list-row-label">Siège</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:12px">${r}</span>
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
          <label class="m-toggle"><input type="checkbox" id="tog-meteo"${a.partageMeteo?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Capteurs irrigation</span>
          <label class="m-toggle"><input type="checkbox" id="tog-sol"${a.partageSol?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
        <div class="m-list-row m-list-row--last">
          <span class="m-list-row-label">Stations météo virtuelles</span>
          <label class="m-toggle"><input type="checkbox" id="tog-irrigation"${a.partageIrrigation?" checked":""}><span class="m-toggle-track"></span></label>
        </div>
      </div>

      <div class="m-list-section-header">Adhérents — ${d.length} actifs</div>
      <div class="m-list">
        ${o(t,0,Math.min(5,t.length),t.length>5?-1:t.length-1)}
        ${t.length>5?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${t.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(L=>{L.addEventListener("click",A=>{A.target.closest("[data-adh-action]")||v(t[+L.dataset.orgIdx],+L.dataset.orgIdx)})}),(h=e.querySelector('[data-action="voir-adherents"]'))==null||h.addEventListener("click",s),e.querySelectorAll("[data-adh-action]").forEach(L=>{L.addEventListener("click",A=>{A.stopPropagation();const D=+L.dataset.adhIdx,E=L.dataset.adhAction,w=t[D];w&&(E==="valider"?(w.statut="actif",l(),K(`${w.proprietaire||w.name} validé`)):(t.splice(D,1),l(),K("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(L=>{L.addEventListener("click",()=>{switch(L.dataset.action){case"net-nom":m("Nom du réseau",n.nom,A=>{n.nom=A,l()});break;case"net-siege":c();break;case"net-antennes":p();break}})});const f=e.querySelector("#tog-meteo"),b=e.querySelector("#tog-sol"),$=e.querySelector("#tog-irrigation");f==null||f.addEventListener("change",()=>{a.partageMeteo=f.checked,K("Préférence enregistrée")}),b==null||b.addEventListener("change",()=>{a.partageSol=b.checked,K("Préférence enregistrée")}),$==null||$.addEventListener("change",()=>{a.partageIrrigation=$.checked,K("Préférence enregistrée")})}function m(d,r,f){const b=document.createElement("div");b.innerHTML=`<input class="m-sheet-input" type="text" value="${(r||"").replace(/"/g,"&quot;")}" placeholder="${d}">`;const $=b.querySelector("input");ue({title:d,body:b,doneLabel:"Enregistrer",onDone:()=>{const h=$.value.trim();h&&(f(h),K("Enregistré"))}}),setTimeout(()=>$.focus(),300)}function c(){const d=document.createElement("div");d.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${n.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${n.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${n.siege.ville.replace(/"/g,"&quot;")}">`,ue({title:"Adresse du siège",body:d,doneLabel:"Enregistrer",onDone:()=>{n.siege.adresse=d.querySelector("#s-rue").value.trim(),n.siege.codePostal=d.querySelector("#s-cp").value.trim(),n.siege.ville=d.querySelector("#s-ville").value.trim(),l(),K("Enregistré")}}),setTimeout(()=>d.querySelector("#s-rue").focus(),300)}function p(){const d=document.createElement("div");(()=>{d.innerHTML=n.antennes.map((f,b)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${f.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${f.adresse}, ${f.codePostal} ${f.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${f.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),ue({title:"Antennes",body:d,doneLabel:"Fermer",onDone:()=>{}})}function v(d,r,f){var D,E;const b=mi(d.statut),$=d.statut==="invitation en attente",h=`https://app.weenat.com/invitation?code=${d.codeAdherent||"ADZ-XXX"}`,L=document.createElement("div");L.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${d.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${d.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${d.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${d.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${le.filter(w=>w.orgId===d.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const w=new Set(le.filter(B=>B.orgId===d.id).map(B=>B.id));return ce.filter(B=>w.has(B.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${b.color};font-weight:600">${b.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${d.dateAdhesion?d.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${$?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const A=ue({title:d.name,body:L,doneLabel:"Fermer",onDone:()=>{}});(D=L.querySelector("#lnk-copy"))==null||D.addEventListener("click",()=>{var w;(w=navigator.clipboard)==null||w.writeText(h).catch(()=>{}),K("Lien copié !")}),(E=L.querySelector("#lnk-cancel"))==null||E.addEventListener("click",()=>{d.statut="inactif",A.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{A.remove(),l(),f==null||f(),K("Invitation annulée")},280)}),L.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(r,1),A.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{A.remove(),l(),f==null||f(),K("Adhérent supprimé")},280)})}function u(){const d=document.createElement("div");d.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${vl.map(r=>`<option>${r}</option>`).join("")}
      </select>`,ue({title:"Inviter un adhérent",body:d,doneLabel:"Envoyer",onDone:()=>{const r=d.querySelector("#adh-email").value.trim(),f=d.querySelector("#adh-code").value.trim();if(!r||!f){K("Email et code requis");return}t.push({id:Date.now(),name:r,proprietaire:r,email:r,codeAdherent:f,plan:d.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),l(),K("Invitation envoyée")}}),setTimeout(()=>d.querySelector("#adh-email").focus(),300)}return l(),{onAdd:u}}Ts(le);const xn=new URLSearchParams(window.location.search),vi=xn.get("role"),$n=new Set(["new","new-adherent","new-member-admin","new-member-agent","new-member-reader"]),De=vi==="adherent"?"adherent":$n.has(vi)?vi:"admin";function wn(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}wn();setInterval(wn,1e4);const Ze=["parcelles","capteurs","dashboard","alertes","parametres"];let Gt="parcelles";function Xe(e){var i,t;!Ze.includes(e)||e===Gt||(Gt=e,document.querySelectorAll(".m-screen").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function hl(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;Ri()>0&&Tn()?hl(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Xe(t)}):(Ri()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Xe(t))});let Je=null,Mt=null;const Sn=50,Pt=document.getElementById("screen-stack");Pt.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){Je=null;return}Je=e.clientX,Mt=e.clientY});Pt.addEventListener("mouseup",e=>{if(Je===null)return;const i=e.clientX-Je,t=e.clientY-Mt;if(Math.abs(i)>Sn&&Math.abs(i)>Math.abs(t)){const n=Ze.indexOf(Gt);i<0&&n<Ze.length-1&&Xe(Ze[n+1]),i>0&&n>0&&Xe(Ze[n-1])}Je=null,Mt=null});Pt.addEventListener("mouseleave",()=>{Je=null});Pt.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){Je=null;return}Je=e.touches[0].clientX,Mt=e.touches[0].clientY},{passive:!0});Pt.addEventListener("touchend",e=>{if(Je===null)return;const i=e.changedTouches[0].clientX-Je,t=e.changedTouches[0].clientY-Mt;if(Math.abs(i)>Sn&&Math.abs(i)>Math.abs(t)){const n=Ze.indexOf(Gt);i<0&&n<Ze.length-1&&Xe(Ze[n+1]),i>0&&n>0&&Xe(Ze[n-1])}Je=null},{passive:!0});const gl=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...De==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],ei={};function kn(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=ei[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var n;return(n=window.showMobileAddPage)==null?void 0:n.call(window)})}function yl(){var i;const e=document.getElementById("param-segment");e&&(De==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),gl.forEach((t,n)=>{const a=document.createElement("button");a.className="m-segment-btn"+(n===0?" active":""),a.textContent=t.label,a.dataset.target=t.id,a.addEventListener("click",()=>{var o,s,l;e.querySelectorAll(".m-segment-btn").forEach(m=>m.classList.remove("active")),a.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(m=>m.classList.remove("active")),(o=document.getElementById(t.id))==null||o.classList.add("active"),kn(t.id),(l=(s=ei[t.id])==null?void 0:s.refresh)==null||l.call(s)}),e.appendChild(a)}))}yl();$n.has(De)&&ia(De,()=>{(De==="new"||De==="new-adherent")&&Xe("dashboard")});Ya(document.getElementById("screen-dashboard"),De);_o(document.getElementById("screen-parcelles"),De);ll(document.getElementById("screen-capteurs"),De);Vn(document.getElementById("screen-alertes"),De);Bn(document.getElementById("param-compte"),De);ei["param-exploitation"]=pl(document.getElementById("param-exploitation"),De);ei["param-reseau"]=fl(document.getElementById("param-reseau"),De);const Ms=xn.get("parcel");if(Ms){const e=le.find(i=>i.id===+Ms);e&&(Xe("parcelles"),requestAnimationFrame(()=>{ge(()=>Promise.resolve().then(()=>ot),void 0).then(i=>i.initParcelDetail(e,[],"widgets","Parcelles"))}))}function xl(){var n;const e=De==="admin",i=document.getElementById("phone-screen");(n=document.getElementById("m-add-modal"))==null||n.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#f2f2f7;flex-shrink:0;border-bottom:.5px solid rgba(0,0,0,.1)">
      <span style="font-size:17px;font-weight:700">Ajouter</span>
      <button id="m-add-close" style="width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.07);border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <div style="overflow-y:auto;flex:1;padding:12px 16px">
      <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
        <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon exploitation</div>
        ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(a=>`
          <button class="m-add-row" data-action="${a.action}" style="display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08);text-align:left">
            <i class="bi ${a.icon}" style="color:#0172A4;width:22px;text-align:center;flex-shrink:0"></i>
            <span>${a.label}</span>
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(a=>{a.addEventListener("click",()=>{var o;t.remove(),(a.dataset.action==="note"||a.dataset.action==="traitement")&&((o=window.openJournalModal)==null||o.call(window,a.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=xl;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});kn("param-compte");export{be as a,we as p,ue as s};
