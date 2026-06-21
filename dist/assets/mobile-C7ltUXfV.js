const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-B4TIeE90.js","assets/sensors-CRadjF8G.js","assets/irrigations-C22Dtsoo.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-DhtWL7s_.js","assets/store-c0FlIf2T.js","assets/orgs-DnFmvGlp.js","assets/network-YzWdS0n_.js","assets/constants-D_Yu58_o.js","assets/members-Cr98hVG_.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as le}from"./plots-DhtWL7s_.js";import{d as Ne,b as Cs,c as Re,l as Sn}from"./store-c0FlIf2T.js";import{s as ce}from"./sensors-CRadjF8G.js";import{o as ye}from"./orgs-DnFmvGlp.js";import{n as Ge}from"./network-YzWdS0n_.js";import{I as me,s as st,g as kn}from"./irrigations-C22Dtsoo.js";import{I as Yt,S as Ti,M as As,a as xt,E as En,A as ti,b as Fi}from"./constants-D_Yu58_o.js";import{m as ii}from"./members-Cr98hVG_.js";const Ln="modulepreload",Cn=function(e){return"/weenat-proto/"+e},_i={},ge=function(i,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(t.map(p=>{if(p=Cn(p),p in _i)return;_i[p]=!0;const d=p.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${u}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Ln,d||(m.as="script"),m.crossOrigin="",m.href=p,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((v,c)=>{m.addEventListener("load",v),m.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&a(l.reason);return i().catch(a)})},ot=[];function xe(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),ot.push(t),t}function fe(){const e=ot.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function Bi(){return ot.length}function An(){return ot.some(e=>e.dataset.dirty==="true")}function Ms(){ot.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{ot.forEach(e=>e.remove()),ot.length=0});const Mn=[{key:"orgs",label:"Organisations",icon:"bi-building",desc:"Ajouts de membres, changements d'organisation, nouvelles exploitations"},{key:"capteurs",label:"Capteurs",icon:"bi-broadcast",desc:"Anomalies, changements d'état, mise à jour firmware"},{key:"alertes",label:"Alertes",icon:"bi-bell",desc:"Déclenchements de seuils et alertes météo configurées"}],Hi=[{key:"email",label:"Email",icon:"bi-envelope"},{key:"sms",label:"SMS",icon:"bi-phone"},{key:"push",label:"Push",icon:"bi-bell"}],Tn=["Mon réseau","Mon organisation","Mon secteur"],si={orgs:"Mon organisation",capteurs:"Mon réseau",alertes:"Mon secteur"},Ri={orgs:{email:!0,sms:!1,push:!0},capteurs:{email:!0,sms:!1,push:!0},alertes:{email:!0,sms:!0,push:!0}};function In(e){let i=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif"))||JSON.parse(JSON.stringify(Ri))}catch{return JSON.parse(JSON.stringify(Ri))}})(),t=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif-peri"))||JSON.parse(JSON.stringify(si))}catch{return JSON.parse(JSON.stringify(si))}})();function n(){localStorage.setItem("weenat-mobile-notif",JSON.stringify(i)),localStorage.setItem("weenat-mobile-notif-peri",JSON.stringify(t)),e("Préférences enregistrées")}function o(s){const l=i[s.key]||{},p=t[s.key]||si[s.key];return`
      <div class="m-list-section-header" style="display:flex;align-items:center;gap:6px">
        <i class="bi ${s.icon}" style="font-size:13px"></i> ${s.label}
      </div>
      <p style="font-size:12px;color:#8e8e93;margin:0 16px 8px;line-height:1.4">${s.desc}</p>
      <div class="m-list">
        ${Hi.map((d,u)=>{const m=u===Hi.length-1&&!0;return`<div class="m-list-row">
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
            ${Tn.map(d=>`<option value="${d}"${d===p?" selected":""}>${d}</option>`).join("")}
          </select>
        </div>
      </div>`}const a=xe(`
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
      ${Mn.map(s=>o(s)).join("")}
      <div class="m-list-section-footer" style="margin-top:8px">
        Les alertes de seuil se configurent depuis la section <strong>Alertes</strong> de l'application.
      </div>
    </div>
  `);a.querySelector("#notif-back").addEventListener("click",fe),a.querySelectorAll(".notif-toggle").forEach(s=>{s.addEventListener("change",()=>{const l=s.dataset.cat,p=s.dataset.ch;i[l][p]=s.checked,n()})}),a.querySelectorAll(".notif-peri-sel").forEach(s=>{s.addEventListener("change",()=>{t[s.dataset.cat]=s.value,n()})})}const Oi={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},jn=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Ni=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let Qe={};function Ve(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function at({title:e,body:i,onDone:t,doneLabel:n="OK"}){var l;const o=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${n}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}function Vi(e,i,t){const n=document.createElement("div");n.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const o=n.querySelector("input");at({title:e,body:n,doneLabel:"Enregistrer",onDone:()=>{t(o.value.trim()),Ve("Enregistré")}}),setTimeout(()=>o.focus(),300)}function Ji(e,i,t,n){const o=document.createElement("div");o.innerHTML=i.map((s,l)=>`
    <div class="m-sheet-option${s===t?" m-sheet-option--active":""}" data-i="${l}">
      <span>${s}</span>
      ${s===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const a=at({title:e,body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{n(i[+s.dataset.i]),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280),Ve("Enregistré")})})}function qn(e,i){const t=document.createElement("div"),n=()=>{var o;t.innerHTML=e.map((a,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${a.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${a.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(a=>{a.addEventListener("input",()=>{e[+a.dataset.i][a.dataset.f]=a.value})}),t.querySelectorAll(".m-sheet-remove").forEach(a=>{a.addEventListener("click",()=>{e.splice(+a.dataset.i,1),n()})}),(o=t.querySelector(".m-sheet-add-phone"))==null||o.addEventListener("click",()=>{e.push({label:"",numero:""}),n()})};n(),at({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),Ve("Enregistré")}})}function Pn(e,i,t){const n=document.createElement("div");n.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,n.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var a;(a=navigator.clipboard)==null||a.writeText(e.value).catch(()=>{}),Ve("Clé copiée !")});const o=at({title:"Clé API",body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const a=i.findIndex(s=>s.id===e.id);a!==-1&&i.splice(a,1),o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{o.remove(),t()},280),Ve("Clé supprimée")})}function zn(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function Dn(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");at({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const n=t.value.trim();if(!n){Ve("Entrez un nom");return}const o={id:Date.now(),name:n,created:new Date().toLocaleDateString("fr-FR"),value:zn()};e(o),Ve("Clé générée")}}),setTimeout(()=>t.focus(),300)}function Fn(e,i){Qe={profile:JSON.parse(JSON.stringify(Oi[i]||Oi.admin)),langue:"Français",unites:Ni[0]};const n=localStorage.getItem("mobile_avatarUrl")||null;function o(){const s=Qe.profile,l=n?`<img src="${n}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,p=s.apiKeys.map(u=>`
      <div class="m-list-row" data-key-id="${u.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${u.name}</span>
          <span class="m-list-row-sub">créée le ${u.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),d=s.phones.map((u,m)=>`
      <div class="m-list-row${m===s.phones.length-1&&s.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${u.label||"Numéro "+(m+1)}</span>
        <span class="m-list-row-value">${u.numero}</span>
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
    `,a()}function a(){var l;const s=Qe.profile;(l=e.querySelector("#m-avatar-upload"))==null||l.addEventListener("change",p=>{const d=p.target.files[0];if(!d)return;const u=new FileReader;u.onload=m=>{localStorage.setItem("mobile_avatarUrl",m.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${m.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},u.readAsDataURL(d)}),e.querySelectorAll(".m-list-row[data-action]").forEach(p=>{p.addEventListener("click",()=>{switch(p.dataset.action){case"prenom":Vi("Prénom",s.prenom,d=>{s.prenom=d,o()});break;case"nom":Vi("Nom",s.nom,d=>{s.nom=d,o()});break;case"email":at({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>Ve("Fonctionnalité à venir")});break;case"phones":qn(s.phones,d=>{s.phones=d,o()});break;case"mdp":{const d=document.createElement("div");d.innerHTML=`
              <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(0,122,255,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
                  <i class="bi bi-envelope-at" style="font-size:26px;color:#007aff"></i>
                </div>
                <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 20px">Un e-mail de réinitialisation sera envoyé à <strong>${s.email}</strong>. Vous pourrez ensuite définir un nouveau mot de passe.</p>
                <button id="send-reset-btn" style="background:#007aff;color:#fff;border:none;border-radius:12px;padding:14px 0;font-size:16px;font-weight:600;cursor:pointer;width:100%">Envoyer l'e-mail</button>
              </div>`;const u=at({title:"Réinitialiser le mot de passe",body:d,doneLabel:"Annuler",onDone:()=>{}});d.querySelector("#send-reset-btn").addEventListener("click",()=>{u.classList.remove("m-sheet-overlay--show"),setTimeout(()=>u.remove(),280),Ve("E-mail de réinitialisation envoyé")});break}case"langue":Ji("Langue",jn,Qe.langue,d=>{Qe.langue=d,e.querySelector("#val-langue").textContent=d});break;case"unites":Ji("Unités",Ni,Qe.unites,d=>{Qe.unites=d,e.querySelector("#val-unites").textContent=d.split(" ")[0]});break;case"gen-key":Dn(d=>{s.apiKeys.push(d),o()});break;case"notif-settings":In(Ve);break;case"delete":Ve("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(p=>{p.addEventListener("click",()=>{const d=s.apiKeys.find(u=>u.id===+p.dataset.keyId);d&&Pn(d,s.apiKeys,o)})})}o()}function Z(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ue({title:e,body:i,doneLabel:t="Fermer",onDone:n}={}){var l;const o=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}function Jt({title:e,message:i="",confirmLabel:t="Confirmer",confirmColor:n="#ff3b30",onConfirm:o}){var p;const a=document.getElementById("phone-screen");(p=document.querySelector(".m-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
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
    </div>`,a.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const l=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#sc-cancel").addEventListener("click",l),s.querySelector("#sc-confirm").addEventListener("click",()=>{l(),setTimeout(()=>o==null?void 0:o(),50)}),s.addEventListener("click",d=>{d.target===s&&l()})}function _n(e){const i=3+e%5,t=Date.now();return Array.from({length:i},(n,o)=>{const a=e*17+o*7,s=1+o*(2+a%6),l=t-s*864e5-a%8*36e5,p=(1+a%5)*36e5+a%60*6e4,d=o===0&&a%7===0;return{start:new Date(l),end:d?null:new Date(l+p)}})}const Bn=[{id:1,name:"Pluie forte > 10 mm/h",params:"cumul > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",params:"< 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",params:"< 20%",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",params:"> 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",params:"< 50 W/m²",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",params:"> 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",params:"> 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",params:"< 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",params:"> 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Hn=[{id:1,name:"Gel précoce < 2°C",params:"< 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",params:"cumul > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",params:"< 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]},{id:4,name:"Température humide < 0°C",params:"< 0°C",statut:"actif",metric:"temp-humide",created:"2026-02-01",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 78 92 34 15","+33 7 41 08 63 22"]}],Wi={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},Rn={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function ni(e){if(!e)return"—";const[i,t,n]=e.split("-");return`${n}/${t}/${i}`}function Gi(e){const i=e.sensorIds.map(n=>{const o=ce.find(a=>a.id===n);return o?`${o.model} ${o.serial}`:null}).filter(Boolean),t=e.parcelIds.map(n=>{const o=le.find(a=>a.id===n);return(o==null?void 0:o.name)||null}).filter(Boolean);return[...i,...t]}function On(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const n=i==="new"||i==="new-adherent"?[]:[...i==="adherent"?Hn:Bn];function o(){if(!n.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=n.map(s=>{Gi(s);const l=Rn[s.metric]||"bi-bell",p=s.statut==="actif";return`
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
              <span class="m-alert-row-val">${Wi[s.metric]||s.metric}</span>
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
        </div>`}).join(""),a()}function a(){t.querySelectorAll(".m-alert-toggle input").forEach(s=>{s.addEventListener("change",l=>{l.stopPropagation();const p=+s.dataset.id,d=n.find(u=>u.id===p);d&&(d.statut=s.checked?"actif":"inactif",o(),Z(`Alerte ${s.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-edit-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation(),Z("Modification à venir")})}),t.querySelectorAll(".m-alert-detail-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const p=+s.dataset.id,d=n.find(f=>f.id===p);if(!d)return;Gi(d);const u=document.createElement("div"),m=_n(p);function v(){const f=d.sensorIds.map((x,C)=>{const j=ce.find(E=>E.id===x);return j?{label:`${j.model} ${j.serial}`,type:"sensor",idx:C}:null}).filter(Boolean),y=d.parcelIds.map((x,C)=>{const j=le.find(E=>E.id===x);return j?{label:j.name,type:"parcel",idx:C}:null}).filter(Boolean),h=[...f,...y];return h.length?h.map(x=>`<div class="m-perimetre-item" data-type="${x.type}" data-idx="${x.idx}">
                <span>${x.label}</span>
                <button class="m-perimetre-del" data-type="${x.type}" data-idx="${x.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const c=document.createElement("div");c.className="m-sheet-info-rows";function r(){var j;u.innerHTML="";const f=document.createElement("div");f.className="m-sheet-info-rows",f.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Wi[d.metric]||d.metric}</span></div>
            <div class="m-sheet-info-row"><span>Paramètres</span><span>${d.params||"—"}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${ni(d.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${ni(d.created)}</span></div>
            ${(j=d.phones)!=null&&j.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${d.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${d.statut}</span></div>`;const y=document.createElement("div");y.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",y.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${v()}</div>`,f.appendChild(y),u.appendChild(f);const h=E=>E.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+E.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),x=document.createElement("div");x.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${m.map(E=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${E.end?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${h(E.start)} → <span style="color:${E.end?"inherit":"#ff9f0a"}">${E.end?h(E.end):"En cours"}</span></div>
              </div></div>`).join("")}`,u.appendChild(x),u.querySelectorAll(".m-perimetre-del").forEach(E=>{E.addEventListener("click",w=>{w.stopPropagation();const _=E.dataset.type,F=+E.dataset.idx;_==="sensor"?d.sensorIds.splice(F,1):d.parcelIds.splice(F,1),r(),o(),Z("Retiré du périmètre")})});const C=document.createElement("a");C.className="m-sheet-link m-sheet-link--danger",C.style.marginTop="8px",C.textContent="Supprimer l'alerte",C.addEventListener("click",()=>{const E=n.findIndex(w=>w.id===p);E!==-1&&n.splice(E,1),b.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{b.remove(),o()},280),Z("Alerte supprimée")}),u.appendChild(C)}r();const b=ue({title:d.name,body:u,doneLabel:"Fermer",onDone:()=>{}})})})}o()}const Ts=e=>`parcel-journal-${e}`,Ui=[{cible:"Pucerons",produit:"Karate Zeon",dose:"0,1 L/ha",obs:"Quelques pucerons sur feuilles basses. À surveiller."},{cible:"Mildiou",produit:"Bordeaux mixture",dose:"2 kg/ha",obs:"Taches suspectes sur feuillage, conditions humides."},{cible:"Limaces",produit:"Métaldéhyde",dose:"5 kg/ha",obs:"Dégâts de limaces en bordure après les pluies."},{cible:"Altises",produit:"Karaté K",dose:"75 mL/ha",obs:"Présence d'altises sur jeunes plants."}],Yi=["Rimpro","Weephyt","DeciTrait","Maï'zy"],dt=[["Jean Dupont","membre"],["Marie Martin","membre"],["Alexandre Bernard","conseiller"]];function Wt(e){try{const l=localStorage.getItem(Ts(e));if(l)return JSON.parse(l)}catch{}const i=Ui[e%Ui.length],t=Yi[e%Yi.length],[n,o]=dt[e%dt.length],a=e%6,s=(l,p)=>{const d=new Date(l+"T00:00:00");return d.setDate(d.getDate()+p),d.toISOString().slice(0,10)};return[{id:1,type:"note",category:"Observation générale",date:s("2026-05-11",a),auteur:n,role:o,texte:i.obs},{id:2,type:"traitement",date:s("2026-05-16",a),auteur:dt[(e+1)%dt.length][0],role:dt[(e+1)%dt.length][1],texte:"Vent < 2 m/s, conditions conformes.",produit:i.produit,dose:i.dose,cible:i.cible},{id:3,type:"integration",date:s("2026-04-02",a),texte:`L'intégration « ${t} » a expiré et n'est plus active.`,_system:!0},{id:4,type:"integration",date:s("2025-10-02",a),texte:`Intégration « ${t} » activée.`,_system:!0}]}function Ii(e,i){localStorage.setItem(Ts(e),JSON.stringify(i))}function ze(e,i){const t={id:`sys-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,_system:!0,...i};Ii(e,[t,...Wt(e)])}function Is(e,i,t="Irrigations",n=null){const o=i.find(s=>s.id===+e);if(!o)return;const a=ce.filter(s=>s.parcelIds.includes(o.id)).map(s=>s.id);ge(()=>Promise.resolve().then(()=>nt),void 0).then(s=>{s.initParcelDetail(o,a,"widgets",t),n&&setTimeout(()=>{var l;(l=document.querySelector(`[data-widget-id="${n}"], #${n}`))==null||l.scrollIntoView({behavior:"smooth",block:"start"})},150)})}function lt(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const Te=new Date().toISOString().split("T")[0];function $t(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,n,o]=e.split("-");return`${parseInt(o)} ${i[parseInt(n)-1]} ${t}`}function Dt(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,n]=e.split("-");return`${parseInt(n)} ${i[parseInt(t)-1]}`}function fi(e){return!e||e===Te?"":e<Te?'<span class="irr-pill irr-pill--past">Passée · Effectuée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function bi(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Kt(e,i,t){const n=i.length>0&&i.every(a=>t.has(a.id)),o=[...i].sort((a,s)=>{const l=t.has(a.id)?0:1,p=t.has(s.id)?0:1;return l!==p?l-p:a.name.localeCompare(s.name,"fr")}).map(a=>{const s=t.has(a.id);return`<div class="irr-plot-row${s?" irr-plot-row--sel":""}" data-pid="${a.id}">
      <div><div class="irr-plot-name">${a.name}</div>${Nn(a)}</div>
      ${bi(s,!1)}
    </div>`}).join("");return`<div class="irr-sel-all-row" id="irr-sel-all">
    <span class="irr-sel-all-lbl">${n?"Tout désélectionner":"Tout sélectionner"}</span>
    ${bi(n,!1)}
  </div>${o}`}function hi({title:e,body:i,onSave:t,onDelete:n,saveLabel:o="Enregistrer"}){var p,d;const a=document.getElementById("phone-screen");(p=document.querySelector(".irr-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="irr-sheet-overlay",s.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${n?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${o}</button>
      </div>
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),a.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const l=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",u=>{u.target===s&&l()}),(d=s.querySelector("#iss-del"))==null||d.addEventListener("click",()=>{n==null||n(),l()}),s.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),l()}),s}function js(e,i,t){const n=i.filter(l=>e.has(l.id)&&(!l.irrigation||l.irrigation==="Non irrigué"));if(!n.length){t();return}const o=document.createElement("div");o.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${n.length===1?`<strong>${n[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${n.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" class="m-prev-select" style="margin-bottom:0">
      <option value="">— Choisir un type —</option>
      ${Yt.map(l=>`<option value="${l}">${l}</option>`).join("")}
    </select>`;const s=hi({title:"Type d'irrigation",body:o,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const l=o.querySelector("#irr-type-ask").value;l&&n.forEach(p=>{p.irrigation=l,Ne(p.id,{irrigation:l})}),t()}}).querySelector("#iss-del");s&&(s.textContent="Passer",s.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function Nn(e){const i=e.crop,t=e.irrigation||null,n=[i,t||"<em>type irrigation non renseigné</em>"].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${n.join(" · ")}</span>`}function qs(e,i,t=null,n=!1,o=null){let a=new Set((t==null?void 0:t.ids)??[]),s=Te,l=10;function p(){return Kt([],e,a)}function d(r){r.querySelector("#irr-date-hint").innerHTML=fi(s)}function u(r){const b=a.size,f=r.querySelector(".irr-summary"),y=r.querySelector(".irr-save-btn");!f||!y||(f.textContent=b===0?"":`${b} parcelle${b>1?"s":""} · ${l} mm`,y.disabled=b===0,y.textContent="Enregistrer")}function m(r){var b;r.querySelectorAll(".irr-plot-row").forEach(f=>{f.addEventListener("click",()=>{const y=+f.dataset.pid;a.has(y)?a.delete(y):a.add(y),r.querySelector("#irr-sel-list").innerHTML=p(),m(r),u(r)})}),(b=r.querySelector("#irr-sel-all"))==null||b.addEventListener("click",()=>{const f=e.some(y=>!a.has(y.id));e.forEach(y=>f?a.add(y.id):a.delete(y.id)),r.querySelector("#irr-sel-list").innerHTML=p(),m(r),u(r)})}const v=`<div id="irr-sel-list">${p()}</div>`,c=lt(xe(`
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
      ${v}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Enregistrer</button>
    </div>
  `));c.dataset.dirty="true",m(c),u(c),c.querySelector("#irr-back").addEventListener("click",fe),c.querySelector("#irr-date").addEventListener("change",r=>{s=r.target.value,d(c),u(c)}),c.querySelector("#irr-qty").addEventListener("input",r=>{l=parseInt(r.target.value)||1,u(c)}),c.querySelector(".irr-save-btn").addEventListener("click",()=>{const r=a;js(r,e,()=>{const b=s>Te;r.forEach(x=>{me.push({iso:s,mm:l,real:!b,plotId:x,fromStrategy:!1})}),st();const y=[{title:null,names:[...r].map(x=>{var C;return(C=e.find(j=>j.id===x))==null?void 0:C.name}).filter(Boolean)}],h=r.size===1?String([...r][0]):"all";Ms(),Ps({title:r.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:$t(s)},{label:"Quantité",value:`${l} mm`}],parcelSections:y,isFut:b,plots:e,calFilter:h,addedCount:r.size,stackDepth:1,backToParcel:n,onBack:o})})})}function gi(e,i,t=null,n=null,o=!1,a=null){let s=new Set((t==null?void 0:t.ids)??[]),l=Te,p=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],d=10,u=7,m=null,v=null;if(n){const h=me.filter(x=>x.fromStrategy&&n.has(x.seasonId));if(h.length){const x=h.map(j=>j.iso).sort();l=x[0],p=x[x.length-1],d=h[0].mm;const C=[...new Set(x)];u=C.length>=2?Math.round((new Date(C[1])-new Date(C[0]))/864e5):7,m=l,v=p}}function c(){if(!l||!p||u<=0)return[];const h=[],x=new Date(p);let C=new Date(l);for(;C<=x&&h.length<100;)h.push(new Date(C)),C.setDate(C.getDate()+u);return h}function r(){const h=c();s.size;const x=h.length>0?`<span class="irr-preview-ok">↗ ${h.length} irrigations · ${h.length*d} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
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
          <input type="number" class="irr-qty-input" id="strat-freq" value="${u}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${x}</div>
      ${Kt([],e,s)}
      <div class="irr-bottom-spacer"></div>
    `}function b(h){const x=s.size,C=c(),j=h.querySelector(".irr-save-btn"),E=h.querySelector(".irr-summary");!j||!E||(j.disabled=x===0||C.length===0,E.textContent=x===0?"":`${x} parcelle${x>1?"s":""} · ${C.length} occurrences`,j.textContent="Voir l'aperçu →")}function f(h){var j,E,w,_,F;const x=h.querySelector(".irr-scroll-body");x.querySelectorAll(".irr-plot-row").forEach(A=>{A.addEventListener("click",()=>{const I=+A.dataset.pid;s.has(I)?s.delete(I):s.add(I),x.innerHTML=r(),f(h),b(h)})}),(j=x.querySelector("#irr-sel-all"))==null||j.addEventListener("click",()=>{const A=e.some(I=>!s.has(I.id));e.forEach(I=>A?s.add(I.id):s.delete(I.id)),x.innerHTML=r(),f(h),b(h)});const C=()=>{const A=c(),I=x.querySelector("#strat-preview");I&&(I.innerHTML=A.length>0?`<span class="irr-preview-ok">↗ ${A.length} irrigations · ${A.length*d} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),b(h)};(E=x.querySelector("#strat-debut"))==null||E.addEventListener("change",A=>{l=A.target.value,C()}),(w=x.querySelector("#strat-fin"))==null||w.addEventListener("change",A=>{p=A.target.value,C()}),(_=x.querySelector("#strat-qty"))==null||_.addEventListener("input",A=>{d=parseInt(A.target.value)||1,C()}),(F=x.querySelector("#strat-freq"))==null||F.addEventListener("input",A=>{u=parseInt(A.target.value)||1,C()})}const y=lt(xe(`
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
  `));y.dataset.dirty="true",f(y),b(y),y.querySelector("#strat-back").addEventListener("click",fe),y.querySelector(".irr-save-btn").addEventListener("click",()=>{const h=c();Vn(y,e,s,l,p,d,u,h,i,t,n,o,a,m,v)})}function Vn(e,i,t,n,o,a,s,l,p,d,u=null,m=!1,v=null,c=null,r=null){var q,S,$;const b=t.size,f=!!u&&(n!==c||o!==r),y=f?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées.",h=5;l.length-h;function x(k){const T=k.toISOString().slice(0,10)>=Te?"#FFB705":"#FF8500",P=k.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${$t(P)}</span>
      <span style="font-size:13px;font-weight:700;color:${T}">${a} mm</span>
    </div>`}const C=l.filter(k=>k.toISOString().slice(0,10)<Te),j=l.filter(k=>k.toISOString().slice(0,10)>=Te),E=j.slice(0,h),w=j.slice(h),_=`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${C.length?C.map(x).join(""):'<div style="font-size:13px;color:#9E9D98;padding:8px 0">Aucune irrigation effectuée</div>'}`,F=j.length?`
    <div class="irr-section-lbl" style="margin-top:${C.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${E.map(x).join("")}
    ${w.length?`
      <div id="apercu-rest" style="display:none">${w.map(x).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${w.length} irrigation${w.length>1?"s":""} de plus</button>
    `:""}`:"",A=lt(xe(`
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
          <div class="irr-apercu-sub">${Dt(n)} → ${Dt(o)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${l.length*a} mm</div>
          <div class="irr-apercu-sub">${b} parcelle${b>1?"s":""} · ${a} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${_}
        ${F}
        ${!C.length&&!j.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      ${u?`
      <div class="irr-stop-confirm" style="margin-top:12px">
        <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">${y}</div>
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
  `));A.dataset.dirty="true",A.querySelector("#apercu-back").addEventListener("click",fe),(q=A.querySelector("#apercu-show-more"))==null||q.addEventListener("click",k=>{A.querySelector("#apercu-rest").style.display="",k.target.remove()});function I(){const k=t;js(k,i,()=>{u&&(f?me.splice(0,me.length,...me.filter(D=>!(u.has(D.seasonId)&&D.fromStrategy))):me.splice(0,me.length,...me.filter(D=>!(u.has(D.seasonId)&&D.fromStrategy&&D.iso>Te))));const g=u&&!f?l.filter(D=>D.toISOString().slice(0,10)>Te):l,T=kn();if(g.forEach(D=>{const M=D.toISOString().slice(0,10);k.forEach(V=>{me.push({iso:M,mm:a,real:M<=Te,plotId:V,fromStrategy:!0,seasonId:T})})}),st(),u){const D=f?"sur toute la saison":"à partir de demain";k.forEach(M=>{ze(M,{type:"modification",date:Te,texte:`Saison d'irrigation modifiée (${D}) : ${a} mm tous les ${s} jours, du ${Dt(n)} au ${Dt(o)} (${l.length} irrigations).`})})}const L=[{title:null,names:[...k].map(D=>{var M;return(M=i.find(V=>V.id===D))==null?void 0:M.name}).filter(Boolean)}],z=k.size===1?String([...k][0]):"all";Ms(),Ps({title:"Saison enregistrée",params:[{label:"Début",value:$t(n)},{label:"Fin",value:$t(o)},{label:"Quantité",value:`${a} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${l.length*k.size}`}],parcelSections:L,isFut:!0,plots:i,calFilter:z,addedCount:l.length*k.size,stackDepth:2,backToParcel:m,onBack:v})})}A.querySelector("#apercu-confirm").addEventListener("click",()=>{if(u){A.querySelector("#apercu-edit-confirm").style.display="flex",A.querySelector("#apercu-edit-confirm").scrollIntoView({behavior:"smooth",block:"center"});return}I()}),(S=A.querySelector("#apercu-edit-cancel"))==null||S.addEventListener("click",()=>{A.querySelector("#apercu-edit-confirm").style.display="none"}),($=A.querySelector("#apercu-edit-confirm-btn"))==null||$.addEventListener("click",I)}function Ps({title:e,params:i,parcelSections:t=[],isFut:n,plots:o,calFilter:a,addedCount:s=0,stackDepth:l=3,backToParcel:p=!1,onBack:d=null}){const u=(i||[]).map(h=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${h.label}</span>
      <span class="irr-confirm-param-val">${h.value}</span>
    </div>`).join(""),m=3,v=t.flatMap(h=>h.names.map(x=>({title:h.title,name:x}))),c=v.slice(0,m),r=v.slice(m);function b(h){const x=[];let C=null;for(const j of h)(!C||C.title!==j.title)&&(C={title:j.title,names:[]},x.push(C)),C.names.push(j.name);return x.map(j=>`
      ${j.title?`<div class="irr-confirm-sec-hd">${j.title}</div>`:""}
      ${j.names.map(E=>`<div class="irr-confirm-parcel">· ${E}</div>`).join("")}
    `).join("")}const f=v.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${b(c)}
      ${r.length?`
        <details class="irr-confirm-more">
          <summary>${r.length} parcelle${r.length>1?"s":""} de plus</summary>
          ${b(r)}
        </details>`:""}
    </div>`,y=lt(xe(`
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
      <div class="irr-confirm-params">${u}</div>
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
  `));y.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&me.splice(me.length-s,s),fe()}),y.querySelector("#conf-back").addEventListener("click",()=>{for(let h=0;h<=l;h++)fe();d==null||d()}),y.querySelector("#conf-calendar").addEventListener("click",()=>{zs(o,a)})}const Jn=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function zs(e,i){let t=i||"";function n(c){if(!c||c==="all")return null;const r=e.find(b=>String(b.id)===String(c));return r?{ids:[r.id],label:r.name}:null}function o(){return!t||t==="all"?me:me.filter(c=>c.plotId===+t)}function a(c){const r=c.filter(h=>h.real),b=c.filter(h=>!h.real),f=r.reduce((h,x)=>h+x.mm,0),y=b.reduce((h,x)=>h+x.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${f} mm</div>
        <div class="irr-cumul-count">${r.length} irrigation${r.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${y} mm</div>
        <div class="irr-cumul-count">${b.length} irrigation${b.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${f+y} mm</div>
        <div class="irr-cumul-count">${r.length+b.length} irrigations</div>
      </div>
    </div>`}function s(c){if(c.length<2)return"";const r=[...c].sort((L,z)=>L.iso<z.iso?-1:1),b=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],f=new Date(r[0].iso),y=new Date(r[r.length-1].iso),h=Math.max(y-f,1),x=300,C=26,j=5,E=5,w=C-E-4,_=w-E-3,F=C+j+13,A=F+2,I=L=>Math.round((L-f)/h*x),q=L=>{const[,z,D]=L.split("-");return`${parseInt(D)}/${parseInt(z)}`},S=[],$=new Date(f.getFullYear(),f.getMonth()+1,1);for(;$<=y;)S.push(new Date($)),$.setMonth($.getMonth()+1);const k=S.map(L=>`<line x1="${I(L)}" y1="${C-6}" x2="${I(L)}" y2="${C+j+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),g=[f,...S,y],T=g.slice(0,-1).map((L,z)=>{const D=I(L),M=I(g[z+1]);return M-D<16?"":`<text x="${Math.round((D+M)/2)}" y="${_}" font-size="8" fill="#B0AEA8" text-anchor="middle">${b[L.getMonth()]}</text>`}).join(""),P=r.map(L=>{const z=L.real?"#FF8500":"#FFB705",D=I(new Date(L.iso)),[,M,V]=L.iso.split("-"),ie=`${parseInt(V)} ${Jn[parseInt(M)-1]} · ${L.mm} mm`;return`<circle cx="${D}" cy="${w}" r="${E}" fill="${z}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${D}" cy="${w}" r="${E+6}" fill="transparent" pointer-events="all"><title>${ie}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${x}" height="${A}" viewBox="0 0 ${x} ${A}" style="width:100%;display:block">
        ${T}
        <rect x="0" y="${C}" width="${x}" height="${j}" rx="${j/2}" fill="#E0DED8"/>
        ${k}
        ${P}
        <text x="1" y="${F}" font-size="9" fill="#B0AEA8">${q(r[0].iso)}</text>
        <text x="${x-1}" y="${F}" font-size="9" fill="#B0AEA8" text-anchor="end">${q(r[r.length-1].iso)}</text>
      </svg>
    </div>`}function l(c,r,b){const f=document.createElement("div");let y=c.iso,h=c.mm;f.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${c.iso}" />
          <div id="edit-date-hint">${fi(c.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${c.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,f.querySelector("#edit-date").addEventListener("change",x=>{y=x.target.value,f.querySelector("#edit-date-hint").innerHTML=fi(y)}),f.querySelector("#edit-qty").addEventListener("input",x=>{const C=parseInt(x.target.value);C>0&&(h=C)}),hi({title:c.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée",body:f,saveLabel:"Enregistrer",onSave:()=>{c.iso=y,c.mm=h,c.real=y<=Te,st(),u(b)},onDelete:()=>{const x=me.indexOf(c);x>-1&&me.splice(x,1),st(),u(b)}})}function p(c,r){const b=+c,f=document.createElement("div");let y=!1,h=!1;function x(){return new Set(me.filter(E=>E.plotId===b&&E.fromStrategy&&E.seasonId).map(E=>E.seasonId))}function C(){return me.some(E=>E.plotId===b&&!E.fromStrategy)}function j(){var E,w,_,F,A,I,q;f.innerHTML=`
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
        ${y?`
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
          ${C()?'<div style="font-size:12px;color:#7A3A00;margin-bottom:8px">Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.</div>':""}
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(E=f.querySelector("#strat-modify"))==null||E.addEventListener("click",()=>{var g;(g=document.querySelector(".irr-sheet-overlay"))==null||g.remove();const S=x(),$=e.find(T=>T.id===b),k=$?{ids:[$.id],label:$.name}:null;gi(e,()=>u(r),k,S)}),(w=f.querySelector("#strat-stop"))==null||w.addEventListener("click",()=>{y=!0,h=!1,j()}),(_=f.querySelector("#strat-delete"))==null||_.addEventListener("click",()=>{h=!0,y=!1,j()}),(F=f.querySelector("#stop-cancel"))==null||F.addEventListener("click",()=>{y=!1,j()}),(A=f.querySelector("#stop-confirm"))==null||A.addEventListener("click",()=>{var k;const S=x(),$=me.filter(g=>g.plotId===b&&S.has(g.seasonId)&&!g.real).length;me.splice(0,me.length,...me.filter(g=>!(g.plotId===b&&S.has(g.seasonId)&&!g.real))),st(),ze(b,{type:"modification",date:Te,texte:`Saison d'irrigation arrêtée (${$} irrigation(s) planifiée(s) annulée(s)).`}),(k=document.querySelector(".irr-sheet-overlay"))==null||k.remove(),u(r)}),(I=f.querySelector("#delete-cancel"))==null||I.addEventListener("click",()=>{h=!1,j()}),(q=f.querySelector("#delete-confirm"))==null||q.addEventListener("click",()=>{var $;const S=me.filter(k=>k.plotId===b).length;me.splice(0,me.length,...me.filter(k=>k.plotId!==b)),st(),ze(b,{type:"modification",date:Te,texte:`Saison d'irrigation supprimée (${S} irrigation(s) retirée(s) du calendrier).`}),($=document.querySelector(".irr-sheet-overlay"))==null||$.remove(),u(r)})}j(),hi({title:"Gérer la saison",body:f,saveLabel:"Fermer",onSave:()=>{}})}function d(c){if(!c.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const r=[...c].filter(y=>!y.real).sort((y,h)=>y.iso<h.iso?-1:1),b=[...c].filter(y=>y.real).sort((y,h)=>y.iso>h.iso?-1:1);function f(y){const h=y.real?"#FF8500":"#FFB705",x=me.indexOf(y);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${$t(y.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${h};white-space:nowrap;margin-right:4px">${y.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${x}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${x}" title="Supprimer">🗑</button>
      </div>`}return`
      ${b.length?`
        <details class="irr-section-details" data-section="effectuees"${r.length?"":" open"}>
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${b.length}</span></summary>
          ${b.map(f).join("")}
        </details>`:""}
      ${r.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${r.length}</span></summary>
          ${r.map(f).join("")}
        </details>`:""}
    `}function u(c){var _,F,A,I,q;const r=c.querySelector(".irr-cal-body");if(!t){r.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const b={};if(r.querySelectorAll("details[data-section]").forEach(S=>{b[S.dataset.section]=S.open}),t==="all"){const S={};for(const g of me){const T=g.plotId??"unknown";S[T]||(S[T]=[]),S[T].push(g)}const $=Object.keys(S).filter(g=>e.some(T=>String(T.id)===g));if(!$.length){r.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const k=$.sort((g,T)=>{var z,D;const P=((z=e.find(M=>String(M.id)===g))==null?void 0:z.name)??g,L=((D=e.find(M=>String(M.id)===T))==null?void 0:D.name)??T;return P.localeCompare(L,"fr")});r.innerHTML=k.map((g,T)=>{const P=S[g],L=P.some(Q=>Q.fromStrategy),z=e.find(Q=>String(Q.id)===g),D=(z==null?void 0:z.name)??g,M=[z==null?void 0:z.crop,z==null?void 0:z.irrigation].filter(Boolean),V=T>0?'<hr style="border:none;border-top:1px solid #E0DED8;margin:0 0 16px">':"",ie=L?`<div class="irr-cal-add-bar" style="margin-top:8px">
               <button class="irr-cal-add-btn irr-cal-add-btn--sec" data-strat-pid="${g}"><i class="bi bi-pencil"></i> Modifier la saison</button>
             </div>`:`<div class="irr-cal-add-bar" style="margin-top:8px">
               <button class="irr-cal-add-btn irr-cal-add-btn--tert" data-goto-pid="${g}"><i class="bi bi-list-ul"></i> Voir les irrigations</button>
             </div>`;return`${V}<div style="margin-bottom:16px">
          <button class="irr-cal-plot-link" data-goto-pid="${g}" style="display:flex;align-items:baseline;gap:6px;background:none;border:none;padding:0;margin-bottom:6px;text-align:left;cursor:pointer">
            <span style="font-size:13px;font-weight:700;color:#185FA5;text-decoration:underline">${D}</span>
            ${M.length?`<span style="font-size:11px;color:#8e8e93">${M.join(" · ")}</span>`:""}
          </button>
          ${a(P)}
          ${s(P)}
          ${ie}
        </div>`}).join(""),r.querySelectorAll("[data-strat-pid]").forEach(g=>{g.addEventListener("click",()=>p(g.dataset.stratPid,c))}),r.querySelectorAll("[data-goto-pid]").forEach(g=>{g.addEventListener("click",()=>{t=g.dataset.gotoPid;const T=c.querySelector("#cal-filter-sel");T&&(T.value=t),u(c)})});return}const f=o(),y=f.some(S=>S.fromStrategy),h=t!=="all"?e.find(S=>String(S.id)===String(t)):null,x=h?'<button class="irr-cal-add-btn irr-cal-add-btn--tert" id="cal-goto-plot"><i class="bi bi-geo-alt-fill"></i> Voir la parcelle</button>':"",j=y?`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="open-strat-edit"><i class="bi bi-pencil"></i> Modifier la saison</button>
           ${h?'<button class="irr-cal-add-btn irr-cal-add-btn--tert" id="cal-edit-params"><i class="bi bi-sliders"></i> Modifier les paramètres</button>':""}
           ${x}
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Saisir une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Saisir une saison d'irrigation</button>
           ${x}
         </div>`,E=[h==null?void 0:h.crop,h==null?void 0:h.irrigation].filter(Boolean),w=E.length?`<div style="padding:8px 14px 2px;font-size:13px;color:#636366">${E.join(" · ")}</div>`:"";r.innerHTML=`
      ${w}
      ${a(f)}
      ${s(f)}
      ${j}
      ${d(f)}
    `,(_=r.querySelector("#cal-goto-plot"))==null||_.addEventListener("click",()=>{h&&Is(h.id,e)}),(F=r.querySelector("#cal-edit-params"))==null||F.addEventListener("click",()=>{h&&ge(()=>Promise.resolve().then(()=>nt),void 0).then(S=>S.openMobileVolDebitSheet(h,()=>u(c)))}),r.querySelectorAll("details[data-section]").forEach(S=>{const $=S.dataset.section;$ in b&&(S.open=b[$])}),r.querySelectorAll(".irr-edit-btn").forEach(S=>{S.addEventListener("click",$=>{$.stopPropagation();const k=me[+S.dataset.iidx];k&&l(k,f,c)})}),r.querySelectorAll(".irr-del-btn").forEach(S=>{S.addEventListener("click",$=>{$.stopPropagation();const k=+S.dataset.iidx;k>=0&&(me.splice(k,1),st(),u(c))})}),(A=r.querySelector("#open-strat-edit"))==null||A.addEventListener("click",()=>{p(t,c)}),(I=r.querySelector("#cal-add-irrig"))==null||I.addEventListener("click",()=>{qs(e,()=>u(c),n(t))}),(q=r.querySelector("#cal-add-strat"))==null||q.addEventListener("click",()=>{gi(e,()=>u(c),n(t))})}const m=[...e].sort((c,r)=>c.name.localeCompare(r.name,"fr")).map(c=>`<option value="${c.id}"${String(c.id)===String(t)?" selected":""}>${c.name}</option>`).join(""),v=lt(xe(`
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
  `));v.querySelector("#cal-back").addEventListener("click",fe),v.querySelector("#cal-filter-sel").addEventListener("change",c=>{t=c.target.value,u(v)}),u(v)}const et=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:Kt,checkIcon:bi,flexLayer:lt,goToPlot:Is,openCalendar:zs,openIrrigationSaisie:qs,openIrrigationStrategie:gi},Symbol.toStringTag,{value:"Module"})),Wn=[{name:"Allier AgriTech",distance:8,adherents:31,capteurs:198,parcelles:1140,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Auvergne Agri Conseil",distance:15,adherents:54,capteurs:361,parcelles:2080,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]},{name:"Réseau Bourbonnais",distance:22,adherents:18,capteurs:112,parcelles:630,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Creuse Agri Net",distance:38,adherents:12,capteurs:74,parcelles:410,sharedSensorTypes:["Capteurs d'irrigation"]},{name:"Puy-de-Dôme Connect",distance:45,adherents:39,capteurs:255,parcelles:1490,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]}],Ki={name:"Breiz'Agri Conseil",city:"Rennes (35)",phone:"02 99 XX XX XX",email:"contact@breizagri.fr",capteurs:312,parcelles:1830,sharedSensorTypes:["Capteurs météo"]},Gn=["Capteurs météo","Capteurs d'irrigation","Stations météo virtuelles"];function Zi(e){return e.split(" ").filter(i=>i.length>2).slice(0,2).map(i=>i[0].toUpperCase()).join("")}const He={prenom:"Pierre",nom:"Jourdain",email:"pierre@gaec-jourdain.fr",phone:"06 71 23 45 67",orgName:"GAEC Jourdain",adresse:"Lieu-dit La Croix Blanche, 03500 Saint-Pourçain-sur-Sioule",selectedPlan:"expert",joinNetwork:!0},Ds={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre 15/30 cm","CHP-30/60":"Tensiomètre 30/60 cm","CHP-60/90":"Tensiomètre 60/90 cm","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},Un={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]},Yn=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),Kn={"CHP-15/30":[15,30],"CHP-30/60":[30,60],"CHP-60/90":[45,90]},oi=[{id:"essential",name:"Weenat Essential",priceNum:0,price:"Gratuit",color:"#636366",features:["Aucun capteur physique","Historique illimité","Alertes","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"plus",name:"Weenat Plus",priceNum:16.5,price:"16,5 €/mois",color:"#00B093",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"expert",name:"Weenat Expert",priceNum:30,price:"30 €/mois",color:"#006798",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées","Capteurs irrigation","Fonctionnalités irrigation"]}],ai={Administrateur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!0}]}],Agent:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}],Lecteur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!1}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!1}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!1},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}]};function Zn(e,i,t,n){const o=i==="essential",a=i==="expert";return e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?["signup","verify","emailVerified","creating","done"]:e==="new-adherent"?["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkInfo","invite","plan",...a?["volumeChoice"]:[],"creating","done"]:["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkChoice",...t?["networkPick"]:[],"invite","plan",...o?[]:["payment","paymentConfirmed"],...a?["volumeChoice"]:[],"creating","done"]}function Xn(e,i,t,n){return Zn(e,i,t)}const Qn={signup:"Inscription",verify:"Vérification",orgName:"Exploitation",geoloc:"Localisation",orgInfo:"Informations",networkChoice:"Réseau",networkPick:"Choisir un réseau",networkInfo:"Mon réseau",invite:"Invitations",plan:"Abonnement",payment:"Paiement",paymentConfirmed:"Paiement",volumeChoice:"Volume autorisé",parcelMap:"Parcelle",parcelSource:"Source de données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"};function eo(e,i){const t=document.getElementById("phone-screen");let n=0,o=e==="new-adherent"?"expert":He.selectedPlan,a=He.joinNetwork,s=!1,l=0,p=!0,d=46.3021,u=3.2938,m=null,v=null,c="smv",r=[],b="Parcelle 1";const f=document.createElement("div");f.id="onboarding-overlay",f.className="m-ob-overlay",t.appendChild(f);function y(){return Xn(e,o,a)}function h(){return y()[n]}function x(){return y().filter(N=>!["creating","done","parcelDone","emailVerified","paymentConfirmed"].includes(N)).length}function C(){return oi.find(N=>N.id===o)}function j(){const N=y().slice(0,n).filter(U=>U!=="creating"&&U!=="done"&&U!=="parcelDone").length;return`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Math.round(N/x()*100)}%"></div></div>`}function E(N,G=!0){const U=h(),O=new Set(["creating","done","parcelDone","emailVerified","paymentConfirmed"]),B=G&&n>0&&!O.has(U),R=Qn[U]||"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${B?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${R}</span>
          <div style="width:32px"></div>
        </div>
        ${O.has(U)?"":j()}
        <div class="m-ob-body">${N}</div>
      </div>`}function w(){n++,_e()}function _(){n--,_e()}function F(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-person"></i></div>
        <h2 class="m-ob-h2">Créer mon compte</h2>
      </div>
      <div class="m-ob-form" style="margin-top:20px">
        <div class="m-ob-row2">
          <div class="m-ob-field">
            <label class="m-ob-label">Prénom</label>
            <input class="m-ob-input" type="text" placeholder="Prénom" value="${He.prenom}">
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">Nom</label>
            <input class="m-ob-input" type="text" placeholder="Nom" value="${He.nom}">
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Adresse email professionnelle</label>
          <input class="m-ob-input" type="email" placeholder="Adresse email professionnelle" value="${He.email}">
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
            <input class="m-ob-input m-ob-input--phone" type="tel" placeholder="06 12 12 12 12" value="${He.phone}">
          </div>
        </div>
        <label class="m-ob-cgu-row">
          <input type="checkbox" checked>
          <span>J'ai lu et j'accepte les <a href="#">conditions d'utilisations</a> et la <a href="#">politique de confidentialité</a></span>
        </label>
      </div>
      <button class="m-ob-cta" id="ob-next">Créer mon compte</button>
    `,!1)}function A(){return E(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-envelope-check"></i></div>
        <h2 class="m-ob-h2">Vérifiez votre adresse email</h2>
        <p class="m-ob-sub">Un e-mail a été envoyé à<br><strong>${He.email}</strong></p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Code de vérification</label>
          <input class="m-ob-input m-ob-input--code" type="text" value="847291" maxlength="6" inputmode="numeric">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Confirmer</button>
      <button class="m-ob-link" type="button">Renvoyer le code</button>
    `)}function I(){return`
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
          <p class="m-ob-sub" style="text-align:center"><strong>${He.email}</strong><br>a bien été confirmée.</p>
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
          <input class="m-ob-input" type="text" value="${He.orgName}">
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
            <input class="m-ob-input" type="text" value="${He.adresse}">
          </div>
          <div id="ob-addr-map" class="m-ob-addr-map"></div>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      </div>
    `)}function $(){const N=As.map(G=>`<button type="button" class="m-ob-pill" data-metier="${G}">${G}</button>`).join("");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-house"></i></div>
        <h2 class="m-ob-h2">Votre activité</h2>
        <p class="m-ob-sub">Ces informations nous permettent de vous conseiller les fonctionnalités les plus adaptées.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Métier(s)</label>
          <div class="m-ob-pills">${N}</div>
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function k(){return E(`
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
    `)}function g(){const N=Wn.map(G=>{var U;return`
      <div class="m-ob-net-row" data-net="${G.name}">
        <div class="m-ob-net-avatar">${Zi(G.name)}</div>
        <div class="m-ob-net-info">
          <div class="m-ob-net-name">${G.name}</div>
          <div class="m-ob-net-meta">${G.distance} km · ${G.capteurs} capteurs · ${G.parcelles} parcelles</div>
          ${(U=G.sharedSensorTypes)!=null&&U.length?`<div class="m-ob-net-tags">${G.sharedSensorTypes.map(O=>`<span class="m-ob-net-tag">${O}</span>`).join("")}</div>`:""}
        </div>
        <div class="m-ob-net-check"><i class="bi bi-circle"></i></div>
      </div>`}).join("");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-building-check"></i></div>
        <h2 class="m-ob-h2">Choisir un réseau</h2>
        <p class="m-ob-sub">Les 5 réseaux les plus proches de votre exploitation.</p>
      </div>
      <div class="m-ob-net-list">${N}</div>
      <button class="m-ob-cta" id="ob-next">Rejoindre</button>
    `)}function T(){var G;const N=Ki;return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3-fill"></i></div>
        <h2 class="m-ob-h2">Mon réseau</h2>
        <p class="m-ob-sub">Vous avez été invité à rejoindre ce réseau.</p>
      </div>
      <div class="m-ob-info-card" style="background:var(--bg2,#f5f5f7);border-radius:12px;padding:20px 16px;margin:0 0 16px">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:14px">
          <div class="m-ob-net-avatar" style="width:64px;height:64px;font-size:24px;border-radius:16px;margin-bottom:8px">${Zi(N.name)}</div>
          <div style="font-weight:700;font-size:16px">${N.name}</div>
          <div style="font-size:13px;color:#636366">${N.city}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px;margin-top:6px"><i class="bi bi-telephone" style="color:#0172A4"></i> ${N.phone}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px"><i class="bi bi-envelope" style="color:#0172A4"></i> ${N.email}</div>
        </div>
        <div style="display:flex;gap:16px;padding-top:12px;padding-bottom:12px;border-top:.5px solid rgba(0,0,0,.1)">
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${N.capteurs}</div><div style="font-size:11px;color:#636366">capteurs</div></div>
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${N.parcelles}</div><div style="font-size:11px;color:#636366">parcelles</div></div>
        </div>
        <div style="padding-top:12px;border-top:.5px solid rgba(0,0,0,.1)">
          ${(G=N.sharedSensorTypes)!=null&&G.length?`
          <div style="font-size:13px;color:#3a3a3c;margin-bottom:8px">Capteurs partagés entre les adhérents :</div>
          <div class="m-ob-pills">${Gn.map(U=>`<span class="m-ob-pill${N.sharedSensorTypes.includes(U)?" m-ob-pill--on":" m-ob-pill--off"}" style="cursor:default">${U}</span>`).join("")}</div>
          `:`<div style="font-size:13px;color:#3a3a3c">Aucun capteur n'est partagé entre les adhérents de ce réseau</div>`}
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function P(N){const G=ai[N];return G?`<div class="m-ob-role-perms">${G.map(U=>`
      <div class="m-rp-section">
        <div class="m-rp-section-title">${U.section}</div>
        ${U.items.map(O=>`
          <div class="m-rp-item">
            <i class="bi bi-${O.ok?"check-circle-fill":"x-circle-fill"}" style="color:${O.ok?"#30d158":"#ff3b30"}"></i>
            <span>${O.label}</span>
          </div>`).join("")}
      </div>`).join("")}</div>`:""}function L(N){const G=ai[N];return G?`<div class="m-rp-summary">${G.map(O=>{const B=O.items.filter(oe=>oe.ok).length,R=B===0?"none":B===O.items.length?"full":"partial",X={full:"check-circle-fill",partial:"dash-circle-fill",none:"x-circle"}[R],K={full:"#30d158",partial:"#ff9500",none:"#c7c7cc"}[R],ae=O.section.replace("Exploitations adhérentes","Adhérents");return`<div class="m-rp-badge"><i class="bi bi-${X}" style="color:${K}"></i><span>${ae}</span></div>`}).join("")}</div>`:""}function z(){const N=Object.keys(ai);return`
      <button type="button" class="m-rp-toggle" id="ob-roles-info-toggle"><span>Comparer les droits par rôle</span><i class="bi bi-chevron-down"></i></button>
      <div class="m-ob-roles-info" id="ob-roles-info" hidden>
        <div class="m-ob-roles-tabs">${N.map((G,U)=>`<button type="button" class="m-ob-roles-tab${U===0?" m-ob-roles-tab--on":""}" data-role="${G}">${G}</button>`).join("")}</div>
        <div id="ob-roles-info-detail">${P(N[0])}</div>
      </div>`}function D(){return`
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
      </div>`}function M(){return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-people"></i></div>
        <h2 class="m-ob-h2">Inviter des membres</h2>
        <p class="m-ob-sub">Ajoutez des collègues de votre exploitation. Salariés, chefs de culture, conseillers externes...</p>
        <p class="m-ob-sub" style="margin-top:6px">Chaque membre implique une licence payante additionnelle.</p>
      </div>
      ${z()}
      <div id="ob-invite-list">${D()}</div>
      <button class="m-ob-add-member" id="ob-add-member" type="button"><i class="bi bi-plus-circle"></i> Ajouter un membre</button>
      <button class="m-ob-cta" id="ob-send-invites">Continuer</button>
      <button class="m-ob-link" id="ob-skip-invite" type="button">Passer cette étape</button>
    `)}function V(){const N=e==="new-adherent",G=Ki;if(N){const O=oi.find(R=>R.id==="expert"),B=O.features.map(R=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${O.color}"></i> ${R}</li>`).join("");return E(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-gift"></i></div>
          <h2 class="m-ob-h2">Votre abonnement</h2>
          <p class="m-ob-sub">Le réseau <strong>${G.name}</strong> vous a invité à profiter de l'abonnement <strong style="color:${O.color}">Weenat Expert</strong>. Découvrez ce qu'il comprend.</p>
        </div>
        <div class="m-ob-sub-card m-ob-sub-card--on" style="--plan-color:${O.color}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${O.color}">${O.name}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${O.color};background:${O.color}">
              <i class="bi bi-check" style="color:#fff;font-size:13px"></i>
            </div>
          </div>
          <ul class="m-ob-feat-list" style="display:block;margin-top:10px">${B}</ul>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      `)}const U=oi.map(O=>{const B=O.id===o,R=O.features.map(X=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${O.color}"></i> ${X}</li>`).join("");return`
        <div class="m-ob-sub-card${B?" m-ob-sub-card--on":""}" data-plan="${O.id}" style="${B?`--plan-color:${O.color}`:""}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${O.color}">${O.name}${O.id==="expert"?' <span style="font-size:11px;font-weight:400;opacity:.8">(irrigation)</span>':""}</div>
              <div class="m-ob-sub-price">${O.price}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${B?O.color:"#c7c7cc"};background:${B?O.color:"transparent"}">
              ${B?'<i class="bi bi-check" style="color:#fff;font-size:13px"></i>':""}
            </div>
          </div>
          <button class="m-ob-feat-toggle" data-plan="${O.id}" type="button">
            Ce qui est inclus <i class="bi bi-chevron-down"></i>
          </button>
          <ul class="m-ob-feat-list" id="feat-${O.id}" style="display:none">${R}</ul>
        </div>`}).join("");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-grid-1x2"></i></div>
        <h2 class="m-ob-h2">Votre abonnement</h2>
        <p class="m-ob-sub">Choisissez le plan qui correspond à vos besoins.</p>
      </div>
      <div class="m-ob-sub-cards">${U}</div>
      <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
    `)}function ie(){const N=C(),G=l+1,U=G*N.priceNum,O=U*12,B=R=>R%1===0?`${R}`:R.toFixed(1).replace(".",",");return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-credit-card"></i></div>
        <h2 class="m-ob-h2">Paiement</h2>
      </div>
      <div class="m-ob-pay-summary">
        <div class="m-ob-pay-line">
          <span style="color:${N.color};font-weight:700">${N.name}</span>
          <span class="m-ob-pay-price" style="color:${N.color}">${B(N.priceNum)} €<span class="m-ob-pay-period">/licence/mois</span></span>
        </div>
        ${G>1?`
        <div class="m-ob-pay-line" style="margin-top:6px">
          <span style="font-size:13px;color:#636366">${G} licences (${l} invité${l>1?"s":""} + vous)</span>
          <span style="font-size:15px;font-weight:700;color:${N.color}">${B(U)} €/mois</span>
        </div>
        <button class="m-ob-link" id="ob-remove-invites" type="button" style="font-size:12px;color:#636366;padding:2px 0;text-align:left">Retirer les invités et ne prendre qu'une licence</button>`:""}
        <div class="m-ob-pay-divider"></div>
        <div class="m-ob-pay-line">
          <span style="font-weight:600">Total annuel</span>
          <span style="font-size:17px;font-weight:700;color:${N.color}">${B(O)} €/an</span>
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
      <button class="m-ob-cta" id="ob-next" style="background:${N.color}"><i class="bi bi-lock-fill" style="font-size:13px"></i> Payer ${B(O)} €</button>
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
    `)}function J(){return C(),`
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
            <p class="m-ob-sub" style="text-align:center">Un reçu de votre paiement vous a été envoyé par email à <strong>${He.email}</strong>.</p>
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
      </div>`}function se(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-spinner"><div class="m-ob-spinner-ring"></div></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Création de votre espace…</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?"Nous configurons votre accès et créons votre exploitation par défaut.":"Nous configurons votre exploitation."}</p>
      </div>`}function pe(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Votre espace est prêt !</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?`Votre compte a été créé. Votre exploitation par défaut <strong>Exploitation ${He.nom}</strong> est prête.`:"Une parcelle et une station météo virtuelle ont été créées à l'adresse de votre exploitation. Vous pouvez les modifier ou les supprimer."}</p>
        <button class="m-ob-cta" id="ob-finish" style="margin-top:32px">Accéder à mon exploitation</button>
      </div>`}function Ee(){return E(`
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
    `)}function Se(){if(o==="essential")return w(),"";const U=["P+","CHP-15/30","CAPA-30-3","EC"].map(B=>ce.find(R=>R.orgId===1&&R.model===B)).filter(Boolean);return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(B=>`
          <div class="m-ob-plan-card${c===B.id?" m-ob-plan-card--on":""}" data-psource="${B.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${B.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${B.title}</div>
                <div class="m-ob-plan-desc">${B.desc}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>

      <div id="ob-link-sensors" style="display:${c==="link"?"block":"none"}">
        <div style="font-size:13px;font-weight:600;margin-bottom:8px;color:#3a3a3c">Capteurs disponibles</div>
        <div id="ob-sensor-conflict" style="display:none;gap:8px;align-items:flex-start;padding:10px 12px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;margin-bottom:10px">
          <i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;flex-shrink:0;margin-top:1px"></i>
          <span id="ob-sensor-conflict-msg" style="font-size:12px;color:#7a5a00;line-height:1.4"></span>
        </div>
        ${U.map(B=>`
          <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:.5px solid rgba(0,0,0,.08);cursor:pointer">
            <input type="checkbox" ${r.includes(B.id)?"checked":""} data-sensor-id="${B.id}" style="width:18px;height:18px;flex-shrink:0">
            <div>
              <div style="font-size:14px;font-weight:600;color:#1c1c1e">${Ds[B.model]||B.model}</div>
              <div style="font-size:12px;color:#636366;margin-top:1px">${B.model} · ${B.serial}</div>
            </div>
          </label>`).join("")}
      </div>

      <div id="ob-add-sensor-form" style="display:${c==="add"?"block":"none"}">
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
    `)}function De(){const N=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),G=new Set(["EC"]),U=ce.filter(R=>r.includes(R.id)),O=U.some(R=>N.has(R.model)),B=U.some(R=>G.has(R.model));return E(`
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
        ${O?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${Ti.map(R=>`<option>${R}</option>`).join("")}
          </select>
        </div>
        ${B?`
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
    `)}function Fe(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub">
          <strong>${b}</strong> a été créée avec succès.
          ${o==="essential"?"<br>Une station météo virtuelle a été ajoutée au centre de la parcelle.":""}
        </p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Accéder au tableau de bord</button>
      </div>`}const rt={signup:F,verify:A,emailVerified:I,orgName:q,geoloc:S,orgInfo:$,networkChoice:k,networkPick:g,networkInfo:T,invite:M,plan:V,payment:ie,paymentConfirmed:J,volumeChoice:Q,creating:se,done:pe,parcelMap:Ee,parcelSource:Se,parcelConfig:De,parcelDone:Fe};function _e(){const N=rt[h()];if(!N)return;const G=N();G&&(f.innerHTML=G),$e()}function H(){l=[...f.querySelectorAll("#ob-invite-list .m-ob-input--email")].filter(G=>G.value.trim()).length}function Y(){const N=window.L;N&&setTimeout(()=>{const G=f.querySelector("#ob-parcel-map");if(!G||G._leaflet_id)return;v=N.map(G,{zoomControl:!0,attributionControl:!1}).setView([d,u],15),N.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(v),N.circleMarker([d,u],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(v);const U=d+45e-5;m=N.marker([U,u],{icon:N.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),draggable:!0}).addTo(v),m.on("dragend",()=>{const O=m.getLatLng();d=O.lat,u=O.lng}),v.invalidateSize()},50)}const W=new Set(["orgInfo","networkChoice","networkPick","plan","payment","volumeChoice"]);function ee(){const N=h();if(!W.has(N))return;const G=f.querySelector("#ob-next");if(!G)return;let U=!0;N==="orgInfo"?U=f.querySelectorAll(".m-ob-pill--on").length>0:N==="networkChoice"?U=f.querySelectorAll("[data-join].m-ob-plan-card--on").length>0:N==="networkPick"?U=f.querySelectorAll("[data-net].m-ob-net-row--on").length>0:N==="plan"?U=f.querySelectorAll(".m-ob-sub-card--on").length>0:N==="payment"?U=[...f.querySelectorAll(".m-ob-form .m-ob-input")].every(B=>B.value.trim().length>0):N==="volumeChoice"&&(U=f.querySelectorAll("[data-volume].m-ob-plan-card--on").length>0),G.disabled=!U,G.style.opacity=U?"":"0.4"}function $e(){var G,U,O,B,R,X,K,ae,oe,be,re,de,he,ke,Ce,we;(G=f.querySelector("#ob-back"))==null||G.addEventListener("click",_),f.querySelectorAll("#ob-next").forEach(te=>te.addEventListener("click",w)),(U=f.querySelector("#ob-pw-eye"))==null||U.addEventListener("click",()=>{s=!s;const te=f.querySelector("#ob-pw");te&&(te.type=s?"text":"password");const ne=f.querySelector("#ob-pw-eye i");ne&&(ne.className=s?"bi bi-eye":"bi bi-eye-slash")}),f.querySelectorAll(".m-ob-sub-card").forEach(te=>{te.addEventListener("click",ne=>{ne.target.closest(".m-ob-feat-toggle")||(o=te.dataset.plan,_e())})}),f.querySelectorAll(".m-ob-feat-toggle").forEach(te=>{te.addEventListener("click",ne=>{ne.stopPropagation();const ve=f.querySelector(`#feat-${te.dataset.plan}`),Pe=te.querySelector(".bi");if(!ve)return;const Be=ve.style.display!=="none";ve.style.display=Be?"none":"block",Pe.className=`bi bi-chevron-${Be?"down":"up"}`})}),f.querySelectorAll("[data-join]").forEach(te=>{te.addEventListener("click",()=>{a=te.dataset.join==="oui",f.querySelectorAll("[data-join]").forEach(ne=>ne.classList.toggle("m-ob-plan-card--on",ne===te)),ee()})}),f.querySelectorAll("[data-net]").forEach(te=>{te.addEventListener("click",()=>{f.querySelectorAll("[data-net]").forEach(ne=>{const ve=ne===te;ne.classList.toggle("m-ob-net-row--on",ve),ne.querySelector(".bi").className=`bi bi-${ve?"check-circle-fill":"circle"}`}),ee()})});const N=()=>{var ve;(ve=f.querySelector("#ob-geoloc-btns"))==null||ve.remove();const te=f.querySelector("#ob-geoloc-addr");te&&(te.style.display="");const ne=window.L;ne&&setTimeout(()=>{const Pe=f.querySelector("#ob-addr-map");if(!Pe||Pe._leaflet_id)return;const Be=ne.map(Pe,{zoomControl:!0,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}).setView([46.3021,3.2938],13);ne.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:18}).addTo(Be),ne.marker([46.3021,3.2938]).addTo(Be)},50)};(O=f.querySelector("#ob-geoloc-allow"))==null||O.addEventListener("click",N),(B=f.querySelector("#ob-geoloc-manual"))==null||B.addEventListener("click",N),f.querySelectorAll(".m-ob-pill").forEach(te=>{te.addEventListener("click",()=>{te.classList.toggle("m-ob-pill--on"),ee()})}),(R=f.querySelector("#ob-add-member"))==null||R.addEventListener("click",()=>{const te=f.querySelector("#ob-invite-list"),ne=document.createElement("div");ne.innerHTML=D(),te.appendChild(ne.firstElementChild)}),(X=f.querySelector("#ob-invite-list"))==null||X.addEventListener("click",te=>{const ne=te.target.closest(".m-ob-invite-remove");if(!ne)return;const ve=ne.closest(".m-ob-invite-item");ve&&ve.remove()}),(K=f.querySelector("#ob-roles-info-toggle"))==null||K.addEventListener("click",()=>{const te=f.querySelector("#ob-roles-info-toggle"),ne=f.querySelector("#ob-roles-info"),ve=!ne.hidden;ne.hidden=ve,te.classList.toggle("m-rp-toggle--open",!ve),te.querySelector("span").textContent=ve?"Comparer les droits par rôle":"Masquer la comparaison des rôles"}),(ae=f.querySelector("#ob-roles-info"))==null||ae.addEventListener("click",te=>{const ne=te.target.closest(".m-ob-roles-tab");ne&&(f.querySelectorAll(".m-ob-roles-tab").forEach(ve=>ve.classList.toggle("m-ob-roles-tab--on",ve===ne)),f.querySelector("#ob-roles-info-detail").innerHTML=P(ne.dataset.role))}),(oe=f.querySelector("#ob-invite-list"))==null||oe.addEventListener("change",te=>{var Pe;const ne=te.target.closest(".m-ob-invite-role-sel");if(!ne)return;const ve=(Pe=ne.closest(".m-ob-invite-item"))==null?void 0:Pe.querySelector(".m-ob-role-summary-wrap");ve&&(ve.innerHTML=L(ne.value))}),(be=f.querySelector("#ob-remove-invites"))==null||be.addEventListener("click",()=>{l=0,_e()}),(re=f.querySelector("#ob-send-invites"))==null||re.addEventListener("click",()=>{H(),w()}),(de=f.querySelector("#ob-skip-invite"))==null||de.addEventListener("click",()=>{l=0,w()}),f.querySelectorAll("[data-psource]").forEach(te=>{te.addEventListener("click",()=>{c=te.dataset.psource,f.querySelectorAll("[data-psource]").forEach(ne=>ne.classList.toggle("m-ob-plan-card--on",ne===te)),f.querySelector("#ob-link-sensors").style.display=c==="link"?"block":"none",f.querySelector("#ob-add-sensor-form").style.display=c==="add"?"block":"none"})}),f.querySelectorAll("[data-sensor-id]").forEach(te=>{te.addEventListener("change",()=>{const ne=parseInt(te.dataset.sensorId);te.checked?r.includes(ne)||r.push(ne):r=r.filter(Oe=>Oe!==ne);const Pe=ce.filter(Oe=>r.includes(Oe.id)).filter(Oe=>!Yn.has(Oe.model)),Be={};Pe.forEach(Oe=>(Un[Oe.model]||[]).forEach(Di=>{Be[Di]=(Be[Di]||0)+1}));const ft=Object.entries(Be).filter(([,Oe])=>Oe>1).map(([Oe])=>Oe),ct=f.querySelector("#ob-sensor-conflict"),zt=f.querySelector("#ob-sensor-conflict-msg");ct&&zt&&(ft.length>0?(zt.textContent=`Plusieurs capteurs mesurent la même métrique (${ft.join(", ")}). Décochez l'un des capteurs redondants.`,ct.style.display="flex"):ct.style.display="none")})}),f.querySelectorAll("[data-volume]").forEach(te=>{te.addEventListener("click",()=>{p=te.dataset.volume==="oui",f.querySelectorAll("[data-volume]").forEach(ve=>ve.classList.toggle("m-ob-plan-card--on",ve===te));const ne=f.querySelector("#ob-volume-field");ne&&(ne.style.display=p?"block":"none"),ee()})}),(he=f.querySelector("#ob-skip-source"))==null||he.addEventListener("click",()=>{c="smv",w()}),(ke=f.querySelector("#ob-parcel-name"))==null||ke.addEventListener("input",te=>{b=te.target.value}),h()==="parcelMap"&&Y(),h()==="creating"&&setTimeout(()=>{n++,_e()},2200),(Ce=f.querySelector("#ob-finish"))==null||Ce.addEventListener("click",()=>{f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),i()},400)}),(we=f.querySelector("#ob-see-parcel"))==null||we.addEventListener("click",()=>{f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),i()},400)}),f.querySelectorAll(".m-ob-form .m-ob-input").forEach(te=>{te.addEventListener("input",ee)}),ee()}_e()}const to=["Ail","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Colza","Courgette","Féverole","Haricot vert","Laitue","Lin oléagineux","Luzerne","Maïs fourrage","Maïs grain","Orge d'hiver","Orge de printemps","Oignon","Pêcher","Pois protéagineux","Poireau","Poirier","Pomme de terre","Pommier","Prairie","Prunier","Ray-grass","Soja","Tomate","Tournesol","Trèfle","Vigne"];function Fs({showBack:e=!0,btnLabel:i="Ajouter",showSkip:t=!1}={}){return`
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
            ${Object.entries(Ds).map(([n,o])=>`<option value="${n}">${o} (${n})</option>`).join("")}
          </select>
          <div class="m-ob-field" id="ob-sensor-depth-field" style="display:none;margin-bottom:12px">
            <label class="m-ob-label">Profondeur d'installation</label>
            <select class="m-ob-input m-ob-input--select" id="ob-sensor-depth"></select>
          </div>
          <button class="m-ob-cta" id="ob-next" style="margin:0 0 12px"><i class="bi bi-plus-lg"></i> ${i}</button>
          ${t?'<button class="m-ob-link" id="ob-skip-source" type="button" style="margin-bottom:8px">Passer cette étape</button>':""}
        </div>
      </div>
    </div>`}function _s(e){const i=e.querySelector("#ob-sensor-model"),t=e.querySelector("#ob-sensor-depth-field"),n=e.querySelector("#ob-sensor-depth");if(!i||!t||!n)return;const o=()=>{const a=Kn[i.value];if(!a){t.style.display="none";return}const s=[];for(let l=a[0];l<=a[1];l+=5)s.push(l);n.innerHTML=s.map(l=>`<option value="${l}">${l} cm</option>`).join(""),t.style.display=""};i.addEventListener("change",o),o()}async function io(e,i){var t,n,o,a;try{const l=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${i}`)).json();return((t=l.address)==null?void 0:t.village)||((n=l.address)==null?void 0:n.town)||((o=l.address)==null?void 0:o.city)||((a=l.address)==null?void 0:a.municipality)||""}catch{return""}}function so(e){const i=document.getElementById("phone-screen");let t=46.3021,n=3.2938,o=null,a=null,s=46.3021+45e-5,l=3.2938,p=null,d=null,u="smv",m=[],v="",c=0;const r=["parcelMap","parcelSource","parcelData","parcelConfig","parcelDone"],b={parcelMap:"Parcelle",parcelSource:"Source de données",parcelData:"Données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"},f=document.createElement("div");f.id="parcel-creation-overlay",f.className="m-ob-overlay",i.appendChild(f);function y(){return r[c]}function h(){c++,S()}function x(){c--,S()}function C(g,T=!0){const P=y(),L=T&&c>0&&P!=="parcelDone",z=b[P]||"",D=r.filter(Q=>Q!=="parcelDone"),M=D.indexOf(P),V=M>=0?Math.round(M/D.length*100):100,ie=P!=="parcelDone"?`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${V}%"></div></div>`:"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${L?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${z}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${ie}
        <div class="m-ob-body">${g}</div>
      </div>`}function j(){return C(`
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
    `,!1)}function E(){return C(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(T=>`
          <div class="m-ob-plan-card${u===T.id?" m-ob-plan-card--on":""}" data-psource="${T.id}" style="cursor:pointer">
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
    `)}function w(){if(u==="smv")return C(`
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
      `);if(u==="link"){const g=ce.slice(0,6);return C(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-link-45deg"></i></div>
          <h2 class="m-ob-h2">Lier un capteur</h2>
          <p class="m-ob-sub">Sélectionnez les capteurs à lier à cette parcelle.</p>
        </div>
        <div style="background:#fff;border-radius:12px;overflow:hidden;border:.5px solid rgba(0,0,0,.1);margin-bottom:16px">
          ${g.map((T,P)=>`
            <label style="display:flex;align-items:center;gap:12px;padding:12px 14px;${P<g.length-1?"border-bottom:.5px solid rgba(0,0,0,.08)":""};cursor:pointer">
              <input type="checkbox" ${m.includes(T.id)?"checked":""} data-sensor-id="${T.id}" style="width:18px;height:18px;flex-shrink:0">
              <div>
                <div style="font-size:14px;font-weight:600">${T.model}</div>
                <div style="font-size:12px;color:#636366">${T.serial}</div>
              </div>
            </label>`).join("")}
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
        <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
      `)}return Fs({showBack:!0,btnLabel:"Continuer",showSkip:!0})}function _(){const g=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),T=new Set(["EC"]),P=ce.filter(M=>m.includes(M.id)),L=P.some(M=>g.has(M.model)),z=P.some(M=>T.has(M.model)),D=Yt.filter(M=>M!=="Non renseigné");return v||io(t,n).then(M=>{if(!M)return;v=M;const V=f.querySelector("#ob-parcel-name");V&&!V._edited&&(V.value=M)}),C(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${v}" placeholder="Chargement…">
        </div>
        ${L?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${Ti.map(M=>`<option>${M}</option>`).join("")}
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
            ${to.map(M=>`<option>${M}</option>`).join("")}
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
            ${D.map(M=>`<option>${M}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function F(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub"><strong>${v||"La parcelle"}</strong> a été créée avec succès.</p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function A(){const g=window.L;g&&setTimeout(()=>{const T=f.querySelector("#ob-parcel-map");if(!T||T._leaflet_id)return;a=g.map(T,{zoomControl:!0,attributionControl:!1}).setView([t,n],15),g.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(a),g.circleMarker([t,n],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(a);const P=g.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});o=g.marker([t+45e-5,n],{icon:P,draggable:!0}).addTo(a),o.on("dragend",()=>{const L=o.getLatLng();t=L.lat,n=L.lng}),a.on("click",L=>{t=L.latlng.lat,n=L.latlng.lng,o.setLatLng([t,n])}),a.invalidateSize()},50)}function I(){const g=window.L;g&&(s=t+45e-5,l=n,setTimeout(()=>{const T=f.querySelector("#ob-smv-map");if(!T||T._leaflet_id)return;d=g.map(T,{zoomControl:!0,attributionControl:!1}).setView([t,n],15),g.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(d),g.circleMarker([t,n],{radius:8,color:"#fff",weight:2,fillColor:"#E05252",fillOpacity:1}).addTo(d);const P=g.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#0172A4;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});p=g.marker([s,l],{icon:P,draggable:!0}).addTo(d),p.on("dragend",()=>{const L=p.getLatLng();s=L.lat,l=L.lng}),d.on("click",L=>{s=L.latlng.lat,l=L.latlng.lng,p.setLatLng([s,l])}),d.invalidateSize()},50))}const q={parcelMap:j,parcelSource:E,parcelData:w,parcelConfig:_,parcelDone:F};function S(){var T;const g=(T=q[y()])==null?void 0:T.call(q);g&&(f.innerHTML=g),k()}function $(){f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),e()},400)}function k(){var T,P,L,z,D;(T=f.querySelector("#ob-back"))==null||T.addEventListener("click",x),(P=f.querySelector("#ob-close"))==null||P.addEventListener("click",$),f.querySelectorAll("#ob-next").forEach(M=>M.addEventListener("click",h)),_s(f),f.querySelectorAll("[data-psource]").forEach(M=>{M.addEventListener("click",()=>{u=M.dataset.psource,f.querySelectorAll("[data-psource]").forEach(V=>V.classList.toggle("m-ob-plan-card--on",V===M))})}),f.querySelectorAll("[data-sensor-id]").forEach(M=>{M.addEventListener("change",()=>{const V=parseInt(M.dataset.sensorId);M.checked?m.includes(V)||m.push(V):m=m.filter(ie=>ie!==V)})}),(L=f.querySelector("#ob-skip-source"))==null||L.addEventListener("click",()=>{u="smv",h()});const g=f.querySelector("#ob-parcel-name");g&&g.addEventListener("input",M=>{M.target._edited=!0,v=M.target.value}),y()==="parcelMap"&&A(),y()==="parcelData"&&u==="smv"&&I(),(z=f.querySelector("#ob-see-parcel"))==null||z.addEventListener("click",$),(D=f.querySelector("#ob-finish"))==null||D.addEventListener("click",$)}S()}function no(e){const i=document.getElementById("phone-screen");let t=0;const n=["sensorAdd","sensorDone"],o=document.createElement("div");o.id="sensor-creation-overlay",o.className="m-ob-overlay",i.appendChild(o);function a(){return n[t]}function s(){t++,m()}function l(){return Fs({showBack:!1,btnLabel:"Enregistrer le capteur",showSkip:!1})}function p(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Capteur ajouté !</h2>
        <p class="m-ob-sub">Votre capteur a été enregistré avec succès.</p>
        <button class="m-ob-cta" id="ob-see-sensor" style="margin-top:32px"><i class="bi bi-broadcast"></i> Voir le capteur</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function d(){o.classList.add("m-ob-overlay--out"),setTimeout(()=>{o.remove(),e()},400)}function u(){var v,c,r,b;(v=o.querySelector("#ob-close"))==null||v.addEventListener("click",d),(c=o.querySelector("#ob-next"))==null||c.addEventListener("click",s),(r=o.querySelector("#ob-see-sensor"))==null||r.addEventListener("click",d),(b=o.querySelector("#ob-finish"))==null||b.addEventListener("click",d),_s(o)}function m(){var r;const v={sensorAdd:l,sensorDone:p},c=(r=v[a()])==null?void 0:r.call(v);c&&(o.innerHTML=c),u()}m()}function Tt(e){var i;return((i=e.integrations)==null?void 0:i.some(t=>t.startsWith("IRRÉ-LIS")))??!1}const yi="weenat-irrelis-config";function vt(e){try{const l=JSON.parse(localStorage.getItem(yi)||"{}");if(l[e])return l[e]}catch{}const t=60+e*13%50,n=Math.round(t*.42),o=["Maïs","Maïs","Maïs","Blé","Maïs","Tournesol","Orge","Maïs"],a=o[e%o.length],s=String(5+e%16).padStart(2,"0");return{ru:t,rfu:n,culture:a,semisDate:`2026-04-${s}`}}function oo(e,i){try{const t=JSON.parse(localStorage.getItem(yi)||"{}");t[e]={...vt(e),...i},localStorage.setItem(yi,JSON.stringify(t))}catch{}}const Bs=e=>`weenat-il-events-${e}`;function Hs(e){try{return JSON.parse(localStorage.getItem(Bs(e)))||[]}catch{return[]}}function ao(e,i){try{localStorage.setItem(Bs(e),JSON.stringify(i))}catch{}}function lo(e,i,t){const n=[];let o=!0,a=5+Math.floor(Math.abs(Math.sin(e*.13))*5);for(let s=0;s<i;s++)if(a<=0&&(o=!o,a=o?4+Math.floor(Math.abs(Math.sin(e*1337+s*.53))*7):1+Math.floor(Math.abs(Math.sin(e*2997+s*.91))*2.9)),a--,o)n.push(0);else{const l=8+Math.floor(Math.abs(Math.sin(e*7919+s*1.73))*22);n.push(s>=t?Math.round(l*.6):l)}return n}function Et(e,i=5){const t=vt(e.id),{ru:n,rfu:o}=t,a=e.id,s=new Date("2026-04-01T00:00:00"),l=new Date("2026-10-01T00:00:00"),p=new Date;p.setHours(0,0,0,0);const d=864e5,u=Math.round((l-s)/d),m=Math.max(0,Math.min(Math.round((p-s)/d),u)),v=u,c=lo(a,v,m),r={};for(const w of Hs(e.id))r[w.iso]||(r[w.iso]={pluie:0,irrigation:0}),r[w.iso][w.type]=(r[w.iso][w.type]||0)+w.mm;const b=[],f=[];for(let w=0;w<v;w++){const{ru:_,rfu:F}=co(t,s,w);b.push(_),f.push(F)}const y=[],h=[],x=[],C=[],j=[];let E=b[0]*.88;for(let w=0;w<v;w++){const _=new Date(s.getTime()+w*d).toISOString().split("T")[0],F=r[_]||{pluie:0,irrigation:0},A=Math.max(.8,Math.min(5,1+4*Math.pow(Math.max(0,w/150),.6)+Math.sin(a*999+w*.57)*.3)),I=c[w]+F.pluie,q=F.irrigation;x.push(+A.toFixed(1)),h.push(I),C.push(q);const S=b[w];E=E-A+I+q;const $=Math.max(0,E-S);j.push(+$.toFixed(1)),E=Math.max(0,Math.min(S,E)),y.push(+E.toFixed(1))}return{reservoir:y,pluie:h,etp:x,drainage:j,irrigation:C,nDays:m,nFcDays:i,ru:n,rfu:o,cfg:t,apr1:s,ruArr:b,rfuArr:f}}function ji(e,i){const t=Et(e,5),n=t.nDays;switch(i){case"Aujourd'hui":return t.reservoir[n]??0;case"Demain":return t.reservoir[n+1]??0;case"J+3":return t.reservoir[n+3]??0;case"J+5":return t.reservoir[n+5]??0;default:return t.reservoir[n]??0}}function Zt(e,i,t){return e>t?"#007aff":e>=i?"#24B066":e>=t*.15?"#E8A020":"#E05252"}function Rs(e,i,t,n){if(e==="7j"){const o=Math.max(0,i-7);return{startIdx:o,displayLen:Math.min(n-o,7+t)}}if(e==="30j"){const o=Math.max(0,i-30);return{startIdx:o,displayLen:Math.min(n-o,30+t)}}return{startIdx:0,displayLen:n}}const ro=[{label:"Levée",daysAfter:10},{label:"4 feuilles",daysAfter:22},{label:"10 feuilles",daysAfter:38},{label:"15 feuilles",daysAfter:52},{label:"Floraison",daysAfter:68},{label:"Sl. laiteux",daysAfter:83},{label:"70% humidité",daysAfter:100}],Xi=[{daysAfter:0,factor:.1},{daysAfter:10,factor:.22},{daysAfter:22,factor:.42},{daysAfter:38,factor:.66},{daysAfter:52,factor:.85},{daysAfter:68,factor:1},{daysAfter:83,factor:1},{daysAfter:100,factor:.97}];function co(e,i,t){if(e.culture!=="Maïs")return{ru:e.ru,rfu:e.rfu};const n=new Date(e.semisDate+"T00:00:00"),o=Math.round((n-i)/864e5),a=t-o;if(a<0)return{ru:Math.round(e.ru*.08),rfu:Math.round(e.rfu*.08)};let s=Xi[0].factor;for(const d of Xi)a>=d.daysAfter&&(s=d.factor);const l=Math.round(e.ru*s),p=Math.round(l*e.rfu/e.ru);return{ru:l,rfu:p}}function xi(e){if(e.length<2)return"";let i=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let t=0;t<e.length-1;t++){const n=e[Math.max(t-1,0)],o=e[t],a=e[t+1],s=e[Math.min(t+2,e.length-1)],l=o.x+(a.x-n.x)/6,p=o.y+(a.y-n.y)/6,d=a.x-(s.x-o.x)/6,u=a.y-(s.y-o.y)/6;i+=` C${l.toFixed(1)},${p.toFixed(1)} ${d.toFixed(1)},${u.toFixed(1)} ${a.x.toFixed(1)},${a.y.toFixed(1)}`}return i}const Os=["jan.","fév.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],Ns={t:24,r:38,b:28,l:52},uo={t:8,r:38,b:28,l:52};function po(e,i,t,n,o){const{reservoir:a,nDays:s,ru:l,rfu:p,cfg:d,apr1:u,ruArr:m,rfuArr:v}=t,c=Ns,r=e-c.l-c.r,b=i-c.t-c.b,f=l*1.05,y=H=>c.t+b-Math.max(0,Math.min(f,H))/f*b,h=H=>c.l+(H-n)/Math.max(o-1,1)*r,x=c.t+b,C=c.t;function j(H){let Y="";for(let W=0;W<o;W++){const ee=Math.min(n+W,H.length-1),$e=h(n+W).toFixed(1),N=W>0?H[Math.min(n+W-1,H.length-1)]:null;N!==null&&H[ee]!==N&&(Y+=`${$e},${y(N).toFixed(1)} `),Y+=`${$e},${y(H[ee]).toFixed(1)} `}return Y.trim()}const E=j(v),w=E.split(" ").reverse().join(" "),_=j(m),F=_.split(" ").reverse().join(" "),A=`${c.l},${C} ${(c.l+r).toFixed(1)},${C} ${w}`,I=`${E} ${F}`,q=Math.min(s,v.length-1),S=(y(v[q])-5).toFixed(1),$=(y(m[q])-5).toFixed(1),k=`
    <polygon points="${A}" fill="#24B066" opacity="0.1" clip-path="url(#il-c)"/>
    <polygon points="${I}"   fill="#E05252" opacity="0.08" clip-path="url(#il-c)"/>
    <polyline points="${_}"  fill="none" stroke="#0172A4" stroke-width="1"   stroke-dasharray="4,4" opacity="0.35" clip-path="url(#il-c)"/>
    <polyline points="${E}" fill="none" stroke="#24B066" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.65" clip-path="url(#il-c)"/>
    <text x="${(c.l+r-4).toFixed(1)}" y="${S}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#24B066" font-weight="700">RFU</text>
    <text x="${(c.l+r-4).toFixed(1)}" y="${$}"  text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#0172A4" font-weight="600" opacity="0.7">RU</text>`,g=new Date(d.semisDate+"T00:00:00"),T=Math.round((g-u)/864e5),P=(d.culture==="Maïs"?ro:[]).map(H=>{const Y=T+H.daysAfter;if(Y<n||Y>=n+o)return"";const W=h(Y),ee=W.toFixed(1),$e=(W+3).toFixed(0),N=(x-4).toFixed(0);return`<line x1="${ee}" y1="${C}" x2="${ee}" y2="${x}" stroke="#4CAF50" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.55"/>
<text transform="translate(${$e},${N}) rotate(-90)" font-size="10" font-family="-apple-system,sans-serif" fill="#4CAF50" font-weight="600">${H.label}</text>`}).join("");let L="",z="";for(let H=n;H<n+o;H++){const Y=new Date(u.getTime()+H*864e5);if(Y.getDate()===1){const W=h(H).toFixed(1);L+=`<line x1="${W}" y1="${c.t}" x2="${W}" y2="${x}" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-dasharray="3,4"/>`;const ee=new Date(Y.getFullYear(),Y.getMonth()+1,1),$e=Math.round((ee-u)/864e5),N=Math.min($e,n+o-1),G=h((H+N)/2).toFixed(1),U=String(Y.getFullYear()).slice(-2),O=`${Os[Y.getMonth()]} ${U}`;z+=`<text x="${G}" y="${i-6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${O}</text>`}}const M=[0,p,l].map(H=>{const Y=(y(H)+4).toFixed(1);return`<text x="${c.l-6}" y="${Y}" text-anchor="end" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${H}</text>`}).join("")+`<text x="${c.l-6}" y="${c.t-7}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`,V=7,Q=a.slice(n,n+o).map((H,Y)=>({x:h(n+Y),y:y(H)})),J=s-n,se=Q.slice(0,Math.min(Math.max(J+1,1),Q.length)),pe=Math.min(J+V+1,Q.length),Ee=J>=0&&J<Q.length?Q.slice(J,pe):[],Se=xi(se),De=Ee.length>=2?xi(Ee):"",Fe=h(Math.max(n,Math.min(s,n+o-1))).toFixed(1),rt=se.length?se[se.length-1].x.toFixed(1):Fe,_e=Se?`${Se} L${rt},${x} L${c.l},${x} Z`:"";return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <defs>
      <clipPath id="il-c"><rect x="${c.l}" y="${c.t}" width="${r}" height="${b}"/></clipPath>
      <linearGradient id="il-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0172A4" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#0172A4" stop-opacity="0.01"/>
      </linearGradient>
    </defs>
    ${k}
    <g clip-path="url(#il-c)">${L}${P}</g>
    ${_e?`<path d="${_e}" fill="url(#il-g)" clip-path="url(#il-c)"/>`:""}
    ${Se?`<path d="${Se}" fill="none" stroke="#0172A4" stroke-width="2.5" stroke-linejoin="round" clip-path="url(#il-c)"/>`:""}
    ${De?`<path d="${De}" fill="none" stroke="#0172A4" stroke-width="2" stroke-dasharray="7,5" stroke-linejoin="round" opacity="0.7" clip-path="url(#il-c)"/>`:""}
    <line x1="${Fe}" y1="${c.t}" x2="${Fe}" y2="${x}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="${Fe}" y="${c.t-6}" text-anchor="middle" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">Auj.</text>
    ${M}
    ${z}
    <rect x="${c.l}" y="${c.t}" width="${r}" height="${b}" fill="none" stroke="rgba(0,0,0,.07)" stroke-width="1"/>
  </svg>`}function mo(e,i,t,n,o){const{pluie:a,etp:s,drainage:l,irrigation:p,nDays:d,nFcDays:u,apr1:m}=t,v=uo,c=e-v.l-v.r,r=i-v.t-v.b,b=v.t+r/2,f=a.slice(n,n+o),y=s.slice(n,n+o),h=l.slice(n,n+o),x=p.slice(n,n+o),C=Math.max(...f.map((g,T)=>g+(x[T]||0)),1),j=Math.max(...y.map((g,T)=>g+(h[T]||0)),1),E=Math.max(C,j,1),w=r/2,_=Math.max(1.5,c/o*.8),F=g=>v.l+g/Math.max(o-1,1)*c-_/2;let A="";for(let g=0;g<o;g++){const T=f[g]/E*w,P=x[g]/E*w,L=y[g]/E*w,z=h[g]/E*w,D=F(g).toFixed(1),M=_.toFixed(1);f[g]>0&&(A+=`<rect x="${D}" y="${(b-T).toFixed(1)}" width="${M}" height="${T.toFixed(1)}" fill="#2E75B6" opacity="0.85"/>`),x[g]>0&&(A+=`<rect x="${D}" y="${(b-T-P).toFixed(1)}" width="${M}" height="${P.toFixed(1)}" fill="#FF8C00" opacity="0.85"/>`),A+=`<rect x="${D}" y="${b.toFixed(1)}" width="${M}" height="${L.toFixed(1)}" fill="#00887E" opacity="0.75"/>`,h[g]>0&&(A+=`<rect x="${D}" y="${(b+L).toFixed(1)}" width="${M}" height="${z.toFixed(1)}" fill="#8B1A1A" opacity="0.75"/>`)}const I=+E.toFixed(1),q=[`<text x="${v.l-6}" y="${(v.t+13).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">+${I}</text>`,`<text x="${v.l-6}" y="${(b+4).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">0</text>`,`<text x="${v.l-6}" y="${(v.t+r).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">-${I}</text>`,`<text x="${v.l-6}" y="${v.t-1}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`].join("");let S="";for(let g=0;g<o;g++){const T=n+g,P=new Date(m.getTime()+T*864e5);if(P.getDate()===1){const L=new Date(P.getFullYear(),P.getMonth()+1,1),z=Math.round((L-m)/864e5),D=Math.min(z-n,o-1),M=(g+D)/2,V=(v.l+M/Math.max(o-1,1)*c).toFixed(1),ie=String(P.getFullYear()).slice(-2);S+=`<text x="${V}" y="${i-6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${Os[P.getMonth()]} ${ie}</text>`;const Q=(v.l+g/Math.max(o-1,1)*c).toFixed(1);S+=`<line x1="${Q}" y1="${v.t}" x2="${Q}" y2="${v.t+r}" stroke="rgba(0,0,0,.12)" stroke-width="1" stroke-dasharray="3,4"/>`}}const $=d-n,k=$>=0&&$<o?(v.l+$/Math.max(o-1,1)*c).toFixed(1):null;return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <line x1="${v.l}" y1="${b.toFixed(1)}" x2="${v.l+c}" y2="${b.toFixed(1)}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>
    ${A}
    ${k?`<line x1="${k}" y1="${v.t}" x2="${k}" y2="${v.t+r}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3" opacity="0.7"/>`:""}
    ${q}
    ${S}
    <rect x="${v.l}" y="${v.t}" width="${c}" height="${r}" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="1"/>
  </svg>`}function vo(){const e=(a,s)=>`<svg width="20" height="10" style="flex-shrink:0"><line x1="0" y1="5" x2="20" y2="5" stroke="${a}" stroke-width="2.5"${s?' stroke-dasharray="5,3"':""}/></svg>`,i=(a,s)=>`<span style="display:inline-block;width:14px;height:10px;background:${a};opacity:${s};border-radius:2px;flex-shrink:0"></span>`,t=a=>`<span style="display:inline-block;width:10px;height:10px;background:${a};border-radius:2px;flex-shrink:0"></span>`,n=(a,s)=>`<span style="display:flex;align-items:center;gap:4px;font-size:11px;color:#636366;white-space:nowrap">${a}<span>${s}</span></span>`,o=a=>`<div style="display:flex;gap:10px;flex-wrap:wrap">${a.join("")}</div>`;return`<div style="display:flex;flex-direction:column;gap:4px">
    ${o([n(e("#0172A4",!1),"Réserve"),n(e("#0172A4",!0),"Prévision J+7"),n(i("#24B066","1"),"Eau disponible"),n(i("#E05252","1"),"Zone de stress")])}
    ${o([n(t("#2E75B6"),"Pluie"),n(t("#FF8C00"),"Irrigation"),n(t("#00887E"),"ETP"),n(t("#8B1A1A"),"Drainage")])}
  </div>`}function fo(e,i,t){const{nDays:n,nFcDays:o,pluie:a,etp:s,drainage:l,irrigation:p}=i,d=i.reservoir.length,{startIdx:u,displayLen:m}=Rs(t,n,o,d),v=Math.min(u+m,n),c=b=>b.slice(u,v).reduce((f,y)=>f+y,0),r=(b,f,y)=>`<div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px">
      <span style="font-size:12px;color:#636366">${f}</span>
      <span style="font-size:13px;font-weight:700;color:${b}">${y} mm</span>
    </div>`;e.innerHTML=`<div style="font-size:10px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;padding:5px 14px 3px">Cumuls sur la période</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:2px 10px;padding:0 14px 8px">
      ${r("#2E75B6","Pluie",Math.round(c(a)))}
      ${r("#00887E","ETP",+c(s).toFixed(1))}
      ${r("#FF8C00","Irrigation",Math.round(c(p)))}
      ${r("#8B1A1A","Drainage",+c(l).toFixed(1))}
    </div>`}function bo(e,i,t,n,o){const{reservoir:a,ru:s,rfu:l,nDays:p,apr1:d,ruArr:u,rfuArr:m}=i,v=Ns,r=e.clientWidth-v.l-v.r;e.style.position="relative";const b=document.createElement("div");b.style.cssText="position:absolute;background:rgba(28,28,30,.88);color:#fff;border-radius:10px;padding:6px 11px;font-size:13px;font-weight:600;pointer-events:none;display:none;white-space:nowrap;z-index:20;transform:translate(-50%,-100%);margin-top:-10px;font-family:-apple-system,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.25)";const f=document.createElement("div");f.style.cssText=`position:absolute;width:1px;background:rgba(100,100,100,.35);pointer-events:none;display:none;top:${v.t}px`,f.style.height=o-v.t-v.b+"px",e.appendChild(f),e.appendChild(b);const y=(x,C)=>{const j=e.getBoundingClientRect(),E=C-j.top;if(E>o){h();return}const w=x-j.left,_=Math.max(0,Math.min(1,(w-v.l)/r)),F=Math.max(0,Math.min(a.length-1,Math.round(t+_*(n-1)))),A=a[F],I=F>=p,q=u?u[Math.min(F,u.length-1)]:s,S=m?m[Math.min(F,m.length-1)]:l,$=Zt(A,S,q),g=new Date(d.getTime()+F*864e5).toLocaleDateString("fr-FR",{day:"numeric",month:"short"});b.innerHTML=`<span style="color:${$}">${A} mm</span>&ensp;<span style="font-size:11px;opacity:.7">${g}${I?" ·&thinsp;prév.":""}</span>`;const T=Math.max(60,Math.min(j.width-60,w));b.style.left=T+"px",b.style.top=Math.min(E,o-20)+"px",b.style.display="block",f.style.left=w+"px",f.style.display="block"},h=()=>{b.style.display="none",f.style.display="none"};e.addEventListener("mousemove",x=>y(x.clientX,x.clientY)),e.addEventListener("mouseleave",h),e.addEventListener("touchmove",x=>{x.preventDefault(),y(x.touches[0].clientX,x.touches[0].clientY)},{passive:!1}),e.addEventListener("touchend",h)}function ho(e,i,t="saison"){const n=e.clientWidth,o=e.clientHeight;if(!n||!o)return;const{nDays:a,nFcDays:s}=i,l=i.reservoir.length,{startIdx:p,displayLen:d}=Rs(t,a,s,l),u=Math.round(o*3/5),m=o-u;e.innerHTML=po(n,u,i,p,d)+mo(n,m,i,p,d),bo(e,i,p,d,u)}function go(e,i){const t=vt(e.id),n=document.createElement("div");n.innerHTML=`
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
    </div>`;const o=ue({title:`Configuration — ${e.name}`,body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelector("#il-cfg-save").addEventListener("click",()=>{oo(e.id,{culture:n.querySelector("#il-culture").value,semisDate:n.querySelector("#il-semis").value,ru:+n.querySelector("#il-ru").value||t.ru,rfu:+n.querySelector("#il-rfu").value||t.rfu}),o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{o.remove(),i==null||i()},280),Z("Configuration enregistrée")})}function yo(e,i){let t=[...Hs(e.id)],n="all",o=null;function a(p){return new Date(p+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function s(){const d=[...n==="all"?t:t.filter(c=>c.type===n)].sort((c,r)=>r.iso.localeCompare(c.iso)),u=d.map(c=>{const r=t.indexOf(c),b=c.type==="pluie",f=b?"rgba(46,117,182,.12)":"rgba(255,140,0,.12)",y=b?"#2E75B6":"#FF8C00";return`
        <div style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:.5px solid rgba(0,0,0,.07)">
          <div style="width:32px;height:32px;border-radius:50%;background:${f};display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="bi ${b?"bi-cloud-rain":"bi-droplet-fill"}" style="color:${y};font-size:14px"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:600;color:#1c1c1e">${b?"Pluie":"Irrigation"}</div>
            <div style="font-size:12px;color:#8e8e93">${a(c.iso)}</div>
          </div>
          <div style="font-size:15px;font-weight:700;color:${y};margin-right:4px">${c.mm} mm</div>
          <button class="gpi-edit" data-idx="${r}" style="background:none;border:none;cursor:pointer;padding:4px;color:#8e8e93"><i class="bi bi-pencil" style="font-size:14px"></i></button>
          <button class="gpi-del" data-idx="${r}" style="background:none;border:none;cursor:pointer;padding:4px;color:#E05252"><i class="bi bi-trash" style="font-size:14px"></i></button>
        </div>`}).join(""),m="background:#0172A4;color:#fff;",v="background:rgba(1,114,164,.08);color:#0172A4;";o.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:.5px solid rgba(0,0,0,.1);background:#fff;flex-shrink:0">
        <button id="gpi-back" style="color:#0172A4;background:none;border:none;font-size:15px;cursor:pointer;display:flex;align-items:center;gap:4px"><i class="bi bi-chevron-left"></i> Irré-LIS</button>
        <span style="font-size:16px;font-weight:700;color:#1c1c1e;flex:1;text-align:center">Pluies &amp; irrigations</span>
        <div style="width:80px"></div>
      </div>
      <div style="display:flex;gap:6px;padding:10px 16px 8px;flex-shrink:0">
        <button class="gpi-filter" data-f="all"       style="${n==="all"?m:v}flex:1;border:none;border-radius:10px;padding:8px 4px;font-size:13px;font-weight:600;cursor:pointer">Tout</button>
        <button class="gpi-filter" data-f="pluie"     style="${n==="pluie"?m:v}flex:1;border:none;border-radius:10px;padding:8px 4px;font-size:13px;font-weight:600;cursor:pointer">Pluie</button>
        <button class="gpi-filter" data-f="irrigation" style="${n==="irrigation"?m:v}flex:1;border:none;border-radius:10px;padding:8px 4px;font-size:13px;font-weight:600;cursor:pointer">Irrigation</button>
      </div>
      <div style="display:flex;gap:8px;padding:0 16px 12px;flex-shrink:0">
        <button id="gpi-add-pluie" style="flex:1;background:rgba(46,117,182,.1);color:#2E75B6;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Pluie</button>
        <button id="gpi-add-irrig" style="flex:1;background:rgba(255,140,0,.1);color:#FF8C00;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Irrigation</button>
      </div>
      <div style="overflow-y:auto;flex:1;background:#f2f2f7">
        ${d.length?u:'<p style="color:#8e8e93;text-align:center;padding:32px 0;font-size:14px">Aucun événement</p>'}
      </div>
      <div style="padding:10px 16px 20px;background:#fff;border-top:.5px solid rgba(0,0,0,.1);flex-shrink:0">
        <button id="gpi-save" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:14px;padding:15px;font-size:16px;font-weight:700;cursor:pointer">Enregistrer (${t.length})</button>
      </div>`,o.querySelector("#gpi-back").addEventListener("click",()=>fe()),o.querySelector("#gpi-add-pluie").addEventListener("click",()=>l("pluie")),o.querySelector("#gpi-add-irrig").addEventListener("click",()=>l("irrigation")),o.querySelector("#gpi-save").addEventListener("click",()=>{ao(e.id,t),fe(),i==null||i(),Z(`${t.length} événement(s) enregistré(s)`)}),o.querySelectorAll(".gpi-filter").forEach(c=>{c.addEventListener("click",()=>{n=c.dataset.f,s()})}),o.querySelectorAll(".gpi-edit").forEach(c=>{c.addEventListener("click",()=>{l(t[+c.dataset.idx].type,+c.dataset.idx)})}),o.querySelectorAll(".gpi-del").forEach(c=>{c.addEventListener("click",()=>{t.splice(+c.dataset.idx,1),s()})})}function l(p,d=-1){const u=d>=0?t[d]:null,m=document.createElement("div");m.innerHTML=`
      <div style="padding:4px 0 8px">
        <div class="m-form-label">Date</div>
        <input id="gpi-date" type="date" value="${(u==null?void 0:u.iso)??new Date().toISOString().split("T")[0]}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
        <div class="m-form-label">Quantité (mm)</div>
        <input id="gpi-mm" type="number" value="${(u==null?void 0:u.mm)??""}" placeholder="ex : 25" min="0" max="300" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
        <button id="gpi-sheet-save" style="width:100%;background:${p==="pluie"?"#2E75B6":"#FF8C00"};color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">${d>=0?"Modifier":"Ajouter"}</button>
      </div>`;const v=p==="pluie"?d>=0?"Modifier la pluie":"Ajouter une pluie":d>=0?"Modifier l'irrigation":"Ajouter une irrigation",c=ue({title:v,body:m,doneLabel:"Fermer",onDone:()=>{}});m.querySelector("#gpi-sheet-save").addEventListener("click",()=>{const r=m.querySelector("#gpi-date").value,b=parseFloat(m.querySelector("#gpi-mm").value);if(!r||isNaN(b)||b<=0)return;const f={type:p,iso:r,mm:+b.toFixed(1)};d>=0?t[d]=f:t.push(f),c.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{c.remove(),s()},280)})}o=xe(""),o.style.cssText="display:flex;flex-direction:column;background:#f2f2f7",s()}function xo(e){const i=document.createElement("div");i.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
      <div style="width:56px;height:56px;border-radius:50%;background:rgba(48,209,88,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
        <i class="bi bi-file-earmark-spreadsheet" style="font-size:26px;color:#30d158"></i>
      </div>
      <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px">Le bilan hydrique Irré-LIS de <strong>${e.name}</strong> sera envoyé par e-mail au format Excel.</p>
      <div class="m-form-label" style="align-self:flex-start;width:100%;text-align:left">Adresse e-mail</div>
      <input id="il-dl-email" type="email" value="contact@fermebocage.fr" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
      <button id="il-dl-send" style="width:100%;background:#30d158;color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Envoyer le fichier</button>
    </div>`;const t=ue({title:"Télécharger le bilan",body:i,doneLabel:"Fermer",onDone:()=>{}});i.querySelector("#il-dl-send").addEventListener("click",()=>{t.classList.remove("m-sheet-overlay--show"),setTimeout(()=>t.remove(),280),Z("Bilan envoyé par e-mail")})}function Vs(e){const i=Et(e,5),{reservoir:t,pluie:n,etp:o,drainage:a,irrigation:s,nDays:l,ru:p,rfu:d,cfg:u,ruArr:m,rfuArr:v}=i,c=t[l]??t[l-1]??0,r=m[Math.min(l,m.length-1)],b=v[Math.min(l,v.length-1)],f=Zt(c,b,r),y=Math.round(c/r*100),h=Math.max(0,l-7),x=J=>J.slice(h,l).reduce((se,pe)=>se+pe,0),C=Math.round(x(n)),j=Math.round(x(s)),E=+x(o).toFixed(1),w=+x(a).toFixed(1),_=t.slice(h,l+1),F=260,A=52,I=4,q=4,S=4,$=4,k=F-I-q,g=A-S-$,T=J=>S+g-Math.max(0,Math.min(1.02,J/r))*g,P=J=>I+J/Math.max(_.length-1,1)*k,L=_.map((J,se)=>({x:P(se),y:T(J)})),z=xi(L),D=T(b).toFixed(1),M=(S+g).toFixed(1),V=z?`${z} L${P(_.length-1).toFixed(1)},${M} L${I},${M} Z`:"",ie=`<svg viewBox="0 0 ${F} ${A}" width="${F}" height="${A}" style="display:block;width:100%;height:${A}px">
    <rect x="${I}" y="${S}" width="${k}" height="${(+D-S).toFixed(1)}" fill="#24B066" opacity="0.1"/>
    <rect x="${I}" y="${D}" width="${k}" height="${(+M-+D).toFixed(1)}" fill="#E05252" opacity="0.08"/>
    <line x1="${I}" y1="${D}" x2="${I+k}" y2="${D}" stroke="#24B066" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    ${V?`<path d="${V}" fill="#0172A4" opacity="0.08"/>`:""}
    ${z?`<path d="${z}" fill="none" stroke="#0172A4" stroke-width="2" stroke-linejoin="round"/>`:""}
  </svg>`,Q=(J,se,pe)=>`<div style="flex:1;text-align:center">
    <div style="font-size:13px;font-weight:700;color:${J}">${pe}</div>
    <div style="font-size:10px;color:#8e8e93">${se}</div>
  </div>`;return`<div class="m-widget-card" data-widget-id="irrelis">
    <div style="padding:12px 14px 10px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-size:11px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:2px 7px">Irré-LIS</span>
        <span style="font-size:14px;font-weight:700;color:${f}">${c} <span style="font-size:11px;font-weight:400">mm</span></span>
        <span style="font-size:11px;color:#8e8e93">${y}% RU</span>
        <button class="m-il-detail-btn" data-il-plot="${e.id}" style="margin-left:auto;font-size:12px;color:#0172A4;background:none;border:none;cursor:pointer;font-weight:600;white-space:nowrap">Voir le bilan →</button>
      </div>
      ${ie}
      <div style="display:flex;gap:0;margin-top:8px;padding-top:8px;border-top:.5px solid rgba(0,0,0,.07)">
        ${Q("#2E75B6","Pluie 7j",C+" mm")}
        ${Q("#FF8C00","Irrigation 7j",j+" mm")}
        ${Q("#00887E","ETP 7j",E+" mm")}
        ${Q("#8B1A1A","Drainage 7j",w+" mm")}
      </div>
    </div>
  </div>`}function $o(e,i){const t=le.filter(a=>Tt(a)),n=document.createElement("div");n.style.cssText="padding:4px 0",n.innerHTML=t.map(a=>`
    <button class="il-plot-pick" data-id="${a.id}" style="
      display:flex;align-items:center;width:100%;padding:14px 16px;
      border:none;border-bottom:.5px solid rgba(0,0,0,.06);font-family:inherit;cursor:pointer;gap:12px;
      background:${a.id===e.id?"rgba(1,114,164,.07)":"none"}">
      <i class="bi bi-geo-alt" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
      <span style="flex:1;font-size:16px;color:#1c1c1e;font-weight:${a.id===e.id?"700":"400"};text-align:left">${a.name}</span>
      ${a.id===e.id?'<i class="bi bi-check2" style="color:#0172A4;font-size:18px;flex-shrink:0"></i>':""}
    </button>`).join("");const o=ue({title:"Parcelles Irré-LIS",body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelectorAll(".il-plot-pick").forEach(a=>{a.addEventListener("click",()=>{const s=le.find(l=>l.id===+a.dataset.id);o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{o.remove(),s&&s.id!==e.id&&i(s)},280)})})}function Js(e){const i=vt(e.id),t=new Date(i.semisDate+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short"});let n="saison";const o=xe(`
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
        <div style="font-size:11px;color:#8e8e93;margin-top:1px">Semis : ${t}</div>
      </div>
      <select id="il-period" style="flex-shrink:0;font-size:13px;color:#1c1c1e;border:1px solid #e5e5ea;border-radius:8px;padding:5px 8px;background:#fff;cursor:pointer;font-family:inherit">
        <option value="saison" selected>Saison entière</option>
        <option value="30j">30 jours</option>
        <option value="7j">7 jours</option>
      </select>
    </div>

    <div id="il-chart-area" style="flex:1;overflow:hidden;background:#fff;min-height:0"></div>

    <div id="il-cumuls" style="flex-shrink:0;background:#f9f9fb;border-top:.5px solid rgba(0,0,0,.08)"></div>

    <div style="flex-shrink:0;background:#fff;border-top:.5px solid rgba(0,0,0,.07);padding:6px 14px 7px;display:flex;gap:12px;flex-wrap:wrap">
      ${vo()}
    </div>
    <div class="w-irrig-act-row" style="background:#fff;border-top:.5px solid rgba(0,0,0,.1);padding:8px 14px 14px">
      <button id="il-btn-pluv" class="w-irrig-act-btn w-irrig-act-btn--pri"><i class="bi bi-cloud-rain"></i> Pluies &amp; irrigations</button>
      <button id="il-btn-config" class="w-irrig-act-btn w-irrig-act-btn--sec"><i class="bi bi-gear"></i> Configurer</button>
      <button id="il-btn-dl" class="w-irrig-act-btn w-irrig-act-btn--sec"><i class="bi bi-download"></i> Télécharger</button>
    </div>
  `);o.classList.add("m-fs-layer");const a=o.querySelector("#il-chart-area"),s=o.querySelector("#il-cumuls");let l=Et(e,5),p=null;function d(){a.clientWidth&&a.clientHeight&&(ho(a,l,n),fo(s,l,n))}p=new ResizeObserver(()=>requestAnimationFrame(d)),p.observe(a),requestAnimationFrame(d),o.querySelector("#il-back").addEventListener("click",()=>{p==null||p.disconnect(),fe()}),o.querySelector("#il-plot-picker").addEventListener("click",()=>{$o(e,m=>{p==null||p.disconnect(),fe(),requestAnimationFrame(()=>Js(m))})}),o.querySelector("#il-period").addEventListener("change",m=>{n=m.target.value,d()}),o.querySelector("#il-parcel-btn").addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>nt),void 0).then(m=>m.initParcelDetail(e,[],"widgets","Irré-LIS"))});const u=()=>{l=Et(e,5),d()};o.querySelector("#il-btn-config").addEventListener("click",()=>go(e,u)),o.querySelector("#il-btn-pluv").addEventListener("click",()=>yo(e,u)),o.querySelector("#il-btn-dl").addEventListener("click",()=>xo(e))}const Ws=Object.freeze(Object.defineProperty({__proto__:null,getIrrelisConfig:vt,getIrrelisDailyData:Et,getIrrelisVal:ji,hasIrrelis:Tt,irrelisColor:Zt,irrelisMobileWidget:Vs,openIrrelisDetail:Js},Symbol.toStringTag,{value:"Module"})),Gs={admin:100,adherent:1,new:41},Us="weenat-m-dash";function mt(){try{return JSON.parse(localStorage.getItem(Us))||{}}catch{return{}}}function wt(e){try{localStorage.setItem(Us,JSON.stringify({...mt(),...e}))}catch{}}const Le=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls préférés",info:"Mes cumuls préférés.<br><br>Ajoutez ici les valeurs des cumuls qui sont importants pour vous en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures préférées",info:"Mes mesures préférées.<br><br>Ajoutez ici les indicateurs de vos parcelles ou capteurs qui vous intéressent en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"radar_pluie",title:"Radar de pluie",icon:"bi-cloud-rain-heavy",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"irrelis",title:"Bilan Irré-LIS",icon:"bi-moisture",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function wo(e,i,t){var a;const n=document.getElementById("phone-screen");(a=document.querySelector(".m-winfo-overlay"))==null||a.remove();const o=document.createElement("div");o.className="m-winfo-overlay",o.innerHTML=`
    <div class="m-winfo-modal">
      <div class="m-winfo-hd">
        <span class="m-winfo-title">${e}</span>
        <button class="m-winfo-close" type="button"><i class="bi bi-x"></i></button>
      </div>
      <div class="m-winfo-gif">
        ${t?`<img src="${t}" alt="${e}">`:'<div class="m-winfo-gif-placeholder"><i class="bi bi-play-circle" style="font-size:28px;display:block;margin-bottom:6px"></i>GIF à venir</div>'}
      </div>
      <div class="m-winfo-body">${i}</div>
    </div>`,o.querySelector(".m-winfo-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",s=>{s.target===o&&o.remove()}),n.appendChild(o)}function Ue(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Ye({title:e,body:i,doneLabel:t="Fermer",onDone:n}={}){var l;const o=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}const Qi=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function es(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=Qi[Math.floor(Math.random()*Qi.length)],n=t.label==="Pluie"||t.label==="Averses",o=Math.round(8+Math.random()*8),a=Math.round(16+Math.random()*14),s=Array.from({length:24},(l,p)=>{const d=Math.sin(Math.PI*(p-6)/12),u=Math.round(o+(a-o)*Math.max(0,d)),m=n&&p>=8&&p<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:p,label:`${String(p).padStart(2,"0")}h`,temp:u,pluie:m,hum:Math.round(85-40*Math.max(0,d)),vent:Math.round(10+Math.random()*20),icon:m>0?"bi-cloud-rain-fill":p<7||p>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:n?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:o,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:a,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function ts(e){const i=e.id,t=e.reserveHydrique||50,n=+((i*2.3+7)%32).toFixed(1),o=+((i*1.1+14)%14+10).toFixed(1),a=+((i*.6+1)%6).toFixed(1),s=Math.round(t*((i%5+1)/10)),l=Math.max(0,+(s+n-o-a).toFixed(0)),p=l<s?s-l:0;return{j0:s,j7:l,bilan:p}}const St=4,Ot=5,is=["#0172A4","#ff8500","#30d158","#bf5af2"],Ys={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548",irrigation:"#FF8C00"},$i={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol",irrigation:"Irrigation"},So={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C",irrigation:"mm"},ss={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},ko=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function Ks(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function Eo(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const o=new Set(t),a=+e.slice(2);i.filter(l=>l.parcelIds.includes(a)).forEach(l=>(ss[l.model]||[]).forEach(p=>o.add(p)));const s=le.find(l=>l.id===a);return(s!=null&&s.irrigation&&s.irrigation!=="Non irrigué"||me.some(l=>l.plotId===a))&&o.add("irrigation"),[...o].filter(l=>l in $i)}const n=i.find(o=>o.id===+e.slice(2));return n?ss[n.model]||[]:[]}function Lo(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let Ie=[],je=[];(()=>{const e=mt();if(e.catalog){const i=e.catalog.map(t=>t.id);Le.sort((t,n)=>{const o=i.indexOf(t.id),a=i.indexOf(n.id);return(o<0?999:o)-(a<0?999:a)}),e.catalog.forEach(t=>{const n=Le.find(o=>o.id===t.id);n&&(n.active=t.active)})}e.mesuresList&&(Ie=e.mesuresList),e.cumulsList&&(je=e.cumulsList)})();let Nt=null,Vt=null;function Zs(e){return Ie.length>=St?"max":Ie.some(i=>i.subjectKey===e.subjectKey&&i.metricId===e.metricId&&i.period===e.period&&i.step===e.step)?"dup":(Ie.push(e),wt({mesuresList:Ie}),Nt==null||Nt(),"ok")}function Xs(e){return je.length>=Ot?"max":(je.push(e),wt({cumulsList:je}),Vt==null||Vt(),"ok")}function Co(e,i,t){if(i==="irrigation"&&e.startsWith("p-")){const s=parseInt(e.slice(2),10),l=Date.now(),p=24*36e5,d=l-t*p,u=new Array(t).fill(0);return me.filter(m=>m.plotId===s&&m.real).forEach(m=>{const v=new Date(m.iso).getTime();if(v<d||v>l)return;const c=Math.min(t-1,Math.floor((v-d)/p));u[c]+=m.mm||0}),u}const n=[...e+i].reduce((s,l)=>s+l.charCodeAt(0),1),o=s=>(Math.sin(n*.07+s*.5)+Math.sin(n*.03+s*1.3))/2+.5,a={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(s,l)=>a.sparse&&o(l*3.7)>.28?0:Math.max(0,a.base+a.amp*o(l*.28+1.2)))}const Ao=new Set(["pluie","etp","irrigation"]);function Mo(e,i){var C,j;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,n=Co(e.subjectKey,e.metricId,t),o=270,a=100,s=28,l=14,p=Math.max(...n,1),d=Ao.has(e.metricId);let u,m="";for(let E=0;E<=2;E++){const w=Math.round(E/2*(a-l-4)+4);m+=`<line x1="${s}" y1="${w}" x2="${s+o}" y2="${w}" stroke="#E8E6E0" stroke-width=".5"/>`,m+=`<text x="${s-3}" y="${w+3}" text-anchor="end" font-size="8" fill="#636366">${+(p*(1-E/2)).toFixed(p<5?1:0)}</text>`}const v=Lo(e.period,e.step),c=v.map((E,w)=>`<text x="${s+Math.round(w/(v.length-1)*o)}" y="${a+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${E}</text>`).join(""),r=JSON.stringify(n.map(E=>+E.toFixed(2))),b=Ys[e.metricId]||e.color,f=e.metricId==="pluie"?"#2E75B6":b;if(d){const E=Math.max(1,o/t*.7),w=n.map((_,F)=>{const A=Math.round(_/p*(a-l-4)),I=s+Math.round(F/(t-1)*o)-E/2,q=a-l-A;return`<rect x="${I.toFixed(1)}" y="${q.toFixed(1)}" width="${E.toFixed(1)}" height="${A.toFixed(1)}" fill="${f}" opacity=".85" rx="1"/>`}).join("");u=`<svg viewBox="0 0 ${s+o} ${a+6}" style="width:100%;display:block;overflow:visible">${m}${w}${c}</svg>`}else{const E=n.map((w,_)=>`${s+Math.round(_/(t-1)*o)},${a-l-Math.round(w/p*(a-l-4))}`).join(" ");u=`<svg viewBox="0 0 ${s+o} ${a+6}" style="width:100%;display:block;overflow:visible">
      ${m}
      <polyline points="${E}" fill="none" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${a}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${c}
    </svg>`}const y=(C=e.subjectKey)!=null&&C.startsWith("s-")?e.subjectKey.slice(2):null,h=(j=e.subjectKey)!=null&&j.startsWith("p-")?e.subjectKey.slice(2):null,x=y||h?`<button class="m-wf-view-data" ${y?`data-sensor-id="${y}"`:`data-parcel-id="${h}"`} data-metric-id="${e.metricId}" data-period="${e.period}" data-step="${e.step}" style="display:flex;align-items:center;gap:4px;margin-top:8px;padding:6px 10px;border:none;background:rgba(0,122,255,.08);border-radius:8px;color:#007AFF;font-size:12px;font-weight:600;cursor:pointer;width:100%;justify-content:center">Voir détails <i class="bi bi-fullscreen" style="font-size:11px"></i></button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?f:b}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${r}' style="position:relative;margin-top:4px">
        ${u}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${x}
    </div>`}function ns(e,i){const t=Ie.length>=St,n=[...e].sort((l,p)=>l.name.localeCompare(p.name,"fr")).map(l=>`<option value="p-${l.id}">${It(l)}</option>`).join(""),o=i.filter(l=>l.parcelIds.length>0).map(l=>`<option value="s-${l.id}">${jt(l,e)}</option>`).join(""),a=Ks("7d");return`
    <div id="msr-list">${Ie.length?Ie.map(Mo).join(""):'<div class="m-wf-empty">Ajoutez ici les mesures que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Ie.length?"16px":"0"}"></div>
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
        ${o?`<optgroup label="Capteurs">${o}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period">
          ${ko.map(l=>`<option value="${l.id}"${l.id==="7d"?" selected":""}>${l.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${a.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Ajouter la mesure</button>
    </div>`}`}function To(e){const i=new Date().toISOString().split("T")[0],t=new Date;t.setDate(t.getDate()+7);const n=t.toISOString().split("T")[0];return me.filter(o=>o.iso>i&&o.iso<=n&&o.plotId===e.id).reduce((o,a)=>o+a.mm,0)}function Io(e){return 25+e.id*7%20}const os=9;function jo(e){const i=e.filter(o=>Tt(o));return i.length?`
    <div style="font-size:11px;color:#8e8e93;margin-bottom:2px">Réserve en eau — Aujourd'hui</div>
    ${i.map(o=>{const a=vt(o.id),s=Math.round(ji(o,"Aujourd'hui")),l=Zt(s,a.rfu,a.ru),p=Math.round(s/a.ru*100);return`
      <div class="m-il-row" data-il-plot="${o.id}" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:.5px solid rgba(0,0,0,.07);cursor:pointer">
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o.name}</div>
          <div style="font-size:11px;color:#8e8e93">${a.culture} · semis ${new Date(a.semisDate+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:17px;font-weight:700;color:${l}">${s} <span style="font-size:11px;font-weight:400">mm</span></div>
          <div style="font-size:10px;color:#8e8e93">${p}% RU</div>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px;flex-shrink:0"></i>
      </div>`}).join("")}
    <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap">
    <span style="font-size:10px;color:#24B066;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#24B066"></span>RFU</span>
    <span style="font-size:10px;color:#E8A020;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#E8A020"></span>Bas de RFU</span>
    <span style="font-size:10px;color:#E05252;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#E05252"></span>Réservoir de survie</span>
    <span style="font-size:10px;color:#007aff;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#007aff"></span>Saturation</span>
  </div>`:'<div class="m-widget-empty"><i class="bi bi-droplet" style="color:#0172A4;font-size:28px"></i><p>Aucune parcelle avec le service Irré-LIS</p></div>'}function bt(e,i=!1,t=mt().sensorlessEnabled??!0,n=mt().irrigAdvisor??!1){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const o=E=>E.id%3===2,a=e.slice(),s=(E,w)=>ts(w).bilan-ts(E).bilan,l=a.slice().sort(s),p=i?l:l.slice(0,os),d=new Set(p.map(E=>E.id)),u=l.length-p.length,m=E=>Math.round((E.id*2.3+7)%32*10)/10,v=E=>Math.round(((E.id*1.1+14)%14+10)*10)/10,c="font-size:11px;font-weight:700;color:#8e8e93;text-align:right;padding-bottom:6px;text-transform:uppercase;letter-spacing:.03em;line-height:1.3",r=E=>`<span style="display:block;font-size:9px;font-weight:400;text-transform:none;color:#b0aead;letter-spacing:0">${E}</span>`,b="border-top:none",f=(E,w)=>{const _=To(E),F=m(E),A=v(E),I=w===0?"border-top:none":"border-top:.5px solid rgba(0,0,0,.18);padding-top:8px;margin-top:2px",q=`<button class="m-bh-th-n m-bh-plot-link" data-plot-id="${E.id}" style="grid-column:1/-1;white-space:normal;overflow:visible;text-overflow:unset;text-align:left;${I}">${E.name}</button>`;if(n){const $=o(E)?Io(E):null,k=$!==null?_>=$?"#24B066":"#E05252":null,g=$!==null?`<span style="color:${k};font-weight:700">${$}</span>`:'<span style="color:#c7c7cc">—</span>';return`
        ${q}
        <div class="m-bh-td" style="${b}">${F}</div>
        <div class="m-bh-td" style="${b}">${A}</div>
        <div class="m-bh-td m-bh-td--planif" style="${b}">${_>0?_:"—"}</div>
        <div class="m-bh-td" style="${b}">${g}</div>`}return`
      ${q}
      <div class="m-bh-td" style="${b}">${F}</div>
      <div class="m-bh-td" style="${b}">${A}</div>
      <div class="m-bh-td m-bh-td--planif" style="${b}">${_>0?_:"—"}</div>`},y=l.filter(E=>d.has(E.id)).map((E,w)=>f(E,w)).join(""),h=n?"1fr 1fr 1.5fr 1fr":"1fr 1fr 1.5fr",x=n?`<div style="${c}">Pluie${r("J+7 mm")}</div>
       <div style="${c}">ETP${r("J+7 mm")}</div>
       <div style="${c}">Irr. planif.${r("J+7 mm")}</div>
       <div style="${c}">Irr. reco.${r("J+7 mm")}</div>`:`<div style="${c}">Pluie${r("J+7 mm")}</div>
       <div style="${c}">ETP${r("J+7 mm")}</div>
       <div style="${c}">Irr. planif.${r("J+7 mm")}</div>`,C=n?`<div style="font-size:11px;color:#8e8e93;margin-bottom:6px">
         <i class="bi bi-info-circle" style="color:#ff9f0a"></i>
         Reco. affiché uniquement pour les parcelles avec Irrigation Advisor actif
       </div>`:"",j=l.length>os?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${u} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <label style="display:flex;align-items:center;gap:8px;padding:4px 0 8px;cursor:pointer;font-size:13px;color:#1c1c1e">
      <input type="checkbox" id="bh-advisor-cb" ${n?"checked":""} style="width:16px;height:16px;accent-color:#ff9f0a">
      Irrigation Advisor${n?' <span style="font-size:11px;color:#ff9f0a;font-weight:600">✦</span>':""}
    </label>
    ${C}
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${h};gap:0 6px">
        ${x}
        ${y}
      </div>
    </div>
    ${j}
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
    </div>`}const as=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function qo(e,i,t,n){Object.fromEntries(ye.map(m=>[m.id,m]));const o=[...e].sort((m,v)=>m.name.localeCompare(v.name,"fr")).map(m=>`<option value="p-${m.id}">${as(It(m))}</option>`).join(""),a=i.map(m=>`<option value="s-${m.id}">${as(jt(m,e))}</option>`).join(""),s=`
    <optgroup label="Parcelles">${o}</optgroup>
    ${a?`<optgroup label="Capteurs">${a}</optgroup>`:""}`,l=(m,v)=>{const c=`${m.dayLabel.charAt(0).toUpperCase()+m.dayLabel.slice(1)} · ${m.dateStr}`;return`
    <div class="m-prev-card" data-day="${v}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${m.icon}" style="color:${m.color};font-size:26px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${c}</span>
          <span class="m-prev-card-cond">${m.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-tbl">
        <div class="m-prev-tbl-cell">
          <i class="bi bi-cloud-rain" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${m.pluie}</span>
          <span class="m-prev-tbl-unit">mm</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-thermometer-half" style="color:#E05252"></i>
          <span class="m-prev-tbl-val">${m.tMin}–${m.tMax}</span>
          <span class="m-prev-tbl-unit">°C</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-droplet" style="color:#2E75B6"></i>
          <span class="m-prev-tbl-val">${m.humMoy}</span>
          <span class="m-prev-tbl-unit">%</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-wind" style="color:#636366"></i>
          <span class="m-prev-tbl-val">${m.ventMoy}/<em>${m.ventRafales}</em></span>
          <span class="m-prev-tbl-unit">km/h</span>
        </div>
        <div class="m-prev-tbl-cell">
          <i class="bi bi-moisture" style="color:#24B066"></i>
          <span class="m-prev-tbl-val">${m.etp}</span>
          <span class="m-prev-tbl-unit">ETP</span>
        </div>
      </div>
    </div>`},p=t.slice(0,3).map(l).join(""),d=t.slice(3).map(l).join("");return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select"><option value="addr" selected>Adresse de mon exploitation</option>${s}</select>
    <div class="m-prev-cards">
      ${p}
      <div class="m-prev-extra" style="display:none">${d}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Ke=[{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:null},{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],Qs=new Set(Ke.flatMap(e=>e.needsModels||[]));function li(e){if(!e)return Ke;if(e.startsWith("s-")){const t=ce.find(n=>n.id===+e.slice(2));return t?Ke.filter(n=>n.needsModels===null||n.needsModels.includes(t.model)):Ke}const i=new Set(ce.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Ke.filter(t=>t.needsModels===null||t.needsModels.some(n=>i.has(n)))}const ls={etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#0B3A64"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function Po(){return je.length?je.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
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
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function rs(e,i,t){if(!e||!i)return null;const n=Ke.find(s=>s.id===t)||Ke[0],o=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),a=e.split("").reduce((s,l)=>s+l.charCodeAt(0),0)+o;return+(n.base+a%(n.amp*10)/10).toFixed(1)}function cs(e,i){const t=je.length>=Ot,n=`${new Date().getFullYear()}-01-01`,o=i.filter(p=>p.parcelIds.length>0&&Qs.has(p.model)),a=[...e].sort((p,d)=>p.name.localeCompare(d.name,"fr")).map(p=>`<option value="p-${p.id}">${It(p)}</option>`).join(""),s=o.map(p=>`<option value="s-${p.id}">${jt(p,e)}</option>`).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${je.length?Po():'<div class="m-wf-empty">Ajoutez ici les cumuls que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${je.length?"16px":"0"}"></div>
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
    </div>`}`}function zo(e){const i=e.id,t=new Date;let n,o;i%5===3?(n=0,o=(t.getHours()+2+i%3*3)%24):(n=(i*2+1)%6+1,o=6+i%5*2);const a=2+i%3,s=new Date(t);s.setDate(s.getDate()+n);const l=n===0?"Aujourd'hui":s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),p=n*1440+o*60-(t.getHours()*60+t.getMinutes());return{winDateStr:l,winHour:o,winDur:a,minutesFromNow:p}}const Do="#1a9e40";function Fo(e){const t=e.filter(o=>o.crop).map(o=>({p:o,d:zo(o)})).filter(({d:o})=>o.minutesFromNow>=0&&o.minutesFromNow<=1440).sort((o,a)=>o.d.minutesFromNow-a.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:o,d:a})=>{const s=String(a.winHour).padStart(2,"0"),l=String((a.winHour+a.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${o.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${o.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${Do};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const en="weenat-m-traitements";function kt(){try{return JSON.parse(localStorage.getItem(en))||[]}catch{return[]}}function qi(e){localStorage.setItem(en,JSON.stringify(e))}function _o(e,i){let t=new Set;const n=[],o=new Date().toISOString().split("T")[0];function a(){return Kt(n,e,t)}function s(d){const u=t.size,m=d.querySelector(".irr-summary"),v=d.querySelector(".irr-save-btn");!m||!v||(m.textContent=u===0?"":`${u} parcelle${u>1?"s":""}`,v.disabled=u===0)}function l(d){var u;(u=d.querySelector("#irr-sel-all"))==null||u.addEventListener("click",()=>{const m=e.every(v=>t.has(v.id));e.forEach(v=>m?t.delete(v.id):t.add(v.id)),d.querySelector("#trait-sel-list").innerHTML=a(),l(d),s(d)}),d.querySelectorAll(".irr-group-card").forEach(m=>{m.addEventListener("click",()=>{const v=m.dataset.gids.split(",").map(Number),c=v.every(r=>t.has(r));v.forEach(r=>c?t.delete(r):t.add(r)),d.querySelector("#trait-sel-list").innerHTML=a(),l(d),s(d)})}),d.querySelectorAll(".irr-plot-row").forEach(m=>{m.addEventListener("click",()=>{const v=+m.dataset.pid;t.has(v)?t.delete(v):t.add(v),d.querySelector("#trait-sel-list").innerHTML=a(),l(d),s(d)})})}const p=lt(xe(`
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
  `));l(p),s(p),p.querySelector("#trait-back").addEventListener("click",fe),p.querySelector(".irr-save-btn").addEventListener("click",()=>{const d=p.querySelector("#trait-date").value||o,u=p.querySelector("#trait-produit").value.trim()||"—",m=p.querySelector("#trait-dose").value.trim()||"—",v=kt();v.unshift({id:Date.now(),date:d,produit:u,dose:m,plotIds:[...t]}),qi(v),fe(),i("Traitement enregistré")})}function Bo(e,i,t){const n=i==="adherent"?Gs.adherent:null,o=n!==null?le.filter(d=>d.orgId===n):le;let a=null;const s=xe(`
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
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",fe);const l=d=>{const[u,m,v]=d.split("-");return`${v}/${m}/${u}`};function p(){const d=s.querySelector("#trait-cal-content");let u=kt();if(a!==null&&(u=u.filter(m=>(m.plotIds||[]).includes(a))),!u.length){d.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}d.innerHTML=u.map(m=>{const v=(m.plotIds||[]).map(c=>{var r;return(r=e.find(b=>b.id===c))==null?void 0:r.name}).filter(Boolean);return`
        <div class="m-trait-cal-card" data-id="${m.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${l(m.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${v.length} parcelle${v.length>1?"s":""}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${m.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${m.dose}</div>
          ${v.length?`<div style="font-size:11px;color:#8e8e93;margin-top:6px">${v.join(", ")}</div>`:""}
        </div>`}).join(""),d.querySelectorAll(".m-trait-cal-card").forEach(m=>{m.addEventListener("click",()=>{const v=+m.dataset.id,r=kt().find(h=>h.id===v);if(!r)return;const b=(r.plotIds||[]).map(h=>{var x;return(x=e.find(C=>C.id===h))==null?void 0:x.name}).filter(Boolean),f=document.createElement("div");f.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${l(r.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${r.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${r.dose}</div>
            ${b.length?`<div style="font-size:12px;color:#8e8e93">${b.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const y=Ye({title:"Traitement",body:f,doneLabel:"Fermer",onDone:()=>{}});f.querySelector("#tcal-del").addEventListener("click",()=>{const h=kt().filter(x=>x.id!==v);qi(h),y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{y.remove(),p()},280),t("Traitement supprimé")}),f.querySelector("#tcal-edit").addEventListener("click",()=>{y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>y.remove(),280),Ho(r,e,t,p)})})})}s.querySelector("#trait-filter").addEventListener("change",d=>{a=d.target.value?+d.target.value:null,p()}),p()}function Ho(e,i,t,n){const o=document.createElement("div");o.innerHTML=`
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
    </div>`,Ye({title:"Modifier le traitement",body:o,doneLabel:"Enregistrer",onDone:()=>{const a=kt(),s=a.findIndex(l=>l.id===e.id);s!==-1&&(a[s].date=o.querySelector("#tedit-date").value||e.date,a[s].produit=o.querySelector("#tedit-produit").value.trim()||e.produit,a[s].dose=o.querySelector("#tedit-dose").value.trim()||e.dose,qi(a)),t("Traitement modifié"),n()}})}const Ro={"capteur déplacé":"M12 2c-2.117 0-3.98.741-5.588 2.225C4.803 5.708 4 7.699 4 10.199c0 1.6.6 3.322 1.8 5.164C7 17.205 8.818 19.2 11.25 21.35a1.2 1.2 0 0 0 .75.275 1.2 1.2 0 0 0 .75-.275c2.433-2.15 4.25-4.145 5.45-5.987C19.4 13.521 20 11.8 20 10.2c0-2.5-.803-4.491-2.412-5.974C15.98 2.74 14.117 2 12 2zm0 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 7v3a.969.969 0 0 1-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287A.966.966 0 0 1 11 10V7c0-.283.095-.52.287-.713A.969.969 0 0 1 12 6zm0 7a.97.97 0 0 1 .713.287c.191.192.287.43.287.713s-.096.522-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287c-.192-.191-.287-.43-.287-.713s.095-.52.287-.713A.969.969 0 0 1 12 13z","émissions interrompues":"M19.075 21.9 8.125 10.975c-.033.167-.063.333-.087.5S8 11.817 8 12c0 .383.046.746.138 1.087.091.342.229.663.412.963.15.25.217.517.2.8a1.04 1.04 0 0 1-.3.7c-.2.2-.438.292-.713.275s-.487-.133-.637-.35c-.35-.5-.62-1.042-.813-1.625A5.889 5.889 0 0 1 6 12a5.985 5.985 0 0 1 .575-2.575L5.1 7.95c-.35.6-.62 1.238-.813 1.913A7.79 7.79 0 0 0 4 12a7.855 7.855 0 0 0 1.675 4.9c.183.233.27.487.262.762-.008.275-.112.513-.312.713a.916.916 0 0 1-1.375-.05c-.7-.867-1.25-1.837-1.65-2.913S2 13.2 2 12c0-1.033.146-2.008.437-2.925A10.71 10.71 0 0 1 3.65 6.5L2.075 4.925a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725a.948.948 0 0 1 .7-.275c.283 0 .525.092.725.275l16.975 17c.183.183.275.417.275.7s-.092.517-.275.7c-.2.2-.442.3-.725.3s-.517-.1-.7-.3zm1.275-4.4-1.45-1.45c.35-.6.62-1.238.813-1.913S20 12.75 20 12a7.854 7.854 0 0 0-1.675-4.9c-.183-.233-.27-.487-.263-.762s.113-.513.313-.713a.916.916 0 0 1 1.375.05c.7.867 1.25 1.833 1.65 2.9.4 1.067.6 2.208.6 3.425 0 1.017-.146 1.988-.438 2.913S20.867 16.7 20.35 17.5zm-2.925-2.925-1.55-1.55c.033-.167.062-.333.087-.5S16 12.183 16 12c0-.383-.046-.746-.138-1.088s-.229-.662-.412-.962a1.367 1.367 0 0 1-.2-.8 1.04 1.04 0 0 1 .3-.7.93.93 0 0 1 .712-.287.76.76 0 0 1 .638.337c.35.483.62 1.025.813 1.625.191.6.287 1.225.287 1.875a5.985 5.985 0 0 1-.575 2.575z","capteur couché":"M6 5a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h7a1 1 0 1 0 0-2h-7V7a2 2 0 0 0-2-2H6zm3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 16v2h20v-2H2z","cuillère bloquée":"M17.615 3.25c-.268 0-.537.103-.742.309L3.508 16.922a1.05 1.05 0 0 0 0 1.486l.031.027-.002.002.05.041c.459.438 1.055.718 1.733.813.678.094 1.416 0 2.139-.274a5.793 5.793 0 0 0 2.018-1.322 5.802 5.802 0 0 0 1.322-2.02c.411-1.087.411-2.189 0-3.074l7.558-7.558a1.047 1.047 0 0 0 0-1.485 1.046 1.046 0 0 0-.742-.308zm-1.037 8.416a.473.473 0 0 0-.35.137l-1.05 1.05a.435.435 0 0 0-.106.163.555.555 0 0 0-.031.187c0 .067.01.13.031.188.02.058.055.112.105.162l1.051 1.05a.473.473 0 0 0 .35.137.472.472 0 0 0 .488-.488.474.474 0 0 0-.138-.35l-.2-.199h.037c.834 0 1.542.292 2.125.875.584.584.875 1.292.875 2.125 0 .675-.198 1.274-.593 1.799a3.032 3.032 0 0 1-1.532 1.088.527.527 0 0 0-.267.187.465.465 0 0 0-.108.287c0 .167.06.3.176.4.117.1.254.13.412.089a3.912 3.912 0 0 0 2.1-1.426 3.882 3.882 0 0 0 .812-2.424c0-1.116-.387-2.063-1.162-2.838-.775-.775-1.72-1.162-2.838-1.162h-.037l.2-.201a.474.474 0 0 0 .138-.35.473.473 0 0 0-.488-.486zm-2.563 2.344a.462.462 0 0 0-.337.156c-.292.358-.516.75-.674 1.18-.159.429-.239.882-.239 1.357 0 .917.271 1.728.813 2.432a3.922 3.922 0 0 0 2.1 1.418.442.442 0 0 0 .414-.082.479.479 0 0 0 .173-.393.532.532 0 0 0-.375-.488 2.946 2.946 0 0 1-1.53-1.08 2.939 2.939 0 0 1-.595-1.807c0-.341.054-.666.163-.974.108-.309.262-.594.462-.852a.565.565 0 0 0 .131-.375.477.477 0 0 0-.142-.336.48.48 0 0 0-.364-.156z"},ds=new Set(["P+","PT","P"]);function It(e){return[e.name,e.crop].filter(Boolean).join(" — ")}function jt(e,i){var a,s;const t=Object.fromEntries(ye.map(l=>[l.id,l])),n=tn[e.model]||e.model,o=((a=(e.parcelIds||[]).map(l=>i.find(p=>p.id===l)).filter(Boolean).find(l=>l.ville))==null?void 0:a.ville)||((s=t[e.orgId])==null?void 0:s.ville)||"";return[n,e.serial,o].filter(Boolean).join(" — ")}const tn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function Oo(e,i){const t=Object.fromEntries(ye.map(o=>[o.id,o])),n=i.filter(o=>o.event?(Array.isArray(o.event)?o.event:[o.event]).filter(l=>l!=="cuillère bloquée"||ds.has(o.model)).length>0:!1);return n.length?`<div class="m-w-list">${n.map(o=>{var u;const a=e.find(m=>(o.parcelIds||[]).includes(m.id)),s=(a==null?void 0:a.ville)||((u=t[o.orgId])==null?void 0:u.ville)||"",p=(Array.isArray(o.event)?o.event:[o.event]).filter(m=>m!=="cuillère bloquée"||ds.has(o.model)).map(m=>{const v=Ro[m]||"";return`<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:#ff3b30;border-radius:6px;flex-shrink:0" title="${m}"><svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="${v}"/></svg></span>`}).join(""),d=tn[o.model]||o.model;return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${o.id}">
      <div style="flex:1;min-width:0">
        <div class="m-w-row-name">${d}</div>
        <div style="font-size:12px;color:#636366;margin-top:1px">${o.model} — ${o.serial}</div>
        ${s?`<div style="font-size:11px;color:#8e8e93;margin-top:1px">${s}</div>`:""}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;width:61px;justify-content:flex-end">${p}</div>
        <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const sn={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},No={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Vo(e){const i=e.id,t=sn[e.crop]||No,n=i%t.stages.length,o=(i*2+5)%18+4,a=new Date("2026-04-18");a.setDate(a.getDate()+o);const s=a.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[n],nextStage:t.nextStages[n],variety:t.varieties[i%t.varieties.length],nextDateStr:s,daysToNext:o}}function Jo(e){const i=e.filter(o=>o.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const o of i)t[o.crop]||(t[o.crop]=[]),t[o.crop].push(o);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([o,a])=>{const s=a.map(l=>{const p=!!sn[l.crop],d=p?Vo(l):null,u=p&&d.variety!=="—"?d.variety:"",m=p?d.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${l.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${l.name}</div>
          ${u?`<div class="m-w-row-sub">${u}</div>`:""}
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
    </details>`}).join("")}`}const nn="weenat-m-notes";function tt(){try{return JSON.parse(localStorage.getItem(nn))||[]}catch{return[]}}function ri(e){localStorage.setItem(nn,JSON.stringify(e))}function us(e){const i=tt(),t=y=>{const[h,x,C]=y.split("-");return`${C}/${x}/${h}`},n=y=>y.length>70?y.slice(0,70)+"…":y,o=(y,h)=>{const x=y.text.length>70,C=(y.imageIds||[]).length,j=C>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${C} photo${C>1?"s":""}</span>`:"",E=y.linkedType?`<span style="font-size:10px;background:${y.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${y.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${y.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${y.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${h}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${x||C>0||y.linkedType?"pointer":"default"}">
        <button class="m-note-del m-del-btn" data-idx="${h}" style="position:absolute;top:8px;right:8px">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span>${t(y.date)}${y.time?" · "+y.time:""}</span>
          ${y.auteur?`<span style="color:#636366;font-weight:500">${y.auteur}</span>`:""}
          ${y.role?`<span style="font-size:10px;background:${y.role==="conseiller"?"#eef4ff":"#f2f2f7"};color:${y.role==="conseiller"?"#3a7bd5":"#636366"};border-radius:4px;padding:1px 5px;font-weight:500">${y.role==="conseiller"?"Conseiller":"Membre"}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${n(y.text)}</div>
        ${E||j?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${E}${j}</div>`:""}
      </div>`},a=i.slice(0,5),s=a.length?a.map((y,h)=>o(y,h)).join(""):"",l=new Date,p=l.toISOString().slice(0,10),d=`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`,u=ye.find(y=>y.id===(e==="admin"?100:1)),m=u?`${u.prenomProprietaire} ${u.nomProprietaire}`:"",v=u==null?void 0:u.id,c=e==="adherent"?le.filter(y=>y.orgId===v):le,r=e==="adherent"?ce.filter(y=>y.parcelIds.some(h=>c.some(x=>x.id===h))):ce,b=[...c].sort((y,h)=>y.name.localeCompare(h.name,"fr")).map(y=>`<option value="p-${y.id}">${It(y)}</option>`).join(""),f=r.map(y=>`<option value="s-${y.id}">${jt(y,c)}</option>`).join("");return`
    ${s?`<div id="notes-list" style="margin-bottom:12px">${s}</div>`:""}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:8px">
      <select id="notes-link" class="m-sheet-input">
        <option value="">— Sans lien —</option>
        <optgroup label="Parcelles">${b}</optgroup>
        <optgroup label="Capteurs">${f}</optgroup>
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
    <button id="notes-view" class="m-btn m-btn--secondary">Voir les notes${i.length?` (${i.length})`:""}</button>`}function Wo(e){const i=le.map(o=>o.orgId).filter((o,a,s)=>s.indexOf(o)===a&&o!==100).length,t=ce.length,n=le.length;return`
    <div class="m-reseau-name">${Ge.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${n}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${Ge.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${Ge.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${Ge.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${Ge.siege.adresse}, ${Ge.siege.codePostal} ${Ge.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function Go(){return`
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
    </a>`}const ps=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Uo(){var d;const e=document.getElementById("phone-screen");(d=document.querySelector(".m-sheet-overlay"))==null||d.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),n=i.querySelector("#chat-input"),o=i.querySelector("#chat-send"),a=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",a),i.addEventListener("click",u=>{u.target===i&&a()});function s(u,m){const v=document.createElement("div");v.className=`m-chat-msg m-chat-msg--${m}`,v.innerHTML=`<div class="m-chat-bubble">${u}</div>`,t.appendChild(v),t.scrollTop=t.scrollHeight}function l(){const u=document.createElement("div");return u.className="m-chat-msg m-chat-msg--bot m-chat-typing",u.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(u),t.scrollTop=t.scrollHeight,u}function p(){const u=n.value.trim();if(!u)return;s(u,"user"),n.value="",o.disabled=!0;const m=l();setTimeout(()=>{m.remove();const v=ps[Math.floor(Math.random()*ps.length)];s(v,"bot"),o.disabled=!1,n.focus()},1200+Math.random()*800)}o.addEventListener("click",p),n.addEventListener("keydown",u=>{u.key==="Enter"&&p()}),setTimeout(()=>n.focus(),350)}function Yo(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const n=Gs[i]||1,o=i==="new"||i==="new-adherent"?[]:n===100?le:le.filter(S=>S.orgId===n),a=new Set(o.map(S=>S.id)),s=i==="new"||i==="new-adherent"?[]:ce.filter(S=>S.parcelIds.some($=>a.has($)));let l=es(),p=null,d=null;function u(){return i!=="admin"?o:p===null?le:le.filter(S=>S.orgId===p)}function m(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${ye.filter($=>$.id!==100).sort(($,k)=>$.name.localeCompare(k.name)).map($=>`<option value="${$.id}">${$.name}</option>`).join("")}
    </select>`}const v=mt(),c=new Set(["mon_reseau","support"]),r=new Set(v.collapsed??Le.map(S=>S.id).filter(S=>!c.has(S)));function b(){wt({catalog:Le.map(S=>({id:S.id,active:S.active})),collapsed:[...r],mesuresList:Ie,cumulsList:je})}function f(){return`
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
      </div>`}function y(){return`
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
      </div>`}function h(){const S=window.L;S&&setTimeout(()=>{const $=t.querySelector("#radar-map");if(!$||d)return;const k=o[0]?[o[0].lat,o[0].lng]:[47.5,-1.5];d=S.map($,{zoomControl:!0,attributionControl:!1,tap:!1}).setView(k,7),S.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:14}).addTo(d);const g=t.querySelector("#radar-slider"),T=t.querySelector("#radar-time-lbl"),P=t.querySelector("#radar-play-btn"),L=t.querySelector("#radar-loading");let z=[],D=0,M=0,V=null,ie=!1,Q=null;function J(se){if(!z.length)return;V&&d.removeLayer(V);const pe=z[se];V=S.tileLayer(`https://tilecache.rainviewer.com${pe.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:.65,zIndex:10}).addTo(d);const Ee=new Date(pe.time*1e3);T.textContent=Ee.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),T.style.color=se>=D?"#007aff":"#8e8e93",g.value=se}g.addEventListener("input",()=>{M=+g.value,J(M)}),P.addEventListener("click",()=>{ie=!ie,P.innerHTML=ie?'<i class="bi bi-pause-fill"></i>':'<i class="bi bi-play-fill"></i>',ie?Q=setInterval(()=>{M=(M+1)%z.length,J(M)},500):clearInterval(Q)}),fetch("https://api.rainviewer.com/public/weather-maps.json").then(se=>se.json()).then(se=>{var Se,De;L==null||L.remove();const pe=((Se=se.radar)==null?void 0:Se.past)||[],Ee=((De=se.radar)==null?void 0:De.nowcast)||[];z=[...pe,...Ee],D=pe.length,z.length&&(g.max=z.length-1,M=Math.max(0,D-1),J(M))}).catch(()=>{L&&(L.textContent="Radar indisponible")})},50)}function x(S,$){const k=S.fixed?"":`<button class="m-widget-menu" data-widget="${S.id}" type="button">•••</button>`,g=r.has(S.id);return`
      <div class="m-widget${g?" m-widget--collapsed":""}" data-widget="${S.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${S.id}">
          <div class="m-widget-icon-wrap" style="background:${S.color}20;color:${S.color}">
            <i class="bi ${S.icon}"></i>
          </div>
          <span class="m-widget-title">${S.title}</span>
          ${S.info?`<button class="m-widget-info" data-widget="${S.id}" type="button"><i class="bi bi-info-circle"></i></button>`:""}
          <i class="bi ${g?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${S.fixed?"0":"8px"}"></i>
          ${k}
        </div>
        <div class="m-widget-bd" style="${g?"display:none":""}">${$}</div>
      </div>`}function C(){d==null||d.remove(),d=null,l=es();const S=new Set(["previsions","support"]),$=Le.filter(g=>g.active&&!g.fixed&&(i!=="new"||S.has(g.id))),k=Le.filter(g=>g.active&&g.fixed&&(i!=="new"||S.has(g.id)));t.innerHTML=`
      ${i==="new"?f():'<button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>'}
      ${[...$,...k].map(g=>{let T="";return g.id==="bilan_hydrique"?T=m()+bt(u()):g.id==="previsions"?T=qo(o,s,l):g.id==="cumuls"?T=cs(o,s):g.id==="temps_reel"?T=ns(o,s):g.id==="traitements"?T=Fo(o):g.id==="evenements"?T=Oo(o,s):g.id==="cultures"?T=Jo(o):g.id==="notes"?T=us(i):g.id==="radar_pluie"?T=y():g.id==="irrelis"?T=jo(o):g.id==="mon_reseau"?T=Wo(i):g.id==="support"&&(T=Go()),x(g,T)}).join("")}
      <div style="height:24px"></div>`,F(),r.has("radar_pluie")||h()}const j='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function E(S,$,k=""){const g=S[$],T=`${g.dayLabel.charAt(0).toUpperCase()+g.dayLabel.slice(1)} · ${g.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${j}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${$===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px">
            <i class="bi ${g.icon}" style="color:${g.color};font-size:22px"></i>
            <div>
              <span class="m-d-name">${T}</span>
              ${k?`<div style="font-size:12px;color:#8e8e93;margin-top:1px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k}</div>`:""}
            </div>
          </div>
          <button class="m-day-nav" id="next-day" ${$>=S.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${g.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${g.tMin} / ${g.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${g.ventMoy}/${g.ventRafales}</strong></div>
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
            ${g.hours.map((P,L)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${L<g.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${P.label}</span>
                <i class="bi ${P.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${P.pluie>0?`${P.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${P.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${P.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${P.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function w(S,$,k,g=""){var T,P;S.querySelector(".m-detail-back").addEventListener("click",fe),(T=S.querySelector("#prev-day"))==null||T.addEventListener("click",()=>{S.innerHTML=E($,k-1,g),w(S,$,k-1,g)}),(P=S.querySelector("#next-day"))==null||P.addEventListener("click",()=>{S.innerHTML=E($,k+1,g),w(S,$,k+1,g)})}function _(S,$,k=""){const g=xe(E(S,$,k));w(g,S,$,k)}function F(){var pe,Ee,Se,De,Fe,rt,_e;(pe=e.querySelector(".m-navbar-action"))==null||pe.addEventListener("click",I),(Ee=t.querySelector("#dash-add-widget-btn"))==null||Ee.addEventListener("click",q),(Se=t.querySelector('[data-action="add-parcel"]'))==null||Se.addEventListener("click",()=>so(()=>C())),(De=t.querySelector('[data-action="add-sensor"]'))==null||De.addEventListener("click",()=>no(()=>C())),t.querySelectorAll(".m-widget-info").forEach(H=>{H.addEventListener("click",Y=>{Y.stopPropagation();const W=Le.find(ee=>ee.id===H.dataset.widget);W&&wo(W.title,W.info,W.gif)})}),t.querySelectorAll(".m-widget-hd--toggle").forEach(H=>{H.addEventListener("click",Y=>{if(Y.target.closest(".m-widget-menu")||Y.target.closest(".m-widget-info"))return;const W=H.dataset.collapse;r.has(W)?r.delete(W):r.add(W),b(),C()})}),(Fe=t.querySelector("#trait-btn-saisir"))==null||Fe.addEventListener("click",()=>{_o(o,Ue)}),(rt=t.querySelector("#trait-btn-voir"))==null||rt.addEventListener("click",()=>{Bo(o,i,Ue)}),t.querySelectorAll(".m-trait-card").forEach(H=>{H.addEventListener("click",()=>{const Y=le.find(W=>W.id===+H.dataset.plotId);if(Y){const W=ce.filter(ee=>ee.parcelIds.includes(Y.id)).map(ee=>ee.id);ge(()=>Promise.resolve().then(()=>nt),void 0).then(ee=>ee.initParcelDetail(Y,W,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(H=>{H.addEventListener("click",()=>{const Y=s.find(W=>W.id===+H.dataset.sensorId);Y&&ge(()=>Promise.resolve().then(()=>Mi),void 0).then(W=>W.initSensorDetail(Y,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(H=>{H.addEventListener("click",()=>{const Y=le.find(W=>W.id===+H.dataset.plotId);if(Y){const W=ce.filter(ee=>ee.parcelIds.includes(Y.id)).map(ee=>ee.id);ge(()=>Promise.resolve().then(()=>nt),void 0).then(ee=>ee.initParcelDetail(Y,W,"params","Tableau de bord"))}})});function S(){t.querySelectorAll(".m-bh-plot-link").forEach(H=>{H.addEventListener("click",()=>{const Y=le.find(W=>W.id===+H.dataset.plotId);if(Y){const W=ce.filter(ee=>ee.parcelIds.includes(Y.id)).map(ee=>ee.id);ge(()=>Promise.resolve().then(()=>nt),void 0).then(ee=>{ee.initParcelDetail(Y,W,"widgets","Tableau de bord"),setTimeout(()=>{var $e;($e=document.querySelector('[data-widget-id="irrigations"]'))==null||$e.scrollIntoView({behavior:"smooth",block:"start"})},150)})}})})}function $(){var H,Y,W;(H=t.querySelector("#bh-btn-calendar"))==null||H.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(ee=>ee.openCalendar(o,""))}),(Y=t.querySelector("#bh-btn-irrigation"))==null||Y.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(ee=>ee.openIrrigationSaisie(o,Ue))}),(W=t.querySelector("#bh-btn-strategie"))==null||W.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(ee=>ee.openIrrigationStrategie(o,Ue))})}function k(){const H=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');H&&(H.innerHTML=m()+bt(u()),S(),$(),g(),T(),i==="admin"&&P())}function g(){const H=t.querySelector("#bh-expand");H&&H.addEventListener("click",()=>{const Y=H.dataset.expanded==="true",W=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');W&&(W.innerHTML=m()+bt(u(),!Y),S(),$(),g(),T(),i==="admin"&&P())})}function T(){const H=t.querySelector("#bh-advisor-cb");H&&H.addEventListener("change",()=>{wt({irrigAdvisor:H.checked}),k()})}function P(){const H=t.querySelector("#bh-org-select");H&&(H.value=p===null?"all":String(p),H.addEventListener("change",()=>{p=H.value==="all"?null:+H.value,k()}))}S(),$(),g(),T(),i==="admin"&&P(),t.querySelectorAll('[data-widget="irrelis"] .m-il-row').forEach(H=>{H.addEventListener("click",()=>{const Y=le.find(W=>W.id===+H.dataset.ilPlot);Y&&ge(()=>Promise.resolve().then(()=>Ws),void 0).then(W=>W.openIrrelisDetail(Y))})});function L(){const H=t.querySelector('[data-widget="cumuls"] .m-widget-bd');H&&(H.innerHTML=cs(o,s),z())}Vt=L;function z(){var N,G,U,O;const H=()=>{var X;const B=(X=t.querySelector("#cumuls-metric"))==null?void 0:X.value,R=t.querySelector("#cumuls-thresholds");R&&(B==="hf"?R.innerHTML=`
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`:B==="dj"?R.innerHTML=`
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`:R.innerHTML="")},Y=()=>{var K;const B=t.querySelector("#cumuls-metric"),R=(K=t.querySelector("#cumuls-subject"))==null?void 0:K.value;if(!B)return;const X=li(R);B.innerHTML='<option value="">— Métrique —</option>'+X.map(ae=>`<option value="${ae.id}">${ae.label}</option>`).join(""),B.disabled=!R||!X.length,H(),W()},W=()=>{var be,re,de;const B=t.querySelector("#cumuls-create"),R=t.querySelector("#cumuls-date-err"),X=(be=t.querySelector("#cumuls-subject"))==null?void 0:be.value,K=(re=t.querySelector("#cumuls-from"))==null?void 0:re.value,ae=(de=t.querySelector("#cumuls-metric"))==null?void 0:de.value,oe=K?(Date.now()-new Date(K))/864e5>365:!1;R&&(R.style.display=oe?"":"none"),B&&(B.disabled=!X||!K||!ae||oe)};(N=t.querySelector("#cumuls-subject"))==null||N.addEventListener("change",()=>{Y(),W()}),(G=t.querySelector("#cumuls-from"))==null||G.addEventListener("change",W),(U=t.querySelector("#cumuls-metric"))==null||U.addEventListener("change",()=>{H(),W()}),(O=t.querySelector("#cumuls-create"))==null||O.addEventListener("click",()=>{var re,de,he,ke,Ce,we;const B=t.querySelector("#cumuls-subject"),R=B==null?void 0:B.value,X=(re=t.querySelector("#cumuls-from"))==null?void 0:re.value,K=(de=t.querySelector("#cumuls-metric"))==null?void 0:de.value;if(!R||!X||!K)return;const ae=Ke.find(te=>te.id===K),oe=ls[K]||{icon:"bi-bar-chart-fill",color:"#636366"},be=K==="hf"?{cold:+(((he=t.querySelector("#cumuls-th-cold"))==null?void 0:he.value)??7.2)}:K==="dj"?{low:+(((ke=t.querySelector("#cumuls-th-low"))==null?void 0:ke.value)??0),high:+(((Ce=t.querySelector("#cumuls-th-high"))==null?void 0:Ce.value)??18)}:null;je.push({metricId:K,metricLabel:(ae==null?void 0:ae.label)||K,unit:(ae==null?void 0:ae.unit)||"",icon:oe.icon,color:oe.color,subjectKey:R,subjectLabel:(((we=B.options[B.selectedIndex])==null?void 0:we.text)||R).trim(),fromDate:X,value:String(rs(R,X,K)??"—"),thresholds:be}),b(),L()}),t.querySelectorAll(".m-cumuls-del").forEach(B=>{B.addEventListener("click",()=>{je.splice(+B.dataset.cidx,1),b(),L()})}),t.querySelectorAll(".m-cumuls-edit").forEach(B=>{B.addEventListener("click",()=>$e(+B.dataset.cidx))});function ee(B,R={}){return B==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${R.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:B==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${R.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${R.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function $e(B){const R=je[B];if(!R)return;const X=s.filter(de=>de.parcelIds.length>0&&Qs.has(de.model)),K=[...o].sort((de,he)=>de.name.localeCompare(he.name,"fr")).map(de=>`<option value="p-${de.id}"${R.subjectKey===`p-${de.id}`?" selected":""}>${It(de)}</option>`).join(""),ae=X.map(de=>`<option value="s-${de.id}"${R.subjectKey===`s-${de.id}`?" selected":""}>${jt(de,o)}</option>`).join(""),be=li(R.subjectKey).map(de=>`<option value="${de.id}"${R.metricId===de.id?" selected":""}>${de.label}</option>`).join(""),re=document.createElement("div");re.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",re.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${K}</optgroup>
            ${ae?`<optgroup label="Capteurs">${ae}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${be}
          </select>
          <div id="cedit-thresholds">${ee(R.metricId,R.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${R.fromDate}">
          </div>`,re.querySelector("#cedit-subject").addEventListener("change",()=>{const de=re.querySelector("#cedit-subject").value,he=re.querySelector("#cedit-metric"),ke=li(de);he.innerHTML='<option value="">— Métrique —</option>'+ke.map(Ce=>`<option value="${Ce.id}">${Ce.label}</option>`).join(""),re.querySelector("#cedit-thresholds").innerHTML=""}),re.querySelector("#cedit-metric").addEventListener("change",()=>{re.querySelector("#cedit-thresholds").innerHTML=ee(re.querySelector("#cedit-metric").value)}),Ye({title:"Modifier le cumul",body:re,doneLabel:"Enregistrer",onDone:()=>{var Pe,Be,ft,ct;const de=re.querySelector("#cedit-subject").value||R.subjectKey,he=re.querySelector("#cedit-metric").value||R.metricId,ke=re.querySelector("#cedit-from").value||R.fromDate;if(!de||!he||!ke)return;if((Date.now()-new Date(ke))/864e5>365){Ue("Date trop ancienne (max 365 jours)");return}const we=Ke.find(zt=>zt.id===he),te=ls[he]||{icon:"bi-bar-chart-fill",color:"#636366"},ne=re.querySelector("#cedit-subject"),ve=he==="hf"?{cold:+(((Pe=re.querySelector("#cedit-th-cold"))==null?void 0:Pe.value)??7.2)}:he==="dj"?{low:+(((Be=re.querySelector("#cedit-th-low"))==null?void 0:Be.value)??0),high:+(((ft=re.querySelector("#cedit-th-high"))==null?void 0:ft.value)??18)}:null;je[B]={...R,metricId:he,metricLabel:(we==null?void 0:we.label)||he,unit:(we==null?void 0:we.unit)||"",icon:te.icon,color:te.color,subjectKey:de,subjectLabel:(((ct=ne.options[ne.selectedIndex])==null?void 0:ct.text)||de).trim(),fromDate:ke,value:String(rs(de,ke,he)??"—"),thresholds:ve},b(),L()}})}}z(),(_e=t.querySelector("#open-chat-btn"))==null||_e.addEventListener("click",Uo);function D(){const H=t.querySelector('[data-widget="notes"] .m-widget-bd');H&&(H.innerHTML=us(i),V())}let M=[];function V(){var N,G;M=[];const H=t.querySelector("#notes-img-input"),Y=t.querySelector("#notes-img-btn"),W=t.querySelector("#notes-previews"),ee=t.querySelector("#notes-img-error");H&&Y&&W&&window.setupImgUpload&&window.setupImgUpload(H,Y,W,ee,M),(N=t.querySelector("#notes-add"))==null||N.addEventListener("click",async()=>{var de,he,ke,Ce,we,te;const U=(de=t.querySelector("#notes-input"))==null?void 0:de.value.trim(),O=((he=t.querySelector("#notes-date"))==null?void 0:he.value)||new Date().toISOString().slice(0,10),B=((ke=t.querySelector("#notes-time"))==null?void 0:ke.value)||"",R=((Ce=t.querySelector("#notes-auteur"))==null?void 0:Ce.value)||"";if(!U)return;const X=((we=t.querySelector("#notes-link"))==null?void 0:we.value)||"";let K=null,ae=null,oe="";if(X.startsWith("p-"))K="parcel",ae=+X.slice(2),oe=((te=le.find(ne=>ne.id===ae))==null?void 0:te.name)||"";else if(X.startsWith("s-")){K="sensor",ae=+X.slice(2);const ne=ce.find(ve=>ve.id===ae);oe=ne?ne.serial:""}const be=[];if(M.length&&window.ImageStore)for(const ne of M){const ve=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(ve,ne),be.push(ve)}const re=tt();re.unshift({date:O,time:B,text:U,auteur:R,role:"membre",imageIds:be,linkedType:K,linkedId:ae,linkedName:oe}),ri(re),t.querySelector("#notes-input").value="",D()}),(G=t.querySelector("#notes-view"))==null||G.addEventListener("click",()=>{const U=X=>{const[K,ae,oe]=X.split("-");return`${oe}/${ae}/${K}`},O=X=>X.length>70?X.slice(0,70)+"…":X,B=document.createElement("div");function R(){const X=tt();if(!X.length){B.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}B.innerHTML=X.map((K,ae)=>{const oe=(K.imageIds||[]).length,be=K.linkedType?`<span style="font-size:10px;background:${K.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${K.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${K.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${K.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${ae}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del m-del-btn" data-idx="${ae}" style="position:absolute;top:8px;right:8px">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${U(K.date)}${K.time?" · "+K.time:""}</span>
                  ${K.auteur?`<span style="color:#636366;font-weight:500">${K.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${O(K.text)}</div>
                ${be||oe>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${be}${oe>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${oe} photo${oe>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),B.querySelectorAll(".m-note-del").forEach(K=>{K.addEventListener("click",async ae=>{var de;ae.stopPropagation();const oe=tt(),be=+K.dataset.idx,re=oe[be];(de=re==null?void 0:re.imageIds)!=null&&de.length&&window.ImageStore&&await window.ImageStore.remove(re.imageIds),oe.splice(be,1),ri(oe),R(),D()})}),B.querySelectorAll(".m-note-card").forEach(K=>{K.addEventListener("click",async()=>{const oe=tt()[+K.dataset.idx];if(!oe)return;const be=oe.linkedType?`<span style="font-size:11px;background:${oe.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${oe.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${oe.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${oe.linkedName||""}</span>`:"",re=document.createElement("div");if(re.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${U(oe.date)}${oe.time?" · "+oe.time:""}</span>
                  ${oe.auteur?`<span style="color:#636366;font-weight:500">${oe.auteur}</span>`:""}
                  ${be}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${oe.text}</div>
                ${(oe.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ye({title:"Note",body:re,doneLabel:"Fermer",onDone:()=>{}}),(oe.imageIds||[]).length&&window.ImageStore){const de=re.querySelector("#note-detail-photos");for(const he of oe.imageIds){const ke=await window.ImageStore.get(he);if(!ke)continue;const Ce=document.createElement("div");Ce.className="jrn-img-thumb-wrap";const we=document.createElement("img");we.className="jrn-img-thumb",we.src=ke,we.alt="",we.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(ke)}),Ce.appendChild(we),de.appendChild(Ce)}}})})}R(),Ye({title:"Notes",body:B,doneLabel:"Fermer",onDone:()=>{}})});const $e=U=>{const[O,B,R]=U.split("-");return`${R}/${B}/${O}`};t.querySelectorAll("#notes-list .m-note-del").forEach(U=>{U.addEventListener("click",async O=>{var K;O.stopPropagation();const B=tt(),R=+U.dataset.idx,X=B[R];(K=X==null?void 0:X.imageIds)!=null&&K.length&&window.ImageStore&&await window.ImageStore.remove(X.imageIds),B.splice(R,1),ri(B),D()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(U=>{U.addEventListener("click",async()=>{const B=tt()[+U.dataset.idx];if(!B)return;const R=B.linkedType?`<span style="font-size:11px;background:${B.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${B.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${B.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${B.linkedName||""}</span>`:"",X=document.createElement("div");if(X.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${$e(B.date)}${B.time?" · "+B.time:""}</span>
              ${B.auteur?`<span style="color:#636366;font-weight:500">${B.auteur}</span>`:""}
              ${R}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${B.text}</div>
            ${(B.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ye({title:"Note",body:X,doneLabel:"Fermer",onDone:()=>{}}),(B.imageIds||[]).length&&window.ImageStore){const K=X.querySelector("#note-detail-photos");for(const ae of B.imageIds){const oe=await window.ImageStore.get(ae);if(!oe)continue;const be=document.createElement("div");be.className="jrn-img-thumb-wrap";const re=document.createElement("img");re.className="jrn-img-thumb",re.src=oe,re.alt="",re.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(oe)}),be.appendChild(re),K.appendChild(be)}}})})}V();function ie(){t.querySelectorAll(".m-tr-chart-wrap").forEach(H=>{const Y=H.querySelector(".m-tr-cursor"),W=H.querySelector(".m-tr-tooltip");if(!W)return;const ee=JSON.parse(H.dataset.series||"[]"),$e=H.dataset.unit||"",N=ee.length,G=26,U=270;H.addEventListener("pointermove",O=>{const B=H.getBoundingClientRect(),R=Math.max(0,Math.min(((O.clientX-B.left)*(G+U)/B.width-G)/U,1)),X=ee[Math.round(R*(N-1))]??null;if(Y){const K=G+Math.round(R*U);Y.setAttribute("x1",K),Y.setAttribute("x2",K),Y.setAttribute("opacity","1")}W.style.display="",W.style.left=`${Math.max(0,Math.min(O.clientX-B.left-24,B.width-60))}px`,W.textContent=X!==null?`${(+X).toFixed(1)} ${$e}`:"—"}),H.addEventListener("pointerleave",()=>{W.style.display="none",Y==null||Y.setAttribute("opacity","0")})})}function Q(){const H=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');H&&(H.innerHTML=ns(o,s),J())}Nt=Q;function J(){var ee,$e,N,G,U;const H=()=>{var B,R;const O=t.querySelector("#msr-create");O&&(O.disabled=!((B=t.querySelector("#msr-subject"))!=null&&B.value)||!((R=t.querySelector("#msr-metric"))!=null&&R.value)||Ie.length>=St)},Y=()=>{var X;const O=t.querySelector("#msr-metric"),B=(X=t.querySelector("#msr-subject"))==null?void 0:X.value;if(!O)return;const R=Eo(B,s);O.innerHTML='<option value="">— Métrique —</option>'+R.map(K=>`<option value="${K}">${$i[K]}</option>`).join(""),O.disabled=!B||!R.length,H()},W=()=>{var R;const O=t.querySelector("#msr-step"),B=((R=t.querySelector("#msr-period"))==null?void 0:R.value)||"7d";O&&(O.innerHTML=Ks(B).map(X=>`<option value="${X.id}">${X.label}</option>`).join(""),H())};(ee=t.querySelector("#msr-subject"))==null||ee.addEventListener("change",()=>{Y(),H()}),($e=t.querySelector("#msr-period"))==null||$e.addEventListener("change",()=>{W(),H()}),(N=t.querySelector("#msr-metric"))==null||N.addEventListener("change",H),(G=t.querySelector("#msr-step"))==null||G.addEventListener("change",H),(U=t.querySelector("#msr-create"))==null||U.addEventListener("click",()=>{var re,de,he;const O=t.querySelector("#msr-subject"),B=t.querySelector("#msr-metric"),R=t.querySelector("#msr-period"),X=t.querySelector("#msr-step"),K=O==null?void 0:O.value,ae=B==null?void 0:B.value,oe=R==null?void 0:R.value,be=X==null?void 0:X.value;!K||!ae||!oe||!be||(Ie.push({subjectKey:K,subjectLabel:(((re=O.options[O.selectedIndex])==null?void 0:re.text)||K).trim(),metricId:ae,metricLabel:$i[ae]||ae,unit:So[ae]||"",period:oe,periodLabel:(((de=R.options[R.selectedIndex])==null?void 0:de.text)||oe).trim(),step:be,stepLabel:(((he=X.options[X.selectedIndex])==null?void 0:he.text)||be).trim(),color:Ys[ae]||is[Ie.length%is.length]}),b(),Q())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(O=>{O.addEventListener("click",()=>{Ie.splice(+O.dataset.idx,1),b(),Q()})}),t.querySelectorAll(".m-wf-view-data").forEach(O=>{O.addEventListener("click",()=>{const B=O.dataset.metricId||null;if(O.dataset.sensorId){const R=+O.dataset.sensorId,X=ce.find(K=>K.id===R);X&&ge(()=>import("./chart-fullscreen-B4TIeE90.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(K=>K.initChartFullscreen({sensor:X,metricId:B,backLabel:X.model+" "+X.serial}))}else if(O.dataset.parcelId){const R=+O.dataset.parcelId,X=o.find(ae=>ae.id===R),K=ce.filter(ae=>{var oe;return(oe=ae.parcelIds)==null?void 0:oe.includes(R)}).map(ae=>ae.id);X&&ge(()=>import("./chart-fullscreen-B4TIeE90.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(ae=>ae.initChartFullscreen({parcel:X,linkedSensorIds:K,metricId:B,backLabel:X.name}))}})}),ie()}J(),t.querySelectorAll(".m-prev-card").forEach(H=>{H.addEventListener("click",()=>{var W,ee;const Y=((ee=(W=t.querySelector(".m-prev-select"))==null?void 0:W.selectedOptions[0])==null?void 0:ee.text)||"";_(l,+H.dataset.day,Y)})});const se=t.querySelector(".m-prev-expand-btn");se&&se.addEventListener("click",()=>{var Y,W;const H=((W=(Y=t.querySelector(".m-prev-select"))==null?void 0:Y.selectedOptions[0])==null?void 0:W.text)||"";_(l,3,H)}),t.querySelectorAll(".m-widget-menu").forEach(H=>{H.addEventListener("click",Y=>{var U;Y.stopPropagation();const W=Le.find(O=>O.id===H.dataset.widget);if(!W)return;const ee=document.createElement("div"),$e=W.id==="bilan_hydrique",N=mt().sensorlessEnabled??!0;ee.innerHTML=`
          <div class="m-sheet-links">
            ${$e?`<a class="m-sheet-link" id="menu-sensorless">${N?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const G=Ye({title:W.title,body:ee,doneLabel:"Fermer",onDone:()=>{}});(U=ee.querySelector("#menu-sensorless"))==null||U.addEventListener("click",()=>{wt({sensorlessEnabled:!N}),G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove();const O=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');O&&(O.innerHTML=m()+bt(u()),S(),$(),g(),i==="admin"&&P())},280)}),ee.querySelector("#menu-move").addEventListener("click",()=>{G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),A()},280)}),ee.querySelector("#menu-remove").addEventListener("click",()=>{W.active=!1,G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),b(),C()},280),Ue("Widget retiré")})})})}function A(){const S=document.createElement("div"),$=()=>Le.filter(g=>g.active&&!g.fixed),k=()=>{const g=$();S.innerHTML=g.map((T,P)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${T.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${P}" data-dir="-1" ${P===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${P}" data-dir="1" ${P===g.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),S.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(T=>{T.addEventListener("click",()=>{const P=$(),L=+T.dataset.i,z=L+ +T.dataset.dir,D=Le.indexOf(P[L]),M=Le.indexOf(P[z]);[Le[D],Le[M]]=[Le[M],Le[D]],b(),k(),C()})})};k(),Ye({title:"Réorganiser les widgets",body:S,doneLabel:"Fermer",onDone:()=>{}})}function I(){const S=i==="admin",$=xe(`
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
            ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(k=>`
              <button class="m-add-item" data-action="${k.action}">
                <i class="bi ${k.icon}"></i>
                <span>${k.label}</span>
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
      </div>`);$.querySelector(".m-detail-back").addEventListener("click",fe),$.querySelectorAll(".m-add-item").forEach(k=>{k.addEventListener("click",()=>{const g=k.dataset.action;g==="irrigation"?(fe(),ge(()=>Promise.resolve().then(()=>et),void 0).then(T=>T.openIrrigationSaisie(o,Ue))):g==="strategie-irrigation"?(fe(),ge(()=>Promise.resolve().then(()=>et),void 0).then(T=>T.openIrrigationStrategie(o,Ue))):Ue("Fonctionnalité à venir")})})}function q(){const S=document.createElement("div"),$=()=>{const k=Le.filter(g=>!g.fixed);S.innerHTML=k.map(g=>`
        <div class="m-catalog-row${g.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${g.color}20;color:${g.color}"><i class="bi ${g.icon}"></i></div>
          <span class="m-catalog-title">${g.title}</span>
          ${g.available?`<button class="m-catalog-toggle${g.active?" m-catalog-toggle--on":""}" data-cid="${g.id}" type="button">
                <i class="bi ${g.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),S.querySelectorAll("[data-cid]").forEach(g=>{g.addEventListener("click",()=>{const T=Le.find(P=>P.id===g.dataset.cid);T&&(T.active=!T.active,b(),$(),C())})})};$(),Ye({title:"Widgets disponibles",body:S,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",S=>{if(S.key!=="weenat_proto_store")return;Cs(le);const $=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');$&&($.innerHTML=m()+bt(u()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=I,C()}const ms={"Blé tendre":["Semis","Levée","Tallage","Épi 1 cm","Épiaison","Floraison","Maturité"],Maïs:["Semis","Levée","4 feuilles","6 feuilles","Floraison ♂","Soie","Maturité"],Colza:["Semis","Levée","Rosette","Reprise","Bouton floral","Floraison","Siliques","Maturité"],Tournesol:["Semis","Levée","4 feuilles","Bouton floral","Floraison","Maturité"],Vigne:["Débourrement","Sortie feuilles","Floraison","Nouaison","Véraison","Récolte"],Sorgho:["Semis","Levée","Montaison","Floraison","Maturité"],"Orge de printemps":["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],Orge:["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],"Pomme de terre":["Plantation","Levée","Croissance","Tuberisation","Grossissement","Maturité"],Cerisier:["Dormance","Bourgeons","Débourrement","Floraison","Nouaison","Fructification","Récolte"],Poire:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Pomme:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Salade:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Laitue:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Betterave:["Semis","Levée","4 feuilles","Fermeture rang","Grossissement","Récolte"]},vs=["Semis","Levée","Floraison","Récolte"];function Ko(e){if(!e)return vs;const i=e.toLowerCase();for(const t of Object.keys(ms))if(i.startsWith(t.toLowerCase()))return ms[t];return vs}const Lt=new URLSearchParams(window.location.search).get("role")==="adherent"?"adherent":"admin";function ci(e){return Lt==="adherent"?le.filter(i=>i.orgId===e.orgId):le}const Ae={djMin:0,djMax:18,hfSeuil:7.2},Zo={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#0B3A64"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"},irrigation:{metricLabel:"Cumul d'irrigation",unit:"mm",icon:"bi-moisture",color:"#FF8C00"}},Xo=4,Qo=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermomètre-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Capteur d'humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],wi={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},on=e=>`dash-widgets-parcel-${e}`;function ea(e,i){const t=i.map(a=>ce.find(s=>s.id===a)).filter(Boolean),n=new Set(t.map(a=>a.model)),o=["previsions-5j","cumuls","irrigations"];return Object.entries(wi).forEach(([a,s])=>{s.some(l=>n.has(l))&&o.push(a)}),Tt(e)&&o.push("irrelis"),o}function Gt(e,i){try{const t=JSON.parse(localStorage.getItem(on(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return ea(e,i)}function an(e,i){localStorage.setItem(on(e),JSON.stringify(i))}function ta(e,i,t){const n=new Set(Gt(e,i)),o=Qo.map((s,l)=>`
    <div class="m-list-section-header"${l>0?' style="margin-top:20px"':""}>${s.title}</div>
    ${s.items.map(p=>{const d=n.has(p.id);return`
        <div class="m-wcat-item">
          <span>${p.label}</span>
          ${d?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${p.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`}).join("")}`).join(""),a=xe(`
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
    </div>`);a.querySelector(".m-detail-back").addEventListener("click",fe),a.querySelectorAll(".m-wcat-add").forEach(s=>{s.addEventListener("click",()=>{const l=s.dataset.wid,p=Gt(e,i);p.includes(l)||(p.push(l),an(e.id,p)),fe(),t==null||t()})})}const Je={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Capteur d'humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1},irrigation:{label:"Irrigation",unit:"mm",color:"#FF8C00",cumul:!0,cumulsType:"irrigation"},rfu:{label:"Niveau de réservoir",unit:"mm",color:"#0099CC",cumul:!1},nrs:{label:"Niveau de réservoir (spatialisé)",unit:"mm",color:"#0172A4",cumul:!1}},ia=new Set(["pluie","temperature","humidite","vent","pothydr","etp","temp_rosee","rayonnement"]),Pi={j7j2:2},Ct={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function Xt(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3},rfu:{base:60,amp:30,min:0,max:120},nrs:{base:65,amp:28,min:0,max:120}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(n,o)=>{const a=o/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,s))})}const Qt={"365d":52,"30d":60,"7d":84,j7j2:108,hier:48,"1d":24,custom:60},qt={"365d":525600,"30d":43200,"7d":10080,j7j2:10080,hier:1440,"1d":1440,custom:10080};function ln(e,i,t=0,n=0,o=null){const a=o??(Qt[i]||60),s=qt[i]||10080,l=Date.now(),p=l-s*6e4,d=s*6e4/a,u=new Array(a+t).fill(0),m=t>0?n*6e4/t:0;return me.filter(v=>v.plotId===e).forEach(v=>{const c=new Date(v.iso).getTime();if(!(c<p)){if(c<=l){const r=Math.min(a-1,Math.floor((c-p)/d));u[r]+=v.mm}else if(t>0&&c<=l+n*6e4){const r=Math.min(t-1,Math.floor((c-l)/m));u[a+r]+=v.mm}}}),u}function sa(e,i,t,n,o,a=20,s=0){const l=qt[e]||10080,p=l+s,d=new Date,u=r=>e==="1d"||e==="hier"?`${String(r.getHours()).padStart(2,"0")}h`:e==="365d"?r.toLocaleDateString("fr-FR",{month:"short"}):`${String(r.getDate()).padStart(2,"0")}/${String(r.getMonth()+1).padStart(2,"0")}`,m=4,v=i-t-n,c=o-a;return Array.from({length:m+1},(r,b)=>{const f=b/m,y=new Date(d.getTime()+(f*p-l)*6e4),h=(t+f*v).toFixed(1),x=b===0?"start":b===m?"end":"middle";return[`<line x1="${h}" y1="${c}" x2="${h}" y2="${c+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${h}" y="${o-3}" text-anchor="${x}" font-size="9" fill="#8e8e93" font-family="-apple-system">${u(y)}</text>`].join("")}).join("")}function na(e,i,t,n="7d",o="",a=null){const s=Qt[n]||60,l=qt[n]||10080,p=Pi[n]||0,d=l/1440,u=p>0?Math.round(s*d/(d+p)):s,m=s-u,v=m>0?p*1440:0,r=m>0&&ia.has(e)?m:0,b=e==="irrigation"?ln(a,n,m,m>0?p*1440:0,u):Xt(e,u+r),f=320,y=100,h=34,x=6,C=10,j=20,E=f-h-x,w=y-C-j,_=t?0:Math.min(...b),F=Math.max(...b,_+.001),A=F-_,I=J=>h+J/(s-1)*E,q=J=>C+w-(J-_)/A*w,S=`g${Math.random().toString(36).slice(2,8)}`,$=[0,.5,1].map(J=>{const se=_+J*A,pe=C+w-J*w;return`<text x="${h-3}" y="${(pe+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${se<10?se.toFixed(1):Math.round(se)}</text>`}).join(""),k=[.25,.5,.75].map(J=>{const se=(C+w-J*w).toFixed(1);return`<line x1="${h}" y1="${se}" x2="${f-x}" y2="${se}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),g=`<line x1="${h}" y1="${C+w}" x2="${f-x}" y2="${C+w}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,T=sa(n,f,h,x,y,j,v);let P="";if(m>0){const J=I(u-.5),se=`stripe${S}`;P=`<defs><pattern id="${se}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.06)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.18)" stroke-width="3"/>
      </pattern></defs>
      <rect x="${J.toFixed(1)}" y="${C}" width="${(f-x-J).toFixed(1)}" height="${w}" fill="url(#${se})"/>
      <line x1="${J.toFixed(1)}" y1="${C}" x2="${J.toFixed(1)}" y2="${C+w}" stroke="rgba(142,142,147,.35)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(f-x-3).toFixed(1)}" y="${(C+9).toFixed(1)}" text-anchor="end" font-size="8" fill="#8e8e93" font-family="-apple-system" font-style="italic">Prévisions</text>`}if(t){const J=E/b.length*.7,se=b.map((pe,Ee)=>{const Se=(pe-_)/A*w,De=C+w-Se,Fe=Ee>=u;return`<rect x="${(I(Ee)-J/2).toFixed(1)}" y="${De.toFixed(1)}" width="${J.toFixed(1)}" height="${Se.toFixed(1)}" fill="${Fe?"#C7C7CC":i}" opacity="${Fe?".55":".8"}" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${f} ${y}" width="100%" height="${y}" preserveAspectRatio="none">${P}${$}${k}${g}${T}${se}</svg>`}const L=b.map((J,se)=>[I(se),q(J)]),z=L.slice(0,u),D=L.slice(u-1),M=z.map(([J,se],pe)=>`${pe?"L":"M"}${J.toFixed(1)},${se.toFixed(1)}`).join(" "),V=r>0?D.map(([J,se],pe)=>`${pe?"L":"M"}${J.toFixed(1)},${se.toFixed(1)}`).join(" "):"",ie=`${M} L${I(u-1).toFixed(1)},${(C+w).toFixed(1)} L${h},${(C+w).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:b.map(J=>+J.toFixed(2)),minV:+_.toFixed(2),maxV:+F.toFixed(2)}))}" data-color="${i}" data-unit="${o}" style="position:relative">
    <svg viewBox="0 0 ${f} ${y}" width="100%" height="${y}" preserveAspectRatio="none">
      <defs><linearGradient id="${S}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${P}
      ${$}${k}${g}
      <path d="${ie}" fill="url(#${S})"/>
      <path d="${M}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${V?`<path d="${V}" fill="none" stroke="${i}" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>`:""}
      ${L.map(([J,se],pe)=>`<circle cx="${J.toFixed(1)}" cy="${se.toFixed(1)}" r="2" fill="${i}" opacity="${pe>=u?".55":"1"}"/>`).join("")}
      ${T}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function oa(e,i,t,n=null){if(!t)return"";const o=Qt[i]||60,a=qt[i]||10080,s=Pi[i]||0,l=a/1440,p=s>0?Math.round(o*l/(l+s)):o,d=a/(p*60),u=e==="irrigation"?ln(n,i,0,0,p):Xt(e,p);let m=[];if(t==="temp"){const v=u.reduce((r,b)=>r+Math.max(0,Math.min(b,Ae.djMax)-Ae.djMin),0)*(d/24),c=u.filter(r=>r<Ae.hfSeuil).length*d;m=[{label:"Cumul de degrés jours",val:`${Math.round(v)} DJ`,metricId:"dj",thresholdText:`${Ae.djMin}°C → ${Ae.djMax}°C`},{label:"Cumul d'heures de froid",val:`${Math.round(c)} h`,metricId:"hf",thresholdText:`< ${Ae.hfSeuil}°C`}]}else if(t==="pluie")m=[{label:"Cumul de pluie",val:`${u.reduce((c,r)=>c+r,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const v=u.filter(c=>c>120).length*d;m=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(v)} h`,metricId:"rayo"}]}else if(t==="etp")m=[{label:"Cumul d'évapotranspiration",val:`${(u.reduce((c,r)=>c+r,0)*(d/24)).toFixed(1)} mm`,metricId:"etp"}];else if(t==="hws"){const v=u.filter(c=>c>50).length*d;m=[{label:"Cumul d'heures d'humectation foliaire",val:`${Math.round(v)} h`,metricId:"humec"}]}else t==="irrigation"&&(m=[{label:"Cumul irrigation",val:`${u.reduce((c,r)=>c+r,0).toFixed(1)} mm`,metricId:"irrigation"}]);return m.length?`<div class="m-chart-cumuls">${m.map(v=>{const c=v.metricId==="dj"||v.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${v.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${v.label}</span>
          ${v.thresholdText?`<span class="m-chart-cumul-thresh">${v.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${v.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${c}
        <button class="m-cumul-add-btn" data-cumul-label="${v.label}" data-cumul-val="${v.val}" data-cumul-metric-id="${v.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}const aa={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",j7j2:"J-7 → J+2",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},la={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"};function fs(e,i,t=null,n=null,o="1h",a=null){const s=Je[e];if(!s)return"";const l=oa(e,i,s.cumulsType,n),p=t||e==="irrigation"?`<div class="m-chart-details-link" data-sensor-id="${t??""}" data-metric-id="${e}">Voir détails →</div>`:"",d=a?`<button class="m-msr-add-btn" data-msr-metric-id="${e}" data-msr-subject-key="${a.key}" data-msr-subject-label="${a.label}" data-msr-period="${i}" data-msr-step="${o}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`:"";return`
    <div class="m-chart-card" data-metric-id="${e}">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${s.color}">${s.label}</span>
        ${d}
      </div>
      ${na(e,s.color,s.cumul,i,s.unit||"",n)}
      ${p}
      ${l}
    </div>`}function ra(e){const i=e.dataset.msrMetricId,t=e.dataset.msrSubjectKey,n=e.dataset.msrSubjectLabel,o=e.dataset.msrPeriod,a=e.dataset.msrStep,s=Je[i];if(!s)return;const l=Zs({subjectKey:t,subjectLabel:n,metricId:i,metricLabel:s.label,unit:s.unit||"",period:o,periodLabel:aa[o]||o,step:a,stepLabel:la[a]||a,color:s.color});if(l==="max"){Z(`Maximum de mesures atteint (${Xo})`);return}if(l==="dup"){Z("Cette mesure est déjà dans vos favoris");return}Z("Mesure ajoutée au tableau de bord")}function ca(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function da(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:n,maxV:o}=i,a=e.querySelector(".m-chart-tip"),s=e.querySelector(".m-chart-crosshair"),l=e.dataset.color||"#0172A4",p=e.dataset.unit||"";function d(m){const v=e.getBoundingClientRect(),c=Math.max(0,Math.min(1,(m-v.left)/v.width)),r=Math.round(c*(t.length-1)),b=t[r],f=c*100,y=(b<10?b.toFixed(1):String(Math.round(b)))+(p?` ${p}`:""),h=ca(l);s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${f}%;width:1px;background:${l};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(f,75)}%;background:${l};color:${h};border:1.5px solid ${h};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=y}function u(){s.style.display="none",a.style.display="none"}e.addEventListener("pointermove",m=>{m.preventDefault(),d(m.clientX)}),e.addEventListener("pointerdown",m=>d(m.clientX)),e.addEventListener("pointerup",u),e.addEventListener("pointerleave",u),e.style.cursor="crosshair"}function ua(e){const i=me.filter(r=>r.plotId===e.id),t=i.filter(r=>r.real),n=i.filter(r=>!r.real),o=t.reduce((r,b)=>r+b.mm,0),a=n.reduce((r,b)=>r+b.mm,0),s=Re(e.id).irrigation??e.irrigation,p=s&&!new Set(["Non irrigué","Non renseigné",""]).has(s),d=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-act-saisie" type="button"${p?"":" disabled"}>+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-act-saison" type="button"${p?"":" disabled"}>↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`;if(!p)return pt("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3,#8e8e93)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez préciser un type d'irrigation.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-set-type" type="button" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,"irrigations");if(!i.length)return pt("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3,#8e8e93);padding:8px 0">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${d}
      </div>`,"irrigations");let u="";if(i.some(r=>r.fromStrategy)){const r=[...i].sort((h,x)=>h.iso.localeCompare(x.iso)),b=r[r.length-1],f=r[r.length-2],y=f?Math.round((new Date(b.iso)-new Date(f.iso))/864e5):null;u=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${b.mm} mm</strong>${y?` tous les <strong>${y} jours</strong>`:""}.</div>
      </div>`}const v=o+a,c=`
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
          <div class="w-irrig-kpi-val" style="color:#8e8e93">${v} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${u}
      ${d}
      <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-view-cal" type="button" style="margin-top:5px"><i class="bi bi-calendar3"></i> Voir les irrigations</button>
    </div>`;return pt("Irrigations","bi-moisture","#FF8C00",c,"irrigations")}function pa(e,i=[]){const t=Gt(e,i),n=i.map(a=>ce.find(s=>s.id===a)).filter(Boolean);let o="";for(const a of t)if(a==="irrigations")o+=ua(e);else if(a==="cumuls")o+=va(e,i);else if(a==="previsions-5j")o+=ba(e);else if(a==="irrelis")o+=Vs(e);else if(wi[a]){const s=new Set(wi[a]),l=n.filter(p=>s.has(p.model));l.length&&(o+=ha(l,a))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${o}
    </div>`}function pt(e,i,t,n,o="",a=""){return`
    <div class="m-widget-card"${o?` data-widget-id="${o}"`:""}>
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${o}" type="button">•••</button>
      </div>
      ${a?`<div class="m-widget-card-subtitle">${a}</div>`:""}
      ${n}
    </div>`}function it(e,i,t){const n=(e*9301+49297)%233280,a={etp:1+n%60/100,pluie:.8+n%70/100,djc:4+n%60/10,hfroid:.4+n%12/10,humec:.1+n%20/100,enso:4+n%40/10}[i]??1,s=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(a*s*10)/10}const rn=e=>`m-pcumuls-${e}`;function ut(e){try{return JSON.parse(localStorage.getItem(rn(e)))||{}}catch{return{}}}function Ft(e,i){const t=ut(e);localStorage.setItem(rn(e),JSON.stringify({...t,...i}))}const ma={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function va(e,i=[]){const t=new Set;i.forEach(c=>{const r=ce.find(b=>b.id===c);r&&(Ct[r.model]||[]).forEach(b=>t.add(b))});const n=`${new Date().getFullYear()}-01-01`,o=ut(e.id),a=new Set(o.hidden||[]),s=o.dates||{},l=o.cfg||{};e.id;const p=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:it(e.id,"etp",s.etp||n),show:!0},{id:"enso",label:"Rayonnement solaire",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:it(e.id,"enso",s.enso||n),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:it(e.id,"pluie",s.pluie||n),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:it(e.id,"djc",s.djc||n),show:t.has("temperature"),cfg:!0,cfgLabel:`${l.djMin??0}–${l.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#FEE7B4",icon:"bi-snow",val:it(e.id,"hfroid",s.hfroid||n),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${l.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:it(e.id,"humec",s.humec||n),show:t.has("humectation")}].filter(c=>c.show),d=p.filter(c=>!a.has(c.id)),u=p.filter(c=>a.has(c.id)),m=u.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${u.map(c=>`
          <button class="m-pcumul-add" data-cid="${c.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${c.icon}" style="color:${c.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${c.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",v=d.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${d.map(c=>{const r=s[c.id]||n;return`<div class="m-cumuls-saved-card" style="position:relative">
          <button class="m-pcumul-del m-del-btn" data-cid="${c.id}" data-pid="${e.id}" type="button" style="position:absolute;top:8px;right:8px">×</button>
          <div class="m-pcumul-hd">
            <div class="m-pcumul-icon" style="background:${c.color}22;color:${c.color}"><i class="bi ${c.icon}"></i></div>
            <div class="m-pcumul-label" style="color:${c.color}">${c.label}</div>
          </div>
          <div class="m-pcumul-value" style="color:${c.color}">${c.val}<span class="m-pcumul-unit">${c.unit}</span></div>
          <div class="m-pcumul-since">
            <span>Depuis le</span>
            <input type="date" class="m-pcumul-date m-pcumul-date-inp" data-cid="${c.id}" data-pid="${e.id}" value="${r}">
            ${c.cfg?`<button class="m-pcumul-cfg m-pcumul-cfg-btn" data-cid="${c.id}" data-pid="${e.id}"><i class="bi bi-gear"></i> ${c.cfgLabel}</button>`:""}
          </div>
        </div>`}).join("")}${m}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${m}`;return pt("Cumuls","bi-bar-chart-fill","#0172A4",v,"cumuls")}const cn={};function dn(e){const i=(e==null?void 0:e.id)||1,t=(a,s,l)=>{const p=Math.sin(a*9301+49297)*43758.5453;return s+Math.floor((p-Math.floor(p))*(l-s+1))},n=[{label:"Ensoleillé",icon:"bi-sun",color:"#f4a01c"},{label:"Part. nuageux",icon:"bi-cloud-sun",color:"#5b8dd9"},{label:"Couvert",icon:"bi-cloud",color:"#8e8e93"},{label:"Pluie",icon:"bi-cloud-rain-fill",color:"#2E75B6"},{label:"Orageux",icon:"bi-cloud-lightning-rain",color:"#bf5af2"}],o=new Date;return Array.from({length:14},(a,s)=>{const l=new Date(o);l.setDate(l.getDate()+s);const p=t(i*17+s*7,0,4),d=n[p],u=p>=3,m=t(i*3+s*11,6,14),v=t(i*5+s*13,17,32),c=Array.from({length:24},(r,b)=>{const f=Math.sin(Math.PI*(b-6)/12),y=Math.round(m+(v-m)*Math.max(0,f)),h=u&&b>=8&&b<=16&&t(i+s*100+b,0,9)>5?+(t(i+s*100+b+1,0,30)/10).toFixed(1):0;return{label:`${String(b).padStart(2,"0")}h`,temp:y,pluie:h,hum:Math.round(85-40*Math.max(0,f)),vent:t(i*7+s*50+b,8,30),icon:h>0?"bi-cloud-rain-fill":b<7||b>20?"bi-moon-fill":d.icon}});return{dayLabel:s===0?"Aujourd'hui":s===1?"Demain":l.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:l.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...d,pluie:u?t(i*23+s*31,2,20):0,tMin:m,tMax:v,ventMoy:t(i*11+s*17,8,30),ventRafales:t(i*13+s*19,18,50),hours:c}})}function di(e,i,t){const n=e[i],o=`${n.dayLabel.charAt(0).toUpperCase()+n.dayLabel.slice(1)} · ${n.dateStr}`,a=t?`<div style="font-size:12px;color:#8e8e93;text-align:center;padding:2px 0 6px"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${t}</div>`:"";return`
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
    </div>`}function fa(e){const i=cn[e.id]||dn(e),t=e.name,n=xe(di(i,0,t)),o=(a,s)=>{var l,p;a.querySelector(".m-detail-back").addEventListener("click",fe),(l=a.querySelector("#prev-day"))==null||l.addEventListener("click",()=>{a.innerHTML=di(i,s-1,t),o(a,s-1)}),(p=a.querySelector("#next-day"))==null||p.addEventListener("click",()=>{a.innerHTML=di(i,s+1,t),o(a,s+1)})};o(n,0)}function ba(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=ye.find(d=>d.id===(e==null?void 0:e.orgId)),n=(e==null?void 0:e.ville)||(t==null?void 0:t.ville)||"—",o=(e==null?void 0:e.id)||1,a=dn(e);cn[o]=a;const s=a.slice(0,5).map((d,u)=>({lbl:u===0?"Auj.":i[new Date(Date.now()+u*864e5).getDay()],date:d.dateStr,tmax:d.tMax,tmin:d.tMin,pluie:d.pluie,vent:d.ventMoy,icon:d.icon,label:d.label})),l=d=>`
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
    </div>`;return pt("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",p,"previsions-5j")}function ha(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},n={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},o={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(a=>{const s=t[a.model]||"bi-broadcast",l=un[a.model]||a.model,p=n[a.model]||"#0172A4",d=o[a.model]||[],u=d[0],v=a.model.startsWith("CAPA")?30:15,c=v-a.id*7%v,r=`
      <div class="m-wsensor-vals" style="margin:8px 0">
        ${d.slice(0,4).map(b=>{const f=Je[b];if(!f)return"";const h=Xt(b,1)[0],x=h<10?h.toFixed(1):Math.round(h);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${f.label}</span>
            <span class="m-wsensor-value" style="color:${f.color}">${x} ${f.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer" style="display:flex;align-items:center;justify-content:space-between">
        <span style="font-size:11px;color:#8e8e93">Il y a ${c} min · ${a.serial}</span>
        <button class="m-wsensor-voir-donnees" data-sensor-id="${a.id}" data-metric-id="${u}" style="border:none;background:none;color:#007AFF;font-size:12px;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;gap:3px">Voir les données <i class="bi bi-arrow-right-short"></i></button>
      </div>`;return pt(l,s,p,r,i)}).join("")}function ga(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function ya(e,i,t){const n=new Set;i.forEach(f=>{const y=ce.find(h=>h.id===f);y&&(Ct[y.model]||[]).forEach(h=>n.add(h))});const o=[...new Set(["etp","rayonnement","temp_rosee",...n])].filter(f=>Je[f]),a=Qt[t]||60,s=qt[t]||10080,l=Pi[t]||0,p=s/1440,d=l>0?Math.round(a*p/(p+l)):a,u=s/d*6e4,m=new Date,v=new Date(m-s*6e4),c=["Horodatage",...o.map(f=>`${Je[f].label} (${Je[f].unit})`)].join(";"),r=Array.from({length:d},(f,y)=>[new Date(v.getTime()+y*u).toISOString().replace("T"," ").slice(0,19),...o.map(x=>Xt(x,1)[0].toFixed(2))].join(";")),b=(e.name||"parcelle").replace(/[^\w]/g,"_");ga([c,...r].join(`\r
`),`${b}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function xa(e,i="7d",t="1h",n=null){const o=new Set,a={};e.forEach(c=>{const r=ce.find(b=>b.id===c);r&&(Ct[r.model]||[]).forEach(b=>{o.add(b),a[b]||(a[b]=c)})});const s=me.some(c=>c.plotId===n),l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),p=e.some(c=>{const r=ce.find(b=>b.id===c);return r&&l.has(r.model)}),d=["pluie","irrigation","temperature","humidite","pothydr","teneur","temp_sol","vent","rayonnement","humectation","par","temp_rosee","etp"],u=[...new Set([...o,"etp","rayonnement","temp_rosee",...p?["rfu"]:["nrs"],...s?["irrigation"]:[]])].filter(c=>Je[c]).sort((c,r)=>{const b=d.indexOf(c),f=d.indexOf(r);return(b===-1?999:b)-(f===-1?999:f)}),m=new Date().toISOString().slice(0,10),v=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-from m-custom-date" value="${v}">
        <label style="font-size:12px;color:#8e8e93;white-space:nowrap">au</label>
        <input type="date" class="m-custom-to m-custom-date" value="${m}">
      </div>`:""}
    </div>
    <div class="m-detail-section">
      ${(()=>{const c=e[0]??null,r=n!=null?le.find(f=>f.id===n):null,b=r?{key:`p-${r.id}`,label:r.name}:null;return u.map(f=>f==="irrigation"?fs(f,i,null,n,t,b):fs(f,i,a[f]??c,null,t,b)).join("")})()}
    </div>`}const $a={"IRRÉ-LIS Multi-Cultures":{icon:"bi-droplet-fill",color:"#2E75B6"},"IRRÉ-LIS Mono-Culture":{icon:"bi-droplet-fill",color:"#2E75B6"},DeciTrait:{icon:"bi-shield-check",color:"#4CAF50"},Limacapt:{icon:"bi-bug",color:"#795548"},"Modèles Arvalis — PRÉVI-LIS / MILÉOS":{icon:"bi-graph-up",color:"#FBAF05"},Xarvio:{icon:"bi-grid-3x3-gap",color:"#00B14F"},Pixagri:{icon:"bi-map",color:"#00897B"},VitiMeteo:{icon:"bi-flower1",color:"#8B4C9E"},Rimpro:{icon:"bi-cloud-lightning",color:"#E53935"},"Cropwise Protector":{icon:"bi-shield-fill-check",color:"#43A047"},"Movida GrapeVision":{icon:"bi-eye",color:"#7B1FA2"}};function wa(e){if(e.substrate)return"Substrat : "+e.substrate;if(e.texture===xt&&e.soilAnalysis){const{argile:i,limon:t,sable:n}=e.soilAnalysis;return`Analyse de sol (argile ${i}% / limon ${t}% / sable ${n}%)`}return e.texture||"—"}function Si(e){const i=$a[e]||{icon:"bi-puzzle",color:"#8e8e93"};return`<i class="bi ${i.icon}" style="font-size:18px;color:${i.color};width:24px;text-align:center;flex-shrink:0"></i>`}const un={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"};function Sa(e,i,t){var u,m;const n=t.map(v=>ce.find(c=>c.id===v)).filter(Boolean),o=n.some(v=>v.model==="P+"||v.model==="PT"),a=n.some(v=>v.model==="P"),s=o&&a,l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),p=new Map;n.forEach(v=>{(Ct[v.model]||[]).forEach(c=>{p.has(c)||p.set(c,[]),p.get(c).push(v)})});const d=new Set;return p.forEach((v,c)=>{v.length<=1||v.every(r=>l.has(r.model))||v.forEach(r=>d.add(r.id))}),`
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
      ${((u=e.shape)==null?void 0:u.type)==="point"&&!(((m=e.latlngs)==null?void 0:m.length)>=3)?`
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
          <span class="m-list-row-value">${Re(e.id).volumeMaxM3??e.volumeMaxM3?`${(Re(e.id).volumeMaxM3??e.volumeMaxM3).toLocaleString("fr-FR")} m³`:"Non défini"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        ${e.irrigation&&!["Non irrigué","Non renseigné",""].includes(e.irrigation)?`
        <div class="m-list-row" data-action="edit-debit">
          <span class="m-list-row-label">Débit</span>
          <span class="m-list-row-value">${Re(e.id).debitM3h?`${Re(e.id).debitM3h} m³/h`:"Non défini"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`:""}
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${wa(e)}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${n.length?n.map((v,c)=>{const r=v.event&&(Array.isArray(v.event)?v.event.length>0:!0),b=d.has(v.id),f=un[v.model]||v.model,y=(Ct[v.model]||[]).map(h=>{const x=Je[h];return x?`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${x.color}18;color:${x.color};border:1px solid ${x.color}40;white-space:nowrap">${x.label}</span>`:""}).join("");return`<div class="m-list-row${c===n.length-1?" m-list-row--last":""} m-tappable" data-open-sensor="${v.id}" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:15px;font-weight:500;display:flex;align-items:center;gap:5px">
                      ${f}
                      ${r?'<span style="width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0;display:inline-block"></span>':""}
                      ${b?'<i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:12px;flex-shrink:0"></i>':""}
                    </div>
                    <div style="font-size:12px;color:#8e8e93;margin-top:1px">${v.model} · ${v.serial}</div>
                  </div>
                  <button class="btn-sensor-more" data-sensor-id="${v.id}" style="border:none;background:none;color:#8e8e93;font-size:18px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1" onclick="event.stopPropagation()">···</button>
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
                </div>
                ${y?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${y}</div>`:""}
                ${l.has(v.model)&&v.depth!=null?`<div style="font-size:12px;color:#8e8e93;margin-top:2px">Profondeur d'installation : ${v.depth} cm</div>`:""}
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
            ${[Je.etp,...n.some(v=>v.model==="PYRANO")?[]:[Je.rayonnement],Je.temp_rosee].map(v=>`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${v.color}18;color:${v.color};border:1px solid ${v.color}40;white-space:nowrap">${v.label}</span>`).join("")}
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
            ${(e.integrations||[]).map(v=>`
              <span style="display:inline-flex;align-items:center;gap:5px;background:#EFF6FF;color:#0172A4;border:1px solid #BFDBFE;border-radius:20px;padding:3px 10px 3px 7px;font-size:12px;font-weight:500;line-height:1.4">
                ${Si(v)}<span>${v}</span>
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
    </div>`}function ki(e,i=[],t="widgets",n="Parcelles"){let o=ye.find(A=>A.id===e.orgId),a=t,s="j7j2",l="1d",p=!1;const d=(o==null?void 0:o.ville)||"",u=xe(`
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
    <div id="detail-content" class="m-detail-content"></div>`);function m(){const A=ye.filter($=>$.id!==100&&$.statut!=="inactif"),I=document.createElement("div"),q=()=>{I.innerHTML=A.map($=>`
        <div class="m-sheet-option${$.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${$.id}">
          <span>${$.name}</span>
          ${$.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),I.querySelectorAll("[data-pick-org]").forEach($=>{$.addEventListener("click",()=>{const k=+$.dataset.pickOrg;k!==e.orgId&&(e.orgId=k,o=ye.find(g=>g.id===k),w(),Z("Exploitation mise à jour")),S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>S.remove(),280)})})},S=ue({title:"Exploitation",body:I,doneLabel:"Fermer",onDone:()=>{}});q()}function v(){const A=Yt.filter(k=>k!=="Non renseigné"),I=Re(e.id).irrigation??e.irrigation,q=document.createElement("div"),S=()=>{q.innerHTML=`
        <div class="m-sheet-option${I?"":" m-sheet-option--active"}" data-pick-irrig="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez un type</span>
          ${I?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${A.map(k=>`
          <div class="m-sheet-option${k===I?" m-sheet-option--active":""}" data-pick-irrig="${k}">
            <span>${k}</span>
            ${k===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,q.querySelectorAll("[data-pick-irrig]").forEach(k=>{k.addEventListener("click",()=>{const g=k.dataset.pickIrrig;g&&g!==I&&(Ne(e.id,{irrigation:g}),e.irrigation=g,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Type d'irrigation modifié : ${I||"—"} → ${g}.`}),w(),Z("Type d'irrigation mis à jour")),$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>$.remove(),280)})})},$=ue({title:"Type d'irrigation",body:q,doneLabel:"Fermer",onDone:()=>{}});S()}function c(){const A=En,I=Re(e.id).env??e.env??"Plein champ",q=document.createElement("div"),S=()=>{q.innerHTML=A.map(k=>`
        <div class="m-sheet-option${k===I?" m-sheet-option--active":""}" data-pick-env="${k}">
          <span>${k}</span>
          ${k===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),q.querySelectorAll("[data-pick-env]").forEach(k=>{k.addEventListener("click",()=>{const g=k.dataset.pickEnv;g&&g!==I&&(Ne(e.id,{env:g}),e.env=g,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Environnement modifié : ${I||"—"} → ${g}.`}),w(),Z("Environnement mis à jour")),$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>$.remove(),280)})})},$=ue({title:"Environnement",body:q,doneLabel:"Fermer",onDone:()=>{}});S()}function r(){const A=[...Ti,xt],I=Re(e.id).texture??e.texture,q=document.createElement("div"),S=()=>{q.innerHTML=`
        <div class="m-sheet-option${I?"":" m-sheet-option--active"}" data-pick-texture="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez une texture</span>
          ${I?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${A.map(k=>`
          <div class="m-sheet-option${k===I?" m-sheet-option--active":""}" data-pick-texture="${k}">
            <span>${k}</span>
            ${k===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,q.querySelectorAll("[data-pick-texture]").forEach(k=>{k.addEventListener("click",()=>{const g=k.dataset.pickTexture;if($.classList.remove("m-sheet-overlay--show"),setTimeout(()=>$.remove(),280),g===xt){x(I);return}g!==I&&(Ne(e.id,{texture:g||null,soilAnalysis:null}),e.texture=g||null,e.soilAnalysis=null,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${I||"—"} → ${g||"—"}.`}),w(),Z("Texture de sol mise à jour"))})})},$=ue({title:"Texture de sol",body:q,doneLabel:"Fermer",onDone:()=>{}});S()}function b(){const A=e.name||"",I=document.createElement("div");I.innerHTML=`<input class="m-sheet-input" type="text" value="${A.replace(/"/g,"&quot;")}" placeholder="Nom de la parcelle">`;const q=I.querySelector("input");ue({title:"Nom",body:I,doneLabel:"Enregistrer",onDone:()=>{const S=q.value.trim();S&&S!==A&&(Ne(e.id,{name:S}),e.name=S,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Nom de la parcelle modifié : ${A} → ${S}.`}),w(),Z("Nom mis à jour"))}}),setTimeout(()=>q.focus(),300)}function f(){const A=e.variety||"",I=document.createElement("div");I.innerHTML=`<input class="m-sheet-input" type="text" value="${A.replace(/"/g,"&quot;")}" placeholder="Variété">`;const q=I.querySelector("input");ue({title:"Variété",body:I,doneLabel:"Enregistrer",onDone:()=>{const S=q.value.trim();S!==A&&(Ne(e.id,{variety:S||null}),e.variety=S||null,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Variété modifiée : ${A||"—"} → ${S||"—"}.`}),w(),Z("Variété mise à jour"))}}),setTimeout(()=>q.focus(),300)}function y(){const A=cropOptions,I=e.crop,q=document.createElement("div");q.innerHTML=A.map($=>`
      <div class="m-sheet-option${$===I?" m-sheet-option--active":""}" data-pick-crop="${$}">
        <span>${$}</span>
        ${$===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const S=ue({title:"Culture",body:q,doneLabel:"Fermer",onDone:()=>{}});q.querySelectorAll("[data-pick-crop]").forEach($=>{$.addEventListener("click",()=>{const k=$.dataset.pickCrop;S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>S.remove(),280),k!==I&&(Ne(e.id,{crop:k,phenoStage:null}),e.crop=k,e.phenoStage=null,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Culture modifiée : ${I||"—"} → ${k}.`}),w(),Z("Culture mise à jour"))})})}function h(){const A=Ko(e.crop),I=e.phenoStage,q=document.createElement("div");q.innerHTML=A.map($=>`
      <div class="m-sheet-option${$===I?" m-sheet-option--active":""}" data-pick-stade="${$}">
        <span>${$}</span>
        ${$===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const S=ue({title:"Stade phénologique",body:q,doneLabel:"Fermer",onDone:()=>{}});q.querySelectorAll("[data-pick-stade]").forEach($=>{$.addEventListener("click",()=>{const k=$.dataset.pickStade;S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>S.remove(),280),k!==I&&(Ne(e.id,{phenoStage:k}),e.phenoStage=k,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Stade phénologique modifié : ${I||"—"} → ${k}.`}),w(),Z("Stade phénologique mis à jour"))})})}function x(A){const I=Re(e.id).soilAnalysis??e.soilAnalysis??{},q=document.createElement("div");q.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:12px">
      <div>
        <label class="m-form-label">Argile (%)</label>
        <input type="number" class="m-sheet-input" id="soil-argile" value="${I.argile??""}" placeholder="Ex : 25" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Limon (%)</label>
        <input type="number" class="m-sheet-input" id="soil-limon" value="${I.limon??""}" placeholder="Ex : 40" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Sable (%)</label>
        <input type="number" class="m-sheet-input" id="soil-sable" value="${I.sable??""}" placeholder="Ex : 35" min="0" max="100">
      </div>
    </div>`,ue({title:"Analyse de sol",body:q,doneLabel:"Enregistrer",onDone:()=>{var T,P,L;const S=+(((T=q.querySelector("#soil-argile"))==null?void 0:T.value)||0),$=+(((P=q.querySelector("#soil-limon"))==null?void 0:P.value)||0),k=+(((L=q.querySelector("#soil-sable"))==null?void 0:L.value)||0),g={argile:S,limon:$,sable:k};Ne(e.id,{texture:xt,soilAnalysis:g}),e.texture=xt,e.soilAnalysis=g,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${A||"—"} → analyse de sol (argile ${S}% / limon ${$}% / sable ${k}%).`}),w(),Z("Analyse de sol enregistrée")}})}function C(){const A=Re(e.id).volumeMaxM3??e.volumeMaxM3??null,I=document.createElement("div");I.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
      <label class="m-form-label">Volume limité (m³)</label>
      <input type="number" class="m-sheet-input" id="edit-volume-max" value="${A??""}" placeholder="Ex : 33000" step="100" min="0">
    </div>`,ue({title:"Volume limité de la parcelle",body:I,doneLabel:"Appliquer",onDone:()=>{var $;const q=($=I.querySelector("#edit-volume-max"))==null?void 0:$.value,S=q===""?null:Math.max(0,+q);Ne(e.id,{volumeMaxM3:S}),e.volumeMaxM3=S,w(),Z("Volume limité mis à jour")}})}const j=["IRRÉ-LIS Multi-Cultures","IRRÉ-LIS Mono-Culture","DeciTrait","Limacapt","Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","Movida GrapeVision"];function E(){let A=[...e.integrations||[]];function I(S){const $=j.filter(k=>!A.includes(k));S.innerHTML=`
        <div class="m-list-section-header">${A.length?`Actives (${A.length})`:"Actives"}</div>
        <div class="m-list">
          ${A.length?A.map((k,g)=>`
            <div class="m-list-row${g===A.length-1?" m-list-row--last":""}" style="gap:10px">
              ${Si(k)}
              <span class="m-list-row-label" style="flex:1">${k}</span>
              <button class="btn-unlink-integ" data-integ="${k}" style="border:none;background:none;color:#ff3b30;font-size:13px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Délier</button>
            </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucune intégration active</span></div>'}
        </div>
        ${$.length?`
        <div class="m-list-section-header">Disponibles</div>
        <div class="m-list">
          ${$.map((k,g)=>`
            <div class="m-list-row${g===$.length-1?" m-list-row--last":""}" style="gap:10px">
              ${Si(k)}
              <span class="m-list-row-label" style="flex:1">${k}</span>
              <button class="btn-add-integ" data-integ="${k}" style="border:none;background:none;color:#0172A4;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Lier</button>
            </div>`).join("")}
        </div>`:""}`,S.querySelectorAll(".btn-unlink-integ").forEach(k=>{k.addEventListener("click",()=>{A=A.filter(g=>g!==k.dataset.integ),e.integrations=[...A],ze(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${k.dataset.integ} » retirée de la parcelle.`}),I(S),Z("Intégration déliée")})}),S.querySelectorAll(".btn-add-integ").forEach(k=>{k.addEventListener("click",()=>{A.includes(k.dataset.integ)||A.push(k.dataset.integ),e.integrations=[...A],ze(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${k.dataset.integ} » activée sur la parcelle.`}),I(S),Z("Intégration liée")})})}const q=xe(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${e.name}</span></button>
          <span style="font-size:17px;font-weight:600">Intégrations</span>
          <div style="width:60px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="integ-list-content" style="padding-bottom:32px"></div>`);q.querySelector(".m-detail-back").addEventListener("click",fe),I(q.querySelector("#integ-list-content"))}function w(){const A=u.querySelector("#detail-content");a==="widgets"&&(A.innerHTML=pa(e,i)),a==="donnees"&&(A.innerHTML=xa(i,s,l,e.id)),a==="params"&&(A.innerHTML=Sa(e,o,i),_()),F()}function _(){const A=window.L;A&&setTimeout(()=>{var S;const I=u.querySelector("#parcel-minimap");if(!I)return;const q=A.map(I,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(A.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(q),((S=e.latlngs)==null?void 0:S.length)>=3){const $=A.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(q);q.fitBounds($.getBounds(),{padding:[8,8]})}else q.setView([e.lat,e.lng],14),A.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(q)},50)}function F(){var A,I,q,S,$,k,g,T,P;(A=u.querySelector(".m-prev5j-voir-details"))==null||A.addEventListener("click",()=>fa(e)),(I=u.querySelector(".m-period-sel"))==null||I.addEventListener("change",L=>{s=L.target.value,s==="j7j2"&&(l="1d"),w()}),(q=u.querySelector(".m-step-sel"))==null||q.addEventListener("change",L=>{l=L.target.value,w()}),(S=u.querySelector(".m-export-btn"))==null||S.addEventListener("click",()=>ya(e,i,s)),u.querySelectorAll(".m-chart-svg-wrap").forEach(L=>da(L)),u.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(L=>{L.addEventListener("click",()=>{const z=+L.dataset.sensorId,D=ce.find(M=>M.id===z);D&&ge(()=>import("./chart-fullscreen-B4TIeE90.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(M=>M.initChartFullscreen({sensor:D,linkedSensorIds:i,metricId:L.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),u.querySelectorAll(".m-irrig-view-cal").forEach(L=>{L.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(z=>z.openCalendar(ci(e),String(e.id)))})}),u.querySelectorAll(".m-chart-details-link").forEach(L=>{L.addEventListener("click",()=>{if(L.dataset.metricId==="irrigation"){ge(()=>import("./chart-fullscreen-B4TIeE90.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(M=>M.initChartFullscreen({linkedSensorIds:i,metricId:"irrigation",backLabel:e.name,parcel:e}));return}const z=+L.dataset.sensorId,D=ce.find(M=>M.id===z);D&&ge(()=>import("./chart-fullscreen-B4TIeE90.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(M=>M.initChartFullscreen({sensor:D,linkedSensorIds:i,metricId:L.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),($=u.querySelector(".m-il-detail-btn"))==null||$.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>Ws),void 0).then(L=>L.openIrrelisDetail(e))}),u.querySelectorAll(".m-msr-add-btn").forEach(L=>{L.addEventListener("click",()=>ra(L))}),u.addEventListener("click",L=>{const z=L.target.closest(".m-cumul-add-btn");if(z){const M=z.dataset.cumulMetricId,V=z.dataset.cumulVal,ie=Zo[M];if(!ie)return;const Q=document.createElement("div");Q.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${ie.metricLabel}</strong> (<em>${V}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,ue({title:"Tableau de bord",body:Q,doneLabel:"Ajouter",onDone:()=>{const J=M==="hf"?{cold:Ae.hfSeuil}:M==="dj"?{low:Ae.djMin,high:Ae.djMax}:null;if(Xs({metricId:M,...ie,subjectKey:`p-${e.id}`,subjectLabel:e.name,fromDate:`${new Date().getFullYear()}-01-01`,value:V,thresholds:J})==="max"){Z("Maximum de cumuls atteint (5)");return}Z("Cumul ajouté au tableau de bord")}});return}const D=L.target.closest(".m-cumul-edit-btn");if(D){const M=D.dataset.cumulMetricId,V=document.createElement("div");M==="hf"?(V.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Ae.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:V,doneLabel:"Appliquer",onDone:()=>{var ie;Ae.hfSeuil=+(((ie=V.querySelector("#edit-hf-seuil"))==null?void 0:ie.value)??7.2),w()}})):M==="dj"&&(V.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Ae.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Ae.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:V,doneLabel:"Appliquer",onDone:()=>{var ie,Q;Ae.djMin=+(((ie=V.querySelector("#edit-dj-min"))==null?void 0:ie.value)??0),Ae.djMax=+(((Q=V.querySelector("#edit-dj-max"))==null?void 0:Q.value)??18),w()}}));return}}),u.querySelectorAll("[data-open-sensor]").forEach(L=>{L.addEventListener("click",()=>{const z=+L.dataset.openSensor,D=ce.find(M=>M.id===z);D&&ge(()=>Promise.resolve().then(()=>Mi),void 0).then(M=>M.initSensorDetail(D,"donnees",Lt))})}),u.querySelectorAll(".btn-sensor-more").forEach(L=>{L.addEventListener("click",z=>{z.stopPropagation();const D=+L.dataset.sensorId,M=ce.find(J=>J.id===D);if(!M)return;const V=M.model==="P+"||M.model==="PT"?"Station météo":M.model==="P"?"Pluviomètre":M.model,ie=document.createElement("div");ie.innerHTML=`
          <div style="padding:8px 0">
            <button id="sheet-open-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;text-align:left">
              <i class="bi bi-broadcast" style="color:#0172A4;width:22px;text-align:center"></i>Voir la fiche capteur
            </button>
            <div style="height:.5px;background:rgba(0,0,0,.1);margin:0 20px"></div>
            <button id="sheet-unlink-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;color:#ff3b30;text-align:left">
              <i class="bi bi-x-circle" style="width:22px;text-align:center"></i>Délier de cette parcelle
            </button>
          </div>`;const Q=ue({title:`${V} · ${M.serial}`,body:ie,doneLabel:"Fermer",onDone:()=>{}});ie.querySelector("#sheet-open-sensor").addEventListener("click",()=>{Q.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{Q.remove(),ge(()=>Promise.resolve().then(()=>Mi),void 0).then(J=>J.initSensorDetail(M,"donnees",Lt))},280)}),ie.querySelector("#sheet-unlink-sensor").addEventListener("click",()=>{Q.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{Q.remove(),Jt({title:"Délier le capteur",message:`Délier <strong>${V} — ${M.serial}</strong> de <strong>${e.name}</strong> ?`,confirmLabel:"Délier",confirmColor:"#ff3b30",onConfirm:()=>{const J=i.indexOf(D);J!==-1&&i.splice(J,1),M.parcelIds=M.parcelIds.filter(se=>se!==e.id),w(),Z(`${M.serial} délié`)}})},280)})})}),u.querySelectorAll(".m-list-row[data-action]").forEach(L=>{L.addEventListener("click",()=>{if(L.dataset.action==="edit-exploitation")m();else if(L.dataset.action==="edit-name")b();else if(L.dataset.action==="edit-crop")y();else if(L.dataset.action==="edit-variety")f();else if(L.dataset.action==="edit-stade")h();else if(L.dataset.action==="edit-env")c();else if(L.dataset.action==="edit-irrigation")v();else if(L.dataset.action==="edit-volume-max")C();else if(L.dataset.action==="edit-debit")Ei(e,w);else if(L.dataset.action==="edit-texture")r();else if(L.dataset.action==="edit-integrations")E();else if(L.dataset.action==="delete-parcel"){const z=document.createElement("div");z.innerHTML=`
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
          `;const D=ue({title:"Supprimer la parcelle ?",body:z,doneLabel:"Annuler",onDone:()=>{}});z.querySelector("#do-delete-parcel").addEventListener("click",()=>{D.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{D.remove(),Sn(e.id,le),fe(),window.dispatchEvent(new CustomEvent("parcel-deleted",{detail:{id:e.id}}))},280)})}else Z("Fonctionnalité à venir")})}),u.querySelectorAll(".m-widget-menu").forEach(L=>{L.addEventListener("click",z=>{var se,pe;z.stopPropagation();const D=L.dataset.wid;if(!D)return;(se=u.querySelector(".m-widget-dd"))==null||se.remove();const M=document.createElement("div");M.className="m-widget-dd",M.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:220px";const V=D==="irrigations"?'<button class="m-widget-dd-vol" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;border-bottom:.5px solid rgba(0,0,0,.08);background:none;font-size:14px;color:#1c1c1e;font-family:inherit;cursor:pointer">Définir le volume limité et le débit</button>':"";M.innerHTML=`${V}<button class="m-widget-dd-remove" data-wid="${D}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const ie=u.querySelector(".m-detail-content"),Q=L.getBoundingClientRect(),J=ie.getBoundingClientRect();M.style.top=`${Q.bottom-J.top+ie.scrollTop+4}px`,M.style.right=`${J.right-Q.right}px`,ie.style.position="relative",ie.appendChild(M),(pe=M.querySelector(".m-widget-dd-vol"))==null||pe.addEventListener("click",()=>{M.remove(),Ei(e,w)}),M.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{M.remove();const Ee=Gt(e,i).filter(Se=>Se!==D);an(e.id,Ee),w()}),setTimeout(()=>document.addEventListener("click",()=>M.remove(),{once:!0}),0)})}),(k=u.querySelector(".m-add-widget-btn"))==null||k.addEventListener("click",()=>ta(e,i,w)),(g=u.querySelector(".m-irrig-act-saisie"))==null||g.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(L=>L.openIrrigationSaisie(ci(e),Z,{ids:[e.id],label:e.name},!0,w))}),(T=u.querySelector(".m-irrig-act-saison"))==null||T.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(L=>L.openIrrigationStrategie(ci(e),Z,{ids:[e.id],label:e.name},null,!0,w))}),(P=u.querySelector(".m-irrig-set-type"))==null||P.addEventListener("click",()=>{a="params",u.querySelectorAll(".m-detail-tab").forEach(L=>L.classList.toggle("active",L.dataset.view==="params")),w(),v()}),u.querySelectorAll(".m-pcumul-del").forEach(L=>{L.addEventListener("click",z=>{z.stopPropagation();const D=+L.dataset.pid,M=ut(D),V=new Set(M.hidden||[]);V.add(L.dataset.cid),Ft(D,{hidden:[...V]}),w()})}),u.querySelectorAll(".m-pcumul-date").forEach(L=>{L.addEventListener("click",()=>{var z;return(z=L.showPicker)==null?void 0:z.call(L)}),L.addEventListener("change",()=>{const z=+L.dataset.pid,D=L.dataset.cid,M=L.value;if(!M||(Date.now()-new Date(M))/864e5>365)return;const Q=ut(z).dates||{};Q[D]=M,Ft(z,{dates:Q});const J=L.closest(".m-cumuls-saved-card"),se=J==null?void 0:J.querySelector(".m-pcumul-value");if(se){const pe=J.querySelector(".m-pcumul-unit"),Ee=(pe==null?void 0:pe.textContent.trim())||"",Se=it(z,D,M);se.innerHTML=`${Se}<span class="m-pcumul-unit">${Ee}</span>`}})}),u.querySelectorAll(".m-pcumul-cfg").forEach(L=>{L.addEventListener("click",z=>{var se;z.stopPropagation();const D=+L.dataset.pid,M=L.dataset.cid,ie={...ut(D).cfg},Q=ma[M];if(!Q)return;(se=u.querySelector(".m-pcumul-cfg-panel"))==null||se.remove();const J=document.createElement("div");J.className="m-pcumul-cfg-panel",J.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",J.innerHTML=Q.map(pe=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${pe.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${pe.key}" value="${ie[pe.key]??pe.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',L.closest(".m-cumuls-saved-card").after(J),J.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{J.querySelectorAll(".m-pcumul-cfg-inp").forEach(pe=>{ie[pe.dataset.key]=parseFloat(pe.value)||0}),Ft(D,{cfg:ie}),J.remove(),w()})})}),u.querySelectorAll(".m-pcumul-add").forEach(L=>{L.addEventListener("click",z=>{z.stopPropagation();const D=+L.dataset.pid,M=L.dataset.cid,V=ut(D),ie=new Set(V.hidden||[]);ie.delete(M),Ft(D,{hidden:[...ie]}),w()})})}u.querySelectorAll(".m-detail-tab").forEach(A=>{A.addEventListener("click",()=>{u.querySelectorAll(".m-detail-tab").forEach(I=>I.classList.remove("active")),A.classList.add("active"),a=A.dataset.view,w()})}),u.querySelector(".m-detail-back").addEventListener("click",fe),u.querySelector("#d-star").addEventListener("click",()=>{p=!p;const A=u.querySelector("#d-star");A.querySelector("i").className=p?"bi bi-star-fill":"bi bi-star",A.style.color=p?"#f5c842":"",Z(p?"Ajouté aux favoris":"Retiré des favoris")}),u.querySelector("#d-plus").addEventListener("click",()=>{var A;(A=window.showMobileAddPage)==null||A.call(window)}),u.querySelector("#d-journal").addEventListener("click",()=>Ma(e)),w()}function ka(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}const Ea=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"],La=e=>{const[i,t,n]=e.split("-");return`${n}/${t}/${i}`};function Ca(e){const i=[],t=(o,a)=>i.push({id:`auto-mod-${o}-${a.slice(0,16)}`,type:"modification",date:o,texte:a,_system:!0});t("2024-01-01","Création de la parcelle"),e.crop&&t("2024-03-15",`Culture définie : ${e.crop}`);const n=e.substrate?`Substrat : ${e.substrate}`:e.texture;return n&&t("2024-03-15",`Texture de sol définie : ${n}`),e.irrigation&&t("2024-04-01",`Type d'irrigation défini : ${e.irrigation}`),i}function Aa(e){const i=le.find(t=>t.id===e);return me.filter(t=>t.plotId===e&&t.real).map(t=>({id:`auto-irrig-${e}-${t.iso}-${t.mm}`,type:"irrigation",date:t.iso,volume:t.mm,unite:"mm",methode:(i==null?void 0:i.irrigation)||"",texte:"Irrigation effectuée.",auteur:"Système",_system:!0}))}function Ei(e,i){const t=Re(e.id).volumeMaxM3??"",n=Re(e.id).debitM3h??"",o=document.createElement("div");o.innerHTML=`
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
    </div>`,ue({title:"Volume limité et débit",body:o,doneLabel:"Enregistrer",onDone:()=>{const a=o.querySelector("#mvd-vol").value,s=o.querySelector("#mvd-debit").value;Ne(e.id,{volumeMaxM3:a!==""?parseInt(a):null,debitM3h:s!==""?parseFloat(s):null}),i==null||i()}})}function Ma(e){const i=ye.find(a=>a.id===e.orgId),t=(i==null?void 0:i.ville)||"",n=xe(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);n.querySelector(".m-detail-back").addEventListener("click",fe);function o(){var c;const a=n.querySelector("#mjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(r=>r.linkedType==="parcel"&&r.linkedId===e.id).map((r,b)=>({id:`dash-${b}`,type:"note",date:r.date,texte:r.text,auteur:r.auteur,role:r.role,_fromDashboard:!0})),l=[...Ca(e),...Aa(e.id)],p=[...Wt(e.id),...s,...l].sort((r,b)=>b.date.localeCompare(r.date)),d=La,u={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"},culture:{label:"Culture",icon:"bi-flower1",dotColor:"#15803d",dotBg:"#f0fdf4",badgeCls:"culture"},stade:{label:"Stade phéno.",icon:"bi-calendar2-check",dotColor:"#7c3aed",dotBg:"#f5f3ff",badgeCls:"stade"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotColor:"#1d4ed8",dotBg:"#eff6ff",badgeCls:"irrigation"},cycle:{label:"Cycle cultural",icon:"bi-arrow-repeat",dotColor:"#c2410c",dotBg:"#fff7ed",badgeCls:"cycle"},integration:{label:"Intégration",icon:"bi-plug-fill",dotColor:"#7a4fa0",dotBg:"#f5f0fb",badgeCls:"integration"},modification:{label:"Modification",icon:"bi-pencil-square",dotColor:"#7a6a1e",dotBg:"#fdf8ee",badgeCls:"modification"}},m=[{type:"note",label:"Note",icon:"bi-pencil-square"},{type:"traitement",label:"Traitement phytosanitaire",icon:"bi-eyedropper"},{type:"culture",label:"Culture",icon:"bi-flower1"},{type:"stade",label:"Stade phénologique",icon:"bi-calendar2-check"},{type:"irrigation",label:"Irrigation",icon:"bi-droplet-half"},{type:"cycle",label:"Cycle cultural",icon:"bi-arrow-repeat"}];let v=`
      <div style="padding:12px 16px 4px">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="mjrn-add-btn">
          <i class="bi bi-plus-lg"></i> Ajouter
        </button>
      </div>
    `;p.length===0?v+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(v+='<div class="m-jrn-timeline">',p.forEach((r,b)=>{const f=u[r.type]||u.note,y=r.type==="traitement",h=b===p.length-1,x=!!r._fromDashboard,C=!!r._system;v+=`
          <div class="m-jrn-entry" data-id="${r.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${f.dotBg};color:${f.dotColor};border-color:${f.dotColor}40">
                <i class="bi ${f.icon}"></i>
              </div>
              ${h?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${d(r.date)}</span>
                <span class="journal-type-badge journal-type-badge--${f.badgeCls}">${f.label}</span>
                ${x?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':C?"":`<button class="m-jrn-del" data-id="${r.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${r.texte?`<div class="m-jrn-texte">${r.texte}</div>`:""}
              ${r.auteur?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${r.auteur}${ka(r.role)}</div>`:""}
              ${y&&(r.produit||r.dose||r.cible)?`
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
          </div>`}),v+="</div>"),a.innerHTML=v,(c=a.querySelector("#mjrn-add-btn"))==null||c.addEventListener("click",()=>{const r=document.createElement("div");r.innerHTML=`<div class="m-sheet-links">${m.map(f=>`<a class="m-sheet-link" data-type="${f.type}"><i class="bi ${f.icon}" style="margin-right:8px;color:#8e8e93"></i>${f.label}</a>`).join("")}</div>`;const b=ue({title:"Ajouter une entrée",body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll(".m-sheet-link").forEach(f=>{f.addEventListener("click",()=>{b.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{b.remove(),Ta(f.dataset.type,e.id,o)},280)})})}),a.querySelectorAll(".m-jrn-del").forEach(r=>{r.addEventListener("click",()=>{const b=parseInt(r.dataset.id);Ii(e.id,Wt(e.id).filter(f=>f.id!==b)),o()})})}o()}function Ta(e,i,t){const n=new Date().toISOString().slice(0,10),o=Lt==="admin"?"conseiller":"membre",a=ye.find(v=>v.id===(Lt==="admin"?100:1)),s=a?`${a.prenomProprietaire} ${a.nomProprietaire}`:"Jean Dupont",l=le.find(v=>v.id===i),p=(l==null?void 0:l.crop)||"",d={note:"Ajouter une note",traitement:"Ajouter un traitement",culture:"Culture — événement",stade:"Stade phénologique",irrigation:"Irrigation",cycle:"Cycle cultural"},u={note:`
      <div>
        <div class="m-form-label">Catégorie</div>
        <select class="m-sheet-input" id="mjf-category">
          ${Ea.map(v=>`<option value="${v}">${v}</option>`).join("")}
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
          <input type="text" class="m-sheet-input" id="mjf-culture" value="${p}" placeholder="Ex : Blé tendre" style="margin-bottom:0">
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
        <input type="text" class="m-sheet-input" id="mjf-culture" value="${p}" placeholder="Culture concernée">
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
      </div>`},m=document.createElement("div");m.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <div class="m-form-label">Date</div>
        <input type="date" class="m-sheet-input" id="mjf-date" value="${n}">
      </div>
      ${u[e]||u.note}
    </div>`,ue({title:d[e]||"Ajouter une entrée",body:m,doneLabel:"Enregistrer",onDone:()=>{var f,y;const v=m.querySelector("#mjf-date").value||n,c=((f=m.querySelector("#mjf-texte"))==null?void 0:f.value.trim())||"",r={id:Date.now(),type:e,date:v,texte:c,auteur:s,role:o};if(e==="note")r.category=((y=m.querySelector("#mjf-category"))==null?void 0:y.value)||"";else if(e==="traitement")r.produit=m.querySelector("#mjf-produit").value.trim(),r.dose=m.querySelector("#mjf-dose").value.trim(),r.cible=m.querySelector("#mjf-cible").value.trim();else if(e==="culture")r.action=m.querySelector("#mjf-action").value,r.culture=m.querySelector("#mjf-culture").value.trim(),r.variete=m.querySelector("#mjf-variete").value.trim();else if(e==="stade")r.stade=m.querySelector("#mjf-stade").value.trim(),r.culture=m.querySelector("#mjf-culture").value.trim();else if(e==="irrigation"){const h=parseFloat(m.querySelector("#mjf-volume").value);r.volume=isNaN(h)?0:h,r.unite=m.querySelector("#mjf-unite").value,r.methode=m.querySelector("#mjf-methode").value}else e==="cycle"&&(r.action=m.querySelector("#mjf-action").value,r.annee=m.querySelector("#mjf-annee").value.trim());(c||r.produit||r.culture||r.stade||r.volume||r.annee)&&(Ii(i,[r,...Wt(i)]),t())}}),setTimeout(()=>{var v;return(v=m.querySelector("#mjf-texte"))==null?void 0:v.focus()},380)}const nt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:ki,openMobileVolDebitSheet:Ei},Symbol.toStringTag,{value:"Module"})),ht=100,Ia={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function gt(e,i){if(i==="irrelis")return Tt(e);const t=Ia[i];return t?ce.some(n=>n.parcelIds.includes(e.id)&&t.includes(n.model)):!0}const _t=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"nrs",label:"Niveau de réservoir (spatialisé)",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Hier"],defaultAgg:"7 derniers jours"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"},{id:"irrelis",label:"Irré-LIS",unit:"mm",aggs:["Aujourd'hui","Demain","J+3","J+5"],defaultAgg:"Aujourd'hui"}];function ja(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function bs(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"irrigation":return i===0?"#c7c7cc":i<30?"#FFDFB8":"#FF8C00";case"etp":return i<2?"#D6EDF9":i<5?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"temp_rosee":return i<5?"#D2DEFA":i<12?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"rfu":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"nrs":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";case"irrelis":return i>=35?"#24B066":i>=12?"#E8A020":"#E05252";default:return"#0172A4"}}function qa(e,i){const t=new Date().toISOString().split("T")[0],n=s=>{const l=new Date;return l.setDate(l.getDate()-s),l.toISOString().split("T")[0]},o=s=>{const l=new Date;return l.setDate(l.getDate()+s),l.toISOString().split("T")[0]},a=me.filter(s=>s.plotId===e);switch(i){case"Aujourd'hui":return a.filter(s=>s.iso===t).reduce((s,l)=>s+l.mm,0);case"7 derniers jours":return a.filter(s=>s.real&&s.iso>=n(7)).reduce((s,l)=>s+l.mm,0);case"30 derniers jours":return a.filter(s=>s.real&&s.iso>=n(30)).reduce((s,l)=>s+l.mm,0);case"Demain":return a.filter(s=>!s.real&&s.iso===o(1)).reduce((s,l)=>s+l.mm,0);case"7 prochains jours":return a.filter(s=>!s.real&&s.iso>t&&s.iso<=o(7)).reduce((s,l)=>s+l.mm,0);case"30 prochains jours":return a.filter(s=>!s.real&&s.iso>t&&s.iso<=o(30)).reduce((s,l)=>s+l.mm,0);case"Toute la saison":return a.filter(s=>s.real).reduce((s,l)=>s+l.mm,0);default:return a.filter(s=>s.real).reduce((s,l)=>s+l.mm,0)}}function Pa(e){switch(e){case"irrigation":return 0;case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"nrs":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function za(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const n=i==="admin",o=ye.filter(h=>h.id!==ht);Object.fromEntries(ye.map(h=>[h.id,h]));let a=null,s=null;const l={};let p="carte",d="pluie",u="7 derniers jours",m="all";function v(h){if(d==="irrigation")return qa(h,u);if(d==="irrelis"){const C=le.find(j=>j.id===h);return C?Math.round(ji(C,u)):0}const x=`${h}-${d}-${u}`;return x in l||(l[x]=Pa(d)),l[x]}function c(){return i==="new"||i==="new-adherent"?[]:n?m==="all"?le:m===String(ht)?le.filter(h=>h.orgId===ht):le.filter(h=>String(h.orgId)===m):le.filter(h=>h.orgId===1)}function r(){if(a){try{a.remove()}catch{}a=null,s=null}}function b(){r();const h=_t.find(w=>w.id===d)||_t[0],x=c(),C=n?`
      <select class="m-filter-select" id="org-filter" style="flex:0 0 44px;height:44px">
        <option value="all">Toutes les organisations</option>
        <option value="${ht}"${m===String(ht)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${o.map(w=>`<option value="${w.id}"${m===String(w.id)?" selected":""}>${w.name}</option>`).join("")}
      </select>`:"",j=[...x].sort((w,_)=>{const F=gt(w,d),A=gt(_,d);return F&&!A?-1:!F&&A?1:F?v(_.id)-v(w.id):w.name.localeCompare(_.name,"fr")}),E=j.length?`<div class="m-plain-list">${j.map(w=>{var q,S,$;const _=((q=w.latlngs)==null?void 0:q.length)>0||((S=w.shape)==null?void 0:S.type)==="polygon"||(($=w.shape)==null?void 0:$.type)==="rectangle",F=[w.crop,w.irrigation,_&&w.area?`${w.area} ha`:null].filter(Boolean).join(" · "),A=gt(w,d),I=ce.filter(k=>k.parcelIds.includes(w.id)).some(k=>k.event&&(Array.isArray(k.event)?k.event.length>0:!0));return`
            <div class="m-plain-row m-tappable" data-plot-id="${w.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${w.name}${I?' <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px"></span>':""}</span>
                ${F?`<span class="m-plain-city">${F}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                ${(()=>{const k=A&&!(d==="irrigation"&&!me.some(T=>T.plotId===w.id)),g=k?v(w.id):null;return`<span class="m-plain-data${k?"":" m-plain-na"}"${k?` style="color:${bs(d,g)}"`:""}>${k?`${g} ${h.unit}`:"—"}</span>`})()}
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
            ${_t.map(w=>`<option value="${w.id}"${w.id===d?" selected":""}>${w.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${h.aggs.map(w=>`<option${w===u?" selected":""}>${w}</option>`).join("")}
          </select>
        </div>
        ${C}
      </div>
      ${p==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${E}</div>`}`,y(),p==="carte"&&f(x,h)}function f(h,x){const C=window.L;C&&setTimeout(()=>{const j=t.querySelector("#parcel-map");if(!j)return;if(a=C.map(j,{zoomControl:!1,attributionControl:!1}),C.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(a),!h.length&&(i==="new"||i==="new-adherent")){const w=ye.find(A=>A.id===1);w&&a.setView([w.lat,w.lng],13),a.invalidateSize();const _=j.parentElement;_.style.position="relative";const F=document.createElement("div");F.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",F.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-geo-alt" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de parcelle</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Créez votre première parcelle pour commencer à suivre vos cultures.</p>
            <button id="empty-create-parcel-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Créer une parcelle</button>
          </div>`,_.appendChild(F),_.querySelector("#empty-create-parcel-btn").addEventListener("click",()=>{var A;return(A=window.showMobileAddPage)==null?void 0:A.call(window)});return}const E=[];h.forEach(w=>{var T;const _=d!=="irrigation"||me.some(P=>P.plotId===w.id),F=gt(w,d)&&_?`${v(w.id)} ${x.unit}`:"—",A=ce.filter(P=>P.parcelIds.includes(w.id)).map(P=>P.id),I=()=>ki(w,A),q=[w.lat,w.lng],S=gt(w,d)&&_,$=S?bs(d,v(w.id)):"#0172A4";w.latlngs&&w.latlngs.length>=3?(C.polygon(w.latlngs,{color:"#fff",weight:2,fillColor:$,fillOpacity:.35}).addTo(a).on("click",I),E.push(...w.latlngs)):E.push(q);const k=C.circleMarker(q,{radius:S?8:6,color:"#fff",weight:2,fillColor:$,fillOpacity:S?.95:.4}).addTo(a);if(A.some(P=>{const L=ce.find(z=>z.id===P);return(L==null?void 0:L.event)&&(Array.isArray(L.event)?L.event.length>0:!0)})&&C.marker(q,{icon:C.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(a),S){k.bindTooltip(F,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const P=z=>{if(!z)return;const D=ja($);z.style.setProperty("background",$,"important"),z.style.setProperty("color",D,"important"),z.style.setProperty("border-color",D,"important"),z.style.setProperty("box-shadow","none","important")},L=(T=k.getTooltip())==null?void 0:T.getElement();L&&P(L),k.on("tooltipopen",z=>P(z.tooltip.getElement()))}k.on("click",I)}),E.length&&(s=E,a.fitBounds(E,{padding:[32,32]})),a.invalidateSize()},0)}window.addEventListener("m-tab-change",h=>{h.detail==="parcelles"&&p==="carte"&&a&&setTimeout(()=>{a.invalidateSize(),s!=null&&s.length&&a.fitBounds(s,{padding:[32,32]})},50)});function y(){var h,x,C;t.querySelectorAll(".m-view-btn").forEach(j=>j.addEventListener("click",()=>{p=j.dataset.view,b()})),(h=t.querySelector("#metric-sel"))==null||h.addEventListener("change",j=>{var E;d=j.target.value,u=((E=_t.find(w=>w.id===d))==null?void 0:E.defaultAgg)||"",b()}),(x=t.querySelector("#agg-sel"))==null||x.addEventListener("change",j=>{u=j.target.value,b()}),(C=t.querySelector("#org-filter"))==null||C.addEventListener("change",j=>{m=j.target.value,b()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(j=>{j.addEventListener("click",()=>{const E=le.find(_=>_.id===+j.dataset.plotId);if(!E)return;const w=ce.filter(_=>_.parcelIds.includes(E.id)).map(_=>_.id);ki(E,w)})})}b()}const Me={djMin:0,djMax:18,hfSeuil:7.2},Da={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#0B3A64"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"}},Fa=4,_a={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},Ba={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"},Ha={"cuillère bloquée":{icon:"bi-droplet-fill",summary:"La cuillère du pluviomètre ne se déverse pas correctement. Les mesures de pluie peuvent être inexactes ou nulles.",causes:["Feuilles, insectes ou toiles d'araignées obstruant l'entonnoir","Corps étranger bloquant l'axe de rotation de la cuillère","Dépôts calcaires ou algues dans le mécanisme","Capteur installé hors niveau (non vertical)","Gel partiel du mécanisme en période froide"],solutions:[{n:1,title:"Inspecter l'entonnoir",desc:"Retirez toute feuille, insecte ou débris présent dans l'entonnoir. Inspectez visuellement la cuillère."},{n:2,title:"Tester la cuillère manuellement",desc:"Appuyez alternativement sur chaque compartiment de la cuillère : elle doit basculer librement d'un côté à l'autre."},{n:3,title:"Rincer à l'eau claire",desc:"Versez lentement de l'eau claire dans l'entonnoir. Évitez les détergents qui pourraient laisser des résidus affectant les mesures."},{n:4,title:"Vérifier la verticalité",desc:"Assurez-vous que le mat ou le support est bien vertical à l'aide d'un niveau à bulle. Une inclinaison de 5° peut bloquer la cuillère."},{n:5,title:"Observer les prochaines pluies",desc:"Si l'anomalie persiste après la prochaine pluie, comparez avec une station voisine. Contactez le support si nécessaire."}],diag:[{label:"Dernière mesure de pluie",hint:"Vérifiez si des pluies ont bien été comptabilisées récemment"},{label:"Station voisine",hint:"Comparez avec un autre capteur P ou P+ proche"},{label:"Historique nettoyage",hint:"Vérifiez le journal de maintenance du capteur"},{label:"Saison",hint:"Automne/hiver : vérifiez la présence de gel ou feuilles"}]},"capteur couché":{icon:"bi-phone-landscape",summary:"Le capteur a détecté une position anormale (inclinaison excessive). Les mesures météo peuvent être perturbées.",causes:["Coup de vent violent ayant renversé ou incliné le support","Choc accidentel (passage d'engins agricoles, animaux)","Support ou mat inadapté, insuffisamment ancré","Affaissement du sol après forte pluie","Neige ou givre ayant alourdi le capteur"],solutions:[{n:1,title:"Se rendre sur site",desc:"Vérifiez visuellement l'état du capteur et de son support."},{n:2,title:"Redresser et fixer le support",desc:"Remettez le mat en position verticale. Utilisez un niveau à bulle pour vérifier. Renforcez l'ancrage si nécessaire."},{n:3,title:"Vérifier l'intégrité du capteur",desc:"Inspectez le boîtier, l'antenne et les capteurs externes (anémomètre, girouette, pluvio) pour tout dommage visible."},{n:4,title:"Contrôler la qualité du signal",desc:"Après remise en place, vérifiez que les émissions reprennent normalement et que le signal est bon."},{n:5,title:"Signaler l'anomalie résolue",desc:`Utilisez le bouton "Arrêter" pour clore l'anomalie une fois le capteur en position correcte.`}],diag:[{label:"Qualité du signal",hint:"Un signal dégradé peut indiquer un problème d'antenne"},{label:"Date de l'anomalie",hint:"Correspond-elle à un épisode météo violent ?"},{label:"Type de support",hint:"Mat télescopique, piquet, fixation murale ?"},{label:"Accès terrain",hint:"Vérifiez si la parcelle est accessible (engins, conditions météo)"}]},"émissions interrompues":{icon:"bi-wifi-off",summary:"Le capteur n'émet plus de données. Aucune mesure n'a été reçue depuis un moment anormalement long.",causes:["Batterie déchargée ou défaillante","Perte de couverture réseau télécom (Sigfox / LoRa)","Obstruction physique du signal (bâtiment, relief, végétation)","Défaillance électronique interne","Exposition à l'eau ou à l'humidité excessive (joint endommagé)"],solutions:[{n:1,title:"Vérifier le niveau de batterie",desc:"Accédez aux paramètres du capteur et consultez l'indicateur de batterie. Si critique, procédez au remplacement."},{n:2,title:"Contrôler la couverture réseau",desc:"Vérifiez la carte de couverture Sigfox ou LoRa pour l'emplacement du capteur. Un déplacement de quelques mètres peut suffire."},{n:3,title:"Relancer manuellement",desc:"Sur certains modèles, un appui court sur le bouton d'activation peut forcer une tentative d'émission. Consultez la notice."},{n:4,title:"Inspecter l'étanchéité",desc:"Vérifiez l'état des joints et du boîtier. Une infiltration d'eau peut provoquer des courts-circuits."},{n:5,title:"Contacter le support",desc:"Si les étapes précédentes n'ont pas résolu le problème, le capteur peut nécessiter une réparation ou un remplacement."}],diag:[{label:"Dernière émission",hint:"Il y a combien de temps ? Heure/jour de la dernière trame reçue"},{label:"Couverture réseau",hint:"Vérifiez sur la carte de couverture opérateur"},{label:"Batterie",hint:"Niveau batterie lors de la dernière émission connue"},{label:"Météo récente",hint:"Orage, forte pluie, gel ayant pu affecter le capteur"}]},"capteur déplacé":{icon:"bi-geo-alt",summary:"Le capteur a été détecté à un emplacement différent de sa position habituelle.",causes:["Déplacement intentionnel non enregistré dans l'application","Vol ou déplacement non autorisé du capteur","Dérive GPS en cas de signal GNSS perturbé","Déplacement lors d'opérations agricoles (travaux, irrigation)"],solutions:[{n:1,title:"Vérifier la position actuelle",desc:"Rendez-vous sur site pour confirmer l'emplacement physique du capteur."},{n:2,title:"Mettre à jour la position",desc:"Si le capteur a été déplacé intentionnellement, mettez à jour sa géolocalisation dans les paramètres."},{n:3,title:"Signaler un vol",desc:"Si le capteur a disparu, contactez les autorités et le support Weenat pour signalement et désactivation."},{n:4,title:"Clore l'anomalie",desc:`Une fois la situation clarifiée, utilisez le bouton "Arrêter" pour clore l'événement.`}],diag:[{label:"Coordonnées initiales",hint:"Comparez avec les coordonnées enregistrées dans les paramètres"},{label:"Dernier passage",hint:"Qui a eu accès à la parcelle récemment ?"},{label:"Signal GPS",hint:"Un signal faible peut fausser la géolocalisation sans déplacement réel"}]}};function Ra(e,i){const t=Ha[e]||{summary:"Anomalie détectée sur ce capteur.",causes:["Cause inconnue — contactez le support pour plus d'informations."],solutions:[{n:1,title:"Contacter le support",desc:"Décrivez l'anomalie observée pour obtenir de l'aide."}]};let n="causes";function o(v,c,r){return`<button class="m-anom-tab" data-tab="${v}" style="flex:1;padding:10px 4px;background:none;border:none;border-bottom:2px solid ${r?"#0172A4":"transparent"};font-size:13px;font-weight:${r?"600":"400"};color:${r?"#0172A4":"#8e8e93"};cursor:pointer;font-family:inherit;white-space:nowrap">${c}</button>`}function a(){return`<ul style="margin:0;padding:0 0 0 18px;display:flex;flex-direction:column;gap:10px">
      ${t.causes.map(v=>`<li style="font-size:14px;color:#1c1c1e;line-height:1.5">${v}</li>`).join("")}
    </ul>`}function s(){return t.solutions.map(v=>`
      <div style="display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid #f2f2f7">
        <div style="min-width:28px;height:28px;border-radius:50%;background:#0172A4;color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${v.n}</div>
        <div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${v.title}</div>
          <div style="font-size:13px;color:#636366;line-height:1.5">${v.desc}</div>
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
      </div>`}function d(){return n==="causes"?a():n==="solutions"?s():l()}const u=xe(`
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
  `);u.querySelector("#anom-back").addEventListener("click",fe);function m(){u.querySelectorAll(".m-anom-tab").forEach(v=>{v.addEventListener("click",()=>{n=v.dataset.tab,u.querySelector("#anom-tabs-bar").innerHTML=p(),u.querySelector("#anom-content").innerHTML=d(),m()})})}m()}const Li={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Oa={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"};function zi(e){return e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[30,60]:e==="CHP-60/90"?[45,90]:null}function hs(e,i){const t=Li[e.model]?`${Li[e.model]} · ${e.model}`:e.model,n=zi(e.model)&&e.depth!=null?`${e.depth} cm`:null;return[t,n,i].filter(Boolean).join(" · ")}const At={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function pn(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(n,o)=>{const a=o/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,s))})}const mn={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Na(e,i,t,n,o,a=20){const s=mn[e]||10080,l=new Date,p=v=>e==="1d"||e==="hier"?`${String(v.getHours()).padStart(2,"0")}h`:e==="365d"?v.toLocaleDateString("fr-FR",{month:"short"}):`${String(v.getDate()).padStart(2,"0")}/${String(v.getMonth()+1).padStart(2,"0")}`,d=4,u=i-t-n,m=o-a;return Array.from({length:d+1},(v,c)=>{const r=c/d,b=new Date(l.getTime()-(1-r)*s*6e4),f=(t+r*u).toFixed(1),y=c===0?"start":c===d?"end":"middle";return[`<line x1="${f}" y1="${m}" x2="${f}" y2="${m+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${f}" y="${o-3}" text-anchor="${y}" font-size="9" fill="#8e8e93" font-family="-apple-system">${p(b)}</text>`].join("")}).join("")}function Va(e,i,t,n="7d",o=""){const a=vn[n]||60,s=pn(e,a),l=320,p=100,d=34,u=6,m=10,v=20,c=l-d-u,r=p-m-v,b=t?0:Math.min(...s),f=Math.max(...s,b+.001),y=f-b,h=S=>d+S/(s.length-1)*c,x=S=>m+r-(S-b)/y*r,C=`g${Math.random().toString(36).slice(2,8)}`,j=[0,.5,1].map(S=>{const $=b+S*y,k=m+r-S*r;return`<text x="${d-3}" y="${(k+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${$<10?$.toFixed(1):Math.round($)}</text>`}).join(""),E=[.25,.5,.75].map(S=>`<line x1="${d}" y1="${(m+r-S*r).toFixed(1)}" x2="${l-u}" y2="${(m+r-S*r).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),w=`<line x1="${d}" y1="${m+r}" x2="${l-u}" y2="${m+r}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,_=Na(n,l,d,u,p);if(t){const S=c/s.length*.7;return`<svg viewBox="0 0 ${l} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      ${j}${E}${w}
      ${s.map(($,k)=>{const g=($-b)/y*r,T=m+r-g;return`<rect x="${(h(k)-S/2).toFixed(1)}" y="${T.toFixed(1)}" width="${S.toFixed(1)}" height="${g.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${_}
    </svg>`}const F=s.map((S,$)=>[h($),x(S)]),A=F.map(([S,$],k)=>`${k?"L":"M"}${S.toFixed(1)},${$.toFixed(1)}`).join(" "),I=`${A} L${h(s.length-1).toFixed(1)},${(m+r).toFixed(1)} L${d},${(m+r).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(S=>+S.toFixed(2)),minV:+b.toFixed(2),maxV:+f.toFixed(2)}))}" data-color="${i}" data-unit="${o}" style="position:relative">
    <svg viewBox="0 0 ${l} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      <defs><linearGradient id="${C}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${j}${E}${w}
      <path d="${I}" fill="url(#${C})"/>
      <path d="${A}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${F.map(([S,$])=>`<circle cx="${S.toFixed(1)}" cy="${$.toFixed(1)}" r="2" fill="${i}"/>`).join("")}
      ${_}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Ja(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function Wa(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,n=e.querySelector(".m-chart-tip"),o=e.querySelector(".m-chart-crosshair"),a=e.dataset.color||"#0172A4",s=e.dataset.unit||"";function l(d){const u=e.getBoundingClientRect(),m=Math.max(0,Math.min(1,(d-u.left)/u.width)),v=Math.round(m*(t.length-1)),c=t[v],r=m*100,b=(c<10?c.toFixed(1):String(Math.round(c)))+(s?` ${s}`:""),f=Ja(a);o.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${r}%;width:1px;background:${a};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(r,75)}%;background:${a};color:${f};border:1.5px solid ${f};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=b}function p(){o.style.display="none",n.style.display="none"}e.addEventListener("pointermove",d=>{d.preventDefault(),l(d.clientX)}),e.addEventListener("pointerdown",d=>l(d.clientX)),e.addEventListener("pointerup",p),e.addEventListener("pointerleave",p),e.style.cursor="crosshair"}const vn={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function Ga(e,i,t){if(!t)return"";const n=vn[i]||60,a=(mn[i]||10080)/(n*60),s=pn(e,n);let l=[];if(t==="temp"){const p=s.reduce((u,m)=>u+Math.max(0,Math.min(m,Me.djMax)-Me.djMin),0)*(a/24),d=s.filter(u=>u<Me.hfSeuil).length*a;l=[{label:"Degrés jours",val:`${Math.round(p)} DJ`,metricId:"dj",thresholdText:`${Me.djMin}°C → ${Me.djMax}°C`},{label:"Heures de froid",val:`${Math.round(d)} h`,metricId:"hf",thresholdText:`< ${Me.hfSeuil}°C`}]}else if(t==="pluie")l=[{label:"Cumul de pluie",val:`${s.reduce((d,u)=>d+u,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const p=s.filter(d=>d>120).length*a;l=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(p)} h`,metricId:"rayo"}]}else if(t==="hws"){const p=s.filter(d=>d>50).length*a;l=[{label:"Cumul d'heures d'humectation",val:`${Math.round(p)} h`,metricId:"humec"}]}return l.length?`<div class="m-chart-cumuls">${l.map(p=>{const d=p.metricId==="dj"||p.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${p.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
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
    </div>`}).join("")}</div>`:""}function Ua(e,i="7d",t="1h"){const n=At[e.model]||[];if(!n.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const o={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},a={temp:"temperature"},s=new Set(["tseche","thumide"]),l=n.map(u=>{const m=o[u.id]||u.id,v=Ga(u.id,i,u.cumulsType),c=s.has(u.id)?"":`<button class="m-msr-add-btn" data-msr-metric-id="${a[u.id]||u.id}" data-msr-label="${u.label}" data-msr-unit="${u.unit||""}" data-msr-color="${u.color}" data-msr-period="${i}" data-msr-step="${t}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`;return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${u.color}">${u.label}</span>
          ${c}
        </div>
        ${Va(u.id,u.color,u.cumul,i,u.unit||"")}
        <div class="m-chart-details-link" data-metric-id="${m}">Voir détails →</div>
        ${v}
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
    <div class="m-detail-section">${l}</div>`}function Ya(e){var p;const i=(e.parcelIds||[]).map(d=>le.find(u=>u.id===d)).filter(Boolean),t=i[0]||null,n=t?ye.find(d=>d.id===t.orgId):null,o=e.networkQuality||0,a=o>70?"#30d158":o>40?"#ff9f0a":"#ff3b30",s=e.event?Array.isArray(e.event)?e.event:[e.event]:[],l=i.map((d,u)=>`<div class="m-list-row${u===i.length-1&&i.length>0,""}" data-unlink-plot="${d.id}">
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
          <span class="m-list-row-value">${Oa[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${Li[e.model]||e.model}</span>
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

      ${(()=>{const d=zi(e.model);return d?`
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
        ${s.length?s.map((d,u)=>{const m=d.toLowerCase().includes("déplacé");return`<div class="m-list-row m-ev-row" data-ev-idx="${u}" style="justify-content:space-between;gap:10px;cursor:pointer">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${d}</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
                  ${m?`<button class="ev-stop-btn" data-ev-idx="${u}" style="background:rgba(255,59,48,.1);border:1px solid #ff3b30;border-radius:8px;padding:5px 10px;font-size:12px;color:#ff3b30;font-family:inherit;cursor:pointer;white-space:nowrap">Arrêter</button>`:""}
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
    </div>`}function Ci(e,i="donnees",t="admin"){var c;e.parcelIds||(e.parcelIds=[]);const n=e.parcelIds.length?le.find(r=>e.parcelIds.includes(r.id)):null;let o=i,a="7d",s="1h",l=!1;const p=n&&((c=ye.find(r=>r.id===n.orgId))==null?void 0:c.ville)||"",d=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${hs(e,p)}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres${e.event&&(!Array.isArray(e.event)||e.event.length>0)?' <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px;margin-bottom:1px;flex-shrink:0"></span>':""}</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function u(){const r=d.querySelector("#detail-content");o==="donnees"&&(r.innerHTML=Ua(e,a,s)),o==="params"&&(r.innerHTML=Ya(e),m()),v()}function m(){const r=window.L,b=e.parcelIds.length?le.find(f=>e.parcelIds.includes(f.id)):null;!r||!b||setTimeout(()=>{const f=d.querySelector("#sensor-minimap");if(!f)return;const y=r.map(f,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});r.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(y),y.setView([b.lat,b.lng],15),r.circleMarker([b.lat,b.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(y)},50)}function v(){var r,b,f,y;(r=d.querySelector(".m-period-sel"))==null||r.addEventListener("change",h=>{a=h.target.value,u()}),(b=d.querySelector(".m-step-sel"))==null||b.addEventListener("change",h=>{s=h.target.value,u()}),d.querySelectorAll(".m-chart-svg-wrap").forEach(h=>Wa(h)),d.querySelectorAll(".m-chart-details-link[data-metric-id]").forEach(h=>{h.addEventListener("click",()=>{ge(()=>import("./chart-fullscreen-B4TIeE90.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(x=>x.initChartFullscreen({sensor:e,metricId:h.dataset.metricId,backLabel:"Retour"}))})}),d.querySelectorAll(".m-msr-add-btn").forEach(h=>{h.addEventListener("click",()=>{const x=h.dataset.msrMetricId,C=`s-${e.id}`,j=`${e.model} ${e.serial}`,E=h.dataset.msrPeriod,w=h.dataset.msrStep,_=Zs({subjectKey:C,subjectLabel:j,metricId:x,metricLabel:h.dataset.msrLabel,unit:h.dataset.msrUnit||"",period:E,periodLabel:_a[E]||E,step:w,stepLabel:Ba[w]||w,color:h.dataset.msrColor});if(_==="max"){Z(`Maximum de mesures atteint (${Fa})`);return}if(_==="dup"){Z("Cette mesure est déjà dans vos favoris");return}Z("Mesure ajoutée au tableau de bord")})}),d.addEventListener("click",h=>{const x=h.target.closest(".m-cumul-add-btn");if(x){const j=x.dataset.cumulMetricId,E=x.dataset.cumulVal,w=Da[j];if(!w)return;const _=`${e.model} ${e.serial}`,F=document.createElement("div");F.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${w.metricLabel}</strong> (<em>${E}</em>) au tableau de bord du capteur <strong>${e.serial}</strong> ?</div>`,ue({title:"Tableau de bord",body:F,doneLabel:"Ajouter",onDone:()=>{const A=j==="hf"?{cold:Me.hfSeuil}:j==="dj"?{low:Me.djMin,high:Me.djMax}:null;if(Xs({metricId:j,...w,subjectKey:`s-${e.id}`,subjectLabel:_,fromDate:`${new Date().getFullYear()}-01-01`,value:E,thresholds:A})==="max"){Z("Maximum de cumuls atteint (5)");return}Z("Cumul ajouté au tableau de bord")}});return}const C=h.target.closest(".m-cumul-edit-btn");if(C){const j=C.dataset.cumulMetricId,E=document.createElement("div");j==="hf"?(E.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Me.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:E,doneLabel:"Appliquer",onDone:()=>{var w;Me.hfSeuil=+(((w=E.querySelector("#edit-hf-seuil"))==null?void 0:w.value)??7.2),u()}})):j==="dj"&&(E.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Me.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Me.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:E,doneLabel:"Appliquer",onDone:()=>{var w,_;Me.djMin=+(((w=E.querySelector("#edit-dj-min"))==null?void 0:w.value)??0),Me.djMax=+(((_=E.querySelector("#edit-dj-max"))==null?void 0:_.value)??18),u()}}))}}),d.querySelectorAll(".m-list-row[data-action]").forEach(h=>{h.addEventListener("click",()=>{const x=h.dataset.action;if(x==="add-maintenance")xs(e,{openForm:!0});else if(x==="add-plot")Ka(e,t,u);else if(x==="delete"){const C=le.find(j=>{var E;return(E=e.parcelIds)==null?void 0:E.includes(j.id)});Jt({title:"Retirer de l'exploitation",message:`Retirer <strong>${e.model} ${e.serial}</strong> de l'exploitation ?${C?`<br><br>Parcelle liée : <strong>${C.name}</strong>.`:""}<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>Z("Capteur retiré de l'exploitation (fonctionnalité à venir)")})}else Z("Fonctionnalité à venir")})}),d.querySelectorAll(".ev-stop-btn").forEach(h=>{h.addEventListener("click",x=>{x.stopPropagation();const C=+h.dataset.evIdx;Array.isArray(e.event)?(e.event=e.event.filter((j,E)=>E!==C),e.event.length||(e.event=null)):e.event=null,u()})}),d.querySelectorAll(".m-ev-row").forEach(h=>{h.addEventListener("click",x=>{if(x.target.closest(".ev-stop-btn"))return;const C=+h.dataset.evIdx,j=e.event?Array.isArray(e.event)?e.event:[e.event]:[];j[C]&&Ra(j[C],e)})}),d.querySelectorAll("[data-unlink-plot-btn]").forEach(h=>{h.addEventListener("click",x=>{x.stopPropagation();const C=+h.dataset.unlinkPlotBtn,j=le.find(E=>E.id===C);Jt({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${(j==null?void 0:j.name)||"la parcelle"}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(E=>E!==C),Z(`Délié de ${(j==null?void 0:j.name)||"la parcelle"}`),u()}})})}),(f=d.querySelector("#sensor-name-input"))==null||f.addEventListener("change",h=>{const x=h.target.value.trim();try{const j=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};x?j[e.id]=x:delete j[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(j))}catch{}const C=d.querySelector(".m-detail-title");C&&(C.textContent=x||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))}),(y=d.querySelector("#chp-depth-save"))==null||y.addEventListener("click",()=>{const h=d.querySelector("#chp-depth-input"),x=zi(e.model);if(!h||!x)return;let C=parseInt(h.value);if(isNaN(C))return;C=Math.max(x[0],Math.min(x[1],C)),h.value=C,e.depth=C;const j=d.querySelector(".m-detail-subtitle");j&&(j.textContent=hs(e,p)),Z(`Profondeur enregistrée : ${C} cm`)})}d.querySelectorAll(".m-detail-tab").forEach(r=>{r.addEventListener("click",()=>{d.querySelectorAll(".m-detail-tab").forEach(b=>b.classList.remove("active")),r.classList.add("active"),o=r.dataset.view,u()})}),d.querySelector(".m-detail-back").addEventListener("click",fe),d.querySelector("#d-star").addEventListener("click",()=>{l=!l;const r=d.querySelector("#d-star");r.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",r.style.color=l?"#f5c842":"",Z(l?"Ajouté aux favoris":"Retiré des favoris")}),d.querySelector("#d-journal").addEventListener("click",()=>xs(e)),d.querySelector("#d-plus").addEventListener("click",()=>{var r;return(r=window.showMobileAddPage)==null?void 0:r.call(window)}),u()}const fn=e=>`sensor-journal-${e}`,bn=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}],gs=["Capteur légèrement déplacé — redressé","Antenne réorientée pour améliorer la réception","Végétation haute autour du capteur — dégagée","Capteur incliné après un coup de vent — stabilisé"],ys=["antenne","bocal","lacet","cuillere"];function Ai(e){try{const o=localStorage.getItem(fn(e));if(o)return JSON.parse(o)}catch{}const i=ys[e%ys.length],t=(o,a)=>{const s=new Date(o+"T00:00:00");return s.setDate(s.getDate()+a),s.toISOString().slice(0,10)},n=e%8;return[{id:1,type:"installation",date:t("2023-01-15",n),user:"Technicien Weenat",role:"conseiller",texte:""},{id:2,type:i,date:t("2023-06-10",n),user:"Technicien Weenat",role:"conseiller",texte:""},{id:3,type:"note",date:t("2023-11-02",n),user:"Jean Dupont",role:"membre",texte:gs[e%gs.length]}]}function hn(e,i){localStorage.setItem(fn(e),JSON.stringify(i))}function Ka(e,i,t){const n=i==="adherent"?1:null,o=n?le.filter(d=>d.orgId===n):le.filter(d=>d.orgId!==100),a=new Set((At[e.model]||[]).map(d=>d.id)),s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function l(d=""){const u=d.toLowerCase(),m=(u?o.filter(c=>c.name.toLowerCase().includes(u)||(c.crop||"").toLowerCase().includes(u)):o).slice().sort((c,r)=>c.name.localeCompare(r.name,"fr")),v=s.querySelector("#plot-list");if(!m.length){v.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}v.innerHTML="",m.forEach((c,r)=>{const b=e.parcelIds.includes(c.id),f=r===m.length-1,y=document.createElement("div");y.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${f?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,y.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${c.name}</span>
          ${c.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${c.crop}</span>`:""}
        </span>
        ${b?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,y.addEventListener("click",()=>{if(b)Jt({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${c.name}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(h=>h!==c.id),Z(`Délié de ${c.name}`),l(d),t()}});else{const h=ce.find(x=>x.id!==e.id&&x.parcelIds.includes(c.id)&&(At[x.model]||[]).some(C=>a.has(C.id)));h?(p.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{p.remove(),Za(e,c,h,t)},280)):(e.parcelIds=[...e.parcelIds,c.id],Z(`Lié à ${c.name}`),l(d),t())}}),v.appendChild(y)})}l();const p=ue({title:"Parcelles liées",body:s,doneLabel:"Fermer",onDone:()=>{t()}});s.querySelector("#plot-search").addEventListener("input",d=>l(d.target.value))}function Za(e,i,t,n){const o=(At[t.model]||[]).filter(l=>(At[e.model]||[]).some(p=>p.id===l.id)).map(l=>l.label).join(", "),a=document.createElement("div");a.innerHTML=`
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
    <div style="height:6px"></div>`;const s=ue({title:"Conflit de métrique",body:a,doneLabel:"Annuler",onDone:()=>{}});a.querySelector("#keep-existing").addEventListener("click",()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),Z("Liaison annulée")},280)}),a.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(l=>l!==i.id),e.parcelIds=[...e.parcelIds,i.id],s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),Z(`Lié à ${i.name}`),n()},280)})}function xs(e,i={}){const t=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",fe);const n=Object.fromEntries(bn.map(a=>[a.id,a]));function o(){var u;const a=t.querySelector("#sjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(m=>m.linkedType==="sensor"&&m.linkedId===e.id).map((m,v)=>({id:`dash-${v}`,type:"note",date:m.date,texte:m.text,user:m.auteur,_fromDashboard:!0})),l=[...Ai(e.id),...s].sort((m,v)=>v.date.localeCompare(m.date)),p=m=>{const[v,c,r]=m.split("-");return`${r}/${c}/${v}`};let d=`
      <div style="padding:12px 16px 8px">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="sjrn-add-btn">
          <i class="bi bi-plus-lg"></i> Ajouter une entrée
        </button>
      </div>
    `;l.length===0?d+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(d+='<div class="m-jrn-timeline">',l.forEach((m,v)=>{const c=n[m.type]||{label:m.type,icon:"bi-circle",color:"#8e8e93"},r=v===l.length-1,b=!!m._fromDashboard;d+=`
          <div class="m-jrn-entry" data-id="${m.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${c.color}18;color:${c.color};border-color:${c.color}40">
                <i class="bi ${c.icon}"></i>
              </div>
              ${r?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${p(m.date)}</span>
                <span class="journal-type-badge journal-type-badge--maintenance">${c.label}</span>
                ${b?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${m.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${m.texte?`<div class="m-jrn-texte">${m.texte}</div>`:""}
              ${m.user?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${m.user}${Xa(m.role)}</div>`:""}
            </div>
          </div>`}),d+="</div>"),a.innerHTML=d,(u=a.querySelector("#sjrn-add-btn"))==null||u.addEventListener("click",()=>$s(e.id,o)),a.querySelectorAll(".m-jrn-del").forEach(m=>{m.addEventListener("click",()=>{const v=parseInt(m.dataset.id);hn(e.id,Ai(e.id).filter(c=>c.id!==v)),o()})})}o(),i.openForm&&$s(e.id,o)}function Xa(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}function $s(e,i){const t=new Date().toISOString().slice(0,10),n=document.createElement("div");n.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${bn.map(o=>`<option value="${o.id}">${o.label}</option>`).join("")}
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
    </div>`,ue({title:"Opération de maintenance",body:n,doneLabel:"Enregistrer",onDone:()=>{const o=n.querySelector("#sjf-type").value,a=n.querySelector("#sjf-date").value||t,s=n.querySelector("#sjf-user").value.trim()||"Jean Dupont",l=localStorage.getItem("menuRole")==="admin-reseau"?"conseiller":"membre",p=n.querySelector("#sjf-texte").value.trim();hn(e,[{id:Date.now(),type:o,date:a,user:s,role:l,texte:p},...Ai(e)]),i()}}),setTimeout(()=>{var o;return(o=n.querySelector("#sjf-texte"))==null?void 0:o.focus()},350)}const Mi=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:Ci},Symbol.toStringTag,{value:"Module"})),yt=100,ui=1,pi=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Qa={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},el={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function Bt(e,i){return(el[e]||[]).includes(i)}function tl(e){return Qa[e]||e}function il(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const Ht=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function sl(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function ws(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"pothydr":return i<80?"#E2EAC7":i<150?"#A6C157":"#7D9537";case"teneur":return i<15?"#F7D2A1":i<30?"#ED9A2C":"#BC7210";case"temp_sol":return i<8?"#D9C6BF":i<18?"#795548":"#484646";case"temp_sche":return i<0?"#9DECDF":i<10?"#23B19B":"#177365";case"temp_hum":return i<0?"#D2DEFA":i<10?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function nl(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function ol(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const n=i==="admin",o=ye.filter(E=>E.id!==yt),a=Object.fromEntries(le.map(E=>[E.id,E])),s=Object.fromEntries(ye.map(E=>[E.id,E]));let l=null,p=null;const d={};let u="carte",m="pluie",v="7 derniers jours",c="all";function r(E){const w=`${E}-${m}-${v}`;return w in d||(d[w]=nl(m)),d[w]}function b(){if(i==="new"||i==="new-adherent")return[];if(n){if(c==="anomalies")return ce.filter(A=>A.event&&(Array.isArray(A.event)?A.event.length>0:!0));if(c==="all")return ce;if(c===String(yt)){const A=new Set(le.filter(I=>I.orgId===yt).map(I=>I.id));return ce.filter(I=>I.parcelIds.some(q=>A.has(q)))}const F=new Set(le.filter(A=>String(A.orgId)===c).map(A=>A.id));return ce.filter(A=>A.parcelIds.some(I=>F.has(I)))}const E=new Set(le.filter(F=>F.orgId===ui).map(F=>F.id)),w=ce.filter(F=>F.parcelIds.some(A=>E.has(A))),_=ce.filter(F=>!F.parcelIds.some(A=>E.has(A))&&pi.includes(F.model));return c==="mine"?w:c==="network"?_:[...w,..._]}function f(E){const w=E.parcelIds.length?a[E.parcelIds[0]]:null;if(!w)return null;const _=(E.id*7919%1e3-500)/1e6,F=(E.id*6271%1e3-500)/1e6;return{lat:w.lat+_,lng:w.lng+F,name:w.name}}function y(E){var _,F;const w=E.parcelIds.length?a[E.parcelIds[0]]:null;return(w?(_=s[w.orgId])==null?void 0:_.ville:null)||((F=s[E.orgId])==null?void 0:F.ville)||null}function h(){if(l){try{l.remove()}catch{}l=null,p=null}}function x(){h();const E=Ht.find(q=>q.id===m)||Ht[0],w=b();let _;const F=ce.some(q=>q.event&&(Array.isArray(q.event)?q.event.length>0:!0));if(n)_=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${c==="all"?" selected":""}>Toutes les organisations</option>
            ${F?`<option value="anomalies"${c==="anomalies"?" selected":""}>⚠ Anomalies capteurs</option>`:""}
            <option value="${yt}"${c===String(yt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
            ${o.map(q=>`<option value="${q.id}"${c===String(q.id)?" selected":""}>${q.name}</option>`).join("")}
          </select>
        </div>`;else{const q=ye.find(S=>S.id===ui);_=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${c==="all"?" selected":""}>Tous les capteurs du réseau</option>
            <option value="mine"${c==="mine"?" selected":""}>${(q==null?void 0:q.name)||"Mon exploitation"} uniquement</option>
          </select>
        </div>`}const A=[...w].sort((q,S)=>{const $=Bt(q.model,m),k=Bt(S.model,m);return $&&!k?-1:!$&&k?1:$?r(S.id)-r(q.id):0}),I=A.length?`<div class="m-plain-list">${A.map(q=>{const S=pi.includes(q.model),$=Bt(q.model,m),k=$?r(q.id):null,g=$?`<span class="m-sensor-val" style="color:${ws(m,k)}">${k} ${E.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>',T=q.event&&(Array.isArray(q.event)?q.event.length>0:!0);return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${q.id}">
              <div class="m-sensor-icon" style="position:relative;background:${S?"#0172A420":"#5b8dd920"};color:${S?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
                ${T?'<span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff"></span>':""}
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${tl(q.model)} - ${q.model}</span>
                <span class="m-sensor-sub">${[y(q),il(q)].filter(Boolean).join(" - ")}</span>
                ${T?`<span style="font-size:11px;color:#ff3b30;font-weight:500"><i class="bi bi-exclamation-triangle-fill"></i> ${Array.isArray(q.event)?q.event[0]:q.event}</span>`:""}
              </div>
              ${g}
            </div>`}).join("")}</div>`:i==="new"||i==="new-adherent"?`<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Vous n'avez pas encore de capteur</p><button onclick="window.showMobileAddPage?.()" style="margin-top:8px;background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer">Ajouter un capteur</button></div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';t.innerHTML=`
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
            ${Ht.map(q=>`<option value="${q.id}"${q.id===m?" selected":""}>${q.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${E.aggs.map(q=>`<option${q===v?" selected":""}>${q}</option>`).join("")}
          </select>
        </div>
        ${_}
      </div>
      ${u==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${I}</div>`}`,j(),u==="carte"&&C(w,E)}function C(E,w){const _=window.L;_&&setTimeout(()=>{const F=t.querySelector("#sensor-map");if(!F)return;if(l=_.map(F,{zoomControl:!1,attributionControl:!1}),_.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l),!E.length&&(i==="new"||i==="new-adherent")){const I=ye.find($=>$.id===ui);I&&l.setView([I.lat,I.lng],13),l.invalidateSize();const q=F.parentElement;q.style.position="relative";const S=document.createElement("div");S.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",S.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-broadcast" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de capteur</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Ajoutez votre premier capteur pour commencer à collecter des données.</p>
            <button id="empty-add-sensor-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Ajouter un capteur</button>
          </div>`,q.appendChild(S),q.querySelector("#empty-add-sensor-btn").addEventListener("click",()=>{var $;return($=window.showMobileAddPage)==null?void 0:$.call(window)});return}const A=[];E.forEach(I=>{var T;const q=f(I);if(!q)return;const S=Bt(I.model,m),$=pi.includes(I.model),k=S?ws(m,r(I.id)):$?"#0172A4":"#5b8dd9",g=_.circleMarker([q.lat,q.lng],{radius:S?10:7,color:"#fff",weight:2,fillColor:k,fillOpacity:S?.95:.45}).addTo(l);if(S){g.bindTooltip(`${r(I.id)} ${w.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const P=z=>{if(!z)return;const D=sl(k);z.style.setProperty("background",k,"important"),z.style.setProperty("color",D,"important"),z.style.setProperty("border-color",D,"important"),z.style.setProperty("box-shadow","none","important")},L=(T=g.getTooltip())==null?void 0:T.getElement();L&&P(L),g.on("tooltipopen",z=>P(z.tooltip.getElement()))}g.on("click",()=>Ci(I,"donnees",i)),I.event&&(!Array.isArray(I.event)||I.event.length>0)&&_.marker([q.lat,q.lng],{icon:_.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(l),A.push([q.lat,q.lng])}),A.length&&(p=A,l.fitBounds(A,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",E=>{E.detail==="capteurs"&&(x(),u==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),p!=null&&p.length&&l.fitBounds(p,{padding:[32,32]})},50))});function j(){var E,w,_;t.querySelectorAll(".m-view-btn").forEach(F=>F.addEventListener("click",()=>{u=F.dataset.view,x()})),(E=t.querySelector("#metric-sel"))==null||E.addEventListener("change",F=>{var A;m=F.target.value,v=((A=Ht.find(I=>I.id===m))==null?void 0:A.defaultAgg)||"",x()}),(w=t.querySelector("#agg-sel"))==null||w.addEventListener("change",F=>{v=F.target.value,x()}),(_=t.querySelector("#org-filter"))==null||_.addEventListener("change",F=>{c=F.target.value,x()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(F=>{F.addEventListener("click",()=>{const A=ce.find(I=>I.id===+F.dataset.sensorId);A&&Ci(A,"donnees",i)})})}x(),window.addEventListener("weenat-sensor-renamed",()=>{u==="liste"&&x()})}const al=["Essentiel","Plus","Expert"],ll=["Administrateur","Agent","Lecteur"],Ss=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function rl(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function cl(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function ks({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function Rt(e){if(!e)return"—";const[i,t,n]=e.split("-");return`${n}/${t}/${i}`}function Es(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let n=11;n>=0;n--){const o=new Date(i.getFullYear(),i.getMonth()-n,1),a=o.getFullYear(),s=String(o.getMonth()+1).padStart(2,"0"),l=n>0?n===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${a}-${s}`,dateEmission:`${a}-${s}-01`,montant:o.getMonth()===11?1980:t[n%t.length],statut:l})}return e.reverse()}function dl(e,i){var S;if(!e)return{};const t=i==="admin",n=i==="new-member-admin"||i==="new-member-agent"||i==="new-member-reader",o=i!=="new-member-reader",a=t?[{id:"100",name:"Breiz'Agri Conseil"},{id:"42",name:"Exploitation Dupont"}]:n?[]:[{id:"1",name:"Ferme du Bocage"},{id:"dutilleul",name:"Exploitation Dutilleul"}];let s=((S=a[0])==null?void 0:S.id)??null;const l=ye.find($=>$.id===(t?ti:Fi));if(!l)return{};const d=(t?ii.filter($=>{var k;return!((k=$.orgIds)!=null&&k.length)||$.orgIds.includes(ti)}):ii.filter($=>{var k;return(k=$.orgIds)==null?void 0:k.includes(Fi)})).filter($=>$.statut!=="inactif").map($=>({...$})),u=ye.filter($=>$.id!==ti&&$.statut!=="inactif").length,m=cl(l.adresse||""),v={rue:"",cp:"",ville:""},c={name:l.name,siret:l.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:m,adresseLivrai:v,copieFactures:l.copieFactures||"",pays:"France",markerLat:l.lat||48.117,markerLng:l.lng||-1.678,plan:l.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":l.codeAdherent||"CTR-2022-00418",dateAdhesion:l.dateAdhesion||"2022-03-15",licencesMembres:t?ii.length:3,licencesAdherents:t?u:null,licencesIntegrations:t?27:2}};let r=null,b=null;function f(){if(!b)return;const $=e.querySelector(`#${b}`);if(!$)return;if(r){try{r.remove()}catch{}r=null}const k=window.L;k&&(r=k.map($,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),k.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(r),r.setView([c.markerLat,c.markerLng],14),k.marker([c.markerLat,c.markerLng],{draggable:!1}).addTo(r),setTimeout(()=>r==null?void 0:r.invalidateSize(),50))}function y(){if(b=`expl-map-${Math.random().toString(36).slice(2,8)}`,r){try{r.remove()}catch{}r=null}const $=ks(c.adresseFactu)||"—",k=ks(c.adresseLivrai),g=t?Es():[],T=g.slice(0,3),P=g.length>3,L=d.slice(0,3),z=d.length>3;function D(M,V){const ie=M.statut==="payée"?"#30d158":"#ff9f0a",Q=M.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${V?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${M.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${M.numero}</span>
            <span class="m-list-row-sub">${Rt(M.dateEmission)} · ${M.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${ie};flex-shrink:0;margin-right:4px">${Q}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}e.innerHTML=`
      ${a.length>1?`
      <div style="padding:12px 16px 4px">
        <select id="org-selector" style="width:100%;padding:10px 14px;border-radius:10px;border:1.5px solid #e5e5ea;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e;cursor:pointer">
          ${a.map(M=>`<option value="${M.id}"${M.id===s?" selected":""}>${M.name}</option>`).join("")}
        </select>
      </div>
      `:""}
      <div class="m-list-section-header" style="margin-top:16px">Exploitation</div>
      <div class="m-list">
        <div class="m-list-row" data-action="name">
          <span class="m-list-row-label">Nom</span>
          <span class="m-list-row-value">${c.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="metier" style="align-items:flex-start;padding-top:12px;padding-bottom:12px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Métiers</span>
            ${c.metiers.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">${c.metiers.map(M=>`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:4px;padding:2px 8px;font-size:12px;font-weight:500">${M}</span>`).join("")}</div>`:'<div style="font-size:13px;color:#8e8e93;margin-top:4px">—</div>'}
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Adresses</div>
      <div class="m-list">
        <div class="m-list-row" data-action="adresse-factu">
          <span class="m-list-row-label">Facturation</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${$}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${k||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="pays">
          <span class="m-list-row-label">Pays</span>
          <span class="m-list-row-value">${c.pays}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="siret">
          <span class="m-list-row-label">SIRET</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:12px">${c.siret||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="copie-factures" style="align-items:flex-start;padding-top:12px;padding-bottom:12px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Envoyer une copie des factures</span>
            <div style="font-size:12px;color:#8e8e93;margin-top:4px;line-height:1.4">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</div>
            <div style="font-size:13px;color:${c.copieFactures?"#1c1c1e":"#8e8e93"};margin-top:6px">${c.copieFactures||"Aucune adresse renseignée"}</div>
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
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${c.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Rt(c.contrat.dateAdhesion)}</span>
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
        <div class="m-list-row m-list-row--last" ${t?'data-action="plan"':""}>
          <span class="m-list-row-label">Abonnement</span>
          <span class="m-list-row-value" style="color:#0172A4;font-weight:600">${c.plan}</span>
          ${t?'<i class="bi bi-chevron-right m-list-chevron"></i>':""}
        </div>
      </div>

      ${t?`
      <div class="m-list-section-header">Factures</div>
      <div class="m-list">
        ${T.map((M,V)=>D(M,!P&&V===T.length-1)).join("")}
        ${P?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${g.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${d.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${d.length?[...L.map((M,V)=>`
            <div class="m-list-row${!z&&V===L.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${V}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${M.prenom} ${M.nom}</span>
                <span class="m-list-row-sub">${M.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),z?`
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
          ${Ss.slice(0,5).map((M,V)=>`
            <div class="m-list-row${V===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${rl(M.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${M.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${M.distance} km · ${M.capteurs} capteurs · ${M.parcelles} parcelles</div>
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
            <span class="m-list-row-value">${Rt("2026-06-08")}</span>
          </div>
        </div>
        <div style="padding:8px 20px 0">
          <button id="btn-use-default-exploit" class="m-btn m-btn--outline" style="margin-bottom:20px">Utiliser cette exploitation</button>
        </div>
      </div>
      `:""}
      <div style="height:32px"></div>`,h()}function h(){var $,k,g,T;($=e.querySelector("#org-selector"))==null||$.addEventListener("change",P=>{s=P.target.value;const L=a.find(z=>z.id===s);L&&(c.name=L.name,y())}),e.querySelectorAll(".m-list-row[data-action]").forEach(P=>{P.addEventListener("click",()=>{if(o)switch(P.dataset.action){case"name":x("Nom de l'exploitation",c.name,L=>{c.name=L,y()});break;case"siret":x("SIRET",c.siret,L=>{c.siret=L,y()});break;case"metier":E();break;case"adresse-factu":j("Adresse de facturation",c.adresseFactu,L=>{c.adresseFactu=L,y()});break;case"adresse-livrai":j("Adresse de livraison",c.adresseLivrai,L=>{c.adresseLivrai=L,y()});break;case"pays":x("Pays",c.pays,L=>{c.pays=L,y()});break;case"copie-factures":C(c.copieFactures,L=>{c.copieFactures=L,l.copieFactures=L,y()});break;case"plan":w("Abonnement",al,c.plan,L=>{c.plan=L,y()});break;case"facture":Z(`PDF ${P.dataset.factureId} téléchargé`);break;case"voir-factures":A();break;case"voir-membres":F();break}})}),e.querySelectorAll("[data-member-idx]").forEach(P=>{P.addEventListener("click",()=>_(+P.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(P=>{P.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach(z=>{const D=z===P;z.style.background=D?"#fff":"transparent",z.style.color=D?"#000":"#8e8e93"});const L=P.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=L==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=L==="independante"?"":"none"})}),(k=e.querySelector("#btn-ajouter-membre"))==null||k.addEventListener("click",I),(g=e.querySelector("#btn-quitter-reseau"))==null||g.addEventListener("click",()=>{const P=document.createElement("div");P.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,ue({title:"Quitter le réseau ?",body:P,doneLabel:"Confirmer",onDone:()=>Z("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(P=>{P.addEventListener("click",()=>{const L=Ss[+P.dataset.netIdx];Z(`Demande envoyée à ${L.name}`)})}),e.querySelectorAll(".m-exploit-tab").forEach(P=>{P.addEventListener("click",()=>{e.querySelectorAll(".m-exploit-tab").forEach(z=>{const D=z===P;z.style.background=D?"#fff":"transparent",z.style.color=D?"#000":"#8e8e93"});const L=e.querySelector("#default-exploit-panel");L&&(L.style.display=P.dataset.exploitTab==="membre"?"":"none")})}),(T=e.querySelector("#btn-use-default-exploit"))==null||T.addEventListener("click",()=>{Z("Exploitation Jourdain sélectionnée")})}function x($,k,g){const T=document.createElement("div");T.innerHTML=`<input class="m-sheet-input" type="text" value="${(k||"").replace(/"/g,"&quot;")}" placeholder="${$}">`;const P=T.querySelector("input");ue({title:$,body:T,doneLabel:"Enregistrer",onDone:()=>{const L=P.value.trim();L&&(g(L),Z("Enregistré"))}}),setTimeout(()=>P.focus(),300)}function C($,k){const g=document.createElement("div");g.innerHTML=`
      <div style="font-size:13px;color:#636366;line-height:1.4;margin-bottom:10px">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</div>
      <input class="m-sheet-input" type="email" placeholder="Adresse email du destinataire" value="${($||"").replace(/"/g,"&quot;")}">`;const T=g.querySelector("input");ue({title:"Copie des factures",body:g,doneLabel:"Enregistrer",onDone:()=>{k(T.value.trim()),Z("Enregistré")}}),setTimeout(()=>T.focus(),300)}function j($,k,g){const T=document.createElement("div");T.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(k.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${k.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(k.ville||"").replace(/"/g,"&quot;")}">`,ue({title:$,body:T,doneLabel:"Enregistrer",onDone:()=>{g({rue:T.querySelector("#f-rue").value.trim(),cp:T.querySelector("#f-cp").value.trim(),ville:T.querySelector("#f-ville").value.trim()}),Z("Enregistré")}}),setTimeout(()=>T.querySelector("#f-rue").focus(),300)}function E(){const $=new Set(c.metiers),k=document.createElement("div"),g=()=>{k.innerHTML=As.map(T=>`
        <div class="m-sheet-option${$.has(T)?" m-sheet-option--active":""}" data-m="${T}" style="justify-content:space-between">
          <span>${T}</span>
          ${$.has(T)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),k.querySelectorAll("[data-m]").forEach(T=>{T.addEventListener("click",()=>{const P=T.dataset.m;$.has(P)?$.delete(P):$.add(P),g()})})};g(),ue({title:"Métiers",body:k,doneLabel:"Valider",onDone:()=>{c.metiers=[...$],y()}})}function w($,k,g,T){const P=document.createElement("div");P.innerHTML=k.map((z,D)=>`
      <div class="m-sheet-option${z===g?" m-sheet-option--active":""}" data-i="${D}">
        <span>${z}</span>${z===g?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const L=ue({title:$,body:P,doneLabel:"Fermer",onDone:()=>{}});P.querySelectorAll(".m-sheet-option").forEach(z=>{z.addEventListener("click",()=>{T(k[+z.dataset.i]),L.classList.remove("m-sheet-overlay--show"),setTimeout(()=>L.remove(),280),Z("Enregistré")})})}function _($,k){const g=d[$];if(!g)return;const T=document.createElement("div");T.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${g.role}</span></div>
        ${g.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${g.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${g.prenom} ${g.nom}</a>
      </div>`;const P=ue({title:`${g.prenom} ${g.nom}`,body:T,doneLabel:"Fermer",onDone:()=>{}});T.querySelector("#mem-delete").addEventListener("click",()=>{d.splice($,1),P.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{P.remove(),y(),Z("Membre retiré"),k==null||k()},280)})}function F(){let $="",g=20;function T(){if(!$)return d;const D=$.toLowerCase();return d.filter(M=>`${M.prenom} ${M.nom}`.toLowerCase().includes(D)||(M.email||"").toLowerCase().includes(D)||(M.role||"").toLowerCase().includes(D))}const P=xe(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),L=P.querySelector("#mbr-list-content");function z(){var ie;const D=T(),M=D.slice(0,g),V=D.length-M.length;L.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${D.length} membre${D.length!==1?"s":""}${$?" trouvé"+(D.length!==1?"s":""):" actif"+(D.length!==1?"s":"")}</div>
        <div class="m-list">
          ${M.length?M.map((Q,J)=>`<div class="m-list-row${J===M.length-1&&V===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${d.indexOf(Q)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${Q.prenom} ${Q.nom}</span>
                <span class="m-list-row-sub">${Q.role}${Q.email?" · "+Q.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${V>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${V} de plus</span>
            </div>`:""}
          ${D.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,L.querySelectorAll("[data-mbr-idx]").forEach(Q=>{Q.addEventListener("click",()=>_(+Q.dataset.mbrIdx,z))}),(ie=L.querySelector("#mbr-load-more"))==null||ie.addEventListener("click",()=>{g+=20,z()})}P.querySelector(".m-detail-back").addEventListener("click",fe),P.querySelector("#mbr-invite-btn").addEventListener("click",I),P.querySelector("#mbr-search").addEventListener("input",D=>{$=D.target.value,g=20,z()}),z()}function A(){const $=Es();let k="";function g(){if(!k)return $;const z=k.toLowerCase();return $.filter(D=>D.numero.toLowerCase().includes(z)||D.statut.toLowerCase().includes(z)||String(D.montant).includes(z))}const T=xe(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),P=T.querySelector("#fac-list-content");function L(){const z=g();P.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${z.length} facture${z.length!==1?"s":""}</div>
        <div class="m-list">
          ${z.length?z.map((D,M)=>{const V=D.statut==="payée"?"#30d158":"#ff9f0a",ie=D.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${M===z.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${D.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${D.numero}</span>
                <span class="m-list-row-sub">${Rt(D.dateEmission)} · ${D.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${V};flex-shrink:0;margin-right:4px">${ie}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,P.querySelectorAll("[data-fac-id]").forEach(D=>{D.addEventListener("click",()=>Z(`PDF ${D.dataset.facId} téléchargé`))})}T.querySelector(".m-detail-back").addEventListener("click",fe),T.querySelector("#fac-search").addEventListener("input",z=>{k=z.target.value,L()}),L()}function I(){const $=document.createElement("div");$.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${ll.map(k=>`<option>${k}</option>`).join("")}
      </select>`,ue({title:"Ajouter un membre",body:$,doneLabel:"Inviter",onDone:()=>{$.querySelector("#inv-email").value.trim()&&Z("Invitation envoyée")}}),setTimeout(()=>$.querySelector("#inv-email").focus(),300)}y();function q(){requestAnimationFrame(()=>setTimeout(f,100))}return{onAdd:null,refresh:q}}const ul=100,pl=["Essentiel","Plus","Expert"],ml={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function mi(e){return ml[e]||{label:e||"—",color:"#8e8e93"}}function vl(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=ye.filter(c=>c.id!==ul&&c.statut!=="inactif").map(c=>({...c})),n={...Ge,siege:{...Ge.siege},antennes:Ge.antennes.map(c=>({...c}))},o={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function a(c,r,b,f){return c.slice(r,b).map((y,h)=>{const x=r+h,C=mi(y.statut),j=y.statut==="demande en attente";return`
        <div class="m-list-row${x===f?" m-list-row--last":""} m-tappable" data-org-idx="${x}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${y.proprietaire||y.name}</span>
            <span class="m-list-row-sub">${y.name} · ${y.plan||"—"}</span>
          </div>
          ${j?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${x}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${x}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${C.color};flex-shrink:0;margin-right:4px">${C.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function s(){let c="",b=20;function f(){if(!c)return t;const C=c.toLowerCase();return t.filter(j=>(j.proprietaire||j.name||"").toLowerCase().includes(C)||(j.name||"").toLowerCase().includes(C)||(j.email||"").toLowerCase().includes(C)||(j.codeAdherent||"").toLowerCase().includes(C))}const y=xe(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),h=y.querySelector("#adh-list-content");function x(){var _;const C=f(),j=C.slice(0,b),E=C.length-j.length,w=C.filter(F=>F.statut==="actif"||F.statut==="actif en essai").length;h.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${c?C.length+" résultat"+(C.length!==1?"s":""):w+" actif"+(w!==1?"s":"")+" · "+C.length+" total"}</div>
        <div class="m-list">
          ${j.length?j.map((F,A)=>{const I=t.indexOf(F),q=mi(F.statut),S=F.statut==="demande en attente";return`
              <div class="m-list-row${A===j.length-1&&E===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${I}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${F.proprietaire||F.name}</span>
                  <span class="m-list-row-sub">${F.name} · ${F.plan||"—"}</span>
                </div>
                ${S?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${I}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${I}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${q.color};flex-shrink:0;margin-right:4px">${q.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${E>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${E} de plus</span>
            </div>`:""}
        </div>`,h.querySelectorAll("[data-lp-org-idx]").forEach(F=>{F.addEventListener("click",A=>{A.target.closest("[data-adh-action]")||m(t[+F.dataset.lpOrgIdx],+F.dataset.lpOrgIdx,x)})}),h.querySelectorAll("[data-adh-action]").forEach(F=>{F.addEventListener("click",A=>{A.stopPropagation();const I=+F.dataset.lpAdhIdx,q=F.dataset.adhAction,S=t[I];S&&(q==="valider"?(S.statut="actif",l(),x(),Z(`${S.proprietaire||S.name} validé`)):(t.splice(I,1),l(),x(),Z("Demande rejetée")))})}),(_=h.querySelector("#adh-load-more"))==null||_.addEventListener("click",()=>{b+=20,x()})}y.querySelector(".m-detail-back").addEventListener("click",fe),y.querySelector("#adh-invite-btn").addEventListener("click",v),y.querySelector("#adh-search").addEventListener("input",C=>{c=C.target.value,b=20,x()}),x()}function l(){var h;const c=t.filter(x=>x.statut!=="inactif"),r=`${n.siege.adresse}, ${n.siege.codePostal} ${n.siege.ville}`;e.innerHTML=`
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

      <div class="m-list-section-header">Adhérents — ${c.length} actifs</div>
      <div class="m-list">
        ${a(t,0,Math.min(5,t.length),t.length>5?-1:t.length-1)}
        ${t.length>5?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${t.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(x=>{x.addEventListener("click",C=>{C.target.closest("[data-adh-action]")||m(t[+x.dataset.orgIdx],+x.dataset.orgIdx)})}),(h=e.querySelector('[data-action="voir-adherents"]'))==null||h.addEventListener("click",s),e.querySelectorAll("[data-adh-action]").forEach(x=>{x.addEventListener("click",C=>{C.stopPropagation();const j=+x.dataset.adhIdx,E=x.dataset.adhAction,w=t[j];w&&(E==="valider"?(w.statut="actif",l(),Z(`${w.proprietaire||w.name} validé`)):(t.splice(j,1),l(),Z("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(x=>{x.addEventListener("click",()=>{switch(x.dataset.action){case"net-nom":p("Nom du réseau",n.nom,C=>{n.nom=C,l()});break;case"net-siege":d();break;case"net-antennes":u();break}})});const b=e.querySelector("#tog-meteo"),f=e.querySelector("#tog-sol"),y=e.querySelector("#tog-irrigation");b==null||b.addEventListener("change",()=>{o.partageMeteo=b.checked,Z("Préférence enregistrée")}),f==null||f.addEventListener("change",()=>{o.partageSol=f.checked,Z("Préférence enregistrée")}),y==null||y.addEventListener("change",()=>{o.partageIrrigation=y.checked,Z("Préférence enregistrée")})}function p(c,r,b){const f=document.createElement("div");f.innerHTML=`<input class="m-sheet-input" type="text" value="${(r||"").replace(/"/g,"&quot;")}" placeholder="${c}">`;const y=f.querySelector("input");ue({title:c,body:f,doneLabel:"Enregistrer",onDone:()=>{const h=y.value.trim();h&&(b(h),Z("Enregistré"))}}),setTimeout(()=>y.focus(),300)}function d(){const c=document.createElement("div");c.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${n.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${n.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${n.siege.ville.replace(/"/g,"&quot;")}">`,ue({title:"Adresse du siège",body:c,doneLabel:"Enregistrer",onDone:()=>{n.siege.adresse=c.querySelector("#s-rue").value.trim(),n.siege.codePostal=c.querySelector("#s-cp").value.trim(),n.siege.ville=c.querySelector("#s-ville").value.trim(),l(),Z("Enregistré")}}),setTimeout(()=>c.querySelector("#s-rue").focus(),300)}function u(){const c=document.createElement("div");(()=>{c.innerHTML=n.antennes.map((b,f)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${b.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${b.adresse}, ${b.codePostal} ${b.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${b.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),ue({title:"Antennes",body:c,doneLabel:"Fermer",onDone:()=>{}})}function m(c,r,b){var j,E;const f=mi(c.statut),y=c.statut==="invitation en attente",h=`https://app.weenat.com/invitation?code=${c.codeAdherent||"ADZ-XXX"}`,x=document.createElement("div");x.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${c.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${c.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${c.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${c.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${le.filter(w=>w.orgId===c.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const w=new Set(le.filter(_=>_.orgId===c.id).map(_=>_.id));return ce.filter(_=>w.has(_.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${f.color};font-weight:600">${f.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${c.dateAdhesion?c.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${y?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const C=ue({title:c.name,body:x,doneLabel:"Fermer",onDone:()=>{}});(j=x.querySelector("#lnk-copy"))==null||j.addEventListener("click",()=>{var w;(w=navigator.clipboard)==null||w.writeText(h).catch(()=>{}),Z("Lien copié !")}),(E=x.querySelector("#lnk-cancel"))==null||E.addEventListener("click",()=>{c.statut="inactif",C.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{C.remove(),l(),b==null||b(),Z("Invitation annulée")},280)}),x.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(r,1),C.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{C.remove(),l(),b==null||b(),Z("Adhérent supprimé")},280)})}function v(){const c=document.createElement("div");c.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${pl.map(r=>`<option>${r}</option>`).join("")}
      </select>`,ue({title:"Inviter un adhérent",body:c,doneLabel:"Envoyer",onDone:()=>{const r=c.querySelector("#adh-email").value.trim(),b=c.querySelector("#adh-code").value.trim();if(!r||!b){Z("Email et code requis");return}t.push({id:Date.now(),name:r,proprietaire:r,email:r,codeAdherent:b,plan:c.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),l(),Z("Invitation envoyée")}}),setTimeout(()=>c.querySelector("#adh-email").focus(),300)}return l(),{onAdd:v}}Cs(le);const gn=new URLSearchParams(window.location.search),vi=gn.get("role"),yn=new Set(["new","new-adherent","new-member-admin","new-member-agent","new-member-reader"]),qe=vi==="adherent"?"adherent":yn.has(vi)?vi:"admin";function xn(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}xn();setInterval(xn,1e4);const Ze=["parcelles","capteurs","dashboard","alertes","parametres"];let Ut="parcelles";function Xe(e){var i,t;!Ze.includes(e)||e===Ut||(Ut=e,document.querySelectorAll(".m-screen").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function fl(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;Bi()>0&&An()?fl(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Xe(t)}):(Bi()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Xe(t))});let We=null,Mt=null;const $n=50,Pt=document.getElementById("screen-stack");Pt.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){We=null;return}We=e.clientX,Mt=e.clientY});Pt.addEventListener("mouseup",e=>{if(We===null)return;const i=e.clientX-We,t=e.clientY-Mt;if(Math.abs(i)>$n&&Math.abs(i)>Math.abs(t)){const n=Ze.indexOf(Ut);i<0&&n<Ze.length-1&&Xe(Ze[n+1]),i>0&&n>0&&Xe(Ze[n-1])}We=null,Mt=null});Pt.addEventListener("mouseleave",()=>{We=null});Pt.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){We=null;return}We=e.touches[0].clientX,Mt=e.touches[0].clientY},{passive:!0});Pt.addEventListener("touchend",e=>{if(We===null)return;const i=e.changedTouches[0].clientX-We,t=e.changedTouches[0].clientY-Mt;if(Math.abs(i)>$n&&Math.abs(i)>Math.abs(t)){const n=Ze.indexOf(Ut);i<0&&n<Ze.length-1&&Xe(Ze[n+1]),i>0&&n>0&&Xe(Ze[n-1])}We=null},{passive:!0});const bl=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...qe==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],ei={};function wn(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=ei[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var n;return(n=window.showMobileAddPage)==null?void 0:n.call(window)})}function hl(){var i;const e=document.getElementById("param-segment");e&&(qe==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),bl.forEach((t,n)=>{const o=document.createElement("button");o.className="m-segment-btn"+(n===0?" active":""),o.textContent=t.label,o.dataset.target=t.id,o.addEventListener("click",()=>{var a,s,l;e.querySelectorAll(".m-segment-btn").forEach(p=>p.classList.remove("active")),o.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(p=>p.classList.remove("active")),(a=document.getElementById(t.id))==null||a.classList.add("active"),wn(t.id),(l=(s=ei[t.id])==null?void 0:s.refresh)==null||l.call(s)}),e.appendChild(o)}))}hl();yn.has(qe)&&eo(qe,()=>{(qe==="new"||qe==="new-adherent")&&Xe("dashboard")});Yo(document.getElementById("screen-dashboard"),qe);za(document.getElementById("screen-parcelles"),qe);ol(document.getElementById("screen-capteurs"),qe);On(document.getElementById("screen-alertes"),qe);Fn(document.getElementById("param-compte"),qe);ei["param-exploitation"]=dl(document.getElementById("param-exploitation"),qe);ei["param-reseau"]=vl(document.getElementById("param-reseau"),qe);const Ls=gn.get("parcel");if(Ls){const e=le.find(i=>i.id===+Ls);e&&(Xe("parcelles"),requestAnimationFrame(()=>{ge(()=>Promise.resolve().then(()=>nt),void 0).then(i=>i.initParcelDetail(e,[],"widgets","Parcelles"))}))}function gl(){var n;const e=qe==="admin",i=document.getElementById("phone-screen");(n=document.getElementById("m-add-modal"))==null||n.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(o=>{o.addEventListener("click",()=>{var a;t.remove(),(o.dataset.action==="note"||o.dataset.action==="traitement")&&((a=window.openJournalModal)==null||a.call(window,o.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=gl;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});wn("param-compte");export{fe as a,xe as p,ue as s};
